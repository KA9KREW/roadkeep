import Peer, { type DataConnection, type PeerError } from "peerjs";
import { createRoomId, asNetMsg, splitWire, WireReassembly, type NetMsg } from "./protocol";
import { ATTEMPT_MS, RELAY_STATUS, directAttemptMs, iceConfiguration, mintRelay, nextLinkStep } from "./ice";

const PATH_FAIL = "Could not open a path between the two networks. Try again.";
const RELAY_BLOCKED = "No relay candidate. The carrier or the relay blocked it.";
const RELAY_DOWN = "The relay did not answer. Two phones need it, because a direct path cannot open.";

export interface SkirmishEvents {
  onReady: (id: string) => void;
  onConnected: () => void;
  onMessage: (msg: NetMsg) => void;
  onStatus: (text: string) => void;
  onDirectFail: (text: string) => void;
  onDown: (text: string) => void;
  onReject: () => void;
  onPath: (kind: string) => void;
}

export class SkirmishLink {
  private peer: Peer | null = null;
  private conn: DataConnection | null = null;
  private role: "host" | "guest" = "host";
  private roomId = "";
  private opened = false;
  private closed = false;
  private stopped = false;
  private relayUsed = false;
  private minted: RTCIceServer[] | null = null;
  private directMs = ATTEMPT_MS;
  private published = false;
  private starting = false;
  private brokerDirty = false;
  private brokerTries = 0;
  private reclaimTimer = 0;
  private sawRelay = false;
  private pathLogged = false;
  private iceSeen = new Set<DataConnection>();
  private retriedId = false;
  private idRetries = 0;
  private unavailableTries = 0;
  private attemptStarted = 0;
  private lostGen = -1;
  private waitTimer = 0;
  private pingTimer = 0;
  private reopenTimer = 0;
  private pingN = 0;
  private partId = 1;
  private parts = new WireReassembly();
  private rejected = false;
  private ignored = new Set<DataConnection>();

  constructor(private events: SkirmishEvents) {
    if (typeof document !== "undefined") document.addEventListener("visibilitychange", this.onVisible);
  }

  host(roomId: string) {
    this.role = "host";
    this.roomId = roomId;
    this.begin();
  }

  join(roomId: string) {
    this.role = "guest";
    this.roomId = roomId;
    this.begin();
  }

  send(msg: NetMsg) {
    const conn = this.conn;
    if (!conn?.open) return;
    let pieces: NetMsg[];
    try {
      pieces = splitWire(msg, this.partId);
      this.partId += 1;
    } catch {
      this.rejectOnce();
      return;
    }
    if (pieces.length === 0) {
      this.rejectOnce();
      return;
    }
    for (const piece of pieces) {
      try {
        conn.send(piece);
      } catch {
        /* channel is closing */
        return;
      }
    }
  }

  close() {
    this.closed = true;
    this.stopped = true;
    if (typeof document !== "undefined") document.removeEventListener("visibilitychange", this.onVisible);
    this.clearTimers();
    this.dropQuiet();
    try {
      this.peer?.destroy();
    } catch {
      /* already gone */
    }
    this.conn = null;
    this.peer = null;
  }

  private begin() {
    this.opened = false;
    this.closed = false;
    this.stopped = false;
    this.relayUsed = false;
    this.minted = null;
    this.directMs = directAttemptMs();
    this.published = false;
    this.brokerDirty = false;
    this.brokerTries = 0;
    this.sawRelay = false;
    this.pathLogged = false;
    this.retriedId = false;
    this.idRetries = 0;
    this.unavailableTries = 0;
    this.lostGen = -1;
    this.attemptStarted = Date.now();
    this.events.onStatus("Connecting");
    void this.openRoom();
  }

  private async openRoom() {
    this.starting = true;
    const minted = await mintRelay();
    this.starting = false;
    if (this.closed || this.stopped) return;
    this.minted = minted;
    console.info(`[roadkeep] turn mint ${minted ? "ok" : "unavailable"}`);
    this.attemptStarted = Date.now();
    this.armDeadline();
    this.spawn();
  }

  private elapsed() {
    return Date.now() - this.attemptStarted;
  }

  private attemptIndex(): 0 | 1 {
    return this.relayUsed ? 1 : 0;
  }

  private windowMs() {
    return this.relayUsed ? ATTEMPT_MS : this.directMs;
  }

  private spawn() {
    const relayOnly = this.relayUsed;
    const id = this.role === "host" ? this.roomId : undefined;
    const peer = this.makePeer(id, iceConfiguration(relayOnly, this.minted));
    peer.on("open", (readyId) => {
      if (this.closed || this.stopped || this.peer !== peer) return;
      this.idRetries = 0;
      this.brokerTries = 0;
      this.published = true;
      if (this.role === "host") this.events.onReady(readyId);
      else this.connectGuest();
    });
    peer.on("disconnected", () => {
      if (this.closed || this.stopped || this.opened || this.peer !== peer) return;
      this.scheduleReclaim();
    });
    if (this.role === "host") peer.on("connection", (conn) => this.accept(conn));
  }

  private makePeer(id: string | undefined, config: RTCConfiguration) {
    this.clearReconnectTimer();
    this.dropQuiet();
    const previous = this.peer;
    this.peer = null;
    try {
      previous?.destroy();
    } catch {
      /* replacing a failed peer */
    }
    const peer = id
      ? new Peer(id, {
          host: "0.peerjs.com",
          port: 443,
          path: "/",
          secure: true,
          debug: 0,
          config,
        })
      : new Peer({
          host: "0.peerjs.com",
          port: 443,
          path: "/",
          secure: true,
          debug: 0,
          config,
        });
    this.peer = peer;
    peer.on("error", (err) => this.onPeerError(err));
    return peer;
  }

  private accept(conn: DataConnection) {
    if (this.opened || this.conn?.open) {
      conn.on("open", () => {
        try {
          conn.send({ t: "full" });
        } catch {
          /* ignore */
        }
        conn.close();
      });
      return;
    }
    this.dropQuiet();
    this.bind(conn);
  }

  private connectGuest() {
    const peer = this.peer;
    if (!peer || peer.destroyed || this.closed || this.stopped || this.opened || this.role !== "guest") return;
    this.dropQuiet();
    const conn = peer.connect(this.roomId, { reliable: true, serialization: "json" });
    this.bind(conn);
  }

  private bind(conn: DataConnection) {
    const gen = this.lostGen + 1;
    this.conn = conn;
    this.opened = false;
    conn.on("open", () => {
      if (this.closed || this.conn !== conn) return;
      this.opened = true;
      this.stopped = true;
      this.clearTimers();
      this.events.onConnected();
      this.watchIce(conn);
      void this.logSelected(conn);
      this.pingTimer = window.setInterval(() => this.ping(), 2000);
    });
    conn.on("data", (data) => {
      const msg = asNetMsg(data);
      if (!msg) {
        const kind = data && typeof data === "object" ? (data as { t?: unknown }).t : undefined;
        if (kind === "snap" || kind === "part") this.rejectOnce();
        return;
      }
      if (msg.t === "part") {
        const done = this.parts.take(msg);
        if (done === "bad") this.rejectOnce();
        else if (done) this.dispatch(done);
        return;
      }
      this.dispatch(msg);
    });
    conn.on("iceStateChanged", (state) => {
      if (this.ignored.has(conn) || this.conn !== conn) return;
      this.watchIce(conn);
      if (state === "connected" || state === "completed") void this.logSelected(conn);
      if (state === "failed") this.onTransportLost(gen);
    });
    conn.on("error", (err) => {
      if (this.ignored.has(conn) || this.conn !== conn) return;
      const kind = (err as { type?: string } | undefined)?.type;
      if (kind === "message-too-big") {
        this.rejectOnce();
        return;
      }
      if (!this.opened) this.onTransportLost(gen);
    });
    conn.on("close", () => {
      if (this.ignored.has(conn)) return;
      if (this.closed || this.conn !== conn) return;
      if (!this.opened) {
        this.onTransportLost(gen);
        return;
      }
      this.clearTimers();
      this.events.onDown("Opponent disconnected.");
    });
  }

  private onTransportLost(gen: number) {
    if (this.closed || this.stopped || this.opened || this.lostGen === gen) return;
    this.lostGen = gen;
    if (this.elapsed() + 50 >= this.windowMs()) {
      this.onDeadline();
      return;
    }
    if (this.role !== "guest") return;
    window.clearTimeout(this.reopenTimer);
    this.reopenTimer = window.setTimeout(() => {
      if (this.closed || this.stopped || this.opened) return;
      if (this.elapsed() + 50 >= this.windowMs()) this.onDeadline();
      else this.connectGuest();
    }, 700);
  }

  private onDeadline() {
    if (this.closed || this.stopped || this.opened) return;
    const step = nextLinkStep(
      {
        opened: this.opened,
        attempt: this.attemptIndex(),
        elapsedMs: this.elapsed(),
      },
      this.windowMs(),
    );
    if (step === "relay") {
      this.enterRelay();
      return;
    }
    if (step === "fail") this.failPath();
    else this.armDeadline();
  }

  /** Second attempt. nextLinkStep refuses this until the first window has elapsed. */
  private enterRelay() {
    if (this.closed || this.stopped || this.opened || this.relayUsed) return;
    if (nextLinkStep({ opened: false, attempt: 0, elapsedMs: this.elapsed() }, this.directMs) !== "relay") return;
    this.relayUsed = true;
    this.sawRelay = false;
    this.unavailableTries = 0;
    this.lostGen = -1;
    this.attemptStarted = Date.now();
    this.events.onStatus(RELAY_STATUS);
    const peer = this.peer;
    if (!peer || peer.destroyed) {
      this.armDeadline();
      this.spawn();
      return;
    }
    peer.options.config = iceConfiguration(true, this.minted);
    this.dropQuiet();
    this.armDeadline();
    if (peer.open && this.role === "guest") this.connectGuest();
  }

  private failPath() {
    if (this.closed || this.opened || this.stopped) return;
    this.stopped = true;
    this.clearTimers();
    console.info(`[roadkeep] ice failed; relay candidate ${this.sawRelay ? "yes" : "no"}; mint ${this.minted ? "yes" : "no"}`);
    const text =
      !this.minted && this.relayUsed ? RELAY_DOWN : this.relayUsed && !this.sawRelay ? RELAY_BLOCKED : PATH_FAIL;
    this.events.onDirectFail(text);
  }

  private dropQuiet() {
    const conn = this.conn;
    if (!conn) return;
    this.ignored.add(conn);
    this.conn = null;
    try {
      conn.close();
    } catch {
      /* already gone */
    }
  }

  private dispatch(msg: NetMsg) {
    if (msg.t === "part") return;
    if (msg.t === "ping") {
      this.send({ t: "pong", n: msg.n, at: msg.at });
      return;
    }
    if (msg.t === "pong") {
      this.events.onMessage(msg);
      return;
    }
    if (msg.t === "full") {
      this.events.onStatus("This match already has two players.");
      return;
    }
    this.events.onMessage(msg);
  }

  private rejectOnce() {
    if (this.rejected) return;
    this.rejected = true;
    this.events.onReject();
  }

  private ping() {
    this.pingN += 1;
    this.send({ t: "ping", n: this.pingN, at: Date.now() });
  }

  private onPeerError(err: PeerError<string>) {
    if (this.closed || this.stopped) return;
    if (err.type === "unavailable-id" && this.role === "host") {
      if (!this.published && !this.retriedId) {
        this.retriedId = true;
        this.roomId = createRoomId();
        this.attemptStarted = Date.now();
        this.events.onStatus("Connecting");
        this.armDeadline();
        this.spawn();
        return;
      }
      if (this.idRetries < 5) {
        this.idRetries += 1;
        const wait = 400 * this.idRetries;
        window.clearTimeout(this.reopenTimer);
        this.reopenTimer = window.setTimeout(() => {
          if (!this.closed && !this.stopped && !this.opened) this.spawn();
        }, wait);
        return;
      }
    }
    if (err.type === "peer-unavailable") {
      this.noteUnavailable();
      return;
    }
    if (err.type === "network" || err.type === "socket-error" || err.type === "disconnected") {
      if (!this.opened) {
        this.scheduleReclaim();
        return;
      }
      this.events.onStatus("The match broker did not answer. Try again in a moment.");
      return;
    }
    if (err.type === "server-error") {
      this.events.onStatus("The match broker did not answer. Try again in a moment.");
      return;
    }
    if (err.type === "browser-incompatible") {
      this.stopped = true;
      this.clearTimers();
      this.events.onDirectFail("This browser cannot open a direct match.");
      return;
    }
    if (err.type === "webrtc") {
      if (!this.opened) this.onTransportLost(this.lostGen + 1);
      return;
    }
    this.events.onStatus("Could not open the match connection.");
  }

  private noteUnavailable() {
    if (this.role !== "guest" || this.opened || this.stopped) return;
    this.unavailableTries += 1;
    const keepTrying = this.relayUsed || this.unavailableTries <= 4;
    if (!keepTrying) {
      this.clearTimers();
      this.stopped = true;
      this.events.onStatus("That match is not open. Ask the host for a new invite.");
      return;
    }
    window.clearTimeout(this.reopenTimer);
    this.reopenTimer = window.setTimeout(() => {
      if (this.closed || this.stopped || this.opened) return;
      if (this.elapsed() + 50 >= this.windowMs()) this.onDeadline();
      else this.connectGuest();
    }, 500);
  }

  private armDeadline() {
    window.clearTimeout(this.waitTimer);
    const remain = Math.max(0, this.windowMs() - this.elapsed());
    this.waitTimer = window.setTimeout(() => this.onDeadline(), remain);
  }

  private clearReconnectTimer() {
    window.clearTimeout(this.reopenTimer);
    this.reopenTimer = 0;
  }

  private clearTimers() {
    window.clearTimeout(this.waitTimer);
    window.clearInterval(this.pingTimer);
    window.clearTimeout(this.reclaimTimer);
    this.clearReconnectTimer();
    this.waitTimer = 0;
    this.pingTimer = 0;
    this.reclaimTimer = 0;
  }

  private onVisible = () => {
    if (typeof document === "undefined" || document.visibilityState !== "visible") return;
    if (this.closed || this.stopped || this.opened || this.starting) return;
    this.attemptStarted = Date.now();
    this.armDeadline();
    const peer = this.peer;
    if (this.brokerDirty || !peer || peer.destroyed || peer.disconnected) {
      this.brokerDirty = false;
      this.brokerTries = 0;
      this.reclaimBroker();
    }
  };

  private scheduleReclaim() {
    if (this.reclaimTimer || this.closed || this.stopped || this.opened) return;
    this.reclaimTimer = window.setTimeout(() => {
      this.reclaimTimer = 0;
      this.reclaimBroker();
    }, 50);
  }

  /** The broker socket dies when a phone freezes the tab. Reclaim the same room. */
  private reclaimBroker() {
    if (this.closed || this.stopped || this.opened || this.starting) return;
    if (typeof document !== "undefined" && document.visibilityState === "hidden") {
      this.brokerDirty = true;
      return;
    }
    if (this.brokerTries >= 6) {
      this.events.onStatus("The match broker did not answer. Stay on this screen and try again.");
      return;
    }
    this.brokerTries += 1;
    this.attemptStarted = Date.now();
    this.armDeadline();
    this.events.onStatus("Reopening the room. Stay on this screen.");
    const peer = this.peer;
    if (peer && !peer.destroyed && peer.disconnected) {
      try {
        peer.reconnect();
        return;
      } catch {
        /* the id has to be opened again */
      }
    }
    if (!peer || peer.destroyed) this.spawn();
  }

  private watchIce(conn: DataConnection) {
    if (this.iceSeen.has(conn)) return;
    const pc = conn.peerConnection;
    if (!pc) return;
    this.iceSeen.add(conn);
    pc.addEventListener("icecandidate", (ev) => {
      const candidate = ev.candidate;
      if (!candidate) {
        console.info(`[roadkeep] ice gathering done; relay candidate ${this.sawRelay ? "yes" : "no"}`);
        return;
      }
      if (candidate.type === "relay") this.sawRelay = true;
      const proto = candidate.protocol ? ` ${candidate.protocol}` : "";
      console.info(`[roadkeep] ice candidate ${candidate.type}${proto}`);
    });
  }

  private async logSelected(conn: DataConnection) {
    if (this.pathLogged || this.conn !== conn) return;
    const pc = conn.peerConnection;
    if (!pc) return;
    let kind = "unknown";
    try {
      kind = selectedCandidateType(await pc.getStats());
    } catch {
      return;
    }
    if (kind === "unknown") return;
    this.pathLogged = true;
    console.info(`[roadkeep] ice path ${kind}`);
    this.events.onPath(kind);
  }
}

function selectedCandidateType(stats: RTCStatsReport) {
  let selectedId = "";
  stats.forEach((report) => {
    if (report.type !== "transport") return;
    const row = report as RTCStats & { selectedCandidatePairId?: string };
    if (row.selectedCandidatePairId) selectedId = row.selectedCandidatePairId;
  });
  const chosen = selectedId ? stats.get(selectedId) : undefined;
  let localId = (chosen as { localCandidateId?: string } | undefined)?.localCandidateId;
  if (!localId) {
    stats.forEach((report) => {
      if (report.type !== "candidate-pair") return;
      const row = report as RTCStats & { nominated?: boolean; state?: string; localCandidateId?: string };
      if (row.nominated || row.state === "succeeded") localId = row.localCandidateId;
    });
  }
  const local = localId ? (stats.get(localId) as { candidateType?: string } | undefined) : undefined;
  return local?.candidateType || "unknown";
}

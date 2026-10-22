/**
 * Web-portal hooks. The normal site, itch embeds, and Discord invite links
 * do not set ?portal=, so they stay ad-free and never load a portal SDK.
 * GitHub Pages never loads the CrazyGames SDK, even with ?portal=crazygames.
 * CrazyGames ad APIs are not called. gameplayStart and gameplayStop run only
 * after init, and only when the SDK environment is "local" or "crazygames".
 * A failed SDK must not block play.
 */

import { isCrazyGamesHost, isGithubPagesHost } from "./crazyMode";

const POKI_SRC = "https://game-cdn.poki.com/scripts/v2/poki-sdk.js";
const CRAZY_SRC = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
const AD_WAIT_MS = 60_000;

type PortalId = "poki" | "crazygames";
type PortalEvent = "start" | "stop" | "break";

interface PokiSDKApi {
  init: () => Promise<void>;
  gameLoadingFinished: () => void;
  gameplayStart: () => void;
  gameplayStop: () => void;
  commercialBreak: (onStart?: () => void) => Promise<void>;
}

interface CrazyGamesSDK {
  init: () => Promise<void>;
  /** "local" on a dev host, "crazygames" when the portal iframe is active. */
  environment?: string;
  game: {
    gameplayStart: () => void;
    gameplayStop: () => void;
  };
}

declare global {
  interface Window {
    PokiSDK?: PokiSDKApi;
    CrazyGames?: { SDK: CrazyGamesSDK };
  }
}

interface AudioGate {
  mute: () => void;
  restore: () => void;
}

let portal: PortalId | null = null;
let ready = false;
let failed = false;
let playing = false;
/** True only after a gameplayStart call actually succeeded. */
let gameplayLive = false;
/** CrazyGames gameplay hooks are used only for environment local or crazygames. */
let gameplayHooks = false;
let audioGate: AudioGate | null = null;
let breakTask: Promise<void> = Promise.resolve();
const pending: PortalEvent[] = [];

export function bindPortalAudio(gate: AudioGate) {
  audioGate = gate;
}

export function bootPortal() {
  if (portal || failed) return;
  portal = portalFromLocation();
  if (!portal) return;
  void activate(portal);
}

export function onMatchStart() {
  if (!portal || failed || playing) return;
  playing = true;
  enqueue("start");
}

export function onReturnToTitle() {
  if (!portal || failed || !playing) return;
  playing = false;
  enqueue("stop");
}

/** Victory or defeat has returned to the menu. CrazyGames does not request an ad here. */
export function onMatchEndToMenu() {
  if (!portal || failed) return;
  if (playing) {
    playing = false;
    enqueue("stop");
  }
  if (portal === "crazygames") return;
  enqueue("break");
}

/** Runs immediately when no portal ad is in flight, so direct play is unchanged. */
export function afterPortalBreak(run: () => void) {
  if (!portal || failed) {
    run();
    return;
  }
  void withTimeout(breakTask, AD_WAIT_MS).then(run);
}

function portalFromLocation(): PortalId | null {
  if (typeof window === "undefined") return null;
  let value: string | null = null;
  try {
    value = new URLSearchParams(window.location.search).get("portal");
  } catch {
    value = null;
  }
  if (value === "poki") return "poki";
  if (isGithubPagesHost()) return null;
  if (value === "crazygames" || isCrazyGamesHost()) return "crazygames";
  return null;
}

function crazyEnvironmentAllows(sdk: CrazyGamesSDK): boolean {
  try {
    const env = sdk.environment;
    return env === "local" || env === "crazygames";
  } catch {
    return false;
  }
}

async function activate(kind: PortalId) {
  try {
    if (kind === "poki") {
      await loadScript(POKI_SRC);
      const sdk = window.PokiSDK;
      if (!sdk) throw new Error("sdk");
      await sdk.init();
      try {
        sdk.gameLoadingFinished();
      } catch {
        /* loading signal is optional if the SDK build lacks it */
      }
      gameplayHooks = true;
    } else {
      await loadScript(CRAZY_SRC);
      const sdk = window.CrazyGames?.SDK;
      if (!sdk) throw new Error("sdk");
      await sdk.init();
      gameplayHooks = crazyEnvironmentAllows(sdk);
      if (!gameplayHooks) {
        ready = true;
        pending.length = 0;
        return;
      }
    }
    ready = true;
    flush();
  } catch {
    failed = true;
    ready = false;
    playing = false;
    gameplayLive = false;
    gameplayHooks = false;
    pending.length = 0;
  }
}

function enqueue(event: PortalEvent) {
  if (!portal || failed) return;
  if (!ready) {
    pending.push(event);
    return;
  }
  dispatch(event);
}

function flush() {
  const queued = pending.splice(0, pending.length);
  for (const event of queued) dispatch(event);
}

function dispatch(event: PortalEvent) {
  if (event === "start") {
    const task = breakTask;
    void withTimeout(task, AD_WAIT_MS).then(() => {
      if (!playing) return;
      callGameplayStart();
    });
    return;
  }
  if (event === "stop") {
    callGameplayStop();
    return;
  }
  if (portal === "crazygames") return;
  breakTask = runBreak();
}

function callGameplayStart() {
  if (!playing || gameplayLive || !gameplayHooks) return;
  if (portal === "poki") {
    safe(() => {
      window.PokiSDK?.gameplayStart();
      gameplayLive = true;
    });
    return;
  }
  if (portal !== "crazygames") return;
  safe(() => {
    const sdk = window.CrazyGames?.SDK;
    if (!sdk || !crazyEnvironmentAllows(sdk)) return;
    sdk.game.gameplayStart();
    gameplayLive = true;
  });
}

function callGameplayStop() {
  if (!gameplayLive || !gameplayHooks) return;
  if (portal === "poki") {
    safe(() => {
      window.PokiSDK?.gameplayStop();
      gameplayLive = false;
    });
    return;
  }
  if (portal !== "crazygames") return;
  const sdk = window.CrazyGames?.SDK;
  if (!sdk || !crazyEnvironmentAllows(sdk)) {
    gameplayLive = false;
    return;
  }
  safe(() => {
    sdk.game.gameplayStop();
    gameplayLive = false;
  });
}

async function runBreak() {
  try {
    if (portal !== "poki") return;
    const sdk = window.PokiSDK;
    if (!sdk) return;
    await withTimeout(
      sdk.commercialBreak(() => audioGate?.mute()).catch(() => undefined),
      AD_WAIT_MS,
    );
  } catch {
    /* an unfilled or blocked ad still returns the player to the menu */
  } finally {
    audioGate?.restore();
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const found = document.querySelector(`script[src="${src}"]`);
    if (found) {
      if (found.getAttribute("data-loaded") === "1") {
        resolve();
        return;
      }
      found.addEventListener("load", () => resolve(), { once: true });
      found.addEventListener("error", () => reject(new Error("sdk")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "1");
      resolve();
    };
    script.onerror = () => reject(new Error("sdk"));
    document.head.appendChild(script);
  });
}

function withTimeout(task: Promise<unknown>, ms: number) {
  return new Promise<void>((resolve) => {
    const timer = window.setTimeout(resolve, ms);
    task.then(
      () => {
        window.clearTimeout(timer);
        resolve();
      },
      () => {
        window.clearTimeout(timer);
        resolve();
      },
    );
  });
}

function safe(fn: () => void) {
  try {
    fn();
  } catch {
    /* play anyway */
  }
}

/**
 * A quiet looping bed for a live match. Oscillators only — no downloaded audio.
 * Call after the AudioContext is running.
 */
export function createMusicBed(ctx: AudioContext): { stop: () => void } {
  const master = ctx.createGain();
  master.gain.value = 0.045;
  master.connect(ctx.destination);

  const nodes: OscillatorNode[] = [];
  const add = (freq: number, type: OscillatorType, level: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = level;
    osc.connect(gain);
    gain.connect(master);
    osc.start();
    nodes.push(osc);
    return osc;
  };

  add(146.83, "sine", 0.5);
  add(220, "sine", 0.28);
  add(293.66, "triangle", 0.1);

  const melody = add(392, "sine", 0.16);
  const notes = [392, 440, 349.23, 329.63, 293.66, 329.63, 349.23, 440];
  let step = 0;
  const advance = () => {
    if (ctx.state === "closed") return;
    const freq = notes[step % notes.length] ?? 392;
    step += 1;
    const at = ctx.currentTime;
    melody.frequency.cancelScheduledValues(at);
    melody.frequency.setValueAtTime(melody.frequency.value || freq, at);
    melody.frequency.exponentialRampToValueAtTime(freq, at + 0.12);
  };
  advance();
  const timer = window.setInterval(advance, 900);

  let stopped = false;
  return {
    stop() {
      if (stopped) return;
      stopped = true;
      window.clearInterval(timer);
      const at = ctx.currentTime;
      try {
        master.gain.cancelScheduledValues(at);
        master.gain.setValueAtTime(Math.max(0.0001, master.gain.value), at);
        master.gain.linearRampToValueAtTime(0.0001, at + 0.25);
      } catch {
        /* context already closed */
      }
      window.setTimeout(() => {
        for (const osc of nodes) {
          try {
            osc.stop();
          } catch {
            /* already stopped */
          }
        }
        try {
          master.disconnect();
        } catch {
          /* already disconnected */
        }
      }, 300);
    },
  };
}

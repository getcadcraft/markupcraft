/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — no words for people here. */
/**
 * presence-pump.js — when a Live adapter looks at what to tell the others (0.11 PERF.75). It used to ask every 33 ms for ever, which wakes the
 * page 30 times a second while nobody does anything. Now the pump asks
 *   - soon after a pointer, wheel, touch or key event (at most once per `gap` ms, so a drag is still about 30 a second), and
 *   - when the adapter says the view changed (`poke()`, called from the view's invalidate), and
 *   - every `safety` ms regardless, for the changes that raise no event (a command that starts or ends, a selection set by code).
 * `push` itself still compares with what it sent last and sends nothing when it is the same, so the others see exactly what they saw before;
 * only the delay for a change with no event is longer (at most `safety`, 250 ms, against 33 ms).
 * Byte copy in markupcraft (tools/copies/sync.mjs, group presence-pump). No imports; works with any EventTarget (tests pass their own).
 *
 *   const pump = presencePump(push, { target: document, tick: () => {…} });   pump.poke();   pump.stop();
 */
export const EVENTS = ['pointermove', 'pointerdown', 'pointerup', 'wheel', 'touchmove', 'keydown', 'keyup'];

export function presencePump(push, { target = typeof document !== 'undefined' ? document : null, gap = 33, safety = 250, tick = null, now = () => Date.now() } = {}) {
  let last = -Infinity, wait = null, stopped = false;
  const run = () => {
    wait = null;
    if (stopped) return;
    last = now();
    push();
    if (tick) tick();
  };
  const poke = () => {
    if (stopped || wait !== null) return;
    const d = Math.max(0, gap - (now() - last));
    wait = setTimeout(run, d);
  };
  const opts = { capture: true, passive: true };
  if (target) for (const e of EVENTS) target.addEventListener(e, poke, opts);
  const timer = setInterval(() => { if (wait !== null) clearTimeout(wait); run(); }, safety);   // an ask that is already waiting is this one
  return {
    poke,
    stop() {
      stopped = true;
      clearInterval(timer);
      if (wait !== null) clearTimeout(wait);
      wait = null;
      if (target) for (const e of EVENTS) target.removeEventListener(e, poke, opts);
    },
  };
}

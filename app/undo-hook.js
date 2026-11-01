/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — protocol only. */
/**
 * undo-hook.js — MarkupCraft's end of the project-level undo (0.8 round 4, EG.77; docs/spikes/EG.77_PART_4.md, part-model_PART_4). The reporter is undo-report.js
 * (byte-identical copy of public_html/assets/js/undo-report.js). Each finished step is told to the window it runs in:
 *
 *   window event 'cc-undo-report' { detail: { type: 'edit.done', data: { step, label, depth, kind } } }   (Studio's host forwards it to the channel)
 *   window.ccUndoReporter.onMessage('undo.probe' | 'undo.run', data) → the reply Studio's journal waits for   (null = not ours)
 *
 * A step is "done" when store.change leaves the undo stack deeper than before. The store's own
 * undo and redo are told too. A stack swapped under the reporter (opening a file) makes the probe say "moved" and Studio skips this window, never forces it.
 */
import { makeUndoReporter } from './undo-report.js';

export function mountUndoHook({ store, win = typeof window !== 'undefined' ? window : null }) {
  const depth = () => store.undoStack.length;
  const post = (type, data) => { try { win?.dispatchEvent(new CustomEvent('cc-undo-report', { detail: { type, data } })); } catch { /* no window */ } };
  let running = false;
  const rep = makeUndoReporter({ depth, post, undoOne: () => { running = true; try { store.undo(); } finally { running = false; } }, label: () => store.undoStack.at(-1)?.label || '' });
  let last = depth();
  const settle = () => {
    const d = depth();
    if (d > last && !running) rep.stepDone(store.undoStack.at(-1)?.label || '');
    last = d;
  };
  for (const name of ['change']) {
    const f = store[name].bind(store);
    store[name] = (...a) => { const r = f(...a); settle(); return r; };
  }
  const undo0 = store.undo.bind(store), redo0 = store.redo.bind(store);
  store.undo = (...a) => { const r = undo0(...a); last = depth(); if (r !== null && !running) rep.undone(); return r; };
  store.redo = (...a) => { const r = redo0(...a); last = depth(); if (r !== null) rep.redone(); return r; };
  if (win) win.ccUndoReporter = rep;
  return rep;
}

/* SPDX-License-Identifier: Apache-2.0 */
/**
 * textsel-ui.js — the Select text tool: pick the page's own words and copy them (0.7.1 71.10). Works on the same text Find
 * searches (the PDF's text, or the words Read text (OCR) found on a scan; textselect.js does the picking).
 *   drag from a word to a word   → the words between, in reading order (whole lines in between)
 *   drag from empty paper        → the words the box touches
 *   double-click                 → one word;  Ctrl+A → every word on the sheet;  Esc → nothing
 *   Ctrl+C / Edit › Copy         → the text on the system clipboard (lines kept)
 *
 *   installTextSelect({ view, curSheet, sheetText, status, t }) → { enter, leave, forget, down, move, up, dblclick,
 *     selectAll, copy, key, paintOver, get count }
 */

import { wordsOf, between, inBox, wordAt, selectionText } from './textselect.js';

export function installTextSelect({ view, curSheet, sheetText, status, t }) {
  let key = '', idx = null, words = [], picked = [], drag = null, loading = null;

  async function load() {
    const s = curSheet();
    if (!s) { key = ''; idx = null; words = []; picked = []; return; }
    if (s.page.key === key && idx) return;
    const k = s.page.key;
    loading = (async () => { const i = await sheetText(s); return i; })();
    const i = await loading;
    if (curSheet()?.page.key !== k) return;
    key = k; idx = i; words = wordsOf(i); picked = [];
  }
  async function enter() {
    await load();
    status(words.length ? t('seltext.hint', { n: words.length }) : t('seltext.none'));
    view.invalidate();
  }
  function leave() { picked = []; drag = null; view.invalidate(); }
  /** The sheet's text changed (OCR read it, or the file closed): read it again next time. */
  function forget(k) { if (!k || k === key) { key = ''; idx = null; words = []; picked = []; } }

  function down(p) {
    if (curSheet()?.page.key !== key) { load().then(() => view.invalidate()); return; }
    const tol = 2 / view.z;
    const on = wordAt(words, p, tol);
    drag = { a: p, on: on >= 0 };
    picked = on >= 0 ? [on] : [];
    view.invalidate();
  }
  function move(p) {
    if (!drag) return false;
    if (drag.on) picked = between(words, drag.a, p);
    else picked = inBox(words, [Math.min(drag.a[0], p[0]), Math.min(drag.a[1], p[1]), Math.max(drag.a[0], p[0]), Math.max(drag.a[1], p[1])]);
    drag.b = p;
    view.invalidate();
    return true;
  }
  function up(p) {
    if (!drag) return;
    move(p);
    drag = null;
    tell();
  }
  function dblclick(p) {
    const i = wordAt(words, p, 2 / view.z);
    picked = i >= 0 ? [i] : [];
    tell();
    view.invalidate();
  }
  function selectAll() { picked = words.map((_, i) => i); tell(); view.invalidate(); }
  function tell() { if (picked.length) status(t('seltext.picked', { n: picked.length })); }

  async function copy() {
    if (!picked.length || !idx) { status(words.length ? t('seltext.need') : t('seltext.none')); return false; }
    const text = selectionText(idx, words, picked);
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch { /* no permission: the old way */ }
    if (!ok) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.append(ta); ta.select();
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      ta.remove();
    }
    status(ok ? t('seltext.copied', { n: picked.length }) : t('seltext.copy_failed'));
    window.markupcraft && (window.markupcraft.lastTextCopy = text);   // for tests
    return ok;
  }

  /** Keys while the tool is on: → true when handled. */
  function key_(e) {
    const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
    if (mod && k === 'c') { e.preventDefault(); copy(); return true; }
    if (mod && k === 'a') { e.preventDefault(); selectAll(); return true; }
    if (e.key === 'Escape' && picked.length) { picked = []; view.invalidate(); return true; }
    return false;
  }

  function paintOver(ctx) {
    if (curSheet()?.page.key !== key) return;
    ctx.save();
    ctx.fillStyle = view.colors.action;
    ctx.globalAlpha = 0.28;
    for (const i of picked) {
      const b = words[i]?.box;
      if (!b) continue;
      const q = [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]].map((pt) => view.toScreen(pt));
      ctx.beginPath(); ctx.moveTo(q[0][0], q[0][1]); for (const [x, y] of q.slice(1)) ctx.lineTo(x, y); ctx.closePath(); ctx.fill();
    }
    if (drag && !drag.on && drag.b) {
      const a = view.toScreen(drag.a), b = view.toScreen(drag.b);
      ctx.globalAlpha = 1; ctx.strokeStyle = view.colors.action; ctx.setLineDash([4, 3]); ctx.lineWidth = 1;
      ctx.strokeRect(Math.min(a[0], b[0]) + 0.5, Math.min(a[1], b[1]) + 0.5, Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]));
    }
    ctx.restore();
  }

  return { enter, leave, forget, down, move, up, dblclick, selectAll, copy, key: key_, paintOver, get count() { return picked.length; }, get dragging() { return !!drag; } };
}

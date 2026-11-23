/* SPDX-License-Identifier: Apache-2.0 */
/**
 * keys-ui.js: markupcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountKeys(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { moveBy } from './geom.js';
import { pictureKind } from './imagestamp.js';

export function mountKeys(ctx) {
  const { ST, ui, store, view, files, cmp, curSheet, curKey, status, openFiles, saveFiles, backStack, goBack, findUi, insertPicture, printSheets, setTool, updateCursor, closeMenus, act, undo, redo, editable, deleteSelection, copySelection, cutSelection, pasteMode, paste, duplicate, selectAll, localXY, finishPoly, openSketch, arcHint, openArcValue, cancelOps, startEdit, refreshAll, refreshSelection, root } = ctx;

  // ---- keyboard ----
  const typing = (t) => t && (t.closest?.('input, textarea, select, [contenteditable="true"]') || t.isContentEditable);
  window.addEventListener('keydown', (e) => {
    if (root.querySelector('dialog[open]')) return;
    if (typing(e.target)) return;
    const k = e.key;
    if (e.target.closest?.('button, a, summary') /* i18n-ignore */ && (k.startsWith('Arrow') || k === ' ' || k === 'Enter')) return;
    const mod = e.ctrlKey || e.metaKey;
    if (k === ' ' && !mod) { if (!ST.spaceDown) { ST.spaceDown = true; updateCursor(); } e.preventDefault(); return; }
    if (ST.tool === 'content' && ctx.baseUi.key(e)) return;
    if (ST.tool === 'seltext' && ST.textSel?.key(e)) return;
    if (ST.tool === 'areacopy' && ST.areaUi?.key(e)) return;
    if (ST.lineUp && k === 'Escape') { e.preventDefault(); ST.lineUp = null; updateCursor(); view.invalidate(); status(t('lineup.cancelled')); return; }
    if (e.altKey && k === 'ArrowLeft' && backStack.length) { e.preventDefault(); goBack(); return; }
    if (mod) {
      const lk = k.toLowerCase();
      if (lk === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      else if (lk === 'y' || (lk === 'z' && e.shiftKey)) { e.preventDefault(); redo(); }
      else if (lk === 's') { e.preventDefault(); saveFiles('ask'); }
      else if (lk === 'o') { e.preventDefault(); act('open'); }
      else if (lk === 'n' && !e.shiftKey && !e.altKey) { e.preventDefault(); act('new'); }   // when the browser hands it over (Chrome keeps it in a tab; the desktop app and Studio pass it)
      else if (lk === 'p') { if (files.length) { e.preventDefault(); printSheets(); } }
      else if (lk === 'f' && findUi.box) { e.preventDefault(); findUi.box.open = true; findUi.q.focus(); findUi.q.select(); }
      else if (lk === 'a' && curSheet()) { e.preventDefault(); selectAll(); }
      else if (lk === 'x') { if (ST.sel.size) { e.preventDefault(); cutSelection(); } }
      else if (lk === 'c') { if (ST.sel.size) { e.preventDefault(); copySelection(); } }
      else if (lk === 'v') {
        // 0.6 DF.6: a picture on the system clipboard (a screenshot, a copied image) comes as a paste event; give it 80 ms,
        // else this is MarkupCraft's own paste. No preventDefault here, or the browser sends no paste event.
        const how = e.shiftKey ? 'place' : pasteMode();
        clearTimeout(ST.pasteWait);
        ST.pasteWait = setTimeout(() => { ST.pasteWait = 0; paste(how); }, 80);
        ST.pasteHow = how;
      }
      else if (lk === 'd') { e.preventDefault(); duplicate(); }
      else if (k === '0') { e.preventDefault(); view.fit('page'); }
      else if (k === '9') { e.preventDefault(); view.fit('width'); }
      else if (k === '=' || k === '+') { e.preventDefault(); view.zoomAt(1.25, view.w / 2, view.h / 2); }
      else if (k === '-') { e.preventDefault(); view.zoomAt(0.8, view.w / 2, view.h / 2); }
      return;
    }
    if (k === 'Escape') {
      if (root.querySelector('details.mc-menu[open]')) { closeMenus(); return; }
      if (ST.drag || ST.pending || cmp.aligning) { cancelOps(); status(t('canceled')); }
      else if (ST.sel.size) { ST.sel = new Set(); refreshSelection(); }
      else if (ST.tool !== 'select') setTool('select');
      return;
    }
    if (ST.pending?.kind === 'arcm' && !mod && ST.pending.arc.numeric && /^[0-9.\-]$/.test(k)) { e.preventDefault(); openArcValue(k); return; }
    if (k === 'Backspace' && ST.pending?.kind === 'arcm') { e.preventDefault(); ST.pending.arc.back(); if (!ST.pending.arc.started) ST.pending = null; else status(arcHint()); view.invalidate(); return; }
    if (/^[0-9.]$/.test(k) && !mod && (ST.pending?.kind === 'poly' || ST.pending?.kind === 'two') && store.calibrations.get(curKey())) { e.preventDefault(); openSketch(k); return; }
    if (k === 'Enter') { if (ST.pending?.kind === 'poly') { e.preventDefault(); finishPoly(); } else if (ST.sel.size === 1 && ST.tool === 'select') { const m = store.get([...ST.sel][0]); if (m && !m.locked) { e.preventDefault(); startEdit(m); } } return; }
    if (k === 'Backspace' && ST.pending?.kind === 'poly') {
      e.preventDefault();
      if (ST.pending.pts.length > 2) { ST.pending.pts.splice(ST.pending.pts.length - 2, 1); } else ST.pending = null;
      view.invalidate();
      return;
    }
    if (k === 'Delete' || k === 'Backspace') { if (ST.sel.size) { e.preventDefault(); deleteSelection(); } return; }
    if (k === 'PageDown') { e.preventDefault(); act('next'); return; }
    if (k === 'PageUp') { e.preventDefault(); act('prev'); return; }
    if (k === '+' || k === '=') { view.zoomAt(1.25, view.w / 2, view.h / 2); return; }
    if (k === '-') { view.zoomAt(0.8, view.w / 2, view.h / 2); return; }
    if (k.startsWith('Arrow') && ST.sel.size && ST.tool === 'select') {
      e.preventDefault();
      const step = (e.shiftKey ? 10 : 1) / view.z;
      const v = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[k];
      // arrows move on screen; convert to user space
      const a = view.toUser(0, 0), b = view.toUser(v[0] * step * view.z, v[1] * step * view.z);
      const d = [b[0] - a[0], b[1] - a[1]];
      const list = editable();
      if (list.length) { store.change(t('undo.nudge'), (tx) => { for (const m of list) tx.update(m.id, moveBy(m, d[0], d[1])); }); refreshAll(); }
      return;
    }
    if (k.startsWith('Arrow') && view.page) {
      e.preventDefault();
      const v = { ArrowLeft: [60, 0], ArrowRight: [-60, 0], ArrowUp: [0, 60], ArrowDown: [0, -60] }[k];
      view.panBy(v[0], v[1]);
      return;
    }
    const lk = k.toLowerCase();
    if (lk === 'c' && e.shiftKey) { ST.toolPreset = null; setTool('cloud'); return; }
    if (lk === 'h' && e.shiftKey && !e.altKey) { ST.notesUi?.toggle(); return; }   // 0.9 NOTES.1
    if (ctx.KEYS[lk] && !e.altKey) { ST.toolPreset = null; setTool(ctx.KEYS[lk]); }
  });
  window.addEventListener('keyup', (e) => { if (e.key === ' ') { ST.spaceDown = false; updateCursor(); } });
  window.addEventListener('blur', () => { ST.spaceDown = false; updateCursor(); });

  // ---- drop files ----
  ST.dragDepth = 0;
  ui.stage.addEventListener('dragenter', (e) => { if ([...(e.dataTransfer?.types || [])].includes('Files')) { e.preventDefault(); ST.dragDepth++; ui.drop.hidden = false; } });
  ui.stage.addEventListener('dragover', (e) => { if ([...(e.dataTransfer?.types || [])].includes('Files')) e.preventDefault(); });
  ui.stage.addEventListener('dragleave', () => { ST.dragDepth = Math.max(0, ST.dragDepth - 1); if (!ST.dragDepth) ui.drop.hidden = true; });
  ui.stage.addEventListener('drop', (e) => {
    e.preventDefault(); ST.dragDepth = 0; ui.drop.hidden = true;
    const list = [...(e.dataTransfer?.files || [])];
    // 0.7.1 71.7: a picture (PNG, JPEG, SVG) dropped on an open sheet becomes a picture markup where it lands; PDFs open
    const pics = curSheet() ? list.filter((f) => ['png', 'jpeg', 'svg'].includes(pictureKind(f.name, f.type))) : [];
    const pdfs = list.filter((f) => !pics.includes(f));
    if (pics.length) {
      const [x, y] = localXY(e);
      (async () => { for (const [i, f] of pics.entries()) await insertPicture(f, [x + i * 24, y + i * 24]); })();
    }
    if (pdfs.length) openFiles(pdfs);
  });

  return { typing };
}

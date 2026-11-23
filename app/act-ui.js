/* SPDX-License-Identifier: Apache-2.0 */
/**
 * act-ui.js: markupcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountActions(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { exportChest } from './chest.js';

export function mountActions(ctx) {
  const { ST, ui, view, files, cmp, curSheet, status, askAuthor, host, PDF_TYPES, dl, openHostFiles, closeSet, saveFiles, pagesOp, newBlank, cloudFound, batchLinks, saveFlat, saveClean, insertPicture, printSheets, goTo, renderNav, renderZoom, scrollMode, setPageMode, clientReview, setTool, startCompare, renameSheet, refreshSelection, root } = ctx;

  // ---- toolbar actions ----
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b || !root.contains(b)) return;
    closeMenus();
    act(b.dataset.act, b);
  });
  // 0.7 WS.10: a workspace layout may put the app's own buttons (the status bar's scale and name) above or below <main>
  document.addEventListener('click', (e) => {
    const b = e.target.closest?.('.ws-top [data-act], .ws-bottom [data-act]');
    if (b && !root.contains(b)) { closeMenus(); act(b.dataset.act, b); }
  });
  // the toolbar's More menu: closes on a choice, a click elsewhere or Esc
  function closeMenus() { for (const d of root.querySelectorAll('details.mc-menu[open]')) d.open = false; }
  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.mc-menu[open]')) if (!d.contains(e.target)) d.open = false; });
  // A menu hangs from its button's right edge; near the window's left edge (File › Pages, or wherever Arrange put it)
  // that runs off screen, so it hangs from the left edge instead. Phones (fixed, full width) are left alone.
  function keepMenuOnScreen(d) {
    const list = d.querySelector('.mc-menu-list');
    if (!list) return;
    list.style.left = list.style.right = '';
    if (!d.open || getComputedStyle(list).position === 'fixed') return;
    const r = list.getBoundingClientRect();
    if (r.left < 8) { list.style.left = '0'; list.style.right = 'auto'; }
  }
  for (const d of root.querySelectorAll('details.mc-menu')) {
    d.addEventListener('toggle', () => keepMenuOnScreen(d));
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && d.open) { e.preventDefault(); e.stopPropagation(); d.open = false; d.querySelector('summary').focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && d.open) {
        const items = [...d.querySelectorAll('[role="menuitem"]:not(:disabled)')];
        if (!items.length) return;
        e.preventDefault(); e.stopPropagation();
        const i = items.indexOf(document.activeElement);
        items[(i < 0 ? (e.key === 'ArrowDown' ? 0 : -1) : i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
      }
    });
  }
  // PERF.78 (perf-finish-11 r2): the toolbar / menu commands as one table (was a switch of 72 cases). Each entry does what its case did;
  // only Save as stamp waits for anything (as the case's own await did), so act() resolves when it did before. No prototype keys.
  const ACTS = { __proto__: null,
    'new': () => { newBlank(); },
    'open': () => { if (host.kind === 'desktop') host.openFile({ types: PDF_TYPES, multiple: true }).then(openHostFiles); else ui.file.click(); },
    'save': () => { saveFiles('ask'); },
    'close': () => { closeSet(); },
    'print': () => { printSheets(); },
    'print-pages': () => { printSheets(true); },
    'client-review': () => { clientReview.open(); },
    'ocr': () => { ST.ocrUi?.run(); },
    'find-cloud': () => { cloudFound(); },
    'auto-link': () => { batchLinks(); },
    'batch-links': () => { batchLinks(); },
    'save-flat': () => { saveFlat(); },
    'save-clean': () => { saveClean(); },
    'notes-toggle': () => { ST.notesUi?.toggle(); },
    'slip-sheet': () => { if (files.length) ui.slipFile.click(); else status(t('slip.need_old')); },
    'page-rotate-cw': (a) => { pagesOp(a); },
    'page-rotate-ccw': (a) => { pagesOp(a); },
    'page-move-up': (a) => { pagesOp(a); },
    'page-move-down': (a) => { pagesOp(a); },
    'page-insert-pdf': (a) => { pagesOp(a); },
    'page-insert-blank': (a) => { pagesOp(a); },
    'page-add-blank': (a) => { pagesOp(a); },
    'page-delete': (a) => { pagesOp(a); },
    'page-extract': (a) => { pagesOp(a); },
    'undo': () => { ctx.undo(); },
    'redo': () => { ctx.redo(); },
    'delete': () => { ctx.deleteSelection(); },
    'clean-pen': () => { ctx.cleanPenMarkups(); },
    'cut': () => { ctx.cutSelection(); },
    'copy': () => { ctx.copySelection(); },
    'paste': () => { ctx.paste('offset'); },
    'paste-in-place': () => { ctx.paste('place'); },
    'paste-picture': () => { ctx.pastePictureMenu(); },
    'insert-picture': () => { insertPicture(); },
    'save-stamp': async () => { if (ST.tool === 'content') { const cc = await ctx.baseUi.copy(); if (cc) ctx.saveStamp({ content: cc }); } else ctx.saveStamp(); },
    'duplicate': () => { ctx.duplicate(); },
    'select-all': () => { ctx.selectAll(); },
    'seltext': () => { setTool('seltext'); }, // 0.7.1 71.10: Select text (Edit › More)
    'copy-area': () => { setTool('areacopy'); }, // 0.8 D8.15: Copy area (Edit › More)
    'line-up': () => { ctx.startLineUp(); }, // 0.8 D8.15: a picture or overlay lined up with two points
    'select-none': () => { if (ST.tool === 'content') ctx.baseUi.select([]); else if (ST.sel.size) { ST.sel = new Set(); refreshSelection(); } },
    'prev': () => { if (ST.cur > 0) goTo(ST.cur - 1); },
    'next': () => { if (ST.cur < ST.sheets.length - 1) goTo(ST.cur + 1); },
    'page-mode': () => { setPageMode(scrollMode() ? 'tabs' : 'scroll'); },
    'zoom-in': () => { view.zoomAt(1.25, view.w / 2, view.h / 2); },
    'zoom-out': () => { view.zoomAt(0.8, view.w / 2, view.h / 2); },
    'fit-page': () => { view.fit('page'); },
    'fit-width': () => { view.fit('width'); },
    'view-cw': (a) => { if (view.page) { view.setExtraRot((view.extraRot || 0) + (a === 'view-cw' ? 90 : -90)); status(view.extraRot ? t('view.rotated', { n: view.extraRot }) : t('view.rotated.none')); renderNav(); } },
    'view-ccw': (a) => { if (view.page) { view.setExtraRot((view.extraRot || 0) + (a === 'view-cw' ? 90 : -90)); status(view.extraRot ? t('view.rotated', { n: view.extraRot }) : t('view.rotated.none')); renderNav(); } },
    'calibrate': () => { if (curSheet()) ctx.calibrateDialog(null); else status(t('need.pdf')); },
    'author': () => { askAuthor(true); },
    'list-csv': () => { ctx.exportListCsv(); },
    'list-bcf': () => { ctx.exportBcf(); },
    'list-xlsx': () => { ctx.exportSummary('xlsx'); },
    'list-columns': () => { ctx.editColumns(); },
    'legend-add': () => { ctx.addLegend(); },
    'list-bcf-import': () => { ui.bcfFile.click(); },
    'list-pdf': () => { ctx.exportSummary('pdf'); },
    'sheet-rename': () => { renameSheet(); },
    'punch-csv': () => { ctx.exportPunchCsv(); },
    'punch-add': () => { ctx.addToPunch(); },
    'chest-save': () => { ctx.saveToChest(); },
    'chest-import': () => { ui.chestFile.click(); },
    'chest-export': () => { dl(exportChest(ST.chest), t('chest.file') + '.json', 'application/json'); status(t('chest.exported', { n: ST.chest.length })); },
    'compare': () => { startCompare(); },
    'compare-stop': () => { ctx.stopCompare(); },
    'compare-align': () => { ctx.startAlign(); },
    'compare-cloud': () => { ctx.cloudChanges(); },
    'set-compare': () => { ctx.compareSets(); },
    'set-cloud': () => { ctx.cloudSet(); },
    'compare-reset': () => { cmp.dx = 0; cmp.dy = 0; cmp.fit = null; ctx.applyCompare(); },
  };
  async function act(a) {
    const f = ACTS[a];
    if (f) await f(a);
  }

  ui.zoom.addEventListener('change', () => {
    const v = parseFloat(ui.zoom.value);
    if (Number.isFinite(v) && v > 0) view.setPercent(v);
    renderZoom();
  });
  ui.zoom.addEventListener('focus', () => ui.zoom.select());
  ui.zoom.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ui.zoom.blur(); ui.over.focus(); } });

  return { closeMenus, act };
}

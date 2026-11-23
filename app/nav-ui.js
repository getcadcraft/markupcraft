/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nav-ui.js: markupcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountNav(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { displayOf } from './geom.js';

export function mountNav(mc) {
  const { ST, findAll, ui, store, view, files, viewStates, settings, cmp, saveSettings, curSheet, curKey, envOf, status, renderCompareSelects, refreshAll } = mc;

  // ---- sheets ----
  function rebuildSheets() {
    ST.sheets = [];
    for (const f of files) for (const page of f.pages) ST.sheets.push({ file: f, page });
    if (ST.cur >= ST.sheets.length) ST.cur = ST.sheets.length - 1;
    mc.renderSheets();
    renderCompareSelects();
    mc.renderSetSelects();
    mc.renderBookmarks();
    ui.hint.hidden = ST.sheets.length > 0;
  }

  async function goTo(i, { keepSelection = false } = {}) {
    if (i < 0 || i >= ST.sheets.length) return;
    // Scroll mode: a page of the file already in the column is scrolled to (view.onActivate makes it the open sheet)
    if (view.strip && !cmp.on && ST.sheets[i].file === curSheet()?.file) {
      mc.commitEdit();
      mc.cancelOps();
      if (await view.stripGo(ST.sheets[i].page.index)) { if (ST.cur !== i) view.onActivate?.(ST.sheets[i].page); return; }
    }
    mc.commitEdit();
    mc.cancelOps();
    if (cmp.on && ST.sheets[i].page.key !== cmp.newKey) mc.stopCompare();
    const prev = curSheet();
    if (prev && view.page) viewStates.set(prev.page.key, { z: view.z, ox: view.ox, oy: view.oy, extraRot: view.extraRot || 0 });
    ST.cur = i;
    if (!keepSelection) ST.sel = new Set();
    const s = ST.sheets[i];
    const proxy = await s.file.doc.getPage(s.page.index + 1);
    if (ST.cur !== i) return;
    const vs = viewStates.get(s.page.key);
    const p = view.setPage(s.page, proxy, { keepView: !!vs, extraRot: vs?.extraRot || 0 });
    if (window.markupcraftProblems?.state.render[s.page.key]) { delete window.markupcraftProblems.state.render[s.page.key]; ST.problemsPush(); }   // drawn again: the next failure, if any, comes from onFail
    if (vs) { view.z = vs.z; view.ox = vs.ox; view.oy = vs.oy; view.update(); }
    await p;
    applyStrip();
    renderNav();
    mc.renderBookmarks();
    mc.markCurrentSheet();
    refreshAll();
  }

  function renderNav() {
    const s = curSheet();
    ui.sheetLabel.textContent = s ? t('nav.label.sheet', { i: ST.cur + 1, n: ST.sheets.length, title: s.page.title }) : t('nav.none');
    ui.sheetLabel.title = s ? t('sheet.file_page', { file: s.file.name, page: s.page.index + 1 }) : '';
    const cal = s ? store.calibrations.get(s.page.key) : null;
    ui.scale.textContent = s ? (cal ? cal.label : t('status.scale.none')) : t('status.scale.no_sheet');
    renderZoom();
  }
  function renderZoom() { if (document.activeElement !== ui.zoom) ui.zoom.value = view.page ? Math.round(view.percent) + '%' : '100%'; }
  view.onView = () => { renderZoom(); mc.positionEditor(); ST.formUi?.position(); };

  // ---- Scroll mode (0.8): the open file's pages in one column; Tabs = one page at a time, as before ----
  const scrollMode = () => settings.pageMode === 'scroll';
  /** The column for the open sheet's file (Scroll mode), or none. */
  function applyStrip() {
    const s = curSheet();
    if (!s || !scrollMode() || cmp.on || s.file.pages.length < 2) { if (view.strip) view.setStrip(null); return; }
    if (view.strip && view.strip.items[view.strip.at]?.page === s.page && view.strip.items[0]?.page === s.file.pages[0]) return;
    const f = s.file;
    view.setStrip(f.pages.map((page) => ({ page, load: () => f.doc.getPage(page.index + 1) })), s.page.index);
  }
  function setPageMode(mode) {
    settings.pageMode = mode === 'scroll' ? 'scroll' : 'tabs';
    saveSettings();
    showPageMode();
    applyStrip();
    status(t(scrollMode() ? 'pagemode.scroll.on' : 'pagemode.tabs.on'));
    ST.wsSoon();
  }
  function showPageMode() {
    for (const b of findAll('[data-act="page-mode"]')) {
      b.setAttribute('aria-pressed', String(scrollMode()));
      b.title = t(scrollMode() ? 'nav.page_mode.scroll.title' : 'nav.page_mode.tabs.title');
    }
  }
  // the page in the middle of the stage (or the one pressed on) is the open sheet: tools, the panels and the sheets list follow it
  view.onActivate = (page) => {
    const i = ST.sheets.findIndex((s) => s.page === page);
    if (i < 0 || i === ST.cur) return;
    ST.cur = i;
    ST.sel = new Set(); ST.hoverId = null;
    renderNav(); mc.markCurrentSheet(); mc.renderBookmarks(); refreshAll(); ST.formUi?.render();
  };
  view.lockActive = () => !!ST.drag || !!ST.pending || !!ST.editing || cmp.on;
  view.onBaseOther = (ctx, v, page, S) => {
    for (const m of store.everyOn(page.key)) { if (m.type === 'foreign' || !store.shown(m)) continue; v.paint(ctx, displayOf(m, envOf(m)).list, { S }); }
    ST.formUi?.paint(ctx, page, S);
  };
  // a page pdf.js could not draw says so on the sheet and in the status line, never a silent blank (0.7.1, blank-page reports)
  view.onNotice = (kind, f) => (kind !== 'failed' ? t('render.drawing') : f?.kind === 'image' ? t('render.image_failed.sheet', { n: f.n, total: f.total }) : t('render.failed.sheet', { reason: (f?.message || '').slice(0, 120) }));
  view.onFail = (f) => { const st = window.markupcraftProblems?.state; if (st && curKey()) { st.render[curKey()] = { kind: f?.kind, n: f?.n, total: f?.total, message: String(f?.message || '').slice(0, 200) }; ST.problemsPush(); } status(f?.kind === 'image' ? t('render.image_failed', { sheet: curSheet()?.page.title || '', n: f.n }) : t('render.failed', { sheet: curSheet()?.page.title || '', reason: f?.message || '' })); };

  return { rebuildSheets, goTo, renderNav, renderZoom, scrollMode, applyStrip, setPageMode, showPageMode };
}

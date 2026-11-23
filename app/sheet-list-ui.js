/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet-list-ui.js: markupcraft.js's 12 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSheetList(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { pageSize, groupBySize, sizeText } from './pagesize.js';
import { t } from './i18n.js';
import { SheetWindow } from './sheetlist.js';
import { el } from './ui-util.js';

export function mountSheetList(ctx) {
  const { ST, ui, store, status, goTo, thumbQueue, thumbObserver, root } = ctx;

  // ---- page sizes (0.10 SU.1805): mm and inches with the nearest named paper size, once per page
  const sizeCache = new WeakMap();
  /** The size of a page as shown: { wMm, hMm, wIn, hIn, orient, name, custom, ... } (pagesize.js). A turned page swaps its sides. */
  function sizeOf(pg) {
    let z = sizeCache.get(pg);
    if (!z) {
      const turned = pg.rotate % 180;
      z = pageSize({ width: turned ? pg.height : pg.width, height: turned ? pg.width : pg.height, userUnit: pg.userUnit || 1 });
      sizeCache.set(pg, z);
    }
    return z;
  }
  /** "A1" or "custom" for a size. */
  const sizeName = (z) => z.name || t('psize.custom');
  /** "A1 landscape" or "custom, portrait". */
  const sizeNameOrient = (z) => t('psize.named', { name: sizeName(z), orient: t('psize.orient.' + z.orient) });
  ST.bySize = false;
  /** The open set's pages grouped by size: [{ id, name, wMm, hMm, keys, odd }] (biggest group first). */
  const sizeGroups = () => groupBySize(ST.sheets.map((s) => ({ key: s.page.key, info: sizeOf(s.page) })));
  // The sheet list is windowed (0.10 PERF.35): a 2,000-sheet set draws the rows near the view, not 2,000 rows and canvases.
  const sheetWin = new SheetWindow({ list: ui.sheets, estimate: (e) => (e.group ? 30 : 78), renderRow: (e) => (e.group ? groupRow(e.group) : sheetListRow(e.i)), onDrop: (li) => { const c = li.querySelector('canvas'); if (c) thumbObserver.unobserve(c); } });
  function groupRow(gz) {
    return el('li', { className: 'mc-sheet-group' + (gz.odd ? ' is-odd' : ''), dataset: { sizeGroup: gz.id } },
      el('span', { className: 'mc-sheet-group-name' }, gz.name || t('psize.custom')),
      el('span', { className: 'mc-sheet-group-mm' }, sizeText({ wMm: gz.wMm, hMm: gz.hMm, wIn: gz.wMm / 25.4, hIn: gz.hMm / 25.4 })),
      el('span', { className: 'mc-sheet-group-n' }, t('psize.group.n', { n: gz.keys.length })),
      gz.odd ? el('span', { className: 'mc-sheet-group-odd' }, t('psize.odd')) : null);
  }
  function sheetListRow(i) {
    const s = ST.sheets[i];
    const count = store.onSheet(s.page.key).length;
    const canvas = el('canvas', { className: 'mc-thumb', dataset: { key: s.page.key }, 'aria-hidden': 'true' });
    const btn = el('button', { type: 'button', className: 'mc-sheet', dataset: { i: String(i) }, 'aria-current': i === ST.cur ? 'true' : 'false' },
      el('span', { className: 'mc-thumb-box' }, canvas),
      el('span', { className: 'mc-sheet-text' },
        el('span', { className: 'mc-sheet-title' }, s.page.title),
        el('span', { className: 'mc-sheet-meta' }, s.page.sheetNo && s.page.sheetNo !== s.page.title ? t('sheet.number', { n: s.page.sheetNo }) : t('sheet.file_page', { file: s.file.name, page: s.page.index + 1 })),
        el('span', { className: 'mc-sheet-size', title: sizeText(sizeOf(s.page)) }, sizeName(sizeOf(s.page)) + ' · ' + sizeText(sizeOf(s.page)).replace(/ \(.*/, '')),
        count ? el('span', { className: 'mc-sheet-count' }, t('save.markups', { n: count })) : null));
    btn.addEventListener('click', () => goTo(i));
    thumbObserver.observe(canvas);
    return el('li', { dataset: { i: String(i) } }, btn);
  }
  ST.rowOf = new Map();   // sheet index → its place in the list (a row number), for reveal
  function renderSheets() {
    const q = ui.sheetSearch.value.trim().toLowerCase();
    let shown = 0;
    // by size: the pages listed under one heading per size, the biggest group first; the other groups are marked as the odd ones out
    const groups = ST.bySize ? sizeGroups() : null;
    const groupOf = groups ? new Map(groups.flatMap((g) => g.keys.map((k) => [k, g]))) : null;
    const order = groups ? ST.sheets.map((s, i) => i).sort((a, b) => groups.indexOf(groupOf.get(ST.sheets[a].page.key)) - groups.indexOf(groupOf.get(ST.sheets[b].page.key)) || a - b) : ST.sheets.map((s, i) => i);
    let lastGroup = null;
    const entries = [];
    ST.rowOf = new Map();
    for (const i of order) {
      const s = ST.sheets[i];
      if (q && !(s.page.title + ' ' + s.page.sheetNo + ' ' + s.file.name).toLowerCase().includes(q)) continue;
      shown++;
      if (groups && groupOf.get(s.page.key) !== lastGroup) { lastGroup = groupOf.get(s.page.key); entries.push({ id: 'g:' + lastGroup.id, group: lastGroup }); }
      ST.rowOf.set(i, entries.length);
      entries.push({ id: s.page.key, i });
    }
    thumbQueue.length = 0;
    sheetWin.set(entries);
    ui.sheetsEmpty.hidden = ST.sheets.length > 0;
    ui.sheetsEmpty.textContent = ST.sheets.length ? '' : t('sheets.empty');
    ui.sheetCount.textContent = ST.sheets.length ? (q ? t('sheets.shown', { shown, n: ST.sheets.length }) : String(ST.sheets.length)) : '';
    if (q && !shown && ST.sheets.length) { ui.sheetsEmpty.hidden = false; ui.sheetsEmpty.textContent = t('sheets.no_match', { q: ui.sheetSearch.value.trim() }); }
  }
  /** The open sheet's row marked (two buttons change, not the list), and scrolled into the panel's view. */
  function markCurrentSheet() {
    for (const b of ui.sheets.querySelectorAll('.mc-sheet[aria-current="true"]')) if (+b.dataset.i !== ST.cur) b.setAttribute('aria-current', 'false');
    if (ST.rowOf.has(ST.cur)) sheetWin.reveal(ST.rowOf.get(ST.cur));
    ui.sheets.querySelector('.mc-sheet[data-i="' + ST.cur + '"]')?.setAttribute('aria-current', 'true');
  }
  function refreshSheetCounts() {
    for (const b of ui.sheets.querySelectorAll('.mc-sheet')) {
      const s = ST.sheets[+b.dataset.i];
      if (!s) continue;
      const count = store.onSheet(s.page.key).length;
      let chip = b.querySelector('.mc-sheet-count');
      if (!count) { chip?.remove(); continue; }
      if (!chip) { chip = el('span', { className: 'mc-sheet-count' }); b.querySelector('.mc-sheet-text').append(chip); }
      chip.textContent = t('save.markups', { n: count });
    }
  }
  ui.sheetSearch.addEventListener('input', renderSheets);
  const bySizeBtn = root.querySelector('[data-sheets-by-size]');
  bySizeBtn?.addEventListener('click', () => {
    ST.bySize = !ST.bySize;
    bySizeBtn.setAttribute('aria-pressed', String(ST.bySize));
    renderSheets();
    status(ST.bySize ? t('psize.by.on', { n: sizeGroups().length }) : t('psize.by.off'));
  });
  ui.sheetSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { const first = ui.sheets.querySelector('.mc-sheet'); if (first) { e.preventDefault(); goTo(+first.dataset.i); } }
  });

  return { sizeOf, sizeName, sizeNameOrient, sizeGroups, renderSheets, markCurrentSheet, refreshSheetCounts };
}

/* SPDX-License-Identifier: Apache-2.0 */
/**
 * list-export-ui.js: markupcraft.js's 11 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountListExport(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { markupRows, toCsv } from './csv.js';
import { columnsNow } from './addons/markupcraft-api.js';
import { frame, bytes as fmtBytes } from './ui-util.js';
import { readBcf, planImport } from './bcf-read.js';
import { guidFor, buildBcf } from './bcf.js';
import { makeMarkup } from './model.js';
import { sizeText } from './pagesize.js';
import { writeXlsx } from './xlsx.js';
import { summarySheets, summaryPdf } from './summary.js';
import { boundsOf, displayOf } from './geom.js';
import { buildRedline, redlineFileName } from './redline.js';
import { buildSidecar, sidecarText, readSidecar, applySidecar } from './sidecar.js';

export function mountListExport(ctx) {
  const { ui, store, view, files, filters, curKey, sheetByKey, envOf, styleFor, status, busy, pdfLib, ask, dl, sizeOf, sizeName, sizeGroups, hasSpaces, markupSpace, cancelOps, commitEdit, valueOf, filteredMarkups, sheetOrder, refreshAll } = ctx;

  function exportListCsv() {
    const list = filteredMarkups().sort((a, b) => sheetOrder(a) - sheetOrder(b));
    if (!list.length) { status(t('export.none')); return; }
    const rows = markupRows(list, (m) => { const s = sheetByKey(m.sheet); return s ? { title: s.page.title, file: s.file.name, page: s.page.index + 1 } : null; },
      (m) => valueOf(m), hasSpaces() ? markupSpace : null, [...store.columns, ...columnsNow()]);
    dl(toCsv(rows), t('export.list.file', { set: setName() }) + '.csv', 'text/csv');
    status(t('export.csv.done', { n: list.length }));
  }

  async function importBcf(file) {
    if (!ctx.sheets.length) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    busy(t('bcfin.busy')); await frame();
    try {
      let bcf;
      try { bcf = await readBcf(new Uint8Array(await file.arrayBuffer())); } catch { throw new Error(t('bcfin.bad', { file: file.name })); }
      if (!bcf.topics.length) throw new Error(t('bcfin.empty', { file: file.name }));
      const all = store.all();
      const guidOf = new Map(), replyGuids = new Set();
      for (const m of all) {
        guidOf.set(await guidFor('topic:' + m.id), m.id);
        for (const r of m.replies || []) { replyGuids.add(await guidFor('comment:' + m.id + ':' + r.id)); if (/^bcf-/.test(r.id)) replyGuids.add(r.id.slice(4)); }
      }
      const plan = planImport(bcf, { markups: all, guidOf, replyGuids, current: curKey(), author: ctx.author,
        sheets: ctx.sheets.map((s) => ({ key: s.page.key, title: s.page.title, sheetNo: s.page.sheetNo, file: s.file.name, view: s.page.view })) });
      if (!plan.updates.length && !plan.adds.length) { status(t('bcfin.nothing', { n: bcf.topics.length })); return; }
      const made = store.change(t('undo.bcfin'), (tx) => {
        for (const u of plan.updates) tx.update(u.id, u.patch);
        return plan.adds.map((a) => tx.add(makeMarkup({ ...a, style: styleFor('note') })));
      });
      ctx.sel = new Set(made.filter((m) => m.sheet === curKey()).map((m) => m.id));
      const parts = [t('bcfin.done', { file: file.name, n: bcf.topics.length })];
      if (plan.matched) parts.push(t('bcfin.matched', { n: plan.matched }));
      if (plan.added) parts.push(t('bcfin.added', { n: plan.added }));
      if (plan.replies) parts.push(t('bcfin.replies', { n: plan.replies }));
      if (plan.unplaced) parts.push(t('bcfin.unplaced', { n: plan.unplaced }));
      if (bcf.skipped) parts.push(t('bcfin.skipped', { n: bcf.skipped }));
      status(parts.join(' '));
      refreshAll();
    } catch (e) {
      busy('');
      await ask(t('bcfin.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    } finally { busy(''); }
  }

  /** The markup summary (0.4 K6): the listed markups as a workbook (every markup, per sheet, punch list) or a PDF report. */
  const listSheetOf = (m) => { const s = sheetByKey(m.sheet); return s ? { title: s.page.title, file: s.file.name, page: s.page.index + 1, size: sizeName(sizeOf(s.page)), sizeMm: sizeText(sizeOf(s.page)) } : null; };
  /** Every page of the open set with its size and group (the summary's "Page sizes" sheet; 0.10 SU.1805). */
  function pageSizeRows() {
    const groups = sizeGroups(), groupOf = new Map(groups.flatMap((g) => g.keys.map((k) => [k, g])));
    return ctx.sheets.map((s) => { const z = sizeOf(s.page), g = groupOf.get(s.page.key); return { title: s.page.title, file: s.file.name, page: s.page.index + 1, size: sizeName(z), mm: sizeText(z), orient: t('psize.orient.' + z.orient), wMm: Math.round(z.wMm * 10) / 10, hMm: Math.round(z.hMm * 10) / 10, odd: !!g?.odd, group: g?.keys.length || 0 }; });
  }
  async function exportSummary(kind) {
    const list = filteredMarkups().sort((a, b) => sheetOrder(a) - sheetOrder(b));
    if (!list.length) { status(t('export.none')); return; }
    const name = t('sum.file', { set: setName() });
    try {
      if (kind === 'xlsx') {
        const bytes = await writeXlsx(summarySheets(list, { sheetOf: listSheetOf, pages: pageSizeRows(), measureOf: valueOf, spaceOf: hasSpaces() ? markupSpace : null, columns: [...store.columns, ...columnsNow()] }), { title: name });
        dl(bytes, name + '.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        status(t('sum.saved.xlsx', { n: list.length, file: name + '.xlsx' }));
      } else {
        busy(t('save.loading')); await frame();
        const { bytes, missing, pages } = await summaryPdf(await pdfLib(), list, { sheetOf: listSheetOf, pages: pageSizeRows(), measureOf: valueOf, title: t('sum.title') + ': ' + setName() });
        dl(bytes, name + '.pdf', 'application/pdf');
        status(t('sum.saved.pdf', { n: list.length, file: name + '.pdf', pages }) + (missing ? t('sum.missing', { n: missing }) : ''));
      }
    } catch (e) {
      await ask(t('sum.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    } finally { busy(''); }
  }

  /** BCF 2.1: one topic per markup in the list (as filtered), each with a snapshot of its part of the sheet. */
  async function exportBcf() {
    const list = filteredMarkups().sort((a, b) => sheetOrder(a) - sheetOrder(b));
    if (!list.length) { status(t('export.none')); return; }
    const filtered = Object.values(filters).some(Boolean);
    busy(t('bcf.busy'));
    await frame();
    try {
      const topics = [];
      let i = 0;
      for (const m of list) {
        const s = sheetByKey(m.sheet);
        ui.busyText.textContent = t('bcf.busy.progress', { i: ++i, n: list.length });
        let png = null;
        const box = boundsOf(m, envOf(m)) || m.rect;
        if (s && box) {
          try {
            const proxy = await s.file.doc.getPage(s.page.index + 1);
            const c = await view.snapshot(proxy, s.page, box, m.type === 'foreign' ? [] : [displayOf(m, envOf(m)).list], 900);
            const blob = await new Promise((r) => c.toBlob(r, 'image/png'));
            png = blob ? new Uint8Array(await blob.arrayBuffer()) : null;
          } catch { png = null; }
        }
        topics.push({ markup: m, sheetTitle: s?.page.title || '', fileName: s?.file.name || '', value: valueOf(m), box, png });
      }
      const { bytes, count } = await buildBcf(topics, { project: setName() });
      dl(bytes, t('export.list.file', { set: setName() }) + '.bcfzip', 'application/octet-stream');
      status(t(filtered ? 'bcf.done.listed' : 'bcf.done', { n: count, size: fmtBytes(bytes.length) }));
    } catch (e) {
      status(t('bcf.failed', { error: e.message || e }));
    } finally { busy(''); }
  }
  const setName = () => (files[0] ? files[0].name.replace(/\.pdf$/i, '').replace(/ \(marked up\)$/i, '') : 'MarkupCraft');

  // ---- punch list ----
  function addToPunch(ids = [...ctx.sel]) {
    const list = ids.map((id) => store.get(id)).filter((m) => m && !m.locked && !m.punch)
      .sort((a, b) => sheetOrder(a) - sheetOrder(b) || String(a.created).localeCompare(String(b.created)));
    if (!list.length) { status(ids.length ? t('punch.add.already') : t('punch.add.need')); return; }
    store.change(t('punch.add.one'), (tx) => {
      let n = store.punchNext;
      for (const m of list) tx.update(m.id, { punch: { n: n++, assignee: '', due: '', status: 'Open' } });
      tx.setPunchNext(n);
    });
    status(t('punch.added', { n: list.length }));
    refreshAll();
  }

  async function exportRedline({ revision = '', all = false, ids = null } = {}) {
    const list = ctx.sheets.map((x) => ({ key: x.page.key, sheetNo: x.page.sheetNo || '', title: x.page.title, view: x.page.view, file: x.file.name, mmPerPt: store.calibrations.get(x.page.key)?.mmPerPt || 0 }));
    const pkg = buildRedline(store.all(), list, { project: setName(), revision, by: ctx.author, only: all ? 'all' : 'open', ids });
    if (!pkg.items.length) { status(t('redline.none')); return { items: 0 }; }
    dl(JSON.stringify(pkg, null, 1), redlineFileName(pkg), 'application/json');
    status(t('redline.exported', { n: pkg.items.length }));
    return { items: pkg.items.length };
  }
  // 0.8 H5 / EG.64: the tasks in the JSON file that rides with the drawing, <name>.markups.json
  function exportSidecar() {
    const obj = buildSidecar(store.all(), { pdf: files[0] ? files[0].name : '', autoClose: ctx.autoCloseOn() });
    if (!obj.tasks.length) { status(t('tasks.file.none')); return { tasks: 0 }; }
    dl(sidecarText(obj), setName() + '.markups.json', 'application/json');
    status(t('tasks.file.saved', { n: obj.tasks.length }));
    return { tasks: obj.tasks.length };
  }
  function openSidecar(text) {
    const r = readSidecar(text);
    if (!r.ok) return r;
    const res = applySidecar(store, r.sidecar, { who: ctx.author });
    if (r.sidecar.autoClose) ctx.setAutoClose(true);
    refreshAll();
    return { ok: true, ...res };
  }

  return { exportListCsv, importBcf, exportSummary, exportBcf, setName, addToPunch, exportRedline, exportSidecar, openSidecar };
}

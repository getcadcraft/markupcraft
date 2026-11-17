/* SPDX-License-Identifier: Apache-2.0 */
/**
 * save-ui.js: markupcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSave(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el, frame } from './ui-util.js';
import { sheetViews, findCallouts, resolveCallout, planLinks, linkViewFor } from './batchlink.js';
import { boundsOf } from './geom.js';
import { linkTarget } from './link.js';
import { sheetNoKey } from './slip.js';
import { makeMarkup } from './model.js';
import { hitCloud } from './textsearch.js';

export function mountSave(ctx) {
  const { store, curSheet, curKey, sheetByKey, envOf, styleFor, status, busy, pdfLib, dialog, ask, askAuthor, dl, bake, sheetList, sheetText, found, cancelOps, commitEdit, applySheetNames, refreshAll } = ctx;

  /**
   * Batch links (0.9 SU.1085; 0.4 K16 before it). Three steps, re-runnable: (1) the sheet numbers and names as the title
   * blocks gave them, every one editable (one undo step); (2) every sheet's text read for callouts ("3/A-501", a bubble "3" over
   * "A-501", "DETAIL 2 ON A-501", "A-501") and every sheet's view titles; (3) a list of what links, what is already linked and
   * what did not link, with a hand fix per missing sheet number and per missing view. Links are rect markups with `link` (the
   * sheet number) and `linkView` {id, box, ref}; saved as MarkupCraft markups and as PDF Link annotations (/FitR on the view).
   * Run again after sheets are added or renamed: links still right are kept, moved or broken batch links are updated or listed.
   */
  async function batchLinks() {
    if (!ctx.sheets.length) { status(t('need.pdf')); return null; }
    commitEdit(); cancelOps();
    // (1) sheet numbers and names, fixed by hand where the title block was wrong or empty
    const fromLabel = (f) => t('blink.from.' + ({ manual: 'manual', label: 'label', 'title block': 'tb', file: 'file' }[f] || 'file'));
    const rowsS = ctx.sheets.map((s, i) => el('tr', { dataset: { key: s.page.key } },
      el('td', {}, el('input', { type: 'text', className: 'mc-input', maxlength: '40', id: 'mc-bl-no-' + i, dataset: { blNo: s.page.key }, value: s.page.sheetNo || '', 'aria-label': t('blink.sheets.no_for', { sheet: s.page.title }), placeholder: t('blink.sheets.no_ph') })),
      el('td', {}, el('input', { type: 'text', className: 'mc-input', maxlength: '200', dataset: { blName: s.page.key }, value: s.page.name || '', 'aria-label': t('blink.sheets.name_for', { sheet: s.page.title }) })),
      el('td', { className: 'mc-muted' }, fromLabel(s.page.from), s.page.sheetNo ? '' : el('strong', { className: 'mc-bl-need' }, ' ', t('blink.sheets.no_number')))));
    const r1 = await dialog({ title: t('blink.h'), text: t('blink.sheets.text', { n: ctx.sheets.length }), wide: true,
      body: [el('div', { className: 'mc-bl-scroll' }, el('table', { className: 'mc-bl-table mc-bl-sheets' },
        el('thead', {}, el('tr', {}, el('th', {}, t('props.sheet_number')), el('th', {}, t('rename.title')), el('th', {}, t('blink.sheets.from')))), el('tbody', {}, ...rowsS)))],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('blink.sheets.ok'), 'btn-plot']], submit: 'ok' });
    if (r1.key !== 'ok') return null;
    const edits = [];
    for (const s of ctx.sheets) {
      const no = r1.form.querySelector(`[data-bl-no="${CSS.escape(s.page.key)}"]`)?.value.trim().slice(0, 40) ?? s.page.sheetNo;
      const name = r1.form.querySelector(`[data-bl-name="${CSS.escape(s.page.key)}"]`)?.value.trim().slice(0, 200) ?? s.page.name;
      if (no === (s.page.sheetNo || '') && name === (s.page.name || '')) continue;
      const now = store.sheetNames.get(s.page.key) || {};
      edits.push([s.page.key, { number: no !== (s.page.sheetNo || '') ? no : (now.number || ''), title: name !== (s.page.name || '') ? name : (now.title || '') }]);
    }
    if (edits.length) { store.change(t('blink.undo.names', { n: edits.length }), (tx) => { for (const [k, v] of edits) tx.setSheetName(k, v.number || v.title ? v : null); }); applySheetNames(); }
    const nos = ctx.sheets.map((s) => s.page.sheetNo).filter(Boolean);
    if (!nos.length) { await ask(t('blink.h'), t('autolink.no_numbers'), [['cancel', t('dlg.ok'), 'btn-plot']]); return null; }

    // (2) callouts and views on every sheet
    const list = sheetList();
    const views = new Map();
    const rows = [];
    let blank = 0;
    for (let i = 0; i < ctx.sheets.length; i++) {
      const s = ctx.sheets[i];
      status(t('find.searching', { sheet: s.page.title, i: i + 1, n: ctx.sheets.length }));
      const idx = await sheetText(s);
      if (!idx.text.trim()) { blank++; views.set(s.page.key, []); continue; }
      // a sheet renumbered by hand still prints its old number (title block, view titles): both are its own
      const own = [s.page.sheetNo, s.page.tb?.number, s.page.label].filter(Boolean);
      views.set(s.page.key, sheetViews(idx, { sheetNo: own, view: s.page.view }));
      for (const c of findCallouts(idx, { sheetNos: nos, ownNo: own })) rows.push({ ...c, sheet: s });
    }
    const viewsOf = (k) => views.get(k) || [];
    const resolveAll = (fixes) => { for (const r of rows) Object.assign(r, resolveCallout(r, list, viewsOf, fixes)); };
    resolveAll(new Map());
    const bySheet = new Map();
    for (const r of rows) {
      if (!bySheet.has(r.sheet.page.key)) bySheet.set(r.sheet.page.key, store.onSheet(r.sheet.page.key).filter((m) => m.link).map((m) => ({ id: m.id, box: boundsOf(m, envOf(m)), link: m.link, linkView: m.linkView, resolves: !!linkTarget(m.link, list) })));
      planLinks([r], bySheet.get(r.sheet.page.key));
    }
    status('');
    if (!rows.length) { await ask(t('blink.h'), t('blink.none') + (blank ? ' ' + t('find.no_text', { n: blank }) : ''), [['cancel', t('dlg.ok'), 'btn-plot']]); return { found: 0 }; }

    // (3) the list: what links, what is already linked, what did not (hand fixes)
    const sheetOpts = (sel) => [el('option', { value: '' }, t('blink.fix.leave')), ...ctx.sheets.map((s) => el('option', { value: s.page.key, selected: s.page.key === sel }, s.page.title))];
    const viewOpts = (key, want) => [el('option', { value: '' }, t('blink.view.whole')), ...viewsOf(key).map((v) => el('option', { value: v.id, selected: v.id === want }, t('blink.view.opt', { id: v.id, title: v.title || '' })))];
    const where = (r) => el('strong', {}, r.sheet.page.sheetNo || r.sheet.page.title);
    const goes = rows.map((r, i) => ({ r, i })).filter(({ r }) => r.action === 'new' || r.action === 'update');
    const misses = rows.map((r, i) => ({ r, i })).filter(({ r }) => r.action === 'miss' || r.action === 'broken');
    const kept = rows.filter((r) => r.action === 'keep' || r.action === 'hand');
    const linkRow = ({ r, i }) => el('li', { className: 'mc-slip-row mc-bl-row', dataset: { action: r.action, i: String(i) } },
      el('input', { type: 'checkbox', id: 'mc-bl-' + i, checked: true, dataset: { blI: String(i) } }), ' ',
      el('label', { for: 'mc-bl-' + i }, where(r), ' ', t('autolink.row', { ref: r.ref, sheet: r.target.sheetNo || r.target.title }),
        r.view ? ' ' + t('blink.row.view', { id: r.view.id, title: r.view.title || '' }) : r.detail ? ' ' + t('blink.row.no_view', { id: r.detail }) : ' ' + t('blink.row.sheet'),
        r.action === 'update' ? el('span', { className: 'mc-muted' }, ' ', t('blink.row.update')) : ''),
      r.status === 'no-view' ? el('select', { className: 'mc-select mc-bl-sel', dataset: { blView: String(i) }, 'aria-label': t('blink.view.pick', { ref: r.ref }) }, ...viewOpts(r.target.key, r.pickedView || '')) : '');
    // one fix per sheet number that names no open sheet: every callout to that number follows it
    const missNos = [...new Map(misses.map(({ r }) => [sheetNoKey(r.no), r.no])).entries()];
    const missRow = ([k, no]) => { const n = misses.filter(({ r }) => sheetNoKey(r.no) === k); return el('li', { className: 'mc-slip-row mc-bl-row', dataset: { action: 'miss', no: k } },
      el('label', { for: 'mc-bl-fix-' + k }, t('blink.miss.row', { no, n: n.length, where: [...new Set(n.map(({ r }) => r.sheet.page.sheetNo || r.sheet.page.title))].join(', ') }), n.some(({ r }) => r.action === 'broken') ? el('span', { className: 'mc-muted' }, ' ', t('blink.miss.broken')) : ''), ' ',
      el('select', { className: 'mc-select mc-bl-sel', id: 'mc-bl-fix-' + k, dataset: { blFix: k } }, ...sheetOpts(''))); };
    const sec = (h, items, note) => el('section', { className: 'mc-bl-sec' }, el('h3', { className: 'mc-h mc-bl-h' }, h), note ? el('p', { className: 'mc-muted' }, note) : '', items.length ? el('ol', { className: 'mc-slip-list' }, ...items) : el('p', { className: 'mc-muted' }, t('blink.sec.empty')));
    const nSheets = new Set(rows.map((r) => r.sheet.page.key)).size;
    const r2 = await dialog({ title: t('blink.h'), text: t('blink.text', { n: rows.length, sheets: t('find.sheets', { n: nSheets }) }) + (blank ? ' ' + t('find.no_text', { n: blank }) : ''), wide: true,
      body: [el('div', { className: 'mc-bl-scroll' },
        sec(t('blink.sec.link', { n: goes.length }), goes.slice(0, 400).map(linkRow), goes.length > 400 ? t('autolink.capped') : ''),
        sec(t('blink.sec.miss', { n: misses.length }), missNos.map(missRow), misses.length ? t('blink.sec.miss.note') : ''),
        el('p', { className: 'mc-muted', dataset: { blKept: String(kept.length) } }, t('blink.sec.kept', { n: kept.length })))],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('blink.ok'), 'btn-plot']], submit: 'ok' });
    if (r2.key !== 'ok') return { found: rows.length, made: 0 };
    // the person's fixes: a sheet for each missing number, a view for callouts whose view was not found
    const fixes = new Map();
    for (const sel of r2.form.querySelectorAll('select[data-bl-fix]')) if (sel.value) fixes.set(sel.dataset.blFix, sel.value);
    const pickView = new Map([...r2.form.querySelectorAll('select[data-bl-view]')].map((sel) => [+sel.dataset.blView, sel.value]));
    const ticked = new Set([...r2.form.querySelectorAll('input[data-bl-i]:checked')].map((b) => +b.dataset.blI));
    const todo = [];
    for (const { r, i } of goes) if (ticked.has(i)) {
      const v = pickView.get(i) ? viewsOf(r.target.key).find((x) => x.id === pickView.get(i)) : r.view;
      todo.push({ r, view: v || null });
    }
    for (const { r } of misses) {
      const k = fixes.get(sheetNoKey(r.no));
      if (!k) continue;
      const res = resolveCallout(r, list, viewsOf, fixes);
      if (!res.target) continue;
      const kept = res.status === 'no-view' && r.pickedView ? viewsOf(res.target.key).find((x) => x.id === r.pickedView) : null;   // the view picked by hand before
      todo.push({ r: { ...r, ...res }, view: kept || res.view });
    }
    if (!todo.length) { status(t('blink.nothing')); return { found: rows.length, made: 0, updated: 0, missed: misses.length }; }
    const who = await askAuthor();
    let made = 0, updated = 0;
    store.change(t('blink.undo', { n: todo.length }), (tx) => { for (const { r, view } of todo) {
      const link = r.target.sheetNo || r.target.title;
      const linkView = linkViewFor(r, view);
      if (r.existing) { tx.update(r.existing, { link, linkView }); updated++; continue; }
      const [x0, y0, x1, y1] = r.box;
      tx.add(makeMarkup({ sheet: r.sheet.page.key, type: 'rect', rect: [x0 - 2, y0 - 2, x1 + 2, y1 + 2], rot: r.sheet.page.rotate, author: who, link, linkView,
        subject: t('autolink.subject'), style: { color: '#1e48c8', width: 0.75, fill: null, fillOpacity: 0.25, opacity: 0.85, fontSize: 12 } }));
      made++;
    } });
    const left = misses.filter(({ r }) => !fixes.get(sheetNoKey(r.no))).length;
    status(t('blink.done', { n: made, u: updated, m: left }));
    refreshAll();
    return { found: rows.length, made, updated, missed: left };
  }

  async function cloudFound() {
    if (!found.hits.length) { status(t('find.cloud.none')); return; }
    const who = await askAuthor();
    const keys = new Set(found.hits.map((h) => h.key));
    const made = store.change(t('undo.find_cloud', { n: found.hits.length }), (tx) => found.hits.map((h) => tx.add(makeMarkup({
      ...hitCloud(h, { pad: Math.max(2, (h.rect[3] - h.rect[1]) * 0.35), rot: sheetByKey(h.key)?.page.rotate || 0, sheet: h.key, author: who }),
      style: styleFor('cloudrect'), comment: t('find.cloud.comment', { query: found.query }) }))));
    if (Array.isArray(made)) ctx.sel = new Set(made.filter((m) => m.sheet === curKey()).map((m) => m.id));
    status(t('find.clouded', { n: found.hits.length, sheets: t('find.sheets', { n: keys.size }) }));
    refreshAll();
  }

  // ---- flatten (0.4 K15): a separate copy with every markup, or the chosen ones, drawn into the pages ----
  async function saveFlat() {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    const f = s.file;
    const mine = (m) => m.type !== 'foreign' && !m.locked;
    const inFile = f.pages.flatMap((pg) => store.onSheet(pg.key)).filter(mine);
    const chosen = [...ctx.sel].map((id) => store.get(id)).filter((m) => m && mine(m) && m.sheet.startsWith(f.id + ':'));
    if (!inFile.length) { status(t('flat.none', { name: f.name })); return; }
    const radios = [['all', t('flat.all', { n: inFile.length })], ...(chosen.length ? [['sel', t('flat.sel', { n: chosen.length })]] : [])];
    const box = el('div', { className: 'mc-radios', role: 'radiogroup', 'aria-label': t('flat.which') }, ...radios.map(([v, l], i) =>
      el('label', { className: 'mc-radio' }, el('input', { type: 'radio', name: 'mc-flat', value: v, checked: chosen.length ? v === 'sel' : i === 0 }), ' ', l)));
    const r = await dialog({ title: t('flat.title'), text: t('flat.text', { name: f.name }), body: [box],
      buttons: [['cancel', t('dlg.cancel')], ['save', t('flat.ok'), 'btn-plot']], submit: 'save' });
    if (r.key !== 'save') return;
    const which = box.querySelector('input:checked')?.value === 'sel' ? new Set(chosen.map((m) => m.id)) : 'all';
    busy(t('save.loading'));
    await frame();
    try {
      const lib = await pdfLib();
      busy(t('save.saving', { file: f.name }));
      const { bytes, report } = await bake(f, lib, { flatten: which, burn: true });
      const name = t('flat.file', { name: f.name.replace(/\.pdf$/i, '').replace(/ \(marked up\)$/i, '') }) + '.pdf';
      dl(bytes, name, 'application/pdf');
      status(t('flat.done', { file: name, n: report.flattened }) + (report.written ? ' ' + t('flat.kept', { n: report.written }) : ''));
    } catch (e) {
      busy('');
      await ask(t('save.failed', { file: f.name }), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
    busy('');
  }

  /** A copy to send: markups as they are, no notes, no private notes, nothing on the pasteboard (0.9 NOTES.1). */
  async function saveClean() {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    const f = s.file;
    busy(t('save.loading'));
    await frame();
    try {
      const lib = await pdfLib();
      busy(t('save.saving', { file: f.name }));
      const { bytes } = await bake(f, lib, { burn: true });
      const name = t('pnotes.clean.file', { name: f.name.replace(/\.pdf$/i, '').replace(/ \(marked up\)$/i, '') }) + '.pdf';
      dl(bytes, name, 'application/pdf');
      status(t('pnotes.clean.done', { file: name }));
    } catch (e) {
      busy('');
      await ask(t('save.failed', { file: f.name }), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
    busy('');
  }

  return { batchLinks, cloudFound, saveFlat, saveClean };
}

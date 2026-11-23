/* SPDX-License-Identifier: Apache-2.0 */
/**
 * slip-ui.js: markupcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSlip(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { matchSheets, carryMarkups, supersededStamp } from './slip.js';
import { el } from './ui-util.js';

export function mountSlip(ctx) {
  const { ST, $, ui, store, files, sheetByKey, status, dialog, ask, askAuthor, openFiles, refreshAll } = ctx;

  // ---- slip-sheet (0.4 K13): open a revised set, carry each old sheet's markups onto the new sheet with its number ----
  ui.slipFile = $('[data-slip-file]');
  ui.slipFile?.addEventListener('change', () => { const list = [...ui.slipFile.files]; ui.slipFile.value = ''; if (list.length) slipSheet(list); });
  const sheetFacts = (s) => ({ key: s.page.key, no: s.page.sheetNo, file: files.indexOf(s.file), page: s.page.index, width: s.page.width, height: s.page.height, view: s.page.view, rotate: s.page.rotate });

  async function slipSheet(list) {
    ctx.commitEdit(); ctx.cancelOps();
    const before = new Set(files);
    const oldSheets = ST.sheets.map(sheetFacts);
    if (!oldSheets.length) { status(t('slip.need_old')); return; }
    if (!(await openFiles(list))) return;
    const newSheets = ST.sheets.filter((s) => !before.has(s.file)).map(sheetFacts);
    const pairs = matchSheets(oldSheets, newSheets);
    const title = (key) => sheetByKey(key)?.page.title || key;
    const movable = (key) => store.onSheet(key).filter((m) => m.type !== 'foreign' && !m.locked).length;
    const matched = pairs.filter((p) => p.oldKey);
    if (!matched.length) { await ask(t('slip.title'), t('slip.none', { n: newSheets.length }), [['cancel', t('dlg.ok'), 'btn-plot']]); return; }
    const rows = pairs.map((p, i) => {
      const id = 'mc-slip-' + i;
      const box = el('input', { type: 'checkbox', id, checked: !!p.oldKey, disabled: !p.oldKey, dataset: { i: String(i) } });
      return el('li', { className: 'mc-slip-row' }, box, ' ', el('label', { for: id },
        el('strong', {}, title(p.newKey)), ' ', p.oldKey ? t(p.by === 'order' ? 'slip.row.order' : 'slip.row', { old: title(p.oldKey), n: movable(p.oldKey) }) : t('slip.row.new')));
    });
    const skip = el('input', { type: 'checkbox', id: 'mc-slip-skip' });
    const stamp = el('input', { type: 'checkbox', id: 'mc-slip-stamp', checked: true });
    const r = await dialog({
      title: t('slip.title'), text: t('slip.text', { n: matched.length, total: newSheets.length }), wide: true,
      body: [el('ol', { className: 'mc-slip-list' }, ...rows),
        el('label', { className: 'mc-radio' }, skip, ' ', t('slip.skip_closed')),
        el('label', { className: 'mc-radio' }, stamp, ' ', t('slip.stamp_old', { stamp: t('slip.superseded') }))],
      buttons: [['cancel', t('slip.cancel')], ['carry', t('slip.ok'), 'btn-plot']], submit: 'carry',
    });
    if (r.key !== 'carry') { status(t('slip.opened_only')); return; }
    const chosen = [...r.form.querySelectorAll('.mc-slip-list input:checked')].map((b) => pairs[+b.dataset.i]);
    let carried = 0, left = 0, scaled = 0, closed = 0, stamped = 0;
    const who = await askAuthor();
    store.change(t('undo.slip'), (tx) => {
      for (const p of chosen) {
        const from = sheetByKey(p.oldKey).page, to = sheetByKey(p.newKey).page;
        const res = carryMarkups(store.onSheet(p.oldKey), p.newKey, { from, to, skipClosed: skip.checked });
        res.items.forEach((it, k) => {
          tx.add(it);
          if (it.punch) tx.update(res.sources[k], { punch: null });   // the punch item goes on with the new sheet
        });
        carried += res.items.length; left += res.left; scaled += res.scaled; closed += res.closed;
        const cal = store.calibrations.get(p.oldKey);
        if (cal && !store.calibrations.get(p.newKey) && Math.abs(from.width - to.width) <= 1 && Math.abs(from.height - to.height) <= 1) tx.setCalibration(p.newKey, cal);
        if (stamp.checked) { tx.add(supersededStamp(from, { label: t('slip.superseded'), author: who, sheet: p.oldKey })); stamped++; }
      }
    });
    const parts = [t('slip.done', { sheets: t('slip.sheets', { n: chosen.length }), n: carried })];
    if (stamped) parts.push(t('slip.done.stamped', { n: stamped, stamp: t('slip.superseded') }));
    if (closed) parts.push(t('slip.done.closed', { n: closed }));
    if (left) parts.push(t('slip.done.left', { n: left }));
    if (scaled) parts.push(t('slip.done.scaled', { n: scaled }));
    if (pairs.length > matched.length) parts.push(t('slip.done.new', { n: pairs.length - matched.length }));
    status(parts.join(' '));
    refreshAll();
  }

  return { sheetFacts };
}

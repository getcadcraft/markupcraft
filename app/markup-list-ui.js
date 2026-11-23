/* SPDX-License-Identifier: Apache-2.0 */
/**
 * markup-list-ui.js: markupcraft.js's 11 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountMarkupList(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, shortDate } from './ui-util.js';
import { STATUSES } from './model.js';
import { t } from './i18n.js';
import { compareBy, TYPES_OF_COLUMN, newColumnKey } from './columns.js';
import { makeClip, placeClip } from './clip.js';
import { boundsOf } from './geom.js';
import { toCsv, punchRows } from './csv.js';

export function mountMarkupList(ctx) {
  const { ST, findAll, find, ui, store, view, filters, curSheet, curKey, sheetByKey, envOf, status, dialog, askAuthor, dl, goTo, editable, newMarkup, markupSpace, activeTab, punchFields, valueOf, refreshAll, refreshSelection, root } = ctx;

  // ---- markups list ----
  for (const s of root.querySelectorAll('[data-filter]')) s.addEventListener('change', () => { filters[s.dataset.filter] = s.value; renderList(); });

  function fillFilter(select, values, keepFirst) {
    const curV = select.value;
    while (select.options.length > keepFirst) select.remove(keepFirst);
    for (const [v, label] of values) select.append(el('option', { value: v }, label));
    select.value = [...select.options].some((o) => o.value === curV) ? curV : '';
  }

  function filteredMarkups() {
    return store.all().filter((m) => {
      if (filters.sheet === 'current' && m.sheet !== curKey()) return false;
      if (filters.sheet && filters.sheet !== 'current' && m.sheet !== filters.sheet) return false;
      if (filters.author && m.author !== filters.author) return false;
      if (filters.status && m.status !== filters.status) return false;
      if (filters.type && m.type !== filters.type) return false;
      if (filters.layer && (filters.layer === '\u0001none' ? m.layer : m.layer !== filters.layer)) return false;
      if (filters.field) { const [ck, ...cv] = filters.field.split('\u0001'); if ((m.fields?.[ck] ?? '') !== cv.join('\u0001')) return false; }
      if (filters.space && (filters.space === '\u0001none' ? markupSpace(m) : markupSpace(m) !== filters.space)) return false;
      return true;
    });
  }

  function sheetOrder(m) { return ST.sheets.findIndex((s) => s.page.key === m.sheet); }

  function renderList() {
    if (activeTab() !== 'list') return;
    const all = store.all();
    fillFilter(find('[data-filter="sheet"]'), ST.sheets.filter((s) => all.some((m) => m.sheet === s.page.key)).map((s) => [s.page.key, s.page.title]), 2);
    fillFilter(find('[data-filter="author"]'), [...new Set(all.map((m) => m.author).filter(Boolean))].sort().map((a) => [a, a]), 1);
    fillFilter(find('[data-filter="status"]'), STATUSES.map((s) => [s, ctx.stname(s)]), 1);
    fillFilter(find('[data-filter="type"]'), [...new Set(all.map((m) => m.type))].map((x) => [x, ctx.tname(x)]), 1);
    fillFilter(find('[data-filter="space"]'), [['\u0001none', t('space.none')], ...[...new Set(all.filter((m) => m.type === 'space' && m.label).map((m) => m.label))].sort().map((n) => [n, n])], 1);
    const pairs = [];
    for (const c of store.columns) for (const v of [...new Set(all.map((m) => m.fields?.[c.key]).filter(Boolean))].sort().slice(0, 100)) pairs.push([c.key + '\u0001' + v, c.name + ': ' + v]);
    for (const c of store.columns) pairs.push([c.key + '\u0001', t('filter.field.empty', { col: c.name })]);
    fillFilter(find('[data-filter="field"]'), pairs, 1);
    fillFilter(find('[data-filter="layer"]'), [['\u0001none', t('layer.none')], ...store.layerNames().map((n) => [n, n])], 1);
    for (const s of findAll('[data-filter]')) filters[s.dataset.filter] = s.value;
    const sortSel = find('[data-sort]');
    if (sortSel) {
      const want = sortSel.value;
      while (sortSel.options.length > 6) sortSel.remove(6);
      for (const c of store.columns) sortSel.append(el('option', { value: 'col:' + c.key }, c.name));
      sortSel.value = [...sortSel.options].some((o) => o.value === want) ? want : '';
    }
    const list = filteredMarkups().sort(listOrder(sortSel?.value || ''));
    ui.listCount.textContent = list.length === all.length ? t('save.markups', { n: all.length }) : t('list.count.filtered', { shown: list.length, n: all.length });
    ui.list.replaceChildren();
    for (const m of list.slice(0, 2000)) {
      const s = sheetByKey(m.sheet);
      const text = m.type === 'stamp' ? m.label : ctx.TEXT_TYPES.has(m.type) ? m.text : valueOf(m);
      const nr = m.replies.length;
      const btn = el('button', { type: 'button', className: 'mc-item', 'aria-current': ST.sel.has(m.id) ? 'true' : 'false' },
        el('span', { className: 'mc-item-icon', style: 'color:' + (m.locked ? 'var(--ink-2)' : m.style.color) }, el('i', { className: 'bi bi-' + (ctx.TYPE_ICON[m.type] || 'circle'), 'aria-hidden': 'true' })),   // i18n-ignore
        el('span', { className: 'mc-item-main' },
          el('span', { className: 'mc-item-title' }, (m.punch ? '#' + m.punch.n + ' ' : '') + (m.subject || (m.locked ? m.src?.subtype : ctx.tname(m.type)))),
          text || m.comment ? el('span', { className: 'mc-item-text' }, [text, m.comment].filter(Boolean).join(' — ')) : null,
          el('span', { className: 'mc-item-meta' }, (() => { const col = m.author && window.markupcraft.authorColour ? window.markupcraft.authorColour(m.author) : null; return [col ? el('i', { className: 'mc-live-dot', style: 'background:' + col, 'aria-hidden': 'true' }) : null, [s ? s.page.title : '', m.author, shortDate(m.created)].filter(Boolean).join(', ')]; })()),
          store.columns.some((c) => m.fields?.[c.key]) ? el('span', { className: 'mc-item-meta mc-item-fields' }, store.columns.filter((c) => m.fields?.[c.key]).map((c) => c.name + ': ' + m.fields[c.key]).join(', ')) : null),
        el('span', { className: 'mc-item-side' },
          el('span', { className: 'mc-chip mc-st-' + m.status.toLowerCase() }, m.locked ? t('props.read_only') : ctx.stname(m.status)),
          nr ? el('span', { className: 'mc-replies', title: t('list.replies', { n: nr }) }, el('i', { className: 'bi bi-chat-left-text', 'aria-hidden': 'true' }), ' ' + nr, el('span', { className: 'visually-hidden' }, ' ' + t('list.replies.word', { n: nr }))) : null));
      btn.addEventListener('click', () => { if (!window.ccState?.select([{ kind: 'markup', id: m.id }], 'reveal')) jumpTo(m.id); });   // 0.11 UI.25: the row goes through the one state
      ui.list.append(el('li', {}, btn));
    }
    if (!list.length) ui.list.append(el('li', { className: 'mc-note' }, all.length ? t('list.no_match') : t('list.empty')));
  }

  /** The list's order: by sheet (then when made), or by a column — built-in or custom (0.4 K19). */
  function listOrder(key) {
    const base = (a, b) => sheetOrder(a) - sheetOrder(b) || String(a.created).localeCompare(String(b.created));
    if (!key) return base;
    if (key.startsWith('col:')) { const c = store.columns.find((x) => 'col:' + x.key === key); const cmp = c ? compareBy(c) : null; return (a, b) => (cmp ? cmp(a, b) : 0) || base(a, b); }
    const get = { author: (m) => m.author, status: (m) => STATUSES.indexOf(m.status), type: (m) => ctx.tname(m.type), created: (m) => m.created, modified: (m) => m.modified }[key];
    const desc = key === 'created' || key === 'modified';
    return (a, b) => { const x = get(a), y = get(b); const r = typeof x === 'number' ? x - y : String(x || '').localeCompare(String(y || '')); return (desc ? -r : r) || base(a, b); };
  }
  find('[data-sort]')?.addEventListener('change', () => renderList());

  /** Batch apply (0.4 K22): the selected markups (a stamp, a note, clouds…) copied to the same place on chosen sheets. */
  async function copyToSheets() {
    const list = editable();
    if (!list.length) { status(t('batch.need')); return; }
    const from = curKey();
    const boxes = ST.sheets.filter((s) => s.page.key !== from).map((s, i) => {
      const id = 'mc-bt-' + i;
      return el('li', { className: 'mc-slip-row' }, el('input', { type: 'checkbox', id, dataset: { key: s.page.key } }), ' ', el('label', { for: id }, s.page.title));
    });
    const allBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => boxes.forEach((li) => { li.querySelector('input').checked = true; }) }, t('batch.all'));
    const noneBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => boxes.forEach((li) => { li.querySelector('input').checked = false; }) }, t('batch.none'));
    let chosen = [];
    const r = await dialog({ title: t('batch.title'), text: t('batch.text', { n: list.length }), wide: true,
      body: [el('div', { className: 'mc-actions' }, allBtn, noneBtn), el('ol', { className: 'mc-slip-list' }, ...boxes)],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('batch.ok'), 'btn-plot']], submit: 'ok',
      check: (k, form) => { chosen = [...form.querySelectorAll('.mc-slip-list input:checked')].map((b) => b.dataset.key); return chosen.length ? '' : t('batch.pick'); } });
    if (r.key !== 'ok') return;
    const who = ST.author || await askAuthor();
    const clipped = makeClip(list, { source: ctx.TAB, sheet: from });
    let n = 0;
    store.change(t('undo.batch', { n: chosen.length }), (tx) => { for (const key of chosen) {
      const sh = sheetByKey(key);
      for (const m of placeClip(clipped, { sheet: key, author: who, rot: sh?.page.rotate ?? null })) { tx.add(m); n++; }
    } });
    status(t('batch.done', { n, sheets: t('find.sheets', { n: chosen.length }) }));
    refreshAll();
  }

  /** A legend (0.4 K21): placed at the top right of what is on screen; it counts the markups as they change. */
  async function addLegend() {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    const who = ST.author || await askAuthor();
    const [x1, y1] = view.toUser(view.w - 24, 24);
    const [x0, y0] = view.toUser(view.w - 24 - 230, 24 + 200);
    const m = store.change(t('undo.legend'), (tx) => tx.add(newMarkup('legend', { rect: [Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1)], label: t('legend.title'), author: who })));
    ST.sel = new Set([m.id]);
    status(t('legend.added'));
    refreshAll();
  }

  /** Custom columns (0.4 K19): add, rename, retype or remove the set's columns. */
  async function editColumns() {
    const cols = store.columns.map((c) => ({ ...c, choices: [...c.choices] }));
    const rows = el('div', { className: 'mc-cols' });
    const draw = () => rows.replaceChildren(...cols.map((c, i) => el('div', { className: 'mc-col-row' },
      el('input', { type: 'text', className: 'mc-input', value: c.name, maxlength: '60', 'aria-label': t('col.name'), placeholder: t('col.name'), oninput: (e) => { c.name = e.target.value; } }),
      el('select', { className: 'mc-select', 'aria-label': t('col.type'), onchange: (e) => { c.type = e.target.value; draw(); } }, ...TYPES_OF_COLUMN.map((ty) => el('option', { value: ty, selected: c.type === ty }, t('col.type.' + ty)))),
      c.type === 'choice' ? el('input', { type: 'text', className: 'mc-input', value: c.choices.join(', '), 'aria-label': t('col.choices'), placeholder: t('col.choices'), oninput: (e) => { c.choices = e.target.value.split(',').map((x) => x.trim()).filter(Boolean); } }) : el('span'),
      el('button', { type: 'button', className: 'mc-x', title: t('col.remove', { name: c.name }), 'aria-label': t('col.remove', { name: c.name }), onclick: () => { cols.splice(i, 1); draw(); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' })))));
    draw();
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { cols.push({ key: newColumnKey([...store.columns, ...cols]), name: '', type: 'text', choices: [] }); draw(); rows.querySelector('.mc-col-row:last-child input')?.focus(); } }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), ' ', t('col.add'));
    const r = await dialog({ title: t('col.title'), text: t('col.text'), body: [rows, el('div', { className: 'mc-actions' }, add)], wide: true,
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('col.ok'), 'btn-plot']], submit: 'ok',
      check: () => (cols.some((c) => !c.name.trim()) ? t('col.err.name') : cols.some((c) => c.type === 'choice' && !c.choices.length) ? t('col.err.choices') : '') });
    if (r.key !== 'ok') return;
    store.setColumns(cols);
    status(t('col.saved', { n: store.columns.length }));
    refreshAll();
  }

  async function jumpTo(id) {
    const m = store.get(id);
    if (!m) return;
    const i = ST.sheets.findIndex((s) => s.page.key === m.sheet);
    if (i < 0) return;
    ST.sel = new Set([id]);
    if (i !== ST.cur) await goTo(i, { keepSelection: true });
    const b = boundsOf(m, envOf(m));
    if (b) {
      const a = view.toScreen([b[0], b[1]]), c = view.toScreen([b[2], b[3]]);
      const off = Math.max(a[0], c[0]) < 0 || Math.min(a[0], c[0]) > view.w || Math.max(a[1], c[1]) < 0 || Math.min(a[1], c[1]) > view.h;
      const tiny = Math.abs(c[0] - a[0]) < 12 && Math.abs(c[1] - a[1]) < 12;
      if (off || tiny) view.zoomTo(b, 0.35); else view.invalidate(true);
    }
    refreshSelection();
  }

  function renderPunch() {
    if (activeTab() !== 'punch') return;
    const items = store.punchItems();
    ui.punch.replaceChildren();
    if (!items.length) { ui.punch.append(el('li', { className: 'mc-note' }, t('punch.empty'))); return; }
    for (const m of items) {
      const s = sheetByKey(m.sheet);
      const head = el('button', { type: 'button', className: 'mc-item', 'aria-current': ST.sel.has(m.id) ? 'true' : 'false', onclick: () => jumpTo(m.id) },
        el('span', { className: 'mc-punch-n' }, String(m.punch.n)),
        el('span', { className: 'mc-item-main' },
          el('span', { className: 'mc-item-title' }, m.subject || ctx.tname(m.type)),
          (ctx.TEXT_TYPES.has(m.type) ? m.text : m.comment) ? el('span', { className: 'mc-item-text' }, ctx.TEXT_TYPES.has(m.type) ? m.text : m.comment) : null,
          el('span', { className: 'mc-item-meta' }, [s?.page.title, m.punch.assignee ? t('punch.assigned', { name: m.punch.assignee }) : '', m.punch.due ? t('punch.due_on', { date: shortDate(m.punch.due + 'T12:00:00') }) : ''].filter(Boolean).join(', '))),
        el('span', { className: 'mc-chip' }, ctx.pstname(m.punch.status)));
      const grid = el('div', { className: 'mc-props mc-punch-edit' }, ...punchFields(m));
      ui.punch.append(el('li', {}, head, grid));
    }
  }

  function exportPunchCsv() {
    const items = store.punchItems();
    if (!items.length) { status(t('punch.export.empty')); return; }
    dl(toCsv(punchRows(items, (m) => { const s = sheetByKey(m.sheet); return s ? { title: s.page.title, file: s.file.name, page: s.page.index + 1 } : null; })), t('punch.file', { set: ctx.setName() }) + '.csv', 'text/csv');
    status(t('punch.exported', { n: items.length }));
  }

  return { filteredMarkups, sheetOrder, renderList, copyToSheets, addLegend, editColumns, jumpTo, renderPunch, exportPunchCsv };
}

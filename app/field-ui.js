/* SPDX-License-Identifier: Apache-2.0 */
/**
 * field-ui.js — the Field tab (0.7 LC.7): RFIs, submittals and daily logs on the sheets. Records are made, listed, filtered,
 * edited, answered, exported (CSV, BCF) and merged here; the file model is records.js. Pins are drawn on the sheet's
 * overlay; a tap on one selects its record. Everything works without a network: the records live in the open file's
 * state like the markups and are saved into the PDF.
 *
 * markupcraft.js hands over what it owns (`api`) and calls: `render()` (the tab), `paint(ctx)` (pins), `hit(sx, sy)`
 * (a pin under the pointer), `place(p)` (the Place tool's click), `packFor(file)` / `loadFrom(rec)` / `stateFor(file)` /
 * `restore(file, list)` (saving and opening).
 */

import { el, frame, shortDate, dateTime } from './ui-util.js';
import { t } from './i18n.js';
import { nowIso, clone, newId } from './model.js';
import { RECORD_TYPES, RECORD_STATUSES, statusesOf, recordNo, recordTypeName, recordStatusName, isOverdue, isDone, makeRecord, cleanRecord, cleanRecordReply,
  filterRecords, packRecords, unpackRecords, mergeRecords, recordRows, recordTopic } from './records.js';
import { PRIVATE_RECORDS_KEY } from './pdf-write.js';
import { toCsv } from './csv.js';
import { buildBcf } from './bcf.js';

const TYPE_ICON = { rfi: 'question-circle', submittal: 'file-earmark-check', log: 'journal-text' };
const TYPE_LETTER = { rfi: 'R', submittal: 'S', log: 'L' };   // i18n-ignore (pin letters; the pin's title is the translated number)

export function installField(api) {
  const { root, store, view, find, status } = api;
  const ui = {
    list: find('[data-field-list]'), count: find('[data-field-count]'), detail: find('[data-field-detail]'), mergeFile: find('[data-field-merge-file]'),
    f: Object.fromEntries([...root.querySelectorAll('[data-field-filter]')].map((n) => [n.dataset.fieldFilter, n])),
    mine: find('[data-field-mine]'), place: find('[data-field-place-note]'),
  };
  let selected = '';           // the open record's id
  let placing = null;          // { type } | { move: id }: the next click on the sheet places a pin
  let shownSig = '';           // what the detail form was built from (a redraw for nothing would drop what is being typed)
  let keepForm = false;        // the edit came from the form itself: its fields already say it
  const today = () => nowIso().slice(0, 10);
  const me = () => api.getAuthor();
  const sheetOf = (r) => { const s = api.sheetByKey(r.sheet); return s ? { title: s.page.title, file: s.file.name, page: s.page.index + 1 } : null; };

  // ---- filters ----
  const filters = () => ({
    type: ui.f.type?.value || '', status: ui.f.status?.value || '', due: ui.f.due?.value || '', q: ui.f.q?.value || '',
    sheet: ui.f.sheet?.value === 'current' ? api.curKey() : '', mine: !!ui.mine?.checked,
  });
  const shown = () => filterRecords(store.records.size ? [...store.records.values()] : [], filters(), { me: me(), today: today() });

  function fillStatusFilter() {
    const sel = ui.f.status;
    if (!sel) return;
    const keep = sel.value;
    const type = ui.f.type?.value;
    const words = [...new Set((type ? statusesOf(type) : RECORD_TYPES.flatMap((k) => RECORD_STATUSES[k])))];
    sel.replaceChildren(el('option', { value: '' }, t('rec.filter.status.any')), ...words.map((s) => el('option', { value: s }, recordStatusName(type || (RECORD_TYPES.find((k) => RECORD_STATUSES[k].includes(s))), s))));
    sel.value = words.includes(keep) ? keep : '';
  }

  // ---- the list ----
  function render() {
    if (!ui.list) return;
    const all = store.liveRecords();
    if (!ui.f.type?.options.length) {
      ui.f.type.replaceChildren(el('option', { value: '' }, t('rec.filter.type.any')), ...RECORD_TYPES.map((k) => el('option', { value: k }, recordTypeName(k))));
      ui.f.due.replaceChildren(...['', 'overdue', 'week', 'set', 'none'].map((k) => el('option', { value: k }, t('rec.filter.due.' + (k || 'any')))));
      ui.f.sheet.replaceChildren(el('option', { value: '' }, t('rec.filter.sheet.all')), el('option', { value: 'current' }, t('rec.filter.sheet.current')));
      fillStatusFilter();
    }
    const list = shown();
    const late = all.filter((r) => isOverdue(r, today())).length;
    ui.count.textContent = all.length ? t('rec.count', { shown: list.length, n: all.length, late }) : '';
    ui.list.replaceChildren();
    if (!all.length) ui.list.append(el('li', { className: 'mc-note' }, t('rec.empty')));
    else if (!list.length) ui.list.append(el('li', { className: 'mc-note' }, t('rec.none')));
    for (const r of list) {
      const s = sheetOf(r);
      const late1 = isOverdue(r, today());
      const open = r.id === selected;
      const row = el('button', { type: 'button', className: 'mc-item mc-rec-row' + (open ? ' is-selected' : '') + (late1 ? ' is-late' : ''), 'aria-expanded': String(open), 'aria-controls': 'mc-rec-detail', onclick: () => choose(r.id, { jump: true }) },
        el('span', { className: 'mc-item-icon' }, el('i', { className: 'bi bi-' + TYPE_ICON[r.type], 'aria-hidden': 'true' })),   // i18n-ignore (icon class)
        el('span', { className: 'mc-item-main' },
          el('span', { className: 'mc-item-title' }, recordNo(r) + (r.title ? ' ' + r.title : '')),
          el('span', { className: 'mc-item-meta' }, [s?.title, r.assignee ? t('punch.assigned', { name: r.assignee }) : '', r.due ? t('punch.due_on', { date: shortDate(r.due + 'T12:00:00') }) : '', r.replies.length ? t('rec.replies', { n: r.replies.length }) : ''].filter(Boolean).join(', '))),
        el('span', { className: 'mc-item-side mc-rec-chips' }, late1 ? el('span', { className: 'mc-chip mc-chip-late' }, t('rec.overdue')) : null, el('span', { className: 'mc-chip' }, recordStatusName(r.type, r.status))));
      ui.list.append(el('li', {}, row));
    }
    renderDetail();
    if (ui.place) ui.place.hidden = !placing;
    if (ui.place && placing) ui.place.textContent = placing.move ? t('rec.place.move') : t('rec.place.new', { type: recordTypeName(placing.type) });
  }

  // ---- one record ----
  const get = () => (selected ? store.records.get(selected) : null);
  function edit(label, patch, { touch = true, rebuild = false } = {}) {
    const r = get();
    if (!r || r.removed) return null;
    keepForm = !rebuild;
    const next = cleanRecord({ ...clone(r), ...patch, modified: touch ? nowIso() : r.modified });
    if (!next) return null;
    store.change(label, (tx) => tx.setRecord(next));
    api.refresh();
    return next;
  }
  const lbl = (text, input, id) => [el('label', { className: 'mc-k', for: id }, text), input];
  let uid = 0;
  function renderDetail() {
    const host = ui.detail;
    if (!host) return;
    const r = get();
    const sig = r && !r.removed ? JSON.stringify(r) : '';
    if (sig && sig === shownSig && host.firstChild) { keepForm = false; return; }
    if (keepForm && sig && host.firstChild && host.dataset.rec === r.id) { keepForm = false; shownSig = sig; return; }
    keepForm = false;
    shownSig = sig;
    host.replaceChildren();
    host.dataset.rec = r?.id || '';
    if (!r || r.removed) { selected = ''; return; }
    const id = () => 'mc-rec-f' + (++uid);
    const grid = el('div', { className: 'mc-props mc-rec-grid' });
    const put = (...nodes) => grid.append(...nodes.flat());
    let i = id();
    put(lbl(t('rec.title'), el('input', { type: 'text', id: i, className: 'mc-input', maxlength: '200', value: r.title, onchange: (e) => edit(t('rec.undo.edit'), { title: e.target.value }) }), i));
    i = id();
    put(lbl(t('rec.text.' + r.type), el('textarea', { id: i, className: 'mc-input mc-rec-text', rows: '4', maxlength: '20000', value: r.text, onchange: (e) => edit(t('rec.undo.edit'), { text: e.target.value }) }), i));
    i = id();
    put(lbl(t('rec.status'), el('select', { id: i, className: 'mc-select', onchange: (e) => setStatus(e.target.value) }, ...statusesOf(r.type).map((s) => el('option', { value: s, selected: s === r.status }, recordStatusName(r.type, s)))), i));
    i = id();
    put(lbl(t('punch.assignee'), el('input', { type: 'text', id: i, className: 'mc-input', maxlength: '120', value: r.assignee, onchange: (e) => edit(t('rec.undo.edit'), { assignee: e.target.value }) }), i));
    i = id();
    put(lbl(r.type === 'log' ? t('rec.due.log') : t('punch.due'), el('input', { type: 'date', id: i, className: 'mc-input', value: r.due, onchange: (e) => edit(t('rec.undo.edit'), { due: e.target.value }) }), i));
    if (r.type === 'log') {
      i = id();
      put(lbl(t('rec.date'), el('input', { type: 'date', id: i, className: 'mc-input', value: r.date, onchange: (e) => edit(t('rec.undo.edit'), { date: e.target.value }) }), i));
      i = id();
      put(lbl(t('rec.weather'), el('input', { type: 'text', id: i, className: 'mc-input', maxlength: '120', value: r.weather, onchange: (e) => edit(t('rec.undo.edit'), { weather: e.target.value }) }), i));
      i = id();
      put(lbl(t('rec.crew'), el('input', { type: 'number', id: i, className: 'mc-input', min: '0', max: '100000', step: '1', inputMode: 'numeric', value: r.crew ?? '', onchange: (e) => edit(t('rec.undo.edit'), { crew: e.target.value === '' ? null : +e.target.value }) }), i));
    }
    const s = sheetOf(r);
    put(el('span', { className: 'mc-k' }, t('rec.sheet')), el('span', { className: 'v' }, (s ? s.title : t('rec.sheet.gone')) + ' · ' + (r.at ? t('rec.pinned') : t('rec.unpinned'))));
    put(el('span', { className: 'mc-k' }, t('rec.by')), el('span', { className: 'v' }, [r.author, r.created && dateTime(r.created)].filter(Boolean).join(', ')));
    // attachments by name
    const names = el('ul', { className: 'mc-rec-names' }, ...r.attachments.map((nm) => el('li', {}, el('i', { className: 'bi bi-paperclip', 'aria-hidden': 'true' }), el('span', { className: 'mc-rec-name' }, nm),
      el('button', { type: 'button', className: 'mc-linkbtn', 'aria-label': t('rec.attach.remove', { name: nm }), onclick: () => edit(t('rec.undo.edit'), { attachments: r.attachments.filter((x) => x !== nm) }, { rebuild: true }) }, t('rec.attach.drop')))));
    const nameIn = el('input', { type: 'text', className: 'mc-input', maxlength: '160', 'aria-label': t('rec.attach.name'), placeholder: t('rec.attach.placeholder') });
    const add = () => { const v = nameIn.value.replace(/\s+/g, ' ').trim(); if (v) edit(t('rec.undo.edit'), { attachments: [...r.attachments, v] }, { rebuild: true }); };
    nameIn.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); add(); } });
    const picker = el('input', { type: 'file', multiple: true, className: 'visually-hidden', tabindex: '-1', 'aria-hidden': 'true', onchange: (e) => {
      const got = [...e.target.files].map((f) => f.name);
      if (got.length) edit(t('rec.undo.edit'), { attachments: [...r.attachments, ...got] }, { rebuild: true });
    } });
    put(el('span', { className: 'mc-k' }, t('rec.attach')), el('div', { className: 'mc-rec-attach' }, names,
      el('div', { className: 'mc-rec-attach-add' }, nameIn, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: add }, t('rec.attach.add')), el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => picker.click() }, t('rec.attach.pick')), picker),
      el('p', { className: 'mc-muted' }, t('rec.attach.note'))));
    host.append(grid);
    // thread
    host.append(el('p', { className: 'mc-props-sub' }, t('rec.thread')));
    const thread = el('ol', { className: 'mc-thread' });
    for (const x of r.replies) {
      thread.append(el('li', { className: 'mc-reply' + (x.kind === 'status' ? ' is-status' : '') },
        el('span', { className: 'mc-reply-by' }, [x.author, dateTime(x.date)].filter(Boolean).join(', ')),
        el('span', { className: 'mc-reply-text' }, x.text)));
    }
    if (!r.replies.length) thread.append(el('li', { className: 'mc-note' }, t('rec.thread.none')));
    const box = el('textarea', { className: 'mc-input', rows: '2', maxlength: '20000', 'aria-label': t('rec.reply.label'), placeholder: t('rec.reply.placeholder') });
    const send = () => reply(box.value);
    box.addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(); } });
    host.append(thread, box, el('div', { className: 'mc-actions' },
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: send }, t('rec.reply.send')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => choose(r.id, { jump: true, force: true }) }, t('rec.goto')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => arm({ move: r.id }) }, r.at ? t('rec.pin.move') : t('rec.pin.set')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: removeSelected }, t('rec.remove'))));
  }

  function setStatus(s) {
    const r = get();
    if (!r || r.status === s) return;
    const who = me();
    const note = cleanRecordReply({ kind: 'status', status: s, author: who, date: nowIso(), text: who ? t('reply.status.by', { status: recordStatusName(r.type, s), author: who }) : t('reply.status', { status: recordStatusName(r.type, s) }) }, r.type);
    edit(t('rec.undo.status'), { status: s, replies: [...r.replies, note] }, { rebuild: true });
  }
  async function reply(text) {
    const r = get();
    if (!r || !String(text).trim()) return;
    if (!me()) await api.askAuthor();
    const c = cleanRecordReply({ kind: 'comment', text, author: me(), date: nowIso() }, r.type);
    if (c) edit(t('rec.undo.reply'), { replies: [...r.replies, c] }, { rebuild: true });
  }
  async function removeSelected() {
    const r = get();
    if (!r) return;
    const k = await api.ask(t('rec.remove.title', { no: recordNo(r) }), t('rec.remove.text'), [['cancel', t('dlg.cancel')], ['remove', t('rec.remove'), 'btn-plot']]);
    if (k !== 'remove') return;
    edit(t('rec.undo.remove'), { removed: nowIso() }, { rebuild: true });
    selected = '';
    api.refresh();
  }

  /** Open a record: the Field tab shows it, and (with `jump`) its sheet comes up with the pin selected. */
  async function choose(id, { jump = false, force = false } = {}) {
    const r = store.records.get(id);
    if (!r || r.removed) return;
    const was = selected;
    selected = force || was !== id ? id : '';   // a second tap on an open row closes it
    if (selected && jump) await api.goToKey(r.sheet, r.at);
    api.tabTo('field');
    api.repaint();
    render();
  }

  // ---- placing ----
  function arm(what) {
    placing = what;
    api.setTool('record');
    status(what.move ? t('rec.place.move') : t('rec.place.new', { type: recordTypeName(what.type) }));
    render();
  }
  async function startNew(type) {
    if (!api.curKey()) { status(t('need.pdf')); return; }
    if (!me()) await api.askAuthor();
    if (type === 'log') {   // a daily log belongs to the sheet as a whole; a pin is optional (Move pin)
      const r = makeRecord({ type, sheet: api.curKey(), author: me(), title: '', status: 'Draft' }, [...store.records.values()]);
      store.change(t('rec.undo.add'), (tx) => tx.setRecord(r));
      api.refresh(); await choose(r.id, { force: true });
      status(t('rec.added', { no: recordNo(r) }));
      return;
    }
    arm({ type });
  }
  /** The Place tool's click on the sheet (user space). */
  function place(p) {
    const at = [+p[0], +p[1]];
    const was = placing;
    placing = null;
    api.setTool('select');
    if (!was) return;
    if (was.move) {
      selected = was.move;
      edit(t('rec.undo.move'), { at, sheet: api.curKey() }, { rebuild: true });
      status(t('rec.moved'));
    } else {
      const r = makeRecord({ type: was.type, sheet: api.curKey(), at, author: me(), status: statusesOf(was.type)[0] }, [...store.records.values()]);
      store.change(t('rec.undo.add'), (tx) => tx.setRecord(r));
      selected = r.id;
      status(t('rec.added', { no: recordNo(r) }));
      api.tabTo('field');
      api.refresh();
    }
    render();
  }
  const cancelPlace = () => { if (placing) { placing = null; render(); } };

  // ---- pins on the sheet ----
  const pinSize = () => (root.classList.contains('is-touch') ? 30 : 22);
  function paint(ctx) {
    const key = api.curKey();
    if (!key) return;
    const size = pinSize();
    for (const r of store.onSheetRecords(key)) {
      if (!r.at) continue;
      const [x, y] = view.toScreen(r.at);
      const late = isOverdue(r, today());
      const color = late ? view.colors.red : isDone(r) && r.type !== 'log' ? view.colors.green || view.colors.action : view.colors.action;
      ctx.save();
      ctx.fillStyle = color;
      ctx.strokeStyle = view.colors.paper || '#fff';
      ctx.lineWidth = 2;
      // a teardrop: the point sits on the place, the badge above it
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - size * 0.28, y - size * 0.62);
      ctx.arc(x, y - size * 0.95, size * 0.5, Math.PI * 0.72, Math.PI * 0.28, false);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = view.colors.sheet || '#fff';
      ctx.font = '700 ' + Math.round(size * 0.5) + 'px system-ui, sans-serif';   // i18n-ignore (a font)
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(TYPE_LETTER[r.type], x, y - size * 0.95);
      if (r.id === selected) { ctx.strokeStyle = view.colors.ink || '#000'; ctx.lineWidth = 2; ctx.setLineDash([4, 3]); ctx.beginPath(); ctx.arc(x, y - size * 0.95, size * 0.72, 0, Math.PI * 2); ctx.stroke(); }
      ctx.restore();
    }
  }
  /** The record whose pin is under screen point (sx, sy), nearest first. */
  function hit(sx, sy) {
    const key = api.curKey();
    if (!key) return null;
    const size = pinSize();
    const reach = size * 0.75 + (root.classList.contains('is-touch') ? 6 : 2);
    let best = null, bestD = Infinity;
    for (const r of store.onSheetRecords(key)) {
      if (!r.at) continue;
      const [x, y] = view.toScreen(r.at);
      const d = Math.hypot(sx - x, sy - (y - size * 0.95));
      if (d <= reach && d < bestD) { best = r; bestD = d; }
    }
    return best;
  }
  /** A click on a pin with the Select tool. */
  function pick(r) { choose(r.id, { force: true }); }

  // ---- file: opening, saving, recovering ----
  const keyOfPage = (f, i) => f.pages[i]?.key;
  /** On open: this file's records into the store, mapped to sheet keys. */
  function loadFrom(rec) {
    if (!rec.records?.length) return;
    store.loadRecords(rec.records.map(({ page, ...r }) => ({ ...r, sheet: keyOfPage(rec, page) || '' })).filter((r) => r.sheet));
  }
  /** On save: the file's records as JSON text for the Info entry (null = none). */
  function packFor(f, remap = null) {
    const idx = new Map(f.pages.map((pg) => [pg.key, pg.index]));
    return packRecords([...store.records.values()].filter((r) => idx.has(r.sheet)), (k) => { const i = idx.get(k) ?? -1; return i >= 0 && remap ? remap(i) : i; });
  }
  /** Autosave state: by page index. */
  function stateFor(f) {
    const idx = new Map(f.pages.map((pg) => [pg.key, pg.index]));
    return [...store.records.values()].filter((r) => idx.has(r.sheet)).map((r) => ({ ...clone(r), sheet: idx.get(r.sheet) }));
  }
  function restore(f, list) {
    if (!Array.isArray(list)) return;
    const out = [];
    for (const raw of list.slice(0, 5000)) {
      const r = cleanRecord(raw);
      const k = Number.isInteger(raw?.sheet) ? keyOfPage(f, raw.sheet) : '';
      if (r && k) out.push({ ...r, sheet: k });
    }
    store.loadRecords(out);
  }

  // ---- exports ----
  const stamp = () => nowIso().slice(0, 10);
  function exportCsv() {
    const list = shown();
    if (!list.length) { status(t('rec.export.none')); return; }
    api.download(toCsv(recordRows(list, sheetOf, today())), t('rec.file', { set: api.setName() }) + '.csv', 'text/csv');
    status(t('rec.exported', { n: list.length }));
  }
  async function exportBcf() {
    const list = shown();
    if (!list.length) { status(t('rec.export.none')); return; }
    api.busy(t('bcf.busy'));
    await frame();
    try {
      const topics = [];
      for (const r of list) {
        const s = api.sheetByKey(r.sheet);
        const v = s?.page.view || [0, 0, 612, 792];
        const box = r.at ? [r.at[0] - 120, r.at[1] - 120, r.at[0] + 120, r.at[1] + 120] : v;
        let png = null;
        if (s) {
          try {
            const proxy = await s.file.doc.getPage(s.page.index + 1);
            const c = await view.snapshot(proxy, s.page, box, [], 900);
            const blob = await new Promise((res) => c.toBlob(res, 'image/png'));
            png = blob ? new Uint8Array(await blob.arrayBuffer()) : null;
          } catch { png = null; }
        }
        topics.push({ record: recordTopic(r, sheetOf(r) || {}), sheetTitle: s?.page.title || '', fileName: s?.file.name || '', box, png });
      }
      const { bytes, count } = await buildBcf(topics, { project: api.setName() });
      api.download(bytes, t('rec.file', { set: api.setName() }) + '.bcfzip', 'application/octet-stream');
      status(t('rec.bcf.done', { n: count }));
    } catch (e) {
      status(t('bcf.failed', { error: e.message || e }));
    } finally { api.busy(''); }
  }

  // ---- merging another copy of the set (a tablet that worked offline) ----
  /** The records another copy of this file carries, by page. */
  async function readCopy(file) {
    const data = new Uint8Array(await file.arrayBuffer());
    const { pdfjs, docOptions } = await api.libs();
    const doc = await pdfjs.getDocument({ data, isEvalSupported: false, enableScripting: false, ...docOptions }).promise;
    try {
      const meta = await doc.getMetadata().catch(() => null);
      const custom = meta?.info?.Custom;
      const raw = custom instanceof Map ? custom.get(PRIVATE_RECORDS_KEY) : custom?.[PRIVATE_RECORDS_KEY];
      return { records: unpackRecords(raw ? String(raw) : '', doc.numPages), pages: doc.numPages };
    } finally { try { await doc.destroy(); } catch { /* done */ } }
  }
  async function merge(file) {
    const s = api.curSheet();
    if (!s) { status(t('need.pdf')); return; }
    const f = s.file;
    api.busy(t('rec.merge.busy', { file: file.name }));
    await frame();
    try {
      const got = await readCopy(file);
      if (!got.records.length) { status(t('rec.merge.none', { file: file.name })); return; }
      const incoming = got.records.map(({ page, ...r }) => ({ ...r, sheet: keyOfPage(f, page) || '' })).filter((r) => r.sheet);
      const local = [...store.records.values()].filter((r) => f.pages.some((pg) => pg.key === r.sheet));
      const m = mergeRecords(local, incoming);
      const ids = new Set([...m.added, ...m.changed]);
      const touched = m.records.filter((r) => ids.has(r.id) || m.renumbered.some((x) => x.id === r.id));
      if (touched.length) store.change(t('rec.undo.merge'), (tx) => { for (const r of touched) tx.setRecord(r); });
      api.refresh();
      status(t('rec.merge.done', { added: m.added.length, changed: m.changed.length, renumbered: m.renumbered.length, file: file.name }));
    } catch (e) {
      status(t('rec.merge.failed', { error: e.message || String(e) }));
    } finally { api.busy(''); }
  }

  // ---- wiring ----
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-field-act]');
    if (!b || !root.contains(b)) return;
    const a = b.dataset.fieldAct;
    if (a === 'new') startNew(b.dataset.type);
    else if (a === 'csv') exportCsv();
    else if (a === 'bcf') exportBcf();
    else if (a === 'merge') ui.mergeFile?.click();
    else if (a === 'cancel') { cancelPlace(); api.setTool('select'); }
  });
  ui.mergeFile?.addEventListener('change', (e) => { const f = e.target.files?.[0]; e.target.value = ''; if (f) merge(f); });
  for (const n of Object.values(ui.f)) n?.addEventListener('input', () => { if (n === ui.f.type) fillStatusFilter(); render(); });
  ui.mine?.addEventListener('change', render);

  return { render, paint, hit, pick, place, cancelPlace, loadFrom, packFor, stateFor, restore, mergeFile: merge, select: choose, get placing() { return placing; }, get selected() { return selected; }, startNew, shown, setSelected: (id) => { selected = id; }, newId };
}

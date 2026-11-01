/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tasks-ui.js — the Tasks and Notes tabs, the plain list of changes and the redline buttons (0.8 EG.64, EG.65, EG.66, EG.19).
 * The file model and the rules are tasks.js, changes.js, voice.js and redline.js; this file only draws and asks.
 * Recording only: a voice note is a recording with a caption the person types (rule 35: nothing here turns speech into words).
 */
import { el, shortDate } from './ui-util.js';
import { t } from './i18n.js';
import { toCsv } from './csv.js';
import { TASK_STATES, setTask, clearTask, filterTasks, taskRow, taskCsvRow, taskCsvColumns, isOverdue } from './tasks.js';
import { VOICE, baseMime, voiceFromBytes, pinned, addDecision, recordingBudget } from './voice.js';
import { changesCsvRows } from './changes.js';
import { commentsFromCsv, permitNotes } from './permit.js';
import { progressFromJson, progressNotes } from './progress-marks.js';
import { markersFromJson, hazopMarkers } from './hazop-marks.js';

const skey = (v) => String(v).toLowerCase().replace(/ /g, '_');
const table = (rows, cols) => [cols, ...rows.map((r) => cols.map((c) => r[c] ?? ''))];

export function installActions(api) {
  const { root, store, find, status } = api;
  const q = (s) => root.querySelector(s);
  const ui = {
    tList: q('[data-task-list]'), tCount: q('[data-task-count]'), rlRev: q('[data-redline-rev]'), rlStatus: q('[data-redline-status]'), pmStatus: q('[data-permit-status]'), pgStatus: q('[data-progress-status]'), hzStatus: q('[data-hazop-status]'), hzScale: q('[data-hazop-scale]'),
    nList: q('[data-notes-list]'), nStatus: q('[data-notes-status]'), decForm: q('[data-decision-form]'), decText: q('[data-decision-text]'), decSup: q('[data-decision-replaces]'),
    voiceBtn: q('[data-act="voice-record"]'), voiceLabel: q('[data-voice-label]'), chBox: q('[data-changes-box]'), chText: q('[data-changes-text]'),
  };
  if (!ui.tList) return {};
  const sheetTitle = (k) => api.sheetByKey(k)?.page.title || '';
  const filters = { state: '', who: '' };
  const autoBox = q('[data-task-autoclose]');
  if (autoBox) autoBox.onchange = () => { api.autoClose.set(autoBox.checked); status(t(autoBox.checked ? 'tasks.auto.on' : 'tasks.auto.off', { project: api.autoClose.project() })); };
  const activeTab = () => root.querySelector('[data-tab][aria-selected="true"]')?.dataset.tab;
  let lastChanges = null;

  // ---- Tasks ----
  const linkText = (l) => (!l ? '' : l.kind === 'element' ? t('tasks.link.element', { what: (l.app ? l.app + ' ' : '') + l.element }) : t('tasks.link.region', { sheet: l.sheet || '' }));
  function renderTasks() {
    if (activeTab() !== 'tasks') return;
    const f = { open: filters.state === 'open', state: TASK_STATES.includes(filters.state) ? filters.state : '', assignee: filters.who === 'person' || filters.who === 'assistant' ? filters.who : '', overdue: filters.who === 'overdue' };
    const rows = filterTasks(store.all(), f, sheetTitle).sort((a, b) => (api.sheetOrder(a) - api.sheetOrder(b)) || String(a.created).localeCompare(String(b.created)));
    ui.tCount.textContent = t('tasks.count', { n: rows.length });
    if (autoBox) { autoBox.checked = api.autoClose.get(); }
    ui.tList.replaceChildren(...(rows.length ? rows.map(taskItem) : [el('li', { className: 'mc-note' }, t('tasks.empty'))]));
  }
  function taskItem(m) {
    const k = m.task, over = isOverdue(k);
    const who = k.assignee ? (k.assignee.kind === 'assistant' ? t('tasks.kind.assistant') + (k.assignee.name ? ' · ' + k.assignee.name : '') : k.assignee.name) : t('tasks.unassigned');
    const meta = [sheetTitle(m.sheet), who, k.due ? t(over ? 'tasks.overdue_on' : 'tasks.due_on', { date: shortDate(k.due + 'T12:00:00') }) : '', linkText(k.link)].filter(Boolean).join(', ');
    const head = el('button', { type: 'button', className: 'mc-item', onclick: () => api.jumpTo(m.id) },
      el('span', { className: 'mc-item-main' }, el('span', { className: 'mc-item-title' }, k.title || m.text || m.comment || ''), el('span', { className: 'mc-item-meta' }, meta),
        k.closed ? el('span', { className: 'mc-item-text' }, t('tasks.closed.' + k.closed.how) + (k.closed.summary ? ': ' + k.closed.summary : '')) : null),
      el('span', { className: 'mc-chip' }, t('tasks.state.' + skey(k.state))));
    const sel = el('select', { className: 'mc-select', 'aria-label': t('tasks.f.state'), onchange: (e) => { setTask(store, m.id, { state: e.target.value }, api.getAuthor() || ''); api.refresh(); } },
      ...TASK_STATES.map((s) => el('option', { value: s, selected: s === k.state }, t('tasks.state.' + skey(s)))));
    const rm = el('button', { type: 'button', className: 'mc-linkbtn', onclick: () => { clearTask(store, m.id); api.refresh(); } }, t('tasks.remove'));
    return el('li', {}, head, el('div', { className: 'mc-actions' }, sel, rm));
  }
  function taskDialog(markups) {
    const m0 = markups[0];
    const f = (label, node, id) => [el('label', { for: id }, label), node];
    const title = el('input', { id: 'mc-tk-title', className: 'mc-input', type: 'text', maxlength: '200', value: (m0.text || m0.comment || '').slice(0, 200) });
    const kind = el('select', { id: 'mc-tk-kind', className: 'mc-select' }, el('option', { value: 'person' }, t('tasks.kind.person')), el('option', { value: 'assistant' }, t('tasks.kind.assistant')));
    const name = el('input', { id: 'mc-tk-name', className: 'mc-input', type: 'text', maxlength: '120' });
    const due = el('input', { id: 'mc-tk-due', className: 'mc-input', type: 'date' });
    const link = el('select', { id: 'mc-tk-link', className: 'mc-select' }, el('option', { value: 'region' }, t('tasks.link.opt.region')), el('option', { value: 'element' }, t('tasks.link.opt.element')), el('option', { value: 'none' }, t('tasks.link.opt.none')));
    const eApp = el('input', { id: 'mc-tk-eapp', className: 'mc-input', type: 'text', maxlength: '40', placeholder: t('tasks.link.app') });
    const eId = el('input', { id: 'mc-tk-eid', className: 'mc-input', type: 'text', maxlength: '120', placeholder: t('tasks.link.id') });
    const eBox = el('div', { className: 'mc-form', hidden: true }, ...f(t('tasks.link.app'), eApp, 'mc-tk-eapp'), ...f(t('tasks.link.id'), eId, 'mc-tk-eid'), el('p', { className: 'mc-muted' }, t('tasks.link.element.note')));
    link.onchange = () => { eBox.hidden = link.value !== 'element'; };
    const err = el('p', { className: 'mc-muted', role: 'alert' });
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-label': t('tasks.make') });
    const done = () => { dlg.close(); dlg.remove(); };
    const ok = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: async () => {
      try {
        const patch = { title: title.value, assignee: { kind: kind.value, name: name.value }, due: due.value };
        if (!patch.title.trim() && kind.value === 'person' && !name.value.trim()) throw new Error(t('tasks.need'));
        let n = 0;
        for (const m of markups) {
          const p = { ...patch };
          if (link.value === 'region') { p.link = await api.regionLink(m); if (!p.link) throw new Error(t('tasks.nolink')); }
          else if (link.value === 'element') { if (!eId.value.trim()) throw new Error(t('tasks.link.need_id')); p.link = { kind: 'element', app: eApp.value, element: eId.value, label: eId.value, state: {} }; }
          setTask(store, m.id, p, api.getAuthor() || '');
          n++;
        }
        status(t('tasks.made', { n })); api.refresh(); done();
      } catch (e) { err.textContent = e.message; }
    } }, t('tasks.save'));
    dlg.append(el('form', { method: 'dialog', onsubmit: (e) => e.preventDefault() }, el('h2', { className: 'mc-h' }, t('tasks.make')),
      el('div', { className: 'mc-form' }, ...f(t('tasks.title'), title, 'mc-tk-title'), ...f(t('tasks.assignee.kind'), kind, 'mc-tk-kind'), ...f(t('tasks.assignee.name'), name, 'mc-tk-name'), ...f(t('tasks.due'), due, 'mc-tk-due'), ...f(t('tasks.link'), link, 'mc-tk-link')),
      eBox, err, el('div', { className: 'mc-actions' }, ok, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: done }, t('dlg.cancel')))));
    root.append(dlg); dlg.showModal(); title.focus();
  }
  async function checkNow() {
    status(t('tasks.checking'));
    try {
      const r = await api.checkAll();
      status(r.closed.length ? t('tasks.checked.closed', { n: r.closed.length }) : r.missing.length ? t('tasks.checked.missing', { n: r.missing.length }) : t('tasks.checked.none'));
    } catch (e) { status(t('tasks.checked.failed', { error: e.message || e })); }
  }

  // ---- the tasks file (<name>.markups.json, 0.8 H5) ----
  async function sidecarFile() {
    const inp = el('input', { type: 'file', accept: '.json,application/json', hidden: true });
    inp.onchange = async () => {
      try {
        const r = api.openSidecar(await inp.files[0].text());
        status(r.ok ? t('tasks.file.opened', { n: r.added.length + r.updated.length, kept: r.kept.length, orphans: r.orphans.length }) : t('tasks.file.bad.' + r.why));
      } catch (e) { status(t('tasks.file.bad.json')); }
      inp.remove();
    };
    root.append(inp); inp.click();
  }

  // ---- Redline ----
  async function answersFile() {
    const inp = el('input', { type: 'file', accept: '.json,application/json', hidden: true });
    inp.onchange = async () => {
      try {
        const r = api.applyAnswers(JSON.parse(await inp.files[0].text()));
        ui.rlStatus.textContent = t('redline.applied', { n: r.applied.length, unknown: r.unknown.length });
      } catch (e) { ui.rlStatus.textContent = t('redline.bad', { error: e.message || e }); }
      inp.remove();
    };
    root.append(inp); inp.click();
  }

  // ---- EG.44: the permit package's likely review comments (BimCraft's 01-review-comments.csv) as notes on the open sheet ----
  async function permitFile() {
    const inp = el('input', { type: 'file', accept: '.csv,text/csv', hidden: true });
    inp.onchange = async () => {
      try {
        const s = api.curSheet();
        if (!s) { ui.pmStatus.textContent = t('permit.no_sheet'); return; }
        const { comments, bad } = commentsFromCsv(await inp.files[0].text());
        if (!comments.length) { ui.pmStatus.textContent = t('permit.none'); return; }
        const words = { fail: t('permit.word.fail'), 'heads-up': t('permit.word.headsup'), question: t('permit.word.question'), problem: t('permit.word.problem'), needs: t('permit.word.needs'), found: t('permit.word.found'), subject: t('permit.subject') };
        const fields = permitNotes(comments, { sheet: s.page.key, view: s.page.view, author: api.getAuthor() || '', words });
        store.change(t('permit.undo', { n: fields.length }), (tx) => { for (const f of fields) tx.add(f); });
        ui.pmStatus.textContent = t('permit.done', { n: fields.length, sheet: s.page.title }) + (bad ? ' ' + t('permit.bad', { n: bad }) : '');
      } catch (e) { ui.pmStatus.textContent = t('permit.fail', { error: e.message || e }); }
      inp.remove();
    };
    root.append(inp); inp.click();
  }

  // ---- EG.39: site progress from drone flights and scans (CivilCraft's survey rows) as notes on the open sheet ----
  async function progressFile() {
    const inp = el('input', { type: 'file', accept: '.json,application/json', hidden: true });
    inp.onchange = async () => {
      try {
        const s = api.curSheet();
        if (!s) { ui.pgStatus.textContent = t('permit.no_sheet'); return; }
        const { rows, bad } = progressFromJson(await inp.files[0].text());
        if (!rows.length) { ui.pgStatus.textContent = t('progress.none'); return; }
        const words = { subject: t('progress.subject'), done: t('progress.w.done'), cut: t('progress.w.cut'), fill: t('progress.w.fill'), overCut: t('progress.w.overcut'), overFill: t('progress.w.overfill'), stockpile: t('progress.w.stockpile'), dig: t('progress.w.dig'), within: t('progress.w.within') };
        const fields = progressNotes(rows, { sheet: s.page.key, view: s.page.view, author: api.getAuthor() || '', words });
        store.change(t('progress.undo', { n: fields.length }), (tx) => { for (const f of fields) tx.add(f); });
        ui.pgStatus.textContent = t('progress.done', { n: fields.length, sheet: s.page.title }) + (bad ? ' ' + t('permit.bad', { n: bad }) : '');
      } catch (e) { ui.pgStatus.textContent = t('permit.fail', { error: e.message || e }); }
      inp.remove();
    };
    root.append(inp); inp.click();
  }

  // ---- CH.14: a P&ID's HAZOP node boxes (CadCraft's cadcraft-hazop-markers file) as markers on the open printed sheet ----
  async function hazopFile() {
    const inp = el('input', { type: 'file', accept: '.json,application/json', hidden: true });
    inp.onchange = async () => {
      try {
        const s = api.curSheet();
        if (!s) { ui.hzStatus.textContent = t('permit.no_sheet'); return; }
        const { nodes, bad } = markersFromJson(await inp.files[0].text());
        if (!nodes.length) { ui.hzStatus.textContent = t('hazop.none'); return; }
        const scale = Number(String(ui.hzScale.value).replace(',', '.'));
        if (!(scale > 0)) { ui.hzStatus.textContent = t('hazop.badscale'); return; }
        const words = { node: t('hazop.w.node'), equipment: t('hazop.w.equipment'), lines: t('hazop.w.lines'), subject: t('hazop.subject') };
        const { fields, outside } = hazopMarkers(nodes, { sheet: s.page.key, view: s.page.view, scale, author: api.getAuthor() || '', words });
        if (!fields.length) { ui.hzStatus.textContent = t('hazop.outside', { n: outside }); return; }
        store.change(t('hazop.undo', { n: fields.length }), (tx) => { for (const f of fields) tx.add(f); });
        ui.hzStatus.textContent = t('hazop.done', { n: fields.length, sheet: s.page.title }) + (outside ? ' ' + t('hazop.outside', { n: outside }) : '') + (bad ? ' ' + t('permit.bad', { n: bad }) : '');
      } catch (e) { ui.hzStatus.textContent = t('permit.fail', { error: e.message || e }); }
      inp.remove();
    };
    root.append(inp); inp.click();
  }

  // ---- Notes: voice and decisions ----
  let rec = null;
  const centre = () => { const s = api.curSheet(); if (!s) return null; const v = s.page.view; return { key: s.page.key, at: [(v[0] + v[2]) / 2, (v[1] + v[3]) / 2] }; };
  async function toggleRecord() {
    if (rec) { rec.stop(); return; }
    const c = centre();
    if (!c) { ui.nStatus.textContent = t('need.pdf'); return; }
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') { ui.nStatus.textContent = t('notes.nomic'); return; }
    let stream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { ui.nStatus.textContent = t('notes.denied'); return; }
    const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus', 'audio/mp4'].find((m) => MediaRecorder.isTypeSupported?.(m)) || '';
    const mr = new MediaRecorder(stream, { ...(mime ? { mimeType: mime } : {}), audioBitsPerSecond: VOICE.bitsPerSecond });
    const chunks = [], t0 = Date.now();
    const stop = () => { if (mr.state !== 'inactive') mr.stop(); };
    const timer = setTimeout(stop, recordingBudget() * 1000);
    mr.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    mr.onstop = async () => {
      clearTimeout(timer); stream.getTracks().forEach((x) => x.stop()); rec = null;
      ui.voiceBtn.setAttribute('aria-pressed', 'false'); ui.voiceLabel.textContent = t('notes.record');
      try {
        const blob = new Blob(chunks, { type: mr.mimeType });
        const bytes = new Uint8Array(await blob.arrayBuffer());
        const by = api.getAuthor() || '';
        const v = voiceFromBytes(bytes, baseMime(mr.mimeType) || 'audio/webm', (Date.now() - t0) / 1000, by);
        store.change(t('notes.undo.voice'), (tx) => tx.add({ sheet: c.key, type: 'note', pts: [c.at], text: t('notes.voice.caption'), subject: t('notes.voice.subject'), author: by, voice: v }));
        ui.nStatus.textContent = t('notes.saved', { s: v.dur }); api.refresh();
      } catch (e) { ui.nStatus.textContent = e.message || String(e); }
    };
    rec = { stop };
    ui.voiceBtn.setAttribute('aria-pressed', 'true'); ui.voiceLabel.textContent = t('notes.stop');
    ui.nStatus.textContent = t('notes.recording', { max: recordingBudget() });
    mr.start();
  }
  function playBack(v) {
    const a = new Audio('data:' + v.mime + ';base64,' + v.data);
    a.play().catch(() => { ui.nStatus.textContent = t('notes.noplay'); });
  }
  function renderNotes() {
    if (activeTab() !== 'notes') return;
    const rows = pinned(store.all());
    ui.nList.replaceChildren(...(rows.length ? rows.map((m) => {
      const head = el('button', { type: 'button', className: 'mc-item', onclick: () => api.jumpTo(m.id) },
        el('span', { className: 'mc-item-main' },
          el('span', { className: 'mc-item-title' }, m.decision ? m.decision.text : (m.text || t('notes.voice.caption'))),
          el('span', { className: 'mc-item-meta' }, [sheetTitle(m.sheet), m.author, m.decision ? shortDate(m.decision.at) : t('notes.seconds', { s: m.voice.dur })].filter(Boolean).join(', '))),
        el('span', { className: 'mc-chip' }, m.decision ? t('notes.state.' + skey(m.decision.state)) : t('notes.voice.subject')));
      return el('li', {}, head, m.voice ? el('div', { className: 'mc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => playBack(m.voice) }, t('notes.play'))) : null);
    }) : [el('li', { className: 'mc-note' }, t('notes.empty'))]));
  }
  function showDecisionForm(on) {
    ui.decForm.hidden = !on;
    if (!on) return;
    const live = pinned(store.all()).filter((m) => m.decision && m.decision.state === 'Decided');
    ui.decSup.replaceChildren(el('option', { value: '' }, t('notes.decision.none')), ...live.map((m) => el('option', { value: m.id }, m.decision.text.slice(0, 60))));
    ui.decText.value = ''; ui.decText.focus();
  }
  function saveDecision() {
    const c = centre();
    if (!c) { ui.nStatus.textContent = t('need.pdf'); return; }
    try {
      addDecision(store, { sheet: c.key, at: c.at, text: ui.decText.value, by: api.getAuthor() || '', supersedes: ui.decSup.value });
      showDecisionForm(false); ui.nStatus.textContent = t('notes.pinned'); api.refresh();
    } catch (e) { ui.nStatus.textContent = e.message; }
  }

  // ---- Changes (EG.65): the plain list ----
  async function runChanges() {
    const box = ui.chBox;
    box.hidden = false; ui.chText.textContent = t('changes.busy');
    try { lastChanges = await api.changes({}); ui.chText.textContent = lastChanges.text; }
    catch (e) { lastChanges = null; ui.chText.textContent = e.message || String(e); }
  }

  // ---- wiring ----
  root.addEventListener('click', (e) => {
    const b = e.target.closest?.('[data-act]');
    if (!b) return;
    switch (b.dataset.act) {
      case 'task-make': { const ms = api.selection().map((id) => store.get(id)).filter((m) => m && !m.locked); if (!ms.length) status(t('tasks.pick')); else taskDialog(ms); break; }
      case 'tasks-check': checkNow(); break;
      case 'tasks-file-save': api.exportSidecar(); break;
      case 'tasks-file-open': sidecarFile(); break;
      case 'tasks-csv': { const rows = filterTasks(store.all(), {}, sheetTitle).map((m) => taskCsvRow(m, sheetTitle)); if (!rows.length) status(t('tasks.empty')); else api.dl(toCsv(table(rows, taskCsvColumns)), t('tasks.file') + '.csv', 'text/csv'); break; }
      case 'redline-export': api.exportRedline({ revision: ui.rlRev.value }).then((r) => { if (!r?.items) ui.rlStatus.textContent = t('redline.none'); else ui.rlStatus.textContent = t('redline.exported', { n: r.items }); }); break;
      case 'redline-answers': answersFile(); break;
      case 'permit-import': permitFile(); break;
      case 'progress-import': progressFile(); break;
      case 'hazop-import': hazopFile(); break;
      case 'voice-record': toggleRecord(); break;
      case 'decision-add': showDecisionForm(ui.decForm.hidden); break;
      case 'decision-cancel': showDecisionForm(false); break;
      case 'decision-save': saveDecision(); break;
      case 'changes-list': runChanges(); break;
      case 'changes-copy': if (lastChanges) navigator.clipboard?.writeText(lastChanges.text).then(() => status(t('changes.copied'))); break;
      case 'changes-csv': if (lastChanges) api.dl(toCsv(table(changesCsvRows(lastChanges), ['sheet', 'what', 'where', 'size', 'detail'])), t('changes.file') + '.csv', 'text/csv'); break;
      default:
    }
  });
  for (const sel of root.querySelectorAll('[data-task-filter]')) sel.addEventListener('change', () => { filters[sel.dataset.taskFilter] = sel.value; renderTasks(); });
  const render = () => { renderTasks(); renderNotes(); };
  store.on(() => { if (['tasks', 'notes'].includes(activeTab())) render(); });
  root.addEventListener('click', (e) => { if (e.target.closest?.('[data-tab]')) setTimeout(render, 0); });
  return { render, renderTasks, renderNotes };
}

/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: stored words and tool results; the Tasks tab words them from the language file */
/**
 * tasks.js — markups that act (0.8 EG.64). No DOM.
 *
 * Any markup can carry a `task`: a title, an assignee (a person, or an assistant reached through MCP), a due day and a
 * link to the thing it is about. The task closes by itself when the thing it is linked to really changes.
 *
 *   markup.task = { title, assignee: { kind: 'person' | 'assistant', name } | null, due: '' | 'YYYY-MM-DD',
 *                   state: 'Open' | 'In progress' | 'Done', created (ISO), by,
 *                   link: null | { kind: 'region', file, sheet, label, rect: [x0,y0,x1,y1], segs: [[x1,y1,x2,y2]…], at (ISO) }
 *                              | { kind: 'element', app, file, element, label, state: { key: value }, tol, at (ISO) },
 *                   closed: null | { at, how: 'change' | 'person' | 'assistant', who, summary } }
 *
 * "Really changes" means the linked thing differs from what it was when the task was made, by more than a tolerance:
 *  - a drawing region (a rectangle on a sheet) is compared as vector lines, so a re-plot with a new date stamp or the
 *    same lines a hair off does not count, a moved wall does (compareRegion);
 *  - a model element (a CadCraft/BimCraft object the assistant read through that app's tools) is compared field by
 *    field, numbers within a tolerance, volatile fields (modified, selected …) ignored (compareElement).
 * Nothing here reads a model file: the element's state comes from the person's assistant, which reads it with the other
 * app's own tools and reports it with tasks_check. What it reports is data, never instructions (rule 36).
 */

import { cleanReply, statusReply, STATUSES, nowIso, clone } from './model.js';
import { diffSegments } from './vecdiff.js';

export const TASK_STATES = ['Open', 'In progress', 'Done'];
export const ASSIGNEE_KINDS = ['person', 'assistant'];
export const LIMITS = { title: 200, segs: 300, keys: 60, text: 200, name: 120, label: 120 };
/** Element fields that change without the element changing. */
const VOLATILE = /^(modified|updated|lastmodified|lastupdated|timestamp|time|date|selected|visible|view|hash|version|revision|undo)/i;

const line = (v, max) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const fin = (v) => Number.isFinite(v) && Math.abs(v) < 1e9;
const r1 = (v) => Math.round(v * 10) / 10;
const dayOr = (v) => (/^\d{4}-\d{2}-\d{2}$/.test(String(v)) && !Number.isNaN(+new Date(v + 'T12:00:00Z')) ? String(v) : '');
const isoOr = (v, fallback) => { const s = String(v || ''); return /^\d{4}-\d{2}-\d{2}T[\d:.]+(Z|[+-]\d\d:?\d\d)$/.test(s) && !Number.isNaN(+new Date(s)) ? s : fallback; };

// ---- cleaning -----------------------------------------------------------------------------------------------------

export function cleanAssignee(a) {
  if (!a) return null;
  if (typeof a === 'string') { const name = line(a, LIMITS.name); return name ? { kind: 'person', name } : null; }
  if (typeof a !== 'object') return null;
  const name = line(a.name, LIMITS.name);
  const kind = ASSIGNEE_KINDS.includes(a.kind) ? a.kind : 'person';
  return name || kind === 'assistant' ? { kind, name } : null;
}

/** An element's state as stored: flat keys, short strings, numbers, booleans, null, or a short list of numbers. */
export function cleanElementState(s) {
  const out = {};
  if (!s || typeof s !== 'object' || Array.isArray(s)) return out;
  for (const [k, v] of Object.entries(s).slice(0, LIMITS.keys)) {
    if (!/^[A-Za-z][A-Za-z0-9_. -]{0,39}$/.test(k)) continue;
    if (typeof v === 'number') { if (fin(v)) out[k] = v; }
    else if (typeof v === 'boolean' || v === null) out[k] = v;
    else if (typeof v === 'string') out[k] = line(v, LIMITS.text);
    else if (Array.isArray(v) && v.length <= 16 && v.every(fin)) out[k] = v.map((n) => +n);
  }
  return out;
}

const cleanSegs = (segs) => (Array.isArray(segs) ? segs.filter((s) => Array.isArray(s) && s.length === 4 && s.every(fin)).slice(0, LIMITS.segs).map((s) => s.map(r1)) : []);

export function cleanLink(l) {
  if (!l || typeof l !== 'object') return null;
  const at = isoOr(l.at, nowIso());
  if (l.kind === 'region') {
    const rect = Array.isArray(l.rect) && l.rect.length === 4 && l.rect.every(fin) ? [Math.min(l.rect[0], l.rect[2]), Math.min(l.rect[1], l.rect[3]), Math.max(l.rect[0], l.rect[2]), Math.max(l.rect[1], l.rect[3])].map(r1) : null;
    if (!rect) return null;
    return { kind: 'region', file: line(l.file, 255), sheet: line(l.sheet, 255), label: line(l.label, LIMITS.label), rect, segs: cleanSegs(l.segs), at };
  }
  if (l.kind === 'element') {
    const element = line(l.element, 120);
    if (!element) return null;
    return { kind: 'element', app: line(l.app, 40), file: line(l.file, 255), element, label: line(l.label, LIMITS.label), state: cleanElementState(l.state),
      tol: fin(l.tol) && l.tol >= 0 && l.tol <= 1e6 ? +l.tol : 0.01, at };
  }
  return null;
}

/** A task as stored, from anything (a file, a tool call, another reviewer): every field present and in range; null when it is not one. */
export function cleanTask(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const title = line(raw.title, LIMITS.title);
  const assignee = cleanAssignee(raw.assignee);
  const link = cleanLink(raw.link);
  if (!title && !assignee && !link) return null;
  const c = raw.closed && typeof raw.closed === 'object' ? raw.closed : null;
  const state = TASK_STATES.includes(raw.state) ? raw.state : c ? 'Done' : 'Open';
  return {
    title, assignee, due: dayOr(raw.due), state, created: isoOr(raw.created, nowIso()), by: line(raw.by, LIMITS.name), link,
    closed: state === 'Done' && c ? { at: isoOr(c.at, nowIso()), how: ['change', 'person', 'assistant'].includes(c.how) ? c.how : 'person', who: line(c.who, LIMITS.name), summary: line(c.summary, 400) } : null,
  };
}

// ---- seeing whether the thing really changed ------------------------------------------------------------------

/** The parts of the segments inside the box (Liang–Barsky clip), so a line crossing the region counts for its part inside it. */
export function clipSegments(segs, box, margin = 0) {
  const [x0, y0, x1, y1] = [box[0] - margin, box[1] - margin, box[2] + margin, box[3] + margin];
  const out = [];
  for (const [ax, ay, bx, by] of segs) {
    const dx = bx - ax, dy = by - ay;
    let t0 = 0, t1 = 1, ok = true;
    for (const [p, q] of [[-dx, ax - x0], [dx, x1 - ax], [-dy, ay - y0], [dy, y1 - ay]]) {
      if (p === 0) { if (q < 0) { ok = false; break; } continue; }
      const r = q / p;
      if (p < 0) { if (r > t1) { ok = false; break; } if (r > t0) t0 = r; }
      else { if (r < t0) { ok = false; break; } if (r < t1) t1 = r; }
    }
    if (ok && t1 - t0 > 1e-9) out.push([ax + dx * t0, ay + dy * t0, ax + dx * t1, ay + dy * t1]);
  }
  return out;
}
const length = (segs) => segs.reduce((a, s) => a + Math.hypot(s[2] - s[0], s[3] - s[1]), 0);

/** What a region link keeps when it is made: the sheet's lines inside the markup's rectangle (grown a little), thinned to the limit. */
export function regionSnapshot(allSegs, rect, { margin = 6 } = {}) {
  const box = [Math.min(rect[0], rect[2]), Math.min(rect[1], rect[3]), Math.max(rect[0], rect[2]), Math.max(rect[1], rect[3])];
  let segs = clipSegments(allSegs, box, margin);
  if (segs.length > LIMITS.segs) {
    // keep the longest lines: they carry the shape of the drawing; short ones are hatching and text strokes
    segs = segs.map((s, i) => [Math.hypot(s[2] - s[0], s[3] - s[1]), i]).sort((a, b) => b[0] - a[0] || a[1] - b[1]).slice(0, LIMITS.segs).map(([, i]) => segs[i]);
  }
  return { rect: box, segs: cleanSegs(segs) };
}

/**
 * Has the drawing inside a region link changed? `newSegs` = the new revision's lines for the whole sheet (pageSegments).
 * → { changed, removed, added (points of line), keptShare, summary }. Compared with the same clip and the same cap as the
 * snapshot, so an untouched sheet reads as unchanged. Under `minChange` points (and 2 % of the lines) it is not a change.
 */
export function compareRegion(link, newSegs, { tol = 1.5, minChange = 4, margin = 6 } = {}) {
  if (!link || link.kind !== 'region') throw new Error('Not a region link.');
  const now = regionSnapshot(newSegs, link.rect, { margin }).segs;
  const before = link.segs;
  const d = diffSegments(before, now, { tol, step: 2 });
  const removed = length(d.removed), added = length(d.added), total = Math.max(length(before), 1);
  const changed = (removed + added >= minChange) && (removed + added) / total >= 0.02;
  const words = [];
  if (removed >= minChange) words.push(Math.round(removed) + ' points of line taken out');
  if (added >= minChange) words.push(Math.round(added) + ' points of line put in');
  return { changed, removed: Math.round(removed), added: Math.round(added), keptShare: Math.round((1 - Math.min(1, (removed) / total)) * 100) / 100, summary: changed ? 'The drawing in the marked area changed: ' + words.join(', ') + '.' : 'The drawing in the marked area is the same.' };
}

/**
 * Has the model element changed? `now` = its state now (cleanElementState shape), or null when it is gone.
 * → { changed, gone, diffs: [{ key, from, to }], summary }. Numbers differ only past `tol`; volatile keys are ignored.
 */
export function compareElement(link, now, { tol } = {}) {
  if (!link || link.kind !== 'element') throw new Error('Not an element link.');
  if (now === null || now === undefined) return { changed: true, gone: true, diffs: [], summary: 'The element is no longer in the model.' };
  const a = link.state || {}, b = cleanElementState(now);
  // A link made from the page has no state yet (the person cannot read the other app): the first report is the baseline, not a change.
  if (!Object.keys(a).length) return { changed: false, gone: false, baseline: true, state: b, diffs: [], summary: 'The element\'s state was recorded; the task closes when it changes.' };
  const t = fin(tol) ? tol : link.tol;
  const same = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') return Math.abs(x - y) <= t;
    if (Array.isArray(x) && Array.isArray(y)) return x.length === y.length && x.every((v, i) => Math.abs(v - y[i]) <= t);
    return x === y;
  };
  const diffs = [];
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (VOLATILE.test(k)) continue;
    if (!(k in a)) diffs.push({ key: k, from: undefined, to: b[k] });
    else if (!(k in b)) diffs.push({ key: k, from: a[k], to: undefined });
    else if (!same(a[k], b[k])) diffs.push({ key: k, from: a[k], to: b[k] });
  }
  const show = (v) => (v === undefined ? 'nothing' : Array.isArray(v) ? '[' + v.join(', ') + ']' : typeof v === 'string' ? '"' + v + '"' : String(v));
  const shown = diffs.slice(0, 4).map((d) => d.key + ' ' + show(d.from) + ' → ' + show(d.to));
  return { changed: diffs.length > 0, gone: false, diffs, summary: diffs.length ? 'The element changed: ' + shown.join('; ') + (diffs.length > 4 ? ' and ' + (diffs.length - 4) + ' more.' : '.') : 'The element is the same.' };
}

// ---- the store: one undo step each ---------------------------------------------------------------------------------

const labelOf = (what) => 'Task: ' + what;
export const isTask = (m) => !!(m && m.task);
export const today = () => nowIso().slice(0, 10);
export const isOverdue = (task, day = today()) => !!(task && task.due && task.state !== 'Done' && task.due < day);

/** Make a markup a task, or change its task (a patch of title, assignee, due, state, link): one undo step. → the stored task. */
export function setTask(store, id, patch, who, label = null) {
  const m = store.get(id);
  if (!m) throw new Error('There is no markup ' + id + ' (markups_list shows them).');
  const was = m.task || null;
  const merged = { ...(was || { created: nowIso(), by: who }), ...patch };
  if ('assignee' in patch) merged.assignee = patch.assignee;
  if (patch.state && patch.state !== 'Done') merged.closed = null;
  if (patch.state === 'Done' && !merged.closed) merged.closed = { at: nowIso(), how: 'person', who, summary: '' };
  const task = cleanTask(merged);
  if (!task) throw new Error('A task needs a title, an assignee or a link.');
  const entries = [];
  if (task.state === 'Done' && (!was || was.state !== 'Done') && m.status !== 'Completed') entries.push(statusReply('Completed', who));
  if (task.state !== 'Done' && was && was.state === 'Done' && m.status === 'Completed') entries.push(statusReply('Open', who));
  const status = entries.length ? entries[0].status : m.status;
  store.change(label || labelOf(was ? 'change' : 'new'), (tx) => tx.update(id, { task, status, replies: [...m.replies, ...entries.filter(Boolean)] }));
  return task;
}

/** Take the task off a markup (the markup stays): one undo step. */
export function clearTask(store, id) {
  const m = store.get(id);
  if (!m || !m.task) return false;
  store.change(labelOf('remove'), (tx) => tx.update(id, { task: null }));
  return true;
}

/** Keep the state an element had when first reported, as the baseline its task is compared with from now on. One undo step. → ids. */
export function adoptBaselines(store, results) {
  const todo = results.filter((r) => r && r.baseline && store.get(r.id)?.task?.link?.kind === 'element');
  if (!todo.length) return [];
  store.change(labelOf('baseline'), (tx) => {
    for (const r of todo) { const m = store.get(r.id); tx.update(r.id, { task: { ...m.task, link: { ...m.task.link, state: cleanElementState(r.state), at: nowIso() } } }); }
  });
  return todo.map((r) => r.id);
}

/**
 * Close the tasks whose linked thing changed. `results` = [{ id, changed, summary }] (from compareRegion / compareElement).
 * Done tasks and unchanged results are left alone. The markup's status becomes Completed with "Status set to Completed by
 * <who>" and a comment saying what changed. All in one undo step. → the ids closed.
 */
export function closeChanged(store, results, who = 'MarkupCraft') {
  const todo = results.filter((r) => r && r.changed && store.get(r.id)?.task && store.get(r.id).task.state !== 'Done' && store.get(r.id).task.link);
  if (!todo.length) return [];
  store.change(labelOf(todo.length === 1 ? 'closed by change' : todo.length + ' closed by change'), (tx) => {
    for (const r of todo) {
      const m = store.get(r.id);
      const task = cleanTask({ ...m.task, state: 'Done', closed: { at: nowIso(), how: 'change', who, summary: r.summary } });
      const entries = [];
      if (m.status !== 'Completed') entries.push(statusReply('Completed', who));
      entries.push(cleanReply({ author: who, text: 'Closed because the linked ' + (m.task.link.kind === 'element' ? 'element' : 'drawing area') + ' changed. ' + (r.summary || ''), kind: 'comment' }));
      tx.update(r.id, { task, status: 'Completed', replies: [...m.replies, ...entries.filter(Boolean)] });
    }
  });
  return todo.map((r) => r.id);
}

/**
 * Check every open task with a link. `current(task, markup)` returns what the thing is now: for a region link the lines of the
 * new sheet ({ segs }) or null when the sheet is not there; for an element link the element's state, or null when it is gone.
 * It may be async. A task whose thing cannot be found is left open and listed in `missing`.
 */
export async function checkTasks(store, current, opts = {}) {
  const results = [], missing = [];
  for (const m of store.all()) {
    const t = m.task;
    if (!t || t.state === 'Done' || !t.link) continue;
    if (opts.ids && !opts.ids.includes(m.id)) continue;
    const now = await current(t, m);
    if (t.link.kind === 'region') {
      if (!now || !Array.isArray(now.segs)) { missing.push(m.id); continue; }
      results.push({ id: m.id, ...compareRegion(t.link, now.segs, opts) });
    } else if (t.link.kind === 'element') {
      if (now === undefined) { missing.push(m.id); continue; }
      results.push({ id: m.id, ...compareElement(t.link, now, opts) });
    }
  }
  return { results, missing };
}

// ---- rows for lists, tools and exports ---------------------------------------------------------------------------------

export function taskRow(m, sheetTitle = (k) => k, day = today()) {
  const t = m.task;
  return {
    id: m.id, sheet: sheetTitle(m.sheet), markup: m.type, title: t.title || m.text || m.comment || '', assignee: t.assignee ? { kind: t.assignee.kind, name: t.assignee.name || null } : null,
    due: t.due || null, overdue: isOverdue(t, day), state: t.state, created: t.created, by: t.by || null,
    link: t.link ? { kind: t.link.kind, ...(t.link.kind === 'element' ? { app: t.link.app || null, element: t.link.element } : { file: t.link.file || null, sheet: t.link.sheet || null }), label: t.link.label || null, since: t.link.at } : null,
    closed: t.closed ? { how: t.closed.how, at: t.closed.at, who: t.closed.who || null, summary: t.closed.summary || null } : null,
  };
}

/** The tasks, filtered. `assignee` 'assistant' = any assistant; 'person' = any person; else a name (part of it). `me` = the asker's name for 'mine'. */
export function filterTasks(markups, { state = '', assignee = '', overdue = false, sheet = '', linked = null, open = false } = {}, sheetTitle = (k) => k, day = today()) {
  const lc = (s) => String(s ?? '').toLowerCase();
  return markups.filter((m) => {
    const t = m.task;
    if (!t) return false;
    if (state && t.state !== state) return false;
    if (open && t.state === 'Done') return false;
    if (assignee) {
      const a = t.assignee;
      if (!a) return false;
      if (assignee === 'assistant' || assignee === 'person') { if (a.kind !== assignee) return false; }
      else if (!lc(a.name).includes(lc(assignee))) return false;
    }
    if (overdue && !isOverdue(t, day)) return false;
    if (sheet && !lc(sheetTitle(m.sheet)).includes(lc(sheet))) return false;
    if (linked === true && !t.link) return false;
    if (linked === false && t.link) return false;
    return true;
  });
}

export const taskCsvColumns = ['id', 'sheet', 'title', 'assignee', 'assigneeKind', 'due', 'state', 'overdue', 'link', 'closedBy', 'closedAt'];
export function taskCsvRow(m, sheetTitle = (k) => k, day = today()) {
  const r = taskRow(m, sheetTitle, day);
  return { id: r.id, sheet: r.sheet, title: r.title, assignee: r.assignee?.name || '', assigneeKind: r.assignee?.kind || '', due: r.due || '', state: r.state, overdue: r.overdue ? 'yes' : '',
    link: r.link ? (r.link.kind === 'element' ? (r.link.app ? r.link.app + ' ' : '') + r.link.element : (r.link.label || r.link.sheet || 'drawing area')) : '', closedBy: r.closed?.how || '', closedAt: r.closed?.at || '' };
}

export { STATUSES, clone };

/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: file data and error codes; tasks-ui.js words every refusal from the language file */
/**
 * sidecar.js — the JSON file that rides with the drawing: `<name>.markups.json` (0.8 H5 of docs/FILE-FORMATS.md; EG.64 markups that act). No DOM, no imports
 * besides the task code. It carries NO second task model: each entry holds exactly what tasks.js `cleanTask` stores on a markup, plus the markup's id (the
 * join key), its thread (the history of status changes and comments), and the rule the task closes by. A PDF travels without it, and the file can be
 * merged by git (tools/cli/merge.mjs, format `markupcraft-markups`).
 *
 *   { format: 'markupcraft-markups', version: 1, pdf: 'name.pdf', autoClose: boolean,
 *     tasks: [ { id: <markup id>, sheet: <sheet key>, kind: <markup type>, text: <the markup's own words, ≤ 200>,
 *               task: { title, assignee: { kind: 'person' | 'assistant', name } | null, due, state: 'Open' | 'In progress' | 'Done', created, by,
 *                       link: null | { kind: 'region', … } | { kind: 'element', app, file, element, state, tol, … }, closed: null | { at, how, who, summary } },
 *               rule: 'close-on-change' | 'manual',      // 'close-on-change' when the task has a link: Check now (or the assistant's tasks_check) closes it when the linked thing changed
 *               history: [ { id, author, date, kind: 'comment' | 'status', status, text } ] } ],
 *     saved: ISO }                                         // last, so a save changes only the end of the file (H3)
 *
 *   FORMAT · VERSION
 *   buildSidecar(markups, { pdf, autoClose, sheetKey?, now }) → the object (tasks sorted by id: one entry per line group, merge-friendly)
 *   sidecarText(obj) → the text Save writes (one property per line; short number lists on one line; `saved` last)
 *   readSidecar(textOrObject) → { ok: true, sidecar } | { ok: false, why: 'size' | 'json' | 'format' | 'version' | 'newer' | 'other' }
 *   applySidecar(store, sidecar, { who }) → { added, updated, kept, orphans: [ids] }     one undo step; the markup itself is never created or moved by it
 */
import { cleanTask, isTask } from './tasks.js';
import { cleanReply, nowIso } from './model.js';

export const FORMAT = 'markupcraft-markups';
export const VERSION = 1;
const MAX_BYTES = 16 * 1024 * 1024, MAX_TASKS = 20000, MAX_HISTORY = 200;
const line = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const rule = (task) => (task && task.link ? 'close-on-change' : 'manual');

/** The moment a task last changed: its newest history entry, its closing, its link baseline or its start. For "which side is newer" when a file and a sidecar both hold it. */
export function lastActivity(task, history = []) {
  const stamps = [task?.created, task?.closed?.at, task?.link?.at, ...history.map((h) => h.date)].filter((s) => typeof s === 'string' && s);
  return stamps.sort().pop() || '';
}

export function buildSidecar(markups, { pdf = '', autoClose = false, now = new Date() } = {}) {
  const tasks = [];
  for (const m of markups) {
    if (!isTask(m)) continue;
    const history = (m.replies || []).map((r) => cleanReply({ ...r, photo: undefined })).filter(Boolean).slice(-MAX_HISTORY)
      .map((r) => ({ id: r.id, author: r.author, date: r.date, kind: r.kind, status: r.status, text: r.text }));
    tasks.push({ id: m.id, sheet: String(m.sheet || ''), kind: String(m.type || ''), text: line(m.text || m.comment || m.label, 200), task: JSON.parse(JSON.stringify(m.task)), rule: rule(m.task), history });
  }
  tasks.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  return { format: FORMAT, version: VERSION, pdf: line(pdf, 255), autoClose: !!autoClose, tasks, saved: now.toISOString().replace(/\.\d+Z$/, 'Z') };
}

/** One property per line, a list of plain numbers on one line (a region's rectangle, a line segment), `saved` last. */
export function sidecarText(obj) {
  const { saved, ...rest } = obj;
  const text = JSON.stringify({ ...rest, saved }, null, 1).replace(/\[\n\s*(-?\d[^,\[\]{}"\n]*(?:,\n\s*-?\d[^,\[\]{}"\n]*)*)\n\s*\]/g, (m, body) => '[' + body.replace(/,\n\s*/g, ', ') + ']');
  return text + '\n';
}

export function readSidecar(input) {
  let o = input;
  if (typeof input === 'string') {
    if (input.length > MAX_BYTES) return { ok: false, why: 'size' };
    try { o = JSON.parse(input); } catch { return { ok: false, why: 'json' }; }
  }
  if (!o || typeof o !== 'object' || Array.isArray(o)) return { ok: false, why: 'format' };
  if (o.format !== FORMAT) return { ok: false, why: 'other' };                               // another app's file
  if (!Number.isInteger(o.version) || o.version < 1) return { ok: false, why: 'version' };   // no version, 0, 1.5, '1'
  if (o.version > VERSION) return { ok: false, why: 'newer' };                               // saved by a newer MarkupCraft: refused, never half-read
  const tasks = [], seen = new Set();
  for (const e of Array.isArray(o.tasks) ? o.tasks.slice(0, MAX_TASKS) : []) {
    if (!e || typeof e.id !== 'string' || !/^[A-Za-z0-9._-]{1,80}$/.test(e.id) || seen.has(e.id)) continue;
    const task = cleanTask(e.task); if (!task) continue;
    seen.add(e.id);
    const history = (Array.isArray(e.history) ? e.history.slice(-MAX_HISTORY) : []).map(cleanReply).filter(Boolean)
      .map((r) => ({ id: r.id, author: r.author, date: r.date, kind: r.kind, status: r.status, text: r.text }));
    tasks.push({ id: e.id, sheet: line(e.sheet, 255), kind: line(e.kind, 30), text: line(e.text, 200), task, rule: rule(task), history });   // the rule is worked out again from the link, never trusted from the file
  }
  return { ok: true, sidecar: { format: FORMAT, version: o.version, pdf: line(o.pdf, 255), autoClose: o.autoClose === true, tasks, saved: typeof o.saved === 'string' ? line(o.saved, 40) : '' } };
}

/**
 * Put the file's tasks on the markups the open set already has (matched by markup id). A markup with no task gets the file's; one that has a task keeps
 * whichever side was changed later (a tie keeps the open set's); the thread gains the entries it lacks (by reply id). A task whose markup is not in the
 * open set is listed in `orphans` and left alone: a task is a property of a markup, and the sidecar never makes or moves a markup.
 */
export function applySidecar(store, sidecar, { who = 'MarkupCraft' } = {}) {
  const res = { added: [], updated: [], kept: [], orphans: [] };
  const todo = [];
  for (const e of sidecar.tasks) {
    const m = store.get(e.id);
    if (!m) { res.orphans.push(e.id); continue; }
    const mine = m.task || null;
    const have = new Set((m.replies || []).map((r) => r.id));
    const extra = e.history.filter((h) => !have.has(h.id));
    const replies = extra.length ? [...(m.replies || []), ...extra.map((h) => cleanReply(h)).filter(Boolean)].sort((a, b) => String(a.date).localeCompare(String(b.date))) : null;
    const theirsNewer = !mine || lastActivity(e.task, e.history) > lastActivity(mine, m.replies || []);
    const task = theirsNewer ? e.task : mine;
    if (!mine) res.added.push(m.id); else if (theirsNewer && JSON.stringify(mine) !== JSON.stringify(e.task)) res.updated.push(m.id); else if (!replies) { res.kept.push(m.id); continue; }
    else res.updated.push(m.id);
    const patch = { task };
    if (replies) patch.replies = replies;
    if (task.state === 'Done' && m.status !== 'Completed') patch.status = 'Completed';
    todo.push([m.id, patch]);
  }
  if (todo.length) store.change('Tasks file: ' + todo.length + ' ' + (todo.length === 1 ? 'task' : 'tasks'), (tx) => { for (const [id, patch] of todo) tx.update(id, patch); });
  void who; void nowIso;
  return res;
}

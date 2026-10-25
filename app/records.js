/* SPDX-License-Identifier: Apache-2.0 */
/**
 * records.js — field records (0.7 LC.7): RFIs, submittals and daily logs tied to a sheet and a place on it. No DOM.
 *
 * A record is its own object (not a markup): its own number per type, status list, assignee, due date, thread and
 * attachment names. It lives on one sheet (`sheet` = "<fileId>:<pageIndex>", like markups) at a point `at` in PDF user
 * space (points, y up), or on the sheet as a whole (`at` null).
 *   { id, type: 'rfi'|'submittal'|'log', n, title, text, sheet, at: [x,y]|null, status, assignee, due ('' | YYYY-MM-DD),
 *     date (logs: the day logged), weather, crew (logs), author, created, modified (ISO), removed ('' | ISO: a deleted
 *     record stays as a mark so a merge does not bring it back), attachments: [name], replies: [reply] }
 * A file carries its records in the Info entry /MarkupCraftRecords as JSON, by page index (`packRecords` / `unpackRecords`);
 * what is read is untrusted and cleaned field by field. `mergeRecords` joins two copies of the same set by stable ids.
 */

import { t } from './i18n.js';
import { newId, nowIso, clone } from './model.js';

export const RECORD_TYPES = ['rfi', 'submittal', 'log'];
/** Stored words (file data); recordStatusName gives the words to show. First = what a new record starts as. */
export const RECORD_STATUSES = {
  rfi: ['Open', 'Answered', 'Closed'],                                                                               // i18n-ignore
  submittal: ['Open', 'In review', 'Approved', 'Approved as noted', 'Revise and resubmit', 'Closed'],                  // i18n-ignore
  log: ['Draft', 'Final'],                                                                                           // i18n-ignore
};
/** Statuses after which a due date no longer counts as late. */
const DONE = { rfi: ['Answered', 'Closed'], submittal: ['Approved', 'Approved as noted', 'Revise and resubmit', 'Closed'], log: ['Draft', 'Final'] };   // i18n-ignore
export const LIMITS = { records: 5000, replies: 1000, attachments: 50, json: 8 * 1024 * 1024 };
const keyOf = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '_');

export const recordTypeName = (type) => (RECORD_TYPES.includes(type) ? t('rec.type.' + type) : String(type || ''));
export const recordStatusName = (type, s) => (RECORD_STATUSES[type]?.includes(s) ? t('rec.status.' + keyOf(s)) : String(s || ''));
/** "RFI-0007": the prefix is in the page's language file. */
export const recordNo = (r) => t('rec.prefix.' + r.type) + '-' + String(r.n).padStart(4, '0');
/** The statuses a type can be in. */
export const statusesOf = (type) => RECORD_STATUSES[type] || RECORD_STATUSES.rfi;

const plain = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').slice(0, max);
const line = (v, max) => plain(v, max).replace(/[\r\n\t]+/g, ' ').trim();
const isoOr = (v, fallback) => { const s = String(v || ''); return /^\d{4}-\d{2}-\d{2}(T[\d:.]+(Z|[+-]\d\d:?\d\d)?)?$/.test(s) && !Number.isNaN(+new Date(s)) ? s : fallback; };
const dayOr = (v) => (/^\d{4}-\d{2}-\d{2}$/.test(String(v)) && !Number.isNaN(+new Date(v + 'T12:00:00Z')) ? String(v) : '');
const fin = (v) => Number.isFinite(v) && Math.abs(v) < 1e7;
const idOr = (v) => (typeof v === 'string' && /^[A-Za-z0-9._-]{1,80}$/.test(v) ? v : newId());

/** One reply of a record's thread: { id, author, date, text, kind: 'comment' | 'status', status } (status words are the type's). */
export function cleanRecordReply(r, type) {
  if (!r || typeof r !== 'object') return null;
  const kind = r.kind === 'status' ? 'status' : 'comment';
  const status = kind === 'status' && statusesOf(type).includes(r.status) ? r.status : '';
  const text = plain(r.text, 20000);
  if (kind === 'comment' && !text.trim()) return null;
  if (kind === 'status' && !status) return null;
  return { id: idOr(r.id), author: line(r.author, 120), date: isoOr(r.date, nowIso()), text, kind, status };
}

/** A record as it is stored, from anything: every field present and in range. Null when it cannot be one. */
export function cleanRecord(raw) {
  if (!raw || typeof raw !== 'object' || !RECORD_TYPES.includes(raw.type)) return null;
  const type = raw.type;
  const now = nowIso();
  const n = Number.isInteger(+raw.n) && +raw.n >= 1 && +raw.n <= 999999 ? +raw.n : 1;
  const at = Array.isArray(raw.at) && raw.at.length === 2 && fin(+raw.at[0]) && fin(+raw.at[1]) ? [+raw.at[0], +raw.at[1]] : null;
  const names = [];
  for (const a of Array.isArray(raw.attachments) ? raw.attachments : []) {
    const nm = line(typeof a === 'string' ? a : a?.name, 160);
    if (nm && !names.includes(nm) && names.length < LIMITS.attachments) names.push(nm);
  }
  const replies = [];
  const seen = new Set();
  for (const x of (Array.isArray(raw.replies) ? raw.replies : []).slice(0, LIMITS.replies)) {
    const c = cleanRecordReply(x, type);
    if (c && !seen.has(c.id)) { seen.add(c.id); replies.push(c); }
  }
  const created = isoOr(raw.created, now);
  const crew = Number.isInteger(+raw.crew) && +raw.crew >= 0 && +raw.crew <= 100000 && String(raw.crew) !== '' ? +raw.crew : null;
  return {
    id: idOr(raw.id), type, n,
    title: line(raw.title, 200), text: plain(raw.text, 20000),
    sheet: typeof raw.sheet === 'string' ? raw.sheet.slice(0, 200) : '', at,
    status: statusesOf(type).includes(raw.status) ? raw.status : statusesOf(type)[0],
    assignee: line(raw.assignee, 120), due: dayOr(raw.due),
    date: type === 'log' ? dayOr(raw.date) : '', weather: type === 'log' ? line(raw.weather, 120) : '', crew: type === 'log' ? crew : null,
    author: line(raw.author, 120), created, modified: isoOr(raw.modified, created),
    removed: raw.removed ? isoOr(raw.removed, now) : '',
    attachments: names, replies: replies.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0)),
  };
}

/** A new record with every field present; `n` is the next free number of its type among `existing` (all, removed too). */
export function makeRecord(fields, existing = []) {
  const type = RECORD_TYPES.includes(fields.type) ? fields.type : 'rfi';
  let max = 0;
  for (const r of existing) if (r.type === type && r.n > max) max = r.n;
  const now = nowIso();
  const day = now.slice(0, 10);
  return cleanRecord({ date: type === 'log' ? day : '', ...fields, type, n: fields.n || max + 1, id: fields.id || newId(), created: fields.created || now, modified: fields.modified || fields.created || now, removed: '' });
}

/** Is the due date past and the record still waiting on someone? `today` = YYYY-MM-DD. */
export function isOverdue(r, today = nowIso().slice(0, 10)) {
  return !r.removed && !!r.due && r.due < today && !DONE[r.type].includes(r.status);
}
export const isDone = (r) => DONE[r.type].includes(r.status);

/** Assigned to this person? Names compare without case or surrounding space; an empty name matches nothing. */
export function assignedTo(r, name) {
  const a = String(r.assignee || '').trim().toLowerCase();
  const n = String(name || '').trim().toLowerCase();
  return !!a && !!n && a === n;
}

/**
 * The log view: filter { type, status, due: ''|'overdue'|'week'|'none'|'set', mine: bool, sheet: key|'', q } and sort
 * (type, number). `me` = the person's name, `today` = YYYY-MM-DD. Removed records never show.
 */
export function filterRecords(list, f = {}, { me = '', today = nowIso().slice(0, 10) } = {}) {
  const week = new Date(new Date(today + 'T12:00:00Z').getTime() + 7 * 86400000).toISOString().slice(0, 10);
  const q = String(f.q || '').trim().toLowerCase();
  return list.filter((r) => {
    if (r.removed) return false;
    if (f.type && r.type !== f.type) return false;
    if (f.status && r.status !== f.status) return false;
    if (f.sheet && r.sheet !== f.sheet) return false;
    if (f.mine && !assignedTo(r, me)) return false;
    if (f.due === 'overdue' && !isOverdue(r, today)) return false;
    if (f.due === 'week' && !(r.due && r.due >= today && r.due <= week && !isDone(r))) return false;
    if (f.due === 'none' && r.due) return false;
    if (f.due === 'set' && !r.due) return false;
    if (q && !([recordNo(r), r.title, r.text, r.assignee, r.weather, ...r.attachments].join('\n').toLowerCase().includes(q))) return false;
    return true;
  }).sort((a, b) => RECORD_TYPES.indexOf(a.type) - RECORD_TYPES.indexOf(b.type) || a.n - b.n);
}

// ---- in the file ----

/**
 * The records of one file as JSON text for Info /MarkupCraftRecords: `pageOf(sheetKey)` → page index or -1 (records on
 * sheets the file does not have are left out). Null when there is nothing to keep.
 */
export function packRecords(records, pageOf) {
  const out = [];
  for (const r of records) {
    const page = pageOf(r.sheet);
    if (!(page >= 0)) continue;
    const { sheet, ...rest } = clone(r);
    void sheet;
    out.push({ ...rest, page });
  }
  return out.length ? JSON.stringify({ v: 1, records: out }) : null;
}

/** Records out of Info text: untrusted. → [{...record, page}] with `sheet` left '' (the caller maps page → key). */
export function unpackRecords(text, pageCount) {
  if (typeof text !== 'string' || !text || text.length > LIMITS.json) return [];
  let v;
  try { v = JSON.parse(text); } catch { return []; }
  if (!v || typeof v !== 'object' || v.v !== 1 || !Array.isArray(v.records)) return [];
  const out = [];
  const ids = new Set();
  for (const raw of v.records.slice(0, LIMITS.records)) {
    const page = Number.isInteger(raw?.page) ? raw.page : -1;
    if (!(page >= 0 && page < pageCount)) continue;
    const r = cleanRecord(raw);
    if (!r || ids.has(r.id)) continue;
    ids.add(r.id);
    out.push({ ...r, page });
  }
  return out;
}

// ---- merging two copies of a set (offline tablets) ----

const later = (a, b) => (a >= b ? a : b);
/** When a record last changed, counting its removal and its newest reply. */
const stamp = (r) => later(later(r.modified, r.removed || ''), r.replies.at(-1)?.date || '');

/**
 * Join `incoming` (records read from another copy of the set) into `local`, by stable id. Returns the merged list and
 * what happened: { records, added: [ids], changed: [ids], renumbered: [{id, from, to}], kept: n }.
 *  - a record only one copy has is kept;
 *  - a record both have: the fields come from the copy changed last (ties keep the local one), the thread is both threads
 *    joined by reply id in date order, attachment names are both lists joined, and a deletion counts as a change at its time;
 *  - two different records with the same type and number (both copies numbered a new one offline): the incoming one gets the
 *    next free number, so a number names one record.
 */
export function mergeRecords(local, incoming) {
  const byId = new Map(local.map((r) => [r.id, clone(r)]));
  const added = [], changed = [], renumbered = [];
  let kept = 0;
  for (const raw of incoming) {
    const inc = cleanRecord(raw);
    if (!inc) continue;
    const mine = byId.get(inc.id);
    if (!mine) { byId.set(inc.id, inc); added.push(inc.id); continue; }
    const theirsNewer = stamp(inc) > stamp(mine);
    const base = theirsNewer ? inc : mine;
    const replies = new Map();
    for (const r of [...mine.replies, ...inc.replies]) if (!replies.has(r.id)) replies.set(r.id, r);
    const merged = {
      ...clone(base),
      replies: [...replies.values()].sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0)),
      attachments: [...new Set([...mine.attachments, ...inc.attachments])].slice(0, LIMITS.attachments),
      created: mine.created < inc.created ? mine.created : inc.created,
      modified: later(mine.modified, inc.modified),
      removed: base.removed,
    };
    merged.sheet = base.sheet || mine.sheet;
    if (JSON.stringify(merged) === JSON.stringify(mine)) { kept++; continue; }
    byId.set(inc.id, merged);
    changed.push(inc.id);
  }
  // numbers name one record: the later arrival of a clash moves on
  const taken = new Map();
  const merged = [...byId.values()];
  for (const r of merged) taken.set(r.type + ':' + r.n, (taken.get(r.type + ':' + r.n) || 0) + 1);
  const used = new Set(merged.map((r) => r.type + ':' + r.n));
  for (const r of merged) {
    if (taken.get(r.type + ':' + r.n) < 2 || !added.includes(r.id)) continue;
    let n = r.n;
    while (used.has(r.type + ':' + n)) n++;
    renumbered.push({ id: r.id, from: r.n, to: n });
    taken.set(r.type + ':' + r.n, taken.get(r.type + ':' + r.n) - 1);
    r.n = n;
    used.add(r.type + ':' + n);
  }
  return { records: merged, added, changed, renumbered, kept };
}

// ---- exports ----

const day = (iso) => (iso ? String(iso).slice(0, 10) : '');
/** sheetOf(r) → { title, file, page }. Removed records are not listed. */
export function recordRows(records, sheetOf, today = nowIso().slice(0, 10)) {
  const head = ['no', 'type', 'sheet', 'file', 'page', 'title', 'text', 'status', 'assignee', 'due', 'overdue', 'date', 'weather', 'crew', 'attachments', 'author', 'created', 'modified', 'replies', 'last_reply'].map((k) => t('rcsv.' + k));
  const rows = [head];
  for (const r of records.filter((x) => !x.removed).sort((a, b) => RECORD_TYPES.indexOf(a.type) - RECORD_TYPES.indexOf(b.type) || a.n - b.n)) {
    const s = sheetOf(r) || {};
    const last = r.replies.at(-1);
    rows.push([recordNo(r), recordTypeName(r.type), s.title || '', s.file || '', s.page ?? '', r.title, r.text, recordStatusName(r.type, r.status), r.assignee, r.due,
      isOverdue(r, today) ? t('csv.yes') : '', r.date, r.weather, r.crew ?? '', r.attachments.join('; '), r.author, day(r.created), day(r.modified), r.replies.length,
      last ? (last.author ? last.author + ': ' : '') + last.text : '']);
  }
  return rows;
}

/** A record as the topic data bcf.js writes: { id, typeName, what, status, created, modified, author, due, assignee, description, replies, labels }. */
export function recordTopic(r, sheet = {}) {
  const what = recordNo(r) + (r.title ? ' ' + r.title : '');
  const facts = r.type === 'log' ? [r.date && t('rec.bcf.date', { date: r.date }), r.weather && t('rec.bcf.weather', { weather: r.weather }), r.crew !== null && t('rec.bcf.crew', { n: r.crew })].filter(Boolean) : [];
  return {
    id: r.id, kind: r.type, what, status: r.status, created: r.created, modified: r.modified, author: r.author, due: r.due, assignee: r.assignee,
    description: [r.text, ...facts, r.attachments.length ? t('rec.bcf.attachments', { names: r.attachments.join(', ') }) : '', sheet.title ? (sheet.file ? t('bcf.desc.sheet_file', { sheet: sheet.title, file: sheet.file }) : t('bcf.desc.sheet', { sheet: sheet.title })) : ''].filter(Boolean).join('\n'),
    replies: r.replies.filter((x) => x.kind === 'comment'), labels: [recordTypeName(r.type), sheet.title].filter(Boolean),
  };
}

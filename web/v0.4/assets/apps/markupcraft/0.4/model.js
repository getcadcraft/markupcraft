/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model.js — the markups of an open plan set, with undo/redo. No DOM.
 *
 * A markup lives on one sheet (`sheet` = the sheet key, "<fileId>:<pageIndex>") in PDF user space
 * (points, y up), so it stays put at every zoom:
 *   { id, sheet, type, pts: [[x,y]…] | null, rect: [x0,y0,x1,y1] | null, rot (0/90/180/270: the page
 *     rotation, so text reads upright), style: {color, width, fill, fillOpacity, opacity, fontSize},
 *     text, label (stamp), subject, comment, author, created, modified (ISO), status,
 *     punch: null | {n, assignee, due, status}, locked (read-only: kept from the file as it was),
 *     src: null | {ref, subtype} (the annotation it was read from) }
 * Geometry by type: pen/highlight/polyline/polygon/cloud → pts; line/arrow/measure → pts[2]; arc → pts [start,
 * a point on the arc, end]; angle → pts [arm end, vertex, arm end] (0.4 K4);
 * rect/ellipse/text/stamp/cloudrect → rect; callout → rect (text box) + pts [tip, knee];
 * note → pts [[x,y]] (icon's top-left corner).
 *
 * Every edit goes through `store.change(label, (tx) => …)`: tx.add / tx.update / tx.remove /
 * tx.setCalibration / tx.setPunchNext. One change = one undo step.
 */

import { t } from './i18n.js';
import { cleanFields, cleanColumns } from './columns.js';
import { cleanImage } from './imagestamp.js';

/** Markup types. `name` (what the UI calls it) and `subject` (the default PDF /Subj) come from the language file:
 *  type.<type> and subject.<type>. */
const TYPE_IDS = ['pen', 'highlight', 'line', 'arrow', 'arc', 'rect', 'ellipse', 'polyline', 'polygon', 'cloudrect', 'cloud', 'callout', 'text', 'note', 'stamp', 'image', 'measure', 'angle', 'area', 'count', 'space', 'legend', 'foreign'];
export const TYPES = Object.fromEntries(TYPE_IDS.map((k) => [k, {
  get name() { return t('type.' + k); },
  get subject() { return k === 'foreign' ? '' : t('subject.' + k); },
}]));

/** Stored values (written into files as they are); statusName / punchStatusName / stampLabel give the words to show. */
export const STATUSES = ['Open', 'Accepted', 'Rejected', 'Completed'];                                      // i18n-ignore
export const PUNCH_STATUSES = ['Open', 'In progress', 'Ready for review', 'Closed'];                         // i18n-ignore
export const STAMPS = ['Approved', 'Approved as noted', 'Revise and resubmit', 'Rejected', 'Reviewed', 'Void'];   // i18n-ignore
const keyOf = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '_');
export const statusName = (s) => (STATUSES.includes(s) ? t('status.' + keyOf(s)) : String(s || ''));
export const punchStatusName = (s) => (PUNCH_STATUSES.includes(s) ? t('punch.status.' + keyOf(s)) : String(s || ''));
/** A built-in stamp's words in the page's language (a stamp's label is what prints, so new stamps use these). */
export const stampLabel = (s) => (STAMPS.includes(s) ? t('stamp.' + keyOf(s)) : String(s || ''));
/** The built-in stamps as they read in the page's language. */
export const stamps = () => STAMPS.map(stampLabel);

/** Default style per type (colors are #rrggbb; widths in points). */
export function defaultStyle(type) {
  const base = { color: '#d0021b', width: 2, fill: null, fillOpacity: 0.25, opacity: 1, fontSize: 12 };
  switch (type) {
    case 'highlight': return { ...base, color: '#f5e000', width: 14, opacity: 0.45 };
    case 'pen': return { ...base, width: 1.5 };
    case 'text': return { ...base, width: 0, color: '#d0021b', fontSize: 12 };
    case 'callout': return { ...base, width: 1, fontSize: 12 };
    case 'note': return { ...base, color: '#f2c230', width: 1 };
    case 'stamp': return { ...base, color: '#1e8c3a', width: 2.5, fontSize: 18 };
    case 'image': return { ...base, width: 0 };
    case 'legend': return { ...base, color: '#17202b', width: 1, fill: '#ffffff', fillOpacity: 0.92, fontSize: 9 };
    case 'space': return { ...base, color: '#1e8c3a', width: 1, fill: '#1e8c3a', fillOpacity: 0.06, fontSize: 11 };
    case 'measure': case 'angle': return { ...base, color: '#1e48c8', width: 1, fontSize: 10 };
    case 'area': return { ...base, color: '#1e48c8', width: 1, fill: '#1e48c8', fillOpacity: 0.15, fontSize: 10 };
    case 'count': return { ...base, color: '#c25e00', width: 1.5, fontSize: 9 };
    case 'cloud': case 'cloudrect': return { ...base, width: 1.5 };
    default: return base;
  }
}

/** Stamp color by meaning (approved green, revise orange, rejected/void red, reviewed blue); a built-in stamp in the
 *  page's language counts as its English one. */
const STAMP_COLORS = ['#1e8c3a', '#1e8c3a', '#c25e00', '#c4122f', '#1e48c8', '#c4122f'];
export function stampColor(label) {
  const l = String(label).toLowerCase();
  const i = STAMPS.findIndex((s) => s.toLowerCase() === l || stampLabel(s).toLowerCase() === l);
  if (i >= 0) return STAMP_COLORS[i];
  if (l.startsWith('approved')) return '#1e8c3a';   // i18n-ignore (matching English words in files)
  if (l.startsWith('revise')) return '#c25e00';     // i18n-ignore
  if (l.startsWith('rejected')) return '#c4122f';   // i18n-ignore
  return '#9a1f86';
}

let seq = 0;
export function newId() {
  const rnd = (globalThis.crypto?.getRandomValues ? globalThis.crypto.getRandomValues(new Uint32Array(2)) : [Math.random() * 2 ** 32, Math.random() * 2 ** 32]);
  return 'mc-' + Date.now().toString(36) + '-' + (rnd[0] >>> 0).toString(36) + (rnd[1] >>> 0).toString(36).slice(0, 4) + (seq++).toString(36);
}

export const clone = (v) => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));
export const nowIso = () => new Date().toISOString().replace(/\.\d+Z$/, 'Z');

/** A new markup with every field present. */
export function makeMarkup(fields) {
  const t = fields.type;
  const now = nowIso();
  return {
    id: fields.id || newId(),
    sheet: fields.sheet,
    type: t,
    pts: fields.pts ? fields.pts.map((p) => [+p[0], +p[1]]) : null,
    rect: fields.rect ? normRect(fields.rect) : null,
    rot: fields.rot || 0,
    style: { ...defaultStyle(t), ...(fields.style || {}) },
    text: fields.text ?? '',
    label: fields.label ?? '',
    img: t === 'image' ? String(fields.img ?? '') : '',
    legend: t === 'legend' ? { scope: fields.legend?.scope === 'set' ? 'set' : 'sheet' } : undefined,
    holes: t === 'area' && Array.isArray(fields.holes) ? fields.holes.map((h) => h.map((p) => [+p[0], +p[1]])) : undefined,
    layer: cleanLayerName(fields.layer),
    fields: cleanFields(fields.fields),   // custom column values (0.4 K19)
    link: String(fields.link ?? '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 60),   // the sheet it jumps to (0.4 K9)
    subject: fields.subject ?? (TYPES[t]?.subject || ''),
    comment: fields.comment ?? '',
    author: fields.author ?? '',
    created: fields.created || now,
    modified: fields.modified || fields.created || now,
    status: STATUSES.includes(fields.status) ? fields.status : 'Open',
    punch: fields.punch ? { n: +fields.punch.n || 0, assignee: String(fields.punch.assignee || ''), due: String(fields.punch.due || ''), status: PUNCH_STATUSES.includes(fields.punch.status) ? fields.punch.status : 'Open' } : null,
    locked: !!fields.locked,
    src: fields.src || null,
    replies: Array.isArray(fields.replies) ? fields.replies.map(cleanReply).filter(Boolean) : [],
  };
}

const RECT_TYPES = new Set(['rect', 'ellipse', 'text', 'stamp', 'image', 'legend', 'cloudrect', 'callout']);
const MIN_PTS = { space: 3, pen: 1, highlight: 1, line: 2, arrow: 2, arc: 3, angle: 3, measure: 2, polyline: 2, polygon: 3, cloud: 3, note: 1, callout: 1, area: 3, count: 1 };
/** Does a markup carry the geometry its type needs? (checked on data read from files) */
export function geometryOk(m) {
  const fin = (v) => Number.isFinite(v) && Math.abs(v) < 1e7;
  if (RECT_TYPES.has(m.type) && !(Array.isArray(m.rect) && m.rect.length === 4 && m.rect.every(fin))) return false;
  if (m.type === 'image' && !/^data:image\/(png|jpeg);base64,/.test(m.img || '')) return false;
  if (m.holes && !(Array.isArray(m.holes) && m.holes.length <= 200 && m.holes.every((h) => Array.isArray(h) && h.length >= 3 && h.every((p) => Array.isArray(p) && fin(p[0]) && fin(p[1]))))) return false;
  const need = MIN_PTS[m.type];
  if (need) {
    if (!Array.isArray(m.pts) || m.pts.length < need || m.pts.length > 100000) return false;
    if (!m.pts.every((p) => Array.isArray(p) && p.length === 2 && fin(p[0]) && fin(p[1]))) return false;
  }
  return true;
}

/** One reply of a markup's thread: { id, author, date (ISO), text, kind: 'comment' | 'status', status } */
export function cleanReply(r) {
  if (!r || typeof r !== 'object') return null;
  const kind = r.kind === 'status' ? 'status' : 'comment';
  const status = kind === 'status' && STATUSES.includes(r.status) ? r.status : '';
  const text = String(r.text ?? '').slice(0, 20000);
  const photo = kind === 'comment' ? cleanImage(r.photo) : '';   // a photo on the thread (0.4 K20)
  if (kind === 'comment' && !text.trim() && !photo) return null;
  if (kind === 'status' && !status) return null;
  return {
    id: typeof r.id === 'string' && /^[A-Za-z0-9._-]{1,80}$/.test(r.id) ? r.id : newId(),
    author: String(r.author ?? '').slice(0, 120), date: String(r.date || nowIso()), text, kind, status, ...(photo ? { photo } : {}),
  };
}

/** "Status set to Accepted by Ann." — the words of a status entry (also written as the PDF reply's /Contents). */
export const statusText = (status, author) => (author ? t('reply.status.by', { status: statusName(status), author }) : t('reply.status', { status: statusName(status) }));

/** A layer name as stored: plain text, trimmed, ≤ 60 characters ('' = no layer). */
export function cleanLayerName(v) { return String(v ?? '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 60); }

/** The status-change entry logged in a markup's thread. */
export function statusReply(status, author) {
  return cleanReply({ kind: 'status', status, author, date: nowIso(), text: statusText(status, author) });
}

export function normRect(r) {
  return [Math.min(r[0], r[2]), Math.min(r[1], r[3]), Math.max(r[0], r[2]), Math.max(r[1], r[3])];
}

export class Store {
  constructor() {
    this.markups = new Map();         // id → markup (insertion order = drawing order)
    this.calibrations = new Map();    // sheet key → {mmPerPt, unit, label}
    this.punchNext = 1;
    this.sheetNames = new Map();      // sheet key → {number, title} typed by hand
    this.undoStack = [];
    this.redoStack = [];
    this.listeners = new Set();
    this.version = 0;
    this.dirtySheets = new Set();     // sheets changed since the last save of their file
    this.layers = new Map();          // layer name → { hidden, locked } (0.4 K3; a view state, not undoable)
    this.columns = [];                // custom columns (0.4 K19): [{ key, name, type, choices }] — the set's, not undoable
  }

  // ---- layers (0.4 K3) ----
  /** Every layer: the ones made here and the ones markups name, in name order. */
  layerNames() {
    const names = new Set(this.layers.keys());
    for (const m of this.markups.values()) if (m.layer) names.add(m.layer);
    return [...names].sort((a, b) => a.localeCompare(b));
  }
  layerState(name) { return this.layers.get(name) || { hidden: false, locked: false }; }
  /** Add a layer, or change whether it shows / is locked. */
  setLayer(name, patch = {}) {
    const n = cleanLayerName(name);
    if (!n) return;
    const st = { ...this.layerState(n), ...patch };
    this.layers.set(n, { hidden: !!st.hidden, locked: !!st.locked });
    this.emit('layers', { name: n });
  }
  /** Forget a layer's own entry (its markups keep the name until moved). */
  dropLayer(name) { if (this.layers.delete(name)) this.emit('layers', { name }); }
  /** Replace the set's custom columns (values on markups whose column goes are kept, unseen, until saved). */
  setColumns(cols) { this.columns = cleanColumns(cols); this.emit('columns'); }
  shown(m) { return !m.layer || !this.layerState(m.layer).hidden; }
  open(m) { return this.shown(m) && (!m.layer || !this.layerState(m.layer).locked); }

  on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  emit(kind, info) { this.version++; for (const fn of this.listeners) fn(kind, info); }

  get(id) { return this.markups.get(id) || null; }
  onSheet(sheet) { const out = []; for (const m of this.markups.values()) if (m.sheet === sheet) out.push(m); return out; }
  all() { return [...this.markups.values()]; }

  /** Run one edit. `fn(tx)` calls tx.add/update/remove/setCalibration/setPunchNext. */
  change(label, fn) {
    const ops = [];
    const tx = {
      add: (m) => {
        const mk = m.id && m.type && m.style ? clone(m) : makeMarkup(m);
        if (this.markups.has(mk.id)) throw new Error('duplicate markup id');   // i18n-ignore (programming error)
        this.markups.set(mk.id, mk);
        ops.push({ op: 'add', id: mk.id, after: clone(mk), sheet: mk.sheet });
        return mk;
      },
      update: (id, patch, { touch = true } = {}) => {
        const old = this.markups.get(id);
        if (!old) return null;
        const before = clone(old);
        // a new object each edit: caches keyed by the markup object (display lists) stay right
        const m = { ...clone(old), ...clone(patch) };
        if (patch.style) m.style = { ...before.style, ...clone(patch.style) };
        if (patch.rect) m.rect = normRect(m.rect);
        if (touch && !('modified' in patch)) m.modified = nowIso();
        this.markups.set(id, m);
        ops.push({ op: 'update', id, before, after: clone(m), sheet: m.sheet });
        return m;
      },
      remove: (id) => {
        const m = this.markups.get(id);
        if (!m) return;
        const order = [...this.markups.keys()].indexOf(id);
        this.markups.delete(id);
        ops.push({ op: 'remove', id, before: clone(m), order, sheet: m.sheet });
      },
      setCalibration: (sheet, cal) => {
        const before = clone(this.calibrations.get(sheet) ?? null);
        if (cal) this.calibrations.set(sheet, clone(cal)); else this.calibrations.delete(sheet);
        ops.push({ op: 'cal', sheet, before, after: clone(cal ?? null) });
      },
      setPunchNext: (n) => { ops.push({ op: 'punch', before: this.punchNext, after: n }); this.punchNext = n; },
      setSheetName: (sheet, name) => {
        const before = clone(this.sheetNames.get(sheet) ?? null);
        if (name) this.sheetNames.set(sheet, clone(name)); else this.sheetNames.delete(sheet);
        ops.push({ op: 'name', sheet, before, after: clone(name ?? null) });
      },
      get: (id) => this.markups.get(id) || null,
    };
    const result = fn(tx);
    if (ops.length) {
      this.undoStack.push({ label, ops });
      if (this.undoStack.length > 500) this.undoStack.shift();
      this.redoStack = [];
      for (const o of ops) if (o.sheet) this.dirtySheets.add(o.sheet);
      this.emit('change', { label, ops });
    }
    return result;
  }

  get canUndo() { return this.undoStack.length > 0; }
  get canRedo() { return this.redoStack.length > 0; }

  undo() {
    const step = this.undoStack.pop();
    if (!step) return null;
    for (const o of [...step.ops].reverse()) this.#apply(o, true);
    this.redoStack.push(step);
    this.emit('undo', step);
    return step.label;
  }

  redo() {
    const step = this.redoStack.pop();
    if (!step) return null;
    for (const o of step.ops) this.#apply(o, false);
    this.undoStack.push(step);
    this.emit('redo', step);
    return step.label;
  }

  #apply(o, back) {
    if (o.sheet) this.dirtySheets.add(o.sheet);
    switch (o.op) {
      case 'add':
        if (back) this.markups.delete(o.id); else this.markups.set(o.id, clone(o.after));
        break;
      case 'remove':
        if (back) this.#insertAt(clone(o.before), o.order); else this.markups.delete(o.id);
        break;
      case 'update':
        this.markups.set(o.id, clone(back ? o.before : o.after));
        break;
      case 'cal': {
        const v = back ? o.before : o.after;
        if (v) this.calibrations.set(o.sheet, clone(v)); else this.calibrations.delete(o.sheet);
        break;
      }
      case 'name': {
        const v = back ? o.before : o.after;
        if (v) this.sheetNames.set(o.sheet, clone(v)); else this.sheetNames.delete(o.sheet);
        break;
      }
      case 'punch':
        this.punchNext = back ? o.before : o.after;
        break;
    }
  }

  #insertAt(m, order) {
    const entries = [...this.markups.entries()];
    entries.splice(Math.min(order, entries.length), 0, [m.id, m]);
    this.markups = new Map(entries);
  }

  /** Replace everything for one file's sheets (used when a file opens). Not undoable. */
  load(markups, calibrations = {}, sheetNames = {}, layers = [], columns = []) {
    for (const c of cleanColumns(columns)) if (!this.columns.some((x) => x.key === c.key || x.name === c.name)) this.columns.push(c);
    for (const l of Array.isArray(layers) ? layers : []) { const n = cleanLayerName(l?.name); if (n && !this.layers.has(n)) this.layers.set(n, { hidden: !!l.hidden, locked: !!l.locked }); }
    for (const m of markups) this.markups.set(m.id, m);
    for (const [k, v] of Object.entries(calibrations)) this.calibrations.set(k, v);
    for (const [k, v] of Object.entries(sheetNames)) this.sheetNames.set(k, v);
    let max = 0;
    for (const m of this.markups.values()) if (m.punch?.n > max) max = m.punch.n;
    this.punchNext = Math.max(this.punchNext, max + 1);
    this.emit('load');
  }

  /** Forget one file's sheets (closing it). Not undoable; clears history touching them. */
  dropSheets(prefix) {
    for (const [id, m] of this.markups) if (m.sheet.startsWith(prefix)) this.markups.delete(id);
    for (const k of [...this.calibrations.keys()]) if (k.startsWith(prefix)) this.calibrations.delete(k);
    for (const k of [...this.sheetNames.keys()]) if (k.startsWith(prefix)) this.sheetNames.delete(k);
    if (!prefix) { this.layers.clear(); this.columns = []; }
    this.undoStack = []; this.redoStack = [];
    this.emit('load');
  }

  /** Markups on punch, ordered by number. */
  punchItems() { return this.all().filter((m) => m.punch).sort((a, b) => a.punch.n - b.punch.n); }
}

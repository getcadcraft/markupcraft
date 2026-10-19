/* SPDX-License-Identifier: Apache-2.0 */
/**
 * live.js — MarkupCraft's Studio Live adapter (0.5 LV.16, session live-apps; spec docs/STUDIO-LIVE-SPEC.md § 4, keys and
 * `touched` rules docs/LIVE-PROTOCOL.md § 6). DOM-free: tools/live-apps-test/test-markup-takeoff.mjs drives it in Node
 * against the real session server.
 *
 *   const live = createLive(store, { files })   → the adapter (spec § 4); files() = the open PDFs [{id, name, bytes}]
 *   live.bind(client) / live.unbind()
 *   createLiveAdapter({ host })                 → Studio's entry point (studio/hub/window.js), for window.markupcraft
 *
 * Ops come from the Store's own records (store.change emits them as 'change' {label, ops}):
 *   {o:'add', id, m}                 a markup created                                 key e:<id> (c)
 *   {o:'set', id, f, v | x:1}        one field (style fields one by one: f 'style.color'); x:1 = removed   (p)
 *   {o:'text', id, v}                the markup's text: structural without a version (the typist's hold protects it)
 *   {o:'reply', id, r} / {o:'unreply', id, rid}   one reply of a thread added / taken away (key e:<id>, f 'reply.<rid>')
 *   {o:'del', id, at}                a markup removed (at = its place in drawing order, for putting it back)   (d)
 *   {o:'cal', sheet, v}              a sheet's scale                                  key meta:cal/<sheet>
 *   {o:'name', sheet, v}             a sheet name typed by hand                       key meta:name/<sheet>
 *   {o:'punch', v}                   the next punch number: structural, so two new punch items never share one
 *   {o:'g', g}                       no effect (marks one step)
 * Markups name sheets "<fileId>:<page>": a joiner opens the host's PDFs (they come in the snapshot) under the host's file
 * ids. Personal and never sent: layers' shown / locked state, custom columns, the view, the tool, the author name.
 */

import { pack, unpack } from './live-client.js';
import { geometryOk } from './model.js';
import { t } from './i18n.js';

export const SCHEMA = 1;
const clone = (v) => (v === undefined || v === null || typeof v !== 'object' ? v : JSON.parse(JSON.stringify(v)));
const same = (a, b) => a === b || JSON.stringify(a) === JSON.stringify(b);

export function createLive(store, opts = {}) {
  let client = null, emitQueued = false, own = false;
  const files = () => (typeof opts.files === 'function' ? opts.files() : opts.files) || [];

  // ---- the Store's records → wire ops ------------------------------------------------------------------------------
  function opsOf(records, reverse = false) {
    const out = [];
    const list = reverse ? [...records].reverse() : records;
    for (const r of list) {
      const before = reverse ? r.after : r.before, after = reverse ? r.before : r.after;
      switch (r.op) {
        case 'add': case 'remove': {
          const m = r.op === 'add' ? after : before;
          const adding = (r.op === 'add') !== reverse;
          if (adding) out.push({ o: 'add', id: r.id, m: clone(r.op === 'add' ? r.after : r.before), ...(r.op === 'remove' ? { at: r.order } : {}) });
          else out.push({ o: 'del', id: r.id, ly: (m && m.layer) || '', ...(r.op === 'remove' ? { at: r.order } : {}) });
          break;
        }
        case 'update': out.push(...diff(r.id, before, after)); break;
        case 'cal': out.push({ o: 'cal', sheet: r.sheet, v: clone(after) }); break;
        case 'name': out.push({ o: 'name', sheet: r.sheet, v: clone(after) }); break;
        case 'punch': out.push({ o: 'punch', v: after }); break;
        default: break;
      }
    }
    return out;
  }
  function diff(id, a, b) {
    const out = [], ly = (b && b.layer) || (a && a.layer) || '';
    for (const f of new Set([...Object.keys(a || {}), ...Object.keys(b || {})])) {
      if (f === 'id' || same(a[f], b[f])) continue;
      if (f === 'style' && a.style && b.style) {
        for (const k of new Set([...Object.keys(a.style), ...Object.keys(b.style)])) if (!same(a.style[k], b.style[k])) out.push(b.style[k] === undefined ? { o: 'set', id, ly, f: 'style.' + k, x: 1 } : { o: 'set', id, ly, f: 'style.' + k, v: clone(b.style[k]) });
        continue;
      }
      if (f === 'replies') {
        const was = new Map((a.replies || []).map((r) => [r.id, r])), now = new Map((b.replies || []).map((r) => [r.id, r]));
        for (const [rid, r] of now) if (!was.has(rid) || !same(was.get(rid), r)) out.push({ o: 'reply', id, ly, r: clone(r) });
        for (const rid of was.keys()) if (!now.has(rid)) out.push({ o: 'unreply', id, ly, rid });
        continue;
      }
      if (f === 'text') { out.push({ o: 'text', id, ly, v: b.text ?? '' }); continue; }
      out.push(b[f] === undefined ? { o: 'set', id, ly, f, x: 1 } : { o: 'set', id, ly, f, v: clone(b[f]) });
    }
    return out;
  }

  // ---- applying -----------------------------------------------------------------------------------------------------
  function insertAt(m, at) {
    const entries = [...store.markups.entries()].filter(([k]) => k !== m.id);
    entries.splice(Number.isInteger(at) ? Math.min(at, entries.length) : entries.length, 0, [m.id, m]);
    store.markups = new Map(entries);
  }
  function applyOp(op) {
    const cur = op.id !== undefined ? store.markups.get(op.id) : null;
    switch (op.o) {
      case 'add': if (Number.isInteger(op.at) && !cur) insertAt(clone(op.m), op.at); else store.markups.set(op.id, clone(op.m)); if (op.m && op.m.sheet) store.dirtySheets.add(op.m.sheet); return;
      case 'del': if (cur) { store.markups.delete(op.id); store.dirtySheets.add(cur.sheet); } return;
      case 'set': case 'text': case 'reply': case 'unreply': {
        if (!cur) return;
        const m = clone(cur);
        if (op.o === 'text') m.text = op.v ?? '';
        else if (op.o === 'reply') { const i = (m.replies || []).findIndex((r) => r.id === op.r.id); if (i >= 0) m.replies[i] = clone(op.r); else (m.replies = m.replies || []).push(clone(op.r)); m.replies.sort((x, y) => (x.date < y.date ? -1 : x.date > y.date ? 1 : x.id < y.id ? -1 : 1)); }
        else if (op.o === 'unreply') m.replies = (m.replies || []).filter((r) => r.id !== op.rid);
        else if (op.f.startsWith('style.')) { m.style = m.style || {}; const k = op.f.slice(6); if (op.x) delete m.style[k]; else m.style[k] = clone(op.v); }
        else if (op.x) delete m[op.f]; else m[op.f] = clone(op.v);
        store.markups.set(op.id, m);
        store.dirtySheets.add(m.sheet);
        return;
      }
      case 'cal': if (op.v) store.calibrations.set(op.sheet, clone(op.v)); else store.calibrations.delete(op.sheet); store.dirtySheets.add(op.sheet); return;
      case 'name': if (op.v) store.sheetNames.set(op.sheet, clone(op.v)); else store.sheetNames.delete(op.sheet); store.dirtySheets.add(op.sheet); return;
      case 'punch': store.punchNext = op.v; return;
      default: return;
    }
  }
  /** The inverse of one op on the markups as they are before that op; `order` = their ids at that point (invert() walks
   *  the ops in order, so a put-back lands where the markup was before *that* op). */
  function invertOp(op, order) {
    const cur = op.id !== undefined ? store.markups.get(op.id) : null;
    switch (op.o) {
      case 'add': { const i = order().indexOf(op.id); return cur && i >= 0 ? { o: 'add', id: op.id, m: clone(cur), at: i } : { o: 'del', id: op.id, ly: (op.m && op.m.layer) || '' }; }
      case 'del': { const i = order().indexOf(op.id); return cur && i >= 0 ? { o: 'add', id: op.id, m: clone(cur), at: i } : null; }
      case 'set': {
        if (!cur) return null;
        const v = op.f.startsWith('style.') ? (cur.style || {})[op.f.slice(6)] : cur[op.f];
        return v === undefined ? { o: 'set', id: op.id, ly: cur.layer || '', f: op.f, x: 1 } : { o: 'set', id: op.id, ly: cur.layer || '', f: op.f, v: clone(v) };
      }
      case 'text': return cur ? { o: 'text', id: op.id, ly: cur.layer || '', v: cur.text ?? '' } : null;
      case 'reply': { if (!cur) return null; const was = (cur.replies || []).find((r) => r.id === op.r.id); return was ? { o: 'reply', id: op.id, ly: cur.layer || '', r: clone(was) } : { o: 'unreply', id: op.id, ly: cur.layer || '', rid: op.r.id }; }
      case 'unreply': { if (!cur) return null; const was = (cur.replies || []).find((r) => r.id === op.rid); return was ? { o: 'reply', id: op.id, ly: cur.layer || '', r: clone(was) } : null; }
      case 'cal': return { o: 'cal', sheet: op.sheet, v: clone(store.calibrations.get(op.sheet) ?? null) };
      case 'name': return { o: 'name', sheet: op.sheet, v: clone(store.sheetNames.get(op.sheet) ?? null) };
      case 'punch': return { o: 'punch', v: store.punchNext };
      case 'g': return { o: 'g', g: op.g };
      default: return null;
    }
  }

  function changed() {
    store.version++;
    if (emitQueued) return;
    emitQueued = true;
    Promise.resolve().then(() => { emitQueued = false; own = true; try { store.emit('change', { label: '', ops: [], remote: true }); } finally { own = false; } live.onApplied?.(); });
  }

  function touched(ops) {
    const out = [], seen = new Set();
    const add = (t) => { const k = t.k + '\u0000' + t.m + '\u0000' + (t.f || ''); if (!seen.has(k)) { seen.add(k); out.push(t); } };
    const layer = (ly) => { if (ly) add({ k: 'layer:' + ly, m: 'r' }); };
    for (const op of ops) {
      switch (op.o) {
        case 'add': add({ k: 'e:' + op.id, m: 'c' }); layer(op.m && op.m.layer); break;
        case 'del': add({ k: 'e:' + op.id, m: 'd' }); layer(op.ly); break;
        case 'set': add({ k: 'e:' + op.id, m: 'p', f: op.f }); layer(op.ly); if (op.f === 'layer' && !op.x) layer(op.v); break;
        case 'text': add({ k: 'e:' + op.id, m: 's', r: null }); layer(op.ly); break;
        case 'reply': add({ k: 'e:' + op.id, m: 'p', f: 'reply.' + op.r.id }); break;
        case 'unreply': add({ k: 'e:' + op.id, m: 'p', f: 'reply.' + op.rid }); break;
        case 'cal': add({ k: 'meta:cal/' + op.sheet, m: 'p', f: 'v' }); break;
        case 'name': add({ k: 'meta:name/' + op.sheet, m: 'p', f: 'v' }); break;
        case 'punch': add({ k: 'meta:punch', m: 's' }); break;
        default: break;
      }
    }
    return out;
  }

  function validate(ops) {
    const after = new Map();
    for (const op of ops) {
      if (op.o === 'add') { if (!op.m || typeof op.m !== 'object' || !op.m.type || typeof op.m.sheet !== 'string' || !geometryOk(op.m)) return 'invalid'; after.set(op.id, op.m); }
      else if (op.o === 'set' && (op.f === 'pts' || op.f === 'rect' || op.f === 'holes')) {
        const base = after.get(op.id) || store.markups.get(op.id);
        if (base && !geometryOk({ ...base, [op.f]: op.x ? undefined : op.v })) return 'invalid';
      }
      else if (op.o === 'set' && op.f === 'locked') return 'invalid';   // read-only annotations stay read-only
    }
    for (const op of ops) if (op.o !== 'add' && op.o !== 'g' && op.id !== undefined && store.markups.get(op.id)?.locked && op.o !== 'reply') return 'invalid';
    return null;
  }

  function state() {
    return {
      v: SCHEMA,
      files: files().map((f) => ({ id: f.id, name: f.name, bytes: f.bytes })),
      markups: [...store.markups.values()],
      calibrations: [...store.calibrations], sheetNames: [...store.sheetNames], punchNext: store.punchNext,
    };
  }
  function loadState(s) {
    if (!s || s.v !== SCHEMA) throw new Error('live snapshot: unknown format');   // i18n-ignore (protocol)
    store.markups = new Map((s.markups || []).map((m) => [m.id, m]));
    store.calibrations = new Map(s.calibrations || []);
    store.sheetNames = new Map(s.sheetNames || []);
    store.punchNext = s.punchNext || 1;
    store.undoStack = []; store.redoStack = [];
    own = true; try { store.emit('load'); } finally { own = false; }
    live.onFiles?.(s.files || []);   // the page opens the PDFs under the host's file ids (markups already in place)
  }

  let g = 0;
  const orig = {};
  const live = {
    app: 'markupcraft', schema: SCHEMA, store, onApplied: null, onFiles: null,
    get client() { return client; },
    onLocalChange(cb) { live.report = cb; },
    apply(ops) { for (const op of ops) applyOp(op); changed(); },
    /** After a batch: your own edits confirmed change nothing on screen but what Undo can do. */
    afterApply() { if (!emitQueued) { emitQueued = true; Promise.resolve().then(() => { emitQueued = false; own = true; try { store.emit('change', { label: '', ops: [], remote: true }); } finally { own = false; } }); } },
    invert(ops) {
      let ids = null;
      const order = () => ids || (ids = [...store.markups.keys()]);
      const inv = [];
      for (const op of ops) {
        inv.push(invertOp(op, order));
        if (op.o === 'add') { const l = order(); if (!l.includes(op.id)) l.splice(Number.isInteger(op.at) ? Math.min(op.at, l.length) : l.length, 0, op.id); }
        else if (op.o === 'del') { const l = order(), i = l.indexOf(op.id); if (i >= 0) l.splice(i, 1); }
      }
      const out = inv.reverse().filter(Boolean);
      const gi = out.findIndex((o) => o.o === 'g'); if (gi > 0) out.unshift(out.splice(gi, 1)[0]);
      return out;
    },
    touched, validate,
    snapshot() { return pack(state()); },
    load(bytes) { loadState(unpack(bytes)); },
    state, opsOf,
    hash() { const s = state(); delete s.files; return JSON.stringify(s); },
    bind(c) {
      client = c;
      store.undoStack = []; store.redoStack = [];
      orig.undo = store.undo; orig.redo = store.redo;
      // while live, undo / redo are per person (live-client.js): your own last step, never someone else's
      const top = (st) => (st.length ? st[st.length - 1].label || '' : '');
      store.undo = () => { if (!client) return orig.undo.call(store); const l = top(client.undoStack); return client.undo() ? l : null; };
      store.redo = () => { if (!client) return orig.redo.call(store); const l = top(client.redoStack); return client.redo() ? l : null; };
      // the toolbar's Undo / Redo follow your own history in the session
      Object.defineProperty(store, 'canUndo', { configurable: true, get: () => !!client && (client.canUndo() || client.pending.some((p) => p.kind === 'do')) });
      Object.defineProperty(store, 'canRedo', { configurable: true, get: () => !!client && client.canRedo() });
      live.off = store.on((kind, info) => {
        if (own || kind !== 'change' || !info || info.remote || !client) return;
        const ops = opsOf(info.ops);
        if (!ops.length) return;
        const mark = { o: 'g', g: 's' + (++g) };
        client.localChange({ label: info.label || '', ops: [mark, ...ops], inverse: [mark, ...opsOf(info.ops, true)] });
      });
      return live;
    },
    unbind() {
      if (live.off) live.off();
      if (orig.undo) { store.undo = orig.undo; store.redo = orig.redo; }
      delete store.canUndo; delete store.canRedo;
      store.undoStack = []; store.redoStack = [];
      client = null;
    },
  };
  return live;
}

/** Studio's entry point: the adapter for the plan set open in this window (window.markupcraft), or null. */
export function createLiveAdapter({ host } = {}) {
  const app = globalThis.markupcraft;
  if (!app || !app.store) return null;
  const a = createLive(app.store, { files: () => app.files });
  // The edit log (0.6 DC.23): Studio's Live panel asks who changed the selected markups last.
  a.selectionKeys = () => [...(app.sel || [])].slice(0, 500).map((id) => 'e:' + id);
  a.onFiles = (list) => {
    if (!list.length || !app.openFiles) return;
    const fs = list.map((f) => new File([f.bytes], f.name, { type: 'application/pdf' }));
    app.openFiles(fs, { ids: list.map((f) => f.id), keepMarkups: true });
  };
  const lv = host && host.live;
  if (lv && lv.on) {
    let offs = [];
    const say = (s) => { try { app.status && app.status(s); } catch { /* no status bar */ } };
    const off = lv.on((c) => {
      if (c && c.adapter === a) {
        a.bind(c);
        offs = [
          c.on('refused', (r) => say(t(r.reason === 'locked' ? 'live.refused.locked' : r.reason === 'role' ? 'live.refused.role' : 'live.refused', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('undo-skipped', (r) => say(t('live.undo_skipped', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('ended', () => say(t('live.ended'))),
          c.on('status', ({ status, first }) => {
      // a drop that heals within a moment (or the socket closing as the host ends) is not worth a message
      if (status === 'live') { if (first !== false || c.toldDrop) say(t('live.status.live')); c.toldDrop = false; }
      else if (status === 'reconnecting') setTimeout(() => { if (c.status === 'reconnecting') { c.toldDrop = true; say(t('live.status.reconnecting')); } }, 1500);
      else if (status === 'waiting') say(t('live.status.waiting'));
    }),
        ];
        app.live = a;
      } else if (!c && a.client) { offs.forEach((f) => f()); a.unbind(); app.live = null; off(); }
    });
  }
  return a;
}

/** A browser opening a link with #live=<code> (a page a host serves on the LAN) or ?live=<ROOM>#<secret> joins. */
export async function joinFromPage(app, fileHost, w = globalThis) {
  const lv = fileHost && fileHost.live;
  if (!lv || !app) return false;
  let code = null, link = null, url;
  try { code = lv.pageCode(); } catch { code = null; }
  if (!code && w.location) {
    const q = new URLSearchParams(w.location.search), room = (q.get('live') || '').toUpperCase(), secret = (w.location.hash || '').slice(1);
    if (/^[0-9A-Z]{8}$/.test(room) && /^[A-Za-z0-9_-]{22,43}$/.test(secret)) {
      link = { room, secret };
      url = (w.location.protocol === 'https:' ? 'wss://' : 'ws://') + w.location.host + '/live/relay/join/' + room;
      q.delete('live');
      try { w.history.replaceState(w.history.state, '', w.location.pathname + (q.toString() ? '?' + q : '')); } catch { /* no history */ }
    }
  }
  if (!code && !link) return false;
  const adapter = createLiveAdapter({ host: fileHost });
  if (!adapter) return false;
  const name = (app.author && String(app.author)) || t('live.guest');
  await lv.join({ adapter, name, code: code || undefined, link: link || undefined, url });
  return true;
}

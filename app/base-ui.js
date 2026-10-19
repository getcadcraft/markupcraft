/* SPDX-License-Identifier: Apache-2.0 */
/**
 * base-ui.js — the Page content tool (0.6 DF.14): select and change the page's own lines, pictures and text, not markups.
 * markupcraft.js hands its pointer, keys, overlay and Properties panel to this module while the tool is on; everything
 * that reads or writes PDF content is DOM-free (base-content.js, base-edit.js).
 *
 * Edits live in the Store (`tx.setBase(sheet, state)`, one undo step each, with the markups' history). After every
 * change the file's working copy is rebuilt from the ORIGINAL bytes + every sheet's edits (`buildWorking`) and shown;
 * Save writes markups into that copy (`bytesFor`). Encrypted and signed files refuse with a plain message.
 *
 * createBaseUi(ctx) — ctx: { view, store, t, el, status, curSheet(), pdfLib(), libs(), closePdf(doc), dropTakenAnnots,
 *   reshow(f), settings, saveSettings(), touch(), listOf(markup) (display list), fid(), mix }
 */

import { readPage, editBlocker, objectEdits, translate, scaleAbout, apply } from './base-content.js';
import { emptyBase, isEmptyBase, cleanBase, withMove, withPatch, withDelete, withAdded, withNodes, withPicture, buildWorking, shown,
  hitTest, inRect, boxOf, outline, nodesOf, moveNode, contentFromList, objectGeom } from './base-edit.js';

const KINDS = ['shape', 'picture', 'text'];
const GRIPS = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

export function createBaseUi(ctx) {
  const { view, store, t, el } = ctx;
  const files = new WeakMap();           // f → { ldoc, pcs: Map(index → pc), blocker, loading }
  let selKeys = new Set();
  let selSheet = '';
  let hoverKey = null;
  let drag = null;
  let nodeEdit = null;                   // { key }
  let kinds = Array.isArray(ctx.settings.contentKinds) && ctx.settings.contentKinds.every((k) => KINDS.includes(k)) ? ctx.settings.contentKinds.slice() : KINDS.slice();
  let listCache = { key: '', state: null, kinds: '', list: [] };

  // ---- the original content, read once per file ----
  async function fileInfo(f) {
    let fi = files.get(f);
    if (fi?.ldoc || fi?.blocker) return fi;
    if (fi?.loading) return fi.loading;
    fi = { ldoc: null, pcs: new Map(), blocker: null, loading: null };
    files.set(f, fi);
    fi.loading = (async () => {
      const lib = await ctx.pdfLib();
      fi.lib = lib;
      try {
        fi.ldoc = await lib.PDFDocument.load(f.bytes, { ignoreEncryption: true, updateMetadata: false });
        fi.blocker = editBlocker(lib, fi.ldoc);
      } catch (e) { fi.blocker = 'unreadable'; fi.why = e.message || String(e); }
      fi.loading = null;
      return fi;
    })();
    return fi.loading;
  }
  function pageOf(f, index) {
    const fi = files.get(f);
    if (!fi?.ldoc || fi.blocker) return null;
    if (!fi.pcs.has(index)) fi.pcs.set(index, readPage(fi.lib, fi.ldoc, index));
    return fi.pcs.get(index);
  }
  const sheet = () => ctx.curSheet();
  const stateOf = (key) => store.base.get(key) || emptyBase();
  function current() {
    const s = sheet();
    if (!s) return null;
    if (selSheet !== s.page.key) { selSheet = s.page.key; selKeys = new Set(); nodeEdit = null; hoverKey = null; }
    const fi = files.get(s.file);
    if (!fi || fi.loading) { fileInfo(s.file).then(() => { view.invalidate(); ctx.refresh(); }); return { s, loading: true }; }
    if (fi.blocker) return { s, blocker: fi.blocker, why: fi.why };
    const pc = pageOf(s.file, s.page.index);
    const st = stateOf(s.page.key);
    const kk = kinds.join();
    if (listCache.key !== s.page.key || listCache.state !== st || listCache.kinds !== kk || listCache.pc !== pc) listCache = { key: s.page.key, state: st, kinds: kk, pc, list: shown(pc, st, kinds) };
    return { s, pc, st, list: listCache.list };
  }
  const selected = (c) => c.list.filter((x) => selKeys.has(x.key));
  const tol = () => (ctx.touch() ? 14 : 5) / view.z;

  // ---- changes ----
  /** Would these objects' edits write? → reason or null (a dry run of exactly what Save will do). */
  function trial(c, keys, next) {
    const page = c.pc.contents.get('page');
    for (const k of keys) {
      if (k.startsWith('a:')) continue;
      const obj = c.pc.byKey.get(k);
      if (!obj) return 'gone';
      const r = objectEdits(c.pc, obj, next.o[k] || {});
      if (r.refused) return r.refused;
      for (const ed of r.edits) if (ed.key === 'page' && !page.segments.some((g) => ed.s >= g.s && ed.e <= g.e)) return 'across-streams';
    }
    return null;
  }
  function commit(c, label, keys, next) {
    const why = trial(c, keys, next);
    if (why) { ctx.status(refusal(why)); view.invalidate(); return false; }
    store.change(label, (tx) => tx.setBase(c.s.page.key, next));
    return true;
  }
  const refusal = (why) => (['clip', 'across-streams', 'text', 'flat', 'font', 'gone', 'shading', 'picture', 'metrics'].includes(why) ? t('base.refused.' + why) : t('base.refused.other', { why }));

  // ---- the working copy ----
  const jobs = new WeakMap();            // f → { running: Promise, again: bool }
  function statesOf(f) {
    const m = new Map();
    for (const pg of f.pages) { const st = store.base.get(pg.key); if (!isEmptyBase(st)) m.set(pg.index, st); }
    return m;
  }
  function queue(f) {
    let j = jobs.get(f);
    if (j?.running) { j.again = true; return j.running; }
    j = { again: false, running: null };
    jobs.set(f, j);
    j.running = (async () => {
      do { j.again = false; await rebuild(f); } while (j.again);
      j.running = null;
    })();
    return j.running;
  }
  async function rebuild(f) {
    const states = statesOf(f);
    const lib = await ctx.pdfLib();
    try {
      if (!f.baseOrigDoc) f.baseOrigDoc = f.doc;
      let next;
      if (!states.size) { next = f.baseOrigDoc; f.baseWork = null; f.baseReport = null; }
      else {
        const w = await buildWorking(lib, f.bytes, states);
        f.baseWork = w.bytes;
        f.baseReport = w;
        let renderBytes = w.bytes;
        if (f.cleaned && f.cleanPages?.length) { ctx.dropTakenAnnots(lib, w.doc, f.removeRefs, f.cleanPages); renderBytes = await w.doc.save({ useObjectStreams: false }); }
        const { pdfjs, docOptions } = ctx.libs();
        next = await pdfjs.getDocument({ data: renderBytes.slice(), isEvalSupported: false, enableScripting: false, ...docOptions }).promise;
        const bad = w.refused.length;
        if (bad) ctx.status(t('base.save.refused', { n: bad }) + ' ' + refusal(w.refused[0].why));
      }
      const old = f.doc;
      f.doc = next;
      await ctx.reshow(f);
      if (old && old !== f.baseOrigDoc && old !== next) ctx.closePdf(old);
    } catch (e) {
      ctx.status(t('base.rebuild.failed', { error: e.code ? t('base.blocked.' + e.code) : e.message || String(e) }));
    }
  }
  /** The bytes Save writes markups into: the working copy when the file has page edits, else the file as opened. */
  async function bytesFor(f) {
    if (statesOf(f).size) { await queue(f); if (!f.baseWork) throw new Error(t('base.rebuild.failed', { error: '' })); return f.baseWork; }
    return f.bytes;
  }
  store.on((kind, info) => {
    if (kind !== 'change' && kind !== 'undo' && kind !== 'redo') return;
    const sheets = new Set((info?.ops || []).filter((o) => o.op === 'base').map((o) => o.sheet));
    if (!sheets.size) return;
    const done = new Set();
    for (const key of sheets) {
      const f = ctx.fileOf(key);
      if (f && !done.has(f)) { done.add(f); queue(f); }
    }
    if (kind !== 'change') { const c = current(); if (c?.list) selKeys = new Set([...selKeys].filter((k) => c.list.some((x) => x.key === k))); }
    listCache = { key: '' };
  });
  /** Autosave: each page's edits by page index. */
  function fileState(f) {
    const out = {};
    for (const pg of f.pages) { const st = store.base.get(pg.key); if (!isEmptyBase(st)) out[pg.index] = st; }
    return out;
  }
  function restore(f, saved) {
    let n = 0;
    for (const pg of f.pages) {
      const st = saved && saved[pg.index] ? cleanBase(saved[pg.index]) : null;
      if (!isEmptyBase(st)) { store.base.set(pg.key, st); store.dirtySheets.add(pg.key); n++; }
    }
    if (n) queue(f);
    return n;
  }
  function forget(f) { if (f.baseOrigDoc && f.baseOrigDoc !== f.doc) ctx.closePdf(f.baseOrigDoc); files.delete(f); }

  // ---- pointer ----
  function blockedSay(c) { ctx.status(c.blocker === 'unreadable' ? t('base.blocked.unreadable', { why: c.why || '' }) : t('base.blocked.' + c.blocker)); }
  function gripAt(c, p) {
    if (!selKeys.size || nodeEdit) return null;
    const b = boxOf(selected(c));
    if (!b) return null;
    const g = gripsOf(b);
    const r = (ctx.touch() ? 16 : 6) / view.z;
    return g.find((x) => Math.abs(x.x - p[0]) <= r && Math.abs(x.y - p[1]) <= r) || null;
  }
  function down(p, sx, sy, e) {
    const c = current();
    if (!c) return true;
    if (c.loading) { ctx.status(t('base.loading')); return true; }
    if (c.blocker) { blockedSay(c); return true; }
    if (nodeEdit) {
      const it = c.list.find((x) => x.key === nodeEdit.key);
      const r = (ctx.touch() ? 16 : 7) / view.z;
      const n = it ? nodesOf(c.pc, it.obj, it.e).find((q) => Math.abs(q.x - p[0]) <= r && Math.abs(q.y - p[1]) <= r) : null;
      if (n) { drag = { kind: 'node', key: it.key, node: n, a: p, sx, sy, moved: false, nodes: it.e.nodes || {} }; return true; }
      nodeEdit = null;
      ctx.status('');
    }
    const g = gripAt(c, p);
    if (g) { drag = { kind: 'scale', grip: g, box: boxOf(selected(c)), a: p, sx, sy, moved: false, T: null }; return true; }
    const hit = hitTest(c.list, p, tol());
    if (hit) {
      if (e.shiftKey) { if (selKeys.has(hit.key)) selKeys.delete(hit.key); else selKeys.add(hit.key); selKeys = new Set(selKeys); ctx.refresh(); return true; }
      if (!selKeys.has(hit.key)) { selKeys = new Set([hit.key]); ctx.refresh(); }
      drag = { kind: 'move', a: p, sx, sy, moved: false, T: null };
      return true;
    }
    if (!e.shiftKey && selKeys.size) { selKeys = new Set(); ctx.refresh(); }
    drag = { kind: 'window', a: [sx, sy], b: [sx, sy], sx, sy, moved: false, add: e.shiftKey };
    return true;
  }
  function move(p, sx, sy, e) {
    if (!drag) return false;
    const moved = drag.moved || Math.hypot(sx - drag.sx, sy - drag.sy) > 3;
    drag.moved = moved;
    if (!moved) return true;
    const c = current();
    if (drag.kind === 'move') {
      let dx = p[0] - drag.a[0], dy = p[1] - drag.a[1];
      if (e.shiftKey) { if (Math.abs(dx) > Math.abs(dy)) dy = 0; else dx = 0; }   // Shift: straight across or straight up
      drag.T = translate(dx, dy);
    } else if (drag.kind === 'scale') drag.T = scaleFor(drag.box, drag.grip, p, e.shiftKey);
    else if (drag.kind === 'window') drag.b = [sx, sy];
    else if (drag.kind === 'node' && c?.list) { const it = c.list.find((x) => x.key === drag.key); if (it) drag.live = moveNode(c.pc, it.obj, it.e, drag.node, p); }
    view.invalidate();
    return true;
  }
  function up(p, sx, sy) {
    if (!drag) return false;
    const d = drag;
    drag = null;
    const c = current();
    if (!c?.list) { view.invalidate(); return true; }
    const keys = [...selKeys];
    if (d.kind === 'move' && d.moved && d.T && (d.T[4] || d.T[5])) commit(c, t('base.undo.move', { n: keys.length }), keys, withMove(c.st, keys, d.T));
    else if (d.kind === 'scale' && d.moved && d.T) commit(c, t('base.undo.scale', { n: keys.length }), keys, withMove(c.st, keys, d.T));
    else if (d.kind === 'node' && d.moved && d.live) commit(c, t('base.undo.points'), [d.key], withNodes(c.st, d.key, d.live));
    else if (d.kind === 'window' && d.moved) {
      const a = view.toUser(d.a[0], d.a[1]), b = view.toUser(d.b[0], d.b[1]);
      const hits = inRect(c.list, [a[0], a[1], b[0], b[1]], d.b[0] < d.a[0]);
      selKeys = new Set([...(d.add ? selKeys : []), ...hits.map((x) => x.key)]);
      ctx.status(hits.length ? t('base.selected', { n: selKeys.size }) : t('base.none'));
      ctx.refresh();
    }
    view.invalidate(true);
    return true;
  }
  function dblclick(p) {
    const c = current();
    if (!c?.list) return true;
    const hit = hitTest(c.list, p, tol());
    if (hit?.kind === 'text') { selKeys = new Set([hit.key]); ctx.refresh(); requestAnimationFrame(() => { const i = document.querySelector('[data-base-words]'); if (i && !i.disabled) { i.focus(); i.select(); } }); return true; }
    if (hit) startPoints(c, hit);
    return true;
  }
  function startPoints(c, it) {
    if (it.kind !== 'shape' || it.added || !nodesOf(c.pc, it.obj, it.e).length) { ctx.status(t('base.points.none')); return; }
    selKeys = new Set([it.key]);
    nodeEdit = { key: it.key };
    ctx.status(t('base.points.hint'));
    ctx.refresh();
  }
  function hover(p) {
    const c = current();
    let cursor = '';
    let key = null;
    if (c?.list) {
      const g = gripAt(c, p);
      if (g) cursor = { n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize', ne: 'nesw-resize', sw: 'nesw-resize', nw: 'nwse-resize', se: 'nwse-resize' }[g.key];
      else {
        const hit = hitTest(c.list, p, tol());
        key = hit?.key || null;
        cursor = hit ? (selKeys.has(hit.key) ? 'move' : 'pointer') : '';
      }
    }
    ctx.over.style.cursor = cursor;
    if (key !== hoverKey) { hoverKey = key; view.invalidate(); }
  }

  // ---- keys ----
  function key(e) {
    const c = current();
    const k = e.key;
    if (k === 'Escape') {
      if (drag) { drag = null; view.invalidate(); return true; }
      if (nodeEdit) { nodeEdit = null; ctx.status(''); view.invalidate(); return true; }
      if (selKeys.size) { selKeys = new Set(); ctx.refresh(); return true; }
      return false;
    }
    if (!c?.list) return false;
    const mod = e.ctrlKey || e.metaKey;
    if (mod && k.toLowerCase() === 'a') { e.preventDefault(); selKeys = new Set(c.list.map((x) => x.key)); ctx.status(t('base.selected', { n: selKeys.size })); ctx.refresh(); return true; }
    if (mod) return false;
    if ((k === 'Delete' || k === 'Backspace') && selKeys.size) { e.preventDefault(); del(c); return true; }
    if (k === 'Enter' && selKeys.size === 1) { const it = selected(c)[0]; if (it) { e.preventDefault(); startPoints(c, it); return true; } }
    if (k.startsWith('Arrow') && selKeys.size) {
      e.preventDefault();
      const step = e.shiftKey ? 10 : 1;
      const v = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[k];
      const a = view.toUser(0, 0), b = view.toUser(v[0], v[1]);
      const keys = [...selKeys];
      commit(c, t('base.undo.move', { n: keys.length }), keys, withMove(c.st, keys, translate(b[0] - a[0], b[1] - a[1])));
      return true;
    }
    return false;
  }
  function del(c) {
    const keys = [...selKeys];
    if (commit(c, t('base.undo.delete', { n: keys.length }), keys, withDelete(c.st, keys))) { selKeys = new Set(); nodeEdit = null; ctx.refresh(); }
  }

  // ---- drawing on the overlay ----
  function paintOver(g) {
    const c = current();
    if (!c?.list) return;
    const w = 1.5 / view.z;
    const action = view.colors.action;
    if (hoverKey && !selKeys.has(hoverKey) && !drag) {
      const it = c.list.find((x) => x.key === hoverKey);
      if (it) view.paint(g, outline([it], ctx.mix(action, view.colors.sheet, 0.35), null, w));
    }
    const sel = selected(c);
    const T = drag && (drag.kind === 'move' || drag.kind === 'scale') ? drag.T : null;
    if (sel.length) view.paint(g, outline(sel, action, T, w * 1.4));
    if (nodeEdit) {
      const it = c.list.find((x) => x.key === nodeEdit.key);
      if (it) {
        const e = drag?.kind === 'node' && drag.live ? { ...it.e, nodes: drag.live } : it.e;
        const nodes = nodesOf(c.pc, it.obj, e);
        if (drag?.kind === 'node' && drag.live) view.paint(g, outline([{ d: objectGeom(c.pc, it.obj, e) }], action, null, w * 1.4));
        for (const n of nodes) {
          const [x, y] = view.toScreen([n.x, n.y]);
          g.save(); g.lineWidth = 1; g.strokeStyle = action; g.fillStyle = view.colors.sheet;
          if (n.kind === 'handle' && n.to) { const [tx, ty] = view.toScreen(n.to); g.beginPath(); g.moveTo(tx, ty); g.lineTo(x, y); g.stroke(); g.beginPath(); g.arc(x, y, 3.5, 0, 7); g.fill(); g.stroke(); }
          else { g.beginPath(); g.rect(Math.round(x) - 4, Math.round(y) - 4, 8, 8); g.fill(); g.stroke(); }
          g.restore();
        }
      }
    } else if (sel.length) {
      let b = boxOf(sel);
      if (b && T) { const a = apply(T, b[0], b[1]), z = apply(T, b[2], b[3]); b = [Math.min(a[0], z[0]), Math.min(a[1], z[1]), Math.max(a[0], z[0]), Math.max(a[1], z[1])]; }
      if (b) {
        const corners = [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]].map((q) => view.toScreen(q));
        g.save(); g.strokeStyle = action; g.lineWidth = 1; g.setLineDash([5, 3]);
        g.beginPath(); corners.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); g.stroke(); g.restore();
        if (!drag) for (const q of gripsOf(b)) {
          const [x, y] = view.toScreen([q.x, q.y]);
          const s = ctx.touch() ? 7 : 4.5;
          g.save(); g.fillStyle = view.colors.sheet; g.strokeStyle = action; g.lineWidth = 1.5;
          g.beginPath(); g.rect(Math.round(x) - s, Math.round(y) - s, 2 * s, 2 * s); g.fill(); g.stroke(); g.restore();
        }
      }
    }
    if (drag?.kind === 'window' && drag.moved) {
      const [ax, ay] = drag.a, [bx, by] = drag.b;
      const crossing = bx < ax;
      g.save();
      g.strokeStyle = crossing ? view.colors.green : action;
      g.setLineDash(crossing ? [5, 3] : []);
      g.strokeRect(Math.min(ax, bx) + 0.5, Math.min(ay, by) + 0.5, Math.abs(bx - ax), Math.abs(by - ay));
      g.restore();
    }
  }

  // ---- Properties ----
  function props() {
    const c = current();
    const box = el('div', {});
    if (!c) { box.append(el('p', { className: 'mc-note' }, t('props.empty'))); return { title: t('base.h'), body: box }; }
    if (c.loading) { box.append(el('p', { className: 'mc-note' }, t('base.loading'))); return { title: t('base.h'), body: box }; }
    if (c.blocker) { box.append(el('p', { className: 'mc-note', role: 'status' }, c.blocker === 'unreadable' ? t('base.blocked.unreadable', { why: c.why || '' }) : t('base.blocked.' + c.blocker))); return { title: t('base.h'), body: box }; }
    // what to pick (as in other editors: all content, or only text / pictures / shapes)
    const pick = el('fieldset', { className: 'mc-base-kinds mc-radios' }, el('legend', { className: 'mc-k' }, t('base.pick')));
    for (const k of KINDS) {
      const id = ctx.fid();
      pick.append(el('label', { for: id, className: 'mc-radio' }, el('input', { type: 'checkbox', id, checked: kinds.includes(k), dataset: { baseKind: k },
        onchange: (e) => {
          const next = KINDS.filter((x) => (x === k ? e.target.checked : kinds.includes(x)));
          if (!next.length) { e.target.checked = true; return; }
          kinds = next; ctx.settings.contentKinds = kinds.slice(); ctx.saveSettings();
          selKeys = new Set([...selKeys].filter((key) => { const it = c.list.find((x) => x.key === key); return it && kinds.includes(it.kind); }));
          ctx.refresh();
        } }), ' ', t('base.kind.' + k)));
    }
    box.append(pick);
    const sel = selected(c);
    if (sel.length) {
      const by = (k) => sel.filter((x) => x.kind === k).length;
      const parts = KINDS.filter((k) => by(k)).map((k) => t('base.sel.' + k, { n: by(k) }));
      box.append(el('p', { className: 'mc-note', dataset: { baseSel: String(sel.length) } }, t('base.sel', { list: parts.join(', ') })));
      const shapes = sel.filter((x) => x.kind === 'shape' && !(x.obj && x.obj.inText));
      if (shapes.length) {
        const grid = el('div', { className: 'mc-props' });
        const first = shapes[0];
        const strokeNow = first.e.stroke || first.added?.stroke || first.obj?.strokeRgb || '#000000';
        const fillNow = first.e.fill || first.added?.fill || first.obj?.fillRgb || '#ffffff';
        const lwNow = first.e.lw ?? first.added?.lw ?? first.obj?.lw ?? 1;
        const patch = (p, label) => { const keys = shapes.map((x) => x.key); commit(c, label, keys, withPatch(c.st, keys, p)); };
        let id = ctx.fid();
        grid.append(el('label', { for: id, className: 'mc-k' }, t('base.stroke')), el('input', { type: 'color', id, className: 'mc-color', value: strokeNow, dataset: { baseStroke: '' }, onchange: (e) => patch({ stroke: e.target.value }, t('base.undo.style', { n: shapes.length })) }));
        if (shapes.some((x) => x.fills)) {
          id = ctx.fid();
          grid.append(el('label', { for: id, className: 'mc-k' }, t('base.fill')), el('input', { type: 'color', id, className: 'mc-color', value: fillNow, dataset: { baseFill: '' }, onchange: (e) => patch({ fill: e.target.value }, t('base.undo.style', { n: shapes.length })) }));
        }
        id = ctx.fid();
        grid.append(el('label', { for: id, className: 'mc-k' }, t('base.width')), el('input', { type: 'number', id, className: 'mc-input mc-num', min: '0', max: '72', step: '0.25', value: String(Math.round(lwNow * 100) / 100), dataset: { baseWidth: '' },
          onchange: (e) => { const v = parseFloat(e.target.value); if (Number.isFinite(v) && v >= 0 && v <= 72) patch({ lw: v }, t('base.undo.style', { n: shapes.length })); } }));
        box.append(grid);
      }
      if (sel.length === 1 && sel[0].kind === 'text') box.append(wordsField(c, sel[0]));
      const acts = el('div', { className: 'mc-actions' });
      if (sel.length === 1 && sel[0].kind === 'picture') acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('base.picture.replace.title'), dataset: { baseReplace: '' }, onclick: async () => {
        const src = await ctx.pickPicture();
        if (src === null) return;
        if (!src) { ctx.status(t('base.picture.bad')); return; }
        if (commit(c, t('base.undo.picture'), [sel[0].key], withPicture(c.st, sel[0].key, src))) ctx.status(t('base.picture.done'));
      } }, t('base.picture.replace')));
      if (sel.length === 1 && sel[0].kind === 'shape' && !sel[0].added) acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-cc', title: t('base.points.title'), dataset: { basePoints: '' }, onclick: () => startPoints(c, sel[0]) }, t('base.points')));
      if (sel.some((x) => !x.added && Object.keys(x.e || {}).length)) acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { baseReset: '' }, onclick: () => {
        const keys = sel.filter((x) => !x.added).map((x) => x.key);
        const next = JSON.parse(JSON.stringify(c.st));
        for (const k of keys) delete next.o[k];
        store.change(t('base.undo.reset'), (tx) => tx.setBase(c.s.page.key, next));
      } }, t('base.reset')));
      acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { baseDelete: '' }, onclick: () => del(c) }, t('base.delete')));
      box.append(acts);
    } else box.append(el('p', { className: 'mc-note' }, c.list.length ? t('base.hint') : scanNote(c)));
    const n = Object.keys(c.st.o || {}).length + (c.st.add || []).length;
    if (n) box.append(el('p', { className: 'mc-note', dataset: { baseChanges: String(n) } }, t('base.changes', { n })),
      el('div', { className: 'mc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { baseResetSheet: '' }, onclick: () => { selKeys = new Set(); nodeEdit = null; store.change(t('base.undo.reset'), (tx) => tx.setBase(c.s.page.key, null)); } }, t('base.reset.sheet'))));
    box.append(el('p', { className: 'mc-note' }, t('base.note')));
    return { title: sel.length ? t('base.h.sel', { n: sel.length }) : t('base.h'), body: box };
  }
  /** A line of text's words (DF.14 c): written in its own font; letters the font lacks print in Helvetica, and it says so. */
  function wordsField(c, it) {
    const fi = it.obj.info;
    const why = !fi ? 'font' : fi.problem === 'metrics' ? 'metrics' : fi.problem || fi.subtype === 'Type3' ? 'font' : null;
    const id = ctx.fid();
    const now = it.e.text ?? it.obj.text;
    const input = el('input', { type: 'text', id, className: 'mc-input', maxlength: '2000', value: now, disabled: !!why, dataset: { baseWords: '' }, spellcheck: false,
      onkeydown: (e) => { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } else if (e.key === 'Escape') { input.value = now; input.blur(); } e.stopPropagation(); },
      onchange: () => {
        const v = input.value.replace(/[\u0000-\u001f\u007f]/g, '');
        if (v === now) return;
        const missing = [...new Set(fi.encode(v).missing)].join('');
        if (commit(c, t('base.undo.words'), [it.key], withPatch(c.st, [it.key], { text: v }))) ctx.status(missing ? t('base.text.fallback', { letters: missing, font: fontName(fi) }) : t('base.text.done'));
      } });
    const out = el('div', { className: 'mc-props' }, el('label', { for: id, className: 'mc-k' }, t('base.words')), input);
    const wrap = el('div', {}, out);
    if (why) wrap.append(el('p', { className: 'mc-note', role: 'status' }, refusal(why)));
    else {
      const have = [...fi.have().keys()].filter((ch) => ch.trim()).sort().join('');
      wrap.append(el('p', { className: 'mc-note', dataset: { baseFont: '' } }, t(fi.subset ? 'base.text.font.subset' : 'base.text.font', { font: fontName(fi), letters: have })));
    }
    return wrap;
  }
  const fontName = (fi) => String(fi.base || fi.resName || '').replace(/^[A-Z]{6}\+/, '') || '?';
  function scanNote(c) {
    const kindsOnPage = new Set(c.pc.objects.map((o) => o.kind));
    if (kindsOnPage.has('image') && !kindsOnPage.has('path') && !kindsOnPage.has('text')) return t('base.scan');
    return t('base.empty');
  }

  // ---- markups into the page ----
  /** Markups that can become the page's own line work (null when none of them can). */
  function intoPage(list) {
    const s = sheet();
    if (!s || !list.length || list.some((m) => m.sheet !== s.page.key || m.locked)) return null;
    let k = 0;
    const stamp = Date.now().toString(36);
    const items = [];
    for (const m of list) {
      const got = contentFromList(ctx.listOf(m), '#ffffff', () => 'm' + stamp + '-' + (k++));
      if (!got) return null;
      items.push(...got);
    }
    return items;
  }
  async function putIntoPage(list) {
    const s = sheet();
    const items = intoPage(list);
    if (!s || !items) { ctx.status(t('base.into.cant')); return false; }
    const fi = await fileInfo(s.file);
    if (fi.blocker) { ctx.status(fi.blocker === 'unreadable' ? t('base.blocked.unreadable', { why: fi.why || '' }) : t('base.blocked.' + fi.blocker)); return false; }
    store.change(t('base.undo.into', { n: list.length }), (tx) => {
      for (const m of list) tx.remove(m.id);
      tx.setBase(s.page.key, withAdded(stateOf(s.page.key), items));
    });
    ctx.status(t('base.into.done', { n: list.length }));
    return true;
  }

  function enter() {
    const c = current();
    nodeEdit = null;
    if (c?.blocker) blockedSay(c);
    else ctx.status(t('base.hint'));
  }
  function leave() { selKeys = new Set(); nodeEdit = null; hoverKey = null; drag = null; ctx.over.style.cursor = ''; }
  function cancel() { if (drag) { drag = null; view.invalidate(); } }

  return {
    enter, leave, cancel, down, move, up, dblclick, hover, key, paintOver, props, bytesFor, fileState, restore, forget, intoPage, putIntoPage,
    get busy() { return !!drag; },
    get selection() { return [...selKeys]; },
    select(keys) { selKeys = new Set(keys); ctx.refresh(); },
    objects() { const c = current(); return c?.list ? c.list.map((x) => ({ key: x.key, kind: x.kind, box: x.box.slice() })) : null; },
    ready: async () => { const s = sheet(); if (s) await fileInfo(s.file); current(); },
    settled: async (f) => { const j = f ? jobs.get(f) : null; if (j?.running) await j.running; },
  };
}

/** The 8 grips of a page-space box. */
function gripsOf(b) {
  const [x0, y0, x1, y1] = b, mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
  const at = { nw: [x0, y1], n: [mx, y1], ne: [x1, y1], e: [x1, my], se: [x1, y0], s: [mx, y0], sw: [x0, y0], w: [x0, my] };
  return GRIPS.map((key) => ({ key, x: at[key][0], y: at[key][1] }));
}
/** Dragging a grip → a page-space scale about the opposite side (Shift keeps the proportions). */
function scaleFor(b, grip, p, keep) {
  const [x0, y0, x1, y1] = b;
  const ax = grip.key.includes('w') ? x1 : grip.key.includes('e') ? x0 : (x0 + x1) / 2;
  const ay = grip.key.includes('s') ? y1 : grip.key.includes('n') ? y0 : (y0 + y1) / 2;
  const clamp = (v) => (Math.abs(v) < 0.01 ? (v < 0 ? -0.01 : 0.01) : v);
  let sx = grip.key.includes('e') || grip.key.includes('w') ? clamp((p[0] - ax) / (grip.x - ax || 1)) : 1;
  let sy = grip.key.includes('n') || grip.key.includes('s') ? clamp((p[1] - ay) / (grip.y - ay || 1)) : 1;
  if (keep) { const s = Math.max(Math.abs(sx === 1 && !grip.key.match(/[ew]/) ? sy : sx), Math.abs(sy === 1 && !grip.key.match(/[ns]/) ? sx : sy)); sx = Math.sign(sx) * s; sy = Math.sign(sy) * s; }
  return scaleAbout(sx, sy, ax, ay);
}

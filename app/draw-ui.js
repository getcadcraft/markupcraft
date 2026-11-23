/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draw-ui.js: markupcraft.js's 22 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountDraw(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { snap45, apply as applyT, pick, grips, moveBy, applyGrip, pickWindow, simplify } from './geom.js';
import { t } from './i18n.js';
import { clone, stampLabel } from './model.js';
import { measure, measureArea } from './units.js';
import { frame as textFrame, NOTE_SIZE } from './shapes.js';
import { el } from './ui-util.js';
import { sketchPoint } from './sketch.js';
import { holeProblem } from './holes.js';

export function mountDraw(ctx) {
  const { ST, ui, store, view, settings, cmp, curSheet, curKey, envOf, pickable, tolerance, styleFor, status, followLink, startEdit, currentPicture, placePicture, setTool, updateCursor, newMarkup, commitNew, stampBox, refreshAll, refreshSelection } = ctx;

  function constrain(from, p, e) { return e.shiftKey ? snap45(from, p) : p; }

  function showCoords(p) {
    const s = curSheet();
    if (!s) { ui.coords.textContent = ''; return; }
    const v = applyT(view.T1, p);
    const cal = store.calibrations.get(s.page.key);
    ui.coords.textContent = settings.posUnit === 'mm'
      ? t('coords.mm', { x: (v[0] / 72 * 25.4).toFixed(1), y: (v[1] / 72 * 25.4).toFixed(1) })
      : t('coords.in', { x: (v[0] / 72).toFixed(2), y: (v[1] / 72).toFixed(2) });
    void cal;
  }

  function hover(p) {
    const m = pick(pickable(), p, tolerance(), envOf);
    const id = m?.id || null;
    let cursor = '';
    const g = gripAt(p);
    if (g) cursor = g.kind === 'box' ? ({ n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize', ne: 'nesw-resize', sw: 'nesw-resize', nw: 'nwse-resize', se: 'nwse-resize' })[g.key] : 'crosshair';
    else if (m && ST.sel.has(m.id) && !m.locked) cursor = 'move';
    else if (m) cursor = 'pointer';
    ctx.over.style.cursor = cursor;
    if (id !== ST.hoverId) { ST.hoverId = id; view.invalidate(); }
  }

  function gripAt(p) {
    if (ST.sel.size !== 1) return null;
    const m = store.get([...ST.sel][0]);
    if (!m || m.sheet !== curKey()) return null;
    const tol = (ST.touchMode ? 16 : 6) / view.z;
    // vertex grips first (they sit on top of box grips of the same markup)
    const gs = grips(m).sort((a, b) => (a.kind === 'box') - (b.kind === 'box'));
    return gs.find((g) => Math.abs(g.x - p[0]) <= tol && Math.abs(g.y - p[1]) <= tol) || null;
  }

  function selectDown(p, sx, sy, e) {
    const g = gripAt(p);
    if (g) { const m = store.get([...ST.sel][0]); ST.drag = { kind: 'grip', id: m.id, grip: g, m0: clone(m), a: p, sx, sy, moved: false }; return; }
    const m = pick(pickable(), p, tolerance(), envOf);
    if (m?.link && (e.ctrlKey || e.metaKey)) { followLink(m); return; }   // Ctrl/⌘+click follows a sheet link (0.4 K9)
    if (m) {
      if (e.shiftKey) {
        if (ST.sel.has(m.id)) ST.sel.delete(m.id); else ST.sel.add(m.id);
        ST.sel = new Set(ST.sel);
        refreshSelection();
        return;
      }
      if (!ST.sel.has(m.id)) { ST.sel = new Set([m.id]); refreshSelection(); }
      const ids = [...ST.sel].filter((id) => store.get(id) && !store.get(id).locked);
      ST.drag = { kind: 'move', ids, m0s: ids.map((id) => clone(store.get(id))), a: p, d: [0, 0], sx, sy, moved: false };
      return;
    }
    if (!e.shiftKey && ST.sel.size) { ST.sel = new Set(); refreshSelection(); }
    ST.drag = { kind: 'window', a: [sx, sy], b: [sx, sy], sx, sy, moved: false };
  }

  // live previews while dragging: originals hidden on the base canvas, moved copies on the overlay
  function liveMove() {
    view.hidden = new Set(ST.drag.ids);
    ST.drag.live = ST.drag.m0s.map((m) => ({ ...m, ...moveBy(m, ST.drag.d[0], ST.drag.d[1]) }));
    view.invalidate(true);
  }
  function liveGrip() {
    view.hidden = new Set([ST.drag.id]);
    ST.drag.live = [{ ...ST.drag.m0, ...applyGrip(ST.drag.m0, ST.drag.grip, ST.drag.p, { shift: ST.drag.shift }) }];
    view.invalidate(true);
  }
  function endMove(d) {
    if (!d.moved || !d.ids.length || (!d.d[0] && !d.d[1])) return;
    store.change(t('undo.move', { n: d.ids.length }), (tx) => { for (const m of d.m0s) tx.update(m.id, moveBy(m, d.d[0], d.d[1])); });
    refreshAll();
  }
  function endGrip(d) {
    if (!d.moved) return;
    const patch = applyGrip(d.m0, d.grip, d.p, { shift: d.shift });
    store.change(t('undo.resize', { type: ctx.tlow(d.m0.type) }), (tx) => tx.update(d.id, patch));
    refreshAll();
  }
  function endWindow(d, add) {
    if (!d.moved) return;
    const a = view.toUser(d.a[0], d.a[1]), b = view.toUser(d.b[0], d.b[1]);
    const r = [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])];
    const crossing = d.b[0] < d.a[0];
    const hits = pickWindow(pickable(), r, crossing, envOf);
    ST.sel = add ? new Set([...ST.sel, ...hits.map((m) => m.id)]) : new Set(hits.map((m) => m.id));
    refreshSelection();
    status(hits.length ? t('select.window', { n: hits.length }) : t(crossing ? 'select.window.none_touch' : 'select.window.none_inside'));
  }

  function finishFree(pts) {
    if (!curSheet()) return;
    const clean = pts.length > 2 ? simplify(pts, 0.6 / view.z) : pts;
    if (clean.length === 1) clean.push([clean[0][0] + 0.01, clean[0][1]]);
    commitNew(newMarkup(ST.tool, { pts: clean }));
  }

  function finishTwo(a, b) {
    if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 2 / view.z) { status(t('two.same')); return; }
    if (ST.tool === 'calibrate') { ctx.calibrateDialog(Math.hypot(b[0] - a[0], b[1] - a[1]), [a, b]); return; }
    if (ST.tool === 'measure') {
      const cal = store.calibrations.get(curKey());
      if (!cal) { status(t('need.scale')); return; }
      const mk = commitNew(newMarkup('measure', { pts: [a, b] }));
      status(t('measure.done', { value: measure(Math.hypot(b[0] - a[0], b[1] - a[1]), cal), scale: cal.label }));
      return mk;
    }
    commitNew(newMarkup(ST.tool, { pts: [a, b] }));
  }

  function finishBox(a, b) {
    if (!curSheet()) return;
    if (ST.tool === 'stamp' && (ST.toolPreset?.items || ST.toolPreset?.content)) { ctx.placeStampTool(ST.toolPreset, b ? [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] : a); return; }
    if (ST.tool === 'stamp' && !ST.toolPreset && currentPicture()) { placePicture(currentPicture(), a, b); return; }
    if (ST.tool === 'stamp') {
      const label = ST.toolPreset?.label || stampLabel(settings.stamp);
      const rect = b ? [a[0], a[1], b[0], b[1]] : stampBox(a, label);
      if (b && (Math.abs(b[0] - a[0]) < 8 / view.z || Math.abs(b[1] - a[1]) < 8 / view.z)) return;
      commitNew(newMarkup('stamp', { rect }));
      return;
    }
    if (ST.tool === 'text') {
      const st = styleFor('text');
      const rect = b ? [a[0], a[1], b[0], b[1]] : textBoxAt(a, ctx.clampPt(200 / view.z, 120, 360), st.fontSize * 1.2 + 6);
      startEdit(newMarkup('text', { rect }), true);
      return;
    }
    if (!b) { status(t('box.drag', { type: ctx.tlow(ST.tool) })); return; }
    if (Math.abs(b[0] - a[0]) < 2 / view.z && Math.abs(b[1] - a[1]) < 2 / view.z) return;
    commitNew(newMarkup(ST.tool, { rect: [a[0], a[1], b[0], b[1]] }));
  }

  /** A text box whose top-left (as seen on screen) is at p, w × h in user units, in the page's reading frame. */
  function textBoxAt(p, w, h) {
    const f = textFrame(view.seenRotate, [0, 0, 1, 1]);
    const q = [p[0] + f.u[0] * w + f.v[0] * h, p[1] + f.u[1] * w + f.v[1] * h];
    return [Math.min(p[0], q[0]), Math.min(p[1], q[1]), Math.max(p[0], q[0]), Math.max(p[1], q[1])];
  }

  function finishCallout(tip, at) {
    const st = styleFor('callout');
    const f = textFrame(view.seenRotate, [0, 0, 1, 1]);
    let knee = at;
    if (!knee) knee = [tip[0] + (f.u[0] * 50 - f.v[0] * 40) / view.z, tip[1] + (f.u[1] * 50 - f.v[1] * 40) / view.z];
    const w = ctx.clampPt(190 / view.z, 120, 300), h = st.fontSize * 1.2 + 10;
    // the box goes on the far side of the knee from the tip (along the reading direction)
    const along = (knee[0] - tip[0]) * f.u[0] + (knee[1] - tip[1]) * f.u[1];
    const gap = 6 / view.z;
    const start = along >= 0 ? [knee[0] + f.u[0] * gap, knee[1] + f.u[1] * gap] : [knee[0] - f.u[0] * (gap + w), knee[1] - f.u[1] * (gap + w)];
    const topLeft = [start[0] - f.v[0] * h / 2, start[1] - f.v[1] * h / 2];
    const rect = textBoxAt(topLeft, w, h);
    startEdit(newMarkup('callout', { rect, pts: [tip, knee] }), true);
  }

  function finishPoly() {
    if (ST.pending?.kind !== 'poly') return;
    const pts = ST.pending.pts.slice(0, -1);
    // a double-click adds the same point twice: drop repeats
    const clean = pts.filter((q, i) => i === 0 || Math.hypot(q[0] - pts[i - 1][0], q[1] - pts[i - 1][1]) > 1 / view.z);
    ST.pending = null;
    const need = ST.tool === 'polyline' ? 2 : 3;
    if (ST.cutFor) { finishCutout(clean); return; }
    if (ST.spaceDraw) { ctx.finishSpace(clean); return; }
    if (ST.tool === 'area' && !store.calibrations.get(curKey())) { status(t('need.scale')); view.invalidate(); return; }
    if (clean.length < need) { status(t('poly.need', { type: ctx.tlow(ST.tool), n: need })); view.invalidate(); return; }
    commitNew(newMarkup(ST.tool, { pts: clean }));
  }

  /** Sketch to scale (0.4 K18): while a line or outline is being drawn on a calibrated sheet, typing a number opens a box
   *  for the next point's length (and "< angle"); Enter places it, Esc closes the box. */
  function openSketch(first) {
    ui.canvases.querySelector('.mc-sketch')?.remove();
    const cal = store.calibrations.get(curKey());
    const box = el('input', { type: 'text', className: 'mc-input mc-sketch', value: first, autocomplete: 'off', spellcheck: false, 'aria-label': t('sketch.label'), title: t('sketch.title') });
    const at = ST.pointer || [view.w / 2, view.h / 2];
    box.style.left = Math.min(view.w - 160, at[0] + 14) + 'px';
    box.style.top = Math.min(view.h - 40, at[1] + 14) + 'px';
    const close = () => { box.remove(); ui.over.focus({ preventScroll: true }); };
    box.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (!ST.pending) { close(); return; }
      const from = ST.pending.kind === 'two' ? ST.pending.a : ST.pending.pts[ST.pending.pts.length - 2];
      const toward = ST.pending.kind === 'two' ? (ST.pending.b || ST.pending.a) : ST.pending.pts[ST.pending.pts.length - 1];
      const r = sketchPoint(from, toward, box.value, cal, view.seenRotate);
      if (r.error) { status(t(r.error)); box.select(); return; }
      close();
      if (ST.pending.kind === 'two') { const a = ST.pending.a; ST.pending = null; finishTwo(a, r.pt); }
      else { ST.pending.pts[ST.pending.pts.length - 1] = r.pt; ST.pending.pts.push(r.pt.slice()); status(t('sketch.placed', { len: measure(Math.hypot(r.pt[0] - from[0], r.pt[1] - from[1]), cal) })); }
      view.invalidate();
    });
    box.addEventListener('blur', () => setTimeout(() => box.isConnected && box.remove(), 0));
    ui.canvases.append(box);
    box.focus();
    box.setSelectionRange(box.value.length, box.value.length);
  }

  /** Cut-outs (0.4 K8): with an area selected, "Add a cut-out" draws an outline inside it like an area; one undo step. */
  ST.cutFor = null;
  async function startCutout(m) {
    await setTool('area');
    ST.cutFor = m.id;
    ST.sel = new Set([m.id]);
    status(t('hole.hint'));
    view.invalidate(true);
  }
  function finishCutout(pts) {
    const m = store.get(ST.cutFor);
    ST.cutFor = null;
    if (!m) return;
    const err = holeProblem(m.pts, m.holes || [], pts);
    if (err) { status(t(err)); view.invalidate(); return; }
    store.change(t('undo.hole.add'), (tx) => tx.update(m.id, { holes: [...(m.holes || []), pts] }));
    ST.sel = new Set([m.id]);
    const v = measureArea(m.pts, envOf(m).cal, [...(m.holes || []), pts]);
    status(t('hole.added', { area: v.area }));
    setTool('select');
    refreshAll();
  }

  /** Count tool: a click adds a numbered mark to the selected group, or starts a group; Shift+click removes one. */
  function countClick(p, e) {
    const cur0 = ST.sel.size === 1 ? store.get([...ST.sel][0]) : null;
    const group = cur0 && cur0.type === 'count' && cur0.sheet === curKey() && !cur0.locked ? cur0 : null;
    if (e.shiftKey) {
      if (!group) { status(t('count.remove.need')); return; }
      const tol = 8 / view.z;
      let best = -1, bd = Infinity;
      group.pts.forEach((q, i) => { const d = Math.hypot(q[0] - p[0], q[1] - p[1]); if (d < bd) { bd = d; best = i; } });
      if (best < 0 || bd > tol + group.style.fontSize) { status(group.label ? t('count.remove.miss', { group: group.label }) : t('count.remove.miss.unnamed')); return; }
      if (group.pts.length === 1) { store.change(t('undo.count.remove'), (tx) => tx.remove(group.id)); ST.sel = new Set(); status(t('count.removed_last')); refreshAll(); return; }
      store.change(t('undo.count.remove_mark'), (tx) => tx.update(group.id, { pts: group.pts.filter((_, i) => i !== best) }));
      status(t('count.total', { group: group.label || t('count.default'), n: group.pts.length - 1 }));
      refreshAll();
      return;
    }
    if (group) {
      const g = store.change(t('undo.count'), (tx) => tx.update(group.id, { pts: [...group.pts, [p[0], p[1]]] }));
      status(t('count.total', { group: g.label || t('count.default'), n: g.pts.length }));
      refreshAll();
      return;
    }
    const label = (ST.toolPreset?.label || settings.countLabel || t('count.default')).slice(0, 60);
    const mk = commitNew(newMarkup('count', { pts: [p], label }), t('undo.count.start'));
    status(t('count.started', { group: mk.label }));
  }

  function placeNote(p) {
    const m = newMarkup('note', { pts: [[p[0] - NOTE_SIZE / 2, p[1] + NOTE_SIZE / 2]] });
    startEdit(m, true);
  }

  function cancelOps() {
    ST.drag = null; ST.pending = null; view.hidden = null; ST.cutFor = null; ST.spaceDraw = false;
    if (cmp.aligning) { cmp.aligning = null; cmp.balance = +ui.cmpBalance.value / 100; ctx.applyCompare(); }
    view.invalidate(true);
    updateCursor();
  }

  return { constrain, showCoords, hover, selectDown, liveMove, liveGrip, endMove, endGrip, endWindow, finishFree, finishTwo, finishBox, finishCallout, finishPoly, openSketch, startCutout, countClick, placeNote, cancelOps };
}

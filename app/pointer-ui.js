/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pointer-ui.js: markupcraft.js's 9 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPointer(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { pick, squareFrom, snap45 } from './geom.js';
import { panButton, wheelFactor } from './input-mouse.js';
import { t } from './i18n.js';
import { PadDetector } from './wheel-pad.js';

export function mountPointer(ctx) {
  const { ST, view, cmp, envOf, pickable, tolerance, status, startEdit, commitEdit, finishPoly, selectDown, finishTwo, constrain, placeNote, countClick, showCoords, hover, liveMove, liveGrip, finishFree, finishBox, finishCallout, endMove, endGrip, endWindow, setTool, updateCursor, lineUpClick, over, localXY, openCtxMenu, root } = ctx;

  // ---- touch: one finger draws and selects (the handlers below); two fingers pinch-zoom about their
  // middle and pan. Tools that act on a press (count, note, polyline points, the second click of a
  // two-point tool) wait for the finger to lift, so the first finger of a pinch never leaves a mark.
  const touches = new Map();     // pointerId → [x, y] on the stage
  ST.gesture = null;            // { mid, d } while two fingers are down; { ending: true } until all lift
  ST.tap = null;                // a deferred press: { id, x, y, e }
  ST.lastTap = null;            // for double-tap (finishes a polyline)
  const pinch = () => { const [a, b] = [...touches.values()]; return { mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], d: Math.max(1, Math.hypot(a[0] - b[0], a[1] - b[1])) }; };
  const pressTool = () => ST.tool !== 'select' && (ST.tool === 'record' || ctx.KIND[ST.tool] === 'count' || ctx.KIND[ST.tool] === 'note' || ctx.KIND[ST.tool] === 'poly' || ctx.KIND[ST.tool] === 'three' || ctx.KIND[ST.tool] === 'arcm' || ST.pending?.kind === 'two');
  // A long press (a finger held still) is the touch form of Enter / double-click: it finishes a polyline, area or free
  // cloud, and on a markup with the Select tool it opens its text for editing.
  ST.press = null;              // { id, x, y, timer }
  const LONG_PRESS_MS = 500;
  const endPress = () => { if (ST.press) { clearTimeout(ST.press.timer); ST.press = null; } };
  window.markupcraft.touchState = () => ({ touches: touches.size, gesture: !!ST.gesture, press: !!ST.press, editing: !!ST.editing, touchMode: ST.touchMode });
  function longPress(x, y, held = false) {
    ST.press = null;
    if ((!held && touches.size !== 1) || ST.gesture || ST.editing) return;
    if (ST.pending?.kind === 'poly') { ST.tap = null; finishPoly(); view.invalidate(); return; }
    if (ST.tool !== 'select') return;
    const m = pick(pickable(), view.toUser(x, y), tolerance(), envOf);
    if (m && !m.locked && !(ctx.TEXT_TYPES.has(m.type) || m.type === 'note')) { ST.drag = null; view.hidden = null; openCtxMenu(x, y); return; }   // 71.6: a finger's context menu
    if (!m || m.locked || !(ctx.TEXT_TYPES.has(m.type) || m.type === 'note')) return;
    ST.drag = null; view.hidden = null;
    ST.sel = new Set([m.id]);
    startEdit(m);
    view.invalidate(true);
  }
  over.addEventListener('pointerdown', (e) => {
    ST.touchMode = e.pointerType === 'touch';
    root.classList.toggle('is-touch', ST.touchMode);
    if (e.pointerType !== 'touch' || !view.page) return;
    touches.set(e.pointerId, localXY(e));
    endPress();
    if (touches.size === 1) { const [x, y] = localXY(e); ST.press = { id: e.pointerId, x, y, t0: performance.now(), timer: setTimeout(() => longPress(x, y), LONG_PRESS_MS) }; }
    if (touches.size === 2) {
      // the second finger: drop whatever the first one started and move the view instead
      if (ST.drag && ST.drag.kind !== 'pan') { ST.drag = null; view.hidden = null; view.invalidate(true); }
      ST.drag = null; ST.tap = null;
      ST.gesture = pinch();
      e.stopImmediatePropagation();
      return;
    }
    if (touches.size > 2 || ST.gesture) { e.stopImmediatePropagation(); return; }
    if (pressTool() && !ST.editing && !cmp.aligning) {
      const [x, y] = localXY(e);
      ST.tap = { id: e.pointerId, x, y, e: { clientX: e.clientX, clientY: e.clientY, shiftKey: e.shiftKey, pointerId: e.pointerId, pointerType: 'touch' } };
      e.stopImmediatePropagation();
    }
  });
  over.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'touch' || !touches.has(e.pointerId)) return;
    touches.set(e.pointerId, localXY(e));
    if (ST.press && ST.press.id === e.pointerId) { const [x, y] = localXY(e); if (Math.hypot(x - ST.press.x, y - ST.press.y) > 10) endPress(); }
    if (ST.gesture && !ST.gesture.ending && touches.size >= 2) {
      const g = pinch();
      view.zoomAt(g.d / ST.gesture.d, g.mid[0], g.mid[1]);
      view.panBy(g.mid[0] - ST.gesture.mid[0], g.mid[1] - ST.gesture.mid[1]);
      ST.gesture = g;
      e.stopImmediatePropagation();
      return;
    }
    if (ST.gesture) { e.stopImmediatePropagation(); return; }
    if (ST.tap && ST.tap.id === e.pointerId) {
      const [x, y] = localXY(e);
      if (Math.hypot(x - ST.tap.x, y - ST.tap.y) > 12) ST.tap = null;   // a slide is not a tap
      e.stopImmediatePropagation();
    }
  });
  const touchEnd = (e) => {
    if (e.pointerType !== 'touch') return;
    touches.delete(e.pointerId);
    if (ST.press && ST.press.id === e.pointerId) {
      // a finger held still makes the browser cancel the pointer for its own long-press: that is our long press
      const p0 = ST.press;
      endPress();
      if (e.type === 'pointercancel' && !ST.gesture && performance.now() - p0.t0 > 350) { ST.tap = null; longPress(p0.x, p0.y, true); }
    }
    if (ST.gesture) {
      ST.gesture = touches.size ? { ending: true } : null;
      e.stopImmediatePropagation();
      return;
    }
    if (ST.tap && ST.tap.id === e.pointerId) {
      const t = ST.tap;
      ST.tap = null;
      e.stopImmediatePropagation();
      if (e.type === 'pointercancel') return;
      const now = performance.now();
      const dbl = ST.lastTap && now - ST.lastTap.t < 400 && Math.hypot(t.x - ST.lastTap.x, t.y - ST.lastTap.y) < 24;
      ST.lastTap = { t: now, x: t.x, y: t.y };
      onDown({ ...t.e, button: 0, detail: dbl ? 2 : 1, preventDefault() {} });
    }
  };
  over.addEventListener('pointerup', touchEnd);
  over.addEventListener('pointercancel', touchEnd);

  over.addEventListener('pointerdown', onDown);
  function onDown(e) {
    if (!view.page) return;
    over.focus({ preventScroll: true });
    const [sx, sy] = localXY(e);
    // Scroll mode: pressing on another page of the column makes it the page you work on
    if (view.strip && !ST.drag && !ST.pending && !ST.editing && e.button === 0) { const k = view.stripAt(sx, sy); if (k >= 0 && k !== view.strip.at) view.activate(k); }
    const p = view.toUser(sx, sy);
    if (e.button === 2) ST.rightDown = { t: performance.now(), x: e.clientX, y: e.clientY, up: false, moved: false, want: false };
    if ((e.button === 1 && panButton(1)) || (e.button === 0 && (ST.spaceDown || ST.tool === 'pan' || ST.tool === 'fill')) || (e.button === 2 && !ST.pending && panButton(2))) {   // IP.3: middle / right pan as the style says
      e.preventDefault();
      over.setPointerCapture(e.pointerId);
      ST.drag = { kind: 'pan', sx, sy, x0: sx, y0: sy, right: e.button === 2 };
      updateCursor();
      return;
    }
    if (e.button === 2 && ST.pending?.kind === 'poly') { finishPoly(); return; }
    if (e.button !== 0) return;
    if (ST.editing) { commitEdit(); return; }
    try { over.setPointerCapture(e.pointerId); } catch { /* a replayed tap: the finger is already up */ }
    if (cmp.aligning) { ctx.alignClick(p); return; }
    if (ST.tool === 'content') { ctx.baseUi.down(p, sx, sy, e); view.invalidate(); return; }
    if (ST.tool === 'seltext') { ST.textSel?.down(p); return; }
    if (ST.lineUp) { lineUpClick(p); return; }
    if (ST.tool === 'areacopy') { ST.areaUi?.down(p, sx, sy); return; }
    if (ST.tool === 'record') { ST.fieldUi?.place(p); view.invalidate(true); return; }
    const kind = ST.tool === 'select' ? 'select' : ctx.KIND[ST.tool];
    switch (kind) {
      case 'select': { const pin = ST.fieldUi?.hit(sx, sy); if (pin) { ST.fieldUi.pick(pin); break; } selectDown(p, sx, sy, e); break; }
      case 'free': ST.drag = { kind: 'free', pts: [p], sx, sy }; break;
      case 'two':
        if (ST.pending?.kind === 'two') { finishTwo(ST.pending.a, constrain(ST.pending.a, p, e)); ST.pending = null; }
        else ST.drag = { kind: 'two', a: p, b: p, sx, sy };
        break;
      case 'box': ST.drag = { kind: 'box', a: p, b: p, sx, sy }; break;
      case 'poly':
        if (ST.pending?.kind === 'poly') {
          const last = ST.pending.pts[ST.pending.pts.length - 2];
          const q = constrain(last, p, e);
          if (e.detail >= 2) { finishPoly(); break; }
          ST.pending.pts[ST.pending.pts.length - 1] = q;
          ST.pending.pts.push(q);
        } else ST.pending = { kind: 'poly', pts: [p, p] };
        break;
      case 'three':
        if (ST.pending?.kind === 'three') {
          ST.pending.pts[ST.pending.pts.length - 1] = p;
          if (ST.pending.pts.length === 3) { const pts = ST.pending.pts.slice(); ST.pending = null; ctx.finishThree(pts); break; }
          ST.pending.pts.push(p);
          status(t('three.last.' + ST.tool));
        } else { ST.pending = { kind: 'three', pts: [p, p] }; status(t('three.next.' + ST.tool)); }
        break;
      case 'arcm': ctx.arcPress(p); break;
      case 'callout': ST.drag = { kind: 'callout', tip: p, b: p, sx, sy }; break;
      case 'note': placeNote(p); break;
      case 'count': countClick(p, e); break;
      default: break;
    }
    view.invalidate();
  }

  over.addEventListener('pointerleave', () => { ST.pointer = null; });
  over.addEventListener('pointermove', (e) => {
    if (!view.page) return;
    const [sx, sy] = localXY(e);
    ST.pointer = e.pointerType === 'touch' ? null : [sx, sy];
    const p = view.toUser(sx, sy);
    showCoords(p);
    if (ST.drag?.kind === 'pan') { view.panBy(sx - ST.drag.sx, sy - ST.drag.sy); ST.drag.sx = sx; ST.drag.sy = sy; return; }
    if (ST.tool === 'content' && !ST.drag) { if (!ctx.baseUi.move(p, sx, sy, e)) ctx.baseUi.hover(p); return; }
    if (ST.tool === 'seltext' && !ST.drag) { ST.textSel?.move(p); return; }
    if (ST.tool === 'areacopy' && !ST.drag) { ST.areaUi?.move(sx, sy); return; }
    if (ST.lineUp && !ST.drag) { ST.lineUp.at = p; view.invalidate(); return; }
    if (!ST.drag) {
      if (ST.pending?.kind === 'two') { ST.pending.b = constrain(ST.pending.a, p, e); view.invalidate(); }
      else if (ST.pending?.kind === 'poly') { const last = ST.pending.pts[ST.pending.pts.length - 2]; ST.pending.pts[ST.pending.pts.length - 1] = constrain(last, p, e); view.invalidate(); }
      else if (ST.pending?.kind === 'three') { ST.pending.pts[ST.pending.pts.length - 1] = p; view.invalidate(); }
      else if (ST.pending?.kind === 'arcm') { ST.pending.at = p; view.invalidate(); }
      else if (ST.tool === 'select') hover(p);
      return;
    }
    const moved = Math.hypot(sx - ST.drag.sx, sy - ST.drag.sy) > 3;
    switch (ST.drag.kind) {
      case 'free': {
        const last = ST.drag.pts[ST.drag.pts.length - 1];
        if (e.shiftKey) ST.drag.pts = [ST.drag.pts[0], p];
        else if (Math.hypot(p[0] - last[0], p[1] - last[1]) > 0.75 / view.z) {
          for (const ev of e.getCoalescedEvents ? e.getCoalescedEvents() : [e]) { const [cx, cy] = localXY(ev); ST.drag.pts.push(view.toUser(cx, cy)); }
        }
        break;
      }
      case 'two': ST.drag.b = constrain(ST.drag.a, p, e); break;
      case 'box': ST.drag.b = e.shiftKey ? squareFrom(ST.drag.a, p) : p; break;
      case 'callout': ST.drag.b = p; break;
      case 'move':
        if (moved || ST.drag.moved) { ST.drag.moved = true; ST.drag.d = [p[0] - ST.drag.a[0], p[1] - ST.drag.a[1]]; if (e.shiftKey) { const q = snap45(ST.drag.a, p); ST.drag.d = [q[0] - ST.drag.a[0], q[1] - ST.drag.a[1]]; } liveMove(); }
        break;
      case 'grip': if (moved || ST.drag.moved) { ST.drag.moved = true; ST.drag.p = p; ST.drag.shift = e.shiftKey; liveGrip(); } break;
      case 'window': ST.drag.b = [sx, sy]; ST.drag.moved = ST.drag.moved || moved; break;
      default: break;
    }
    view.invalidate();
  });

  over.addEventListener('pointerup', (e) => {
    if (ST.tool === 'content' && !ST.drag && ctx.baseUi.busy) { const [ux, uy] = localXY(e); ctx.baseUi.up(view.toUser(ux, uy), ux, uy, e); return; }
    if (ST.tool === 'seltext' && !ST.drag) { const [ux, uy] = localXY(e); ST.textSel?.up(view.toUser(ux, uy)); return; }
    if (ST.tool === 'areacopy' && !ST.drag) { const [ux, uy] = localXY(e); ST.areaUi?.up(ux, uy); return; }
    if (!ST.drag) return;
    const [sx, sy] = localXY(e);
    const p = view.toUser(sx, sy);
    const d = ST.drag;
    ST.drag = null;
    const moved = Math.hypot(sx - d.sx, sy - d.sy) > 4;
    switch (d.kind) {
      case 'pan': updateCursor(); if (d.right && Math.hypot(sx - d.x0, sy - d.y0) <= 4) openCtxMenu(sx, sy); break;   // a right click that did not pan
      case 'free': finishFree(d.pts); break;
      case 'two':
        if (moved) finishTwo(d.a, constrain(d.a, p, e));
        else ST.pending = { kind: 'two', a: d.a, b: d.a };
        break;
      case 'box': finishBox(d.a, moved ? (e.shiftKey ? squareFrom(d.a, p) : p) : null); break;
      case 'callout': finishCallout(d.tip, moved ? p : null); break;
      case 'move': endMove(d); break;
      case 'grip': endGrip(d); break;
      case 'window': endWindow(d, e.shiftKey); break;
      default: break;
    }
    view.hidden = null;
    view.invalidate(true);
  });
  over.addEventListener('pointercancel', () => { ctx.baseUi.cancel(); ST.drag = null; view.hidden = null; view.invalidate(true); updateCursor(); });

  over.addEventListener('dblclick', (e) => {
    if (!view.page) return;
    if (ST.pending?.kind === 'poly') { finishPoly(); return; }
    if (ST.tool === 'content') { const [cx, cy] = localXY(e); ctx.baseUi.dblclick(view.toUser(cx, cy)); return; }
    if (ST.tool === 'seltext') { const [cx, cy] = localXY(e); ST.textSel?.dblclick(view.toUser(cx, cy)); return; }
    if (ST.tool !== 'select') return;
    const [sx, sy] = localXY(e);
    const p = view.toUser(sx, sy);
    const m = pick(pickable(), p, tolerance(), envOf);
    if (m && !m.locked) startEdit(m);
    else if (!m && ST.formUi?.fieldAt(p)) setTool('fill').then(() => ST.formUi.focusAt(p));   // a form field: fill it in
  });

  const padDetector = new PadDetector();
  over.addEventListener('wheel', (e) => {
    if (!view.page) return;
    e.preventDefault();
    if (padDetector.isSwipe(e)) { view.panBy(-e.deltaX, -e.deltaY); return; }   // D7.56: two fingers pan (the sheet follows them); a pinch and a mouse wheel zoom
    const [sx, sy] = localXY(e);
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 16; else if (e.deltaMode === 2) dy *= 400;
    // Scroll mode: the wheel scrolls through the pages (Shift: sideways); Ctrl + wheel and a trackpad pinch zoom
    if (view.strip && !e.ctrlKey && !e.metaKey) {
      let dx = e.deltaX;
      if (e.deltaMode === 1) dx *= 16; else if (e.deltaMode === 2) dx *= 400;
      if (e.shiftKey && !dx) { dx = dy; dy = 0; }
      view.panBy(-dx, -dy);
      return;
    }
    view.zoomAt(Math.exp(-dy * (e.ctrlKey ? 0.01 : 0.0018 * wheelFactor())), sx, sy);   // IP.3: the style's wheel (a pinch stays as it is)
  }, { passive: false });
  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — the page view, 2D: pan as a drag does
  // (view.panBy), zoom as the wheel does (view.zoomAt(f, x, y): factor first, then the point in px inside `over`), fit = Fit page
  (window.ccViews ||= []).push({
    el: over, kind: '2d',
    pan(dx, dy) { if (view.page) view.panBy(dx, dy); },
    zoom(f, x = view.w / 2, y = view.h / 2) { if (view.page && f > 0) view.zoomAt(f, x, y); },
    fit() { if (view.page) view.fit('page'); },
  });

  return { longPress };
}

/* SPDX-License-Identifier: Apache-2.0 */
/**
 * paint-ui.js: markupcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPaint(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { displayOf, boundsOf, grips } from './geom.js';
import { shapes } from './shapes.js';
import { SCREEN_FONT } from './font.js';
import { mix } from './view.js';

export function mountPaint(mc) {
  const { ST, store, view, cmp, curSheet, curKey, envOf, pageMarkups, styleFor, found, paintLineUp, newMarkup } = mc;

  // ---- painting ----
  view.onBase = (ctx) => {
    for (const m of pageMarkups()) {
      if (m.type === 'foreign' || !store.isShared(m)) continue;
      if (view.hidden?.has(m.id)) continue;
      view.paint(ctx, displayOf(m, envOf(m)).list);
    }
    if (view.page) ST.formUi?.paint(ctx, view.page, view.S);   // form buttons with no appearance of their own (0.8)
  };
  // 0.9 NOTES.1: notes also reach off the sheet, so they are drawn after the sheet's clip
  view.onBoard = (ctx) => {
    for (const m of pageMarkups()) {
      if (m.type === 'foreign' || store.isShared(m) || view.hidden?.has(m.id)) continue;
      view.paint(ctx, displayOf(m, envOf(m)).list);
    }
  };

  view.onOver = (ctx) => {
    const key = curKey();
    const line = (pts, color, w = 1, dash = null) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
      ctx.beginPath(); pts.forEach((p, i) => { const [x, y] = view.toScreen(p); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    };
    const boxOf = (b, color, dash) => {
      if (!b) return;
      const a = view.toScreen([b[0], b[1]]), c = view.toScreen([b[2], b[3]]);
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.setLineDash(dash || []);
      ctx.strokeRect(Math.round(Math.min(a[0], c[0]) - 3) + 0.5, Math.round(Math.min(a[1], c[1]) - 3) + 0.5, Math.round(Math.abs(c[0] - a[0]) + 6), Math.round(Math.abs(c[1] - a[1]) + 6));
      ctx.restore();
    };
    // live drag previews
    if (ST.drag?.live) for (const m of ST.drag.live) view.paint(ctx, shapes(m, envOf(m)));
    if (ST.editing) boxOf(ST.editing.m.rect || boundsOf(ST.editing.m, envOf(ST.editing.m)), view.colors.action, [4, 3]);
    ST.fieldUi?.paint(ctx);   // field record pins (0.7 LC.7)
    ST.notesUi?.paintTags(ctx);   // 0.9 NOTES.1
    // sheet links (K9): a small arrow at the top right of each linked markup (screen only)
    for (const m of pageMarkups()) {
      if (!m.link) continue;
      const b = boundsOf(m, envOf(m));
      if (!b) continue;
      const [x, y] = view.toScreen([b[2], b[3]]);
      ctx.save(); ctx.fillStyle = view.colors.action; ctx.font = '600 11px ' + SCREEN_FONT; ctx.fillText('\u2197', x + 2, y + 2); ctx.restore();   // i18n-ignore (an arrow)
    }
    // compare by lines (K12): removed in red, added in blue, over the new sheet
    if (cmp.on && cmp.mode === 'lines' && cmp.vec && key === cmp.newKey) {
      for (const [list, color] of [[cmp.vec.removed, view.colors.red], [cmp.vec.added, view.colors.blue]]) {
        ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.beginPath();
        for (const q of list) { const [x1, y1] = view.toScreen([q[0], q[1]]), [x2, y2] = view.toScreen([q[2], q[3]]); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); }
        ctx.stroke(); ctx.restore();
      }
    }
    // text found by Find (K14): every hit on this sheet, the chosen one stronger
    if (found.hits.length) {
      ctx.save();
      found.hits.forEach((h, i) => {
        if (h.key !== key) return;
        const a = view.toScreen([h.rect[0], h.rect[1]]), c = view.toScreen([h.rect[2], h.rect[3]]);
        ctx.fillStyle = i === found.at ? 'rgba(255, 170, 0, 0.45)' : 'rgba(255, 200, 0, 0.28)';
        ctx.fillRect(Math.min(a[0], c[0]) - 2, Math.min(a[1], c[1]) - 2, Math.abs(c[0] - a[0]) + 4, Math.abs(c[1] - a[1]) + 4);
      });
      ctx.restore();
    }
    // hover
    if (ST.hoverId && !ST.sel.has(ST.hoverId) && !ST.drag) {
      const m = store.get(ST.hoverId);
      if (m && m.sheet === key) boxOf(boundsOf(m, envOf(m)), mix(view.colors.action, view.colors.sheet, 0.4), [2, 3]);
    }
    // selection
    for (const id of ST.sel) {
      const m0 = store.get(id);
      if (!m0 || m0.sheet !== key) continue;
      const m = ST.drag?.live?.find((x) => x.id === id) || m0;
      boxOf(boundsOf(m, envOf(m)), m.locked ? view.colors.ink2 : view.colors.action, m.locked ? [3, 3] : [5, 3]);
      if (ST.sel.size === 1 && !m.locked) {
        for (const g of grips(m)) {
          const [x, y] = view.toScreen([g.x, g.y]);
          ctx.save();
          ctx.fillStyle = view.colors.sheet; ctx.strokeStyle = view.colors.action; ctx.lineWidth = 1.5;
          ctx.beginPath();
          const gs = ST.touchMode ? 1.7 : 1;   // bigger grips for a finger
          if (g.kind === 'box') ctx.rect(Math.round(x) - 4.5 * gs, Math.round(y) - 4.5 * gs, 9 * gs, 9 * gs);
          else if (g.kind === 'vertex') ctx.arc(x, y, 4.5 * gs, 0, Math.PI * 2);
          else { const d = 6 * gs; ctx.moveTo(x, y - d); ctx.lineTo(x + d, y); ctx.lineTo(x, y + d); ctx.lineTo(x - d, y); ctx.closePath(); }
          ctx.fill(); ctx.stroke(); ctx.restore();
        }
      }
    }
    if (ST.tool === 'content') mc.baseUi.paintOver(ctx);
    if (ST.tool === 'seltext') ST.textSel?.paintOver(ctx);
    if (ST.tool === 'areacopy') ST.areaUi?.paintOver(ctx);
    if (ST.lineUp) paintLineUp(ctx);
    // drawing previews
    const s = curSheet();
    if (!s) return;
    const preview = (m) => view.paint(ctx, shapes(m, envOf(m)), { alpha: 0.85 });
    if (ST.drag?.kind === 'free') preview(newMarkup(ST.tool, { pts: ST.drag.pts.length > 1 ? ST.drag.pts : [ST.drag.pts[0], ST.drag.pts[0]] }));
    if (ST.drag?.kind === 'box' && ST.drag.b !== ST.drag.a) {
      if (ST.tool === 'text') boxOf([Math.min(ST.drag.a[0], ST.drag.b[0]), Math.min(ST.drag.a[1], ST.drag.b[1]), Math.max(ST.drag.a[0], ST.drag.b[0]), Math.max(ST.drag.a[1], ST.drag.b[1])], view.colors.action, [4, 3]);
      else preview(newMarkup(ST.tool, { rect: [ST.drag.a[0], ST.drag.a[1], ST.drag.b[0], ST.drag.b[1]] }));
    }
    const two = ST.drag?.kind === 'two' ? ST.drag : ST.pending?.kind === 'two' ? ST.pending : null;
    if (two && two.b) {
      if (ST.tool === 'calibrate') {
        line([two.a, two.b], view.colors.action, 2);
        for (const p of [two.a, two.b]) { const [x, y] = view.toScreen(p); ctx.save(); ctx.strokeStyle = view.colors.action; ctx.beginPath(); ctx.arc(x, y, 5, 0, 7); ctx.stroke(); ctx.restore(); }
      } else preview(newMarkup(ST.tool, { pts: [two.a, two.b] }));
    }
    if (ST.pending?.kind === 'three') preview(newMarkup(ST.tool, { pts: ST.pending.pts.slice() }));
    if (ST.pending?.kind === 'arcm' && ST.pending.at) {
      const pv = ST.pending.arc.preview(ST.pending.at);
      if (pv.pts) preview(newMarkup('arc', { pts: pv.pts }));
      else if (pv.guide) line(pv.guide, view.colors.action, 1.5, [4, 3]);
    }
    if (ST.pending?.kind === 'poly') {
      const pts = ST.pending.pts;
      if (ST.tool === 'polyline' || pts.length < 3) preview(newMarkup('polyline', { pts, style: styleFor(ST.tool) }));
      else preview(newMarkup(ST.tool, { pts }));
    }
    if (ST.drag?.kind === 'callout') {
      line([ST.drag.tip, ST.drag.b], styleFor('callout').color, 1.5, [5, 3]);
    }
    if (ST.drag?.kind === 'window' && ST.drag.moved) {
      const [ax, ay] = ST.drag.a, [bx, by] = ST.drag.b;
      const crossing = bx < ax;
      ctx.save();
      ctx.fillStyle = mix(crossing ? view.colors.green : view.colors.action, view.colors.sheet, 0.85);
      ctx.globalAlpha = 0.35;
      ctx.fillRect(Math.min(ax, bx), Math.min(ay, by), Math.abs(bx - ax), Math.abs(by - ay));
      ctx.globalAlpha = 1;
      ctx.strokeStyle = crossing ? view.colors.green : view.colors.action;
      ctx.setLineDash(crossing ? [5, 3] : []);
      ctx.strokeRect(Math.min(ax, bx) + 0.5, Math.min(ay, by) + 0.5, Math.abs(bx - ax), Math.abs(by - ay));
      ctx.restore();
    }
    if (cmp.aligning) {
      for (const [i, p] of cmp.aligning.pts.entries()) {
        const [x, y] = view.toScreen(p.screenUser);
        ctx.save(); ctx.strokeStyle = i < 2 ? view.colors.red : view.colors.blue; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x - 8, y); ctx.lineTo(x + 8, y); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8); ctx.stroke(); ctx.restore();
      }
    }
  };
  view.hidden = null;
}

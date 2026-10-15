/* SPDX-License-Identifier: Apache-2.0 */
/**
 * panes.js — split screen (0.4 part 2, Q.1–Q.6). The geometry is DOM-free (bin/test-cadcraft.mjs checks it); the
 * dividers you drag are the one DOM part (`createDividers`, browser only). Import-free.
 * Canonical: cadcraft/dev/panes.js (session cad-draw owns it). Byte-identical copies in bimcraft and markupcraft dev for
 * their own split screens (Q.6) — never edit a copy (bin/test-cadcraft.mjs checks them), ask cad-draw.
 *
 * The drawing area splits into panes, like AutoCAD's tiled viewports (VPORTS in the model). Each pane keeps its own
 * view (centre, zoom) and its own space (the model or a sheet, Q.4); view.js draws every pane from the same cached
 * paths and the active pane gets the crosshair. A pane may also show another open drawing (Q.3, cadcraft.js).
 *
 *   LAYOUTS                            'single' | '2v' (side by side) | '2h' (stacked) | '3r' (two stacked on the left, one
 *                                      on the right) | '3l' (one on the left, two stacked on the right) | '4'
 *   paneCount(layout)                  how many panes a layout has
 *   paneRects(layout, fx, fy, W, H)    → [{ x, y, w, h }] in CSS px, a GAP between panes; fx / fy = where the vertical /
 *                                      horizontal divider sits (0–1 of the width / height)
 *   dividers(layout, fx, fy, W, H)     → [{ key: 'fx' | 'fy', dir: 'v' | 'h', x, y, len }] (what can be dragged)
 *   clampSplit(f)                      keeps a divider at least 10 % from either edge
 *   paneAt(rects, x, y)                → the index of the pane holding a point, or -1
 *   vportCorners(layout, fx, fy)       → [{ x0, y0, x1, y1 }] each pane as AutoCAD's VPORT table writes it: fractions of the
 *                                      drawing area, y up from the bottom (DXF 10/20 lower left, 11/21 upper right)
 *   layoutFromCorners(list)            → { layout, fx, fy, order } back from those (order[i] = which record is pane i), or null
 *   cleanPanes(v)                      a file's / the clipboard's pane setup made safe: { layout, fx, fy, active, list:
 *                                      [{ cx, cy, h, tw?, sheet? }] } or null (h = the view height in drawing units, tw = its
 *                                      turn in radians)
 */

export const LAYOUTS = ['single', '2v', '2h', '3r', '3l', '4'];
export const GAP = 4;

export function paneCount(layout) { return { single: 1, '2v': 2, '2h': 2, '3r': 3, '3l': 3, '4': 4 }[layout] || 1; }
export const clampSplit = (f) => (Number.isFinite(f) ? Math.max(0.1, Math.min(0.9, f)) : 0.5);

export function paneRects(layout, fx, fy, W, H) {
  fx = clampSplit(fx); fy = clampSplit(fy);
  const g = GAP / 2, X = Math.round(W * fx), Y = Math.round(H * fy);
  const R = (x, y, w, h) => ({ x, y, w: Math.max(1, w), h: Math.max(1, h) });
  switch (layout) {
    case '2v': return [R(0, 0, X - g, H), R(X + g, 0, W - X - g, H)];
    case '2h': return [R(0, 0, W, Y - g), R(0, Y + g, W, H - Y - g)];
    case '3r': return [R(0, 0, X - g, Y - g), R(0, Y + g, X - g, H - Y - g), R(X + g, 0, W - X - g, H)];
    case '3l': return [R(0, 0, X - g, H), R(X + g, 0, W - X - g, Y - g), R(X + g, Y + g, W - X - g, H - Y - g)];
    case '4': return [R(0, 0, X - g, Y - g), R(X + g, 0, W - X - g, Y - g), R(0, Y + g, X - g, H - Y - g), R(X + g, Y + g, W - X - g, H - Y - g)];
    default: return [R(0, 0, W, H)];
  }
}

export function dividers(layout, fx, fy, W, H) {
  fx = clampSplit(fx); fy = clampSplit(fy);
  const X = Math.round(W * fx), Y = Math.round(H * fy);
  switch (layout) {
    case '2v': return [{ key: 'fx', dir: 'v', x: X, y: 0, len: H }];
    case '2h': return [{ key: 'fy', dir: 'h', x: 0, y: Y, len: W }];
    case '3r': return [{ key: 'fx', dir: 'v', x: X, y: 0, len: H }, { key: 'fy', dir: 'h', x: 0, y: Y, len: X }];
    case '3l': return [{ key: 'fx', dir: 'v', x: X, y: 0, len: H }, { key: 'fy', dir: 'h', x: X, y: Y, len: W - X }];
    case '4': return [{ key: 'fx', dir: 'v', x: X, y: 0, len: H }, { key: 'fy', dir: 'h', x: 0, y: Y, len: W }];
    default: return [];
  }
}

export function paneAt(rects, x, y) {
  return rects.findIndex((r) => x >= r.x && x < r.x + r.w && y >= r.y && y < r.y + r.h);
}

/** The panes as VPORT records' corners (0–1, y up), in pane order. */
export function vportCorners(layout, fx, fy) {
  return cornersOf(layout, clampSplit(fx), clampSplit(fy));
}
function cornersOf(layout, X, Y) {
  const yu = 1 - Y;   // the horizontal divider, measured from the bottom
  const C = (x0, y0, x1, y1) => ({ x0, y0, x1, y1 });
  switch (layout) {
    case '2v': return [C(0, 0, X, 1), C(X, 0, 1, 1)];
    case '2h': return [C(0, yu, 1, 1), C(0, 0, 1, yu)];
    case '3r': return [C(0, yu, X, 1), C(0, 0, X, yu), C(X, 0, 1, 1)];
    case '3l': return [C(0, 0, X, 1), C(X, yu, 1, 1), C(X, 0, 1, yu)];
    case '4': return [C(0, yu, X, 1), C(X, yu, 1, 1), C(0, 0, X, yu), C(X, 0, 1, yu)];
    default: return [C(0, 0, 1, 1)];
  }
}

/** A file's VPORT records (corners as above, any order) → the layout they match; anything else → null (one pane). */
export function layoutFromCorners(list) {
  const rs = (Array.isArray(list) ? list : []).filter((r) => r && [r.x0, r.y0, r.x1, r.y1].every(Number.isFinite) && r.x1 > r.x0 && r.y1 > r.y0);
  if (rs.length < 2 || rs.length > 4) return null;
  const xs = [...new Set(rs.flatMap((r) => [r.x0, r.x1]).map((v) => Math.round(v * 1e4) / 1e4))].filter((v) => v > 0.001 && v < 0.999);
  const ys = [...new Set(rs.flatMap((r) => [r.y0, r.y1]).map((v) => Math.round(v * 1e4) / 1e4))].filter((v) => v > 0.001 && v < 0.999);
  const X = xs.length ? xs[0] : 0.5, Y = ys.length ? 1 - ys[0] : 0.5;
  for (const layout of LAYOUTS) {
    if (paneCount(layout) !== rs.length) continue;
    const want = cornersOf(layout, X, Y);
    const order = want.map((w) => rs.findIndex((r) => Math.abs(r.x0 - w.x0) < 0.01 && Math.abs(r.y0 - w.y0) < 0.01 && Math.abs(r.x1 - w.x1) < 0.01 && Math.abs(r.y1 - w.y1) < 0.01));
    if (order.every((i) => i >= 0) && new Set(order).size === order.length) return { layout, fx: clampSplit(X), fy: clampSplit(Y), order };
  }
  return null;
}

/** A pane setup from a file or storage (untrusted): numbers checked, sizes limited. */
export function cleanPanes(v) {
  if (!v || typeof v !== 'object' || !LAYOUTS.includes(v.layout) || v.layout === 'single') return null;
  const n = paneCount(v.layout);
  const list = (Array.isArray(v.list) ? v.list : []).slice(0, n).map((p) => {
    const ok = p && [p.cx, p.cy, p.h].every(Number.isFinite) && p.h > 0 && Math.abs(p.cx) < 1e15 && Math.abs(p.cy) < 1e15 && p.h < 1e15;
    const tw = Number.isFinite(p?.tw) && Math.abs(p.tw) <= 100 ? p.tw : 0;   // the pane's view turn, radians (CadCraft 0.5 DR.8; the VPORT table's twist)
    return ok ? { cx: p.cx, cy: p.cy, h: p.h, ...(tw ? { tw } : {}), ...(typeof p.sheet === 'string' && p.sheet ? { sheet: p.sheet.slice(0, 255) } : {}) } : null;
  });
  while (list.length < n) list.push(null);
  const active = Number.isInteger(v.active) && v.active >= 0 && v.active < n ? v.active : 0;
  return { layout: v.layout, fx: clampSplit(v.fx), fy: clampSplit(v.fy), active, list };
}

/**
 * The dividers over the drawing (browser; `box` = the element holding the canvases): a thin handle per divider, dragged with the pointer or moved with the arrow
 * keys (role=separator). `get()` → { layout, fx, fy, W, H } or null; `set(key, f)` moves one; `label(key)` its name.
 */
export function createDividers(box, { get, set, label }) {
  const layer = document.createElement('div');
  layer.className = 'cc-dividers';
  box.appendChild(layer);
  let els = [];
  function render() {
    const s = get();
    const list = s ? dividers(s.layout, s.fx, s.fy, s.W, s.H) : [];
    while (els.length > list.length) els.pop().remove();
    while (els.length < list.length) {
      const d = document.createElement('div');
      d.className = 'cc-divider';
      d.tabIndex = 0;
      d.setAttribute('role', 'separator');
      d.addEventListener('pointerdown', (e) => {
        e.preventDefault(); e.stopPropagation();
        d.setPointerCapture(e.pointerId);
        const r = box.getBoundingClientRect();
        const move = (ev) => {
          const k = d.dataset.key;
          set(k, k === 'fx' ? (ev.clientX - r.left) / r.width : (ev.clientY - r.top) / r.height);
        };
        const up = () => { d.removeEventListener('pointermove', move); d.removeEventListener('pointerup', up); d.removeEventListener('pointercancel', up); };
        d.addEventListener('pointermove', move); d.addEventListener('pointerup', up); d.addEventListener('pointercancel', up);
      });
      d.addEventListener('keydown', (e) => {
        const k = d.dataset.key, s0 = get();
        if (!s0) return;
        const step = e.shiftKey ? 0.1 : 0.02;
        const back = k === 'fx' ? 'ArrowLeft' : 'ArrowUp', fwd = k === 'fx' ? 'ArrowRight' : 'ArrowDown';
        if (e.key === back || e.key === fwd) { e.preventDefault(); e.stopPropagation(); set(k, s0[k] + (e.key === fwd ? step : -step)); }
        else if (e.key === 'Home') { e.preventDefault(); e.stopPropagation(); set(k, 0.5); }
      });
      d.addEventListener('dblclick', () => set(d.dataset.key, 0.5));
      layer.appendChild(d);
      els.push(d);
    }
    list.forEach((v, i) => {
      const d = els[i];
      d.dataset.key = v.key;
      d.dataset.dir = v.dir;
      d.setAttribute('aria-orientation', v.dir === 'v' ? 'vertical' : 'horizontal');
      d.setAttribute('aria-label', label(v.key));
      const s = get();
      d.setAttribute('aria-valuenow', String(Math.round((s[v.key] || 0.5) * 100)));
      d.style.cssText = v.dir === 'v'
        ? `left:${v.x - GAP}px;top:${v.y}px;width:${GAP * 2}px;height:${v.len}px`
        : `left:${v.x}px;top:${v.y - GAP}px;width:${v.len}px;height:${GAP * 2}px`;
    });
  }
  return { render };
}

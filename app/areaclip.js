/* SPDX-License-Identifier: Apache-2.0 */
/**
 * areaclip.js — a copied area of a sheet, as a picture that knows its size (0.8 D8.15). Import-free and DOM-free.
 * Canonical: markupcraft/dev/areaclip.js. Byte-identical copies in cadcraft, bimcraft and detailcraft dev (an app never
 * imports another app's folder; `node tools/areaclip/sync.mjs [--check]` copies and checks them — never edit a copy).
 *
 * MarkupCraft's Copy area tool renders part of a sheet (a rectangle, a circle or ellipse, or a freeform shape; outside a
 * circle or freeform is see-through) to a PNG. The PNG goes on the system clipboard, so it pastes into any program; the
 * clip below goes in localStorage "cadcraft.areaclip", which every app on the same site reads, so a paste in one of our
 * apps also knows how big the area is: on paper (`ptPerPx`, PDF points per pixel) and, when the sheet had a scale, in
 * the real world (`real.mmPerPx`). "Copy as overlay" makes the paper see-through and, optionally, gives the lines one
 * colour (`overlay.tint`) and a strength (`overlay.opacity`) that the paste starts at.
 *
 * A clip is { format: 'cadcraft-area-clip', v: 1, app, source, sheet, at, label, src (PNG data URL), px: [w, h],
 *   ptPerPx, real: { mmPerPx, unit } | null, overlay: { opacity, tint } | null, shape: 'rect' | 'ellipse' | 'free' }.
 * Read back it is untrusted: `cleanAreaClip` checks it field by field and the PNG's own header.
 *
 *   makeAreaClip(fields)                     → clip | null
 *   cleanAreaClip(jsonOrObject)              → clip | null
 *   sameImage(clip, w, h, at?, now?)         → is a picture of w × h pixels (from the system clipboard) this clip's?
 *   sizeMm(clip, { use: 'real' | 'paper' })  → [w, h] in mm (real: the drawing's own size, when the sheet had a scale)
 *   ellipsePoints(box, n) · shapeBox(pts)    → the outline of an ellipse in a box · the box round points
 *   overlayPixels(px, { paper, tint })       → RGBA in place: paper see-through, the ink in one colour when tint is set
 *   pixelsFor(wPt, hPt, dpi, maxPx)          → [w, h, dpi] the render size, lowered so neither side passes maxPx
 *   fitTwoPoints(a1, a2, b1, b2)             → { scale, angle (radians, anticlockwise in the points' frame), map(p) } | null
 *   turnedSize(w, h, angle)                  → [w, h] of the box round a w × h picture turned by angle
 */

export const AREA_FORMAT = 'cadcraft-area-clip';
export const AREA_KEY = 'cadcraft.areaclip';
export const AREA_MAX_BYTES = 3 * 1024 * 1024;   // the PNG (the same cap as a MarkupCraft picture markup)
export const AREA_MAX_PX = 8000;                 // either side
export const AREA_DPI = [72, 150, 300];          // the resolutions offered ('screen' is the view's own)
export const MM_PER_PT = 25.4 / 72;
export const TINTS = ['', '#d0312d', '#1e48c8', '#1b8a3a', '#c06a00', '#7a2fb5'];
const SHAPES = ['rect', 'ellipse', 'free'];
const UNITS = ['ft-in', 'ft', 'in', 'm', 'mm', 'cm'];
const HEX = /^#[0-9a-f]{6}$/i;
const PNG = /^data:image\/png;base64,([A-Za-z0-9+/]+={0,2})$/;
const str = (v, max) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max);
const pos = (v, hi = 1e9) => typeof v === 'number' && Number.isFinite(v) && v > 0 && v < hi;

function b64head(b64, n) {
  const s = b64.slice(0, Math.ceil(n / 3) * 4);
  if (typeof atob === 'function') { const t = atob(s); return Uint8Array.from(t, (c) => c.charCodeAt(0)); }
  return new Uint8Array(Buffer.from(s, 'base64'));   // Node (tests)
}
/** A PNG data URL's own size, read from its header; null when it is not a PNG we take. */
export function pngSize(src) {
  const m = PNG.exec(String(src || ''));
  if (!m || (m[1].length * 3) / 4 > AREA_MAX_BYTES) return null;
  let b;
  try { b = b64head(m[1], 24); } catch { return null; }
  if (b.length < 24 || b[0] !== 0x89 || b[1] !== 0x50 || b[2] !== 0x4e || b[3] !== 0x47) return null;
  const u32 = (o) => ((b[o] << 24) >>> 0) + (b[o + 1] << 16) + (b[o + 2] << 8) + b[o + 3];
  const w = u32(16), h = u32(20);
  return w > 0 && h > 0 && w <= AREA_MAX_PX && h <= AREA_MAX_PX ? [w, h] : null;
}

function cleanOverlay(o) {
  if (!o || typeof o !== 'object') return null;
  const opacity = typeof o.opacity === 'number' && Number.isFinite(o.opacity) ? Math.max(0.05, Math.min(1, o.opacity)) : 0.5;
  return { opacity, tint: HEX.test(o.tint) ? o.tint.toLowerCase() : '' };
}

/** A clip from what the Copy area tool made; null when the picture or the sizes are not usable. */
export function makeAreaClip({ app = 'markupcraft', source = '', sheet = '', label = '', src, ptPerPx, real = null, overlay = null, shape = 'rect', at = null } = {}) {
  return cleanAreaClip({ format: AREA_FORMAT, v: 1, app, source, sheet, label, src, ptPerPx, real, overlay, shape, at: at || new Date().toISOString() });
}

/** An untrusted clip (JSON text, or a parsed object from localStorage) → a clean clip, or null. */
export function cleanAreaClip(raw) {
  let d = raw;
  if (typeof raw === 'string') { if (raw.length > AREA_MAX_BYTES * 1.4 + 4096) return null; try { d = JSON.parse(raw); } catch { return null; } }
  if (!d || typeof d !== 'object' || d.format !== AREA_FORMAT || d.v !== 1) return null;
  const px = pngSize(d.src);
  if (!px || !pos(d.ptPerPx, 1000)) return null;
  const real = d.real && typeof d.real === 'object' && pos(d.real.mmPerPx, 1e7) ? { mmPerPx: d.real.mmPerPx, unit: UNITS.includes(d.real.unit) ? d.real.unit : 'mm' } : null;
  return {
    format: AREA_FORMAT, v: 1, app: str(d.app, 40), source: str(d.source, 80), sheet: str(d.sheet, 120), at: str(d.at, 40),
    label: str(d.label, 120), src: String(d.src), px, ptPerPx: d.ptPerPx, real, overlay: cleanOverlay(d.overlay),
    shape: SHAPES.includes(d.shape) ? d.shape : 'rect',
  };
}

/**
 * A picture pasted from the system clipboard is this clip when it has the clip's size and the clip is recent (browsers
 * re-encode a PNG on the clipboard, so the bytes can't be compared). `maxAgeMs` 0 = any age.
 */
export function sameImage(clip, w, h, { now = Date.now(), maxAgeMs = 6 * 3600 * 1000 } = {}) {
  if (!clip || clip.px[0] !== w || clip.px[1] !== h) return false;
  if (!maxAgeMs) return true;
  const t = Date.parse(clip.at);
  return Number.isFinite(t) && now - t >= -60000 && now - t <= maxAgeMs;
}

/** The area's size in mm: on paper, or the drawing's own size when the sheet had a scale ('real'; null without one). */
export function sizeMm(clip, { use = 'real' } = {}) {
  const k = use === 'real' ? clip?.real?.mmPerPx : clip ? clip.ptPerPx * MM_PER_PT : 0;
  return k ? [clip.px[0] * k, clip.px[1] * k] : null;
}

export function ellipsePoints([x0, y0, x1, y1], n = 96) {
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, rx = Math.abs(x1 - x0) / 2, ry = Math.abs(y1 - y0) / 2;
  const out = [];
  for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; out.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]); }
  return out;
}
export function shapeBox(pts) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of pts) { if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y; }
  return x1 >= x0 ? [x0, y0, x1, y1] : null;
}

/**
 * Overlay pixels (RGBA, in place): each pixel's alpha becomes how much darker than the paper it is (at or above `paper`
 * = gone), its colour pulled to full strength so lines keep their colour without a white fringe; with `tint` every
 * pixel that shows takes that colour (the overlay stands out from the drawing under it).
 */
export function overlayPixels(px, { paper = 235, tint = '' } = {}) {
  const ink = Math.max(1, paper - 40);
  const tc = HEX.test(tint) ? [1, 3, 5].map((i) => parseInt(tint.slice(i, i + 2), 16)) : null;
  for (let i = 0; i < px.length; i += 4) {
    const a0 = px[i + 3] / 255;
    const l = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
    const a = l >= paper ? 0 : l <= paper - ink ? 1 : (paper - l) / ink;
    if (tc) { px[i] = tc[0]; px[i + 1] = tc[1]; px[i + 2] = tc[2]; }
    else if (a > 0 && a < 1) for (let k = 0; k < 3; k++) px[i + k] = Math.max(0, Math.min(255, Math.round(255 - (255 - px[i + k]) / a)));
    px[i + 3] = Math.round(a * a0 * 255);
  }
  return px;
}

/** The picture's size for an area of wPt × hPt points at `dpi`, lowered (dpi too) so neither side passes maxPx. */
export function pixelsFor(wPt, hPt, dpi, maxPx = AREA_MAX_PX) {
  let d = Math.max(1, dpi);
  const big = Math.max(wPt, hPt) * d / 72;
  if (big > maxPx) d *= maxPx / big;
  return [Math.max(1, Math.round(wPt * d / 72)), Math.max(1, Math.round(hPt * d / 72)), d];
}

/**
 * Two points on the picture (a1, a2) and where they belong (b1, b2) → the scale and turn that carry one pair onto the
 * other, and `map` for any point. null when either pair is one point.
 */
export function fitTwoPoints(a1, a2, b1, b2) {
  const ax = a2[0] - a1[0], ay = a2[1] - a1[1], bx = b2[0] - b1[0], by = b2[1] - b1[1];
  const la = Math.hypot(ax, ay), lb = Math.hypot(bx, by);
  if (!(la > 1e-9) || !(lb > 1e-9)) return null;
  const scale = lb / la, angle = Math.atan2(by, bx) - Math.atan2(ay, ax);
  const c = Math.cos(angle) * scale, s = Math.sin(angle) * scale;
  const map = ([x, y]) => { const dx = x - a1[0], dy = y - a1[1]; return [b1[0] + c * dx - s * dy, b1[1] + s * dx + c * dy]; };
  return { scale, angle: Math.atan2(Math.sin(angle), Math.cos(angle)), map };
}

export function turnedSize(w, h, angle) {
  const c = Math.abs(Math.cos(angle)), s = Math.abs(Math.sin(angle));
  return [w * c + h * s, w * s + h * c];
}

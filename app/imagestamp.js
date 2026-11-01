/* SPDX-License-Identifier: Apache-2.0 */
/**
 * imagestamp.js — image stamps and signatures (0.4 K5). No DOM.
 *
 * An image markup is type 'image': `rect` (where it sits, PDF user space) + `img` (a data: URL, PNG or JPEG) + `label`
 * (what the image is, e.g. "Signature" — shown in lists, written as the annotation's text). The page makes the data URL
 * (a picked file scaled down, or a signature drawn in a dialog) and passes it through cleanImage(), which checks it like
 * file data: only PNG and JPEG, base64, the magic bytes right, and at most MAX_IMAGE_BYTES.
 *
 *   cleanImage(src)              → the data URL, or '' when it is not an acceptable image
 *   imageInfo(src)               → { mime, bytes: Uint8Array, width, height } (size read from the PNG/JPEG header) or null
 *   fitBox(w, h, maxW, maxH)     → [w', h'] scaled to fit, keeping the proportions
 *   placeRect(center, w, h, rot) → the markup's rect for an image of w × h points centred there, turned with the page
 *
 * Pictures from a file (0.7.1 71.7, 71.8): `pictureKind(name, type)` says what a picked or dropped file is (png, jpeg, svg,
 * pdf or null); the page turns SVG and a PDF page into a PNG. A signature photographed or scanned on white paper:
 *   clearPaper(rgba, {paper})    → the same pixels with the paper made see-through (alpha by darkness), in place
 *   inkBox(rgba, w, h)           → [x0, y0, x1, y1] round what is not see-through, or null
 *   cleanSignatures(list)        → the saved signatures [{id, src, name, at}] that are usable (untrusted localStorage)
 */

export const MAX_IMAGE_BYTES = 3 * 1024 * 1024;
const RE = /^data:(image\/(?:png|jpeg));base64,([A-Za-z0-9+/]+={0,2})$/;

function b64bytes(b64) {
  if (typeof atob === 'function') { const s = atob(b64); const out = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i); return out; }
  return new Uint8Array(Buffer.from(b64, 'base64'));   // Node (tests)
}

export function imageInfo(src) {
  const m = RE.exec(String(src || ''));
  if (!m || (m[2].length * 3) / 4 > MAX_IMAGE_BYTES) return null;
  let bytes;
  try { bytes = b64bytes(m[2]); } catch { return null; }
  if (m[1] === 'image/png') {
    if (bytes.length < 24 || bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) return null;
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    return { mime: m[1], bytes, width: dv.getUint32(16), height: dv.getUint32(20) };
  }
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  // JPEG: walk the segments to the frame header (SOF0–SOF15 but not DHT/JPG/DAC)
  let p = 2;
  while (p + 9 < bytes.length) {
    if (bytes[p] !== 0xff) { p++; continue; }
    const mk = bytes[p + 1];
    if (mk >= 0xc0 && mk <= 0xcf && mk !== 0xc4 && mk !== 0xc8 && mk !== 0xcc) {
      return { mime: m[1], bytes, height: (bytes[p + 5] << 8) | bytes[p + 6], width: (bytes[p + 7] << 8) | bytes[p + 8] };
    }
    p += 2 + ((bytes[p + 2] << 8) | bytes[p + 3]);
  }
  return null;
}

export function cleanImage(src) {
  const info = imageInfo(src);
  return info && info.width > 0 && info.height > 0 && info.width <= 8000 && info.height <= 8000 ? String(src) : '';
}

export function fitBox(w, h, maxW, maxH) {
  const k = Math.min(maxW / w, maxH / h, 1e9);
  return [w * k, h * k];
}

export function placeRect(c, w, h, rot = 0) {
  const [dx, dy] = rot % 180 ? [h, w] : [w, h];
  return [c[0] - dx / 2, c[1] - dy / 2, c[0] + dx / 2, c[1] + dy / 2];
}

/** What a file is, by its type or name: 'png' | 'jpeg' | 'svg' | 'pdf' | null. */
export function pictureKind(name = '', type = '') {
  const n = String(name).toLowerCase(), ty = String(type).toLowerCase();
  if (ty === 'image/png' || n.endsWith('.png')) return 'png';
  if (ty === 'image/jpeg' || /\.jpe?g$/.test(n)) return 'jpeg';
  if (ty === 'image/svg+xml' || n.endsWith('.svg')) return 'svg';
  if (ty === 'application/pdf' || n.endsWith('.pdf')) return 'pdf';
  return null;
}

/**
 * Paper → see-through: each pixel's alpha becomes how much darker than the paper it is (lightness at or above `paper`
 * = gone, black = solid), and its colour is pulled to full strength, so a pen line keeps its colour without a white fringe.
 */
export function clearPaper(px, { paper = 235 } = {}) {
  const ink = Math.max(1, paper - 40);
  for (let i = 0; i < px.length; i += 4) {
    const a0 = px[i + 3] / 255;
    const l = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
    const a = l >= paper ? 0 : l <= paper - ink ? 1 : (paper - l) / ink;
    if (a > 0 && a < 1) for (let k = 0; k < 3; k++) px[i + k] = Math.max(0, Math.min(255, Math.round(255 - (255 - px[i + k]) / a)));
    px[i + 3] = Math.round(a * a0 * 255);
  }
  return px;
}

/** The box round every pixel that shows (alpha > 24), or null when nothing does. */
export function inkBox(px, w, h) {
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (px[(y * w + x) * 4 + 3] <= 24) continue;
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
  }
  return x1 < 0 ? null : [x0, y0, x1 + 1, y1 + 1];
}

export const MAX_SIGNATURES = 8;
/** Saved signatures read back from the browser (untrusted): checked pictures, short names, at most MAX_SIGNATURES. */
export function cleanSignatures(list) {
  const out = [];
  for (const s of Array.isArray(list) ? list : []) {
    if (!s || typeof s !== 'object' || !cleanImage(s.src) || out.length >= MAX_SIGNATURES) continue;
    const id = typeof s.id === 'string' && /^[a-z0-9-]{1,40}$/i.test(s.id) ? s.id : 'sig-' + out.length;
    if (out.some((x) => x.id === id)) continue;
    out.push({ id, src: s.src, name: String(s.name ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 60), at: typeof s.at === 'string' ? s.at.slice(0, 40) : '' });
  }
  return out;
}

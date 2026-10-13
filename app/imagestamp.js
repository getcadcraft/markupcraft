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

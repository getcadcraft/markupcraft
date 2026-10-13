/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch.js — sketch to scale (0.4 K18): while a line, arrow, length, polyline, polygon, cloud, area or space is being
 * drawn on a calibrated sheet, the next point can be typed as a real length and an angle. No DOM.
 *
 *   sketchPoint(from, toward, text, cal, rot) → { pt } | { error: language key }
 *     text   "12'6"", "3.5 m", "12'6" < 45", "12'6"@90" — a length in the sheet's unit (a bare number means that unit),
 *            optionally "<" or "@" and an angle in degrees, counterclockwise from "right" as the sheet is seen
 *     from   the last fixed point (PDF user space); toward: where the pointer is (the direction when no angle is typed)
 *     cal    the sheet's calibration { mmPerPt, unit }; rot: the page's turn (0/90/180/270), so angles read as seen
 */

import { parseLength } from './units.js';

export function sketchPoint(from, toward, text, cal, rot = 0) {
  if (!cal || !(cal.mmPerPt > 0)) return { error: 'sketch.err.scale' };
  const [lenText, angText] = String(text || '').split(/[<@]/);
  const mm = parseLength(lenText, cal.unit);
  if (!(mm > 0)) return { error: 'sketch.err.length' };
  const len = mm / cal.mmPerPt;
  let dx, dy;
  if (angText !== undefined && angText.trim() !== '') {
    const deg = Number(angText.trim().replace(/°$/, ''));
    if (!Number.isFinite(deg)) return { error: 'sketch.err.angle' };
    // as seen: right = 0°, up = 90°; turn back into user space by the page's rotation
    const a = ((deg + (rot || 0)) * Math.PI) / 180;   // a page turned 90° clockwise shows user +x pointing down (seen −90°)
    dx = Math.cos(a); dy = Math.sin(a);
  } else {
    const vx = toward[0] - from[0], vy = toward[1] - from[1];
    const d = Math.hypot(vx, vy);
    if (d < 1e-9) return { error: 'sketch.err.direction' };
    dx = vx / d; dy = vy / d;
  }
  return { pt: [from[0] + dx * len, from[1] + dy * len] };
}

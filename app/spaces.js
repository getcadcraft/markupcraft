/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spaces.js — Spaces (0.4 K17): named zones on a sheet (a room, a wing, an area of work). No DOM.
 * A space is a markup of type 'space' (a closed outline, `label` = its name). Every other markup on the same sheet is
 * "in" the space that holds the middle of its bounds; when spaces nest, the smallest one wins. Nothing is stored on the
 * markups: the Space column is worked out when it is shown, filtered or exported, so moving a markup moves it between
 * spaces.
 *
 *   spaceAt(p, spaces)             → the smallest space whose outline holds point p, or null
 *   spaceOf(m, spacesOnSheet, boundsOf) → its name ('' when none); spaces themselves are in no space
 */

import { inRing, ringArea } from './holes.js';

export function spaceAt(p, spaces) {
  let best = null, area = Infinity;
  for (const s of spaces) {
    if (!s.pts || s.pts.length < 3 || !inRing(p, s.pts)) continue;
    const a = ringArea(s.pts);
    if (a < area) { best = s; area = a; }
  }
  return best;
}

export function spaceOf(m, spacesOnSheet, boundsOf) {
  if (m.type === 'space' || !spacesOnSheet.length) return '';
  const b = boundsOf(m);
  if (!b) return '';
  const s = spaceAt([(b[0] + b[2]) / 2, (b[1] + b[3]) / 2], spacesOnSheet);
  return s ? s.label || '' : '';
}

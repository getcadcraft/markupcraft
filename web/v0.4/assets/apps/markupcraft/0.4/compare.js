/* SPDX-License-Identifier: Apache-2.0 */
/**
 * compare.js — sheet compare: mix two renderings of the same view into one picture. No DOM.
 *
 * Both sheets are rendered black-on-white at the same size (the old one moved by the alignment
 * transform). Per pixel, ink darkness (0–1) of each decides the color: ink on both = unchanged
 * (neutral), only on the old sheet = removed (old color), only on the new = added (new color).
 * `balance` 0…1 fades between old only (0), both (0.5) and new only (1).
 */

/**
 * a, b: RGBA bytes of the old and new renderings; out: RGBA bytes written.
 * colors: { bg, same, old, new } as [r,g,b] 0–255.
 * Returns { changedOld, changedNew, same } pixel counts (darkness > 0.35) for a quick summary.
 */
export function combine(a, b, out, colors, balance = 0.5) {
  const wa = Math.min(1, 2 * (1 - balance)), wb = Math.min(1, 2 * balance);
  const [br, bg, bb] = colors.bg, [sr, sg, sb] = colors.same, [or, og, ob] = colors.old, [nr, ng, nb] = colors.new;
  let changedOld = 0, changedNew = 0, same = 0;
  for (let i = 0; i < out.length; i += 4) {
    const da = (1 - (a[i] * 0.299 + a[i + 1] * 0.587 + a[i + 2] * 0.114) / 255) * (a[i + 3] / 255);
    const db = (1 - (b[i] * 0.299 + b[i + 1] * 0.587 + b[i + 2] * 0.114) / 255) * (b[i + 3] / 255);
    const A = da * wa, B = db * wb;
    const common = Math.min(A, B);
    // a little dead band so anti-aliased edges of unchanged lines do not light up
    const onlyA = Math.max(0, A - common - 0.06) / 0.94, onlyB = Math.max(0, B - common - 0.06) / 0.94;
    let r = br, g = bg, bl = bb;
    r += (sr - r) * common; g += (sg - g) * common; bl += (sb - bl) * common;
    r += (or - r) * onlyA; g += (og - g) * onlyA; bl += (ob - bl) * onlyA;
    r += (nr - r) * onlyB; g += (ng - g) * onlyB; bl += (nb - bl) * onlyB;
    out[i] = r; out[i + 1] = g; out[i + 2] = bl; out[i + 3] = 255;
    if (onlyA > 0.35) changedOld++;
    else if (onlyB > 0.35) changedNew++;
    else if (common > 0.35) same++;
  }
  return { changedOld, changedNew, same };
}

/** The alignment transform from a nudge offset and an optional two-point fit: old user space → new. */
export function alignment(state) {
  const base = state.fit || [1, 0, 0, 1, 0, 0];
  return [base[0], base[1], base[2], base[3], base[4] + (state.dx || 0), base[5] + (state.dy || 0)];
}

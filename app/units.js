/* SPDX-License-Identifier: Apache-2.0 */
/**
 * units.js — real-world lengths for the measure tool. A sheet's calibration is
 * `{ mmPerPt, unit, label }`: real millimeters per PDF point (PDF user space is 72 pt per inch) and
 * the unit lengths are shown in. Parsing takes what people type on a drawing: 24'-0", 12' 6 1/2",
 * 6", 1/2", 12.5', 12.5 ft, 3 ft 6 in, 3.5 m, 90 cm, 900 mm, or a bare number in the chosen unit.
 * No DOM.
 */

import { t } from './i18n.js';
import { calc, hasArithmetic } from './lencalc.js';

export const MM_PER_IN = 25.4;
export const MM_PER_PT = MM_PER_IN / 72;

/** [unit, its name in the page's language] — the name is read through a getter (lang key unit.<unit>), so it is
 *  looked up when shown, after the page's catalog is in place. */
const named = (id, key) => { const e = [id]; Object.defineProperty(e, 1, { get: () => t(key), enumerable: true }); return e; };
export const UNITS = ['ft-in', 'ft', 'in', 'm', 'mm'].map((u) => named(u, 'unit.' + u));
const UNIT_MM = { 'ft-in': 304.8, ft: 304.8, in: 25.4, m: 1000, mm: 1, cm: 10 };

/** Scale presets: [label, real length per paper length]. They assume the PDF prints at full size. */
export const SCALE_PRESETS = [
  [null, [
    ['1/32" = 1\'-0"', 384], ['1/16" = 1\'-0"', 192], ['3/32" = 1\'-0"', 128], ['1/8" = 1\'-0"', 96], ['3/16" = 1\'-0"', 64],
    ['1/4" = 1\'-0"', 48], ['3/8" = 1\'-0"', 32], ['1/2" = 1\'-0"', 24], ['3/4" = 1\'-0"', 16], ['1" = 1\'-0"', 12],
    ['1 1/2" = 1\'-0"', 8], ['3" = 1\'-0"', 4],
  ], 'ft-in'],
  [null, [
    ['1" = 10\'', 120], ['1" = 20\'', 240], ['1" = 30\'', 360], ['1" = 40\'', 480], ['1" = 50\'', 600], ['1" = 60\'', 720], ['1" = 100\'', 1200],
  ], 'ft'],
  [null, [
    ['1:1', 1], ['1:5', 5], ['1:10', 10], ['1:20', 20], ['1:25', 25], ['1:50', 50], ['1:100', 100], ['1:200', 200], ['1:250', 250], ['1:500', 500], ['1:1000', 1000],
  ], 'mm'],
];
// group names (lang keys scale.group.*) read through a getter, like UNITS
['architectural', 'engineering', 'metric'].forEach((g, i) => Object.defineProperty(SCALE_PRESETS[i], 0, { get: () => t('scale.group.' + g), enumerable: true }));

/** A preset ratio → calibration. Metric ratios above 1:100 read better in meters. */
export function presetCalibration(label, ratio, unit) {
  const u = unit === 'mm' && ratio >= 100 ? 'm' : unit;
  return { mmPerPt: MM_PER_PT * ratio, unit: u, label };
}

/** Two points picked on the sheet + the real distance typed → calibration (null if unusable). */
export function calibrationFrom(ptLength, realMm, unit) {
  if (!(ptLength > 0) || !(realMm > 0) || !UNIT_MM[unit]) return null;
  const mmPerPt = realMm / ptLength;
  return { mmPerPt, unit, label: 'Calibrated: ' + formatLength(realMm, unit) + ' over ' + (ptLength / 72).toFixed(2) + ' in' };
}

const FRACTION = /^(\d+)\s*\/\s*(\d+)$/;
function num(s) {
  s = s.trim();
  if (!s) return NaN;
  const f = s.match(FRACTION);
  if (f) return +f[2] ? +f[1] / +f[2] : NaN;
  const mixed = s.match(/^(\d+(?:\.\d+)?)\s+(\d+)\s*\/\s*(\d+)$/);
  if (mixed) return +mixed[3] ? +mixed[1] + +mixed[2] / +mixed[3] : NaN;
  return /^\d*\.?\d+$/.test(s) ? parseFloat(s) : NaN;
}

/**
 * Parse a typed length → millimeters (null when it is not a length). `unit` says what a bare
 * number means.
 */
export function parseLength(text, unit = 'ft-in') {
  return parseLengthCalc(text, unit).value;
}

/**
 * A typed length with arithmetic (0.6 DF.3: 4+7/16, 12'6" + 3/4", (24'-0")/3, 2*450mm) → {value (mm) | null, error, pos}.
 * lencalc.js is a byte-identical copy of CadCraft's (tools/lencalc/sync.mjs): its own parser, never eval. A bare number
 * stays a factor in 2*450mm and becomes `unit` when it is the length itself.
 */
export function parseLengthCalc(text, unit = 'ft-in') {
  const s = String(text ?? '').trim().toLowerCase().replace(/[’′]/g, "'").replace(/[”″]/g, '"').replace(/''/g, '"').replace(/[−–—]/g, '-');
  if (hasArithmetic(s)) {
    const r = calc(s, (x) => {
      const bare = /^[\d.,\s/-]+$/.test(x);
      const v = one(x, bare ? 'mm' : unit);
      return v === null ? null : { value: v, unit: !bare };
    }, { plain: UNIT_MM[unit] || 1 });
    if (r.ok && r.value > 0) return { value: r.value, error: null, pos: -1 };
    return { value: null, error: r.ok ? 'calc.err.not_positive' : 'calc.err.' + r.code, pos: r.ok ? -1 : r.pos, text: r.text || '' };
  }
  return { value: one(s, unit), error: null, pos: -1 };
}

function one(text, unit) {
  let s = String(text ?? '').trim().toLowerCase().replace(/[’′]/g, "'").replace(/[”″]/g, '"').replace(/''/g, '"').replace(/,/g, '.');
  if (!s) return null;
  // metric with a suffix
  let m = s.match(/^(\d*\.?\d+)\s*(mm|cm|m|meters?|metres?|millimeters?|millimetres?|centimeters?|centimetres?)$/);
  if (m) {
    const u = m[2].startsWith('mm') || m[2].startsWith('milli') ? 'mm' : m[2].startsWith('c') ? 'cm' : 'm';
    return pos(parseFloat(m[1]) * UNIT_MM[u]);
  }
  // feet and inches: 24'-0"  12' 6 1/2"  3 ft 6 in  12.5'  6"  1/2"
  s = s.replace(/\s*(feet|foot|ft)\b\.?/g, "'").replace(/\s*(inches|inch|in)\b\.?/g, '"');
  m = s.match(/^(?:(\d*\.?\d+)\s*')?\s*-?\s*(?:([\d\s./]+?)\s*")?$/);
  if (m && (m[1] !== undefined || m[2] !== undefined) && /['"]/.test(s)) {
    const ft = m[1] !== undefined ? parseFloat(m[1]) : 0;
    const inch = m[2] !== undefined ? num(m[2]) : 0;
    if (!Number.isFinite(ft) || !Number.isFinite(inch)) return null;
    return pos(ft * 304.8 + inch * 25.4);
  }
  // feet with inches but no inch mark: 12' 6
  m = s.match(/^(\d*\.?\d+)\s*'\s*-?\s*([\d\s./]+)$/);
  if (m) {
    const inch = num(m[2]);
    return Number.isFinite(inch) ? pos(parseFloat(m[1]) * 304.8 + inch * 25.4) : null;
  }
  const n = num(s);
  if (!Number.isFinite(n)) return null;
  return pos(n * (UNIT_MM[unit] || 1));
}
const pos = (v) => (Number.isFinite(v) && v > 0 ? v : null);

/** Millimeters → a display string in a unit. Feet and inches round to 1/16". */
export function formatLength(mm, unit = 'ft-in') {
  if (!Number.isFinite(mm)) return '';
  switch (unit) {
    case 'ft-in': {
      let sixteenths = Math.round((mm / 25.4) * 16);
      const neg = sixteenths < 0; sixteenths = Math.abs(sixteenths);
      const ft = Math.floor(sixteenths / 192);
      let rest = sixteenths - ft * 192;
      const inch = Math.floor(rest / 16);
      rest -= inch * 16;
      let frac = '';
      if (rest) { let n = rest, d = 16; while (n % 2 === 0) { n /= 2; d /= 2; } frac = ' ' + n + '/' + d; }
      return (neg ? '-' : '') + ft + "'-" + inch + frac + '"';
    }
    case 'ft': return (mm / 304.8).toFixed(2) + "'";
    case 'in': return trim(mm / 25.4, 2) + '"';
    case 'm': return t('len.m', { v: (mm / 1000).toFixed(3) });
    case 'mm': return t('len.mm', { v: Math.round(mm) });
    default: return t('len.mm', { v: trim(mm, 2) });
  }
}
const trim = (v, d) => String(Number(v.toFixed(d)));

/** A length in PDF points under a calibration → display string ('' with no calibration). */
export function measure(ptLength, cal) {
  if (!cal || !(cal.mmPerPt > 0)) return '';
  return formatLength(ptLength * cal.mmPerPt, cal.unit);
}

/** Square millimeters → a display string in the area unit that goes with a length unit. */
export function formatArea(mm2, unit = 'ft-in') {
  if (!Number.isFinite(mm2)) return '';
  switch (unit) {
    case 'ft-in': case 'ft': return t('area.sq_ft', { v: (mm2 / 92903.04).toFixed(2) });
    case 'in': return t('area.sq_in', { v: (mm2 / 645.16).toFixed(1) });
    case 'm': return t('area.sq_m', { v: (mm2 / 1e6).toFixed(3) });
    case 'mm': return t('area.sq_mm', { v: Math.round(mm2) });
    default: return t('area.sq_m', { v: (mm2 / 1e6).toFixed(3) });
  }
}

/** Area (absolute) and perimeter of a closed outline, in PDF points² / points. */
export function polygonAreaPerimeter(pts) {
  let a = 0, p = 0;
  for (let i = 0; i < pts.length; i++) {
    const q = pts[i], r = pts[(i + 1) % pts.length];
    a += q[0] * r[1] - r[0] * q[1];
    p += Math.hypot(r[0] - q[0], r[1] - q[1]);
  }
  return { area: Math.abs(a) / 2, perimeter: p };
}

/** An area markup's values under a calibration: { area, perimeter } strings ('' with no calibration); `holes` are cut-outs. */
export function measureArea(pts, cal, holes = []) {
  if (!cal || !(cal.mmPerPt > 0) || !pts || pts.length < 3) return { area: '', perimeter: '' };
  let { area, perimeter } = polygonAreaPerimeter(pts);
  // cut-outs (0.4 K8): their area comes off, their edges count in the perimeter
  for (const h of holes || []) { const c = polygonAreaPerimeter(h); area -= c.area; perimeter += c.perimeter; }
  area = Math.max(0, area);
  return { area: formatArea(area * cal.mmPerPt * cal.mmPerPt, cal.unit), perimeter: formatLength(perimeter * cal.mmPerPt, cal.unit) };
}

/** Is a calibration object well-formed? (used on data read from files and imports) */
export function validCalibration(c) {
  return !!c && typeof c === 'object' && Number.isFinite(c.mmPerPt) && c.mmPerPt > 0 && c.mmPerPt < 1e7 && !!UNIT_MM[c.unit];
}

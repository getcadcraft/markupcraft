/* SPDX-License-Identifier: Apache-2.0 */
/**
 * chest.js — the tool chest: styled markups saved as reusable tools. No DOM.
 * Tools live in the browser (localStorage, kept by markupcraft.js) and travel as a JSON file
 * ({format: 'markupcraft-tool-chest', version: 1, tools: [...]}) so an office can share one chest.
 * Imported files are untrusted: every field is checked and clamped; unknown fields are dropped.
 */

import { TYPES, STAMPS, stampLabel } from './model.js';
import { t as tr } from './i18n.js';   // `t` is a tool in this file

export const CHEST_FORMAT = 'markupcraft-tool-chest';
const TOOL_TYPES = new Set(Object.keys(TYPES).filter((t) => t !== 'foreign' && t !== 'image'));   // pictures stay in the stamp list
const HEX = /^#[0-9a-f]{6}$/i;
const MAX_TOOLS = 500;

/** The six starting tools. Names, subjects and texts come from the language file (chest.default.<key>.*) through getters,
 *  so they read in the page's language; a chest saved to the browser or a file keeps them as they read then. */
const DEFAULTS = [
  ['revision', 'cloudrect', { color: '#d0021b', width: 1.5, fill: null, fillOpacity: 0.25, opacity: 1, fontSize: 12 }],
  ['question', 'cloudrect', { color: '#1e48c8', width: 1.5, fill: null, fillOpacity: 0.25, opacity: 1, fontSize: 12 }],
  ['highlighter', 'highlight', { color: '#f5e000', width: 14, fill: null, fillOpacity: 0.25, opacity: 0.45, fontSize: 12 }],
  ['rfi', 'callout', { color: '#1e48c8', width: 1, fill: null, fillOpacity: 0.25, opacity: 1, fontSize: 12 }, 'text'],
  ['verify', 'callout', { color: '#c25e00', width: 1, fill: null, fillOpacity: 0.25, opacity: 1, fontSize: 12 }, 'text'],
  ['approved', 'stamp', { color: '#1e8c3a', width: 2.5, fill: null, fillOpacity: 0.25, opacity: 1, fontSize: 18 }, 'label'],
];
export const DEFAULT_CHEST = DEFAULTS.map(([key, type, style, extra], i) => {
  const k = 'chest.default.' + key + '.';
  const tool = { id: 'default-' + i, type, style, get name() { return tr(k + 'name'); }, get subject() { return tr(k + 'subject'); } };
  if (extra === 'text') Object.defineProperty(tool, 'text', { get: () => tr(k + 'text'), enumerable: true });
  if (extra === 'label') Object.defineProperty(tool, 'label', { get: () => stampLabel('Approved as noted'), enumerable: true });   // i18n-ignore (stamp id)
  return tool;
});

const str = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').slice(0, max);
const num = (v, lo, hi, d) => (Number.isFinite(+v) && v !== null && v !== '' ? Math.max(lo, Math.min(hi, +v)) : d);

/** One tool, cleaned. Returns null when it is not a usable tool. */
export function cleanTool(t, i = 0) {
  if (!t || typeof t !== 'object' || !TOOL_TYPES.has(t.type)) return null;
  const s = t.style && typeof t.style === 'object' ? t.style : {};
  const tool = {
    id: /^[A-Za-z0-9._-]{1,60}$/.test(t.id) ? t.id : 'tool-' + Date.now().toString(36) + '-' + i,
    name: str(t.name, 80).trim() || TYPES[t.type].name,
    type: t.type,
    style: {
      color: HEX.test(s.color) ? s.color.toLowerCase() : '#d0021b',
      width: num(s.width, 0, 72, 2),
      fill: s.fill === null || s.fill === undefined || s.fill === '' ? null : HEX.test(s.fill) ? s.fill.toLowerCase() : null,
      fillOpacity: num(s.fillOpacity, 0, 1, 0.25),
      opacity: num(s.opacity, 0.05, 1, 1),
      fontSize: num(s.fontSize, 4, 144, 12),
    },
    subject: str(t.subject, 120),
  };
  if (t.type === 'stamp') tool.label = str(t.label, 60).trim() || stampLabel(STAMPS[0]);
  if (t.type === 'count') tool.label = str(t.label, 60).trim() || tr('count.default');
  if (t.type === 'text' || t.type === 'callout' || t.type === 'note') tool.text = str(t.text, 2000);
  return tool;
}

/** A selected markup → a tool (style, subject, and the stamp label or starting text). */
export function toolFromMarkup(m, name) {
  return cleanTool({ name, type: m.type, style: m.style, subject: m.subject, label: m.label, text: m.type === 'stamp' ? '' : m.text });
}

/** Parse an imported chest file. Returns { tools, skipped } or throws a plain-language Error. */
export function parseChest(text) {
  let d;
  try { d = JSON.parse(text); } catch { throw new Error(tr('chest.err.json')); }
  const list = Array.isArray(d) ? d : d && d.format === CHEST_FORMAT && Array.isArray(d.tools) ? d.tools : null;
  if (!list) throw new Error(tr('chest.err.format'));
  const tools = [];
  let skipped = 0;
  list.slice(0, MAX_TOOLS).forEach((t, i) => { const c = cleanTool(t, i); if (c) tools.push(c); else skipped++; });
  skipped += Math.max(0, list.length - MAX_TOOLS);
  return { tools, skipped };
}

/** Merge imported tools into a chest: same id replaces, new ones are added. */
export function mergeChest(chest, incoming) {
  const out = chest.slice();
  for (const t of incoming) {
    const i = out.findIndex((x) => x.id === t.id);
    if (i >= 0) out[i] = t; else out.push(t);
  }
  return out.slice(0, MAX_TOOLS);
}

export function exportChest(tools) {
  return JSON.stringify({ format: CHEST_FORMAT, version: 1, exported: new Date().toISOString(), tools: tools.map((t) => cleanTool(t)).filter(Boolean) }, null, 2);
}

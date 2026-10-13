/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bcf-read.js — BCF import (0.4 K7): the round trip with BIM tools. No DOM.
 *
 *   unzipAll(bytes)          → Map(name → Uint8Array): stored and deflated entries (DecompressionStream 'deflate-raw');
 *                              names only used as keys — nothing is written anywhere
 *   readBcf(bytes)           → { version, project, topics: [{ guid, type, status, title, description, labels[], created,
 *                              author, assignee, due, file, comments: [{ guid, date, author, text }], camera: {x, y} | null }],
 *                              skipped } — BCF 2.0, 2.1 and 3.0; untrusted: sizes and counts capped, text trimmed
 *   planImport(bcf, ctx)     → { updates: [{ id, patch }], adds: [markup fields], matched, added, unplaced, replies }
 *       ctx = { markups, guidOf: Map(topic guid → markup id), replyGuids: Set, sheets: [{ key, title, sheetNo, file,
 *       view }], current (sheet key), author }
 *       A topic MarkupCraft exported (its GUID is the markup's) gets the comments it lacks and the newer status. Any other
 *       topic becomes a note: on the sheet whose title or number is one of its labels, else the sheet named in its
 *       header, else the open sheet; at the camera's place when it is ours (meters of paper), else stacked at the top left.
 */

import { STATUSES } from './model.js';

const MAX_FILES = 5000, MAX_TOPICS = 2000, MAX_XML = 2 * 1024 * 1024;

async function inflate(data) {
  if (typeof DecompressionStream === 'undefined') throw new Error('no DecompressionStream');   // i18n-ignore (Node < 18)
  const ds = new DecompressionStream('deflate-raw');
  return new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(ds)).arrayBuffer());
}

export async function unzipAll(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let e = bytes.length - 22;
  while (e >= 0 && dv.getUint32(e, true) !== 0x06054b50) e--;
  if (e < 0) throw Object.assign(new Error('not a zip'), { code: 'zip' });   // i18n-ignore (code carries the meaning)
  const n = Math.min(dv.getUint16(e + 10, true), MAX_FILES);
  let p = dv.getUint32(e + 16, true);
  const out = new Map();
  const dec = new TextDecoder();
  for (let i = 0; i < n && p + 46 <= bytes.length; i++) {
    if (dv.getUint32(p, true) !== 0x02014b50) break;
    const method = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true);
    const nameLen = dv.getUint16(p + 28, true), extra = dv.getUint16(p + 30, true), comment = dv.getUint16(p + 32, true);
    const local = dv.getUint32(p + 42, true);
    const name = dec.decode(bytes.subarray(p + 46, p + 46 + nameLen));
    p += 46 + nameLen + extra + comment;
    if (local + 30 > bytes.length) continue;
    const start = local + 30 + dv.getUint16(local + 26, true) + dv.getUint16(local + 28, true);
    const raw = bytes.subarray(start, Math.min(bytes.length, start + csize));
    if (name.endsWith('/')) continue;
    try { out.set(name, method === 0 ? raw : method === 8 ? await inflate(raw) : null); } catch { out.set(name, null); }
  }
  return out;
}

// ---- a small, tolerant XML reader for the elements BCF uses ----
const ENT = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" };
export function unxml(s) {
  return String(s ?? '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, (_, c) => c.replace(/[<>&]/g, (ch) => '&' + { '<': 'lt', '>': 'gt', '&': 'amp' }[ch] + ';'))
    .replace(/&(#x[0-9a-f]+|#\d+|lt|gt|amp|quot|apos);/gi, (_, e) => (e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : +e.slice(1)) : ENT[e.toLowerCase()]));
}
const tagText = (x, name) => { const m = new RegExp('<(?:\\w+:)?' + name + '(?:\\s[^>]*[^/])?>([\\s\\S]*?)</(?:\\w+:)?' + name + '>').exec(x); return m ? unxml(m[1]).trim() : ''; };
const tagAll = (x, name) => [...x.matchAll(new RegExp('<(?:\\w+:)?' + name + '(?:\\s[^>]*[^/])?>([\\s\\S]*?)</(?:\\w+:)?' + name + '>', 'g'))].map((m) => unxml(m[1]).trim());
const attr = (tag, name) => { const m = new RegExp('\\s' + name + '\\s*=\\s*"([^"]*)"').exec(tag) || new RegExp('\\s' + name + "\\s*=\\s*'([^']*)'").exec(tag); return m ? unxml(m[1]) : ''; };
const cut = (s, n) => String(s || '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').slice(0, n);
const GUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function readBcf(bytes) {
  const files = await unzipAll(bytes);
  const text = (name) => { const b = files.get(name); return b && b.length <= MAX_XML ? new TextDecoder().decode(b) : ''; };
  const version = attr((/<Version[^>]*>/.exec(text('bcf.version')) || [''])[0], 'VersionId') || '';
  const project = tagText(text('project.bcfp'), 'Name');
  const topics = [];
  let skipped = 0;
  const folders = [...new Set([...files.keys()].filter((k) => /^[^/]+\/markup\.bcf$/i.test(k)).map((k) => k.split('/')[0]))];
  for (const f of folders.slice(0, MAX_TOPICS)) {
    const x = text(f + '/markup.bcf');
    const topTag = (/<Topic\b[^>]*>/.exec(x) || [''])[0];
    const guid = attr(topTag, 'Guid') || f;
    if (!x || !topTag || !GUID.test(guid)) { skipped++; continue; }
    const topicXml = x.slice(x.indexOf(topTag));
    const comments = [];
    const starts = [...x.matchAll(/<Comment\s[^>]*Guid\s*=\s*["'][^"']+["'][^>]*>/g)];
    starts.forEach((s, i) => {
      const end = i + 1 < starts.length ? starts[i + 1].index : x.length;
      const block = x.slice(s.index + s[0].length, end);
      const body = (/<Comment>([\s\S]*?)<\/Comment>/.exec(block) || [])[1];
      if (body === undefined) return;
      comments.push({ guid: attr(s[0], 'Guid'), date: tagText(block, 'Date'), author: cut(tagText(block, 'Author'), 120), text: cut(unxml(body).trim(), 20000) });
    });
    const vpName = tagText(x, 'Viewpoint') || 'viewpoint.bcfv';
    const vx = text(f + '/' + vpName.replace(/^.*\//, ''));
    const cam = (/<(?:OrthogonalCamera|PerspectiveCamera)>[\s\S]*?<CameraViewPoint>([\s\S]*?)<\/CameraViewPoint>/.exec(vx) || [])[1];
    const cx = cam ? +tagText(cam, 'X') : NaN, cy = cam ? +tagText(cam, 'Y') : NaN;
    topics.push({
      guid: guid.toLowerCase(),
      type: cut(attr(topTag, 'TopicType') || tagText(topicXml, 'TopicType'), 120),
      status: cut(attr(topTag, 'TopicStatus') || tagText(topicXml, 'TopicStatus'), 60),
      title: cut(tagText(topicXml, 'Title'), 500),
      description: cut(tagText(topicXml, 'Description'), 20000),
      labels: tagAll(topicXml, 'Labels').concat(tagAll(topicXml, 'Label')).map((l) => cut(l, 200)).slice(0, 50),
      created: tagText(topicXml, 'CreationDate'), author: cut(tagText(topicXml, 'CreationAuthor'), 120),
      assignee: cut(tagText(topicXml, 'AssignedTo'), 120), due: tagText(topicXml, 'DueDate').slice(0, 10),
      file: cut(tagText(x, 'Filename'), 260),
      comments: comments.slice(0, 1000),
      camera: Number.isFinite(cx) && Number.isFinite(cy) ? { x: cx, y: cy } : null,
    });
  }
  skipped += Math.max(0, folders.length - MAX_TOPICS);
  return { version, project, topics, skipped };
}

const iso = (d) => { const t = Date.parse(d); return Number.isFinite(t) ? new Date(t).toISOString().replace(/\.\d+Z$/, 'Z') : ''; };
const statusOf = (s) => { const v = String(s || '').trim(); const hit = STATUSES.find((x) => x.toLowerCase() === v.toLowerCase()); return hit || (/^(closed|resolved|done)$/i.test(v) ? 'Completed' : ''); };   // i18n-ignore (BCF status words)

export function planImport(bcf, { markups = [], guidOf = new Map(), replyGuids = new Set(), sheets = [], current = '', author = '' } = {}) {
  const byId = new Map(markups.map((m) => [m.id, m]));
  const updates = [], adds = [];
  let matched = 0, added = 0, unplaced = 0, replies = 0;
  const stack = new Map();   // sheet key → notes stacked so far
  const k = 0.0254 / 72;
  const norm = (s) => String(s || '').toLowerCase().replace(/[\s._-]+/g, '');
  for (const tp of bcf.topics) {
    const fresh = tp.comments.filter((c) => !replyGuids.has(String(c.guid).toLowerCase()) && c.text);
    const reps = fresh.map((c) => ({ id: 'bcf-' + String(c.guid).toLowerCase(), author: c.author, date: iso(c.date) || iso(Date.now()), text: c.text, kind: 'comment' }));
    const id = guidOf.get(tp.guid);
    const st = statusOf(tp.status);
    if (id && byId.has(id)) {
      const m = byId.get(id);
      const patch = {};
      if (reps.length) patch.replies = [...(m.replies || []), ...reps];
      if (st && st !== m.status) patch.status = st;
      if (Object.keys(patch).length) updates.push({ id, patch });
      matched++; replies += reps.length;
      continue;
    }
    // a new topic → a note on the best sheet
    const named = sheets.find((s) => tp.labels.some((l) => norm(l) && (norm(l) === norm(s.title) || norm(l) === norm(s.sheetNo))))
      || (tp.file ? sheets.find((s) => norm(s.file) === norm(tp.file)) : null);
    const sheet = named || sheets.find((s) => s.key === current) || sheets[0];
    if (!sheet) { unplaced++; continue; }
    const [x0, y0, x1, y1] = sheet.view;
    let p = null;
    if (tp.camera && named) {   // a camera is a place on paper only for a topic tied to a sheet (ours: meters of paper)
      const q = [tp.camera.x / k, tp.camera.y / k];
      if (q[0] >= x0 && q[0] <= x1 && q[1] >= y0 && q[1] <= y1) p = q;
    }
    if (!p) { const i = stack.get(sheet.key) || 0; stack.set(sheet.key, i + 1); p = [x0 + 36 + (i % 10) * 28, y1 - 54 - Math.floor(i / 10) * 28]; unplaced++; }
    const comment = [tp.title, tp.description, tp.assignee || tp.due ? [tp.assignee, tp.due].filter(Boolean).join(', ') : ''].filter(Boolean).join('\n');
    adds.push({ sheet: sheet.key, type: 'note', pts: [p], comment, subject: tp.type || 'BCF', author: tp.author || author,   // i18n-ignore (the format's name)
      created: iso(tp.created) || undefined, status: st || 'Open', replies: reps, bcfGuid: tp.guid });
    added++; replies += reps.length;
  }
  return { updates, adds, matched, added, unplaced, replies };
}

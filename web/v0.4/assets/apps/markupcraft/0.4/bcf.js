/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bcf.js — export markups as BCF 2.1 (.bcfzip) for BIM tools; the zip is written here, no library. No DOM.
 *
 *   bcf.version                     <Version VersionId="2.1">
 *   project.bcfp                    the project (name = the plan set) + ExtensionSchema → extensions.xsd
 *   extensions.xsd                  our topic types (markup kinds) and statuses (Open Accepted Rejected Completed)
 *   <topic guid>/markup.bcf         Header (the PDF), Topic (guid, type, status, title, labels, dates, authors,
 *                                   due date + assignee from the punch item, description), Comment per reply,
 *                                   Viewpoints → viewpoint.bcfv + snapshot.png
 *   <topic guid>/viewpoint.bcfv     an orthogonal top view (a sheet has no model coordinates: the camera looks
 *                                   down on the markup's place on the sheet, in meters of paper)
 *   <topic guid>/snapshot.png       the markup's area of the sheet (made by the page)
 * GUIDs are name-based (UUID v5 of the markup / reply id), so exporting again gives the same topics.
 */

import { TYPES, STATUSES } from './model.js';
import { t as tr } from './i18n.js';   // `t` is a topic in this file

// ---- zip (stored entries; PNGs are already compressed, XML is small) ----
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
export function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** files: [{ name, data: Uint8Array | string }] → zip bytes (stored, UTF-8 names, DOS dates). */
export function zip(files, date = new Date()) {
  const enc = new TextEncoder();
  const dosTime = ((date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1)) & 0xffff;
  const dosDate = (((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()) & 0xffff;
  const locals = [], centrals = [];
  let offset = 0;
  for (const f of files) {
    const name = enc.encode(f.name);
    const data = typeof f.data === 'string' ? enc.encode(f.data) : f.data;
    const crc = crc32(data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
    lh.setUint16(10, dosTime, true); lh.setUint16(12, dosDate, true); lh.setUint32(14, crc, true);
    lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
    locals.push(new Uint8Array(lh.buffer), name, data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true);
    ch.setUint16(12, dosTime, true); ch.setUint16(14, dosDate, true); ch.setUint32(16, crc, true);
    ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, name.length, true);
    ch.setUint32(42, offset, true);
    centrals.push(new Uint8Array(ch.buffer), name);
    offset += 30 + name.length + data.length;
  }
  const cdSize = centrals.reduce((t, b) => t + b.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
  end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
  const parts = [...locals, ...centrals, new Uint8Array(end.buffer)];
  const out = new Uint8Array(parts.reduce((t, b) => t + b.length, 0));
  let p = 0;
  for (const b of parts) { out.set(b, p); p += b.length; }
  return out;
}

/** Read a stored zip back (for tests): name → bytes. */
export function unzip(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let e = bytes.length - 22;
  while (e >= 0 && dv.getUint32(e, true) !== 0x06054b50) e--;
  if (e < 0) throw new Error('not a zip');   // i18n-ignore (tests only)
  const n = dv.getUint16(e + 10, true);
  let p = dv.getUint32(e + 16, true);
  const out = new Map();
  const dec = new TextDecoder();
  for (let i = 0; i < n; i++) {
    const nameLen = dv.getUint16(p + 28, true), extra = dv.getUint16(p + 30, true), comment = dv.getUint16(p + 32, true);
    const local = dv.getUint32(p + 42, true), size = dv.getUint32(p + 20, true), crc = dv.getUint32(p + 16, true), method = dv.getUint16(p + 10, true);
    const name = dec.decode(bytes.subarray(p + 46, p + 46 + nameLen));
    const lnl = dv.getUint16(local + 26, true), lex = dv.getUint16(local + 28, true);
    const data = bytes.subarray(local + 30 + lnl + lex, local + 30 + lnl + lex + size);
    out.set(name, { data, crc, crcOk: crc32(data) === crc, method });
    p += 46 + nameLen + extra + comment;
  }
  return out;
}

// ---- XML ----
export function xml(s) {
  // characters XML 1.0 does not allow are dropped; the rest escaped
  return String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f￾￿]/g, '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
const isoDate = (s) => { const d = new Date(s); return Number.isNaN(+d) ? new Date().toISOString().replace(/\.\d+Z$/, 'Z') : d.toISOString().replace(/\.\d+Z$/, 'Z'); };

/** UUID v5 (SHA-1, name-based) in a fixed namespace: the same id always gives the same GUID. */
export async function guidFor(name) {
  const ns = [0x6f, 0x1c, 0x5d, 0x3a, 0x92, 0x0e, 0x4b, 0x7d, 0x8a, 0x40, 0x21, 0x5e, 0x9c, 0x33, 0x7b, 0x02];
  const data = new Uint8Array([...ns, ...new TextEncoder().encode(String(name))]);
  const h = new Uint8Array(await globalThis.crypto.subtle.digest('SHA-1', data)).slice(0, 16);
  h[6] = (h[6] & 0x0f) | 0x50;
  h[8] = (h[8] & 0x3f) | 0x80;
  const x = [...h].map((b) => b.toString(16).padStart(2, '0')).join('');
  return x.slice(0, 8) + '-' + x.slice(8, 12) + '-' + x.slice(12, 16) + '-' + x.slice(16, 20) + '-' + x.slice(20);
}

/* TopicType values: the BCF file's own vocabulary, kept in English whatever the page's language so every export of a
   project uses the same enumeration (the Title, Labels and Description are in the page's language). */
const TOPIC_TYPE = { pen: 'Pen', highlight: 'Highlighter', line: 'Line', arrow: 'Arrow', rect: 'Rectangle', ellipse: 'Ellipse',   // i18n-ignore
  polyline: 'Polyline', polygon: 'Polygon', cloudrect: 'Cloud', cloud: 'Cloud (freeform)', callout: 'Callout', text: 'Text',   // i18n-ignore
  note: 'Note', stamp: 'Stamp', measure: 'Length', area: 'Area', count: 'Count', foreign: 'Other' };   // i18n-ignore
export const TOPIC_TYPES = Object.keys(TYPES).map((k) => TOPIC_TYPE[k]);

export function extensionsXsd() {
  const enumOf = (vals) => vals.map((v) => '\t\t\t\t<xs:enumeration value="' + xml(v) + '"/>').join('\n');
  return '<?xml version="1.0" encoding="UTF-8"?>\n<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n\t<xs:redefine schemaLocation="markup.xsd">\n' +
    '\t\t<xs:simpleType name="TopicType">\n\t\t\t<xs:restriction base="TopicType">\n' + enumOf(TOPIC_TYPES) + '\n\t\t\t</xs:restriction>\n\t\t</xs:simpleType>\n' +
    '\t\t<xs:simpleType name="TopicStatus">\n\t\t\t<xs:restriction base="TopicStatus">\n' + enumOf(STATUSES) + '\n\t\t\t</xs:restriction>\n\t\t</xs:simpleType>\n' +
    '\t</xs:redefine>\n</xs:schema>\n';
}

/**
 * topics: [{ markup, sheetTitle, fileName, value (measured value or ''), box: [x0,y0,x1,y1] (pt), png: Uint8Array | null }]
 * opts: { project (name), exported (Date) }. Returns { bytes, count }.
 */
export async function buildBcf(topics, { project = 'MarkupCraft', exported = new Date() } = {}) {
  const files = [];
  files.push({ name: 'bcf.version', data: '<?xml version="1.0" encoding="UTF-8"?>\n<Version VersionId="2.1">\n\t<DetailedVersion>2.1</DetailedVersion>\n</Version>\n' });
  const pid = await guidFor('project:' + project);
  files.push({ name: 'project.bcfp', data: '<?xml version="1.0" encoding="UTF-8"?>\n<ProjectExtension>\n\t<Project ProjectId="' + pid + '">\n\t\t<Name>' + xml(project) + '</Name>\n\t</Project>\n\t<ExtensionSchema>extensions.xsd</ExtensionSchema>\n</ProjectExtension>\n' });
  files.push({ name: 'extensions.xsd', data: extensionsXsd() });
  let index = 0;
  for (const t of topics) {
    const m = t.markup;
    const g = await guidFor('topic:' + m.id);
    const vg = await guidFor('viewpoint:' + m.id);
    const type = TOPIC_TYPE[m.type] || TOPIC_TYPE.foreign;
    const typeName = TYPES[m.type]?.name || TYPES.foreign.name;
    const what = [m.punch ? '#' + m.punch.n : '', m.subject || typeName].filter(Boolean).join(' ');
    const title = (t.sheetTitle ? tr('bcf.title.on', { what, sheet: t.sheetTitle }) : what).slice(0, 250);
    const textPart = m.type === 'stamp' ? m.label : m.type === 'text' || m.type === 'callout' ? m.text : '';
    const description = [textPart, t.value, m.comment, t.sheetTitle ? (t.fileName ? tr('bcf.desc.sheet_file', { sheet: t.sheetTitle, file: t.fileName }) : tr('bcf.desc.sheet', { sheet: t.sheetTitle })) : ''].filter(Boolean).join('\n');
    const labels = [typeName, t.sheetTitle].filter(Boolean);
    const lines = [];
    lines.push('<?xml version="1.0" encoding="UTF-8"?>', '<Markup>');
    if (t.fileName) lines.push('\t<Header>', '\t\t<File isExternal="true">', '\t\t\t<Filename>' + xml(t.fileName) + '</Filename>', '\t\t\t<Date>' + isoDate(exported) + '</Date>', '\t\t</File>', '\t</Header>');
    lines.push('\t<Topic Guid="' + g + '" TopicType="' + xml(type) + '" TopicStatus="' + xml(STATUSES.includes(m.status) ? m.status : 'Open') + '">');
    lines.push('\t\t<Title>' + xml(title || type) + '</Title>');
    lines.push('\t\t<Index>' + (++index) + '</Index>');
    for (const l of labels) lines.push('\t\t<Labels>' + xml(l) + '</Labels>');
    lines.push('\t\t<CreationDate>' + isoDate(m.created) + '</CreationDate>', '\t\t<CreationAuthor>' + xml(m.author || 'Unknown') + '</CreationAuthor>');
    if (m.modified && m.modified !== m.created) lines.push('\t\t<ModifiedDate>' + isoDate(m.modified) + '</ModifiedDate>', '\t\t<ModifiedAuthor>' + xml(m.author || 'Unknown') + '</ModifiedAuthor>');
    if (m.punch?.due && /^\d{4}-\d{2}-\d{2}$/.test(m.punch.due)) lines.push('\t\t<DueDate>' + m.punch.due + 'T00:00:00Z</DueDate>');
    if (m.punch?.assignee) lines.push('\t\t<AssignedTo>' + xml(m.punch.assignee) + '</AssignedTo>');
    if (description) lines.push('\t\t<Description>' + xml(description) + '</Description>');
    lines.push('\t</Topic>');
    for (const r of m.replies || []) {
      const cg = await guidFor('comment:' + m.id + ':' + r.id);
      lines.push('\t<Comment Guid="' + cg + '">', '\t\t<Date>' + isoDate(r.date) + '</Date>', '\t\t<Author>' + xml(r.author || 'Unknown') + '</Author>',
        '\t\t<Comment>' + xml(r.text) + '</Comment>', '\t\t<Viewpoint Guid="' + vg + '"/>', '\t</Comment>');
    }
    lines.push('\t<Viewpoints Guid="' + vg + '">', '\t\t<Viewpoint>viewpoint.bcfv</Viewpoint>');
    if (t.png) lines.push('\t\t<Snapshot>snapshot.png</Snapshot>');
    lines.push('\t\t<Index>0</Index>', '\t</Viewpoints>', '</Markup>');
    files.push({ name: g + '/markup.bcf', data: lines.join('\n') + '\n' });
    // camera: straight down on the markup's center, in meters of paper (1 pt = 0.3528 mm)
    const b = t.box || m.rect || [0, 0, 0, 0];
    const k = 0.0254 / 72;
    const cx = ((b[0] + b[2]) / 2) * k, cy = ((b[1] + b[3]) / 2) * k;
    const span = Math.max(b[2] - b[0], b[3] - b[1], 36) * k;
    const pt = (x, y, z) => '<X>' + +x.toFixed(6) + '</X><Y>' + +y.toFixed(6) + '</Y><Z>' + +z.toFixed(6) + '</Z>';
    files.push({ name: g + '/viewpoint.bcfv', data: '<?xml version="1.0" encoding="UTF-8"?>\n<VisualizationInfo Guid="' + vg + '">\n\t<OrthogonalCamera>\n' +
      '\t\t<CameraViewPoint>' + pt(cx, cy, 10) + '</CameraViewPoint>\n\t\t<CameraDirection>' + pt(0, 0, -1) + '</CameraDirection>\n' +
      '\t\t<CameraUpVector>' + pt(0, 1, 0) + '</CameraUpVector>\n\t\t<ViewToWorldScale>' + +(span * 1.4).toFixed(6) + '</ViewToWorldScale>\n\t</OrthogonalCamera>\n</VisualizationInfo>\n' });
    if (t.png) files.push({ name: g + '/snapshot.png', data: t.png });
  }
  return { bytes: zip(files, exported), count: topics.length };
}

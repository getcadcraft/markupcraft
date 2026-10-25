/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person. */
/**
 * agents.js — MarkupCraft for AI assistants and scripts (0.4 part 2 X.7, session agents; docs/AGENTS-SPEC.md §5.2). The
 * apps contain no AI: this gives the person's own assistant tools to list markups and add simple ones; Settings ›
 * Assistants (host.js) decides which.
 *
 * DOM-free, shared with the headless core (tools/cli/headless/markup.mjs imports this file from the build):
 *   markupRow(m, sheetTitle, measureOf) · filterMarkups(list, {sheet, status, type, author}, sheetTitle) · ADDABLE
 *   setStatus(store, id, status, who, comment) · addReply(store, id, text, who) — one undo step each (0.7 AS.5)
 * The page (markupcraft.js) calls installAgents({...}) once.
 */
import { STATUSES, statusReply, cleanReply } from './model.js';
import { getHost } from "./host.js";

/** One markup as the assistant sees it. */
export function markupRow(m, sheetTitle, measureOf = null) {
  const value = measureOf ? measureOf(m) : '';
  return {
    id: m.id, sheet: sheetTitle(m.sheet), type: m.type, ...(m.subject ? { subject: m.subject } : {}), text: m.text || null, comment: m.comment || null,
    ...(m.label ? { label: m.label } : {}), ...(value ? { measurement: value } : {}), status: m.status, author: m.author || null, created: m.created || null, modified: m.modified || null,
    ...(m.type === 'count' ? { count: (m.pts || []).length } : {}), ...(m.punch ? { punch: m.punch } : {}), ...(m.layer ? { layer: m.layer } : {}),
    readOnly: m.type === 'foreign' || !!m.locked,
    replies: (m.replies || []).map((r) => ({ author: r.author || null, date: r.date || null, text: r.text || '', kind: r.kind || 'comment' })),
  };
}

export function filterMarkups(list, { sheet = null, status = null, type = null, author = null } = {}, sheetTitle = (k) => k) {
  const lc = (s) => String(s ?? '').toLowerCase();
  return list.filter((m) => {
    if (sheet && !lc(sheetTitle(m.sheet)).includes(lc(sheet))) return false;
    if (status && lc(m.status) !== lc(status)) return false;
    if (type && lc(m.type) !== lc(type)) return false;
    if (author && !lc(m.author).includes(lc(author))) return false;
    return true;
  });
}

/** A markup's status, with the "Status set to … by …" entry in its thread (and a comment after it): one undo step. */
export function setStatus(store, id, status, who, comment = '') {
  const m = store.get(id);
  if (!m) throw new Error('There is no markup ' + id + ' (markups_list shows them).');
  if (!STATUSES.includes(status)) throw new Error('Statuses: ' + STATUSES.join(', ') + '.');
  if (m.status === status && !comment) return { changed: false };
  const entries = [statusReply(status, who), ...(comment ? [cleanReply({ author: who, text: comment, kind: 'comment' })] : [])].filter(Boolean);
  const label = 'Assistant: status ' + status;
  store.change(label, (tx) => tx.update(id, { status, replies: [...m.replies, ...entries] }));
  return { changed: true, undo: label };
}
/** A comment in a markup's thread (any markup, read-only annotations of other programs too): one undo step. */
export function addReply(store, id, text, who) {
  const m = store.get(id);
  if (!m) throw new Error('There is no markup ' + id + ' (markups_list shows them).');
  const r = cleanReply({ author: who, text, kind: 'comment' });
  if (!r) throw new Error('A reply needs text.');
  store.change('Assistant: reply', (tx) => tx.update(id, { replies: [...m.replies, r] }, { touch: false }));
  return { reply: r.id, replies: m.replies.length + 1, undo: 'Assistant: reply' };
}

/** The markup types an assistant may add, and the geometry each takes. */
export const ADDABLE = { rect: 'rect', cloudrect: 'rect', ellipse: 'rect', text: 'rect', note: 'point', line: 'two', arrow: 'two' };

/**
 * The live tools. `app` = {store, sheets() → [{key, title, width, height, view: [x0, y0, x1, y1], file}], current() → key | null,
 * author() → string, styleFor(type) → style, measureOf(m) → string, goTo(key)}.
 */
export function installAgents(app) {
  const C = getHost({ app: 'markupcraft' }).control;
  const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
  const title = (key) => { const s = app.sheets().find((x) => x.key === key); return s ? s.title : key; };
  const findSheet = (q) => {
    const all = app.sheets();
    if (q === undefined || q === null || q === '') { const k = app.current(); const s = all.find((x) => x.key === k); if (s) return s; throw new Error('No sheet is open.'); }
    if (Number.isInteger(q)) { if (q >= 1 && q <= all.length) return all[q - 1]; throw new Error('Sheets are numbered 1 to ' + all.length + '.'); }
    const lc = String(q).toLowerCase();
    const s = all.find((x) => x.key === q) || all.find((x) => String(x.title).toLowerCase() === lc) || all.find((x) => String(x.title).toLowerCase().includes(lc));
    if (!s) throw new Error('No sheet "' + q + '". sheets_list shows them.');
    return s;
  };
  C.configure({ title: 'MarkupCraft', info: () => ({ sheets: app.sheets().length, markups: app.store.all().length, sheet: app.current() ? title(app.current()) : null }) });
  C.tool({ name: 'app_info', group: 'read', title: 'About this window', description: 'MarkupCraft\'s window: the PDF sets open, the sheet shown, how many markups, the reviewer name, and the permissions the person allowed.',
    run: async () => ({ app: 'markupcraft', title: 'MarkupCraft', allowed: C.groups, sheets: app.sheets().length, markups: app.store.all().length, sheet: app.current() ? title(app.current()) : null, author: app.author() || null }) });
  C.tool({ name: 'sheets_list', group: 'read', title: 'List sheets', description: 'The sheets of the open PDFs (number from 1, title, file, size in inches) with their markup counts.',
    run: async () => ({ sheets: app.sheets().map((s, i) => ({ n: i + 1, sheet: s.title, file: s.file || null, sizeIn: [Math.round(s.width / 72 * 100) / 100, Math.round(s.height / 72 * 100) / 100], markups: app.store.onSheet(s.key).length, shown: s.key === app.current() })) }) });
  C.tool({ name: 'markups_list', group: 'read', title: 'List markups', description: 'Markups (type, sheet, text, comment, measurement, status, author, dates, punch item, replies), filtered by sheet, status, type or author, paged.',
    inputSchema: obj({ sheet: { type: 'string', maxLength: 255 }, status: { type: 'string', enum: STATUSES }, type: { type: 'string', maxLength: 40 }, author: { type: 'string', maxLength: 200 }, offset: { type: 'integer', minimum: 0, default: 0 }, limit: { type: 'integer', minimum: 1, maximum: 1000, default: 200 } }),
    run: async (a) => { const hits = filterMarkups(app.store.all(), a, title); return { total: hits.length, offset: a.offset, markups: hits.slice(a.offset, a.offset + a.limit).map((m) => markupRow(m, title, app.measureOf)) }; } });
  const num = { type: 'number', minimum: -10, maximum: 100000 };
  C.tool({ name: 'markup_add', group: 'edit', title: 'Add a markup', description: 'Add a markup to a sheet as one undo step ("Assistant: add …"): rect, cloudrect, ellipse or text take rect [x0, y0, x1, y1]; note takes at [x, y]; line and arrow take from [x, y] and to [x, y]. Coordinates are fractions of the sheet (0 to 1 from its lower-left corner, as the page is stored, before any rotation) unless units is "pt" (PDF points). text is the words of a text box or note; comment is a note on any markup.',
    inputSchema: obj({ sheet: { anyOf: [{ type: 'integer', minimum: 1 }, { type: 'string', maxLength: 255 }] }, type: { type: 'string', enum: Object.keys(ADDABLE) }, rect: { type: 'array', items: num, minItems: 4, maxItems: 4 }, at: { type: 'array', items: num, minItems: 2, maxItems: 2 }, from: { type: 'array', items: num, minItems: 2, maxItems: 2 }, to: { type: 'array', items: num, minItems: 2, maxItems: 2 },
      units: { type: 'string', enum: ['fraction', 'pt'], default: 'fraction' }, text: { type: 'string', maxLength: 4000 }, comment: { type: 'string', maxLength: 4000 }, color: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' }, status: { type: 'string', enum: STATUSES } }, ['type']),
    run: async (a, ctx) => {
      const s = findSheet(a.sheet);
      const [x0, y0] = s.view, w = s.width, h = s.height;
      const P = (p) => (a.units === 'pt' ? [x0 + p[0], y0 + p[1]] : [x0 + p[0] * w, y0 + p[1] * h]);
      const kind = ADDABLE[a.type];
      const f = { sheet: s.key, type: a.type, text: a.text || '', comment: a.comment || '', status: a.status || 'Open', author: (ctx.client || 'Assistant') + ' (assistant' + (app.author() ? ' for ' + app.author() : '') + ')', style: { ...(app.styleFor ? app.styleFor(a.type) : {}), ...(a.color ? { color: a.color } : {}) } };
      if (kind === 'rect') { if (!a.rect) throw new Error(a.type + ' needs rect [x0, y0, x1, y1].'); const p = P([a.rect[0], a.rect[1]]), q = P([a.rect[2], a.rect[3]]); f.rect = [p[0], p[1], q[0], q[1]]; }
      else if (kind === 'point') { if (!a.at) throw new Error('note needs at [x, y].'); f.pts = [P(a.at)]; }
      else { if (!a.from || !a.to) throw new Error(a.type + ' needs from [x, y] and to [x, y].'); f.pts = [P(a.from), P(a.to)]; }
      if (a.type === 'text' && !f.text) throw new Error('A text box needs text.');
      if (f.rect && (Math.abs(f.rect[2] - f.rect[0]) < 1 || Math.abs(f.rect[3] - f.rect[1]) < 1)) throw new Error('The rectangle is too small.');
      let made = null;
      app.store.change('Assistant: add ' + a.type, (tx) => { made = tx.add(f); });
      if (s.key !== app.current() && app.goTo) await app.goTo(s.key);
      return { id: made.id, sheet: s.title, type: made.type, undo: 'Assistant: add ' + a.type };
    } });
  // ---- 0.7 AS.5 (session assistants): status, replies, the list's exports
  const who = (ctx) => (ctx.client || 'Assistant') + ' (assistant' + (app.author() ? ' for ' + app.author() : '') + ')';
  C.tool({ name: 'markup_status', group: 'edit', title: 'Set a status', description: 'Set a markup\'s status (Open, Accepted, Rejected, Completed), as the Properties panel does: the thread gets "Status set to … by <the assistant>", and a comment after it if given. One undo step.',
    inputSchema: obj({ id: { type: 'string', minLength: 1, maxLength: 80 }, status: { type: 'string', enum: STATUSES }, comment: { type: 'string', maxLength: 4000 } }, ['id', 'status']),
    run: async (a, ctx) => { const r = setStatus(app.store, a.id, a.status, who(ctx), a.comment || ''); app.refresh?.(); return { id: a.id, status: a.status, ...r }; } });
  C.tool({ name: 'markup_reply', group: 'edit', title: 'Reply', description: 'Add a comment to a markup\'s thread, signed as the assistant (other programs\' read-only annotations take replies too). One undo step.',
    inputSchema: obj({ id: { type: 'string', minLength: 1, maxLength: 80 }, text: { type: 'string', minLength: 1, maxLength: 20000 } }, ['id', 'text']),
    run: async (a, ctx) => { const r = addReply(app.store, a.id, a.text, who(ctx)); app.refresh?.(); return { id: a.id, ...r }; } });
  if (app.exportCsv && app.exportBcf) {
    const F = C.files;
    C.tool({ name: 'markups_export', group: 'export', title: 'Export markups', description: 'The markups the Markups list shows (its filters, as the person set them) as CSV or as BCF 2.1 (with a picture of each), exactly as the list\'s CSV and BCF buttons write them. With a path (Studio, inside the allowed folders) the file goes there, else it downloads.',
      inputSchema: obj({ format: { type: 'string', enum: ['csv', 'bcf'] }, path: { type: 'string', minLength: 1, maxLength: 4096 }, overwrite: { type: 'boolean', default: false } }, ['format']),
      run: async (a) => {
        if (!app.store.all().length) throw new Error('There are no markups to export.');
        const go = () => (a.format === 'csv' ? app.exportCsv() : app.exportBcf());
        if (!a.path) { await go(); return { format: a.format, downloaded: true }; }
        if (!F.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).');
        if (!new RegExp('\\.' + (a.format === 'csv' ? 'csv' : 'bcf(zip)?') + '$', 'i').test(a.path)) throw new Error('A ' + a.format.toUpperCase() + ' file ends in .' + (a.format === 'csv' ? 'csv' : 'bcf') + '.');
        const r = await F.into(a.path, go, { overwrite: a.overwrite });
        if (!r.written.length) throw new Error(r.errors[0] || 'Nothing was written: the Markups list shows no markups (check its filters).');
        return { format: a.format, path: r.written[0] };
      } });
  }
  return C;
}

/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the CSV's own column names and the review words come from the file; the words around them go through t() in the page. */
/**
 * permit.js — the likely review comments of BimCraft's permit package (EG.44, bim_PART_2) as MarkupCraft notes (0.8 round 3, markup_PART_3). DOM-free.
 * The package's `01-review-comments.csv` has the columns kind, where, rule, clause, required, found, source, comment, what to do; kind is
 * fail | heads-up | question | problem. Each row becomes a note on the chosen sheet in a column down its left margin (the CSV has no place on the
 * sheet: a person moves each note to the spot it is about), status Open, with the rule, clause, required and found in the text and what to do in the comment.
 *
 *   parseCsv(text) → [[cell]]                       RFC 4180 (quotes, doubled quotes, line breaks inside quotes); a leading ' on a cell (formula guard) is dropped
 *   commentsFromCsv(text) → { comments: [{ kind, where, rule, clause, required, found, source, comment, fix }], bad: n }
 *   permitNotes(comments, { sheet, view, author, step = 26 }) → [fields]   fields for store tx.add (type 'note')
 */
export function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false;
  const s = String(text ?? '').replace(/^﻿/, '');
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '"') { if (s[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; continue; }
    if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && s[i + 1] === '\n') i++; row.push(cell); cell = ''; if (row.some((x) => x !== '')) rows.push(row); row = []; }
    else cell += c;
  }
  row.push(cell); if (row.some((x) => x !== '')) rows.push(row);
  return rows.map((r) => r.map((x) => (/^'[=+\-@]/.test(x) ? x.slice(1) : x)));
}

const clean = (v, n) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, ' ').trim().slice(0, n);
const KINDS = ['fail', 'heads-up', 'question', 'problem'];

export function commentsFromCsv(text) {
  const rows = parseCsv(text);
  const head = (rows.shift() || []).map((h) => clean(h, 40).toLowerCase());
  const col = (n) => head.indexOf(n);
  const ix = { kind: col('kind'), where: col('where'), rule: col('rule'), clause: col('clause'), required: col('required'), found: col('found'), source: col('source'), comment: col('comment'), fix: col('what to do') };
  if (ix.kind < 0 || ix.comment < 0) return { comments: [], bad: rows.length };
  const comments = []; let bad = 0;
  for (const r of rows.slice(0, 2000)) {
    const g = (k, n) => (ix[k] >= 0 ? clean(r[ix[k]], n) : '');
    const kind = g('kind', 20).toLowerCase();
    const comment = g('comment', 1000);
    if (!KINDS.includes(kind) || !comment) { bad++; continue; }
    comments.push({ kind, where: g('where', 120), rule: g('rule', 160), clause: g('clause', 80), required: g('required', 80), found: g('found', 80), source: g('source', 200), comment, fix: g('fix', 600) });
  }
  return { comments, bad };
}

/** words = the page's translated words { fail, 'heads-up', question, problem, needs, found, subject } (English by default). */
export function permitNotes(comments, { sheet, view, author = '', step = 26, words = {} } = {}) {
  const W = { fail: 'Fails', 'heads-up': 'Heads-up', question: 'Question', problem: 'Check', needs: 'needs', found: 'found', subject: 'Permit review', ...words };
  const [x0, , , y1] = view || [0, 0, 612, 792];
  return comments.map((c, i) => {
    const head = [W[c.kind], c.rule || c.where].filter(Boolean).join(': ');
    const cite = [c.clause, c.required && W.needs + ' ' + c.required, c.found && W.found + ' ' + c.found, c.where && c.rule && c.where].filter(Boolean).join(', ');
    return {
      sheet, type: 'note', pts: [[x0 + 24, y1 - 24 - i * step]], author,
      text: [head, c.comment].filter(Boolean).join('. ') + (cite ? ' (' + cite + ')' : ''),
      comment: c.fix || '', subject: W.subject, status: 'Open',
    };
  });
}

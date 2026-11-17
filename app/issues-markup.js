/* SPDX-License-Identifier: Apache-2.0 */
/**
 * issues-markup.js: MarkupCraft's side of the issue history (0.10 BK.48; session bk-r3-stages-10). The model, the changelog and
 * the panel are the shared lib's (issuelog/); this file says what a MarkupCraft sheet is and ties markups to an issue.
 *
 * The history is kept with the file's other shell data (PDF Info entry /MarkupCraftShell, key `issues`), so it travels in the
 * marked-up PDF. It is not a markup undo step (like calc sheets and reasons): it is saved with the file.
 * A sheet's print = its regular markups (id and last change), so "changes since" tells which sheets were marked up after an issue.
 * "Record the selected markups": each selected markup becomes a record against the latest issue: a cloud as a revision cloud at that
 * issue's revision, anything else as a markup; the record points at the markup (Show jumps to it). A trade's shop drawing or markup
 * set that came back is a record of its own kind with the file's name, size and SHA-256.
 *
 *   mountMarkupIssues({ root, t, store, sheets(), selection(), jumpTo(id), goToKey(key), typeName(type), sheetLabel(key), get(), set(history),
 *                       download(data, name, type), who(), fileBase() }) → { panel, render } | null
 *   markupSheets(sheets, store) → [{ id, number, title, hash }] · markRecords(history, markups, issue, { typeName, sheetLabel, today }) → history'
 */
import { mountIssuePanel } from './issuelog/panel.js';
import { fileHost, sheetId } from './issuelog/host.js';
import { sheetPrint, putRecord, nextRef } from './issuelog/history.js';

const CLOUDS = ['cloud', 'cloudrect'];

export function markupSheets(sheets, store) {
  return sheets.map((s) => ({ id: sheetId(s.key), number: s.sheetNo || '', title: s.title || '', hash: sheetPrint({ sheet: s.sheetNo || s.title || '' }, store.onSheet(s.key).map((m) => m.id + ':' + (m.modified || m.created || ''))) }));
}

export function markRecords(history, markups, issue, { typeName = (x) => x, sheetLabel = () => '', today = '' } = {}) {
  let h = history;
  for (const m of markups) {
    const kind = CLOUDS.includes(m.type) ? 'cloud' : 'markup';
    const old = h.records.find((r) => r.target === m.id);
    h = putRecord(h, { id: old?.id || 'm' + sheetId(m.id), kind, issue: issue.id, ref: old?.ref || nextRef(h, kind), title: String(m.text || m.label || typeName(m.type)).slice(0, 200), date: today, by: m.author || '',
      status: old?.status || 'open', sheets: [sheetLabel(m.sheet)].filter(Boolean), rev: issue.code, app: 'markupcraft', target: m.id, at: new Date().toISOString() });
  }
  return h;
}

export function mountMarkupIssues(ctx) {
  const box = ctx.root?.querySelector('[data-issues]');
  if (!box) return null;
  const t = ctx.t;
  const today = () => new Date().toISOString().slice(0, 10);
  let panel = null;
  const host = fileHost({
    t, app: 'markupcraft', read: ctx.get, write: (history) => { ctx.set(history); },
    sheets: () => markupSheets(ctx.sheets(), ctx.store),
    cls: { button: 'btn-line btn-sm-cc', input: 'mc-input', table: 'mc-table', muted: 'mc-muted', note: 'mc-note' },
    download: (name, data, type) => ctx.download(data, name, type), today, who: ctx.who, fileBase: ctx.fileBase,
    openSheet: (id) => { const s = ctx.sheets().find((x) => sheetId(x.key) === id); if (s) ctx.goToKey(s.key); },
    openRecord: (r) => ctx.jumpTo(r.target),
    actions: () => [{ id: 'marks', label: t('issues.act.marks'), run: () => {
      const h = host.get(), issue = h.issues[h.issues.length - 1];
      const marks = ctx.selection().map((id) => ctx.store.get(id)).filter((m) => m && ctx.store.isShared(m));
      if (!issue || !marks.length) return { text: t('issues.act.marks.none'), error: true };
      host.set(markRecords(h, marks, issue, { typeName: ctx.typeName, sheetLabel: ctx.sheetLabel, today: today() }));
      return t('issues.act.marks.done', { n: marks.length, code: issue.code });
    } }],
  });
  panel = mountIssuePanel(box, host);
  const render = () => { if (box.isConnected) panel.render(); };
  ctx.root.querySelector('[data-issues-details]')?.addEventListener('toggle', (e) => { if (e.target.open) render(); });
  return { panel, render, host };
}

/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems-markupcraft.js — what MarkupCraft could not bring in from a PDF, as shared Problems (0.8 P.6; spec docs/0.8-PROBLEMS-SPEC.md
 * § 10): pages pdf.js could not draw (error), pictures on a page that could not be drawn (warning), pages the text reader (OCR) could
 * not read (warning) and pages it found no words on (note). Kind `import`: one problem per page and kind of loss, never one per picture.
 * No DOM: bin/test-problems.mjs runs it in Node; markupcraft.js hands the result to the shell's window.ccProblems (the mount line is
 * in docs/0.8-sessions/problems-08.md).
 *
 *   pageProblems({ render, ocr, titleOf }, { t }) → [problem]
 *     render   { sheetId: failed } — view.js `failed`: { kind: 'image', n, total } (pictures) or { message } (the whole page)
 *     ocr      { sheetId: 'failed' | 'empty' } — what the last OCR run found out about each page (ocr-ui.js done.failed / done.empty)
 *     titleOf  (sheetId) → the page's name; t(key, vars) = MarkupCraft's t (the words are render.* and ocr.done.*)
 *   Objects are kind 'sheet' with the sheet id; `where: { space: 'sheet', sheet }` lets the adapter open that page.
 */
export function pageProblems({ render = {}, ocr = {}, titleOf = (id) => String(id) } = {}, { t = (k) => k } = {}) {
  const out = [];
  const base = (id, code, severity, text, extra = {}) => ({
    code, severity, text, about: [{ kind: 'sheet', id: String(id), label: titleOf(id) }], where: { space: 'sheet', sheet: String(id) },
    source: { name: 'markupcraft.pages' }, ...extra,
  });
  for (const [id, f] of Object.entries(render || {})) {
    if (!f || typeof f !== 'object') continue;
    if (f.kind === 'image') {
      const msg = { key: 'render.image_failed', vars: { sheet: titleOf(id), n: f.n || 0 } };
      out.push(base(id, 'page.image', 'warning', t(msg.key, msg.vars), { msg }));
    } else {
      const msg = { key: 'render.failed', vars: { sheet: titleOf(id), reason: String(f.message || '').slice(0, 200) } };
      out.push(base(id, 'page.draw', 'error', t(msg.key, msg.vars), { msg }));
    }
  }
  for (const [id, what] of Object.entries(ocr || {})) {
    if (what === 'failed') out.push(base(id, 'page.ocr.failed', 'warning', titleOf(id) + ': ' + t('ocr.done.failed', { n: 1 })));
    else if (what === 'empty') out.push(base(id, 'page.ocr.empty', 'note', titleOf(id) + ': ' + t('ocr.done.empty', { n: 1 })));
  }
  return out;
}

/**
 * Open tasks past their due day, as shared Problems (0.8 EG.64, rule 29): one warning per task, kind `check`, about the markup.
 *   taskProblems(markups, { titleOf, day }, { t }) → [problem]
 */
export function taskProblems(markups = [], { titleOf = (id) => String(id), day = new Date().toISOString().slice(0, 10) } = {}, { t = (k) => k } = {}) {
  const out = [];
  for (const m of markups) {
    const k = m.task;
    if (!k || k.state === 'Done' || !k.due || k.due >= day) continue;
    const msg = { key: 'tasks.problem.overdue', vars: { title: (k.title || m.text || m.comment || m.id).slice(0, 120), due: k.due, who: k.assignee?.name || (k.assignee?.kind === 'assistant' ? 'assistant' : '') } };
    out.push({ code: 'task.overdue', severity: 'warning', text: t(msg.key, msg.vars), msg, about: [{ kind: 'markup', id: String(m.id), label: titleOf(m.sheet) }], where: { space: 'sheet', sheet: String(m.sheet) }, source: { name: 'markupcraft.tasks' } });
  }
  return out;
}

// ---- ⚠ markers on the page (0.8 round 3, markup_PART_3; shell adapter `markers`, docs/0.8-PROBLEMS-SPEC.md § 10) ----
/** Where a problem sits on the sheet that is open, in PDF user space: the middle of the markup it is about, else the page's top-left
 *  corner (a page that could not be drawn has nothing else to point at). null = not on this sheet. */
export function pageAnchor(p, { curKey, boundsOfId, viewOf }) {
  const key = p.where && p.where.sheet != null ? String(p.where.sheet) : null;
  if (!key || key !== curKey()) return null;
  for (const r of p.about || []) {
    if (r.kind !== 'markup') continue;
    const b = boundsOfId(r.id);
    if (b && b.every(Number.isFinite)) return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2];
  }
  const v = viewOf(key);
  return v ? [v[0] + 16, v[3] - 16] : null;
}
/** The adapter `P.markers(...)` takes. `view` = MarkupCraft's View (toScreen, onView); `canvas` = the element toScreen's pixels are measured on. */
export function pageMarkers({ view, stage, canvas, curKey, boundsOfId, viewOf }) {
  return {
    stage,
    anchor: (p) => pageAnchor(p, { curKey, boundsOfId, viewOf }),
    toScreen: (pt) => {
      if (!view.page) return null;
      const [x, y] = view.toScreen(pt);
      const c = canvas.getBoundingClientRect(), s = stage.getBoundingClientRect();
      return { x: x + (c.left - s.left), y: y + (c.top - s.top) };
    },
    onView: (fn) => {
      const prev = view.onView;
      const wrapped = () => { prev?.(); fn(); };
      view.onView = wrapped;
      return () => { if (view.onView === wrapped) view.onView = prev; };
    },
  };
}

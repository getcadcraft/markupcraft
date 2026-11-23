/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — MarkupCraft attaches the shell's seven modules (0.8 round 3, markup_PART_3; docs/apps/shell-modules.md § Mounting):
 * calc sheets (EG.18), design reasons (EG.34), running totals (EG.30), lessons (EG.23), Suggest (AC.12), the activity log (AC.13) and the
 * Ask box (AC.8). The block in mountShellModules is the doc's, unchanged; markupHost() is what MarkupCraft hands over as `host`.
 *
 *   mountMarkupShell(mc) — mc = { store, control, sel(), select(id), onSelection(fn) → off, label(m), files(), name(), markDirty(), canUndoTo }
 * Calc sheets and reasons are saved in the PDF's Info entry /MarkupCraftShell (pdf-write.js `shell`); a calc sheet change is not an undo
 * step of the markups (they are not markups), it is saved with the file.
 */
import { assistantPrefs, ASSIST_KEY, getHost } from './host.js';
import { t as tr } from './i18n.js';
import { mountShellModules as mountCore } from './shell-mount-core.js';   // the doc's block, shared (0.11 PERF.74)

/** The doc's block, now the shared shell-mount-core.js (0.11 PERF.74), with this app's two differences. */
export function mountShellModules(host) { return mountCore(host, { opened: () => 'A file was opened.' }); }   // i18n-ignore: the words this app's copy of the block had; modelChanged passes the translated words

/** The first lesson: steps the markups themselves can answer (probes), so nothing is taken on trust. */
function lessonsOf(mc) {
  const all = () => mc.store.all();
  return {
    lessons: [{
      id: 'first-review', title: tr('lesson.review.title'), intro: tr('lesson.review.intro'), level: 'beginner',
      steps: [
        { id: 'note', text: tr('lesson.review.note'), hints: [tr('lesson.review.note.h1')], done: { probe: 'mc-note' } },
        { id: 'cloud', text: tr('lesson.review.cloud'), hints: [tr('lesson.review.cloud.h1')], done: { probe: 'mc-cloud' } },
        { id: 'reply', text: tr('lesson.review.reply'), hints: [tr('lesson.review.reply.h1')], done: { probe: 'mc-reply' } },
        { id: 'save', text: tr('lesson.review.save'), hints: [tr('lesson.review.save.h1')], done: { probe: 'mc-saved' } },
      ],
      badge: { title: tr('lesson.review.badge') },
    }],
    probes: {
      'mc-note': () => all().some((m) => m.type === 'note' || m.type === 'text'),
      'mc-cloud': () => all().some((m) => m.type === 'cloud' || m.type === 'cloudrect'),
      'mc-reply': () => all().some((m) => (m.replies || []).length > 0),
      'mc-saved': () => all().length > 0 && !mc.dirty(),
    },
  };
}

/** What MarkupCraft hands over (the doc's table, § 3). */
export function markupHost(mc) {
  const ASSIST = () => assistantPrefs(getHost({ app: 'markupcraft' }));
  const host = {
    control: mc.control,
    step: (label, fn) => fn(),   // calc sheets and reasons are not markups: no markup undo step
    file: { set: (key, json) => { mc.setShell(key, json); } },
    selection: () => {
      const id = [...mc.sel()][0];
      const m = id ? mc.store.get(id) : null;
      return m ? { kind: m.type, id: m.id, label: mc.label(m) } : null;
    },
    onSelection: (fn) => mc.onSelection(fn),
    select: (el) => { if (el && el.id) mc.select(el.id); },
    ...lessonsOf(mc),
    docinfo: {
      read: () => {   // only what MarkupCraft can count: markups, sheets (pages), layers
        const c = mc.counts(), n = mc.store.all().length;
        return { path: mc.name(), counts: { annotations: n, sheets: c.sheets, layers: c.layers } };
      },
      onChange: (fn) => mc.store.on(() => fn()),
    },
    rev: () => mc.store.undoStack.length,
    document: () => ({ docId: mc.name(), path: '', name: mc.name() }),
    dirty: () => !!mc.dirty(),   // 2026-11-09: the tab title's unsaved mark (assets/js/app-doc-title.js)
    perms: {
      get: () => ASSIST(),
      set: (rec) => { try { localStorage.setItem(ASSIST_KEY + 'markupcraft', JSON.stringify(rec)); } catch { /* private mode */ } },
    },
    undoTo: (i) => { const s = mc.store; while (s.undoStack.length > i && s.canUndo) s.undo(); },
    version: () => String(mc.store.version),
    askContext: () => ({ file: mc.name(), selection: host.selection() }),
  };
  return host;
}

/** Mounts everything and keeps the calc sheets and reasons in step with the open files (open, new set). */
export function mountMarkupShell(mc) {
  const host = markupHost(mc);
  mountShellModules(host);
  const reload = () => {
    const s = mc.shell();
    if (window.ccCalc) ccCalc.load(s.calcs || null);
    if (window.ccReasons) ccReasons.load(s.reasons || null);
    if (window.ccDocInfo) ccDocInfo.load(s.docinfo || null);
    if (window.ccLessons) ccLessons.emit('model', {});
  };
  mc.store.on((kind) => { if (window.ccLessons) ccLessons.emit('model', {}); if (window.ccTotals && kind !== 'layers') ccTotals.invalidate(); });
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  document.addEventListener('cc-docinfo-ready', reload, { once: true });
  return {
    host,
    /** The page calls this after files open: the file's calc sheets and reasons are loaded. */
    filesOpened() { reload(); if (host.fileOpened) host.fileOpened(tr('lesson.file.opened')); },
    /** The page calls this before a file is written: the sheets and reasons go into its Info entry. */
    beforeSave() { for (const [k, api] of [['calcs', window.ccCalc], ['reasons', window.ccReasons], ['docinfo', window.ccDocInfo]]) { const j = api ? api.save() : null; mc.setShell(k, j, true); } },
  };
}

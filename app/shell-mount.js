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

/** The doc's block (shell-modules.md § Mounting 2). Kept as the doc has it; browser-mount-kit.mjs compares them. */
export function mountShellModules(host) {
  const when = (api, name, go) => (window[api] ? go() : document.addEventListener('cc-' + name + '-ready', go, { once: true }));
  // EG.18 calc sheets — parameters in, drives out, saved inside the app's own file
  when('ccCalc', 'calc', () => {
    ccCalc.attach({ units: host.units /* the build's unit-table.js, optional */, params: host.params /* { get, set, list } */,
                    step: host.step, persist: (json) => host.file.set('calcs', json) });
    ccCalc.registerTools(host.control);
  });
  // EG.34 design reasons — the selection, optionally the elements that should have a reason
  when('ccReasons', 'reasons', () => {
    ccReasons.attach({ selection: host.selection, onSelection: host.onSelection, select: host.select, expected: host.expected /* optional */,
                       step: host.step, persist: (json) => host.file.set('reasons', json) });
    ccReasons.registerTools(host.control);
  });
  // EG.30 running totals — one source per kind of number the app can stand behind (null until it has one)
  when('ccTotals', 'totals', () => {
    for (const s of host.totals || []) ccTotals.source(s);              // { id, measure: cost|carbon|weight|time, label, read: () => number | null }
    if (host.statusBar) ccTotals.mount(host.statusBar);                 // optional: the app's own status bar element
    ccTotals.registerTools(host.control);
  });
  // EG.23 lessons — the app's lessons, and where it already knows something happened
  when('ccLessons', 'lessons', () => {
    for (const l of host.lessons || []) ccLessons.register(l);          // { id, title, steps: [{ id, text, hints, done: { event, match } | { probe } }] }
    for (const [name, fn] of Object.entries(host.probes || {})) ccLessons.probe(name, fn);
    ccLessons.registerTools(host.control);
    host.emit = (event, data) => ccLessons.emit(event, data);           // the app calls host.emit('tool', { name: 'line' }) where it runs a command
  });
  // AC.12 Suggest, AC.13 activity log, AC.8 Ask box — they ride on host.control, so the app hands over very little
  when('ccSuggest', 'suggest', () => {
    ccSuggest.attach({ control: host.control, rev: host.rev, step: host.step, document: host.document, perms: host.perms, ghost: host.ghost });
    ccSuggest.registerTools(host.control);
    host.fileOpened = (why) => ccSuggest.reset(why || 'A file was opened.');   // call when another file opens  // i18n-ignore: the doc's block, unchanged; modelChanged passes the translated words
  });
  when('ccActivity', 'activity', () => {
    ccActivity.attach({ control: host.control, rev: host.rev, document: host.document, undoTo: host.undoTo, history: host.history, version: host.version });
  });
  when('ccAsk', 'ask', () => {
    ccAsk.attach({ control: host.control, context: host.askContext, system: host.skillPack /* the app's skill pack text, AC.5 */ });
    ccAsk.registerTools(host.control);
  });
  // when a file opens / saves (the app's own two places):  open: ccCalc.load(file.calcs); ccReasons.load(file.reasons);
  //                                                        save: file.calcs = ccCalc.save(); file.reasons = ccReasons.save();
}


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
    rev: () => mc.store.undoStack.length,
    document: () => ({ docId: mc.name(), path: '', name: mc.name() }),
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
    if (window.ccLessons) ccLessons.emit('model', {});
  };
  mc.store.on((kind) => { if (window.ccLessons) ccLessons.emit('model', {}); if (window.ccTotals && kind !== 'layers') ccTotals.invalidate(); });
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  return {
    host,
    /** The page calls this after files open: the file's calc sheets and reasons are loaded. */
    filesOpened() { reload(); if (host.fileOpened) host.fileOpened(tr('lesson.file.opened')); },
    /** The page calls this before a file is written: the sheets and reasons go into its Info entry. */
    beforeSave() { for (const [k, api] of [['calcs', window.ccCalc], ['reasons', window.ccReasons]]) { const j = api ? api.save() : null; mc.setShell(k, j, true); } },
  };
}

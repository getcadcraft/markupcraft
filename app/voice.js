/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: stored words and tool results; the panel words them from the language file */
/**
 * voice.js — voice notes and decisions pinned on the plan (0.8 EG.66). No DOM.
 *
 * Both ride on a `note` markup, so they appear in the list, on the sheet, in the thread and in other programs as a sticky note:
 *   markup.voice    = { mime, dur (seconds), data (base64 of the recording), by, at (ISO) }   — recording only
 *   markup.decision = { text, by, at (ISO), state: 'Decided' | 'Superseded', supersededBy: '' | markup id }
 *
 * Recording only: nothing here turns speech into text (rule 35, EG.53). The words next to a voice note are typed by the person;
 * `transcript` is always null in a tool result, with a note that says why. An assistant can list a voice note (length, who,
 * when, the caption) but cannot hear it.
 */

import { nowIso } from './model.js';

export const VOICE = { maxSeconds: 120, maxChars: 700000, mimes: ['audio/webm', 'audio/ogg', 'audio/mp4', 'audio/wav'], bitsPerSecond: 24000 };
export const DECISION_STATES = ['Decided', 'Superseded'];

const line = (v, max) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const isoOr = (v, fallback) => { const s = String(v || ''); return /^\d{4}-\d{2}-\d{2}T[\d:.]+(Z|[+-]\d\d:?\d\d)$/.test(s) && !Number.isNaN(+new Date(s)) ? s : fallback; };

/** The MIME type without its codec ("audio/webm;codecs=opus" → "audio/webm"), or '' when it is not one we keep. */
export function baseMime(m) { const b = String(m || '').split(';')[0].trim().toLowerCase(); return VOICE.mimes.includes(b) ? b : ''; }

/** A voice note as stored, from anything (a file, another reviewer): bounded, base64 only. Null when it is not one. */
export function cleanVoice(v) {
  if (!v || typeof v !== 'object') return null;
  const mime = baseMime(v.mime), data = typeof v.data === 'string' ? v.data : '';
  const dur = Number(v.dur);
  if (!mime || !data || data.length > VOICE.maxChars || !/^[A-Za-z0-9+/]+={0,2}$/.test(data)) return null;
  if (!Number.isFinite(dur) || dur <= 0) return null;
  return { mime, dur: Math.round(Math.min(dur, VOICE.maxSeconds) * 10) / 10, data, by: line(v.by, 120), at: isoOr(v.at, nowIso()) };
}

export function cleanDecision(d) {
  if (!d || typeof d !== 'object') return null;
  const text = line(d.text, 1000);
  if (!text) return null;
  return { text, by: line(d.by, 120), at: isoOr(d.at, nowIso()), state: DECISION_STATES.includes(d.state) ? d.state : 'Decided', supersededBy: /^[A-Za-z0-9._-]{1,80}$/.test(d.supersededBy || '') ? d.supersededBy : '' };
}

/** Approximate seconds of audio that fit: a guard before recording starts (bytes per second at the chosen bit rate). */
export const recordingBudget = () => Math.min(VOICE.maxSeconds, Math.floor(VOICE.maxChars * 0.75 / (VOICE.bitsPerSecond / 8)));

/** A recording's bytes → the stored voice (base64), or throws a sentence when it is too long. */
export function voiceFromBytes(bytes, mime, dur, by) {
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  const data = (typeof btoa === 'function' ? btoa(bin) : Buffer.from(bytes).toString('base64'));
  const v = cleanVoice({ mime, dur, data, by, at: nowIso() });
  if (!v) throw new Error('That recording is too long or not in a format the file can keep (' + VOICE.maxSeconds + ' seconds at most).');
  return v;
}

/** The markups that are voice notes or decisions, newest first. */
export const pinned = (markups) => markups.filter((m) => m.voice || m.decision).sort((a, b) => String(b.modified).localeCompare(String(a.modified)));

/** One for a tool or an export: never the audio itself, and no transcript. */
export function pinRow(m, sheetTitle = (k) => k) {
  return {
    id: m.id, sheet: sheetTitle(m.sheet), kind: m.decision ? 'decision' : 'voice', caption: m.text || null, comment: m.comment || null, author: m.author || null,
    ...(m.decision ? { decision: { text: m.decision.text, by: m.decision.by || null, at: m.decision.at, state: m.decision.state, supersededBy: m.decision.supersededBy || null } } : {}),
    ...(m.voice ? { voice: { seconds: m.voice.dur, by: m.voice.by || null, at: m.voice.at, transcript: null } } : {}),
    created: m.created || null,
  };
}

/** Pin a decision on a sheet as a note, optionally replacing an earlier one (which becomes Superseded). One undo step. → the new markup. */
export function addDecision(store, { sheet, at, text, by, supersedes = '', style = {} }) {
  const d = cleanDecision({ text, by, state: 'Decided' });
  if (!d) throw new Error('A decision needs its words.');
  if (supersedes && !store.get(supersedes)?.decision) throw new Error('There is no decision ' + supersedes + ' to replace (decisions_list shows them).');
  let made = null;
  store.change('Decision: add', (tx) => {
    made = tx.add({ sheet, type: 'note', pts: [at], text: d.text, subject: 'Decision', author: by || '', decision: d, style: { color: '#1e8c3a', ...style } });
    if (supersedes) { const o = store.get(supersedes); tx.update(supersedes, { decision: { ...o.decision, state: 'Superseded', supersededBy: made.id } }); }
  });
  return made;
}

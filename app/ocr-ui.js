/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ocr-ui.js — File › Pages › Read text (OCR): the words on scanned pages, read on this computer (0.7.1 71.10).
 *
 * Tesseract (tesseract.js 7 + its WebAssembly core, assets/vendor/tesseract) with tessdata_fast language data
 * (assets/vendor/tessdata), both vendored: worker, core and data are given as local URLs (the manifest's ocrWorker, ocrCore,
 * ocrData (the English file; its folder has every language) through data-ocr-* on <main>), so nothing is fetched from
 * anywhere else and nothing leaves the machine. "Save for offline" keeps the engine, English and the interface language
 * (window.ccOfflineExtra, read by assets/js/app-offline.js); another language downloads when picked and then stays in this
 * browser (tesseract.js's IndexedDB cache, keyed by the data version). Studio carries every language. Nothing loads until
 * someone runs it.
 * One worker (kept between runs while the languages stay the same) reads one page at a time: pdf.js draws the page at
 * about 300 dpi (no annotations), Tesseract returns the words and its text-only PDF page; ocr.js places both on the sheet.
 * Pages that already have text, and pages already read, are skipped. A progress dialog shows the page and its share;
 * Cancel stops the worker (pages read so far stay). Each page's result goes to `onPage(file, index, entry)`, which keeps it
 * on the file (not in the markup store) and marks the file unsaved; Save writes it as an invisible text layer.
 *
 *   installOcr({ root, t, el, dialog, status, libs, files, curSheet, onPage, locale }) → { run(), busy, cancel() }
 */

import { OCR_CODES, defaultLangs, cleanLangs, hasText, ocrScale, ocrMatrix, ocrItems, mediaBox, ocrSummary } from './ocr.js';

const LS_KEY = 'markupcraft.ocr';
const STOP = Symbol('stop');

export function installOcr({ root, t, el, dialog, status, libs, files, curSheet, onPage, onResult, locale }) {   // onResult(f, index, 'ok' | 'empty' | 'failed'): per page, for the Problems list (0.8 P.6)
  let engine = null;        // { worker, langs }
  let running = null;       // { cancelled, dlg }
  const ds = root.dataset;
  const abs = (u) => new URL(u, location.href).href;
  // the manifest names the English data file (so "Save for offline" keeps only what is asked for); its folder holds every language
  const dataDir = () => abs(ds.ocrData).replace(/\/[^/]*$/, '');
  const dataVersion = () => (/\/tessdata\/([^/]+)\//.exec(abs(ds.ocrData)) || [])[1] || 'x';
  /** "Save for offline" keeps English and the interface language's data (others download when picked, then stay). */
  window.ccOfflineExtra = () => [...new Set(['eng', ...defaultLangs(locale())])].map((c) => dataDir() + '/' + c + '.traineddata.gz');
  const remembered = () => { try { const v = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); return v && Array.isArray(v.langs) ? cleanLangs(v.langs) : null; } catch { return null; } };
  const remember = (langs) => { try { localStorage.setItem(LS_KEY, JSON.stringify({ langs })); } catch { /* private window */ } };

  async function workerFor(langs, onProgress) {
    const key = langs.join('+');
    if (engine?.key === key) { engine.onProgress = onProgress; return engine.worker; }
    await stopEngine();
    const T = (await import('tesseract.js')).default;
    const e = { key, onProgress, worker: null };
    engine = e;
    e.worker = await T.createWorker(key, T.OEM.LSTM_ONLY, {
      workerPath: abs(ds.ocrWorker), corePath: abs(ds.ocrCore), langPath: dataDir(),
      // a language fetched once is kept in this browser (IndexedDB, per data version), so it also works offline afterwards
      gzip: true, workerBlobURL: false, cacheMethod: 'write', cachePath: 'markupcraft-tessdata-' + dataVersion(),
      logger: (m) => e.onProgress?.(m),
      errorHandler: () => {},
    });
    return e.worker;
  }
  // tesseract.js sends a job with an un-awaited async send(): a job that was already starting when Stop terminated its worker
  // ends as an unhandled "postMessage of null" rejection. That one, right after a Stop, is expected and kept quiet.
  let stoppedAt = 0;
  window.addEventListener('unhandledrejection', (ev) => {
    if (Date.now() - stoppedAt < 15000 && /postMessage/.test(String(ev.reason?.message || ''))) ev.preventDefault();
  });
  async function stopEngine() {
    stoppedAt = Date.now();
    const e = engine;
    engine = null;
    if (e?.worker) { try { await e.worker.terminate(); } catch { /* already gone */ } }
  }

  /** Ask which pages and which languages. → { scope, langs } | null */
  async function ask() {
    const s = curSheet();
    const langs0 = remembered() || defaultLangs(locale());
    const main = langs0.find((c) => c !== 'eng') || 'eng';
    const sel = el('select', { className: 'mc-input select-cc', id: 'mc-ocr-lang' },
      ...OCR_CODES.map((c) => el('option', { value: c, selected: c === main }, t('ocr.lang.' + c))));
    const eng = el('input', { type: 'checkbox', id: 'mc-ocr-eng', checked: langs0.includes('eng') || main === 'eng' });
    const engRow = el('label', { className: 'mc-check', for: 'mc-ocr-eng' }, eng, ' ', t('ocr.also_english'));
    const syncEng = () => { engRow.hidden = sel.value === 'eng'; };
    sel.addEventListener('change', syncEng); syncEng();
    const scope = el('select', { className: 'mc-input select-cc', id: 'mc-ocr-scope' },
      el('option', { value: 'sheet' }, t('ocr.scope.sheet')),
      el('option', { value: 'file', selected: true }, t('ocr.scope.file', { file: s?.file.name || '' })),
      el('option', { value: 'all' }, t('ocr.scope.all')));
    const r = await dialog({
      title: t('ocr.h'), text: t('ocr.text'),
      body: [el('label', { className: 'mc-k', for: 'mc-ocr-scope' }, t('ocr.scope')), scope,
        el('label', { className: 'mc-k', for: 'mc-ocr-lang' }, t('ocr.lang')), sel, engRow,
        el('p', { className: 'mc-hint' }, t('ocr.note'))],
      buttons: [['cancel', t('dlg.cancel')], ['go', t('ocr.go'), 'btn-plot']], submit: 'go',
    });
    if (r.key !== 'go') return null;
    const langs = cleanLangs(sel.value === 'eng' ? ['eng'] : [sel.value, ...(eng.checked ? ['eng'] : [])]);
    remember(langs);
    return { scope: scope.value, langs };
  }

  function progressDialog() {
    const bar = el('progress', { className: 'mc-ocr-bar', max: '1', value: '0' });
    const line = el('p', { className: 'mc-dlg-text', role: 'status', 'aria-live': 'polite' }, t('ocr.loading'));
    const stop = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { ocrCancel: '' } }, t('ocr.cancel'));
    const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'mc-ocr-h', dataset: { ocrProgress: '' } },
      el('div', { className: 'mc-dlg-form' },
        el('div', { className: 'mc-dlg-head' }, el('h2', { className: 'mc-h', id: 'mc-ocr-h' }, t('ocr.h'))),
        el('div', { className: 'mc-dlg-body' }, line, bar),
        el('div', { className: 'mc-dlg-foot' }, stop)));
    dlg.addEventListener('cancel', (e) => { e.preventDefault(); cancel(); });
    stop.addEventListener('click', () => cancel());
    root.append(dlg);
    dlg.showModal();
    return { dlg, set: (text, v) => { line.textContent = text; bar.value = Math.max(0, Math.min(1, v)); }, close: () => { dlg.close(); dlg.remove(); } };
  }

  function cancel() {
    if (!running || running.cancelled) return;
    running.cancelled = true;
    running.ui?.set(t('ocr.stopping'), running.at || 0);
    running.stop();   // a terminated worker never answers: the run stops waiting at once
    stopEngine();   // ends the page being read at once; the next run starts a new worker
  }

  async function run() {
    if (running) return;
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    const choice = await ask();
    if (!choice) return;
    const list = choice.scope === 'sheet' ? [{ f: s.file, index: s.page.index }]
      : (choice.scope === 'file' ? [s.file] : files()).flatMap((f) => f.pages.map((pg) => ({ f, index: pg.index })));
    const { pdfjs } = await libs();
    const job = { cancelled: false, at: 0, ui: null, stop: null };
    const stopped = new Promise((resolve) => { job.stop = () => resolve(STOP); });
    // a job left behind by Stop may still fail later (its worker is gone): that is expected, not an error
    const orStop = (p) => { p.catch(() => {}); return Promise.race([p, stopped]); };
    job.ui = progressDialog();
    running = job;
    const done = { read: 0, words: 0, hadText: 0, already: 0, empty: 0, failed: 0 };
    try {
      for (let k = 0; k < list.length && !job.cancelled; k++) {
        const { f, index } = list[k];
        const title = f.pages[index]?.title || f.name;
        const share = (p) => (k + p) / list.length;
        job.at = share(0);
        if (f.ocr?.has(index)) { done.already++; continue; }
        const proxy = await f.doc.getPage(index + 1);
        if (hasText((await proxy.getTextContent()).items)) { done.hadText++; continue; }
        job.ui.set(t('ocr.reading', { sheet: title, i: k + 1, n: list.length }), share(0));
        const vp1 = proxy.getViewport({ scale: 1 });
        const vp = proxy.getViewport({ scale: ocrScale(vp1.width, vp1.height) });
        const c = document.createElement('canvas');
        const cw = Math.ceil(vp.width), ch = Math.ceil(vp.height);
        c.width = cw; c.height = ch;
        await proxy.render({ canvas: c, canvasContext: c.getContext('2d'), viewport: vp, background: '#ffffff', annotationMode: pdfjs.AnnotationMode.DISABLE }).promise;
        if (job.cancelled) break;
        const worker = await orStop(workerFor(choice.langs, (m) => {
          if (job.cancelled) return;
          if (m.status === 'recognizing text') job.ui.set(t('ocr.reading', { sheet: title, i: k + 1, n: list.length }) + ' ' + Math.round(m.progress * 100) + ' %', share(m.progress));   // i18n-ignore: tesseract.js's status code, not shown
          else if (/load/.test(m.status || '')) job.ui.set(t('ocr.loading'), share(0));
        }));
        if (job.cancelled || worker === STOP) break;
        if (await orStop(worker.setParameters({ user_defined_dpi: String(Math.round(72 * vp.scale)) })) === STOP) break;
        let data;
        try {
          const r = await orStop(worker.recognize(c, { pdfTextOnly: true }, { text: false, blocks: true, pdf: true }));
          if (r === STOP) break;
          ({ data } = r);
        }
        catch (e) { if (job.cancelled) break; done.failed++; onResult?.(f, index, 'failed'); console.warn(e); continue; }
        finally { c.width = 0; c.height = 0; }
        const items = ocrItems(data.blocks, vp.transform);
        const mb = data.pdf ? mediaBox(data.pdf) : null;
        if (!items.length || !mb) { done.empty++; onResult?.(f, index, 'empty'); onPage(f, index, { items: [], pdf: null, matrix: null, langs: choice.langs }); continue; }
        onPage(f, index, { items, pdf: new Uint8Array(data.pdf), matrix: ocrMatrix(vp.transform, cw, ch, mb[0], mb[1]), langs: choice.langs, ...ocrSummary(items) });
        done.read++; done.words += items.length; onResult?.(f, index, 'ok');
      }
    } catch (e) {
      console.warn(e);
      done.failed++;
      if (!job.cancelled) await stopEngine();
    } finally {
      job.ui.close();
      running = null;
    }
    const parts = [t(job.cancelled ? 'ocr.done.stopped' : 'ocr.done', { n: done.read, words: done.words })];
    if (done.hadText) parts.push(t('ocr.done.had_text', { n: done.hadText }));
    if (done.already) parts.push(t('ocr.done.already', { n: done.already }));
    if (done.empty) parts.push(t('ocr.done.empty', { n: done.empty }));
    if (done.failed) parts.push(t('ocr.done.failed', { n: done.failed }));
    if (done.read) parts.push(t('ocr.done.save'));
    status(parts.join(' '));
    return done;
  }

  return { run, cancel, get busy() { return !!running; } };
}

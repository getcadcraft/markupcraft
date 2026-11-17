---
title: Trovare testo nei disegni
summary: Cercare le parole in ogni tavola, passare a ciascuna occorrenza e racchiuderle tutte con una nuvola in un solo passaggio.
keywords: trova, cerca, testo, parola, parole, ctrl f, cercare, nota, nota chiave, callout, nuvola su tutto, evidenzia occorrenze, ocr, scansione, scansionato, leggi testo, seleziona testo, copia testo, tesseract
from: 3435c9eb
---

{{ui:Trova testo}}, in cima al pannello {{ui:Tavole}}, cerca le parole disegnate sulle tavole stesse. {{ui:Cerca tavole}} sotto di esso cerca solo i nomi delle tavole.

## Trovare

1. Premere {{key:Mod+F}}, oppure aprire {{ui:Trova testo}}.
2. Digitare le parole, come `hood` o `verify in field`.
3. Scegliere {{ui:Tutte le tavole}} o {{ui:Questa tavola}}, e spuntare {{ui:Maiuscole/minuscole}} o {{ui:Parole intere}} se servono.
4. Premere {{key:Enter}} oppure scegliere {{ui:Trova}}.

Risultato: ogni occorrenza è elencata con il numero della sua tavola e le parole intorno, ed è evidenziata in giallo sulla tavola. Scegliere un'occorrenza per aprire la sua tavola e ingrandirla su di essa.

Una frase viene trovata anche quando il disegno la divide su due pezzi di testo o su due righe.

## Racchiudere ogni occorrenza

Scegliere {{ui:Nuvola su tutto}}. Una nuvola di revisione circonda ogni occorrenza dell'elenco, su ogni tavola, con "Trovato: <parole cercate>" come commento. Con {{key:Mod+Z}} si rimuovono tutte.

## Leggere il testo di una scansione (OCR)

Una tavola scansionata è solo un'immagine: finché le sue parole non vengono lette, non c'è nulla da trovare. Quando il conteggio indica che alcune tavole non hanno testo, scegliere {{ui:Leggi il testo (OCR)…}} sotto di esso, oppure {{ui:Pagine}} › {{ui:Leggi il testo (OCR)…}}.

1. Scegliere le pagine: questa tavola, ogni pagina del file oppure ogni pagina di tutti i file aperti.
2. Scegliere la lingua del testo. {{ui:Anche inglese}} legge anche le parole inglesi.
3. Scegliere {{ui:Leggi testo}}. Una barra mostra la pagina in lettura; {{ui:Stop}} termina l'esecuzione e mantiene le pagine già lette.

Risultato: le parole si possono trovare, selezionare e copiare come ogni altro testo. Tutto viene eseguito sul proprio computer: non viene inviato nulla. Funziona senza connessione in Studio, e nel browser una volta salvata l'app per l'uso offline (in inglese e nella lingua dell'interfaccia) oppure dopo che una lingua è stata usata almeno una volta. Le pagine che hanno già testo restano invariate.

Al salvataggio, le parole vengono inserite nel PDF come testo invisibile dietro l'immagine, separate dalle annotazioni, così anche altri programmi PDF possono cercarle e copiarle. Finché non si salva, il file risulta come non salvato.

## Selezionare e copiare il testo

Scegliere {{ui:Altro}} › {{ui:Seleziona testo da copiare}}. Trascinare da una parola all'altra per selezionare le parole tra di esse, trascinare dal foglio vuoto per selezionare le parole in un riquadro, oppure fare doppio clic su una parola. {{key:Mod+A}} seleziona ogni parola della tavola. {{key:Mod+C}} copia le parole mantenendo le righe. Qualsiasi altro strumento termina la selezione.

## Da sapere

- Anche i disegni le cui lettere sono tracciate come linee non hanno testo; leggerli come immagine funziona meglio con testo stampato, come un libro scansionato o un capitolato.
- Il lettore è Tesseract, integrato nell'app con i dati linguistici per l'inglese e per le lingue dell'app. Al primo avvio viene caricato (circa 6 MB, di più per una seconda lingua).
- La qualità della lettura dipende dalla scansione: pagine pulite a 300 dpi vengono lette quasi parola per parola; scansioni vecchie, sbiadite o a bassa risoluzione perdono più parole.
- L'elenco mostra le prime 500 occorrenze; {{ui:Nuvola su tutto}} racchiude fino a 2,000.
- Le occorrenze vengono cancellate alla chiusura del set e, per un file, quando si cambiano le sue pagine.

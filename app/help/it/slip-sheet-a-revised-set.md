---
title: Sostituisci con un set rivisto
summary: Aprire la nuova emissione di un set di tavole accanto a quella vecchia e portare ogni annotazione aperta sulla tavola con lo stesso numero.
keywords: sostituzione tavola, slip sheet, set rivisto, nuova emissione, revisione, sostituisce, sostituito, riporta avanti, sostituisci tavole, riemissione, addendum, bollettino
from: e15163a0
---

Quando arriva una nuova emissione dei disegni, la sostituzione delle tavole sposta la revisione sulla nuova: ogni nuova tavola riceve le annotazioni della vecchia tavola con lo stesso numero, e la vecchia tavola viene timbrata "Sostituita".

## Sostituisci

1. Aprire il set attuale, con le proprie annotazioni.
2. Scegliere {{ui:Pagine}}, poi {{ui:Sostituisci con un set rivisto…}}, e selezionare i nuovi PDF. Si aprono accanto al vecchio set.
3. La finestra elenca ogni nuova tavola e la vecchia tavola che sostituisce. Deselezionare una riga per lasciare le annotazioni di quella tavola dove sono. Le tavole con un nuovo numero non hanno nulla da riportare.
4. Scegliere se lasciare le annotazioni chiuse (Accettato, Rifiutato, Completato) sulle vecchie tavole, e se timbrare le vecchie tavole.
5. Scegliere {{ui:Riporta le annotazioni}}.

Risultato: le annotazioni compaiono sulle nuove tavole nello stesso punto, con le loro risposte, stati e autori. Una voce dell'elenco punti da completare si sposta sulla nuova tavola e mantiene il proprio numero. Le vecchie tavole conservano le loro annotazioni come registro, sotto un timbro rosso "Sostituita". La barra di stato riassume ciò che è stato spostato.

{{ui:Apri solo i file}} apre il nuovo set senza riportare nulla, per esempio per confrontare prima. Vedi [Confronta due revisioni](topic:compare-revisions).

## Come vengono abbinate le tavole

- **Per numero di tavola**, letto come lo mostra l'elenco delle tavole: un numero digitato con {{ui:Rinomina tavola}}, l'etichetta di pagina del PDF oppure il cartiglio. Maiuscole, spazi, punti e trattini non contano: "A-101" corrisponde a "a101".
- Se due file aperti hanno una tavola con quel numero, viene sostituita la più recente, così si può sostituire emissione dopo emissione.
- **I set scansionati** non hanno numeri da leggere. Quando un nuovo file non ne ha, le sue pagine vengono abbinate in ordine di pagina a un file aperto con lo stesso numero di pagine. Controllare quelle righe prima di riportare.

## Utile sapere

- Un solo {{key:Mod+Z}} annulla l'intera sostituzione: le copie, i timbri e le voci spostate dell'elenco punti. I nuovi file restano aperti.
- Se una nuova tavola ha un formato diverso, le annotazioni vengono scalate con la pagina, e la barra di stato dice quante controllarne.
- La scala di una vecchia tavola viene riportata quando la nuova ha lo stesso formato e non ne ha una.
- I commenti creati da altri programmi restano sulle vecchie tavole: qui sono in sola lettura.
- Salvare i nuovi file per mantenere le annotazioni riportate. Vedi [Salva il PDF con annotazioni](topic:save-the-marked-up-pdf).

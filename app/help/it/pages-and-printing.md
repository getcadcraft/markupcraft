---
title: Stampare e modificare le pagine di un PDF
summary: Stampare le tavole con le loro annotazioni, e ruotare, spostare, inserire, eliminare o estrarre le pagine di un PDF aperto.
keywords: stampa, stampante, carta, pagine, pagina, ruota, gira, riordina, sposta pagina, inserisci, aggiungi pagina, pagina vuota, elimina pagina, rimuovi pagina, estrai, dividi, operazioni pagina
from: 81832d9b
---

Il menu {{ui:Pagine}} nel gruppo {{ui:File}} lavora sul PDF a cui appartiene la tavola aperta. Il PDF su questo computer non viene mai modificato: le modifiche fanno parte della copia che si salva.

## Stampa

1. Premere {{key:Mod+P}}, oppure scegliere {{ui:Pagine}}, poi {{ui:Stampa…}}.
2. Quando è aperta più di una tavola, scegliere cosa stampare: {{ui:Questa tavola}}, ogni pagina di questo file, l'intero set, oppure le pagine digitate (come `1-3, 5`).
3. Scegliere {{ui:Stampa}}. Si apre la finestra di stampa del browser: scegliere lì la stampante, la carta e la scala.

Le annotazioni vengono stampate come appaiono sulla tavola: sono disegnate nelle pagine della copia che va alla stampante. I commenti creati da altri programmi vengono stampati come indica il loro PDF.

:::safari firefox
Se il browser non può stampare dall'interno della pagina, le tavole si aprono come PDF in una nuova scheda. Stampare da lì.
:::

## Ruotare una pagina

Scegliere {{ui:Pagine}}, poi {{ui:Ruota la pagina in senso orario}} oppure {{ui:Ruota la pagina in senso antiorario}}. La tavola aperta gira di un quarto di giro. Le sue annotazioni restano dove erano sul disegno, e il testo digitato gira con la pagina, in modo da restare leggibile dritto.

## Spostare una pagina

Scegliere {{ui:Pagine}}, poi {{ui:Sposta la pagina prima}} oppure {{ui:Sposta la pagina dopo}}. La tavola aperta scambia il posto con la vicina nel proprio PDF. Le sue annotazioni, la sua scala e il suo numero di tavola la seguono.

## Inserire pagine

- {{ui:Inserisci pagine da un PDF…}} inserisce ogni pagina di un altro PDF dopo la tavola aperta.
- {{ui:Inserisci una pagina vuota}} aggiunge una pagina vuota della stessa dimensione dopo la tavola aperta, per schizzi e note. In un set creato con {{ui:Nuovo}}, ha anche la griglia del set.
- In un set creato con {{ui:Nuovo}}, {{ui:Aggiungi una pagina vuota}} sotto l'elenco {{ui:Tavole}} aggiunge un'altra pagina come le altre, alla fine. Vedi [Iniziare con pagine vuote](topic:open-a-plan-set#start-with-blank-pages).

Le pagine inserite ricevono il loro numero di pagina come etichetta, finché non le si rinomina. Vedi [Rinominare una tavola](topic:open-a-plan-set#rename-a-sheet).

## Eliminare pagine

1. Scegliere {{ui:Pagine}}, poi {{ui:Elimina pagine…}}.
2. Digitare i numeri di pagina di questo PDF, per esempio `3` o `2-4`. Viene compilata la pagina della tavola aperta.
3. Scegliere {{ui:Elimina pagine}}. Se quelle pagine contengono annotazioni, MarkupCraft dice quante sono e chiede di nuovo.

Un PDF conserva almeno una pagina. Per eliminare un intero file, chiudere il set e aprire i file che servono ancora.

## Estrarre pagine

Scegliere {{ui:Pagine}}, poi {{ui:Estrai pagine…}}, e digitare le pagine. Vengono scaricate come nuovo PDF chiamato "<file> (pages 1-3).pdf", con le loro annotazioni come commenti modificabili. Il file aperto resta com'è.

## Da sapere

- **Annulla si ferma a una modifica di pagina.** {{key:Mod+Z}} annulla le annotazioni disegnate dopo di essa, ma non la modifica di pagina né ciò che la precede. Chiudere senza salvare per ricominciare dal PDF originale.
- I numeri di pagina contano le pagine di un solo PDF, non dell'intero set. Spostare una pagina la mantiene all'interno del proprio file.
- Le pagine modificate sono lavoro non salvato: {{ui:Salva}} scarica la copia riorganizzata, e uscendo viene chiesta conferma.

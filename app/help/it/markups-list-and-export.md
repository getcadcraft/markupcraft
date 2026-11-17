---
title: Elenco delle annotazioni, filtri ed esportazioni
summary: Vedere ogni annotazione dell'insieme, filtrare per tavola, autore, stato e tipo, passare a una di esse ed esportare l'elenco come CSV o BCF.
keywords: elenco annotazioni, elenco, riepilogo, xlsx, cartella di lavoro, report pdf, importa bcf, filtro, ordina, rapporto, esporta, csv, foglio di calcolo, bcf, bcfzip, segnalazioni, elenco commenti, passa
from: 6c70261e
---

## Aprire l'elenco

Scegliere la scheda {{ui:Annotazioni}} a destra. Ogni annotazione di ogni file aperto è elencata, in ordine di tavola e poi nell'ordine in cui è stata creata. Ogni riga mostra:

- un'icona nel colore dell'annotazione, il suo numero di punch se ne ha uno ("#4"), e il suo oggetto,
- il suo testo, la dicitura del timbro o il valore misurato, e il suo commento,
- la tavola, l'autore e la data,
- il suo stato (oppure "Sola lettura" per i commenti che arrivano con il file), e un conteggio delle risposte quando ne ha.

La riga sopra l'elenco le conta: "38 annotazioni", oppure "12 di 38 annotazioni" quando è filtrato.

## Passare a un'annotazione

Fare clic su una riga. MarkupCraft mostra quella tavola, seleziona l'annotazione e fa zoom su di essa quando è fuori schermo o troppo piccola per essere vista. {{ui:Proprietà}} ne mostra dettagli e discussione quando si torna a quella scheda.

## Filtrare

Quattro menu sopra l'elenco. Si combinano.

| Menu | Scelte |
|---|---|
| {{ui:Tavola}} | Tutte le tavole, Questa tavola (segue lo spostamento tra le tavole), oppure qualsiasi tavola con annotazioni |
| {{ui:Autore}} | Chiunque, oppure ciascun autore dell'insieme |
| {{ui:Stato}} | Qualsiasi stato, Aperto, Accettato, Rifiutato, Completato |
| {{ui:Tipo}} | Qualsiasi tipo, oppure ciascun tipo di annotazione dell'insieme |

Esempi:

- Cosa è ancora aperto su questa tavola: {{ui:Tavola}} "Questa tavola", {{ui:Stato}} "Aperto".
- I commenti di un consulente: {{ui:Autore}} il suo nome.
- Tutte le misure: {{ui:Tipo}} "Lunghezza" o "Area".

L'elenco mostra fino a 2000 righe; negli insiemi molto grandi, restringerlo con un filtro.

## Esportare in CSV

Scegliere {{ui:CSV}} in alto nella scheda. Si ottiene "<nome> markups.csv" con **le annotazioni così come sono filtrate**, una per riga, con queste colonne:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- La colonna "Text" contiene le parole delle caselle di testo e dei callout, la dicitura di un timbro o il nome di un gruppo di conteggio.
- La colonna "Measurement" contiene le lunghezze, "area, perimeter" per le aree, e "group: n" per i conteggi.
- Le date sono timestamp completi in UTC.

Per esportare tutto, riportare prima ogni filtro alla sua prima scelta.

## Una legenda sulla tavola

{{ui:Legenda}} nella scheda {{ui:Annotazioni}} mette una legenda in alto a destra di ciò che si vede: un riquadro che elenca ogni tipo di annotazione sulla tavola (per oggetto e colore, come "Nuvola", "Domanda" o "Prese") con quante ce ne sono. Un gruppo di conteggio conta i suoi segni. La legenda continua a contare man mano che si disegna, si sposta o si elimina; si stampa e si salva con i conteggi di quel momento.

Spostarla e ridimensionarla come qualsiasi annotazione. Nelle sue {{ui:Proprietà}}, cambiare il suo {{ui:Titolo}}, oppure impostare {{ui:Conteggi}} su {{ui:L'intero set}} per contare ogni tavola. Spazi, altre legende e commenti di altri programmi non vengono contati.

## Colonne proprie e ordinamento

{{ui:Colonne}} nella scheda {{ui:Annotazioni}} aggiunge colonne proprie a ogni annotazione: un **testo**, una **scelta** (come Lavorazione: Meccanica, Elettrica, Idraulica), un **numero** (come Costo) o una **data**. Dare a ciascuna un nome, scegliere il tipo, elencare le scelte per una colonna di scelta, e scegliere {{ui:Salva le colonne}}.

- Compilarle in {{ui:Proprietà}}: ogni colonna ha un campo lì. Una colonna numero accetta solo numeri, una colonna data solo una data.
- L'elenco mostra i valori sotto ciascuna annotazione; il filtro {{ui:Colonna}} sceglie un valore (oppure le annotazioni dove è vuota), e {{ui:Ordina}} ordina l'elenco per una colonna, per autore, stato, tipo o data, invece che per tavola.
- Le esportazioni CSV e XLSX riportano le colonne dopo quelle abituali. Le colonne sono salvate nel PDF e tornano quando lo si riapre.

## Esportare un riepilogo: cartella di lavoro o PDF

- {{ui:XLSX}} scarica "<nome> markup summary.xlsx" con tre fogli: **Annotazioni** (una riga per annotazione elencata, con le stesse colonne del CSV), **Per tavola** (quante annotazioni ha ogni tavola, aperte e chiuse, e quante per tipo, con i totali) e **Punch list** (quando ci sono voci di punch).
- {{ui:PDF}} scarica "<nome> markup summary.pdf": un rapporto da stampare o inviare, con il nome dell'insieme, la data e una tabella delle annotazioni elencate (numero, tavola, tipo, oggetto, testo o commento, valore misurato, autore, stato e ultima risposta). Il testo lungo va a capo; l'intestazione della tabella si ripete in ogni pagina.

Entrambi usano l'elenco così come è filtrato, quindi filtrare prima per riportare una sola tavola, un solo autore o solo le voci aperte.

## Esportare in BCF

Scegliere {{ui:BCF}}. MarkupCraft fa un'immagine di ogni annotazione elencata sulla sua tavola ("Making snapshots for BCF (3 of 12)…", cioè "Creazione di istantanee per BCF (3 di 12)…"), poi scarica "<nome> markups.bcfzip". Ogni annotazione diventa un argomento BCF con il suo stato, l'autore, le date, le risposte come commenti, l'assegnatario e la scadenza dalla sua voce di punch, e l'istantanea.

Usarlo per portare i commenti di revisione dei disegni negli strumenti di coordinamento BIM che leggono BCF. Cosa si trasferisce e cosa no è descritto in [Basi di BCF](topic:bcf-basics).

## Importare BCF

{{ui:Importa BCF}} legge un file .bcfzip (o .bcf) da uno strumento BIM:

- Le segnalazioni nate dall'esportazione BCF di MarkupCraft ritrovano le loro annotazioni: le nuove risposte vengono aggiunte alla discussione, e viene impostato un nuovo stato (Chiuso conta come Completato). Le risposte già presenti non vengono aggiunte due volte.
- Le altre segnalazioni diventano note, con titolo, descrizione, autore e commenti. Una nota va sulla tavola il cui numero o nome è indicato dalle etichette della segnalazione, altrimenti sulla tavola aperta; una telecamera BIM non ha posto su carta, quindi tali note vengono impilate in alto a sinistra della tavola perché si possano spostare.

L'intera importazione è un solo passo: {{key:Mod+Z}} la annulla. Consultare [Basi di BCF](topic:bcf-basics).

## Cosa non fa ancora l'elenco

- Raggruppare l'elenco (in alternativa, ordinare e poi filtrare).
- Modificare i valori nell'elenco (modificare in {{ui:Proprietà}}; i campi punch sono modificabili nella scheda {{ui:Punch list}}).

---
title: I file che MarkupCraft apre e salva
summary: PDF in ingresso, una copia PDF annotata in uscita, più file CSV, BCF e della cassetta degli strumenti; dove va ciascuno, online e offline.
keywords: pdf, aprire, salvare, esportare, scaricare, csv, bcf, bcfzip, json, cassetta degli strumenti, tipi di file, formati, caricare, password, cifrato
from: b3045b4c
---

## Cosa apre MarkupCraft

| File | Come | Cosa succede |
|---|---|---|
| PDF (`.pdf`) | {{ui:Apri}}, {{key:Mod+O}}, oppure rilasciare sull'area della tavola. Più file insieme vanno bene. | Ogni pagina diventa una tavola. Le annotazioni già presenti nel file vengono rilette (sotto). |
| Cassetta degli strumenti (`.json`) | Scheda {{ui:Strumenti}}, poi {{ui:Importa}} | Gli strumenti vengono aggiunti alla cassetta. Vedere [La cassetta degli strumenti](topic:tool-chest). |

Qualsiasi altro file viene rifiutato con "MarkupCraft apre file PDF." nella barra di stato. Se si rilascia un insieme misto, i PDF si aprono e la barra di stato indica quanti file non erano PDF.

### Annotazioni già presenti in un PDF

- **Le annotazioni salvate da MarkupCraft** tornano esattamente: tipo, stile, autore, date, stato, risposte, numero di punch, la scala della tavola e gli eventuali nomi di tavola digitati.
- **I commenti di altri programmi PDF** vengono letti a loro volta. Rettangoli, ellissi, linee e frecce, polilinee, poligoni, tratti a mano libera (penna), caselle di testo e note adesive diventano normali annotazioni MarkupCraft modificabili. Anche le loro risposte e i loro stati di revisione vengono importati.
- **Tutto il resto** (evidenziazioni di testo fatte selezionando il testo, timbri di altri programmi e altri tipi) viene mostrato com'è, contrassegnato come sola lettura. Si può selezionare, vedere nell'elenco delle annotazioni e rispondere, ma non spostare, modificare o eliminare.
- I collegamenti e i campi modulo vengono lasciati stare e non sono elencati.
- Una scala salvata da un altro programma (un viewport di misura) viene usata come scala della tavola quando MarkupCraft ne comprende l'unità.

### File che non si aprono

- Un PDF che richiede una password: '"nome" richiede una password per essere aperto. Aprire una copia non protetta.'
- Un file danneggiato o che non è davvero un PDF: 'Impossibile leggere "nome" come PDF (…)'.
- Un PDF che si apre ma è protetto da modifiche si apre normalmente. Il salvataggio viene rifiutato (vedere sotto).

Quando si aprono più file insieme, quelli che funzionano si aprono e una finestra intitolata "Alcuni file non si sono aperti" elenca gli altri.

## Cosa salva MarkupCraft

Il salvataggio è sempre un **download** di un nuovo file. Una pagina web non può sovrascrivere un file sul computer e MarkupCraft non modifica mai l'originale.

| Scelta | Risultato | Note |
|---|---|---|
| {{ui:Salva}} ({{key:Mod+S}}) | "<nome> (marked up).pdf" | Una copia del PDF originale con ogni annotazione scritta come vero commento PDF. Salvare di nuovo un file "(marked up)" mantiene lo stesso nome; non diventa mai "(marked up) (marked up)". Vedere [Salvare il PDF annotato](topic:save-the-marked-up-pdf). |
| Scheda {{ui:Annotazioni}}, poi {{ui:CSV}} | "<nome> markups.csv" | Le annotazioni come elencate (si applicano i filtri). |
| Scheda {{ui:Annotazioni}}, poi {{ui:BCF}} | "<nome> markups.bcfzip" | BCF 2.1 per gli strumenti di coordinamento BIM, un'istantanea per annotazione. Vedere [Nozioni di base su BCF](topic:bcf-basics). |
| Scheda {{ui:Punti da completare}}, poi {{ui:Esporta CSV}} | "<nome> punch list.csv" | Le voci di punch in ordine di numero. |
| Scheda {{ui:Strumenti}}, poi {{ui:Esporta}} | "MarkupCraft tool chest.json" | La cassetta degli strumenti, da condividere o conservare. |

"<nome>" è il nome del primo PDF aperto senza ".pdf".

I file CSV si aprono in qualsiasi foglio di calcolo. Sono in UTF-8 con il marcatore che i fogli di calcolo cercano, così i nomi con accenti vengono resi correttamente. Una cella che inizia con =, +, - o @ riceve un apostrofo iniziale, così un foglio di calcolo non la esegue mai come formula.

## Dove vanno i download

Decide il browser: di solito la cartella Download, oppure chiede ogni volta se è impostato così. Vedere [Browser e computer](common:browsers#what-differs-between-browsers).

:::chromium
Quando si salvano insieme tutti i file modificati di un set, Chrome ed Edge possono chiedere se questo sito può scaricare più file. Scegliere {{ui:Consenti}}, altrimenti si ottiene solo la prima copia.
:::

:::safari
Su un iPad, Safari chiede prima di ogni download e mette il file nell'app File, in Download. Su un Mac va nella cartella impostata nelle impostazioni di Safari.
:::

## Online e offline

- **I PDF non lasciano mai questo computer**, online o offline. Non c'è alcun caricamento da nessuna parte.
- Il lettore PDF viene caricato la prima volta che si apre un PDF ("Caricamento del lettore PDF…") e il programma di scrittura PDF la prima volta che si salva ("Caricamento del programma di scrittura PDF…") o si apre un file che contiene già commenti.
- Con una connessione, entrambi si caricano dal sito.
- **Per lavorare senza connessione,** scegliere {{ui:Salva per l'uso offline}} nella barra in alto mentre si è online. Il pulsante conta "Salvataggio di N su M" e poi indica "Pronto per l'uso offline". Quella copia comprende il lettore PDF e il programma di scrittura PDF (circa 6 MB in tutto) e questa guida, quindi in seguito aprire, annotare e salvare PDF funziona offline in questo browser.
- Se il pulsante indica "Salvataggio non riuscito", alcuni file non sono stati scaricati: controllare la connessione e fare di nuovo clic. Se indica "Offline non disponibile", questa finestra del browser non può conservare una copia offline (finestre private e alcuni computer gestiti); usare una finestra normale.
- Per aggiornare o eliminare la copia, fare clic su "Pronto per l'uso offline" e scegliere "Salva di nuovo (scarica la versione più recente)" o "Rimuovi la copia offline". Altro in [Lavorare offline](common:offline).

:::offline
Si è offline. Se la barra in alto indica "Pronto per l'uso offline", tutto funziona, salvataggio compreso. In caso contrario e se in questa scheda non si è ancora salvato, {{ui:Salva}} può fallire con "Impossibile caricare il programma di scrittura PDF". Le annotazioni sono ancora nella scheda: tenerla aperta, tornare online e scegliere di nuovo {{ui:Salva}}.
:::

## Da sapere

- I set di tavole grandi richiedono tempo per aprirsi: MarkupCraft legge il testo di ogni pagina per trovare i numeri di tavola. La barra di stato conta le tavole man mano.
- Aprire due volte lo stesso PDF aggiunge due volte le sue tavole. In tal caso chiudere il set e riaprirlo.
- {{ui:Chiudi}} chiude tutti i file aperti insieme. Se alcuni hanno annotazioni non salvate, chiede: {{ui:Annulla}}, {{ui:Chiudi senza salvare}} o {{ui:Salva prima le copie}}.
- Il salvataggio nel cloud non è ancora disponibile e non esistono ancora versioni desktop. Conservare i PDF con gli altri file di progetto ed eseguirne il backup come di consueto. Vedere [Dove vanno i file](common:your-files).

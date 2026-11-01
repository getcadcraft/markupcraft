---
title: Primi passi con MarkupCraft
summary: Aprire un set di tavole, mettere la prima nuvola e il primo callout su una tavola e salvare una copia annotata.
keywords: inizio, primi passi, aprire pdf, revisione, annotazione, penna rossa, set di tavole, tutorial, guida rapida
from: 0b1aae4e
---

MarkupCraft serve a rivedere i disegni: si aprono set di tavole in PDF, si annotano con nuvole, callout, testo, timbri e misure, si tiene traccia dello stato di ogni commento e si salva una copia del PDF che qualsiasi visualizzatore PDF può mostrare.

Funziona nel browser. I PDF vengono aperti sul proprio computer e **non vengono mai caricati**. Salvare scarica una nuova copia; il file originale non viene modificato.

:::note
MarkupCraft è in sviluppo. La guida descrive la versione in uso. Ciò che non fa ancora è elencato in [Cosa non è ancora implementato](topic:not-built-yet).
:::

## Cosa serve

- Una versione recente di Chrome, Edge, Firefox o Safari su un computer Mac, Windows o Linux, oppure Safari o Chrome su un iPad. Vedere [Browser e computer](common:browsers).
- Uno o più file PDF. Un intero set di tavole può essere un solo PDF o molti.
- Un mouse con rotellina è la soluzione più comoda. Funziona anche un trackpad, e anche un touch screen (vedere [Rivedere su iPad o touch screen](topic:review-on-a-tablet)).

## La prima revisione in dieci passi

1. Aprire MarkupCraft nel browser. Al centro della schermata compare "Aprire un set di tavole".
2. Scegliere {{ui:Apri PDF}} (oppure {{ui:Apri}} all'estremità sinistra della barra degli strumenti, oppure premere {{key:Mod+O}}), selezionare uno o più PDF e confermare.
   È anche possibile trascinare i PDF da {{pick:mac=Finder|windows=Esplora file|linux=il file manager}} e rilasciarli sull'area della tavola.
   La prima volta la barra di stato in basso indica "Caricamento del lettore PDF…". Poi ogni pagina diventa una tavola nell'elenco {{ui:Tavole}} a sinistra e la prima tavola riempie il centro.
3. Fare clic su una tavola nell'elenco per mostrarla. Girare la rotellina del mouse sulla tavola per ingrandire dove si trova il puntatore.
4. Scegliere {{ui:Nuvola}} nel gruppo {{ui:Rivedi}} della barra degli strumenti (oppure premere {{key:C}}).
   La prima volta che si sceglie uno strumento di disegno, MarkupCraft chiede il nome. Digitarlo e scegliere {{ui:Salva}}. Ogni annotazione lo registra. (Altro in [Impostare il nome dell'autore](topic:set-your-name).)
5. Trascinare un riquadro intorno all'area da segnalare. Compare una nuvola di revisione rossa, già selezionata.
6. Scegliere {{ui:Callout}} nel gruppo {{ui:Annota}} (oppure premere {{key:K}}). Premere sull'elemento indicato, trascinare dove deve andare il testo e rilasciare.
7. Digitare il commento nella casella che compare. Fare clic ovunque fuori dalla casella (oppure premere {{key:Mod+Enter}}) per terminare.
8. Premere {{key:Esc}} due volte: la prima per annullare la selezione, la seconda per tornare allo strumento {{ui:Seleziona}}. Fare clic sulla nuvola. La scheda {{ui:Proprietà}} a destra mostra chi l'ha creata, quando e il suo {{ui:Stato}}.
9. Scegliere {{ui:Salva}} nella barra degli strumenti (oppure premere {{key:Mod+S}}).
   Il browser scarica una copia con un nome del tipo "A-Plans (marked up).pdf". La barra di stato indica quante annotazioni sono state scritte.
10. Aprire quella copia in qualsiasi visualizzatore PDF per verificare: la nuvola e il callout ci sono, come normali commenti PDF con il proprio nome.

Per continuare a lavorare in seguito, aprire in MarkupCraft la copia "(marked up)". Le annotazioni tornano modificabili, con stati, risposte e numeri di punch.

## Online e offline

:::online
Si è online. MarkupCraft carica il lettore PDF la prima volta che si apre un PDF e il programma di scrittura PDF la prima volta che si salva. Per lavorare in seguito senza connessione (in un sopralluogo, in aereo), scegliere ora {{ui:Salva per l'uso offline}} nella barra in alto e attendere "Pronto per l'uso offline". La copia comprende il lettore e il programma di scrittura PDF, quindi aprire e salvare PDF funziona poi offline. Vedere [Lavorare offline](common:offline).
:::

:::offline
Si è offline. Se la barra in alto indica "Pronto per l'uso offline", MarkupCraft è stato salvato per l'uso offline in questo browser e tutto funziona: aprire, annotare, misurare, salvare. In caso contrario, usare ciò che è già stato caricato in questa scheda e non ricaricare la pagina finché non si è di nuovo online. Vedere [Lavorare offline](common:offline).
:::

## Cosa ricorda l'app e cosa no

- **Le annotazioni vivono nel PDF salvato.** Nulla viene conservato su un server. L'app non salva il PDF da sola, ma conserva una copia di ripristino in questo browser finché non lo si fa. Salvare prima di chiudere la scheda; il browser chiede conferma se si tenta di uscire con annotazioni non salvate (tranne su un iPad, vedere [Rivedere su iPad o touch screen](topic:review-on-a-tablet)).
- **Il nome, gli stili degli strumenti e la cassetta degli strumenti** restano in questo browser su questo computer. Un altro browser o computer riparte da zero e la cancellazione dei dati del sito dal browser li rimuove. Vedere [Cosa resta in questo browser](topic:browser-storage).
- Il salvataggio nel cloud e le sessioni di revisione condivise tra persone non sono ancora disponibili.

## Dove andare dopo

- [Un giro della schermata](topic:workspace)
- [Annotare una tavola](topic:mark-up-a-sheet)
- [Calibrare una tavola e misurare](topic:calibrate-and-measure)
- [Se si proviene da altri software di annotazione](topic:coming-from), per chi rivede già i disegni con un altro programma.

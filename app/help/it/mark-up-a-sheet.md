---
title: Annotare una tavola
summary: Disegnare nuvole di revisione, callout, caselle di testo, frecce, forme, tratti di penna ed evidenziazioni, e impostare il loro colore e la linea prima o dopo.
keywords: annotazione, redline, nuvola, nuvola di revisione, callout, linea di richiamo, casella di testo, freccia, linea, rettangolo, ellisse, cerchio, polilinea, poligono, penna, mano libera, inchiostro, evidenziatore, colore, spessore di linea
from: 9d6de0ac
---

Ogni strumento funziona allo stesso modo: sceglierlo, disegnare sulla tavola, e la nuova annotazione viene selezionata così che la si possa vedere in {{ui:Proprietà}}. Lo strumento resta attivo per la successiva. La barra di stato indica sempre ciò che lo strumento si aspetta dopo.

:::touch
Su uno schermo touch, usare un dito per disegnare. Un secondo dito annulla ciò che aveva iniziato il primo, e fa pizzico o pan; così non si lascia mai un segno per sbaglio durante lo zoom. Altro in [Revisionare su iPad o schermo touch](topic:review-on-a-tablet).
:::

## Nuvole di revisione

**Nuvola a riquadro:** scegliere {{ui:Nuvola}} ({{key:C}}) e trascinare un riquadro. Tenere premuto {{key:Shift}} per renderlo quadrato.

**Nuvola libera** attorno a una forma irregolare:

1. Scegliere {{ui:Nuvola libera}} ({{key:Shift+C}}).
2. Fare clic su ogni angolo dell'area.
3. Terminare con un doppio clic, {{key:Enter}} o un clic destro. Su touch, doppio tocco.

Mentre si fa clic sui punti, {{key:Backspace}} rimuove l'ultimo punto e {{key:Esc}} annulla l'intera forma. Tenere premuto {{key:Shift}} per mantenere il lato successivo a un multiplo di 45°. Una nuvola libera richiede almeno tre punti.

Le festoni sporgono sempre verso l'esterno e la loro dimensione segue lo spessore della linea: una linea più spessa dà archi più grandi.

## Callout

Un callout è una casella di testo con una linea di richiamo che punta a qualcosa.

1. Scegliere {{ui:Callout}} ({{key:K}}).
2. Premere sul punto da richiamare e trascinare fino al punto in cui deve andare il testo. Rilasciare.
   Se si fa solo clic senza trascinare, la casella viene posizionata in alto a destra del punto.
3. Digitare il testo. La casella cresce verso il basso man mano che le righe vanno a capo.
4. Fare clic in un punto qualsiasi fuori dalla casella, oppure premere {{key:Mod+Enter}}, per terminare. {{key:Esc}} scarta il callout.

Se si termina senza digitare nulla, non viene aggiunto alcun callout ("Nessun testo digitato, quindi non è stato aggiunto alcun callout.").

Dopo averlo disegnato, selezionarlo per spostare la casella, trascinare la punta della linea di richiamo o la sua piega (le due maniglie a rombo), oppure ridimensionare la casella.

## Caselle di testo

1. Scegliere {{ui:Testo}} ({{key:T}}).
2. Fare clic dove inizia il testo (si ottiene una casella di larghezza adeguata), oppure trascinare una casella della dimensione desiderata.
3. Digitare, poi fare clic fuori o premere {{key:Mod+Enter}}.

Il testo non ha bordo per impostazione predefinita. Per dargliene uno, aumentare {{ui:Spessore di linea}} in {{ui:Proprietà}}. Per dargli uno sfondo, spuntare {{ui:Riempimento}}.

Per cambiare le parole in seguito: con {{ui:Seleziona}} attivo, fare doppio clic sul testo, oppure selezionarlo e premere {{key:Enter}}, oppure scegliere {{ui:Modifica sulla tavola}} in {{ui:Proprietà}}. È possibile modificarlo anche nella casella {{ui:Testo}} in {{ui:Proprietà}}.

## Frecce e linee

1. Scegliere {{ui:Freccia}} ({{key:A}}) oppure {{ui:Linea}} ({{key:L}}).
2. Trascinare dall'inizio alla fine. Oppure fare clic sull'inizio, rilasciare, e fare clic sulla fine.
3. Tenere premuto {{key:Shift}} per mantenerla a un multiplo di 45°.

La punta della freccia si trova all'estremità in cui si termina il disegno.

## Rettangoli, ellissi, polilinee e poligoni

- {{ui:Rettangolo}} ({{key:R}}) ed {{ui:Ellisse}} ({{key:E}}): trascinare un riquadro. {{key:Shift}} crea un quadrato o un cerchio. Un clic senza trascinamento non disegna nulla e la barra di stato chiede di trascinare.
- {{ui:Polilinea}} ({{key:Y}}) e {{ui:Poligono}} ({{key:G}}): fare clic sui punti; terminare con doppio clic, {{key:Enter}} o clic destro (doppio tocco su touch). {{key:Backspace}} rimuove l'ultimo punto. Un poligono si chiude da solo e richiede tre punti; una polilinea ne richiede due.

## Penna ed evidenziatore

- {{ui:Penna}} ({{key:P}}): trascinare per disegnare a mano libera. Il tratto viene leggermente lisciato al rilascio.
- {{ui:Evidenzia}} ({{key:I}}): uguale, con un tratto giallo largo e trasparente che colora il disegno sottostante invece di coprirlo.
- Tenere premuto {{key:Shift}} mentre si disegna per ottenere un unico tratto dritto a partire dal punto iniziale.

L'evidenziatore è un tratto a mano libera. Non si aggancia al testo nel PDF.

## Colore, linea e riempimento

Due modi:

- **Prima di disegnare:** scegliere lo strumento. Senza nulla selezionato, {{ui:Proprietà}} mostra le impostazioni "<strumento>": {{ui:Colore}}, {{ui:Spessore di linea}} (in punti), {{ui:Riempimento}} e {{ui:Opacità del riempimento}} per le forme chiuse, {{ui:Opacità}}, e {{ui:Dimensione del testo}} per il testo. Ogni nuova annotazione di quel tipo le usa, e MarkupCraft le ricorda in questo browser.
- **Dopo aver disegnato:** selezionare una o più annotazioni e cambiare gli stessi controlli sotto "Stile". Con più annotazioni selezionate, la modifica si applica a tutte in un solo passo.

I valori predefiniti: annotazioni rosse, evidenziatore giallo, misure blu, conteggi arancioni, e timbri colorati secondo il significato.

Gli aspetti salvati che si riutilizzano ogni giorno vanno nella cassetta degli strumenti: consultare [La cassetta degli strumenti](topic:tool-chest).

## Oggetto e commento

Ogni annotazione ha anche un {{ui:Oggetto}} (un'etichetta breve come "Nuvola" o "RFI", mostrata nell'elenco delle annotazioni e negli altri visualizzatori PDF) e un {{ui:Commento}} (note più lunghe). Compilarli in {{ui:Proprietà}}. Per una conversazione su un'annotazione, usare le risposte: consultare [Stati e risposte](topic:statuses-and-replies).

## Avanti

- [Selezionare, spostare e modificare le annotazioni](topic:select-and-edit)
- [Timbri e note](topic:stamps-and-notes)
- [Ogni tipo di annotazione](topic:markup-types)

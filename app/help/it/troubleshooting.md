---
title: Risoluzione dei problemi
summary: Messaggi che MarkupCraft mostra e cosa fare, più soluzioni per ciò che sembra non funzionare.
keywords: problema, errore, non funziona, guida, messaggio, non si apre, impossibile salvare, password, protetto, misura rifiutata, calibra, offline, vuoto, lento, annotazioni perse, punti interrogativi
from: bb650b39
---

La maggior parte dei problemi è spiegata nella barra di stato in fondo allo schermo. Leggerla per prima.

## Apertura dei file

**"MarkupCraft apre i file PDF. "x" non è un PDF."**
È stato scelto o trascinato qualcos'altro. Si aprono solo i PDF. Esportare prima i disegni dal programma CAD in PDF.

**'"name" richiede una password per essere aperto. Aprire una copia non protetta.'**
Il PDF è protetto da password. Chiedere a chi lo ha inviato una copia non protetta, oppure aprirlo in un programma PDF di cui si conosce la password e salvare una copia senza password.

**'"name" non può essere letto come PDF (…)'**
Il file è danneggiato oppure non è davvero un PDF (un download incompleto, un allegato di posta tagliato). Scaricarlo di nuovo. Se altri programmi PDF lo aprono, usare il loro "salva con nome" per creare una copia pulita e aprire quella.

**"Alcuni file non sono stati aperti"**
Quando si aprono più file insieme, questa finestra elenca i file che non si sono aperti e il motivo. Gli altri sono aperti.

**"Il lettore PDF non è riuscito a caricare: …"**
Non è stato possibile scaricare il motore PDF. Online: ricaricare la pagina e riprovare; verificare che un firewall o un blocco dei contenuti non stia bloccando il sito. Offline: MarkupCraft non è stato salvato per l'uso offline in questo browser (la barra in alto non dice "Pronto offline"). Connettersi, scegliere {{ui:Salva per l'uso offline}} e attendere "Pronto offline". Vedi [Lavorare offline](common:offline).

**"Alcune annotazioni potrebbero apparire due volte sullo schermo" oppure "Non è stato possibile leggere alcuni dettagli extra delle annotazioni"**
I commenti già presenti nel file sono insoliti. Vengono comunque aperti nel modo migliore possibile; verificarli prima di farvi affidamento. Il salvataggio funziona comunque.

**La tavola ha il nome sbagliato, oppure "pagina 3"**
Vedi [Come le tavole ricevono il nome](topic:open-a-plan-set#how-sheets-get-their-names). Le tavole scansionate non hanno testo da leggere; usare {{ui:Rinomina tavola}}.

**Le stesse tavole compaiono due volte**
Lo stesso file è stato aperto due volte. Scegliere {{ui:Chiudi}} (salvare prima, se necessario) e aprire di nuovo il set.

## Disegno e selezione

**Non succede nulla quando faccio clic sulla tavola**
Controllare quale strumento è premuto nella barra degli strumenti, e leggere la barra di stato. Con {{ui:Rettangolo}}, {{ui:Ellisse}} e {{ui:Nuvola}}, un clic senza trascinamento non disegna nulla: trascinare. Con {{ui:Polilinea}}, {{ui:Poligono}}, {{ui:Nuvola libera}} e {{ui:Area}}, si stanno aggiungendo punti: terminare con un doppio clic oppure con {{key:Enter}}.

**"Un poligono richiede almeno 3 punti." (oppure 2 per una polilinea)**
Fare clic su altri punti prima di terminare.

**"Nessun testo digitato, quindi non è stato aggiunto alcun testo."**
Le caselle di testo e i callout vengono conservati solo quando contengono testo. Disegnarlo di nuovo e digitare prima di fare clic altrove.

**"I due punti sono uguali. Fare clic su due punti diversi."**
Per linee, frecce, lunghezze e calibrazione, le due estremità devono essere distanti. Trascinare, oppure fare clic due volte in punti diversi.

**Non riesco a spostare o eliminare un'annotazione; ha un riquadro grigio tratteggiato**
È un commento di sola lettura che arrivava con il file (per esempio un evidenziatore di testo). MarkupCraft lo mantiene com'è: si può solo rispondere. La barra di stato dice "le annotazioni di sola lettura sono mantenute come nel file".

**I tasti scrivono lettere in una casella invece di scegliere strumenti**
Il cursore è in una casella di testo (una risposta, un campo in {{ui:Proprietà}}, la ricerca nella tavola). Fare prima clic su una parte vuota dell'area della tavola, oppure premere {{key:Esc}} se si sta modificando il testo di un'annotazione.

**Lo spazio non sposta la vista, oppure i tasti freccia non fanno nulla**
Si è appena fatto clic su un pulsante della barra, che quindi ha ancora la tastiera. Trascinare con il pulsante centrale del mouse, oppure fare clic una volta sulla tavola con {{ui:Seleziona}} attivo, poi riprovare. Vedi anche [Tastiera e mouse](topic:keyboard#when-a-key-does-nothing).

**Un gesto a pinza sullo schermo touch ha lasciato un segno**
Uno strumento di trascinamento (penna, nuvola, rettangolo) è iniziato prima che arrivasse il secondo dito, e si è concluso prima di essere annullato. Premere {{ui:Annulla}}. Appoggiare entrambe le dita insieme quando si vuole ingrandire.

## Misurazione

**"Calibrare prima questa tavola: scegliere due punti a una distanza nota, oppure scegliere la sua scala. Poi misurare."**
Ogni tavola ha bisogno della propria scala prima di {{ui:Lunghezza}} o {{ui:Area}}. MarkupCraft è passato a {{ui:Calibra}}: fare clic sulle due estremità di una quota nota e digitarne la lunghezza, oppure fare clic sul pulsante della scala nella barra di stato e scegliere una scala. Vedi [Calibrare una tavola e misurare](topic:calibrate-and-measure).

**"Questa non è una lunghezza che MarkupCraft riconosce."**
Digitarla come `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`. Vedi [Unità, lunghezze e scale](topic:units-and-scales).

**Le misure sono un po' sbagliate, oppure completamente sbagliate**
- Una scala predefinita su un PDF non a grandezza naturale misura in modo errato. Calibrare invece su una lunghezza nota e grande.
- Un separatore delle migliaia è stato letto come separatore decimale: una virgola viene interpretata come decimale, quindi `1,200 mm` diventa 1,2 mm. Digitare `1200 mm`.
- Ingrandire quando si fa clic sulle estremità.
- Il disegno potrebbe non essere in scala ("NTS").

**"Selezionare prima un gruppo di conteggio, poi fare Shift+clic su un segno per rimuoverlo."**
Scegliere {{ui:Seleziona}}, fare clic sul gruppo di conteggio, poi scegliere di nuovo {{ui:Conteggio}} e fare {{key:Shift}}-clic sul punto.

## Salvataggio

**"Questo PDF è protetto (cifrato), quindi non è possibile scrivere una copia annotata."**
Il file vieta le modifiche. Chiedere una copia non protetta. Nel frattempo è ancora possibile esportare l'elenco delle annotazioni come CSV o BCF.

**"Il writer PDF non è riuscito a caricare: …"**
Di solito si è offline e l'app non è stata salvata per l'uso offline (nessun "Pronto offline" nella barra in alto). Le annotazioni sono ancora nella scheda: tenerla aperta, connettersi e scegliere di nuovo {{ui:Salva}}. Poi scegliere {{ui:Salva per l'uso offline}}, così funziona offline la volta successiva; la copia salvata include il writer PDF.

**"Impossibile salvare <file>"**
La finestra mostra il motivo. Le annotazioni sono ancora nella scheda. Riprovare; se si ripete, esportare il CSV per non perdere i commenti, e segnalare il messaggio.

**Ho scelto Salva ma è arrivato solo un file**
Il browser ha bloccato i download aggiuntivi. Cercare un avviso nella barra degli indirizzi e consentire a questo sito di scaricare più file, poi salvare di nuovo.

**Non riesco a trovare il file salvato**
È finito nella cartella dei download del browser. Aprire l'elenco dei download (in Chrome ed Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; in Firefox e Safari, il pulsante dei download nella barra degli strumenti) per vedere dove. Vedi [Browser e computer](common:browsers).

**Del testo mostra "?" in altri visualizzatori PDF**
I caratteri fuori dal set dell'Europa occidentale vengono stampati come "?" nella copia. Il messaggio di salvataggio li conta. Vedi [Salvare il PDF annotato](topic:save-the-marked-up-pdf).

**Il timbro mostra la data di domani (o di ieri)**
Le date dei timbri sono in UTC. Vedi [Timbri e note adesive](topic:stamps-and-notes).

## Lavorare offline

**Il pulsante offline dice "Impossibile salvare"**
Alcuni file dell'app non sono stati scaricati. Controllare la connessione e fare clic di nuovo sul pulsante; mostra "Salvataggio N di M" finché non compare "Pronto offline".

**Il pulsante offline dice "Offline non disponibile"**
Questa finestra del browser non può conservare una copia offline: una finestra privata, oppure un computer con una politica che lo impedisce. Aprire MarkupCraft in una finestra normale e riprovare.

**Offline, l'app è una versione più vecchia**
La copia offline è la versione salvata. Quando si è online, fare clic su "Pronto offline" e scegliere "Salva di nuovo (ottieni la versione più recente)". Per liberare spazio, scegliere "Rimuovi la copia offline". Vedi [Lavorare offline](common:offline).

**La guida non si apre**
Premere {{key:F1}} (su Mac, con **fn**), oppure scegliere {{ui:Guida}} nella barra in alto. Funziona anche offline.

## Cose perse

**Le annotazioni sono sparite dopo aver chiuso o ricaricato la scheda**
Riaprire MarkupCraft nello stesso browser: propone il lavoro non salvato con "Recuperare il lavoro?". Scegliere {{ui:Recupera}} e salvare il PDF. Le copie vengono conservate fino a 30 giorni; una finestra privata, o la cancellazione dei dati del sito, non lascia nulla. Vedi [Recuperare il lavoro](common:recover).

**Nome, impostazioni degli strumenti o cassetta degli strumenti sono spariti**
Sono conservati solo in questo browser e sono stati cancellati (dati del sito cancellati, una finestra privata, un altro browser o computer, oppure la pulizia di Safari dei siti non visitati da un po' di tempo). Reimpostare il nome e importare la cassetta esportata. Vedi [Cosa resta in questo browser](topic:browser-storage).

**"La cassetta degli strumenti non può essere conservata in questo browser (archiviazione disattivata o piena). Esportarla per conservarla."**
Il browser rifiuta di memorizzare dati per questo sito (modalità privata, archiviazione bloccata da un'impostazione o da una politica, oppure piena). Esportare la cassetta dopo averla modificata, e importarla la volta successiva.

## Visualizzazione e velocità

**La tavola appare sfocata per un momento**
MarkupCraft mostra una resa rapida e approssimativa mentre si fa zoom o si sposta la vista, e la ridisegna nitida poco dopo aver smesso.

**Tutto è lento con un set grande**
Chiudere altre schede pesanti, aprire meno file insieme, ed evitare lo zoom massimo su tavole enormi. Vedi [Lavorare con più file insieme](topic:several-files#big-sets).

**La tavola è scura con linee chiare**
Si è nel tema {{ui:Modello}}. Scegliere {{ui:Carta}} nella barra in alto per linee scure su bianco. Le annotazioni e il PDF salvato non sono interessati.

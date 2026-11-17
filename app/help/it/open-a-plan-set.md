---
title: Aprire un set di tavole e spostarsi tra le tavole
summary: Aprire uno o più PDF oppure iniziare con pagine vuote, trovare le tavole per numero o nome, ingrandire e spostare la vista, e rinominare una tavola quando il file la denomina male.
keywords: apri, nuovo, pagina vuota, tavola vuota, schizzo, griglia, senza titolo, set di tavole, tavole, pagine, miniature, etichette di pagina, numero della tavola, cartiglio, rinomina, navigare, zoom, pan, adatta, cerca tavole
from: 1e7f4d50
---

## Aprire il set

1. Scegliere {{ui:Apri}} nella barra degli strumenti, oppure premere {{key:Mod+O}}.
2. Nella finestra di selezione dei file, selezionare tutti i PDF del set ({{pick:mac=tenere premuto ⌘ e fare clic su ogni file|windows linux=tenere premuto Ctrl e fare clic su ogni file}}, oppure selezionare un intervallo con Shift), poi confermare.
   Oppure trascinare i file da {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} nell'area della tavola. Mentre si trascina compare "Rilascia i PDF per aprirli".
3. Attendere mentre la barra di stato dice "Apertura di <file>…". Per i file grandi viene mostrato il conteggio: "(10 di 60 tavole)".

Risultato: l'elenco {{ui:Tavole}} mostra ogni pagina di ogni file, nell'ordine in cui sono stati aperti, e la barra di stato dice qualcosa come "Aperti 3 file (42 tavole nel set)." Se i file contenevano già dei commenti, viene indicato quanti ne sono stati letti.

Per aggiungere altri file al set più tardi, aprirli nello stesso modo. Vengono aggiunti alla fine dell'elenco.

## Iniziare con pagine vuote

Per schizzare o prendere appunti senza un disegno, creare pagine vuote invece di aprire un PDF:

1. Scegliere {{ui:Nuovo}} nella barra degli strumenti, oppure {{ui:Inizia con una pagina vuota}} nella schermata iniziale, oppure premere {{key:Mod+N}} dove il browser lo consente (l'app desktop e Studio lo consentono sempre).
2. Scegliere il {{ui:Formato della carta}}: Letter, Tabloid o ANSI B, ARCH D, ARCH E, A4, A3 o A1, e {{ui:Verticale}} oppure {{ui:Orizzontale}}.
3. Scegliere una {{ui:Griglia}}: {{ui:Nessuna}}, {{ui:Punti}} o {{ui:Quadretti}}. La griglia ha un passo di 1/4 in, con una linea più marcata ogni pollice sulla carta in pollici, e di 5 mm, con una linea più marcata ogni 10 mm sulla carta metrica. Viene stampata sulla pagina.
4. Digitare quante {{ui:Pagine}} si vogliono, da 1 a 20, poi scegliere {{ui:Crea}}.

Risultato: un nuovo PDF chiamato "Untitled-1.pdf" (poi "Untitled-2.pdf" e così via) si apre come qualsiasi altro file, creato qui su questo computer. Ogni strumento funziona su di esso, e {{ui:Salva}} scarica "Untitled-1 (marked up).pdf". MarkupCraft ricorda le scelte per la volta successiva.

Le pagine non hanno scala: la barra di stato dice "Non calibrato". La griglia non è una scala. Per misurare, calibrare la tavola o scegliere prima una scala; vedi [Calibrare e misurare](topic:calibrate-and-measure).

Per aggiungere una pagina a un set vuoto, aprire una delle sue tavole e scegliere {{ui:Aggiungi una pagina vuota}} sotto l'elenco {{ui:Tavole}}. La nuova pagina ha la stessa carta e la stessa griglia e va alla fine. Come ogni modifica di pagina, non può essere annullata; vedi [Stampare e modificare le pagine](topic:pages-and-printing).

## Come le tavole ricevono il nome

MarkupCraft chiama ogni tavola "<numero della tavola> — <titolo>", per esempio "A-101 — Pianta del piano terra", usando il primo di questi elementi che trova:

1. Un nome digitato con {{ui:Rinomina tavola}} (sotto).
2. Le etichette di pagina del PDF stesso, quando chi lo ha creato le ha impostate (per esempio "A-101").
3. Il cartiglio: MarkupCraft legge il testo della pagina e cerca qualcosa con la forma di un numero di tavola (A-101, A1.01, M-201A, KA1-1), privilegiando l'angolo in basso a destra, la striscia a destra e la fascia in basso, e prende come titolo la scritta più grande vicina.
4. Altrimenti il nome del file e la pagina: "Planimetrie — pagina 3".

Per vedere quale elemento è stato usato, premere {{key:Esc}} finché non è selezionato nulla e {{ui:Seleziona}} è attivo, poi guardare {{ui:Proprietà}}: "Letto da" indica "L'etichetta della pagina", "Il cartiglio", "Il nome del file" o "Digitato a mano".

:::note
Le tavole scansionate, e i PDF in cui le lettere sono state esportate come linee, non hanno testo da leggere. Vengono denominate per file e pagina finché non vengono rinominate. MarkupCraft non può ancora leggere il testo dalle immagini.
:::

## Spostarsi tra le tavole

- Fare clic su una tavola nell'elenco {{ui:Tavole}}.
- Premere {{key:PageDown}} per la tavola successiva e {{key:PageUp}} per la precedente, oppure usare le frecce nella barra sotto la tavola.
- Digitare in {{ui:Cerca tavole}}: parte di un numero ("A-2"), una parola del titolo ("tetto") oppure un nome di file. L'elenco si restringe mentre si digita ("4 di 42"). Premere {{key:Enter}} per aprire la prima corrispondenza. Svuotare la casella per rivedere tutte le tavole.

Ogni tavola mantiene il proprio zoom e la propria posizione finché non si chiude il set.

## Zoom e pan

:::mouse
- **Zoom:** girare la rotella sulla tavola. Lo zoom avviene attorno al puntatore. Oppure premere {{key:Plus}} e {{key:Minus}} (anche con {{key:Mod}}), oppure usare i pulsanti dello zoom. Digitare una percentuale esatta nella casella dello zoom.
- **Adatta:** {{ui:Adatta alla pagina}} ({{key:Mod+0}}) mostra l'intera tavola; {{ui:Adatta alla larghezza}} ({{key:Mod+9}}) riempie la larghezza.
- **Pan:** trascinare con il pulsante centrale (la rotella), oppure con il pulsante destro, oppure tenere premuto {{key:Space}} e trascinare, oppure scegliere {{ui:Pan}} ({{key:H}}) e trascinare. Senza nulla selezionato, anche i tasti freccia spostano la tavola.
:::

:::mac mouse
Sul trackpad di un Mac, lo scorrimento a due dita fa zoom (non scorre la tavola). Per fare pan, tenere premuto {{key:Space}} e trascinare con un dito, oppure passare a {{ui:Pan}} con {{key:H}}. Il pizzico fa zoom in Chrome, Edge e Firefox.
:::

:::touch
- **Zoom e pan:** appoggiare due dita sulla tavola. Allargarle o pizzicarle per fare zoom attorno al punto tra di esse, e muoverle insieme per fare pan. Entrambe le cose avvengono insieme.
- **Pan con un dito:** scegliere prima {{ui:Pan}}. Con qualsiasi altro strumento, un dito disegna o seleziona.
- {{ui:Adatta alla pagina}} e {{ui:Adatta alla larghezza}} si trovano nella barra sotto la tavola.
:::

È possibile allontanare lo zoom ben oltre l'intera tavola e ingrandire fino al 6400%. La tavola viene ridisegnata nitida un istante dopo che si smette di muoverla.

## Segnalibri

{{ui:Segnalibri}}, in cima al pannello {{ui:Tavole}}, mostra i segnalibri (struttura) del PDF a cui appartiene la tavola aperta. Sceglierne uno per andare alla sua pagina. La matita rinomina un segnalibro e la croce lo rimuove. {{ui:Crea dalle tavole}} crea un segnalibro per tavola, con il nome mostrato nell'elenco (numero della tavola e titolo), e {{ui:Aggiungi per questa tavola}} ne aggiunge uno per la tavola su cui ci si trova. Le modifiche fanno parte del lavoro non salvato del file: {{ui:Salva}} le scrive nella copia, dove ogni visualizzatore PDF le mostra.

## Ruotare la vista

I due pulsanti di rotazione a destra della barra sotto la tavola ruotano la vista di un quarto di giro in un senso o nell'altro, per una tavola disegnata di traverso. Ruotano solo la vista: il PDF e le sue annotazioni restano come sono, e la tavola successiva si apre come è il suo PDF (ogni tavola ricorda la propria rotazione finché il set è aperto). Il testo aggiunto su una vista ruotata si legge dritto come lo si vede. Per ruotare la pagina stessa nel PDF salvato, usare {{ui:Pagine}}, poi {{ui:Ruota la pagina in senso orario}}; vedi [Stampare e modificare le pagine](topic:pages-and-printing).

## Rinominare una tavola

Quando il nome di una tavola è sbagliato o manca:

1. Mostrare la tavola.
2. Premere {{key:Esc}} finché non è selezionato nulla e lo strumento {{ui:Seleziona}} è attivo. {{ui:Proprietà}} ora mostra la tavola.
3. Scegliere {{ui:Rinomina tavola}}.
4. Digitare il {{ui:Numero della tavola}} e il {{ui:Titolo}}, poi scegliere {{ui:Salva}}.

Risultato: l'elenco delle tavole, la barra sotto la tavola e l'elenco delle annotazioni usano tutti il nuovo nome, e "Letto da" dice "Digitato a mano". Il rinominare si può annullare con {{key:Mod+Z}}.

Per tornare a quanto indicato dal file, riaprire {{ui:Rinomina tavola}}, svuotare entrambe le caselle e scegliere {{ui:Salva}}.

Al salvataggio, un numero di tavola digitato diventa l'etichetta della pagina nel PDF, così gli altri visualizzatori PDF mostrano "A-101" nella casella della pagina. Se si assegna un numero a una pagina di un file, ogni pagina di quel file riceve un'etichetta nella copia (il numero digitato, altrimenti la vecchia etichetta, altrimenti il numero di pagina). Un titolo digitato viene conservato per MarkupCraft, ma gli altri visualizzatori non lo mostrano.

## Portare il PDF in TakeoffCraft, o riportarlo qui

Quando TakeoffCraft è aperto nello stesso posto (il laboratorio, Try o le app online), la barra sotto la tavola ha {{ui:Apri in TakeoffCraft}}. Apre il PDF della tavola in TakeoffCraft, in una nuova scheda, come è stato aperto qui, così si possono misurare le quantità. Le annotazioni restano qui; salvarle come di consueto.

Il pulsante {{ui:MarkupCraft}} di TakeoffCraft fa la stessa cosa nell'altro senso: il PDF si apre qui come se si fosse scelto {{ui:Apri}}. Se il browser blocca la nuova scheda, consentire le finestre a comparsa per questo sito e premere di nuovo il pulsante.

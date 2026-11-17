---
title: Calibrare una tavola e misurare
summary: Impostare la scala di ogni tavola da un preset o da una quota nota, poi misurare lunghezze, aree con perimetri e conteggi.
keywords: calibra, scala, imposta scala, misura, lunghezza, distanza, quota, area, piedi quadrati, perimetro, conteggio, computo, quantità, righello, aritmetica, calcolo, addizione, frazione
from: 49a25c6d
---

Lunghezze e aree richiedono di conoscere la scala della tavola. MarkupCraft conserva una scala **per tavola**: calibrare ogni tavola su cui si misura. I conteggi non richiedono scala.

La barra di stato mostra la scala della tavola corrente, oppure "Non calibrata".

## Scegliere una scala dall'elenco

Usare questo metodo quando il PDF è a grandezza reale (una tavola 24 × 36 che si stampa a 24 × 36) e il disegno dichiara la propria scala.

1. Fare clic sul pulsante della scala nella barra di stato ("Non calibrata"). Si apre la casella "Scala della tavola".
2. In {{ui:Scala}}, scegliere la scala: architettonica (1/32" = 1'-0" fino a 3" = 1'-0"), ingegneristica (1" = 10' fino a 1" = 100') o metrica (1:1 fino a 1:1000).
3. Scegliere {{ui:Imposta scala}}.

Risultato: la barra di stato mostra la scala, per esempio `1/4" = 1'-0"`. Le scale architettoniche mostrano le lunghezze in piedi e pollici, quelle ingegneristiche in piedi decimali, le scale metriche fino a 1:50 in millimetri e da 1:100 in metri.

:::warning
Un preset è corretto solo se il PDF non è stato ridotto. Un set a metà formato, o una tavola "adatta alla pagina" al momento della creazione, misura in modo errato con un preset. Calibrare invece da una quota nota, e in ogni caso controllare una quota.
:::

## Calibrare da una quota nota

Usare questo metodo per set a metà formato, tavole scansionate, dettagli a scale insolite, oppure per verificare un preset.

1. Trovare una quota lunga di cui ci si fida, oppure una barra di scala grafica.
2. Scegliere {{ui:Calibra}} nel gruppo {{ui:Misura}} (oppure scegliere {{ui:Indica due punti}} nella casella "Scala della tavola").
3. Fare clic su un estremo della quota, poi sull'altro. (Oppure trascinare da un estremo all'altro.) Ingrandire prima per maggiore precisione; {{key:Shift}} mantiene la linea a passi di 45°.
4. La casella indica quanto distano i punti sulla carta e chiede "Quanto distano davvero?". Digitare la {{ui:Distanza reale}}, per esempio `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`.
5. Scegliere come mostrare le lunghezze in {{ui:Mostra le lunghezze in}}: {{ui:Piedi e pollici}}, {{ui:Piedi decimali}}, {{ui:Pollici}}, {{ui:Metri}} o {{ui:Millimetri}}.
6. Scegliere {{ui:Imposta scala}}.

Risultato: la barra di stato mostra "Calibrata: 24'-0" su 1.00 in" (la lunghezza reale e la lunghezza sulla carta), e lo strumento con cui si stava per misurare torna attivo. Ogni modo di digitare una lunghezza è descritto in [Unità e lunghezze](topic:units-and-scales).

La distanza reale può anche essere un piccolo calcolo: `12'6"+3/4"`, `(24'-0")/3` oppure `2*450mm`. Usare `+ - * /` e parentesi; un numero senza unità vale nell'unità scelta in {{ui:Mostra le lunghezze in}} (piedi per {{ui:Piedi e pollici}}). {{ui:Imposta scala}} usa il risultato.

Se MarkupCraft non riesce a leggere ciò che è stato digitato, la casella lo dice: 'Non è una lunghezza che MarkupCraft riconosce. Provare 24'-0", 12' 6 1/2", 7.2 m o 900 mm.' Un calcolo che non riesce a risolvere spiega perché e dove, per esempio "Una parentesi non è chiusa (carattere 5)."

## Misurare una lunghezza

1. Scegliere {{ui:Lunghezza}} ({{key:M}}).
2. Fare clic sull'inizio, poi sulla fine. Oppure trascinare dall'inizio alla fine. {{key:Shift}} mantiene la linea a passi di 45°.

Risultato: una linea di quota con i segni e la lunghezza scritta sopra. La barra di stato la ripete ("Lunghezza: 12'-6 1/2" (1/4" = 1'-0")."), e {{ui:Proprietà}} la mostra sotto {{ui:Lunghezza}}. Piedi e pollici sono arrotondati al 1/16" più vicino.

Se la tavola non ha ancora una scala, scegliere {{ui:Lunghezza}} passa a {{ui:Calibra}}, e la barra di stato spiega: "Calibrare prima questa tavola: indicare due punti a una distanza nota, oppure scegliere la sua scala. Poi misurare." Dopo aver impostato la scala, {{ui:Lunghezza}} torna attivo.

## Disegnare in scala

Su una tavola calibrata si possono digitare lunghezze reali mentre si disegna una {{ui:Linea}}, una {{ui:Freccia}}, una {{ui:Lunghezza}}, una {{ui:Polilinea}}, un {{ui:Poligono}}, una {{ui:Nuvola libera}}, un'{{ui:Area}} o uno spazio:

1. Fare clic sul primo punto.
2. Puntare nella direzione del segmento successivo e digitarne la lunghezza, per esempio `16` (nell'unità della tavola), `12'6"` oppure `3.5 m`. Una casella si apre accanto al puntatore mentre si digita.
3. Premere {{key:Enter}}. Il punto cade a quella distanza, nella direzione del puntatore.

Per fissare la direzione esatta, aggiungere `<` e un angolo in gradi: `8 < 90` va 8 piedi dritti verso l'alto, `4<0` a destra, `10 < 225` in basso e a sinistra, come si vede la tavola (comprese le pagine ruotate). Continuare a digitare lunghezze per gli angoli successivi, e completare la forma come al solito. {{key:Esc}} chiude la casella senza posizionare un punto.

## Misurare un angolo

1. Scegliere {{ui:Angolo}} ({{key:X}}).
2. Fare clic sull'estremità di un braccio, poi sul vertice, poi sull'estremità dell'altro braccio.

Risultato: i due bracci, un piccolo arco sul vertice e l'angolo in gradi, con un decimo di precisione (da 0° a 180°). Un angolo non richiede scala. {{ui:Proprietà}} lo mostra sotto {{ui:Angolo}}, e l'elenco, il CSV e il BCF lo riportano.

Un {{ui:Arco}} ({{key:O}}) su una tavola calibrata mostra anche la sua lunghezza lungo la curva in {{ui:Proprietà}}.

## Misurare un'area e il suo perimetro

1. Scegliere {{ui:Area}} ({{key:Q}}).
2. Fare clic su ogni angolo della stanza o della zona.
3. Terminare con un doppio clic, {{key:Enter}} o un clic destro (doppio tocco su touch). {{key:Backspace}} rimuove l'ultimo angolo.

Risultato: un contorno ombreggiato con l'area e "P" con il perimetro al centro, per esempio "128.00 sq ft" e "P 48'-0"". Le scale in piedi danno piedi quadrati, quelle in pollici pollici quadrati, quelle in metri metri quadrati, quelle in millimetri millimetri quadrati. Un'area richiede almeno tre angoli.

### Vuoti

Per escludere una colonna, un vano o un cortile, selezionare l'area e scegliere {{ui:Aggiungi un vuoto}} in {{ui:Proprietà}}. Fare clic sugli angoli del vuoto dentro l'area e terminare come per un'area. Il vuoto resta aperto (non ombreggiato), la sua area viene sottratta e i suoi bordi si aggiungono al perimetro: una stanza di 16' × 8' con un vuoto di 4' × 4' risulta "112.00 sq ft" e "P 64'-0"". Aggiungerne quanti servono; non possono sovrapporsi tra loro né attraversare il contorno dell'area. {{ui:Rimuovi vuoti}} li elimina tutti, e {{key:Mod+Z}} annulla uno.

## Contare gli elementi

1. Scegliere {{ui:Conteggio}} ({{key:U}}).
2. In {{ui:Proprietà}}, digitare un {{ui:Nome del gruppo}}, per esempio "Pozzetti". (Resta memorizzato per la volta successiva.)
3. Fare clic su ogni elemento della tavola.

Risultato: ogni clic aggiunge un punto numerato, il primo punto porta un'etichetta come "Pozzetti: 7", e la barra di stato tiene il totale parziale.

- **Avviare un altro gruppo:** premere {{key:Esc}} una volta (cancella la selezione), cambiare il {{ui:Nome del gruppo}}, e fare di nuovo clic.
- **Aggiungere a un gruppo esistente:** selezionare prima il gruppo, poi scegliere {{ui:Conteggio}} e fare clic.
- **Rimuovere un segno:** con il gruppo selezionato, tenere premuto {{key:Shift}} e fare clic sul punto. Rimuovendo l'ultimo punto si rimuove il gruppo. Su uno schermo touch senza tastiera, usare {{key:Mod+Z}} oppure {{ui:Annulla}}.
- **Rinominare un gruppo:** selezionarlo e modificare il {{ui:Nome del gruppo}} in {{ui:Proprietà}}.

Un gruppo di conteggio appartiene a una sola tavola. I conteggi su più tavole compaiono come gruppi separati nell'elenco delle annotazioni.

## Cambiare o rimuovere una scala

Fare clic sul pulsante della scala nella barra di stato. La casella mostra la scala corrente; scegliere un'altra scala, scegliere {{ui:Indica due punti}}, oppure scegliere {{ui:Rimuovi scala}}.

Le lunghezze e le aree già disegnate vengono **misurate di nuovo** con la nuova scala subito. {{ui:Annulla}} ripristina la vecchia scala.

## Dove vanno i numeri

- {{ui:Proprietà}} mostra i valori della misura selezionata.
- La scheda {{ui:Annotazioni}} elenca ogni valore, e il suo CSV ha una colonna "Misura". Vedi [L'elenco delle annotazioni](topic:markups-list-and-export).
- Il PDF salvato conserva la scala nella pagina e scrive lunghezze e aree come commenti di misura, così altri programmi PDF che leggono le misure possono mostrarle. Vedi [Cosa viene salvato nel PDF](topic:what-the-pdf-keeps).

Per un computo metrico completo con voci, composizioni e prezzi, usare TakeoffCraft: MarkupCraft misura per la revisione, non per la stima.

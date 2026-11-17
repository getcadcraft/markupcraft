---
title: Modificare le linee, le immagini e il testo della pagina
summary: Spostare, ridimensionare, ricolorare o eliminare ciò che il PDF stesso disegna, spostare i punti di una linea, sostituire un'immagine e cambiare le parole di una riga di testo.
keywords: contenuto pagina, contenuto di base, modifica pdf, modifica disegno, vettoriale, percorso, forma, linea, immagine, sostituisci immagine, testo, parole, carattere, punti, nodi, sposta, ridimensiona, ricolora, elimina, strumento contenuto
from: 471d457e
---

Le annotazioni stanno sopra una tavola. Lo strumento {{ui:Contenuto}} lavora sulla tavola stessa: le linee, le immagini e le righe di testo che disegna il PDF. Il PDF su questo computer non viene mai modificato: le modifiche fanno parte della copia che si salva.

## Scegliere cosa modificare

1. Scegliere {{ui:Contenuto}} nel gruppo {{ui:Seleziona}}, oppure premere {{key:B}}.
2. In {{ui:Proprietà}}, sotto {{ui:Seleziona}}, attivare o disattivare {{ui:Forme}}, {{ui:Immagini}} e {{ui:Testo}}. Possono essere selezionati solo i tipi attivi, così si può selezionare il testo di un disegno affollato senza prendere le sue linee.
3. Fare clic su qualcosa per selezionarlo. Shift+clic aggiunge o rimuove. Trascinare un riquadro su carta vuota per selezionare più elementi: trascinando verso destra si prende ciò che è completamente dentro il riquadro, trascinando verso sinistra ciò che lo tocca.

Una forma dentro un'area ritagliata viene selezionata solo dove è visibile.

## Spostare, ridimensionare, ricolorare, eliminare

- **Sposta:** trascinare un oggetto selezionato, oppure premere i tasti freccia (tenere premuto Shift per passi più grandi). Tenere premuto Shift mentre si trascina per spostarsi in linea retta, orizzontale o verticale.
- **Ridimensiona:** trascinare uno degli otto quadratini attorno alla selezione. Cresce o si riduce dal lato opposto. Tenere premuto Shift per mantenere le proporzioni.
- **Ricolora:** per linee e forme, impostare {{ui:Colore della linea}}, {{ui:Colore di riempimento}} e {{ui:Spessore di linea (pt)}} in {{ui:Proprietà}}.
- **Elimina:** premere {{key:Delete}}, oppure scegliere {{ui:Elimina dalla pagina}}.
- **Annulla:** ogni modifica è un passo: {{key:Mod+Z}} la annulla, {{key:Mod+Y}} la ripristina.

{{ui:Ripristina com'era}} annulla in una volta tutte le modifiche agli oggetti selezionati; {{ui:Ripristina questa pagina com'era}} lo fa per l'intera pagina.

## Copiare, tagliare e incollare il contenuto della pagina

Selezionare linee, immagini o testo con lo strumento {{ui:Contenuto}}, poi:

- {{key:Mod+C}} copia, {{key:Mod+X}} taglia (copia e li toglie dalla pagina), {{key:Mod+D}} mette una copia accanto a loro.
- {{key:Mod+V}} incolla come contenuto della pagina, accanto all'originale oppure dove si trova il puntatore (come dicono [Impostazioni](topic:settings)); {{key:Mod+Shift+V}} incolla esattamente nello stesso punto. Incolla su un'altra pagina, in un altro PDF aperto o in un'altra scheda MarkupCraft di questo browser.
- Il menu del gruppo {{ui:Modifica}} e il menu del clic destro hanno gli stessi comandi.

Un'incollatura mantiene le linee come linee, le parole come parole nel proprio carattere e le immagini come immagini. È un unico pezzo: spostarlo, ridimensionarlo con i suoi quadratini, eliminarlo, oppure annullarlo con {{key:Mod+Z}}. Diventa parte della pagina nella copia salvata. Ciò che è stato copiato per ultimo, annotazioni o contenuto della pagina, è ciò che {{key:Mod+V}} incolla.

Ciò che la copia contiene viene ritagliato al riquadro attorno alla selezione: ciò che MarkupCraft non può portare nella copia (vedi sotto) e che si trova dentro quel riquadro viene incluso.

## Spostare i punti di una linea

Fare doppio clic su una linea o una curva (oppure selezionarla e scegliere {{ui:Modifica punti}}). I suoi punti compaiono come quadratini e le sue maniglie di curva come cerchietti. Trascinare un punto o una maniglia; un punto porta con sé le maniglie vicine, così la curva mantiene la sua forma attorno a esso. Premere {{key:Esc}}, oppure fare clic lontano dalla linea, quando si ha finito.

I rettangoli non hanno punti da trascinare: ridimensionarli con i quadratini attorno.

## Sostituire un'immagine

Selezionare un'immagine e scegliere {{ui:Sostituisci immagine…}}, poi scegliere un file PNG, JPEG o SVG (oppure un PDF: la sua prima pagina). La nuova immagine occupa il posto della vecchia, mantenendo le proprie proporzioni.

## Cambiare le parole di una riga di testo

Fare doppio clic su una riga di testo, digitare le nuove parole in {{ui:Parole}} e premere {{key:Enter}}. Le parole vengono scritte nel carattere e nella dimensione della riga, e la riga mantiene la sua lunghezza, quindi il testo che la segue non si sposta.

:::note
La maggior parte dei PDF contiene solo le lettere usate da ciascun carattere. Quando si digita una lettera che la copia del carattere nel file non ha, MarkupCraft la stampa in Helvetica e lo segnala. {{ui:Proprietà}} mostra quali lettere ha il carattere nel file.
:::

Il testo si modifica una riga alla volta; non scorre nella riga successiva.

## Ciò che MarkupCraft lascia com'è

- **Pagine scansionate:** sono una sola immagine: si possono spostare, ridimensionare, sostituire o eliminare, ma il loro contenuto non si può modificare.
- **PDF cifrati e firmati:** modificare la pagina invaliderebbe una firma, quindi lo strumento {{ui:Contenuto}} lo segnala e non cambia nulla. Le annotazioni continuano a funzionare.
- **Aree ritagliate, oggetti divisi tra due parti del contenuto della pagina e sfumature di colore che riempiono un'intera area** restano come sono; MarkupCraft spiega il motivo quando si prova a modificarli.
- **Parole in un carattere standard che il PDF non descrive** (come un carattere Times senza larghezze delle lettere nel file) non si possono cambiare, perché MarkupCraft non potrebbe mantenere la spaziatura della riga. La riga può comunque essere spostata.

## Inserire le annotazioni nella pagina

Linee, rettangoli, ellissi, polilinee, nuvole e tratti di penna disegnati come annotazioni possono diventare parte della pagina stessa: selezionarli e scegliere {{ui:Inserisci nella pagina}} in {{ui:Proprietà}}. Testo, timbri, immagini e colori trasparenti restano annotazioni.

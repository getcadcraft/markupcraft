---
title: Cosa viene salvato nel PDF
summary: Esattamente cosa contiene la copia annotata, cosa vedono gli altri programmi PDF e cosa viene riletto quando si apre un file.
keywords: annotazioni pdf, commenti, dati salvati, andata e ritorno, etichette di pagina, misura, stato di revisione, risposte, interoperabilità, compatibilità, riapertura, dati privati
from: 6439ad28
---

La copia annotata è il PDF originale con dei commenti (annotazioni PDF) aggiunti. Le pagine stesse, i loro disegni, il testo, i segnalibri e i collegamenti vengono copiati così come sono.

## Ogni annotazione

| MarkupCraft | Salvata come | Altri visualizzatori PDF mostrano |
|---|---|---|
| Rettangolo, nuvola a riquadro | Annotazione Square (nuvola: bordo a nuvola) | Un commento rettangolo o nuvola |
| Ellisse | Annotazione Circle | Un commento ellisse |
| Poligono, nuvola libera | Annotazione Polygon (nuvola: bordo a nuvola) | Un commento poligono o nuvola |
| Polilinea | Annotazione PolyLine | Un commento polilinea |
| Linea, freccia | Annotazione Line (freccia: punta chiusa) | Un commento linea o freccia |
| Lunghezza | Annotazione Line marcata come quota, con una misura | Una misura di lunghezza, dove il visualizzatore la supporta |
| Area | Annotazione Polygon marcata come area, con una misura | Una misura di area, dove supportata; altrimenti un poligono |
| Gruppo di conteggio | Un'annotazione Ink, un anello per ogni elemento; il suo testo è "group: n" | Un commento Ink |
| Penna, evidenziatore | Annotazione Ink (evidenziatore indicato come tale) | Un commento Ink |
| Testo | Annotazione FreeText | Un commento a casella di testo |
| Callout | Annotazione FreeText con una linea di richiamo del callout | Un commento callout |
| Nota | Annotazione Text | Una nota adesiva che si apre mostrando il suo testo |
| Timbro | Annotazione Stamp | Un commento timbro |

Ogni annotazione viene salvata con:

- **il proprio aspetto**, disegnato esattamente come lo disegna MarkupCraft a schermo, così appare uguale in ogni visualizzatore e viene stampato allo stesso modo, incluso il distintivo con il numero del punto da completare;
- **l'autore**, **le date di creazione e di modifica**, **l'oggetto**, **il testo del commento** (per caselle di testo e callout, il testo e il commento), **il colore** e **l'opacità**;
- **i dettagli di MarkupCraft** in una voce privata che gli altri programmi ignorano: stato, punto da completare, stile e tipo, così si riapre esattamente com'era.

## Discussioni e stati

- Ogni risposta viene salvata come commento di risposta collegato alla sua annotazione, con autore, data e testo. Le risposte non hanno un'icona propria sulla tavola.
- Ogni cambio di stato viene salvato come risposta con uno stato di revisione. Altri strumenti di revisione lo mostrano come Accettato, Rifiutato o Completato; Aperto viene salvato senza stato.
- Un'annotazione con uno stato diverso da Aperto ma senza un cambio di stato registrato riceve una risposta con lo stato di revisione, così anche gli altri programmi vedono lo stato.
- Le risposte ai commenti in sola lettura del file originale vengono salvate allo stesso modo, collegate a quel commento.

## Ogni tavola

- **Scala:** una tavola calibrata riceve una viewport di misura che copre la pagina (il modo standard per memorizzare la scala della pagina) e la copia propria di MarkupCraft della calibrazione.
- **Numero di tavola:** un numero digitato con {{ui:Rinomina tavola}} diventa l'etichetta di pagina. Quando una pagina di un file ne ha una, ogni pagina di quel file riceve un'etichetta: il numero digitato, altrimenti la sua vecchia etichetta, altrimenti il numero di pagina.
- **Titolo della tavola:** un titolo digitato viene salvato solo per MarkupCraft; gli altri visualizzatori non lo mostrano.

## Testo e caratteri

Il testo viene scritto in Helvetica, presente in ogni visualizzatore PDF. Le lettere fuori dal set dell'Europa occidentale (Windows-1252) stampano come "?" nella copia; il messaggio di salvataggio le conta.

## Fogli di calcolo e motivazioni

I fogli di calcolo e le motivazioni sono conservati in una voce privata del PDF chiamata `/MarkupCraftShell`. Gli altri programmi PDF la ignorano. Una versione precedente di MarkupCraft la ignora anch'essa e la elimina la volta successiva che salva quel file.

## Cosa succede ai commenti già presenti

Quando si apre un PDF che ha già dei commenti:

- I commenti propri di MarkupCraft vengono riletti esattamente. Se un altro programma ne ha spostato o ridimensionato uno, vale la sua nuova posizione.
- Rettangoli, ellissi, linee, polilinee, poligoni, inchiostro, caselle di testo e note adesive di altri programmi diventano annotazioni modificabili. **Al salvataggio, MarkupCraft rimuove gli originali e li riscrive a modo suo**, con i loro popup e le risposte. Il loro aspetto può cambiare leggermente.
- Gli stati di revisione di altri programmi impostano lo stato; vince il più recente.
- Tutto il resto (evidenziazioni di testo, timbri di altri programmi e tipi particolari) viene **mantenuto intatto** nella copia, in sola lettura.
- Collegamenti e campi modulo vengono mantenuti intatti e non sono elencati.

Salvare di nuovo lo stesso file non duplica mai nulla: le annotazioni lette da MarkupCraft vengono sostituite, non aggiunte di nuovo.

## Cosa non cambia

Il file originale sul disco non viene mai modificato. La copia non è ottimizzata per la dimensione, quindi può essere un po' più grande dell'originale. I PDF protetti (cifrati) non possono essere salvati.

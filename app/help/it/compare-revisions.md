---
title: Confrontare due revisioni
summary: Sovrapporre una vecchia e una nuova emissione di una tavola in due colori, allinearle con due punti e cerchiare ciò che è cambiato.
keywords: confronta, sovrapposizione, sovrapposizione di pagine, revisione, differenza, differenze, modifiche, vecchio nuovo, allinea, verifica, emissione, bollettino
from: 62f5d1c5
---

Il confronto sovrappone due tavole. Le linee solo sulla vecchia tavola compaiono in rosso, quelle solo sulla nuova in blu, e quelle presenti su entrambe in grigio tenue. I colori sono indicati nella legenda sotto la tavola: "Solo sulla tavola vecchia", "Solo sulla tavola nuova", "Su entrambe".

## Confrontare due tavole

1. Aprire entrambe le emissioni. Possono essere pagine dello stesso PDF o di PDF diversi; aprirle insieme come un unico set (vedi [Lavorare con più file contemporaneamente](topic:several-files)).
2. Scegliere la scheda {{ui:Confronta}} a destra.
3. Scegliere la {{ui:Tavola vecchia}} e la {{ui:Tavola nuova}}. La nuova tavola parte da quella su cui ci si trova. Quando sono aperti più file, il nome del file di ogni tavola viene mostrato dopo il suo nome.
4. Scegliere {{ui:Confronta}}.

Risultato: MarkupCraft mostra la nuova tavola con quella vecchia mescolata, compare la legenda, e la scheda dice "Confronto di <old> (vecchia) con <new> (nuova). Le annotazioni sulla nuova tavola restano modificabili."

## Passare da vecchia a nuova

Trascinare il cursore {{ui:Vecchia e nuova}}. Tutto a sinistra mostra solo la tavola vecchia, tutto a destra solo quella nuova, a metà entrambe. Spostarsi avanti e indietro è spesso il modo più rapido di vedere una piccola modifica.

## Allineare le tavole

Se le due emissioni sono state stampate con margine, formato o rotazione diversi, tutto sembra cambiato. Per correggere:

**Con due punti (meglio):**

1. Scegliere {{ui:Allinea con due punti}}. La vista mostra solo la tavola vecchia.
2. Fare clic su un particolare netto che si trova su entrambe le tavole, come un'intersezione della griglia dei pilastri. La scheda conta i passi ("1 di 4").
3. Fare clic su un secondo particolare, lontano dal primo, come l'angolo opposto della griglia.
4. La vista passa alla tavola nuova. Fare clic di nuovo sul primo particolare.
5. Fare clic di nuovo sul secondo particolare.

Risultato: "Allineata: tavola vecchia scalata al 100.00%, ruotata di 0.00°. Spostare per la messa a punto." La tavola vecchia viene spostata, scalata e ruotata per adattarsi. {{key:Esc}} annulla mentre si scelgono i punti. Ingrandire ogni particolare prima di fare clic per un adattamento preciso.

**Spostando:** usare i quattro pulsanti freccia sotto "Allinea" per spostare la tavola vecchia. Scegliere il passo (0.25, 1, 5 o 20 pt; 72 pt è un pollice sulla carta). La scheda dice di quanto si è spostata.

{{ui:Reimposta}} rimuove l'allineamento e gli spostamenti.

## Solo le linee modificate

Sotto i pulsanti di allineamento, scegliere {{ui:Linee modificate}} invece di {{ui:Sovrapposizione di immagini}}. MarkupCraft confronta allora le linee delle due tavole, non le loro immagini: la nuova tavola appare com'è, con le linee solo sulla vecchia in rosso e quelle solo sulla nuova in blu. Una linea che si è solo accorciata mostra solo la parte mancante. Allineare prima le tavole (vedi sopra): il confronto usa l'allineamento, quindi una tavola solo spostata non mostra modifiche. La riga di stato indica quanto è cambiato.

Questo funziona per i PDF stampati da CAD, dove il disegno è fatto di linee. Le tavole scansionate non hanno linee da confrontare: per esse usare la sovrapposizione di immagini. Il testo impostato con un carattere (non disegnato come tratti) non viene confrontato.

## Contrassegnare le modifiche

Durante il confronto si è sulla nuova tavola e ogni strumento funziona. Disegnare nuvole intorno alle modifiche man mano che si trovano; appartengono alla nuova tavola e restano quando si smette di confrontare.

{{ui:Cerchia le modifiche con nuvole}} lo fa per voi: raggruppa le linee modificate vicine tra loro e disegna una nuvola di revisione intorno a ogni gruppo sulla nuova tavola, con "Modificato rispetto a <old sheet>" come commento. Un {{key:Mod+Z}} le rimuove tutte; eliminare quelle non necessarie.

## Confrontare un intero set

Quando la nuova emissione arriva come PDF a sé, aprire entrambi i PDF e aprire {{ui:Confronta due set}} nella scheda {{ui:Confronta}}. Scegliere il file vecchio e quello nuovo, poi scegliere {{ui:Confronta i set}}. Le tavole vengono abbinate per numero (come nei [fogli di sostituzione](topic:slip-sheet-a-revised-set)), confrontate per linee ed elencate con le più modificate per prime. Scegliere una tavola nell'elenco per confrontare quella coppia con {{ui:Linee modificate}}.

{{ui:Cerchia tutte le modifiche}} cerchia ogni gruppo di linee modificate su ogni tavola cambiata, in un unico passo annullabile. Il confronto del set non allinea prima le tavole, quindi una tavola spostata nella pagina risulta modificata: confrontare quella coppia da sola e usare {{ui:Allinea con due punti}}.

## Interrompere il confronto

Scegliere {{ui:Interrompi il confronto}}, oppure passare a un'altra tavola. L'allineamento viene ricordato per la stessa coppia di tavole fino alla chiusura del set.

## Da sapere

- Il confronto lavora su ciò che è disegnato, pixel per pixel. Non sa che una linea si è spostata; mostra la vecchia posizione in un colore e la nuova nell'altro.
- Il testo che è andato a capo, una data cambiata nel cartiglio o uno stile di stampa diverso compaiono anch'essi come modifiche.
- Una tavola scansionata confrontata con una stampata è disturbata: la scansione sfoca e sposta le linee.
- Il confronto del testo scritto con un carattere e un elenco delle modifiche non sono ancora implementati.

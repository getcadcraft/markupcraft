---
title: Salva il PDF con annotazioni
summary: Scarica una copia con tutte le annotazioni scritte come commenti PDF standard, verifica cosa vedono gli altri lettori PDF e continua a lavorarci in seguito.
keywords: salva, scarica, esporta pdf, con annotazioni, annotazioni, commenti, condividi, invia, emissione, continua a lavorare, riapri, andata e ritorno, stampa
from: 4c198ebe
---

## Salva

1. Scegliere {{ui:Salva}} nella barra degli strumenti, oppure premere {{key:Mod+S}}.
2. Se sono aperti più file, scegliere {{ui:Questo file}} (il file della tavola su cui si è) oppure {{ui:Ogni file modificato}}. Ogni copia viene scaricata separatamente.
3. Attendere che "Salvataggio di <file>…" termini. Il primo salvataggio in una sessione carica anche il generatore PDF.

Risultato: il browser scarica "<name> (marked up).pdf" e la barra di stato lo segnala: 'Salvato A-Plans (marked up).pdf (24 annotazioni, 18.2 MB). Il file originale non è stato modificato.' Il punto accanto a {{ui:Salva}} scompare.

**Il PDF originale non viene mai modificato.** MarkupCraft crea un nuovo file. Dove finisce dipende dalle impostazioni di download del browser (vedi [File aperti e salvati da MarkupCraft](topic:files#where-downloads-go)).

## Continuare a lavorare in seguito

Aprire la copia "(marked up)", non l'originale, la volta successiva. Tutto torna modificabile: annotazioni, stati, risposte, voci dell'elenco punti da completare, la scala di ogni tavola e i nomi delle tavole digitati. Salvando di nuovo si scarica un file con lo stesso nome "(marked up)"; il browser può aggiungere un numero come "(1)" se il vecchio download è ancora nella cartella. Sostituire o sistemare le vecchie copie manualmente.

MarkupCraft non salva il PDF da solo. Mentre si lavora mantiene una copia di ripristino in questo browser, così un arresto anomalo o una scheda chiusa non fanno perdere le annotazioni: la volta successiva che si apre MarkupCraft chiede "Recupera il lavoro?". Vedi [Recupera il lavoro](common:recover). Salvare comunque prima di chiudere; se si tenta di uscire con annotazioni non salvate, il browser chiede prima "Lasciare il sito?" (iPad Safari non lo fa).

## Cosa vedono gli altri lettori PDF

Ogni annotazione viene scritta come commento PDF standard (annotazione) con il proprio disegno, quindi qualsiasi visualizzatore PDF la mostra, la stampa e la elenca nel pannello dei commenti:

- **L'aspetto è lo stesso** di MarkupCraft: nuvole con le loro ondulazioni, frecce, timbri, punti di conteggio, numeri dell'elenco punti, etichette di misura.
- **I dettagli sono standard:** autore, data, oggetto, testo del commento e colori.
- **Le nuvole** sono commenti rettangolo o poligono con un bordo a nuvola; **le caselle di testo** e i **callout** sono commenti casella di testo; le **note** sono note adesive; i tratti di **penna** ed **evidenziatore** sono commenti inchiostro; i **timbri** sono commenti timbro.
- **Lunghezze e aree** sono commenti di misura, e ogni tavola calibrata porta la sua scala, così i visualizzatori che capiscono le misure possono mostrarne i valori.
- **Le risposte** sono risposte al commento, e **gli stati** sono stati di revisione (Aperto non compare come stato).
- **I numeri di tavola** digitati diventano le etichette di pagina che gli altri visualizzatori mostrano.

Alcune cose le legge solo MarkupCraft: l'assegnatario e la scadenza della voce dell'elenco punti, lo stato della voce e alcuni dettagli di stile. Gli altri programmi le conservano, a meno che non riscrivano il commento.

In un altro programma i commenti si possono spostare o modificare come qualsiasi altro. Se qualcuno lo fa e rimanda il file, MarkupCraft usa la nuova posizione del commento quando apre il file.

Dettagli completi: [Cosa viene salvato nel PDF](topic:what-the-pdf-keeps).

## Caratteri che stampano "?"

Il testo delle annotazioni viene scritto con il carattere standard Helvetica, presente in ogni visualizzatore PDF. Copre le lettere inglesi e dell'Europa occidentale (é, ñ, ü, ø e simili), ma non altri alfabeti, simboli fuori da questo insieme o emoji. Questi caratteri si vedono bene in MarkupCraft, ma nella copia salvata stampano "?", e il messaggio di salvataggio li conta: "3 caratteri fuori dall'insieme dell'Europa occidentale stampano "?" nella copia." Scrivere per esteso tali parole, oppure usare un sostituto semplice (per esempio "dia." per il simbolo del diametro).

## File che non possono essere salvati

- **PDF protetti:** "Questo PDF è protetto (crittografato), quindi non è possibile creare una copia con annotazioni. Chiedere una copia non protetta." È comunque possibile rivederlo a schermo, ed esportare il CSV e il BCF.
- Se il salvataggio fallisce per altro motivo, una finestra intitolata "Impossibile salvare <file>" mostra la causa. Le annotazioni restano nella scheda; nulla viene perso finché non la si chiude.

## Appiattimento e stampa

Non è ancora implementato l'appiattimento (inserire le annotazioni nella pagina) né un comando di stampa diretto. Per stampare, aprire la copia salvata in un qualsiasi visualizzatore PDF e stampare con i commenti visibili.

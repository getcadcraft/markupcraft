---
title: Compilare un modulo PDF
summary: Digitare nei campi di modulo di un PDF, spuntare le caselle e scegliere dagli elenchi; i valori vengono salvati nel modulo stesso.
keywords: modulo, moduli, compilabile, compilare, riempire, acroform, campo, campi, campo di testo, casella di controllo, spunta, pulsante di opzione, elenco a discesa, elenco, permesso, domanda, modulo di ispezione, modulo di consegna documenti, firma di approvazione
from: ab366541
---

Molti PDF contengono un modulo: domande di autorizzazione, liste di controllo per ispezioni, frontespizi di documenti da approvare. MarkupCraft mostra i campi del modulo e i loro valori, e permette di compilarli. I valori finiscono nei campi del PDF stesso, quindi Acrobat e ogni altro lettore PDF li mostrano e li conservano.

## Compilare il modulo

1. Aprire il PDF. Se contiene un modulo, la barra di stato indica quanti campi ha.
2. Scegliere {{ui:Compila modulo}} nella barra degli strumenti (oppure premere {{key:F}}). Ogni campo della pagina riceve una casella in cui digitare.
3. Fare clic su un campo e digitare. Spuntare le caselle, scegliere i pulsanti di opzione, selezionare dagli elenchi a discesa e dagli elenchi. {{key:Tab}} passa al campo successivo.
4. Per spostare il foglio mentre si compila, trascinare in un punto qualsiasi fuori dai campi.
5. Premere {{key:Esc}} o scegliere un altro strumento al termine. Ciò che è stato digitato resta sulla tavola.

Con {{ui:Seleziona}}, un doppio clic su un campo attiva {{ui:Compila modulo}} e porta direttamente in quel campo.

## Salvare il modulo compilato

Scegliere {{ui:Salva}}. La copia scaricata ha i valori nei suoi campi, con le annotazioni accanto. La barra di stato indica quanti campi sono stati compilati.

Per consegnare un modulo che nessuno può modificare, scegliere {{ui:Pagine}}, poi {{ui:Salva una copia appiattita…}}: i valori diventano parte della pagina. Anche la stampa fa lo stesso.

## Da sapere

- Un campo bloccato nel PDF (sola lettura) non può essere modificato. La sua casella è grigia.
- Il testo fino al limite di lunghezza del campo viene conservato; i caratteri in più non vengono digitati.
- Alcuni moduli non hanno un'immagine disegnata delle loro caselle e dei pulsanti, e altri programmi le mostrano vuote. MarkupCraft le disegna e, al salvataggio, aggiunge l'immagine, così appaiono ovunque.
- Annulla in un campo è quello del campo: premere {{key:Ctrl+Z}} mentre si digita al suo interno. L'annulla delle annotazioni non annulla i valori del modulo.
- Se il browser si chiude, i valori digitati tornano insieme al resto del lavoro non salvato.
- I valori digitati con caratteri che il font PDF standard non sa scrivere (per esempio il cinese) vengono salvati, e il PDF chiede a ogni lettore di disegnarli da sé.
- I campi firma e i pulsanti non vengono compilati qui. Per firmare, usare {{ui:Timbro}} e la propria firma.
- I valori digitati in un modulo non sono ancora condivisi in una sessione Live.

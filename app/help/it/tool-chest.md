---
title: La cassetta degli strumenti
summary: Salva un'annotazione con il suo stile come strumento riutilizzabile, disegna con esso e condividi la cassetta con l'ufficio come file.
keywords: cassetta degli strumenti, strumenti, set di strumenti, strumenti personalizzati, annotazioni salvate, preferiti, standard di ufficio, importa, esporta, condividi, json
from: 7dfa36e0
---

La scheda {{ui:Strumenti}} contiene la **cassetta degli strumenti**: annotazioni salvate con il loro aspetto, pronte per essere disegnate di nuovo. Uno strumento conserva il tipo di annotazione, il colore, lo spessore della linea, il riempimento, l'opacità, la dimensione del testo e l'oggetto, più il testo di un timbro, il nome del gruppo di un conteggio o il testo iniziale di una casella di testo o di un callout.

## Gli strumenti iniziali

Una cassetta nuova ne contiene sei: "Nuvola di revisione" (rossa), "Nuvola di domanda" (blu), "Evidenziatore giallo", "Callout RFI" (blu, inizia con "RFI: "), "Verifica in cantiere" (un callout arancio che dice "Verifica in cantiere.") e "Approvato con osservazioni" (un timbro).

## Disegnare con uno strumento

1. Aprire la scheda {{ui:Strumenti}}.
2. Fare clic su uno strumento. Appare premuto e lo strumento corrispondente della barra degli strumenti si attiva.
3. Disegnare come al solito. {{ui:Proprietà}} indica 'Disegno con "<strumento>" dalla cassetta degli strumenti.'

Mentre uno strumento della cassetta è attivo, le modifiche fatte in {{ui:Proprietà}} prima di disegnare si applicano per ora solo a quello strumento, senza cambiare lo strumento salvato né le impostazioni normali. Scegliere un pulsante della barra, o premere il tasto di uno strumento, torna allo strumento normale.

## Salvare un proprio strumento

1. Disegnare un'annotazione e darle lo stile desiderato: colore, linea, riempimento, oggetto, testo del timbro.
2. Selezionarla.
3. Scegliere {{ui:Salva la selezione come strumento}} nella scheda {{ui:Strumenti}}, oppure {{ui:Salva come strumento}} in {{ui:Proprietà}}.
4. Digitare un {{ui:Nome dello strumento}} e scegliere {{ui:Salva strumento}}.

Risultato: lo strumento viene aggiunto in fondo alla cassetta, e la scheda {{ui:Strumenti}} si apre mostrandolo.

## Timbri creati da una selezione

Selezionare più annotazioni (oppure contenuto della pagina con lo strumento {{ui:Contenuto}}) e scegliere {{ui:Salva la selezione come timbro…}} in {{ui:Altro}} o nel menu del clic destro. La cassetta riceve un unico timbro che le contiene tutte ("Timbro: 3 annotazioni insieme"). Fare clic su di esso, poi su una tavola qualsiasi: le annotazioni arrivano insieme, centrate dove si fa clic, come nuove annotazioni con il proprio nome; il contenuto della pagina viene disegnato nella pagina in quel punto. Questi timbri vengono salvati e condivisi con la cassetta come ogni altro strumento.

## Rimuovere uno strumento

Scegliere la × alla fine della riga dello strumento, poi {{ui:Rimuovi}}. Le annotazioni già disegnate con esso restano come sono.

## Dove è conservata la cassetta

La cassetta è memorizzata **in questo browser, su questo computer**. Un altro browser o computer ha una cassetta propria (che inizia con i sei strumenti predefiniti), una finestra in incognito la dimentica alla chiusura, e cancellare i dati del sito nelle impostazioni del browser la elimina.

Se il browser non riesce a memorizzarla (archiviazione disattivata o piena), la barra di stato dice: "La cassetta degli strumenti non può essere conservata in questo browser (archiviazione disattivata o piena). Esportarla per conservarla."

:::safari
Safari può cancellare i dati memorizzati di un sito quando il sito non viene usato per un po' di tempo. Esportare la cassetta ogni tanto, così da poterla importare di nuovo.
:::

**Esportare la cassetta come copia di sicurezza**, soprattutto dopo aver creato strumenti su cui si fa affidamento.

## Condividere una cassetta con l'ufficio

1. Impostare gli strumenti una volta.
2. Scegliere {{ui:Esporta}}. Si ottiene il file "MarkupCraft tool chest.json".
3. Mettere quel file dove l'ufficio conserva gli standard, oppure inviarlo.
4. Tutti gli altri scelgono {{ui:Importa}} nella loro scheda {{ui:Strumenti}} e selezionano il file.

Risultato: "Importati 12 strumenti da "MarkupCraft tool chest.json"." Gli strumenti provenienti dalla stessa cassetta sostituiscono le copie più vecchie, quindi importare una cassetta d'ufficio aggiornata rinnova quegli strumenti invece di duplicarli; i nuovi strumenti vengono aggiunti. Una cassetta contiene fino a 500 strumenti.

MarkupCraft controlla ogni valore di un file importato e salta ciò che non può usare ("2 saltati (non utilizzabili)"). I file che non sono una cassetta vengono rifiutati: "Questo file non è una cassetta degli strumenti di MarkupCraft." oppure "Questo file non è una cassetta degli strumenti (non è JSON)."

I file di cassetta degli strumenti di altri programmi di annotazione non possono essere importati.

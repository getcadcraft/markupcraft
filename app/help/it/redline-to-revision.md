---
title: Inviare le annotazioni al disegnatore come redline
summary: Scrivere le annotazioni aperte come file redline per chi disegna le modifiche, poi caricare le sue risposte, così ogni annotazione mostra Accettata o Rifiutata.
keywords: redline, revisione, disegnatore, accetta, rifiuta, risposte, cc-redline, nuvola di revisione, applica annotazioni
from: cb099d04
---

La revisione è metà del lavoro: il disegno deve ancora cambiare. Il file redline porta ogni annotazione aperta al disegnatore, e le sue risposte riportano il risultato indietro.

## Inviare

1. Aprire la scheda {{ui:Attività}} e aprire {{ui:Redline verso la revisione}}.
2. Digitare la revisione a cui si riferiscono le annotazioni (per esempio B).
3. Scegliere {{ui:Esporta file redline}}.

Si ottiene un file `.redline.json` con una voce per ogni annotazione Aperta: la sua tavola, dove si trova (come frazioni della tavola, così una nuova stampa a dimensione diversa resta allineata, e in punti), il suo testo, l'autore, la discussione e l'attività, se ne ha una. I commenti in sola lettura di altri programmi, le immagini e le legende sono esclusi.

## Risposte

Il lato disegno risponde a ogni voce come Accettata, Rifiutata o Completata, con una nota, in un file `.redline-answers.json`. Scegliere {{ui:Carica file delle risposte…}} e selezionarlo: ogni annotazione riceve quello stato e la nota del disegnatore nella sua discussione, e un'attività la cui annotazione è stata accettata o completata viene chiusa. Un solo passo di annullamento ripristina tutte le risposte.

Il formato del file è descritto in `docs/REDLINE-FORMAT.md`. La parte CadCraft (lettura del pacchetto, accettazione o rifiuto di ogni voce, nuvole di revisione e registro) è in sviluppo a parte.

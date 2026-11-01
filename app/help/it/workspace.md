---
title: Un giro della schermata
summary: La barra degli strumenti, l'elenco delle tavole, l'area della tavola, i cinque pannelli a destra e la barra di stato, con i nomi che hanno sullo schermo.
keywords: schermata, disposizione, barra degli strumenti, pannelli, barra laterale, miniature, proprietà, barra di stato, interfaccia, schermo intero, tema, modalità scura
from: 18d82de6
---

MarkupCraft riempie la finestra del browser. Dall'alto in basso e da sinistra a destra:

## La barra in cima

La barra sottile sopra tutto appartiene alla famiglia CadCraft, non a MarkupCraft stesso. Contiene:

- il nome dell'app e la versione in uso,
- {{ui:Informazioni su MarkupCraft}}, che apre la pagina dell'app sul sito,
- {{ui:Guida}}, che apre questa guida in un pannello laterale (oppure premere {{key:F1}}),
- {{ui:Salva per l'uso offline}}, che conserva MarkupCraft, il suo lettore e programma di scrittura PDF e questa guida in questo browser così si apre senza connessione; poi indica "Pronto per l'uso offline" (vedere [Lavorare offline](common:offline)),
- il pulsante della modalità schermo ({{ui:Schermo intero}}), e
- {{ui:Impostazioni}} (oppure {{key:Mod+,}}), con una scheda {{ui:MarkupCraft}} per le impostazioni proprie dell'app e {{ui:Generali}} per quelle condivise da ogni app CadCraft (vedere [Impostazioni di MarkupCraft](topic:settings)), e
- {{ui:Carta}} e {{ui:Modello}}, i temi chiaro e scuro. In {{ui:Modello}} le tavole sono disegnate chiaro su scuro; le annotazioni mantengono i propri colori.

Il pulsante della modalità schermo, o {{key:Ctrl+Shift+F}}, scorre tre modalità: normale, schermo intero e schermo intero con le barre nascoste. Con le barre nascoste, spostare il puntatore sul bordo superiore dello schermo (o toccarlo) e le barre tornano. Questa scorciatoia usa il tasto Control su ogni computer, Mac compreso.

:::note
A schermo intero, {{key:Esc}} fa anche uscire il browser dallo schermo intero. Se si voleva solo annullare un disegno, premere di nuovo {{key:Ctrl+Shift+F}} per tornare a schermo intero.
:::

## La barra degli strumenti

Sotto la barra in cima, gli strumenti sono raggruppati ed etichettati:

| Gruppo | Pulsanti |
|---|---|
| File | {{ui:Apri}}, {{ui:Salva}}, {{ui:Chiudi}} |
| Seleziona | {{ui:Seleziona}}, {{ui:Pan}} |
| Disegna | {{ui:Penna}}, {{ui:Evidenzia}}, {{ui:Linea}}, {{ui:Freccia}}, {{ui:Rettangolo}}, {{ui:Ellisse}}, {{ui:Polilinea}}, {{ui:Poligono}} |
| Rivedi | {{ui:Nuvola}}, {{ui:Nuvola libera}} |
| Annota | {{ui:Callout}}, {{ui:Testo}}, {{ui:Nota}}, {{ui:Timbro}} |
| Misura | {{ui:Calibra}}, {{ui:Lunghezza}}, {{ui:Area}}, {{ui:Conteggio}} |
| Modifica | {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}}, e {{ui:Altro}}: {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Seleziona tutto}}, {{ui:Deseleziona tutto}} |

Lo strumento in uso appare premuto. Tenere il puntatore su un pulsante per vedere il suo tasto (ad esempio "Rettangolo (R)"); il menu {{ui:Altro}} elenca accanto a ogni comando il suo tasto. I pulsanti che al momento non possono agire sono attenuati: {{ui:Copia}} finché non si seleziona un'annotazione, {{ui:Incolla}} finché non si copia qualcosa. Un piccolo punto dopo {{ui:Salva}} indica che alcune annotazioni non sono ancora salvate. L'elenco completo dei tasti è in [Tastiera e mouse](topic:keyboard).

Uno strumento resta attivo dopo l'uso, così si possono disegnare più nuvole di seguito. Premere {{key:Esc}} (due volte se la nuova annotazione è ancora selezionata) o {{key:V}} per tornare a {{ui:Seleziona}}.

## L'elenco delle tavole (a sinistra)

{{ui:Tavole}} elenca ogni pagina di ogni PDF aperto. Ogni riga mostra una piccola immagine della tavola, il suo nome, il numero di tavola o il file e la pagina, e quante annotazioni ha. Il conteggio dopo il titolo è il numero di tavole.

- Fare clic su una riga per mostrare quella tavola.
- Digitare in {{ui:Cerca tavole}} per filtrare per nome di tavola, numero di tavola o nome del file. Premere {{key:Enter}} per aprire la prima corrispondenza.

I nomi delle tavole provengono dal PDF quando li contiene. Vedere [Aprire un set di tavole e passare da una tavola all'altra](topic:open-a-plan-set).

## L'area della tavola (al centro)

La tavola su cui si lavora. Prima che sia aperto qualcosa mostra "Aprire un set di tavole" con un pulsante {{ui:Apri PDF}}. Rilasciare qui i PDF in qualsiasi punto per aprirli.

Sotto la tavola, una barra stretta contiene:

- le frecce di tavola precedente e successiva e "3 di 12: A-101 — Pianta del piano" (tenere il puntatore sopra per vedere il file e la pagina),
- riduzione dello zoom, la casella dello zoom (digitare una percentuale e premere {{key:Enter}}; 100% è la dimensione reale su uno schermo tipico), aumento dello zoom,
- {{ui:Adatta alla pagina}} e {{ui:Adatta alla larghezza}}.

Ogni tavola ricorda il proprio zoom finché il set è aperto.

Quando si confrontano due tavole, qui compare una legenda: "Solo sulla tavola vecchia", "Solo sulla tavola nuova" e "Su entrambe". Vedere [Confrontare due revisioni](topic:compare-revisions).

## I pannelli (a destra)

Cinque schede:

| Scheda | Cosa mostra |
|---|---|
| {{ui:Proprietà}} | L'annotazione selezionata: autore, date, valori misurati, stato, oggetto, testo, commento, stile, risposte e voce di punch. Con uno strumento di disegno attivo e nulla di selezionato, le impostazioni che useranno le nuove annotazioni. Con nulla di selezionato e {{ui:Seleziona}} attivo, la tavola: numero, titolo, da dove è stato letto il nome, formato della carta, scala e {{ui:Rinomina tavola}}. |
| {{ui:Annotazioni}} | Ogni annotazione del set aperto, con filtri, ed esportazioni {{ui:CSV}} e {{ui:BCF}}. Vedere [L'elenco delle annotazioni](topic:markups-list-and-export). |
| {{ui:Punti da completare}} | Voci di punch numerate con assegnatario, scadenza e stato. Vedere [Creare un elenco punch](topic:punch-list). |
| {{ui:Strumenti}} | La cassetta degli strumenti: strumenti salvati e con stile. Vedere [La cassetta degli strumenti](topic:tool-chest). |
| {{ui:Confronta}} | Sovrapporre due tavole. Vedere [Confrontare due revisioni](topic:compare-revisions). |

## La barra di stato (in basso)

- A sinistra, dove si trova il puntatore sulla tavola, in pollici (o millimetri, in [Impostazioni](topic:settings)) sulla carta.
- Al centro, i messaggi: cosa si aspetta uno strumento, cosa è stato appena salvato, perché qualcosa è stato rifiutato. **Leggerla quando qualcosa non accade.**
- Il pulsante della scala della tavola ("Non calibrata", oppure la scala). Fare clic per impostare la scala. Vedere [Calibrare una tavola e misurare](topic:calibrate-and-measure).
- Il nome ("Impostare il nome" finché non ne viene dato uno). Fare clic per cambiarlo.

## Su uno schermo piccolo

Sotto circa 1180 pixel di larghezza i pannelli si restringono e le immagini delle tavole si riducono. Su uno schermo delle dimensioni di un telefono le parti si impilano: barra degli strumenti (da far scorrere di lato), la tavola, la barra di stato, i pannelli, poi l'elenco delle tavole in fondo. Un tablet in orizzontale mantiene la disposizione completa.

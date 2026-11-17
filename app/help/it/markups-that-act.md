---
title: Trasformare un'annotazione in attività
summary: Assegnare un'annotazione a una persona o al proprio assistente, con un giorno di scadenza e un collegamento all'elemento del disegno o del modello a cui si riferisce, e vederla chiudersi quando cambia davvero.
keywords: attività, task, assegnatario, assistente, scadenza, in ritardo, collegamento, chiude, modificato, elemento, area del disegno, annotazioni che agiscono, MCP
from: 9e970202
---

Un'attività è un'annotazione che deve essere svolta da qualcuno. Mantiene il suo posto sulla tavola e la sua discussione, e aggiunge un titolo, un assegnatario, un giorno di scadenza, uno stato e, se si vuole, un collegamento alla cosa a cui si riferisce.

## Creare un'attività

1. Selezionare una o più annotazioni.
2. Aprire la scheda {{ui:Attività}} e scegliere {{ui:Crea attività dalla selezione}}.
3. Compilare il titolo (parte dal testo dell'annotazione), per chi è ({{ui:Persona}} o {{ui:Assistente}}, e un nome), un giorno di scadenza facoltativo, e cosa tenere d'occhio.

Un'attività per l'assistente è lavoro per l'assistente collegato a MarkupCraft (consultare [Usare MarkupCraft con un assistente IA](topic:use-with-ai-assistants)). MarkupCraft non contiene un assistente proprio: elenca solo il lavoro e riceve le risposte dell'assistente. Scegliere {{ui:Assegnata a}}, poi {{ui:Assistente}} nell'elenco, mostra ciò che lo aspetta.

## Osservare un cambiamento

- **Il disegno dentro l'annotazione.** MarkupCraft conserva le linee dentro il riquadro dell'annotazione così come sono ora. Quando si apre una revisione più recente di quella tavola (un secondo file con lo stesso numero di tavola, oppure la stessa posizione di pagina), scegliere {{ui:Verifica ora}}: se le linee in quell'area differiscono di più di un nulla, l'attività viene chiusa.
- **Un elemento del modello.** Indicare l'app e l'id dell'elemento. L'assistente legge l'elemento con gli strumenti propri dell'altra app e lo segnala con `tasks_check`. Il primo rapporto viene conservato come stato iniziale; un rapporto successivo diverso chiude l'attività. Anche un elemento eliminato la chiude.
- **Niente.** Un'attività semplice che si termina a mano.

Un'attività chiusa viene segnata come Fine, la sua annotazione diventa Completato, e una nota nella discussione dice cosa è cambiato. Un solo passo di annullamento la riapre.

**Limite:** il controllo presuppone che la revisione più recente usi la stessa origine e la stessa dimensione di pagina. Una tavola ristampata a un'altra dimensione non corrisponderà, quindi le sue attività non si chiudono. Le tavole vengono abbinate per numero di tavola, altrimenti per posizione di pagina; MarkupCraft non scala una revisione per adattarla all'altra.

Ristampare lo stesso disegno con una nuova data, oppure linee spostate meno di 1.5 punti, non conta come cambiamento. Se non è aperta alcuna revisione più recente, l'attività resta aperta e la barra di stato lo segnala.

## L'elenco

L'elenco {{ui:Attività}} può essere filtrato per stato e per destinatario, incluso {{ui:In ritardo}}. Un'attività oltre il suo giorno di scadenza appare nel pannello dei Problemi come avviso. {{ui:CSV}} esporta l'elenco.

Le attività sono salvate nel PDF con l'annotazione, e viaggiano attraverso Live come le altre proprietà delle annotazioni.

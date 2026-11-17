---
title: Creare una punch list
summary: Trasformare le annotazioni in voci numerate della punch list con un assegnatario, una scadenza e uno stato, ed esportare l'elenco.
keywords: punch list, punch, elenco difetti, difetti, problemi di cantiere, osservazione, assegnare, assegnatario, scadenza, collaudo, sopralluogo, numero
from: b98b38e6
---

Una voce della punch list è un'annotazione con un numero, un assegnatario, una scadenza e uno stato della voce. Il numero viene disegnato sulla tavola accanto all'annotazione, così la tavola stampata e l'elenco coincidono.

## Aggiungere voci

1. Annotare ogni problema sulle tavole: una nuvola, un callout, una nota, qualsiasi cosa.
2. Selezionarne una o più (vedi [Selezionare, spostare e modificare le annotazioni](topic:select-and-edit)).
3. Aprire la scheda {{ui:Punch list}} e scegliere {{ui:Aggiungi la selezione alla punch list}}, oppure scegliere {{ui:Aggiungi alla punch list}} in {{ui:Proprietà}}.

Risultato: ogni annotazione riceve il numero successivo (1, 2, 3…), nell'ordine delle tavole e poi nell'ordine in cui è stata disegnata. Sulla tavola compare un contrassegno numerato, e la barra di stato dice "Aggiunte 3 voci alla punch list." Le annotazioni che hanno già un numero e i commenti in sola lettura vengono saltati.

## Compilare i dettagli

Nella scheda {{ui:Punch list}}, ogni voce mostra il suo numero, l'oggetto, il testo, la tavola e lo stato, con tre campi sotto. Gli stessi campi sono in {{ui:Proprietà}}, sotto "Punch list", quando l'annotazione è selezionata:

- {{ui:Assegnatario}}: un nome o una categoria, come testo libero.
- {{ui:Scadenza}}: una data, dal selettore di date.
- {{ui:Stato della voce}}: Aperta, In lavorazione, Pronta per la verifica o Chiusa.

Fare clic sull'intestazione di una voce per andare alla sua tavola.

Lo stato della voce è separato dallo stato di revisione dell'annotazione (Aperta, Accettata, Rifiutata, Completata). Usare lo stato della voce per il lavoro, e lo stato di revisione per il commento.

## Togliere una voce

Selezionare l'annotazione e scegliere {{ui:Togli dalla punch list}} in {{ui:Proprietà}}. L'annotazione resta; se ne va solo il numero. Finché il set è aperto, i numeri non vengono riutilizzati: la voce successiva riceve il numero successivo nuovo, quindi un buco nella numerazione indica una voce tolta. Quando un file viene riaperto, la numerazione continua dopo il numero più alto che contiene.

## Esportare l'elenco

Scegliere {{ui:Esporta CSV}} nella scheda {{ui:Punch list}}. Si ottiene "<nome> punch list.csv" con le colonne N., Tavola, File, Pagina, Voce, Commento, Assegnatario, Scadenza, Stato, Stato annotazione, Autore e Creato, in ordine di numero. Aprirlo con un qualsiasi foglio di calcolo.

I numeri, gli assegnatari, le scadenze e gli stati delle voci sono salvati anche nel PDF annotato, così tornano quando lo si riapre. Gli altri visualizzatori PDF mostrano il contrassegno numerato come parte dell'annotazione. L'esportazione BCF dell'elenco delle annotazioni riporta anche l'assegnatario e la scadenza (vedi [Nozioni base su BCF](topic:bcf-basics)).

## Sul cantiere con un tablet

Aprire il set su un iPad, percorrere il cantiere e inserire una {{ui:Nota}} o disegnare una {{ui:Nuvola}} su ogni problema. Aggiungerle alla punch list man mano, e salvare prima di andarsene. Vedi [Revisione su iPad o schermo touch](topic:review-on-a-tablet).

Un report formattato della punch list in PDF o foglio di calcolo, e le foto allegate alle voci, non sono ancora implementati.

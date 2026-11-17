---
title: Stati e risposte
summary: Assegna a ogni commento lo stato Aperto, Accettato, Respinto o Completato, discutilo in un filo di risposte e passa il filo nel PDF.
keywords: stato, stato di revisione, accettato, respinto, completato, aperto, risposta, risposte, filo, commento, conversazione, discussione, rispondere, verifica di ritorno
from: 0f3e8b91
---

Ogni annotazione ha uno **stato** e un **filo di risposte**. Insieme portano avanti un ciclo di revisione: il revisore annota, il progettista risponde e imposta gli stati, il revisore verifica di nuovo.

## Impostare uno stato

1. Selezionare l'annotazione (o più annotazioni).
2. In {{ui:Proprietà}}, scegliere uno {{ui:Stato}}: Aperto, Accettato, Respinto o Completato.

Risultato: lo stato compare come etichetta nell'elenco {{ui:Annotazioni}}, e al filo viene aggiunta una riga: "Stato impostato su Accettato da Ana Ruiz." Con più annotazioni selezionate, la casella dello stato indica "Misto" finché non se ne sceglie uno, che poi le cambia tutte.

Le nuove annotazioni iniziano come Aperto. Anche quelle incollate o duplicate iniziano come Aperto.

## Rispondere

1. Selezionare l'annotazione.
2. In {{ui:Proprietà}}, trovare "Risposte" sotto le impostazioni dello stile.
3. Digitare in {{ui:Scrivere una risposta}}.
4. Scegliere {{ui:Risposta}}, oppure premere {{key:Mod+Enter}}.

Risultato: la risposta è elencata con il nome, la data e l'ora, e il titolo ne conta il numero: "Risposte (3)". L'elenco {{ui:Annotazioni}} mostra un conteggio delle risposte sulla riga.

- Le modifiche di stato sono elencate nello stesso filo e contrassegnate come voci di stato, così la cronologia si legge in ordine.
- Se si inizia a scrivere una risposta e si fa clic su altro, la bozza viene conservata finché non si torna a quell'annotazione (fino alla chiusura del set).
- Se il proprio nome non è impostato, MarkupCraft lo chiede prima dell'invio.
- È possibile rispondere anche ai commenti di sola lettura che arrivano con il file.

:::note
Una risposta inviata non può essere modificata né eliminata. Subito dopo l'invio, {{key:Mod+Z}} la ritira; dopo, aggiungere una nuova risposta che corregge la precedente.
:::

## Aggiungere una foto

Sotto la casella di risposta, {{ui:Aggiungi foto}} aggiunge un'immagine al filo: un PNG o JPEG dal computer oppure, su tablet o telefono, una foto appena scattata. Il testo digitato nella casella di risposta diventa la sua didascalia. Il filo mostra una miniatura; fare clic per vederla a dimensione intera. Le foto grandi vengono ridotte a 1600 pixel sul lato più lungo.

Nel PDF salvato ogni foto viaggia anche come file allegato accanto all'annotazione (una graffetta), così altri visualizzatori PDF possono aprirla.

## Passare avanti la revisione

Non esiste ancora una sessione online condivisa: la revisione viaggia nel PDF.

1. Scegliere {{ui:Salva}}. La copia contiene ogni annotazione con il proprio stato e le sue risposte.
2. Inviare quella copia nel modo in cui si inviano oggi i disegni.
3. La persona successiva la apre in MarkupCraft, risponde, imposta gli stati e salva di nuovo.

Gli altri programmi PDF vedono le risposte come risposte al commento, e gli stati come stati di revisione (Accettato, Respinto, Completato; Aperto non compare come stato). Le loro risposte e i loro stati di revisione tornano in MarkupCraft all'apertura del file: vince lo stato più recente.

Se due persone annotano copie separate nello stesso momento, non c'è unione. È possibile aprire entrambe le copie in un solo set e copiare alcune annotazioni con {{key:Mod+C}} e {{key:Mod+V}}, ma una copia incollata è una nuova annotazione: porta il nome di chi la incolla, una nuova data e lo stato Aperto, e finisce leggermente spostata. Concordare chi annota quali tavole, per evitarlo.

## Trovare ciò che è ancora aperto

Nella scheda {{ui:Annotazioni}}, impostare {{ui:Stato}} su "Aperto" per elencare solo le voci aperte, e {{ui:Autore}} su un solo revisore. Vedi [L'elenco delle annotazioni](topic:markups-list-and-export).

Lo stato (Aperto, Accettato, Respinto, Completato) riguarda il commento. Una voce di un elenco di punti da completare ha uno stato separato per il lavoro in cantiere; vedi [Creare un elenco di punti da completare](topic:punch-list).

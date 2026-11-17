---
title: Monitorare RFI, documenti da approvare e giornali di cantiere
summary: Inserire RFI, documenti da approvare e giornali di cantiere sulle tavole, con numeri, assegnatari, scadenze e discussioni; filtrare ciò che è in ritardo; esportare in CSV o BCF; lavorare offline e unire le copie.
keywords: rfi, richiesta di informazioni, documento da approvare, giornale di cantiere, rapporto di cantiere, diario di cantiere, costruzione, in ritardo, scadenza, assegnati a me, discussione, allegato, unisci, offline, tablet, bcf, csv, cantiere
from: 95039c5a
---

La scheda {{ui:Cantiere}} conserva tre tipi di registrazione accanto alle annotazioni. Ciascuna è legata a una tavola; una RFI o un documento da approvare ha anche una puntina nel punto della tavola a cui si riferisce.

- **RFI**: una domanda per il team di progettazione. Stati: Aperta, Risposta, Chiusa.
- **Documento da approvare**: qualcosa da verificare prima che il lavoro proceda. Stati: Aperto, In revisione, Approvato, Approvato con osservazioni, Rivedere e ripresentare, Chiuso.
- **Giornale di cantiere**: il meteo del giorno, il numero di persone in cantiere e il lavoro eseguito. Stati: Bozza, Definitivo.

Ogni registrazione ha un numero del proprio tipo (RFI-0001, SUB-0001, LOG-0001), un titolo, un testo, un assegnatario, una scadenza, una discussione di risposte e un elenco di nomi degli allegati.

## Aggiungere una registrazione

1. Aprire la scheda {{ui:Cantiere}} e scegliere {{ui:RFI}} o {{ui:Documento da approvare}}.
2. Toccare o fare clic sulla tavola a cui appartiene. Compare una puntina e la registrazione si apre nella scheda.
3. Compilare il titolo, la domanda o la descrizione, l'assegnatario e la scadenza.

Un giornale di cantiere viene aggiunto alla tavola aperta senza puntina. {{ui:Posiziona puntina}} ne mette una in seguito; {{ui:Sposta puntina}} sposta qualsiasi puntina. Toccare una puntina sulla tavola apre la sua registrazione.

## Rispondere e monitorare

Cambiare lo {{ui:Stato}} e la modifica viene registrata nella discussione. Scrivere una risposta e scegliere {{ui:Invia risposta}} (anche Ctrl+Invio invia). Gli allegati sono solo nomi: digitarne uno o scegliere dei file, e l'elenco indica al team cosa accompagna la registrazione. I file stessi restano dove si trovano.

Una registrazione la cui scadenza è passata e che è ancora in attesa (una RFI non Risposta né Chiusa, un documento da approvare non deciso) è contrassegnata come **In ritardo**, in rosso, nell'elenco e sulla sua puntina.

## Trovare ciò che conta

I filtri si trovano sopra l'elenco: tipo, stato, scadenza (in ritardo, in scadenza entro 7 giorni, con o senza scadenza), questa tavola o tutte le tavole, una ricerca di testo e {{ui:Assegnati a me}}, che confronta l'assegnatario con il nome con cui MarkupCraft conosce l'utente (vedi [Impostare il proprio nome](topic:set-your-name)). La riga sotto i filtri conta ciò che viene mostrato e ciò che è in ritardo.

## Esportazione

{{ui:CSV}} scrive le registrazioni elencate come foglio di calcolo. {{ui:BCF}} le scrive come argomenti BCF, ciascuno con un'istantanea della sua posizione sulla tavola, così altri strumenti BCF possono elencarle. Entrambi seguono i filtri.

## Salvataggio, uso offline e unione di copie

Le registrazioni vengono salvate nel PDF al salvataggio e ricompaiono all'apertura. Non serve la rete: aggiungere, modificare, rispondere e salvare su un tablet in un seminterrato, poi riportare il PDF. I PDF più vecchi e quelli di altri programmi si aprono come sempre.

Per unire due copie, aprirne una e scegliere {{ui:Unisci}}, poi selezionare l'altra copia dello stesso PDF. Le registrazioni vengono collegate tramite i loro identificativi:

- una registrazione presente in una sola copia viene aggiunta;
- una registrazione presente in entrambe prende i suoi campi (titolo, testo, stato, assegnatario, scadenza) dalla copia modificata per ultima, nel suo insieme; quindi, se due persone hanno modificato campi diversi della stessa registrazione, vince la versione della copia più recente; discussioni e nomi degli allegati di entrambe le copie vengono uniti;
- se entrambe le copie hanno dato lo stesso numero a una nuova registrazione, quella che arriva riceve il numero libero successivo;
- una registrazione rimossa in una copia resta rimossa, a meno che non sia stata modificata dopo.

Un'unione è un solo passo di Annulla.

## Limiti

- Le registrazioni non sono ancora condivise da Live TeamWork; usare Unisci.
- In questa versione non ci sono team, notifiche o progetti cloud per le registrazioni.
- Le pagine eliminate dal PDF portano via con sé le loro registrazioni (la conferma della pagina le conta).

---
title: Nozioni di base su BCF
summary: Cosa contiene un'esportazione BCF da MarkupCraft, come usarla con gli strumenti di coordinamento BIM e i suoi limiti.
keywords: bcf, bcfzip, formato di collaborazione BIM, segnalazioni, coordinamento, interferenza, argomenti, punto di vista, istantanea, openbim, buildingsmart, esporta segnalazioni
from: 0de26175
---

BCF (BIM Collaboration Format) è un formato di file aperto per lo scambio di segnalazioni tra strumenti BIM. Molti programmi di coordinamento e di authoring del modello possono importare un file `.bcfzip` come elenco di segnalazioni. MarkupCraft scrive **BCF 2.1**.

## Crearne uno

1. Aprire la scheda {{ui:Annotazioni}}.
2. Filtrare l'elenco in base a ciò che si vuole inviare, per esempio {{ui:Stato}} "Aperto". Vengono esportate solo le annotazioni elencate.
3. Scegliere {{ui:BCF}}.
4. Attendere mentre viene creata un'istantanea di ogni annotazione ("Creazione di istantanee per BCF (5 di 20)…").

Risultato: viene scaricato "<name> markups.bcfzip", e la barra di stato indica quanti argomenti contiene e la dimensione del file.

## Cosa contiene

Ogni annotazione diventa un **argomento**.

| Campo dell'argomento | Compilato con |
|---|---|
| Titolo | Numero di punzonatura, oggetto e tavola, per esempio "#4 Nuvola su A-101 — Pianta del piano" |
| Tipo | Il tipo di annotazione (Nuvola, Richiamo, Lunghezza…) |
| Stato | Open, Accepted, Rejected o Completed |
| Etichette | Il tipo di annotazione e la tavola |
| Autore e date | L'autore dell'annotazione e le date di creazione e modifica |
| Assegnato a, scadenza | Dalla relativa voce dell'elenco punti da completare, quando presente |
| Descrizione | Il testo o la dicitura del timbro, il valore misurato, il commento, la tavola e il file |
| Commenti | Uno per risposta, con autore e data |
| Istantanea | Un'immagine dell'annotazione nella sua parte della tavola |
| Punto di vista | Una vista dall'alto del punto della tavola in cui si trova l'annotazione |

Esportando di nuovo la stessa annotazione si ottiene lo stesso ID argomento, quindi uno strumento che importa BCF può riconoscerla come la stessa segnalazione.

## Cosa torna indietro all'importazione

{{ui:Importa BCF}} legge i file BCF 2.0, 2.1 e 3.0 (verificato sui 19 file di prova ufficiali buildingSMART 3.0: ogni argomento è stato letto e i commenti dei tre che contengono testo). Per un argomento proprio (stesso ID argomento) aggiunge i nuovi commenti come risposte e assume il nuovo stato. Ogni altro argomento diventa una nota sulla tavola indicata dalla sua etichetta o dal nome del file, altrimenti sulla tavola aperta, con titolo, descrizione, assegnatario e scadenza come testo della nota e i suoi commenti come risposte.

| Nell'argomento BCF | In MarkupCraft |
|---|---|
| Titolo, descrizione, assegnatario, scadenza | Il testo della nota |
| Commenti con testo | Risposte |
| Stato Open, Accepted, Rejected, Completed (Closed, Resolved, Done contano come Completed) | Lo stato dell'annotazione |
| Autore e data di creazione | Autore e data della nota |
| Posizione della camera | Un punto sulla tavola, solo per un argomento legato a una tavola tramite etichetta o nome del file |
| Selezione del modello, parti nascoste, piani di ritaglio, istantanee | Non conservati: una tavola non ha un modello in cui mostrarli |

## Limiti da conoscere

- **Una tavola non è un modello.** Il punto di vista indica la posizione dell'annotazione sulla carta, misurata in metri di carta. Non porta uno strumento BIM in un punto del modello. Usare l'istantanea e il nome della tavola per trovare il punto.
- **Stati e tipi sono propri di MarkupCraft** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Il file li dichiara, come consente BCF, ma uno strumento con elenchi fissi propri può associarli diversamente o ignorarli.
- **L'importazione porta commenti, non viste del modello.** {{ui:Importa BCF}} aggiunge risposte e stati alle annotazioni esportate e crea note per le altre segnalazioni; non può mostrare una camera del modello. Vedere [Elenco delle annotazioni ed esportazione](topic:markups-list-and-export#import-bcf).
- Inviare le annotazioni come PDF è spesso più semplice per le revisioni dei disegni. BCF serve a portare i commenti sui disegni in un flusso di coordinamento del modello.

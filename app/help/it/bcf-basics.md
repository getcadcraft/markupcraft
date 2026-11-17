---
title: Nozioni base su BCF
summary: Cosa contiene un'esportazione BCF da MarkupCraft, come usarla con gli strumenti di coordinamento BIM e i suoi limiti.
keywords: bcf, bcfzip, formato di collaborazione BIM, segnalazioni, coordinamento, interferenza, argomenti, punto di vista, istantanea, openbim, buildingsmart, esporta segnalazioni
from: 446f38c1
---

BCF (BIM Collaboration Format) è un formato di file aperto per scambiare segnalazioni tra strumenti BIM. Molti programmi di coordinamento e di authoring dei modelli possono importare un file `.bcfzip` come elenco di segnalazioni. MarkupCraft scrive **BCF 2.1**.

## Crearne uno

1. Aprire la scheda {{ui:Annotazioni}}.
2. Filtrare l'elenco su ciò che si vuole inviare, per esempio {{ui:Stato}} "Aperto". Vengono esportate solo le annotazioni presenti nell'elenco.
3. Scegliere {{ui:BCF}}.
4. Attendere mentre viene creata un'istantanea di ogni annotazione ("Creazione istantanee per BCF (5 di 20)…").

Risultato: viene scaricato "<name> markups.bcfzip", e la barra di stato indica quanti argomenti contiene e la dimensione del file.

## Cosa contiene

Ogni annotazione diventa un **argomento**.

| Campo dell'argomento | Compilato con |
|---|---|
| Title | Numero della voce, oggetto e tavola, per esempio "#4 Nuvola su A-101 — Pianta del piano" |
| Type | Il tipo di annotazione (Nuvola, Callout, Lunghezza…) |
| Status | Aperto, Accettato, Rifiutato o Completato |
| Labels | Il tipo di annotazione e la tavola |
| Author and dates | L'autore dell'annotazione, le date di creazione e di modifica |
| Assigned to, due date | Dalla sua voce della punch list, quando ce l'ha |
| Description | Testo o parole del timbro, valore misurato, commento, tavola e file |
| Comments | Uno per ogni risposta, con autore e data |
| Snapshot | Un'immagine dell'annotazione sulla sua parte della tavola |
| Viewpoint | Una vista dall'alto del punto della tavola in cui si trova l'annotazione |

Esportare di nuovo la stessa annotazione produce lo stesso ID argomento, quindi uno strumento che importa BCF può riconoscerla come la stessa segnalazione.

## Limiti da conoscere

- **Una tavola non è un modello.** Il punto di vista indica la posizione dell'annotazione sulla carta, misurata in metri di carta. Non porta uno strumento BIM in un punto del modello. Usare l'istantanea e il nome della tavola per trovare il punto.
- **Stati e tipi sono propri di MarkupCraft** (Aperto, Accettato, Rifiutato, Completato; Nuvola, Callout…). Il file li dichiara, come consente BCF, ma uno strumento con elenchi fissi propri può mapparli o ignorarli.
- **L'importazione porta commenti, non viste del modello.** {{ui:Importa BCF}} aggiunge risposte e stati alle annotazioni esportate e crea note per le altre segnalazioni; non può mostrare una camera del modello. Vedi [Elenco delle annotazioni ed esportazione](topic:markups-list-and-export#import-bcf).
- Per le revisioni dei disegni, rispedire le annotazioni come PDF è spesso più semplice. BCF serve a portare i commenti sui disegni in un flusso di lavoro di coordinamento del modello.

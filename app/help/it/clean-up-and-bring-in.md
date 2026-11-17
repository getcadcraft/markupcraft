---
title: Ripulire i tratti a penna, e importare commenti di revisione e avanzamento del cantiere
summary: Trasformare i tratti a penna a mano libera in linee, cerchi, archi e rettangoli; importare come note i commenti di revisione di un pacchetto di permesso e l'avanzamento del rilievo di un cantiere.
keywords: penna, mano libera, ripulisci, raddrizza, cerchio, linea, rettangolo, arco, permesso, commenti di revisione, avanzamento, drone, scansione, rilievo, note, csv
from: 547d8e42
---

## Ripulire i tratti a penna

Disegnare con {{ui:Penna}}, poi aprire il menu {{ui:Altro}} nel gruppo Modifica e scegliere {{ui:Ripulisci i tratti a penna}}. Ogni tratto di penna selezionato diventa ciò che doveva essere: un tratto dritto diventa una linea (resa esattamente orizzontale o verticale quando era quasi così), uno tondo un'ellisse, parte di un cerchio un arco, uno chiuso a quattro angoli un rettangolo, qualsiasi altro una polilinea o un poligono. Le estremità dei tratti disegnati insieme vengono avvicinate tra loro. Senza tratti di penna selezionati, vengono ripuliti tutti i tratti di penna sulla tavola aperta. È un unico passo di annullamento: Ctrl+Z riporta il disegno a mano libera. La forma viene calcolata sul computer con regole fisse; non viene inviato nulla da nessuna parte.

## Importare i commenti di revisione

Il pacchetto del permesso di BimCraft contiene `01-review-comments.csv`: i commenti che un revisore del progetto probabilmente farà, ciascuno con la regola, la clausola, ciò che serve, ciò che è stato trovato e ciò che va fatto. Nella scheda {{ui:Attività}}, aprire {{ui:Commenti di revisione del permesso}} e scegliere {{ui:Importa commenti (CSV)}}. Ogni commento diventa una nota con stato Aperto in una colonna a sinistra della tavola aperta; trascinare ciascuna nel punto a cui si riferisce. Sono calcolati dai controlli disponibili, non da un verificatore del progetto.

## Importare i riquadri dei nodi HAZOP

L'add-on P&ID di CadCraft disegna i nodi di uno studio HAZOP e può salvarli come {{ui:Riquadri dei nodi HAZOP}} (un file JSON). Aprire qui la tavola P&ID stampata, andare alla scheda {{ui:Attività}}, aprire {{ui:Riquadri dei nodi HAZOP}} e scegliere {{ui:Importa riquadri dei nodi (JSON)}}. Ogni nodo diventa un rettangolo con stato Aperto sulla tavola, con il suo numero, il nome, le apparecchiature e le linee nel testo, e il team scrive le proprie conclusioni come risposte su di esso. La tavola viene considerata stampata a grandezza reale dall'angolo inferiore sinistro del disegno; se è stata stampata a un'altra scala, digitare prima quel numero in {{ui:Stampato a}} (0.5 per 1:2). Un nodo che cade fuori dalla pagina non viene disegnato, e il pannello dice quanti sono. I segni sono un supporto allo studio: mostrano dove sono i nodi, non giudicano lo studio.

## Importare l'avanzamento del cantiere

CivilCraft tiene una riga per ogni volo di drone o scansione del cantiere. Nella scheda {{ui:Attività}}, aprire {{ui:Avanzamento del cantiere}} e scegliere {{ui:Importa avanzamento (JSON)}}. Ogni rilievo diventa una nota sulla tavola aperta che indica quanto è completato, cosa resta da scavare o riportare, cosa è stato scavato o riportato in eccesso e cosa esce dal piano. Un rilievo con qualcosa fuori dal piano resta con stato Aperto; uno senza problemi ha stato Accettato.

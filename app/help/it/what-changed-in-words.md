---
title: Elenca le modifiche tra le revisioni
summary: Confronta due set di tavole e ottieni un elenco semplice, tavola per tavola, di dove sono cambiati disegno e testo, pronto da leggere, copiare o passare all'assistente collegato.
keywords: cosa è cambiato, modifiche, elenco delle revisioni, elenco di confronto, elenco semplice, descrivere, assistente, delta, riepilogo delle revisioni
from: bab93d2e
---

Gli strumenti di confronto mostrano le modifiche sulla tavola. Questo strumento invece le registra per iscritto.

1. Apri entrambe le revisioni (vedi [Apri un set di tavole](topic:open-a-plan-set)).
2. Apri la scheda {{ui:Confronta}}, poi {{ui:Confronta un intero set}}.
3. Scegli il file precedente e quello successivo, poi scegli {{ui:Elenca le modifiche}}.

L'elenco inizia con un conteggio ("2 di 14 tavole corrispondenti modificate; 1 nuova; 1 eliminata") e poi copre ogni tavola modificata, a partire dalla modifica più grande: dove si trova sulla tavola (in alto a sinistra, al centro…), quanto è grande, se sono state aggiunte linee, rimosse o entrambe le cose, quante annotazioni vi si trovano e quali parole sono comparse o scomparse. Su una tavola calibrata la dimensione è indicata sia in unità reali sia in pollici sulla carta.

L'elenco dice cosa c'è sulla pagina; non dice cosa significa. Una linea disegnata che si sposta potrebbe essere un muro o una linea di richiamo. L'assistente collegato può leggere l'elenco con lo strumento `revisions_changes` e spiegarlo a parole, e per il resto si può guardare la tavola. {{ui:Copia l'elenco}} lo mette negli Appunti e {{ui:CSV}} scrive una riga per ogni modifica.

Le tavole vengono abbinate per numero di tavola, come in [Inserire un foglio di segnalazione in un set revisionato](topic:slip-sheet-a-revised-set). Le modifiche più piccole di qualche punto vengono ignorate, e il testo che fa parte di un'immagine (una scansione) non ha parole da confrontare.

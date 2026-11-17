---
title: Zone
summary: Assegna un nome alle stanze o alle zone di una tavola, poi filtra, conta ed esporta le annotazioni in base alla zona in cui si trovano.
keywords: zona, zone, stanza, ala, area di lavoro, posizione, filtra per stanza, raggruppa per stanza, esporta per zona
from: b199339c
---

Una zona è un'area con nome su una tavola: una stanza, un'ala, una fase di lavoro. Ogni annotazione al suo interno gli appartiene, così è possibile elencare, filtrare ed esportare le annotazioni di una sola stanza.

## Creare una zona

1. Aprire {{ui:Zone}}, in cima al pannello {{ui:Tavole}}, e scegliere {{ui:Nuova zona}}.
2. Fare clic sugli angoli della zona, poi fare doppio clic oppure premere {{key:Enter}}.
3. Digitare il nome, per esempio `Cucina` o `Livello 2 est`, e scegliere {{ui:Aggiungi zona}}.

La zona compare come area verde chiaro con contorno tratteggiato e il suo nome. La barra di stato indica quante annotazioni contiene.

## Cosa c'è in una zona

Un'annotazione appartiene alla zona che contiene il centro dell'annotazione. Quando le zone sono una dentro l'altra (una stanza in un'ala), vince quella più piccola. Spostando un'annotazione, questa passa da una zona all'altra. Selezionare una zona per modificarne il contorno con le sue maniglie, oppure il suo nome sotto {{ui:Nome}} in {{ui:Proprietà}}.

- {{ui:Proprietà}} mostra la zona di un'annotazione.
- L'elenco {{ui:Annotazioni}} filtra per {{ui:Zona}}, compresa {{ui:Nessuna zona}}.
- Le esportazioni CSV e XLSX ricevono una colonna {{ui:Zona}} quando il set contiene zone.
- Il pannello {{ui:Zone}} elenca ogni zona con il numero di annotazioni contenute; selezionarne una per andarci.

## Nel PDF salvato

Una zona è un commento a poligono con il suo nome come testo, disegnato con un bordo tratteggiato, così anche gli altri visualizzatori la mostrano. Si riapre in MarkupCraft come zona.

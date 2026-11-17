---
title: Markuplagen
summary: Zet markups op benoemde lagen en toon, verberg of vergrendel elke laag; andere PDF-viewers kunnen ze ook schakelen.
keywords: lagen, laag, verbergen, tonen, vergrendelen, markups groeperen, discipline, mechanisch, elektrisch, optionele inhoud, ocg, zichtbaarheid
from: 0fbb4c26
---

Lagen groeperen markups, bijvoorbeeld per discipline of per beoordelaar. Verberg een laag om de tekening eronder te zien, of vergrendel hem zodat de markups per ongeluk niet kunnen worden verplaatst.

## Een laag maken en erop tekenen

1. Open {{ui:Layers}}, bovenaan het paneel {{ui:Sheets}}.
2. Kies {{ui:New layer}}, typ een naam zoals `Mechanisch`, en kies {{ui:Add layer}}.
3. De nieuwe laag wordt de actieve laag: elke markup die u vanaf nu tekent, komt erop. Kies de naam van een andere laag, of {{ui:No layer}}, om te wijzigen waar nieuwe markups komen te staan.

Om een markup naar een andere laag te verplaatsen, selecteert u hem en kiest u de laag onder {{ui:Layer}} in {{ui:Properties}}. {{ui:New layer…}} onderaan die lijst maakt er meteen een. Verplaatsen is met {{key:Mod+Z}} ongedaan te maken.

## Tonen, verbergen en vergrendelen

Elke rij van een laag heeft twee knoppen:

- Het **oog** toont of verbergt de laag. Verborgen markups worden niet getekend en kunnen niet worden geselecteerd; ze tellen wel mee in de lijst {{ui:Markups}}.
- Het **slot** houdt de markups van de laag op het blad, maar voorkomt dat ze worden geselecteerd, verplaatst of verwijderd.

De potloodknop hernoemt een laag en neemt de markups mee. Filter de lijst {{ui:Markups}} op {{ui:Layer}} om de markups van één laag te zien.

## In de opgeslagen PDF

Elke laag wordt een PDF-laag (optionele inhoud). Andere PDF-viewers tonen de lagen in hun lagenpaneel en kunnen ze schakelen; een laag die u verborgen hebt, begint daar ook verborgen. Lagen die de tekening al had, zoals CAD-lagen, blijven zoals ze waren. Wanneer u de kopie opnieuw opent in MarkupCraft, komen de markups terug op hun lagen, verborgen en vergrendeld zoals u ze achterliet.

## Goed om te weten

- Verbergen en vergrendelen zijn geen bewerkingen: ze worden niet ongedaan gemaakt met {{key:Mod+Z}}, maar ze worden wel met de PDF opgeslagen.
- Kopiëren en plakken behouden de laag van een markup.
- Een platte kopie tekent elke markup in de pagina, ongeacht zijn laag. Zie [Een platte kopie opslaan](topic:flatten).

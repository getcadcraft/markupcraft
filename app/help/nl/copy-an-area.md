---
title: Een gebied van de pagina kopiëren, of een overlay
summary: Kopieer een deel van een blad met een rechthoek, een ellips of een vrije vorm en plak het in een ander blad, CadCraft, BimCraft, DetailCraft of elk programma, op zijn formaat; kopieer het als doorzichtige overlay, en lijn een afbeelding uit met twee punten.
keywords: gebied kopiëren, gebied, bijsnijden, knippen, snapshot, klem, regio, rechthoek, ellips, cirkel, vrije vorm, lasso, afbeelding, beeld, png, overlay, transparant, doorzichtig, tint, dekking, plakken, ware grootte, schaal, uitlijnen, twee punten, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Kies {{ui:More}} › {{ui:Copy an area of the page…}}. Een balk opent over het blad.

## Het gebied kiezen

Kies {{ui:Rectangle}}, {{ui:Ellipse}} of {{ui:Freeform}} in de balk, en sleep daarna op het blad:

- **Rechthoek:** sleep een kader rond het deel dat u wilt kopiëren.
- **Ellips:** sleep een kader; de ellips erin wordt gekopieerd, en de hoeken erbuiten zijn doorzichtig.
- **Vrije vorm:** teken rond het deel dat u wilt kopiëren; de vorm sluit zichzelf. Buiten de vorm is het doorzichtig.

Sleep opnieuw om opnieuw te beginnen, of druk op {{key:Esc}}.

## Kopiëren

- {{ui:Include markups}} kopieert uw markups mee met de pagina; schakel het uit voor de schone tekening.
- {{ui:Resolution}}: {{ui:As on screen}}, 72, 150 of 300 dpi. De afbeelding blijft onder 3 MB; wanneer een groot gebied bij een hoge resolutie daarboven zou komen, wordt de resolutie verlaagd en zegt de statusregel naar welke.
- {{ui:Copy}} (of {{key:Mod+C}} of {{key:Enter}}) zet het gebied als PNG-afbeelding op het klembord, die u kunt plakken in Word, e-mail, andere PDF-programma's en tekenprogramma's.
- {{ui:Save as PNG}} downloadt de afbeelding in plaats daarvan, voor een programma dat de doorzichtige delen bij het plakken laat vallen.

## Kopiëren als overlay

{{ui:Copy as overlay}} maakt ook het witte papier doorzichtig, zodat alleen de lijnen overblijven. {{ui:Colour}} geeft elke lijn één kleur (rood, blauw, groen, oranje of paars), zodat de overlay opvalt tegen de tekening eronder; {{ui:Own colours}} behoudt ze. {{ui:Strength}} is hoe sterk hij begint wanneer hij in onze apps wordt geplakt (50% tenzij u het wijzigt).

## Plakken

**In MarkupCraft** plakt {{key:Mod+V}} op elk blad het gebied als afbeeldingsmarkup bij de aanwijzer. Het komt binnen op zijn formaat:

- op papier, dezelfde grootte die het had op het blad waar het vandaan kwam;
- wanneer beide bladen een schaal hebben, dezelfde grootte in de tekening: een gebied van een blad op 1:50 komt binnen op de helft van zijn papierformaat op een blad op 1:100.

Een overlay begint op zijn sterkte; wijzig die met {{ui:Opacity}} in {{ui:Properties}}. Verplaats, vergroot, vergrendel en verwijder hem zoals elke afbeelding, en vink {{ui:Flatten into the page when saved}} aan om hem in de pagina te tekenen.

**In CadCraft, BimCraft en DetailCraft** weet de kopie ook zijn formaat, dus een plakactie komt binnen op het echte formaat van de tekening wanneer het blad een schaal had, of vraagt er een wanneer dat niet zo was. Zie de help van elke app over afbeeldingen.

## Een afbeelding uitlijnen met twee punten

Selecteer één afbeelding of overlay, en kies daarna {{ui:More}} › {{ui:Line up a picture with two points}}:

1. Klik op een punt op de afbeelding.
2. Klik waar dat punt naartoe moet.
3. Klik op een tweede punt op de afbeelding, ver van het eerste.
4. Klik waar dat punt naartoe moet.

De afbeelding wordt geschaald, verplaatst en gedraaid zodat beide punten landen waar u klikte. {{key:Esc}} stopt; {{key:Mod+Z}} maakt het in één stap ongedaan.

## Goed om te weten

- Het formaat reist alleen mee met de kopie tussen onze apps op dezelfde site, en alleen voor een kopie die in de laatste paar uur is gemaakt; een ander programma krijgt een gewone afbeelding.
- Als de browser MarkupCraft het systeemklembord niet laat gebruiken, zegt de statusregel dat: plakken in onze apps werkt nog steeds, en {{ui:Save as PNG}} werkt voor andere programma's.
- Uitlijnen draait de afbeelding door zijn pixels opnieuw te tekenen, dus een gedraaide afbeelding is iets zachter dan het origineel.

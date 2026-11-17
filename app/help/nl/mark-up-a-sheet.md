---
title: Een blad markeren
summary: Teken herzieningswolken, aanwijzingen, tekstvakken, pijlen, vormen, penstreken en markeringen, en stel hun kleur en lijn in vóór of na het tekenen.
keywords: markup, markeren, redline, wolk, herzieningswolk, aanwijzing, leider, tekstvak, pijl, lijn, rechthoek, ellips, cirkel, polylijn, veelhoek, pen, vrije hand, inkt, markeerstift, kleur, lijndikte
from: 9d6de0ac
---

Elk gereedschap werkt hetzelfde: kies het, teken op het blad, en de nieuwe markup wordt geselecteerd zodat u hem in {{ui:Properties}} ziet. Het gereedschap blijft actief voor de volgende. De statusbalk vertelt altijd wat het gereedschap hierna verwacht.

:::touch
Op een aanraakscherm gebruikt u één vinger om te tekenen. Een tweede vinger breekt af wat de eerste begon en knijpt of verschuift in plaats daarvan, zodat u nooit per ongeluk een streep zet bij het zoomen. Meer in [Beoordelen op een iPad of touchscreen](topic:review-on-a-tablet).
:::

## Herzieningswolken

**Kaderwolk:** kies {{ui:Cloud}} ({{key:C}}) en sleep een kader. Houd {{key:Shift}} ingedrukt om het vierkant te maken.

**Vrije wolk** rond een onregelmatige vorm:

1. Kies {{ui:Free cloud}} ({{key:Shift+C}}).
2. Klik op elke hoek van het gebied.
3. Voltooi met dubbelklikken, {{key:Enter}} of rechtsklikken. Op aanraking: dubbel tikken.

Terwijl u punten aanklikt, verwijdert {{key:Backspace}} het laatste punt en annuleert {{key:Esc}} de hele vorm. Houd {{key:Shift}} ingedrukt om de volgende zijde op een veelvoud van 45° te houden. Een vrije wolk heeft minstens drie punten nodig.

De boogjes bollen altijd naar buiten en hun grootte volgt de lijndikte: een dikkere lijn geeft grotere bogen.

## Aanwijzingen

Een aanwijzing is een tekstvak met een leider die naar iets wijst.

1. Kies {{ui:Callout}} ({{key:K}}).
2. Houd de muisknop ingedrukt op het punt dat u wilt aanwijzen, sleep naar de plek waar de tekst moet staan en laat los.
   Als u alleen klikt zonder te slepen, wordt het vak rechtsboven van het punt geplaatst.
3. Typ de tekst. Het vak groeit naar beneden terwijl de regels afbreken.
4. Klik ergens buiten het vak, of druk op {{key:Mod+Enter}}, om af te ronden. {{key:Esc}} gooit de aanwijzing weg.

Als u voltooit zonder iets te typen, wordt er geen aanwijzing toegevoegd ("Niets getypt, dus er is geen aanwijzing toegevoegd.").

Nadat hij is getekend, selecteert u hem om het vak te verplaatsen, het uiteinde van de leider of de knik (de twee ruitvormige handgrepen) te slepen, of het vak van formaat te wijzigen.

## Tekstvakken

1. Kies {{ui:Text}} ({{key:T}}).
2. Klik waar de tekst begint (u krijgt een vak van een redelijke breedte), of sleep een vak van de gewenste grootte.
3. Typ, en klik daarna buiten het vak of druk op {{key:Mod+Enter}}.

Tekst heeft standaard geen rand. Om er een te geven, verhoogt u {{ui:Line width}} in {{ui:Properties}}. Om er een achtergrond aan te geven, vinkt u {{ui:Fill}} aan.

Om de tekst later te wijzigen: met {{ui:Select}} aan dubbelklikt u op de tekst, of u selecteert hem en drukt op {{key:Enter}}, of u kiest {{ui:Edit on the sheet}} in {{ui:Properties}}. U kunt hem ook bewerken in het vak {{ui:Text}} in {{ui:Properties}}.

## Pijlen en lijnen

1. Kies {{ui:Arrow}} ({{key:A}}) of {{ui:Line}} ({{key:L}}).
2. Sleep van het begin naar het eind. Of klik op het begin, laat los en klik op het eind.
3. Houd {{key:Shift}} ingedrukt om hem op een veelvoud van 45° te houden.

De pijlpunt staat aan het eind waar u klaar was.

## Rechthoeken, ellipsen, polylijnen en veelhoeken

- {{ui:Rectangle}} ({{key:R}}) en {{ui:Ellipse}} ({{key:E}}): sleep een kader. {{key:Shift}} maakt een vierkant of een cirkel. Een klik zonder slepen tekent niets en de statusbalk vraagt om slepen.
- {{ui:Polyline}} ({{key:Y}}) en {{ui:Polygon}} ({{key:G}}): klik punten aan; voltooi met dubbelklikken, {{key:Enter}} of rechtsklikken (dubbel tikken op aanraking). {{key:Backspace}} verwijdert het laatste punt. Een veelhoek sluit zichzelf en heeft drie punten nodig; een polylijn heeft twee punten nodig.

## Pen en markeerstift

- {{ui:Pen}} ({{key:P}}): sleep om vrij te tekenen. De streek wordt iets gladgestreken wanneer u loslaat.
- {{ui:Highlight}} ({{key:I}}): hetzelfde, met een brede, doorzichtige gele streek die de tekening eronder kleurt in plaats van die te bedekken.
- Houd {{key:Shift}} ingedrukt terwijl u tekent om één rechte streek vanaf het startpunt te krijgen.

De markeerstift is een vrije streek. Hij hecht zich niet vast aan tekst in de PDF.

## Kleur, lijn en vulling

Op twee manieren:

- **Vóór het tekenen:** kies het gereedschap. Zonder selectie toont {{ui:Properties}} de instellingen van "<tool>-gereedschap": {{ui:Color}}, {{ui:Line width}} (in punten), {{ui:Fill}} en {{ui:Fill opacity}} voor gesloten vormen, {{ui:Opacity}}, en {{ui:Text size}} voor tekst. Elke nieuwe markup van die soort gebruikt ze, en MarkupCraft onthoudt ze in deze browser.
- **Na het tekenen:** selecteer een of meer markups en wijzig dezelfde bedieningen onder "Stijl". Met meerdere geselecteerd geldt de wijziging voor allen in één stap.

De standaardwaarden: rode markups, een gele markeerstift, blauwe metingen, oranje tellingen, en stempels in een kleur naar betekenis.

Opgeslagen stijlen die u dagelijks gebruikt horen in de gereedschapskist: zie [De gereedschapskist](topic:tool-chest).

## Onderwerp en opmerking

Elke markup heeft ook een {{ui:Subject}} (een korte aanduiding zoals "Wolk" of "RFI", getoond in de markuplijst en in andere PDF-viewers) en een {{ui:Comment}} (langere notities). Vul ze in via {{ui:Properties}}. Voor een gesprek over een markup gebruikt u reacties: zie [Statussen en reacties](topic:statuses-and-replies).

## Volgende

- [Selecteren, verplaatsen en markups wijzigen](topic:select-and-edit)
- [Stempels en notities](topic:stamps-and-notes)
- [Elk markuptype](topic:markup-types)

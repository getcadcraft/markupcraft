---
title: Paginaformaten en papiernamen
summary: Bekijk het formaat van elke pdf-pagina in millimeters en inch en de papiernaam (A-, B- en C-reeks, ANSI, ARCH), en groepeer een gemengde set op formaat om de afwijkende pagina's te vinden.
keywords: paginaformaat, papierformaat, papiernaam, a0, a1, a2, a3, a4, b-reeks, c-reeks, ansi, arch, architectonisch, mm, inch, aangepast formaat, op formaat, afwijkend formaat, gemengde set, pdf controleren, opdrachtgever, issue, mediabox, cropbox, rotatie
from: 08e1354f
---

Voordat een set naar de opdrachtgever gaat, controleert u of elk blad het juiste formaat heeft. {{ui:MarkupCraft}} leest het formaat van elke pagina uit de pdf zelf en noemt het papier.

## Wat u gaat doen

Bekijk het formaat van één blad, en groepeer daarna de hele set op formaat.

## Stappen

1. Open de pdf's ({{ui:Openen}}), druk dan op {{key:Esc}} totdat niets is geselecteerd en {{ui:Selecteren}} aan staat.
2. Kijk in {{ui:Eigenschappen}}. {{ui:Papier}} geeft de naam en de richting, bijvoorbeeld "A4, staand". {{ui:Formaat}} geeft millimeters en inch.
3. Elke rij van de lijst {{ui:Bladen}} heeft een regel met het formaat onder de bladnaam.
4. Kies {{ui:Op formaat}} in de kop van {{ui:Bladen}}. De lijst groepeert de bladen onder één kop per formaat, de grootste groep eerst. Een formaat met maar een paar bladen wordt gemarkeerd als afwijkend.
5. Kies {{ui:Op formaat}} opnieuw om terug te gaan naar de eigen volgorde van de set.

Resultaat: een pagina die een ander formaat heeft dan de rest, is makkelijk te zien voordat u de set verstuurt.

## Hoe de naam wordt gekozen

- Het formaat komt uit de paginakader in de pdf, met de rotatie toegepast, dus een liggende A3 is nog steeds A3.
- De namen zijn de A- en B-reeks (ISO 216), de C-reeks (ISO 269), ANSI A tot E en ARCH A tot E.
- Een pagina binnen 2 mm van een benoemd formaat krijgt die naam. Elke andere pagina zegt {{ui:aangepast}}, en {{ui:Dichtstbijzijnde benoemde formaat}} zegt welk formaat het dichtstbij is en hoe ver het ervan af zit.
- Inch komen uit het echte paginaformaat, dus een A4-pagina is 8.26 bij 11.69 in.

## In de bestanden die u opslaat

Het overzichtswerkboek ({{ui:Lijst met markups}}, dan de spreadsheet) heeft een kolom {{ui:Papierformaat}} op het blad {{ui:Per blad}} en een werkblad {{ui:Paginaformaten}}. Het pdf-rapport heeft een regel "Paginaformaten" met het aantal van elk formaat.

:::note
De ANSI- en ARCH-inchwaarden zijn overgetypt uit de gepubliceerde tabellen en niet vergeleken met de gedrukte normen. Behandel een "aangepast" formaat dat dicht bij een van die waarden ligt als iets om zelf te controleren.
:::

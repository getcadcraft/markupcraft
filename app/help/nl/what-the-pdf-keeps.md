---
title: Wat er in de pdf wordt opgeslagen
summary: Precies wat de gemarkeerde kopie bevat, wat andere pdf-programma's zien en wat er wordt teruggelezen wanneer u een bestand opent.
keywords: pdf-annotaties, opmerkingen, opgeslagen gegevens, heen en weer, paginalabels, meting, beoordelingsstatus, reacties, interoperabiliteit, compatibiliteit, opnieuw openen, privégegevens
from: 6439ad28
---

De gemarkeerde kopie is het oorspronkelijke pdf-bestand met opmerkingen (pdf-annotaties) erbij. De pagina's zelf, hun tekeningen, tekst, bladwijzers en links worden gekopieerd zoals ze waren.

## Elke markup

| MarkupCraft | Opgeslagen als | Andere pdf-viewers tonen |
|---|---|---|
| Rechthoek, wolk met kader | Square-annotatie (wolk: wolkachtige rand) | Een rechthoek- of wolkopmerking |
| Ellips | Circle-annotatie | Een ellipsopmerking |
| Veelhoek, vrije wolk | Polygon-annotatie (wolk: wolkachtige rand) | Een veelhoek- of wolkopmerking |
| Polylijn | PolyLine-annotatie | Een polylijnopmerking |
| Lijn, pijl | Line-annotatie (pijl: gesloten pijlpunt) | Een lijn- of pijlopmerking |
| Lengte | Line-annotatie gemarkeerd als maatvoering, met een meting | Een lengtemeting, waar de viewer die ondersteunt |
| Oppervlakte | Polygon-annotatie gemarkeerd als oppervlak, met een meting | Een oppervlaktemeting, waar ondersteund; anders een veelhoek |
| Telgroep | Eén Ink-annotatie, een ring per item; de tekst is "group: n" | Een inktopmerking |
| Pen, markeerstift | Ink-annotatie (markeerstift als zodanig gemarkeerd) | Een inktopmerking |
| Tekst | FreeText-annotatie | Een tekstvakopmerking |
| Callout | FreeText-annotatie met een calloutleider | Een calloutopmerking |
| Notitie | Text-annotatie | Een plakbriefje dat opent met de tekst |
| Stempel | Stamp-annotatie | Een stempelopmerking |

Elke markup wordt opgeslagen met:

- **de eigen weergave**, precies getekend zoals MarkupCraft hem op het scherm tekent, zodat hij er in elke viewer hetzelfde uitziet en hetzelfde afdrukt, inclusief het puntnummer-badge;
- **de auteur**, **de aanmaak- en wijzigingsdatums**, **het onderwerp**, **de opmerkingstekst** (voor tekstvakken en callouts de tekst en de opmerking), **de kleur** en **de dekking**;
- **de MarkupCraft-gegevens** in een privé-item dat andere programma's negeren: status, opleverpunt, stijl en type, zodat hij exact weer opent.

## Draden en statussen

- Elke reactie wordt opgeslagen als reactieopmerking, gekoppeld aan zijn markup, met auteur, datum en tekst. Reacties hebben zelf geen pictogram op het blad.
- Elke statuswijziging wordt opgeslagen als reactie met een beoordelingsstatus. Andere beoordelingshulpmiddelen tonen die als Geaccepteerd, Afgewezen of Voltooid; Open wordt opgeslagen zonder status.
- Een markup met een andere status dan Open maar zonder gelogde statuswijziging krijgt één beoordelingsstatus-reactie, zodat andere programma's de status ook zien.
- Reacties op alleen-lezen opmerkingen uit het oorspronkelijke bestand worden op dezelfde manier opgeslagen, gekoppeld aan die opmerking.

## Elk blad

- **Schaal:** een gekalibreerd blad krijgt een meetviewport die de pagina bedekt (de standaardmanier om een paginaschaal op te slaan) en de eigen kopie van MarkupCraft van de kalibratie.
- **Bladnummer:** een nummer dat u typt met {{ui:Blad hernoemen}} wordt het paginalabel. Als één pagina van een bestand er een heeft, krijgt elke pagina van dat bestand een label: het getypte nummer, anders het oude label, anders het paginanummer.
- **Bladtitel:** een getypte titel wordt alleen voor MarkupCraft opgeslagen; andere viewers tonen hem niet.

## Tekst en tekens

Tekst wordt geschreven in Helvetica, dat elke pdf-viewer heeft. Tekens buiten de West-Europese set (Windows-1252) worden in de kopie als "?" afgedrukt; het opslagbericht telt ze.

## Rekenbladen en redenen

Rekenbladen en redenen worden bewaard in een privé-item van de pdf met de naam `/MarkupCraftShell`. Andere pdf-programma's negeren het. Een oudere MarkupCraft negeert het ook en verwijdert het de volgende keer dat hij dat bestand opslaat.

## Wat er gebeurt met opmerkingen die er al waren

Wanneer u een pdf opent die al opmerkingen heeft:

- Opmerkingen van MarkupCraft zelf worden exact teruggelezen. Als een ander programma er één heeft verplaatst of van grootte veranderd, wint de nieuwe positie.
- Rechthoeken, ellipsen, lijnen, polylijnen, veelhoeken, inkt, tekstvakken en plakbriefjes van andere programma's worden bewerkbare markups. **Bij het opslaan verwijdert MarkupCraft de originelen en schrijft hij ze opnieuw op zijn eigen manier**, met hun pop-ups en reacties. Hun uiterlijk kan iets veranderen.
- Beoordelingsstatussen uit andere programma's bepalen de status; de nieuwste wint.
- Al het overige (tekstmarkeringen, stempels van andere programma's en bijzondere soorten) blijft **onaangeroerd** in de kopie, alleen-lezen.
- Links en formuliervelden blijven onaangeroerd en worden niet opgesomd.

Opnieuw opslaan van hetzelfde bestand verdubbelt nooit iets: de markups die MarkupCraft heeft gelezen worden vervangen, niet opnieuw toegevoegd.

## Wat niet wordt gewijzigd

Uw oorspronkelijke bestand op de schijf wordt nooit gewijzigd. De kopie is niet geoptimaliseerd voor grootte, dus kan ze iets groter zijn dan het origineel. Beveiligde (versleutelde) pdf's kunnen niet worden opgeslagen.

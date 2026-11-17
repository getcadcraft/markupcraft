---
title: De markuplijst, filters en exports
summary: Bekijk elke markup in de set, filter op blad, auteur, status en type, ga naar één markup, en exporteer de lijst als CSV of BCF.
keywords: markuplijst, lijst, samenvatting, xlsx, spreadsheetwerkboek, werkboek, pdf-rapport, bcf importeren, filter, sorteren, rapport, exporteren, csv, spreadsheet, bcf, bcfzip, issues, lijst van opmerkingen, springen
from: 6c70261e
---

## De lijst openen

Kies het tabblad {{ui:Markups}} rechts. Elke markup van elk geopend bestand staat in de lijst, op bladvolgorde en daarbinnen in de volgorde waarin ze zijn gemaakt. Elke rij toont:

- een icoon in de kleur van de markup, het puntnummer als hij er een heeft ("#4"), en het onderwerp,
- de tekst, het stempelwoord of de gemeten waarde, en de opmerking,
- het blad, de auteur en de datum,
- de status (of "Alleen lezen" voor opmerkingen die met het bestand kwamen), en een aantal reacties wanneer er reacties zijn.

De regel boven de lijst telt ze: "38 markups", of "12 van 38 markups" wanneer er gefilterd wordt.

## Naar een markup springen

Klik op een rij. MarkupCraft toont dat blad, selecteert de markup en zoomt erop wanneer hij buiten beeld of te klein is om te zien. {{ui:Properties}} toont de details en de draad wanneer u terugschakelt naar dat tabblad.

## Filteren

Vier menu's boven de lijst. Ze werken samen.

| Menu | Keuzes |
|---|---|
| {{ui:Sheet}} | Alle bladen, Dit blad (volgt u wanneer u van blad wisselt), of elk blad dat markups heeft |
| {{ui:Author}} | Iedereen, of elke auteur in de set |
| {{ui:Status}} | Elke status, Open, Geaccepteerd, Afgewezen, Voltooid |
| {{ui:Type}} | Elk type, of elk soort markup in de set |

Voorbeelden:

- Wat is op dit blad nog open: {{ui:Sheet}} "Dit blad", {{ui:Status}} "Open".
- Opmerkingen van één adviseur: {{ui:Author}} hun naam.
- Alle metingen: {{ui:Type}} "Lengte" of "Oppervlakte".

De lijst toont maximaal 2000 rijen; beperk hem met een filter in zeer grote sets.

## Exporteren naar CSV

Kies {{ui:CSV}} bovenaan het tabblad. U krijgt "<name> markups.csv" met **de markups zoals ze nu gefilterd zijn**, één per rij, met deze kolommen:

Puntnr., Blad, Bestand, Pagina, Type, Onderwerp, Tekst, Opmerking, Meting, Auteur, Aangemaakt, Gewijzigd, Status, Reacties, Laatste reactie, Kleur, Alleen lezen.

- "Tekst" bevat de woorden van tekstvakken en aanwijzingen, een stempelwoord, of de naam van een telgroep.
- "Meting" bevat lengtes, "oppervlakte, omtrek" voor oppervlakten, en "groep: n" voor tellingen.
- Datums zijn volledige tijdstempels in UTC.

Om alles te exporteren, zet u eerst elk filter terug op de eerste keuze.

## Een legenda op het blad

{{ui:Legend}} in het tabblad {{ui:Markups}} zet een legenda rechtsboven van wat u ziet: een vak met elk soort markup op het blad (per onderwerp en kleur, zoals "Wolk", "Vraag" of "Stopcontacten") met het aantal ervan. Een telgroep telt zijn merktekens. De legenda blijft tellen terwijl u markups tekent, verplaatst of verwijdert, en hij wordt afgedrukt en opgeslagen met de tellingen van dat moment.

Verplaats en wijzig het formaat zoals elke markup. Wijzig in zijn {{ui:Properties}} de {{ui:Title}}, of zet {{ui:Counts}} op {{ui:The whole set}} om elk blad te tellen. Ruimtes, andere legenda's en opmerkingen van andere programma's worden niet meegeteld.

## Eigen kolommen en sorteren

{{ui:Columns}} in het tabblad {{ui:Markups}} voegt eigen kolommen toe aan elke markup: een **tekst**, een **keuze** (zoals Vakgebied: Mechanisch, Elektrisch, Sanitair), een **getal** (zoals Kosten) of een **datum**. Geef elk een naam, kies het soort, noem de keuzes voor een keuzekolom, en kies {{ui:Save columns}}.

- Vul ze in onder {{ui:Properties}}: elke kolom heeft daar een veld. Een getalkolom accepteert alleen getallen, een datumkolom alleen een datum.
- De lijst toont de waarden onder elke markup, het filter {{ui:Column}} kiest één waarde (of de markups waar hij leeg is), en {{ui:Sort}} sorteert de lijst op een kolom, op auteur, status, soort of datum, in plaats van op blad.
- CSV- en XLSX-exports bevatten de kolommen na de gebruikelijke. De kolommen worden met de PDF opgeslagen en keren terug wanneer u hem opnieuw opent.

## Een samenvatting exporteren: werkboek of PDF

- {{ui:XLSX}} downloadt "<name> markup summary.xlsx" met drie bladen: **Markups** (één rij per vermelde markup, dezelfde kolommen als de CSV), **Per blad** (hoeveel markups elk blad heeft, open en gesloten, en hoeveel van elk soort, met totalen) en **Opleverlijst** (wanneer er puntitems zijn).
- {{ui:PDF}} downloadt "<name> markup summary.pdf": een rapport om af te drukken of te versturen, met de naam van de set, de datum en een tabel van de vermelde markups (nummer, blad, soort, onderwerp, tekst of opmerking, gemeten waarde, auteur, status en de laatste reactie). Lange tekst loopt door; de tabelkop herhaalt zich op elke pagina.

Beide nemen de lijst zoals hij gefilterd is, dus filter eerst om één blad, één auteur of alleen de open punten te rapporteren.

## Exporteren naar BCF

Kies {{ui:BCF}}. MarkupCraft maakt een afbeelding van elke vermelde markup op zijn blad ("Snapshots maken voor BCF (3 van 12)…"), en downloadt daarna "<name> markups.bcfzip". Elke markup wordt één BCF-onderwerp, met zijn status, auteur, datums, reacties als opmerkingen, toegewezene en vervaldatum uit zijn puntitem, en de snapshot.

Gebruik het om opmerkingen uit documentcontrole over te brengen naar BIM-coördinatietools die BCF lezen. Wat meekomt en wat niet, staat in [BCF-basis](topic:bcf-basics).

## BCF importeren

{{ui:Import BCF}} leest een .bcfzip- (of .bcf-)bestand van een BIM-tool:

- Issues die uit de eigen BCF-export van MarkupCraft kwamen, vinden hun markups terug: nieuwe reacties worden aan de draad toegevoegd, en een nieuwe status (Gesloten telt als Voltooid) wordt ingesteld. Reacties die er al staan, worden niet dubbel toegevoegd.
- Andere issues worden notities, met hun titel, beschrijving, auteur en opmerkingen. Een notitie komt op het blad waarvan het nummer of de naam in de labels van het issue staat, anders op het open blad. Een BIM-camera heeft geen plaats op papier, dus zulke notities worden linksboven op het blad gestapeld zodat u ze kunt verplaatsen.

De hele import is één stap: {{key:Mod+Z}} maakt hem ongedaan. Zie [BCF-basis](topic:bcf-basics).

## Wat de lijst nog niet kan

- De lijst groeperen (sorteer en filter in plaats daarvan).
- Waarden in de lijst bewerken (bewerk ze in {{ui:Properties}}; puntvelden zijn bewerkbaar in het tabblad {{ui:Punch list}}).

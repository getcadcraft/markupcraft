---
title: De gereedschapskist
summary: Sla een gestylde markup op als herbruikbaar gereedschap, teken ermee, en deel uw kist met het kantoor als bestand.
keywords: gereedschapskist, gereedschap, gereedschapsset, eigen gereedschap, opgeslagen markups, favorieten, kantoorstandaard, importeren, exporteren, delen, json
from: 7dfa36e0
---

Het tabblad {{ui:Gereedschap}} bevat uw **gereedschapskist**: markups opgeslagen met hun uiterlijk, klaar om opnieuw te tekenen. Een gereedschap bewaart het soort markup, de kleur, lijndikte, vulling, dekking, tekstgrootte en het onderwerp, plus de tekst van een stempel, de groepsnaam van een telling, of de starttekst van een tekstvak of callout.

## De gereedschappen waarmee u start

Een nieuwe kist heeft er zes: "Revisiewolk" (rood), "Vraagwolk" (blauw), "Gele markeerstift", "RFI-callout" (blauw, begint met "RFI: "), "Veld controleren" (een oranje callout die "Veld controleren." zegt) en "Goedgekeurd met opmerkingen" (een stempel).

## Tekenen met een gereedschap

1. Open het tabblad {{ui:Gereedschap}}.
2. Klik op een gereedschap. Het ziet er ingedrukt uit, en het bijbehorende werkbalkgereedschap gaat aan.
3. Teken zoals gewoonlijk. {{ui:Eigenschappen}} zegt: 'Tekenen met "<gereedschap>" uit de gereedschapskist.'

Zolang een gereedschap uit de kist aan staat, gelden wijzigingen die u vóór het tekenen in {{ui:Eigenschappen}} maakt alleen voor dat gereedschap, voorlopig, zonder het opgeslagen gereedschap of uw gewone instellingen te wijzigen. Kiest u een werkbalkknop, of drukt u op de sneltoets van een gereedschap, dan gaat u terug naar het gewone gereedschap.

## Eigen gereedschap opslaan

1. Teken een markup en geef hem de stijl die u wilt: kleur, lijn, vulling, onderwerp, stempeltekst.
2. Selecteer hem.
3. Kies {{ui:Selectie opslaan als gereedschap}} in het tabblad {{ui:Gereedschap}}, of {{ui:Opslaan als gereedschap}} in {{ui:Eigenschappen}}.
4. Typ een {{ui:Naam van het gereedschap}} en kies {{ui:Gereedschap opslaan}}.

Resultaat: het gereedschap wordt aan het eind van de kist toegevoegd, en het tabblad {{ui:Gereedschap}} opent om het te tonen.

## Stempels gemaakt van een selectie

Selecteer meerdere markups (of pagina-inhoud met het gereedschap {{ui:Inhoud}}) en kies {{ui:Selectie opslaan als stempel…}} in {{ui:Meer}} of in het rechtsklikmenu. De kist krijgt één stempel die ze allemaal bevat ("Stempel: 3 markups samen"). Klik erop, en daarna op een willekeurig blad: de markups komen samen terecht, gecentreerd waar u klikt, als nieuwe markups met uw naam; pagina-inhoud wordt daar in de pagina getekend. Deze stempels worden net als elk gereedschap met de kist opgeslagen en gedeeld.

## Een gereedschap verwijderen

Kies de × aan het eind van de rij van het gereedschap, en daarna {{ui:Verwijderen}}. Markups die er al mee zijn getekend, blijven zoals ze zijn.

## Waar de kist wordt bewaard

De kist wordt **in deze browser, op deze computer** bewaard. Een andere browser of computer heeft een eigen kist (te beginnen met de zes standaardgereedschappen), een privévenster vergeet die als het sluit, en het wissen van de sitegegevens in de instellingen van de browser wist haar.

Kan de browser de kist niet opslaan (opslag uitgeschakeld of vol), dan zegt de statusbalk: "De gereedschapskist kon niet in deze browser worden bewaard (opslag is uit of vol). Exporteer haar om haar te bewaren."

:::safari
Safari kan de opgeslagen gegevens van een website wissen als u de site een tijd niet hebt gebruikt. Exporteer uw kist af en toe, zodat u haar later weer kunt importeren.
:::

**Exporteer uw kist als back-up**, vooral nadat u gereedschappen hebt gemaakt waarop u vertrouwt.

## Een kist delen met uw kantoor

1. Stel de gereedschappen eenmaal in.
2. Kies {{ui:Exporteren}}. U krijgt "MarkupCraft tool chest.json".
3. Zet dat bestand waar het kantoor zijn standaarden bewaart, of stuur het rond.
4. Iedereen anders kiest {{ui:Importeren}} in het tabblad {{ui:Gereedschap}} en kiest het bestand.

Resultaat: "12 gereedschappen geïmporteerd uit "MarkupCraft tool chest.json"." Gereedschappen uit dezelfde kist vervangen hun oudere kopieën, zodat het importeren van een bijgewerkte kantoorkist die gereedschappen vernieuwt in plaats van ze te verdubbelen; nieuwe gereedschappen worden toegevoegd. Een kist bevat maximaal 500 gereedschappen.

MarkupCraft controleert elke waarde in een geïmporteerd bestand en slaat over wat het niet kan gebruiken ("2 overgeslagen (niet bruikbaar)"). Bestanden die geen kist zijn, worden geweigerd: "Dit bestand is geen MarkupCraft-gereedschapskist." of "Dit bestand is geen gereedschapskist (het is geen JSON)."

Gereedschapskistbestanden van andere markup-programma's kunnen niet worden geïmporteerd.

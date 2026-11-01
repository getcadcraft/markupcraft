---
title: Bestanden die MarkupCraft opent en opslaat
summary: Pdf-bestanden erin, een gemarkeerde pdf-kopie eruit, plus CSV-, BCF- en gereedschapskistbestanden; waar elk naartoe gaat, online en offline.
keywords: pdf, openen, opslaan, exporteren, downloaden, csv, bcf, bcfzip, json, gereedschapskist, bestandstypen, indelingen, uploaden, wachtwoord, versleuteld
from: b3045b4c
---

## Wat MarkupCraft opent

| Bestand | Hoe | Wat er gebeurt |
|---|---|---|
| PDF (`.pdf`) | {{ui:Openen}}, {{key:Mod+O}}, of neerzetten op het bladgebied. Meerdere tegelijk kan. | Elke pagina wordt een blad. Markups die al in het bestand staan, worden teruggelezen (hieronder). |
| Gereedschapskist (`.json`) | tabblad {{ui:Gereedschap}}, daarna {{ui:Importeren}} | De gereedschappen worden aan uw kist toegevoegd. Zie [De gereedschapskist](topic:tool-chest). |

Al het andere wordt geweigerd met "MarkupCraft opent pdf-bestanden." in de statusbalk. Als u een mengeling neerzet, worden de pdf-bestanden geopend en meldt de statusbalk hoeveel bestanden geen pdf waren.

### Markups die al in een pdf staan

- **Markups die MarkupCraft heeft opgeslagen** komen precies terug: type, stijl, auteur, data, status, reacties, opleverlijstnummer, de schaal van het blad en alle bladnamen die u hebt getypt.
- **Opmerkingen uit andere pdf-programma's** worden ook gelezen. Rechthoeken, ellipsen, lijnen en pijlen, polylijnen, veelhoeken, penstreken (pen), tekstvakken en plaknotities worden gewone, bewerkbare MarkupCraft-markups. Hun reacties en beoordelingsstatussen komen mee.
- **Al het andere** (tekstmarkeringen die door tekst te selecteren zijn gemaakt, stempels van andere programma's en andere soorten) wordt getoond zoals het is, als alleen-lezen aangemerkt. U kunt het selecteren, in de markuplijst zien en erop reageren, maar niet verplaatsen, wijzigen of verwijderen.
- Koppelingen en formuliervelden blijven onaangeroerd en worden niet in de lijst opgenomen.
- Een schaal die door een ander programma is opgeslagen (een meetviewport) wordt als schaal van het blad gebruikt als MarkupCraft de eenheid ervan begrijpt.

### Bestanden die niet openen

- Een pdf die een wachtwoord nodig heeft: '"naam" heeft een wachtwoord nodig om te openen. Open een onbeveiligde kopie.'
- Een beschadigd bestand of een bestand dat niet echt een pdf is: '"naam" kon niet als pdf worden gelezen (…)'.
- Een pdf die wel opent maar tegen wijzigingen is beveiligd, opent gewoon. Opslaan wordt dan geweigerd (zie hieronder).

Als meerdere bestanden tegelijk worden geopend, openen de bestanden die werken en toont een vak met de titel "Sommige bestanden zijn niet geopend" de overige.

## Wat MarkupCraft opslaat

Opslaan is altijd het **downloaden** van een nieuw bestand. Een webpagina kan geen bestand op uw computer overschrijven en MarkupCraft wijzigt nooit uw origineel.

| U kiest | U krijgt | Opmerkingen |
|---|---|---|
| {{ui:Opslaan}} ({{key:Mod+S}}) | "<naam> (marked up).pdf" | Een kopie van de originele pdf met elke markup als echte pdf-opmerking erin geschreven. Als u een bestand "(marked up)" opnieuw opslaat, blijft de naam gelijk; het wordt nooit "(marked up) (marked up)". Zie [De gemarkeerde pdf opslaan](topic:save-the-marked-up-pdf). |
| tabblad {{ui:Markups}}, daarna {{ui:CSV}} | "<naam> markups.csv" | De markups zoals ze in de lijst staan (filters gelden). |
| tabblad {{ui:Markups}}, daarna {{ui:BCF}} | "<naam> markups.bcfzip" | BCF 2.1 voor BIM-coördinatiehulpmiddelen, met een momentopname per markup. Zie [BCF-basis](topic:bcf-basics). |
| tabblad {{ui:Opleverlijst}}, daarna {{ui:CSV exporteren}} | "<naam> punch list.csv" | De opleverposten in volgorde van nummer. |
| tabblad {{ui:Gereedschap}}, daarna {{ui:Exporteren}} | "MarkupCraft tool chest.json" | Uw gereedschapskist, om te delen of te bewaren. |

"<naam>" is de bestandsnaam van de eerste geopende pdf zonder ".pdf".

De CSV-bestanden openen in elke spreadsheet. Ze zijn UTF-8 met de markering waarnaar spreadsheets zoeken, zodat letters met accenten goed uitkomen. Een cel die met =, +, - of @ begint, krijgt een apostrof ervoor, zodat een spreadsheet de cel nooit als formule uitvoert.

## Waar downloads terechtkomen

Uw browser bepaalt dat: meestal uw map Downloads, of hij vraagt het elke keer als u dat zo hebt ingesteld. Zie [Browsers en computers](common:browsers#what-differs-between-browsers).

:::chromium
Als u alle gewijzigde bestanden van een set in één keer opslaat, kunnen Chrome en Edge vragen of deze site meerdere bestanden mag downloaden. Kies {{ui:Toestaan}}, anders krijgt u alleen de eerste kopie.
:::

:::safari
Op een iPad vraagt Safari voor elke download om toestemming en zet het bestand in de app Bestanden, onder Downloads. Op een Mac komt het in de map die in de instellingen van Safari is ingesteld.
:::

## Online en offline

- **Uw pdf-bestanden verlaten deze computer nooit**, online noch offline. Er wordt nergens iets geüpload.
- De pdf-lezer wordt geladen de eerste keer dat u een pdf opent ("De pdf-lezer wordt geladen…") en de pdf-schrijver de eerste keer dat u opslaat ("De pdf-schrijver wordt geladen…") of een bestand opent dat al opmerkingen bevat.
- Met een verbinding worden beide van de website geladen.
- **Om zonder verbinding te werken** kiest u {{ui:Opslaan voor offline gebruik}} in de balk bovenaan terwijl u online bent. De knop telt "Opslaan N van M" en zegt dan "Klaar voor offline gebruik". Die kopie bevat de pdf-lezer en de pdf-schrijver (samen ongeveer 6 MB) en deze Help, zodat pdf-bestanden openen, markeren en opslaan daarna allemaal offline werkt in deze browser.
- Als de knop "Kon niet opslaan" zegt, zijn sommige bestanden niet gedownload: controleer de verbinding en klik er opnieuw op. Als hij "Offline gebruik is niet beschikbaar" zegt, kan dit browservenster geen offlinekopie bewaren (privévensters en sommige beheerde computers); gebruik een normaal venster.
- Om de kopie bij te werken of te laten vallen klikt u op "Klaar voor offline gebruik" en kiest u "Opnieuw opslaan (de nieuwste versie ophalen)" of "De offlinekopie verwijderen". Meer in [Offline werken](common:offline).

:::offline
U bent offline. Als de balk bovenaan "Klaar voor offline gebruik" zegt, werkt alles, ook opslaan. Is dat niet zo en hebt u in dit tabblad nog niet opgeslagen, dan kan {{ui:Opslaan}} mislukken met "De pdf-schrijver kon niet worden geladen". Uw markups staan nog in het tabblad: houd het open, ga weer online en kies opnieuw {{ui:Opslaan}}.
:::

## Goed om te weten

- Grote tekensets openen langzaam: MarkupCraft leest de tekst van elke pagina om bladnummers te vinden. De statusbalk telt de bladen mee terwijl het loopt.
- Als u dezelfde pdf twee keer opent, worden de bladen twee keer toegevoegd. Sluit in dat geval de set en open hem opnieuw.
- {{ui:Sluiten}} sluit alle geopende bestanden tegelijk. Als er bestanden met niet-opgeslagen markups zijn, vraagt het: {{ui:Annuleren}}, {{ui:Sluiten zonder opslaan}} of {{ui:Eerst kopieën opslaan}}.
- Opslaan in de cloud is nog niet beschikbaar en er zijn nog geen desktopversies. Bewaar uw pdf-bestanden bij uw andere projectbestanden en maak er zoals gebruikelijk back-ups van. Zie [Waar uw bestanden naartoe gaan](common:your-files).

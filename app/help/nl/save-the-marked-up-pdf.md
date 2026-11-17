---
title: De PDF met markups opslaan
summary: Download een kopie met elke markup als standaard pdf-opmerkingen, controleer wat andere pdf-lezers zien en werk er later verder aan.
keywords: opslaan, downloaden, pdf exporteren, markup, annotaties, opmerkingen, delen, verzenden, issue, verder werken, opnieuw openen, retour, afdrukken
from: 4c198ebe
---

## Opslaan

1. Kies {{ui:Opslaan}} op de werkbalk, of druk op {{key:Mod+S}}.
2. Staan er meerdere bestanden open, kies dan {{ui:Dit bestand}} (het bestand van het blad waarop u staat) of {{ui:Elk gewijzigd bestand}}. Elke kopie wordt apart gedownload.
3. Wacht tot "Opslaan van <bestand>…" klaar is. De eerste keer dat u in een sessie opslaat, laadt het ook de pdf-schrijver.

Resultaat: uw browser downloadt "<naam> (marked up).pdf", en de statusbalk meldt het: 'Opgeslagen A-Plans (marked up).pdf (24 markups, 18.2 MB). Het originele bestand is niet gewijzigd.' De punt na {{ui:Opslaan}} verdwijnt.

**Uw originele pdf wordt nooit gewijzigd.** MarkupCraft schrijft een nieuw bestand. Waar het terechtkomt hangt af van de downloadinstellingen van uw browser (zie [Bestanden die MarkupCraft opent en opslaat](topic:files#where-downloads-go)).

## Later verder werken

Open de kopie "(marked up)" de volgende keer, niet het origineel. Alles komt weer bewerkbaar terug: markups, statussen, antwoorden, puntenlijst-items, de schaal van elk blad en de bladnamen die u typte. Opnieuw opslaan downloadt een bestand met dezelfde naam "(marked up)"; uw browser voegt misschien een nummer toe zoals "(1)" als de oude download nog in de map staat. Vervang of ruim oude kopieën zelf op.

MarkupCraft slaat de pdf niet vanzelf op. Terwijl u werkt houdt het een herstelkopie bij in deze browser, zodat een crash of een gesloten tabblad uw markups niet kwijtraakt: de volgende keer dat u MarkupCraft opent, vraagt het "Uw werk herstellen?". Zie [Uw werk herstellen](common:recover). Sla toch op voordat u sluit; probeert u weg te gaan met niet-opgeslagen markups, dan vraagt de browser eerst "Site verlaten?" (iPad Safari doet dat niet).

## Wat andere pdf-lezers zien

Elke markup wordt geschreven als een standaard pdf-opmerking (annotatie) met de eigen tekening, zodat elke pdf-viewer hem toont, afdrukt en in het opmerkingenpaneel laat zien:

- **De uitstraling is dezelfde** als in MarkupCraft: wolken met hun bolletjes, pijlpunten, stempels, telpunten, puntnummer-badges, maatlabels.
- **De details zijn standaard:** auteur, datum, onderwerp, de tekst van de opmerking en de kleuren.
- **Wolken** zijn rechthoek- of veelhoekopmerkingen met een golvende rand; **tekstvakken** en **callouts** zijn tekstvakopmerkingen; **notities** zijn plaknotities; **pen**- en **markeerstreken** zijn inkt; **stempels** zijn stempelopmerkingen.
- **Lengten en oppervlakten** zijn meetopmerkingen, en elk gekalibreerd blad draagt zijn schaal mee, zodat viewers die metingen begrijpen de waarden kunnen tonen.
- **Antwoorden** zijn antwoorden op de opmerking, en **statussen** zijn beoordelingsstatussen (Open wordt als geen status getoond).
- **Bladnummers** die u typte worden de paginalabels die andere viewers tonen.

Een paar dingen leest alleen MarkupCraft terug: de toegewezen persoon en vervaldatum van het puntenlijst-item, de itemstatus en sommige stijldetails. Andere programma's bewaren ze, tenzij ze de opmerking herschrijven.

In een ander programma kunnen opmerkingen net als alles andere worden verplaatst of bewerkt. Als iemand dat doet en het bestand terugstuurt, gebruikt MarkupCraft de nieuwe positie van de opmerking wanneer het bestand opent.

Volledige details: [Wat in de pdf wordt bewaard](topic:what-the-pdf-keeps).

## Tekens die als "?" worden afgedrukt

Markup-tekst wordt geschreven in het standaardlettertype Helvetica dat elke pdf-viewer heeft. Het dekt Engelse en West-Europese letters (é, ñ, ü, ø en dergelijke), maar niet andere schriften, symbolen buiten die set, of emoji. Die tekens zien er in MarkupCraft goed uit, maar worden in de opgeslagen kopie als "?" afgedrukt, en het bericht bij opslaan telt ze: "3 tekens buiten de West-Europese set worden als "?" afgedrukt in de kopie." Schrijf zulke woorden voluit, of gebruik een gewone vervanging (bijvoorbeeld "diam." voor het diametersymbool).

## Bestanden die niet kunnen worden opgeslagen

- **Beveiligde pdf's:** "Deze PDF is beveiligd (versleuteld), dus er kan geen kopie met markups worden geschreven. Vraag om een onbeveiligde kopie." U kunt hem nog op het scherm bekijken, en de CSV en BCF exporteren.
- Als opslaan om een andere reden mislukt, toont een venster "Kan <bestand> niet opslaan" de reden. Uw markups staan nog in het tabblad; niets is verloren tot u het sluit.

## Afdrukken

Er is nog geen platmaken (markups in de pagina inbranden) en nog geen afdrukopdracht. Om af te drukken opent u de opgeslagen kopie in een pdf-viewer en drukt u af met opmerkingen zichtbaar.

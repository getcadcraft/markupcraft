---
title: De eigen lijnen, afbeeldingen en tekst van de pagina wijzigen
summary: Verplaats, verklein, kleur opnieuw of verwijder wat de PDF zelf tekent, verplaats de punten van een lijn, vervang een afbeelding, en wijzig de woorden van een tekstregel.
keywords: paginainhoud, basisinhoud, pdf bewerken, tekening bewerken, vector, pad, vorm, lijn, afbeelding, beeld, afbeelding vervangen, tekst, woorden, lettertype, punten, knooppunten, verplaatsen, formaat wijzigen, kleur wijzigen, verwijderen, inhoudsgereedschap
from: 471d457e
---

Markups liggen boven een blad. Het gereedschap {{ui:Inhoud}} werkt op het blad zelf: de lijnen, afbeeldingen en tekstregels die de PDF tekent. Uw PDF op deze computer wordt nooit gewijzigd: de bewerkingen maken deel uit van de kopie die u opslaat.

## Kies wat u wilt wijzigen

1. Kies {{ui:Inhoud}} in de groep {{ui:Selecteren}}, of druk op {{key:B}}.
2. Zet onder {{ui:Selecteren}} in {{ui:Eigenschappen}} {{ui:Vormen}}, {{ui:Afbeeldingen}} en {{ui:Tekst}} aan of uit. Alleen de soorten die aan staan, kunnen worden geselecteerd, zodat u de tekst van een druk getekende tekening kunt kiezen zonder de lijnen mee te pakken.
3. Klik op iets om het te selecteren. Shift+klik voegt toe of verwijdert. Sleep een vak over leeg papier om er meerdere te selecteren: slepen naar rechts neemt wat volledig in het vak zit, slepen naar links neemt wat het raakt.

Een vorm binnen een afgeknipt gebied wordt alleen geselecteerd waar hij zichtbaar is.

## Verplaatsen, formaat wijzigen, kleur wijzigen, verwijderen

- **Verplaatsen:** sleep een geselecteerd object, of druk op de pijltjestoetsen (houd Shift voor grotere stappen). Houd Shift tijdens het slepen om recht horizontaal of recht verticaal te verplaatsen.
- **Formaat wijzigen:** sleep een van de acht vierkantjes rond de selectie. Het groeit of krimpt vanaf de tegenoverliggende zijde. Houd Shift om de verhoudingen te behouden.
- **Kleur wijzigen:** voor lijnen en vormen stelt u {{ui:Lijnkleur}}, {{ui:Vulkleur}} en {{ui:Lijndikte (pt)}} in {{ui:Eigenschappen}} in.
- **Verwijderen:** druk op {{key:Delete}}, of kies {{ui:Van de pagina verwijderen}}.
- **Ongedaan maken:** elke wijziging is één stap: {{key:Mod+Z}} neemt haar terug, {{key:Mod+Y}} zet haar terug.

{{ui:Terugzetten zoals het was}} maakt alle wijzigingen aan de geselecteerde objecten in één keer ongedaan; {{ui:Deze pagina terugzetten zoals hij was}} doet dat voor de hele pagina.

## Paginainhoud kopiëren, knippen en plakken

Selecteer lijnen, afbeeldingen of tekst met het gereedschap {{ui:Inhoud}}, en dan:

- {{key:Mod+C}} kopieert, {{key:Mod+X}} knipt (kopieert en haalt ze uit de pagina), {{key:Mod+D}} zet een kopie ernaast.
- {{key:Mod+V}} plakt als paginainhoud, naast het origineel of waar de aanwijzer staat (zoals [Instellingen](topic:settings) beschrijven); {{key:Mod+Shift+V}} plakt op exact dezelfde plek. Plak op een andere pagina, in een andere geopende PDF of in een ander MarkupCraft-tabblad van deze browser.
- Het menu van de groep {{ui:Bewerken}} en het rechtsklikmenu hebben dezelfde opdrachten.

Een plak houdt lijnen als lijnen, woorden als woorden in hun eigen lettertype, en afbeeldingen als afbeeldingen. Het is één geheel: verplaats het, wijzig het formaat met de vierkantjes, verwijder het, of maak het weg met {{key:Mod+Z}}. Het wordt deel van de pagina in de kopie die u opslaat. Wat u als laatste kopieerde, markups of paginainhoud, is wat {{key:Mod+V}} plakt.

Wat de kopie bevat, wordt bijgesneden tot het kader rond de selectie: alles wat MarkupCraft niet uit de kopie kan halen (zie hieronder) en binnen dat kader ligt, komt mee.

## Punten van een lijn verplaatsen

Dubbelklik op een lijn of curve (of selecteer hem en kies {{ui:Punten bewerken}}). De punten verschijnen als vierkantjes en de curvegrepen als cirkels. Sleep een punt of een greep; een punt brengt de grepen naast zich mee, zodat de curve zijn vorm rond het punt behoudt. Druk op {{key:Esc}}, of klik ergens naast de lijn, als u klaar bent.

Rechthoeken hebben geen punten om te slepen: wijzig hun formaat met de vierkantjes eromheen.

## Een afbeelding vervangen

Selecteer een afbeelding en kies {{ui:Afbeelding vervangen…}}, en kies dan een PNG-, JPEG- of SVG-bestand (of een PDF: de eerste pagina ervan). De nieuwe afbeelding vult de plaats van de oude, met behoud van de eigen verhoudingen.

## De woorden van een tekstregel wijzigen

Dubbelklik op een tekstregel, typ de nieuwe woorden in {{ui:Woorden}} en druk op {{key:Enter}}. De woorden worden geschreven in het eigen lettertype en de eigen grootte van de regel, en de regel behoudt zijn lengte, zodat de tekst erna niet verschuift.

:::note
De meeste PDF's bevatten alleen de letters die ze gebruiken uit elk lettertype. Wanneer u een letter typt die de kopie van dat lettertype in het bestand niet heeft, drukt MarkupCraft die letter af in Helvetica en zegt dat. {{ui:Eigenschappen}} toont welke letters het lettertype in het bestand heeft.
:::

Tekst wordt per regel gewijzigd; ze loopt niet door naar de volgende regel.

## Wat MarkupCraft ongemoeid laat

- **Gescande pagina's** zijn één afbeelding: u kunt de afbeelding verplaatsen, het formaat wijzigen, vervangen of verwijderen, maar wat erin staat, kan niet worden bewerkt.
- **Versleutelde en ondertekende PDF's:** het wijzigen van de pagina zou een handtekening breken, dus het gereedschap {{ui:Inhoud}} meldt dat en wijzigt niets. Markups werken nog steeds.
- **Afknipgebieden**, objecten die verdeeld zijn over twee delen van de paginainhoud, en kleurovergangen die een heel gebied vullen blijven zoals ze zijn; MarkupCraft zegt waarom wanneer u het probeert.
- **Woorden in een standaardlettertype dat de PDF niet beschrijft** (zoals een Times-lettertype zonder letterbreedtes in het bestand) kunnen niet worden gewijzigd, omdat MarkupCraft de regelafstand dan niet kon behouden. De regel kan wel worden verplaatst.

## Markups in de pagina zetten

Lijnen, rechthoeken, ellipsen, polylijnen, wolken en penstreken die u als markups tekende, kunnen deel van de pagina zelf worden: selecteer ze en kies {{ui:In de pagina zetten}} in {{ui:Eigenschappen}}. Tekst, stempels, afbeeldingen en doorzichtige kleuren blijven markups.

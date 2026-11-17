---
title: Penstreken opschonen, en beoordelingsopmerkingen en voortgang op de bouwplaats ophalen
summary: Maak van vrije penstreken lijnen, cirkels, bogen en rechthoeken; haal de beoordelingsopmerkingen van een vergunningspakket en de meetvoortgang van een bouwplaats binnen als notities.
keywords: pen, vrije hand, opschonen, rechttrekken, cirkel, lijn, rechthoek, boog, vergunning, beoordelingsopmerkingen, voortgang, drone, scan, opmeting, notities, csv
from: 547d8e42
---

## Penstreken opschonen

Teken met {{ui:Pen}}, open daarna het menu {{ui:More}} in de groep Bewerken en kies {{ui:Clean up pen strokes}}. Elke geselecteerde penstreek wordt wat hij moest zijn: een rechte streek wordt een lijn (precies horizontaal of loodrecht gemaakt als hij bijna zo was), een ronde streek een ellips, een deel van een cirkel een boog, een gesloten streek met vier hoeken een rechthoek, al het andere een polylijn of veelhoek. Losse uiteinden van samen getekende streken worden naar elkaar toe getrokken. Zonder geselecteerde penstreek worden alle penstreken op het geopende blad opgeschoond. Het is één stap ongedaan te maken: Ctrl+Z zet de vrije hand terug. De vorm wordt op uw computer berekend volgens vaste regels; er wordt niets naar elders gestuurd.

## Beoordelingsopmerkingen ophalen

Het vergunningspakket van BimCraft bevat `01-review-comments.csv`: de opmerkingen die een plantoetser waarschijnlijk zal maken, elk met de regel, het artikel, wat nodig is, wat is gevonden en wat er moet gebeuren. Open in het tabblad {{ui:Tasks}} {{ui:Permit review comments}} en kies {{ui:Bring in comments (CSV)}}. Elke opmerking wordt een open notitie in een kolom links op het geopende blad; sleep elke notitie naar de plek waar hij over gaat. Ze zijn berekend uit de bestaande controles, niet door een plantoetser.

## HAZOP-knoopvakken ophalen

De P&ID-add-on van CadCraft tekent de knopen van een HAZOP-studie en kan ze opslaan als {{ui:HAZOP node boxes}} (een JSON-bestand). Open hier het afgedrukte P&ID-blad, ga naar het tabblad {{ui:Tasks}}, open {{ui:HAZOP node boxes}} en kies {{ui:Bring in node boxes (JSON)}}. Elke knoop wordt een open rechthoek op het blad, met zijn nummer, naam, apparatuur en leidingen in de tekst, en het team schrijft zijn bevindingen als reacties erop. Het blad wordt genomen zoals het op ware grootte is afgedrukt, vanaf de linkerbenedenhoek van de tekening; is het op een andere schaal afgedrukt, typ dat getal dan eerst in {{ui:Printed at}} (0.5 voor 1:2). Een knoop die buiten de pagina valt, wordt niet getekend, en het paneel zegt hoeveel. De markeringen zijn een hulp bij de studie: ze tonen waar de knopen zijn, ze beoordelen de studie niet.

## Voortgang op de bouwplaats ophalen

CivilCraft bewaart een rij voor elke drone-vlucht of scan van de bouwplaats. Open in het tabblad {{ui:Tasks}} {{ui:Site progress}} en kies {{ui:Bring in progress (JSON)}}. Elke opmeting wordt een notitie op het geopende blad die zegt hoeveel er klaar is, wat er nog ontgraven of opgehoogd moet worden, wat te diep is ontgraven of te hoog is opgehoogd, en wat buiten het plan staat. Een opmeting met iets buiten het plan blijft Open; een schone wordt Geaccepteerd.

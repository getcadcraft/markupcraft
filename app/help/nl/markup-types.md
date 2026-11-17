---
title: Elk markuptype
summary: De zeventien soorten markup, hun toetsen, hoe elk wordt getekend, de standaardlook en wat het wordt in de opgeslagen PDF.
keywords: markuptypen, gereedschappenlijst, annotatietypen, wolk, aanwijzing, tekst, notitie, stempel, pen, markeerstift, lijn, pijl, rechthoek, ellips, polylijn, veelhoek, lengte, oppervlakte, telling
from: 29bf32e7
---

## De gereedschappen

| Werkbalk | Toets | Hoe tekenen | Standaardlook | In de opgeslagen PDF |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Slepen | Rood, 1.5 pt | Inkt |
| {{ui:Highlight}} | {{key:I}} | Slepen | Geel, 14 pt breed, doorzichtig, kleurt wat eronder ligt | Inkt (gemarkeerd als markeerstiftstreek) |
| {{ui:Line}} | {{key:L}} | Slepen, of klik begin en eind | Rood, 2 pt | Lijn |
| {{ui:Arrow}} | {{key:A}} | Slepen, of klik begin en eind | Rood, 2 pt, gesloten pijlpunt aan het eind | Lijn met pijlpunt |
| {{ui:Arc}} | {{key:O}} | Klik het begin, een punt op de boog, dan het eind | Rood, 2 pt | Polylijn langs de boog |
| {{ui:Rectangle}} | {{key:R}} | Sleep een kader | Rood, 2 pt, geen vulling | Vierkant |
| {{ui:Ellipse}} | {{key:E}} | Sleep een kader | Rood, 2 pt, geen vulling | Cirkel |
| {{ui:Polyline}} | {{key:Y}} | Klik punten, dubbelklik om af te ronden | Rood, 2 pt | Polylijn |
| {{ui:Polygon}} | {{key:G}} | Klik punten, dubbelklik om af te ronden | Rood, 2 pt, geen vulling | Veelhoek |
| {{ui:Cloud}} | {{key:C}} | Sleep een kader | Rood, 1.5 pt boogjes | Vierkant met wolkachtige rand |
| {{ui:Free cloud}} | {{key:Shift+C}} | Klik punten, dubbelklik om af te ronden | Rood, 1.5 pt boogjes | Veelhoek met wolkachtige rand |
| {{ui:Callout}} | {{key:K}} | Druk op het punt, sleep naar de tekst, typ | Rode tekst en leider, 1 pt, 12 pt tekst | Tekstvak met aanwijzingsleider |
| {{ui:Text}} | {{key:T}} | Klik of sleep een kader, typ | Rode tekst van 12 pt, geen rand | Tekstvak |
| {{ui:Note}} | {{key:N}} | Klik, typ | Gele notitie-icoon | Plaknotitie |
| {{ui:Stamp}} | {{key:S}} | Kies een stempel, klik of sleep | Omlijnde hoofdletters plus "Door <name>, <date>"; gekleurd naar betekenis | Stempel |
| {{ui:Length}} | {{key:M}} | Klik begin en eind (schaal nodig) | Blauwe maatlijn met streepjes en de lengte | Lijn gemarkeerd als maatvoering, met een meting |
| {{ui:Angle}} | {{key:X}} | Klik het eind van de ene arm, het hoekpunt, dan het eind van de andere arm | Blauwe armen, een kleine boog in het hoekpunt en de hoek in graden | Polylijn met de hoek als tekst |
| {{ui:Area}} | {{key:Q}} | Klik hoeken, dubbelklik om af te ronden (schaal nodig) | Blauwe omtrek, lichtblauwe vulling, oppervlakte en omtrek | Veelhoek gemarkeerd als oppervlakte, met een meting |
| {{ui:Count}} | {{key:U}} | Klik elk item aan | Oranje genummerde stippen en een tag "groep: n" | Eén inktcommentaar per groep, een ring per item |

Op aanraking is "dubbelklik om af te ronden" een dubbele tik, en "klik" is een tik die werkt wanneer de vinger wordt opgetild (voor punten, notities en tellingen).

## Wat elke markup bevat

| Veld | Waar u het ziet |
|---|---|
| Auteur | {{ui:Properties}}, de lijst, de tweede regel van het stempel, andere PDF-viewers |
| Aangemaakt en gewijzigd | {{ui:Properties}} (uw tijdzone), de lijst, de CSV |
| Status | Open, Geaccepteerd, Afgewezen of Voltooid |
| Onderwerp | Een korte aanduiding; standaard het soort ("Wolk", "Tekstvak", "Lengtemeting") |
| Opmerking | Langere notities. Voor een notitie is de tekst de opmerking. |
| Tekst | Alleen tekstvakken en aanwijzingen |
| Reacties | De draad, met statuswijzigingen |
| Puntitem | Nummer, toegewezene, vervaldatum, itemstatus, wanneer toegevoegd aan de opleverlijst |
| Stijl | Kleur, lijndikte, vulling en vullingdekking (gesloten vormen, tekst en aanwijzingen), dekking, tekstgrootte (tekst, aanwijzingen en metingen) |

## Alleen-lezen opmerkingen

Opmerkingen die met het bestand kwamen en die MarkupCraft niet kan bewerken (tekstmarkeringen, stempels van andere programma's en andere speciale soorten) worden vermeld met het type "Overig" en de statuschip "Alleen lezen". Ze behouden precies het uiterlijk dat het bestand hun geeft. U kunt ze selecteren, hun auteur, onderwerp en opmerking zien, en erop reageren.

## Nog niet beschikbaar

Bestandsbijlagen zijn nog niet beschikbaar. Elke markup kan naar een blad linken; zie [Bladkoppelingen](topic:sheet-links). Foto's en handtekeningen worden geplaatst met het gereedschap {{ui:Stamp}}; zie [Stempels en notities](topic:stamps-and-notes). Zie [Wat nog niet beschikbaar is](topic:not-built-yet).

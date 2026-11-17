---
title: Alla markeringstyper
summary: De sjutton typerna av markering, deras tangenter, hur var och en ritas, dess standardutseende och vad den blir i den sparade PDF-filen.
keywords: markeringstyper, verktygslista, annoteringstyper, moln, utropsruta, text, anteckning, stämpel, penna, överstrykning, linje, pil, rektangel, ellips, polylinje, polygon, längd, area, räkning
from: 29bf32e7
---

## Verktygen

| Verktygsfält | Tangent | Så ritar du | Standardutseende | I den sparade PDF-filen |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Dra | Röd, 1.5 pt | Bläck |
| {{ui:Highlight}} | {{key:I}} | Dra | Gul, 14 pt bred, genomskinlig, färgar det som ligger under | Bläck (markerat som överstrykning) |
| {{ui:Line}} | {{key:L}} | Dra, eller klicka start och slut | Röd, 2 pt | Linje |
| {{ui:Arrow}} | {{key:A}} | Dra, eller klicka start och slut | Röd, 2 pt, sluten pilspets i änden | Linje med pilspets |
| {{ui:Arc}} | {{key:O}} | Klicka start, en punkt på bågen, sedan slutet | Röd, 2 pt | Polylinje längs bågen |
| {{ui:Rectangle}} | {{key:R}} | Dra en ruta | Röd, 2 pt, ingen fyllning | Kvadrat |
| {{ui:Ellipse}} | {{key:E}} | Dra en ruta | Röd, 2 pt, ingen fyllning | Cirkel |
| {{ui:Polyline}} | {{key:Y}} | Klicka punkter, dubbelklicka för att avsluta | Röd, 2 pt | Polylinje |
| {{ui:Polygon}} | {{key:G}} | Klicka punkter, dubbelklicka för att avsluta | Röd, 2 pt, ingen fyllning | Polygon |
| {{ui:Cloud}} | {{key:C}} | Dra en ruta | Röd, 1.5 pt bucklor | Kvadrat med molnig kant |
| {{ui:Free cloud}} | {{key:Shift+C}} | Klicka punkter, dubbelklicka för att avsluta | Röd, 1.5 pt bucklor | Polygon med molnig kant |
| {{ui:Callout}} | {{key:K}} | Tryck på punkten, dra till texten, skriv | Röd text och hänvisning, 1 pt, 12 pt text | Textruta med utropshänvisning |
| {{ui:Text}} | {{key:T}} | Klicka eller dra en ruta, skriv | Röd 12 pt text, ingen kant | Textruta |
| {{ui:Note}} | {{key:N}} | Klicka, skriv | Gul anteckningsikon | Klisterlapp |
| {{ui:Stamp}} | {{key:S}} | Välj en stämpel, klicka eller dra | Inramade versaler plus "Av <namn>, <datum>"; färgad efter betydelse | Stämpel |
| {{ui:Length}} | {{key:M}} | Klicka start och slut (kräver en skala) | Blå måttlinje med streck och längden | Linje markerad som mått, med ett mätvärde |
| {{ui:Angle}} | {{key:X}} | Klicka ena armens ände, hörnet, sedan den andra armens ände | Blå armar, en liten båge vid hörnet och vinkeln i grader | Polylinje med vinkeln som text |
| {{ui:Area}} | {{key:Q}} | Klicka hörn, dubbelklicka för att avsluta (kräver en skala) | Blå kontur, ljusblå fyllning, area och omkrets | Polygon markerad som area, med ett mätvärde |
| {{ui:Count}} | {{key:U}} | Klicka på varje objekt | Orangea numrerade prickar och en "grupp: n"-tagg | En bläckkommentar per grupp, en ring per objekt |

På touch betyder "dubbelklicka för att avsluta" ett dubbeltryck, och "klicka" är ett tryck som verkställs när fingret lyfts (för punkter, anteckningar och räkningar).

## Det som varje markering bär

| Fält | Där du ser det |
|---|---|
| Upphovsperson | {{ui:Properties}}, listan, stämpelns andra rad, andra PDF-läsare |
| Skapad och ändrad | {{ui:Properties}} (din tidszon), listan, CSV |
| Status | Öppen, Godkänd, Avvisad eller Slutförd |
| Ämne | En kort etikett; standard är typen ("Moln", "Textruta", "Längdmätning") |
| Kommentar | Längre anteckningar. För en anteckning är dess text kommentaren. |
| Text | Endast textrutor och utropsrutor |
| Svar | Tråden, med statusändringar |
| Åtgärdspost | Nummer, tilldelad, förfallodatum, postens status, när den lagts till i åtgärdslistan |
| Stil | Färg, linjetjocklek, fyllning och fyllningens opacitet (slutna former, text och utropsrutor), opacitet, textstorlek (text, utropsrutor och mätningar) |

## Skrivskyddade kommentarer

Kommentarer som följde med filen och som MarkupCraft inte kan redigera (textmarkeringar, andra programs stämplar och andra särskilda typer) listas med typen "Övrigt" och statusetiketten "Skrivskyddad". De behåller exakt det utseende som filen ger dem. Du kan markera dem, se deras upphovsperson, ämne och kommentar, och svara på dem.

## Finns inte ännu

Bifogade filer finns inte ännu. Vilken markering som helst kan länka till ett blad; se [Bladlänkar](topic:sheet-links). Bilder och signaturer placeras med verktyget {{ui:Stamp}}; se [Stämplar och anteckningar](topic:stamps-and-notes). Se [Det som inte finns ännu](topic:not-built-yet).

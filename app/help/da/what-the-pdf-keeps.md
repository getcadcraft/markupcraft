---
title: Hvad der gemmes i PDF'en
summary: Præcis hvad den markerede kopi indeholder, hvad andre PDF-programmer ser, og hvad der læses tilbage når du åbner en fil.
keywords: pdf-noteringer, kommentarer, gemte data, tovejsgemning, sidemærkater, måling, gennemgangsstatus, svar, interoperabilitet, kompatibilitet, genåbning, private data
from: 6439ad28
---

Den markerede kopi er den oprindelige PDF med kommentarer (PDF-noteringer) tilføjet. Selve siderne, deres tegninger, tekst, bogmærker og links kopieres, som de var.

## Hver markering

| MarkupCraft | Gemt som | Andre PDF-fremvisere viser |
|---|---|---|
| Rektangel, kasse-sky | Square-notering (sky: skyet kant) | En rektangel- eller skykommentar |
| Ellipse | Circle-notering | En ellipsekommentar |
| Polygon, fri sky | Polygon-notering (sky: skyet kant) | En polygon- eller skykommentar |
| Polylinje | PolyLine-notering | En polylinjekommentar |
| Linje, pil | Line-notering (pil: lukket pilespids) | En linje- eller pilkommentar |
| Længde | Line-notering markeret som målsætning, med en måling | En længdemåling, hvor fremviseren understøtter dem |
| Areal | Polygon-notering markeret som areal, med en måling | En arealmåling, hvor det understøttes; ellers en polygon |
| Tællegruppe | Én ink-notering, en ring pr. post; teksten er »gruppe: n« | En ink-kommentar |
| Pen, markeringspen | Ink-notering (markeringspen markeret som sådan) | En ink-kommentar |
| Tekst | FreeText-notering | En tekstboks-kommentar |
| Henvisning | FreeText-notering med en henvisningslinje | En henvisningskommentar |
| Notat | Text-notering | En klæbeseddel, der åbnes til sin tekst |
| Stempel | Stamp-notering | En stempelkommentar |

Hver enkelt gemmes med:

- **sit eget udseende**, tegnet præcis som MarkupCraft tegner det på skærmen, så det ser ens ud i enhver fremviser og udskrives ens, inklusive punktnummer-mærket;
- **forfatteren**, **oprettelses- og ændringsdatoerne**, **emnet**, **kommentarteksten** (for tekstbokse og henvisninger teksten og kommentaren), **farven** og **uigennemsigtigheden**;
- **dets MarkupCraft-oplysninger** i en privat post, som andre programmer ignorerer: status, punktpost, stil og type, så det åbnes igen præcis.

## Tråde og statusser

- Hvert svar gemmes som en svarkommentar knyttet til sin markering, med forfatter, dato og tekst. Svar har ikke et eget ikon på arket.
- Hver statusændring gemmes som et svar med en gennemgangsstatus. Andre gennemgangsværktøjer viser den som Accepteret, Afvist eller Afsluttet; Åben gemmes uden status.
- En markering med en anden status end Åben, men uden en logført statusændring, får ét gennemgangsstatussvar, så andre programmer også ser statussen.
- Svar på skrivebeskyttede kommentarer fra den oprindelige fil gemmes på samme måde, knyttet til den kommentar.

## Hvert ark

- **Skala:** et kalibreret ark får en målevisning, der dækker siden (den almindelige måde at gemme en sidskala på), og MarkupCraft's egen kopi af kalibreringen.
- **Arknummer:** et nummer skrevet med {{ui:Omdøb ark}} bliver sidemærkat. Når en side i en fil har en, får hver side i filen en mærkat: sit skrevne nummer, ellers sin gamle mærkat, ellers sidenummeret.
- **Arktitel:** en skrevet titel gemmes kun til MarkupCraft; andre fremvisere viser den ikke.

## Tekst og tegn

Tekst skrives i Helvetica, som enhver PDF-fremviser har. Bogstaver uden for det vesteuropæiske sæt (Windows-1252) udskrives som »?« i kopien; gemmemeddelelsen tæller dem.

## Beregningsark og begrundelser

Beregningsark og begrundelser gemmes i en privat post i PDF'en kaldet `/MarkupCraftShell`. Andre PDF-programmer ignorerer den. En ældre MarkupCraft ignorerer den også og fjerner den, næste gang den gemmer filen.

## Hvad der sker med kommentarer der allerede var

Når du åbner en PDF der allerede har kommentarer:

- MarkupCraft's egne kommentarer læses tilbage præcis. Hvis et andet program flyttede eller ændrede størrelsen på en, vinder den nye position.
- Rektangler, ellipser, linjer, polylinjer, polygoner, ink, tekstbokse og klæbesedler fra andre programmer bliver redigerbare markeringer. **Når du gemmer, fjerner MarkupCraft originalerne og skriver dem igen på sin egen måde**, med deres pop-ups og svar. Deres udseende kan ændre sig lidt.
- Gennemgangsstatusser fra andre programmer sætter status; den nyeste vinder.
- Alt andet (tekstfremhævninger, andre programmers stempler og særlige typer) **bevares uberørt** i kopien, skrivebeskyttet.
- Links og formularfelter bevares uberørt og listes ikke.

Gemmer du den samme fil igen, fordobles aldrig noget: de markeringer MarkupCraft læste, erstattes, de tilføjes ikke igen.

## Hvad der ikke ændres

Din oprindelige fil på disken ændres aldrig. Kopien er ikke optimeret til størrelse, så den kan være lidt større end originalen. Beskyttede (krypterede) PDF'er kan ikke gemmes.

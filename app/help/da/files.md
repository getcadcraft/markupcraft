---
title: Filer, som MarkupCraft åbner og gemmer
summary: PDF'er ind, en markeret PDF-kopi ud, plus CSV-, BCF- og værktøjskassefiler; hvor hver af dem havner, online og offline.
keywords: pdf, åbn, gem, eksportér, download, csv, bcf, bcfzip, json, værktøjskasse, filtyper, formater, upload, adgangskode, krypteret
from: b3045b4c
---

## Hvad MarkupCraft åbner

| Fil | Sådan | Hvad der sker |
|---|---|---|
| PDF (`.pdf`) | {{ui:Åbn}}, {{key:Mod+O}}, eller slip på arkområdet. Flere ad gangen er fint. | Hver side bliver et ark. Markeringer, der allerede er i filen, læses ind igen (nedenfor). |
| Værktøjskasse (`.json`) | fanen {{ui:Værktøjer}}, derefter {{ui:Importér}} | Værktøjerne føjes til din værktøjskasse. Se [Værktøjskassen](topic:tool-chest). |

Alt andet afvises med »MarkupCraft åbner PDF-filer.« i statuslinjen. Hvis du slipper en blanding, åbnes PDF'erne, og statuslinjen siger, hvor mange filer der ikke var PDF.

### Markeringer, der allerede er i en PDF

- **Markeringer, som MarkupCraft har gemt,** kommer tilbage præcis som før: type, typografi, forfatter, datoer, status, svar, mangelnummer, arkets målestok og alle arknavne, du har skrevet.
- **Kommentarer fra andre PDF-programmer** læses også. Rektangler, ellipser, linjer og pile, polylinjer, polygoner, frihåndsstreger (pen), tekstbokse og post-it-sedler bliver til almindelige, redigerbare MarkupCraft-markeringer. Deres svar og gennemgangsstatus følger med.
- **Alt andet** (tekstfremhævninger lavet ved at markere tekst, andre programmers stempler og andre typer) vises, som det er, markeret som skrivebeskyttet. Du kan vælge det, se det i markeringslisten og svare på det, men ikke flytte, ændre eller slette det.
- Links og formularfelter lades urørt og vises ikke på listen.
- En målestok, som er gemt af et andet program (et målviewport), bruges som arkets målestok, når MarkupCraft forstår dens enhed.

### Filer, der ikke kan åbnes

- En PDF, der kræver en adgangskode: »name« kræver en adgangskode for at kunne åbnes. Åbn en ubeskyttet kopi.
- En beskadiget fil eller en, der i virkeligheden ikke er en PDF: »name« kunne ikke læses som en PDF (…).
- En PDF, der kan åbnes, men er beskyttet mod ændringer, åbner fint. Det afvises at gemme den (se nedenfor).

Når flere filer åbnes på én gang, åbnes de, der virker, og en dialogboks med titlen »Nogle filer blev ikke åbnet« viser de øvrige.

## Hvad MarkupCraft gemmer

At gemme er altid en **download** af en ny fil. En webside kan ikke overskrive en fil på din computer, og MarkupCraft ændrer aldrig din original.

| Du vælger | Du får | Bemærkninger |
|---|---|---|
| {{ui:Gem}} ({{key:Mod+S}}) | »<name> (marked up).pdf« | En kopi af den oprindelige PDF, hvor hver markering er skrevet ind som en rigtig PDF-kommentar. Gemmer du en »(marked up)«-fil igen, beholdes samme navn; den bliver aldrig til »(marked up) (marked up)«. Se [Gem den markerede PDF](topic:save-the-marked-up-pdf). |
| fanen {{ui:Markeringer}}, derefter {{ui:CSV}} | »<name> markups.csv« | Markeringerne, som de er listet (filtre gælder). |
| fanen {{ui:Markeringer}}, derefter {{ui:BCF}} | »<name> markups.bcfzip« | BCF 2.1 til BIM-koordineringsværktøjer, et snapshot pr. markering. Se [Grundlæggende om BCF](topic:bcf-basics). |
| fanen {{ui:Mangelliste}}, derefter {{ui:Eksportér CSV}} | »<name> punch list.csv« | Mangelposterne i nummerorden. |
| fanen {{ui:Værktøjer}}, derefter {{ui:Eksportér}} | »MarkupCraft tool chest.json« | Din værktøjskasse, til deling eller opbevaring. |

»<name>« er den første åbne PDF's filnavn uden ».pdf«.

CSV-filerne kan åbnes i alle regneark. De er UTF-8 med det mærke, som regneark leder efter, så tegn som æ, ø og å kommer rigtigt ud. En celle, der begynder med =, +, - eller @, får en indledende apostrof, så et regneark aldrig kører den som en formel.

## Hvor downloads havner

Din browser bestemmer: som regel mappen Downloads, eller den spørger hver gang, hvis du har indstillet det. Se [Browsere og computere](common:browsers#what-differs-between-browsers).

:::chromium
Når du gemmer alle ændrede filer i et sæt på én gang, kan Chrome og Edge spørge, om dette websted må downloade flere filer. Vælg {{ui:Tillad}}, ellers får du kun den første kopi.
:::

:::safari
På en iPad spørger Safari før hver download og lægger filen i appen Filer under Downloads. På en Mac havner den i den mappe, der er angivet i Safaris indstillinger.
:::

## Online og offline

- **Dine PDF'er forlader aldrig denne computer,** hverken online eller offline. Der uploades ikke noget nogen steder.
- PDF-læseren indlæses første gang, du åbner en PDF (»Indlæser PDF-læseren…«), og PDF-skriveren første gang, du gemmer (»Indlæser PDF-skriveren…«) eller åbner en fil, der allerede har kommentarer.
- Med en forbindelse indlæses begge fra webstedet.
- **For at arbejde uden forbindelse** vælger du {{ui:Gem til offline brug}} i linjen øverst, mens du er online. Knappen tæller »Gemmer N af M« og siger derefter »Klar offline«. Den kopi indeholder PDF-læseren og PDF-skriveren (ca. 6 MB i alt) og denne hjælp, så bagefter virker det at åbne, markere og gemme PDF'er offline i denne browser.
- Hvis knappen siger »Kunne ikke gemme«, blev nogle filer ikke downloadet: kontrollér forbindelsen og klik på den igen. Hvis den siger »Offline er ikke tilgængelig«, kan dette browservindue ikke beholde en offlinekopi (private vinduer og nogle administrerede computere); brug et almindeligt vindue.
- For at opdatere eller droppe kopien klikker du på »Klar offline« og vælger »Gem igen (hent den nyeste version)« eller »Fjern offlinekopien«. Mere i [Arbejd offline](common:offline).

:::offline
Du er offline. Hvis linjen øverst siger »Klar offline«, virker alt, også at gemme. Hvis den ikke gør, og du ikke har gemt endnu i denne fane, kan {{ui:Gem}} mislykkes med »PDF-skriveren kunne ikke indlæses«. Dine markeringer er stadig i fanen: hold den åben, gå online igen og vælg {{ui:Gem}} igen.
:::

## Godt at vide

- Store tegningssæt tager et stykke tid at åbne: MarkupCraft læser teksten på hver side for at finde arknumre. Statuslinjen tæller arkene undervejs.
- Åbner du den samme PDF to gange, tilføjes dens ark to gange. Luk sættet og åbn det igen, hvis det sker.
- {{ui:Luk}} lukker alle åbne filer på én gang. Hvis nogen har ikke-gemte markeringer, spørger den: {{ui:Annuller}}, {{ui:Luk uden at gemme}} eller {{ui:Gem kopier først}}.
- Skygemning findes ikke endnu, og der er ingen skrivebordsversioner endnu. Opbevar dine PDF'er sammen med dine øvrige projektfiler og tag sikkerhedskopier som sædvanlig. Se [Hvor dine filer havner](common:your-files).

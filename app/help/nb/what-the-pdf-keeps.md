---
title: Hva som lagres i PDF-en
summary: Nøyaktig hva den markerte kopien inneholder, hva andre PDF-programmer ser, og hva som leses tilbake når du åpner en fil.
keywords: PDF-annotasjoner, kommentarer, lagrede data, tur og retur, sidetiketter, måling, gjennomgangsstatus, svar, interoperabilitet, kompatibilitet, åpne igjen, private data
from: 6439ad28
---

Den markerte kopien er den opprinnelige PDF-en med kommentarer (PDF-annotasjoner) lagt til. Selve sidene, tegningene, teksten, bokmerkene og lenkene kopieres slik de var.

## Hver markering

| MarkupCraft | Lagret som | Andre PDF-visere viser |
|---|---|---|
| Rektangel, boksesky | Square-annotasjon (sky: skyet kant) | En rektangel- eller skykommentar |
| Ellipse | Circle-annotasjon | En ellipsekommentar |
| Mangekant, fri sky | Polygon-annotasjon (sky: skyet kant) | En mangekant- eller skykommentar |
| Polylinje | PolyLine-annotasjon | En polylinjekommentar |
| Linje, pil | Line-annotasjon (pil: lukket pilspiss) | En linje- eller pilkommentar |
| Lengde | Line-annotasjon merket som mål, med en måling | En lengdemåling, der leseren støtter dem |
| Areal | Polygon-annotasjon merket som areal, med en måling | En arealmåling der det støttes; ellers en mangekant |
| Telle-gruppe | Én ink-annotasjon, en ring per element; teksten er «gruppe: n» | En blekkommentar |
| Penn, markeringspenn | Ink-annotasjon (markeringspenn merket som det) | En blekkommentar |
| Tekst | FreeText-annotasjon | En tekstboksekommentar |
| Henvisning | FreeText-annotasjon med en henvisningslinje | En henvisningskommentar |
| Notat | Text-annotasjon | En klistrelapp som åpnes til teksten |
| Stempel | Stamp-annotasjon | En stempelkommentar |

Hver av dem lagres med:

- **sitt eget utseende**, tegnet nøyaktig slik MarkupCraft tegner den på skjermen, slik at den ser lik ut i enhver visning og skrives ut likt, avviksnummer-merket inkludert;
- **forfatteren**, **opprettings- og endringsdatoene**, **emnet**, **kommentarteksten** (for tekstbokser og henvisninger, teksten og kommentaren), **fargen** og **ugjennomsiktigheten**;
- **MarkupCraft-detaljene** i en privat oppføring som andre programmer ignorerer: status, avvikspost, stil og type, slik at den åpnes igjen nøyaktig.

## Tråder og statuser

- Hvert svar lagres som en svarkommentar koblet til sin markering, med forfatter, dato og tekst. Svar har ikke noe eget ikon på arket.
- Hver statusendring lagres som et svar med en gjennomgangsstatus. Andre gjennomgangsverktøy viser den som Akseptert, Avvist eller Fullført; Åpen lagres som ingen status.
- En markering med en annen status enn Åpen, men uten en loggført statusendring, får ett gjennomgangsstatussvar, slik at andre programmer også ser statusen.
- Svar på skrivebeskyttede kommentarer fra den opprinnelige filen lagres på samme måte, koblet til den kommentaren.

## Hvert ark

- **Målestokk:** et kalibrert ark får et målevisningsområde som dekker siden (den vanlige måten å lagre en sidemålestokk på), og MarkupCraft sin egen kopi av kalibreringen.
- **Arknummer:** et nummer skrevet inn med {{ui:Gi arket nytt navn}} blir sidetiketten. Når en side i en fil har en, får hver side i filen en etikett: det skrevne nummeret, ellers den gamle etiketten, ellers sidenummeret.
- **Arktittel:** en skrevet tittel lagres bare for MarkupCraft; andre visere viser den ikke.

## Tekst og tegn

Teksten skrives i Helvetica, som alle PDF-visere har. Bokstaver utenfor det vesteuropeiske settet (Windows-1252) skrives ut som «?» i kopien; lagremeldingen teller dem.

## Beregningsark og begrunnelser

Beregningsark og begrunnelser holdes i en privat oppføring i PDF-en kalt `/MarkupCraftShell`. Andre PDF-programmer ignorerer den. En eldre MarkupCraft ignorerer den også, og fjerner den neste gang den lagrer filen.

## Hva som skjer med kommentarer som allerede fantes

Når du åpner en PDF som allerede har kommentarer:

- MarkupCraft sine egne kommentarer leses tilbake nøyaktig. Hvis et annet program flyttet eller endret størrelsen på en, vinner den nye posisjonen.
- Rektangler, ellipser, linjer, polylinjer, mangekanter, blekk, tekstbokser og klistrelapper fra andre programmer blir redigerbare markeringer. **Når du lagrer, fjerner MarkupCraft originalene og skriver dem på nytt på sin egen måte**, med tilhørende popup-vinduer og svar. Utseendet kan endre seg litt.
- Gjennomgangsstatuser fra andre programmer setter statusen; den nyeste vinner.
- Alt annet (tekstutheving, andre programmers stempler og spesielle typer) **beholdes urørt** i kopien, skrivebeskyttet.
- Lenker og skjemafelt beholdes urørt og listes ikke.

Lagring av samme fil igjen dobler aldri noe: markeringene MarkupCraft leste, erstattes og legges ikke til på nytt.

## Hva som ikke endres

Den opprinnelige filen din på disken endres aldri. Kopien er ikke optimalisert for størrelse, så den kan være litt større enn originalen. Beskyttede (krypterte) PDF-er kan ikke lagres.

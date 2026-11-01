---
title: Filer MarkupCraft åpner og lagrer
summary: PDF-er inn, en markert PDF-kopi ut, pluss CSV-, BCF- og verktøykassefiler; hvor hver av dem havner, tilkoblet og frakoblet.
keywords: pdf, åpne, lagre, eksportere, laste ned, csv, bcf, bcfzip, json, verktøykasse, filtyper, formater, laste opp, passord, kryptert
from: b3045b4c
---

## Hva MarkupCraft åpner

| Fil | Hvordan | Hva skjer |
|---|---|---|
| PDF (`.pdf`) | {{ui:Åpne}}, {{key:Mod+O}}, eller slipp på arkflaten. Flere om gangen går bra. | Hver side blir et ark. Markeringer som allerede finnes i filen leses inn igjen (nedenfor). |
| Verktøykasse (`.json`) | fanen {{ui:Verktøy}}, deretter {{ui:Importer}} | Verktøyene legges til i verktøykassen din. Se [Verktøykassen](topic:tool-chest). |

Alt annet avvises med «MarkupCraft åpner PDF-filer.» i statuslinjen. Hvis du slipper en blanding, åpnes PDF-ene, og statuslinjen sier hvor mange filer som ikke var PDF.

### Markeringer som allerede finnes i en PDF

- **Markeringer MarkupCraft har lagret** kommer tilbake nøyaktig: type, stil, forfatter, datoer, status, svar, avviksnummer, arkets målestokk og alle arknavn du har skrevet.
- **Kommentarer fra andre PDF-programmer** leses også. Rektangler, ellipser, linjer og piler, polylinjer, mangekanter, frihåndsstreker (penn), tekstbokser og notatlapper blir vanlige, redigerbare MarkupCraft-markeringer. Svarene og gjennomgangsstatusene deres følger med.
- **Alt annet** (tekstutheving laget ved å markere tekst, andre programmers stempler og andre typer) vises slik det er, merket som skrivebeskyttet. Du kan velge det, se det i markeringslisten og svare på det, men ikke flytte, endre eller slette det.
- Lenker og skjemafelt blir latt være og vises ikke i listen.
- En målestokk lagret av et annet program (et målevisningsområde) brukes som arkets målestokk når MarkupCraft forstår enheten.

### Filer som ikke åpnes

- En PDF som krever passord: «name» krever et passord for å åpnes. Åpne en ubeskyttet kopi.
- En skadet fil, eller en som egentlig ikke er en PDF: «name» kunne ikke leses som en PDF (…).
- En PDF som åpnes, men er beskyttet mot endringer, åpnes som vanlig. Lagring avvises (se nedenfor).

Når flere filer åpnes samtidig, åpnes de som fungerer, og en boks med navnet «Noen filer ble ikke åpnet» lister de andre.

## Hva MarkupCraft lagrer

Å lagre er alltid en **nedlasting** av en ny fil. En nettside kan ikke overskrive en fil på datamaskinen din, og MarkupCraft endrer aldri originalen din.

| Du velger | Du får | Merknader |
|---|---|---|
| {{ui:Lagre}} ({{key:Mod+S}}) | «<name> (marked up).pdf» | En kopi av den opprinnelige PDF-en med hver markering skrevet inn som en ekte PDF-kommentar. Hvis du lagrer en «(marked up)»-fil igjen, beholdes samme navn; den blir aldri «(marked up) (marked up)». Se [Lagre den markerte PDF-en](topic:save-the-marked-up-pdf). |
| fanen {{ui:Markeringer}}, deretter {{ui:CSV}} | «<name> markups.csv» | Markeringene slik de er listet (filtre gjelder). |
| fanen {{ui:Markeringer}}, deretter {{ui:BCF}} | «<name> markups.bcfzip» | BCF 2.1 for BIM-koordineringsverktøy, ett øyeblikksbilde per markering. Se [Grunnleggende om BCF](topic:bcf-basics). |
| fanen {{ui:Avviksliste}}, deretter {{ui:Eksporter CSV}} | «<name> punch list.csv» | Avvikspostene i nummerrekkefølge. |
| fanen {{ui:Verktøy}}, deretter {{ui:Eksporter}} | «MarkupCraft tool chest.json» | Verktøykassen din, til deling eller oppbevaring. |

«<name>» er navnet på den første åpne PDF-filen uten «.pdf».

CSV-filene åpnes i alle regneark. De er UTF-8 med den markøren regneark ser etter, slik at tegn som æ, ø og å blir riktige. En celle som begynner med =, +, - eller @ får en innledende apostrof, slik at et regneark aldri kjører den som en formel.

## Hvor nedlastingene havner

Nettleseren din avgjør: som regel mappen Nedlastinger, eller den spør hver gang hvis du har stilt den inn slik. Se [Nettlesere og datamaskiner](common:browsers#what-differs-between-browsers).

:::chromium
Når du lagrer alle endrede filer i et sett på én gang, kan Chrome og Edge spørre om dette nettstedet har lov til å laste ned flere filer. Velg {{ui:Tillat}}, ellers får du bare den første kopien.
:::

:::safari
På en iPad spør Safari før hver nedlasting og legger filen i Filer-appen, under Nedlastinger. På en Mac havner den i mappen som er angitt i Safaris innstillinger.
:::

## Tilkoblet og frakoblet

- **PDF-ene dine forlater aldri denne datamaskinen**, verken tilkoblet eller frakoblet. Ingenting lastes opp noe sted.
- PDF-leseren lastes første gang du åpner en PDF («Laster PDF-leseren…»), og PDF-skriveren første gang du lagrer («Laster PDF-skriveren…») eller åpner en fil som allerede har kommentarer.
- Med tilkobling lastes begge fra nettstedet.
- **For å arbeide uten tilkobling** velger du {{ui:Lagre for frakoblet bruk}} i linjen øverst mens du er tilkoblet. Knappen teller «Lagrer N av M» og sier deretter «Klar frakoblet». Den kopien inneholder PDF-leseren og PDF-skriveren (omtrent 6 MB til sammen) og denne hjelpen, slik at det etterpå fungerer frakoblet å åpne, markere og lagre PDF-er i denne nettleseren.
- Hvis knappen sier «Kunne ikke lagre», ble ikke alle filene lastet ned: sjekk tilkoblingen og klikk på den igjen. Hvis den sier «Frakoblet bruk er ikke tilgjengelig», kan dette nettleservinduet ikke beholde en frakoblet kopi (private vinduer og enkelte administrerte datamaskiner); bruk et vanlig vindu.
- For å oppdatere eller droppe kopien klikker du på «Klar frakoblet» og velger «Lagre på nytt (hent nyeste versjon)» eller «Fjern den frakoblede kopien». Mer i [Arbeide frakoblet](common:offline).

:::offline
Du er frakoblet. Hvis linjen øverst sier «Klar frakoblet», fungerer alt, også lagring. Hvis den ikke gjør det og du ikke har lagret ennå i denne fanen, kan {{ui:Lagre}} mislykkes med «PDF-skriveren kunne ikke lastes». Markeringene dine ligger fortsatt i fanen: la den stå åpen, koble til igjen og velg {{ui:Lagre}} på nytt.
:::

## Greit å vite

- Store tegningssett bruker litt tid på å åpnes: MarkupCraft leser teksten på hver side for å finne arknumre. Statuslinjen teller arkene underveis.
- Hvis du åpner den samme PDF-en to ganger, legges arkene til to ganger. Lukk settet og åpne det på nytt hvis det skjer.
- {{ui:Lukk}} lukker alle åpne filer på én gang. Hvis noen har ulagrede markeringer, spør den: {{ui:Avbryt}}, {{ui:Lukk uten å lagre}} eller {{ui:Lagre kopier først}}.
- Lagring i skyen er ikke tilgjengelig ennå, og det finnes ingen skrivebordsversjoner ennå. Oppbevar PDF-ene dine sammen med de andre prosjektfilene og ta sikkerhetskopier som vanlig. Se [Hvor filene dine havner](common:your-files).

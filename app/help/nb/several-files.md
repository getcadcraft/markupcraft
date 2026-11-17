---
title: Arbeid med flere filer samtidig
summary: Åpne mange PDF-filer som ett sett, finn ark på tvers av filer, kopier markeringer mellom dem, og lagre kopien av hver fil.
keywords: flere filer, flere pdf-filer, plansett, sett, batch, mange filer, kombiner, fagområder, arkitekt konstruksjon mekanisk, lagre alle, lukk
from: f59354ae
---

Et plansett kommer ofte som én PDF-fil per fagområde, eller én PDF-fil per ark. MarkupCraft behandler alt du åpner som **ett sett**.

## Åpne dem sammen

Velg alle PDF-filene i filvelgeren samtidig, eller slipp dem alle på arkområdet. For å legge til flere senere, åpne dem på samme måte; de legges til på slutten av listen {{ui:Sheets}} i den rekkefølgen du åpner dem.

Resultat: "Åpnet 6 filer (84 ark i settet)." Hver side er et ark. Ark med et arknummer viser "Ark A-101" under navnet sitt; andre viser filen og siden.

Det finnes ingen lagret "sett"-fil: neste gang åpner du de samme PDF-filene igjen (kopiene "(marked up)", hvis du lagret).

## Over hele settet

- **Finn et ark:** {{ui:Search sheets}} ser i arknumre, arknavn og filnavn i alle filer. {{key:PageUp}} og {{key:PageDown}} går gjennom alle ark i alle filer i rekkefølge.
- **Markeringsliste:** fanen {{ui:Markups}} lister markeringer fra alle filer. Filtrer etter {{ui:Sheet}} for å snevre inn. CSV-filen har en kolonne for fil.
- **Avvikliste:** én nummerering for hele settet.
- **Sammenligning:** det gamle og det nye arket kan komme fra forskjellige filer.
- **Kopier og lim inn:** {{key:Mod+C}} på ett ark og {{key:Mod+V}} på et annet, i hvilken som helst fil. Kopien havner på samme sted på siden, litt forskjøvet.

## Lagre

Velg {{ui:Save}}. Når mer enn én fil er åpen, spør MarkupCraft:

- {{ui:This file}}: en markert kopi av filen til arket du er på.
- {{ui:Every changed file}}: en kopi av hver fil med ulagrede endringer. Hver lastes ned for seg, som "<file name> (marked up).pdf".
- {{ui:Cancel}}

:::chromium
Første gang du lagrer flere filer samtidig, kan Chrome og Edge spørre om nettstedet har lov til å laste ned flere filer. Velg {{ui:Allow}}; ellers kommer bare den første kopien.
:::

:::safari
Safari kan spørre én gang for hver fil. På en iPad går hver kopi til Filer-appen.
:::

En fil hvis markeringer er lagret, regnes ikke lenger som endret; de andre gjør det fortsatt.

CSV-, BCF- og avviksliste-eksporter får navn etter den **første** filen du åpnet.

## Lukk

{{ui:Close}} lukker hele settet; det finnes ennå ingen måte å lukke bare én fil på. Hvis noe er ulagret, spør den:

- {{ui:Cancel}}: ingenting skjer.
- {{ui:Close without saving}}: ulagrede markeringer går tapt.
- {{ui:Save copies first}}: lagrer hver endret fil, og lukker deretter.

Lukking tømmer også angrehistorikken.

## Store sett

- Teksten på hver side leses når settet åpnes, for å finne arknumre, så et sett på 100 ark tar en stund. Statuslinjen teller ark etter hvert som det går.
- Arkbilder i listen tegnes når du ruller til dem.
- Hver åpen PDF-fil holdes i minnet til nettleserfanen. Hvis fanen blir treg, lukk andre tunge faner, eller gjennomgå ett fagområde om gangen.
- Å åpne samme fil to ganger gir deg to kopier av arkene. Hvis det skjer, velg {{ui:Close}} og åpne settet på nytt.

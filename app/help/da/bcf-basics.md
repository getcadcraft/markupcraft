---
title: BCF-grundlæggende
summary: Hvad en BCF-eksport fra MarkupCraft indeholder, hvordan du bruger den med BIM-koordineringsværktøjer, og dens begrænsninger.
keywords: bcf, bcfzip, BIM Collaboration Format, emner, koordinering, kollision, synspunkt, øjebliksbillede, openbim, buildingsmart, eksportér emner
from: 0de26175
---

BCF (BIM Collaboration Format) er et åbent filformat til at sende emner mellem BIM-værktøjer. Mange modelkoordinerings- og modelleringsprogrammer kan importere en `.bcfzip`-fil som en liste over emner. MarkupCraft skriver **BCF 2.1**.

## Sådan laver du en

1. Åbn fanen {{ui:Markeringer}}.
2. Filtrér listen til det, du vil sende, for eksempel {{ui:Status}} "Åben". Kun de viste markeringer eksporteres.
3. Vælg {{ui:BCF}}.
4. Vent, mens den laver et øjebliksbillede af hver markering ("Laver øjebliksbilleder til BCF (5 af 20)…").

Resultat: "<name> markups.bcfzip" hentes, og statuslinjen viser, hvor mange emner filen indeholder, og filens størrelse.

## Hvad der er med

Hver markering bliver til ét **emne**:

| Emnefelt | Udfyldes med |
|---|---|
| Titel | Mangelnummer, emne og ark, for eksempel "#4 Revisionssky på A-101 — Plan" |
| Type | Markeringstypen (Revisionssky, Henvisning, Længde …) |
| Status | Åben, Accepteret, Afvist eller Afsluttet |
| Etiketter | Markeringstypen og arket |
| Forfatter og datoer | Markeringens forfatter, oprettelses- og ændringsdato |
| Tildelt, forfaldsdato | Fra dens mangelpunkt, når den har et |
| Beskrivelse | Dens tekst eller stempelformulering, målt værdi, kommentar, samt ark og fil |
| Kommentarer | Én pr. svar, med forfatter og dato |
| Øjebliksbillede | Et billede af markeringen på dens del af arket |
| Synspunkt | Et set oppefra af markeringens placering på arket |

Eksporterer du den samme markering igen, får den det samme emne-ID, så et værktøj, der importerer BCF, kan genkende den som det samme emne.

## Hvad der kommer med ind, når du importerer

{{ui:Importér BCF}} læser BCF 2.0-, 2.1- og 3.0-filer (kontrolleret på de 19 officielle buildingSMART 3.0-testfiler: hvert emne blev læst, og kommentarerne i de tre, der har tekst). For et emne, der er dit (samme emne-ID), tilføjes de nye kommentarer som svar, og den nye status overtages. Ethvert andet emne bliver til et notat på det ark, dets etiket eller filnavn angiver, ellers på det åbne ark, med titel, beskrivelse, tildelt person og forfaldsdato som notatets tekst og dets kommentarer som svar.

| I BCF-emnet | I MarkupCraft |
|---|---|
| Titel, beskrivelse, tildelt, forfaldsdato | Notatets tekst |
| Kommentarer med tekst | Svar |
| Status Åben, Accepteret, Afvist, Afsluttet (Closed, Resolved og Done tæller som Afsluttet) | Markeringens status |
| Forfatter og oprettelsesdato | Notatets forfatter og dato |
| Kameraposition | En placering på arket, kun for et emne knyttet til et ark via etiket eller filnavn |
| Modelvalg, skjulte dele, snitplaner, øjebliksbilleder | Gemmes ikke: et ark har ingen model, de kan vises i |

## Begrænsninger

- **Et ark er ikke en model.** Synspunktet peger på markeringens position på papiret, målt i meter papir. Det fører ikke et BIM-værktøj til et sted i modellen. Brug øjebliksbilledet og arkets navn til at finde stedet.
- **Statusser og typer er MarkupCraft's egne** (Åben, Accepteret, Afvist, Afsluttet; Revisionssky, Henvisning …). Filen angiver dem, som BCF tillader, men et værktøj med egne faste lister kan omdanne eller ignorere dem.
- **Import giver kommentarer, ikke modelvisninger.** {{ui:Importér BCF}} tilføjer svar og statusser til de markeringer, du har eksporteret, og laver notater af andre emner; den kan ikke vise et modelkamera. Se [Markeringsliste og eksport](topic:markups-list-and-export#import-bcf).
- At sende markeringer tilbage som PDF er ofte enklere til tegningsgennemgang. BCF er til at få tegningskommentarer ind i et modelkoordineringsflow.

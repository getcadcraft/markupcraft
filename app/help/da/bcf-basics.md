---
title: Grundlæggende om BCF
summary: Hvad en BCF-eksport fra MarkupCraft indeholder, hvordan du bruger den med BIM-koordineringsværktøjer, og dens begrænsninger.
keywords: bcf, bcfzip, bim collaboration format, emner, koordinering, kollision, emner, viewpoint, snapshot, openbim, buildingsmart, eksportér emner
from: 446f38c1
---

BCF (BIM Collaboration Format) er et åbent filformat til at sende emner mellem BIM-værktøjer. Mange modelkoordinerings- og modelleringsprogrammer kan importere en `.bcfzip`-fil som en liste over emner. MarkupCraft skriver **BCF 2.1**.

## Sådan laver du en

1. Åbn fanen {{ui:Markeringer}}.
2. Filtrér listen til det, du vil sende, for eksempel {{ui:Status}} "Åben". Kun de viste markeringer eksporteres.
3. Vælg {{ui:BCF}}.
4. Vent, mens den laver et snapshot af hver markering (»Laver snapshots til BCF (5 af 20)…«).

Resultat: "<name> markups.bcfzip" hentes, og statuslinjen viser, hvor mange emner filen indeholder, og filstørrelsen.

## Hvad der er i filen

Hver markering bliver til ét **emne**:

| Emnefelt | Udfyldes med |
|---|---|
| Titel | Mangelnummer, emne og ark, for eksempel "#4 Sky på A-101 — Plantegning" |
| Type | Markeringstypen (Sky, Henvisning, Længde…) |
| Status | Åben, Accepteret, Afvist eller Afsluttet |
| Labels | Markeringstypen og arket |
| Forfatter og datoer | Markeringens forfatter, oprettelsesdato og ændringsdato |
| Tildelt til, forfaldsdato | Fra dens mangelpost, når den har en |
| Beskrivelse | Dens tekst eller stempeltekst, målt værdi, kommentar og ark og fil |
| Kommentarer | Én pr. svar, med forfatter og dato |
| Snapshot | Et billede af markeringen på dens del af arket |
| Viewpoint | Et set oppefra af markeringens plads på arket |

Eksporterer du den samme markering igen, får den samme emne-ID, så et værktøj, der importerer BCF, kan genkende den som det samme emne.

## Begrænsninger

- **Et ark er ikke en model.** Viewpoint peger på markeringens plads på papiret, målt i meter papir. Det fører ikke et BIM-værktøj hen til et sted i modellen. Brug snapshot og arknavnet til at finde stedet.
- **Statusser og typer er MarkupCrafts egne** (Åben, Accepteret, Afvist, Afsluttet; Sky, Henvisning …). Filen angiver dem, som BCF tillader, men et værktøj med egne faste lister kan omsætte eller ignorere dem.
- **Import giver kommentarer, ikke modelvisninger.** {{ui:Importér BCF}} tilføjer svar og statusser til de markeringer, du har eksporteret, og laver noter af andre emner; den kan ikke vise et modelkamera. Se [Markeringsliste og eksport](topic:markups-list-and-export#import-bcf).
- At sende markeringer tilbage som en PDF er ofte enklere ved tegningsgennemgang. BCF er til at få tegningskommentarer ind i en modelkoordineringsproces.

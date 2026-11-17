---
title: Grunnleggende om BCF
summary: Hva en BCF-eksport fra MarkupCraft inneholder, hvordan du bruker den med verktøy for BIM-koordinering, og begrensningene.
keywords: bcf, bcfzip, bim collaboration format, saker, koordinering, kollisjon, emner, visningspunkt, øyeblikksbilde, openbim, buildingsmart, eksporter saker
from: 446f38c1
---

BCF (BIM Collaboration Format) er et åpent filformat for å sende saker mellom BIM-verktøy. Mange programmer for modellkoordinering og modellering kan importere en `.bcfzip`-fil som en liste over saker. MarkupCraft skriver **BCF 2.1**.

## Lag en

1. Åpne fanen {{ui:Markeringer}}.
2. Filtrer listen til det du vil sende, for eksempel {{ui:Status}} "Åpen". Bare de viste markeringene eksporteres.
3. Velg {{ui:BCF}}.
4. Vent mens den lager et øyeblikksbilde av hver markering («Lager øyeblikksbilder for BCF (5 av 20)…»).

Resultat: "<name> markups.bcfzip" lastes ned, og statuslinjen viser hvor mange emner den inneholder og filstørrelsen.

## Hva som er med

Hver markering blir ett **emne**:

| Emnefelt | Fylles med |
|---|---|
| Tittel | Avviksnummer, emne og ark, for eksempel "#4 Sky på A-101 — Planløsning" |
| Type | Markeringstypen (Sky, Henvisning, Lengde…) |
| Status | Åpen, Godkjent, Avvist eller Fullført |
| Etiketter | Markeringstypen og arket |
| Forfatter og datoer | Markeringens forfatter, opprettet- og endret-dato |
| Tildelt til, forfallsdato | Fra avviket, når det har ett |
| Beskrivelse | Teksten eller stempelteksten, målt verdi, kommentar, og arket og filen |
| Kommentarer | En per svar, med forfatter og dato |
| Øyeblikksbilde | Et bilde av markeringen på sin del av arket |
| Visningspunkt | En visning ovenfra av markeringens plass på arket |

Eksporterer du samme markering på nytt, får den samme emne-ID, slik at et verktøy som importerer BCF kan kjenne igjen den som den samme saken.

## Begrensninger

- **Et ark er ikke en modell.** Visningspunktet peker på markeringens plass på papiret, målt i meter papir. Det tar ikke et BIM-verktøy til et sted i modellen. Bruk øyeblikksbildet og arknavnet for å finne stedet.
- **Statuser og typer er MarkupCraft sine egne** (Åpen, Godkjent, Avvist, Fullført; Sky, Henvisning …). Filen angir dem, slik BCF tillater, men et verktøy med egne faste lister kan knytte dem til andre eller ignorere dem.
- **Import gir kommentarer, ikke modellvisninger.** {{ui:Importer BCF}} legger til svar og statuser på markeringene du eksporterte, og lager notater for andre saker. Den kan ikke vise et modellkamera. Se [Markeringsliste og eksport](topic:markups-list-and-export#import-bcf).
- Å sende markeringer tilbake som PDF er ofte enklere for gjennomgang av tegninger. BCF er til for å få tegningskommentarer inn i en arbeidsflyt for modellkoordinering.

---
title: BCF-grunnleggende
summary: Hva en BCF-eksport fra MarkupCraft inneholder, hvordan du bruker den med verktøy for BIM-koordinering, og begrensningene.
keywords: bcf, bcfzip, bim collaboration format, saker, koordinering, kollisjon, emner, synspunkt, øyeblikksbilde, openbim, buildingsmart, eksporter saker
from: 0de26175
---

BCF (BIM Collaboration Format) er et åpent filformat for å sende saker mellom BIM-verktøy. Mange programmer for modellkoordinering og modellering kan importere en `.bcfzip`-fil som en liste over saker. MarkupCraft skriver **BCF 2.1**.

## Lag en fil

1. Åpne fanen {{ui:Markeringer}}.
2. Filtrer listen til det du vil sende, for eksempel {{ui:Status}} «Åpen». Bare de oppførte markeringene eksporteres.
3. Velg {{ui:BCF}}.
4. Vent mens det lages et øyeblikksbilde av hver markering («Lager øyeblikksbilder for BCF (5 av 20)…»).

Resultat: «<navn> markeringer.bcfzip» lastes ned, og statuslinjen viser hvor mange emner den inneholder, og filstørrelsen.

## Hva den inneholder

Hver markering blir ett **emne**:

| Emnefelt | Fylles med |
|---|---|
| Tittel | Punktnummer, emne og ark, for eksempel «#4 Sky på A-101 — Etasjeplan» |
| Type | Markeringstypen (Sky, Henvisning, Lengde …) |
| Status | Åpen, Akseptert, Avvist eller Fullført |
| Etiketter | Markeringstypen og arket |
| Forfatter og datoer | Markeringens forfatter, opprettet- og endringsdato |
| Tildelt, frist | Fra det tilhørende punktet, når det finnes et |
| Beskrivelse | Teksten eller stempelteksten, målt verdi, kommentar, og arket og filen |
| Kommentarer | Én per svar, med forfatter og dato |
| Øyeblikksbilde | Et bilde av markeringen på sin del av arket |
| Synspunkt | En visning ovenfra av markeringens plassering på arket |

Eksporterer du den samme markeringen igjen, får den samme emne-ID, slik at et verktøy som importerer BCF kan kjenne den igjen som samme sak.

## Hva som kommer tilbake når du importerer

{{ui:Importer BCF}} leser BCF 2.0-, 2.1- og 3.0-filer (kontrollert på de 19 offisielle testfilene for buildingSMART 3.0: hvert emne ble lest, og kommentarene til de tre som har tekst). For et emne som er ditt (samme emne-ID) legger den til nye kommentarer som svar og tar over den nye statusen. Ethvert annet emne blir en merknad på arket som etiketten eller filnavnet peker på, ellers på det åpne arket, med tittel, beskrivelse, ansvarlig og frist som merknadens tekst, og kommentarene som svar.

| I BCF-emnet | I MarkupCraft |
|---|---|
| Tittel, beskrivelse, ansvarlig, frist | Merknadens tekst |
| Kommentarer med tekst | Svar |
| Status Åpen, Akseptert, Avvist, Fullført (Lukket, Løst og Ferdig regnes som Fullført) | Markeringens status |
| Forfatter og opprettelsesdato | Merknadens forfatter og dato |
| Kameraposisjon | Et sted på arket, bare for et emne som er knyttet til et ark via etikett eller filnavn |
| Modellvalg, skjulte deler, klippeplan, øyeblikksbilder | Lagres ikke: et ark har ingen modell å vise dem i |

## Begrensninger å kjenne til

- **Et ark er ikke en modell.** Synspunktet peker på markeringens posisjon på papiret, målt i meter papir. Det tar ikke et BIM-verktøy til et sted i modellen. Bruk øyeblikksbildet og arknavnet for å finne stedet.
- **Statuser og typer er MarkupCraft sine egne** (Åpen, Akseptert, Avvist, Fullført; Sky, Henvisning …). Filen erklærer dem, slik BCF tillater, men et verktøy med egne faste lister kan knytte dem til andre verdier eller ignorere dem.
- **Import gir kommentarer, ikke modellvisninger.** {{ui:Importer BCF}} legger til svar og statuser på markeringene du eksporterte, og lager merknader av andre saker; den kan ikke vise et modellkamera. Se [Markeringsliste og eksport](topic:markups-list-and-export#import-bcf).
- Å sende markeringene tilbake som PDF er ofte enklere for gjennomgang av tegninger. BCF er til for å få kommentarer til tegninger inn i en arbeidsflyt for modellkoordinering.

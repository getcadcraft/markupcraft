---
title: Markeringslayer
summary: Legg markeringer på navngitte layer, og vis, skjul eller lås hvert layer; andre PDF-visere kan også bytte dem.
keywords: layer, layers, skjul, vis, lås, gruppere markeringer, disiplin, mekanisk, elektrisk, valgfritt innhold, ocg, synlighet
from: 0fbb4c26
---

Layer grupperer markeringer, for eksempel etter fagdisiplin eller etter gjennomgår. Skjul et layer for å se tegningen under det, eller lås det slik at markeringene ikke flyttes ved et uhell.

## Lag et layer og tegn på det

1. Åpne {{ui:Layer}}, øverst i panelet {{ui:Ark}}.
2. Velg {{ui:Nytt layer}}, skriv et navn som `Mechanical`, og velg {{ui:Legg til layer}}.
3. Det nye layeret blir aktivt layer: hver markering du tegner fra nå av havner på det. Velg et annet layers navn, eller {{ui:Ingen layer}}, for å endre hvor nye markeringer havner.

For å flytte en markering til et annet layer, velg den og velg layeret under {{ui:Layer}} i {{ui:Egenskaper}}. {{ui:Nytt layer…}} nederst i listen lager et nytt layer på stedet. Flyttingen kan angres med {{key:Mod+Z}}.

## Vis, skjul og lås

Hver layer-rad har to knapper:

- **Øyet** viser eller skjuler layeret. Skjulte markeringer tegnes ikke og kan ikke velges; de telles fortsatt i listen {{ui:Markeringer}}.
- **Låsen** beholder layerets markeringer på arket, men hindrer at de velges, flyttes eller slettes.

Blyantknappen gir layeret nytt navn og tar med markeringene. Filtrer listen {{ui:Markeringer}} etter {{ui:Layer}} for å se markeringene i ett layer.

## I den lagrede PDF-en

Hvert layer blir et PDF-layer (valgfritt innhold). Andre PDF-visere viser layerne i sitt layerpanel og kan bytte dem; et layer du skjulte, starter skjult der også. Layer som tegningen allerede hadde, som CAD-layer, blir værende slik de var. Når du åpner kopien igjen i MarkupCraft, kommer markeringene tilbake på sine layer, skjult og låst slik du forlot dem.

## Greit å vite

- Skjuling og låsing er ikke redigeringer: de angres ikke med {{key:Mod+Z}}, men de lagres med PDF-en.
- Kopiering og liming beholder en markerings layer.
- En flatet kopi tegner hver markering inn i siden, uansett layer. Se [Lagre en flatet kopi](topic:flatten).

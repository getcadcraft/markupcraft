---
title: Utgaver, revisjoner og endringslogg for tegninger
summary: Hold én utgavehistorikk sammen med arkitektens modell: les inn utgavene, før byggeplassinstrukser, verkstedtegninger og koblede modeller mot en utgave, og les endringsloggen for tegningene.
keywords: utgave, revisjon, revisjoner, endringslogg, endringslogg for tegninger, tegningsregister, byggeplassinstruks, verkstedtegning, koblet modell, anbud, bygging, utgavehistorikk, revisjonssky, sky, markeringssett
from: e4688f64
---

## Hva du gjør

Arbeid fra samme utgavehistorikk som resten av teamet. Se hvilke ark som gikk ut med hvilken revisjon, og før det som skjer på byggeplassen mot utgaven den hører til.

## Trinn

1. Åpne **Utgaver og revisjoner**.
2. Velg **Les inn en utgavehistorikk** og velg `.issues.json`-filen som er lagret fra BimCraft eller et annet program. Utgavene og postene legges til dine. Ingenting erstattes.
3. Velg **Legg til en post** for en byggeplassinstruks, en verkstedtegning, et markeringssett, en koblet modell eller et notat. Velg utgaven den gjelder, og statusen. En fil du velger, registreres med navn, størrelse og SHA-256; filen blir der den er.
4. **Endringslogg for tegninger** viser én rad for hvert ark og én kolonne for hver utgave. En revisjon i parentes ble utstedt på nytt uendret.
5. **Last ned endringsloggen (CSV)** lagrer utgavene, arktabellen og postene. **Lagre utgavehistorikken** skriver en fil som de andre appene leser.

## Greit å vite

- **Registrer de valgte markeringene** setter markeringene du valgte mot siste utgave. En sky registreres som en revisjonssky med den utgavens revisjon. Velg **Vis** ved siden av posten for å hoppe til den.
- **Registrer en utgave** utsteder de markerte arkene dine. **Endringer siden** viser deretter hvilke ark som ble markert etter den utgaven.
- Historikken lagres i den markerte PDF-filen. Den er ikke en del av Angre.
- Å lese samme fil to ganger legger ingenting til to ganger. Når to kopier har samme post, beholdes den nyeste.

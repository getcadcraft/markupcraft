---
title: Udgaver, revisioner og tegningens ændringslog
summary: Hold én udgavehistorik sammen med arkitektens model: læs udgaver ind, registrér byggepladsinstrukser, værkstedstegninger og linkede modeller mod en udgave, og læs tegningens ændringslog.
keywords: udgave, revision, revisioner, ændringslog, tegningens ændringslog, tegningsregister, byggepladsinstruks, værkstedstegning, linket model, udbud, byggeri, udgavehistorik, revisionssky, sky, markeringssæt
from: e4688f64
---

## Hvad du gør

Arbejd ud fra den samme udgavehistorik som resten af teamet. Se, hvilke ark der er udsendt ved hvilken revision, og hold det, der sker på byggepladsen, op mod den udgave, det hører til.

## Trin

1. Åbn **Udgaver og revisioner**.
2. Vælg **Læs en udgavehistorik** og vælg `.issues.json`-filen, der er gemt fra BimCraft eller et andet program. Dens udgaver og poster tilføjes dine. Intet erstattes.
3. Vælg **Tilføj en post** for en byggepladsinstruks, en værkstedstegning, et markeringssæt, en linket model eller en note. Vælg den udgave, den hører til, og dens status. En fil, du vælger, registreres efter navn, størrelse og SHA-256; filen bliver, hvor den er.
4. **Tegningens ændringslog** viser én række for hvert ark og én kolonne for hver udgave. En revision i parentes blev udsendt igen uændret.
5. **Hent ændringsloggen (CSV)** gemmer udgaverne, arktabellen og posterne. **Gem udgavehistorikken** skriver en fil, som de andre apps læser.

## Godt at vide

- **Registrér de valgte markeringer** lægger de markeringer, du valgte, mod den seneste udgave. En sky registreres som en revisionssky ved den udgaves revision. Vælg **Vis** ved siden af posten for at hoppe til den.
- **Registrér en udgave** udsender dine markerede ark. **Ændringer siden** viser så, hvilke ark der blev markeret efter den udgave.
- Historikken gemmes inde i den markerede PDF. Den er ikke en del af Fortryd.
- At læse den samme fil to gange tilføjer intet to gange. Når to kopier har den samme post, beholdes den nyeste.

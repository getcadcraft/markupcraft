---
title: Lista vad som ändrats mellan revisioner
summary: Jämför två ritningssatser och få en enkel lista, blad för blad, över var ritningen och orden ändrats, redo att läsa, kopiera eller ge till din assistent.
keywords: vad ändrats, ändringar, revisionslista, jämförelselista, enkel lista, berätta, assistent, delta, revisionssammanfattning
from: bab93d2e
---

Jämförelseverktygen visar ändringarna på bladet. Det här verktyget skriver ner dem.

1. Öppna båda revisionerna (se [Öppna en ritningssats](topic:open-a-plan-set)).
2. Öppna fliken {{ui:Jämför}} och sedan {{ui:Jämför en hel sats}}.
3. Välj den tidigare och den senare filen och välj {{ui:Lista ändringarna}}.

Listan börjar med en räkning ("2 av 14 matchade blad ändrades; 1 nytt; 1 borttaget") och går sedan igenom varje ändrat blad, med störst ändring först: var på bladet (uppe till vänster, mitten…), hur stor den är, om linjer lagts till, tagits bort eller både och, hur många markeringar som finns där och vilka ord som dök upp eller försvann. På ett kalibrerat blad anges storleken i verkliga enheter och även i tum på papperet.

Listan säger vad som finns på sidan, men inte vad det betyder. En ritad linje som flyttats kan vara en vägg eller en hänvisning. Din anslutna assistent kan läsa listan med verktyget `revisions_changes` och formulera den i ord, och resten får du titta på i bladet. {{ui:Kopiera listan}} lägger den på urklipp och {{ui:CSV}} skriver en rad per ändring.

Blad paras ihop efter bladnummer, som i [Ersätt blad i en reviderad sats](topic:slip-sheet-a-revised-set). Ändringar som är mindre än några punkter ignoreras, och text som är en del av en bild (en skanning) har inga ord att jämföra.

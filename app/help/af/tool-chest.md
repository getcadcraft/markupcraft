---
title: Die gereedskapskis
summary: Stoor ’n gestylde opmerking as herbruikbare gereedskap, teken daarmee, en deel jou kis met die kantoor as ’n lêer.
keywords: gereedskapskis, gereedskap, gereedskapstel, pasgemaakte gereedskap, gestoorde opmerkings, gunstelinge, kantoorstandaard, invoer, uitvoer, deel, json
from: 7dfa36e0
---

Die oortjie {{ui:Tools}} hou jou **gereedskapskis**: opmerkings wat met hul voorkoms gestoor is, gereed om weer te teken. ’n Gereedskap hou die opmerking se soort, kleur, lynwydte, vulling, ondeursigtigheid, teksgrootte en onderwerp, plus ’n stempel se woording, ’n telling se groepnaam, of die beginteks van ’n tekskassie of uitroep.

## Die gereedskap waarmee jy begin

’n Nuwe kis het ses: "Hersieningswolk" (rooi), "Vraagwolk" (blou), "Geel merkpen", "RFI-uitroep" (blou, begin met "RFI: "), "Veldverifieer" (’n oranje uitroep wat "Veld verifieer." sê) en "Goedgekeur soos aangeteken" (’n stempel).

## Teken met ’n gereedskap

1. Open die oortjie {{ui:Tools}}.
2. Klik op ’n gereedskap. Dit lyk ingedruk, en die ooreenstemmende werkbalkgereedskap skakel aan.
3. Teken soos gewoonlik. {{ui:Properties}} sê 'Tekening met "<tool>" uit die gereedskapskis.'

Terwyl ’n kisgereedskap aan is, geld veranderinge wat jy in {{ui:Properties}} maak voordat jy teken, vir die oomblik vir daardie gereedskap, sonder om die gestoorde gereedskap of jou gewone gereedskapinstellings te verander. Om ’n werkbalkknoppie te kies, of die sneltoets van ’n gereedskap te druk, keer terug na die gewone gereedskap.

## Stoor jou eie

1. Teken ’n opmerking en styl dit soos jy wil: kleur, lyn, vulling, onderwerp, stempelwoording.
2. Kies dit.
3. Kies {{ui:Save selected as a tool}} op die oortjie {{ui:Tools}}, of {{ui:Save as a tool}} in {{ui:Properties}}.
4. Tik ’n {{ui:Tool name}} en kies {{ui:Save tool}}.

Resultaat: die gereedskap word aan die einde van die kis bygevoeg, en die oortjie {{ui:Tools}} maak oop om dit te wys.

## Stempels uit ’n seleksie gemaak

Kies verskeie opmerkings (of bladsy-inhoud met die gereedskap {{ui:Content}}) en kies {{ui:Save selection as a stamp…}} in {{ui:More}} of in die regsklikkieslys. Die kis kry een stempel wat hulle almal hou ("Stempel: 3 opmerkings saam"). Klik daarop, en klik dan op enige blad: die opmerkings beland saam, gesentreer waar jy klik, as nuwe opmerkings met jou naam; bladsy-inhoud word daar in die bladsy geteken. Hierdie stempels word gestoor en saam met die kis gedeel soos enige gereedskap.

## Verwyder ’n gereedskap

Kies die × aan die einde van die gereedskap se ry, en dan {{ui:Remove}}. Opmerkings wat reeds daarmee geteken is, bly soos hulle is.

## Waar die kis bewaar word

Die kis word **in hierdie blaaier, op hierdie rekenaar** gestoor. ’n Ander blaaier of rekenaar het sy eie kis (wat met die ses standaarde begin), ’n privaatvenster vergeet dit wanneer dit sluit, en as jy hierdie werf se data in die blaaier se instellings uitvee, word dit uitgevee.

As die blaaier dit nie wil stoor nie (berging afgeskakel of vol), sê die statusbalk: "Die gereedskapskis kon nie in hierdie blaaier bewaar word nie (berging is af of vol). Voer dit uit om dit te behou."

:::safari
Safari kan ’n webwerf se gestoorde data uitvee as jy die werf ’n tyd lank nie gebruik het nie. Voer jou kis van tyd tot tyd uit sodat jy dit weer kan invoer.
:::

**Voer jou kis uit as ’n rugsteun**, veral nadat jy gereedskap gebou het waarop jy staatmaak.

## Deel ’n kis met jou kantoor

1. Stel die gereedskap een keer op.
2. Kies {{ui:Export}}. Jy kry "MarkupCraft tool chest.json".
3. Plaas daardie lêer waar die kantoor sy standaarde hou, of stuur dit rond.
4. Elkeen anders kies {{ui:Import}} op hul oortjie {{ui:Tools}} en kies die lêer.

Resultaat: "12 gereedskap ingevoer uit "MarkupCraft tool chest.json"." Gereedskap wat uit dieselfde kis gekom het, vervang hul ouer afskrifte, so invoer van ’n opgedateerde kantoorkis verfris daardie gereedskap in plaas daarvan om dit te verdubbel; nuwe gereedskap word bygevoeg. ’n Kis hou tot 500 gereedskap.

MarkupCraft kontroleer elke waarde in ’n ingevoerde lêer en slaan oor wat dit nie kan gebruik nie ("2 oorgeslaan (nie bruikbaar nie)"). Lêers wat nie ’n kis is nie, word geweier: "Hierdie lêer is nie ’n MarkupCraft-gereedskapskis nie." of "Hierdie lêer is nie ’n gereedskapskis nie (dit is nie JSON nie)."

Gereedskapskis-lêers van ander opmerkingsprogramme kan nie ingevoer word nie.

---
title: Voeg twee mense se wysigings van een PDF saam
summary: Laat git, Fossil of Mercurial twee gemerkte kopieë van dieselfde PDF saamvoeg, opmerking vir opmerking, notas ingesluit.
keywords: saamvoeg, git, fossil, mercurial, weergawebeheer, konflik, drieweg, cadcraft merge, gitattributes, opmerkings, notas, span, twee kopieë
from: a450a9ef
---

Twee mense merk dieselfde PDF in twee kopieë. As hulle verskillende opmerkings geraak het, kan die kopieë deur 'n program saamgevoeg word in plaas van met die hand.

## Wat dit laat werk

Elke opmerking wat MarkupCraft stoor, dra sy eie naam (sy id) binne die PDF, en die naam verander nooit nie. Die samevoeging soek opmerkings op volgens daardie naam, nie volgens hul plek in die lêer nie, omdat elke program plekke hernommer wanneer dit stoor. Notas en versegelde private notas word op dieselfde manier gepaar.

Die blaaie word nooit aangeraak nie: albei kopieë moet dieselfde aantal bladsye hê. As hulle verskil, hou die samevoeging jou kopie soos dit is en sê dit, omdat bladsye byvoeg of verwyder 'n werk vir 'n mens is.

## Stel dit op

Git benodig twee lyne, een keer per bewaarplek:

```
# .gitattributes
*.pdf merge=cadcraft

# een keer, op elke rekenaar
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sonder git, voer `cadcraft merge <base> <ours> <theirs> -o <result>` uit. Fossil en Mercurial neem dieselfde drie lêers in hul eie samevoeg-gereedskapinstelling. Die taaklêer wat saam met 'n tekening ry (`<name>.markups.json`, sien [Opmerkings wat optree](topic:markups-that-act)) voeg op dieselfde manier saam, as gewone teks.

## Die reëls

- 'n Opmerking wat net aan een kant verander is, word geneem. Dieselfde verandering aan albei kante word een keer geneem.
- Dieselfde opmerking wat op twee maniere verander is, is 'n **konflik**: jou kant bly en die verslag lys albei. Maak die resultaat oop en regstel daardie opmerking met die hand.
- 'n Opmerking wat aan enige kant bygevoeg is, word behou. Een wat aan een kant verwyder is en aan die ander onaangeraak is, word verwyder. Verwyder aan een kant en verander aan die ander: verwyder, en gerapporteer.
- Lae, kolomme, rekords en notas volg dieselfde reëls.
- Versegelde private notas word nooit oopgemaak nie: die blokke van albei kante word behou soos hulle is.

Die saamgevoegde lêer is 'n volledige herskrywing van jou kopie, soos MarkupCraft se eie Stoor. Niks word opgelaai nie; alles loop op jou rekenaar.

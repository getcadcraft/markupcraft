---
title: Sameina breytingar tveggja manna á einu PDF
summary: Láttu git, Fossil eða Mercurial sameina tvö merkt eintök af sama PDF, merkingu fyrir merkingu, líka athugasemdir.
keywords: sameina, git, fossil, mercurial, útgáfustýring, árekstur, þrískipt, cadcraft sameining, gitattributes, merkingar, athugasemdir, teymi, tvö eintök
from: a450a9ef
---

Tveir aðilar merkja sama PDF í tveimur eintökum. Ef þeir snertu mismunandi merkingar er hægt að sameina eintökin með forriti í stað þess að gera það handvirkt.

## Hvað gerir þetta mögulegt

Sérhver merking sem MarkupCraft vistar ber sitt eigið heiti (auðkenni) inni í PDF-skránni, og heitið breytist aldrei. Sameiningin finnur merkingar eftir þessu heiti, ekki eftir stöðu þeirra í skránni, því sérhvert forrit endurnúmerar stöðurnar þegar það vistar. Athugasemdir og lokaðar einkaathugasemdir eru paraðar á sama hátt.

Blöðin eru aldrei snert: bæði eintök verða að hafa sama fjölda síðna. Ef þau eru ólík heldur sameiningin þínu eintaki eins og það er og segir frá því, því að bæta við eða fjarlægja síður er verk fyrir manneskju.

## Uppsetning

Git þarf tvær línur einu sinni fyrir hverja geymslu:

```
# .gitattributes
*.pdf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Án git, keyrðu `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil og Mercurial taka sömu þrjár skrárnar í sinni eigin stillingu fyrir sameiningartól. Verkefnaskráin sem fylgir teikningu (`<name>.markups.json`, sjá [Merkingar sem vinna](topic:markups-that-act)) sameinast á sama hátt, sem venjulegur texti.

## Reglurnar

- Merking sem var breytt aðeins öðrum megin er tekin. Sama breyting beggja megin er tekin einu sinni.
- Merking sem var breytt á tvo mismunandi vegu er **árekstur**: þín hlið stendur og skýrslan telur báðar upp. Opnaðu niðurstöðuna og lagfærðu þá merkingu handvirkt.
- Merking sem bætt er við hvoru megin er geymd. Sú sem var fjarlægð öðrum megin og ekki snert hinum megin er fjarlægð. Fjarlægð öðrum megin og breytt hinum megin: fjarlægð og tilkynnt.
- Lög, dálkar, skrár og athugasemdir fylgja sömu reglum.
- Lokaðar einkaathugasemdir eru aldrei opnaðar: blokkirnar frá báðum hliðum eru geymdar eins og þær eru.

Sameinaða skráin er full endurskrifun á þínu eintaki, eins og {{ui:Vista}} hjá MarkupCraft sjálfu. Ekkert er sent upp; allt keyrir á tölvunni þinni.

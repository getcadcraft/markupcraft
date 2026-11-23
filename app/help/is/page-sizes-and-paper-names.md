---
title: Síðustærðir og pappírsheiti
summary: Sjáðu stærð hverrar PDF-síðu í millimetrum og tommum og pappírsheiti hennar (A-, B- og C-röð, ANSI, ARCH), og flokkaðu blandað sett eftir stærð til að finna einstakar síður.
keywords: stærð síðu, pappírsstærð, pappírsheiti, a0, a1, a2, a3, a4, b-röð, c-röð, ansi, arch, arkitektúr, mm, tommur, sérsniðin stærð, eftir stærð, einstök stærð, blandað sett, athuga pdf, viðskiptavinur, útgáfa, mediabox, cropbox, snúningur
from: 08e1354f
---

Áður en sett fer til viðskiptavinar skaltu athuga að hvert blað sé af réttri stærð. {{ui:MarkupCraft}} les stærð hverrar síðu úr PDF-skránni sjálfri og nefnir pappírinn.

## Það sem þú gerir

Skoðaðu stærð eins blaðs og flokkaðu síðan allt settið eftir stærð.

## Skref

1. Opnaðu PDF-skrárnar ({{ui:Opna}}), ýttu síðan á {{key:Esc}} þar til ekkert er valið og {{ui:Velja}} er kveikt.
2. Skoðaðu {{ui:Eiginleikar}}. {{ui:Pappír}} sýnir heitið og stefnuna, til dæmis „A4, stálsett“. {{ui:Stærð}} gefur mm og tommur.
3. Hver röð í listanum {{ui:Blöð}} hefur stærðarlínu undir heiti blaðsins.
4. Veldu {{ui:Eftir stærð}} í haus {{ui:Blöð}}. Listinn safnar blöðunum undir einni fyrirsögn fyrir hverja stærð, stærsti hópurinn fyrst. Stærð með aðeins örfáum blöðum er merkt sem sú sem stingur í stúf.
5. Veldu {{ui:Eftir stærð}} aftur til að fara aftur í upprunalega röð settsins.

Niðurstaða: síðu sem er af annarri stærð en hinar er auðvelt að sjá áður en þú sendir settið.

## Hvernig heitið er valið

- Stærðin kemur úr kassa síðunnar í PDF-skránni með snúningi beitt, þannig að A3 í láréttri stefnu er enn A3.
- Heitin eru A- og B-röð (ISO 216), C-röð (ISO 269), ANSI A til E og ARCH A til E.
- Síða innan 2 mm frá skilgreindri stærð fær það heiti. Önnur síða segir {{ui:sérsniðin}} og {{ui:Næsta skilgreinda stærð}} segir hvaða stærð er næst og hversu langt frá henni hún er.
- Tommurnar koma úr raunverulegri stærð síðunnar, þannig að A4-síða er 8.26 x 11.69 in.

## Í skránum sem þú vistar

Samantektarvinnubókin ({{ui:Listi yfir merkingar}}, síðan töflureikninn) er með dálkinn {{ui:Pappírsstærð}} á blaðinu {{ui:Eftir blöðum}} og vinnublaðið {{ui:Síðustærðir}}. PDF-skýrslan er með línuna „Síðustærðir“ með fjölda hverrar stærðar.

:::note
Tommugildi ANSI og ARCH voru slegin inn úr birtum töflum og hafa ekki verið borin saman við prentaða staðla. Meðhöndlaðu „sérsniðna“ síðu sem er nálægt einni þeirra sem atriði fyrir þína eigin athugun.
:::

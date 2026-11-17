---
title: Sendu merkingar til teiknara sem rauðlínu
summary: Skrifaðu opnu merkingarnar sem rauðlínuskrá fyrir þann sem teiknar breytingarnar, og hlaðaðu síðan inn svörum þeirra svo hver merking sýni Samþykkt eða Hafnað.
keywords: rauðlína, endurskoðun, teiknari, samþykkja, hafna, svör, endurskoðunarský, beita merkingum
from: cb099d04
---

Yfirferð er aðeins helmingur verksins; teikningin þarf samt að breytast. Rauðlínuskráin ber hverja merkingu til teiknarans, og svör teiknarans skila niðurstöðunni til baka.

## Senda

1. Opnaðu flipann {{ui:Verkefni}} og opnaðu {{ui:Yfirferð í endurskoðun}}.
2. Skrifaðu endurskoðunina sem merkingarnar miðast við (til dæmis B).
3. Veldu {{ui:Flytja út rauðlínuskrá}}.

Þú færð `.redline.json` skrá með einu atriði fyrir hverja opna merkingu: blað hennar, staðsetningu hennar (sem hlutföll af blaðinu, svo endurprentun í annarri stærð passi enn, og í pt), orðin hennar, höfund og þráð, og verkefni hennar ef hún hefur eitt. Lesvarðar athugasemdir frá öðrum forritum, myndir og skýringar eru skildar eftir.

## Svör

Teiknarinn svarar hverju atriði með Samþykkt, Hafnað eða Lokið, með athugasemd, í skrá sem heitir `.redline-answers.json`. Veldu {{ui:Hlaða inn svarskrá…}} og veldu hana: hver merking fær þá stöðu og athugasemd teiknarans í þræðinum sínum, og verkefni sem merkingin var samþykkt eða lokið fyrir er klárað. Eitt skref í afturköllun tekur öll svörin til baka.

Skráarsniðið er í `docs/REDLINE-FORMAT.md`. Hliðin CadCraft (lestur pakkans, samþykki eða höfnun hvers atriðis, endurskoðunarský og atburðaskráin) er smíðuð sérstaklega.

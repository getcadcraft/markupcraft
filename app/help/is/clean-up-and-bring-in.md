---
title: Hreinsa pennastrokur, og flytja inn yfirferðarathugasemdir og framvindu á byggingarsvæði
summary: Breyttu frjálsum pennastrokum í línur, hringi, boga og ferhyrninga; fluttu yfirferðarathugasemdir leyfispakka og mælda framvindu svæðis inn sem minnispunkta.
keywords: penni, frjáls hönd, hreinsa, rétta, hringur, lína, ferhyrningur, bogi, leyfi, yfirferðarathugasemdir, framvinda, dróni, skönnun, mæling, minnispunktar, csv
from: 547d8e42
---

## Hreinsa pennastrokur

Teiknaðu með {{ui:Penni}}, opnaðu síðan valmyndina {{ui:Meira}} í hópnum Breyta og veldu {{ui:Hreinsa til pennastrokur}}. Hver valin pennastroka verður það sem hún átti að vera: bein stroka verður lína (gerð nákvæmlega lárétt eða lóðrétt þegar hún var nærri því), hringlaga stroka sporbaugur, hluti úr hring verður bogi, lokuð stroka með fjórum hornum verður ferhyrningur, og annað verður fjöllína eða marghyrningur. Lausir endar stroka sem teiknaðir voru saman eru dregnir hver að öðrum. Án valinnar pennastroku er hver pennastroka á opna blaðinu hreinsuð. Þetta er eitt skref í afturköllun: Ctrl+Z skilar frjálsu handskriftinni. Lögunin er reiknuð á tölvunni þinni eftir föstum reglum; ekkert er sent neitt.

## Flytja inn yfirferðarathugasemdir

Leyfispakki BimCraft geymir `01-review-comments.csv`: athugasemdirnar sem leyfisyfirferðarmaður er líklegur til að gera, hver með reglunni, greininni, því sem þarf, því sem fannst og því hvað skal gera. Í flipanum {{ui:Verkefni}} opnaðu {{ui:Athugasemdir við leyfisyfirferð}} og veldu {{ui:Flytja inn athugasemdir (CSV)}}. Hver athugasemd verður opinn minnispunktur í dálki vinstra megin á opna blaðinu; dragðu hvern að staðnum sem hann varðar. Þær eru reiknaðar út frá þeim athugunum sem til eru, ekki frá leyfisprófara.

## Flytja inn HAZOP-hnútareiti

P&ID-viðbót CadCraft teiknar hnúta HAZOP-greiningar og getur vistað þá sem {{ui:HAZOP-hnútareitir}} (JSON-skrá). Opnaðu prentaða P&ID-blaðið hér, farðu í flipann {{ui:Verkefni}}, opnaðu {{ui:HAZOP-hnútareitir}} og veldu {{ui:Flytja inn hnútareiti (JSON)}}. Hver hnútur verður opinn ferhyrningur á blaðinu með númeri sínu, heiti, búnaði og línum í textanum, og teymið skrifar niðurstöður sínar sem svör við hann. Blaðið er tekið eins og það var prentað í fullri stærð frá neðra vinstra horni teikningarinnar; ef það var prentað í öðrum mælikvarða skaltu fyrst skrifa þá tölu í {{ui:Prentað í}} (0.5 fyrir 1:2). Hnútur sem er utan síðunnar er ekki teiknaður og spjaldið segir hversu margir. Merkingarnar eru hjálpartæki fyrir greininguna: þær sýna hvar hnútarnir eru, en þær meta ekki greininguna.

## Flytja inn framvindu á byggingarsvæði

CivilCraft heldur utan um línu fyrir hvert drónaflug eða skönnun á svæðinu. Í flipanum {{ui:Verkefni}} opnaðu {{ui:Framvinda á byggingarsvæði}} og veldu {{ui:Flytja inn framvindu (JSON)}}. Hver mæling verður minnispunktur á opna blaðinu sem segir hversu mikið er lokið, hvað er eftir að skera eða fylla, hvað var grafið eða fyllt umfram og hvað stendur út fyrir teikninguna. Mæling þar sem eitthvað stendur út fyrir teikninguna helst Opin; hrein mæling er Samþykkt.

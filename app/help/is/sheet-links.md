---
title: Tenglar á blöð
summary: Láttu merkingu stökkva á annað blað í safninu, og tengdu hverja blaðtilvísun eins og 3/A-501 við blaðið og sýnina í einni umferð með fjöldatenglum.
keywords: tengill, tengja, tenglar, stökk, tilvísun í blað, tilvísun í smáatriði, tilvísun í snið, 3/A-501, fara í blað, til baka, sjálfvirkur tengill, fjöldatenglar, titilreitur, blaðnúmer, heiti blaðs, sýn, smáatriði, endurnefna, endurnúmera, viðauki, pdf-tengill
from: 86a17c37
---

Blaðatengill fer frá merkingu yfir á annað blað í safninu: frá smáatriðabólu yfir í smáatriðið, frá minnispunkti yfir í blaðið sem hann vísar til.

## Tengdu merkingu við blað

1. Veldu merkinguna.
2. Í {{ui:Eiginleikar}} velurðu blaðið undir {{ui:Tengja við blað}}.

Lítil ör birtist efst hægra megin á merkingunni. Til að fylgja henni skaltu halda {{key:Mod}} inni og smella á merkinguna, eða velja hana og velja {{ui:Fara í …}} í {{ui:Eiginleikar}}. {{key:Alt+Left}} fer til baka á blaðið sem þú komst frá.

Tengill nefnir blaðið eftir númeri sínu, svo hann virkar enn eftir að þú opnar safnið aftur eða blaðsetur nýja útgáfu: hann opnar nýjasta blaðið með því númeri. Ef það blað er ekki opið segir stöðustikan það.

## Tengdu allar blaðtilvísanir í einu

Veldu {{ui:Síður}} › {{ui:Fjöldatenglar…}}, eða {{ui:Tengja tilvísanir í blöð…}} undir {{ui:Finna texta}} efst í spjaldinu {{ui:Blöð}}.

1. **Athugaðu blaðnúmerin.** MarkupCraft listar hvert opið blað með númerinu og heitinu sem það las af titilreit blaðsins (eða síðumerkinu), og hvaðan það kom. Lagfærðu þau sem eru röng, og skrifaðu númer þar sem það fann ekkert (titilreitur sem var prentaður sem línur hefur engan texta til að lesa). Veldu síðan {{ui:Finna tilvísanir}}. Lagfæringarnar þínar eru eitt skref í afturköllun, og þær verða síðumerkin í vistuðu PDF-skránni.
2. **Yfirfarðu listann.** MarkupCraft les texta hvers blaðs fyrir tilvísanir eins og „3/A-501“, „5 / A501“, „DETAIL 2 ON A-501“, bólu með „3“ yfir „A-501“, eða einfalt „A-501“ í minnispunkti, og les sýnatitla hvers blaðs (smáatriðisnúmer með blaðnúmeri undir, eða stórt númer með titli við hliðina). Listinn hefur þrjá hluta:
   - {{ui:Verður tengt}}: hver tilvísun, blaðið sem hún vísar á og sýnin á því blaði. Afhakaðu þær sem þú vilt ekki. Ef sýnin fannst ekki (tilvísun í sýn 7 á blaði með sýnum 1 til 6) velurðu sýnina úr listanum við hliðina, eða lætur {{ui:Allt blaðið}} vera.
   - {{ui:Ekki tengt}}: blaðnúmer sem ekkert opið blað hefur, ásamt fjölda tilvísana sem nefna hvert. Veldu blaðið sem hvert þeirra merkir (til dæmis blað sem var endurnúmerað), og hver tilvísun á það númer tengist því. Eða láttu það vera ótengt.
   - Hve margar tilvísanir eru þegar tengdar og vísa enn á rétta staðinn. Þær halda sér óbreyttar.
3. Veldu {{ui:Búa til tenglana}}.

Hver tilvísun fær þunnan blá reit sem er blaðtengill. {{key:Mod}}+smellur á hann opnar blaðið aðdregið að sýninni. Eitt {{key:Mod+Z}} fjarlægir þá alla.

Kóðar sem aðeins líta út eins og blaðnúmer, eins og R-19 eða W12X26, eru sleppt: tilvísun verður að líta út eins og blaðnúmer safnsins. Blaðnúmer blaðs í eigin titilreit og sýnatitlum er aldrei tilvísun. Skönnuð blöð hafa engan texta til að lesa: notaðu {{ui:Lesa texta (OCR)…}} fyrst, eða tengdu tilvísanir þeirra eina í einu.

## Keyrðu aftur þegar safnið breytist

Hægt er að keyra fjöldatengla eins oft og þú vilt:

- **Blaði var bætt við**, til dæmis viðauka með A-601: opnaðu skrána þess og keyrðu fjöldatengla aftur. Tilvísanir í A-601 sem tengdust ekki áður tengjast nú.
- **Blaði var endurnúmerað**: lagfærðu númerið í skrefi 1. Tenglar sem fjöldatenglar bjuggu til og finna ekki lengur blaðið sitt eru taldir undir {{ui:Ekki tengt}}; veldu blaðið einu sinni og þeir fylgja öllum. Tenglar sem færðust á aðra sýn eru uppfærðir.
- Tenglar sem þú bjóst til handvirkt í {{ui:Eiginleikar}} breytast aldrei.

## Í vistuðu PDF-skránni

Tengill á blað í sömu PDF-skrá er líka skrifaður sem PDF-tengill, svo aðrir skoðarar stökkva þangað líka með smelli. Tengill með sýn opnar þá sýn í hinum skoðaranum (PDF „fit rectangle“-stökkið); tengill án sýnar opnar allt blaðið. Tenglar á blað í annarri skrá safnsins virka aðeins í MarkupCraft.

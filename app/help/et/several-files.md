---
title: Mitme faili töötlemine korraga
summary: Ava palju PDF-e ühe komplektina, leia lehti failide vahel, kopeeri märgistusi nende vahel ja salvesta iga faili koopia.
keywords: mitu faili, mitu pdf-i, plaanikomplekt, komplekt, hulk, palju faile, ühenda, erialad, arhitektuur konstruktsioon mehaanika, salvesta kõik, sulge
from: f59354ae
---

Plaanikomplekt tuleb sageli ühe PDF-ina iga eriala kohta või ühe PDF-ina iga lehe kohta. MarkupCraft käsitleb kõike, mida avad, ühe **komplektina**.

## Ava need koos

Vali kõik PDF-id failivalijas korraga või lohista need kõik lehealale. Et lisada hiljem veel, ava need samamoodi; need lisatakse lehtede loendi {{ui:Lehed}} lõppu avamise järjekorras.

Tulemus: „Avati 6 faili (84 lehte komplektis).“ Iga leht on leht. Lehed, millel on lehenumber, näitavad oma nime all „Leht A-101“; teised näitavad faili ja lehekülge.

Komplekti salvestatud faili ei ole: järgmisel korral ava samad PDF-id uuesti (need „(marked up)“ koopiad, kui oled salvestanud).

## Kogu komplekti peale

- **Lehe leidmine:** {{ui:Otsi lehti}} otsib kõigi failide lehenumbritest, lehtede nimedest ja failinimedest. {{key:PageUp}} ja {{key:PageDown}} käivad läbi kõigi failide kõik lehed järjekorras.
- **Märgistuste loend:** vahekaart {{ui:Märgistused}} loetleb märgistused kõigist failidest. Filtreeri {{ui:Leht}} järgi, et seda kitsendada. CSV-s on veerg Fail.
- **Punktiloend:** üks nummerdus kogu komplekti jaoks.
- **Võrdlus:** vana ja uus leht võivad tulla erinevatest failidest.
- **Kopeerimine ja kleepimine:** {{key:Mod+C}} ühel lehel ja {{key:Mod+V}} teisel, ükskõik millises failis. Koopia läheb lehel samasse kohta, veidi nihkega.

## Salvesta

Vali {{ui:Salvesta}}. Kui on avatud rohkem kui üks fail, küsib MarkupCraft:

- {{ui:See fail}}: märgistatud koopia selle faili kohta, millel leht sul on.
- {{ui:Kõik muudetud failid}}: koopia iga failist, millel on salvestamata muudatusi. Iga laaditakse eraldi alla nimega „<file name> (marked up).pdf“.
- {{ui:Loobu}}

:::chromium
Kui salvestad mitu faili esimest korda korraga, võivad Chrome ja Edge küsida, kas sellel saidil tohib alla laadida mitut faili. Vali {{ui:Luba}}; muidu jõuab kohale ainult esimene koopia.
:::

:::safari
Safari võib küsida igale failile eraldi. iPadil läheb iga koopia rakendusse Failid.
:::

Fail, mille märgistused on salvestatud, lakkab olemast muudetud; teised loevad endiselt.

CSV-, BCF- ja punktiloendi eksportfailide nimi tuleneb **esimesest** avatud failist.

## Sulge

{{ui:Sulge}} sulgeb kogu komplekti; ainult ühe faili sulgemise võimalust veel ei ole. Kui midagi on salvestamata, küsib see:

- {{ui:Loobu}}: ei juhtu midagi.
- {{ui:Sulge ilma salvestamata}}: salvestamata märgistused lähevad kaotsi.
- {{ui:Salvesta kõigepealt koopiad}}: salvestab iga muudetud faili ja sulgeb seejärel.

Sulgemine tühjendab ka tagasivõtmise ajaloo.

## Suured komplektid

- Iga lehe tekst loetakse avamisel, et leida lehenumbrid, seega 100-lehelise komplekti avamine võtab aega. Olekuriba loendab lehti, kui need töödeldakse.
- Lehtede loendi pildid joonistatakse, kui sellele kerid.
- Iga avatud PDF hoitakse brauseri vahekaardi mälus. Kui vahekaart aeglustub, sulge teised rasked vahekaardid või vaata üle üks eriala korraga.
- Sama faili avamine kaks korda annab sulle kaks koopiat selle lehtedest. Kui nii juhtub, vali {{ui:Sulge}} ja ava komplekt uuesti.

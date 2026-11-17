---
title: Kalibruoti lapą ir matuoti
summary: Nustatykite kiekvieno lapo mastelį pagal parengtą nustatymą arba žinomą matmenį, tada matuokite ilgius, plotus su perimetrais ir kiekius.
keywords: kalibruoti, mastelis, nustatyti mastelį, matuoti, ilgis, atstumas, matmuo, plotas, kvadratinės pėdos, perimetras, skaičiuoti, kiekis, kiekių skaičiavimas, liniuotė, aritmetika, skaičiavimas, pliusas, trupmena
from: 49a25c6d
---

Ilgiams ir plotams reikia žinoti lapo mastelį. MarkupCraft saugo mastelį **kiekvienam lapui atskirai**: kalibruokite kiekvieną lapą, kurį matuojate. Kiekiams mastelio nereikia.

Būsenos juostoje rodomas dabartinio lapo mastelis arba "Nekalibruota".

## Pasirinkite mastelį iš sąrašo

Naudokite tai, kai PDF yra pilno dydžio (lapas 24 × 36, kuris spausdinamas 24 × 36) ir brėžinyje nurodytas mastelis.

1. Spustelėkite mastelio mygtuką būsenos juostoje ("Nekalibruota"). Atsidaro langas "Lapo mastelis".
2. Po {{ui:Mastelis}} pasirinkite mastelį: architektūrinį (1/32" = 1'-0" iki 3" = 1'-0"), inžinerinį (1" = 10' iki 1" = 100') arba metrinį (1:1 iki 1:1000).
3. Pasirinkite {{ui:Nustatyti mastelį}}.

Rezultatas: būsenos juostoje rodomas mastelis, pavyzdžiui `1/4" = 1'-0"`. Architektūriniai masteliai ilgius rodo pėdomis ir coliais, inžineriniai – dešimtainėmis pėdomis, metriniai iki 1:50 – milimetrais, o nuo 1:100 – metrais.

:::warning
Nustatymas tinka tik tada, jei PDF nebuvo sumažintas. Pusės dydžio komplektas arba lapas, kuris buvo "pritaikytas puslapiui" jį kuriant, su nustatymu matuojamas neteisingai. Kalibruokite pagal žinomą matmenį ir bet kuriuo atveju patikrinkite bent vieną matmenį.
:::

## Kalibruoti pagal žinomą matmenį

Naudokite tai pusės dydžio komplektams, nuskenuotiems lapams, detalėms neįprastais masteliais arba nustatymui patikrinti.

1. Raskite ilgą, jums patikimą matmenį arba grafinę mastelio liniuotę.
2. Pasirinkite {{ui:Kalibruoti}} grupėje {{ui:Matuoti}} (arba pasirinkite {{ui:Nurodyti du taškus}} lange "Lapo mastelis").
3. Spustelėkite vieną matmens galą, tada kitą. (Arba nuvilkite nuo vieno galo iki kito.) Pirmiausia priartinkite tikslumui; {{key:Shift}} laiko liniją 45° žingsniais.
4. Lange nurodoma, kiek taškai nutolę popieriuje, ir klausiama „Kokiu tikru atstumu jie nutolę?“. Įveskite {{ui:Tikrasis atstumas}}, pavyzdžiui `24'-0"`, `12' 6 1/2"`, `7.2 m` arba `900 mm`.
5. Pasirinkite, kaip rodyti ilgius, skiltyje {{ui:Rodyti ilgius}}: {{ui:Pėdos ir coliai}}, {{ui:Dešimtainės pėdos}}, {{ui:Coliai}}, {{ui:Metrai}} arba {{ui:Milimetrai}}.
6. Pasirinkite {{ui:Nustatyti mastelį}}.

Rezultatas: būsenos juostoje rodoma „Nukalibruota: 24'-0" per 1.00 in“ (tikras ilgis ir ilgis popieriuje), o įrankis, kuriuo ketinote matuoti, vėl įsijungia. Visus ilgio įvedimo būdus rasite [Vienetai ir ilgiai](topic:units-and-scales).

Tikrasis atstumas gali būti ir paprastas skaičiavimas: `12'6"+3/4"`, `(24'-0")/3` arba `2*450mm`. Naudokite `+ - * /` ir skliaustus. Skaičius be vieneto laikomas vienetu, pasirinktu skiltyje {{ui:Rodyti ilgius}} (pėdomis, kai pasirinkta {{ui:Pėdos ir coliai}}). {{ui:Nustatyti mastelį}} naudoja rezultatą.

Jei MarkupCraft negali perskaityti to, ką įvedėte, lange tai nurodoma: „Tai nėra ilgis, kurį MarkupCraft supranta. Pabandykite 24'-0", 12' 6 1/2", 7.2 m arba 900 mm.“ Skaičiavimas, kurio ji negali atlikti, nurodo priežastį ir vietą, pavyzdžiui „Skliaustas neuždarytas (simbolis 5).“

## Matuoti ilgį

1. Pasirinkite {{ui:Ilgis}} ({{key:M}}).
2. Spustelėkite pradžią, tada pabaigą. Arba nuvilkite nuo pradžios iki pabaigos. {{key:Shift}} laiko 45° žingsniais.

Rezultatas: matmenų linija su žymėmis ir užrašytu ilgiu. Būsenos juostoje jis kartojamas („Ilgis: 12'-6 1/2" (1/4" = 1'-0")."), o {{ui:Ypatybės}} rodo jį po {{ui:Ilgis}}. Pėdos ir coliai apvalinami iki artimiausios 1/16".

Jei lapas dar neturi mastelio, pasirinkus {{ui:Ilgis}} persijungiama į {{ui:Kalibruoti}}, o būsenos juostoje paaiškinama: „Pirmiausia nukalibruokite šį lapą: nurodykite du taškus, žinomu atstumu vienas nuo kito, arba pasirinkite jo mastelį. Tada matuokite.“ Nustačius mastelį, {{ui:Ilgis}} vėl įsijungia.

## Braižymas pagal mastelį

Kalibruotame lape galite įvesti tikrus ilgius braižydami {{ui:Linija}}, {{ui:Rodyklė}}, {{ui:Ilgis}}, {{ui:Polilinija}}, {{ui:Daugiakampis}}, {{ui:Laisvas debesis}}, {{ui:Plotas}} arba erdvę:

1. Spustelėkite pirmąjį tašką.
2. Nukreipkite kryptį, kuria eina kita atkarpa, ir įveskite jos ilgį, pavyzdžiui `16` (lapo vienetais), `12'6"` arba `3.5 m`. Šalia žymeklio atsidaro langelis, kol rašote.
3. Paspauskite {{key:Enter}}. Taškas atsiduria tiek toli žymeklio kryptimi.

Kad nustatytumėte kryptį tiksliai, pridėkite `<` ir kampą laipsniais: `8 < 90` nueina 8 pėdas tiesiai aukštyn, `4<0` – į dešinę, `10 < 225` – žemyn ir į kairę, kaip matoma lape (įskaitant pasuktus puslapius). Kitiems kampams toliau įveskite ilgius ir baikite figūrą įprastai. {{key:Esc}} uždaro langelį, nesudarydamas taško.

## Matuoti kampą

1. Pasirinkite {{ui:Kampas}} ({{key:X}}).
2. Spustelėkite vienos kraštinės galą, tada kampo viršūnę, tada kitos kraštinės galą.

Rezultatas: dvi kraštinės, mažas lankas viršūnėje ir kampas laipsniais, iki dešimtosios dalies (nuo 0° iki 180°). Kampui mastelio nereikia. {{ui:Ypatybės}} rodo jį po {{ui:Kampas}}, o sąraše, CSV ir BCF jis taip pat įrašomas.

{{ui:Lankas}} ({{key:O}}) kalibruotame lape taip pat rodo jo ilgį išilgai kreivės lange {{ui:Ypatybės}}.

## Matuoti plotą ir jo perimetrą

1. Pasirinkite {{ui:Plotas}} ({{key:Q}}).
2. Spustelėkite kiekvieną patalpos ar srities kampą.
3. Baikite dukart spustelėdami, paspausdami {{key:Enter}} arba dešiniuoju pelės klavišu (liečiant ekraną – dvigubu bakstelėjimu). {{key:Backspace}} pašalina paskutinį kampą.

Rezultatas: nuspalvintas kontūras su plotu, o viduryje – „P“ su perimetru, pavyzdžiui "128.00 sq ft" ir "P 48'-0"". Pėdų masteliai duoda kvadratines pėdas, coliai – kvadratinius colius, metrai – kvadratinius metrus, milimetrai – kvadratinius milimetrus. Plotui reikia bent trijų kampų.

### Išpjovos

Norėdami neįtraukti kolonos, šachtos ar kiemo, pasirinkite plotą ir {{ui:Pridėti išpjovą}} lange {{ui:Ypatybės}}. Spustelėkite išpjovos kampus srities viduje ir baikite kaip plotą. Išpjova lieka atvira (nenuspalvinta), jos plotas atimamas, o jos kraštinės pridedamos prie perimetro: 16' × 8' patalpa su 4' × 4' išpjova rodo "112.00 sq ft" ir "P 64'-0"". Pridėkite kiek reikia; jos negali persidengti tarpusavyje ar kirsti srities kontūro. {{ui:Pašalinti iškirpas}} pašalina visas, o {{key:Mod+Z}} atšaukia vieną.

## Skaičiuoti daiktus

1. Pasirinkite {{ui:Skaičiuoti}} ({{key:U}}).
2. Lange {{ui:Ypatybės}} įveskite {{ui:Grupės pavadinimas}}, pavyzdžiui „Grindų latakai“. (Jis išlieka kitam kartui.)
3. Spustelėkite kiekvieną daiktą lape.

Rezultatas: kiekvienas spustelėjimas prideda numeruotą tašką, pirmasis taškas turi žymą, pavyzdžiui „Grindų latakai: 7“, o būsenos juostoje rodoma bendra suma.

- **Pradėti kitą grupę:** vieną kartą paspauskite {{key:Esc}} (tai panaikina pasirinkimą), pakeiskite {{ui:Grupės pavadinimas}} ir spustelėkite iš naujo.
- **Pridėti prie esamos grupės:** pirmiausia pasirinkite grupę, tada pasirinkite {{ui:Skaičiuoti}} ir spustelėkite.
- **Pašalinti žymą:** su pasirinkta grupe laikykite {{key:Shift}} ir spustelėkite tašką. Pašalinus paskutinį tašką, pašalinama ir grupė. Jutiklinio ekrano be klaviatūros atveju naudokite {{key:Mod+Z}} arba {{ui:Anuliuoti}}.
- **Pervadinti grupę:** pasirinkite ją ir pakeiskite {{ui:Grupės pavadinimas}} lange {{ui:Ypatybės}}.

Skaičiavimo grupė priklauso vienam lapui. Keliuose lapuose esantys skaičiai žymėjimų sąraše rodomi kaip atskiros grupės.

## Keisti arba pašalinti mastelį

Spustelėkite mastelio mygtuką būsenos juostoje. Lange rodomas dabartinis mastelis; pasirinkite kitą, {{ui:Nurodyti du taškus}} arba {{ui:Pašalinti mastelį}}.

Jau nubraižyti ilgiai ir plotai iš karto **matuojami iš naujo** pagal naująjį mastelį. {{ui:Anuliuoti}} grąžina senąjį.

## Kur patenka skaičiai

- {{ui:Ypatybės}} rodo pasirinkto matavimo reikšmes.
- {{ui:Žymėjimai}} skirtukas išvardija kiekvieną reikšmę, o jo CSV turi stulpelį „Matavimas“. Žr. [Žymėjimų sąrašas](topic:markups-list-and-export).
- Įrašytas PDF išlaiko mastelį puslapyje ir įrašo ilgius bei plotus kaip matavimų komentarus, kad kitos PDF programos, suprantančios matavimus, galėtų juos rodyti. Žr. [Kas įrašoma PDF](topic:what-the-pdf-keeps).

Visam kiekių skaičiavimui su elementais, surinkimais ir kainomis naudokite TakeoffCraft: MarkupCraft matuoja peržiūrai, o ne sąmatai rengti.

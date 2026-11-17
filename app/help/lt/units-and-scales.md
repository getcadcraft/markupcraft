---
title: Vienetai, ilgiai ir mastelis
summary: Visi būdai įvesti ilgį, vienetai, kuriais rodomi ilgiai ir plotai, apvalinimas bei iš anksto nustatytų mastelių sąrašas.
keywords: vienetai, pėdos, coliai, pėdos ir coliai, metrinė sistema, metrai, milimetrai, centimetrai, mastelis, iš anksto nustatytas, architektūrinis mastelis, inžinerinis mastelis, santykis, kvadratinės pėdos, apvalinimas, trupmenos
from: 574b0291
---

## Ilgio įvedimas

Kai kalibruojate pagal du taškus, įvedate tikrą atstumą. MarkupCraft perskaito visus šiuos variantus:

| Įvedate | Reiškia |
|---|---|
| `24'-0"` | 24 pėdos |
| `12' 6 1/2"` arba `12'-6 1/2"` | 12 pėdų 6½ colio |
| `12' 6` | 12 pėdų 6 coliai (colių žymė praleista) |
| `6"` arba `1/2"` | coliai |
| `12.5'` arba `12.5 ft` | 12½ pėdos |
| `3 ft 6 in` | 3 pėdos 6 coliai (taip pat feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrai (taip pat meter, metre, millimeter, centimetre…) |
| `24` | grynas skaičius, vienetu pasirinktu {{ui:Rodyti ilgius}} |

Veikia ir lenktos kabutės (’ ”) bei dvi apostrofos ('') coliams. Nulinis ir neigiamas ilgis atmetami.

:::warning
Kablelis skaitomas kaip dešimtainis skyriklis: `1,5 m` yra 1.5 metro. Neįveskite tūkstančių skyriklių: `1,200 mm` skaitoma kaip 1.2 milimetro. Įveskite `1200 mm`.
:::

## Kaip rodomi ilgiai ir plotai

| {{ui:Rodyti ilgius}} | Ilgis rodomas kaip | Plotas rodomas kaip |
|---|---|---|
| {{ui:Pėdos ir coliai}} | `12'-6 1/2"`, apvalinta iki 1/16" | kvadratinės pėdos, du dešimtainiai skaitmenys |
| {{ui:Dešimtainės pėdos}} | `12.54'`, du dešimtainiai skaitmenys | kvadratinės pėdos, du dešimtainiai skaitmenys |
| {{ui:Coliai}} | `150.5"`, iki dviejų dešimtainių skaitmenų | kvadratiniai coliai, vienas dešimtainis skaitmuo |
| {{ui:Metrai}} | `3.820 m`, trys dešimtainiai skaitmenys | kvadratiniai metrai, trys dešimtainiai skaitmenys |
| {{ui:Milimetrai}} | `3820 mm`, sveikieji milimetrai | kvadratiniai milimetrai, sveikieji |

Srities perimetras naudoja ilgio formatą.

## Iš anksto nustatyti mastelių

Iš anksto nustatyti mastelių sąrašai laikosi prielaidos, kad PDF yra pilnu spausdintu dydžiu: 72 PDF taškai viename colyje, kaip jį braižo CAD programa.

| Grupė | Mastelis | Ilgiai rodomi |
|---|---|---|
| Architektūrinis | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Pėdos ir coliai |
| Inžinerinis | 1" = 10', 20', 30', 40', 50', 60', 100' | Dešimtainės pėdos |
| Metrinis | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetrai |
| Metrinis | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metrai |

Norėdami naudoti iš anksto nustatytą mastelį, bet matyti ilgius kitu vienetu, vietoj to kalibruokite pagal du taškus ir ten pasirinkite vienetą.

## Mastelis, kurį išsaugojo kitos programos

Kai PDF jau turi puslapio mastelį iš kitos programos (matavimo mastelis, saugomas puslapyje), MarkupCraft jį naudoja, jei jis yra pėdomis, coliais, metrais, centimetrais ar milimetrais. Jo etiketė rodoma taip, kaip ją nurodo failas.

## Popieriaus padėtys

Būsenos juostoje rodoma, kur popieriuje yra žymeklis, coliais nuo lapo viršutinio kairiojo kampo, nepriklausomai nuo lapo mastelio. „Compare“ žingsniai nustatomi PDF taškais (72 taškai viename colyje).

## Tikslumas

Matavimas yra tiek tikslus, kiek tikslūs kalibravimas ir jūsų spustelėjimai. Kalibruokite pagal ilgiausią žinomą matmenį, kurį rasite, priartinkite, kad spustelėtumėte jo galus, tada patikrinkite vieną kitą matmenį. PDF, kuris buvo sumažintas ar padidintas jį sukuriant (pavyzdžiui, spausdinimas „pritaikyta prie lapo“ arba pusės dydžio rinkinys), išlieka tikslus kalibravus pagal matmenį, bet ne naudojant iš anksto nustatytą mastelį.

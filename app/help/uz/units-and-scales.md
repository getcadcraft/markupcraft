---
title: Birliklar, uzunliklar va masshtablar
summary: Uzunlikni yozishning barcha usullari, uzunliklar va maydonlar koʻrsatiladigan birliklar, yaxlitlash hamda oldindan belgilangan masshtablar roʻyxati.
keywords: birliklar, futlar, dyuymlar, futlar va dyuymlar, metrik, metrlar, millimetrlar, santimetrlar, masshtab, oldindan belgilangan, arxitektura masshtabi, muhandislik masshtabi, nisbat, kvadrat futlar, yaxlitlash, kasrlar
from: 574b0291
---

## Uzunlikni kiritish

Ikki nuqta boʻyicha kalibrlaganingizda, haqiqiy masofani kiritasiz. MarkupCraft quyidagilarning hammasini oʻqiydi:

| Kiritasiz | Bu degani |
|---|---|
| `24'-0"` | 24 fut |
| `12' 6 1/2"` yoki `12'-6 1/2"` | 12 fut 6½ dyuym |
| `12' 6` | 12 fut 6 dyuym (dyuym belgisi qoldirilgan) |
| `6"` yoki `1/2"` | dyuym |
| `12.5'` yoki `12.5 ft` | 12½ fut |
| `3 ft 6 in` | 3 fut 6 dyuym (shuningdek feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrik (shuningdek meter, metre, millimeter, centimetre…) |
| `24` | faqat raqam, {{ui:Uzunliklarni koʻrsatish birligi}} ostida tanlangan birlikda |

Egri tirnoqlar (’ ”) va dyuym uchun ikkita apostrof ('') ham ishlaydi. Nol va manfiy uzunliklar rad etiladi.

:::warning
Vergul oʻnlik nuqta sifatida oʻqiladi: `1,5 m` 1.5 metr degani. Mingliklar ajratgichlarini kiritmang: `1,200 mm` 1.2 millimetr deb oʻqiladi. `1200 mm` deb kiriting.
:::

## Uzunliklar va maydonlar qanday koʻrsatiladi

| {{ui:Uzunliklarni koʻrsatish birligi}} | Uzunlik shunday koʻrinadi | Maydon shunday koʻrinadi |
|---|---|---|
| {{ui:Futlar va dyuymlar}} | `12'-6 1/2"`, 1/16" gacha yaxlitlangan | kvadrat fut, ikki oʻnlik kasr |
| {{ui:Oʻnlik futlar}} | `12.54'`, ikki oʻnlik kasr | kvadrat fut, ikki oʻnlik kasr |
| {{ui:Dyuymlar}} | `150.5"`, ikki oʻnlikkacha | kvadrat dyuym, bir oʻnlik kasr |
| {{ui:Metrlar}} | `3.820 m`, uch oʻnlik kasr | kvadrat metr, uch oʻnlik kasr |
| {{ui:Millimetrlar}} | `3820 mm`, butun millimetr | kvadrat millimetr, butun |

Maydonning perimetri uzunlik formatidan foydalanadi.

## Oldindan belgilangan masshtablar

Oldindan belgilanganlar PDF toʻliq chop etilgan oʻlchamda deb hisoblaydi: CAD dasturi chizganidek, bir dyuymda 72 PDF nuqta.

| Guruh | Masshtablar | Uzunliklar qaysi birlikda koʻrsatiladi |
|---|---|---|
| Arxitektura | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Futlar va dyuymlar |
| Muhandislik | 1" = 10', 20', 30', 40', 50', 60', 100' | Oʻnlik futlar |
| Metrik | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimetrlar |
| Metrik | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metrlar |

Oldindan belgilangan masshtabdan foydalanib, lekin uzunliklarni boshqa birlikda koʻrish uchun, buning oʻrniga ikki nuqta boʻyicha kalibrlang va birlikni oʻsha yerda tanlang.

## Boshqa dasturlar saqlagan masshtablar

Agar PDF da boshqa dasturdan sahifa uchun masshtab allaqachon boʻlsa (sahifada saqlangan oʻlchov masshtabi), MarkupCraft uni fut, dyuym, metr, santimetr yoki millimetrda boʻlsa ishlatadi. Uning yorligʻi fayl qanday bayon qilsa, shunday koʻrsatiladi.

## Qogʻoz ustidagi joylashuv

Holat satrida koʻrsatkich qogʻozda qayerda turgani varaqning yuqori chap burchagidan dyuymlarda koʻrsatiladi, varaq masshtabidan qatʼi nazar. Compare ning siljitish qadamlari nuqtalarda (bir dyuymda 72 nuqta).

## Aniqlik

Oʻlchov kalibrlash va bosishlaringiz qadar aniq boʻladi. Topa oladigan eng uzun maʼlum oʻlchamda kalibrlang, uchlarini bosish uchun kattalashtiring, soʻng yana bitta oʻlchamni tekshiring. Yaratilayotganda masshtablangan PDF ("sahifaga moslash" chizmasi yoki yarim oʻlchamdagi toʻplam) oʻlchamdan kalibrlangandan keyin hali ham aniq, lekin oldindan belgilangan masshtab bilan emas.

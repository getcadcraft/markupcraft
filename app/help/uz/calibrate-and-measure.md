---
title: Varaqni kalibrlash va oʻlchash
summary: Har bir varaqning masshtabini tayyor sozlamadan yoki maʼlum oʻlchamdan oʻrnating, soʻng uzunliklarni, perimetrli maydonlarni va sanashni oʻlchang.
keywords: kalibrlash, masshtab, masshtabni oʻrnatish, oʻlchash, uzunlik, masofa, oʻlcham, maydon, kvadrat fut, perimetr, sanash, hajmlarni hisoblash, miqdor, chizgʻich, arifmetika, hisoblash, qoʻshish, kasr
from: 49a25c6d
---

Uzunlik va maydonlarni hisoblash uchun varaq masshtabini bilish kerak. MarkupCraft masshtabni **har bir varaq uchun** saqlaydi: oʻlchaydigan har bir varaqni kalibrlang. Sanash uchun masshtab kerak emas.

Holat satrida joriy varaqning masshtabi yoki "Kalibrlanmagan" koʻrsatiladi.

## Roʻyxatdan masshtab tanlash

Bu PDF toʻliq oʻlchamda boʻlganda (24 × 36 varaq 24 × 36 da chop etiladi) va chizma oʻz masshtabini koʻrsatganda foydalaning.

1. Holat satridagi masshtab tugmasini bosing ("Kalibrlanmagan"). "Varaq masshtabi" oynasi ochiladi.
2. {{ui:Masshtab}} ostida masshtabni tanlang: arxitektura (1/32" = 1'-0" dan 3" = 1'-0" gacha), muhandislik (1" = 10' dan 1" = 100' gacha) yoki metrik (1:1 dan 1:1000 gacha).
3. {{ui:Masshtabni oʻrnatish}} ni tanlang.

Natija: holat satrida masshtab koʻrinadi, masalan `1/4" = 1'-0"`. Arxitektura masshtablari uzunliklarni futlar va dyuymlarda, muhandislik masshtablari oʻnlik futlarda, metrik masshtablar 1:50 gacha millimetrda va 1:100 dan boshlab metrda koʻrsatadi.

:::warning
Tayyor sozlama faqat PDF kichraytirilmagan boʻlsa toʻgʻri keladi. Yarim oʻlchamli toʻplam yoki yaratilganda "sahifaga moslashtirilgan" varaq tayyor sozlama bilan notoʻgʻri oʻlchanadi. Oʻrniga maʼlum oʻlchamdan kalibrlang va har holda bitta oʻlchamni tekshiring.
:::

## Maʼlum oʻlchamdan kalibrlash

Bu yarim oʻlchamli toʻplamlar, skanerlangan varaqlar, gʻalati masshtabdagi detallar yoki tayyor sozlamani tekshirish uchun foydalaniladi.

1. Ishonchli uzun oʻlchamni yoki masshtab chizgʻichini toping.
2. {{ui:Oʻlchash}} guruhida {{ui:Kalibrlash}} ni tanlang (yoki "Varaq masshtabi" oynasida {{ui:Ikki nuqtani tanlang}} ni tanlang).
3. Oʻlchamning bir uchini, soʻng ikkinchi uchini bosing. (Yoki bir uchidan ikkinchisiga torting.) Aniqlik uchun avval kattalashtiring; {{key:Shift}} chiziqni 45° qadamlarda ushlab turadi.
4. Oynada nuqtalar qogʻozda qanchalik uzoqligi koʻrsatiladi va "Ular haqiqatda qanchalik uzoq?" deb soʻraladi. {{ui:Haqiqiy masofa}} ni kiriting, masalan `24'-0"`, `12' 6 1/2"`, `7.2 m` yoki `900 mm`.
5. {{ui:Uzunliklarni koʻrsatish birligi}} ostida uzunliklar qanday koʻrsatilishini tanlang: {{ui:Futlar va dyuymlar}}, {{ui:Oʻnlik futlar}}, {{ui:Dyuymlar}}, {{ui:Metrlar}} yoki {{ui:Millimetrlar}}.
6. {{ui:Masshtabni oʻrnatish}} ni tanlang.

Natija: holat satrida "Kalibrlangan: 24'-0" 1.00 in ustida" (haqiqiy uzunlik va qogʻoz uzunligi) koʻrinadi, oʻlchamoqchi boʻlgan asbob esa qayta yoqiladi. Uzunlikni yozishning barcha usullari [Birliklar va uzunliklar](topic:units-and-scales) boʻlimida.

Haqiqiy masofa qisqa hisob-kitob ham boʻlishi mumkin: `12'6"+3/4"`, `(24'-0")/3` yoki `2*450mm`. `+ - * /` va qavslardan foydalaning; birliksiz son {{ui:Uzunliklarni koʻrsatish birligi}} ostidagi birlikda hisoblanadi ({{ui:Futlar va dyuymlar}} uchun futda). {{ui:Masshtabni oʻrnatish}} natijani ishlatadi.

Agar MarkupCraft kiritilganni oʻqiy olmasa, oynada shunday deyiladi: 'Bu MarkupCraft tushunadigan uzunlik emas. 24'-0", 12' 6 1/2", 7.2 m yoki 900 mm kiriting.' Hisoblab boʻlmaydigan ifoda esa sababini va joyini koʻrsatadi, masalan "Qavs yopilmagan (5-belgi)."

## Uzunlikni oʻlchash

1. {{ui:Uzunlik}} ({{key:M}}) ni tanlang.
2. Boshlanishni, soʻng oxirini bosing. Yoki boshlanishdan oxirigacha torting. {{key:Shift}} uni 45° qadamlarda ushlab turadi.

Natija: belgilar bilan oʻlchov chizigʻi va unga yozilgan uzunlik. Holat satri uni takrorlaydi ("Uzunlik: 12'-6 1/2" (1/4" = 1'-0")."), {{ui:Xususiyatlar}} esa uni {{ui:Uzunlik}} ostida koʻrsatadi. Futlar va dyuymlar 1/16" gacha yaxlitlanadi.

Agar varaqda hali masshtab boʻlmasa, {{ui:Uzunlik}} ni tanlash {{ui:Kalibrlash}} ga oʻtadi va holat satri tushuntiradi: "Avval bu varaqni kalibrlang: maʼlum masofada ikki nuqta tanlang yoki uning masshtabini tanlang. Soʻng oʻlchang." Masshtabni oʻrnatgandan keyin {{ui:Uzunlik}} qaytib keladi.

## Masshtab boʻyicha eskiz

Kalibrlangan varaqda {{ui:Chiziq}}, {{ui:Strelka}}, {{ui:Uzunlik}}, {{ui:Polichiziq}}, {{ui:Koʻpburchak}}, {{ui:Erkin bulut}}, {{ui:Maydon}} yoki xonani chizayotganda haqiqiy uzunliklarni yozishingiz mumkin:

1. Birinchi nuqtani bosing.
2. Keyingi segment yoʻnalishini koʻrsating va uning uzunligini yozing, masalan `16` (varaq birligida), `12'6"` yoki `3.5 m`. Yozayotganda koʻrsatkich yonida quti ochiladi.
3. {{key:Enter}} ni bosing. Nuqta koʻrsatkich yoʻnalishida shuncha masofaga tushadi.

Yoʻnalishni aniq belgilash uchun `<` va gradusdagi burchakni qoʻshing: `8 < 90` 8 fut toʻgʻri yuqoriga, `4<0` oʻngga, `10 < 225` pastga va chapga — varaq qanday koʻrinsa shunday (aylantirilgan sahifalar ham). Keyingi burchaklar uchun uzunliklarni yozishda davom eting va shaklni odatdagidek yakunlang. {{key:Esc}} nuqta qoʻymasdan qutini yopadi.

## Burchakni oʻlchash

1. {{ui:Burchak}} ({{key:X}}) ni tanlang.
2. Bir qoʻl uchini, soʻng burchak uchini, soʻng boshqa qoʻl uchini bosing.

Natija: ikki qoʻl, burchakda kichik yoy va gradusda burchak, oʻndan bir aniqlikda (0° dan 180° gacha). Burchakka masshtab kerak emas. {{ui:Xususiyatlar}} uni {{ui:Burchak}} ostida koʻrsatadi, roʻyxat, CSV va BCF uni saqlaydi.

Kalibrlangan varaqdagi {{ui:Yoy}} ({{key:O}}) ham egri boʻylab uzunligini {{ui:Xususiyatlar}} da koʻrsatadi.

## Maydon va perimetrni oʻlchash

1. {{ui:Maydon}} ({{key:Q}}) ni tanlang.
2. Xona yoki hudud har bir burchagini bosing.
3. Ikki marta bosish, {{key:Enter}} yoki oʻng tugma bilan yakunlang (sensorli ekranda ikki marta teging). {{key:Backspace}} oxirgi burchakni oʻchiradi.

Natija: soyalangan kontur, maydon va markazda "P" bilan perimetr, masalan "128.00 sq ft" va "P 48'-0"". Futli masshtablar kvadrat futlar, dyuymli — kvadrat dyuymlar, metrli — kvadrat metrlar, millimetrli — kvadrat millimetrlar beradi. Maydon uchun kamida uchta burchak kerak.

### Kesiklar

Ustun, shaxta yoki hovlini chiqarib tashlash uchun maydonni tanlang va {{ui:Xususiyatlar}} da {{ui:Kesik qoʻshish}} ni tanlang. Kesikning burchaklarini maydon ichida bosing va maydondagidek yakunlang. Kesik ochiq qoladi (soyalanmaydi), uning maydoni ayriladi, uning qirralari esa perimetrga qoʻshiladi: 16' × 8' xona va 4' × 4' kesik "112.00 sq ft" va "P 64'-0"" deb oʻqiladi. Kerakcha qoʻshing; ular bir-biriga yoki maydon konturiga kesishmasligi kerak. {{ui:Kesiklarni olib tashlash}} ularning hammasini chiqaradi, {{key:Mod+Z}} esa bittasini bekor qiladi.

## Narsalarni sanash

1. {{ui:Sanash}} ({{key:U}}) ni tanlang.
2. {{ui:Xususiyatlar}} da {{ui:Guruh nomi}} kiriting, masalan "Pol quvurlari". (Keyingi safar uchun saqlanadi.)
3. Varaqdagi har bir narsani bosing.

Natija: har bir bosish raqamlangan nuqta qoʻshadi, birinchi nuqtada "Pol quvurlari: 7" kabi yorliq boʻladi va holat satri joriy yigʻindini saqlaydi.

- **Boshqa guruh boshlash:** {{key:Esc}} ni bir marta bosing (tanlovni tozalaydi), {{ui:Guruh nomi}} ni oʻzgartiring va yana bosing.
- **Mavjud guruhga qoʻshish:** avval guruhni tanlang, soʻng {{ui:Sanash}} ni tanlang va bosing.
- **Belgini oʻchirish:** guruh tanlangan holda {{key:Shift}} ni ushlab, nuqtani bosing. Oxirgi nuqtani oʻchirish guruhni ham oʻchiradi. Klaviaturasiz sensorli ekranda {{key:Mod+Z}} yoki {{ui:Ortga qaytarish}} dan foydalaning.
- **Guruhni qayta nomlash:** uni tanlang va {{ui:Xususiyatlar}} dagi {{ui:Guruh nomi}} ni tahrirlang.

Sanash guruhi bitta varaqqa tegishli. Bir nechta varaqdagi sanoqlar belgilar roʻyxatida alohida guruhlar sifatida koʻrinadi.

## Masshtabni oʻzgartirish yoki olib tashlash

Holat satridagi masshtab tugmasini bosing. Oynada joriy masshtab koʻrsatiladi; boshqasini tanlang, {{ui:Ikki nuqtani tanlang}} ni tanlang yoki {{ui:Masshtabni olib tashlash}} ni tanlang.

Chizilgan uzunliklar va maydonlar yangi masshtab bilan darhol **qayta oʻlchanadi**. Bekor qilish eski masshtabni qaytaradi.

## Raqamlar qayerga boradi

- {{ui:Xususiyatlar}} tanlangan oʻlchovning qiymatlarini koʻrsatadi.
- {{ui:Belgilar}} tabi har bir qiymatni roʻyxatlaydi, uning CSV faylida "Oʻlchov" ustuni bor. Qarang: [Belgilar roʻyxati](topic:markups-list-and-export).
- Saqlangan PDF masshtabni sahifada saqlaydi va uzunlik hamda maydonlarni oʻlchov izohlari sifatida yozadi, shunda oʻlchovlarni tushunadigan boshqa PDF dasturlari ularni koʻrsata oladi. Qarang: [PDF'da nima saqlanadi](topic:what-the-pdf-keeps).

Elementlar, yigʻmalar va narxlar bilan toʻliq miqdor hajmlarini hisoblash uchun TakeoffCraft'dan foydalaning: MarkupCraft koʻrib chiqish uchun oʻlchaydi, smeta uchun emas.

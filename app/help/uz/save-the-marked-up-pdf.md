---
title: Belgilangan PDFni saqlash
summary: Har bir belgilashni standart PDF izohlari sifatida yozilgan nusxani yuklab oling, boshqa PDF koʻruvchilar nimani koʻrishini tekshiring va ishni keyinroq davom ettiring.
keywords: saqlash, yuklab olish, pdf eksporti, belgilangan, annotatsiya, izohlar, ulashish, yuborish, muammo, ishni davom ettirish, qayta ochish, ikki tomonlama aylanish, chop etish
from: 4c198ebe
---

## Saqlash

1. Asboblar panelidagi {{ui:Saqlash}} tugmasini tanlang yoki {{key:Mod+S}} tugmasini bosing.
2. Bir nechta fayl ochiq boʻlsa, {{ui:Ushbu fayl}} (siz turgan varaqning fayli) yoki {{ui:Oʻzgargan barcha fayllar}} ni tanlang. Har bir nusxa alohida yuklab olinadi.
3. "Saqlanmoqda: <file>…" tugashini kuting. Seansdagi birinchi saqlashda PDF yozuvchi ham yuklanadi.

Natija: brauzeringiz "<name> (marked up).pdf" faylini yuklab oladi va holat satrida shunday xabar chiqadi: «Saqlandi: A-Plans (marked up).pdf (24 ta belgilash, 18.2 MB). Asl fayl oʻzgarmadi.» {{ui:Saqlash}} yonidagi nuqta yoʻqoladi.

**Asl PDF hech qachon oʻzgartirilmaydi.** MarkupCraft yangi fayl yozadi. Fayl qayerga tushishi brauzeringizning yuklab olish sozlamalariga bogʻliq (qarang: [MarkupCraft ochadigan va saqlaydigan fayllar](topic:files#where-downloads-go)).

## Ishni keyinroq davom ettirish

Keyingi safar asl faylni emas, "(marked up)" nusxasini oching. Hammasi tahrirlanadigan holda qaytadi: belgilashlar, holatlar, javoblar, punch elementlari, har bir varaqning masshtabi va siz kiritgan varaq nomlari. Uni yana saqlasangiz, bir xil "(marked up)" nomli fayl yuklab olinadi; eski yuklab olish hali jildda boʻlsa, brauzer "(1)" kabi raqam qoʻshishi mumkin. Eski nusxalarni oʻzingiz almashtiring yoki tartibga soling.

MarkupCraft PDFni oʻz-oʻzidan saqlamaydi. Ishlayotganda u shu brauzerda tiklash nusxasini saqlab turadi, shuning uchun brauzer ishdan chiqsa yoki yorliq yopilsa ham belgilashlar yoʻqolmaydi: MarkupCraftʼni keyingi safar ochganingizda u «Ishingizni tiklaysizmi?» deb soraydi. Qarang: [Ishingizni tiklash](common:recover). Shunday boʻlsa ham, yopishdan oldin saqlang. Saqlanmagan belgilashlar bilan chiqmoqchi boʻlsangiz, brauzer avval «Saytdan chiqilsinmi?» deb soraydi (iPad Safari bunday soʻramaydi).

## Boshqa PDF koʻruvchilarda nima koʻrinadi

Har bir belgilash oʻz chizmasi bilan standart PDF izohi (annotatsiya) sifatida yoziladi, shuning uchun istalgan PDF koʻruvchi uni koʻrsatadi, chop etadi va izohlar panelida roʻyxatga oladi:

- **Koʻrinishi MarkupCraftdagi bilan bir xil:** bulutlar va ularning tishli chetlari, strelkalar, muhrlar, sanash nuqtalari, punch raqam belgilari, oʻlchov yorliqlari.
- **Tafsilotlar standart:** muallif, sana, mavzu, izoh matni va ranglar.
- **Bulutlar** toʻrtburchak yoki koʻpburchak izohlar sifatida, bulutsimon chegara bilan; **matn qutilari** va **chaqiruvlar** matn qutisi izohlari; **eslatmalar** yopishqoq eslatmalar; **qalam** va **marker** chiziqlari siyoh (ink) izohlari; **muhrlar** muhr izohlari boʻladi.
- **Uzunlik va maydonlar** oʻlchov izohlari boʻladi. Har bir kalibrlangan varaq oʻz masshtabini saqlaydi, shuning uchun oʻlchovlarni tushunadigan koʻruvchilar qiymatlarni koʻrsata oladi.
- **Javoblar** izohga javob sifatida, **holatlar** esa koʻrib chiqish holatlari sifatida yoziladi (Ochiq holat hech qanday holatsiz koʻrinadi).
- **Siz kiritgan varaq raqamlari** boshqa koʻruvchilar koʻrsatadigan sahifa yorliqlariga aylanadi.

Faqat MarkupCraft qayta oʻqiydi: punch elementining masʼul shaxsi va muddati, element holati va ba'zi uslub tafsilotlari. Boshqa dasturlar, ular izohni qayta yozmasa, bularni saqlab qoladi.

Boshqa dasturda izohlarni boshqa har qanday izoh kabi koʻchirish yoki tahrirlash mumkin. Agar kimdir shunday qilib faylni qaytarib yuborsa, MarkupCraft faylni ochganda izohning yangi joylashuvidan foydalanadi.

Toʻliq maʼlumot: [PDFda nima saqlanadi](topic:what-the-pdf-keeps).

## Belgilar "?" sifatida chop etiladi

Belgilash matni har bir PDF koʻruvchida bor boʻlgan standart Helvetica shrifti bilan yoziladi. U ingliz va gʻarbiy yevropa harflarini (é, ñ, ü, ø va shunga oʻxshash) qamrab oladi, lekin boshqa yozuvlarni, bu toʻplamdan tashqaridagi belgilarni yoki emojilarni emas. Bunday belgilar MarkupCraftda yaxshi koʻrinadi, lekin saqlangan nusxada "?" sifatida chop etiladi, saqlash xabari ularni sanaydi: "3 ta belgi gʻarbiy yevropa toʻplamidan tashqarida boʻlib, nusxada "?" sifatida chop etiladi." Bunday soʻzlarni toʻliq yozing yoki oddiy oʻrnini bosuvchi belgidan foydalaning (masalan, diametr belgisi oʻrniga "dia.").

## Saqlab boʻlmaydigan fayllar

- **Himoyalangan PDFlar:** "Bu PDF himoyalangan (shifrlangan), shuning uchun belgilangan nusxa yozib boʻlmaydi. Himoyalanmagan nusxa soʻrang." Uni ekranda koʻrib chiqishingiz, CSV va BCF ni eksport qilishingiz mumkin.
- Agar saqlash boshqa sababga koʻra muvaffaqiyatsiz boʻlsa, «Saqlab boʻlmadi: <file>» nomli oyna sababini koʻrsatadi. Belgilashlaringiz hali yorligʻingizda; uni yopmaguningizcha hech narsa yoʻqolmaydi.

## Sahifaga singdirish va chop etish

Hozircha belgilarni sahifaga singdirib yozish (yassilash) ham, chop etish buyrugʻi ham yoʻq. Chop etish uchun saqlangan nusxani istalgan PDF koʻruvchida oching va izohlar koʻrinadigan holda chop eting.

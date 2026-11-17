---
title: Ochiq belgilashlarni chizmachiga redline sifatida yuborish
summary: Ochiq belgilashlarni chizmalarni oʻzgartiruvchi uchun redline fayl sifatida yozing, soʻng ularning javoblarini yuklang, shunda har bir belgilash Qabul qilingan yoki Rad etilgan holatini koʻrsatadi.
keywords: redline, reviziya, chizmachi, qabul qilish, rad etish, javoblar, cc-redline, reviziya buluti, belgilashlarni qoʻllash
from: cb099d04
---

Koʻrib chiqish yarim ish; chizma hali ham oʻzgarishi kerak. Redline fayl har bir ochiq belgilashni chizmachiga yetkazadi, chizmachining javoblari esa natijani qaytarib olib keladi.

## Yuborish

1. {{ui:Vazifalar}} yorligʻini oching va {{ui:Reviziyagacha qizil belgilash}} ni oching.
2. Belgilashlar qaysi reviziyaga tegishli ekanini kiriting (masalan B).
3. {{ui:Redline faylini eksport qilish}} ni tanlang.

Siz `.redline.json` faylini olasiz: har bir Ochiq belgilash uchun bitta band: uning varaqi, qayerdaligi (varaq ulushlari sifatida, shunda boshqa oʻlchamda qayta chop etilsa ham mos keladi, va nuqtalarda), uning soʻzlari, muallifi va muhokamasi, va agar boʻlsa, uning vazifasi. Boshqa dasturlardan kelgan faqat oʻqish uchun izohlar, rasmlar va legendalar chiqarib tashlanadi.

## Javoblar

Chizmachi tomoni har bir bandga Qabul qilingan, Rad etilgan yoki Bajarilgan deb, izoh bilan javob beradi, `.redline-answers.json` faylida. {{ui:Javoblar faylini yuklash…}} ni tanlang va uni tanlang: har bir belgilash oʻsha holatni va chizmachining izohini oʻz muhokamasida oladi, qabul qilingan yoki bajarilgan belgilashning vazifasi esa tugallanadi. Bitta ortga qaytarish qadami barcha javoblarni qaytaradi.

Fayl formati `docs/REDLINE-FORMAT.md` da joylashgan. CadCraft tomoni (paketni oʻqish, har bir bandni qabul qilish yoki rad etish, reviziya buluti va jurnal) alohida ishlab chiqilmoqda.

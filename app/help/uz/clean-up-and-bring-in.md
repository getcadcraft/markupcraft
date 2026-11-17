---
title: Qalam chiziqlarini tozalash, koʻrib chiqish izohlarini va qurilish jarayonini olib kelish
summary: Erkin qalam chiziqlarini chiziqlarga, aylanalarga, yoylarga va toʻrtburchaklarga aylantiring; ruxsatnoma paketining koʻrib chiqish izohlarini va saytning tekshiruv jarayonini eslatmalar sifatida olib keling.
keywords: qalam, erkin, tozalash, tekislash, aylana, chiziq, toʻrtburchak, yoy, ruxsatnoma, koʻrib chiqish izohlari, jarayon, drone, skanerlash, tekshiruv, eslatmalar, csv
from: 547d8e42
---

## Qalam chiziqlarini tozalash

{{ui:Qalam}} bilan chizing, soʻng tahrirlash guruhidagi {{ui:Yana}} menyusini oching va {{ui:Qalam chiziqlarini tozalash}} ni tanlang. Tanlangan har bir qalam chizigʻi boʻlishi kerak boʻlgan shakliga aylanadi: toʻgʻri chiziq chiziqqa aylanadi (deyarli gorizontal yoki vertikal boʻlsa, aniq tekislanadi), yumaloq chiziq ellipsga, aylananing bir qismi yoyga, yopiq toʻrt burchakli chiziq toʻrtburchakka, qolgan hammasi polichiziq yoki koʻpburchakka. Birga chizilgan chiziqlarning uchlari bir-biriga tortiladi. Hech qanday qalam chizigʻi tanlanmagan boʻlsa, ochiq varaqdagi har bir qalam chizigʻi tozalanadi. Bu bitta bekor qilish qadami: Ctrl+Z erkin chizilganini qaytaradi. Shakl qat'iy qoidalar boʻyicha kompyuteringizda hisoblanadi; hech narsa hech qayerga yuborilmaydi.

## Koʻrib chiqish izohlarini olib kelish

BimCraft'ning ruxsatnoma paketi `01-review-comments.csv` faylini saqlaydi: reja tekshiruvchisi qilishi ehtimoli bor izohlar, har biri qoida, band, kerak boʻlgan narsa, topilgan narsa va nima qilish kerakligi bilan. {{ui:Vazifalar}} tabida {{ui:Ruxsat koʻrib chiqish izohlari}} ni oching va {{ui:Izohlarni olib kelish (CSV)}} ni tanlang. Har bir izoh ochiq varaqning chap tomonidagi ustunda "Ochiq" eslatma sifatida paydo boʻladi; har birini tegishli joyiga torting. Ular mavjud tekshiruvlardan hisoblanadi, reja ekspertidan emas.

## HAZOP tugun qutilarini olib kelish

CadCraft'ning P&ID qoʻshimchasi HAZOP tadqiqotining tugunlarini chizadi va ularni {{ui:HAZOP tugun qutilari}} sifatida (JSON fayl) saqlashi mumkin. Bosma P&ID varaqni bu yerda oching, {{ui:Vazifalar}} tabiga oʻting, {{ui:HAZOP tugun qutilari}} ni oching va {{ui:Tugun qutilarini olib kelish (JSON)}} ni tanlang. Har bir tugun ochiq toʻrtburchak boʻlib varaqda paydo boʻladi; matnida uning raqami, nomi, jihozi va chiziqlari boʻladi, jamoa esa topilmalarini unga javob sifatida yozadi. Varaq chizmaning pastki chap burchagidan toʻliq oʻlchamli bosma sifatida olinadi; agar u boshqa masshtabda chop etilgan boʻlsa, avval {{ui:Chop etilgan}} maydoniga shu sonni kiriting (1:2 uchun 0.5). Sahifadan tashqarida qolgan tugun chizilmaydi va panel nechta ekanini aytadi. Belgilar tadqiqot uchun yordamchi: ular tugunlarning joyini koʻrsatadi, tadqiqotni baholamaydi.

## Qurilish jarayonini olib kelish

CivilCraft har bir drone parvozi yoki saytni skanerlash uchun satr saqlaydi. {{ui:Vazifalar}} tabida {{ui:Qurilish maydoni jarayoni}} ni oching va {{ui:Jarayonni olib kelish (JSON)}} ni tanlang. Har bir tekshiruv ochiq varaqda eslatmaga aylanadi: qancha bajarilgani, qancha kesish yoki toʻldirish qolgani, nima ortiqcha kovlangan yoki ortiqcha toʻldirilgani va rejadan chiqib turgani aytiladi. Rejadan chiqqan narsasi bor tekshiruv Ochiq boʻlib qoladi; toza tekshiruv esa Qabul qilingan boʻladi.

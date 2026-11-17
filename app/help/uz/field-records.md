---
title: RFI, taqdim etish hujjatlari va kunlik jurnallarni kuzatish
summary: RFI, taqdim etish hujjatlari va kunlik jurnallarni varaqlarga qoʻying: raqamlar, masʼullar, muddatlar va muhokamalar bilan; muddati oʻtganlarni filtrlang; CSV yoki BCF formatida eksport qiling; oflaynda ishlang va nusxalarni birlashtiring.
keywords: rfi, axborot soʻrovi, taqdim etish hujjati, kunlik jurnal, dala hisoboti, obyekt kundaligi, qurilish, muddati oʻtgan, muddat, menga biriktirilgan, muhokama, ilova, birlashtirish, oflayn, planshet, bcf, csv, dala
from: 95039c5a
---

{{ui:Maydon}} yorligʻi belgilaringiz yonida uch turdagi yozuvni saqlaydi. Har biri varaqqa bogʻlangan; RFI yoki taqdim etish hujjati esa u haqida boʻlgan varaqdagi joyga bogʻlangan belgiga ega boʻladi.

- **RFI**: loyiha jamoasiga savol. Holatlari: Ochiq, Javob berilgan, Yopilgan.
- **Taqdim etish hujjati**: ish davom etishidan oldin koʻrib chiqilishi kerak boʻlgan narsa. Holatlari: Ochiq, Koʻrib chiqilmoqda, Tasdiqlangan, Izoh bilan tasdiqlangan, Qayta ishlab qayta topshirish, Yopilgan.
- **Kunlik jurnal**: kunning ob-havosi, obyektdagi odamlar soni va bajarilgan ish. Holatlari: Qoralama, Yakuniy.

Har bir yozuvning oʻz turi ichida raqami bor (RFI-0001, SUB-0001, LOG-0001), shuningdek sarlavhasi, matni, masʼuli, muddati, javoblar muhokamasi va ilova nomlari roʻyxati boʻladi.

## Bittasini qoʻshish

1. {{ui:Maydon}} yorligʻini oching va {{ui:RFI}} yoki {{ui:Taqdim etish hujjati}} ni tanlang.
2. Tegishli varaqni bosing yoki teging. Belgi paydo boʻladi va yozuv yorliqda ochiladi.
3. Sarlavha, savol yoki tavsif, kimga biriktirilgani va qachon muddati tugashini toʻldiring.

Kunlik jurnal ochiq varaqqa belgisiz qoʻshiladi. {{ui:Belgini qoʻyish}} uni keyinroq belgi bilan bogʻlaydi; {{ui:Belgini koʻchirish}} istalgan belgini koʻchiradi. Varaqdagi belgiga bosilsa, uning yozuvi ochiladi.

## Javob berish va kuzatish

{{ui:Holat}} oʻzgarsa, bu muhokamada qayd etiladi. Javob yozing va {{ui:Javobni yuborish}} ni tanlang (Ctrl+Enter ham yuboradi). Ilovalar faqat nomlar: birini yozing yoki fayllarni tanlang, roʻyxat esa jamoaga yozuv bilan nima birga borishini bildiradi. Fayllarning oʻzi oʻz joyida qoladi.

Muddati oʻtgan va hali kutilayotgan yozuv (holati Javob berilgan yoki Yopilgan boʻlmagan RFI, qaror qabul qilinmagan taqdim etish hujjati) roʻyxatda va belgisida qizil rangda **Muddati oʻtgan** deb belgilanadi.

## Muhimini topish

Filtrlar roʻyxat ustida turadi: turi, holat, muddat (muddati oʻtgan, 7 kun ichida tugaydigan, muddati bor yoki yoʻq), shu varaq yoki barcha varaqlar, matn boʻyicha qidiruv va {{ui:Menga biriktirilgan}}. Oxirgisi masʼulni MarkupCraft sizni qanday nom bilan tanishini bilsa, shu nom bilan solishtiradi (qarang: [Nomingizni oʻrnatish](topic:set-your-name)). Filtrlar ostidagi qator koʻrsatilgan va muddati oʻtgan yozuvlar sonini hisoblaydi.

## Eksport

{{ui:CSV}} roʻyxatdagi yozuvlarni elektron jadval sifatida yozadi. {{ui:BCF}} ularni BCF mavzulari sifatida yozadi, har biri varaqdagi oʻrnining suratiga ega boʻladi, shuning uchun boshqa BCF vositalari ularni koʻrsata oladi. Ikkalasi ham filtrlarga amal qiladi.

## Saqlash, oflayn va nusxalarni birlashtirish

Yozuvlar PDF saqlanganda uning ichiga yoziladi va uni ochganda qaytib keladi. Tarmoq kerak emas: podvalda planshetda yozuv qoʻshing, tahrirlang, javob bering va saqlang, soʻng PDF ni qaytaring. Eskiroq PDF lar va boshqa dasturlardan kelgan PDF lar avvalgidek ochiladi.

Ikki nusxani birlashtirish uchun birini oching va {{ui:Birlashtirish}} ni tanlang, soʻng oʻsha PDF ning ikkinchi nusxasini tanlang. Yozuvlar identifikatorlari boʻyicha birlashtiriladi:

- faqat bitta nusxada boʻlgan yozuv qoʻshiladi;
- ikkalasida boʻlgan yozuv maydonlarini (sarlavha, matn, holat, masʼul, muddat) oxirgi oʻzgartirilgan nusxadan butunligicha oladi, shuning uchun agar ikki kishi yozuvning turli maydonlarini oʻzgartirgan boʻlsa, keyingi nusxa versiyasi ustun keladi; ikkala nusxadagi muhokamalar va ilova nomlari birlashtiriladi;
- ikki nusxa yangi yozuvga bir xil raqam bergan boʻlsa, kelgan yozuv keyingi boʻsh raqamni oladi;
- bir nusxada oʻchirilgan yozuv, undan keyin tahrirlanmagan boʻlsa, oʻchirilgan holda qoladi.

Birlashtirish bitta Ortga qaytarish qadamidir.

## Cheklovlar

- Yozuvlar hali Live TeamWork orqali ulashilmaydi; Birlashtirishdan foydalaning.
- Bu versiyada yozuvlar uchun jamoalar, bildirishnomalar yoki bulutli loyihalar yoʻq.
- PDF dan oʻchirilgan sahifalar oʻz yozuvlarini ham olib ketadi (sahifani tasdiqlash oynasida ularning soni koʻrsatiladi).

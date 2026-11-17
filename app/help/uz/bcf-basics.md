---
title: BCF asoslari
summary: MarkupCraft BCF eksportida nimalar boʻlishi, uni BIM muvofiqlashtirish vositalari bilan qanday ishlatish va uning cheklovlari.
keywords: bcf, bcfzip, BIM hamkorlik formati, muammolar, muvofiqlashtirish, toʻqnashuv, mavzular, koʻrinish nuqtasi, surat, openbim, buildingsmart, muammolarni eksport qilish
from: 446f38c1
---

BCF (BIM Collaboration Format) — BIM vositalari oʻrtasida muammolarni uzatish uchun ochiq fayl formati. Koʻplab model muvofiqlashtirish va loyihalash dasturlari `.bcfzip` faylini muammolar roʻyxati sifatida import qila oladi. MarkupCraft **BCF 2.1** formatida yozadi.

## Yaratish

1. {{ui:Belgilar}} tabini oching.
2. Roʻyxatni yuboriladigan narsaga filtrlang, masalan {{ui:Holat}} "Ochiq". Faqat roʻyxatdagi belgilar eksport qilinadi.
3. {{ui:BCF}} ni tanlang.
4. Har bir belgining surati tayyorlanguncha kuting ("BCF uchun suratlar tayyorlanmoqda (20 tadan 5 tasi)…").

Natija: "<name> markups.bcfzip" yuklab olinadi, holat satrida esa unda nechta mavzu borligi va fayl hajmi koʻrsatiladi.

## Ichida nimalar bor

Har bir belgi bitta **mavzu** boʻladi:

| Mavzu maydoni | Nima bilan toʻldiriladi |
|---|---|
| Sarlavha | Belgi raqami, mavzusi va varaq, masalan "#4 A-101 da bulut — Qavat rejasi" |
| Turi | Belgi turi (Bulut, Izohli belgi, Uzunlik…) |
| Holat | Ochiq, Qabul qilingan, Rad etilgan yoki Yakunlangan |
| Teglar | Belgi turi va varaq |
| Muallif va sanalar | Belgi muallifi, yaratilgan va oʻzgartirilgan sanalar |
| Kimga biriktirilgan, muddat | Kamchiliklar elementidan, agar u boʻlsa |
| Tavsif | Uning matni yoki muhr matni, oʻlchangan qiymat, izoh, varaq va fayl |
| Izohlar | Har bir javob uchun bittadan, muallif va sana bilan |
| Surat | Belgining varaqdagi qismining rasmi |
| Koʻrinish nuqtasi | Belgi varaqda turgan joyning yuqoridan koʻrinishi |

Belgi qayta eksport qilinsa, u bir xil mavzu ID sini oladi, shuning uchun BCF import qiladigan vosita uni bir xil muammo deb taniydi.

## Bilish kerak boʻlgan cheklovlar

- **Varaq model emas.** Koʻrinish nuqtasi belgining qogʻozdagi joyini koʻrsatadi, u qogʻoz metrlarida oʻlchanadi. U BIM vositasini modelning biror joyiga olib bormaydi. Joyni topish uchun suratdan va varaq nomidan foydalaning.
- **Holatlar va turlar MarkupCraft'niki.** Fayl ularni BCF ruxsat bergani kabi e'lon qiladi, lekin oʻzining qat'iy roʻyxatlari boʻlgan vosita ularni moslashtirishi yoki e'tiborsiz qoldirishi mumkin.
- **Import izohlarni olib keladi, model koʻrinishlarini emas.** {{ui:BCF import qilish}} eksport qilingan belgilarga javoblar va holatlarni qoʻshadi hamda boshqa muammolar uchun eslatmalar yaratadi; model kamerasini koʻrsata olmaydi. Qarang: [Belgilar roʻyxati va eksport](topic:markups-list-and-export#import-bcf).
- Chizma koʻriklari uchun belgilarni PDF sifatida qaytarish odatda soddaroq. BCF chizma izohlarini model muvofiqlashtirish jarayoniga olib kirish uchun moʻljallangan.

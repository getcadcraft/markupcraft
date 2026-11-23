---
title: BCF asoslari
summary: MarkupCraft dan olingan BCF eksportida nimalar boʻlishi, uni BIM koordinatsiya vositalari bilan ishlatish va uning cheklovlari.
keywords: bcf, bcfzip, BIM hamkorlik formati, muammolar, koordinatsiya, toʻqnashuv, topiklar, koʻrinish nuqtasi, surat, openbim, buildingsmart, muammolarni eksport qilish
from: 0de26175
---

BCF (BIM hamkorlik formati) — BIM vositalari orasida muammolarni uzatish uchun ochiq fayl formati. Koʻplab model koordinatsiyasi va loyihalash dasturlari `.bcfzip` faylini muammolar roʻyxati sifatida import qila oladi. MarkupCraft **BCF 2.1** formatida yozadi.

## Yaratish

1. {{ui:Belgilar}} yorligʻini oching.
2. Roʻyxatni yubormoqchi boʻlgan narsangizga filtrlang, masalan {{ui:Holat}} "Ochiq". Faqat roʻyxatdagi belgilar eksport qilinadi.
3. {{ui:BCF}} ni tanlang.
4. Har bir belgining surati olinguncha kuting ("BCF uchun suratlar olinmoqda (20 tadan 5)…").

Natija: "<name> markups.bcfzip" yuklab olinadi va holat satrida faylda nechta topik borligi va fayl hajmi koʻrsatiladi.

## Ichida nima bor

Har bir belgi bitta **topik** boʻladi:

| Topik maydoni | Nima bilan toʻldiriladi |
|---|---|
| Sarlavha | Punch raqami, mavzu va varaq, masalan "#4 Bulut A-101 — Qavat rejasi" |
| Turi | Belgi turi (Bulut, Chaqiruv, Uzunlik…) |
| Holat | Ochiq, Qabul qilingan, Rad etilgan yoki Yakunlangan |
| Yorliqlar | Belgi turi va varaq |
| Muallif va sanalar | Belgi muallifi, yaratilgan va oʻzgartirilgan sanalar |
| Kimga tayinlangan, muddat | Punch elementidan, agar u boʻlsa |
| Tavsif | Uning matni yoki shtamp matni, oʻlchangan qiymat, izoh, varaq va fayl |
| Izohlar | Har bir javob uchun bittadan, muallif va sana bilan |
| Surat | Belgining varaqdagi qismining rasmi |
| Koʻrinish | Belgining varaqdagi oʻrnining yuqoridan koʻrinishi |

Bir xil belgini qayta eksport qilish bir xil topik ID beradi, shuning uchun BCF ni import qiladigan vosita uni bir xil muammo sifatida taniydi.

## Import qilganda nima qaytadi

{{ui:BCF import qilish}} BCF 2.0, 2.1 va 3.0 fayllarini oʻqiydi (rasmiy buildingSMART 3.0 test fayllarining 19 tasida tekshirilgan: har bir topik oʻqildi, matnli izohga ega uchtasining izohlari ham oʻqildi). Oʻzingizning topikingiz boʻlsa (bir xil topik ID), yangi izohlarni javob sifatida qoʻshadi va yangi holatni oladi. Boshqa har qanday topik varaqda eslatma boʻladi: yorligʻi yoki fayl nomi qaysi varaqni koʻrsatsa oʻsha varaqda, aks holda ochiq varaqda. Uning sarlavhasi, tavsifi, mas'ul shaxsi va muddati eslatma matni, izohlari esa javoblar boʻladi.

| BCF topikida | MarkupCraft da |
|---|---|
| Sarlavha, tavsif, mas'ul shaxs, muddat | Eslatma matni |
| Matnli izohlar | Javoblar |
| Holat Open, Accepted, Rejected, Completed (Closed, Resolved, Done ham Completed sifatida hisoblanadi) | Belgining holati |
| Muallif va yaratilgan sana | Eslatma muallifi va sanasi |
| Kamera joylashuvi | Varaqdagi oʻrin, faqat yorliq yoki fayl nomi orqali varaqqa bogʻlangan topik uchun |
| Model tanlovi, yashirin qismlar, kesish tekisliklari, suratlar | Saqlanmaydi: varaqda ularni koʻrsatadigan model yoʻq |

## Eslatib oʻtish kerak boʻlgan cheklovlar

- **Varaq model emas.** Koʻrinish nuqtasi belgining qogʻozdagi oʻrnini koʻrsatadi va u qogʻoz metrlarida oʻlchanadi. U BIM vositasini modeldagi joyga olib bormaydi. Joyni topish uchun suratdan va varaq nomidan foydalaning.
- **Holatlar va turlar MarkupCraft ning oʻziniki** (Ochiq, Qabul qilingan, Rad etilgan, Yakunlangan; Bulut, Chaqiruv…). Fayl ularni BCF ruxsat bergani kabi e'lon qiladi, lekin oʻz qat'iy roʻyxatlari boʻlgan vosita ularni moslashtirishi yoki e'tiborsiz qoldirishi mumkin.
- **Import faqat izohlarni olib keladi, model koʻrinishlarini emas.** {{ui:BCF import qilish}} eksport qilingan belgilarga javoblar va holatlarni qoʻshadi, boshqa muammolar uchun eslatmalar yaratadi; model kamerasini koʻrsata olmaydi. Qarang: [Belgilar roʻyxati va eksport](topic:markups-list-and-export#import-bcf).
- Chizma koʻrib chiqish uchun belgilarni PDF sifatida qaytarish odatda soddaroq. BCF chizma izohlarini model koordinatsiyasi jarayoniga olib kirish uchun moʻljallangan.

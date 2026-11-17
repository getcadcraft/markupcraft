---
title: Belgilashlar roʻyxati, filtrlar va eksport
summary: Toʻplamdagi har bir belgilashni koʻring, varaq, muallif, holat va tur boʻyicha filtrlang, bittasiga oʻting va roʻyxatni CSV yoki BCF sifatida eksport qiling.
keywords: belgilashlar roʻyxati, roʻyxat, xulosa, xlsx, elektron jadval kitobi, kitob, pdf hisobot, bcf import, filtr, saralash, hisobot, eksport, csv, elektron jadval, bcf, bcfzip, masalalar, izohlar roʻyxati, oʻtish
from: 6c70261e
---

## Roʻyxatni ochish

Oʻngdagi {{ui:Markups}} yorligʻini tanlang. Ochiq barcha fayllarning har bir belgilashi roʻyxatda koʻrsatiladi: avval varaq tartibida, soʻng yaratilgan tartibida. Har bir qatorda koʻrinadi:

- belgilash rangidagi belgi, agar boʻlsa, uning kamchilik raqami («#4») va mavzusi,
- uning matni, muhr matni yoki oʻlchangan qiymati va izohi,
- varaq, muallif va sana,
- uning holati (yoki fayl bilan kelgan izohlar uchun «Faqat oʻqish»), javoblari boʻlsa, javoblar soni.

Roʻyxat ustidagi qator ularni sanaydi: «38 ta belgilash» yoki filtrlanganda «38 ta belgilashdan 12 tasi».

## Belgilashga oʻtish

Qatorni bosing. MarkupCraft oʻsha varaqni koʻrsatadi, belgilashni tanlaydi va u ekrandan tashqarida yoki juda kichik boʻlsa, unga kattalashtiradi. {{ui:Properties}} da uning tafsilotlari va oqimi bu yorliqqa qaytganingizda koʻrinadi.

## Filtrlash

Roʻyxat ustida toʻrtta menyu. Ular birgalikda ishlaydi.

| Menyu | Tanlovlar |
|---|---|
| {{ui:Sheet}} | Barcha varaqlar, Bu varaq (varaqlarni almashtirganingizda sizga ergashadi) yoki belgilashi bor istalgan varaq |
| {{ui:Author}} | Istalgan kishi yoki toʻplamdagi har bir muallif |
| {{ui:Status}} | Istalgan holat, Ochiq, Qabul qilingan, Rad etilgan, Bajarilgan |
| {{ui:Type}} | Istalgan tur yoki toʻplamdagi har bir belgilash turi |

Misollar:

- Bu varaqda hali nima ochiq: {{ui:Sheet}} «Bu varaq», {{ui:Status}} «Ochiq».
- Bitta maslahatchining izohlari: {{ui:Author}}: uning ismi.
- Barcha oʻlchovlar: {{ui:Type}} «Uzunlik» yoki «Maydon».

Roʻyxatda 2000 tagacha qator koʻrsatiladi; juda katta toʻplamlarda uni filtr bilan toraytiring.

## CSV ga eksport

Yorliqning yuqorisidagi {{ui:CSV}} ni tanlang. Siz «<name> markups.csv» faylini olasiz: belgilashlar hozir filtrlangan holatda, har bir qatorda bittadan, quyidagi ustunlar bilan:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- «Text» ustuni matn maydonlari va izohli belgilar soʻzlarini, muhr matnini yoki sanash guruhi nomini saqlaydi.
- «Measurement» ustuni uzunliklarni, maydonlar uchun «area, perimeter» ni va sanashlar uchun «group: n» ni saqlaydi.
- Sanalar UTC da toʻliq vaqt belgisi bilan.

Hammasini eksport qilish uchun avval barcha filtrlarni birinchi tanlovga qaytaring.

## Varaqdagi legenda

{{ui:Markups}} yorligʻidagi {{ui:Legend}} koʻrayotgan narsangizning yuqori oʻng burchagiga legenda qoʻyadi: varaqdagi har bir belgilash turini (mavzu va rang boʻyicha, masalan, «Bulut», «Savol» yoki «Rozetkalar») va ularning soni bilan sanab beruvchi quti. Sanash guruhi oʻz belgilarini sanaydi. Legenda chizish, koʻchirish yoki oʻchirishda sanashni davom ettiradi va chop etilganda hamda saqlanganda oʻsha paytdagi sonlar bilan saqlanadi.

Uni xuddi har qanday belgilash kabi koʻchiring va oʻlchamini oʻzgartiring. Uning {{ui:Properties}} da {{ui:Title}} ni oʻzgartiring yoki har bir varaqni sanash uchun {{ui:Counts}} ni {{ui:The whole set}} ga oʻrnating. Boʻsh joylar, boshqa legendalar va boshqa dasturlardan kelgan izohlar sanalmaydi.

## Oʻz ustunlaringiz va saralash

{{ui:Markups}} yorligʻidagi {{ui:Columns}} har bir belgilashga oʻz ustunlaringizni qoʻshadi: **matn**, **tanlov** (masalan, Soha: Mexanik, Elektr, Santexnika), **raqam** (masalan, Narx) yoki **sana**. Har biriga nom bering, turini tanlang, tanlov ustuni uchun variantlarni sanab chiqing va {{ui:Save columns}} ni tanlang.

- Ularni {{ui:Properties}} ostida toʻldiring: har bir ustun uchun u yerda maydon bor. Raqam ustuni faqat raqamlarni, sana ustuni esa sanani qabul qiladi.
- Roʻyxatda har bir belgilash ostida qiymatlar koʻrsatiladi, {{ui:Column}} filtri bitta qiymatni tanlaydi (yoki boʻsh boʻlgan belgilashlarni), {{ui:Sort}} esa roʻyxatni varaq boʻyicha emas, balki ustun, muallif, holat, tur yoki sana boʻyicha saralaydi.
- CSV va XLSX eksportlari ustunlarni odatdagilaridan keyin oladi. Ustunlar PDF bilan birga saqlanadi va uni qayta ochganingizda qaytib keladi.

## Xulosani eksport qilish: kitob yoki PDF

- {{ui:XLSX}} «<name> markup summary.xlsx» faylini yuklab oladi, uchta varaq bilan: **Belgilar** (roʻyxatdagi har bir belgilash uchun bitta qator, CSV bilan bir xil ustunlar), **Varaq boʻyicha** (har bir varaqda nechta belgilash borligi, ochiq va yopiq, hamda har bir turdan qanchadan, jami bilan) va **Kamchiliklar roʻyxati** (kamchilik elementlari boʻlganda).
- {{ui:PDF}} «<name> markup summary.pdf» faylini yuklab oladi: chop etish yoki yuborish uchun hisobot, toʻplam nomi, sana va roʻyxatdagi belgilashlar jadvali bilan (raqam, varaq, tur, mavzu, matn yoki izoh, oʻlchangan qiymat, muallif, holat va soʻnggi javob). Uzun matnlar qatorlarga oʻraladi; jadval sarlavhasi har bir sahifada takrorlanadi.

Ikkalasi ham roʻyxatni filtrlangan holida oladi, shuning uchun bitta varaq, bitta muallif yoki faqat ochiq elementlar haqida hisobot tayyorlash uchun avval filtrlang.

## BCF ga eksport

{{ui:BCF}} ni tanlang. MarkupCraft roʻyxatdagi har bir belgilashning oʻz varagidagi rasmini tayyorlaydi («BCF uchun suratlar tayyorlanmoqda (12 tadan 3 tasi)…»), soʻng «<name> markups.bcfzip» faylini yuklab oladi. Har bir belgilash bitta BCF mavzusiga aylanadi: holati, muallifi, sanalari, javoblari izoh sifatida, kamchilik elementidan masʼul va muddat, hamda surat bilan birga.

Uni chizmalarni koʻrib chiqish izohlarini BCF ni oʻqiydigan BIM muvofiqlashtirish vositalariga olib kelish uchun ishlating. Nimalar koʻchishi va nimalar koʻchmasligi: [BCF asoslari](topic:bcf-basics) da.

## BCF import qilish

{{ui:Import BCF}} BIM vositasidan .bcfzip (yoki .bcf) faylini oʻqiydi:

- MarkupCraft BCF eksportidan kelgan masalalar oʻz belgilashlarini qayta topadi: yangi javoblar oqimga qoʻshiladi va yangi holat oʻrnatiladi («Yopiq» «Bajarilgan» deb hisoblanadi). Mavjud javoblar ikki marta qoʻshilmaydi.
- Boshqa masalalar izohlarga aylanadi: sarlavhasi, tavsifi, muallifi va izohlari bilan. Izoh masalaning yorliqlari bergan raqam yoki nom boʻyicha varaqqa tushadi, aks holda ochiq varaqqa; BIM kamerasining qogʻozda joyi yoʻq, shuning uchun bunday izohlar varaqning yuqori chap burchagiga uyib qoʻyiladi, siz esa ularni koʻchirasiz.

Butun import bitta qadam: {{key:Mod+Z}} uni qaytaradi. Qarang: [BCF asoslari](topic:bcf-basics).

## Roʻyxat hali nimani qila olmaydi

- Roʻyxatni guruhlash (oʻrniga avval saralash, soʻng filtrlash).
- Roʻyxatda qiymatlarni tahrirlash ({{ui:Properties}} da tahrirlang; kamchilik maydonlari {{ui:Punch list}} yorligʻida tahrirlanadi).

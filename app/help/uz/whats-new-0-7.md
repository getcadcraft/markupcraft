---
title: 0.7 da nimalar yangi (oldingi)
summary: Maydon yorligʻidagi yangi jadvalda RFI lar, taqdim etish hujjatlari va kunlik jurnallar, muddatlar, muddati oʻtganlari qizil rangda, CSV va BCF, oflayn ish va birlashtirish; holatlarni oʻrnatadigan, javob beradigan va roʻyxatni eksport qiladigan yordamchilar; Sozlamalarga amal qiladigan birlik roʻyxatlari; yigʻiladigan panellar va siljiydigan dialoglar.
keywords: 0.7 da yangi, oldingi reliz, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi imkoniyatlar, maydon, maydon yozuvlari, RFI, soʻrov, taqdim etish hujjati, kunlik jurnal, kunlik kundalik, kechikkan, muddat, menga biriktirilgan, belgi, birlashtirish, oflayn, planshet, bcf, csv, yordamchi, mcp, belgi holati, javob, eksport, birliklar, birlik roʻyxatlari, yulduzcha, masshtablash, ixcham, panellar, dialoglar, portugal
from: f8578677
---

Bu MarkupCraft 0.7 da 0.6 bilan solishtirganda nimalar oʻzgarganini koʻrsatadi. Asosiy yangilik maydon yozuvlari: RFI lar, taqdim etish hujjatlari va kunlik jurnallar belgilaringiz yonida PDF ichida saqlanadi.

## Yangi

### RFI lar, taqdim etish hujjatlari va kunlik jurnallar

- **Maydon yorligʻi.** {{ui:Maydon}} yorligʻini oching va {{ui:RFI}}, {{ui:Taqdim etish hujjati}} yoki {{ui:Kunlik jurnal}} ni tanlang. RFI yoki taqdim etish hujjati tegishli boʻlgan varaqqa bosing yoki teging: joyni belgi koʻrsatadi. Kunlik jurnal ochiq varaqqa belgisiz qoʻyiladi ({{ui:Belgini qoʻyish}} keyinroq belgi qoʻshadi, {{ui:Belgini koʻchirish}} istalgan belgini koʻchiradi). Har bir yozuvning oʻz raqami bor (RFI-0001, SUB-0001, LOG-0001), sarlavhasi, matni, holati, mas’ul shaxsi, muddati, javoblar zanjiri va biriktirma nomlari roʻyxati. Qarang: [RFI lar, taqdim etish hujjatlari va kunlik jurnallarni kuzatish](topic:field-records).
- **Kechikkanini koʻring.** Roʻyxatni turi, holati, muddati (kechikkan, 7 kun ichida muddati, muddati bor yoki yoʻq), shu varaq yoki barcha varaqlar, matn boʻyicha qidiruv yoki {{ui:Menga biriktirilgan}} boʻyicha filtrlang. Muddati oʻtgan, hali kutilayotgan yozuv roʻyxatda va belgisida qizil rang bilan **Kechikkan** deb belgilanadi. Qarang: [Muhimini topish](topic:field-records#find-what-matters).
- **CSV va BCF.** {{ui:CSV}} roʻyxatdagi yozuvlarni elektron jadval sifatida yozadi; {{ui:BCF}} ularni har biri varaqdagi joyining suratiga ega boʻlgan BCF mavzulari sifatida yozadi. Ikkalasi ham filtrlarga amal qiladi. Qarang: [Eksport](topic:field-records#export).
- **Oflayn, va ikki nusxa bittaga aylanadi.** Yozuvlar PDF ichida saqlanadi va tarmoqni talab qilmaydi, shuning uchun saytdagi planshet ularni qoʻshishi, javob berishi va saqlashi mumkin. Ofisga qaytganda {{ui:Birlashtirish}} boshqa nusxadagi xuddi shu PDF yozuvlarini identifikatorlari boʻyicha qoʻshadi, bu bitta bekor qilish amali sifatida. Qarang: [Saqlash, oflayn ish va nusxalarni birlashtirish](topic:field-records#save-offline-and-merging-copies).

### AI yordamchilari

- **Yordamchi qila oladigan koʻproq ishlar.** CadCraft Studio orqali ulangan oʻz yordamchingiz endi belgining holatini oʻrnatishi (`markup_status`, u oʻz zanjirida qayd etiladi), zanjirda javob berishi (`markup_reply`) va {{ui:Belgilar}} roʻyxatini CSV yoki BCF sifatida eksport qilishi mumkin (`markups_export`, roʻyxat filtrlar bilan koʻrsatgan narsa). Har bir oʻzgarish bitta bekor qilish amali boʻladi va yordamchi nomi bilan imzolanadi. Qarang: [Yordamchi nimani soʻrashi mumkin](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Barcha dasturlarda

- **Birliklar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} da uzunlik, maydon, hajm, burchak va qiyalik uchun alohida roʻyxat bor, birliklarning taʼriflari bergan aniq oʻlchamlar bilan (AQSh surveyor futi oʻz birligi). Ishlatmaydigan birliklaringizni oʻchirsangiz, ular birlik roʻyxatlaridan chiqadi; birortasini yulduzcha bilan belgilasangiz, yangi ish shu birlikda boshlanadi. Fayl doim oʻz birligini saqlaydi. MarkupCraftda oʻlchov va joylashuv birliklari {{ui:Sozlamalar}} › {{ui:MarkupCraft}} da hamda masshtablash dialogidagi birlik oʻzgartirgich kalitlariga amal qiladi; yulduzcha MarkupCraftning oʻz sozlamalarini saqlamaguningizcha oʻlchov birligini belgilaydi. Masshtablashda kiritadigan haqiqiy masofa istalgan birlik belgisiga ega boʻlishi mumkin, masalan `3 yd` yoki `1.5 km`. Qarang: [Birliklar, kiritilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Zichroq tartib va yigʻiladigan panellar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Tartib zichligi}} › {{ui:Ixcham}} ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelda ingichka sarlavha satri bor: uni sudrab panelni ajratish yoki suzdirish mumkin, boshqa panel satriga tashlab bir ramkani yorliqlar sifatida ulashish mumkin, chetga surilishi uchun mahkamlash mumkin yoki yashirib, chetdan qaytarish mumkin. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Dialoglar siljiydi.** Dialogni sarlavha satridan sudrab chizmadan chetga suring; u qoldirgan joyiga qaytadi. Markazga qaytarish uchun sarlavha satriga ikki marta bosing. Qarang: [Dialogni siljitish](common:arrange-panels#move-a-dialog).
- **Yordamchilar uchun retseptlar.** Oʻz yordamchingiz uchun oʻnta tayyor soʻrov (chizmani tartibga keltirish, toʻplamni chizish, chizmalarni tekshirish, modelga savol berish, hajmlarni yigʻish, detal variantini sinash…), har biri chaqiradigan vositalar va kerakli ruxsatlar bilan. Ularning har biri bizning testlarimizda qayta ijro etiladi. Ilovalarda AI yoʻq. Qarang: [Yordamchilar uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Til}} da yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovaning har bir soʻzi bilan mavjud, ammo ona tili soʻzlovchi tomonidan hali koʻrib chiqilmagan qoralama sifatida. Yordam mavzulari inglizcha.
- **CadCraft Studio** yangilanishni tekshirish nega muvaffaqiyatsiz boʻlganini aytadi (tizimingiz uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo) va "Tayyor" deb qoʻymaydi. Yopgan Yangiliklar kartochkasini esa yangi reliz chiqmaguncha qaytarmaydi.

## Hozircha bu versiyada yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga oʻtkazildi, chunki sertifikat tekshiruvi hali yakunlanmagan. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download da tekshiring. Windowsda, agar SmartScreen oʻrnatgichni toʻxtatsa, {{ui:Batafsil maʼlumot}} ni tanlang, soʻng {{ui:Baribir ishga tushirish}}. Macda birinchi marta CadCraft Studio ustiga oʻng tugmani bosib {{ui:Ochish}} ni tanlang. CadCraft Studio hali ilova doʻkonida yoʻq va hali iPad yoki iPhone versiyasi yoʻq.
- Burchak va qiyalik roʻyxatlari {{ui:Birliklar}} da saqlanadi, lekin hali ularni oʻqiydigan birorta ham qism yoʻq.
- Maydon yozuvlari CadCraft Studio jonli seansida ulashilmaydi (jonli seanslar faqat belgilarni olib yuradi). Nusxalarni {{ui:Birlashtirish}} bilan birlashtiring.
- Birlashtirish yozuvni butun holda oxirgi oʻzgartirilgan nusxadan oladi: agar ikki kishi bitta yozuvning turli maydonlarini oʻzgartirgan boʻlsa, keyingi nusxaning maydonlari ustun turadi. Javoblar zanjiri va biriktirma nomlari birlashtiriladi.
- Biriktirmalar faqat nomlar; fayllar oʻz joyida qoladi. Yozuvlar uchun jamoalar, bildirishnomalar yoki bulut loyihalari yoʻq, va yordamchilarning hali yozuvlar uchun vositalari yoʻq.
- Maydon yozuvlari brauzerda telefon va planshet oʻlchamlarida, tarmoq uzilgan holda sinovdan oʻtkazilgan, lekin hali haqiqiy planshetda qoʻlda sinalmagan.
- 0.6 dan hali qolganlar: sahifa obyektlarini istalgan burchakka burish, yangi shakllarni toʻgʻridan-toʻgʻri sahifaga chizish, chiziqning shrifti yoki oʻlchamini oʻzgartirish va bir necha qatorga oqadigan matn. Sahifa tahrirlari bilan saqlangan nusxa hali Acrobatda ochilmagan.
- 0.5 dan hali qolganlar: sahifa oʻzgarishini bekor qilish (masalan, boʻsh sahifa qoʻshish), skanerlangan varaqlardan matn oʻqish va oʻz tarmogʻingizdan tashqaridagi jonli seanslar.

Qolgan hamma narsa [Hali qurilmagan narsalar](topic:not-built-yet) boʻlimida.

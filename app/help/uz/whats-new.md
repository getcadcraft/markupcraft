---
title: 0.7 versiyasidagi yangiliklar
summary: RFI, taqdim etish hujjatlari va kunlik jurnallar yangi Maydon yorligʻida, muddatlari bilan, muddati oʻtganlar qizil rangda; CSV va BCF, oflayn ish va Birlashtirish; holatlarni oʻrnatuvchi, javob beruvchi va roʻyxatni eksport qiluvchi yordamchilar; Sozlamalarga mos keladigan birlik roʻyxatlari; yigʻiladigan panellar va koʻchiriladigan dialoglar.
keywords: yangiliklar, nima yangi, relizlar eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi imkoniyatlar, maydon, maydon yozuvlari, rfi, soʻrov, taqdim etish hujjati, kunlik jurnal, kunlik kundalik, muddati oʻtgan, muddat, menga biriktirilgan, pin, birlashtirish, oflayn, planshet, bcf, csv, yordamchi, mcp, belgi holati, javob, eksport, birliklar, birlik roʻyxatlari, yulduzcha, kalibrlash, ixcham, panellar, dialoglar, portugalcha
from: 142e1a1e
---

Bu MarkupCraft 0.6 bilan solishtirganda 0.7 da oʻzgarganlar. Asosiy yangilik — maydon yozuvlari: RFI, taqdim etish hujjatlari va kunlik jurnallar, belgilaringiz yonida PDF ichida saqlanadi.

## Yangi

### RFI, taqdim etish hujjatlari va kunlik jurnallar

- **Maydon yorligʻi.** {{ui:Maydon}} yorligʻini oching va {{ui:RFI}}, {{ui:Taqdim etish hujjati}} yoki {{ui:Kunlik jurnal}} ni tanlang. RFI yoki taqdim etish hujjati tegishli boʻlgan joyda varaqni bosing yoki teging — belgi oʻrinni koʻrsatadi. Kunlik jurnal ochiq varaqqa belgisiz qoʻyiladi ({{ui:Belgini qoʻyish}} uni keyinroq qoʻshadi, {{ui:Belgini koʻchirish}} istalgan belgini koʻchiradi). Har bir yozuvning oʻz raqami bor (RFI-0001, SUB-0001, LOG-0001), sarlavhasi, matni, holati, mas'ul shaxsi, muddati, javoblar zanjiri va biriktirilgan fayl nomlari roʻyxati. Qarang: [RFI, taqdim etish hujjatlari va kunlik jurnallarni kuzatish](topic:field-records).
- **Kechikkanini koʻring.** Roʻyxatni turi, holati, muddati (muddati oʻtgan, 7 kun ichida muddati tugaydigan, muddati bor yoki yoʻq), shu varaq yoki barcha varaqlar, matn boʻyicha qidiruv yoki {{ui:Menga biriktirilgan}} boʻyicha filtrlang. Muddati oʻtgan va hali kutilayotgan yozuv roʻyxatda va oʻz belgisida qizil rangda **Muddati oʻtgan** deb belgilanadi. Qarang: [Muhimini topish](topic:field-records#find-what-matters).
- **CSV va BCF.** {{ui:CSV}} roʻyxatdagi yozuvlarni elektron jadval sifatida yozadi; {{ui:BCF}} ularni BCF mavzulari sifatida yozadi, har biri varaqdagi oʻrnining suratini oladi. Ikkalasi ham filtrlarga boʻysunadi. Qarang: [Eksport](topic:field-records#export).
- **Oflayn va ikki nusxani bittaga aylantirish.** Yozuvlar PDF ichida saqlanadi va tarmoqqa muhtoj emas, shuning uchun obyektdagi planshet ularni qoʻshishi, javob berishi va saqlashi mumkin. Ofisga qaytgach, {{ui:Birlashtirish}} xuddi shu PDF ning boshqa nusxasidagi yozuvlarni ularning identifikatorlari boʻyicha bitta bekor qilish qadami sifatida qoʻshadi. Qarang: [Saqlash, oflayn va nusxalarni birlashtirish](topic:field-records#save-offline-and-merging-copies).

### AI yordamchilari

- **Yordamchi endi koʻproq ish qila oladi.** CadCraft Studio orqali ulangan oʻz yordamchingiz endi belgining holatini oʻrnatishi (`markup_status`, uning zanjirida qayd etiladi), zanjirda javob berishi (`markup_reply`) va {{ui:Belgilar}} roʻyxatini CSV yoki BCF sifatida eksport qilishi mumkin (`markups_export`, filtrlar bilan koʻrsatilgan narsa). Har bir oʻzgarish bitta bekor qilish qadami boʻladi va yordamchi nomi bilan imzolanadi. Qarang: [Yordamchi nimani soʻrashi mumkin](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Har bir dasturda

- **Birliklar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} da uzunlik, maydon, hajm, burchak va qiyalik uchun alohida roʻyxat bor, birliklarning taʼriflari beradigan aniq oʻlchamlar bilan (AQSH surveyor futi oʻz birligi). Ishlatmaydigan birliklarni oʻchirib qoʻysangiz, ular birlik roʻyxatlaridan chiqadi; birini yulduzcha bilan belgilasangiz, yangi ish shu birlikda boshlanadi. Fayl doim oʻz birligini saqlaydi. MarkupCraft da {{ui:Sozlamalar}} › {{ui:MarkupCraft}} dagi oʻlchov va joylashuv birliklari hamda kalibrlash oynasidagi birlik shu kalitlarga boʻysunadi; yulduzcha MarkupCraft oʻz sozlamalarini saqlaguningizgacha oʻlchov birligini belgilaydi; kalibrlashda kiritgan haqiqiy masofa istalgan birlik belgisi bilan kelishi mumkin, masalan `3 yd` yoki `1.5 km`. Qarang: [Birliklar, kiritilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Zichroq tartib va yigʻiladigan panellar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Tartib zichligi}} › {{ui:Ixcham}} ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelning ingichka sarlavha paneli bor: uni sudrab panelni birlashtiring yoki suzdiring, boshqa panel sarlavhasiga tashlab bitta ramkani yorliqlar sifatida ulashing, chetga sirpanishi uchun mahkamlang yoki yashirib, chetdan qaytaring. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Dialoglar koʻchadi.** Dialogni sarlavha paneli orqali sudrab chizmadan chetga suring; u qoldirgan joyiga qaytadi. Markazga qaytarish uchun sarlavha panelini ikki marta bosing. Qarang: [Dialogni koʻchirish](common:arrange-panels#move-a-dialog).
- **AI yordamchilar uchun retseptlar.** Oʻz yordamchingiz uchun oʻnta tayyor soʻrov (chizmani tartibga keltirish, toʻplamni chizish, chizmalarni tekshirish, modelga savol berish, hajmlarni yigʻish, detal variantini sinash…), har biri chaqiradigan asboblar va kerakli ruxsatlar bilan, va har biri bizning testlarimiz tomonidan qayta ijro etiladi. Ilovalarda AI yoʻq. Qarang: [AI yordamchilari uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Til}} da yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovalarning har bir soʻzi bilan keladi, ona tilidagi kishi tomonidan hali koʻrib chiqilmagan qoralama sifatida. Yordam mavzulari ingliz tilida.
- **CadCraft Studio** yangilanishni tekshirish nega ishlamaganini aytadi (tizimingiz uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo) va "Tayyor" deb qoʻymaydi; yopib qoʻygan "Yangiliklar" kartochkasini esa yangi relizgacha qaytarmaydi.

## Bu versiyada hali yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga koʻchirildi, chunki sertifikat tekshiruvi hali tugamadi. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download saytida tekshiring. Windows da SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:Batafsil maʼlumot}} ni, soʻng {{ui:Baribir ishga tushirish}} ni tanlang. Mac da birinchi marta CadCraft Studio ni oʻng tugma bilan bosing va {{ui:Ochish}} ni tanlang. CadCraft Studio hali ilova doʻkonida yoʻq va hozircha iPad yoki iPhone versiyasi yoʻq.
- {{ui:Birliklar}} dagi burchak va qiyalik roʻyxatlari saqlanadi, ammo hali ularni oʻqiydigan joy yoʻq.
- Maydon yozuvlari CadCraft Studio jonli seansida ulashilmaydi (jonli seanslarda faqat belgilar uzatiladi); nusxalarni {{ui:Birlashtirish}} orqali birlashtiring.
- Birlashtirish yozuvni butunligicha oxirgi oʻzgartirilgan nusxadan oladi: agar ikki kishi bitta yozuvning turli maydonlarini oʻzgartirgan boʻlsa, keyingi nusxaning maydonlari gʻalaba qozonadi. Zanjirlar va biriktirilgan fayl nomlari birlashtiriladi.
- Biriktirmalar faqat nomlar; fayllar oʻz joyida qoladi. Yozuvlar uchun jamoalar, bildirishnomalar yoki bulutli loyihalar yoʻq, yordamchilar uchun yozuvlar asboblari hali yoʻq.
- Maydon yozuvlari brauzerda telefon va planshet oʻlchamlarida, tarmoq uzilgan holda sinovdan oʻtgan, ammo haqiqiy planshetda hali qoʻlda sinalmagan.
- 0.6 dan hali ham: sahifa obyektlarini istalgan burchakka burish, sahifaga yangi shakllarni toʻgʻridan-toʻgʻri chizish, chiziq shrifti yoki oʻlchamini oʻzgartirish va bir nechta qatorga oqadigan matn. Sahifa tahrirlari bilan saqlangan nusxa hali Acrobat da ochilmagan.
- 0.5 dan hali ham: sahifa oʻzgarishini bekor qilish (masalan, boʻsh sahifa qoʻshish), skanerlangan varaqlardan matnni oʻqish va oʻz tarmoqingizdan tashqari jonli seanslar.

Qolgan hamma narsa [Hali tayyor emas](topic:not-built-yet) boʻlimida.

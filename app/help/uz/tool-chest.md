---
title: Asboblar qutisi
summary: Uslubli belgilashni qayta ishlatiladigan asbob sifatida saqlang, u bilan chizing va oʻz qutingizni ofis bilan fayl sifatida ulashing.
keywords: asboblar qutisi, asboblar, asboblar toʻplami, maxsus asboblar, saqlangan belgilashlar, sevimlilar, ofis standarti, import, eksport, ulashish, json
from: 7dfa36e0
---

{{ui:Asboblar}} yorligʻida sizning **asboblar qutingiz** saqlanadi: koʻrinishi bilan saqlangan belgilashlar, ularni qayta chizish uchun tayyor. Asbob belgilashning turi, rangi, chiziq qalinligi, toʻldirilishi, shaffofligi, matn oʻlchami va mavzusini saqlaydi, shuningdek muhr matnini, sanagich guruhi nomini yoki matn maydoni yoki chaqiruvning boshlangʻich matnini.

## Boshlanishdagi asboblar

Yangi qutida oltita asbob boʻladi: "Qayta koʻrib chiqish buluti" (qizil), "Savol buluti" (koʻk), "Sariq belgi qalami", "RFI chaqiruvi" (koʻk, "RFI: " bilan boshlanadi), "Dalada tekshirish" ("Dalada tekshiring." degan toʻq sariq chaqiruv) va "Izohlar bilan tasdiqlangan" (muhr).

## Asbob bilan chizish

1. {{ui:Asboblar}} yorligʻini oching.
2. Asbobni bosing. U bosilgandek koʻrinadi va mos keladigan asboblar paneli tugmasi yoqiladi.
3. Odatdagidek chizing. {{ui:Xususiyatlar}} da "Asboblar qutisidagi <asbob> bilan chizilmoqda." yoziladi.

Qutidagi asbob yoqilgan paytda, chizishdan oldin {{ui:Xususiyatlar}} da kiritgan oʻzgarishlaringiz hozircha oʻsha asbobga qoʻllanadi, saqlangan asbobni yoki odatiy asbob sozlamalaringizni oʻzgartirmasdan. Asboblar paneli tugmasini tanlash yoki asbob tugmasini bosish oddiy asbobga qaytaradi.

## Oʻzingizniki boʻlgan asbobni saqlash

1. Belgilash chizing va uni xohlaganingizdek uslublang: rang, chiziq, toʻldirish, mavzu, muhr matni.
2. Uni tanlang.
3. {{ui:Asboblar}} yorligʻida {{ui:Tanlanganni asbob sifatida saqlash}} yoki {{ui:Xususiyatlar}} da {{ui:Asbob sifatida saqlash}} ni tanlang.
4. {{ui:Asbob nomi}} ni kiriting va {{ui:Asbobni saqlash}} ni tanlang.

Natija: asbob qutining oxiriga qoʻshiladi va {{ui:Asboblar}} yorligʻi uni koʻrsatish uchun ochiladi.

## Tanlovdan yaratilgan muhrlar

Bir nechta belgilashni tanlang (yoki {{ui:Mazmun}} asbobi bilan sahifa mazmunini) va {{ui:Yana}} da yoki kontekst menyusida {{ui:Tanlovni muhr sifatida saqlash…}} ni tanlang. Qutiga ularning hammasini oʻz ichiga oladigan bitta muhr tushadi ("Muhr: 3 ta belgilash birga"). Uni bosing, soʻng istalgan varaqda bosing: belgilashlar birga, bosgan nuqtangizga markazlashgan holda, sizning ismingiz bilan yangi belgilashlar sifatida tushadi; sahifa mazmuni oʻsha yerda sahifaga chiziladi. Bunday muhrlar boshqa asboblar kabi saqlanadi va qutingiz bilan ulashiladi.

## Asbobni olib tashlash

Asbob qatorining oxiridagi × ni tanlang, soʻng {{ui:Olib tashlash}} ni tanlang. Unda avvaldan chizilgan belgilashlar oʻz holicha qoladi.

## Qutining saqlanish joyi

Quti **shu brauzerda, shu kompyuterda** saqlanadi. Boshqa brauzer yoki kompyuterda oʻz qutisi boʻladi (oltita standart asbobdan boshlanadi); maxfiy oyna yopilganda uni unutadi, brauzer sozlamalarida ushbu sayt maʼlumotlarini tozalash esa uni oʻchiradi.

Agar brauzer uni saqlamasa (saqlash oʻchirilgan yoki joy toʻla boʻlsa), holat satrida shunday yoziladi: "Asboblar qutisini bu brauzerda saqlab boʻlmadi (saqlash oʻchirilgan yoki joy toʻla). Saqlab qolish uchun uni eksport qiling."

:::safari
Safari saytdan bir muddat foydalanmasangiz, uning saqlangan maʼlumotlarini tozalab yuborishi mumkin. Qutingizni vaqti-vaqti bilan eksport qiling, shunda uni keyin qayta import qilishingiz mumkin.
:::

**Qutingizni zaxira nusxa sifatida eksport qiling**, ayniqsa tayanadigan asboblaringizni yaratgandan keyin.

## Qutini ofis bilan ulashish

1. Asboblarni bir marta sozlang.
2. {{ui:Eksport}} ni tanlang. Siz "MarkupCraft tool chest.json" faylini olasiz.
3. Bu faylni ofis standartlarini saqlaydigan joyga qoʻying yoki tarqatib yuboring.
4. Boshqa hamma {{ui:Asboblar}} yorligʻida {{ui:Import}} ni tanlab, faylni belgilaydi.

Natija: "12 ta asbob "MarkupCraft tool chest.json" faylidan import qilindi." Bir qutidan kelgan asboblar eski nusxalarini almashtiradi, shuning uchun yangilangan ofis qutisini import qilish ushbu asboblarni ikki baravar koʻpaytirmasdan yangilaydi; yangi asboblar qoʻshiladi. Quti 500 tagacha asbobni saqlaydi.

MarkupCraft import qilingan fayldagi har bir qiymatni tekshiradi va ishlata olmaydiganlarini oʻtkazib yuboradi ("2 ta oʻtkazib yuborildi (yaroqsiz)"). Quti boʻlmagan fayllar rad etiladi: "Bu fayl MarkupCraft asboblar qutisi emas." yoki "Bu fayl asboblar qutisi emas (u JSON emas)."

Boshqa belgilash dasturlaridan olingan asboblar qutisi fayllarini import qilib boʻlmaydi.

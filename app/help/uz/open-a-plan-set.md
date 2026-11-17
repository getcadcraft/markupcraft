---
title: Reja toʻplamini ochish va varaqlar orasida harakatlanish
summary: Bitta yoki bir nechta PDF oching yoki boʻsh sahifalardan boshlang, varaqlarni raqam yoki nom boʻyicha toping, kattalashtiring va suring, fayl notoʻgʻri nomlaganda varaqni qayta nomlang.
keywords: ochish, yangi, boʻsh sahifa, boʻsh varaq, eskiz, katak, nomsiz, reja toʻplami, varaqlar, sahifalar, eskizlar, sahifa yorliqlari, varaq raqami, sarlavha bloki, qayta nomlash, harakatlanish, kattalashtirish, surish, moslash, varaqlarni qidirish
from: 1e7f4d50
---

## Toʻplamni ochish

1. Asboblar panelida {{ui:Ochish}} ni tanlang yoki {{key:Mod+O}} ni bosing.
2. Fayl tanlagichda reja toʻplamining har bir PDFini tanlang ({{pick:mac=⌘ ni bosib turib har bir faylni bosing|windows linux=Ctrl ni bosib turib har bir faylni bosing}}, yoki Shift bilan diapazon tanlang), soʻng tasdiqlang.
   Yoki fayllarni {{pick:mac=Finder|windows=File Explorer|linux=fayl boshqaruvchingiz}} dan varaqlar maydoniga sudrab tashlang. Sudrash paytida "PDFlarni ochish uchun tashlang" paydo boʻladi.
3. Holat satri "<file> ochilmoqda…" deguncha kuting. Katta fayllar uchun u sanaydi: "(60 ta varaqdan 10 tasi)".

Natija: {{ui:Varaqlar}} roʻyxati ochilgan tartibda har bir fayldagi har bir sahifani koʻrsatadi va holat satri shunday deydi: "3 ta fayl ochildi (toʻplamda 42 ta varaq)." Agar fayllarda izohlar boʻlsa, oʻqilgan izohlar sonini ham qoʻshadi.

Keyinroq toʻplamga yana fayllar qoʻshish uchun ularni xuddi shunday oching. Ular roʻyxat oxiriga qoʻshiladi.

## Boʻsh sahifalardan boshlash

Chizish yoki eslatma yozish uchun PDF ochmasdan boʻsh sahifa yarating:

1. Asboblar panelida {{ui:Yangi}} ni tanlang, yoki boshlash ekranida {{ui:Boʻsh sahifadan boshlang}} ni, yoki brauzeringiz ruxsat bersa {{key:Mod+N}} ni bosing (ish stoli ilovasi va Studio buni doim bajaradi).
2. {{ui:Qogʻoz oʻlchami}} ni tanlang: Letter, Tabloid yoki ANSI B, ARCH D, ARCH E, A4, A3 yoki A1, va {{ui:Tik}} yoki {{ui:Yotiq}}.
3. {{ui:Setka}} ni tanlang: {{ui:Yoʻq}}, {{ui:Nuqtalar}} yoki {{ui:Kataklar}}. Setka 1/4 in da chiziladi, dyuymli qogʻozda har 1 in da qalinroq chiziq bilan; metrik qogʻozda esa har 5 mm da, har 10 mm da qalinroq chiziq bilan. U sahifaga chop etiladi.
4. {{ui:Sahifalar}} sonini kiriting: 1 dan 20 gacha, soʻng {{ui:Yaratish}} ni tanlang.

Natija: "Untitled-1.pdf" nomli yangi PDF (keyin "Untitled-2.pdf" va hokazo) boshqa fayl kabi ochiladi, shu kompyuterda yaratilgan. Unda har bir asbob ishlaydi va {{ui:Saqlash}} "Untitled-1 (marked up).pdf" ni yuklab oladi. MarkupCraft tanlovlaringizni keyingi safar uchun eslab qoladi.

Sahifalarda masshtab yoʻq: holat satrida "Kalibrlanmagan" yoziladi. Setka masshtab emas. Oʻlchash uchun avval varaqni kalibrlang yoki masshtabni tanlang; qarang [Kalibrlash va oʻlchash](topic:calibrate-and-measure).

Boʻsh toʻplamga sahifa qoʻshish uchun uning varaqlaridan birini oching va {{ui:Varaqlar}} roʻyxati ostida {{ui:Boʻsh sahifa qoʻshish}} ni tanlang. Yangi sahifa xuddi shu qogʻoz va setkaga ega boʻladi va oxiriga qoʻyiladi. Har bir sahifa oʻzgarishi kabi uni bekor qilib boʻlmaydi; qarang [Sahifalarni chop etish va oʻzgartirish](topic:pages-and-printing).

## Varaqlar qanday nom oladi

MarkupCraft har bir varaqni "<varaq raqami> — <sarlavha>" deb nomlaydi, masalan "A-101 — Qavat rejasi", quyidagilardan birinchi topilgani boʻyicha:

1. {{ui:Varaqni qayta nomlash}} bilan siz yozgan nom (quyida).
2. PDFning oʻz sahifa yorliqlari, agar PDFni yaratgan odam ularni oʻrnatgan boʻlsa (masalan "A-101").
3. Sarlavha bloki: MarkupCraft sahifa matnini oʻqiydi va varaq raqamiga oʻxshash narsani qidiradi (A-101, A1.01, M-201A, KA1-1). U pastki oʻng burchak, oʻng chekka va pastki qatorni afzal koʻradi va yaqinidagi eng katta yozuvni sarlavha sifatida oladi.
4. Aks holda fayl nomi va sahifa: "Rejalar — 3-sahifa".

Qaysi biri ishlatilganini koʻrish uchun {{key:Esc}} ni hech narsa tanlanmaguncha bosing va {{ui:Tanlash}} yoqilgan boʻlsin, soʻng {{ui:Xususiyatlar}} ga qarang: "Oʻqilgan manba" maydoni "Sahifa yorligʻi", "Sarlavha bloki", "Fayl nomi" yoki "Qoʻlda kiritilgan" deb yozadi.

:::note
Skanerlangan varaqlarda va yozuvlari chiziq sifatida eksport qilingan PDFlarda oʻqiladigan matn yoʻq. Ular qayta nomlanmaguncha fayl va sahifa boʻyicha nomlanadi. MarkupCraft hozircha rasmlardan matn oʻqiy olmaydi.
:::

## Varaqlar orasida harakatlanish

- {{ui:Varaqlar}} da varaqni bosing.
- Keyingi varaq uchun {{key:PageDown}}, oldingisi uchun {{key:PageUp}} ni bosing yoki varaq ostidagi satrdagi strelkalardan foydalaning.
- {{ui:Varaqlarni qidirish}} ga yozing: raqamning bir qismi ("A-2"), sarlavha soʻzi ("tom") yoki fayl nomi. Yozganingizda roʻyxat torayadi ("42 tadan 4 tasi"). Birinchi mosni ochish uchun {{key:Enter}} ni bosing. Hamma varaqlarni qayta koʻrish uchun qutini tozalang.

Har bir varaq toʻplamni yopguncha oʻz kattalashtirishi va joylashuvini saqlaydi.

## Kattalashtirish va surish

:::mouse
- **Kattalashtirish:** varaq ustida gʻildirakni aylantiring. U kursor atrofida kattalashadi. Yoki {{key:Plus}} va {{key:Minus}} ni bosing (shuningdek {{key:Mod}} bilan), yoki kattalashtirish tugmalaridan foydalaning. Kattalashtirish maydoniga aniq foizni kiriting.
- **Moslash:** {{ui:Sahifaga moslash}} ({{key:Mod+0}}) butun varaqni koʻrsatadi; {{ui:Kenglikka moslash}} ({{key:Mod+9}}) kenglikni toʻldiradi.
- **Surish:** oʻrta tugma (gʻildirak) bilan yoki oʻng tugma bilan suring, yoki {{key:Space}} ni ushlab suring, yoki {{ui:Surish}} ({{key:H}}) ni tanlab suring. Hech narsa tanlanmagan boʻlsa, strelka tugmalari varaqni ham siljitadi.
:::

:::mac mouse
Mac trackpadida ikki barmoq bilan aylantirish kattalashtiradi (varaqni surmaydi). Surish uchun {{key:Space}} ni ushlab bir barmoq bilan suring yoki {{key:H}} bilan {{ui:Surish}} ga oʻting. Chrome, Edge va Firefoxda chimchilash kattalashtiradi.
:::

:::touch
- **Kattalashtirish va surish:** varaq ustiga ikki barmoq qoʻying. Ular orasidagi nuqta atrofida kattalashtirish uchun yoying yoki chimchilang, birga harakatlantirib suring. Ikkalasi bir vaqtda sodir boʻladi.
- **Bir barmoq bilan surish:** avval {{ui:Surish}} ni tanlang. Boshqa asbob bilan bir barmoq chizadi yoki tanlaydi.
- {{ui:Sahifaga moslash}} va {{ui:Kenglikka moslash}} varaq ostidagi satrda.
:::

Siz varaqdan ancha tashqariga, 6400% gacha kattalashtirishingiz mumkin. Harakatni toʻxtatganingizdan bir oz keyin varaq qayta aniq chiziladi.

## Xatchoʻplar

{{ui:Xatchoʻplar}} {{ui:Varaqlar}} panelining yuqorisida turadi va ochiq varaq tegishli boʻlgan PDFning xatchoʻplarini (konturini) koʻrsatadi. Biridan tanlab uning sahifasiga oʻting. Qalam belgisi xatchoʻpni qayta nomlaydi, xoch esa uni oʻchiradi. {{ui:Varaqlardan tuzish}} har bir varaq uchun bitta xatchoʻp yaratadi, varaqlar roʻyxatida koʻrsatilganidek nomlanadi (varaq raqami va sarlavha), va {{ui:Shu varaq uchun qoʻshish}} siz turgan varaq uchun bittasini qoʻshadi. Oʻzgarishlar faylning saqlanmagan ishining bir qismi: {{ui:Saqlash}} ularni nusxaga yozadi va ularni har bir PDF koʻruvchi koʻrsatadi.

## Koʻrinishni burish

Varaq ostidagi satrning oʻng tomonidagi ikkita burish tugmasi koʻrinishni chorak aylanish bilan ikki tomonga buradi, yon tomonga chizilgan varaq uchun. Faqat koʻrinish buriladi: PDF va uning belgilashlari oʻz holicha qoladi, keyingi varaq esa oʻz PDFi qanday boʻlsa shunday ochiladi (har bir varaq toʻplam ochiq boʻlganda oʻz burilishini eslab qoladi). Burilgan koʻrinishda qoʻshgan matningiz koʻrganingizdek tik oʻqiladi. Saqlangan PDFda sahifaning oʻzini burish uchun {{ui:Sahifalar}} ni, soʻng {{ui:Sahifani soat yoʻnalishi boʻyicha burish}} ni tanlang; qarang [Sahifalarni chop etish va oʻzgartirish](topic:pages-and-printing).

## Varaqni qayta nomlash

Varaq nomi notoʻgʻri yoki yoʻq boʻlganda:

1. Varaqni koʻrsating.
2. {{key:Esc}} ni hech narsa tanlanmaguncha bosing va {{ui:Tanlash}} asbobi yoqilgan boʻlsin. {{ui:Xususiyatlar}} endi varaqni koʻrsatadi.
3. {{ui:Varaqni qayta nomlash}} ni tanlang.
4. {{ui:Varaq raqami}} va {{ui:Sarlavha}} ni kiriting, soʻng {{ui:Saqlash}} ni tanlang.

Natija: varaqlar roʻyxati, varaq ostidagi satr va belgilashlar roʻyxati hammasi yangi nomdan foydalanadi, "Oʻqilgan manba" esa "Qoʻlda kiritilgan" deydi. Qayta nomlashni {{key:Mod+Z}} bilan bekor qilish mumkin.

Asl holatga qaytish uchun {{ui:Varaqni qayta nomlash}} ni yana oching, ikkala qutini tozalang va {{ui:Saqlash}} ni tanlang.

Saqlaganingizda, kiritilgan varaq raqami PDF ichida sahifa yorligʻiga aylanadi, shuning uchun boshqa PDF koʻruvchilar sahifa qutisida "A-101" ni koʻrsatadi. Agar fayldagi biron sahifaga raqam bersangiz, nusxadagi har bir sahifa yorliq oladi (kiritilgan raqami, aks holda eski yorligʻi, aks holda sahifa raqami). Kiritilgan sarlavha MarkupCraft uchun saqlanadi, lekin boshqa koʻruvchilar uni koʻrsatmaydi.

## TakeoffCraftga PDF yuborish yoki uni bu yerga olib kelish

TakeoffCraft xuddi shu joyda ochiq boʻlganda (lab, Try yoki onlayn ilovalar), varaq ostidagi satrda {{ui:TakeoffCraft orqali ochish}} boʻladi. U varaqning PDFini TakeoffCraftda yangi yorliqda, bu yerda ochilgandek ochadi, shunda miqdorlarni oʻlchashingiz mumkin. Belgilashlaringiz shu yerda qoladi; ularni odatdagidek saqlang.

TakeoffCraftdagi {{ui:MarkupCraft}} tugmasi teskari yoʻnalishda xuddi shunday ish qiladi: PDF bu yerda {{ui:Ochish}} tanlangandek ochiladi. Agar brauzer yangi yorliqni bloklasa, bu sayt uchun pop-up oynalariga ruxsat bering va tugmani qayta bosing.

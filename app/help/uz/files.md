---
title: MarkupCraft ochadigan va saqlaydigan fayllar
summary: Kiruvchi PDF lar, belgilangan PDF nusxasi va CSV, BCF hamda asboblar toʻplami fayllari; ularning qayerga borishi, onlayn va oflaynda.
keywords: pdf, ochish, saqlash, eksport, yuklab olish, csv, bcf, bcfzip, json, asboblar toʻplami, fayl turlari, formatlar, yuklash, parol, shifrlangan
from: b3045b4c
---

## MarkupCraft nimalarni ochadi

| Fayl | Qanday | Nima boʻladi |
|---|---|---|
| PDF (`.pdf`) | {{ui:Ochish}}, {{key:Mod+O}} yoki varaq sohasiga tashlang. Bir vaqtda bir nechta fayl ham mumkin. | Har bir sahifa varaqqa aylanadi. Faylda mavjud belgilar qayta oʻqiladi (quyida). |
| Asboblar toʻplami (`.json`) | {{ui:Asboblar}} yorligʻi, soʻng {{ui:Import}} | Asboblar toʻplamingizga asboblar qoʻshiladi. Qarang: [Asboblar toʻplami](topic:tool-chest). |

Boshqa barcha fayllar rad etiladi: holat satrida "MarkupCraft faqat PDF fayllarni ochadi." chiqadi. Aralash fayllarni tashlasangiz, PDF lar ochiladi va holat satrida PDF boʻlmagan fayllar soni koʻrsatiladi.

### PDF ichidagi mavjud belgilar

- **MarkupCraft saqlagan belgilar** aynan shunday qaytadi: turi, uslubi, muallifi, sanalari, holati, javoblari, kamchilik raqami, varaqning masshtabi va siz kiritgan varaq nomlari.
- **Boshqa PDF dasturlaridagi izohlar** ham oʻqiladi. Toʻrtburchaklar, ellipslar, chiziqlar va strelkalar, polichiziqlar, koʻpburchaklar, qalam (siyoh) chiziqlari, matn qutilari va yopishqoq eslatmalar oddiy, tahrirlanadigan MarkupCraft belgilariga aylanadi. Ularning javoblari va koʻrib chiqish holatlari ham saqlanadi.
- **Qolgan hammasi** (matnni tanlash orqali yasalgan matn ajratmalari, boshqa dasturlarning muhrlari va boshqa turlar) oʻz holicha koʻrsatiladi va faqat oʻqish uchun belgilanadi. Uni tanlash, belgilar roʻyxatida koʻrish va unga javob yozish mumkin, ammo koʻchirish, oʻzgartirish yoki oʻchirish mumkin emas.
- Havolalar va forma maydonlariga tegilmaydi va ular roʻyxatga kiritilmaydi.
- Boshqa dastur saqlagan masshtab (oʻlchov oynasi) MarkupCraft uning birligini tushunsa, varaqning masshtabi sifatida ishlatiladi.

### Ochilmaydigan fayllar

- Ochish uchun parol talab qilinadigan PDF: «"nom" ochish uchun parol talab qiladi. Himoyasiz nusxani oching.»
- Shikastlangan yoki haqiqiy PDF boʻlmagan fayl: «"nom" PDF sifatida oʻqib boʻlmadi (…)».
- Ochiladigan, ammo oʻzgartirishdan himoyalangan PDF muammosiz ochiladi. Uni saqlash rad etiladi (quyida qarang).

Bir vaqtda bir nechta fayl ochilganda, ishlaydiganlari ochiladi va "Baʼzi fayllar ochilmadi" nomli oynada qolganlari roʻyxatlanadi.

## MarkupCraft nimani saqlaydi

Saqlash doim yangi faylni **yuklab olish** demakdir. Veb-sahifa kompyuteringizdagi faylni ustiga yoza olmaydi va MarkupCraft asl faylingizni hech qachon oʻzgartirmaydi.

| Siz tanlaysiz | Siz olasiz | Izoh |
|---|---|---|
| {{ui:Saqlash}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Asl PDF nusxasi, har bir belgi haqiqiy PDF izohi sifatida yozilgan holda. "(marked up)" faylni qayta saqlasangiz, nomi oʻzgarmaydi; hech qachon "(marked up) (marked up)" boʻlmaydi. Qarang: [Belgilangan PDF ni saqlash](topic:save-the-marked-up-pdf). |
| {{ui:Belgilar}} yorligʻi, soʻng {{ui:CSV}} | "<name> markups.csv" | Belgilar roʻyxatdagidek (filtrlar qoʻllanadi). |
| {{ui:Belgilar}} yorligʻi, soʻng {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 BIM muvofiqlashtirish vositalari uchun, har bir belgi uchun surat bilan. Qarang: [BCF asoslari](topic:bcf-basics). |
| {{ui:Kamchiliklar roʻyxati}} yorligʻi, soʻng {{ui:CSV ga eksport}} | "<name> punch list.csv" | Kamchilik bandlari raqam tartibida. |
| {{ui:Asboblar}} yorligʻi, soʻng {{ui:Eksport}} | "MarkupCraft tool chest.json" | Asboblar toʻplamingiz, ulashish yoki saqlash uchun. |

"<name>" — ochilgan birinchi PDF faylining nomi, ".pdf" qoʻshimchasisiz.

CSV fayllarni istalgan elektron jadval dasturida ochish mumkin. Ular UTF-8 kodlashda, elektron jadvallar izlaydigan belgi (BOM) bilan yoziladi, shuning uchun urgʻu belgili nomlar toʻgʻri chiqadi. =, +, - yoki @ bilan boshlanadigan katak oldiga apostrof qoʻyiladi, shunda elektron jadval uni formula sifatida bajarmaydi.

## Yuklab olishlar qayerga boradi

Brauzeringiz hal qiladi: odatda Yuklab olishlar jildiga, yoki har safar soʻraydi, agar shunday sozlagan boʻlsangiz. Qarang: [Brauzerlar va kompyuterlar](common:browsers#what-differs-between-browsers).

:::chromium
Bir toʻplamning oʻzgargan barcha fayllarini bir vaqtda saqlaganingizda, Chrome va Edge bu saytga bir nechta fayl yuklab olishga ruxsat berish-bermasligini soʻrashi mumkin. {{ui:Ruxsat berish}} tugmasini bosing, aks holda faqat birinchi nusxani olasiz.
:::

:::safari
iPad da Safari har bir yuklab olishdan oldin soʻraydi va faylni Fayllar ilovasiga, Yuklab olishlar ostiga joylaydi. Mac da fayl Safari sozlamalarida belgilangan jildga tushadi.
:::

## Onlayn va oflayn

- **PDF lar bu kompyuterdan hech qachon chiqmaydi**, onlayn yoki oflaynda. Hech qayerga yuklanmaydi.
- PDF oʻquvchisi birinchi marta PDF ochganingizda yuklanadi («PDF oʻquvchisi yuklanmoqda…»), PDF yozuvchisi esa birinchi marta saqlaganingizda («PDF yozuvchisi yuklanmoqda…») yoki izohli faylni ochganda yuklanadi.
- Ulanish boʻlsa, ikkalasi ham veb-saytdan yuklanadi.
- **Ulanishsiz ishlash uchun**, ulanganingizda yuqoridagi satrda {{ui:Oflayn uchun saqlash}} ni tanlang. Tugma «Saqlanmoqda: N / M» deb sanaydi, soʻng «Oflayn tayyor» deydi. Bu nusxaga PDF oʻquvchisi, PDF yozuvchisi (jami taxminan 6 MB) va shu yordam kiradi, shuning uchun keyin PDF larni ochish, belgilash va saqlash shu brauzerda oflaynda ham ishlaydi.
- Agar tugma «Saqlab boʻlmadi» desa, ba'zi fayllar yuklanmagan: ulanishni tekshiring va yana bosing. Agar «Oflayn mavjud emas» desa, bu brauzer oynasi oflayn nusxa saqlay olmaydi (shaxsiy oynalar va ayrim boshqariladigan kompyuterlar); oddiy oynadan foydalaning.
- Nusxani yangilash yoki olib tashlash uchun «Oflayn tayyor» tugmasini bosing va «Qayta saqlash (eng yangi versiyani olish)» yoki «Oflayn nusxani olib tashlash» ni tanlang. Batafsil: [Oflaynda ishlash](common:offline).

:::offline
Siz oflaynsiz. Yuqoridagi satrda «Oflayn tayyor» yozilgan boʻlsa, hamma narsa, jumladan saqlash ham ishlaydi. Aks holda, va bu oynada hali saqlamagan boʻlsangiz, {{ui:Saqlash}} «PDF yozuvchisini yuklab boʻlmadi» xatosi bilan tugashi mumkin. Belgilaringiz hali yorliqda turibdi: yorliqni ochiq qoldiring, ulanishni tiklang va {{ui:Saqlash}} ni yana tanlang.
:::

## Bilish kerak boʻlgan narsalar

- Katta reja toʻplamlari ochilishi uzoq davom etadi: MarkupCraft varaq raqamlarini topish uchun har bir sahifaning matnini oʻqiydi. Holat satri varaqlarni sanab boradi.
- Bir PDF ni ikki marta ochsangiz, uning varaqlari ikki marta qoʻshiladi. Bunday boʻlsa, toʻplamni yoping va qayta oching.
- {{ui:Yopish}} barcha ochiq fayllarni bir vaqtda yopadi. Saqlanmagan belgilari boʻlsa, soʻraydi: {{ui:Bekor qilish}}, {{ui:Saqlamasdan yopish}} yoki {{ui:Avval nusxalarni saqlash}}.
- Bulutli saqlash hali mavjud emas va ish stoli versiyalari ham hali yoʻq. PDF larni boshqa loyiha fayllaringiz bilan saqlang va odatdagidek zaxiralang. Qarang: [Fayllaringiz qayerga boradi](common:your-files).

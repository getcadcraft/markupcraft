---
title: Boshqa belgilash dasturlaridan kelish
summary: Ish stoli PDF belgilash dasturining odatlari MarkupCraft'ga qanday mos keladi va odamlarni chalgʻitadigan farqlar.
keywords: almashtirish, koʻchish, migratsiya, tanish, ish stoli pdf belgilash, asboblar qutisi, belgilar roʻyxati, qoplama, seanslar, profil, yorliqlar, farqlar
from: c8f323e1
---

Agar chizmalarni Bluebeam Revu'da koʻrib chiqsangiz (yoki PDF'larga boshqa ish stoli PDF dasturida izoh qoʻysangiz), MarkupCraft'ning koʻp qismi tanish boʻladi: bulutlar, izohli belgilar, asboblar qutisi, belgilar roʻyxati, javobli holatlar, oʻlchangan oʻlchovlar, varaq qoplamalari. Fayllar bilan ishlash usuli asosiy farq, shuning uchun qolganini oʻtkazib yuborsangiz ham keyingi boʻlimni oʻqing.

## Asosiy beshta farq

1. **Saqlash yangi fayl yaratadi.** MarkupCraft brauzerda ishlaydi va diskingizdagi PDF'ni ustiga yoza olmaydi. {{ui:Saqlash}} "<name> (marked up).pdf" ni yuklaydi, asl fayl oʻz holicha qoladi. Keyingi safar "(marked up)" nusxani oching va eski nusxalarni oʻzingiz tozalang.
2. **PDF saqlanganda saqlanadi.** Shu vaqtgacha bu brauzerdagi tiklash nusxasi halokat yoki yopilgan tabdan keyin belgilaringizni saqlaydi va keyingi safar MarkupCraft uni qaytarishni taklif qiladi. Bu xavfsizlik toʻri: koʻrib chiqishni saqlash uchun PDF'ni saqlang.
3. **Profilingiz brauzerda yashaydi.** Muallif ismingiz, asbob sozlamalaringiz va asboblar qutingiz shu kompyuterdagi shu brauzerda saqlanadi. Boshqa brauzer yoki kompyuter yangidan boshlaydi, sayt maʼlumotlarini tozalash esa ularni oʻchiradi. Zaxira sifatida asboblar qutingizni eksport qiling. Qarang: [Bu brauzerda nima saqlanadi](topic:browser-storage).
4. **Hali umumiy seanslar yoʻq.** Jonli, umumiy koʻrib chiqish seansi va bulutdagi loyiha yoʻq. Koʻrib chiqish PDF bilan koʻchadi: saqlang, nusxani yuboring, keyingi odam javob beradi va saqlaydi.
5. **Masshtab faqat har bir varaq uchun.** Varaq ichida koʻrinish oynalari yoʻq va "bu masshtabni barcha sahifalarga qoʻllash" degan narsa yoʻq. Oʻlchaydigan har bir varaqni kalibrlang.

## Odatdan odatga

| Siz odatlangan | MarkupCraft'da |
|---|---|
| Sahifa eskizlari paneli, sahifa yorliqlari | Chapda {{ui:Varaqlar}}. Nomlar sahifa yorliqlaridan olinadi yoki sarlavha blokidan oʻqiladi; ularni {{ui:Varaqni qayta nomlash}} bilan tuzating. |
| Bir nechta PDF'ni toʻplam sifatida ochish | Hammasini bir vaqtda oching; ular bitta roʻyxatga aylanadi. Toʻplam fayli saqlanmaydi: keyingi safar oʻsha PDF'larni oching. |
| Asbob setlari bilan asboblar qutisi | {{ui:Asboblar}} tabi: har bir brauzerda bitta quti, uslubi va mavzusi bilan saqlangan asboblar. Ulashish {{ui:Eksport}} va {{ui:Import}} orqali JSON fayl sifatida. Boshqa dasturlarning asbob seti fayllarini import qilib boʻlmaydi. |
| Xususiyatlar paneli | {{ui:Xususiyatlar}} tabi: holat, mavzu, izoh, uslub, javoblar va kamchilik elementi bitta joyda. |
| Ustunli belgilar roʻyxati | Varaq, muallif, holat va tur boʻyicha filtrli {{ui:Belgilar}} tabi. CSV yoki BCF eksport qiling. Maxsus ustunlar va hali PDF yoki ish kitobi xulosasi yoʻq. |
| Holat va koʻrib chiqish holati | {{ui:Holat}}: Ochiq, Qabul qilingan, Rad etilgan, Yakunlangan. Maxsus holatlar toʻplami yoʻq. Standart koʻrib chiqish holatlari sifatida saqlanadi. |
| Belgilardagi javoblar | {{ui:Xususiyatlar}} dagi "Javoblar" oqimi; holat oʻzgarishlari unda qayd etiladi. Yuborilgan javobni tahrirlab boʻlmaydi. |
| Kalibrlash, soʻng uzunlik, maydon, sanash | {{ui:Kalibrlash}}, {{ui:Uzunlik}} ({{key:M}}), {{ui:Maydon}} ({{key:Q}}, maydon va perimetrni beradi), {{ui:Sanash}} ({{key:U}}). Hali burchak, radius, hajm, polichiziq uzunligi yoki kesiklar yoʻq. |
| Sahifa qoplamalari | {{ui:Solishtirish}} tabi: eski uchun qizil, yangi uchun koʻk, ikki nuqta boʻyicha tekislash. Avtomatik "hujjatlarni solishtirish" bulutlari yoʻq. |
| Muhrlar | {{ui:Muhr}}: oltita oʻrnatilgan muhr va maxsus matn, ismingiz va sana bilan imzolangan. Hali rasm yoki imzo muhrlari yoʻq. |
| Kamchilik yoki muammolarni kuzatish | {{ui:Kamchiliklar roʻyxati}} tabi: raqamlangan elementlar, biriktirilgan shaxs, muddat va holat; CSV eksport. |
| Jonli hamkorlik seansi | Hali mavjud emas. Saqlangan PDF'ni aylantiring. |
| Tekislash | Hali qurilmagan. Belgilar boshqa koʻrsatuvchilar koʻrsatadigan va chop etadigan izohlar boʻlib qoladi. |
| Belgilar uchun qatlamlar | Hali qurilmagan. Izohlarni saralash uchun mavzular, mualliflar va roʻyxat filtrlaridan foydalaning. |
| Varaqlar orasidagi giperhavolalar | Hali qurilmagan. |
| Probel bilan surish, gʻildirak bilan kattalashtirish | Xuddi shunday: {{key:Space}} ni ushlab torting; gʻildirak koʻrsatkich ostida kattalashtiradi. Gʻildirak sahifani hech qachon surmaydi. |

## Farq qiladigan tugmalar

Koʻp bir harfli tugmalar kutganingizdek, lekin barmoqlaringiz bajarishidan oldin bularni tekshiring:

- {{key:K}} — {{ui:Izohli belgi}}, {{key:Q}} — {{ui:Maydon}}. Izohlar uchun Q odatda boʻlsa, bu yerda maydon boshlanadi.
- {{key:C}} — qutili {{ui:Bulut}}; {{key:Shift+C}} — {{ui:Erkin bulut}}.
- {{key:M}} — {{ui:Uzunlik}}, {{key:U}} — {{ui:Sanash}}, {{key:Y}} — {{ui:Polichiziq}}, {{key:G}} — {{ui:Koʻpburchak}}, {{key:I}} — {{ui:Ajratma}}.
- {{key:Mod+D}} tanlovni nusxalaydi (brauzerning xatcho'pi oʻrniga).
- {{key:Mod+Plus}} va {{key:Mod+Minus}} brauzer sahifasini emas, varaqni kattalashtiradi.
- Har qanday tugmani oʻzgartirish mumkin: pastga qarang.

:::tip
Barmoqlaringiz Bluebeam Revu'ni bilsa, {{ui:Sozlamalar}} › {{ui:MarkupCraft}} › {{ui:Menyular, tugmalar va sichqoncha}} da {{ui:PDF koʻrib chiqish}} menyu uslubini tanlang: menyu paneli (Fayl, Tahrirlash, Koʻrinish, Hujjat, Belgilash, Oʻlchash, Oyna) va koʻrib chiqish asboblari qatori, {{key:Q}} izohli belgi uchun, {{key:H}} ajratma uchun, {{key:N}} koʻpburchak uchun, oʻlchovlar esa harf bilan {{key:Alt+Shift}} da. Bu yerda ham har qanday tugmani oʻzgartirish mumkin. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).
:::

Toʻliq roʻyxat: [Klaviatura va sichqoncha](topic:keyboard).

## Kutilmagandek ishlaydigan narsalar

- **Asboblar yoqilgan qoladi.** Bulutdan keyin hali ham bulut chizasiz. {{key:Esc}} bir marta tanlovni tozalaydi, ikki marta {{ui:Tanlash}} ga qaytaradi.
- **Matn va izohlar matn talab qiladi.** Hech narsa yozmasdan yakunlasangiz, belgi qoʻshilmaydi. Eslatmalar boʻsh qoladi.
- **Oʻlchovlar avval masshtab talab qiladi.** Kalibrlanmagan varaqda {{ui:Uzunlik}} va {{ui:Maydon}} {{ui:Kalibrlash}} ga oʻtadi va keyin qaytadi.
- **Boshqa dasturlardagi izohlar.** Boshqa joyda yaratilgan toʻrtburchaklar, ellipslar, chiziqlar, polichiziqlar, koʻpburchaklar, siyoh, matn qutilari va yopishqoq eslatmalar tahrirlanadigan MarkupCraft belgilariga aylanadi va saqlaganingizda MarkupCraft usulida qayta yoziladi (koʻrinishi biroz oʻzgarishi mumkin). Matn ajratmalari, boshqa dasturlarning muhrlari va boshqa maxsus turlar faqat oʻqish uchun qoladi: ularga javob berishingiz mumkin, lekin oʻzgartirib boʻlmaydi.
- **Gʻarbiy Yevropa harflaridan tashqari belgilar** saqlangan PDF'da "?" sifatida chop etiladi. Qarang: [PDF'ni belgilar bilan saqlash](topic:save-the-marked-up-pdf).
- **Muhr sanalari** UTC dan foydalanadi, shuning uchun Amerikada kechqurun yaratilgan muhr ertangi sanani koʻrsatishi mumkin.
- **Oʻlchovlar standart oʻlchov izohlari sifatida koʻchadi,** va har bir kalibrlangan varaq oʻz masshtabini saqlaydi, shuning uchun PDF oʻlchovlarini oʻqiydigan dastur odatda ularni koʻrsata oladi. Aniq xulq oʻsha dasturga bogʻliq.

## Ikkalasidan foydalanish

Ikki tomonga oʻtishingiz mumkin. Boshqa joyda qilingan izohlar MarkupCraft'da ochiladi, "(marked up)" PDF esa boshqa PDF dasturlarida barcha belgilar, javoblar va holatlar koʻrinib ochiladi. Faqat MarkupCraft oʻqiy oladigan narsalar (kamchilik elementi uchun mas'ul shaxs va muddati, element holati) MarkupCraft uchun faylda saqlanadi.

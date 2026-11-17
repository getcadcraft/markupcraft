---
title: Bir vaqtda bir nechta fayl bilan ishlash
summary: Koʻp PDFlarni bitta toʻplam sifatida oching, fayllar boʻylab varaqlarni toping, belgilashlarni fayllar orasida koʻchiring va har bir faylning nusxasini saqlang.
keywords: bir nechta fayl, bir nechta pdf, loyiha toʻplami, toʻplam, paket, koʻp fayl, birlashtirish, yoʻnalishlar, arxitektura konstruktiv mexanik, hammasini saqlash, yopish
from: f59354ae
---

Loyiha toʻplami koʻpincha har bir yoʻnalish uchun bitta PDF yoki har bir varaq uchun bitta PDF boʻlib keladi. MarkupCraft siz ochgan hamma narsani **bitta toʻplam** deb hisoblaydi.

## Ularni birga oching

Fayl tanlagichida barcha PDFlarni bir vaqtda tanlang yoki ularni varaq maydoniga tashlang. Keyinroq yana qoʻshish uchun ularni xuddi shunday oching; ular {{ui:Varaqlar}} roʻyxati oxiriga ochilish tartibida qoʻshiladi.

Natija: «6 ta fayl ochildi (toʻplamda 84 ta varaq).» Har bir sahifa varaq hisoblanadi. Varaq raqami bor varaqlar nomi ostida «Varaq A-101» deb koʻrsatiladi; boshqalari fayl va sahifani koʻrsatadi.

Keyingi safar uchun saqlangan "toʻplam" fayli yoʻq: xuddi shu PDFlarni yana oching (agar saqlagan boʻlsangiz, "(marked up)" nusxalarini).

## Butun toʻplam boʻylab

- **Varaqni topish:** {{ui:Varaqlarni qidirish}} barcha fayllardagi varaq raqamlari, varaq nomlari va fayl nomlarini qidiradi. {{key:PageUp}} va {{key:PageDown}} barcha fayllarning barcha varaqlari boʻylab tartib bilan yuradi.
- **Belgilar roʻyxati:** {{ui:Belgilar}} yorligʻi barcha fayllardagi belgilashlarni koʻrsatadi. Kamaytirish uchun {{ui:Varaq}} boʻyicha filtrlang. CSVda Fayl ustuni boʻladi.
- **Punch roʻyxati:** butun toʻplam uchun bitta raqamlash.
- **Solishtirish:** eski va yangi varaq turli fayllardan boʻlishi mumkin.
- **Nusxalash va qoʻyish:** bir varaqda {{key:Mod+C}} va boshqa varaqda {{key:Mod+V}}, istalgan fayl ichida. Nusxa qogʻozdagi oʻsha joyga, biroz siljigan holda tushadi.

## Saqlash

{{ui:Saqlash}} ni tanlang. Bir nechta fayl ochiq boʻlganda, MarkupCraft soraydi:

- {{ui:Ushbu fayl}}: siz turgan varaq faylining belgilangan nusxasi.
- {{ui:Oʻzgargan barcha fayllar}}: saqlanmagan oʻzgarishlari boʻlgan har bir faylning nusxasi. Har biri alohida, «<file name> (marked up).pdf» nomi bilan yuklab olinadi.
- {{ui:Bekor qilish}}

:::chromium
Bir vaqtda bir nechta faylni birinchi marta saqlaganingizda, Chrome va Edge sayt bir nechta fayl yuklab olishi mumkinmi, deb soraydi. {{ui:Ruxsat berish}} ni tanlang, aks holda faqat birinchi nusxa keladi.
:::

:::safari
Safari har bir fayl uchun bir marta soraydi. iPadda har bir nusxa Files ilovasiga tushadi.
:::

Belgilashlari saqlangan fayl oʻzgargan hisoblanmaydi; boshqalari hali ham shunday hisoblanadi.

CSV, BCF va punch roʻyxati eksporti siz **birinchi** ochgan faylning nomi bilan nomlanadi.

## Yopish

{{ui:Yopish}} butun toʻplamni yopadi; hozircha bitta faylni alohida yopish imkoni yoʻq. Saqlanmagan narsa boʻlsa, u soraydi:

- {{ui:Bekor qilish}}: hech narsa boʻlmaydi.
- {{ui:Saqlamasdan yopish}}: saqlanmagan belgilashlar yoʻqoladi.
- {{ui:Avval nusxalarni saqlash}}: har bir oʻzgargan faylni saqlaydi, soʻng yopadi.

Yopish ortga qaytarish tarixini ham tozalaydi.

## Katta toʻplamlar

- Varaq raqamlarini topish uchun ochilganda har bir sahifaning matni oʻqiladi, shuning uchun 100 varaqli toʻplam biroz vaqt oladi. Holat satri varaqlarni sanab boradi.
- Roʻyxatdagi varaq rasmlari siz ularga aylantirganingizda chiziladi.
- Ochiq har bir PDF brauzer yorligʻining xotirasida saqlanadi. Yorliq sekinlashsa, boshqaogʻir yorliqlarni yoping yoki yoʻnalishlarni bir vaqtda bittadan koʻrib chiqing.
- Bir faylni ikki marta ochish sizga shu varaqlarning ikki nusxasini beradi. Shunday boʻlsa, {{ui:Yopish}} ni tanlang va toʻplamni qayta oching.

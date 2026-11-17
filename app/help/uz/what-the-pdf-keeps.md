---
title: PDFda nima saqlanadi
summary: Belgilangan nusxada aniq nima borligi, boshqa PDF dasturlari nimani koʻrishi va fayl ochilganda nima qayta oʻqilishi.
keywords: pdf izohlari, izohlar, saqlangan maʼlumot, aylanma, sahifa yorliqlari, oʻlchov, koʻrib chiqish holati, javoblar, oʻzaro moslik, moslik, qayta ochish, shaxsiy maʼlumot
from: 6439ad28
---

Belgilangan nusxa asl PDF boʻlib, unga izohlar (PDF annotatsiyalari) qoʻshilgan. Sahifalarning oʻzi, ularning chizmalari, matni, xatchoʻplari va havolalari esa aynan oʻz holicha nusxalanadi.

## Har bir belgi

| MarkupCraft | Qanday saqlanadi | Boshqa PDF koʻruvchilar koʻrsatadi |
|---|---|---|
| Toʻrtburchak, bulutli quti | Kvadrat annotatsiya (bulut: bulutsimon chegara) | Toʻrtburchak yoki bulut izohi |
| Ellips | Doira annotatsiyasi | Ellips izohi |
| Koʻpburchak, erkin bulut | Koʻpburchak annotatsiya (bulut: bulutsimon chegara) | Koʻpburchak yoki bulut izohi |
| Polichiziq | PolyLine annotatsiyasi | Polichiziq izohi |
| Chiziq, strelka | Chiziq annotatsiyasi (strelka: yopiq uchli strelka) | Chiziq yoki strelka izohi |
| Uzunlik | Oʻlchov sifatida belgilangan chiziq annotatsiyasi, oʻlchov bilan | Uzunlik oʻlchovi, koʻruvchi qoʻllasa |
| Maydon | Maydon sifatida belgilangan koʻpburchak annotatsiya, oʻlchov bilan | Maydon oʻlchovi, qoʻllasa; aks holda koʻpburchak |
| Sanash guruhi | Bitta siyoh annotatsiyasi, har bir element uchun halqa; matni: "guruh: n" | Siyoh izohi |
| Qalam, belgilovchi | Siyoh annotatsiyasi (belgilovchi shunday deb belgilangan) | Siyoh izohi |
| Matn | FreeText annotatsiyasi | Matn qutisi izohi |
| Chaqiruv | Chaqiruv yetaklovchisi bilan FreeText annotatsiyasi | Chaqiruv izohi |
| Eslatma | Matn annotatsiyasi | Ochilganda oʻz matnini koʻrsatadigan yopishqoq eslatma |
| Shtamp | Shtamp annotatsiyasi | Shtamp izohi |

Har biri quyidagilar bilan saqlanadi:

- **oʻz koʻrinishi**: MarkupCraft uni ekranda qanday chizsa, aynan shunday chizilgan, shu jumladan punch raqami nishoni; shu sababli u har qanday koʻruvchida bir xil koʻrinadi va bir xil chop etiladi;
- **muallif**, **yaratilgan va oʻzgartirilgan sanalar**, **mavzu**, **izoh matni** (matn qutilari va chaqiruvlar uchun matn va izoh), **rang** va **shaffoflik**;
- **MarkupCraft tafsilotlari** boshqa dasturlar eʼtibor bermaydigan shaxsiy yozuvda: holat, punch elementi, uslub va tur, shuning uchun u aynan oʻz holicha qayta ochiladi.

## Javoblar va holatlar

- Har bir javob belgiga bogʻlangan izoh sifatida, muallifi, sanasi va matni bilan saqlanadi. Javoblarning varaqda oʻz belgisi yoʻq.
- Holat oʻzgarishining har biri koʻrib chiqish holatini olib yuradigan javob sifatida saqlanadi. Boshqa koʻrib chiqish vositalari uni Qabul qilingan, Rad etilgan yoki Tugallangan deb koʻrsatadi; Ochiq holati hech qanday holat sifatida saqlanmaydi.
- Holati Ochiq boʻlmagan, lekin qayd etilgan holat oʻzgarishi boʻlmagan belgiga bitta koʻrib chiqish holati javobi beriladi, shunda boshqa dasturlar ham holatni koʻradi.
- Asl fayldagi faqat oʻqish uchun izohlarga berilgan javoblar xuddi shu izohga bogʻlangan holda shunday saqlanadi.

## Har bir varaq

- **Masshtab:** masshtabi kiritilgan varaq sahifani qoplaydigan oʻlchov koʻrinish maydoniga ega boʻladi (sahifa masshtabini saqlashning odatiy usuli) hamda MarkupCraftning oʻz masshtab nusxasiga ega boʻladi.
- **Varaq raqami:** {{ui:Varaqni qayta nomlash}} bilan kiritilgan raqam sahifa yorligʻiga aylanadi. Faylning biror sahifasida yorliq boʻlsa, oʻsha fayldagi har bir sahifaga yorliq beriladi: kiritilgan raqami, aks holda eski yorligʻi, aks holda sahifa raqami.
- **Varaq nomi:** kiritilgan nom faqat MarkupCraft uchun saqlanadi; boshqa koʻruvchilar uni koʻrsatmaydi.

## Matn va belgilar

Matn Helvetica shriftida yoziladi, uni har bir PDF koʻruvchi biladi. Western European toʻplamidan (Windows-1252) tashqaridagi harflar nusxada "?" sifatida chop etiladi; saqlash xabari ularni sanaydi.

## Hisob-kitob varaqlari va sabablar

Hisob-kitob varaqlari va sabablar PDFning `/MarkupCraftShell` nomli shaxsiy yozuvida saqlanadi. Boshqa PDF dasturlari uni eʼtiborga olmaydi. Eski MarkupCraft ham uni eʼtiborsiz qoldiradi va oʻsha faylni keyingi saqlashda oʻchirib yuboradi.

## Avvaldan mavjud izohlarga nima boʻladi

Agar izohlari bor PDFni ochsangiz:

- MarkupCraftning oʻz izohlari aynan oʻz holicha qayta oʻqiladi. Agar boshqa dastur uning joyini yoki oʻlchamini oʻzgartirgan boʻlsa, uning yangi holati ustun turadi.
- Boshqa dasturlardan kelgan toʻrtburchaklar, ellipslar, chiziqlar, polichiziqlar, koʻpburchaklar, siyoh, matn qutilari va yopishqoq eslatmalar tahrirlanadigan belgilarga aylanadi. **Saqlaganingizda MarkupCraft asl nusxalarni oʻchirib, ularni oʻz usulida qayta yozadi**, qalqib chiquvchi oynalari va javoblari bilan birga. Ularning koʻrinishi biroz oʻzgarishi mumkin.
- Boshqa dasturlardagi koʻrib chiqish holatlari holatni belgilaydi; eng yangisi ustun turadi.
- Qolgan hamma narsa (matn belgilashlari, boshqa dasturlarning shtamplari va maxsus turlari) nusxada oʻzgarishsiz, faqat oʻqish uchun **saqlanadi**.
- Havolalar va shakl maydonlari oʻzgarishsiz saqlanadi va roʻyxatga kiritilmaydi.

Bir xil faylni qayta saqlash hech narsani ikki baravar qilmaydi: MarkupCraft oʻqigan belgilar almashtiriladi, qayta qoʻshilmaydi.

## Nima oʻzgarmaydi

Diskdagi asl faylingiz hech qachon oʻzgartirilmaydi. Nusxa hajmi uchun optimallashtirilmagan, shuning uchun asl nusxadan biroz katta boʻlishi mumkin. Himoyalangan (shifrlangan) PDF larni saqlab boʻlmaydi.

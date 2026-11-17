---
title: Belgilashni vazifaga aylantirish
summary: Belgilashga masʼul (shaxs yoki yordamchingiz), muddat kuni va u tegishli boʻlgan chizma yoki model elementiga havola bering hamda bu haqiqatan oʻzgarganda vazifaning yopilishini koʻring.
keywords: vazifa, vazifalar, masʼul, yordamchi, muddat, muddati oʻtgan, havola, yopiladi, oʻzgardi, element, chizma sohasi, harakat qiluvchi belgilashlar, MCP
from: 9e970202
---

Vazifa — kimdir tomonidan bajarilishi kerak boʻlgan belgilash. U varaqdagi oʻrnini va oqimini saqlaydi hamda sarlavha, masʼul, muddat kuni, holat va xohlasangiz, u haqidagi narsaga havola qoʻshadi.

## Vazifa yaratish

1. Bitta yoki bir nechta belgilashni tanlang.
2. {{ui:Tasks}} yorligʻini oching va {{ui:Make selected a task}} ni tanlang.
3. Sarlavhani toʻldiring (u belgilashning matnidan boshlanadi), kim uchunligi ({{ui:Person}} yoki {{ui:Assistant}} va ism), ixtiyoriy muddat kuni va nimani kuzatish kerakligini kiriting.

Yordamchi vazifasi — MarkupCraft ga ulagan yordamchingiz uchun ish (qarang: [MarkupCraft ni sunʼiy intellekt yordamchisi bilan ishlatish](topic:use-with-ai-assistants)). MarkupCraft oʻz yordamchisiga ega emas: u faqat ishlarni roʻyxatga oladi va yordamchining javoblarini qabul qiladi. {{ui:Assigned to}} ni, soʻng roʻyxatda {{ui:Assistant}} ni tanlash unga kutayotgan ishlarni koʻrsatadi.

## Oʻzgarishni kuzatish

- **Belgilash ichidagi chizma.** MarkupCraft belgilash qutisi ichidagi chiziqlarni hozirgidek saqlaydi. Oʻsha varaqning yangiroq revizyasini ochganingizda (bir xil varaq raqamli ikkinchi fayl yoki bir xil sahifa oʻrni), {{ui:Check now}} ni tanlang: agar oʻsha hududdagi chiziqlar hatto oz farq qilsa ham, vazifa yopiladi.
- **Model elementi.** Ilovani va elementning identifikatorini kiriting. Yordamchingiz elementni boshqa ilovaning oʻz asboblari bilan oʻqiydi va uni `tasks_check` orqali xabar qiladi. Birinchi xabar boshlangʻich holat sifatida saqlanadi; keyingi farq qiladigan xabar vazifani yopadi. Oʻchirilgan element ham uni yopadi.
- **Hech narsa.** Oddiy vazifa, uni qoʻlda tugatasiz.

Yopilgan vazifa «Bajarildi» deb belgilanadi, uning belgilashi «Bajarilgan» boʻladi va oqimdagi izoh nima oʻzgarganini aytadi. Bitta ortga qaytarish qadami uni qayta ochadi.

**Cheklov:** tekshiruv yangi revizyada sahifa boshlanish nuqtasi va sahifa oʻlchami bir xil deb hisoblaydi. Boshqa oʻlchamda qayta chizilgan varaq mos kelmaydi, shuning uchun uning vazifalari yopilmaydi. Varaqlar varaq raqami boʻyicha, aks holda sahifa oʻrni boʻyicha juftlanadi; MarkupCraft bir revizyani ikkinchisiga moslash uchun masshtabni oʻzgartirmaydi.

Xuddi shu chizmani yangi sana muhri bilan qayta chop etish yoki 1.5 pt dan kamroq siljigan chiziqlar oʻzgarish hisoblanmaydi. Yangiroq revizya ochiq boʻlmasa, vazifa ochiq qoladi va holat satri buni aytadi.

## Roʻyxat

{{ui:Tasks}} roʻyxatini holat va kim uchunligi boʻyicha filtrlash mumkin, shu jumladan {{ui:Overdue}}. Muddati oʻtgan vazifa Muammolar panelida ogohlantirish sifatida koʻrinadi. {{ui:CSV}} roʻyxatni eksport qiladi.

Vazifalar belgilash bilan birga PDF da saqlanadi va boshqa belgilash xususiyatlari kabi Live orqali uzatiladi.

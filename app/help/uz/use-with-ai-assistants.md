---
title: MarkupCraft ni AI yordamchi bilan ishlatish
summary: Oʻz AI yordamchingiz yoki skriptingiz toʻplamdagi belgilashlarni roʻyxatlasin, oddiylarini qoʻshsin, holatini oʻrnatsin, javob bersin va roʻyxatni eksport qilsin: ruxsatlar, CadCraft Studio orqali ulanish va faollik jurnali.
keywords: ai, yordamchi, agent, mcp, model context protocol, skript, avtomatlashtirish, belgilashlar, koʻrib chiqish, ruxsatlar, uzish, faollik
from: 095f2977
---

## Nimalarni oʻrganasiz

AI yordamchi (yoki oʻzingiz yozgan skript) MarkupCraft bilan qanday ishlashi va u nimaga tegishi mumkinligini qanday hal qilish kerakligi.

MarkupCraft **oʻzining AI ga ega emas** va hech narsani hech qayerga yubormaydi. Yordamchini siz olib kelasiz: Model Context Protocol (MCP) tilida gaplashadigan istalgan dastur. MarkupCraft unga faqat asboblar beradi, qaysilarini esa siz tanlaysiz.

## Yoqish

1. {{ui:Sozlamalar}} ni oching (ilova panelidagi tishli belgi yoki {{key:Mod+,}}) va {{ui:MarkupCraft}} yorligʻiga oʻting.
2. {{ui:Yordamchilar}} ostida **AI yordamchilar va skriptlarga MarkupCraft dan foydalanishga ruxsat berish** ni belgilang. Buni qilmaguningizcha u oʻchiq turadi.
3. U nima qila olishini tanlang: **Oʻqish** dastlab belgilangan boʻladi; **Tahrirlash**, **Saqlash** yoki **Eksport** ni faqat kerak boʻlganda belgilang.

Belgilagan ruxsatlaringizdan tashqaridagi asboblar yordamchiga taklif qilinmaydi va u baribir soʻrasa, MarkupCraft rad etadi hamda buni faollik jurnaliga yozadi. Kalitni oʻchirish barcha ulanishlarni bir vaqtda tugatadi; {{ui:MarkupCraft sozlamalarini tiklash}} uni ham oʻchiradi.

## Yordamchini ulash

Yordamchilar kompyuteringizdagi **CadCraft Studio** orqali ulanadi: Studio faqat shu kompyuter yeta oladigan kichik serverni ishga tushiradi, u har safar ishga tushganda yaratiladigan token bilan himoyalangan. Studio ichida {{ui:Yordamchini ulash}} ni tanlang va manzil hamda tokenni yordamchingizga nusxalang (Studio joylashtirish uchun aniq sozlamalarni koʻrsatadi). Tokenni hech qachon ulashmang.

:::note
Brauzer yorligʻi yordamchi uchun ulanish ocha olmaydi: brauzer ilovalarida kalit CadCraft Studio ni kompyuteringizda ishlatmaguningizcha taʼsir qilmaydi.
:::

## Nazorat sizda qoladi

- **Har bir oʻzgarish bitta bekor qilish qadami boʻladi**, unga yordamchi nomi bilan belgi qoʻyiladi (masalan, "Assistant: add cloudrect"). {{key:Mod+Z}} yordamchining oxirgi oʻzgarishini butunlay qaytaradi.
- **Ulanganini bilasiz.** Ilova panelidagi tugma ulangan paytda yordamchini nomlaydi; uning nima qila olishini koʻrish yoki uni **Uzish** uchun bosing.
- **Faollik.** {{ui:Sozlamalar}} › {{ui:MarkupCraft}} › {{ui:Yordamchilar}} › {{ui:Faollik}} har bir chaqiruvni roʻyxatlaydi: qachon, qaysi asbob, bajarildi yoki rad etildi. {{ui:Jurnalni saqlash}} nusxasini saqlaydi.

## Yordamchi nimalarni soʻrashi mumkin

| Asbob | Ruxsat | Nima qiladi |
|---|---|---|
| `app_info`, `sheets_list` | Oʻqish | Ochiq toʻplamlar, ularning varaqlari va har birida nechta belgilash borligi |
| `markups_list` | Oʻqish | Belgilashlar turi, varaqi, matni, izohi, oʻlchovi, holati, muallifi va javoblari bilan, varaq, holat, tur yoki muallif boʻyicha filtrlangan |
| `markup_add` | Tahrirlash | Varaqqa toʻrtburchak, bulut, ellips, matn maydoni, izoh, chiziq yoki strelka qoʻshadi |
| `markup_status`, `markup_reply` | Tahrirlash | Belgilashning holatini oʻrnatadi (oqimida qayd etiladi, yordamchi imzosi bilan); oqimga izoh qoʻshadi |
| `markups_export` | Eksport | {{ui:Belgilar}} roʻyxati koʻrsatadigan narsaning oʻz CSV yoki BCF fayli (filtrlari siz oʻrnatganidek); Studio da u faylni siz ruxsat bergan papkaga yozishi mumkin |
| `tasks_list` | Oʻqish | Vazifa boʻlgan belgilashlar: ijrochi (shaxs yoki yordamchi), muddat kuni, holati, havola, qanday yopilgani. `assignee: "assistant"` yordamchi kutayotgan ishlarni roʻyxatlaydi |
| `task_set`, `task_clear` | Tahrirlash | Belgilashni vazifaga aylantiradi yoki uni oʻzgartiradi (sarlavha, ijrochi, muddat, holat, havola); vazifani olib tashlaydi |
| `tasks_check` | Tahrirlash | Bogʻlangan chizma sohasi yoki model elementi haqiqatan oʻzgargan vazifalarni yopadi; boshqa ilovadan oʻqigan element holatlarini uzatadi |
| `revisions_changes` | Oʻqish | Ochiq ikki chizma toʻplami orasida nima oʻzgarganining sodda roʻyxati, oʻz soʻzlaringizda ifodalash uchun |
| `pins_list`, `decision_add` | Oʻqish, Tahrirlash | Ovozli izohlar (uzunligi, kim, qachon, sarlavha; hech qachon tovush yoki transkript emas) va qarorlar; qarorni biriktiradi va avvalgisini almashtiradi |
| `redline_export`, `redline_answer` | Eksport, Tahrirlash | Loyihachi uchun redline faylini yozadi; loyihachining javoblarini qoʻllaydi |

Yordamchi qoʻshgan belgilash muallif sifatida uni nomlaydi: yordamchi dasturning oʻzi bergan ism, undan keyin "(assistant)" yoki koʻrib chiquvchi ismingizni oʻrnatganingizdan keyin "(assistant for <your name>)". Uning holat oʻzgarishlari va javoblari xuddi shunday imzolanadi. Har biri bitta bekor qilish qadami. Belgilangan PDF ni saqlash sizda qoladi: odatdagidek {{ui:Saqlash}} dan foydalaning.

MarkupCraft ni ochmasdan, CadCraft MCP serveri siz nomlagan papkadagi PDF ning belgilashlarini roʻyxatlaydi (`markups_list`), `cadcraft info Set.pdf` esa ularni buyruq satrida chop etadi.

## Agar biror narsa ishlamasa

- **Yordamchi MarkupCraft asboblarini koʻrmaydi:** bu oynada kalit yoqilganini va oyna Studio da ochiq ekanini tekshiring.
- **"tahrirlash ruxsati kerak":** {{ui:Yordamchilar}} ostida **Tahrirlash** ni belgilang, soʻng yana soʻrang.
- **"401" yoki "token" xatolari:** token oʻzgargan (Studio qayta ishga tushgan yoki {{ui:Yangi token}}). Yangisini yordamchi sozlamalariga nusxalang.

## Shuningdek qarang

- [AI yordamchilar uchun retseptlar](common:assistants-recipes): har biri chaqiradigan asboblar bilan ishlangan misollar.

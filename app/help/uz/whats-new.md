---
title: 0.8 va 0.8.1 versiyasidagi yangiliklar
summary: Vazifaga aylanadigan va oʻzi yopiladigan belgilashlar, reviziyalar orasidagi oʻzgarishlarning oddiy roʻyxati, varaqdagi ovozli eslatmalar va qarorlar, chizmachi uchun redline fayllari hamda 0.8 dagi umumiy oʻzgarishlar: kiritish qurilmalari, asboblar paneli qatorlari, Muammolar paneli va koʻproq tillar.
keywords: yangiliklar, nima yangi, relizlar haqida, oʻzgarishlar jurnali, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, vazifa, vazifalar, tayinlangan, bajarish muddati, muddati oʻtgan, hozir tekshirish, nima oʻzgardi, reviziyalar, solishtirish, ovozli eslatma, qaror, redline, javoblar fayli, chizmachi, yordamchi, mcp, muammolar, tillar, kiritish qurilmalari, sensorli panel, asboblar paneli qatorlari, xususiyatlar jadvali, yangilash
from: 40368796
---

Bu MarkupCraft 0.7 bilan solishtirganda 0.8 va 0.8.1 versiyalarida nima oʻzgargani. Eng katta yangilik shundaki, belgilash kimdir yoki sizning ulangan yordamchingiz bajaradigan vazifa boʻlishi mumkin va chizma haqiqatan oʻzgarganda oʻzi yopiladi.

## Yangi

### Belgilashlar harakat qiladi

- **Belgilashni vazifaga aylantiring.** Bir yoki bir nechta belgilashni tanlang, {{ui:Vazifalar}} yorligʻini oching va {{ui:Tanlanganni vazifaga aylantirish}} ni tanlang. Vazifaning sarlavhasi, uni bajaradigan shaxs yoki ulangan yordamchingiz, ixtiyoriy bajarish muddati va holati boʻladi, hamda u oʻz oʻrnini varaqda va suhbat ipida saqlaydi. Qarang: [Belgilashni vazifaga aylantirish](topic:markups-that-act).
- **Oʻzi yopiladigan vazifalar.** Vazifa oʻz belgilashi ichidagi chizmani kuzatishi mumkin. Varaqning yangi reviziyasini oching va {{ui:Hozir tekshirish}} ni tanlang: agar oʻsha hududdagi chiziqlar sezilarli darajada oʻzgargan boʻlsa, vazifa Bajarildi deb belgilanadi, uning belgilashi Yakunlandi holatiga oʻtadi va suhbatdagi eslatmada nima oʻzgargani yoziladi. Yangi sana muhri yoki 1.5 punktdan kam siljigan chiziqlar hisobga olinmaydi. Vazifa buning oʻrniga model elementini kuzatishi ham mumkin: yordamchingiz elementni `tasks_check` bilan xabar qiladi va keyingi xabar boshqacha boʻlsa yoki element oʻchirilgan boʻlsa, vazifa yopiladi. Bitta bekor qilish amali uni qayta ochadi.
- **Ishni toping.** {{ui:Vazifalar}} roʻyxatini holat va kimga moʻljallanganiga koʻra filtrlang, shu jumladan {{ui:Muddati oʻtgan}} boyicha; {{ui:Tayinlangan}} ni, soʻngra {{ui:Yordamchi}} ni tanlab, yordamchingiz kutayotgan ishlarni koʻring. Bajarish muddati oʻtgan vazifa Muammolar panelida ogohlantirish sifatida koʻrinadi. {{ui:CSV}} roʻyxatni eksport qiladi. Vazifalar belgilash bilan birga PDF ichida saqlanadi va boshqa belgilash xususiyatlari kabi {{ui:Live}} orqali uzatiladi.

### Nima oʻzgargani oddiy roʻyxatda

- **Oʻzgarishlar roʻyxatini tuzing.** {{ui:Solishtirish}} yorligʻini oching, soʻngra {{ui:Butun toʻplamni solishtirish}} ni tanlang, oldingi va keyingi faylni belgilang va {{ui:Oʻzgarishlar roʻyxatini tuzish}} ni tanlang. Roʻyxat soni koʻrsatishdan boshlanadi, soʻngra har bir oʻzgargan varaqni eng katta oʻzgarishdan boshlab yoritadi: varaqdagi joyi, hajmi (kalibrlangan varaqda haqiqiy birliklarda va qogʻoz dyuymlarida), chiziqlar qoʻshilgani yoki olib tashlanganmi, u yerda nechta belgilash borligi va qaysi soʻzlar paydo boʻlgani yoki yoʻqolgani. {{ui:Roʻyxatni nusxalash}} uni buferga qoʻyadi, {{ui:CSV}} esa har bir oʻzgarish uchun bitta qator yozadi. Qarang: [Reviziyalar orasidagi oʻzgarishlar roʻyxati](topic:what-changed-in-words).

### Ovozli eslatmalar va qarorlar

- **Ovozli eslatmalar.** {{ui:Eslatmalar}} yorligʻida {{ui:Ovozli eslatma yozish}} ni, soʻngra {{ui:Yozuvni toʻxtatish}} ni tanlang; yozuvlar ikki daqiqadan keyin oʻzi toʻxtaydi. Eslatma varaqning markaziga biriktiriladi, uni kerakli joyga sudrab olib borasiz va {{ui:Xususiyatlar}} ichida sarlavha yozasiz, roʻyxatdagi {{ui:Ijro etish}} esa uni ijro etadi. Yozuv PDF ichida saqlanadi.
- **Qarorlar.** {{ui:Qaror biriktirish}} varaqqa bir-ikki gap yozadi. Agar u oldingi qarorni almashtirsa, oʻsha qarorni {{ui:U almashtiradi}} ichida tanlang: eski qaror qoladi, Almashtirildi deb belgilanadi va yangi qarorga havola qiladi. Bitta bekor qilish amali uni qaytaradi. Qarang: [Ovozli eslatma va qarorlarni varaqqa biriktirish](topic:voice-notes-and-decisions).

### Reviziyagacha qizil belgilash

- **Yuboring va javob oling.** {{ui:Vazifalar}} yorligʻida {{ui:Reviziyagacha qizil belgilash}} ni oching, belgilashlar qaysi reviziyaga tegishli ekanini kiriting va {{ui:Redline faylini eksport qilish}} ni tanlang. Siz har bir ochiq belgilash uchun bitta elementga ega `.redline.json` faylini olasiz: varaq, joylashuv (varaq ulushlari sifatida, shuning uchun boshqa oʻlchamda qayta chop etilganda ham mos keladi), soʻzlar, muallif, suhbat va uning vazifasi. Oʻzgarishlarni chizadigan shaxs `.redline-answers.json` faylida Qabul qilindi, Rad etildi yoki Bajarildi deb javob beradi; {{ui:Javoblar faylini yuklash…}} har bir belgilashga shu holatni va chizmachining izohini bitta bekor qilish amali sifatida beradi. Qarang: [Belgilashlarni chizmachiga redline sifatida yuborish](topic:redline-to-revision).

### AI yordamchilari

- **Koʻproq vositalar.** CadCraft Studio orqali ulangan yordamchi vazifalarni koʻrishi (`tasks_list`), birini yaratishi yoki oʻzgartirishi (`task_set`), vazifani olib tashlashi (`task_clear`), vazifani yoki elementni yangiroq reviziya bilan tekshirishi (`tasks_check`) hamda ikki ochiq varaq toʻplami orasidagi oʻzgarishlarning oddiy roʻyxatini oʻqishi (`revisions_changes`) mumkin. U faqat {{ui:Yordamchilar}} kaliti ostida belgilagan vositalarni oladi va har bir oʻzgarish bitta bekor qilish amali hisoblanadi. Qarang: [MarkupCraft ni AI yordamchisi bilan ishlatish](topic:use-with-ai-assistants).

## Barcha ilovalarda

- **Tillar.** CadCraft Studio endi 54 ta tilga ega. Oʻnta yangi til qoʻshildi: Litva, Latviya, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filippin, Suahili va Oʻzbek. Ingliz tilidan boshqa barcha tillar ona tilida soʻzlovchi mutaxassis oʻqib chiqmaguncha mashinaviy qoralama hisoblanadi.
- **Kiritish qurilmalari.** {{ui:Sozlamalar}} › {{ui:Global}} › {{ui:Kiritish qurilmalari}} sensorli panel, sichqonchaning yon tugmalari, qalam, barmoq bilan bosish, 3D sichqoncha, oʻyin boshqaruv pulti yoki MIDI boshqaruvchi nima qilishini belgilaydi: barcha ilovalar uchun yoki faqat shu ilova uchun. Siz biror narsani oʻzgartirmaguningizcha, har bir qurilma avvalgidek ishlaydi. Qarang: [Sensorli panel, 3D sichqoncha yoki boshqaruv pultidan foydalanish](common:input-devices).
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} ichida {{ui:Oʻrash}} (standart), {{ui:2 qator}} va {{ui:1 qator}} mavjud, shuning uchun chizma uchun koʻproq joy ajraladi. Qarang: [Panellarni joylashtirish](common:arrange-panels).
- **Xususiyatlar jadvali.** Belgilashning uslub maydonlari umumiy jadvaldan foydalanadi, unda yigʻiladigan toifalar hamda yorliq va qiymat ustunlari bor.
- **Muammolar paneli.** Ilovadan kelgan ogohlantirishlar, masalan muddati oʻtgan vazifa, bitta Muammolar panelida yigʻiladi.
- **Live va qoʻshimchalar.** Live seanslari [Birgalikda Live rejimida ishlash](common:work-together-live) boʻlimida tasvirlangan; hisobingizga bogʻliq qoʻshimchalar roʻyxati [Qoʻshimchalar va hisobingiz roʻyxati](common:addons-basics) boʻlimida keltirilgan.
- **AI ni ulang.** CadCraft Studio oʻz yordamchingiz uchun markaz hisoblanadi: bir marta ulaning, sakkizta ilovaning barchasi uchun ishlaydi. Ilovalarning oʻz AI si yoʻq.

## 0.8.1 da tuzatildi

- **Studio ishlab turganda tilni almashtira oladi.** Oldin ish stoli ilovasi va qadoqlangan nashrlar ingliz tilida qolardi. Bu hali barcha platformalarda sinovdan oʻtmagan: til oʻzgarmasa, bizga xabar bering.
- Studio 0.8 oʻrnatmalariga {{ui:Sozlamalar}} › {{ui:Yangilanishlar}} orqali 0.8.1 taklif qilinadi.

## Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows oʻrnatuvchilari va macOS uchun .dmg hali imzoga ega emas. Windows da SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:Batafsil}} ni, soʻngra {{ui:Baribir ishga tushirish}} ni tanlang. Mac da CadCraft Studio ustida oʻng tugmani bosing va {{ui:Ochish}} ni tanlang. Doʻkon versiyalari hozircha toʻxtatilgan.
- **AI ulanishi ayrim joylarda tugallanmagan.** Studio ichida bir bosishda ulanish, brauzer yordamchilari uchun xostdagi ulagich va Studio ichidagi shaxsiy API kalit bu relizda kafolatlanmagan. Vazifalar sikli sinovdan oʻtgan, ammo hali haqiqiy yordamchi bilan sinalmagan.
- **Vazifa tekshiruvi bir xil varaq oʻlchamini talab qiladi.** Boshqa oʻlchamda qayta chop etilgan varaq mos kelmaydi, shuning uchun uning vazifalari yopilmaydi. Varaqlar varaq raqami boʻyicha, bu boʻlmasa sahifadagi oʻrni boʻyicha juftlanadi.
- **Ovozli eslatmalar faqat yozuvlardir.** Matn transkripti yoʻq, yordamchi esa tovushni emas, eslatmaning uzunligini, muallifini va sarlavhasini koʻradi. Yozib olish soxta mikrofon bilan sarlavhasiz brauzerda sinalgan; telefon, planshet yoki noutbukdagi haqiqiy mikrofon hali tekshirilmagan.
- **PDF ichidagi hisob varaqlari va sabablar** faylning shaxsiy yozuvida saqlanadi. Eski MarkupCraft bu yozuvni eʼtiborsiz qoldiradi va faylni keyingi saqlashda oʻchirib yuboradi, shuning uchun bunday faylni 0.8 yoki undan yangi versiyada oching va saqlang.
- **Redline fayllarining chizmachi tomoni.** CadCraft redline faylini oʻqib, unga javob berishi hali yaratilmagan.
- **Boshqa tillar.** Tamil tilida ilova paneli 528 px ga toshib ketadi.

Qolgan hamma narsa [Hali yaratilmagan narsalar](topic:not-built-yet) boʻlimida keltirilgan. Oldingi reliz haqida [0.7 dagi yangiliklar](topic:whats-new-0-7) boʻlimiga qarang.

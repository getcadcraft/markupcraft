---
title: 0.9 versiyasidagi yangiliklar
summary: Hech qachon chop etilmaydigan eslatmalar va taxta, shifrlangan shaxsiy eslatmalar va mijoz uchun toza nusxa, butun chizmalar toʻplami uchun ommaviy havolalar, oʻn usulli Yoy asbobi, Live sessiyasida boshqa koʻrib chiquvchini kuzatish hamda oʻchirilgan belgilashlarning saqlangan PDF ichida qolishini tuzatish.
keywords: yangiliklar, nima yangi, 0.9, relizlar haqida maʼlumot, oʻzgarishlar jurnali, eslatmalar, taxta, shaxsiy eslatmalar, parol ibora, shifrlangan, eslatmalarni yashirish, eslatmalarni koʻrsatish, toza nusxa, surat, ommaviy havolalar, varaq chaqiruvlari, varaqlarni bogʻlash, titul bloki, varaq raqami, qoʻshimcha hujjat, addendum, qayta raqamlash, pdf havolasi, yoy, yoy usullari, uch nuqtali yoy, radius, kuzatish, meni kuzatish, live, sinf koʻrinishi, ishtirokchilar roʻyxati, oʻchirilgan belgilash, maslahat matnlari, yorliq sarlavhalari, yangiliklar, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, vazifa, vazifalar, masʼul, muddat, muddati oʻtgan, hozir tekshirish, nima oʻzgardi, reviziyalar, solishtirish, ovozli eslatma, qaror, redline, javoblar fayli, chizmachi, yordamchi, mcp, muammolar, tillar, kiritish qurilmalari, trekpad, asboblar paneli qatorlari, xususiyatlar jadvali, yangilash
from: dbdd7ed4
---

Bu MarkupCraft 0.8.1 bilan solishtirganda 0.9 versiyasida nimalar oʻzgarganini koʻrsatadi. Asosiy gʻoya shundaki, ishchi eslatmalaringiz mijoz oladigan sahifada chop etilmaydi va butun chizmalar toʻplamini bir martada bogʻlash mumkin.

## Yangi

### Eslatmalar, taxta va shaxsiy eslatmalar

- **Taxta.** Har bir varaq atrofidagi maydon stoldir: varaq yonida chizilgan, yozilgan yoki qoʻyilgan har qanday narsa eslatma hisoblanadi va hech qachon chop etilmaydi. Joy uchun uzoqlashtirish uchun {{ui:Taxtani koʻrsatish}} ni tanlang yoki {{ui:Taxtaga surat olish}} ni tanlang, quti torting, soʻng chizmaning bir qismi suratini varaq yoniga qoʻyish uchun {{ui:Taxtaga}} ni tanlang. Surat rasm boʻlib, varaq oʻzgarganda oʻzgarmaydi. Qarang: [Eslatmalar, taxta va shaxsiy eslatmalar](topic:notes-and-pasteboard).
- **Eslatmalarni koʻrsatish va yashirish.** Har qanday belgilash eslatma boʻlishi mumkin: {{ui:Eslatmalar}} yorligʻida {{ui:Yangi belgilashlar}} ni yoki {{ui:Xususiyatlar}} ichida {{ui:Bu belgilash}} ni belgilang. {{key:Shift+H}} yoki varaq ostidagi {{ui:Eslatmalar}} kaliti barcha eslatmalarni bir vaqtda yashiradi yoki koʻrsatadi. Eslatmalar chop etish, yassilangan nusxalar, roʻyxatlar va eksportdan chiqariladi, boshqa PDF oʻquvchilari ularni koʻrsatmaydi. Saqlangan PDF esa ularni MarkupCraft ilovasida keyingi safar ochganingizda saqlab qoladi.
- **Shaxsiy eslatmalar.** {{ui:Parol ibora oʻrnatish}} ni tanlang, soʻng belgilashni {{ui:Shaxsiy izoh}} qilib belgilang. U faylda kamida 10 ta belgidan iborat parol ibora bilan shifrlanadi va tiklash imkoni yoʻq: parol iborasiz hech kim, shu jumladan biz ham, uni ocha olmaydi. {{ui:Qulflash}} shaxsiy eslatmalarni yashiradi; {{ui:Bu qurilmada ochiq holda qolish}} standart holatda oʻchirilgan.
- **Toza nusxani saqlash.** {{ui:Toza nusxani saqlash}} barcha eslatmalarni, shaxsiy eslatmalarni va taxtadagi hamma narsani olib tashlaydi. Uni mijozga yuboriladigan fayl uchun ishlating.

### Butun toʻplamni bogʻlash

- **Ommaviy havolalar.** {{ui:Sahifalar}} › {{ui:Ommaviy havolalar…}} ni tanlang yoki {{ui:Varaqlar}} panelida {{ui:Matnni topish}} ostidagi {{ui:Varaq chaqiruvlarini bogʻlash…}} ni tanlang. 1-qadamda har bir varaqning raqami va nomi uning titul blokidan oʻqilgan holda chiqadi; notoʻgʻri boʻlsa, tuzating. 2-qadamda topilgan chaqiruvlar roʻyxatlanadi, masalan `3/A-501` yoki `DETAIL 2 ON A-501`. {{ui:Bogʻlanadi}} har biri uchun varaq va koʻrinishni koʻrsatadi, {{ui:Bogʻlanmagan}} esa ochiq hech bir varaqda boʻlmagan raqamlarni koʻrsatadi, {{ui:Havolalarni yaratish}} esa ularning hammasini bitta bekor qilish qadamida yaratadi. Qoʻshimcha hujjat yoki qayta raqamlashdan keyin uni yana ishga tushiring; qoʻlda yaratgan havolalaringiz hech qachon oʻzgarmaydi. Koʻrinishli havola PDF havolasi sifatida saqlanadi, shuning uchun boshqa oʻquvchilar ham tafsilotni ochadi. Qarang: [Varaq havolalari](topic:sheet-links).

### Chizish

- **Yoy, oʻn usul.** {{ui:Yoy}} asbobi ({{key:O}}) endi sahifa ustida {{ui:Yoy usuli}} oynasiga ega boʻlib, unda yoy chizishning oʻn usuli bor. Burchak, uzunlik, radius va yoʻnalish sichqoncha bilan bosib yoki yozib kiritilishi mumkin. Qarang: [Yoyni oʻn usulda chizish](topic:draw-an-arc).

### Birgalikda ishlash

- **Koʻrib chiquvchini kuzatish.** Live sessiyasida kishi ismi yonidagi {{ui:Kuzatish}} ni tanlang, shunda koʻrinishingiz ularniki bilan birga siljiydi; oʻzingiz surish yoki kattalashtirishni boshlasangiz, kuzatish toʻxtaydi. Xost {{ui:Hammani meni kuzatishga chaqirish}} ni tanlashi mumkin. Ishtirokchilar roʻyxatida har bir kishining rangi, ismi, qaysi varaqda ekani va oxirgi tahrir qachon qilingani koʻrsatiladi. Qarang: [Live sessiyada boshqa koʻrib chiquvchini kuzatish](topic:follow-in-live).

## Barcha ilovalarda

- Maslahat matnlari Bootstrap tooltip boʻlib, boshlangʻich maslahatni yopish mumkin, yorliq qatorlari toʻlib ketganda siljiydi va brauzer yorliq sarlavhalari `<hujjat> — MarkupCraft | CadCraft` koʻrinishida boʻladi.
- Bir nechta boʻlimli panel bittasini ochadi va boshqalarini yopadi (belgi yonidagi qulf bittasini ochiq saqlaydi); {{ui:Sozlamalar}} kaliti buni oʻchiradi.
- Har bir ilova Kutubxona obyektlarining standart toʻplamidan boshlanadi.
- Vazn va harorat birliklari Birliklar sozlamalarida mavjud.

## Tuzatilgan

- **Oʻchirilgan belgilashlar saqlangan PDF ichida endi oʻqilmaydi.** Ilgari saqlashda oʻchirilgan yoki qayta yozilgan izoh sahifadan olib tashlanardi, ammo obyekt matni bilan faylda qolardi. Endi saqlashda bunday obyektlar oʻchiriladi. Oldingi versiyalarda saqlangan fayllarda ular siz ularni qayta saqlaguningizgacha qoladi.

## Cheklovlar

- Ommaviy havolalar bizning oʻz sinov toʻplamlarimizda sinab koʻrildi. Haqiqiy toʻplamlarda doiralar turli usullarda chizilgan boʻladi, shuning uchun mijoz toʻplamida ayrim koʻrinishlar oʻtkazib yuborilishi mumkin. Skanerlangan varaqlar uchun avval {{ui:Matnni oʻqish (OCR)…}} kerak.
- Eslatmalar, shaxsiy eslatmalar va taxta ekransiz (headless) brauzerda hamda oʻz fayllarimizda sinovdan oʻtkazildi, katta haqiqiy vektor toʻplamida va haqiqiy ikki kishilik Live sessiyasida emas. Parol iborani oʻzgartirish hali yaratilmagan. 0.9 dan oldingi versiyalar eslatmalarni koʻrsatmaydi.
- Sinf koʻrinishi ishtirokchilar roʻyxatidan iborat; u haqiqiy oʻqituvchi va talabalar bilan sinab koʻrilmagan.
- Ingliz tilidan boshqa tillar ona tilida soʻzlashuvchi tomonidan oʻqilguncha mashina qoralamalari hisoblanadi.
- Windows oʻrnatuvchilari kod bilan imzolanmagan ({{ui:Batafsil}}, soʻng {{ui:Baribir ishga tushirish}}); macOS disk tasviri notarizatsiya qilinmagan (sichqonchaning oʻng tugmasi, soʻng {{ui:Ochish}}).

## Oldinroq: 0.8 va 0.8.1

Bu MarkupCraft 0.7 bilan solishtirganda 0.8 va 0.8.1 versiyalarida nimalar oʻzgarganini koʻrsatadi. Eng katta yangilik shundaki, belgilash bir kishi yoki sizning shaxsiy yordamchingiz bajaradigan vazifa boʻlishi mumkin va chizmaning haqiqatan oʻzgarganda oʻzi yopiladi.

### Yangi

**Harakat qiluvchi belgilashlar**

- **Belgilashni vazifaga aylantirish.** Bir yoki bir nechta belgilashni tanlang, {{ui:Vazifalar}} yorligʻini oching va {{ui:Tanlanganni vazifaga aylantirish}} ni tanlang. Vazifada sarlavha, uni bajaradigan shaxs yoki ulangan yordamchingiz, ixtiyoriy muddat va holat boʻladi, u varaqdagi oʻrnini hamda oʻz muhokamasini saqlaydi. Qarang: [Belgilashni vazifaga aylantirish](topic:markups-that-act).
- **Oʻzini yopadigan vazifalar.** Vazifa oʻz belgilashi ichidagi chizmani kuzatishi mumkin. Varaqning yangiroq reviziyasini oching va {{ui:Hozir tekshirish}} ni tanlang: agar oʻsha joydagi chiziqlar sezilarli darajada oʻzgargan boʻlsa, vazifa Bajarildi deb belgilanadi, uning belgilashi Yakunlandi boʻladi va muhokamada nima oʻzgarganini aytadigan eslatma paydo boʻladi. Yangi sana tamgʻasi yoki 1.5 punktdan kamroq siljigan chiziqlar hisobga olinmaydi. Vazifa oʻrniga model elementini ham kuzatishi mumkin: yordamchingiz elementni `tasks_check` bilan xabar qiladi, keyingi xabar farq qilsa yoki element oʻchirilsa, vazifa yopiladi. Bitta bekor qilish qadami uni qayta ochadi.
- **Ishni topish.** {{ui:Vazifalar}} roʻyxatini holati va kim uchunligi boʻyicha filtrlang, jumladan {{ui:Muddati oʻtgan}} boʻyicha; {{ui:Tayinlangan}} ni, soʻng yordamchingiz kutayotgan ishlarni koʻrish uchun {{ui:Yordamchi}} ni tanlang. Muddati oʻtgan vazifa Muammolar panelida ogohlantirish sifatida koʻrinadi. {{ui:CSV}} roʻyxatni eksport qiladi. Vazifalar belgilash bilan birga PDFda saqlanadi va Live orqali boshqa belgilash xususiyatlari kabi uzatiladi.

**Nima oʻzgargani, oddiy roʻyxat koʻrinishida**

- **Oʻzgarishlar roʻyxati.** {{ui:Solishtirish}} yorligʻini oching, soʻng {{ui:Butun toʻplamni solishtirish}}, oldingi va keyingi faylni tanlang va {{ui:Oʻzgarishlar roʻyxatini tuzish}} ni tanlang. Roʻyxat avval sonni koʻrsatadi, soʻng har bir oʻzgargan varaqni eng katta oʻzgarishdan boshlab qamrab oladi: varaqda qayerda, qanchalik katta (haqiqiy birliklarda, kalibrlangan varaqda esa qogʻoz dyuymlarida ham), chiziqlar qoʻshilganmi yoki olib tashlanganmi, u yerda nechta belgilash borligi va qaysi soʻzlar paydo boʻlgan yoki yoʻqolgani. {{ui:Roʻyxatni nusxalash}} uni buferga qoʻyadi, {{ui:CSV}} esa har bir oʻzgarish uchun bir qator yozadi. Qarang: [Reviziyalar orasida nima oʻzgarganini roʻyxatlash](topic:what-changed-in-words).

**Ovozli eslatmalar va qarorlar**

- **Ovozli eslatmalar.** {{ui:Eslatmalar}} yorligʻida {{ui:Ovozli eslatma yozish}} ni tanlang, soʻng {{ui:Yozuvni toʻxtatish}} ni tanlang; yozuvlar ikki daqiqadan keyin oʻzi toʻxtaydi. Eslatma varaq markaziga biriktiriladi, uni kerakli joyga surasiz va sarlavhani {{ui:Xususiyatlar}} ichida yozasiz, roʻyxatdagi {{ui:Ijro etish}} esa uni ijro etadi. Yozuv PDF ichida saqlanadi.
- **Qarorlar.** {{ui:Qaror biriktirish}} varaqqa bir-ikki jumla yozadi. Agar u oldingi qarorni almashtirsa, {{ui:U almashtiradi}} da oʻsha qarorni tanlang: eski qaror qoladi, Almashtirildi deb belgilanadi va yangisiga ishora qiladi. Bitta bekor qilish qadami uni qaytaradi. Qarang: [Varaqqa ovozli eslatmalar va qarorlarni biriktirish](topic:voice-notes-and-decisions).

**Reviziyaga qizil belgilash**

- **Yuborish va javob berish.** {{ui:Vazifalar}} yorligʻida {{ui:Reviziyagacha qizil belgilash}} ni oching, belgilashlar qaysi reviziyaga qarshi ekanini kiriting va {{ui:Redline faylini eksport qilish}} ni tanlang. Har bir ochiq belgilash uchun bitta elementdan iborat `.redline.json` faylini olasiz: varaq, joy (varaq ulushlari sifatida, shuning uchun boshqa oʻlchamda qayta chop etilsa ham mos keladi), soʻzlar, muallif, muhokama va uning vazifasi. Oʻzgarishlarni bajaruvchi shaxs `.redline-answers.json` faylida Qabul qilindi, Rad etildi yoki Bajarildi deb javob beradi; {{ui:Javoblar faylini yuklash…}} har bir belgilashga shu holatni va chizmachining izohini bitta bekor qilish qadami sifatida beradi. Qarang: [Belgilashlarni chizmachiga qizil belgilash sifatida yuborish](topic:redline-to-revision).

**AI yordamchilari**

- **Koʻproq vositalar.** CadCraft Studio orqali ulagan yordamchi vazifalarni roʻyxatlashi (`tasks_list`), bittasini yaratishi yoki oʻzgartirishi (`task_set`), uni olib tashlashi (`task_clear`), bitta vazifani yangiroq reviziya yoki elementga qarshi tekshirishi (`tasks_check`) hamda ikki ochiq reja toʻplami orasidagi oddiy oʻzgarishlar roʻyxatini oʻqishi (`revisions_changes`) mumkin. U faqat {{ui:Yordamchilar}} kaliti ostida belgilagan vositalarni oladi va har bir oʻzgarish bitta bekor qilish qadami boʻladi. Qarang: [MarkupCraft ilovasini AI yordamchisi bilan ishlatish](topic:use-with-ai-assistants).

### Barcha ilovalarda

- **Tillar.** CadCraft Studio endi 54 tilga ega. Oʻntasi yangi: litva, latish, bosniy, marathi, telugu, alban, afrikaans, filipin, suaxili va oʻzbek. Ingliz tilidan boshqa barcha tillar ona tilida soʻzlashuvchi tomonidan oʻqilguncha mashina qoralamalari hisoblanadi.
- **Kiritish qurilmalari.** {{ui:Sozlamalar}} › {{ui:Global}} › {{ui:Kiritish qurilmalari}} trekpad, sichqonchaning yon tugmalari, qalam, barmoq bosishlari, 3D sichqoncha, oʻyin pulti yoki MIDI kontroller nima qilishini belgilaydi — barcha ilovalar uchun yoki faqat shu bitta ilova uchun. Siz biror narsani oʻzgartirmaguningizcha, har bir qurilma avvalgidek ishlaydi. Qarang: [Trekpad, 3D sichqoncha yoki kontrollerdan foydalanish](common:input-devices).
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} da {{ui:Oʻrash}} (standart), {{ui:2 qator}} va {{ui:1 qator}} variantlari bor, shuning uchun chizma uchun koʻproq joy qoladi. Qarang: [Panellarni joylashtirish](common:arrange-panels).
- **Xususiyatlar jadvali.** Belgilashning Uslub maydonlari umumiy jadvalni ishlatadi, yigʻiladigan kategoriyalar va yorliq hamda qiymat ustunlari bilan.
- **Muammolar paneli.** Ilovadagi ogohlantirishlar, masalan muddati oʻtgan vazifa, bitta Muammolar panelida yigʻiladi.
- **Live va qoʻshimchalar.** Live sessiyalari [Live rejimida birgalikda ishlash](common:work-together-live) boʻlimida tasvirlangan; hisobingizga bogʻliq qoʻshimchalar roʻyxati esa [Qoʻshimchalar va hisobingiz roʻyxati](common:addons-basics) boʻlimida.
- **AI ni ulang.** CadCraft Studio oʻz yordamchingiz uchun markaz: sakkiz ilovaning hammasi uchun bir marta ulang. Ilovalarning oʻzida AI yoʻq.

### 0.8.1 da tuzatilgan

- **Studio ishlayotgan vaqtda tilni almashtirishi mumkin.** Ilgari ish stoli ilovasi va qadoqlangan nashrlar ingliz tilida qolardi. Bu hali har bir platformada sinovdan oʻtmagan: til oʻzgarmasa, bizga xabar bering.
- Studio 0.8 oʻrnatmalariga {{ui:Sozlamalar}} › {{ui:Yangilanishlar}} orqali 0.8.1 taklif qilinadi.

### Bu versiyada hali yoʻq

- **Kod bilan imzolanmagan.** Windows oʻrnatuvchilari va macOS .dmg hali hech qanday imzoga ega emas. Windowsʼda SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:Batafsil}} ni, soʻng {{ui:Baribir ishga tushirish}} ni tanlang. Macʼda CadCraft Studio ustida sichqonchaning oʻng tugmasini bosing va {{ui:Ochish}} ni tanlang. Doʻkon nashrlari toʻxtatilgan.
- **AI ni ulash baʼzi joylarda tugallanmagan.** Studio ichida bir tugma bilan ulanish, brauzer yordamchilari uchun xostlangan konnektor va Studio ichidagi oʻz API kalitingiz bu relizda vaʼda qilinmagan. Vazifa sikli sinovdan oʻtgan, lekin hali haqiqiy yordamchi bilan emas.
- **Vazifa tekshiruvlari bir xil sahifa oʻlchamini talab qiladi.** Boshqa oʻlchamda qayta chop etilgan varaq mos kelmaydi, shuning uchun uning vazifalari yopilmaydi. Varaqlar varaq raqami boʻyicha, aks holda sahifa oʻrni boʻyicha juftlanadi.
- **Ovozli eslatmalar faqat yozuvlardir.** Matn yoʻq, yordamchi eslatmaning uzunligini, muallifini va sarlavhasini koʻradi, ovozni emas. Yozuv soxta mikrofon bilan ekransiz brauzerda sinab koʻrilgan; telefon, planshet yoki noutbukdagi haqiqiy mikrofon hali tekshirilmagan.
- **Hisoblash varaqlari va sabablar PDF ichida.** Ular faylning shaxsiy yozuvida saqlanadi. Eski MarkupCraft bu yozuvni eʼtiborsiz qoldiradi va faylni keyingi saqlashda tashlab yuboradi, shuning uchun bunday faylni 0.8 yoki undan yangi versiyada oching va saqlang.
- **Chizmachi tomonidagi qizil belgilashlar.** CadCraft qizil belgilash faylini oʻqish va unga javob berishi hali yaratilmagan.
- **Boshqa tillar.** Tamil tilida ilova paneli 528 px ga toʻlib ketadi.

Qolgan hamma narsa [Hali yaratilmagan](topic:not-built-yet) boʻlimida. Undan oldingi reliz uchun [0.7 versiyasidagi yangiliklar](topic:whats-new-0-7) ga qarang.

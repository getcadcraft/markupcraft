---
title: 0.9-da yeniliklər
summary: Heç vaxt çap olunmayan qeydlər və Pasteboard, şifrələnmiş şəxsi qeydlər və müştəri üçün təmiz surət, bütün çertyoj dəsti üçün kütləvi keçidlər, on üsullu Qövs aləti, Live-da başqa nəzərdən keçirəni izləmək və silinmiş markup-ın yadda saxlanılan PDF-də qalmasına dair düzəliş.
keywords: yeniliklər, nə var yeni, 0.9, buraxılış qeydləri, dəyişikliklər jurnalı, qeydlər, pasteboard, şəxsi qeydlər, parol ifadəsi, şifrələnmiş, qeydləri gizlət, qeydləri göstər, təmiz surət, snapshot, kütləvi keçidlər, vərəq çağırışları, keçid vərəqləri, başlıq bloku, vərəq nömrəsi, addendum, yenidən nömrələmə, pdf keçidi, qövs, qövs üsulları, üç nöqtəli qövs, radius, izlə, məni izlə, live, sinif görünüşü, insanlar siyahısı, silinmiş markup, ipucları, sekme başlıqları, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, tapşırıq, tapşırıqlar, təyin edilən şəxs, son gün, müddəti keçmiş, indi yoxla, nə dəyişdi, revizyonlar, müqayisə, səsli qeyd, qərar, redline, cavablar faylı, layihəçi, köməkçi, mcp, problemlər, dillər, giriş cihazları, trackpad, alət sətirləri, xüsusiyyət şəbəkəsi, yeniləmə
from: dbdd7ed4
---

Bu, 0.8.1 ilə müqayisədə MarkupCraft 0.9-da nələrin dəyişdiyidir. Əsas fikir budur ki, iş qeydləriniz müştərinin aldığı səhifədən kənarda qalır və bütün çertyoj dəsti bir keçiddə əlaqələndirilə bilər.

## Yeni

### Qeydlər, pasteboard və şəxsi qeydlər

- **Pasteboard.** Hər vərəqin ətrafındakı sahə bir masadır: vərəqin yanında çəkilən, yazılan və ya yapışdırılan hər şey qeyddir və heç vaxt çap olunmur. Otaq üçün uzaqlaşmaq üçün {{ui:Pasteboard-u göstər}} seçin, və ya {{ui:Pasteboard-a snapshot}} seçin, qutu çəkin, sonra çertyojun bir hissəsinin şəklini vərəqin yanına qoymaq üçün {{ui:Pasteboard-a}} seçin. Snapshot şəkildir və vərəq dəyişəndə dəyişmir. Bax: [Qeydlər, pasteboard və şəxsi qeydlər](topic:notes-and-pasteboard).
- **Qeydləri göstərmək və gizlətmək.** İstənilən markup qeyd ola bilər: {{ui:Qeydlər}} nişanında {{ui:Yeni əlavələr bunlar olacaq:}} təyin edin, və ya {{ui:Xüsusiyyətlər}}-də {{ui:Bu əlavə bunlardır:}} təyin edin. {{key:Shift+H}} və ya vərəqin altındakı {{ui:Qeydlər}} düyməsi bütün qeydləri eyni anda gizlədir və göstərir. Qeydlər çapdan, düzləşdirilmiş surətlərdən, siyahılardan və ixraclardan kənarda qalır və digər PDF oxuyucular onları göstərmir. Saxlanılmış PDF növbəti dəfə MarkupCraft-da açılanda onları saxlayır.
- **Şəxsi qeydlər.** {{ui:Parol ifadəsi təyin edin}} seçin, sonra markup-ı {{ui:Şəxsi qeyd}} edin. O, faylda ən azı 10 simvoldan ibarət parol ifadəsi ilə şifrələnir və bərpa yoxdur: heç kim, o cümlədən biz, parol ifadəsi olmadan aça bilməz. {{ui:Kilidlə}} şəxsi qeydləri gizlədir; {{ui:Bu cihazda kilid açıq qalsın}} defolt olaraq söndürülüdür.
- **Təmiz surəti saxlayın.** {{ui:Təmiz nüsxəni saxla}} bütün qeydləri, şəxsi qeydləri və pasteboard-dakı hər şeyi silir. Müştəriyə gedən fayl üçün bundan istifadə edin.

### Bütün dəsti əlaqələndirin

- **Kütləvi keçidlər.** {{ui:Səhifələr}} › {{ui:Kütləvi keçidlər…}} seçin, və ya {{ui:Vərəqlər}} panelində {{ui:Mətni axtar}} altındakı {{ui:Vərəq çağırışlarına keçid verin…}} seçin. 1-ci addım hər vərəqin nömrəsini və adını başlıq blokundan oxuyub siyahıya salır; səhv olanları düzəldin. 2-ci addım tapılan çağırışları siyahıya salır, məsələn `3/A-501` və ya `DETAIL 2 ON A-501`. {{ui:Keçid veriləcək}} hər biri üçün vərəqi və görünüşü göstərir, {{ui:Keçid verilməyib}} isə açıq heç bir vərəqdə olmayan nömrələri göstərir, və {{ui:Keçidləri yaradın}} hamısını bir geri qaytarma addımında yaradır. Əlavədən (addendum) və ya yenidən nömrələmədən sonra yenidən işə salın; əl ilə yaratdığınız keçidlər heç vaxt dəyişdirilmir. Görünüşü olan keçid PDF keçidi kimi saxlanılır, beləliklə digər oxuyucular da detalı açır. Bax: [Vərəq keçidləri](topic:sheet-links).

### Çertyoj

- **On üsulla qövs.** {{ui:Qövs}} aləti ({{key:O}}) indi səhifənin üzərində {{ui:Qövs üsulu}} qutusuna malikdir: qövsü çəkmək üçün on yol var, bucaq, uzunluq, radius və istiqamət klikləmə və ya yazma ilə verilə bilər. Bax: [Qövsü on yolla çəkin](topic:draw-an-arc).

### Birlikdə işləmək

- **Başqa nəzərdən keçirəni izləyin.** Live sessiyasında adının yanındakı {{ui:İzlə}} seçin və baxışınız onunkiylə birlikdə hərəkət edir; öz baxışınızı sürüşdürsəniz və ya miqyasını dəyişsəniz izləmə dayanır. Host {{ui:Hamıdan məni izləmələrini istə}} seçə bilər. İnsanlar siyahısında hər kəsin rəngi, adı, olduğu vərəq və son redaktə vaxtı göstərilir. Bax: [Live sessiyasında başqa nəzərdən keçirəni izləyin](topic:follow-in-live).

## Hər tətbiqdə

- İpucları Bootstrap ipucudur: başlanğıc ipucu bağlana bilər, sekme zolaqları dolanda sürüşür və brauzer sekme başlıqları `<sənəd> — MarkupCraft | CadCraft` kimi oxunur.
- Çox bölməli panel bir bölməni açır və digərlərini bağlayır (karetin yanındakı kilid birini açıq saxlayır); Parametrlərdəki açar bunu söndürür.
- Hər tətbiq {{ui:Kitabxana}} obyektlərinin standart toplusu ilə başlayır.
- Çəki və temperatur vahidləri {{ui:Ölçü vahidləri}} parametrlərində mövcuddur.

## Düzəldildi

- **Silinmiş markup-lar artıq yadda saxlanılmış PDF-də oxuna bilmir.** Əvvəllər saxlayanda silinmiş və ya yenidən yazılmış annotasiya səhifədən çıxarılırdı, lakin obyekti mətni ilə faylda qalırdı. İndi saxlayanda bu obyektlər silinir. Əvvəlki quruluşlarla saxlanılmış fayllar yenidən saxlanılana qədər onları saxlayır.

## Dürüst məhdudiyyətlər

- Kütləvi keçidlər öz test dəstlərimizdə sınaqdan keçirilib. Real dəstlər dairəcikləri müxtəlif yollarla çəkir, buna görə müştəri dəstində bəzi görünüşlər qaçıla bilər. Skanlanmış vərəqlər əvvəlcə {{ui:Mətni oxu (OCR)…}} tələb edir.
- Qeydlər, şəxsi qeydlər və pasteboard headless brauzerdə və öz fayllarımızda sınaqdan keçirilib, böyük real vektor dəsti ilə və real iki nəfərlik Live sessiyasında yox. Parolun dəyişdirilməsi hələ qurulmayıb. 0.9-dan köhnə quruluşlar qeydləri göstərmir.
- Sinif görünüşü insanlar siyahısıdır; real müəllim və tələbələrlə sınaqdan keçirilməyib.
- İngilis dilindən başqa dillər native danışan oxuyana qədər maşın qaralamalarıdır.
- Windows quraşdırıcıları kod imzalı deyil (Ətraflı məlumat, sonra Yenə də işə sal); macOS disk şəkli notarizasiya olunmayıb (sağ klik, sonra Aç).

## Əvvəlki: 0.8 və 0.8.1

Bu, 0.7 ilə müqayisədə MarkupCraft 0.8 və 0.8.1-də nələrin dəyişdiyidir. Əsas yenilik budur ki, markup tapşırıq ola bilər: onu kimsə və ya öz köməkçiniz yerinə yetirir və çertyoj həqiqətən dəyişəndə özü bağlanır.

### Yeni

**Markup-lar işləyir**

- **Markup-ı tapşırığa çevirin.** Bir və ya bir neçə markup seçin, {{ui:Tapşırıqlar}} nişanını açın və {{ui:Seçilənləri tapşırığa çevir}} seçin. Tapşırığın başlığı, onu icra edəcək şəxs və ya qoşulmuş köməkçiniz, istəyə görə son gün və vəziyyəti var; öz yerini vərəqdə və zəncirini saxlayır. Bax: [Markup-ı tapşırığa çevirin](topic:markups-that-act).
- **Özü bağlanan tapşırıqlar.** Tapşırıq öz markup-ının içindəki çertyoju izləyə bilər. Vərəqin daha yeni revizyonunu açın və {{ui:İndi yoxla}} seçin: həmin sahədəki xətlər əhəmiyyətli dərəcədə dəyişibsə, tapşırıq Bitib olaraq işarələnir, markup-ı Tamamlanıb olur və zəncirdə bir qeyd nəyin dəyişdiyini deyir. Yeni tarix möhürü və ya 1.5 nöqtədən az yerini dəyişən xətlər hesaba düşmür. Tapşırıq bunun əvəzinə model elementini izləyə bilər: köməkçiniz elementi `tasks_check` ilə bildirir, sonrakı fərqli bildiriş və ya silinmiş element tapşırığı bağlayır. Bir geri qaytarma addımı onu yenidən açır.
- **İşi tapın.** {{ui:Tapşırıqlar}} siyahısını vəziyyətə və kim üçün olduğuna görə süzün, {{ui:Müddəti keçmiş}} daxil olmaqla; {{ui:Təyin edilib}} seçin, sonra köməkçinizin gözlədiyi işi görmək üçün {{ui:Köməkçi}} seçin. Son gününü keçmiş tapşırıq Problemlər panelində xəbərdarlıq kimi göstərilir. {{ui:CSV}} siyahını ixrac edir. Tapşırıqlar markup-la birlikdə PDF-də saxlanılır və digər markup xüsusiyyətləri kimi Live vasitəsilə yayılır.

**Nəyin dəyişdiyi, sadə siyahı kimi**

- **Dəyişiklikləri siyahıya salın.** {{ui:Müqayisə}} nişanını açın, sonra {{ui:Bütün dəsti müqayisə et}}, əvvəlki və sonrakı faylı seçin və {{ui:Dəyişiklikləri siyahıya salın}} seçin. Siyahı sayla başlayır, sonra hər dəyişən vərəqi əhatə edir, ən böyük dəyişiklik birinci: vərəqdə harada, nə qədər böyük (kalibrlənmiş vərəqdə real vahidlərlə, həm də kağızda düymlə), xətlər əlavə olunub və ya silinib, orada neçə markup var və hansı sözlər əlavə olunub və ya itib. {{ui:Siyahını kopyalayın}} onu buferə qoyur, {{ui:CSV}} isə hər dəyişiklik üçün bir sətir yazır. Bax: [Revizyonlar arasında dəyişiklikləri siyahıya salın](topic:what-changed-in-words).

**Səsli qeydlər və qərarlar**

- **Səsli qeydlər.** {{ui:Qeydlər}} nişanında {{ui:Səsli qeyd yazın}} seçin, sonra {{ui:Yazını dayandırın}}; yazılar iki dəqiqədən sonra özü dayanır. Qeyd vərəqin mərkəzində sancaqlanır, onu lazım olan yerə sürükləyirsiniz və {{ui:Xüsusiyyətlər}}-də başlıq yazırsınız; siyahıdakı {{ui:Oxut}} onu oxudur. Yazı PDF-in içində saxlanılır.
- **Qərarlar.** {{ui:Qərar əlavə edin}} vərəqə bir-iki cümlə yazır. Əgər əvvəlki qərarı əvəz edirsə, onu {{ui:Əvəz edir}}-də seçin: köhnə qərar qalır, Əvəz olunub kimi işarələnir və yeniyə işarə edir. Bir geri qaytarma addımı onu geri alır. Bax: [Səsli qeydləri və qərarları vərəqə sancaqlayın](topic:voice-notes-and-decisions).

**Redline revizyona**

- **Göndərin və cavablandırın.** {{ui:Tapşırıqlar}} nişanında {{ui:Redline-ı revizyona}} açın, markup-ların qarşısında olduğu revizyonu yazın və {{ui:Qırmızı xətt faylını ixrac et}} seçin. Hər açıq markup üçün bir element olan `.redline.json` faylı alırsınız: vərəq, mövqe (vərəqin hissələri kimi, belə ki, başqa ölçüdə yenidən çap olunmuş vərəq yenə düzgün düşür), sözlər, müəllif, zəncir və onun tapşırığı. Dəyişiklikləri çəkən şəxs `.redline-answers.json` faylında Qəbul edilib, Rədd edilib və ya Bitib cavabını verir; {{ui:Cavablar faylını yüklə…}} hər markup-a həmin statusu və layihəçinin qeydini bir geri qaytarma addımı kimi verir. Bax: [Markup-ları layihəçiyə redline kimi göndərin](topic:redline-to-revision).

**Köməkçilər**

- **Daha çox alət.** CadCraft Studio vasitəsilə qoşulmuş köməkçiniz tapşırıqları siyahıya sala bilər (`tasks_list`), birini yarada və ya dəyişə bilər (`task_set`), tapşırığı çıxara bilər (`task_clear`), birini daha yeni revizyon və ya element ilə yoxlaya bilər (`tasks_check`) və iki açıq plan dəsti arasında dəyişikliklərin sadə siyahısını oxuya bilər (`revisions_changes`). Yalnız {{ui:Köməkçilər}} açarı altında işarələdiyiniz alətləri alır və hər dəyişiklik bir geri qaytarma addımıdır. Bax: [MarkupCraft-ı AI köməkçi ilə istifadə edin](topic:use-with-ai-assistants).

### Hər tətbiqdə

- **Dillər.** CadCraft Studio indi 54 dildə işləyir. On yeni: Litva, Latış, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filippin, Svahili və Özbək. İngilis dilindən başqa bütün dillər native danışan oxuyana qədər maşın qaralamalarıdır.
- **Giriş cihazları.** {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Giriş cihazları}} trackpad, siçanın yan düymələri, qələm, barmaq toxunuşları, 3D siçan, oyun pultu və ya MIDI kontrollerinin nə etdiyini müəyyən edir, hər tətbiq üçün və ya yalnız bu tətbiq üçün. Siz bir şey dəyişənə qədər hər cihaz əvvəlki kimi işləyir. Bax: [Trackpad, 3D siçan və ya kontrolleri istifadə edin](common:input-devices).
- **Alət sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} {{ui:Sarma}} (defolt), {{ui:2 sətir}} və {{ui:1 sətir}} təklif edir, beləliklə çertyoj daha çox yer alır. Bax: [Panelləri düzənləyin](common:arrange-panels).
- **Xüsusiyyət şəbəkəsi.** Markup-ın Üslub sahələri paylaşılan şəbəkədən istifadə edir, yığılan kateqoriyalar və etiket və dəyər sütunları ilə.
- **Problemlər paneli.** Tətbiqdən gələn xəbərdarlıqlar, məsələn gecikmiş tapşırıq, bir Problemlər panelində toplanır.
- **Live və əlavələr.** Live sessiyaları [Live ilə birlikdə işləmək](common:work-together-live) bölməsində izah olunub; hesabınızı izləyən əlavələr siyahısı [Əlavələr və hesab siyahınız](common:addons-basics) bölməsindədir.
- **Öz süni intellektinizi qoşun.** CadCraft Studio öz köməkçiniz üçün mərkəzdir: bir dəfə qoşulun, səkkiz tətbiq üçün. Tətbiqlərin öz süni intellekti yoxdur.

### 0.8.1-də düzəldildi

- **Studio işləyərkən dili dəyişə bilir.** Əvvəllər masaüstü tətbiq və paketlənmiş nəşrlər ingilis dilində qalırdı. Bu, hələ hər platformada sınaqdan keçirilməyib: dil dəyişmirsə bizə deyin.
- Studio 0.8 quraşdırmaları 0.8.1-i {{ui:Parametrlər}} › {{ui:Yeniləmələr}} vasitəsilə alır.

### Hələ bu versiyada deyil

- **Kod imzalı deyil.** Windows quraşdırıcıları və macOS .dmg hələ imzasız gəlir. Windows-da SmartScreen quraşdırıcını dayandırarsa, {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də CadCraft Studio-ya sağ klikləyin və {{ui:Aç}} seçin. Mağaza nəşrləri gözləmədədir.
- **Köməkçinizi qoşmaq bəzi yerlərdə tamamlanmayıb.** Studio daxilində bir kliklə qoşulma, brauzer köməkçiləri üçün hostinq olunmuş konnektor və Studio daxilində öz API açarınız bu buraxılış üçün vəd edilmir. Tapşırıq dövrəsi sınaqdan keçirilib, lakin hələ real köməkçi ilə yox.
- **Tapşırıq yoxlamaları eyni səhifə ölçüsü tələb edir.** Başqa ölçüdə yenidən çap olunmuş vərəq uyğun gəlməyəcək, buna görə onun tapşırıqları bağlanmır. Vərəqlər vərəq nömrəsinə, yoxsa səhifə mövqeyinə görə cütləşdirilir.
- **Səsli qeydlər yalnız yazılardır.** Transkript yoxdur, köməkçi qeydin uzunluğunu, müəllifini və başlığını görür, səsi yox. Yazı saxta mikrofonla headless brauzerdə sınaqdan keçirilib; real mikrofon telefonda, planşetdə və ya noutbukda hələ yoxlanılmalıdır.
- **PDF-də hesablama vərəqləri və səbəblər** faylın xüsusi yazısında saxlanılır. Köhnə MarkupCraft bu yazını nəzərə almır və faylı növbəti dəfə saxlayanda onu silir, ona görə faylı 0.8 və ya daha yenisi ilə açıb saxlayın.
- **Redline faylının layihəçi tərəfi.** CadCraft-ın redline faylını oxuyub cavablandırması hələ qurulmayıb.
- **Digər dillər.** Tamil dilində tətbiq paneli 528 px aşır.

Hər şey [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir. Bundan əvvəlki buraxılış üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).

---
title: 0.9-da yeniliklər (əvvəlki)
summary: Heç vaxt çap olunmayan qeydlər və pasteboard, şifrələnmiş şəxsi qeydlər və müştəri üçün təmiz nüsxə, bütün çertyoj dəsti üçün kütləvi keçidlər, on üsullu Qövs aləti, Live-da başqa bir rəyçini izləmək və silinmiş qeydlərin saxlanmış PDF-də qalmasının düzəldilməsi.
keywords: 0.9-da yeniliklər, əvvəlki buraxılış, yeniliklər, 0.9, buraxılış qeydləri, dəyişikliklər jurnalı, qeydlər, pasteboard, şəxsi qeydlər, parol ifadəsi, şifrələnmiş, qeydləri gizlət, qeydləri göstər, təmiz nüsxə, snapshot, kütləvi keçidlər, vərəq çağırışları, vərəqlərə keçid, ştamp bloku, vərəq nömrəsi, əlavə, yenidən nömrələmə, pdf keçidi, qövs, qövs üsulları, üç nöqtəli qövs, radius, izləmək, məni izləyin, live, sinif görünüşü, iştirakçılar siyahısı, silinmiş qeyd, ipuclar, sekmə başlıqları, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, tapşırıq, tapşırıqlar, məsul şəxs, son gün, müddəti keçmiş, indi yoxla, nəyin dəyişdiyi, revizyonlar, müqayisə, səsli qeyd, qərar, redline, cavablar faylı, çertyojçu, köməkçi, mcp, problemlər, dillər, giriş cihazları, trackpad, alət paneli sətirləri, xüsusiyyət cədvəli, yeniləmə
from: aa3dfeb8
---

Bu, 0.8.1 ilə müqayisədə MarkupCraft 0.9-da nə dəyişdiyini göstərir. Əsas fikir budur ki, işçi qeydləriniz müştərinin aldığı səhifədən kənarda qalır və bütün çertyoj dəsti bir keçidlə əlaqələndirilə bilər.

## Yeni

### Qeydlər, pasteboard və şəxsi qeydlər

- **Pasteboard.** Hər vərəqin ətrafındakı sahə masadır: vərəqin yanında çəkilən, yazılan və ya yapışdırılan hər şey qeyddir və heç vaxt çap olunmur. Otaq üçün uzaqlaşdırmaq üçün {{ui:Pasteboard-u göstər}} seçin, və ya {{ui:Pasteboard-a snapshot}} seçin, qutunu dartın, sonra çertyojun bir hissəsinin şəkilini vərəqin yanına qoymaq üçün {{ui:Pasteboard-a}} seçin. Snapshot şəkildir və vərəq dəyişəndə dəyişmir. Bax: [Qeydlər, pasteboard və şəxsi qeydlər](topic:notes-and-pasteboard).
- **Qeydləri göstərmək və gizlətmək.** Hər qeyd qeyd ola bilər: {{ui:Yeni əlavələr bunlar olacaq:}} parametrini {{ui:Qeydlər}} sekmesində, və ya {{ui:Bu əlavə bunlardır:}} parametrini {{ui:Xüsusiyyətlər}}-də təyin edin. {{key:Shift+H}} və ya vərəqin altındakı {{ui:Qeydlər}} açarı bütün qeydləri eyni anda gizlədir və göstərir. Qeydlər çapdan, düzləşdirilmiş nüsxələrdən, siyahılardan və ixraclardan kənarda qalır, digər PDF oxuyucular onları göstərmir. Saxladığınız PDF növbəti dəfə MarkupCraft-da açanda onları saxlayır.
- **Şəxsi qeydlər.** {{ui:Parol ifadəsi təyin edin}} seçin, sonra qeydi {{ui:Şəxsi qeyd}} edin. Qeyd fayla ən azı 10 simvoldan ibarət parol ifadəsi ilə şifrələnir və bərpa yoxdur: heç kim, biz də daxil olmaqla, parol ifadəsi olmadan aça bilməz. {{ui:Kilidlə}} şəxsi qeydləri gizlədir; {{ui:Bu cihazda kilid açıq qalsın}} defolt olaraq söndürülüb.
- **Təmiz nüsxəni saxlayın.** {{ui:Təmiz nüsxəni saxla}} hər qeydi, şəxsi qeydi və pasteboard-dakı hər şeyi silir. Müştəriyə göndərilən fayl üçün istifadə edin.

### Bütün dəst üçün keçidlər

- **Kütləvi keçidlər.** {{ui:Səhifələr}} › {{ui:Kütləvi keçidlər…}} seçin, və ya {{ui:Vərəqlər}} panelində {{ui:Mətni axtar}} altındakı {{ui:Vərəq çağırışlarına keçid verin…}}. Addım 1 hər vərəqin nömrəsini və adını ştamp blokundan oxunduğu kimi sadalayır; səhv olanları düzəldin. Addım 2 tapılmış çağırışları sadalayır, məsələn `3/A-501` və ya `DETAIL 2 ON A-501`. {{ui:Keçid veriləcək}} hər biri üçün vərəqi və baxışı göstərir, {{ui:Keçid verilməyib}} açıq olmayan vərəqlərin nömrələrini göstərir, {{ui:Keçidləri yaradın}} isə hamısını bir geri qaytarma addımında yaradır. Əlavədən və ya yenidən nömrələmədən sonra yenidən işə salın; əl ilə etdiyiniz keçidlər heç vaxt dəyişdirilmir. Baxışı olan keçid PDF keçidi kimi saxlanılır, beləliklə digər oxuyucular da detalı açır. Bax: [Vərəq keçidləri](topic:sheet-links).

### Çəkim

- **Qövs, on üsul.** {{ui:Qövs}} aləti ({{key:O}}) indi səhifənin üstündə {{ui:Qövs üsulu}} qutusu ilə qövs çəkmək üçün on yol təqdim edir; bucaq, uzunluq, radius və istiqamət klikləmə ilə və ya yazmaqla daxil edilə bilər. Bax: [Qövsü on üsulla çəkin](topic:draw-an-arc).

### Birlikdə iş

- **Rəyçini izləyin.** Live sessiyasında bir şəxsin adının yanında {{ui:İzlə}} seçin, sizin baxışınız onunla birlikdə hərəkət edir; öz sürüşdürmə və ya miqyaslama hərəkətiniz bunu dayandırır. Sessiya sahibi {{ui:Hamıdan məni izləmələrini istə}} seçə bilər. İştirakçılar siyahısında hər şəxsin rəngi, adı, olduğu vərəq və son redaktə vaxtı göstərilir. Bax: [Live sessiyasında başqa rəyçini izləyin](topic:follow-in-live).

## Bütün proqramlarda

- Alət ipucları Bootstrap ipuclarıdır; başlanğıc ipucu bağlana bilər, sekmə zolaqları daşanda sürüşdürülür və brauzer sekmə başlıqları `<document> — MarkupCraft | CadCraft` formatındadır.
- Bir neçə bölməsi olan panel birini açır və digərlərini bağlayır (kursorun yanındakı kilid birini açıq saxlayır); Parametrlər açarı bunu söndürür.
- Hər proqram Kitabxana obyektlərinin defolt toplusu ilə başlayır.
- Çəki və temperatur vahidləri Vahidlər parametrlərində əlçatandır.

## Düzəldilib

- **Silinmiş qeydlər saxlanmış PDF-də artıq oxuna bilmir.** Əvvəllər saxlamaq silinmiş və ya yenidən yazılmış annotasiyanı səhifəsindən çıxarırdı, lakin obyekti, mətni ilə birlikdə faylda saxlayırdı. İndi saxlamaq həmin obyektləri silir. Əvvəlki quruluşlarla saxlanmış fayllar onları yenidən saxlayana qədər hələ də saxlayır.

## Açıq məhdudiyyətlər

- Kütləvi keçidlər öz test dəstlərimizdə sınaqdan keçirildi. Real dəstlər dairələri bir çox yolla çəkir, ona görə müştəri dəstində bəzi baxışlar qaçıla bilər. Skan olunmuş vərəqlər əvvəlcə {{ui:Mətni oxu (OCR)…}} tələb edir.
- Qeydlər, şəxsi qeydlər və pasteboard headless brauzerdə və öz fayllarımızda sınaqdan keçirildi, böyük real vektor dəstində və real iki nəfərlik Live sessiyasında yox. Parolun dəyişdirilməsi hələ qurulmayıb. 0.9-dan köhnə quruluşlar qeydləri göstərmir.
- Sinif görünüşü iştirakçılar siyahısıdır; real müəllim və tələbələrlə sınaqdan keçirilməyib.
- İngilis dilindən başqa dillər ana dili danışan oxuyana qədər maşın layihələridir.
- Windows quraşdırıcıları kod imzası ilə təsdiqlənməyib (Ətraflı, sonra Yenə də işə sal); macOS disk şəkli notarizasiya olunmayıb (sağ klik, sonra Aç).

## Əvvəlki: 0.8 və 0.8.1

Bu, 0.7-yə nisbətən MarkupCraft 0.8 və 0.8.1-də nə dəyişdiyini göstərir. Ən böyük yenilik budur ki, qeyd kimdənsə və ya öz köməkçinizdən icra olunan tapşırıq ola bilər və çertyoj real olaraq dəyişəndə özü bağlanır.

### Yeni

**Hərəkət edən qeydlər**

- **Qeydi tapşırığa çevirin.** Bir və ya bir neçə qeyd seçin, {{ui:Tapşırıqlar}} sekmesini açın və {{ui:Seçilənləri tapşırığa çevir}} seçin. Tapşırığın başlığı, onu yerinə yetirəcək şəxs və ya qoşulmuş köməkçiniz, isteğe bağlı son gün və vəziyyəti var, və vərəqdəki yerini və öz yazışmasını saxlayır. Bax: [Qeydi tapşırığa çevirin](topic:markups-that-act).
- **Özünü bağlayan tapşırıqlar.** Tapşırıq öz qeydinin içindəki çertyoju izləyə bilər. Vərəqin daha yeni revizyonunu açın və {{ui:İndi yoxla}} seçin: əgər həmin sahədəki xətlər bir tükdən çox dəyişibsə, tapşırıq Bitib kimi qeyd olunur, qeydi Tamamlanıb olur və yazışmada nəyin dəyişdiyini bildirən qeyd görünür. Yeni tarix ştampı və ya 1.5 nöqtədən az hərəkət edən xətlər nəzərə alınmır. Tapşırıq əvəzinə model elementini də izləyə bilər: köməkçiniz elementi `tasks_check` ilə bildirir, sonrakı fərqli bildiriş və ya silinmiş element tapşırığı bağlayır. Bir geri qaytarma addımı onu yenidən açır.
- **Tapşırıqları tapın.** {{ui:Tapşırıqlar}} siyahısını vəziyyətə və kimin üçün olduğuna görə süzün, o cümlədən {{ui:Müddəti keçmiş}}; köməkçinizi gözləyən işi görmək üçün {{ui:Təyin edilib}} və sonra {{ui:Köməkçi}} seçin. Son günü keçmiş tapşırıq Problemlər panelində xəbərdarlıq kimi göstərilir. {{ui:CSV}} siyahını ixrac edir. Tapşırıqlar qeydlə birlikdə PDF-də saxlanır və Live vasitəsilə digər qeyd xüsusiyyətləri kimi ötürülür.

**Nəyin dəyişdiyi, sadə siyahı kimi**

- **Dəyişiklikləri siyahıya salın.** {{ui:Müqayisə}} sekmesini açın, sonra bütün dəsti müqayisə etmək üçün seçin, əvvəlki və sonrakı faylı seçin və {{ui:Dəyişiklikləri siyahıya salın}} seçin. Siyahı sayla başlayır, sonra hər dəyişən vərəqi əhatə edir, ən böyük dəyişiklik birinci: vərəqdə harada, nə qədər böyük (real vahidlərlə, kalibrlənmiş vərəqdə həm də kağızdakı düymlərlə), xətlərin əlavə olunub-olunmadığı və ya silindiyi, orada neçə qeyd olduğu və hansı sözlərin göründüyü və ya yox olduğu. {{ui:Siyahını kopyalayın}} onu buferə qoyur, {{ui:CSV}} isə hər dəyişiklik üçün bir sətir yazır. Bax: [Revizyonlar arasında nə dəyişdiyini siyahıya salın](topic:what-changed-in-words).

**Səsli qeydlər və qərarlar**

- **Səsli qeydlər.** {{ui:Qeydlər}} sekmesində {{ui:Səsli qeyd yazın}} seçin, sonra {{ui:Yazını dayandırın}}; yazılar iki dəqiqədən sonra özü dayanır. Qeyd vərəqin mərkəzinə bərkidilir, onu lazım olan yerə sürükləyirsiniz və {{ui:Xüsusiyyətlər}}-də başlıq yazırsınız; siyahıda {{ui:Oxut}} onu səsləndirir. Yazı PDF-in içində saxlanılır.
- **Qərarlar.** {{ui:Qərar əlavə edin}} vərəqə bir-iki cümlə yazır. Əgər o, əvvəlki qərarı əvəz edirsə, {{ui:Əvəz edir}} siyahısında onu seçin: köhnə qərar qalır, Əvəz olunub kimi qeyd olunur və yeniyə istinad edir. Bir geri qaytarma addımı onu geri alır. Bax: [Səsli qeydləri və qərarları vərəqə bərkidin](topic:voice-notes-and-decisions).

**Redline-dan revizyona**

- **Göndərin və cavablandırın.** {{ui:Tapşırıqlar}} sekmesində {{ui:Redline-ı revizyona}} açın, qeydlərin hansı revizyona aid olduğunu yazın və {{ui:Qırmızı xətt faylını ixrac et}} seçin. Hər açıq qeyd üçün bir elementi olan `.redline.json` faylı alırsınız: vərəq, mövqe (vərəqin hissələri kimi, beləliklə başqa ölçüdə yenidən çap olunmuş vərəq yenə uyğun gəlir), sözlər, müəllif, yazışma və onun tapşırığı. Dəyişiklikləri çəkən şəxs `.redline-answers.json` faylında Qəbul edilib, Rədd edilib və ya Bitib cavabı verir; {{ui:Cavablar faylını yüklə…}} hər qeyda həmin statusu və çertyojçunun qeydini verir, bir geri qaytarma addımı kimi. Bax: [Qeydləri çertyojçuya redline kimi göndərin](topic:redline-to-revision).

**AI köməkçiləri**

- **Daha çox alət.** CadCraft Studio vasitəsilə qoşulmuş köməkçi tapşırıqları sadalaya bilər (`tasks_list`), birini yarada və ya dəyişə bilər (`task_set`), tapşırığı götürə bilər (`task_clear`), birini daha yeni revizyon və ya elementlə yoxlaya bilər (`tasks_check`) və iki açıq plan dəsti arasında dəyişikliklərin sadə siyahısını oxuya bilər (`revisions_changes`). O, yalnız Köməkçilər açarında işarələdiyiniz alətləri alır, və hər dəyişiklik bir geri qaytarma addımıdır. Bax: [MarkupCraft-ı AI köməkçi ilə istifadə edin](topic:use-with-ai-assistants).

### Bütün proqramlarda

- **Dillər.** CadCraft Studio indi 54 dildə işləyir. On yeni: litva, latviya, bosniya, marathi, telugu, alban, afrikaans, filippin, suahili və özbək. Qeyri-ingilis dillərin hamısı ana dili danışan oxuyana qədər maşın layihələridir.
- **Giriş cihazları.** {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Giriş cihazları}} trackpad, siçanın yan düymələri, qələm, barmaq toxunuşları, 3D siçan, oyun kontrolleri və ya MIDI kontrolleri nəyi etdiyini təyin edir, hər proqram üçün və ya yalnız bu proqram üçün. Siz bir şey dəyişənə qədər hər cihaz əvvəlki kimi işləyir. Bax: [Trackpad, 3D siçan və ya kontrolleri istifadə edin](common:input-devices).
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} {{ui:Sarma}} (defolt), {{ui:2 sətir}} və {{ui:1 sətir}} təklif edir, beləliklə çertyoj daha çox yer alır. Bax: [Panelləri təşkil edin](common:arrange-panels).
- **Xüsusiyyət cədvəli.** Qeydin Üslub sahələri ortaq cədvəldən istifadə edir, daraldılan kateqoriyalar və ad və dəyər sütunları ilə.
- **Problemlər paneli.** Proqramın xəbərdarlıqları, məsələn müddəti keçmiş tapşırıq, bir Problemlər panelində toplanır.
- **Live və əlavələr.** Live sessiyaları [Live ilə birlikdə işləmək](common:work-together-live) bölməsində təsvir olunub; hesabınızdan asılı əlavələr siyahısı [Əlavələr və hesab siyahısı](common:addons-basics) bölməsindədir.
- **AI-nizi qoşun.** CadCraft Studio öz köməkçiniz üçün mərkəzdir: bir dəfə qoşulun, bütün səkkiz proqram üçün. Proqramların özündə AI yoxdur.

### 0.8.1-də düzəldilib

- **Studio işləyərkən dili dəyişə bilir.** Əvvəllər masaüstü proqram və qablaşdırılmış nəşrlər ingilis dilində qalırdı. Bu hələ hər platformada sınaqdan keçməyib: dilin dəyişmədiyini bizə bildirin.
- Studio 0.8 quraşdırmaları {{ui:Parametrlər}} › {{ui:Yeniləmələr}} vasitəsilə 0.8.1 təklif olunur.

### Bu versiyada hələ yoxdur

- **Kod imzalanmayıb.** Windows quraşdırıcıları və macOS .dmg hələ imza daşımır. Windows-da SmartScreen quraşdırıcını dayandırarsa, {{ui:Ətraflı}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də CadCraft Studio üzərində sağ klik edin və {{ui:Aç}} seçin. Mağaza buraxılışları gözləmədədir.
- **AI-ni qoşmaq bəzi yerlərdə tamamlanmayıb.** Studio daxilində bir klikli qoşulma, brauzer köməkçiləri üçün hostinq olunmuş konnektor və Studio daxilində öz API açarınız bu buraxılış üçün vəd edilmir. Tapşırıq dövrəsi sınaqdan keçirilib, lakin hələ real köməkçi ilə yox.
- **Tapşırıq yoxlamaları eyni səhifə ölçüsü tələb edir.** Başqa ölçüdə yenidən çap olunmuş vərəq uyğun gəlməyəcək, buna görə onun tapşırıqları bağlanmır. Vərəqlər vərəq nömrəsinə görə, yoxsa səhifə mövqeyinə görə cütləşdirilir.
- **Səsli qeydlər yalnız yazılardır.** Transkript yoxdur, köməkçi qeydin uzunluğunu, müəllifini və başlığını görür, səsi yox. Yazı başsız brauzerdə saxta mikrofonla sınaqdan keçirilib; telefon, planşet və ya noutbukda real mikrofon hələ yoxlanılmalıdır.
- **PDF-də hesablama vərəqləri və səbəblər** faylın şəxsi girişində saxlanılır. Köhnə MarkupCraft həmin girişi görmür və faylı növbəti saxlanmada atır, buna görə belə faylı 0.8 və ya daha yeni ilə açıb saxlayın.
- **Çertyojçunun tərəfi (redline).** CadCraft redline faylını oxuyub cavablandırması hələ qurulmayıb.
- **Digər dillər.** Tamil dilində tətbiq paneli 528 px daşır.

Qalanı [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir. Bundan əvvəlki buraxılış üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).

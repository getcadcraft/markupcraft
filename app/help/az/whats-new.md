---
title: 0.8 və 0.8.1-də yeniliklər
summary: Tapşırığa çevrilən və özü bağlanan qeydlər, versiyalar arasında dəyişikliklərin sadə siyahısı, plan üzərində səsli qeydlər və qərarlar, tərtibatçı üçün redline faylları və 0.8-in ümumi dəyişiklikləri: giriş cihazları, alət paneli sətirləri, Problemlər paneli, daha çox dil.
keywords: yeniliklər, nə yenidir, buraxılış qeydləri, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, tapşırıq, tapşırıqlar, məsul şəxs, son tarix, müddəti keçmiş, indi yoxla, nə dəyişdi, revizyonlar, müqayisə, səsli qeyd, qərar, redline, cavab faylı, tərtibatçı, köməkçi, mcp, problemlər, dillər, giriş cihazları, trackpad, alət paneli sətirləri, yeniləmə
from: 40368796
---

Bu, MarkupCraft 0.7 ilə müqayisədə 0.8 və 0.8.1-də nə dəyişdiyidir. Ən böyük yenilik budur ki, qeyd kimdənsə, ya da sizin köməkçinizdən icra olunan tapşırıq ola bilər və çertyoj real olaraq dəyişdikdə özü bağlanır.

## Yenilər

### Fəaliyyət göstərən qeydlər

- **Qeydi tapşırığa çevirin.** Bir və ya bir neçə qeyd seçin, {{ui:Tapşırıqlar}} sekmesini açın və {{ui:Seçilənləri tapşırığa çevir}} seçin. Tapşırığın başlığı, onu görəcək şəxs və ya qoşulmuş köməkçiniz, isteğe bağlı son tarix və vəziyyəti olur; vərəqdəki yerini və söhbətini saxlayır. Bax [Qeydi tapşırığa çevirin](topic:markups-that-act).
- **Özü bağlanan tapşırıqlar.** Tapşırıq öz qeydinin daxilindəki çertyojun dəyişməsini izləyə bilər. Vərəqin daha yeni revizyonunu açın və {{ui:İndi yoxla}} seçin: həmin sahədə xətlər bir tük qədərdən çox dəyişibsə, tapşırıq Bitdi kimi işarələnir, qeydi Tamamlandı olur və söhbətdə nəyin dəyişdiyini deyən qeyd yazılır. Yeni tarix ştampı və ya 1,5 nöqtədən az yerdəyişən xətlər sayılmır. Tapşırıq əvəzinə model elementini də izləyə bilər: köməkçiniz elementi `tasks_check` ilə bildirir, sonrakı fərqli hesabat və ya silinmiş element tapşırığı bağlayır. Bir geri alma addımı onu yenidən açır.
- **İşi tapın.** {{ui:Tapşırıqlar}} siyahısını vəziyyətə və kim üçün olduğuna görə süzün, {{ui:Müddəti keçmiş}} daxil olmaqla; {{ui:Təyin edilib}} seçin, sonra {{ui:Köməkçi}} ilə köməkçinizi gözləyənləri görün. Son tarixi keçmiş tapşırıq Problemlər paneli
 də xəbərdarlıq kimi görünür. {{ui:CSV}} siyahını ixrac edir. Tapşırıqlar qeydlə birlikdə PDF-də saxlanılır və digər qeyd xüsusiyyətləri kimi Live ilə ötürülür.

### Nəyin dəyişdiyi, sadə siyahı

- **Dəyişiklikləri siyahıya salın.** {{ui:Müqayisə}} sekmesini açın, sonra {{ui:Bütün dəsti müqayisə et}}, əvvəlki və sonrakı faylı seçin və {{ui:Dəyişiklikləri siyahıya salın}} seçin. Siyahı sayla başlayır, sonra hər dəyişmiş vərəqi əhatə edir, ən böyük dəyişiklik birinci: vərəqdə harada, nə qədər böyük (həm real vahidlərlə, həm də kalibrlənmiş vərəqdə kağızda düymlə), xətlər əlavə olunub ya silinibmi, orada neçə qeyd var və hansı sözlər əlavə olunub və ya itib. {{ui:Siyahını kopyalayın}} onu buferə qoyur, {{ui:CSV}} isə hər dəyişiklik üçün bir sətir yazır. Bax [Versiyalar arasında nə dəyişdiyini sözlə siyahıya salın](topic:what-changed-in-words).

### Səsli qeydlər və qərarlar

- **Səsli qeydlər.** {{ui:Qeydlər}} sekmesində {{ui:Səsli qeyd yazın}} seçin, sonra {{ui:Yazını dayandırın}}; yazılar iki dəqiqədən sonra özü dayanır. Qeyd vərəqin mərkəzinə bağlanır, onu yerinə sürükləyirsiniz və {{ui:Xüsusiyyətlər}}-də başlıq yazırsınız; siyahıdakı {{ui:Oxut}} onu oxudur. Yazı PDF-in içində saxlanılır.
- **Qərarlar.** {{ui:Qərar əlavə edin}} vərəqdə bir-iki cümlə yazır. Əgər əvvəlki qərarı əvəz edirsə, onu {{ui:Əvəz edir}} bölməsində seçin: köhnəsi qalır, Əvəz olunub kimi işarələnir və yeniyə istinad edir. Bir geri alma addımı onu geri qaytarır. Bax [Səsli qeydləri və qərarları vərəqə bağlayın](topic:voice-notes-and-decisions).

### Redline versiyaya

- **Göndərin və cavab alın.** {{ui:Tapşırıqlar}} sekmesində {{ui:Redline-ı revizyona}} açın, qeydlərin hansı revizyona aid olduğunu yazın və {{ui:Qırmızı xətt faylını ixrac et}} seçin. Hər açıq qeyd üçün bir element ehtiva edən `.redline.json` faylı alırsınız: vərəq, mövqe (vərəqin hissələri kimi, belə ki, başqa ölçüdə yenidən çap olunsa da düzülür), sözlər, müəllif, söhbət və onun tapşırığı. Dəyişikliyi çəkən şəxs `.redline-answers.json` faylında Qəbul edildi, Rədd edildi və ya Bitdi cavabı verir; {{ui:Cavablar faylını yüklə…}} hər qeyd üçün həmin statusu və tərtibatçının qeydini bir geri alma addımı kimi verir. Bax [Qeydləri redline ilə tərtibatçıya göndərin](topic:redline-to-revision).

### AI köməkçiləri

- **Daha çox alət.** CadCraft Studio vasitəsilə qoşduğunuz köməkçi tapşırıqları siyahıya sala bilər (`tasks_list`), birini yarada və ya dəyişə bilər (`task_set`), onu təmizləyə bilər (`task_clear`), daha yeni revizyona və ya elementə qarşı yoxlaya bilər (`tasks_check`) və iki açıq plan dəsti arasında dəyişikliklərin sadə siyahısını oxuya bilər (`revisions_changes`). Yalnız Köməkçilər açarı altında işarələdiyiniz alətləri alır və hər dəyişiklik bir geri alma addımıdır. Bax [MarkupCraft-ı AI köməkçi ilə istifadə edin](topic:use-with-ai-assistants).

## Bütün tətbiqlərdə

- **Dillər.** CadCraft Studio indi 54 dildədir. On yeni: Litva, Latış, Bosniya, Marathi, Telugu, Alban, Afrikaans, Filippin, Suahili və Özbək dilləri. İngilis dilindən başqa dillərin hamısı bir ana dili danışan şəxs oxuyana qədər maşın qaralamalarıdır.
- **Giriş cihazları.** {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Giriş cihazları}} trackpad-in, siçanınızın yan düymələrinin, qələmin, barmaq toxunuşlarının, 3D siçanın, oyun kontrollerinin və ya MIDI kontrollerin nə etdiyini təyin edir, bütün tətbiqlər üçün və ya yalnız bu tətbiq üçün. Siz bir şey dəyişənə qədər hər cihaz əvvəlki kimi işləyir. Bax [Trackpad, 3D siçan və ya kontrollerdən istifadə](common:input-devices).
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} variantları: {{ui:Sarma}} (standart), {{ui:2 sətir}} və {{ui:1 sətir}}, buna görə çertyoj daha çox yer alır. Bax [Panelləri tənzimləyin](common:arrange-panels).
- **Xüsusiyyətlər cədvəli.** Qeydin Üslub sahələri ortaq cədvəldən istifadə edir, yığıla bilən kateqoriyalar və etiket və dəyər sütunları ilə.
- **Problemlər paneli.** Tətbiqdən gələn xəbərdarlıqlar, məsələn, müddəti keçmiş tapşırıq, bir Problemlər panelində toplanır.
- **Live və əlavələr.** Canlı sessiyalar [Canlı birgə işləmək](common:work-together-live) bölməsində təsvir olunub; hesabınızın ardınca gələn əlavələr siyahısı isə [Əlavələr və hesab siyahısı](common:addons-basics) bölməsindədir.
- **AI-nizi qoşun.** CadCraft Studio öz AI köməkçiniz üçün mərkəzdir: bir dəfə qoşun, səkkiz tətbiqin hamısı üçün. Tətbiqlərin özlərində AI yoxdur.

## 0.8.1-də düzəldilənlər

- **Studio işləyərkən dili dəyişə bilir.** Əvvəllər masaüstü tətbiq və paketlənmiş nəşrlər ingilis dilində qalırdı. Bu hələ hər platformada sınaqdan keçməyib: dil dəyişmirsə, bizə deyin.
- 0.8 quraşdırmaları {{ui:Parametrlər}} › {{ui:Yeniləmələr}} vasitəsilə 0.8.1 təklif olunur.

## Bu versiyada hələ yoxdur

- **Kodla imzalanmayıb.** Windows quraşdırıcılarında və macOS .dmg-də hələ imza yoxdur. Windows-da SmartScreen quraşdırıcını dayandırırsa, {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də CadCraft Studio-ya sağ basın və {{ui:Aç}} seçin. Mağaza buraxılışları dayandırılıb.
- **AI qoşulması bəzi yerlərdə tamamlanmayıb.** Studio daxilində bir kliklə qoşulma, brauzer köməkçiləri üçün yerləşdirilmiş konnektor və Studio daxilində öz API açarınız bu buraxılış üçün vəd olunmur. Tapşırıq dövrü sınaqdan keçib, amma hələ real köməkçi ilə yox.
- **Tapşırıq yoxlamaları eyni səhifə ölçüsü tələb edir.** Başqa ölçüdə yenidən çap olunmuş vərəq uyğun gəlməyəcək, buna görə onun tapşırıqları bağlanmır. Vərəqlər vərəq nömrəsinə görə, o olmadıqda isə səhifənin yerinə görə cütləşdirilir.
- **Səsli qeydlər yalnız yazılardır.** Transkript yoxdur, köməkçi qeydin uzunluğunu, müəllifini və başlığını görür, səsi yox. Yazı başsız brauzerdə saxta mikrofonla sınaqdan keçirilib; telefon, planşet və ya noutbukda real mikrofon hələ yoxlanılmalıdır.
- **Hesablama vərəqləri və PDF-də səbəblər** faylın xüsusi girişində saxlanılır. Köhnə MarkupCraft bu girişi nəzərə almır və faylı növbəti saxladıqda silir, buna görə belə faylı 0.8 və ya sonrakı versiya ilə açıb saxlayın.
- **Redline-ların tərtibatçı tərəfi.** CadCraft-ın redline faylını oxuyub ona cavab verməsi hələ qurulmayıb.
- **Digər dillər.** Tamil dilində tətbiq paneli 528 px aşır.

Qalanları [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir. Bundan əvvəlki buraxılış üçün bax [0.7-də yeniliklər](topic:whats-new-0-7).

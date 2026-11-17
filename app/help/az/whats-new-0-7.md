---
title: 0.7-də yeniliklər (əvvəlki)
summary: Yeni Sahə nişanında RFI-lər, təqdimatlar və gündəlik jurnallar, son tarixlər, müddəti keçənlər qırmızı rənglə, CSV və BCF, oflayn iş və Birləşdir; statusları quran, cavab verən və siyahını ixrac edən köməkçilər; Parametrləri izləyən ölçü siyahıları; yığılıb gizlənən panellər və yerini dəyişən dialoqlar.
keywords: 0.7 yenilikləri, əvvəlki buraxılış, buraxılış qeydləri, dəyişikliklər jurnalı, dəyişikliklər, 0.7, versiya, yeni xüsusiyyətlər, sahə, sahə qeydləri, rfi, məlumat sorğusu, təqdimat, gündəlik jurnal, sahə gündəliyi, müddəti keçmiş, son tarix, mənə təyin edilib, sancaq, birləşdir, oflayn, planşet, bcf, csv, köməkçi, mcp, markup statusu, cavab, ixrac, ölçü vahidləri, ölçü siyahıları, ulduz, kalibrləmə, yığcam, panellər, dialoqlar, portuqal dili
from: f8578677
---

Bu, 0.6 ilə müqayisədə MarkupCraft 0.7-də nələrin dəyişdiyidir. Əsas yenilik sahə qeydləridir: markup-larınızın yanında PDF-in içində saxlanılan RFI-lər, təqdimatlar və gündəlik jurnallar.

## Yeni

### RFI-lər, təqdimatlar və gündəlik jurnallar

- **Sahə nişanı.** {{ui:Sahə}} nişanını açın və {{ui:RFI}}, {{ui:Təqdimat}} və ya {{ui:Gündəlik jurnal}} seçin. RFI və ya təqdimatın yerinə aid olduğu vərəqə toxunun və ya klikləyin; sancaq yeri göstərəcək. Gündəlik jurnal sancaq olmadan açıq vərəqə düşür ({{ui:Sancaq qoy}} sonra əlavə edir, {{ui:Sancağı köçür}} istənilən sancağı köçürür). Hər qeydin öz nömrəsi var (RFI-0001, SUB-0001, LOG-0001), başlıq, mətn, status, təyin edilmiş şəxs, son tarix, cavablar zənciri və əlavə fayl adlarının siyahısı. Bax: [RFI-ləri, təqdimatları və gündəlik jurnalları izləyin](topic:field-records).
- **Nəyin gecikdiyini görün.** Siyahını növə, statusa, son tarixə (müddəti keçmiş, 7 gün içində, son tarixi var və ya yoxdur), bu vərəqə və ya bütün vərəqlərə, mətn axtarışına və ya {{ui:Mənə təyin edilib}} görə süzün. Son tarixi keçmiş və hələ gözləyən qeyd siyahıda və öz sancağında qırmızı rənglə **{{ui:Müddəti keçmiş}}** kimi işarələnir. Bax: [Vacib olanı tapın](topic:field-records#find-what-matters).
- **CSV və BCF.** {{ui:CSV}} siyahıdakı qeydləri cədvəl kimi yazır; {{ui:BCF}} onları hər biri vərəqdəki yerinin şəkli ilə BCF mövzuları kimi yazır. Hər ikisi süzgəcləri izləyir. Bax: [İxrac](topic:field-records#export).
- **Oflayn, və iki surətin birə çevrilməsi.** Qeydlər PDF-in içində saxlanılır və şəbəkə tələb etmir, beləliklə sahədəki planşet onları əlavə edə, cavablandıra və saxlaya bilər. Ofisə qayıdanda {{ui:Birləşdir}} eyni PDF-in başqa surətinin qeydlərini id-lərinə görə birləşdirir, bir geri qaytarma addımı kimi. Bax: [Saxlama, oflayn iş və surətlərin birləşdirilməsi](topic:field-records#save-offline-and-merging-copies).

### Süni intellekt köməkçiləri

- **Köməkçinin daha çox edə bildikləri.** CadCraft Studio vasitəsilə qoşulmuş öz köməkçiniz indi markup-ın statusunu təyin edə bilər (`markup_status`, zəncirində qeydə alınır), zəncirdə cavab verə bilər (`markup_reply`) və {{ui:Qeydlər}} siyahısını süzgəclərlə göstərdiyi kimi CSV və ya BCF olaraq ixrac edə bilər (`markups_export`). Hər dəyişiklik bir geri qaytarma addımıdır və köməkçinin adı ilə imzalanır. Bax: [Köməkçinin nə istəyə biləcəyi](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Hər tətbiqdə

- **Ölçü vahidləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Ölçü vahidləri}} uzunluq, sahə, həcm, bucaq və əyinti üçün ayrı-ayrı siyahılara malikdir, vahidlərin təriflərinin verdiyi dəqiq ölçülərlə (ABŞ survey fut öz vahididir). İstifadə etmədiyiniz vahidləri söndürün, onlar siyahılardan çıxır; birini ulduzlasanız, yeni iş ondan başlayır. Fayl həmişə öz vahidini saxlayır. MarkupCraft-da ölçmə və mövqe vahidləri {{ui:Parametrlər}} › {{ui:MarkupCraft}}-dakı və kalibrləmə dialoqundakı vahid açarlarını izləyir; ulduz MarkupCraft-ın öz parametrlərini saxlayana qədər ölçmə vahidini təyin edir; kalibrləmə zamanı yazdığınız real məsafə istənilən vahidin işarəsini daşıya bilər, məsələn `3 yd` və ya `1.5 km`. Bax: [Vahidlər, yazılmış qiymətlər və vahid siyahıları](common:unit-lists).
- **Daha sıx tərtibat və özünü yığan panellər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Tərtibat sıxlığı}} › {{ui:Yığcam}} ekrana daha çox şey sığdırır (toxunma ekranları və telefonlar böyük düymələrini saxlayır). Hər yan panelinin nazik başlıq zolağı var: onu sürükləyərək doklayın və ya üzdürün, başqa panelin zolağına buraxaraq bir çərçivəni sekmələr kimi paylaşın, kənara sürüşmək üçün sancaqlayın və ya gizləyib kənardan geri çağırın. Bax: [Panelləri düzənləyin](common:arrange-panels#make-the-layout-denser).
- **Dialoqlar yerini dəyişir.** Dialoqu başlıq zolağından sürükləyərək çertyojun qarşısından çəkin; onu tərk etdiyiniz yerə qayıdır. Başlıq zolağını ikiqat klikləyin ki, yenidən mərkəzə gəlsin. Bax: [Dialoqu köçürün](common:arrange-panels#move-a-dialog).
- **Süni intellekt köməkçiləri üçün reseptlər.** Öz köməkçiniz üçün on hazır sorğu (çertyojun təmizlənməsi, dəstin çertyoja çıxarılması, çertyojların yoxlanması, modelə suallar, həcmlərin hesablanması, detalın variantını sınamaq…), hər biri çağırdığı alətlər və ehtiyac duyduğu icazələrlə, və hər biri testlərimizlə yenidən işə salınır. Tətbiqlər heç bir süni intellekt daxil etmir. Bax: [Süni intellekt köməkçiləri üçün reseptlər](common:assistants-recipes).
- **Dillər.** **Português (Portugal)** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Dil}} daxilində yenidir. O, **Português (Brasil)**, **Español (México)** və **Bahasa Indonesia** ilə birlikdə indi tətbiqlərin hər sözünə malikdir, hələ native danışan tərəfindən oxunmamış qaralama kimi. Yardım mövzuları ingilis dilindədir.
- **CadCraft Studio** güncəllənmə yoxlamasının niyə uğursuz olduğunu deyir (sisteminiz üçün hələ fayl yoxdur, şəbəkə yoxdur, pis imza) və sadəcə "Hazırdır" yazmır; bağladığınız Yeniliklər kartını yeni buraxılış olana qədər geri qaytarmağı dayandırır.

## Hələ bu versiyada deyil

- **0.7 kod imzalı deyil.** İmzalama və Microsoft Store paketi 0.8-ə keçdi, çünki sertifikat yoxlaması hələ gəlməyib. Hər faylın yanındakı SHA-256 dəyərini getcadcraft.com/download-da yoxlayın. Windows-da SmartScreen quraşdırıcını dayandırarsa, {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-də ilk dəfə CadCraft Studio-ya sağ klikləyin və {{ui:Aç}} seçin. CadCraft Studio hələ tətbiq mağazasında deyil və hələ iPad və ya iPhone versiyası yoxdur.
- {{ui:Ölçü vahidləri}}-dəki bucaq və əyinti siyahıları saxlanılır, lakin hələ heç bir qutu onları oxumur.
- Sahə qeydləri CadCraft Studio canlı sessiyasında paylaşılmır (canlı sessiyalar yalnız markup-ları daşıyır); surətləri {{ui:Birləşdir}} ilə birləşdirin.
- Birləşdirmə qeydi bütövlükdə son dəyişdirilmiş surətdən götürür: iki nəfər bir qeydin fərqli sahələrini dəyişibsə, sonrakı surətin sahələri qalib gəlir. Zəncirlər və əlavə fayl adları birləşdirilir.
- Əlavələr yalnız adlardır; fayllar yerində qalır. Qeydlər üçün komandalar, bildirişlər və bulud layihələri yoxdur; köməkçilərin qeydlər üçün hələ alətləri yoxdur.
- Sahə qeydləri brauzerdə telefon və planşet ölçülərində, şəbəkə kəsilmiş halda sınaqdan keçirilib, lakin hələ real planşetdə əl ilə yoxlanılmayıb.
- Hələ 0.6-dan qalanlar: səhifə obyektlərinin istənilən bucağa çevrilməsi, səhifəyə birbaşa yeni fiqurlar çəkmək, xəttin şriftini və ya ölçüsünü dəyişmək və bir neçə sətrə axan mətn. Səhifə redaktələri olan saxlanılmış surət hələ Acrobat-da açılmayıb.
- Hələ 0.5-dən qalanlar: səhifə dəyişikliyini geri qaytarmaq (məsələn boş səhifə əlavə etmək), skanlanmış vərəqlərdən mətn oxumaq və öz şəbəkənizdən kənarda canlı sessiyalar.

Hər şey [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir.

---
title: RFI, təqdimat və gündəlik jurnalların izlənməsi
summary: RFI-ları, təqdimatları və gündəlik jurnalları vərəqlərə nömrələri, təyin edilmiş şəxsləri, son tarixləri və söhbətləri ilə əlavə edin; müddəti keçmişləri süzün; CSV və ya BCF ixrac edin; oflayn işləyin və surətləri birləşdirin.
keywords: rfi, məlumat sorğusu, təqdimat, gündəlik jurnal, sahə hesabatı, tikinti gündəliyi, tikinti, müddəti keçmiş, son tarix, mənə təyin edilib, söhbət, əlavə, birləşdir, oflayn, planşet, bcf, csv, sahə
from: 95039c5a
---

{{ui:Sahə}} sekmesi qeydlərinizin yanında üç növ yazı saxlayır. Hər biri bir vərəqlə bağlıdır; RFI və ya təqdimat isə öz aid olduğu yerdə vərəqdə sancağa malikdir.

- **RFI**: layihə qrupuna verilən sual. Statuslar: Açıq, Cavablandırılıb, Bağlıdır.
- **Təqdimat**: işlərə başlamazdan əvvəl nəzərdən keçiriləcək şey. Statuslar: Açıq, Baxışdadır, Təsdiqlənib, Qeydlə təsdiqlənib, Düzəlişlə yenidən təqdim edin, Bağlıdır.
- **Gündəlik jurnal**: günün havası, sahədəki adamların sayı və görülən iş. Statuslar: Qaralama, Son.

Hər yazının öz növünün nömrəsi (RFI-0001, SUB-0001, LOG-0001), başlığı, mətni, təyin edilmiş şəxsi, son tarixi, cavabların söhbəti və əlavə adlarının siyahısı var.

## Yeni yazı əlavə edin

1. {{ui:Sahə}} sekmesini açın və {{ui:RFI}} və ya {{ui:Təqdimat}} seçin.
2. Yazının aid olduğu vərəqə toxunun və ya klikləyin. Sancaq görünür və yazı sekmədə açılır.
3. Başlığı, sualı və ya təsviri, təyin edilmiş şəxsi və son tarixi doldurun.

Gündəlik jurnal açıq vərəqə sancaqsız əlavə olunur. {{ui:Sancaq qoy}} sonra ona sancaq qoyur; {{ui:Sancağı köçür}} istənilən sancağı köçürür. Vərəqdəki sancağa toxunmaq onun yazısını açır.

## Cavablandırın və izləyin

{{ui:Status}} dəyişdirin və dəyişiklik söhbətdə qeyd olunur. Cavab yazın və {{ui:Cavabı göndər}} seçin (Ctrl+Enter də göndərir). Əlavələr yalnız adlardır: birini yazın və ya fayl seçin; siyahı komandaya yazıya nəyin aid olduğunu göstərir. Fayllar özləri olduğu yerdə qalır.

Son tarixi keçmiş və hələ gözləyən yazı (Cavablandırılmış və ya Bağlı olmayan RFI, qərarı verilməmiş təqdimat) siyahıda və öz sancağında qırmızı rənglə **Müddəti keçib** kimi işarələnir.

## Vacib olanı tapın

Filtrlər siyahının üstündədir: növ, status, son tarix (müddəti keçmiş, 7 gün ərzində, son tarixi var və ya yoxdur), bu vərəq və ya bütün vərəqlər, mətn axtarışı və {{ui:Mənə təyin edilib}}. Sonuncu təyin edilmiş şəxsi MarkupCraft-ın sizi tanıdığı adla müqayisə edir (bax: [Adınızı təyin edin](topic:set-your-name)). Filtrlərin altındakı sətir göstərilənləri və müddəti keçmişləri sayır.

## İxrac

{{ui:CSV}} seçilmiş yazıları cədvəl faylı kimi yazır. {{ui:BCF}} onları hər biri vərəqdəki yerinin şəkli ilə BCF mövzuları kimi yazır ki, digər BCF alətləri onları siyahıya sala bilsin. Hər ikisi filtrləri izləyir.

## Saxlama, oflayn və surətlərin birləşdirilməsi

Yazılar PDF-i saxlayanda onun içində saxlanır və faylı açanda geri gəlir. Şəbəkə tələb olunmur: zirzəmidə planşetdə yazın, redaktə edin, cavab verin və saxlayın, sonra PDF-i geri gətirin. Köhnə PDF-lər və digər proqramların PDF-ləri əvvəlki kimi açılır.

İki surəti birləşdirmək üçün birini açın, {{ui:Birləşdir}} seçin, sonra eyni PDF-in digər surətini seçin. Yazılar identifikatorlarına görə birləşdirilir:

- yalnız bir surətdə olan yazı əlavə edilir;
- hər iki surətdə olan yazı öz sahələrini (başlıq, mətn, status, təyin edilmiş şəxs, son tarix) dəyişdirilmiş sonuncu surətdən bütöv şəkildə alır; ona görə iki nəfər eyni yazının fərqli sahələrini dəyişibsə, sonrakı surətin versiyası qalır; hər iki surətdən söhbətlər və əlavə adları birləşdirilir;
- hər iki surət yeni yazını eyni nömrələyibsə, gələn yazı növbəti boş nömrəni alır;
- bir surətdə silinən yazı, sonra redaktə edilməyibsə, silinmiş qalır.

Birləşdirmə bir geri alma addımıdır.

## Məhdudiyyətlər

- Yazılar hələ Live TeamWork tərəfindən paylaşılmır; birləşdirmədən istifadə edin.
- Bu versiyada yazılar üçün komandalar, bildirişlər və bulud layihələri yoxdur.
- PDF-dən silinən səhifələr onların yazılarını da özü ilə aparır (səhifə təsdiqi onları sayır).

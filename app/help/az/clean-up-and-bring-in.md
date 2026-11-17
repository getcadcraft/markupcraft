---
title: Qələm xətlərini təmizləyin, rəy şərhlərini və sahə irəliləyişini gətirin
summary: Sərbəst qələm xətlərini xətlərə, dairələrə, qövslərə və düzbucaqlılara çevirin; icazə paketinin rəy şərhlərini və sahə planalmasının irəliləyişini qeyd kimi gətirin.
keywords: qələm, sərbəst, təmizlə, düzləşdir, dairə, xətt, düzbucaqlı, qövs, icazə, rəy şərhləri, irəliləyiş, dron, skan, planalma, qeydlər, csv
from: 547d8e42
---

## Qələm xətlərini təmizləyin

{{ui:Qələm}} ilə çəkin, sonra Redaktə qrupunda {{ui:Digər}} menyusunu açın və {{ui:Qələm xətlərini təmizlə}} seçin. Seçilmiş hər qələm xətti nə olmalı idisə o olur: düz xətt xətt olur (təqribən üfüqi və ya şaquli idisə dəqiq üfüqi və ya şaquli edilir), yumru olan ellips olur, dairənin bir hissəsi qövs olur, dörd künclü qapalı xətt düzbucaqlı olur, qalan hər şey polixətt və ya çoxbucaqlı olur. Birlikdə çəkilmiş xətlərin açıq ucları bir-birinə çəkilir. Heç bir qələm xətti seçilməsə, açıq vərəqdəki hər qələm xətti təmizlənir. Bu bir geri qaytarma addımıdır: Ctrl+Z sərbəst çəkilişi bərpa edir. Forma sabit qaydalarla kompüterinizdə hesablanır; heç yerə göndərilmir.

## Rəy şərhlərini gətirin

BimCraft-ın icazə paketində `01-review-comments.csv` var: plan yoxlayıcısının edə biləcəyi şərhlər, hər biri qayda, maddə, nə lazım olduğu, nə tapıldığı və nə edilməli olduğu ilə. {{ui:Tapşırıqlar}} sekməsində {{ui:İcazə rəyinin şərhləri}} açın və {{ui:Şərhləri gətirin (CSV)}} seçin. Hər şərh açıq vərəqin sol tərəfindəki sütunda Açıq qeyd olur; hər birini aid olduğu yerə sürükləyin. Onlar mövcud yoxlamalardan hesablanır, plan ekspertindən yox.

## HAZOP düyün qutularını gətirin

CadCraft-ın P&ID əlavəsi HAZOP tədqiqatının düyünlərini çəkir və onları {{ui:HAZOP düyün qutuları}} (JSON fayl) kimi saxlaya bilər. Çap olunmuş P&ID vərəqini burada açın, {{ui:Tapşırıqlar}} sekməsinə keçin, {{ui:HAZOP düyün qutuları}}nı açın və {{ui:Düyün qutularını gətirin (JSON)}} seçin. Hər düyün açıq düzbucaqlı kimi vərəqdə görünür; nömrəsi, adı, avadanlığı və xətləri mətndə yazılır, komanda tapıntılarını onun üzərində cavablar kimi yazır. Vərəq çertyojun sol aşağı küncündən tam ölçüdə çap olunmuş kimi götürülür; başqa miqyasda çap olunubsa, əvvəlcə bu ədədi {{ui:Çap miqyası}} xanasına yazın (1:2 üçün 0.5). Səhifədən kənarda düşən düyün çəkilmir və panel neçə belə olduğunu göstərir. İşarələr tədqiqat üçün köməkçi vasitədir: düyünlərin yerini göstərir, tədqiqatı qiymətləndirmir.

## Sahə irəliləyişini gətirin

CivilCraft sahə üçün hər dron uçuşu və ya skanı üçün sətir saxlayır. {{ui:Tapşırıqlar}} sekməsində {{ui:Sahə irəliləyişi}} açın və {{ui:İrəliləyişi gətirin (JSON)}} seçin. Hər planalma açıq vərəqdə nə qədərinin tamamlandığını, kəsmə və ya doldurma üçün nə qaldığını, nə qədər artıq qazıldığını və ya doldurulduğunu və planda olmayan nə varsa onu göstərən qeyd olur. Planda olmayan bir şeyi olan planalma Açıq qalır; təmiz olan Qəbul edilib olur.

---
title: MarkupCraft-ın açdığı və saxladığı fayllar
summary: PDF-lər daxil olur, işarələnmiş PDF nüsxəsi çıxır, habelə CSV, BCF və alət sandığı faylları; hər birinin hara getdiyi, onlayn və oflayn.
keywords: pdf, aç, saxla, ixrac et, endir, csv, bcf, bcfzip, json, alət sandığı, fayl növləri, formatlar, yükləmə, parol, şifrələnmiş
from: b3045b4c
---

## MarkupCraft nəyi açır

| Fayl | Necə | Nə baş verir |
|---|---|---|
| PDF (`.pdf`) | {{ui:Aç}}, {{key:Mod+O}} və ya vərəq sahəsinə sürüşdürüb buraxın. Eyni anda bir neçəsi də olar. | Hər səhifə vərəqə çevrilir. Faylda artıq olan qeydlər geri oxunur (aşağıda). |
| Alət sandığı (`.json`) | {{ui:Alətlər}} sekmesi, sonra {{ui:İdxal et}} | Alətlər sandığınıza əlavə olunur. Bax [Alət sandığı](topic:tool-chest). |

Başqa fayllar rədd edilir və status sətrində "MarkupCraft yalnız PDF fayllarını açır." mesajı görünür. Qarışıq fayllar atsanız, PDF-lər açılır və status sətri neçə faylın PDF olmadığını bildirir.

### PDF-də artıq olan qeydlər

- **MarkupCraft-ın saxladığı qeydlər** dəqiq geri qayıdır: növü, üslubu, müəllifi, tarixləri, statusu, cavabları, nöqsan nömrəsi, vərəqin miqyası və yazdığınız vərəq adları.
- **Digər PDF proqramlarının şərhləri** də oxunur. Düzbucaqlılar, ellipslər, xətlər və oxlar, polixətlər, çoxbucaqlılar, qələm xətləri, mətn qutuları və yapışqan qeydlər adi, redaktə oluna bilən MarkupCraft qeydlərinə çevrilir. Onların cavabları və baxış statusları da gəlir.
- **Qalan hər şey** (mətni seçməklə edilmiş mətn vurğulamaları, digər proqramların ştampları və başqa növlər) olduğu kimi göstərilir və yalnız oxunan kimi qeyd olunur. Onu seçə, qeydlər siyahısında görə və cavab verə bilərsiniz, amma köçürə, dəyişə və ya silə bilməzsiniz.
- Keçidlər və forma sahələri toxunulmaz qalır və siyahıya salınmır.
- Başqa proqram tərəfindən saxlanmış miqyas (ölçü viewportu) MarkupCraft onun vahidini tanıdıqda vərəqin miqyası kimi istifadə olunur.

### Açılmayan fayllar

- Parol tələb edən PDF: '"name" açılmaq üçün parol tələb edir. Qorunmayan nüsxə açın.'
- Zədələnmiş və ya əslində PDF olmayan fayl: '"name" PDF kimi oxuna bilmədi (…)'.
- Dəyişikliyə qarşı qorunan, lakin açılan PDF normal açılır. Onu saxlamaq rədd edilir (aşağıya bax).

Eyni anda bir neçə fayl açılanda, işləyənlər açılır və "Bəzi fayllar açılmadı" adlı qutu qalanlarını sadalayır.

## MarkupCraft nəyi saxlayır

Saxlamaq həmişə yeni faylın **endirilməsidir**. Veb səhifə kompüterinizdəki faylın üstünə yaza bilməz və MarkupCraft orijinalınızı heç vaxt dəyişmir.

| Seçdiyiniz | Alacaqsınız | Qeydlər |
|---|---|---|
| {{ui:Saxla}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Orijinal PDF-in nüsxəsi, hər qeyd adi PDF şərhi kimi yazılmış. "(marked up)" faylını yenidən saxlamaq eyni adı saxlayır; heç vaxt "(marked up) (marked up)" olmur. Bax [İşarələnmiş PDF-i saxlayın](topic:save-the-marked-up-pdf). |
| {{ui:Qeydlər}} sekmesi, sonra {{ui:CSV}} | "<name> markups.csv" | Qeydlər siyahıda göründüyü kimi (süzgəclər tətbiq olunur). |
| {{ui:Qeydlər}} sekmesi, sonra {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1, BIM koordinasiya alətləri üçün, hər qeyd üçün bir snapshot. Bax [BCF əsasları](topic:bcf-basics). |
| {{ui:Nöqsan siyahısı}} sekmesi, sonra {{ui:CSV ixrac et}} | "<name> punch list.csv" | Nöqsan elementləri nömrə ardıcıllığı ilə. |
| {{ui:Alətlər}} sekmesi, sonra {{ui:İxrac et}} | "MarkupCraft tool chest.json" | Alət sandığınız, paylaşmaq və ya saxlamaq üçün. |

"<name>" açıq olan ilk PDF-in fayl adıdır, ".pdf" olmadan.

CSV faylları istənilən cədvəl proqramında açılır. Onlar UTF-8 kodlamasındadır və cədvəl proqramlarının axtardığı işarə ilə yazılır, buna görə vurğulu adlar düzgün görünür. =, +, - və ya @ ilə başlayan xana cədvəl proqramı tərəfindən formul kimi işlədilməsin deyə önünə apostrof əlavə olunur.

## Yükləmələrin getdiyi yer

Brauzeriniz qərar verir: adətən Yükləmələr qovluğu, ya da hər dəfə soruşur, əgər belə təyin etmisinizsə. Bax [Brauzerlər və kompüterlər](common:browsers#what-differs-between-browsers).

:::chromium
Bir dəstin dəyişmiş bütün fayllarını birdən saxladıqda Chrome və Edge bu saytın bir neçə fayl endirməsinə icazə verib-vermədiyini soruşa bilər. {{ui:İcazə ver}} seçin, əks halda yalnız ilk nüsxə alınacaq.
:::

:::safari
iPad-də Safari hər endirmədən əvvəl soruşur və faylı Files tətbiqində, Downloads altında saxlayır. Mac-də fayl Safari parametrlərində təyin olunmuş qovluğa gedir.
:::

## Onlayn və oflayn

- **PDF-lərinizin heç biri bu kompüterdən çıxmır**, onlayn və ya oflayn. Heç yerə yükləmə yoxdur.
- PDF oxucusu ilk dəfə PDF açdığınızda yüklənir ("PDF oxucusu yüklənir…"), PDF yazıcısı isə ilk dəfə saxladığınızda ("PDF yazıcısı yüklənir…") və ya içində artıq şərhlər olan faylı açdığınızda.
- Bağlantı olduqda hər ikisi veb saytdan yüklənir.
- **Bağlantısız işləmək üçün** onlayn ikən yuxarıdakı paneldə {{ui:Oflayn üçün saxla}} seçin. Düymə "N of M saxlanılır" göstərir, sonra "Oflayn hazırdır" yazır. Bu nüsxəyə PDF oxucusu, PDF yazıcısı (cəmi təqribən 6 MB) və bu kömək daxildir, buna görə sonra PDF-ləri açmaq, işarələmək və saxlamaq bu brauzerdə oflayn işləyir.
- Düymə "Saxlamaq alınmadı" yazırsa, bəzi fayllar endirilməyib: bağlantını yoxlayın və yenidən basın. "Oflayn mövcud deyil" yazırsa, bu brauzer pəncərəsi oflayn nüsxə saxlaya bilmir (məxfi pəncərələr və bəzi idarə olunan kompüterlər); normal pəncərədən istifadə edin.
- Nüsxəni yeniləmək və ya silmək üçün "Oflayn hazırdır" düyməsinə basın və "Yenidən saxla (ən son versiyanı al)" və ya "Oflayn nüsxəni sil" seçin. Ətraflı: [Oflayn işləmək](common:offline).

:::offline
Oflaynsınız. Yuxarı paneldə "Oflayn hazırdır" yazırsa, hər şey işləyir, saxlama da daxil. Yazmırsa və bu sekmədə hələ saxlamamısınızsa, {{ui:Saxla}} "PDF yazıcısı yüklənmədi" xətası ilə rədd edilə bilər. Qeydləriniz hələ sekmədədir: sekməni açıq saxlayın, bağlantını bərpa edin və {{ui:Saxla}} seçimini yenidən edin.
:::

## Diqqət ediləcək məqamlar

- Böyük plan dəstləri açılmaq üçün vaxt tələb edir: MarkupCraft vərəq nömrələrini tapmaq üçün hər səhifənin mətnini oxuyur. Status sətri vərəqləri sayarkən göstərir.
- Eyni PDF-i iki dəfə açmaq vərəqləri iki dəfə əlavə edir. Bu baş verərsə, dəsti bağlayıb yenidən açın.
- {{ui:Bağla}} bütün açıq faylları eyni anda bağlayır. Saxlanılmamış qeydlər varsa, soruşur: {{ui:Ləğv et}}, {{ui:Saxlamadan bağla}} və ya {{ui:Əvvəl nüsxələri saxlayın}}.
- Bulud saxlaması hələ mövcud deyil və masaüstü versiyalar hələ yoxdur. PDF-lərinizi digər layihə fayllarınızla saxlayın və adi qaydada ehtiyat nüsxəsini götürün. Bax [Fayllarınız haradadır](common:your-files).

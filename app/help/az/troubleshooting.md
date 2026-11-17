---
title: Problemlərin həlli
summary: MarkupCraft-ın göstərdiyi mesajlar və onlara nə etmək lazım olduğu, habelə işləməyən kimi görünən şeylərin düzəlişləri.
keywords: problem, xəta, işləmir, kömək, mesaj, açılmır, saxlamaq olmur, parol, qorunan, ölçmə rədd edildi, kalibrləmə, oflayn, boş, yavaş, itmiş qeydlər, sual işarələri
from: bb650b39
---

Əksər problemlər ekranın aşağısındakı status panelində izah olunur. Əvvəl onu oxuyun.

## Faylların açılması

**"MarkupCraft PDF fayllarını açır. "x" PDF deyil."**
Siz başqa bir şey seçdiniz və ya atdınız. Yalnız PDF-lər açılır. Əvvəlcə çertyojları CAD proqramınızdan PDF formatında ixrac edin.

**'"name" açılmaq üçün parol tələb edir. Qorunmayan nüsxə açın.'**
PDF parolla qorunur. Göndərəndən qorunmayan nüsxə istəyin, və ya parolunu bildiyiniz PDF proqramında açıb parolsuz nüsxə saxlayın.

**'"name" PDF kimi oxuna bilmədi (…)'**
Fayl zədələnib və ya əsl PDF deyil (natamam yükləmə, e-poçt əlavəsinin kəsilməsi). Yenidən yükləyin. Digər PDF proqramları onu aça bilirsə, onların "Fərqli saxla" funksiyası ilə təmiz nüsxə yaradın və onu açın.

**"Bəzi fayllar açılmadı"**
Bir neçəsini eyni anda açanda bu qutu uğursuz olan faylları və səbəbini göstərir. Qalanları açıqdır.

**"PDF oxuyucusu yükləyə bilmədi: …"**
PDF mühərriki yüklənə bilmədi. Onlayn olsanız: səhifəni yenidən yükləyib təkrar cəhd edin; firewall və ya məzmun bloklayıcısının saytı bloklamadığını yoxlayın. Oflayn olsanız: MarkupCraft bu brauzerdə oflayn istifadə üçün saxlanılmayıb (yuxarıdakı panel "Oflayn hazırdır" yazmır). Onlayn olun, {{ui:Save for offline}} seçin və "Oflayn hazırdır" yazısını gözləyin. Bax: [Oflayn işləmə](common:offline).

**"Bəzi annotasiyalar ekranda iki dəfə görünə bilər" və ya "Əlavə annotasiya təfərrüatları oxuna bilmədi"**
Faylın mövcud şərhləri qeyri-adidir. Yenə də MarkupCraft-ın bacardığı qədər açılırlar; onlara arxalanmazdan əvvəl yoxlayın. Saxlamaq yenə işləyir.

**Vərəqin adı səhvdir və ya "page 3" yazır**
Bax: [Vərəqlər necə ad alır](topic:open-a-plan-set#how-sheets-get-their-names). Skan edilmiş vərəqlərdə oxunacaq mətn yoxdur; {{ui:Rename sheet}} istifadə edin.

**Eyni vərəqlər iki dəfə görünür**
Eyni fayl iki dəfə açılıb. {{ui:Close}} seçin (lazım olsa əvvəl saxlayın) və dəsti yenidən açın.

## Çəkmək və seçmək

**Vərəqə klikləyəndə heç nə olmur**
Alət panelində hansı alətin basılı olduğunu yoxlayın və status panelini oxuyun. {{ui:Rectangle}}, {{ui:Ellipse}} və {{ui:Cloud}} ilə sürükləmədən klik heç nə çəkmir: sürükləyin. {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} və {{ui:Area}} ilə nöqtələr əlavə olunur: ikiqat klik və ya {{key:Enter}} ilə tamamlayın.

**"Çoxbucaqlı üçün ən azı 3 nöqtə lazımdır." (polixətt üçün 2)**
Tamamlamazdan əvvəl daha çox nöqtəyə klikləyin.

**"Heç nə yazılmadı, buna görə mətn əlavə olunmadı."**
Mətn qutuları və çağırışlar yalnız mətn olduqda saxlanılır. Yenidən çəkin və klikləməzdən əvvəl yazın.

**"İki nöqtə eynidir. İki fərqli nöqtəyə klikləyin."**
Xətlər, oxlar, uzunluqlar və kalibrləmə üçün iki uc bir-birindən ayrı olmalıdır. Sürükləyin, və ya fərqli yerlərə iki dəfə klikləyin.

**Qeydi hərəkət etdirə və ya silə bilmirəm; boz kəsikli qutusu var**
Bu, faylla gəlmiş yalnız oxunan şərhdir (məsələn mətn vurğulaması). MarkupCraft onu olduğu kimi saxlayır: yalnız ona cavab verə bilərsiniz. Status panelində "oxunan qeyd(lər) faylda olduğu kimi saxlanılır" yazılır.

**Klavişlərim alət seçmək əvəzinə qutuya hərf yazır**
Kursor mətn qutusundadır (cavab, {{ui:Properties}} bölməsində sahə, vərəq axtarışı). Əvvəl vərəq sahəsinin boş hissəsinə klikləyin, və ya qeyd mətnini redaktə edirsinizsə {{key:Esc}} basın.

**Space sürüşdürmür, ox klavişləri heç nə etmir**
Alət panelindəki düyməni indicə klikləmisiniz, buna görə klaviatura hələ onundur. Bunun əvəzinə orta siçan düyməsi ilə sürükləyin, və ya {{ui:Select}} aktiv olanda vərəqə bir dəfə klikləyib yenidən cəhd edin. Bax: [Klaviatura və siçan](topic:keyboard#when-a-key-does-nothing).

**Toxunma ekranında barmaqla sıxma iz qoydu**
Sürükləmə aləti (qələm, bulud, düzbucaqlı) ikinci barmaq gəlməmişdən əvvəl başladı və ləğv edilməmişdən əvvəl bitdi. {{ui:Undo}} basın. Yaxınlaşdırmaq istədiyiniz zaman hər iki barmağı eyni anda qoyun.

## Ölçmə

**"Əvvəl bu vərəqi kalibrləyin: bilinən məsafə ilə iki nöqtə seçin, və ya onun miqyasını seçin. Sonra ölçün."**
Hər vərəqin {{ui:Length}} və ya {{ui:Area}} üçün öz miqyası lazımdır. MarkupCraft {{ui:Calibrate}} rejiminə keçib: bilinən ölçünün iki ucuna klikləyin və uzunluğunu yazın, və ya status panelində miqyas düyməsinə klikləyib miqyas seçin. Bax: [Vərəqi kalibrləyin və ölçün](topic:calibrate-and-measure).

**'Bu, MarkupCraft-ın başa düşdüyü uzunluq deyil.'**
Belə yazın: `24'-0"`, `12' 6 1/2"`, `7.2 m` və ya `900 mm`. Bax: [Vahidlər, uzunluqlar və miqyaslar](topic:units-and-scales).

**Ölçmələr bir az və ya çox səhvdir**
- Tam ölçüdə olmayan PDF-də hazır miqyas səhv ölçür. Bunun əvəzinə uzun, bilinən ölçüdən kalibrləyin.
- Minlik ayırıcı onluq nöqtə kimi oxundu: `1,200 mm` 1.2 mm deməkdir. `1200 mm` yazın.
- Ucları klikləyərkən yaxınlaşdırın.
- Çertyoj miqyasda olmaya bilər ("NTS").

**"Əvvəl say qrupunu seçin, sonra nişanı silmək üçün Shift+klik edin."**
{{ui:Select}} seçin, say qrupuna klikləyin, sonra {{ui:Count}} yenidən seçin və nöqtəyə {{key:Shift}}+klik edin.

## Saxlama

**"Bu PDF qorunub (şifrələnib), buna görə qeyd edilmiş nüsxə yazıla bilməz."**
Fayl dəyişikliklərə icazə vermir. Qorunmayan nüsxə istəyin. Bu vaxt hələ də qeydlər siyahısını CSV və ya BCF kimi ixrac edə bilərsiniz.

**"PDF yazıcısı yükləyə bilmədi: …"**
Adətən oflayn olursunuz və proqram oflayn istifadə üçün saxlanmayıb (yuxarıdakı panelda "Oflayn hazırdır" yoxdur). Qeydləriniz hələ sekmədədir: sekməni açıq saxlayın, onlayn olun və yenidən {{ui:Save}} seçin. Sonra növbəti dəfə oflayn işləsin deyə {{ui:Save for offline}} seçin; saxlanılmış nüsxəyə PDF yazıcısı daxildir.

**"<file> saxlanıla bilmədi"**
Qutu səbəbini göstərir. Qeydləriniz hələ sekmədədir. Təkrar cəhd edin; təkrarlanarsa, şərhlər itməsin deyə CSV ixrac edin və mesajı bildirin.

**Saxla seçdim, amma yalnız bir fayl gəldi**
Brauzeriniz əlavə yükləmələri blokladı. Ünvan sətrindəki bildirişə baxın və bu saytın bir neçə fayl yükləməsinə icazə verin, sonra yenidən saxlayın.

**Saxlanılmış faylı tapa bilmirəm**
Brauzerin yükləmələr qovluğuna düşüb. Harada olduğunu görmək üçün brauzerin yükləmələr siyahısını açın (Chrome və Edge-də {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; Firefox və Safari-də alət panelindəki yükləmə düyməsi). Bax: [Brauzerlər və kompüterlər](common:browsers).

**Bəzi mətnlər digər PDF baxıcılarında "?" kimi görünür**
Qərb Avropa dəstindən kənar simvollar nüsxədə "?" kimi çap olunur. Saxlama mesajı onları sayır. Bax: [Qeyd edilmiş PDF-in saxlanması](topic:save-the-marked-up-pdf).

**Ştamp sabahkı (və ya dünənki) tarixi göstərir**
Ştamp tarixləri UTC ilədir. Bax: [Ştamplar və yapışqan qeydlər](topic:stamps-and-notes).

## Oflayn işləmə

**Oflayn düyməsi "Saxlanıla bilmədi" yazır**
Tətbiqin bəzi faylları yüklənmədi. Bağlantını yoxlayın və düyməyə yenidən klikləyin; "Oflayn hazırdır" yazana qədər "Saxlanılır: N / M" sayır.

**Oflayn düyməsi "Oflayn mövcud deyil" yazır**
Bu brauzer pəncərəsi oflayn nüsxə saxlaya bilmir: şəxsi pəncərə və ya siyasəti buna icazə verməyən kompüter. MarkupCraft-ı normal pəncərədə açın və yenidən cəhd edin.

**Oflayn olanda tətbiq köhnə versiyadır**
Oflayn nüsxə sizin saxladığınız versiyadır. Onlayn olanda "Oflayn hazırdır" düyməsinə klikləyin və "Yenidən saxla (ən yeni versiyanı al)" seçin. Yer azad etmək üçün "Oflayn nüsxəni sil" seçin. Bax: [Oflayn işləmə](common:offline).

**Kömək açılmır**
{{key:F1}} basın (Mac-də **fn** ilə), və ya yuxarı paneldə {{ui:Help}} seçin. O, oflayn da işləyir.

## İtmiş şeylər

**Sekməni bağladıqdan və ya yenilədikdən sonra qeydlərim yoxdur**
MarkupCraft-ı eyni brauzerdə yenidən açın: saxlanılmamış işi "İşinizi bərpa edək?" ilə geri təklif edir. {{ui:Recover}} seçin və PDF-i saxlayın. Nüsxələr 30 günə qədər saxlanılır; şəxsi pəncərə və ya sayt məlumatının təmizlənməsi heç nə saxlamır. Bax: [İşinizi bərpa edin](common:recover).

**Adım, alət parametrləri və ya alətlər qutusu itib**
Bunlar yalnız bu brauzerdə saxlanılır və təmizlənib (sayt məlumatı silinib, şəxsi pəncərə, başqa brauzer və ya kompüter, ya da Safari-nin uzun müddət ziyarət olunmayan saytları təmizləməsi). Adı yenidən təyin edin və ixrac etdiyiniz qutunu idxal edin. Bax: [Bu brauzerdə nə saxlanılır](topic:browser-storage).

**"Alətlər qutusu bu brauzerdə saxlanıla bilmədi (saxlama söndürülüb və ya dolub). Saxlamaq üçün ixrac edin."**
Brauzer bu sayt üçün məlumat saxlamaqdan imtina edir (məxfi rejim, parametr və ya siyasətlə bloklanmış saxlama, və ya dolu yaddaş). Dəyişiklikdən sonra qutunu ixrac edin və növbəti dəfə idxal edin.

## Ekran və sürət

**Vərəq bir an bulanıq görünür**
MarkupCraft yaxınlaşdırdığınız və ya sürüşdürdüyünüz zaman sürətli, kobud görüntü göstərir və dayandıqdan bir az sonra onu kəskin yenidən çəkir.

**Böyük dəstdə hər şey yavaşdır**
Digər ağır sekmələri bağlayın, eyni anda daha az fayl açın və böyük vərəqlərdə maksimuma qədər yaxınlaşdırmaqdan çəkinin. Bax: [Bir neçə faylla eyni anda işləmək](topic:several-files#big-sets).

**Vərəq tünd və açıq xətlidir**
Siz {{ui:Model}} mövzusundasınız. Ağ kağızda tünd xətlər üçün yuxarı paneldə {{ui:Paper}} seçin. Qeydləriniz və saxlanmış PDF təsirlənmir.

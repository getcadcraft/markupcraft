---
title: Plan dəstini açın və vərəqlər arasında keçin
summary: Bir və ya bir neçə PDF açın, ya da boş səhifələrlə başlayın, vərəqləri nömrə və ya ad ilə tapın, miqyas və sürüşdürmə edin və fayl səhv adlandırdıqda vərəqi yenidən adlandırın.
keywords: aç, yeni, boş səhifə, boş vərəq, eskiz, şəbəkə, adsız, plan dəsti, vərəqlər, səhifələr, miniatürlər, səhifə etiketləri, vərəq nömrəsi, əsas yazı bloku, yenidən adlandır, naviqasiya, miqyas, sürüşdür, sığdır, vərəqləri axtar
from: 1e7f4d50
---

## Dəsti açın

1. Alət panelində {{ui:Aç}} seçin və ya {{key:Mod+O}} basın.
2. Fayl seçicidə dəstin hər PDF-ni seçin ({{pick:mac=⌘ düyməsini saxlayın və hər faylı klikləyin|windows linux=Ctrl düyməsini saxlayın və hər faylı klikləyin}}, ya da Shift ilə diapazon seçin), sonra təsdiqləyin.
   Ya da faylları {{pick:mac=Finder|windows=File Explorer|linux=fayl meneceriniz}} pəncərəsindən vərəq sahəsinə sürükləyin. Sürüklədiyiniz zaman "PDF-ləri açmaq üçün buraxın" görünür.
3. Status panelində "<file> açılır…" yazısını gözləyin. Böyük fayllar üçün sayır: "(60 vərəqdən 10-u)".

Nəticə: {{ui:Vərəqlər}} siyahısı açdığınız sırada bütün faylların hər səhifəsini göstərir və status panelində belə yazılır: "3 fayl açıldı (dəstdə 42 vərəq)." Əgər fayllarda artıq şərhlər varsa, neçəsinin oxunduğunu da əlavə edir.

Dəsti sonra əlavə fayllarla genişləndirmək üçün onları eyni şəkildə açın. Onlar siyahının sonuna əlavə olunur.

## Boş səhifələrlə başlayın

Çertyoj olmadan eskiz etmək və ya qeyd yazmaq üçün PDF açmaq əvəzinə boş səhifələr yaradın:

1. Alət panelində {{ui:Yeni}} seçin və ya başlanğıc ekranında {{ui:Boş səhifədən başlayın}} seçin, ya da brauzeriniz icazə verirsə {{key:Mod+N}} basın (masaüstü tətbiqi və Studio həmişə icazə verir).
2. {{ui:Kağız ölçüsü}} seçin: Letter, Tabloid və ya ANSI B, ARCH D, ARCH E, A4, A3 və ya A1, və {{ui:Portret}} ya da {{ui:Landşaft}}.
3. {{ui:Şəbəkə}} seçin: {{ui:Yoxdur}}, {{ui:Nöqtələr}} ya da {{ui:Kvadratlar}}. Şəbəkə hər 1/4 in-dən bir olur, inch kağızda hər inch-də qalın xətt olur; metrik kağızda isə hər 5 mm-dən bir olur, hər 10 mm-də qalın xətt olur. Səhifənin üzərində çap olunur.
4. Neçə {{ui:Səhifələr}} istədiyinizi yazın (1-dən 20-yə qədər), sonra {{ui:Yarat}} seçin.

Nəticə: "Untitled-1.pdf" adlı (sonra "Untitled-2.pdf" və s.) yeni PDF burada, bu kompüterdə yaradılır və hər hansı fayl kimi açılır. Hər alət onunla işləyir, {{ui:Saxla}} isə "Untitled-1 (marked up).pdf" faylını yükləyir. MarkupCraft seçimlərinizi növbəti dəfə üçün yadda saxlayır.

Səhifələrin miqyası yoxdur: status panelində "Kalibrlənməyib" yazılır. Şəbəkə miqyas deyil. Ölçmək üçün əvvəlcə vərəqi kalibrləyin və ya miqyası seçin; bax [Kalibrləyin və ölçün](topic:calibrate-and-measure).

Boş dəstə səhifə əlavə etmək üçün onun vərəqlərindən birini açın və {{ui:Vərəqlər}} siyahısının altında {{ui:Boş səhifə əlavə et}} seçin. Yeni səhifə eyni kağıza və şəbəkəyə malikdir və sonda yerləşir. Hər səhifə dəyişikliyi kimi, bunu da geri qaytarmaq olmaz; bax [Səhifələri çap edin və dəyişdirin](topic:pages-and-printing).

## Vərəqlər necə adlanır

MarkupCraft hər vərəqi "<vərəq nömrəsi> — <başlıq>" kimi adlandırır, məsələn "A-101 — Mərtəbə planı". Bunu aşağıdakılardan tapdığı ilk olandan götürür:

1. {{ui:Vərəqi yenidən adlandır}} ilə yazdığınız ad (aşağıya bax).
2. PDF-i yaradan şəxs təyin edibsə, PDF-in öz səhifə etiketləri (məsələn "A-101").
3. Əsas yazı bloku: MarkupCraft səhifənin mətnini oxuyur və vərəq nömrəsinə bənzər bir şey axtarır (A-101, A1.01, M-201A, KA1-1), aşağı-sağ küncə, sağ zolağa və aşağı zolağa üstünlük verir və yaxınlıqdakı ən böyük mətni başlıq kimi götürür.
4. Əks halda: fayl adı və səhifə: "Plans — səhifə 3".

Hansının istifadə olunduğunu görmək üçün {{key:Esc}} basın ta ki heç nə seçilməsin və {{ui:Seç}} aktiv olsun, sonra {{ui:Xüsusiyyətlər}}-ə baxın: "Haradan oxunub" sahəsi "Səhifə etiketi", "Əsas yazı bloku", "Fayl adı" və ya "Əl ilə daxil edilib" yazır.

:::note
Skan edilmiş vərəqlərdə və mətni xətt kimi ixrac edilmiş PDF-lərdə oxunacaq mətn yoxdur. Onlar adlandırılana qədər fayl və səhifə ilə adlandırılır. MarkupCraft hələ şəkillərdən mətn oxuya bilmir.
:::

## Vərəqlər arasında keçin

- {{ui:Vərəqlər}} siyahısında vərəqə klikləyin.
- Növbəti vərəq üçün {{key:PageDown}}, əvvəlki üçün {{key:PageUp}} basın, ya da vərəqin altındakı paneldəki oxlardan istifadə edin.
- {{ui:Vərəqləri axtar}} sahəsinə yazın: nömrənin bir hissəsi ("A-2"), başlığın bir sözü ("dam") ya da fayl adı. Yazdıqca siyahı daralır ("42-dən 4"). İlk uyğunluğu açmaq üçün {{key:Enter}} basın. Bütün vərəqləri yenidən görmək üçün qutunu təmizləyin.

Hər vərəq dəsti bağlayana qədər öz miqyasını və mövqeyini saxlayır.

## Miqyas və sürüşdürmə

:::mouse
- **Miqyas:** vərəqin üzərində təkərciyi fırladın. Miqyas göstəricinin ətrafında olur. Və ya {{key:Plus}} və {{key:Minus}} basın (həmçinin {{key:Mod}} ilə), ya da miqyas düymələrindən istifadə edin. Miqyas qutusuna dəqiq faiz yazın.
- **Sığdırma:** {{ui:Səhifəni sığdır}} ({{key:Mod+0}}) bütün vərəqi göstərir; {{ui:Ən üzrə sığdır}} ({{key:Mod+9}}) eni doldurur.
- **Sürüşdürmə:** orta düyməylə (təkərcik) sürükləyin, ya da sağ düyməylə sürükləyin, ya da {{key:Space}} saxlayıb sürükləyin, ya da {{ui:Sürüşdür}} ({{key:H}}) seçib sürükləyin. Heç nə seçilməyibsə, ox düymələri də vərəqi hərəkət etdirir.
:::

:::mac mouse
Mac trackpad-də iki barmaqla sürüşdürmə miqyas edir (vərəqi sürüşdürmür). Sürüşdürmək üçün {{key:Space}} saxlayın və bir barmaqla sürükləyin, ya da {{key:H}} ilə {{ui:Sürüşdür}} keçin. Chrome, Edge və Firefox-da sıxma ilə yaxınlaşdırmaq olur.
:::

:::touch
- **Miqyas və sürüşdürmə:** vərəqə iki barmaq qoyun. Onları ayırın və ya sıxın, aralarındakı nöqtə ətrafında miqyas olunur; birlikdə hərəkət etdirsəniz sürüşür. Hər ikisi eyni anda baş verir.
- **Bir barmaqla sürüşdürmə:** əvvəlcə {{ui:Sürüşdür}} seçin. Hər hansı digər alətlə bir barmaq çəkir və ya seçir.
- {{ui:Səhifəni sığdır}} və {{ui:Ən üzrə sığdır}} vərəqin altındakı paneldədir.
:::

Miqyası bütün vərəqdən xeyli kənara qədər azalda və 6400%-ə qədər yaxınlaşdıra bilərsiniz. Hərəkəti dayandırdıqdan az sonra vərəq yenidən aydın çəkilir.

## Əlfəcinlər

{{ui:Əlfəcinlər}}, {{ui:Vərəqlər}} panelinin yuxarısında, açıq vərəqin aid olduğu PDF-in əlfəcinlərini (konturunu) göstərir. Birini seçin və onun səhifəsinə keçin. Qələm işarəsi əlfəcini yenidən adlandırır, xaç işarəsi isə silir. {{ui:Vərəqlərdən yarat}} hər vərəq üçün bir əlfəcin yaradır (vərəqlər siyahısında göstərildiyi kimi: vərəq nömrəsi və başlıq), {{ui:Bu vərəq üçün əlavə et}} isə olduğunuz vərəq üçün bir əlfəcin əlavə edir. Dəyişikliklər faylın saxlanılmamış işinin bir hissəsidir: {{ui:Saxla}} onları nüsxəyə yazır və hər PDF oxuyucu onları göstərir.

## Görünüşü çevirin

Vərəqin altındakı panelin sağındakı iki fırlatma düyməsi görünüşü dörddə bir dönüş ilə bir və ya digər istiqamətdə fırladır, yan çəkilmiş vərəq üçün. Yalnız görünüş fırlanır: PDF və onun qeydləri olduğu kimi qalır, növbəti vərəq də öz PDF-inin necə açıldığı kimi açılır (hər vərəq dəst açıq olduqca öz fırlanmasını yadda saxlayır). Fırlanmış görünüşdə əlavə etdiyiniz mətn gördüyünüz kimi düz oxunur. Saxlanmış PDF-də səhifənin özünü fırlatmaq üçün {{ui:Səhifələr}} seçin, sonra {{ui:Səhifəni saat əqrabı istiqamətində fırlat}}; bax [Səhifələri çap edin və dəyişdirin](topic:pages-and-printing).

## Vərəqi yenidən adlandırın

Vərəqin adı səhv və ya yoxdursa:

1. Vərəqi göstərin.
2. {{key:Esc}} basın ta ki heç nə seçilməsin və {{ui:Seç}} aləti aktiv olsun. {{ui:Xüsusiyyətlər}} indi vərəqi göstərir.
3. {{ui:Vərəqi yenidən adlandır}} seçin.
4. {{ui:Vərəq nömrəsi}} və {{ui:Başlıq}} yazın, sonra {{ui:Saxla}} seçin.

Nəticə: vərəqlər siyahısı, vərəqin altındakı panel və qeydlər siyahısı yeni adı istifadə edir, "Haradan oxunub" isə "Əl ilə daxil edilib" yazır. Adı {{key:Mod+Z}} ilə geri qaytarmaq olar.

Yenidən adlandırmanı yenidən etmək üçün {{ui:Vərəqi yenidən adlandır}} açın, hər iki qutunu təmizləyin və {{ui:Saxla}} seçin.

Saxlayanda yazdığınız vərəq nömrəsi PDF-də səhifənin etiketi olur, beləliklə digər PDF oxuyucular səhifə qutusunda "A-101" göstərir. Faylın hər hansı səhifəsinə nömrə versəniz, faylın hər səhifəsi nüsxədə etiket alır (yazılmış nömrə, yoxsa köhnə etiket, yoxsa səhifə nömrəsi). Yazılmış başlıq MarkupCraft üçün saxlanılır, lakin digər oxuyucular onu göstərmir.

## TakeoffCraft-a PDF aparın və ya buraya gətirin

TakeoffCraft eyni yerdə açıq olduqda (laboratoriya, Try və ya onlayn tətbiqlər), vərəqin altındakı paneldə {{ui:TakeoffCraft-da aç}} var. O, vərəqin PDF-ni TakeoffCraft-da yeni sekmədə açır, burada açıldığı kimi, beləliklə kəmiyyətləri onun üzərində ölçə bilərsiniz. Qeydləriniz burada qalır; onları adi qaydada saxlayın.

TakeoffCraft-ın {{ui:MarkupCraft}} düyməsi əksinə eyni işi görür: PDF {{ui:Aç}} seçmiş kimi burada açılır. Brauzer yeni sekməni bloklasa, bu sayt üçün pop-up pəncərələrə icazə verin və düyməni yenidən seçin.

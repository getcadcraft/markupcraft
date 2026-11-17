---
title: Qeyd edilmiş PDF-i saxlayın
summary: Bütün qeydləri standart PDF şərhləri kimi yazılmış nüsxəni yükləyin, digər PDF oxuyucuların nə gördüyünü yoxlayın və işi sonra davam etdirin.
keywords: saxla, yüklə, pdf ixrac, qeyd edilmiş, annotasiyalar, şərhlər, paylaş, göndər, buraxılış, işi davam etdir, yenidən aç, tam dövrə, çap
from: 4c198ebe
---

## Saxla

1. Alət panelində {{ui:Saxla}} seçin və ya {{key:Mod+S}} basın.
2. Bir neçə fayl açıqdırsa, {{ui:Bu fayl}} (hazırda olduğunuz vərəqin faylı) və ya {{ui:Dəyişdirilmiş bütün fayllar}} seçin. Hər nüsxə ayrıca yüklənir.
3. "<file> saxlanılır…" bitənə qədər gözləyin. Sessiyada ilk saxlama PDF yazıcısını da yükləyir.

Nəticə: brauzeriniz "<name> (marked up).pdf" faylını yükləyir və status panelində bu barədə məlumat verilir: "A-Plans (marked up).pdf saxlanıldı (24 qeyd, 18.2 MB). Orijinal fayl dəyişdirilməyib." {{ui:Saxla}} düyməsindən sonra nöqtə yox olur.

**Orijinal PDF-iniz heç vaxt dəyişdirilmir.** MarkupCraft yeni fayl yazır. Harada yerləşdiyi brauzerinizin yükləmə parametrlərindən asılıdır (bax: [MarkupCraft-ın açdığı və saxladığı fayllar](topic:files#where-downloads-go)).

## Sonra davam etdirmək

Növbəti dəfə orijinal yox, "(marked up)" nüsxəsini açın. Hər şey redaktə oluna bilən halda qayıdır: qeydlər, statuslar, cavablar, punch elementləri, hər vərəqin miqyası və yazdığınız vərəq adları. Yenidən saxladıqda eyni "(marked up)" adlı fayl yüklənir; köhnə yükləmə hələ qovluqdadırsa, brauzeriniz "(1)" kimi nömrə əlavə edə bilər. Köhnə nüsxələri özünüz dəyişin və ya təmizləyin.

MarkupCraft PDF-i öz-özünə saxlamır. İşləyərkən bu brauzerdə bərpa nüsxəsi saxlayır, buna görə nasazlıq və ya bağlanmış sekmə qeydlərinizi itirmir: MarkupCraft-ı növbəti dəfə açdıqda "İşinizi bərpa edək?" soruşur. Bax: [İşinizi bərpa edin](common:recover). Yenə də bağlamazdan əvvəl saxlayın; saxlanılmamış qeydlərlə çıxmağa cəhd etsəniz, brauzer əvvəl "Saytdan çıxılsın?" soruşur (iPad Safari bunu etmir).

## Digər PDF oxuyucuların gördükləri

Hər qeyd öz çəkilişi ilə standart PDF şərhi (annotasiya) kimi yazılır, buna görə istənilən PDF baxıcı onu göstərir, çap edir və şərhlər panelində sadalayır:

- **Görünüşü MarkupCraft-dakı ilə eynidir:** dalğavari kənarlı buludlar, ox ucluqları, ştamplar, say nöqtələri, punch nömrə nişanları, ölçü etiketləri.
- **Təfsilatlar standartdır:** müəllif, tarix, mövzu, şərh mətni və rənglər.
- **Buludlar** kənarı buludlu düzbucaqlı və ya çoxbucaqlı şərhlərdir; **mətn qutuları** və **çağırışlar** mətn qutusu şərhləridir; **qeydlər** yapışqan qeydlərdir; **qələm** və **marker** cızıqları mürəkkəb (ink) şərhləridir; **ştamplar** ştamp şərhləridir.
- **Uzunluqlar və sahələr** ölçü şərhləridir və hər kalibrlənmiş vərəq öz miqyasını daşıyır, buna görə ölçüləri anlayan baxıcılar dəyərləri göstərə bilər.
- **Cavablar** şərhə verilmiş cavablardır, **statuslar** isə nəzərdən keçirmə vəziyyətləridir (Açıq status heç bir vəziyyət kimi görünür).
- **Yazdığınız vərəq nömrələri** digər baxıcıların göstərdiyi səhifə etiketlərinə çevrilir.

Yalnız MarkupCraft-ın geri oxuduğu bir neçə şey var: punch elementinin təyin olunmuş şəxsi və son tarixi, element statusu və bəzi üslub təfsilatları. Digər proqramlar onları, şərhi yenidən yazmadıqca, saxlayır.

Başqa proqramda şərhlər hər hansı digər şərh kimi köçürülə və ya redaktə edilə bilər. Əgər kimsə bunu edib faylı geri göndərsə, MarkupCraft faylı açanda şərhin yeni mövqeyindən istifadə edir.

Tam təfsilat: [PDF-də nə saxlanılır](topic:what-the-pdf-keeps).

## "?" kimi çap olunan simvollar

Qeyd mətni hər PDF baxıcının malik olduğu standart Helvetica şriftində yazılır. O, ingilis və Qərbi Avropa hərflərini (é, ñ, ü, ø və s.) əhatə edir, lakin başqa yazıları, bu dəstdən kənar simvolları və emojiləri yox. Bu simvollar MarkupCraft-da yaxşı görünür, lakin saxlanılmış nüsxədə "?" kimi çap olunur. Saxlama mesajı onları sayır: "3 simvol Qərbi Avropa dəstindən kənardadır və nüsxədə "?" kimi çap olunur." Belə sözləri yazın və ya sadə əvəz istifadə edin (məsələn, diametr işarəsi əvəzinə "dia.").

## Saxlana bilməyən fayllar

- **Qorunan PDF-lər:** "Bu PDF qorunub (şifrələnib), buna görə işarələnmiş nüsxə yazıla bilməz. Qorunmayan nüsxə istəyin." Yenə də ekranda nəzərdən keçirə, CSV və BCF ixrac edə bilərsiniz.
- Saxlama başqa səbəbdən alınmazsa, səbəbi göstərən "<file> saxlanıla bilmədi" adlı qutu açılır. Qeydləriniz hələ də sekmədədir; onu bağlamayınca heç nə itmir.

## Yastılaşdırma və çap

Hazırda qeydləri səhifənin içinə yazan yastılaşdırma (flatten) və çap əmri yoxdur. Çap etmək üçün saxlanmış nüsxəni istənilən PDF baxıcıda açın və şərhləri görünən halda çap edin.

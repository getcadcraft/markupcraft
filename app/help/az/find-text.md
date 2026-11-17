---
title: Çertyojlarda mətni axtarın
summary: Hər vərəqdəki sözləri axtarın, hər tapıntıya keçin və hamısını bir addımda buludla qeyd edin.
keywords: axtar, axtarış, mətn, söz, sözlər, ctrl f, qeyd, açar qeyd, çağırış qeydi, hamısını buludla, tapıntıları vurğula, ocr, skan, skanlanmış, mətni oxu, mətni seç, mətni köçür, tesseract
from: 3435c9eb
---

{{ui:Mətni axtar}}, {{ui:Vərəqlər}} panelinin yuxarısında, vərəqlərin üzərində çəkilmiş sözləri axtarır. Altındakı {{ui:Vərəqləri axtar}} yalnız vərəq adlarında axtarır.

## Axtarın

1. {{key:Mod+F}} basın və ya {{ui:Mətni axtar}} açın.
2. Sözləri yazın, məsələn `hood` və ya `verify in field`.
3. {{ui:Bütün vərəqlər}} və ya {{ui:Bu vərəq}} seçin və lazım olsa {{ui:Böyük-kiçik hərfə həssas}} və ya {{ui:Bütün sözlər}} işarələyin.
4. {{key:Enter}} basın və ya {{ui:Axtar}} seçin.

Nəticə: hər tapıntı vərəq nömrəsi və ətrafdakı sözlərlə siyahıya düşür və öz vərəqində sarı rənglə işarələnir. Vərəqi açmaq və ona yaxınlaşmaq üçün tapıntını seçin.

İfadə bəzən iki mətn parçasına və ya iki sətirə bölünmüş olsa da tapılır.

## Hər tapıntını buludla qeyd edin

{{ui:Hamısını buludla}} seçin. Siyahıdakı hər tapıntının ətrafına, bütün vərəqlərdə, şərhi "Tapıldı: <sözləriniz>" olan düzəliş buludu çəkilir. Bir {{key:Mod+Z}} hamısını silir.

## Skanın mətnini oxuyun (OCR)

Skan edilmiş vərəq yalnız şəkildir: sözləri oxunana qədər onları tapmaq mümkün deyil. Sayğac vərəqlərdə mətn olmadığını göstərəndə, onun altında {{ui:Mətni oxu (OCR)…}} seçin və ya {{ui:Səhifələr}} › {{ui:Mətni oxu (OCR)…}}.

1. Səhifələri seçin: bu vərəq, faylın hər səhifəsi və ya açıq bütün fayllardakı hər səhifə.
2. Mətnin dilini seçin. {{ui:İngilis dili də}} ingilis sözlərini də oxuyur.
3. {{ui:Mətni oxu}} seçin. Zolaq oxunan səhifəni göstərir; {{ui:Dayandır}} işi bitirir və artıq oxunmuş səhifələri saxlayır.

Nəticə: sözləri digər mətn kimi tapmaq, seçmək və köçürmək olur. Hər şey kompüterinizdə işləyir: heç nə heç yerə göndərilmir. Studio-da şəbəkəsiz işləyir, brauzerdə isə tətbiq oflayn üçün saxlanandan (ingilis və interfeys dili) və ya dil bir dəfə istifadə olunandan sonra işləyir. Artıq mətni olan səhifələr olduğu kimi qalır.

Saxlayanda sözlər şəkilin arxasında görünməyən mətn kimi PDF-ə yazılır, qeydlərinizdən ayrı olaraq; beləliklə digər PDF proqramları da onları axtara və köçürə bilər. Saxlayana qədər fayl saxlanılmamış kimi göstərilir.

## Mətni seçin və köçürün

{{ui:Digər}} › {{ui:Köçürmək üçün mətni seç}} seçin. Bir sözdən digərinə sürüşdürərək aralarındakı sözləri seçin, boş kağız üzərində sürüşdürərək qutudakı sözləri seçin və ya bir sözə iki dəfə klikləyin. {{key:Mod+A}} vərəqdəki bütün sözləri seçir. {{key:Mod+C}} onları sətirləri saxlayaraq köçürür. Başqa alət bunu bitirir.

## Bilmək yaxşıdır

- Hərfləri xətlərlə çəkilmiş çertyojlarda da mətn yoxdur; onları şəkil kimi oxumaq ən yaxşı çap olunmuş mətnlərdə (skan edilmiş kitab və ya spesifikasiya kimi) işləyir.
- Oxuyucu Tesseract-dır, tətbiqə daxil edilib, ingilis və tətbiqin dilləri üçün dil məlumatları ilə. İlk işə salınmada yüklənir (təxminən 6 MB, ikinci dil üçün daha çox).
- Nə qədər yaxşı oxuduğu skanın keyfiyyətindən asılıdır: 300 dpi təmiz səhifələr demək olar ki, söz-söz oxunur; köhnə, solğun və ya aşağı ayırdetməli skanlar daha çox sözü buraxır.
- Siyahıda ilk 500 tapıntı göstərilir; {{ui:Hamısını buludla}} 2,000-ə qədər tapıntını buludlayır.
- Tapıntılar dəsti bağlananda silinir, bir fayl üçün isə səhifələri dəyişəndə silinir.

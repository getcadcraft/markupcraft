---
title: PDF-də nə saxlanılır
summary: Qeyd olunmuş surətdə dəqiq nə var, digər PDF proqramları nə görür və faylı açanda nə geri oxunur.
keywords: pdf annotasiyaları, şərhlər, saxlanılan məlumat, tam dövrə, səhifə etiketləri, ölçü, baxış vəziyyəti, cavablar, qarşılıqlı işləmə, uyğunluq, yenidən açmaq, şəxsi məlumat
from: 6439ad28
---

Qeyd olunmuş surət orijinal PDF-dir, üzərinə şərhlər (PDF annotasiyaları) əlavə olunub. Səhifələrin özləri, onların çertyojları, mətni, əlfəcinləri və keçidləri olduğu kimi kopyalanır.

## Hər markup

| MarkupCraft | Necə saxlanılır | Digər PDF viewer-lər göstərir |
|---|---|---|
| Düzbucaqlı, qutu buludu | Square annotasiyası (bulud: buludvari kənar) | Düzbucaqlı və ya bulud şərhi |
| Ellips | Circle annotasiyası | Ellips şərhi |
| Çoxbucaqlı, sərbəst bulud | Polygon annotasiyası (bulud: buludvari kənar) | Çoxbucaqlı və ya bulud şərhi |
| Polixətt | PolyLine annotasiyası | Polixətt şərhi |
| Xətt, ox | Line annotasiyası (ox: qapalı ox ucu) | Xətt və ya ox şərhi |
| Uzunluq | Ölçü kimi işarələnmiş Line annotasiyası, ölçü ilə | Dəstəklədiyi yerdə uzunluq ölçüsü |
| Sahə | Sahə kimi işarələnmiş Polygon annotasiyası, ölçü ilə | Dəstəklədiyi yerdə sahə ölçüsü; əks halda çoxbucaqlı |
| Say qrupu | Bir Ink annotasiyası, hər element üçün bir halqa; mətni "group: n" | Ink şərhi |
| Qələm, marker | Ink annotasiyası (marker kimi işarələnmiş) | Ink şərhi |
| Mətn | FreeText annotasiyası | Mətn qutusu şərhi |
| Çağırış | Çağırış leader-i olan FreeText annotasiyası | Çağırış şərhi |
| Qeyd | Text annotasiyası | Açılanda mətni göstərən yapışqan qeyd |
| Möhür | Stamp annotasiyası | Möhür şərhi |

Hər biri bunlarla birlikdə saxlanılır:

- **öz görünüşü**, MarkupCraft-ın ekranda çəkdiyi kimi çəkilir, buna görə hər viewer-də eyni görünür və eyni çap olunur, punch nömrəsi nişanı daxil olmaqla;
- **müəllif**, **yaradılma və dəyişdirilmə tarixləri**, **mövzu**, **şərh mətni** (mətn qutuları və çağırışlar üçün mətn və şərh), **rəng** və **şəffaflıq**;
- **MarkupCraft təfərrüatları** digər proqramların nəzərə almadığı xüsusi yazıda: status, punch elementi, üslub və növ, beləcə dəqiq yenidən açılır.

## Cavab zəncirləri və statuslar

- Hər cavab öz markup-ına bağlı cavab şərhi kimi, müəllifi, tarixi və mətni ilə saxlanılır. Cavabların vərəqdə öz ikonu yoxdur.
- Hər status dəyişikliyi baxış vəziyyəti daşıyan cavab kimi saxlanılır. Digər baxış alətləri onu Accepted, Rejected və ya Completed kimi göstərir; Açıq statusu heç bir vəziyyət kimi saxlanılmır.
- Açıq-dan fərqli statusu olan, lakin qeydə alınmış status dəyişikliyi olmayan markup-a bir baxış vəziyyəti cavabı verilir ki, digər proqramlar statusu da görsün.
- Orijinal fayldakı yalnız oxunan şərhlərə olan cavablar da eyni üsulla, həmin şərhə bağlı saxlanılır.

## Hər vərəq

- **Miqyas:** kalibrlənmiş vərəq səhifəni əhatə edən ölçü görünüşü alır (səhifə miqyasını saxlamağın standart üsulu) və MarkupCraft-ın öz kalibrləmə nüsxəsini.
- **Vərəq nömrəsi:** {{ui:Vərəqi yenidən adlandır}} ilə yazılmış nömrə səhifə etiketi olur. Faylın hər hansı səhifəsində etiket olduqda, həmin faylın hər səhifəsi etiket alır: yazılmış nömrə, yoxsa köhnə etiket, yoxsa səhifə nömrəsi.
- **Vərəq adı:** yazılmış ad yalnız MarkupCraft üçün saxlanılır; digər viewer-lər onu göstərmir.

## Mətn və simvollar

Mətn Helvetica ilə yazılır, bu hər PDF viewer-də var. Qərbi Avropa dəstindən (Windows-1252) kənar hərflər surətdə "?" kimi çap olunur; saxlama mesajı onları sayır.

## Hesablama vərəqləri və səbəblər

Hesablama vərəqləri və səbəblər PDF-in `/MarkupCraftShell` adlı xüsusi yazısında saxlanılır. Digər PDF proqramları bunu nəzərə almır. Köhnə MarkupCraft də nəzərə almır və həmin faylı növbəti dəfə saxlayanda onu silir.

## Artıq olan şərhlərə nə olur

Artıq şərhləri olan PDF-i açdıqda:

- MarkupCraft-ın öz şərhləri dəqiq geri oxunur. Başqa proqram birini yerini dəyişibsə və ya ölçüsünü dəyişibsə, yeni vəziyyət qalib gəlir.
- Digər proqramların düzbucaqlıları, ellipsləri, xətləri, polixətləri, çoxbucaqlıları, ink-ləri, mətn qutularını və yapışqan qeydlərini redaktə olunan markup-lara çevrilir. **Saxlayanda MarkupCraft orijinalları silir və öz üsulu ilə yenidən yazır**, pop-up-ları və cavabları ilə birlikdə. Görünüşləri bir az dəyişə bilər.
- Digər proqramların baxış vəziyyətləri statusu təyin edir; ən yenisi qalib gəlir.
- Qalan hər şey (mətn işarələmələri, digər proqramların möhürləri və xüsusi növlər) surətdə **toxunulmadan saxlanılır**, yalnız oxunan kimi.
- Keçidlər və forma sahələri toxunulmadan saxlanılır və siyahıya salınmır.

Eyni faylı yenidən saxlamaq heç nəyi ikiqat etmir: MarkupCraft-ın oxuduğu markup-lar əvəz olunur, yenidən əlavə edilmir.

## Dəyişdirilməyənlər

Orijinal fayl diskdə heç vaxt dəyişdirilmir. Surət ölçüyə görə optimallaşdırılmır, buna görə orijinaldan bir az böyük ola bilər. Qorunan (şifrələnmiş) PDF-lər saxlanıla bilməz.

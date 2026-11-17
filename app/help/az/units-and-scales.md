---
title: Vahidlər, uzunluqlar və miqyaslar
summary: Uzunluğu yazmağın hər yolu, uzunluqların və sahələrin göstərildiyi vahidlər, yuvarlaqlaşdırma və hazır miqyasların siyahısı.
keywords: vahidlər, futlar, düymlər, futlar və düymlər, metrik, metrlər, millimetrlər, santimetrlər, miqyas, hazır miqyas, memarlıq miqyası, mühəndislik miqyası, nisbət, kvadrat futlar, yuvarlaqlaşdırma, kəsrlər
from: 574b0291
---

## Uzunluq yazmaq

İki nöqtədən kalibrləyəndə real məsafəni yazırsınız. MarkupCraft bunların hamısını oxuyur:

| Yazırsınız | Məna |
|---|---|
| `24'-0"` | 24 fut |
| `12' 6 1/2"` və ya `12'-6 1/2"` | 12 fut 6½ düym |
| `12' 6` | 12 fut 6 düym (düym işarəsi buraxılıb) |
| `6"` və ya `1/2"` | düymlə |
| `12.5'` və ya `12.5 ft` | 12½ fut |
| `3 ft 6 in` | 3 fut 6 düym (həmçinin feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrik (həmçinin meter, metre, millimeter, centimetre…) |
| `24` | çılpaq rəqəm, {{ui:Show lengths in}} altında seçilmiş vahidlə |

Əyri dırnaq işarələri (’ ”) və düymlər üçün iki apostrof ('') da işləyir. Sıfır və mənfi uzunluqlar rədd edilir.

:::warning
Vergül onluq nöqtə kimi oxunur: `1,5 m` 1.5 metrdir. Minlik ayırıcıları yazmayın: `1,200 mm` 1.2 millimetr kimi oxunur. `1200 mm` yazın.
:::

## Uzunluqlar və sahələr necə göstərilir

| {{ui:Show lengths in}} | Uzunluq belə göstərilir | Sahə belə göstərilir |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, 1/16" dəqiqliyə yuvarlaqlaşdırılmış | kvadrat fut, iki onluq işarə |
| {{ui:Decimal feet}} | `12.54'`, iki onluq işarə | kvadrat fut, iki onluq işarə |
| {{ui:Inches}} | `150.5"`, iki onluq işarəyə qədər | kvadrat düym, bir onluq işarə |
| {{ui:Meters}} | `3.820 m`, üç onluq işarə | kvadrat metr, üç onluq işarə |
| {{ui:Millimeters}} | `3820 mm`, tam millimetr | kvadrat millimetr, tam |

Sahənin perimetri uzunluq formatından istifadə edir.

## Hazır miqyaslar

Hazır miqyaslar PDF-in tam çap ölçüsündə olduğunu güman edir: düymə 72 PDF nöqtəsi, CAD proqramının çəkdiyi kimi.

| Qrup | Miqyaslar | Uzunluqlar göstərilir |
|---|---|---|
| Memarlıq | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Futlar və düymlər |
| Mühəndislik | 1" = 10', 20', 30', 40', 50', 60', 100' | Onluq futlar |
| Metrik | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimetrlər |
| Metrik | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metrlər |

Hazır miqyası istifadə edib uzunluqları başqa vahiddə görmək üçün əvəzinə iki nöqtədən kalibrləyin və vahidi orada seçin.

## Başqa proqramların saxladığı miqyaslar

Əgər PDF-də səhifə üçün başqa proqramdan artıq miqyas varsa (səhifədə saxlanılmış ölçü miqyası), MarkupCraft onu fut, düym, metr, santimetr və ya millimetrdədirsə istifadə edir. Onun etiketi fayl bildirdiyi kimi göstərilir.

## Kağız mövqeləri

Status panelində göstəricinin kağızda harada olduğu, vərəqin sol-yuxarı küncündən düymlərlə göstərilir, vərəqin miqyasından asılı olmayaraq. Müqayisənin yerdəyişmə addımları nöqtələrlədir (1 düym = 72 nöqtə).

## Dəqiqlik

Ölçmə kalibrləmə və klikləriniz qədər dəqiqdir. Tapa biləcəyiniz ən uzun bilinən ölçü üzərində kalibrləyin, ucları klikləmək üçün yaxınlaşdırın, sonra başqa bir ölçünü yoxlayın. Yaradılarkən miqyası dəyişdirilmiş PDF ("səhifəyə sığdır" çapı və ya yarı ölçülü dəst) bir ölçüdən kalibrləyəndə hələ də dəqiqdir, lakin hazır miqyasla yox.

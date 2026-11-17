---
title: Birimler, uzunluklar ve ölçekler
summary: Bir uzunluğu yazmanın her yolu, uzunluk ve alanların gösterildiği birimler, yuvarlama ve hazır ölçeklerin listesi.
keywords: birimler, fit, inç, fit ve inç, metrik, metre, milimetre, santimetre, ölçek, hazır ölçek, mimari ölçek, mühendislik ölçeği, oran, kare fit, yuvarlama, kesirler
from: 574b0291
---

## Bir uzunluk yazma

İki noktadan kalibre ettiğinizde gerçek mesafeyi yazarsınız. MarkupCraft bunların hepsini okur:

| Yazdığınız | Anlamı |
|---|---|
| `24'-0"` | 24 fit |
| `12' 6 1/2"` veya `12'-6 1/2"` | 12 fit 6½ inç |
| `12' 6` | 12 fit 6 inç (inç işareti yok) |
| `6"` veya `1/2"` | inç |
| `12.5'` veya `12.5 ft` | 12½ fit |
| `3 ft 6 in` | 3 fit 6 inç (ayrıca feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrik (ayrıca meter, metre, millimeter, centimetre…) |
| `24` | çıplak bir sayı, {{ui:Uzunlukları şöyle göster}} altında seçilen birimde |

Eğri tırnaklar (’ ”) ve inçler için iki kesme işareti ('') da çalışır. Sıfır ve negatif uzunluklar reddedilir.

:::warning
Virgül ondalık nokta olarak okunur: `1,5 m` 1.5 metredir. Binlik ayırıcıları yazmayın: `1,200 mm` 1.2 milimetre olarak okunur. `1200 mm` yazın.
:::

## Uzunluklar ve alanlar nasıl gösterilir

| {{ui:Uzunlukları şöyle göster}} | Uzunluk şöyle görünür | Alan şöyle görünür |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, 1/16" yuvarlanmış | kare fit, iki ondalık |
| {{ui:Decimal feet}} | `12.54'`, iki ondalık | kare fit, iki ondalık |
| {{ui:Inches}} | `150.5"`, en fazla iki ondalık | kare inç, bir ondalık |
| {{ui:Meters}} | `3.820 m`, üç ondalık | m², üç ondalık |
| {{ui:Millimeters}} | `3820 mm`, tam milimetre | mm², tam sayı |

Bir alanın çevresi, uzunluk biçimini kullanır.

## Hazır ölçekler

Hazır ölçekler, PDF'in tam basılı boyutta olduğunu varsayar: bir inç başına 72 PDF noktası, bir CAD programının çizdiği gibi.

| Grup | Ölçekler | Uzunluklar şöyle gösterilir |
|---|---|---|
| Mimari | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Fit ve inç |
| Mühendislik | 1" = 10', 20', 30', 40', 50', 60', 100' | Ondalık fit |
| Metrik | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetre |
| Metrik | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metre |

Hazır bir ölçeği kullanıp uzunlukları başka bir birimde görmek için, bunun yerine iki noktadan kalibre edin ve birimi orada seçin.

## Diğer programların kaydettiği ölçekler

Bir PDF bir sayfa için başka bir programdan zaten bir ölçek taşıdığında (sayfada saklanan bir ölçüm ölçeği), MarkupCraft onu fit, inç, metre, santimetre veya milimetre cinsinden ise kullanır. Etiketi, dosyanın belirttiği gibi gösterilir.

## Kâğıt üzerindeki konumlar

Durum çubuğu, işaretçinin kâğıt üzerinde nerede olduğunu, sayfanın ölçeği ne olursa olsun, sayfanın sol üst köşesinden inç cinsinden gösterir. Compare'in ince ayar adımları noktalar cinsindendir (bir inç başına 72 nokta).

## Doğruluk

Bir ölçüm, kalibrasyonunuz ve tıklamalarınız kadar iyidir. Bulabildiğiniz en uzun bilinen ölçü üzerinden kalibre edin, uçlarına tıklamak için yakınlaştırın, sonra başka bir ölçüyü kontrol edin. Oluşturulurken ölçeklendirilmiş bir PDF ("sayfaya sığdır" çıktısı ya da yarım boyutlu bir set), bir ölçüden kalibre ettikten sonra hâlâ doğrudur; ama hazır bir ölçekle değil.

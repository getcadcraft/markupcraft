---
title: İki revizyonu karşılaştırın
summary: Bir sayfanın eski ve yeni bir sürümünü iki renkte üst üste bindirin, iki noktayla hizalayın ve değişenleri bulutla çevreleyin.
keywords: karşılaştır, üst üste bindirme, sayfaları üst üste bindir, revizyon, fark, farklılıklar, değişiklikler, eski yeni, hizala, geri kontrol, sorun, bülten
from: 62f5d1c5
---

Karşılaştır, iki sayfayı üst üste yerleştirir. Yalnızca eski sayfada olan çizgiler kırmızı, yalnızca yeni sayfada olan çizgiler mavi, her ikisinde olan çizgiler ise soluk gri olarak görünür. Renkler sayfanın altındaki açıklamada adlandırılır: "Yalnızca eski sayfada", "Yalnızca yeni sayfada", "İkisinde de".

## İki sayfayı karşılaştırın

1. İki sürümü de açın. Aynı PDF'in sayfaları veya farklı PDF'lerin sayfaları olabilirler; bunları birlikte tek bir takım olarak açın (bkz. [Birden çok dosyayla çalışma](topic:several-files)).
2. Sağdaki {{ui:Karşılaştır}} sekmesini seçin.
3. {{ui:Eski sayfa}} ve {{ui:Yeni sayfa}} öğelerini seçin. Yeni sayfa, bulunduğunuz sayfa olarak başlar. Birden çok dosya açıkken her sayfanın dosya adı, sayfa adından sonra gösterilir.
4. {{ui:Karşılaştır}} seçin.

Sonuç: MarkupCraft, eskisi karıştırılmış yeni sayfayı gösterir, açıklama belirir ve sekme "<old> (eski) ile <new> (yeni) karşılaştırılıyor. Yeni sayfadaki işaretlemeler düzenlenebilir kalır." yazar.

## Eski ve yeni arasında geçiş yapın

{{ui:Eski ve yeni}} kaydırıcısını sürükleyin. En sola kadar yalnızca eski sayfayı, en sağa kadar yalnızca yeni sayfayı gösterir; ortası ikisini birden gösterir. İleri geri kaydırmak, küçük bir değişikliği görmenin çoğu zaman en hızlı yoludur.

## Sayfaları hizalayın

İki sürüm farklı bir kenar boşluğu, boyut veya döndürme ile çıktı alınmışsa her şey değişmiş gibi görünür. Düzeltmek için:

**İki noktayla (en iyisi):**

1. {{ui:İki noktayla hizala}} seçin. Görünüm yalnızca eski sayfayı gösterir.
2. İki sayfada da bulabileceğiniz keskin bir öğeye tıklayın, örneğin bir kolon ızgarasının kesişimi. Sekme adımları sayar ("4 adımın 1'i").
3. İlkinden uzakta, örneğin karşı ızgara köşesinde ikinci bir öğeye tıklayın.
4. Görünüm yeni sayfaya geçer. İlk öğeye yeniden tıklayın.
5. İkinci öğeye yeniden tıklayın.

Sonuç: "Hizalandı: eski sayfa %100.00 ölçeklendi, 0.00° döndürüldü. İnce ayar için hafifçe kaydırın." Eski sayfa, sığacak şekilde taşınır, ölçeklenir ve döndürülür. Seçim sırasında {{key:Esc}} iptal eder. Kesin bir uyum için tıklamadan önce her öğeye yakınlaştırın.

**Hafifçe kaydırarak:** eski sayfayı taşımak için "Hizala" altındaki dört ok düğmesini kullanın. Adımı seçin (0.25, 1, 5 veya 20 pt; 72 pt kâğıt üzerinde bir inçtir). Sekme ne kadar taşındığını söyler.

{{ui:Sıfırla}} hizalamayı ve kaydırmaları kaldırır.

## Yalnızca değişen çizgiler

Hizalama düğmelerinin altında, {{ui:Resim üst üste}} yerine {{ui:Değişen çizgiler}} seçin. MarkupCraft bunun ardından iki sayfanın kendi çizgilerini karşılaştırır, resimlerini değil: yeni sayfa olduğu gibi gösterilir; yalnızca eski sayfada olan çizgiler kırmızı, yalnızca yeninde olan çizgiler mavi görünür. Yalnızca kısalmış bir çizgi, yalnızca eksik kısmını gösterir. Önce sayfaları hizalayın (yukarıya bakın): karşılaştırma hizalamayı kullanır, dolayısıyla yalnızca kaydırılmış bir sayfa hiçbir değişiklik göstermez. Durum satırı ne kadar değiştiğini söyler.

Bu, çizimin çizgilerden oluştuğu CAD'den çıktı alınmış PDF'ler için çalışır. Taranmış sayfaların karşılaştırılacak çizgileri yoktur: onlar için resim üst üste bindirmeyi kullanın. Bir yazı tipiyle yazılmış metin (çizgi olarak çizilmemiş) karşılaştırılmaz.

## Değişiklikleri işaretleyin

Karşılaştırırken yeni sayfadasınız ve her araç çalışır. Değişiklikleri buldukça etrafına bulut çizin; bunlar yeni sayfaya aittir ve karşılaştırmayı durdurduğunuzda da kalır.

{{ui:Değişiklikleri bulutla çevrele}} bunu sizin için yapar: birbirine yakın duran değişen çizgileri gruplar ve yeni sayfada her grubun etrafına, yorumu "<old sheet> sayfasından beri değişti" olan bir revizyon bulutu çizer. Tek bir {{key:Mod+Z}} hepsini kaldırır; ihtiyaç duymadıklarınızı silin.

## Tüm bir takımı karşılaştırın

Yeni sürüm kendi PDF'i olarak geldiğinde, iki PDF'i de açın ve {{ui:Karşılaştır}} sekmesinde {{ui:İki takımı karşılaştır}} öğesini açın. Eski dosyayı ve yeni dosyayı seçin, ardından {{ui:Takımları karşılaştır}} seçin. Sayfalar numaralarına göre eşleştirilir (bkz. [slip-sheeting](topic:slip-sheet-a-revised-set)), çizgilerine göre karşılaştırılır ve en çok değişen başta olacak şekilde listelenir. Listedeki bir sayfayı seçerek o çifti {{ui:Değişen çizgiler}} ile karşılaştırın.

{{ui:Tüm değişiklikleri bulutla çevrele}}, değişen her sayfadaki değişen çizgi gruplarının her birini bulutla çevreler; geri alabileceğiniz tek bir adımda. Takım karşılaştırması sayfaları önce hizalamaz; bu yüzden sayfada kaydırılmış bir sayfa değişmiş olarak görünür: o çifti tek başına karşılaştırın ve {{ui:İki noktayla hizala}} kullanın.

## Karşılaştırmayı durdurun

{{ui:Karşılaştırmayı durdur}} seçin veya başka bir sayfaya gidin. Hizalama, takımı kapatana kadar aynı sayfa çifti için hatırlanır.

## Bilmeniz iyi olacaklar

- Karşılaştırma çizilmiş olana göre, piksel piksel çalışır. Bir çizginin taşındığını bilmez; eski konumu bir renkte, yeni konumu diğerinde gösterir.
- Yeniden akan metin, değişmiş bir künye tarihi veya farklı bir çıktı stili de değişiklik olarak görünür.
- Çıktısı alınmış bir sayfayla karşılaştırılan taranmış bir sayfa gürültülüdür: tarama çizgileri bulanıklaştırır ve kaydırır.
- Bir yazı tipiyle yazılmış metnin karşılaştırılması ve neyin değiştiğinin bir listesi henüz yapılmadı.

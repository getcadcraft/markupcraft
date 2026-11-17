---
title: MarkupCraft ayarları
summary: Adınızı, yeni işaretlemelerin rengini ve çizgi kalınlığını, yapıştırmanın kopyayı nereye koyacağını ve uzunluklar ile sayfa konumu için birimleri değiştirin.
keywords: ayarlar, tercihler, seçenekler, ad, yazar, renk, varsayılan renk, çizgi kalınlığı, kalın, ince, yapıştır, imleçte yapıştır, ofset, birimler, metrik, milimetre, inç, fit, sıfırla
from: 63ad97fd
---

{{ui:Ayarlar}} öğesini üstteki çubuktaki dişli simgesiyle veya {{key:Mod+,}} tuşuna basarak açın. İlk sekme olan {{ui:MarkupCraft}}, yalnızca bu uygulamaya ait ayarları içerir; {{ui:Genel}} ise her CadCraft uygulamasının paylaştığı ayarları içerir (tema, araç çubuğu, paneller). MarkupCraft ayarları yalnızca uygulamaya özgüdür: burada değiştirirsiniz ve bu tarayıcı bunları hatırlar (bkz. [Bu tarayıcıda neler kalır](topic:browser-storage)). Bir değişiklik hemen geçerli olur; kaydedilecek bir şey yoktur.

## Adınız

{{ui:İşaretlemelerdeki ad}}, her yeni işaretlemenin ve yanıtın taşıdığı ve kaydedilen PDF'lerin açıklamanın yazarı olarak gösterdiği addır. Durum çubuğunun sağ ucundaki düğmeyle aynı addır; ikisinden birinde değiştirin. Zaten çizilmiş işaretlemeler yapıldıkları adı korur. Bkz. [Yazar adınızı belirleyin](topic:set-your-name).

## Yeni işaretlemeler

- **{{ui:İşaretleme rengi}}**, yeni kalem, çizgi, ok, dikdörtgen, elips, çoklu çizgi, çokgen, bulut, çağrı ve metnin başlangıç rengidir (başlangıçta kırmızı). Vurgulayıcılar, notlar, damgalar, uzunluklar, alanlar ve sayımlar kendi renklerini korur, çünkü renkleri ne olduklarını belirtir.
- **{{ui:İnce çizgiler}}, {{ui:Normal}}, {{ui:Kalın çizgiler}}** aynı işaretlemelerin çizgilerini yarı genişlikte, olduğu gibi veya yarım kat daha geniş yapar.

{{ui:Özellikler}} içinde bir araç için seçtiğiniz renk veya çizgi kalınlığı (o araç açıkken ve hiçbir şey seçili değilken) bunların önüne geçer. [Araç sandığındaki](topic:tool-chest) araçlar kendi stillerini korur. Zaten çizilmiş işaretlemeler değişmez: onları seçin ve {{ui:Özellikler}} içinde değiştirin.

## Yapıştırma

{{key:Mod+V}} kopyaladığınızı nereye koyar:

- **{{ui:İmlecin olduğu yere}}** (başlangıç): işaretçi sayfadayken kopya, işaret ettiği yere ortalanarak yerleşir. İşaretçi başka bir yerdeyse, özgünün yanına yerleşir.
- **{{ui:Kopyanın yanına}}**: her zaman özgünün biraz aşağısına ve sağına, her yapıştırmada bir adım daha ileriye yerleşir.

{{ui:Yapıştır}} düğmesi ve {{key:Mod+Shift+V}} ({{ui:Olduğu yere yapıştır}}) bu seçeneklerden hangisi seçilirse seçilsin aynı şekilde çalışır. Bkz. [Kopyalayın, yapıştırın ve çoğaltın](topic:select-and-edit#copy-paste-and-duplicate).

## Ölçümler

- **{{ui:Uzunlukları şöyle göster}}**, iki noktadan kalibre ettiğinizde sayfa ölçeği iletişim kutusunun ilk önerdiği birimdir: fit ve inç, ondalık fit, inç, metre veya milimetre. Zaten kalibre ettiğiniz sayfalar birimini korur. Bkz. [Bir sayfayı kalibre edin ve ölçün](topic:calibrate-and-measure).
- **{{ui:Sayfadaki konum}}**, ekranın sol altındaki işaretçi konumu için inç veya milimetre seçer. Kâğıt üzerindeki bir konumdur, gerçek dünyadaki bir mesafe değildir.

## Sıfırla

İletişim kutusunun altındaki **MarkupCraft ayarlarını sıfırla**, bu ayarları ve {{ui:Genel}} üzerindeki panel ve araç çubuğu ayarlarını başlangıç durumuna döndürür. Adınızı korur, çünkü bu, nasıl çalışmayı sevdiğinizden çok kim olduğunuzu söyler; ve her aracın kendi panelinde seçtiğiniz renkleri de korur.

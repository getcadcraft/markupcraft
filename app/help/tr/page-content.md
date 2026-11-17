---
title: Sayfanın kendi çizgilerini, resimlerini ve metnini değiştirin
summary: PDF'in kendisinin çizdiği şeyleri taşıyın, boyutlandırın, yeniden renklendirin veya silin; bir çizginin noktalarını taşıyın, bir resmi değiştirin ve bir metin satırının sözcüklerini değiştirin.
keywords: sayfa içeriği, temel içerik, pdf düzenle, çizimi düzenle, vektör, yol, şekil, çizgi, resim, görüntü, resmi değiştir, metin, sözcükler, yazı tipi, noktalar, düğümler, taşı, boyutlandır, yeniden renklendir, sil, içerik aracı
from: 471d457e
---

İşaretlemeler sayfanın üzerinde durur. {{ui:İçerik}} aracı sayfanın kendisiyle çalışır: PDF'in çizdiği çizgiler, resimler ve metin satırları. Bu bilgisayardaki PDF'iniz asla değişmez: yaptığınız düzenlemeler kaydettiğiniz kopyanın parçasıdır.

## Neyi değiştireceğinizi seçin

1. {{ui:Seç}} grubunda {{ui:İçerik}} seçeneğini seçin veya {{key:B}} tuşuna basın.
2. {{ui:Özellikler}} içinde {{ui:Seç}} altındaki {{ui:Şekiller}}, {{ui:Resimler}} ve {{ui:Metin}} seçeneklerini açın veya kapatın. Yalnızca açık olan türler seçilebilir; böylece yoğun bir çizimin metnini çizgilerini yakalamadan seçebilirsiniz.
3. Bir nesneyi seçmek için tıklayın. Shift+tıklama ekler veya çıkarır. Birkaç nesne seçmek için boş kâğıdın üzerinde bir kutu sürükleyin: sağa sürüklemek kutunun tamamen içindekini alır, sola sürüklemek dokunduğu her şeyi alır.

Kırpılmış bir alanın içindeki bir şekil yalnızca göründüğü yerde seçilir.

## Taşıyın, boyutlandırın, yeniden renklendirin, silin

- **Taşıma:** seçili bir nesneyi sürükleyin veya ok tuşlarına basın (daha büyük adımlar için Shift basılı tutun). Düz bir çizgide yatay veya dikey taşımak için sürüklerken Shift basılı tutun.
- **Boyutlandırma:** seçimin etrafındaki sekiz karelik kutudan birini sürükleyin. Karşı taraftan büyür veya küçülür. Oranları korumak için Shift basılı tutun.
- **Yeniden renklendirme:** çizgiler ve şekiller için {{ui:Özellikler}} içinde {{ui:Çizgi rengi}}, {{ui:Dolgu rengi}} ve {{ui:Çizgi kalınlığı (pt)}} ayarlayın.
- **Silme:** {{key:Delete}} tuşuna basın veya {{ui:Sayfadan sil}} seçeneğini seçin.
- **Geri alma:** her değişiklik bir adımdır: {{key:Mod+Z}} geri alır, {{key:Mod+Y}} yineler.

{{ui:Eski haline getir}} seçili nesnelerdeki her değişikliği bir seferde geri alır; {{ui:Bu sayfayı eski haline getir}} tüm sayfa için yapar.

## Sayfa içeriğini kopyalayın, kesin ve yapıştırın

{{ui:İçerik}} aracıyla çizgileri, resimleri veya metni seçin, sonra:

- {{key:Mod+C}} kopyalar, {{key:Mod+X}} keser (kopyalar ve sayfadan çıkarır), {{key:Mod+D}} yanlarına bir kopya koyar.
- {{key:Mod+V}} sayfa içeriği olarak yapıştırır; orijinalin yanına veya imlecin olduğu yere yapıştırır ([Ayarlar](topic:settings) bölümünde anlatıldığı gibi). {{key:Mod+Shift+V}} tam aynı yere yapıştırır. Başka bir sayfaya, açık başka bir PDF'e veya bu tarayıcıdaki başka bir MarkupCraft sekmesine yapıştırabilirsiniz.
- {{ui:Düzenle}} grubunun menüsü ve sağ tık menüsü aynı komutlara sahiptir.

Yapıştırma çizgileri çizgi, sözcükleri kendi yazı tipindeki sözcükler, resimleri resim olarak tutar. Tek bir parçadır: taşıyın, kareleriyle boyutlandırın, silin veya {{key:Mod+Z}} ile geri alın. Kaydettiğiniz kopyada sayfanın parçası olur. En son kopyaladığınız şey, işaretleme veya sayfa içeriği, {{key:Mod+V}} ile yapıştırılan şeydir.

Kopya, seçimin etrafındaki kutuya kırpılır: MarkupCraft'ın kopyadan çıkaramadığı (aşağıya bakın) ve bu kutunun içinde kalan şey de birlikte gelir.

## Bir çizginin noktalarını taşıyın

Bir çizgiye veya eğriye çift tıklayın (ya da seçip {{ui:Noktaları düzenle}} seçeneğini seçin). Noktaları kare, eğri tutamaçları daire olarak görünür. Bir noktayı veya tutamacı sürükleyin; bir nokta, yanındaki tutamaçları da beraberinde götürür, böylece eğri çevresinde şeklini korur. Bitirdiğinizde {{key:Esc}} tuşuna basın veya çizgiden uzağa tıklayın.

Dikdörtgenlerin sürüklenecek noktası yoktur: çevrelerindeki karelerle boyutlandırın.

## Bir resmi değiştirin

Bir resim seçin ve {{ui:Resmi değiştir…}} seçeneğini seçin, sonra bir PNG, JPEG veya SVG dosyası (veya bir PDF: ilk sayfası) seçin. Yeni resim eskisinin yerine gelir ve kendi oranlarını korur.

## Bir metin satırının sözcüklerini değiştirin

Bir metin satırına çift tıklayın, yeni sözcükleri {{ui:Sözcükler}} alanına yazın ve {{key:Enter}} tuşuna basın. Sözcükler satırın kendi yazı tipi ve boyutuyla yazılır; satır uzunluğunu korur, bu yüzden sonrasındaki metin kaymaz.

:::note
Çoğu PDF, her yazı tipinden yalnızca kullandığı harfleri taşır. Dosyadaki yazı tipi kopyasında olmayan bir harf yazdığınızda MarkupCraft o harfi Helvetica ile yazar ve bunu bildirir. {{ui:Özellikler}}, dosyadaki yazı tipinin hangi harfleri içerdiğini gösterir.
:::

Metin bir seferde bir satır değiştirilir; bir sonraki satıra akmaz.

## MarkupCraft'ın olduğu gibi bıraktıkları

- **Taranmış sayfalar** tek bir resimdir: resmi taşıyabilir, boyutlandırabilir, değiştirebilir veya silebilirsiniz; ama içindekiler düzenlenemez.
- **Şifreli ve imzalı PDF'ler:** sayfayı değiştirmek bir imzayı bozar; bu yüzden {{ui:İçerik}} aracı bunu söyler ve hiçbir şey değiştirmez. İşaretlemeler yine çalışır.
- **Kırpma alanları**, sayfanın içerik akışının iki parçası arasında bölünmüş nesneler ve bir alanın tamamını dolduran renk karışımları olduğu gibi kalır; denediğinizde MarkupCraft nedenini söyler.
- **PDF'in tanımlamadığı standart bir yazı tipindeki sözcükler** (örneğin dosyada harf genişlikleri bulunmayan bir Times yazı tipi) değiştirilemez, çünkü MarkupCraft satırın aralığını koruyamaz. Satır yine taşınabilir.

## İşaretlemeleri sayfaya koyun

Çizgi, dikdörtgen, elips, çoklu çizgi, bulut ve kalemle çizdiğiniz işaretlemeler sayfanın kendisinin parçası olabilir: bunları seçin ve {{ui:Özellikler}} içinde {{ui:Sayfaya koy}} seçeneğini seçin. Metin, damga, resim ve saydam renkler işaretleme olarak kalır.

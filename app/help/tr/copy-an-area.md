---
title: Sayfanın bir alanını veya bir üst üste bindirmeyi kopyalayın
summary: Bir dikdörtgen, bir elips veya serbest biçimli bir şekille sayfanın bir bölümünü kopyalayın ve başka bir sayfaya, CadCraft'a, BimCraft'a, DetailCraft'a veya herhangi bir programa, kendi boyutunda yapıştırın; saydam bir üst üste bindirme olarak kopyalayın ve iki noktayla bir resmi hizalayın.
keywords: alanı kopyala, alan, kırp, kes, anlık görüntü, klip, bölge, dikdörtgen, elips, daire, serbest biçim, lasso, resim, görüntü, png, üst üste bindirme, saydam, şeffaf, tonlama, opaklık, yapıştır, gerçek boyut, ölçek, hizala, iki nokta, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

{{ui:More}} › {{ui:Sayfanın bir alanını kopyala…}} seçin. Sayfanın üstünde bir çubuk açılır.

## Alanı seçin

Çubukta {{ui:Dikdörtgen}}, {{ui:Elips}} veya {{ui:Serbest biçim}} seçin, sonra sayfada sürükleyin:

- **Dikdörtgen:** kopyalanacak parçanın etrafında bir kutu sürükleyin.
- **Elips:** bir kutu sürükleyin; içindeki elips kopyalanır ve dışındaki köşeler saydam olur.
- **Serbest biçim:** kopyalanacak parçanın etrafını çizin; şekil kendini kapatır. Dışı saydam olur.

Yeniden başlamak için tekrar sürükleyin veya {{key:Esc}} tuşuna basın.

## Kopyala

- {{ui:İşaretlemeleri dahil et}} işaretlemelerinizi sayfayla birlikte kopyalar; temiz çizim için işaretini kaldırın.
- {{ui:Çözünürlük}}: {{ui:Ekrandaki gibi}}, 72, 150 veya 300 dpi. Resim 3 MB'ın altında tutulur; yüksek çözünürlükte büyük bir alan bunu aşacaksa çözünürlük düşürülür ve durum satırı neye düşürüldüğünü söyler.
- {{ui:Kopyala}} ({{key:Mod+C}} veya {{key:Enter}} de olur) alanı PNG resmi olarak panoya koyar; bu, Word'e, e-postaya, diğer PDF programlarına ve çizim programlarına yapıştırılır.
- Yapıştırmada saydam kısımları düşüren bir program için bunun yerine {{ui:PNG olarak kaydet}} resmi indirir.

## Üst üste bindirme olarak kopyalayın

{{ui:Bindirme olarak kopyala}} ayrıca beyaz kâğıdı saydam yapar, böylece yalnızca çizgiler kalır. {{ui:Renk}} her çizgiye tek bir renk verir (kırmızı, mavi, yeşil, turuncu veya mor); böylece bindirme altındaki çizimden ayrılır; {{ui:Kendi renkleri}} bunları korur. {{ui:Yoğunluk}}, uygulamalarımızda yapıştırıldığında başlangıçtaki gücüdür (değiştirmediğiniz sürece %50).

## Yapıştırın

**MarkupCraft içinde**, herhangi bir sayfada {{key:Mod+V}} alanı işaretçinin olduğu yere resim işaretlemesi olarak yapıştırır. Boyutunda gelir:

- kâğıtta, geldiği sayfadaki boyutu neyse o boyutta;
- iki sayfanın da ölçeği varsa, çizimdeki aynı boyutta: 1:50 bir sayfadan gelen bir alan, 1:100 bir sayfada kâğıt boyutunun yarısında gelir.

Bir bindirme, gücünde başlar; bunu {{ui:Özellikler}} içindeki {{ui:Opaklık}} ile değiştirin. Herhangi bir resim gibi taşıyın, boyutlandırın, kilitleyin ve silin; sayfaya çizmek için {{ui:Kaydederken sayfaya düzleştir}} işaretini koyun.

**CadCraft, BimCraft ve DetailCraft içinde** kopya da boyutunu bilir; böylece yapıştırma, sayfanın ölçeği varsa çizimin gerçek boyutunda gelir, yoksa bir ölçek ister. Her uygulamanın resimlerle ilgili yardımına bakın.

## Bir resmi iki noktayla hizalayın

Bir resim veya bindirme seçin, sonra {{ui:Diğer}} › {{ui:Resmi iki noktayla hizala}} seçin:

1. Resimde bir noktaya tıklayın.
2. Bu noktanın gideceği yere tıklayın.
3. Resimde, ilkinden uzakta ikinci bir noktaya tıklayın.
4. Bu noktanın gideceği yere tıklayın.

Resim, iki nokta da tıkladığınız yerlere gelecek şekilde ölçeklenir, taşınır ve döndürülür. {{key:Esc}} durdurur; {{key:Mod+Z}} bunu tek adımda geri alır.

## Bilmeniz iyi olacaklar

- Boyut, kopyayla birlikte yalnızca aynı sitedeki uygulamalarımız arasında taşınır ve yalnızca son birkaç saat içinde yapılmış bir kopya için geçerlidir; başka bir program düz bir resim alır.
- Tarayıcı MarkupCraft'ın sistem panosunu kullanmasına izin vermezse durum satırı bunu söyler: uygulamalarımızda yapıştırma yine çalışır ve {{ui:PNG olarak kaydet}} diğer programlar için çalışır.
- Hizalama, resmi pikselleri yeniden çizerek döndürür; bu yüzden döndürülmüş bir resim orijinalinden biraz daha yumuşak olur.

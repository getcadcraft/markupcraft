---
title: Bir sayfayı kalibre edin ve ölçün
summary: Her sayfanın ölçeğini hazır bir ölçekten veya bilinen bir ölçüden ayarlayın, ardından uzunlukları, çevreli alanları ve sayımları ölçün.
keywords: kalibre et, ölçek, ölçeği ayarla, ölç, uzunluk, mesafe, ölçü, alan, fit kare, çevre, sayım, metraj, miktar, cetvel, aritmetik, hesaplama, artı, kesir
from: 49a25c6d
---

Uzunluklar ve alanlar sayfanın ölçeğini bilmelidir. MarkupCraft ölçeği **sayfa başına** tutar: ölçüm yaptığınız her sayfayı kalibre edin. Sayımlar ölçek gerektirmez.

Durum çubuğu geçerli sayfanın ölçeğini veya "Kalibre edilmedi" yazısını gösterir.

## Listeden bir ölçek seçin

PDF tam boyutta olduğunda (24 × 36 olarak yazdırılan 24 × 36 bir sayfa) ve çizim ölçeğini belirttiğinde bunu kullanın.

1. Durum çubuğundaki ölçek düğmesine tıklayın ("Kalibre edilmedi"). "Sayfa ölçeği" kutusu açılır.
2. {{ui:Ölçek}} altında ölçeği seçin: mimari (1/32" = 1'-0" ile 3" = 1'-0" arası), mühendislik (1" = 10' ile 1" = 100' arası) veya metrik (1:1 ile 1:1000 arası).
3. {{ui:Ölçeği ayarla}} seçin.

Sonuç: durum çubuğu ölçeği gösterir, örneğin `1/4" = 1'-0"`. Mimari ölçekler uzunlukları fit ve inç olarak, mühendislik ölçekleri ondalık fit olarak, metrik ölçekler ise 1:50'ye kadar milimetre, 1:100'den itibaren metre olarak gösterir.

:::warning
Hazır ayar yalnızca PDF küçültülmemişse doğrudur. Yarı boyutlu bir takım veya oluşturulurken "sayfaya sığdır" seçilmiş bir sayfa, hazır ayarla yanlış ölçülür. Bunun yerine bilinen bir ölçüden kalibre edin ve her durumda bir ölçüyü kontrol edin.
:::

## Bilinen bir ölçüden kalibre edin

Bunu yarı boyutlu takımlar, taranmış sayfalar, alışılmadık ölçeklerdeki detaylar veya bir hazır ayarı kontrol etmek için kullanın.

1. Güvendiğiniz uzun bir ölçü veya grafik ölçek çubuğu bulun.
2. {{ui:Ölç}} grubunda {{ui:Kalibre et}} seçin (veya "Sayfa ölçeği" kutusunda {{ui:İki nokta seç}} seçin).
3. Ölçünün bir ucuna, sonra diğer ucuna tıklayın. (Veya bir uçtan diğerine sürükleyin.) Doğruluk için önce yakınlaştırın; {{key:Shift}} çizgiyi 45° adımlarında tutar.
4. Kutu, noktaların kâğıt üzerinde ne kadar uzakta olduğunu söyler ve "Gerçekte ne kadar uzaktalar?" diye sorar. {{ui:Gerçek mesafe}} girin, örneğin `24'-0"`, `12' 6 1/2"`, `7.2 m` veya `900 mm`.
5. {{ui:Uzunlukları şöyle göster}} altında uzunlukların nasıl gösterileceğini seçin: {{ui:Fit ve inç}}, {{ui:Ondalık fit}}, {{ui:İnç}}, {{ui:Metre}} veya {{ui:Milimetre}}.
6. {{ui:Ölçeği ayarla}} seçin.

Sonuç: durum çubuğu "Kalibre edildi: 24'-0" karşılığı 1.00 in" yazısını gösterir (gerçek uzunluk ve kâğıt uzunluğu) ve ölçmek üzere olduğunuz araç yeniden açılır. Uzunluk yazmanın tüm yolları [Birimler ve uzunluklar](topic:units-and-scales) bölümündedir.

Gerçek mesafe küçük bir hesaplama da olabilir: `12'6"+3/4"`, `(24'-0")/3` veya `2*450mm`. `+ - * /` ve parantez kullanın; birimsiz bir sayı, {{ui:Uzunlukları şöyle göster}} altındaki birimde sayılır ({{ui:Fit ve inç}} için fit). {{ui:Ölçeği ayarla}} sonucu kullanır.

MarkupCraft yazdığınızı okuyamazsa kutu bunu söyler: 'Bu, MarkupCraft'ın anladığı bir uzunluk değil. 24'-0", 12' 6 1/2", 7.2 m veya 900 mm deneyin.' Çözemediği bir hesaplama nedenini ve yerini söyler, örneğin "Bir parantez kapatılmamış (karakter 5)."

## Bir uzunluğu ölçün

1. {{ui:Uzunluk}} ({{key:M}}) seçin.
2. Başlangıca, sonra bitişe tıklayın. Veya başlangıçtan bitişe sürükleyin. {{key:Shift}} 45° adımlarında tutar.

Sonuç: üzerine uzunluk yazılmış, uç işaretli bir ölçülendirme çizgisi. Durum çubuğu bunu tekrarlar ("Uzunluk: 12'-6 1/2" (1/4" = 1'-0")."), ve {{ui:Özellikler}} bunu {{ui:Uzunluk}} altında gösterir. Fit ve inç, en yakın 1/16"'a yuvarlanır.

Sayfanın henüz ölçeği yoksa {{ui:Uzunluk}} seçildiğinde {{ui:Kalibre et}} moduna geçilir ve durum çubuğu şunu açıklar: "Önce bu sayfayı kalibre edin: birbirinden bilinen bir uzaklıktaki iki nokta seçin veya ölçeğini seçin. Sonra ölçün." Ölçeği ayarladıktan sonra {{ui:Uzunluk}} geri gelir.

## Ölçekli çizim

Kalibre edilmiş bir sayfada {{ui:Çizgi}}, {{ui:Ok}}, {{ui:Uzunluk}}, {{ui:Çoklu çizgi}}, {{ui:Çokgen}}, {{ui:Serbest bulut}}, {{ui:Alan}} veya bir mekân çizerken gerçek uzunlukları yazabilirsiniz:

1. İlk noktaya tıklayın.
2. Sonraki parçanın gideceği yöne işaret edin ve uzunluğunu yazın, örneğin `16` (sayfanın birimiyle), `12'6"` veya `3.5 m`. Yazarken işaretçinin yanında bir kutu açılır.
3. {{key:Enter}} tuşuna basın. Nokta, işaretçinin yönünde o kadar uzağa yerleşir.

Yönü tam olarak ayarlamak için `<` ve derece cinsinden bir açı ekleyin: `8 < 90` 8 fit tam yukarı, `4<0` sağa, `10 < 225` aşağı ve sola gider; sayfa nasıl görülüyorsa öyle (döndürülmüş sayfalar dahil). Sonraki köşeler için uzunluk yazmaya devam edin ve şekli her zamanki gibi tamamlayın. {{key:Esc}} kutuyu nokta yerleştirmeden kapatır.

## Bir açıyı ölçün

1. {{ui:Açı}} ({{key:X}}) seçin.
2. Bir kolun ucuna, sonra köşeye, sonra diğer kolun ucuna tıklayın.

Sonuç: iki kol, köşede küçük bir yay ve derece cinsinden açı, onda bir hassasiyetle (0° ile 180° arası). Açı ölçek gerektirmez. {{ui:Özellikler}} bunu {{ui:Açı}} altında gösterir; liste, CSV ve BCF de taşır.

Kalibre edilmiş bir sayfadaki {{ui:Yay}} ({{key:O}}) ayrıca {{ui:Özellikler}} içinde eğri boyunca uzunluğunu gösterir.

## Bir alanı ve çevresini ölçün

1. {{ui:Alan}} ({{key:Q}}) seçin.
2. Odanın veya bölgenin her köşesine tıklayın.
3. Çift tıklayarak, {{key:Enter}} ile veya sağ tıklayarak bitirin (dokunmatikte çift dokunun). {{key:Backspace}} son köşeyi kaldırır.

Sonuç: alan ile gölgeli bir taslak ve ortada çevreyle birlikte "P", örneğin "128.00 sq ft" ve "P 48'-0"". Fit ölçekleri fit kare, inç ölçekleri inç kare, metre ölçekleri metrekare, milimetre ölçekleri milimetrekare verir. Bir alan en az üç köşe gerektirir.

### Boşluklar

Bir kolonu, bir şaftı veya bir avluyu dışarıda bırakmak için alanı seçin ve {{ui:Özellikler}} içinde {{ui:Boşluk ekle}} seçin. Boşluğun köşelerini alanın içinde tıklayın ve bir alan için olduğu gibi bitirin. Boşluk açık kalır (gölgesiz), alanı düşer ve kenarları çevreye eklenir: 16' × 8' bir oda, 4' × 4' bir boşlukla "112.00 sq ft" ve "P 64'-0"" okunur. İhtiyacınız kadar ekleyin; birbirleriyle çakışamazlar veya alanın taslağını kesemezler. {{ui:Boşlukları kaldır}} hepsini kaldırır, {{key:Mod+Z}} birini geri alır.

## Nesneleri sayın

1. {{ui:Say}} ({{key:U}}) seçin.
2. {{ui:Özellikler}} içinde bir {{ui:Grup adı}} yazın, örneğin "Zemin giderleri". (Bir sonraki sefer için kalır.)
3. Sayfadaki her öğeye tıklayın.

Sonuç: her tıklama numaralı bir nokta ekler; ilk noktada "Zemin giderleri: 7" gibi bir etiket bulunur ve durum çubuğu süren toplamı tutar.

- **Başka bir grup başlatın:** {{key:Esc}} tuşuna bir kez basın (seçimi temizler), {{ui:Grup adı}} değiştirin ve yeniden tıklayın.
- **Mevcut bir gruba ekleyin:** önce grubu seçin, sonra {{ui:Say}} seçin ve tıklayın.
- **Bir işareti kaldırın:** grup seçiliyken {{key:Shift}} tuşunu basılı tutun ve noktaya tıklayın. Son noktayı kaldırmak grubu da kaldırır. Klavyesiz bir dokunmatik ekranda bunun yerine {{key:Mod+Z}} veya {{ui:Geri al}} kullanın.
- **Bir grubu yeniden adlandırın:** seçin ve {{ui:Özellikler}} içinde {{ui:Grup adı}} alanını düzenleyin.

Bir sayım grubu tek bir sayfaya aittir. Birden çok sayfadaki sayımlar işaretleme listesinde ayrı gruplar olarak görünür.

## Ölçeği değiştirin veya kaldırın

Durum çubuğundaki ölçek düğmesine tıklayın. Kutu geçerli ölçeği gösterir; başka birini seçin, {{ui:İki nokta seç}} seçin veya {{ui:Ölçeği kaldır}} seçin.

Zaten çizilmiş uzunluklar ve alanlar yeni ölçekle hemen **yeniden ölçülür**. {{ui:Geri al}} eski ölçeği geri getirir.

## Sayılar nereye gider

- {{ui:Özellikler}} seçili ölçümün değerlerini gösterir.
- {{ui:İşaretlemeler}} sekmesi her değeri listeler ve CSV'sinde "Ölçüm" sütunu vardır. Bkz. [İşaretleme listesi](topic:markups-list-and-export).
- Kaydedilen PDF, ölçeği sayfada tutar ve uzunlukları ile alanları ölçüm yorumları olarak yazar; böylece ölçümleri anlayan diğer PDF programları bunları gösterebilir. Bkz. [PDF'de ne kaydedilir](topic:what-the-pdf-keeps).

Kalemler, birim maliyetler ve fiyatlarla tam bir miktar metrajı için TakeoffCraft kullanın: MarkupCraft inceleme için ölçer, keşif için değil.

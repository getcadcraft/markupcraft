---
title: Revize bir takımı ara sayfayla ekleyin
summary: Bir plan takımının yeni sürümünü eskisinin yanında açın ve açık her işaretlemeyi aynı numaraya sahip sayfaya taşıyın.
keywords: ara sayfa, ara sayfa ekle, revize takım, yeni sürüm, revizyon, yerine geçme, yerine geçen, ileri taşıma, sayfaları değiştir, yeniden yayımlama, ek, bülten
from: e15163a0
---

Çizimlerin yeni bir sürümü geldiğinde, ara sayfalama incelemenizi ona taşır: her yeni sayfa, aynı numaraya sahip eski sayfanın işaretlemelerini alır ve eski sayfa "Yerine geçen" damgası alır.

## Ara sayfalayın

1. İşaretlemelerinizle birlikte mevcut kümeyi açın.
2. {{ui:Sayfalar}} seçeneğini, sonra {{ui:Revize takımı ara sayfayla ekle…}} seçeneğini belirleyin ve yeni PDF'leri seçin. Eski kümenin yanında açılırlar.
3. İletişim kutusu her yeni sayfayı ve yerini aldığı eski sayfayı listeler. Bir satırın işaretini kaldırırsanız o sayfanın işaretlemeleri olduğu yerde kalır. Yeni numarası olan sayfaların taşıyacak bir şeyi yoktur.
4. Kapatılmış işaretlemelerin (Kabul edildi, Reddedildi, Tamamlandı) eski sayfalarda kalıp kalmayacağını ve eski sayfaların damgalanıp damgalanmayacağını seçin.
5. {{ui:İşaretlemeleri ileri taşı}} seçeneğini belirleyin.

Sonuç: işaretlemeler yeni sayfalarda aynı yerde, yanıtları, durumları ve yazarlarıyla görünür. Bir eksik iş maddesi yeni sayfaya taşınır ve numarasını korur. Eski sayfalar işaretlemelerini bir kayıt olarak, kırmızı "Yerine geçen" damgasının altında tutar. Durum çubuğu neyin taşındığını özetler.

{{ui:Yalnızca dosyaları aç}}, hiçbir şeyi taşımadan yeni kümeyi açar; örneğin önce karşılaştırmak için. Bkz. [İki revizyonu karşılaştırın](topic:compare-revisions).

## Sayfalar nasıl eşleştirilir

- **Sayfa numarasına göre**, sayfalar listesinin gösterdiği biçimde okunur: {{ui:Sayfayı yeniden adlandır}} ile yazdığınız bir numara, PDF'nin sayfa etiketi veya künye. Büyük-küçük harf, boşluk, nokta ve tire önemli değildir: "A-101", "a101" ile eşleşir.
- Açık iki dosyada bu numaraya sahip bir sayfa varsa, en yeni olan değiştirilir; böylece sürümden sürüme ara sayfalama yapabilirsiniz.
- **Taranmış kümelerin** okunacak numarası yoktur. Yeni dosyada hiç numara yoksa, sayfaları sayfa sırasına göre aynı sayfa sayısına sahip açık bir dosyayla eşleştirilir. Taşımadan önce bu satırları denetleyin.

## İyi bilinmesi gerekenler

- Tek bir {{key:Mod+Z}} tüm ara sayfalamayı geri alır: kopyaları, damgaları ve taşınan eksik iş maddelerini. Yeni dosyalar açık kalır.
- Yeni bir sayfa farklı boyutta ise işaretlemeler sayfayla birlikte ölçeklenir ve durum çubuğu denetlenmesi gereken sayının kaç olduğunu söyler.
- Yeni sayfa aynı boyutta ve ölçeği yoksa, eski sayfanın ölçeği de beraberinde gelir.
- Diğer programların yaptığı açıklamalar eski sayfalarda kalır: burada salt okunurdur.
- Taşınan işaretlemeleri korumak için yeni dosyaları kaydedin. Bkz. [İşaretlenmiş PDF'yi kaydedin](topic:save-the-marked-up-pdf).

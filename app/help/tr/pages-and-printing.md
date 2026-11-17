---
title: Yazdırın ve bir PDF'in sayfalarını değiştirin
summary: Sayfaları işaretlemeleriyle yazdırın; açık bir PDF'in sayfalarını döndürün, taşıyın, ekleyin, silin veya ayıklayın.
keywords: yazdır, yazıcı, kâğıt, sayfalar, sayfa, döndür, çevir, sırala, sayfayı taşı, ekle, sayfa ekle, boş sayfa, sayfa sil, sayfayı kaldır, ayıkla, böl, sayfa işlemleri
from: 81832d9b
---

{{ui:Dosya}} grubundaki {{ui:Sayfalar}} menüsü, açık sayfanın ait olduğu PDF üzerinde çalışır. Bu bilgisayardaki PDF'iniz asla değişmez: değişiklikler kaydettiğiniz kopyanın parçasıdır.

## Yazdırma

1. {{key:Mod+P}} tuşlarına basın veya {{ui:Sayfalar}}, ardından {{ui:Yazdır…}} seçeneğini seçin.
2. Birden çok sayfa açıksa ne yazdırılacağını seçin: {{ui:Bu sayfa}}, bu dosyanın her sayfası, tüm takım veya yazdığınız sayfalar (örneğin `1-3, 5`).
3. {{ui:Yazdır}} seçeneğini seçin. Tarayıcınızın yazıcı iletişim kutusu açılır: yazıcıyı, kâğıdı ve ölçeği orada seçin.

İşaretlemeler sayfada göründükleri gibi basılır: yazıcıya giden kopyanın sayfalarına çizilirler. Diğer programların yaptığı açıklamalar, o PDF'in belirttiği şekilde basılır.

:::safari firefox
Tarayıcınız sayfanın içinden yazdıramazsa, sayfalar yeni bir sekmede PDF olarak açılır. Oradan yazdırın.
:::

## Sayfayı döndürün

{{ui:Sayfalar}}, ardından {{ui:Sayfayı saat yönünde döndür}} veya {{ui:Sayfayı saat yönünün tersine döndür}} seçeneğini seçin. Açık sayfa bir çeyrek tur döner. İşaretlemeleri çizimdeki yerlerinde kalır; yazdığınız metin de sayfayla birlikte döner, böylece dik okunmaya devam eder.

## Sayfayı taşıyın

{{ui:Sayfalar}}, ardından {{ui:Sayfayı öne taşı}} veya {{ui:Sayfayı arkaya taşı}} seçeneğini seçin. Açık sayfa kendi PDF'indeki komşusuyla yer değiştirir. İşaretlemeleri, ölçeği ve sayfa numarası onunla birlikte gider.

## Sayfa ekleyin

- {{ui:PDF'den sayfa ekle…}} başka bir PDF'in her sayfasını açık sayfadan sonra ekler.
- {{ui:Boş sayfa ekle}} açık sayfadan sonra aynı boyutta boş bir sayfa ekler; eskizler ve notlar için. {{ui:Yeni}} ile oluşturulan bir takımda, takımın ızgarasına da sahip olur.
- {{ui:Yeni}} ile oluşturulan bir takımda, {{ui:Sayfalar}} listesinin altındaki {{ui:Boş sayfa ekle}} sona diğerleri gibi bir sayfa daha ekler. Bkz. [Boş sayfalarla başlayın](topic:open-a-plan-set#start-with-blank-pages).

Eklenen sayfalar, siz yeniden adlandırana kadar sayfa numaralarını etiket olarak alır. Bkz. [Bir sayfayı yeniden adlandırın](topic:open-a-plan-set#rename-a-sheet).

## Sayfa silin

1. {{ui:Sayfalar}}, ardından {{ui:Sayfaları sil…}} seçeneğini seçin.
2. Bu PDF'in sayfa numaralarını yazın, örneğin `3` veya `2-4`. Açık sayfanın numarası doldurulmuş olur.
3. {{ui:Sayfaları sil}} seçeneğini seçin. Bu sayfalarda işaretleme varsa MarkupCraft kaç tane olduğunu söyler ve yeniden sorar.

Bir PDF en az bir sayfa tutar. Bir dosyayı tümüyle kaldırmak için takımı kapatın ve ihtiyacınız olan dosyaları yeniden açın.

## Sayfa ayıklayın

{{ui:Sayfalar}}, ardından {{ui:Sayfaları ayıkla…}} seçeneğini seçin ve sayfaları yazın. Bunlar "<file> (pages 1-3).pdf" adlı yeni bir PDF olarak indirilir; işaretlemeleri, düzenlemeye devam edebileceğiniz açıklamalar olarak gelir. Açık dosya olduğu gibi kalır.

## İyi bilinmesi gerekenler

- **Geri al, sayfa değişikliğinde durur.** {{key:Mod+Z}} ondan sonra çizilen işaretlemeleri geri alır, ama sayfa değişikliğinin kendisini veya ondan önceki hiçbir şeyi geri almaz. Baştan başlamak için kaydetmeden kapatın ve orijinal PDF'inizi açın.
- Sayfa numaraları, takımın tamamı değil tek bir PDF'in sayfalarını sayar. Bir sayfayı taşımak onu kendi dosyasının içinde tutar.
- Değiştirilen sayfalar kaydedilmemiş işlerdir: {{ui:Kaydet}} yeniden düzenlenmiş kopyayı indirir ve ayrılmadan önce sorar.

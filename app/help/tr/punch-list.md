---
title: Eksik işler listesi oluşturun
summary: İşaretlemeleri atamalı, son tarihli ve durumlu numaralı eksik iş kalemlerine dönüştürün ve listeyi dışa aktarın.
keywords: eksik işler listesi, eksik iş, sorun listesi, kusur, saha sorunları, gözlem, ata, atanan, son tarih, teslim, gezinti, numara
from: b98b38e6
---

Eksik iş kalemi, atanan kişisi, son tarihi ve kalem durumu olan numaralı bir işaretlemedir (markup). Numara, işaretlemenin yanında sayfaya çizilir; böylece basılı sayfa ve liste eşleşir.

## Kalem ekleyin

1. Sayfalardaki her sorunu işaretleyin: bulut, çağrı, not, herhangi bir şey.
2. Bunlardan birini veya birkaçını seçin (bkz. [İşaretlemeleri seçin, taşıyın ve değiştirin](topic:select-and-edit)).
3. {{ui:Eksik işler listesi}} sekmesini açıp {{ui:Seçilenleri eksik işler listesine ekle}} seçeneğini seçin ya da {{ui:Özellikler}} içinde {{ui:Eksik işler listesine ekle}} seçeneğini seçin.

Sonuç: her işaretleme sıradaki numarayı alır (1, 2, 3…), önce sayfa sırasına, sonra çizilme sırasına göre. Sayfada numaralı bir rozet belirir ve durum çubuğu "Eksik işler listesine 3 kalem eklendi." yazar. Zaten numarası olan işaretlemeler ve salt okunur açıklamalar atlanır.

## Ayrıntıları doldurun

{{ui:Eksik işler listesi}} sekmesinde her kalem numarasını, konusunu, metnini, sayfasını ve durumunu gösterir; altında üç alan vardır. Aynı alanlar, işaretleme seçiliyken {{ui:Özellikler}} içinde "Eksik işler listesi" altında da bulunur:

- {{ui:Atanan}}: bir ad veya meslek, serbest metin olarak.
- {{ui:Son tarih}}: tarih seçiciden bir tarih.
- {{ui:Kalem durumu}}: Açık, Devam ediyor, Gözden geçirme için hazır veya Kapalı.

Bir kalemin başlığına tıklayın; sayfasında onu gösterir.

Kalem durumu, işaretlemenin gözden geçirme durumundan (Açık, Kabul edildi, Reddedildi, Tamamlandı) ayrıdır. İş için kalem durumunu, açıklama için gözden geçirme durumunu kullanın.

## Bir kalemi kaldırın

İşaretlemeyi seçin ve {{ui:Özellikler}} içinde {{ui:Eksik işler listesinden çıkar}} seçeneğini seçin. İşaretleme kalır; yalnızca numara gider. Takım açıkken numaralar yeniden kullanılmaz: sonraki kalem yine bir sonraki yeni numarayı alır; yani bir boşluk, bir kalemin çıkarıldığı anlamına gelir. Dosya yeniden açıldığında numaralandırma, dosyadaki en yüksek numaradan sonra devam eder.

## Listeyi dışa aktarın

{{ui:Eksik işler listesi}} sekmesinde {{ui:CSV olarak dışa aktar}} seçeneğini seçin. "<name> punch list.csv" dosyasını alırsınız; sütunlar numara sırasıyla şunlardır: No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author ve Created. Herhangi bir elektronik tabloda açın.

Eksik işler numaraları, atananlar, son tarihler ve kalem durumları işaretlenmiş PDF'in içinde de kaydedilir; PDF'i yeniden açtığınızda geri gelirler. Diğer PDF görüntüleyiciler numara rozetini işaretlemenin parçası olarak gösterir. İşaretlemeler listesinin BCF dışa aktarımı da atananı ve son tarihi taşır (bkz. [BCF temelleri](topic:bcf-basics)).

## Sahada tablet ile

Takımı bir iPad'de açın, işi dolaşın ve her sorunun yanına bir {{ui:Not}} bırakın veya bir {{ui:Bulut}} çizin. İlerledikçe bunları eksik işler listesine ekleyin ve ayrılmadan önce kaydedin. Bkz. [iPad veya dokunmatik ekranda gözden geçirme](topic:review-on-a-tablet).

Biçimlendirilmiş bir PDF veya elektronik tablo raporu olarak eksik işler listesi ve kalemlere eklenen fotoğraflar henüz yapılmadı.

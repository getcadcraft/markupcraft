---
title: BCF temelleri
summary: MarkupCraft'tan alınan bir BCF dışa aktarımının neler içerdiğini, BIM koordinasyon araçlarıyla nasıl kullanılacağını ve sınırlarını açıklar.
keywords: bcf, bcfzip, BIM işbirliği biçimi, sorunlar, koordinasyon, çakışma, konular, görünüm noktası, anlık görüntü, openbim, buildingsmart, sorunları dışa aktar
from: 0de26175
---

BCF (BIM İşbirliği Biçimi), BIM araçları arasında sorun aktarmak için açık bir dosya biçimidir. Birçok model koordinasyon ve modelleme programı bir `.bcfzip` dosyasını sorun listesi olarak içe aktarabilir. MarkupCraft **BCF 2.1** biçimini yazar.

## Bir dosya oluşturma

1. {{ui:İşaretlemeler}} sekmesini açın.
2. Listeyi göndermek istediğiniz şeye göre filtreleyin; örneğin {{ui:Durum}} "Açık". Yalnızca listelenen işaretlemeler dışa aktarılır.
3. {{ui:BCF}} seçeneğini seçin.
4. Her işaretlemenin anlık görüntüsü alınırken bekleyin ("BCF için anlık görüntüler hazırlanıyor (20 içinden 5)…").

Sonuç: "<name> markups.bcfzip" dosyası indirilir ve durum çubuğu kaç konu içerdiğini ve dosya boyutunu gösterir.

## İçindekiler

Her işaretleme bir **konu** olur:

| Konu alanı | Doldurulan |
|---|---|
| Başlık | Eksik iş numarası, konu ve sayfa; örneğin "#4 A-101 üzerinde bulut — Kat planı" |
| Tür | İşaretleme türü (Bulut, Çağrı, Uzunluk…) |
| Durum | Açık, Kabul edildi, Reddedildi veya Tamamlandı |
| Etiketler | İşaretleme türü ve sayfa |
| Yazar ve tarihler | İşaretlemenin yazarı, oluşturulma ve değiştirilme tarihleri |
| Atanan, bitiş tarihi | Varsa eksik iş kaleminden |
| Açıklama | Metni veya damga ifadesi, ölçülen değer, yorum, sayfa ve dosya |
| Yorumlar | Her yanıt için bir, yazar ve tarihle |
| Anlık görüntü | İşaretlemenin sayfadaki yerinin bir resmi |
| Görünüm noktası | İşaretlemenin sayfadaki yerinin üstten görünümü |

Aynı işaretlemeyi yeniden dışa aktarmak aynı konu kimliğini verir; böylece BCF içe aktaran bir araç bunu aynı sorun olarak tanıyabilir.

## İçe aktarırken geri gelenler

{{ui:BCF içe aktar}} BCF 2.0, 2.1 ve 3.0 dosyalarını okur (resmi buildingSMART 3.0 test dosyalarının 19 tanesinde denendi: her konu okundu, metin içeren üç dosyanın yorumları okundu). Sizin bir işaretlemenizle aynı konu kimliğine sahip bir konu için yeni yorumları yanıt olarak ekler ve yeni durumu alır. Diğer her konu, etiketinin veya dosya adının adını taşıdığı sayfada, yoksa açık sayfada bir nota dönüşür; başlığı, açıklaması, atananı ve bitiş tarihi notun metni, yorumları ise yanıtlar olur.

| BCF konusunda | MarkupCraft'ta |
|---|---|
| Başlık, açıklama, atanan, bitiş tarihi | Notun metni |
| Metinli yorumlar | Yanıtlar |
| Durum Açık, Kabul edildi, Reddedildi, Tamamlandı (Kapalı, Çözüldü, Bitti Tamamlandı sayılır) | İşaretlemenin durumu |
| Yazar ve oluşturulma tarihi | Notun yazarı ve tarihi |
| Kamera konumu | Sayfada bir yer; yalnızca etiket veya dosya adıyla bir sayfaya bağlı konular için |
| Model seçimi, gizli parçalar, kesme düzlemleri, anlık görüntüler | Tutulmaz: bir sayfada bunları gösterecek model yoktur |

## Dikkat edilecek sınırlar

- **Sayfa bir model değildir.** Görünüm noktası, işaretlemenin kâğıt üzerindeki konumunu gösterir ve kâğıt üzerinde metre cinsinden ölçülür. BIM aracını modelde bir yere götürmez. Yeri bulmak için anlık görüntüyü ve sayfa adını kullanın.
- **Durumlar ve türler MarkupCraft'a özgüdür** (Açık, Kabul edildi, Reddedildi, Tamamlandı; Bulut, Çağrı…). BCF'nin izin verdiği üzere dosya bunları bildirir, ancak kendi sabit listeleri olan bir araç bunları eşleyebilir veya yok sayabilir.
- **İçe aktarma model görünümleri değil, yorumları getirir.** {{ui:BCF içe aktar}} dışa aktardığınız işaretlemelere yanıt ve durum ekler, diğer sorunlardan not oluşturur; bir model kamerasını gösteremez. Bkz. [İşaretlemeler listesi ve dışa aktarma](topic:markups-list-and-export#import-bcf).
- Çizim incelemeleri için işaretlemeleri PDF olarak geri göndermek çoğu zaman daha basittir. BCF, çizim yorumlarını bir model koordinasyon iş akışına taşımak içindir.

---
title: BCF temelleri
summary: MarkupCraft'tan yapılan bir BCF dışa aktarımının neleri içerdiği, BIM koordinasyon araçlarıyla nasıl kullanıldığı ve sınırları.
keywords: bcf, bcfzip, BIM işbirliği biçimi, sorunlar, koordinasyon, çakışma, konular, görünüm noktası, anlık görüntü, openbim, buildingsmart, sorunları dışa aktar
from: 446f38c1
---

BCF (BIM Collaboration Format; BIM işbirliği biçimi), BIM araçları arasında sorun aktarmak için açık bir dosya biçimidir. Birçok model koordinasyon ve yazım programı bir `.bcfzip` dosyasını sorun listesi olarak içe aktarabilir. MarkupCraft **BCF 2.1** yazar.

## Bir tane oluşturun

1. {{ui:Markups}} sekmesini açın.
2. Listeyi göndermek istediklerinize göre süzün; örneğin {{ui:Durum}} "Açık". Yalnızca listelenen işaretlemeler dışa aktarılır.
3. {{ui:BCF}} seçin.
4. Her işaretleme için anlık görüntü oluşturulurken bekleyin ("BCF için anlık görüntüler oluşturuluyor (20 işaretlemeden 5'i)…").

Sonuç: "<name> markups.bcfzip" indirilir ve durum çubuğu, içindeki konu sayısını ve dosya boyutunu gösterir.

## İçeriği

Her işaretleme bir **konu** olur:

| Konu alanı | Doldurulan içerik |
|---|---|
| Başlık | Eksik iş numarası, konu ve sayfa; örneğin "#4 A-101 üzerinde Bulut — Kat planı" |
| Tür | İşaretleme türü (Bulut, Çağrı, Uzunluk…) |
| Durum | Açık, Kabul edildi, Reddedildi veya Tamamlandı |
| Etiketler | İşaretleme türü ve sayfa |
| Yazar ve tarihler | İşaretlemenin yazarı, oluşturulma ve değiştirilme tarihleri |
| Atanan kişi, bitiş tarihi | Varsa eksik iş öğesinden |
| Açıklama | Metni veya damga ifadesi, ölçülen değer, yorum, sayfa ve dosya |
| Yorumlar | Her yanıt için bir tane, yazar ve tarihle |
| Anlık görüntü | İşaretlemenin sayfadaki bölümünün resmi |
| Görünüm noktası | İşaretlemenin sayfadaki yerinin yukarıdan görünümü |

Aynı işaretlemeyi yeniden dışa aktarmak aynı konu kimliğini verir; böylece BCF içe aktaran bir araç bunu aynı sorun olarak tanıyabilir.

## Bilinmesi gereken sınırlar

- **Sayfa bir model değildir.** Görünüm noktası, işaretlemenin kâğıt üzerindeki konumunu gösterir ve kâğıt üzerinde metre cinsinden ölçülür. Bir BIM aracını modelde bir yere götürmez. Yeri bulmak için anlık görüntüyü ve sayfa adını kullanın.
- **Durumlar ve türler MarkupCraft'a özgüdür** (Açık, Kabul edildi, Reddedildi, Tamamlandı; Bulut, Çağrı…). BCF'nin izin verdiği gibi dosya bunları bildirir, ancak kendi sabit listeleri olan bir araç bunları eşleyebilir veya yok sayabilir.
- **İçe aktarma model görünümleri değil, yorumları getirir.** {{ui:BCF içe aktar}}, dışa aktardığınız işaretlemelere yanıt ve durum ekler, diğer sorunlar için notlar oluşturur; bir model kamerasını gösteremez. Bkz. [İşaretleme listesi ve dışa aktarma](topic:markups-list-and-export#import-bcf).
- Çizim incelemeleri için işaretlemeleri PDF olarak geri göndermek çoğu zaman daha basittir. BCF, çizim yorumlarını bir model koordinasyon iş akışına aktarmak içindir.

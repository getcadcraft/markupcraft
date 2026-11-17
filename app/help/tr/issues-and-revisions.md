---
title: Sorunlar, revizyonlar ve çizim değişiklik günlüğü
summary: Mimarın modeliyle tek bir sorun geçmişi tutun: sorunları içe aktarın, bir sorun karşısında şantiye talimatlarını, imalat çizimlerini ve bağlı modelleri kaydedin ve çizim değişiklik günlüğünü okuyun.
keywords: sorun, revizyon, revizyonlar, değişiklik günlüğü, çizim değişiklik günlüğü, çizim kaydı, şantiye talimatı, imalat çizimi, bağlı model, ihale, inşaat, sorun geçmişi, revizyon bulutu, bulut, işaretleme takımı
from: e4688f64
---

## Ne yapacaksınız

Ekibin geri kalanıyla aynı sorun geçmişinde çalışın. Hangi sayfaların hangi revizyonla gönderildiğini görün ve sahada olup bitenleri ait oldukları sorunla birlikte tutun.

## Adımlar

1. **Sorunlar ve revizyonlar** bölümünü açın.
2. **Bir sorun geçmişi oku** seçin ve BimCraft ya da başka bir uygulamadan kaydedilmiş `.issues.json` dosyasını seçin. Onun sorunları ve kayıtları sizinkilere eklenir. Hiçbir şey değiştirilmez.
3. Bir şantiye talimatı, bir imalat çizimi, bir işaretleme takımı, bağlı bir model ya da bir not için **Kayıt ekle** seçin. Karşısındaki sorunu ve durumunu seçin. Seçtiğiniz bir dosya adı, boyutu ve SHA-256 ile kaydedilir; dosya olduğu yerde kalır.
4. **Çizim değişiklik günlüğü**, her sayfa için bir satır ve her sorun için bir sütun gösterir. Parantez içindeki bir revizyon, değişmeden yeniden yayımlanmış demektir.
5. **Değişiklik günlüğünü indir (CSV)** sorunları, sayfa tablosunu ve kayıtları kaydeder. **Sorun geçmişini kaydet** diğer uygulamaların okuduğu bir dosya yazar.

## Bilmeniz gerekenler

- **Seçili işaretlemeleri kaydet**, seçtiğiniz işaretlemeleri en son soruna kaydeder. Bir bulut, o sorunun revizyonunda bir revizyon bulutu olarak kaydedilir. Kaydın yanındaki **Göster** seçeneğini seçerek ona gidin.
- **Sorun kaydet** işaretlediğiniz sayfaları yayımlar. **Şundan beri değişiklikler** daha sonra hangi sayfaların işaretlendiğini gösterir.
- Sorun geçmişi, işaretlenmiş PDF'in içinde saklanır. Geri al işleminin kapsamında değildir.
- Aynı dosyayı iki kez okumak hiçbir şeyi iki kez eklemez. İki kopya aynı kaydı tuttuğunda, daha yeni olan tutulur.

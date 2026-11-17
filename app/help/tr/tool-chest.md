---
title: Araç sandığı
summary: Stilli bir işaretlemeyi yeniden kullanılabilir bir araç olarak kaydedin, onunla çizin ve sandığınızı dosya olarak ofisle paylaşın.
keywords: araç sandığı, araçlar, araç seti, özel araçlar, kaydedilmiş işaretlemeler, sık kullanılanlar, ofis standardı, içe aktar, dışa aktar, paylaş, json
from: 7dfa36e0
---

{{ui:Araçlar}} sekmesi **araç sandığınızı** tutar: görünümleriyle birlikte kaydedilmiş, yeniden çizmeye hazır işaretlemeler. Bir araç; işaretlemenin türünü, rengini, çizgi kalınlığını, dolgusunu, opaklığını, metin boyutunu ve konusunu tutar; ayrıca bir damganın metnini, bir sayımın grup adını ya da bir metin kutusunun veya çağrının başlangıç metnini de tutar.

## Başlangıç araçları

Yeni bir sandıkta altı araç bulunur: "Revizyon bulutu" (kırmızı), "Soru bulutu" (mavi), "Sarı vurgulayıcı", "RFI çağrısı" (mavi, "RFI: " ile başlar), "Saha doğrulaması" (turuncu, "Saha doğrulaması." yazan bir çağrı) ve "Notlarla onaylandı" (bir damga).

## Aracla çizin

1. {{ui:Araçlar}} sekmesini açın.
2. Bir araca tıklayın. Basılı görünür ve eşleşen araç çubuğu aracı açılır.
3. Her zamanki gibi çizin. {{ui:Özellikler}} 'Araç sandığından "<araç>" ile çiziliyor.' yazar.

Açık bir sandık aracı varken, çizimden önce {{ui:Özellikler}} içinde yaptığınız değişiklikler şimdilik o araca uygulanır; kayıtlı aracı ya da normal araç ayarlarınızı değiştirmez. Bir araç çubuğu düğmesini seçmek ya da bir aracın tuşuna basmak, normal araca geri döner.

## Kendi aracınızı kaydedin

1. Bir işaretleme çizin ve istediğiniz gibi biçimlendirin: renk, çizgi, dolgu, konu, damga metni.
2. Onu seçin.
3. {{ui:Araçlar}} sekmesinde {{ui:Seçileni araç olarak kaydet}} ya da {{ui:Özellikler}} içinde {{ui:Araç olarak kaydet}} seçin.
4. Bir {{ui:Araç adı}} yazın ve {{ui:Aracı kaydet}} seçin.

Sonuç: Araç sandığın sonuna eklenir ve {{ui:Araçlar}} sekmesi onu gösterecek şekilde açılır.

## Seçimden yapılan damgalar

Birden çok işaretleme (ya da {{ui:İçerik}} aracıyla sayfa içeriği) seçin ve {{ui:Diğer}} içinde ya da sağ tık menüsünde {{ui:Seçimi damga olarak kaydet…}} seçin. Sandığa, hepsini tutan tek bir damga eklenir ("Damga: 3 işaretleme birlikte"). Ona tıklayın, sonra herhangi bir sayfaya tıklayın: işaretlemeler, sizin adınızla yeni işaretlemeler olarak, tıkladığınız yerin ortasına birlikte yerleşir; sayfa içeriği ise o noktaya sayfanın içine çizilir. Bu damgalar kaydedilir ve sandıktaki her araç gibi onunla birlikte paylaşılır.

## Bir aracı kaldırın

Aracın satırının sonundaki × simgesini, ardından {{ui:Kaldır}} seçin. Aracla daha önce çizilmiş işaretlemeler olduğu gibi kalır.

## Sandığın tutulduğu yer

Sandık **bu tarayıcıda, bu bilgisayarda** saklanır. Başka bir tarayıcının ya da bilgisayarın kendi sandığı vardır (altı varsayılanla başlar); gizli bir pencere kapandığında sandığı unutur; tarayıcı ayarlarında bu sitenin verilerini temizlemek ise sandığı siler.

Tarayıcı saklamazsa (depolama kapalıysa ya da doluysa), durum çubuğu şunu söyler: "Araç sandığı bu tarayıcıda tutulamadı (depolama kapalı veya dolu). Tutmak için dışa aktarın."

:::safari
Safari, uzun süre siteyi kullanmadığınızda bir web sitesinin saklanan verilerini temizleyebilir. Sandığınızı arada bir dışa aktarın ki sonra yeniden içe aktarabilesiniz.
:::

**Sandığınızı yedek olarak dışa aktarın**, özellikle güvendiğiniz araçları oluşturduktan sonra.

## Sandığı ofisinizle paylaşın

1. Araçları bir kez ayarlayın.
2. {{ui:Dışa aktar}} seçin. "MarkupCraft tool chest.json" dosyasını alırsınız.
3. Bu dosyayı ofisin standartlarını tuttuğu yere koyun ya da dolaştırın.
4. Diğer herkes kendi {{ui:Araçlar}} sekmesinde {{ui:İçe aktar}} seçer ve dosyayı seçer.

Sonuç: 12 araç "MarkupCraft tool chest.json" dosyasından içe aktarıldı. Aynı sandıktan gelen araçlar, eski kopyalarının yerini alır; bu yüzden güncellenmiş bir ofis sandığını içe aktarmak bu araçları yeniler, çoğaltmaz; yeni araçlar eklenir. Bir sandık en fazla 500 araç tutar.

MarkupCraft, içe aktarılan dosyadaki her değeri denetler ve kullanamadığı değerleri atlar ("2 atlandı (kullanılamıyor)"). Sandık olmayan dosyalar reddedilir: "Bu dosya bir MarkupCraft araç sandığı değil." ya da "Bu dosya bir araç sandığı değil (JSON biçiminde değil)."

Diğer işaretleme programlarının araç sandığı dosyaları içe aktarılamaz.

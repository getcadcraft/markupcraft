---
title: Sayfa boyutları ve kâğıt adları
summary: Her PDF sayfasının boyutunu milimetre ve inç cinsinden ve kâğıt adını (A, B ve C serileri, ANSI, ARCH) görün; karışık bir takımı boyuta göre gruplayarak farklı sayfaları bulun.
keywords: sayfa boyutu, kâğıt boyutu, kâğıt adı, a0, a1, a2, a3, a4, b serisi, c serisi, ansi, arch, mimari, mm, inç, özel boyut, boyuta göre, farklı boyut, karışık takım, pdf denetle, müşteri, sorun, mediabox, cropbox, döndürme
from: 08e1354f
---

Bir takım müşteriye gönderilmeden önce her sayfanın doğru boyutta olduğunu kontrol edin. {{ui:MarkupCraft}} her sayfanın boyutunu doğrudan PDF'ten okur ve kâğıdın adını belirler.

## Yapacaklarınız

Bir sayfanın boyutuna bakın, ardından tüm takımı boyuta göre gruplayın.

## Adımlar

1. PDF'leri açın ({{ui:Aç}}), ardından hiçbir şey seçili kalmayana kadar {{key:Esc}} tuşuna basın ve {{ui:Seç}} açık olsun.
2. {{ui:Özellikler}} paneline bakın. {{ui:Kâğıt}} adını ve yönünü söyler, örneğin "A4, dikey". {{ui:Boyut}} milimetre ve inç verir.
3. {{ui:Sayfalar}} listesinin her satırında sayfa adının altında bir boyut satırı bulunur.
4. {{ui:Sayfalar}} başlığında {{ui:Boyuta göre}} seçin. Liste sayfaları her boyut için bir başlık altında toplar; en büyük grup en üstte. Yalnızca birkaç sayfası olan bir boyut, ayrık görünen boyut olarak işaretlenir.
5. Takımın kendi sırasına dönmek için {{ui:Boyuta göre}} seçeneğini yeniden seçin.

Sonuç: takımı göndermeden önce, diğerlerinden farklı boyutta bir sayfa kolayca görülür.

## Ad nasıl seçilir

- Boyut, PDF'teki sayfa kutusundan, döndürme uygulanmış olarak alınır; bu nedenle yatay bir A3 hâlâ A3'tür.
- Adlar A ve B serisi (ISO 216), C serisi (ISO 269), ANSI A'dan E'ye ve ARCH A'dan E'ye kadardır.
- Adlandırılmış bir boyuta 2 mm yakın bir sayfa o adı alır. Diğer sayfalar {{ui:özel}} der ve {{ui:En yakın adlandırılmış boyut}} hangi boyuta en yakın olduğunu ve ne kadar uzak olduğunu söyler.
- İnçler gerçek sayfa boyutundan hesaplanır; bu nedenle bir A4 sayfa 8.26 x 11.69 in'dir.

## Kaydettiğiniz dosyalarda

Özet çalışma kitabında ({{ui:İşaretlemeler listesi}}, ardından elektronik tablo) {{ui:Sayfaya göre}} sayfasında bir {{ui:Kâğıt boyutu}} sütunu ve bir {{ui:Sayfa boyutları}} çalışma sayfası bulunur. PDF raporunda her boyutun sayısıyla birlikte bir "Sayfa boyutları" satırı vardır.

:::note
ANSI ve ARCH inç değerleri yayımlanmış tablolardan elle girildi ve basılı standartlarla karşılaştırılmadı. Bunlardan birine yakın bir "özel" sayfayı kendi kontrolünüzle değerlendirin.
:::

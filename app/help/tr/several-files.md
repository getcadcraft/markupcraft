---
title: Birden fazla dosyayla birlikte çalışın
summary: Birçok PDF'yi tek bir küme olarak açın, dosyalar arasında sayfa bulun, işaretlemeleri dosyalar arasında kopyalayın ve her dosyanın kopyasını kaydedin.
keywords: birden fazla dosya, çoklu pdf, plan takımı, küme, toplu, birçok dosya, birleştir, disiplinler, mimari yapısal mekanik, tümünü kaydet, kapat
from: f59354ae
---

Bir plan takımı genellikle her disiplin için bir PDF veya her sayfa için bir PDF olarak gelir. MarkupCraft açtığınız her şeyi **tek bir küme** olarak ele alır.

## Birlikte açın

Dosya seçicide tüm PDF'leri aynı anda seçin veya hepsini sayfa alanına bırakın. Daha sonra daha fazla eklemek için aynı şekilde açın; açtığınız sırayla {{ui:Sayfalar}} listesinin sonuna eklenirler.

Sonuç: "6 dosya açıldı (kümede 84 sayfa)." Her sayfa bir sayfadır. Sayfa numarası olan sayfalar adlarının altında "Sayfa A-101" gösterir; diğerleri dosyayı ve sayfayı gösterir.

Kaydedilmiş bir "küme" dosyası yoktur: bir dahaki sefere aynı PDF'leri yeniden açın (kaydettiyseniz "(marked up)" kopyalarını).

## Tüm küme boyunca

- **Sayfa bulun:** {{ui:Sayfalarda ara}} her dosyanın sayfa numaralarında, sayfa adlarında ve dosya adlarında arar. {{key:PageUp}} ve {{key:PageDown}} tüm dosyaların tüm sayfalarında sırayla gezinir.
- **İşaretlemeler listesi:** {{ui:İşaretlemeler}} sekmesi her dosyadaki işaretlemeleri listeler. Daraltmak için {{ui:Sayfa}} ile süzün. CSV'de bir Dosya sütunu vardır.
- **Eksik iş listesi:** tüm küme için tek bir numaralandırma.
- **Karşılaştır:** eski ve yeni sayfa farklı dosyalardan gelebilir.
- **Kopyala ve yapıştır:** bir sayfada {{key:Mod+C}}, başka bir sayfada {{key:Mod+V}}, herhangi bir dosyada. Kopya, sayfada aynı yere, hafifçe kaydırılmış olarak yerleşir.

## Kaydet

{{ui:Kaydet}} seçeneğini belirleyin. Birden fazla dosya açıkken MarkupCraft sorar:

- {{ui:Bu dosya}}: üzerinde bulunduğunuz sayfanın dosyasının işaretlenmiş bir kopyası.
- {{ui:Değişen her dosya}}: kaydedilmemiş değişiklikleri olan her dosyanın bir kopyası. Her biri ayrı ayrı "<file name> (marked up).pdf" olarak indirilir.
- {{ui:İptal}}

:::chromium
Birden fazla dosyayı aynı anda ilk kez kaydettiğinizde, Chrome ve Edge bu sitenin birden fazla dosya indirmesine izin verilip verilmeyeceğini sorabilir. {{ui:İzin ver}} seçeneğini belirleyin; aksi hâlde yalnızca ilk kopya gelir.
:::

:::safari
Safari her dosya için bir kez sorabilir. iPad'de her kopya Dosyalar uygulamasına gider.
:::

İşaretlemeleri kaydedilen bir dosya artık değişmiş sayılmaz; diğerleri hâlâ öyledir.

CSV, BCF ve eksik iş listesi dışa aktarımları, açtığınız ilk dosyanın adını taşır.

## Kapat

{{ui:Kapat}} tüm kümeyi kapatır; yalnızca tek bir dosyayı kapatmanın yolu henüz yoktur. Kaydedilmemiş bir şey varsa sorar:

- {{ui:İptal}}: hiçbir şey olmaz.
- {{ui:Kaydetmeden kapat}}: kaydedilmemiş işaretlemeler kaybolur.
- {{ui:Önce kopyaları kaydet}}: değişen her dosyayı kaydeder, sonra kapatır.

Kapatmak geri alma geçmişini de temizler.

## Büyük kümeler

- Sayfa numaralarını bulmak için açılışta her sayfanın metni okunur; bu nedenle 100 sayfalık bir küme biraz zaman alır. Durum çubuğu ilerledikçe sayfaları sayar.
- Listedeki sayfa resimleri, onlara kaydırdıkça çizilir.
- Açık her PDF tarayıcı sekmesinin belleğinde tutulur. Sekme yavaşlarsa diğer ağır sekmeleri kapatın veya bir seferde bir disiplini gözden geçirin.
- Aynı dosyayı iki kez açmak, sayfalarının iki kopyasını verir. Bu olursa {{ui:Kapat}} seçeneğini belirleyin ve kümeyi yeniden açın.

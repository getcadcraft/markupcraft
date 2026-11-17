---
title: İşaretlenmiş PDF'yi kaydedin
summary: Her işaretlemeyi standart PDF açıklamaları olarak yazan bir kopyayı indirin, diğer PDF okuyucuların neyi gördüğünü kontrol edin ve daha sonra üzerinde çalışmaya devam edin.
keywords: kaydet, indir, pdf dışa aktar, işaretlenmiş, ek açıklamalar, yorumlar, paylaş, gönder, sorun, çalışmaya devam et, yeniden aç, gidiş dönüş, yazdır
from: 4c198ebe
---

## Kaydet

1. Araç çubuğunda {{ui:Kaydet}} öğesini seçin veya {{key:Mod+S}} tuşlarına basın.
2. Birden fazla dosya açıksa {{ui:Bu dosya}} (üzerinde bulunduğunuz sayfanın dosyası) veya {{ui:Değişen her dosya}} seçeneğini belirleyin. Her kopya ayrı ayrı indirilir.
3. "<file> kaydediliyor…" yazısı bitene kadar bekleyin. Bir oturumdaki ilk kayıt, PDF yazıcısını da yükler.

Sonuç: tarayıcınız "<name> (marked up).pdf" dosyasını indirir ve durum çubuğu bunu bildirir: 'A-Plans (marked up).pdf kaydedildi (24 işaretleme, 18.2 MB). Özgün dosya değişmedi.' {{ui:Kaydet}} yanındaki nokta kaybolur.

**Özgün PDF dosyanız hiçbir zaman değiştirilmez.** MarkupCraft yeni bir dosya yazar. Dosyanın nereye ineceği tarayıcınızın indirme ayarlarına bağlıdır (bkz. [MarkupCraft'ın açtığı ve kaydettiği dosyalar](topic:files#where-downloads-go)).

## Daha sonra üzerinde çalışmaya devam edin

Bir dahaki sefere özgün dosya yerine "(marked up)" kopyasını açın. Her şey yeniden düzenlenebilir hâle gelir: işaretlemeler, durumlar, yanıtlar, eksik iş maddeleri, her sayfanın ölçeği ve yazdığınız sayfa adları. Yeniden kaydettiğinizde aynı "(marked up)" adına sahip bir dosya indirilir; eski indirme klasörde hâlâ duruyorsa tarayıcınız "(1)" gibi bir numara ekleyebilir. Eski kopyaları kendiniz değiştirin veya düzenleyin.

MarkupCraft PDF'yi kendiliğinden kaydetmez. Çalışırken bu tarayıcıda bir kurtarma kopyası tutar; böylece tarayıcı çökse veya sekme kapansa bile işaretlemeleriniz kaybolmaz: MarkupCraft'ı bir sonraki açışınızda "Çalışmanızı kurtarın?" diye sorar. Bkz. [Çalışmanızı kurtarın](common:recover). Yine de kapatmadan önce kaydedin; kaydedilmemiş işaretlemelerle çıkmaya çalışırsanız tarayıcı önce "Siteden ayrılınsın mı?" diye sorar (iPad Safari sormaz).

## Diğer PDF okuyucuların gördükleri

Her işaretleme, kendi çiziğiyle birlikte standart bir PDF açıklaması (ek not) olarak yazılır; bu nedenle her PDF görüntüleyici onu gösterir, yazdırır ve açıklamalar panelinde listeler:

- **Görünüm aynıdır**, MarkupCraft'taki gibi: kıvrımlı kenarlı bulutlar, ok uçları, damgalar, sayım noktaları, eksik iş numarası rozetleri, ölçü etiketleri.
- **Ayrıntılar standarttır:** yazar, tarih, konu, açıklama metni ve renkler.
- **Bulutlar** kenarı bulutlu dikdörtgen veya çokgen açıklamalardır; **metin kutuları** ve **çağrılar** metin kutusu açıklamalarıdır; **notlar** yapışkan notlardır; **kalem** ve **vurgulayıcı** çizgileri mürekkeptir; **damgalar** damga açıklamalarıdır.
- **Uzunluklar ve alanlar** ölçüm açıklamalarıdır; kalibre edilmiş her sayfa ölçeğini de taşır, böylece ölçümleri anlayan görüntüleyiciler değerleri gösterebilir.
- **Yanıtlar** açıklamaya verilen yanıtlardır, **durumlar** ise inceleme durumlarıdır (Açık, durum yokmuş gibi görünür).
- **Yazdığınız sayfa numaraları**, diğer görüntüleyicilerin gösterdiği sayfa etiketleri olur.

Yalnızca MarkupCraft'ın geri okuduğu birkaç şey vardır: eksik iş maddesinin atanan kişisi ve son tarihi, madde durumu ve bazı stil ayrıntıları. Diğer programlar, açıklamayı yeniden yazmadıkça bunları korur.

Başka bir programda açıklamalar diğerleri gibi taşınabilir veya düzenlenebilir. Biri bunu yapıp dosyayı geri gönderirse, MarkupCraft dosyayı açarken açıklamanın yeni konumunu kullanır.

Tüm ayrıntılar: [PDF'de neler kaydedilir](topic:what-the-pdf-keeps).

## Yazdırıldığında "?" görünen karakterler

İşaretleme metni, her PDF görüntüleyicide bulunan standart Helvetica yazı tipiyle yazılır. Bu yazı tipi İngilizce ve Batı Avrupa harflerini (é, ñ, ü, ø ve benzerlerini) kapsar; diğer yazı sistemlerini, bu kümenin dışındaki simgeleri veya emojileri kapsamaz. Bu karakterler MarkupCraft'ta düzgün görünür, ama kaydedilen kopyada "?" olarak yazdırılır. Kaydetme iletisi bunları sayar: "Kopyada Batı Avrupa kümesi dışındaki 3 karakter "?" olarak yazdırılır." Bu tür kelimeleri yazıyla yazın veya düz bir karşılık kullanın (örneğin çap simgesi yerine "çap").

## Kaydedilemeyen dosyalar

- **Korumalı PDF'ler:** "Bu PDF korumalı (şifrelenmiş) olduğu için işaretlenmiş bir kopya yazılamaz. Korumasız bir kopya isteyin." Yine de ekranda inceleyebilir, CSV ve BCF dosyalarını dışa aktarabilirsiniz.
- Kayıt başka bir nedenle başarısız olursa, "<file> kaydedilemedi" adlı bir kutu nedeni gösterir. İşaretlemeleriniz hâlâ sekmededir; sekmeyi kapatana kadar hiçbir şey kaybolmaz.

## Düzleştirme ve yazdırma

Düzleştirme (işaretlemeleri sayfaya işleme) ve yazdırma komutu henüz yapılmadı. Yazdırmak için kaydedilen kopyayı herhangi bir PDF görüntüleyicide açın ve açıklamalar gösterilirken yazdırın.

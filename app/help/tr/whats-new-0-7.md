---
title: 0.7 sürümündeki yenilikler (önceki)
summary: Saha sekmesinde yeni RFI'lar, onay dosyaları ve günlük raporlar; son tarihleri olan, geciken kayıtları kırmızıyla gösteren, CSV ve BCF, çevrimdışı çalışma ve Birleştir; durum ayarlayan, yanıtlayan ve listeyi dışa aktaran asistanlar; Ayarlar'ı izleyen birim listeleri; kendini toplayan paneller ve taşınabilen iletişim kutuları.
keywords: 0.7 yenilikleri, önceki sürüm, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, saha, saha kayıtları, rfi, bilgi isteği, onay dosyası, günlük rapor, şantiye günlüğü, gecikmiş, son tarih, bana atananlar, iğne, birleştir, çevrimdışı, tablet, bcf, csv, asistan, mcp, işaretleme durumu, yanıt, dışa aktar, birimler, birim listeleri, yıldız, kalibre et, sıkı, paneller, iletişim kutuları, portekizce
from: ca5ba1f0
---

Bu, MarkupCraft 0.6 ile karşılaştırıldığında 0.7 sürümünde neyin değiştiğidir. En büyük yenilik, işaretlemelerinizin yanında PDF'in içinde tutulan saha kayıtlarıdır: RFI'lar, onay dosyaları ve günlük raporlar.

## Yeni

### RFI'lar, onay dosyaları ve günlük raporlar

- **Saha sekmesi.** {{ui:Saha}} sekmesini açın ve {{ui:RFI}}, {{ui:Onay dosyası}} ya da {{ui:Günlük rapor}} seçin. Bir RFI ya da onay dosyasının ait olduğu sayfaya dokunun ya da tıklayın; bir iğne yeri işaretler. Günlük rapor iğne olmadan açık sayfaya eklenir ({{ui:İğne yerleştir}} sonradan bir tane ekler, {{ui:İğneyi taşı}} herhangi bir iğneyi taşır). Her kaydın kendi numarası (RFI-0001, SUB-0001, LOG-0001), bir başlığı, metni, bir durumu, bir atanan kişisi, bir son tarihi, bir yanıt konusu ve bir ek adları listesi vardır. Bkz. [RFI'ları, onay dosyalarını ve günlük raporları izleyin](topic:field-records).
- **Gecikenleri görün.** Listeyi tür, durum, son tarih (gecikmiş, 7 gün içinde, son tarihi var ya da yok), bu sayfa ya da tüm sayfalar, metin araması veya {{ui:Bana atananlar}} ile süzün. Son tarihi geçmiş ve hâlâ bekleyen bir kayıt, listede ve iğnesinde kırmızıyla **Gecikmiş** olarak işaretlenir. Bkz. [Önemli olanı bulun](topic:field-records#find-what-matters).
- **CSV ve BCF.** {{ui:CSV}} listelenen kayıtları bir elektronik tabloya yazar; {{ui:BCF}} ise bunları her biri sayfadaki yerinin bir görüntüsüyle birlikte BCF konusu olarak yazar. İkisi de süzgeçleri izler. Bkz. [Dışa aktarma](topic:field-records#export).
- **Çevrimdışı, ve iki kopya tek kopyaya dönüşür.** Kayıtlar PDF'in içine kaydedilir ve ağ gerektirmez; böylece sahadaki bir tablet bunları ekleyebilir, yanıtlayabilir ve kaydedebilir. Ofise döndüğünüzde {{ui:Birleştir}}, aynı PDF'in başka bir kopyasının kayıtlarını kimlikleri üzerinden tek bir geri alma adımı olarak birleştirir. Bkz. [Kaydetme, çevrimdışı çalışma ve kopyaları birleştirme](topic:field-records#save-offline-and-merging-copies).

### Yapay zekâ asistanları

- **Bir asistanın yapabilecekleri arttı.** CadCraft Studio üzerinden bağlanan kendi asistanınız artık bir işaretlemenin durumunu ayarlayabilir (`markup_status`, yanıt konusunda kaydedilir), bir konuda yanıt verebilir (`markup_reply`) ve {{ui:İşaretlemeler}} listesini CSV ya da BCF olarak dışa aktarabilir (`markups_export`; liste, süzgeçleriyle birlikte gösterdiği içeriği). Her değişiklik tek bir geri alma adımıdır ve asistanın adıyla imzalanır. Bkz. [Bir asistandan neler isteyebilir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} bölümünde uzunluk, alan, hacim, açı ve eğim için birer liste vardır; birimlerin tanımlarının verdiği tam büyüklüklerle (ABD arazi ayağı kendi başına bir birimdir). Hiç kullanmadığınız birimleri kapatın, birim listelerinden çıkarlar; birini yıldızlayın, yeni işler o birimle başlar. Bir dosya her zaman kendi birimini korur. MarkupCraft'ta {{ui:Ayarlar}} › {{ui:MarkupCraft}} altındaki ölçme ve konum birimleri ile kalibre iletişim kutusundaki birim, açma/kapama düğmelerini izler; yıldız, MarkupCraft'ın kendi ayarlarını kaydedene kadar ölçme birimini belirler; kalibre ederken yazdığınız gerçek mesafe herhangi bir birimin işaretini taşıyabilir, örneğin `3 yd` ya da `1.5 km`. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha sıkı bir düzen ve kendini toplayan paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha fazla sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her kenar panelinin ince bir başlık çubuğu vardır: paneli yerleştirmek ya da yüzdürmek için sürükleyin, bir sekme olarak tek çerçevede paylaşmak için başka bir panelin çubuğuna bırakın, kenara kayması için sabitleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleyin](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan sürükleyerek çizimin önünden çekin; bıraktığınız yere geri döner. Ortalamak için başlık çubuğuna çift tıklayın. Bkz. [İletişim kutusunu taşıyın](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on örnek istek (bir çizimi düzenleme, bir takımı çıktı alma, çizimleri denetleme, bir modele sorular sorma, bir metrajın toplamını alma, bir parça varyantı deneme…); her biri çağırdığı araçlar ve ihtiyaç duyduğu izinlerle birlikte, ve her biri testlerimizle yeniden oynatılır. Uygulamalar yapay zekâ içermez. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)**, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} bölümünde yenidir. **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** da artık uygulamaların her sözcüğüne sahiptir; ana dili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio**, güncelleme denetiminin neden başarısız olduğunu söyler (sisteminiz için henüz dosya yok, ağ yok, hatalı imza) yalnızca "Bitti" demek yerine; ve daha yeni bir sürüm çıkana kadar kapattığınız bir Yenilikler kartını geri getirmeyi bırakır.

## Bu sürümde henüz olmayanlar

- **0.7 kod imzalı değildir.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz tamamlanmadığı için 0.8'e taşındı. Her dosyanın yanındaki SHA-256 değerini getcadcraft.com/download adresinden kontrol edin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Diğer bilgiler}} seçin, ardından {{ui:Yine de çalıştır}}. Mac'te ilk kez, CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. CadCraft Studio henüz bir uygulama mağazasında değildir ve henüz bir iPad ya da iPhone sürümü yoktur.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ancak henüz hiçbir kutu bunları okumaz.
- Saha kayıtları bir CadCraft Studio canlı oturumunda paylaşılmaz (canlı oturumlar yalnızca işaretlemeleri taşır); kopyaları {{ui:Birleştir}} ile bir araya getirin.
- Birleştir, bir kaydı en son değiştirilen kopyadan bütün olarak alır: iki kişi aynı kaydın farklı alanlarını değiştirdiyse, daha sonraki kopyanın alanları geçerli olur. Yanıt konuları ve ek adları birleştirilir.
- Ekler yalnızca adlardır; dosyalar bulundukları yerde kalır. Kayıtlar için ekip, bildirim ya da bulut projesi yoktur ve asistanların kayıtlar için henüz araçları yoktur.
- Saha kayıtları, ağ kesik olarak telefon ve tablet boyutlarındaki bir tarayıcıda test edildi, ama henüz gerçek bir tablette elle denenmedi.
- 0.6'dan hâlâ kalanlar: sayfa nesnelerini herhangi bir açıya çevirmek, sayfanın içine doğrudan yeni şekiller çizmek, bir çizginin yazı tipini ya da boyutunu değiştirmek ve birkaç satıra yayılan metin. Sayfa düzenlemeleri içeren kaydedilmiş bir kopya henüz Acrobat'ta açılmadı.
- 0.5'ten hâlâ kalanlar: bir sayfa değişikliğini geri almak (boş bir sayfa eklemek gibi), taranmış sayfalardan metin okumak ve kendi ağınızın ötesindeki canlı oturumlar.

Diğer her şey [Henüz yapılmayanlar](topic:not-built-yet) bölümündedir.

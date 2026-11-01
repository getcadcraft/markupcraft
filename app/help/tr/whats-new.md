---
title: 0.7'deki yenilikler
summary: Yeni Saha sekmesinde RFI'lar, onay dosyaları ve günlük raporlar; bitiş tarihleri, gecikenler kırmızıyla, CSV ve BCF, çevrimdışı çalışma ve Birleştir; durum belirleyen, yanıtlayan ve listeyi dışa aktaran asistanlar; Ayarlar'ı izleyen birim listeleri; yana çekilen paneller ve taşınan iletişim kutuları.
keywords: yenilikler, yenilikler nedir, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, saha, saha kayıtları, rfi, bilgi talebi, onay dosyası, günlük rapor, şantiye defteri, gecikmiş, bitiş tarihi, bana atananlar, iğne, birleştir, çevrimdışı, tablet, bcf, csv, asistan, mcp, işaretleme durumu, yanıt, dışa aktarma, birimler, birim listeleri, yıldız, kalibre et, sıkı, paneller, iletişim kutuları, portekizce
from: 142e1a1e
---

Bu, MarkupCraft 0.7'de 0.6'ya göre nelerin değiştiğidir. Büyük yenilik saha kayıtlarıdır: PDF'in içinde, işaretlemelerinizin yanında tutulan RFI'lar, onay dosyaları ve günlük raporlar.

## Yeni

### RFI'lar, onay dosyaları ve günlük raporlar

- **Saha sekmesi.** {{ui:Saha}} sekmesini açın ve {{ui:RFI}}, {{ui:Onay dosyası}} veya {{ui:Günlük rapor}} seçeneğini seçin. Bir RFI veya onay dosyasının ait olduğu yere sayfada dokunun veya tıklayın; yeri bir iğne gösterir. Günlük rapor, iğnesiz olarak açık sayfaya konur (sonradan {{ui:İğne yerleştir}} ile eklenir, {{ui:İğneyi taşı}} herhangi bir iğneyi taşır). Her kaydın kendi numarası (RFI-0001, SUB-0001, LOG-0001), bir başlığı, metni, durumu, atanan kişisi, bitiş tarihi, yanıt dizisi ve ek adları listesi vardır. Bkz. [RFI'ları, onay dosyalarını ve günlük raporları izleme](topic:field-records).
- **Geciken işleri görün.** Listeyi türe, duruma, bitiş tarihine (gecikmiş, 7 gün içinde bitecek, bitiş tarihi olan veya olmayan), bu sayfaya veya tüm sayfalara, metin aramasına ya da {{ui:Bana atananlar}} seçeneğine göre süzün. Bitiş tarihi geçmiş ve hâlâ bekleyen bir kayıt, listede ve iğnesinde kırmızıyla **Gecikmiş** olarak işaretlenir. Bkz. [Önemli olanı bulma](topic:field-records#find-what-matters).
- **CSV ve BCF.** {{ui:CSV}} listelenen kayıtları e-tablo olarak yazar; {{ui:BCF}} bunları, her biri sayfadaki yerinin anlık görüntüsüyle birlikte BCF konuları olarak yazar. İkisi de süzgeçleri izler. Bkz. [Dışa aktarma](topic:field-records#export).
- **Çevrimdışı ve iki kopyanın bire indirilmesi.** Kayıtlar PDF'in içine kaydedilir ve ağ gerektirmez; böylece sahadaki bir tablet kayıt ekleyebilir, yanıtlayabilir ve kaydedebilir. Ofise dönünce {{ui:Birleştir}}, aynı PDF'in başka bir kopyasının kayıtlarını kimliklerine göre, tek bir geri alma adımı olarak katar. Bkz. [Kaydetme, çevrimdışı çalışma ve kopyaları birleştirme](topic:field-records#save-offline-and-merging-copies).

### Yapay zekâ asistanları

- **Bir asistanın yapabilecekleri arttı.** CadCraft Studio üzerinden bağlanan kendi asistanınız artık bir işaretlemenin durumunu belirleyebilir (`markup_status`, dizisine kaydedilir), bir dizide yanıt verebilir (`markup_reply`) ve {{ui:İşaretlemeler}} listesini CSV veya BCF olarak dışa aktarabilir (`markups_export`, liste süzgeçleriyle neyi gösteriyorsa o). Her değişiklik tek bir geri alma adımıdır ve asistanın adıyla imzalanır. Bkz. [Bir asistan neler isteyebilir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde uzunluk, alan, hacim, açı ve eğim için birer liste vardır; boyutlar birimlerin tanımlarının verdiği kesin değerlerdir (ABD survey ayağı ayrı bir birimdir). Hiç kullanmadığınız birimleri kapatın, birim listelerinden çıkarlar; birine yıldız koyun, yeni işler onunla başlar. Bir dosya her zaman kendi birimini korur. MarkupCraft'ta {{ui:Ayarlar}} › {{ui:MarkupCraft}} içindeki ölçüm ve konum birimleri ile kalibre etme iletişim kutusundaki birim anahtarları izler; yıldız, MarkupCraft'ın kendi ayarlarını kaydedene kadar ölçüm birimini belirler; kalibre ederken yazdığınız gerçek uzaklık da `3 yd` veya `1.5 km` gibi herhangi bir birimin işaretini taşıyabilir. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha sıkı bir düzen ve yana çekilen paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha çok şey sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: paneli yerleştirmek veya yüzdürmek için sürükleyin, sekme olarak tek çerçeveyi paylaşmak için başka bir panelin çubuğuna bırakın, kenara kayıp gizlenmesi için iğneleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleme](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan tutup çizimin önünden çekin; bıraktığınız yere geri gelir. Yeniden ortalamak için başlık çubuğuna çift tıklayın. Bkz. [İletişim kutusunu taşıma](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on uygulamalı istek (bir çizimi düzenleme, bir takımı yazdırma, çizimleri denetleme, bir modele soru sorma, bir metrajı toplama, bir parça varyantını deneme…); her biri çağırdığı araçlar ve gereken izinlerle birlikte ve her biri testlerimizce yeniden oynatılmıştır. Uygulamalarda yapay zekâ yoktur. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde **Português (Portugal)** yenidir. O, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahiptir; anadili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio**, bir güncelleme denetimi başarısız olduğunda yalnızca "Bitti" demek yerine nedenini söyler (sisteminiz için henüz dosya yok, ağ yok, geçersiz imza) ve kapattığınız bir Yenilikler kartını daha yeni bir sürüm çıkana kadar geri getirmez.

## Bu sürümde henüz yok

- **0.7 kod imzalı değildir.** Sertifika doğrulaması henüz sonuçlanmadığı için imzalama ve Microsoft Store paketi 0.8'e kaydı. getcadcraft.com/download adresinde her dosyanın yanındaki SHA-256 değerini denetleyin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Ek bilgi}}, ardından {{ui:Yine de çalıştır}} seçeneğini seçin. Mac'te ilk seferde CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçeneğini seçin. CadCraft Studio henüz bir uygulama mağazasında değildir ve iPad veya iPhone sürümü henüz yoktur.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu onları okumaz.
- Saha kayıtları bir CadCraft Studio canlı oturumunda paylaşılmaz (canlı oturumlar yalnızca işaretlemeleri taşır); kopyaları {{ui:Birleştir}} ile bir araya getirin.
- Birleştir bir kaydı bir bütün olarak en son değişen kopyadan alır: iki kişi aynı kaydın farklı alanlarını değiştirdiyse sonraki kopyanın alanları geçerli olur. Diziler ve ek adları birleştirilir.
- Ekler yalnızca addır; dosyalar bulundukları yerde kalır. Kayıtlar için ekip, bildirim veya bulut projesi yoktur ve asistanların henüz kayıtlar için araçları yoktur.
- Saha kayıtları, ağ kesilmiş hâlde telefon ve tablet boyutlarındaki bir tarayıcıda test edildi, ama henüz gerçek bir tablette elle denenmedi.
- 0.6'dan hâlâ: sayfa nesnelerini herhangi bir açıyla döndürme, doğrudan sayfaya yeni şekiller çizme, bir satırın yazı tipini veya boyutunu değiştirme ve birkaç satıra yayılan metin. Sayfa düzenlemeleri olan kaydedilmiş bir kopya henüz Acrobat'ta açılmadı.
- 0.5'ten hâlâ: bir sayfa değişikliğini (boş sayfa eklemek gibi) geri alma, taranmış sayfalardan metin okuma ve kendi ağınızın ötesindeki canlı oturumlar.

Geri kalan her şey [Henüz yapılmadı](topic:not-built-yet) konusunda.

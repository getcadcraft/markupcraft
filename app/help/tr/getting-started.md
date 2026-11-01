---
title: MarkupCraft'a başlangıç
summary: Bir plan takımı açın, bir sayfaya ilk bulutunuzu ve ilk çağrınızı koyun ve işaretli bir kopya kaydedin.
keywords: başlangıç, ilk adımlar, pdf aç, inceleme, işaretleme, redline, kırmızı kalem, plan takımı, öğretici, hızlı başlangıç
from: 0b1aae4e
---

MarkupCraft çizimleri incelemek içindir: PDF plan takımlarını açar, bulutlar, çağrılar, metin, damgalar ve ölçümlerle işaretler, her yorumun durumunu izler ve PDF'in herhangi bir PDF görüntüleyicinin gösterebileceği bir kopyasını kaydedersiniz.

Web tarayıcınızda çalışır. PDF'leriniz kendi bilgisayarınızda açılır ve **asla yüklenmez**. Kaydetme yeni bir kopya indirir; özgün dosyanız değişmez.

:::note
MarkupCraft geliştirme aşamasındadır. Yardım, çalıştırdığınız sürümü anlatır. Henüz yapamadıkları [Henüz yapılmadı](topic:not-built-yet) konusunda listelenir.
:::

## Neye ihtiyacınız var

- Mac, Windows veya Linux bilgisayarda güncel bir Chrome, Edge, Firefox veya Safari ya da iPad'de Safari veya Chrome. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).
- Bir veya daha fazla PDF dosyası. Bütün bir plan takımı tek PDF de olabilir, çok sayıda PDF de.
- Tekerlekli fare en rahatıdır. Dokunmatik yüzey de çalışır, dokunmatik ekran da (bkz. [iPad veya dokunmatik ekranda inceleme](topic:review-on-a-tablet)).

## On adımda ilk incelemeniz

1. MarkupCraft'ı tarayıcınızda açın. Ekranın ortasında "Bir plan takımı açın" yazar.
2. {{ui:PDF'leri aç}} seçeneğini seçin (veya araç çubuğunun sol ucundaki {{ui:Aç}} düğmesini ya da {{key:Mod+O}} tuşlarını kullanın), bir veya daha fazla PDF seçin ve onaylayın.
   PDF'leri {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticiniz}} içinden sürükleyip sayfa alanına da bırakabilirsiniz.
   İlk seferde alttaki durum çubuğunda "PDF okuyucusu yükleniyor…" yazar. Sonra her sayfa, soldaki {{ui:Sayfalar}} listesinde bir sayfa olur ve ilk sayfa ortayı doldurur.
3. Göstermek için listeden bir sayfaya tıklayın. İşaretçinin bulunduğu yere yakınlaşmak için fare tekerleğini sayfa üzerinde çevirin.
4. Araç çubuğunun {{ui:Revize et}} grubunda {{ui:Bulut}} seçeneğini seçin (veya {{key:C}} tuşuna basın).
   İlk kez bir çizim aracı seçtiğinizde MarkupCraft adınızı sorar. Yazın ve {{ui:Kaydet}} seçeneğini seçin. Her işaretleme bunu kaydeder. (Ayrıntılar [Yazar adınızı belirleme](topic:set-your-name) konusunda.)
5. İşaretlemek istediğiniz alanın çevresine bir kutu sürükleyin. Kırmızı bir revizyon bulutu görünür ve seçilidir.
6. {{ui:Açıklama ekle}} grubunda {{ui:Çağrı}} seçeneğini seçin (veya {{key:K}} tuşuna basın). İşaret ettiğiniz şeye basın, metnin gideceği yere sürükleyin ve bırakın.
7. Görünen kutuya yorumunuzu yazın. Bitirmek için kutunun dışında herhangi bir yere tıklayın (veya {{key:Mod+Enter}} tuşlarına basın).
8. {{key:Esc}} tuşuna iki kez basın: bir kez seçimi kaldırmak, bir kez de {{ui:Seç}} aracına dönmek için. Buluta tıklayın. Sağdaki {{ui:Özellikler}} sekmesi onu kimin, ne zaman yaptığını ve {{ui:Durum}} değerini gösterir.
9. Araç çubuğunda {{ui:Kaydet}} seçeneğini seçin (veya {{key:Mod+S}} tuşlarına basın).
   Tarayıcınız "A-Plans (marked up).pdf" gibi adlı bir kopya indirir. Durum çubuğu kaç işaretlemenin yazıldığını söyler.
10. Denetlemek için bu kopyayı herhangi bir PDF görüntüleyicide açın: bulut ve çağrı, üzerinde adınız olan normal PDF yorumları olarak oradadır.

Daha sonra çalışmaya devam etmek için "(marked up)" kopyasını MarkupCraft'ta açın. İşaretlemeleriniz durumları, yanıtları ve eksik iş numaralarıyla düzenlenebilir olarak geri gelir.

## Çevrimiçi ve çevrimdışı

:::online
Çevrimiçisiniz. MarkupCraft, PDF okuyucusunu bir PDF'i ilk açışınızda, PDF yazıcısını ilk kaydedişinizde yükler. Daha sonra bağlantı olmadan çalışabilmek için (bir saha ziyaretinde, uçakta) şimdi üstteki çubukta {{ui:Çevrimdışı için kaydet}} seçeneğini seçin ve "Çevrimdışı hazır" yazmasını bekleyin. Kopya PDF okuyucusunu ve yazıcısını içerir; böylece PDF açma ve kaydetme çevrimdışı çalışır. Bkz. [Çevrimdışı çalışma](common:offline).
:::

:::offline
Çevrimdışısınız. Üstteki çubuk "Çevrimdışı hazır" diyorsa MarkupCraft bu tarayıcıda çevrimdışı kullanım için kaydedilmiştir ve her şey çalışır: açma, işaretleme, ölçme, kaydetme. Kaydedilmediyse bu sekmede zaten yüklenmiş olanı kullanın ve yeniden çevrimiçi olana kadar sayfayı yenilemeyin. Bkz. [Çevrimdışı çalışma](common:offline).
:::

## Uygulamanın hatırladıkları ve hatırlamadıkları

- **İşaretlemeleriniz kaydettiğiniz PDF'in içinde durur.** Hiçbir şey sunucuda tutulmaz. Uygulama PDF'i kendiliğinden kaydetmez, ama siz kaydedene kadar bu tarayıcıda bir kurtarma kopyası tutar. Sekmeyi kapatmadan önce kaydedin; kaydedilmemiş işaretlemelerle sayfadan ayrılmaya çalışırsanız tarayıcı önce sorar (iPad hariç, bkz. [iPad veya dokunmatik ekranda inceleme](topic:review-on-a-tablet)).
- **Adınız, araç stilleriniz ve araç kutunuz** bu bilgisayarda bu tarayıcıda kalır. Başka bir tarayıcı veya bilgisayar sıfırdan başlar ve tarayıcının site verilerini temizlemek bunları kaldırır. Bkz. [Bu tarayıcıda kalanlar](topic:browser-storage).
- Bulutta kaydetme ve insanlar arasında paylaşılan inceleme oturumları henüz yok.

## Sonra nereye

- [Ekrana bir bakış](topic:workspace)
- [Bir sayfayı işaretleme](topic:mark-up-a-sheet)
- [Bir sayfayı kalibre etme ve ölçme](topic:calibrate-and-measure)
- Çizimleri zaten başka bir programda inceliyorsanız [Başka işaretleme yazılımlarından geliyorsanız](topic:coming-from).

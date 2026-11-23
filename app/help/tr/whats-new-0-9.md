---
title: 0.9 sürümündeki yenilikler (önceki)
summary: Notlar ve asla yazdırılmayan pano, şifreli özel notlar ve müşteri için temiz kopya, tüm bir çizim takımı için toplu bağlantılar, on yöntemli bir Yay aracı, Canlı'da başka bir inceleyiciyi takip etme ve silinen işaretlemelerin kaydedilmiş PDF'te kalmasını düzelten bir düzeltme.
keywords: 0.9 yenilikleri, önceki sürüm, yenilikler, 0.9, sürüm notları, değişiklik günlüğü, notlar, pano, özel notlar, parola, şifreli, notları gizle, notları göster, temiz kopya, anlık görüntü, toplu bağlantılar, sayfa çağrıları, sayfa bağlantıları, başlık bloğu, sayfa numarası, zeyilname, yeniden numaralandırma, pdf bağlantısı, yay, yay yöntemleri, üç noktalı yay, yarıçap, takip et, canlı, sınıf görünümü, kişi listesi, silinen işaretleme, ipuçları, sekme başlıkları, 0.8, 0.8.1, sürüm, yeni özellikler, görev, asistan, atanan, bitiş günü, gecikmiş, şimdi denetle, neyin değiştiği, revizyonlar, karşılaştır, sesli not, karar, kırmızı kalem, yanıt dosyası, çizimci, asistan, mcp, sorunlar, diller, giriş aygıtları, dokunmatik yüzey, araç çubuğu satırları, özellik tablosu, güncelleme
from: aa3dfeb8
---

Bu, MarkupCraft 0.9'da 0.8.1'e göre neyin değiştiğidir. Ana fikir, çalışma notlarınızın müşterinin aldığı sayfada görünmemesi ve tüm bir çizim takımının tek seferde bağlanabilmesidir.

## Yeni

### Notlar, pano ve özel notlar

- **Pano.** Her sayfanın çevresindeki alan bir masadır: sayfanın yanına çizilen, yazılan veya yapıştırılan her şey bir nottur ve asla yazdırılmaz. Yer açmak için uzaklaştırmak üzere {{ui:Panoyu göster}} seçin ya da {{ui:Panoya anlık görüntü}} seçip bir kutu çizin, ardından {{ui:Panoya}} seçerek çizimin bir kısmının resmini sayfanın yanına koyun. Anlık görüntü bir resimdir ve sayfa değişse de değişmez. Bkz. [Notlar, pano ve özel notlar](topic:notes-and-pasteboard).
- **Notları göster ve gizle.** Her işaretleme bir not olabilir: {{ui:Notlar}} sekmesinde {{ui:Yeni işaretlemeler}} seçeneğini ayarlayın ya da {{ui:Özellikler}} panelinde {{ui:Bu işaretleme}} seçeneğini kullanın. {{key:Shift+H}} tuşu veya sayfanın altındaki {{ui:Notlar}} anahtarı tüm notları birlikte gizler ya da gösterir. Notlar yazdırmadan, düzleştirilmiş kopyalardan, listelerden ve dışa aktarmalardan çıkarılır; diğer PDF okuyucuları bunları göstermez. Kaydettiğiniz PDF, MarkupCraft'ta bir sonraki açışınız için notları saklar.
- **Özel notlar.** {{ui:Bir parola belirleyin}} seçin, ardından bir işaretlemeyi {{ui:Özel bir not}} yapın. En az 10 karakterlik bir parolayla dosyada şifrelenir ve kurtarma yoktur: biz dahil hiç kimse parola olmadan açamaz. {{ui:Kilitle}} özel notları gizler; {{ui:Bu cihazda kilidi açık kalsın}} varsayılan olarak kapalıdır.
- **Temiz kopya kaydedin.** {{ui:Temiz kopya kaydet}} her notu, özel notu ve panodaki her şeyi kaldırır. Müşteriye giden dosya için kullanın.

### Bir takımın tamamını bağlama

- **Toplu bağlantılar.** {{ui:Sayfalar}} › {{ui:Toplu bağlantılar…}} seçin ya da {{ui:Sayfalar}} panelinde {{ui:Metin bul}} altındaki {{ui:Sayfa çağrılarını bağla…}} seçeneğini kullanın. 1. adım her sayfanın numarasını ve adını, başlık bloğundan okunduğu gibi listeler; yanlış olanları düzeltin. 2. adım bulunan çağrıları listeler, örneğin `3/A-501` veya `DETAIL 2 ON A-501`. {{ui:Bağlanacak}} her biri için sayfayı ve görünümü gösterir, {{ui:Bağlanmadı}} açık hiçbir sayfada bulunmayan numaraları gösterir ve {{ui:Bağlantıları oluştur}} hepsini tek bir geri alma adımında oluşturur. Bir zeyilname veya yeniden numaralandırmadan sonra yeniden çalıştırın; elle yaptığınız bağlantılar asla değişmez. Görünümü olan bir bağlantı PDF bağlantısı olarak kaydedilir, böylece diğer okuyucular da ayrıntıyı açar. Bkz. [Sayfa bağlantıları](topic:sheet-links).

### Çizim

- **Yay, on yöntem.** {{ui:Yay}} aracı ({{key:O}}) artık sayfanın üstünde bir {{ui:Yay yöntemi}} kutusuna sahip; yayı çizmenin on yolu var ve açı, uzunluk, yarıçap ve yön tıklanarak veya yazılarak girilebilir. Bkz. [Yayı on yolla çizin](topic:draw-an-arc).

### Birlikte çalışma

- **Bir inceleyiciyi takip edin.** Canlı bir oturumda bir kişinin adının yanındaki {{ui:Takip et}} seçeneğini seçin; görünümünüz onunkiyle birlikte hareket eder. Kendi görünümünüzü kaydırmak veya yakınlaştırmak takibi durdurur. Oturum sahibi {{ui:Herkesten beni takip etmesini iste}} seçeneğini seçebilir. Kişi listesi her kişinin rengini, adını, bulunduğu sayfayı ve son düzenlemesinin zamanını gösterir. Bkz. [Canlı bir oturumda başka bir inceleyiciyi takip edin](topic:follow-in-live).

## Her uygulamada

- İpuçları Bootstrap ipuçlarıdır; başlangıç ipucu kapatılabilir, sekme şeritleri taştığında kaydırılır ve tarayıcı sekmesi başlıkları `<document> — MarkupCraft | CadCraft` biçiminde okunur.
- Birden çok bölümü olan bir panel birini açar, diğerlerini kapatır (imlecin yanındaki bir kilit birini açık tutar); Ayarlar'daki bir anahtar bunu kapatır.
- Her uygulama varsayılan bir kütüphane öğesi koleksiyonuyla başlar.
- Ağırlık ve sıcaklık birimleri, Birimler ayarlarında kullanılabilir.

## Düzeltilenler

- **Silinen işaretlemeler kaydedilmiş PDF'in içinde artık okunabilir kalmaz.** Kaydetme eskiden silinen ya da yeniden yazılan bir ek açıklamayı sayfasından kaldırıp nesneyi metniyle birlikte dosyada bırakıyordu. Artık kaydetme bu nesneleri siler. Önceki sürümlerle kaydedilmiş dosyalar, siz onları yeniden kaydedene kadar bunları hâlâ tutar.

## Dürüst sınırlar

- Toplu bağlantılar yalnızca kendi test takımlarımızda denendi. Gerçek takımlar balonları birçok biçimde çizer; bu nedenle bir müşteri takımında bazı görünümler kaçırılabilir. Taranmış sayfalar için önce {{ui:Metni oku (OCR)…}} gerekir.
- Notlar, özel notlar ve pano; başsız (headless) bir tarayıcıda ve kendi dosyalarımızda denendi; büyük gerçek vektör takımıyla ve gerçek iki kişilik bir Canlı oturumda denenmedi. Parola değiştirme henüz yapılmadı. 0.9'dan eski sürümler notları göstermez.
- Sınıf görünümü kişi listesidir; gerçek bir öğretmen ve öğrencilerle denenmedi.
- İngilizce dışındaki diller, ana dili konuşan biri okuyana kadar makine taslaklarıdır.
- Windows kurulum dosyaları kod imzalı değildir ({{ui:Daha fazla bilgi}}, ardından {{ui:Yine de çalıştır}}); macOS disk görüntüsü notarize edilmemiştir (sağ tıklayın, ardından Aç).

## Önceki: 0.8 ve 0.8.1

Bu, MarkupCraft 0.8 ve 0.8.1'de 0.7'ye göre neyin değiştiğidir. En büyük yenilik, bir işaretlemenin birinin, ya da kendi asistanınızın yaptığı bir görev olabilmesi ve çizim gerçekten değiştiğinde kendi kendini kapatmasıdır.

### Yeni

**Eylem yapan işaretlemeler**

- **Bir işaretlemeyi göreve dönüştürün.** Bir veya daha fazla işaretleme seçin, {{ui:Görevler}} sekmesini açın ve {{ui:Seçileni göreve çevir}} seçeneğini seçin. Bir görevin bir başlığı, onu yapacak bir kişi ya da bağlı asistanınız, isteğe bağlı bir bitiş günü ve bir durumu vardır; sayfadaki yerini ve yanıt dizisini korur. Bkz. [Bir işaretlemeyi göreve dönüştürün](topic:markups-that-act).
- **Kendi kendini kapatan görevler.** Bir görev, işaretlemesinin içindeki çizimi izleyebilir. Sayfanın daha yeni bir revizyonunu açın ve {{ui:Şimdi denetle}} seçin: o alandaki çizgiler bir kılın ötesinde değiştiyse görev Bitti olarak işaretlenir, işaretlemesi Tamamlandı olur ve yanıt dizisindeki bir not neyin değiştiğini söyler. Yeni bir tarih damgası veya 1.5 pt'den az hareket eden çizgiler sayılmaz. Bir görev bunun yerine bir model öğesini izleyebilir: asistanınız öğeyi `tasks_check` ile bildirir; sonraki farklı bir bildirim veya silinmiş bir öğe görevi kapatır. Tek bir geri alma adımı onu yeniden açar.
- **İşi bulun.** {{ui:Görevler}} listesini duruma ve kime ait olduğuna göre filtreleyin; {{ui:Gecikmiş}} dahil. Asistanınızı bekleyen işi görmek için {{ui:Atanan}} seçeneğini, ardından {{ui:Asistan}} seçeneğini seçin. Bitiş günü geçmiş bir görev Sorunlar panelinde uyarı olarak görünür. {{ui:CSV}} listeyi dışa aktarır. Görevler işaretlemeyle birlikte PDF'e kaydedilir ve diğer işaretleme özellikleri gibi Canlı üzerinden taşınır.

**Neyin değiştiği, düz bir liste olarak**

- **Değişiklikleri listeleyin.** {{ui:Karşılaştır}} sekmesini açın, ardından {{ui:Tüm takımı karşılaştır}} seçeneğini seçin, daha eski ve daha yeni dosyayı seçin ve {{ui:Değişiklikleri listele}} seçeneğini seçin. Liste bir sayıyla başlar, ardından her değişen sayfayı en büyük değişiklik en önde olacak şekilde ele alır: sayfada nerede olduğu, ne kadar büyük olduğu (kalibre edilmiş bir sayfada gerçek birimlerle birlikte kâğıt inçleri olarak), çizgilerin eklenip eklenmediği ya da silinip silinmediği, orada kaç işaretleme bulunduğu ve hangi kelimelerin ortaya çıktığı ya da kaybolduğu. {{ui:Listeyi kopyala}} onu panoya koyar, {{ui:CSV}} her değişiklik için bir satır yazar. Bkz. [Revizyonlar arasında neyin değiştiğini listeleyin](topic:what-changed-in-words).

**Sesli notlar ve kararlar**

- **Sesli notlar.** {{ui:Notlar}} sekmesinde {{ui:Sesli not kaydet}} seçin, ardından {{ui:Kaydı durdur}} seçin; kayıtlar iki dakikada kendiliğinden durur. Not sayfanın ortasına iğnelenir; yerine ait olduğu yere sürükleyin ve {{ui:Özellikler}} panelinde bir açıklama yazın. Listedeki {{ui:Oynat}} onu çalar. Kayıt PDF'in içine kaydedilir.
- **Kararlar.** {{ui:Karar iğnele}} sayfaya bir iki cümle yazar. Eğer önceki bir kararın yerine geçiyorsa, o kararı {{ui:Yerine geçtiği}} kısmından seçin: eski karar kalır, Yerine geçildi olarak işaretlenir ve yenisine işaret eder. Tek bir geri alma adımı bunu geri alır. Bkz. [Sesli notları ve kararları sayfaya iğneleyin](topic:voice-notes-and-decisions).

**Revizyona kırmızı kalem**

- **Gönderin ve yanıtlayın.** {{ui:Görevler}} sekmesinde {{ui:Revizyona kırmızı kalem}} seçeneğini açın, işaretlemelerin karşılaştırıldığı revizyonu yazın ve {{ui:Kırmızı kalem dosyasını dışa aktar}} seçeneğini seçin. Her açık işaretleme için bir öğe içeren bir `.redline.json` dosyası alırsınız: sayfa, konum (sayfanın kesirleri olarak, böylece farklı bir boyutta yeniden basılan çizim yine de hizalanır), kelimeler, yazar, yanıt dizisi ve görevi. Değişiklikleri çizen kişi bir `.redline-answers.json` dosyasında Kabul edildi, Reddedildi veya Bitti yanıtını verir; {{ui:Yanıt dosyasını yükle…}} her işaretlemeye bu durumu ve çizimcinin notunu tek bir geri alma adımı olarak verir. Bkz. [İşaretlemeleri kırmızı kalem olarak çizimciye gönderin](topic:redline-to-revision).

**Yapay zekâ asistanları**

- **Daha fazla araç.** CadCraft Studio üzerinden bağladığınız bir asistan görevleri listeleyebilir (`tasks_list`), birini oluşturabilir veya değiştirebilir (`task_set`), görevi kaldırabilir (`task_clear`), birini daha yeni bir revizyona ya da bir öğeye karşı denetleyebilir (`tasks_check`) ve iki açık plan takımı arasındaki düz değişiklik listesini okuyabilir (`revisions_changes`). Yalnızca Asistanlar anahtarının altında işaretlediğiniz araçları alır ve her değişiklik tek bir geri alma adımıdır. Bkz. [MarkupCraft'ı bir yapay zekâ asistanıyla kullanın](topic:use-with-ai-assistants).

### Her uygulamada

- **Diller.** CadCraft Studio artık 54 dile sahip. On tanesi yenidir: Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili ve Özbekçe. İngilizce dışındaki dillerin tümü, ana dili konuşan biri okuyana kadar makine taslaklarıdır.
- **Giriş aygıtları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Giriş aygıtları}} bir dokunmatik yüzeyin, farenin yan tuşlarının, bir kalemin, parmak dokunuşlarının, bir 3B farenin, bir oyun denetleyicisinin veya bir MIDI denetleyicisinin ne yapacağını belirler; her uygulama için ya da yalnızca bu uygulama için. Bir şeyi değiştirene kadar her aygıt eskisi gibi çalışır. Bkz. [Dokunmatik yüzey, 3B fare veya denetleyici kullanın](common:input-devices).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} altında {{ui:Sar}} (varsayılan), {{ui:2 satır}} ve {{ui:1 satır}} bulunur; böylece çizim daha fazla yer kazanır. Bkz. [Panelleri düzenleyin](common:arrange-panels).
- **Özellik tablosu.** Bir işaretlemenin Stil alanları, daraltılabilir kategoriler ile etiket ve değer sütunlarına sahip ortak tabloyu kullanır.
- **Sorunlar paneli.** Gecikmiş bir görev gibi uygulamadan gelen uyarılar tek bir Sorunlar panelinde toplanır.
- **Canlı ve eklentiler.** Canlı oturumlar [Canlı olarak birlikte çalışma](common:work-together-live) bölümünde anlatılır; hesabınızı izleyen eklenti listesi [Eklentiler ve hesap listeniz](common:addons-basics) bölümündedir.
- **Yapay zekânızı bağlayın.** CadCraft Studio kendi asistanınız için merkezdir: sekiz uygulamanın tümü için bir kez bağlanın. Uygulamaların kendi yapay zekâsı yoktur.

### 0.8.1'de düzeltilenler

- **Studio çalışırken dil değiştirebilir.** Daha önce masaüstü uygulaması ve paketlenmiş sürümler İngilizce kalıyordu. Bu henüz her platformda denenmedi: dil değişmiyorsa bize bildirin.
- Studio 0.8 kurulumlarına {{ui:Ayarlar}} › {{ui:Güncellemeler}} üzerinden 0.8.1 sunulur.

### Bu sürümde henüz yok

- **Kod imzalı değil.** Windows kurulum dosyaları ve macOS .dmg dosyası henüz imza taşımaz. Windows'ta SmartScreen kurulumu durdurursa {{ui:Daha fazla bilgi}}, ardından {{ui:Yine de çalıştır}} seçin. Mac'te CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. Mağaza sürümleri beklemededir.
- **Yapay zekâ bağlantısı bazı yerlerde tamamlanmamış.** Studio içinde tek tıkla bağlanma, tarayıcı asistanları için barındırılan bağlayıcı ve Studio içinde kendi API anahtarınız bu sürüm için vaat edilmiyor. Görev döngüsü denendi, ancak henüz gerçek bir asistanla denenmedi.
- **Görev denetimleri aynı sayfa boyutunu gerektirir.** Başka bir boyutta yeniden basılan bir sayfa eşleşmez, bu yüzden görevleri kapanmaz. Sayfalar sayfa numarasına göre, yoksa sayfa konumuna göre eşleştirilir.
- **Sesli notlar yalnızca kayıttır.** Dökümü yoktur; bir asistan notun uzunluğunu, yazarını ve açıklamasını görür, sesi görmez. Kayıt, başsız bir tarayıcıda sahte bir mikrofonla denendi; telefon, tablet veya dizüstü bilgisayardaki gerçek bir mikrofon hâlâ denenmelidir.
- **PDF'deki hesap sayfaları ve nedenler** dosyanın özel bir girdisinde tutulur. Daha eski bir MarkupCraft bu girdiyi yok sayar ve dosyayı bir sonraki kaydettiğinde siler; bu nedenle böyle bir dosyayı 0.8 veya sonrasıyla açıp kaydedin.
- **Kırmızı kalemlerin çizimci tarafı.** CadCraft'ın kırmızı kalem dosyasını okuyup yanıtlaması henüz yapılmadı.
- **Diğer diller.** Tamilce uygulama çubuğu 528 px taşıyor.

Diğer her şey [Henüz yapılmayanlar](topic:not-built-yet) bölümündedir. Bundan önceki sürüm için bkz. [0.7 sürümündeki yenilikler](topic:whats-new-0-7).

---
title: 0.9 sürümünde yenilikler
summary: Hiçbir zaman yazdırılmayan notlar ve pano, şifreli özel notlar ve müşteri için temiz kopya, tüm bir çizim takımı için toplu bağlantılar, on yöntemli bir Yay aracı, Canlı oturumda başka bir gözden geçiren kişiyi takip etme ve silinen işaretlemelerin kaydedilen PDF'te kalmasına dair bir düzeltme.
keywords: yenilikler, 0.9, sürüm notları, değişiklik günlüğü, notlar, pano, özel notlar, parola, şifreli, notları gizle, notları göster, temiz kopya, anlık görüntü, toplu bağlantılar, sayfa çağrıları, sayfaları bağla, künye, sayfa numarası, ek, yeniden numaralandır, PDF bağlantısı, yay, yay yöntemleri, üç nokta yay, yarıçap, takip et, beni takip et, canlı, sınıf görünümü, kişi listesi, silinen işaretleme, araç ipuçları, sekme başlıkları, yenilikler, 0.8, 0.8.1, sürüm, yeni özellikler, görev, görevler, atanan, teslim günü, gecikmiş, şimdi denetle, neyin değiştiği, revizyonlar, karşılaştır, sesli not, karar, kırmızı kalem, yanıt dosyası, çizimci, asistan, mcp, sorunlar, diller, giriş aygıtları, dokunmatik yüzey, araç çubuğu satırları, özellik tablosu, güncelleme
from: dbdd7ed4
---

MarkupCraft 0.9 ile 0.8.1 karşılaştırıldığında neyin değiştiğini gösterir. Temel fikir, çalışma notlarınızın müşterinin aldığı sayfada yer almaması ve bir çizim takımının tamamının tek seferde bağlanabilmesidir.

## Yeni

### Notlar, pano ve özel notlar

- **Pano.** Her sayfanın çevresindeki alan bir masadır: sayfanın yanına çizilen, yazılan veya yapıştırılan her şey bir nottur ve asla yazdırılmaz. Daha fazla yer için {{ui:Panoyu göster}} seçeneğiyle uzaklaştırın ya da {{ui:Panoya anlık görüntü}} seçip bir kutu sürükleyin, sonra çizimin bir bölümünün resmini sayfanın yanına koymak için {{ui:Panoya}} seçin. Anlık görüntü bir resimdir ve sayfa değiştiğinde değişmez. Bkz. [Notlar, pano ve özel notlar](topic:notes-and-pasteboard).
- **Notları göster ve gizle.** Her işaretleme bir not olabilir: {{ui:Yeni işaretlemeler}} ayarını {{ui:Notlar}} sekmesinde ya da {{ui:Bu işaretleme}} ayarını {{ui:Özellikler}} bölümünde yapın. {{key:Shift+H}} tuşlarına veya sayfanın altındaki {{ui:Notlar}} anahtarına basarak tüm notları aynı anda gizleyebilir ya da gösterebilirsiniz. Notlar yazdırmada, düzleştirilmiş kopyalarda, listelerde ve dışa aktarmalarda yer almaz ve diğer PDF okuyucuları onları göstermez. Kaydettiğiniz PDF, MarkupCraft'ta bir sonraki açışınızda notları korur.
- **Özel notlar.** {{ui:Bir parola belirleyin}} seçeneğini seçin, sonra bir işaretlemeyi {{ui:Özel bir not}} yapın. Not, en az 10 karakterlik bir parolayla dosyada şifrelenir ve kurtarma yoktur: parola olmadan kimse, biz dahil, notu açamaz. {{ui:Kilitle}} özel notları gizler; {{ui:Bu cihazda kilidi açık kalsın}} varsayılan olarak kapalıdır.
- **Temiz kopya kaydedin.** {{ui:Temiz kopya kaydet}} seçeneği her notu, özel notu ve panodaki her şeyi kaldırır. Müşteriye giden dosya için kullanın.

### Bir çizim takımının tamamını bağlayın

- **Toplu bağlantılar.** {{ui:Sayfalar}} › {{ui:Toplu bağlantılar…}} seçeneğini seçin ya da {{ui:Sayfalar}} panelindeki {{ui:Metin bul}} altından {{ui:Sayfa çağrılarını bağla…}} seçin. Adım 1, her sayfanın numarasını ve adını künyesinden okunduğu şekliyle listeler; yanlış olanları düzeltin. Adım 2, `3/A-501` veya `DETAIL 2 ON A-501` gibi bulunan çağrıları listeler. {{ui:Bağlanacak}} her biri için sayfayı ve görünümü gösterir, {{ui:Bağlanmadı}} ise hiçbir açık sayfada olmayan numaraları gösterir. {{ui:Bağlantıları oluştur}} hepsini tek bir geri alma adımında oluşturur. Bir ekten veya yeniden numaralandırmadan sonra yeniden çalıştırın; elle yaptığınız bağlantılar asla değişmez. Görünümü olan bir bağlantı PDF bağlantısı olarak kaydedilir, böylece diğer okuyucular da ayrıntıyı açar. Bkz. [Sayfa bağlantıları](topic:sheet-links).

### Çizim

- **Yay, on yöntem.** {{ui:Yay}} aracı ({{key:O}}) artık sayfanın üstünde bir {{ui:Yay yöntemi}} kutusuna sahip; yay çizmenin on yolu var ve açı, uzunluk, yarıçap ve yön tıklanarak ya da yazılarak girilebilir. Bkz. [Yayı on yöntemle çizin](topic:draw-an-arc).

### Birlikte çalışma

- **Bir gözden geçireni takip edin.** Bir Canlı oturumda, bir kişinin adının yanındaki {{ui:Takip et}} seçeneğini seçin; görünümünüz onunkiyle birlikte hareket eder. Kendi görünümünüzde kaydırma veya yakınlaştırma yapmak takibi durdurur. Oturumu açan kişi {{ui:Herkesten beni takip etmesini iste}} seçeneğini seçebilir. Kişi listesinde her kişinin rengi, adı, bulunduğu sayfa ve son düzenlemesinin zamanı görünür. Bkz. [Canlı bir oturumda başka bir gözden geçireni takip edin](topic:follow-in-live).

## Her uygulamada

- Araç ipuçları Bootstrap araç ipuçlarıdır, başlangıç ipucu kapatılabilir, sekme şeritleri taştığında kaydırılır ve tarayıcı sekme başlıkları `<document> — MarkupCraft | CadCraft` biçiminde görünür.
- Birden çok bölümü olan bir panelde bir bölüm açılır ve diğerleri kapanır (imlecin yanındaki bir kilit birini açık tutar); bir Ayarlar anahtarı bunu kapatır.
- Her uygulama Kütüphane nesnelerinin varsayılan bir koleksiyonuyla başlar.
- Ağırlık ve sıcaklık birimleri {{ui:Ayarlar}} içindeki Birimler bölümünde kullanılabilir.

## Düzeltilen

- **Silinen işaretlemeler kaydedilen PDF içinde artık okunamaz.** Eskiden kaydetme, silinen veya yeniden yazılan bir açıklamayı sayfasından kaldırıyor ama metniyle birlikte nesneyi dosyada bırakıyordu. Artık kaydetme bu nesneleri siler. Önceki sürümlerle kaydedilmiş dosyalar, siz onları yeniden kaydedene kadar bu nesneleri tutmaya devam eder.

## Dürüst sınırlar

- Toplu bağlantılar kendi test takımlarımızda denendi. Gerçek takımlar balonları birçok farklı biçimde çizer, bu yüzden bir müşteri takımında bazı görünümler kaçırılabilir. Taranmış sayfalar için önce {{ui:Metni oku (OCR)…}} gerekir.
- Notlar, özel notlar ve pano, başsız bir tarayıcıda ve kendi dosyalarımızda test edildi; büyük bir gerçek vektör takımında ve gerçek bir iki kişilik Canlı oturumunda değil. Parola değiştirme özelliği henüz yapılmadı. 0.9'dan eski sürümler notları göstermez.
- Sınıf görünümü kişi listesidir; gerçek bir öğretmen ve öğrencilerle denenmedi.
- İngilizce dışındaki diller, ana dili konuşan biri okuyana kadar makine taslağıdır.
- Windows kurulum dosyaları kod imzalı değildir ({{ui:Daha fazla bilgi}}, sonra {{ui:Yine de çalıştır}}); macOS disk görüntüsü noterleştirilmemiştir (sağ tıklayın, sonra {{ui:Aç}}).

## Önceki: 0.8 ve 0.8.1

MarkupCraft 0.8 ve 0.8.1 ile 0.7 karşılaştırıldığında neyin değiştiğini gösterir. En büyük yenilik, bir işaretlemenin birinin, ya da kendi asistanınızın yapacağı bir görev olabilmesi ve çizim gerçekten değiştiğinde kendiliğinden kapanmasıdır.

### Yeni

**Eylem yapan işaretlemeler**

- **Bir işaretlemeyi görev yapın.** Bir ya da daha fazla işaretleme seçin, {{ui:Görevler}} sekmesini açın ve {{ui:Seçileni göreve çevir}} seçeneğini seçin. Bir görevin bir başlığı, onu yapacak bir kişi ya da bağlı asistanınız, isteğe bağlı bir teslim günü ve bir durumu vardır; sayfadaki yerini ve yanıt dizisini korur. Bkz. [Bir işaretlemeyi görev yapın](topic:markups-that-act).
- **Kendiliğinden kapanan görevler.** Bir görev, işaretlemesinin içindeki çizimi izleyebilir. Sayfanın daha yeni bir revizyonunu açın ve {{ui:Şimdi denetle}} seçeneğini seçin: o alandaki çizgiler bir kıldan fazla değiştiyse görev Bitti olarak işaretlenir, işaretlemesi Tamamlandı olur ve yanıt dizisindeki bir not neyin değiştiğini söyler. Yeni bir tarih damgası veya 1,5 noktadan az hareket eden çizgiler sayılmaz. Bunun yerine bir görev bir model öğesini izleyebilir: asistanınız öğeyi `tasks_check` ile bildirir ve sonraki bildirim farklıysa ya da öğe silinmişse görev kapanır. Tek bir geri alma adımı onu yeniden açar.
- **İşi bulun.** {{ui:Görevler}} listesini duruma ve kimin için olduğuna göre süzün; {{ui:Gecikmiş}} dahil. Asistanınızı bekleyen işi görmek için {{ui:Atanan}} ve ardından {{ui:Asistan}} seçin. Teslim gününü geçen bir görev, Sorunlar panelinde uyarı olarak görünür. {{ui:CSV}} listeyi dışa aktarır. Görevler işaretlemeyle birlikte PDF içinde kaydedilir ve diğer işaretleme özellikleri gibi Canlı üzerinden iletilir.

**Neyin değiştiği, düz bir liste olarak**

- **Değişiklikleri listeleyin.** {{ui:Karşılaştır}} sekmesini açın, sonra {{ui:Tüm takımı karşılaştır}} seçeneğini seçin, daha önceki ve daha sonraki dosyayı seçin ve {{ui:Değişiklikleri listele}} seçeneğini seçin. Liste bir sayıyla başlar, ardından her değişen sayfayı en büyük değişiklik önce olacak şekilde ele alır: sayfada nerede olduğu, ne kadar büyük olduğu (kalibre edilmiş bir sayfada gerçek birimlerin yanı sıra kâğıt inç cinsinden), çizgilerin eklenip eklenmediği veya silinip silinmediği, orada kaç işaretleme bulunduğu ve hangi kelimelerin ortaya çıkıp kaybolduğu. {{ui:Listeyi kopyala}} listeyi panoya koyar, {{ui:CSV}} her değişiklik için bir satır yazar. Bkz. [Revizyonlar arasında neyin değiştiğini listeleyin](topic:what-changed-in-words).

**Sesli notlar ve kararlar**

- **Sesli notlar.** {{ui:Notlar}} sekmesinde {{ui:Sesli not kaydet}} seçeneğini, ardından {{ui:Kaydı durdur}} seçeneğini seçin; kayıtlar iki dakika sonra kendiliğinden durur. Not sayfanın ortasına iğnelenir, onu olması gereken yere sürüklersiniz ve {{ui:Özellikler}} içine bir başlık yazarsınız; listedeki {{ui:Oynat}} seçeneği onu çalar. Kayıt PDF içinde saklanır.
- **Kararlar.** {{ui:Karar iğnele}} sayfaya bir iki cümle yazar. Bir önceki kararın yerine geçiyorsa, onu {{ui:Yerine geçtiği}} alanında seçin: eski karar kalır, Yerine geçildi olarak işaretlenir ve yenisine işaret eder. Tek bir geri alma adımı onu geri alır. Bkz. [Sesli notları ve kararları sayfaya iğneleyin](topic:voice-notes-and-decisions).

**Revizyona kırmızı kalem**

- **Gönderin ve yanıtlayın.** {{ui:Görevler}} sekmesinde {{ui:Revizyona kırmızı kalem}} seçeneğini açın, işaretlemelerin karşılaştırıldığı revizyonu yazın ve {{ui:Kırmızı kalem dosyasını dışa aktar}} seçeneğini seçin. Her açık işaretleme için bir öğe içeren bir `.redline.json` dosyası alırsınız: sayfa, konum (sayfanın oranları olarak, böylece başka bir boyutta yeniden çizdirilen sayfa yine hizalanır), kelimeler, yazar, yanıt dizisi ve görevi. Değişiklikleri çizen kişi, bir `.redline-answers.json` dosyasında Kabul edildi, Reddedildi veya Bitti yanıtını verir; {{ui:Yanıt dosyasını yükle…}} her işaretlemeye bu durumu ve çizimcinin notunu, tek bir geri alma adımı olarak verir. Bkz. [İşaretlemeleri kırmızı kalem olarak çizimciye gönderin](topic:redline-to-revision).

**AI asistanları**

- **Daha fazla araç.** CadCraft Studio üzerinden bağladığınız bir asistan görevleri listeleyebilir (`tasks_list`), bir görev oluşturabilir ya da değiştirebilir (`task_set`), bir görevi kaldırabilir (`task_clear`), bir görevi daha yeni bir revizyona ya da bir öğeye karşı denetleyebilir (`tasks_check`) ve açık iki plan takımı arasındaki neyin değiştiğinin düz listesini okuyabilir (`revisions_changes`). Yalnızca {{ui:Asistanlar}} anahtarının altında işaretlediğiniz araçları alır ve her değişiklik tek bir geri alma adımıdır. Bkz. [MarkupCraft'ı bir yapay zekâ asistanıyla kullanın](topic:use-with-ai-assistants).

### Her uygulamada

- **Diller.** CadCraft Studio artık 54 dile sahip. Onu yeni olan on dil: Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili ve Özbekçe. İngilizce dışındaki dillerin tümü, ana dili konuşan biri okuyana kadar makine taslağıdır.
- **Giriş aygıtları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Giriş aygıtları}} bölümü, bir dokunmatik yüzeyin, fare yan düğmelerinizin, bir kalemin, parmak dokunuşlarının, bir 3B farenin, bir oyun kumandasının veya bir MIDI denetleyicinin ne yaptığını belirler; her uygulama için veya yalnızca bu uygulama için. Bir şey değiştirene kadar her aygıt eskisi gibi çalışır. Bkz. [Dokunmatik yüzey, 3B fare veya denetleyici kullanma](common:input-devices).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} bölümünde {{ui:Sar}} (varsayılan), {{ui:2 satır}} ve {{ui:1 satır}} seçenekleri vardır; böylece çizim daha fazla yer kazanır. Bkz. [Panelleri düzenleme](common:arrange-panels).
- **Özellik tablosu.** Bir işaretlemenin Stil alanları, daraltılabilir kategoriler ve etiket ile değer sütunları olan ortak tabloyu kullanır.
- **Sorunlar paneli.** Görev gecikmesi gibi uygulamadan gelen uyarılar tek bir Sorunlar panelinde toplanır.
- **Canlı ve eklentiler.** Canlı oturumlar [Canlı birlikte çalışma](common:work-together-live) bölümünde anlatılır; hesabınızı izleyen eklenti listesi [Eklentiler ve hesap listeniz](common:addons-basics) bölümündedir.
- **Yapay zekânızı bağlayın.** CadCraft Studio, kendi asistanınız için merkezdir: bir kez bağlanın, sekiz uygulamanın hepsi için geçerli olsun. Uygulamaların kendi yapay zekâsı yoktur.

### 0.8.1 sürümünde düzeltilenler

- **Studio çalışırken dil değiştirebilir.** Daha önce masaüstü uygulaması ve paketlenmiş sürümler İngilizce kalıyordu. Bu, her platformda henüz test edilmedi: dilin değişmediğini görürseniz bize bildirin.
- Studio 0.8 kurulumlarına {{ui:Ayarlar}} › {{ui:Güncellemeler}} üzerinden 0.8.1 sunulur.

### Bu sürümde henüz yok

- **Kod imzalı değil.** Windows kurulum dosyaları ve macOS .dmg dosyası henüz imza taşımaz. Windows'ta SmartScreen kurulumu durdurursa {{ui:Daha fazla bilgi}} seçin, sonra {{ui:Yine de çalıştır}} seçin. Bir Mac'te CadCraft Studio'ya sağ tıklayın ve {{ui:Aç}} seçeneğini seçin. Mağaza sürümleri beklemededir.
- **Yapay zekânızı bağlama bazı yerlerde tamamlanmadı.** Studio içinde tek tıkla bağlanma, tarayıcı asistanları için barındırılan bağlayıcı ve Studio içinde kendi API anahtarınız bu sürüm için vaat edilmiyor. Görev döngüsü test edildi, ancak henüz gerçek bir asistanla denenmedi.
- **Görev denetimleri aynı sayfa boyutunu gerektirir.** Başka bir boyutta yeniden çizdirilen bir sayfa eşleşmez, bu yüzden görevleri kapanmaz. Sayfalar sayfa numarasına göre, yoksa sayfa konumuna göre eşleştirilir.
- **Sesli notlar yalnızca kayıttır.** Döküm yoktur ve bir asistan, sesi değil, notun uzunluğunu, yazarını ve başlığını görür. Kayıt, başsız bir tarayıcıda sahte bir mikrofonla denendi; bir telefonda, tablette veya dizüstü bilgisayarda gerçek bir mikrofon hâlâ kontrol edilecek.
- **PDF içindeki hesap sayfaları ve gerekçeler** dosyanın özel bir girdisinde tutulur. Daha eski bir MarkupCraft bu girdiyi yok sayar ve dosyayı bir sonraki kaydettiğinde siler; bu yüzden böyle bir dosyayı 0.8 veya sonrasıyla açıp kaydedin.
- **Kırmızı kalem dosyasının çizimci tarafı.** CadCraft'ın kırmızı kalem dosyasını okuyup yanıtlaması henüz yapılmadı.
- **Diğer diller.** Tamilce uygulama çubuğu 528 px taşıyor.

Diğer her şey için [Henüz yapılmayanlar](topic:not-built-yet) bölümüne bakın. Bir önceki sürüm için bkz. [0.7 sürümündeki yenilikler](topic:whats-new-0-7).

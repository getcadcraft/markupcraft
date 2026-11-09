---
title: Yenilikler: 0.8 ve 0.8.1
summary: Göreve dönüşen ve kendini kapatan işaretlemeler, revizyonlar arasında neyin değiştiğine dair düz bir liste, planda sesli notlar ve kararlar, çizimci için kırmızı kalem dosyaları ve ortak 0.8 değişiklikleri: giriş aygıtları, araç çubuğu satırları, Sorunlar paneli, daha fazla dil.
keywords: yenilikler, neler yeni, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, görev, görevler, atanan, bitiş günü, gecikmiş, şimdi denetle, neler değişti, revizyonlar, karşılaştır, sesli not, karar, kırmızı kalem, yanıt dosyası, çizimci, asistan, mcp, sorunlar, diller, giriş aygıtları, dokunmatik yüzey, araç çubuğu satırları, özellik tablosu, güncelle
from: 40368796
---

Bu, MarkupCraft 0.7 ile karşılaştırıldığında 0.8 ve 0.8.1 sürümlerinde neyin değiştiğidir. En büyük yenilik, bir işaretlemenin birinin ya da kendi asistanınızın yapacağı bir görev olabilmesi ve çizim gerçekten değiştiğinde kendini kapatabilmesidir.

## Yeni

### İşaretlemeler harekete geçer

- **Bir işaretlemeyi göreve çevirin.** Bir veya daha fazla işaretleme seçin, {{ui:Görevler}} sekmesini açın ve {{ui:Seçileni göreve çevir}} seçeneğini seçin. Bir görevin bir başlığı, görevi yapacak bir kişi ya da bağlı asistanınız, isteğe bağlı bir bitiş günü ve bir durumu vardır; sayfadaki yerini ve yanıt dizisini korur. Bkz. [Bir işaretlemeyi göreve çevirme](topic:markups-that-act).
- **Kendini kapatan görevler.** Bir görev, işaretlemesinin içindeki çizimi izleyebilir. Sayfanın daha yeni bir revizyonunu açın ve {{ui:Şimdi denetle}} seçeneğini seçin: o alandaki çizgiler kılcal bir farktan fazla değiştiyse görev Bitti olarak işaretlenir, işaretlemesi Tamamlandı olur ve yanıt dizisindeki bir not neyin değiştiğini söyler. Yeni bir tarih damgası ya da 1.5 nokta kadar az hareket eden çizgiler sayılmaz. Bunun yerine bir görev bir model öğesini izleyebilir: asistanınız öğeyi `tasks_check` ile bildirir; sonraki bildirim farklıysa ya da öğe silinmişse görev kapanır. Tek bir geri al adımı onu yeniden açar.
- **İşi bulun.** {{ui:Görevler}} listesini duruma ve kime ait olduğuna göre süzün; buna {{ui:Gecikmiş}} da dahildir. {{ui:Atanan}} seçeneğini seçin, ardından {{ui:Asistan}} seçerek asistanınızı bekleyen işleri görün. Bitiş gününü geçmiş bir görev Sorunlar paneli içinde uyarı olarak görünür. {{ui:CSV}} listeyi dışa aktarır. Görevler işaretlemeyle birlikte PDF dosyasına kaydedilir ve Canlı üzerinden diğer işaretleme özellikleri gibi taşınır.

### Neyin değiştiği, düz bir liste olarak

- **Değişiklikleri listeleyin.** {{ui:Karşılaştır}} sekmesini açın, ardından Tüm sayfa takımını karşılaştır seçeneğini seçin, daha önceki ve daha sonraki dosyayı seçin ve {{ui:Değişiklikleri listele}} seçeneğini seçin. Liste önce bir sayıyla başlar, ardından değişen her sayfayı kapsar; en büyük değişiklik önce gelir: sayfada nerede olduğu, ne kadar büyük olduğu (gerçek birimlerle ve kalibre edilmiş bir sayfada kâğıt üzerinde inç olarak), çizgilerin eklenip eklenmediği ya da silinip silinmediği, orada kaç işaretleme bulunduğu ve hangi sözcüklerin ortaya çıkıp kaybolduğu. {{ui:Listeyi kopyala}} listeyi panoya koyar, {{ui:CSV}} ise her değişiklik için bir satır yazar. Bkz. [Revizyonlar arasında neyin değiştiğini listeleme](topic:what-changed-in-words).

### Sesli notlar ve kararlar

- **Sesli notlar.** {{ui:Notlar}} sekmesinde {{ui:Sesli not kaydet}} seçeneğini seçin, ardından {{ui:Kaydı durdur}} seçeneğini seçin; kayıtlar iki dakika sonra kendiliğinden durur. Not sayfanın merkezine iğnelenir; doğru olduğu yere sürükleyin ve {{ui:Özellikler}} içinde bir başlık yazın. Listedeki {{ui:Oynat}} seçeneği kaydı oynatır. Kayıt PDF dosyasının içine kaydedilir.
- **Kararlar.** {{ui:Karar iğnele}} seçeneği sayfaya bir iki cümlelik bir karar yazar. Daha önceki bir kararın yerine geçiyorsa, {{ui:Yerine geçtiği}} içinde o kararı seçin: eski karar kalır, Yerine geçildi olarak işaretlenir ve yenisini gösterir. Tek bir geri al adımı onu geri alır. Bkz. [Sesli notları ve kararları sayfaya iğneleme](topic:voice-notes-and-decisions).

### Kırmızı kalemi revizyona

- **Gönderin ve yanıtlayın.** {{ui:Görevler}} sekmesinde {{ui:Revizyona kırmızı kalem}} seçeneğini açın, işaretlemelerin karşılaştırıldığı revizyonu yazın ve {{ui:Kırmızı kalem dosyasını dışa aktar}} seçeneğini seçin. Açık her işaretleme için bir öğe içeren bir `.redline.json` dosyası alırsınız: sayfa, konum (sayfanın kesirleri olarak, böylece farklı boyutta yeniden çizdirilen bir çizim yine hizalanır), sözcükler, yazar, yanıt dizisi ve görevi. Değişiklikleri çizen kişi bir `.redline-answers.json` dosyasında Kabul edildi, Reddedildi ya da Bitti yanıtı verir; {{ui:Yanıt dosyasını yükle…}} her işaretlemeye bu durumu ve çizimcinin notunu tek bir geri al adımı olarak verir. Bkz. [İşaretlemeleri kırmızı kalemle çizimciye gönderme](topic:redline-to-revision).

### Yapay zekâ asistanları

- **Daha fazla araç.** CadCraft Studio üzerinden bağladığınız bir asistan, görevleri listeleyebilir (`tasks_list`), bir görevi oluşturabilir ya da değiştirebilir (`task_set`), görevi kaldırabilir (`task_clear`), bir görevi daha yeni bir revizyona ya da bir öğeye karşı denetleyebilir (`tasks_check`) ve iki açık plan takımı arasındaki değişikliklerin düz listesini okuyabilir (`revisions_changes`). Yalnızca Asistanlar anahtarının altında işaretlediğiniz araçları alır ve her değişiklik tek bir geri al adımıdır. Bkz. [MarkupCraft'ı bir yapay zekâ asistanıyla kullanma](topic:use-with-ai-assistants).

## Tüm uygulamalarda

- **Diller.** CadCraft Studio artık 54 dile sahip. Bunların on tanesi yeni: Litvanca, Letonca, Boşnakça, Marathice, Telugu, Arnavutça, Afrikanca, Filipince, Svahilice ve Özbekçe. İngilizce olmayan dillerin tümü, ana dili konuşan biri okuyana kadar makine taslağıdır.
- **Giriş aygıtları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Giriş aygıtları}} bölümünde bir dokunmatik yüzeyin, farenin yan düğmelerinin, bir kalemin, parmak dokunuşlarının, 3B faremin, bir oyun denetleyicisinin ya da bir MIDI denetleyicisinin ne yaptığını her uygulama için ya da yalnızca bu uygulama için ayarlayın. Bir şey değiştirene kadar her aygıt eskisi gibi çalışır. Bkz. [Dokunmatik yüzey, 3B fare veya denetleyici kullanma](common:input-devices).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} seçeneğinde {{ui:Sar}} (varsayılan), {{ui:2 satır}} ve {{ui:1 satır}} bulunur; böylece çizim daha fazla yer kazanır. Bkz. [Panelleri düzenleme](common:arrange-panels).
- **Özellik tablosu.** Bir işaretlemenin Stil alanları ortak tabloyu kullanır; daraltılabilir kategoriler ve etiket ile değer sütunları vardır.
- **Sorunlar paneli.** Uygulamadan gelen uyarılar, örneğin gecikmiş bir görev, tek bir Sorunlar panelinde toplanır.
- **Canlı ve eklentiler.** Canlı oturumlar [Birlikte canlı çalışma](common:work-together-live) bölümünde anlatılır; hesabınızı izleyen eklenti listesi [Eklentiler ve hesap listeniz](common:addons-basics) bölümündedir.
- **Yapay zekânızı bağlayın.** CadCraft Studio, kendi yapay zekâ asistanınız için merkezdir: bir kez bağlanın, sekiz uygulamanın tümü için geçerli olsun. Uygulamaların kendilerine ait bir yapay zekâsı yoktur.

## 0.8.1'de düzeltilenler

- **Studio çalışırken dil değiştirebilir.** Daha önce masaüstü uygulaması ve paketlenmiş sürümler İngilizce kalıyordu. Bu, her platformda henüz sınanmadı: dil değişmiyorsa bize bildirin.
- Studio 0.8 kurulumlarına {{ui:Ayarlar}} › {{ui:Güncellemeler}} üzerinden 0.8.1 güncellemesi sunulur.

## Bu sürümde henüz yok

- **Kod imzalı değil.** Windows yükleyicileri ve macOS .dmg dosyaları henüz imza taşımıyor. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Daha fazla bilgi}} seçeneğini seçin, ardından {{ui:Yine de çalıştır}} seçeneğini seçin. Bir Mac'te CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçeneğini seçin. Mağaza sürümleri beklemede.
- **Yapay zekânızı bağlamak bazı yerlerde tamamlanmadı.** Studio içinde tek tıkla bağlanma, tarayıcı asistanları için barındırılan bağlayıcı ve Studio içinde kendi API anahtarınız bu sürüm için vaat edilmiyor. Görev döngüsü test edildi, ancak henüz gerçek bir asistanla test edilmedi.
- **Görev denetimleri aynı sayfa boyutunu gerektirir.** Başka bir boyuta yeniden çizdirilen bir sayfa eşleşmez, bu yüzden görevleri kapanmaz. Sayfalar sayfa numarasına göre, yoksa sayfadaki konuma göre eşleştirilir.
- **Sesli notlar yalnızca kayıttır.** Döküm yoktur; bir asistan notun sesini değil, uzunluğunu, yazarını ve başlığını görür. Kayıt, başsız bir tarayıcıda sahte bir mikrofonla denendi; telefon, tablet veya dizüstü bilgisayarda gerçek bir mikrofon hâlâ sınanmadı.
- **PDF içindeki hesap sayfaları ve gerekçeler** dosyanın özel bir girdisinde saklanır. Eski bir MarkupCraft bu girdiyi yok sayar ve dosyayı bir sonraki kaydedişinde siler; bu yüzden böyle bir dosyayı 0.8 veya daha yeni bir sürümle açıp kaydedin.
- **Kırmızı kalemlerin çizimci tarafı.** CadCraft'ın kırmızı kalem dosyasını okuyup yanıtlaması henüz yapılmadı.
- **Diğer diller.** Tamilce için uygulama çubuğu 528 px taşıyor.

Diğer her şey için bkz. [Henüz yapılmayanlar](topic:not-built-yet). Bir önceki sürüm için bkz. [0.7 sürümündeki yenilikler](topic:whats-new-0-7).

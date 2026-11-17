---
title: Sorun giderme
summary: MarkupCraft'ın gösterdiği iletiler ve bunlarla ilgili yapılacaklar, ayrıca çalışmadığı görünen şeylerin çözümleri.
keywords: sorun, hata, çalışmıyor, yardım, ileti, açılmıyor, kaydedilemiyor, parola, korumalı, ölçüm reddedildi, kalibre et, çevrimdışı, boş, yavaş, kaybolan işaretlemeler, soru işaretleri
from: bb650b39
---

Çoğu sorun, ekranın altındaki durum çubuğunda açıklanır. Önce onu okuyun.

## Dosya açma

**"MarkupCraft PDF dosyalarını açar. "x" bir PDF değil."**
Başka bir şey seçtiniz ya da bıraktınız. Yalnızca PDF dosyaları açılır. Önce çizimlerinizi CAD programınızdan PDF olarak dışa aktarın.

**'"name" açmak için parola gerektiriyor. Korumasız bir kopyayı açın.'**
PDF parola korumalı. Gönderenden korumasız bir kopya isteyin ya da parolasını bildiğiniz bir PDF programında açıp parolasız bir kopya kaydedin.

**'"name" PDF olarak okunamadı (…)'**
Dosya bozuk ya da gerçekte bir PDF değil (eksik indirme, kesilmiş bir e-posta eki). Yeniden indirin. Diğer PDF programları açabiliyorsa, onların "farklı kaydet" özelliğiyle temiz bir kopya oluşturun ve onu açın.

**"Bazı dosyalar açılmadı"**
Birden çok dosyayı aynı anda açtığınızda bu kutu, açılamayan dosyaları ve nedenini listeler. Diğerleri açıktır.

**"PDF okuyucu yüklenemedi: …"**
PDF motoru getirilemedi. Çevrimiçiyken: sayfayı yeniden yükleyin ve tekrar deneyin; bir güvenlik duvarının ya da içerik engelleyicinin siteyi engellemediğini kontrol edin. Çevrimdışıyken: MarkupCraft bu tarayıcıda çevrimdışı kullanım için kaydedilmemiştir (üstteki çubukta "Çevrimdışı hazır" yazmaz). Çevrimiçi olun, {{ui:Çevrimdışı için kaydet}} seçin ve "Çevrimdışı hazır" yazısını bekleyin. Bkz. [Çevrimdışı çalışma](common:offline).

**"Bazı açıklamalar ekranda iki kez görünebilir" ya da "Ek açıklama ayrıntıları okunamadı"**
Dosyanın mevcut açıklamaları alışılmadık. Yine de MarkupCraft'ın okuyabildiği kadarıyla açılırlar; güvenmeden önce kontrol edin. Kaydetme hâlâ çalışır.

**Sayfanın adı yanlış ya da "sayfa 3" görünüyor**
Bkz. [Sayfalar nasıl adlandırılır](topic:open-a-plan-set#how-sheets-get-their-names). Taranmış sayfaların okunacak metni yoktur; {{ui:Sayfayı yeniden adlandır}} seçeneğini kullanın.

**Aynı sayfalar iki kez görünüyor**
Aynı dosya iki kez açıldı. {{ui:Kapat}} seçin (gerekirse önce kaydedin) ve seti yeniden açın.

## Çizim ve seçim

**Sayfaya tıkladığımda hiçbir şey olmuyor**
Araç çubuğunda hangi aracın basılı olduğunu kontrol edin ve durum çubuğunu okuyun. {{ui:Dikdörtgen}}, {{ui:Elips}} ve {{ui:Bulut}} ile sürüklemeden yapılan bir tıklama hiçbir şey çizmez: sürükleyin. {{ui:Çoklu çizgi}}, {{ui:Çokgen}}, {{ui:Serbest bulut}} ve {{ui:Alan}} ile noktalar eklenir: çift tıklayarak ya da {{key:Enter}} tuşuyla bitirin.

**"Bir çokgen en az 3 noktaya ihtiyaç duyar." (çoklu çizgi için 2)**
Bitirmeden önce daha fazla nokta tıklayın.

**"Hiçbir şey yazılmadığı için metin eklenmedi."**
Metin kutuları ve çağrılar yalnızca metinleri varsa tutulur. Yeniden çizin ve tıklamadan önce yazın.

**"İki nokta aynı. İki farklı nokta tıklayın."**
Çizgiler, oklar, uzunluklar ve kalibrasyon için iki uç birbirinden uzak olmalıdır. Sürükleyin ya da farklı yerlerde iki kez tıklayın.

**Bir işaretlemeyi taşıyamıyor ya da silemiyorum; gri kesikli bir kutusu var**
Bu, dosyayla birlikte gelen salt okunur bir yorumdur (örneğin bir metin vurgusu). MarkupCraft onu olduğu gibi tutar: yalnızca ona yanıt verebilirsiniz. Durum çubuğu "salt okunur işaretlemeler dosyadaki gibi tutuldu" der.

**Tuşlarım araç seçmek yerine bir kutuya harf yazıyor**
İmleç bir metin kutusunda (bir yanıt, {{ui:Özellikler}} içinde bir alan, sayfa araması). Önce sayfa alanının boş bir kısmına tıklayın; işaretleme metni düzenliyorsanız {{key:Esc}} tuşuna basın.

**Boşluk tuşu kaydırmıyor ya da ok tuşları işe yaramıyor**
Az önce bir araç çubuğu düğmesine tıkladınız, bu yüzden klavye hâlâ onda. Bunun yerine orta fare tuşuyla sürükleyin ya da {{ui:Seç}} açıkken sayfaya bir kez tıklayıp yeniden deneyin. Ayrıca bkz. [Klavye ve fare](topic:keyboard#when-a-key-does-nothing).

**Dokunmatik ekranda iki parmakla yapılan bir hareket iz bıraktı**
Bir sürükleme aracı (kalem, bulut, dikdörtgen), ikinci parmak gelmeden önce başladı ve iptal edilmeden önce bitti. {{ui:Geri al}} seçin. Yakınlaştırmak istediğinizde iki parmağınızı birlikte indirin.

## Ölçüm

**"Önce bu sayfayı kalibre edin: bilinen bir uzaklıkta iki nokta seçin ya da ölçeğini seçin. Sonra ölçün."**
Her sayfanın, {{ui:Uzunluk}} ya da {{ui:Alan}} öncesinde kendi ölçeği olmalıdır. MarkupCraft {{ui:Kalibre et}} aracına geçti: bilinen bir ölçünün iki ucuna tıklayın ve uzunluğunu yazın ya da durum çubuğundaki ölçek düğmesine tıklayıp bir ölçek seçin. Bkz. [Bir sayfayı kalibre edin ve ölçün](topic:calibrate-and-measure).

**'Bu, MarkupCraft'ın anlayabildiği bir uzunluk değil.'**
Şöyle yazın: `24'-0"`, `12' 6 1/2"`, `7.2 m` ya da `900 mm`. Bkz. [Birimler, uzunluklar ve ölçekler](topic:units-and-scales).

**Ölçümler biraz ya da çok yanlış**
- Tam boyutta olmayan bir PDF üzerindeki hazır bir ölçek yanlış ölçer. Bunun yerine uzun, bilinen bir ölçüden kalibre edin.
- Binlik ayırıcı ondalık nokta olarak okundu: `1,200 mm` 1.2 mm anlamına gelir. `1200 mm` yazın.
- Uç noktalara tıklarken yakınlaştırın.
- Çizim ölçekli olmayabilir ("NTS").

**"Önce bir sayım grubu seçin, sonra kaldırmak için bir işarete Shift+tıklayın."**
{{ui:Seç}} seçin, sayım grubuna tıklayın, ardından {{ui:Say}} seçeneğini yeniden seçin ve noktaya {{key:Shift}}-tıklayın.

## Kaydetme

**"Bu PDF korumalı (şifreli), bu yüzden işaretlenmiş bir kopya yazılamaz."**
Dosya değişikliklere izin vermez. Korumasız bir kopya isteyin. Bu arada işaretlemeler listesini CSV ya da BCF olarak yine dışa aktarabilirsiniz.

**"PDF yazıcısı yüklenemedi: …"**
Genellikle çevrimdışısınızdır ve uygulama çevrimdışı kullanım için kaydedilmemiştir (üstteki çubukta "Çevrimdışı hazır" yok). İşaretlemeleriniz hâlâ sekmededir: sekmeyi açık tutun, çevrimiçi olun ve yeniden {{ui:Kaydet}} seçin. Ardından bir dahaki sefere çevrimdışıyken de çalışması için {{ui:Çevrimdışı için kaydet}} seçin; kaydedilen kopya PDF yazıcısını da içerir.

**"<file> kaydedilemedi"**
Kutu nedenini gösterir. İşaretlemeleriniz hâlâ sekmededir. Yeniden deneyin; tekrarlanırsa, yorumlar kaybolmasın diye CSV'yi dışa aktarın ve iletiyi bildirin.

**Kaydet seçtim, ama yalnızca bir dosya geldi**
Tarayıcınız ek indirmeleri engelledi. Adres çubuğundaki bir bildirime bakın ve bu sitenin birden çok dosya indirmesine izin verin, sonra yeniden kaydedin.

**Kaydedilen dosyayı bulamıyorum**
Tarayıcınızın indirilenler klasörüne gitti. Tarayıcınızın indirilenler listesini açın (Chrome ve Edge'de {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; Firefox ve Safari'de araç çubuğundaki indirme düğmesi) ve nereye gittiğini görün. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers).

**Bazı metinler diğer PDF görüntüleyicilerde "?" olarak görünüyor**
Batı Avrupa karakter kümesinin dışındaki karakterler, kopyada "?" olarak yazdırılır. Kaydetme iletisi bunları sayar. Bkz. [İşaretlenmiş PDF'yi kaydedin](topic:save-the-marked-up-pdf).

**Damga yarının (ya da dünün) tarihini gösteriyor**
Damga tarihleri UTC'dir. Bkz. [Damgalar ve yapışkan notlar](topic:stamps-and-notes).

## Çevrimdışı çalışma

**Çevrimdışı düğmesi "Kaydedilemedi" diyor**
Uygulamanın bazı dosyaları indirilemedi. Bağlantıyı kontrol edin ve düğmeye yeniden tıklayın; "Çevrimdışı hazır" yazana kadar "M içinden N kaydediliyor" yazısını gösterir.

**Çevrimdışı düğmesi "Çevrimdışı kullanılamıyor" diyor**
Bu tarayıcı penceresi çevrimdışı bir kopya tutamaz: gizli bir pencere ya da politikası bunu engelleyen bir bilgisayar. MarkupCraft'ı normal bir pencerede açıp yeniden deneyin.

**Çevrimdışıyken uygulama eski bir sürüm**
Çevrimdışı kopya, kaydettiğiniz sürümdür. Çevrimiçi olduğunuzda "Çevrimdışı hazır" yazısına tıklayın ve "Yeniden kaydet (en yeni sürümü al)" seçin. Yer açmak için "Çevrimdışı kopyayı kaldır" seçin. Bkz. [Çevrimdışı çalışma](common:offline).

**Yardım açılmıyor**
{{key:F1}} tuşuna basın (Mac'te **fn** ile) ya da üstteki çubukta {{ui:Yardım}} seçin. Çevrimdışıyken de çalışır.

## Kaybolan şeyler

**Sekmeyi kapattıktan ya da yeniden yükledikten sonra işaretlemelerim kayboldu**
MarkupCraft'ı aynı tarayıcıda yeniden açın: kaydedilmemiş işi "Çalışmanızı kurtarın?" diyerek geri sunar. {{ui:Kurtar}} seçin ve PDF'yi kaydedin. Kopyalar 30 güne kadar tutulur; gizli bir pencere ya da site verilerini temizlemek hiçbir kopya bırakmaz. Bkz. [Çalışmanızı kurtarın](common:recover).

**Adım, araç ayarlarım ya da araç sandığım kayboldu**
Bunlar yalnızca bu tarayıcıda tutulur ve temizlenmiş olabilir (site verileri temizlendi, gizli pencere, başka bir tarayıcı ya da bilgisayar veya Safari'nin uzun süredir ziyaret edilmeyen siteleri temizlemesi). Adınızı yeniden ayarlayın ve dışa aktardığınız sandığı içe aktarın. Bkz. [Bu tarayıcıda neler saklanır](topic:browser-storage).

**"Araç sandığı bu tarayıcıda tutulamadı (depolama kapalı veya dolu). Tutmak için dışa aktarın."**
Tarayıcı bu site için veri saklamayı reddediyor (gizli mod, bir ayar ya da politikayla engellenen depolama ya da dolu depolama). Sandığı değiştirdikten sonra dışa aktarın ve bir dahaki sefere içe aktarın.

## Görüntüleme ve hız

**Sayfa bir an bulanık görünüyor**
MarkupCraft, yakınlaştırırken ya da kaydırırken hızlı, kaba bir görüntü gösterir ve durduktan kısa bir süre sonra onu keskin olarak yeniden çizer.

**Büyük bir sette her şey yavaş**
Diğer ağır sekmeleri kapatın, aynı anda daha az dosya açın ve çok büyük sayfalarda en üst düzeye yakınlaştırmaktan kaçının. Bkz. [Birden çok dosyayla çalışın](topic:several-files#big-sets).

**Sayfa koyu, çizgiler açık**
{{ui:Model}} temasındasınız. Beyaz üzerinde koyu çizgiler için üstteki çubukta {{ui:Kâğıt}} seçin. İşaretlemeleriniz ve kaydedilmiş PDF etkilenmez.

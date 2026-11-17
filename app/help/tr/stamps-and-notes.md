---
title: Damgalar ve yapışkan notlar
summary: Bir sayfayı Onaylandı, Düzelt ve yeniden gönder ya da kendi metninizle damgalayın; açılır yorum olarak açılan yapışkan notlar bırakın.
keywords: damga, resim, görüntü, resim yapıştır, ekran görüntüsü, pano, logo, fotoğraf damgası, imza, imzala, onaylandı, notlarla onaylandı, düzelt ve yeniden gönder, reddedildi, incelendi, geçersiz, özel damga, yapışkan not, not, yorum, açılır pencere
from: 76026792
---

## Bir sayfayı damgalayın

1. {{ui:Damga}} ({{key:S}}) seçin.
2. Sağdaki {{ui:Özellikler}} içinde, {{ui:Damga}} altından bir damga seçin:
   - Onaylandı
   - Notlarla onaylandı
   - Düzelt ve yeniden gönder
   - Reddedildi
   - İncelendi
   - Geçersiz
   - Özel metin… (açılan kutuya en fazla 60 karakter yazın, ardından {{key:Enter}} tuşuna basın veya başka bir yere tıklayın)
3. Damganın gideceği yere sayfa üzerinde tıklayın. Ya da boyutunu seçmek için bir kutu sürükleyin.

Sonuç: büyük harflerle yazılmış, çerçeveli bir damga ve ikinci satırda "<adınız> tarafından, <tarih>" yazısı. Tıklayarak eklenen bir damga, yakınlaştırma düzeyinizde ekran için boyutlanır ve basılı sayfada 0.5 inç ile 1.25 inç arasında bir yükseklikte tutulur.

Seçtiğiniz damga, bir sonraki damga için de seçili kalır; bu tarayıcıda MarkupCraft'ı yeniden açsanız bile.

**Renkler anlama göre belirlenir:** Onaylandı damgaları yeşil, Düzelt ve yeniden gönder turuncu, Reddedildi ve Geçersiz kırmızı, İncelendi mavi, özel damgalar mor olur. {{ui:Özellikler}} içinde başka bir renk seçerseniz, o renk korunur.

### Sonra bir damgayı değiştirin

Damgayı seçin ve {{ui:Özellikler}} içinden başka bir damga seçin. Hâlâ otomatik rengindeyse, renk anlama göre değişir.

Damgadaki ad ve tarih, damganın yazarı ve oluşturulduğu gündür. Damgayı düzenlediğinizde değişmezler ve damganın yazarı değiştirilemez. Başka birinin adına damgalamak için, o kişi kendi adını ayarlamalı ve damgayı kendisi yapmalıdır.

:::note
Damgadaki tarih, Koordineli Evrensel Zaman (UTC) tarihidir. Amerika'da akşam geç saatlerde ya da Asya ve Avustralya'da sabahın erken saatlerinde, saatinizle karşılaştırıldığında bir sonraki ya da önceki günü gösterebilir. {{ui:Özellikler}} içindeki oluşturulma zamanı kendi saat diliminizdedir.
:::

### Sık kullandığınız damgalar

Araç sandığında "Notlarla onaylandı" damga aracı hazır gelir ve herhangi bir damgayı (metni ve rengiyle) kendi başına bir araç olarak kaydedebilirsiniz. Bkz. [Araç sandığı](topic:tool-chest).

Doldurulmuş alanları olan damgalar (alındığı tarih, proje numarası) henüz yapılmadı.

## Bir resim veya imzanızla damgalayın

{{ui:Özellikler}} içindeki damga listesi iki seçenekle biter:

- {{ui:Resim…}}, bu bilgisayardaki bir PNG, JPEG veya SVG dosyası ya da bir PDF sayfası ister; örneğin bir şirket mührü veya logo. Büyük resimler, uzun kenarı 1600 piksel olacak şekilde küçültülür; bir SVG veya PDF sayfası bu boyutta bir resme dönüşür.
- {{ui:İmzam…}} bir imza kutusu açar: fare, kalem veya parmakla imzalayın ve {{ui:Bu imzayı kullan}} seçin. {{ui:Temizle}} baştan başlatır. {{ui:İmza resmi kullan…}} bunun yerine imzanızın taranmış ya da fotoğraflanmış bir resmini kullanır: MarkupCraft beyaz kâğıdı saydam yapar ve resmi mürekkebe göre kırpar (PNG için önce sorar).

Ardından, resmi (genişliği 3 inç olan) ya da imzayı (genişliği 2 inç olan) yerleştirmek için sayfaya tıklayın ya da sığdırmak için bir kutu sürükleyin; oranlar korunur. Diğer işaretlemeler gibi tutamaçlarıyla boyutlandırın ({{key:Shift}} oranları korur).

Son resim bu tarayıcıda saklanır, böylece bir dahaki sefere hazır olur; {{ui:Başka bir resim seçin…}} onu değiştirir. Çizdiğiniz ya da yüklediğiniz her imza {{ui:İmzalarınız}} içinde saklanır (en fazla sekiz, en yenisi başta): kullanmak için birine tıklayın, kaldırmak için × simgesine tıklayın. Bkz. [Bu tarayıcıda neler saklanır](topic:browser-storage).

Kaydedilmiş PDF'de bir resim, resmi gösteren bir damga yorumudur; böylece her PDF görüntüleyici onu gösterir ve yazdırır. Burada çizilen bir imza, sizin imzanızın resmidir; sertifikalı bir dijital imza değildir.

## Panodan bir resim yapıştırın

Başka bir programda bir resim kopyalayın ya da panoya bir ekran görüntüsü alın, ardından sayfanın üzerinde {{key:Mod+V}} tuşlarına basın. Resim, imlecin bulunduğu yere yerleşir; oranları korunarak en fazla 3 inç genişlik ya da yükseklikte, taşınıp boyutlandırılabilen bir resim işaretlemesi olur. Kaydedilmiş PDF'de, yukarıdaki resimler gibi, resmi gösteren bir damga yorumudur.

{{ui:Diğer}} › {{ui:Resim yapıştır}} seçeneği, {{ui:Düzenle}} grubunda aynısını menüden yapar; tarayıcı önce sorabilir. Panoda bir resim yoksa, {{key:Mod+V}} daha önce olduğu gibi kopyalanan işaretlemeleri yapıştırır.

## Dosyadan bir resim ekleyin

{{ui:Düzenle}} grubunda {{ui:Diğer}} › {{ui:Dosyadan resim ekle…}} seçeneğini ya da sağ tık menüsündeki {{ui:Buraya resim ekle…}} seçeneğini seçin ve bir PNG, JPEG veya SVG dosyası ya da bir PDF seçin (birden çok sayfası olan bir PDF, hangisinin kullanılacağını sorar). Bir PNG, JPEG veya SVG dosyasını sayfanın üzerine sürükleyip bırakabilirsiniz: bıraktığınız yere yerleşir. Resim, en fazla 3 inç genişlik ya da yükseklikte bir işaretlemedir: diğer işaretlemeler gibi taşıyın ve boyutlandırın.

Resmi sayfanın bir parçası yapmak için {{ui:Özellikler}} içinde {{ui:Kaydederken sayfaya düzleştir}} kutusunu işaretleyin. Bkz. [Düzleştirilmiş bir kopya kaydedin](topic:flatten).

## Seçimden bir damga oluşturun

İşaretlemeleri seçin (ya da {{ui:İçerik}} aracıyla sayfa içeriğini) ve {{ui:Diğer}} içinde, sağ tık menüsünde ya da {{ui:Özellikler}} içindeki {{ui:Damga olarak kaydet…}} seçeneğinde {{ui:Seçimi damga olarak kaydet…}} seçeneğini seçin. Bir ad verin. Damga, araç sandığına gider: orada tıklayın, sonra herhangi bir sayfaya tıklayarak seçtiğiniz her şeyi birlikte, tıkladığınız yerin ortasına yerleştirin. Bkz. [Araç sandığı](topic:tool-chest).

## Yapışkan notlar

1. {{ui:Not}} ({{key:N}}) seçin.
2. Notun gideceği yere tıklayın. Yanında bir kutu olan küçük bir not simgesi belirir.
3. Notu yazın. Tutmak için kutunun dışına tıklayın ya da {{key:Mod+Enter}} tuşlarına basın; {{key:Esc}} ise notu atar.

Metin ve açıklamalardan farklı olarak, not hiçbir şey yazmasanız bile saklanır; böylece simgeyi şimdi yerleştirip sonra yazabilirsiniz.

- Notun sözleri, {{ui:Özellikler}} içindeki {{ui:Not}} alanıdır. Düzenlemek için simgeye çift tıklayın (ya da seçip {{key:Enter}} tuşuna basın).
- Sayfada yalnızca simgeyi görürsünüz. Diğer PDF görüntüleyiciler, tıklandığında metni açan standart bir yapışkan not gösterir.
- Simgenin rengini {{ui:Özellikler}} içindeki {{ui:Renk}} ile değiştirin.

Karşılıklı tartışma için bunun yerine herhangi bir işaretlemedeki yanıt dizisini kullanın: bkz. [Durumlar ve yanıtlar](topic:statuses-and-replies).

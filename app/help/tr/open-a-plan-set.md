---
title: Plan takımını açın ve sayfalar arasında geçin
summary: Tek bir PDF veya birçoğunu açın ya da boş sayfalarla başlayın; sayfaları numarasına veya adına göre bulun, yakınlaştırın ve kaydırın; dosya yanlış adlandırdığında bir sayfayı yeniden adlandırın.
keywords: aç, yeni, boş sayfa, boş yaprak, eskiz, ızgara, adsız, plan takımı, sayfalar, küçük resimler, sayfa etiketleri, sayfa numarası, künye, yeniden adlandır, gezin, yakınlaştır, kaydır, sığdır, sayfalarda ara
from: 1e7f4d50
---

## Takımı açın

1. Araç çubuğunda {{ui:Aç}} seçeneğini seçin veya {{key:Mod+O}} tuşlarına basın.
2. Dosya seçicide takımın her PDF'ini seçin ({{pick:mac=⌘ tuşunu basılı tutup her dosyaya tıklayın|windows linux=Ctrl tuşunu basılı tutup her dosyaya tıklayın}} veya Shift ile bir aralık seçin), ardından onaylayın.
   Veya dosyaları {{pick:mac=Finder|windows=File Explorer|linux=dosya yöneticiniz}} üzerinden sayfa alanına sürükleyin. Sürüklerken "Açmak için PDF'leri bırakın" görünür.
3. Durum çubuğu "<file> açılıyor…" yazarken bekleyin. Büyük dosyalarda sayıyı gösterir: "(60 sayfadan 10'u)".

Sonuç: {{ui:Sayfalar}} listesi, açtığınız sırayla her dosyanın her sayfasını gösterir ve durum çubuğu "3 dosya açıldı (takımda 42 sayfa)." gibi bir mesaj yazar. Dosyalarda zaten açıklamalar varsa, okunan açıklama sayısı da eklenir.

Takıma daha sonra dosya eklemek için onları aynı şekilde açın. Listenin sonuna eklenirler.

## Boş sayfalarla başlayın

Bir çizim olmadan eskiz yapmak veya not almak için PDF açmak yerine boş sayfalar oluşturun:

1. Araç çubuğunda {{ui:Yeni}} seçeneğini veya başlangıç ekranında {{ui:Boş bir sayfayla başla}} seçeneğini seçin ya da tarayıcınızın izin verdiği yerde {{key:Mod+N}} tuşlarına basın (masaüstü uygulaması ve Studio her zaman izin verir).
2. {{ui:Kâğıt boyutu}} seçin: Letter, Tabloid veya ANSI B, ARCH D, ARCH E, A4, A3 ya da A1 ve {{ui:Dikey}} veya {{ui:Yatay}}.
3. Bir {{ui:Izgara}} seçin: {{ui:Yok}}, {{ui:Noktalar}} veya {{ui:Kareler}}. Izgara inç kâğıtta her 1/4 inçte bir, her inçte daha kalın bir çizgiyle; metrik kâğıtta her 5 mm'de bir, her 10 mm'de daha kalın bir çizgiyle yapılır. Sayfaya basılır.
4. {{ui:Sayfalar}} sayısını 1 ile 20 arasında yazın, ardından {{ui:Oluştur}} seçeneğini seçin.

Sonuç: "Untitled-1.pdf" (ardından "Untitled-2.pdf" vb.) adlı yeni bir PDF, diğer dosyalar gibi açılır ve bu bilgisayarda oluşturulur. Her araç bunda çalışır; {{ui:Kaydet}} "Untitled-1 (marked up).pdf" dosyasını indirir. MarkupCraft seçimlerinizi bir sonraki kullanımınız için hatırlar.

Sayfaların ölçeği yoktur: durum çubuğu "Kalibre edilmedi" yazar. Izgara bir ölçek değildir. Ölçüm yapmak için sayfayı kalibre edin veya önce bir ölçek seçin; bkz. [Kalibre edin ve ölçün](topic:calibrate-and-measure).

Boş bir takıma sayfa eklemek için sayfalarından birini açın ve {{ui:Sayfalar}} listesinin altındaki {{ui:Boş sayfa ekle}} seçeneğini seçin. Yeni sayfa aynı kâğıt ve ızgaraya sahip olur ve sona eklenir. Her sayfa değişikliği gibi bu da geri alınamaz; bkz. [Sayfaları yazdırın ve değiştirin](topic:pages-and-printing).

## Sayfaların adları nasıl belirlenir

MarkupCraft her sayfayı "<sayfa numarası> — <başlık>" biçiminde adlandırır, örneğin "A-101 — Kat planı"; bunu bulduğu ilk şeye göre yapar:

1. {{ui:Sayfayı yeniden adlandır}} ile yazdığınız bir ad (aşağıda).
2. PDF'in kendi sayfa etiketleri; bunları PDF'i hazırlayan kişi belirlemişse (örneğin "A-101").
3. Künye: MarkupCraft sayfanın metnini okur ve bir sayfa numarasına benzeyen bir şey arar (A-101, A1.01, M-201A, KA1-1); sağ alt köşeye, sağ şeride ve alt bantta öncelik verir, yakınındaki en büyük yazıyı başlık olarak alır.
4. Yoksa dosya adı ve sayfa: "Planlar — sayfa 3".

Hangisinin kullanıldığını görmek için {{key:Esc}} tuşuna, hiçbir şey seçili olmayana kadar basın ve {{ui:Seç}} açık olsun, sonra {{ui:Özellikler}} bölümüne bakın: "Okunan yer" alanı "Sayfa etiketi", "Künye", "Dosya adı" veya "Elle yazıldı" yazar.

:::note
Taranmış sayfalarda ve çizgi olarak dışa aktarılmış harflere sahip PDF'lerde okunacak metin yoktur. Bunlar, siz yeniden adlandırana kadar dosya ve sayfaya göre adlandırılır. MarkupCraft resimlerdeki metni henüz okuyamaz.
:::

## Sayfalar arasında geçin

- {{ui:Sayfalar}} listesinde bir sayfaya tıklayın.
- Sonraki sayfa için {{key:PageDown}}, önceki sayfa için {{key:PageUp}} tuşuna basın veya sayfanın altındaki çubuktaki okları kullanın.
- {{ui:Sayfalarda ara}} alanına yazın: numaranın bir parçası ("A-2"), başlığın bir sözcüğü ("çatı") veya bir dosya adı. Yazdıkça liste daralır ("42 sayfadan 4'ü"). İlk eşleşmeyi açmak için {{key:Enter}} tuşuna basın. Tüm sayfaları yeniden görmek için kutuyu temizleyin.

Takımı kapatana kadar her sayfa kendi yakınlaştırma düzeyini ve konumunu korur.

## Yakınlaştırma ve kaydırma

:::mouse
- **Yakınlaştırma:** sayfanın üzerinde fare tekerleğini çevirin. İmleç etrafında yakınlaştırır. Veya {{key:Plus}} ve {{key:Minus}} tuşlarına basın ({{key:Mod}} ile de) ya da yakınlaştırma düğmelerini kullanın. Yakınlaştırma kutusuna tam bir yüzde yazın.
- **Sığdırma:** {{ui:Sayfaya sığdır}} ({{key:Mod+0}}) tüm sayfayı gösterir; {{ui:Genişliğe sığdır}} ({{key:Mod+9}}) genişliği doldurur.
- **Kaydırma:** orta düğmeyle (tekerlek) sürükleyin, veya sağ düğmeyle sürükleyin, veya {{key:Space}} tuşunu basılı tutup sürükleyin ya da {{ui:Kaydır}} ({{key:H}}) seçip sürükleyin. Hiçbir şey seçili değilken ok tuşları da sayfayı hareket ettirir.
:::

:::mac mouse
Mac izleme dörtgeninde iki parmakla kaydırma yakınlaştırır (sayfayı kaydırmaz). Kaydırmak için {{key:Space}} tuşunu basılı tutup tek parmakla sürükleyin veya {{key:H}} ile {{ui:Kaydır}} aracına geçin. Chrome, Edge ve Firefox'ta çimdikleme yakınlaştırır.
:::

:::touch
- **Yakınlaştırma ve kaydırma:** sayfaya iki parmak koyun. Parmaklarınızı açın veya kapatın; aralarındaki noktanın etrafında yakınlaşır. Birlikte hareket ettirirseniz kaydırır. İkisi aynı anda olur.
- **Tek parmakla kaydırma:** önce {{ui:Kaydır}} seçin. Başka bir araçla tek parmak çizer veya seçer.
- {{ui:Sayfaya sığdır}} ve {{ui:Genişliğe sığdır}} sayfanın altındaki çubuktadır.
:::

Tüm sayfanın çok ötesine uzaklaşabilir ve %6400'e kadar yakınlaşabilirsiniz. Hareketi bıraktıktan kısa bir süre sonra sayfa keskin olarak yeniden çizilir.

## Yer imleri

{{ui:Yer imleri}}, {{ui:Sayfalar}} panelinin en üstünde, açık sayfanın ait olduğu PDF'in yer imlerini (ana hat) gösterir. Birini seçip sayfasına gidin. Kalem simgesi bir yer imini yeniden adlandırır, çarpı simgesi kaldırır. {{ui:Sayfalardan oluştur}} her sayfa için bir yer imi oluşturur; adları sayfalar listesinde gösterildiği gibi (sayfa numarası ve başlık) olur. {{ui:Bu sayfa için ekle}} ise bulunduğunuz sayfa için bir tane ekler. Değişiklikler dosyanın kaydedilmemiş işinin parçasıdır: {{ui:Kaydet}} bunları kopyaya yazar ve her PDF görüntüleyicisi bunları gösterir.

## Görünümü döndürün

Sayfanın altındaki çubuğun sağındaki iki döndürme düğmesi, görünümü bir çeyrek tur sağa veya sola çevirir; yan çizilmiş bir sayfa için. Yalnızca görünüm döner: PDF ve işaretlemeleri olduğu gibi kalır; bir sonraki sayfa kendi PDF'inin açılış şekliyle açılır (takım açıkken her sayfa kendi dönüşünü hatırlar). Döndürülmüş görünümde eklediğiniz metin, gördüğünüz gibi dik okunur. Kaydedilen PDF'te sayfanın kendisini döndürmek için {{ui:Sayfalar}}, ardından {{ui:Sayfayı saat yönünde döndür}} seçeneğini kullanın; bkz. [Sayfaları yazdırın ve değiştirin](topic:pages-and-printing).

## Sayfayı yeniden adlandırın

Bir sayfanın adı yanlış veya eksikse:

1. Sayfayı gösterin.
2. Hiçbir şey seçili olmayana ve {{ui:Seç}} aracı açık olana kadar {{key:Esc}} tuşuna basın. {{ui:Özellikler}} artık sayfayı gösterir.
3. {{ui:Sayfayı yeniden adlandır}} seçeneğini seçin.
4. {{ui:Sayfa numarası}} ve {{ui:Başlık}} alanlarını yazın, ardından {{ui:Kaydet}} seçeneğini seçin.

Sonuç: sayfalar listesi, sayfanın altındaki çubuk ve işaretlemeler listesinin tümü yeni adı kullanır ve "Okunan yer" alanı "Elle yazıldı" yazar. Yeniden adlandırma {{key:Mod+Z}} ile geri alınabilir.

Dosyanın söylediğine geri dönmek için {{ui:Sayfayı yeniden adlandır}} seçeneğini yeniden açın, iki kutuyu da temizleyin ve {{ui:Kaydet}} seçeneğini seçin.

Kaydettiğinizde yazılan sayfa numarası PDF'te sayfanın etiketi olur; böylece diğer PDF görüntüleyiciler sayfa kutusunda "A-101" gösterir. Bir dosyanın herhangi bir sayfasına numara verirseniz, dosyanın her sayfası kopyada bir etiket alır (yazdığınız numara, yoksa eski etiketi, yoksa sayfa numarası). Yazılan başlık MarkupCraft için saklanır, diğer görüntüleyiciler göstermez.

## PDF'i TakeoffCraft'a götürün veya buraya getirin

TakeoffCraft aynı yerde açıkken (laboratuvar, Try veya çevrimiçi uygulamalar), sayfanın altındaki çubukta {{ui:TakeoffCraft'ta aç}} bulunur. Sayfanın PDF'ini burada açıldığı gibi yeni bir sekmede TakeoffCraft'ta açar, böylece miktarları ölçebilirsiniz. İşaretlemeleriniz burada kalır; her zamanki gibi kaydedin.

TakeoffCraft'ın {{ui:MarkupCraft}} düğmesi aynısını tersi yönde yapar: PDF, {{ui:Aç}} seçmişsiniz gibi burada açılır. Tarayıcı yeni sekmeyi engellerse bu site için açılır pencerelere izin verin ve düğmeyi yeniden seçin.

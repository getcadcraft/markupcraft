---
title: Ekrana bir bakış
summary: Araç çubuğu, sayfalar listesi, sayfa alanı, sağdaki beş panel ve durum çubuğu; ekrandaki adlarıyla.
keywords: ekran, düzen, araç çubuğu, paneller, kenar çubuğu, küçük resimler, özellikler, durum çubuğu, arayüz, tam ekran, tema, koyu mod
from: 18d82de6
---

MarkupCraft tarayıcı penceresini doldurur. Yukarıdan aşağıya ve soldan sağa:

## En üstteki çubuk

Her şeyin üstündeki ince çubuk MarkupCraft'a değil, CadCraft ailesine aittir. Şunları içerir:

- uygulamanın adı ve hangi sürümü çalıştırdığınız,
- uygulamanın web sitesindeki sayfasını açan {{ui:MarkupCraft hakkında}},
- bu yardımı yan panelde açan {{ui:Yardım}} (veya {{key:F1}} tuşuna basın),
- MarkupCraft'ı, PDF okuyucusunu ve yazıcısını ve bu yardımı bu tarayıcıda saklayan {{ui:Çevrimdışı için kaydet}}; böylece bağlantı olmadan açılır ve sonra "Çevrimdışı hazır" der (bkz. [Çevrimdışı çalışma](common:offline)),
- ekran kipi düğmesi ({{ui:Tam ekran}}) ve
- {{ui:Ayarlar}} (veya {{key:Mod+,}}); bu uygulamanın kendi ayarları için bir {{ui:MarkupCraft}} sekmesi ve her CadCraft uygulamasının ortak kullandıkları için {{ui:Genel}} sekmesi vardır (bkz. [MarkupCraft ayarları](topic:settings)) ve
- açık ve koyu temalar olan {{ui:Kâğıt}} ve {{ui:Model}}. {{ui:Model}} içinde sayfalar koyu zemin üstüne açık renkle çizilir; işaretlemeleriniz kendi renklerini korur.

Ekran kipi düğmesi veya {{key:Ctrl+Shift+F}} üç kip arasında dolaşır: normal, tam ekran ve çubukları gizli tam ekran. Çubuklar gizliyken işaretçiyi ekranın üst kenarına götürün (veya oraya dokunun), çubuklar geri kayar. Bu kısayol Mac dahil her bilgisayarda Control tuşunu kullanır.

:::note
Tam ekranda {{key:Esc}} tarayıcının da tam ekrandan çıkmasını sağlar. Yalnızca bir çizimi iptal etmek istediyseniz tam ekrana dönmek için {{key:Ctrl+Shift+F}} tuşlarına yeniden basın.
:::

## Araç çubuğu

Üst çubuğun altında araçlar gruplanmış ve etiketlenmiştir:

| Grup | Düğmeler |
|---|---|
| Dosya | {{ui:Aç}}, {{ui:Kaydet}}, {{ui:Kapat}} |
| Seç | {{ui:Seç}}, {{ui:Kaydır}} |
| Çiz | {{ui:Kalem}}, {{ui:Vurgula}}, {{ui:Çizgi}}, {{ui:Ok}}, {{ui:Dikdörtgen}}, {{ui:Elips}}, {{ui:Çoklu çizgi}}, {{ui:Çokgen}} |
| Revize et | {{ui:Bulut}}, {{ui:Serbest bulut}} |
| Açıklama ekle | {{ui:Çağrı}}, {{ui:Metin}}, {{ui:Not}}, {{ui:Damga}} |
| Ölç | {{ui:Kalibre et}}, {{ui:Uzunluk}}, {{ui:Alan}}, {{ui:Say}} |
| Düzenle | {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}}, {{ui:Yapıştır}} ve {{ui:Diğer}}: {{ui:Kes}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Olduğu yere yapıştır}}, {{ui:Çoğalt}}, {{ui:Sil}}, {{ui:Tümünü seç}}, {{ui:Seçimi kaldır}} |

Kullandığınız araç basılı görünür. Tuşunu görmek için işaretçiyi bir düğmenin üzerinde tutun (örneğin "Dikdörtgen (R)"); {{ui:Diğer}} menüsü her komutun tuşunu yanında listeler. O an çalışamayan düğmeler soluktur: bir işaretleme seçene kadar {{ui:Kopyala}}, bir şey kopyalanana kadar {{ui:Yapıştır}}. {{ui:Kaydet}} sonrasındaki küçük bir nokta, bazı işaretlemelerin henüz kaydedilmediği anlamına gelir. Tuşların tam listesi [Klavye ve fare](topic:keyboard) konusundadır.

Bir araç, onunla çizdikten sonra da açık kalır; böylece art arda birkaç bulut çizebilirsiniz. {{ui:Seç}} aracına dönmek için {{key:Esc}} (yeni işaretleme hâlâ seçiliyse iki kez) veya {{key:V}} tuşuna basın.

## Sayfalar listesi (sol)

{{ui:Sayfalar}}, açık her PDF'in her sayfasını listeler. Her satır sayfanın küçük bir resmini, adını, sayfa numarasını veya dosya ve sayfasını ve kaç işaretlemesi olduğunu gösterir. Başlıktan sonraki sayı, sayfaların sayısıdır.

- O sayfayı göstermek için bir satıra tıklayın.
- Sayfa adına, sayfa numarasına veya dosya adına göre süzmek için {{ui:Sayfalarda ara}} alanına yazın. İlk eşleşmeyi açmak için {{key:Enter}} tuşuna basın.

Sayfa adları, PDF'te varsa PDF'ten gelir. Bkz. [Bir plan takımını açma ve sayfalar arasında gezinme](topic:open-a-plan-set).

## Sayfa alanı (orta)

Üzerinde çalıştığınız sayfa. Hiçbir şey açık değilken bir {{ui:PDF'leri aç}} düğmesiyle birlikte "Bir plan takımı açın" gösterir. PDF'leri açmak için buraya herhangi bir yere bırakın.

Sayfanın altındaki dar çubukta şunlar vardır:

- önceki ve sonraki sayfa okları ve "3 / 12: A-101 — Floor plan" (dosyayı ve sayfayı görmek için işaretçiyi üzerinde tutun),
- uzaklaştır, yakınlaştırma kutusu (bir yüzde yazıp {{key:Enter}} tuşuna basın; %100 tipik bir ekranda gerçek boyuttur), yakınlaştır,
- {{ui:Sayfaya sığdır}} ve {{ui:Genişliğe sığdır}}.

Her sayfa, takım açıkken kendi yakınlaştırmasını hatırlar.

İki sayfayı karşılaştırdığınızda burada bir gösterge görünür: "Yalnızca eski sayfada", "Yalnızca yeni sayfada" ve "İkisinde de". Bkz. [İki revizyonu karşılaştırma](topic:compare-revisions).

## Paneller (sağ)

Beş sekme:

| Sekme | Ne gösterir |
|---|---|
| {{ui:Özellikler}} | Seçili işaretleme: yazar, tarihler, ölçülen değerler, durum, konu, metin, yorum, stil, yanıtları ve eksik iş kalemi. Bir çizim aracı açıkken ve hiçbir şey seçili değilken, yeni işaretlemelerin kullanacağı ayarlar. Hiçbir şey seçili değilken ve {{ui:Seç}} açıkken sayfa: numara, başlık, adın nereden okunduğu, kâğıt boyutu, ölçek ve {{ui:Sayfayı yeniden adlandır}}. |
| {{ui:İşaretlemeler}} | Açık takımdaki her işaretleme, süzgeçlerle birlikte ve {{ui:CSV}} ile {{ui:BCF}} dışa aktarmaları. Bkz. [İşaretleme listesi](topic:markups-list-and-export). |
| {{ui:Eksik işler listesi}} | Atanan kişi, bitiş tarihi ve durumuyla numaralı eksik iş kalemleri. Bkz. [Eksik işler listesi hazırlama](topic:punch-list). |
| {{ui:Araçlar}} | Araç kutusu: kaydedilmiş, stilli araçlar. Bkz. [Araç kutusu](topic:tool-chest). |
| {{ui:Karşılaştır}} | İki sayfayı üst üste bindirme. Bkz. [İki revizyonu karşılaştırma](topic:compare-revisions). |

## Durum çubuğu (alt)

- Solda, işaretçinin sayfada nerede olduğu; kâğıt üzerinde inç cinsinden (veya [Ayarlar](topic:settings) içinde seçerseniz milimetre).
- Ortada iletiler: bir aracın sırada ne beklediği, az önce ne kaydedildiği, bir şeyin neden reddedildiği. **Bir şey olmadığında buraya bakın.**
- Sayfanın ölçek düğmesi ("Kalibre edilmedi" veya ölçek). Ölçeği ayarlamak için tıklayın. Bkz. [Bir sayfayı kalibre etme ve ölçme](topic:calibrate-and-measure).
- Adınız (siz bir ad verene kadar "Adınızı belirleyin"). Değiştirmek için tıklayın.

## Küçük ekranda

Yaklaşık 1180 piksel genişliğin altında paneller daralır ve sayfa resimleri küçülür. Telefon boyutundaki bir ekranda bölümler üst üste dizilir: araç çubuğu (yana kaydırın), sayfa, durum çubuğu, paneller, en altta da sayfalar listesi. Yatay konumdaki bir tablet tam düzeni korur.

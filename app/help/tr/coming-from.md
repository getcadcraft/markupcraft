---
title: Başka işaretleme yazılımlarından geliyorum
summary: Masaüstü bir PDF işaretleme programının alışkanlıklarının MarkupCraft'a nasıl karşılık geldiği ve insanları şaşırtan farklılıklar.
keywords: geçiş, geçiş yapma, taşıma, tanıdık, masaüstü pdf işaretleme, araç sandığı, işaretleme listesi, üst üste bindirme, oturumlar, profil, kısayollar, farklılıklar
from: c8f323e1
---

Bluebeam Revu'da çizimleri inceliyorsanız (veya başka bir masaüstü PDF programında PDF'lere yorum yapıyorsanız), MarkupCraft'ın çoğu size tanıdık gelecektir: bulutlar, çağrılar, bir araç sandığı, bir işaretleme listesi, yorumlu durumlar, ölçülmüş ölçümler, sayfa üst üste bindirmeleri. Dosyaların ele alınma biçimi en büyük farktır; bu yüzden geri kalanını atlasanız bile sonraki bölümü okuyun.

## Önemli beş fark

1. **Kaydetmek yeni bir dosya oluşturur.** MarkupCraft tarayıcıda çalışır ve diskinizdeki PDF'in üzerine yazamaz. {{ui:Kaydet}} "<name> (marked up).pdf" dosyasını indirir ve orijinal olduğu gibi kalır. Bir dahaki sefer "(marked up)" kopyasını açın ve eski kopyaları kendiniz düzenleyin.
2. **Kaydettiğinizde PDF kaydedilir.** O zamana kadar bu tarayıcıdaki bir kurtarma kopyası işaretlemelerinizi bir çökme veya kapatılmış bir sekmeye karşı korur ve MarkupCraft bunu bir sonraki sefer size geri sunar. Bu bir güvenlik ağıdır: incelemeyi tutmak için PDF'i kaydedin.
3. **Profiliniz tarayıcıda yaşar.** Yazar adınız, araç ayarlarınız ve araç sandığınız bu bilgisayarda bu tarayıcıda tutulur. Farklı bir tarayıcı veya bilgisayar baştan başlar ve site verilerini temizlemek bunları siler. Araç sandığınızı yedek olarak dışa aktarın. Bkz. [Bu tarayıcıda ne kalır](topic:browser-storage).
4. **Henüz ortak oturum yok.** Canlı, ortak bir inceleme oturumu ve bulut projesi yoktur. İnceleme PDF ile taşınır: kaydedin, kopyayı gönderin, bir sonraki kişi yanıt verip kaydeder.
5. **Ölçek sayfa başınadır ve yalnızca sayfa başınadır.** Bir sayfanın içinde görünüm penceresi yoktur ve "bu ölçeği tüm sayfalara uygula" seçeneği yoktur. Ölçüm yaptığınız her sayfayı kalibre edin.

## Alışkanlık başına

| Alıştığınız | MarkupCraft'ta |
|---|---|
| Küçük resimler paneli, sayfa etiketleri | Solda {{ui:Sayfalar}}. Adlar sayfa etiketlerinden gelir veya künyeden okunur; {{ui:Sayfayı yeniden adlandır}} ile düzeltin. |
| Birden çok PDF'i takım olarak açmak | Hepsini birlikte açın; tek bir liste olurlar. Takım dosyası kaydedilmez: bir dahaki sefer aynı PDF'leri açın. |
| Araç setleri olan araç sandığı | {{ui:Araçlar}} sekmesi: tarayıcı başına bir sandık, stil ve konu ile kaydedilmiş araçlar. {{ui:Dışa aktar}} ve {{ui:İçe aktar}} ile bir JSON dosyası olarak paylaşın. Diğer programlardan gelen araç seti dosyaları içe aktarılamaz. |
| Özellikler paneli | {{ui:Özellikler}} sekmesi: durum, konu, yorum, stil, yanıtlar ve eksik iş öğesi tek yerde. |
| Sütunları olan işaretleme listesi | Sayfa, yazar, durum ve tür süzgeçleri olan {{ui:İşaretlemeler}} sekmesi. CSV veya BCF dışa aktarın. Özel sütun yok, henüz PDF veya çalışma kitabı özeti yok. |
| Durum ve inceleme durumu | {{ui:Durum}}: Açık, Kabul edildi, Reddedildi, Tamamlandı. Özel durum kümesi yok. Standart inceleme durumları olarak kaydedilir. |
| Bir işaretleme üzerindeki yanıtlar | {{ui:Özellikler}} içindeki "Yanıtlar" konusu; durum değişiklikleri orada kaydedilir. Gönderilmiş bir yanıt düzenlenemez. |
| Ölçekle, sonra uzunluk, alan, sayım | {{ui:Kalibre et}}, {{ui:Uzunluk}} ({{key:M}}), {{ui:Alan}} ({{key:Q}}, alan ve çevre verir), {{ui:Say}} ({{key:U}}). Henüz açı, yarıçap, hacim, çoklu uzunluk veya boşluk yok. |
| Sayfaları üst üste bindirme | {{ui:Karşılaştır}} sekmesi: eski için kırmızı, yeni için mavi, iki noktayla hizalama. Otomatik "belgeleri karşılaştır" bulutlaması yok. |
| Damgalar | Altı yerleşik damga ve özel metin ile {{ui:Damga}}, adınız ve tarihle imzalanır. Henüz resim veya imza damgası yok. |
| Eksik iş veya sorun takibi | {{ui:Eksik iş listesi}} sekmesi: atanan kişi, bitiş tarihi ve durumu olan numaralı öğeler; CSV dışa aktarma. |
| Canlı işbirliği oturumu | Henüz kullanılamıyor. Kaydedilmiş PDF'i dolaştırın. |
| Düzleştirme | Henüz yapılmadı. İşaretlemeler, diğer görüntüleyicilerin gösterebildiği ve yazdırabildiği yorumlar olarak kalır. |
| İşaretlemeler için katmanlar | Henüz yapılmadı. Yorumları sıralamak için konuları, yazarları ve liste süzgeçlerini kullanın. |
| Sayfalar arası köprüler | Henüz yapılmadı. |
| Kaydırmak için Boşluk tuşu, yakınlaştırmak için tekerlek | Aynı: {{key:Space}} tuşunu basılı tutup sürükleyin; tekerlek işaretçinin olduğu yerde yakınlaştırır. Tekerlek sayfayı asla kaydırmaz. |

## Farklı çalışan tuşlar

Birçok tek harfli tuş beklediğiniz gibidir, ama parmaklarınız bunları sizin yerinize yapmadan önce şunları kontrol edin:

- {{key:K}} {{ui:Çağrı}} aracıdır, {{key:Q}} ise {{ui:Alan}}dır. Çağrılar için Q'ya alışkınsanız burada bir alan başlatır.
- {{key:C}} kutu {{ui:Bulut}} aracıdır; {{key:Shift+C}} {{ui:Serbest bulut}}tur.
- {{key:M}} {{ui:Uzunluk}}, {{key:U}} {{ui:Say}}, {{key:Y}} {{ui:Çoklu çizgi}}, {{key:G}} {{ui:Çokgen}}, {{key:I}} {{ui:Vurgula}}dır.
- {{key:Mod+D}} seçimi çoğaltır (tarayıcının yer imi yerine).
- {{key:Mod+Plus}} ve {{key:Mod+Minus}} tarayıcı sayfasını değil, sayfayı yakınlaştırır.
- Her tuş değiştirilebilir: aşağıya bakın.

:::tip
Parmaklarınız Bluebeam Revu'yu biliyorsa, {{ui:Ayarlar}} › {{ui:MarkupCraft}} › {{ui:Menüler, tuşlar ve fare}} içinde {{ui:PDF incelemesi}} menü stilini seçin: inceleme araçlarının bir satırının üzerinde bir menü çubuğu (Dosya, Düzenle, Görünüm, Belge, İşaretleme, Ölçüm, Pencere); çağrı için {{key:Q}}, vurgulayıcı için {{key:H}}, çokgen için {{key:N}} ve ölçümler {{key:Alt+Shift}} ile bir harfte. Orada her tuş da değiştirilebilir. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).
:::

Tam liste [Klavye ve fare](topic:keyboard) bölümündedir.

## Beklediğinizden farklı çalışanlar

- **Araçlar açık kalır.** Bir buluttan sonra hâlâ bulut çiziyorsunuz. {{key:Esc}} bir kez seçimi temizler, iki kez {{ui:Seç}} aracına döner.
- **Metin ve çağrılar metin ister.** Hiçbir şey yazmadan bitirirseniz işaretleme eklenmez. Notlar boş tutulur.
- **Ölçümler önce ölçek ister.** Kalibre edilmemiş bir sayfada {{ui:Uzunluk}} ve {{ui:Alan}} {{ui:Kalibre et}} aracına geçer ve sonra geri döner.
- **Diğer programlardan yorumlar.** Başka yerlerde yapılmış dikdörtgenler, elipsler, çizgiler, çoklu çizgiler, çokgenler, mürekkep, metin kutuları ve yapışkan notlar düzenlenebilir MarkupCraft işaretlemeleri olur ve kaydettiğinizde MarkupCraft'ın yöntemiyle yeniden yazılır (görünümleri hafifçe değişebilir). Metin vurguları, diğer programların damgaları ve diğer özel türler salt okunurdur: bunlara yanıt verebilirsiniz, değiştiremezsiniz.
- **Batı Avrupa harfleri dışındaki karakterler**, kaydedilmiş PDF'te "?" olarak yazdırılır. Bkz. [İşaretlenmiş PDF'i kaydedin](topic:save-the-marked-up-pdf).
- **Damga tarihleri** UTC kullanır; bu yüzden Amerika'da akşam geç saatte yapılan bir damga yarının tarihini gösterebilir.
- **Ölçümler**, standart ölçüm yorumları olarak aktarılır ve her kalibre edilmiş sayfa ölçeğini korur; bu yüzden PDF ölçümlerini okuyan bir program bunları genellikle gösterebilir. Tam davranış o programa bağlıdır.

## İki programı birlikte kullanma

Aralarında gidip gelebilirsiniz. Başka yerlerde yapılan yorumlar MarkupCraft'ta açılır ve "(marked up)" PDF, her işaretleme, yanıt ve durum görünür olarak diğer PDF programlarında açılır. Yalnızca MarkupCraft'ın okuduğu bilgiler (eksik iş atanan kişisi ve bitiş tarihi, öğe durumu) MarkupCraft için dosyada tutulur.

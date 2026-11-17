---
title: Sayfa bağlantıları
summary: Bir işaretlemeyi başka bir sayfaya atlatın ve 3/A-501 gibi her sayfa çağrısını, Toplu bağlantılar ile tek seferde sayfasına ve görünümüne bağlayın.
keywords: bağlantı, bağlantılar, atla, sayfa çağrısı, ayrıntı çağrısı, kesit çağrısı, 3/A-501, sayfaya git, geri, otomatik bağlantı, toplu bağlantı, toplu bağlantılar, künye, sayfa numarası, sayfa adı, görünüm, ayrıntı, yeniden adlandır, yeniden numaralandır, ek, pdf bağlantısı
from: 86a17c37
---

Sayfa bağlantısı sizi bir işaretlemeden kümenin başka bir sayfasına götürür: bir ayrıntı balonundan ayrıntıya, bir nottan ona başvurduğu sayfaya.

## İşaretlemeyi bir sayfaya bağlayın

1. İşaretlemeyi seçin.
2. {{ui:Özellikler}} içinde {{ui:Sayfaya bağlantı}} altından sayfayı seçin.

İşaretlemenin sağ üstünde küçük bir ok belirir. Bunu izlemek için {{key:Mod}} tuşunu basılı tutup işaretlemeye tıklayın veya seçip {{ui:Özellikler}} içinde {{ui:… git}} öğesini seçin. {{key:Alt+Left}} sizi geldiğiniz sayfaya geri götürür.

Bir bağlantı sayfayı numarasıyla adlandırır; bu nedenle kümeyi yeniden açtıktan veya yeni bir sürümü ara sayfayla eklemeden sonra da çalışmaya devam eder: o numaraya sahip en yeni sayfayı açar. Bu sayfa açık değilse durum çubuğu bunu bildirir.

## Her sayfa çağrısını bir seferde bağlayın

{{ui:Sayfalar}} › {{ui:Toplu bağlantılar…}} seçeneğini belirleyin veya {{ui:Sayfalar}} panelinin üstündeki {{ui:Metin bul}} altındaki {{ui:Sayfa çağrılarını bağla…}} seçeneğini belirleyin.

1. **Sayfa numaralarını denetleyin.** MarkupCraft açık her sayfayı, sayfanın künyesinden (veya sayfa etiketinden) okuduğu numara ve adla, ayrıca her birinin nereden geldiğiyle listeler. Yanlış olanları düzeltin ve hiçbir numara bulamadığı yerlere bir numara yazın (numarası çizgi olarak basılmış bir künyede okunacak metin yoktur). Sonra {{ui:Çağrıları bul}} seçeneğini belirleyin. Düzeltmeleriniz tek bir geri alma adımıdır ve kaydedilen PDF'de sayfa etiketleri olurlar.
2. **Listeyi gözden geçirin.** MarkupCraft her sayfanın metnini "3/A-501", "5 / A501", "DETAIL 2 ON A-501" gibi çağrılar, "A-501" üzerinde "3" yazan bir balon veya bir nottaki düz bir "A-501" için okur; ayrıca her sayfanın görünüm başlıklarını okur (altında sayfa numarası olan bir ayrıntı numarası veya yanında bir başlık olan büyük bir numara). Liste üç bölümden oluşur:
   - {{ui:Bağlanacaklar}}: her çağrı, gittiği sayfa ve o sayfadaki görünüm. İstemediğiniz herhangi birinin işaretini kaldırın. Görünüm bulunamadıysa (görünümleri 1 ila 6 olan bir sayfaya görünüm 7 çağrısı), yanındaki listeden görünümü seçin veya {{ui:Tüm sayfa}} olarak bırakın.
   - {{ui:Bağlanmayanlar}}: açık hiçbir sayfada bulunmayan sayfa numaraları ve her birini kaç çağrının andığı. Her birinin neyi kastettiği sayfayı seçin (örneğin yeniden numaralandırılmış bir sayfa); o numaraya yapılan her çağrı ona bağlanır. Ya da bağlanmamış bırakın.
   - Zaten bağlanmış ve hâlâ doğru yere giden çağrıların sayısı. Oldukları gibi bırakılırlar.
3. {{ui:Bağlantıları oluştur}} seçeneğini belirleyin.

Her çağrı, sayfa bağlantısı olan ince mavi bir kutu alır. Üzerine {{key:Mod}}+tıklama, sayfayı görünüme yakınlaştırılmış olarak açar. Tek bir {{key:Mod+Z}} hepsini kaldırır.

R-19 veya W12X26 gibi yalnızca sayfa numarasına benzeyen kodlar dışarıda bırakılır: bir çağrı, kümenin kendi sayfa numaralarına benzer biçimde olmalıdır. Bir sayfanın kendi numarası, künyesinde ve görünüm başlıklarında, asla bir çağrı olmaz. Taranmış sayfaların okunacak metni yoktur: önce {{ui:Metni oku (OCR)…}} kullanın veya çağrılarını tek tek bağlayın.

## Küme değiştiğinde yeniden çalıştırın

Toplu bağlantılar istediğiniz kadar sık çalıştırılabilir:

- **Bir sayfa eklendi**, örneğin A-601 ile bir ek: dosyasını açın ve Toplu bağlantılar'ı yeniden çalıştırın. Daha önce bağlanmamış A-601 çağrıları artık bağlanır.
- **Bir sayfa yeniden numaralandırıldı**: 1. adımda numarasını düzeltin. Toplu bağlantılar tarafından yapılmış ve artık sayfasını bulamayan bağlantılar {{ui:Bağlanmayanlar}} altında listelenir; sayfayı bir kez seçin, hepsi onu izler. Başka bir görünüme taşınmış bağlantılar güncellenir.
- {{ui:Özellikler}} içinde elle yaptığınız bağlantılar asla değişmez.

## Kaydedilen PDF'de

Aynı PDF'deki bir sayfaya bağlantı, diğer görüntüleyicilerin de tıklamayla oraya atlaması için bir PDF bağlantısı olarak da yazılır. Görünümlü bir bağlantı, o görünümü diğer görüntüleyicide açar (PDF "sığdırma dikdörtgeni" atlaması); görünümsüz olan tüm sayfayı açar. Kümedeki başka bir dosyadaki sayfaya bağlantılar yalnızca MarkupCraft'ta çalışır.

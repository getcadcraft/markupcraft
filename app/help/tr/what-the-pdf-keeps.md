---
title: PDF dosyasına neler kaydedilir
summary: İşaretlenmiş kopyada tam olarak neyin bulunduğu, diğer PDF programlarının neyi gördüğü ve bir dosyayı açtığınızda neyin geri okunduğu.
keywords: pdf açıklamaları, yorumlar, kaydedilen veriler, gidiş dönüş, sayfa etiketleri, ölçüm, gözden geçirme durumu, yanıtlar, birlikte çalışabilirlik, uyumluluk, yeniden açma, özel veriler
from: 6439ad28
---

İşaretlenmiş kopya, yorumlar (PDF açıklamaları) eklenmiş özgün PDF'tir. Sayfaların kendileri, çizimleri, metinleri, yer imleri ve bağlantıları olduğu gibi kopyalanır.

## Her işaretleme

| MarkupCraft | Kaydedildiği biçim | Diğer PDF görüntüleyicilerin gösterdiği |
|---|---|---|
| Dikdörtgen, kutu bulutu | Kare açıklama (bulut: bulutlu kenarlık) | Dikdörtgen ya da bulut yorumu |
| Elips | Daire açıklaması | Elips yorumu |
| Çokgen, serbest bulut | Çokgen açıklaması (bulut: bulutlu kenarlık) | Çokgen ya da bulut yorumu |
| Çoklu çizgi | PolyLine açıklaması | Çoklu çizgi yorumu |
| Çizgi, ok | Çizgi açıklaması (ok: kapalı ok ucu) | Çizgi ya da ok yorumu |
| Uzunluk | Ölçü olarak işaretlenmiş çizgi açıklaması, bir ölçüm değeriyle | Görüntüleyici destekliyorsa uzunluk ölçümü |
| Alan | Alan olarak işaretlenmiş çokgen açıklaması, bir ölçüm değeriyle | Destekleniyorsa alan ölçümü; aksi halde çokgen |
| Sayım grubu | Tek bir mürekkep açıklaması, her öğe için bir halka; metni "grup: n" | Mürekkep yorumu |
| Kalem, fosforlu kalem | Mürekkep açıklaması (fosforlu kalem olarak işaretli) | Mürekkep yorumu |
| Metin | FreeText açıklaması | Metin kutusu yorumu |
| Çağrı | Belirtme çizgisi olan FreeText açıklaması | Çağrı yorumu |
| Not | Metin açıklaması | Metnini açan bir yapışkan not |
| Damga | Damga açıklaması | Damga yorumu |

Her biri şunlarla birlikte kaydedilir:

- **kendi görünümü**, MarkupCraft'ın ekranda çizdiği gibi çizilir; bu yüzden her görüntüleyicide aynı görünür ve aynı şekilde yazdırılır, eksik iş numarası rozeti dahil;
- **yazar**, **oluşturulma ve değiştirilme tarihleri**, **konu**, **yorum metni** (metin kutuları ve çağrılar için metin ve yorum), **renk** ve **opaklık**;
- **MarkupCraft ayrıntıları**, diğer programların yok saydığı özel bir girdide: durum, eksik iş, stil ve tür; böylece tam olarak yeniden açılır.

## Konular ve durumlar

- Her yanıt, işaretlemesine bağlı bir yanıt yorumu olarak yazarı, tarihi ve metniyle kaydedilir. Yanıtların sayfa üzerinde kendi simgesi yoktur.
- Her durum değişikliği, bir gözden geçirme durumu taşıyan bir yanıt olarak kaydedilir. Diğer gözden geçirme araçları bunu Kabul edildi, Reddedildi veya Tamamlandı olarak gösterir; Açık, durum olarak kaydedilmez.
- Açık dışında bir durumu olan ama kayıtlı bir durum değişikliği bulunmayan işaretlemeye, diğer programların durumu da görmesi için bir gözden geçirme durumu yanıtı eklenir.
- Özgün dosyadaki salt okunur yorumlara verilen yanıtlar, o yorumla bağlantılı olarak aynı şekilde kaydedilir.

## Her sayfa

- **Ölçek:** kalibre edilmiş bir sayfa, sayfayı kaplayan bir ölçüm görünüm penceresi alır (sayfa ölçeğini saklamanın standart yolu) ve MarkupCraft'ın kendi kalibrasyon kopyası.
- **Sayfa numarası:** {{ui:Sayfayı yeniden adlandır}} ile yazılan bir numara sayfa etiketi olur. Bir dosyanın herhangi bir sayfasında etiket varsa, o dosyanın her sayfası bir etiket alır: yazılan numarası, yoksa eski etiketi, yoksa sayfa numarası.
- **Sayfa başlığı:** yazılan bir başlık yalnızca MarkupCraft için kaydedilir; diğer görüntüleyiciler göstermez.

## Metin ve karakterler

Metin, her PDF görüntüleyicisinde bulunan Helvetica ile yazılır. Batı Avrupa kümesi (Windows-1252) dışındaki harfler kopyada "?" olarak yazdırılır; kaydetme iletisi bunları sayar.

## Hesap sayfaları ve gerekçeler

Hesap sayfaları ve gerekçeler, PDF'in `/MarkupCraftShell` adlı özel bir girdisinde tutulur. Diğer PDF programları bunu yok sayar. Eski bir MarkupCraft de yok sayar ve dosyayı bir dahaki kez kaydettiğinde siler.

## Önceden var olan yorumlara ne olur

Zaten yorum içeren bir PDF açtığınızda:

- MarkupCraft'ın kendi yorumları tam olarak geri okunur. Başka bir program birini taşıdı ya da boyutunu değiştirdiyse, yeni konumu geçerlidir.
- Diğer programlardan gelen dikdörtgenler, elipsler, çizgiler, çoklu çizgiler, çokgenler, mürekkep, metin kutuları ve yapışkan notlar düzenlenebilir işaretlemelere dönüşür. **Kaydettiğinizde MarkupCraft özgün olanları kaldırır ve bunları kendi yöntemiyle yeniden yazar**; açılır pencereleri ve yanıtlarıyla birlikte. Görünümleri biraz değişebilir.
- Diğer programlardan gelen gözden geçirme durumları durumu belirler; en yeni olan geçerlidir.
- Geri kalan her şey (metin vurguları, diğer programların damgaları ve özel türler) kopyada **dokunulmadan, salt okunur** olarak tutulur.
- Bağlantılar ve form alanları dokunulmadan tutulur ve listelenmez.

Aynı dosyayı yeniden kaydetmek hiçbir şeyi çoğaltmaz: MarkupCraft'ın okuduğu işaretlemeler yeniden eklenmek yerine değiştirilir.

## Değiştirilmeyenler

Diskteki özgün dosyanız hiçbir zaman değiştirilmez. Kopya boyut için optimize edilmez, bu yüzden özgün dosyadan biraz büyük olabilir. Korumalı (şifreli) PDF'ler kaydedilemez.

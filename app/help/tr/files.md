---
title: MarkupCraft'ın açtığı ve kaydettiği dosyalar
summary: Giren PDF'ler, çıkan işaretli PDF kopyası, ayrıca CSV, BCF ve araç kutusu dosyaları; her birinin gittiği yer, çevrimiçi ve çevrimdışı.
keywords: pdf, aç, kaydet, dışa aktar, indir, csv, bcf, bcfzip, json, araç kutusu, dosya türleri, biçimler, yükle, parola, şifreli
from: b3045b4c
---

## MarkupCraft'ın açtıkları

| Dosya | Nasıl | Ne olur |
|---|---|---|
| PDF (`.pdf`) | {{ui:Aç}}, {{key:Mod+O}} veya sayfa alanına bırakma. Aynı anda birkaç dosya olabilir. | Her sayfa bir sayfa (sheet) olur. Dosyada zaten bulunan işaretlemeler geri okunur (aşağıda). |
| Araç kutusu (`.json`) | {{ui:Araçlar}} sekmesi, ardından {{ui:İçe aktar}} | Araçlar araç kutunuza eklenir. Bkz. [Araç kutusu](topic:tool-chest). |

Bunun dışındaki her şey durum çubuğunda "MarkupCraft PDF dosyalarını açar." iletisiyle reddedilir. Karışık dosya bırakırsanız PDF'ler açılır ve durum çubuğu kaç dosyanın PDF olmadığını söyler.

### PDF içinde zaten bulunan işaretlemeler

- **MarkupCraft'ın kaydettiği işaretlemeler** olduğu gibi geri gelir: tür, stil, yazar, tarihler, durum, yanıtlar, eksik iş numarası, sayfanın ölçeği ve yazdığınız sayfa adları.
- **Başka PDF programlarının yorumları** da okunur. Dikdörtgenler, elipsler, çizgiler ve oklar, çoklu çizgiler, çokgenler, kalem (serbest çizim) darbeleri, metin kutuları ve yapışkan notlar normal, düzenlenebilir MarkupCraft işaretlemeleri olur. Yanıtları ve inceleme durumları da birlikte gelir.
- **Geri kalan her şey** (metin seçilerek yapılmış vurgular, başka programların damgaları ve diğer türler) olduğu gibi gösterilir ve salt okunur olarak işaretlenir. Seçebilir, işaretleme listesinde görebilir ve yanıtlayabilirsiniz; ama taşıyamaz, değiştiremez veya silemezsiniz.
- Bağlantılara ve form alanlarına dokunulmaz, listelenmezler.
- Başka bir programın kaydettiği ölçek (bir ölçüm görünüm penceresi) birimi MarkupCraft tarafından anlaşılıyorsa sayfanın ölçeği olarak kullanılır.

### Açılmayan dosyalar

- Parola isteyen bir PDF: "“ad” açmak için parola gerektiriyor. Korumasız bir kopya açın."
- Hasarlı veya aslında PDF olmayan bir dosya: "“ad” PDF olarak okunamadı (…)."
- Açılan ama değişikliğe karşı korumalı bir PDF sorunsuz açılır. Kaydetme reddedilir (aşağıya bakın).

Aynı anda birkaç dosya açıldığında çalışanlar açılır ve "Bazı dosyalar açılamadı" başlıklı bir kutu diğerlerini listeler.

## MarkupCraft'ın kaydettikleri

Kaydetme her zaman yeni bir dosyanın **indirilmesidir**. Bir web sayfası bilgisayarınızdaki bir dosyanın üzerine yazamaz ve MarkupCraft özgün dosyanızı asla değiştirmez.

| Seçiminiz | Elde ettiğiniz | Notlar |
|---|---|---|
| {{ui:Kaydet}} ({{key:Mod+S}}) | "<ad> (marked up).pdf" | Özgün PDF'in, her işaretlemesi gerçek bir PDF yorumu olarak yazılmış kopyası. "(marked up)" dosyasını yeniden kaydetmek aynı adı korur; hiçbir zaman "(marked up) (marked up)" olmaz. Bkz. [İşaretli PDF'i kaydetme](topic:save-the-marked-up-pdf). |
| {{ui:İşaretlemeler}} sekmesi, ardından {{ui:CSV}} | "<ad> markups.csv" | İşaretlemeler listelendiği gibi (süzgeçler geçerlidir). |
| {{ui:İşaretlemeler}} sekmesi, ardından {{ui:BCF}} | "<ad> markups.bcfzip" | BIM koordinasyon araçları için BCF 2.1, her işaretleme için bir anlık görüntü. Bkz. [BCF temelleri](topic:bcf-basics). |
| {{ui:Eksik işler listesi}} sekmesi, ardından {{ui:CSV olarak dışa aktar}} | "<ad> punch list.csv" | Eksik iş kalemleri numara sırasıyla. |
| {{ui:Araçlar}} sekmesi, ardından {{ui:Dışa aktar}} | "MarkupCraft tool chest.json" | Paylaşmak veya saklamak için araç kutunuz. |

"<ad>", açık ilk PDF'in ".pdf" olmadan dosya adıdır.

CSV dosyaları her e-tablo programında açılır. Elektronik tabloların aradığı işaretle birlikte UTF-8'dir; böylece aksanlı ve özel karakterli adlar doğru çıkar. =, +, - veya @ ile başlayan bir hücrenin başına kesme işareti eklenir; böylece bir e-tablo onu hiçbir zaman formül olarak çalıştırmaz.

## İndirmelerin gittiği yer

Tarayıcınız karar verir: genellikle İndirilenler klasörünüz; ya da öyle ayarladıysanız her seferinde sorar. Bkz. [Tarayıcılar ve bilgisayarlar](common:browsers#what-differs-between-browsers).

:::chromium
Bir takımın değişen tüm dosyalarını aynı anda kaydettiğinizde Chrome ve Edge, bu sitenin birden çok dosya indirip indiremeyeceğini sorabilir. {{ui:İzin ver}} seçeneğini seçin, yoksa yalnızca ilk kopyayı alırsınız.
:::

:::safari
iPad'de Safari her indirmeden önce sorar ve dosyayı Dosyalar uygulamasında İndirilenler altına koyar. Mac'te dosya Safari ayarlarında belirlenen klasöre gider.
:::

## Çevrimiçi ve çevrimdışı

- **PDF'leriniz bu bilgisayardan asla çıkmaz**, çevrimiçi de çevrimdışı da. Hiçbir yere yükleme yoktur.
- PDF okuyucusu bir PDF'i ilk açışınızda ("PDF okuyucusu yükleniyor…"), PDF yazıcısı ilk kaydedişinizde ("PDF yazıcısı yükleniyor…") veya zaten yorum içeren bir dosyayı açtığınızda yüklenir.
- Bağlantı varken ikisi de web sitesinden yüklenir.
- **Bağlantı olmadan çalışmak için** çevrimiçiyken üstteki çubukta {{ui:Çevrimdışı için kaydet}} seçeneğini seçin. Düğme "{total} dosyadan {done} kaydediliyor" biçiminde sayar, sonra "Çevrimdışı hazır" der. Bu kopya PDF okuyucusunu, PDF yazıcısını (toplam yaklaşık 6 MB) ve bu yardımı içerir; böylece sonrasında PDF açma, işaretleme ve kaydetme bu tarayıcıda çevrimdışı çalışır.
- Düğme "Kaydedilemedi" diyorsa bazı dosyalar inmemiştir: bağlantıyı denetleyin ve yeniden tıklayın. "Çevrimdışı kullanım yok" diyorsa bu tarayıcı penceresi çevrimdışı kopya tutamaz (gizli pencereler ve bazı yönetilen bilgisayarlar); normal bir pencere kullanın.
- Kopyayı güncellemek veya bırakmak için "Çevrimdışı hazır" düğmesine tıklayıp "Yeniden kaydet (en yeni sürümü al)" veya "Çevrimdışı kopyayı kaldır" seçeneğini seçin. Ayrıntılar [Çevrimdışı çalışma](common:offline) konusunda.

:::offline
Çevrimdışısınız. Üstteki çubuk "Çevrimdışı hazır" diyorsa kaydetme dahil her şey çalışır. Demiyorsa ve bu sekmede henüz kaydetmediyseniz {{ui:Kaydet}}, "PDF yazıcısı yüklenemedi" iletisiyle başarısız olabilir. İşaretlemeleriniz sekmede durur: sekmeyi açık tutun, yeniden çevrimiçi olun ve {{ui:Kaydet}} seçeneğini tekrar seçin.
:::

## Bilinmesi gerekenler

- Büyük plan takımlarının açılması biraz sürer: MarkupCraft sayfa numaralarını bulmak için her sayfanın metnini okur. Durum çubuğu ilerledikçe sayfaları sayar.
- Aynı PDF'i iki kez açmak sayfalarını iki kez ekler. Böyle olursa takımı kapatıp yeniden açın.
- {{ui:Kapat}}, açık tüm dosyaları birden kapatır. Kaydedilmemiş işaretlemesi olan varsa sorar: {{ui:İptal}}, {{ui:Kaydetmeden kapat}} veya {{ui:Önce kopyaları kaydet}}.
- Bulutta kaydetme henüz yok ve masaüstü sürümleri de henüz yok. PDF'lerinizi diğer proje dosyalarınızla birlikte saklayın ve her zamanki gibi yedekleyin. Bkz. [Dosyalarınızın gittiği yer](common:your-files).

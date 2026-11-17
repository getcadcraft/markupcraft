---
title: Çizimlerde metin bulun
summary: Her sayfadaki sözcükleri arayın, her eşleşmeye gidin ve hepsini tek adımda bulutla çevreleyin.
keywords: bul, ara, metin, sözcük, sözcükler, ctrl f, şunu ara, not, anahtar not, çağrı, tümünü bulutla çevrele, eşleşmeleri vurgula, ocr, tarama, taranmış, metni oku, metin seç, metni kopyala, tesseract
from: 3435c9eb
---

{{ui:Metin bul}}, {{ui:Sayfalar}} panelinin üstünde, sayfaların üzerinde çizili sözcükleri arar. Altındaki {{ui:Sayfalarda ara}} yalnızca sayfa adlarında arama yapar.

## Bulun

1. {{key:Mod+F}} tuşlarına basın ya da {{ui:Metin bul}} seçeneğini açın.
2. Sözcükleri yazın, örneğin `hood` ya da `verify in field`.
3. {{ui:Tüm sayfalar}} ya da {{ui:Bu sayfa}} seçin; gerekirse {{ui:Büyük/küçük harfe duyarlı}} ya da {{ui:Tam kelimeler}} seçeneğini işaretleyin.
4. {{key:Enter}} tuşuna basın ya da {{ui:Bul}} seçin.

Sonuç: her eşleşme, sayfa numarası ve çevresindeki sözcüklerle listelenir ve sayfasında sarıyla işaretlenir. Bir eşleşmeyi seçtiğinizde sayfası açılır ve o noktaya yakınlaştırılır.

Bir ifade çizimde iki parça metne ya da iki satıra bölünmüş olsa bile bulunur.

## Her eşleşmeyi bulutla çevreleyin

{{ui:Tümünü bulutla çevrele}} seçin. Listedeki her eşleşmenin etrafına, tüm sayfalarda, yorumu "Bulunan: <your words>" olan bir revizyon bulutu çizilir. Tek bir {{key:Mod+Z}} hepsini kaldırır.

## Taranmış sayfadaki metni okuyun (OCR)

Taranmış bir sayfa yalnızca bir resimdir: sözcükleri okunana kadar bulunacak bir şey yoktur. Sayım, sayfalarda metin olmadığını söylediğinde, altındaki {{ui:Metni oku (OCR)…}} seçeneğini ya da {{ui:Sayfalar}} › {{ui:Metni oku (OCR)…}} yolunu seçin.

1. Sayfaları seçin: bu sayfa, dosyanın her sayfası ya da açık tüm dosyaların her sayfası.
2. Metnin dilini seçin. {{ui:İngilizce de}} İngilizce sözcükleri de okur.
3. {{ui:Metni oku}} seçin. Bir çubuk okunmakta olan sayfayı gösterir; {{ui:Durdur}} çalıştırmayı sonlandırır ve şimdiye kadar okunmuş sayfaları tutar.

Sonuç: sözcükler, diğer her metin gibi bulunabilir, seçilebilir ve kopyalanabilir. Her şey bilgisayarınızda çalışır: hiçbir yere gönderilmez. Studio'da bağlantı olmadan çalışır; tarayıcıda ise uygulama çevrimdışı kullanım için kaydedildikten sonra (İngilizce ve arayüz diliniz) ya da bir dil bir kez kullanıldıktan sonra çalışır. Zaten metni olan sayfalar olduğu gibi bırakılır.

Kaydettiğinizde sözcükler, işaretlemelerinizden ayrı olarak resmin arkasında görünmez metin olarak PDF'e yazılır; böylece diğer PDF programları da bunları arayıp kopyalayabilir. Kaydedene kadar dosya kaydedilmemiş olarak görünür.

## Metni seçin ve kopyalayın

{{ui:Diğer}} › {{ui:Kopyalamak için metin seç}} seçin. Bir sözcükten diğerine sürükleyerek aradaki sözcükleri seçin, boş bir alandan sürükleyerek bir kutudaki sözcükleri seçin ya da tek bir sözcüğe çift tıklayın. {{key:Mod+A}} sayfadaki her sözcüğü seçer. {{key:Mod+C}} satırları koruyarak kopyalar. Başka herhangi bir araç bunu sonlandırır.

## Bilmeniz gerekenler

- Harfleri çizgi olarak çizilmiş çizimlerin de metni yoktur; bunları resim olarak okutmak, taranmış bir kitap ya da şartname gibi basılı metinlerde en iyi sonucu verir.
- Okuyucu Tesseract'tır; uygulamaya İngilizce ve uygulamanın dilleri için dil verileriyle birlikte yerleşiktir. İlk çalıştırmada yüklenir (yaklaşık 6 MB, ikinci bir dil için daha fazla).
- Ne kadar iyi okuduğu taramaya bağlıdır: 300 dpi'deki temiz sayfalar neredeyse kelimesi kelimesine okunur; eski, soluk ya da düşük çözünürlüklü taramalarda daha çok sözcük kaçar.
- Liste ilk 500 eşleşmeyi gösterir; Tümünü bulutla çevrele 2.000'e kadar eşleşmeyi çevreler.
- Eşleşmeler, seti kapattığınızda temizlenir; bir dosyanın sayfalarını değiştirdiğinizde ise o dosyanın eşleşmeleri temizlenir.

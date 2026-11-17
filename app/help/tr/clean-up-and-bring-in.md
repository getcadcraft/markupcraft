---
title: Kalem çizgilerini temizleyin; inceleme yorumlarını ve saha ilerlemesini getirin
summary: Serbest kalem çizgilerini çizgilere, dairelere, yaylara ve dikdörtgenlere dönüştürün; bir ruhsat paketinin inceleme yorumlarını ve bir sahanın ölçüm ilerlemesini not olarak getirin.
keywords: kalem, serbest el, temizle, düzelt, daire, çizgi, dikdörtgen, yay, ruhsat, inceleme yorumları, ilerleme, dron, tarama, ölçüm, notlar, csv
from: 547d8e42
---

## Kalem çizgilerini temizleyin

{{ui:Kalem}} ile çizin, ardından Düzenle grubundaki {{ui:Diğer}} menüsünü açın ve {{ui:Kalem çizgilerini temizle}} seçin. Seçili her kalem çizgisi amaçlandığı şeye dönüşür: düz bir çizgi bir çizgi olur (neredeyse yatay veya düşeyse tam yatay veya düşey yapılır), yuvarlak bir çizgi elips olur, bir dairenin parçası yay olur, dört köşeli kapalı bir çizgi dikdörtgen olur, diğer her şey çoklu çizgi veya çokgen olur. Birlikte çizilen çizgilerin serbest uçları birbirine çekilir. Hiçbir kalem çizgisi seçili değilse açık sayfadaki her kalem çizgisi temizlenir. Bu tek bir geri alma adımıdır: Ctrl+Z serbest çizimi geri getirir. Şekil, bilgisayarınızda sabit kurallarla hesaplanır; hiçbir yere gönderilmez.

## İnceleme yorumlarını getir

BimCraft'ın ruhsat paketi `01-review-comments.csv` dosyasını içerir: bir plan inceleyicisinin yapması muhtemel yorumlar; her biri kuralı, maddeyi, neyin gerektiğini, neyin bulunduğunu ve ne yapılacağını içerir. {{ui:Görevler}} sekmesinde {{ui:Ruhsat inceleme yorumları}} öğesini açın ve {{ui:Yorumları getir (CSV)}} seçin. Her yorum, açık sayfanın solundaki bir sütunda Açık bir not olur; her birini ilgili olduğu yere sürükleyin. Bunlar, mevcut kontrollerden hesaplanır; bir plan denetçisinden değil.

## HAZOP düğüm kutularını getir

CadCraft'ın P&ID eklentisi bir HAZOP çalışmasının düğümlerini çizer ve bunları {{ui:HAZOP düğüm kutuları}} (bir JSON dosyası) olarak kaydedebilir. Burada basılmış P&ID sayfasını açın, {{ui:Görevler}} sekmesine gidin, {{ui:HAZOP düğüm kutuları}} öğesini açın ve {{ui:HAZOP düğüm kutularını getir (JSON)}} seçin. Her düğüm, sayfada numarası, adı, ekipmanı ve metnindeki hatlarla birlikte Açık bir dikdörtgen olur; ekip bulgularını bunun üzerine yanıt olarak yazar. Sayfa, çizimin sol alt köşesinden tam boyutta basılmış olarak alınır; başka bir ölçekte basıldıysa önce o sayıyı {{ui:Basım ölçeği}} alanına yazın (1:2 için 0.5). Sayfanın dışına düşen bir düğüm çizilmez ve panel kaç tane olduğunu söyler. İşaretçiler bir çalışma yardımcısıdır: düğümlerin nerede olduğunu gösterirler, çalışmayı değerlendirmezler.

## Sahanın ilerlemesini getir

CivilCraft, sahanın her dron uçuşu veya taraması için bir satır tutar. {{ui:Görevler}} sekmesinde {{ui:Şantiye ilerlemesi}} öğesini açın ve {{ui:İlerlemeyi getir (JSON)}} seçin. Her ölçüm, açık sayfada bir not olur: ne kadarının tamamlandığını, ne kadarının kazılmaya veya dolgu yapılmaya kaldığını, neyin fazla kazıldığını veya fazla dolgu yapıldığını ve plan dışında kalanı belirtir. Plan dışında bir şey olan bir ölçüm Açık kalır; temiz olan Kabul edildi olur.

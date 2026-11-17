---
title: Menüler, tuşlar ve fare
summary: MarkupCraft'ın kendi araç çubuğunu, bir PDF inceleme menü çubuğunu ya da bir şeridi seçin; herhangi bir araca kendi tuşunuzu verin, araçları menüler arasında taşıyın ve tekerleğin ile fare düğmelerinin ne yapacağını ayarlayın.
keywords: menü stili, menüler, menü çubuğu, araç çubuğu, şerit, sekmeler, pdf incelemesi, klavye kısayolları, kısayol tuşları, tuşlar, özelleştir, yeniden ata, fare, tekerlek, ters çevir, yakınlaştırma yönü, orta düğme, sağ düğme, kaydır, dışa aktar, içe aktar, geçiş, tanıdık
from: 081438a6
---

MarkupCraft'ın araçları hangi yoldan ulaştığınızdan bağımsız olarak aynıdır. Bir **menü stili** yalnızca araçların ekranda nerede durduğunu, orada nasıl adlandırıldığını ve hangi tuşlarla seçildiğini belirler. {{ui:Ayarlar}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menüler, tuşlar ve fare}} yolundan seçin; değişiklik anında olur ve bu tarayıcı bunu hatırlar.

## Üç stil

| Stil | Ne elde edersiniz |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraft'ın kendi araç çubuğu (Dosya, Seç, Çiz, Revize et, Açıklama ekle, Ölç, Düzenle) ve tek harfli tuşları: {{key:V}} seç, {{key:H}} kaydır, {{key:P}} kalem, {{key:I}} vurgulayıcı, {{key:L}} çizgi, {{key:A}} ok, {{key:R}} dikdörtgen, {{key:E}} elips, {{key:C}} bulut, {{key:K}} çağrı, {{key:T}} metin, {{key:N}} not, {{key:S}} damga, {{key:M}} uzunluk, {{key:Q}} alan, {{key:U}} say. Başlangıç noktası. |
| {{ui:PDF incelemesi}} | Bir menü çubuğu ({{ui:Dosya}}, {{ui:Düzenle}}, {{ui:Görünüm}}, {{ui:Belge}}, {{ui:İşaretleme}}, {{ui:Ölç}}, {{ui:Gözden geçir}}, {{ui:Pencere}}) ve bir sıra inceleme aracı üzerinde, PDF inceleme programlarının tuşlarını nasıl dağıttığı gibi tuşlar: {{key:V}} seç, {{key:Shift+V}} kaydır, {{key:H}} vurgulayıcı, {{key:Q}} çağrı, {{key:N}} çokgen, {{key:Shift+N}} çoklu çizgi, {{key:Shift+T}} not, {{key:Shift+A}} yay ve ölçümler {{key:Alt+Shift}} üzerinde: {{key:Alt+Shift+K}} kalibre et, {{key:Alt+Shift+L}} uzunluk, {{key:Alt+Shift+G}} açı, {{key:Alt+Shift+A}} alan, {{key:Alt+Shift+C}} say. {{key:Alt+L}} işaretlemeler listesini açar. Orta düğme kaydırır; sağ tıklama kaydırmaz. |
| {{ui:Şerit}} | İşe göre adlandırılmış sekmeler: {{ui:İşaretle}} (seç, çiz, bulutlar, çağrılar, metin, notlar, damgalar), {{ui:Ölç}}, {{ui:Düzenle}}, {{ui:Gözden geçir}} (işaretlemeler listesi ve dışa aktarmaları, BCF sorunları, eksik işler listesi, saha kayıtları, takım kutusu, karşılaştır), {{ui:Sayfalar}} ve {{ui:Görünüm}}; {{ui:Dosya}} ile açma, kaydetme, geri alma ve yinelemek için hızlı düğmeler. Araçlar MarkupCraft'ın kendi tek harfli tuşlarını korur. Henüz açılmamış bir panel için bir düğme önce o paneli açar. |

Her stil {{key:Mod}} tuşlarını korur: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} sayfaya sığdırma ve {{key:Mod+9}} genişliğe sığdırma; {{key:PageUp}} ve {{key:PageDown}} sayfa değiştirir.

:::tip
MarkupCraft'ın kendi düzeniyle ilgili olan ama seçtiğiniz stile ait olmayan bir tuş hiçbir şey yapmaz; durum çubuğu aracın nereye gittiğini söyler (örneğin "PDF incelemesinde Çağrı: Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ve ok tuşları her zaman anlamını korur. Bir metin kutusuna, çağrıya ya da nota yazarken her tuş metnin tuşudur; çizim sırasında yazılan sayılar yine de uzunluk kutusunu açar.
:::

## Kendinize göre yapın

1. En yakın stili seçin, sonra {{ui:Özelleştir…}} seçeneğine tıklayın.
2. {{ui:Tuşlar ve menüler}} üzerinde bir araç bulun (arama kutusu yardımcı olur). {{ui:Tuş ekle}} seçin ve tuşa basın; iki harfli bir tuş için arka arkaya iki tuşa basın. Kaldırmak için bir tuşa tıklayın.
3. Menü çubuğuyla, {{ui:Yeri}} aracı başka bir menüye taşır ya da {{ui:Yalnızca tuşlarla}} seçeneğine alır.
4. {{ui:Fare}} üzerinde tekerleği ve sayfayı kaydıran düğmeleri ayarlayın.
5. Ona bir ad verin ve {{ui:Kaydet}} seçeneğine tıklayın.

Yerleşik bir stili kaydetmek kendi kopyanızı oluşturur ("Kendi PDF incelemem"); yerleşik olan asla değişmez. İki araca verilen bir tuş kırmızıyla gösterilir ve kaydetmeden önce düzeltilmesi gerekir.

## Fare

- **Fare tekerleği**: {{ui:Yukarı kaydırmak yakınlaştırır}} (başlangıç) ya da {{ui:Yukarı kaydırmak uzaklaştırır}} ve ne kadar hızlı. Bir izleme dörtgeninde kıstırma her zaman parmaklarınızın hareket ettiği yönde yakınlaştırır.
- **Sayfayı şununla kaydırın**: orta düğme, sağ düğme ya da ikisi. {{key:Space}} ile sürükleme ve {{ui:Kaydır}} aracı her zaman kaydırır; sol düğme ise zaten çizer ve seçer, bu yüzden onu işaretlemek burada bir şey değiştirmez.
- MarkupCraft'ta 3B görünüm yoktur, bu yüzden 3B düğmeleri burada hiçbir şey yapmaz.

## Yanınızda taşıyın

{{ui:Dışa aktar}} kullanılan stili küçük bir `.ccinput.json` dosyası olarak kaydeder; {{ui:İçe aktar…}} başka bir bilgisayardan ya da bir meslektaşınızdan bir tane ekler. İçe aktarılan bir dosya yalnızca MarkupCraft'ın kendi araçlarını gösterebilir: başka her şey dışarıda bırakılır ve durum çubuğunda sayılır. {{ui:Bu stili sil}} kendi stillerinizden birini kaldırır.

:::note
Bu ayarlar bu tarayıcıda kalır. Stil kartlarının altındaki {{ui:Bu stili her uygulamada kullan}} seçeneği, her uygulamayı eşleşen stiliyle açar: {{ui:PDF incelemesi}} diğer uygulamaların menü çubuğu stilleriyle, {{ui:Şerit}} şeritleriyle, MarkupCraft'ın kendi araç çubuğu da onlarınkiyle birlikte gider. Eşleşen stili olmayan bir uygulama kendi stilini korur.
:::

:::tip
{{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen}} altındaki çalışma alanı düzenleri ({{ui:Şerit ve proje tarayıcısı}}, {{ui:Araç kutusu ve bilgi kutusu}}), şeritlerini {{ui:Şerit}} stilinin sekmelerinden, araç kutularını da MarkupCraft'ın araç çubuğundan oluşturur; böylece her araç bu düzenlerde de aynı şekilde çalışır.
:::

İlgili: [Klavye ve fare](topic:keyboard) · [MarkupCraft ayarları](topic:settings) · [Başka işaretleme yazılımlarından geçiş](topic:coming-from)

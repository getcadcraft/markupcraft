---
title: Her işaretleme türü
summary: On yedi işaretleme türü, tuşları, nasıl çizildikleri, varsayılan görünümleri ve kaydedilmiş PDF'te ne olduklarıyla birlikte.
keywords: işaretleme türleri, araç listesi, açıklama türleri, bulut, çağrı, metin, not, damga, kalem, vurgulayıcı, çizgi, ok, dikdörtgen, elips, çoklu çizgi, çokgen, uzunluk, alan, say
from: 29bf32e7
---

## Araçlar

| Araç çubuğu | Tuş | Nasıl çizilir | Varsayılan görünüm | Kaydedilen PDF'te |
|---|---|---|---|---|
| {{ui:Kalem}} | {{key:P}} | Sürükleyin | Kırmızı, 1.5 pt | Mürekkep |
| {{ui:Vurgula}} | {{key:I}} | Sürükleyin | Sarı, 14 pt genişlikte, geçirgen, altındakini renklendirir | Mürekkep (vurgulayıcı vuruşu olarak işaretli) |
| {{ui:Çizgi}} | {{key:L}} | Sürükleyin ya da başlangıca ve bitişe tıklayın | Kırmızı, 2 pt | Çizgi |
| {{ui:Ok}} | {{key:A}} | Sürükleyin ya da başlangıca ve bitişe tıklayın | Kırmızı, 2 pt, sonunda kapalı ok ucu | Ok ucu olan çizgi |
| {{ui:Yay}} | {{key:O}} | Başlangıca, yay üzerinde bir noktaya, sonra bitişe tıklayın | Kırmızı, 2 pt | Yay boyunca çoklu çizgi |
| {{ui:Dikdörtgen}} | {{key:R}} | Bir kutu sürükleyin | Kırmızı, 2 pt, dolgu yok | Kare |
| {{ui:Elips}} | {{key:E}} | Bir kutu sürükleyin | Kırmızı, 2 pt, dolgu yok | Daire |
| {{ui:Çoklu çizgi}} | {{key:Y}} | Noktalara tıklayın, bitirmek için çift tıklayın | Kırmızı, 2 pt | Çoklu çizgi |
| {{ui:Çokgen}} | {{key:G}} | Noktalara tıklayın, bitirmek için çift tıklayın | Kırmızı, 2 pt, dolgu yok | Çokgen |
| {{ui:Bulut}} | {{key:C}} | Bir kutu sürükleyin | Kırmızı, 1.5 pt kıvrımlar | Bulutlu kenarlı kare |
| {{ui:Serbest bulut}} | {{key:Shift+C}} | Noktalara tıklayın, bitirmek için çift tıklayın | Kırmızı, 1.5 pt kıvrımlar | Bulutlu kenarlı çokgen |
| {{ui:Çağrı}} | {{key:K}} | Noktaya basın, metne sürükleyin, yazın | Kırmızı metin ve belirtme çizgisi, 1 pt, 12 pt metin | Çağrı belirtme çizgisi olan metin kutusu |
| {{ui:Metin}} | {{key:T}} | Tıklayın ya da bir kutu sürükleyin, yazın | Kırmızı 12 pt metin, kenarlık yok | Metin kutusu |
| {{ui:Not}} | {{key:N}} | Tıklayın, yazın | Sarı not simgesi | Yapışkan not |
| {{ui:Damga}} | {{key:S}} | Bir damga seçin, tıklayın ya da sürükleyin | Çerçeveli büyük harfler ve "By <name>, <date>" yerine "<name>, <date> tarafından"; anlamına göre renklendirilir | Damga |
| {{ui:Uzunluk}} | {{key:M}} | Başlangıca ve bitişe tıklayın (ölçek gerekir) | Mavi ölçü çizgisi, uç çizgileri ve uzunluk | Ölçü olarak işaretlenmiş çizgi, bir ölçümle |
| {{ui:Açı}} | {{key:X}} | Bir kolun ucuna, köşeye, sonra diğer kolun ucuna tıklayın | Mavi kollar, köşede küçük bir yay ve açı derece cinsinden | Metni açı olan çoklu çizgi |
| {{ui:Alan}} | {{key:Q}} | Köşelere tıklayın, bitirmek için çift tıklayın (ölçek gerekir) | Mavi çerçeve, açık mavi dolgu, alan ve çevre | Alan olarak işaretlenmiş çokgen, bir ölçümle |
| {{ui:Say}} | {{key:U}} | Her kaleme tıklayın | Turuncu numaralı noktalar ve "grup: n" etiketi | Grup başına bir mürekkep yorumu, kalem başına bir halka |

Dokunmatik ekranda "çift tıklayarak bitirin" bir çift dokunmadır; "tıklama" ise (noktalar, notlar ve sayımlar için) parmak kalktığında etkinleşen bir dokunmadır.

## Her işaretlemenin taşıdıkları

| Alan | Nerede görürsünüz |
|---|---|
| Yazar | {{ui:Özellikler}}, liste, damganın ikinci satırı, diğer PDF görüntüleyicileri |
| Oluşturulma ve değiştirilme | {{ui:Özellikler}} (sizin saat diliminiz), liste, CSV |
| Durum | Açık, Kabul edildi, Reddedildi veya Tamamlandı |
| Konu | Kısa bir etiket; türe göre varsayılan ("Bulut", "Metin kutusu", "Uzunluk ölçümü") |
| Yorum | Daha uzun notlar. Bir not için metni, yorumudur. |
| Metin | Yalnızca metin kutuları ve çağrılar |
| Yanıtlar | Durum değişiklikleriyle birlikte yanıt dizisi |
| Eksik iş | Numara, atanan kişi, son tarih, eksik iş durumu; eksik işler listesine eklendiğinde |
| Stil | Renk, çizgi kalınlığı, dolgu ve dolgu opaklığı (kapalı şekiller, metin ve çağrılar), opaklık, metin boyutu (metin, çağrılar ve ölçümler) |

## Salt okunur yorumlar

Dosyayla birlikte gelen ve MarkupCraft'ın düzenleyemediği yorumlar (metin vurguları, başka programların damgaları ve diğer özel türler), "Diğer" türüyle ve "Salt okunur" durum etiketiyle listelenir. Dosyanın verdiği görünümü aynen korurlar. Onları seçebilir, yazarını, konusunu ve yorumunu görebilir ve yanıt verebilirsiniz.

## Henüz yapılmadı

Dosya ekleri henüz yapılmadı. Her işaretleme bir sayfaya bağlanabilir; bkz. [Sayfa bağlantıları](topic:sheet-links). Resimler ve imzalar {{ui:Damga}} aracıyla yerleştirilir; bkz. [Damgalar ve notlar](topic:stamps-and-notes). Bkz. [Henüz yapılmayanlar](topic:not-built-yet).

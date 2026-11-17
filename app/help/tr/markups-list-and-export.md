---
title: İşaretlemeler listesi, süzgeçler ve dışa aktarma
summary: Kümedeki her işaretlemeyi görün, sayfaya, yazara, duruma ve türe göre süzün, birine atlayın ve listeyi CSV ya da BCF olarak dışa aktarın.
keywords: işaretlemeler listesi, liste, özet, xlsx, e-tablo çalışma kitabı, çalışma kitabı, pdf raporu, bcf içe aktar, süz, sırala, rapor, dışa aktar, csv, e-tablo, bcf, bcfzip, sorunlar, yorumlar listesi, atla
from: 6c70261e
---

## Listeyi açın

Sağdaki {{ui:İşaretlemeler}} sekmesini seçin. Açık olan her dosyanın her işaretlemesi, sayfa sırasına göre ve sonra oluşturulma sırasına göre listelenir. Her satır şunları gösterir:

- işaretlemenin renginde bir simge, varsa eksik iş numarası ("#4") ve konusu,
- metni, damga yazısı ya da ölçülen değeri ve yorumu,
- sayfayı, yazarı ve tarihi,
- durumunu (ya da dosyayla birlikte gelen yorumlar için "Salt okunur") ve yanıtları varsa yanıt sayısını.

Listenin üstündeki satır bunları sayar: "38 işaretleme" ya da süzüldüğünde "38 işaretlemenin 12'si".

## Bir işaretlemeye gidin

Bir satıra tıklayın. MarkupCraft o sayfayı gösterir, işaretlemeyi seçer ve ekran dışındaysa ya da görmek için çok küçükse ona yakınlaştırır. {{ui:Özellikler}} sekmesine geri döndüğünüzde ayrıntıları ve yanıt dizisi görünür.

## Süzme

Listenin üstünde dört menü vardır. Birlikte çalışırlar.

| Menü | Seçenekler |
|---|---|
| {{ui:Sayfa}} | Tüm sayfalar, Bu sayfa (siz sayfa değiştirdikçe sizi izler) ya da işaretlemesi olan herhangi bir sayfa |
| {{ui:Yazar}} | Herkes ya da kümedeki her yazar |
| {{ui:Durum}} | Herhangi bir durum, Açık, Kabul edildi, Reddedildi, Tamamlandı |
| {{ui:Tür}} | Herhangi bir tür ya da kümedeki her işaretleme türü |

Örnekler:

- Bu sayfada hâlâ açık olanlar: {{ui:Sayfa}} "Bu sayfa", {{ui:Durum}} "Açık".
- Bir danışmanın yorumları: {{ui:Yazar}} onların adı.
- Tüm ölçümler: {{ui:Tür}} "Uzunluk" ya da "Alan".

Liste en fazla 2000 satır gösterir; çok büyük kümelerde bir süzgeçle daraltın.

## CSV'ye aktarın

Sekmenin üstündeki {{ui:CSV}} seçeneğini seçin. "<name> markups.csv" dosyasını alırsınız; **geçerli süzgeçlerine göre süzülmüş işaretlemeler**, her satırda bir tane, şu sütunlarla:

Eksik iş no., Sayfa, Dosya, Sayfa no, Tür, Konu, Metin, Yorum, Ölçüm, Yazar, Oluşturulma, Değiştirilme, Durum, Yanıtlar, Son yanıt, Renk, Salt okunur.

- "Metin" sütunu metin kutularının ve çağrıların sözcüklerini, bir damganın yazısını ya da bir sayım grubunun adını tutar.
- "Ölçüm" sütunu uzunlukları, alanlar için "alan, çevre" ifadesini ve sayımlar için "grup: n" ifadesini tutar.
- Tarihler UTC cinsinden tam zaman damgalarıdır.

Tüm işaretlemeleri dışa aktarmak için önce her süzgeci ilk seçeneğine geri getirin.

## Sayfada bir lejant

{{ui:Lejant}} ({{ui:İşaretlemeler}} sekmesinde) gördüğünüz sayfanın sağ üstüne bir lejant koyar: sayfadaki her işaretleme türünü (konusuna ve rengine göre, "Bulut", "Soru" ya da "Priz" gibi) ve kaç tane olduğunu listeleyen bir kutu. Bir sayım grubu, işaretlerini sayar. Lejant siz çizdikçe, taşıdıkça ya da sildikçe saymaya devam eder; yazdırılır ve o andaki sayımlarıyla birlikte kaydedilir.

Onu herhangi bir işaretleme gibi taşıyın ve boyutunu değiştirin. Kendi {{ui:Özellikler}} bölümünde {{ui:Başlık}} değerini değiştirin ya da {{ui:Sayımlar}} seçeneğini {{ui:Tüm takım}} olarak ayarlayarak her sayfayı sayın. Boşluklar, diğer lejantlar ve başka programların yorumları sayılmaz.

## Kendi sütunlarınız ve sıralama

{{ui:Sütunlar}} ({{ui:İşaretlemeler}} sekmesinde) her işaretlemeye kendi sütunlarınızı ekler: bir **metin**, bir **seçim** (örneğin Meslek: Mekanik, Elektrik, Tesisat), bir **sayı** (örneğin Maliyet) ya da bir **tarih**. Her birine ad verin, türünü seçin, seçim sütunu için seçenekleri listeleyin ve {{ui:Sütunları kaydet}} seçeneğini seçin.

- Bunları {{ui:Özellikler}} altında doldurun: her sütunun orada bir alanı vardır. Sayı sütunu yalnızca sayı alır, tarih sütunu bir tarih alır.
- Liste, her işaretlemenin altında değerleri gösterir; {{ui:Sütun}} süzgeci bir değer (ya da alanı boş olan işaretlemeler) seçer; {{ui:Sırala}} listeyi sayfa yerine bir sütuna, yazara, duruma, türe ya da tarihe göre sıralar.
- CSV ve XLSX dışa aktarmaları sütunları, olağan sütunlardan sonra taşır. Sütunlar PDF ile birlikte kaydedilir ve dosyayı yeniden açtığınızda geri gelir.

## Özet dışa aktarın: çalışma kitabı veya PDF

- {{ui:XLSX}} "<name> markup summary.xlsx" dosyasını indirir; üç sayfası vardır: **İşaretlemeler** (listelenen her işaretleme için bir satır, CSV ile aynı sütunlar), **Sayfaya göre** (her sayfada kaç işaretleme olduğu, açık ve kapalı, ve her türden kaç tane, toplamlarla birlikte) ve **Eksik işler listesi** (eksik iş varsa).
- {{ui:PDF}} "<name> markup summary.pdf" dosyasını indirir: yazdırmak ya da göndermek için bir rapor; kümenin adı, tarih ve listelenen işaretlemelerin bir tablosu (numara, sayfa, tür, konu, metin ya da yorum, ölçülen değer, yazar, durum ve son yanıt). Uzun metinler alt satıra geçer; tablo başlığı her sayfada tekrarlanır.

İkisi de listeyi süzülmüş hâliyle alır; bu yüzden tek bir sayfayı, tek bir yazarı ya da yalnızca açık maddeleri raporlamak için önce süzün.

## BCF'ye aktarın

{{ui:BCF}} seçin. MarkupCraft listelenen her işaretlemenin sayfadaki bir görüntüsünü alır ("BCF için anlık görüntüler alınıyor (12 içinden 3)…"), sonra "<name> markups.bcfzip" dosyasını indirir. Her işaretleme, durumu, yazarı, tarihleri, yanıtları yorum olarak, eksik iş öğesinden atanan kişi ve son tarih ve anlık görüntüsüyle tek bir BCF konusu olur.

Çizim incelemesi yorumlarını BCF okuyan BIM koordinasyon araçlarına taşımak için kullanın. Neyin taşındığı ve neyin taşınmadığı [BCF temelleri](topic:bcf-basics) bölümündedir.

## BCF içe aktarın

{{ui:BCF içe aktar}} bir BIM aracından bir .bcfzip (ya da .bcf) dosyası okur:

- MarkupCraft'ın kendi BCF dışa aktarmasından gelen sorunlar, kendi işaretlemelerini yeniden bulur: yeni yanıtlar dizilerine eklenir ve yeni bir durum ayarlanır (Kapalı, Tamamlandı sayılır). Zaten orada olan yanıtlar iki kez eklenmez.
- Diğer sorunlar; başlıkları, açıklamaları, yazarları ve yorumlarıyla birlikte not olur. Bir not, sorunun etiketlerinin verdiği sayfa numarası ya da adındaki sayfaya konur; yoksa açık olan sayfaya konur. Bir BIM kamerasının kağıtta yeri olmadığından, bu tür notlar sizin taşımanız için sayfanın sol üstünde üst üste yığılır.

Tüm içe aktarma tek bir adımdır: {{key:Mod+Z}} onu geri alır. Bkz. [BCF temelleri](topic:bcf-basics).

## Liste henüz neleri yapmıyor

- Listeyi gruplama (bunun yerine önce sırala, sonra süz).
- Listede değer düzenleme ({{ui:Özellikler}} içinde düzenleyin; eksik iş alanları {{ui:Eksik işler listesi}} sekmesinde düzenlenebilir).

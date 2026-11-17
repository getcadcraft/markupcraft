---
title: MarkupCraft'ı bir yapay zekâ asistanıyla kullanın
summary: Kendi yapay zekâ asistanınızın ya da betiğinizin bir setin işaretlemelerini listelemesine, basit olanları eklemesine, durumlarını ayarlamasına, yanıt vermesine ve listeyi dışa aktarmasına izin verin: izinler, CadCraft Studio üzerinden bağlanma ve etkinlik günlüğü.
keywords: yapay zekâ, asistan, ajan, mcp, model bağlam protokolü, betik, otomasyon, işaretlemeler, inceleme, izinler, bağlantıyı kes, etkinlik
from: 095f2977
---

## Neler öğreneceksiniz

Bir yapay zekâ asistanının (ya da kendi yazdığınız bir betiğin) MarkupCraft ile nasıl çalışmasına izin vereceğinizi ve neye dokunabileceğini nasıl belirleyeceğinizi.

MarkupCraft'ın **kendi yapay zekâsı yoktur** ve hiçbir yere bir şey göndermez. Asistanı siz getirirsiniz: Model Bağlam Protokolü'nü (MCP) konuşan herhangi bir program. MarkupCraft ona yalnızca araçlar verir; hangilerini seçtiğinizi siz belirlersiniz.

## Açın

1. {{ui:Ayarlar}} (uygulama çubuğundaki dişli ya da {{key:Mod+,}}) seçeneğini açın ve {{ui:MarkupCraft}} sekmesine gidin.
2. {{ui:Asistanlar}} altında **Yapay zekâ asistanlarının ve betiklerin MarkupCraft'ı kullanmasına izin ver** kutusunu işaretleyin. Siz işaretleyene kadar kapalıdır.
3. Neler yapabileceğini seçin: **Oku** başlangıçta işaretlidir; **Düzenle**, **Kaydet** veya **Dışa aktar** seçeneklerini yalnızca ihtiyacınız olduğunda işaretleyin.

İzin verdiklerinizin dışında kalan araçlar asistana sunulmaz; asistan yine de birini isterse, MarkupCraft reddeder ve bunu etkinlik günlüğüne yazar. Anahtarı kapatmak, tüm bağlantıları aynı anda sonlandırır; {{ui:MarkupCraft ayarlarını sıfırla}} de onu kapatır.

## Asistanınızı bağlayın

Asistanlar, bilgisayarınızdaki **CadCraft Studio** üzerinden bağlanır: Studio, yalnızca bu bilgisayarın erişebildiği ve her başlatıldığında oluşturduğu bir belirteçle korunan küçük bir sunucu çalıştırır. Studio'da {{ui:Bir asistan bağla}} seçin ve adresi ile belirteci asistanınıza kopyalayın (Studio, yapıştırmanız gereken tam ayarları gösterir). Belirteci hiçbir zaman paylaşmayın.

:::note
Bir tarayıcı sekmesi asistan için bağlantı açamaz: tarayıcı uygulamalarında, bilgisayarınızda CadCraft Studio'yu kullanana kadar anahtarın bir etkisi yoktur.
:::

## Kontrol sizde kalır

- **Her değişiklik tek bir geri alma adımıdır**, asistanın adıyla etiketlenir (örneğin "Asistan: add cloudrect"). {{key:Mod+Z}} asistanın son değişikliğini bir bütün olarak geri alır.
- **Bağlı olduğunu bilirsiniz.** Uygulama çubuğundaki bir düğme, bağlıyken asistanın adını gösterir; neler yapabileceğini görmek ya da **Bağlantıyı kes** için tıklayın.
- **Etkinlik.** {{ui:Ayarlar}} › {{ui:MarkupCraft}} › {{ui:Asistanlar}} › {{ui:Etkinlik}} her çağrıyı listeler: ne zaman, hangi araç, tamamlandı mı reddedildi mi. {{ui:Günlüğü kaydet}} bir kopya tutar.

## Bir asistan neyi isteyebilir

| Araç | İzin | Ne yapar |
|---|---|---|
| `app_info`, `sheets_list` | Oku | Açık setler, sayfaları ve her birinin kaç işaretlemesi olduğu |
| `markups_list` | Oku | Türü, sayfası, metni, yorumu, ölçümü, durumu, yazarı ve yanıtları olan işaretlemeler; sayfaya, duruma, türe veya yazara göre filtrelenir |
| `markup_add` | Düzenle | Bir sayfaya dikdörtgen, bulut, elips, metin kutusu, not, çizgi veya ok ekler |
| `markup_status`, `markup_reply` | Düzenle | Bir işaretlemenin durumunu ayarlar (dizisine kaydedilir, asistan imzasıyla); bir diziye yorum ekler |
| `markups_export` | Dışa aktar | {{ui:İşaretlemeler}} listesinin kendi CSV ya da BCF çıktısı, listenin gösterdiği şey (filtreleri ayarladığınız gibi); Studio'da izin verdiğiniz bir klasöre dosya yazabilir |
| `tasks_list` | Oku | Görev olan işaretlemeler: atanan (kişi ya da asistan), bitiş günü, durum, bağlantı, nasıl kapandığı. `assignee: "assistant"` asistan için bekleyen işleri listeler |
| `task_set`, `task_clear` | Düzenle | Bir işaretlemeyi görev yapar ya da değiştirir (başlık, atanan, bitiş, durum, bağlantı); görevi kaldırır |
| `tasks_check` | Düzenle | Bağlı çizim alanı ya da model öğesi gerçekten değişen görevleri kapatır; diğer uygulamadan okuduğunuz öğe durumlarını iletir |
| `revisions_changes` | Oku | İki açık plan seti arasında neyin değiştiğinin düz listesi; kendi sözlerinizle aktarmak için |
| `pins_list`, `decision_add` | Oku, Düzenle | Sesli notlar (uzunluk, kim, ne zaman, açıklama; ses ya da metin dökümü hiçbir zaman yok) ve kararlar; bir kararı iğneleyin ve önceki birini değiştirin |
| `redline_export`, `redline_answer` | Dışa aktar, Düzenle | Çizimci için redline dosyasını yazar; çizimcinin yanıtlarını uygular |

Asistanın eklediği bir işaretleme, yazar olarak asistan programının kendisine verdiği adı, ardından "(asistan)" ya da inceleyici adınızı ayarladıktan sonra "(<adınız> için asistan)" ile belirtir. Durum değişiklikleri ve yanıtlar da aynı şekilde imzalanır. Her biri tek bir geri alma adımıdır. İşaretlenmiş PDF'yi kaydetmek sizde kalır: her zamanki gibi {{ui:Kaydet}} kullanın.

MarkupCraft'ı açmadan, CadCraft MCP sunucusu adını verdiğiniz bir klasördeki bir PDF'nin işaretlemelerini listeler (`markups_list`); `cadcraft info Set.pdf` ise bunları komut satırına yazdırır.

## Bir şey çalışmıyorsa

- **Asistan MarkupCraft araçlarını görmüyor:** anahtarın bu pencerede açık olduğunu ve pencerenin Studio'da açık olduğunu kontrol edin.
- **"düzenleme iznine ihtiyacı var":** {{ui:Asistanlar}} altında **Düzenle**'yi işaretleyin, sonra yeniden sorun.
- **"401" ya da "belirteç" hataları:** belirteç değişti (Studio yeniden başlatıldı ya da {{ui:Yeni belirteç}} seçildi). Yeni belirteci asistanın ayarlarına kopyalayın.

## Ayrıca bkz.

- [Yapay zekâ asistanları için tarifler](common:assistants-recipes): her biri çağırdığı araçlarla birlikte çalışılmış örnekler.

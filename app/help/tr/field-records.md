---
title: RFI, onay dosyası ve günlük kayıtlarını izleyin
summary: RFI, onay dosyası ve günlük kayıtlarını sayfalara ekleyin; numaraları, atananları, son tarihleri ve yanıt zincirlerini girin; süresi geçenleri filtreleyin; CSV ya da BCF olarak dışa aktarın; çevrimdışı çalışın ve kopyaları birleştirin.
keywords: rfi, bilgi talebi, onay dosyası, günlük kayıt, saha raporu, şantiye günlüğü, inşaat, süresi geçmiş, son tarih, bana atananlar, konu, ek, birleştir, çevrimdışı, tablet, bcf, csv, saha
from: 95039c5a
---

{{ui:Saha}} sekmesi, işaretlemelerinizin yanında üç tür kayıt tutar. Her kayıt bir sayfaya bağlıdır; bir RFI ya da onay dosyasının ayrıca, ilgili olduğu sayfa üzerindeki yerde bir iğnesi vardır.

- **RFI**: tasarım ekibine bir soru. Durumlar: Açık, Yanıtlandı, Kapalı.
- **Onay dosyası**: iş ilerlemeden önce incelenmesi gereken bir belge. Durumlar: Açık, İncelemede, Onaylandı, Notlarla onaylandı, Revize edip yeniden gönderin, Kapalı.
- **Günlük kayıt**: günün hava durumu, sahadaki kişi sayısı ve yapılan iş. Durumlar: Taslak, Son.

Her kaydın kendi türüne ait bir numarası (RFI-0001, SUB-0001, LOG-0001), bir başlığı, bir metni, bir atananı, bir son tarihi, bir yanıt zinciri ve bir ek adları listesi vardır.

## Yeni kayıt ekleyin

1. {{ui:Saha}} sekmesini açın ve {{ui:RFI}} ya da {{ui:Onay dosyası}} seçin.
2. Ait olduğu sayfaya dokunun ya da tıklayın. Bir iğne belirir ve kayıt sekmede açılır.
3. Başlığı, soruyu ya da açıklamayı, kime atandığını ve ne zaman teslim edileceğini doldurun.

Günlük kayıt, açık sayfaya iğnesiz eklenir. {{ui:İğne yerleştir}} bunun üzerine daha sonra bir iğne koyar; {{ui:İğneyi taşı}} herhangi bir iğneyi taşır. Sayfadaki bir iğneye dokunmak kaydını açar.

## Yanıtlayın ve izleyin

{{ui:Durum}} değiştirildiğinde değişiklik yanıt zincirine kaydedilir. Bir yanıt yazın ve {{ui:Yanıtı gönder}} seçin (Ctrl+Enter da gönderir). Ekler yalnızca ad olarak tutulur: bir ad yazın ya da dosyaları seçin; liste, ekibe kayda neyin ait olduğunu gösterir. Dosyaların kendisi olduğu yerde kalır.

Son tarihi geçmiş ve hâlâ beklemede olan bir kayıt (Yanıtlanmış ya da Kapalı olmayan bir RFI, karara bağlanmamış bir onay dosyası) listede ve iğnesinde kırmızı renkte **Süresi geçmiş** olarak işaretlenir.

## Önemli olanları bulun

Filtreler listenin üstündedir: tür, durum, son tarih (süresi geçmiş, 7 gün içinde, son tarihi olan ya da olmayan), bu sayfa ya da tüm sayfalar, bir metin araması ve {{ui:Bana atananlar}}. Bu seçenek atananı, MarkupCraft'in sizi tanıdığı adla karşılaştırır (bkz. [Adınızı belirleyin](topic:set-your-name)). Filtrelerin altındaki satır, gösterilenleri ve süresi geçenleri sayar.

## Dışa aktarma

{{ui:CSV}} listelenen kayıtları bir elektronik tablo olarak yazar. {{ui:BCF}} bunları, her biri sayfadaki yerinin bir görüntüsünü içeren BCF konuları olarak yazar; böylece diğer BCF araçları bunları listeleyebilir. İkisi de filtreleri izler.

## Kaydetme, çevrimdışı çalışma ve kopyaları birleştirme

Kayıtlar PDF'i kaydettiğinizde PDF'in içine yazılır ve dosyayı açtığınızda geri gelir. Ağ gerekmez: bir tablette bodrumda ekleme, düzenleme, yanıtlama ve kaydetme yapın, sonra PDF'i geri getirin. Eski PDF'ler ve diğer programların PDF'leri her zaman olduğu gibi açılır.

İki kopyayı birleştirmek için birini açın, {{ui:Birleştir}} seçin ve ardından aynı PDF'in diğer kopyasını seçin. Kayıtlar kimlikleriyle eşleştirilir:

- yalnızca bir kopyada bulunan bir kayıt eklenir;
- iki kopyada da bulunan bir kayıt, alanlarını (başlık, metin, durum, atanan, son tarih) en son değiştirilen kopyadan bütün olarak alır; yani iki kişi aynı kaydın farklı alanlarını değiştirdiyse, sonraki kopyanın sürümü geçerli olur; iki kopyadaki yanıt zincirleri ve ek adları birleştirilir;
- iki kopya da yeni bir kaydı aynı numarayla numaralandırdıysa, sonradan gelen kayıt bir sonraki boş numarayı alır;
- bir kopyada silinen bir kayıt, sonradan düzenlenmediyse silinmiş kalır.

Birleştirme tek bir geri alma adımıdır.

## Sınırlar

- Kayıtlar henüz Canlı TeamWork ile paylaşılmaz; {{ui:Birleştir}} seçeneğini kullanın.
- Bu sürümde kayıtlar için ekip, bildirim ya da bulut projesi yoktur.
- PDF'ten silinen sayfalar kayıtlarını da beraberinde götürür (sayfa onayı bunları sayar).

---
title: Ekrana ümumi baxış
summary: Alət paneli, vərəqlər siyahısı, vərəq sahəsi, sağdakı beş panel və status sətri, ekrandakı adları ilə.
keywords: ekran, tərtib, alət paneli, panellər, kiçik şəkillər, xüsusiyyətlər, status sətri, interfeys, tam ekran, mövzu, qaranlıq rejim
from: 18d82de6
---

MarkupCraft brauzer pəncərəsini doldurur. Yuxarıdan aşağıya və soldan sağa:

## Ən yuxarıdakı panel

Ən yuxarıdakı nazik panel hər şeydən yuxarıdadır və MarkupCraft-ın özünə deyil, CadCraft ailəsinə aiddir. Burada var:

- tətbiqin adı və işlətdiyiniz versiya,
- {{ui:MarkupCraft haqqında}}, tətbiqin veb saytdakı səhifəsini açır,
- {{ui:Kömək}}, bu kömək yan paneldə açılır (və ya {{key:F1}} basın),
- {{ui:Oflayn üçün saxla}}, MarkupCraft, onun PDF oxucusu və yazıcısı və bu kömək bu brauzerdə saxlanılır ki, bağlantısız açılsın; sonra "Oflayn hazırdır" yazır (bax [Oflayn işləmək](common:offline)),
- ekran rejimi düyməsi ({{ui:Tam ekran}}), və
- {{ui:Parametrlər}} (və ya {{key:Mod+,}}), bu tətbiqin öz parametrləri üçün {{ui:MarkupCraft}} sekmesi və bütün CadCraft tətbiqlərinin paylaşdığı {{ui:Ümumi}} ilə (bax [MarkupCraft parametrləri](topic:settings)), və
- {{ui:Kağız}} və {{ui:Model}}, açıq və tünd mövzular. {{ui:Model}} rejimində vərəqlər tünd fonda açıq rənglərlə çəkilir; qeydləriniz öz rənglərini saxlayır.

Ekran rejimi düyməsi və ya {{key:Ctrl+Shift+F}} üç rejim arasında keçir: normal, tam ekran və panelləri gizlədilmiş tam ekran. Paneller gizli olanda göstəricini ekranın yuxarı kənarına aparın (və ya orada toxunun) — onlar geri sürüşəcək. Bu qısayol hər kompüterdə Control düyməsini istifadə edir, Mac daxil olmaqla.

:::note
Tam ekranda {{key:Esc}} də brauzeri tam ekrandan çıxarır. Yalnız çəkilişi ləğv etmək istəmisinizsə, {{key:Ctrl+Shift+F}} basın ki, yenidən tam ekrana qayıdasınız.
:::

## Alət paneli

Yuxarı paneldən aşağıda alətlər qruplaşdırılıb və etiketlənib:

| Qrup | Düymələr |
|---|---|
| Fayl | {{ui:Aç}}, {{ui:Saxla}}, {{ui:Bağla}} |
| Seç | {{ui:Seç}}, {{ui:Sürüşdür}} |
| Çəkiş | {{ui:Qələm}}, {{ui:Vurğulama}}, {{ui:Xətt}}, {{ui:Ox}}, {{ui:Düzbucaqlı}}, {{ui:Ellips}}, {{ui:Polixətt}}, {{ui:Çoxbucaqlı}} |
| Düzəliş | {{ui:Bulud}}, {{ui:Sərbəst bulud}} |
| Qeydlər | {{ui:Çağırış}}, {{ui:Mətn}}, {{ui:Qeyd}}, {{ui:Ştamp}} |
| Ölçü | {{ui:Kalibrlə}}, {{ui:Uzunluq}}, {{ui:Sahə}}, {{ui:Say}} |
| Redaktə | {{ui:Geri qaytar}}, {{ui:Təkrarla}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, və {{ui:Digər}}: {{ui:Kəs}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, {{ui:Yerində yapışdır}}, {{ui:Dublikat yarat}}, {{ui:Sil}}, {{ui:Hamısını seç}}, {{ui:Heç birini seçmə}} |

İstifadə etdiyiniz alət basılmış görünür. Düymənin üzərində göstəricini saxlayın ki, qısa yolunu görəsiniz (məsələn, "Düzbucaqlı (R)"); {{ui:Digər}} menyusu hər əmrin qısa yolunu yanında sadalayır. Hal-hazırda işləyə bilməyən düymələr solğun olur: heç bir şey seçmədikcə {{ui:Kopyala}}, heç nə kopyalanmayınca {{ui:Yapışdır}}. {{ui:Saxla}} düyməsindən sonra kiçik nöqtə bəzi qeydlərin hələ saxlanmadığını göstərir. Bütün qısa yollar [Klaviatura və siçan](topic:keyboard) bölməsindədir.

Alət çəkdikdən sonra da aktiv qalır, buna görə bir-birinin ardınca bir neçə bulud çəkə bilərsiniz. Ləğv etmək üçün {{key:Esc}} basın (yeni qeyd hələ seçilidirsə, iki dəfə) və ya {{ui:Seç}}-ə qayıtmaq üçün {{key:V}} basın.

## Vərəqlər siyahısı (solda)

{{ui:Vərəqlər}} açıq olan hər PDF-in hər səhifəsini sadalayır. Hər sətir vərəqin kiçik şəklini, adını, vərəq nömrəsini və ya faylı və səhifəsini, habelə neçə qeydi olduğunu göstərir. Başlıqdan sonrakı say vərəqlərin sayıdır.

- Vərəqi göstərmək üçün sətirə basın.
- {{ui:Vərəqləri axtar}} sahəsinə yazın ki, vərəq adı, vərəq nömrəsi və ya fayl adına görə süzəsiniz. İlk uyğunluğu açmaq üçün {{key:Enter}} basın.

Vərəq adları PDF-də olduqda ondan götürülür. Bax [Plan dəstini açın və vərəqlər arasında keçin](topic:open-a-plan-set).

## Vərəq sahəsi (ortada)

Üzərində işlədiyiniz vərəq. Heç nə açılmayıbsa, {{ui:PDF-ləri aç}} düyməsi ilə "Plan dəstini açın" yazılır. Açmaq üçün PDF-ləri bura istənilən yerə atın.

Vərəqin altında dar bir sətir var:

- əvvəlki və növbəti vərəq oxları, və "12-dən 3: A-101 — Mərtəbə planı" (faylı və səhifəni görmək üçün üzərində göstəricini saxlayın),
- miqyası azaldın, miqyas qutusu (faiz yazın və {{key:Enter}} basın; 100% tipik ekranda həqiqi ölçüdür), miqyası artırın,
- {{ui:Səhifəni sığdır}} və {{ui:Ən üzrə sığdır}}.

Hər vərəq dəst açıq olduğu müddətdə öz miqyasını yadda saxlayır.

İki vərəqi müqayisə edəndə burada legenda görünür: "Yalnız köhnə vərəqdə", "Yalnız yeni vərəqdə" və "Hər ikisində". Bax [İki revizyonu müqayisə edin](topic:compare-revisions).

## Panellər (sağda)

Beş sekmə:

| Sekmə | Nəyi göstərir |
|---|---|
| {{ui:Xüsusiyyətlər}} | Seçilmiş qeyd: müəllif, tarixlər, ölçülmüş dəyərlər, status, mövzu, mətn, şərh, üslub, cavabları və nöqsan elementi. Çəkiş aləti açıq və heç nə seçilməyibsə, yeni qeydlərin istifadə edəcəyi parametrlər. Heç nə seçilməyib və {{ui:Seç}} açıqdırsa, vərəq: nömrəsi, başlığı, adın haradan oxunduğu, kağız ölçüsü, miqyas və {{ui:Vərəqi yenidən adlandır}}. |
| {{ui:Qeydlər}} | Açıq dəstdəki hər qeyd, süzgəclərlə, habelə {{ui:CSV}} və {{ui:BCF}} ixracları. Bax [Qeydlər siyahısı](topic:markups-list-and-export). |
| {{ui:Nöqsan siyahısı}} | Nömrələnmiş nöqsan elementləri: məsul şəxs, son tarix və status. Bax [Nöqsan siyahısı hazırlayın](topic:punch-list). |
| {{ui:Alətlər}} | Alət sandığı: saxlanmış, üslublu alətlər. Bax [Alət sandığı](topic:tool-chest). |
| {{ui:Müqayisə}} | İki vərəqi üst-üstə qoyun. Bax [İki revizyonu müqayisə edin](topic:compare-revisions). |

## Status sətri (aşağıda)

- Solda, göstərici vərəq üzərində olanda, kağızda düymlə (və ya [Parametrlər](topic:settings)-də millimetrlə) göstərilir.
- Ortada mesajlar: alətin növbəti nə gözlədiyi, nə yadda saxlandığı, nə üçün nəsə rədd edildiyi. **Bir şey baş vermədikdə buna baxın.**
- Vərəqin miqyas düyməsi ("Kalibrlənməyib" və ya miqyas). Miqyas təyin etmək üçün basın. Bax [Vərəqi kalibrləyin və ölçün](topic:calibrate-and-measure).
- Adınız ("Adınızı təyin edin" adını verənə qədər). Dəyişmək üçün basın.

## Kiçik ekranda

Təxminən 1180 pikseldən dar ekranlarda panellər daha dar olur və vərəq şəkilləri kiçilir. Telefon ölçüsündə ekranda hissələr üst-üstə yığılır: alət paneli (yan tərəfə sürüşdürün), vərəq, status sətri, panellər, sonra aşağıda vərəqlər siyahısı. Üfüqi vəziyyətdə planşet tam tərtibatı saxlayır.

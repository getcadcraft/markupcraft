---
title: Başqa qeyd proqramlarından keçid
summary: Masaüstü PDF qeyd proqramının vərdişlərinin MarkupCraft-a necə uyğun gəldiyi və insanları çaşdıran fərqlər.
keywords: keçid, köçmək, köçürmə, tanış, masaüstü pdf qeydi, alət sandığı, qeydlər siyahısı, üst təbəqə, sessiyalar, profil, qısayollar, fərqlər
from: c8f323e1
---

Bluebeam Revu-da çertyojları yoxlayırsınızsa (və ya başqa masaüstü PDF proqramında PDF-lərə şərh yazırsınızsa), MarkupCraft-ın çox hissəsi tanış görünəcək: buludlar, çağırışlar, alət sandığı, qeydlər siyahısı, cavabları olan statuslar, kalibrlənmiş ölçülər, vərəq üst-üstə qoymaları. Fayllarla işləmə üsulu əsas fərqdir, ona görə qalanını keçsəniz belə, növbəti bölməni oxuyun.

## Vacib beş fərq

1. **Saxla yeni fayl yaradır.** MarkupCraft brauzerdə işləyir və diskinizdəki PDF-in üzərinə yaza bilmir. {{ui:Saxla}} "<name> (marked up).pdf" endirir və orijinal dəyişməz qalır. Növbəti dəfə "(marked up)" nüsxəni açın və köhnə nüsxələri özünüz təmizləyin.
2. **PDF yalnız saxladığınızda yazılır.** Saxlanılana qədər bu brauzerdəki bərpa nüsxəsi nasazlıq və ya bağlanmış sekmə zamanı qeydlərinizi saxlayır və növbəti dəfə MarkupCraft onu təklif edir. Bu təhlükəsizlik şəbəkəsidir: yoxlamanı saxlamaq üçün PDF-i saxlayın.
3. **Profiliniz brauzerdədir.** Müəllif adınız, alət parametrləriniz və alət sandığınız bu kompüterdə, bu brauzerdə saxlanılır. Başqa brauzer və ya kompüter təzədən başlayır, sayt məlumatlarını təmizləmək isə onları silir. Ehtiyat nüsxə üçün alət sandığınızı ixrac edin. Bax: [Bu brauzerdə nə saxlanılır](topic:browser-storage).
4. **Hələ paylaşılan sessiyalar yoxdur.** Canlı, paylaşılan yoxlama sessiyası və bulud layihəsi yoxdur. Yoxlama PDF ilə gedir: saxlayın, nüsxəni göndərin, növbəti şəxs cavab verir və saxlayır.
5. **Miqyas vərəq üzrə və yalnız vərəq üzrədir.** Vərəqin daxilində viewport-lar yoxdur və "bu miqyası bütün səhifələrə tətbiq et" seçimi yoxdur. Ölçdüyünüz hər vərəqi kalibrləyin.

## Vərdiş-vərdiş

| Öyrəşdiyiniz | MarkupCraft-da |
|---|---|
| Miniatürlər paneli, səhifə etiketləri | Solda {{ui:Vərəqlər}}. Adlar səhifə etiketlərindən gəlir və ya ştamp blokundan oxunur; onları {{ui:Vərəqi yenidən adlandır}} ilə düzəldin. |
| Bir neçə PDF-i dəst kimi açmaq | Hamısını birdən açın; onlar bir siyahı olur. Dəst faylı saxlanılmır: növbəti dəfə eyni PDF-ləri açın. |
| Alət dəstləri ilə alət sandığı | {{ui:Alətlər}} sekməsi: brauzer üzrə bir sandıq, üslub və mövzu ilə saxlanılmış alətlər. Paylaşmaq üçün JSON fayl kimi {{ui:İxrac et}} və {{ui:İdxal et}}. Digər proqramların alət dəst faylları idxal oluna bilməz. |
| Xüsusiyyətlər paneli | {{ui:Xüsusiyyətlər}} sekməsi: status, mövzu, şərh, üslub, cavablar və nöqsan elementi bir yerdə. |
| Sütunlu qeydlər siyahısı | {{ui:Qeydlər}} sekməsi: vərəq, müəllif, status və növ üzrə süzgəclərlə. CSV və ya BCF ixrac edin. Fərdi sütunlar və PDF və ya iş kitabı xülasəsi hələlik yoxdur. |
| Status və baxış vəziyyəti | {{ui:Status}}: Açıq, Qəbul edilib, Rədd edilib, Tamamlanıb. Fərdi status dəstləri yoxdur. Standart baxış vəziyyətləri kimi saxlanılır. |
| Qeydlər üzərində cavablar | {{ui:Xüsusiyyətlər}}-də "Cavablar" silsiləsi; status dəyişiklikləri onda qeyd olunur. Göndərilmiş cavab redaktə edilə bilməz. |
| Kalibrləmə, sonra uzunluq, sahə, say | {{ui:Kalibrlə}}, {{ui:Uzunluq}} ({{key:M}}), {{ui:Sahə}} ({{key:Q}}, sahə və perimetr verir), {{ui:Say}} ({{key:U}}). Hələlik bucaq, radius, həcm, polixətt uzunluğu və deşik yoxdur. |
| Səhifələri üst-üstə qoymaq | {{ui:Müqayisə}} sekməsi: köhnə üçün qırmızı, yeni üçün mavi, iki nöqtə ilə düzləşdirmə. Avtomatik "sənədləri müqayisə et" buludlaması yoxdur. |
| Ştamplar | {{ui:Ştamp}} altı daxili ştamp və fərdi mətn ilə, adınız və tarix ilə imzalanır. Hələlik şəkil və ya imza ştampları yoxdur. |
| Nöqsan və ya məsələ izləmə | {{ui:Nöqsan siyahısı}} sekməsi: təyin olunmuş şəxs, son tarix və statusu olan nömrəli elementlər; CSV ixrac. |
| Canlı əməkdaşlıq sessiyası | Hələ mövcud deyil. Saxlanılmış PDF-i ötürün. |
| Yastılaşdırma | Hələ hazır deyil. Qeydlər başqa baxanların göstərə və çap edə biləcəyi şərhlər kimi qalır. |
| Qeydlər üçün təbəqələr | Hələ hazır deyil. Şərhləri çeşidləmək üçün mövzulardan, müəlliflərdən və siyahı süzgəclərindən istifadə edin. |
| Vərəqlər arasında hiperlinklər | Hələ hazır deyil. |
| Boşluq düyməsi ilə sürüşdürmə, təkərlə zoom | Eynidir: {{key:Space}} basılı saxlayın və sürükləyin; təkər göstərici yerində zoom edir. Təkər heç vaxt səhifəni sürüşdürmür. |

## Fərqli düymələr

Bir hərfli düymələrin çoxu gözlədiyiniz kimidir, lakin barmaqlarınız bunu sizin əvəzinizə etməmişdən əvvəl bunları yoxlayın:

- {{key:K}} {{ui:Çağırış}}-dır, {{key:Q}} isə {{ui:Sahə}}-dir. Çağırışlar üçün Q-yə öyrəşmisinizsə, burada sahə başlayacaq.
- {{key:C}} qutu {{ui:Bulud}}-dur; {{key:Shift+C}} {{ui:Sərbəst bulud}}-dur.
- {{key:M}} {{ui:Uzunluq}}, {{key:U}} {{ui:Say}}, {{key:Y}} {{ui:Polixətt}}, {{key:G}} {{ui:Çoxbucaqlı}}, {{key:I}} {{ui:Vurğulama}}-dır.
- {{key:Mod+D}} seçimi təkrarlayır (brauzerin əlfəcinini yox).
- {{key:Mod+Plus}} və {{key:Mod+Minus}} brauzer səhifəsini yox, vərəqi zoom edir.
- Hər düymə dəyişdirilə bilər: aşağıya baxın.

:::tip
Barmaqlarınız Bluebeam Revu-nu tanıyırsa, {{ui:Parametrlər}} › {{ui:MarkupCraft}} › {{ui:Menyular, düymələr və siçan}} bölməsində {{ui:PDF yoxlaması}} menyu üslubunu seçin: menyu paneli (Fayl, Redaktə, Görünüş, Sənəd, Qeyd, Ölç, Pəncərə) və yoxlama alətləri sırası, {{key:Q}} çağırış üçün, {{key:H}} vurğulayıcı üçün, {{key:N}} çoxbucaqlı üçün, ölçülər isə {{key:Alt+Shift}} və bir hərflə. Hər düymə burada da dəyişdirilə bilər. Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).
:::

Tam siyahı [Klaviatura və siçan](topic:keyboard) bölməsindədir.

## Fərqli işləyən şeylər

- **Alətlər aktiv qalır.** Buluddan sonra hələ də bulud çəkirsiniz. {{key:Esc}} bir dəfə seçimi silir, iki dəfə {{ui:Seç}} alətinə qayıdır.
- **Mətn və çağırışlar mətn tələb edir.** Heç nə yazmadan bitirsəniz, qeyd əlavə olunmur. Qeydlər boş saxlanılır.
- **Ölçmək üçün əvvəlcə miqyas lazımdır.** {{ui:Uzunluq}} və {{ui:Sahə}} kalibrlənməmiş vərəqdə {{ui:Kalibrlə}} rejiminə keçir və sonra geri qayıdır.
- **Başqa proqramlardan şərhlər.** Başqa yerdə yaradılmış düzbucaqlılar, ellipslər, xətlər, polixətlər, çoxbucaqlılar, mürəkkəb, mətn qutuları və stikerlər redaktə edilə bilən MarkupCraft qeydlərinə çevrilir və saxladığınızda MarkupCraft qaydasında yenidən yazılır (görünüşləri bir az dəyişə bilər). Mətn vurğulamaları, başqa proqramların ştampları və digər xüsusi növlər yalnız oxunur: onlara cavab verə bilərsiniz, dəyişə bilməzsiniz.
- **Qərb Avropa hərflərindən kənar simvollar** saxlanılmış PDF-də "?" kimi çap olunur. Bax: [Qeydlənmiş PDF-i saxlayın](topic:save-the-marked-up-pdf).
- **Ştamp tarixləri** UTC istifadə edir, ona görə Amerikada axşam gec yaradılmış ştamp sabahkı tarixi göstərə bilər.
- **Ölçülər** standart ölçü şərhləri kimi köçür və hər kalibrlənmiş vərəq öz miqyasını saxlayır, ona görə PDF ölçülərini oxuyan proqram onları adətən göstərə bilir. Dəqiq davranış o proqramdan asılıdır.

## İkisindən istifadə

Bir proqramdan digərinə qayıda bilərsiniz. Başqa yerdə edilmiş şərhlər MarkupCraft-da açılır, "(marked up)" PDF isə digər PDF proqramlarında bütün qeyd, cavab və statuslar görünən halda açılır. Yalnız MarkupCraft-ın oxuduğu məlumatlar (nöqsanın təyin olunmuş şəxsi və son tarixi, element statusu) MarkupCraft üçün faylda saxlanılır.

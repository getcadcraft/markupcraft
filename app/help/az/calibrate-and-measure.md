---
title: Vərəqi kalibrləyin və ölçün
summary: Hər vərəqin miqyasını hazır seçimdən və ya məlum ölçüdən təyin edin, sonra uzunluqları, perimetrli sahələri və saymaları ölçün.
keywords: kalibrləmə, miqyas, miqyası təyin et, ölçmə, uzunluq, məsafə, ölçü, sahə, kvadrat fut, perimetr, say, miqdar, xətkeş, hesablama, toplama, kəsr
from: 49a25c6d
---

Uzunluqlar və sahələr vərəqin miqyasını bilməlidir. MarkupCraft miqyası **hər vərəq üçün** saxlayır: ölçdüyünüz hər vərəqi kalibrləyin. Saymaq üçün miqyas lazım deyil.

Status panelində cari vərəqin miqyası və ya "Kalibrlənməyib" göstərilir.

## Siyahıdan miqyas seçin

Bunu PDF tam ölçüdə olduqda (24 × 36 vərəq 24 × 36 çap olunur) və çertyojda miqyas göstərildikdə istifadə edin.

1. Status panelindəki miqyas düyməsinə ("Kalibrlənməyib") klikləyin. "Vərəq miqyası" qutusu açılır.
2. {{ui:Miqyas}} altında miqyası seçin: memarlıq (1/32" = 1'-0" ilə 3" = 1'-0" arası), mühəndislik (1" = 10' ilə 1" = 100' arası) və ya metrik (1:1 ilə 1:1000 arası).
3. {{ui:Miqyası təyin et}} seçin.

Nəticə: status panelində miqyas göstərilir, məsələn `1/4" = 1'-0"`. Memarlıq miqyasları uzunluqları fut və düymlə, mühəndislik miqyasları onluq futla, metrik miqyaslar 1:50-ə qədər millimetrlə, 1:100-dən etibarən isə metrlə göstərir.

:::warning
Hazır seçim yalnız PDF kiçildilməyibsə düzgündür. Yarı ölçülü dəst və ya yaradılanda "səhifəyə sığdır" seçilmiş vərəq hazır seçimlə səhv ölçülür. Bunun əvəzinə məlum ölçüdən kalibrləyin və hər halda bir ölçünü yoxlayın.
:::

## Məlum ölçüdən kalibrləyin

Bunu yarı ölçülü dəstlər, skan edilmiş vərəqlər, qeyri-standart miqyaslı detallar üçün və ya hazır seçimi yoxlamaq üçün istifadə edin.

1. Etibar etdiyiniz uzun ölçü və ya qrafik miqyas çubuğu tapın.
2. {{ui:Ölç}} qrupunda {{ui:Kalibrlə}} seçin (və ya "Vərəq miqyası" qutusunda {{ui:İki nöqtə seçin}} seçin).
3. Ölçünün bir ucuna, sonra digər ucuna klikləyin (və ya bir ucdan digərinə sürükləyin). Dəqiqlik üçün əvvəlcə yaxınlaşdırın; {{key:Shift}} xətti 45° addımlarla saxlayır.
4. Qutuda nöqtələrin kağız üzərində nə qədər aralı olduğu göstərilir və "Onlar həqiqətən nə qədər aralıdır?" sualı verilir. {{ui:Həqiqi məsafə}} yazın, məsələn `24'-0"`, `12' 6 1/2"`, `7.2 m` və ya `900 mm`.
5. {{ui:Uzunluqları göstər}} altında uzunluqların necə göstəriləcəyini seçin: {{ui:Fut və düym}}, {{ui:Onluq futlar}}, {{ui:Düymlər}}, {{ui:Metrlər}} və ya {{ui:Millimetrlər}}.
6. {{ui:Miqyası təyin et}} seçin.

Nəticə: status panelində "Kalibrlənib: 24'-0" 1.00 in üzərində" göstərilir (həqiqi uzunluq və kağız üzərindəki uzunluq), ölçmək üçün seçdiyiniz alət yenidən aktiv olur. Uzunluğu yazmağın bütün üsulları [Vahidlər və uzunluqlar](topic:units-and-scales) bölməsindədir.

Həqiqi məsafə kiçik bir hesablama da ola bilər: `12'6"+3/4"`, `(24'-0")/3` və ya `2*450mm`. `+ - * /` və mötərizələrdən istifadə edin; vahidsiz ədəd {{ui:Uzunluqları göstər}} altında seçilmiş vahidlə sayılır (ölçü {{ui:Fut və düym}} üçündürsə, futla). {{ui:Miqyası təyin et}} nəticəni istifadə edir.

Yazdığınızı MarkupCraft oxuya bilmirsə, qutu bunu deyir: "Bu MarkupCraft-ın başa düşdüyü uzunluq deyil. Cəhd edin: 24'-0", 12' 6 1/2", 7.2 m və ya 900 mm." Hesablamanı həll edə bilmirsə, səbəbini və yerini göstərir, məsələn "Mötərizə bağlanmayıb (simvol 5)."

## Uzunluğu ölçün

1. {{ui:Uzunluq}} ({{key:M}}) seçin.
2. Başlanğıca, sonra sona klikləyin. Və ya başlanğıcdan sona sürükləyin. {{key:Shift}} onu 45° addımlarla saxlayır.

Nəticə: üzərində uzunluq yazılmış, ştrixli ölçü xətti. Status paneli onu təkrarlayır ("Uzunluq: 12'-6 1/2" (1/4" = 1'-0")."), {{ui:Xüsusiyyətlər}} isə onu {{ui:Uzunluq}} altında göstərir. Fut və düymlər ən yaxın 1/16"-ə yuvarlaqlaşdırılır.

Vərəqin hələ miqyası yoxdursa, {{ui:Uzunluq}} seçdikdə {{ui:Kalibrlə}} rejiminə keçilir və status paneli izah edir: "Əvvəlcə bu vərəqi kalibrləyin: bir-birindən məlum məsafədə olan iki nöqtə seçin və ya onun miqyasını seçin. Sonra ölçün." Miqyası təyin etdikdən sonra {{ui:Uzunluq}} geri qayıdır.

## Miqyaslı çəkmə

Kalibrlənmiş vərəqdə {{ui:Xətt}}, {{ui:Ox}}, {{ui:Uzunluq}}, {{ui:Polixətt}}, {{ui:Çoxbucaqlı}}, {{ui:Sərbəst bulud}}, {{ui:Sahə}} və ya bir məkan çəkərkən real uzunluqları yaza bilərsiniz:

1. Birinci nöqtəyə klikləyin.
2. Növbəti parçanın istiqamətini göstərin və uzunluğunu yazın, məsələn `16` (vərəqin vahidində), `12'6"` və ya `3.5 m`. Yazdıqca göstərici yanında qutu açılır.
3. {{key:Enter}} basın. Nöqtə göstəricinin istiqamətində o qədər məsafədə yerləşir.

İstiqaməti dəqiq təyin etmək üçün `<` və dərəcə ilə bucaq əlavə edin: `8 < 90` düz yuxarı 8 fut gedir, `4<0` sağa, `10 < 225` aşağı və sola, vərəq necə göründüyü kimi (fırlanmış səhifələr daxil olmaqla). Növbəti künclər üçün uzunluqları yazmağa davam edin və forması adi qaydada tamamlayın. {{key:Esc}} qutunu nöqtə qoymadan bağlayır.

## Bucağı ölçün

1. {{ui:Bucaq}} ({{key:X}}) seçin.
2. Bir qolun ucuna, sonra künca, sonra digər qolun ucuna klikləyin.

Nəticə: iki qol, künccə kiçik qövs və dərəcə ilə bucaq, onda birinə qədər (0° ilə 180° arası). Bucaq üçün miqyas lazım deyil. {{ui:Xüsusiyyətlər}} onu {{ui:Bucaq}} altında göstərir; siyahı, CSV və BCF onu daşıyır.

Kalibrlənmiş vərəqdə {{ui:Qövs}} ({{key:O}}) da {{ui:Xüsusiyyətlər}}-də əyri boyunca uzunluğunu göstərir.

## Sahəni və perimetri ölçün

1. {{ui:Sahə}} ({{key:Q}}) seçin.
2. Otağın və ya bölgənin hər künclərinə klikləyin.
3. İki dəfə klikləməklə, {{key:Enter}} ilə və ya sağ kliklə bitirin (toxunma ekranında iki dəfə toxunun). {{key:Backspace}} son künci silir.

Nəticə: kölgəli kontur, ortada sahə və "P" ilə perimetr, məsələn "128.00 sq ft" və "P 48'-0"". Fut miqyasları kvadrat fut, düym miqyasları kvadrat düym, metr miqyasları kvadrat metr, millimetr miqyasları kvadrat millimetr verir. Sahə üçün ən azı üç künc lazımdır.

### Deşiklər

Sütun, şaxta və ya həyət kimi bir hissəni çıxmaq üçün sahəni seçin və {{ui:Xüsusiyyətlər}}-də {{ui:Deşik əlavə et}} seçin. Deşiyin künclərinə sahənin içində klikləyin və sahə üçün olduğu kimi bitirin. Deşik açıq qalır (kölgəsiz), sahəsi çıxılır, kənarları isə perimetrə əlavə olunur: 16' × 8' otaq və 4' × 4' deşik "112.00 sq ft" və "P 64'-0"" göstərir. Lazım olan qədər əlavə edin; onlar bir-birini üst-üstə düşə və ya sahənin konturunu kəsə bilməz. {{ui:Kəsikləri sil}} hamısını çıxarır, {{key:Mod+Z}} isə birini geri qaytarır.

## Say

1. {{ui:Say}} ({{key:U}}) seçin.
2. {{ui:Xüsusiyyətlər}}-də {{ui:Qrupun adı}} yazın, məsələn "Mərtəbə drenajları". (Növbəti dəfə üçün saxlanılır.)
3. Vərəqdə hər elementə klikləyin.

Nəticə: hər klik nömrəli nöqtə əlavə edir, birinci nöqtə "Mərtəbə drenajları: 7" kimi etiket daşıyır və status paneli cəmi göstərir.

- **Başqa qrup başlayın:** {{key:Esc}} bir dəfə basın (seçimi silir), {{ui:Qrupun adı}} dəyişin və yenidən klikləyin.
- **Mövcud qrupa əlavə edin:** əvvəlcə qrupu seçin, sonra {{ui:Say}} seçin və klikləyin.
- **İşarəni silin:** qrup seçili olduqda {{key:Shift}} düyməsini basılı saxlayın və nöqtəyə klikləyin. Son nöqtəni silmək qrupu da silir. Klaviaturası olmayan toxunma ekranında {{key:Mod+Z}} və ya {{ui:Geri qaytar}} istifadə edin.
- **Qrupun adını dəyişin:** onu seçin və {{ui:Xüsusiyyətlər}}-də {{ui:Qrupun adı}} redaktə edin.

Say qrupu bir vərəqə aiddir. Bir neçə vərəqdəki saylar qeydlər siyahısında ayrı qruplar kimi göstərilir.

## Miqyası dəyişin və ya silin

Status panelindəki miqyas düyməsinə klikləyin. Qutu cari miqyası göstərir; başqasını seçin, {{ui:İki nöqtə seçin}} seçin və ya {{ui:Miqyası sil}} seçin.

Artıq çəkilmiş uzunluqlar və sahələr yeni miqyasla dərhal **yenidən ölçülür**. Geri qaytarma köhnə miqyası bərpa edir.

## Rəqəmlərin getdiyi yer

- {{ui:Xüsusiyyətlər}} seçilmiş ölçünün dəyərlərini göstərir.
- {{ui:Qeydlər}} sekməsi hər dəyəri siyahılayır və onun CSV-sində "Ölçü" sütunu var. Bax: [Qeydlərin siyahısı](topic:markups-list-and-export).
- Saxlanılmış PDF miqyası səhifədə saxlayır və uzunluqları və sahələri ölçü şərhləri kimi yazır, beləliklə ölçüləri başa düşən digər PDF proqramları onları göstərə bilər. Bax: [PDF-də nə saxlanılır](topic:what-the-pdf-keeps).

Elementləri, yığımları və qiymətləri olan tam miqdar hesablaması üçün TakeoffCraft istifadə edin: MarkupCraft baxış üçün ölçür, smeta hazırlamaq üçün yox.

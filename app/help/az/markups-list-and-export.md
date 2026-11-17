---
title: Qeydlər siyahısı, süzgəclər və ixrac
summary: Setdəki bütün qeydləri görün, vərəqə, müəllifə, statusa və növə görə süzün, birinə keçin və siyahını CSV və ya BCF kimi ixrac edin.
keywords: qeydlər siyahısı, siyahı, xülasə, xlsx, cədvəl iş kitabı, iş kitabı, pdf hesabatı, bcf idxalı, süzgəc, çeşidləmə, hesabat, ixrac, csv, cədvəl, bcf, bcfzip, məsələlər, şərhlər siyahısı, keçid
from: 6c70261e
---

## Siyahını açın

Sağdakı {{ui:Qeydlər}} sekmasını seçin. Açıq olan hər faylın hər qeydi vərəq sırası ilə, sonra isə yaradılma sırası ilə siyahılanır. Hər sətir göstərir:

- qeydin rəngində ikon, varsa nöqsan nömrəsi ("#4") və mövzusu,
- onun mətni, ştampın ifadəsi və ya ölçülmüş dəyəri və şərhi,
- vərəq, müəllif və tarix,
- statusu (faylla gələn şərhlər üçün "Yalnız oxumaq üçün") və cavabları varsa cavab sayı.

Siyahının üstündəki sətir onları sayır: "38 qeyd", süzüldükdə isə "38 qeyddən 12-si".

## Qeydə keçin

Sətirə klik edin. MarkupCraft həmin vərəqi göstərir, qeydi seçir və ekrandan kənarda və ya görmək üçün çox kiçik olduqda ona miqyası böyüdür. Həmin sekmaya qayıtdıqda {{ui:Xüsusiyyətlər}}-də onun təfərrüatları və söhbəti olur.

## Süzgəc

Siyahının üstündə dörd menyu. Onlar birləşir.

| Menyu | Seçimlər |
|---|---|
| {{ui:Vərəq}} | Bütün vərəqlər, Bu vərəq (vərəqi dəyişdikcə sizi izləyir) və ya qeydi olan istənilən vərəq |
| {{ui:Müəllif}} | Hər kəs və ya setdəki hər müəllif |
| {{ui:Status}} | İstənilən status, Açıq, Qəbul edilib, Rədd edilib, Tamamlanıb |
| {{ui:Növ}} | İstənilən növ və ya setdəki hər qeyd növü |

Nümunələr:

- Bu vərəqdə hələ də açıq olanlar: {{ui:Vərəq}} "Bu vərəq", {{ui:Status}} "Açıq".
- Bir məsləhətçinin şərhləri: {{ui:Müəllif}} – onların adı.
- Bütün ölçmələr: {{ui:Növ}} "Uzunluq" və ya "Sahə".

Siyahı ən çox 2000 sətir göstərir; çox böyük setlərdə onu süzgəclə daraldın.

## CSV-yə ixrac

Sekmənin yuxarısında {{ui:CSV}} seçin. Hazırda süzülmüş **qeydlər** ilə `<name> markups.csv` faylı alırsınız, hər sətirdə bir qeyd, bu sütunlarla:

Nöqsan nömrəsi, Vərəq, Fayl, Səhifə, Növ, Mövzu, Mətn, Şərh, Ölçmə, Müəllif, Yaradılıb, Dəyişdirilib, Status, Cavablar, Son cavab, Rəng, Yalnız oxumaq üçün.

- "Mətn" mətn qutularının və çağırışların sözlərini, ştampın ifadəsini və ya say qrupunun adını saxlayır.
- "Ölçmə" uzunluqları, sahələr üçün "sahə, perimetr" və saylar üçün "qrup: n" saxlayır.
- Tarixlər UTC ilə tam vaxt damğasıdır.

Hər şeyi ixrac etmək üçün əvvəlcə bütün süzgəcləri ilk seçiminə qaytarın.

## Vərəqdə legenda

{{ui:Qeydlər}} sekmasındakı {{ui:Legenda}} gördüyünüz şeyin yuxarı sağında legenda qoyur: vərəqdəki hər qeyd növünü (mövzu və rənginə görə, məsələn "Bulud", "Sual" və ya "Çıxışlar") nə qədər olduğu ilə siyahılayan qutu. Say qrupu öz işarələrini sayır. Legenda çəkdikcə, köçürdükcə və ya qeydləri sildikcə saymağa davam edir və çap olunur və həmin anın saylarıyla birlikdə saxlanılır.

Onu hər hansı qeyd kimi köçürün və ölçüsünü dəyişin. Onun {{ui:Xüsusiyyətlər}}-də {{ui:Başlıq}} dəyişin, ya da {{ui:Saymaq}} sahəsini hər vərəqi saymaq üçün {{ui:Bütün dəst}} təyin edin. Boşluqlar, digər legendalar və digər proqramlardan gələn şərhlər sayılmır.

## Öz sütunlarınız və çeşidləmə

{{ui:Qeydlər}} sekmasındakı {{ui:Sütunlar}} hər qeydə öz sütunlarınızı əlavə edir: **mətn**, **seçim** (məsələn Ticarət: Mexaniki, Elektrik, Santexnika), **rəqəm** (məsələn Qiymət) və ya **tarix**. Hər birinə ad verin, növünü seçin, seçim sütunu üçün seçimləri siyahılayın və {{ui:Sütunları saxla}} seçin.

- Onları {{ui:Xüsusiyyətlər}} altında doldurun: hər sütunun orada sahəsi var. Rəqəm sütunu yalnız rəqəmləri, tarix sütunu isə tarixi qəbul edir.
- Siyahı hər qeydin altında dəyərləri göstərir, {{ui:Sütun}} süzgəci bir dəyəri seçir (ya da boş olduğu qeydləri), {{ui:Çeşidləmə}} isə siyahını vərəqə görə əvəzinə sütuna, müəllifə, statusa, növə və ya tarixə görə çeşidləyir.
- CSV və XLSX ixracları sütunları adi sütunlardan sonra daşıyır. Sütunlar PDF ilə birlikdə saxlanılır və onu yenidən açdıqda qayıdır.

## Xülasəni ixrac edin: iş kitabı və ya PDF

- {{ui:XLSX}} `<name> markup summary.xlsx` faylını yükləyir, üç vərəqlə: **Qeydlər** (siyahıdakı hər qeyd üçün bir sətir, CSV ilə eyni sütunlar), **Vərəqə görə** (hər vərəqdə neçə qeyd olduğu, açıq və bağlı, və hər növdən neçə, cəmi ilə) və **Nöqsan siyahısı** (nöqsan elementləri olduqda).
- {{ui:PDF}} `<name> markup summary.pdf` faylını yükləyir: çap etmək və ya göndərmək üçün hesabat, setin adı, tarix və siyahıdakı qeydlərin cədvəli (nömrə, vərəq, növ, mövzu, mətn və ya şərh, ölçülmüş dəyər, müəllif, status və son cavab) ilə. Uzun mətn sətirlərə bölünür; cədvəlin başlığı hər səhifədə təkrarlanır.

Hər ikisi siyahını süzüldüyü kimi götürür, ona görə yalnız bir vərəq, bir müəllif və ya yalnız açıq elementlər üçün hesabat etmək istəyirsinizsə, əvvəlcə süzün.

## BCF-ə ixrac

{{ui:BCF}} seçin. MarkupCraft siyahıdakı hər qeydin vərəqdəki şəklini çəkir ("BCF üçün snapşotlar hazırlanır (12-dən 3)…"), sonra `<name> markups.bcfzip` faylını yükləyir. Hər qeyd bir BCF mövzusuna çevrilir: statusu, müəllifi, tarixləri, cavabları şərh kimi, nöqsan elementindən məsul şəxs və son tarix və snapşot ilə.

Çertyoj nəzərdən keçirmə şərhlərini BCF oxuyan BIM koordinasiya alətlərinə gətirmək üçün istifadə edin. Nəyin keçdiyi və nəyin keçmədiyi [BCF əsasları](topic:bcf-basics) bölməsindədir.

## BCF idxal et

{{ui:BCF idxal et}} BIM alətindən `.bcfzip` (və ya `.bcf`) faylını oxuyur:

- MarkupCraft-ın öz BCF ixracından gələn məsələlər öz qeydlərini yenidən tapır: yeni cavablar söhbətə əlavə olunur və yeni status təyin olunur (Bağlanıb Tamamlanıb kimi sayılır). Artıq olan cavablar ikinci dəfə əlavə olunmur.
- Digər məsələlər başlıqları, təsviri, müəllifi və şərhləri ilə qeydlərə çevrilir. Qeyd məsələnin etiketlərinin verdiyi nömrə və ya adı olan vərəqə düşür, əks halda açıq vərəqə; BIM kamerasının kağızda yeri yoxdur, ona görə belə qeydlər sizin köçürməniz üçün vərəqin yuxarı solunda yığılır.

Bütün idxal bir addımdır: {{key:Mod+Z}} onu geri qaytarır. Bax: [BCF əsasları](topic:bcf-basics).

## Siyahının hələ etmədikləri

- Siyahını qruplaşdırmaq (əvəzinə əvvəlcə çeşidləyin, sonra süzün).
- Siyahıda dəyərləri redaktə etmək ({{ui:Xüsusiyyətlər}}-də redaktə edin; nöqsan sahələri {{ui:Nöqsan siyahısı}} sekmasında redaktə oluna bilər).

---
title: Statuslar və cavablar
summary: Hər şərhi Açıq, Qəbul edilib, Rədd edilib və ya Tamamlanıb kimi qeyd edin, cavab zəncirində müzakirə edin və zənciri PDF-də ötürün.
keywords: status, baxış statusu, qəbul edilib, rədd edilib, tamamlanıb, açıq, cavab, cavablar, zəncir, şərh, söhbət, müzakirə, cavab ver, yenidən yoxlamaq
from: 0f3e8b91
---

Hər qeyd **status** və **cavab zəncirinə** malikdir. Birlikdə baxış mərhələsini daşıyırlar: rəyçi qeyd edir, dizayner cavab verir və statusları təyin edir, rəyçi isə yenidən yoxlayır.

## Status təyin edin

1. Qeydi seçin (və ya bir neçəsini).
2. {{ui:Properties}} bölməsində {{ui:Status}} seçin: Açıq, Qəbul edilib, Rədd edilib və ya Tamamlanıb.

Nəticə: status {{ui:Markups}} siyahısında çip kimi görünür və zəncirə bir sətir əlavə olunur: "Status Ana Ruiz tərəfindən Qəbul edilib olaraq təyin edildi." Bir neçə qeyd seçiləndə status qutusu bir seçim edənə qədər "Qarışıq" yazır, sonra hamısını dəyişir.

Yeni qeydlər Açıq statusla başlayır. Yapışdırılmış və ya çoxaldılmış qeydlər də Açıq statusla başlayır.

## Cavab verin

1. Qeydi seçin.
2. {{ui:Properties}} bölməsində üslub parametrlərinin altındakı "Cavablar"ı tapın.
3. {{ui:Write a reply}} qutusuna yazın.
4. {{ui:Reply}} seçin və ya {{key:Mod+Enter}} basın.

Nəticə: cavab adınız, tarix və vaxtla siyahıya düşür, başlıq onu sayır: "Cavablar (3)". {{ui:Markups}} siyahısında hər sətirdə cavab sayı göstərilir.

- Status dəyişiklikləri eyni zəncirdə sıralanır və status yazısı kimi qeyd olunur, beləliklə tarixçə ardıcıl oxunur.
- Cavab yazmağa başlayıb başqa yerə klikləsəniz, qaralamanız həmin qeyd yenidən açılana qədər (dəsti bağlayana qədər) saxlanılır.
- Adınız təyin olunmayıbsa, MarkupCraft göndərmədən əvvəl soruşur.
- Faylla gələn yalnız oxunan şərhlərə də cavab verə bilərsiniz.

:::note
Göndərildikdən sonra cavab redaktə və ya silinə bilməz. Göndərən kimi {{key:Mod+Z}} onu geri alır; bundan sonra düzəliş üçün yeni cavab yazın.
:::

## Foto əlavə edin

Cavab qutusunun altında {{ui:Add photo}} zəncirə şəkil əlavə edir: bu kompüterdən PNG və ya JPEG, yaxud planşet və ya telefonda həmin an çəkdiyiniz foto. Cavab qutusuna yazdığınız mətn onun şərhinə çevrilir. Zəncir kiçik şəkil göstərir; tam ölçüdə görmək üçün seçin. Böyük fotolar uzun tərəfi 1600 pikselə qədər kiçildilir.

Saxlanılmış PDF-də hər foto qeydin yanında əlavə fayl kimi (sancaq) gedir, beləliklə digər PDF baxıcıları onu aça bilər.

## Baxışı növbəti şəxsə ötürün

Hələ paylaşılan onlayn sessiya yoxdur: baxış PDF-də gedir.

1. {{ui:Save}} seçin. Nüsxədə hər qeyd öz statusu və cavabları ilə olur.
2. Bu nüsxəni indi rəsmləri göndərdiyiniz kimi göndərin.
3. Növbəti şəxs onu MarkupCraft-da açır, cavab verir, statusları təyin edir və yenidən saxlayır.

Digər PDF proqramları cavabları şərhə cavab kimi, statusları isə baxış halları kimi görür (Qəbul edilib, Rədd edilib, Tamamlanıb; Açıq heç bir hal kimi göstərilir). Onların öz cavabları və baxış halları faylı açanda MarkupCraft-a qayıdır: ən yeni status qalib gəlir.

Əgər iki nəfər eyni vaxtda ayrı nüsxələri qeyd edirsə, birləşdirmə yoxdur. Hər iki nüsxəni bir dəstdə aça və {{key:Mod+C}} ilə {{key:Mod+V}} ilə bir neçə qeydi köçürə bilərsiniz, lakin yapışdırılmış nüsxə yeni qeyddir: sizin adınızı, yeni tarixi və Açıq statusu daşıyır və bir az yana düşür. Bunun qarşısını almaq üçün hansı vərəqləri kimin qeyd edəcəyini əvvəlcədən razılaşdırın.

## Hələ açıq olanı tapın

{{ui:Markups}} sekməsində {{ui:Status}} sahəsini "Açıq"a təyin edin ki, yalnız açıq elementlər siyahılansın, və {{ui:Author}} sahəsini bir rəyçiyə. Bax: [Qeydlər siyahısı](topic:markups-list-and-export).

Status (Açıq, Qəbul edilib, Rədd edilib, Tamamlanıb) şərhlə bağlıdır. Qüsur elementinin sahədəki iş üçün öz ayrı statusu var; bax: [Qüsur siyahısının hazırlanması](topic:punch-list).

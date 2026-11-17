---
title: Buraxılışlar, düzəlişlər və çertyoj dəyişiklik jurnalı
summary: Memarın modeli ilə bir buraxılış tarixçəsi saxlayın: buraxılışları oxuyun, sahə təlimatlarını, istehsal çertyojlarını və əlaqəli modelləri buraxılışa qarşı qeyd edin və çertyoj dəyişiklik jurnalını oxuyun.
keywords: buraxılış, düzəliş, düzəlişlər, dəyişiklik jurnalı, çertyoj dəyişiklik jurnalı, çertyoj reyestri, sahə təlimatı, istehsal çertyoju, əlaqəli model, tender təklifi, tikinti, buraxılış tarixçəsi, düzəliş buludu, bulud, qeyd dəsti
from: e4688f64
---

## Nə edəcəksiniz

Komandanın qalan hissəsi ilə eyni buraxılış tarixçəsi üzərində işləyin. Hansı vərəqlərin hansı düzəlişlə göndərildiyini görün və sahədə olanları onlara aid olduğu buraxılışla saxlayın.

## Addımlar

1. **Buraxılışlar və düzəlişlər** açın.
2. **Buraxılış tarixçəsini oxu** seçin və BimCraft və ya digər tətbiqdən saxlanılmış `.issues.json` faylını seçin. Onun buraxılışları və yazıları sizinkilərə əlavə olunur. Heç nə əvəz olunmur.
3. Sahə təlimatı, istehsal çertyoju, qeyd dəsti, əlaqəli model və ya qeyd üçün **Yazı əlavə et** seçin. Ona aid olduğu buraxılışı və statusu seçin. Seçdiyiniz fayl adı, ölçüsü və SHA-256 ilə qeyd olunur; fayl olduğu yerdə qalır.
4. **Çertyoj dəyişiklik jurnalı** hər vərəq üçün bir sətir və hər buraxılış üçün bir sütun göstərir. Mötərizədəki düzəliş dəyişdirilmədən yenidən buraxılıb.
5. **Dəyişiklik jurnalını yüklə (CSV)** buraxılışları, vərəqlər cədvəlini və yazıları saxlayır. **Buraxılış tarixçəsini saxla** digər tətbiqlərin oxuduğu fayl yazır.

## Bilmək yaxşıdır

- **Seçilmiş qeydləri qeyd et** seçdiyiniz qeydləri ən son buraxılışa əlavə edir. Bulud düzəliş buludu kimi həmin buraxılışın düzəlişi ilə qeyd olunur. Ona keçmək üçün yazının yanında **Göstər** seçin.
- **Buraxılış qeyd et** qeyd olunmuş vərəqlərinizi buraxır. **Dəyişikliklər sonra** həmin buraxılışdan sonra hansı vərəqlərin qeyd olunduğunu göstərir.
- Tarixçə qeyd olunmuş PDF-in içində saxlanılır. Geri alma (Undo) tərkibinə daxil deyil.
- Eyni faylı iki dəfə oxumaq heç nəyi iki dəfə əlavə etmir. İki surətdə eyni yazı olanda daha yenisi saxlanılır.

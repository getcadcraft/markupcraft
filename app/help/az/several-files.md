---
title: Bir neçə faylla birdən işləyin
summary: Bir çox PDF-i bir dəst kimi açın, fayllar arasında vərəqləri tapın, fayllar arasında qeydləri kopyalayın və hər faylın nüsxəsini saxlayın.
keywords: bir neçə fayl, çoxlu pdf, plan dəsti, dəst, toplu, çox fayl, birləşdirmək, intizamlar, memarlıq, konstruktiv, mexaniki, hamısını saxla, bağla
from: f59354ae
---

Plan dəsti çox vaxt hər intizam üçün bir PDF, ya da hər vərəq üçün bir PDF kimi gəlir. MarkupCraft açdığınız hər şeyi **bir dəst** kimi qəbul edir.

## Onları birlikdə açın

Fayl seçicidə bütün PDF-ləri eyni anda seçin, ya da hamısını vərəq sahəsinə atın. Əlavə etmək üçün sonra da eyni üsulla açın; onlar açdığınız sıra ilə {{ui:Vərəqlər}} siyahısının sonuna qoşulur.

Nəticə: "6 fayl açıldı (dəstdə 84 vərəq)." Hər səhifə bir vərəqdir. Vərəq nömrəsi olan vərəqlər adının altında "Vərəq A-101" göstərir; digərləri fayl və səhifəni göstərir.

Dəstin saxlanılmış ayrıca faylı yoxdur: növbəti dəfə eyni PDF-ləri yenidən açın (əgər saxlamısınızsa, "(marked up)" nüsxələrini).

## Bütün dəst üzrə

- **Vərəq tapın:** {{ui:Vərəqləri axtar}} hər faylın vərəq nömrələrində, vərəq adlarında və fayl adlarında axtarır. {{key:PageUp}} və {{key:PageDown}} bütün faylların bütün vərəqlərini sıra ilə keçir.
- **Qeydlər siyahısı:** {{ui:Qeydlər}} sekmesi bütün fayllardan qeydləri göstərir. Daraltmaq üçün {{ui:Vərəq}} ilə süzün. CSV-də Fayl sütunu var.
- **Punch siyahısı:** bütün dəst üçün bir nömrələmə.
- **Müqayisə:** köhnə və yeni vərəq müxtəlif fayllardan ola bilər.
- **Kopyalama və yapışdırma:** bir vərəqdə {{key:Mod+C}}, başqa vərəqdə {{key:Mod+V}}, istənilən faylda. Surət kağızda eyni yerə, bir az sürüşmüş halda düşür.

## Saxlayın

{{ui:Saxla}} seçin. Birdən çox fayl açıq olanda MarkupCraft soruşur:

- {{ui:Bu fayl}}: hazırda olduğunuz vərəqin faylının işarələnmiş nüsxəsi.
- {{ui:Dəyişdirilmiş bütün fayllar}}: saxlanmamış dəyişiklikləri olan hər faylın nüsxəsi. Hər biri ayrıca "<fayl adı> (marked up).pdf" kimi yüklənir.
- {{ui:Ləğv et}}

:::chromium
Bir neçə faylı birdən ilk dəfə saxlayanda Chrome və Edge bu saytın bir neçə fayl yükləməsinə icazə verib-vermədiyini soruşa bilər. {{ui:İcazə ver}} seçin; əks halda yalnız birinci nüsxə gəlir.
:::

:::safari
Safari hər fayl üçün bir dəfə soruşa bilər. iPad-də hər nüsxə Fayllar tətbiqinə gedir.
:::

Qeydləri saxlanılmış fayl artıq dəyişdirilmiş sayılmır; digərləri hələ də sayılır.

CSV, BCF və punch siyahısı ixracları açdığınız **birinci** faylın adını daşıyır.

## Bağlayın

{{ui:Bağla}} bütün dəsti bağlayır; hələ yalnız bir faylı bağlamağın yolu yoxdur. Saxlanılmamış nə varsa, soruşur:

- {{ui:Ləğv et}}: heç nə olmur.
- {{ui:Saxlamadan bağla}}: saxlanmamış qeydlər itir.
- {{ui:Əvvəl nüsxələri saxlayın}}: dəyişdirilmiş bütün faylları saxlayır, sonra bağlayır.

Bağlamaq geri qaytarma tarixçəsini də təmizləyir.

## Böyük dəstlər

- Vərəq nömrələrini tapmaq üçün açılışda hər səhifənin mətni oxunur, buna görə 100 vərəqlik dəst bir az vaxt aparır. Status paneli vərəqləri saydıqca göstərir.
- Siyahıdakı vərəq şəkilləri onlara sürüşdürdükcə çəkilir.
- Açıq hər PDF brauzer sekmesinin yaddaşında saxlanılır. Sekmə yavaşlayırsa, digər ağır sekmələri bağlayın və ya bir intizamı bir dəfəyə nəzərdən keçirin.
- Eyni faylı iki dəfə açmaq onun vərəqlərinin iki nüsxəsini verir. Belə olarsa, {{ui:Bağla}} seçin və dəsti yenidən açın.

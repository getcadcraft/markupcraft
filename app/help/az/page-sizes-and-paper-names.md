---
title: Səhifə ölçüləri və kağız adları
summary: Hər PDF səhifəsinin ölçüsünü millimetrlə və düymlə, və kağız adını (A, B və C seriyaları, ANSI, ARCH) görün və qarışıq dəsti ölçüyə görə qruplaşdırıb fərqli səhifələri tapın.
keywords: səhifə ölçüsü, kağız ölçüsü, kağız adı, a0, a1, a2, a3, a4, b seriyası, c seriyası, ansi, arch, memarlıq, mm, düym, fərdi ölçü, ölçüyə görə, qeyri-adi ölçü, qarışıq dəst, pdf-i yoxla, müştəri, məsələ, mediabox, cropbox, fırlanma
from: 08e1354f
---

Dəst müştəriyə göndərilməzdən əvvəl hər vərəqin düzgün ölçüdə olduğunu yoxlayın. {{ui:MarkupCraft}} hər səhifənin ölçüsünü PDF-in özündən oxuyur və kağızın adını verir.

## Nə edəcəksiniz

Bir vərəqin ölçüsünə baxın, sonra bütün dəsti ölçüyə görə qruplaşdırın.

## Addımlar

1. PDF-ləri açın ({{ui:Aç}}), sonra heç nə seçilməyənə və {{ui:Seç}} aktiv olana qədər {{key:Esc}} basın.
2. {{ui:Xüsusiyyətlər}}-ə baxın. {{ui:Kağız}} adı və istiqaməti göstərir, məsələn "A4, şaquli". {{ui:Ölçü}} millimetrlə və düymlə verir.
3. {{ui:Vərəqlər}} siyahısının hər sətirində vərəq adının altında ölçü sətiri var.
4. {{ui:Vərəqlər}} başlığında {{ui:Ölçüyə görə}} seçin. Siyahı vərəqləri hər ölçü üçün bir başlıq altında toplayır, ən böyük qrup birinci. Yalnız bir neçə vərəqi olan ölçü qeyri-adi kimi işarələnir.
5. Dəstin öz sırasına qayıtmaq üçün {{ui:Ölçüyə görə}} yenidən seçin.

Nəticə: qalanlardan fərqli ölçüdə olan səhifə, dəsti göndərməzdən əvvəl asanlıqla görünür.

## Ad necə seçilir

- Ölçü PDF-də səhifə qutusundan, fırlanma tətbiq olunmaqla götürülür, buna görə üfüqi A3 yenə də A3-dür.
- Adlar A və B seriyalarıdır (ISO 216), C seriyası (ISO 269), ANSI A-dan E-yə və ARCH A-dan E-yə.
- Adlı ölçüyə 2 mm yaxınlıqdakı səhifə həmin adı alır. Hər digər səhifə {{ui:xüsusi}} deyir, {{ui:Ən yaxın adlı ölçü}} isə hansı ölçüyə ən yaxın olduğunu və nə qədər fərqli olduğunu göstərir.
- Düymlər real səhifə ölçüsündən gəlir, buna görə A4 səhifə 8.26 × 11.69 in-dir.

## Saxladığınız fayllarda

Ümumi iş kitabında ({{ui:Qeydlər siyahısı}}, sonra cədvəl) {{ui:Vərəqə görə}} vərəqində {{ui:Kağız ölçüsü}} sütunu və {{ui:Səhifə ölçüləri}} iş vərəqi var. PDF hesabatında "Səhifə ölçüləri" sətri var, hər ölçünün sayı ilə.

:::note
ANSI və ARCH düym dəyərləri dərc olunmuş cədvəllərdən əl ilə yazılıb və çap olunmuş standartlarla müqayisə edilməyib. Bu adlardan birinə yaxın olan "xüsusi" səhifəni öz yoxlamanızda nəzərə alın.
:::

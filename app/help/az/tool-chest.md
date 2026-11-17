---
title: Alətlər qutusu
summary: Üslubu ilə saxlanılmış qeydi təkrar istifadə olunan alət kimi saxlayın, onunla çəkin və alət qutunuzu fayl kimi ofislə paylaşın.
keywords: alətlər qutusu, alətlər, alət dəsti, fərdi alətlər, saxlanmış qeydlər, sevimlilər, ofis standartı, idxal, ixrac, paylaşmaq, json
from: 7dfa36e0
---

{{ui:Tools}} sekməsi **alətlər qutunuzu** saxlayır: üslubu ilə saxlanılmış, yenidən çəkməyə hazır qeydlər. Alət qeydin növünü, rəngini, xətt enini, doldurmasını, şəffaflığını, mətn ölçüsünü və mövzusunu saxlayır, üstəlik ştampın mətnini, saymanın qrup adını və ya mətn qutusunun və ya çağırışın başlanğıc mətnini.

## Başladığınız alətlər

Yeni qutuda altı alət var: "Düzəliş buludu" (qırmızı), "Sual buludu" (göy), "Sarı marker", "RFI çağırışı" (göy, "RFI: " ilə başlayır), "Sahədə yoxlayın" (mətni "Sahədə yoxlayın." olan narıncı çağırış) və "Qeyd ilə təsdiq edilib" (ştamp).

## Aləti çəkin

1. {{ui:Tools}} sekməsini açın.
2. Alətə klikləyin. Basılmış görünür və uyğun alət paneli aktiv olur.
3. Adi kimi çəkin. {{ui:Properties}} yazır: 'Alətlər qutusundan "<alət>" ilə çəkilir.'

Qutu aləti aktiv olarkən {{ui:Properties}} bölməsində çəkməzdən əvvəl etdiyiniz dəyişikliklər hazırda o alətə tətbiq olunur, saxlanmış aləti və adi alət parametrlərinizi dəyişmədən. Alət panelindəki düyməni seçmək və ya alətin klavişini basmaq sizi adi alətə qaytarır.

## Öz alətinizi saxlayın

1. Qeydi çəkin və istədiyiniz kimi üslub verin: rəng, xətt, doldurma, mövzu, ştamp mətni.
2. Onu seçin.
3. {{ui:Tools}} sekməsində {{ui:Save selected as a tool}} və ya {{ui:Properties}} bölməsində {{ui:Save as a tool}} seçin.
4. {{ui:Tool name}} yazın və {{ui:Save tool}} seçin.

Nəticə: alət qutunun sonuna əlavə olunur və {{ui:Tools}} sekməsi onu göstərmək üçün açılır.

## Seçimdən hazırlanmış ştamplar

Bir neçə qeyd seçin (və ya {{ui:Content}} aləti ilə səhifə məzmunu) və {{ui:More}} və ya sağ klik menyusunda {{ui:Save selection as a stamp…}} seçin. Qutuya hamısını birləşdirən bir ştamp əlavə olunur ("Ştamp: 3 qeyd birlikdə"). Ona klikləyin, sonra istənilən vərəqə klikləyin: qeydlər birlikdə, klik etdiyiniz yerdə mərkəzləşərək, sizin adınızla yeni qeydlər kimi düşür; səhifə məzmunu isə həmin yerdə səhifəyə çəkilir. Bu ştamplar qutudakı istənilən alət kimi saxlanılır və paylaşılır.

## Alət silin

Alətin sətrinin sonundakı × seçin, sonra {{ui:Remove}}. Onunla artıq çəkilmiş qeydlər olduğu kimi qalır.

## Qutunun saxlandığı yer

Qutu **bu brauzerdə, bu kompüterdə** saxlanılır. Başqa brauzerin və ya kompüterin öz qutusu var (altı standart alətlə başlayır); şəxsi pəncərə bağlananda onu unudur, brauzerin parametrlərində bu saytın məlumatını təmizləsəniz isə silinir.

Brauzer saxlamağa icazə vermirsə (saxlama söndürülüb və ya dolub), status panelində yazılır: "Alətlər qutusu bu brauzerdə saxlanıla bilmədi (saxlama söndürülüb və ya dolub). Saxlamaq üçün ixrac edin."

:::safari
Safari bir müddət istifadə etmədiyiniz saytın saxlanılmış məlumatını silə bilər. Qutunuzu bəzən ixrac edin ki, sonra yenidən idxal edə biləsiniz.
:::

**Qutunuzu ehtiyat nüsxə kimi ixrac edin**, xüsusən də etibar etdiyiniz alətləri hazırladıqdan sonra.

## Qutunu ofislə paylaşın

1. Alətləri bir dəfə qurun.
2. {{ui:Export}} seçin. "MarkupCraft tool chest.json" faylı alacaqsınız.
3. Bu faylı ofisin standartlarını saxladığı yerə qoyun və ya ətrafa göndərin.
4. Digərləri öz {{ui:Tools}} sekməsində {{ui:Import}} seçir və faylı göstərir.

Nəticə: "12 alət "MarkupCraft tool chest.json" faylından idxal edildi." Eyni qutudan gələn alətlər köhnə nüsxələrini əvəz edir, buna görə yenilənmiş ofis qutusunu idxal etmək onları ikiləşdirmir, təzələyir; yeni alətlər isə əlavə olunur. Qutuda ən çox 500 alət ola bilər.

MarkupCraft idxal faylındakı hər dəyəri yoxlayır və istifadə oluna bilməyəni ötürür ("2 ötürüldü (istifadə olunmur)"). Qutu olmayan fayllar rədd edilir: "Bu fayl MarkupCraft alətlər qutusu deyil." və ya "Bu fayl alətlər qutusu deyil (JSON formatında deyil)."

Digər qeyd proqramlarından olan alətlər qutusu faylları idxal oluna bilməz.

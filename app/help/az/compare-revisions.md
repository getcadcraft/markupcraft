---
title: İki revizyonu müqayisə edin
summary: Vərəqin köhnə və yeni buraxılışını iki rəngdə üst-üstə qoyun, iki nöqtə ilə düzləşdirin və nəyin dəyişdiyini buludlayın.
keywords: müqayisə, üst-üstə qoyma, səhifələri üst-üstə qoyma, revizyon, fərq, dəyişikliklər, köhnə yeni, düzləşdirmə, backcheck, buraxılış, bülleten
from: 62f5d1c5
---

Müqayisə iki vərəqi bir-birinin üzərinə qoyur. Yalnız köhnə vərəqdə olan xətlər qırmızı, yalnız yeni vərəqdə olan xətlər mavi, hər ikisində olan xətlər isə solğun boz rəngdə göstərilir. Rənglər vərəqin altındakı izahda adlandırılıb: "Yalnız köhnə vərəqdə", "Yalnız yeni vərəqdə", "Hər ikisində".

## İki vərəqi müqayisə edin

1. Hər iki buraxılışı açın. Onlar eyni PDF-in və ya fərqli PDF-lərin səhifələri ola bilər; onları birlikdə bir dəst kimi açın (bax: [Bir anda bir neçə faylla işləmək](topic:several-files)).
2. Sağdakı {{ui:Müqayisə}} sekmesini seçin.
3. {{ui:Köhnə vərəq}} və {{ui:Yeni vərəq}} seçin. Yeni vərəq sizin olduğunuz vərəqlə başlayır. Bir neçə fayl açıq olduqda hər vərəqin fayl adı onun adından sonra göstərilir.
4. {{ui:Müqayisə}} seçin.

Nəticə: MarkupCraft yeni vərəqi içinə qarışdırılmış köhnə vərəqlə göstərir, izah görünür və sekmə "<old> (köhnə) ilə <new> (yeni) müqayisə olunur. Yeni vərəqdəki qeydlər redaktə oluna bilər." yazır.

## Köhnə və yeni arasında keçid

{{ui:Köhnə və yeni}} sürgüsünü sürükləyin. Tam sola çəkdikdə yalnız köhnə vərəq, tam sağa çəkdikdə yalnız yeni vərəq, ortada isə hər ikisi görünür. Sürgünü irəli-geri çəkmək kiçik dəyişikliyi görməyin ən sürətli yoludur.

## Vərəqləri düzləşdirin

Əgər iki buraxılış fərqli kənar boşluğu, ölçüsü və ya fırlanma ilə çap olunubsa, hər şey dəyişmiş görünür. Bunu düzəldin:

**İki nöqtə ilə (ən yaxşısı):**

1. {{ui:İki nöqtə ilə düzləşdir}} seçin. Görünüş yalnız köhnə vərəqi göstərir.
2. Hər iki vərəqdə tapa biləcəyiniz kəskin bir xüsusiyyətə, məsələn sütun şəbəkəsinin kəsişməsinə klikləyin. Sekmə addımları sayır ("1 / 4").
3. İkinci xüsusiyyətə, birincidən uzaqda, məsələn qarşı şəbəkə künclərinə klikləyin.
4. Görünüş yeni vərəqə keçir. Birinci xüsusiyyətə yenidən klikləyin.
5. İkinci xüsusiyyətə yenidən klikləyin.

Nəticə: "Düzləşdirildi: köhnə vərəq 100.00% miqyaslandı, 0.00° fırlandı. İncə tənzimləmək üçün yerini dəyişin." Köhnə vərəq uyğunlaşmaq üçün sürüşdürülür, miqyaslanır və fırladılır. Seçim zamanı {{key:Esc}} ləğv edir. Dəqiq uyğunlaşdırma üçün klik etməzdən əvvəl hər xüsusiyyəti yaxınlaşdırın.

**Yerini dəyişməklə:** "Düzləşdir" altındakı dörd ox düyməsi ilə köhnə vərəqi tərpədin. Addımı seçin (0.25, 1, 5 və ya 20 pt; 72 pt kağızda bir düymdür). Sekmə neçə qədər hərəkət etdiyini göstərir.

{{ui:Sıfırla}} düzləşdirməni və yerdəyişmələri silir.

## Yalnız dəyişmiş xətlər

Düzləşdirmə düymələrinin altında {{ui:Şəkil üst-üstə qoyma}} əvəzinə {{ui:Dəyişmiş xətlər}} seçin. MarkupCraft sonra iki vərəqin şəkillərini yox, öz xətlərini müqayisə edir: yeni vərəq olduğu kimi görünür, yalnız köhnə vərəqdə olan xətlər qırmızı, yalnız yeni vərəqdə olanlar mavi göstərilir. Yalnız qısalan xətt yalnız itmiş hissəni göstərir. Əvvəlcə vərəqləri düzləşdirin (yuxarıya bax): müqayisə düzləşdirməni istifadə edir, ona görə yalnız sürüşdürülmüş vərəq heç bir dəyişiklik göstərmir. Status sətri nə qədər dəyişdiyini göstərir.

Bu, xətlərdən ibarət olan CAD-dan çap edilmiş PDF-lər üçün işləyir. Skan edilmiş vərəqlərin müqayisə ediləcək xətləri yoxdur: onlar üçün şəkil üst-üstə qoymasından istifadə edin. Şriftlə yazılmış mətn (xətt kimi çəkilməyən) müqayisə edilmir.

## Dəyişiklikləri qeyd edin

Müqayisə zamanı siz yeni vərəqdəsiniz və hər alət işləyir. Tapdıqca dəyişikliklərin ətrafına bulud çəkin; onlar yeni vərəqə aiddir və müqayisəni dayandırdığınız zaman da qalır.

{{ui:Dəyişiklikləri buludla işarələyin}} bunu sizin üçün edir: yaxın yerləşən dəyişmiş xətləri qruplaşdırır və hər qrupun ətrafına yeni vərəqdə revizyon buludu çəkir, şərhi "Changed since <old sheet>" olur. Bir {{key:Mod+Z}} hamısını silir; lazım olmayanları silin.

## Bütün dəsti müqayisə edin

Yeni buraxılış öz PDF-i olaraq gələndə, hər iki PDF-i açın və {{ui:Müqayisə}} sekmesində {{ui:İki dəsti müqayisə edin}}-i açın. Köhnə və yeni faylı seçin, sonra {{ui:Dəstləri müqayisə edin}} seçin. Vərəqlər nömrəsinə görə cütləşdirilir (bax: [vərəq əvəzləmə](topic:slip-sheet-a-revised-set)), xətlərinə görə müqayisə olunur və ən çox dəyişən birinci olmaqla siyahıda göstərilir. Siyahıda bir vərəq seçin ki, o cütü {{ui:Dəyişmiş xətlər}} ilə müqayisə edəsiniz.

{{ui:Bütün dəyişiklikləri buludla işarələyin}} hər dəyişmiş vərəqdəki hər dəyişmiş xətt qrupunun ətrafına bir addımda buludlar çəkir; bunu geri qaytarmaq olar. Dəst müqayisəsi vərəqləri əvvəlcə düzləşdirmir, ona görə səhifədə sürüşdürülmüş vərəq dəyişmiş kimi görünür: o cütü təkbaşına müqayisə edin və {{ui:İki nöqtə ilə düzləşdir}} istifadə edin.

## Müqayisəni dayandırın

{{ui:Müqayisəni dayandır}} seçin və ya başqa vərəqə keçin. Düzləşdirmə, dəsti bağlayana qədər eyni vərəq cütü üçün yadda saxlanılır.

## Yaxşı bilmək üçün

- Müqayisə çəkilmiş olana əsaslanır, piksel-piksel işləyir. Xəttin yerdəyişdiyini bilmir; köhnə yeri bir rənglə, yeni yeri digər rənglə göstərir.
- Yenidən yazılmış mətn, dəyişmiş ştamp tarixi və ya fərqli çap üslubu da dəyişiklik kimi görünür.
- Skan edilmiş vərəq çap edilmiş vərəqlə müqayisə edildikdə səs-küylü olur: skan xətləri bulandırır və sürüşdürür.
- Şriftlə yazılmış mətnin müqayisəsi və dəyişikliklərin siyahısı hələ hazır deyil.

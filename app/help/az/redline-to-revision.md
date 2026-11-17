---
title: Qeydləri redline kimi rəsmçiyə göndərin
summary: Açıq qeydləri çertyojları dəyişən şəxs üçün redline faylı kimi yazın, sonra onların cavablarını yükləyin ki, hər qeyd Qəbul edilib və ya Rədd edilib kimi görünsün.
keywords: redline, revizyon, rəsmçi, qəbul et, rədd et, cavablar, cc-redline, revizyon buludu, qeydləri tətbiq et
from: cb099d04
---

Nəzərdən keçirmək işin yarısıdır; çertyoj hələ də dəyişməlidir. Redline faylı hər açıq qeydi rəsmçiyə aparır, rəsmçinin cavabları isə nəticəni geri gətirir.

## Göndərin

1. {{ui:Tapşırıqlar}} sekməsini açın və {{ui:Redline-ı revizyona}} açın.
2. Qeydlərin aid olduğu revizyonu yazın (məsələn B).
3. {{ui:Qırmızı xətt faylını ixrac et}} seçin.

Sizə `.redline.json` faylı verilir, hər açıq qeyd üçün bir element: onun vərəqi, yeri (vərəq ölçüsünün hissələri kimi, belə ki, başqa ölçüdə yenidən çap olunmuş vərəq yenə düz gəlir, və pt ilə), onun sözləri, müəllifi və mövzusu, və varsa, tapşırığı. Digər proqramlardan olan yalnız oxunan şərhlər, şəkillər və legendalar buraxılır.

## Cavablar

Rəsmçi tərəfi hər elementə Qəbul edilib, Rədd edilib və ya Tamamlanıb cavabını qeydi ilə birlikdə `.redline-answers.json` faylında verir. {{ui:Cavablar faylını yüklə…}} seçin və onu seçin: hər qeyd həmin statusu və rəsmçinin qeydini öz mövzusunda alır, qəbul edilmiş və ya tamamlanmış qeydin tapşırığı bitmiş olur. Bir geri qaytarma addımı bütün cavabları geri alır.

Fayl formatı `docs/REDLINE-FORMAT.md` içindədir. CadCraft tərəfi (paketin oxunması, hər elementin qəbul və ya rədd edilməsi, revizyon buludları və jurnal) ayrıca hazırlanır.

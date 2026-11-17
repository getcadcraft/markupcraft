---
title: İki nəfərin bir PDF-də redaktələrini birləşdirin
summary: Git, Fossil və ya Mercurial-ın eyni PDF-in iki qeydlənmiş surətini qeyd-qeyd, qeydlərlə birlikdə birləşdirməsinə icazə verin.
keywords: birləşdirmə, git, fossil, mercurial, versiya nəzarəti, münaqişə, üç tərəfli, cadcraft merge, gitattributes, qeydlər, şərhlər, komanda, iki surət
from: a450a9ef
---

İki nəfər eyni PDF-i iki surətdə qeydləyir. Əgər fərqli qeydlərə toxunublarsa, surətləri əllə yox, proqramla birləşdirmək olar.

## Bu necə işləyir

MarkupCraft-ın saxladığı hər qeyd PDF-in içində öz adını (id-sini) daşıyır və bu ad heç vaxt dəyişmir. Birləşdirmə qeydləri faylda yerinə görə yox, həmin ada görə axtarır, çünki hər proqram saxlayarkən yerləri yenidən nömrələyir. Qeydlər və möhürlənmiş şəxsi qeydlər eyni şəkildə uyğunlaşdırılır.

Vərəqlərə heç vaxt toxunulmur: hər iki surətdə eyni sayda səhifə olmalıdır. Fərqlidirsə, birləşdirmə sizin surətinizi olduğu kimi saxlayır və bunu bildirir, çünki səhifə əlavə etmək və ya silmək insanın işidir.

## Quraşdırma

Git üçün hər repozitoriyada bir dəfə iki sətir lazımdır:

```
# .gitattributes
*.pdf merge=cadcraft

# hər kompüterdə bir dəfə
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git olmadan `cadcraft merge <base> <ours> <theirs> -o <result>` əmrini işlədin. Fossil və Mercurial eyni üç faylı öz birləşdirmə alətinin quraşdırmasında qəbul edir. Çertyoja müşayiət olunan tapşırıq faylı (`<name>.markups.json`, bax: [Hərəkət edən qeydlər](topic:markups-that-act)) eyni şəkildə, düz mətn kimi birləşir.

## Qaydalar

- Yalnız bir tərəfdə dəyişdirilmiş qeyd götürülür. Hər iki tərəfdə eyni dəyişiklik bir dəfə götürülür.
- Eyni qeyd iki cür dəyişdirilibsə, bu **münaqişədir**: sizin tərəfiniz qalır və hesabatda hər ikisi siyahılanır. Nəticəni açın və həmin qeydi əllə düzəldin.
- Hər hansı tərəfdə əlavə olunmuş qeyd saxlanılır. Bir tərəfdə silinən və digərində dəyişdirilməyən qeyd silinir. Bir tərəfdə silinən və digərində dəyişdirilən: silinir və hesabatda bildirilir.
- Qatlar, sütunlar, yazılar və qeydlər eyni qaydalara əsasən.
- Möhürlənmiş şəxsi qeydlər heç vaxt açılmır: hər iki tərəfin blokları olduğu kimi saxlanılır.

Birləşmiş fayl sizin surətinizin tam yenidən yazılmasıdır, MarkupCraft-ın öz Saxla əməliyyatı kimi. Heç nə yüklənmir; hər şey sizin kompüterinizdə işləyir.

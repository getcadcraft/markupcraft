---
title: Qeydi tapşırığa çevirin
summary: Qeydə məsul (şəxs və ya köməkçiniz), son gün və onun aid olduğu çertyoj və ya model elementinə bağlantı verin və bu həqiqətən dəyişəndə bağlandığını görün.
keywords: tapşırıq, tapşırıqlar, məsul, köməkçi, son tarix, gecikmiş, bağlantı, bağlanır, dəyişiklik, element, çertyoj sahəsi, hərəkət edən qeydlər, MCP
from: 9e970202
---

Tapşırıq kimsə tərəfindən yerinə yetirilməli olan qeyddir. O, vərəqdəki yerini və söhbətini saxlayır və başlıq, məsul şəxs, son gün, vəziyyət və istəsəniz, aid olduğu şeyə bağlantı əlavə edir.

## Tapşırıq yaradın

1. Bir və ya bir neçə qeyd seçin.
2. {{ui:Tapşırıqlar}} sekmasını açın və {{ui:Seçilənləri tapşırığa çevir}} seçin.
3. Başlığı doldurun (qeydin mətnindən başlayır), kim üçün olduğunu ({{ui:Şəxs}} və ya {{ui:Köməkçi}}, və ad), istəyə bağlı son günü və nəyə diqqət etmək lazım olduğunu.

Köməkçi tapşırığı MarkupCraft-a qoşduğunuz köməkçi üçün işdir (bax: [MarkupCraft-ı süni intellekt köməkçisi ilə istifadə edin](topic:use-with-ai-assistants)). MarkupCraft öz köməkçisini ehtiva etmir: o yalnız işi siyahılayır və köməkçinin cavablarını qəbul edir. Siyahıda {{ui:Təyin edilib}} və sonra {{ui:Köməkçi}} seçmək onun gözlədiyi işi göstərir.

## Dəyişikliyi izləyin

- **Qeydin içindəki çertyoj.** MarkupCraft qeydin qutusunun içindəki xətləri indiki kimi saxlayır. Həmin vərəqin daha yeni revizyonunu açdıqda (eyni vərəq nömrəsi və ya eyni səhifə yerində ikinci fayl), {{ui:İndi yoxla}} seçin: həmin sahədəki xətlər tükdən çox fərqlənərsə, tapşırıq bağlanır.
- **Model elementi.** Tətbiqi və elementin id-sini verin. Köməkçiniz elementi digər tətbiqin öz alətləri ilə oxuyur və `tasks_check` ilə bildirir. İlk hesabat başlanğıc vəziyyət kimi saxlanılır; fərqli sonrakı hesabat tapşırığı bağlayır. Silinmiş element də onu bağlayır.
- **Heç nə.** Əllə bitirdiyiniz sadə tapşırıq.

Bağlanmış tapşırıq Bitib kimi işarələnir, onun qeydi Tamamlanıb olur və söhbətdəki qeyd nəyin dəyişdiyini deyir. Bir geri qaytarma addımı onu yenidən açır.

**Məhdudiyyət:** yoxlama fərz edir ki, daha yeni revizyon eyni səhifə başlanğıcını və səhifə ölçüsünü istifadə edir. Başqa ölçüdə yenidən çap olunmuş vərəq uyğun gəlməyəcək, buna görə onun tapşırıqları bağlanmayacaq. Vərəqlər vərəq nömrəsinə görə, yoxsa səhifə yerinə görə cütlənir; MarkupCraft bir revizyonu digərinə uyğunlaşdırmaq üçün miqyasını dəyişmir.

Eyni çertyojun yeni tarix ştampı ilə yenidən çap olunması və ya 1.5 pt-dən az köçmüş xətlər dəyişiklik sayılmır. Daha yeni revizyon açıq deyilsə, tapşırıq açıq qalır və status sətri bunu deyir.

## Siyahı

{{ui:Tapşırıqlar}} siyahısı vəziyyətə və kim üçün olduğuna görə süzülə bilər, o cümlədən {{ui:Müddəti keçmiş}}. Son günü keçmiş tapşırıq Problemlər panelində xəbərdarlıq kimi göstərilir. {{ui:CSV}} siyahını ixrac edir.

Tapşırıqlar qeyd ilə birlikdə PDF-də saxlanılır və digər qeyd xüsusiyyətləri kimi Live vasitəsilə hərəkət edir.

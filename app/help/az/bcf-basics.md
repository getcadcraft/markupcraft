---
title: BCF əsasları
summary: MarkupCraft-dan BCF ixracına nə daxildir, onu BIM koordinasiya alətləri ilə necə istifadə etmək və onun məhdudiyyətləri.
keywords: bcf, bcfzip, BIM əməkdaşlıq formatı, məsələlər, koordinasiya, toqquşma, mövzular, baxış nöqtəsi, anlıq görüntü, openbim, buildingsmart, məsələləri ixrac et
from: 446f38c1
---

BCF (BIM Collaboration Format) BIM alətləri arasında məsələləri ötürmək üçün açıq fayl formatıdır. Bir çox model koordinasiyası və layihələndirmə proqramı `.bcfzip` faylını məsələlərin siyahısı kimi idxal edə bilir. MarkupCraft **BCF 2.1** yazır.

## Bir fayl yaradın

1. {{ui:Qeydlər}} sekməsini açın.
2. Siyahını göndərmək istədiyiniz şeyə görə süzün, məsələn {{ui:Status}} "Açıq". Yalnız siyahıda olan qeydlər ixrac olunur.
3. {{ui:BCF}} seçin.
4. Hər qeydin anlıq görüntüsü yaradılana qədər gözləyin ("BCF üçün anlıq görüntülər yaradılır (20-dən 5)…").

Nəticə: "<name> markups.bcfzip" endirilir, status paneli neçə mövzu saxladığını və fayl ölçüsünü göstərir.

## Nələr daxildir

Hər qeyd bir **mövzu** olur:

| Mövzu sahəsi | Doldurulur |
|---|---|
| Başlıq | Nöqsan nömrəsi, mövzu və vərəq, məsələn "#4 A-101-də bulud — Mərtəbə planı" |
| Növ | Qeydin növü (Bulud, Çağırış, Uzunluq…) |
| Status | Açıq, Qəbul edilib, Rədd edilib və ya Tamamlanıb |
| Etiketlər | Qeydin növü və vərəq |
| Müəllif və tarixlər | Qeydin müəllifi, yaradılma və dəyişdirilmə tarixləri |
| Təyin olunub, son tarix | Nöqsan elementindən, varsa |
| Təsvir | Mətni və ya ştamp mətni, ölçülmüş dəyər, şərh, vərəq və fayl |
| Şərhlər | Hər cavab üçün bir, müəllif və tarixlə |
| Anlıq görüntü | Qeydin vərəqdəki yerinin şəkli |
| Baxış nöqtəsi | Qeydin vərəqdəki yerinin yuxarıdan görünüşü |

Eyni qeydi yenidən ixrac etdikdə eyni mövzu ID-si alınır, buna görə BCF-i idxal edən alət onu eyni məsələ kimi tanıya bilir.

## Bilməli olduğunuz məhdudiyyətlər

- **Vərəq model deyil.** Baxış nöqtəsi qeydin kağız üzərindəki yerinə işarə edir və metrlə kağız üzərində ölçülür. BIM aləti onu modeldəki yerə aparmır. Yeri tapmaq üçün anlıq görüntüdən və vərəqin adından istifadə edin.
- **Status və növlər MarkupCraft-ın öz növləridir** (Açıq, Qəbul edilib, Rədd edilib, Tamamlanıb; Bulud, Çağırış…). Fayl onları BCF-in icazə verdiyi kimi elan edir, lakin öz sabit siyahıları olan alət onları uyğunlaşdıra və ya nəzərə almaya bilər.
- **İdxal model baxışlarını yox, şərhləri gətirir.** {{ui:BCF idxal et}} ixrac etdiyiniz qeydlərə cavabları və statusları əlavə edir, digər məsələlər üçün isə qeydlər yaradır; model kamerasını göstərə bilmir. Bax: [Qeydlərin siyahısı və ixrac](topic:markups-list-and-export#import-bcf).
- Qeydləri PDF kimi geri göndərmək çertyoj yoxlamaları üçün çox vaxt daha sadədir. BCF çertyoj şərhlərini model koordinasiyası iş axınına gətirmək üçündür.

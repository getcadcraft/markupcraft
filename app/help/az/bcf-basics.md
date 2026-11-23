---
title: BCF əsasları
summary: MarkupCraft-dan BCF ixracının nəyi ehtiva etdiyi, onun BIM koordinasiya alətləri ilə necə istifadə olunduğu və məhdudiyyətləri.
keywords: bcf, bcfzip, BIM əməkdaşlıq formatı, məsələlər, koordinasiya, toqquşma, mövzular, baxış nöqtəsi, snapshot, openbim, buildingsmart, məsələləri ixrac et
from: 0de26175
---

BCF (BIM Collaboration Format) BIM alətləri arasında məsələləri ötürmək üçün açıq fayl formatıdır. Bir çox model koordinasiyası və layihələndirmə proqramları `.bcfzip` faylını məsələlər siyahısı kimi idxal edə bilir. MarkupCraft **BCF 2.1** yazır.

## Bir fayl yaradın

1. {{ui:Qeydlər}} sekmesini açın.
2. Siyahını göndərmək istədiyiniz şeyə görə süzün, məsələn {{ui:Status}} "Açıq". Yalnız siyahıda olan qeydlər ixrac olunur.
3. {{ui:BCF}} seçin.
4. Hər qeyd üçün snapshot yaradılarkən gözləyin ("BCF üçün snapshot-lar yaradılır (20-dən 5)…").

Nəticə: "<name> markups.bcfzip" yüklənir və status paneli neçə mövzu saxladığını və fayl ölçüsünü göstərir.

## Nəyi ehtiva edir

Hər qeyd bir **mövzu** olur:

| Mövzu sahəsi | Doldurulur |
|---|---|
| Başlıq | Punch nömrəsi, mövzu və vərəq, məsələn "#4 Bulud A-101 üzərində — Mərtəbə planı" |
| Növ | Qeyd növü (Bulud, Çağırış, Uzunluq…) |
| Status | Açıq, Qəbul edilib, Rədd edilib və ya Tamamlanıb |
| Etiketlər | Qeyd növü və vərəq |
| Müəllif və tarixlər | Qeydin müəllifi, yaradılma və dəyişdirilmə tarixləri |
| Təyin edilib, son tarix | Varsa, onun punch elementindən |
| Təsvir | Mətni və ya ştamp ifadəsi, ölçülmüş dəyər, şərh, vərəq və fayl |
| Şərhlər | Hər cavab üçün bir, müəllif və tarixlə |
| Snapshot | Qeydin vərəqin öz hissəsindəki şəkli |
| Baxış nöqtəsi | Qeydin vərəqdəki yerinin yuxarıdan baxışı |

Eyni qeydi yenidən ixrac etsəniz, eyni mövzu ID-si alınır, buna görə BCF idxal edən alət onu eyni məsələ kimi tanıya bilir.

## İdxal edəndə nə gəlir

{{ui:BCF idxal et}} BCF 2.0, 2.1 və 3.0 fayllarını oxuyur (rəsmi buildingSMART 3.0 test faylları üzərində yoxlanılıb: 19 faylın hamısında hər mövzu oxunub və mətni olan üç faylın şərhləri). Sizin olan mövzu (eyni mövzu ID-si) üçün yeni şərhlər cavab kimi əlavə olunur və yeni status götürülür. Digər hər mövzu etiketində və ya fayl adında göstərilən vərəqdə qeydə çevrilir; belə vərəq yoxdursa, açıq vərəqdə. Qeydin mətni kimi başlıq, təsvir, məsul şəxs və son tarix, cavab kimi isə şərhlər götürülür.

| BCF mövzusunda | MarkupCraft-da |
|---|---|
| Başlıq, təsvir, məsul şəxs, son tarix | Qeydin mətni |
| Mətnli şərhlər | Cavablar |
| Status Açıq, Qəbul edilib, Rədd edilib, Tamamlanıb (Closed, Resolved, Done Tamamlanıb sayılır) | Qeydin statusu |
| Müəllif və yaradılma tarixi | Qeydin müəllifi və tarixi |
| Kamera mövqeyi | Vərəqdə yer, yalnız etiket və ya fayl adı ilə vərəqə bağlı mövzu üçün |
| Model seçimi, gizli hissələr, kəsmə müstəviləri, snapshot-lar | Saxlanılmır: vərəqdə onları göstərəcək model yoxdur |

## Bilmək lazım olan məhdudiyyətlər

- **Vərəq model deyil.** Baxış nöqtəsi qeydin kağız üzərindəki yerinə işarə edir, kağız üzərində metrlə ölçülür. BIM alətini modeldəki yerə aparmır. Yeri tapmaq üçün snapshot-dan və vərəqin adından istifadə edin.
- **Statuslar və növlər MarkupCraft-ın öz növləridir** (Açıq, Qəbul edilib, Rədd edilib, Tamamlanıb; Bulud, Çağırış…). Fayl onları BCF-nin icazə verdiyi kimi elan edir, lakin öz sabit siyahıları olan alət onları uyğunlaşdıra və ya nəzərə almaya bilər.
- **İdxal yalnız şərhləri gətirir, model baxışlarını yox.** {{ui:BCF idxal et}} ixrac etdiyiniz qeydlərə cavab və statuslar əlavə edir, digər məsələlər üçün isə qeydlər yaradır; model kamerasını göstərə bilmir. Bax: [Qeydlər siyahısı və ixrac](topic:markups-list-and-export#import-bcf).
- Çertyoj üzrə baxışlar üçün qeydləri PDF kimi geri göndərmək çox vaxt daha sadədir. BCF çertyoj şərhlərini model koordinasiyası iş axınına gətirmək üçündür.

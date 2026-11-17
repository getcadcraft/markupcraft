---
title: MarkupCraft-ı AI köməkçisi ilə istifadə edin
summary: Öz AI köməkçinizin və ya skriptinizin dəstin qeydlərini siyahıya salmasına, sadə qeydlər əlavə etməsinə, statusu təyin etməsinə, cavab verməsinə və siyahını ixrac etməsinə icazə verin — icazələr, CadCraft Studio ilə qoşulma və fəaliyyət jurnalı.
keywords: ai, köməkçi, agent, mcp, model context protocol, skript, avtomatlaşdırma, qeydlər, baxış, icazələr, ayırmaq, fəaliyyət
from: 095f2977
---

## Nə öyrənəcəksiniz

AI köməkçisinin (və ya yazdığınız skriptin) MarkupCraft ilə necə işləməsinə icazə verməyi və nəyə toxuna biləcəyini necə qərara almağı.

MarkupCraft **öz AI-ı yoxdur** və heç nə heç yerə göndərmir. Köməkçini özünüz gətirirsiniz: Model Context Protocol (MCP) dilində danışan istənilən proqram. MarkupCraft ona yalnız alətlər verir, hansını seçdiyiniz isə sizsiniz.

## Aktivləşdirin

1. {{ui:Settings}} (tətbiq panelində çarx, və ya {{key:Mod+,}}) açın və {{ui:MarkupCraft}} sekməsinə keçin.
2. {{ui:Assistants}} altında **AI köməkçilərinə və skriptlərə MarkupCraft-dan istifadə etməyə icazə verin** qutusunu qeyd edin. Siz bunu edənə qədər söndürülüdür.
3. Nə edə biləcəyini seçin: **Oxu** əvvəldən qeydlidir; **Redaktə**, **Saxla** və ya **İxrac** yalnız lazım olanda qeyd edin.

Qeyd etdiyiniz icazələrdən kənar alətlər köməkçiyə təklif olunmur; köməkçi yenə də birini istəsə, MarkupCraft rədd edir və bunu fəaliyyət jurnalına yazır. Keçidi söndürmək bütün qoşulmaları dərhal bitirir; {{ui:Reset MarkupCraft settings}} də onu söndürür.

## Köməkçinizi qoşun

Köməkçilər öz kompüterinizdə **CadCraft Studio** vasitəsilə qoşulur: Studio yalnız bu kompüterin çata biləcəyi kiçik bir server işlədir və hər başlanğıcda yaratdığı token ilə qorunur. Studio-da {{ui:Connect an assistant}} seçin və ünvanı və tokeni köməkçinizə kopyalayın (Studio yapışdırmaq üçün dəqiq parametrləri göstərir). Tokeni heç vaxt paylaşmayın.

:::note
Brauzer sekməsi köməkçi üçün qoşulma aça bilməz: brauzer tətbiqlərində kompüterinizdəki CadCraft Studio-dan istifadə etməyincə keçidin heç bir təsiri yoxdur.
:::

## Siz nəzarətdə qalırsınız

- **Hər dəyişiklik bir geri-alma addımıdır**, köməkçinin adı ilə etiketlənir (məsələn "Köməkçi: cloudrect əlavə et"). {{key:Mod+Z}} köməkçinin son dəyişikliyini bütövlükdə geri alır.
- **Qoşulu olduğunu bilirsiniz.** Tətbiq panelindəki düymə qoşulu olduğu müddətdə köməkçinin adını göstərir; ona klikləyin ki, nə edə biləcəyini görəsiniz, və ya **Ayır** ilə ayırın.
- **Fəaliyyət.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} hər çağırışı sıralayır: nə vaxt, hansı alət, icra olundu və ya rədd edildi. {{ui:Save the log}} surətini saxlayır.

## Köməkçi nə istəyə bilər

| Alət | İcazə | Nə edir |
|---|---|---|
| `app_info`, `sheets_list` | Oxu | Açıq dəstlər, onların vərəqləri və hər birində neçə qeyd olduğu |
| `markups_list` | Oxu | Qeydlər növü, vərəqi, mətni, şərhi, ölçüsü, statusu, müəllifi və cavabları ilə; vərəq, status, növ və ya müəllifə görə süzülmüş |
| `markup_add` | Redaktə | Vərəqə düzbucaqlı, bulud, ellips, mətn qutusu, qeyd, xətt və ya ox əlavə edir |
| `markup_status`, `markup_reply` | Redaktə | Qeydin statusunu təyin edir (zəncirdə qeyd olunur, köməkçi tərəfindən imzalanır); zəncirə şərh əlavə edir |
| `markups_export` | İxrac | {{ui:Markups}} siyahısının öz CSV və ya BCF-i, siyahının göstərdiyi kimi (filtrləri sizin təyin etdiyiniz kimi); Studio-da icazə verdiyiniz qovluğa faylı yaza bilər |
| `tasks_list` | Oxu | Tapşırıq olan qeydlər: təyin olunan (şəxs və ya köməkçi), son tarix günü, vəziyyət, keçid, necə bağlandığı. `assignee: "assistant"` köməkçini gözləyən işi siyahılayır |
| `task_set`, `task_clear` | Redaktə | Qeydi tapşırıq edir və ya dəyişdirir (başlıq, təyin olunan, son tarix, vəziyyət, keçid); tapşırığı çıxarır |
| `tasks_check` | Redaktə | Bağlı çertyoj sahəsi və ya model elementi həqiqətən dəyişmiş tapşırıqları bağlayır; digər proqramdan oxuduğunuz element vəziyyətlərini ötürür |
| `revisions_changes` | Oxu | İki açıq plan dəsti arasında nəyin dəyişdiyinin sadə siyahısı, öz sözlərinizlə yazmaq üçün |
| `pins_list`, `decision_add` | Oxu, Redaktə | Səsli qeydlər (uzunluq, kim, nə vaxt, şərh; heç vaxt səs və ya transkript yox) və qərarlar; qərarı bərkidin və əvvəlki qərarı əvəz edin |
| `redline_export`, `redline_answer` | İxrac, Redaktə | Layihəçi üçün redline faylını yazın; layihəçinin cavablarını tətbiq edin |

Köməkçinin əlavə etdiyi qeyd onu müəllif kimi adlandırır: köməkçi proqramın özünə verdiyi ad, ardınca "(köməkçi)", və ya siz rəyçi adınızı təyin etdikdən sonra "(<adınız> üçün köməkçi)". Onun status dəyişiklikləri və cavabları eyni şəkildə imzalanır. Hər biri bir geri-alma addımıdır. Saxlanmış PDF-i yazmaq sizdə qalır: adi kimi {{ui:Save}} istifadə edin.

MarkupCraft-ı açmadan, CadCraft MCP serveri siz təyin etdiyiniz qovluqdakı PDF-in qeydlərini siyahılayır (`markups_list`), və `cadcraft info Set.pdf` onları komanda sətrində çap edir.

## Nəsə işləmirsə

- **Köməkçi heç bir MarkupCraft alətini görmür:** keçidin bu pəncərədə açıq olduğunu və pəncərənin Studio-da açıq olduğunu yoxlayın.
- **"redaktə icazəsi lazımdır":** {{ui:Assistants}} altında **Redaktə** qeyd edin, sonra yenidən soruşun.
- **"401" və ya "token" xətaları:** token dəyişib (Studio yenidən başladılıb və ya {{ui:New token}}). Yeni tokeni köməkçinin parametrlərinə kopyalayın.

## Bax

- [AI köməkçiləri üçün nümunələr](common:assistants-recipes): hər biri çağırdığı alətlərlə birlikdə işlənmiş nümunələr.

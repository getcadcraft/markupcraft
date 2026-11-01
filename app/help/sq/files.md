---
title: Skedarët që hap dhe ruan MarkupCraft
summary: PDF-të hyjnë, një kopje PDF me shënime del jashtë, plus skedarë CSV, BCF dhe të kutisë së veglave; ku shkon secili, në linjë dhe jashtë linje.
keywords: pdf, hap, ruaj, eksporto, shkarko, csv, bcf, bcfzip, json, kutia e veglave, llojet e skedarëve, formatet, ngarko, fjalëkalim, i enkriptuar
from: b3045b4c
---

## Çfarë hap MarkupCraft

| Skedari | Si | Çfarë ndodh |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open}}, {{key:Mod+O}}, ose tërhiqe dhe lësho në zonën e fletës. Disa njëherësh është në rregull. | Çdo faqe bëhet një fletë. Shënimet që janë tashmë në skedar lexohen përsëri (më poshtë). |
| Kutia e veglave (`.json`) | Kartela {{ui:Tools}}, pastaj {{ui:Import}} | Veglat shtohen në kutinë tënde. Shih [Kutia e veglave](topic:tool-chest). |

Çdo gjë tjetër refuzohet me mesazhin "MarkupCraft hap vetëm skedarë PDF." në shiritin e gjendjes. Nëse lëshon një përzierje, PDF-të hapen dhe shiriti i gjendjes thotë sa skedarë nuk ishin PDF.

### Shënimet që janë tashmë në një PDF

- **Shënimet që MarkupCraft i ruajti** kthehen saktësisht: lloji, stili, autori, datat, gjendja, përgjigjet, numri i defektit, shkalla e fletës dhe emrat e fletëve që ke shkruar.
- **Komentet nga programe të tjera PDF** lexohen gjithashtu. Drejtkëndëshat, elipset, vijat dhe shigjetat, polivijat, vijat e stilolapsit (ink), kutitë e tekstit dhe shënimet ngjitëse bëhen shënime normale të MarkupCraft, të redaktueshme. Përgjigjet dhe gjendjet e rishikimit vijnë me to.
- **Çdo gjë tjetër** (theksimet e tekstit të bëra duke zgjedhur tekst, vulat e programeve të tjera dhe lloje të tjera) shfaqet siç është, e shënuar si vetëm për lexim. Mund ta zgjedhësh, ta shohësh në listën e shënimeve dhe t'i përgjigjesh, por nuk mund ta zhvendosësh, ndryshosh apo fshish.
- Lidhjet dhe fushat e formularit lihen të pandryshuara dhe nuk listohen.
- Një shkallë e ruajtur nga një program tjetër (një port matjeje) përdoret si shkallë e fletës kur MarkupCraft e kupton njësinë e saj.

### Skedarët që nuk hapen

- Një PDF që kërkon një fjalëkalim për ta hapur: "emri" kërkon një fjalëkalim për ta hapur. Hap një kopje pa mbrojtje.
- Një skedar i dëmtuar ose që nuk është vërtet PDF: "emri" nuk mund të lexohej si PDF (…)
- Një PDF që hapet por është i mbrojtur nga ndryshimet hapet mirë. Ruajtja e tij refuzohet (shih më poshtë).

Kur hapen disa skedarë njëherësh, ata që funksionojnë hapen dhe një kuti me titull "Disa skedarë nuk u hapën" liston të tjerët.

## Çfarë ruan MarkupCraft

Ruajtja është gjithmonë një **shkarkim** i një skedari të ri. Një faqe web nuk mund të shkruajë mbi një skedar në kompjuterin tënd, dhe MarkupCraft nuk ndryshon kurrë origjinalin tënd.

| Ti zgjedh | Merr | Shënime |
|---|---|---|
| {{ui:Save}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Një kopje e PDF-së origjinale me çdo shënim të shkruar si koment real PDF. Ruajtja e një skedari "(marked up)" përsëri mban të njëjtin emër; nuk bëhet kurrë "(marked up) (marked up)". Shih [Ruaj PDF-në me shënime](topic:save-the-marked-up-pdf). |
| Kartela {{ui:Markups}}, pastaj {{ui:CSV}} | "<name> markups.csv" | Shënimet ashtu siç listohen (filtrat zbatohen). |
| Kartela {{ui:Markups}}, pastaj {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 për veglat e koordinimit BIM, një pamje për çdo shënim. Shih [Bazat e BCF](topic:bcf-basics). |
| Kartela {{ui:Punch list}}, pastaj {{ui:Export CSV}} | "<name> punch list.csv" | Elementët e defekteve sipas numrit. |
| Kartela {{ui:Tools}}, pastaj {{ui:Export}} | "MarkupCraft tool chest.json" | Kutia jote e veglave, për ta ndarë ose ruajtur. |

"<name>" është emri i skedarit të parë PDF të hapur pa ".pdf".

Skedarët CSV hapen në çdo fletëllogaritëse. Ata janë UTF-8 me shenjën që kërkojnë fletëllogaritëset, kështu që emrat me shkronja të theksuara dalin saktë. Një qelizë që fillon me =, +, - ose @ merr një apostrof në fillim, që një fletëllogaritëse të mos e ekzekutojë kurrë si formulë.

## Ku shkojnë shkarkimet

Shfletuesi yt vendos: zakonisht dosjen e shkarkimeve, ose pyet çdo herë nëse e ke caktuar kështu. Shih [Shfletuesit dhe kompjuterët](common:browsers#what-differs-between-browsers).

:::chromium
Kur ruan çdo skedar të ndryshuar të një grupi njëherësh, Chrome dhe Edge mund të pyesin nëse kjo faqe lejohet të shkarkojë disa skedarë. Zgjidh {{ui:Allow}}, përndryshe merr vetëm kopjen e parë.
:::

:::safari
Në iPad, Safari pyet përpara çdo shkarkimi dhe e vendos skedarin në aplikacionin Files, nën Downloads. Në Mac shkon në dosjen e caktuar në cilësimet e Safari.
:::

## Online dhe jashtë linje

- **PDF-të e tua nuk largohen kurrë nga ky kompjuter**, në linjë ose jashtë linje. Nuk ka asnjë ngarkim askund.
- Lexuesi i PDF-së ngarkohet herën e parë që hap një PDF ("Duke ngarkuar lexuesin e PDF-së…"), dhe shkruesi i PDF-së herën e parë që ruan ("Duke ngarkuar shkruesin e PDF-së…") ose kur hap një skedar që ka tashmë komente.
- Me lidhje, të dyja ngarkohen nga faqja e internetit.
- **Për të punuar pa lidhje,** zgjidh {{ui:Save for offline}} në shiritin e sipërm ndërsa je në linjë. Butoni numëron "Duke ruajtur N nga M" dhe më pas thotë "Gati jashtë linje". Ai kopje përfshin lexuesin dhe shkruesin e PDF-së (rreth 6 MB gjithsej) dhe këtë ndihmë, kështu që më pas hapja, shënimi dhe ruajtja e PDF-ve funksionojnë jashtë linje në këtë shfletues.
- Nëse butoni thotë "Nuk u ruajt", disa skedarë nuk u shkarkuan: kontrollo lidhjen dhe kliko përsëri. Nëse thotë "Jashtë linje nuk ofrohet", kjo dritare shfletuesi nuk mund të mbajë një kopje jashtë linje (dritaret private dhe disa kompjuterë të menaxhuar); përdor një dritare normale.
- Për të përditësuar ose hequr kopjen, kliko "Gati jashtë linje" dhe zgjidh "Ruaje përsëri (merr versionin më të fundit)" ose "Hiq kopjen jashtë linje". Më shumë te [Puna jashtë linje](common:offline).

:::offline
Je jashtë linje. Nëse shiriti në krye thotë "Gati jashtë linje", çdo gjë funksionon, përfshi ruajtjen. Nëse nuk thotë dhe nuk ke ruajtur ende në këtë skedë, {{ui:Save}} mund të dështojë me "Shkruesi i PDF-së nuk mundi të ngarkohej". Shënimet e tua janë akoma në skedë: mbaje të hapur, kthehu në linjë dhe zgjidh {{ui:Save}} përsëri.
:::

## Gjëra që duhen ditur

- Grupet e mëdha planimetrish marrin kohë për t'u hapur: MarkupCraft lexon tekstin e çdo faqeje për të gjetur numrat e fletëve. Shiriti i gjendjes numëron fletët ndërsa shkon.
- Hapja e të njëjtit PDF dy herë shton fletët e tij dy herë. Mbyll grupin dhe hape përsëri nëse ndodh kjo.
- {{ui:Close}} mbyll çdo skedar të hapur njëherësh. Nëse ndonjëri ka shënime të paruajtura, pyet: {{ui:Cancel}}, {{ui:Close without saving}} ose {{ui:Save copies first}}.
- Ruajtja në cloud nuk është ende e disponueshme, dhe nuk ka ende versione për desktop. Mbaji PDF-të me skedarët e tjerë të projektit dhe bëj kopje rezervë si zakonisht. Shih [Ku shkojnë skedarët e tu](common:your-files).

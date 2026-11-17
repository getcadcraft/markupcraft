---
title: Ruaj PDF-në me shënime
summary: Shkarko një kopje me çdo shënim të shkruar si koment standard PDF, kontrollo çfarë shohin lexuesit e tjerë PDF, dhe vazhdo ta punosh më vonë.
keywords: ruaj, shkarko, eksporto pdf, me shënime, anotime, komente, ndaj, dërgo, çështje, vazhdo punën, rihap, cikël i plotë, printo
from: 4c198ebe
---

## Ruaj

1. Zgjidh {{ui:Ruaj}} te shiriti i veglave, ose shtyp {{key:Mod+S}}.
2. Nëse janë hapur disa skedarë, zgjidh {{ui:Ky skedar}} (skedari i fletës ku je) ose {{ui:Çdo skedar i ndryshuar}}. Çdo kopje shkarkohet veçmas.
3. Prit që të përfundojë "Po ruhet <file>…". Ruajtja e parë në një sesion ngarkon edhe shkruesin e PDF-së.

Rezultati: shfletuesi yt shkarkon "<name> (marked up).pdf", dhe shiriti i statusit e raporton: 'U ruajt A-Plans (marked up).pdf (24 shënime, 18.2 MB). Skedari origjinal nuk ndryshoi.' Pika pas {{ui:Ruaj}} zhduket.

**PDF-ja jote origjinale nuk ndryshohet kurrë.** MarkupCraft shkruan një skedar të ri. Ku del varet nga cilësimet e shkarkimit të shfletuesit tënd (shih [Skedarët që MarkupCraft hap dhe ruan](topic:files#where-downloads-go)).

## Vazhdo punën më vonë

Herën tjetër, hap kopjen "(marked up)", jo origjinalin. Gjithçka kthehet e redaktueshme: shënimet, gjendjet, përgjigjet, elementët e listës së mangësive, shkalla e secilës fletë dhe çdo emër fletësh që ke shkruar. Ruajtja e saj përsëri shkarkon një skedar me të njëjtin emër "(marked up)"; shfletuesi mund të shtojë një numër si "(1)" nëse shkarkimi i vjetër është akoma në dosje. Zëvendëso ose pastro vetë kopjet e vjetra.

MarkupCraft nuk e ruan PDF-në vetë. Ndërsa punon, mban një kopje rikuperimi në këtë shfletues, kështu që një përplasje ose një skedë e mbyllur nuk humb shënimet e tua: hapja e radhës e MarkupCraft pyet "Rikthe punën?" Shih [Rikthe punën tënde](common:recover). Ruaj gjithsesi para se të mbyllësh; nëse përpiqesh të largohesh me shënime të pa ruajtura, shfletuesi pyet "Largohu nga faqja?" më parë (iPad Safari nuk e bën këtë).

## Çfarë shohin lexuesit e tjerë PDF

Çdo shënim shkruhet si koment standard PDF (anotim) me vizatimin e vet, kështu që çdo shikues PDF e shfaq, e printon dhe e liston në panelin e komenteve:

- **Pamja është e njëjtë** si në MarkupCraft: retë me harkat e tyre, shigjetat, vulat, pikat e numërimit, etiketat e numrave të elementeve të listës së mangësive, etiketat e matjeve.
- **Detajet janë standarde:** autori, data, tema, teksti i komentit dhe ngjyrat.
- **Retë** janë komente drejtkëndësh ose shumëkëndësh me kufi të rrumbullakosur; **kutitë e tekstit** dhe **thirrjet** janë komente kutie teksti; **shënimet** janë shënime ngjitëse; vizatimet me stilolaps dhe **theksuesi** janë komente ink; **vulat** janë komente vule.
- **Gjatësitë dhe sipërfaqet** janë komente matjeje, dhe çdo fletë e kalibruar mban shkallën e vet, kështu që shikuesit që kuptojnë matjet mund t'i shfaqin vlerat.
- **Përgjigjet** janë përgjigje ndaj komentit, dhe **gjendjet** janë gjendje shqyrtimi (Hapur shfaqet si pa gjendje).
- **Numrat e fletëve** që ke shkruar bëhen etiketat e faqeve që shfaqin shikuesit e tjerë.

Disa gjëra i lexon vetëm MarkupCraft: personi i caktuar dhe data e afatit të elementit të listës së mangësive, gjendja e elementit dhe disa detaje stili. Programet e tjera i mbajnë, përveç nëse e rishkruajnë komentin.

Në një program tjetër, komentet mund të zhvendosen ose të redaktohen si çdo koment tjetër. Nëse dikush e bën këtë dhe e dërgon skedarin përsëri, MarkupCraft përdor pozicionin e ri të komentit kur e hap skedarin.

Detaje të plota: [Çfarë ruhet në PDF](topic:what-the-pdf-keeps).

## Karaktere që shtypen si "?"

Teksti i shënimit shkruhet me fontin standard Helvetica që ka çdo shikues PDF. Mbulon shkronjat angleze dhe të Evropës Perëndimore (é, ñ, ü, ø e të ngjashme), por jo shkrimet e tjera, simbolet jashtë atij grupi, ose emoji. Ato karaktere duken mirë në MarkupCraft, por shtypen si "?" në kopjen e ruajtur, dhe mesazhi i ruajtjes i numëron: "3 karaktere jashtë grupit të Evropës Perëndimore shtypen si "?" në kopje." Shkruaji fjalët e tilla me shkronja, ose përdor një zëvendësim të thjeshtë (p.sh. "dia." për simbolin e diametrit).

## Skedarët që nuk mund të ruhen

- **PDF-të e mbrojtura:** "Ky PDF është i mbrojtur (i enkriptuar), kështu që nuk mund të shkruhet një kopje me shënime. Kërko një kopje pa mbrojtje." Ende mund ta shqyrtosh në ekran, dhe të eksportosh CSV dhe BCF.
- Nëse ruajtja dështon për një arsye tjetër, një kuti e quajtur "Nuk mund të ruhet <file>" shfaq arsyen. Shënimet e tua janë akoma në skedë; asgjë nuk humbet deri sa ta mbyllësh.

## Rrafshimi dhe printimi

Nuk ka rrafshim (djegje shënimesh në faqe) dhe as komandë printimi ende. Për të printuar, hap kopjen e ruajtur në çdo shikues PDF dhe printo me komentet të shfaqura.

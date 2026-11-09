---
title: Çfarë është e re në 0.8 dhe 0.8.1
summary: Shënime që bëhen detyra dhe mbyllen vetë, një listë e thjeshtë e asaj që ndryshoi mes revizioneve, shënime zanore dhe vendime në plan, skedarë redline për hartuesin, dhe ndryshimet e përbashkëta të 0.8: pajisjet hyrëse, rreshtat e shiritit të veglave, Problemet, më shumë gjuhë.
keywords: çfarë është e re, çfarë ka të re, shënime të publikimit, regjistri i ndryshimeve, ndryshime, 0.8, 0.8.1, version, veçori të reja, detyrë, detyra, caktuar, ditë afati, me vonesë, kontrollo tani, çfarë ndryshoi, revizione, krahaso, shënim zanor, vendim, redline, skedar përgjigjesh, hartues, asistent, mcp, probleme, gjuhë, pajisje hyrëse, trackpad, rreshta të shiritit të veglave, grila e vetive, përditëso
from: 40368796
---

Kjo është ajo që ndryshoi në MarkupCraft 0.8 dhe 0.8.1, krahasuar me 0.7. Gjëja e madhe e re është se një shënim mund të jetë një detyrë që dikush, ose asistenti juaj, e kryen, dhe që mbyllet vetë kur vizatimi ndryshon realisht.

## E re

### Shënime që veprojnë

- **Bëje një shënim detyrë.** Përzgjidh një ose më shumë shënime, hap skedën {{ui:Detyrat}} dhe zgjidh {{ui:Bëj detyrë të përzgjedhurat}}. Një detyrë ka një titull, një person ose asistentin tuaj të lidhur që e kryen, një ditë afati opsionale dhe një gjendje, dhe mban vendin e saj në fletë dhe fillin e saj. Shih [Bëje një shënim detyrë](topic:markups-that-act).
- **Detyra që mbyllen vetë.** Një detyrë mund të ndjekë vizatimin brenda shënimit të saj. Hap një revizion më të ri të fletës dhe zgjidh {{ui:Kontrollo tani}}: nëse vijat në atë zonë kanë ndryshuar më shumë se një qime, detyra shënohet si E kryer, shënimi i saj bëhet E përfunduar dhe një shënim në fill thotë çfarë ndryshoi. Një vulë e re datë, ose vija që kanë lëvizur më pak se 1.5 pikë, nuk numërohen. Një detyrë mund të ndjekë në vend të kësaj një element modeli: asistenti juaj e raporton elementin me `tasks_check`, dhe një raport i mëvonshëm që ndryshon, ose një element i fshirë, mbyll detyrën. Një hap i vetëm zhbëjeje e rihap.
- **Gjej punën.** Filtro listën {{ui:Detyrat}} sipas gjendjes dhe sipas kujt është, duke përfshirë {{ui:Me vonesë}}; zgjidh {{ui:Caktuar te}}, pastaj {{ui:Asistent}} për të parë çfarë pret asistentin tuaj. Një detyrë që ka kaluar ditën e afatit shfaqet si paralajmërim në panelin Problemet. {{ui:CSV}} eksporton listën. Detyrat ruhen në PDF bashkë me shënimin dhe udhëtojnë përmes Live si vetitë e tjera të shënimeve.

### Çfarë ndryshoi, si listë e thjeshtë

- **Listo ndryshimet.** Hap skedën {{ui:Krahaso}}, pastaj {{ui:Krahaso një set të tërë}}, zgjidh skedarin më të hershëm dhe më të vonshëm dhe zgjidh {{ui:Listo ndryshimet}}. Lista fillon me një numërim, pastaj mbulon çdo fletë të ndryshuar, ndryshimi më i madh i pari: ku ndodhet në fletë, sa e madhe është (në njësi reale si dhe në inç letre në një fletë të kalibruar), nëse vija u shtuan ose u hoqën, sa shënime ka atje, dhe cilat fjalë u shfaqën ose u zhdukën. {{ui:Kopjo listën}} e vendos në clipboard, dhe {{ui:CSV}} shkruan një rresht për çdo ndryshim. Shih [Listo çfarë ndryshoi mes revizioneve](topic:what-changed-in-words).

### Shënime zanore dhe vendime

- **Shënime zanore.** Në skedën {{ui:Shënimet}} zgjidh {{ui:Regjistro një shënim zanor}}, pastaj {{ui:Ndalo regjistrimin}}; regjistrimet ndalojnë vetvetiu pas dy minutash. Shënimi fiksohet në qendër të fletës, e tërheq atje ku duhet dhe shkruan një titull te {{ui:Vetitë}}, dhe {{ui:Luaj}} në listë e luan. Regjistrimi ruhet brenda PDF-së.
- **Vendime.** {{ui:Fikso një vendim}} shkruan një ose dy fjali në fletë. Nëse zëvendëson një vendim më të hershëm, zgjidhe atë te {{ui:Zëvendëson}}: i vjetri mbetet, shënohet si Zëvendësuar dhe tregon te i riu. Një hap zhbëjeje e kthen. Shih [Fikso shënimet zanore dhe vendimet në një fletë](topic:voice-notes-and-decisions).

### Redline në revizion

- **Dërgo dhe përgjigju.** Në skedën {{ui:Detyrat}} hap {{ui:Redline në revizion}}, shkruaj revizionin me të cilin krahasohen shënimet dhe zgjidh {{ui:Eksporto skedarin redline}}. Merr një skedar `.redline.json` me një artikull për çdo shënim të hapur: fletën, pozicionin (si thyesa të fletës, që një ri-printim në madhësi tjetër të përputhet ende), fjalët, autorin, fillin dhe detyrën e tij. Kushdo që bën ndryshimet përgjigjet me Pranuar, Refuzuar ose E kryer në një skedar `.redline-answers.json`; {{ui:Ngarko skedarin e përgjigjeve…}} i jep çdo shënimi atë gjendje dhe shënimin e hartuesit, si një hap të vetëm zhbëjeje. Shih [Dërgo shënimet te hartuesi si redline](topic:redline-to-revision).

### Asistentët AI

- **Më shumë mjete.** Një asistent që ke lidhur përmes CadCraft Studio mund të listojë detyra (`tasks_list`), të krijojë ose ndryshojë një (`task_set`), ta heqë detyrën (`task_clear`), të kontrollojë një detyrë kundrejt një revizioni më të ri ose një elementi (`tasks_check`) dhe të lexojë listën e thjeshtë të ndryshimeve mes dy setesh planesh të hapura (`revisions_changes`). Merr vetëm mjetet që ke shënuar nën ndërruesin Asistentët, dhe çdo ndryshim është një hap zhbëjeje. Shih [Përdor MarkupCraft me një asistent AI](topic:use-with-ai-assistants).

## Në çdo aplikacion

- **Gjuhët.** CadCraft Studio ka tani 54 gjuhë. Dhjetë janë të reja: Lituanisht, Letonisht, Boshnjakisht, Marathi, Telugu, Shqip, Afrikanisht, Filipinisht, Suahili dhe Uzbekisht. Të gjitha gjuhët jo-angleze janë ende draft me makinë, derisa një folës amtare t'i lexojë.
- **Pajisjet hyrëse.** {{ui:Cilësimet}} › {{ui:Globale}} › {{ui:Pajisjet hyrëse}} përcakton çfarë bën një trackpad, butonat anësorë të mausit, një stilolaps, prekjet me gisht, një maus 3D, një kontroller lojërash ose një kontroller MIDI, për çdo aplikacion ose vetëm për këtë. Derisa të ndryshosh diçka, çdo pajisje funksionon si më parë. Shih [Përdor trackpad, mausin 3D ose kontrollerin](common:input-devices).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ka {{ui:Mbështjell}} (parazgjedhja), {{ui:2 rreshta}} dhe {{ui:1 rresht}}, që vizatimi të ketë më shumë vend. Shih [Rregullo panelet](common:arrange-panels).
- **Tabela e vetive.** Fushat Style të një shënimi përdorin tabelën e përbashkët, me kategori që mund të palosen dhe kolona etiketash dhe vlerash.
- **Paneli i Problemeve.** Paralajmërimet nga aplikacioni, si një detyrë me vonesë, mblidhen në një panel të vetëm Problemet.
- **Live dhe shtojcat.** Sesionet Live përshkruhen në [Punoni bashkë live](common:work-together-live); lista e shtojcave që ndjek llogarinë tuaj është te [Shtojcat dhe lista e llogarisë tuaj](common:addons-basics).
- **Lidh AI-në tënde.** CadCraft Studio është qendra për asistentin tënd: lidhe një herë për të tetë aplikacionet. Aplikacionet nuk kanë AI të tyren.

## Të rregulluara në 0.8.1

- **Studio mund ta ndryshojë gjuhën ndërkohë që punon.** Më parë, aplikacioni desktop dhe edicionet e paketuara mbeteshin në anglisht. Kjo nuk është testuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.
- Instalimet e Studio 0.8 marrin ofertën për 0.8.1 përmes {{ui:Cilësimet}} › {{ui:Përditësimet}}.

## Nuk është në këtë version akoma

- **Pa nënshkrim kodi.** Instaluesit për Windows dhe skedari .dmg për macOS nuk kanë ende nënshkrim. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, kliko me butonin e djathtë te CadCraft Studio dhe zgjidh {{ui:Hap}}. Versionet për dyqanet janë në pritje.
- **Lidhja e AI-së është e paplotë në disa vende.** Lidhja me një klik brenda Studio, lidhësi i hostuar për asistentët në shfletues dhe çelësi juaj API brenda Studio nuk premtohen për këtë version. Cikli i detyrave është testuar, por jo ende me një asistent të vërtetë.
- **Kontrollet e detyrave kërkojnë të njëjtën madhësi faqeje.** Një fletë e ri-printuar në madhësi tjetër nuk do të përputhet, kështu detyrat e saj nuk mbyllen. Fletët çiftohen sipas numrit të fletës, ose përndryshe sipas pozicionit në faqe.
- **Shënimet zanore janë vetëm regjistrime.** Nuk ka transkriptim, dhe një asistent sheh gjatësinë, autorin dhe titullin e shënimit, jo zërin. Regjistrimi u provua me një mikrofon të rremë në një shfletues pa ekran; një mikrofon i vërtetë në telefon, tablet ose laptop është ende për t'u kontrolluar.
- **Fletët e llogaritjes dhe arsyet në PDF** ruhen në një hyrje private të skedarit. Një MarkupCraft më i vjetër e injoron atë hyrje dhe e heq herën tjetër kur ruan skedarin, kështu hap dhe ruaj një skedar të tillë me 0.8 ose më të ri.
- **Ana e hartuesit për redline.** CadCraft që lexon skedarin redline dhe i përgjigjet atij nuk është ndërtuar ende.
- **Gjuhë të tjera.** Shiriti i aplikacionit për tamilishten del jashtë me 528 px.

Çdo gjë tjetër është te [Çfarë nuk është ndërtuar ende](topic:not-built-yet). Për versionin para këtij, shih [Çfarë është e re në 0.7](topic:whats-new-0-7).

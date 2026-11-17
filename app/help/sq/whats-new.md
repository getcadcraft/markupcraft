---
title: Çfarë është e re në 0.9
summary: Shënime dhe një tabelë e lirë që nuk printohen kurrë, shënime private të enkriptuara dhe një kopje të pastër për klientin, lidhje në grup për një set të tërë vizatimesh, një mjet Hark me dhjetë metoda, ndjekja e një tjetër rishikuesi në Live, dhe një rregullim për shënimet e fshira që mbeten në PDF-në e ruajtur.
keywords: çfarë është e re, 0.9, shënime të publikimit, ndryshime, shënime, tabela e lirë, shënime private, frazë kalimi, të enkriptuara, fshih shënimet, shfaq shënimet, kopje e pastër, foto, lidhje në grup, thirrje fletësh, lidh fletët, blloku i titullit, numri i fletës, shtesë, rinumëro, lidhje pdf, hark, metoda harku, hark me tre pika, rreze, ndiq, ndiq më, live, pamja e klasës, lista e njerëzve, shënim i fshirë, ndihmat e kursorit, titujt e skedave, çfarë është e re, ndryshime, 0.8, 0.8.1, version, veçori të reja, detyrë, detyra, caktuar, ditë afati, me vonesë, kontrollo tani, çfarë ndryshoi, revizione, krahaso, shënim zanor, vendim, redline, skedar përgjigjesh, hartues, asistent, mcp, problemet, gjuhët, pajisjet hyrëse, trackpad, rreshtat e shiritit të veglave, rrjeti i vetive, përditëso
from: dbdd7ed4
---

Kjo është ajo që ndryshoi në MarkupCraft 0.9, krahasuar me 0.8.1. Ideja kryesore është që shënimet e tua të punës të mbeten jashtë faqes që merr klienti, dhe një set i tërë vizatimesh mund të lidhet në një kalim.

## Të reja

### Shënimet, tabela e lirë dhe shënimet private

- **Tabela e lirë.** Zona rreth çdo fletë është një tavolinë: çdo gjë e vizatuar, e shkruar ose e ngjitur pranë fletës është një shënim dhe nuk printohet kurrë. Zgjidh {{ui:Shfaq tabelën e lirë}} për t'u larguar për më shumë hapësirë, ose {{ui:Foto në tabelën e lirë}}, tërhiq një kuti, pastaj {{ui:Në tabelën e lirë}} për të vendosur një imazh të një pjese të vizatimit pranë fletës. Një foto është imazh dhe nuk ndryshon kur ndryshon fleta. Shih [Shënimet, tabela e lirë dhe shënimet private](topic:notes-and-pasteboard).
- **Shfaq dhe fshih shënimet.** Çdo shënim mund të jetë shënim: vendos {{ui:Markimet e reja janë}} te skeda {{ui:Shënimet}}, ose {{ui:Ky markim është}} te {{ui:Vetitë}}. {{key:Shift+H}} ose ndërrimi {{ui:Shënimet}} nën fletë fsheh dhe shfaq të gjitha shënimet njëherësh. Shënimet nuk përfshihen në printim, kopje të sheshuara, lista dhe eksporte, dhe lexuesit e tjerë PDF nuk i shfaqin. PDF-ja jote e ruajtur i mban për herën tjetër që e hap në MarkupCraft.
- **Shënime private.** Zgjidh {{ui:Vendos një frazë kalimi}}, pastaj bëje një shënim {{ui:Një shënim privat}}. Ai enkriptohet në skedar me një frazë kalimi të paktën 10 karaktere, dhe nuk ka rikuperim: askush, as ne, s'mund ta hapë pa frazën e kalimit. {{ui:Kyçe}} i fsheh shënimet private; {{ui:Qëndro i zhbllokuar në këtë pajisje}} është e fikur si parazgjedhje.
- **Ruaj një kopje të pastër.** {{ui:Ruaj një kopje të pastër}} heq çdo shënim, shënim privat dhe gjithçka në tabelën e lirë. Përdore për skedarin që shkon te klienti.

### Lidh një set të tërë

- **Lidhje në grup.** Zgjidh {{ui:Faqet}} › {{ui:Lidhjet në grup…}}, ose {{ui:Lidh thirrjet e fletëve…}} nën {{ui:Kërko tekst}} te paneli {{ui:Fletët}}. Hapi 1 liston numrin dhe emrin e çdo fletë, siç lexohen nga blloku i titullit; ndreq ato që janë të gabuara. Hapi 2 liston thirrjet e gjetura, si `3/A-501` ose `DETAIL 2 ON A-501`. {{ui:Do të lidhet}} tregon fletën dhe pamjen për secilën, {{ui:E pa lidhur}} tregon numrat që asnjë fletë e hapur nuk i ka, dhe {{ui:Krijo lidhjet}} i bën të gjitha në një hap të vetëm zhbërjeje. Ekzekuto përsëri pas një shtese ose rinumërimi; lidhjet që ke bërë me dorë nuk ndryshohen kurrë. Një lidhje me pamje ruhet si lidhje PDF, kështu që lexuesit e tjerë hapin edhe detajin. Shih [Lidhjet e fletëve](topic:sheet-links).

### Vizatimi

- **Hark, dhjetë metoda.** Mjeti {{ui:Hark}} ({{key:O}}) ka tani një kuti {{ui:Metoda e harkut}} mbi faqe me dhjetë mënyra për të vizatuar një hark, dhe këndi, gjatësia, rrezja dhe drejtimi mund të klikohen ose shkruhen. Shih [Vizato një hark në dhjetë mënyra](topic:draw-an-arc).

### Punë së bashku

- **Ndiq një rishikues.** Në një seancë Live zgjidh {{ui:Ndiq}} pranë emrit të një personi dhe pamja jote lëviz me të; nëse ti vetë lëviz ose zmadhon, ndjekja ndalon. Pronari mund të zgjedhë {{ui:Kërko që të gjithë të më ndjekin}}. Lista e njerëzve shfaq ngjyrën e secilit, emrin, fletën ku është dhe kur ishte ndryshimi i tij i fundit. Shih [Ndiq një rishikues tjetër në një seancë Live](topic:follow-in-live).

## Në çdo aplikacion

- Ndihmat e kursorit janë tooltip Bootstrap, shiriti i fillimit mund të mbyllet, shiritat e skedave lëvizin kur tejkalojnë, dhe titujt e skedave të shfletuesit lexohen `<dokument> — MarkupCraft | CadCraft`.
- Një panel me disa seksione hap një dhe mbyll të tjerët (një bllokim pranë kursorit mban një të hapur); një ndërrim te Cilësimet e fik këtë.
- Çdo aplikacion nis nga një koleksion parazgjedhje objektesh Library.
- Njësitë e peshës dhe të temperaturës janë të disponueshme te cilësimet e Njësive.

## Të rregulluara

- **Shënimet e hequra nuk mbeten të lexueshme brenda PDF-së së ruajtur.** Më parë, ruajtja e hiqte nga faqja një anotacion të fshirë ose të rishkruar, por linte objektin, me tekstin e tij, në skedar. Tani ruajtja i fshin këto objekte. Skedarët e ruajtur nga versionet e mëparshme i mbajnë ende deri sa t'i ruash përsëri.

## Kufizime të sinqerta

- Lidhjet në grup u provuan në setet tona të testimit. Setet reale vizatojnë flluska në shumë mënyra, kështu që në një set klienti disa pamje mund të mos gjenden. Fletët e skanuara kërkojnë {{ui:Lexo tekstin (OCR)…}} më parë.
- Shënimet, shënimet private dhe tabela e lirë u testuan në një shfletues pa ekran dhe në skedarët tanë, jo me një set të madh vektorial real dhe jo në një seancë Live të vërtetë me dy persona. Ndryshimi i një frazë kalimi nuk është ndërtuar. Versionet më të vjetra se 0.9 nuk i shfaqin shënimet.
- Pamja e klasës është lista e njerëzve; nuk është provuar me një mësues dhe nxënës të vërtetë.
- Gjuhët përveç anglishtes janë përkthime automatike të papërmirësuara deri sa t'i lexojë një folës amtar.
- Instaluesit e Windows nuk kanë nënshkrim kodi (Më shumë informacion, pastaj Ekzekuto gjithsesi); imazhi disku i macOS nuk është noterizuar (kliko me butonin e djathtë, pastaj Hap).

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në MarkupCraft 0.8 dhe 0.8.1, krahasuar me 0.7. Gjëja e madhe e re është se një shënim mund të jetë një detyrë që e bën dikush, ose asistenti yt, dhe që mbyllet vetvetiu kur vizatimi ndryshon realisht.

### Të reja

**Shënime që veprojnë**

- **Bëje një shënim detyrë.** Zgjidh një ose më shumë shënime, hap skedën {{ui:Detyrat}} dhe zgjidh {{ui:Bëj detyrë të përzgjedhurat}}. Një detyrë ka një titull, një person ose asistentin tënd të lidhur që ta bëjë, një ditë afati opsionale dhe një gjendje, dhe mban vendin e vet në fletë dhe fijen e saj. Shih [Bëje një shënim detyrë](topic:markups-that-act).
- **Detyra që mbyllen vetë.** Një detyrë mund të ndjekë vizatimin brenda shënimit të vet. Hap një revizion më të ri të fletës dhe zgjidh {{ui:Kontrollo tani}}: nëse vijat në atë zonë ndryshuan më shumë se një qime, detyra shënohet Done, shënimi i saj bëhet Completed dhe një shënim në fije thotë çfarë ndryshoi. Një vulë e re date, ose vija që u zhvendosën më pak se 1.5 pika, nuk llogariten. Një detyrë mund ndryshe të ndjekë një element modeli: asistenti yt e raporton elementin me `tasks_check`, dhe një raport më i vonshëm që ndryshon, ose një element i fshirë, e mbyll detyrën. Një hap zhbërjeje e rihap.
- **Gjej punën.** Filtro listën {{ui:Detyrat}} sipas gjendjes dhe sipas kujt është, duke përfshirë {{ui:Me vonesë}}; zgjidh {{ui:Caktuar te}}, pastaj {{ui:Asistent}} për të parë çfarë pret asistenti yt. Një detyrë që ka kaluar ditën e afatit shfaqet si paralajmërim në panelin Problems. {{ui:CSV}} eksporton listën. Detyrat ruhen në PDF me shënimin dhe udhëtojnë përmes Live si vetitë e tjera të shënimeve.

**Çfarë ndryshoi, si listë e thjeshtë**

- **Listo ndryshimet.** Hap skedën {{ui:Krahaso}}, pastaj {{ui:Krahaso një set të tërë}}, zgjidh skedarin më të hershëm dhe atë më të vonshëm dhe zgjidh {{ui:Listo ndryshimet}}. Lista fillon me një numërim, pastaj mbulon çdo fletë të ndryshuar, duke filluar nga ndryshimi më i madh: ku ndodhet në fletë, sa e madhe është (në njësi reale si dhe në inç letre në një fletë të kalibruar), nëse vija u shtuan ose u hoqën, sa shënime ka aty, dhe cilat fjalë u shfaqën ose u zhdukën. {{ui:Kopjo listën}} e vendos në clipboard, kurse {{ui:CSV}} shkruan një rresht për çdo ndryshim. Shih [Listo ndryshimet mes revizioneve](topic:what-changed-in-words).

**Shënime zanore dhe vendime**

- **Shënime zanore.** Në skedën {{ui:Shënimet}} zgjidh {{ui:Regjistro një shënim zanor}}, pastaj {{ui:Ndalo regjistrimin}}; regjistrimet ndalojnë vetvetiu pas dy minutash. Shënimi vendoset në qendër të fletës, e tërheq aty ku i takon dhe shkruan një përshkrim te {{ui:Vetitë}}, dhe {{ui:Luaj}} në listë e luan. Regjistrimi ruhet brenda PDF-së.
- **Vendime.** {{ui:Fikso një vendim}} shkruan një ose dy fjali mbi fletë. Nëse zëvendëson një vendim më të hershëm, zgjidhe atë te {{ui:Zëvendëson}}: vendimi i vjetër mbetet, shënohet Replaced dhe tregon drejt të riut. Një hap zhbërjeje e rikthen. Shih [Fikso shënimet zanore dhe vendimet në një fletë](topic:voice-notes-and-decisions).

**Redline në revizion**

- **Dërgo dhe përgjigju.** Në skedën {{ui:Detyrat}} hap {{ui:Redline në revizion}}, shkruaj revizionin me të cilin krahasohen shënimet dhe zgjidh {{ui:Eksporto skedarin redline}}. Merr një skedar `.redline.json` me një element për çdo shënim të hapur: fletën, pozicionin (si thyesa të fletës, që një ri-printim në madhësi tjetër të mbetet në vend), fjalët, autorin, fijen dhe detyrën e tij. Kush vizaton ndryshimet përgjigjet Accepted, Rejected ose Done në një skedar `.redline-answers.json`; {{ui:Ngarko skedarin e përgjigjeve…}} i jep çdo shënimi atë status dhe shënimin e hartuesit, si një hap i vetëm zhbërjeje. Shih [Dërgo shënimet te hartuesi si redline](topic:redline-to-revision).

**Asistentët AI**

- **Më shumë mjete.** Një asistent që ke lidhur përmes CadCraft Studio mund të listojë detyrat (`tasks_list`), të krijojë ose ndryshojë një detyrë (`task_set`), ta heqë detyrën (`task_clear`), ta kontrollojë një detyrë me një revizion më të ri ose me një element (`tasks_check`), dhe të lexojë listën e thjeshtë të ndryshimeve mes dy setesh planimetrish të hapura (`revisions_changes`). Merr vetëm mjetet që ke zgjedhur nën ndërrimin Asistentët, dhe çdo ndryshim është një hap i vetëm zhbërjeje. Shih [Përdor MarkupCraft me një asistent AI](topic:use-with-ai-assistants).

### Në çdo aplikacion

- **Gjuhët.** CadCraft Studio ka tani 54 gjuhë. Dhjetë janë të reja: lituanisht, letonisht, boshnjakisht, marathi, telugu, shqip, afrikanisht, filipinisht, suahili dhe uzbekisht. Të gjitha ato jo në anglisht janë përkthime automatike deri sa t'i lexojë një folës amtar.
- **Pajisjet hyrëse.** {{ui:Cilësimet}} › {{ui:Globale}} › {{ui:Pajisjet hyrëse}} përcakton çfarë bën një trackpad, butonat anësorë të miut, një stilolaps, prekjet me gisht, një miu 3D, një kontrollues lojërash ose një kontrollues MIDI, për çdo aplikacion ose vetëm për këtë. Derisa të ndryshosh diçka, çdo pajisje punon si më parë. Shih [Përdor një trackpad, miu 3D ose kontrollues](common:input-devices).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ka {{ui:Mbështjell}} (parazgjedhja), {{ui:2 rreshta}} dhe {{ui:1 rresht}}, që vizatimi të ketë më shumë hapësirë. Shih [Rregullo panelet](common:arrange-panels).
- **Rrjeti i vetive.** Fushat e stilit të një shënimi përdorin rrjetin e përbashkët, me kategori që mbylleten dhe kolona etiketash dhe vlerash.
- **Paneli i problemeve.** Paralajmërimet nga aplikacioni, si një detyrë me vonesë, mblidhen në një panel të vetëm Problems.
- **Live dhe shtesat.** Seancat Live përshkruhen te [Puno bashkë live](common:work-together-live); lista e shtesave që ndjek llogarinë tënde është te [Shtesat dhe lista e llogarisë tënde](common:addons-basics).
- **Lidh AI-në tënde.** CadCraft Studio është qendra për asistentin tënd: lidhu një herë për të tetë aplikacionet. Aplikacionet nuk përmbajnë AI të tyre.

### Të rregulluara në 0.8.1

- **Studio mund të ndryshojë gjuhën ndërkohë që punon.** Më parë, aplikacioni desktop dhe edicionet e paketuara mbeteshin në anglisht. Kjo nuk është provuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.
- Instalimet e Studio 0.8 marrin 0.8.1 përmes {{ui:Cilësimet}} › {{ui:Përditëso}}.

### Jo ende në këtë version

- **Pa nënshkrim kodi.** Instaluesit e Windows dhe imazhi disku .dmg i macOS nuk kanë ende nënshkrim. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, kliko me butonin e djathtë mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. Versionet për dyqane janë në pritje.
- **Lidh AI-në tënde është e papërfunduar në disa pjesë.** Lidhja me një klik brenda Studio, lidhësi i hostuar për asistentët në shfletues dhe çelësi yt API brenda Studio nuk premtohen për këtë publikim. Cikli i detyrave është provuar, por jo ende me një asistent të vërtetë.
- **Kontrollet e detyrave kërkojnë të njëjtën madhësi faqeje.** Një fletë e ri-printuar në madhësi tjetër nuk do të përputhet, kështu që detyrat e saj nuk mbyllen. Fletët çiftohen sipas numrit të fletës, ose përndryshe sipas pozicionit në faqe.
- **Shënimet zanore janë vetëm regjistrime.** Nuk ka transkriptim, dhe një asistent sheh gjatësinë, autorin dhe përshkrimin e shënimit, jo zërin. Regjistrimi u provua me një mikrofon të rremë në një shfletues pa ekran; një mikrofon i vërtetë në telefon, tablet ose laptop është ende për t'u kontrolluar.
- **Fletët e llogaritjes dhe arsyet në një PDF** mbahen në një hyrje private të skedarit. Një MarkupCraft më i vjetër e injoron atë hyrje dhe e heq herën tjetër që ruan skedarin, prandaj hape dhe ruaje një skedar të tillë me 0.8 ose më të ri.
- **Hartuesi në anën e redline-ve.** CadCraft që lexon skedarin redline dhe i përgjigjet nuk është ndërtuar ende.
- **Gjuhë të tjera.** Shiriti i aplikacionit në tamil tejkalon me 528 px.

Çdo gjë tjetër është te [Çfarë nuk është ndërtuar ende](topic:not-built-yet). Për versionin para këtij, shih [Çfarë është e re në 0.7](topic:whats-new-0-7).

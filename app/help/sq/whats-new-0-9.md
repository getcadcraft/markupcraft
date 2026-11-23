---
title: Çfarë ka të re në 0.9 (më herët)
summary: Shënime dhe tabelë e lirë që nuk shtypen kurrë, shënime private të enkriptuara dhe një kopje e pastër për klientin, lidhje në grup për një set të tërë vizatimesh, një mjet Hark me dhjetë metoda, ndjekja e një tjetri rishikues në Live, dhe një rregullim për shënimet e fshira që mbeten në PDF-in e ruajtur.
keywords: çfarë ka të re 0.9, version i mëparshëm, çfarë ka të re, 0.9, shënimet e versionit, ndryshimet, shënime, tabelë e lirë, shënime private, frazë kalimi, enkriptuar, fshih shënimet, shfaq shënimet, kopje e pastër, foto, lidhje në grup, thirrje fletësh, lidh fletët, blloku i titullit, numri i fletës, shtesë, riemërto, lidhje pdf, hark, metodat e harkut, hark me tre pika, rreze, ndiq, ndiq të tjerët, live, pamja e klasës, lista e njerëzve, shënim i fshirë, tooltip, titujt e skedave, ndryshimet, 0.8, 0.8.1, version, veçori të reja, detyrë, detyrat, caktuar, data e afatit, me vonesë, kontrollo tani, çfarë ndryshoi, rishikime, krahaso, shënim zanor, vendim, redline, skedari i përgjigjeve, hartues, asistent, mcp, problemet, gjuhët, pajisjet hyrëse, trackpad, rreshtat e shiritit të veglave, shtyllë vetive, përditëso
from: aa3dfeb8
---

Kjo është ajo që ndryshoi në MarkupCraft 0.9, krahasuar me 0.8.1. Ideja kryesore është që shënimet e punës të mbeten jashtë faqes që merr klienti, dhe një set i tërë vizatimesh mund të lidhet në një kalim.

## E re

### Shënimet, tabela e lirë dhe shënimet private

- **Tabela e lirë.** Zona rreth çdo fletë është një tavolinë punë: çdo gjë e vizatuar, e shkruar ose e ngjitur pranë fletës është një shënim dhe nuk shtypet kurrë. Zgjidh {{ui:Shfaq tabelën e lirë}} për të zmadhuar pak për hapësirë, ose {{ui:Foto në tabelën e lirë}}, tërhiq një kuti, pastaj {{ui:Në tabelën e lirë}} për të vendosur një imazh të një pjese të vizatimit pranë fletës. Një foto është imazh dhe nuk ndryshon kur ndryshon fleta. Shih [Shënimet, tabela e lirë dhe shënimet private](topic:notes-and-pasteboard).
- **Shfaq dhe fshih shënimet.** Çdo shënim mund të jetë një shënim: vendose {{ui:Markimet e reja janë}} te skeda {{ui:Shënimet}}, ose {{ui:Ky markim është}} te {{ui:Vetitë}}. {{key:Shift+H}} ose ndërruesi {{ui:Shënimet}} nën fletë fsheh dhe shfaq të gjithë shënimet njëherësh. Shënimet lihen jashtë shtypjes, kopjeve të sheshta, listave dhe eksporteve, dhe lexuesit e tjerë PDF nuk i shfaqin. PDF-i juaj i ruajtur i mban ato për herën tjetër që e hapni në MarkupCraft.
- **Shënime private.** Zgjidh {{ui:Vendos një frazë kalimi}}, pastaj bëj një shënim {{ui:Një shënim privat}}. Ai enkriptohet në skedar me një frazë kalimi prej të paktën 10 karakteresh, dhe nuk ka rikuperim: askush, as ne, nuk mund ta hapë pa frazën e kalimit. {{ui:Kyçe}} i fsheh shënimet private; {{ui:Qëndro i zhbllokuar në këtë pajisje}} është i fikur si parazgjedhje.
- **Ruaj një kopje të pastër.** {{ui:Ruaj një kopje të pastër}} heq çdo shënim, shënim privat dhe gjithçka në tabelën e lirë. Përdore për skedarin që shkon te klienti.

### Lidh një set të tërë

- **Lidhje në grup.** Zgjidh {{ui:Faqet}} › {{ui:Lidhjet në grup…}}, ose {{ui:Lidh thirrjet e fletëve…}} nën {{ui:Kërko tekst}} te paneli {{ui:Fletët}}. Hapi 1 liston numrin dhe emrin e çdo fletë, siç lexohen nga blloku i titullit; ndreq ato që janë gabim. Hapi 2 liston thirrjet e gjetura, si `3/A-501` ose `DETAIL 2 ON A-501`. {{ui:Do të lidhet}} tregon fletën dhe pamjen për secilën, {{ui:Nuk është lidhur}} tregon numrat që asnjë fletë e hapur nuk i ka, dhe {{ui:Krijo lidhjet}} i bën të gjitha në një hap anulimi. Ekzekutoje përsëri pas një shtese ose riemërtimi; lidhjet që keni bërë me dorë nuk ndryshohen kurrë. Një lidhje me pamje ruhet si lidhje PDF, kështu që lexues të tjerë hapin edhe detajin. Shih [Lidhjet e fletëve](topic:sheet-links).

### Vizatimi

- **Hark, dhjetë metoda.** Mjeti {{ui:Hark}} ({{key:O}}) ka tani një kuti {{ui:Metoda e harkut}} mbi faqe me dhjetë mënyra për të vizatuar një hark, dhe kënda, gjatësia, rrezja dhe drejtimi mund të klikohen ose shkruhen. Shih [Vizato një hark në dhjetë mënyra](topic:draw-an-arc).

### Puna së bashku

- **Ndiq një rishikues.** Në një sesion Live zgjidh {{ui:Ndiq}} pranë emrit të një personi dhe pamja jote lëviz me të tijën; nëse lëviz ose zmadhon vetë, ndjekja ndalet. Pritësi mund të zgjedhë {{ui:Kërko që të gjithë të më ndjekin}}. Lista e njerëzve tregon ngjyrën, emrin e secilit, fletën ku ndodhet dhe kohën e ndryshimit të tij të fundit. Shih [Ndiq një tjetër rishikues në një sesion Live](topic:follow-in-live).

## Në çdo aplikacion

- Tooltip-et janë ato të Bootstrap, këshilla e fillimit mund të mbyllet, shiritat e skedave lëvizin kur tepojnë, dhe titujt e skedave të shfletuesit lexojnë `<document> — MarkupCraft | CadCraft`.
- Një panel me disa seksione hap një dhe mbyll të tjerët (një kyçje pranë shigjetës mban një të hapur); një ndërrues te {{ui:Cilësimet}} e çaktivizon këtë.
- Çdo aplikacion nis nga një koleksion parazgjedhje objektesh nga {{ui:Bibliotekë}}.
- Njësitë e peshës dhe të temperaturës janë në cilësimet e {{ui:Njësitë}}.

## Të rregulluara

- **Shënimet e fshira nuk mbeten të lexueshme brenda PDF-it të ruajtur.** Më parë ruajtja hiqte një anotim të fshirë ose të rishkruar nga faqja, por linte objektin, me tekstin e tij, në skedar. Tani ruajtja i fshin ato objekte. Skedarët e ruajtur nga versionet e mëparshme i mbajnë ende derisa t'i ruani përsëri.

## Kufizime të sinqerta

- Lidhjet në grup u provuan në setet tona testuese. Setet reale tërheqin flluska në shumë mënyra, kështu që në një set klienti disa pamje mund të mos gjenden. Fletët e skanuara kanë nevojë për {{ui:Lexo tekstin (OCR)…}} më parë.
- Shënimet, shënimet private dhe tabela e lirë u testuan në një shfletues pa ekran dhe në skedarët tanë, jo me një set të madh vektorial real dhe jo në një sesion Live real me dy persona. Ndryshimi i një fraze kalimi nuk është ndërtuar. Versionet më të vjetra se 0.9 nuk i shfaqin shënimet.
- Pamja e klasës është lista e njerëzve; nuk është provuar me një mësues dhe nxënës real.
- Gjuhët e tjera nga anglishtja janë draft të bërë nga makina derisa t'i lexojë një folës amtare.
- Instaluesit e Windows nuk janë të nënshkruar me kod (Më shumë informacion, pastaj Nisi gjithsesi); imazhi i diskut të macOS nuk është i noterizuar (klik me butonin e djathtë, pastaj Hap).

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në MarkupCraft 0.8 dhe 0.8.1, krahasuar me 0.7. Gjëja kryesore e re është që një shënim mund të jetë një detyrë që e bën dikush, ose asistenti yt, dhe që mbyllet vetvetiu kur vizatimi ndryshon vërtet.

### E re

**Shënime që veprojnë**

- **Bëj një shënim detyrë.** Zgjidh një ose më shumë shënime, hap skedën {{ui:Detyrat}} dhe zgjidh {{ui:Bëj detyrë të përzgjedhurat}}. Një detyrë ka titull, një person ose asistentin tënd të lidhur për ta kryer, një datë afati opsionale dhe një gjendje, dhe ruan vendin e saj në fletë dhe fijen e saj. Shih [Bëj një shënim detyrë](topic:markups-that-act).
- **Detyra që mbyllen vetvetiu.** Një detyrë mund të ndjekë vizatimin brenda shënimit të saj. Hap një revizion më të ri të fletës dhe zgjidh {{ui:Kontrollo tani}}: nëse linjat në atë zonë kanë ndryshuar më shumë se një qime, detyra shënohet Done, shënimi i saj bëhet Completed, dhe një shënim në fije thotë çfarë ndryshoi. Një vulë e re date, ose linja që kanë lëvizur më pak se 1.5 pikë, nuk numërohen. Një detyrë mund të ndjekë në vend të kësaj një element modeli: asistenti yt e raporton elementin me `tasks_check`, dhe një raport i mëvonshëm që ndryshon, ose një element i fshirë, mbyll detyrën. Një hap anulimi e rihap.
- **Gjej punën.** Filtro listën {{ui:Detyrat}} sipas gjendjes dhe sipas kujt është, duke përfshirë {{ui:Me vonesë}}; zgjidh {{ui:Caktuar te}}, pastaj {{ui:Asistent}} për të parë çfarë pret asistenti yt. Një detyrë që ka kaluar ditën e afatit shfaqet si paralajmërim te paneli i {{ui:Problemet}}. {{ui:CSV}} eksporton listën. Detyrat ruhen në PDF bashkë me shënimin dhe udhëtojnë përmes Live si vetitë e tjera të shënimit.

**Çfarë ndryshoi, si listë e thjeshtë**

- **Listo ndryshimet.** Hap skedën {{ui:Krahaso}}, pastaj {{ui:Krahaso një set të tërë}}, zgjidh skedarin më të hershëm dhe më të vonshëm dhe zgjidh {{ui:Listo ndryshimet}}. Lista fillon me një numërim, pastaj mbulon çdo fletë të ndryshuar, më e madhja e para: ku është në fletë, sa e madhe është (në njësi reale si dhe në inç letre në një fletë të kalibruar), nëse linja u shtuan ose u hoqën, sa shënime ka aty, dhe cilat fjalë u shfaqën ose u zhdukën. {{ui:Kopjo listën}} e vendos në clipboard, dhe {{ui:CSV}} shkruan një rresht për çdo ndryshim. Shih [Listo çfarë ndryshoi mes revizioneve](topic:what-changed-in-words).

**Shënime zanore dhe vendime**

- **Shënime zanore.** Te skeda {{ui:Shënimet}} zgjidh {{ui:Regjistro një shënim zanor}}, pastaj {{ui:Ndalo regjistrimin}}; regjistrimet ndalen vetë pas dy minutash. Shënimi fiksohet në qendër të fletës, e tërheq aty ku i takon, shkruan një përshkrim te {{ui:Vetitë}}, dhe {{ui:Luaj}} te lista e luan. Regjistrimi ruhet brenda PDF-it.
- **Vendime.** {{ui:Fikso një vendim}} shkruan një ose dy fjali në fletë. Nëse zëvendëson një vendim më të hershëm, zgjidhe atë te {{ui:Zëvendëson}}: vendimi i vjetër mbetet, i shënuar si Replaced, dhe tregon te i riu. Një hap anulimi e kthen. Shih [Fikso shënime zanore dhe vendime në një fletë](topic:voice-notes-and-decisions).

**Redline në revizion**

- **Dërgo dhe përgjigju.** Te skeda {{ui:Detyrat}} hap {{ui:Redline në revizion}}, shkruaj revizionin me të cilin krahasohen shënimet dhe zgjidh {{ui:Eksporto skedarin redline}}. Merr një skedar `.redline.json` me një element për çdo shënim të hapur: fletën, pozicionin (si thyesa të fletës, që një ri-printim në madhësi tjetër të përputhet), fjalët, autorin, fijen dhe detyrën e tij. Ai që vizaton ndryshimet përgjigjet Accepted, Rejected ose Done në një skedar `.redline-answers.json`; {{ui:Ngarko skedarin e përgjigjeve…}} i jep çdo shënimi atë gjendje dhe shënimin e hartuesit, si një hap anulimi. Shih [Dërgo shënimet te hartuesi si redline](topic:redline-to-revision).

**Asistentët AI**

- **Më shumë mjete.** Një asistent që ke lidhur përmes CadCraft Studio mund të listojë detyrat (`tasks_list`), të krijojë ose ndryshojë një detyrë (`task_set`), ta heqë detyrën (`task_clear`), ta kontrollojë një detyrë me një revizion më të ri ose me një element (`tasks_check`), dhe të lexojë listën e thjeshtë të ndryshimeve mes dy setesh planesh të hapura (`revisions_changes`). Merr vetëm mjetet që ke zgjedhur nën ndërruesin Asistentët, dhe çdo ndryshim është një hap anulimi. Shih [Përdor MarkupCraft me një asistent AI](topic:use-with-ai-assistants).

### Në çdo aplikacion

- **Gjuhët.** CadCraft Studio ka tani 54 gjuhë. Dhjetë janë të reja: lituanishtja, letonishtja, boshnjakishtja, marathi, telugu, shqipja, afrikanishtja, filipinishtja, suahilishtja dhe uzbekishtja. Të gjitha ato jo anglisht janë draft të bërë nga makina derisa t'i lexojë një folës amtare.
- **Pajisjet hyrëse.** {{ui:Cilësimet}} › {{ui:Globale}} › {{ui:Pajisjet hyrëse}} përcakton çfarë bën një trackpad, butonat anësorë të miut, një stilolaps, prekjet me gisht, një miu 3D, një kontrollues lojërash ose një kontrollues MIDI, për çdo aplikacion ose vetëm për këtë. Derisa të ndryshosh diçka, çdo pajisje funksionon si më parë. Shih [Përdor një trackpad, miun 3D ose kontrollues](common:input-devices).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ka {{ui:Mbështjell}} (parazgjedhja), {{ui:2 rreshta}} dhe {{ui:1 rresht}}, kështu që vizatimi ka më shumë hapësirë. Shih [Rregullo panelet](common:arrange-panels).
- **Shtylla e vetive.** Fushat e Stilit të një shënimi përdorin shtyllën e përbashkët, me kategori që palosen dhe kolona emri dhe vlere.
- **Paneli i problemeve.** Paralajmërimet nga aplikacioni, si një detyrë me vonesë, mblidhen në një panel të vetëm Problemet.
- **Live dhe shtesat.** Sesionet Live përshkruhen te [Puna së bashku live](common:work-together-live); lista e shtesave që ndjek llogarinë tënde është te [Shtesat dhe lista e llogarisë sate](common:addons-basics).
- **Lidh AI-në tënde.** CadCraft Studio është qendra për asistentin tënd: lidhe një herë për të tetë aplikacionet. Aplikacionet nuk kanë AI të vetat.

### Të rregulluara në 0.8.1

- **Studio mund të ndërrojë gjuhën ndërsa punon.** Më parë, aplikacioni desktop dhe versionet e paketuara mbeteshin në anglisht. Kjo nuk është provuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.
- Instalimet e Studio 0.8 marrin 0.8.1 përmes {{ui:Cilësimet}} › {{ui:Përditësimet}}.

### Nuk është në këtë version ende

- **Pa nënshkrim kodi.** Instaluesit e Windows dhe imazhi .dmg i macOS nuk kanë ende nënshkrim. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Nisi gjithsesi}}. Në Mac, klik me butonin e djathtë mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. Versionet për dyqane janë në pritje.
- **Lidhja e AI-së është e papërfunduar në disa pika.** Lidhja me një klik brenda Studio, lidhësi i hostuar për asistentët e shfletuesit dhe çelësi yt API brenda Studio nuk premtohen për këtë version. Cikli i detyrave është provuar, por jo ende me një asistent real.
- **Kontrollet e detyrave kërkojnë të njëjtën madhësi faqeje.** Një fletë e ri-printuar në madhësi tjetër nuk do të përputhet, kështu që detyrat e saj nuk mbyllen. Fletët çiftohen sipas numrit të fletës, ose sipas pozicionit të faqes.
- **Shënimet zanore janë vetëm regjistrime.** Nuk ka transkriptim, dhe një asistent sheh gjatësinë, autorin dhe përshkrimin e shënimit, jo zërin. Regjistrimi u provua me një mikrofon të rremë në një shfletues pa ekran; një mikrofon real në telefon, tablet ose laptop ende duhet kontrolluar.
- **Fletët e llogaritjes dhe arsyet në një PDF** ruhen në një hyrje private të skedarit. Një MarkupCraft më i vjetër e injoron atë hyrje dhe e heq kur e ruan skedarin përsëri, kështu që hape dhe ruaje një skedar të tillë me 0.8 ose më të ri.
- **Ana e hartuesit të redline-ve.** Leximi i skedarit redline nga CadCraft dhe përgjigjja e tij nuk janë ndërtuar ende.
- **Gjuhët e tjera.** Shiriti i aplikacionit për tamilishten tejkalon me 528 px.

Gjithçka tjetër është te [Ç'nuk është ndërtuar ende](topic:not-built-yet). Për versionin para këtij, shih [Çfarë ka të re në 0.7](topic:whats-new-0-7).

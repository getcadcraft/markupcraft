---
title: Hap një grup planimetrish dhe lëviz mes fletëve
summary: Hap një PDF ose shumë, ose fillo me faqe boshe, gjej fletët sipas numrit ose emrit, zmadho dhe lëviz, dhe riemëro një fletë kur skedari e emërton gabim.
keywords: hap, i ri, faqe boshe, fletë boshe, skicë, rrjetë, pa titull, grup planimetrish, fletë, faqe, miniatura, etiketa e faqes, numri i fletës, blloku i titullit, riemëro, navigo, zmadho, lëviz, përshtat, kërko fletët
from: 1e7f4d50
---

## Hap grupin

1. Zgjidh {{ui:Hap}} në shiritin e veglave, ose shtyp {{key:Mod+O}}.
2. Te zgjedhësi i skedarëve, përzgjidh çdo PDF të grupit ({{pick:mac=mbaj ⌘ dhe kliko çdo skedar|windows linux=mbaj Ctrl dhe kliko çdo skedar}}, ose përzgjidh një varg me Shift), pastaj konfirmo.
   Ose tërhiq skedarët nga {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} mbi zonën e fletës. "Lësho PDF-të për t'i hapur" shfaqet ndërsa tërheq.
3. Prit ndërsa shiriti i gjendjes thotë "Po hapet <file>…". Për skedarë të mëdhenj numëron: "(10 nga 60 fletë)".

Rezultati: lista {{ui:Fletët}} shfaq çdo faqe të çdo skedari, sipas radhës sa i hape, dhe shiriti i gjendjes thotë diçka si "U hapën 3 skedarë (42 fletë në grup)." Nëse skedarët kishin tashmë komente, shton sa prej tyre u lexuan.

Për të shtuar më shumë skedarë në grup më vonë, hapi në të njëjtën mënyrë. Ato shtohen në fund të listës.

## Fillo me faqe boshe

Për të skicuar ose shënuar pa një vizatim, bëj faqe boshe në vend që të hapësh një PDF:

1. Zgjidh {{ui:E re}} në shiritin e veglave, ose {{ui:Fillo me një faqe boshe}} në ekranin e fillimit, ose shtyp {{key:Mod+N}} aty ku shfletuesi yt e lejon (aplikacioni desktop dhe Studio e bëjnë gjithmonë).
2. Zgjidh {{ui:Madhësia e letrës}}: Letter, Tabloid ose ANSI B, ARCH D, ARCH E, A4, A3 ose A1, dhe {{ui:Vertikal}} ose {{ui:Horizontal}}.
3. Zgjidh një {{ui:Rrjeta}}: {{ui:Asnjë}}, {{ui:Pika}} ose {{ui:Katrorë}}. Rrjeta është çdo 1/4 in me një vijë më të trashë çdo inç në letër inç, dhe çdo 5 mm me një vijë më të trashë çdo 10 mm në letër metrike. Printohet në faqe.
4. Shkruaj sa {{ui:Faqet}} do të kesh, nga 1 deri në 20, pastaj zgjidh {{ui:Krijo}}.

Rezultati: një PDF e re me emrin "Untitled-1.pdf" (pastaj "Untitled-2.pdf", e kështu me radhë) hapet si çdo skedar tjetër, e krijuar këtu në këtë kompjuter. Çdo vegël punon mbi të, dhe {{ui:Ruaj}} shkarkon "Untitled-1 (marked up).pdf". MarkupCraft mban mend zgjedhjet e tua për herën tjetër.

Faqet nuk kanë shkallë: shiriti i gjendjes thotë "Not calibrated" (pa u kalibruar). Rrjeta nuk është shkallë. Për të matur, kalibro fletën ose zgjidh një shkallë më parë; shih [Kalibro dhe mat](topic:calibrate-and-measure).

Për të shtuar një faqe në një grup bosh, hap një nga fletët e tij dhe zgjidh {{ui:Shto një faqe boshe}} nën listën {{ui:Fletët}}. Faqja e re ka të njëjtën letër dhe rrjetë dhe vendoset në fund. Si çdo ndryshim faqeje, nuk mund të zhbëhet; shih [Printo dhe ndrysho faqet](topic:pages-and-printing).

## Si marrin emrat fletët

MarkupCraft emëron çdo fletë "<numri i fletës> — <titulli>", për shembull "A-101 — Planimetri e katit", nga e para që gjen prej këtyre:

1. Një emër që ke shkruar me {{ui:Riemëro fletën}} (më poshtë).
2. Etiketat e vetë PDF-së, kur ai që e ka bërë PDF-në i ka vendosur (për shembull "A-101").
3. Blloku i titullit: MarkupCraft lexon tekstin e faqes dhe kërkon diçka që duket si numër fletë (A-101, A1.01, M-201A, KA1-1), duke favorizuar qoshën e poshtme djathtas, shiritin djathtas dhe brezin e poshtëm, dhe merr tekstin më të madh afër tij si titull.
4. Përndryshe, emri i skedarit dhe faqja: "Planimetri — faqja 3".

Për të parë cilin u përdor, shtyp {{key:Esc}} derisa të mos jetë përzgjedhur asgjë dhe {{ui:Përzgjidh}} të jetë aktiv, pastaj shiko {{ui:Vetitë}}: "Lexuar nga" thotë "Etiketa e faqes", "Blloku i titullit", "Emri i skedarit" ose "Shkruar me dorë".

:::note
Fletët e skanuara, dhe PDF-të ku shkronjat janë eksportuar si vija, nuk kanë tekst për t'u lexuar. Emërohen sipas skedarit dhe faqes derisa t'i riemërosh. MarkupCraft nuk mund të lexojë ende tekst nga imazhet.
:::

## Lëviz mes fletëve

- Kliko një fletë te {{ui:Fletët}}.
- Shtyp {{key:PageDown}} për fletën pasardhëse dhe {{key:PageUp}} për paraardhësen, ose përdor shigjetat në shiritin nën fletë.
- Shkruaj te {{ui:Kërko fletët}}: një pjesë të numrit ("A-2"), një fjalë të titullit ("çati"), ose një emër skedari. Lista ngushtohet ndërsa shkruan ("4 nga 42"). Shtyp {{key:Enter}} për të hapur përputhjen e parë. Pastro kutinë për t'i parë sërish të gjitha fletët.

Çdo fletë mban zmadhimin dhe pozicionin e vet deri sa mbyll grupin.

## Zmadhimi dhe lëvizja

:::mouse
- **Zmadho:** rrotullo rrotën mbi fletë. Zmadhon rreth treguesit. Ose shtyp {{key:Plus}} dhe {{key:Minus}} (edhe me {{key:Mod}}), ose përdor butonat e zmadhimit. Shkruaj një përqindje të saktë në kutinë e zmadhimit.
- **Përshtat:** {{ui:Përshtat faqen}} ({{key:Mod+0}}) shfaq gjithë fletën; {{ui:Përshtat gjerësinë}} ({{key:Mod+9}}) mbush gjerësinë.
- **Lëviz:** tërhiq me butonin e mesit (rrota), ose tërhiq me butonin e djathtë, ose mbaj {{key:Space}} dhe tërhiq, ose zgjidh {{ui:Lëviz}} ({{key:H}}) dhe tërhiq. Kur nuk është përzgjedhur asgjë, edhe tastet me shigjeta lëvizin fletën.
:::

:::mac mouse
Në trackpad-in e Mac, lëvizja me dy gishta zmadhon (nuk lëviz fletën). Për të lëvizur, mbaj {{key:Space}} dhe tërhiq me një gisht, ose kalo te {{ui:Lëviz}} me {{key:H}}. Shtrëngimi zmadhon në Chrome, Edge dhe Firefox.
:::

:::touch
- **Zmadho dhe lëviz:** vendos dy gishta mbi fletë. Hap ose shtrëngo ato për të zmadhuar rreth pikës mes tyre, dhe lëvizi bashkë për të lëvizur. Të dyja ndodhin njëkohësisht.
- **Lëviz me një gisht:** zgjidh {{ui:Lëviz}} më parë. Me çdo vegël tjetër, një gisht vizaton ose përzgjedh.
- {{ui:Përshtat faqen}} dhe {{ui:Përshtat gjerësinë}} janë në shiritin nën fletë.
:::

Zmadhimi shkon shumë përtej gjithë fletës dhe deri në 6400%. Fleta vizatohet sërish e mprehtë pak pas pushimit të lëvizjes.

## Shenjuesit

{{ui:Shenjuesit}}, në krye të panelit {{ui:Fletët}}, shfaq shenjuesit (strukturën) të PDF-së ku i përket fleta e hapur. Zgjidh një për të shkuar te faqja e tij. Lapsi riemëron një shenjues dhe kryqi e heq. {{ui:Ndërto nga fletët}} bën një shenjues për çdo fletë, të emëruar si e tregon lista e fletëve (numri i fletës dhe titulli), dhe {{ui:Shto për këtë fletë}} shton një për fletën ku je. Ndryshimet janë pjesë e punës së paruajtur të skedarit: {{ui:Ruaj}} i shkruan në kopje, ku çdo shikues PDF i shfaq.

## Rrotullo pamjen

Dy butonat e rrotullimit në të djathtë të shiritit nën fletë e rrotullojnë pamjen një çerekshe në njërën anë, për një fletë të vizatuar anash. Vetëm pamja rrotullohet: PDF-ja dhe markimet mbeten siç janë, dhe fleta pasardhëse hapet ashtu si është PDF-ja e saj (çdo fletë mban rrotullimin e vet ndërsa grupi është i hapur). Teksti që shton në një pamje të rrotulluar lexohet drejt siç e sheh. Për të rrotulluar vetë faqen në PDF-në e ruajtur, përdor {{ui:Faqet}}, pastaj {{ui:Rrotullo faqen në drejtim të orës}}; shih [Printo dhe ndrysho faqet](topic:pages-and-printing).

## Riemëro një fletë

Kur emri i një fletë është gabim ose mungon:

1. Shfaq fletën.
2. Shtyp {{key:Esc}} derisa të mos jetë përzgjedhur asgjë dhe vegla {{ui:Përzgjidh}} të jetë aktive. {{ui:Vetitë}} tani shfaq fletën.
3. Zgjidh {{ui:Riemëro fletën}}.
4. Shkruaj {{ui:Numri i fletës}} dhe {{ui:Titulli}}, pastaj zgjidh {{ui:Ruaj}}.

Rezultati: lista e fletëve, shiriti nën fletë dhe lista e markimeve përdorin emrin e ri, dhe "Lexuar nga" thotë "Shkruar me dorë". Riemërimi mund të zhbëhet me {{key:Mod+Z}}.

Për t'u kthyer te ajo që thotë skedari, hap sërish {{ui:Riemëro fletën}}, pastro të dy kutitë dhe zgjidh {{ui:Ruaj}}.

Kur ruan, një numër fletë i shkruar bëhet etiketa e faqes në PDF, që shikuesit e tjerë PDF ta shfaqin "A-101" në kutinë e faqes. Nëse i jep një numër çdo faqeje të një skedari, çdo faqe e atij skedari merr një etiketë në kopje (numrin e shkruar, ose etiketën e vjetër, ose numrin e faqes). Një titull i shkruar mbahet për MarkupCraft, por shikuesit e tjerë nuk e shfaqin.

## Merr PDF-në te TakeoffCraft, ose sill këtu

Kur TakeoffCraft është i hapur në të njëjtin vend (laboratori, Try ose aplikacionet online), shiriti nën fletë ka {{ui:Hap në TakeoffCraft}}. Ai hap PDF-në e fletës në TakeoffCraft në një skedë të re, ashtu si u hap këtu, që të mund të matësh sasi mbi të. Markimet e tua mbeten këtu; ruaji si zakonisht.

Butoni {{ui:MarkupCraft}} i TakeoffCraft bën të njëjtën gjë në drejtim tjetër: PDF-ja hapet këtu sikur të kishe zgjedhur {{ui:Hap}}. Nëse shfletuesi bllokon skedën e re, lejo dritaret pop-up për këtë sajt dhe zgjidh butonin sërish.

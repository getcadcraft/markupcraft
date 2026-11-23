---
title: Çfarë është e re në 0.7 (më herët)
summary: RFI-të, dorëzimet dhe ditarët ditorë në një skedë të re Fusha, me data afati, vonesat në të kuqe, CSV dhe BCF, punë pa lidhje dhe Bashko; asistentë që vendosin statuse, përgjigjen dhe eksportojnë listën; lista njësish që ndjekin Cilësimet; panele që fshihen dhe dialoge që lëvizin.
keywords: çfarë është e re 0.7, version më i hershëm, shënime të publikimit, ndryshime, 0.7, version, veçori të reja, fusha, regjistrime fushe, rfi, kërkesë për informacion, dorëzim, ditar ditor, ditar faqeje, vonesë, data e afatit, caktuar tek unë, shenjë, bashko, pa lidhje, tablet, bcf, csv, asistent, mcp, statusi i shënimit, përgjigje, eksport, njësi, lista njësish, yll, kalibro, kompakt, panele, dialoge, portugalisht
from: ca5ba1f0
---

Kjo është ajo që ndryshoi në MarkupCraft 0.7, krahasuar me 0.6. Gjëja e madhe e re janë regjistrimet e fushës: RFI-të, dorëzimet dhe ditarët ditorë të mbajtur brenda PDF-së, pranë shënimeve të tua.

## Të reja

### RFI-të, dorëzimet dhe ditarët ditorë

- **Skeda Fusha.** Hap skedën {{ui:Fusha}} dhe zgjidh {{ui:RFI}}, {{ui:Dorëzim}} ose {{ui:Ditar ditor}}. Prek ose kliko fletën ku i takon një RFI ose një dorëzim dhe një shenjë shënon vendin; një ditar ditor vendoset në fletën e hapur pa shenjë ({{ui:Vendos shenjën}} shton një më vonë, {{ui:Zhvendos shenjën}} zhvendos çdo shenjë). Çdo regjistrim ka numrin e vet (RFI-0001, SUB-0001, LOG-0001), një titull, tekst, një status, një person të caktuar, një datë afati, një fije përgjigjesh dhe një listë emrash bashkëngjitjesh. Shih [Gjurmo RFI-të, dorëzimet dhe ditarët ditorë](topic:field-records).
- **Shiko çfarë po vonon.** Filtro listën sipas llojit, statusit, datës së afatit (me vonesë, afati brenda 7 ditësh, me ose pa datë afati), kësaj fletë ose të gjitha fletëve, një kërkimi teksti, ose {{ui:Caktuar tek unë}}. Një regjistrim që e ka kaluar afatin dhe është ende në pritje shënohet **Me vonesë**, me të kuqe, në listë dhe te shenja e vet. Shih [Gjej çfarë ka rëndësi](topic:field-records#find-what-matters).
- **CSV dhe BCF.** {{ui:CSV}} shkruan regjistrimet e listuara si fletëllogaritëse; {{ui:BCF}} i shkruan si tema BCF, secila me një foto të vendit të saj në fletë. Të dyja ndjekin filtrat. Shih [Eksporto](topic:field-records#export).
- **Pa lidhje, dhe dy kopje bëhen një.** Regjistrimet ruhen brenda PDF-së dhe nuk kanë nevojë për rrjet, kështu që një tablet në terren mund t'i shtojë, përgjigjë dhe ruajë. Kur kthehesh në zyrë, {{ui:Bashko}} bashkon regjistrimet e një kopjeje tjetër të të njëjtës PDF sipas id-ve të tyre, si një hap i vetëm zhbërjeje. Shih [Ruaj, punë pa lidhje dhe bashkimi i kopjeve](topic:field-records#save-offline-and-merging-copies).

### Asistentët AI

- **Më shumë që mund të bëjë një asistent.** Asistenti yt, i lidhur përmes CadCraft Studio, mund tani të vendosë statusin e një shënimi (`markup_status`, i regjistruar në fijen e tij), të përgjigjet në një fije (`markup_reply`) dhe të eksportojë listën {{ui:Shënimet}} si CSV ose BCF (`markups_export`, çfarë shfaq lista me filtrat e saj). Çdo ndryshim është një hap i vetëm zhbërjeje, i nënshkruar me emrin e asistentit. Shih [Çfarë mund të kërkojë një asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka nga një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (njësia US survey foot është njësi e veçantë). Çaktivizo njësitë që nuk i përdor kurrë dhe ato largohen nga listat; vendos yll te një dhe punët e reja fillojnë në të. Një skedar mban gjithmonë njësinë e vet. Në MarkupCraft, njësitë e matjes dhe të pozicionit në {{ui:Cilësimet}} › {{ui:MarkupCraft}} dhe njësia në dritaren e kalibrimit ndjekin çelësat; ylli cakton njësinë e matjes derisa të ruash cilësimet e vetë MarkupCraft; dhe distanca reale që shkruan kur kalibron mund të mbajë shenjën e çdo njësie, si `3 yd` ose `1.5 km`. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që fshihen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} përshtat më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqe për ta ankoruar ose lënë të lundrojë, lëshoje mbi shiritin e një paneli tjetër për të ndarë një kornizë si skeda, ngjite për ta fshehur drejt skajit, ose fshihe dhe sille përsëri nga skaji. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiq një dialog nga shiriti i titullit për ta larguar nga vizatimi; kthehet aty ku e le. Klikoje dy herë shiritin e titullit për ta vendosur përsëri në qendër. Shih [Lëviz një dialog](common:arrange-panels#move-a-dialog).
- **Receta për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tënd (pastro një vizatim, planifiko një set, kontrollo vizatimet, bëj pyetje modelit, mblidh një llogaritje sasish, provo një variant pjese…), secila me mjetet që thërret dhe lejet që i duhen, dhe secila e rifilluar nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Receta për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si përkthime të papërmirësuara ende nga një folës amtar. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** thotë pse dështoi kontrolli i përditësimit (s'ka ende skedar për sistemin tënd, s'ka rrjet, nënshkrim i gabuar) në vend që të thotë vetëm "Done", dhe nuk sjell më përsëri një kartelë Çfarë është e re që e mbylle, derisa të ketë një publikim më të ri.

## Jo ende në këtë version

- **0.7 nuk është me nënshkrim kodi.** Nënshkrimi dhe paketa e Microsoft Store u shtynë për 0.8, sepse validimi i certifikatës nuk ka mbërritur ende. Kontrollo SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, herën e parë, kliko me butonin e djathtë mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Listat e këndit dhe pjerrësisë te {{ui:Njësitë}} ruhen, por ende nuk i lexon asnjë kuti.
- Regjistrimet e fushës nuk ndahen në një seancë live të CadCraft Studio (sesionet live mbartin vetëm shënime); sille kopjet së bashku me {{ui:Bashko}}.
- Bashko merr një regjistrim si një të tërë nga kopja e ndryshuar e fundit: nëse dy persona ndryshuan fusha të ndryshme të një regjistrimi, fushat e kopjes më të vonshme mbizotërojnë. Fijet dhe emrat e bashkëngjitjeve bashkohen.
- Bashkëngjitjet janë vetëm emra; skedarët mbeten aty ku janë. Nuk ka ekipe, njoftime ose projekte në cloud për regjistrimet, dhe asistentët nuk kanë ende mjete për regjistrimet.
- Regjistrimet e fushës u testuan në një shfletues, në madhësi telefoni dhe tableti, me rrjetin të prerë, por jo ende me dorë në një tablet të vërtetë.
- Ende nga 0.6: rrotullimi i objekteve të faqes në çdo kënd, vizatimi i formave të reja direkt në faqe, ndryshimi i fontit ose madhësisë së një vije, dhe teksti që rrjedh në disa rreshta. Një kopje e ruajtur me ndryshime faqesh nuk është hapur ende në Acrobat.
- Ende nga 0.5: zhbërja e një ndryshimi faqeje (si shtimi i një faqeje boshe), leximi i tekstit nga fletët e skanuara, dhe sesionet live përtej rrjetit tënd.

Çdo gjë tjetër është në [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

---
title: Çfarë është e re në 0.7
summary: RFI-të, dorëzimet dhe ditarët ditorë në një kartelë të re Fusha, me datat e afatit, vonesat në të kuqe, CSV dhe BCF, punë jashtë linje dhe Bashko; asistentë që vendosin gjendjet, përgjigjen dhe eksportojnë listën; listat e njësive që ndjekin Cilësimet; panele që mblidhen dhe dialoge që lëvizen.
keywords: çfarë është e re, shënime versioni, ndryshime, 0.7, version, veçori të reja, fusha, regjistrime fushe, rfi, kërkesë për informacion, dorëzim, ditar ditor, me vonesë, data e afatit, caktuar tek unë, shenjë, bashko, jashtë linje, tablet, bcf, csv, asistent, mcp, gjendja e shënimit, përgjigje, eksporto, njësi, listat e njësive, yll, kalibro, kompakte, panele, dialoge, portugalisht
from: 142e1a1e
---

Kjo është ajo që ndryshoi në MarkupCraft 0.7, krahasuar me 0.6. Gjëja e madhe e re është regjistrimet e fushës: RFI-të, dorëzimet dhe ditarët ditorë të mbajtura brenda PDF-së, pranë shënimeve të tua.

## E re

### RFI-të, dorëzimet dhe ditarët ditorë

- **Kartela Fusha.** Hap kartelën {{ui:Field}} dhe zgjidh {{ui:RFI}}, {{ui:Dorëzim}} ose {{ui:Ditar ditor}}. Prek ose kliko fletën ku i përket një RFI ose një dorëzim dhe një shenjë shënon vendin; një ditar ditor vendoset mbi fletën e hapur pa shenjë ({{ui:Vendos shenjën}} shton një më vonë, {{ui:Zhvendos shenjën}} zhvendos çdo shenjë). Çdo regjistrim ka numrin e vet (RFI-0001, SUB-0001, LOG-0001), një titull, tekst, një gjendje, personin e caktuar, një datë afati, një varg përgjigjesh dhe një listë emrash bashkëngjitjesh. Shih [Ndiq RFI-të, dorëzimet dhe ditarët ditorë](topic:field-records).
- **Shiko çfarë vonohet.** Filtro listën sipas llojit, gjendjes, datës së afatit (me vonesë, afati në 7 ditë, ka ose nuk ka datë afati), kësaj fletë ose të gjitha fletëve, një kërkimi tekstit, ose {{ui:Caktuar tek unë}}. Një regjistrim që ka kaluar afatin dhe është ende në pritje shënohet **Me vonesë**, me të kuqe, në listë dhe te shenja e tij. Shih [Gjej çfarë ka rëndësi](topic:field-records#find-what-matters).
- **CSV dhe BCF.** {{ui:CSV}} shkruan regjistrimet e listuara si fletëllogaritëse; {{ui:BCF}} i shkruan si tema BCF, secila me një pamje të vendit të saj në fletë. Të dyja ndjekin filtrat. Shih [Eksporto](topic:field-records#export).
- **Jashtë linje, dhe dy kopje bëhen një.** Regjistrimet ruhen brenda PDF-së dhe nuk kanë nevojë për rrjet, kështu që një tablet në terren mund t'i shtojë, t'u përgjigjet dhe t'i ruajë. Kur kthehesh në zyrë, {{ui:Bashko}} bashkon regjistrimet e një kopjeje tjetër të së njëjtës PDF sipas ID-ve të tyre, si një hap zhbërjeje. Shih [Ruajtja, jashtë linje dhe bashkimi i kopjeve](topic:field-records#save-offline-and-merging-copies).

### Asistentët AI

- **Më shumë gjëra që mund të bëjë një asistent.** Asistenti yt, i lidhur përmes CadCraft Studio, tani mund të vendosë gjendjen e një shënimi (`markup_status`, e regjistruar në vargun e tij), të përgjigjet në një varg (`markup_reply`) dhe të eksportojë listën {{ui:Shënimet}} si CSV ose BCF (`markups_export`, ajo që tregon lista me filtrat e saj). Çdo ndryshim është një hap zhbërjeje, i nënshkruar me emrin e asistentit. Shih [Çfarë mund të kërkojë një asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësi}} ka nga një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e matjes amerikane është një njësi e veçantë). Fik njësitë që nuk i përdor kurrë dhe ato largohen nga listat e njësive; yll një njësi dhe puna e re fillon me të. Një skedar gjithmonë mban njësinë e vet. Në MarkupCraft, njësitë e matjes dhe të pozicionit në {{ui:Cilësimet}} › {{ui:MarkupCraft}} dhe njësia në dialogun e kalibrimit ndjekin çelësat; ylli cakton njësinë e matjes derisa të ruash cilësimet e vetë MarkupCraft; dhe distanca reale që shkruan kur kalibron mund të mbajë shenjën e çdo njësie, si `3 yd` ose `1.5 km`. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Paraqitje më e dendur dhe panele që mblidhen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} ngjesh më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqe për ta ankoruar ose për ta lëvizur të lirë, lësho mbi shiritin e një paneli tjetër për të ndarë një kornizë si kartela, fikse për ta rrëshqitur në skaj, ose fshihe dhe kthe nga skaji. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizen.** Tërhiq një dialog nga shiriti i titullit larg vizatimit; kthehet aty ku e le. Kliko dy herë shiritin e titullit për ta vendosur përsëri në qendër. Shih [Zhvendos një dialog](common:arrange-panels#move-a-dialog).
- **Receta për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tënd (rregullo një vizatim, nxirr në letër një grup planimetrish, kontrollo vizatime, bëj pyetje modelit, llogarit totalin e një llogaritjeje sasish, provo një variant pjese…), secila me veglat që thërret dhe lejet që i duhen, dhe secila e riluajtur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Receta për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re në {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si draft që nuk është rishikuar ende nga një folës amtar. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** tregon pse dështoi kontrolli i përditësimit (ende nuk ka skedar për sistemin tënd, nuk ka rrjet, nënshkrim i gabuar) në vend që thjesht "U krye", dhe nuk e kthen më kartelën "Çfarë është e re" që ke mbyllur, derisa të ketë një version më të ri.

## Jo ende në këtë version

- **0.7 nuk është me nënshkrim kodi.** Nënshkrimi dhe paketa e Microsoft Store u zhvendosën në 0.8, sepse verifikimi i certifikatës nuk ka ardhur ende. Kontrollo SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, herën e parë, kliko me të djathtën mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Listat e këndit dhe të pjerrësisë te {{ui:Njësi}} ruhen, por asnjë kuti nuk i lexon ende.
- Regjistrimet e fushës nuk ndahen në një seancë live të CadCraft Studio (seancat live mbartin vetëm shënime); bashkoji kopjet me {{ui:Bashko}}.
- Me {{ui:Bashko}}, një regjistrim merret në tërësi nga kopja e ndryshuar së fundi: nëse dy persona ndryshuan fusha të ndryshme të një regjistrimi, fushat e kopjes së mëvonshme fitojnë. Vargjet dhe emrat e bashkëngjitjeve bashkohen.
- Bashkëngjitjet janë vetëm emra; skedarët mbeten aty ku janë. Nuk ka ekipe, njoftime apo projekte cloud për regjistrimet, dhe asistentët nuk kanë ende vegla për regjistrimet.
- Regjistrimet e fushës u testuan në një shfletues me madhësi telefoni dhe tablete, me rrjetin të shkëputur, por jo ende me dorë në një tablet të vërtetë.
- Ende nga 0.6: rrotullimi i objekteve të faqes në çdo kënd, vizatimi i formave të reja direkt në faqe, ndryshimi i shkronjës ose madhësisë së një vije, dhe teksti që rrjedh në disa rreshta. Një kopje e ruajtur me ndryshime faqesh nuk është hapur ende në Acrobat.
- Ende nga 0.5: zhbërja e një ndryshimi faqeje (si shtimi i një faqeje bosh), leximi i tekstit nga fletët e skanuara, dhe seancat live përtej rrjetit tënd.

Gjithçka tjetër është te [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

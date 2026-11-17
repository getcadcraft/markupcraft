---
title: Pastro vijat e stilolapsit, dhe sill komentet e rishikimit dhe progresin në terren
summary: Kthe vijat e lira të stilolapsit në vija, rrathë, harqe dhe drejtkëndësha; sill komentet e rishikimit të një pakete lejeje dhe progresin e rilevimit të terrenit si shënime.
keywords: stilolaps, i lirë, pastro, drejto, rreth, vijë, drejtkëndësh, hark, leje, komente rishikimi, progres, dron, skanim, rilevim, shënime, csv
from: 547d8e42
---

## Pastro vijat e stilolapsit

Vizato me {{ui:Stilolaps}}, pastaj hap menunë {{ui:Më shumë}} në grupin Redakto dhe zgjidh {{ui:Pastro vijat e stilolapsit}}. Çdo vijë stilolapsi e zgjedhur bëhet ajo që ishte menduar të jetë: një vijë e drejtë bëhet vijë (e bërë saktësisht horizontale ose vertikale kur ishte pothuajse e tillë), një vijë e rrumbullakët një elips, pjesë e rrethi një hark, një e mbyllur me katër qoshe një drejtkëndësh, çdo gjë tjetër një polivijë ose poligon. Skajet e lirë të vijave të vizatuara së bashku tërhiqen njëri-tjetrit. Pa asnjë vijë stilolapsi të zgjedhur, pastrohet çdo vijë stilolapsi në fletën e hapur. Është një hap i vetëm zhbërjeje: Ctrl+Z e kthen dorën e lirë. Forma llogaritet në kompjuterin tënd sipas rregullave fikse; asgjë nuk dërgohet askund.

## Sill komentet e rishikimit

Paketa e lejes nga BimCraft përmban skedarin `01-review-comments.csv`: komentet që një shqyrtues plani ka gjasa t'i bëjë, secili me rregullin, klauzolën, çfarë nevojitet, çfarë u gjet dhe çfarë të bëhet. Në skedën {{ui:Detyrat}}, hap {{ui:Komentet e shqyrtimit të lejes}} dhe zgjidh {{ui:Sill komentet (CSV)}}. Çdo koment bëhet një shënim i Hapur në një kolonë në të majtë të fletës së hapur; tërhiq secilin te vendi ku ka të bëjë. Ato llogariten nga kontrollet që ekzistojnë, jo nga një ekzaminues plani.

## Sill kutitë e nyjeve HAZOP

Shtesa P&ID e CadCraft vizaton nyjet e një studimi HAZOP dhe mund t'i ruajë si {{ui:Kutitë e nyjeve HAZOP}} (një skedar JSON). Hap fletën e printuar P&ID këtu, shko te skeda {{ui:Detyrat}}, hap {{ui:Kutitë e nyjeve HAZOP}} dhe zgjidh {{ui:Sill kutitë e nyjeve (JSON)}}. Çdo nyje bëhet një drejtkëndësh i Hapur mbi fletë, me numrin, emrin, pajisjen dhe linjat e saj në tekst, dhe ekipi shkruan gjetjet e veta si përgjigje mbi të. Fleta merret siç u printua, në madhësi të plotë, nga qoshja e poshtme majtas e vizatimit; nëse u printua në një shkallë tjetër, shkruaj atë numër te {{ui:Printuar në}} më parë (0.5 për 1:2). Një nyje që del jashtë faqes nuk vizatohet, dhe paneli thotë sa janë. Shënuesit janë një ndihmë studimi: tregojnë ku janë nyjet, nuk e gjykojnë studimin.

## Sill progresin në terren

CivilCraft mban një rresht për çdo fluturim droni ose skanim të terrenit. Në skedën {{ui:Detyrat}}, hap {{ui:Progresi në terren}} dhe zgjidh {{ui:Sill progresin (JSON)}}. Çdo rilevim bëhet një shënim mbi fletën e hapur, që thotë sa është bërë, çfarë mbetet për të prerë ose mbushur, çfarë është gërmuar tepër ose mbushur tepër, dhe çfarë del jashtë planit. Një rilevim me diçka jashtë planit mbetet i Hapur; një i pastër është i Pranuar.

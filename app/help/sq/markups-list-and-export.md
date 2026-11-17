---
title: Lista e shënimeve, filtrat dhe eksportet
summary: Shiko çdo shënim në grup, filtro sipas fletës, autorit, gjendjes dhe llojit, shko te një shënim, dhe eksporto listën si CSV ose BCF.
keywords: lista e shënimeve, lista, përmbledhje, xlsx, libër pune, raport pdf, importo bcf, filtro, rendit, raport, eksporto, csv, fletëllogaritëse, bcf, bcfzip, çështje, lista e komenteve, shko te
from: 6c70261e
---

## Hap listën

Zgjidh skedën {{ui:Shënimet}} në të djathtë. Çdo shënim i çdo skedari të hapur listohet, sipas radhës së fletës dhe pastaj sipas radhës së krijimit. Çdo rresht shfaq:

- një ikonë me ngjyrën e shënimit, numrin e defektit nëse ka një ("#4"), dhe temën e tij,
- tekstin, fjalët e vulës ose vlerën e matur, dhe komentin e tij,
- fletën, autorin dhe datën,
- gjendjen e tij (ose "Vetëm për lexim" për komentet që vijnë me skedarin), dhe numrin e përgjigjeve kur ka përgjigje.

Rreshti mbi listë i numëron: "38 shënime", ose "12 nga 38 shënime" kur filtrohet.

## Shko te një shënim

Kliko një rresht. MarkupCraft shfaq atë fletë, përzgjedh shënimin dhe zmadhon te ai kur është jashtë ekranit ose shumë i vogël për t'u parë. {{ui:Vetitë}} ka detajet dhe bisedën e tij kur kthehesh te ajo skedë.

## Filtro

Katër menutë mbi listë. Ato kombinohen.

| Menyja | Zgjedhjet |
|---|---|
| {{ui:Fletë}} | Të gjitha fletët, Kjo fletë (të ndjek kur ndryshon fletët), ose çdo fletë që ka shënime |
| {{ui:Autori}} | Kushdo, ose çdo autor në grup |
| {{ui:Gjendja}} | Çdo gjendje, Hapur, Pranuar, Refuzuar, Përfunduar |
| {{ui:Lloji}} | Çdo lloj, ose çdo lloj shënimi në grup |

Shembuj:

- Çfarë është ende e hapur në këtë fletë: {{ui:Fletë}} "Kjo fletë", {{ui:Gjendja}} "Hapur".
- Komentet e një konsulenti: {{ui:Autori}} emri i tij.
- Të gjitha matjet: {{ui:Lloji}} "Gjatësi" ose "Sipërfaqe".

Lista shfaq deri në 2000 rreshta; ngushtoje me një filtër në grupe shumë të mëdha.

## Eksporto në CSV

Zgjidh {{ui:CSV}} në krye të skedës. Merr "<name> markups.csv" me **shënimet siç janë filtruar tani**, një për rresht, me këto kolona:

Nr. i defektit, Fletë, Skedar, Faqe, Lloji, Tema, Teksti, Koment, Matja, Autori, Krijuar, Ndryshuar, Gjendja, Përgjigje, Përgjigja e fundit, Ngjyra, Vetëm për lexim.

- "Teksti" mban fjalët e kutive të tekstit dhe thirrjeve, fjalët e një vule, ose emrin e një grupi numërimi.
- "Matja" mban gjatësitë, "sipërfaqe, perimetër" për sipërfaqet, dhe "grup: n" për numërimet.
- Datat janë vula të plota kohore në UTC.

Për të eksportuar gjithçka, vendos çdo filtër përsëri te zgjedhja e parë.

## Një legjendë në fletë

{{ui:Legjenda}} te skeda {{ui:Shënimet}} vendos një legjendë në të djathtën lart të asaj që sheh: një kuti që liston çdo lloj shënimi në fletë (sipas temës dhe ngjyrës, si "Re", "Pyetje" ose "Prizat") me sa janë. Një grup numërimi numëron shenjat e veta. Legjenda vazhdon të numërojë ndërsa vizaton, zhvendos ose fshin shënime, dhe printohet dhe ruhet me numërimet e asaj çasti.

Zhvendose dhe ndrysho madhësinë si çdo shënim. Te {{ui:Vetitë}} e saj, ndrysho {{ui:Titullin}}, ose vendos {{ui:Numërimet}} në {{ui:I gjithë grupi}} për të numëruar çdo fletë. Hapësirat, legjendat e tjera dhe komentet nga programe të tjera nuk numërohen.

## Kolonat e tua, dhe renditja

{{ui:Kolonat}} te skeda {{ui:Shënimet}} shton kolona të tua në çdo shënim: një **tekst**, një **zgjedhje** (si Profesioni: Mekanik, Elektrik, Hidraulik), një **numër** (si Kosto) ose një **datë**. Jep emrin e secilës, zgjidh llojin e saj, liston zgjedhjet për një kolonë zgjedhjeje, dhe zgjidh {{ui:Ruaj kolonat}}.

- Plotësoji te {{ui:Vetitë}}: çdo kolonë ka një fushë atje. Një kolonë numrash pranon vetëm numra, një kolonë datash vetëm datë.
- Lista shfaq vlerat nën çdo shënim, filtri {{ui:Kolona}} zgjedh një vlerë (ose shënimet ku është bosh), dhe {{ui:Rendit}} e rendit listën sipas një kolone, sipas autorit, gjendjes, llojit ose datës, në vend që sipas fletës.
- Eksportet CSV dhe XLSX mbajnë kolonat pas atyre të zakonshme. Kolonat ruhen me PDF-in dhe kthehen kur e hap përsëri.

## Eksporto një përmbledhje: libër pune ose PDF

- {{ui:XLSX}} shkarkon "<name> markup summary.xlsx" me tre fletë: **Shënimet** (një rresht për çdo shënim të listuar, me të njëjtat kolona si CSV), **Sipas fletës** (sa shënime ka çdo fletë, të hapura dhe të mbyllura, dhe sa të çdo lloji, me totalet) dhe **Lista e defekteve** (kur ka artikuj defektesh).
- {{ui:PDF}} shkarkon "<name> markup summary.pdf": një raport për ta printuar ose dërguar, me emrin e grupit, datën dhe një tabelë të shënimeve të listuara (numri, fleta, lloji, tema, teksti ose komenti, vlera e matur, autori, gjendja dhe përgjigjja e fundit). Teksti i gjatë mbështillet; koka e tabelës përsëritet në çdo faqe.

Të dyja marrin listën siç është filtruar, prandaj filtro së pari për të raportuar vetëm një fletë, një autor ose artikujt e hapur.

## Eksporto në BCF

Zgjidh {{ui:BCF}}. MarkupCraft bën një foto të çdo shënimi të listuar në fletën e vet ("Duke bërë foto për BCF (3 nga 12)…"), pastaj shkarkon "<name> markups.bcfzip". Çdo shënim bëhet një temë BCF me gjendjen, autorin, datat, përgjigjet si koment, personin e caktuar dhe datën e afatit nga artikulli i tij i defektit, dhe foton.

Përdore për të sjellë komentet e rishikimit të vizatimit në veglat e koordinimit BIM që lexojnë BCF. Çfarë kalon dhe çfarë jo, është në [Bazat e BCF](topic:bcf-basics).

## Importo BCF

{{ui:Importo BCF}} lexon një skedar .bcfzip (ose .bcf) nga një vegël BIM:

- Çështjet që vijnë nga eksporti BCF i vetë MarkupCraft i gjejnë përsëri shënimet e tyre: përgjigjet e reja shtohen në bisedë, dhe vendoset një gjendje e re (Mbyllur llogaritet si Përfunduar). Përgjigjet që janë tashmë atje nuk shtohen dy herë.
- Çështjet e tjera bëhen shënime, me titullin, përshkrimin, autorin dhe komentet e tyre. Një shënim vendoset në fletën cilës numri ose emri i jepen nga etiketat e çështjes, përndryshe në fletën e hapur; një kamerë BIM nuk ka vend në letër, kështu që shënime të tilla grumbullohen në skajin e sipërm majtas të fletës, që ti t'i zhvendosësh.

E gjithë importimi është një hap: {{key:Mod+Z}} e merr mbrapsht. Shih [Bazat e BCF](topic:bcf-basics).

## Çfarë lista nuk bën ende

- Grupimi i listës (rendit, pastaj filtro, në vend të kësaj).
- Redaktimi i vlerave në listë (redakto te {{ui:Vetitë}}; fushat e defekteve redaktohen në skedën {{ui:Lista e defekteve}}).

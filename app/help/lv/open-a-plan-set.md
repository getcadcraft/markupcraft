---
title: Atvērt lapu kopu un pāriet starp lapām
summary: Atveriet vienu PDF vai vairākus vai sāciet ar tukšām lapām, atrodiet lapas pēc numura vai nosaukuma, tuviniet un panoramējiet, kā arī pārdēvējiet lapu, ja fails to nosaucis nepareizi.
keywords: atvērt, jauns, tukša lapa, skice, režģis, bez nosaukuma, lapu kopa, lapas, sīktēli, lapu etiķetes, lapas numurs, nosaukuma bloks, pārdēvēt, pāriet, tuvināt, panoramēt, pielāgot, meklēt lapas
from: 1e7f4d50
---

## Atvērt kopu

1. Rīkjoslā izvēlieties {{ui:Atvērt}} vai nospiediet {{key:Mod+O}}.
2. Failu atlasītājā atlasiet visus kopas PDF ({{pick:mac=turiet ⌘ un noklikšķiniet uz katra faila|windows linux=turiet Ctrl un noklikšķiniet uz katra faila}} vai atlasiet diapazonu ar Shift), tad apstipriniet.
   Vai velciet failus no {{pick:mac=Finder|windows=Failu pārlūks|linux=jūsu failu pārvaldnieks}} uz lapas apgabalu. Velkot parādās "Nometiet PDF, lai tos atvērtu".
3. Pagaidiet, kamēr statusa joslā rakstīts "Atver: <file>…". Lieliem failiem skaitītājs rāda: "(10 no 60 lapām)".

Rezultāts: sarakstā {{ui:Lapas}} ir katras faila lapa tādā secībā, kādā atvērāt failus, un statusa joslā rakstīts kaut kas līdzīgs "Atvērti 3 faili (kopā 42 lapas)." Ja failiem jau bija komentāri, tiek pievienots arī to skaits.

Lai vēlāk pievienotu failus kopai, atveriet tos tāpat. Tie tiek pievienoti sarakstam beigās.

## Sākt ar tukšām lapām

Lai skicētu vai rakstītu piezīmes bez rasējuma, izveidojiet tukšas lapas, nevis atveriet PDF:

1. Rīkjoslā izvēlieties {{ui:Jauns}} vai sākuma ekrānā {{ui:Sākt ar tukšu lapu}}, vai nospiediet {{key:Mod+N}}, ja pārlūks to ļauj (darbvirsmas lietotne un Studio vienmēr).
2. Izvēlieties {{ui:Papīra izmērs}}: Letter, Tabloid vai ANSI B, ARCH D, ARCH E, A4, A3 vai A1, un {{ui:Portrets}} vai {{ui:Ainava}}.
3. Izvēlieties {{ui:Režģis}}: {{ui:Nav}}, {{ui:Punkti}} vai {{ui:Kvadrāti}}. Režģis ir ik pēc 1/4 collas, ar biezāku līniju ik pēc collas uz collu papīra, un ik pēc 5 mm, ar biezāku līniju ik pēc 10 mm uz metriskā papīra. Tas ir iespiests lapā.
4. Ierakstiet, cik {{ui:Lapas}} vēlaties, no 1 līdz 20, un izvēlieties {{ui:Izveidot}}.

Rezultāts: jauns PDF ar nosaukumu "Untitled-1.pdf" (pēc tam "Untitled-2.pdf" un tā tālāk) atveras kā jebkurš cits fails, izveidots šajā datorā. Visi rīki darbojas ar to, un {{ui:Saglabāt}} lejupielādē "Untitled-1 (marked up).pdf". MarkupCraft nākamreiz atceras jūsu izvēles.

Tukšajām lapām nav mēroga: statusa joslā rakstīts "Nav kalibrēts". Režģis nav mērogs. Lai mērītu, vispirms kalibrējiet lapu vai izvēlieties mērogu; skatiet [Kalibrēt un mērīt](topic:calibrate-and-measure).

Lai pievienotu lapu tukšai kopai, atveriet vienu no tās lapām un izvēlieties {{ui:Pievienot tukšu lapu}} zem saraksta {{ui:Lapas}}. Jaunajai lapai ir tāds pats papīrs un režģis, un tā tiek novietota beigās. Kā jebkura lapas izmaiņa, to nevar atsaukt; skatiet [Drukāt un mainīt lapas](topic:pages-and-printing).

## Kā lapas saņem nosaukumus

MarkupCraft katrai lapai dod nosaukumu "<lapas numurs> — <nosaukums>", piemēram, "A-101 — Stāva plāns", izmantojot pirmo no šiem, ko atrod:

1. Nosaukumu, ko ierakstījāt ar {{ui:Pārdēvēt lapu}} (zemāk).
2. PDF lapu etiķetes, ja tās iestatīja PDF veidotājs (piemēram, "A-101").
3. Nosaukuma bloku: MarkupCraft nolasa lapas tekstu un meklē kaut ko, kas izskatās pēc lapas numura (A-101, A1.01, M-201A, KA1-1), dodot priekšroku apakšējam labajam stūrim, labajai joslai un apakšējai josla, un par nosaukumu ņem lielāko tekstu tuvumā.
4. Citādi — faila nosaukumu un lapas numuru: "Plans — lapa 3".

Lai redzētu, kurš tika izmantots, nospiediet {{key:Esc}}, līdz nekas nav atlasīts un ir ieslēgts {{ui:Atlasīt}}, tad skatiet {{ui:Rekvizīti}}: laukā "Nolasīts no" būs "Lapas etiķete", "Nosaukuma bloks", "Faila nosaukums" vai "Ievadīts manuāli".

:::note
Skenētām lapām un PDF, kuru teksts ir pārvērsts līnijās, nav teksta, ko nolasīt. Tās tiek nosauktas pēc faila un lapas, līdz tās pārdēvējat. MarkupCraft vēl nevar nolasīt tekstu no attēliem.
:::

## Pāriet starp lapām

- Noklikšķiniet uz lapas sarakstā {{ui:Lapas}}.
- Nospiediet {{key:PageDown}} nākamajai lapai un {{key:PageUp}} iepriekšējai, vai izmantojiet bultiņas joslā zem lapas.
- Ierakstiet laukā {{ui:Meklēt lapas}}: daļu no numura ("A-2"), nosaukuma vārdu ("jumts") vai faila nosaukumu. Saraksts sašaurinās, kamēr rakstāt ("4 no 42"). Nospiediet {{key:Enter}}, lai atvērtu pirmo atbilstību. Notīriet lauku, lai atkal redzētu visas lapas.

Katrai lapai tās tālummaiņa un pozīcija saglabājas, līdz aizverat kopu.

## Tālummaiņa un panoramēšana

:::mouse
- **Tālummaiņa:** pagrieziet ritenīti virs lapas. Tā tuvina ap rādītāju. Vai nospiediet {{key:Plus}} un {{key:Minus}} (arī ar {{key:Mod}}), vai izmantojiet tālummaiņas pogas. Tālummaiņas laukā ierakstiet precīzu procentuālo vērtību.
- **Pielāgot:** {{ui:Pielāgot lapu}} ({{key:Mod+0}}) parāda visu lapu; {{ui:Pielāgot platumu}} ({{key:Mod+9}}) aizpilda platumu.
- **Panoramēšana:** velciet ar vidējo pogu (ritenīti) vai ar labo pogu, vai turiet {{key:Space}} un velciet, vai izvēlieties {{ui:Panoramēt}} ({{key:H}}) un velciet. Ja nekas nav atlasīts, arī bultiņu taustiņi pārvieto lapu.
:::

:::mac mouse
Mac skārienpaliktnī divu pirkstu ritināšana tuvina (tā neritina lapu). Lai panoramētu, turiet {{key:Space}} un velciet ar vienu pirkstu, vai pārslēdzieties uz {{ui:Panoramēt}} ar {{key:H}}. Savilkšana tuvina Chrome, Edge un Firefox pārlūkā.
:::

:::touch
- **Tālummaiņa un panoramēšana:** uzlieciet divus pirkstus uz lapas. Izplatiet vai savelciet tos, lai tuvinātu ap punktu starp tiem, un pārvietojiet tos kopā, lai panoramētu. Abas darbības notiek vienlaikus.
- **Panoramēšana ar vienu pirkstu:** vispirms izvēlieties {{ui:Panoramēt}}. Ar jebkuru citu rīku viens pirksts zīmē vai atlasa.
- {{ui:Pielāgot lapu}} un {{ui:Pielāgot platumu}} atrodas joslā zem lapas.
:::

Jūs varat tālināt daudz tālāk par visu lapu un tuvināt līdz 6400%. Lapa tiek pārzīmēta skaidri brīdi pēc tam, kad pārtraucat kustēties.

## Grāmatzīmes

{{ui:Grāmatzīmes}} augšā panelī {{ui:Lapas}} rāda grāmatzīmes (kontūru) tā PDF, kuram pieder atvērtā lapa. Izvēlieties vienu, lai pārietu uz tās lapu. Zīmuļš pārdēvē grāmatzīmi, krustiņš to noņem. {{ui:Izveidot no lapām}} izveido vienu grāmatzīmi katrai lapai, ar nosaukumu, kāds redzams lapu sarakstā (lapas numurs un nosaukums), un {{ui:Pievienot šai lapai}} pievieno vienu lapai, kurā atrodaties. Izmaiņas ir faila nesaglabātā darba daļa: {{ui:Saglabāt}} ieraksta tās kopijā, kur tās redz katrs PDF skatītājs.

## Skata pagriešana

Divas pagriešanas pogas joslas labajā pusē zem lapas pagriež skatu par ceturtdaļ apgrieziena vienā vai otrā virzienā lapai, kas zīmēta sāniski. Pagriežas tikai skats: PDF un tā atzīmes paliek, kādas bija, un nākamā lapa atveras tā, kā tas ir atvērts savā PDF (katra lapa atceras savu pagriezienu, kamēr kopa ir atvērta). Teksts, ko pievienojat pagrieztā skatā, ir lasāms taisni, kā jūs to redzat. Lai pagrieztu pašu lapu saglabātajā PDF, izmantojiet {{ui:Lapas}}, tad {{ui:Pagriezt lapu pulksteņrādītāja virzienā}}; skatiet [Drukāt un mainīt lapas](topic:pages-and-printing).

## Pārdēvēt lapu

Kad lapas nosaukums ir nepareizs vai trūkst:

1. Parādiet lapu.
2. Nospiediet {{key:Esc}}, līdz nekas nav atlasīts un ir ieslēgts {{ui:Atlasīt}} rīks. {{ui:Rekvizīti}} tagad rāda lapu.
3. Izvēlieties {{ui:Pārdēvēt lapu}}.
4. Ierakstiet {{ui:Lapas numurs}} un {{ui:Nosaukums}}, tad izvēlieties {{ui:Saglabāt}}.

Rezultāts: lapu saraksts, josla zem lapas un atzīmju saraksts visi izmanto jauno nosaukumu, un "Nolasīts no" rāda "Ievadīts manuāli". Pārdēvēšanu var atsaukt ar {{key:Mod+Z}}.

Lai atgrieztos pie tā, ko saka fails, atveriet {{ui:Pārdēvēt lapu}} vēlreiz, notīriet abus laukus un izvēlieties {{ui:Saglabāt}}.

Saglabājot, ierakstītais lapas numurs kļūst par PDF lapas etiķeti, tāpēc citi PDF skatītāji rāda "A-101" savā lapas lodziņā. Ja piešķirat numuru jebkurai faila lapai, katrai šī faila lapai kopijā tiek dota etiķete (tās ierakstītais numurs, vai vecā etiķete, vai lapas numurs). Ierakstītais nosaukums paliek MarkupCraft, bet citi skatītāji to nerāda.

## Nest PDF uz TakeoffCraft vai atvērt to šeit

Kad TakeoffCraft ir atvērts tajā pašā vietā (laboratorijā, Try vai tiešsaistes lietotnēs), joslā zem lapas ir {{ui:Atvērt programmā TakeoffCraft}}. Tā atver lapas PDF TakeoffCraft jaunā cilnē, tāpat kā tas atvērts šeit, lai varētu mērīt daudzumus. Jūsu atzīmes paliek šeit; saglabājiet tās kā parasti.

TakeoffCraft poga {{ui:MarkupCraft}} dara to pašu pretējā virzienā: PDF atveras šeit tā, it kā būtu izvēlēts {{ui:Atvērt}}. Ja pārlūks bloķē jauno cilni, atļaujiet uznirstošos logus šai vietnei un izvēlieties pogu vēlreiz.

---
title: Zgjidhja e problemeve
summary: Mesazhet që shfaq MarkupCraft dhe çfarë të bësh për to, plus rregulla për gjërat që duket se nuk funksionojnë.
keywords: problem, gabim, nuk punon, ndihmë, mesazh, nuk hapet, nuk mund të ruhet, fjalëkalim, i mbrojtur, matja e refuzuar, kalibro, jashtë linje, bosh, ngadalë, shënime të humbura, shenja pyetjeje
from: bb650b39
---

Shumica e problemeve shpjegohen në shiritin e gjendjes në fund të ekranit. Lexoje fillimisht.

## Hapja e skedarëve

**"MarkupCraft hap skedarë PDF. "x" nuk është një PDF."**
Zgjodhe ose lëshove diçka tjetër. Hapen vetëm PDF. Eksporto fillimisht vizatimet nga programi yt CAD si PDF.

**"\"emri\" kërkon një fjalëkalim për t’u hapur. Hap një kopje pa mbrojtje."**
PDF-ja është e mbrojtur me fjalëkalim. Kërko nga dërguesi një kopje pa mbrojtje, ose hape në një program PDF ku e di fjalëkalimin dhe ruaj një kopje pa fjalëkalim.

**"\"emri\" nuk mund të lexohej si PDF (…)"**
Skedari është i dëmtuar ose nuk është me të vërtetë një PDF (një shkarkim i paplotë, një bashkëngjitje e shkëputur në email). Shkarkoje përsëri. Nëse programe të tjera PDF mund ta hapin, përdor "ruaj si" të tyre për të bërë një kopje të pastër dhe hape atë.

**"Disa skedarë nuk u hapën"**
Kur hap disa njëherësh, kjo kuti liston skedarët që dështuan dhe arsyen. Të tjerët janë të hapur.

**"Lexuesi PDF nuk mund të ngarkohej: …"**
Motori PDF nuk mund të merrej. Online: rifresko faqen dhe provo përsëri; kontrollo që një firewall ose bllokues përmbajtjeje të mos e bllokojë faqen. Jashtë linje: MarkupCraft nuk u ruajt për përdorim jashtë linje në këtë shfletues (shiriti lart nuk thotë "Gati jashtë linje"). Lidhu në internet, zgjidh {{ui:Ruaje për jashtë linje}}, dhe prit deri sa të shfaqet "Gati jashtë linje". Shih [Puna jashtë linje](common:offline).

**"Disa shënime mund të shfaqen dy herë në ekran" ose "Detaje shtesë të shënimeve nuk mund të lexoheshin"**
Komentet ekzistuese të skedarit janë të pazakonta. Ato hapen sa më mirë mundet MarkupCraft; kontrolloi para se t'u besosh. Ruajtja funksionon gjithsesi.

**Fleta ka emër të gabuar, ose "faqja 3"**
Shih [Si marrin emrat fletët](topic:open-a-plan-set#how-sheets-get-their-names). Fletët e skanuara nuk kanë tekst për t'u lexuar; përdor {{ui:Riemëro fletën}}.

**Të njëjtat fleta shfaqen dy herë**
I njëjti skedar u hap dy herë. Zgjidh {{ui:Mbyll}} (ruaj fillimisht nëse duhet) dhe hap grupin përsëri.

## Vizatimi dhe zgjedhja

**Nuk ndodh asgjë kur klikoj mbi fletë**
Kontrollo cila vegël është e shtypur në shirit, dhe lexo shiritin e gjendjes. Me {{ui:Drejtkëndësh}}, {{ui:Elips}} dhe {{ui:Re}}, një klikim pa tërheqje nuk vizaton asgjë: tërhiq. Me {{ui:Polivijë}}, {{ui:Poligon}}, {{ui:Re e lirë}} dhe {{ui:Sipërfaqe}}, shtohen pika: përfundo me dy klikime ose me {{key:Enter}}.

**"Një poligon kërkon të paktën 3 pika." (ose 2 për një polivijë)**
Kliko më shumë pika para se të përfundosh.

**"Nuk u shkrua asgjë, prandaj nuk u shtua tekst."**
Kutitë e tekstit dhe thirrjet mbahen vetëm kur kanë tekst. Vizato përsëri dhe shkruaj para se të klikosh jashtë.

**"Dy pikat janë të njëjta. Kliko dy pika të ndryshme."**
Për vija, shigjeta, gjatësi dhe kalibrim, dy skajet duhet të jenë larg njëri-tjetrit. Tërhiq, ose kliko dy herë në vende të ndryshme.

**Nuk mund ta zhvendos ose fshij një shënim; ka një kuti gri me vija të ndërprera**
Është një koment vetëm për lexim që erdhi me skedarin (p.sh. një theksim teksti). MarkupCraft e mban ashtu siç është: mund t'i përgjigjesh vetëm. Shiriti i gjendjes thotë "shënimet vetëm për lexim ruhen si në skedar".

**Tastet e mia shkruajnë shkronja në një kuti në vend që të zgjedhin veglat**
Kursori është në një kuti teksti (një përgjigje, një fushë në {{ui:Vetitë}}, kërkimi i fletës). Kliko fillimisht në një pjesë të zbrazët të zonës së fletës, ose shtyp {{key:Esc}} nëse po redakton tekstin e shënimit.

**Hapësira nuk lëviz pamjen, ose tastet me shigjeta nuk bëjnë asgjë**
Sapo klikove një buton të shiritit, kështu që ende ka fokusin e tastierës. Tërhiq me butonin e mesit të miut, ose kliko fletën një herë me {{ui:Përzgjidh}} të ndezur, dhe provo përsëri. Shih edhe [Tastiera dhe miu](topic:keyboard#when-a-key-does-nothing).

**Një gjest me dy gishta në ekranin me prekje la një shenjë**
Një vegël tërheqjeje (stilolaps, re, drejtkëndësh) filloi para se të vinte gishti i dytë dhe përfundoi përpara se të anulohej. Shtyp {{ui:Zhbëj}}. Vendos të dy gishtat njëkohësisht kur dëshiron të zmadhosh.

## Matja

**"Kalibro këtë fletë fillimisht: zgjidh dy pika me një distancë të njohur nga njëra-tjetra, ose zgjidh shkallën e saj. Pastaj mat."**
Çdo fletë ka nevojë për shkallën e vet para {{ui:Gjatësi}} ose {{ui:Sipërfaqe}}. MarkupCraft ka kaluar te {{ui:Kalibro}}: kliko dy skajet e një përmasë të njohur dhe shkruaj gjatësinë e saj, ose kliko butonin e shkallës në shiritin e gjendjes dhe zgjidh një shkallë. Shih [Kalibro një fletë dhe mat](topic:calibrate-and-measure).

**"Kjo nuk është një gjatësi që MarkupCraft e kupton."**
Shkruaje si `24'-0"`, `12' 6 1/2"`, `7.2 m` ose `900 mm`. Shih [Njësitë, gjatësitë dhe shkallët](topic:units-and-scales).

**Matjet janë pak të gabuara, ose shumë të gabuara**
- Një shkallë e paracaktuar në një PDF që nuk është në madhësi të plotë mat gabim. Kalibro nga një përmasë e gjatë e njohur.
- Një ndarës mijësh u lexua si presje dhjetore: `1,200 mm` do të thotë 1.2 mm. Shkruaj `1200 mm`.
- Zmadho kur klikon skajet.
- Vizatimi mund të mos jetë në shkallë ("NTS").

**"Zgjidh fillimisht një grup numërimi, pastaj kliko me Shift+klik një shenjë për ta hequr."**
Zgjidh {{ui:Përzgjidh}}, kliko grupin e numërimit, pastaj zgjidh {{ui:Numëro}} përsëri dhe kliko me {{key:Shift}} pikën.

## Ruajtja

**"Ky PDF është i mbrojtur (i enkriptuar), kështu që një kopje me shënime nuk mund të shkruhet."**
Skedari ndalon ndryshimet. Kërko një kopje pa mbrojtje. Ndërkohë mund ta eksportosh listën e shënimeve si CSV ose BCF.

**"Shkruesi PDF nuk mund të ngarkohej: …"**
Zakonisht je jashtë linje dhe aplikacioni nuk u ruajt për përdorim jashtë linje (nuk ka "Gati jashtë linje" në shiritin lart). Shënimet e tua janë ende në skedë: mbaje të hapur, lidhu në internet, dhe zgjidh {{ui:Ruaj}} përsëri. Pastaj zgjidh {{ui:Ruaje për jashtë linje}} që të funksionojë jashtë linje herës tjetër; kopja e ruajtur përfshin shkruesin PDF.

**"Nuk mund të ruhej: <file>"**
Kutia tregon arsyen. Shënimet e tua janë ende në skedë. Provo përsëri; nëse përsëritet, eksporto CSV që komentet të mos humbin, dhe raporto mesazhin.

**Zgjodha Ruaj, por mbërriti vetëm një skedar**
Shfletuesi bllokoi shkarkimet shtesë. Kërko një njoftim në shiritin e adresës, lejo këtë faqe të shkarkojë disa skedarë, dhe ruaj përsëri.

**Nuk e gjej skedarin e ruajtur**
Shkoi në dosjen e shkarkimeve të shfletuesit. Hap listën e shkarkimeve të shfletuesit (në Chrome dhe Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; në Firefox dhe Safari, butonin e shkarkimeve në shirit) për të parë se ku është. Shih [Shfletuesit dhe kompjuterët](common:browsers).

**Disa tekste shfaqin "?" në shikues të tjerë PDF**
Karakteret jashtë grupit të karaktereve të Evropës Perëndimore printohen si "?" në kopje. Mesazhi i ruajtjes i numëron. Shih [Ruaj PDF-në me shënime](topic:save-the-marked-up-pdf).

**Vula tregon datën e nesërme (ose të djeshme)**
Datat e vulave janë në UTC. Shih [Vula dhe shënime ngjitëse](topic:stamps-and-notes).

## Puna jashtë linje

**Butoni jashtë linje thotë "Nuk u ruajt"**
Disa skedarë të aplikacionit nuk u shkarkuan. Kontrollo lidhjen dhe kliko butonin përsëri; ai numëron "Po ruhet N nga M" deri sa të shfaqet "Gati jashtë linje".

**Butoni jashtë linje thotë "Jashtë linje nuk ofrohet"**
Kjo dritare shfletuesi nuk mund të mbajë kopje jashtë linje: një dritare private, ose një kompjuter me politikë që e bllokon. Hap MarkupCraft në një dritare normale dhe provo përsëri.

**Jashtë linje, aplikacioni është version më i vjetër**
Kopja jashtë linje është versioni që ruajte. Kur je në internet, kliko "Gati jashtë linje" dhe zgjidh "Ruaje përsëri (merr versionin më të ri)". Për të liruar hapësirën, zgjidh "Hiq kopjen jashtë linje". Shih [Puna jashtë linje](common:offline).

**Ndihma nuk hapet**
Shtyp {{key:F1}} (në Mac, me **fn**), ose zgjidh {{ui:Ndihmë}} në shiritin lart. Funksionon edhe jashtë linje.

## Gjëra të humbura

**Shënimet e mia u zhdukën pas mbylljes ose rifreskimit të skedës**
Hap përsëri MarkupCraft në të njëjtin shfletues: ai ofron punën e paruajtur me "Rikupero punën tënde?". Zgjidh {{ui:Rikupero}} dhe ruaj PDF-në. Kopjet mbahen deri në 30 ditë; një dritare private, ose pastrimi i të dhënave të faqes, nuk lë asnjë. Shih [Rikupero punën tënde](common:recover).

**Emri im, cilësimet e veglave ose sandukës së veglave u zhdukën**
Ato mbahen vetëm në këtë shfletues dhe u pastruan (të dhënat e faqes u pastruan, një dritare private, një shfletues ose kompjuter tjetër, ose pastrimi i Safari për faqet që nuk janë vizituar për një kohë). Vendos emrin përsëri dhe importo sandukën e eksportuar. Shih [Çfarë mbetet në këtë shfletues](topic:browser-storage).

**"Sanduka e veglave nuk mund të mbahej në këtë shfletues (ruajtja është joaktive ose plot). Eksportoje për ta mbajtur."**
Shfletuesi refuzon të ruajë të dhëna për këtë faqe (modaliteti privat, ruajtja e bllokuar nga një cilësim ose politikë, ose plot). Eksporto sandukën pasi ta ndryshosh, dhe importoje herën tjetër.

## Shfaqja dhe shpejtësia

**Fleta duket e turbullt për një moment**
MarkupCraft shfaq një paraqitje të shpejtë, të papërpunuar, ndërsa zmadhon ose lëviz pamjen, dhe e vizaton sërish të mprehtë pak pas se ndalon.

**Gjithçka është e ngadaltë me një grup të madh**
Mbyll skeda të tjera të rënda, hap më pak skedarë njëherësh, dhe shmang zmadhimin në maksimum në fleta shumë të mëdha. Shih [Puna me disa skedarë njëherësh](topic:several-files#big-sets).

**Fleta është e errët me vija të çelëta**
Je në temën {{ui:Model}}. Zgjidh {{ui:Letra}} në shiritin lart për vija të errëta mbi të bardhë. Shënimet e tua dhe PDF-ja e ruajtur nuk preken.

---
title: Kas jauns 0.9 (iepriekš)
summary: Piezīmes un laukums, kas nekad netiek drukāts, šifrētas privātās piezīmes un tīra kopija klientam, masveida saites visam rasējumu komplektam, Loka rīks ar desmit metodēm, sekošana citam pārskatītājam Live režīmā un labojums dzēstām atzīmēm, kas paliek saglabātajā PDF.
keywords: kas jauns 0.9, iepriekšējs laidiens, kas jauns, 0.9, izlaiduma piezīmes, izmaiņu žurnāls, piezīmes, laukums, privātās piezīmes, parole, šifrēts, paslēpt piezīmes, rādīt piezīmes, tīra kopija, momentuzņēmums, masveida saites, lapu norādes, saistīt lapas, titula bloks, lapas numurs, papildinājums, pārnumurēt, PDF saite, loks, loka metodes, trīs punktu loks, rādiuss, sekot, sekot man, live, klases skats, dalībnieku saraksts, dzēsta atzīme, rīka padomi, cilņu nosaukumi, kas jauns, izlaiduma piezīmes, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, uzdevums, uzdevumi, izpildītājs, termiņa diena, nokavēts, pārbaudīt tagad, kas mainījies, versijas, salīdzināt, balss piezīme, lēmums, pārskatīšanas atzīmes, atbilžu fails, sagatavotājs, palīgs, mcp, problēmas, valodas, ievades ierīces, skārienpaliktnis, rīkjoslas rindas, rekvizītu režģis, atjauninājums
from: aa3dfeb8
---

Šis ir MarkupCraft 0.9 izmaiņu apraksts salīdzinājumā ar 0.8.1. Galvenā ideja: jūsu darba piezīmes paliek ārpus lapas, ko saņem klients, un visu rasējumu komplektu var saistīt vienā gaitā.

## Jauns

### Piezīmes, laukums un privātās piezīmes

- **Laukums.** Apkārt katrai lapai ir darba virsma: viss, kas zīmēts, rakstīts vai ielīmēts blakus lapai, ir piezīme un nekad netiek drukāts. Izvēlieties {{ui:Rādīt laukumu blakus lapai}}, lai tālummaiņā iegūtu vietu, vai {{ui:Momentuzņēmums blakus lapai}}, velciet kvadrātu un pēc tam {{ui:Blakus lapai}}, lai novietotu rasējuma daļas attēlu blakus lapai. Momentuzņēmums ir attēls, un tas nemainās, kad mainās lapa. Skatiet [Piezīmes, laukums un privātās piezīmes](topic:notes-and-pasteboard).
- **Piezīmju rādīšana un paslēpšana.** Jebkura atzīme var būt piezīme: iestatiet {{ui:Jaunās atzīmes ir}} cilnē {{ui:Piezīmes}} vai {{ui:Šī atzīme ir}} sadaļā {{ui:Rekvizīti}}. {{key:Shift+H}} vai slēdzis {{ui:Piezīmes}} zem lapas paslēpj un parāda visas piezīmes uzreiz. Piezīmes netiek iekļautas drukāšanā, saplacinātās kopijās, sarakstos un eksportos, un citi PDF lasītāji tās nerāda. Jūsu saglabātais PDF tās saglabā, lai tās būtu redzamas nākamreiz, kad to atverat MarkupCraft.
- **Privātās piezīmes.** Izvēlieties {{ui:Iestatīt paroli}}, pēc tam padariet atzīmi par {{ui:Privāta piezīme}}. Tā ir šifrēta failā ar paroli, kurā ir vismaz 10 rakstzīmes, un atjaunošana nav iespējama: neviens, arī mēs, nevar to atvērt bez paroles. {{ui:Bloķēt}} paslēpj privātās piezīmes; {{ui:Palikt atbloķētam šajā ierīcē}} pēc noklusējuma ir izslēgts.
- **Saglabāt tīru kopiju.** {{ui:Saglabāt tīru kopiju}} noņem visas piezīmes, privātās piezīmes un visu, kas atrodas laukumā. Izmantojiet to failam, kas tiek nosūtīts klientam.

### Saistīt visu komplektu

- **Masveida saites.** Izvēlieties {{ui:Lapas}} › {{ui:Masveida saites…}} vai {{ui:Saistīt lapu norādes…}} zem {{ui:Meklēt tekstu}} panelī {{ui:Lapas}}. Pirmajā solī ir uzskaitīts katras lapas numurs un nosaukums, kas nolasīti no tās titula bloka; labojiet tos, kas ir nepareizi. Otrajā solī ir uzskaitītas atrastās norādes, piemēram, `3/A-501` vai `DETAIL 2 ON A-501`. {{ui:Saistīs}} parāda lapu un skatu katrai no tām, {{ui:Nav saistīts}} parāda numurus, kuriem nav atvērtas lapas, un {{ui:Izveidot saites}} izveido visas vienā atsaukšanas solī. Palaidiet to vēlreiz pēc papildinājuma vai pārnumurēšanas; saites, ko esat izveidojis pats, nekad netiek mainītas. Saite ar skatu tiek saglabāta kā PDF saite, tāpēc arī citi lasītāji atver detaļu. Skatiet [Lapu saites](topic:sheet-links).

### Rasējums

- **Loks, desmit metodes.** Rīkam {{ui:Loks}} ({{key:O}}) tagad lapas augšdaļā ir lauks {{ui:Loka metode}} ar desmit veidiem, kā zīmēt loku, un leņķi, garumu, rādiusu un virzienu var norādīt ar klikšķi vai ierakstīt. Skatiet [Zīmēt loku desmit veidos](topic:draw-an-arc).

### Kopīgs darbs

- **Sekot pārskatītājam.** Live sesijā izvēlieties {{ui:Sekot}} blakus personas vārdam, un jūsu skats pārvietojas kopā ar viņa skatu; ja paši panoramējat vai tuvināt, sekošana apstājas. Vadītājs var izvēlēties {{ui:Lūgt visus sekot man}}. Dalībnieku sarakstā katras personas krāsa, vārds, lapa, kurā tā atrodas, un laiks, kad bija pēdējā labošana. Skatiet [Sekot citam pārskatītājam Live sesijā](topic:follow-in-live).

## Visās lietotnēs

- Rīka padomi ir Bootstrap rīka padomi, sākuma padomu var aizvērt, cilņu rindas ritina, ja tās pārpildās, un pārlūka cilņu nosaukumi ir `<document> — MarkupCraft | CadCraft`.
- Panelis ar vairākām sadaļām atver vienu un aizver pārējās (slēdzene blakus kursoram patur vienu atvērtu); iestatījumu slēdzis to izslēdz.
- Katra lietotne sākas ar noklusējuma bibliotēkas objektu kopu.
- Svara un temperatūras mērvienības ir pieejamas iestatījumos {{ui:Mērvienības}}.

## Labots

- **Dzēstas atzīmes vairs nepaliek lasāmas saglabātajā PDF.** Iepriekš saglabājot tika noņemta dzēsta vai pārrakstīta anotācija no tās lapas, bet objekts ar tā tekstu palika failā. Tagad saglabāšana šos objektus dzēš. Faili, kas saglabāti ar iepriekšējām versijām, tos joprojām satur, līdz tos saglabājat vēlreiz.

## Godīgi ierobežojumi

- Masveida saites pārbaudītas mūsu pašu testa komplektos. Reāliem komplektiem burbuļi ir zīmēti dažādi, tāpēc klienta komplektā dažus skatus var nepamanīt. Skenētām lapām vispirms vajag {{ui:Nolasīt tekstu (OCR)…}}.
- Piezīmes, privātās piezīmes un laukums pārbaudīti bezgalvas pārlūkprogrammā un mūsu pašu failos, nevis ar lielu reālu vektoru komplektu un nevis reālā divu cilvēku Live sesijā. Paroles maiņa nav izveidota. Versijas, kas vecākas par 0.9, piezīmes nerāda.
- Klases skats ir dalībnieku saraksts; to nav pārbaudīts ar reālu skolotāju un studentiem.
- Valodas, kas nav angļu, ir mašīnu melnraksti, līdz tos izlasa dzimtā valodā runājošs cilvēks.
- Windows instalētāji nav parakstīti ar kodu ({{ui:Vairāk informācijas}}, tad {{ui:Palaist tāpat}}); macOS diska attēls nav notarizēts (noklikšķiniet ar peles labo pogu, tad {{ui:Atvērt}}).

## Iepriekš: 0.8 un 0.8.1

Šis ir MarkupCraft 0.8 un 0.8.1 izmaiņu apraksts salīdzinājumā ar 0.7. Lielākā jaunība ir tāda, ka atzīme var būt uzdevums, ko kāds vai jūsu palīgs veic un kas pats aizveras, kad rasējums patiesi mainās.

### Jauns

**Atzīmes, kas darbojas**

- **Atzīmes pārvēršana uzdevumā.** Atlasiet vienu vai vairākas atzīmes, atveriet cilni {{ui:Uzdevumi}} un izvēlieties {{ui:Padarīt atlasīto par uzdevumu}}. Uzdevumam ir nosaukums, persona vai jūsu pieslēgtais palīgs, kas to veic, neobligāts termiņa diena un stāvoklis; tas saglabā savu vietu uz lapas un savu pavedienu. Skatiet [Atzīmes pārvēršana uzdevumā](topic:markups-that-act).
- **Uzdevumi, kas aizveras paši.** Uzdevums var sekot rasējumam savas atzīmes iekšienē. Atveriet jaunāku lapas versiju un izvēlieties {{ui:Pārbaudīt tagad}}: ja līnijas šajā apvidū ir mainījušās vairāk nekā par matu, uzdevums tiek atzīmēts kā Pabeigts, tā atzīme kļūst par Pabeigts, un pavedienā parādās piezīme par to, kas mainījās. Jauns datuma zīmogs vai līnijas, kas pārvietojušās mazāk nekā par 1.5 punktiem, neskaitās. Uzdevums tā vietā var sekot modeļa elementam: jūsu palīgs ziņo par elementu ar `tasks_check`, un vēlāks ziņojums, kas atšķiras, vai dzēsts elements aizver uzdevumu. Viens atsaukšanas solis to atkal atver.
- **Darba atrašana.** Filtrējiet sarakstu {{ui:Uzdevumi}} pēc stāvokļa un pēc tā, kam tas paredzēts, arī pēc {{ui:Nokavēts}}; izvēlieties {{ui:Piešķirts}}, tad {{ui:Palīgs}}, lai redzētu, kas gaida jūsu palīgu. Uzdevums, kas pārsniedz termiņa dienu, paneļā Problēmas parādās kā brīdinājums. {{ui:CSV}} eksportē sarakstu. Uzdevumi tiek saglabāti PDF kopā ar atzīmi un Live režīmā tiek pārsūtīti kā citas atzīmes īpašības.

**Kas mainījies, vienkāršā sarakstā**

- **Izmaiņu uzskaitīšana.** Atveriet cilni {{ui:Salīdzināt}}, pēc tam {{ui:Salīdzināt visu komplektu}}, izvēlieties agrāko un vēlāko failu un izvēlieties {{ui:Uzskaitīt izmaiņas}}. Sarakstā vispirms ir skaits, pēc tam katra mainītā lapa, lielākā izmaiņa pirmā: kur lapā, cik liela (reālās vienībās un arī papīra collās kalibrētā lapā), vai līnijas ir pievienotas vai noņemtas, cik atzīmju tur atrodas un kuri vārdi parādījās vai pazuda. {{ui:Kopēt sarakstu}} ieliek to starpliktuvē, un {{ui:CSV}} ieraksta vienu rindu katrai izmaiņai. Skatiet [Uzskaitīt, kas mainījies starp versijām](topic:what-changed-in-words).

**Balss piezīmes un lēmumi**

- **Balss piezīmes.** Cilnē {{ui:Piezīmes}} izvēlieties {{ui:Ierakstīt balss piezīmi}}, pēc tam {{ui:Apturēt ierakstīšanu}}; ieraksti apstājas paši pēc divām minūtēm. Piezīme tiek piespraudīta lapas centrā, jūs to velciet, kur tai jābūt, un tekstu ierakstāt sadaļā {{ui:Rekvizīti}}, un {{ui:Atskaņot}} sarakstā atskaņo to. Ieraksts tiek saglabāts PDF iekšienē.
- **Lēmumi.** {{ui:Piespraust lēmumu}} uzraksta vienu vai divus teikumus uz lapas. Ja tas aizstāj iepriekšēju lēmumu, izvēlieties to laukā {{ui:Tas aizstāj}}: vecais paliek, atzīmēts kā Aizstāts, un norāda uz jauno. Viens atsaukšanas solis to atceļ. Skatiet [Balss piezīmes un lēmumi uz lapas](topic:voice-notes-and-decisions).

**Pārskatīšanas atzīmes uz versiju**

- **Nosūtīt un atbildēt.** Cilnē {{ui:Uzdevumi}} atveriet {{ui:Pārskatīšanas atzīmes uz versiju}}, ierakstiet versiju, pret kuru ir atzīmes, un izvēlieties {{ui:Eksportēt redline failu}}. Jūs saņemat `.redline.json` failu ar vienu vienumu katrai atvērtajai atzīmei: lapa, pozīcija (kā daļas no lapas, lai pārzīmēšana citā izmērā joprojām sakristu), vārdi, autors, pavediens un tā uzdevums. Tas, kurš zīmē izmaiņas, atbild Pieņemts, Noraidīts vai Pabeigts failā `.redline-answers.json`; {{ui:Ielādēt atbilžu failu…}} piešķir katrai atzīmei šo statusu un sagatavotāja piezīmi kā vienu atsaukšanas soli. Skatiet [Nosūtīt atzīmes sagatavotājam kā pārskatīšanas atzīmes](topic:redline-to-revision).

**MI palīgi**

- **Vairāk rīku.** Palīgs, kuru esat pieslēdzis caur CadCraft Studio, var uzskaitīt uzdevumus (`tasks_list`), izveidot vai mainīt vienu (`task_set`), noņemt uzdevumu (`task_clear`), pārbaudīt vienu pret jaunāku versiju vai elementu (`tasks_check`) un nolasīt vienkāršu izmaiņu sarakstu starp diviem atvērtiem plānu komplektiem (`revisions_changes`). Tam ir pieejami tikai tie rīki, kurus atzīmējāt slēdzī {{ui:Palīgi}}, un katrs izmaiņu solis ir viens atsaukšanas solis. Skatiet [Lietot MarkupCraft ar MI palīgu](topic:use-with-ai-assistants).

### Visās lietotnēs

- **Valodas.** CadCraft Studio tagad ir 54 valodas. Desmit ir jaunas: lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku. Visas neangļu valodas ir mašīnu melnraksti, līdz tās izlasa dzimtā valodā runājošs cilvēks.
- **Ievades ierīces.** {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Ievades ierīces}} nosaka, ko dara skārienpaliktnis, peles sānu pogas, pildspalva, pieskārieni ar pirkstu, 3D pele, spēļu kontrolieris vai MIDI kontrolieris, visām lietotnēm vai tikai šai. Kamēr neko nemaināt, katra ierīce darbojas kā līdz šim. Skatiet [Lietot skārienpaliktni, 3D peli vai kontrolieri](common:input-devices).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} piedāvā {{ui:Pārnest}} (noklusējums), {{ui:2 rindas}} un {{ui:1 rinda}}, lai rasējumam būtu vairāk vietas. Skatiet [Panelu izkārtošana](common:arrange-panels).
- **Rekvizītu režģis.** Atzīmes stila lauki izmanto kopīgo režģi ar sakļaujamām kategorijām un nosaukumu un vērtību kolonnām.
- **Problēmu panelis.** Lietotnes brīdinājumi, piemēram, nokavēts uzdevums, tiek apkopoti vienā panelī Problēmas.
- **Live un papildinājumi.** Live sesijas ir aprakstītas [Darbs kopā Live režīmā](common:work-together-live); papildinājumu saraksts, kas seko jūsu kontam, ir aprakstīts [Papildinājumi un jūsu konta saraksts](common:addons-basics).
- **Pievienojiet savu MI.** CadCraft Studio ir centrs jūsu pašu palīgam: pieslēdzieties vienreiz visām astoņām lietotnēm. Lietotnēs nav paša MI.

### Labots 0.8.1

- **Studio var mainīt valodu, kamēr darbojas.** Iepriekš darbvirsmas lietotne un iepakotie izdevumi palika angļu valodā. Tas vēl nav pārbaudīts visās platformās: pasakiet mums, ja valoda nemainās.
- Studio 0.8 instalācijām tiek piedāvāts 0.8.1 caur {{ui:Iestatījumi}} › {{ui:Atjauninājumi}}.

### Šajā versijā vēl nav

- **Nav parakstīts ar kodu.** Windows instalētāji un macOS .dmg nav parakstīti. Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Vairāk informācijas}}, tad {{ui:Palaist tāpat}}. Mac datorā noklikšķiniet ar peles labo pogu uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. Store versijas ir apturētas.
- **Pievienot savu MI vēl nav pabeigts vietām.** Vienas pogas pieslēgšana Studio iekšienē, mitinātais savienotājs pārlūka palīgiem un jūsu pašu API atslēga Studio iekšienē šajā laidienā nav apsolīti. Uzdevumu cikls ir pārbaudīts, bet vēl nav pārbaudīts ar reālu palīgu.
- **Uzdevumu pārbaudēm vajag vienādu lapas izmēru.** Lapa, kas pārzīmēta citā izmērā, neatbildīs, tāpēc tās uzdevumi neaizvērsies. Lapas tiek savienotas pēc lapas numura, citādi pēc lapas pozīcijas.
- **Balss piezīmes ir tikai ieraksti.** Nav transkripta, un palīgs redz piezīmes garumu, autoru un tekstu, nevis skaņu. Ierakstīšana tika pārbaudīta ar fiktīvu mikrofonu bezgalvas pārlūkprogrammā; reāls mikrofons tālrunī, planšetdatorā vai klēpjdatorā vēl jāpārbauda.
- **Aprēķinu lapas un iemesli PDF** tiek glabāti privātā failu ierakstā. Vecāka MarkupCraft versija šo ierakstu ignorē un to noņem nākamreiz, kad saglabā failu, tāpēc atveriet un saglabājiet šādu failu ar 0.8 vai jaunāku versiju.
- **Sagatavotāja puse pārskatīšanas atzīmēm.** CadCraft, kas nolasa redline failu un atbild uz to, vēl nav izveidots.
- **Citas valodas.** Tamilu valodas lietotnes josla pārsniedz robežu par 528 px.

Visu pārējo skatiet [Kas vēl nav izveidots](topic:not-built-yet). Iepriekšējam laidienam skatiet [Kas jauns 0.7](topic:whats-new-0-7).

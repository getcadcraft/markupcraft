---
title: Jaunumi 0.9 versijā
summary: Piezīmes un blakus lapai, kas nekad netiek drukātas, šifrētas privātās piezīmes un tīra kopija klientam, masveida saites visam rasējumu komplektam, Arc rīks ar desmit metodēm, citas pārskatītājas sekošana Live sesijā un labojums dzēsto atzīmju paturēšanai saglabātā PDF.
keywords: jaunumi, 0.9, versijas piezīmes, izmaiņu žurnāls, piezīmes, blakus lapai, privātās piezīmes, parole, šifrēts, slēpt piezīmes, rādīt piezīmes, tīra kopija, momentuzņēmums, masveida saites, lapu norādes, saistīt lapas, title block, lapas numurs, papildinājums, pārnumurēt, PDF saite, arc, loka metodes, trīspunktu loks, rādiuss, sekot, sekot man, live, klases skats, cilvēku saraksts, dzēsta atzīme, rīkpadomi, cilņu nosaukumi, jaunumi, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, uzdevums, uzdevumi, izpildītājs, izpildes diena, nokavēts, pārbaudīt tagad, kas mainījās, versijas, salīdzināt, balss piezīme, lēmums, pārskatīšanas atzīmes, atbilžu fails, meldētājs, palīgs, mcp, problēmas, valodas, ievades ierīces, skārienpaliktnis, rīkjoslas rindas, rekvizītu režģis, atjaunināšana
from: dbdd7ed4
---

Šeit ir, kas mainījās MarkupCraft 0.9 salīdzinājumā ar 0.8.1. Galvenā ideja ir tāda, ka jūsu darba piezīmes paliek ārpus lapas, ko saņem klients, un visu rasējumu komplektu var saistīt vienā gājienā.

## Jauns

### Piezīmes, blakus lapai un privātās piezīmes

- **Blakus lapai.** Apkārtne ap katru lapu ir galds: viss, kas uzzīmēts, uzrakstīts vai ielīmēts blakus lapai, ir piezīme un nekad netiek izdrukāta. Izvēlieties {{ui:Rādīt laukumu blakus lapai}}, lai tālinātu, lai būtu vairāk vietas, vai {{ui:Momentuzņēmums blakus lapai}}, velciet kasti un pēc tam {{ui:Blakus lapai}}, lai novietotu rasējuma daļas attēlu blakus lapai. Momentuzņēmums ir attēls un nemainās, kad mainās lapa. Skat. [Piezīmes, blakus lapai un privātās piezīmes](topic:notes-and-pasteboard).
- **Rādīt un slēpt piezīmes.** Jebkura atzīme var būt piezīme: iestatiet {{ui:Jaunās atzīmes ir}} cilnē {{ui:Piezīmes}} vai {{ui:Šī atzīme ir}} sadaļā {{ui:Rekvizīti}}. {{key:Shift+H}} vai slēdzis {{ui:Piezīmes}} zem lapas slēpj un rāda visas piezīmes vienlaikus. Piezīmes netiek iekļautas drukāšanā, saplakinātās kopijās, sarakstos un eksportos, un citi PDF lasītāji tās nerāda. Jūsu saglabātais PDF tās patur nākamajai reizei, kad to atverat MarkupCraft.
- **Privātās piezīmes.** Izvēlieties {{ui:Iestatīt paroli}}, pēc tam padariet atzīmi par {{ui:Privāta piezīme}}. Tā tiek šifrēta failā ar paroli, kurā ir vismaz 10 rakstzīmes, un atkopšanas nav: neviens, arī mēs, nevar to atvērt bez paroles. {{ui:Bloķēt}} noslēpj privātās piezīmes; {{ui:Palikt atbloķētam šajā ierīcē}} pēc noklusējuma ir izslēgts.
- **Saglabāt tīru kopiju.** {{ui:Saglabāt tīru kopiju}} noņem katru piezīmi, privāto piezīmi un visu, kas atrodas blakus lapai. Izmantojiet to failam, kas dodas uz klientu.

### Saistīt visu komplektu

- **Masveida saites.** Izvēlieties {{ui:Lapas}} › {{ui:Masveida saites…}}, vai {{ui:Saistīt lapu norādes…}} zem {{ui:Meklēt tekstu}} panelī {{ui:Lapas}}. 1. solis uzskaita katras lapas numuru un nosaukumu, kā tie nolasīti no tās title block; izlabojiet tos, kas nav pareizi. 2. solis uzskaita atrastās norādes, piemēram, `3/A-501` vai `DETAIL 2 ON A-501`. {{ui:Saites tiks izveidotas}} parāda lapu un skatu katrai no tām, {{ui:Nav saistīts}} parāda numurus, kuriem nav atvērtas lapas, un {{ui:Izveidot saites}} izveido visas vienā atsaukšanas solī. Palaidiet to vēlreiz pēc papildinājuma vai pārnumurēšanas; saites, ko izveidojāt ar roku, nekad netiek mainītas. Saite ar skatu tiek saglabāta kā PDF saite, tāpēc citi lasītāji atver arī detaļu. Skat. [Lapu saites](topic:sheet-links).

### Rasējums

- **Loks, desmit metodes.** Rīks {{ui:Arc}} ({{key:O}}) tagad ir lodziņš {{ui:Loka metode}} virs lapas ar desmit veidiem, kā zīmēt loku, un leņķi, garumu, rādiusu un virzienu var noklikšķināt vai ierakstīt. Skat. [Zīmēt loku desmit veidos](topic:draw-an-arc).

### Kopīgs darbs

- **Sekot pārskatītājam.** Live sesijā izvēlieties {{ui:Sekot}} blakus cilvēka vārdam, un jūsu skats pārvietojas līdzi; ja paši panoramējat vai tālummainiet, sekošana apstājas. Vadītājs var izvēlēties {{ui:Lūgt visus sekot man}}. Cilvēku sarakstā katra persona ir redzama ar savu krāsu, vārdu, lapu, kurā atrodas, un laiku, kad bija pēdējā labošana. Skat. [Sekot citam pārskatītājam Live sesijā](topic:follow-in-live).

## Visās lietotnēs

- Rīkpadomi ir Bootstrap rīkpadomi, sākuma padomu var aizvērt, cilņu joslas ritina, ja tās pārpildās, un pārlūka cilņu nosaukumi ir `<dokuments> — MarkupCraft | CadCraft`.
- Panelis ar vairākām sadaļām atver vienu un aizver pārējās (slēdzis blakus bultiņai to tur atvērtu); iestatījumu slēdzis to izslēdz.
- Katra lietotne sākas ar noklusējuma bibliotēkas objektu kolekciju.
- Svara un temperatūras mērvienības ir pieejamas mērvienību iestatījumos.

## Labots

- **Dzēstās atzīmes vairs nepaliek lasāmas saglabātajā PDF.** Agrāk saglabājot dzēsta vai pārrakstīta anotācija tika noņemta no savas lapas, bet objekts ar tās tekstu palika failā. Tagad saglabāšana šos objektus dzēš. Faili, kas saglabāti ar vecākām versijām, tos joprojām satur, līdz tos atkal saglabājat.

## Godīgi ierobežojumi

- Masveida saites tika izmēģinātas uz mūsu pašu testa komplektiem. Reālie komplekti zīmē burbuļus daudzos veidos, tāpēc klienta komplektā dažus skatus var nepamanīt. Skenētām lapām vispirms vajag {{ui:Nolasīt tekstu (OCR)…}}.
- Piezīmes, privātās piezīmes un blakus lapai tika pārbaudītas bezgalvas pārlūkprogrammā un mūsu pašu failos, nevis ar lielu reālu vektoru komplektu un nevis reālā divu cilvēku Live sesijā. Paroles maiņa vēl nav izveidota. Versijas, vecākas par 0.9, piezīmes nerāda.
- Klases skats ir cilvēku saraksts; to vēl nav izmēģināts ar īstu skolotāju un skolēniem.
- Valodas, kas nav angļu, ir mašīntulkotas melnraksti, līdz tās izlasa dzimtā valoda runātājs.
- Windows instalētāji nav koda parakstīti (Vairāk informācijas, pēc tam Palaist tomēr); macOS diska attēls nav notarizēts (ar peles labo pogu, pēc tam Atvērt).

## Agrāk: 0.8 un 0.8.1

Šeit ir, kas mainījās MarkupCraft 0.8 un 0.8.1 salīdzinājumā ar 0.7. Galvenā jaunā lieta ir tā, ka atzīme var būt uzdevums, ko kāds vai jūsu pašu palīgs veic, un kas pats aizveras, kad rasējums patiešām mainās.

### Jauns

**Atzīmes, kas darbojas**

- **Padarīt atzīmi par uzdevumu.** Atlasiet vienu vai vairākas atzīmes, atveriet cilni {{ui:Uzdevumi}} un izvēlieties {{ui:Padarīt atlasīto par uzdevumu}}. Uzdevumam ir nosaukums, cilvēks vai jūsu pieslēgtais palīgs, kas to izpilda, neobligāta izpildes diena un stāvoklis, un tas patur savu vietu lapā un savu pavedienu. Skat. [Padarīt atzīmi par uzdevumu](topic:markups-that-act).
- **Uzdevumi, kas aizveras paši.** Uzdevums var vērot rasējumu savas atzīmes iekšienē. Atveriet jaunāku lapas versiju un izvēlieties {{ui:Pārbaudīt tagad}}: ja līnijas tajā apgabalā mainījās vairāk nekā par matu, uzdevums tiek atzīmēts kā Done, tā atzīme kļūst par Completed, un pavedienā parādās piezīme par to, kas mainījās. Jauns datuma zīmogs vai līnijas, kas pārvietojās mazāk nekā par 1,5 punktiem, neskaitās. Uzdevums var arī vērot modeļa elementu: jūsu palīgs ziņo par elementu ar `tasks_check`, un vēlāks ziņojums, kas atšķiras, vai dzēsts elements aizver uzdevumu. Viens atsaukšanas solis to atkal atver.
- **Atrast darbu.** Filtrējiet sarakstu {{ui:Uzdevumi}} pēc stāvokļa un pēc tā, kam tas paredzēts, arī {{ui:Nokavēts}}; izvēlieties {{ui:Piešķirts}}, pēc tam {{ui:Palīgs}}, lai redzētu, kas gaida jūsu palīgu. Uzdevums, kas pārsniedz savu izpildes dienu, parādās kā brīdinājums panelī Problēmas. {{ui:CSV}} eksportē sarakstu. Uzdevumi tiek saglabāti PDF kopā ar atzīmi un ceļo caur Live tāpat kā citas atzīmes rekvizīti.

**Kas mainījās, kā vienkāršs saraksts**

- **Uzskaitīt izmaiņas.** Atveriet cilni {{ui:Salīdzināt}}, pēc tam {{ui:Salīdzināt visu kopu}}, izvēlieties agrāko un vēlāko failu un izvēlieties {{ui:Uzskaitīt izmaiņas}}. Saraksts sākas ar skaitu, pēc tam aptver katru mainīto lapu, sākot ar lielāko izmaiņu: kur lapā, cik liela (reālās vienībās, kā arī collās uz papīra kalibrētā lapā), vai līnijas pievienotas vai noņemtas, cik atzīmju atrodas tajā vietā un kādi vārdi parādījās vai pazuda. {{ui:Kopēt sarakstu}} ievieto to starpliktuvē, bet {{ui:CSV}} ieraksta vienu rindu par katru izmaiņu. Skat. [Uzskaitīt izmaiņas starp versijām](topic:what-changed-in-words).

**Balss piezīmes un lēmumi**

- **Balss piezīmes.** Cilnē {{ui:Piezīmes}} izvēlieties {{ui:Ierakstīt balss piezīmi}}, pēc tam {{ui:Apturēt ierakstīšanu}}; ieraksti apstājas paši pēc divām minūtēm. Piezīme tiek piespraust lapas centrā, jūs to velkat, kur tai jābūt, un ierakstāt paraksta tekstu sadaļā {{ui:Rekvizīti}}, un {{ui:Atskaņot}} sarakstā atskaņo to. Ieraksts tiek saglabāts PDF failā.
- **Lēmumi.** {{ui:Piespraust lēmumu}} uzraksta vienu vai divus teikumus uz lapas. Ja tas aizstāj agrāku lēmumu, izvēlieties to sadaļā {{ui:Tas aizstāj}}: vecais paliek, atzīmēts kā Replaced, un norāda uz jauno. Viens atsaukšanas solis to atgriež. Skat. [Piespraust balss piezīmes un lēmumus uz lapas](topic:voice-notes-and-decisions).

**Pārskatīšanas atzīmes kā versija**

- **Nosūtīt un atbildēt.** Cilnē {{ui:Uzdevumi}} atveriet {{ui:Pārskatīšanas atzīmes uz versiju}}, ierakstiet versiju, pret kuru atzīmes ir, un izvēlieties {{ui:Eksportēt redline failu}}. Jūs saņemsiet failu `.redline.json` ar vienu vienumu katrai atvērtai atzīmei: lapa, pozīcija (kā lapas daļas, lai pārdrukāšana citā izmērā joprojām sakristu), vārdi, autors, pavediens un tā uzdevums. Tas, kas veic izmaiņas, atbild ar Accepted, Rejected vai Done failā `.redline-answers.json`; {{ui:Ielādēt atbilžu failu…}} piešķir katrai atzīmei šo statusu un meldētāja piezīmi kā vienu atsaukšanas soli. Skat. [Nosūtīt atzīmes meldētājam kā pārskatīšanas atzīmes](topic:redline-to-revision).

**AI palīgi**

- **Vairāk rīku.** Palīgs, ko pieslēdzāt caur CadCraft Studio, var uzskaitīt uzdevumus (`tasks_list`), izveidot vai mainīt vienu (`task_set`), noņemt uzdevumu (`task_clear`), pārbaudīt vienu pret jaunāku versiju vai elementu (`tasks_check`) un nolasīt vienkāršo izmaiņu sarakstu starp divām atvērtām plānu kopām (`revisions_changes`). Tas saņem tikai tos rīkus, ko atzīmējāt zem slēdža Palīgi, un katra izmaiņa ir viens atsaukšanas solis. Skat. [Izmantot MarkupCraft ar AI palīgu](topic:use-with-ai-assistants).

### Visās lietotnēs

- **Valodas.** CadCraft Studio tagad ir 54 valodas. Desmit ir jaunas: lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku. Visas ne angļu valodas ir mašīntulkotas melnraksti, līdz tās izlasa dzimtā valoda runātājs.
- **Ievades ierīces.** {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Ievades ierīces}} nosaka, ko dara skārienpaliktnis, peles sānu pogas, pildspalva, pieskārieni ar pirkstu, 3D pele, spēļu kontrolieris vai MIDI kontrolieris, visām lietotnēm vai tikai šai. Kamēr neko nemaināt, katra ierīce darbojas kā iepriekš. Skat. [Lietot skārienpaliktni, 3D peli vai kontrolieri](common:input-devices).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} ir {{ui:Pārnest}} (noklusējums), {{ui:2 rindas}} un {{ui:1 rinda}}, lai rasējumam būtu vairāk vietas. Skat. [Izkārtot paneļus](common:arrange-panels).
- **Rekvizītu režģis.** Atzīmes stila lauki izmanto kopīgo režģi ar sakļaujamām kategorijām un nosaukumu un vērtību kolonnām.
- **Problēmu panelis.** Brīdinājumi no lietotnes, piemēram, nokavēts uzdevums, tiek apkopoti vienā panelī Problēmas.
- **Live un papildinājumi.** Live sesijas ir aprakstītas sadaļā [Strādāt kopā tiešraidē](common:work-together-live); papildinājumu saraksts, kas seko jūsu kontam, ir sadaļā [Papildinājumi un jūsu konta saraksts](common:addons-basics).
- **Pieslēgt savu AI.** CadCraft Studio ir centrs jūsu pašu palīgam: pieslēdziet vienreiz visām astoņām lietotnēm. Lietotnēs nav savas AI.

### Labots 0.8.1

- **Studio var mainīt valodu, kamēr darbojas.** Agrāk darbvirsmas lietotne un iepakotie izdevumi palika angliski. Tas vēl nav pārbaudīts visās platformās: pastāstiet mums, ja valoda nemainās.
- Studio 0.8 instalācijām tiek piedāvāts 0.8.1 caur {{ui:Iestatījumi}} › {{ui:Atjauninājumi}}.

### Vēl nav šajā versijā

- **Nav koda parakstīts.** Windows instalētājiem un macOS .dmg vēl nav paraksta. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Vairāk informācijas}}, pēc tam {{ui:Palaist tomēr}}. Macintosh datorā ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. Veikalu versijas ir apturētas.
- **Pieslēgt savu AI vietām vēl nav pabeigts.** Vienas pogas pieslēgšana Studio iekšienē, mitinātais savienotājs pārlūka palīgiem un jūsu pašu API atslēga Studio iekšienē šim izlaidumam nav apsolīti. Uzdevumu cikls ir pārbaudīts, bet vēl nav izmēģināts ar reālu palīgu.
- **Uzdevumu pārbaudēm vajag vienu un to pašu lapas izmēru.** Lapa, kas pārdrukāta citā izmērā, neatbilst, tāpēc tās uzdevumi neaizveras. Lapas tiek savienotas pēc lapas numura, citādi pēc lapas pozīcijas.
- **Balss piezīmes ir tikai ieraksti.** Transkripta nav, un palīgs redz piezīmes garumu, autoru un parakstu, nevis skaņu. Ierakstīšana tika izmēģināta ar mākslīgu mikrofonu bezgalvas pārlūkprogrammā; īsts mikrofons tālrunī, planšetdatorā vai klēpjdatorā vēl jāpārbauda.
- **Aprēķinu lapas un iemesli PDF** tiek glabāti privātā faila ierakstā. Vecāka MarkupCraft to ignorē un izdzēš nākamajā reizē, kad saglabā failu, tāpēc atveriet un saglabājiet šādu failu ar 0.8 vai jaunāku versiju.
- **Meldētāja puse pārskatīšanas atzīmēm.** CadCraft nolasīšana un atbildēšana uz redline failu vēl nav izveidota.
- **Citas valodas.** Tamilu valodas lietotnes josla pārsniedz robežas par 528 px.

Visu pārējo skat. [Kas vēl nav izveidots](topic:not-built-yet). Iepriekšējam izlaidumam skat. [Jaunumi 0.7 versijā](topic:whats-new-0-7).

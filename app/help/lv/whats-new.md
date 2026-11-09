---
title: Kas jauns 0.8 un 0.8.1 versijā
summary: Atzīmes, kas kļūst par uzdevumiem un pašas aizveras, vienkāršs saraksts ar izmaiņām starp versijām, balss piezīmes un lēmumi uz plāna, redline faili melnraksta autoram un kopīgās 0.8 izmaiņas: ievades ierīces, rīkjoslas rindas, problēmas, vairāk valodu.
keywords: kas jauns, jaunumi, versiju piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, uzdevums, uzdevumi, izpildītājs, termiņa diena, nokavēts, pārbaudīt tagad, kas mainījās, versijas, salīdzināt, balss piezīme, lēmums, redline, atbilžu fails, melnraksta autors, palīgs, mcp, problēmas, valodas, ievades ierīces, skārienpaliktnis, rīkjoslas rindas, rekvizītu režģis, atjaunināt
from: 40368796
---

Šis ir tas, kas mainījies MarkupCraft 0.8 un 0.8.1 versijā, salīdzinot ar 0.7. Lielākā jaunā iespēja ir tā, ka atzīme var būt uzdevums, ko veic kāds cilvēks vai jūsu pats palīgs, un tas aizveras pats, kad rasējums patiešām mainās.

## Jauns

### Atzīmes, kas darbojas

- **Padarīt atzīmi par uzdevumu.** Atlasiet vienu vai vairākas atzīmes, atveriet cilni {{ui:Uzdevumi}} un izvēlieties {{ui:Padarīt atlasīto par uzdevumu}}. Uzdevumam ir nosaukums, persona vai jūsu savienotais palīgs, kas to izpildīs, pēc izvēles termiņa diena un stāvoklis, un tas saglabā savu vietu lapā un savu pavedienu. Skatiet [Padarīt atzīmi par uzdevumu](topic:markups-that-act).
- **Uzdevumi, kas aizveras paši.** Uzdevums var novērot rasējumu savas atzīmes iekšienē. Atveriet jaunāku lapas versiju un izvēlieties {{ui:Pārbaudīt tagad}}: ja līnijas tajā apgabalā mainījās vairāk nekā par matu, uzdevums tiek atzīmēts kā Done, tā atzīme kļūst par Completed un pavediena piezīme pasaka, kas mainījies. Jauns datuma zīmogs vai līnijas, kas pārvietojās mazāk nekā par 1.5 punktiem, neskaitās. Uzdevums var arī novērot modeļa elementu: jūsu palīgs ziņo par elementu ar `tasks_check`, un vēlāks atšķirīgs ziņojums vai dzēsts elements aizver uzdevumu. Viens atsaukšanas solis to atkal atver.
- **Atrodiet darbu.** Filtrējiet {{ui:Uzdevumi}} sarakstu pēc stāvokļa un pēc tā, kam tas paredzēts, arī pēc {{ui:Nokavēts}}; izvēlieties {{ui:Piešķirts}}, tad {{ui:Palīgs}}, lai redzētu, kas gaida jūsu palīgu. Uzdevums, kura termiņa diena ir pagājusi, Problēmu panelī parādās kā brīdinājums. {{ui:CSV}} eksportē sarakstu. Uzdevumi tiek saglabāti PDF failā kopā ar atzīmi un ar Live pārvietojas kā citas atzīmju īpašības.

### Kas mainījies, vienkāršā sarakstā

- **Uzskaitīt izmaiņas.** Atveriet cilni {{ui:Salīdzināt}}, tad {{ui:Salīdzināt visu komplektu}}, izvēlieties agrāko un vēlāko failu un izvēlieties {{ui:Uzskaitīt izmaiņas}}. Saraksts sākas ar skaitu un pēc tam aptver katru mainīto lapu, lielākās izmaiņas pirmās: kur lapā, cik lielas (reālās vienībās, kā arī papīra collās kalibrētā lapā), vai līnijas pievienotas vai noņemtas, cik atzīmju tur atrodas un kuri vārdi parādījās vai pazuda. {{ui:Kopēt sarakstu}} ievieto to starpliktuvē, un {{ui:CSV}} raksta vienu rindu katrai izmaiņai. Skatiet [Uzskaitīt, kas mainījies starp versijām](topic:what-changed-in-words).

### Balss piezīmes un lēmumi

- **Balss piezīmes.** Cilnē {{ui:Piezīmes}} izvēlieties {{ui:Ierakstīt balss piezīmi}}, tad {{ui:Apturēt ierakstīšanu}}; ieraksti apstājas paši pēc divām minūtēm. Piezīme tiek piespraudīta lapas centrā, to velciet, kur tai jābūt, un ierakstiet parakstu sadaļā {{ui:Rekvizīti}}. Sarakstā {{ui:Atskaņot}} to atskaņo. Ieraksts tiek saglabāts PDF failā.
- **Lēmumi.** {{ui:Piespraust lēmumu}} uzraksta vienu vai divus teikumus uz lapas. Ja tas aizstāj iepriekšēju lēmumu, izvēlieties to sadaļā {{ui:Tas aizstāj}}: vecais paliek, tiek atzīmēts kā Replaced un norāda uz jauno. Viens atsaukšanas solis to atceļ. Skatiet [Piespraust balss piezīmes un lēmumus uz lapas](topic:voice-notes-and-decisions).

### Pārskatīšanas atzīmes uz versiju

- **Sūtīt un atbildēt.** Cilnē {{ui:Uzdevumi}} atveriet {{ui:Pārskatīšanas atzīmes uz versiju}}, ierakstiet versiju, pret kuru atzīmes ir, un izvēlieties {{ui:Eksportēt redline failu}}. Iegūsiet `.redline.json` failu ar vienu vienumu katrai atvērtai atzīmei: lapa, pozīcija (kā lapas daļas, tāpēc pārdrukāšana citā izmērā joprojām sakrīt), vārdi, autors, pavediens un tā uzdevums. Tas, kas veic izmaiņas, atbild Accepted, Rejected vai Done failā `.redline-answers.json`. {{ui:Ielādēt atbilžu failu…}} katrai atzīmei piešķir šo statusu un melnraksta autora piezīmi kā vienu atsaukšanas soli. Skatiet [Nosūtīt atzīmes melnraksta autoram kā redline](topic:redline-to-revision).

### AI palīgi

- **Vairāk rīku.** Palīgs, ko savienojāt caur CadCraft Studio, var uzskaitīt uzdevumus (`tasks_list`), izveidot vai mainīt vienu (`task_set`), noņemt uzdevumu (`task_clear`), pārbaudīt vienu pret jaunāku versiju vai elementu (`tasks_check`) un nolasīt vienkāršu izmaiņu sarakstu starp divām atvērtām plānu kopām (`revisions_changes`). Tas saņem tikai tos rīkus, kurus atzīmējāt zem slēdža Palīgs, un katra izmaiņa ir viens atsaukšanas solis. Skatiet [Izmantot MarkupCraft ar AI palīgu](topic:use-with-ai-assistants).

## Katrā lietotnē

- **Valodas.** CadCraft Studio tagad ir 54 valodas. Desmit ir jaunas: lietuviešu, latviešu, bosniešu, maratī, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku. Visas ne-angļu valodas ir mašīntulkojuma melnraksti, kamēr tās neizlasa dzimtās valodas runātājs.
- **Ievades ierīces.** {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Ievades ierīces}} nosaka, ko dara skārienpaliktnis, jūsu peles sānu pogas, pildspalva, pieskārieni, 3D pele, spēļu kontrolieris vai MIDI kontrolieris, visām lietotnēm vai tikai šai. Kamēr nemainīsiet ko, katra ierīce darbojas kā iepriekš. Skatiet [Izmantot skārienpaliktni, 3D peli vai kontrolieri](common:input-devices).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} piedāvā {{ui:Pārnest}} (noklusējums), {{ui:2 rindas}} un {{ui:1 rinda}}, lai zīmējumam būtu vairāk vietas. Skatiet [Izkārtot paneļus](common:arrange-panels).
- **Rekvizītu režģis.** Atzīmes Stils lauki izmanto kopīgo režģi ar sakļaujamām kategorijām un nosaukuma un vērtības kolonnām.
- **Problēmu panelis.** Lietotnes brīdinājumi, piemēram, nokavēts uzdevums, apkopojas vienā Problēmu panelī.
- **Live un papildinājumi.** Live sesijas ir aprakstītas sadaļā [Strādāt kopā reāllaikā](common:work-together-live). Papildinājumu saraksts, kas seko jūsu kontam, ir aprakstīts sadaļā [Papildinājumi un jūsu konta saraksts](common:addons-basics).
- **Savienojiet savu AI.** CadCraft Studio ir centrs jūsu pašu palīgam: savienojiet vienreiz visām astoņām lietotnēm. Lietotnēs pašas par sevi AI nav.

## Labots 0.8.1 versijā

- **Studio var mainīt valodu, kamēr darbojas.** Iepriekš darbvirsmas lietotne un paketētie izdevumi palika angļu valodā. Tas vēl nav pārbaudīts visās platformās: pastāstiet mums, ja valoda nemainās.
- Studio 0.8 instalācijām 0.8.1 tiek piedāvāts caur {{ui:Iestatījumi}} › {{ui:Atjauninājumi}}.

## Vēl nav šajā versijā

- **Nav koda paraksta.** Windows instalētājiem un macOS .dmg vēl nav paraksta. Ja Windows SmartScreen aptur instalētāju, izvēlieties {{ui:Papildu informācija}}, pēc tam {{ui:Palaist tomēr}}. Mac datorā noklikšķiniet ar peles labo pogu uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. Veikala versijas ir apturētas.
- **Savienošana ar AI vietām vēl nav pabeigta.** Vienas pieskaršanas savienošana Studio iekšienē, mitinātais savienotājs pārlūkprogrammu palīgiem un jūsu pašu API atslēga Studio iekšienē šim laidienam nav solīti. Uzdevumu cilpa ir pārbaudīta, bet vēl ne ar īstu palīgu.
- **Uzdevumu pārbaudēm vajag vienādu lapas izmēru.** Lapa, kas pārdrukāta citā izmērā, nesakritīs, tāpēc tās uzdevumi neaizvērsies. Lapas tiek savienotas pēc lapas numura, citādi pēc lapas pozīcijas.
- **Balss piezīmes ir tikai ieraksti.** Transkripta nav, un palīgs redz piezīmes garumu, autoru un parakstu, nevis skaņu. Ierakstīšana tika izmēģināta ar viltus mikrofonu bezgalvas pārlūkprogrammā; īsts mikrofons tālrunī, planšetdatorā vai klēpjdatorā vēl jāpārbauda.
- **Aprēķinu lapas un iemesli PDF failā** tiek glabāti privātā failā ieraksta iekšienē. Vecāka MarkupCraft versija to ignorē un izmet nākamajā reizē, kad saglabā failu, tāpēc atveriet un saglabājiet šādus failus ar 0.8 vai jaunāku versiju.
- **Melnraksta autora puse redline failiem.** CadCraft, kas nolasa redline failu un uz to atbild, vēl nav izveidots.
- **Citas valodas.** Tamilu valodas lietotnes josla pārsniedz robežu par 528 px.

Viss pārējais ir sadaļā [Kas vēl nav izveidots](topic:not-built-yet). Par iepriekšējo laidienu skatiet [Kas jauns 0.7 versijā](topic:whats-new-0-7).

---
title: Faili, ko MarkupCraft atver un saglabā
summary: PDF ievadei, PDF kopija ar atzīmēm kā izvade, kā arī CSV, BCF un rīku kastes faili; kur kurš tiek saglabāts, tiešsaistē un bezsaistē.
keywords: pdf, atvērt, saglabāt, eksportēt, lejupielādēt, csv, bcf, bcfzip, json, rīku kaste, failu tipi, formāti, augšupielādēt, parole, šifrēts
from: b3045b4c
---

## Ko MarkupCraft atver

| Fails | Kā | Kas notiek |
|---|---|---|
| PDF (`.pdf`) | {{ui:Atvērt}}, {{key:Mod+O}} vai nometiet lapu apgabalā. Vairāki uzreiz ir pieļaujami. | Katra lappuse kļūst par lapu. Atzīmes, kas jau ir failā, tiek nolasītas atpakaļ (zemāk). |
| Rīku kaste (`.json`) | Cilne {{ui:Rīki}}, pēc tam {{ui:Importēt}} | Rīki tiek pievienoti jūsu rīku kastei. Skatiet [Rīku kaste](topic:tool-chest). |

Jebkas cits tiek noraidīts ar ziņu "MarkupCraft atver tikai PDF failus." statusa joslā. Ja nometat dažādus failus, PDF faili tiek atvērti, un statusa joslā tiek rādīts, cik failu nebija PDF.

### Atzīmes, kas jau ir PDF failā

- **MarkupCraft saglabātās atzīmes** atgriežas precīzi: tips, stils, autors, datumi, statuss, atbildes, defektu numurs, lapas mērogs un visi lapu nosaukumi, ko esat ievadījis.
- **Komentāri no citām PDF programmām** arī tiek nolasīti. Taisnstūri, elipses, līnijas un bultiņas, polilīnijas, daudzstūri, tintes (pildspalvas) līnijas, teksta lodziņi un līmlapiņas kļūst par parastām, rediģējamām MarkupCraft atzīmēm. To atbildes un pārskatīšanas statusi tiek saglabāti.
- **Viss pārējais** (teksta iezīmējumi, kas veidoti, atlasot tekstu, citu programmu zīmogi un citi veidi) tiek rādīts tāds, kāds tas ir, un atzīmēts kā tikai lasāms. Var to atlasīt, redzēt atzīmju sarakstā un atbildēt uz to, bet nevar pārvietot, mainīt vai dzēst.
- Saites un formu lauki netiek mainīti un nav uzskaitīti.
- Citas programmas saglabāts mērogs (mērījumu skats) tiek izmantots kā lapas mērogs, ja MarkupCraft saprot tā mērvienību.

### Faili, kas netiek atvērti

- PDF, kuram nepieciešama parole: '"name" atvēršanai nepieciešama parole. Atveriet kopiju bez paroles.'
- Bojāts fails vai fails, kas nav īsts PDF: '"name" nevarēja nolasīt kā PDF (…)'.
- PDF, kas ir aizsargāts pret izmaiņām, atveras normāli. Saglabāšana tam tiek noraidīta (skatiet tālāk).

Ja vairāki faili tiek atvērti vienlaikus, darbojošies faili tiek atvērti, un logs ar nosaukumu "Daži faili netika atvērti" uzskaita pārējos.

## Ko MarkupCraft saglabā

Saglabāšana vienmēr ir jauna faila **lejupielāde**. Tīmekļa lapa nevar pārrakstīt failu jūsu datorā, un MarkupCraft nekad nemaina jūsu oriģinālu.

| Jūs izvēlaties | Jūs saņemat | Piezīmes |
|---|---|---|
| {{ui:Saglabāt}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Oriģinālā PDF kopija ar katru atzīmi, kas ierakstīta kā īsts PDF komentārs. Atkārtoti saglabājot failu "(marked up)", nosaukums paliek tāds pats; tas nekad nekļūst par "(marked up) (marked up)". Skatiet [Atzīmētā PDF saglabāšana](topic:save-the-marked-up-pdf). |
| Cilne {{ui:Atzīmes}}, pēc tam {{ui:CSV}} | "<name> markups.csv" | Atzīmes tādas, kādas tās redzamas sarakstā (tiek piemēroti filtri). |
| Cilne {{ui:Atzīmes}}, pēc tam {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 BIM koordinācijas rīkiem, viens momentuzņēmums katrai atzīmei. Skatiet [BCF pamati](topic:bcf-basics). |
| Cilne {{ui:Defektu saraksts}}, pēc tam {{ui:Eksportēt CSV}} | "<name> punch list.csv" | Defektu punkti numuru secībā. |
| Cilne {{ui:Rīki}}, pēc tam {{ui:Eksportēt}} | "MarkupCraft tool chest.json" | Jūsu rīku kaste, ko kopīgot vai paturēt. |

"<name>" ir pirmā atvērtā PDF faila nosaukums bez ".pdf".

CSV failus var atvērt jebkurā izklājlapā. Tie ir UTF-8 kodējumā ar marķieri, ko izklājlapas meklē, tāpēc nosaukumi ar diakritiskajām zīmēm tiek parādīti pareizi. Šūna, kas sākas ar =, +, - vai @, saņem vadošu apostrofu, lai izklājlapa to nekad neizpildītu kā formulu.

## Kur nonāk lejupielādes

Pārlūks izlemj: parasti tā ir jūsu mape Lejupielādes, vai arī tas jautā katru reizi, ja tā iestatīts. Skatiet [Pārlūki un datori](common:browsers#what-differs-between-browsers).

:::chromium
Ja vienlaikus saglabājat visus mainītos komplekta failus, Chrome un Edge var jautāt, vai šī vietne drīkst lejupielādēt vairākus failus. Izvēlieties {{ui:Atļaut}}, citādi saņemsiet tikai pirmo kopiju.
:::

:::safari
iPad planšetdatorā Safari jautā pirms katras lejupielādes un ievieto failu lietotnē Faili, mapē Lejupielādes. Mac datorā fails tiek saglabāts mapē, kas iestatīta Safari iestatījumos.
:::

## Tiešsaistē un bezsaistē

- **Jūsu PDF faili nekad neatstāj šo datoru**, ne tiešsaistē, ne bezsaistē. Nekur nenotiek augšupielāde.
- PDF lasītājs tiek ielādēts pirmoreiz, kad atverat PDF ("Ielādē PDF lasītāju…"), un PDF rakstītājs pirmoreiz, kad saglabājat ("Ielādē PDF rakstītāju…") vai atverat failu, kurā jau ir komentāri.
- Ar savienojumu abi tiek ielādēti no vietnes.
- **Lai strādātu bez savienojuma,** kamēr esat tiešsaistē, augšējā joslā izvēlieties {{ui:Saglabāt bezsaistei}}. Poga rāda "Saglabā N no M", pēc tam "Gatavs bezsaistei". Šī kopija ietver PDF lasītāju un PDF rakstītāju (kopā apmēram 6 MB) un šo palīdzību, tāpēc pēc tam PDF failu atvēršana, atzīmēšana un saglabāšana šajā pārlūkā darbojas bezsaistē.
- Ja poga rāda "Nevarēja saglabāt", daži faili netika lejupielādēti: pārbaudiet savienojumu un noklikšķiniet uz tās vēlreiz. Ja tā rāda "Bezsaistes režīms nav pieejams", šis pārlūka logs nevar saglabāt bezsaistes kopiju (privātie logi un dažas pārvaldītas ierīces); izmantojiet parastu logu.
- Lai atjauninātu vai noņemtu kopiju, noklikšķiniet uz "Gatavs bezsaistei" un izvēlieties "Saglabāt vēlreiz (iegūt jaunāko versiju)" vai "Noņemt bezsaistes kopiju". Vairāk: [Darbs bezsaistē](common:offline).

:::offline
Jūs esat bezsaistē. Ja augšējā joslā rakstīts "Gatavs bezsaistei", viss darbojas, arī saglabāšana. Ja nav, un šajā cilnē vēl neesat saglabājis, {{ui:Saglabāt}} var neizdoties ar kļūdu "PDF rakstītājs nevarēja ielādēties". Jūsu atzīmes joprojām ir cilnē: atstājiet to atvērtu, atgriezieties tiešsaistē un vēlreiz izvēlieties {{ui:Saglabāt}}.
:::

## Lietas, kas jāzina

- Lieli rasējumu komplekti atveras kādu laiku: MarkupCraft nolasa katras lapas tekstu, lai atrastu lapu numurus. Statusa josla skaita lapas, kamēr tās apstrādā.
- Ja atverat to pašu PDF divreiz, tā lapas tiek pievienotas divreiz. Ja tā notiek, aizveriet komplektu un atveriet to vēlreiz.
- {{ui:Aizvērt}} aizver visus atvērtos failus uzreiz. Ja kādiem ir nesaglabātas atzīmes, tas jautā: {{ui:Atcelt}}, {{ui:Aizvērt bez saglabāšanas}} vai {{ui:Vispirms saglabāt kopijas}}.
- Mākoņa saglabāšana vēl nav pieejama, un darbvirsmas versiju vēl nav. Glabājiet savus PDF failus kopā ar citiem projekta failiem un dublējiet tos kā parasti. Skatiet [Kur nonāk jūsu faili](common:your-files).

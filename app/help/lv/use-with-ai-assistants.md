---
title: MarkupCraft lietošana ar MI asistentu
summary: Ļaujiet savam MI asistentam vai skriptam uzskaitīt kopas atzīmes, pievienot vienkāršas, iestatīt statusu, atbildēt un eksportēt sarakstu: atļaujas, savienošana ar CadCraft Studio un aktivitātes žurnāls.
keywords: mi, asistents, aģents, mcp, modeļa konteksta protokols, skripts, automatizācija, atzīmes, pārskatīšana, atļaujas, atvienot, aktivitāte
from: 095f2977
---

## Ko jūs iemācīsieties

Kā ļaut MI asistentam (vai jūsu rakstītam skriptam) strādāt ar MarkupCraft un kā izlemt, ko tam atļauts aiztikt.

MarkupCraft **pats nesatur MI** un nekam neko nenosūta. Asistentu atnesat jūs: jebkuru programmu, kas runā Model Context Protocol (MCP) valodā. MarkupCraft tam tikai dod rīkus, un jūs izvēlaties, kurus.

## Ieslēgt

1. Atveriet {{ui:Iestatījumi}} (zobrats lietotnes joslā vai {{key:Mod+,}}) un dodieties uz cilni {{ui:MarkupCraft}}.
2. Sadaļā {{ui:Asistenti}} atzīmējiet **Ļaut MI asistentiem un skriptiem izmantot MarkupCraft**. Tas ir izslēgts, līdz to darāt.
3. Izvēlieties, ko tas drīkst darīt: **Lasīt** sākumā ir atzīmēts; atzīmējiet **Rediģēt**, **Saglabāt** vai **Eksportēt** tikai tad, kad tie vajadzīgi.

Rīki ārpus atzīmētajām atļaujām asistentam netiek piedāvāti, un, ja tas tomēr pieprasa kādu no tiem, MarkupCraft to noraida un pieraksta aktivitātes žurnālā. Izslēdzot slēdzi, uzreiz beidzas visi savienojumi; {{ui:Atiestatīt MarkupCraft iestatījumus}} to izslēdz arī.

## Pieslēgt asistentu

Asistenti savienojas caur **CadCraft Studio** jūsu datorā: Studio darbina nelielu serveri, ko var sasniegt tikai šis dators, aizsargātu ar marķieri, ko tas izveido katru reizi, kad sākas. Studio izvēlieties {{ui:Pieslēgt asistentu}} un nokopējiet adresi un marķieri savā asistentā (Studio parāda precīzos iestatījumus, ko ielīmēt). Nekad nekopīgojiet marķieri.

:::note
Pārlūkprogrammas cilne nevar atvērt savienojumu asistentam: pārlūkprogrammas lietotnēs slēdzim nav iedarbības, kamēr neizmantojat CadCraft Studio savā datorā.
:::

## Jūs paliekat vadībā

- **Katra izmaiņa ir viens atsaukšanas solis**, ar nosaukumu, ko dod asistents (piemēram, "Asistents: pievienot cloudrect"). {{key:Mod+Z}} atsauc asistenta pēdējo izmaiņu kopumā.
- **Jūs zināt, kad asistents ir pieslēgts.** Lietotnes joslas poga rāda asistenta nosaukumu, kamēr tas ir pieslēgts; noklikšķiniet uz tās, lai redzētu, ko tas drīkst, vai lai to **atvienotu**.
- **Aktivitāte.** {{ui:Iestatījumi}} › {{ui:MarkupCraft}} › {{ui:Asistenti}} › {{ui:Aktivitāte}} uzskaita katru izsaukumu: kad, kurš rīks, izpildīts vai noraidīts. {{ui:Saglabāt žurnālu}} saglabā kopiju.

## Ko asistents var prasīt

| Rīks | Atļauja | Ko tas dara |
|---|---|---|
| `app_info`, `sheets_list` | Lasīt | Atvērtās kopas, to lapas un cik atzīmju katrā |
| `markups_list` | Lasīt | Atzīmes ar tipu, lapu, tekstu, komentāru, mērījumu, statusu, autoru un atbildēm, filtrētas pēc lapas, statusa, tipa vai autora |
| `markup_add` | Rediģēt | Pievieno lapai taisnstūri, mākoni, elipsi, teksta lodziņu, piezīmi, līniju vai bultu |
| `markup_status`, `markup_reply` | Rediģēt | Iestata atzīmes statusu (ierakstīts tās pavedienā, parakstīts ar asistentu); pievieno komentāru pavedienam |
| `markups_export` | Eksportēt | {{ui:Atzīmes}} saraksta paša CSV vai BCF ar to, ko saraksts rāda (filtri, kā tos iestatījāt); Studio tas var ierakstīt failu mapē, kuru atļāvāt |
| `tasks_list` | Lasīt | Atzīmes, kas ir uzdevumi: izpildītājs (persona vai asistents), termiņa diena, stāvoklis, saite, kā tās aizvērtas. `assignee: "assistant"` uzskaita darbu, kas gaida asistentu |
| `task_set`, `task_clear` | Rediģēt | Padara atzīmi par uzdevumu vai maina to (nosaukums, izpildītājs, termiņš, stāvoklis, saite); noņem uzdevuma statusu |
| `tasks_check` | Rediģēt | Aizver uzdevumus, kuru saistītā rasējuma zona vai modeļa elements patiešām mainījās; nodod elementu stāvokļus, ko nolasījāt no citas lietotnes |
| `revisions_changes` | Lasīt | Vienkāršs saraksts par to, kas mainījās starp divām atvērtām plānu kopām, lai to varētu pārfrāzēt savos vārdos |
| `pins_list`, `decision_add` | Lasīt, Rediģēt | Balss piezīmes (garums, kas, kad, paraksts; nekad skaņa, nekāda transkripcija) un lēmumi; piespraust lēmumu un aizstāt agrāku |
| `redline_export`, `redline_answer` | Eksportēt, Rediģēt | Ierakstīt sarkanās līnijas failu projektētājam; pielietot projektētāja atbildes |

Atzīmē, ko pievieno asistents, par autoru norādīts nosaukums, ko asistenta programma pati sev dod, kam seko "(asistents)", vai "(asistents jūsu vārdā: <jūsu vārds>)", kad esat iestatījis pārskatītāja vārdu. Tā statusa maiņas un atbildes parakstītas tāpat. Katra ir viens atsaukšanas solis. Atzīmētā PDF saglabāšana paliek jums: izmantojiet {{ui:Saglabāt}} kā parasti.

Neatverot MarkupCraft, CadCraft MCP serveris uzskaita PDF atzīmes mapē, kuru nosaucat (`markups_list`), un `cadcraft info Set.pdf` tās izdrukā komandrindā.

## Ja kaut kas nedarbojas

- **MI asistents neredz MarkupCraft rīkus:** pārbaudiet, vai slēdzis ir ieslēgts šajā logā un vai logs ir atvērts Studio.
- **"needs the edit permission":** nepieciešama rediģēšanas atļauja. Atzīmējiet {{ui:Rediģēt}} sadaļā {{ui:Asistenti}} un pēc tam jautājiet vēlreiz.
- **"401" vai "token" kļūdas:** marķieris mainījās (Studio tika restartēts vai izvēlējāties {{ui:Jauns marķieris}}). Nokopējiet jauno marķieri asistenta iestatījumos.

## Skatīt arī

- [Receptes MI asistentiem](common:assistants-recipes): darba piemēri, katrs ar rīkiem, ko tas izsauc.

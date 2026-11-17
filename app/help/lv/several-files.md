---
title: Strādāt ar vairākiem failiem vienlaikus
summary: Atvērt daudzus PDF kā vienu komplektu, atrast lapas starp failiem, kopēt atzīmes starp tiem un saglabāt katra faila kopiju.
keywords: vairāki faili, vairāki pdf, plānu komplekts, komplekts, pakete, daudzi faili, apvienot, disciplīnas, arhitektūra, konstrukcijas, mehānika, saglabāt visu, aizvērt
from: f59354ae
---

Plānu komplekts bieži nāk kā viens PDF katrai disciplīnai vai viens PDF katrai lapai. MarkupCraft visu, ko atverat, traktē kā **vienu komplektu**.

## Atvērt kopā

Izvēlieties visus PDF failus failu atlasītājā uzreiz vai nometiet tos visus lapu apgabalā. Lai vēlāk pievienotu vēl, atveriet tos tādā pašā veidā; tie pievienojas {{ui:Lapas}} saraksta beigām atvēršanas secībā.

Rezultāts: "Atvērti 6 faili (84 lapas komplektā)." Katra lappuse ir lapa. Lapas ar lapas numuru zem nosaukuma rāda "Lapa A-101"; pārējās rāda failu un lappusi.

Nav saglabāta "komplekta" faila: nākamreiz atveriet tos pašus PDF failus vēlreiz (saglabātās kopijas "(marked up)", ja saglabājāt).

## Visā komplektā

- **Atrast lapu:** {{ui:Meklēt lapas}} meklē lapu numuros, lapu nosaukumos un failu nosaukumos katrā failā. {{key:PageUp}} un {{key:PageDown}} iet cauri visu failu visām lapām pēc kārtas.
- **Atzīmju saraksts:** cilne {{ui:Atzīmes}} uzskaita atzīmes no katra faila. Filtrējiet pēc {{ui:Lapa}}, lai to sašaurinātu. CSV ir kolonna Fails.
- **Defektu saraksts:** viena numerācija visam komplektam.
- **Salīdzināšana:** vecā un jaunā lapa var nākt no dažādiem failiem.
- **Kopēšana un ielīmēšana:** {{key:Mod+C}} vienā lapā un {{key:Mod+V}} citā, jebkurā failā. Kopija nolaižas tajā pašā vietā uz lappuses, nedaudz nobīdīta.

## Saglabāt

Izvēlieties {{ui:Saglabāt}}. Ja ir atvērti vairāk nekā viens fails, MarkupCraft jautā:

- {{ui:Šis fails}}: atzīmētas kopijas fails lapai, kurā atrodaties.
- {{ui:Katrs mainītais fails}}: katra faila kopija ar nesaglabātām izmaiņām. Katra tiek lejupielādēta atsevišķi kā "<file name> (marked up).pdf".
- {{ui:Atcelt}}

:::chromium
Pirmo reizi saglabājot vairākus failus vienlaikus, Chrome un Edge var jautāt, vai šī vietne drīkst lejupielādēt vairākus failus. Izvēlieties {{ui:Atļaut}}; citādi pienāk tikai pirmā kopija.
:::

:::safari
Safari var jautāt vienu reizi katram failam. iPad ierīcē katra kopija nonāk lietotnē Faili.
:::

Fails, kura atzīmes tika saglabātas, vairs netiek skaitīts kā mainīts; pārējie joprojām tiek.

CSV, BCF un defektu saraksta eksporti tiek nosaukti pēc **pirmā** faila, ko atvērāt.

## Aizvērt

{{ui:Aizvērt}} aizver visu komplektu; vēl nav iespējams aizvērt tikai vienu failu. Ja kaut kas nav saglabāts, tas jautā:

- {{ui:Atcelt}}: nekas nenotiek.
- {{ui:Aizvērt bez saglabāšanas}}: nesaglabātās atzīmes tiek zaudētas.
- {{ui:Vispirms saglabāt kopijas}}: saglabā katru mainīto failu un tad aizver.

Aizverot, tiek notīrīta arī atsaukšanas vēsture.

## Lieli komplekti

- Katras lappuses teksts tiek nolasīts atverot, lai atrastu lapu numurus, tāpēc 100 lapu komplekts prasa laiku. Statusa josla skaita lapas, kamēr tās apstrādā.
- Lapu attēli sarakstā tiek zīmēti, kad ritināt līdz tiem.
- Katrs atvērtais PDF tiek turēts pārlūkprogrammas cilnes atmiņā. Ja cilne palēninās, aizveriet citas smagas cilnes vai pārskatiet vienu disciplīnu vienlaikus.
- Ja atverat to pašu failu divreiz, iegūstat divas tā lapu kopijas. Ja tā notiek, izvēlieties {{ui:Aizvērt}} un atveriet komplektu vēlreiz.

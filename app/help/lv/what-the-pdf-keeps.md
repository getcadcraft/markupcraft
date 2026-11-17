---
title: Kas tiek saglabāts PDF failā
summary: Precīzi, kas ietver atzīmēto kopiju, ko redz citas PDF programmas un kas tiek nolasīts atpakaļ, kad fails tiek atvērts.
keywords: pdf anotācijas, komentāri, saglabātie dati, pilnais cikls, lapu etiķetes, mērījums, pārskatīšanas stāvoklis, atbildes, savietojamība, atkārtota atvēršana, privāti dati
from: 6439ad28
---

Atzīmētā kopija ir sākotnējais PDF ar pievienotiem komentāriem (PDF anotācijām). Pašas lapas, to rasējumi, teksts, grāmatzīmes un saites tiek nokopētas tādas, kādas bija.

## Katra atzīme

| MarkupCraft | Saglabāts kā | Citi PDF skatītāji rāda |
|---|---|---|
| Taisnstūris, kastes mākonis | Kvadrāta anotācija (mākonis: mākoņveida rāmis) | Taisnstūra vai mākoņa komentāru |
| Elipse | Riņķa anotācija | Elipses komentāru |
| Daudzstūris, brīvais mākonis | Daudzstūra anotācija (mākonis: mākoņveida rāmis) | Daudzstūra vai mākoņa komentāru |
| Polilīnija | PolyLine anotācija | Polilīnijas komentāru |
| Līnija, bulta | Līnijas anotācija (bulta: slēgts bultas gals) | Līnijas vai bultas komentāru |
| Garums | Līnijas anotācija, atzīmēta kā izmērs, ar mērījumu | Garuma mērījumu, ja skatītājs tos atbalsta |
| Laukums | Daudzstūra anotācija, atzīmēta kā laukums, ar mērījumu | Laukuma mērījumu, ja tas tiek atbalstīts; citādi daudzstūri |
| Skaitīšanas grupa | Viena tintes anotācija ar riņķi katram vienumam; tās teksts ir "group: n" | Tintes komentāru |
| Pildspalva, marķieris | Tintes anotācija (marķieris atzīmēts kā tāds) | Tintes komentāru |
| Teksts | Brīvā teksta anotācija | Teksta lodziņa komentāru |
| Norāde | Brīvā teksta anotācija ar norādes līniju | Norādes komentāru |
| Piezīme | Teksta anotācija | Līmlapiņu, kas atveras ar savu tekstu |
| Zīmogs | Zīmoga anotācija | Zīmoga komentāru |

Katra no tām tiek saglabāta ar:

- **savu izskatu**, zīmētu tieši tā, kā MarkupCraft to rāda ekrānā, lai tā izskatītos vienādi jebkurā skatītājā un drukātos tāpat, arī ar punch numura nozīmīti;
- **autoru**, **izveides un labošanas datumiem**, **tematu**, **komentāra tekstu** (teksta lodziņiem un norādēm: tekstu un komentāru), **krāsu** un **necaurredzamību**;
- **savu MarkupCraft informāciju** privātā ierakstā, ko citas programmas ignorē: statuss, punch vienums, stils un tips, lai tā atveras tieši tāda pati.

## Pavedieni un statusi

- Katra atbilde tiek saglabāta kā atbildes komentārs, kas saistīts ar tās atzīmi, ar autoru, datumu un tekstu. Atbildēm uz lapas nav savas ikonas.
- Katra statusa maiņa tiek saglabāta kā atbilde ar pārskatīšanas stāvokli. Citi pārskatīšanas rīki to rāda kā Accepted, Rejected vai Completed; Open tiek saglabāts bez stāvokļa.
- Atzīme ar statusu, kas nav Open, bet kurai nav reģistrētas statusa maiņas, saņem vienu pārskatīšanas stāvokļa atbildi, lai arī citas programmas redzētu statusu.
- Atbildes uz tikai lasāmiem komentāriem no sākotnējā faila tiek saglabātas tādā pašā veidā, saistītas ar šo komentāru.

## Katra lapa

- **Mērogs:** kalibrētā lapa saņem mērījumu skata logu, kas pārklāj lapu (standarta veids, kā glabāt lapas mērogu), un MarkupCraft savu kalibrācijas kopiju.
- **Lapas numurs:** numurs, ko ievadāt ar {{ui:Pārdēvēt lapu}}, kļūst par lapas etiķeti. Ja kādai faila lapai ir etiķete, katrai šī faila lapai tiek piešķirta etiķete: ievadītais numurs, citādi vecā etiķete, citādi lapas numurs.
- **Lapas nosaukums:** ievadītais nosaukums tiek saglabāts tikai MarkupCraft; citi skatītāji to nerāda.

## Teksts un rakstzīmes

Teksts tiek rakstīts fontā Helvetica, ko atbalsta katrs PDF skatītājs. Rakstzīmes ārpus Rietumeiropas kopas (Windows-1252) kopijā drukājas kā "?"; saglabāšanas ziņojums tās saskaita.

## Aprēķinu lapas un iemesli

Aprēķinu lapas un iemesli tiek glabāti PDF privātā ierakstā ar nosaukumu `/MarkupCraftShell`. Citas PDF programmas to ignorē. Vecāka MarkupCraft versija arī to ignorē un izdzēš nākamajā reizē, kad saglabā šo failu.

## Kas notiek ar komentāriem, kas jau bija

Atverot PDF, kuram jau ir komentāri:

- MarkupCraft savus komentārus nolasa precīzi. Ja cita programma kādu pārvietoja vai mainīja izmēru, jaunā pozīcija ir spēkā.
- Taisnstūri, elipses, līnijas, polilīnijas, daudzstūri, tinte, teksta lodziņi un līmlapiņas no citām programmām kļūst par rediģējamām atzīmēm. **Saglabājot MarkupCraft izdzēš oriģinālus un ieraksta tos no jauna savā veidā**, kopā ar to uznirstošajiem logiem un atbildēm. To izskats var nedaudz mainīties.
- Pārskatīšanas stāvokļi no citām programmām nosaka statusu; jaunākais uzvar.
- Viss pārējais (teksta izcēlumi, citu programmu zīmogi un īpašie veidi) kopijā **paliek neskarts**, tikai lasāms.
- Saites un formas lauki paliek neskarti un netiek uzskaitīti.

Šī paša faila saglabāšana atkārtoti nekad neko nedubulto: MarkupCraft nolasītās atzīmes tiek aizstātas, nevis pievienotas vēlreiz.

## Kas netiek mainīts

Jūsu sākotnējais fails diskā nekad netiek mainīts. Kopija nav optimizēta izmēram, tāpēc tā var būt nedaudz lielāka nekā oriģināls. Aizsargātus (šifrētus) PDF failus saglabāt nevar.

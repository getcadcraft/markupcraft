---
title: Pārejot no citas atzīmju programmatūras
summary: Kā galddatora PDF atzīmju programmas ieradumi atbilst MarkupCraft un atšķirības, kas pārsteidz cilvēkus.
keywords: pāreja, pārslēgšanās, migrācija, pazīstams, galddatora PDF atzīmes, rīku kaste, atzīmju saraksts, pārklājums, sesijas, profils, īsinājumtaustiņi, atšķirības
from: c8f323e1
---

Ja pārskatāt rasējumus Bluebeam Revu (vai komentējat PDF citā galddatora PDF programmā), lielākā daļa MarkupCraft jums šķitīs pazīstama: mākoņi, izsaukumi, rīku kaste, atzīmju saraksts, statusi ar atbildēm, kalibrēti mērījumi, lapu pārklājumi. Lielākā atšķirība ir failu apstrāde, tāpēc izlasiet nākamo sadaļu pat tad, ja pārējo izlaidīsiet.

## Piecas atšķirības, kas ir svarīgas

1. **Saglabāšana izveido jaunu failu.** MarkupCraft darbojas pārlūkprogrammā un nevar pārrakstīt PDF jūsu diskā. {{ui:Saglabāt}} lejupielādē "<name> (marked up).pdf", un oriģināls paliek nemainīts. Nākamreiz atveriet "(marked up)" kopiju un paši sakārtojiet vecās kopijas.
2. **PDF tiek saglabāts, kad saglabājat.** Līdz tam atkopšanas kopija šajā pārlūkprogrammā saglabā jūsu atzīmes avārijas vai aizvērtas cilnes gadījumā, un MarkupCraft to nākamreiz piedāvā atpakaļ. Tas ir drošības tīkls: saglabājiet PDF, lai paturētu pārskatīšanu.
3. **Jūsu profils dzīvo pārlūkprogrammā.** Jūsu autora vārds, rīku iestatījumi un rīku kaste tiek glabāti šajā pārlūkprogrammā šajā datorā. Cita pārlūkprogramma vai dators sāk no jauna, un vietnes datu dzēšana tos izdzēš. Eksportējiet rīku kasti kā dublējumu. Skat. [Kas paliek šajā pārlūkprogrammā](topic:browser-storage).
4. **Vēl nav kopīgu sesiju.** Nav tiešraides kopīgas pārskatīšanas sesijas un nav mākoņa projekta. Pārskatīšana pārvietojas kopā ar PDF: saglabājiet, nosūtiet kopiju, nākamais cilvēks atbild un saglabā.
5. **Mērogs ir katrai lapai, un tikai katrai lapai.** Lapas iekšienē nav skatu logu un nav "piemērot šo mērogu visām lappusēm". Kalibrējiet katru lapu, uz kuras mērāt.

## Ieradums pa ieradumam

| Jūs esat pieraduši | MarkupCraft |
|---|---|
| Sīktēlu panelis, lappušu iezīmes | {{ui:Lapas}} kreisajā pusē. Nosaukumi nāk no lappušu iezīmēm vai tiek nolasīti no titula bloka; labojiet tos ar {{ui:Pārdēvēt lapu}}. |
| Vairāku PDF atvēršana kā komplekts | Atveriet tos visus vienlaikus; tie kļūst par vienu sarakstu. Komplekta fails netiek saglabāts: nākamreiz atveriet tos pašus PDF. |
| Rīku kaste ar rīku komplektiem | Cilne {{ui:Rīki}}: viena kaste katrā pārlūkprogrammā, saglabāti rīki ar stilu un tematu. Kopīgot ar {{ui:Eksportēt}} un {{ui:Importēt}} kā JSON failu. Rīku komplektu failus no citām programmām importēt nevar. |
| Rekvizītu panelis | Cilne {{ui:Rekvizīti}}: statuss, tēma, komentārs, stils, atbildes un defekta vienums vienuviet. |
| Atzīmju saraksts ar kolonnām | Cilne {{ui:Atzīmes}} ar filtriem pēc lapas, autora, statusa un veida. Eksportē CSV vai BCF. Pielāgotu kolonnu nav, un PDF vai darbgrāmatas kopsavilkuma vēl nav. |
| Statuss un pārskatīšanas stāvoklis | {{ui:Statuss}}: Atvērts, Pieņemts, Noraidīts, Pabeigts. Pielāgotu statusu kopu nav. Saglabāts kā standarta pārskatīšanas stāvokļi. |
| Atbildes uz atzīmi | Atbilžu pavediens cilnē {{ui:Rekvizīti}}, kurā tiek reģistrētas arī statusu izmaiņas. Nosūtītu atbildi nevar rediģēt. |
| Kalibrēt, tad garums, laukums, skaitīšana | {{ui:Kalibrēt}}, {{ui:Garums}} ({{key:M}}), {{ui:Laukums}} ({{key:Q}}, dod laukumu un perimetru), {{ui:Skaitīt}} ({{key:U}}). Leņķa, rādiusa, tilpuma, polilīnijas garuma vai izgriezumu vēl nav. |
| Lapu pārklāšana | Cilne {{ui:Salīdzināt}}: sarkans vecajai, zils jaunajai, izlīdzināšana pēc diviem punktiem. Automātiskas "dokumentu salīdzināšanas" apvilkšanas ar mākoni nav. |
| Zīmogi | {{ui:Zīmogs}} ar sešiem iebūvētiem zīmogiem un pielāgotu tekstu, parakstīts ar jūsu vārdu un datumu. Attēlu vai paraksta zīmogu vēl nav. |
| Defektu vai problēmu izsekošana | Cilne {{ui:Defektu saraksts}}: numurēti vienumi ar izpildītāju, termiņu un statusu; CSV eksports. |
| Tiešraides kopīgās sesijas | Vēl nav pieejams. Nododiet tālāk saglabāto PDF. |
| Saplacināšana | Vēl nav izveidota. Atzīmes paliek kā komentāri, ko citi skatītāji var rādīt un drukāt. |
| Slāņi atzīmēm | Vēl nav izveidoti. Komentāru kārtošanai izmantojiet tēmas, autorus un saraksta filtrus. |
| Hipersaites starp lapām | Vēl nav izveidotas. |
| Atstarpes taustiņš kustībai, ritenis tālummaiņai | Tāpat: turiet {{key:Space}} un velciet; ritenis tālina rādītāja vietā. Ritenis nekad neritina lapu. |

## Taustiņi, kas atšķiras

Daudzi viena burta taustiņi ir tādi, kā varētu gaidīt, bet pārbaudiet šos, pirms pirksti to izdara jūsu vietā:

- {{key:K}} ir {{ui:Izsaukums}}, un {{key:Q}} ir {{ui:Laukums}}. Ja esat pieradis pie Q izsaukumiem, šeit tas sāks laukumu.
- {{key:C}} ir kastes {{ui:Mākonis}}; {{key:Shift+C}} ir {{ui:Brīvais mākonis}}.
- {{key:M}} ir {{ui:Garums}}, {{key:U}} ir {{ui:Skaitīt}}, {{key:Y}} ir {{ui:Polilīnija}}, {{key:G}} ir {{ui:Daudzstūris}}, {{key:I}} ir {{ui:Iezīmējums}}.
- {{key:Mod+D}} dublē atlasi (nevis pārlūkprogrammas grāmatzīmi).
- {{key:Mod+Plus}} un {{key:Mod+Minus}} tālina lapu, nevis pārlūkprogrammas lapu.
- Jebkuru taustiņu var mainīt: skat. zemāk.

:::tip
Ja jūsu pirksti zina Bluebeam Revu, izvēlieties {{ui:PDF pārskatīšana}} izvēlnes stilu {{ui:Iestatījumi}} › {{ui:MarkupCraft}} › {{ui:Izvēlnes, taustiņi un pele}}: izvēlņu josla (File, Edit, View, Document, Markup, Measure, Window) pāri pārskatīšanas rīku rindai, {{key:Q}} izsaukumam, {{key:H}} iezīmētājam, {{key:N}} daudzstūrim, un mērījumi ar {{key:Alt+Shift}} un burtu. Arī tur var mainīt jebkuru taustiņu. Skat. [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).
:::

Pilns saraksts ir [Tastatūra un pele](topic:keyboard).

## Lietas, kas darbojas citādi, nekā varētu gaidīt

- **Rīki paliek ieslēgti.** Pēc mākoņa jūs joprojām zīmējat mākoņus. {{key:Esc}} vienu reizi notīra atlasi, divreiz atgriež {{ui:Atlasīt}}.
- **Tekstam un izsaukumiem vajag tekstu.** Ja pabeidzat, neko neierakstot, atzīme netiek pievienota. Piezīmes paliek tukšas.
- **Mērījumiem vispirms vajag mērogu.** {{ui:Garums}} un {{ui:Laukums}} nekalibrētā lapā pārslēdzas uz {{ui:Kalibrēt}} un pēc tam atgriežas.
- **Komentāri no citām programmām.** Taisnstūri, elipses, līnijas, polilīnijas, daudzstūri, tinte, teksta lodziņi un līmlapiņas, kas veidotas citur, kļūst par rediģējamām MarkupCraft atzīmēm un tiek pārrakstītas MarkupCraft veidā, kad saglabājat (to izskats var nedaudz mainīties). Teksta iezīmējumi, citu programmu zīmogi un citi īpaši veidi paliek tikai lasāmi: uz tiem var atbildēt, bet tos nevar mainīt.
- **Rakstzīmes ārpus Rietumeiropas burtiem** saglabātajā PDF tiek drukātas kā "?". Skat. [Saglabāt atzīmēto PDF](topic:save-the-marked-up-pdf).
- **Zīmogu datumi** izmanto UTC, tāpēc zīmogs, kas izveidots vēlu vakarā Amerikā, var rādīt rītdienas datumu.
- **Mērījumi tiek pārnesti** kā standarta mērījumu komentāri, un katra kalibrētā lapa saglabā savu mērogu, tāpēc programma, kas lasa PDF mērījumus, parasti tos var rādīt. Precīza uzvedība ir atkarīga no šīs programmas.

## Abu izmantošana

Varat pārslēgties uz priekšu un atpakaļ. Citur veidotie komentāri atveras MarkupCraft, un "(marked up)" PDF atveras citās PDF programmās, kur redzamas visas atzīmes, atbildes un statusi. Tikai MarkupCraft nolasa atpakaļ to, kas ir paredzēts tikai MarkupCraft (defekta izpildītājs un termiņš, vienuma statuss), un tas tiek glabāts failā MarkupCraft vajadzībām.

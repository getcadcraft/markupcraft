---
title: Märgistuste loend, filtrid ja eksport
summary: Vaata kõiki komplekti märgistusi, filtreeri lehe, autori, staatuse ja tüübi järgi, hüppa ühele neist ning ekspordi loend CSV-na või BCF-ina.
keywords: märgistuste loend, loend, kokkuvõte, xlsx, töövihik, pdf-aruanne, impordi bcf, filter, sorteeri, aruanne, eksport, csv, tabelarvutus, bcf, bcfzip, probleemid, kommentaaride loend, hüppa
from: 6c70261e
---

## Loendi avamine

Vali paremal sakk {{ui:Märgistused}}. Iga avatud faili kõik märgistused on loendatud, lehe järjekorras ja seejärel nende tegemise järjekorras. Iga rida näitab:

- ikooni märgistuse värviga, selle punktinumbrit, kui sellel on see („#4“), ja selle teemat,
- selle teksti, templi sõnastust või mõõdetud väärtust ning kommentaari,
- lehte, autorit ja kuupäeva,
- staatust (või „Ainult lugemiseks“ failiga kaasasolevate kommentaaride puhul) ning vastuste arvu, kui neid on.

Loendi kohal on märgistuste arv: „38 märgistust“ või „12 / 38 märgistust“, kui loend on filtreeritud.

## Hüppa märgistusele

Klõpsa reale. MarkupCraft näitab seda lehte, valib märgistuse ja suumib sellele, kui see on ekraanilt väljas või liiga väike, et näha. Paneel {{ui:Omadused}} näitab selle üksikasju ja lõimu, kui lähed sellele sakile tagasi.

## Filtreeri

Loendi kohal on neli menüüd. Need kombineeruvad.

| Menüü | Valikud |
|---|---|
| {{ui:Leht}} | Kõik lehed, See leht (jälgib sind, kui vahetad lehti), või mis tahes leht, millel on märgistusi |
| {{ui:Autor}} | Kes tahes, või iga autor komplektis |
| {{ui:Staatus}} | Mis tahes staatus, Avatud, Aktsepteeritud, Tagasi lükatud, Lõpetatud |
| {{ui:Tüüp}} | Mis tahes tüüp, või iga märgistusliik komplektis |

Näited:

- Mis on sellel lehel veel avatud: {{ui:Leht}} „See leht“, {{ui:Staatus}} „Avatud“.
- Ühe konsultandi kommentaarid: {{ui:Autor}} nende nimi.
- Kõik mõõtmised: {{ui:Tüüp}} „Pikkus“ või „Pindala“.

Loend näitab kuni 2000 rida; väga suurtes komplektides kitsenda seda filtriga.

## Ekspordi CSV-na

Vali sakki ülaosas {{ui:CSV}}. Saad faili „<name> markups.csv“ **filtreeritud märgistustega, nagu need praegu on**, üks rida märgistuse kohta, järgmiste veergudega:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- „Text“ hoiab tekstikastide ja selgitussiltide sõnu, templi sõnastust või loenduse grupi nime.
- „Measurement“ hoiab pikkusi, pindalade puhul „pindala, ümbermõõt“ ja loenduste puhul „grupp: n“.
- Kuupäevad on täielikud ajatemplid UTC-s.

Kogu loendi eksportimiseks sea enne kõik filtrid tagasi esimesele valikule.

## Selgitus lehel

Nupp {{ui:Legend}} sakis {{ui:Märgistused}} paneb lehe ülemisse paremasse nurka selgituse: kasti, mis loetleb iga märgistusliigi lehel (teema ja värvi järgi, näiteks „Pilv“, „Küsimus“ või „Pistikud“) koos nende arvuga. Loenduse grupp loeb oma märke. Selgitus loendab edasi, kui joonistad, liigutad või kustutad märgistusi, ning see prinditakse ja salvestatakse selle hetke arvudega.

Teisalda ja muuda selle suurust nagu iga märgistust. Selle paneelis {{ui:Omadused}} muuda {{ui:Pealkiri}}, või sea {{ui:Loendused}} väärtuseks {{ui:Kogu komplekt}}, et loendada iga lehte. Ruumid, teised selgitused ja teiste programmide kommentaarid ei lähe arvesse.

## Sinu enda veerud ja sorteerimine

{{ui:Veerud}} sakis {{ui:Märgistused}} lisab kõigile märgistustele sinu enda veerud: **tekst**, **valik** (näiteks Eriala: Mehaaniline, Elektriline, Torustik), **arv** (näiteks Maksumus) või **kuupäev**. Anna igaühele nimi, vali selle liik, loetle valikud valikuveeru jaoks ja vali {{ui:Salvesta veerud}}.

- Täida need paneelis {{ui:Omadused}}: igal veerul on seal väli. Arvuveerg võtab ainult numbreid, kuupäevaveerg kuupäeva.
- Loend näitab igal märgistusel väärtusi, filter {{ui:Veerg}} valib ühe väärtuse (või märgistused, kus see on tühi) ja {{ui:Sorteeri}} järjestab loendi veeru, autori, staatuse, liigi või kuupäeva järgi, selle asemel et lehe järgi.
- CSV- ja XLSX-eksport kannavad veerud tavaliste veergude järel. Veerud salvestatakse PDF-iga ja tulevad tagasi, kui selle uuesti avad.

## Ekspordi kokkuvõte: töövihik või PDF

- {{ui:XLSX}} laadib alla faili „<name> markup summary.xlsx“ kolme lehega: **Märgistused** (üks rida loendatud märgistuse kohta, samad veerud mis CSV-s), **Lehe järgi** (mitu märgistust igal lehel on, avatud ja suletud, ning mitu iga liiki, koos summadega) ja **Punktinimekiri** (kui punktikirjeid on).
- {{ui:PDF}} laadib alla faili „<name> markup summary.pdf“: aruanne printimiseks või saatmiseks, komplekti nime, kuupäeva ja loendatud märgistuste tabeliga (number, leht, liik, teema, tekst või kommentaar, mõõdetud väärtus, autor, staatus ja viimane vastus). Pikk tekst murdub reale; tabeli päis kordub igal lehel.

Mõlemad võtavad loendi sellisena, nagu see on filtreeritud, seega filtreeri enne, et aruanne hõlmaks ainult ühte lehte, ühte autorit või ainult avatud punkte.

## Ekspordi BCF-ina

Vali {{ui:BCF}}. MarkupCraft teeb iga loendatud märgistuse lehest pildi („Teen BCF-i jaoks pilte (3 / 12)…“) ja laadib alla faili „<name> markups.bcfzip“. Iga märgistus muutub üheks BCF-teemaks, millel on staatus, autor, kuupäevad, vastused kommentaaridena, vastutaja ja tähtaeg punktikirjest ning pilt.

Kasuta seda, et tuua joonise ülevaatuse kommentaarid BCF-i lugevatesse BIM-koordineerimise tööriistadesse. Mis kandub üle ja mis ei kandu, on kirjas [BCF-i põhitõdedes](topic:bcf-basics).

## Impordi BCF

{{ui:Impordi BCF}} loeb .bcfzip (või .bcf) faili BIM-tööriistast:

- Probleemid, mis tulid MarkupCraft'i enda BCF-ekspordist, leiavad oma märgistused uuesti: uued vastused lisatakse lõimule ja neile seatakse uus staatus (Suletud loetakse Lõpetatud). Juba olemasolevaid vastuseid ei lisata kaks korda.
- Muud probleemid muutuvad märkusteks, millel on pealkiri, kirjeldus, autor ja kommentaarid. Märkus läheb sellele lehele, mille number või nimi on probleemi siltidel, muidu avatud lehele. BIM-kaameral pole paberil kohta, seega virnastatakse sellised märkused lehe vasakusse ülanurka, et saaksid need ise liigutada.

Terve import on üks samm: {{key:Mod+Z}} võtab selle tagasi. Vaata [BCF-i põhitõed](topic:bcf-basics).

## Mida loend veel ei tee

- Loendi rühmitamine (selle asemel sorteeri ja seejärel filtreeri).
- Väärtuste muutmine loendis (muuda paneelis {{ui:Omadused}}; punktikirje väljad on muudetavad sakis {{ui:Punktinimekiri}}).

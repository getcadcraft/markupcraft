---
title: Obilazak ekrana
summary: Traka s alatima, lista listova, područje lista, pet panela desno i statusna traka, po nazivima na ekranu.
keywords: ekran, raspored, traka s alatima, paneli, bočna traka, sličice, svojstva, statusna traka, sučelje, puni ekran, tema, tamni režim
from: 18d82de6
---

MarkupCraft ispunjava prozor pretraživača. Odozgo nadolje i slijeva nadesno:

## Traka na samom vrhu

Tanka traka iznad svega pripada CadCraft porodici, a ne samom MarkupCraft-u. Ima:

- naziv aplikacije i verziju koju pokrećete,
- {{ui:O programu MarkupCraft}}, koji otvara stranicu aplikacije na sajtu,
- {{ui:Pomoć}}, koji otvara ovu pomoć u bočnom panelu (ili pritisnite {{key:F1}}),
- {{ui:Spasi za rad van mreže}}, koji čuva MarkupCraft, njegov PDF čitač i modul za spašavanje, i ovu pomoć u ovom pretraživaču, tako da se otvara bez veze; tada piše "Spremno za rad van mreže" (pogledajte [Rad van mreže](common:offline)),
- dugme za režim ekrana ({{ui:Puni ekran}}), i
- {{ui:Postavke}} (ili {{key:Mod+,}}), sa karticom {{ui:MarkupCraft}} za vlastite postavke ove aplikacije i {{ui:Opšte}} za one koje dijele sve CadCraft aplikacije (pogledajte [Postavke MarkupCraft-a](topic:settings)), i
- {{ui:Papir}} i {{ui:Model}}, svijetla i tamna tema. U {{ui:Model}} listovi su nacrtani svijetlo na tamnom; vaše oznake zadržavaju svoje boje.

Dugme za režim ekrana ili {{key:Ctrl+Shift+F}} prelazi kroz tri režima: normalan, puni ekran i puni ekran sa sakrivenim trakama. Kada su trake sakrivene, pomjerite pokazivač na gornju ivicu ekrana (ili dodirnite tamo) i one kliznu nazad. Ova prečica koristi taster Control na svakom računaru, uključujući Mac.

:::note
U punom ekranu, {{key:Esc}} također navodi pretraživač da napusti puni ekran. Ako ste htjeli samo otkazati crtanje, ponovo pritisnite {{key:Ctrl+Shift+F}} da se vratite na puni ekran.
:::

## Traka s alatima

Ispod gornje trake, alati su grupisani i označeni:

| Grupa | Dugmad |
|---|---|
| Datoteka | {{ui:Otvori}}, {{ui:Spasi}}, {{ui:Zatvori}} |
| Odabir | {{ui:Odaberi}}, {{ui:Pomjeri pogled}} |
| Crtanje | {{ui:Olovka}}, {{ui:Isticanje}}, {{ui:Linija}}, {{ui:Strelica}}, {{ui:Pravougaonik}}, {{ui:Elipsa}}, {{ui:Polilinija}}, {{ui:Poligon}} |
| Revidiraj | {{ui:Oblak}}, {{ui:Slobodni oblak}} |
| Označavanje | {{ui:Izvučena oznaka}}, {{ui:Tekst}}, {{ui:Bilješka}}, {{ui:Pečat}} |
| Mjerenje | {{ui:Kalibriraj}}, {{ui:Dužina}}, {{ui:Površina}}, {{ui:Brojanje}} |
| Uređivanje | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, i {{ui:Više}}: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjesto}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}}, {{ui:Ukloni odabir}} |

Alat koji koristite izgleda utisnuto. Zadržite pokazivač iznad dugmeta da vidite njegov taster (na primjer "Pravougaonik (R)"); meni {{ui:Više}} navodi taster svake komande pored nje. Dugmad koja trenutno ne mogu raditi su zatamnjena: {{ui:Kopiraj}} dok ne odaberete oznaku, {{ui:Zalijepi}} dok nešto nije kopirano. Mala tačka iza {{ui:Spasi}} znači da neke oznake još nisu spašene. Puna lista tastera je u [Tastatura i miš](topic:keyboard).

Alat ostaje uključen nakon što njime crtate, tako da možete nacrtati nekoliko oblaka zaredom. Pritisnite {{key:Esc}} (dva puta ako je nova oznaka još odabrana) ili {{key:V}} da se vratite na {{ui:Odaberi}}.

## Lista listova (lijevo)

{{ui:Listovi}} navodi svaku stranicu svakog otvorenog PDF-a. Svaki red prikazuje malu sliku lista, njegov naziv, broj lista ili datoteku i stranicu, te koliko oznaka ima. Broj iza naslova je broj listova.

- Kliknite red da prikažete taj list.
- Upišite u {{ui:Pretraži listove}} da filtrirate po nazivu lista, broju lista ili nazivu datoteke. Pritisnite {{key:Enter}} da otvorite prvi pogodak.

Nazivi listova dolaze iz PDF-a kada ga imaju. Pogledajte [Otvorite set planova i krećite se između listova](topic:open-a-plan-set).

## Područje lista (sredina)

List na kojem radite. Prije nego išta otvorite, prikazuje "Otvori set planova" sa dugmetom {{ui:Otvori PDF-ove}}. Prevucite PDF-ove bilo gdje ovdje da ih otvorite.

Ispod lista, uska traka ima:

- strelice prethodnog i sljedećeg lista, i "3 od 12: A-101 — Tlocrt" (zadržite pokazivač iznad da vidite datoteku i stranicu),
- smanjivanje zuma, polje za zum (upišite procenat i pritisnite {{key:Enter}}; 100% je stvarna veličina na tipičnom ekranu), povećavanje zuma,
- {{ui:Uklopi stranicu}} i {{ui:Uklopi širinu}}.

Svaki list pamti svoj zum dok je set otvoren.

Kada upoređujete dva lista, ovdje se pojavljuje legenda: "Samo na starom listu", "Samo na novom listu" i "Na oba". Pogledajte [Poređenje dviju revizija](topic:compare-revisions).

## Paneli (desno)

Pet kartica:

| Kartica | Šta prikazuje |
|---|---|
| {{ui:Svojstva}} | Odabranu oznaku: autor, datumi, izmjerene vrijednosti, status, predmet, tekst, komentar, stil, njeni odgovori i njena stavka liste ispravki. Sa uključenim alatom za crtanje i bez odabira, postavke koje će nove oznake koristiti. Bez odabira i sa uključenim {{ui:Odaberi}}, list: broj, naslov, odakle je pročitan naziv, veličina papira, razmjera i {{ui:Preimenuj list}}. |
| {{ui:Oznake}} | Svaka oznaka u otvorenom setu, sa filterima i izvozima {{ui:CSV}} i {{ui:BCF}}. Pogledajte [Lista oznaka](topic:markups-list-and-export). |
| {{ui:Lista ispravki}} | Numerisane stavke ispravki sa zaduženom osobom, rokom i statusom. Pogledajte [Napravite listu ispravki](topic:punch-list). |
| {{ui:Alati}} | Sanduk alata: sačuvani, stilizovani alati. Pogledajte [Sanduk alata](topic:tool-chest). |
| {{ui:Poređenje}} | Preklapanje dva lista. Pogledajte [Poređenje dviju revizija](topic:compare-revisions). |

## Statusna traka (dolje)

- Lijevo, gdje je pokazivač na listu, u inčima (ili milimetrima, u [Postavkama](topic:settings)) na papiru.
- U sredini, poruke: šta alat očekuje sljedeće, šta je upravo spašeno, zašto je nešto odbijeno. **Pročitajte je kada nešto ne funkcioniše.**
- Dugme razmjere lista ("Nije kalibrisano", ili razmjera). Kliknite da postavite razmjeru. Pogledajte [Kalibrišite list i mjerite](topic:calibrate-and-measure).
- Vaše ime ("Postavite svoje ime" dok ga ne unesete). Kliknite da ga promijenite.

## Na malom ekranu

Ispod otprilike 1180 piksela širine paneli postaju uži, a slike listova se smanjuju. Na ekranu veličine telefona dijelovi se slažu jedan ispod drugog: traka s alatima (pomjerajte je bočno), list, statusna traka, paneli, pa lista listova na dnu. Tablet u vodoravnom položaju zadržava puni raspored.

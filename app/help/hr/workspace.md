---
title: Obilazak zaslona
summary: Alatna traka, popis listova, područje lista, pet ploča s desne strane i statusna traka, pod njihovim imenima na zaslonu.
keywords: zaslon, raspored, alatna traka, ploče, bočna traka, sličice, svojstva, statusna traka, sučelje, cijeli zaslon, tema, tamni način
from: 18d82de6
---

MarkupCraft ispunjava prozor preglednika. Odozgo prema dolje i slijeva nadesno:

## Traka na samom vrhu

Tanka traka iznad svega pripada obitelji CadCraft, a ne samom MarkupCraftu. Na njoj su:

- ime aplikacije i verzija koju koristite,
- {{ui:O aplikaciji MarkupCraft}}, što otvara stranicu aplikacije na web-mjestu,
- {{ui:Pomoć}}, što otvara ovu pomoć u bočnoj ploči (ili pritisnite {{key:F1}}),
- {{ui:Spremi za offline}}, što u ovom pregledniku čuva MarkupCraft, njegov PDF čitač i pisač te ovu pomoć da se otvara bez veze; zatim piše „Spremno za offline“ (pogledajte [Rad offline](common:offline)),
- gumb načina zaslona ({{ui:Cijeli zaslon}}) i
- {{ui:Postavke}} (ili {{key:Mod+,}}), s karticom {{ui:MarkupCraft}} za postavke ove aplikacije i karticom {{ui:Općenito}} za one koje dijele sve CadCraft aplikacije (pogledajte [Postavke MarkupCrafta](topic:settings)), te
- {{ui:Papir}} i {{ui:Model}}, svijetla i tamna tema. U temi {{ui:Model}} listovi su nacrtani svijetlo na tamnom; vaše oznake zadržavaju vlastite boje.

Gumb načina zaslona, ili {{key:Ctrl+Shift+F}}, prolazi kroz tri načina: uobičajeni, cijeli zaslon i cijeli zaslon sa skrivenim trakama. Sa skrivenim trakama pomaknite pokazivač na gornji rub zaslona (ili ondje dodirnite) i trake se vraćaju. Ovaj prečac koristi tipku Control na svakom računalu, uključujući Mac.

:::note
U cijelom zaslonu {{key:Esc}} također tjera preglednik da izađe iz cijelog zaslona. Ako ste htjeli samo otkazati crtanje, ponovno pritisnite {{key:Ctrl+Shift+F}} da se vratite u cijeli zaslon.
:::

## Alatna traka

Ispod gornje trake alati su grupirani i označeni:

| Grupa | Gumbi |
|---|---|
| Datoteka | {{ui:Otvori}}, {{ui:Spremi}}, {{ui:Zatvori}} |
| Odabir | {{ui:Odaberi}}, {{ui:Pan}} |
| Crtanje | {{ui:Olovka}}, {{ui:Isticanje}}, {{ui:Linija}}, {{ui:Strelica}}, {{ui:Pravokutnik}}, {{ui:Elipsa}}, {{ui:Polilinija}}, {{ui:Poligon}} |
| Revizija | {{ui:Oblak}}, {{ui:Slobodni oblak}} |
| Bilješke | {{ui:Oblačić}}, {{ui:Tekst}}, {{ui:Bilješka}}, {{ui:Pečat}} |
| Mjerenje | {{ui:Kalibriraj}}, {{ui:Duljina}}, {{ui:Površina}}, {{ui:Broji}} |
| Uređivanje | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i {{ui:Više}}: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}}, {{ui:Poništi odabir}} |

Alat koji koristite izgleda pritisnuto. Zadržite pokazivač iznad gumba da vidite njegovu tipku (na primjer „Pravokutnik (R)“); izbornik {{ui:Više}} navodi tipku svake naredbe pored nje. Gumbi koji trenutačno ne mogu djelovati su zasivljeni: {{ui:Kopiraj}} dok ne odaberete oznaku, {{ui:Zalijepi}} dok nešto nije kopirano. Mala točka iza {{ui:Spremi}} znači da neke oznake još nisu spremljene. Cijeli popis tipki je u temi [Tipkovnica i miš](topic:keyboard).

Alat ostaje uključen nakon crtanja, pa možete nacrtati nekoliko oblaka zaredom. Pritisnite {{key:Esc}} (dvaput ako je nova oznaka još odabrana) ili {{key:V}} za povratak na {{ui:Odaberi}}.

## Popis listova (lijevo)

{{ui:Listovi}} navodi svaku stranicu svakog otvorenog PDF-a. Svaki redak prikazuje sličicu lista, njegovo ime, broj lista ili datoteku i stranicu te koliko ima oznaka. Broj iza naslova je broj listova.

- Kliknite redak da prikažete taj list.
- Upišite u {{ui:Traži listove}} za filtriranje po imenu lista, broju lista ili imenu datoteke. Pritisnite {{key:Enter}} da otvorite prvi pogodak.

Imena listova dolaze iz PDF-a kad ih ima. Pogledajte [Otvorite komplet nacrta i prelazite među listovima](topic:open-a-plan-set).

## Područje lista (sredina)

List na kojem radite. Dok ništa nije otvoreno, prikazuje „Otvorite komplet nacrta“ s gumbom {{ui:Otvori PDF-ove}}. Ispustite PDF-ove bilo gdje ovdje da ih otvorite.

Ispod lista uska traka ima:

- strelice za prethodni i sljedeći list te „3 od 12: A-101 — Tlocrt“ (zadržite pokazivač da vidite datoteku i stranicu),
- smanjivanje, okvir za zumiranje (upišite postotak i pritisnite {{key:Enter}}; 100% je stvarna veličina na uobičajenom zaslonu), povećavanje,
- {{ui:Prilagodi stranicu}} i {{ui:Prilagodi širinu}}.

Svaki list pamti vlastito zumiranje dok je komplet otvoren.

Kad usporedite dva lista, ovdje se pojavljuje legenda: „Samo na starom listu“, „Samo na novom listu“ i „Na oba“. Pogledajte [Usporedite dvije revizije](topic:compare-revisions).

## Ploče (desno)

Pet kartica:

| Kartica | Što prikazuje |
|---|---|
| {{ui:Svojstva}} | Odabranu oznaku: autora, datume, izmjerene vrijednosti, status, predmet, tekst, komentar, stil, odgovore i stavku popisa nedostataka. S uključenim alatom za crtanje i bez odabira, postavke koje će koristiti nove oznake. Bez odabira i s uključenim alatom {{ui:Odaberi}}, list: broj, naslov, odakle je ime pročitano, veličinu papira, mjerilo i {{ui:Preimenuj list}}. |
| {{ui:Oznake}} | Svaku oznaku otvorenog kompleta, s filtrima te izvozima {{ui:CSV}} i {{ui:BCF}}. Pogledajte [Popis oznaka](topic:markups-list-and-export). |
| {{ui:Popis nedostataka}} | Numerirane stavke s osobom zaduženom, rokom i statusom. Pogledajte [Izradite popis nedostataka](topic:punch-list). |
| {{ui:Alati}} | Kutija s alatima: spremljeni alati sa stilovima. Pogledajte [Kutija s alatima](topic:tool-chest). |
| {{ui:Usporedba}} | Preklapanje dva lista. Pogledajte [Usporedite dvije revizije](topic:compare-revisions). |

## Statusna traka (dolje)

- Lijevo, gdje se pokazivač nalazi na listu, u inčima (ili milimetrima, u [postavkama](topic:settings)) na papiru.
- U sredini, poruke: što alat očekuje dalje, što je upravo spremljeno, zašto je nešto odbijeno. **Pročitajte je kad se nešto ne dogodi.**
- Gumb mjerila lista („Nije kalibrirano“ ili mjerilo). Kliknite ga za postavljanje mjerila. Pogledajte [Kalibrirajte list i mjerite](topic:calibrate-and-measure).
- Vaše ime („Postavite svoje ime“ dok ga ne zadate). Kliknite ga za promjenu.

## Na malom zaslonu

Ispod oko 1180 piksela širine ploče postaju uže, a sličice listova se smanjuju. Na zaslonu veličine telefona dijelovi se slažu jedan ispod drugog: alatna traka (pomiče se vodoravno), list, statusna traka, ploče, pa popis listova na dnu. Tablet u položenom usmjerenju zadržava puni raspored.

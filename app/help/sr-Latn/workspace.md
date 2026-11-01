---
title: Obilazak ekrana
summary: Alatna traka, lista listova, oblast lista, pet panela sa desne strane i statusna traka, po njihovim nazivima na ekranu.
keywords: ekran, raspored, alatna traka, paneli, bočna traka, sličice, svojstva, statusna traka, interfejs, ceo ekran, tema, tamni režim
from: 18d82de6
---

MarkupCraft ispunjava prozor pregledača. Od vrha ka dnu i sa leva na desno:

## Traka na samom vrhu

Tanka traka iznad svega pripada CadCraft porodici, a ne samom MarkupCraft-u. Ima:

- naziv aplikacije i koju verziju pokrećeš,
- {{ui:About MarkupCraft}}, koji otvara stranicu aplikacije na veb sajtu,
- {{ui:Help}}, koji otvara ovu pomoć u bočnom panelu (ili pritisni {{key:F1}}),
- {{ui:Save for offline}}, koji čuva MarkupCraft, njegov PDF čitač i pisač, i ovu pomoć u ovom pregledaču, tako da se otvara bez veze; tada kaže „Spremno za rad van mreže“ (videti [Rad van mreže](common:offline)),
- dugme za režim ekrana ({{ui:Full screen}}), i
- {{ui:Settings}} (ili {{key:Mod+,}}), sa karticom {{ui:MarkupCraft}} za sopstvena podešavanja ove aplikacije i {{ui:General}} za ona koja dele sve CadCraft aplikacije (videti [Podešavanja MarkupCraft-a](topic:settings)), i
- {{ui:Paper}} i {{ui:Model}}, svetla i tamna tema. U {{ui:Model}} listovi su nacrtani svetlo na tamnom; tvoja označavanja zadržavaju svoje boje.

Dugme za režim ekrana, ili {{key:Ctrl+Shift+F}}, prolazi kroz tri režima: normalan, ceo ekran i ceo ekran sa sakrivenim trakama. Sa sakrivenim trakama, pomeri pokazivač do gornje ivice ekrana (ili dodirni tamo) i one kliznu nazad. Ova prečica koristi taster Control na svakom računaru, uključujući Mac.

:::note
U režimu celog ekrana, {{key:Esc}} takođe izlazi iz celog ekrana u pregledaču. Ako si hteo samo da otkažeš crtanje, ponovo pritisni {{key:Ctrl+Shift+F}} da se vratiš na ceo ekran.
:::

## Alatna traka

Ispod gornje trake, alati su grupisani i označeni:

| Grupa | Dugmad |
|---|---|
| Datoteka | {{ui:Open}}, {{ui:Save}}, {{ui:Close}} |
| Izbor | {{ui:Select}}, {{ui:Pan}} |
| Crtanje | {{ui:Pen}}, {{ui:Highlight}}, {{ui:Line}}, {{ui:Arrow}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Polyline}}, {{ui:Polygon}} |
| Revizije | {{ui:Cloud}}, {{ui:Free cloud}} |
| Napomene | {{ui:Callout}}, {{ui:Text}}, {{ui:Note}}, {{ui:Stamp}} |
| Merenje | {{ui:Calibrate}}, {{ui:Length}}, {{ui:Area}}, {{ui:Count}} |
| Uređivanje | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, i {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |

Alat koji koristiš izgleda pritisnut. Zadrži pokazivač iznad dugmeta da vidiš njegov taster (na primer „Pravougaonik (R)“); meni {{ui:More}} navodi taster svake komande pored nje. Dugmad koja trenutno ne mogu da rade su zasivljena: {{ui:Copy}} dok ne izabereš označavanje, {{ui:Paste}} dok ništa nije kopirano. Mala tačka posle {{ui:Save}} znači da neka označavanja nisu sačuvana. Kompletna lista tastera je u [Tastatura i miš](topic:keyboard).

Alat ostaje uključen posle crtanja, pa možeš da nacrtaš nekoliko oblaka zaredom. Pritisni {{key:Esc}} (dvaput ako je novo označavanje još izabrano) ili {{key:V}} da se vratiš na {{ui:Select}}.

## Lista listova (levo)

{{ui:Sheets}} prikazuje svaku stranu svakog otvorenog PDF-a. Svaki red prikazuje malu sliku lista, njegov naziv, broj lista ili datoteku i stranu, i koliko ima označavanja. Broj posle naslova je broj listova.

- Klikni red da prikažeš taj list.
- Upiši u {{ui:Search sheets}} da filtriraš po nazivu lista, broju lista ili nazivu datoteke. Pritisni {{key:Enter}} da otvoriš prvi pogodak.

Nazivi listova dolaze iz PDF-a kada ih ima. Videti [Otvori set planova i kreći se između listova](topic:open-a-plan-set).

## Oblast lista (sredina)

List na kome radiš. Pre nego što išta bude otvoreno, prikazuje „Otvori set planova“ sa dugmetom {{ui:Open PDFs}}. Prevuci PDF-ove bilo gde ovde da ih otvoriš.

Ispod lista, uska traka ima:

- strelice za prethodni i sledeći list, i „3 od 12: A-101 — Osnova sprata“ (zadrži pokazivač iznad da vidiš datoteku i stranu),
- smanjivanje, polje za zumiranje (upiši procenat i pritisni {{key:Enter}}; 100% je stvarna veličina na tipičnom ekranu), uvećavanje,
- {{ui:Fit page}} i {{ui:Fit width}}.

Svaki list pamti svoj zum dok je set otvoren.

Kada upoređuješ dva lista, ovde se pojavljuje legenda: „Samo na starom listu“, „Samo na novom listu“ i „Na oba“. Videti [Uporedi dve revizije](topic:compare-revisions).

## Paneli (desno)

Pet kartica:

| Kartica | Šta prikazuje |
|---|---|
| {{ui:Properties}} | Izabrano označavanje: autor, datumi, izmerene vrednosti, status, predmet, tekst, komentar, stil, njegovi odgovori i njegova stavka za nedostatke. Sa uključenim alatom za crtanje i bez izbora, podešavanja koja će koristiti nova označavanja. Bez izbora i sa uključenim {{ui:Select}}, list: broj, naslov, odakle je pročitan naziv, veličina papira, razmera i {{ui:Rename sheet}}. |
| {{ui:Markups}} | Svako označavanje u otvorenom setu, sa filterima i izvozima {{ui:CSV}} i {{ui:BCF}}. Videti [Lista označavanja](topic:markups-list-and-export). |
| {{ui:Punch list}} | Numerisane stavke za nedostatke sa izvršiocem, rokom i statusom. Videti [Napravi listu nedostataka](topic:punch-list). |
| {{ui:Tools}} | Sanduk sa alatkama: sačuvani, stilizovani alati. Videti [Sanduk sa alatkama](topic:tool-chest). |
| {{ui:Compare}} | Preklapanje dva lista. Videti [Uporedi dve revizije](topic:compare-revisions). |

## Statusna traka (dole)

- Levo, gde je pokazivač na listu, u inčima (ili milimetrima, u [Podešavanjima](topic:settings)) na papiru.
- U sredini, poruke: šta alat očekuje sledeće, šta je upravo sačuvano, zašto nešto nije prihvaćeno. **Pročitaj je kada nešto ne uspe.**
- Dugme razmere lista („Nije kalibrisano“, ili razmera). Klikni da podesiš razmeru. Videti [Kalibriši list i meri](topic:calibrate-and-measure).
- Tvoje ime („Unesi svoje ime“ dok ga ne daš). Klikni da ga promeniš.

## Na malom ekranu

Ispod oko 1180 piksela širine, paneli postaju uži, a slike listova se smanjuju. Na ekranu veličine telefona delovi se slažu: alatna traka (pomeraj je bočno), list, statusna traka, paneli, pa lista listova na dnu. Tablet u horizontalnom položaju zadržava pun raspored.

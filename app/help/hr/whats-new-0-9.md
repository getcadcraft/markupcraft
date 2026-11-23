---
title: Što je novo u 0.9 (ranije)
summary: Bilješke i radna ploča koje se nikada ne ispisuju, šifrirane privatne bilješke i čista kopija za klijenta, skupne poveznice za cijeli set crteža, alat Luk s deset načina, praćenje drugog recenzenta u Live sesiji i ispravak za obrisane oznake koje ostaju u spremljenom PDF-u.
keywords: što je novo 0.9, ranije izdanje, što je novo, 0.9, bilješke, radna ploča, privatne bilješke, lozinka, šifrirano, skriveni bilješke, prikaži bilješke, čista kopija, snimka, skupne poveznice, oznake listova, poveži listove, naslovni blok, broj lista, dopuna, preimenovanje, pdf poveznica, luk, načini luka, luk s tri točke, radijus, prati, praćenje, live, pogled nastave, popis osoba, obrisana oznaka, opisi alata, naslovi kartica, popis promjena, 0.8, 0.8.1, verzija, nove značajke, zadatak, zadaci, dodijeljeno, rok, prekoračen rok, provjeri sada, što se promijenilo, revizije, usporedba, glasovna bilješka, odluka, redline, datoteka s odgovorima, crtač, pomoćnik, mcp, problemi, jezici, ulazni uređaji, trackpad, redci alatne trake, tablica svojstava, ažuriranje
from: aa3dfeb8
---

Ovo je što se promijenilo u MarkupCraftu 0.9 u odnosu na 0.8.1. Glavna ideja je da vaše radne bilješke ostaju izvan stranice koju dobiva klijent, a cijeli set crteža može se povezati u jednom prolazu.

## Novo

### Bilješke, radna ploča i privatne bilješke

- **Radna ploča.** Područje oko svakog lista je radni stol: sve što je nacrtano, upisano ili zalijepljeno pored lista je bilješka i nikada se ne ispisuje. Odaberite {{ui:Prikaži radnu ploču}} za zumiranje radi prostora ili {{ui:Snimka na radnu ploču}}, povucite okvir, zatim {{ui:Na radnu ploču}} da biste uz list stavili sliku dijela crteža. Snimka je slika i ne mijenja se kad se promijeni list. Pogledajte [Bilješke, radna ploča i privatne bilješke](topic:notes-and-pasteboard).
- **Prikaz i skrivanje bilješki.** Svaka oznaka može biti bilješka: postavite {{ui:Nove oznake su}} na kartici {{ui:Bilješke}} ili {{ui:Ova oznaka je}} u {{ui:Svojstva}}. {{key:Shift+H}} ili prekidač {{ui:Bilješke}} ispod lista odjednom skriva i prikazuje sve bilješke. Bilješke se izostavljaju pri ispisu, ravnim kopijama, popisima i izvozima, a drugi čitači PDF-a ih ne prikazuju. Vaš spremljeni PDF ih zadržava za sljedeće otvaranje u MarkupCraftu.
- **Privatne bilješke.** Odaberite {{ui:Postavi lozinku}}, zatim oznaku označite kao {{ui:Privatna napomena}}. Šifrira se u datoteci lozinkom duljine najmanje 10 znakova, a oporavka nema: nitko, uključujući nas, ne može je otvoriti bez lozinke. {{ui:Zaključaj}} sklanja privatne bilješke; {{ui:Ostani otključano na ovom uređaju}} je podrazumijevano isključeno.
- **Spremi čistu kopiju.** {{ui:Spremi čistu kopiju}} uklanja sve bilješke, sve privatne bilješke i sve na radnoj ploči. Koristite je za datoteku koja ide klijentu.

### Povežite cijeli set

- **Skupne poveznice.** Odaberite {{ui:Stranice}} › {{ui:Skupne poveznice…}} ili {{ui:Poveži oznake listova…}} pod {{ui:Traži tekst}} na ploči {{ui:Listovi}}. Korak 1 navodi broj i naziv svakog lista kako su pročitani iz naslovnog bloka; ispravite one koji su netočni. Korak 2 navodi pronađene oznake, poput `3/A-501` ili `DETAIL 2 ON A-501`. {{ui:Povezat će}} prikazuje list i pogled za svaku, {{ui:Nije povezano}} prikazuje brojeve koje nijedan otvoreni list nema, a {{ui:Izradi poveznice}} izrađuje sve u jednom koraku poništavanja. Pokrenite ponovno nakon dopune ili ponovnog numeriranja; poveznice koje ste napravili ručno se nikada ne mijenjaju. Poveznica s pogledom sprema se kao PDF poveznica, pa je i drugi čitači mogu otvoriti. Pogledajte [Poveznice listova](topic:sheet-links).

### Crtež

- **Luk, deset načina.** Alat {{ui:Luk}} ({{key:O}}) sada ima okvir {{ui:Način luka}} preko stranice s deset načina crtanja luka; kut, duljina, radijus i smjer mogu se kliknuti ili upisati. Pogledajte [Nacrtajte luk na deset načina](topic:draw-an-arc).

### Zajednički rad

- **Praćenje recenzenta.** U Live sesiji odaberite {{ui:Prati}} pored imena osobe i vaš se pogled pomiče s njezinim; vlastitim pomicanjem ili zumiranjem praćenje se zaustavlja. Domaćin može odabrati {{ui:Zamoli sve da me prate}}. Popis osoba prikazuje boju, ime, list na kojem je osoba i vrijeme njezine posljednje izmjene. Pogledajte [Praćenje drugog recenzenta u Live sesiji](topic:follow-in-live).

## U svim aplikacijama

- Opisi alata su Bootstrap opisi alata, početni savjet može se zatvoriti, trake kartica pomiču se kad se prepune, a naslovi kartica u pregledniku glase `<document> — MarkupCraft | CadCraft`.
- Panel s više odjeljaka otvara jedan i zatvara ostale (lokot pored strelice drži jedan otvoren); prekidač u {{ui:Postavkama}} to isključuje.
- Svaka aplikacija pokreće se sa zadanom zbirkom objekata iz knjižnice.
- Jedinice težine i temperature dostupne su u postavkama {{ui:Jedinice}}.

## Ispravljeno

- **Uklonjene oznake više nisu čitljive u spremljenom PDF-u.** Spremanje je nekad uklanjalo obrisanu ili prepisanu napomenu sa stranice, ali je objekt s tekstom ostao u datoteci. Sada spremanje briše te objekte. Datoteke spremljene starijim verzijama i dalje ih sadrže dok ih ne spremite ponovno.

## Iskrena ograničenja

- Skupne poveznice isprobane su na našim vlastitim testnim setovima. Stvarni setovi crtaju oznake na mnogo načina, pa se na klijentskom setu neki pogledi mogu propustiti. Skenirani listovi prvo trebaju {{ui:Pročitaj tekst (OCR)…}}.
- Bilješke, privatne bilješke i radna ploča isprobani su u headless pregledniku i u našim datotekama, ne s velikim stvarnim vektorskim setom niti u stvarnoj Live sesiji s dvije osobe. Promjena lozinke nije izrađena. Verzije starije od 0.9 ne prikazuju bilješke.
- Pogled za nastavu je popis osoba; nije isproban sa stvarnim nastavnikom i studentima.
- Jezici osim engleskog su strojno prevedene radne verzije dok ih ne pročita izvorni govornik.
- Instalateri za Windows nisu digitalno potpisani (Više informacija, zatim Ipak pokreni); disk slika za macOS nije notarizirana (desni klik, zatim Otvori).

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u MarkupCraftu 0.8 i 0.8.1 u odnosu na 0.7. Velika novost je da oznaka može biti zadatak koji netko, ili vaš pomoćnik, obavlja, a koji se sam zatvara kad se crtež stvarno promijeni.

### Novo

**Oznake koje djeluju**

- **Oznaku pretvorite u zadatak.** Odaberite jednu ili više oznaka, otvorite karticu {{ui:Zadaci}} i odaberite {{ui:Pretvori odabrano u zadatak}}. Zadatak ima naslov, osobu ili vašeg povezanog pomoćnika koji ga obavlja, neobavezan rok i stanje, a zadržava svoje mjesto na listu i svoju raspravu. Pogledajte [Pretvorite oznaku u zadatak](topic:markups-that-act).
- **Zadaci koji se sami zatvaraju.** Zadatak može pratiti crtež unutar svoje oznake. Otvorite noviju reviziju lista i odaberite {{ui:Provjeri sada}}: ako su se linije u tom području promijenile za više od dlake, zadatak se označava kao Gotovo, njegova oznaka postaje Završeno, a bilješka u raspravi navodi što je promijenjeno. Novi datumski žig ili linije koje su se pomaknule za manje od 1.5 točke ne računaju se. Zadatak umjesto toga može pratiti element modela: vaš pomoćnik prijavljuje element pomoću `tasks_check`, a kasnija prijava koja se razlikuje ili obrisani element zatvaraju zadatak. Jedan korak poništavanja ga ponovno otvara.
- **Pronađite posao.** Filtrirajte popis {{ui:Zadaci}} po stanju i po osobi za koju je, uključujući {{ui:Prekoračen rok}}; odaberite {{ui:Dodijeljeno}}, zatim {{ui:Pomoćnik}} da biste vidjeli što čeka vašeg pomoćnika. Zadatak kojem je rok prošao prikazuje se kao upozorenje na ploči s problemima. {{ui:CSV}} izvozi popis. Zadaci se spremaju u PDF uz oznaku i putuju kroz Live kao druga svojstva oznaka.

**Što se promijenilo, kao običan popis**

- **Navedite promjene.** Otvorite karticu {{ui:Usporedba}}, zatim {{ui:Usporedi cijeli set}}, odaberite raniju i kasniju datoteku i odaberite {{ui:Navedi promjene}}. Popis počinje brojem, zatim obuhvaća svaki promijenjeni list, najveću promjenu prvu: gdje je na listu, koliko je velika (u stvarnim jedinicama te i u palcima papira na kalibriranom listu), jesu li linije dodane ili uklonjene, koliko oznaka se nalazi tu i koje su se riječi pojavile ili nestale. {{ui:Kopiraj popis}} stavlja ga u međuspremnik, a {{ui:CSV}} zapisuje jedan redak po promjeni. Pogledajte [Popis promjena između revizija](topic:what-changed-in-words).

**Glasovne bilješke i odluke**

- **Glasovne bilješke.** U kartici {{ui:Bilješke}} odaberite {{ui:Snimi glasovnu bilješku}}, zatim {{ui:Zaustavi snimanje}}; snimanje se samo zaustavlja nakon dvije minute. Bilješka se prikvači u središte lista, povucite je tamo gdje pripada i upišite natpis u {{ui:Svojstva}}, a {{ui:Reproduciraj}} na popisu je pušta. Snimka se sprema unutar PDF-a.
- **Odluke.** {{ui:Prikvači odluku}} zapisuje rečenicu ili dvije na list. Ako zamjenjuje raniju odluku, odaberite nju u {{ui:Zamjenjuje}}: stara ostaje, označena kao Zamijenjeno, i upućuje na novu. Jedan korak poništavanja vraća je. Pogledajte [Prikvačite glasovne bilješke i odluke na list](topic:voice-notes-and-decisions).

**Redline prema reviziji**

- **Pošaljite i odgovorite.** Na kartici {{ui:Zadaci}} otvorite {{ui:Redline prema reviziji}}, upišite reviziju na koju se oznake odnose i odaberite {{ui:Izvezi redline datoteku}}. Dobivate datoteku `.redline.json` s jednom stavkom po otvorenoj oznaci: list, položaj (kao udjeli lista, pa ponovni ispis u drugoj veličini i dalje odgovara), riječi, autor, rasprava i njezin zadatak. Tko crta promjene odgovara Prihvaćeno, Odbijeno ili Gotovo u datoteci `.redline-answers.json`; {{ui:Učitaj datoteku s odgovorima…}} daje svakoj oznaci taj status i bilješku crtača, kao jedan korak poništavanja. Pogledajte [Pošaljite oznake crtaču kao redline](topic:redline-to-revision).

**AI pomoćnici**

- **Više alata.** Pomoćnik koji ste povezali kroz CadCraft Studio može popisati zadatke (`tasks_list`), izraditi ili promijeniti jedan (`task_set`), skinuti zadatak (`task_clear`), provjeriti jedan prema novijoj reviziji ili elementu (`tasks_check`) i pročitati običan popis promjena između dva otvorena seta planova (`revisions_changes`). Dobiva samo alate koje ste označili pod prekidačem Pomoćnici, a svaka promjena je jedan korak poništavanja. Pogledajte [Koristite MarkupCraft s AI pomoćnikom](topic:use-with-ai-assistants).

### U svim aplikacijama

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset je novo: litavski, latvijski, bosanski, marathi, telugu, albanski, afrikanski, filipinski, svahili i uzbečki. Svi jezici osim engleskog su strojne radne verzije dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Ulazni uređaji}} određuje što rade trackpad, bočni gumbi miša, olovka, dodirni dodiri, 3D miš, igraći kontroler ili MIDI kontroler, za svaku aplikaciju ili samo za ovu. Dok ne mijenjate ništa, svaki uređaj radi kao prije. Pogledajte [Koristite trackpad, 3D miš ili kontroler](common:input-devices).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} ima {{ui:Prelomi}} (zadano), {{ui:2 retka}} i {{ui:1 redak}}, pa crtež dobiva više prostora. Pogledajte [Rasporedite ploče](common:arrange-panels).
- **Tablica svojstava.** Polja Stila oznake koriste zajedničku tablicu, sa sklopivim kategorijama i stupcima za oznaku i vrijednost.
- **Ploča s problemima.** Upozorenja iz aplikacije, poput zadatka kojem je prošao rok, skupljaju se na jednoj ploči s problemima.
- **Live i dodaci.** Live sesije opisane su u [Radite zajedno uživo](common:work-together-live); popis dodataka koji slijedi vaš račun je u [Dodaci i popis vašeg računa](common:addons-basics).
- **Povežite svog AI.** CadCraft Studio je središte za vašeg vlastitog pomoćnika: povežite ga jednom za svih osam aplikacija. Same aplikacije nemaju vlastitu AI funkciju.

### Ispravljeno u 0.8.1

- **Studio može promijeniti jezik dok radi.** Prije su desktop aplikacija i spakirana izdanja ostajali na engleskom. Još nije provjereno na svim platformama: javite nam ako se jezik ne promijeni.
- Instalacije Studija 0.8 nude 0.8.1 kroz {{ui:Postavke}} › {{ui:Ažuriranja}}.

### Još nije u ovoj verziji

- **Nije digitalno potpisano.** Instalateri za Windows i .dmg za macOS još nemaju potpis. Na Windowsu, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu desnim klikom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. Verzije za trgovine su na čekanju.
- **Povezivanje AI-a je djelomično nedovršeno.** Povezivanje jednim klikom unutar Studija, hostirani konektor za pomoćnike u pregledniku i vlastiti API ključ unutar Studija nisu obećani za ovo izdanje. Petlja zadataka isprobana je, ali još ne sa stvarnim pomoćnikom.
- **Provjere zadataka trebaju istu veličinu stranice.** List ponovno ispisan u drugoj veličini se neće podudarati, pa se njegovi zadaci ne zatvaraju. Listovi se spajaju prema broju lista, inače prema položaju stranice.
- **Glasovne bilješke su samo snimke.** Nema transkripta, a pomoćnik vidi trajanje bilješke, autora i natpis, a ne zvuk. Snimanje je isprobano s lažnim mikrofonom u headless pregledniku; pravi mikrofon na telefonu, tabletu ili laptopu još treba provjeriti.
- **Proračunski listovi i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ga zanemaruje i briše pri sljedećem spremanju, pa otvorite i spremite takvu datoteku s verzijom 0.8 ili novijom.
- **Crtačeva strana redline datoteka.** Čitanje redline datoteke u CadCraftu i odgovaranje na nju još nije izrađeno.
- **Drugi jezici.** Traka aplikacije za tamilski prelazi za 528 px.

Sve ostalo nalazi se u [Što još nije izrađeno](topic:not-built-yet). Za izdanje prije ovoga pogledajte [Što je novo u 0.7](topic:whats-new-0-7).

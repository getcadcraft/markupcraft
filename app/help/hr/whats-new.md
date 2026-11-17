---
title: Što je novo u 0.9
summary: Bilješke i radna ploča koje se nikad ne ispisuju, šifrirane privatne bilješke i čista kopija za klijenta, skupne poveznice za cijeli skup crteža, alat Luk s deset načina, praćenje drugog recenzenta u Live sesiji i popravak za izbrisane markupe koji ostaju u spremljenom PDF-u.
keywords: što je novo, 0.9, bilješke o izdanju, dnevnik promjena, bilješke, radna ploča, privatne bilješke, lozinka, šifrirano, sakrij bilješke, prikaži bilješke, čista kopija, snimka, skupne poveznice, oznake listova, poveži listove, naslovni blok, broj lista, dopuna, preimenovanje, pdf poveznica, luk, načini luka, luk s tri točke, polumjer, prati, prati me, live, pregled razreda, popis ljudi, izbrisani markup, savjeti, naslovi kartica, promjene, revizije, verzija, zadaci, zadatak, odgovorna osoba, rok, prekoračen rok, provjeri sada, usporedba, glasovna bilješka, odluka, redline, datoteka odgovora, crtač, pomoćnik, mcp, problemi, jezici, ulazni uređaji, trackpad, redci alatne trake, mreža svojstava, ažuriranje
from: dbdd7ed4
---

Ovo je što se promijenilo u MarkupCraftu 0.9 u odnosu na 0.8.1. Glavna ideja je da vaše radne bilješke ostaju izvan stranice koju dobiva klijent, a cijeli skup crteža može se povezati u jednom prolazu.

## Novo

### Bilješke, radna ploča i privatne bilješke

- **Radna ploča.** Područje oko svakog lista je stol: sve što je nacrtano, upisano ili zalijepljeno pored lista je bilješka i nikad se ne ispisuje. Odaberite {{ui:Prikaži radnu ploču}} da se udaljite i dobijete prostora, ili {{ui:Snimka na radnu ploču}}, povucite okvir, zatim {{ui:Na radnu ploču}} da stavite sliku dijela crteža pored lista. Snimka je slika i ne mijenja se kad se list promijeni. Pogledajte [Bilješke, radna ploča i privatne bilješke](topic:notes-and-pasteboard).
- **Prikaži i sakrij bilješke.** Svaki markup može biti bilješka: postavite {{ui:Nove oznake su}} na kartici {{ui:Bilješke}} ili {{ui:Ova oznaka je}} u {{ui:Svojstva}}. {{key:Shift+H}} ili prekidač {{ui:Bilješke}} ispod lista odjednom sakriva i prikazuje sve bilješke. Bilješke se izostavljaju pri ispisu, u spljoštenim kopijama, popisima i izvozima, a drugi PDF čitači ih ne prikazuju. Vaš spremljeni PDF ih zadržava za sljedeći put kad ga otvorite u MarkupCraftu.
- **Privatne bilješke.** Odaberite {{ui:Postavi lozinku}}, zatim označite markup kao {{ui:Privatna napomena}}. Šifrira se u datoteci lozinkom od najmanje 10 znakova, a oporavka nema: nitko, uključujući nas, ne može je otvoriti bez lozinke. {{ui:Zaključaj}} sklanja privatne bilješke; {{ui:Ostani otključano na ovom uređaju}} isključeno je prema zadanim postavkama.
- **Spremi čistu kopiju.** {{ui:Spremi čistu kopiju}} uklanja svaku bilješku, privatnu bilješku i sve što je na radnoj ploči. Koristite je za datoteku koja ide klijentu.

### Povezivanje cijelog skupa

- **Skupne poveznice.** Odaberite {{ui:Stranice}} › {{ui:Skupne poveznice…}}, ili {{ui:Poveži oznake listova…}} pod {{ui:Traži tekst}} na ploči {{ui:Listovi}}. Korak 1 navodi broj i naziv svakog lista kako su pročitani iz njegova naslovnog bloka; ispravite one koji su krivi. Korak 2 navodi pronađene oznake, kao `3/A-501` ili `DETAIL 2 ON A-501`. {{ui:Bit će povezano}} pokazuje list i pogled za svaku, {{ui:Nije povezano}} pokazuje brojeve koje nijedan otvoreni list nema, a {{ui:Izradi poveznice}} izrađuje ih sve u jednom koraku poništavanja. Pokrenite ponovno nakon dopune ili ponovnog numeriranja; poveznice koje ste sami izradili nikad se ne mijenjaju. Poveznica s pogledom sprema se kao PDF poveznica, pa je i drugi čitači otvaraju s detaljom. Pogledajte [Poveznice listova](topic:sheet-links).

### Crtanje

- **Luk, deset načina.** Alat {{ui:Luk}} ({{key:O}}) sad ima okvir {{ui:Način luka}} preko stranice, s deset načina crtanja luka, a kut, duljina, polumjer i smjer mogu se kliknuti ili upisati. Pogledajte [Nacrtajte luk na deset načina](topic:draw-an-arc).

### Zajednički rad

- **Pratite recenzenta.** U Live sesiji odaberite {{ui:Prati}} pored imena osobe i vaš se prikaz pomiče s njezinim; vlastito pomicanje ili zumiranje to zaustavlja. Domaćin može odabrati {{ui:Zamoli sve da me prate}}. Popis ljudi prikazuje boju svake osobe, ime, list na kojem je i kad je bila zadnja izmjena. Pogledajte [Praćenje drugog recenzenta u Live sesiji](topic:follow-in-live).

## U svakoj aplikaciji

- Savjeti pri lebdenju miša su Bootstrap savjeti, početni savjet može se zatvoriti, trake kartica se pomiču kad prelaze širinu, a naslovi kartica preglednika glase `<document> — MarkupCraft | CadCraft`.
- Ploča s više odjeljaka otvara jedan i zatvara ostale (katanac pored strelice zadržava jedan otvoren); prekidač u postavkama to isključuje.
- Svaka aplikacija pokreće se sa zadanom zbirkom objekata knjižnice.
- Jedinice mase i temperature dostupne su u postavkama za jedinice.

## Popravljeno

- **Izbrisani markupi više ne ostaju čitljivi u spremljenom PDF-u.** Spremanje je nekad uklanjalo izbrisanu ili prepisanu anotaciju sa stranice, ali je ostavljalo objekt, s tekstom, u datoteci. Sad spremanje briše te objekte. Datoteke spremljene starijim verzijama i dalje ih sadrže dok ih ponovno ne spremite.

## Iskreno o ograničenjima

- Skupne poveznice isprobane su na našim vlastitim testnim skupovima. Pravi skupovi crtaju oblačiće na mnogo načina, pa se na klijentskom skupu neki pogledi mogu propustiti. Skenirani listovi prvo trebaju {{ui:Pročitaj tekst (OCR)…}}.
- Bilješke, privatne bilješke i radna ploča testirani su u pregledniku bez sučelja i na našim vlastitim datotekama, a ne s velikim pravim vektorskim skupom i ne u pravoj Live sesiji dviju osoba. Promjena lozinke još nije izrađena. Izdanja starija od 0.9 ne prikazuju bilješke.
- Prikaz razreda je popis ljudi; nije isproban sa stvarnim nastavnikom i učenicima.
- Jezici osim engleskog su strojne radne verzije dok ih izvorni govornik ne pročita.
- Instalacijski programi za Windows nisu potpisani kodom (Dodatne informacije, zatim Ipak pokreni); disk slika za macOS nije notarizirana (desni klik, zatim Otvori).

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u MarkupCraftu 0.8 i 0.8.1 u odnosu na 0.7. Velika novost je da markup može biti zadatak koji netko ili vaš pomoćnik obavlja, a koji se sam zatvara kad se crtež stvarno promijeni.

### Novo

**Markupi koji djeluju**

- **Markup kao zadatak.** Odaberite jedan ili više markupa, otvorite karticu {{ui:Zadaci}} i odaberite {{ui:Pretvori odabrano u zadatak}}. Zadatak ima naslov, osobu ili vašeg povezanog pomoćnika koji ga obavlja, neobavezni dan roka i stanje, i zadržava svoje mjesto na listu i svoju raspravu. Pogledajte [Markup kao zadatak](topic:markups-that-act).
- **Zadaci koji se zatvaraju sami.** Zadatak može pratiti crtež unutar svog markupa. Otvorite noviju reviziju lista i odaberite {{ui:Provjeri sada}}: ako su se linije u tom području promijenile za više od dlake, zadatak se označava kao Gotovo, markup postaje Dovršeno, a bilješka u raspravi kaže što se promijenilo. Novi datum ili linije koje su se pomaknule za manje od 1.5 točke ne broje se. Zadatak umjesto toga može pratiti element modela: vaš pomoćnik prijavljuje element alatom `tasks_check`, a kasnije izvješće koje se razlikuje ili izbrisani element zatvara zadatak. Jedan korak poništavanja ga ponovno otvara.
- **Pronađite posao.** Filtrirajte popis {{ui:Zadaci}} prema stanju i prema tome za koga je, uključujući {{ui:Prekoračen rok}}; odaberite {{ui:Dodijeljeno}}, zatim {{ui:Pomoćnik}} da vidite što čeka vašeg pomoćnika. Zadatak čiji je rok prošao prikazuje se kao upozorenje na ploči {{ui:Problemi}}. {{ui:CSV}} izvozi popis. Zadaci se spremaju u PDF s markupom i putuju kroz Live kao i druga svojstva markupa.

**Što se promijenilo, kao običan popis**

- **Popis promjena.** Otvorite karticu {{ui:Usporedba}}, zatim {{ui:Usporedi cijeli skup}}, odaberite raniju i kasniju datoteku i kliknite {{ui:Navedi promjene}}. Popis počinje brojem, zatim obuhvaća svaki promijenjeni list, od najveće promjene: gdje je na listu, kolika je (u stvarnim jedinicama i u in na papiru kod kalibriranog lista), jesu li linije dodane ili uklonjene, koliko markupa se nalazi tamo i koje su se riječi pojavile ili nestale. {{ui:Kopiraj popis}} stavlja ga na međuspremnik, a {{ui:CSV}} zapisuje jedan redak po promjeni. Pogledajte [Popis promjena između revizija](topic:what-changed-in-words).

**Glasovne bilješke i odluke**

- **Glasovne bilješke.** Na kartici {{ui:Bilješke}} odaberite {{ui:Snimi glasovnu bilješku}}, zatim {{ui:Zaustavi snimanje}}; snimanja se sama zaustavljaju nakon dvije minute. Bilješka je prikvačena u središte lista; povucite je tamo gdje pripada i upišite natpis u {{ui:Svojstva}}, a {{ui:Reproduciraj}} na popisu je pušta. Snimka je spremljena unutar PDF-a.
- **Odluke.** {{ui:Prikvači odluku}} upisuje rečenicu ili dvije na list. Ako zamjenjuje raniju odluku, odaberite nju u {{ui:Zamjenjuje}}: stara ostaje, označena kao Zamijenjeno, i upućuje na novu. Jedan korak poništavanja je vraća. Pogledajte [Prikvačivanje glasovnih bilješki i odluka na list](topic:voice-notes-and-decisions).

**Redline prema reviziji**

- **Pošaljite i odgovorite.** Na kartici {{ui:Zadaci}} otvorite {{ui:Redline prema reviziji}}, upišite reviziju na koju se markupi odnose i odaberite {{ui:Izvezi redline datoteku}}. Dobit ćete datoteku `.redline.json` s jednom stavkom po otvorenom markupu: list, položaj (kao udjeli lista, pa se ponovni ispis u drugoj veličini i dalje poklapa), riječi, autor, rasprava i njezin zadatak. Onaj tko crta promjene odgovara Prihvaćeno, Odbijeno ili Gotovo u datoteci `.redline-answers.json`; {{ui:Učitaj datoteku s odgovorima…}} daje svakom markupu taj status i napomenu crtača, kao jedan korak poništavanja. Pogledajte [Pošaljite markupe crtaču kao redline](topic:redline-to-revision).

**AI pomoćnici**

- **Više alata.** Pomoćnik koji ste povezali putem CadCraft Studija može popisati zadatke (`tasks_list`), izraditi ili promijeniti jedan (`task_set`), ukloniti zadatak (`task_clear`), provjeriti jedan prema novijoj reviziji ili elementu (`tasks_check`) i pročitati običan popis promjena između dva otvorena skupa planova (`revisions_changes`). Dobiva samo alate koje ste označili pod prekidačem Pomoćnici, a svaka promjena je jedan korak poništavanja. Pogledajte [Korištenje MarkupCrafta s AI pomoćnikom](topic:use-with-ai-assistants).

### U svakoj aplikaciji

- **Jezici.** CadCraft Studio sad ima 54 jezika. Deset je novo: litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Svi neengleski jezici su strojne radne verzije dok ih izvorni govornik ne pročita.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Ulazni uređaji}} određuje što čine trackpad, bočne tipke miša, olovka, dodiri prstom, 3D miš, igraći kontroler ili MIDI kontroler, za svaku aplikaciju ili samo za ovu. Dok ništa ne promijenite, svaki uređaj radi kao i prije. Pogledajte [Korištenje trackpada, 3D miša ili kontrolera](common:input-devices).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} ima {{ui:Prelomi}} (zadano), {{ui:2 retka}} i {{ui:1 redak}}, pa crtež dobiva više prostora. Pogledajte [Raspored ploča](common:arrange-panels).
- **Mreža svojstava.** Polja stila markupa koriste zajedničku mrežu, sa sklopivim kategorijama i stupcima oznake i vrijednosti.
- **Ploča Problemi.** Upozorenja iz aplikacije, kao zadatak s prekoračenim rokom, skupljaju se na jednoj ploči Problemi.
- **Live i dodaci.** Live sesije opisane su u [Zajednički rad uživo](common:work-together-live); popis dodataka koji slijedi vaš račun nalazi se u [Dodaci i popis vašeg računa](common:addons-basics).
- **Povežite svoj AI.** CadCraft Studio je središte za vašeg pomoćnika: povežite se jednom za svih osam aplikacija. Same aplikacije nemaju vlastiti AI.

### Popravljeno u 0.8.1

- **Studio može mijenjati jezik dok radi.** Prije su desktop aplikacija i pakirana izdanja ostajali na engleskom. Ovo još nije testirano na svim platformama: javite nam ako se jezik ne mijenja.
- Studio 0.8 instalacije dobivaju 0.8.1 putem {{ui:Postavke}} › {{ui:Ažuriranja}}.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows instalacijski programi i macOS .dmg još nemaju potpis. Na Windowsu, ako SmartScreen zaustavi instalaciju, odaberite {{ui:Dodatne informacije}}, zatim {{ui:Ipak pokreni}}. Na Macu desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. Verzije za trgovine su na čekanju.
- **Povezivanje AI-ja još je nedovršeno na nekim mjestima.** Jednoklikovno povezivanje unutar Studija, hostirani konektor za pomoćnike u pregledniku i vlastiti API ključ unutar Studija nisu obećani za ovo izdanje. Tok zadataka testiran je, ali još ne sa stvarnim pomoćnikom.
- **Provjere zadataka trebaju istu veličinu stranice.** List ponovno ispisan u drugoj veličini neće se poklapati, pa se njegovi zadaci neće zatvoriti. Listovi se uparuju prema broju lista, inače prema položaju stranice.
- **Glasovne bilješke su samo snimke.** Nema transkripta, a pomoćnik vidi duljinu bilješke, autora i natpis, ne zvuk. Snimanje je isprobano s lažnim mikrofonom u pregledniku bez sučelja; pravi mikrofon na telefonu, tabletu ili prijenosnom računalu još treba provjeriti.
- **Proračunski listovi i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ignorira taj unos i uklanja ga pri sljedećem spremanju datoteke, pa otvorite i spremite takvu datoteku s verzijom 0.8 ili novijom.
- **Dio za crtača.** CadCraft čitanje redline datoteke i odgovaranje na nju još nije izrađeno.
- **Ostali jezici.** Traka aplikacije za tamilski prelazi za 528 px.

Sve ostalo nalazi se u [Što još nije izrađeno](topic:not-built-yet). Za prethodno izdanje pogledajte [Što je novo u 0.7](topic:whats-new-0-7).

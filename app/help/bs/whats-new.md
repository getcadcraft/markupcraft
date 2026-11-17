---
title: Šta je novo u 0.9
summary: Bilješke i radna ploča koje se nikad ne štampaju, šifrovane privatne bilješke i čista kopija za klijenta, grupne veze za cijeli set crteža, alat Luk s deset metoda, praćenje drugog recenzenta u Live-u i ispravka za izbrisana označavanja koja ostaju u sačuvanom PDF-u.
keywords: šta je novo, 0.9, bilješke o izdanju, dnevnik promjena, bilješke, radna ploča, privatne bilješke, lozinka, šifrovano, sakrij bilješke, prikaži bilješke, čista kopija, snimak, grupne veze, veze na oznake, povezivanje listova, naslovni blok, broj lista, dodatak, preimenuj, pdf veza, luk, metode luka, luk kroz tri tačke, poluprečnik, prati, prati me, uživo, prikaz razreda, spisak ljudi, izbrisano označavanje, savjeti, naslovi kartica, verzija, 0.8, 0.8.1, izdanje, nove funkcije, zadatak, zadaci, izvršilac, dan roka, prekoračen rok, provjeri sada, šta se promijenilo, revizije, poređenje, glasovna bilješka, odluka, redline, datoteka odgovora, crtač, asistent, mcp, problemi, jezici, ulazni uređaji, trackpad, redovi alatne trake, tabela svojstava, ažuriranje
from: dbdd7ed4
---

Ovo je šta se promijenilo u MarkupCraft 0.9, u odnosu na 0.8.1. Glavna ideja je da tvoje radne bilješke ostanu izvan stranice koju dobija klijent, i da se cijeli set crteža može povezati u jednom prolazu.

## Novo

### Bilješke, radna ploča i privatne bilješke

- **Radna ploča.** Prostor oko svakog lista je radni sto: sve što se nacrta, upiše ili nalijepi pored lista je bilješka i nikad se ne štampa. Izaberi {{ui:Prikaži radnu ploču}} da se odmakneš za prostor, ili {{ui:Snimak na radnu ploču}}, povuci okvir, pa {{ui:Na radnu ploču}} da staviš sliku dijela crteža pored lista. Snimak je slika i ne mijenja se kada se list promijeni. Vidi [Bilješke, radna ploča i privatne bilješke](topic:notes-and-pasteboard).
- **Prikaži i sakrij bilješke.** Svako označavanje može biti bilješka: postavi {{ui:Nova označavanja su}} na kartici {{ui:Bilješke}}, ili {{ui:Ova oznaka je}} u {{ui:Svojstva}}. {{key:Shift+H}} ili prekidač {{ui:Bilješke}} ispod lista sakriva i prikazuje sve bilješke odjednom. Bilješke se izostavljaju pri štampanju, kod spljoštenih kopija, spiskova i izvoza, a drugi PDF čitači ih ne prikazuju. Tvoj sačuvani PDF ih zadržava za sljedeće otvaranje u MarkupCraft-u.
- **Privatne bilješke.** Izaberi {{ui:Postavi lozinku}}, pa označavanje postavi kao {{ui:Privatna bilješka}}. Šifruje se u datoteci lozinkom od najmanje 10 znakova, i nema oporavka: niko, uključujući nas, ne može je otvoriti bez lozinke. {{ui:Zaključaj}} sklanja privatne bilješke; {{ui:Ostani otključano na ovom uređaju}} je podrazumijevano isključeno.
- **Čuvaj čistu kopiju.** {{ui:Spasi čistu kopiju}} uklanja svaku bilješku, privatnu bilješku i sve na radnoj ploči. Koristi je za datoteku koja ide klijentu.

### Poveži cijeli set

- **Grupne veze.** Izaberi {{ui:Stranice}} › {{ui:Grupne veze…}}, ili {{ui:Poveži oznake lista…}} pod {{ui:Traži tekst}} na panelu {{ui:Listovi}}. Korak 1 navodi broj i naziv svakog lista kako su pročitani iz njegovog naslovnog bloka; ispravi sve koji nisu tačni. Korak 2 navodi pronađene oznake, kao `3/A-501` ili `DETAIL 2 ON A-501`. {{ui:Povezuje}} pokazuje list i prikaz za svaku, {{ui:Nije povezano}} pokazuje brojeve koje nijedan otvoreni list nema, a {{ui:Napravi veze}} pravi sve u jednom koraku poništavanja. Pokreni ponovo nakon dodatka ili preimenovanja; veze koje si napravio ručno se nikad ne mijenjaju. Veza s prikazom se čuva kao PDF veza, pa je drugi čitači otvaraju zajedno s detaljem. Vidi [Veze listova](topic:sheet-links).

### Crtanje

- **Luk, deset metoda.** Alat {{ui:Luk}} ({{key:O}}) sada ima okvir {{ui:Metoda luka}} preko stranice s deset načina crtanja luka, a ugao, dužina, poluprečnik i smjer mogu se kliknuti ili upisati. Vidi [Nacrtaj luk na deset načina](topic:draw-an-arc).

### Zajednički rad

- **Prati recenzenta.** U živoj sesiji izaberi {{ui:Prati}} pored imena osobe i tvoj prikaz se pomjera s njenim; tvoje vlastito pomjeranje ili zumiranje to zaustavlja. Domaćin može izabrati {{ui:Zamolite sve da prate mene}}. Spisak ljudi prikazuje boju, ime, list na kojem je svako i kada je bila njegova zadnja izmjena. Vidi [Prati drugog recenzenta u živoj sesiji](topic:follow-in-live).

## U svakoj aplikaciji

- Savjeti su Bootstrap savjeti, početni savjet može se zatvoriti, trake kartica se pomjeraju kada su pune, a naslovi kartica u pregledaču glase `<dokument> — MarkupCraft | CadCraft`.
- Panel s više odjeljaka otvara jedan i zatvara ostale (katanac pored strelice drži jedan otvoren); prekidač u Postavkama to isključuje.
- Svaka aplikacija počinje s podrazumijevanom kolekcijom objekata iz Biblioteke.
- Jedinice težine i temperature dostupne su u postavkama jedinica.

## Ispravljeno

- **Izbrisana označavanja više nisu čitljiva unutar sačuvanog PDF-a.** Čuvanje je nekada uklanjalo izbrisanu ili prepisanu napomenu sa stranice, ali je ostavljalo objekat, s njegovim tekstom, u datoteci. Sada čuvanje briše te objekte. Datoteke sačuvane ranijim verzijama i dalje ih sadrže dok ih ponovo ne sačuvaš.

## Iskreno o ograničenjima

- Grupne veze isprobane su na našim vlastitim testnim setovima. Stvarni setovi crtaju oznake na mnogo načina, pa se na klijentskom setu neki prikazi mogu propustiti. Skenirani listovi prvo trebaju {{ui:Pročitaj tekst (OCR)…}}.
- Bilješke, privatne bilješke i radna ploča isprobani su u pregledaču bez prikaza i u našim vlastitim datotekama, ne s velikim stvarnim vektorskim setom i ne u stvarnoj sesiji Live s dvije osobe. Promjena lozinke nije izrađena. Verzije starije od 0.9 ne prikazuju bilješke.
- Prikaz razreda je spisak ljudi; nije isproban sa stvarnim nastavnikom i učenicima.
- Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- Instalateri za Windows nisu potpisani kodom (Više informacija, pa Ipak pokreni); disk slika za macOS nije notarizovana (desni klik, pa Otvori).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u MarkupCraft 0.8 i 0.8.1, u odnosu na 0.7. Velika novina je da označavanje može biti zadatak koji neko, ili tvoj vlastiti asistent, obavlja, i koji se sam zatvara kada se crtež stvarno promijeni.

### Novo

**Označavanja koja djeluju**

- **Označavanje kao zadatak.** Izaberi jedno ili više označavanja, otvori karticu {{ui:Zadaci}} i izaberi {{ui:Pretvori odabrano u zadatak}}. Zadatak ima naslov, osobu ili tvog povezanog asistenta koji ga radi, opcioni dan roka i stanje; zadržava svoje mjesto na listu i svoju nit. Vidi [Označavanje kao zadatak](topic:markups-that-act).
- **Zadaci koji se sami zatvaraju.** Zadatak može pratiti crtež unutar svoje oznake. Otvori noviju reviziju lista i izaberi {{ui:Provjeri sada}}: ako su se linije u tom području promijenile za više od dlake, zadatak se označava kao Završeno, njegovo označavanje postaje Završeno, a bilješka u niti kaže šta se promijenilo. Novi datumski pečat, ili linije pomjerene za manje od 1,5 tačke, se ne računaju. Zadatak umjesto toga može pratiti element modela: tvoj asistent prijavljuje element pomoću `tasks_check`, a kasniji izvještaj koji se razlikuje, ili izbrisani element, zatvara zadatak. Jedan korak poništavanja ga ponovo otvara.
- **Pronađi posao.** Filtriraj spisak {{ui:Zadaci}} po stanju i po tome za koga je, uključujući {{ui:Prekoračen rok}}; izaberi {{ui:Dodijeljeno}}, pa {{ui:Asistent}} da vidiš šta čeka tvog asistenta. Zadatak čiji je dan roka prošao prikazuje se kao upozorenje u panelu Problemi. {{ui:CSV}} izvozi spisak. Zadaci se čuvaju u PDF-u s označavanjem i putuju kroz Live kao i druga svojstva označavanja.

**Šta se promijenilo, kao jednostavan spisak**

- **Popiši promjene.** Otvori karticu {{ui:Poređenje}}, pa {{ui:Poredi cijeli set}}, izaberi raniju i kasniju datoteku i izaberi {{ui:Popiši promjene}}. Spisak počinje brojem, pa obuhvata svaki promijenjeni list, najveću promjenu prvu: gdje je na listu, kolika je (u stvarnim jedinicama, kao i u inčima na papiru na kalibriranom listu), da li su linije dodane ili uklonjene, koliko oznaka se nalazi tu i koje su riječi se pojavile ili nestale. {{ui:Kopiraj spisak}} stavlja ga u međuspremnik, a {{ui:CSV}} upisuje jedan red po promjeni. Vidi [Popiši promjene između revizija](topic:what-changed-in-words).

**Glasovne bilješke i odluke**

- **Glasovne bilješke.** Na kartici {{ui:Bilješke}} izaberi {{ui:Snimi glasovnu bilješku}}, pa {{ui:Zaustavi snimanje}}; snimci se sami zaustavljaju nakon dvije minute. Bilješka je zakačena u središte lista, povučeš je tamo gdje pripada, a naslov upišeš u {{ui:Svojstva}}, i {{ui:Pusti}} u spisku je pušta. Snimak se čuva unutar PDF-a.
- **Odluke.** {{ui:Zakači odluku}} upisuje rečenicu ili dvije na list. Ako zamjenjuje raniju odluku, izaberi tu odluku u {{ui:Zamjenjuje}}: stara ostaje, označena kao Zamijenjeno, i upućuje na novu. Jedan korak poništavanja je vraća. Vidi [Glasovne bilješke i odluke na listu](topic:voice-notes-and-decisions).

**Redline do revizije**

- **Pošalji i odgovori.** Na kartici {{ui:Zadaci}} otvori {{ui:Redline do revizije}}, upiši reviziju na koju se označavanja odnose i izaberi {{ui:Izvezi redline datoteku}}. Dobijaš datoteku `.redline.json` s jednom stavkom po otvorenom označavanju: list, položaj (kao dijelovi lista, pa se ponovno iscrtavanje u drugoj veličini i dalje poklapa), riječi, autor, nit i njen zadatak. Ko crta promjene odgovara Prihvaćeno, Odbijeno ili Završeno u datoteci `.redline-answers.json`; {{ui:Učitaj datoteku s odgovorima…}} daje svakom označavanju taj status i bilješku crtača, kao jedan korak poništavanja. Vidi [Pošalji označavanja crtaču kao redline](topic:redline-to-revision).

**AI asistenti**

- **Više alata.** Asistent koji si povezao preko CadCraft Studija može nabrojati zadatke (`tasks_list`), napraviti ili promijeniti jedan (`task_set`), skinuti zadatak (`task_clear`), provjeriti jedan prema novijoj reviziji ili elementu (`tasks_check`) i pročitati jednostavan spisak promjena između dva otvorena seta planova (`revisions_changes`). Dobija samo alate koje si označio pod prekidačem Asistenti, a svaka promjena je jedan korak poništavanja. Vidi [Koristi MarkupCraft s AI asistentom](topic:use-with-ai-assistants).

### U svakoj aplikaciji

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Svi neengleski su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade trackpad, bočna dugmad miša, olovka, dodir prstom, 3D miš, kontroler za igre ili MIDI kontroler, za svaku aplikaciju ili samo za ovu. Dok ne promijeniš nešto, svaki uređaj radi kao ranije. Vidi [Koristi trackpad, 3D miš ili kontroler](common:input-devices).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} ima {{ui:Prelomi}} (podrazumijevano), {{ui:2 reda}} i {{ui:1 red}}, pa crtež ima više prostora. Vidi [Raspored panela](common:arrange-panels).
- **Tabela svojstava.** Polja Stila označavanja koriste zajedničku tabelu, sa sklopivim kategorijama i kolonama naziva i vrijednosti.
- **Panel Problemi.** Upozorenja iz aplikacije, kao zadatak s prekoračenim rokom, skupljaju se u jednom panelu Problemi.
- **Live i dodaci.** Žive sesije opisane su u [Radi zajedno uživo](common:work-together-live); spisak dodataka koji prati tvoj račun je u [Dodaci i spisak tvog računa](common:addons-basics).
- **Poveži svog AI.** CadCraft Studio je centar za tvog vlastitog asistenta: poveži jednom za svih osam aplikacija. Aplikacije nemaju vlastitu AI.

### Ispravljeno u 0.8.1

- **Studio može promijeniti jezik dok radi.** Ranije su desktop aplikacija i pakovana izdanja ostajali na engleskom. Ovo još nije testirano na svim platformama: javi nam ako se jezik ne mijenja.
- Instalacije Studija 0.8 nude 0.8.1 kroz {{ui:Postavke}} › {{ui:Ažuriranja}}.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows instalateri i macOS .dmg još nemaju potpis. Na Windows-u, ako SmartScreen zaustavi instalaciju, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, desni klik na CadCraft Studio i izaberi {{ui:Otvori}}. Verzije za prodavnice su na čekanju.
- **Povezivanje AI-ja je nedovršeno na nekim mjestima.** Povezivanje jednim klikom unutar Studija, hostovani konektor za AI asistente u pregledaču i vlastiti API ključ unutar Studija nisu obećani za ovo izdanje. Petlja zadataka je isprobana, ali još nije s pravim asistentom.
- **Provjere zadataka traže istu veličinu stranice.** List ponovo iscrtan u drugoj veličini se neće poklopiti, pa njegovi zadaci neće da se zatvore. Listovi se upoređuju po broju lista, inače po položaju stranice.
- **Glasovne bilješke su samo snimci.** Nema transkripta, a asistent vidi dužinu bilješke, autora i naslov, a ne zvuk. Snimanje je isprobano s lažnim mikrofonom u pregledaču; pravi mikrofon na telefonu, tabletu ili laptopu još treba provjeriti.
- **Proračunski listovi i obrazloženja u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ignoriše taj unos i briše ga pri sljedećem čuvanju datoteke, pa takvu datoteku otvori i sačuvaj s verzijom 0.8 ili novijom.
- **Crtačeva strana redlinea.** Da CadCraft čita redline datoteku i odgovara na nju, još nije izrađeno.
- **Drugi jezici.** Traka aplikacije na tamilskom prelazi za 528 px.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet). Za izdanje prije ovoga, vidi [Šta je novo u 0.7](topic:whats-new-0-7).

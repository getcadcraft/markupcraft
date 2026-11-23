---
title: Šta je novo u 0.9 (ranije)
summary: Beleške i radna tabla koje se nikad ne štampaju, šifrovane privatne beleške i čista kopija za klijenta, grupne veze za ceo skup crteža, alat Luk sa deset načina, praćenje drugog recenzenta u Live sesiji i ispravka za obrisana označavanja koja ostaju u sačuvanom PDF-u.
keywords: šta je novo 0.9, ranije izdanje, šta je novo, 0.9, beleške, radna tabla, privatne beleške, lozinka, šifrovano, sakrij beleške, prikaži beleške, čista kopija, snimak, grupne veze, upućivanja listova, povezivanje listova, naslovni blok, broj lista, dopuna, preimenovanje, pdf veza, luk, načini luka, luk sa tri tačke, poluprečnik, prati, prati me, live, pogled klase, spisak ljudi, obrisano označavanje, opisi alatki, naslovi kartica, šta je novo, izmene, 0.8, 0.8.1, verzija, nove funkcije, zadatak, zadaci, izvršilac, rok, zakasnelo, proveri sada, šta se promenilo, revizije, uporedi, glasovna beleška, odluka, crvena linija, datoteka odgovora, crtač, asistent, mcp, problemi, jezici, ulazni uređaji, tačped, redovi alatki, mreža svojstava, ažuriranje
from: aa3dfeb8
---

Ovo je šta se promenilo u MarkupCraft 0.9, u poređenju sa 0.8.1. Glavna ideja je da radne beleške ostaju van strane koju dobija klijent, a ceo skup crteža može da se poveže u jednom prolazu.

## Novo

### Beleške, radna tabla i privatne beleške

- **Radna tabla.** Prostor oko svakog lista je radni sto: sve što se nacrta, ukuca ili nalepi pored lista je beleška i nikad se ne štampa. Izaberi {{ui:Prikaži radnu tablu}} da se pregled odmakne i dobije više prostora, ili {{ui:Snimak na radnu tablu}}, prevuci okvir, pa {{ui:Na radnu tablu}} da staviš sliku dela crteža pored lista. Snimak je slika i ne menja se kad se list promeni. Pogledaj [Beleške, radna tabla i privatne beleške](topic:notes-and-pasteboard).
- **Prikaži i sakrij beleške.** Svako označavanje može biti beleška: postavi {{ui:Nova označavanja su}} na kartici {{ui:Beleške}}, ili {{ui:Ovo označavanje je}} u {{ui:Svojstva}}. {{key:Shift+H}} ili prekidač {{ui:Beleške}} ispod lista sakriva i prikazuje sve beleške odjednom. Beleške se izostavljaju iz štampanja, ravnih kopija, spiskova i izvoza, a drugi PDF čitači ih ne prikazuju. Sačuvan PDF ih zadržava za sledeće otvaranje u MarkupCraft-u.
- **Privatne beleške.** Izaberi {{ui:Postavi lozinku}}, zatim napravi označavanje {{ui:Privatna napomena}}. Ono se šifruje u datoteci lozinkom od najmanje 10 znakova, a oporavka nema: niko, ni mi, ne može da ga otvori bez lozinke. {{ui:Zaključaj}} sklanja privatne beleške; {{ui:Ostani otključano na ovom uređaju}} je podrazumevano isključeno.
- **Sačuvaj čistu kopiju.** {{ui:Sačuvaj čistu kopiju}} uklanja sve beleške, privatne beleške i sve što je na radnoj tabli. Koristi je za datoteku koja ide klijentu.

### Povezivanje celog skupa

- **Grupne veze.** Izaberi {{ui:Stranice}} › {{ui:Grupne veze…}}, ili {{ui:Poveži upućivanja listova…}} pod {{ui:Traži tekst}} u panelu {{ui:Listovi}}. Korak 1 navodi broj i naziv svakog lista kako je pročitan iz njegovog naslovnog bloka; ispravi one koji nisu tačni. Korak 2 navodi pronađena upućivanja, kao što su `3/A-501` ili `DETAIL 2 ON A-501`. {{ui:Povezaće}} prikazuje list i pogled za svako, {{ui:Nije povezano}} prikazuje brojeve koje nijedan otvoreni list nema, a {{ui:Napravi veze}} pravi sve u jednom koraku poništavanja. Pokreni ponovo posle dopune ili promene numeracije; veze koje si ručno napravio nikad se ne menjaju. Veza sa pogledom se čuva kao PDF veza, pa je i drugi čitači otvaraju sa detaljem. Pogledaj [Veze listova](topic:sheet-links).

### Crtanje

- **Luk, deset načina.** Alat {{ui:Luk}} ({{key:O}}) sada ima okvir {{ui:Način luka}} preko strane sa deset načina za crtanje luka, a ugao, dužina, poluprečnik i smer mogu da se kliknu ili ukucaju. Pogledaj [Nacrtaj luk na deset načina](topic:draw-an-arc).

### Zajednički rad

- **Prati drugog recenzenta.** U Live sesiji izaberi {{ui:Prati}} pored imena osobe i tvoj pogled se pomera zajedno sa njenim; ako sam pomeraš ili uvećavaš, praćenje prestaje. Domaćin može da izabere {{ui:Zamoli sve da prate mene}}. Spisak ljudi prikazuje boju, ime svake osobe, list na kome je i kada je bila poslednja izmena. Pogledaj [Prati drugog recenzenta u Live sesiji](topic:follow-in-live).

## U svakoj aplikaciji

- Opisi alatki su Bootstrap opisi, početni savet može da se zatvori, trake kartica se pomeraju kad su pune, a naslovi kartica pregledača glase `<document> — MarkupCraft | CadCraft`.
- Panel sa više odeljaka otvara jedan i zatvara ostale (katanac pored strelice drži jedan otvoren); prekidač u {{ui:Podešavanja}} to isključuje.
- Svaka aplikacija počinje od podrazumevanog skupa objekata biblioteke.
- Jedinice za težinu i temperaturu su dostupne u podešavanjima za jedinice.

## Ispravljeno

- **Obrisana označavanja više ne ostaju čitljiva u sačuvanom PDF-u.** Čuvanje je ranije sa strane uklanjalo obrisanu ili prepisanu anotaciju, ali je u datoteci ostavljalo objekat sa tekstom. Sada čuvanje briše te objekte. Datoteke sačuvane ranijim verzijama i dalje ih sadrže dok ih ponovo ne sačuvaš.

## Iskrena ograničenja

- Grupne veze su isprobane na našim test skupovima. Pravi skupovi crtaju oznake na mnogo načina, pa se na klijentskom skupu neki pogledi mogu propustiti. Skenirani listovi prvo traže {{ui:Pročitaj tekst (OCR)…}}.
- Beleške, privatne beleške i radna tabla su testirani u headless pregledaču i na našim datotekama, a ne na velikom pravom vektorskom skupu i ne u pravoj Live sesiji sa dve osobe. Promena lozinke nije napravljena. Verzije starije od 0.9 ne prikazuju beleške.
- Pogled klase je spisak ljudi; nije isproban sa pravim nastavnikom i učenicima.
- Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- Windows instalateri nisu potpisani kodom (Više informacija, pa Ipak pokreni); disk slika za macOS nije notarizovana (desni klik, pa Otvori).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u MarkupCraft 0.8 i 0.8.1, u poređenju sa 0.7. Velika novina je da označavanje može biti zadatak koji neko, ili tvoj asistent, obavlja, a koji se sam zatvara kada se crtež stvarno promeni.

### Novo

**Označavanja koja deluju**

- **Napravi označavanje zadatkom.** Izaberi jedno ili više označavanja, otvori karticu {{ui:Zadaci}} i izaberi {{ui:Napravi zadatak od izabranih}}. Zadatak ima naslov, osobu ili tvog povezanog asistenta koji ga radi, opcioni rok i stanje, i zadržava svoje mesto na listu i svoju nit. Pogledaj [Napravi označavanje zadatkom](topic:markups-that-act).
- **Zadaci koji se sami zatvaraju.** Zadatak može da prati crtež unutar svog označavanja. Otvori noviju reviziju lista i izaberi {{ui:Proveri sada}}: ako su se linije u tom području promenile za više od dlake, zadatak se označava kao Urađeno, njegovo označavanje postaje Završeno, a beleška u niti kaže šta se promenilo. Novi datumski žig, ili linije koje su se pomerile za manje od 1,5 tačke, ne računaju se. Zadatak umesto toga može da prati element modela: tvoj asistent prijavljuje element sa `tasks_check`, a kasniji izveštaj koji se razlikuje, ili obrisan element, zatvara zadatak. Jedan korak poništavanja ga ponovo otvara.
- **Pronađi posao.** Filtriraj spisak {{ui:Zadaci}} po stanju i po tome za koga je, uključujući {{ui:Zakasnelo}}; izaberi {{ui:Dodeljeno}}, pa {{ui:Asistent}} da vidiš šta čeka tvog asistenta. Zadatak koji je prošao rok prikazuje se kao upozorenje u panelu Problemi. {{ui:CSV}} izvozi spisak. Zadaci se čuvaju u PDF-u uz označavanje i putuju kroz Live kao druga svojstva označavanja.

**Šta se promenilo, kao običan spisak**

- **Navedi izmene.** Otvori karticu {{ui:Uporedi}}, zatim {{ui:Uporedi ceo skup}}, izaberi raniju i kasniju datoteku i izaberi {{ui:Navedi izmene}}. Spisak počinje brojem, pa obuhvata svaki izmenjeni list, najveću promenu prvu: gde je na listu, koliko je velika (u stvarnim jedinicama, kao i u palcima na papiru kod kalibrisanog lista), da li su linije dodate ili uklonjene, koliko označavanja je tu i koje su se reči pojavile ili nestale. {{ui:Kopiraj spisak}} ga stavlja na privremenu memoriju, a {{ui:CSV}} piše jedan red po promeni. Pogledaj [Spisak šta se promenilo između revizija](topic:what-changed-in-words).

**Glasovne beleške i odluke**

- **Glasovne beleške.** Na kartici {{ui:Beleške}} izaberi {{ui:Snimi glasovnu belešku}}, zatim {{ui:Zaustavi snimanje}}; snimci se sami zaustavljaju posle dva minuta. Beleška je zakačena u središte lista, prevučeš je tamo gde pripada i ukucaš natpis u {{ui:Svojstva}}, a {{ui:Pusti}} u spisku je pušta. Snimak se čuva unutar PDF-a.
- **Odluke.** {{ui:Zakači odluku}} ispisuje rečenicu ili dve na listu. Ako zamenjuje raniju odluku, izaberi tu u {{ui:Zamenjuje}}: stara ostaje, označena kao Zamenjeno, i upućuje na novu. Jedan korak poništavanja je vraća. Pogledaj [Zakači glasovne beleške i odluke na list](topic:voice-notes-and-decisions).

**Crvena linija do revizije**

- **Pošalji i odgovori.** Na kartici {{ui:Zadaci}} otvori {{ui:Crvena linija do revizije}}, ukucaj reviziju na koju se označavanja odnose i izaberi {{ui:Izvezi datoteku crvene linije}}. Dobijaš datoteku `.redline.json` sa jednom stavkom po otvorenom označavanju: list, položaj (kao delovi lista, pa se ponovno štampanje u drugoj veličini i dalje poklapa), reči, autor, nit i njegov zadatak. Ko crta izmene odgovara Prihvaćeno, Odbijeno ili Urađeno u datoteci `.redline-answers.json`; {{ui:Učitaj datoteku odgovora…}} daje svakom označavanju taj status i napomenu crtača, kao jedan korak poništavanja. Pogledaj [Pošalji označavanja crtaču kao crvenu liniju](topic:redline-to-revision).

**AI asistenti**

- **Više alata.** Asistent koga si povezao preko CadCraft Studija može da navede zadatke (`tasks_list`), napravi ili promeni jedan (`task_set`), skine zadatak (`task_clear`), proveri jedan prema novijoj reviziji ili elementu (`tasks_check`) i pročita običan spisak izmena između dva otvorena skupa planova (`revisions_changes`). Dobija samo alate koje si označio pod prekidačem {{ui:Asistenti}}, a svaka promena je jedan korak poništavanja. Pogledaj [Koristi MarkupCraft sa AI asistentom](topic:use-with-ai-assistants).

### U svakoj aplikaciji

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset je novo: litvanski, letonski, bosanski, maratski, telugu, albanski, afrikanski, filipinski, svahili i uzbekistanski. Svi jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade tačped, bočna dugmad miša, olovka, dodir prstom, 3D miš, kontroler za igre ili MIDI kontroler, za svaku aplikaciju ili samo za ovu. Dok ništa ne promeniš, svaki uređaj radi kao ranije. Pogledaj [Koristi tačped, 3D miš ili kontroler](common:input-devices).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} ima {{ui:Prelomi}} (podrazumevano), {{ui:2 reda}} i {{ui:1 red}}, pa crtež dobija više prostora. Pogledaj [Raspored panela](common:arrange-panels).
- **Mreža svojstava.** Polja Stila kod označavanja koriste zajedničku mrežu, sa sklopivim kategorijama i kolonama za nazive i vrednosti.
- **Panel problema.** Upozorenja iz aplikacije, kao zadatak sa prekoračenim rokom, skupljaju se u jednom panelu Problemi.
- **Live i dodaci.** Live sesije su opisane u [Radite zajedno uživo](common:work-together-live); spisak dodataka koji prati tvoj nalog je u [Dodaci i spisak na tvom nalogu](common:addons-basics).
- **Poveži svog AI.** CadCraft Studio je središte za tvog asistenta: poveži ga jednom za svih osam aplikacija. Aplikacije ne sadrže sopstveni AI.

### Ispravljeno u 0.8.1

- **Studio može da menja jezik dok radi.** Ranije su desktop aplikacija i spakovana izdanja ostajali na engleskom. Ovo još nije isprobano na svakoj platformi: javi nam ako se jezik ne menja.
- Instalacije Studija 0.8 nude 0.8.1 preko {{ui:Podešavanja}} › {{ui:Ažuriranja}}.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows instalateri i macOS .dmg još nemaju potpis. Na Windows-u, ako SmartScreen zaustavi instalater, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u desnim klikom na CadCraft Studio izaberi {{ui:Otvori}}. Izdanja za prodavnice su na čekanju.
- **Povezivanje AI-ja je na nekim mestima nedovršeno.** Povezivanje jednim klikom unutar Studija, hostovani konektor za AI asistente u pregledaču i tvoj API ključ unutar Studija nisu obećani za ovo izdanje. Petlja zadataka je isprobana, ali još ne sa pravim asistentom.
- **Provere zadataka traže istu veličinu strane.** List ponovo štampan u drugoj veličini se neće poklopiti, pa se njegovi zadaci ne zatvaraju. Listovi se upoređuju po broju lista, a inače po položaju strane.
- **Glasovne beleške su samo snimci.** Nema transkripta, a asistent vidi dužinu beleške, autora i natpis, a ne zvuk. Snimanje je isprobano sa lažnim mikrofonom u headless pregledaču; pravi mikrofon na telefonu, tabletu ili laptopu još treba proveriti.
- **Proračunske tabele i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ignoriše taj unos i briše ga pri sledećem čuvanju, pa otvori i sačuvaj takvu datoteku sa 0.8 ili novijom.
- **Strana crtača za crvene linije.** CadCraft još ne čita datoteku crvene linije i ne odgovara na nju.
- **Drugi jezici.** Traka aplikacije za tamilski prelazi za 528 px.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet). Za izdanje pre ovog, pogledaj [Šta je novo u 0.7](topic:whats-new-0-7).

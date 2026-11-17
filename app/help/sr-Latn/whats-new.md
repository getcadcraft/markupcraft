---
title: Šta je novo u 0.9
summary: Beleške i radna tabla koje se nikada ne štampaju, šifrovane privatne beleške i čista kopija za klijenta, grupne veze za ceo set crteža, alatka Luk sa deset metoda, praćenje drugog recenzenta uživo i ispravka za obrisana označavanja koja ostaju u sačuvanom PDF-u.
keywords: šta je novo, što je novo, 0.9, beleške o izdanju, dnevnik promena, beleške, radna tabla, privatne beleške, lozinka, šifrovano, sakrij beleške, prikaži beleške, čista kopija, snimak, grupne veze, napomene na listovima, poveži listove, blok naslova, broj lista, preimenovanje, pdf veza, luk, metode luka, luk kroz tri tačke, poluprečnik, prati, prati me, uživo, prikaz razreda, spisak ljudi, obrisano označavanje, opisi alatki, naslovi kartica, promene, 0.8, 0.8.1, verzija, nove funkcije, zadatak, zadaci, izvršilac, dan roka, prekoračeno, proveri sada, šta se promenilo, revizije, uporedi, glasovna beleška, odluka, crvena linija, datoteka odgovora, crtač, asistent, mcp, problemi, jezici, ulazni uređaji, tačped, redovi alatki, tabela svojstava, ažuriranje
from: dbdd7ed4
---

Ovo je šta se promenilo u MarkupCraft 0.9, u odnosu na 0.8.1. Glavna ideja je da vaše radne beleške ostaju van listova koje dobija klijent, a ceo set crteža može se povezati u jednom prolazu.

## Novo

### Beleške, radna tabla i privatne beleške

- **Radna tabla.** Prostor oko svakog lista je radni sto: sve što se nacrta, upiše ili nalepi pored lista je beleška i nikada se ne štampa. Izaberite {{ui:Prikaži radnu tablu}} da biste se udaljili radi prostora, ili {{ui:Snimak na radnu tablu}}, prevucite okvir, pa {{ui:Na radnu tablu}} da stavite sliku dela crteža pored lista. Snimak je slika i ne menja se kada se list promeni. Videti [Beleške, radna tabla i privatne beleške](topic:notes-and-pasteboard).
- **Prikaz i skrivanje beleški.** Svako označavanje može biti beleška: postavite {{ui:Nova označavanja su}} na kartici {{ui:Beleške}} ili {{ui:Ovo označavanje je}} u {{ui:Svojstva}}. {{key:Shift+H}} ili prekidač {{ui:Beleške}} ispod lista sakriva i prikazuje sve beleške odjednom. Beleške su izostavljene iz štampanja, ravnih kopija, spiskova i izvoza, a drugi PDF čitači ih ne prikazuju. Vaš sačuvani PDF ih zadržava za sledeće otvaranje u MarkupCraft-u.
- **Privatne beleške.** Izaberite {{ui:Postavi lozinku}}, pa označavanje postavite na {{ui:Privatna napomena}}. Ono se šifruje u datoteci lozinkom od najmanje 10 znakova, i nema oporavka: niko, uključujući nas, ne može da ga otvori bez lozinke. {{ui:Zaključaj}} sklanja privatne beleške; {{ui:Ostani otključano na ovom uređaju}} je podrazumevano isključeno.
- **Sačuvajte čistu kopiju.** {{ui:Sačuvaj čistu kopiju}} uklanja svaku belešku, privatnu belešku i sve na radnoj tabli. Koristite je za datoteku koja ide klijentu.

### Povezivanje celog seta

- **Grupne veze.** Izaberite {{ui:Stranice}} › {{ui:Grupne veze…}}, ili {{ui:Poveži napomene listova…}} pod {{ui:Traži tekst}} na panelu {{ui:Listovi}}. Korak 1 navodi broj i naziv svakog lista, kako su pročitani iz bloka naslova; ispravite one koji nisu tačni. Korak 2 navodi pronađene napomene, kao što su `3/A-501` ili `DETAIL 2 ON A-501`. {{ui:Povezaće}} pokazuje list i pogled za svaku, {{ui:Nije povezano}} pokazuje brojeve koje nijedan otvoreni list nema, a {{ui:Napravi veze}} pravi sve u jednom koraku opozivanja. Pokrenite ponovo posle dodatka ili preimenovanja; veze koje ste napravili ručno se nikada ne menjaju. Veza sa pogledom se čuva kao PDF veza, pa i drugi čitači otvaraju detalj. Videti [Veze listova](topic:sheet-links).

### Crtanje

- **Luk, deset metoda.** Alatka {{ui:Luk}} ({{key:O}}) sada ima okvir {{ui:Način luka}} preko lista sa deset načina za crtanje luka, a ugao, dužina, poluprečnik i smer mogu se kliknuti ili upisati. Videti [Nacrtajte luk na deset načina](topic:draw-an-arc).

### Zajednički rad

- **Praćenje recenzenta.** U Live sesiji izaberite {{ui:Prati}} pored imena osobe, pa se vaš prikaz pomera zajedno sa njenim; sopstveno pomeranje ili zumiranje to zaustavlja. Domaćin može izabrati {{ui:Zamoli sve da prate mene}}. Spisak ljudi prikazuje boju, ime i list na kom je svako, kao i kada je bila njegova poslednja izmena. Videti [Praćenje drugog recenzenta u Live sesiji](topic:follow-in-live).

## U svakoj aplikaciji

- Opisi alatki su Bootstrap opisi, početni savet može da se zatvori, trake kartica se pomeraju kada se prelivaju, a naslovi kartica u pregledaču glase `<dokument> — MarkupCraft | CadCraft`.
- Panel sa više odeljaka otvara jedan i zatvara ostale (katanac pored strelice zadržava jedan otvoren); prekidač u Podešavanjima to isključuje.
- Svaka aplikacija počinje od podrazumevane zbirke objekata iz biblioteke.
- Jedinice težine i temperature dostupne su u podešavanjima jedinica.

## Ispravljeno

- **Obrisana označavanja više ne ostaju čitljiva unutar sačuvanog PDF-a.** Čuvanje je nekada uklanjalo obrisanu ili prepisanu anotaciju sa njene stranice, ali je objekat sa tekstom ostajao u datoteci. Sada čuvanje briše te objekte. Datoteke sačuvane ranijim verzijama i dalje ih sadrže dok ih ponovo ne sačuvate.

## Iskreni limiti

- Grupne veze su isprobane na našim sopstvenim test-setovima. Pravi setovi crtaju oblačiće na mnogo načina, pa na klijentskom setu neki pogledi mogu biti propušteni. Skenirani listovi prvo traže {{ui:Pročitaj tekst (OCR)…}}.
- Beleške, privatne beleške i radna tabla isprobani su u pregledaču bez prikaza i u našim datotekama, ne sa velikim pravim vektorskim setom i ne u pravoj Live sesiji sa dvoje ljudi. Promena lozinke nije napravljena. Verzije starije od 0.9 ne prikazuju beleške.
- Prikaz razreda je spisak ljudi; nije isproban sa pravim nastavnikom i učenicima.
- Jezici osim engleskog su mašinski nacrti dok ih izvorni govornik ne pročita.
- Windows instalateri nisu potpisani kodom (Više informacija, pa Ipak pokreni); macOS disk slika nije notarizovana (desni klik, pa Otvori).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u MarkupCraft 0.8 i 0.8.1, u odnosu na 0.7. Velika novina je da označavanje može biti zadatak koji neko, ili vaš sopstveni asistent, obavlja, a koji se sam zatvara kada se crtež zaista promeni.

### Novo

**Označavanja koja deluju**

- **Označavanje kao zadatak.** Izaberite jedno ili više označavanja, otvorite karticu {{ui:Zadaci}} i izaberite {{ui:Napravi zadatak od izabranih}}. Zadatak ima naslov, osobu ili vašeg povezanog asistenta da ga uradi, opcioni rok (dan) i stanje, i čuva svoje mesto na listu i svoju nit. Videti [Označavanje kao zadatak](topic:markups-that-act).
- **Zadaci koji se zatvaraju sami.** Zadatak može da prati crtež unutar svog označavanja. Otvorite noviju reviziju lista i izaberite {{ui:Proveri sada}}: ako su se linije u tom području promenile za više od dlake, zadatak se označava kao Završen, njegovo označavanje postaje Završeno, a beleška u niti kaže šta se promenilo. Novi datum, ili linije koje su se pomerile za manje od 1.5 points, ne računaju se. Zadatak može umesto toga da prati element modela: vaš asistent prijavljuje element pomoću `tasks_check`, a kasniji izveštaj koji se razlikuje, ili obrisan element, zatvara zadatak. Jedan korak opozivanja ga ponovo otvara.
- **Nađite posao.** Filtrirajte spisak {{ui:Zadaci}} po stanju i po tome za koga je, uključujući {{ui:Zakasnelo}}; izaberite {{ui:Dodeljeno}}, pa {{ui:Asistent}} da vidite šta čeka vašeg asistenta. Zadatak posle roka prikazuje se kao upozorenje na panelu Problemi. {{ui:CSV}} izvozi spisak. Zadaci se čuvaju u PDF-u uz označavanje i putuju kroz Live kao druga svojstva označavanja.

**Šta se promenilo, kao običan spisak**

- **Navedi izmene.** Otvorite karticu {{ui:Uporedi}}, pa {{ui:Uporedi ceo set}}, izaberite raniju i kasniju datoteku i kliknite {{ui:Navedi izmene}}. Spisak počinje brojem, pa obuhvata svaki izmenjen list, od najveće promene: gde je na listu, koliko je velika (u stvarnim jedinicama i u inches na papiru na kalibrisanom listu), da li su linije dodate ili uklonjene, koliko označavanja se nalazi tu i koje su se reči pojavile ili nestale. {{ui:Kopiraj spisak}} ga stavlja u privremenu memoriju, a {{ui:CSV}} upisuje jedan red po promeni. Videti [Navedi šta se promenilo između revizija](topic:what-changed-in-words).

**Glasovne beleške i odluke**

- **Glasovne beleške.** U kartici {{ui:Beleške}} izaberite {{ui:Snimi glasovnu belešku}}, pa {{ui:Zaustavi snimanje}}; snimci se sami zaustavljaju posle dva minuta. Beleška je zakačena u središtu lista; prevucite je tamo gde pripada i upišite natpis u {{ui:Svojstva}}, a {{ui:Pusti}} na spisku je pušta. Snimak se čuva unutar PDF-a.
- **Odluke.** {{ui:Zakači odluku}} upisuje rečenicu ili dve na list. Ako zamenjuje raniju odluku, izaberite tu u {{ui:Zamenjuje}}: stara ostaje, označena kao Zamenjeno, i pokazuje na novu. Jedan korak opozivanja je vraća. Videti [Zakačite glasovne beleške i odluke na list](topic:voice-notes-and-decisions).

**Crvena linija do revizije**

- **Pošaljite i odgovorite.** Na kartici {{ui:Zadaci}} otvorite {{ui:Crvena linija do revizije}}, upišite reviziju na koju se označavanja odnose i izaberite {{ui:Izvezi datoteku crvene linije}}. Dobijate datoteku `.redline.json` sa jednom stavkom za svako otvoreno označavanje: list, položaj (kao razlomci lista, pa ponovno iscrtavanje na drugoj veličini i dalje se poklapa), reči, autora, nit i njegov zadatak. Ko crta izmene odgovara sa Prihvaćeno, Odbijeno ili Završeno u datoteci `.redline-answers.json`; {{ui:Učitaj datoteku odgovora…}} daje svakom označavanju taj status i belešku crtača, kao jedan korak opozivanja. Videti [Pošaljite označavanja crtaču kao crvenu liniju](topic:redline-to-revision).

**AI asistenti**

- **Više alatki.** Asistent koji ste povezali preko CadCraft Studija može da navede zadatke (`tasks_list`), napravi ili izmeni jedan (`task_set`), skine zadatak (`task_clear`), proveri jedan prema novijoj reviziji ili elementu (`tasks_check`) i pročita običan spisak promena između dva otvorena seta planova (`revisions_changes`). Dobija samo alatke koje ste označili pod prekidačem Asistenti, a svaka promena je jedan korak opozivanja. Videti [Koristite MarkupCraft sa AI asistentom](topic:use-with-ai-assistants).

### U svakoj aplikaciji

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikans, filipinski, svahili i uzbečki. Svi jezici osim engleskog su mašinski nacrti dok ih izvorni govornik ne pročita.
- **Ulazni uređaji.** {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade tačped, bočna dugmad miša, olovka, dodiri prstom, 3D miš, kontroler za igre ili MIDI kontroler, za svaku aplikaciju ili samo za ovu. Dok ništa ne menjate, svaki uređaj radi kao ranije. Videti [Koristite tačped, 3D miš ili kontroler](common:input-devices).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} ima {{ui:Prelomi}} (podrazumevano), {{ui:2 reda}} i {{ui:1 red}}, pa crtež dobija više prostora. Videti [Raspoređivanje panela](common:arrange-panels).
- **Tabela svojstava.** Polja Stila označavanja koriste zajedničku tabelu, sa sklopivim kategorijama i kolonama za naziv i vrednost.
- **Panel Problemi.** Upozorenja iz aplikacije, kao zadatak posle roka, skupljaju se na jednom panelu Problemi.
- **Live i dodaci.** Žive sesije su opisane u [Radite zajedno uživo](common:work-together-live); spisak dodataka koji prati vaš nalog je u [Dodaci i spisak vašeg naloga](common:addons-basics).
- **Povežite vašu AI.** CadCraft Studio je centar za vašeg sopstvenog asistenta: povežite se jednom za svih osam aplikacija. Aplikacije nemaju sopstvenu veštačku inteligenciju.

### Ispravljeno u 0.8.1

- **Studio može da promeni jezik dok radi.** Ranije su desktop aplikacija i spakovana izdanja ostajali na engleskom. Ovo još nije isprobano na svim platformama: javite nam ako se jezik ne menja.
- Instalacije Studija 0.8 nude 0.8.1 kroz {{ui:Podešavanja}} › {{ui:Ažuriranja}}.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows instalateri i macOS .dmg još nemaju potpis. Na Windows-u, ako SmartScreen zaustavi instalater, kliknite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. Verzije za prodavnice su na čekanju.
- **Povezivanje AI je nedovršeno na nekim mestima.** Povezivanje jednim klikom unutar Studija, hostovani konektor za asistente u pregledaču i vaš sopstveni API ključ unutar Studija nisu obećani za ovo izdanje. Petlja zadataka je isprobana, ali još nije sa pravim asistentom.
- **Provere zadataka traže istu veličinu stranice.** List ponovo iscrtan na drugoj veličini se ne poklapa, pa se njegovi zadaci ne zatvaraju. Listovi se upoređuju po broju lista, a ako ga nema, po položaju na stranici.
- **Glasovne beleške su samo snimci.** Nema transkripta, a asistent vidi dužinu beleške, autora i natpis, ne zvuk. Snimanje je isprobano sa lažnim mikrofonom u pregledaču; pravi mikrofon na telefonu, tabletu ili laptopu još treba proveriti.
- **Obračunski listovi i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ignoriše taj unos i briše ga pri sledećem čuvanju datoteke, pa otvorite i sačuvajte takvu datoteku sa 0.8 ili novijim.
- **Strana crtača crvenih linija.** Da CadCraft čita datoteku crvene linije i odgovara na nju, još nije napravljeno.
- **Drugi jezici.** Traka aplikacije na tamilskom prelazi za 528 px.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet). Za prethodno izdanje, videti [Šta je novo u 0.7](topic:whats-new-0-7).

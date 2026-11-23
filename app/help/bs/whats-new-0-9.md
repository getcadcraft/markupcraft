---
title: Šta je novo u 0.9 (ranije)
summary: Bilješke i radna ploča koje se nikad ne štampaju, šifrovane privatne bilješke i čista kopija za klijenta, grupne veze za cijeli set crteža, alat Luk s deset metoda, praćenje drugog pregledača u Live sesiji i ispravka za obrisane oznake koje ostaju u spašenom PDF-u.
keywords: šta je novo 0.9, raniji izdanje, šta je novo, 0.9, bilješke o izdanju, dnevnik promjena, bilješke, radna ploča, privatne bilješke, lozinka, šifrovano, sakrij bilješke, prikaži bilješke, čista kopija, snimak, grupne veze, veze oznaka lista, poveži listove, blok naslova, broj lista, dodatak, preimenovanje, pdf veza, luk, metode luka, luk kroz tri tačke, poluprečnik, prati, prati me, live, pogled razreda, spisak ljudi, obrisana oznaka, savjeti, naslovi kartica, promjene, 0.8, 0.8.1, verzija, nove funkcije, zadatak, zadaci, zaduženi, rok, prekoračen rok, provjeri sada, šta se promijenilo, revizije, poređenje, glasovna bilješka, odluka, redline, datoteka odgovora, crtač, asistent, mcp, problemi, jezici, ulazni uređaji, trackpad, redovi alatne trake, tabela svojstava, ažuriranje
from: aa3dfeb8
---

Ovo se promijenilo u MarkupCraftu 0.9 u odnosu na 0.8.1. Glavna ideja je da radne bilješke ostaju van stranice koju dobija klijent, a cijeli set crteža može se povezati u jednom prolazu.

## Novo

### Bilješke, radna ploča i privatne bilješke

- **Radna ploča.** Prostor oko svakog lista je radni sto: sve što se nacrta, upiše ili nalijepi pored lista je bilješka i nikad se ne štampa. Odaberi {{ui:Prikaži radnu ploču}} da se uvećaš za prostor, ili {{ui:Snimak na radnu ploču}}, povuci okvir, zatim {{ui:Na radnu ploču}} da staviš sliku dijela crteža pored lista. Snimak je slika i ne mijenja se kad se list promijeni. Pogledaj [Bilješke, radna ploča i privatne bilješke](topic:notes-and-pasteboard).
- **Prikaži i sakrij bilješke.** Svaka oznaka može biti bilješka: postavi {{ui:New markups are}} na kartici {{ui:Bilješke}}, ili {{ui:This markup is}} u {{ui:Svojstva}}. {{key:Shift+H}} ili prekidač {{ui:Bilješke}} ispod lista sakriva i prikazuje sve bilješke odjednom. Bilješke se izostavljaju iz štampanja, ravnih kopija, spiskova i izvoza, a drugi PDF čitači ih ne prikazuju. Tvoj spašeni PDF ih čuva za sljedeći put kad ga otvoriš u MarkupCraftu.
- **Privatne bilješke.** Odaberi {{ui:Postavi lozinku}}, zatim napravi oznaku {{ui:A private note}}. Šifruje se u datoteci lozinkom od najmanje 10 znakova, i nema oporavka: niko, uključujući nas, ne može je otvoriti bez lozinke. {{ui:Zaključaj}} sklanja privatne bilješke; {{ui:Ostani otključano na ovom uređaju}} je isključeno kao zadano.
- **Spasi čistu kopiju.** {{ui:Spasi čistu kopiju}} uklanja svaku bilješku, privatnu bilješku i sve na radnoj ploči. Koristi je za datoteku koja ide klijentu.

### Povezivanje cijelog seta

- **Grupne veze.** Odaberi {{ui:Stranice}} › {{ui:Grupne veze…}}, ili {{ui:Poveži oznake lista…}} pod {{ui:Traži tekst}} u panelu {{ui:Listovi}}. Korak 1 navodi broj i naziv svakog lista kako su pročitani iz njegovog bloka naslova; ispravi one koji nisu tačni. Korak 2 navodi pronađene oznake, kao što su `3/A-501` ili `DETAIL 2 ON A-501`. {{ui:Povezaće}} pokazuje list i pogled za svaku, {{ui:Nije povezano}} pokazuje brojeve koje nijedan otvoreni list nema, a {{ui:Napravi veze}} pravi sve u jednom koraku poništavanja. Pokreni ponovo nakon dodatka ili preimenovanja; veze koje si napravio ručno se nikad ne mijenjaju. Veza s pogledom se spašava kao PDF veza, pa i drugi čitači otvaraju detalj. Pogledaj [Veze listova](topic:sheet-links).

### Crtanje

- **Luk, deset metoda.** Alat {{ui:Luk}} ({{key:O}}) sada ima okvir {{ui:Metoda luka}} preko stranice s deset načina crtanja luka, a ugao, dužina, poluprečnik i smjer mogu se kliknuti ili upisati. Pogledaj [Nacrtaj luk na deset načina](topic:draw-an-arc).

### Zajednički rad

- **Prati pregledača.** U Live sesiji odaberi {{ui:Prati}} pored imena osobe i tvoj pogled se pomjera s njenim; tvoje vlastito pomjeranje ili zumiranje to zaustavlja. Domaćin može odabrati {{ui:Zamolite sve da prate mene}}. Spisak ljudi prikazuje boju, ime svake osobe, list na kojem je i kada je bila posljednja izmjena. Pogledaj [Prati drugog pregledača u Live sesiji](topic:follow-in-live).

## U svim aplikacijama

- Savjeti su Bootstrap savjeti, početni savjet se može zatvoriti, trake kartica se pomjeraju kad se prepune, a naslovi kartica u pregledaču glase `<document> — MarkupCraft | CadCraft`.
- Panel s više odjeljaka otvara jedan i zatvara ostale (katanac pored kursora održava jedan otvorenim); prekidač u {{ui:Postavke}} to isključuje.
- Svaka aplikacija počinje sa zadanom zbirkom objekata iz biblioteke.
- Jedinice za težinu i temperaturu dostupne su u postavkama {{ui:Jedinice}}.

## Ispravljeno

- **Obrisane oznake više nisu čitljive unutar spašenog PDF-a.** Čuvanje je nekad uklanjalo obrisanu ili prepisanu anotaciju sa stranice, ali je ostavljalo objekat, s njenim tekstom, u datoteci. Sada čuvanje briše te objekte. Datoteke spašene starijim verzijama i dalje ih sadrže dok ih ne spasiš ponovo.

## Iskrena ograničenja

- Grupne veze su isprobane na našim test setovima. Stvarni setovi crtaju mjehuriće na mnogo načina, pa se na klijentskom setu neki pogledi mogu propustiti. Skenirane listove prvo treba obraditi s {{ui:Pročitaj tekst (OCR)…}}.
- Bilješke, privatne bilješke i radna ploča isprobani su u browseru bez prikaza i u našim datotekama, ne s velikim stvarnim vektorskim setom i ne u stvarnoj Live sesiji s dvije osobe. Promjena lozinke nije napravljena. Verzije starije od 0.9 ne prikazuju bilješke.
- Razredni prikaz je spisak ljudi; nije isproban sa stvarnim nastavnikom i učenicima.
- Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- Instalateri za Windows nisu potpisani kodom ({{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}); macOS disk slika nije notarizovana (desni klik, zatim {{ui:Otvori}}).

## Ranije: 0.8 i 0.8.1

Ovo se promijenilo u MarkupCraftu 0.8 i 0.8.1 u odnosu na 0.7. Najveća novina je da oznaka može biti zadatak koji neko, ili tvoj asistent, obavlja, i koji se sam zatvara kad se crtež stvarno promijeni.

### Novo

**Oznake koje djeluju**

- **Napravi oznaku zadatkom.** Odaberi jednu ili više oznaka, otvori karticu {{ui:Zadaci}} i odaberi {{ui:Pretvori odabrano u zadatak}}. Zadatak ima naslov, osobu ili tvog povezanog asistenta koji ga obavlja, opcioni rok i stanje, i zadržava svoje mjesto na listu i svoju nit. Pogledaj [Napravi oznaku zadatkom](topic:markups-that-act).
- **Zadaci koji se sami zatvaraju.** Zadatak može pratiti crtež unutar svoje oznake. Otvori noviju reviziju lista i odaberi {{ui:Provjeri sada}}: ako su se linije u tom području promijenile za više od dlake, zadatak se označava kao Done, njegova oznaka postaje Completed, a bilješka u niti kaže šta se promijenilo. Novi datumski žig ili linije koje su se pomjerile za manje od 1.5 tačaka ne računaju se. Zadatak može umjesto toga pratiti element modela: tvoj asistent prijavljuje element pomoću `tasks_check`, a kasnija prijava koja se razlikuje, ili obrisan element, zatvara zadatak. Jedan korak poništavanja ga ponovo otvara.
- **Pronađi posao.** Filtriraj listu {{ui:Zadaci}} po stanju i po tome kome je namijenjen, uključujući {{ui:Prekoračen rok}}; odaberi {{ui:Dodijeljeno}}, zatim {{ui:Asistent}} da vidiš šta čeka tvog asistenta. Zadatak čiji je rok prošao prikazuje se kao upozorenje na panelu {{ui:Problemi}}. {{ui:CSV}} izvozi listu. Zadaci se spašavaju u PDF-u zajedno s oznakom i putuju kroz Live kao druga svojstva oznake.

**Šta se promijenilo, kao običan spisak**

- **Popiši promjene.** Otvori karticu {{ui:Poređenje}}, zatim {{ui:Uporedi cijeli set}}, odaberi raniju i kasniju datoteku i odaberi {{ui:Popiši promjene}}. Spisak počinje brojem, zatim obuhvata svaki promijenjeni list, najveću promjenu prvu: gdje je na listu, koliko je velika (u stvarnim jedinicama, kao i u inčima papira na kalibrisanom listu), da li su linije dodate ili uklonjene, koliko oznaka se nalazi tu i koje su riječi pojavljene ili nestale. {{ui:Kopiraj spisak}} stavlja ga na privremenu memoriju, a {{ui:CSV}} piše jedan red po promjeni. Pogledaj [Popiši šta se promijenilo između revizija](topic:what-changed-in-words).

**Glasovne bilješke i odluke**

- **Glasovne bilješke.** Na kartici {{ui:Bilješke}} odaberi {{ui:Snimi glasovnu bilješku}}, zatim {{ui:Zaustavi snimanje}}; snimci se sami zaustavljaju poslije dvije minute. Bilješka je zakačena u središte lista, povučeš je tamo gdje treba i upišeš natpis u {{ui:Svojstva}}, a {{ui:Pusti}} na listi je reproducira. Snimak se čuva unutar PDF-a.
- **Odluke.** {{ui:Zakači odluku}} piše rečenicu ili dvije na list. Ako zamjenjuje raniju odluku, odaberi nju u {{ui:Zamjenjuje}}: stara ostaje, označena kao Replaced, i pokazuje na novu. Jedan korak poništavanja je vraća. Pogledaj [Zakači glasovne bilješke i odluke na list](topic:voice-notes-and-decisions).

**Redline do revizije**

- **Pošalji i odgovori.** Na kartici {{ui:Zadaci}} otvori {{ui:Redline do revizije}}, upiši reviziju na koju se oznake odnose i odaberi {{ui:Izvezi redline datoteku}}. Dobijaš datoteku `.redline.json` s jednom stavkom po otvorenoj oznaci: list, položaj (kao razlomci lista, pa se ponovno štampanje u drugoj veličini i dalje poklapa), riječi, autor, nit i njen zadatak. Ko crta izmjene odgovara Accepted, Rejected ili Done u datoteci `.redline-answers.json`; {{ui:Učitaj datoteku s odgovorima…}} daje svakoj oznaci taj status i bilješku crtača, kao jedan korak poništavanja. Pogledaj [Pošalji oznake crtaču kao redline](topic:redline-to-revision).

**AI asistenti**

- **Više alata.** Asistent koji si povezao kroz CadCraft Studio može popisati zadatke (`tasks_list`), napraviti ili promijeniti jedan (`task_set`), skinuti zadatak (`task_clear`), provjeriti jedan u odnosu na noviju reviziju ili element (`tasks_check`) i pročitati obični spisak promjena između dva otvorena seta planova (`revisions_changes`). Dobija samo alate koje si označio pod prekidačem Asistenti, a svaka promjena je jedan korak poništavanja. Pogledaj [Koristi MarkupCraft s AI asistentom](topic:use-with-ai-assistants).

### U svim aplikacijama

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset je novo: litvanski, latvijski, bosanski, marati, telugu, albanski, afrikanski, filipinski, svahili i uzbečki. Svi jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta trackpad, bočna dugmad miša, olovka, dodir prstom, 3D miš, kontroler za igre ili MIDI kontroler radi, za svaku aplikaciju ili samo za ovu. Dok ne promijeniš nešto, svaki uređaj radi kao prije. Pogledaj [Koristi trackpad, 3D miš ili kontroler](common:input-devices).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} ima {{ui:Prelomi}} (zadano), {{ui:2 reda}} i {{ui:1 red}}, pa crtež dobija više prostora. Pogledaj [Rasporedi panele](common:arrange-panels).
- **Tabela svojstava.** Polja Stil oznake koriste zajedničku tabelu, s sklopivim kategorijama i kolonama za naziv i vrijednost.
- **Panel problema.** Upozorenja iz aplikacije, kao zadatak kojem je prošao rok, skupljaju se na jednom panelu {{ui:Problemi}}.
- **Live i dodaci.** Live sesije su opisane u [Radite zajedno uživo](common:work-together-live); spisak dodataka koji prati tvoj račun je u [Osnove dodataka i spisak računa](common:addons-basics).
- **Poveži svoj AI.** CadCraft Studio je središte za tvog asistenta: poveži ga jednom za svih osam aplikacija. Same aplikacije nemaju vlastitu AI.

### Ispravljeno u 0.8.1

- **Studio može promijeniti jezik dok radi.** Ranije su desktop aplikacija i pakovana izdanja ostajala na engleskom. Ovo još nije isprobano na svakoj platformi: javi nam ako se jezik ne mijenja.
- Instalacije Studija 0.8 dobijaju 0.8.1 kroz {{ui:Postavke}} › {{ui:Ažuriranja}}.

### Još nije u ovoj verziji

- **Nije potpisano kodom.** Instalateri za Windows i macOS .dmg još nemaju potpis. Na Windowsu, ako SmartScreen zaustavi instalater, odaberi {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu desnom tipkom klikni CadCraft Studio i odaberi {{ui:Otvori}}. Verzije za prodavnice su na čekanju.
- **Povezivanje AI-ja je djelimično nedovršeno.** Povezivanje jednim klikom unutar Studija, hostovani konektor za asistente u browseru i tvoj vlastiti API ključ unutar Studija nisu obećani za ovo izdanje. Petlja zadataka je isprobana, ali još nije sa stvarnim asistentom.
- **Provjera zadataka traži istu veličinu stranice.** List ponovo štampan u drugoj veličini se neće poklopiti, pa se njegovi zadaci ne zatvaraju. Listovi se upoređuju po broju lista, a ako ga nema, po položaju stranice.
- **Glasovne bilješke su samo snimci.** Nema transkripta, a asistent vidi dužinu bilješke, autora i natpis, ne zvuk. Snimanje je isprobano s lažnim mikrofonom u browseru; pravi mikrofon na telefonu, tabletu ili laptopu tek treba provjeriti.
- **Kalkulacioni listovi i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ignoriše taj unos i odbacuje ga pri sljedećem čuvanju, pa datoteku takve vrste otvori i spasi s verzijom 0.8 ili novijom.
- **Crtačeva strana redlinea.** CadCraft čitanje redline datoteke i odgovaranje na nju još nije napravljeno.
- **Drugi jezici.** Traka aplikacije za tamilski prelazi granicu za 528 px.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet). Za izdanje prije ovoga pogledaj [Šta je novo u 0.7](topic:whats-new-0-7).

---
title: Što je novo u verzijama 0.8 i 0.8.1
summary: Oznake koje postaju zadaci i sami se zatvaraju, jednostavan popis promjena između revizija, glasovne bilješke i odluke na listu, redline datoteke za crtača te zajedničke promjene verzije 0.8: ulazni uređaji, redci alatne trake, Problemi, više jezika.
keywords: što je novo, bilješke o izdanju, popis promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, zadatak, zadaci, dodijeljeno, rok, prekoračen rok, provjeri sada, što se promijenilo, revizije, usporedba, glasovna bilješka, odluka, redline, datoteka s odgovorima, crtač, pomoćnik, mcp, problemi, jezici, ulazni uređaji, trackpad, redci alatne trake, rešetka svojstava, ažuriranje
from: 40368796
---

Ovo je popis promjena u MarkupCraftu 0.8 i 0.8.1 u usporedbi s verzijom 0.7. Velika novost je da oznaka može biti zadatak koji netko, ili vaš vlastiti pomoćnik, obavlja, a koji se sam zatvara kada se crtež stvarno promijeni.

## Novo

### Oznake koje djeluju

- **Pretvorite oznaku u zadatak.** Odaberite jednu ili više oznaka, otvorite karticu {{ui:Zadaci}} i odaberite {{ui:Pretvori odabrano u zadatak}}. Zadatak ima naslov, osobu ili vašeg povezanog pomoćnika koji ga obavlja, neobavezan rok i stanje, a zadržava svoje mjesto na listu i svoju raspravu. Pogledajte [Pretvorite oznaku u zadatak](topic:markups-that-act).
- **Zadaci koji se sami zatvaraju.** Zadatak može pratiti crtež unutar svoje oznake. Otvorite noviju reviziju lista i odaberite {{ui:Provjeri sada}}: ako su se linije u tom području promijenile za više od neznatne mjere, zadatak se označava kao Gotovo, oznaka prelazi u stanje Dovršeno, a bilješka u raspravi kaže što se promijenilo. Novi datum ili linije koje su se pomaknule za manje od 1.5 točaka ne računaju se. Zadatak umjesto toga može pratiti element modela: vaš pomoćnik prijavljuje element pomoću `tasks_check`, a kasnija prijava koja se razlikuje ili obrisani element zatvaraju zadatak. Jedan korak poništavanja ga ponovno otvara.
- **Pronađite posao.** Filtrirajte popis {{ui:Zadaci}} prema stanju i prema tome za koga je, uključujući {{ui:Prekoračen rok}}; odaberite {{ui:Dodijeljeno}}, zatim {{ui:Pomoćnik}} da vidite što čeka vašeg pomoćnika. Zadatak čiji je rok prošao prikazuje se kao upozorenje na ploči Problemi. {{ui:CSV}} izvozi popis. Zadaci se spremaju u PDF zajedno s oznakom i putuju kroz Live kao i ostala svojstva oznake.

### Što se promijenilo, kao jednostavan popis

- **Popišite promjene.** Otvorite karticu {{ui:Usporedba}}, zatim {{ui:Usporedi cijeli skup}}, odaberite raniju i kasniju datoteku te odaberite {{ui:Navedi promjene}}. Popis počinje brojem, zatim obuhvaća svaki promijenjeni list, od najveće promjene prema najmanjoj: gdje je na listu, koliko je velika (u stvarnim jedinicama, ali i u palcima na papiru na kalibriranom listu), jesu li linije dodane ili uklonjene, koliko oznaka se nalazi tu te koje su riječi pojavile ili nestale. {{ui:Kopiraj popis}} stavlja ga u međuspremnik, a {{ui:CSV}} zapisuje po jedan redak za svaku promjenu. Pogledajte [Popišite što se promijenilo između revizija](topic:what-changed-in-words).

### Glasovne bilješke i odluke

- **Glasovne bilješke.** Na kartici {{ui:Bilješke}} odaberite {{ui:Snimi glasovnu bilješku}}, zatim {{ui:Zaustavi snimanje}}; snimanje se samo zaustavlja nakon dvije minute. Bilješka je prikvačena u središte lista, povučete je tamo gdje pripada i upišete opis u {{ui:Svojstva}}, a {{ui:Reproduciraj}} na popisu je pušta. Snimka se sprema unutar PDF-a.
- **Odluke.** {{ui:Prikvači odluku}} na list upisuje rečenicu ili dvije. Ako zamjenjuje raniju odluku, odaberite nju pod {{ui:Zamjenjuje}}: stara ostaje, označena kao Zamijenjeno, i upućuje na novu. Jedan korak poništavanja je vraća. Pogledajte [Prikvačite glasovne bilješke i odluke na list](topic:voice-notes-and-decisions).

### Redline prema reviziji

- **Pošaljite i odgovorite.** Na kartici {{ui:Zadaci}} otvorite {{ui:Redline prema reviziji}}, upišite reviziju na koju se oznake odnose i odaberite {{ui:Izvezi redline datoteku}}. Dobit ćete datoteku `.redline.json` s po jednom stavkom za svaku otvorenu oznaku: list, položaj (kao udjeli lista, pa se ponovni ispis u drugoj veličini i dalje poklapa), riječi, autor, rasprava i njezin zadatak. Onaj tko crta promjene odgovara u datoteci `.redline-answers.json` sa stanjem Prihvaćeno, Odbijeno ili Gotovo. {{ui:Učitaj datoteku s odgovorima…}} daje svakoj oznaci taj status i bilješku crtača, kao jedan korak poništavanja. Pogledajte [Pošaljite oznake crtaču kao redline](topic:redline-to-revision).

### AI pomoćnici

- **Više alata.** Pomoćnik povezan preko CadCraft Studija može popisati zadatke (`tasks_list`), izraditi ili promijeniti jedan (`task_set`), ukloniti zadatak (`task_clear`), provjeriti jedan u odnosu na noviju reviziju ili element (`tasks_check`) i pročitati jednostavan popis promjena između dva otvorena skupa planova (`revisions_changes`). Dobiva samo alate koje ste označili pod prekidačem Pomoćnici, a svaka promjena je jedan korak poništavanja. Pogledajte [Upotreba MarkupCrafta s AI pomoćnikom](topic:use-with-ai-assistants).

## U svim aplikacijama

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset ih je novo: litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Svi neengleski jezici su strojni prijevodi dok ih ne pregleda izvorni govornik.
- **Ulazni uređaji.** {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Ulazni uređaji}} određuje što rade trackpad, bočne tipke miša, olovka, dodir prstom, 3D miš, igraći kontroler ili MIDI kontroler, za svaku aplikaciju ili samo za ovu. Dok ništa ne promijenite, svaki uređaj radi kao i prije. Pogledajte [Upotreba trackpada, 3D miša ili kontrolera](common:input-devices).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} ima {{ui:Prelomi}} (zadano), {{ui:2 retka}} i {{ui:1 redak}}, pa crtež dobiva više prostora. Pogledajte [Raspored ploča](common:arrange-panels).
- **Rešetka svojstava.** Polja stila oznake koriste zajedničku rešetku, sa sklopivim kategorijama te stupcima za oznaku i vrijednost.
- **Ploča Problemi.** Upozorenja iz aplikacije, poput zadatka s prekoračenim rokom, skupljaju se na jednoj ploči Problemi.
- **Live i dodaci.** Sesije Live opisane su u [Zajednički rad uživo](common:work-together-live); popis dodataka koji slijedi vaš račun nalazi se u [Dodaci i popis vašeg računa](common:addons-basics).
- **Povežite svoj AI.** CadCraft Studio je središte za vašeg vlastitog pomoćnika: povežite ga jednom za svih osam aplikacija. Same aplikacije nemaju vlastitu umjetnu inteligenciju.

## Ispravljeno u 0.8.1

- **Studio može promijeniti jezik dok radi.** Prije su desktop aplikacija i pakirana izdanja ostajali na engleskom. Ovo još nije provjereno na svim platformama: javite nam ako se jezik ne promijeni.
- Instalacije programa Studio 0.8 nude nadogradnju na 0.8.1 kroz {{ui:Postavke}} › {{ui:Ažuriranja}}.

## Još nije u ovoj verziji

- **Nisu digitalno potpisane.** Instalateri za Windows i .dmg za macOS još nemaju digitalni potpis. Na Windowsu, ako SmartScreen zaustavi instalater, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. Izdanja za trgovine su odgođena.
- **Povezivanje vašeg AI-ja nije dovršeno na nekim mjestima.** Povezivanje jednim klikom unutar Studio, posluženi konektor za pomoćnike u pregledniku i vlastiti API ključ unutar Studio nisu obećani za ovo izdanje. Ciklus zadataka je testiran, ali još ne sa stvarnim pomoćnikom.
- **Provjere zadataka traže istu veličinu stranice.** List ponovno ispisan u drugoj veličini neće se podudarati, pa se njegovi zadaci neće zatvoriti. Listovi se uparuju prema broju lista, a inače prema položaju stranice.
- **Glasovne bilješke su samo snimke.** Nema transkripta, a pomoćnik vidi duljinu, autora i opis bilješke, a ne zvuk. Snimanje je isprobano s lažnim mikrofonom u pregledniku bez grafičkog sučelja; stvarni mikrofon na telefonu, tabletu ili prijenosnom računalu još treba provjeriti.
- **Listovi za izračun i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Starija verzija programa MarkupCraft ignorira taj unos i odbaci ga pri sljedećem spremanju datoteke, pa takve datoteke otvarajte i spremajte s verzijom 0.8 ili novijom.
- **Strana crtača u redline datotekama.** Da CadCraft čita redline datoteku i odgovara na nju, još nije izrađeno.
- **Ostali jezici.** Traka aplikacije na tamilskom prelazi za 528 px.

Sve ostalo nalazi se u [Što još nije izrađeno](topic:not-built-yet). Za prethodno izdanje pogledajte [Što je novo u 0.7](topic:whats-new-0-7).

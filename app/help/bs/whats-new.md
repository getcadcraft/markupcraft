---
title: Šta je novo u 0.8 i 0.8.1
summary: Označavanja koja postaju zadaci i sama se zatvaraju, običan spisak šta se promijenilo između revizija, glasovne bilješke i odluke na planu, redline datoteke za crtača, te zajedničke promjene verzije 0.8: ulazni uređaji, redovi alatne trake, Problem, više jezika.
keywords: šta je novo, what's new, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, zadatak, zadaci, izvršilac, rok, prekoračen rok, provjeri sada, šta se promijenilo, revizije, poređenje, glasovna bilješka, odluka, redline, datoteka odgovora, crtač, asistent, mcp, problemi, jezici, ulazni uređaji, trackpad, redovi alatne trake, tabela svojstava, ažuriranje
from: 40368796
---

Ovo je šta se promijenilo u MarkupCraft 0.8 i 0.8.1, u poređenju s 0.7. Velika novina je da označavanje može biti zadatak koji neko, ili vaš asistent, obavlja, i koji se sam zatvara kada se crtež stvarno promijeni.

## Novo

### Označavanja koja djeluju

- **Pretvori označavanje u zadatak.** Odaberite jedno ili više označavanja, otvorite karticu {{ui:Tasks}} i izaberite {{ui:Make selected a task}}. Zadatak ima naslov, osobu ili vašeg povezanog asistenta koji ga obavlja, opcioni rok i stanje, i zadržava svoje mjesto na listu i svoju nit. Vidi [Pretvori označavanje u zadatak](topic:markups-that-act).
- **Zadaci koji se sami zatvaraju.** Zadatak može pratiti crtež unutar svog označavanja. Otvorite noviju reviziju lista i izaberite {{ui:Check now}}: ako su se linije u tom području promijenile za više od neznatne veličine, zadatak se označava kao završen, njegovo označavanje postaje Completed, a bilješka u niti kaže šta se promijenilo. Novi datumski žig ili linije koje su se pomjerile za manje od 1,5 tačke ne računaju se. Zadatak umjesto toga može pratiti element modela: vaš asistent prijavljuje element pomoću `tasks_check`, a kasnija prijava koja se razlikuje, ili obrisan element, zatvara zadatak. Jedan korak poništavanja ga ponovo otvara.
- **Pronađite posao.** Filtrirajte listu {{ui:Tasks}} prema stanju i prema tome za koga je, uključujući {{ui:Overdue}}; izaberite {{ui:Assigned to}}, pa {{ui:Assistant}} da vidite šta čeka vašeg asistenta. Zadatak čiji je rok prošao prikazuje se kao upozorenje na panelu Problem. {{ui:CSV}} izvozi listu. Zadaci se čuvaju u PDF-u zajedno s označavanjem i putuju kroz Live kao i druga svojstva označavanja.

### Šta se promijenilo, kao običan spisak

- **Popiši promjene.** Otvorite karticu {{ui:Compare}}, zatim {{ui:Uporedi cijeli set}}, izaberite raniju i kasniju datoteku i izaberite {{ui:List the changes}}. Spisak počinje brojem, zatim obuhvata svaki promijenjeni list, od najveće promjene prema najmanjoj: gdje je na listu, koliko je velika (u stvarnim jedinicama, kao i u papirnim inčima na kalibrisanom listu), da li su linije dodane ili uklonjene, koliko označavanja se nalazi tu i koje su riječi pojavile ili nestale. {{ui:Copy the list}} stavlja spisak na clipboard, a {{ui:CSV}} piše jedan red po promjeni. Vidi [Popiši šta se promijenilo između revizija](topic:what-changed-in-words).

### Glasovne bilješke i odluke

- **Glasovne bilješke.** Na kartici {{ui:Notes}} izaberite {{ui:Record a voice note}}, pa {{ui:Stop recording}}; snimanje se samo zaustavlja nakon dvije minute. Bilješka se zakači u središte lista, prevucite je tamo gdje pripada i upišite natpis u {{ui:Properties}}, a {{ui:Play}} na listi je pušta. Snimak se čuva unutar PDF-a.
- **Odluke.** {{ui:Pin a decision}} upisuje jednu ili dvije rečenice na list. Ako zamjenjuje raniju odluku, izaberite tu odluku u {{ui:It replaces}}: stara ostaje, označena kao Replaced, i upućuje na novu. Jedan korak poništavanja je vraća. Vidi [Zakači glasovne bilješke i odluke na list](topic:voice-notes-and-decisions).

### Redline do revizije

- **Pošaljite i odgovorite.** Na kartici {{ui:Tasks}} otvorite {{ui:Redline to revision}}, upišite reviziju na koju se označavanja odnose i izaberite {{ui:Export redline file}}. Dobijate datoteku `.redline.json` s jednom stavkom po otvorenom označavanju: list, položaj (kao razlomci lista, tako da se ponovni ispis u drugoj veličini i dalje poklapa), riječi, autor, nit i njen zadatak. Ko crta promjene odgovara u datoteci `.redline-answers.json` sa stanjem Accepted, Rejected ili Done; {{ui:Load answers file…}} daje svakom označavanju to stanje i bilješku crtača, kao jedan korak poništavanja. Vidi [Pošalji označavanja crtaču kao redline](topic:redline-to-revision).

### AI asistenti

- **Više alata.** Asistent koji ste povezali kroz CadCraft Studio može popisati zadatke (`tasks_list`), napraviti ili izmijeniti jedan (`task_set`), skinuti zadatak (`task_clear`), provjeriti jedan u odnosu na noviju reviziju ili element (`tasks_check`) i pročitati običan spisak promjena između dva otvorena seta planova (`revisions_changes`). Dobija samo alate koje ste označili pod prekidačem Assistants, a svaka promjena je jedan korak poništavanja. Vidi [Koristi MarkupCraft s AI asistentom](topic:use-with-ai-assistants).

## U svim aplikacijama

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili i uzbečki. Svi neengleski jezici su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} određuje šta trackpad, bočna dugmad miša, olovka, dodir prstom, 3D miš, kontroler za igre ili MIDI kontroler radi, za svaku aplikaciju ili samo za ovu. Dok ništa ne promijenite, svaki uređaj radi kao i prije. Vidi [Koristi trackpad, 3D miš ili kontroler](common:input-devices).
- **Redovi alatne trake.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ima {{ui:Wrap}} (podrazumijevano), {{ui:2 rows}} i {{ui:1 row}}, tako da crtež dobija više prostora. Vidi [Rasporedi panele](common:arrange-panels).
- **Tabela svojstava.** Polja stila označavanja koriste zajedničku tabelu, sa sklopivim kategorijama i kolonama za natpis i vrijednost.
- **Panel Problem.** Upozorenja iz aplikacije, kao što je zadatak s prekoračenim rokom, skupljaju se na jednom panelu Problem.
- **Live i dodaci.** Live sesije su opisane u [Radite zajedno uživo](common:work-together-live); spisak dodataka koji slijedi vaš račun nalazi se u [Dodaci i spisak vašeg računa](common:addons-basics).
- **Povežite svoj AI.** CadCraft Studio je centralno mjesto za vašeg asistenta: povežite se jednom za svih osam aplikacija. Aplikacije nemaju vlastitu AI funkciju.

## Ispravljeno u 0.8.1

- **Studio može promijeniti jezik dok radi.** Ranije su desktop aplikacija i spakovana izdanja ostajali na engleskom. Ovo još nije testirano na svim platformama: javite nam ako se jezik ne mijenja.
- Instalacije Studija 0.8 nude 0.8.1 kroz {{ui:Settings}} › {{ui:Updates}}.

## Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows instalateri i macOS .dmg još nemaju potpis. Na Windowsu, ako SmartScreen zaustavi instalater, izaberite {{ui:More info}}, pa {{ui:Run anyway}}. Na Macu kliknite desnim tasterom na CadCraft Studio i izaberite {{ui:Open}}. Izdanja za prodavnice su na čekanju.
- **Povezivanje AI-ja je na nekim mjestima nedovršeno.** Povezivanje jednim klikom unutar Studija, hostovani konektor za asistente u pregledaču i vlastiti API ključ unutar Studija nisu obećani za ovo izdanje. Petlja zadataka je testirana, ali još nije s pravim asistentom.
- **Provjere zadataka traže istu veličinu stranice.** List ponovo ispisan u drugoj veličini se neće poklopiti, pa se njegovi zadaci ne zatvaraju. Listovi se upoređuju po broju lista, a ako ga nema, po položaju stranice.
- **Glasovne bilješke su samo snimci.** Nema transkripta, a asistent vidi dužinu bilješke, autora i natpis, a ne zvuk. Snimanje je isprobano s lažnim mikrofonom u headless pregledaču; pravi mikrofon na telefonu, tabletu ili laptopu još treba provjeriti.
- **Proračunski listovi i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ignoriše taj unos i odbacuje ga pri sljedećem čuvanju datoteke, pa takvu datoteku otvarajte i čuvajte s verzijom 0.8 ili novijom.
- **Crtačeva strana redlinea.** CadCraft čitanje redline datoteke i odgovaranje na nju još nije izgrađeno.
- **Drugi jezici.** Traka aplikacije za tamilski prelazi za 528 px.

Sve ostalo je u [Šta još nije izgrađeno](topic:not-built-yet). Za izdanje prije ovoga, vidi [Šta je novo u 0.7](topic:whats-new-0-7).

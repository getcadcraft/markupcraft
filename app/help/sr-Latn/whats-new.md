---
title: Šta je novo u 0.8 i 0.8.1
summary: Označavanja koja postaju zadaci i sama se zatvaraju, običan spisak promena između revizija, glasovne beleške i odluke na planu, datoteke crvene linije za crtača, i zajedničke promene verzije 0.8: ulazni uređaji, redovi alatki, Problemi, više jezika.
keywords: šta je novo, release notes, beleške o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, zadatak, zadaci, izvršilac, rok, zakasnelo, proveri sada, šta se promenilo, revizije, uporedi, glasovna beleška, odluka, crvena linija, datoteka odgovora, crtač, asistent, mcp, problemi, jezici, ulazni uređaji, tačped, redovi alatki, tabela svojstava, ažuriranje
from: 40368796
---

Ovo je šta se promenilo u MarkupCraft 0.8 i 0.8.1, u poređenju sa 0.7. Glavna novina je da označavanje može biti zadatak koji neko, ili vaš sopstveni asistent, obavlja, i koji se sam zatvara kada se crtež stvarno promeni.

## Novo

### Označavanja koja deluju

- **Napravi od označavanja zadatak.** Izaberi jedno ili više označavanja, otvori karticu {{ui:Zadaci}} i izaberi {{ui:Napravi zadatak od izabranih}}. Zadatak ima naslov, osobu ili vašeg povezanog asistenta koji ga obavlja, opcioni rok i stanje, i zadržava svoje mesto na listu i svoju nit. Pogledaj [Napravi od označavanja zadatak](topic:markups-that-act).
- **Zadaci koji se sami zatvaraju.** Zadatak može da prati crtež unutar svog označavanja. Otvori noviju reviziju lista i izaberi {{ui:Proveri sada}}: ako su se linije u tom području promenile za više od sitnice, zadatak se označava kao Završeno, njegovo označavanje dobija stanje Dovršeno, a beleška u niti kaže šta se promenilo. Novi datum ili linije koje su se pomerile za manje od 1,5 tačke ne računaju se. Zadatak umesto toga može da prati element modela: vaš asistent prijavljuje element pomoću `tasks_check`, a kasniji izveštaj koji se razlikuje, ili obrisan element, zatvara zadatak. Jedan korak opoziva ga ponovo otvara.
- **Pronađi posao.** Filtriraj listu {{ui:Zadaci}} po stanju i po tome za koga je, uključujući {{ui:Zakasnelo}}; izaberi {{ui:Dodeljeno}}, pa {{ui:Asistent}} da vidiš šta čeka vašeg asistenta. Zadatak čiji je rok prošao prikazuje se kao upozorenje u panelu Problemi. {{ui:CSV}} izvozi listu. Zadaci se čuvaju u PDF-u zajedno sa označavanjem i putuju kroz Live kao i druga svojstva označavanja.

### Šta se promenilo, kao običan spisak

- **Navedi izmene.** Otvori karticu {{ui:Uporedi}}, zatim {{ui:Uporedi ceo skup}}, izaberi raniju i kasniju datoteku i izaberi {{ui:Navedi izmene}}. Spisak počinje brojem, zatim obuhvata svaki promenjeni list, s najvećom promenom prvo: gde je na listu, koliko je velika (u stvarnim jedinicama, kao i u inčima na papiru na kalibrisanom listu), da li su linije dodate ili uklonjene, koliko označavanja se nalazi tu, i koje su se reči pojavile ili nestale. {{ui:Kopiraj spisak}} stavlja ga na privremenu memoriju, a {{ui:CSV}} ispisuje jedan red po promeni. Pogledaj [Navedi šta se promenilo između revizija](topic:what-changed-in-words).

### Glasovne beleške i odluke

- **Glasovne beleške.** Na kartici {{ui:Beleške}} izaberi {{ui:Snimi glasovnu belešku}}, zatim {{ui:Zaustavi snimanje}}; snimci se sami zaustavljaju posle dva minuta. Beleška se zakači u središte lista, prevučeš je tamo gde treba i upišeš natpis u {{ui:Svojstva}}, a {{ui:Pusti}} na listi je pušta. Snimak se čuva unutar PDF-a.
- **Odluke.** {{ui:Zakači odluku}} ispisuje rečenicu ili dve na listu. Ako ona zamenjuje raniju odluku, izaberi tu u {{ui:Zamenjuje}}: stara ostaje, označena kao Zamenjeno, i upućuje na novu. Jedan korak opoziva je vraća. Pogledaj [Zakači glasovne beleške i odluke na list](topic:voice-notes-and-decisions).

### Crvena linija do revizije

- **Pošalji i odgovori.** Na kartici {{ui:Zadaci}} otvori {{ui:Crvena linija do revizije}}, unesi reviziju na koju se označavanja odnose i izaberi {{ui:Izvezi datoteku crvene linije}}. Dobijaš datoteku `.redline.json` sa jednom stavkom po otvorenom označavanju: list, položaj (kao razlomci lista, pa se ponovno štampanje u drugoj veličini i dalje poklapa), reči, autor, nit i njen zadatak. Onaj ko crta izmene odgovara Prihvaćeno, Odbijeno ili Završeno u datoteci `.redline-answers.json`; {{ui:Učitaj datoteku odgovora…}} daje svakom označavanju to stanje i napomenu crtača, kao jedan korak opoziva. Pogledaj [Pošalji označavanja crtaču kao crvenu liniju](topic:redline-to-revision).

### Asistenti sa veštačkom inteligencijom

- **Još alata.** Asistent koga si povezao preko CadCraft Studija može da izlista zadatke (`tasks_list`), napravi ili promeni jedan (`task_set`), skine zadatak (`task_clear`), proveri jedan u odnosu na noviju reviziju ili element (`tasks_check`) i pročita običan spisak promena između dva otvorena skupa planova (`revisions_changes`). Dobija samo alate koje si označio pod prekidačem Asistenti, i svaka promena je jedan korak opoziva. Pogledaj [Koristi MarkupCraft sa asistentom sa veštačkom inteligencijom](topic:use-with-ai-assistants).

## U svim aplikacijama

- **Jezici.** CadCraft Studio sada ima 54 jezika. Deset je novo: litvanski, letonski, bosanski, marati, telugu, albanski, afrikans, filipinski, svahili i uzbečki. Svi neengleski jezici su mašinski nacrti prevoda dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Ulazni uređaji}} određuje šta rade tačped, bočna dugmad miša, olovka, dodiri prstom, 3D miš, kontroler za igre ili MIDI kontroler, za svaku aplikaciju ili samo za ovu. Dok ništa ne promeniš, svaki uređaj radi kao pre. Pogledaj [Koristi tačped, 3D miš ili kontroler](common:input-devices).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} ima {{ui:Prelomi}} (podrazumevano), {{ui:2 reda}} i {{ui:1 red}}, pa crtež dobija više prostora. Pogledaj [Rasporedi panele](common:arrange-panels).
- **Tabela svojstava.** Polja Stila označavanja koriste zajedničku tabelu, sa sklopivim kategorijama i kolonama za naziv i vrednost.
- **Panel Problemi.** Upozorenja iz aplikacije, kao zadatak kojem je istekao rok, skupljaju se u jednom panelu Problemi.
- **Live i dodaci.** Live sesije su opisane u [Radite zajedno uživo](common:work-together-live); spisak dodataka koji prati vaš nalog je u [Dodaci i spisak vašeg naloga](common:addons-basics).
- **Poveži svoj AI.** CadCraft Studio je centralno mesto za vašeg asistenta: poveži ga jednom za svih osam aplikacija. Aplikacije same nemaju veštačku inteligenciju.

## Ispravljeno u 0.8.1

- **Studio može da menja jezik dok radi.** Ranije su desktop aplikacija i spakovana izdanja ostajali na engleskom. Ovo još nije testirano na svakoj platformi: javite nam ako se jezik ne menja.
- Instalacije Studija 0.8 nude 0.8.1 kroz {{ui:Podešavanja}} › {{ui:Ažuriranja}}.

## Još nije u ovoj verziji

- **Nije potpisano kodom.** Windows instalacioni programi i macOS .dmg još nemaju potpis. Na Windows-u, ako SmartScreen zaustavi instalaciju, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu, desni klik na CadCraft Studio i izaberi {{ui:Otvori}}. Izdanja za prodavnice su na čekanju.
- **Povezivanje AI je još nedovršeno na nekim mestima.** Povezivanje jednim klikom unutar Studija, hostovani konektor za asistente u pregledaču i vlastiti API ključ unutar Studija nisu obećani za ovo izdanje. Petlja zadataka je testirana, ali još ne sa pravim asistentom.
- **Provere zadataka traže istu veličinu strane.** List ponovo odštampan u drugoj veličini se neće poklapati, pa se njegovi zadaci ne zatvaraju. Listovi se upoređuju po broju lista, a ako ga nema, po položaju na strani.
- **Glasovne beleške su samo snimci.** Nema transkripta, a asistent vidi dužinu beleške, autora i natpis, a ne zvuk. Snimanje je isprobano sa lažnim mikrofonom u pregledaču bez prikaza; pravi mikrofon na telefonu, tabletu ili laptopu još treba proveriti.
- **Proračunske tabele i razlozi u PDF-u** čuvaju se u privatnom unosu datoteke. Stariji MarkupCraft ignoriše taj unos i odbacuje ga pri sledećem čuvanju datoteke, zato takve datoteke otvarajte i čuvajte sa verzijom 0.8 ili novijom.
- **Crtačeva strana crvenih linija.** Čitanje datoteke crvene linije u CadCraftu i odgovaranje na nju još nije napravljeno.
- **Ostali jezici.** Traka aplikacije za tamilski prelazi za 528 px.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet). Za izdanje pre ovoga, pogledaj [Šta je novo u 0.7](topic:whats-new-0-7).

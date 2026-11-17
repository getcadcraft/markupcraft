---
title: Šta je novo u 0.7 (ranije)
summary: RFI-jevi, podnesci i dnevni zapisnici u novoj kartici Polje, s rokovima, zakašnjenjem označenim crvenom bojom, CSV i BCF, rad van mreže i Spoji; asistenti koji postavljaju statuse, odgovaraju i izvoze spisak; liste jedinica koje prate Postavke; paneli koji se sklanjaju i dijalozi koji se pomjeraju.
keywords: šta je novo 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, polje, zapisi polja, rfi, zahtjev za informacijama, podnesak, dnevni zapisnik, dnevnik gradilišta, prekoračen rok, rok, dodijeljeno meni, pin, spoji, van mreže, tablet, bcf, csv, asistent, mcp, status označavanja, odgovor, izvoz, jedinice, liste jedinica, zvjezdica, kalibriraj, zbijeno, paneli, dijalozi, portugalski
from: f8578677
---

Ovo je šta se promijenilo u MarkupCraft 0.7, u odnosu na 0.6. Velika novina su zapisi polja: RFI-jevi, podnesci i dnevni zapisnici čuvani unutar PDF-a uz tvoja označavanja.

## Novo

### RFI-jevi, podnesci i dnevni zapisnici

- **Kartica Polje.** Otvori karticu {{ui:Polje}} i izaberi {{ui:RFI}}, {{ui:Podnesak}} ili {{ui:Dnevni zapisnik}}. Dodirni ili klikni list gdje pripada RFI ili podnesak, i pin označava mjesto; dnevni zapisnik ide na otvoreni list bez pina ({{ui:Postavi oznaku}} kasnije dodaje jedan, {{ui:Premjesti oznaku}} pomjera bilo koji pin). Svaki zapis ima vlastiti broj (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, status, izvršioca, rok, nit odgovora i spisak naziva priloga. Vidi [Prati RFI-jeve, podneske i dnevne zapisnike](topic:field-records).
- **Vidi šta kasni.** Filtriraj spisak po vrsti, statusu, roku (prekoračen, rok za 7 dana, ima ili nema rok), ovom listu ili svim listovima, tekstualnoj pretrazi ili {{ui:Dodijeljeno meni}}. Zapis čiji je rok prošao, a još čeka, označen je **Prekoračen rok**, crvenom bojom, na spisku i na svom pinu. Vidi [Pronađi šta je važno](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} upisuje navedene zapise kao tabelu; {{ui:BCF}} ih upisuje kao BCF teme, svaka sa snimkom svog mjesta na listu. Oba prate filtere. Vidi [Izvoz](topic:field-records#export).
- **Van mreže, i dvije kopije postaju jedna.** Zapisi se čuvaju unutar PDF-a i ne trebaju mrežu, pa tablet na terenu može dodavati, odgovarati i čuvati ih. Kada se vrati u kancelariju, {{ui:Spoji}} spaja zapise iz druge kopije istog PDF-a po njihovim ID-ovima, kao jedan korak poništavanja. Vidi [Čuvanje, rad van mreže i spajanje kopija](topic:field-records#save-offline-and-merging-copies).

### AI asistenti

- **Više toga asistent može da radi.** Tvoj vlastiti asistent, povezan preko CadCraft Studija, sada može postaviti status označavanja (`markup_status`, zabilježen u njegovoj niti), odgovoriti u niti (`markup_reply`) i izvesti spisak {{ui:Oznake}} kao CSV ili BCF (`markups_export`, što spisak prikazuje s filterima). Svaka promjena je jedan korak poništavanja, potpisana imenom asistenta. Vidi [Šta asistent može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je posebna jedinica). Isključi jedinice koje nikad ne koristiš i one nestanu iz lista; označi jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U MarkupCraft-u, jedinice za mjerenje i položaj u {{ui:Postavke}} › {{ui:MarkupCraft}} i jedinica u dijalogu za kalibraciju prate prekidače; zvjezdica postavlja jedinicu mjerenja dok ne sačuvaš vlastite postavke MarkupCraft-a, a stvarna udaljenost koju upišeš pri kalibraciji može imati oznaku bilo koje jedinice, kao `3 yd` ili `1.5 km`. Vidi [Jedinice, uneseni podaci i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: povuci je da prikačiš ili otkačiš panel, spusti je na traku drugog panela da dijeliš jedan okvir kao kartice, pričvrsti je da se sklanja ka ivici, ili je sakrij i vrati je s ivice. Vidi [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Povuci dijalog za naslovnu traku van puta crtežu; vraća se tamo gdje si ga ostavio. Dvoklik na naslovnu traku ponovo ga centrira. Vidi [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahtjeva za tvog asistenta (srediti crtež, iscrtati set, provjeriti crteže, postaviti modelu pitanja, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, a svaki provjeren našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj jezik, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za tvoj sistem, nema mreže, loš potpis) umjesto samo „Gotovo“, i prestaje ponovo prikazivati karticu Šta je novo koju si zatvorio dok ne stigne novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer provjera certifikata još nije stigla. Provjeri SHA-256 pored svake datoteke na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalaciju, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desni klik na CadCraft Studio i izaberi {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još ništa ne čita.
- Zapisi polja se ne dijele u živoj sesiji CadCraft Studija (žive sesije nose samo označavanja); donesi kopije zajedno pomoću {{ui:Spoji}}.
- Spajanje uzima zapis kao cjelinu iz kopije koja je zadnja mijenjana: ako su dvije osobe mijenjale različita polja jednog zapisa, važe polja iz kasnije kopije. Niti i nazivi priloga se spajaju.
- Prilozi su samo nazivi; datoteke ostaju gdje jesu. Za zapise nema timova, obavještenja ni oblačnih projekata, a asistenti za zapise još nemaju alate.
- Zapisi polja testirani su u pregledaču na veličinama telefona i tableta s prekinutom mrežom, ali još nisu ručno provjereni na pravom tabletu.
- Još iz 0.6: okretanje objekata stranice pod bilo kojim uglom, crtanje novih oblika direktno na stranicu, mijenjanje fonta ili veličine linije, i tekst koji teče kroz više redova. Sačuvana kopija sa izmjenama stranice još nije otvorena u Acrobatu.
- Još iz 0.5: poništavanje promjene stranice (kao dodavanje prazne stranice), čitanje teksta sa skeniranih listova i žive sesije izvan tvoje vlastite mreže.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet).

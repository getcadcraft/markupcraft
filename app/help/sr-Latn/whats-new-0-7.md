---
title: Šta je novo u 0.7 (ranije)
summary: RFI, dokumentacija za odobrenje i dnevni izveštaji u novoj kartici Polje, sa rokovima, prekoračenim rokovima u crvenoj boji, CSV i BCF, rad van mreže i Spajanje; asistenti koji postavljaju statuse, odgovaraju i izvoze spisak; liste jedinica koje prate Podešavanja; paneli koji se sklanjaju i dijalozi koji se pomeraju.
keywords: šta je novo 0.7, ranije izdanje, beleške o izdanju, dnevnik promena, promene, 0.7, verzija, nove funkcije, polje, zapisi polja, rfi, zahtev za informacijama, dokumentacija za odobrenje, dnevni izveštaj, dnevnik gradilišta, prekoračeno, rok, dodeljeno meni, pribadača, spajanje, van mreže, tablet, bcf, csv, asistent, mcp, status označavanja, odgovor, izvoz, jedinice, liste jedinica, zvezdica, kalibracija, zbijeno, paneli, dijalozi, portugalski
from: ca5ba1f0
---

Ovo je šta se promenilo u MarkupCraft 0.7, u odnosu na 0.6. Velika novina su zapisi polja: RFI, dokumentacija za odobrenje i dnevni izveštaji koji se čuvaju unutar PDF-a, uz vaša označavanja.

## Novo

### RFI, dokumentacija za odobrenje i dnevni izveštaji

- **Kartica Polje.** Otvorite karticu {{ui:Polje}} i izaberite {{ui:RFI}}, {{ui:Dokumentacija za odobrenje}} ili {{ui:Dnevni izveštaj}}. Dodirnite ili kliknite list gde pripada RFI ili dokumentacija, i pribadača obeležava mesto; dnevni izveštaj ide na otvoreni list bez pribadače ({{ui:Postavi pribadaču}} dodaje je kasnije, {{ui:Pomeri pribadaču}} pomera bilo koju pribadaču). Svaki zapis ima sopstveni broj (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, status, izvršioca, rok, niz odgovora i spisak imena priloga. Videti [Praćenje RFI, dokumentacije za odobrenje i dnevnih izveštaja](topic:field-records).
- **Vidite šta kasni.** Filtrirajte spisak po tipu, statusu, roku (prekoračeno, rok za 7 dana, ima ili nema rok), ovom listu ili svim listovima, pretrazi teksta ili {{ui:Dodeljeno meni}}. Zapis posle roka koji i dalje čeka obeležen je **Zakasnelo**, crveno, na spisku i na svojoj pribadači. Videti [Pronađite šta je važno](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} upisuje navedene zapise kao tabelu; {{ui:BCF}} ih upisuje kao BCF teme, svaku sa snimkom svog mesta na listu. Oba prate filtere. Videti [Izvoz](topic:field-records#export).
- **Van mreže, i dve kopije se spajaju u jednu.** Zapisi se čuvaju unutar PDF-a i ne treba im mreža, pa tablet na terenu može da dodaje, odgovara i čuva ih. Kada se vratite u kancelariju, {{ui:Spoji}} spaja zapise druge kopije istog PDF-a po njihovim identifikatorima, kao jedan korak opozivanja. Videti [Čuvanje, rad van mreže i spajanje kopija](topic:field-records#save-offline-and-merging-copies).

### AI asistenti

- **Više može asistent.** Vaš sopstveni asistent, povezan preko CadCraft Studija, sada može da postavi status označavanja (`markup_status`, zabeležen u njegovoj niti), odgovori u niti (`markup_reply`) i izveze spisak {{ui:Označavanja}} kao CSV ili BCF (`markups_export`, ono što spisak prikazuje sa svojim filterima). Svaka promena je jedan korak opozivanja, potpisana imenom asistenta. Videti [Šta asistent može da traži](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## U svakoj aplikaciji

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jedan spisak za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključite jedinice koje nikada ne koristite i one nestaju sa spiska; označite jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava sopstvenu jedinicu. U MarkupCraft-u jedinice za merenje i položaj u {{ui:Podešavanja}} › {{ui:MarkupCraft}} i jedinica u dijalogu za kalibraciju prate prekidače, zvezdica postavlja jedinicu merenja dok ne sačuvate sopstvena podešavanja MarkupCraft-a, a stvarna dužina koju unesete pri kalibraciji može imati oznaku bilo koje jedinice, kao `3 yd` ili `1.5 km`. Videti [Jedinice, unete vrednosti i spiskovi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stavlja više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da ga prikačite ili otkačite, spustite je na traku drugog panela da delite jedan okvir kao kartice, zakačite ga da se sklanja do ivice, ili ga sakrijte i vratite sa ivice. Videti [Raspoređivanje panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za naslovnu traku van puta crteža; vraća se tamo gde ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Videti [Pomeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primera zahteva za vašeg asistenta (srediti crtež, iscrtati set, proveriti crteže, postaviti modelu pitanja, zbrojiti predmer, isprobati varijantu dela…), svaki sa alatkama koje poziva i dozvolama koje mu trebaju, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže veštačku inteligenciju. Videti [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. Ovaj jezik, kao i **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia**, sada ima svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis) umesto samo „Gotovo“, i prestaje da vraća karticu Šta je novo koju ste zatvorili, dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8, jer provera sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, kliknite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedan alat ne čita.
- Zapisi polja se ne dele u živoj sesiji CadCraft Studija (žive sesije nose samo označavanja); donesite kopije zajedno pomoću {{ui:Spoji}}.
- Spajanje uzima zapis kao celinu iz kopije promenjene poslednje: ako su dve osobe menjale različita polja jednog zapisa, polja kasnije kopije pobeđuju. Nizovi odgovora i imena priloga se spajaju.
- Prilozi su samo imena; datoteke ostaju gde jesu. Nema timova, obaveštenja ni projekata u oblaku za zapise, a asistenti još nemaju alatke za zapise.
- Zapisi polja su isprobani u pregledaču na veličinama telefona i tableta, sa isključenom mrežom, ali još nisu ručno isprobani na pravom tabletu.
- Još iz 0.6: okretanje objekata stranice pod bilo kojim uglom, crtanje novih oblika direktno na stranicu, menjanje fonta ili veličine linije i tekst koji teče kroz više redova. Sačuvana kopija sa izmenama stranice još nije otvorena u Acrobat-u.
- Još iz 0.5: poništavanje promene stranice (kao dodavanje prazne stranice), čitanje teksta sa skeniranih listova i žive sesije van vaše sopstvene mreže.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet).

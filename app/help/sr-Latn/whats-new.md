---
title: Šta je novo u verziji 0.7
summary: RFI-ji, dokumentacija za odobrenje i dnevni izveštaji u novoj kartici Polje, sa rokovima, kašnjenjima u crvenoj boji, CSV i BCF, rad van mreže i Spoji; asistenti koji postavljaju statuse, odgovaraju i izvoze listu; liste jedinica prate Podešavanja; paneli koji se sklanjaju i dijalozi koji se pomeraju.
keywords: šta je novo, beleške o izdanju, izmene, promene, 0.7, verzija, nove funkcije, polje, zapisi polja, rfi, zahtev za informacijama, dokumentacija za odobrenje, dnevni izveštaj, rok, kasni, dodeljeno meni, pribadača, spoji, van mreže, tablet, bcf, csv, asistent, mcp, status označavanja, odgovor, izvoz, jedinice, liste jedinica, zvezdica, kalibriši, zbijeno, paneli, dijalozi, portugalski
from: 142e1a1e
---

Ovo je šta se promenilo u MarkupCraft-u 0.7, u odnosu na 0.6. Velika novina su zapisi polja: RFI-ji, dokumentacija za odobrenje i dnevni izveštaji koji se čuvaju unutar PDF-a, uz tvoja označavanja.

## Novo

### RFI-ji, dokumentacija za odobrenje i dnevni izveštaji

- **Kartica Polje.** Otvori karticu {{ui:Field}} i izaberi {{ui:RFI}}, {{ui:Submittal}} ili {{ui:Daily log}}. Dodirni ili klikni list gde pripada RFI ili dokumentacija za odobrenje i pribadača će obeležiti mesto; dnevni izveštaj ide na otvoreni list bez pribadače ({{ui:Place pin}} je dodaje kasnije, {{ui:Move pin}} pomera bilo koju pribadaču). Svaki zapis ima svoj broj (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, status, izvršioca, rok, niz odgovora i spisak imena priloga. Videti [Prati RFI-je, dokumentaciju za odobrenje i dnevne izveštaje](topic:field-records).
- **Vidi šta kasni.** Filtriraj listu po tipu, statusu, roku (prekoračen, rok za 7 dana, ima ili nema rok), ovom listu ili svim listovima, tekstualnoj pretrazi ili {{ui:Assigned to me}}. Zapis kojem je istekao rok, a i dalje čeka, obeležen je sa **Prekoračen**, crvenom bojom, na listi i na svojoj pribadači. Videti [Nađi ono što je važno](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} upisuje navedene zapise kao tabelu; {{ui:BCF}} ih upisuje kao BCF teme, svaku sa snimkom svog mesta na listu. Oba prate filtere. Videti [Izvoz](topic:field-records#export).
- **Rad van mreže i spajanje dve kopije u jednu.** Zapisi se čuvaju unutar PDF-a i ne traže mrežu, pa tablet na terenu može da dodaje, odgovara i čuva njih. Kada se vratiš u kancelariju, {{ui:Merge}} spaja zapise iz druge kopije istog PDF-a po njihovim ID-jevima, kao jedan korak poništavanja. Videti [Čuvanje, rad van mreže i spajanje kopija](topic:field-records#save-offline-and-merging-copies).

### AI asistenti

- **Više toga asistent može da uradi.** Tvoj asistent, povezan preko CadCraft Studio, sada može da postavi status označavanja (`markup_status`, zabeležen u njegovom nizu), da odgovori u nizu (`markup_reply`) i da izveze listu {{ui:Markups}} kao CSV ili BCF (`markups_export`, ono što lista prikazuje sa svojim filterima). Svaka promena je jedan korak poništavanja, potpisan imenom asistenta. Videti [Šta asistent može da zatraži](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## U svakoj aplikaciji

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka anketna stopa je sopstvena jedinica). Isključi jedinice koje nikad ne koristiš i one napuštaju liste; označi jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava svoju jedinicu. U MarkupCraft-u, jedinice merenja i položaja u {{ui:Settings}} › {{ui:MarkupCraft}} i jedinica u dijalogu za kalibraciju prate prekidače; zvezdica postavlja jedinicu merenja dok ne sačuvaš MarkupCraft-ova podešavanja, a stvarna udaljenost koju upišeš pri kalibraciji može da ima oznaku bilo koje jedinice, kao `3 yd` ili `1.5 km`. Videti [Jedinice, uneseni brojevi i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stavlja više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevuci je da panel prikačiš ili napraviš plutajućim, pusti je na traku drugog panela da delite jedan okvir kao kartice, zakači je da klizne do ivice, ili ga sakrij i vrati sa ivice. Videti [Uredi panele](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevuci dijalog za njegovu naslovnu traku van puta crteža; vraća se tamo gde si ga ostavio. Dvoklik na naslovnu traku ga ponovo centrira. Videti [Pomeri dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primera zahteva za tvog asistenta (srediti crtež, iscrtati set, proveriti crteže, postaviti modelu pitanja, zbrojiti predmer, isprobati varijantu dela…), svaki sa alatima koje poziva i dozvolama koje su mu potrebne, i svaki ponovo proveren našim testovima. Aplikacije ne sadrže nikakvu veštačku inteligenciju. Videti [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Jezici **Português (Portugal)**, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za tvoj sistem, nema mreže, loš potpis), umesto samo „Gotovo“, i prestaje da vraća karticu Šta je novo koju si zatvorio, dok ne stigne novije izdanje.

## Nije još u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8, jer validacija sertifikata još nije stigla. Proveri SHA-256 pored svake datoteke na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberi {{ui:More info}}, pa {{ui:Run anyway}}. Na Mac-u, prvi put, desnim klikom na CadCraft Studio izaberi {{ui:Open}}. CadCraft Studio još nije u prodavnici aplikacija, a verzija za iPad ili iPhone još ne postoji.
- Ugao i nagib u {{ui:Units}} se čuvaju, ali nijedno polje ih još ne čita.
- Zapisi polja se ne dele u CadCraft Studio živoj sesiji (žive sesije nose samo označavanja); donesi kopije zajedno pomoću {{ui:Merge}}.
- Spajanje uzima zapis kao celinu iz kopije koja je poslednja promenjena: ako su dve osobe menjale različita polja jednog zapisa, polja iz kasnije kopije pobeđuju. Nizovi odgovora i imena priloga se spajaju.
- Prilozi su samo imena; datoteke ostaju tamo gde jesu. Nema timova, obaveštenja ni oblačnih projekata za zapise, a asistenti još nemaju alate za zapise.
- Zapisi polja su testirani u pregledaču na veličinama telefona i tableta sa isključenom mrežom, ali još nisu ručno testirani na pravom tabletu.
- Još iz 0.6: okretanje objekata na stranici pod bilo kojim uglom, crtanje novih oblika direktno na stranicu, promena fonta ili veličine linije i tekst koji se prelama preko više redova. Sačuvana kopija sa izmenama na stranici još nije otvorena u Acrobat-u.
- Još iz 0.5: poništavanje promene stranice (kao dodavanje prazne strane), čitanje teksta iz skeniranih listova i žive sesije van tvoje mreže.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet).

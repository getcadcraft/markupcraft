---
title: Šta je novo u 0.7
summary: RFI-ji, podnesci i dnevni zapisnici u novoj kartici Polje, sa rokovima, prekoračenim rokovima crveno, CSV i BCF, radom van mreže i spajanjem; asistenti koji postavljaju statuse, odgovaraju i izvoze listu; liste jedinica koje prate Postavke; paneli koji se sklanjaju i dijalozi koji se pomjeraju.
keywords: šta je novo, šta je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, polje, zapisi polja, rfi, zahtjev za informacijom, podnesak, dnevni zapisnik, dnevnik gradilišta, prekoračen rok, rok, dodijeljeno meni, oznaka, spoji, van mreže, tablet, bcf, csv, asistent, mcp, status oznake, odgovor, izvoz, jedinice, liste jedinica, zvjezdica, kalibriraj, zbijeno, paneli, dijalozi, portugalski
from: 142e1a1e
---

Ovo je šta se promijenilo u MarkupCraft 0.7, u odnosu na 0.6. Velika novina su zapisi polja: RFI-ji, podnesci i dnevni zapisnici koji se čuvaju unutar PDF-a uz vaše oznake.

## Novo

### RFI-ji, podnesci i dnevni zapisnici

- **Kartica Polje.** Otvorite karticu {{ui:Polje}} i izaberite {{ui:RFI}}, {{ui:Podnesak}} ili {{ui:Dnevni zapisnik}}. Dodirnite ili kliknite na list gdje pripada RFI ili podnesak, pa oznaka obilježi mjesto. Dnevni zapisnik ide na otvoreni list bez oznake ({{ui:Postavi oznaku}} kasnije dodaje jednu, {{ui:Premjesti oznaku}} pomjera bilo koju oznaku). Svaki zapis ima svoj broj (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, status, zaduženu osobu, rok, niz odgovora i spisak naziva priloga. Pogledajte [Pratite RFI-je, podneske i dnevne zapisnike](topic:field-records).
- **Vidite šta kasni.** Filtrirajte listu po vrsti, statusu, roku (istekao, rok za 7 dana, ima ili nema rok), ovom listu ili svim listovima, tekstualnoj pretrazi, ili {{ui:Dodijeljeno meni}}. Zapis kojem je istekao rok, a još čeka, obilježen je **Istekao rok** crveno, na listi i na svojoj oznaci. Pogledajte [Pronađite šta je važno](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} piše navedene zapise kao tabelu; {{ui:BCF}} piše ih kao BCF teme, svaku sa snimkom svog mjesta na listu. Oba slijede filtere. Pogledajte [Izvoz](topic:field-records#export).
- **Van mreže, i dvije kopije spojene u jednu.** Zapisi se čuvaju unutar PDF-a i ne trebaju mrežu, pa tablet na terenu može dodati, odgovoriti i spasiti zapise. Kada se vratite u ured, {{ui:Spoji}} spaja zapise druge kopije istog PDF-a po njihovim ID-ovima, kao jedan korak poništavanja. Pogledajte [Spašavanje, rad van mreže i spajanje kopija](topic:field-records#save-offline-and-merging-copies).

### AI asistenti

- **Više što asistent može.** Vaš vlastiti asistent, povezan preko CadCraft Studija, sada može postaviti status oznake (`markup_status`, zabilježen u njegovom nizu), odgovoriti u nizu (`markup_reply`) i izvesti listu {{ui:Oznake}} kao CSV ili BCF (`markups_export`, ono što lista prikazuje sa svojim filterima). Svaka promjena je jedan korak poništavanja, potpisan imenom asistenta. Pogledajte [Šta asistent može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sama za sebe). Isključite jedinice koje nikada ne koristite i one napuštaju liste; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U MarkupCraft-u, jedinice mjerenja i pozicije u {{ui:Postavke}} › {{ui:MarkupCraft}} i jedinica u dijalogu za kalibraciju prate prekidače. Zvjezdica postavlja jedinicu mjerenja dok ne spasite vlastite postavke MarkupCraft-a, a stvarna udaljenost koju upišete pri kalibraciji može imati oznaku bilo koje jedinice, kao što su `3 yd` ili `1.5 km`. Pogledajte [Jedinice, upisane vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da pričvrstite ili otkačite panel, spustite je na naslovnu traku drugog panela da podijelite jedan okvir kao kartice, zakačite je da kliže do ivice, ili sakrijte panel i vratite ga sa ivice. Pogledajte [Rasporedite panele](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevucite dijalog za naslovnu traku van puta crtežu; vraća se tamo gdje ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Pogledajte [Pomjerite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahtjeva za vašeg asistenta (urediti crtež, štampati set, provjeriti crteže, postaviti pitanja o modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki sa alatima koje poziva i dozvolama koje treba, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj jezik, zajedno sa **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia**, sada ima svaku riječ aplikacija, kao nacrte koje nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sistem, nema mreže, loš potpis), umjesto samo "Gotovo". Također prestaje vraćati karticu Šta je novo koju ste zatvorili, dok ne bude novijeg izdanja.

## Nije još u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Store prebačeni su na 0.8, jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} su sačuvane, ali ih još nijedan okvir ne čita.
- Zapisi polja se ne dijele u živoj sesiji CadCraft Studija (žive sesije nose samo oznake); spojite kopije zajedno pomoću {{ui:Spoji}}.
- Spajanje uzima zapis kao cjelinu iz kopije koja je posljednja promijenjena: ako su dvije osobe mijenjale različita polja jednog zapisa, polja kasnije kopije pobjeđuju. Nizovi odgovora i nazivi priloga se spajaju.
- Prilozi su samo nazivi; datoteke ostaju gdje jesu. Nema timova, obavještenja ni oblačnih projekata za zapise, a asistenti još nemaju alate za zapise.
- Zapisi polja su testirani u pregledniku na veličinama telefona i tableta sa prekinutom mrežom, ali još nisu ručno provjereni na pravom tabletu.
- I dalje iz 0.6: okretanje objekata stranice pod bilo kojim uglom, crtanje novih oblika direktno na stranicu, promjena fonta ili veličine linije, i tekst koji se prelama u više redova. Sačuvana kopija sa izmjenama stranice još nije otvorena u Acrobatu.
- I dalje iz 0.5: poništavanje promjene stranice (kao dodavanje prazne stranice), čitanje teksta sa skeniranih listova, i žive sesije izvan vaše mreže.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet).

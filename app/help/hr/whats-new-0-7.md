---
title: Što je novo u 0.7 (ranije)
summary: RFI-jevi, submittali i dnevnici rada u novoj kartici Teren, s rokovima, prekoračenim rokovima u crvenom, CSV i BCF, rad van mreže i spajanje; pomoćnici koji postavljaju statuse, odgovaraju i izvoze popis; popisi jedinica koji prate postavke; ploče koje se sklanjaju i dijalozi koji se pomiču.
keywords: što je novo 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove značajke, teren, zapisi terena, rfi, zahtjev za informacijama, submittal, dnevnik rada, prekoračen rok, rok, zaduženo meni, pribadača, spajanje, izvan mreže, tablet, bcf, csv, pomoćnik, mcp, status oznake, odgovor, izvoz, jedinice, popisi jedinica, zvjezdica, kalibriraj, zbijeno, ploče, dijalozi, portugalski
from: f8578677
---

Ovo je što se promijenilo u MarkupCraftu 0.7 u odnosu na 0.6. Najveća novost su zapisi terena: RFI-jevi, submittali i dnevnici rada koji se čuvaju unutar PDF-a uz vaše markupe.

## Novo

### RFI-jevi, submittali i dnevnici rada

- **Kartica Teren.** Otvorite karticu {{ui:Teren}} i odaberite {{ui:RFI}}, {{ui:Submittal}} ili {{ui:Dnevnik rada}}. Dodirnite ili kliknite list na kojem pripada RFI ili submittal, a pribadača označava mjesto; dnevnik rada ide na otvoreni list bez pribadače ({{ui:Postavi pribadaču}} dodaje je kasnije, {{ui:Pomakni pribadaču}} pomiče bilo koju pribadaču). Svaki zapis ima vlastiti broj (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, status, osobu zaduženu za njega, rok, raspravu odgovora i popis naziva privitaka. Pogledajte [Praćenje RFI-jeva, submittala i dnevnika rada](topic:field-records).
- **Vidite što kasni.** Filtrirajte popis prema vrsti, statusu, roku (prekoračen, rok za 7 dana, ima ili nema rok), ovom listu ili svim listovima, tekstualnom pretraživanju ili {{ui:Zaduženo meni}}. Zapis kojem je istekao rok, a koji još čeka, označen je **Prekoračen rok**, crvenom bojom, na popisu i na svojoj pribadači. Pogledajte [Pronađite ono što je važno](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} zapisuje navedene zapise kao proračunsku tablicu; {{ui:BCF}} ih zapisuje kao BCF teme, svaku sa snimkom njezina mjesta na listu. Oba slijede filtre. Pogledajte [Izvoz](topic:field-records#export).
- **Rad van mreže, a dvije kopije postaju jedna.** Zapisi se spremaju unutar PDF-a i ne trebaju mrežu, pa tablet na gradilištu može dodavati, odgovarati i spremati zapise. Kad se vratite u ured, {{ui:Spoji}} spaja zapise druge kopije istog PDF-a prema njihovim oznakama, kao jedan korak poništavanja. Pogledajte [Spremanje, rad van mreže i spajanje kopija](topic:field-records#save-offline-and-merging-copies).

### AI pomoćnici

- **Više toga pomoćnik može učiniti.** Vaš vlastiti pomoćnik, povezan putem CadCraft Studija, sada može postaviti status markupa (`markup_status`, zabilježen u njegovoj raspravi), odgovoriti u raspravi (`markup_reply`) i izvesti popis {{ui:Oznake}} kao CSV ili BCF (`markups_export`, ono što popis prikazuje uz svoje filtre). Svaka promjena je jedan korak poništavanja, potpisan imenom pomoćnika. Pogledajte [Što pomoćnik može zatražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa ima vlastitu jedinicu). Isključite jedinice koje nikad ne koristite i one nestaju s popisa jedinica; označite zvjezdicom jednu i novi rad počinje u njoj. Datoteka uvijek zadržava vlastitu jedinicu. U MarkupCraftu, jedinice mjerenja i položaja u {{ui:Postavke}} › {{ui:MarkupCraft}} i jedinica u dijalogu za kalibraciju slijede prekidače; zvjezdica postavlja jedinicu mjerenja dok ne spremite vlastite postavke MarkupCrafta; a stvarna udaljenost koju upišete pri kalibraciji može imati oznaku bilo koje jedinice, kao što su `3 yd` ili `1.5 km`. Pogledajte [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} stane više na zaslon (dodirni zasloni i telefoni zadržavaju velike gumbe). Svaka bočna ploča ima tanku naslovnu traku: povucite je da usidrite ili odvojite ploču, ispustite je na traku druge ploče da dijelite jedan okvir kao kartice, pričvrstite je da kliže do ruba ili je sakrijte i vratite s ruba. Pogledajte [Raspored ploča](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomiču.** Povucite dijalog za naslovnu traku izvan crteža; vraća se tamo gdje ste ga ostavili. Dvostrukim klikom na naslovnu traku ponovno ga centrirajte. Pogledajte [Pomicanje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset provjerenih zahtjeva za vašeg pomoćnika (urediti crtež, plotati skup, provjeriti crteže, postaviti pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dopuštenjima koja treba, i svaki ponovno pokrenut našim testovima. Same aplikacije ne sadrže AI. Pogledajte [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. Ovi jezici, uz **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia**, sad imaju svaku riječ aplikacija, kao radne verzije koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom jeziku.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (za vaš sustav još nema datoteke, nema mreže, neispravan potpis) umjesto samo „Gotovo“, i prestaje ponovno prikazivati karticu Što je novo koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalaciju, odaberite {{ui:Dodatne informacije}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija, a verzije za iPad i iPhone još ne postoje.
- Popisi kutova i nagiba u {{ui:Jedinice}} su spremljeni, ali ih još nijedan okvir ne čita.
- Zapisi terena ne dijele se u CadCraft Studio live sesiji (live sesije nose samo markupe); spojite kopije pomoću {{ui:Spoji}}.
- {{ui:Spoji}} uzima zapis u cjelini iz kopije koja je zadnja promijenjena: ako su dvije osobe promijenile različita polja jednog zapisa, vrijede polja kasnije kopije. Rasprave i nazivi privitaka se spajaju.
- Privitci su samo nazivi; datoteke ostaju tamo gdje jesu. Za zapise nema timova, obavijesti ni projekata u oblaku, a pomoćnici još nemaju alate za zapise.
- Zapisi terena testirani su u pregledniku u veličinama telefona i tableta s prekinutom mrežom, ali još ne ručno na pravom tabletu.
- Još iz 0.6: okretanje objekata stranice na bilo koji kut, crtanje novih oblika izravno na stranicu, mijenjanje fonta ili veličine teksta u retku i tekst koji teče preko više redaka. Spremljena kopija s uređivanjem stranica još nije otvorena u Acrobatu.
- Još iz 0.5: poništavanje promjene stranice (kao dodavanje prazne stranice), čitanje teksta s skeniranih listova i live sesije izvan vaše vlastite mreže.

Sve ostalo nalazi se u [Što još nije izrađeno](topic:not-built-yet).

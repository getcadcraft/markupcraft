---
title: Što je novo u 0.7
summary: RFI-ji, submittali i dnevnici rada u novoj kartici Teren, s rokovima, prekoračenjima crveno, CSV-om i BCF-om, radom offline i spajanjem; pomoćnici koji postavljaju statuse, odgovaraju i izvoze popis; popisi jedinica koji prate postavke; ploče koje se sklanjaju i dijalozi koji se pomiču.
keywords: što je novo, novosti, napomene uz izdanje, popis promjena, promjene, 0.7, verzija, nove značajke, teren, zapisi s terena, rfi, zahtjev za informacijom, submittal, dnevnik rada, gradilišni dnevnik, prekoračen rok, rok, zaduženo meni, pribadača, spajanje, offline, tablet, bcf, csv, pomoćnik, mcp, status oznake, odgovor, izvoz, jedinice, popisi jedinica, zvjezdica, kalibriraj, zbijeno, ploče, dijalozi, portugalski
from: 142e1a1e
---

Ovo se promijenilo u MarkupCraftu 0.7 u odnosu na 0.6. Velika novost su zapisi s terena: RFI-ji, submittali i dnevnici rada koji se čuvaju u PDF-u uz vaše oznake.

## Novo

### RFI-ji, submittali i dnevnici rada

- **Kartica Teren.** Otvorite karticu {{ui:Teren}} i odaberite {{ui:RFI}}, {{ui:Submittal}} ili {{ui:Dnevnik rada}}. Dodirnite ili kliknite list na mjestu gdje RFI ili submittal pripada i pribadača označava mjesto; dnevnik rada ide na otvoreni list bez pribadače ({{ui:Postavi pribadaču}} je naknadno dodaje, {{ui:Pomakni pribadaču}} pomiče svaku pribadaču). Svaki zapis ima vlastiti broj (RFI-0001, SUB-0001, LOG-0001), naslov, tekst, status, osobu zaduženu, rok, niz odgovora i popis imena privitaka. Pogledajte [Pratite RFI-je, submittale i dnevnike rada](topic:field-records).
- **Vidite što kasni.** Filtrirajte popis po vrsti, statusu, roku (prekoračen, rok za 7 dana, ima rok ili nema roka), ovom listu ili svim listovima, tekstualnom pretraživanju ili s {{ui:Zaduženo meni}}. Zapis kojem je rok prošao, a još čeka, označen je kao **Prekoračen rok**, crveno, na popisu i na svojoj pribadači. Pogledajte [Pronađite ono što je važno](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} zapisuje navedene zapise kao proračunsku tablicu; {{ui:BCF}} ih zapisuje kao BCF teme, svaku sa snimkom njezina mjesta na listu. Oba slijede filtre. Pogledajte [Izvoz](topic:field-records#export).
- **Offline, i dvije kopije postaju jedna.** Zapisi se spremaju u PDF i ne trebaju mrežu, pa tablet na terenu može dodavati, odgovarati i spremati. Natrag u uredu, {{ui:Spoji}} spaja zapise druge kopije istog PDF-a prema njihovim ID-ovima, kao jedan korak poništavanja. Pogledajte [Spremanje, offline i spajanje kopija](topic:field-records#save-offline-and-merging-copies).

### AI pomoćnici

- **Više toga što pomoćnik može.** Vaš vlastiti pomoćnik, povezan putem CadCraft Studija, sada može postaviti status oznake (`markup_status`, zabilježeno u njezinoj niti), odgovoriti u niti (`markup_reply`) i izvesti popis {{ui:Oznake}} kao CSV ili BCF (`markups_export`, ono što popis prikazuje sa svojim filtrima). Svaka promjena je jedan korak poništavanja, potpisan imenom pomoćnika. Pogledajte [Što pomoćnik može tražiti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## U svim aplikacijama

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, obujam, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa je zasebna jedinica). Isključite jedinice koje nikad ne koristite i one nestaju iz popisa jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava vlastitu jedinicu. U MarkupCraftu jedinice mjerenja i položaja u {{ui:Postavke}} › {{ui:MarkupCraft}} te jedinica u dijalogu za kalibriranje prate te prekidače, zvjezdica određuje jedinicu mjerenja dok ne spremite MarkupCraftove vlastite postavke, a stvarna udaljenost koju upisujete pri kalibriranju može nositi oznaku bilo koje jedinice, poput `3 yd` ili `1.5 km`. Pogledajte [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} smješta više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velike gumbe). Svaka bočna ploča ima usku naslovnu traku: povucite je da ploču usidrite ili odvojite, ispustite je na traku druge ploče da dijele jedan okvir kao kartice, prikvačite je da se sklanja uz rub ili je sakrijte i vratite s ruba. Pogledajte [Rasporedite ploče](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomiču.** Povucite dijalog za njegovu naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovno centrirate. Pogledajte [Pomaknite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset razrađenih zahtjeva za vašeg vlastitog pomoćnika (urediti crtež, isplotati komplet, provjeriti crteže, postaviti pitanja o modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovno odigran našim testovima. Aplikacije ne sadrže umjetnu inteligenciju. Pogledajte [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje još nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, neispravan potpis) umjesto samo „Gotovo“ i prestaje vraćati karticu Što je novo koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 pored svake datoteke na getcadcraft.com/download. Na Windowsima, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desnom tipkom miša kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija, a još nema ni izdanja za iPad ili iPhone.
- Popisi kuta i nagiba u {{ui:Jedinice}} se spremaju, ali ih još nijedno polje ne čita.
- Zapisi s terena ne dijele se u živoj sesiji CadCraft Studija (žive sesije prenose samo oznake); kopije spojite pomoću {{ui:Spoji}}.
- Spajanje preuzima zapis u cjelini iz kopije koja je zadnja mijenjana: ako su dvije osobe promijenile različita polja istog zapisa, polja kasnije kopije prevladavaju. Niti i imena privitaka se spajaju.
- Privitci su samo imena; datoteke ostaju gdje jesu. Nema timova, obavijesti ni projekata u oblaku za zapise, a pomoćnici još nemaju alate za zapise.
- Zapisi s terena testirani su u pregledniku u veličinama telefona i tableta s prekinutom mrežom, ali još ne ručno na stvarnom tabletu.
- Još iz 0.6: zakretanje objekata stranice za bilo koji kut, crtanje novih oblika izravno u stranicu, promjena fonta ili veličine retka te tekst koji teče kroz više redaka. Spremljena kopija s izmjenama stranice još nije otvorena u Acrobatu.
- Još iz 0.5: poništavanje promjene stranice (poput dodavanja prazne stranice), čitanje teksta s skeniranih listova i žive sesije izvan vaše vlastite mreže.

Sve ostalo je u temi [Što još nije izrađeno](topic:not-built-yet).

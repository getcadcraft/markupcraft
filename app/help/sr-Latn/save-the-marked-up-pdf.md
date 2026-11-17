---
title: Sačuvaj PDF sa označavanjima
summary: Preuzmite kopiju sa svim označavanjima upisanim kao standardni PDF komentari, proverite šta vide drugi PDF čitači i nastavite rad kasnije.
keywords: sačuvaj, preuzmi, izvezi pdf, označeno, anotacije, komentari, podeli, pošalji, problem, nastavi rad, ponovo otvori, povratni tok, štampaj
from: 4c198ebe
---

## Čuvanje

1. Izaberite {{ui:Sačuvaj}} na traci sa alatkama ili pritisnite {{key:Mod+S}}.
2. Ako je otvoreno više datoteka, izaberite {{ui:Ova datoteka}} (datoteku lista na kojem ste) ili {{ui:Svaka izmenjena datoteka}}. Svaka kopija se preuzima posebno.
3. Sačekajte da se završi „Čuvanje <file>…“. Prvo čuvanje u sesiji takođe učitava PDF pisač.

Rezultat: vaš pregledač preuzima „<name> (marked up).pdf“, a statusna traka javlja: „Sačuvano: A-Plans (marked up).pdf (24 označavanja, 18.2 MB). Originalna datoteka nije promenjena.“ Tačka pored {{ui:Sačuvaj}} nestaje.

**Vaša originalna PDF datoteka se nikada ne menja.** MarkupCraft piše novu datoteku. Gde ona završi zavisi od podešavanja preuzimanja u vašem pregledaču (vidi [Datoteke koje MarkupCraft otvara i čuva](topic:files#where-downloads-go)).

## Nastavak rada kasnije

Sledeći put otvorite kopiju „(marked up)“, a ne original. Sve se vraća u stanje za uređivanje: označavanja, statusi, odgovori, stavke za ispravku, razmera svakog lista i svi nazivi listova koje ste upisali. Ponovno čuvanje preuzima datoteku sa istim imenom „(marked up)“; pregledač može dodati broj, kao „(1)“, ako stara kopija još stoji u fascikli. Stare kopije zamenite ili sredite sami.

MarkupCraft ne čuva PDF sam od sebe. Dok radite, čuva kopiju za oporavak u ovom pregledaču, pa pad ili zatvoren tab ne gube vaša označavanja: sledeći put kada otvorite MarkupCraft, pita „Oporaviti rad?“. Vidi [Oporavak rada](common:recover). Ipak sačuvajte pre zatvaranja; ako pokušate da izađete sa nesačuvanim označavanjima, pregledač prvo pita „Napusti sajt?“ (iPad Safari to ne radi).

## Šta vide drugi PDF čitači

Svako označavanje se upisuje kao standardni PDF komentar (anotacija) sa sopstvenim crtežom, pa ga svaki PDF prikazivač prikazuje, štampa i navodi u panelu komentara:

- **Izgled je isti** kao u MarkupCraft-u: oblaci sa zupcima, strelice, pečati, brojčane tačke, brojevi stavki za ispravku, oznake mera.
- **Detalji su standardni:** autor, datum, tema, tekst komentara i boje.
- **Oblaci** su komentari pravougaonik ili poligon sa oblačastom ivicom; **tekstualni okviri** i **napomene** su komentari tekstualnog okvira; **beleške** su lepljive cedulje; potezi **olovkom** i **markerom** su komentari tipa ink (tinta); **pečati** su komentari pečata.
- **Dužine i površine** su komentari mera, a svaki kalibrisani list nosi svoju razmeru, pa prikazivači koji razumeju mere mogu da prikažu vrednosti.
- **Odgovori** su odgovori na komentar, a **statusi** su stanja pregleda (Otvoreno se prikazuje kao bez stanja).
- **Brojevi listova** koje ste upisali postaju oznake strana koje drugi prikazivači prikazuju.

Nekoliko stvari čita samo MarkupCraft: izvršioca i rok stavke za ispravku, status stavke i neke detalje stila. Drugi programi ih zadržavaju, osim ako ne prepišu komentar.

U drugom programu komentari se mogu pomerati ili menjati kao i svaki drugi. Ako neko to uradi i vrati datoteku, MarkupCraft pri otvaranju koristi novi položaj komentara.

Potpuni opis: [Šta se čuva u PDF-u](topic:what-the-pdf-keeps).

## Znakovi koji se štampaju kao „?“

Tekst označavanja se upisuje standardnim fontom Helvetica koji ima svaki PDF prikazivač. Pokriva engleska i zapadnoevropska slova (é, ñ, ü, ø i slično), ali ne i druga pisma, simbole van tog skupa ili emoji. Ti znakovi se u MarkupCraft-u dobro prikazuju, ali se u sačuvanoj kopiji štampaju kao „?“, a poruka o čuvanju ih broji: „3 znaka van zapadnoevropskog skupa se u kopiji štampaju kao „?“.“ Napišite takve reči punim tekstom ili upotrebite običnu zamenu (na primer „pr.“ umesto znaka za prečnik).

## Datoteke koje se ne mogu sačuvati

- **Zaštićeni PDF-ovi:** „Ovaj PDF je zaštićen (šifrovan), pa kopija sa označavanjima ne može da se napiše. Zatražite nezaštićenu kopiju.“ I dalje ga možete pregledati na ekranu i izvesti CSV i BCF.
- Ako čuvanje ne uspe iz drugog razloga, okvir pod nazivom „Nije moguće sačuvati <file>“ prikazuje razlog. Vaša označavanja su i dalje u tabu; ništa se ne gubi dok ga ne zatvorite.

## Spljoštavanje i štampanje

Još uvek nema spljoštavanja (upisivanja označavanja u stranicu) ni komande za štampu. Za štampanje otvorite sačuvanu kopiju u bilo kom PDF prikazivaču i štampajte sa prikazanim komentarima.

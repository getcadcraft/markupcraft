---
title: Spremi označeni PDF
summary: Preuzmite kopiju sa svim oznakama upisanima kao standardni PDF komentari, provjerite što vide drugi PDF čitači i nastavite raditi na njemu kasnije.
keywords: spremi, preuzmi, izvoz pdf, označeno, bilješke, komentari, dijeli, pošalji, tema, nastavi raditi, ponovno otvori, povratni ciklus, ispis
from: 4c198ebe
---

## Spremanje

1. Odaberite {{ui:Spremi}} na alatnoj traci ili pritisnite {{key:Mod+S}}.
2. Ako je otvoreno više datoteka, odaberite {{ui:Ova datoteka}} (datoteku lista na kojem se nalazite) ili {{ui:Svaka izmijenjena datoteka}}. Svaka kopija preuzima se zasebno.
3. Pričekajte da završi „Spremanje <file>…”. Prvo spremanje u sesiji također učitava modul za pisanje PDF-a.

Rezultat: vaš preglednik preuzima „<name> (marked up).pdf”, a statusna traka javlja: „Spremljeno: A-Plans (marked up).pdf (24 oznake, 18.2 MB). Izvorna datoteka nije promijenjena.” Točka nakon {{ui:Spremi}} nestaje.

**Vaš izvorni PDF nikad se ne mijenja.** MarkupCraft zapisuje novu datoteku. Mjesto spremanja ovisi o postavkama preuzimanja vašeg preglednika (vidi [Datoteke koje MarkupCraft otvara i sprema](topic:files#where-downloads-go)).

## Nastavak rada kasnije

Kasnije otvorite kopiju „(marked up)”, a ne izvornik. Sve se ponovno može uređivati: oznake, statusi, odgovori, stavke popisa nedostataka, mjerilo svakog lista i sva imena listova koja ste upisali. Ponovno spremanje preuzima datoteku s istim nazivom „(marked up)”; preglednik može dodati broj poput „(1)” ako je stara datoteka još u mapi. Stare kopije zamijenite ili očistite sami.

MarkupCraft sam ne sprema PDF. Dok radite, čuva kopiju za oporavak u ovom pregledniku, pa pad programa ili zatvorena kartica ne gube vaše oznake: sljedeći put kad otvorite MarkupCraft pitat će „Oporavite svoj rad?”. Vidi [Oporavite svoj rad](common:recover). Ipak spremite prije zatvaranja; ako pokušate otići s nespremljenim oznakama, preglednik prvo pita „Napustiti stranicu?” (iPad Safari to ne čini).

## Što vide drugi PDF čitači

Svaka oznaka zapisana je kao standardni PDF komentar (anotacija) sa svojim crtežom, pa je svaki PDF čitač prikazuje, ispisuje i navodi na svojoj ploči komentara:

- **Izgled je isti** kao u MarkupCraft: oblaci s valovitim rubovima, strelice, pečati, točke brojanja, oznake brojeva nedostataka, oznake mjera.
- **Pojedinosti su standardne:** autor, datum, predmet, tekst komentara i boje.
- **Oblaci** su komentari pravokutnika ili poligona s oblačastim rubom; **tekstni okviri** i **oblačići** su komentari tekstnog okvira; **bilješke** su ljepljivi listići; **olovka** i **isticač** su tintne crte; **pečati** su komentari pečata.
- **Duljine i površine** su komentari mjere, a svaki kalibrirani list nosi svoje mjerilo, pa čitači koji razumiju mjere mogu prikazati vrijednosti.
- **Odgovori** su odgovori na komentar, a **statusi** su stanja pregleda (Otvoreno se prikazuje kao bez stanja).
- **Brojevi listova** koje ste upisali postaju oznake stranica koje drugi prikazi pokazuju.

Samo MarkupCraft čita natrag nekoliko stvari: osobu zaduženu za stavku popisa nedostataka i rok, status stavke i neke stilske pojedinosti. Drugi programi ih zadržavaju dok ne prepišu komentar.

U drugom programu komentari se mogu pomicati ili uređivati kao i svaki drugi. Ako to netko učini i pošalje datoteku natrag, MarkupCraft pri otvaranju koristi novi položaj komentara.

Potpuni opis: [Što se sprema u PDF](topic:what-the-pdf-keeps).

## Znakovi koji se ispisuju kao „?”

Tekst oznaka zapisuje se standardnim fontom Helvetica koji ima svaki PDF čitač. Obuhvaća engleska i zapadnoeuropska slova (é, ñ, ü, ø i slična), ali ne i druga pisma, simbole izvan tog skupa ili emoji. Ti se znakovi u MarkupCraft lijepo prikazuju, ali u spremljenoj kopiji ispisuju se kao „?”, a poruka o spremanju ih broji: „Znakova izvan zapadnoeuropskog skupa koji se u kopiji ispisuju kao ‚?‘: 3.” Napišite takve riječi cijelo ili upotrijebite jednostavnu zamjenu (na primjer „prom.” za znak promjera).

## Datoteke koje se ne mogu spremiti

- **Zaštićeni PDF-ovi:** „Ovaj PDF je zaštićen (šifriran), pa se označena kopija ne može zapisati. Zatražite nezaštićenu kopiju.” Još ga možete pregledati na zaslonu i izvesti CSV i BCF.
- Ako spremanje ne uspije iz drugog razloga, okvir „Nije bilo moguće spremiti <file>” prikazuje razlog. Vaše oznake i dalje su na kartici; ništa se ne gubi dok je ne zatvorite.

## Spljoštavanje i ispis

Još ne postoji spljošti (utiskivanje oznaka u stranicu) ni naredba za ispis. Za ispis otvorite spremljenu kopiju u bilo kojem PDF čitaču i ispišite s prikazanim komentarima.

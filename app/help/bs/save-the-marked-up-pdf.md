---
title: Spasi označeni PDF
summary: Preuzmi kopiju sa svim označavanjima upisanim kao standardni PDF komentari, provjeri šta vide drugi PDF čitači i nastavi raditi kasnije.
keywords: spasi, preuzmi, izvoz pdf, označeno, anotacije, komentari, dijeli, pošalji, problem, nastavi raditi, ponovo otvori, povratni ciklus, štampanje
from: 4c198ebe
---

## Spasi

1. Odaberi {{ui:Spasi}} na alatnoj traci ili pritisni {{key:Mod+S}}.
2. Ako je otvoreno više datoteka, odaberi {{ui:Ova datoteka}} (datoteka lista na kojem si) ili {{ui:Svaka izmijenjena datoteka}}. Svaka kopija se preuzima zasebno.
3. Sačekaj da "Spašavanje <file>…" završi. Prvo spašavanje u sesiji također učitava modul za pisanje PDF-a.

Rezultat: tvoj preglednik preuzima "<name> (marked up).pdf", a statusna traka javlja: 'Spašeno: A-Plans (marked up).pdf (24 označavanja, 18.2 MB). Originalna datoteka je nepromijenjena.' Tačka iza {{ui:Spasi}} nestaje.

**Tvoj originalni PDF se nikada ne mijenja.** MarkupCraft piše novu datoteku. Gdje će se ona spremiti zavisi od postavki preuzimanja u tvom pregledniku (vidi [Datoteke koje MarkupCraft otvara i spašava](topic:files#where-downloads-go)).

## Nastavi raditi kasnije

Sljedeći put otvori kopiju "(marked up)", a ne original. Sve se vraća u stanje za uređivanje: označavanja, statusi, odgovori, stavke liste nedostataka, razmjera svakog lista i svi nazivi listova koje si upisao. Ponovno spašavanje preuzima datoteku s istim nazivom "(marked up)"; preglednik može dodati broj, npr. "(1)", ako stara preuzeta datoteka još stoji u folderu. Zamijeni ili očisti stare kopije sam.

MarkupCraft ne spašava PDF sam od sebe. Dok radiš, čuva kopiju za oporavak u ovom pregledniku, pa pad ili zatvoren tab ne gube tvoja označavanja: sljedeći put kad otvoriš MarkupCraft pitat će "Oporaviti rad?". Vidi [Oporavak rada](common:recover). I dalje spasi prije zatvaranja; ako pokušaš izaći s nespašenim označavanjima, preglednik prvo pita "Napustiti stranicu?" (iPad Safari to ne radi).

## Šta vide drugi PDF čitači

Svako označavanje se upisuje kao standardni PDF komentar (anotacija) sa svojim crtežom, pa ga svaki PDF preglednik prikazuje, štampa i navodi u svom panelu komentara:

- **Izgled je isti** kao u MarkupCraft: oblaci sa svojim lukovima, strelice, pečati, brojčane tačke, značke brojeva stavki liste nedostataka, oznake mjera.
- **Pojedinosti su standardne:** autor, datum, predmet, tekst komentara i boje.
- **Oblaci** su komentari pravougaonika ili poligona s oblačastim okvirom; **tekstualni okviri** i **pozivne oznake** su komentari tekstualnog okvira; **bilješke** su ljepljive bilješke; **olovka** i **marker** su crte tipa ink; **pečati** su komentari pečata.
- **Dužine i površine** su komentari mjerenja, a svaki kalibrisani list nosi svoju razmjeru, pa čitači koji razumiju mjere mogu prikazati vrijednosti.
- **Odgovori** su odgovori na komentar, a **statusi** su stanja pregleda (Otvoreno se prikazuje kao bez stanja).
- **Brojevi listova** koje si upisao postaju oznake stranica koje drugi čitači prikazuju.

Nekoliko stvari čita samo MarkupCraft: dodijeljena osoba i rok stavke liste nedostataka, status stavke i neki detalji stila. Drugi programi ih zadržavaju, osim ako ne prepišu komentar.

U drugom programu komentari se mogu pomjerati ili uređivati kao i svaki drugi. Ako neko to uradi i pošalje datoteku nazad, MarkupCraft pri otvaranju koristi novi položaj komentara.

Puni detalji: [Šta se čuva u PDF-u](topic:what-the-pdf-keeps).

## Znakovi koji se štampaju kao "?"

Tekst označavanja piše se standardnim fontom Helvetica koji ima svaki PDF preglednik. Pokriva engleska i zapadnoeuropska slova (é, ñ, ü, ø i slična), ali ne druga pisma, simbole van tog skupa ni emoji. Ti znakovi se u MarkupCraft lijepo prikazuju, ali se u spašenoj kopiji štampaju kao "?", a poruka o spašavanju ih broji: "3 znaka van zapadnoevropskog skupa štampaju se kao "?" u kopiji." Napiši takve riječi punim slovima ili koristi običnu zamjenu (npr. "dia." za znak prečnika).

## Datoteke koje se ne mogu spasiti

- **Zaštićeni PDF-ovi:** "Ovaj PDF je zaštićen (šifrovan), pa kopija s označavanjima ne može biti zapisana. Zatraži nezaštićenu kopiju." I dalje ga možeš pregledati na ekranu, izvesti CSV i BCF.
- Ako spašavanje ne uspije iz drugog razloga, okvir pod nazivom "Nije moguće spasiti <file>" prikazuje razlog. Označavanja su i dalje u kartici; ništa se ne gubi dok je ne zatvoriš.

## Spljoštavanje i štampanje

Nema spljoštavanja (upisivanja označavanja u stranicu) i još nema naredbe za štampanje. Za štampanje otvori spašenu kopiju u bilo kojem PDF pregledniku i štampaj uz prikazane komentare.

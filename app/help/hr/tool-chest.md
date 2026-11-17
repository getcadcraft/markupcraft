---
title: Skrinja s alatima
summary: Spremite stiliziran markup kao višekratni alat, crtajte njime i podijelite svoju skrinju s uredom kao datoteku.
keywords: skrinja s alatima, alati, skup alata, prilagođeni alati, spremljeni markupi, favoriti, uredski standard, uvoz, izvoz, dijeljenje, json
from: 7dfa36e0
---

Kartica {{ui:Tools}} sadrži vašu **skrinju s alatima**: markupe spremljene s njihovim izgledom, spremne za ponovno crtanje. Alat čuva vrstu markupa, boju, debljinu linije, ispunu, neprozirnost, veličinu teksta i predmet, uz tekst pečata, naziv grupe brojanja ili početni tekst tekstnog okvira ili oblačića.

## Alati koje dobivate na početku

Nova skrinja ima šest alata: „Revizijski oblak“ (crveni), „Oblak pitanja“ (plavi), „Žuto isticanje“, „RFI oblačić“ (plavi, počinje s „RFI: “), „Provjera na terenu“ (narančasti oblačić koji kaže „Provjera na terenu.“) i „Odobreno uz napomene“ (pečat).

## Crtanje alatom

1. Otvorite karticu {{ui:Tools}}.
2. Kliknite alat. Izgleda utisnuto, a odgovarajući alat na alatnoj traci se uključuje.
3. Crtajte kao obično. {{ui:Properties}} kaže „Crtanje alatom ‚<alat>‘ iz skrinje s alatima.“

Dok je alat iz skrinje uključen, promjene koje napravite u {{ui:Properties}} prije crtanja primjenjuju se na taj alat za sada, bez mijenjanja spremljenog alata ili vaših uobičajenih postavki alata. Odabir gumba na alatnoj traci ili pritisak tipke alata vraća na obični alat.

## Spremanje vlastitog alata

1. Nacrtajte markup i oblikujte ga kako želite: boja, linija, ispuna, predmet, tekst pečata.
2. Odaberite ga.
3. Odaberite {{ui:Save selected as a tool}} u kartici {{ui:Tools}} ili {{ui:Save as a tool}} u {{ui:Properties}}.
4. Upišite {{ui:Tool name}} i odaberite {{ui:Save tool}}.

Rezultat: alat se dodaje na kraj skrinje, a kartica {{ui:Tools}} se otvara i prikazuje ga.

## Pečati napravljeni od odabira

Odaberite nekoliko markupa (ili sadržaj stranice alatom {{ui:Content}}) i odaberite {{ui:Save selection as a stamp…}} u {{ui:More}} ili u izborniku za desni klik. Skrinja dobiva jedan pečat koji ih sve sadrži („Pečat: 3 markupa zajedno“). Kliknite ga, zatim kliknite na bilo koji list: markupi se postavljaju zajedno, centrirani tamo gdje kliknete, kao novi markupi s vašim imenom; sadržaj stranice se crta u stranicu na tom mjestu. Ti pečati se spremaju i dijele sa skrinjom kao i svaki drugi alat.

## Uklanjanje alata

Odaberite × na kraju retka alata, zatim {{ui:Remove}}. Markupi već nacrtani njime ostaju kakvi jesu.

## Gdje se skrinja čuva

Skrinja je spremljena **u ovom pregledniku, na ovom računalu**. Drugi preglednik ili računalo ima svoju skrinju (počinje sa šest zadanih alata), privatni prozor je zaboravlja kad se zatvori, a brisanje podataka ovog web-mjesta u postavkama preglednika je briše.

Ako je preglednik ne može spremiti (pohrana isključena ili puna), statusna traka kaže: „Skrinja s alatima ne može se zadržati u ovom pregledniku (pohrana je isključena ili puna). Izvezite je da je zadržite.“

:::safari
Safari može obrisati pohranjene podatke web-mjesta kad ga neko vrijeme ne koristite. Povremeno izvezite skrinju da je možete ponovno uvesti.
:::

**Izvezite skrinju kao sigurnosnu kopiju**, posebno nakon izrade alata na koje se oslanjate.

## Podijelite skrinju s uredom

1. Jednom postavite alate.
2. Odaberite {{ui:Export}}. Dobivate „MarkupCraft tool chest.json“.
3. Stavite tu datoteku tamo gdje ured čuva svoje standarde ili je pošaljite.
4. Svi ostali odaberu {{ui:Import}} u kartici {{ui:Tools}} i odaberu datoteku.

Rezultat: „Uvezeno 12 alata iz „MarkupCraft tool chest.json“.“ Alati koji potječu iz iste skrinje zamjenjuju svoje starije primjerke, pa uvoz ažurirane uredske skrinje osvježava te alate umjesto da ih udvostruči; novi alati se dodaju. Skrinja sadrži do 500 alata.

MarkupCraft provjerava svaku vrijednost u uvezenoj datoteci i preskače ono što ne može upotrijebiti („2 preskočeno (nije upotrebljivo)“). Datoteke koje nisu skrinja se odbijaju: „Ova datoteka nije MarkupCraft skrinja s alatima.“ ili „Ova datoteka nije skrinja s alatima (nije JSON).“

Skrinje s alatima iz drugih programa za markup ne mogu se uvesti.

---
title: Kutija sa alatima
summary: Sačuvajte označavanje sa njegovim izgledom kao alat za ponovnu upotrebu, crtajte njime i podelite svoju kutiju sa kancelarijom kao datoteku.
keywords: kutija sa alatima, alati, skup alata, prilagođeni alati, sačuvana označavanja, omiljeni, standard kancelarije, uvoz, izvoz, deljenje, json
from: 7dfa36e0
---

Kartica {{ui:Alatke}} sadrži vašu **kutiju sa alatima**: označavanja sačuvana sa svojim izgledom, spremna za ponovno crtanje. Alat čuva vrstu označavanja, boju, debljinu linije, ispunu, neprovidnost, veličinu teksta i predmet, plus tekst pečata, naziv grupe brojanja ili početni tekst tekstualnog okvira ili oznake.

## Alati koje počinjete sa

Nova kutija ima šest: „Oblak za reviziju“ (crveni), „Oblak za pitanje“ (plavi), „Žuti marker“, „RFI oznaka“ (plava, počinje sa „RFI: “), „Terenska provera“ (narandžasta oznaka sa tekstom „Terenska provera.“) i „Odobreno uz napomene“ (pečat).

## Crtajte alatom

1. Otvorite karticu {{ui:Alatke}}.
2. Kliknite alat. Izgleda kao pritisnut, a odgovarajući alat na traci sa alatima se uključuje.
3. Crtajte kao obično. {{ui:Svojstva}} kažu 'Crtanje alatom „<alat>“ iz kutije sa alatima.'

Dok je alat iz kutije uključen, izmene koje napravite u {{ui:Svojstva}} pre crtanja važe za taj alat za sada, bez menjanja sačuvanog alata ili vaših uobičajenih podešavanja alata. Izbor dugmeta na traci sa alatima ili pritisak na taster alata vraća na obični alat.

## Sačuvajte sopstveni

1. Nacrtajte označavanje i stilizujte ga kako želite: boja, linija, ispuna, predmet, tekst pečata.
2. Izaberite ga.
3. Izaberite {{ui:Sačuvaj izabrano kao alat}} na kartici {{ui:Alatke}}, ili {{ui:Sačuvaj kao alat}} u {{ui:Svojstva}}.
4. Ukucajte {{ui:Naziv alata}} i izaberite {{ui:Sačuvaj alat}}.

Rezultat: alat se dodaje na kraj kutije, a kartica {{ui:Alatke}} se otvara da ga prikaže.

## Pečati napravljeni od izbora

Izaberite nekoliko označavanja (ili sadržaj stranice alatom {{ui:Sadržaj}}) i izaberite {{ui:Sačuvaj izbor kao pečat…}} u {{ui:Više}} ili u meniju desnim klikom. Kutija dobija jedan pečat koji ih sve sadrži („Pečat: 3 označavanja zajedno“). Kliknite ga, pa kliknite na bilo koji list: označavanja se postavljaju zajedno, centrirana tamo gde kliknete, kao nova označavanja sa vašim imenom; sadržaj stranice se tu crta u stranicu. Ovi pečati se čuvaju i dele sa kutijom kao svaki alat.

## Uklonite alat

Izaberite × na kraju reda alata, pa {{ui:Ukloni}}. Označavanja već nacrtana tim alatom ostaju kakva jesu.

## Gde se kutija čuva

Kutija se čuva **u ovom pregledaču, na ovom računaru**. Drugi pregledač ili računar ima sopstvenu kutiju (počinje sa šest podrazumevanih), privatni prozor je zaboravlja kada se zatvori, a brisanje podataka ovog sajta u podešavanjima pregledača je briše.

Ako pregledač neće da je sačuva (skladište isključeno ili puno), statusna traka kaže: „Kutija sa alatima ne može se čuvati u ovom pregledaču (skladište je isključeno ili puno). Izvezite je da je sačuvate.“

:::safari
Safari može obrisati sačuvane podatke sajta kada duže vreme ne koristite sajt. Izvozite kutiju s vremena na vreme da je kasnije ponovo uvezete.
:::

**Izvezite kutiju kao rezervnu kopiju**, naročito posle pravljenja alata na koje se oslanjate.

## Podelite kutiju sa kancelarijom

1. Podesite alate jednom.
2. Izaberite {{ui:Izvezi}}. Dobijate „MarkupCraft tool chest.json“.
3. Stavite tu datoteku tamo gde kancelarija čuva svoje standarde, ili je pošaljite kolegama.
4. Svi ostali izaberu {{ui:Uvezi}} na svojoj kartici {{ui:Alatke}} i izaberu datoteku.

Rezultat: „Uvezeno je 12 alata iz ‚MarkupCraft tool chest.json‘.“ Alati koji su došli iz iste kutije zamenjuju svoje starije primerke, pa uvoz ažurirane kancelarijske kutije osvežava te alate umesto da ih udvostruči; novi alati se dodaju. Kutija sadrži do 500 alata.

MarkupCraft proverava svaku vrednost u uvezenoj datoteci i preskače ono što ne može da koristi („Preskočeno: 2 (nije upotrebljivo)“). Datoteke koje nisu kutija se odbijaju: „Ova datoteka nije kutija sa alatima MarkupCraft.“ ili „Ova datoteka nije kutija sa alatima (nije JSON).“

Datoteke kutije sa alatima iz drugih programa za označavanje ne mogu se uvesti.

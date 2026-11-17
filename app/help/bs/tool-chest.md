---
title: Sanduk s alatima
summary: Spasi stilizovanu oznaku kao alat za višekratnu upotrebu, crtaj njime i podijeli sanduk s kancelarijom kao datoteku.
keywords: sanduk s alatima, alati, skup alata, prilagođeni alati, sačuvane oznake, favoriti, kancelarijski standard, uvoz, izvoz, dijeljenje, json
from: 7dfa36e0
---

Kartica {{ui:Alati}} čuva tvoj **sanduk s alatima**: oznake sačuvane sa svojim izgledom, spremne za ponovno crtanje. Alat čuva vrstu oznake, boju, debljinu linije, ispunu, prozirnost, veličinu teksta i predmet, plus tekst pečata, ime grupe brojanja ili početni tekst tekstualnog okvira ili oznake s vodilicom.

## Alati s kojima počinješ

Novi sanduk ima šest: "Oblak revizije" (crveni), "Oblak pitanja" (plavi), "Žuti marker", "RFI oznaka s vodilicom" (plava, počinje s "RFI: "), "Provjera na terenu" (narandžasta oznaka s vodilicom koja kaže "Provjera na terenu.") i "Odobreno uz napomene" (pečat).

## Crtaj alatom

1. Otvori karticu {{ui:Alati}}.
2. Klikni alat. Izgleda pritisnuto, a odgovarajući alat na traci s alatima se uključi.
3. Crtaj kao obično. U {{ui:Svojstva}} piše 'Crtanje s "<tool>" iz sanduka s alatima.'

Dok je alat iz sanduka uključen, promjene koje napraviš u panelu {{ui:Svojstva}} prije crtanja primjenjuju se na taj alat samo za sada, bez mijenjanja sačuvanog alata ili tvojih uobičajenih postavki alata. Odabir dugmeta s trake s alatima, ili pritisak na tipku alata, vraća na običan alat.

## Spasi svoj

1. Nacrtaj oznaku i stiliziraj je kako želiš: boja, linija, ispuna, predmet, tekst pečata.
2. Odaberi je.
3. Odaberi {{ui:Spasi odabrano kao alat}} u kartici {{ui:Alati}}, ili {{ui:Spasi kao alat}} u {{ui:Svojstva}}.
4. Upiši {{ui:Naziv alata}} i odaberi {{ui:Spasi alat}}.

Rezultat: alat se dodaje na kraj sanduka, a kartica {{ui:Alati}} se otvori da ga pokaže.

## Pečati napravljeni od odabira

Odaberi nekoliko oznaka (ili sadržaj stranice alatom {{ui:Sadržaj}}) i odaberi {{ui:Spasi odabir kao pečat…}} u {{ui:Više}} ili u meniju desnog klika. Sanduk dobije jedan pečat koji ih sve drži ("Pečat: 3 oznake zajedno"). Klikni ga, zatim klikni na bilo koji list: oznake se postave zajedno, centrirane tamo gdje klikneš, kao nove oznake s tvojim imenom; sadržaj stranice se crta na stranicu na tom mjestu. Ti pečati se čuvaju i dijele sa sandukom kao svaki alat.

## Ukloni alat

Odaberi × na kraju reda alata, zatim {{ui:Ukloni}}. Oznake već nacrtane njime ostaju kakve jesu.

## Gdje se sanduk čuva

Sanduk se čuva **u ovom pregledaču, na ovom računaru**. Drugi pregledač ili računar ima svoj sanduk (počinje sa šest podrazumijevanih), privatni prozor ga zaboravlja kad se zatvori, a brisanje podataka sajta u postavkama pregledača ga briše.

Ako pregledač ne može da ga sačuva (pohrana je isključena ili puna), statusna traka kaže: "Sanduk s alatima nije mogao biti sačuvan u ovom pregledaču (pohrana je isključena ili puna). Izvezi ga da bi ga sačuvao."

:::safari
Safari može obrisati sačuvane podatke sajta kada ga neko vrijeme ne koristiš. Izvezi svoj sanduk s vremena na vrijeme da ga kasnije možeš ponovo uvesti.
:::

**Izvezi svoj sanduk kao rezervnu kopiju**, naročito nakon što napraviš alate na koje se oslanjaš.

## Podijeli sanduk s kancelarijom

1. Jednom postavi alate.
2. Odaberi {{ui:Izvezi}}. Dobiješ "MarkupCraft tool chest.json".
3. Stavi tu datoteku tamo gdje kancelarija čuva svoje standarde, ili je pošalji.
4. Svi drugi odaberu {{ui:Uvezi}} u kartici {{ui:Alati}} i izaberu datoteku.

Rezultat: "Uvezeno 12 alata iz "MarkupCraft tool chest.json"." Alati koji potiču iz istog sanduka zamjenjuju svoje starije kopije, pa uvoz ažuriranog kancelarijskog sanduka osvježava te alate umjesto da ih udvostruči; novi alati se dodaju. Sanduk može imati do 500 alata.

MarkupCraft provjerava svaku vrijednost u uvezenoj datoteci i preskače ono što ne može koristiti ("2 preskočeno (nije upotrebljivo)"). Datoteke koje nisu sanduk se odbijaju: "Ova datoteka nije MarkupCraft sanduk s alatima." ili "Ova datoteka nije sanduk s alatima (nije JSON)."

Datoteke sanduka s alatima iz drugih programa za označavanje ne mogu se uvesti.

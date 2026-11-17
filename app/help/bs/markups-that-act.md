---
title: Pretvori oznaku u zadatak
summary: Dodijeli oznaci izvršioca (osobu ili svog asistenta), dan roka i vezu s crtežom ili elementom modela na koji se odnosi, i vidi kada se zatvori jer se to stvarno promijenilo.
keywords: zadatak, zadaci, izvršilac, asistent, rok, kasni, veza, zatvara, promjena, element, područje crteža, oznake koje djeluju, MCP
from: 9e970202
---

Zadatak je oznaka koju mora da uradi neko. Zadržava svoje mjesto na listu i svoju nit, i dodaje naslov, izvršioca, dan roka, stanje i, ako želiš, vezu sa stvari na koju se odnosi.

## Napravi zadatak

1. Odaberi jednu ili više oznaka.
2. Otvori karticu {{ui:Zadaci}} i odaberi {{ui:Pretvori odabrano u zadatak}}.
3. Popuni naslov (počinje od teksta oznake), za koga je ({{ui:Osoba}} ili {{ui:Asistent}}, i ime), opcioni dan roka, i šta treba pratiti.

Zadatak za asistenta je posao za asistenta koga si povezao s MarkupCraft-om (vidi [Koristi MarkupCraft s AI asistentom](topic:use-with-ai-assistants)). MarkupCraft ne sadrži sopstvenog asistenta: samo navodi posao i prima odgovore asistenta. Odaberi {{ui:Dodijeljeno}}, zatim {{ui:Asistent}} u listi, da vidiš šta čeka na njega.

## Prati promjenu

- **Crtež unutar oznake.** MarkupCraft čuva linije unutar okvira oznake onakve kakve su sada. Kada otvoriš noviju reviziju tog lista (druga datoteka s istim brojem lista, ili isti položaj na stranici), odaberi {{ui:Provjeri sada}}: ako se linije u tom području razlikuju za više od dlake, zadatak se zatvara.
- **Element modela.** Navedi aplikaciju i id elementa. Tvoj asistent čita element sopstvenim alatima te aplikacije i prijavljuje ga s `tasks_check`. Prvi izvještaj se čuva kao početno stanje; kasniji izvještaj koji se razlikuje zatvara zadatak. Element koji je obrisan također zatvara zadatak.
- **Ništa.** Običan zadatak koji završavaš ručno.

Zatvoren zadatak se označava kao Gotovo, njegova oznaka postaje Završen, a bilješka u niti kaže šta se promijenilo. Jedan korak poništavanja ga ponovo otvara.

**Ograničenje:** provjera pretpostavlja da novija revizija koristi isti početak stranice i istu veličinu stranice. List ponovo ištampan u drugoj veličini se ne poklapa, pa njegovi zadaci ne zatvaraju. Listovi se upoređuju po broju lista, a inače po položaju na stranici; MarkupCraft ne skalira jednu reviziju da stane u drugu.

Ponovno štampanje istog crteža s novim datumom, ili linije koje su se pomjerile za manje od 1.5 pt, ne računaju se kao promjena. Ako nije otvorena nova revizija, zadatak ostaje otvoren, a statusna traka to kaže.

## Lista

Listu {{ui:Zadaci}} možeš filtrirati po stanju i po tome za koga je, uključujući {{ui:Prekoračen rok}}. Zadatak čiji je rok prošao prikazuje se u panelu Problemi kao upozorenje. {{ui:CSV}} izvozi listu.

Zadaci se snimaju u PDF-u zajedno s oznakom i putuju kroz Live kao i ostala svojstva oznake.

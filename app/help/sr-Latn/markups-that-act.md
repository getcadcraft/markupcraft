---
title: Označavanja koja deluju
summary: Dajte označavanju dodeljenog (osobu ili vašeg asistenta), rok i vezu sa elementom crteža ili modela o kojem je, pa pogledajte da se zatvara kada se to zaista promeni.
keywords: zadatak, zadaci, dodeljeni, asistent, rok, zakasnelo, veza, zatvara se, promena, element, oblast crteža, označavanja koja deluju, MCP
from: 9e970202
---

Zadatak je označavanje koje mora da uradi neko. Zadržava svoje mesto na listu i svoju nit, i dodaje naslov, dodeljenog, rok, stanje i, ako želite, vezu sa stvari o kojoj je.

## Napravite zadatak

1. Izaberite jedno ili više označavanja.
2. Otvorite karticu {{ui:Tasks}} i izaberite {{ui:Make selected a task}}.
3. Popunite naslov (počinje od teksta označavanja), za koga je ({{ui:Person}} ili {{ui:Assistant}}, i ime), opcioni rok, i šta da se prati.

Zadatak za asistenta je posao za asistenta koga ste povezali sa programom MarkupCraft (pogledajte [Korišćenje programa MarkupCraft sa AI asistentom](topic:use-with-ai-assistants)). MarkupCraft nema sopstvenog asistenta: samo prikazuje posao i prima odgovore asistenta. Izbor {{ui:Assigned to}}, pa {{ui:Assistant}} na listi prikazuje šta čeka na njega.

## Pratite promenu

- **Crtež unutar označavanja.** MarkupCraft čuva linije unutar okvira označavanja onakve kakve su sada. Kada otvorite noviju reviziju tog lista (druga datoteka sa istim brojem lista, ili isti položaj na stranici), izaberite {{ui:Check now}}: ako se linije u toj oblasti razlikuju za više od dlake, zadatak se zatvara.
- **Element modela.** Navedite aplikaciju i ID elementa. Vaš asistent čita element sopstvenim alatima druge aplikacije i prijavljuje ga sa `tasks_check`. Prvi izveštaj se čuva kao početno stanje; kasniji izveštaj koji se razlikuje zatvara zadatak. Element koji je obrisan takođe zatvara zadatak.
- **Ništa.** Običan zadatak koji završite ručno.

Zatvoreni zadatak je označen kao Završen, njegovo označavanje postaje Završeno, a beleška u niti kaže šta se promenilo. Jedan korak opozivanja ga ponovo otvara.

**Ograničenje:** provera pretpostavlja da novija revizija koristi isti početak stranice i istu veličinu stranice. List ponovo štampan u drugoj veličini se neće poklopiti, pa se njegovi zadaci ne zatvaraju. Listovi se upoređuju po broju lista, a ako ga nema, po položaju na stranici; MarkupCraft ne skalira jednu reviziju da stane u drugu.

Ponovno štampanje istog crteža sa novim datumskim pečatom, ili linije koje su se pomerile za manje od 1.5 pt, ne računa se kao promena. Ako nijedna novija revizija nije otvorena, zadatak ostaje otvoren i statusna traka to kaže.

## Lista

Lista {{ui:Tasks}} može da se filtrira po stanju i po tome za koga je, uključujući {{ui:Overdue}}. Zadatak čiji je rok prošao prikazuje se u panelu Problemi kao upozorenje. {{ui:CSV}} izvozi listu.

Zadaci se čuvaju u PDF-u zajedno sa označavanjem, i putuju kroz Live isto kao i ostala svojstva označavanja.

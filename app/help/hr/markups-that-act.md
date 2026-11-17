---
title: Oznaka kao zadatak
summary: Dodijelite oznaci osobu (ili svog pomoćnika), rok i poveznicu na element crteža ili modela o kojem je riječ, i vidite kako se zatvara kad se to stvarno promijeni.
keywords: zadatak, zadaci, dodijeljeno, pomoćnik, rok, prekoračen rok, poveznica, zatvara, promijenjeno, element, područje crteža, oznake koje djeluju, MCP
from: 9e970202
---

Zadatak je oznaka koju netko mora obaviti. Zadržava svoje mjesto na listu i svoju nit, a dodaje naslov, dodijeljenu osobu, rok, stanje i, ako želite, poveznicu na stvar o kojoj je riječ.

## Napravite zadatak

1. Odaberite jednu ili više oznaka.
2. Otvorite karticu {{ui:Tasks}} i odaberite {{ui:Make selected a task}}.
3. Ispunite naslov (počinje od teksta oznake), za koga je zadatak ({{ui:Person}} ili {{ui:Assistant}}, i ime), neobavezan rok i na što paziti.

Zadatak za pomoćnika je posao za pomoćnika koji ste povezali s MarkupCraftom (vidi [Koristite MarkupCraft s AI pomoćnikom](topic:use-with-ai-assistants)). MarkupCraft nema vlastitog pomoćnika: samo prikazuje posao i prima odgovore pomoćnika. Odabir {{ui:Assigned to}}, zatim {{ui:Assistant}} na popisu pokazuje što čeka na njega.

## Pratite promjenu

- **Crtež unutar oznake.** MarkupCraft zadržava linije unutar okvira oznake onakve kakve su sada. Kad otvorite noviju reviziju tog lista (drugu datoteku s istim brojem lista ili istim položajem na stranici), odaberite {{ui:Check now}}: ako se linije u tom području razlikuju i najmanje, zadatak se zatvara.
- **Element modela.** Upišite aplikaciju i id elementa. Vaš pomoćnik čita element alatima druge aplikacije i javlja ga s `tasks_check`. Prvo javljanje čuva se kao početno stanje; kasnije javljanje koje se razlikuje zatvara zadatak. Element koji je obrisan također ga zatvara.
- **Ništa.** Običan zadatak koji završite ručno.

Zatvoren zadatak označen je kao Gotovo, njegova oznaka postaje Dovršeno, a bilješka u niti kaže što se promijenilo. Jedan korak poništavanja ga ponovno otvara.

**Ograničenje:** provjera pretpostavlja da novija revizija koristi isti ishodište stranice i istu veličinu stranice. List ponovno ispisan u drugoj veličini se neće podudarati, pa se njegovi zadaci neće zatvoriti. Listovi se sparuju po broju lista, inače po položaju na stranici; MarkupCraft ne skalira jednu reviziju da stane u drugu.

Ponovni ispis istog crteža s novim datumom ili linije koje su se pomaknule za manje od 1.5 pt ne računaju se kao promjena. Ako nije otvorena nova revizija, zadatak ostaje otvoren, a statusna traka to kaže.

## Popis

Popis {{ui:Tasks}} može se filtrirati po stanju i po tome za koga je, uključujući {{ui:Overdue}}. Zadatak čiji je rok prošao prikazuje se u ploči Problemi kao upozorenje. {{ui:CSV}} izvozi popis.

Zadaci se spremaju u PDF s oznakom i putuju kroz Live kao i ostala svojstva oznake.

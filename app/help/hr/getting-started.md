---
title: Početak rada s MarkupCraftom
summary: Otvorite komplet nacrta, postavite prvi oblak i prvi oblačić na list i spremite kopiju s oznakama.
keywords: početak, prvi koraci, otvaranje pdf-a, pregled, markup, oznake, redline, crvena olovka, komplet nacrta, vodič, brzi početak
from: 0b1aae4e
---

MarkupCraft služi za pregled nacrta: otvarate PDF komplete nacrta, označavate ih oblacima, oblačićima, tekstom, pečatima i mjerama, pratite status svakog komentara i spremate kopiju PDF-a koju može prikazati bilo koji PDF preglednik.

Radi u vašem pregledniku. Vaši se PDF-ovi otvaraju na vašem računalu i **nikada se ne šalju na poslužitelj**. Spremanjem se preuzima nova kopija; izvorna datoteka ostaje nepromijenjena.

:::note
MarkupCraft je u razvoju. Pomoć opisuje verziju koju koristite. Ono što još ne zna popisano je u temi [Što još nije izrađeno](topic:not-built-yet).
:::

## Što vam treba

- Noviji Chrome, Edge, Firefox ili Safari na Macu, Windowsima ili Linuxu, odnosno Safari ili Chrome na iPadu. Pogledajte [Preglednici i računala](common:browsers).
- Jedan ili više PDF-ova. Cijeli komplet nacrta može biti jedan PDF ili više njih.
- Najugodnije je s mišem s kotačićem. Radi i touchpad, a radi i zaslon osjetljiv na dodir (pogledajte [Pregled na iPadu ili zaslonu osjetljivom na dodir](topic:review-on-a-tablet)).

## Vaš prvi pregled u deset koraka

1. Otvorite MarkupCraft u pregledniku. Na sredini zaslona piše „Otvorite komplet nacrta“.
2. Odaberite {{ui:Otvori PDF-ove}} (ili {{ui:Otvori}} na lijevom kraju alatne trake, ili pritisnite {{key:Mod+O}}), odaberite jedan ili više PDF-ova i potvrdite.
   PDF-ove možete i povući iz {{pick:mac=Findera|windows=Istraživača datoteka|linux=upravitelja datoteka}} i ispustiti na područje lista.
   Prvi put u statusnoj traci pri dnu piše „Učitavanje PDF čitača…“. Zatim svaka stranica postaje list na popisu {{ui:Listovi}} lijevo, a prvi list ispunjava sredinu.
3. Kliknite list na popisu da ga prikažete. Okrenite kotačić miša iznad lista da zumirate na mjestu pokazivača.
4. Odaberite {{ui:Oblak}} u grupi {{ui:Revizija}} na alatnoj traci (ili pritisnite {{key:C}}).
   Prvi put kad odaberete alat za crtanje, MarkupCraft traži vaše ime. Upišite ga i odaberite {{ui:Spremi}}. Svaka oznaka ga bilježi. (Više u temi [Postavite ime autora](topic:set-your-name).)
5. Povucite okvir oko područja koje želite označiti. Pojavljuje se crveni revizijski oblak i odabran je.
6. Odaberite {{ui:Oblačić}} u grupi {{ui:Bilješke}} (ili pritisnite {{key:K}}). Pritisnite ono na što pokazujete, povucite do mjesta za tekst i pustite.
7. Upišite komentar u okvir koji se pojavi. Kliknite bilo gdje izvan okvira (ili pritisnite {{key:Mod+Enter}}) za završetak.
8. Dvaput pritisnite {{key:Esc}}: jednom za poništavanje odabira, jednom za povratak na alat {{ui:Odaberi}}. Kliknite oblak. Kartica {{ui:Svojstva}} desno prikazuje tko ga je izradio, kada i njegov {{ui:Status}}.
9. Odaberite {{ui:Spremi}} na alatnoj traci (ili pritisnite {{key:Mod+S}}).
   Preglednik preuzima kopiju s imenom poput „A-Plans (marked up).pdf“. Statusna traka navodi koliko je oznaka upisano.
10. Otvorite tu kopiju u bilo kojem PDF pregledniku i provjerite: oblak i oblačić su ondje, kao obični PDF komentari s vašim imenom.

Za kasniji nastavak rada otvorite kopiju „(marked up)“ u MarkupCraftu. Vaše se oznake vraćaju uredive, sa statusima, odgovorima i brojevima stavki popisa nedostataka.

## Online i offline

:::online
Online ste. MarkupCraft učitava svoj PDF čitač pri prvom otvaranju PDF-a, a svoj PDF pisač pri prvom spremanju. Da biste kasnije mogli raditi bez veze (na terenu, u zrakoplovu), sada odaberite {{ui:Spremi za offline}} u traci pri vrhu i pričekajte „Spremno za offline“. Kopija sadrži PDF čitač i PDF pisač, pa potom otvaranje i spremanje PDF-ova radi i offline. Pogledajte [Rad offline](common:offline).
:::

:::offline
Offline ste. Ako u traci pri vrhu piše „Spremno za offline“, MarkupCraft je spremljen za offline uporabu u ovom pregledniku i sve radi: otvaranje, označavanje, mjerenje, spremanje. Ako nije, koristite ono što je već učitano u ovoj kartici i ne osvježavajte stranicu dok se ponovno ne spojite. Pogledajte [Rad offline](common:offline).
:::

## Što aplikacija pamti, a što ne

- **Vaše oznake žive u PDF-u koji spremite.** Ništa se ne čuva na poslužitelju. Aplikacija sama ne sprema PDF, ali u ovom pregledniku drži kopiju za oporavak dok to ne učinite. Spremite prije zatvaranja kartice; preglednik prvo pita ako pokušate otići s nespremljenim oznakama (osim na iPadu, pogledajte [Pregled na iPadu ili zaslonu osjetljivom na dodir](topic:review-on-a-tablet)).
- **Vaše ime, stilovi alata i kutija s alatima** ostaju u ovom pregledniku na ovom računalu. Drugi preglednik ili računalo počinje ispočetka, a brisanje podataka web-mjesta u pregledniku uklanja ih. Pogledajte [Što ostaje u ovom pregledniku](topic:browser-storage).
- Spremanje u oblak i sesije pregleda koje dijeli više osoba još nisu dostupni.

## Kamo dalje

- [Obilazak zaslona](topic:workspace)
- [Označite list](topic:mark-up-a-sheet)
- [Kalibrirajte list i mjerite](topic:calibrate-and-measure)
- [Ako dolazite iz drugog programa za markup](topic:coming-from) ako već pregledavate nacrte u nekom drugom programu.

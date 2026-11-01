---
title: Početak rada s MarkupCraft-om
summary: Otvorite set planova, postavite prvi oblak i izvučenu oznaku na list i spasite kopiju s oznakama.
keywords: početak, prvi koraci, otvori pdf, pregled, označavanje, redline, crvena olovka, set planova, vodič, brzi početak
from: 0b1aae4e
---

MarkupCraft služi za pregled crteža: otvarate PDF setove planova, označavate ih oblacima, izvučenim oznakama, tekstom, pečatima i mjerenjima, pratite status svakog komentara i spašavate kopiju PDF-a koju može prikazati bilo koji PDF pregledač.

Radi u web pregledniku. Vaši PDF-ovi se otvaraju na vašem računaru i **nikada se ne otpremaju**. Spašavanje preuzima novu kopiju; vaša originalna datoteka se ne mijenja.

:::note
MarkupCraft je u razvoju. Pomoć opisuje verziju koju pokrećete. Stvari koje još ne radi navedene su u [Šta još nije napravljeno](topic:not-built-yet).
:::

## Šta vam treba

- Noviji Chrome, Edge, Firefox ili Safari na računaru sa Mac, Windows ili Linux, ili Safari ili Chrome na iPadu. Pogledajte [Pretraživači i računari](common:browsers).
- Jedna ili više PDF datoteka. Cijeli set planova može biti jedan PDF ili više njih.
- Miš sa točkićem je najudobniji. Touchpad radi, kao i ekran osjetljiv na dodir (pogledajte [Pregled na iPadu ili ekranu osjetljivom na dodir](topic:review-on-a-tablet)).

## Vaš prvi pregled u deset koraka

1. Otvorite MarkupCraft u pregledniku. Sredina ekrana kaže "Otvori set planova".
2. Izaberite {{ui:Otvori PDF-ove}} (ili {{ui:Otvori}} na lijevom kraju trake s alatima, ili pritisnite {{key:Mod+O}}), odaberite jedan ili više PDF-ova i potvrdite.
   Možete i prevući PDF-ove iz {{pick:mac=Finder|windows=File Explorer|linux=vaš upravitelj datoteka}} i pustiti ih na područje lista.
   Prvi put, statusna traka na dnu kaže "Učitavanje PDF čitača…". Zatim svaka stranica postaje list na listi {{ui:Listovi}} lijevo, a prvi list ispuni sredinu.
3. Kliknite list na spisku da ga prikažete. Okrenite točkić miša iznad lista da zumirate tamo gdje je pokazivač.
4. Izaberite {{ui:Oblak}} u grupi {{ui:Revidiraj}} na traci s alatima (ili pritisnite {{key:C}}).
   Prvi put kada izaberete alat za crtanje, MarkupCraft traži vaše ime. Upišite ga i izaberite {{ui:Spasi}}. Svaka oznaka ga bilježi. (Više u [Postavite ime autora](topic:set-your-name).)
5. Prevucite okvir oko područja koje želite označiti. Pojavljuje se crveni revizijski oblak i odabran je.
6. Izaberite {{ui:Izvučena oznaka}} u grupi {{ui:Označavanje}} (ili pritisnite {{key:K}}). Pritisnite na stvar na koju pokazujete, prevucite do mjesta gdje tekst treba biti i pustite.
7. Upišite komentar u okvir koji se pojavi. Kliknite bilo gdje van okvira (ili pritisnite {{key:Mod+Enter}}) da završite.
8. Pritisnite {{key:Esc}} dva puta: jednom da poništite odabir, jednom da se vratite na alat {{ui:Odaberi}}. Kliknite oblak. Kartica {{ui:Svojstva}} desno pokazuje ko ga je napravio, kada i njegov {{ui:Status}}.
9. Izaberite {{ui:Spasi}} na traci s alatima (ili pritisnite {{key:Mod+S}}).
   Vaš pretraživač preuzima kopiju imenovanu kao "A-Plans (marked up).pdf". Statusna traka navodi koliko je oznaka upisano.
10. Otvorite tu kopiju u bilo kojem PDF pregledaču da provjerite: oblak i izvučena oznaka su tu, kao obični PDF komentari s vašim imenom.

Da nastavite kasnije, otvorite kopiju "(marked up)" u MarkupCraft-u. Vaše oznake se vraćaju kao izmjenjive, sa svojim statusima, odgovorima i brojevima ispravki.

## Na mreži i van mreže

:::online
Na mreži ste. MarkupCraft učitava PDF čitač prvi put kada otvorite PDF, a PDF modul za spašavanje prvi put kada spašavate. Za rad bez veze kasnije (na terenu, u avionu), izaberite {{ui:Spasi za rad van mreže}} u traci na vrhu sada i sačekajte "Spremno za rad van mreže". Kopija uključuje PDF čitač i modul za spašavanje, pa otvaranje i spašavanje PDF-ova zatim rade van mreže. Pogledajte [Rad van mreže](common:offline).
:::

:::offline
Niste na mreži. Ako traka na vrhu kaže "Spremno za rad van mreže", MarkupCraft je spašen za rad van mreže u ovom pretraživaču i sve radi: otvaranje, označavanje, mjerenje, spašavanje. Ako nije, koristite ono što je već učitano u ovoj kartici i ne osvježavajte stranicu dok se ne vratite na mrežu. Pogledajte [Rad van mreže](common:offline).
:::

## Šta aplikacija pamti, a šta ne

- **Vaše oznake žive u PDF-u koji spašavate.** Ništa se ne čuva na serveru. Aplikacija sama ne spašava PDF, ali čuva kopiju za oporavak u ovom pretraživaču dok ne spasite. Spasite prije zatvaranja kartice; pretraživač pita prvo ako pokušate otići s nespašenim oznakama (osim na iPadu, pogledajte [Pregled na iPadu ili ekranu osjetljivom na dodir](topic:review-on-a-tablet)).
- **Vaše ime, stilovi vaših alata i sanduk alata** ostaju u ovom pretraživaču na ovom računaru. Drugi pretraživač ili računar počinje ispočetka, a brisanje podataka sajta u pretraživaču ih uklanja. Pogledajte [Šta ostaje u ovom pretraživaču](topic:browser-storage).
- Spašavanje u oblaku i zajednički pregledi između ljudi još nisu dostupni.

## Kuda dalje

- [Obilazak ekrana](topic:workspace)
- [Označite list](topic:mark-up-a-sheet)
- [Kalibrišite list i mjerite](topic:calibrate-and-measure)
- [Prelazak sa drugog softvera za označavanje](topic:coming-from) ako već pregledate crteže u drugom programu.

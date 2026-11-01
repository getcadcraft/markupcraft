---
title: Početak rada sa MarkupCraft
summary: Otvori set planova, postavi prvi oblak i pokaznu oznaku na list i sačuvaj kopiju sa označavanjima.
keywords: početak, prvi koraci, otvori pdf, pregled, označavanje, crvene izmene, set planova, vodič, brzi početak
from: 0b1aae4e
---

MarkupCraft služi za pregled crteža: otvaraš PDF setove planova, označavaš ih oblacima, pokaznim oznakama, tekstom, pečatima i merenjima, pratiš status svakog komentara i čuvaš kopiju PDF-a koju može da prikaže svaki PDF pregledač.

Radi u tvom veb pregledaču. Tvoji PDF-ovi se otvaraju na tvom računaru i **nikad se ne otpremaju**. Čuvanje preuzima novu kopiju; tvoj originalni fajl se ne menja.

:::note
MarkupCraft je u razvoju. Pomoć opisuje verziju koju pokrećeš. Stvari koje još ne radi navedene su u [Šta još nije napravljeno](topic:not-built-yet).
:::

## Šta ti treba

- Nedavni Chrome, Edge, Firefox ili Safari na Mac, Windows ili Linux računaru, ili Safari ili Chrome na iPad-u. Videti [Pregledači i računari](common:browsers).
- Jedan ili više PDF fajlova. Ceo set planova može biti jedan PDF ili više njih.
- Miš sa točkićem je najudobniji. Trackpad takođe radi, kao i ekran osetljiv na dodir (videti [Pregled na iPad-u ili ekranu osetljivom na dodir](topic:review-on-a-tablet)).

## Prvi pregled u deset koraka

1. Otvori MarkupCraft u pregledaču. Sredina ekrana kaže „Otvori set planova“.
2. Izaberi {{ui:Open PDFs}} (ili {{ui:Open}} na levom kraju alatne trake, ili pritisni {{key:Mod+O}}), izaberi jedan ili više PDF-ova i potvrdi.
   Možeš i da prevučeš PDF-ove iz {{pick:mac=Finder|windows=File Explorer|linux=vaš upravljač datotekama}} i ispustiš ih u oblast lista.
   Prvi put, statusna traka na dnu kaže „Učitavanje PDF čitača…“. Zatim svaka strana postaje list u listi {{ui:Sheets}} sa leve strane, a prvi list ispuni sredinu.
3. Klikni list u listi da ga prikažeš. Okreni točkić miša preko lista da uvećaš tamo gde je pokazivač.
4. Izaberi {{ui:Cloud}} u grupi {{ui:Revise}} na alatnoj traci (ili pritisni {{key:C}}).
   Kada prvi put izabereš alat za crtanje, MarkupCraft traži tvoje ime. Upiši ga i izaberi {{ui:Save}}. Svako označavanje ga beleži. (Više u [Podesi ime autora](topic:set-your-name).)
5. Prevuci okvir oko oblasti koju želiš da označiš. Pojaviće se crveni revizioni oblak i biće izabran.
6. Izaberi {{ui:Callout}} u grupi {{ui:Annotate}} (ili pritisni {{key:K}}). Pritisni na stvar na koju pokazuješ, prevuci do mesta gde treba da ide tekst i pusti.
7. Upiši komentar u okvir koji se pojavi. Klikni bilo gde van okvira (ili pritisni {{key:Mod+Enter}}) da završiš.
8. Pritisni {{key:Esc}} dva puta: jednom da poništiš izbor, jednom da se vratiš na alat {{ui:Select}}. Klikni oblak. Kartica {{ui:Properties}} sa desne strane pokazuje ko ga je napravio, kada, i njegov {{ui:Status}}.
9. Izaberi {{ui:Save}} na alatnoj traci (ili pritisni {{key:Mod+S}}).
   Tvoj pregledač preuzima kopiju nazvanu kao „A-Plans (marked up).pdf“. Statusna traka kaže koliko je označavanja upisano.
10. Otvori tu kopiju u bilo kom PDF pregledaču da proveriš: oblak i pokazna oznaka su tu, kao obični PDF komentari sa tvojim imenom.

Da nastaviš kasnije, otvori kopiju „(marked up)“ u MarkupCraft-u. Tvoja označavanja se vraćaju kao izmenljiva, sa svojim statusima, odgovorima i brojevima stavki za nedostatke.

## Na mreži i van nje

:::online
Na mreži si. MarkupCraft učitava svoj PDF čitač kada prvi put otvoriš PDF, a modul za pisanje PDF-a kada prvi put čuvaš. Da radiš bez veze kasnije (na terenu, u avionu), izaberi {{ui:Save for offline}} na traci na vrhu sada i sačekaj „Spremno za rad van mreže“. Kopija obuhvata čitač i modul za pisanje, pa otvaranje i čuvanje PDF-ova tada radi bez veze. Videti [Rad van mreže](common:offline).
:::

:::offline
Van si mreže. Ako traka na vrhu kaže „Spremno za rad van mreže“, MarkupCraft je sačuvan za rad van mreže u ovom pregledaču i sve radi: otvaranje, označavanje, merenje, čuvanje. Ako nije, koristi ono što je već učitano u ovoj kartici i ne osvežavaj stranicu dok se ne vratiš na mrežu. Videti [Rad van mreže](common:offline).
:::

## Šta aplikacija pamti, a šta ne

- **Tvoja označavanja žive u PDF-u koji sačuvaš.** Ništa se ne čuva na serveru. Aplikacija sama ne čuva PDF, ali drži kopiju za oporavak u ovom pregledaču dok ne sačuvaš. Sačuvaj pre nego što zatvoriš karticu; pregledač pita pre nego što odeš sa nesačuvanim označavanjima (osim na iPad-u, videti [Pregled na iPad-u ili ekranu osetljivom na dodir](topic:review-on-a-tablet)).
- **Tvoje ime, stilovi alata i sanduk sa alatkama** ostaju u ovom pregledaču na ovom računaru. Drugi pregledač ili računar počinje ispočetka, a brisanje podataka sajta u pregledaču ih uklanja. Videti [Šta ostaje u ovom pregledaču](topic:browser-storage).
- Čuvanje u oblaku i sesije pregleda deljene među ljudima još nisu dostupne.

## Gde dalje

- [Obilazak ekrana](topic:workspace)
- [Označi list](topic:mark-up-a-sheet)
- [Kalibriši list i meri](topic:calibrate-and-measure)
- [Prelazak sa drugog softvera za označavanje](topic:coming-from) ako već pregledaš crteže u drugom programu.

---
title: Očistite poteze olovkom i uvezite komentare o pregledu i napredak gradilišta
summary: Pretvorite slobodnoručne poteze olovkom u linije, krugove, lukove i pravougaonike; uvezite komentare o pregledu paketa dozvole i napredak snimanja gradilišta kao beleške.
keywords: olovka, slobodnoručno, očisti, ispravi, krug, linija, pravougaonik, luk, dozvola, komentari o pregledu, napredak, dron, skeniranje, snimanje, beleške, csv
from: 547d8e42
---

## Očistite poteze olovkom

Crtajte sa {{ui:Pen}}, zatim otvorite meni {{ui:More}} u grupi Uređivanje i izaberite {{ui:Clean up pen strokes}}. Svaki izabrani potez olovkom postaje ono što je trebalo da bude: ravan potez postaje linija (tačno vodoravna ili uspravna kad je bila skoro takva), okrugao postaje elipsa, deo kruga postaje luk, zatvoren četvorougao postaje pravougaonik, a sve ostalo polilinija ili poligon. Slobodni krajevi poteza nacrtanih zajedno povlače se jedan ka drugom. Ako nijedan potez olovkom nije izabran, čisti se svaki potez olovkom na otvorenom listu. To je jedan korak opoziva: {{key:Ctrl+Z}} vraća slobodnoručni potez. Oblik se računa na vašem računaru prema fiksnim pravilima; ništa se nigde ne šalje.

## Uvezite komentare o pregledu

Paket dozvole kompanije BimCraft sadrži `01-review-comments.csv`: komentare koje će pregledač plana verovatno dati, svaki sa pravilom, stavom, onim što je potrebno, onim što je nađeno i šta treba uraditi. Na kartici {{ui:Tasks}} otvorite {{ui:Permit review comments}} i izaberite {{ui:Bring in comments (CSV)}}. Svaki komentar postaje beleška sa statusom Otvoreno u koloni duž leve strane otvorenog lista; prevucite svaku na mesto na koje se odnosi. Komentari se računaju iz postojećih provera, a ne od strane službenika za plan.

## Uvezite HAZOP kutije čvorova

Dodatak P&ID za CadCraft crta čvorove HAZOP studije i može ih sačuvati kao {{ui:HAZOP node boxes}} (JSON datoteka). Otvorite ovde odštampani P&ID list, idite na karticu {{ui:Tasks}}, otvorite {{ui:HAZOP node boxes}} i izaberite {{ui:Bring in node boxes (JSON)}}. Svaki čvor postaje otvoreni pravougaonik na listu sa svojim brojem, nazivom, opremom i linijama u tekstu, a tim upisuje nalaze kao odgovore na njega. List se uzima kao odštampan u punoj veličini od donjeg levog ugla crteža; ako je odštampan u drugoj razmeri, prvo ukucajte taj broj u {{ui:Printed at}} (0.5 za 1:2). Čvor koji je van strane se ne crta, a panel kaže koliko ih je. Oznake su pomoćno sredstvo za studiju: pokazuju gde su čvorovi, ali ne ocenjuju studiju.

## Uvezite napredak gradilišta

CivilCraft vodi red za svaki let drona ili snimanje gradilišta. Na kartici {{ui:Tasks}} otvorite {{ui:Site progress}} i izaberite {{ui:Bring in progress (JSON)}}. Svako snimanje postaje beleška na otvorenom listu koja kaže koliko je urađeno, šta preostaje da se iskopa ili nasuje, šta je previše iskopano ili previše nasuto i šta stoji van plana. Snimanje sa nečim van plana ostaje Otvoreno; čisto snimanje dobija status Prihvaćeno.

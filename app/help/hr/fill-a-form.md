---
title: Ispunjavanje PDF obrasca
summary: Upišite u polja PDF obrasca, označite kućice i birajte s popisa; vrijednosti se spremaju u sam obrazac.
keywords: obrazac, obrasci, popunjiv, ispuni, popuni, acroform, polje, polja, tekstualno polje, potvrdni okvir, označi, radio gumb, padajući popis, popis, dozvola, zahtjev, obrazac za pregled, obrazac za podnesak, potpis
from: ab366541
---

Mnogi PDF-ovi dolaze s obrascem: zahtjevi za dozvolu, kontrolni popisi za pregled, naslovne stranice podnesaka. MarkupCraft prikazuje polja obrasca i njihove vrijednosti i omogućuje vam da ih ispunite. Vrijednosti idu u vlastita polja PDF-a, pa ih Acrobat i svaki drugi PDF čitač prikazuju i čuvaju.

## Ispunjavanje obrasca

1. Otvorite PDF. Ako ima obrazac, statusna traka kaže koliko ima polja.
2. Odaberite {{ui:Ispuni obrazac}} na alatnoj traci (ili pritisnite {{key:F}}). Svako polje na stranici dobiva okvir u koji možete upisati.
3. Kliknite polje i upišite. Označite potvrdne okvire, odaberite radio gumbe, birajte s padajućih popisa i popisa. {{key:Tab}} prelazi na sljedeće polje.
4. Za pomicanje lista dok ispunjavate, povucite bilo gdje izvan polja.
5. Pritisnite {{key:Esc}} ili odaberite drugi alat kada završite. Ono što ste upisali ostaje na listu.

S {{ui:Odabir}}, dvostruki klik na polje uključuje {{ui:Ispuni obrazac}} i stavlja vas u to polje.

## Spremanje ispunjenog obrasca

Odaberite {{ui:Spremi}}. Kopija koju preuzmete ima vaše vrijednosti u poljima, uz vaše oznake. Statusna traka kaže koliko je polja ispunjeno.

Za predaju obrasca koji nitko ne može mijenjati odaberite {{ui:Stranice}}, zatim {{ui:Spremi spljoštenu kopiju…}}: vrijednosti postaju dio stranice. Ispis radi isto.

## Dobro je znati

- Polje koje PDF zaključava (samo za čitanje) ne može se mijenjati. Njegov okvir je siv.
- Tekst do vlastitog ograničenja duljine polja se zadržava; dodatni znakovi se ne upisuju.
- Neki obrasci dolaze bez nacrtane slike svojih okvira i gumba, a drugi programi ih prikazuju prazne. MarkupCraft ih crta, a pri spremanju dodaje sliku, pa se prikazuju svuda.
- Poništavanje u polju je poništavanje samog polja: pritisnite {{key:Ctrl+Z}} dok u njega upisujete. Poništavanje oznaka ne poništava vrijednosti obrasca.
- Ako se preglednik zatvori, upisane vrijednosti vraćaju se zajedno s ostalim nespremljenim radom.
- Vrijednosti upisane znakovima koje standardni PDF font ne može ispisati (na primjer kineski) se spremaju, a PDF traži da ih svaki čitač sam nacrta.
- Polja za potpis i gumbi za pritisak ovdje se ne ispunjavaju. Za potpisivanje koristite {{ui:Pečat}} i svoj potpis.
- Vrijednosti upisane u obrazac još se ne dijele u Live sesiji.

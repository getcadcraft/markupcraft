---
title: Popuni PDF obrazac
summary: Upisuj u polja PDF obrasca, označavaj kvadratiće i biraj sa spiskova; vrijednosti se spašavaju u sam obrazac.
keywords: obrazac, obrasci, popunjiv, popuni, popunjavanje, polje, polja, tekstualno polje, potvrdni kvadratić, označi, radio dugme, padajuća lista, spisak, dozvola, zahtjev, obrazac za inspekciju, obrazac podneska, potpiši
from: ab366541
---

Mnogi PDF-ovi dolaze sa obrascem: zahtjevi za dozvole, kontrolne liste za inspekciju, naslovne strane podnesaka. MarkupCraft prikazuje polja obrasca i njihove vrijednosti i omogućava da ih popuniš. Vrijednosti idu u vlastita polja PDF-a, pa ih Acrobat i svaki drugi PDF čitač prikazuju i čuvaju.

## Popuni obrazac

1. Otvori PDF. Kad ima obrazac, statusna linija kaže koliko ima polja.
2. Odaberi {{ui:Popuni obrazac}} na alatnoj traci (ili pritisni {{key:F}}). Svako polje na stranici dobija okvir u koji možeš upisivati.
3. Klikni polje i upiši. Označi kvadratiće, izaberi radio dugmad, biraj s padajućih lista i spiskova. {{key:Tab}} ide na sljedeće polje.
4. Da pomjeriš list dok popunjavaš, prevuci bilo gdje van polja.
5. Pritisni {{key:Esc}} ili odaberi drugi alat kad završiš. Ono što si upisao ostaje na listu.

Sa {{ui:Odaberi}}, dvostruki klik na polje uključuje {{ui:Popuni obrazac}} i stavlja te u to polje.

## Spasi popunjeni obrazac

Odaberi {{ui:Spasi}}. Kopija koju preuzmeš ima tvoje vrijednosti u svojim poljima, sa tvojim oznakama uz njih. Statusna linija kaže koliko je polja popunjeno.

Da predaš obrazac koji niko ne može mijenjati, odaberi {{ui:Stranice}}, pa {{ui:Spasi spljoštenu kopiju…}}: vrijednosti postaju dio stranice. Štampanje radi isto.

## Dobro je znati

- Polje koje PDF zaključava (samo za čitanje) ne može se mijenjati. Njegov okvir je siv.
- Tekst do vlastite dužine polja se čuva; dodatni znakovi se ne upisuju.
- Neki obrasci dolaze bez nacrtane slike svojih kvadratića i dugmadi, a drugi programi ih prikazuju praznim. MarkupCraft ih crta, a kad spasiš dodaje sliku, pa se vide svuda.
- Poništavanje u polju je polja samog: pritisni {{key:Ctrl+Z}} dok upisuješ u njega. Poništavanje oznaka ne poništava vrijednosti obrasca.
- Ako se pregledač zatvori, vrijednosti koje si upisao vraćaju se zajedno sa ostalim nespašenim radom.
- Vrijednosti upisane slovima koje standardni PDF font ne može napisati (npr. kineska) se spašavaju, a PDF traži od svakog čitača da ih sam iscrta.
- Polja za potpis i tipke se ovdje ne popunjavaju. Za potpis koristi {{ui:Pečat}} i svoj potpis.
- Vrijednosti upisane u obrazac se još ne dijele u Live sesiji.

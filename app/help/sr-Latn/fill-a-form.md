---
title: Popunjavanje PDF obrasca
summary: Unosite tekst u polja PDF obrasca, štiklirajte polja za potvrdu i birajte sa lista; vrednosti se čuvaju u samom obrascu.
keywords: obrazac, obrasci, popunjiv, popuni, popunjavanje, acroform, polje, polja, tekstualno polje, polje za potvrdu, potvrda, dugme opcije, padajuća lista, lista, dozvola, zahtev, obrazac za inspekciju, obrazac za dokumentaciju za odobrenje, overa
from: ab366541
---

Mnogi PDF-ovi dolaze sa obrascem: zahtevi za dozvolu, kontrolne liste za inspekciju, naslovne strane dokumentacije za odobrenje. MarkupCraft prikazuje polja obrasca i njihove vrednosti i omogućava vam da ih popunite. Vrednosti idu u sopstvena polja PDF-a, pa ih Acrobat i svaki drugi čitač PDF-a prikazuju i čuvaju.

## Popunite obrazac

1. Otvorite PDF. Kad ima obrazac, statusna traka kaže koliko polja ima.
2. Izaberite {{ui:Popuni obrazac}} na traci alata (ili pritisnite {{key:F}}). Svako polje na stranici dobija okvir u koji možete kucati.
3. Kliknite polje i kucajte. Štiklirajte polja za potvrdu, birajte dugmad opcija, birajte sa padajućih lista i lista. {{key:Tab}} prelazi na sledeće polje.
4. Da pomerate list dok popunjavate, prevucite bilo gde van polja.
5. Pritisnite {{key:Esc}} ili izaberite drugi alat kad završite. Ono što ste uneli ostaje na listu.

Uz {{ui:Izbor}}, dvostruki klik na polje uključuje {{ui:Popuni obrazac}} i stavlja vas u to polje.

## Sačuvajte popunjeni obrazac

Izaberite {{ui:Sačuvaj}}. Kopija koju preuzmete ima vaše vrednosti u svojim poljima, sa vašim označavanjima uz njih. Statusna traka kaže koliko je polja popunjeno.

Da predate obrazac koji niko ne može da menja, izaberite {{ui:Stranice}}, pa {{ui:Sačuvaj spljoštenu kopiju…}}: vrednosti postaju deo stranice. Štampanje radi isto.

## Dobro je znati

- Polje koje PDF zaključava (samo za čitanje) ne može se menjati. Njegov okvir je siv.
- Tekst do sopstvene dužine polja se čuva; višak znakova se ne upisuje.
- Neki obrasci dolaze bez nacrtane slike svojih okvira i dugmadi, pa ih drugi programi prikazuju prazne. MarkupCraft ih crta, a pri čuvanju dodaje sliku, pa se vide svuda.
- Opoziv unutar polja je poseban za to polje: pritisnite {{key:Ctrl+Z}} dok kucate u njemu. Opoziv označavanja ne poništava vrednosti obrasca.
- Ako se pregledač zatvori, vrednosti koje ste uneli vraćaju se zajedno sa ostalim nesačuvanim radom.
- Vrednosti unete slovima koje standardni PDF font ne može da napiše (na primer kineska) se čuvaju, a PDF traži od svakog čitača da ih sam nacrta.
- Polja za potpis i tasteri se ovde ne popunjavaju. Za potpisivanje koristite {{ui:Pečat}} i svoj potpis.
- Vrednosti unete u obrazac još se ne dele u uživo sesiji.

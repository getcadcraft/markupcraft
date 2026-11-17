---
title: Šta se čuva u PDF-u
summary: Tačno šta sadrži označena kopija, šta vide drugi PDF programi i šta se ponovo čita kada otvoriš datoteku.
keywords: pdf napomene, komentari, sačuvani podaci, povratno čitanje, oznake stranica, mjerenje, stanje pregleda, odgovori, interoperabilnost, kompatibilnost, ponovo otvori, privatni podaci
from: 6439ad28
---

Označena kopija je originalni PDF s dodatim komentarima (PDF napomenama). Same stranice, njihovi crteži, tekst, knjižne oznake i veze kopiraju se kako su bili.

## Svako označavanje

| MarkupCraft | Sačuvano kao | Drugi PDF pregledači prikazuju |
|---|---|---|
| Pravougaonik, kutijasti oblak | Kvadratna napomena (oblak: oblačni okvir) | Pravougaoni ili oblačni komentar |
| Elipsa | Kružna napomena | Komentar elipse |
| Poligon, slobodni oblak | Poligonalna napomena (oblak: oblačni okvir) | Komentar poligona ili oblaka |
| Polilinija | PolyLine napomena | Komentar polilinije |
| Linija, strelica | Linijska napomena (strelica: zatvoreni vrh strelice) | Komentar linije ili strelice |
| Dužina | Linijska napomena označena kao kota, s mjerenjem | Mjerenje dužine, gdje pregledač to podržava |
| Površina | Poligonalna napomena označena kao površina, s mjerenjem | Mjerenje površine, gdje je podržano; inače poligon |
| Grupa brojanja | Jedna napomena s tintom, prsten po stavci; tekst je "grupa: n" | Komentar tintom |
| Olovka, marker | Napomena tintom (marker označen kao takav) | Komentar tintom |
| Tekst | FreeText napomena | Komentar tekstualnog okvira |
| Vodilica | FreeText napomena s vodilicom | Komentar s vodilicom |
| Bilješka | Tekstualna napomena | Ljepljiva bilješka koja se otvara na tekst |
| Pečat | Napomena pečata | Komentar pečata |

Svako se čuva sa:

- **vlastitim izgledom**, nacrtanim tačno kako ga MarkupCraft crta na ekranu, pa izgleda isto u svakom pregledaču i isto se štampa, uključujući značku s brojem stavke (punch);
- **autorom**, **datumima nastanka i izmjene**, **predmetom**, **tekstom komentara** (za tekstualne okvire i vodilice, tekst i komentar), **bojom** i **neprozirnošću**;
- **detaljima iz MarkupCraft-a** u privatnom unosu koji drugi programi ignorišu: status, stavka, stil i vrsta, da se ponovo otvori tačno.

## Niti i statusi

- Svaki odgovor se čuva kao komentar-odgovor povezan sa svojim označavanjem, s autorom, datumom i tekstom. Odgovori nemaju vlastitu ikonicu na listu.
- Svaka promjena statusa čuva se kao odgovor koji nosi stanje pregleda. Drugi alati za pregled prikazuju ga kao Prihvaćeno, Odbijeno ili Završeno; Otvoreno se čuva bez stanja.
- Označavanje sa statusom različitim od Otvoreno, a bez zabilježene promjene statusa, dobija jedan odgovor sa stanjem pregleda, pa i drugi programi vide status.
- Odgovori na komentare samo za čitanje iz originalne datoteke čuvaju se na isti način, povezani s tim komentarom.

## Svaki list

- **Razmjera:** kalibrirani list dobija prikaz za mjerenje koji pokriva stranicu (standardan način čuvanja razmjere stranice) i MarkupCraft-ovu vlastitu kopiju kalibracije.
- **Broj lista:** broj unesen pomoću {{ui:Preimenuj list}} postaje oznaka stranice. Kada bilo koja stranica datoteke ima oznaku, svaka stranica te datoteke dobija oznaku: uneseni broj, inače stara oznaka, inače broj stranice.
- **Naziv lista:** uneseni naziv čuva se samo za MarkupCraft; drugi pregledači ga ne prikazuju.

## Tekst i znakovi

Tekst se piše fontom Helvetica, koji ima svaki PDF pregledač. Slova izvan zapadnoevropskog skupa (Windows-1252) u kopiji se štampaju kao „?“; poruka o čuvanju ih broji.

## Proračunski listovi i obrazloženja

Proračunski listovi i obrazloženja čuvaju se u privatnom unosu PDF-a pod nazivom `/MarkupCraftShell`. Drugi PDF programi ga ignorišu. Stariji MarkupCraft ga takođe ignoriše i briše pri sljedećem čuvanju te datoteke.

## Šta se dešava s komentarima koji su već bili tu

Kada otvoriš PDF koji već ima komentare:

- MarkupCraft-ovi komentari se tačno ponovo čitaju. Ako ih je drugi program pomjerio ili promijenio veličinu, važi njegov novi položaj.
- Pravougaonici, elipse, linije, polilinije, poligoni, tinta, tekstualni okviri i ljepljive bilješke iz drugih programa postaju označavanja koja se mogu uređivati. **Pri čuvanju MarkupCraft uklanja originale i ponovo ih upisuje na svoj način**, s iskočnim prozorima i odgovorima. Njihov izgled se može malo promijeniti.
- Stanja pregleda iz drugih programa postavljaju status; važi najnovije.
- Sve ostalo (isticanja teksta, pečati drugih programa i posebne vrste) **ostaje netaknuto** u kopiji, samo za čitanje.
- Veze i polja obrazaca ostaju netaknuti i nisu nabrojani.

Ponovno čuvanje iste datoteke nikad ništa ne duplira: označavanja koja je MarkupCraft pročitao zamjenjuju se, ne dodaju ponovo.

## Šta se ne mijenja

Tvoja originalna datoteka na disku se nikad ne mijenja. Kopija nije optimizovana za veličinu, pa može biti nešto veća od originala. Zaštićeni (šifrovani) PDF-ovi se ne mogu sačuvati.

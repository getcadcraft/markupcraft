---
title: Šta se čuva u PDF-u
summary: Tačno šta sadrži kopija sa označavanjima, šta vide drugi PDF programi i šta se učitava kada ponovo otvorite datoteku.
keywords: pdf anotacije, komentari, sačuvani podaci, ponovno učitavanje, oznake stranica, merenje, stanje pregleda, odgovori, interoperabilnost, kompatibilnost, ponovno otvaranje, privatni podaci
from: 6439ad28
---

Kopija sa označavanjima je originalni PDF sa dodatim komentarima (PDF anotacijama). Sami listovi, njihovi crteži, tekst, obeleživači i veze kopiraju se onako kako su bili.

## Svako označavanje

| MarkupCraft | Sačuva se kao | Drugi PDF pregledači prikazuju |
|---|---|---|
| Pravougaonik, kutija-oblak | Kvadratna anotacija (oblak: oblačast obod) | Komentar pravougaonik ili oblak |
| Elipsa | Anotacija kruga | Komentar elipsa |
| Poligon, slobodan oblak | Anotacija poligona (oblak: oblačast obod) | Komentar poligon ili oblak |
| Polilinija | Anotacija polilinije (PolyLine) | Komentar polilinija |
| Linija, strelica | Anotacija linije (strelica: zatvoren vrh strelice) | Komentar linija ili strelica |
| Dužina | Anotacija linije označena kao kota, sa merenjem | Merenje dužine, gde pregledač podržava |
| Površina | Anotacija poligona označena kao površina, sa merenjem | Merenje površine, gde je podržano; inače poligon |
| Grupa brojanja | Jedna anotacija crtanja, prsten po stavci; njen tekst je „grupa: n“ | Komentar crtanja |
| Olovka, marker | Anotacija crtanja (marker označen kao takav) | Komentar crtanja |
| Tekst | Anotacija FreeText | Komentar tekstualni okvir |
| Pokazna napomena | Anotacija FreeText sa pokaznom linijom | Komentar pokazna napomena |
| Beleška | Tekstualna anotacija | Lepljiva beleška koja se otvara na svoj tekst |
| Žig | Anotacija žiga | Komentar žig |

Svako se čuva sa:

- **sopstvenim izgledom**, nacrtanim tačno kao što MarkupCraft crta na ekranu, pa izgleda isto u svakom pregledaču i isto se štampa, uključujući značku sa brojem punch stavke;
- **autorom**, **datumima kreiranja i izmene**, **predmetom**, **tekstom komentara** (za tekstualne okvire i pokazne napomene, tekst i komentar), **bojom** i **neprozirnošću**;
- **MarkupCraft podacima** u privatnom unosu koji drugi programi ignorišu: status, stavka punch, stil i tip, pa se ponovo otvara tačno kao ranije.

## Niti i statusi

- Svaki odgovor se čuva kao komentar-odgovor vezan za svoje označavanje, sa autorom, datumom i tekstom. Odgovori nemaju sopstvenu ikonu na listu.
- Svaka promena statusa se čuva kao odgovor koji nosi stanje pregleda. Drugi alati za pregled prikazuju ga kao Prihvaćeno, Odbijeno ili Završeno; Otvoreno se čuva bez stanja.
- Označavanje sa statusom različitim od Otvoreno, ali bez zabeležene promene statusa, dobija jedan odgovor sa stanjem pregleda, pa drugi programi vide i status.
- Odgovori na komentare samo za čitanje iz originalne datoteke čuvaju se na isti način, vezani za taj komentar.

## Svaki list

- **Razmera:** kalibrisani list dobija prozor merenja koji pokriva stranicu (standardan način čuvanja razmere) i MarkupCraft-ovu sopstvenu kopiju kalibracije.
- **Broj lista:** broj unet pomoću {{ui:Preimenuj list}} postaje oznaka stranice. Kada bilo koja stranica datoteke ima oznaku, svaka stranica te datoteke dobija oznaku: uneti broj, inače stara oznaka, inače redni broj stranice.
- **Naslov lista:** uneti naslov se čuva samo za MarkupCraft; drugi pregledači ga ne prikazuju.

## Tekst i znakovi

Tekst se piše fontom Helvetica, koji ima svaki PDF pregledač. Slova van zapadnoevropskog skupa (Windows-1252) štampaju se kao „?“ u kopiji; poruka o čuvanju ih broji.

## Obračunski listovi i razlozi

Obračunski listovi i razlozi čuvaju se u privatnom unosu PDF-a pod nazivom `/MarkupCraftShell`. Drugi PDF programi ga ignorišu. Stariji MarkupCraft ga takođe ignoriše i briše pri sledećem čuvanju te datoteke.

## Šta se dešava sa komentarima koji su već bili

Kada otvorite PDF koji već ima komentare:

- MarkupCraft-ovi komentari se učitavaju tačno. Ako ih je drugi program pomerio ili promenio veličinu, važi nova pozicija.
- Pravougaonici, elipse, linije, polilinije, poligoni, crtanja, tekstualni okviri i lepljive beleške iz drugih programa postaju izmenljiva označavanja. **Pri čuvanju MarkupCraft uklanja originale i ponovo ih upisuje na svoj način**, sa njihovim iskačućim prozorima i odgovorima. Njihov izgled se može malo promeniti.
- Stanja pregleda iz drugih programa postavljaju status; važi najnovije.
- Sve ostalo (isticanja teksta, žigovi drugih programa i posebne vrste) **ostaje netaknuto** u kopiji, samo za čitanje.
- Veze i polja obrasca ostaju netaknuta i nisu navedena.

Ponovno čuvanje iste datoteke nikada ništa ne udvostručuje: označavanja koja je MarkupCraft pročitao se zamenjuju, ne dodaju ponovo.

## Šta se ne menja

Vaša originalna datoteka na disku se nikada ne menja. Kopija nije optimizovana za veličinu, pa može biti nešto veća od originala. Zaštićeni (šifrovani) PDF-ovi ne mogu se sačuvati.

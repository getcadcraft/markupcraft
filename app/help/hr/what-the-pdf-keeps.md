---
title: Što je spremljeno u PDF-u
summary: Točno što sadrži označena kopija, što vide drugi PDF programi i što se čita natrag kad otvorite datoteku.
keywords: pdf anotacije, komentari, spremljeni podaci, povratni put, oznake stranica, mjerenje, status pregleda, odgovori, kompatibilnost, ponovno otvaranje, privatni podaci
from: 6439ad28
---

Označena kopija je izvorni PDF s dodanim komentarima (PDF anotacijama). Same stranice, njihovi crteži, tekst, oznake i poveznice kopiraju se kao što jesu.

## Svaki markup

| MarkupCraft | Spremljeno kao | Drugi PDF preglednici prikazuju |
|---|---|---|
| Pravokutnik, kutijasti oblak | Square annotation (oblak: rub u obliku oblaka) | Komentar s pravokutnikom ili oblakom |
| Elipsa | Circle annotation | Komentar s elipsom |
| Poligon, slobodni oblak | Polygon annotation (oblak: rub u obliku oblaka) | Komentar s poligonom ili oblakom |
| Polilinija | PolyLine annotation | Komentar s polilinijom |
| Linija, strelica | Line annotation (strelica: zatvoreni vrh strelice) | Komentar s linijom ili strelicom |
| Duljina | Line annotation označena kao dimenzija, s mjerenjem | Mjerenje duljine, gdje preglednik to podržava |
| Površina | Polygon annotation označen kao površina, s mjerenjem | Mjerenje površine, gdje je podržano; inače poligon |
| Grupa brojanja | Jedna ink annotation, prsten po stavci; njezin tekst je "group: n" | Komentar pisanja |
| Olovka, isticač | Ink annotation (isticač označen kao takav) | Komentar pisanja |
| Tekst | FreeText annotation | Komentar s okvirom teksta |
| Oblačić | FreeText annotation s vodilicom oblačića | Komentar oblačića |
| Bilješka | Text annotation | Ljepljiva bilješka koja se otvara s tekstom |
| Pečat | Stamp annotation | Komentar pečata |

Svaki se sprema s:

- **vlastitim izgledom**, nacrtanim točno kako ga MarkupCraft crta na zaslonu, pa izgleda isto u svakom pregledniku i isto se ispisuje, uključujući oznaku broja nedostatka;
- **autorom**, **datumima nastanka i izmjene**, **predmetom**, **tekstom komentara** (za okvire s tekstom i oblačiće, tekst i komentar), **bojom** i **neprozirnošću**;
- **pojedinostima o MarkupCraftu** u privatnom unosu koji drugi programi zanemaruju: status, stavka nedostatka, stil i vrsta, pa se točno ponovno otvara.

## Rasprave i statusi

- Svaki odgovor sprema se kao komentar-odgovor povezan s markupom, s autorom, datumom i tekstom. Odgovori na listu nemaju vlastitu ikonu.
- Svaka promjena statusa sprema se kao odgovor koji nosi stanje pregleda. Drugi alati za pregled prikazuju ga kao Accepted, Rejected ili Completed; Open se sprema bez stanja.
- Markup sa statusom različitim od Open, ali bez zabilježene promjene statusa, dobije jedan odgovor sa stanjem pregleda, tako da i drugi programi vide status.
- Odgovori na komentare samo za čitanje iz izvorne datoteke spremaju se na isti način, povezani s tim komentarom.

## Svaki list

- **Mjerilo:** kalibrirani list dobije mjerni viewport koji pokriva stranicu (uobičajen način pohrane mjerila stranice) i vlastitu kopiju kalibracije u MarkupCraftu.
- **Broj lista:** broj upisan pomoću {{ui:Preimenuj list}} postaje oznaka stranice. Kad bilo koja stranica datoteke ima oznaku, svaka stranica te datoteke dobije oznaku: upisani broj, inače njezinu staru oznaku, inače broj stranice.
- **Naslov lista:** upisani naslov sprema se samo za MarkupCraft; ostali preglednici ga ne prikazuju.

## Tekst i znakovi

Tekst se piše fontom Helvetica, koji ima svaki PDF preglednik. Slova izvan zapadnoeuropskog skupa (Windows-1252) u kopiji se ispisuju kao „?“; poruka o spremanju ih prebrojava.

## Proračunski listovi i razlozi

Proračunski listovi i razlozi čuvaju se u privatnom unosu PDF-a pod nazivom `/MarkupCraftShell`. Drugi PDF programi to zanemaruju. Stariji MarkupCraft također to zanemaruje i uklanja pri sljedećem spremanju te datoteke.

## Što se događa s komentarima koji su već postojali

Kad otvorite PDF koji već ima komentare:

- Komentari samog MarkupCrafta čitaju se točno natrag. Ako ih je drugi program pomaknuo ili promijenio im veličinu, vrijedi novi položaj.
- Pravokutnici, elipse, linije, polilinije, poligoni, pisanje, okviri s tekstom i ljepljive bilješke iz drugih programa postaju markupi koje se može uređivati. **Kad spremite, MarkupCraft uklanja izvorne komentare i ponovno ih zapisuje na svoj način**, s njihovim skočnim prozorima i odgovorima. Njihov izgled se može malo promijeniti.
- Stanja pregleda iz drugih programa postavljaju status; najnovije vrijedi.
- Sve ostalo (isticanja teksta, pečati drugih programa i posebne vrste) **ostaje netaknuto** u kopiji, samo za čitanje.
- Poveznice i polja obrazaca ostaju netaknuta i nisu navedena.

Ponovno spremanje iste datoteke nikad ništa ne udvostručuje: markupi koje je MarkupCraft pročitao zamjenjuju se, a ne ponovno dodaju.

## Što se ne mijenja

Vaša izvorna datoteka na disku nikad se ne mijenja. Kopija nije optimizirana po veličini pa može biti nešto veća od izvornika. Zaštićeni (šifrirani) PDF-ovi ne mogu se spremiti.

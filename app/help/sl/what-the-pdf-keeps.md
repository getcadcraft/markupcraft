---
title: Kaj se shrani v PDF
summary: Natančno, kaj vsebuje označena kopija, kaj vidijo drugi pregledovalniki PDF in kaj se ob odpiranju datoteke znova prebere.
keywords: pdf pripombe, komentarji, shranjeni podatki, povratno branje, oznake strani, meritev, stanje pregleda, odgovori, medsebojna združljivost, združljivost, ponovno odpiranje, zasebni podatki
from: 6439ad28
---

Označena kopija je izvirni PDF z dodanimi komentarji (PDF-pripombami). Sami listi, njihove risbe, besedilo, zaznamki in povezave se kopirajo tako, kot so bili.

## Vsaka označba

| MarkupCraft | Shranjeno kot | Drugi pregledovalniki PDF prikažejo |
|---|---|---|
| Pravokotnik, škatla z oblakom | Pripomba Square (oblak: oblačni rob) | Komentar pravokotnika ali oblaka |
| Elipsa | Pripomba Circle | Komentar elipse |
| Mnogokotnik, prosti oblak | Pripomba Polygon (oblak: oblačni rob) | Komentar mnogokotnika ali oblaka |
| Polilinija | Pripomba PolyLine | Komentar polilinije |
| Črta, puščica | Pripomba Line (puščica: zaprta konica) | Komentar črte ali puščice |
| Dolžina | Pripomba Line, označena kot kota, z meritvijo | Meritev dolžine, kjer pregledovalnik podpira meritve |
| Površina | Pripomba Polygon, označena kot površina, z meritvijo | Meritev površine, kjer je podprta; sicer mnogokotnik |
| Skupina štetja | Ena pripomba Ink, krog na vsak element; njeno besedilo je „skupina: n“ | Komentar Ink |
| Pero, markir | Pripomba Ink (markir je označen kot tak) | Komentar Ink |
| Besedilo | Pripomba FreeText | Komentar v besedilnem polju |
| Oblaček | Pripomba FreeText z vodilko oblačka | Komentar oblačka |
| Opomba | Pripomba Text | Lepljiva opomba, ki se odpre v besedilo |
| Žig | Pripomba Stamp | Komentar žiga |

Vsaka označba se shrani z:

- **lastnim videzom**, narisanim točno tako, kot ga MarkupCraft riše na zaslonu, zato je v vsakem pregledovalniku enak in se enako natisne, vključno z značko številke pomanjkljivosti;
- **avtorjem**, **datumoma nastanka in spremembe**, **zadevo**, **besedilom komentarja** (pri besedilnih poljih in oblačkih besedilo in komentar), **barvo** in **prosojnostjo**;
- **podatki MarkupCraft** v zasebnem vnosu, ki ga drugi programi prezrejo: stanje, pomanjkljivost, slog in vrsta, da se ponovno odpre točno tako.

## Niti in stanja

- Vsak odgovor se shrani kot odgovor na komentar, povezan z označbo, z avtorjem, datumom in besedilom. Odgovori na listu nimajo lastne ikone.
- Vsaka sprememba stanja se shrani kot odgovor z nosilnim stanjem pregleda. Drugi pregledovalniki ga prikažejo kot Sprejeto, Zavrnjeno ali Dokončano; Odprto se shrani brez stanja.
- Označba s stanjem, ki ni Odprto, a brez zabeležene spremembe stanja, dobi en odgovor s stanjem pregleda, da ga vidijo tudi drugi programi.
- Odgovori na komentarje samo za branje iz izvirne datoteke se shranijo na enak način, povezani s tem komentarjem.

## Vsak list

- **Merilo:** kalibriran list dobi meritveno okno, ki pokriva stran (običajen način shranjevanja merila strani), in lastno kopijo kalibracije MarkupCraft.
- **Številka lista:** številka, vpisana z {{ui:Preimenuj list}}, postane oznaka strani. Če ima katera koli stran datoteke oznako, jo dobi vsaka stran te datoteke: vpisana številka, sicer stara oznaka, sicer številka strani.
- **Naslov lista:** vpisani naslov se shrani samo za MarkupCraft; drugi pregledovalniki ga ne prikažejo.

## Besedilo in znaki

Besedilo je zapisano v pisavi Helvetica, ki jo ima vsak pregledovalnik PDF. Znaki zunaj zahodnoevropskega nabora (Windows-1252) se v kopiji natisnejo kot „?“; sporočilo ob shranjevanju jih prešteje.

## Izračunski listi in razlogi

Izračunski listi in razlogi se hranijo v zasebnem vnosu PDF z imenom `/MarkupCraftShell`. Drugi programi za PDF ga prezrejo. Starejši MarkupCraft ga prav tako prezre in ga ob naslednjem shranjevanju te datoteke izbriše.

## Kaj se zgodi s komentarji, ki so že bili

Ko odprete PDF, ki že ima komentarje:

- Komentarji MarkupCraft se preberejo točno. Če jih je drug program premaknil ali spremenil velikost, velja njihov novi položaj.
- Pravokotniki, elipse, črte, polilinije, mnogokotniki, črnilo, besedilna polja in lepljive opombe iz drugih programov postanejo urejljive označbe. **Ob shranjevanju MarkupCraft odstrani izvirnike in jih zapiše na novo po svoje**, z njihovimi pojavnimi okni in odgovori. Njihov videz se lahko nekoliko spremeni.
- Stanja pregleda iz drugih programov nastavijo stanje; zadnje velja.
- Vse drugo (označevanja besedila, markirji in posebne vrste drugih programov) se v kopiji **ohrani nedotaknjeno**, samo za branje.
- Povezave in polja obrazcev ostanejo nedotaknjeni in se ne navajajo.

Shranjevanje iste datoteke znova nikoli ničesar ne podvoji: označbe, ki jih je MarkupCraft prebral, se nadomestijo, ne dodajo znova.

## Kaj se ne spremeni

Vaša izvirna datoteka na disku se nikoli ne spremeni. Kopija ni optimizirana za velikost, zato je lahko nekoliko večja od izvirnika. Zaščitenih (šifriranih) PDF-jev ni mogoče shraniti.

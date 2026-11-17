---
title: Radi s više datoteka odjednom
summary: Otvori mnogo PDF-ova kao jedan set, pronađi listove u svim datotekama, kopiraj označavanja među njima i spasi kopiju svake datoteke.
keywords: više datoteka, više PDF-ova, set planova, set, serija, mnogo datoteka, kombinuj, discipline, arhitektonski, konstruktivni, mašinski, spasi sve, zatvori
from: f59354ae
---

Set planova često dolazi kao jedan PDF po disciplini ili jedan PDF po listu. MarkupCraft tretira sve što otvoriš kao **jedan set**.

## Otvori ih zajedno

Odaberi sve PDF-ove u biraču datoteka odjednom, ili ih prevuci na područje lista. Da dodaš još kasnije, otvori ih na isti način; pridružuju se na kraj spiska {{ui:Listovi}} redoslijedom kojim ih otvaraš.

Rezultat: "Otvoreno je 6 datoteka (84 lista u setu)." Svaka stranica je list. Listovi s brojem lista prikazuju "List A-101" ispod naziva; ostali prikazuju datoteku i stranicu.

Nema sačuvane datoteke seta: sljedeći put otvori iste PDF-ove ponovo (kopije "(marked up)", ako si spasio).

## Preko cijelog seta

- **Pronađi list:** {{ui:Pretraži listove}} traži u brojevima listova, nazivima listova i nazivima datoteka svih datoteka. {{key:PageUp}} i {{key:PageDown}} prolaze kroz sve listove svih datoteka redom.
- **Spisak označavanja:** kartica {{ui:Oznake}} navodi označavanja iz svih datoteka. Filtriraj po {{ui:List}} da je suziš. CSV ima kolonu Datoteka.
- **Lista nedostataka:** jedno numerisanje za cijeli set.
- **Poređenje:** stari i novi list mogu biti iz različitih datoteka.
- **Kopiranje i lijepljenje:** {{key:Mod+C}} na jednom listu i {{key:Mod+V}} na drugom, u bilo kojoj datoteci. Kopija ide na isto mjesto na stranici, malo pomjerena.

## Spasi

Izaberi {{ui:Spasi}}. Kad je otvoreno više od jedne datoteke, MarkupCraft pita:

- {{ui:Ova datoteka}}: kopija s označavanjima datoteke lista na kojem si.
- {{ui:Svaka izmijenjena datoteka}}: kopija svake datoteke s nespašenim promjenama. Svaka se preuzima zasebno, kao "<file name> (marked up).pdf".
- {{ui:Otkaži}}

:::chromium
Kad prvi put spašavaš više datoteka odjednom, Chrome i Edge mogu pitati smije li ovaj sajt preuzimati više datoteka. Izaberi {{ui:Dozvoli}}; inače stiže samo prva kopija.
:::

:::safari
Safari može pitati jednom za svaku datoteku. Na iPadu svaka kopija ide u aplikaciju Files.
:::

Datoteka čija su označavanja spašena prestaje se brojati kao izmijenjena; ostale se i dalje brojaju.

CSV, BCF i izvoz liste nedostataka dobijaju ime po **prvoj** datoteci koju si otvorio.

## Zatvaranje

{{ui:Zatvori}} zatvara cijeli set; još ne postoji način da se zatvori samo jedna datoteka. Ako nešto nije spašeno, pita:

- {{ui:Otkaži}}: ništa se ne dešava.
- {{ui:Zatvori bez snimanja}}: nespašena označavanja se gube.
- {{ui:Prvo spasi kopije}}: spašava svaku izmijenjenu datoteku, pa zatvara.

Zatvaranje također briše historiju poništavanja.

## Veliki setovi

- Tekst svake stranice se čita pri otvaranju da bi se pronašli brojevi listova, pa set od 100 listova traje neko vrijeme. Statusna traka broji listove dok ide.
- Slike listova na spisku se crtaju kad listaš do njih.
- Svaki otvoreni PDF drži se u memoriji kartice preglednika. Ako kartica uspori, zatvori druge teške kartice ili pregledaj jednu disciplinu odjednom.
- Ako otvoriš istu datoteku dva puta, dobijaš dvije kopije njenih listova. Tada izaberi {{ui:Zatvori}} i otvori set ponovo.

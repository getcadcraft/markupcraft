---
title: Rad sa više datoteka odjednom
summary: Otvorite mnogo PDF-ova kao jedan skup, pronalazite listove među datotekama, kopirajte označavanja između njih i sačuvajte kopiju svake datoteke.
keywords: više datoteka, više PDF-ova, skup planova, skup, grupno, mnogo datoteka, spajanje, discipline, arhitektonski, konstruktivni, mašinski, sačuvaj sve, zatvori
from: f59354ae
---

Skup planova često stiže kao jedan PDF po disciplini ili jedan PDF po listu. MarkupCraft sve što otvorite tretira kao **jedan skup**.

## Otvorite ih zajedno

Izaberite sve PDF-ove u biraču datoteka odjednom, ili ih prevucite na područje lista. Da dodate još kasnije, otvorite ih na isti način; pridružuju se na kraju spiska {{ui:Listovi}} redom kojim ih otvarate.

Rezultat: „Otvoreno je 6 datoteka (84 lista u skupu).“ Svaka stranica je list. Listovi sa brojem lista prikazuju „List A-101“ ispod imena; ostali prikazuju datoteku i stranicu.

Nema sačuvane datoteke „skupa“: sledeći put otvorite iste PDF-ove ponovo (kopije „(marked up)“, ako ste sačuvali).

## Kroz ceo skup

- **Nađi list:** {{ui:Pretraži listove}} traži u brojevima listova, nazivima listova i nazivima datoteka svih datoteka. {{key:PageUp}} i {{key:PageDown}} prolaze kroz sve listove svih datoteka redom.
- **Spisak označavanja:** kartica {{ui:Označavanja}} navodi označavanja iz svih datoteka. Filtrirajte po {{ui:List}} da biste je suzili. CSV ima kolonu File.
- **Lista za ispravke:** jedna numeracija za ceo skup.
- **Poređenje:** stari i novi list mogu biti iz različitih datoteka.
- **Kopiranje i lepljenje:** {{key:Mod+C}} na jednom listu i {{key:Mod+V}} na drugom, u bilo kojoj datoteci. Kopija se nalazi na istom mestu na stranici, malo pomerena.

## Čuvanje

Izaberite {{ui:Sačuvaj}}. Kada je otvoreno više od jedne datoteke, MarkupCraft pita:

- {{ui:Ova datoteka}}: kopija sa označavanjima datoteke lista na kojem ste.
- {{ui:Svaka izmenjena datoteka}}: kopija svake datoteke sa nesačuvanim izmenama. Svaka se preuzima posebno, kao „<ime datoteke> (marked up).pdf“.
- {{ui:Otkaži}}

:::chromium
Kada prvi put sačuvate više datoteka odjednom, Chrome i Edge mogu pitati da li ovaj sajt sme da preuzima više datoteka. Izaberite {{ui:Dozvoli}}; inače stiže samo prva kopija.
:::

:::safari
Safari može pitati jednom za svaku datoteku. Na iPad-u svaka kopija ide u aplikaciju Files.
:::

Datoteka čija su označavanja sačuvana prestaje da se računa kao izmenjena; ostale se i dalje računaju.

CSV, BCF i izvoz liste za ispravke dobijaju ime po **prvoj** datoteci koju ste otvorili.

## Zatvaranje

{{ui:Zatvori}} zatvara ceo skup; još nema načina da zatvorite samo jednu datoteku. Ako nešto nije sačuvano, pita:

- {{ui:Otkaži}}: ništa se ne dešava.
- {{ui:Zatvori bez čuvanja}}: nesačuvana označavanja se gube.
- {{ui:Prvo sačuvaj kopije}}: čuva svaku izmenjenu datoteku, pa zatvara.

Zatvaranje takođe briše istoriju opozivanja.

## Veliki skupovi

- Tekst svake stranice se čita pri otvaranju da bi se našli brojevi listova, pa skup od 100 listova traje neko vreme. Statusna traka broji listove dok ide.
- Slike listova u spisku se crtaju kako se pomerate do njih.
- Svaki otvoreni PDF se čuva u memoriji taba pregledača. Ako tab uspori, zatvorite druge teške tabove ili pregledajte jednu disciplinu po jednu.
- Otvaranje iste datoteke dvaput daje dve kopije njenih listova. Ako se to desi, izaberite {{ui:Zatvori}} i ponovo otvorite skup.

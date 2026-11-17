---
title: Rad s više datoteka odjednom
summary: Otvorite mnogo PDF-ova kao jedan skup, pronađite listove u svim datotekama, kopirajte oznake među njima i spremite kopiju svake datoteke.
keywords: više datoteka, više PDF-ova, skup planova, skup, grupno, mnogo datoteka, kombiniranje, discipline, arhitektonski, konstruktivni, strojarski, spremi sve, zatvori
from: f59354ae
---

Skup planova često dolazi kao jedan PDF po disciplini ili jedan PDF po listu. MarkupCraft sve što otvorite tretira kao **jedan skup**.

## Otvorite ih zajedno

Odaberite sve PDF-ove u biraču datoteka odjednom ili ih povucite na područje lista. Za dodavanje kasnije otvorite ih na isti način; pridružuju se na kraj popisa {{ui:Listovi}} redom kojim ih otvorite.

Rezultat: „Otvoreno datoteka: 6 (listova u skupu: 84).” Svaka stranica je list. Listovi s brojem lista prikazuju „List A-101” ispod svog naziva; ostali prikazuju datoteku i stranicu.

Nema spremljene datoteke „skupa”: sljedeći put ponovno otvorite iste PDF-ove (kopije „(marked up)”, ako ste spremali).

## Kroz cijeli skup

- **Pronalaženje lista:** {{ui:Traži listove}} traži u brojevima listova, nazivima listova i nazivima datoteka svih datoteka. {{key:PageUp}} i {{key:PageDown}} prolaze kroz sve listove svih datoteka redom.
- **Popis oznaka:** kartica {{ui:Oznake}} navodi oznake iz svih datoteka. Filtrirajte po {{ui:List}} da ga suzite. CSV ima stupac File.
- **Popis nedostataka:** jedno numeriranje za cijeli skup.
- **Usporedba:** stari i novi list mogu biti iz različitih datoteka.
- **Kopiranje i lijepljenje:** {{key:Mod+C}} na jednom listu i {{key:Mod+V}} na drugom, u bilo kojoj datoteci. Kopija ide na isto mjesto na stranici, malo pomaknuta.

## Spremanje

Odaberite {{ui:Spremi}}. S više otvorenih datoteka MarkupCraft pita:

- {{ui:Ova datoteka}}: označena kopija datoteke lista na kojem se nalazite.
- {{ui:Svaka izmijenjena datoteka}}: kopija svake datoteke koja ima nespremljene promjene. Svaka se preuzima zasebno, kao „<naziv datoteke> (marked up).pdf”.
- {{ui:Odustani}}

:::chromium
Prvi put kad spremite nekoliko datoteka odjednom, Chrome i Edge mogu pitati smije li ova stranica preuzeti više datoteka. Odaberite {{ui:Dopusti}}; inače stiže samo prva kopija.
:::

:::safari
Safari može pitati jednom za svaku datoteku. Na iPadu svaka kopija ide u aplikaciju Files.
:::

Datoteka čije su oznake spremljene prestaje se računati kao izmijenjena; ostale se i dalje računaju.

Izvozi CSV, BCF i popisa nedostataka nazivaju se po **prvoj** datoteci koju ste otvorili.

## Zatvaranje

{{ui:Zatvori}} zatvara cijeli skup; još nema načina da zatvorite samo jednu datoteku. Ako nešto nije spremljeno, pita:

- {{ui:Odustani}}: ništa se ne događa.
- {{ui:Zatvori bez spremanja}}: nespremljene oznake se gube.
- {{ui:Prvo spremi kopije}}: sprema svaku izmijenjenu datoteku, zatim zatvara.

Zatvaranje također briše povijest poništavanja.

## Veliki skupovi

- Tekst svake stranice čita se pri otvaranju da bi se pronašli brojevi listova, pa skup od 100 listova traje. Statusna traka broji listove dok ide.
- Slike listova u popisu crtaju se dok se pomičete do njih.
- Svaki otvoreni PDF drži se u memoriji kartice preglednika. Ako kartica uspori, zatvorite druge teške kartice ili pregledavajte jednu disciplinu odjednom.
- Ako otvorite istu datoteku dvaput, dobit ćete dvije kopije njezinih listova. Tada odaberite {{ui:Zatvori}} i ponovno otvorite skup.

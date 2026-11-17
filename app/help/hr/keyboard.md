---
title: Tipkovnica i miš
summary: Svaka tipka, radnja mišem i dodirna gesta koju MarkupCraft razumije, grupirano, uz prečace koje zadržava preglednik.
keywords: tipkovnica, prečaci, tipkovni prečaci, tipke, miš, kotačić, desni klik, srednja tipka, trackpad, dodir, geste, stiskanje, pomicanje razmakom
from: 7bf207ec
---

Prečaci napisani s {{key:Mod}} rade bilo s ⌘ ili Control na Macu, a s Ctrl na Windowsu i Linuxu. Slova za alate rade samo kad ne upisujete u okvir; dok pišete, slova su samo slova. Vidi i [Tipke, miševi i trackpadovi](common:keys).

## Alati

| Tipka | Alat |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Content}}: vlastite linije, slike i tekst stranice (vidi [Promjena vlastitog sadržaja stranice](topic:page-content)) |
| {{key:P}} | {{ui:Pen}} |
| {{key:I}} | {{ui:Highlight}} |
| {{key:L}} | {{ui:Line}} |
| {{key:A}} | {{ui:Arrow}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polyline}} |
| {{key:G}} | {{ui:Polygon}} |
| {{key:C}} | {{ui:Cloud}} (povucite okvir) |
| {{key:Shift+C}} | {{ui:Free cloud}} |
| {{key:K}} | {{ui:Callout}} |
| {{key:T}} | {{ui:Text}} |
| {{key:N}} | {{ui:Note}} |
| {{key:S}} | {{ui:Stamp}} |
| {{key:M}} | {{ui:Length}} |
| {{key:Q}} | {{ui:Area}} |
| {{key:U}} | {{ui:Count}} |
| {{key:O}} | {{ui:Arc}} |
| {{key:X}} | {{ui:Angle}} |

{{ui:Calibrate}} nema tipku: upotrijebite njegov gumb na alatnoj traci ili gumb mjerila u statusnoj traci. Slova za alate zanemaruju se dok je pritisnuta {{key:Alt}}.

## Dok crtate

| Tipka ili radnja | Što radi |
|---|---|
| {{key:Shift}} dok crtate | Linije, strelice, duljine i stranice polilinije pod koracima od 45°; pravokutnici, elipse i okviri oblaka kvadratni; olovka i isticanje jedna ravna crta |
| Dvostruki klik, {{key:Enter}} ili desni klik | Završava poliliniju, poligon, slobodni oblak ili površinu |
| {{key:Backspace}} | Uklanja zadnju točku polilinije, poligona, slobodnog oblaka ili površine |
| {{key:Esc}} | Otkazuje ono što crtate; kad ništa nije u tijeku, poništava odabir; kad ništa nije odabrano, vraća na {{ui:Select}} |
| {{key:Mod+Enter}} | Završava upisivanje u tekstni okvir, oblačić ili bilješku (ili klik izvan njih) |
| {{key:Esc}} dok upisujete | Otkazuje tekst koji ste upisivali |
| {{key:Shift}}-klik s {{ui:Count}} | Uklanja najbližu točku odabrane grupe brojanja |

## Odabir i uređivanje

| Tipka ili radnja | Što radi |
|---|---|
| Klik | Odabire oznaku |
| {{key:Shift}}-klik | Dodaje ili uklanja oznaku iz odabira |
| Povlačenje s lijeva na desno po praznom listu | Odabire ono što je u potpunosti unutar prozora |
| Povlačenje s desna na lijevo po praznom listu | Odabire ono čega se prozor dotiče |
| {{key:Mod+A}} | Odabire svaku oznaku na ovom listu |
| Povlačenje odabrane oznake | Pomiče je ({{key:Shift}}: duž koraka od 45°) |
| Povlačenje ručke | Mijenja veličinu ili oblik ({{key:Shift}}: zadržava omjere ili 45°) |
| Strelice | Pomiču odabir za jedan piksel zaslona ({{key:Shift}}: deset) |
| Dvostruki klik ili {{key:Enter}} | Uređuje tekst tekstnog okvira, oblačića ili bilješke; za pečat otvara {{ui:Properties}} |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabir |
| {{key:Esc}} | Ne odabire ništa |
| {{key:Mod+Z}} | Poništi |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |

## Izreži, kopiraj i zalijepi

Iste naredbe nalaze se u grupi {{ui:Edit}} na alatnoj traci ({{ui:Copy}}, {{ui:Paste}}) i u njenom izborniku {{ui:More}}, svaka sa svojom tipkom. Svaka je jedan korak poništavanja. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:select-and-edit#copy-paste-and-duplicate).

| Tipka | Što radi |
|---|---|
| {{key:Mod+X}} | Izreži: kopira odabir i briše ga |
| {{key:Mod+C}} | Kopira odabir |
| {{key:Mod+V}} | Zalijepi. Ako je pokazivač na listu, kopija se stavlja središnje na mjesto na koje pokazuje; inače pored izvornika. Postavke mogu uvijek zalijepiti pored izvornika. |
| {{key:Mod+Shift+V}} | Zalijepi na isto mjesto: isto mjesto na listu, na ovom ili drugom listu |
| {{key:Mod+D}} | Duplicira odabir pored njega (međuspremnik ostaje netaknut) |

## Pomoć

| Tipka | Što radi |
|---|---|
| {{key:F1}} | Otvara ili zatvara ovu pomoć (ploča sa strane; list ostaje upotrebljiv). Također {{ui:Help}} na traci na vrhu. |
| {{key:Esc}} u pomoći | Zatvara pomoć |

:::mac
Na većini Mac tipkovnica pritisnite {{key:F1}} uz **fn** (ili tipku globus) ili upotrijebite {{ui:Help}}. Vidi [Tipke, miševi i trackpadovi](common:keys#function-keys-on-a-mac).
:::

## Datoteke i listovi

| Tipka | Što radi |
|---|---|
| {{key:Mod+N}} | Nove prazne stranice (kad preglednik dopusti stranici tu tipku; vidi [Početak s praznim stranicama](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Otvara PDF-ove |
| {{key:Mod+P}} | Ispis (vidi [Ispis i promjena stranica](topic:pages-and-printing)) |
| {{key:Mod+F}} | Traži tekst u crtežima (vidi [Traženje teksta](topic:find-text)) |
| {{key:Mod}}+klik na povezanu oznaku | Slijedi poveznicu na njen list; {{key:Alt+Left}} vraća natrag (vidi [Poveznice na listove](topic:sheet-links)) |
| {{key:Mod+S}} | Sprema kopiju s oznakama |
| {{key:PageDown}} / {{key:PageUp}} | Sljedeći / prethodni list |
| {{key:Enter}} u {{ui:Search sheets}} | Otvara prvi list koji odgovara |
| {{key:Mod+Enter}} u {{ui:Write a reply}} | Šalje odgovor |

## Zumiranje i pomicanje

| Tipka ili radnja | Što radi |
|---|---|
| Kotačić miša | Zumira prema unutra ili van oko pokazivača (kotačić nikad ne pomiče) |
| {{key:Ctrl}} + kotačić | Zumira brže |
| {{key:Plus}} ili {{key:Minus}} (također s {{key:Mod}}) | Zumira prema unutra ili van oko sredine; {{key:=}} radi kao plus |
| {{key:Mod+0}} | {{ui:Fit page}} |
| {{key:Mod+9}} | {{ui:Fit width}} |
| Povlačenje srednjom tipkom | Pomicanje |
| Povlačenje desnom tipkom | Pomicanje (kad niste usred polilinije) |
| Držite {{key:Space}} i povlačite | Pomicanje |
| Strelice bez odabira | Pomicanje |
| {{key:Ctrl+Shift+F}} | Način zaslona: normalan, cijeli zaslon, cijeli zaslon sa skrivenim trakama (tipka Control na svakom računalu) |

:::mac
**Na trackpadu:** pomicanje dvama prstima zumira. Stiskanje prstiju (pinch) također zumira u Chromeu, Edgeu i Firefoxu. Pomičite s držanim {{key:Space}} dok povlačite ili alatom {{ui:Pan}}. Klik dvama prstima je desni klik i završava poliliniju. Control-klik ovdje može djelovati kao običan klik, a ne kao desni, zato upotrijebite klik dvama prstima.
:::

:::touch
## Dodir

| Gesta | Što radi |
|---|---|
| Jedan prst | Crta trenutačnim alatom ili odabire |
| Dva prsta | Stisnite za zumiranje oko njihove sredine, pomaknite za pomicanje |
| Drugi prst tijekom poteza | Otkazuje potez i umjesto toga zumira |
| Dvostruki dodir | Završava poliliniju, poligon, slobodni oblak ili površinu |

Točke brojanja, bilješke, točke polilinije i druga točka alata s dvije točke postavljaju se kad se prst podigne. Vidi [Pregled na iPadu ili ekranu osjetljivom na dodir](topic:review-on-a-tablet).
:::

## Prečaci koje zadržava preglednik

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} i {{key:Mod+Q}} pripadaju pregledniku. Zatvaranje kartice ili prozora s nespremljenim oznakama gubi ih, nakon pitanja preglednika „Napustiti stranicu?“ na računalu.
- Većina preglednika zadržava {{key:Mod+N}} za novi prozor, pa u kartici preglednika upotrijebite {{ui:New}} na alatnoj traci; desktop aplikacija i Studio prosljeđuju tipku MarkupCraftu.
- MarkupCraft uzima {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} i {{key:Mod+Minus}} od preglednika dok aplikacija ima tipkovnicu, a {{key:Mod+C}} i {{key:Mod+X}} dok su oznake odabrane. {{key:Mod+,}} otvara {{ui:Settings}}. Za zumiranje cijele stranice u pregledniku upotrijebite izbornik preglednika.
- {{key:Mod+9}} u nekim preglednicima skoči na zadnju karticu preglednika prije nego što je MarkupCraft vidi. Ako se to dogodi, upotrijebite {{ui:Fit width}} ispod lista.
- {{key:Esc}} u cijelom zaslonu također izlazi iz cijelog zaslona.

## Kad tipka ne radi

- **Upisujete u okvir.** Najprije kliknite na list. (Klik alatom za crtanje nešto nacrta; nakon toga pritisnite {{key:Esc}} ili upotrijebite {{key:Mod+Z}}.)
- **Otvoren je dijaloški okvir.** Tipke idu u dijaloški okvir dok se ne zatvori.
- **Upravo ste kliknuli gumb na alatnoj traci**, pa strelice ili {{key:Space}} djeluju na taj gumb. Pomaknite pokazivač na list i upotrijebite kotačić ili srednju tipku ili pritisnite slovo alata umjesto klika na gumbe.

## Gdje je Pomakni

Nema naredbe Pomakni: odaberite oznaku i povucite je ({{key:Shift}} zadržava korake od 45°). Pribadača se pomiče s {{ui:Move pin}}, a stranica s {{ui:Move page earlier}} ili {{ui:Move page later}}.

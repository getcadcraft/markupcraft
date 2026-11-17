---
title: Označi list
summary: Crtaj revizione oblake, izvučene oznake, tekstualna polja, strelice, oblike, poteze olovkom i isticanja, i postavi im boju i liniju prije ili poslije crtanja.
keywords: označavanje, crvene ispravke, oblak, revizioni oblak, izvučena oznaka, vodilica, tekstualno polje, strelica, linija, pravougaonik, elipsa, krug, polilinija, poligon, olovka, slobodna ruka, tinta, isticač, boja, debljina linije
from: 9d6de0ac
---

Svaki alat radi isto: odaberi ga, crtaj na listu, i nova oznaka se odabere da je možeš vidjeti u {{ui:Svojstva}}. Alat ostaje uključen za sljedeću oznaku. Statusna traka uvijek kaže šta alat očekuje sljedeće.

:::touch
Na ekranu osjetljivom na dodir koristi jedan prst za crtanje. Drugi prst otkazuje ono što je započeo prvi i umjesto toga štipa ili pomjera, tako da nikada slučajno ne ostaviš trag dok zumiraš. Više u [Pregled na iPad-u ili ekranu osjetljivom na dodir](topic:review-on-a-tablet).
:::

## Revizioni oblaci

**Oblak okvirom:** odaberi {{ui:Oblak}} ({{key:C}}) i prevuci okvir. Drži {{key:Shift}} da bude kvadrat.

**Slobodni oblak** oko nepravilnog oblika:

1. Odaberi {{ui:Slobodni oblak}} ({{key:Shift+C}}).
2. Klikni na svaki ugao područja.
3. Završi dvostrukim klikom, {{key:Enter}} ili desnim klikom. Na dodiru dvaput dodirni.

Dok klikćeš tačke, {{key:Backspace}} uklanja zadnju tačku, a {{key:Esc}} otkazuje cijeli oblik. Drži {{key:Shift}} da sljedeća strana bude višekratnik od 45°. Slobodni oblak treba najmanje tri tačke.

Ispupčenja uvijek idu prema van, a njihova veličina prati debljinu linije: deblja linija daje veća ispupčenja.

## Izvučene oznake

Izvučena oznaka je tekstualno polje s vodilicom koja pokazuje na nešto.

1. Odaberi {{ui:Izvučena oznaka}} ({{key:K}}).
2. Pritisni na tačku koju želiš označiti i prevuci tamo gdje treba da ide tekst. Pusti.
   Ako samo klikneš bez prevlačenja, polje se postavlja gore i desno od tačke.
3. Upiši tekst. Polje raste nadole kako se redovi prelamaju.
4. Klikni bilo gdje van polja ili pritisni {{key:Mod+Enter}} da završiš. {{key:Esc}} odbacuje izvučenu oznaku.

Ako završiš bez ikakvog upisa, izvučena oznaka se ne dodaje („Ništa nije upisano, pa izvučena oznaka nije dodata.”).

Poslije crtanja odaberi je da pomjeriš polje, povučeš vrh vodilice ili njen prijelom (dvije romboidne ručice), ili promijeniš veličinu polja.

## Tekstualna polja

1. Odaberi {{ui:Tekst}} ({{key:T}}).
2. Klikni gdje tekst počinje (dobiješ polje razumne širine), ili prevuci okvir željene veličine.
3. Upiši, zatim klikni van ili pritisni {{key:Mod+Enter}}.

Tekst nema ivicu podrazumijevano. Da je dobije, povećaj {{ui:Debljina linije}} u {{ui:Svojstva}}. Da dobije pozadinu, označi {{ui:Ispuna}}.

Da promijeniš riječi kasnije: s uključenim {{ui:Odaberi}} dvaput klikni na tekst, ili ga odaberi i pritisni {{key:Enter}}, ili odaberi {{ui:Uredi na listu}} u {{ui:Svojstva}}. Možeš ga urediti i u polju {{ui:Tekst}} u {{ui:Svojstva}}.

## Strelice i linije

1. Odaberi {{ui:Strelica}} ({{key:A}}) ili {{ui:Linija}} ({{key:L}}).
2. Prevuci od početka do kraja. Ili klikni početak, pusti, pa klikni kraj.
3. Drži {{key:Shift}} da ostane višekratnik od 45°.

Vrh strelice je na kraju gdje si završio.

## Pravougaonici, elipse, polilinije i poligoni

- {{ui:Pravougaonik}} ({{key:R}}) i {{ui:Elipsa}} ({{key:E}}): prevuci okvir. {{key:Shift}} pravi kvadrat ili krug. Klik bez prevlačenja ne crta ništa, a statusna traka traži da prevučeš.
- {{ui:Polilinija}} ({{key:Y}}) i {{ui:Poligon}} ({{key:G}}): klikni tačke; završi dvostrukim klikom, {{key:Enter}} ili desnim klikom (dvostruki dodir na ekranu osjetljivom na dodir). {{key:Backspace}} uklanja zadnju tačku. Poligon se sam zatvara i treba tri tačke; polilinija treba dvije.

## Olovka i isticač

- {{ui:Olovka}} ({{key:P}}): prevuci za slobodno crtanje. Potez se malo izglađuje kada pustiš.
- {{ui:Isticanje}} ({{key:I}}): isto, sa širokim, prozirnim žutim potezom koji boji crtež ispod umjesto da ga prekrije.
- Drži {{key:Shift}} dok crtaš da dobiješ jedan ravan potez od mjesta gdje si počeo.

Isticač je potez slobodnom rukom. Ne hvata se za tekst u PDF-u.

## Boja, linija i ispuna

Na dva načina:

- **Prije crtanja:** odaberi alat. Kada ništa nije odabrano, {{ui:Svojstva}} prikazuje postavke alata „<alat>”: {{ui:Boja}}, {{ui:Debljina linije}} (u pt), {{ui:Ispuna}} i {{ui:Neprozirnost ispune}} za zatvorene oblike, {{ui:Neprozirnost}}, i {{ui:Veličina teksta}} za tekst. Svaka nova oznaka te vrste koristi njih, a MarkupCraft ih pamti u ovom pregledaču.
- **Poslije crtanja:** odaberi jednu ili više oznaka i promijeni iste kontrole pod „Stil”. Kada je odabrano više oznaka, promjena se primjenjuje na sve u jednom koraku.

Podrazumijevano: crvene oznake, žuti isticač, plava mjerenja, narandžasti brojevi, a pečati obojeni prema značenju. Sačuvane izglede koje koristiš svaki dan čuvaj u sanduku s alatima: vidi [Sanduk s alatima](topic:tool-chest).

## Predmet i komentar

Svaka oznaka ima i {{ui:Tema}} (kratku oznaku, na primjer „Oblak” ili „RFI”, prikazanu na listi oznaka i u drugim PDF pregledačima) i {{ui:Komentar}} (duže bilješke). Popuni ih u {{ui:Svojstva}}. Za razgovor o oznaci koristi odgovore: vidi [Statusi i odgovori](topic:statuses-and-replies).

## Dalje

- [Odaberi, pomjeri i mijenjaj oznake](topic:select-and-edit)
- [Pečati i bilješke](topic:stamps-and-notes)
- [Svaka vrsta oznake](topic:markup-types)

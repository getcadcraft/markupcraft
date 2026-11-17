---
title: Označavanje lista
summary: Crtajte revizione oblake, pokazne oznake, polja za tekst, strelice, oblike, poteze olovkom i isticanja, i podesite njihovu boju i liniju pre ili posle crtanja.
keywords: označavanje, crvena linija, oblak, revizioni oblak, pokazna oznaka, vodilica, polje za tekst, strelica, linija, pravougaonik, elipsa, krug, polilinija, poligon, olovka, slobodna ruka, mastilo, isticač, boja, debljina linije
from: 9d6de0ac
---

Svaki alat radi isto: izaberite ga, nacrtajte na listu, i novo označavanje se bira da biste ga videli u {{ui:Properties}}. Alat ostaje uključen za sledeće. Statusna traka uvek kaže šta alat očekuje sledeće.

:::touch
Na ekranu osetljivom na dodir koristite jedan prst za crtanje. Drugi prst otkazuje ono što je započeo prvi i umesto toga štipa ili pomera pogled, pa nikada slučajno ne ostavite trag dok zumirate. Više u [Pregled na iPad-u ili ekranu osetljivom na dodir](topic:review-on-a-tablet).
:::

## Revizioni oblaci

**Okvir oblaka:** izaberite {{ui:Cloud}} ({{key:C}}) i prevucite okvir. Držite {{key:Shift}} da bi bio kvadrat.

**Slobodni oblak** oko nepravilnog oblika:

1. Izaberite {{ui:Free cloud}} ({{key:Shift+C}}).
2. Kliknite svaki ugao oblasti.
3. Završite dvostrukim klikom, {{key:Enter}} ili desnim klikom. Na dodirnom ekranu, dvostrukim dodirom.

Dok klikćete tačke, {{key:Backspace}} uklanja poslednju tačku, a {{key:Esc}} otkazuje ceo oblik. Držite {{key:Shift}} da sledeća stranica ostane na umnošku od 45°. Slobodni oblak treba najmanje tri tačke.

Talasi uvek ispupčuju prema spolja, a njihova veličina prati debljinu linije: deblja linija daje veće lukove.

## Pokazne oznake

Pokazna oznaka je polje za tekst sa vodilicom koja pokazuje na nešto.

1. Izaberite {{ui:Callout}} ({{key:K}}).
2. Pritisnite na tačku koju želite da označite i prevucite do mesta gde treba da bude tekst. Otpustite.
   Ako samo kliknete bez prevlačenja, polje se postavlja gore i desno od tačke.
3. Ukucajte tekst. Polje raste nadole kako se redovi prelamaju.
4. Kliknite bilo gde van polja, ili pritisnite {{key:Mod+Enter}}, da završite. {{key:Esc}} odbacuje pokaznu oznaku.

Ako završite bez kucanja, pokazna oznaka se ne dodaje („Ništa nije ukucano, pa pokazna oznaka nije dodata.“).

Posle crtanja izaberite je da biste pomerili polje, prevukli vrh vodilice ili njen prelom (dve ručice u obliku romba), ili promenili veličinu polja.

## Polja za tekst

1. Izaberite {{ui:Text}} ({{key:T}}).
2. Kliknite gde tekst počinje (dobijate polje razumne širine), ili prevucite polje željene veličine.
3. Ukucajte, pa kliknite van ili pritisnite {{key:Mod+Enter}}.

Tekst nema ivicu podrazumevano. Da biste mu je dali, povećajte {{ui:Line width}} u {{ui:Properties}}. Da biste mu dali pozadinu, označite {{ui:Fill}}.

Da kasnije promenite reči: uz uključen {{ui:Select}}, dvostruko kliknite tekst, ili ga izaberite i pritisnite {{key:Enter}}, ili izaberite {{ui:Edit on the sheet}} u {{ui:Properties}}. Takođe možete da ga menjate u polju {{ui:Text}} u {{ui:Properties}}.

## Strelice i linije

1. Izaberite {{ui:Arrow}} ({{key:A}}) ili {{ui:Line}} ({{key:L}}).
2. Prevucite od početka do kraja. Ili kliknite početak, otpustite, pa kliknite kraj.
3. Držite {{key:Shift}} da ostane na umnošku od 45°.

Vrh strelice je na kraju na kojem ste završili.

## Pravougaonici, elipse, polilinije i poligoni

- {{ui:Rectangle}} ({{key:R}}) i {{ui:Ellipse}} ({{key:E}}): prevucite okvir. {{key:Shift}} pravi kvadrat ili krug. Klik bez prevlačenja ne crta ništa, a statusna traka traži da prevučete.
- {{ui:Polyline}} ({{key:Y}}) i {{ui:Polygon}} ({{key:G}}): kliknite tačke; završite dvostrukim klikom, {{key:Enter}} ili desnim klikom (dvostrukim dodirom na dodirnom ekranu). {{key:Backspace}} uklanja poslednju tačku. Poligon se sam zatvara i treba mu tri tačke; polilinija treba dve.

## Olovka i isticač

- {{ui:Pen}} ({{key:P}}): prevucite za crtanje slobodnom rukom. Potez se malo izgladi kada otpustite.
- {{ui:Highlight}} ({{key:I}}): isto, ali sa širokim, providnim žutim potezom koji boji crtež ispod umesto da ga prekriva.
- Držite {{key:Shift}} dok crtate da dobijete jednu pravu liniju od mesta gde ste počeli.

Isticač je potez slobodnom rukom. Ne prianja uz tekst u PDF-u.

## Boja, linija i ispuna

Na dva načina:

- **Pre crtanja:** izaberite alat. Kada ništa nije izabrano, {{ui:Properties}} prikazuje podešavanja „<alat> alat“: {{ui:Color}}, {{ui:Line width}} (u tačkama), {{ui:Fill}} i {{ui:Fill opacity}} za zatvorene oblike, {{ui:Opacity}}, i {{ui:Text size}} za tekst. Svako novo označavanje te vrste koristi ih, a MarkupCraft ih pamti u ovom pregledaču.
- **Posle crtanja:** izaberite jedno ili više označavanja i promenite iste kontrole pod „Stil“. Kada je izabrano više, promena važi za sve u jednom koraku.

Podrazumevano: crvena označavanja, žuti isticač, plava merenja, narandžasti brojevi, a pečati obojeni prema značenju.

Sačuvani izgledi koje svakodnevno koristite pripadaju [Kutiji sa alatima](topic:tool-chest).

## Tema i komentar

Svako označavanje ima i {{ui:Subject}} (kratku oznaku, na primer „Oblak“ ili „RFI“, koja se prikazuje na listi označavanja i u drugim PDF pregledačima) i {{ui:Comment}} (duže beleške). Popunite ih u {{ui:Properties}}. Za razgovor o označavanju koristite odgovore: pogledajte [Statusi i odgovori](topic:statuses-and-replies).

## Dalje

- [Biranje, pomeranje i menjanje označavanja](topic:select-and-edit)
- [Pečati i beleške](topic:stamps-and-notes)
- [Svaka vrsta označavanja](topic:markup-types)

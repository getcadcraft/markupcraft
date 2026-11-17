---
title: Označavanje lista
summary: Crtajte oblake revizije, oblačiće, tekstne okvire, strelice, oblike, poteze olovkom i isticanja te postavite njihovu boju i liniju prije ili poslije.
keywords: označavanje, markup, crvena olovka, oblak revizije, oblačić, vodilica, tekstni okvir, strelica, linija, pravokutnik, elipsa, kružnica, polilinija, poligon, olovka, slobodna ruka, tinta, isticanje, boja, debljina linije
from: 9d6de0ac
---

Svaki alat radi jednako: odaberete ga, nacrtate na listu, a nova oznaka se odabire pa je vidite u {{ui:Properties}}. Alat ostaje uključen za sljedeću. Statusna traka uvijek kaže što alat očekuje dalje.

:::touch
Na ekranu osjetljivom na dodir crtajte jednim prstom. Drugi prst otkazuje ono što je započeo prvi i umjesto toga stišće ili pomiče, pa nikad ne ostavite trag slučajno dok zumirate. Više u [Pregled na iPadu ili ekranu osjetljivom na dodir](topic:review-on-a-tablet).
:::

## Oblaci revizije

**Okvir oblaka:** odaberite {{ui:Cloud}} ({{key:C}}) i povucite okvir. Držite {{key:Shift}} da bude kvadratan.

**Slobodni oblak** oko nepravilnog oblika:

1. Odaberite {{ui:Free cloud}} ({{key:Shift+C}}).
2. Kliknite svaki kut područja.
3. Završite dvostrukim klikom, {{key:Enter}} ili desnim klikom. Na dodiru dvostruki dodir.

Dok klikate točke, {{key:Backspace}} uklanja zadnju točku, a {{key:Esc}} otkazuje cijeli oblik. Držite {{key:Shift}} da sljedeća stranica bude pod kutom koji je višekratnik od 45°. Slobodni oblak treba najmanje tri točke.

Lukovi uvijek izbočuju prema van, a njihova veličina prati debljinu linije: deblja linija daje veće lukove.

## Oblačići

Oblačić je tekstni okvir s vodilicom koja pokazuje na nešto.

1. Odaberite {{ui:Callout}} ({{key:K}}).
2. Pritisnite na točku koju želite označiti i povucite do mjesta gdje treba biti tekst. Pustite.
   Ako samo kliknete bez povlačenja, okvir se postavlja gore i desno od točke.
3. Upišite tekst. Okvir raste prema dolje kako se redovi prelamaju.
4. Kliknite bilo gdje izvan okvira ili pritisnite {{key:Mod+Enter}} za završetak. {{key:Esc}} odbacuje oblačić.

Ako završite bez upisa, oblačić se ne dodaje („Ništa nije upisano, pa oblačić nije dodan.“).

Nakon crtanja odaberite ga da pomaknete okvir, povučete vrh vodilice ili njen prijelom (dvije ručke u obliku romba) ili promijenite veličinu okvira.

## Tekstni okviri

1. Odaberite {{ui:Text}} ({{key:T}}).
2. Kliknite gdje tekst počinje (dobivate okvir razumne širine) ili povucite okvir željene veličine.
3. Upišite, zatim kliknite izvan ili pritisnite {{key:Mod+Enter}}.

Tekst nema okvir prema zadanom. Da ga dobije, povećajte {{ui:Line width}} u {{ui:Properties}}. Za pozadinu uključite {{ui:Fill}}.

Za kasnije mijenjanje teksta: s uključenim {{ui:Select}} dvaput kliknite tekst, ili ga odaberite i pritisnite {{key:Enter}}, ili odaberite {{ui:Edit on the sheet}} u {{ui:Properties}}. Možete ga urediti i u okviru {{ui:Text}} u {{ui:Properties}}.

## Strelice i linije

1. Odaberite {{ui:Arrow}} ({{key:A}}) ili {{ui:Line}} ({{key:L}}).
2. Povucite od početka do kraja. Ili kliknite početak, pustite i kliknite kraj.
3. Držite {{key:Shift}} da ostane pod kutom koji je višekratnik od 45°.

Vrh strelice je na kraju na kojem ste završili.

## Pravokutnici, elipse, polilinije i poligoni

- {{ui:Rectangle}} ({{key:R}}) i {{ui:Ellipse}} ({{key:E}}): povucite okvir. {{key:Shift}} pravi kvadrat ili krug. Klik bez povlačenja ne crta ništa, a statusna traka traži povlačenje.
- {{ui:Polyline}} ({{key:Y}}) i {{ui:Polygon}} ({{key:G}}): kliknite točke; završite dvostrukim klikom, {{key:Enter}} ili desnim klikom (na dodiru dvostrukim dodirom). {{key:Backspace}} uklanja zadnju točku. Poligon se sam zatvara i treba tri točke; polilinija treba dvije.

## Olovka i isticanje

- {{ui:Pen}} ({{key:P}}): povucite za slobodno crtanje. Potez se malo izgladi kad pustite.
- {{ui:Highlight}} ({{key:I}}): isto, ali sa širokim, prozirnim žutim potezom koji oboji crtež ispod umjesto da ga prekrije.
- Držite {{key:Shift}} dok crtate da dobijete jedan ravni potez od mjesta na kojem ste počeli.

Isticanje je slobodni potez. Ne hvata se za tekst u PDF-u.

## Boja, linija i ispuna

Na dva načina:

- **Prije crtanja:** odaberite alat. Kad ništa nije odabrano, {{ui:Properties}} prikazuje postavke „<alat> alat“: {{ui:Color}}, {{ui:Line width}} (u točkama), {{ui:Fill}} i {{ui:Fill opacity}} za zatvorene oblike, {{ui:Opacity}}, te {{ui:Text size}} za tekst. Svaka nova oznaka te vrste koristi ih, a MarkupCraft ih pamti u ovom pregledniku.
- **Poslije crtanja:** odaberite jednu ili više oznaka i promijenite iste kontrole pod „Stil“. Kad je odabrano više, promjena vrijedi za sve u jednom koraku.

Zadano su crvene oznake, žuti marker za isticanje, plava mjerenja, narančasti brojevi i pečati obojeni prema značenju.

Spremljeni izgledi koje svakodnevno koristite pripadaju u alatnicu: vidi [Alatnica](topic:tool-chest).

## Predmet i komentar

Svaka oznaka ima i {{ui:Subject}} (kratka oznaka poput „Oblak“ ili „RFI“, prikazana u popisu oznaka i u drugim PDF preglednicima) i {{ui:Comment}} (duže bilješke). Ispunite ih u {{ui:Properties}}. Za razgovor o oznaci koristite odgovore: vidi [Statusi i odgovori](topic:statuses-and-replies).

## Dalje

- [Odabir, premještanje i promjena oznaka](topic:select-and-edit)
- [Pečati i bilješke](topic:stamps-and-notes)
- [Svaka vrsta oznake](topic:markup-types)

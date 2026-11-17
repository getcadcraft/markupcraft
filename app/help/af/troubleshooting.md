---
title: Probleemoplossing
summary: Boodskappe wat MarkupCraft wys en wat om daaraan te doen, plus regstellings vir dinge wat nie blyk te werk nie.
keywords: probleem, fout, werk nie, hulp, boodskap, sal nie oopmaak nie, kan nie stoor nie, wagwoord, beskerm, maat geweier, kalibreer, vanlyn, leeg, stadig, verlore opmerkings, vraagtekens
from: bb650b39
---

Die meeste probleme word in die statusbalk onder aan die skerm verduidelik. Lees dit eers.

## Lêers oopmaak

**"MarkupCraft maak PDF-lêers oop. "x" is nie ’n PDF nie."**
Jy het iets anders gekies of laat val. Net PDF-lêers maak oop. Voer eers tekeninge uit jou CAD-program uit as PDF.

**'"naam" benodig ’n wagwoord om oop te maak. Maak ’n onbeskermde afskrif oop.'**
Die PDF is met ’n wagwoord beskerm. Vra die sender vir ’n onbeskermde afskrif, of maak dit oop in ’n PDF-program waar jy die wagwoord ken en stoor ’n afskrif sonder die wagwoord.

**'"naam" kon nie as ’n PDF gelees word nie (…)'**
Die lêer is beskadig of is nie werklik ’n PDF nie (’n onvoltooide aflaai, ’n e-posaanhegsel wat afgesny is). Laai dit weer af. As ander PDF-programme dit kan oopmaak, gebruik hul "stoor as" om ’n skoon afskrif te maak en maak dit oop.

**"Sommige lêers het nie oopgemaak nie"**
Wanneer jy verskeie tegelyk oopmaak, lys hierdie kassie die lêers wat misluk het en hoekom. Die ander is oop.

**"Die PDF-leser kon nie laai nie: …"**
Die PDF-enjin kon nie gehaal word nie. Aanlyn: herlaai die bladsy en probeer weer; kyk of ’n vuurmuur of inhoudblokkeerder die werf nie blokkeer nie. Vanlyn: MarkupCraft is nie vir vanlyngebruik in hierdie blaaier gestoor nie (die balk bo sê nie "Vanlyn gereed" nie). Kry aanlyn, kies {{ui:Save for offline}}, en wag vir "Vanlyn gereed". Sien [Werk vanlyn](common:offline).

**"Sommige annotasies kan twee keer op die skerm wys" of "Bykomende annotasiebesonderhede kon nie gelees word nie"**
Die lêer se bestaande kommentaar is ongewoon. Dit word steeds oopgemaak sover MarkupCraft kan; kontroleer dit voordat jy daarop staatmaak. Stoor werk steeds.

**Die blad het die verkeerde naam, of "bladsy 3"**
Sien [Hoe blaaie hul name kry](topic:open-a-plan-set#how-sheets-get-their-names). Ingeskandeerde blaaie het geen teks om te lees nie; gebruik {{ui:Rename sheet}}.

**Dieselfde blaaie verskyn twee keer**
Dieselfde lêer is twee keer oopgemaak. Kies {{ui:Close}} (stoor eers as dit nodig is) en maak die stel weer oop.

## Teken en kies

**Niks gebeur wanneer ek op die blad klik nie**
Kyk watter gereedskap in die werkbalk ingedruk is, en lees die statusbalk. Met {{ui:Rectangle}}, {{ui:Ellipse}} en {{ui:Cloud}} teken ’n klik sonder om te sleep niks nie: sleep. Met {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} en {{ui:Area}} word punte bygevoeg: voltooi met ’n dubbelklik of {{key:Enter}}.

**"’n Veelhoek benodig ten minste 3 punte." (of 2 vir ’n polilyn)**
Klik meer punte voordat jy voltooi.

**"Niks getik nie, dus is geen teks bygevoeg nie."**
Tekskassies en uitroepe word net bewaar as hulle teks het. Teken dit weer en tik voordat jy wegklik.

**"Die twee punte is dieselfde. Klik twee verskillende punte."**
Vir lyne, pyltjies, lengtes en kalibrasie moet die twee punte van mekaar af wees. Sleep, of klik twee keer op verskillende plekke.

**Ek kan nie ’n opmerking skuif of skrap nie; dit het ’n grys gestreepte kassie**
Dit is ’n leesalleen-kommentaar wat by die lêer gekom het (byvoorbeeld ’n teksmerking). MarkupCraft hou dit soos dit is: jy kan net daarop antwoord. Die statusbalk sê "leesalleen-opmerking(s) word bewaar soos in die lêer".

**My sleutels tik letters in ’n kassie in plaas van om gereedskap te kies**
Die wyser is in ’n tekskassie (’n antwoord, ’n veld in {{ui:Properties}}, die bladsoektog). Klik eers op ’n leë deel van die bladarea, of druk {{key:Esc}} as jy opmerkingteks wysig.

**Space skuif nie, of pyltjiesleutels doen niks nie**
Jy het pas ’n werkbalkknoppie geklik, so dit het steeds die klavier. Sleep eerder met die middelmuisknoppie, of klik een keer op die blad met {{ui:Select}} aan, en probeer weer. Sien ook [Klavier en muis](topic:keyboard#when-a-key-does-nothing).

**’n Knyp op die aanraakskerm het ’n merk gelaat**
’n Sleepgereedskap (pen, wolk, reghoek) het begin voordat die tweede vinger aangekom het en geëindig voordat dit gekanselleer is. Druk {{ui:Undo}}. Sit albei vingers saam neer wanneer jy wil zoem.

## Meet

**"Kalibreer hierdie blad eerste: kies twee punte ’n bekende afstand van mekaar af, of kies sy skaal. Meet dan."**
Elke blad benodig sy eie skaal voor {{ui:Length}} of {{ui:Area}}. MarkupCraft het na {{ui:Calibrate}} oorgeskakel: klik op die twee punte van ’n bekende maat en tik die lengte, of klik op die skaalknoppie in die statusbalk en kies ’n skaal. Sien [Kalibreer ’n blad en meet](topic:calibrate-and-measure).

**'Dit is nie ’n lengte wat MarkupCraft verstaan nie.'**
Tik dit soos `24'-0"`, `12' 6 1/2"`, `7.2 m` of `900 mm`. Sien [Eenhede, lengtes en skale](topic:units-and-scales).

**Metings is ’n bietjie af, of heeltemal af**
- ’n Vooraf-ingestelde skaal op ’n PDF wat nie volle grootte is nie, meet verkeerd. Kalibreer eerder vanaf ’n lang bekende maat.
- ’n Duisendskeier is as ’n desimaalpunt gelees: `1,200 mm` beteken 1.2 mm. Tik `1200 mm`.
- Zoem in wanneer jy die punte klik.
- Die tekening is dalk nie op skaal nie ("NTS").

**"Kies eers ’n telgroep, en Shift+klik dan ’n merk om dit te verwyder."**
Kies {{ui:Select}}, klik op die telgroep, kies dan {{ui:Count}} weer en {{key:Shift}}-klik die stip.

## Stoor

**"Hierdie PDF is beskerm (geënkripteer), so ’n afskrif met merke kan nie geskryf word nie."**
Die lêer verbied veranderinge. Vra vir ’n onbeskermde afskrif. Intussen kan jy die opmerkingslys steeds as CSV of BCF uitvoer.

**"Die PDF-skrywer kon nie laai nie: …"**
Gewoonlik is jy vanlyn en is die program nie vir vanlynwerk gestoor nie (geen "Vanlyn gereed" in die balk bo nie). Jou opmerkings is steeds in die oortjie: hou dit oop, kry aanlyn, en kies weer {{ui:Save}}. Kies dan {{ui:Save for offline}} sodat dit die volgende keer vanlyn werk; die gestoorde afskrif sluit die PDF-skrywer in.

**"Kon nie <file> stoor nie"**
Die kassie wys hoekom. Jou opmerkings is steeds in die oortjie. Probeer weer; as dit herhaal, voer die CSV uit sodat die kommentaar nie verlore gaan nie, en rapporteer die boodskap.

**Ek het Stoor gekies, maar net een lêer het aangekom**
Jou blaaier het die bykomende aflaaie geblokkeer. Soek ’n kennisgewing in die adresbalk en laat hierdie werf toe om verskeie lêers af te laai, en stoor dan weer.

**Ek kan die gestoorde lêer nie vind nie**
Dit het in jou blaaier se aflaaigids beland. Maak die blaaier se aflaailys oop (in Chrome en Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; in Firefox en Safari, die aflaaiknoppie op die werkbalk) om te sien waar. Sien [Blaaiers en rekenaars](common:browsers).

**Sommige teks wys "?" in ander PDF-kykers**
Karakters buite die Wes-Europese stel druk as "?" in die afskrif. Die stoorboodskap tel hulle. Sien [Stoor die PDF met merke](topic:save-the-marked-up-pdf).

**Die stempel wys môre se (of gister se) datum**
Stempeldatums is in UTC. Sien [Stempels en plaknotas](topic:stamps-and-notes).

## Werk vanlyn

**Die vanlynknoppie sê "Kon nie stoor nie"**
Sommige van die program se lêers het nie afgelaai nie. Kontroleer die verbinding en klik weer op die knoppie; dit tel "Stoor N van M" totdat "Vanlyn gereed".

**Die vanlynknoppie sê "Vanlyn nie beskikbaar nie"**
Hierdie blaaiervenster kan nie ’n vanlynafskrif hou nie: ’n privaatvenster, of ’n rekenaar wie se beleid dit blokkeer. Maak MarkupCraft in ’n normale venster oop en probeer weer.

**Vanlyn is die program ’n ouer weergawe**
Die vanlynafskrif is die weergawe wat jy gestoor het. Wanneer jy aanlyn is, klik "Vanlyn gereed" en kies "Stoor weer (kry die nuutste weergawe)". Om die spasie vry te maak, kies "Verwyder die vanlynafskrif". Sien [Werk vanlyn](common:offline).

**Die hulp sal nie oopmaak nie**
Druk {{key:F1}} (op ’n Mac, met **fn**), of kies {{ui:Help}} in die balk bo. Dit werk ook vanlyn.

## Verlore goed

**My opmerkings is weg nadat ek die oortjie gesluit of herlaai het**
Maak MarkupCraft weer in dieselfde blaaier oop: dit bied die ongestoorde werk aan met "Herstel jou werk?". Kies {{ui:Recover}} en stoor die PDF. Afskrifte word tot 30 dae bewaar; ’n privaatvenster, of die uitvee van werfdata, laat geen oor nie. Sien [Herstel jou werk](common:recover).

**My naam, gereedskapinstellings of gereedskapskis is weg**
Hulle word net in hierdie blaaier bewaar en is uitgevee (werfdata uitgevee, ’n privaatvenster, ’n ander blaaier of rekenaar, of Safari se opruiming van werwe wat ’n tyd lank nie besoek is nie). Stel die naam weer en voer jou uitgevoerde kis in. Sien [Wat in hierdie blaaier bly](topic:browser-storage).

**"Die gereedskapskis kon nie in hierdie blaaier bewaar word nie (berging is af of vol). Voer dit uit om dit te behou."**
Die blaaier weier om data vir hierdie werf te stoor (privaatmodus, berging geblokkeer deur ’n instelling of beleid, of vol). Voer die kis uit nadat jy dit verander het, en voer dit die volgende keer in.

## Vertoning en spoed

**Die blad lyk vir ’n oomblik wazig**
MarkupCraft wys ’n vinnige, growwe weergawe terwyl jy zoem of skuif, en teken dit skerp ’n oomblik nadat jy ophou.

**Alles is stadig met ’n groot stel**
Maak ander swaar oortjies toe, maak minder lêers tegelyk oop, en vermy om tot die maksimum op reusagtige blaaie te zoem. Sien [Werk met verskeie lêers tegelyk](topic:several-files#big-sets).

**Die blad is donker met ligte lyne**
Jy is in die tema {{ui:Model}}. Kies {{ui:Paper}} in die balk bo vir donker lyne op wit. Jou opmerkings en die gestoorde PDF word nie geraak nie.

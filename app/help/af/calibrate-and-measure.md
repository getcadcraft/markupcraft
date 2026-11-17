---
title: Kalibreer 'n blad en meet
summary: Stel elke blad se skaal vanaf 'n voorinstelling of 'n bekende maat, meet dan lengtes, oppervlaktes met omtrekke, en tellings.
keywords: kalibreer, skaal, stel skaal, meet, lengte, afstand, maat, oppervlakte, vierkante voet, omtrek, tel, hoeveelheid, hoeveelheidsopname, liniaal, rekenkunde, berekening, plus, breuk
from: 49a25c6d
---

Lengtes en oppervlaktes moet die blad se skaal ken. MarkupCraft hou 'n skaal **per blad**: kalibreer elke blad waarop jy meet. Tellings het geen skaal nodig nie.

Die statusbalk wys die huidige blad se skaal, of "Nie gekalibreer nie".

## Kies 'n skaal uit die lys

Gebruik dit wanneer die PDF op volle grootte is (’n 24 × 36-blad wat op 24 × 36 druk) en die tekening sy skaal aandui.

1. Klik op die skaalknoppie in die statusbalk ("Nie gekalibreer nie"). Die kassie "Bladskaal" maak oop.
2. Kies onder {{ui:Skaal}} die skaal: argitektonies (1/32" = 1'-0" tot 3" = 1'-0"), ingenieurs (1" = 10' tot 1" = 100') of metries (1:1 tot 1:1000).
3. Kies {{ui:Stel skaal}}.

Resultaat: die statusbalk wys die skaal, byvoorbeeld `1/4" = 1'-0"`. Argitektoniese skale wys lengtes in voet en duim, ingenieurskale in desimale voet, metriese skale tot 1:50 in millimeter en vanaf 1:100 in meter.

:::warning
'n Voorinstelling is net reg as die PDF nie verklein is nie. 'n Halfgrootte-stel, of 'n blad wat "pas by bladsy" was toe dit gemaak is, meet verkeerd met 'n voorinstelling. Kalibreer eerder vanaf 'n bekende maat, en kontroleer in elk geval een maat.
:::

## Kalibreer vanaf 'n bekende maat

Gebruik dit vir halfgrootte-stelle, ingeskandeerde blaaie, detail op vreemde skale, of om 'n voorinstelling te kontroleer.

1. Vind 'n lang maat wat jy vertrou, of 'n grafiese skaalbalk.
2. Kies {{ui:Kalibreer}} in die {{ui:Meet}}-groep (of kies {{ui:Kies twee punte}} in die "Bladskaal"-kassie).
3. Klik op een kant van die maat, dan op die ander. (Of sleep van die een kant na die ander.) Zoem eers in vir akkuraatheid; {{key:Shift}} hou die lyn by 45°-stappe.
4. Die kassie sê hoe ver die punte op die papier uitmekaar is en vra "Hoe ver uitmekaar is hulle werklik?". Tik die {{ui:Werklike afstand}}, byvoorbeeld `24'-0"`, `12' 6 1/2"`, `7.2 m` of `900 mm`.
5. Kies hoe lengtes onder {{ui:Wys lengtes in}} gewys word: {{ui:Voet en duim}}, {{ui:Desimale voet}}, {{ui:Duim}}, {{ui:Meter}} of {{ui:Millimeter}}.
6. Kies {{ui:Stel skaal}}.

Resultaat: die statusbalk wys "Gekalibreer: 24'-0" oor 1.00 in" (die werklike lengte en die papierlengte), en die gereedskap waarmee jy wou meet, kom weer aan. Elke manier om 'n lengte te tik, is in [Eenhede en lengtes](topic:units-and-scales).

Die werklike afstand kan ook 'n klein berekening wees: `12'6"+3/4"`, `(24'-0")/3` of `2*450mm`. Gebruik `+ - * /` en hakies; 'n getal sonder 'n eenheid tel in die eenheid onder {{ui:Wys lengtes in}} (voet vir {{ui:Voet en duim}}). {{ui:Stel skaal}} gebruik die resultaat.

As MarkupCraft nie kan lees wat jy getik het nie, sê die kassie dit: 'Dit is nie 'n lengte wat MarkupCraft verstaan nie. Probeer 24'-0", 12' 6 1/2", 7.2 m of 900 mm.' 'n Berekening wat dit nie kan uitwerk nie, sê waarom en waar, byvoorbeeld "'n Hakie is nie gesluit nie (karakter 5)."

## Meet 'n lengte

1. Kies {{ui:Lengte}} ({{key:M}}).
2. Klik op die begin, dan op die einde. Of sleep van begin na einde. {{key:Shift}} hou dit by 45°-stappe.

Resultaat: 'n maatlyn met merkies en die lengte daarop geskryf. Die statusbalk herhaal dit ("Lengte: 12'-6 1/2" (1/4" = 1'-0")."), en {{ui:Eienskappe}} wys dit onder {{ui:Lengte}}. Voet en duim word afgerond na die naaste 1/16".

As die blad nog geen skaal het nie, skakel {{ui:Lengte}} oor na {{ui:Kalibreer}}, en die statusbalk verduidelik: "Kalibreer hierdie blad eers: kies twee punte 'n bekende afstand uitmekaar, of kies sy skaal. Meet dan." Nadat jy die skaal stel, kom {{ui:Lengte}} terug.

## Skets volgens skaal

Op 'n gekalibreerde blad kan jy werklike lengtes tik terwyl jy 'n {{ui:Lyn}}, {{ui:Pyl}}, {{ui:Lengte}}, {{ui:Polilyn}}, {{ui:Poligoon}}, {{ui:Vrye wolk}}, {{ui:Oppervlakte}} of 'n ruimte teken:

1. Klik op die eerste punt.
2. Wys die rigting waarheen die volgende segment gaan en tik die lengte, soos `16` (in die blad se eenheid), `12'6"` of `3.5 m`. 'n Kassie maak langs die wyser oop soos jy tik.
3. Druk {{key:Enter}}. Die punt land so ver weg, in die wyser se rigting.

Om die rigting presies te stel, voeg `<` en 'n hoek in grade by: `8 < 90` gaan 8 voet reguit op, `4<0` na regs, `10 < 225` af en na links, soos die blad gesien word (ook gedraaide bladsye). Hou aan om lengtes te tik vir die volgende hoeke, en voltooi die vorm soos gewoonlik. {{key:Esc}} maak die kassie toe sonder om 'n punt te plaas.

## Meet 'n hoek

1. Kies {{ui:Hoek}} ({{key:X}}).
2. Klik op die einde van een arm, dan op die hoek, dan op die einde van die ander arm.

Resultaat: die twee arms, 'n klein boog by die hoek en die hoek in grade, tot een tiende (0° tot 180°). 'n Hoek het geen skaal nodig nie. {{ui:Eienskappe}} wys dit onder {{ui:Hoek}}, en die lys, CSV en BCF dra dit.

'n {{ui:Boog}} ({{key:O}}) op 'n gekalibreerde blad wys ook sy lengte langs die kromme in {{ui:Eienskappe}}.

## Meet 'n oppervlakte en sy omtrek

1. Kies {{ui:Oppervlakte}} ({{key:Q}}).
2. Klik op elke hoek van die vertrek of streek.
3. Voltooi met 'n dubbelklik, {{key:Enter}} of 'n regsklik (dubbeltik op aanraak). {{key:Backspace}} verwyder die laaste hoek.

Resultaat: 'n geskakeerde omtrek met die oppervlakte en "P" met die omtrek in die middel, byvoorbeeld "128.00 sq ft" en "P 48'-0"". Voetskale gee vierkante voet, duimskale vierkante duim, meterskale vierkante meter, millimeterskale vierkante millimeter. 'n Oppervlakte het ten minste drie hoeke nodig.

### Uitsnitte

Om 'n kolom, 'n skag of 'n binnehof uit te laat, kies die oppervlakte en kies {{ui:Voeg ’n uitsnit by}} in {{ui:Eienskappe}}. Klik op die uitsnit se hoeke binne die oppervlakte en voltooi soos vir 'n oppervlakte. Die uitsnit bly oop (ongeskakeer), sy oppervlakte word afgetrek, en sy rande word by die omtrek gevoeg: 'n 16' × 8'-vertrek met 'n 4' × 4'-uitsnit lees "112.00 sq ft" en "P 64'-0"". Voeg soveel by as jy nodig het; hulle mag nie oor mekaar oorvleuel of die oppervlakte se omtrek kruis nie. {{ui:Verwyder uitsnitte}} haal hulle almal uit, en {{key:Mod+Z}} ontdoen een.

## Tel dinge

1. Kies {{ui:Tel}} ({{key:U}}).
2. In {{ui:Eienskappe}}, tik 'n {{ui:Groepnaam}}, byvoorbeeld "Vloerafvoere". (Dit bly vir die volgende keer.)
3. Klik op elke item op die blad.

Resultaat: elke klik voeg 'n genommerde stip by, die eerste stip dra 'n etiket soos "Vloerafvoere: 7", en die statusbalk hou die lopende totaal by.

- **Begin 'n ander groep:** druk {{key:Esc}} een keer (dit maak die keuse skoon), verander die {{ui:Groepnaam}}, en klik weer.
- **Voeg by 'n bestaande groep:** kies eers die groep, kies dan {{ui:Tel}} en klik.
- **Verwyder 'n merk:** met die groep gekies, hou {{key:Shift}} vas en klik op die stip. As jy die laaste stip verwyder, verwyder dit die groep. Op 'n aanraakskerm sonder 'n sleutelbord, gebruik eerder {{key:Mod+Z}} of {{ui:Ontdoen}}.
- **Hernoem 'n groep:** kies dit en wysig {{ui:Groepnaam}} in {{ui:Eienskappe}}.

'n Telgroep hoort by een blad. Tellings op verskeie blaaie wys as aparte groepe in die lys van opmerkings.

## Verander of verwyder 'n skaal

Klik op die skaalknoppie in die statusbalk. Die kassie wys die huidige skaal; kies 'n ander, kies {{ui:Kies twee punte}}, of kies {{ui:Verwyder skaal}}.

Lengtes en oppervlaktes wat reeds geteken is, word dadelik met die nuwe skaal **hermeet**. {{ui:Ontdoen}} bring die ou skaal terug.

## Waar die getalle heen gaan

- {{ui:Eienskappe}} wys die gekose meting se waardes.
- Die {{ui:Opmerkings}}-oortjie lys elke waarde, en sy CSV het 'n "Meting"-kolom. Sien [Die lys van opmerkings](topic:markups-list-and-export).
- Die gestoorde PDF hou die skaal op die bladsy en skryf lengtes en oppervlaktes as metingkommentaar, sodat ander PDF-programme wat metings verstaan, hulle kan wys. Sien [Wat in die PDF gestoor word](topic:what-the-pdf-keeps).

Vir 'n volledige hoeveelheidsopname met items, samestellings en pryse, gebruik TakeoffCraft: MarkupCraft meet vir nabesiening, nie vir beraming nie.

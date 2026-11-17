---
title: Kalibrera ett blad och mät
summary: Ange varje bladets skala från en förinställning eller ett känt mått, och mät sedan längder, areor med omkretsar och antal.
keywords: kalibrera, skala, ange skala, mät, längd, avstånd, mått, area, kvadratfot, omkrets, räkna, mängdavtagning, kvantitet, linjal, aritmetik, beräkning, plus, bråk
from: 49a25c6d
---

Längder och areor behöver veta bladets skala. MarkupCraft håller en skala **per blad**: kalibrera varje blad du mäter på. Antal kräver ingen skala.

Statusfältet visar det aktuella bladets skala, eller "Inte kalibrerad".

## Välj en skala från listan

Använd detta när PDF-filen är i full storlek (ett 24 × 36-blad som skrivs ut i 24 × 36) och ritningen anger sin skala.

1. Klicka på skalknappen i statusfältet ("Inte kalibrerad"). Rutan "Bladskala" öppnas.
2. Under {{ui:Skala}}, välj skalan: arkitektoniska (1/32" = 1'-0" till 3" = 1'-0"), tekniska (1" = 10' till 1" = 100') eller metriska (1:1 till 1:1000).
3. Välj {{ui:Ange skala}}.

Resultat: statusfältet visar skalan, till exempel `1/4" = 1'-0"`. Arkitektoniska skalor visar längder i fot och tum, tekniska skalor i decimala fot, metriska skalor upp till 1:50 i millimeter och från 1:100 i meter.

:::warning
En förinställning är bara rätt om PDF-filen inte har krympts. En halvstor uppsättning, eller ett blad som var "anpassat till sida" när det gjordes, mäter fel med en förinställning. Kalibrera i stället från ett känt mått, och kontrollera ett mått i alla fall.
:::

## Kalibrera från ett känt mått

Använd detta för halvstora uppsättningar, skannade blad, detaljer i ovanliga skalor, eller för att kontrollera en förinställning.

1. Hitta ett långt mått du litar på, eller en grafisk skalstapel.
2. Välj {{ui:Kalibrera}} i gruppen {{ui:Mät}} (eller välj {{ui:Välj två punkter}} i rutan "Bladskala").
3. Klicka på ena änden av måttet, sedan på den andra. (Eller dra från en ände till den andra.) Zooma in först för noggrannhet; {{key:Shift}} håller linjen i steg om 45°.
4. Rutan anger hur långt isär punkterna är på papperet och frågar "Hur långt isär är de egentligen?". Skriv in {{ui:Verkligt avstånd}}, till exempel `24'-0"`, `12' 6 1/2"`, `7.2 m` eller `900 mm`.
5. Välj hur längder visas under {{ui:Visa längder i}}: {{ui:Fot och tum}}, {{ui:Decimala fot}}, {{ui:Tum}}, {{ui:Meter}} eller {{ui:Millimeter}}.
6. Välj {{ui:Ange skala}}.

Resultat: statusfältet visar "Kalibrerad: 24'-0" över 1.00 in" (den verkliga längden och papperslängden), och verktyget du skulle mäta med återgår. Alla sätt att skriva en längd finns i [Enheter och längder](topic:units-and-scales).

Det verkliga avståndet kan också vara en liten beräkning: `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm`. Använd `+ - * /` och parenteser; ett tal utan enhet räknas i enheten under {{ui:Visa längder i}} (fot för {{ui:Fot och tum}}). {{ui:Ange skala}} använder resultatet.

Om MarkupCraft inte kan läsa det du skrev säger rutan det: 'Det där är inte en längd som MarkupCraft förstår. Prova 24'-0", 12' 6 1/2", 7.2 m eller 900 mm.' En beräkning den inte kan räkna ut säger varför och var, till exempel "En parentes är inte stängd (tecken 5)."

## Mät en längd

1. Välj {{ui:Längd}} ({{key:M}}).
2. Klicka på start, sedan på slut. Eller dra från start till slut. {{key:Shift}} håller den i steg om 45°.

Resultat: en måttlinje med streck och längden skriven på den. Statusfältet upprepar den ("Längd: 12'-6 1/2" (1/4" = 1'-0")."), och {{ui:Egenskaper}} visar den under {{ui:Längd}}. Fot och tum avrundas till närmaste 1/16".

Om bladet inte har någon skala än byter {{ui:Längd}} till {{ui:Kalibrera}} när du väljer den, och statusfältet förklarar: "Kalibrera detta blad först: välj två punkter med ett känt avstånd mellan sig, eller välj dess skala. Mät sedan." När du har angett skalan återgår {{ui:Längd}}.

## Skissa i skala

På ett kalibrerat blad kan du skriva in verkliga längder medan du ritar en {{ui:Linje}}, {{ui:Pil}}, {{ui:Längd}}, {{ui:Polylinje}}, {{ui:Polygon}}, {{ui:Fritt moln}}, {{ui:Area}} eller ett utrymme:

1. Klicka på första punkten.
2. Peka i riktningen nästa segment går och skriv dess längd, till exempel `16` (i bladets enhet), `12'6"` eller `3.5 m`. En ruta öppnas vid pekaren medan du skriver.
3. Tryck på {{key:Enter}}. Punkten hamnar så långt bort, i pekarens riktning.

För att ange riktningen exakt, lägg till `<` och en vinkel i grader: `8 < 90` går 8 fot rakt upp, `4<0` åt höger, `10 < 225` nedåt och åt vänster, sett så som bladet visas (även vridna sidor). Fortsätt skriva längder för nästa hörn och avsluta formen som vanligt. {{key:Esc}} stänger rutan utan att placera en punkt.

## Mät en vinkel

1. Välj {{ui:Vinkel}} ({{key:X}}).
2. Klicka på änden av ena armen, sedan på hörnet, sedan på änden av den andra armen.

Resultat: de två armarna, en liten båge vid hörnet och vinkeln i grader, till en tiondel (0° till 180°). En vinkel kräver ingen skala. {{ui:Egenskaper}} visar den under {{ui:Vinkel}}, och listan, CSV och BCF bär den.

En {{ui:Båge}} ({{key:O}}) på ett kalibrerat blad visar också sin längd längs kurvan i {{ui:Egenskaper}}.

## Mät en area och dess omkrets

1. Välj {{ui:Area}} ({{key:Q}}).
2. Klicka på varje hörn i rummet eller området.
3. Avsluta med dubbelklick, {{key:Enter}} eller högerklick (dubbeltryck på pekskärm). {{key:Backspace}} tar bort det sista hörnet.

Resultat: en skuggad kontur med arean och "P" med omkretsen i mitten, till exempel "128.00 sq ft" och "P 48'-0"". Skalor i fot ger kvadratfot, tum ger kvadrattum, meter ger kvadratmeter och millimeter ger kvadratmillimeter. En area behöver minst tre hörn.

### Urtag

För att lämna utanför en pelare, en schakt eller en gårdsplan: markera arean och välj {{ui:Lägg till ett urtag}} i {{ui:Egenskaper}}. Klicka på urtagets hörn inuti arean och avsluta som för en area. Urtaget förblir öppet (oskuggat), dess yta dras av, och dess kanter läggs till omkretsen: ett rum på 16' × 8' med ett urtag på 4' × 4' visar "112.00 sq ft" och "P 64'-0"". Lägg till så många du behöver; de får inte överlappa varandra eller korsa områdets kontur. {{ui:Ta bort urtag}} tar bort alla, och {{key:Mod+Z}} ångrar ett.

## Räkna saker

1. Välj {{ui:Räkna}} ({{key:U}}).
2. I {{ui:Egenskaper}}, skriv ett {{ui:Gruppnamn}}, till exempel "Golvbrunnar". (Det sparas till nästa gång.)
3. Klicka på varje objekt på bladet.

Resultat: varje klick lägger till en numrerad prick, den första pricken bär en tagg som "Golvbrunnar: 7", och statusfältet håller den löpande summan.

- **Starta en annan grupp:** tryck på {{key:Esc}} en gång (det rensar markeringen), ändra {{ui:Gruppnamn}} och klicka igen.
- **Lägg till i en befintlig grupp:** markera gruppen först, välj sedan {{ui:Räkna}} och klicka.
- **Ta bort en markering:** med gruppen markerad, håll ned {{key:Shift}} och klicka på pricken. Att ta bort den sista pricken tar bort gruppen. På en pekskärm utan tangentbord använder du i stället {{key:Mod+Z}} eller {{ui:Ångra}}.
- **Byt namn på en grupp:** markera den och redigera {{ui:Gruppnamn}} i {{ui:Egenskaper}}.

En räknegrupp hör till ett blad. Antal på flera blad visas som separata grupper i markeringslistan.

## Ändra eller ta bort en skala

Klicka på skalknappen i statusfältet. Rutan visar den aktuella skalan; välj en annan, välj {{ui:Välj två punkter}} eller välj {{ui:Ta bort skala}}.

Längder och areor som redan ritats **mäts om** med den nya skalan direkt. Ångra återställer den gamla skalan.

## Var siffrorna tar vägen

- {{ui:Egenskaper}} visar värdena för den markerade mätningen.
- Fliken {{ui:Markeringar}} listar varje värde, och dess CSV har en kolumn "Measurement". Se [Markeringslistan](topic:markups-list-and-export).
- Den sparade PDF-filen behåller skalan på sidan och skriver längder och areor som mätkommentarer, så att andra PDF-program som förstår mätningar kan visa dem. Se [Vad som sparas i PDF-filen](topic:what-the-pdf-keeps).

För en fullständig mängdavtagning med poster, kalkylsammansättningar och priser, använd TakeoffCraft: MarkupCraft mäter för granskning, inte för kalkylering.

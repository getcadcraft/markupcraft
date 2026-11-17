---
title: Een blad ijken en meten
summary: Stel de schaal van elk blad in met een voorinstelling of een bekende maat, en meet daarna lengtes, oppervlakten met omtrek, en tellingen.
keywords: ijken, schaal, schaal instellen, meten, lengte, afstand, maatvoering, oppervlakte, vierkante voet, omtrek, tellen, opmeten, hoeveelheid, liniaal, rekenen, berekening, plus, breuk
from: 49a25c6d
---

Lengtes en oppervlakten moeten de schaal van het blad kennen. MarkupCraft houdt een schaal **per blad** bij: ijk elk blad dat u meet. Tellingen hebben geen schaal nodig.

De statusbalk toont de schaal van het huidige blad, of "Niet geijkt".

## Een schaal kiezen uit de lijst

Gebruik dit wanneer de PDF op ware grootte is (een blad van 24 × 36 dat op 24 × 36 wordt afgedrukt) en de tekening de schaal vermeldt.

1. Klik op de schaalknop in de statusbalk ("Niet geijkt"). Het vak "Bladschaal" opent.
2. Kies onder {{ui:Scale}} de schaal: architectonisch (1/32" = 1'-0" tot 3" = 1'-0"), engineering (1" = 10' tot 1" = 100') of metrisch (1:1 tot 1:1000).
3. Kies {{ui:Set scale}}.

Resultaat: de statusbalk toont de schaal, bijvoorbeeld `1/4" = 1'-0"`. Architectonische schalen tonen lengtes in voeten en inches, engineering-schalen in decimale voeten, metrische schalen tot 1:50 in millimeters en vanaf 1:100 in meters.

:::warning
Een voorinstelling is alleen juist als de PDF niet verkleind is. Een halfformaat-set, of een blad dat "op pagina passend" was toen het werd gemaakt, meet met een voorinstelling verkeerd. Ijk daarom op een bekende maat, en controleer in elk geval één maat.
:::

## Ijken op een bekende maat

Gebruik dit voor halfformaat-sets, gescande bladen, details op rare schalen, of om een voorinstelling te controleren.

1. Zoek een lange maat die u vertrouwt, of een grafische schaalbalk.
2. Kies {{ui:Calibrate}} in de groep {{ui:Measure}} (of kies {{ui:Pick two points}} in het vak "Bladschaal").
3. Klik op het ene uiteinde van de maat, en daarna op het andere. (Of sleep van het ene uiteinde naar het andere.) Zoom eerst in voor nauwkeurigheid; {{key:Shift}} houdt de lijn in stappen van 45°.
4. Het vak zegt hoe ver de punten op het papier van elkaar liggen en vraagt "Hoe ver liggen ze echt uit elkaar?". Typ de {{ui:Real distance}}, bijvoorbeeld `24'-0"`, `12' 6 1/2"`, `7.2 m` of `900 mm`.
5. Kies hoe lengtes worden getoond onder {{ui:Show lengths in}}: {{ui:Feet and inches}}, {{ui:Decimal feet}}, {{ui:Inches}}, {{ui:Meters}} of {{ui:Millimeters}}.
6. Kies {{ui:Set scale}}.

Resultaat: de statusbalk toont "Geijkt: 24'-0" over 1.00 in" (de echte lengte en de lengte op papier), en het gereedschap waarmee u wilde meten komt terug. Elke manier om een lengte in te typen staat in [Eenheden en lengtes](topic:units-and-scales).

De echte afstand kan ook een kleine berekening zijn: `12'6"+3/4"`, `(24'-0")/3` of `2*450mm`. Gebruik `+ - * /` en haakjes; een getal zonder eenheid telt in de eenheid onder {{ui:Show lengths in}} (voeten voor {{ui:Feet and inches}}). {{ui:Set scale}} gebruikt het resultaat.

Als MarkupCraft niet kan lezen wat u typte, zegt het vak dat: 'Dat is geen lengte die MarkupCraft begrijpt. Probeer 24'-0", 12' 6 1/2", 7.2 m of 900 mm.' Een berekening die het niet kan uitrekenen, zegt waarom en waar, bijvoorbeeld "Een haakje is niet gesloten (teken 5)."

## Een lengte meten

1. Kies {{ui:Length}} ({{key:M}}).
2. Klik op het begin en daarna op het eind. Of sleep van begin naar eind. {{key:Shift}} houdt hem in stappen van 45°.

Resultaat: een maatlijn met streepjes en de lengte erop. De statusbalk herhaalt hem ("Lengte: 12'-6 1/2" (1/4" = 1'-0")."), en {{ui:Properties}} toont hem onder {{ui:Length}}. Voeten en inches worden afgerond op de dichtstbijzijnde 1/16".

Als het blad nog geen schaal heeft, schakelt het kiezen van {{ui:Length}} over naar {{ui:Calibrate}}, en legt de statusbalk uit: "Ijk eerst dit blad: kies twee punten op een bekende afstand van elkaar, of kies de schaal. Meet daarna." Na het instellen van de schaal komt {{ui:Length}} terug.

## Schetsen op schaal

Op een geijkt blad kunt u echte lengtes typen terwijl u een {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}}, {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}}, {{ui:Area}} of een ruimte tekent:

1. Klik op het eerste punt.
2. Wijs de richting van het volgende segment aan en typ de lengte, zoals `16` (in de eenheid van het blad), `12'6"` of `3.5 m`. Een vak opent naast de aanwijzer terwijl u typt.
3. Druk op {{key:Enter}}. Het punt komt zoveel verder, in de richting van de aanwijzer.

Om de richting exact in te stellen, voegt u `<` toe en een hoek in graden: `8 < 90` gaat 8 voet recht omhoog, `4<0` naar rechts, `10 < 225` naar beneden en links, zoals het blad wordt gezien (ook gedraaide pagina's). Blijf lengtes typen voor de volgende hoeken, en rond de vorm af zoals gewoonlijk. {{key:Esc}} sluit het vak zonder een punt te plaatsen.

## Een hoek meten

1. Kies {{ui:Angle}} ({{key:X}}).
2. Klik op het eind van de ene arm, daarna op het hoekpunt, en daarna op het eind van de andere arm.

Resultaat: de twee armen, een klein boogje in het hoekpunt en de hoek in graden, tot op een tiende (0° tot 180°). Een hoek heeft geen schaal nodig. {{ui:Properties}} toont hem onder {{ui:Angle}}, en de lijst, CSV en BCF bevatten hem.

Een {{ui:Arc}} ({{key:O}}) op een geijkt blad toont ook zijn lengte langs de boog in {{ui:Properties}}.

## Een oppervlakte en de omtrek meten

1. Kies {{ui:Area}} ({{key:Q}}).
2. Klik op elke hoek van de kamer of het gebied.
3. Rond af met een dubbelklik, {{key:Enter}} of een rechterklik (dubbeltik op een aanraakscherm). {{key:Backspace}} verwijdert de laatste hoek.

Resultaat: een gearceerde omtrek met de oppervlakte, en "P" met de omtrek in het midden, bijvoorbeeld "128.00 ft²" en "P 48'-0"". Schalen in voeten geven vierkante voet, inches vierkante inches, meters vierkante meters, millimeters vierkante millimeters. Een oppervlakte heeft minstens drie hoeken nodig.

### Uitsparingen

Om een kolom, schacht of binnenplaats uit te sluiten, selecteert u het gebied en kiest u {{ui:Add a cut-out}} in {{ui:Properties}}. Klik op de hoeken van de uitsparing binnen het gebied en rond af zoals bij een gebied. De uitsparing blijft open (niet gearceerd), haar oppervlakte gaat eraf, en haar randen worden aan de omtrek toegevoegd: een kamer van 16' × 8' met een uitsparing van 4' × 4' toont "112.00 ft²" en "P 64'-0"". Voeg er zoveel toe als u nodig heeft; ze mogen elkaar niet overlappen of de omtrek van het gebied kruisen. {{ui:Remove cut-outs}} verwijdert ze allemaal, en {{key:Mod+Z}} maakt er één ongedaan.

## Dingen tellen

1. Kies {{ui:Count}} ({{key:U}}).
2. Typ in {{ui:Properties}} een {{ui:Group name}}, bijvoorbeeld "Vloerputten". (Hij blijft staan voor de volgende keer.)
3. Klik op elk item op het blad.

Resultaat: elke klik voegt een genummerde stip toe, de eerste stip draagt een label zoals "Vloerputten: 7", en de statusbalk houdt het lopende totaal bij.

- **Een nieuwe groep beginnen:** druk eenmaal op {{key:Esc}} (dat wist de selectie), wijzig de {{ui:Group name}}, en klik weer.
- **Toevoegen aan een bestaande groep:** selecteer eerst de groep, kies daarna {{ui:Count}} en klik.
- **Een markering verwijderen:** houd {{key:Shift}} ingedrukt terwijl de groep is geselecteerd, en klik op de stip. Het verwijderen van de laatste stip verwijdert de groep. Op een aanraakscherm zonder toetsenbord gebruikt u {{key:Mod+Z}} of {{ui:Undo}} in plaats daarvan.
- **Een groep hernoemen:** selecteer hem en bewerk {{ui:Group name}} in {{ui:Properties}}.

Een telgroep hoort bij één blad. Tellingen op meerdere bladen worden als aparte groepen getoond in de markuplijst.

## Een schaal wijzigen of verwijderen

Klik op de schaalknop in de statusbalk. Het vak toont de huidige schaal; kies een andere, kies {{ui:Pick two points}}, of kies {{ui:Remove scale}}.

Lengtes en oppervlakten die al getekend zijn, worden meteen **opnieuw gemeten** met de nieuwe schaal. Ongedaan maken zet de oude schaal terug.

## Waar de getallen naartoe gaan

- {{ui:Properties}} toont de waarden van de geselecteerde meting.
- Het tabblad {{ui:Markups}} toont elke waarde, en de CSV heeft een kolom "Meting". Zie [De markuplijst](topic:markups-list-and-export).
- De opgeslagen PDF bewaart de schaal op de pagina en schrijft lengtes en oppervlakten als maatopmerkingen, zodat andere PDF-programma's die metingen begrijpen ze kunnen tonen. Zie [Wat in de PDF wordt bewaard](topic:what-the-pdf-keeps).

Voor een volledige hoeveelheidsopname met posten, samenstellingen en prijzen gebruikt u TakeoffCraft: MarkupCraft meet voor beoordeling, niet voor het maken van een raming.

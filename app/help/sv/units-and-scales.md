---
title: Enheter, längder och skalor
summary: Alla sätt att skriva en längd, enheterna längder och ytor visas i, avrundning och listan över förinställda skalor.
keywords: enheter, fot, tum, fot och tum, metriskt, meter, millimeter, centimeter, skala, förinställd, arkitektskala, teknisk skala, förhållande, kvadratfot, avrundning, bråk
from: 574b0291
---

## Skriva en längd

När du kalibrerar från två punkter skriver du det verkliga avståndet. MarkupCraft läser alla dessa:

| Du skriver | Betyder |
|---|---|
| `24'-0"` | 24 fot |
| `12' 6 1/2"` eller `12'-6 1/2"` | 12 fot 6½ tum |
| `12' 6` | 12 fot 6 tum (tumtecknet utelämnat) |
| `6"` eller `1/2"` | tum |
| `12.5'` eller `12.5 ft` | 12½ fot |
| `3 ft 6 in` | 3 fot 6 tum (även feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metriskt (även meter, metre, millimeter, centimetre…) |
| `24` | ett rent tal, i enheten som valts under {{ui:Show lengths in}} |

Krulliga citattecken (’ ”) och två apostrofer ('') för tum fungerar också. Noll- och negativa längder godkänns inte.

:::warning
Ett kommatecken läses som decimaltecken: `1,5 m` är 1,5 meter. Skriv inga tusentalsavgränsare: `1,200 mm` läses som 1.2 millimeter. Skriv `1200 mm`.
:::

## Så visas längder och ytor

| {{ui:Show lengths in}} | En längd visas som | En yta visas som |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, avrundat till 1/16" | kvadratfot, två decimaler |
| {{ui:Decimal feet}} | `12.54'`, två decimaler | kvadratfot, två decimaler |
| {{ui:Inches}} | `150.5"`, upp till två decimaler | kvadrattum, en decimal |
| {{ui:Meters}} | `3.820 m`, tre decimaler | kvadratmeter, tre decimaler |
| {{ui:Millimeters}} | `3820 mm`, hela millimeter | kvadratmillimeter, hela tal |

Omkretsen för en yta använder längdformatet.

## Förinställda skalor

Förinställningarna förutsätter att PDF:en är i sin fulla utskriftsstorlek: 72 PDF-punkter per tum, så som ett CAD-program plottar den.

| Grupp | Skalor | Längder visas i |
|---|---|---|
| Arkitekt | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Fot och tum |
| Teknisk | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimala fot |
| Metrisk | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeter |
| Metrisk | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meter |

För att använda en förinställd skala men se längder i en annan enhet, kalibrera från två punkter i stället och välj enheten där.

## Skalor som andra program sparade

När en PDF redan bär en skala för en sida från ett annat program (en måttskala lagrad på sidan) använder MarkupCraft den om den är i fot, tum, meter, centimeter eller millimeter. Dess etikett visas så som filen anger den.

## Pappersposition

Statusfältet visar var pekaren är på papperet, i tum från bladets övre vänstra hörn, oavsett bladets skala. Jämförelsens förflyttningssteg är i punkter (72 punkter per tum).

## Noggrannhet

En mätning är så bra som kalibreringen och dina klick. Kalibrera över det längsta kända måttet du kan hitta, zooma in för att klicka på dess ändar och kontrollera sedan ett annat mått. En PDF som skalades när den skapades (en utskrift ”anpassad till sida” eller en sats i halv storlek) är fortfarande korrekt efter kalibrering från ett mått, men inte med en förinställning.

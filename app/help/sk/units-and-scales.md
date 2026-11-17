---
title: Jednotky, dĺžky a mierky
summary: Všetky spôsoby zápisu dĺžky, jednotky, v ktorých sa dĺžky a plochy zobrazujú, zaokrúhľovanie a zoznam predvolených mierok.
keywords: jednotky, stopy, palce, stopy a palce, metrické, metre, milimetre, centimetre, mierka, predvoľba, architektonická mierka, inžinierska mierka, pomer, štvorcové stopy, zaokrúhľovanie, zlomky
from: 574b0291
---

## Zápis dĺžky

Pri kalibrácii z dvoch bodov napíšete skutočnú vzdialenosť. MarkupCraft číta všetky tieto zápisy:

| Napíšete | Znamená to |
|---|---|
| `24'-0"` | 24 stôp |
| `12' 6 1/2"` alebo `12'-6 1/2"` | 12 stôp a 6½ palca |
| `12' 6` | 12 stôp a 6 palcov (značka palcov vynechaná) |
| `6"` alebo `1/2"` | palce |
| `12.5'` alebo `12.5 ft` | 12½ stopy |
| `3 ft 6 in` | 3 stopy a 6 palcov (aj feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrické (aj meter, metre, millimeter, centimetre…) |
| `24` | holé číslo v jednotke zvolenej vo {{ui:Zobrazovať dĺžky v}} |

Typografické úvodzovky (’ ”) a dve apostrofy ('') pre palce fungujú tiež. Nulové a záporné dĺžky sa odmietnu.

:::warning
Čiarka sa číta ako desatinná bodka: `1,5 m` je 1.5 metra. Nezadávajte oddeľovače tisícov: `1,200 mm` sa číta ako 1.2 milimetra. Napíšte `1200 mm`.
:::

## Ako sa dĺžky a plochy zobrazujú

| {{ui:Zobrazovať dĺžky v}} | Dĺžka sa zobrazí ako | Plocha sa zobrazí ako |
|---|---|---|
| {{ui:Stopy a palce}} | `12'-6 1/2"`, zaokrúhlené na 1/16" | štvorcové stopy, dve desatinné miesta |
| {{ui:Desatinné stopy}} | `12.54'`, dve desatinné miesta | štvorcové stopy, dve desatinné miesta |
| {{ui:Palce}} | `150.5"`, najviac dve desatinné miesta | štvorcové palce, jedno desatinné miesto |
| {{ui:Metre}} | `3.820 m`, tri desatinné miesta | štvorcové metre, tri desatinné miesta |
| {{ui:Milimetre}} | `3820 mm`, celé milimetre | štvorcové milimetre, celé čísla |

Obvod plochy používa formát dĺžky.

## Predvolené mierky

Predvoľby predpokladajú, že PDF je vo svojej vytlačenej plnej veľkosti: 72 bodov PDF na palec, ako ho vykreslí CAD program.

| Skupina | Mierky | Dĺžky zobrazené v |
|---|---|---|
| Architektonická | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Stopy a palce |
| Inžinierska | 1" = 10', 20', 30', 40', 50', 60', 100' | Desatinné stopy |
| Metrická | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetre |
| Metrická | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metre |

Ak chcete použiť predvolenú mierku, ale dĺžky vidieť v inej jednotke, kalibrujte namiesto toho z dvoch bodov a jednotku zvoľte tam.

## Mierky uložené inými programami

Keď PDF už nesie mierku pre stranu z iného programu (mierka merania uložená na strane), MarkupCraft ju použije, ak je v stopách, palcoch, metroch, centimetroch alebo milimetroch. Jej označenie sa zobrazí tak, ako ho súbor uvádza.

## Pozície na papieri

Stavový riadok zobrazuje, kde je kurzor na papieri, v palcoch od ľavého horného rohu listu, bez ohľadu na mierku listu. Kroky posunu nástroja Porovnanie sú v bodoch (72 bodov na palec).

## Presnosť

Meranie je len také dobré, ako sú kalibrácia a vaše kliknutia. Kalibrujte podľa čo najdlhšieho známeho rozmeru, ktorý nájdete, priblížte, aby ste klikli na jeho konce, potom skontrolujte jeden iný rozmer. PDF, ktoré bolo pri vytvorení zmenšené (výtlačok "prispôsobiť na stranu" alebo sada v polovičnej veľkosti), je po kalibrácii z rozmeru stále presné, ale nie pri použití predvoľby.

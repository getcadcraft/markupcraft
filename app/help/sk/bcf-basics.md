---
title: Základy BCF
summary: Čo obsahuje export BCF z MarkupCraft, ako ho použiť s nástrojmi na koordináciu BIM a aké má obmedzenia.
keywords: bcf, bcfzip, formát spolupráce BIM, problémy, koordinácia, kolízia, témy, pohľad, snímka, openbim, buildingsmart, export problémov
from: 446f38c1
---

BCF (BIM Collaboration Format) je otvorený formát súborov na odovzdávanie problémov medzi nástrojmi BIM. Mnohé programy na koordináciu modelov a tvorbu modelov dokážu importovať súbor `.bcfzip` ako zoznam problémov. MarkupCraft zapisuje **BCF 2.1**.

## Vytvorenie exportu

1. Otvorte kartu {{ui:Poznámky}}.
2. Zoznam prefiltrujte podľa toho, čo chcete odoslať, napríklad {{ui:Stav}} "Otvorené". Exportujú sa iba zobrazené poznámky.
3. Vyberte {{ui:BCF}}.
4. Počkajte, kým sa vytvorí snímka každej poznámky ("Vytváranie snímok pre BCF (5 z 20)…").

Výsledok: sťahuje sa súbor "<name> markups.bcfzip" a stavový riadok ukáže, koľko tém obsahuje a akú má veľkosť.

## Čo je v exporte

Každá poznámka sa stane jednou **témou**:

| Pole témy | Čím sa vyplní |
|---|---|
| Názov | Číslo položky nedostatku, predmet a list, napríklad "#4 Oblak na A-101 — Pôdorys" |
| Typ | Druh poznámky (Oblak, Popisok, Dĺžka…) |
| Stav | Otvorené, Prijaté, Zamietnuté alebo Dokončené |
| Štítky | Druh poznámky a list |
| Autor a dátumy | Autor poznámky, dátumy vytvorenia a úpravy |
| Pridelené, termín | Z jej položky nedostatku, ak ju má |
| Popis | Jej text alebo znenie pečiatky, nameraná hodnota, komentár, list a súbor |
| Komentáre | Jeden na každú odpoveď, s autorom a dátumom |
| Snímka | Obrázok poznámky na jej časti listu |
| Pohľad | Pohľad zhora na miesto poznámky na liste |

Opätovný export tej istej poznámky dá rovnaké ID témy, takže nástroj, ktorý importuje BCF, ju dokáže rozpoznať ako ten istý problém.

## Obmedzenia, ktoré treba poznať

- **List nie je model.** Pohľad ukazuje na polohu poznámky na papieri, meranú v metroch papiera. Nepresunie nástroj BIM na miesto v modeli. Na nájdenie miesta použite snímku a názov listu.
- **Stavy a typy sú vlastné pre MarkupCraft** (Otvorené, Prijaté, Zamietnuté, Dokončené; Oblak, Popisok…). Súbor ich uvádza, ako to formát BCF umožňuje, ale nástroj s vlastnými pevnými zoznamami ich môže namapovať alebo ignorovať.
- **Import prináša komentáre, nie pohľady na model.** {{ui:Importovať BCF}} pridá odpovede a stavy k poznámkam, ktoré ste exportovali, a vytvorí poznámky k ostatným problémom; nedokáže zobraziť kameru modelu. Pozri [Zoznam poznámok a export](topic:markups-list-and-export#import-bcf).
- Pri revíziách výkresov je často jednoduchšie poslať poznámky späť ako PDF. BCF slúži na to, aby sa pripomienky k výkresom dostali do postupu koordinácie modelu.

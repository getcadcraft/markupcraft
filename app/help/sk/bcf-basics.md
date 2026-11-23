---
title: Základy BCF
summary: Čo obsahuje export BCF z MarkupCraft, ako ho používať s nástrojmi na koordináciu BIM a aké má obmedzenia.
keywords: bcf, bcfzip, formát spolupráce BIM, problémy, koordinácia, kolízia, témy, pohľad, snímka, openbim, buildingsmart, exportovať problémy
from: 0de26175
---

BCF (BIM Collaboration Format) je otvorený súborový formát na odovzdávanie problémov medzi nástrojmi BIM. Mnohé programy na koordináciu a tvorbu modelov dokážu importovať súbor `.bcfzip` ako zoznam problémov. MarkupCraft zapisuje **BCF 2.1**.

## Vytvorenie súboru

1. Otvorte kartu {{ui:Poznámky}}.
2. Sfiltrujte zoznam podľa toho, čo chcete odoslať, napríklad {{ui:Stav}} "Otvorené". Exportujú sa iba uvedené poznámky.
3. Vyberte {{ui:BCF}}.
4. Počkajte, kým sa vytvoria snímky každej poznámky ("Vytváranie snímok pre BCF (5 z 20)…").

Výsledok: súbor "<name> markups.bcfzip" sa stiahne a stavový riadok uvedie, koľko tém obsahuje a aká je jeho veľkosť.

## Čo je v súbore

Každá poznámka sa stane jednou **témou**:

| Pole témy | Obsah |
|---|---|
| Názov | Číslo nedostatku, predmet a list, napríklad "#4 Oblak na A-101 — Pôdorys" |
| Typ | Druh poznámky (Oblak, Bublina, Dĺžka…) |
| Stav | Otvorené, Prijaté, Zamietnuté alebo Dokončené |
| Štítky | Druh poznámky a list |
| Autor a dátumy | Autor poznámky, dátumy vytvorenia a poslednej úpravy |
| Pridelené, termín | Z jej položky zoznamu nedostatkov, ak ju má |
| Popis | Jej text alebo znenie pečiatky, nameraná hodnota, komentár, list a súbor |
| Komentáre | Jeden na každú odpoveď, s autorom a dátumom |
| Snímka | Obrázok poznámky na jej časti listu |
| Pohľad | Pohľad zhora na miesto poznámky na liste |

Export tej istej poznámky znova dá rovnaké ID témy, takže nástroj, ktorý importuje BCF, ju môže rozpoznať ako ten istý problém.

## Čo sa vráti pri importe

{{ui:Importovať BCF}} číta súbory BCF 2.0, 2.1 a 3.0 (overené na 19 oficiálnych testovacích súboroch buildingSMART 3.0: každá téma bola prečítaná a komentáre troch z nich, ktoré majú text). Pri téme, ktorá je vaša (rovnaké ID témy), pridá nové komentáre ako odpovede a prevezme nový stav. Každá iná téma sa stane poznámkou na liste, ktorý uvádza jej štítok alebo názov súboru, inak na otvorenom liste. Jej názov, popis, pridelenie a termín sa stanú textom poznámky a jej komentáre sa stanú odpoveďami.

| V téme BCF | V MarkupCraft |
|---|---|
| Názov, popis, pridelenie, termín | Text poznámky |
| Komentáre s textom | Odpovede |
| Stav Open, Accepted, Rejected, Completed (Closed, Resolved, Done sa počítajú ako Completed) | Stav poznámky |
| Autor a dátum vytvorenia | Autor a dátum poznámky |
| Pozícia kamery | Miesto na liste, iba pre tému priradenú k listu štítkom alebo názvom súboru |
| Výber modelu, skryté časti, orezové roviny, snímky | Neuchováva sa: list nemá model, v ktorom by sa zobrazili |

## Obmedzenia

- **List nie je model.** Pohľad ukazuje na polohu poznámky na papieri, meranú v metroch papiera. Nepresunie nástroj BIM na miesto v modeli. Na nájdenie miesta použite snímku a názov listu.
- **Stavy a typy sú vlastné pre MarkupCraft** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Súbor ich deklaruje, ako to BCF umožňuje, ale nástroj s vlastnými pevnými zoznamami ich môže namapovať alebo ignorovať.
- **Import prináša komentáre, nie pohľady na model.** {{ui:Importovať BCF}} pridá odpovede a stavy k poznámkam, ktoré ste exportovali, a ostatné problémy zapíše ako poznámky. Nedokáže zobraziť kameru modelu. Pozrite si [Zoznam poznámok a export](topic:markups-list-and-export#import-bcf).
- Pri revíziách výkresov je často jednoduchšie poslať poznámky späť ako PDF. BCF slúži na prenos pripomienok k výkresom do pracovného postupu koordinácie modelov.

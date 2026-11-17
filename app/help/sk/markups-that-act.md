---
title: Vytvorenie úlohy z poznámky
summary: Priraďte poznámke riešiteľa (osobu alebo vášho asistenta), termín a prepojenie na výkres alebo prvok modelu, ktorého sa týka, a sledujte, ako sa úloha uzavrie, keď sa to naozaj zmení.
keywords: úloha, úlohy, riešiteľ, asistent, termín, po termíne, prepojenie, uzavrie, zmena, prvok, oblasť výkresu, poznámky, ktoré konajú, MCP
from: 9e970202
---

Úloha je poznámka, ktorú musí niekto vykonať. Zachová si svoje miesto na liste a svoje vlákno a pridá názov, riešiteľa, termín, stav a, ak chcete, prepojenie na vec, ktorej sa týka.

## Vytvorenie úlohy

1. Vyberte jednu alebo viac poznámok.
2. Otvorte kartu {{ui:Úlohy}} a vyberte {{ui:Urobiť z vybraného úlohu}}.
3. Vyplňte názov (začína textom poznámky), pre koho je ({{ui:Osoba}} alebo {{ui:Asistent}}, a meno), voliteľný termín a na čo dávať pozor.

Asistentská úloha je práca pre asistenta, ktorého ste pripojili k MarkupCraft (pozri [Použitie MarkupCraft s AI asistentom](topic:use-with-ai-assistants)). MarkupCraft nemá vlastného asistenta: iba zoznamuje prácu a prijíma odpovede asistenta. Ak vyberiete {{ui:Pridelené}} a potom {{ui:Asistent}} v zozname, uvidíte, čo na neho čaká.

## Sledovanie zmeny

- **Výkres v poznámke.** MarkupCraft uchováva čiary vnútri rámčeka poznámky tak, ako sú teraz. Keď otvoríte novšiu revíziu toho listu (druhý súbor s rovnakým číslom listu alebo rovnakou pozíciou strany), vyberte {{ui:Skontrolovať teraz}}: ak sa čiary v tejto oblasti líšia o viac než o vlas, úloha sa uzavrie.
- **Prvok modelu.** Zadajte aplikáciu a id prvku. Váš asistent prečíta prvok vlastnými nástrojmi druhej aplikácie a nahlási ho pomocou `tasks_check`. Prvá správa sa uchová ako východiskový stav; neskoršia správa, ktorá sa líši, úlohu uzavrie. Prvok, ktorý bol zmazaný, ju tiež uzavrie.
- **Nič.** Obyčajná úloha, ktorú dokončíte ručne.

Uzavretá úloha je označená ako Hotovo, jej poznámka sa stane Dokončená a vo vlákne je poznámka, čo sa zmenilo. Jeden krok späť ju znovu otvorí.

**Obmedzenie:** kontrola predpokladá, že novšia revízia používa rovnaký počiatok strany a rovnakú veľkosť strany. List znovu vykreslený v inej veľkosti sa nezhoduje, takže jeho úlohy sa neuzavrú. Listy sa párujú podľa čísla listu, inak podľa pozície strany; MarkupCraft neškáluje jednu revíziu, aby zapadla do druhej.

Opätovné vykreslenie toho istého výkresu s novým dátumovým pečiatkom alebo čiary, ktoré sa posunuli menej než o 1.5 bodu, sa nepočíta ako zmena. Ak nie je otvorená novšia revízia, úloha zostane otvorená a stavový riadok to povie.

## Zoznam

Zoznam {{ui:Úlohy}} možno filtrovať podľa stavu a podľa toho, pre koho je, vrátane {{ui:Po termíne}}. Úloha po termíne sa zobrazí v paneli Problémy ako upozornenie. {{ui:CSV}} exportuje zoznam.

Úlohy sa ukladajú do PDF spolu s poznámkou a cestujú cez funkciu naživo spolu s ostatnými vlastnosťami poznámky.

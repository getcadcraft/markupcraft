---
title: Vyčistenie ťahov pera a import pripomienok a postupu na stavbe
summary: Premeňte voľné ťahy pera na úsečky, kružnice, oblúky a obdĺžniky; importujte pripomienky z balíka povolení a postup na stavbe ako poznámky.
keywords: pero, voľná ruka, vyčistiť, narovnať, kružnica, úsečka, obdĺžnik, oblúk, povolenie, pripomienky, postup, dron, sken, zameranie, poznámky, csv
from: 547d8e42
---

## Vyčistenie ťahov pera

Kreslite pomocou {{ui:Pero}} a potom otvorte ponuku {{ui:Viac}} v skupine Úpravy a zvoľte {{ui:Vyčistiť ťahy pera}}. Každý vybraný ťah pera sa zmení na to, čím mal byť: rovný ťah sa stane úsečkou (presne vodorovnou alebo zvislou, ak mu to bolo blízko), okrúhly ťah elipsou, časť kružnice oblúkom, uzavretý štvorvrcholový tvar obdĺžnikom, všetko ostatné lomenou čiarou alebo mnohouholníkom. Voľné konce ťahov nakreslených spolu sa pritiahnu k sebe. Ak nie je vybraný žiadny ťah pera, vyčistia sa všetky ťahy pera na otvorenom liste. Je to jeden krok späť: Ctrl+Z obnoví pôvodný voľný ťah. Tvar sa určuje na vašom počítači podľa pevných pravidiel; nič sa nikam neodosiela.

## Import pripomienok k revízii

Balík povolení v BimCraft obsahuje `01-review-comments.csv`: pripomienky, ktoré pravdepodobne urobí kontrolór plánov, každá s pravidlom, ustanovením, tým, čo je potrebné, čo sa zistilo a čo treba urobiť. Na karte {{ui:Úlohy}} otvorte {{ui:Pripomienky k povoleniu}} a zvoľte {{ui:Priniesť pripomienky (CSV)}}. Každá pripomienka sa stane otvorenou poznámkou v stĺpci pri ľavom okraji otvoreného listu; potiahnite každú na miesto, ktorého sa týka. Sú vypočítané z existujúcich kontrol, nie kontrolórom plánov.

## Priniesť uzlové boxy HAZOP

Doplnok P&ID pre CadCraft kreslí uzly štúdie HAZOP a môže ich uložiť ako {{ui:Uzlové boxy HAZOP}} (súbor JSON). Otvorte tu vytlačený list P&ID, prejdite na kartu {{ui:Úlohy}}, otvorte {{ui:Uzlové boxy HAZOP}} a zvoľte {{ui:Importovať uzlové boxy (JSON)}}. Každý uzol sa stane otvoreným obdĺžnikom na liste s číslom, názvom, zariadením a potrubiami v texte a zistenia sa zapisujú ako odpovede na ňom. List sa berie ako vytlačený v plnej veľkosti od ľavého dolného rohu výkresu; ak bol vytlačený v inej mierke, najprv zadajte toto číslo do "Vytlačené v mierke" (0.5 pre 1:2). Uzol, ktorý leží mimo strany, sa nenakreslí a panel uvedie, koľko ich je. Značky slúžia ako pomôcka pri štúdii: ukazujú, kde sú uzly, nehodnotia štúdiu.

## Priniesť postup na stavbe

CivilCraft vedie riadok pre každý let dronu alebo sken stavby. Na karte {{ui:Úlohy}} otvorte {{ui:Postup na stavbe}} a zvoľte {{ui:Priniesť postup (JSON)}}. Každé zameranie sa stane poznámkou na otvorenom liste, ktorá uvádza, koľko je hotové, čo zostáva vykopať alebo zasypať, čo bolo prehĺbené alebo prenasypané a čo presahuje plán. Zameranie s niečím mimo plánu zostane Otvorené; čisté zameranie je Prijaté.

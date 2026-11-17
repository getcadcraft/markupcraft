---
title: Čo ešte nie je hotové
summary: Čo tento build aplikácie MarkupCraft zatiaľ nerobí a čo môžete robiť namiesto toho.
keywords: chýbajúce, plán, plánované, obmedzenie, nepodporované, pripravuje sa, žiadosť o funkciu, relácie, cloud, digitálny podpis, webové odkazy
from: 0872fede
---

MarkupCraft je vo vývoji. Toto je zoznam toho, čo aktuálny build **nerobí**, aby ste si mohli naplánovať prácu. Popisuje dnešný build, nie sľuby.

## Práca s ďalšími ľuďmi

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Cloudové ukladanie a synchronizácia medzi počítačmi | Uchovávajte PDF spolu so súbormi projektu. Cloudové ukladanie zatiaľ nie je k dispozícii. |
| Zlučovanie kópií značiek dvoch ľudí | Rozdeľte listy medzi recenzentov, alebo skopírujte pár značiek pomocou {{key:Mod+C}} a {{key:Mod+V}}. RFI, podklady na schválenie a denné záznamy sa zlučujú: pozrite [Sledovanie RFI, podkladov na schválenie a denných záznamov](topic:field-records). |
| Tímy, upozornenia a cloudové projekty pre RFI a podklady na schválenie | Odošlite PDF ďalej a na zlúčenie kópií použite Zlúčiť. |
| RFI, podklady na schválenie a denné záznamy v relácii naživo | Každý pracuje na vlastnej kópii; kópie zlúčte pomocou {{ui:Zlúčiť}}. |
| Zlučovanie zmien dvoch ľudí v rôznych poliach jedného záznamu | Kópia, ktorá sa zmenila naposledy, prepíše záznam ako celok (jej vlákno a názvy príloh sa spoja). Dohodnite sa, kto upravuje ktorý záznam. |
| Asistentské nástroje pre RFI, podklady na schválenie a denné záznamy | Pracujte s nimi na karte {{ui:Terén}}. Asistenti môžu pracovať so značkami: pozrite [Používanie MarkupCraft s AI asistentom](topic:use-with-ai-assistants). |
| Úprava alebo mazanie odpovede po odoslaní | Ihneď použite {{ui:Späť}}, alebo pridajte opravnú odpoveď. |
| Zmena autora značky | Nastavte si meno pred začatím práce. |

## Značky

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Pečiatky s vyplniteľnými poľami, certifikované digitálne podpisy | Použite vlastnú textovú pečiatku, ktorá obsahuje vaše meno a dátum, alebo obrázok svojho podpisu. |
| Pripájanie iných súborov ako fotografií (dokumenty, videá) | Uchovávajte ich spolu s PDF a odvolajte sa na ne v komentári. |
| Odkazy na webové stránky alebo na súbory, ktoré nie sú otvorené | Napíšte adresu alebo názov súboru do komentára. |
| Vlastné sady stavov | Použite štyri stavy a na všetko ďalšie predmet. |
| Úprava komentárov, ktoré prišli so súborom ako len na čítanie (zvýraznenia textu, pečiatky iných programov) | Odpovedzte na ne, alebo nakreslite značku MarkupCraft vedľa nich. |
| Ťahy pera citlivé na tlak | Nastavte hrúbku čiary. |

## Obsah strany

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Kreslenie nových tvarov priamo do strany | Nakreslite ich ako značky a potom použite {{ui:Vložiť do strany}}. Pozrite [Zmena vlastného obsahu strany](topic:page-content). |
| Otáčanie objektov strany do ľubovoľného uhla | Presúvajte a meňte veľkosť; celú stranu otočte pomocou {{ui:Strany}}. |
| Zmena písma alebo veľkosti riadku textu, alebo textu, ktorý prechádza na viac riadkov | Meňte slová po jednom riadku; pre nový text v inom písme pridajte textovú značku. |
| Úprava obsahu naskenovaného obrázka | Nahraďte obrázok, alebo ho označte. |
| Úprava zašifrovaných alebo podpísaných PDF | Požiadajte o nepodpísanú kópiu; značky fungujú na akomkoľvek PDF. |

## Meranie

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Meranie polomeru | Nakreslite pozdĺž neho {{ui:Oblúk}}, alebo zmerajte {{ui:Dĺžka}} cez celú šírku a vydeľte ju dvoma. |
| Úprava rohov výrezu | Odstráňte výrezy a nakreslite ich znova. |
| Použitie jednej mierky na viac listov naraz | Kalibrujte každý list; výber predvoľby trvá niekoľko sekúnd na list. |
| Viac mierok na jednom liste (výrezy) | Kalibrujte podľa výkresu, ktorý meriate najčastejšie. Zmena mierky listu prepočíta všetky merania na ňom, preto si pred prekalibrovaním zapíšte hodnoty detailov. |
| Prichytávanie k čiaram vo výkrese | Priblížte pred kliknutím, alebo zadajte dĺžky a uhly (pozrite [Náčrt v mierke](topic:calibrate-and-measure#sketch-to-scale)). |
| Úplný výkaz výmer s položkami, zostavami a cenami | Použite TakeoffCraft, aplikáciu na výkaz výmer z rodiny CadCraft. |

## Listy a súbory

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Vrátenie zmeny strany (otočenie, presun, vloženie, zmazanie) | Zatvorte bez uloženia a znova otvorte pôvodné PDF. Pozrite [Tlač a zmena strán](topic:pages-and-printing). |
| Zatvorenie jedného súboru zo súboru listov | {{ui:Zavrieť}} zatvorí celý súbor listov; znova otvorte súbory, ktoré potrebujete. |
| Uloženie súboru listov ako projektu, ktorý sa otvorí jedným krokom | Znova otvorte rovnaké PDF. |
| Tlač v zvolenej mierke alebo viacerých listov na jeden papier | Použite tlačový dialóg prehliadača, alebo vytlačte uloženú kópiu z iného prehliadača PDF. |

## Zoznamy a exporty

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Umiestnenie importovaných problémov BCF na ich pozíciu v modeli | Importované problémy, ktoré nie sú naviazané na žiadny list, sú zhromaždené vľavo hore: presuňte ich. |
| Import sád nástrojov z iných programov na značkovanie | Znova vytvorte potrebné nástroje a uložte ich do truhlice; na použitie v kancelárii ju exportujte. |

## Porovnanie

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Porovnanie textu sadzeného v písme alebo zoznamu zmien | Použite prekrytie a posuvník, alebo {{ui:Zmenené čiary}} pre nakreslené čiary. |
| Porovnanie naskenovaných listov podľa ich čiar | Použite prekrytie obrázkov. |
| Automatické zarovnanie každej dvojice pri porovnaní celého súboru | Porovnajte posunutú dvojicu samostatne a použite {{ui:Zarovnať podľa dvoch bodov}}. |

## Panely

| Ešte nie je hotové | Čo urobiť dnes |
|---|---|
| Presúvanie panela nástrojov alebo stavového riadku | Presúvajú sa iba dva bočné panely. |

## Platformy

- **Desktop:** MarkupCraft beží v prehliadači na Macu, Windows, Linuxe a iPade a v CadCraft Studio, desktopovej aplikácii so všetkými ôsmimi aplikáciami v jednej inštalácii.
- MarkupCraft je vo vývoji. Popisy a správanie sa môžu ešte zmeniť a táto pomoc sa zmení spolu s nimi.

---
title: Novinky vo verzii 0.7
summary: RFI, predkladané podklady a denníky v novej karte Terén, s termínmi, červeným označením po termíne, CSV a BCF, prácou offline a zlúčením; asistenti, ktorí nastavujú stavy, odpovedajú a exportujú zoznam; zoznamy jednotiek podľa Nastavení; panely, ktoré sa skladajú, a presúvateľné dialógové okná.
keywords: novinky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, terén, záznamy z terénu, rfi, žiadosť o informácie, predkladaný podklad, denník, stavebný denník, po termíne, termín, pridelené mne, ihla, zlúčiť, offline, tablet, bcf, csv, asistent, mcp, stav poznámky, odpoveď, export, jednotky, zoznamy jednotiek, hviezdička, kalibrovať, kompaktná, panely, dialógové okná, portugalčina
from: 142e1a1e
---

Toto sa zmenilo v MarkupCraft 0.7 oproti 0.6. Hlavnou novinkou sú záznamy z terénu: RFI, predkladané podklady a denníky uložené v PDF vedľa Vašich poznámok.

## Nové

### RFI, predkladané podklady a denníky

- **Karta Terén.** Otvorte kartu {{ui:Terén}} a vyberte {{ui:RFI}}, {{ui:Predkladaný podklad}} alebo {{ui:Denník}}. Ťuknite alebo kliknite na list, kam RFI alebo predkladaný podklad patrí, a ihla označí miesto; denník sa vloží na otvorený list bez ihly ({{ui:Umiestniť ihlu}} ju pridá neskôr, {{ui:Presunúť ihlu}} presunie ľubovoľnú ihlu). Každý záznam má vlastné číslo (RFI-0001, SUB-0001, LOG-0001), názov, text, stav, zodpovednú osobu, termín, vlákno odpovedí a zoznam názvov príloh. Pozrite [Sledovanie RFI, predkladaných podkladov a denníkov](topic:field-records).
- **Vidieť, čo mešká.** Zoznam filtrujte podľa typu, stavu, termínu (po termíne, termín do 7 dní, má alebo nemá termín), tohto listu alebo všetkých listov, textového vyhľadávania alebo {{ui:Pridelené mne}}. Záznam po termíne, ktorý stále čaká, je označený **Po termíne**, červenou, v zozname aj na svojej ihle. Pozrite [Nájdenie dôležitého](topic:field-records#find-what-matters).
- **CSV a BCF.** {{ui:CSV}} zapíše uvedené záznamy ako tabuľku; {{ui:BCF}} ich zapíše ako témy BCF, každú s náhľadom svojho miesta na liste. Oba sa riadia filtrami. Pozrite [Export](topic:field-records#export).
- **Offline a dve kópie splynú do jednej.** Záznamy sa ukladajú do PDF a nepotrebujú sieť, takže tablet na stavbe ich môže pridávať, zodpovedať a ukladať. Po návrate do kancelárie {{ui:Zlúčiť}} pripojí záznamy z inej kópie toho istého PDF podľa ich identifikátorov, ako jeden krok späť. Pozrite [Uloženie, offline a zlúčenie kópií](topic:field-records#save-offline-and-merging-copies).

### Asistenti s umelou inteligenciou

- **Viac, čo asistent zvládne.** Váš vlastný asistent, pripojený cez CadCraft Studio, teraz môže nastaviť stav poznámky (`markup_status`, zapíše sa do jej vlákna), odpovedať vo vlákne (`markup_reply`) a exportovať zoznam {{ui:Poznámky}} ako CSV alebo BCF (`markups_export`, to, čo zoznam ukazuje s jeho filtrami). Každá zmena je jeden krok späť, podpísaný menom asistenta. Pozrite [O čo môže asistent požiadať](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## V každej aplikácii

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami podľa definícií jednotiek (americká geodetská stopa je samostatná jednotka). Vypnite jednotky, ktoré nikdy nepoužívate, a zmiznú zo zoznamov jednotiek; označte jednu hviezdičkou a nová práca sa začne v nej. Súbor si vždy ponechá vlastnú jednotku. V MarkupCraft sa jednotky merania a polohy v {{ui:Nastavenia}} › {{ui:MarkupCraft}} a jednotka v dialógovom okne kalibrácie riadia týmito prepínačmi, hviezdička určuje jednotku merania, kým neuložíte vlastné nastavenia MarkupCraft, a skutočná vzdialenosť, ktorú pri kalibrácii napíšete, môže mať značku ľubovoľnej jednotky, napríklad `3 yd` alebo `1.5 km`. Pozrite [Jednotky, zadávané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa skladajú.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} sa zmestí viac na obrazovku (dotykové obrazovky a telefóny si ponechávajú veľké tlačidlá). Každý bočný panel má úzky záhlavný pruh: potiahnutím ho ukotvíte alebo uvoľníte, pustením na pruh iného panela ho zdieľate v jednom ráme ako karty, pripnutím ho necháte vsunúť sa k okraju alebo ho skryjete a vrátite z okraja. Pozrite [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógové okná sa presúvajú.** Dialógové okno potiahnite za záhlavie mimo výkresu; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na záhlavie ho znova vycentrujete. Pozrite [Presunutie dialógového okna](common:arrange-panels#move-a-dialog).
- **Recepty pre asistentov s umelou inteligenciou.** Desať prepracovaných požiadaviek pre Vášho vlastného asistenta (upratať výkres, vykresliť sadu, skontrolovať výkresy, klásť modelu otázky, spočítať výkaz výmer, vyskúšať variant súčiastky …), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá prehraná našimi testami. Aplikácie neobsahujú žiadnu umelú inteligenciu. Pozrite [Recepty pre asistentov s umelou inteligenciou](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Tento jazyk, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz každé slovo aplikácií, ako koncepty, ktoré ešte neskontroloval rodený hovorca. Témy pomocníka sú v angličtine.
- **CadCraft Studio** hovorí, prečo kontrola aktualizácií zlyhala (zatiaľ žiadny súbor pre Váš systém, žiadna sieť, neplatný podpis) namiesto samotného „Hotovo“, a prestane vracať kartu Novinky, ktorú ste zavreli, kým nie je novšie vydanie.

## Zatiaľ nie je vo verzii

- **0.7 nie je podpísaná kódom.** Podpisovanie a balík pre Microsoft Store sa presunuli do 0.8, pretože overenie certifikátu zatiaľ neprebehlo. Skontrolujte SHA-256 vedľa každého súboru na getcadcraft.com/download. Ak inštalátor vo Windows zastaví SmartScreen, vyberte {{ui:Ďalšie informácie}} a potom {{ui:Spustiť aj tak}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a vyberte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v žiadnom obchode s aplikáciami a zatiaľ neexistuje verzia pre iPad ani iPhone.
- Zoznamy uhlov a sklonov v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich nečíta žiadne pole.
- Záznamy z terénu sa nezdieľajú v živej relácii CadCraft Studio (živé relácie prenášajú len poznámky); kópie spojte pomocou {{ui:Zlúčiť}}.
- Zlúčenie preberie záznam ako celok z kópie zmenenej naposledy: ak dvaja ľudia zmenili rôzne polia jedného záznamu, vyhrajú polia neskoršej kópie. Vlákna a názvy príloh sa spoja.
- Prílohy sú len názvy; súbory zostávajú tam, kde sú. Pre záznamy neexistujú tímy, upozornenia ani cloudové projekty a asistenti zatiaľ nemajú nástroje pre záznamy.
- Záznamy z terénu boli testované v prehliadači vo veľkosti telefónu a tabletu s odpojenou sieťou, ale zatiaľ nie ručne na skutočnom tablete.
- Stále z 0.6: otáčanie objektov strany do ľubovoľného uhla, kreslenie nových tvarov priamo do strany, zmena písma alebo veľkosti riadku a text, ktorý sa zalamuje na viac riadkov. Uložená kópia so zmenami strán sa zatiaľ neotvorila v Acrobate.
- Stále z 0.5: vrátenie zmeny strany (napríklad pridania prázdnej strany), čítanie textu zo skenovaných listov a živé relácie mimo Vašej vlastnej siete.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet).

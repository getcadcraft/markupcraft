---
title: Novinky vo verzii 0.7 (staršie)
summary: RFI, predkladané podklady a denníky v novej karte Terén, so termínmi, premeškaním označeným červenou farbou, CSV a BCF, práca offline a zlúčenie; asistenti, ktorí nastavujú stavy, odpovedajú a exportujú zoznam; zoznamy jednotiek, ktoré nasledujú Nastavenia; panely, ktoré sa dajú zbaliť, a dialógy, ktoré sa dajú presúvať.
keywords: novinky 0.7, staršie vydanie, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, terén, záznamy terénu, rfi, žiadosť o informácie, predkladaný podklad, denník, denník stavby, po termíne, termín, pridelené mne, ihla, zlúčiť, offline, tablet, bcf, csv, asistent, mcp, stav značky, odpoveď, export, jednotky, zoznamy jednotiek, hviezdička, kalibrovať, kompaktné, panely, dialógy, portugalčina
from: f8578677
---

Toto je zmena vo verzii MarkupCraft 0.7 oproti 0.6. Hlavnou novinkou sú záznamy terénu: RFI, predkladané podklady a denníky uložené v PDF vedľa vašich poznámok.

## Nové

### RFI, predkladané podklady a denníky

- **Karta Terén.** Otvorte kartu {{ui:Field}} a zvoľte {{ui:RFI}}, {{ui:Submittal}} alebo {{ui:Daily log}}. Ťuknite alebo kliknite na list, kde patrí RFI alebo predkladaný podklad, a ihla označí miesto; denník sa pridá na otvorený list bez ihly ({{ui:Place pin}} pridá ihlu neskôr, {{ui:Move pin}} presunie ľubovoľnú ihlu). Každý záznam má vlastné číslo (RFI-0001, SUB-0001, LOG-0001), názov, text, stav, pridelenú osobu, termín, vlákno odpovedí a zoznam názvov príloh. Pozri [Sledovanie RFI, predkladaných podkladov a denníkov](topic:field-records).
- **Zistite, čo mešká.** Filtrujte zoznam podľa typu, stavu, termínu (po termíne, do 7 dní, s termínom alebo bez termínu), tento list alebo všetky listy, textového hľadania alebo {{ui:Assigned to me}}. Záznam po termíne, ktorý stále čaká, je v zozname aj pri svojej ihle označený **Po termíne** červenou farbou. Pozri [Nájdenie dôležitého](topic:field-records#find-what-matters).
- **CSV a BCF.** {{ui:CSV}} zapíše vypísané záznamy ako tabuľku; {{ui:BCF}} ich zapíše ako témy BCF, každú so snímkou svojho miesta na liste. Obe nasledujú filtre. Pozri [Export](topic:field-records#export).
- **Offline a dve kópie v jednu.** Záznamy sa ukladajú v PDF a nepotrebujú sieť, takže tablet na stavbe ich môže pridávať, na ne odpovedať a ukladať ich. Späť v kancelárii {{ui:Merge}} spojí záznamy inej kópie toho istého PDF podľa ich identifikátorov ako jeden krok späť. Pozri [Ukladanie, offline práca a zlúčenie kópií](topic:field-records#save-offline-and-merging-copies).

### AI asistenti

- **Viac vecí, ktoré asistent zvládne.** Váš vlastný asistent pripojený cez CadCraft Studio môže teraz nastaviť stav značky (`markup_status`, zaznamenaný vo vlákne), odpovedať vo vlákne (`markup_reply`) a exportovať zoznam {{ui:Markups}} ako CSV alebo BCF (`markups_export`, to, čo zoznam ukazuje s filtrami). Každá zmena je jeden krok späť a podpísaná menom asistenta. Pozri [Čo môže asistent požadovať](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} má pre dĺžku, plochu, objem, uhol a sklon zoznam každý zvlášť, s presnými veľkosťami podľa definícií jednotiek (americká prieskumnícka stopa je vlastná jednotka). Vypnite jednotky, ktoré nepoužívate, a zmiznú zo zoznamov; označte jednu hviezdičkou a nová práca sa v nej začne. Súbor si vždy ponechá svoju jednotku. V MarkupCraft merané jednotky a jednotky polohy v {{ui:Settings}} › {{ui:MarkupCraft}} a jednotka v dialógu kalibrácie nasledujú prepínače; hviezdička nastaví jednotku merania, kým neuložíte vlastné nastavenia MarkupCraft. Reálna vzdialenosť, ktorú pri kalibrácii zadáte, môže mať označenie ľubovoľnej jednotky, napríklad `3 yd` alebo `1.5 km`. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa zbalia.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} zmestí na obrazovku viac (dotykové obrazovky a telefóny si ponechajú veľké tlačidlá). Každý bočný panel má tenký pruh názvu: potiahnutím ho ukotvíte alebo odpojíte, pustením na pruh iného panela ich spojíte do jedného rámu ako karty, pripnutím sa vysunie k okraju, alebo ho skryjete a vrátite z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógy sa dajú presúvať.** Potiahnite dialóg za pruh názvu mimo kresby; po zatvorení sa vráti tam, kde ste ho nechali. Dvojklikom na pruh názvu ho znovu vycentrujete. Pozri [Presun dialógu](common:arrange-panels#move-a-dialog).
- **Recepty pre AI asistentov.** Desať prepracovaných požiadaviek pre vášho asistenta (upraviť výkres, vykresliť sadu, skontrolovať výkresy, položiť modelu otázky, sčítať výkaz výmer, vyskúšať variant súčiastky…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá zopakovaná našimi testami. Aplikácie neobsahujú žiadnu AI. Pozri [Recepty pre AI asistentov](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Tento jazyk, ako aj **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia**, má teraz všetky slová aplikácií ako koncepty, ktoré ešte nepreskúmal rodený hovoriaci. Pomocné témy sú v angličtine.
- **CadCraft Studio** povie, prečo kontrola aktualizácií zlyhala (ešte nie je súbor pre váš systém, žiadna sieť, zlý podpis), namiesto len „Hotovo“, a neprivádza späť kartu Novinky, ktorú ste zatvorili, kým nebude novšie vydanie.

## Ešte nie v tejto verzii

- **0.7 nie je podpísaná kódom.** Podpisovanie a balík Microsoft Store sa presunuli do 0.8, lebo overenie certifikátu ešte neprišlo. Pri každom súbore skontrolujte SHA-256 uvedený vedľa na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:More info}}, potom {{ui:Run anyway}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Open}}. CadCraft Studio zatiaľ nie je v obchode s aplikáciami a zatiaľ neexistuje zostava pre iPad ani iPhone.
- Zoznamy uhlov a sklonov v {{ui:Units}} sa ukladajú, ale zatiaľ ich nič nečíta.
- Záznamy terénu sa nezdieľajú v relácii naživo v CadCraft Studio (relácie naživo prenášajú len značky); kópie spojte cez {{ui:Merge}}.
- Zlúčenie vezme záznam ako celok z kópie zmenenej naposledy: ak dvaja ľudia zmenili rôzne polia jedného záznamu, platia polia z neskoršej kópie. Vlákna a názvy príloh sa spoja.
- Prílohy sú len názvy; súbory zostávajú tam, kde sú. Pre záznamy nie sú tímy, upozornenia ani cloudové projekty a asistenti zatiaľ nemajú nástroje pre záznamy.
- Záznamy terénu boli testované v prehliadači vo veľkostiach telefónu a tabletu s odpojenou sieťou, ale zatiaľ nie ručne na skutočnom tablete.
- Stále z 0.6: otáčanie objektov strany na ľubovoľný uhol, kreslenie nových tvarov priamo na stranu, zmena písma alebo veľkosti čiary a text tečúci cez viac riadkov. Uložená kópia s úpravami strany ešte nebola otvorená v Acrobate.
- Stále z 0.5: vrátenie zmeny strany (napríklad pridanie prázdnej strany), čítanie textu z naskenovaných listov a živé relácie mimo vašej vlastnej siete.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet).

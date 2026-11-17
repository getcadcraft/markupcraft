---
title: Sledovanie RFI, predkladaných podkladov a denníkov
summary: Pridajte RFI, predkladané podklady a denné záznamy na listy s číslami, pridelenými osobami, termínmi a vláknami; filtrujte položky po termíne; exportujte CSV alebo BCF; pracujte offline a zlučujte kópie.
keywords: rfi, žiadosť o informácie, predkladaný podklad, denný záznam, hlásenie z terénu, stavebný denník, stavba, po termíne, termín, pridelené mne, vlákno, príloha, zlúčiť, offline, tablet, bcf, csv, terén
from: 95039c5a
---

Karta {{ui:Terén}} uchováva tri druhy záznamov vedľa vašich poznámok. Každý je previazaný s listom; RFI alebo predkladaný podklad má navyše ihlu na mieste na liste, ktorého sa týka.

- **RFI**: otázka pre projektový tím. Stavy: Otvorené, Zodpovedané, Uzavreté.
- **Predkladaný podklad**: niečo, čo má byť preskúmané skôr, ako sa pokročí v práci. Stavy: Otvorené, V revízii, Schválené, Schválené s pripomienkami, Upraviť a predložiť znova, Uzavreté.
- **Denný záznam**: počasie daného dňa, počet ľudí na stavbe a vykonané práce. Stavy: Koncept, Finálne.

Každý záznam má vlastné číslo svojho druhu (RFI-0001, SUB-0001, LOG-0001), názov, text, pridelenú osobu, termín, vlákno odpovedí a zoznam názvov príloh.

## Pridanie záznamu

1. Otvorte kartu {{ui:Terén}} a vyberte {{ui:RFI}} alebo {{ui:Predkladaný podklad}}.
2. Klepnite alebo kliknite na list, kam záznam patrí. Objaví sa ihla a záznam sa otvorí na karte.
3. Vyplňte názov, otázku alebo popis, komu je pridelený a kedy je termín.

Denný záznam sa pridáva na otvorený list bez ihly. {{ui:Umiestniť ihlu}} ju neskôr umiestni; {{ui:Presunúť ihlu}} presunie ľubovoľnú ihlu. Klepnutím na ihlu na liste sa otvorí jej záznam.

## Odpovedanie a sledovanie

Zmeňte {{ui:Stav}} a zmena sa zapíše do vlákna. Napíšte odpoveď a vyberte {{ui:Odoslať odpoveď}} (Ctrl+Enter tiež odošle). Prílohy sú iba názvy: napíšte názov alebo vyberte súbory a zoznam ukáže tímu, čo k záznamu patrí. Samotné súbory zostávajú tam, kde sú.

Záznam, ktorého termín uplynul a stále čaká (RFI, ktorá nie je Zodpovedaná ani Uzavretá, alebo predkladaný podklad, o ktorom sa ešte nerozhodlo), je označený na zozname aj pri svojej ihle **Po termíne** červenou farbou.

## Nájdenie podstatných záznamov

Filtre sú nad zoznamom: typ, stav, termín (po termíne, termín o 7 dní, s termínom alebo bez termínu), tento list alebo všetky listy, textové hľadanie a {{ui:Pridelené mne}}, ktoré porovná pridelenú osobu s menom, pod ktorým vás MarkupCraft pozná (pozri [Nastavenie vášho mena](topic:set-your-name)). Riadok pod filtrami počíta, čo sa zobrazuje a čo je po termíne.

## Export

{{ui:CSV}} zapíše vypísané záznamy ako tabuľku. {{ui:BCF}} ich zapíše ako témy BCF, každú so snímkou jej miesta na liste, aby ich mohli vypísať iné nástroje BCF. Oba sa riadia filtrami.

## Uloženie, offline a zlučovanie kópií

Záznamy sa pri uložení ukladajú vnútri PDF a pri otvorení sa znova objavia. Nič nevyžaduje sieť: pridávajte, upravujte, odpovedajte a ukladajte na tablete v suteréne, potom PDF prineste späť. Staršie PDF a PDF z iných programov sa otvoria ako doteraz.

Na spojenie dvoch kópií otvorte jednu a vyberte {{ui:Zlúčiť}}, potom vyberte druhú kópiu toho istého PDF. Záznamy sa spoja podľa svojich identifikátorov:

- záznam, ktorý má len jedna kópia, sa pridá;
- záznam v oboch kópiách prevezme svoje polia (názov, text, stav, pridelenú osobu, termín) z kópie zmenenej naposledy, ako celok, takže ak dvaja ľudia zmenili rôzne polia toho istého záznamu, vyhrá verzia z neskoršej kópie; vlákna a názvy príloh z oboch kópií sa spoja;
- ak obe kópie očíslovali nový záznam rovnako, ten, ktorý prichádza, dostane najbližšie voľné číslo;
- záznam odstránený v jednej kópii zostane odstránený, pokiaľ nebol neskôr upravený.

Zlúčenie sa dá vrátiť jedným krokom späť.

## Obmedzenia

- Záznamy zatiaľ nezdieľa Live TeamWork; použite {{ui:Zlúčiť}}.
- V tejto verzii pre záznamy nie sú tímy, upozornenia ani cloudové projekty.
- Strany odstránené z PDF odstránia aj svoje záznamy (potvrdenie o odstránení strán ich uvedie).

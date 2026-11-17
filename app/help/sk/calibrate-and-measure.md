---
title: Kalibrácia listu a meranie
summary: Nastavte mierku každého listu z predvoľby alebo známej kóty, potom merajte dĺžky, plochy s obvodmi a počty.
keywords: kalibrovať, mierka, nastaviť mierku, merať, dĺžka, vzdialenosť, kóta, plocha, štvorcové stopy, obvod, počet, výkaz výmer, množstvo, pravítko, aritmetika, výpočet, plus, zlomok
from: 49a25c6d
---

Dĺžky a plochy potrebujú poznať mierku listu. MarkupCraft uchováva mierku **pre každý list**: kalibrujte každý list, na ktorom meriate. Počty mierku nevyžadujú.

Stavový riadok zobrazuje mierku aktuálneho listu alebo "Nekalibrované".

## Výber mierky zo zoznamu

Použite to, keď je PDF v plnej veľkosti (list 24 × 36, ktorý sa tlačí v 24 × 36) a výkres uvádza svoju mierku.

1. Kliknite na tlačidlo mierky v stavovom riadku ("Nekalibrované"). Otvorí sa okno "Mierka listu".
2. Pod {{ui:Mierka}} vyberte mierku: architektonickú (1/32" = 1'-0" až 3" = 1'-0"), inžiniersku (1" = 10' až 1" = 100') alebo metrickú (1:1 až 1:1000).
3. Vyberte {{ui:Nastaviť mierku}}.

Výsledok: stavový riadok zobrazí mierku, napríklad `1/4" = 1'-0"`. Architektonické mierky zobrazujú dĺžky v stopách a palcoch, inžinierske mierky v desatinných stopách, metrické mierky až do 1:50 v milimetroch a od 1:100 v metroch.

:::warning
Predvoľba je správna iba vtedy, ak PDF nebolo zmenšené. Sada v polovičnej veľkosti alebo list, ktorý bol pri vytváraní "prispôsobený na stranu", sa s predvoľbou zmeria chybne. Namiesto toho kalibrujte podľa známej kóty a v každom prípade skontrolujte jednu kótu.
:::

## Kalibrácia podľa známej kóty

Použite to pri sadách v polovičnej veľkosti, naskenovaných listoch, detailoch v nestandardných mierkach alebo na kontrolu predvoľby.

1. Nájdite dlhú kótu, ktorej dôverujete, alebo grafickú mierku.
2. Vyberte {{ui:Kalibrovať}} v skupine {{ui:Meranie}} (alebo vyberte {{ui:Vybrať dva body}} v okne "Mierka listu").
3. Kliknite na jeden koniec kóty, potom na druhý. (Alebo potiahnite z jedného konca na druhý.) Na presnosť najprv priblížte; {{key:Shift}} drží čiaru v krokoch po 45°.
4. Okno ukáže, aká je vzdialenosť bodov na papieri, a opýta sa "Aká je v skutočnosti vzdialenosť?". Zadajte {{ui:Skutočná vzdialenosť}}, napríklad `24'-0"`, `12' 6 1/2"`, `7.2 m` alebo `900 mm`.
5. Pod {{ui:Zobrazovať dĺžky v}} vyberte, ako sa dĺžky zobrazia: {{ui:Stopy a palce}}, {{ui:Desatinné stopy}}, {{ui:Palce}}, {{ui:Metre}} alebo {{ui:Milimetre}}.
6. Vyberte {{ui:Nastaviť mierku}}.

Výsledok: stavový riadok zobrazí "Kalibrované: 24'-0" na 1.00 in" (skutočná dĺžka a dĺžka na papieri) a nástroj, ktorým ste chceli merať, sa znova zapne. Všetky spôsoby zadávania dĺžky sú v [Jednotky a mierky](topic:units-and-scales).

Skutočná vzdialenosť môže byť aj malý výpočet: `12'6"+3/4"`, `(24'-0")/3` alebo `2*450mm`. Používajte `+ - * /` a zátvorky; číslo bez jednotky sa počíta v jednotke pod {{ui:Zobrazovať dĺžky v}} (stopy pre {{ui:Stopy a palce}}). {{ui:Nastaviť mierku}} použije výsledok.

Ak MarkupCraft nedokáže prečítať, čo ste zadali, okno to oznámi: 'Toto nie je dĺžka, ktorej MarkupCraft rozumie. Skúste 24'-0", 12' 6 1/2", 7.2 m alebo 900 mm.' Výpočet, ktorý nedokáže vyriešiť, povie, prečo a kde, napríklad "Zátvorka nie je uzavretá (znak 5)."

## Meranie dĺžky

1. Vyberte {{ui:Dĺžka}} ({{key:M}}).
2. Kliknite na začiatok, potom na koniec. Alebo potiahnite od začiatku ku koncu. {{key:Shift}} ju drží v krokoch po 45°.

Výsledok: kótovacia čiara so značkami a dĺžkou na nej. Stavový riadok ju zopakuje ("Dĺžka: 12'-6 1/2" (1/4" = 1'-0")"), a {{ui:Vlastnosti}} ju zobrazí pod {{ui:Dĺžka}}. Stopy a palce sa zaokrúhľujú na najbližšie 1/16".

Ak list ešte nemá mierku, výber {{ui:Dĺžka}} prepne na {{ui:Kalibrovať}} a stavový riadok vysvetlí: "Najprv kalibrujte tento list: vyberte dva body vo známej vzdialenosti od seba alebo vyberte jeho mierku. Potom merajte." Po nastavení mierky sa {{ui:Dĺžka}} vráti.

## Kreslenie v mierke

Na kalibrovanom liste môžete pri kreslení {{ui:Úsečka}}, {{ui:Šípka}}, {{ui:Dĺžka}}, {{ui:Lomená čiara}}, {{ui:Mnohouholník}}, {{ui:Voľný oblak}}, {{ui:Plocha}} alebo priestor zadávať skutočné dĺžky:

1. Kliknite na prvý bod.
2. Ukážte smer ďalšieho úseku a zadajte jeho dĺžku, napríklad `16` (v jednotke listu), `12'6"` alebo `3.5 m`. Pri písaní sa vedľa kurzora otvorí okno.
3. Stlačte {{key:Enter}}. Bod sa umiestni v tej vzdialenosti v smere kurzora.

Ak chcete smer nastaviť presne, pridajte `<` a uhol v stupňoch: `8 < 90` ide 8 stôp rovno nahor, `4<0` doprava, `10 < 225` nadol a doľava, ako je list vidieť (vrátane otočených strán). Pre ďalšie rohy ďalej zadávajte dĺžky a tvar dokončite obvyklým spôsobom. {{key:Esc}} zatvorí okno bez umiestnenia bodu.

## Meranie uhla

1. Vyberte {{ui:Uhol}} ({{key:X}}).
2. Kliknite na koniec jedného ramena, potom na roh a potom na koniec druhého ramena.

Výsledok: dve ramená, malý oblúk v rohu a uhol v stupňoch, na desatinu (0° až 180°). Uhol nevyžaduje mierku. {{ui:Vlastnosti}} ho zobrazí pod {{ui:Uhol}} a zoznam, CSV aj BCF ho obsahujú.

Na kalibrovanom liste {{ui:Oblúk}} ({{key:O}}) zobrazí aj svoju dĺžku po oblúku vo {{ui:Vlastnosti}}.

## Meranie plochy a jej obvodu

1. Vyberte {{ui:Plocha}} ({{key:Q}}).
2. Kliknite na každý roh miestnosti alebo oblasti.
3. Dokončite dvojitým kliknutím, stlačením {{key:Enter}} alebo pravým kliknutím (na dotykovom displeji dvojitým klepnutím). {{key:Backspace}} odstráni posledný roh.

Výsledok: tieňovaný obrys s plochou a "P" s obvodom uprostred, napríklad "128.00 sq ft" a "P 48'-0"". Mierky v stopách dávajú štvorcové stopy, v palcoch štvorcové palce, v metroch štvorcové metre, v milimetroch štvorcové milimetre. Plocha potrebuje aspoň tri rohy.

### Výrezy

Ak chcete vynechať stĺp, šachtu alebo nádvorie, vyberte plochu a vo {{ui:Vlastnosti}} zvoľte {{ui:Pridať výrez}}. Kliknite na rohy výrezu vnútri plochy a dokončite ako pri ploche. Výrez zostane otvorený (bez tieňovania), jeho plocha sa odpočíta a jeho hrany sa pridajú k obvodu: miestnosť 16' × 8' s výrezom 4' × 4' ukáže "112.00 sq ft" a "P 64'-0"". Pridajte toľko, koľko potrebujete; nesmú sa prekrývať ani pretínať obrys plochy. {{ui:Odstrániť výrezy}} ich odstráni všetky a {{key:Mod+Z}} vráti späť jeden z nich.

## Počítanie

1. Vyberte {{ui:Počet}} ({{key:U}}).
2. Vo {{ui:Vlastnosti}} zadajte {{ui:Názov skupiny}}, napríklad "Podlahové vpuste". (Zapamätá sa na ďalší raz.)
3. Kliknite na každú položku na liste.

Výsledok: každé kliknutie pridá očíslovanú bodku, prvá bodka nesie štítok ako "Podlahové vpuste: 7" a stavový riadok udržiava priebežný súčet.

- **Začať ďalšiu skupinu:** stlačte raz {{key:Esc}} (zruší výber), zmeňte {{ui:Názov skupiny}} a kliknite znova.
- **Pridanie do existujúcej skupiny:** najprv vyberte skupinu, potom zvoľte {{ui:Počet}} a kliknite.
- **Odstránenie značky:** pri vybranej skupine podržte {{key:Shift}} a kliknite na bodku. Odstránenie poslednej bodky odstráni skupinu. Na dotykovej obrazovke bez klávesnice použite namiesto toho {{key:Mod+Z}} alebo {{ui:Späť}}.
- **Premenovanie skupiny:** vyberte ju a upravte {{ui:Názov skupiny}} vo {{ui:Vlastnosti}}.

Skupina počtu patrí jednému listu. Počty na viacerých listoch sa v zozname poznámok zobrazia ako oddelené skupiny.

## Zmena alebo odstránenie mierky

Kliknite na tlačidlo mierky v stavovom riadku. Okno zobrazí aktuálnu mierku; vyberte inú, zvoľte {{ui:Vybrať dva body}} alebo zvoľte {{ui:Odstrániť mierku}}.

Už nakreslené dĺžky a plochy sa **zmerajú znova** s novou mierkou okamžite. Späť vráti starú mierku.

## Kam idú čísla

- {{ui:Vlastnosti}} zobrazí hodnoty vybraného merania.
- Karta {{ui:Poznámky}} uvádza každú hodnotu a jej CSV má stĺpec "Meranie". Pozri [Zoznam poznámok](topic:markups-list-and-export).
- Uložené PDF uchováva mierku na strane a zapisuje dĺžky a plochy ako komentáre merania, takže ich môžu zobraziť iné programy pre PDF, ktoré rozumejú meraniam. Pozri [Čo sa ukladá do PDF](topic:what-the-pdf-keeps).

Na úplný výkaz výmer s položkami, zostavami a cenami použite TakeoffCraft: MarkupCraft meria na účely revízie, nie na rozpočtovanie.

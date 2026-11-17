---
title: Vytvorenie zoznamu nedostatkov
summary: Premeňte značky na očíslované položky nedostatkov s pridelenou osobou, termínom a stavom a exportujte zoznam.
keywords: zoznam nedostatkov, nedostatok, zoznam závad, nedostatky, terénne problémy, pozorovanie, priradiť, pridelené, termín, preberanie, prechádzka, číslo
from: b98b38e6
---

Položka nedostatku je značka s číslom, pridelenou osobou, termínom a stavom položky. Číslo sa nakreslí na list vedľa značky, takže vytlačený list a zoznam sa zhodujú.

## Pridanie položiek

1. Označte každý problém na listoch: oblak, popisok, poznámku, čokoľvek.
2. Vyberte jednu alebo viac z nich (pozrite [Výber, presun a úprava značiek](topic:select-and-edit)).
3. Buď otvorte kartu {{ui:Zoznam nedostatkov}} a vyberte {{ui:Pridať vybrané do zoznamu nedostatkov}}, alebo vyberte {{ui:Pridať do zoznamu nedostatkov}} v {{ui:Vlastnosti}}.

Výsledok: každá značka dostane ďalšie číslo (1, 2, 3…), v poradí listov a potom v poradí, v akom boli nakreslené. Na liste sa objaví očíslovaný odznak a stavový riadok napíše „Do zoznamu nedostatkov boli pridané položky: 3.“ Značky, ktoré už majú číslo, a komentáre len na čítanie sa preskočia.

## Vyplnenie podrobností

Na karte {{ui:Zoznam nedostatkov}} každá položka zobrazuje číslo, predmet, text, list a stav, s tromi poľami pod ňou. Tie isté polia sú v {{ui:Vlastnosti}} pod „Zoznam nedostatkov“, keď je značka vybratá:

- {{ui:Pridelené}}: meno alebo profesia ako voľný text.
- {{ui:Termín}}: dátum z výberu dátumu.
- {{ui:Stav položky}}: Otvorené, Prebieha, Pripravené na kontrolu alebo Uzavreté.

Kliknutím na nadpis položky na ňu prejdete na jej list.

Stav položky je oddelený od stavu revízie značky (Otvorené, Prijaté, Zamietnuté, Dokončené). Stav položky používajte pre prácu a stav revízie pre komentár.

## Odobratie položky

Vyberte značku a zvoľte {{ui:Odstrániť zo zoznamu nedostatkov}} v {{ui:Vlastnosti}}. Značka zostane; odíde iba číslo. Kým je súbor listov otvorený, čísla sa nepoužívajú znova: ďalšia položka dostane ďalšie nové číslo, takže medzera znamená, že položka bola odobratá. Keď sa súbor znova otvorí, číslovanie pokračuje za najvyšším číslom v ňom.

## Export zoznamu

Vyberte {{ui:Exportovať CSV}} na karte {{ui:Zoznam nedostatkov}}. Dostanete „<name> punch list.csv“ so stĺpcami No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author a Created, zoradenými podľa čísla. Otvorte ho v ľubovoľnom tabuľkovom procesore.

Čísla nedostatkov, pridelené osoby, termíny a stavy položiek sa ukladajú aj do označeného PDF, takže sa vrátia pri ďalšom otvorení. Iné čítačky PDF zobrazujú odznak čísla ako súčasť značky. Export BCF v zozname značiek obsahuje aj pridelenú osobu a termín (pozrite [Základy BCF](topic:bcf-basics)).

## Na stavbe s tabletom

Otvorte súbor listov na iPade, prejdite stavbu a na každý problém vložte {{ui:Poznámka}} alebo nakreslite {{ui:Oblak}}. Pridávajte ich do zoznamu nedostatkov priebežne a pred odchodom uložte. Pozrite [Kontrola na iPade alebo dotykovej obrazovke](topic:review-on-a-tablet).

Zoznam nedostatkov ako naformátovaná správa PDF alebo tabuľka a fotografie priložené k položkám zatiaľ nie sú hotové.

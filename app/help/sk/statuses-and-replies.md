---
title: Stavy a odpovede
summary: Označte každý komentár ako Otvorené, Prijaté, Zamietnuté alebo Dokončené, diskutujte o ňom vo vlákne odpovedí a odovzdajte vlákno ďalej v PDF.
keywords: stav, stav revízie, prijaté, zamietnuté, dokončené, otvorené, odpoveď, odpovede, vlákno, komentár, konverzácia, diskusia, reagovať, spätná kontrola
from: 0f3e8b91
---

Každá poznámka má **stav** a **vlákno odpovedí**. Spolu nesú jedno kolo revízie: revízor označí poznámky, projektant odpovie a nastaví stavy, revízor spätne skontroluje.

## Nastavenie stavu

1. Vyberte poznámku (alebo viac).
2. Vo {{ui:Vlastnosti}} vyberte {{ui:Stav}}: Otvorené, Prijaté, Zamietnuté alebo Dokončené.

Výsledok: stav sa zobrazí ako štítok v zozname {{ui:Poznámky}} a do vlákna sa pridá riadok: "Stav nastavený na Prijaté, nastavil Ana Ruiz." Ak je vybraných viac poznámok, pole stavu zobrazuje "Zmiešané", kým nevyberiete jeden stav, a potom zmení všetky.

Nové poznámky začínajú ako Otvorené. Vložené alebo duplikované poznámky tiež začínajú ako Otvorené.

## Odpoveď

1. Vyberte poznámku.
2. Vo {{ui:Vlastnosti}} nájdite "Odpovede" pod nastaveniami štýlu.
3. Píšte do poľa {{ui:Napíšte odpoveď}}.
4. Vyberte {{ui:Odpoveď}} alebo stlačte {{key:Mod+Enter}}.

Výsledok: odpoveď je uvedená s vaším menom, dátumom a časom a nadpis ju počíta: "Odpovede (3)". Zoznam {{ui:Poznámky}} zobrazuje pri riadku počet odpovedí.

- Zmeny stavu sú uvedené v tom istom vlákne a označené ako záznamy o stave, takže história sa číta v poradí.
- Ak začnete písať odpoveď a kliknete na niečo iné, koncept sa uchová, kým sa nevrátite k tejto poznámke (kým nezatvoríte súbor).
- Ak vaše meno nie je nastavené, MarkupCraft ho pred odoslaním vyžiada.
- Môžete odpovedať aj na komentáre len na čítanie, ktoré prišli so súborom.

:::note
Odpoveď sa po odoslaní nedá upraviť ani zmazať. Hneď po odoslaní ju vrátite stlačením {{key:Mod+Z}}; potom pridajte novú odpoveď, ktorá ju opraví.
:::

## Pridanie fotografie

Pod poľom odpovede pridá {{ui:Pridať fotografiu}} do vlákna obrázok: súbor PNG alebo JPEG z tohto počítača alebo, na tablete alebo telefóne, fotografiu, ktorú tam hneď odfotíte. Čokoľvek ste napísali do poľa odpovede, sa stane jej popiskom. Vlákno zobrazuje miniatúru; kliknutím si ju pozriete v plnej veľkosti. Veľké fotografie sa zmenšia na 1600 pixelov na dlhšej strane.

V uloženom PDF každá fotografia cestuje aj ako priložený súbor pri poznámke (sponka), takže ju môžu otvoriť iné prehliadače PDF.

## Odovzdanie revízie ďalej

Zatiaľ neexistuje zdieľaná online relácia: revízia putuje v PDF.

1. Vyberte {{ui:Uložiť}}. Kópia obsahuje každú poznámku s jej stavom a odpoveďami.
2. Pošlite túto kópiu tak, ako posielate výkresy dnes.
3. Ďalšia osoba ju otvorí v MarkupCraft, odpovie, nastaví stavy a znova uloží.

Iné programy na PDF vidia odpovede ako odpovede na komentár a stavy ako stavy revízie (Prijaté, Zamietnuté, Dokončené; Otvorené sa zobrazí ako žiadny stav). Ich vlastné odpovede a stavy revízie sa vrátia do MarkupCraft pri otvorení súboru: platí najnovší stav.

Ak dvaja ľudia označia oddelené kópie súčasne, zlúčenie neexistuje. Môžete otvoriť obe kópie v jednom súbore a skopírovať niekoľko poznámok pomocou {{key:Mod+C}} a {{key:Mod+V}}, ale vložená kópia je nová poznámka: nesie vaše meno, nový dátum a stav Otvorené a dopadne mierne posunutá. Dohodnite sa, kto označuje ktoré listy, aby ste tomu predišli.

## Nájdenie toho, čo je stále otvorené

Na karte {{ui:Poznámky}} nastavte {{ui:Stav}} na "Otvorené", aby sa zobrazili len otvorené položky, a {{ui:Autor}} na jedného revízora. Pozri [Zoznam poznámok](topic:markups-list-and-export).

Stav (Otvorené, Prijaté, Zamietnuté, Dokončené) sa týka komentára. Položka nedostatku má vlastný samostatný stav pre prácu na stavbe; pozri [Vytvorenie zoznamu nedostatkov](topic:punch-list).

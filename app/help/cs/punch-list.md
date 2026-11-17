---
title: Vytvoření seznamu závad
summary: Proměňte poznámky na očíslované položky závad s přiřazením, termínem a stavem a seznam exportujte.
keywords: seznam závad, závada, seznam nedostatků, nedostatek, zjištění na stavbě, pozorování, přiřadit, přiřazeno, termín, předání stavby, obhlídka, číslo
from: b98b38e6
---

Položka závady je poznámka s číslem, přiřazením, termínem a stavem položky. Číslo se nakreslí na list vedle poznámky, takže vytištěný list a seznam si odpovídají.

## Přidání položek

1. Označte každý problém na listech: oblak, vynášecí text, poznámku, cokoli.
2. Vyberte jednu nebo více z nich (viz [Výběr, přesun a změna poznámek](topic:select-and-edit)).
3. Buď otevřete kartu {{ui:Punch list}} a zvolte {{ui:Add selected to the punch list}}, nebo zvolte {{ui:Add to the punch list}} v {{ui:Properties}}.

Výsledek: každá poznámka dostane další číslo (1, 2, 3…), podle pořadí listů a pak podle pořadí kreslení. Na listu se objeví číslovaný štítek a stavový řádek hlásí "Do seznamu závad bylo přidáno: 3 položky." Poznámky, které už číslo mají, a komentáře jen pro čtení se přeskočí.

## Vyplnění podrobností

Na kartě {{ui:Punch list}} každá položka ukazuje své číslo, předmět, text, list a stav, pod kterými jsou tři pole. Stejná pole jsou v {{ui:Properties}} pod "Seznam závad", když je poznámka vybrána:

- {{ui:Assignee}}: jméno nebo profese, jako volný text.
- {{ui:Due}}: datum z výběru data.
- {{ui:Item status}}: Otevřeno, Probíhá, Připraveno ke kontrole nebo Uzavřeno.

Kliknutím na nadpis položky přejdete na její místo na listu.

Stav položky je oddělený od stavu revize poznámky (Otevřeno, Přijato, Zamítnuto, Dokončeno). Stav položky použijte pro práci a stav revize pro komentář.

## Odebrání položky

Vyberte poznámku a v {{ui:Properties}} zvolte {{ui:Take off the punch list}}. Poznámka zůstane; odejde jen číslo. Dokud je sada otevřená, čísla se nepoužijí znovu: další položka dostane další nové číslo, takže mezera znamená, že položka byla odebrána. Když se soubor znovu otevře, číslování pokračuje za nejvyšším číslem v něm.

## Export seznamu

Na kartě {{ui:Punch list}} zvolte {{ui:Export CSV}}. Dostanete soubor "<name> punch list.csv" se sloupci No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author and Created, seřazenými podle čísla. Otevřete ho v libovolném tabulkovém procesoru.

Čísla závad, přiřazení, termíny a stavy položek se ukládají také uvnitř označeného PDF, takže se po novém otevření vrátí. Jiné prohlížeče PDF zobrazují číselný štítek jako součást poznámky. Export BCF ze seznamu poznámek nese také přiřazení a termín (viz [Základy BCF](topic:bcf-basics)).

## Na stavbě s tabletem

Otevřete sadu na iPadu, projděte stavbu a u každého problému vložte {{ui:Note}} nebo nakreslete {{ui:Cloud}}. Přidávejte je do seznamu závad průběžně a před odchodem uložte. Viz [Kontrola na iPadu nebo dotykové obrazovce](topic:review-on-a-tablet).

Seznam závad jako formátovaná sestava v PDF nebo tabulce a fotografie připojené k položkám ještě nejsou hotové.

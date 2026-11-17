---
title: Poznámka jako úkol
summary: Přiřaďte poznámce příjemce (osobu nebo svého asistenta), termín a odkaz na výkres nebo prvek modelu, o který jde, a sledujte, kdy se uzavře, když se to skutečně změní.
keywords: úkol, úkoly, přiřazení, asistent, termín, po termínu, odkaz, uzavírá, změněno, prvek, oblast výkresu, poznámky, které jednají, MCP
from: 9e970202
---

Úkol je poznámka, kterou musí někdo udělat. Zachovává si své místo na listu a své vlákno a přidává název, příjemce, termín, stav a, pokud chcete, odkaz na věc, o kterou jde.

## Vytvoření úkolu

1. Vyberte jednu nebo více poznámek.
2. Otevřete kartu {{ui:Úkoly}} a zvolte {{ui:Udělat z vybraného úkol}}.
3. Vyplňte název (začíná z textu poznámky), pro koho je ({{ui:Osoba}} nebo {{ui:Asistent}} a jméno), volitelný termín a co sledovat.

Úkol pro asistenta je práce pro asistenta, kterého jste připojili k MarkupCraftu (viz [Použití MarkupCraftu s AI asistentem](topic:use-with-ai-assistants)). MarkupCraft žádného vlastního asistenta nemá: jen vypisuje práci a přijímá odpovědi asistenta. Zvolíte-li {{ui:Přiřazeno}}, pak v seznamu {{ui:Asistent}}, ukáže se, co na něj čeká.

## Sledování změny

- **Výkres uvnitř poznámky.** MarkupCraft si drží čáry uvnitř rámce poznámky tak, jak jsou nyní. Když otevřete novější revizi toho listu (druhý soubor se stejným číslem listu nebo stejnou pozicí stránky), zvolte {{ui:Zkontrolovat nyní}}: pokud se čáry v té oblasti liší o víc než vlásek, úkol se uzavře.
- **Prvek modelu.** Zadejte aplikaci a id prvku. Váš asistent prvek přečte nástroji této jiné aplikace a nahlásí ho pomocí `tasks_check`. První hlášení se uchová jako výchozí stav; pozdější hlášení, které se liší, úkol uzavře. Prvek, který byl smazán, úkol také uzavře.
- **Nic.** Obyčejný úkol, který dokončíte ručně.

Uzavřený úkol je označen jako Hotovo, jeho poznámka se stane Dokončeno a ve vlákně je zpráva, co se změnilo. Jeden krok zpět jej znovu otevře.

**Omezení:** kontrola předpokládá, že novější revize používá stejný počátek stránky a stejnou velikost stránky. List znovu vykreslený v jiné velikosti se neshoduje, takže jeho úkoly se neuzavřou. Listy se páruje podle čísla listu, jinak podle pozice stránky; MarkupCraft jednu revizi nepřizpůsobuje druhé měřítkem.

Znovu vykreslení stejného výkresu s novým datem nebo čáry, které se posunuly méně než o 1.5 bodu, se nepočítají jako změna. Když není otevřena žádná novější revize, úkol zůstane otevřený a stavový řádek to řekne.

## Seznam

Seznam {{ui:Úkoly}} lze filtrovat podle stavu a podle toho, pro koho je, včetně {{ui:Po termínu}}. Úkol po svém termínu se v panelu Problémy ukáže jako varování. {{ui:CSV}} exportuje seznam.

Úkoly se ukládají do PDF spolu s poznámkou a putují přes Live spolu s ostatními vlastnostmi poznámky.

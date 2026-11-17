---
title: Použití MarkupCraftu s asistentem AI
summary: Nechte svého asistenta AI nebo skript vypsat poznámky sady, přidat jednoduché, nastavit jejich stav, odpovědět a exportovat seznam: oprávnění, připojení přes CadCraft Studio a protokol aktivity.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizace, poznámky, revize, oprávnění, odpojení, aktivita
from: 095f2977
---

## Co se naučíte

Jak nechat asistenta AI (nebo skript, který jste napsali) pracovat s MarkupCraftem a jak rozhodnout, čeho se smí dotýkat.

MarkupCraft **nemá vlastní AI** a nikam nic neposílá. Asistenta přinesete vy: jakýkoli program, který mluví protokolem Model Context Protocol (MCP). MarkupCraft mu jen poskytuje nástroje a vy vybíráte, které.

## Zapnutí

1. Otevřete {{ui:Nastavení}} (ozubené kolo v liště aplikace, nebo {{key:Mod+,}}) a přejděte na kartu {{ui:MarkupCraft}}.
2. Pod {{ui:Asistenti}} zaškrtněte **Povolit asistentům AI a skriptům používat MarkupCraft**. Je to vypnuté, dokud to neuděláte.
3. Vyberte, co smí dělat: **Čtení** je zaškrtnuté od začátku; zaškrtněte **Úpravy**, **Uložit** nebo **Exportovat** jen tehdy, když je potřebujete.

Nástroje mimo oprávnění, které jste zaškrtli, asistentovi nebudou nabídnuty, a pokud o některý přesto požádá, MarkupCraft ho odmítne a zapíše do protokolu aktivity. Vypnutí přepínače ukončí všechna připojení najednou; {{ui:Obnovit nastavení MarkupCraftu}} ho vypne také.

## Připojení asistenta

Asistenti se připojují přes **CadCraft Studio** na vašem počítači: Studio spouští malý server, který dosáhne jen tento počítač, chráněný tokenem, který vytvoří pokaždé při spuštění. Ve Studiu zvolte {{ui:Připojit asistenta}} a zkopírujte adresu a token do svého asistenta (Studio ukáže přesné údaje k vložení). Token nikdy nesdílejte.

:::note
Karta prohlížeče nemůže otevřít připojení pro asistenta: ve webových aplikacích přepínač nemá žádný účinek, dokud nepoužijete CadCraft Studio na svém počítači.
:::

## Vy zůstáváte u kormidla

- **Každá změna je jeden krok zpět**, označený jménem asistenta pro ni (například "Asistent: přidat cloudrect"). {{key:Mod+Z}} vrátí poslední změnu asistenta jako celek.
- **Víte, kdy je připojen.** Tlačítko v liště aplikace jmenuje asistenta, dokud je připojen; kliknutím uvidíte, co smí dělat, nebo ho **Odpojíte**.
- **Aktivita.** {{ui:Nastavení}} › {{ui:MarkupCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypíše každé volání: kdy, který nástroj, provedeno nebo odmítnuto. {{ui:Uložit záznam}} uchová kopii.

## Co může asistent požadovat

| Nástroj | Oprávnění | Co dělá |
|---|---|---|
| `app_info`, `sheets_list` | Čtení | Otevřené sady, jejich listy a kolik poznámek má každý |
| `markups_list` | Čtení | Poznámky s typem, listem, textem, komentářem, měřením, stavem, autorem a odpověďmi, filtrované podle listu, stavu, typu nebo autora |
| `markup_add` | Úpravy | Přidá na list obdélník, oblak, elipsu, textové pole, poznámku, čáru nebo šipku |
| `markup_status`, `markup_reply` | Úpravy | Nastaví stav poznámky (zapsaný v jejím vlákně, podepsaný asistentem); přidá komentář do vlákna |
| `markups_export` | Exportovat | CSV nebo BCF seznamu {{ui:Poznámky}} s tím, co seznam ukazuje (jeho filtry podle vašeho nastavení); ve Studiu může zapsat soubor do složky, kterou jste povolili |
| `tasks_list` | Čtení | Poznámky, které jsou úkoly: přiřazení (osoba nebo asistent), den termínu, stav, odkaz, jak se uzavřely. `assignee: "assistant"` vypíše práci čekající na asistenta |
| `task_set`, `task_clear` | Úpravy | Udělají z poznámky úkol nebo ho změní (název, přiřazení, termín, stav, odkaz); úkol zruší |
| `tasks_check` | Úpravy | Uzavře úkoly, jejichž propojená oblast výkresu nebo prvek modelu se skutečně změnily; předejte stavy prvků, které jste přečetli z jiné aplikace |
| `revisions_changes` | Čtení | Prostý seznam toho, co se změnilo mezi dvěma otevřenými sadami listů, pro vaše vlastní vyjádření |
| `pins_list`, `decision_add` | Čtení, Úpravy | Hlasové poznámky (délka, kdo, kdy, popisek; nikdy zvuk, žádný přepis) a rozhodnutí; připněte rozhodnutí a nahraďte dřívější |
| `redline_export`, `redline_answer` | Exportovat, Úpravy | Zapíše soubor redline pro kreslíře; zapracuje odpovědi kreslíře |

Poznámka přidaná asistentem uvádí jako autora jméno, které mu dal jeho program, následované "(asistent)", nebo "(asistent pro <vaše jméno>)", jakmile nastavíte své jméno revizora. Jeho změny stavu a odpovědi jsou podepsány stejným způsobem. Každá je jeden krok zpět. Uložení PDF s poznámkami zůstává na vás: použijte {{ui:Uložit}} jako obvykle.

Bez otevření MarkupCraftu server MCP od CadCraftu vypíše poznámky PDF ve složce, kterou určíte (`markups_list`), a `cadcraft info Set.pdf` je vypíše na příkazovém řádku.

## Když něco nefunguje

- **Asistent nevidí nástroje MarkupCraftu:** zkontrolujte, zda je přepínač v tomto okně zapnutý a zda je okno otevřené ve Studiu.
- **"needs the edit permission":** zaškrtněte **Úpravy** pod {{ui:Asistenti}} a pak se zeptejte znovu. (Zpráva: vyžaduje oprávnění k úpravám.)
- **Chyby "401" nebo "token":** token se změnil (Studio se restartovalo, nebo {{ui:Nový token}}). Zkopírujte nový do nastavení asistenta.

## Viz také

- [Postupy pro asistenty AI](common:assistants-recipes): propracované příklady, každý s nástroji, které volá.

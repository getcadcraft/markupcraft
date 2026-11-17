---
title: Použitie MarkupCraft s AI asistentom
summary: Nechajte svojho AI asistenta alebo skript vypísať poznámky súboru, pridávať jednoduché, nastavovať ich stav, odpovedať a exportovať zoznam: oprávnenia, pripojenie cez CadCraft Studio a záznam aktivity.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizácia, poznámky, revízia, oprávnenia, odpojenie, aktivita
from: 095f2977
---

## Čo sa naučíte

Ako nechať AI asistenta (alebo skript, ktorý ste napísali) pracovať s MarkupCraft a ako rozhodnúť, čoho sa smie dotýkať.

MarkupCraft **nemá vlastnú AI** a nič nikam neposiela. Asistenta prinášate vy: ľubovoľný program, ktorý hovorí cez Model Context Protocol (MCP). MarkupCraft mu len dáva nástroje a vy si vyberiete, ktoré.

## Zapnutie

1. Otvorte {{ui:Nastavenia}} (ozubené koliesko v lište aplikácie alebo {{key:Mod+,}}) a prejdite na kartu {{ui:MarkupCraft}}.
2. Pod {{ui:Asistenti}} zaškrtnite **Povoliť AI asistentom a skriptom používať MarkupCraft**. Dovtedy je to vypnuté.
3. Vyberte, čo smie robiť: **Čítanie** je zaškrtnuté na začiatku; zaškrtnite **Úpravy**, **Uložiť** alebo **Exportovať**, len keď ich potrebujete.

Nástroje mimo oprávnení, ktoré ste zaškrtli, asistentovi nie sú ponúkané, a ak si ich aj tak vyžiada, MarkupCraft ho odmietne a zapíše to do záznamu aktivity. Vypnutie prepínača ukončí naraz každé pripojenie; {{ui:Obnoviť nastavenia MarkupCraft}} ho tiež vypne.

## Pripojenie asistenta

Asistenti sa pripájajú cez **CadCraft Studio** vo vašom počítači: Studio spustí malý server, ktorý dosiahne iba tento počítač, chránený tokenom, ktorý pri každom spustení vytvorí. V Studiu vyberte {{ui:Pripojiť asistenta}} a skopírujte adresu a token do svojho asistenta (Studio ukáže presné nastavenia na vloženie). Token nikdy nezdieľajte.

:::note
Karta prehliadača nemôže otvoriť pripojenie pre asistenta: v aplikáciách v prehliadači prepínač nemá žiadny účinok, kým nepoužijete CadCraft Studio na vašom počítači.
:::

## Zostávate pri moci

- **Každá zmena je jeden krok späť**, označený menom asistenta (napríklad "Assistant: add cloudrect" ako "Asistent: pridať cloudrect"). {{key:Mod+Z}} vráti posledné zmeny asistenta ako celok.
- **Viete, kedy je pripojený.** Tlačidlo v lište aplikácie pomenuje asistenta, kým je pripojený; kliknutím zistíte, čo smie robiť, alebo ho môžete **Odpojiť**.
- **Aktivita.** {{ui:Nastavenia}} › {{ui:MarkupCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypisuje každé volanie: kedy, aký nástroj a či bolo dokončené alebo odmietnuté. {{ui:Uložiť záznam}} uchová kópiu.

## Čo môže asistent žiadať

| Nástroj | Oprávnenie | Čo robí |
|---|---|---|
| `app_info`, `sheets_list` | Čítanie | Otvorené súbory, ich listy a koľko poznámok má každý |
| `markups_list` | Čítanie | Poznámky s typom, listom, textom, komentárom, meraním, stavom, autorom a odpoveďami, filtrované podľa listu, stavu, typu alebo autora |
| `markup_add` | Úpravy | Pridá obdĺžnik, oblak, elipsu, textové pole, poznámku, čiaru alebo šípku na list |
| `markup_status`, `markup_reply` | Úpravy | Nastaví stav poznámky (zapíše sa do jej vlákna, podpísané asistentom); pridá komentár do vlákna |
| `markups_export` | Exportovať | CSV alebo BCF zoznamu {{ui:Poznámky}} presne v tom, čo zoznam zobrazuje (filtre tak, ako ste ich nastavili); v Studiu môže zapísať súbor do priečinka, ktorý ste povolili |
| `tasks_list` | Čítanie | Poznámky, ktoré sú úlohami: priradenie (osoba alebo asistent), deň termínu, stav, odkaz a spôsob uzavretia. `assignee: "assistant"` vypíše prácu čakajúcu na asistenta |
| `task_set`, `task_clear` | Úpravy | Urobia z poznámky úlohu alebo ju zmenia (názov, priradenie, termín, stav, odkaz); úlohu zrušia |
| `tasks_check` | Úpravy | Uzavrú úlohy, ktorých prepojená oblasť výkresu alebo prvok modelu sa skutočne zmenili; odovzdajte stavy prvkov, ktoré ste prečítali z iného programu |
| `revisions_changes` | Čítanie | Jednoduchý zoznam zmien medzi dvoma otvorenými súbormi plánov, aby ste ho mohli vyjadriť vlastnými slovami |
| `pins_list`, `decision_add` | Čítanie, Úpravy | Hlasové poznámky (dĺžka, kto, kedy, popisok; nikdy zvuk, bez prepisu) a rozhodnutia; pripnite rozhodnutie a nahraďte skoršie |
| `redline_export`, `redline_answer` | Exportovať, Úpravy | Zapíše súbor redline pre kresliča; uplatní odpovede kresliča |

Poznámka, ktorú pridá asistent, uvádza ako autora meno, ktoré mu dal jeho program, nasledované "(assistant)", alebo "(assistant for <vaše meno>)" po tom, ako nastavíte meno revízora. Jeho zmeny stavu a odpovede sú podpísané rovnako. Každá je jeden krok späť. Uloženie PDF s poznámkami zostáva na vás: použite {{ui:Uložiť}} ako obvykle.

Bez otvorenia MarkupCraft vypíše server CadCraft MCP poznámky PDF v priečinku, ktorý zadáte (`markups_list`), a `cadcraft info Set.pdf` ich vypíše na príkazovom riadku.

## Ak niečo nefunguje

- **Asistent nevidí nástroje MarkupCraft:** skontrolujte, či je prepínač zapnutý v tomto okne a či je okno otvorené v Studiu.
- **"needs the edit permission":** zaškrtnite **Úpravy** pod {{ui:Asistenti}} a potom požiadajte znova.
- **Chyby "401" alebo "token":** token sa zmenil (Studio sa reštartovalo alebo ste vybrali {{ui:Nový token}}). Skopírujte nový do nastavení asistenta.

## Pozri aj

- [Postupy pre AI asistentov](common:assistants-recipes): prepracované príklady, každý s nástrojmi, ktoré volá.

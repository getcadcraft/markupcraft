---
title: Korištenje MarkupCraft-a s AI asistentom
summary: Dozvoli svom AI asistentu ili skripti da izlista oznake seta, dodaje jednostavne, postavlja im status, odgovara i izvozi listu: dozvole, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, oznake, pregled, dozvole, prekid veze, aktivnost
from: 095f2977
---

## Šta ćeš naučiti

Kako da dozvoliš AI asistentu (ili skripti koju si napisao) da radi s MarkupCraftom, i kako odlučiti šta sme da dira.

MarkupCraft nema **vlastitu AI** i ništa ne šalje nigdje. Ti dovodiš asistenta: bilo koji program koji govori Model Context Protocol (MCP). MarkupCraft mu samo daje alate, a ti biraš koje.

## Uključi

1. Otvori {{ui:Postavke}} (zupčanik na traci aplikacije, ili {{key:Mod+,}}) i idi na karticu {{ui:MarkupCraft}}.
2. Pod {{ui:Asistenti}} označi **Dozvoli AI asistentima i skriptama da koriste MarkupCraft**. Isključeno je dok to ne uradiš.
3. Odaberi šta sme: **Čitanje** je označeno na početku; označi **Uređivanje**, **Spasi** ili **Izvezi** samo kad ih trebaš.

Alati izvan dozvola koje si označio ne nude se asistentu, a ako ih ipak zatraži, MarkupCraft to odbija i upisuje u dnevnik aktivnosti. Isključivanje prekidača prekida sve veze odjednom; {{ui:Resetuj postavke MarkupCraft-a}} ga također isključuje.

## Poveži svog asistenta

Asistenti se povezuju preko **CadCraft Studija** na tvom računaru: Studio pokreće mali server kojem samo ovaj računar može pristupiti, zaštićen tokenom koji napravi pri svakom pokretanju. U Studiju odaberi {{ui:Poveži asistenta}}, i kopiraj adresu i token u svog asistenta (Studio pokazuje tačne postavke za lijepljenje). Nikada ne dijeli token.

:::note
Kartica pregledača ne može otvoriti vezu za asistenta: u aplikacijama u pregledaču prekidač nema efekta dok ne koristiš CadCraft Studio na svom računaru.
:::

## Ostaješ na čelu

- **Svaka promjena je jedan korak poništavanja**, označen imenom asistenta za nju (na primjer "Asistent: dodaj cloudrect"). {{key:Mod+Z}} vraća posljednju promjenu asistenta u cjelini.
- **Znaš kad je jedan povezan.** Dugme na traci aplikacije imenuje asistenta dok je povezan; klikni ga da vidiš šta sme, ili da ga **Prekini vezu**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:MarkupCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, urađen ili odbijen. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može tražiti

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `sheets_list` | Čitanje | Setovi koji su otvoreni, njihovi listovi i koliko oznaka ima svaki |
| `markups_list` | Čitanje | Oznake s tipom, listom, tekstom, komentarom, mjerenjem, statusom, autorom i odgovorima, filtrirane po listu, statusu, tipu ili autoru |
| `markup_add` | Uređivanje | Dodaje pravougaonik, oblak, elipsu, tekstualni okvir, bilješku, liniju ili strelicu na list |
| `markup_status`, `markup_reply` | Uređivanje | Postavlja status oznake (zapisan u njenoj niti, potpisan od asistenta); dodaje komentar u nit |
| `markups_export` | Izvezi | CSV ili BCF liste {{ui:Oznake}} o onome što lista prikazuje (njeni filteri kako si ih postavio); u Studiju može upisati datoteku u fasciklu koju si dozvolio |
| `tasks_list` | Čitanje | Oznake koje su zadaci: izvršilac (osoba ili asistent), rok, stanje, veza, kako je zatvoren. `assignee: "assistant"` izlista posao koji čeka asistenta |
| `task_set`, `task_clear` | Uređivanje | Pretvara oznaku u zadatak ili ga mijenja (naslov, izvršilac, rok, stanje, veza); skida zadatak |
| `tasks_check` | Uređivanje | Zatvara zadatke čija je povezana površina crteža ili element modela zaista promijenjen; proslijedi stanja elemenata koja si pročitao iz druge aplikacije |
| `revisions_changes` | Čitanje | Obična lista onoga što se promijenilo između dva otvorena seta planova, da to iskažeš svojim riječima |
| `pins_list`, `decision_add` | Čitanje, Uređivanje | Glasovne bilješke (dužina, ko, kada, opis; nikada zvuk, bez transkripta) i odluke; zakači odluku i zamijeni raniju |
| `redline_export`, `redline_answer` | Izvezi, Uređivanje | Upisuje datoteku redline za crtača; primjenjuje odgovore crtača |

Oznaka koju doda asistent navodi kao autora ime koje mu daje njegov program, praćeno s "(asistent)", ili s "(asistent za <tvoje ime>)" kad postaviš svoje ime recenzenta. Promjene njegovog statusa i odgovori potpisani su na isti način. Svaka je jedan korak poništavanja. Spašavanje označenog PDF-a ostaje na tebi: koristi {{ui:Spasi}} kao i obično.

Bez otvaranja MarkupCraft-a, CadCraft MCP server izlista oznake PDF-a u fascikli koju navedeš (`markups_list`), a `cadcraft info Set.pdf` ih ispisuje u komandnoj liniji.

## Ako nešto ne radi

- **Asistent ne vidi alate MarkupCraft-a:** provjeri da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studiju.
- **"treba dozvolu za uređivanje":** označi **Uređivanje** pod {{ui:Asistenti}}, zatim ponovo zatraži.
- **Greške "401" ili "token":** token se promijenio (Studio je ponovo pokrenut, ili {{ui:Novi token}}). Kopiraj novi u postavke asistenta.

## Vidi također

- [Recepti za AI asistente](common:assistants-recipes): primjeri s radom, svaki sa alatima koje poziva.

---
title: Upotreba MarkupCraft s AI pomoćnicima
summary: Dopustite svom AI pomoćniku ili skripti da popiše markupe skupa, dodaje jednostavne, postavlja im status, odgovara i izvozi popis - dopuštenja, povezivanje preko CadCraft Studija i dnevnik aktivnosti.
keywords: ai, pomoćnik, agent, mcp, protokol modelnog konteksta, skripta, automatizacija, markupi, pregled, dopuštenja, odspajanje, aktivnost
from: 095f2977
---

## Što ćete naučiti

Kako dopustiti AI pomoćniku (ili skripti koju ste napisali) da radi s MarkupCraftom i kako odlučiti čega se smije dotaknuti.

MarkupCraft **nema vlastitu umjetnu inteligenciju** i ništa ne šalje nigdje. Vi donosite pomoćnika: bilo koji program koji govori protokol modelnog konteksta (MCP). MarkupCraft mu daje alate, a vi birate koje.

## Uključite

1. Otvorite {{ui:Settings}} (zupčanik na traci aplikacije ili {{key:Mod+,}}) i idite na karticu {{ui:MarkupCraft}}.
2. Pod {{ui:Assistants}} označite **Dopusti AI pomoćnicima i skriptama da koriste MarkupCraft**. Isključeno je dok to ne učinite.
3. Odaberite što smije raditi: **Čitanje** je označeno na početku; označite **Uređivanje**, **Spremi** ili **Izvoz** samo kad ih trebate.

Alati izvan dopuštenja koja ste označili nisu ponuđeni pomoćniku, a ako ih ipak zatraži, MarkupCraft to odbija i bilježi u dnevniku aktivnosti. Isključivanje prekidača završava sve veze odjednom; {{ui:Reset MarkupCraft settings}} ga također isključuje.

## Povežite svog pomoćnika

Pomoćnici se povezuju preko **CadCraft Studija** na vašem računalu: Studio pokreće mali poslužitelj kojem može pristupiti samo ovo računalo, zaštićen tokenom koji napravi pri svakom pokretanju. U Studiu odaberite {{ui:Connect an assistant}} i kopirajte adresu i token u svog pomoćnika (Studio prikazuje točne postavke za lijepljenje). Nikad ne dijelite token.

:::note
Kartica preglednika ne može otvoriti vezu za pomoćnika: u aplikacijama u pregledniku prekidač nema učinka dok ne koristite CadCraft Studio na svom računalu.
:::

## Vi ostajete zaduženi

- **Svaka promjena je jedan korak poništavanja**, s oznakom imena pomoćnika za nju (npr. „Pomoćnik: dodaj cloudrect“). {{key:Mod+Z}} poništava posljednju promjenu pomoćnika u cijelosti.
- **Znate kad je jedan povezan.** Gumb na traci aplikacije imenuje pomoćnika dok je povezan; kliknite ga da vidite što smije ili da ga **odspojite**.
- **Aktivnost.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} popisuje svaki poziv: kada, koji alat, izvršen ili odbijen. {{ui:Save the log}} čuva kopiju.

## Što pomoćnik može tražiti

| Alat | Dopuštenje | Što radi |
|---|---|---|
| `app_info`, `sheets_list` | Čitanje | Otvoreni skupovi, njihovi listovi i koliko markupa ima svaki |
| `markups_list` | Čitanje | Markupi s vrstom, listom, tekstom, komentarom, mjerom, statusom, autorom i odgovorima, filtrirani po listu, statusu, vrsti ili autoru |
| `markup_add` | Uređivanje | Dodaje pravokutnik, oblak, elipsu, tekstni okvir, bilješku, liniju ili strelicu na list |
| `markup_status`, `markup_reply` | Uređivanje | Postavlja status markupa (zabilježen u njegovoj raspravi, potpisan pomoćnikom); dodaje komentar u raspravu |
| `markups_export` | Izvoz | CSV ili BCF samog popisa {{ui:Markups}} onoga što popis prikazuje (njegovi filtri kako ste ih postavili); u Studiu može zapisati datoteku u mapu koju ste dopustili |
| `tasks_list` | Čitanje | Markupi koji su zadaci: izvršitelj (osoba ili pomoćnik), dan roka, stanje, poveznica, kako su zatvoreni. `assignee: "assistant"` popisuje rad koji čeka pomoćnika |
| `task_set`, `task_clear` | Uređivanje | Čini markup zadatkom ili ga mijenja (naslov, izvršitelj, rok, stanje, poveznica); uklanja zadatak |
| `tasks_check` | Uređivanje | Zatvara zadatke čije povezano područje crteža ili element modela su se stvarno promijenili; predajte stanja elemenata koja ste pročitali iz druge aplikacije |
| `revisions_changes` | Čitanje | Jednostavan popis onoga što se promijenilo između dva otvorena skupa planova, da ga stavite svojim riječima |
| `pins_list`, `decision_add` | Čitanje, Uređivanje | Glasovne bilješke (trajanje, tko, kada, natpis; nikad zvuk, nikad transkript) i odluke; prikvači odluku i zamijeni raniju |
| `redline_export`, `redline_answer` | Izvoz, Uređivanje | Zapisuje datoteku redline za projektanta; primjenjuje odgovore projektanta |

Markup koji pomoćnik doda navodi kao autora program pomoćnika, uz dodatak „(pomoćnik)“, ili „(pomoćnik za <vaše ime>)“ kad postavite svoje ime revizora. Promjene statusa i odgovori potpisani su na isti način. Svaka je jedan korak poništavanja. Spremanje označenog PDF-a ostaje na vama: koristite {{ui:Save}} kao i obično.

Bez otvaranja MarkupCraft-a, CadCraft MCP poslužitelj popisuje markupe PDF-a u mapi koju navedete (`markups_list`), a `cadcraft info Set.pdf` ispisuje ih u naredbenom retku.

## Ako nešto ne radi

- **Pomoćnik ne vidi alate MarkupCraft-a:** provjerite je li prekidač uključen u ovom prozoru i je li prozor otvoren u Studiu.
- **„treba dopuštenje za uređivanje“:** označite **Uređivanje** pod {{ui:Assistants}}, zatim ga ponovno pitajte.
- **Greške „401“ ili „token“:** token se promijenio (Studio je ponovno pokrenut ili je odabrano {{ui:New token}}). Kopirajte novi u postavke pomoćnika.

## Vidi također

- [Recepti za AI pomoćnike](common:assistants-recipes): primjeri koji rade, svaki s alatima koje poziva.

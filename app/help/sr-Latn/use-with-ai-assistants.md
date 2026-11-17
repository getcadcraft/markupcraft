---
title: Korišćenje MarkupCraft sa AI asistentom
summary: Dozvolite svom AI asistentu ili skripti da prikažu označavanja skupa, dodaju jednostavna, postave im status, odgovore i izvoze spisak: dozvole, povezivanje preko CadCraft Studio i dnevnik aktivnosti.
keywords: ai, asistent, agent, mcp, protokol konteksta modela, skripta, automatizacija, označavanja, pregled, dozvole, prekid veze, aktivnost
from: 095f2977
---

## Šta ćete naučiti

Kako da dozvolite AI asistentu (ili skripti koju ste napisali) da radi sa MarkupCraft, i kako da odlučite čega sme da se dotakne.

MarkupCraft **nema sopstveni AI** i ništa ne šalje nigde. Vi donosite asistenta: bilo koji program koji govori protokol za kontekst modela (MCP). MarkupCraft mu samo daje alate, a vi birate koje.

## Uključite ga

1. Otvorite {{ui:Podešavanja}} (zupčanik na traci aplikacije, ili {{key:Mod+,}}) i idite na karticu {{ui:MarkupCraft}}.
2. Pod {{ui:Asistenti}} označite **Dozvoli AI asistentima i skriptama da koriste MarkupCraft**. Isključeno je dok to ne uradite.
3. Izaberite šta sme da radi: **Čitanje** je označeno na početku; označite **Uređivanje**, **Sačuvaj** ili **Izvezi** samo kada su vam potrebni.

Alati van dozvola koje ste označili ne nude se asistentu, a ako ipak zatraži jedan, MarkupCraft ga odbija i upisuje u dnevnik aktivnosti. Isključivanje prekidača odmah prekida sve veze; {{ui:Vrati podešavanja MarkupCraft}} takođe ga isključuje.

## Povežite svog asistenta

Asistenti se povezuju preko **CadCraft Studio** na vašem računaru: Studio pokreće mali server koji samo ovaj računar može da dosegne, zaštićen tokenom koji napravi pri svakom pokretanju. U Studio izaberite {{ui:Poveži asistenta}} i prekopirajte adresu i token u svog asistenta (Studio prikazuje tačna podešavanja za lepljenje). Nikada ne delite token.

:::note
Kartica pregledača ne može da otvori vezu za asistenta: u aplikacijama u pregledaču prekidač nema dejstvo dok ne upotrebite CadCraft Studio na vašem računaru.
:::

## Vi ostajete u kontroli

- **Svaka promena je jedan korak opozivanja**, obeležen imenom asistenta za nju (na primer „Assistant: add cloudrect“). {{key:Mod+Z}} vraća poslednju promenu asistenta u celini.
- **Znate kada je povezan.** Dugme na traci aplikacije imenuje asistenta dok je povezan; kliknite ga da vidite šta sme da radi, ili da ga **prekinete**.
- **Aktivnost.** {{ui:Podešavanja}} › {{ui:MarkupCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv: kada, koji alat, da li je izvršen ili odbijen. {{ui:Sačuvaj dnevnik}} čuva kopiju.

## Šta asistent može da traži

| Alat | Dozvola | Šta radi |
|---|---|---|
| `app_info`, `sheets_list` | Čitanje | Otvoreni skupovi, njihovi listovi i koliko označavanja ima svaki |
| `markups_list` | Čitanje | Označavanja sa tipom, listom, tekstom, komentarom, merenjem, statusom, autorom i odgovorima, filtrirana po listu, statusu, tipu ili autoru |
| `markup_add` | Uređivanje | Dodaje pravougaonik, oblak, elipsu, tekstualni okvir, belešku, liniju ili strelicu na list |
| `markup_status`, `markup_reply` | Uređivanje | Postavlja status označavanja (zabeležen u niti, potpisan od asistenta); dodaje komentar u nit |
| `markups_export` | Izvoz | CSV ili BCF spiska {{ui:Označavanja}} onako kako spisak prikazuje (njegovi filteri kako ste ih podesili); u Studio može da upiše datoteku u fasciklu koju ste dozvolili |
| `tasks_list` | Čitanje | Označavanja koja su zadaci: izvršilac (osoba ili asistent), rok, stanje, veza, kako su zatvoreni. `assignee: "assistant"` navodi posao koji čeka asistenta |
| `task_set`, `task_clear` | Uređivanje | Pretvara označavanje u zadatak ili ga menja (naslov, izvršilac, rok, stanje, veza); uklanja zadatak |
| `tasks_check` | Uređivanje | Zatvara zadatke čija je povezana oblast crteža ili element modela zaista promenjen; prosledite stanja elemenata koja ste pročitali iz druge aplikacije |
| `revisions_changes` | Čitanje | Običan spisak šta se promenilo između dva otvorena skupa listova, da ga stavite svojim rečima |
| `pins_list`, `decision_add` | Čitanje, Uređivanje | Glasovne beleške (dužina, ko, kada, natpis; nikada zvuk, bez transkripta) i odluke; zakači odluku i zameni raniju |
| `redline_export`, `redline_answer` | Izvoz, Uređivanje | Upisuje redline datoteku za crtača; primenjuje odgovore crtača |

Označavanje koje asistent doda kao autora navodi ime koje mu program asistenta sam daje, praćeno sa „(asistent)“, ili sa „(asistent za <vaše ime>)“ kada podesite svoje ime recenzenta. Promene statusa i odgovori potpisani su na isti način. Svako je jedan korak opozivanja. Čuvanje označenog PDF-a ostaje na vama: koristite {{ui:Sačuvaj}} kao obično.

Bez otvaranja MarkupCraft, CadCraft MCP server navodi označavanja PDF-a u fascikli koju imenujete (`markups_list`), a `cadcraft info Set.pdf` ih ispisuje u komandnoj liniji.

## Ako nešto ne radi

- **Asistent ne vidi alate MarkupCraft:** proverite da je prekidač uključen u ovom prozoru i da je prozor otvoren u Studio.
- **„zahteva dozvolu za uređivanje“:** označite **Uređivanje** pod {{ui:Asistenti}}, pa ponovo zatražite.
- **Greške „401“ ili „token“:** token je promenjen (Studio je ponovo pokrenut, ili {{ui:Novi token}}). Prekopirajte novi u podešavanja asistenta.

## Pogledajte i

- [Recepti za AI asistente](common:assistants-recipes): primeri rada, svaki sa alatima koje poziva.

---
title: Uporaba MarkupCraft z AI pomočnikom
summary: Dovolite svojemu AI pomočniku ali skriptu, da navede označbe nabora, doda preproste, nastavi njihovo stanje, odgovori in izvozi seznam: dovoljenja, povezava prek CadCraft Studio in dnevnik dejavnosti.
keywords: ai, pomočnik, agent, mcp, model context protocol, skript, avtomatizacija, označbe, pregled, dovoljenja, prekinitev povezave, dejavnost
from: 095f2977
---

## Kaj boste izvedeli

Kako dovoliti AI pomočniku (ali skriptu, ki ste ga napisali), da dela z MarkupCraft, in kako odločiti, česa se sme dotikati.

MarkupCraft **nima lastne umetne inteligence** in nikamor ničesar ne pošilja. Pomočnika prinesete sami: vsak program, ki govori Model Context Protocol (MCP). MarkupCraft mu samo da orodja, izberete pa, katera.

## Vklopite

1. Odprite {{ui:Nastavitve}} (zobnik v vrstici aplikacije ali {{key:Mod+,}}) in pojdite na zavihek {{ui:MarkupCraft}}.
2. Pod {{ui:Pomočniki}} označite **Dovoli AI pomočnikom in skriptam uporabo MarkupCraft**. Dokler tega ne storite, je izklopljeno.
3. Izberite, kaj sme početi: **Branje** je označeno na začetku; označite **Urejanje**, **Shrani** ali **Izvozi** samo takrat, ko jih potrebujete.

Orodja, ki niso v dovoljenjih, ki ste jih označili, pomočniku niso ponujena, in če jih vseeno zahteva, MarkupCraft zahtevo zavrne in to zapiše v dnevnik dejavnosti. Izklop stikala takoj prekine vse povezave; {{ui:Ponastavi nastavitve MarkupCraft}} ga prav tako izklopi.

## Povežite pomočnika

Pomočniki se povežejo prek **CadCraft Studio** na vašem računalniku: Studio zažene majhen strežnik, do katerega lahko dostopa samo ta računalnik, zaščiten z žetonom, ki ga ustvari ob vsakem zagonu. V Studio izberite {{ui:Povežite pomočnika}} in kopirajte naslov ter žeton v svojega pomočnika (Studio pokaže točne nastavitve za prilepljanje). Žetona nikoli ne delite.

:::note
Brskalniški zavihek ne more odpreti povezave za pomočnika: v aplikacijah v brskalniku stikalo nima učinka, dokler ne uporabite CadCraft Studio na svojem računalniku.
:::

## Ostanete v nadzoru

- **Vsaka sprememba je en korak razveljavitve**, označen z imenom pomočnika za to dejanje (na primer „Pomočnik: dodaj cloudrect“). {{key:Mod+Z}} vzame zadnjo spremembo pomočnika nazaj kot celoto.
- **Veste, kdaj je povezan.** Gumb v vrstici aplikacije med povezavo navede pomočnika; kliknite ga, da vidite, kaj sme, ali da **prekinete povezavo**.
- **Dejavnost.** {{ui:Nastavitve}} › {{ui:MarkupCraft}} › {{ui:Pomočniki}} › {{ui:Dejavnost}} navaja vsak klic: kdaj, katero orodje, opravljen ali zavrnjen. {{ui:Shrani dnevnik}} ohrani kopijo.

## Kaj lahko pomočnik zahteva

| Orodje | Dovoljenje | Kaj počne |
|---|---|---|
| `app_info`, `sheets_list` | Branje | Nabori, ki so odprti, njihovi listi in koliko označb ima vsak |
| `markups_list` | Branje | Označbe z vrsto, listom, besedilom, komentarjem, meritvijo, stanjem, avtorjem in odgovori, filtrirane po listu, stanju, vrsti ali avtorju |
| `markup_add` | Urejanje | Doda pravokotnik, oblak, elipso, besedilno polje, opombo, črto ali puščico na list |
| `markup_status`, `markup_reply` | Urejanje | Nastavi stanje označbe (zapisano v njeni niti, podpisano s pomočnikom); doda komentar v nit |
| `markups_export` | Izvozi | CSV ali BCF seznama {{ui:Označbe}} o tem, kar seznam prikazuje (njegovi filtri, kot ste jih nastavili); v Studio lahko zapiše datoteko v mapo, ki ste jo dovolili |
| `tasks_list` | Branje | Označbe, ki so naloge: dodeljena oseba (oseba ali pomočnik), dan roka, stanje, povezava, kako so bile zaprte. `assignee: "assistant"` navede delo, ki čaka na pomočnika |
| `task_set`, `task_clear` | Urejanje | Naredi označbo za nalogo ali jo spremeni (naslov, dodeljena oseba, rok, stanje, povezava); odstrani nalogo |
| `tasks_check` | Urejanje | Zapre naloge, katerih povezano območje risbe ali element modela se je res spremenil; posredujte stanja elementov, ki ste jih prebrali iz druge aplikacije |
| `revisions_changes` | Branje | Navaden seznam sprememb med dvema odprtima naboroma načrtov, da ga lahko povzamete s svojimi besedami |
| `pins_list`, `decision_add` | Branje, Urejanje | Glasovne opombe (dolžina, kdo, kdaj, napis; nikoli zvok, brez prepisa) in odločitve; pripnite odločitev in zamenjajte prejšnjo |
| `redline_export`, `redline_answer` | Izvozi, Urejanje | Zapiše datoteko redline za oblikovalca; uporabi odgovore oblikovalca |

Označba, ki jo doda pomočnik, kot avtorja navede ime, ki mu ga da program pomočnika, za katerim sledi „(pomočnik)“, ali „(pomočnik za <vaše ime>)“, ko nastavite svoje ime pregledovalca. Njene spremembe stanja in odgovori so podpisani enako. Vsaka je en korak razveljavitve. Shranjevanje označenega PDF ostaja pri vas: uporabite {{ui:Shrani}} kot ponavadi.

Brez odpiranja MarkupCraft strežnik CadCraft MCP navede označbe PDF v mapi, ki jo navedete (`markups_list`), in `cadcraft info Set.pdf` jih izpiše v ukazni vrstici.

## Če nekaj ne deluje

- **Pomočnik ne vidi orodij MarkupCraft:** preverite, ali je stikalo vklopljeno v tem oknu in ali je okno odprto v Studio.
- **„needs the edit permission“:** označite **Urejanje** pod {{ui:Pomočniki}}, nato znova vprašajte. (Napaka: „potrebuje dovoljenje za urejanje“.)
- **Napake „401“ ali „token“:** žeton se je spremenil (Studio se je znova zagnal ali {{ui:Nov žeton}}). Novega kopirajte v nastavitve pomočnika.

## Glejte tudi

- [Recepti za AI pomočnike](common:assistants-recipes): delovni primeri, vsak z orodji, ki jih kliče.

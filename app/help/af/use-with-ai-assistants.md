---
title: Gebruik MarkupCraft met ’n KI-assistent
summary: Laat jou eie KI-assistent of skrip die opmerkings van ’n stel lys, eenvoudige opmerkings byvoeg, hul status stel, antwoord en die lys uitvoer: toestemmings, koppel deur CadCraft Studio, en die aktiwiteitslogboek.
keywords: ki, assistent, agent, mcp, model context protocol, skrip, outomatisering, opmerkings, hersiening, toestemmings, ontkoppel, aktiwiteit
from: 095f2977
---

## Wat jy sal leer

Hoe om ’n KI-assistent (of ’n skrip wat jy geskryf het) met MarkupCraft te laat werk, en hoe om te besluit wat dit mag raak.

MarkupCraft het **geen eie KI nie** en stuur niks enige plek nie. Jy bring die assistent: enige program wat die Model Context Protocol (MCP) praat. MarkupCraft gee dit net gereedskap, en jy kies watter.

## Skakel dit aan

1. Open {{ui:Settings}} (die rat in die programbalk, of {{key:Mod+,}}) en gaan na die oortjie {{ui:MarkupCraft}}.
2. Onder {{ui:Assistants}}, merk **Laat KI-assistente en skripte MarkupCraft gebruik**. Dit is af totdat jy dit doen.
3. Kies wat dit mag doen: **Lees** is standaard gemerk; merk **Wysig**, **Stoor** of **Voer uit** net wanneer jy hulle nodig het.

Gereedskap buite die toestemmings wat jy gemerk het, word nie aan die assistent aangebied nie, en as dit tog een vra, weier MarkupCraft dit en skryf dit in die aktiwiteitslogboek. Om die skakelaar af te skakel, beëindig elke verbinding terselfdertyd; {{ui:Stel MarkupCraft-instellings terug}} skakel dit ook af.

## Koppel jou assistent

Assistente koppel deur **CadCraft Studio** op jou rekenaar: Studio laat ’n klein bediener loop wat net hierdie rekenaar kan bereik, beskerm deur ’n teken wat dit elke keer wanneer dit begin, maak. In Studio, kies {{ui:Koppel ’n assistent}} en kopieer die adres en die teken na jou assistent (Studio wys die presiese instellings om te plak). Deel die teken nooit nie.

:::note
’n Blaaieroortjie kan nie ’n verbinding vir ’n assistent oopmaak nie: in die blaaierprogramme het die skakelaar geen uitwerking totdat jy CadCraft Studio op jou rekenaar gebruik nie.
:::

## Jy bly in beheer

- **Elke verandering is een ontdoen-stap**, met die assistent se naam daarvoor as etiket (byvoorbeeld "Assistent: voeg cloudrect by"). {{key:Mod+Z}} neem die assistent se laaste verandering as ’n geheel terug.
- **Jy weet wanneer een gekoppel is.** ’n Knoppie in die programbalk noem die assistent solank dit gekoppel is; klik daarop om te sien wat dit mag doen, of om dit te **Ontkoppel**.
- **Aktiwiteit.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} lys elke oproep: wanneer, watter gereedskap, gedoen of geweier. {{ui:Save the log}} hou ’n afskrif.

## Wat ’n assistent kan vra

| Gereedskap | Toestemming | Wat dit doen |
|---|---|---|
| `app_info`, `sheets_list` | Lees | Die stelle wat oop is, hul blaaie en hoeveel opmerkings elk het |
| `markups_list` | Lees | Die opmerkings met soort, blad, teks, kommentaar, meting, status, outeur en antwoorde, gefiltreer volgens blad, status, soort of outeur |
| `markup_add` | Wysig | Voeg ’n reghoek, wolk, elips, tekskassie, nota, lyn of pyl by ’n blad |
| `markup_status`, `markup_reply` | Wysig | Stel ’n opmerking se status (aangeteken in sy draad, onderteken deur die assistent); voeg ’n kommentaar by ’n draad |
| `markups_export` | Voer uit | Die lys {{ui:Markups}} se eie CSV- of BCF-uitvoer van wat die lys wys (sy filters soos jy dit gestel het); in Studio kan dit die lêer na ’n gids skryf wat jy toegelaat het |
| `tasks_list` | Lees | Die opmerkings wat take is: toegewyde (persoon of assistent), vervaldag, toestand, skakel, hoe dit gesluit is. `assignee: "assistant"` lys die werk wat op ’n assistent wag |
| `task_set`, `task_clear` | Wysig | Maak ’n opmerking ’n taak of verander dit (titel, toegewyde, vervaldag, toestand, skakel); haal die taak af |
| `tasks_check` | Wysig | Sluit take waarvan die gekoppelde tekeningsarea of modelelement werklik verander het; gee die elementtoestande deur wat jy uit die ander program gelees het |
| `revisions_changes` | Lees | Die eenvoudige lys van wat tussen twee oop planstelle verander het, om in jou eie woorde te sit |
| `pins_list`, `decision_add` | Lees, Wysig | Stemnotas (lengte, wie, wanneer, onderskrif; nooit die klank of ’n transkripsie nie) en besluite; speld ’n besluit vas en vervang ’n vroeëre een |
| `redline_export`, `redline_answer` | Voer uit, Wysig | Skryf die rooilyn-lêer vir die opsteller; pas die opsteller se antwoorde toe |

’n Opmerking wat ’n assistent byvoeg, noem dit as die outeur: die naam wat die assistentprogram aan homself gee, gevolg deur "(assistent)", of deur "(assistent vir <jou naam>)" sodra jy jou hersienernaam gestel het. Die statusveranderinge en antwoorde daarvan word op dieselfde manier onderteken. Elkeen is een ontdoen-stap. Die stoor van die PDF met merke bly by jou: gebruik {{ui:Save}} soos gewoonlik.

Sonder om MarkupCraft oop te maak, lys die CadCraft MCP-bediener die opmerkings van ’n PDF in ’n gids wat jy noem (`markups_list`), en `cadcraft info Set.pdf` druk hulle op die opdraglyn.

## As iets nie werk nie

- **Die assistent sien geen MarkupCraft-gereedskap nie:** kyk dat die skakelaar in hierdie venster aan is, en dat die venster in Studio oop is.
- **"benodig die wysigingstoestemming":** merk **Wysig** onder {{ui:Assistants}}, en vra dan weer.
- **"401"- of "teken"-foute:** die teken het verander (Studio is herbegin, of {{ui:Nuwe teken}}). Kopieer die nuwe een na die assistent se instellings.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): uitgewerkte voorbeelde, elk met die gereedskap wat dit roep.

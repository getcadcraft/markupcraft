---
title: Wat is nuut in 0.8 en 0.8.1
summary: Opmerkings wat take word en hulleself sluit, 'n eenvoudige lys van wat tussen hersienings verander het, stemnotas en besluite op die plan, redline-lêers vir die tekenaar, en die gedeelde 0.8-veranderinge: invoertoestelle, werkbalkrye, Probleme, meer tale.
keywords: wat is nuut, wat is nuut, vrystellingsnotas, veranderlog, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, taak, take, toegewese persoon, vervaldatum, agterstallig, kontroleer nou, wat verander het, hersienings, vergelyk, stemnota, besluit, redline, antwoordlêer, tekenaar, assistent, mcp, probleme, tale, invoertoestelle, trackpad, werkbalkrye, eienskapsrooster, opdatering
from: 40368796
---

Dit is wat in MarkupCraft 0.8 en 0.8.1 verander het, in vergelyking met 0.7. Die groot nuwe ding is dat 'n opmerking 'n taak kan wees wat iemand, of jou eie assistent, doen, en wat homself sluit wanneer die tekening werklik verander.

## Nuut

### Opmerkings wat optree

- **Maak 'n opmerking 'n taak.** Kies een of meer opmerkings, maak die {{ui:Tasks}}-oortjie oop en kies {{ui:Maak gekose 'n taak}}. 'n Taak het 'n titel, 'n persoon of jou gekoppelde assistent om dit te doen, 'n opsionele vervaldatum en 'n toestand, en dit behou sy plek op die blad en sy gesprekdraad. Sien [Maak 'n opmerking 'n taak](topic:markups-that-act).
- **Take wat homself sluit.** 'n Taak kan die tekening binne sy opmerking dophou. Maak 'n nuwer hersiening van die blad oop en kies {{ui:Check now}}: as die lyne in daardie gebied met meer as 'n haar verander het, word die taak as Klaar gemerk, sy opmerking word Voltooi en 'n notas in die gesprekdraad sê wat verander het. 'n Nuwe datumstempel, of lyne wat minder as 1.5 punte verskuif het, tel nie. 'n Taak kan in plaas daarvan 'n modelelement dophou: jou assistent meld die element met `tasks_check`, en 'n latere melding wat verskil, of 'n geskrapte element, sluit die taak. Een ontdoen-stap maak dit weer oop.
- **Vind die werk.** Filtreer die {{ui:Tasks}}-lys volgens toestand en volgens vir wie dit is, insluitend {{ui:Overdue}}; kies {{ui:Assigned to}}, en dan {{ui:Assistant}} om te sien wat op jou assistent wag. 'n Taak wat na sy vervaldatum is, verskyn as 'n waarskuwing in die Probleme-paneel. {{ui:CSV}} voer die lys uit. Take word saam met die opmerking in die PDF gestoor en reis deur Live soos ander opmerkingseienskappe.

### Wat verander het, as 'n eenvoudige lys

- **Lys die veranderinge.** Maak die {{ui:Compare}}-oortjie oop, dan {{ui:Vergelyk 'n hele stel}}, kies die vroeër en die latere lêer en kies {{ui:List the changes}}. Die lys begin met 'n telling, en dek dan elke veranderde blad, die grootste verandering eerste: waar op die blad, hoe groot (in werklike eenhede sowel as inches op papier op 'n gekalibreerde blad), of lyne bygevoeg of verwyder is, hoeveel opmerkings daar is, en watter woorde verskyn of verdwyn het. {{ui:Copy the list}} plaas dit op die knipbord en {{ui:CSV}} skryf een ry per verandering. Sien [Lys wat tussen hersienings verander het](topic:what-changed-in-words).

### Stemnotas en besluite

- **Stemnotas.** Kies in die {{ui:Notes}}-oortjie {{ui:Record a voice note}}, dan {{ui:Stop recording}}; opnames hou self op na twee minute. Die nota word in die middel van die blad vasgespeld, jy sleep dit waar dit hoort en tik 'n onderskrif in {{ui:Properties}}, en {{ui:Play}} in die lys speel dit. Die opname word binne die PDF gestoor.
- **Besluite.** {{ui:Pin a decision}} skryf een of twee sinne op die blad. As dit 'n vroeër besluit vervang, kies daardie een in {{ui:It replaces}}: die ou een bly, word as Vervang gemerk, en wys na die nuwe een. Een ontdoen-stap neem dit terug. Sien [Speld stemnotas en besluite op 'n blad vas](topic:voice-notes-and-decisions).

### Redline na hersiening

- **Stuur en antwoord.** Maak in die {{ui:Tasks}}-oortjie {{ui:Redline to revision}} oop, tik die hersiening waarteen die opmerkings is en kies {{ui:Export redline file}}. Jy kry 'n `.redline.json`-lêer met een item per oop opmerking: blad, posisie (as breuke van die blad, sodat 'n herdruk op 'n ander grootte steeds lyn), woorde, outeur, gesprekdraad en sy taak. Wie die veranderinge teken, antwoord Aanvaar, Verwerp of Klaar in 'n `.redline-answers.json`-lêer; {{ui:Load answers file…}} gee elke opmerking daardie status en die tekenaar se nota, as een ontdoen-stap. Sien [Stuur opmerkings na die tekenaar as 'n redline](topic:redline-to-revision).

### KI-assistente

- **Meer gereedskap.** 'n Assistent wat jy deur CadCraft Studio gekoppel het, kan take lys (`tasks_list`), een maak of verander (`task_set`), die taak verwyder (`task_clear`), een teen 'n nuwer hersiening of 'n element nagaan (`tasks_check`) en die gewone lys van veranderinge tussen twee oop plan-stelle lees (`revisions_changes`). Dit kry net die gereedskap wat jy onder die Assistente-skakelaar aangekruis het, en elke verandering is een ontdoen-stap. Sien [Gebruik MarkupCraft met 'n KI-assistent](topic:use-with-ai-assistants).

## In elke program

- **Tale.** CadCraft Studio het nou 54 tale. Tien is nuut: Litaus, Letties, Bosnies, Marathi, Teloegoe, Albanees, Afrikaans, Filippyns, Swahili en Oesbekies. Al die nie-Engelse is masjien-konsepte totdat 'n moedertaalspreker dit lees.
- **Invoertoestelle.** {{ui:Instellings}} › {{ui:Globaal}} › {{ui:Invoerapparate}} stel in wat 'n trackpad, jou muis se syknoppies, 'n pen, vingertikke, 'n 3D-muis, 'n spelbeheerder of 'n MIDI-beheerder doen, vir elke program of net vir hierdie een. Totdat jy iets verander, werk elke toestel soos voorheen. Sien [Gebruik 'n trackpad, 3D-muis of beheerder](common:input-devices).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} het {{ui:Omvou}} (die verstek), {{ui:2 rye}} en {{ui:1 ry}}, sodat die tekening meer ruimte kry. Sien [Rangskik die paneele](common:arrange-panels).
- **Eienskapsrooster.** Die Styl-velde van 'n opmerking gebruik die gedeelde rooster, met invoubare kategorieë en etiket- en waardekolomme.
- **Probleme-paneel.** Waarskuwings van die program, soos 'n agterstallige taak, versamel in een Probleme-paneel.
- **Live en byvoegings.** Live-sessies word beskryf in [Werk saam live](common:work-together-live); die byvoegingslys wat jou rekening volg, is in [Byvoegings en jou rekeningslys](common:addons-basics).
- **Koppel jou KI.** CadCraft Studio is die middelpunt vir jou eie assistent: koppel een keer vir al agt programme. Die programme bevat geen KI van hulself nie.

## Reggestel in 0.8.1

- **Studio kan taal wissel terwyl dit loop.** Voorheen het die lessenaarprogram en die verpakte uitgawes in Engels gebly. Dit is nog nie op elke platform getoets nie: laat ons weet as die taal nie verander nie.
- Studio 0.8-installasies word 0.8.1 aangebied deur {{ui:Instellings}} › {{ui:Opdaterings}}.

## Nog nie in hierdie weergawe nie

- **Nie kode-geteken nie.** Die Windows-installeerders en die macOS .dmg het nog geen handtekening nie. As SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, dan {{ui:Begin tog}}. Op 'n Mac, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. Winkel-weergawes is aangehou.
- **Koppel jou KI is op sommige plekke onafgehandel.** Eenklik-koppeling binne Studio, die gehuisveste koppelaar vir blaaierassistente en jou eie API-sleutel binne Studio word nie vir hierdie uitgawe belowe nie. Die taaklus is getoets, maar nog nie met 'n werklike assistent nie.
- **Taakkontroles benodig dieselfde bladgrootte.** 'n Blad wat teen 'n ander grootte herdruk word, sal nie pas nie, dus sluit die take nie. Blaaie word gepaar volgens bladnommer, anders volgens bladposisie.
- **Stemnotas is slegs opnames.** Daar is geen transkripsie nie, en 'n assistent sien 'n nota se lengte, outeur en onderskrif, nie die klank nie. Opname is met 'n nabootste mikrofoon in 'n koplose blaaier probeer; 'n werklike mikrofoon op 'n foon, tablet of skootrekenaar moet nog getoets word.
- **Berekeningsblaaie en redes in 'n PDF** word in 'n privaat inskrywing van die lêer behou. 'n Ouer MarkupCraft ignoreer daardie inskrywing en skrap dit die volgende keer as dit die lêer stoor, so maak so 'n lêer oop en stoor dit met 0.8 of later.
- **Die tekenaar se kant van redlines.** CadCraft wat die redline-lêer lees en daarop antwoord, is nog nie gebou nie.
- **Ander tale.** Tamil se programbalk loop oor met 528 px.

Alles anders is in [Wat is nog nie gebou nie](topic:not-built-yet). Vir die vorige vrystelling, sien [Wat is nuut in 0.7](topic:whats-new-0-7).

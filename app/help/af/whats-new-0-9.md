---
title: Wat is nuut in 0.9 (vroeër)
summary: Notas en 'n plakbord wat nooit druk nie, versleutelde privaat notas en 'n skoon kopie vir die kliënt, groepskakels vir 'n hele tekeningstel, 'n Boog-gereedskap met tien metodes, 'n ander hersiener volg in Live, en 'n regstelling vir uitgevee opmerkings wat in die gestoorde PDF bly.
keywords: wat is nuut 0.9, vroeëre vrystelling, wat is nuut, wat's nuut, 0.9, vrystellingsnotas, veranderingslog, notas, plakbord, privaat notas, wagfrase, versleutel, versteek notas, wys notas, skoon kopie, momentopname, groepskakels, bladverwysings, skakel blaaie, titelblok, bladnommer, addendum, hernommer, pdf-skakel, boog, boogmetodes, drie-punt-boog, radius, volg, volg my, live, klasaansig, mense-lys, uitgevee opmerking, wenke, blaadtitels, vrystellingsnotas, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, taak, take, toegewys, agterstallig, kontroleer nou, wat verander het, hersienings, vergelyk, stemnota, besluit, rooilyn, antwoordlêer, tekenaar, assistent, mcp, probleme, tale, invoerapparate, trackpad, werkbalkrye, eienskapsrooster, opdatering
from: aa3dfeb8
---

Dit is wat in MarkupCraft 0.9 verander het, vergeleke met 0.8.1. Die hoofidee is dat jou werksnotas van die bladsy af wegbly wat die kliënt kry, en dat 'n hele tekeningstel in een slag gekoppel kan word.

## Nuut

### Notas, die plakbord en privaat notas

- **Die plakbord.** Die gebied rondom elke blad is 'n lessenaar: alles wat langs die blad geteken, getik of geplak word, is 'n nota en druk nooit nie. Kies {{ui:Wys die plakbord}} om vir ruimte uit te zoem, of {{ui:Neem 'n momentopname na die plakbord}}, sleep 'n boks, en kies dan {{ui:Na die plakbord}} om 'n prent van deel van die tekening langs die blad te plaas. 'n Momentopname is 'n prent en verander nie wanneer die blad verander nie. Sien [Notas, die plakbord en privaat notas](topic:notes-and-pasteboard).
- **Wys en versteek notas.** Enige opmerking kan 'n nota wees: stel {{ui:Nuwe merkings is}} in die {{ui:Notas}}-oortjie, of {{ui:Hierdie merking is}} in {{ui:Eienskappe}}. {{key:Shift+H}} of die {{ui:Notas}}-skakelaar onder die blad versteek en wys alle notas op een slag. Notas word uitgelaat by druk, plat afskrifte, lyste en uitvoere, en ander PDF-leesers wys hulle nie. Jou gestoorde PDF hou hulle vir die volgende keer wat jy dit in MarkupCraft oopmaak.
- **Privaat notas.** Kies {{ui:Stel 'n wagfrase}}, maak dan 'n opmerking {{ui:'n Privaat nota}}. Dit word in die lêer versleutel met 'n wagfrase van minstens 10 karakters, en daar is geen herstel nie: niemand, ook nie ons nie, kan dit sonder die wagfrase oopmaak nie. {{ui:Sluit}} sit privaat notas weg; {{ui:Bly ontsluit op hierdie toestel}} is standaard af.
- **Stoor 'n skoon kopie.** {{ui:Stoor 'n skoon kopie}} verwyder elke nota, privaat nota en alles op die plakbord. Gebruik dit vir die lêer wat na die kliënt gaan.

### Koppel 'n hele stel

- **Groepskakels.** Kies {{ui:Bladsye}} › {{ui:Groepskakels…}}, of {{ui:Skakel bladverwysings…}} onder {{ui:Soek teks}} in die {{ui:Blaaie}}-paneel. Stap 1 lys elke blad se nommer en naam soos gelees uit sy titelblok; regstel enige wat verkeerd is. Stap 2 lys die gevonde verwysings, soos `3/A-501` of `DETAIL 2 ON A-501`. {{ui:Sal skakel}} wys die blad en aansig vir elkeen, {{ui:Nie geskakel nie}} wys nommers wat geen oop blad het nie, en {{ui:Skep die skakels}} maak hulle almal in een ontdoen-stap. Voer dit weer uit ná 'n addendum of 'n hernommering; skakels wat jy met die hand gemaak het, word nooit verander nie. 'n Skakel met 'n aansig word as 'n PDF-skakel gestoor, sodat ander leesers die detail ook oopmaak. Sien [Bladskakels](topic:sheet-links).

### Tekening

- **Boog, tien metodes.** Die {{ui:Boog}}-gereedskap ({{key:O}}) het nou 'n {{ui:Boogmetode}}-boks oor die bladsy met tien maniere om 'n boog te teken, en hoek, lengte, radius en rigting kan geklik of getik word. Sien [Teken 'n boog op tien maniere](topic:draw-an-arc).

### Saamwerk

- **Volg 'n hersiener.** In 'n Live-sessie kies {{ui:Volg}} langs 'n persoon se naam, en jou aansig beweeg saam met hulle; om self te pan of te zoem stop dit. Die gasheer kan {{ui:Vra almal om my te volg}} kies. Die mense-lys wys elke persoon se kleur, naam, die blad waarop hulle is en wanneer hul laaste wysiging was. Sien [Volg 'n ander hersiener in 'n Live-sessie](topic:follow-in-live).

## In elke app

- Gereedskapwenke is Bootstrap-wenke, die beginwenk kan toegemaak word, oortjiestrokies rol wanneer hulle oorloop, en blaaier-oortitels lees `<document> — MarkupCraft | CadCraft`.
- 'n Paneel met verskeie afdelings maak een oop en sluit die ander ('n slot langs die pylpunt hou een oop); 'n {{ui:Instellings}}-skakelaar skakel dit af.
- Elke app begin met 'n standaardversameling van Biblioteek-voorwerpe.
- Gewig- en temperatuureenhede is beskikbaar in die Eenhede-instellings.

## Reggestel

- **Verwyderde opmerkings bly nie meer leesbaar binne die gestoorde PDF nie.** Stoor het vroeër 'n uitgevee of herskrewe annotasie van sy bladsy af geneem, maar die voorwerp, met sy teks, in die lêer gelaat. Stoor verwyder nou daardie voorwerpe. Lêers wat deur vroeër boue gestoor is, hou hulle steeds tot jy dit weer stoor.

## Eerlike beperkings

- Groepskakels is op ons eie toetsstelle getoets. Werklike stelle teken borrels op baie maniere, so op 'n kliënt se stel kan sommige aansigte gemis word. Ingeskandeerde blaaie benodig {{ui:Lees teks (OCR)…}} eerste.
- Notas, privaat notas en die plakbord is in 'n blaaier sonder skerm en in ons eie lêers getoets, nie met 'n groot werklike vektorstel nie en nie in 'n werklike tweepersoon-Live-sessie nie. Verander van 'n wagfrase is nog nie gebou nie. Boue ouer as 0.9 wys nie notas nie.
- Die klasaansig is die mense-lys; dit is nog nie met 'n werklike onderwyser en leerders getoets nie.
- Tale behalwe Engels is masjienkonsepte totdat 'n moedertaalspreker dit lees.
- Windows-installeerders is nie kode-geteken nie ({{ui:Meer inligting}}, dan {{ui:Begin tog}}); die macOS-skyfbeeld is nie genotariseer nie (regsklik, dan {{ui:Maak oop}}).

## Vroeër: 0.8 en 0.8.1

Dit is wat in MarkupCraft 0.8 en 0.8.1 verander het, vergeleke met 0.7. Die groot nuwe ding is dat 'n opmerking 'n taak kan wees wat iemand, of jou eie assistent, doen, en wat homself sluit wanneer die tekening werklik verander.

### Nuut

**Opmerkings wat optree**

- **Maak 'n opmerking 'n taak.** Kies een of meer opmerkings, maak die {{ui:Take}}-oortjie oop en kies {{ui:Maak gekose 'n taak}}. 'n Taak het 'n titel, 'n persoon of jou gekoppelde assistent om dit te doen, 'n opsionele vervaldag en 'n toestand, en dit hou sy plek op die blad en sy gesprek. Sien [Maak 'n opmerking 'n taak](topic:markups-that-act).
- **Take wat homself sluit.** 'n Taak kan die tekening binne sy opmerking dophou. Maak 'n nuwer hersiening van die blad oop en kies {{ui:Kontroleer nou}}: as die lyne in daardie gebied met meer as 'n haartjie verander het, word die taak as Klaar gemerk, sy opmerking word Voltooi en 'n nota in die gesprek sê wat verander het. 'n Nuwe datumstempel, of lyne wat minder as 1.5 punte geskuif het, tel nie. 'n Taak kan in plaas daarvan 'n modelelement dophou: jou assistent meld die element met `tasks_check`, en 'n latere melding wat verskil, of 'n uitgevee element, sluit die taak. Een ontdoen-stap heropen dit.
- **Vind die werk.** Filtreer die {{ui:Take}}-lys volgens toestand en vir wie dit is, insluitend {{ui:Agterstallig}}; kies {{ui:Toegewys aan}}, dan {{ui:Assistent}} om te sien wat op jou assistent wag. 'n Taak ná sy vervaldag wys as 'n waarskuwing in die Probleme-paneel. {{ui:CSV}} voer die lys uit. Take word in die PDF saam met die opmerking gestoor en reis deur Live soos ander opmerkingseienskappe.

**Wat verander het, as 'n gewone lys**

- **Lys die veranderinge.** Maak die {{ui:Vergelyk}}-oortjie oop, dan {{ui:Vergelyk 'n hele stel}}, kies die vroeër en die later lêer en kies {{ui:Lys die veranderinge}}. Die lys begin met 'n telling, dan dek dit elke veranderde blad, die grootste verandering eerste: waar op die blad, hoe groot (in werklike eenhede sowel as papierduim op 'n gekalibreerde blad), of lyne bygevoeg of verwyder is, hoeveel opmerkings daar is, en watter woorde verskyn of verdwyn het. {{ui:Kopieer die lys}} sit dit op die knipbord, en {{ui:CSV}} skryf een ry per verandering. Sien [Lys wat tussen hersienings verander het](topic:what-changed-in-words).

**Stemnotas en besluite**

- **Stemnotas.** In die {{ui:Notas}}-oortjie kies {{ui:Neem 'n stemnota op}}, dan {{ui:Hou op opneem}}; opnames stop self na twee minute. Die nota word in die middel van die blad vasgespeld, jy sleep dit waar dit hoort en tik 'n onderskrif in {{ui:Eienskappe}}, en {{ui:Speel}} in die lys speel dit. Die opname word binne die PDF gestoor.
- **Besluite.** {{ui:Speld 'n besluit vas}} skryf 'n sin of twee op die blad. As dit 'n vroeër besluit vervang, kies daardie een in {{ui:Dit vervang}}: die ou bly, gemerk as Vervang, en wys na die nuwe een. Een ontdoen-stap neem dit terug. Sien [Speld stemnotas en besluite op 'n blad vas](topic:voice-notes-and-decisions).

**Rooilyn na hersiening**

- **Stuur en antwoord.** Maak in die {{ui:Take}}-oortjie {{ui:Rooilyn na hersiening}} oop, tik die hersiening waarteen die opmerkings is en kies {{ui:Voer redline-lêer uit}}. Jy kry 'n `.redline.json`-lêer met een item per oop opmerking: blad, posisie (as breuke van die blad, sodat 'n herplot op 'n ander grootte steeds pas), woorde, outeur, gesprek en sy taak. Wie die veranderinge teken, antwoord Aanvaar, Verwerp of Klaar in 'n `.redline-answers.json`-lêer; {{ui:Laai antwoordlêer…}} gee elke opmerking daardie status en die tekenaar se nota, as een ontdoen-stap. Sien [Stuur opmerkings na die tekenaar as 'n rooilyn](topic:redline-to-revision).

**KI-assistente**

- **Meer gereedskap.** 'n Assistent wat jy deur CadCraft Studio gekoppel het, kan take lys (`tasks_list`), een maak of verander (`task_set`), die taak afhaal (`task_clear`), een teen 'n nuwer hersiening of 'n element nagaan (`tasks_check`) en die gewone lys van veranderinge tussen twee oop plan-stelle lees (`revisions_changes`). Dit kry net die gereedskap wat jy onder die {{ui:Assistente-skakelaar}} afgemerk het, en elke verandering is een ontdoen-stap. Sien [Gebruik MarkupCraft met 'n KI-assistent](topic:use-with-ai-assistants).

### In elke app

- **Tale.** CadCraft Studio het nou 54 tale. Tien is nuut: Litaus, Lettis, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filippyns, Swahili en Oesbekies. Al die nie-Engelse is masjienkonsepte totdat 'n moedertaalspreker dit lees.
- **Invoerapparate.** {{ui:Instellings}} › {{ui:Globaal}} › {{ui:Invoerapparate}} bepaal wat 'n trackpad, jou muis se syknoppies, 'n pen, vingertikke, 'n 3D-muis, 'n speelbeheerder of 'n MIDI-beheerder doen, vir elke app of net vir hierdie een. Totdat jy iets verander, werk elke toestel soos vantevore. Sien [Gebruik 'n trackpad, 3D-muis of beheerder](common:input-devices).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} het {{ui:Omvou}} (die standaard), {{ui:2 rye}} en {{ui:1 ry}}, sodat die tekening meer ruimte kry. Sien [Rangskik die panele](common:arrange-panels).
- **Eienskapsrooster.** Die Styl-velde van 'n opmerking gebruik die gedeelde rooster, met invoubare kategorieë en etiket- en waardekolomme.
- **Probleme-paneel.** Waarskuwings van die app, soos 'n agterstallige taak, versamel in een Probleme-paneel.
- **Live en byvoegings.** Live-sessies word beskryf in [Werk saam Live](common:work-together-live); die byvoegingslys wat jou rekening volg, is in [Byvoegings en jou rekeninglys](common:addons-basics).
- **Koppel jou KI.** CadCraft Studio is die middelpunt vir jou eie assistent: koppel een keer vir al agt die apps. Die apps bevat geen KI van hulle eie nie.

### Reggestel in 0.8.1

- **Studio kan taal wissel terwyl dit loop.** Voorheen het die rekenaarapp en die gepakte uitgawes in Engels gebly. Dit is nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.
- Studio 0.8-installasies word 0.8.1 aangebied deur {{ui:Instellings}} › {{ui:Opdaterings}}.

### Nog nie in hierdie weergawe nie

- **Nie kode-geteken nie.** Die Windows-installeerders en die macOS .dmg het nog geen handtekening nie. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, dan {{ui:Begin tog}}. Op 'n Mac, regsklik CadCraft Studio en kies {{ui:Maak oop}}. Winkelbouwerke is op die wag.
- **Koppel jou KI is op plekke onvoltooid.** Een-klik-koppeling binne Studio, die gehuisveste koppelaar vir blaaier-assistente en jou eie API-sleutel binne Studio is nie vir hierdie vrystelling belowe nie. Die taaklus is getoets, maar nog nie met 'n werklike assistent nie.
- **Taakkontroles benodig dieselfde bladsygrootte.** 'n Blad wat teen 'n ander grootte herplot is, sal nie pas nie, so sy take sluit nie. Blaaie word gepaar volgens bladnommer, anders volgens bladsyposisie.
- **Stemnotas is slegs opnames.** Daar is geen transkripsie nie, en 'n assistent sien 'n nota se lengte, outeur en onderskrif, nie die klank nie. Opname is met 'n nep-mikrofoon in 'n blaaier sonder skerm getoets; 'n werklike mikrofoon op 'n foon, tablet of skootrekenaar moet nog nagegaan word.
- **Berekeningsblaaie en redes in 'n PDF** word in 'n private inskrywing van die lêer gehou. 'n Ouer MarkupCraft ignoreer daardie inskrywing en laat dit val die volgende keer wat dit die lêer stoor, so maak so 'n lêer oop en stoor dit met 0.8 of later.
- **Die tekenaar se kant van rooilyne.** CadCraft wat die rooilyn-lêer lees en daarop antwoord, is nog nie gebou nie.
- **Ander tale.** Tamil se programbalk loop 528 px oor.

Alles anders is in [Wat is nog nie gebou nie](topic:not-built-yet). Vir die vrystelling voor hierdie een, sien [Wat is nuut in 0.7](topic:whats-new-0-7).

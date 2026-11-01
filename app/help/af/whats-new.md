---
title: Wat is nuut in 0.7
summary: RFI's, insendings en daaglikse logboeke in 'n nuwe Veld-oortjie, met vervaldatums, agterstallig in rooi, CSV en BCF, vanlyn-werk en Samevoeg; assistente wat statusse stel, antwoord en die lys uitvoer; eenheidslyste wat Instellings volg; paneele wat wegtrek en dialoë wat beweeg.
keywords: wat is nuut, wat's nuut, vrystellingsnotas, veranderinglog, veranderinge, 0.7, weergawe, nuwe funksies, veld, veldrekords, rfi, versoek om inligting, insending, daaglikse logboek, werfdagboek, agterstallig, vervaldatum, aan my toegewys, speld, samevoeg, vanlyn, tablet, bcf, csv, assistent, mcp, opmerkingstatus, antwoord, uitvoer, eenhede, eenheidslyste, ster, kalibreer, kompak, paneele, dialoë, portugees
from: 142e1a1e
---

Dit is wat in MarkupCraft 0.7 verander het, vergeleke met 0.6. Die groot nuwe ding is veldrekords: RFI's, insendings en daaglikse logboeke wat binne die PDF langs jou opmerkings gehou word.

## Nuut

### RFI's, insendings en daaglikse logboeke

- **Die Veld-oortjie.** Maak die {{ui:Veld}}-oortjie oop en kies {{ui:RFI}}, {{ui:Insending}} of {{ui:Daaglikse logboek}}. Tik of klik op die blad waar 'n RFI of insending hoort, en 'n speld merk die plek; 'n daaglikse logboek gaan op die oop blad sonder 'n speld ({{ui:Plaas speld}} voeg later een by, {{ui:Skuif speld}} skuif enige speld). Elke rekord het sy eie nommer (RFI-0001, SUB-0001, LOG-0001), 'n titel, teks, 'n status, 'n toegewese persoon, 'n vervaldatum, 'n draad van antwoorde en 'n lys van aanhegselname. Sien [Volg RFI's, insendings en daaglikse logboeke](topic:field-records).
- **Sien wat laat is.** Filtreer die lys volgens soort, status, vervaldatum (agterstallig, verval binne 7 dae, het of het nie 'n vervaldatum nie), hierdie blad of alle blaaie, 'n teksoektog, of {{ui:Aan my toegewys}}. 'n Rekord wat oor sy vervaldatum is en nog wag, word in rooi as **Agterstallig** gemerk, op die lys en op sy speld. Sien [Vind wat saak maak](topic:field-records#find-what-matters).
- **CSV en BCF.** {{ui:CSV}} skryf die gelyste rekords as 'n sigblad; {{ui:BCF}} skryf hulle as BCF-onderwerpe, elk met 'n momentopname van sy plek op die blad. Albei volg die filters. Sien [Uitvoer](topic:field-records#export).
- **Vanlyn, en twee afskrifte word een.** Rekords word binne die PDF gestoor en benodig geen netwerk nie, so 'n tablet op die werf kan hulle byvoeg, beantwoord en stoor. Terug op kantoor voeg {{ui:Samevoeg}} die rekords van 'n ander afskrif van dieselfde PDF by met hul ID's, as een ontdoen-stap. Sien [Stoor, vanlyn en afskrifte samevoeg](topic:field-records#save-offline-and-merging-copies).

### KI-assistente

- **Meer wat 'n assistent kan doen.** Jou eie assistent, gekoppel deur CadCraft Studio, kan nou 'n opmerking se status stel (`markup_status`, aangeteken in sy draad), in 'n draad antwoord (`markup_reply`) en die {{ui:Opmerkings}}-lys as CSV of BCF uitvoer (`markups_export`, wat die lys wys met sy filters). Elke verandering is een ontdoen-stap, onderteken met die assistent se naam. Sien [Wat 'n assistent kan vra](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In elke program

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die VSA-opmetingsvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af en hulle verlaat die eenheidslyste; merk een met 'n ster en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In MarkupCraft volg die meet- en posisie-eenhede in {{ui:Instellings}} › {{ui:MarkupCraft}} en die eenheid in die kalibreer-dialoog die skakelaars, die ster stel die meeteenheid totdat jy MarkupCraft se eie instellings stoor, en die werklike afstand wat jy by kalibrering tik, kan enige eenheid se merk dra, soos `3 yd` of `1.5 km`. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).
- **'n Digter uitleg en paneele wat wegtrek.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (aanraakskerms en fone hou hul groot knoppies). Elke kantpaneel het 'n dun titelbalk: sleep dit om die paneel vas te maak of te laat swewe, laat dit val op 'n ander paneel se balk om een raam as oortjies te deel, vaspen dit sodat dit na die rand wegskuif, of versteek dit en bring dit terug vanaf die rand. Sien [Rangskik die paneele](common:arrange-panels#make-the-layout-denser).
- **Dialoë beweeg.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy dit gelaat het. Dubbelklik op die titelbalk om dit weer in die middel te plaas. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, vra 'n model vrae, totaal 'n hoeveelheidsopname, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk word deur ons toetse weer afgespeel. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker nagesien is nie. Hulponderwerpe is in Engels.
- **CadCraft Studio** sê waarom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening) in plaas van net "Klaar", en hou op om 'n Wat's nuut-kaart terug te bring wat jy toegemaak het totdat daar 'n nuwer vrystelling is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kodegeteken nie.** Kodetekening en die Microsoft Store-pakket het na 0.8 geskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, en dan {{ui:Voer tog uit}}. Op 'n Mac, die eerste keer, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog geen iPad- of iPhone-boublad nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen blokkie lees hulle nog nie.
- Veldrekords word nie in 'n CadCraft Studio-lewe-sessie gedeel nie (lewe-sessies dra net opmerkings); bring afskrifte saam met {{ui:Samevoeg}}.
- Samevoeg neem 'n rekord as geheel van die afskrif wat die laaste verander is: as twee mense verskillende velde van een rekord verander het, wen die latere afskrif se velde. Drade en aanhegselname word saamgevoeg.
- Aanhegsels is net name; die lêers bly waar hulle is. Daar is geen spanne, kennisgewings of wolkprojekte vir rekords nie, en assistente het nog geen gereedskap vir rekords nie.
- Veldrekords is in 'n blaaier op foon- en tablet-groottes getoets met die netwerk afgesny, maar nog nie met die hand op 'n werklike tablet nie.
- Steeds van 0.6: bladvoorwerpe na enige hoek draai, nuwe vorms direk op die bladsy teken, 'n lyn se lettertipe of grootte verander, en teks wat oor verskeie lyne vloei. 'n Gestoorde afskrif met bladredigerings is nog nie in Acrobat oopgemaak nie.
- Steeds van 0.5: 'n bladverandering ontdoen (soos 'n leë bladsy byvoeg), teks uit ingeskandeerde blaaie lees, en lewe-sessies buite jou eie netwerk.

Al die res is in [Wat nog nie gebou is nie](topic:not-built-yet).

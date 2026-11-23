---
title: Wat is nuut in 0.7 (vroeër)
summary: RFI's, insendings en daaglikse logboeke in 'n nuwe Veld-oortjie, met vervaldatums, agterstallig in rooi, CSV en BCF, aflyn werk en Samevoeg; assistente wat statusse stel, antwoord en die lys uitvoer; eenheidslyste wat Instellings volg; paneele wat wegraak en dialoë wat beweeg.
keywords: wat is nuut 0.7, vroeëre vrystelling, vrystellingsnotas, veranderingslog, veranderinge, 0.7, weergawe, nuwe kenmerke, veld, veldrekords, rfi, versoek om inligting, insending, daaglikse logboek, werfdagboek, agterstallig, vervaldatum, aan my toegewys, speld, samevoeg, aflyn, tablet, bcf, csv, assistent, mcp, opmerkingstatus, antwoord, uitvoer, eenhede, eenheidslyste, ster, kalibreer, kompak, paneele, dialoë, portugees
from: ca5ba1f0
---

Dit is wat in MarkupCraft 0.7 verander het, vergeleke met 0.6. Die groot nuwe ding is veldrekords: RFI's, insendings en daaglikse logboeke wat binne die PDF langs jou opmerkings gehou word.

## Nuut

### RFI's, insendings en daaglikse logboeke

- **Die Veld-oortjie.** Maak die {{ui:Veld}}-oortjie oop en kies {{ui:RFI}}, {{ui:Insending}} of {{ui:Daaglikse logboek}}. Tik of klik op die blad waar 'n RFI of insending hoort, en 'n speld merk die plek; 'n daaglikse logboek gaan op die oop blad sonder 'n speld ({{ui:Plaas speld}} voeg later een by, {{ui:Skuif speld}} skuif enige speld). Elke rekord het sy eie nommer (RFI-0001, SUB-0001, LOG-0001), 'n titel, teks, 'n status, 'n toegewysde persoon, 'n vervaldatum, 'n gesprek van antwoorde en 'n lys van aanhegselname. Sien [Volg RFI's, insendings en daaglikse logboeke](topic:field-records).
- **Sien wat laat is.** Filtreer die lys volgens soort, status, vervaldatum (agterstallig, vervaldig binne 7 dae, het of het nie 'n vervaldatum nie), hierdie blad of alle blaaie, 'n teksoektog, of {{ui:Aan my toegewys}}. 'n Rekord ná sy vervaldatum wat nog wag, word **Agterstallig** gemerk, in rooi, op die lys en op sy speld. Sien [Vind wat saak maak](topic:field-records#find-what-matters).
- **CSV en BCF.** {{ui:CSV}} skryf die gelyste rekords as 'n sigblad; {{ui:BCF}} skryf dit as BCF-onderwerpe, elk met 'n momentopname van sy plek op die blad. Albei volg die filters. Sien [Uitvoer](topic:field-records#export).
- **Aflyn, en twee kopieë word een.** Rekords word binne die PDF gestoor en benodig geen netwerk nie, sodat 'n tablet op die werf rekords kan byvoeg, beantwoord en stoor. Terug op die kantoor voeg {{ui:Samevoeg}} die rekords van 'n ander kopie van dieselfde PDF saam volgens hul ids, as een ontdoen-stap. Sien [Stoor, aflyn werk en samevoeg van kopieë](topic:field-records#save-offline-and-merging-copies).

### KI-assistente

- **Meer wat 'n assistent kan doen.** Jou eie assistent, gekoppel deur CadCraft Studio, kan nou 'n opmerking se status stel (`markup_status`, gelog in sy gesprek), in 'n gesprek antwoord (`markup_reply`) en die {{ui:Opmerkings}}-lys as CSV of BCF uitvoer (`markups_export`, wat die lys wys met sy filters). Elke verandering is een ontdoen-stap, onderteken met die assistent se naam. Sien [Wat 'n assistent kan vra](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In elke app

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die VSA-landmeetvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af, en hulle verdwyn uit die eenheidslyste; ster een en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In MarkupCraft volg die meet- en posisie-eenhede in {{ui:Instellings}} › {{ui:MarkupCraft}} en die eenheid in die kalibreer-dialoog die skakelaars, die ster stel die meeteenheid totdat jy MarkupCraft se eie instellings stoor, en die werklike afstand wat jy by kalibrasie tik, kan enige eenheid se merker dra, soos `3 yd` of `1.5 km`. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).
- **'n Digter uitleg en paneele wat wegraak.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (aanraakskerms en fone hou hul groot knoppies). Elke syspaneel het 'n slanke titelbalk: sleep dit om die paneel te dok of los te maak, laat val dit op 'n ander paneel se balk om een raam as oortjies te deel, speld dit om na die rand weg te gly, of versteek dit en haal dit terug van die rand af. Sien [Rangskik die paneele](common:arrange-panels#make-the-layout-denser).
- **Dialoë beweeg.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy dit gelaat het. Dubbelklik op die titelbalk om dit weer te sentreer. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke aan jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, vra 'n model vrae, tel 'n hoeveelheidsopname op, probeer 'n onderdeelvariant…), elk met die instrumente wat dit roep en die toestemmings wat dit nodig het, en elk herhaal deur ons toetse. Die toepassings bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die toepassings, as konsepte wat nog nie deur 'n moedertaalspreker hersien is nie. Hulp-onderwerpe is in Engels.
- **CadCraft Studio** sê waarom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening) in plaas van net "Klaar", en hou op om 'n Wat's nuut-kaart wat jy toegemaak het terug te bring totdat daar 'n nuwer vrystelling is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kode-onderteken nie.** Onderteken, en die Microsoft Store-pakket, het na 0.8 geskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}} en dan {{ui:Laat tog loop}}. Op 'n Mac, die eerste keer, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. CadCraft Studio is nog nie in 'n toepassingswinkel nie, en daar is nog nie 'n iPad- of iPhone-bou nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen boks lees hulle nog nie.
- Veldrekords word nie in 'n CadCraft Studio-lewensessie gedeel nie (lewensessies dra slegs opmerkings); bring kopieë saam met {{ui:Samevoeg}}.
- Samevoeg neem 'n rekord as geheel van die kopie wat laas verander is: as twee mense verskillende velde van een rekord verander het, wen die latere kopie se velde. Gesprekke en aanhegselname word saamgevoeg.
- Aanhegsels is slegs name; die lêers bly waar hulle is. Daar is geen spanne, kennisgewings of wolkprojekte vir rekords nie, en assistente het nog geen instrumente vir rekords nie.
- Veldrekords is in 'n blaaier getoets by foon- en tabletgroottes met die netwerk afgesny, maar nog nie met die hand op 'n werklike tablet nie.
- Nog van 0.6: bladvoorwerpe na enige hoek draai, nuwe vorms direk op die bladsy teken, 'n lyn se lettertipe of grootte verander, en teks wat oor verskeie lyne vloei. 'n Gestoorde kopie met bladwysigings is nog nie in Acrobat oopgemaak nie.
- Nog van 0.5: 'n bladwysiging ontdoen (soos 'n leë bladsy byvoeg), teks uit geskandeerde blaaie lees, en lewensessies buite jou eie netwerk.

Alles anders is in [Wat is nog nie gebou nie](topic:not-built-yet).

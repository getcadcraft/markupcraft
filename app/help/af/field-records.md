---
title: Volg RFI's, insendings en daaglikse logboeke
summary: Plaas RFI's, insendings en daaglikse logboeke op die blaaie, met nommers, toegewese persone, sperdatums en drade; filtreer wat agterstallig is; voer CSV of BCF uit; werk vanlyn en voeg kopieë saam.
keywords: rfi, versoek om inligting, insending, daaglikse logboek, veldverslag, werfdagboek, konstruksie, agterstallig, sperdatum, aan my toegewys, draad, aanhegsel, samevoeg, vanlyn, tablet, bcf, csv, veld
from: 95039c5a
---

Die {{ui:Veld}}-oortjie hou drie soorte rekords langs jou merkings. Elkeen is aan 'n blad gekoppel; 'n RFI of 'n insending het ook 'n speld by die plek op die blad waarna dit verwys.

- **RFI**: 'n vraag aan die ontwerpspan. Statusse: Oop, Beantwoord, Gesluit.
- **Insending**: iets wat nagesien moet word voordat werk voortgaan. Statusse: Oop, In hersiening, Goedgekeur, Goedgekeur soos aangeteken, Hersien en stuur weer in, Gesluit.
- **Daaglikse logboek**: die dag se weer, die aantal mense op die werf en die werk wat gedoen is. Statusse: Konsep, Final.

Elke rekord het 'n nommer van sy eie soort (RFI-0001, SUB-0001, LOG-0001), 'n titel, teks, 'n toegewese persoon, 'n sperdatum, 'n draad van antwoorde en 'n lys van aanhegselname.

## Voeg een by

1. Open die {{ui:Veld}}-oortjie en kies {{ui:RFI}} of {{ui:Insending}}.
2. Tik of klik op die blad waar dit hoort. 'n Speld verskyn en die rekord maak oop in die oortjie.
3. Vul die titel, die vraag of beskrywing, aan wie dit toegewys is en wanneer dit verskuldig is, in.

'n Daaglikse logboek word sonder 'n speld by die oop blad gevoeg. {{ui:Plaas speld}} plaas later een daarop; {{ui:Skuif speld}} skuif enige speld. As jy op 'n speld op die blad tik, maak sy rekord oop.

## Antwoord en volg op

Verander die {{ui:Status}} en die verandering word in die draad aangeteken. Skryf 'n antwoord en kies {{ui:Stuur antwoord}} (Ctrl+Enter stuur ook). Aanhegsels is net name: tik een of kies lêers, en die lys sê vir die span wat by die rekord hoort. Die lêers self bly waar hulle is.

'n Rekord waarvan die sperdatum verby is en wat nog wag ('n RFI wat nie Beantwoord of Gesluit is nie, 'n insending wat nog nie besluit is nie) word in rooi as **Agterstallig** gemerk, op die lys en op sy speld.

## Vind wat saak maak

Die filters staan bo die lys: tipe, status, sperdatum (agterstallig, verskuldig binne 7 dae, het of het nie 'n sperdatum nie), hierdie blad of alle blaaie, 'n teksoeking, en {{ui:Aan my toegewys}}, wat die toegewese persoon vergelyk met die naam waarmee MarkupCraft jou ken (sien [Stel jou naam](topic:set-your-name)). Die reël onder die filters tel wat gewys word en wat agterstallig is.

## Uitvoer

{{ui:CSV}} skryf die gelyste rekords as 'n sigblad. {{ui:BCF}} skryf hulle as BCF-onderwerpe, elk met 'n momentopname van sy plek op die blad, sodat ander BCF-gereedskap hulle kan lys. Albei volg die filters.

## Stoor, vanlyn en kopieë saamvoeg

Rekords word in die PDF gestoor wanneer jy dit stoor, en hulle kom terug wanneer jy dit oopmaak. Niks benodig 'n netwerk nie: voeg by, wysig, antwoord en stoor op 'n tablet in 'n kelder, en bring dan die PDF terug. Ouer PDF's, en PDF's van ander programme, maak oop soos altyd.

Om twee kopieë saam te bring, maak een oop en kies {{ui:Samevoeg}}, en kies dan die ander kopie van dieselfde PDF. Rekords word aan mekaar gekoppel volgens hul ids:

- 'n rekord wat net in een kopie is, word bygevoeg;
- 'n rekord in albei kry sy velde (titel, teks, status, toegewese persoon, sperdatum) as 'n geheel uit die kopie wat die laaste verander is, so as twee mense verskillende velde van dieselfde rekord verander het, wen die latere kopie se weergawe; drade en aanhegselname uit albei kopieë word saamgevoeg;
- as albei kopieë 'n nuwe rekord dieselfde nommer gegee het, kry die een wat aankom die volgende vrye nommer;
- 'n rekord wat in een kopie verwyder is, bly verwyder tensy dit daarna gewysig is.

'n Samevoeging is een ontdoen-stap.

## Beperkings

- Rekords word nog nie deur Live TeamWork gedeel nie; gebruik Samevoeg.
- Daar is in hierdie weergawe geen spanne, kennisgewings of wolkprojekte vir rekords nie.
- Bladsye wat uit die PDF geskrap word, neem hul rekords saam (die bladsy-bevestiging tel hulle).

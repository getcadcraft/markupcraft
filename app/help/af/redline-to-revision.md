---
title: Stuur opmerkings na die tekenaar as 'n rooilyn
summary: Skryf die oop opmerkings as 'n rooilyn-lêer vir wie die veranderinge teken, laai dan hul antwoorde sodat elke opmerking Aanvaar of Verwerp wys.
keywords: rooilyn, hersiening, tekenaar, aanvaar, verwerp, antwoorde, cc-redline, hersieningswolk, pas opmerkings toe
from: cb099d04
---

Hersiening is die helfte van die werk; die tekening moet nog verander. Die rooilynlêer dra elke oop opmerking na die tekenaar, en die tekenaar se antwoorde dra die resultaat terug.

## Stuur

1. Maak die {{ui:Take}}-oortjie oop en maak {{ui:Rooilyn na hersiening}} oop.
2. Tik die hersiening waarteen die opmerkings is (byvoorbeeld B).
3. Kies {{ui:Voer redline-lêer uit}}.

Jy kry 'n `.redline.json`-lêer met een item per Oop-opmerking: sy blad, waar dit is (as breuke van die blad, sodat 'n herdruk op 'n ander grootte steeds lyn, en in punte), sy woorde, outeur en bespreking, en sy taak as dit een het. Leesalleen-kommentaar van ander programme, prente en legendes word uitgelaat.

## Antwoorde

Die tekenkant antwoord elke item Aanvaar, Verwerp of Gedoen, met 'n nota, in 'n `.redline-answers.json`-lêer. Kies {{ui:Laai antwoordlêer…}} en kies dit: elke opmerking kry daardie status en die tekenaar se nota in sy bespreking, en 'n taak waarvan die opmerking aanvaar of gedoen is, is voltooi. Een ongedaan-maak-stap neem al die antwoorde terug.

Die lêerformaat is in `docs/REDLINE-FORMAT.md`. Die CadCraft-kant (die pakket lees, elke item aanvaar of verwerp, hersieningswolke en die logboek) word afsonderlik gebou.

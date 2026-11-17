---
title: Bewerkingen van twee personen van één PDF samenvoegen
summary: Laat git, Fossil of Mercurial twee gemarkeerde kopieën van dezelfde PDF markup voor markup samenvoegen, inclusief notities.
keywords: samenvoegen, git, fossil, mercurial, versiebeheer, conflict, drievoudig, cadcraft merge, gitattributes, markups, notities, team, twee kopieën
from: a450a9ef
---

Twee personen markeren dezelfde PDF in twee kopieën. Als ze verschillende markups hebben aangeraakt, kunnen de kopieën door een programma worden samengevoegd in plaats van met de hand.

## Wat het laat werken

Elke markup die MarkupCraft opslaat, draagt zijn eigen naam (zijn id) in de PDF, en die naam verandert nooit. Het samenvoegen zoekt markups op die naam op, niet op hun plaats in het bestand, omdat elk programma de plaatsen hernummert wanneer het opslaat. Notities en verzegelde privénotities worden op dezelfde manier gekoppeld.

De bladen worden nooit aangeraakt: beide kopieën moeten hetzelfde aantal pagina's hebben. Als ze verschillen, houdt het samenvoegen uw kopie zoals ze is en meldt het dat, omdat pagina's toevoegen of verwijderen werk voor een persoon is.

## Instellen

Git heeft eenmalig per repository twee regels nodig:

```
# .gitattributes
*.pdf merge=cadcraft

# eenmalig, op elke computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Zonder git voert u `cadcraft merge <base> <ours> <theirs> -o <result>` uit. Fossil en Mercurial nemen dezelfde drie bestanden in hun eigen instelling voor het samenvoegprogramma. Het taakbestand dat met een tekening meegaat (`<name>.markups.json`, zie [Markups die handelen](topic:markups-that-act)) wordt op dezelfde manier samengevoegd, als gewone tekst.

## De regels

- Een markup die aan één kant is gewijzigd, wordt overgenomen. Dezelfde wijziging aan beide kanten wordt één keer overgenomen.
- Dezelfde markup die op twee manieren is gewijzigd, is een **conflict**: uw kant blijft staan en het rapport vermeldt beide. Open het resultaat en los die markup met de hand op.
- Een markup die aan een van beide kanten is toegevoegd, blijft behouden. Een markup die aan de ene kant is verwijderd en aan de andere kant onaangeroerd, wordt verwijderd. Verwijderd aan de ene kant en gewijzigd aan de andere: verwijderd, en gemeld.
- Lagen, kolommen, records en notities volgen dezelfde regels.
- Verzegelde privénotities worden nooit geopend: de blokken van beide kanten blijven zoals ze zijn.

Het samengevoegde bestand is een volledige herschrijving van uw kopie, zoals het eigen Opslaan van MarkupCraft. Niets wordt geüpload; alles draait op uw computer.

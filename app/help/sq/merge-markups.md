---
title: Bashko ndryshimet e dy personave të një PDF
summary: Lër git, Fossil ose Mercurial të bashkojnë dy kopje të shënuara të të njëjtit PDF shënim për shënim, duke përfshirë shënimet.
keywords: bashkim, git, fossil, mercurial, kontroll versionesh, konflikt, tre-krahësh, cadcraft merge, gitattributes, shënime, ekip, dy kopje
from: a450a9ef
---

Dy persona shënojnë të njëjtin PDF në dy kopje. Nëse prekën shënime të ndryshme, kopjet mund të bashkohen nga një program në vend që me dorë.

## Çfarë e bën të punojë

Çdo shënim që ruan MarkupCraft mban emrin e vet (id-në e tij) brenda PDF-it, dhe emri nuk ndryshon kurrë. Bashkimi i kërkon shënimet sipas atij emri, jo sipas vendit të tyre në skedar, sepse çdo program ri-numëron vendet kur ruan. Shënimet dhe shënimet private të mbyllura përputhen në të njëjtën mënyrë.

Fletët nuk preken kurrë: të dyja kopjet duhet të kenë të njëjtin numër faqesh. Nëse ndryshojnë, bashkimi e mban kopjen tënde siç është dhe e thotë këtë, sepse shtimi ose heqja e faqeve është punë për një person.

## Konfiguro

Git kërkon dy rreshta një herë për çdo depo:

```
# .gitattributes
*.pdf merge=cadcraft

# një herë, në çdo kompjuter
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Pa git, ekzekuto `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil dhe Mercurial marrin të njëjtat tre skedarë në cilësimin e tyre të veglës së bashkimit. Skedari i detyrave që shoqëron një vizatim (`<name>.markups.json`, shih [Shënime që veprojnë](topic:markups-that-act)) bashkohet në të njëjtën mënyrë, si tekst i thjeshtë.

## Rregullat

- Një shënim i ndryshuar vetëm në njërën anë merret. E njëjta ndryshim në të dyja anët merret një herë.
- I njëjti shënim i ndryshuar në dy mënyra është një **konflikt**: ana jote mbetet dhe raporti i liston të dyja. Hap rezultatin dhe rregullo atë shënim me dorë.
- Një shënim i shtuar në secilën anë mbahet. Një i hequr në njërën anë dhe i paprekur në tjetrën hiqet. I hequr në njërën anë dhe i ndryshuar në tjetrën: hiqet, dhe raportohet.
- Shtresat, kolonat, regjistrimet dhe shënimet ndjekin të njëjtat rregulla.
- Shënimet private të mbyllura nuk hapen kurrë: blloqet e të dyja anëve mbahen siç janë.

Skedari i bashkuar është një shkrim i plotë i kopjes sate, si Ruaj i vetë MarkupCraft-it. Asgjë nuk ngarkohet; gjithçka ekzekutohet në kompjuterin tënd.

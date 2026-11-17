---
title: Slå sammen to personers endringer i én PDF
summary: La git, Fossil eller Mercurial slå sammen to markerte kopier av samme PDF, markering for markering, også notater.
keywords: sammenslåing, merge, git, fossil, mercurial, versjonskontroll, konflikt, tre-veis, cadcraft merge, gitattributes, markeringer, notater, team, to kopier
from: a450a9ef
---

To personer markerer den samme PDF-en i to kopier. Hvis de rørte ved ulike markeringer, kan kopiene slås sammen av et program i stedet for for hånd.

## Hva som får det til å virke

Hver markering MarkupCraft lagrer, bærer sitt eget navn (sin id) inne i PDF-en, og navnet endres aldri. Sammenslåingen slår opp markeringer etter navnet, ikke etter plassen deres i filen, fordi hvert program nummererer plasser på nytt når det lagrer. Notater og forseglede private notater matches på samme måte.

Arkene røres aldri: begge kopiene må ha samme antall sider. Hvis de er ulike, beholder sammenslåingen din kopi slik den er og sier fra om det, fordi det å legge til eller fjerne sider er en jobb for en person.

## Sett det opp

Git trenger to linjer, én gang per depot:

```
# .gitattributes
*.pdf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Uten git kjører du `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil og Mercurial tar de samme tre filene i sin egen innstilling for sammenslåingsverktøy. Oppgavefilen som følger med en tegning (`<name>.markups.json`, se [Gjør en markering til en oppgave](topic:markups-that-act)) slås sammen på samme måte, som ren tekst.

## Reglene

- En markering som er endret bare på den ene siden, tas med. Den samme endringen på begge sider tas med én gang.
- Den samme markeringen endret på to måter er en **konflikt**: din side beholdes, og rapporten lister begge. Åpne resultatet og rett den markeringen for hånd.
- En markering lagt til på en av sidene beholdes. En som er fjernet på den ene siden og urørt på den andre, fjernes. Fjernet på den ene siden og endret på den andre: fjernet, og rapportert.
- Layer, kolonner, feltregistreringer og notater følger de samme reglene.
- Forseglede private notater åpnes aldri: blokkene fra begge sider beholdes slik de er.

Den sammenslåtte filen er en fullstendig omskriving av kopien din, slik MarkupCraft sin egen lagring er. Ingenting lastes opp; alt kjører på din datamaskin.

---
title: Flet to personers redigeringer af én PDF
summary: Lad git, Fossil eller Mercurial flette to markerede kopier af den samme PDF markering for markering, inklusive notater.
keywords: flet, git, fossil, mercurial, versionskontrol, konflikt, tre-vejs, cadcraft merge, gitattributes, markeringer, notater, team, to kopier
from: a450a9ef
---

To personer markerer den samme PDF i to kopier. Har de rørt ved forskellige markeringer, kan kopierne flettes af et program i stedet for i hånden.

## Sådan virker det

Hver markering MarkupCraft gemmer, bærer sit eget navn (dets id) inde i PDF'en, og navnet ændrer sig aldrig. Flettningen slår markeringer op med det navn, ikke efter deres plads i filen, fordi hvert program nummererer pladserne om, når det gemmer. Notater og forseglede private notater matches på samme måde.

Arkene røres aldrig: begge kopier skal have samme antal sider. Er de forskellige, lader flettningen din kopi være, som den er, og siger det, for at tilføje eller fjerne sider er en opgave for et menneske.

## Opsætning

Git kræver to linjer én gang pr. repository:

```
# .gitattributes
*.pdf merge=cadcraft

# én gang, på hver computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Uden git kører du `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil og Mercurial tager de samme tre filer i deres egen indstilling for fletteværktøj. Opgavefilen, der følger med en tegning (`<name>.markups.json`, se [Markeringer der handler](topic:markups-that-act)), flettes på samme måde, som ren tekst.

## Reglerne

- En markering, der kun er ændret på den ene side, tages. Den samme ændring på begge sider tages én gang.
- Den samme markering ændret på to måder er en **konflikt**: din side beholdes, og rapporten lister begge. Åbn resultatet og ret den markering i hånden.
- En markering tilføjet på den ene side beholdes. En fjernet på den ene side og urørt på den anden fjernes. Fjernet på den ene side og ændret på den anden: fjernes og rapporteres.
- Lag, kolonner, registreringer og notater følger de samme regler.
- Forseglede private notater åbnes aldrig: blokkene fra begge sider beholdes, som de er.

Den flettede fil er en fuld omskrivning af din kopi, ligesom MarkupCraft's egen Gem er. Intet uploades; det hele kører på din computer.

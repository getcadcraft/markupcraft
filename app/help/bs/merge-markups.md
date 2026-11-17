---
title: Spoji dvije izmjene jednog PDF-a
summary: Pusti git, Fossil ili Mercurial da spoje dvije označene kopije istog PDF-a oznaku po oznaku, uključujući bilješke.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, sukob, trosmjerno, cadcraft merge, gitattributes, oznake, bilješke, tim, dvije kopije
from: a450a9ef
---

Dvije osobe označavaju isti PDF u dvije kopije. Ako su dirale različite oznake, kopije može spojiti program umjesto ručno.

## Šta to omogućava

Svaka oznaka koju MarkupCraft snimi nosi svoje ime (njen id) unutar PDF-a, i to ime se nikada ne mijenja. Spajanje traži oznake po tom imenu, a ne po njihovom mjestu u datoteci, jer svaki program renumeriše mjesta kada snima. Bilješke i zapečaćene privatne bilješke upoređuju se na isti način.

Listovi se nikada ne diraju: obje kopije moraju imati isti broj stranica. Ako se razlikuju, spajanje zadržava tvoju kopiju onakvu kakva jeste i to kaže, jer dodavanje ili uklanjanje stranica je posao za osobu.

## Postavljanje

Git treba dvije linije, jednom po repozitorijumu:

```
# .gitattributes
*.pdf merge=cadcraft

# jednom, na svakom računaru
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita, pokreni `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial uzimaju iste tri datoteke u svojoj postavci alata za spajanje. Datoteka sa zadacima koja prati crtež (`<name>.markups.json`, vidi [Oznake koje djeluju](topic:markups-that-act)) spaja se na isti način, kao običan tekst.

## Pravila

- Oznaka promijenjena samo s jedne strane se uzima. Ista promjena s obje strane se uzima jednom.
- Ista oznaka promijenjena na dva načina je **sukob**: tvoja strana ostaje, a izvještaj navodi obje. Otvori rezultat i popravi tu oznaku ručno.
- Oznaka dodana s bilo koje strane se zadržava. Oznaka uklonjena s jedne strane, a netaknuta s druge, se uklanja. Uklonjena s jedne strane, a promijenjena s druge: uklonjena i prijavljena.
- Slojevi, kolone, zapisi i bilješke prate ista pravila.
- Zapečaćene privatne bilješke se nikada ne otvaraju: blokovi obje strane se zadržavaju kakvi jesu.

Spojena datoteka je potpuno ponovno pisanje tvoje kopije, kao i MarkupCraft-ovo vlastito Spasi. Ništa se ne otprema; sve se odvija na tvom računaru.

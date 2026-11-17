---
title: Spajanje izmjena dviju osoba u jednom PDF-u
summary: Neka git, Fossil ili Mercurial spoje dvije označene kopije istog PDF-a oznaku po oznaku, uključujući bilješke.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, sukob, trosmjerno, cadcraft merge, gitattributes, oznake, bilješke, tim, dvije kopije
from: a450a9ef
---

Dvije osobe označavaju isti PDF u dvije kopije. Ako su dirale različite oznake, kopije može spojiti program umjesto ručno.

## Što to omogućuje

Svaka oznaka koju MarkupCraft spremi nosi svoje ime (njen id) unutar PDF-a, a ime se nikad ne mijenja. Spajanje traži oznake po tom imenu, a ne po njihovu mjestu u datoteci, jer svaki program pri spremanju preslaguje mjesta. Bilješke i zapečaćene privatne bilješke sparuju se na isti način.

Listovi se nikad ne diraju: obje kopije moraju imati isti broj stranica. Ako se razlikuju, spajanje zadržava vašu kopiju kakva jest i to javlja, jer dodavanje ili uklanjanje stranica je posao za osobu.

## Postavljanje

Git treba dva retka jednom po repozitoriju:

```
# .gitattributes
*.pdf merge=cadcraft

# jednom, na svakom računalu
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita pokrenite `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial uzimaju ove tri datoteke u vlastitoj postavci alata za spajanje. Datoteka zadataka koja ide uz crtež (`<name>.markups.json`, vidi [Oznake koje djeluju](topic:markups-that-act)) spaja se na isti način, kao običan tekst.

## Pravila

- Oznaka promijenjena samo s jedne strane preuzima se. Ista promjena s obje strane preuzima se jednom.
- Ista oznaka promijenjena na dva načina je **sukob**: vaša strana ostaje, a izvješće navodi obje. Otvorite rezultat i ručno popravite tu oznaku.
- Oznaka dodana s jedne ili druge strane se zadržava. Ona uklonjena s jedne strane, a netaknuta s druge, se uklanja. Uklonjena s jedne strane, a promijenjena s druge: uklonjena, i prijavljena.
- Slojevi, stupci, zapisi i bilješke slijede ista pravila.
- Zapečaćene privatne bilješke se nikad ne otvaraju: blokovi obiju strana zadržavaju se kakvi jesu.

Spojena datoteka je potpuno prepisivanje vaše kopije, kao i spremanje u samom MarkupCraftu. Ništa se ne učitava; sve se izvodi na vašem računalu.

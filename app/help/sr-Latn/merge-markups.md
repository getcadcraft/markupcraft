---
title: Spajanje izmena dve osobe u jednom PDF-u
summary: Neka git, Fossil ili Mercurial spoje dve označene kopije istog PDF-a, označavanje po označavanje, uključujući beleške.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, sukob, tri strane, cadcraft merge, gitattributes, označavanja, beleške, tim, dve kopije
from: a450a9ef
---

Dve osobe označavaju isti PDF u dve kopije. Ako su dirali različita označavanja, kopije može da spoji program umesto ručno.

## Šta to omogućava

Svako označavanje koje MarkupCraft sačuva nosi sopstveno ime (svoj ID) unutar PDF-a, a ime se nikada ne menja. Spajanje traži označavanja po tom imenu, a ne po njihovom mestu u datoteci, jer svaki program pri čuvanju renumeriše mesta. Beleške i zapečaćene privatne beleške se upoređuju na isti način.

Listovi se nikada ne diraju: obe kopije moraju imati isti broj stranica. Ako se razlikuju, spajanje zadržava vašu kopiju onakvu kakva je i to kaže, jer dodavanje ili uklanjanje stranica je posao za osobu.

## Podešavanje

Git treba dva reda jednom po repozitorijumu:

```
# .gitattributes
*.pdf merge=cadcraft

# jednom, na svakom računaru
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita, pokrenite `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial uzimaju iste tri datoteke u svom podešavanju alata za spajanje. Datoteka zadataka koja ide uz crtež (`<name>.markups.json`, pogledajte [Označavanja koja deluju](topic:markups-that-act)) spaja se na isti način, kao običan tekst.

## Pravila

- Označavanje promenjeno samo sa jedne strane uzima se. Ista promena sa obe strane uzima se jednom.
- Isto označavanje promenjeno na dva načina je **sukob**: vaša strana ostaje, a izveštaj navodi obe. Otvorite rezultat i ručno popravite to označavanje.
- Označavanje dodato sa bilo koje strane se zadržava. Ono uklonjeno sa jedne strane, a nedirnuto na drugoj, se uklanja. Uklonjeno sa jedne strane, a promenjeno na drugoj: uklanja se, i prijavljuje se.
- Slojevi, kolone, zapisi i beleške prate ista pravila.
- Zapečaćene privatne beleške se nikada ne otvaraju: blokovi obe strane zadržavaju se kakvi jesu.

Spojena datoteka je potpuni ponovni zapis vaše kopije, kao i sopstveno čuvanje u programu MarkupCraft. Ništa se ne otprema; sve se izvršava na vašem računaru.

---
title: Združite urejanja dveh ljudi v enem PDF-ju
summary: Naj git, Fossil ali Mercurial združijo dve označeni kopiji istega PDF-ja, označbo za označbo, vključno z opombami.
keywords: združevanje, git, fossil, mercurial, nadzor različic, konflikt, trismerno, cadcraft merge, gitattributes, označbe, opombe, ekipa, dve kopiji
from: a450a9ef
---

Dva človeka označita isti PDF v dveh kopijah. Če sta se dotaknila različnih označb, lahko kopiji združi program namesto ročno.

## Kaj omogoča delovanje

Vsaka označba, ki jo MarkupCraft shrani, nosi svoje ime (svoj id) v PDF-ju, ime pa se nikoli ne spremeni. Združevanje išče označbe po tem imenu, ne po njihovem mestu v datoteki, ker vsak program ob shranjevanju prešteva mesta. Opombe in zapečatene zasebne opombe se ujemajo na enak način.

Listov se nikoli ne dotakne: obe kopiji morata imeti enako število strani. Če se razlikujeta, združevanje ohrani vašo kopijo takšno, kakršna je, in to pove, saj je dodajanje ali odstranjevanje strani delo za človeka.

## Nastavitev

Git potrebuje dve vrstici enkrat na skladišče:

```
# .gitattributes
*.pdf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Brez gita zaženite `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil in Mercurial vzameta iste tri datoteke v svoji nastavitvi orodja za združevanje. Datoteka nalog, ki spremlja risbo (`<name>.markups.json`, glejte [Označba kot naloga](topic:markups-that-act)), se združuje na enak način, kot navadno besedilo.

## Pravila

- Označba, spremenjena samo na eni strani, se vzame. Ista sprememba na obeh straneh se vzame enkrat.
- Ista označba, spremenjena na dva načina, je **konflikt**: vaša stran ostane, poročilo pa navede obe. Odprite rezultat in to označbo popravite ročno.
- Označba, dodana na katerikoli strani, se ohrani. Označba, odstranjena na eni strani in nedotaknjena na drugi, se odstrani. Odstranjena na eni strani in spremenjena na drugi: odstranjena in prijavljena.
- Sloji, stolpci, zapisi in opombe sledijo istim pravilom.
- Zapečatene zasebne opombe se nikoli ne odprejo: bloki obeh strani ostanejo, kakršni so.

Združena datoteka je popolnoma prepisana vaša kopija, kakor pri lastnem shranjevanju MarkupCrafta. Nič se ne naloži; vse teče na vašem računalniku.

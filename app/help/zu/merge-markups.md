---
title: Hlanganisa izinguquko zabantu ababili kwi-PDF eyodwa
summary: Vumela i-git, i-Fossil noma i-Mercurial zihlanganise amakhophi amabili e-PDF efanayo ngokumaka ngokumaka, kuhlanganise namanothi.
keywords: hlanganisa, git, fossil, mercurial, ukulawula inguqulo, ukungqubuzana, three-way, cadcraft merge, gitattributes, okumakiwe, amanothi, ithimba, amakhophi amabili
from: a450a9ef
---

Abantu ababili bamaka i-PDF efanayo ezinkophini ezimbili. Uma bathinte okumakiwe okuhlukile, amakhophi angahlanganiswa yiyo ngohlelo esikhundleni sokwenziwa ngesandla.

## Yini eyenza kusebenze

Konke ukumaka okulondolozwa yi-MarkupCraft kuthwala igama lakho (i-id) ngaphakathi kwe-PDF, futhi leli gama aliguquki. Ukuhlanganisa kufuna okumakiwe ngegama lawo, hhayi ngendawo yawo efayeleni, ngoba zonke izinhlelo ziyaphinda zinikeze izindawo lapho zilondoloza. Amanothi namanothi ayimfihlo avaliwe ahlanganiswa ngale ndlela.

Amashidi awathintwa ngalutho: amakhophi womabili kumele abe nenani elifanayo lamakhasi. Uma ehluka, ukuhlanganisa kugcina ikhophi lakho njengoba likunjalo, bese kuyasho lokho, ngoba ukungeza noma ukususa amakhasi kuyisinqumo somuntu.

## Lungisa

Git idinga imigqa emibili kanye ngomsebenzi ngamunye:

```
# .gitattributes
*.pdf merge=cadcraft

# kanye, kwikhompyutha ngayinye
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Uma ungenayo i-git, sebenzisa `cadcraft merge <base> <ours> <theirs> -o <result>`. I-Fossil ne-Mercurial zithatha amafayela amathathu afanayo esethingi yazo yethuluzi lokuhlanganisa. Ifayela lomsebenzi elihamba nomdwebo (`<name>.markups.json`, bona [Okumakiwe okwenzayo](topic:markups-that-act)) lihlanganiswa ngendlela efanayo, njengombhalo ojwayelekile.

## Imithetho

- Ukumaka okushintshe ohlangothini olulodwa kuphela kuthathwa. Ushintsho olufanayo kuzo zombili izinhlangothi luthathwa kanye.
- Ukumaka okushintshwe ngezindlela ezimbili ngokufanayo kuyi-**ukungqubuzana**: uhlangothi lwakho luyahlala futhi umbiko ubala zombili. Vula umphumela ubuye ulungise lokho kumaka ngesandla.
- Ukumaka okungezwe noma yiluphi uhlangothi kuyagcinwa. Okususwe ohlangothini olulodwa kodwa okungaguquki kolunye kuyasuswa. Okususwe ohlangothini olulodwa kodwa oshintshiwe kolunye: kususwa, kuphinde kubikwe.
- Amaleyili, amakholomu, amarekhodi namanothi alandela imithetho efanayo.
- Amanothi ayimfihlo avaliwe ahlala engavulwa: amabhlokhi wazo zombili izinhlangothi agcinwa njengoba ekhona.

Ifayela elihlanganisiwe ngumbhalo ophelele kabusha wekhophi lakho, njengokulondolozwa okwenziwa yi-MarkupCraft. Akukho okulayishwa; konke kusebenza ekhompyutheni yakho.

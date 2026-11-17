---
title: Két személy szerkesztéseinek összefésülése egy PDF-en
summary: Hagyja, hogy a git, a Fossil vagy a Mercurial jelölésenként összefésülje ugyanannak a PDF-nek két jelölt másolatát, beleértve a megjegyzéseket is.
keywords: összefésülés, git, fossil, mercurial, verziókezelés, ütközés, háromirányú, cadcraft merge, gitattributes, jelölések, megjegyzések, csapat, két másolat
from: a450a9ef
---

Két ember ugyanazt a PDF-et jelöli két másolatban. Ha különböző jelöléseket érintettek, a másolatokat egy program összefésülheti, nem kézzel.

## Ez mitől működik

Minden MarkupCraft által mentett jelölés a PDF-ben viszi a saját nevét (azonosítóját), és a név soha nem változik. Az összefésülés a jelöléseket ez alapján keresi, nem a fájlbeli helyük szerint, mert minden program átszámozza a helyeket mentéskor. A megjegyzéseket és a lezárt privát megjegyzéseket ugyanígy párosítja.

A rajzlapokhoz soha nem nyúl: mindkét másolatnak ugyanannyi oldalt kell tartalmaznia. Ha eltér, az összefésülés megtartja az Ön másolatát változatlanul, és ezt jelzi, mert oldalak hozzáadása vagy eltávolítása emberi feladat.

## Beállítás

A gitnek egyszer, tárolónként két sor kell:

```
# .gitattributes
*.pdf merge=cadcraft

# egyszer, minden számítógépen
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git nélkül futtassa a `cadcraft merge <base> <ours> <theirs> -o <result>` parancsot. A Fossil és a Mercurial ugyanezt a három fájlt veszi a saját összefésülő-eszköz beállításában. A rajzhoz tartozó feladatfájl (`<name>.markups.json`, lásd [Működő jelölések](topic:markups-that-act)) ugyanígy, egyszerű szövegként íródik össze.

## A szabályok

- Az egyik oldalon megváltoztatott jelölés átkerül. Ugyanaz a változás mindkét oldalon egyszer kerül át.
- Ugyanaz a jelölés kétféleképpen módosítva **ütközés**: az Ön oldala marad, a jelentés pedig mindkettőt felsorolja. Nyissa meg az eredményt, és javítsa kézzel azt a jelölést.
- Az egyik oldalon hozzáadott jelölés megmarad. Az egyik oldalon eltávolított, a másikon érintetlen jelölés törlődik. Az egyik oldalon eltávolított, a másikon módosított jelölés törlődik, és jelentésre kerül.
- A rétegek, oszlopok, bejegyzések és megjegyzések ugyanezeket a szabályokat követik.
- A lezárt privát megjegyzéseket soha nem nyitják meg: mindkét oldal blokkjai változatlanul megmaradnak.

Az összefésült fájl az Ön másolatának teljes újraírása, ahogy a MarkupCraft saját mentése is. Semmi nem töltődik fel; minden az Ön számítógépén fut.

---
title: Zlúčenie úprav dvoch ľudí v jednom PDF
summary: Nechajte git, Fossil alebo Mercurial zlúčiť dve označené kópie toho istého PDF poznámku po poznámke, vrátane poznámok.
keywords: zlúčenie, git, fossil, mercurial, správa verzií, konflikt, trojcestné zlúčenie, cadcraft merge, gitattributes, poznámky, komentáre, tím, dve kópie
from: a450a9ef
---

Dvaja ľudia označia to isté PDF v dvoch kópiách. Ak sa dotkli rôznych poznámok, kópie môže zlúčiť program namiesto ručne.

## Čo to umožňuje

Každá poznámka, ktorú MarkupCraft uloží, nesie vo vnútri PDF svoj vlastný názov (jej id) a ten sa nikdy nemení. Zlúčenie vyhľadáva poznámky podľa tohto názvu, nie podľa ich miesta v súbore, pretože každý program pri uložení prečísluje miesta. Poznámky a zapečatené súkromné poznámky sa párujú rovnako.

Listy sa nikdy nemenia: obe kópie musia mať rovnaký počet strán. Ak sa líšia, zlúčenie ponechá vašu kópiu tak, ako je, a povie to, pretože pridávanie alebo odstraňovanie strán je úloha pre človeka.

## Nastavenie

Git potrebuje dva riadky raz pre každý repozitár:

```
# .gitattributes
*.pdf merge=cadcraft

# raz, na každom počítači
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gitu spustite `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil a Mercurial prijímajú tie isté tri súbory vo svojom nastavení nástroja na zlúčenie. Úlohový súbor, ktorý putuje spolu s výkresom (`<name>.markups.json`, pozri [Poznámky, ktoré konajú](topic:markups-that-act)), sa zlučuje rovnako, ako obyčajný text.

## Pravidlá

- Poznámka zmenená iba na jednej strane sa prevezme. Rovnaká zmena na oboch stranách sa prevezme raz.
- Rovnaká poznámka zmenená dvoma spôsobmi je **konflikt**: vaša strana zostane a správa uvedie obe. Otvorte výsledok a opravte túto poznámku ručne.
- Poznámka pridaná na ktorejkoľvek strane sa zachová. Poznámka odstránená na jednej strane a nezmenená na druhej sa odstráni. Odstránená na jednej strane a zmenená na druhej: odstránená a nahlásená.
- Hladiny, stĺpce, záznamy a poznámky sa riadia rovnakými pravidlami.
- Zapečatené súkromné poznámky sa nikdy neotvárajú: bloky oboch strán sa zachovajú tak, ako sú.

Zlúčený súbor je úplné prepísanie vašej kópie, ako pri vlastnom Uložiť v MarkupCraft. Nič sa nenahráva; všetko beží na vašom počítači.

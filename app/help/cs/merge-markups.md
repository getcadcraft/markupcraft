---
title: Sloučení úprav jednoho PDF od dvou lidí
summary: Nechte git, Fossil nebo Mercurial sloučit dvě označené kopie stejného PDF po jednotlivých poznámkách, včetně komentářů.
keywords: sloučení, git, fossil, mercurial, správa verzí, konflikt, třícestné, cadcraft merge, gitattributes, poznámky, komentáře, tým, dvě kopie
from: a450a9ef
---

Dva lidé označí stejné PDF ve dvou kopiích. Pokud se dotkli různých poznámek, mohou kopie sloučit program, místo aby se to dělalo ručně.

## Co to umožňuje

Každá poznámka, kterou MarkupCraft uloží, nese své vlastní jméno (své id) uvnitř PDF a to jméno se nikdy nemění. Sloučení hledá poznámky podle tohoto jména, ne podle jejich místa v souboru, protože každý program při ukládání místa přečísluje. Komentáře a zapečetěné soukromé poznámky se páruje stejným způsobem.

Listy se nikdy nemění: obě kopie musí mít stejný počet stran. Pokud se počty liší, sloučení ponechá vaši kopii beze změny a řekne to, protože přidávat nebo odebírat strany je práce pro člověka.

## Nastavení

Git potřebuje jednou na repozitář dva řádky:

```
# .gitattributes
*.pdf merge=cadcraft

# jednou, na každém počítači
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gitu spusťte `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil a Mercurial berou tři stejné soubory ve svém nastavení nástroje pro sloučení. Úlohový soubor, který se nese s výkresem (`<name>.markups.json`, viz [Poznámky, které jednají](topic:markups-that-act)), se slučuje stejně, jako prostý text.

## Pravidla

- Poznámka změněná jen na jedné straně se převezme. Stejná změna na obou stranách se převezme jednou.
- Stejná poznámka změněná dvěma způsoby je **konflikt**: vaše strana zůstane a hlášení uvede obě. Otevřete výsledek a tu poznámku opravte ručně.
- Poznámka přidaná na kterékoli straně se zachová. Poznámka odebraná na jedné straně a na druhé nedotčená se odebere. Odebraná na jedné straně a změněná na druhé: odebrána a nahlášena.
- Vrstvy, sloupce, záznamy a komentáře se řídí stejnými pravidly.
- Zapečetěné soukromé poznámky se nikdy neotevírají: bloky obou stran se zachovají beze změny.

Sloučený soubor je úplný přepis vaší kopie, stejně jako vlastní Uložit v MarkupCraftu. Nic se nenahrává; vše běží na vašem počítači.

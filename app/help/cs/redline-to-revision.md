---
title: Odeslání poznámek kreslíři jako červených oprav
summary: Zapište otevřené poznámky jako soubor červených oprav pro toho, kdo kreslí změny, a pak načtěte jeho odpovědi, aby každá poznámka ukázala Přijato nebo Zamítnuto.
keywords: červené opravy, revize, kreslíř, přijmout, zamítnout, odpovědi, cc-redline, revizní oblak, použít poznámky
from: cb099d04
---

Revize je jen polovina práce; výkres se ještě musí změnit. Soubor červených oprav předá každou otevřenou poznámku kreslíři a jeho odpovědi přinesou výsledek zpět.

## Odeslání

1. Otevřete kartu {{ui:Tasks}} a otevřete {{ui:Redline to revision}}.
2. Zadejte revizi, ke které se poznámky vztahují (například B).
3. Zvolte {{ui:Export redline file}}.

Dostanete soubor `.redline.json` s jednou položkou za každou poznámku ve stavu Otevřeno: její list, kde se nachází (jako zlomky listu, takže se nový tisk v jiné velikosti stále shoduje, a v bodech), její slova, autor a vlákno a její úkol, pokud ho má. Komentáře jen pro čtení z jiných programů, obrázky a legendy se vynechají.

## Odpovědi

Strana kreslení odpoví u každé položky Přijato, Zamítnuto nebo Hotovo, s poznámkou, v souboru `.redline-answers.json`. Zvolte {{ui:Load answers file…}} a vyberte ho: každá poznámka dostane tento stav a poznámku kreslíře ve svém vlákně a úkol, jehož poznámka byla přijata nebo hotova, se uzavře. Jeden krok zpět vezme všechny odpovědi zpět.

Formát souboru je v `docs/REDLINE-FORMAT.md`. Část CadCraft (čtení balíčku, přijímání nebo zamítání každé položky, revizní oblaky a protokol) se vyvíjí odděleně.

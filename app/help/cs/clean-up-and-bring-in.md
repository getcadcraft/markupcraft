---
title: Vyčištění tahů pera a načtení připomínek a postupu na stavbě
summary: Proměňte volné tahy pera na čáry, kružnice, oblouky a obdélníky; načtěte připomínky k povolení a postup průzkumu stavby jako poznámky.
keywords: pero, volný tah, vyčistit, narovnat, kružnice, čára, obdélník, oblouk, povolení, připomínky, postup, dron, sken, průzkum, poznámky, csv
from: 547d8e42
---

## Vyčištění tahů pera

Kreslete {{ui:Pero}}, pak otevřete nabídku {{ui:Více}} ve skupině Úpravy a zvolte {{ui:Vyčistit tahy pera}}. Každý vybraný tah pera se stane tím, čím měl být: rovný tah se stane čárou (přesně vodorovnou nebo svislou, pokud se tomu jen blížil), kulatý elipsou, část kružnice obloukem, uzavřený čtyřrohý tah obdélníkem a cokoli jiného mnohočárou nebo mnohoúhelníkem. Volné konce tahů nakreslených spolu se přitáhnou k sobě. Pokud není vybrán žádný tah pera, vyčistí se všechny tahy pera na otevřeném listu. Je to jeden krok zpět: {{key:Ctrl+Z}} vrátí původní volný tah. Tvar se počítá na vašem počítači podle pevných pravidel; nic se nikam neposílá.

## Načtení připomínek k revizi

Balíček povolení BimCraftu obsahuje `01-review-comments.csv`: připomínky, které pravděpodobně vznese kontrolor plánů, každou s pravidlem, článkem, tím, co je třeba, co bylo zjištěno, a tím, co udělat. V kartě {{ui:Úkoly}} otevřete {{ui:Připomínky ke stavebnímu povolení}} a zvolte {{ui:Načíst připomínky (CSV)}}. Každá připomínka se stane poznámkou ve stavu Otevřeno ve sloupci podél levého okraje otevřeného listu; přetáhněte každou na místo, kterého se týká. Vznikají z existujících kontrol, ne od úředníka stavebního úřadu.

## Načtení rámečků uzlů HAZOP

Doplněk CadCraftu P&ID kreslí uzly studie HAZOP a může je uložit jako {{ui:Rámečky uzlů HAZOP}} (soubor JSON). Otevřete zde vytištěný list P&ID, přejděte na kartu {{ui:Úkoly}}, otevřete {{ui:Rámečky uzlů HAZOP}} a zvolte {{ui:Načíst rámečky uzlů (JSON)}}. Každý uzel se stane otevřeným obdélníkem na listu s číslem, názvem, zařízením a potrubími v textu; tým zapisuje své zjištění jako odpovědi na něj. List se bere jako vytištěný v plné velikosti od levého dolního rohu výkresu. Pokud byl vytištěn v jiném měřítku, nejprve do pole {{ui:Vytištěno v měřítku}} napište toto číslo (0.5 pro 1:2). Uzel, který leží mimo stránku, se nevykreslí a panel řekne, kolik jich je. Značky jsou pomůckou pro studii: ukazují, kde uzly jsou, a studii nehodnotí.

## Načtení postupu na stavbě

CivilCraft vede řádek pro každý let dronu nebo sken stavby. V kartě {{ui:Úkoly}} otevřete {{ui:Postup na stavbě}} a zvolte {{ui:Načíst postup (JSON)}}. Každý průzkum se stane poznámkou na otevřeném listu, která říká, kolik je hotovo, co zbývá vykopat nebo zasypat, co bylo přehloubeno nebo přesypáno a co vyčnívá z plánu. Průzkum s něčím mimo plán zůstane Otevřeno; čistý průzkum se přijme (Přijato).

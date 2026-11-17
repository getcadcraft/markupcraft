---
title: Problémy, revize a změnový přehled výkresů
summary: Veďte jednu historii problémů spolu s modelem architekta: načtěte problémy, zapisujte pokyny na stavbu, dílenské výkresy a propojené modely k problému a čtěte změnový přehled výkresů.
keywords: problém, revize, revizní, změnový přehled, změnový přehled výkresů, rejstřík výkresů, pokyn na stavbu, dílenský výkres, propojený model, výběrové řízení, stavba, historie problémů, revizní oblak, oblak, sada poznámek
from: e4688f64
---

## Co uděláte

Pracujete ze stejné historie problémů jako zbytek týmu. Zjistíte, které listy odešly v které revizi, a zapisujete, co se děje na stavbě, k problému, ke kterému to patří.

## Postup

1. Otevřete **Problémy a revize**.
2. Zvolte **Načíst historii problémů** a vyberte soubor `.issues.json` uložený z BimCraft nebo jiné aplikace. Jeho problémy a záznamy se přidají k vašim. Nic se nenahrazuje.
3. Zvolte **Přidat záznam** pro pokyn na stavbu, dílenský výkres, sadu poznámek, propojený model nebo poznámku. Vyberte problém, ke kterému patří, a jeho stav. Vybraný soubor se zapíše podle názvu, velikosti a SHA-256; soubor zůstává tam, kde je.
4. **Změnový přehled výkresů** ukazuje jeden řádek pro každý list a jeden sloupec pro každý problém. Revize v závorkách byla vydána znovu beze změny.
5. **Stáhnout změnový přehled (CSV)** uloží problémy, tabulku listů a záznamy. **Uložit historii problémů** zapíše soubor, který čtou ostatní aplikace.

## Dobré vědět

- **Zaznamenat vybrané poznámky** zapíše vybrané poznámky k nejnovějšímu problému. Oblak se zapíše jako revizní oblak v revizi toho problému. Zvolte **Zobrazit** vedle záznamu, abyste na něj přeskočili.
- **Zaznamenat problém** vydá vaše označené listy jako problém. **Změny od** pak ukáže, které listy byly označeny po tomto problému.
- Historie se ukládá uvnitř označeného PDF. Není součástí funkce Zpět.
- Načtení stejného souboru dvakrát nic nepřidá dvakrát. Když dvě kopie obsahují tentýž záznam, ponechá se novější.

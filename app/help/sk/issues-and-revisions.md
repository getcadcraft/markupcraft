---
title: Vydania, revízie a zmenový záznam výkresov
summary: Udržujte jednu históriu vydaní s modelom architekta: načítajte vydania, zapisujte pokyny z terénu, dielenské výkresy a prepojené modely k vydaniu a čítajte zmenový záznam výkresov.
keywords: vydanie, revízia, revízie, zmenový záznam, zmenový záznam výkresov, register výkresov, pokyn na stavbe, dielenský výkres, prepojený model, verejná súťaž, stavba, história vydaní, revízny oblak, oblak, sada poznámok
from: e4688f64
---

## Čo budete robiť

Pracujte s rovnakou históriou vydaní ako zvyšok tímu. Pozrite si, ktoré listy vyšli v ktorej revízii, a to, čo sa deje na stavbe, si zapisujte oproti vydaniu, ku ktorému to patrí.

## Postup

1. Otvorte **Vydania a revízie**.
2. Vyberte **Načítať históriu vydaní** a zvoľte súbor `.issues.json` uložený z BimCraft alebo inej aplikácie. Jeho vydania a záznamy sa pridajú k vašim. Nič sa nenahrádza.
3. Vyberte **Pridať záznam** pre pokyn na stavbe, dielenský výkres, sadu poznámok, prepojený model alebo poznámku. Vyberte vydanie, ku ktorému patrí, a jeho stav. Vybraný súbor sa zapíše podľa názvu, veľkosti a SHA-256; súbor zostáva tam, kde je.
4. **Zmenový záznam výkresov** ukazuje jeden riadok pre každý list a jeden stĺpec pre každé vydanie. Revízia v zátvorkách bola vydaná znova bez zmeny.
5. **Stiahnuť zmenový záznam (CSV)** uloží vydania, tabuľku listov a záznamy. **Uložiť históriu vydaní** zapíše súbor, ktorý čítajú ostatné aplikácie.

## Dobré vedieť

- **Zaznamenať vybrané poznámky** priradí vybrané poznámky k najnovšiemu vydaniu. Oblak sa zaznamená ako revízny oblak v revízii toho vydania. Vyberte **Zobraziť** vedľa záznamu, aby ste sa naň presunuli.
- **Zaznamenať vydanie** vydá vaše listy s poznámkami. **Zmeny od** potom ukáže, ktoré listy boli označené po tom vydaní.
- História je uložená vnútri PDF s poznámkami. Nie je súčasťou funkcie späť.
- Načítanie toho istého súboru dvakrát nepridá nič dvakrát. Keď dve kópie obsahujú rovnaký záznam, ponechá sa novší.

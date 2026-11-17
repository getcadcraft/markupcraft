---
title: Zoznam zmien medzi revíziami
summary: Porovnajte dve sady výkresov a získajte prostý zoznam, list po liste, kde sa zmenili kresba a text. Je pripravený na čítanie, kopírovanie alebo odovzdanie vášmu asistentovi.
keywords: čo sa zmenilo, zmeny, zoznam revízií, zoznam porovnania, prostý zoznam, opísať, asistent, rozdiel, súhrn revízie
from: bab93d2e
---

Nástroje na porovnanie zobrazujú zmeny na liste. Tento nástroj ich zapíše.

1. Otvorte obe revízie (pozri [Otvorenie sady výkresov](topic:open-a-plan-set)).
2. Otvorte kartu {{ui:Compare}}, potom {{ui:Compare a whole set}}.
3. Vyberte skorší a neskorší súbor a zvoľte {{ui:List the changes}}.

Zoznam začína počtom („2 z 14 zodpovedajúcich listov zmenených; 1 nový; 1 vypustený“) a potom pokrýva každý zmenený list, od najväčšej zmeny: kde na liste (vľavo hore, v strede…), aká veľká je, či boli čiary pridané, odstránené alebo oboje, koľko poznámok sa tam nachádza a ktoré slová sa objavili alebo zmizli. Na kalibrovanom liste je veľkosť v reálnych jednotkách aj v palcoch na papieri.

Zoznam hovorí, čo je na stránke; nehovorí, čo to znamená. Čiara, ktorá sa posunula, môže byť stena alebo vynášacia čiara. Pripojený asistent môže zoznam prečítať nástrojom `revisions_changes` a vysvetliť ho slovami; zvyšok si pozriete na liste. {{ui:Copy the list}} zoznam skopíruje do schránky a {{ui:CSV}} zapíše jeden riadok na každú zmenu.

Listy sa párujú podľa čísla listu, ako v [Označenie revidovanej sady ako listov](topic:slip-sheet-a-revised-set). Zmeny menšie ako niekoľko bodov sa ignorujú a text, ktorý je súčasťou obrázka (skenu), nemá slová, ktoré by sa dali porovnať.

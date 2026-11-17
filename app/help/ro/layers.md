---
title: Straturile adnotărilor
summary: Puneți adnotările pe straturi cu nume, apoi afișați, ascundeți sau blocați fiecare strat; alte vizualizatoare PDF le pot comuta și ele.
keywords: straturi, strat, ascundere, afișare, blocare, grupare adnotări, disciplină, mecanic, electric, conținut opțional, ocg, vizibilitate
from: 0fbb4c26
---

Straturile grupează adnotările, de exemplu după disciplină sau după revizor. Ascundeți un strat ca să vedeți desenul de sub el sau blocați-l ca adnotările lui să nu fie mutate din greșeală.

## Creați un strat și desenați pe el

1. Deschideți {{ui:Straturi}}, din partea de sus a panoului {{ui:Foi}}.
2. Alegeți {{ui:Strat nou}}, scrieți un nume, de exemplu `Mechanical`, și alegeți {{ui:Adăugare strat}}.
3. Stratul nou devine stratul curent: fiecare adnotare pe care o desenați de acum va fi pe el. Alegeți numele altui strat sau {{ui:Fără strat}}, ca să schimbați unde ajung adnotările noi.

Pentru a muta o adnotare pe alt strat, selectați-o și alegeți stratul din {{ui:Strat}} din {{ui:Proprietăți}}. {{ui:Strat nou…}} de la capătul listei creează unul pe loc. Mutarea poate fi anulată cu {{key:Mod+Z}}.

## Afișare, ascundere și blocare

Fiecare rând de strat are două butoane:

- **Ochiul** afișează sau ascunde stratul. Adnotările ascunse nu sunt desenate și nu pot fi selectate; ele se numără totuși în lista {{ui:Adnotări}}.
- **Lacătul** păstrează adnotările stratului pe foaie, dar le împiedică să fie selectate, mutate sau șterse.

Butonul cu creion redenumește un strat și mută adnotările odată cu el. Filtrați lista {{ui:Adnotări}} după {{ui:Strat}} ca să vedeți adnotările unui singur strat.

## În PDF-ul salvat

Fiecare strat devine un strat PDF (conținut opțional). Alte vizualizatoare PDF listează straturile în panoul lor de straturi și le pot comuta; un strat ascuns pornește ascuns și acolo. Straturile pe care le avea deja desenul, de exemplu straturile CAD, rămân cum erau. Când redeschideți copia în MarkupCraft, adnotările revin pe straturile lor, ascunse și blocate așa cum le-ați lăsat.

## De reținut

- Ascunderea și blocarea nu sunt modificări: nu se anulează cu {{key:Mod+Z}}, dar se salvează în PDF.
- Copierea și lipirea păstrează stratul unei adnotări.
- O copie aplatizată desenează fiecare adnotare în pagină, indiferent de strat. Vezi [Salvarea unei copii aplatizate](topic:flatten).

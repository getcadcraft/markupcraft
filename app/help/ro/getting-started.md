---
title: Primii pași cu MarkupCraft
summary: Deschideți un set de planuri, puneți primul nor de revizuire și primul indicator pe o foaie și salvați o copie cu adnotări.
keywords: primii pași, start, deschidere pdf, revizuire, adnotare, redline, creion roșu, set de planuri, tutorial, pornire rapidă
from: 0b1aae4e
---

MarkupCraft este pentru revizuirea desenelor: deschideți seturi de planuri PDF, le adnotați cu nori, indicatori, text, ștampile și măsurători, urmăriți starea fiecărui comentariu și salvați o copie a PDF-ului pe care o poate afișa orice vizualizator PDF.

Rulează în browserul web. PDF-urile se deschid pe propriul calculator și **nu sunt încărcate niciodată**. Salvarea descarcă o copie nouă; fișierul original nu se modifică.

:::note
MarkupCraft este în dezvoltare. Ajutorul descrie versiunea pe care o rulați. Lucrurile pe care nu le face încă sunt listate în [Ce nu este încă realizat](topic:not-built-yet).
:::

## Ce este necesar

- Un Chrome, Edge, Firefox sau Safari recent, pe un calculator Mac, Windows sau Linux, ori Safari sau Chrome pe un iPad. Vezi [Browsere și calculatoare](common:browsers).
- Unul sau mai multe fișiere PDF. Un set întreg de planuri poate fi un singur PDF sau mai multe.
- Un mouse cu rotiță este cel mai comod. Un trackpad funcționează, la fel ca un ecran tactil (vezi [Revizuire pe iPad sau ecran tactil](topic:review-on-a-tablet)).

## Prima revizuire în zece pași

1. Deschideți MarkupCraft în browser. Mijlocul ecranului spune „Deschideți un set de planuri”.
2. Alegeți {{ui:Deschidere PDF-uri}} (sau {{ui:Deschidere}} la capătul stâng al barei de instrumente, ori apăsați {{key:Mod+O}}), selectați unul sau mai multe PDF-uri și confirmați.
   Puteți trage PDF-uri din {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} și le puteți lăsa în zona foii.
   Prima dată, bara de stare de jos spune „Se încarcă cititorul PDF…”. Apoi fiecare pagină devine o foaie în lista {{ui:Foi}} din stânga, iar prima foaie umple mijlocul.
3. Faceți clic pe o foaie din listă ca să o afișați. Rotiți rotița mouse-ului peste foaie ca să măriți acolo unde se află cursorul.
4. Alegeți {{ui:Nor}} din grupul {{ui:Revizuire}} al barei de instrumente (sau apăsați {{key:C}}).
   Prima dată când alegeți un instrument de desen, MarkupCraft cere numele autorului. Scrieți-l și alegeți {{ui:Salvare}}. Fiecare adnotare îl înregistrează. (Mai multe în [Setarea numelui autorului](topic:set-your-name).)
5. Trageți un dreptunghi în jurul zonei pe care vreți să o marcați. Apare un nor de revizuire roșu, care este selectat.
6. Alegeți {{ui:Indicator}} din grupul {{ui:Adnotare}} (sau apăsați {{key:K}}). Apăsați pe lucrul la care indicați, trageți până unde trebuie să fie textul și eliberați.
7. Scrieți comentariul în caseta care apare. Faceți clic oriunde în afara casetei (sau apăsați {{key:Mod+Enter}}) ca să terminați.
8. Apăsați {{key:Esc}} de două ori: o dată ca să anulați selecția, a doua oară ca să reveniți la instrumentul {{ui:Selectare}}. Faceți clic pe nor. Fila {{ui:Proprietăți}} din dreapta arată cine l-a făcut, când și {{ui:Stare}}.
9. Alegeți {{ui:Salvare}} din bara de instrumente (sau apăsați {{key:Mod+S}}).
   Browserul descarcă o copie cu un nume de tipul „A-Plans (marked up).pdf”. Bara de stare arată câte adnotări au fost scrise.
10. Deschideți copia în orice vizualizator PDF ca să verificați: norul și indicatorul sunt acolo, ca adnotări PDF obișnuite, cu numele autorului.

Ca să continuați mai târziu, deschideți copia „(marked up)” în MarkupCraft. Adnotările revin editabile, cu stările, răspunsurile și numerele de remediere ale lor.

## Online și offline

:::online
Sunteți online. MarkupCraft încarcă cititorul PDF prima dată când deschideți un PDF și scriitorul PDF prima dată când salvați. Pentru a lucra fără conexiune mai târziu (la o vizită pe șantier, în avion), alegeți {{ui:Salvare pentru offline}} în bara de sus acum și așteptați „Pregătit pentru offline”. Copia include cititorul și scriitorul PDF, astfel încât deschiderea și salvarea PDF-urilor funcționează apoi offline. Vezi [Lucrul offline](common:offline).
:::

:::offline
Sunteți offline. Dacă bara de sus spune „Pregătit pentru offline”, MarkupCraft a fost salvat pentru utilizare offline în acest browser și totul funcționează: deschiderea, adnotarea, măsurarea, salvarea. Dacă nu, folosiți ce s-a încărcat deja în această filă și nu reîncărcați pagina până reveniți online. Vezi [Lucrul offline](common:offline).
:::

## Ce ține minte aplicația și ce nu

- **Adnotările sunt în PDF-ul salvat.** Nimic nu se păstrează pe un server. Aplicația nu salvează PDF-ul de la sine, dar păstrează o copie de recuperare în acest browser până îl salvați. Salvați înainte de a închide fila; browserul întreabă mai întâi dacă încercați să plecați cu adnotări nesalvate (cu excepția iPad-ului, vezi [Revizuire pe iPad sau ecran tactil](topic:review-on-a-tablet)).
- **Numele, stilurile instrumentelor și trusa de instrumente** rămân în acest browser pe acest calculator. Un alt browser sau calculator pornește de la zero, iar golirea datelor site-ului din browser le șterge. Vezi [Ce rămâne în acest browser](topic:browser-storage).
- Salvarea în cloud și sesiunile de revizuire partajate între persoane nu sunt disponibile încă.

## Unde mergeți mai departe

- [O prezentare a ecranului](topic:workspace)
- [Adnotați o foaie](topic:mark-up-a-sheet)
- [Calibrați o foaie și măsurați](topic:calibrate-and-measure)
- [Trecerea de la alt software de adnotare](topic:coming-from) dacă revizuiți deja desene într-un alt program.

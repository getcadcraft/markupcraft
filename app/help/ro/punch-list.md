---
title: Realizarea unei liste de remedieri
summary: Transformați adnotările în elemente numerotate de remediat, cu responsabil, termen și stare, și exportați lista.
keywords: listă de remedieri, remediere, listă de defecte, neconformități, probleme de teren, observație, atribuire, responsabil, termen, închidere lucrări, parcurgere, număr
from: b98b38e6
---

Un element de remediat este o adnotare cu un număr, un responsabil, un termen și o stare a elementului. Numărul se desenează pe foaie lângă adnotare, astfel încât foaia tipărită și lista să se potrivească.

## Adăugați elemente

1. Adnotați fiecare problemă de pe foi: un nor, un indicator, o notă, orice.
2. Selectați una sau mai multe dintre ele (vedeți [Selectarea, mutarea și modificarea adnotărilor](topic:select-and-edit)).
3. Fie deschideți fila {{ui:Listă de remedieri}} și alegeți {{ui:Adăugare selecție în lista de remedieri}}, fie alegeți {{ui:Adăugare în lista de remedieri}} în {{ui:Proprietăți}}.

Rezultat: fiecare adnotare primește următorul număr (1, 2, 3…), în ordinea foilor și apoi în ordinea în care au fost desenate. Pe foaie apare o insignă numerotată, iar bara de stare spune „Au fost adăugate 3 elemente în lista de remedieri.” Adnotările care au deja număr și comentariile doar pentru citire sunt sărite.

## Completați detaliile

În fila {{ui:Listă de remedieri}}, fiecare element arată numărul, subiectul, textul, foaia și starea, cu trei câmpuri sub el. Aceleași câmpuri sunt în {{ui:Proprietăți}}, sub „Listă de remedieri”, când adnotarea este selectată:

- {{ui:Responsabil}}: un nume sau o specializare, ca text liber.
- {{ui:Termen}}: o dată, din selectorul de date.
- {{ui:Starea elementului}}: Deschis, În lucru, Gata de verificare sau Închis.

Faceți clic pe titlul unui element ca să mergeți la el pe foaie.

Starea elementului este separată de starea de revizuire a adnotării (Deschis, Acceptat, Respins, Finalizat). Folosiți starea elementului pentru lucrare și starea de revizuire pentru comentariu.

## Scoateți un element

Selectați adnotarea și alegeți {{ui:Scoatere din lista de remedieri}} în {{ui:Proprietăți}}. Adnotarea rămâne; se elimină doar numărul. Cât timp setul este deschis, numerele nu se refolosesc: următorul element primește următorul număr nou, deci un gol înseamnă că un element a fost scos. Când fișierul se deschide din nou, numerotarea continuă după cel mai mare număr din el.

## Exportați lista

Alegeți {{ui:Export CSV}} în fila {{ui:Listă de remedieri}}. Primiți „<nume> punch list.csv”, cu coloanele No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author și Created, în ordinea numerelor. Deschideți-l în orice aplicație pentru foi de calcul.

Numerele, responsabilii, termenele și stările elementelor sunt salvate și în PDF-ul adnotat, deci revin când îl redeschideți. Alți vizualizatori PDF arată insigna cu numărul ca parte a adnotării. Exportul BCF din lista de adnotări conține și responsabilul și termenul (vedeți [Bazele BCF](topic:bcf-basics)).

## Pe șantier cu o tabletă

Deschideți setul pe un iPad, parcurgeți șantierul și plasați o {{ui:Notă}} sau desenați un {{ui:Nor}} la fiecare problemă. Adăugați-le pe lista de remedieri pe parcurs și salvați înainte de a pleca. Vedeți [Revizuirea pe iPad sau ecran tactil](topic:review-on-a-tablet).

Un raport formatat în PDF sau în foaie de calcul al listei de remedieri și fotografiile atașate elementelor încă nu sunt disponibile.

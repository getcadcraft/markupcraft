---
title: O prezentare a ecranului
summary: Bara de instrumente, lista de foi, zona foii, cele cinci panouri din dreapta și bara de stare, după numele lor de pe ecran.
keywords: ecran, aspect, bara de instrumente, panouri, bară laterală, miniaturi, proprietăți, bară de stare, interfață, ecran complet, temă, mod întunecat
from: 18d82de6
---

MarkupCraft ocupă toată fereastra browserului. De sus în jos și de la stânga la dreapta:

## Bara de sus

Bara subțire de deasupra tuturor aparține familiei CadCraft, nu chiar MarkupCraft. Are:

- numele aplicației și ce versiune rulează,
- {{ui:Despre MarkupCraft}}, care deschide pagina aplicației de pe site,
- {{ui:Ajutor}}, care deschide acest ajutor într-un panou lateral (sau apăsați {{key:F1}}),
- {{ui:Salvare pentru offline}}, care păstrează MarkupCraft, cititorul și scriitorul PDF și acest ajutor în acest browser, ca să se deschidă fără conexiune; apoi spune „Pregătit pentru offline” (vezi [Lucrul offline](common:offline)),
- butonul de mod ecran ({{ui:Ecran complet}}), și
- {{ui:Setări}} (sau {{key:Mod+,}}), cu o filă {{ui:MarkupCraft}} pentru setările proprii ale aplicației și {{ui:General}} pentru cele pe care le împart toate aplicațiile CadCraft (vezi [Setările MarkupCraft](topic:settings)), și
- {{ui:Hârtie}} și {{ui:Model}}, temele luminoasă și întunecată. În {{ui:Model}} foile sunt desenate deschis pe fond întunecat; adnotările își păstrează propriile culori.

Butonul de mod ecran sau {{key:Ctrl+Shift+F}} trece prin trei moduri: normal, ecran complet și ecran complet cu barele ascunse. Cu barele ascunse, mutați cursorul la marginea de sus a ecranului (sau atingeți acolo) și acestea revin. Această scurtătură folosește tasta Ctrl pe orice calculator, inclusiv pe Mac.

:::note
În ecran complet, {{key:Esc}} face și browserul să iasă din ecran complet. Dacă voiați doar să anulați un desen, apăsați din nou {{key:Ctrl+Shift+F}} ca să reveniți la ecranul complet.
:::

## Bara de instrumente

Sub bara de sus, instrumentele sunt grupate și etichetate:

| Grup | Butoane |
|---|---|
| Fișier | {{ui:Deschidere}}, {{ui:Salvare}}, {{ui:Închidere}} |
| Selectare | {{ui:Selectare}}, {{ui:Pan}} |
| Desen | {{ui:Creion}}, {{ui:Evidențiere}}, {{ui:Linie}}, {{ui:Săgeată}}, {{ui:Dreptunghi}}, {{ui:Elipsă}}, {{ui:Polilinie}}, {{ui:Poligon}} |
| Revizuire | {{ui:Nor}}, {{ui:Nor liber}} |
| Adnotare | {{ui:Indicator}}, {{ui:Text}}, {{ui:Notă}}, {{ui:Ștampilă}} |
| Măsurare | {{ui:Calibrare}}, {{ui:Lungime}}, {{ui:Arie}}, {{ui:Numărare}} |
| Editare | {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}}, {{ui:Lipire}}, și {{ui:Mai multe}}: {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Selectare totală}}, {{ui:Anularea selecției}} |

Instrumentul pe care îl folosiți pare apăsat. Țineți cursorul peste un buton ca să vedeți tasta lui (de exemplu „Dreptunghi (R)”); meniul {{ui:Mai multe}} arată tasta fiecărei comenzi alături. Butoanele care nu pot acționa acum sunt estompate: {{ui:Copiere}} până selectați o adnotare, {{ui:Lipire}} până se copiază ceva. Un punct mic după {{ui:Salvare}} înseamnă că unele adnotări nu sunt salvate încă. Lista completă de taste este în [Tastatură și mouse](topic:keyboard).

Un instrument rămâne activ după ce desenați cu el, astfel încât puteți desena mai mulți nori la rând. Apăsați {{key:Esc}} (de două ori dacă noua adnotare este încă selectată) sau {{key:V}} ca să reveniți la {{ui:Selectare}}.

## Lista de foi (stânga)

{{ui:Foi}} listează fiecare pagină din fiecare PDF deschis. Fiecare rând arată o imagine mică a foii, numele ei, numărul foii sau fișierul și pagina, și câte adnotări are. Numărul de după titlu este numărul de foi.

- Faceți clic pe un rând ca să afișați foaia respectivă.
- Scrieți în {{ui:Căutare în foi}} ca să filtrați după numele foii, numărul foii sau numele fișierului. Apăsați {{key:Enter}} ca să deschideți prima potrivire.

Numele foilor vin din PDF, când le are. Vezi [Deschiderea unui set de planuri și trecerea între foi](topic:open-a-plan-set).

## Zona foii (mijloc)

Foaia la care lucrați. Înainte de a deschide ceva, afișează „Deschideți un set de planuri” cu un buton {{ui:Deschidere PDF-uri}}. Trageți PDF-uri oriunde aici ca să le deschideți.

Sub foaie, o bară îngustă conține:

- săgețile foii precedente și următoare și „3 din 12: A-101 — Plan de etaj” (țineți cursorul peste ea ca să vedeți fișierul și pagina),
- micșorare, caseta de zoom (tastați un procent și apăsați {{key:Enter}}; 100% este dimensiunea reală pe un ecran obișnuit), mărire,
- {{ui:Potrivire pagină}} și {{ui:Potrivire lățime}}.

Fiecare foaie își reține propriul zoom cât timp setul este deschis.

Când comparați două foi, aici apare o legendă: „Doar pe foaia veche”, „Doar pe foaia nouă” și „Pe ambele”. Vezi [Compararea a două revizii](topic:compare-revisions).

## Panourile (dreapta)

Cinci file:

| Filă | Ce arată |
|---|---|
| {{ui:Proprietăți}} | Adnotarea selectată: autor, date, valori măsurate, stare, subiect, text, comentariu, stil, răspunsurile și elementul din lista de remedieri. Cu un instrument de desen activ și nimic selectat, setările pe care le vor folosi adnotările noi. Cu nimic selectat și {{ui:Selectare}} activ, foaia: număr, titlu, de unde s-a citit numele, dimensiunea hârtiei, scara și {{ui:Redenumire foaie}}. |
| {{ui:Adnotări}} | Fiecare adnotare din setul deschis, cu filtre, și exporturile {{ui:CSV}} și {{ui:BCF}}. Vezi [Lista de adnotări](topic:markups-list-and-export). |
| {{ui:Listă de remedieri}} | Elemente numerotate de remediere, cu persoana desemnată, termen și stare. Vezi [Întocmirea unei liste de remedieri](topic:punch-list). |
| {{ui:Instrumente}} | Trusa de instrumente: instrumente salvate, cu stilul lor. Vezi [Trusa de instrumente](topic:tool-chest). |
| {{ui:Comparare}} | Suprapunerea a două foi. Vezi [Compararea a două revizii](topic:compare-revisions). |

## Bara de stare (jos)

- În stânga, unde se află cursorul pe foaie, în inch (sau milimetri, în [Setările](topic:settings)) pe hârtie.
- În mijloc, mesaje: ce așteaptă un instrument în continuare, ce s-a salvat tocmai, de ce ceva a fost refuzat. **Citiți-o când ceva nu se întâmplă.**
- Butonul de scară al foii („Necalibrat”, sau scara). Faceți clic pe el ca să setați scara. Vezi [Calibrați o foaie și măsurați](topic:calibrate-and-measure).
- Numele autorului („Setați numele” până când îl introduceți). Faceți clic pe el ca să-l schimbați.

## Pe un ecran mic

Sub aproximativ 1180 de pixeli lățime, panourile devin mai înguste, iar imaginile foilor se micșorează. Pe un ecran de telefon, părțile se așază una sub alta: bara de instrumente (derulați-o lateral), foaia, bara de stare, panourile, apoi lista de foi, jos. O tabletă în poziție orizontală păstrează aspectul complet.

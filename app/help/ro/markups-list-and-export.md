---
title: Lista adnotărilor, filtre și exporturi
summary: Vedeți fiecare adnotare din set, filtrați după foaie, autor, stare și tip, mergeți direct la una și exportați lista ca CSV sau BCF.
keywords: listă adnotări, listă, rezumat, xlsx, registru de calcul, raport PDF, import bcf, filtru, sortare, raport, export, csv, foaie de calcul, bcf, bcfzip, probleme, listă de comentarii, salt
from: 6c70261e
---

## Deschideți lista

Alegeți fila {{ui:Adnotări}} din dreapta. Fiecare adnotare din fiecare fișier deschis este listată, în ordinea foilor, apoi în ordinea în care au fost făcute. Fiecare rând arată:

- o pictogramă în culoarea adnotării, numărul ei de remediere dacă are unul („#4”) și subiectul,
- textul ei, cuvintele din ștampilă sau valoarea măsurată și comentariul,
- foaia, autorul și data,
- starea ei (sau „Numai citire” pentru comentariile care au venit odată cu fișierul) și un număr de răspunsuri când are răspunsuri.

Linia de deasupra listei le numără: „38 de adnotări” sau „12 din 38 de adnotări” când lista este filtrată.

## Mergeți la o adnotare

Faceți clic pe un rând. MarkupCraft afișează foaia, selectează adnotarea și face zoom până la ea dacă nu se vede pe ecran sau este prea mică. {{ui:Proprietăți}} are detaliile și firul când treceți înapoi la fila respectivă.

## Filtrare

Patru meniuri deasupra listei. Ele se combină.

| Meniu | Alegeri |
|---|---|
| {{ui:Foaie}} | Toate foile, Foaia aceasta (urmează foaia curentă pe măsură ce schimbați foile), sau orice foaie care are adnotări |
| {{ui:Autor}} | Oricine, sau fiecare autor din set |
| {{ui:Stare}} | Orice stare, Deschisă, Acceptată, Respinsă, Finalizată |
| {{ui:Tip}} | Orice tip, sau fiecare fel de adnotare din set |

Exemple:

- Ce mai este deschis pe această foaie: {{ui:Foaie}} „Foaia aceasta”, {{ui:Stare}} „Deschisă”.
- Comentariile unui consultant: {{ui:Autor}} numele lui.
- Toate măsurătorile: {{ui:Tip}} „Lungime” sau „Arie”.

Lista afișează până la 2000 de rânduri; restrângeți-o cu un filtru în seturile foarte mari.

## Exportul în CSV

Alegeți {{ui:CSV}} în partea de sus a filei. Obțineți „<nume> adnotări.csv” cu **adnotările așa cum sunt filtrate acum**, câte una pe rând, cu aceste coloane:

Nr. remediere, Foaie, Fișier, Pagină, Tip, Subiect, Text, Comentariu, Măsurătoare, Autor, Creată, Modificată, Stare, Răspunsuri, Ultimul răspuns, Culoare, Numai citire.

- „Text” conține cuvintele casetelor de text și ale indicatoarelor, textul unei ștampile sau numele unui grup de numărare.
- „Măsurătoare” conține lungimi, „arie, perimetru” pentru arii și „grup: n” pentru numărări.
- Datele sunt marcaje de timp complete, în UTC.

Pentru a exporta tot, puneți mai întâi fiecare filtru înapoi pe prima alegere.

## O legendă pe foaie

{{ui:Legendă}} din fila {{ui:Adnotări}} pune o legendă în colțul din dreapta sus al celor pe care le vedeți: o casetă care listează fiecare fel de adnotare de pe foaie (după subiect și culoare, precum „Nor”, „Întrebare” sau „Prize”), cu numărul lor. Un grup de numărare își numără semnele. Legenda continuă să numere pe măsură ce desenați, mutați sau ștergeți adnotări, iar se tipărește și se salvează cu numărările de la acel moment.

Mutați-o și redimensionați-o ca pe orice adnotare. În {{ui:Proprietăți}}, schimbați {{ui:Titlu}} sau setați {{ui:Totaluri}} la {{ui:Întregul set}} ca să numere fiecare foaie. Spațiile, alte legende și comentariile din alte programe nu sunt numărate.

## Coloanele proprii și sortarea

{{ui:Coloane}} din fila {{ui:Adnotări}} adaugă coloane proprii la fiecare adnotare: un **text**, o **alegere** (de exemplu Specialitate: Mecanic, Electric, Instalații sanitare), un **număr** (de exemplu Cost) sau o **dată**. Dați fiecăreia un nume, alegeți tipul, listați alegerile pentru o coloană de alegere și alegeți {{ui:Salvare coloane}}.

- Completați-le în {{ui:Proprietăți}}: fiecare coloană are acolo un câmp. O coloană de număr primește doar numere, una de dată doar o dată.
- Lista afișează valorile sub fiecare adnotare, filtrul {{ui:Coloană}} alege o valoare (sau adnotările în care este goală), iar {{ui:Sortare}} ordonează lista după o coloană, după autor, stare, tip sau dată, în loc de foaie.
- Exporturile CSV și XLSX poartă coloanele după cele obișnuite. Coloanele sunt salvate în PDF și revin când îl redeschideți.

## Exportați un rezumat: registru de calcul sau PDF

- {{ui:XLSX}} descarcă „<nume> rezumat adnotări.xlsx” cu trei foi: **Adnotări** (un rând pentru fiecare adnotare listată, aceleași coloane ca în CSV), **Pe foaie** (câte adnotări are fiecare foaie, deschise și închise, și câte din fiecare fel, cu totaluri) și **Listă de remedieri** (când există elemente de remediere).
- {{ui:PDF}} descarcă „<nume> rezumat adnotări.pdf”: un raport de tipărit sau de trimis, cu numele setului, data și un tabel cu adnotările listate (număr, foaie, tip, subiect, text sau comentariu, valoare măsurată, autor, stare și ultimul răspuns). Textul lung se rupe; antetul tabelului se repetă pe fiecare pagină.

Ambele iau lista așa cum este filtrată, deci filtrați mai întâi ca să raportați o singură foaie, un singur autor sau doar elementele deschise.

## Exportul în BCF

Alegeți {{ui:BCF}}. MarkupCraft face o imagine a fiecărei adnotări listate pe foaia ei („Se fac instantanee pentru BCF (3 din 12)…”), apoi descarcă „<nume> adnotări.bcfzip”. Fiecare adnotare devine un subiect BCF cu starea, autorul, datele sale, răspunsurile ca și comentarii, persoana responsabilă și termenul din elementul de remediere, și instantaneul.

Folosiți-l ca să aduceți comentariile de revizuire a desenelor în instrumentele de coordonare BIM care citesc BCF. Ce se transferă și ce nu se transferă este în [Noțiuni de bază BCF](topic:bcf-basics).

## Importul BCF

{{ui:Import BCF}} citește un fișier .bcfzip (sau .bcf) dintr-un instrument BIM:

- Problemele venite din exportul BCF propriu al MarkupCraft își regăsesc adnotările: răspunsurile noi se adaugă la fir, iar o stare nouă este setată (Închis contează ca Finalizat). Răspunsurile deja existente nu se adaugă de două ori.
- Celelalte probleme devin note, cu titlul, descrierea, autorul și comentariile lor. O notă ajunge pe foaia al cărei număr sau nume îl dau etichetele problemei, altfel pe foaia deschisă; o cameră BIM nu are loc pe hârtie, deci astfel de note sunt grupate în colțul din stânga sus al foii, ca să le mutați.

Importul întreg este un singur pas: {{key:Mod+Z}} îl anulează. Vezi [Noțiuni de bază BCF](topic:bcf-basics).

## Ce nu face lista încă

- Gruparea listei (sortați, apoi filtrați, în schimb).
- Editarea valorilor din listă (editați în {{ui:Proprietăți}}; câmpurile de remediere se editează în fila {{ui:Listă de remedieri}}).

---
title: Calibrarea unei foi și măsurarea
summary: Setați scara fiecărei foi dintr-o valoare predefinită sau dintr-o dimensiune cunoscută, apoi măsurați lungimi, arii cu perimetre și numărări.
keywords: calibrare, scară, setare scară, măsurare, lungime, distanță, cotă, arie, picioare pătrate, perimetru, numărare, extragere de cantități, cantitate, riglă, aritmetică, calcul, plus, fracție
from: 49a25c6d
---

Lungimile și ariile au nevoie de scara foii. MarkupCraft păstrează o scară **pentru fiecare foaie**: calibrați fiecare foaie pe care se face măsurarea. Numărările nu au nevoie de scară.

Bara de stare arată scara foii curente sau „Necalibrat”.

## Alegerea unei scări din listă

Folosiți această metodă când PDF-ul este la dimensiune reală (o foaie de 24 × 36 care se tipărește la 24 × 36) și desenul indică scara.

1. Faceți clic pe butonul de scară din bara de stare („Necalibrat”). Se deschide caseta „Scară foaie”.
2. Sub {{ui:Scară}}, alegeți scara: arhitectural (1/32" = 1'-0" până la 3" = 1'-0"), inginerie (1" = 10' până la 1" = 100') sau metric (1:1 până la 1:1000).
3. Alegeți {{ui:Setare scară}}.

Rezultat: bara de stare arată scara, de exemplu `1/4" = 1'-0"`. Scările arhitecturale afișează lungimile în picioare și inci, cele de inginerie în picioare zecimale, cele metrice până la 1:50 în milimetri și de la 1:100 în metri.

:::warning
O valoare predefinită este corectă doar dacă PDF-ul nu a fost micșorat. Un set la jumătate din dimensiune sau o foaie care a fost „încadrată în pagină” la realizare se măsoară greșit cu o valoare predefinită. Calibrați în schimb dintr-o dimensiune cunoscută și verificați oricum o dimensiune.
:::

## Calibrarea dintr-o dimensiune cunoscută

Folosiți această metodă pentru seturi la jumătate din dimensiune, foi scanate, detalii la scări neobișnuite sau pentru a verifica o valoare predefinită.

1. Găsiți o cotă lungă în care aveți încredere sau o bară grafică de scară.
2. Alegeți {{ui:Calibrare}} din grupul {{ui:Măsurare}} (sau alegeți {{ui:Alegere a două puncte}} din caseta „Scară foaie”).
3. Faceți clic pe un capăt al cotei, apoi pe celălalt. (Sau trageți de la un capăt la celălalt.) Măriți mai întâi pentru precizie; {{key:Shift}} păstrează linia în pași de 45°.
4. Caseta arată cât de departe sunt punctele pe hârtie și întreabă „Care este distanța reală?”. Introduceți {{ui:Distanța reală}}, de exemplu `24'-0"`, `12' 6 1/2"`, `7.2 m` sau `900 mm`.
5. Alegeți cum se afișează lungimile sub {{ui:Afișare lungimi în}}: {{ui:Picioare și inci}}, {{ui:Picioare zecimale}}, {{ui:Inci}}, {{ui:Metri}} sau {{ui:Milimetri}}.
6. Alegeți {{ui:Setare scară}}.

Rezultat: bara de stare afișează „Calibrat: 24'-0" peste 1.00 in” (lungimea reală și lungimea pe hârtie), iar instrumentul de măsurare anterior revine activ. Toate modurile de introducere a unei lungimi sunt în [Unități și lungimi](topic:units-and-scales).

Distanța reală poate fi și un calcul simplu: `12'6"+3/4"`, `(24'-0")/3` sau `2*450mm`. Se folosesc `+ - * /` și paranteze; un număr fără unitate se consideră în unitatea de sub {{ui:Afișare lungimi în}} (picioare pentru {{ui:Picioare și inci}}). {{ui:Setare scară}} folosește rezultatul.

Dacă MarkupCraft nu poate citi ce s-a introdus, caseta spune asta: „Aceasta nu este o lungime pe care MarkupCraft o înțelege. Încercați 24'-0", 12' 6 1/2", 7.2 m sau 900 mm.” Un calcul pe care nu îl poate rezolva spune de ce și unde, de exemplu „O paranteză nu este închisă (caracterul 5).”

## Măsurarea unei lungimi

1. Alegeți {{ui:Lungime}} ({{key:M}}).
2. Faceți clic pe început, apoi pe sfârșit. Sau trageți de la început la sfârșit. {{key:Shift}} o păstrează în pași de 45°.

Rezultat: o linie de cotă cu marcaje și lungimea scrisă pe ea. Bara de stare o repetă („Lungime: 12'-6 1/2" (1/4" = 1'-0")”), iar {{ui:Proprietăți}} o afișează sub {{ui:Lungime}}. Picioarele și inci sunt rotunjite la cel mai apropiat 1/16".

Dacă foaia nu are încă scară, alegerea {{ui:Lungime}} trece la {{ui:Calibrare}}, iar bara de stare explică: „Calibrați mai întâi această foaie: alegeți două puncte aflate la o distanță cunoscută sau alegeți scara ei. Apoi măsurați.” După setarea scării, {{ui:Lungime}} revine.

## Schițarea la scară

Pe o foaie calibrată se pot introduce lungimi reale în timp ce se desenează o {{ui:Linie}}, o {{ui:Săgeată}}, o {{ui:Lungime}}, o {{ui:Polilinie}}, un {{ui:Poligon}}, un {{ui:Nor liber}}, o {{ui:Arie}} sau un spațiu:

1. Faceți clic pe primul punct.
2. Indicați direcția segmentului următor și introduceți lungimea, de exemplu `16` (în unitatea foii), `12'6"` sau `3.5 m`. Lângă cursor se deschide o casetă pe măsură ce introduceți.
3. Apăsați {{key:Enter}}. Punctul se așază la acea distanță, în direcția cursorului.

Pentru a seta direcția exact, adăugați `<` și un unghi în grade: `8 < 90` merge 8 picioare drept în sus, `4<0` spre dreapta, `10 < 225` în jos și spre stânga, așa cum se vede foaia (inclusiv paginile rotite). Introduceți în continuare lungimile pentru următoarele colțuri și terminați forma obișnuit. {{key:Esc}} închide caseta fără a plasa un punct.

## Măsurarea unui unghi

1. Alegeți {{ui:Unghi}} ({{key:X}}).
2. Faceți clic pe capătul unui braț, apoi pe colț, apoi pe capătul celuilalt braț.

Rezultat: cele două brațe, un mic arc în colț și unghiul în grade, cu o zecime (0° până la 180°). Un unghi nu are nevoie de scară. {{ui:Proprietăți}} îl afișează sub {{ui:Unghi}}, iar lista, CSV și BCF îl includ.

Un {{ui:Arc}} ({{key:O}}) pe o foaie calibrată afișează și lungimea de-a lungul curbei în {{ui:Proprietăți}}.

## Măsurarea unei arii și a perimetrului

1. Alegeți {{ui:Arie}} ({{key:Q}}).
2. Faceți clic pe fiecare colț al camerei sau al zonei.
3. Terminați printr-un dublu clic, cu {{key:Enter}} sau cu clic dreapta (dublu atingere pe ecran tactil). {{key:Backspace}} elimină ultimul colț.

Rezultat: un contur umbrit cu aria și „P” cu perimetrul în mijloc, de exemplu „128.00 sq ft” și „P 48'-0"”. Scările în picioare dau picioare pătrate, cele în inci dau inci pătrați, cele în metri dau metri pătrați, cele în milimetri dau milimetri pătrați. O arie are nevoie de cel puțin trei colțuri.

### Decupaje

Pentru a exclude un stâlp, un gol sau o curte, selectați aria și alegeți {{ui:Adăugare decupaj}} în {{ui:Proprietăți}}. Faceți clic pe colțurile decupajului din interiorul ariei și terminați ca pentru o arie. Decupajul rămâne deschis (neumbrit), aria sa se scade, iar marginile sale se adaugă la perimetru: o cameră de 16' × 8' cu un decupaj de 4' × 4' arată „112.00 sq ft” și „P 64'-0"”. Adăugați câte aveți nevoie; ele nu se pot suprapune între ele și nu pot traversa conturul ariei. {{ui:Eliminare decupaje}} le scoate pe toate, iar {{key:Mod+Z}} anulează unul.

## Numărarea elementelor

1. Alegeți {{ui:Numărare}} ({{key:U}}).
2. În {{ui:Proprietăți}}, introduceți un {{ui:Nume grup}}, de exemplu „Scurgeri de pardoseală”. (Se păstrează pentru data viitoare.)
3. Faceți clic pe fiecare element de pe foaie.

Rezultat: fiecare clic adaugă un punct numerotat, primul punct poartă o etichetă ca „Scurgeri de pardoseală: 7”, iar bara de stare păstrează totalul curent.

- **Pornirea unui alt grup:** apăsați {{key:Esc}} o dată (anulează selecția), schimbați {{ui:Nume grup}} și faceți clic din nou.
- **Adăugarea la un grup existent:** selectați mai întâi grupul, apoi alegeți {{ui:Numărare}} și faceți clic.
- **Eliminarea unui semn:** cu grupul selectat, țineți apăsat {{key:Shift}} și faceți clic pe punct. Eliminarea ultimului punct elimină grupul. Pe un ecran tactil fără tastatură, folosiți în schimb {{key:Mod+Z}} sau {{ui:Anulare}}.
- **Redenumirea unui grup:** selectați-l și editați {{ui:Nume grup}} în {{ui:Proprietăți}}.

Un grup de numărare aparține unei singure foi. Numărările pe mai multe foi apar ca grupuri separate în lista adnotărilor.

## Schimbarea sau eliminarea unei scări

Faceți clic pe butonul de scară din bara de stare. Caseta afișează scara curentă; alegeți alta, alegeți {{ui:Alegere a două puncte}} sau alegeți {{ui:Eliminare scară}}.

Lungimile și ariile deja desenate sunt **remăsurate** imediat cu noua scară. {{ui:Anulare}} readuce scara veche.

## Unde ajung valorile

- {{ui:Proprietăți}} afișează valorile măsurătorii selectate.
- Fila {{ui:Adnotări}} listează fiecare valoare, iar CSV-ul său are o coloană „Măsurare”. Vezi [Lista adnotărilor](topic:markups-list-and-export).
- PDF-ul salvat păstrează scara pe pagină și scrie lungimile și ariile ca și comentarii de măsurare, astfel încât alte programe PDF care înțeleg măsurătorile le pot afișa. Vezi [Ce se salvează în PDF](topic:what-the-pdf-keeps).

Pentru o extragere completă de cantități cu articole, ansambluri și prețuri, folosiți TakeoffCraft: MarkupCraft măsoară pentru revizuire, nu pentru deviz.

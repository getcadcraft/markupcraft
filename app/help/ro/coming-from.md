---
title: Venind de la alt software de adnotare
summary: Cum se mapează obișnuințele unui program desktop de adnotare PDF în MarkupCraft și diferențele care iau pe nepregătite.
keywords: comutare, migrare, familiar, PDF desktop adnotare, ladă de instrumente, listă a adnotărilor, suprapunere, sesiuni, profil, scurtături, diferențe
from: c8f323e1
---

Dacă revizuiți desene în Bluebeam Revu (sau comentați PDF-uri în alt program desktop PDF), cea mai mare parte a MarkupCraft va părea familiară: nori, indicatori, o ladă de instrumente, o listă a adnotărilor, stări cu răspunsuri, măsurători calibrate, suprapuneri de foi. Modul de gestionare a fișierelor este diferența mare, așa că secțiunea următoare merită citită chiar dacă restul este omis.

## Cele cinci diferențe importante

1. **Salvarea creează un fișier nou.** MarkupCraft rulează în browser și nu poate scrie peste PDF-ul de pe discul local. {{ui:Salvare}} descarcă „<name> (marked up).pdf”, iar originalul rămâne neschimbat. Data viitoare, deschideți copia „(marked up)” și curățați singur copiile vechi.
2. **PDF-ul se salvează la salvare.** Până atunci, o copie de recuperare din acest browser păstrează adnotările la o cădere sau o filă închisă, iar MarkupCraft o oferă înapoi data următoare. Este o plasă de siguranță: salvați PDF-ul pentru a păstra revizuirea.
3. **Profilul se află în browser.** Numele autorului, setările instrumentelor și lada de instrumente sunt păstrate în acest browser de pe acest computer. Un alt browser sau alt computer pornește de la zero, iar ștergerea datelor site-ului le șterge. Exportați lada de instrumente ca rezervă. Vezi [Ce rămâne în acest browser](topic:browser-storage).
4. **Încă nu există sesiuni comune.** Nu există o sesiune de revizuire live, comună, și nici un proiect în cloud. Revizuirea circulă în PDF: se salvează, se trimite copia, următoarea persoană răspunde și salvează.
5. **Scara este pe foaie și doar pe foaie.** Nu există ferestre de vizualizare în interiorul unei foi și nici „aplică această scară tuturor paginilor”. Calibrați fiecare foaie pe care măsurați.

## Obișnuințe, una câte una

| Ce se folosește în alte programe | În MarkupCraft |
|---|---|
| Panoul de miniaturi, etichetele paginilor | {{ui:Foi}} în stânga. Numele vin din etichetele paginilor sau se citesc din cartuș; se corectează cu {{ui:Redenumire foaie}}. |
| Deschiderea mai multor PDF-uri ca set | Deschideți-le pe toate deodată; devin o singură listă. Nu se salvează niciun fișier de set: deschideți aceleași PDF-uri data viitoare. |
| Ladă de instrumente cu seturi de instrumente | Fila {{ui:Instrumente}}: o ladă pentru fiecare browser, instrumente salvate cu stil și subiect. Se partajează prin {{ui:Export}} și {{ui:Import}}, ca fișier JSON. Fișierele cu seturi de instrumente din alte programe nu pot fi importate. |
| Panoul de proprietăți | Fila {{ui:Proprietăți}}: stare, subiect, comentariu, stil, răspunsuri și element de remediere, într-un singur loc. |
| Lista adnotărilor cu coloane | Fila {{ui:Adnotări}}, cu filtre pentru foaie, autor, stare și tip. Exportați CSV sau BCF. Încă nu există coloane personalizate și nici rezumat PDF sau de registru de lucru. |
| Stare și starea revizuirii | {{ui:Stare}}: Deschisă, Acceptată, Respinsă, Finalizată. Nu există seturi de stări personalizate. Se salvează ca stări standard de revizuire. |
| Răspunsuri la o adnotare | Firul „Răspunsuri” din {{ui:Proprietăți}}, cu schimbările de stare înregistrate în el. Un răspuns trimis nu poate fi editat. |
| Calibrare, apoi lungime, arie, numărare | {{ui:Calibrare}}, {{ui:Lungime}} ({{key:M}}), {{ui:Arie}} ({{key:Q}}, dă aria și perimetrul), {{ui:Numărare}} ({{key:U}}). Încă nu există unghi, rază, volum, lungime de polilinie sau decupaje. |
| Suprapunerea paginilor | Fila {{ui:Comparare}}: roșu pentru vechi, albastru pentru nou, aliniere după două puncte. Nu există nori automați de „comparare a documentelor”. |
| Ștampile | {{ui:Ștampilă}} cu șase ștampile încorporate și text personalizat, semnate cu numele autorului și data. Încă nu există ștampile cu imagine sau semnătură. |
| Urmărirea remedierilor sau a problemelor | Fila {{ui:Listă de remedieri}}: elemente numerotate cu persoana responsabilă, termen și stare; export CSV. |
| Sesiune de colaborare live | Încă nerealizată. Se trimite PDF-ul salvat. |
| Aplatizare | Încă nerealizată. Adnotările rămân ca comentarii pe care alte vizualizatoare le pot afișa și imprima. |
| Straturi pentru adnotări | Încă nerealizate. Folosiți subiectele, autorii și filtrele listei pentru a sorta comentariile. |
| Hiperlegături între foi | Încă nerealizate. |
| Bara de spațiu pentru Pan, rotița pentru Zoom | Același lucru: țineți apăsat {{key:Space}} și trageți; rotița face Zoom la cursor. Rotița nu derulează niciodată pagina. |

## Taste care diferă

Multe taste cu o singură literă sunt cele la care s-ar aștepta cineva, dar verificați-le înainte ca degetele să le apese din reflex:

- {{key:K}} este {{ui:Indicator}}, iar {{key:Q}} este {{ui:Arie}}. Dacă Q se folosește de obicei pentru indicatori, aici va porni o arie.
- {{key:C}} este caseta {{ui:Nor}}; {{key:Shift+C}} este {{ui:Nor liber}}.
- {{key:M}} este {{ui:Lungime}}, {{key:U}} este {{ui:Numărare}}, {{key:Y}} este {{ui:Polilinie}}, {{key:G}} este {{ui:Poligon}}, {{key:I}} este {{ui:Evidențiere}}.
- {{key:Mod+D}} duplică selecția (în loc de marcajul din browser).
- {{key:Mod+Plus}} și {{key:Mod+Minus}} fac zoom pe foaie, nu pe pagina din browser.
- Orice tastă poate fi schimbată: vezi mai jos.

:::tip
Dacă tastele sunt obișnuite din Bluebeam Revu, alegeți stilul de meniu {{ui:Revizuire PDF}} din {{ui:Setări}} › {{ui:MarkupCraft}} › {{ui:Meniuri, taste și mouse}}: o bară de meniu (Fișier, Editare, Vizualizare, Document, Adnotare, Măsurare, Fereastră) peste un rând de instrumente de revizuire, {{key:Q}} pentru un indicator, {{key:H}} pentru evidențiator, {{key:N}} pentru un poligon, iar măsurătorile pe {{key:Alt+Shift}} cu o literă. Orice tastă poate fi schimbată și aici. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).
:::

Lista completă se află în [Tastatură și mouse](topic:keyboard).

## Lucruri care funcționează altfel decât s-ar putea crede

- **Instrumentele rămân active.** După un nor, se continuă desenarea de nori. {{key:Esc}} o dată anulează selecția, de două ori revine la {{ui:Selectare}}.
- **Textul și indicatorii au nevoie de text.** Dacă se termină fără nimic introdus, nu se adaugă nicio adnotare. Notele se păstrează goale.
- **Măsurătorile au nevoie mai întâi de o scară.** {{ui:Lungime}} și {{ui:Arie}} trec la {{ui:Calibrare}} pe o foaie necalibrată și revin după aceea.
- **Comentarii din alte programe.** Dreptunghiurile, elipsele, liniile, poliliniile, poligoanele, cerneala, casetele de text și notițele adezive făcute în altă parte devin adnotări MarkupCraft editabile și se rescriu în felul MarkupCraft la salvare (aspectul lor se poate schimba puțin). Evidențierile de text, ștampilele altor programe și alte tipuri speciale rămân doar pentru citire: se poate răspunde la ele, nu se pot modifica.
- **Caracterele din afara literelor din Europa de Vest** se imprimă ca „?” în PDF-ul salvat. Vezi [Salvarea PDF-ului cu adnotări](topic:save-the-marked-up-pdf).
- **Datele ștampilelor** folosesc UTC, așa că o ștampilă făcută seara târziu în America poate arăta data de mâine.
- **Măsurătorile se transmit** ca standard comentarii de măsurare, iar fiecare foaie calibrată își păstrează scara, așa că un program care citește măsurătorile PDF le poate de obicei afișa. Comportamentul exact depinde de acel program.

## Folosirea ambelor

Se poate merge înainte și înapoi. Comentariile făcute în altă parte se deschid în MarkupCraft, iar PDF-ul „(marked up)” se deschide în alte programe PDF cu fiecare adnotare, răspuns și stare vizibile. Ce citește doar MarkupCraft înapoi (persoana responsabilă de remediere și termenul, starea elementului) se păstrează în fișier pentru MarkupCraft.

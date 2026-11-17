---
title: Fiecare tip de adnotare
summary: Cele șaptesprezece tipuri de adnotări, tastele lor, modul în care se desenează fiecare, aspectul implicit și ce devine în PDF-ul salvat.
keywords: tipuri de adnotări, liste de instrumente, tipuri de adnotare, nor, indicator, text, notă, ștampilă, creion, evidențiator, linie, săgeată, dreptunghi, elipsă, polilinie, poligon, lungime, arie, numărare
from: 29bf32e7
---

## Instrumentele

| Bară de instrumente | Tastă | Cum se desenează | Aspect implicit | În PDF-ul salvat |
|---|---|---|---|---|
| {{ui:Creion}} | {{key:P}} | Trageți | Roșu, 1.5 pt | Cerneală |
| {{ui:Evidențiere}} | {{key:I}} | Trageți | Galben, 14 pt lățime, transparent, colorează ce se află sub el | Cerneală (marcată ca trăsătură de evidențiator) |
| {{ui:Linie}} | {{key:L}} | Trageți sau faceți clic pe început și pe sfârșit | Roșu, 2 pt | Linie |
| {{ui:Săgeată}} | {{key:A}} | Trageți sau faceți clic pe început și pe sfârșit | Roșu, 2 pt, vârf de săgeată închis la capăt | Linie cu vârf de săgeată |
| {{ui:Arc}} | {{key:O}} | Faceți clic pe început, pe un punct al arcului, apoi pe sfârșit | Roșu, 2 pt | Polilinie de-a lungul arcului |
| {{ui:Dreptunghi}} | {{key:R}} | Trageți o casetă | Roșu, 2 pt, fără umplere | Pătrat |
| {{ui:Elipsă}} | {{key:E}} | Trageți o casetă | Roșu, 2 pt, fără umplere | Cerc |
| {{ui:Polilinie}} | {{key:Y}} | Faceți clic pe puncte, dublu clic pentru a încheia | Roșu, 2 pt | Polilinie |
| {{ui:Poligon}} | {{key:G}} | Faceți clic pe puncte, dublu clic pentru a încheia | Roșu, 2 pt, fără umplere | Poligon |
| {{ui:Nor}} | {{key:C}} | Trageți o casetă | Roșu, arcuri de 1.5 pt | Pătrat cu contur de nor |
| {{ui:Nor liber}} | {{key:Shift+C}} | Faceți clic pe puncte, dublu clic pentru a încheia | Roșu, arcuri de 1.5 pt | Poligon cu contur de nor |
| {{ui:Indicator}} | {{key:K}} | Apăsați pe punct, trageți până la text, scrieți | Text și linie de indicație roșii, 1 pt, text de 12 pt | Casetă de text cu linie de indicație |
| {{ui:Text}} | {{key:T}} | Faceți clic sau trageți o casetă, scrieți | Text roșu de 12 pt, fără contur | Casetă de text |
| {{ui:Notă}} | {{key:N}} | Faceți clic, scrieți | Pictogramă de notă galbenă | Notă lipicioasă |
| {{ui:Ștampilă}} | {{key:S}} | Alegeți o ștampilă, faceți clic sau trageți | Majuscule încadrate plus „De <nume>, <dată>”; colorată după înțeles | Ștampilă |
| {{ui:Lungime}} | {{key:M}} | Faceți clic pe început și pe sfârșit (are nevoie de o scară) | Linie de cotă albastră cu marcaje și lungimea | Linie marcată ca cotă, cu o măsurătoare |
| {{ui:Unghi}} | {{key:X}} | Faceți clic pe capătul unui braț, pe colț, apoi pe capătul celuilalt braț | Brațe albastre, un mic arc în colț și unghiul în grade | Polilinie cu unghiul ca text |
| {{ui:Arie}} | {{key:Q}} | Faceți clic pe colțuri, dublu clic pentru a încheia (are nevoie de o scară) | Contur albastru, umplere albastru deschis, aria și perimetrul | Poligon marcat ca arie, cu o măsurătoare |
| {{ui:Numărare}} | {{key:U}} | Faceți clic pe fiecare element | Puncte portocalii numerotate și o etichetă „grup: n” | Un comentariu de cerneală pe grup, un inel pe element |

Pe ecran tactil, „dublu clic pentru a încheia” este o atingere dublă, iar „clic” este o atingere care acționează când ridicați degetul (pentru puncte, note și numărări).

## Ce conține fiecare adnotare

| Câmp | Unde îl vedeți |
|---|---|
| Autor | {{ui:Proprietăți}}, lista, a doua linie a ștampilei, alte vizualizatoare PDF |
| Creată și modificată | {{ui:Proprietăți}} (fusul orar local), lista, CSV |
| Stare | Deschisă, Acceptată, Respinsă sau Finalizată |
| Subiect | O etichetă scurtă; implicit tipul („Nor”, „Casetă de text”, „Măsurătoare de lungime”) |
| Comentariu | Note mai lungi. Pentru o notă, textul ei este comentariul. |
| Text | Doar casete de text și indicatoare |
| Răspunsuri | Firul, cu schimbările de stare |
| Element de remediere | Număr, persoană responsabilă, termen, stare element, când este adăugat în lista de remedieri |
| Stil | Culoare, grosime de linie, umplere și opacitate de umplere (forme închise, text și indicatoare), opacitate, dimensiune text (text, indicatoare și măsurători) |

## Comentarii numai citire

Comentariile care au venit odată cu fișierul și pe care MarkupCraft nu le poate edita (evidențieri de text, ștampile ale altor programe și alte tipuri speciale) sunt listate cu tipul „Altul” și cu eticheta de stare „Numai citire”. Își păstrează exact aspectul pe care îl dă fișierul. Le puteți selecta, vedea autorul, subiectul și comentariul și le puteți răspunde.

## Încă nerealizat

Atașările de fișiere nu sunt încă realizate. Orice adnotare poate fi legată de o foaie; vezi [Legături între foi](topic:sheet-links). Imaginile și semnăturile se plasează cu instrumentul {{ui:Ștampilă}}; vezi [Ștampile și note](topic:stamps-and-notes). Vezi [Ce nu este încă realizat](topic:not-built-yet).

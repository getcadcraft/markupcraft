---
title: Ce se salvează în PDF
summary: Exact ce conține copia adnotată, ce văd alte programe PDF și ce se citește înapoi când deschizi un fișier.
keywords: adnotări PDF, comentarii, date salvate, dus-întors, etichete de pagină, măsurare, stare de revizuire, răspunsuri, interoperabilitate, compatibilitate, redeschidere, date private
from: 6439ad28
---

Copia adnotată este PDF-ul original cu comentarii (adnotări PDF) adăugate. Paginile în sine, desenele, textul, marcajele și linkurile sunt copiate așa cum erau.

## Fiecare adnotare

| MarkupCraft | Salvat ca | Alte vizualizatoare PDF arată |
|---|---|---|
| Dreptunghi, nor de revizuire în casetă | Square annotation (nor: bordură cu aspect de nor) | Un comentariu dreptunghi sau nor |
| Elipsă | Circle annotation | Un comentariu elipsă |
| Poligon, nor liber | Polygon annotation (nor: bordură cu aspect de nor) | Un comentariu poligon sau nor |
| Polilinie | PolyLine annotation | Un comentariu polilinie |
| Linie, săgeată | Line annotation (săgeată: vârf de săgeată închis) | Un comentariu linie sau săgeată |
| Lungime | Line annotation marcată ca cotă, cu o măsurătoare | O măsurătoare de lungime, acolo unde vizualizatorul o acceptă |
| Arie | Polygon annotation marcată ca arie, cu o măsurătoare | O măsurătoare de arie, unde este acceptată; altfel un poligon |
| Grup de numărare | O singură Ink annotation, un cerc pentru fiecare element; textul ei este „grup: n” | Un comentariu ink |
| Creion, evidențiator | Ink annotation (evidențiatorul marcat ca atare) | Un comentariu ink |
| Text | FreeText annotation | Un comentariu casetă de text |
| Indicator | FreeText annotation cu o linie de indicație | Un comentariu indicator |
| Notă | Text annotation | O notă lipicioasă care se deschide cu textul ei |
| Ștampilă | Stamp annotation | Un comentariu ștampilă |

Fiecare este salvat cu:

- **propria apariție**, desenată exact cum o desenează MarkupCraft pe ecran, astfel încât arată la fel în orice vizualizator și se tipărește la fel, inclusiv ecusonul cu numărul de remediere;
- **autorul**, **datele creării și modificării**, **subiectul**, **textul comentariului** (pentru casete de text și indicatoare, textul și comentariul), **culoarea** și **opacitatea**;
- **detaliile sale MarkupCraft** într-o intrare privată pe care celelalte programe o ignoră: stare, element de remediere, stil și tip, astfel încât se redeschide exact.

## Fire și stări

- Fiecare răspuns este salvat ca un comentariu de răspuns legat de adnotarea sa, cu autorul, data și textul. Răspunsurile nu au o pictogramă proprie pe foaie.
- Fiecare schimbare de stare este salvată ca un răspuns care poartă o stare de revizuire. Alte instrumente de revizuire o afișează ca Acceptat, Respins sau Finalizat; Deschis este salvat fără nicio stare.
- O adnotare cu o stare diferită de Deschis, dar fără o schimbare de stare înregistrată, primește un răspuns cu stare de revizuire, ca alte programe să vadă și ele starea.
- Răspunsurile la comentariile doar pentru citire din fișierul original sunt salvate în același fel, legate de acel comentariu.

## Fiecare foaie

- **Scară:** o foaie calibrată primește o fereastră de vizualizare de măsurare (viewport) care acoperă pagina (modul standard de a stoca scara paginii) și propria copie MarkupCraft a calibrării.
- **Numărul foii:** un număr scris cu {{ui:Rename sheet}} devine eticheta paginii. Când o pagină a unui fișier are una, fiecare pagină a acelui fișier primește o etichetă: numărul scris, altfel vechea etichetă, altfel numărul paginii.
- **Titlul foii:** un titlu scris este salvat doar pentru MarkupCraft; alte vizualizatoare nu-l arată.

## Text și caractere

Textul este scris cu Helvetica, pe care îl are orice vizualizator PDF. Literele din afara setului vest-european (Windows-1252) se tipăresc ca „?” în copie; mesajul de salvare le numără.

## Fișele de calcul și motivele

Fișele de calcul și motivele sunt păstrate într-o intrare privată a PDF-ului, numită `/MarkupCraftShell`. Alte programe PDF o ignoră. O versiune mai veche de MarkupCraft o ignoră și o elimină la următoarea salvare a fișierului.

## Ce se întâmplă cu comentariile care existau deja

Când deschizi un PDF care are deja comentarii:

- comentariile proprii MarkupCraft sunt citite înapoi exact. Dacă altcineva a mutat sau redimensionat unul, noua poziție câștigă.
- Dreptunghiurile, elipsele, liniile, polilinii, poligoanele, ink, casetele de text și notele lipicioase din alte programe devin adnotări editabile. **La salvare, MarkupCraft elimină originalele și le scrie din nou în felul său**, cu ferestrele lor pop-up și răspunsurile. Aspectul lor se poate schimba puțin.
- Stările de revizuire din alte programe setează starea; cea mai nouă câștigă.
- Orice altceva (evidențierile de text, ștampilele altor programe și tipurile speciale) este **păstrat neatins** în copie, doar pentru citire.
- Linkurile și câmpurile de formular sunt păstrate neatinse și nu sunt listate.

Salvarea aceluiași fișier din nou nu dublează niciodată nimic: adnotările citite de MarkupCraft sunt înlocuite, nu adăugate din nou.

## Ce nu se modifică

Fișierul original de pe disc nu este modificat niciodată. Copia nu este optimizată pentru dimensiune, deci poate fi ceva mai mare decât originalul. PDF-urile protejate (criptate) nu pot fi salvate.

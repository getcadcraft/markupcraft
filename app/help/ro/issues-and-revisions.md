---
title: Emiteri, revizii și jurnalul de modificări al desenului
summary: Păstrați un singur istoric de emiteri cu modelul arhitectului: citiți emiterile, notați instrucțiunile de șantier, desenele de execuție și modelele legate față de o emitere și citiți jurnalul de modificări al desenului.
keywords: emitere, revizie, revizii, jurnal de modificări, jurnal de modificări al desenului, registru de desene, instrucțiune de șantier, desen de execuție, model legat, licitație, construcție, istoric de emiteri, nor de revizuire, set de adnotări
from: e4688f64
---

## Ce veți face

Lucrați cu același istoric de emiteri ca restul echipei. Vedeți ce foi au plecat la ce revizie și țineți ce se întâmplă pe șantier legat de emiterea căreia îi aparține.

## Pași

1. Deschideți **Emiteri și revizii**.
2. Alegeți **Citire istoric de emiteri** și alegeți fișierul `.issues.json` salvat din BimCraft sau dintr-o altă aplicație. Emiterile și înregistrările lui se adaugă la ale voastre. Nimic nu se înlocuiește.
3. Alegeți **Adăugare înregistrare** pentru o instrucțiune de șantier, un desen de execuție, un set de adnotări, un model legat sau o notă. Alegeți emiterea de care ține și starea ei. Un fișier ales se înregistrează după nume, dimensiune și SHA-256; fișierul rămâne unde este.
4. **Jurnal de modificări al desenului** arată un rând pentru fiecare foaie și o coloană pentru fiecare emitere. O revizie între paranteze a fost emisă din nou fără modificări.
5. **Descărcare jurnal de modificări (CSV)** salvează emiterile, tabelul foilor și înregistrările. **Salvare istoric de emiteri** scrie un fișier pe care îl citesc celelalte aplicații.

## De reținut

- **Înregistrare adnotări selectate** pune adnotările selectate pe ultima emitere. Un nor este înregistrat ca nor de revizuire la revizia acelei emiteri. Alegeți **Afișare** lângă înregistrare pentru a sări la ea.
- **Înregistrare emitere** emite foile adnotate. **Modificări după** arată apoi ce foi au fost adnotate după acea emitere.
- Istoricul este salvat în PDF-ul adnotat. Nu face parte din **Anulare**.
- Citirea aceluiași fișier de două ori nu adaugă nimic de două ori. Când două copii țin aceeași înregistrare, se păstrează cea mai recentă.

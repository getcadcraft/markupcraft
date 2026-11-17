---
title: Curățarea trasăturilor de creion și aducerea comentariilor și a progresului
summary: Transformați trasăturile libere de creion în linii, cercuri, arce și dreptunghiuri; aduceți comentariile de revizuire ale unui pachet de autorizație și progresul de relevare al unui șantier ca note.
keywords: creion, liber, curățare, aliniere, cerc, linie, dreptunghi, arc, autorizație, comentarii de revizuire, progres, dronă, scanare, relevare, note, csv
from: 547d8e42
---

## Curățarea trasăturilor de creion

Desenați cu {{ui:Creion}}, apoi deschideți meniul {{ui:Mai multe}} din grupul Editare și alegeți {{ui:Curățare trasături de creion}}. Fiecare trasătură de creion selectată devine ceea ce a vrut să fie: o trasătură dreaptă devine o linie (adusă exact la orizontală sau verticală dacă era aproape de asta), una rotundă o elipsă, o parte dintr-un cerc un arc, una închisă cu patru colțuri un dreptunghi, orice altceva o polilinie sau un poligon. Capetele libere ale trasăturilor desenate împreună sunt trase unul spre celălalt. Fără nicio trasătură selectată, se curăță toate trasăturile de creion de pe foaia deschisă. Este un singur pas de anulare: Ctrl+Z readuce forma liberă. Forma se calculează pe computer, după reguli fixe; nimic nu se trimite nicăieri.

## Aducerea comentariilor de revizuire

Pachetul de autorizație BimCraft conține `01-review-comments.csv`: comentariile pe care le-ar putea face un verificator de planuri, fiecare cu regula, articolul, ce este necesar, ce s-a constatat și ce trebuie făcut. În fila {{ui:Sarcini}}, deschideți {{ui:Comentarii de verificare pentru autorizație}} și alegeți {{ui:Aducere comentarii (CSV)}}. Fiecare comentariu devine o notă Deschisă într-o coloană din stânga foii deschise; trageți fiecare notă la locul la care se referă. Ele sunt calculate din verificările existente, nu de un verificator de planuri.

## Aducerea casetelor de noduri HAZOP

Suplimentul P&ID al CadCraft desenează nodurile unui studiu HAZOP și le poate salva ca {{ui:Casete de noduri HAZOP}} (un fișier JSON). Deschideți aici foaia P&ID tipărită, mergeți la fila {{ui:Sarcini}}, deschideți {{ui:Casete de noduri HAZOP}} și alegeți {{ui:Importare casete de noduri (JSON)}}. Fiecare nod devine un dreptunghi Deschis pe foaie, cu numărul, numele, echipamentul și liniile în text, iar echipa își scrie constatările ca răspunsuri pe el. Foaia este luată ca tipărită la dimensiune reală din colțul stânga-jos al desenului; dacă a fost tipărită la altă scară, introduceți mai întâi acel număr în {{ui:Imprimat la}} (0.5 pentru 1:2). Un nod care cade în afara paginii nu este desenat, iar panoul spune câte sunt. Marcajele sunt un ajutor pentru studiu: arată unde sunt nodurile, nu judecă studiul.

## Aducerea progresului de pe șantier

CivilCraft păstrează un rând pentru fiecare zbor cu dronă sau scanare a șantierului. În fila {{ui:Sarcini}}, deschideți {{ui:Progresul pe șantier}} și alegeți {{ui:Aducere progres (JSON)}}. Fiecare relevare devine o notă pe foaia deschisă, care spune cât s-a realizat, ce mai rămâne de debleu sau rambleu, ce s-a săpat în exces sau s-a umplut în exces și ce iese în afara planului. O relevare cu ceva în afara planului rămâne Deschisă; una fără probleme este Acceptată.

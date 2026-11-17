---
title: Listarea modificărilor dintre revizii
summary: Compară două seturi de planșe și obține o listă simplă, foaie cu foaie, a locurilor în care s-au schimbat desenul și cuvintele, gata de citit, de copiat sau de trimis asistentului tău.
keywords: ce s-a schimbat, modificări, listă de revizii, listă de comparare, listă simplă, narațiune, asistent, delta, rezumat revizie
from: bab93d2e
---

Instrumentele de comparare arată modificările de pe foaie. Acest instrument le notează.

1. Deschideți ambele revizii (vezi [Deschiderea unui set de planșe](topic:open-a-plan-set)).
2. Deschideți fila {{ui:Compare}}, apoi {{ui:Compare a whole set}}.
3. Alegeți fișierul mai vechi și pe cel mai nou și alegeți {{ui:List the changes}}.

Lista începe cu un număr („2 din 14 foi potrivite s-au modificat; 1 nouă; 1 eliminată”) și apoi acoperă fiecare foaie modificată, cea cu cea mai mare modificare prima: unde se află pe foaie (stânga sus, centru…), cât de mare este, dacă au fost adăugate, eliminate sau ambele tipuri de linii, câte adnotări se află acolo și ce cuvinte au apărut sau au dispărut. Pe o foaie calibrată, dimensiunea este dată în unități reale, nu doar în inchi pe hârtie.

Lista spune ce este pe pagină; nu spune ce înseamnă. O linie desenată care se mută ar putea fi un perete sau o linie de indicație. Asistentul tău conectat poate citi lista cu instrumentul `revisions_changes` și o poate explica în cuvinte, iar restul îl puteți verifica pe foaie. {{ui:Copy the list}} o pune pe clipboard, iar {{ui:CSV}} scrie câte un rând pentru fiecare modificare.

Foile sunt asociate după numărul foii, ca în [Foi de înlocuire pentru un set revizuit](topic:slip-sheet-a-revised-set). Modificările mai mici de câteva puncte sunt ignorate, iar textul care face parte dintr-o imagine (o scanare) nu are cuvinte de comparat.

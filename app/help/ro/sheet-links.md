---
title: Legături între foi
summary: Faceți o adnotare să sară la altă foaie și legați fiecare indicator de foaie, ca 3/A-501, la foaia și vederea sa dintr-o singură trecere cu Legături în lot.
keywords: hiperlegătură, legătură, legături, salt, indicator de foaie, indicator de detaliu, indicator de secțiune, 3/A-501, mergi la foaie, înapoi, legătură automată, legături în lot, bloc de titlu, număr de foaie, nume de foaie, vedere, detaliu, redenumire, renumerotare, addendum, legătură PDF
from: 86a17c37
---

O legătură între foi vă duce de la o adnotare la altă foaie a setului: de la un cerc de detaliu la detaliu, de la o notă la foaia la care se referă.

## Legarea unei adnotări de o foaie

1. Selectați adnotarea.
2. În {{ui:Proprietăți}}, alegeți foaia sub {{ui:Legătură la foaie}}.

O mică săgeată apare în colțul din dreapta-sus al adnotării. Ca s-o urmați, țineți {{key:Mod}} apăsat și faceți clic pe adnotare, sau selectați-o și alegeți {{ui:Mergi la …}} în {{ui:Proprietăți}}. {{key:Alt+Left}} vă întoarce la foaia de unde ați venit.

O legătură numește foaia după numărul ei, deci funcționează și după ce redeschideți setul sau înlocuiți cu o nouă ediție (slip-sheet): deschide cea mai nouă foaie cu acel număr. Dacă acea foaie nu este deschisă, bara de stare o spune.

## Legarea tuturor indicatoarelor de foaie deodată

Alegeți {{ui:Pagini}} › {{ui:Legături în lot…}}, sau {{ui:Legare indicatoare de foaie…}} sub {{ui:Căutare text}} din partea de sus a panoului {{ui:Foi}}.

1. **Verificați numerele foilor.** MarkupCraft listează fiecare foaie deschisă cu numărul și numele citite din blocul de titlu al foii (sau din eticheta paginii) și de unde au fost luate. Corectați cele greșite și scrieți un număr acolo unde nu a găsit niciunul (un bloc de titlu al cărui număr a fost trasat ca linii nu are text de citit). Apoi alegeți {{ui:Găsire indicatori}}. Corecturile dumneavoastră sunt un singur pas de anulare și devin etichetele paginii din PDF-ul salvat.
2. **Verificați lista.** MarkupCraft citește textul fiecărei foi pentru indicatoare precum „3/A-501”, „5 / A501”, „DETAIL 2 ON A-501”, un cerc cu „3” deasupra „A-501” sau un simplu „A-501” într-o notă, și citește titlurile vederilor fiecărei foi (un număr de detaliu cu numărul foii sub el, sau un număr mare cu un titlu alături). Lista are trei părți:
   - {{ui:Va fi legat}}: fiecare indicator, foaia la care duce și vederea de pe foaie. Debifați pe cele nedorite. Dacă vederea nu a fost găsită (un indicator către vederea 7 pe o foaie cu vederile 1 până la 6), alegeți vederea din lista de lângă el sau lăsați {{ui:Toată foaia}}.
   - {{ui:Nelegat}}: numerele de foaie pe care nicio foaie deschisă nu le are, cu câți indicatori îl numesc fiecare. Alegeți foaia la care se referă fiecare (de exemplu o foaie renumerotată), și fiecare indicator către acel număr se leagă de ea. Sau lăsați-l nelegat.
   - Câți indicatori sunt deja legați și duc unde trebuie. Ei rămân așa cum sunt.
3. Alegeți {{ui:Creare legături}}.

Fiecare indicator primește o casetă albastră subțire, care este o legătură între foi. {{key:Mod}}+clic pe ea deschide foaia mărită la vedere. Un singur {{key:Mod+Z}} le înlătură pe toate.

Coduri care doar arată ca numere de foaie, precum R-19 sau W12X26, sunt lăsate deoparte: un indicator trebuie să aibă forma numerelor de foaie ale setului. Numărul propriu al unei foi, din blocul ei de titlu și din titlurile vederilor, nu este niciodată un indicator. Foile scanate nu au text de citit: folosiți mai întâi {{ui:Citire text (OCR)…}} sau legați indicatoarele lor unul câte unul.

## Rulați din nou când se schimbă setul

Legăturile în lot pot fi rulate oricând:

- **A fost adăugată o foaie**, cum ar fi un addendum cu A-601: deschideți fișierul ei și rulați din nou Legăturile în lot. Indicatoarele către A-601 care nu erau legate înainte se leagă acum.
- **O foaie a fost renumerotată**: corectați numărul ei la pasul 1. Legăturile făcute de Legăturile în lot care nu mai găsesc foaia sunt listate sub {{ui:Nelegat}}; alegeți foaia o dată și toate o urmează. Legăturile mutate pe altă vedere sunt actualizate.
- Legăturile făcute manual în {{ui:Proprietăți}} nu se schimbă niciodată.

## În PDF-ul salvat

O legătură către o foaie din același PDF este scrisă și ca legătură PDF, astfel încât celelalte vizualizatoare sar acolo și la un clic. O legătură cu vedere deschide acea vedere în celălalt vizualizator (saltul PDF „fit rectangle”); una fără vedere deschide foaia întreagă. Legăturile către o foaie dintr-un alt fișier al setului funcționează doar în MarkupCraft.

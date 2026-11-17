---
title: Compararea a două revizii
summary: Suprapuneți o ediție veche și una nouă a unei foi în două culori, aliniați-le după două puncte și marcați ce s-a schimbat cu nor.
keywords: comparare, suprapunere, suprapunere pagini, revizie, diferență, diff, diferențe, modificări, vechi nou, aliniere, verificare inversă, ediție, buletin
from: 62f5d1c5
---

Comparare suprapune două foi. Liniile doar pe foaia veche apar în roșu, cele doar pe foaia nouă în albastru, iar cele de pe ambele în gri discret. Culorile sunt numite în legenda de sub foaie: „Doar pe foaia veche”, „Doar pe foaia nouă”, „Pe ambele”.

## Compararea a două foi

1. Deschideți ambele ediții. Pot fi pagini din același PDF sau din PDF-uri diferite; deschideți-le împreună ca un set (vezi [Lucrul cu mai multe fișiere deodată](topic:several-files)).
2. Alegeți fila {{ui:Comparare}} din dreapta.
3. Alegeți {{ui:Foaia veche}} și {{ui:Foaia nouă}}. Foaia nouă pornește ca cea curentă. Când sunt deschise mai multe fișiere, numele fișierului fiecărei foi se afișează după numele ei.
4. Alegeți {{ui:Comparare}}.

Rezultat: MarkupCraft afișează foaia nouă cu cea veche amestecată, apare legenda, iar fila spune „Se compară <old> (veche) cu <new> (nouă). Adnotările de pe foaia nouă rămân editabile.”

## Trecerea treptată de la veche la nouă

Trageți glisorul {{ui:Vechi și nou}}. Complet la stânga se arată doar foaia veche, complet la dreapta doar cea nouă, iar la mijloc se arată ambele. Glisarea înainte și înapoi este deseori cel mai rapid mod de a vedea o schimbare mică.

## Alinierea foilor

Dacă cele două ediții au fost trasate cu altă margine, dimensiune sau rotație, totul pare schimbat. Corectați:

**După două puncte (cel mai bun):**

1. Alegeți {{ui:Aliniere după două puncte}}. Vizualizarea arată doar foaia veche.
2. Faceți clic pe un detaliu clar pe care îl găsiți pe ambele foi, cum ar fi intersecția unei grile de stâlpi. Fila numără pașii („1 din 4”).
3. Faceți clic pe un al doilea detaliu, departe de primul, cum ar fi colțul opus al grilei.
4. Vizualizarea trece la foaia nouă. Faceți clic din nou pe primul detaliu.
5. Faceți clic din nou pe al doilea detaliu.

Rezultat: „Aliniat: foaia veche scalată la 100.00%, rotită cu 0.00°. Ajustați fin.” Foaia veche este mutată, scalată și rotită ca să se potrivească. {{key:Esc}} anulează cât timp alegeți. Măriți pe fiecare detaliu înainte de a face clic, pentru o potrivire precisă.

**Prin deplasare mică:** folosiți cele patru butoane cu săgeți sub „Aliniere” pentru a muta foaia veche. Alegeți pasul (0.25, 1, 5 sau 20 pt; 72 pt înseamnă un inci pe hârtie). Fila spune cu cât a fost deplasată.

{{ui:Resetare}} elimină alinierea și deplasările mici.

## Doar liniile modificate

Sub butoanele de aliniere, alegeți {{ui:Linii modificate}} în loc de {{ui:Suprapunere de imagini}}. MarkupCraft compară atunci liniile proprii ale celor două foi, nu imaginile lor: foaia nouă se arată așa cum este, cu liniile doar pe foaia veche în roșu și cele doar pe cea nouă în albastru. O linie care s-a scurtat arată doar partea lipsă. Aliniați mai întâi foile (vezi mai sus): comparația folosește alinierea, deci o foaie care a fost doar deplasată nu arată nicio modificare. Linia de stare spune cât s-a schimbat.

Aceasta funcționează pentru PDF-uri trasate din CAD, unde desenul este format din linii. Foile scanate nu au linii de comparat: pentru ele folosiți suprapunerea de imagini. Textul setat cu un font (nu desenat ca trasături) nu este comparat.

## Marcarea modificărilor

În timpul comparării se lucrează pe foaia nouă și toate instrumentele funcționează. Desenați nori în jurul modificărilor pe măsură ce le găsiți; aparțin foii noi și rămân când opriți comparația.

{{ui:Nor pe modificări}} face asta automat: grupează liniile modificate apropiate și desenează un nor de revizie în jurul fiecărui grup pe foaia nouă, cu „Modificat de la <old sheet>” ca și comentariu. Un singur {{key:Mod+Z}} le elimină pe toate; ștergeți pe cele care nu sunt necesare.

## Compararea unui set întreg

Când ediția nouă vine ca PDF propriu, deschideți ambele PDF-uri și deschideți {{ui:Comparare două seturi}} în fila {{ui:Comparare}}. Alegeți fișierul vechi și pe cel nou, apoi alegeți {{ui:Comparare seturi}}. Foile se asociază după număr (ca în [înlocuirea foilor](topic:slip-sheet-a-revised-set)), se compară după linii și se listează cu cele mai multe modificări primele. Alegeți o foaie din listă pentru a compara perechea respectivă cu {{ui:Linii modificate}}.

{{ui:Nor pe toate modificările}} pune nor pe fiecare grup de linii modificate de pe fiecare foaie modificată, într-un singur pas care se poate anula. Comparația de set nu aliniază mai întâi foile, deci o foaie deplasată pe pagină apare ca modificată: comparați perechea respectivă separat și folosiți {{ui:Aliniere după două puncte}}.

## Oprirea comparării

Alegeți {{ui:Oprire comparare}} sau treceți la altă foaie. Alinierea se reține pentru aceeași pereche de foi până la închiderea setului.

## De reținut

- Comparația lucrează pe ce este desenat, pixel cu pixel. Nu știe că o linie s-a mutat; arată poziția veche într-o culoare și poziția nouă în cealaltă.
- Textul reîncadrat, o dată modificată în cartuș sau un alt stil de trasare apar și ele ca modificări.
- O foaie scanată comparată cu una trasată este zgomotoasă: scanarea estompează și deplasează liniile.
- Compararea textului scris cu un font și o listă a modificărilor sunt încă nerealizate.

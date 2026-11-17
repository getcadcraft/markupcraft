---
title: Trimiterea adnotărilor la proiectant ca linii roșii
summary: Scrieți adnotările deschise ca fișier de linii roșii pentru cel care desenează modificările, apoi încărcați răspunsurile lor, astfel încât fiecare adnotare să arate Acceptată sau Respinsă.
keywords: linii roșii, revizie, proiectant, acceptare, respingere, răspunsuri, cc-redline, nor de revizuire, aplicare adnotări
from: cb099d04
---

Revizuirea este jumătate din treabă; desenul trebuie totuși schimbat. Fișierul de linii roșii duce fiecare adnotare deschisă la proiectant, iar răspunsurile proiectantului aduc rezultatul înapoi.

## Trimiteți

1. Deschideți fila {{ui:Sarcini}} și deschideți {{ui:Linii roșii către revizie}}.
2. Scrieți revizia la care se referă adnotările (de exemplu B).
3. Alegeți {{ui:Export fișier de linii roșii}}.

Primiți un fișier `.redline.json` cu câte un element pentru fiecare adnotare Deschisă: foaia ei, unde se află (ca fracțiuni ale foii, astfel încât o retrasare la altă dimensiune tot se aliniază, și în puncte), cuvintele ei, autorul și firul de discuție și sarcina ei, dacă are una. Comentariile doar pentru citire din alte programe, imaginile și legendele sunt lăsate afară.

## Răspunsuri

Partea care desenează răspunde fiecărui element cu Acceptat, Respins sau Gata, cu o notă, într-un fișier `.redline-answers.json`. Alegeți {{ui:Încărcare fișier de răspunsuri…}} și selectați-l: fiecare adnotare primește acea stare și nota proiectantului în firul ei, iar o sarcină a cărei adnotare a fost acceptată sau marcată ca gata este finalizată. Un singur pas de anulare retrage toate răspunsurile.

Formatul fișierului este în `docs/REDLINE-FORMAT.md`. Partea CadCraft (citirea pachetului, acceptarea sau respingerea fiecărui element, norii de revizuire și jurnalul) este construită separat.

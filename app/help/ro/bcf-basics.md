---
title: Noțiuni de bază BCF
summary: Ce conține un export BCF din MarkupCraft, cum se folosește cu instrumentele de coordonare BIM și limitele sale.
keywords: bcf, bcfzip, BIM Collaboration Format, probleme, coordonare, conflict, subiecte, punct de vedere, captură, openbim, buildingsmart, export probleme
from: 0de26175
---

BCF (BIM Collaboration Format) este un format de fișier deschis pentru transmiterea problemelor între instrumentele BIM. Multe programe de coordonare și de elaborare a modelelor pot importa un fișier `.bcfzip` ca listă de probleme. MarkupCraft scrie **BCF 2.1**.

## Crearea unui fișier

1. Deschideți fila {{ui:Adnotări}}.
2. Filtrați lista către ce doriți să trimiteți, de exemplu {{ui:Stare}} „Deschis”. Se exportă doar adnotările din listă.
3. Alegeți {{ui:BCF}}.
4. Așteptați până se face câte o captură pentru fiecare adnotare („Se fac capturi pentru BCF (5 din 20)…”).

Rezultat: fișierul „<name> markups.bcfzip” se descarcă, iar bara de stare arată câte subiecte conține și dimensiunea fișierului.

## Ce conține

Fiecare adnotare devine un **subiect**:

| Câmpul subiectului | Completat cu |
|---|---|
| Titlu | Numărul de remediere, subiectul și foaia, de exemplu „#4 Nor pe A-101 — Plan de etaj” |
| Tip | Tipul adnotării (Nor, Indicator, Lungime…) |
| Stare | Deschis, Acceptat, Respins sau Finalizat |
| Etichete | Tipul adnotării și foaia |
| Autor și date | Autorul adnotării, datele creării și modificării |
| Atribuită lui, termen | Din elementul de remediere, atunci când există unul |
| Descriere | Textul sau textul ștampilei, valoarea măsurată, comentariul, foaia și fișierul |
| Comentarii | Unul pentru fiecare răspuns, cu autor și dată |
| Captură | O imagine a adnotării în porțiunea ei din foaie |
| Punct de vedere | O vedere de sus a locului adnotării pe foaie |

Exportarea din nou a aceleiași adnotări dă același ID de subiect, astfel încât un instrument care importă BCF o poate recunoaște ca fiind aceeași problemă.

## Ce revine la import

{{ui:Import BCF}} citește fișiere BCF 2.0, 2.1 și 3.0 (verificate pe cele 19 fișiere oficiale de test buildingSMART 3.0: fiecare subiect a fost citit, iar comentariile celor trei care au text au fost citite). Pentru un subiect care provine din MarkupCraft (același ID de subiect), adaugă comentariile noi ca răspunsuri și preia starea nouă. Orice alt subiect devine o notă pe foaia al cărei nume apare în etichetă sau în numele fișierului, altfel pe foaia deschisă, cu titlul, descrierea, persoana atribuită și termenul ca text al notei, iar comentariile sale devin răspunsuri.

| În subiectul BCF | În MarkupCraft |
|---|---|
| Titlu, descriere, persoană atribuită, termen | Textul notei |
| Comentarii cu text | Răspunsuri |
| Stare Open, Accepted, Rejected, Completed (Closed, Resolved, Done se consideră Completed) | Starea adnotării |
| Autor și data creării | Autorul și data notei |
| Poziția camerei | Un loc pe foaie, doar pentru un subiect legat de o foaie prin etichetă sau nume de fișier |
| Selecția modelului, părțile ascunse, planurile de secționare, capturile | Nu se păstrează: o foaie nu are model în care să fie afișate |

## Limite de reținut

- **O foaie nu este un model.** Punctul de vedere indică poziția adnotării pe hârtie, măsurată în metri de hârtie. Nu duce un instrument BIM într-un loc din model. Folosiți captura și numele foii pentru a găsi locul.
- **Stările și tipurile sunt proprii MarkupCraft** (Deschis, Acceptat, Respins, Finalizat; Nor, Indicator…). Fișierul le declară, așa cum permite BCF, dar un instrument cu liste fixe proprii le poate mapa sau ignora.
- **Importul aduce comentarii, nu vederi ale modelului.** {{ui:Import BCF}} adaugă răspunsuri și stări adnotărilor exportate și creează note pentru celelalte probleme; nu poate afișa o cameră a modelului. Vezi [Lista de adnotări și exportul](topic:markups-list-and-export#import-bcf).
- Trimiterea adnotărilor înapoi ca PDF este adesea mai simplă pentru revizuirea desenelor. BCF este pentru a aduce comentariile de desen într-un flux de coordonare a modelului.

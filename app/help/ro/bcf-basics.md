---
title: Noțiuni de bază BCF
summary: Ce conține un export BCF din MarkupCraft, cum se folosește cu instrumentele de coordonare BIM și care sunt limitele sale.
keywords: bcf, bcfzip, format de colaborare BIM, probleme, coordonare, conflict, subiecte, punct de vedere, instantaneu, openbim, buildingsmart, export probleme
from: 446f38c1
---

BCF (BIM Collaboration Format) este un format de fișier deschis pentru transmiterea problemelor între instrumentele BIM. Multe programe de coordonare a modelelor și de elaborare pot importa un fișier `.bcfzip` ca listă de probleme. MarkupCraft scrie **BCF 2.1**.

## Crearea unui fișier

1. Deschideți fila {{ui:Adnotări}}.
2. Filtrați lista la ce vreți să trimiteți, de exemplu {{ui:Stare}} „Deschisă”. Se exportă doar adnotările din listă.
3. Alegeți {{ui:BCF}}.
4. Așteptați în timp ce se creează un instantaneu al fiecărei adnotări („Se creează instantanee pentru BCF (5 din 20)…”).

Rezultat: se descarcă „<name> markups.bcfzip”, iar bara de stare arată câte subiecte conține și dimensiunea fișierului.

## Ce conține

Fiecare adnotare devine un **subiect**:

| Câmp de subiect | Completat cu |
|---|---|
| Titlu | Numărul de remediere, subiectul și foaia, de exemplu „#4 Nor pe A-101 — Plan de etaj” |
| Tip | Tipul adnotării (Nor, Indicator, Lungime…) |
| Stare | Deschisă, Acceptată, Respinsă sau Finalizată |
| Etichete | Tipul adnotării și foaia |
| Autor și date | Autorul adnotării, datele creării și modificării |
| Atribuit către, termen | Din elementul său de remediere, dacă are unul |
| Descriere | Textul sau formularea ștampilei, valoarea măsurată, comentariul, foaia și fișierul |
| Comentarii | Unul pentru fiecare răspuns, cu autor și dată |
| Instantaneu | O imagine a adnotării pe porțiunea sa din foaie |
| Punct de vedere | O vedere de sus a locului adnotării pe foaie |

Exportarea din nou a aceleiași adnotări dă același ID de subiect, astfel încât un instrument care importă BCF o poate recunoaște ca fiind aceeași problemă.

## Limite de reținut

- **O foaie nu este un model.** Punctul de vedere indică poziția adnotării pe hârtie, măsurată în metri de hârtie. Nu duce un instrument BIM într-un loc din model. Folosiți instantaneul și numele foii pentru a găsi locul.
- **Stările și tipurile sunt proprii MarkupCraft** (Deschisă, Acceptată, Respinsă, Finalizată; Nor, Indicator…). Fișierul le declară, după cum permite BCF, dar un instrument cu liste fixe proprii le poate mapa sau ignora.
- **Importul aduce comentarii, nu vederi ale modelului.** {{ui:Import BCF}} adaugă răspunsuri și stări la adnotările exportate și creează note pentru alte probleme; nu poate afișa o cameră a modelului. Vezi [Lista adnotărilor și exportul](topic:markups-list-and-export#import-bcf).
- Trimiterea adnotărilor înapoi ca PDF este adesea mai simplă pentru revizuirea desenelor. BCF este pentru a aduce comentariile de desen într-un flux de coordonare a modelelor.

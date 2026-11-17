---
title: Salvarea PDF-ului cu adnotări
summary: Descărcați o copie cu toate adnotările scrise ca adnotări PDF standard, verificați ce văd alte cititoare PDF și continuați lucrul mai târziu.
keywords: salvare, descărcare, export PDF, cu adnotări, adnotări, comentarii, partajare, trimitere, problemă, continuare lucru, redeschidere, dus-întors, imprimare
from: 4c198ebe
---

## Salvare

1. Alegeți {{ui:Salvare}} în bara de instrumente sau apăsați {{key:Mod+S}}.
2. Dacă sunt deschise mai multe fișiere, alegeți {{ui:Acest fișier}} (fișierul foii pe care vă aflați) sau {{ui:Fiecare fișier modificat}}. Fiecare copie se descarcă separat.
3. Așteptați ca „Se salvează <file>…” să se termine. Prima salvare dintr-o sesiune încarcă și modulul de scriere PDF.

Rezultat: browserul descarcă „<name> (marked up).pdf”, iar bara de stare o raportează: „Salvat A-Plans (marked up).pdf (24 adnotări, 18.2 MB). Fișierul original nu a fost modificat.” Punctul de după {{ui:Salvare}} dispare.

**PDF-ul original nu se modifică niciodată.** MarkupCraft scrie un fișier nou. Locul unde ajunge depinde de setările de descărcare ale browserului (vezi [Fișiere deschise și salvate de MarkupCraft](topic:files#where-downloads-go)).

## Continuare lucru mai târziu

Deschideți data viitoare copia „(marked up)”, nu originalul. Totul revine editabil: adnotările, stările, răspunsurile, elementele din lista de remedieri, scara fiecărei foi și numele foilor pe care le-ați scris. Salvarea din nou descarcă un fișier cu același nume „(marked up)”; browserul poate adăuga un număr, cum ar fi „(1)”, dacă vechea descărcare se află încă în dosar. Înlocuiți sau curățați singur copiile vechi.

MarkupCraft nu salvează PDF-ul de unul singur. Cât lucrați, păstrează o copie de recuperare în acest browser, astfel încât o eroare sau un tab închis nu pierd adnotările: la următoarea deschidere a MarkupCraft întreabă „Recuperarea lucrării?”. Vezi [Recuperarea lucrării](common:recover). Salvați totuși înainte de închidere; dacă încercați să plecați cu adnotări nesalvate, browserul întreabă mai întâi „Părăsiți site-ul?” (iPad Safari nu face asta).

## Ce văd alte cititoare PDF

Fiecare adnotare este scrisă ca un comentariu PDF standard (adnotare), cu desenul propriu, astfel încât orice vizualizator PDF o afișează, o imprimă și o listează în panoul de comentarii:

- **Aspectul este același** ca în MarkupCraft: nori cu marginile lor festonate, vârfuri de săgeată, ștampile, puncte de numărare, insigne cu numărul din lista de remedieri, etichete de măsurare.
- **Detaliile sunt standard:** autorul, data, subiectul, textul comentariului și culorile.
- **Norii** sunt comentarii de tip dreptunghi sau poligon cu margine norișoară; **casetele de text** și **indicatoarele** sunt comentarii de tip casetă de text; **notele** sunt note lipicioase; traseele **creionului** și ale **evidențiatorului** sunt desene cu cerneală; **ștampilele** sunt comentarii de tip ștampilă.
- **Lungimile și ariile** sunt comentarii de măsurare, iar fiecare foaie calibrată poartă scara sa, astfel încât vizualizatoarele care înțeleg măsurătorile pot afișa valorile.
- **Răspunsurile** sunt răspunsuri la comentariu, iar **stările** sunt stări de revizuire (Deschis apare ca fără stare).
- **Numerele de foaie** pe care le-ați scris devin etichetele de pagină pe care le afișează celelalte vizualizatoare.

Câteva lucruri le citește doar MarkupCraft: responsabilul și termenul elementului din lista de remedieri, starea elementului și unele detalii de stil. Alte programe le păstrează, dacă nu rescriu comentariul.

Într-un alt program, comentariile pot fi mutate sau editate ca oricare altele. Dacă cineva face asta și trimite fișierul înapoi, MarkupCraft folosește noua poziție a comentariului când deschide fișierul.

Detalii complete: [Ce este salvat în PDF](topic:what-the-pdf-keeps).

## Caractere care se tipăresc ca „?”

Textul adnotărilor este scris cu fontul standard Helvetica, pe care îl are orice vizualizator PDF. Acoperă literele engleze și din Europa de Vest (é, ñ, ü, ø și altele asemenea), dar nu alte scripturi, simboluri din afara acestui set sau emoji. Aceste caractere apar corect în MarkupCraft, dar se tipăresc ca „?” în copia salvată, iar mesajul de salvare le numără: „3 caractere din afara setului vest-european se tipăresc ca "?" în copie.” Scrieți cuvintele respective în litere sau folosiți un înlocuitor simplu (de exemplu „dia.” pentru simbolul diametrului).

## Fișiere care nu pot fi salvate

- **PDF-uri protejate:** „Acest PDF este protejat (criptat), deci nu poate fi scrisă o copie cu adnotări. Cereți o copie neprotejată.” Acesta poate fi în continuare revizuit pe ecran, iar CSV-ul și BCF-ul pot fi exportate.
- Dacă salvarea eșuează din alt motiv, o casetă numită „Nu s-a putut salva <file>” arată motivul. Adnotările sunt încă în filă; nu se pierde nimic până la închiderea ei.

## Aplatizare și imprimare

Nu există încă aplatizare (scrierea adnotărilor în pagină) și nici comandă de imprimare. Pentru imprimare, deschideți copia salvată în orice vizualizator PDF și imprimați cu comentariile afișate.

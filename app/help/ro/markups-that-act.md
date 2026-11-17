---
title: Transformați o adnotare în sarcină
summary: Dați unei adnotări un responsabil (o persoană sau asistentul), o zi-limită și o legătură la desenul sau elementul de model la care se referă și vedeți-o închisă când se schimbă cu adevărat.
keywords: sarcină, sarcini, responsabil, asistent, termen, întârziat, legătură, închidere, element, zonă de desen, adnotări care acționează, MCP
from: 9e970202
---

O sarcină este o adnotare care trebuie făcută de cineva. Își păstrează locul pe foaie și firul ei și adaugă un titlu, un responsabil, o zi-limită, o stare și, dacă doriți, o legătură la lucrul la care se referă.

## Creați o sarcină

1. Selectați una sau mai multe adnotări.
2. Deschideți fila {{ui:Sarcini}} și alegeți {{ui:Transformare selecție în sarcină}}.
3. Completați titlul (pornește de la textul adnotării), pentru cine este ({{ui:Persoană}} sau {{ui:Asistent}}, și un nume), o zi-limită opțională și ce trebuie urmărit.

O sarcină pentru asistent este lucrul asistentului pe care l-ați conectat la MarkupCraft (vezi [Folosirea MarkupCraft cu un asistent AI](topic:use-with-ai-assistants)). MarkupCraft nu conține un asistent propriu: doar listează lucrul și preia răspunsurile asistentului. Alegerea {{ui:Atribuită lui}}, apoi {{ui:Asistent}} din listă, arată ce așteaptă de la el.

## Urmăriți o schimbare

- **Desenul din interiorul adnotării.** MarkupCraft păstrează liniile din caseta adnotării așa cum sunt acum. Când deschideți o revizie mai nouă a acelei foi (un al doilea fișier cu același număr de foaie sau aceeași poziție pe pagină), alegeți {{ui:Verificare acum}}: dacă liniile din zona respectivă diferă cu mai mult decât un fir de păr, sarcina se închide.
- **Un element de model.** Indicați aplicația și id-ul elementului. Asistentul citește elementul cu propriile instrumente ale celeilalte aplicații și îl raportează cu `tasks_check`. Primul raport se păstrează ca stare de pornire; un raport ulterior care diferă închide sarcina. Un element șters închide și el sarcina.
- **Nimic.** O sarcină simplă pe care o finalizați manual.

O sarcină închisă este marcată Gata, adnotarea ei devine Finalizată, iar o notă în fir spune ce s-a schimbat. Un pas de anulare o redeschide.

**Limită:** verificarea presupune că revizia mai nouă folosește aceeași origine și aceeași dimensiune de pagină. O foaie re-tipărită la altă dimensiune nu se va potrivi, deci sarcinile ei nu se închid. Foile se asociază după numărul foii, altfel după poziția paginii; MarkupCraft nu scalează o revizie ca să se potrivească cu cealaltă.

Re-tipărirea aceluiași desen cu o nouă ștampilă de dată sau liniile care s-au mutat cu mai puțin de 1.5 pt nu contează drept schimbare. Dacă nu este deschisă nicio revizie mai nouă, sarcina rămâne deschisă, iar bara de stare o spune.

## Lista

Lista {{ui:Sarcini}} poate fi filtrată după stare și după cine este destinată, inclusiv {{ui:Întârziate}}. O sarcină trecută de ziua-limită apare în panoul Probleme ca avertisment. {{ui:CSV}} exportă lista.

Sarcinile sunt salvate în PDF împreună cu adnotarea și circulă prin Live la fel ca celelalte proprietăți ale adnotărilor.

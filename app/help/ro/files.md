---
title: Fișierele pe care MarkupCraft le deschide și le salvează
summary: PDF-uri la intrare, o copie PDF cu adnotări la ieșire, plus fișiere CSV, BCF și din trusa de instrumente; unde ajunge fiecare, online și offline.
keywords: pdf, deschidere, salvare, export, descărcare, csv, bcf, bcfzip, json, trusă de instrumente, tipuri de fișiere, formate, încărcare, parolă, criptat
from: b3045b4c
---

## Ce deschide MarkupCraft

| Fișier | Cum | Ce se întâmplă |
|---|---|---|
| PDF (`.pdf`) | {{ui:Deschidere}}, {{key:Mod+O}}, sau fiind trase în zona foii. Mai multe odată sunt acceptate. | Fiecare pagină devine o foaie. Adnotările deja existente în fișier sunt citite (mai jos). |
| Trusa de instrumente (`.json`) | Fila {{ui:Instrumente}}, apoi {{ui:Import}} | Instrumentele sunt adăugate în trusă. Vezi [Trusa de instrumente](topic:tool-chest). |

Orice altceva este refuzat, cu mesajul „MarkupCraft deschide fișiere PDF.” în bara de stare. Dacă în zonă sunt fișiere amestecate, cele PDF se deschid, iar bara de stare arată câte fișiere nu sunt PDF.

### Adnotări deja existente într-un PDF

- **Adnotările salvate de MarkupCraft** revin exact: tip, stil, autor, date, stare, răspunsuri, numărul din lista de remedieri, scara foii și orice nume de foaie introduse.
- **Comentariile din alte programe PDF** sunt citite și ele. Dreptunghiurile, elipsele, liniile și săgețile, polilinii, poligoanele, traseele de cerneală (creion), casetele de text și notele adezive devin adnotări MarkupCraft normale, editabile. Răspunsurile și stările de revizuire vin odată cu ele.
- **Orice altceva** (evidențieri de text făcute prin selectarea textului, ștampile ale altor programe și alte tipuri) este afișat așa cum este, marcat ca doar citire. Îl puteți selecta, îl puteți vedea în lista de adnotări și îi puteți răspunde, dar nu îl puteți muta, modifica sau șterge.
- Linkurile și câmpurile de formular sunt lăsate neatinse și nu sunt listate.
- O scară salvată de alt program (o fereastră de vizualizare pentru măsurare) este folosită ca scară a foii atunci când MarkupCraft îi înțelege unitatea.

### Fișiere care nu se deschid

- Un PDF care cere parolă: '„nume” necesită o parolă pentru a fi deschis. Deschideți o copie neprotejată.'
- Un fișier deteriorat sau care nu este de fapt PDF: '„nume” nu a putut fi citit ca PDF (…)'.
- Un PDF care se deschide, dar este protejat împotriva modificărilor, se deschide corect. Salvarea lui este refuzată (vezi mai jos).

Când mai multe fișiere sunt deschise deodată, cele care funcționează se deschid, iar o casetă numită „Unele fișiere nu s-au deschis” enumeră celelalte.

## Ce salvează MarkupCraft

Salvarea este întotdeauna o **descărcare** a unui fișier nou. O pagină web nu poate suprascrie un fișier de pe calculator, iar MarkupCraft nu modifică niciodată originalul.

| Alegeți | Primiți | Note |
|---|---|---|
| {{ui:Salvare}} ({{key:Mod+S}}) | „<name> (marked up).pdf” | O copie a PDF-ului original, cu fiecare adnotare scrisă ca un comentariu PDF real. Salvarea unui fișier „(marked up)” din nou păstrează același nume; nu devine niciodată „(marked up) (marked up)”. Vezi [Salvarea PDF-ului cu adnotări](topic:save-the-marked-up-pdf). |
| Fila {{ui:Adnotări}}, apoi {{ui:CSV}} | „<name> markups.csv” | Adnotările așa cum sunt listate (se aplică filtrele). |
| Fila {{ui:Adnotări}}, apoi {{ui:BCF}} | „<name> markups.bcfzip” | BCF 2.1 pentru instrumente de coordonare BIM, cu un instantaneu pentru fiecare adnotare. Vezi [Noțiuni de bază BCF](topic:bcf-basics). |
| Fila {{ui:Listă de remedieri}}, apoi {{ui:Export CSV}} | „<name> punch list.csv” | Elementele din lista de remedieri, în ordinea numerelor. |
| Fila {{ui:Instrumente}}, apoi {{ui:Export}} | „MarkupCraft tool chest.json” | Trusa de instrumente, pentru a fi partajată sau păstrată. |

„<name>” este numele fișierului primului PDF deschis, fără „.pdf”.

Fișierele CSV se deschid în orice program de calcul tabelar. Sunt în UTF-8, cu marcajul pe care îl caută programele de calcul tabelar, astfel încât numele cu diacritice apar corect. O celulă care începe cu =, +, - sau @ primește un apostrof în față, ca programul de calcul tabelar să nu o execute ca formulă.

## Unde ajung descărcările

Browserul decide: de obicei dosarul Descărcări sau întreabă de fiecare dată, dacă este setat astfel. Vezi [Browsere și calculatoare](common:browsers#what-differs-between-browsers).

:::chromium
Când salvați deodată fiecare fișier modificat dintr-un set, Chrome și Edge pot întreba dacă acest site are voie să descarce mai multe fișiere. Alegeți {{ui:Permite}}, altfel primiți doar prima copie.
:::

:::safari
Pe iPad, Safari întreabă înainte de fiecare descărcare și pune fișierul în aplicația Files, sub Downloads. Pe Mac, fișierul merge în dosarul setat în setările Safari.
:::

## Online și offline

- **PDF-urile nu părăsesc niciodată acest calculator**, online sau offline. Nu există nicio încărcare nicăieri.
- Cititorul PDF se încarcă prima dată când deschideți un PDF („Se încarcă cititorul PDF…”), iar scriitorul PDF prima dată când salvați („Se încarcă scriitorul PDF…”) sau deschideți un fișier care are deja comentarii.
- Cu conexiune, amândouă se încarcă de pe site.
- **Pentru a lucra fără conexiune,** alegeți {{ui:Salvare pentru offline}} în bara de sus, cât timp sunteți online. Butonul afișează „Se salvează N din M”, apoi spune „Pregătit pentru offline”. Această copie include cititorul și scriitorul PDF (circa 6 MB în total) și acest ajutor, astfel încât, ulterior, deschiderea, adnotarea și salvarea PDF-urilor funcționează offline în acest browser.
- Dacă butonul spune „Salvarea nu a reușit”, unele fișiere nu s-au descărcat: verificați conexiunea și apăsați din nou. Dacă spune „Offline indisponibil”, această fereastră de browser nu poate păstra o copie offline (ferestrele private și unele calculatoare administrate); folosiți o fereastră normală.
- Pentru a actualiza sau a elimina copia, apăsați „Pregătit pentru offline” și alegeți „Salvare din nou (obține cea mai nouă versiune)” sau „Eliminare copie offline”. Mai multe în [Lucrul offline](common:offline).

:::offline
Sunteți offline. Dacă bara de sus spune „Pregătit pentru offline”, totul funcționează, inclusiv salvarea. Dacă nu spune și nu ați salvat încă în această filă, {{ui:Salvare}} poate eșua cu „Scriitorul PDF nu a putut fi încărcat”. Adnotările sunt încă în filă: lăsați-o deschisă, reveniți online și alegeți din nou {{ui:Salvare}}.
:::

## Lucruri de reținut

- Seturile mari de planuri se deschid mai greu: MarkupCraft citește textul fiecărei pagini pentru a găsi numerele foilor. Bara de stare numără foile pe măsură ce avansează.
- Deschiderea aceluiași PDF de două ori adaugă foile de două ori. Închideți setul și deschideți-l din nou dacă se întâmplă asta.
- {{ui:Închidere}} închide deodată toate fișierele deschise. Dacă unele au adnotări nesalvate, întreabă: {{ui:Anulare}}, {{ui:Închidere fără salvare}} sau {{ui:Salvare copii mai întâi}}.
- Salvarea în cloud nu este disponibilă încă, iar nu există încă versiuni pentru desktop. Păstrați PDF-urile împreună cu celelalte fișiere de proiect și faceți-le copii de siguranță, ca de obicei. Vezi [Unde ajung fișierele](common:your-files).

---
title: Meniuri, taste și mouse
summary: Alegeți bara de instrumente proprie MarkupCraft, o bară de meniu pentru revizuire PDF sau o panglică, dați oricărui instrument propria tastă, mutați instrumentele între meniuri și setați ce fac rotița și butoanele mouse-ului.
keywords: stil de meniu, meniuri, bară de meniu, bară de instrumente, panglică, file, revizuire PDF, scurtături de taste, taste, personalizare, reatribuire, mouse, rotiță, inversare, direcția zoom-ului, buton din mijloc, buton din dreapta, pan, export, import, comutare, familiar
from: 081438a6
---

Instrumentele MarkupCraft sunt aceleași oricum le ajungeți. Un **stil de meniu** decide doar unde se află pe ecran, cum se numesc acolo și ce taste le aleg. Alegeți-l în {{ui:Setări}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Meniuri, taste și mouse}}; schimbarea este imediată, iar acest browser o reține.

## Cele trei stiluri

| Stil | Ce obțineți |
|---|---|
| {{ui:MarkupCraft}} | Bara de instrumente proprie MarkupCraft (Fișier, Selectare, Desen, Revizuire, Adnotare, Măsurare, Editare) și tastele sale de o literă: {{key:V}} selectare, {{key:H}} pan, {{key:P}} creion, {{key:I}} evidențiator, {{key:L}} linie, {{key:A}} săgeată, {{key:R}} dreptunghi, {{key:E}} elipsă, {{key:C}} nor, {{key:K}} indicator, {{key:T}} text, {{key:N}} notă, {{key:S}} ștampilă, {{key:M}} lungime, {{key:Q}} arie, {{key:U}} numărare. Punctul de pornire. |
| {{ui:Revizuire PDF}} | O bară de meniu ({{ui:Fișier}}, {{ui:Editare}}, {{ui:Vizualizare}}, {{ui:Document}}, {{ui:Adnotare}}, {{ui:Măsurare}}, {{ui:Revizuire}}, {{ui:Fereastră}}) peste un rând de instrumente de revizuire, cu tastele așezate cum le așază programele de revizuire PDF: {{key:V}} selectare, {{key:Shift+V}} pan, {{key:H}} evidențiator, {{key:Q}} indicator, {{key:N}} poligon, {{key:Shift+N}} polilinie, {{key:Shift+T}} notă, {{key:Shift+A}} arc, iar măsurătorile pe {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrare, {{key:Alt+Shift+L}} lungime, {{key:Alt+Shift+G}} unghi, {{key:Alt+Shift+A}} arie, {{key:Alt+Shift+C}} numărare. {{key:Alt+L}} deschide lista adnotărilor. Butonul din mijloc face pan; un clic dreapta nu. |
| {{ui:Panglică}} | File denumite după lucrare: {{ui:Adnotare}} (selectare, desen, nori, indicatoare, text, note, ștampile), {{ui:Măsurare}}, {{ui:Editare}}, {{ui:Revizuire}} (lista adnotărilor și exporturile ei, problemele BCF, lista de remedieri, înregistrările de teren, cutia de instrumente, comparare), {{ui:Pagini}} și {{ui:Vizualizare}}, cu {{ui:Fișier}} și butoane rapide pentru deschidere, salvare, anulare și refacere. Instrumentele păstrează tastele proprii de o literă ale MarkupCraft. Un buton pentru un panou care nu este deschis deschide întâi acel panou. |

Fiecare stil păstrează tastele {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} potrivire pagină și {{key:Mod+9}} potrivire lățime; {{key:PageUp}} și {{key:PageDown}} schimbă foaia.

:::tip
O tastă care aparține aspectului propriu MarkupCraft, dar nu stilului ales, nu face nimic, iar bara de stare arată unde a ajuns instrumentul ei („În revizuire PDF, Indicator este Q”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} și săgețile își păstrează mereu sensul. Cât timp scrieți într-o casetă de text, indicator sau notă, fiecare tastă aparține textului, iar cifrele scrise în timpul desenării deschid tot caseta de lungime.
:::

## Personalizați-l

1. Alegeți stilul cel mai apropiat de ce vreți, apoi faceți clic pe {{ui:Personalizare…}}.
2. La {{ui:Taste și meniuri}}, găsiți un instrument (caseta de căutare ajută). {{ui:Adăugare tastă}} și apăsați tasta, sau două taste una după alta pentru o tastă cu două litere. Faceți clic pe o tastă ca s-o scoateți.
3. Cu bara de meniu, {{ui:Unde se află}} mută instrumentul într-un alt meniu sau la {{ui:Doar taste}}.
4. La {{ui:Mouse}}, setați rotița și butoanele care fac pan pe foaie.
5. Dați-i un nume și faceți clic pe {{ui:Salvare}}.

Salvarea unui stil integrat îi face o copie proprie („Revizuirea mea PDF”); cel integrat nu se schimbă niciodată. O tastă dată la două instrumente apare în roșu și trebuie reparată înainte să puteți salva.

## Mouse

- **Rotița mouse-ului**: {{ui:Derularea în sus mărește}} (începutul) sau {{ui:Derularea în sus micșorează}}, și cât de repede. Ciupirea cu trackpad-ul mărește mereu în direcția în care se mișcă degetele.
- **Pan pe foaie cu**: butonul din mijloc, butonul din dreapta sau ambele. {{key:Space}} și tragere, precum și instrumentul {{ui:Pan}}, fac mereu pan; altfel butonul stâng desenează și selectează, deci bifarea lui nu schimbă nimic aici.
- MarkupCraft nu are vedere 3D, deci butoanele 3D nu fac nimic aici.

## Transferul

{{ui:Export}} salvează stilul în uz ca un fișier mic `.ccinput.json`; {{ui:Import…}} adaugă unul, de pe alt calculator sau de la un coleg. Un fișier importat poate indica doar instrumentele proprii MarkupCraft: orice altceva din el este lăsat afară și numărat în bara de stare. {{ui:Ștergeți acest stil}} elimină unul propriu.

:::note
Aceste setări rămân în acest browser. {{ui:Folosește acest stil în toate aplicațiile}} de sub cartelele de stil face ca fiecare aplicație să se deschidă în stilul ei corespunzător: {{ui:Revizuire PDF}} merge cu stilurile cu bară de meniu ale celorlalte aplicații, {{ui:Panglică}} cu panglicile lor, iar bara de instrumente proprie MarkupCraft cu a lor. O aplicație fără un stil corespunzător își păstrează propriul.
:::

:::tip
Aspectele de spațiu de lucru din {{ui:Setări}} › {{ui:Global}} › {{ui:Aspect}} ({{ui:Panglică și browserul proiectului}}, {{ui:Casetă de instrumente și casetă de informații}}) își construiesc panglica din filele stilului {{ui:Panglică}}, iar caseta de instrumente din bara de instrumente proprie MarkupCraft, astfel că fiecare instrument funcționează la fel în ele.
:::

Înrudite: [Tastatură și mouse](topic:keyboard) · [Setările MarkupCraft](topic:settings) · [Venirea de la alte programe de adnotare](topic:coming-from)

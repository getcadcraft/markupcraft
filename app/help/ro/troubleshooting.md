---
title: Depanare
summary: Mesajele afișate de MarkupCraft și ce să faceți în legătură cu ele, plus remedieri pentru lucruri care par să nu funcționeze.
keywords: problemă, eroare, nu funcționează, ajutor, mesaj, nu se deschide, nu se poate salva, parolă, protejat, măsurare refuzată, calibrare, offline, gol, lent, adnotări pierdute, semne de întrebare
from: bb650b39
---

Majoritatea problemelor sunt explicate în bara de stare din partea de jos a ecranului. Citiți-o mai întâi.

## Deschiderea fișierelor

**„MarkupCraft deschide fișiere PDF. „x” nu este un PDF.”**
Ați ales sau ați lăsat să cadă altceva. Se deschid doar PDF-uri. Exportați mai întâi desenele din programul CAD ca PDF.

**'„nume” necesită o parolă pentru a fi deschis. Deschideți o copie neprotejată.'**
PDF-ul este protejat cu parolă. Cereți expeditorului o copie neprotejată sau deschideți-l într-un program PDF unde cunoașteți parola și salvați o copie fără parolă.

**'„nume” nu a putut fi citit ca PDF (…)'**
Fișierul este deteriorat sau nu este cu adevărat un PDF (o descărcare incompletă, un atașament de e-mail tăiat). Descărcați-l din nou. Dacă alte programe PDF îl pot deschide, folosiți „Salvare ca” al acestora pentru a face o copie curată și deschideți-o pe aceea.

**„Unele fișiere nu s-au deschis”**
Când deschideți mai multe deodată, această casetă listează fișierele care au eșuat și motivul. Celelalte sunt deschise.

**„Cititorul PDF nu a putut încărca: …”**
Motorul PDF nu a putut fi descărcat. Online: reîncărcați pagina și încercați din nou; verificați că un firewall sau un blocator de conținut nu blochează site-ul. Offline: MarkupCraft nu a fost salvat pentru utilizare offline în acest browser (bara de sus nu spune „Pregătit pentru offline”). Conectați-vă, alegeți {{ui:Save for offline}} și așteptați „Pregătit pentru offline”. Consultați [Lucrul offline](common:offline).

**„Unele adnotări pot apărea de două ori pe ecran” sau „Detaliile suplimentare ale adnotărilor nu au putut fi citite”**
Comentariile existente ale fișierului sunt neobișnuite. Totuși, ele sunt deschise cât de bine poate MarkupCraft; verificați-le înainte de a vă baza pe ele. Salvarea funcționează în continuare.

**Foaia are numele greșit sau „pagina 3”**
Consultați [Cum primesc foile numele](topic:open-a-plan-set#how-sheets-get-their-names). Foile scanate nu au text de citit; folosiți {{ui:Rename sheet}}.

**Aceleași foi apar de două ori**
Același fișier a fost deschis de două ori. Alegeți {{ui:Close}} (salvați mai întâi, dacă este nevoie) și deschideți setul din nou.

## Desenarea și selectarea

**Nu se întâmplă nimic când fac clic pe foaie**
Verificați ce instrument este apăsat în bara de instrumente și citiți bara de stare. Cu {{ui:Rectangle}}, {{ui:Ellipse}} și {{ui:Cloud}}, un clic fără tragere nu desenează nimic: trageți. Cu {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} și {{ui:Area}}, se adaugă puncte: încheiați cu dublu clic sau cu {{key:Enter}}.

**„Un poligon are nevoie de cel puțin 3 puncte.” (sau 2 pentru o polilinie)**
Faceți clic pe mai multe puncte înainte de a încheia.

**„Nimic tastat, deci nu s-a adăugat text.”**
Casetele de text și indicatoarele se păstrează doar când au text. Desenați-le din nou și tastați înainte de a face clic în afară.

**„Cele două puncte sunt aceleași. Faceți clic pe două puncte diferite.”**
Pentru linii, săgeți, lungimi și calibrare, cele două capete trebuie să fie departe unul de altul. Trageți sau faceți clic de două ori în locuri diferite.

**Nu pot muta sau șterge o adnotare; are o casetă gri punctată**
Este un comentariu numai pentru citire, care a venit cu fișierul (de exemplu o evidențiere de text). MarkupCraft îl păstrează neschimbat: puteți doar să-i răspundeți. Bara de stare spune: „adnotările numai pentru citire sunt păstrate ca în fișier”.

**Tastele mele scriu litere într-o casetă în loc să aleagă instrumente**
Cursorul se află într-o casetă de text (un răspuns, un câmp din {{ui:Properties}}, căutarea în foaie). Faceți mai întâi clic pe o parte goală a zonei foii sau apăsați {{key:Esc}} dacă editați textul unei adnotări.

**Spațiul nu deplasează vizualizarea, sau tastele săgeată nu fac nimic**
Tocmai ați făcut clic pe un buton din bara de instrumente, deci acesta încă are tastatura. Trageți cu butonul din mijloc al mouse-ului sau faceți clic o dată pe foaie, cu {{ui:Select}} activ, apoi încercați din nou. Consultați și [Tastatură și mouse](topic:keyboard#when-a-key-does-nothing).

**O ciupire pe ecranul tactil a lăsat o urmă**
Un instrument de tragere (creion, nor, dreptunghi) a pornit înainte să sosească al doilea deget și s-a încheiat înainte să fie anulat. Apăsați {{ui:Undo}}. Puneți ambele degete simultan când vreți să măriți.

## Măsurarea

**„Calibrați mai întâi această foaie: alegeți două puncte aflate la o distanță cunoscută, sau alegeți scara ei. Apoi măsurați.”**
Fiecare foaie are nevoie de propria scară înainte de {{ui:Length}} sau {{ui:Area}}. MarkupCraft a trecut la {{ui:Calibrate}}: faceți clic pe cele două capete ale unei dimensiuni cunoscute și tastați lungimea ei, sau faceți clic pe butonul de scară din bara de stare și alegeți o scară. Consultați [Calibrarea unei foi și măsurarea](topic:calibrate-and-measure).

**„Aceasta nu este o lungime pe care MarkupCraft o înțelege.”**
Tastați-o ca `24'-0"`, `12' 6 1/2"`, `7.2 m` sau `900 mm`. Consultați [Unități, lungimi și scări](topic:units-and-scales).

**Măsurătorile sunt puțin greșite sau total greșite**
- O scară presetată pe un PDF care nu este la dimensiunea completă măsoară greșit. Calibrați în schimb dintr-o dimensiune cunoscută și lungă.
- Un separator de mii a fost citit ca punct zecimal: `1,200 mm` înseamnă 1.2 mm. Tastați `1200 mm`.
- Măriți când faceți clic pe capete.
- Desenul poate să nu fie la scară („NTS”).

**„Selectați mai întâi un grup de numărare, apoi Shift+clic pe un semn pentru a-l elimina.”**
Alegeți {{ui:Select}}, faceți clic pe grupul de numărare, apoi alegeți din nou {{ui:Count}} și faceți clic cu {{key:Shift}} pe punct.

## Salvarea

**„Acest PDF este protejat (criptat), deci o copie adnotată nu poate fi scrisă.”**
Fișierul interzice modificările. Cereți o copie neprotejată. Între timp, puteți exporta în continuare lista adnotărilor ca CSV sau BCF.

**„Scriitorul PDF nu a putut fi încărcat: …”**
De obicei sunteți offline, iar aplicația nu a fost salvată pentru utilizare offline (fără „Pregătit pentru offline” în bara de sus). Adnotările dvs. sunt încă în filă: lăsați-o deschisă, conectați-vă și alegeți din nou {{ui:Save}}. Apoi alegeți {{ui:Save for offline}}, ca să funcționeze offline data viitoare; copia salvată include scriitorul PDF.

**„Nu s-a putut salva <fișier>”**
Caseta arată motivul. Adnotările dvs. sunt încă în filă. Încercați din nou; dacă se repetă, exportați CSV-ul, ca să nu se piardă comentariile, și raportați mesajul.

**Am ales {{ui:Save}}, dar a sosit un singur fișier**
Browserul dvs. a blocat descărcările suplimentare. Căutați o notificare în bara de adrese, permiteți site-ului să descarce mai multe fișiere, apoi salvați din nou.

**Nu găsesc fișierul salvat**
A ajuns în folderul de descărcări al browserului. Deschideți lista de descărcări a browserului (în Chrome și Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; în Firefox și Safari, butonul de descărcări din bara de instrumente) pentru a vedea unde. Consultați [Browsere și calculatoare](common:browsers).

**Unele texte arată „?” în alte vizualizatoare PDF**
Caracterele din afara setului Europei de Vest se tipăresc ca „?” în copie. Mesajul de salvare le numără. Consultați [Salvarea PDF-ului adnotat](topic:save-the-marked-up-pdf).

**Ștampila arată data de mâine (sau de ieri)**
Datele ștampilelor sunt în UTC. Consultați [Ștampile și note adezive](topic:stamps-and-notes).

## Lucrul offline

**Butonul offline spune „Could not save”**
Unele fișiere ale aplicației nu s-au descărcat. Verificați conexiunea și faceți clic din nou pe buton; el numără „Salvare N din M” până la „Pregătit pentru offline”.

**Butonul offline spune „Offline not available”**
Această fereastră de browser nu poate păstra o copie offline: o fereastră privată sau un calculator a cărui politică o blochează. Deschideți MarkupCraft într-o fereastră normală și încercați din nou.

**Offline, aplicația este o versiune mai veche**
Copia offline este versiunea pe care ați salvat-o. Când sunteți online, faceți clic pe „Pregătit pentru offline” și alegeți „Salvare din nou (obține cea mai nouă versiune)”. Pentru a elibera spațiul, alegeți „Eliminare copie offline”. Consultați [Lucrul offline](common:offline).

**Ajutorul nu se deschide**
Apăsați {{key:F1}} (pe Mac, cu **fn**), sau alegeți {{ui:Help}} în bara de sus. Funcționează și offline.

## Lucruri pierdute

**Adnotările mele au dispărut după închiderea sau reîncărcarea filei**
Deschideți din nou MarkupCraft în același browser: el oferă înapoi lucrul nesalvat, cu „Recuperarea lucrării?”. Alegeți {{ui:Recover}} și salvați PDF-ul. Copiile se păstrează până la 30 de zile; o fereastră privată sau ștergerea datelor site-ului nu lasă niciuna. Consultați [Recuperarea lucrării](common:recover).

**Numele meu, setările instrumentelor sau cutia de instrumente au dispărut**
Acestea sunt păstrate doar în acest browser și au fost șterse (date ale site-ului șterse, o fereastră privată, alt browser sau calculator, sau curățarea Safari a site-urilor nevizitate o vreme). Setați din nou numele și importați cutia exportată. Consultați [Ce rămâne în acest browser](topic:browser-storage).

**„Cutia de instrumente nu a putut fi păstrată în acest browser (stocarea este dezactivată sau plină). Exportați-o pentru a o păstra.”**
Browserul refuză să stocheze date pentru acest site (mod privat, stocare blocată de o setare sau politică, sau spațiu plin). Exportați cutia după ce o modificați și importați-o data viitoare.

## Afișare și viteză

**Foaia pare neclară pentru un moment**
MarkupCraft arată o redare rapidă, aproximativă, cât timp măriți sau deplasați, și o redesenează clar la scurt timp după ce vă opriți.

**Totul este lent cu un set mare**
Închideți alte file grele, deschideți mai puține fișiere deodată și evitați mărirea la maximum pe foi foarte mari. Consultați [Lucrul cu mai multe fișiere deodată](topic:several-files#big-sets).

**Foaia este întunecată, cu linii luminoase**
Sunteți în tema {{ui:Model}}. Alegeți {{ui:Paper}} în bara de sus pentru linii întunecate pe alb. Adnotările dvs. și PDF-ul salvat nu sunt afectate.

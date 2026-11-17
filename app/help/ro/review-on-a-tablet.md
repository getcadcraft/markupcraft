---
title: Revizuirea pe iPad sau ecran tactil
summary: Ciupiți, derulați și desenați cu degetele sau cu un creion stylus, ce acționează la ridicarea degetului, ce necesită tastatură și cum vă păstrați lucrarea în siguranță pe tabletă.
keywords: ipad, tabletă, tactil, ecran tactil, ciupire, zoom, două degete, Apple Pencil, stylus, deget, teren, șantier, suprafață, gesturi, mobil
from: 91eb6438
---

MarkupCraft funcționează cu atingere: pe un iPad (Safari sau Chrome), pe un laptop cu ecran tactil sau pe o tabletă Windows ori Android cu un browser recent. În orientare orizontală, tableta arată tot aspectul.

## Gesturi

| Gest | Ce face |
|---|---|
| Un deget | Desenează cu instrumentul curent sau selectează cu {{ui:Selectare}} |
| Două degete, depărtate sau ciupite | Face zoom în jurul punctului dintre degete |
| Două degete, mutate împreună | Face pan; puteți face zoom și pan dintr-o singură mișcare |
| Un al doilea deget în timp ce desenați | Anulează ce a început primul deget și începe zoom-ul |
| Atingere dublă sau atingere și menținere | Termină o polilinie, un poligon, un nor liber sau o arie |
| Atingere și menținere pe un text, indicator sau notă, cu {{ui:Selectare}} | Deschide textul ei pentru editare |
| Un deget, cu {{ui:Pan}} activat | Face pan |

Pe un ecran tactil, butoanele barei de instrumente, meniurile, filele și butoanele casetelor de dialog sunt mai mari, ca să fie ușor de atins cu degetul.

## Ce se întâmplă la ridicarea degetului

Ca primul deget al unei ciupiri să nu lase niciodată o urmă, unele instrumente acționează când ridicați degetul, nu când atingeți:

- {{ui:Numărare}}: punctul se adaugă la ridicare.
- {{ui:Notă}}: nota se plasează la ridicare.
- {{ui:Polilinie}}, {{ui:Poligon}}, {{ui:Nor liber}} și {{ui:Arie}}: fiecare punct se adaugă la ridicare.
- {{ui:Linie}}, {{ui:Săgeată}}, {{ui:Lungime}} și {{ui:Calibrare}}: când atingeți începutul și apoi sfârșitul, sfârșitul se plasează la ridicare.

Dacă degetul alunecă mai mult decât puțin înainte de ridicare, nu contează ca atingere și nu se adaugă nimic. Atingeți curat; pentru corectare, folosiți {{ui:Anulare}}.

Instrumentele pe care le trageți ({{ui:Creion}}, {{ui:Evidențiere}}, {{ui:Nor}}, {{ui:Dreptunghi}}, {{ui:Elipsă}}, {{ui:Indicator}}, {{ui:Text}}, {{ui:Ștampilă}}) pornesc din clipa în care atingeți; un al doilea deget le anulează.

## Selectarea cu degetul

- Atingeți o adnotare ca s-o selectați; trageți-o ca s-o mutați; trageți un mâner ca s-o redimensionați. După ce un deget atinge foaia, adnotările și mânerele au o țintă mai mare, iar mânerele se desenează mai mari.
- Trageți peste foaia goală ca să desenați o fereastră de selecție (de la stânga la dreapta: complet inclus; de la dreapta la stânga: atingând).
- În {{ui:Selectare}}, un deget **nu** face pan. Folosiți două degete sau alegeți {{ui:Pan}}.

## Lucruri care necesită tastatură

Fără tastatură nu există {{key:Shift}}, {{key:Esc}} sau {{key:Enter}}. Iată ce faceți în loc:

| Acțiune de tastatură | Fără tastatură |
|---|---|
| {{key:Esc}} ca să anulați sau să reveniți la Selectare | Atingeți {{ui:Selectare}} în bara de instrumente |
| {{key:Shift}} pentru linii la 45°, pătrate și cercuri | Desenați cu grijă; ajustați cu mânerele |
| {{key:Shift}}-clic ca să adăugați la o selecție | Folosiți o fereastră de selecție |
| {{key:Shift}}-clic ca să eliminați un punct de numărare | {{ui:Anulare}} imediat după o atingere greșită |
| {{key:Mod+Enter}} ca să terminați de scris | Atingeți în afara casetei de text |
| {{key:Enter}} ca să terminați o polilinie sau să editați textul unei adnotări | Atingere și menținere, sau {{ui:Editare pe foaie}} în {{ui:Proprietăți}} |
| {{key:Delete}} | {{ui:Ștergere}} în bara de instrumente sau în {{ui:Proprietăți}} |
| Începerea unui nou grup de numărare cu {{key:Esc}} | Atingeți foaia goală cu {{ui:Selectare}}, apoi atingeți din nou {{ui:Numărare}} |

O tastatură cu carcasă sau o tastatură Bluetooth aduce înapoi toate scurtăturile; pe un iPad, tasta ⌘ funcționează pentru {{key:Mod+Z}} și restul.

Butoanele nu-și arată sfaturile pe ecran tactil. Tasta pentru fiecare instrument este listată în [Tastatură și mouse](topic:keyboard).

## Creion stylus și Apple Pencil

Un creion stylus (Apple Pencil, Surface Pen și altele asemenea) funcționează ca un mouse: desenează și selectează și acționează imediat la atingere. Folosiți degetele pentru ciupire și pan. Presiunea nu schimbă grosimea liniei.

## Deschiderea și salvarea pe iPad

- {{ui:Deschidere}} arată selectorul Files: iCloud Drive, On My iPad și orice aplicație de stocare conectată.
- {{ui:Salvare}} cere descărcare; copia ajunge în Files, în Downloads (sau în dosarul setat în setările Safari).

## Păstrați-vă lucrarea în siguranță pe tabletă

:::warning
iPad Safari nu avertizează înainte de a părăsi o pagină cu lucru nesalvat, iar iPadOS poate reîncărca o filă în fundal ca să elibereze memorie. MarkupCraft păstrează o copie de recuperare în browser și o oferă din nou când îl deschideți (vedeți [Recuperarea lucrării](common:recover)), dar **salvați după fiecare foaie sau după fiecare parcurgere a șantierului**: o filă privată nu păstrează nicio copie.
:::

- Numele, setările instrumentelor și cufărul cu instrumente sunt păstrate în acel browser de pe acel iPad, ca pe un calculator. Vedeți [Ce rămâne în acest browser](topic:browser-storage).
- **Înainte de o vizită pe șantier fără semnal:** cât timp sunteți încă online, deschideți MarkupCraft în Safari (sau Chrome) pe iPad și alegeți {{ui:Salvare pentru offline}} în bara de sus. Așteptați până apare „Gata pentru offline” (numără „Se salvează N din M”; cititorul și scriitorul PDF au circa 6 MB). Pe șantier, deschideți aceeași adresă sau un marcaj al ei: deschiderea, adnotarea și salvarea PDF-urilor funcționează fără conexiune. Dacă apare „Offline nu este disponibil”, sunteți într-o filă privată; folosiți una normală. Vedeți [Lucrul offline](common:offline).
- Safari șterge o copie offline pe care nu ați folosit-o de câteva săptămâni. Înainte de o deplasare, faceți clic pe „Gata pentru offline” și alegeți „Salvați din nou (obțineți cea mai nouă versiune)”.
- Seturile foarte mari de planuri consumă multă memorie. Pe o tabletă, deschideți doar foile de care aveți nevoie pentru vizită.

## Pe telefon

Funcționează, dar ecranul este mic: părțile se așază una sub alta (bara de instrumente, foaia, bara de stare, panourile, apoi lista de foi), iar bara de instrumente derulează lateral. Folosiți telefonul ca să priviți și să adăugați o notă rapidă, iar o tabletă sau un calculator pentru o revizuire reală.

---
title: Selectare, mutare și modificare adnotări
summary: Alegeți adnotări făcând clic sau cu o fereastră, mutați, redimensionați, deplasați ușor, decupați, copiați, lipiți, lipiți în aceeași poziție, duplicați, ștergeți și anulați.
keywords: selectare, selecție, selectare totală, anularea selecției, fereastră, intersectare, mutare, redimensionare, mânere, deplasare fină, decupare, copiere, lipire, lipire în aceeași poziție, duplicare, clipboard, altă filă, ștergere, anulare, refacere, editare
from: 62c7def3
---

Alegeți mai întâi {{ui:Selectare}} ({{key:V}}). Apăsarea lui {{key:Esc}} vă duce și acolo: prima apăsare șterge selecția, a doua trece înapoi la {{ui:Selectare}}.

## Alegerea adnotărilor

:::mouse
- **O adnotare:** faceți clic pe ea. Apar un contur punctat și mânere, iar {{ui:Proprietăți}} o afișează.
- **Adăugați sau scoateți una:** țineți apăsat {{key:Shift}} și faceți clic.
- **Complet în interiorul unei ferestre:** trageți de la stânga la dreapta pe o porțiune goală a foii. Sunt alese doar adnotările complet în interiorul casetei (contur plin).
- **Atingând o fereastră:** trageți de la dreapta la stânga. Sunt alese tot ce atinge caseta (contur verde, punctat).
- **Tot ce este pe această foaie:** {{key:Mod+A}}, sau {{ui:Mai multe}} apoi {{ui:Selectare totală}} în grupul {{ui:Editare}} al barei de instrumente.
- **Nimic:** faceți clic pe un loc gol, apăsați {{key:Esc}} sau {{ui:Mai multe}} apoi {{ui:Anularea selecției}}.
:::

:::touch
- **O adnotare:** atingeți-o.
- **Mai multe:** trageți cu un deget pe o porțiune goală a foii pentru a desena o fereastră. De la stânga la dreapta alege ce este complet înăuntru; de la dreapta la stânga alege ce atinge.
- Atingerea cu {{key:Shift}} apăsat funcționează doar cu o tastatură atașată. Fără ea, folosiți o fereastră.
- Un deget nu mută niciodată pagina în {{ui:Selectare}}; folosiți două degete sau instrumentul {{ui:Pan}}.
:::

Comentariile doar pentru citire care au venit cu fișierul apar ca un contur gri punctat, fără mânere. Pot fi selectate și li se poate răspunde, dar nu pot fi modificate.

## Mutare și redimensionare

- **Mutare:** trageți o adnotare selectată. Țineți {{key:Shift}} apăsat ca să mutați doar pe multipli de 45°. Mai multe adnotări selectate se mută împreună.
- **Redimensionare:** cu o adnotare selectată, trageți un mâner. Mânerele pătrate redimensionează caseta (țineți {{key:Shift}} ca să păstrați proporțiile); mânerele rotunde mută un punct de colț al unei linii, polilinii, poligon, nor sau măsurători (țineți {{key:Shift}} pentru 45°); mânerele romb mută vârful și cotul unui indicator. Traseele creionului se scalează din caseta lor.
- **Deplasare fină:** apăsați tastele cu săgeți ca să mutați selecția cu un pixel de ecran; țineți {{key:Shift}} pentru zece. Fiecare apăsare este un pas de anulare.

## Schimbarea textului sau a aspectului

- **Text, indicatoare și note:** faceți dublu clic pe adnotare, sau apăsați {{key:Enter}}, sau alegeți {{ui:Editare pe foaie}} în {{ui:Proprietăți}}. Scrieți, apoi faceți clic în afară sau apăsați {{key:Mod+Enter}}. {{key:Esc}} anulează editarea.
- **Ștampile:** alegeți o altă ștampilă în {{ui:Proprietăți}} (dublu clic deschide automat {{ui:Proprietăți}}).
- **Stil:** {{ui:Culoare}}, {{ui:Grosime de linie}}, {{ui:Umplere}}, {{ui:Opacitate}} și {{ui:Dimensiune text}} sub „Stil” în {{ui:Proprietăți}}. Cu mai multe adnotări selectate, {{ui:Proprietăți}} arată tipurile alese și le schimbă pe toate deodată.

## Copiere, lipire și duplicare

Grupul {{ui:Editare}} al barei de instrumente are {{ui:Copiere}} și {{ui:Lipire}}; meniul {{ui:Mai multe}} are toate acestea, fiecare cu tasta sa.

| Comandă | Tastă | Ce face |
|---|---|---|
| {{ui:Decupare}} | {{key:Mod+X}} | Copiază adnotările selectate și le șterge |
| {{ui:Copiere}} | {{key:Mod+C}} | Copiază adnotările selectate |
| {{ui:Lipire}} | {{key:Mod+V}} | Pune o copie pe foaia pe care vă aflați (unde, mai jos) |
| {{ui:Lipire în aceeași poziție}} | {{key:Mod+Shift+V}} | Pune copia exact în locul de unde a fost copiată: pe aceeași foaie, peste original; pe altă foaie, în același loc de pe hârtie |
| {{ui:Duplicare}} | {{key:Mod+D}} | Face o copie a selecției puțin mai jos și spre dreapta, fără a atinge ce ați copiat înainte |

**Unde pune Lipire copia:**

- {{key:Mod+V}} cu cursorul pe foaie pune copia centrată unde este cursorul. Mutați cursorul, apăsați din nou {{key:Mod+V}} și plasați încă una.
- Butonul {{ui:Lipire}} (atunci cursorul este pe bara de instrumente), sau {{key:Mod+V}} cu cursorul în afara foii, pune copia puțin mai jos și spre dreapta originalului. Fiecare lipire a aceleiași copii face un pas mai departe, astfel încât copiile nu se ascund una pe alta. Pe altă foaie, prima lipire ajunge unde era originalul pe foaia lui. Dacă acel loc este în afara vederii, copia ajunge în mijlocul vederii.
- Ca {{key:Mod+V}} să lipească mereu lângă original, alegeți {{ui:Lângă copie}} sub {{ui:Lipire}} în [setările MarkupCraft](topic:settings).

Adnotările lipite sunt selectate, ca să le puteți trage imediat. Fiecare decupare, lipire sau duplicare este un singur pas de anulare: {{key:Mod+Z}} înlătură toată lipirea.

Copiile lipite sunt adnotări noi: primesc numele dumneavoastră, data de azi, starea Deschis, fără număr din lista de remedieri și o conversație goală. Tipul, forma, stilul, textul și comentariul lor vin odată cu ele. Comentariile doar pentru citire care au venit cu fișierul nu pot fi copiate sau decupate.

**Între file:** ce copiați este păstrat și în acest browser, astfel încât o altă filă MarkupCraft din același browser o poate lipi. Copierea adnotărilor nu folosește clipboard-ul calculatorului: nu le puteți lipi în alt program, iar textul copiat din altă parte nu se lipește ca adnotare.

**Meniul cu clic dreapta:** faceți clic dreapta pe o adnotare (sau pe hârtia goală) pentru {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire aici}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Salvare selecție ca ștampilă…}}, {{ui:Aplatizare în pagină la salvare}}, {{ui:Inserare imagine aici…}} și {{ui:Selectare totală}}. Un clic dreapta pe o adnotare neselectată o selectează mai întâi. Trăgând cu butonul drept, pagina se mută în continuare. Pe ecran tactil, o apăsare lungă pe o adnotare deschide același meniu (pe text, începe editarea textului). Tasta de meniu sau {{key:Shift+F10}} îl deschide la selecție.

Conținutul paginii selectat cu instrumentul {{ui:Conținut}} se copiază și se lipește la fel: vezi [Modificarea liniilor, imaginilor și textului propriu al paginii](topic:page-content).

Pentru a copia o parte a paginii ca imagine (un dreptunghi, o elipsă sau o formă liberă), sau ca suprapunere transparentă pentru altă foaie ori altă aplicație, vezi [Copierea unei zone din pagină sau a unei suprapuneri](topic:copy-an-area).

## Ștergere

Apăsați {{key:Delete}} sau {{key:Backspace}}, alegeți {{ui:Mai multe}} apoi {{ui:Ștergere}} în bara de instrumente, sau {{ui:Ștergere}} în {{ui:Proprietăți}}. Bara de stare spune câte au fost șterse. Adnotările doar pentru citire din fișier nu se șterg niciodată („păstrate ca în fișier”).

## Anulare și refacere

- {{key:Mod+Z}} anulează, {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} refac. Bara de instrumente are {{ui:Anulare}} și {{ui:Refacere}}.
- Bara de stare spune ce s-a anulat („Anulată: mutare adnotare.”).
- Anularea acoperă orice modificare a adnotărilor, stărilor, răspunsurilor, elementelor din lista de remedieri, scărilor foilor și numelor foilor, până la 500 de pași.
- Istoricul se șterge când închideți setul.

## Copierea adnotărilor pe alte foi

Pentru a pune aceeași ștampilă, aceeași notă sau același nor pe mai multe foi, selectați-o (sau mai multe adnotări) și alegeți {{ui:Copiere pe alte foi…}} în {{ui:Proprietăți}}. Bifați foile sau {{ui:Toate foile}}, apoi alegeți {{ui:Copiere}}. Fiecare foaie primește o copie în același loc pe pagină, semnată cu numele dumneavoastră. Un singur {{key:Mod+Z}} le înlătură pe toate.

---
title: Tastatură și mouse
summary: Fiecare tastă, acțiune de mouse și gest tactil pe care le înțelege MarkupCraft, grupate, plus scurtăturile păstrate de browser.
keywords: tastatură, scurtături, taste rapide, taste, mouse, rotiță, clic dreapta, buton din mijloc, trackpad, atingere, gesturi, ciupire, pan cu Spațiu
from: 7bf207ec
---

Scurtăturile scrise cu {{key:Mod}} funcționează fie cu ⌘, fie cu Control pe Mac, și cu Ctrl pe Windows și Linux. Literele pentru instrumente funcționează doar când nu scrieți într-o casetă; în timp ce scrieți, literele sunt doar litere. Vezi și [Taste, mouse-uri și trackpad-uri](common:keys).

## Instrumente

| Tastă | Instrument |
|---|---|
| {{key:V}} | {{ui:Selectare}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Conținut}}: liniile, imaginile și textul proprii ale paginii (vezi [Modificarea conținutului propriu al paginii](topic:page-content)) |
| {{key:P}} | {{ui:Creion}} |
| {{key:I}} | {{ui:Evidențiere}} |
| {{key:L}} | {{ui:Linie}} |
| {{key:A}} | {{ui:Săgeată}} |
| {{key:R}} | {{ui:Dreptunghi}} |
| {{key:E}} | {{ui:Elipsă}} |
| {{key:Y}} | {{ui:Polilinie}} |
| {{key:G}} | {{ui:Poligon}} |
| {{key:C}} | {{ui:Nor}} (trageți o casetă) |
| {{key:Shift+C}} | {{ui:Nor liber}} |
| {{key:K}} | {{ui:Indicator}} |
| {{key:T}} | {{ui:Text}} |
| {{key:N}} | {{ui:Notă}} |
| {{key:S}} | {{ui:Ștampilă}} |
| {{key:M}} | {{ui:Lungime}} |
| {{key:Q}} | {{ui:Arie}} |
| {{key:U}} | {{ui:Numărare}} |
| {{key:O}} | {{ui:Arc}} |
| {{key:X}} | {{ui:Unghi}} |

{{ui:Calibrare}} nu are tastă: folosiți butonul său din bara de instrumente sau butonul de scară din bara de stare. Literele pentru instrumente sunt ignorate cât timp {{key:Alt}} este ținut apăsat.

## În timpul desenării

| Tastă sau acțiune | Ce face |
|---|---|
| {{key:Shift}} în timpul desenării | Linii, săgeți, lungimi și laturi de polilinie la pași de 45°; dreptunghiurile, elipsele și nourii în casetă devin pătrate; creionul și evidențiatorul trasează o singură linie dreaptă |
| Dublu clic, {{key:Enter}} sau clic dreapta | Încheie o polilinie, un poligon, un nor liber sau o arie |
| {{key:Backspace}} | Elimină ultimul punct al unei polilinii, al unui poligon, al unui nor liber sau al unei arii |
| {{key:Esc}} | Anulează ceea ce desenați; fără nimic în lucru, golește selecția; fără nimic selectat, revine la {{ui:Selectare}} |
| {{key:Mod+Enter}} | Încheie scrierea într-o casetă de text, indicator sau notă (sau faceți clic în afara ei) |
| {{key:Esc}} în timpul scrierii | Anulează textul pe care îl scrieți |
| {{key:Shift}}-clic cu {{ui:Numărare}} | Elimină cel mai apropiat punct din grupul de numărare selectat |

## Selectare și editare

| Tastă sau acțiune | Ce face |
|---|---|
| Clic | Selectează o adnotare |
| {{key:Shift}}-clic | Adaugă sau scoate o adnotare din selecție |
| Trageți de la stânga la dreapta pe foaia goală | Selectează ce se află complet în fereastră |
| Trageți de la dreapta la stânga pe foaia goală | Selectează ce atinge fereastra |
| {{key:Mod+A}} | Selectează toate adnotările de pe această foaie |
| Trageți o adnotare selectată | O mută ({{key:Shift}}: pe pași de 45°) |
| Trageți un mâner | Redimensionează sau remodelează ({{key:Shift}}: păstrează proporțiile sau 45°) |
| Tastele cu săgeți | Deplasează selecția cu un pixel de ecran ({{key:Shift}}: zece) |
| Dublu clic sau {{key:Enter}} | Editează textul unei casete de text, al unui indicator sau al unei note; pentru o ștampilă, deschide {{ui:Proprietăți}} |
| {{key:Delete}} sau {{key:Backspace}} | Șterge selecția |
| {{key:Esc}} | Nu selectează nimic |
| {{key:Mod+Z}} | Anulare |
| {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} | Refacere |

## Decupare, copiere și lipire

Aceleași comenzi sunt în grupul {{ui:Editare}} din bara de instrumente ({{ui:Copiere}}, {{ui:Lipire}}) și în meniul {{ui:Mai multe}}, fiecare cu tasta sa. Fiecare este un singur pas de anulare. Vezi [Copiere, lipire și duplicare](topic:select-and-edit#copy-paste-and-duplicate).

| Tastă | Ce face |
|---|---|
| {{key:Mod+X}} | Decupare: copiază selecția și o șterge |
| {{key:Mod+C}} | Copiază selecția |
| {{key:Mod+V}} | Lipire. Cu indicatorul pe foaie, copia ajunge centrată acolo unde indică; altfel alături de original. Setările pot face ca lipirea să fie întotdeauna alături de original. |
| {{key:Mod+Shift+V}} | Lipire în aceeași poziție: același loc de pe foaie, pe această foaie sau pe alta |
| {{key:Mod+D}} | Duplică selecția alături de ea (clipboardul rămâne neatins) |

## Ajutor

| Tastă | Ce face |
|---|---|
| {{key:F1}} | Deschide sau închide acest ajutor (un panou pe lateral; foaia rămâne utilizabilă). Și {{ui:Ajutor}} din bara de sus. |
| {{key:Esc}} în ajutor | Închide ajutorul |

:::mac
Pe majoritatea tastaturilor Mac, apăsați {{key:F1}} împreună cu **fn** (sau tasta globe), ori folosiți {{ui:Ajutor}}. Vezi [Taste, mouse-uri și trackpad-uri](common:keys#function-keys-on-a-mac).
:::

## Fișiere și foi

| Tastă | Ce face |
|---|---|
| {{key:Mod+N}} | Pagini goale noi (când browserul lasă pagina să folosească tasta; vezi [Pornirea cu pagini goale](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Deschide PDF-uri |
| {{key:Mod+P}} | Imprimare (vezi [Imprimarea și modificarea paginilor](topic:pages-and-printing)) |
| {{key:Mod+F}} | Caută text în desene (vezi [Căutarea textului](topic:find-text)) |
| {{key:Mod}}+clic pe o adnotare legată | Urmează legătura spre foaia sa; {{key:Alt+Left}} revine înapoi (vezi [Legături între foi](topic:sheet-links)) |
| {{key:Mod+S}} | Salvează o copie cu adnotări |
| {{key:PageDown}} / {{key:PageUp}} | Foaia următoare / anterioară |
| {{key:Enter}} în {{ui:Căutare în foi}} | Deschide prima foaie găsită |
| {{key:Mod+Enter}} în {{ui:Scrieți un răspuns}} | Trimite răspunsul |

## Zoom și pan

| Tastă sau acțiune | Ce face |
|---|---|
| Rotița mouse-ului | Mărește sau micșorează în jurul indicatorului (rotița nu derulează niciodată) |
| {{key:Ctrl}} + rotița | Zoom mai rapid |
| {{key:Plus}} sau {{key:Minus}} (și cu {{key:Mod}}) | Mărește sau micșorează în jurul centrului; {{key:=}} funcționează ca plus |
| {{key:Mod+0}} | {{ui:Potrivire pagină}} |
| {{key:Mod+9}} | {{ui:Potrivire lățime}} |
| Trageți cu butonul din mijloc | Pan |
| Trageți cu butonul din dreapta | Pan (când nu sunteți în mijlocul unei polilinii) |
| Țineți apăsat {{key:Space}} și trageți | Pan |
| Tastele cu săgeți fără nimic selectat | Pan |
| {{key:Ctrl+Shift+F}} | Mod ecran: normal, ecran complet, ecran complet cu barele ascunse (tasta Control pe orice calculator) |

:::mac
**Pe trackpad:** derularea cu două degete mărește. Ciupirea mărește și în Chrome, Edge și Firefox. Faceți pan cu {{key:Space}} apăsat în timp ce trageți, sau cu instrumentul {{ui:Pan}}. Un clic cu două degete este clic dreapta și încheie o polilinie. Control-clicul poate acționa aici ca un clic simplu, nu ca un clic dreapta, deci folosiți un clic cu două degete.
:::

:::touch
## Atingere

| Gest | Ce face |
|---|---|
| Un deget | Desenează cu instrumentul curent sau selectează |
| Două degete | Ciupire pentru zoom în jurul mijlocului lor, mișcare pentru pan |
| Al doilea deget în timpul unei trasături | Anulează trăsătura și face zoom în schimb |
| Atingere dublă | Încheie o polilinie, un poligon, un nor liber sau o arie |

Numărarea punctelor, notele, punctele de polilinie și al doilea punct al unui instrument cu două puncte sunt plasate când ridicați degetul. Vezi [Revizuirea pe iPad sau ecran tactil](topic:review-on-a-tablet).
:::

## Scurtăturile păstrate de browser

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} și {{key:Mod+Q}} aparțin browserului. Închiderea filei sau a ferestrei cu adnotări nesalvate le pierde, după întrebarea „Părăsiți site-ul?” a browserului, pe calculator.
- Majoritatea browserelor păstrează {{key:Mod+N}} pentru o fereastră nouă, deci într-o filă de browser folosiți {{ui:Nou}} din bara de instrumente; aplicația desktop și Studio transmit tasta către MarkupCraft.
- MarkupCraft preia {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} și {{key:Mod+Minus}} de la browser cât timp aplicația are tastatura, iar {{key:Mod+C}} și {{key:Mod+X}} cât timp sunt selectate adnotări. {{key:Mod+,}} deschide {{ui:Setări}}. Pentru a mări întreaga pagină din browser, folosiți meniul browserului.
- {{key:Mod+9}} sare în unele browsere la ultima filă înainte ca MarkupCraft să-l vadă. Dacă se întâmplă, folosiți {{ui:Potrivire lățime}} de sub foaie.
- {{key:Esc}} în ecran complet iese și din ecranul complet.

## Când o tastă nu face nimic

- **Scrieți într-o casetă.** Mai întâi faceți clic pe foaie. (Un clic cu un instrument de desenare desenează; apăsați apoi {{key:Esc}} sau folosiți {{key:Mod+Z}}.)
- **Este deschisă o casetă de dialog.** Tastele merg la casetă până se închide.
- **Ați făcut clic pe un buton din bara de instrumente** și tastele cu săgeți sau {{key:Space}} acționează asupra acelui buton. Mutați indicatorul pe foaie și folosiți rotița sau butonul din mijloc ori apăsați o literă de instrument în loc să faceți clic pe butoane.

## Unde se află Mutare

Nu există o comandă Mutare: selectați o adnotare și trageți-o ({{key:Shift}} păstrează pașii de 45°). Un pin se mută cu {{ui:Mutare pin}}, iar o pagină cu {{ui:Mutare pagină mai devreme}} sau {{ui:Mutare pagină mai târziu}}.

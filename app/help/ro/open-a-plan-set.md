---
title: Deschiderea unui set de planuri și navigarea între foi
summary: Deschideți un PDF sau mai multe, sau porniți cu pagini goale, găsiți foile după număr sau nume, faceți zoom și pan, și redenumiți o foaie când fișierul o denumește greșit.
keywords: deschidere, nou, pagină goală, foaie goală, schiță, grilă, fără titlu, set de planuri, foi, pagini, miniaturi, etichete de pagină, număr de foaie, cartuș, redenumire, navigare, zoom, pan, potrivire, căutare în foi
from: 1e7f4d50
---

## Deschideți setul

1. Alegeți {{ui:Deschidere}} în bara de instrumente sau apăsați {{key:Mod+O}}.
2. În selectorul de fișiere, selectați toate PDF-urile setului ({{pick:mac=țineți ⌘ apăsat și faceți clic pe fiecare fișier|windows linux=țineți Ctrl apăsat și faceți clic pe fiecare fișier}}, sau selectați un interval cu Shift), apoi confirmați.
   Sau trageți fișierele din {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} în zona foii. Apare „Trageți PDF-urile pentru a le deschide” cât timp trageți.
3. Așteptați cât timp bara de stare spune „Se deschide <file>…”. Pentru fișierele mari, numără: „(10 din 60 de foi)”.

Rezultat: lista {{ui:Foi}} arată fiecare pagină din fiecare fișier, în ordinea în care le-ați deschis, iar bara de stare spune ceva de genul „Au fost deschise 3 fișiere (42 de foi în set).” Dacă fișierele aveau deja comentarii, adaugă câte au fost citite.

Pentru a adăuga mai târziu alte fișiere în set, deschideți-le în același fel. Ele se adaugă la sfârșitul listei.

## Începeți cu pagini goale

Ca să schițați sau să luați notițe fără un desen, creați pagini goale în loc să deschideți un PDF:

1. Alegeți {{ui:Nou}} în bara de instrumente sau {{ui:Începeți cu o pagină goală}} pe ecranul de start, ori apăsați {{key:Mod+N}} acolo unde browserul o permite (aplicația desktop și Studio o permit mereu).
2. Alegeți {{ui:Format hârtie}}: Letter, Tabloid sau ANSI B, ARCH D, ARCH E, A4, A3 sau A1, și {{ui:Portret}} sau {{ui:Peisaj}}.
3. Alegeți o {{ui:Grilă}}: {{ui:Fără}}, {{ui:Puncte}} sau {{ui:Pătrate}}. Grila are câte o linie la fiecare 1/4 in, cu o linie mai groasă la fiecare inch pe hârtie în inch, și câte o linie la fiecare 5 mm, cu o linie mai groasă la fiecare 10 mm pe hârtie metrică. Ea se tipărește pe pagină.
4. Scrieți câte {{ui:Pagini}} doriți, de la 1 la 20, apoi alegeți {{ui:Creare}}.

Rezultat: un PDF nou, numit „Untitled-1.pdf” (apoi „Untitled-2.pdf” și așa mai departe), se deschide ca orice alt fișier, creat aici, pe acest calculator. Toate instrumentele funcționează pe el, iar {{ui:Salvare}} descarcă „Untitled-1 (marked up).pdf”. MarkupCraft reține alegerile făcute pentru data următoare.

Paginile nu au scară: bara de stare spune „Necalibrat”. Grila nu este o scară. Ca să măsurați, calibrați foaia sau alegeți mai întâi o scară; vedeți [Calibrare și măsurare](topic:calibrate-and-measure).

Ca să adăugați o pagină la un set gol, deschideți una dintre foile lui și alegeți {{ui:Adăugare pagină goală}} sub lista {{ui:Foi}}. Pagina nouă are același format și aceeași grilă și se adaugă la sfârșit. Ca orice modificare de pagină, nu poate fi anulată; vedeți [Imprimare și modificarea paginilor](topic:pages-and-printing).

## Cum primesc foile numele

MarkupCraft denumește fiecare foaie „<număr foaie> — <titlu>”, de exemplu „A-101 — Plan de etaj”, pornind de la primul dintre acestea pe care îl găsește:

1. Un nume pe care l-ați scris cu {{ui:Redenumire foaie}} (mai jos).
2. Etichetele de pagină ale PDF-ului, când persoana care l-a făcut le-a setat (de exemplu „A-101”).
3. Cartușul: MarkupCraft citește textul paginii și caută ceva care arată ca un număr de foaie (A-101, A1.01, M-201A, KA1-1), preferând colțul din dreapta jos, banda din dreapta și banda de jos, și ia cel mai mare text din apropiere ca titlu.
4. În rest, numele fișierului și pagina: „Plans — pagina 3”.

Ca să vedeți care a fost folosit, apăsați {{key:Esc}} până nu este nimic selectat și {{ui:Selectare}} este activ, apoi uitați-vă în {{ui:Proprietăți}}: „Citit din” spune „Eticheta paginii”, „Cartușul”, „Numele fișierului” sau „Introdus manual”.

:::note
Foile scanate și PDF-urile la care literele au fost exportate ca linii nu au text de citit. Ele sunt denumite după fișier și pagină până le redenumiți. MarkupCraft nu poate citi încă text din imagini.
:::

## Treceți de la o foaie la alta

- Faceți clic pe o foaie din {{ui:Foi}}.
- Apăsați {{key:PageDown}} pentru foaia următoare și {{key:PageUp}} pentru cea anterioară, sau folosiți săgețile din bara de sub foaie.
- Scrieți în {{ui:Căutare în foi}}: o parte dintr-un număr („A-2”), un cuvânt din titlu („acoperiș”) sau un nume de fișier. Lista se restrânge pe măsură ce scrieți („4 din 42”). Apăsați {{key:Enter}} ca să deschideți prima potrivire. Goliți câmpul ca să vedeți din nou toate foile.

Fiecare foaie își păstrează propriul zoom și propria poziție până când închideți setul.

## Zoom și pan

:::mouse
- **Zoom:** rotiți rotița peste foaie. Zoom-ul se face în jurul indicatorului. Sau apăsați {{key:Plus}} și {{key:Minus}} (și cu {{key:Mod}}), ori folosiți butoanele de zoom. Scrieți un procent exact în caseta de zoom.
- **Potrivire:** {{ui:Potrivire pagină}} ({{key:Mod+0}}) arată toată foaia; {{ui:Potrivire lățime}} ({{key:Mod+9}}) umple lățimea.
- **Pan:** trageți cu butonul din mijloc (rotița) sau cu butonul din dreapta, ori țineți apăsat {{key:Space}} și trageți, sau alegeți {{ui:Pan}} ({{key:H}}) și trageți. Fără nimic selectat, și tastele săgeți mută foaia.
:::

:::mac mouse
Pe trackpad-ul Mac, derularea cu două degete face zoom (nu derulează foaia). Ca să faceți pan, țineți apăsat {{key:Space}} și trageți cu un deget, sau treceți la {{ui:Pan}} cu {{key:H}}. Un gest de ciupire face zoom în Chrome, Edge și Firefox.
:::

:::touch
- **Zoom și pan:** puneți două degete pe foaie. Depărtați-le sau apropiați-le ca să faceți zoom în jurul punctului dintre ele, și mutați-le împreună ca să faceți pan. Ambele se întâmplă deodată.
- **Pan cu un deget:** alegeți mai întâi {{ui:Pan}}. Cu orice alt instrument, un deget desenează sau selectează.
- {{ui:Potrivire pagină}} și {{ui:Potrivire lățime}} sunt în bara de sub foaie.
:::

Puteți micșora mult sub întreaga foaie și mări până la 6400%. Foaia se redesenează clar la scurt timp după ce încetați să o mutați.

## Marcaje

{{ui:Marcaje}}, în partea de sus a panoului {{ui:Foi}}, arată marcajele (structura) PDF-ului căruia îi aparține foaia deschisă. Alegeți unul ca să mergeți la pagina lui. Creionul redenumește un marcaj, iar crucea îl elimină. {{ui:Creare din foi}} face câte un marcaj pentru fiecare foaie, denumit cum apare în lista de foi (numărul foii și titlul), iar {{ui:Adăugare pentru această foaie}} adaugă unul pentru foaia pe care sunteți. Modificările fac parte din lucrul nesalvat al fișierului: {{ui:Salvare}} le scrie în copie, unde le arată orice vizualizator PDF.

## Rotiți vizualizarea

Cele două butoane de rotire din dreapta barei de sub foaie rotesc vizualizarea cu un sfert de tură într-o parte sau alta, pentru o foaie desenată culcat. Se rotește doar vizualizarea: PDF-ul și adnotările rămân cum sunt, iar foaia următoare se deschide cum este PDF-ul ei (fiecare foaie își reține propria rotire cât timp setul este deschis). Textul adăugat pe o vizualizare rotită se citește drept, așa cum îl vedeți. Ca să rotiți pagina în PDF-ul salvat, folosiți {{ui:Pagini}}, apoi {{ui:Rotire pagină în sens orar}}; vedeți [Imprimare și modificarea paginilor](topic:pages-and-printing).

## Redenumiți o foaie

Când numele unei foi este greșit sau lipsește:

1. Afișați foaia.
2. Apăsați {{key:Esc}} până nu este nimic selectat și instrumentul {{ui:Selectare}} este activ. {{ui:Proprietăți}} arată acum foaia.
3. Alegeți {{ui:Redenumire foaie}}.
4. Scrieți {{ui:Număr foaie}} și {{ui:Titlu}}, apoi alegeți {{ui:Salvare}}.

Rezultat: lista de foi, bara de sub foaie și lista de adnotări folosesc noul nume, iar „Citit din” spune „Introdus manual”. Redenumirea se poate anula cu {{key:Mod+Z}}.

Ca să reveniți la ce spune fișierul, deschideți din nou {{ui:Redenumire foaie}}, goliți ambele câmpuri și alegeți {{ui:Salvare}}.

La salvare, un număr de foaie scris devine eticheta paginii în PDF, astfel încât alți vizualizatori PDF arată „A-101” în caseta paginii. Dacă dați un număr unei pagini din fișier, fiecare pagină a fișierului primește o etichetă în copie (numărul scris, altfel eticheta veche, altfel numărul paginii). Un titlu scris este păstrat pentru MarkupCraft, dar alți vizualizatori nu-l arată.

## Duceți PDF-ul în TakeoffCraft sau aduceți-l aici

Când TakeoffCraft este deschis în același loc (laboratorul, Try sau aplicațiile online), bara de sub foaie are {{ui:Deschidere în TakeoffCraft}}. Ea deschide PDF-ul foii în TakeoffCraft, într-o filă nouă, așa cum a fost deschis aici, ca să măsurați cantități pe el. Adnotările rămân aici; salvați-le ca de obicei.

Butonul {{ui:MarkupCraft}} din TakeoffCraft face același lucru în sens invers: PDF-ul se deschide aici, ca și cum ați fi ales {{ui:Deschidere}}. Dacă browserul blochează fila nouă, permiteți ferestrele pop-up pentru acest site și alegeți butonul din nou.

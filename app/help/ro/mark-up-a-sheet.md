---
title: Adnotarea unei foi
summary: Desenați nori de revizuire, indicatoare, casete de text, săgeți, forme, trăsături cu creionul și evidențieri și setați culoarea și linia înainte sau după.
keywords: adnotare, redline, nor, nor de revizuire, indicator, linie de indicație, casetă de text, săgeată, linie, dreptunghi, elipsă, cerc, polilinie, poligon, creion, desen liber, cerneală, evidențiator, culoare, grosime de linie
from: 9d6de0ac
---

Fiecare instrument funcționează la fel: alegeți-l, desenați pe foaie, iar noua adnotare este selectată ca s-o vedeți în {{ui:Proprietăți}}. Instrumentul rămâne activ pentru următoarea. Bara de stare arată mereu ce așteaptă instrumentul.

:::touch
Pe un ecran tactil, folosiți un deget pentru a desena. Al doilea deget anulează ce a început primul și face în schimb ciupire sau pan, așa că nu lăsați niciodată o urmă din greșeală când măriți. Mai multe în [Revizuirea pe iPad sau pe ecran tactil](topic:review-on-a-tablet).
:::

## Nori de revizuire

**Nor în casetă:** alegeți {{ui:Nor}} ({{key:C}}) și trageți o casetă. Țineți apăsat {{key:Shift}} ca s-o faceți pătrată.

**Nor liber** în jurul unei forme neregulate:

1. Alegeți {{ui:Nor liber}} ({{key:Shift+C}}).
2. Faceți clic pe fiecare colț al zonei.
3. Încheiați cu dublu clic, {{key:Enter}} sau clic dreapta. Pe ecran tactil, faceți atingere dublă.

Cât timp faceți clic pe puncte, {{key:Backspace}} elimină ultimul punct, iar {{key:Esc}} anulează întreaga formă. Țineți apăsat {{key:Shift}} ca următoarea latură să fie un multiplu de 45°. Un nor liber are nevoie de cel puțin trei puncte.

Arcurile norului fac mereu umflătură spre exterior, iar mărimea lor urmează grosimea liniei: o linie mai groasă dă arce mai mari.

## Indicatoare

Un indicator este o casetă de text cu o linie de indicație care arată spre ceva.

1. Alegeți {{ui:Indicator}} ({{key:K}}).
2. Apăsați pe punctul pe care vreți să-l indicați și trageți până unde trebuie să fie textul. Eliberați.
   Dacă faceți doar clic fără să trageți, caseta este plasată sus și la dreapta punctului.
3. Scrieți textul. Caseta crește în jos pe măsură ce rândurile se rup.
4. Faceți clic oriunde în afara casetei sau apăsați {{key:Mod+Enter}} pentru a încheia. {{key:Esc}} aruncă indicatorul.

Dacă încheiați fără să scrieți nimic, nu se adaugă niciun indicator („Nimic scris, deci nu a fost adăugat niciun indicator.”).

După ce este desenat, selectați-l ca să mutați caseta, să trageți vârful liniei de indicație sau cotitura sa (cele două mânere romb) ori să redimensionați caseta.

## Casete de text

1. Alegeți {{ui:Text}} ({{key:T}}).
2. Faceți clic unde începe textul (primiți o casetă de lățime rezonabilă) sau trageți o casetă de dimensiunea dorită.
3. Scrieți, apoi faceți clic în afară sau apăsați {{key:Mod+Enter}}.

Textul nu are contur implicit. Ca să-i dați unul, măriți {{ui:Grosime de linie}} din {{ui:Proprietăți}}. Ca să-i dați un fundal, bifați {{ui:Umplere}}.

Pentru a schimba textul mai târziu: cu {{ui:Selectare}} activată, faceți dublu clic pe text sau selectați-l și apăsați {{key:Enter}}, ori alegeți {{ui:Editare pe foaie}} din {{ui:Proprietăți}}. Îl puteți edita și în caseta {{ui:Text}} din {{ui:Proprietăți}}.

## Săgeți și linii

1. Alegeți {{ui:Săgeată}} ({{key:A}}) sau {{ui:Linie}} ({{key:L}}).
2. Trageți de la început până la sfârșit. Sau faceți clic pe început, eliberați și faceți clic pe sfârșit.
3. Țineți apăsat {{key:Shift}} ca s-o mențineți la un multiplu de 45°.

Vârful săgeții se află la capătul unde ați încheiat.

## Dreptunghiuri, elipse, polilinii și poligoane

- {{ui:Dreptunghi}} ({{key:R}}) și {{ui:Elipsă}} ({{key:E}}): trageți o casetă. {{key:Shift}} face un pătrat sau un cerc. Un clic fără tragere nu desenează nimic, iar bara de stare cere să trageți.
- {{ui:Polilinie}} ({{key:Y}}) și {{ui:Poligon}} ({{key:G}}): faceți clic pe puncte; încheiați cu dublu clic, {{key:Enter}} sau clic dreapta (atingere dublă pe ecran tactil). {{key:Backspace}} elimină ultimul punct. Un poligon se închide singur și are nevoie de trei puncte; o polilinie are nevoie de două.

## Creion și evidențiator

- {{ui:Creion}} ({{key:P}}): trageți pentru a desena liber. Trăsătura este puțin netezită când eliberați.
- {{ui:Evidențiere}} ({{key:I}}): la fel, cu o trăsătură largă, galbenă și transparentă, care colorează desenul de sub ea în loc să-l acopere.
- Țineți apăsat {{key:Shift}} în timp ce desenați ca să obțineți o singură trăsătură dreaptă de la punctul de început.

Evidențiatorul este o trăsătură liberă. Nu se fixează pe textul din PDF.

## Culoare, linie și umplere

Două moduri:

- **Înainte de desen:** alegeți instrumentul. Fără nimic selectat, {{ui:Proprietăți}} arată setările pentru „<tool>”: {{ui:Culoare}}, {{ui:Grosime de linie}} (în puncte), {{ui:Umplere}} și {{ui:Opacitate umplere}} pentru forme închise, {{ui:Opacitate}} și {{ui:Dimensiune text}} pentru text. Fiecare adnotare nouă de acel fel le folosește, iar MarkupCraft le reține în acest browser.
- **După desen:** selectați una sau mai multe adnotări și schimbați aceleași comenzi din secțiunea „Stil”. Cu mai multe selectate, modificarea se aplică tuturor dintr-un singur pas.

Valorile implicite: adnotările sunt roșii, evidențiatorul este galben, măsurătorile sunt albastre, numărările sunt portocalii, iar ștampilele sunt colorate după înțeles.

Stilurile salvate pe care le reutilizați zilnic aparțin cutiei de instrumente: vezi [Cutia de instrumente](topic:tool-chest).

## Subiect și comentariu

Fiecare adnotare are și un {{ui:Subiect}} (o etichetă scurtă, precum „Nor” sau „RFI”, afișată în lista de adnotări și în alte vizualizatoare PDF) și un {{ui:Comentariu}} (note mai lungi). Completați-le în {{ui:Proprietăți}}. Pentru o conversație despre o adnotare, folosiți răspunsurile: vezi [Stări și răspunsuri](topic:statuses-and-replies).

## Mai departe

- [Selectarea, mutarea și modificarea adnotărilor](topic:select-and-edit)
- [Ștampile și note](topic:stamps-and-notes)
- [Fiecare tip de adnotare](topic:markup-types)

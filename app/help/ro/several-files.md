---
title: Lucrul cu mai multe fișiere deodată
summary: Deschideți multe PDF-uri ca un singur set, căutați foi în toate fișierele, copiați adnotări între ele și salvați copia fiecărui fișier.
keywords: mai multe fișiere, PDF-uri multiple, set de planșe, set, lot, multe fișiere, combinare, discipline, arhitectural, structural, mecanic, salvare toate, închidere
from: f59354ae
---

Un set de planșe vine adesea ca un PDF pentru fiecare disciplină sau un PDF pentru fiecare foaie. MarkupCraft tratează tot ce deschideți ca **un singur set**.

## Deschidere împreună

Selectați toate PDF-urile în selectorul de fișiere deodată, sau trageți-le pe toate în zona foilor. Pentru a adăuga altele mai târziu, deschideți-le în același fel; se adaugă la sfârșitul listei {{ui:Foi}}, în ordinea deschiderii.

Rezultat: „Deschise 6 fișiere (84 de foi în set).” Fiecare pagină este o foaie. Foile cu număr de foaie afișează „Foaia A-101” sub nume; celelalte afișează fișierul și pagina.

Nu există un fișier „set” salvat: data viitoare, deschideți din nou aceleași PDF-uri (copiile „(marked up)”, dacă ați salvat).

## În tot setul

- **Găsirea unei foi:** {{ui:Căutare în foi}} caută în numerele foilor, numele foilor și numele fișierelor din fiecare fișier. {{key:PageUp}} și {{key:PageDown}} parcurg toate foile tuturor fișierelor, în ordine.
- **Lista de adnotări:** fila {{ui:Adnotări}} listează adnotările din fiecare fișier. Filtrați după {{ui:Foaie}} ca s-o restrângeți. CSV-ul are o coloană Fișier.
- **Lista de remedieri:** o singură numerotare pentru tot setul.
- **Comparare:** foaia veche și cea nouă pot veni din fișiere diferite.
- **Copiere și lipire:** {{key:Mod+C}} pe o foaie și {{key:Mod+V}} pe alta, în orice fișier. Copia ajunge în același loc de pe pagină, ușor deplasată.

## Salvare

Alegeți {{ui:Salvare}}. Cu mai multe fișiere deschise, MarkupCraft întreabă:

- {{ui:Acest fișier}}: o copie cu adnotări a fișierului foii pe care vă aflați.
- {{ui:Fiecare fișier modificat}}: o copie a fiecărui fișier cu modificări nesalvate. Fiecare se descarcă separat, ca „<numele fișierului> (marked up).pdf”.
- {{ui:Anulare}}

:::chromium
Prima dată când salvați mai multe fișiere deodată, Chrome și Edge pot întreba dacă acest site are voie să descarce mai multe fișiere. Alegeți {{ui:Permite}}; altfel ajunge doar prima copie.
:::

:::safari
Safari poate întreba o dată pentru fiecare fișier. Pe iPad, fiecare copie merge în aplicația Fișiere.
:::

Un fișier ale cărui adnotări au fost salvate nu mai este considerat modificat; celelalte rămân.

Exporturile CSV, BCF și lista de remedieri poartă numele **primului** fișier pe care l-ați deschis.

## Închidere

{{ui:Închidere}} închide tot setul; încă nu există o cale de a închide un singur fișier. Dacă ceva nu este salvat, întreabă:

- {{ui:Anulare}}: nu se întâmplă nimic.
- {{ui:Închidere fără salvare}}: adnotările nesalvate se pierd.
- {{ui:Salvare copii mai întâi}}: salvează fiecare fișier modificat, apoi închide.

Închiderea șterge și istoricul de anulare.

## Seturi mari

- Textul fiecărei pagini este citit la deschidere pentru a găsi numerele foilor, deci un set de 100 de foi durează. Bara de stare numără foile pe măsură ce avansează.
- Imaginile foilor din listă sunt desenate pe măsură ce derulați până la ele.
- Fiecare PDF deschis este ținut în memoria filei browserului. Dacă fila încetinește, închideți alte file grele sau revizuiți o disciplină pe rând.
- Deschiderea aceluiași fișier de două ori vă dă două copii ale foilor sale. Dacă se întâmplă, alegeți {{ui:Închidere}} și deschideți setul din nou.

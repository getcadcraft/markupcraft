---
title: Ștampile și note adezive
summary: Ștampilați o foaie Aprobat, Revizuire și retrimitere sau cu textul dvs., și lăsați note adezive care se deschid ca comentarii pop-up.
keywords: ștampilă, imagine, poză, lipire imagine, captură de ecran, clipboard, logo, ștampilă foto, semnătură, semnare, aprobat, aprobat cu observații, revizuire și retrimitere, respins, verificat, anulat, ștampilă personalizată, notă adezivă, notă, comentariu, pop-up
from: 76026792
---

## Ștampilarea unei foi

1. Alegeți {{ui:Stamp}} ({{key:S}}).
2. În {{ui:Properties}} din dreapta, alegeți ștampila de sub {{ui:Stamp}}:
   - Aprobat
   - Aprobat cu observații
   - Revizuire și retrimitere
   - Respins
   - Verificat
   - Anulat
   - Text personalizat… (tastați până la 60 de caractere în caseta care apare, apoi apăsați {{key:Enter}} sau faceți clic în altă parte)
3. Faceți clic pe foaie acolo unde trebuie să fie ștampila. Sau trageți o casetă pentru a alege dimensiunea.

Rezultat: o ștampilă încadrată, cu majuscule, și o a doua linie „De <numele dvs.>, <data>”. O ștampilă plasată cu clic este dimensionată pentru ecran la zoomul dvs., păstrată între o jumătate de inci și un inci și un sfert înălțime pe foaia tipărită.

Ștampila pe care ați ales-o rămâne selectată pentru următoarea, chiar și după ce redeschideți MarkupCraft în acest browser.

**Culorile urmează sensul:** ștampilele Aprobat sunt verzi, Revizuire și retrimitere portocalii, Respins și Anulat roșii, Verificat albastre, iar ștampilele personalizate mov. Dacă alegeți altă culoare în {{ui:Properties}}, culoarea respectivă se păstrează.

### Schimbarea unei ștampile ulterior

Selectați-o și alegeți altă ștampilă în {{ui:Properties}}. Dacă mai avea culoarea automată, culoarea se schimbă în funcție de sens.

Numele și data de pe ștampilă sunt autorul ștampilei și ziua în care a fost făcută. Ele nu se schimbă când o editați, iar autorul unei ștampile nu poate fi schimbat. Pentru a ștampila în numele altcuiva, acea persoană își setează propriul nume și o ștampilează singură.

:::note
Data de pe o ștampilă este data în Timpul Universal Coordonat (UTC). Seara târziu în America, sau dimineața devreme în Asia și Australia, poate afișa ziua următoare sau cea precedentă față de ceasul dvs. Ora creării din {{ui:Properties}} este în fusul dvs. orar.
:::

### Ștampile folosite des

Cutia de instrumente conține un instrument de ștampilă „Aprobat cu observații”, iar orice ștampilă (textul și culoarea ei) o puteți salva ca instrument propriu. Consultați [Cutia de instrumente](topic:tool-chest).

Ștampilele cu câmpuri completabile (data primirii, numărul proiectului) sunt încă nerealizate.

## Ștampilarea unei imagini sau a semnăturii

Lista de ștampile din {{ui:Properties}} se termină cu două alegeri în plus:

- {{ui:Picture…}} cere un fișier PNG, JPEG sau SVG de pe acest calculator, sau o pagină dintr-un PDF, cum ar fi o ștampilă a companiei sau un logo. Imaginile mari se micșorează la 1600 de pixeli pe latura lor mai lungă; un SVG sau o pagină PDF devine o imagine de această dimensiune.
- {{ui:My signature…}} deschide o casetă de semnătură: semnați cu mouse-ul, cu un creion sau cu degetul și alegeți {{ui:Use this signature}}. {{ui:Clear}} o ia de la capăt. {{ui:Use a picture of a signature…}} folosește în schimb o scanare sau o fotografie a semnăturii dvs.: MarkupCraft face hârtia albă transparentă și decupează imaginea în jurul cernelii (pentru un PNG întreabă mai întâi).

Apoi faceți clic pe foaie pentru a plasa imaginea (o imagine de 3 inci lățime, o semnătură de 2 inci), sau trageți o casetă pentru a o încadra; proporțiile se păstrează. Redimensionați-o cu mânerele sale ca orice adnotare ({{key:Shift}} păstrează proporțiile).

Ultima imagine rămâne păstrată în acest browser, deci este gata data viitoare; {{ui:Choose another picture…}} o înlocuiește. Fiecare semnătură desenată sau încărcată este păstrată în {{ui:Your signatures}} (până la opt, cele mai noi primele): faceți clic pe una pentru a o folosi, sau pe × pentru a o elimina. Consultați [Ce rămâne în acest browser](topic:browser-storage).

În PDF-ul salvat, o imagine este un comentariu de tip ștampilă care afișează imaginea, astfel încât orice vizualizator PDF o afișează și o tipărește. O semnătură desenată aici este o imagine a semnăturii dvs., nu o semnătură digitală certificată.

## Lipirea unei imagini din clipboard

Copiați o imagine dintr-un alt program sau faceți o captură de ecran în clipboard, apoi apăsați {{key:Mod+V}} peste foaie. Imaginea ajunge unde se află cursorul, cel mult 3 inci lățime sau înălțime, cu proporțiile păstrate, ca adnotare-imagine pe care o puteți muta și redimensiona. În PDF-ul salvat este un comentariu de tip ștampilă care afișează imaginea, ca imaginile de mai sus.

{{ui:More}} › {{ui:Paste a picture}} în grupul {{ui:Edit}} face același lucru din meniu; browserul poate întreba mai întâi. Când clipboardul nu conține o imagine, {{key:Mod+V}} lipește adnotările copiate, ca înainte.

## Inserarea unei imagini dintr-un fișier

Alegeți {{ui:More}} › {{ui:Insert a picture from a file…}} în grupul {{ui:Edit}} (sau {{ui:Insert a picture here…}} din meniul clic-dreapta) și selectați un fișier PNG, JPEG sau SVG, ori un PDF (un PDF cu mai multe pagini cere să alegeți care). Puteți trage și un fișier PNG, JPEG sau SVG pe foaie: ajunge acolo unde îl lăsați. Imaginea este o adnotare, de cel mult 3 inci lățime sau înălțime: mutați-o și redimensionați-o ca orice altă adnotare.

Pentru a face o imagine parte din pagină, bifați {{ui:Flatten into the page when saved}} în {{ui:Properties}}. Consultați [Salvarea unei copii aplatizate](topic:flatten).

## Crearea unei ștampile dintr-o selecție

Selectați adnotări (sau conținutul paginii cu instrumentul {{ui:Content}}) și alegeți {{ui:Save selection as a stamp…}} din {{ui:More}}, din meniul clic-dreapta sau {{ui:Save as a stamp…}} din {{ui:Properties}}. Dați-i un nume. Ștampila ajunge în cutia de instrumente: faceți clic pe ea acolo, apoi faceți clic pe orice foaie pentru a plasa tot ce ați selectat, împreună, centrat acolo unde faceți clic. Consultați [Cutia de instrumente](topic:tool-chest).

## Note adezive

1. Alegeți {{ui:Note}} ({{key:N}}).
2. Faceți clic unde trebuie să fie nota. Apare o mică pictogramă de notă, cu o casetă alături.
3. Tastați nota. Faceți clic în afară sau apăsați {{key:Mod+Enter}} pentru a o păstra; {{key:Esc}} o aruncă.

Spre deosebire de text și indicatoare, o notă se păstrează chiar dacă nu tastați nimic, astfel încât puteți plasa pictograma acum și scrie mai târziu.

- Cuvintele notei sunt câmpul {{ui:Note}} din {{ui:Properties}}. Faceți dublu clic pe pictogramă (sau selectați-o și apăsați {{key:Enter}}) pentru a le edita pe foaie.
- Pe foaie vedeți doar pictograma. Alte vizualizatoare PDF afișează o notă adezivă standard, care se deschide la text când faceți clic.
- Schimbați culoarea pictogramei cu {{ui:Color}} din {{ui:Properties}}.

Pentru discuții dus-întors, folosiți în schimb firul de răspunsuri de pe orice adnotare: consultați [Stări și răspunsuri](topic:statuses-and-replies).

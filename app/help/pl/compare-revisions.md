---
title: Porównanie dwóch rewizji
summary: Nałóż stare i nowe wydanie arkusza na siebie w dwóch kolorach, wyrównaj je przez dwa punkty i obrysuj to, co się zmieniło.
keywords: porównaj, nakładka, nakładanie stron, rewizja, różnica, różnice, zmiany, stary nowy, wyrównaj, backcheck, wydanie, biuletyn
from: 62f5d1c5
---

Porównaj nakłada dwa arkusze jeden na drugi. Linie tylko na starym arkuszu pokazują się na czerwono, linie tylko na nowym na niebiesko, a linie na obu na stonowanym szarym. Kolory są podpisane w legendzie pod arkuszem: „Tylko na starym arkuszu”, „Tylko na nowym arkuszu”, „Na obu”.

## Porównanie dwóch arkuszy

1. Otwórz oba wydania. Mogą to być strony tego samego PDF albo różnych PDF; otwórz je razem jako jeden zestaw (zob. [Praca z kilkoma plikami naraz](topic:several-files)).
2. Wybierz kartę {{ui:Porównaj}} po prawej.
3. Wybierz {{ui:Stary arkusz}} i {{ui:Nowy arkusz}}. Nowy arkusz zaczyna jako ten, na którym jesteś. Gdy otwartych jest kilka plików, przy nazwie każdego arkusza pokazana jest nazwa jego pliku.
4. Wybierz {{ui:Porównaj}}.

Wynik: MarkupCraft pokazuje nowy arkusz z domieszanym starym, pojawia się legenda, a karta mówi: „Porównywanie <old> (stary) z <new> (nowy). Adnotacje na nowym arkuszu pozostają edytowalne.”

## Przejście między starym a nowym

Przeciągnij suwak {{ui:Stary i nowy}}. Całkiem w lewo pokazuje tylko stary arkusz, całkiem w prawo tylko nowy, w środku oba. Przesuwanie tam i z powrotem jest często najszybszym sposobem, by zobaczyć małą zmianę.

## Wyrównanie arkuszy

Jeśli dwa wydania wydrukowano z innym marginesem, rozmiarem lub obrotem, wszystko wygląda na zmienione. Popraw to:

**Przez dwa punkty (najlepiej):**

1. Wybierz {{ui:Wyrównaj wg dwóch punktów}}. Widok pokazuje tylko stary arkusz.
2. Kliknij wyraźny element, który znajdziesz na obu arkuszach, na przykład przecięcie siatki słupów. Karta liczy kroki („1 z 4”).
3. Kliknij drugi element, daleko od pierwszego, na przykład przeciwległy narożnik siatki.
4. Widok przełącza się na nowy arkusz. Kliknij ponownie pierwszy element.
5. Kliknij ponownie drugi element.

Wynik: „Wyrównano: stary arkusz przeskalowany do 100.00%, obrócony o 0.00°. Dopasuj przesunięciem.” Stary arkusz jest przesunięty, przeskalowany i obrócony, by pasował. {{key:Esc}} anuluje w trakcie wskazywania. Powiększ każdy element przed kliknięciem, by uzyskać precyzyjne dopasowanie.

**Przesunięciami:** użyj czterech przycisków strzałek pod „Wyrównaj”, aby przesunąć stary arkusz. Wybierz krok (0.25, 1, 5 lub 20 pt; 72 pt to jeden cal na papierze). Karta podaje, o ile się przesunął.

{{ui:Resetuj}} usuwa wyrównanie i przesunięcia.

## Tylko zmienione linie

Pod przyciskami wyrównania wybierz {{ui:Zmienione linie}} zamiast {{ui:Nakładka obrazu}}. MarkupCraft porówna wtedy same linie obu arkuszy, a nie ich obrazy: nowy arkusz pokazuje się taki, jaki jest, z liniami tylko na starym arkuszu na czerwono i tylko na nowym na niebiesko. Linia, która tylko się skróciła, pokazuje tylko brakującą część. Najpierw wyrównaj arkusze (zob. wyżej): porównanie korzysta z wyrównania, więc arkusz, który tylko przesunięto, nie pokazuje zmian. Wiersz stanu mówi, jak bardzo się zmieniło.

Działa to dla PDF wydrukowanych z CAD, gdzie rysunek składa się z linii. Zeskanowane arkusze nie mają linii do porównania: dla nich użyj nakładki obrazu. Tekst złożony czcionką (nie narysowany jako kreski) nie jest porównywany.

## Oznaczanie zmian

Podczas porównywania jesteś na nowym arkuszu i działają wszystkie narzędzia. Rysuj chmury wokół zmian, gdy je znajdziesz; należą do nowego arkusza i zostają po zakończeniu porównywania.

{{ui:Obrysuj zmiany}} robi to za ciebie: grupuje zmienione linie leżące blisko siebie i rysuje chmurę rewizji wokół każdej grupy na nowym arkuszu, z komentarzem „Zmienione od <old sheet>”. Jedno {{key:Mod+Z}} usuwa je wszystkie; usuń te, których nie potrzebujesz.

## Porównanie całego zestawu

Gdy nowe wydanie przychodzi jako osobny PDF, otwórz oba PDF i otwórz {{ui:Porównaj dwa zestawy}} w karcie {{ui:Porównaj}}. Wybierz stary plik i nowy plik, potem wybierz {{ui:Porównaj zestawy}}. Arkusze są parowane po numerze (jak w [poprawianiu arkuszy](topic:slip-sheet-a-revised-set)), porównywane po liniach i wymieniane od najbardziej zmienionego. Wybierz arkusz z listy, by porównać tę parę przez {{ui:Zmienione linie}}.

{{ui:Obrysuj wszystkie zmiany}} obrysowuje każdą grupę zmienionych linii na każdym zmienionym arkuszu, jednym krokiem, który można cofnąć. Porównanie zestawu nie wyrównuje najpierw arkuszy, więc arkusz przesunięty na stronie pokazuje się jako zmieniony: porównaj tę parę osobno i użyj {{ui:Wyrównaj wg dwóch punktów}}.

## Zakończenie porównywania

Wybierz {{ui:Zakończ porównywanie}} albo przejdź do innego arkusza. Wyrównanie jest pamiętane dla tej samej pary arkuszy, aż zamkniesz zestaw.

## Warto wiedzieć

- Porównanie działa na tym, co narysowano, piksel po pikselu. Nie wie, że linia się przesunęła; pokazuje starą pozycję w jednym kolorze, a nową w drugim.
- Tekst, który został przełamany inaczej, zmieniona data w tabliczce rysunkowej lub inny styl wydruku też pojawiają się jako zmiany.
- Zeskanowany arkusz porównany z wydrukowanym jest szumny: skanowanie rozmywa i przesuwa linie.
- Porównywanie tekstu zapisanego czcionką oraz lista zmian nie są jeszcze gotowe.

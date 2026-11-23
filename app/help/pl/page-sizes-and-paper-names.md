---
title: Rozmiary stron i nazwy papieru
summary: Sprawdź rozmiar każdej strony PDF w milimetrach i calach oraz jej nazwę papieru (serie A, B i C, ANSI, ARCH), a w mieszanym zestawie pogrupuj strony według rozmiaru, aby znaleźć te nietypowe.
keywords: rozmiar strony, rozmiar papieru, nazwa papieru, a0, a1, a2, a3, a4, seria b, seria c, ansi, arch, architektoniczny, mm, cale, rozmiar niestandardowy, według rozmiaru, nietypowy rozmiar, mieszany zestaw, sprawdź pdf, klient, problem, mediabox, cropbox, obrót
from: 08e1354f
---

Zanim zestaw trafi do klienta, sprawdź, czy każdy arkusz ma właściwy rozmiar. {{ui:MarkupCraft}} odczytuje rozmiar każdej strony z samego PDF i nazywa papier.

## Co zrobisz

Sprawdź rozmiar jednego arkusza, a następnie pogrupuj cały zestaw według rozmiaru.

## Kroki

1. Otwórz PDF-y ({{ui:Otwórz}}), a następnie naciskaj {{key:Esc}}, aż nic nie będzie zaznaczone, i upewnij się, że {{ui:Zaznacz}} jest włączone.
2. Spójrz na {{ui:Właściwości}}. {{ui:Papier}} podaje nazwę i kierunek, na przykład „A4, pionowo”. {{ui:Rozmiar}} podaje milimetry i cale.
3. Każdy wiersz listy {{ui:Arkusze}} ma wiersz z rozmiarem pod nazwą arkusza.
4. Wybierz {{ui:Według rozmiaru}} w nagłówku {{ui:Arkusze}}. Lista grupuje arkusze pod jednym nagłówkiem na rozmiar, zaczynając od największej grupy. Rozmiar, którego jest tylko kilka arkuszy, jest oznaczony jako wyróżniający się.
5. Wybierz {{ui:Według rozmiaru}} ponownie, aby wrócić do kolejności zestawu.

Wynik: strona o innym rozmiarze niż reszta jest łatwa do zauważenia, zanim wyślesz zestaw.

## Jak wybierana jest nazwa

- Rozmiar pochodzi z ramki strony w PDF z uwzględnionym obrotem, więc poziomy A3 nadal jest A3.
- Nazwy to serie A i B (ISO 216), seria C (ISO 269), ANSI od A do E i ARCH od A do E.
- Strona w odległości do 2 mm od nazwanego rozmiaru dostaje tę nazwę. Każda inna strona ma {{ui:niestandardowy}}, a {{ui:Najbliższy nazwany rozmiar}} podaje, który rozmiar jest najbliższy i jak bardzo się różni.
- Cale pochodzą z rzeczywistego rozmiaru strony, więc strona A4 ma 8,26 na 11,69 in.

## W zapisywanych plikach

Skoroszyt zbiorczy ({{ui:Lista adnotacji}}, a następnie skoroszyt) ma kolumnę {{ui:Format papieru}} na karcie {{ui:Wg arkuszy}} oraz osobną kartę {{ui:Rozmiary stron}}. Raport PDF ma wiersz „Rozmiary stron” z liczbą każdego rozmiaru.

:::note
Wartości w calach dla ANSI i ARCH wpisano z opublikowanych tabel i nie porównano ich z drukowanymi normami. Stronę „niestandardową” bliską jednemu z nich traktuj jako sprawę do własnego sprawdzenia.
:::

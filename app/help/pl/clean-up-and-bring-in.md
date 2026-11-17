---
title: Czyszczenie pociągnięć pióra oraz wczytywanie uwag z weryfikacji i postępu na budowie
summary: Zamień odręczne pociągnięcia pióra w linie, okręgi, łuki i prostokąty; wczytaj uwagi z weryfikacji pakietu pozwoleń oraz postęp pomiarów placu budowy jako notatki.
keywords: pióro, odręczne, czyszczenie, wyprostuj, okrąg, linia, prostokąt, łuk, pozwolenie, uwagi z weryfikacji, postęp, dron, skan, pomiar, notatki, csv
from: 547d8e42
---

## Czyszczenie pociągnięć pióra

Rysuj {{ui:Pióro}}, potem otwórz menu {{ui:Więcej}} w grupie Edycja i wybierz {{ui:Wyczyść pociągnięcia pióra}}. Każde zaznaczone pociągnięcie pióra staje się tym, czym miało być: proste pociągnięcie staje się linią (ustawioną idealnie poziomo lub pionowo, gdy było do tego bliskie), pociągnięcie okrągłe elipsą, fragment okręgu łukiem, zamknięte pociągnięcie z czterema narożnikami prostokątem, a wszystko inne polilinią albo wielokątem. Luźne końce pociągnięć narysowanych razem są przyciągane do siebie. Gdy żadne pociągnięcie nie jest zaznaczone, czyszczone jest każde pociągnięcie na otwartym arkuszu. To jeden krok cofania: Ctrl+Z przywraca odręczny rysunek. Kształt jest wyliczany na twoim komputerze według stałych reguł; nic nigdzie nie jest wysyłane.

## Wczytywanie uwag z weryfikacji

Pakiet pozwoleń BimCraft zawiera `01-review-comments.csv`: uwagi, które prawdopodobnie zgłosi recenzent planu, każda z regułą, przepisem, tym, czego wymaga, tym, co stwierdzono, i tym, co zrobić. W karcie {{ui:Zadania}} otwórz {{ui:Uwagi z weryfikacji pozwolenia}} i wybierz {{ui:Wczytaj uwagi (CSV)}}. Każda uwaga staje się notatką o statusie Otwarty w kolumnie wzdłuż lewej strony otwartego arkusza; przeciągnij każdą do miejsca, którego dotyczy. Są wyliczane na podstawie istniejących sprawdzeń, a nie przez recenzenta planu.

## Wczytywanie węzłów HAZOP

Dodatek P&ID CadCraft rysuje węzły studium HAZOP i może je zapisać jako {{ui:Węzły HAZOP}} (plik JSON). Otwórz tutaj wydrukowany arkusz P&ID, przejdź do karty {{ui:Zadania}}, otwórz {{ui:Węzły HAZOP}} i wybierz {{ui:Wczytaj węzły (JSON)}}. Każdy węzeł staje się prostokątem o statusie Otwarty na arkuszu, z numerem, nazwą, urządzeniem i liniami w tekście, a zespół zapisuje swoje ustalenia jako odpowiedzi na nim. Arkusz jest brany jako wydrukowany w pełnym rozmiarze od lewego dolnego rogu rysunku; jeśli wydrukowano go w innej skali, najpierw wpisz tę liczbę w {{ui:Wydrukowano w}} (0.5 dla 1:2). Węzeł leżący poza stroną nie jest rysowany, a panel podaje, ile ich jest. Znaczniki są pomocą w studium: pokazują, gdzie są węzły, a nie oceniają studium.

## Wczytywanie postępu na budowie

CivilCraft prowadzi wiersz dla każdego lotu drona lub skanu placu budowy. W karcie {{ui:Zadania}} otwórz {{ui:Postęp prac na budowie}} i wybierz {{ui:Wczytaj postęp (JSON)}}. Każdy pomiar staje się notatką na otwartym arkuszu, mówiącą, ile zrobiono, co pozostało do wykopu lub nasypu, co wykopano lub nasypano za dużo i co wystaje poza plan. Pomiar, w którym coś wystaje poza plan, pozostaje Otwarty; czysty dostaje status Zaakceptowany.

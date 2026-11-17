---
title: Lista zmian między rewizjami
summary: Porównaj dwa zestawy arkuszy i otrzymaj zwykłą listę, arkusz po arkuszu, miejsc, w których zmienił się rysunek i tekst, gotową do przeczytania, skopiowania lub przekazania asystentowi.
keywords: co się zmieniło, zmiany, lista rewizji, lista porównania, prosta lista, opowiedz, asystent, delta, podsumowanie rewizji
from: bab93d2e
---

Narzędzia porównania pokazują zmiany na arkuszu. Ta funkcja zapisuje je na liście.

1. Otwórz obie rewizje (zobacz [Otwórz zestaw arkuszy](topic:open-a-plan-set)).
2. Otwórz kartę {{ui:Porównaj}}, a następnie {{ui:Porównaj cały zestaw}}.
3. Wybierz wcześniejszy i późniejszy plik, a następnie wybierz {{ui:Wypisz zmiany}}.

Lista zaczyna się od liczby (np. „zmieniło się 2 z 14 dopasowanych arkuszy; 1 nowy; 1 usunięty”), a potem obejmuje każdy zmieniony arkusz, zaczynając od największej zmiany: gdzie na arkuszu się znajduje (lewy górny róg, środek…), jak duża jest, czy dodano linie, usunięto je, czy jedno i drugie, ile adnotacji tam leży oraz które słowa się pojawiły lub zniknęły. Na wyskalowanym arkuszu rozmiar jest podany w jednostkach rzeczywistych, a także w calach na papierze.

Lista mówi, co jest na stronie; nie mówi, co to znaczy. Przesunięcie narysowanej linii może dotyczyć ściany albo odnośnika. Połączony asystent może odczytać listę narzędziem `revisions_changes` i opisać ją słowami, a resztę możesz sprawdzić, patrząc na arkusz. {{ui:Kopiuj listę}} umieszcza ją w schowku, a {{ui:CSV}} zapisuje jeden wiersz na każdą zmianę.

Arkusze są parowane według numeru arkusza, jak w [Oznaczanie zmienionego zestawu arkuszy](topic:slip-sheet-a-revised-set). Zmiany mniejsze niż kilka punktów są pomijane, a tekst będący częścią obrazu (skanu) nie ma słów do porównania.

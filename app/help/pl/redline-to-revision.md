---
title: Wyślij adnotacje do projektanta jako redline
summary: Zapisz otwarte adnotacje jako plik redline dla osoby rysującej zmiany, a następnie wczytaj jej odpowiedzi, aby każda adnotacja pokazywała Zaakceptowana lub Odrzucona.
keywords: redline, rewizja, projektant, akceptuj, odrzuć, odpowiedzi, cc-redline, chmura rewizji, zastosuj adnotacje
from: cb099d04
---

Przegląd to połowa pracy; rysunek nadal musi zostać zmieniony. Plik redline przenosi każdą otwartą adnotację do projektanta, a jego odpowiedzi przenoszą wynik z powrotem.

## Wysyłanie

1. Otwórz kartę {{ui:Zadania}} i otwórz {{ui:Redline do rewizji}}.
2. Wpisz rewizję, do której odnoszą się adnotacje (na przykład B).
3. Wybierz {{ui:Eksportuj plik redline}}.

Powstaje plik `.redline.json` z jedną pozycją na każdą adnotację o statusie Otwarta: jej arkusz, położenie (jako ułamki arkusza, dzięki czemu ponowny wydruk w innym rozmiarze nadal się zgadza, oraz w punktach), jej słowa, autor i wątek oraz zadanie, jeśli je ma. Komentarze tylko do odczytu z innych programów, obrazy i legendy są pomijane.

## Odpowiedzi

Strona projektowa odpowiada na każdą pozycję: Zaakceptowana, Odrzucona lub Wykonana, z notatką, w pliku `.redline-answers.json`. Wybierz {{ui:Wczytaj plik z odpowiedziami…}} i wskaż go: każda adnotacja otrzymuje ten status i notatkę projektanta w swoim wątku, a zadanie, którego adnotacja została zaakceptowana lub wykonana, zostaje zakończone. Jeden krok cofnięcia cofa wszystkie odpowiedzi.

Format pliku opisano w `docs/REDLINE-FORMAT.md`. Strona CadCraft (odczyt paczki, akceptowanie lub odrzucanie każdej pozycji, chmury rewizji i dziennik) powstaje osobno.

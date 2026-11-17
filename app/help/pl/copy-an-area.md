---
title: Kopiowanie obszaru strony lub nakładki
summary: Skopiuj część arkusza prostokątem, elipsą lub dowolnym kształtem i wklej ją do innego arkusza, CadCraft, BimCraft, DetailCraft lub dowolnego programu w jej rozmiarze; skopiuj ją jako przezroczystą nakładkę i wyrównaj obraz przez dwa punkty.
keywords: kopiuj obszar, obszar, przycinanie, wycinek, migawka, schowek, region, prostokąt, elipsa, okrąg, dowolny, lasso, obraz, zdjęcie, png, nakładka, przezroczysty, prześwitujący, odcień, krycie, wklej, prawdziwy rozmiar, skala, wyrównaj, wyrównanie, dwa punkty, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Wybierz {{ui:Więcej}} › {{ui:Kopiuj obszar strony…}}. Nad arkuszem otwiera się pasek.

## Wybór obszaru

Wybierz na pasku {{ui:Prostokąt}}, {{ui:Elipsa}} lub {{ui:Dowolny}}, a potem przeciągnij po arkuszu:

- **Prostokąt:** przeciągnij ramkę wokół części do skopiowania.
- **Elipsa:** przeciągnij ramkę; elipsa w środku zostaje skopiowana, a narożniki poza nią są przezroczyste.
- **Dowolny:** narysuj kontur wokół części do skopiowania; kształt zamyka się sam. Poza nim jest przezroczyście.

Przeciągnij ponownie, by zacząć od nowa, albo naciśnij {{key:Esc}}.

## Kopiowanie

- {{ui:Uwzględnij adnotacje}} kopiuje adnotacje razem ze stroną; odznacz, by mieć czysty rysunek.
- {{ui:Rozdzielczość}}: {{ui:Jak na ekranie}}, 72, 150 lub 300 dpi. Obraz zachowuje się poniżej 3 MB; gdy duży obszar w wysokiej rozdzielczości przekroczyłby to, rozdzielczość jest obniżana, a wiersz stanu mówi, do jakiej.
- {{ui:Kopiuj}} (albo {{key:Mod+C}} lub {{key:Enter}}) umieszcza obszar w schowku jako obraz PNG, który wkleja się do Worda, poczty, innych programów PDF i programów do rysowania.
- {{ui:Zapisz jako PNG}} zamiast tego pobiera obraz, dla programu, który przy wklejaniu gubi przezroczyste części.

## Kopiowanie jako nakładka

{{ui:Kopiuj jako nakładkę}} dodatkowo sprawia, że biały papier jest przezroczysty, więc zostają tylko linie. {{ui:Kolor}} nadaje każdej linii jeden kolor (czerwony, niebieski, zielony, pomarańczowy lub fioletowy), by nakładka wyróżniała się na rysunku pod spodem; {{ui:Własne kolory}} je zachowuje. {{ui:Intensywność}} to początkowa siła po wklejeniu w naszych aplikacjach (50%, chyba że zmienisz).

## Wklejanie

**W MarkupCraft** {{key:Mod+V}} na dowolnym arkuszu wkleja obszar jako adnotację-obraz przy wskaźniku. Wchodzi w swoim rozmiarze:

- na papierze, w tym samym rozmiarze, jaki miał na arkuszu źródłowym;
- gdy oba arkusze mają skalę, w tym samym rozmiarze w rysunku: obszar z arkusza 1:50 wchodzi w połowie swojego rozmiaru papierowego na arkuszu 1:100.

Nakładka zaczyna z podaną intensywnością; zmień ją przez {{ui:Krycie}} w {{ui:Właściwości}}. Przesuwaj, zmieniaj rozmiar, blokuj i usuwaj ją jak każdy obraz, a zaznacz {{ui:Scal ze stroną przy zapisie}}, aby wrysować ją w stronę.

**W CadCraft, BimCraft i DetailCraft** kopia też zna swój rozmiar, więc wklejenie wchodzi w rzeczywistym rozmiarze rysunku, gdy arkusz miał skalę, albo pyta o nią, gdy jej nie miał. Zobacz pomoc każdej aplikacji dotyczącą obrazów.

## Wyrównywanie obrazu przez dwa punkty

Zaznacz jeden obraz lub nakładkę, potem wybierz {{ui:Więcej}} › {{ui:Wyrównaj obraz według dwóch punktów}}:

1. Kliknij punkt na obrazie.
2. Kliknij, dokąd ten punkt ma trafić.
3. Kliknij drugi punkt na obrazie, daleko od pierwszego.
4. Kliknij, dokąd ten punkt ma trafić.

Obraz jest przeskalowany, przesunięty i obrócony tak, by oba punkty trafiły tam, gdzie kliknąłeś. {{key:Esc}} przerywa; {{key:Mod+Z}} cofa to jednym krokiem.

## Warto wiedzieć

- Rozmiar przenosi się z kopią tylko między naszymi aplikacjami na tej samej witrynie i tylko dla kopii zrobionej w ciągu ostatnich kilku godzin; inny program dostaje zwykły obraz.
- Jeśli przeglądarka nie pozwala MarkupCraft korzystać ze schowka systemowego, wiersz stanu to mówi: wklejanie w naszych aplikacjach nadal działa, a {{ui:Zapisz jako PNG}} działa dla innych programów.
- Wyrównanie obraca obraz, przerysowując jego piksele, więc obrócony obraz jest nieco bardziej miękki niż oryginał.

---
title: Co jest zapisane w PDF
summary: Dokładna zawartość kopii z adnotacjami, co widzą inne programy PDF i co jest odczytywane po ponownym otwarciu pliku.
keywords: adnotacje pdf, komentarze, zapisane dane, pełny obieg, etykiety stron, pomiar, stan recenzji, odpowiedzi, interoperacyjność, zgodność, ponowne otwarcie, dane prywatne
from: 6439ad28
---

Kopia z adnotacjami to oryginalny plik PDF z dodanymi komentarzami (adnotacjami PDF). Same strony, ich rysunki, tekst, zakładki i linki są kopiowane tak, jak były.

## Każda adnotacja

| MarkupCraft | Zapisane jako | Inne przeglądarki PDF pokazują |
|---|---|---|
| Prostokąt, chmura w ramce | Adnotacja Square (chmura: chmurkowa ramka) | Komentarz w postaci prostokąta lub chmury |
| Elipsa | Adnotacja Circle | Komentarz w postaci elipsy |
| Wielokąt, chmura swobodna | Adnotacja Polygon (chmura: chmurkowa ramka) | Komentarz w postaci wielokąta lub chmury |
| Polilinia | Adnotacja PolyLine | Komentarz w postaci polilinii |
| Linia, strzałka | Adnotacja Line (strzałka: zamknięty grot) | Komentarz w postaci linii lub strzałki |
| Długość | Adnotacja Line oznaczona jako wymiar, z pomiarem | Pomiar długości, jeśli przeglądarka je obsługuje |
| Pole | Adnotacja Polygon oznaczona jako pole, z pomiarem | Pomiar pola, jeśli jest obsługiwany; w przeciwnym razie wielokąt |
| Grupa liczenia | Jedna adnotacja Ink, pierścień na każdą pozycję; jej tekst to „group: n” | Komentarz Ink |
| Pióro, zakreślacz | Adnotacja Ink (zakreślacz oznaczony jako taki) | Komentarz Ink |
| Tekst | Adnotacja FreeText | Komentarz w postaci pola tekstowego |
| Wyniesienie | Adnotacja FreeText z odnośnikiem wyniesienia | Komentarz wyniesienia |
| Notatka | Adnotacja Text | Notatka przyklejona, która po otwarciu pokazuje swój tekst |
| Pieczątka | Adnotacja Stamp | Komentarz pieczątki |

Każda z nich jest zapisywana z:

- **własnym wyglądem**, narysowanym dokładnie tak, jak MarkupCraft rysuje ją na ekranie, dzięki czemu wygląda tak samo w każdej przeglądarce i drukuje się tak samo, łącznie z odznaką numeru usterki;
- **autorem**, **datami utworzenia i modyfikacji**, **tematem**, **treścią komentarza** (dla pól tekstowych i wyniesień: tekstem i komentarzem), **kolorem** i **kryciem**;
- **szczegółami MarkupCraft** w prywatnym wpisie, który inne programy ignorują: status, pozycja usterki, styl i typ, dzięki czemu adnotacja otworzy się dokładnie tak samo.

## Wątki i statusy

- Każda odpowiedź jest zapisywana jako komentarz odpowiedzi połączony z jej adnotacją, z autorem, datą i tekstem. Odpowiedzi nie mają własnej ikony na arkuszu.
- Każda zmiana statusu jest zapisywana jako odpowiedź z przypisanym stanem recenzji. Inne narzędzia recenzji pokazują je jako Accepted, Rejected lub Completed; status Open jest zapisywany bez stanu.
- Adnotacja ze statusem innym niż Open, ale bez zapisanej zmiany statusu, dostaje jedną odpowiedź ze stanem recenzji, aby inne programy również widziały jej status.
- Odpowiedzi na komentarze tylko do odczytu z oryginalnego pliku są zapisywane w ten sam sposób, połączone z tym komentarzem.

## Każdy arkusz

- **Skala:** wyskalowany arkusz dostaje okno widokowe pomiaru obejmujące stronę (standardowy sposób zapisu skali strony) oraz własną kopię kalibracji MarkupCraft.
- **Numer arkusza:** numer wpisany przez {{ui:Zmień nazwę arkusza}} staje się etykietą strony. Gdy jakakolwiek strona pliku ma etykietę, każda strona tego pliku dostaje etykietę: wpisany numer, w przeciwnym razie dotychczasową etykietę, a w ostateczności numer strony.
- **Tytuł arkusza:** wpisany tytuł jest zapisywany tylko dla MarkupCraft; inne przeglądarki go nie pokazują.

## Tekst i znaki

Tekst jest zapisywany czcionką Helvetica, którą ma każda przeglądarka PDF. Litery spoza zestawu Europy Zachodniej (Windows-1252) drukują się w kopii jako „?”; komunikat zapisu je zlicza.

## Arkusze obliczeń i uzasadnienia

Arkusze obliczeń i uzasadnienia są przechowywane w prywatnym wpisie PDF o nazwie `/MarkupCraftShell`. Inne programy PDF go ignorują. Starsza wersja MarkupCraft również go ignoruje i usuwa przy następnym zapisie tego pliku.

## Co dzieje się z komentarzami, które już były

Gdy otwierasz PDF, który już ma komentarze:

- Własne komentarze MarkupCraft są odczytywane dokładnie. Jeśli inny program przesunął lub zmienił rozmiar jednego z nich, liczy się jego nowe położenie.
- Prostokąty, elipsy, linie, polilinie, wielokąty, ink, pola tekstowe i notatki przyklejone z innych programów stają się edytowalnymi adnotacjami. **Przy zapisie MarkupCraft usuwa oryginały i zapisuje je ponownie po swojemu**, wraz z ich dymkami i odpowiedziami. Ich wygląd może się nieznacznie zmienić.
- Stany recenzji z innych programów ustawiają status; wygrywa najnowszy.
- Wszystko inne (zakreślenia tekstu, pieczątki z innych programów i inne szczególne rodzaje) jest **zachowywane bez zmian** w kopii, tylko do odczytu.
- Linki i pola formularzy są zachowywane bez zmian i nie są wymieniane.

Ponowne zapisanie tego samego pliku niczego nie dubluje: adnotacje odczytane przez MarkupCraft są zastępowane, a nie dodawane ponownie.

## Czego się nie zmienia

Oryginalny plik na dysku nigdy nie jest zmieniany. Kopia nie jest optymalizowana pod kątem rozmiaru, więc może być nieco większa od oryginału. Pliki chronione (zaszyfrowane) nie mogą być zapisane.

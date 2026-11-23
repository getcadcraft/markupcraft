---
title: Podstawy BCF
summary: Co zawiera eksport BCF z MarkupCraft, jak używać go z narzędziami koordynacji BIM oraz jego ograniczenia.
keywords: bcf, bcfzip, format współpracy BIM, problemy, koordynacja, kolizja, tematy, punkt widzenia, zrzut, openbim, buildingsmart, eksport problemów
from: 0de26175
---

BCF (BIM Collaboration Format) to otwarty format pliku do przekazywania problemów między narzędziami BIM. Wiele programów do koordynacji modeli i tworzenia modeli może zaimportować plik `.bcfzip` jako listę problemów. MarkupCraft zapisuje **BCF 2.1**.

## Tworzenie pliku

1. Otwórz kartę {{ui:Markups}}.
2. Przefiltruj listę do tego, co chcesz wysłać, na przykład {{ui:Status}} „Otwarty”. Eksportowane są tylko adnotacje z listy.
3. Wybierz {{ui:BCF}}.
4. Poczekaj, aż zostanie utworzony zrzut każdej adnotacji („Tworzenie zrzutów dla BCF (5 z 20)…”).

Wynik: plik „<name> markups.bcfzip” zostaje pobrany, a pasek stanu podaje, ile zawiera tematów i jaki ma rozmiar.

## Co zawiera

Każda adnotacja staje się jednym **tematem**:

| Pole tematu | Wypełniane |
|---|---|
| Tytuł | Numer punktu, temat i arkusz, na przykład „#4 Chmura rewizji na A-101 — Rzut” |
| Typ | Rodzaj adnotacji (Chmura, Wyniesienie, Długość…) |
| Status | Otwarty, Zaakceptowany, Odrzucony lub Zakończony |
| Etykiety | Rodzaj adnotacji i arkusz |
| Autor i daty | Autor adnotacji oraz daty utworzenia i modyfikacji |
| Przypisane do, termin | Z jej pozycji listy usterek, gdy ją ma |
| Opis | Jej tekst lub treść pieczątki, zmierzona wartość, komentarz oraz arkusz i plik |
| Komentarze | Jeden na każdą odpowiedź, z autorem i datą |
| Zrzut | Obraz adnotacji na jej fragmencie arkusza |
| Punkt widzenia | Widok z góry na położenie adnotacji na arkuszu |

Ponowny eksport tej samej adnotacji daje ten sam identyfikator tematu, dzięki czemu narzędzie importujące BCF może rozpoznać ją jako ten sam problem.

## Co wraca przy imporcie

{{ui:Import BCF}} czyta pliki BCF 2.0, 2.1 i 3.0 (sprawdzono na 19 oficjalnych plikach testowych buildingSMART 3.0: odczytano każdy temat oraz komentarze trzech z nich, które mają tekst). Dla tematu, który jest Twój (ten sam identyfikator tematu), dodaje nowe komentarze jako odpowiedzi i przejmuje nowy status. Każdy inny temat staje się notatką na arkuszu, który nazwa jego etykieta lub nazwa pliku, a jeśli żadna nie wskazuje arkusza, na otwartym arkuszu. Jego tytuł, opis, osoba przypisana i termin stają się tekstem notatki, a komentarze odpowiedziami.

| W temacie BCF | W MarkupCraft |
|---|---|
| Tytuł, opis, osoba przypisana, termin | Tekst notatki |
| Komentarze z tekstem | Odpowiedzi |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done liczą się jako Completed) | Status adnotacji: Otwarty, Zaakceptowany, Odrzucony, Zakończony |
| Autor i data utworzenia | Autor i data notatki |
| Położenie kamery | Miejsce na arkuszu, tylko dla tematu powiązanego z arkuszem przez etykietę lub nazwę pliku |
| Zaznaczenie modelu, ukryte części, płaszczyzny przycinania, zrzuty | Nie są zachowywane: arkusz nie ma modelu, w którym można by je pokazać |

## Ograniczenia, o których warto wiedzieć

- **Arkusz to nie model.** Punkt widzenia wskazuje położenie adnotacji na papierze, mierzone w metrach papieru. Nie prowadzi narzędzia BIM do miejsca w modelu. Użyj zrzutu i nazwy arkusza, aby znaleźć to miejsce.
- **Statusy i typy są własne MarkupCraft** (Otwarty, Zaakceptowany, Odrzucony, Zakończony; Chmura, Wyniesienie…). Plik je deklaruje, jak pozwala BCF, ale narzędzie z własnymi stałymi listami może je przypisać inaczej albo zignorować.
- **Import przynosi komentarze, a nie widoki modelu.** {{ui:Import BCF}} dodaje odpowiedzi i statusy do wyeksportowanych adnotacji oraz tworzy notatki z pozostałych problemów; nie może pokazać kamery modelu. Zobacz [Lista adnotacji i eksport](topic:markups-list-and-export#import-bcf).
- Odsyłanie adnotacji jako PDF bywa prostsze przy przeglądach rysunków. BCF służy do przenoszenia uwag do rysunku w procesie koordynacji modelu.

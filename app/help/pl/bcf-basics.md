---
title: Podstawy BCF
summary: Co zawiera eksport BCF z MarkupCraft, jak używać go z narzędziami koordynacji BIM oraz jego ograniczenia.
keywords: bcf, bcfzip, format współpracy BIM, problemy, koordynacja, kolizja, tematy, widok, migawka, openbim, buildingsmart, eksport problemów
from: 446f38c1
---

BCF (BIM Collaboration Format) to otwarty format plików do przekazywania problemów między narzędziami BIM. Wiele programów do koordynacji modeli i tworzenia modeli może zaimportować plik `.bcfzip` jako listę problemów. MarkupCraft zapisuje **BCF 2.1**.

## Utwórz plik

1. Otwórz kartę {{ui:Adnotacje}}.
2. Przefiltruj listę do tego, co chcesz wysłać, na przykład {{ui:Status}} „Otwarty”. Eksportowane są tylko wymienione adnotacje.
3. Wybierz {{ui:BCF}}.
4. Poczekaj, aż zostanie utworzona migawka każdej adnotacji („Tworzenie migawek dla BCF (5 z 20)…”).

Wynik: plik „<name> markups.bcfzip” zostanie pobrany, a pasek stanu poda, ile zawiera tematów i jaki ma rozmiar.

## Co w nim jest

Każda adnotacja staje się jednym **tematem**:

| Pole tematu | Wypełniane |
|---|---|
| Tytuł | Numer z listy usterek, temat i arkusz, na przykład „#4 Chmura na A-101 — Rzut poziomy” |
| Typ | Rodzaj adnotacji (Chmura, Wyniesienie, Długość…) |
| Status | Otwarty, Zaakceptowany, Odrzucony lub Zakończony |
| Etykiety | Rodzaj adnotacji i arkusz |
| Autor i daty | Autor adnotacji oraz daty utworzenia i modyfikacji |
| Przypisano do, termin | Z pozycji listy usterek, jeśli adnotacja ją ma |
| Opis | Jej tekst lub treść pieczątki, zmierzona wartość, komentarz oraz arkusz i plik |
| Komentarze | Jeden na każdą odpowiedź, z autorem i datą |
| Migawka | Obraz adnotacji na jej fragmencie arkusza |
| Punkt widzenia | Widok z góry na miejsce adnotacji na arkuszu |

Ponowny eksport tej samej adnotacji daje ten sam identyfikator tematu, więc narzędzie importujące BCF może rozpoznać ją jako ten sam problem.

## Ograniczenia, które warto znać

- **Arkusz to nie model.** Punkt widzenia wskazuje położenie adnotacji na papierze, mierzone w metrach papieru. Nie prowadzi narzędzia BIM do miejsca w modelu. Użyj migawki i nazwy arkusza, by znaleźć miejsce.
- **Statusy i typy są własne MarkupCraft** (Otwarty, Zaakceptowany, Odrzucony, Zakończony; Chmura, Wyniesienie…). Plik je deklaruje, zgodnie z BCF, ale narzędzie ze stałymi listami własnymi może je przypisać inaczej lub zignorować.
- **Import przynosi komentarze, a nie widoki modelu.** {{ui:Importuj BCF}} dodaje odpowiedzi i statusy do wyeksportowanych adnotacji oraz tworzy notatki z innych problemów; nie pokaże kamery modelu. Zobacz [Lista adnotacji i eksport](topic:markups-list-and-export#import-bcf).
- Odsyłanie adnotacji jako PDF jest często prostsze przy przeglądzie rysunków. BCF służy do przenoszenia uwag do rysunków w procesie koordynacji modelu.

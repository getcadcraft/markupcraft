---
title: Śledź RFI, zgłoszenia do akceptacji i dzienniki dzienne
summary: Umieszczaj RFI, zgłoszenia do akceptacji i dzienniki dzienne na arkuszach, z numerami, osobami przypisanymi, terminami i wątkami; filtruj przeterminowane rekordy; eksportuj do CSV lub BCF; pracuj offline i scalaj kopie.
keywords: rfi, wniosek o informację, zgłoszenie do akceptacji, dziennik dzienny, raport z budowy, dziennik budowy, budowa, przeterminowane, termin, przypisane do mnie, wątek, załącznik, scalanie, offline, tablet, bcf, csv, teren
from: 95039c5a
---

Karta {{ui:Field}} przechowuje trzy rodzaje rekordów obok Twoich adnotacji. Każdy jest przypisany do arkusza; RFI lub zgłoszenie ma także pinezkę w miejscu na arkuszu, którego dotyczy.

- **RFI**: pytanie do zespołu projektowego. Statusy: Otwarte, Odpowiedziano, Zamknięte.
- **Zgłoszenie do akceptacji**: coś, co trzeba sprawdzić, zanim prace pójdą dalej. Statusy: Otwarte, W przeglądzie, Zatwierdzono, Zatwierdzono z uwagami, Popraw i prześlij ponownie, Zamknięte.
- **Dziennik dzienny**: pogoda danego dnia, liczba osób na budowie i wykonane prace. Statusy: Wersja robocza, Ostateczny.

Każdy rekord ma numer w swojej kategorii (RFI-0001, SUB-0001, LOG-0001), tytuł, treść, osobę przypisaną, termin, wątek odpowiedzi i listę nazw załączników.

## Dodaj rekord

1. Otwórz kartę {{ui:Field}} i wybierz {{ui:RFI}} lub {{ui:Submittal}}.
2. Dotknij lub kliknij arkusz, na którym rekord ma się znaleźć. Pojawi się pinezka, a rekord otworzy się na karcie.
3. Wpisz tytuł, pytanie lub opis, osobę przypisaną i termin.

Dziennik dzienny dodaje się do otwartego arkusza bez pinezki. {{ui:Place pin}} umieszcza ją później; {{ui:Move pin}} przesuwa dowolną pinezkę. Kliknięcie pinezki na arkuszu otwiera jej rekord.

## Odpowiedz i śledź

Zmień {{ui:Status}}, a zmiana zostanie zapisana we wątku. Napisz odpowiedź i wybierz {{ui:Send reply}} (Ctrl+Enter także ją wysyła). Załączniki to tylko nazwy: wpisz nazwę lub wybierz pliki, a lista pokaże zespołowi, co należy do rekordu. Same pliki pozostają tam, gdzie są.

Rekord, którego termin minął i który wciąż czeka (RFI, który nie jest Odpowiedziano ani Zamknięte, zgłoszenie bez decyzji), jest oznaczony na czerwono jako **Przeterminowane** na liście i na swojej pinezce.

## Znajdź to, co ważne

Filtry są nad listą: typ, status, termin (przeterminowane, termin za 7 dni, z terminem lub bez terminu), ten arkusz lub wszystkie arkusze, wyszukiwanie tekstu oraz {{ui:Assigned to me}}, które porównuje osobę przypisaną z nazwą, pod jaką MarkupCraft zna użytkownika (zob. [Ustaw swoją nazwę](topic:set-your-name)). Wiersz pod filtrami liczy, ile rekordów jest widocznych i ile jest przeterminowanych.

## Eksport

{{ui:CSV}} zapisuje wyświetlone rekordy jako arkusz kalkulacyjny. {{ui:BCF}} zapisuje je jako tematy BCF, każdy z migawką swojego miejsca na arkuszu, aby inne narzędzia BCF mogły je wyświetlić. Oba zachowują filtry.

## Zapis, praca offline i scalanie kopii

Rekordy są zapisywane w pliku PDF przy jego zapisie i wracają po jego otwarciu. Nic nie wymaga sieci: dodawaj, edytuj, odpowiadaj i zapisuj na tablecie w piwnicy, a potem przywieź plik PDF z powrotem. Starsze pliki PDF oraz pliki z innych programów otwierają się jak dotąd.

Aby połączyć dwie kopie, otwórz jedną i wybierz {{ui:Merge}}, a następnie wskaż drugą kopię tego samego PDF. Rekordy są łączone po swoich identyfikatorach:

- rekord, który ma tylko jedna kopia, zostaje dodany;
- rekord obecny w obu kopiach bierze swoje pola (tytuł, treść, status, osobę przypisaną, termin) w całości z kopii zmienionej jako ostatnia, więc jeśli dwie osoby zmieniły różne pola tego samego rekordu, wygrywa wersja z późniejszej kopii; wątki i nazwy załączników z obu kopii są łączone;
- jeśli obie kopie nadały nowemu rekordowi ten sam numer, ten, który dochodzi, dostaje kolejny wolny numer;
- rekord usunięty w jednej kopii pozostaje usunięty, chyba że został edytowany później.

Scalenie to jeden krok cofnięcia.

## Ograniczenia

- Rekordy nie są jeszcze udostępniane w Live TeamWork; użyj scalania.
- W tej wersji nie ma zespołów, powiadomień ani projektów w chmurze dla rekordów.
- Strony usunięte z PDF zabierają ze sobą swoje rekordy (potwierdzenie usunięcia strony je liczy).

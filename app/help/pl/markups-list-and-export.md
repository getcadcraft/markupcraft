---
title: Lista adnotacji, filtry i eksport
summary: Zobacz każdą adnotację w zestawie, filtruj według arkusza, autora, statusu i typu, przejdź do jednej z nich i eksportuj listę jako CSV lub BCF.
keywords: lista adnotacji, lista, podsumowanie, xlsx, skoroszyt, raport pdf, importuj bcf, filtr, sortuj, raport, eksport, csv, arkusz kalkulacyjny, bcf, bcfzip, problemy, lista komentarzy, przejdź
from: 6c70261e
---

## Otwórz listę

Wybierz kartę {{ui:Adnotacje}} po prawej stronie. Każda adnotacja każdego otwartego pliku jest wymieniona w kolejności arkuszy, a potem w kolejności, w jakiej je wykonano. Każdy wiersz pokazuje:

- ikonę w kolorze adnotacji, jej numer usterki, jeśli go ma („#4”), oraz jej temat,
- jej tekst, treść pieczątki lub zmierzoną wartość oraz komentarz,
- arkusz, autora i datę,
- jej status (albo „Tylko do odczytu” dla komentarzy, które przyszły z plikiem) oraz liczbę odpowiedzi, gdy jakieś ma.

Linia nad listą je liczy: „38 adnotacji” albo „12 z 38 adnotacji”, gdy lista jest filtrowana.

## Przejdź do adnotacji

Kliknij wiersz. MarkupCraft pokazuje ten arkusz, zaznacza adnotację i przybliża do niej, gdy jest poza ekranem lub zbyt mała, by ją zobaczyć. {{ui:Właściwości}} pokazują jej szczegóły i wątek, gdy wrócisz na tę kartę.

## Filtrowanie

Cztery menu nad listą. Działają razem.

| Menu | Wybory |
|---|---|
| {{ui:Arkusz}} | Wszystkie arkusze, Ten arkusz (podąża za Tobą przy zmianie arkusza) lub dowolny arkusz z adnotacjami |
| {{ui:Autor}} | Dowolny albo każdy autor w zestawie |
| {{ui:Status}} | Dowolny status, Otwarty, Zaakceptowany, Odrzucony, Ukończony |
| {{ui:Typ}} | Dowolny typ albo każdy rodzaj adnotacji w zestawie |

Przykłady:

- Co jeszcze jest otwarte na tym arkuszu: {{ui:Arkusz}} „Ten arkusz”, {{ui:Status}} „Otwarty”.
- Komentarze jednego konsultanta: {{ui:Autor}} i nazwisko tego konsultanta.
- Wszystkie pomiary: {{ui:Typ}} „Długość” lub „Pole”.

Lista pokazuje do 2000 wierszy; w bardzo dużych zestawach zawęź ją filtrem.

## Eksport do CSV

Wybierz {{ui:CSV}} na górze karty. Dostajesz plik „<name> markups.csv” z **adnotacjami w aktualnie filtrowanym stanie**, po jednej w wierszu, z tymi kolumnami:

Nr usterki, Arkusz, Plik, Strona, Typ, Temat, Tekst, Komentarz, Pomiar, Autor, Utworzono, Zmodyfikowano, Status, Odpowiedzi, Ostatnia odpowiedź, Kolor, Tylko do odczytu.

- „Tekst” zawiera słowa pól tekstowych i wyniesień, treść pieczątki albo nazwę grupy liczenia.
- „Pomiar” zawiera długości, „pole, obwód” dla pól oraz „grupa: n” dla liczenia.
- Daty to pełne znaczniki czasu w UTC.

Aby wyeksportować wszystko, najpierw ustaw każdy filtr z powrotem na pierwszy wybór.

## Legenda na arkuszu

{{ui:Legenda}} na karcie {{ui:Adnotacje}} umieszcza legendę w prawym górnym rogu tego, co widzisz: pudełko z listą każdego rodzaju adnotacji na arkuszu (według tematu i koloru, na przykład „Chmura”, „Pytanie” lub „Gniazdka”) z liczbą każdej z nich. Grupa liczenia liczy swoje kropki. Legenda na bieżąco się przelicza, gdy rysujesz, przesuwasz lub usuwasz adnotacje, a wydrukowana i zapisana zawiera liczby z tej chwili.

Przesuwaj i zmieniaj jej rozmiar jak każdą adnotację. W jej {{ui:Właściwościach}} zmień {{ui:Tytuł}} albo ustaw {{ui:Liczby}} na {{ui:Cały zestaw}}, aby liczyć każdy arkusz. Przestrzeni, innych legend i komentarzy z innych programów nie liczy się.

## Własne kolumny i sortowanie

{{ui:Kolumny}} na karcie {{ui:Adnotacje}} dodają do każdej adnotacji Twoje własne kolumny: **tekst**, **wybór** (na przykład Branża: Mechaniczna, Elektryczna, Instalacje sanitarne), **liczbę** (na przykład Koszt) lub **datę**. Nazwij każdą, wybierz jej rodzaj, wypisz wybory dla kolumny wyboru i wybierz {{ui:Zapisz kolumny}}.

- Wypełniaj je w {{ui:Właściwościach}}: każda kolumna ma tam pole. Kolumna liczby przyjmuje tylko liczby, kolumna daty tylko datę.
- Lista pokazuje wartości pod każdą adnotacją, filtr {{ui:Kolumna}} wybiera jedną wartość (albo adnotacje, w których jest pusta), a {{ui:Sortuj}} porządkuje listę według kolumny, autora, statusu, rodzaju lub daty, zamiast według arkusza.
- Eksporty CSV i XLSX zawierają kolumny po zwykłych. Kolumny są zapisywane w PDF i wracają po ponownym otwarciu.

## Eksport podsumowania: skoroszyt lub PDF

- {{ui:XLSX}} pobiera plik „<name> markup summary.xlsx” z trzema arkuszami: **Adnotacje** (jeden wiersz na wymienioną adnotację, te same kolumny co w CSV), **Według arkusza** (ile adnotacji ma każdy arkusz, otwartych i zamkniętych, oraz ile jest każdego rodzaju, z sumami) i **Lista usterek** (gdy są elementy usterek).
- {{ui:PDF}} pobiera plik „<name> markup summary.pdf”: raport do wydruku lub wysłania, z nazwą zestawu, datą i tabelą wymienionych adnotacji (numer, arkusz, rodzaj, temat, tekst lub komentarz, zmierzona wartość, autor, status i ostatnia odpowiedź). Długi tekst się zawija; nagłówek tabeli powtarza się na każdej stronie.

Oba eksporty biorą listę w takim stanie, w jakim jest przefiltrowana, więc najpierw filtruj, aby zestawić jeden arkusz, jednego autora albo tylko pozycje otwarte.

## Eksport do BCF

Wybierz {{ui:BCF}}. MarkupCraft robi zdjęcie każdej wymienionej adnotacji na jej arkuszu („Tworzenie zdjęć dla BCF (3 z 12)…”), a potem pobiera plik „<name> markups.bcfzip”. Każda adnotacja staje się jednym tematem BCF ze swoim statusem, autorem, datami, odpowiedziami jako komentarzami, osobą przypisaną i terminem z elementu usterki oraz zdjęciem.

Użyj tego, aby przenieść uwagi z przeglądu rysunków do narzędzi koordynacji BIM, które czytają BCF. Co się przenosi, a czego nie, opisano w [Podstawy BCF](topic:bcf-basics).

## Importuj BCF

{{ui:Importuj BCF}} czyta plik .bcfzip (lub .bcf) z narzędzia BIM:

- Problemy pochodzące z własnego eksportu BCF MarkupCraft odnajdują swoje adnotacje: nowe odpowiedzi są dodawane do wątku, a nowy status jest ustawiany (Zamknięte liczy się jako Ukończone). Odpowiedzi, które już tam są, nie są dodawane podwójnie.
- Inne problemy stają się notatkami z tytułem, opisem, autorem i komentarzami. Notatka trafia na arkusz, którego numer lub nazwę podają etykiety problemu; w przeciwnym razie na otwarty arkusz. Kamera BIM nie ma miejsca na papierze, więc takie notatki są ułożone w lewym górnym rogu arkusza, abyś je przesunął.

Całość importu to jeden krok: {{key:Mod+Z}} cofa go. Zobacz [Podstawy BCF](topic:bcf-basics).

## Czego lista jeszcze nie robi

- Grupowania listy (zamiast tego sortuj, a potem filtruj).
- Edycji wartości na liście (edytuj w {{ui:Właściwościach}}; pola usterek są edytowalne na karcie {{ui:Lista usterek}}).

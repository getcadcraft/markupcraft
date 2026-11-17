---
title: Statusy i odpowiedzi
summary: Oznacz każdy komentarz jako Otwarte, Zaakceptowane, Odrzucone lub Zakończone, dyskutuj o nim w wątku odpowiedzi i przekaż wątek dalej w PDF.
keywords: status, status recenzji, zaakceptowane, odrzucone, zakończone, otwarte, odpowiedź, odpowiedzi, wątek, komentarz, rozmowa, dyskusja, odpowiedz, ponowne sprawdzenie
from: 0f3e8b91
---

Każda adnotacja ma **status** i **wątek odpowiedzi**. Razem przenoszą jedną rundę recenzji: recenzent oznacza adnotacje, projektant odpowiada i ustawia statusy, a recenzent sprawdza je ponownie.

## Ustaw status

1. Zaznacz adnotację (lub kilka).
2. W {{ui:Properties}} wybierz {{ui:Status}}: Otwarte, Zaakceptowane, Odrzucone albo Zakończone.

Wynik: status pojawia się jako etykieta na liście {{ui:Markups}}, a do wątku dodawany jest wiersz: "Ustawiono status na Zaakceptowane przez Ana Ruiz." Gdy zaznaczono kilka adnotacji, pole statusu pokazuje "Mieszane", dopóki nie wybierzesz jednego, a wtedy zmienia wszystkie.

Nowe adnotacje zaczynają jako Otwarte. Wklejone lub zduplikowane adnotacje też zaczynają jako Otwarte.

## Odpowiedz

1. Zaznacz adnotację.
2. W {{ui:Properties}} znajdź "Odpowiedzi" pod ustawieniami stylu.
3. Wpisz tekst w polu {{ui:Write a reply}}.
4. Wybierz {{ui:Reply}} albo naciśnij {{key:Mod+Enter}}.

Wynik: odpowiedź jest wypisana z Twoim imieniem oraz datą i godziną, a nagłówek ją liczy: "Odpowiedzi (3)". Lista {{ui:Markups}} pokazuje w wierszu liczbę odpowiedzi.

- Zmiany statusu są wypisywane w tym samym wątku i oznaczone jako wpisy statusu, więc historia czyta się po kolei.
- Jeśli zaczniesz pisać odpowiedź i klikniesz coś innego, szkic zostaje zachowany, dopóki nie wrócisz do tej adnotacji (aż do zamknięcia zestawu).
- Jeśli Twoje imię nie jest ustawione, MarkupCraft przed wysłaniem o nie zapyta.
- Możesz też odpowiadać na komentarze tylko do odczytu, które przyszły z plikiem.

:::note
Odpowiedzi nie można edytować ani usunąć po wysłaniu. Zaraz po wysłaniu {{key:Mod+Z}} ją cofa; potem dodaj nową odpowiedź, która ją poprawi.
:::

## Dodaj zdjęcie

Pod polem odpowiedzi {{ui:Add photo}} dodaje obraz do wątku: PNG lub JPEG z tego komputera albo, na tablecie lub telefonie, zdjęcie zrobione tam od razu. To, co wpisano w polu odpowiedzi, staje się jego podpisem. Wątek pokazuje miniaturę; kliknij ją, aby zobaczyć zdjęcie w pełnym rozmiarze. Duże zdjęcia są zmniejszane do 1600 pikseli na dłuższym boku.

W zapisanym PDF każde zdjęcie jest też przenoszone jako załączony plik obok adnotacji (spinacz), więc inne przeglądarki PDF mogą je otworzyć.

## Przekazywanie recenzji dalej

Nie ma jeszcze wspólnej sesji online: recenzja przechodzi w PDF.

1. Wybierz {{ui:Save}}. Kopia zawiera każdą adnotację z jej statusem i odpowiedziami.
2. Wyślij tę kopię tak, jak wysyłasz rysunki dziś.
3. Kolejna osoba otwiera ją w MarkupCraft, odpowiada, ustawia statusy i zapisuje ponownie.

Inne programy PDF widzą odpowiedzi jako odpowiedzi na komentarz, a statusy jako stany recenzji (Zaakceptowane, Odrzucone, Zakończone; Otwarte pokazuje się jako brak stanu). Ich własne odpowiedzi i stany recenzji wracają do MarkupCraft po otwarciu pliku: wygrywa najnowszy status.

Jeśli dwie osoby równocześnie adnotują oddzielne kopie, nie ma scalania. Możesz otworzyć obie kopie w jednym zestawie i przenieść kilka adnotacji skrótami {{key:Mod+C}} i {{key:Mod+V}}, ale wklejona kopia jest nową adnotacją: nosi Twoje imię, nową datę i status Otwarte, i ląduje nieco przesunięta. Uzgodnijcie, kto adnotuje które arkusze, aby tego uniknąć.

## Znajdź to, co wciąż otwarte

Na karcie {{ui:Markups}} ustaw {{ui:Status}} na "Otwarte", aby zobaczyć tylko otwarte pozycje, a {{ui:Author}} na jednego recenzenta. Zobacz [Lista adnotacji](topic:markups-list-and-export).

Status (Otwarte, Zaakceptowane, Odrzucone, Zakończone) dotyczy komentarza. Pozycja z listy usterek ma własny, osobny status dla pracy w terenie; zobacz [Utwórz listę usterek](topic:punch-list).

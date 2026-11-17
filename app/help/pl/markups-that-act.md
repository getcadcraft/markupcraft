---
title: Zamień adnotację w zadanie
summary: Przypisz adnotacji wykonawcę (osobę lub asystenta), dzień terminu i łącze do rysunku lub elementu modelu, którego dotyczy, oraz zobacz, jak zadanie się zamyka, gdy to naprawdę się zmieni.
keywords: zadanie, zadania, wykonawca, asystent, termin, po terminie, łącze, zamknięcie, zmiana, element, obszar rysunku, adnotacje, które działają, MCP
from: 9e970202
---

Zadanie to adnotacja, którą ktoś musi wykonać. Zachowuje swoje miejsce na arkuszu i swój wątek, a dodaje tytuł, wykonawcę, dzień terminu, stan i, jeśli chcesz, łącze do rzeczy, której dotyczy.

## Utwórz zadanie

1. Zaznacz jedną lub więcej adnotacji.
2. Otwórz kartę {{ui:Zadania}} i wybierz {{ui:Zrób z zaznaczonych zadanie}}.
3. Uzupełnij tytuł (zaczyna się od tekstu adnotacji), dla kogo jest zadanie ({{ui:Osoba}} albo {{ui:Asystent}}, oraz nazwa), opcjonalny dzień terminu i na co zwrócić uwagę.

Zadanie dla asystenta to praca dla asystenta, którego podłączyłeś do MarkupCraft (zobacz [Używanie MarkupCraft z asystentem AI](topic:use-with-ai-assistants)). MarkupCraft nie ma własnego asystenta: tylko wypisuje pracę i przyjmuje odpowiedzi asystenta. Wybór {{ui:Przypisane do}}, a potem {{ui:Asystent}} na liście pokazuje, co na niego czeka.

## Sprawdzanie zmiany

- **Rysunek wewnątrz adnotacji.** MarkupCraft zachowuje linie w pudełku adnotacji tak, jak są teraz. Gdy otworzysz nowszą wersję tego arkusza (drugi plik o tym samym numerze arkusza lub na tej samej pozycji strony), wybierz {{ui:Sprawdź teraz}}: jeśli linie w tym obszarze różnią się o więcej niż włos, zadanie się zamyka.
- **Element modelu.** Podaj aplikację i identyfikator elementu. Twój asystent odczyta element narzędziami tamtej aplikacji i zgłosi go przez `tasks_check`. Pierwszy raport zostaje jako stan początkowy; późniejszy, który się różni, zamyka zadanie. Element, który został usunięty, też je zamyka.
- **Nic.** Zwykłe zadanie, które kończysz ręcznie.

Zamknięte zadanie jest oznaczone jako Gotowe, jego adnotacja staje się Ukończona, a notatka we wątku mówi, co się zmieniło. Jeden krok cofania je ponownie otwiera.

**Ograniczenie:** sprawdzenie zakłada, że nowsza wersja używa tego samego początku strony i tego samego rozmiaru strony. Arkusz przerysowany w innym rozmiarze nie będzie pasował, więc jego zadania się nie zamkną. Arkusze są dopasowywane po numerze arkusza, a w razie jego braku po pozycji strony; MarkupCraft nie skaluje jednej wersji, aby pasowała do drugiej.

Ponowne wydrukowanie tego samego rysunku z nową datą albo linie przesunięte o mniej niż 1.5 pt nie liczą się jako zmiana. Jeśli nie ma otwartej nowszej wersji, zadanie pozostaje otwarte, a pasek stanu o tym informuje.

## Lista

Lista {{ui:Zadania}} można filtrować według stanu i tego, dla kogo jest, w tym według {{ui:Po terminie}}. Zadanie po dniu terminu pokazuje się w panelu Problemy jako ostrzeżenie. {{ui:CSV}} eksportuje listę.

Zadania są zapisywane w PDF razem z adnotacją i przechodzą przez Live tak jak inne właściwości adnotacji.

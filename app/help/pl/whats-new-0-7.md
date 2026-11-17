---
title: Co nowego w 0.7 (wcześniejsze)
summary: RFI, zgłoszenia do akceptacji i dzienniki dzienne w nowej karcie Teren, z terminami, zaległościami na czerwono, CSV i BCF, praca offline oraz Scal; asystenci ustawiający statusy, odpowiadający i eksportujący listę; listy jednostek, które podążają za Ustawieniami; panele, które się chowają, i okna dialogowe, które można przesuwać.
keywords: co nowego 0.7, wcześniejsze wydanie, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, teren, rekordy terenowe, RFI, zapytanie o informacje, zgłoszenie do akceptacji, dziennik dzienny, dziennik budowy, po terminie, termin, przypisane do mnie, pinezka, scal, offline, tablet, BCF, CSV, asystent, MCP, status adnotacji, odpowiedź, eksport, jednostki, listy jednostek, gwiazdka, kalibracja, zwarty, panele, okna dialogowe, portugalski
from: f8578677
---

To jest lista zmian w MarkupCraft 0.7 w porównaniu z 0.6. Najważniejszą nowością są rekordy terenowe: RFI, zgłoszenia do akceptacji i dzienniki dzienne przechowywane w PDF obok adnotacji.

## Nowe

### RFI, zgłoszenia do akceptacji i dzienniki dzienne

- **Karta Teren.** Otwórz kartę {{ui:Teren}} i wybierz {{ui:RFI}}, {{ui:Zgłoszenie do akceptacji}} lub {{ui:Dziennik dzienny}}. Dotknij lub kliknij arkusz, na którym ma być RFI lub zgłoszenie, a pinezka zaznaczy miejsce; dziennik dzienny trafia na otwarty arkusz bez pinezki ({{ui:Umieść pinezkę}} dodaje ją później, {{ui:Przesuń pinezkę}} przesuwa dowolną pinezkę). Każdy rekord ma własny numer (RFI-0001, SUB-0001, LOG-0001), tytuł, tekst, status, osobę odpowiedzialną, termin, wątek odpowiedzi i listę nazw załączników. Zobacz [Śledzenie RFI, zgłoszeń do akceptacji i dzienników dziennych](topic:field-records).
- **Sprawdź, co się spóźnia.** Filtruj listę według typu, statusu, terminu (po terminie, termin za 7 dni, z terminem lub bez), tego arkusza lub wszystkich arkuszy, wyszukiwania tekstowego albo {{ui:Przypisane do mnie}}. Rekord po terminie, który nadal czeka, jest oznaczony na czerwono jako **Po terminie**, zarówno na liście, jak i na swojej pinezce. Zobacz [Znajdź to, co ważne](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} zapisuje wymienione rekordy jako arkusz kalkulacyjny; {{ui:BCF}} zapisuje je jako tematy BCF, każdy z migawką swojego miejsca na arkuszu. Oba respektują filtry. Zobacz [Eksport](topic:field-records#export).
- **Praca offline i dwie kopie w jedną.** Rekordy są zapisywane w PDF i nie wymagają sieci, więc tablet na budowie może je dodawać, odpowiadać na nie i zapisywać. Po powrocie do biura {{ui:Scal}} łączy rekordy innej kopii tego samego PDF według ich identyfikatorów, jako jeden krok cofnięcia. Zobacz [Zapisywanie, praca offline i scalanie kopii](topic:field-records#save-offline-and-merging-copies).

### Asystenci AI

- **Więcej tego, co asystent może zrobić.** Twój własny asystent, połączony przez CadCraft Studio, może teraz ustawić status adnotacji (`markup_status`, zapisywany w jej wątku), odpowiedzieć w wątku (`markup_reply`) oraz wyeksportować listę {{ui:Adnotacje}} jako CSV lub BCF (`markups_export`, czyli to, co lista pokazuje przy aktywnych filtrach). Każda zmiana to jeden krok cofnięcia, podpisany nazwą asystenta. Zobacz [Czego asystent może zażądać](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma osobną listę dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami podanymi w definicjach jednostek (amerykańska stopa geodezyjna jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list; oznacz jedną gwiazdką, a nowa praca zacznie się w tej jednostce. Plik zawsze zachowuje własną jednostkę. W MarkupCraft jednostki pomiaru i położenia w {{ui:Ustawienia}} › {{ui:MarkupCraft}} oraz jednostka w oknie kalibracji podążają za przełącznikami; gwiazdka ustawia jednostkę pomiaru, aż zapiszesz własne ustawienia MarkupCraft; a rzeczywista odległość, którą wpisujesz przy kalibracji, może mieć oznaczenie dowolnej jednostki, na przykład `3 yd` albo `1.5 km`. Zobacz [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści na ekranie więcej (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma smukły pasek tytułu: przeciągnij go, aby zadokować lub odłączyć panel; upuść go na pasku innego panelu, aby dzielić jedną ramkę jako karty; przypnij, aby chował się do krawędzi; albo ukryj go i przywołaj z krawędzi. Zobacz [Ułóż panele](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu, by odsunąć je od rysunku; wróci tam, gdzie je zostawiono. Dwukrotne kliknięcie paska tytułu wyśrodkowuje je ponownie. Zobacz [Przesuń okno dialogowe](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć przykładowych próśb do twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których potrzebuje, a każda odtwarzana przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Ten język oraz **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz wszystkie słowa aplikacji, jako wersje robocze, jeszcze nieprzejrzane przez rodzimego użytkownika języka. Tematy pomocy są w języku angielskim.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla twojego systemu, brak sieci, nieprawidłowy podpis), zamiast samego „Gotowe”, i przestaje przywracać kartę Co nowego, którą zamknąłeś, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisane kodem.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, ponieważ walidacja certyfikatu jeszcze nie przyszła. Sprawdź SHA-256 przy każdym pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami i nie ma jeszcze wersji na iPada ani iPhone'a.
- Listy kąta i nachylenia w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- Rekordy terenowe nie są współdzielone w sesji na żywo CadCraft Studio (sesje na żywo przenoszą tylko adnotacje); kopie łącz razem przez {{ui:Scal}}.
- Scalanie bierze rekord w całości z kopii zmienionej ostatnio: jeśli dwie osoby zmieniły różne pola jednego rekordu, wygrywają pola z późniejszej kopii. Wątki i nazwy załączników są łączone.
- Załączniki to tylko nazwy; pliki zostają tam, gdzie są. Nie ma dla rekordów zespołów, powiadomień ani projektów w chmurze, a asystenci nie mają jeszcze narzędzi do rekordów.
- Rekordy terenowe testowano w przeglądarce w rozmiarach telefonu i tabletu przy odciętej sieci, ale jeszcze nie ręcznie na prawdziwym tablecie.
- Nadal z 0.6: obracanie obiektów strony pod dowolnym kątem, rysowanie nowych kształtów bezpośrednio na stronie, zmiana czcionki lub rozmiaru linii oraz tekst zawijany na kilka wierszy. Zapisana kopia ze zmianami na stronie nie była jeszcze otwierana w Acrobat.
- Nadal z 0.5: cofanie zmiany strony (na przykład dodania pustej strony), odczyt tekstu ze skanowanych arkuszy oraz sesje na żywo poza własną siecią.

Wszystko inne znajduje się w [Czego jeszcze nie zbudowano](topic:not-built-yet).

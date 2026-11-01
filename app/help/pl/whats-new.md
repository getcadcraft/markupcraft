---
title: Co nowego w 0.7
summary: Zapytania RFI, zgłoszenia do akceptacji i dzienniki dzienne w nowej karcie Teren, z terminami, przeterminowanymi na czerwono, CSV i BCF, pracą offline i Scalaniem; asystenci, którzy ustawiają statusy, odpowiadają i eksportują listę; listy jednostek podążające za Ustawieniami; panele, które się chowają, i okna dialogowe, które się przesuwają.
keywords: co nowego, nowości, informacje o wydaniu, lista zmian, zmiany, 0.7, wersja, nowe funkcje, teren, zapisy terenowe, rfi, zapytanie o informację, zgłoszenie do akceptacji, dziennik dzienny, dziennik budowy, przeterminowane, termin, przypisane do mnie, pinezka, scalanie, offline, tablet, bcf, csv, asystent, mcp, status adnotacji, odpowiedź, eksport, jednostki, listy jednostek, gwiazdka, kalibracja, zwarta, panele, okna dialogowe, portugalski
from: 142e1a1e
---

To jest to, co zmieniło się w MarkupCraft 0.7 w porównaniu z 0.6. Największa nowość to zapisy terenowe: RFI, zgłoszenia do akceptacji i dzienniki dzienne trzymane w PDF obok Twoich adnotacji.

## Nowości

### RFI, zgłoszenia do akceptacji i dzienniki dzienne

- **Karta Teren.** Otwórz kartę {{ui:Teren}} i wybierz {{ui:RFI}}, {{ui:Zgłoszenie do akceptacji}} lub {{ui:Dziennik dzienny}}. Dotknij lub kliknij arkusz tam, gdzie należy RFI lub zgłoszenie, a pinezka oznaczy miejsce; dziennik dzienny trafia na otwarty arkusz bez pinezki ({{ui:Umieść pinezkę}} dodaje ją później, {{ui:Przesuń pinezkę}} przesuwa każdą pinezkę). Każdy zapis ma własny numer (RFI-0001, SUB-0001, LOG-0001), tytuł, tekst, status, osobę przypisaną, termin, wątek odpowiedzi i listę nazw załączników. Zobacz [Śledź RFI, zgłoszenia do akceptacji i dzienniki dzienne](topic:field-records).
- **Zobacz, co się spóźnia.** Filtruj listę według rodzaju, statusu, terminu (przeterminowane, termin w ciągu 7 dni, z terminem lub bez), tego arkusza lub wszystkich arkuszy, wyszukiwania tekstu albo {{ui:Przypisane do mnie}}. Zapis po terminie, który nadal czeka, jest oznaczony **Przeterminowane**, na czerwono, na liście i na swojej pinezce. Zobacz [Znajdź to, co ważne](topic:field-records#find-what-matters).
- **CSV i BCF.** {{ui:CSV}} zapisuje wymienione zapisy jako arkusz kalkulacyjny; {{ui:BCF}} zapisuje je jako tematy BCF, każdy z migawką jego miejsca na arkuszu. Oba podążają za filtrami. Zobacz [Eksport](topic:field-records#export).
- **Offline i dwie kopie scalone w jedną.** Zapisy są zapisywane wewnątrz PDF i nie potrzebują sieci, więc tablet na budowie może je dodawać, odpowiadać na nie i zapisywać. Po powrocie do biura {{ui:Scal}} łączy zapisy innej kopii tego samego PDF według ich identyfikatorów, jako jeden krok cofania. Zobacz [Zapis, praca offline i scalanie kopii](topic:field-records#save-offline-and-merging-copies).

### Asystenci AI

- **Więcej, co może zrobić asystent.** Twój własny asystent, połączony przez CadCraft Studio, może teraz ustawić status adnotacji (`markup_status`, zapisany w jej wątku), odpowiedzieć w wątku (`markup_reply`) i wyeksportować listę {{ui:Adnotacje}} jako CSV lub BCF (`markups_export`, to, co pokazuje lista z jej filtrami). Każda zmiana to jeden krok cofania, podpisany nazwą asystenta. Zobacz [O co może poprosić asystent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma po jednej liście dla długości, pola, objętości, kąta i spadku, z dokładnymi rozmiarami wynikającymi z definicji jednostek (stopa pomiarowa USA to osobna jednostka). Wyłącz jednostki, których nigdy nie używasz, a znikną z list jednostek; oznacz jedną gwiazdką, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. W MarkupCraft jednostki pomiaru i położenia w {{ui:Ustawienia}} › {{ui:MarkupCraft}} oraz jednostka w oknie kalibracji podążają za przełącznikami, gwiazdka ustawia jednostkę pomiaru, dopóki nie zapiszesz własnych ustawień MarkupCraft, a rzeczywista odległość wpisywana przy kalibracji może nosić oznaczenie dowolnej jednostki, na przykład `3 yd` lub `1.5 km`. Zobacz [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy panel boczny ma wąski pasek tytułu: przeciągnij go, aby zadokować lub oderwać panel, upuść na pasku innego panelu, aby dzielić jedną ramkę jako karty, przypnij, aby chował się przy krawędzi, albo ukryj go i przywołaj z krawędzi. Zobacz [Rozmieść panele](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu z drogi rysunku; wraca tam, gdzie je zostawiłeś(-aś). Kliknij dwukrotnie pasek tytułu, aby wyśrodkować je ponownie. Zobacz [Przesuń okno dialogowe](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć opisanych próśb do Twojego własnego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których potrzebuje, i każda odtwarzana przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz każde słowo aplikacji, jako wersje robocze jeszcze niesprawdzone przez rodzimego użytkownika języka. Tematy startowe pomocy są dostępne po polsku; pozostałe tematy pomocy są po angielsku.
- **CadCraft Studio** mówi, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla Twojego systemu, brak sieci, zły podpis) zamiast samego „Gotowe” i przestaje przywracać zamkniętą kartę Co nowego, dopóki nie ma nowszego wydania.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisane cyfrowo.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, bo walidacja certyfikatu jeszcze nie nadeszła. Sprawdź SHA-256 obok każdego pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij CadCraft Studio prawym przyciskiem i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w żadnym sklepie z aplikacjami i nie ma jeszcze wersji na iPada ani iPhone'a.
- Listy kątów i spadków w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- Zapisy terenowe nie są współdzielone w sesji Live CadCraft Studio (sesje Live niosą tylko adnotacje); łącz kopie za pomocą {{ui:Scal}}.
- Scalanie bierze zapis w całości z kopii zmienionej ostatnio: jeśli dwie osoby zmieniły różne pola jednego zapisu, wygrywają pola późniejszej kopii. Wątki i nazwy załączników są łączone.
- Załączniki to tylko nazwy; pliki zostają tam, gdzie są. Nie ma zespołów, powiadomień ani projektów w chmurze dla zapisów, a asystenci nie mają jeszcze narzędzi do zapisów.
- Zapisy terenowe przetestowano w przeglądarce w rozmiarach telefonu i tabletu z odciętą siecią, ale jeszcze nie ręcznie na prawdziwym tablecie.
- Nadal z 0.6: obracanie obiektów strony pod dowolnym kątem, rysowanie nowych kształtów bezpośrednio na stronie, zmiana czcionki lub rozmiaru linii oraz tekst zawijany na kilka wierszy. Zapisana kopia ze zmianami strony nie została jeszcze otwarta w Acrobacie.
- Nadal z 0.5: cofanie zmiany strony (na przykład dodania pustej strony), odczyt tekstu z zeskanowanych arkuszy oraz sesje Live poza Twoją własną siecią.

Wszystko inne jest w [Czego jeszcze nie zbudowano](topic:not-built-yet).

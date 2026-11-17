---
title: Rozwiązywanie problemów
summary: Komunikaty pokazywane przez MarkupCraft i co z nimi zrobić, a także poprawki rzeczy, które zdają się nie działać.
keywords: problem, błąd, nie działa, pomoc, komunikat, nie otwiera się, nie można zapisać, hasło, chroniony, pomiar odrzucony, kalibracja, offline, pusty, wolny, zagubione adnotacje, znaki zapytania
from: bb650b39
---

Większość problemów wyjaśnia pasek stanu na dole ekranu. Przeczytaj go najpierw.

## Otwieranie plików

**"MarkupCraft otwiera pliki PDF. "x" nie jest plikiem PDF."**
Wybrano albo upuszczono coś innego. Otwierane są tylko pliki PDF. Najpierw wyeksportuj rysunki z programu CAD jako PDF.

**'"name" wymaga hasła, aby go otworzyć. Otwórz niechronioną kopię.'**
Plik PDF jest chroniony hasłem. Poproś nadawcę o niechronioną kopię albo otwórz plik w programie PDF, gdzie znasz hasło, i zapisz kopię bez hasła.

**'"name" nie mógł zostać odczytany jako PDF (…)'**
Plik jest uszkodzony albo nie jest naprawdę plikiem PDF (niepełne pobranie, obcięty załącznik e-mail). Pobierz go ponownie. Jeśli inne programy PDF go otwierają, użyj w nich "zapisz jako", aby zrobić czystą kopię, i otwórz ją.

**"Niektórych plików nie udało się otworzyć"**
Gdy otwierasz kilka naraz, to okno wypisuje pliki, które się nie udały, i powód. Pozostałe są otwarte.

**"Czytnik PDF nie mógł załadować: …"**
Silnika PDF nie udało się pobrać. Online: przeładuj stronę i spróbuj ponownie; sprawdź, czy zapora lub blokada treści nie blokuje tej strony. Offline: MarkupCraft nie został zapisany do pracy offline w tej przeglądarce (pasek u góry nie mówi "Gotowe do pracy offline"). Połącz się z siecią, wybierz {{ui:Save for offline}} i poczekaj na "Gotowe do pracy offline". Zobacz [Praca offline](common:offline).

**"Niektóre adnotacje mogą pojawić się na ekranie dwa razy" albo "Nie udało się odczytać dodatkowych szczegółów adnotacji"**
Istniejące komentarze w pliku są nietypowe. Mimo to są otwierane tak dobrze, jak potrafi MarkupCraft; sprawdź je, zanim na nich polegasz. Zapisywanie nadal działa.

**Arkusz ma złą nazwę albo "strona 3"**
Zobacz [Jak arkusze dostają nazwy](topic:open-a-plan-set#how-sheets-get-their-names). Zeskanowane arkusze nie mają tekstu do odczytania; użyj {{ui:Rename sheet}}.

**Te same arkusze pojawiają się dwa razy**
Ten sam plik został otwarty dwukrotnie. Wybierz {{ui:Close}} (najpierw zapisz, jeśli trzeba) i otwórz zestaw ponownie.

## Rysowanie i zaznaczanie

**Nic się nie dzieje, gdy klikam na arkuszu**
Sprawdź, które narzędzie jest wciśnięte na pasku narzędzi, i przeczytaj pasek stanu. Przy {{ui:Rectangle}}, {{ui:Ellipse}} i {{ui:Cloud}} samo kliknięcie bez przeciągania nic nie rysuje: przeciągnij. Przy {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} i {{ui:Area}} są dodawane punkty: zakończ dwukrotnym kliknięciem albo {{key:Enter}}.

**"Wielokąt wymaga co najmniej 3 punktów." (albo 2 dla polilinii)**
Kliknij więcej punktów przed zakończeniem.

**"Nic nie wpisano, więc tekst nie został dodany."**
Pola tekstowe i wyniesienia są zachowywane tylko wtedy, gdy mają tekst. Narysuj je ponownie i wpisz tekst, zanim klikniesz poza nie.

**"Oba punkty są takie same. Kliknij dwa różne punkty."**
Przy liniach, strzałkach, długościach i kalibracji dwa końce muszą być od siebie oddalone. Przeciągnij albo kliknij dwa razy w różnych miejscach.

**Nie mogę przesunąć ani usunąć adnotacji; ma szare, przerywane pole**
To komentarz tylko do odczytu, który przyszedł z plikiem (na przykład zakreślenie tekstu). MarkupCraft zachowuje go bez zmian: możesz tylko na niego odpowiedzieć. Pasek stanu mówi: "adnotacje tylko do odczytu są zachowane tak jak w pliku".

**Moje klawisze wpisują litery w polu zamiast wybierać narzędzia**
Kursor jest w polu tekstowym (odpowiedź, pole w {{ui:Properties}}, wyszukiwanie w arkuszu). Najpierw kliknij puste miejsce w obszarze arkusza albo naciśnij {{key:Esc}}, jeśli edytujesz tekst adnotacji.

**Spacja nie przesuwa widoku, a klawisze strzałek nic nie robią**
Właśnie kliknąłeś przycisk paska narzędzi, więc wciąż ma on klawiaturę. Przeciągnij środkowym przyciskiem myszy albo kliknij arkusz raz, gdy {{ui:Select}} jest włączone, i spróbuj ponownie. Zobacz także [Klawiatura i mysz](topic:keyboard#when-a-key-does-nothing).

**Szczypnięcie na ekranie dotykowym zostawiło ślad**
Narzędzie przeciągania (pióro, chmura, prostokąt) zaczęło się, zanim pojawił się drugi palec, i zakończyło się, zanim je anulowano. Naciśnij {{ui:Undo}}. Stawiaj oba palce razem, gdy chcesz powiększyć.

## Pomiary

**"Najpierw skalibruj ten arkusz: wskaż dwa punkty w znanej odległości od siebie albo wybierz jego skalę. Potem zmierz."**
Każdy arkusz potrzebuje własnej skali, zanim użyjesz {{ui:Length}} albo {{ui:Area}}. MarkupCraft przełączył się na {{ui:Calibrate}}: kliknij dwa końce znanego wymiaru i wpisz jego długość albo kliknij przycisk skali na pasku stanu i wybierz skalę. Zobacz [Skalibruj arkusz i zmierz](topic:calibrate-and-measure).

**'To nie jest długość, którą rozumie MarkupCraft.'**
Wpisz ją tak, jak `24'-0"`, `12' 6 1/2"`, `7.2 m` albo `900 mm`. Zobacz [Jednostki, długości i skale](topic:units-and-scales).

**Pomiary są trochę niedokładne albo bardzo złe**
- Ustawiona skala na PDF, który nie jest w pełnym rozmiarze, mierzy źle. Zamiast tego kalibruj na długim, znanym wymiarze.
- Separator tysięcy został odczytany jako separator dziesiętny: `1,200 mm` oznacza 1.2 mm. Wpisz `1200 mm`.
- Powiększ widok, gdy klikasz końce.
- Rysunek może nie być w skali ("NTS").

**"Najpierw wybierz grupę liczenia, potem Shift+kliknij znacznik, aby go usunąć."**
Wybierz {{ui:Select}}, kliknij grupę liczenia, a następnie ponownie wybierz {{ui:Count}} i kliknij z {{key:Shift}} kropkę.

## Zapisywanie

**"Ten PDF jest chroniony (zaszyfrowany), więc nie można zapisać kopii z adnotacjami."**
Plik zabrania zmian. Poproś o niechronioną kopię. Tymczasem nadal możesz wyeksportować listę adnotacji jako CSV lub BCF.

**"Nie udało się załadować modułu zapisu PDF: …"**
Zwykle jesteś offline, a aplikacja nie została zapisana do pracy offline (brak "Gotowe do pracy offline" na pasku u góry). Twoje adnotacje nadal są w karcie: zostaw ją otwartą, połącz się z siecią i wybierz {{ui:Save}} ponownie. Potem wybierz {{ui:Save for offline}}, aby działało offline następnym razem; zapisana kopia zawiera moduł zapisu PDF.

**"Nie udało się zapisać <file>"**
Okno pokazuje powód. Twoje adnotacje nadal są w karcie. Spróbuj ponownie; jeśli się powtarza, wyeksportuj CSV, aby komentarze nie przepadły, i zgłoś komunikat.

**Wybrałem Zapisz, ale dotarł tylko jeden plik**
Przeglądarka zablokowała dodatkowe pobrania. Poszukaj komunikatu w pasku adresu i zezwól tej stronie na pobieranie wielu plików, a następnie zapisz ponownie.

**Nie mogę znaleźć zapisanego pliku**
Trafił do folderu pobranych w przeglądarce. Otwórz listę pobranych plików przeglądarki (w Chrome i Edge: {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; w Firefox i Safari przycisk pobierania na pasku narzędzi), aby zobaczyć, gdzie jest. Zobacz [Przeglądarki i komputery](common:browsers).

**Niektóre znaki pokazują się jako "?" w innych przeglądarkach PDF**
Znaki spoza zestawu zachodnioeuropejskiego są drukowane jako "?" w kopii. Komunikat zapisu je liczy. Zobacz [Zapisz PDF z adnotacjami](topic:save-the-marked-up-pdf).

**Pieczątka pokazuje jutrzejszą (albo wczorajszą) datę**
Daty pieczątek są w UTC. Zobacz [Pieczątki i notatki przylepne](topic:stamps-and-notes).

## Praca offline

**Przycisk offline mówi "Could not save"**
Niektóre pliki aplikacji się nie pobrały. Sprawdź połączenie i kliknij przycisk ponownie; licznik pokazuje "Saving N of M", aż pojawi się "Offline ready".

**Przycisk offline mówi "Offline not available"**
To okno przeglądarki nie może zachować kopii offline: okno prywatne albo komputer, którego zasady to blokują. Otwórz MarkupCraft w zwykłym oknie i spróbuj ponownie.

**Offline aplikacja jest starszą wersją**
Kopia offline to wersja, którą zapisałeś. Gdy jesteś online, kliknij "Offline ready" i wybierz "Save again (get the newest version)". Aby zwolnić miejsce, wybierz "Remove the offline copy". Zobacz [Praca offline](common:offline).

**Pomoc się nie otwiera**
Naciśnij {{key:F1}} (na Macu z **fn**) albo wybierz {{ui:Help}} na pasku u góry. Działa też offline.

## Zagubione rzeczy

**Moje adnotacje zniknęły po zamknięciu lub przeładowaniu karty**
Otwórz MarkupCraft ponownie w tej samej przeglądarce: zaproponuje niezapisaną pracę z pytaniem "Recover your work?". Wybierz {{ui:Recover}} i zapisz PDF. Kopie są przechowywane do 30 dni; okno prywatne albo wyczyszczenie danych strony nie zostawia żadnej. Zobacz [Odzyskiwanie pracy](common:recover).

**Moje imię, ustawienia narzędzi albo skrzynka z narzędziami zniknęły**
Są zachowywane tylko w tej przeglądarce i zostały wyczyszczone (wyczyszczono dane strony, okno prywatne, inna przeglądarka lub komputer albo czyszczenie Safari stron, których dawno nie odwiedzano). Ustaw imię ponownie i zaimportuj wyeksportowaną skrzynkę. Zobacz [Co zostaje w tej przeglądarce](topic:browser-storage).

**"Skrzynki z narzędziami nie udało się zachować w tej przeglądarce (przechowywanie jest wyłączone lub pełne). Wyeksportuj ją, aby ją zachować."**
Przeglądarka odmawia zapisywania danych tej strony (tryb prywatny, przechowywanie zablokowane ustawieniem lub zasadami, albo pełne). Wyeksportuj skrzynkę po zmianie i zaimportuj ją następnym razem.

## Wyświetlanie i szybkość

**Arkusz przez chwilę wygląda na rozmazany**
MarkupCraft pokazuje szybki, przybliżony obraz podczas powiększania lub przesuwania i rysuje go ostro ponownie chwilę po zatrzymaniu.

**Wszystko działa wolno przy dużym zestawie**
Zamknij inne ciężkie karty, otwieraj mniej plików naraz i unikaj powiększania do maksimum na ogromnych arkuszach. Zobacz [Praca z kilkoma plikami naraz](topic:several-files#big-sets).

**Arkusz jest ciemny z jasnymi liniami**
Jesteś w motywie {{ui:Model}}. Wybierz {{ui:Paper}} na pasku u góry, aby mieć ciemne linie na białym tle. Twoje adnotacje i zapisany PDF nie są zmieniane.

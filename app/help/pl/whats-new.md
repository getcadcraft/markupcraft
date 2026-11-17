---
title: Co nowego w 0.9
summary: Notatki i tablica, które nigdy się nie drukują, zaszyfrowane notatki prywatne i czysta kopia dla klienta, zbiorcze łącza dla całego zestawu rysunków, narzędzie Łuk z dziesięcioma metodami, śledzenie innego recenzenta w Live oraz poprawka usuniętych adnotacji, które zostawały w zapisanym PDF.
keywords: co nowego, 0.9, informacje o wydaniu, dziennik zmian, notatki, tablica, notatki prywatne, hasło, zaszyfrowane, ukryj notatki, pokaż notatki, czysta kopia, migawka, zbiorcze łącza, wyniesienia arkuszy, łącz arkusze, blok tytułowy, numer arkusza, dodatek, przenumerowanie, łącze PDF, łuk, metody łuku, łuk trzypunktowy, promień, podążaj, podążaj za mną, live, widok klas, lista osób, usunięta adnotacja, dymki, tytuły kart, co nowego, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, zadanie, zadania, przypisany, dzień terminu, po terminie, sprawdź teraz, co się zmieniło, rewizje, porównaj, notatka głosowa, decyzja, redline, plik odpowiedzi, rysownik, asystent, MCP, problemy, języki, urządzenia wejściowe, gładzik, wiersze paska narzędzi, siatka właściwości, aktualizacja
from: dbdd7ed4
---

To jest lista zmian w MarkupCraft 0.9 w porównaniu z 0.8.1. Główna idea: twoje robocze notatki zostają poza arkuszem, który dostaje klient, a cały zestaw rysunków można połączyć w jednym przebiegu.

## Nowe

### Notatki, tablica i notatki prywatne

- **Tablica.** Obszar wokół każdego arkusza jest jak biurko: wszystko, co narysujesz, wpiszesz lub wkleisz obok arkusza, jest notatką i nigdy się nie drukuje. Wybierz {{ui:Pokaż tablicę}}, aby oddalić widok i zyskać miejsce, albo {{ui:Zrzut na tablicę}}, przeciągnij prostokąt, a następnie {{ui:Na tablicę}}, aby umieścić obraz fragmentu rysunku obok arkusza. Zrzut to obraz i nie zmienia się, gdy zmienia się arkusz. Zobacz [Notatki, tablica i notatki prywatne](topic:notes-and-pasteboard).
- **Pokazywanie i ukrywanie notatek.** Każda adnotacja może być notatką: ustaw {{ui:Nowe adnotacje to}} w karcie {{ui:Notatki}} albo {{ui:Ta adnotacja to}} we {{ui:Właściwościach}}. {{key:Shift+H}} lub przełącznik {{ui:Notatki}} pod arkuszem ukrywa i pokazuje wszystkie notatki naraz. Notatki są pomijane przy drukowaniu, spłaszczonych kopiach, listach i eksportach, a inne czytniki PDF ich nie pokazują. Zapisany PDF zachowuje je dla następnego otwarcia w MarkupCraft.
- **Notatki prywatne.** Wybierz {{ui:Ustaw hasło}}, a następnie ustaw adnotację jako {{ui:Notatka prywatna}}. Jest szyfrowana w pliku hasłem o długości co najmniej 10 znaków, i nie ma odzyskiwania: nikt, także my, nie otworzy jej bez hasła. {{ui:Zablokuj}} chowa notatki prywatne; {{ui:Pozostaw odblokowane na tym urządzeniu}} jest domyślnie wyłączone.
- **Zapisz czystą kopię.** {{ui:Zapisz czystą kopię}} usuwa wszystkie notatki, notatki prywatne i wszystko z tablicy. Użyj jej dla pliku, który trafia do klienta.

### Łączenie całego zestawu

- **Zbiorcze łącza.** Wybierz {{ui:Strony}} › {{ui:Zbiorcze łącza…}} albo {{ui:Połącz odwołania do arkuszy…}} pod {{ui:Znajdź tekst}} w panelu {{ui:Arkusze}}. Krok 1 wypisuje numer i nazwę każdego arkusza odczytane z jego bloku tytułowego; popraw te, które są błędne. Krok 2 wypisuje znalezione odwołania, na przykład `3/A-501` albo `DETAIL 2 ON A-501`. {{ui:Zostanie połączone}} pokazuje arkusz i widok dla każdego z nich, {{ui:Nie połączono}} pokazuje numery, których żaden otwarty arkusz nie ma, a {{ui:Utwórz linki}} tworzy je wszystkie w jednym kroku cofnięcia. Uruchom ponownie po dodatku lub przenumerowaniu; łączy, które wykonałeś ręcznie, nigdy nie są zmieniane. Łącze z widokiem jest zapisywane jako łącze PDF, więc inne czytniki też otwierają szczegół. Zobacz [Łącza arkuszy](topic:sheet-links).

### Rysowanie

- **Łuk, dziesięć metod.** Narzędzie {{ui:Łuk}} ({{key:O}}) ma teraz pole {{ui:Metoda łuku}} nad stroną z dziesięcioma sposobami rysowania łuku; kąt, długość, promień i kierunek można kliknąć lub wpisać. Zobacz [Narysuj łuk na dziesięć sposobów](topic:draw-an-arc).

### Praca razem

- **Podążanie za recenzentem.** W sesji Live wybierz {{ui:Podążaj}} obok imienia osoby, a twój widok przesunie się razem z jej widokiem; własne przesuwanie lub zoom zatrzymuje to. Gospodarz może wybrać {{ui:Poproś wszystkich, aby podążali za mną}}. Lista osób pokazuje kolor, imię każdej osoby, arkusz, na którym jest, i kiedy była jej ostatnia edycja. Zobacz [Podążanie za innym recenzentem w sesji Live](topic:follow-in-live).

## We wszystkich aplikacjach

- Podpowiedzi to dymki Bootstrap, można zamknąć podpowiedź startową, paski kart przewijają się, gdy się przepełnią, a tytuły kart przeglądarki mają postać `<dokument> — MarkupCraft | CadCraft`.
- Panel z kilkoma sekcjami otwiera jedną i zamyka pozostałe (kłódka obok strzałki zostawia jedną otwartą); przełącznik w Ustawieniach to wyłącza.
- Każda aplikacja uruchamia się z domyślnym zbiorem obiektów Biblioteki.
- Jednostki masy i temperatury są dostępne w ustawieniach Jednostek.

## Poprawki

- **Usunięte adnotacje nie pozostają już czytelne w zapisanym PDF.** Zapis wcześniej usuwał usuniętą lub przepisaną adnotację ze strony, ale zostawiał obiekt wraz z jej tekstem w pliku. Teraz zapis usuwa te obiekty. Pliki zapisane wcześniejszymi wersjami nadal je zawierają, dopóki nie zapiszesz ich ponownie.

## Ograniczenia, o których warto wiedzieć

- Zbiorcze łącza wypróbowano na naszych własnych zestawach testowych. Prawdziwe zestawy rysują dymki na wiele sposobów, więc na zestawie klienta niektóre widoki mogą zostać pominięte. Skanowane arkusze wymagają najpierw {{ui:Odczytaj tekst (OCR)…}}.
- Notatki, notatki prywatne i tablicę testowano w przeglądarce bez interfejsu i na naszych plikach, a nie na dużym, prawdziwym zestawie wektorowym i nie w prawdziwej dwuosobowej sesji Live. Zmiana hasła nie jest jeszcze zbudowana. Wersje starsze niż 0.9 nie pokazują notatek.
- Widok klas to lista osób; nie został wypróbowany z prawdziwym nauczycielem i uczniami.
- Języki inne niż angielski to wersje robocze wygenerowane maszynowo, dopóki nie przeczyta ich rodzimy użytkownik.
- Instalatory Windows nie są podpisane kodem (Więcej informacji, a potem Uruchom mimo to); obraz dysku macOS nie jest notaryzowany (kliknij prawym, a potem Otwórz).

## Wcześniej: 0.8 i 0.8.1

To jest lista zmian w MarkupCraft 0.8 i 0.8.1 w porównaniu z 0.7. Najważniejsza nowość: adnotacja może być zadaniem, które wykonuje ktoś albo twój własny asystent, i które zamyka się samo, gdy rysunek naprawdę się zmieni.

### Nowe

**Adnotacje, które działają**

- **Zrób z adnotacji zadanie.** Zaznacz jedną lub więcej adnotacji, otwórz kartę {{ui:Zadania}} i wybierz {{ui:Zrób z zaznaczonych zadanie}}. Zadanie ma tytuł, osobę albo połączonego asystenta do wykonania, opcjonalny dzień terminu i stan; zachowuje swoje miejsce na arkuszu oraz swój wątek. Zobacz [Zrób z adnotacji zadanie](topic:markups-that-act).
- **Zadania, które zamykają się same.** Zadanie może obserwować rysunek wewnątrz swojej adnotacji. Otwórz nowszą rewizję arkusza i wybierz {{ui:Sprawdź teraz}}: jeśli linie w tym obszarze zmieniły się o więcej niż włos, zadanie zostaje oznaczone jako wykonane, jego adnotacja staje się Completed, a notatka w wątku mówi, co się zmieniło. Nowa pieczątka daty albo linie przesunięte o mniej niż 1.5 punktu się nie liczą. Zadanie może zamiast tego obserwować element modelu: twój asystent zgłasza element narzędziem `tasks_check`, a późniejszy raport, który się różni, lub usunięty element zamykają zadanie. Jeden krok cofnięcia je otwiera ponownie.
- **Znajdź pracę.** Filtruj listę {{ui:Zadania}} według stanu i tego, dla kogo jest, w tym {{ui:Po terminie}}; wybierz {{ui:Przypisane do}}, a potem {{ui:Asystent}}, aby zobaczyć, co czeka na twojego asystenta. Zadanie po dniu terminu pokazuje się jako ostrzeżenie w panelu Problemy. {{ui:CSV}} eksportuje listę. Zadania są zapisywane w PDF razem z adnotacją i przechodzą przez Live jak inne właściwości adnotacji.

**Co się zmieniło, jako zwykła lista**

- **Wypisz zmiany.** Otwórz kartę {{ui:Porównaj}}, a następnie {{ui:Porównaj cały zestaw}}, wybierz wcześniejszy i późniejszy plik i wybierz {{ui:Wypisz zmiany}}. Lista zaczyna się od liczby, a potem obejmuje każdy zmieniony arkusz, zaczynając od największej zmiany: gdzie na arkuszu, jak duża (w jednostkach rzeczywistych, a także w calach papieru na wyskalowanym arkuszu), czy dodano lub usunięto linie, ile adnotacji tam leży i które słowa się pojawiły lub zniknęły. {{ui:Kopiuj listę}} umieszcza ją w schowku, a {{ui:CSV}} zapisuje jeden wiersz na zmianę. Zobacz [Lista zmian między rewizjami](topic:what-changed-in-words).

**Notatki głosowe i decyzje**

- **Notatki głosowe.** W karcie {{ui:Notatki}} wybierz {{ui:Nagraj notatkę głosową}}, a następnie {{ui:Zatrzymaj nagrywanie}}; nagrywanie zatrzymuje się samo po dwóch minutach. Notatka jest przypięta do środka arkusza, przeciągasz ją tam, gdzie powinna być, a podpis wpisujesz we {{ui:Właściwościach}}; {{ui:Odtwórz}} na liście odtwarza ją. Nagranie jest zapisywane w PDF.
- **Decyzje.** {{ui:Przypnij decyzję}} zapisuje na arkuszu zdanie lub dwa. Jeśli zastępuje wcześniejszą decyzję, wybierz ją w {{ui:Zastępuje}}: stara zostaje, oznaczona jako Replaced, i wskazuje na nową. Jeden krok cofnięcia ją przywraca. Zobacz [Przypinanie notatek głosowych i decyzji na arkuszu](topic:voice-notes-and-decisions).

**Redline do rewizji**

- **Wyślij i odpowiedz.** W karcie {{ui:Zadania}} otwórz {{ui:Redline do rewizji}}, wpisz rewizję, do której odnoszą się adnotacje, i wybierz {{ui:Eksportuj plik redline}}. Dostajesz plik `.redline.json` z jedną pozycją na każdą otwartą adnotację: arkusz, położenie (jako ułamki arkusza, więc ponowny wydruk w innym rozmiarze nadal się zgadza), słowa, autor, wątek i jego zadanie. Osoba, która rysuje zmiany, odpowiada Accepted, Rejected lub Done w pliku `.redline-answers.json`; {{ui:Wczytaj plik z odpowiedziami…}} nadaje każdej adnotacji ten status i notatkę rysownika, jako jeden krok cofnięcia. Zobacz [Wysyłanie adnotacji do rysownika jako redline](topic:redline-to-revision).

**Asystenci AI**

- **Więcej narzędzi.** Asystent połączony przez CadCraft Studio może wypisać zadania (`tasks_list`), utworzyć lub zmienić jedno (`task_set`), zdjąć zadanie (`task_clear`), sprawdzić je względem nowszej rewizji lub elementu (`tasks_check`) oraz odczytać zwykłą listę zmian między dwoma otwartymi zestawami arkuszy (`revisions_changes`). Dostaje tylko narzędzia zaznaczone pod przełącznikiem Asystenci, a każda zmiana to jeden krok cofnięcia. Zobacz [Używanie MarkupCraft z asystentem AI](topic:use-with-ai-assistants).

### We wszystkich aplikacjach

- **Języki.** CadCraft Studio ma teraz 54 języki. Dziesięć jest nowych: litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki. Wszystkie języki inne niż angielski to wersje robocze wygenerowane maszynowo, dopóki nie przeczyta ich rodzimy użytkownik.
- **Urządzenia wejściowe.** {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Urządzenia wejściowe}} określa, co robi gładzik, boczne przyciski myszy, pióro, dotknięcia palcem, mysz 3D, kontroler do gier lub kontroler MIDI, dla każdej aplikacji albo tylko dla tej jednej. Dopóki czegokolwiek nie zmienisz, każde urządzenie działa jak dotąd. Zobacz [Używanie gładzika, myszy 3D lub kontrolera](common:input-devices).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} ma opcje {{ui:Zawijaj}} (domyślna), {{ui:2 wiersze}} i {{ui:1 wiersz}}, dzięki czemu rysunek ma więcej miejsca. Zobacz [Ułóż panele](common:arrange-panels).
- **Siatka właściwości.** Pola Stylu adnotacji korzystają ze wspólnej siatki, z zwijanymi kategoriami oraz kolumnami etykiet i wartości.
- **Panel Problemy.** Ostrzeżenia z aplikacji, na przykład przeterminowane zadanie, zbierają się w jednym panelu Problemy.
- **Sesje Live i dodatki.** Sesje Live są opisane w [Pracuj razem na żywo](common:work-together-live); lista dodatków, które podążają za twoim kontem, znajduje się w [Dodatki i lista konta](common:addons-basics).
- **Połącz swojego AI.** CadCraft Studio jest centrum dla twojego własnego asystenta: połącz raz dla wszystkich ośmiu aplikacji. Aplikacje same nie zawierają AI.

### Poprawki w 0.8.1

- **Studio może zmienić język w trakcie działania.** Wcześniej aplikacja na komputer i pakietowane wydania zostawały po angielsku. Nie jest to jeszcze przetestowane na każdej platformie: daj znać, jeśli język się nie zmienia.
- Instalacje Studio 0.8 dostają ofertę aktualizacji do 0.8.1 w {{ui:Ustawienia}} › {{ui:Aktualizacje}}.

### Jeszcze nie w tej wersji

- **Brak podpisu kodem.** Instalatory Windows i obraz dysku .dmg dla macOS nie mają jeszcze podpisu. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. Wersje sklepowe są wstrzymane.
- **Połączenie z AI jest w niektórych miejscach niedokończone.** Połączenie jednym kliknięciem w Studio, hostowany łącznik dla asystentów w przeglądarce i własny klucz API w Studio nie są obiecane w tym wydaniu. Pętla zadań została przetestowana, ale jeszcze nie z prawdziwym asystentem.
- **Sprawdzanie zadań wymaga tego samego rozmiaru strony.** Arkusz wydrukowany ponownie w innym rozmiarze się nie zgadza, więc jego zadania się nie zamykają. Arkusze są parowane według numeru arkusza, a jeśli go brak, według pozycji na stronie.
- **Notatki głosowe to tylko nagrania.** Nie ma transkrypcji, a asystent widzi długość notatki, autora i podpis, a nie dźwięk. Nagrywanie testowano z fałszywym mikrofonem w przeglądarce bez interfejsu; prawdziwy mikrofon w telefonie, tablecie lub laptopie wciąż trzeba sprawdzić.
- **Arkusze obliczeń i uzasadnienia w PDF** są przechowywane w prywatnym wpisie pliku. Starszy MarkupCraft ignoruje ten wpis i usuwa go przy następnym zapisie pliku, więc otwieraj i zapisuj taki plik w wersji 0.8 lub nowszej.
- **Po stronie rysownika redline.** Odczytywanie pliku redline przez CadCraft i odpowiadanie na niego nie jest jeszcze zbudowane.
- **Inne języki.** Pasek aplikacji w języku tamilskim wychodzi poza ekran o 528 px.

Wszystko inne znajduje się w [Czego jeszcze nie zbudowano](topic:not-built-yet). Wydanie poprzedzające to, zobacz [Co nowego w 0.7](topic:whats-new-0-7).

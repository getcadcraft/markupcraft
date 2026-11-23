---
title: Co nowego w 0.9 (wcześniej)
summary: Notatki i tablica, które nigdy się nie drukują, zaszyfrowane notatki prywatne i czysta kopia dla klienta, zbiorcze łącza dla całego zestawu rysunków, narzędzie Łuk z dziesięcioma metodami, podążanie za innym recenzentem w Live oraz poprawka usuniętych adnotacji pozostających w zapisanym PDF.
keywords: co nowego 0.9, wcześniejsze wydanie, co nowego, 0.9, informacje o wydaniu, dziennik zmian, notatki, tablica, notatki prywatne, hasło, zaszyfrowane, ukryj notatki, pokaż notatki, czysta kopia, zrzut, zbiorcze łącza, odwołania do arkuszy, połącz arkusze, tabliczka rysunkowa, numer arkusza, addendum, przenumerowanie, link pdf, łuk, metody łuku, łuk trzypunktowy, promień, podążaj, podążaj za mną, live, widok klasy, lista osób, usunięta adnotacja, podpowiedzi, nazwy kart, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, zadanie, zadania, przypisany, termin, po terminie, sprawdź teraz, co się zmieniło, rewizje, porównaj, notatka głosowa, decyzja, redline, plik z odpowiedziami, rysownik, asystent, mcp, problemy, języki, urządzenia wejściowe, gładzik, wiersze paska narzędzi, siatka właściwości, aktualizacja
from: aa3dfeb8
---

To jest lista zmian w MarkupCraft 0.9 w porównaniu z 0.8.1. Najważniejsza idea: Twoje notatki robocze nie trafiają na stronę, którą dostaje klient, a cały zestaw rysunków można połączyć w jednym przebiegu.

## Nowe

### Notatki, tablica i notatki prywatne

- **Tablica.** Obszar wokół każdego arkusza to biurko: wszystko, co narysowano, napisano lub wklejono obok arkusza, jest notatką i nigdy się nie drukuje. Wybierz {{ui:Pokaż tablicę}}, aby oddalić widok, albo {{ui:Zrzut na tablicę}}, przeciągnij prostokąt, a potem wybierz {{ui:Na tablicę}}, aby umieścić obraz fragmentu rysunku obok arkusza. Zrzut to obraz i nie zmienia się, gdy zmienia się arkusz. Zobacz [Notatki, tablica i notatki prywatne](topic:notes-and-pasteboard).
- **Pokazywanie i ukrywanie notatek.** Każda adnotacja może być notatką: ustaw {{ui:Nowe adnotacje to}} w karcie {{ui:Notatki}} albo {{ui:Ta adnotacja to}} we {{ui:Właściwościach}}. {{key:Shift+H}} albo przełącznik {{ui:Notatki}} pod arkuszem ukrywa i pokazuje wszystkie notatki naraz. Notatki są pomijane przy drukowaniu, spłaszczonych kopiach, listach i eksportach, a inne czytniki PDF ich nie pokazują. Zapisany plik PDF zachowuje je na następny raz, gdy otworzysz go w MarkupCraft.
- **Notatki prywatne.** Wybierz {{ui:Ustaw hasło}}, a następnie ustaw adnotację jako {{ui:Notatka prywatna}}. Jest ona zaszyfrowana w pliku hasłem o długości co najmniej 10 znaków i nie ma odzyskiwania: nikt, w tym my, nie otworzy jej bez hasła. {{ui:Zablokuj}} chowa notatki prywatne; {{ui:Pozostaw odblokowane na tym urządzeniu}} jest domyślnie wyłączone.
- **Zapisz czystą kopię.** {{ui:Zapisz czystą kopię}} usuwa wszystkie notatki, notatki prywatne i wszystko na tablicy. Użyj jej dla pliku, który trafia do klienta.

### Połącz cały zestaw

- **Zbiorcze łącza.** Wybierz {{ui:Strony}} › {{ui:Zbiorcze łącza…}} albo {{ui:Połącz odwołania do arkuszy…}} pod {{ui:Znajdź tekst}} w panelu {{ui:Arkusze}}. Krok 1 wypisuje numer i nazwę każdego arkusza, odczytane z jego tabliczki rysunkowej; popraw te, które są błędne. Krok 2 wypisuje znalezione odwołania, na przykład `3/A-501` lub `DETAIL 2 ON A-501`. {{ui:Zostanie połączone}} pokazuje arkusz i widok dla każdego z nich, {{ui:Nie połączone}} pokazuje numery, których nie ma żaden otwarty arkusz, a {{ui:Utwórz linki}} tworzy je wszystkie jednym krokiem cofnięcia. Uruchom ponownie po addendum lub przenumerowaniu; linki zrobione ręcznie nigdy nie są zmieniane. Link z widokiem zapisuje się jako link PDF, więc inne czytniki też otwierają detal. Zobacz [Linki między arkuszami](topic:sheet-links).

### Rysowanie

- **Łuk, dziesięć metod.** Narzędzie {{ui:Łuk}} ({{key:O}}) ma teraz nad stroną pole {{ui:Metoda łuku}} z dziesięcioma sposobami rysowania łuku; kąt, długość, promień i kierunek można wskazać kliknięciem albo wpisać. Zobacz [Narysuj łuk dziesięcioma sposobami](topic:draw-an-arc).

### Praca razem

- **Podążanie za recenzentem.** W sesji Live wybierz {{ui:Podążaj}} obok imienia osoby, a Twój widok przesuwa się razem z jej widokiem; własne przesuwanie lub powiększanie zatrzymuje to. Gospodarz może wybrać {{ui:Poproś wszystkich, aby podążali za mną}}. Lista osób pokazuje kolor, imię każdej osoby, arkusz, na którym jest, i czas jej ostatniej edycji. Zobacz [Podążanie za innym recenzentem w sesji Live](topic:follow-in-live).

## We wszystkich aplikacjach

- Podpowiedzi to podpowiedzi Bootstrap, podpowiedź startową można zamknąć, paski kart przewijają się, gdy się przepełnią, a tytuły kart w przeglądarce mają postać `<dokument> — MarkupCraft | CadCraft`.
- Panel z kilkoma sekcjami otwiera jedną i zamyka pozostałe (blokada obok kursora zostawia jedną otwartą); przełącznik w ustawieniach to wyłącza.
- Każda aplikacja startuje z domyślnym zestawem obiektów biblioteki.
- Jednostki masy i temperatury są dostępne w ustawieniach jednostek.

## Naprawiono

- **Usunięte adnotacje nie są już czytelne w zapisanym PDF.** Zapis wcześniej usuwał usuniętą lub przepisaną adnotację ze strony, ale zostawiał obiekt wraz z tekstem w pliku. Teraz zapis usuwa te obiekty. Pliki zapisane wcześniejszymi wersjami nadal je zawierają, dopóki nie zapiszesz ich ponownie.

## Uczciwie o ograniczeniach

- Zbiorcze łącza testowano na naszych własnych zestawach testowych. Prawdziwe zestawy rysują dymki na wiele sposobów, więc w zestawie klienta niektóre widoki mogą zostać pominięte. Skanowane arkusze wymagają wcześniej {{ui:Odczytaj tekst (OCR)…}}.
- Notatki, notatki prywatne i tablicę testowano w przeglądarce bez interfejsu (headless) i na naszych własnych plikach, nie na dużym prawdziwym pliku wektorowym i nie w prawdziwej dwuosobowej sesji Live. Zmiana hasła nie jest zrobiona. Wersje starsze niż 0.9 nie pokazują notatek.
- Widok klasy to lista osób; nie był testowany z prawdziwym nauczycielem i uczniami.
- Języki inne niż angielski to wersje robocze tłumaczone maszynowo, dopóki nie przeczyta ich rodzimy użytkownik języka.
- Instalatory Windows nie mają podpisu cyfrowego (Więcej informacji, a następnie Uruchom mimo to); obraz dysku macOS nie jest notaryzowany (kliknij prawym przyciskiem, a następnie Otwórz).

## Wcześniej: 0.8 i 0.8.1

To jest lista zmian w MarkupCraft 0.8 i 0.8.1 w porównaniu z 0.7. Najważniejsza nowość: adnotacja może być zadaniem, które wykonuje ktoś albo Twój asystent, i które zamyka się samo, gdy rysunek naprawdę się zmieni.

### Nowe

**Adnotacje, które działają**

- **Zrób z adnotacji zadanie.** Zaznacz jedną lub więcej adnotacji, otwórz kartę {{ui:Zadania}} i wybierz {{ui:Zrób z zaznaczonych zadanie}}. Zadanie ma tytuł, osobę albo podłączonego asystenta do wykonania, opcjonalny termin i stan; zachowuje swoje miejsce na arkuszu i swój wątek. Zobacz [Zrób z adnotacji zadanie](topic:markups-that-act).
- **Zadania, które same się zamykają.** Zadanie może obserwować rysunek wewnątrz swojej adnotacji. Otwórz nowszą rewizję arkusza i wybierz {{ui:Sprawdź teraz}}: jeśli linie w tym obszarze zmieniły się o więcej niż włos, zadanie zostaje oznaczone jako Gotowe, jego status zmienia się na Zakończony, a notatka w wątku mówi, co się zmieniło. Nowa pieczątka z datą ani linie przesunięte o mniej niż 1,5 punktu nie liczą się. Zadanie może zamiast tego obserwować element modelu: asystent zgłasza element poleceniem `tasks_check`, a późniejsze, różniące się zgłoszenie albo usunięty element zamyka zadanie. Jeden krok cofnięcia je ponownie otwiera.
- **Znajdź pracę.** Filtruj listę {{ui:Zadania}} według stanu i tego, dla kogo jest, w tym {{ui:Po terminie}}; wybierz {{ui:Przypisane do}}, a potem {{ui:Asystent}}, aby zobaczyć, co czeka na Twojego asystenta. Zadanie po terminie pokazuje się jako ostrzeżenie w panelu Problemy. {{ui:CSV}} eksportuje listę. Zadania są zapisywane w PDF razem z adnotacją i przechodzą przez Live jak inne właściwości adnotacji.

**Co się zmieniło, zwykłą listą**

- **Wypisz zmiany.** Otwórz kartę {{ui:Porównaj}}, potem {{ui:Porównaj cały zestaw}}, wybierz wcześniejszy i późniejszy plik i wybierz {{ui:Wypisz zmiany}}. Lista zaczyna się od liczby, a potem opisuje każdy zmieniony arkusz, zaczynając od największej zmiany: gdzie na arkuszu, jak duża (w jednostkach rzeczywistych, a także w calach papieru na skalibrowanym arkuszu), czy linie zostały dodane czy usunięte, ile adnotacji tam leży i które słowa się pojawiły lub zniknęły. {{ui:Kopiuj listę}} umieszcza ją w schowku, a {{ui:CSV}} zapisuje jeden wiersz na zmianę. Zobacz [Lista tego, co zmieniło się między rewizjami](topic:what-changed-in-words).

**Notatki głosowe i decyzje**

- **Notatki głosowe.** W karcie {{ui:Notatki}} wybierz {{ui:Nagraj notatkę głosową}}, a potem {{ui:Zatrzymaj nagrywanie}}; nagrania zatrzymują się same po dwóch minutach. Notatka jest przypięta do środka arkusza; przeciągasz ją tam, gdzie ma być, a podpis wpisujesz we {{ui:Właściwościach}}. {{ui:Odtwórz}} na liście ją odtwarza. Nagranie jest zapisane w PDF.
- **Decyzje.** {{ui:Przypnij decyzję}} zapisuje na arkuszu zdanie lub dwa. Jeśli zastępuje wcześniejszą decyzję, wybierz tamtą w {{ui:Zastępuje}}: stara zostaje, oznaczona jako Zastąpiona, i wskazuje na nową. Jeden krok cofnięcia ją cofa. Zobacz [Przypinanie notatek głosowych i decyzji na arkuszu](topic:voice-notes-and-decisions).

**Redline do rewizji**

- **Wyślij i odpowiedz.** W karcie {{ui:Zadania}} otwórz {{ui:Redline do rewizji}}, wpisz rewizję, do której odnoszą się adnotacje, i wybierz {{ui:Eksportuj plik redline}}. Dostajesz plik `.redline.json` z jedną pozycją na każdą otwartą adnotację: arkusz, położenie (jako ułamki arkusza, więc ponowny wydruk w innym rozmiarze nadal się zgadza), słowa, autor, wątek i jej zadanie. Osoba rysująca zmiany odpowiada statusem Zaakceptowany, Odrzucony lub Gotowe w pliku `.redline-answers.json`; {{ui:Wczytaj plik z odpowiedziami…}} nadaje każdej adnotacji ten status i uwagę rysownika, jako jeden krok cofnięcia. Zobacz [Wysyłanie adnotacji do rysownika jako redline](topic:redline-to-revision).

**Asystenci AI**

- **Więcej narzędzi.** Asystent podłączony przez CadCraft Studio może wypisać zadania (`tasks_list`), utworzyć lub zmienić jedno (`task_set`), zdjąć zadanie (`task_clear`), sprawdzić je względem nowszej rewizji albo elementu (`tasks_check`) i odczytać zwykłą listę zmian między dwoma otwartymi zestawami planów (`revisions_changes`). Dostaje tylko narzędzia zaznaczone w przełączniku Asystenci, a każda zmiana to jeden krok cofnięcia. Zobacz [Używanie MarkupCraft z asystentem AI](topic:use-with-ai-assistants).

### We wszystkich aplikacjach

- **Języki.** CadCraft Studio ma teraz 54 języki. Dziesięć z nich jest nowych: litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki. Wszystkie języki inne niż angielski są wersjami roboczymi tłumaczonymi maszynowo, dopóki nie przeczyta ich rodzimy użytkownik.
- **Urządzenia wejściowe.** {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Urządzenia wejściowe}} określa, co robi gładzik, boczne przyciski myszy, rysik, dotknięcia palcem, mysz 3D, kontroler do gier albo kontroler MIDI, dla każdej aplikacji albo tylko dla tej jednej. Dopóki nic nie zmienisz, każde urządzenie działa jak dotąd. Zobacz [Używanie gładzika, myszy 3D lub kontrolera](common:input-devices).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} ma opcje {{ui:Zawijaj}} (domyślną), {{ui:2 wiersze}} i {{ui:1 wiersz}}, dzięki czemu rysunek ma więcej miejsca. Zobacz [Ustawianie paneli](common:arrange-panels).
- **Siatka właściwości.** Pola stylu adnotacji korzystają ze wspólnej siatki ze zwijanymi kategoriami oraz kolumnami etykiet i wartości.
- **Panel Problemy.** Ostrzeżenia z aplikacji, na przykład zadanie po terminie, gromadzą się w jednym panelu Problemy.
- **Live i dodatki.** Sesje Live są opisane w [Praca razem w Live](common:work-together-live); lista dodatków przypisana do Twojego konta jest w [Dodatki i lista konta](common:addons-basics).
- **Podłącz własnego asystenta AI.** CadCraft Studio to centrum dla Twojego asystenta: podłącz go raz dla wszystkich ośmiu aplikacji. Same aplikacje nie mają własnej AI.

### Naprawiono w 0.8.1

- **Studio może zmienić język w trakcie działania.** Wcześniej aplikacja desktopowa i spakowane wersje zostawały po angielsku. Nie zostało to jeszcze przetestowane na każdej platformie: daj nam znać, jeśli język się nie zmienia.
- Instalacje Studio 0.8 dostają 0.8.1 przez {{ui:Ustawienia}} › {{ui:Aktualizacje}}.

### Nie ma jeszcze w tej wersji

- **Brak podpisu cyfrowego.** Instalatory Windows i plik .dmg dla macOS nie mają jeszcze podpisu. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. Wersje sklepowe są wstrzymane.
- **Podłączanie AI jest w niektórych miejscach niedokończone.** Podłączanie jednym kliknięciem w Studio, hostowany łącznik dla asystentów w przeglądarce oraz własny klucz API w Studio nie są obiecane w tym wydaniu. Pętla zadań została przetestowana, ale jeszcze nie z prawdziwym asystentem.
- **Sprawdzanie zadań wymaga tego samego rozmiaru strony.** Arkusz wydrukowany ponownie w innym rozmiarze się nie dopasuje, więc jego zadania się nie zamkną. Arkusze są parowane po numerze arkusza, a jeśli go nie ma, po położeniu na stronie.
- **Notatki głosowe to tylko nagrania.** Brak transkrypcji, a asystent widzi długość notatki, autora i podpis, a nie dźwięk. Nagrywanie testowano z udawanym mikrofonem w przeglądarce bez interfejsu; prawdziwy mikrofon w telefonie, tablecie lub laptopie wciąż trzeba sprawdzić.
- **Arkusze obliczeniowe i powody w PDF** są zachowane w prywatnym wpisie pliku. Starsza wersja MarkupCraft ignoruje ten wpis i usuwa go przy następnym zapisie pliku, więc otwieraj i zapisuj taki plik w wersji 0.8 lub nowszej.
- **Odpowiadanie na redline po stronie rysownika.** Odczyt pliku redline przez CadCraft i udzielanie odpowiedzi nie są jeszcze zrobione.
- **Inne języki.** Pasek aplikacji w języku tamilskim wychodzi poza obszar o 528 px.

Wszystko inne jest w [Czego jeszcze nie ma](topic:not-built-yet). Poprzednie wydanie opisuje [Co nowego w 0.7](topic:whats-new-0-7).

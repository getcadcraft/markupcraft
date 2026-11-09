---
title: Co nowego w 0.8 i 0.8.1
summary: Adnotacje, które stają się zadaniami i same się zamykają, zwykła lista zmian między rewizjami, notatki głosowe i decyzje na planie, pliki redline dla rysownika oraz wspólne zmiany w 0.8: urządzenia wejściowe, wiersze paska narzędzi, Problemy, więcej języków.
keywords: co nowego, informacje o wydaniu, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, zadanie, zadania, przypisane do, dzień terminu, po terminie, sprawdź teraz, co się zmieniło, rewizje, porównaj, notatka głosowa, decyzja, redline, plik odpowiedzi, rysownik, asystent, mcp, problemy, języki, urządzenia wejściowe, gładzik, wiersze paska narzędzi, siatka właściwości, aktualizacja
from: 40368796
---

To jest opis zmian w MarkupCraft 0.8 i 0.8.1 w porównaniu z 0.7. Największa nowość to to, że adnotacja może być zadaniem, które wykonuje ktoś albo Twój asystent, i które zamyka się samo, gdy rysunek naprawdę się zmieni.

## Nowe

### Adnotacje, które działają

- **Zamień adnotację w zadanie.** Zaznacz jedną lub więcej adnotacji, otwórz kartę {{ui:Zadania}} i wybierz {{ui:Zrób z zaznaczonych zadanie}}. Zadanie ma tytuł, osobę albo podłączonego asystenta do wykonania, opcjonalny dzień terminu i stan, a także zachowuje swoje miejsce na arkuszu i swój wątek. Zobacz [Zamień adnotację w zadanie](topic:markups-that-act).
- **Zadania, które same się zamykają.** Zadanie może obserwować rysunek wewnątrz swojej adnotacji. Otwórz nowszą rewizję arkusza i wybierz {{ui:Sprawdź teraz}}: jeśli linie w tym obszarze zmieniły się o więcej niż włos, zadanie zostaje oznaczone jako Gotowe, adnotacja staje się Ukończona, a notatka w wątku opisuje, co się zmieniło. Nowa pieczątka daty ani linie przesunięte o mniej niż 1,5 punktu nie są brane pod uwagę. Zadanie może zamiast tego obserwować element modelu: asystent zgłasza element poleceniem `tasks_check`, a późniejsze zgłoszenie, które się różni, lub usunięty element zamyka zadanie. Jeden krok cofnięcia otwiera je ponownie.
- **Znajdź pracę.** Filtruj listę {{ui:Zadania}} według stanu i osoby, dla której zadanie jest, w tym {{ui:Po terminie}}. Wybierz {{ui:Przypisane do}}, a potem {{ui:Asystent}}, aby zobaczyć, co czeka na Twojego asystenta. Zadanie po terminie pojawia się jako ostrzeżenie w panelu Problemy. {{ui:CSV}} eksportuje listę. Zadania są zapisywane w PDF razem z adnotacją i przenoszą się przez Live jak inne właściwości adnotacji.

### Co się zmieniło, jako zwykła lista

- **Wypisz zmiany.** Otwórz kartę {{ui:Porównaj}}, potem {{ui:Porównaj cały zestaw}}, wybierz wcześniejszy i późniejszy plik i wybierz {{ui:Wypisz zmiany}}. Lista zaczyna się od liczby, a potem obejmuje każdy zmieniony arkusz, począwszy od największej zmiany: gdzie na arkuszu, jak duża (w jednostkach rzeczywistych, a także w calach papierowych na skalibrowanym arkuszu), czy linie zostały dodane lub usunięte, ile adnotacji się tam znajduje i które słowa się pojawiły lub zniknęły. {{ui:Kopiuj listę}} umieszcza ją w schowku, a {{ui:CSV}} zapisuje jeden wiersz na każdą zmianę. Zobacz [Wypisz, co się zmieniło między rewizjami](topic:what-changed-in-words).

### Notatki głosowe i decyzje

- **Notatki głosowe.** Na karcie {{ui:Notatki}} wybierz {{ui:Nagraj notatkę głosową}}, a potem {{ui:Zatrzymaj nagrywanie}}. Nagrania zatrzymują się same po dwóch minutach. Notatka jest przypięta do środka arkusza. Przeciągnij ją tam, gdzie ma być, i wpisz podpis w {{ui:Właściwości}}; {{ui:Odtwórz}} na liście odtwarza notatkę. Nagranie jest zapisane wewnątrz pliku PDF.
- **Decyzje.** {{ui:Przypnij decyzję}} zapisuje na arkuszu jedno lub dwa zdania. Jeśli zastępuje wcześniejszą decyzję, wybierz ją w {{ui:Zastępuje}}: stara decyzja zostaje, oznaczona jako Zastąpiona, i wskazuje na nową. Jeden krok cofnięcia ją cofa. Zobacz [Przypinanie notatek głosowych i decyzji na arkuszu](topic:voice-notes-and-decisions).

### Redline do rewizji

- **Wyślij i odpowiedz.** Na karcie {{ui:Zadania}} otwórz {{ui:Redline do rewizji}}, wpisz rewizję, do której odnoszą się adnotacje, i wybierz {{ui:Eksportuj plik redline}}. Dostaniesz plik `.redline.json` z jedną pozycją na każdą otwartą adnotację: arkusz, położenie (jako ułamki arkusza, więc ponowny wydruk w innym rozmiarze nadal się zgadza), słowa, autora, wątek i jego zadanie. Osoba rysująca zmiany odpowiada w pliku `.redline-answers.json` statusem Zaakceptowano, Odrzucono albo Gotowe. {{ui:Wczytaj plik z odpowiedziami…}} nadaje każdej adnotacji ten status i uwagę rysownika jako jeden krok cofnięcia. Zobacz [Wyślij adnotacje do rysownika jako redline](topic:redline-to-revision).

### Asystenci AI

- **Więcej narzędzi.** Asystent podłączony przez CadCraft Studio może wypisać zadania (`tasks_list`), utworzyć lub zmienić zadanie (`task_set`), zdjąć zadanie (`task_clear`), sprawdzić zadanie względem nowszej rewizji lub elementu (`tasks_check`) oraz odczytać zwykłą listę zmian między dwoma otwartymi zestawami planów (`revisions_changes`). Dostaje tylko te narzędzia, które zaznaczysz w przełączniku Asystenci, a każda zmiana to jeden krok cofnięcia. Zobacz [Korzystanie z MarkupCraft z asystentem AI](topic:use-with-ai-assistants).

## We wszystkich aplikacjach

- **Języki.** CadCraft Studio ma teraz 54 języki. Dziesięć z nich jest nowych: litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki. Wszystkie języki inne niż angielski są wersjami roboczymi maszynowymi, dopóki nie przeczyta ich rodzima osoba mówiąca.
- **Urządzenia wejściowe.** {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Urządzenia wejściowe}} określa, co robią gładzik, boczne przyciski myszy, rysik, dotknięcia palcem, mysz 3D, kontroler do gier lub kontroler MIDI, dla każdej aplikacji albo tylko dla tej jednej. Dopóki nic nie zmienisz, każde urządzenie działa jak wcześniej. Zobacz [Korzystanie z gładzika, myszy 3D lub kontrolera](common:input-devices).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} ma opcje {{ui:Zawijaj}} (domyślna), {{ui:2 wiersze}} i {{ui:1 wiersz}}, dzięki czemu rysunek ma więcej miejsca. Zobacz [Ustawianie paneli](common:arrange-panels).
- **Siatka właściwości.** Pola stylu adnotacji korzystają ze wspólnej siatki, ze zwijanymi kategoriami oraz kolumnami etykiet i wartości.
- **Panel Problemy.** Ostrzeżenia z aplikacji, na przykład zadanie po terminie, zbierają się w jednym panelu Problemy.
- **Live i dodatki.** Sesje Live są opisane w [Współpraca na żywo](common:work-together-live). Lista dodatków powiązana z Twoim kontem znajduje się w [Dodatki i lista dodatków konta](common:addons-basics).
- **Podłącz swojego asystenta AI.** CadCraft Studio jest centrum dla Twojego własnego asystenta: połącz raz dla wszystkich ośmiu aplikacji. Same aplikacje nie zawierają własnej AI.

## Naprawione w 0.8.1

- **Studio może zmienić język w trakcie pracy.** Wcześniej aplikacja desktopowa i wersje pakowane pozostawały po angielsku. Nie jest to jeszcze sprawdzone na każdej platformie: daj znać, jeśli język się nie zmienia.
- Instalacje Studio 0.8 otrzymują ofertę aktualizacji do 0.8.1 w {{ui:Ustawienia}} › {{ui:Aktualizacje}}.

## Jeszcze nie w tej wersji

- **Brak podpisu kodu.** Instalatory dla Windows i pliki .dmg dla macOS nie mają jeszcze podpisu. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. Wersje sklepowe są wstrzymane.
- **Podłączanie AI jest w niektórych miejscach niedokończone.** Łączenie jednym kliknięciem wewnątrz Studio, hostowany łącznik dla asystentów w przeglądarce i własny klucz API w Studio nie są obiecane w tym wydaniu. Pętla zadań została sprawdzona, ale jeszcze nie z prawdziwym asystentem.
- **Sprawdzanie zadań wymaga tego samego rozmiaru strony.** Arkusz ponownie wydrukowany w innym rozmiarze nie będzie pasował, więc jego zadania się nie zamkną. Arkusze są łączone po numerze arkusza, a jeśli go brak, po położeniu na stronie.
- **Notatki głosowe to tylko nagrania.** Nie ma transkrypcji, a asystent widzi długość notatki, autora i podpis, a nie dźwięk. Nagrywanie testowano z fałszywym mikrofonem w przeglądarce bez interfejsu. Prawdziwy mikrofon w telefonie, tablecie lub laptopie nadal wymaga sprawdzenia.
- **Arkusze obliczeń i uzasadnienia w PDF** są przechowywane w prywatnym wpisie pliku. Starsza wersja MarkupCraft ignoruje ten wpis i usuwa go przy następnym zapisie pliku, więc takie pliki otwieraj i zapisuj w wersji 0.8 lub nowszej.
- **Strona rysownika w redline.** Odczytywanie przez CadCraft pliku redline i odpowiadanie na niego jeszcze nie zostało zbudowane.
- **Inne języki.** Pasek aplikacji w języku tamilskim wychodzi poza krawędź o 528 px.

Wszystko inne znajdziesz w [Czego jeszcze nie zbudowano](topic:not-built-yet). Informacje o poprzednim wydaniu są w [Co nowego w 0.7](topic:whats-new-0-7).

---
title: Pliki, które MarkupCraft otwiera i zapisuje
summary: PDF-y na wejściu, kopia PDF z adnotacjami na wyjściu, a także pliki CSV, BCF i skrzynki narzędzi; dokąd trafia każdy, online i offline.
keywords: pdf, otwieranie, zapis, eksport, pobieranie, csv, bcf, bcfzip, json, skrzynka narzędzi, typy plików, formaty, przesyłanie, hasło, zaszyfrowany
from: b3045b4c
---

## Co MarkupCraft otwiera

| Plik | Jak | Co się dzieje |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otwórz}}, {{key:Mod+O}} lub upuszczenie na obszar arkusza. Kilka naraz jest w porządku. | Każda strona staje się arkuszem. Adnotacje już obecne w pliku są odczytywane (poniżej). |
| Skrzynka narzędzi (`.json`) | karta {{ui:Narzędzia}}, potem {{ui:Importuj}} | Narzędzia są dodawane do Twojej skrzynki. Zobacz [Skrzynka narzędzi](topic:tool-chest). |

Wszystko inne jest odrzucane komunikatem „MarkupCraft otwiera pliki PDF.” na pasku stanu. Jeśli upuścisz mieszankę, pliki PDF się otworzą, a pasek stanu poda, ile plików nie było PDF-ami.

### Adnotacje już obecne w PDF

- **Adnotacje zapisane przez MarkupCraft** wracają dokładnie: rodzaj, styl, autor, daty, status, odpowiedzi, numer usterki, skala arkusza i wpisane nazwy arkuszy.
- **Komentarze z innych programów do PDF** są także odczytywane. Prostokąty, elipsy, linie i strzałki, polilinie, wielokąty, pociągnięcia pióra, pola tekstowe i karteczki stają się zwykłymi, edytowalnymi adnotacjami MarkupCraft. Ich odpowiedzi i stany recenzji przychodzą razem z nimi.
- **Wszystko inne** (zakreślenia tekstu zrobione przez zaznaczenie tekstu, pieczątki innych programów i inne rodzaje) jest pokazywane takie, jakie jest, oznaczone jako tylko do odczytu. Możesz je zaznaczyć, zobaczyć na liście adnotacji i odpowiedzieć na nie, ale nie możesz ich przesuwać, zmieniać ani usuwać.
- Łącza i pola formularzy są pozostawione w spokoju i nie są wymieniane.
- Skala zapisana przez inny program (okno pomiarowe) jest używana jako skala arkusza, gdy MarkupCraft rozumie jej jednostkę.

### Pliki, które się nie otwierają

- PDF wymagający hasła: „"name" wymaga hasła do otwarcia. Otwórz kopię bez zabezpieczenia.”
- Uszkodzony plik albo taki, który naprawdę nie jest PDF-em: „"name" nie udało się odczytać jako PDF (…)”.
- PDF, który się otwiera, ale jest chroniony przed zmianami, otwiera się normalnie. Zapis jest odrzucany (zobacz poniżej).

Gdy otwierasz kilka plików naraz, te, które działają, się otwierają, a okno „Niektóre pliki się nie otworzyły” wymienia pozostałe.

## Co MarkupCraft zapisuje

Zapis to zawsze **pobranie** nowego pliku. Strona internetowa nie może nadpisać pliku na Twoim komputerze, a MarkupCraft nigdy nie zmienia oryginału.

| Wybierasz | Dostajesz | Uwagi |
|---|---|---|
| {{ui:Zapisz}} ({{key:Mod+S}}) | „<nazwa> (marked up).pdf” | Kopia oryginalnego PDF z każdą adnotacją wpisaną jako prawdziwy komentarz PDF. Ponowny zapis pliku „(marked up)” zachowuje tę samą nazwę; nigdy nie staje się „(marked up) (marked up)”. Zobacz [Zapisz PDF z adnotacjami](topic:save-the-marked-up-pdf). |
| karta {{ui:Adnotacje}}, potem {{ui:CSV}} | „<nazwa> markups.csv” | Adnotacje tak, jak są wymienione (filtry obowiązują). |
| karta {{ui:Adnotacje}}, potem {{ui:BCF}} | „<nazwa> markups.bcfzip” | BCF 2.1 dla narzędzi do koordynacji BIM, jedna migawka na adnotację. Zobacz [Podstawy BCF](topic:bcf-basics). |
| karta {{ui:Lista usterek}}, potem {{ui:Eksportuj CSV}} | „<nazwa> punch list.csv” | Pozycje usterek w kolejności numerów. |
| karta {{ui:Narzędzia}}, potem {{ui:Eksportuj}} | „MarkupCraft tool chest.json” | Twoja skrzynka narzędzi, do udostępnienia lub zachowania. |

„<nazwa>” to nazwa pierwszego otwartego pliku PDF bez „.pdf”.

Pliki CSV otwierają się w każdym arkuszu kalkulacyjnym. Są w UTF-8 ze znacznikiem, którego szukają arkusze, więc nazwy z akcentami wychodzą poprawnie. Komórka zaczynająca się od =, +, - lub @ dostaje na początku apostrof, aby arkusz nigdy nie uruchomił jej jako formuły.

## Dokąd trafiają pobrane pliki

Decyduje Twoja przeglądarka: zwykle folder Pobrane albo pyta za każdym razem, jeśli tak ustawisz. Zobacz [Przeglądarki i komputery](common:browsers#what-differs-between-browsers).

:::chromium
Gdy zapisujesz naraz każdy zmieniony plik zestawu, Chrome i Edge mogą zapytać, czy ta witryna może pobierać wiele plików. Wybierz {{ui:Zezwalaj}}, bo inaczej dostaniesz tylko pierwszą kopię.
:::

:::safari
Na iPadzie Safari pyta przed każdym pobraniem i umieszcza plik w aplikacji Pliki, w folderze Pobrane. Na Macu trafia do folderu ustawionego w ustawieniach Safari.
:::

## Online i offline

- **Twoje pliki PDF nigdy nie opuszczają tego komputera**, online ani offline. Nigdzie nie ma przesyłania.
- Czytnik PDF jest wczytywany przy pierwszym otwarciu pliku PDF („Wczytywanie czytnika PDF…”), a zapisujący PDF przy pierwszym zapisie („Wczytywanie zapisującego PDF…”) lub otwarciu pliku, który ma już komentarze.
- Z połączeniem oba wczytują się z witryny.
- **Aby pracować bez połączenia,** wybierz {{ui:Zapisz do pracy offline}} na pasku u góry, będąc online. Przycisk odlicza „Zapisywanie N z M”, a potem mówi „Gotowe offline”. Ta kopia zawiera czytnik PDF i zapisujący PDF (razem około 6 MB) oraz tę pomoc, więc potem otwieranie, adnotacje i zapisywanie plików PDF działają offline w tej przeglądarce.
- Jeśli przycisk mówi „Nie udało się zapisać”, część plików nie została pobrana: sprawdź połączenie i kliknij go ponownie. Jeśli mówi „Tryb offline niedostępny”, to okno przeglądarki nie może przechowywać kopii offline (okna prywatne i niektóre zarządzane komputery); użyj zwykłego okna.
- Aby zaktualizować lub porzucić kopię, kliknij „Gotowe offline” i wybierz „Zapisz ponownie (pobierz najnowszą wersję)” albo „Usuń kopię offline”. Więcej w [Praca offline](common:offline).

:::offline
Jesteś offline. Jeśli pasek u góry mówi „Gotowe offline”, wszystko działa, także zapis. Jeśli nie i nie zapisywałeś(-aś) jeszcze w tej karcie, {{ui:Zapisz}} może się nie udać z komunikatem „Nie udało się wczytać zapisującego PDF”. Twoje adnotacje nadal są w karcie: zostaw ją otwartą, wróć online i wybierz {{ui:Zapisz}} ponownie.
:::

## Warto wiedzieć

- Duże zestawy planów otwierają się dłuższą chwilę: MarkupCraft czyta tekst każdej strony, aby znaleźć numery arkuszy. Pasek stanu liczy arkusze na bieżąco.
- Otwarcie tego samego PDF dwa razy dodaje jego arkusze dwa razy. Jeśli tak się stanie, zamknij zestaw i otwórz go ponownie.
- {{ui:Zamknij}} zamyka naraz wszystkie otwarte pliki. Jeśli któreś mają niezapisane adnotacje, pyta: {{ui:Anuluj}}, {{ui:Zamknij bez zapisywania}} lub {{ui:Najpierw zapisz kopie}}.
- Zapis w chmurze jeszcze nie jest dostępny i nie ma jeszcze wersji na komputer. Trzymaj swoje pliki PDF razem z innymi plikami projektu i rób ich kopie zapasowe jak zwykle. Zobacz [Dokąd trafiają Twoje pliki](common:your-files).

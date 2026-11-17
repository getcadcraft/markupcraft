---
title: Znajdź tekst na rysunkach
summary: Szukaj słów na każdym arkuszu, przechodź do każdego trafienia i obrysuj wszystkie jednym krokiem.
keywords: znajdź, szukaj, tekst, słowo, słowa, ctrl f, wyszukaj, uwaga, oznaczenie kluczowe, wyniesienie, obrysuj wszystkie, zakreśl trafienia, ocr, skan, zeskanowany, odczytaj tekst, zaznacz tekst, kopiuj tekst, tesseract
from: 3435c9eb
---

{{ui:Find text}}, u góry panelu {{ui:Sheets}}, przeszukuje słowa narysowane na samych arkuszach. {{ui:Search sheets}} pod nim przeszukuje tylko nazwy arkuszy.

## Znajdź

1. Naciśnij {{key:Mod+F}} lub otwórz {{ui:Find text}}.
2. Wpisz słowa, na przykład `hood` lub `verify in field`.
3. Wybierz {{ui:All sheets}} lub {{ui:This sheet}} i zaznacz {{ui:Match case}} albo {{ui:Whole words}}, jeśli ich potrzebujesz.
4. Naciśnij {{key:Enter}} lub wybierz {{ui:Find}}.

Wynik: każde trafienie jest wypisane wraz z numerem arkusza i otaczającymi słowami oraz zaznaczone na żółto na swoim arkuszu. Wybierz trafienie, aby otworzyć jego arkusz i przybliżyć widok.

Frazę znajduje się nawet wtedy, gdy rysunek rozdziela ją na dwa fragmenty tekstu lub dwie linie.

## Obrysuj każde trafienie

Wybierz {{ui:Cloud all}}. Chmura rewizji obejmuje każde trafienie z listy, na każdym arkuszu, z komentarzem „Znaleziono: <Twoje słowa>”. Jedno {{key:Mod+Z}} usuwa je wszystkie.

## Odczytaj tekst ze skanu (OCR)

Zeskanowany arkusz to tylko obraz: dopóki jego słowa nie zostaną odczytane, nie ma czego znajdować. Gdy licznik podaje, że arkusze nie mają tekstu, wybierz {{ui:Read text (OCR)…}} pod nim albo {{ui:Pages}} › {{ui:Read text (OCR)…}}.

1. Wybierz strony: ten arkusz, każdą stronę pliku albo każdą stronę wszystkich otwartych plików.
2. Wybierz język tekstu. {{ui:Also English}} odczytuje też angielskie słowa.
3. Wybierz {{ui:Read text}}. Pasek pokazuje czytaną stronę; {{ui:Stop}} kończy przebieg i zachowuje strony już odczytane.

Wynik: słowa można znajdować, zaznaczać i kopiować jak każdy inny tekst. Wszystko działa na Twoim komputerze: nic nie jest nigdzie wysyłane. Działa bez połączenia w Studio, a w przeglądarce po zapisaniu aplikacji do pracy offline (angielski i język Twojego interfejsu) lub po jednorazowym użyciu języka. Strony, które już mają tekst, pozostają bez zmian.

Po zapisaniu słowa trafiają do PDF jako niewidoczny tekst za obrazem, oddzielnie od Twoich adnotacji, aby inne programy PDF mogły je także przeszukiwać i kopiować. Dopóki nie zapiszesz, plik jest oznaczony jako niezapisany.

## Zaznacz i kopiuj tekst

Wybierz {{ui:More}} › {{ui:Select text to copy}}. Przeciągnij od jednego słowa do drugiego, aby zaznaczyć słowa między nimi, przeciągnij od pustego miejsca papieru, aby zaznaczyć słowa w prostokącie, albo kliknij dwukrotnie jedno słowo. {{key:Mod+A}} zaznacza każde słowo na arkuszu. {{key:Mod+C}} kopiuje je, zachowując wiersze. Każde inne narzędzie kończy tryb.

## Warto wiedzieć

- Rysunki, których litery są narysowane jako linie, także nie mają tekstu; odczyt jako obrazu działa najlepiej dla drukowanego tekstu, na przykład zeskanowanej książki lub specyfikacji.
- Czytnikiem jest Tesseract, wbudowany w aplikację wraz z danymi językowymi dla angielskiego i języków aplikacji. Pierwsze uruchomienie go ładuje (ok. 6 MB, więcej dla drugiego języka).
- Jakość odczytu zależy od skanu: czyste strony w 300 dpi odczytują się niemal słowo w słowo; stare, blade lub niskiej rozdzielczości skany gubią więcej słów.
- Lista pokazuje pierwsze 500 trafień; {{ui:Cloud all}} obejmuje do 2000.
- Trafienia są czyszczone po zamknięciu zestawu, a dla jednego pliku po zmianie jego stron.

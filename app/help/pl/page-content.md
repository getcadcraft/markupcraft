---
title: Zmiana własnych linii, obrazów i tekstu strony
summary: Przesuwaj, zmieniaj rozmiar, kolory lub usuwaj to, co sam plik PDF rysuje, przesuwaj punkty linii, zamieniaj obraz i zmieniaj słowa wiersza tekstu.
keywords: zawartość strony, zawartość bazowa, edycja PDF, edycja rysunku, wektor, ścieżka, kształt, linia, obraz, zamień obraz, tekst, słowa, czcionka, punkty, węzły, przesuń, zmień rozmiar, zmień kolor, usuń, narzędzie zawartości
from: 471d457e
---

Adnotacje leżą na arkuszu. Narzędzie {{ui:Zawartość}} działa na samym arkuszu: na liniach, obrazach i wierszach tekstu, które rysuje plik PDF. Plik PDF na tym komputerze nigdy się nie zmienia: zmiany są częścią zapisywanej kopii.

## Wybór elementów do zmiany

1. Wybierz {{ui:Zawartość}} w grupie {{ui:Zaznacz}} albo naciśnij {{key:B}}.
2. W sekcji {{ui:Wybór}} w {{ui:Właściwości}} włącz lub wyłącz {{ui:Kształty}}, {{ui:Obrazy}} i {{ui:Tekst}}. Można wybierać tylko włączone rodzaje, więc tekst w zatłoczonym rysunku można wybrać bez łapania jego linii.
3. Kliknij coś, aby to zaznaczyć. Shift+kliknięcie dodaje lub usuwa z zaznaczenia. Przeciągnij ramkę po pustym papierze, aby zaznaczyć kilka elementów: przeciąganie w prawo zaznacza to, co znajduje się w całości wewnątrz ramki, a przeciąganie w lewo zaznacza to, czego ramka dotyka.

Kształt w obszarze przycięcia jest wybierany tylko tam, gdzie jest widoczny.

## Przesuwanie, zmiana rozmiaru, koloru, usuwanie

- **Przesuwanie:** przeciągnij zaznaczony obiekt albo naciskaj klawisze strzałek (przytrzymaj Shift, aby robić większe kroki). Przytrzymaj Shift podczas przeciągania, aby przesuwać prosto w poziomie albo prosto w górę.
- **Zmiana rozmiaru:** przeciągnij jeden z ośmiu kwadratów wokół zaznaczenia. Element rośnie lub maleje od przeciwnej strony. Przytrzymaj Shift, aby zachować proporcje.
- **Zmiana koloru:** dla linii i kształtów ustaw {{ui:Kolor linii}}, {{ui:Kolor wypełnienia}} i {{ui:Grubość linii (pt)}} w {{ui:Właściwości}}.
- **Usuwanie:** naciśnij {{key:Delete}} albo wybierz {{ui:Usuń ze strony}}.
- **Cofanie:** każda zmiana to jeden krok: {{key:Mod+Z}} cofa ją, {{key:Mod+Y}} przywraca.

{{ui:Przywróć jak było}} cofa naraz wszystkie zmiany zaznaczonych obiektów; {{ui:Przywróć tę stronę jak była}} robi to dla całej strony.

## Kopiowanie, wycinanie i wklejanie zawartości strony

Zaznacz linie, obrazy lub tekst narzędziem {{ui:Zawartość}}, a następnie:

- {{key:Mod+C}} kopiuje, {{key:Mod+X}} wycina (kopiuje i usuwa je ze strony), {{key:Mod+D}} umieszcza kopię obok nich.
- {{key:Mod+V}} wkleja jako zawartość strony, obok oryginału lub tam, gdzie jest wskaźnik (zgodnie z opisem w [Ustawienia](topic:settings)); {{key:Mod+Shift+V}} wkleja dokładnie w to samo miejsce. Wklejanie można wykonać na innej stronie, w innym otwartym pliku PDF lub w innej karcie MarkupCraft tej przeglądarki.
- Menu grupy {{ui:Edycja}} i menu kontekstowe po kliknięciu prawym przyciskiem mają te same polecenia.

Wklejenie zachowuje linie jako linie, słowa jako słowa we własnej czcionce, a obrazy jako obrazy. Jest to jedna całość: można ją przesunąć, zmienić jej rozmiar za pomocą kwadratów, usunąć albo cofnąć skrótem {{key:Mod+Z}}. Staje się częścią strony w zapisywanej kopii. {{key:Mod+V}} wkleja to, co skopiowano ostatnio: adnotacje lub zawartość strony.

To, co zawiera kopia, jest przycięte do ramki wokół zaznaczenia: element, którego MarkupCraft nie może wyjąć z kopii (patrz niżej) i który leży w tej ramce, również zostaje przeniesiony.

## Przesuwanie punktów linii

Kliknij dwukrotnie linię lub krzywą (albo zaznacz ją i wybierz {{ui:Edytuj punkty}}). Jej punkty są widoczne jako kwadraty, a uchwyty krzywej jako kółka. Przeciągnij punkt lub uchwyt; punkt pociąga za sobą sąsiadujące z nim uchwyty, dzięki czemu krzywa zachowuje swój kształt. Gdy skończysz, naciśnij {{key:Esc}} albo kliknij poza linią.

Prostokąty nie mają punktów do przeciągania: zmień ich rozmiar za pomocą otaczających je kwadratów.

## Zamiana obrazu

Zaznacz obraz i wybierz {{ui:Zamień obraz…}}, a następnie wskaż plik PNG, JPEG lub SVG (albo PDF: jego pierwszą stronę). Nowy obraz zajmuje miejsce starego, zachowując własne proporcje.

## Zmiana słów w wierszu tekstu

Kliknij dwukrotnie wiersz tekstu, wpisz nowe słowa w polu {{ui:Słowa}} i naciśnij {{key:Enter}}. Słowa są zapisywane czcionką i rozmiarem tego wiersza, a wiersz zachowuje swoją długość, więc tekst za nim się nie przesuwa.

:::note
Większość plików PDF zawiera tylko te litery, których używa z każdej czcionki. Gdy wpisana litera nie występuje w kopii czcionki w pliku, MarkupCraft wyświetla ją czcionką Helvetica i informuje o tym. {{ui:Właściwości}} pokazują, które litery ma czcionka w pliku.
:::

Tekst zmienia się po jednym wierszu; nie przepływa do kolejnego wiersza.

## Co MarkupCraft pozostawia bez zmian

- **Zeskanowane strony** to jeden obraz: można go przesuwać, zmieniać jego rozmiar, zamieniać lub usuwać, ale nie można edytować tego, co na nim jest.
- **Zaszyfrowane i podpisane pliki PDF:** zmiana strony złamałaby podpis, więc narzędzie {{ui:Zawartość}} informuje o tym i nic nie zmienia. Adnotacje nadal działają.
- **Obszary przycięcia**, obiekty podzielone między dwie części zawartości strony oraz gradienty kolorów wypełniające cały obszar pozostają bez zmian; MarkupCraft podaje powód, gdy spróbujesz je zmienić.
- **Słowa w standardowej czcionce, której plik PDF nie opisuje** (na przykład Times bez szerokości liter w pliku) nie mogą być zmieniane, ponieważ MarkupCraft nie mógłby zachować odstępów w wierszu. Wiersz nadal można przesunąć.

## Wstawianie adnotacji na stronę

Linie, prostokąty, elipsy, polilinie, chmury i pociągnięcia piórem narysowane jako adnotacje mogą stać się częścią samej strony: zaznacz je i wybierz {{ui:Wstaw na stronę}} w {{ui:Właściwości}}. Tekst, pieczątki, obrazy i przezroczyste kolory pozostają adnotacjami.

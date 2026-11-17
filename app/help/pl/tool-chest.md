---
title: Skrzynka z narzędziami
summary: Zapisz oznaczoną adnotację jako narzędzie do wielokrotnego użytku, rysuj nim i udostępniaj skrzynkę biuru jako plik.
keywords: skrzynka z narzędziami, narzędzia, zestaw narzędzi, własne narzędzia, zapisane adnotacje, ulubione, standard biura, import, eksport, udostępnianie, json
from: 7dfa36e0
---

Karta {{ui:Tools}} zawiera Twoją **skrzynkę z narzędziami**: adnotacje zapisane wraz z ich wyglądem, gotowe do ponownego rysowania. Narzędzie zachowuje rodzaj adnotacji, kolor, grubość linii, wypełnienie, krycie, rozmiar tekstu i temat, a także treść pieczątki, nazwę grupy liczenia albo początkowy tekst pola tekstowego lub wyniesienia.

## Narzędzia, które masz na start

Nowa skrzynka ma sześć narzędzi: "Chmura rewizji" (czerwona), "Chmura pytania" (niebieska), "Żółty zakreślacz", "Wyniesienie RFI" (niebieskie, zaczyna się od "RFI: "), "Weryfikacja w terenie" (pomarańczowe wyniesienie z tekstem "Weryfikacja w terenie.") oraz "Zatwierdzono z uwagami" (pieczątka).

## Rysuj narzędziem

1. Otwórz kartę {{ui:Tools}}.
2. Kliknij narzędzie. Wygląda na wciśnięte, a odpowiadające mu narzędzie na pasku narzędzi się włącza.
3. Rysuj jak zwykle. {{ui:Properties}} pokazuje 'Rysowanie narzędziem "<tool>" ze skrzynki z narzędziami.'

Gdy narzędzie ze skrzynki jest włączone, zmiany w {{ui:Properties}} wprowadzone przed rysowaniem dotyczą na razie tylko tego narzędzia, bez zmieniania zapisanego narzędzia i Twoich zwykłych ustawień. Wybranie przycisku na pasku narzędzi albo naciśnięcie klawisza narzędzia wraca do zwykłego narzędzia.

## Zapisz własne

1. Narysuj adnotację i ustaw ją tak, jak chcesz: kolor, linia, wypełnienie, temat, treść pieczątki.
2. Zaznacz ją.
3. Wybierz {{ui:Save selected as a tool}} na karcie {{ui:Tools}} albo {{ui:Save as a tool}} w {{ui:Properties}}.
4. Wpisz {{ui:Tool name}} i wybierz {{ui:Save tool}}.

Wynik: narzędzie zostaje dodane na końcu skrzynki, a karta {{ui:Tools}} otwiera się, pokazując je.

## Pieczątki z zaznaczenia

Zaznacz kilka adnotacji (albo zawartość strony narzędziem {{ui:Content}}) i wybierz {{ui:Save selection as a stamp…}} w {{ui:More}} albo w menu kontekstowym. Skrzynka dostaje jedną pieczątkę, która zawiera wszystkie (na przykład "Pieczątka: 3 adnotacje razem"). Kliknij ją, a następnie kliknij na dowolnym arkuszu: adnotacje lądują razem, wyśrodkowane w miejscu kliknięcia, jako nowe adnotacje z Twoim imieniem; zawartość strony jest rysowana na stronie w tym miejscu. Te pieczątki są zapisywane i udostępniane razem ze skrzynką jak każde narzędzie.

## Usuń narzędzie

Wybierz × na końcu wiersza narzędzia, a następnie {{ui:Remove}}. Adnotacje już narysowane tym narzędziem pozostają bez zmian.

## Gdzie przechowywana jest skrzynka

Skrzynka jest przechowywana **w tej przeglądarce, na tym komputerze**. Inna przeglądarka lub komputer ma własną skrzynkę (zaczynającą się od sześciu domyślnych), okno prywatne zapomina ją po zamknięciu, a wyczyszczenie danych tej strony w ustawieniach przeglądarki ją kasuje.

Jeśli przeglądarka nie zachowa jej (przechowywanie wyłączone lub pełne), pasek stanu pokaże: "Skrzynki z narzędziami nie udało się zachować w tej przeglądarce (przechowywanie jest wyłączone lub pełne). Wyeksportuj ją, aby ją zachować."

:::safari
Safari może wyczyścić zapisane dane strony, jeśli przez dłuższy czas nie używasz tej strony. Wyeksportuj od czasu do czasu swoją skrzynkę, abyś mógł ją potem ponownie zaimportować.
:::

**Wyeksportuj skrzynkę jako kopię zapasową**, zwłaszcza po zbudowaniu narzędzi, na których polegasz.

## Udostępnij skrzynkę biuru

1. Skonfiguruj narzędzia raz.
2. Wybierz {{ui:Export}}. Otrzymasz plik "MarkupCraft tool chest.json".
3. Umieść ten plik tam, gdzie biuro trzyma swoje standardy, albo wyślij go dalej.
4. Wszyscy inni wybierają {{ui:Import}} na karcie {{ui:Tools}} i wskazują plik.

Wynik: "Zaimportowano 12 narzędzi z pliku "MarkupCraft tool chest.json"." Narzędzia pochodzące z tej samej skrzynki zastępują starsze kopie, więc import zaktualizowanej skrzynki biura odświeża te narzędzia zamiast je podwajać; nowe narzędzia są dodawane. Skrzynka mieści do 500 narzędzi.

MarkupCraft sprawdza każdą wartość w importowanym pliku i pomija to, czego nie może użyć ("2 pominięto (nieprzydatne)"). Pliki, które nie są skrzynką, są odrzucane: "Ten plik nie jest skrzynką z narzędziami MarkupCraft." albo "Ten plik nie jest skrzynką z narzędziami (nie jest to JSON)."

Pliki skrzynek z narzędziami z innych programów do adnotacji nie mogą zostać zaimportowane.

---
title: Przegląd ekranu
summary: Pasek narzędzi, lista arkuszy, obszar arkusza, pięć paneli po prawej i pasek stanu, według nazw na ekranie.
keywords: ekran, układ, pasek narzędzi, panele, pasek boczny, miniatury, właściwości, pasek stanu, interfejs, pełny ekran, motyw, tryb ciemny
from: 18d82de6
---

MarkupCraft wypełnia okno przeglądarki. Od góry do dołu i od lewej do prawej:

## Pasek na samej górze

Cienki pasek nad wszystkim należy do rodziny CadCraft, nie do samego MarkupCraft. Zawiera:

- nazwę aplikacji i uruchomioną wersję,
- {{ui:O MarkupCraft}}, które otwiera stronę aplikacji w witrynie,
- {{ui:Pomoc}}, która otwiera tę pomoc w panelu bocznym (lub naciśnij {{key:F1}}),
- {{ui:Zapisz do pracy offline}}, które zachowuje w tej przeglądarce MarkupCraft, jego czytnik i zapisujący PDF oraz tę pomoc, aby otwierał się bez połączenia; potem mówi „Gotowe offline” (zobacz [Praca offline](common:offline)),
- przycisk trybu ekranu ({{ui:Pełny ekran}}) oraz
- {{ui:Ustawienia}} (lub {{key:Mod+,}}), z kartą {{ui:MarkupCraft}} dla ustawień tej aplikacji i {{ui:Ogólne}} dla ustawień wspólnych dla każdej aplikacji CadCraft (zobacz [Ustawienia MarkupCraft](topic:settings)), oraz
- {{ui:Papier}} i {{ui:Model}}, jasny i ciemny motyw. W {{ui:Model}} arkusze są rysowane jasnym na ciemnym; Twoje adnotacje zachowują własne kolory.

Przycisk trybu ekranu, lub {{key:Ctrl+Shift+F}}, przechodzi przez trzy tryby: normalny, pełny ekran i pełny ekran z ukrytymi paskami. Przy ukrytych paskach przesuń wskaźnik do górnej krawędzi ekranu (lub dotknij tam), a paski wsuną się z powrotem. Ten skrót używa klawisza Control na każdym komputerze, także na Macu.

:::note
W pełnym ekranie {{key:Esc}} sprawia też, że przeglądarka opuszcza pełny ekran. Jeśli chciałeś(-aś) tylko anulować rysowanie, naciśnij {{key:Ctrl+Shift+F}} ponownie, aby wrócić do pełnego ekranu.
:::

## Pasek narzędzi

Pod górnym paskiem narzędzia są pogrupowane i opisane:

| Grupa | Przyciski |
|---|---|
| Plik | {{ui:Otwórz}}, {{ui:Zapisz}}, {{ui:Zamknij}} |
| Zaznacz | {{ui:Zaznacz}}, {{ui:Przesuń}} |
| Rysuj | {{ui:Pióro}}, {{ui:Zakreślenie}}, {{ui:Linia}}, {{ui:Strzałka}}, {{ui:Prostokąt}}, {{ui:Elipsa}}, {{ui:Polilinia}}, {{ui:Wielokąt}} |
| Korekty | {{ui:Chmura}}, {{ui:Wolna chmura}} |
| Adnotuj | {{ui:Wyniesienie}}, {{ui:Tekst}}, {{ui:Notatka}}, {{ui:Pieczątka}} |
| Zmierz | {{ui:Kalibruj}}, {{ui:Długość}}, {{ui:Pole}}, {{ui:Policz}} |
| Edycja | {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}}, {{ui:Wklej}} oraz {{ui:Więcej}}: {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}}, {{ui:Odznacz wszystko}} |

Używane narzędzie wygląda na wciśnięte. Zatrzymaj wskaźnik nad przyciskiem, aby zobaczyć jego klawisz (na przykład „Prostokąt (R)”); menu {{ui:Więcej}} wymienia klawisz każdego polecenia obok niego. Przyciski, które w tej chwili nie mogą działać, są przyciemnione: {{ui:Kopiuj}}, dopóki nie zaznaczysz adnotacji, {{ui:Wklej}}, dopóki coś nie zostanie skopiowane. Mała kropka po {{ui:Zapisz}} oznacza, że część adnotacji nie jest jeszcze zapisana. Pełna lista klawiszy jest w [Klawiatura i mysz](topic:keyboard).

Narzędzie pozostaje włączone po narysowaniu nim, więc możesz narysować kilka chmur z rzędu. Naciśnij {{key:Esc}} (dwa razy, jeśli nowa adnotacja jest nadal zaznaczona) lub {{key:V}}, aby wrócić do {{ui:Zaznacz}}.

## Lista arkuszy (po lewej)

{{ui:Arkusze}} wymienia każdą stronę każdego otwartego PDF. Każdy wiersz pokazuje mały obraz arkusza, jego nazwę, numer arkusza lub plik i stronę oraz liczbę adnotacji. Liczba po nagłówku to liczba arkuszy.

- Kliknij wiersz, aby pokazać ten arkusz.
- Wpisz w {{ui:Szukaj arkuszy}}, aby filtrować według nazwy arkusza, numeru arkusza lub nazwy pliku. Naciśnij {{key:Enter}}, aby otworzyć pierwszy wynik.

Nazwy arkuszy pochodzą z PDF, gdy je ma. Zobacz [Otwórz zestaw planów i przechodź między arkuszami](topic:open-a-plan-set).

## Obszar arkusza (środek)

Arkusz, nad którym pracujesz. Zanim cokolwiek otworzysz, pokazuje „Otwórz zestaw planów” z przyciskiem {{ui:Otwórz PDF}}. Upuść tu pliki PDF w dowolnym miejscu, aby je otworzyć.

Pod arkuszem wąski pasek zawiera:

- strzałki poprzedniego i następnego arkusza oraz „3 z 12: A-101 — Rzut piętra” (zatrzymaj wskaźnik nad nim, aby zobaczyć plik i stronę),
- pomniejszenie, pole powiększenia (wpisz procent i naciśnij {{key:Enter}}; 100% to rozmiar rzeczywisty na typowym ekranie), powiększenie,
- {{ui:Dopasuj stronę}} i {{ui:Dopasuj szerokość}}.

Każdy arkusz pamięta własne powiększenie, dopóki zestaw jest otwarty.

Gdy porównujesz dwa arkusze, pojawia się tu legenda: „Tylko na starym arkuszu”, „Tylko na nowym arkuszu” i „Na obu”. Zobacz [Porównaj dwie rewizje](topic:compare-revisions).

## Panele (po prawej)

Pięć kart:

| Karta | Co pokazuje |
|---|---|
| {{ui:Właściwości}} | Zaznaczona adnotacja: autor, daty, zmierzone wartości, status, temat, tekst, komentarz, styl, jej odpowiedzi i jej pozycja usterki. Przy włączonym narzędziu rysowania i braku zaznaczenia: ustawienia, których użyją nowe adnotacje. Przy braku zaznaczenia i włączonym {{ui:Zaznacz}}: arkusz: numer, tytuł, skąd odczytano nazwę, rozmiar papieru, skala i {{ui:Zmień nazwę arkusza}}. |
| {{ui:Adnotacje}} | Każda adnotacja w otwartym zestawie, z filtrami oraz eksportami {{ui:CSV}} i {{ui:BCF}}. Zobacz [Lista adnotacji](topic:markups-list-and-export). |
| {{ui:Lista usterek}} | Ponumerowane pozycje usterek z osobą przypisaną, terminem i statusem. Zobacz [Utwórz listę usterek](topic:punch-list). |
| {{ui:Narzędzia}} | Skrzynka narzędzi: zapisane narzędzia ze stylami. Zobacz [Skrzynka narzędzi](topic:tool-chest). |
| {{ui:Porównaj}} | Nakłada dwa arkusze. Zobacz [Porównaj dwie rewizje](topic:compare-revisions). |

## Pasek stanu (na dole)

- Po lewej, gdzie jest wskaźnik na arkuszu, w calach (lub milimetrach, w [Ustawieniach](topic:settings)) na papierze.
- W środku komunikaty: czego narzędzie oczekuje dalej, co właśnie zapisano, dlaczego coś odrzucono. **Przeczytaj go, gdy coś się nie dzieje.**
- Przycisk skali arkusza („Nieskalibrowano” lub skala). Kliknij go, aby ustawić skalę. Zobacz [Skalibruj arkusz i mierz](topic:calibrate-and-measure).
- Twoje imię i nazwisko („Ustaw swoje imię”, dopóki go nie podasz). Kliknij je, aby je zmienić.

## Na małym ekranie

Poniżej około 1180 pikseli szerokości panele się zwężają, a obrazy arkuszy maleją. Na ekranie wielkości telefonu części układają się jedna pod drugą: pasek narzędzi (przewiń go na boki), arkusz, pasek stanu, panele, a na dole lista arkuszy. Tablet w poziomie zachowuje pełny układ.

---
title: Przegląd na iPadzie lub ekranie dotykowym
summary: Szczypanie, przesuwanie i rysowanie palcami lub rysikiem, co działa po uniesieniu palca, co wymaga klawiatury i jak bezpiecznie zachować pracę na tablecie.
keywords: ipad, tablet, dotyk, ekran dotykowy, szczypanie, powiększanie, dwa palce, Apple Pencil, rysik, palec, teren, budowa, powierzchnia, gesty, telefon
from: 91eb6438
---

MarkupCraft działa z dotykiem: na iPadzie (Safari lub Chrome), na laptopie z ekranem dotykowym albo na tablecie z Windows lub Androidem z nowszą przeglądarką. W orientacji poziomej tablet pokazuje pełny układ.

## Gesty

| Gest | Co robi |
|---|---|
| Jeden palec | Rysuje bieżącym narzędziem albo zaznacza narzędziem {{ui:Zaznacz}} |
| Dwa palce, rozsuwane lub zbliżane | Powiększa wokół punktu między palcami |
| Dwa palce, przesuwane razem | Przesuwa; można powiększać i przesuwać jednym ruchem |
| Drugi palec podczas rysowania | Anuluje to, co zaczął pierwszy palec, i zamiast tego zaczyna powiększanie |
| Dwukrotne stuknięcie lub przytrzymanie | Kończy polilinię, wielokąt, wolną chmurę lub obszar |
| Przytrzymanie tekstu, wyniesienia lub notatki przy {{ui:Zaznacz}} | Otwiera jego tekst do edycji |
| Jeden palec przy włączonym {{ui:Przesuń}} | Przesuwa |

Na ekranie dotykowym przyciski paska narzędzi, menu, karty i przyciski okien dialogowych są większe, więc łatwo trafić w nie palcem.

## Co dzieje się po uniesieniu palca

Aby pierwszy palec szczypania nigdy nie zostawiał śladu, niektóre narzędzia działają po **uniesieniu** palca, a nie po dotknięciu:

- {{ui:Policz}}: kropka jest dodawana po uniesieniu.
- {{ui:Notatka}}: notatka jest umieszczana po uniesieniu.
- {{ui:Polilinia}}, {{ui:Wielokąt}}, {{ui:Wolna chmura}} i {{ui:Pole}}: każdy punkt jest dodawany po uniesieniu.
- {{ui:Linia}}, {{ui:Strzałka}}, {{ui:Długość}} i {{ui:Kalibruj}}: po stuknięciu początku i następnie końca koniec jest umieszczany po uniesieniu.

Jeśli palec przesunie się choć trochę przed uniesieniem, nie liczy się to jako stuknięcie i nic nie jest dodawane. Stukaj czysto; aby poprawić, użyj {{ui:Cofnij}}.

Narzędzia, którymi przeciąga się ({{ui:Pióro}}, {{ui:Zakreślenie}}, {{ui:Chmura}}, {{ui:Prostokąt}}, {{ui:Elipsa}}, {{ui:Wyniesienie}}, {{ui:Tekst}}, {{ui:Pieczątka}}), zaczynają działać od razu po dotknięciu; drugi palec je anuluje.

## Zaznaczanie palcem

- Stuknij adnotację, aby ją zaznaczyć; przeciągnij ją, aby przesunąć; przeciągnij uchwyt, aby zmienić rozmiar. Po dotknięciu arkusza palcem adnotacje i uchwyty mają większy obszar trafienia, a uchwyty są rysowane większe.
- Przeciągnij po pustym arkuszu, aby narysować okno zaznaczania (od lewej do prawej: całkowicie wewnątrz; od prawej do lewej: dotykające).
- W {{ui:Zaznacz}} jeden palec **nie** przesuwa widoku. Użyj dwóch palców albo wybierz {{ui:Przesuń}}.

## Czynności wymagające klawiatury

Bez klawiatury nie ma {{key:Shift}}, {{key:Esc}} ani {{key:Enter}}. Oto, co zrobić zamiast tego:

| Działanie klawiaturą | Bez klawiatury |
|---|---|
| {{key:Esc}}, aby anulować lub wrócić do narzędzia zaznaczania | Stuknij {{ui:Zaznacz}} na pasku narzędzi |
| {{key:Shift}} dla linii pod 45°, kwadratów i okręgów | Rysuj ostrożnie; koryguj uchwytami |
| {{key:Shift}}+kliknięcie, aby dodać do zaznaczenia | Użyj okna zaznaczania |
| {{key:Shift}}+kliknięcie, aby usunąć kropkę liczenia | {{ui:Cofnij}} zaraz po błędnym stuknięciu |
| {{key:Mod+Enter}}, aby zakończyć wpisywanie | Stuknij poza polem tekstowym |
| {{key:Enter}}, aby zakończyć polilinię lub edytować tekst adnotacji | Przytrzymaj palec albo użyj {{ui:Edytuj na arkuszu}} w {{ui:Właściwości}} |
| {{key:Delete}} | {{ui:Usuń}} na pasku narzędzi lub w {{ui:Właściwości}} |
| Rozpoczęcie nowej grupy liczenia klawiszem {{key:Esc}} | Stuknij pusty arkusz przy {{ui:Zaznacz}}, a potem ponownie stuknij {{ui:Policz}} |

Etui z klawiaturą lub klawiatura Bluetooth przywraca wszystkie skróty; na iPadzie klawisz ⌘ działa dla {{key:Mod+Z}} i pozostałych.

Przyciski nie pokazują podpowiedzi przy dotyku. Klawisz każdego narzędzia jest wymieniony w [Klawiatura i mysz](topic:keyboard).

## Rysik i Apple Pencil

Rysik (Apple Pencil, Surface Pen i podobne) działa jak mysz: rysuje i zaznacza, a działa od razu po dotknięciu. Do szczypania i przesuwania używaj palców. Nacisk nie zmienia grubości linii.

## Otwieranie i zapisywanie na iPadzie

- {{ui:Otwórz}} pokazuje okno wyboru z aplikacji Pliki: iCloud Drive, Na moim iPadzie i dowolna aplikacja pamięci, która jest podłączona.
- {{ui:Zapisz}} pyta o pobranie; kopia trafia do Plików, do folderu Pobrane (albo do folderu ustawionego w ustawieniach Safari).

## Bezpieczne zachowanie pracy na tablecie

:::warning
Safari na iPadzie nie ostrzega przed opuszczeniem strony z niezapisaną pracą, a iPadOS może przeładować kartę w tle, aby zwolnić pamięć. MarkupCraft zachowuje kopię odzyskiwania w przeglądarce i proponuje ją ponownie po ponownym otwarciu (zobacz [Odzyskiwanie pracy](common:recover)), ale **zapisuj po każdym arkuszu lub po każdym obchodzie**: karta prywatna nie zachowuje żadnej kopii.
:::

- Nazwa, ustawienia narzędzi i skrzynka narzędzi są zachowywane w tej przeglądarce na tym iPadzie, tak jak na komputerze. Zobacz [Co przechowuje ta przeglądarka](topic:browser-storage).
- **Przed wizytą na budowie bez zasięgu:** dopóki masz połączenie, otwórz MarkupCraft w Safari (lub Chrome) na iPadzie i wybierz {{ui:Zapisz do pracy offline}} na pasku u góry. Poczekaj, aż pojawi się „Gotowe offline” (licznik pokazuje „Zapisywanie N z M”; czytnik i edytor PDF mają około 6 MB). Na miejscu otwórz ten sam adres lub zakładkę do niego: otwieranie, oznaczanie adnotacjami i zapisywanie plików PDF działają bez połączenia. Jeśli pojawi się „Tryb offline niedostępny”, karta jest prywatna; użyj zwykłej karty. Zobacz [Praca offline](common:offline).
- Safari usuwa kopię offline, z której nie korzystano przez kilka tygodni. Przed wyjazdem kliknij „Gotowe offline” i wybierz „Zapisz ponownie (pobierz najnowszą wersję)”.
- Bardzo duże zestawy planów zużywają dużo pamięci. Na tablecie otwieraj tylko arkusze potrzebne podczas wizyty.

## Na telefonie

Działa, ale ekran jest mały: części układają się jedna pod drugą (pasek narzędzi, arkusz, pasek stanu, panele, a na końcu lista arkuszy), a pasek narzędzi przewija się w bok. Telefon służy do przeglądania i szybkiej notatki, a tablet lub komputer do właściwego przeglądu.

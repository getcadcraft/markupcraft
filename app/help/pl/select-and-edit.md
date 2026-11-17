---
title: Zaznacz, przesuń i zmień adnotacje
summary: Wybieraj adnotacje kliknięciem lub oknem, przesuwaj, zmieniaj rozmiar, przesuwaj o piksel, wycinaj, kopiuj, wklejaj, wklejaj w miejscu, duplikuj, usuwaj i cofaj.
keywords: zaznacz, zaznaczenie, zaznacz wszystko, okno, przecięcie, przesuń, uchwyty, przesunięcie o piksel, wytnij, kopiuj, wklej, wklej w miejscu, duplikuj, schowek, inna karta, usuń, cofnij, ponów, edytuj
from: 62c7def3
---

Najpierw wybierz {{ui:Zaznacz}} ({{key:V}}). Naciśnięcie {{key:Esc}} też tam prowadzi: pierwsze naciśnięcie czyści zaznaczenie, kolejne przełącza z powrotem na {{ui:Zaznacz}}.

## Wybieranie adnotacji

:::mouse
- **Jedna adnotacja:** kliknij ją. Pojawią się przerywana ramka i uchwyty, a {{ui:Właściwości}} ją pokażą.
- **Dodanie lub usunięcie jednej:** przytrzymaj {{key:Shift}} i kliknij.
- **W całości w oknie:** przeciągnij od lewej do prawej po pustym miejscu arkusza. Wybierane są tylko adnotacje w całości wewnątrz ramki (ciągły kontur).
- **Dotykając okna:** przeciągnij od prawej do lewej. Wybierane jest wszystko, czego dotyka ramka (zielony, przerywany kontur).
- **Wszystko na tym arkuszu:** {{key:Mod+A}} albo {{ui:Więcej}}, a potem {{ui:Zaznacz wszystko}} w grupie {{ui:Edycja}} na pasku narzędzi.
- **Nic:** kliknij puste miejsce, naciśnij {{key:Esc}} albo wybierz {{ui:Więcej}}, a potem {{ui:Odznacz wszystko}}.
:::

:::touch
- **Jedna adnotacja:** dotknij jej.
- **Kilka:** przeciągnij jednym palcem po pustym miejscu arkusza, by narysować okno. Od lewej do prawej wybiera to, co jest w całości w środku; od prawej do lewej wybiera to, czego dotyka.
- Dotknięcie z przytrzymanym {{key:Shift}} działa tylko przy podłączonej klawiaturze. Bez niej użyj okna.
- Jeden palec nigdy nie przesuwa widoku w {{ui:Zaznacz}}; użyj dwóch palców albo narzędzia {{ui:Przesuń}}.
:::

Komentarze tylko do odczytu, które przyszły z plikiem, pokazują szarą przerywaną ramkę bez uchwytów. Można je zaznaczać i na nie odpowiadać, ale nie zmieniać.

## Przesuwanie i zmiana rozmiaru

- **Przesuń:** przeciągnij zaznaczoną adnotację. Przytrzymaj {{key:Shift}}, by przesuwać tylko w wielokrotnościach 45°. Kilka zaznaczonych adnotacji przesuwa się razem.
- **Zmień rozmiar:** przy jednej zaznaczonej adnotacji przeciągnij uchwyt. Kwadratowe uchwyty zmieniają ramkę (przytrzymaj {{key:Shift}}, by zachować proporcje); okrągłe przesuwają jeden punkt narożny linii, polilinii, wielokąta, chmury lub pomiaru (przytrzymaj {{key:Shift}} dla 45°); rombowe przesuwają koniec i zgięcie wyniesienia. Rysunki piórem skalują się względem swojej ramki.
- **Przesunięcie o piksel:** naciśnij klawisze strzałek, by przesunąć zaznaczenie o jeden piksel ekranu; przytrzymaj {{key:Shift}}, by przesunąć o dziesięć. Każde naciśnięcie to jeden krok cofania.

## Zmiana treści lub wyglądu

- **Tekst, wyniesienia i notatki:** kliknij dwukrotnie adnotację, naciśnij {{key:Enter}} albo wybierz {{ui:Edytuj na arkuszu}} w {{ui:Właściwościach}}. Wpisz tekst, potem kliknij poza nim lub naciśnij {{key:Mod+Enter}}. {{key:Esc}} anuluje edycję.
- **Pieczątki:** wybierz inną pieczątkę w {{ui:Właściwościach}} (dwukrotne kliknięcie otwiera {{ui:Właściwości}} za ciebie).
- **Styl:** {{ui:Kolor}}, {{ui:Grubość linii}}, {{ui:Wypełnienie}}, {{ui:Krycie}} i {{ui:Rozmiar tekstu}} w sekcji „Styl” w {{ui:Właściwościach}}. Przy kilku zaznaczonych {{ui:Właściwości}} pokazują rodzaje, które wybrałeś, i zmieniają je wszystkie naraz.

## Kopiowanie, wklejanie i duplikowanie

Grupa {{ui:Edycja}} na pasku narzędzi ma {{ui:Kopiuj}} i {{ui:Wklej}}; jej menu {{ui:Więcej}} zawiera wszystkie te polecenia, każde z klawiszem.

| Polecenie | Klawisz | Co robi |
|---|---|---|
| {{ui:Wytnij}} | {{key:Mod+X}} | Kopiuje zaznaczone adnotacje i je usuwa |
| {{ui:Kopiuj}} | {{key:Mod+C}} | Kopiuje zaznaczone adnotacje |
| {{ui:Wklej}} | {{key:Mod+V}} | Umieszcza kopię na arkuszu, na którym jesteś (gdzie – niżej) |
| {{ui:Wklej w miejscu}} | {{key:Mod+Shift+V}} | Umieszcza kopię dokładnie w miejscu, skąd ją skopiowano: na tym samym arkuszu – na oryginale; na innym arkuszu – w tym samym miejscu na papierze |
| {{ui:Duplikuj}} | {{key:Mod+D}} | Tworzy kopię zaznaczenia nieco niżej i w prawo, bez zmieniania tego, co kopiowałeś wcześniej |

**Gdzie Wklej umieszcza kopię:**

- {{key:Mod+V}}, gdy wskaźnik jest na arkuszu, umieszcza kopię wycentrowaną na wskaźniku. Przesuń wskaźnik, naciśnij {{key:Mod+V}} ponownie, a umieścisz kolejną.
- Przycisk {{ui:Wklej}} (wtedy wskaźnik jest na pasku narzędzi) albo {{key:Mod+V}}, gdy wskaźnik jest poza arkuszem, wkleja kopię nieco niżej i w prawo od oryginału. Każde kolejne wklejenie tej samej kopii przesuwa się trochę dalej, więc kopie nie zasłaniają się nawzajem. Na innym arkuszu pierwsze wklejenie ląduje tam, gdzie był oryginał na swoim arkuszu. Jeśli to miejsce jest poza widokiem, kopia ląduje na środku widoku.
- Aby {{key:Mod+V}} zawsze wklejało obok oryginału, wybierz {{ui:Obok kopii}} w {{ui:Wklej}} w [ustawieniach MarkupCraft](topic:settings).

Wklejone adnotacje są zaznaczone, więc od razu możesz je przeciągać. Każde wycięcie, wklejenie lub duplikat to jeden krok cofania: {{key:Mod+Z}} cofa całe wklejenie.

Wklejone kopie są nowymi adnotacjami: dostają twoje imię, dzisiejszą datę, stan Otwarte, brak numeru usterki i pusty wątek. Ich rodzaj, kształt, styl, tekst i komentarz są zachowane. Komentarzy tylko do odczytu, które przyszły z plikiem, nie da się skopiować ani wyciąć.

**Między kartami:** to, co skopiujesz, jest też zapisywane w tej przeglądarce, więc inna karta MarkupCraft w tej samej przeglądarce może to wkleić. Kopiowanie adnotacji nie używa schowka komputera: nie wkleisz ich do innego programu, a tekst skopiowany gdzie indziej nie wkleja się jako adnotacja.

**Menu kontekstowe:** kliknij prawym przyciskiem adnotację (lub puste miejsce papieru), by zobaczyć {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej tutaj}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zapisz zaznaczenie jako pieczątkę…}}, {{ui:Scal ze stroną przy zapisie}}, {{ui:Wstaw tutaj obraz…}} i {{ui:Zaznacz wszystko}}. Kliknięcie prawym przyciskiem niezaznaczonej adnotacji najpierw ją zaznacza. Przeciąganie prawym przyciskiem nadal przesuwa widok. Na ekranie dotykowym długie przytrzymanie adnotacji otwiera to samo menu (na tekście zaczyna edycję tekstu). Klawisz menu albo {{key:Shift+F10}} otwiera je przy zaznaczeniu.

Zawartość strony zaznaczona narzędziem {{ui:Zawartość}} też się kopiuje i wkleja: zob. [Zmiana własnych linii, obrazów i tekstu strony](topic:page-content).

Aby skopiować część samej strony jako obraz (prostokąt, elipsę lub kształt swobodny) albo jako półprzezroczystą nakładkę na inny arkusz lub aplikację, zob. [Kopiowanie obszaru strony lub nakładki](topic:copy-an-area).

## Usuwanie

Naciśnij {{key:Delete}} albo {{key:Backspace}}, wybierz {{ui:Więcej}}, a potem {{ui:Usuń}} na pasku narzędzi, albo {{ui:Usuń}} w {{ui:Właściwościach}}. Pasek stanu mówi, ile usunięto. Komentarze tylko do odczytu z pliku nigdy nie są usuwane („zachowano jak w pliku”).

## Cofanie i ponawianie

- {{key:Mod+Z}} cofa, {{key:Mod+Y}} albo {{key:Mod+Shift+Z}} ponawia. Pasek narzędzi ma {{ui:Cofnij}} i {{ui:Ponów}}.
- Pasek stanu mówi, co cofnięto („Cofnięto przesunięcie adnotacji.”).
- Cofanie obejmuje każdą zmianę adnotacji, stanów, odpowiedzi, pozycji listy usterek, skal arkuszy i nazw arkuszy, do 500 kroków.
- Historia jest czyszczona po zamknięciu zestawu.

## Kopiowanie adnotacji na inne arkusze

Aby umieścić tę samą pieczątkę, notatkę lub chmurę na kilku arkuszach, zaznacz ją (lub kilka adnotacji) i wybierz {{ui:Kopiuj na inne arkusze…}} w {{ui:Właściwościach}}. Zaznacz arkusze albo {{ui:Wszystkie arkusze}} i wybierz {{ui:Kopiuj}}. Każdy arkusz dostaje kopię w tym samym miejscu na stronie, podpisaną twoim imieniem. Jedno {{key:Mod+Z}} usuwa je wszystkie.

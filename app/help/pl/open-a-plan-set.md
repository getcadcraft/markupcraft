---
title: Otwieranie zestawu planów i przechodzenie między arkuszami
summary: Otwórz jeden lub wiele plików PDF albo zacznij od pustych stron, znajdź arkusze po numerze lub nazwie, powiększaj i przesuwaj widok oraz zmień nazwę arkusza, gdy plik poda ją błędnie.
keywords: otwórz, nowy, pusta strona, pusty arkusz, szkic, siatka, bez nazwy, zestaw planów, arkusze, strony, miniatury, etykiety stron, numer arkusza, tabliczka rysunkowa, zmień nazwę, nawigacja, powiększanie, przesuwanie, dopasuj, szukaj arkuszy
from: 1e7f4d50
---

## Otwieranie zestawu

1. Wybierz {{ui:Otwórz}} na pasku narzędzi albo naciśnij {{key:Mod+O}}.
2. W oknie wyboru pliku zaznacz wszystkie pliki PDF zestawu ({{pick:mac=przytrzymaj ⌘ i kliknij każdy plik|windows linux=przytrzymaj Ctrl i kliknij każdy plik}} albo zaznacz zakres z Shift), a następnie potwierdź.
   Możesz też przeciągnąć pliki z {{pick:mac=Findera|windows=Eksploratora plików|linux=menedżera plików}} na obszar arkusza. Podczas przeciągania pojawia się napis „Upuść pliki PDF, aby je otworzyć”.
3. Poczekaj, aż pasek stanu pokaże „Otwieranie <file>…”. Przy dużych plikach licznik pokazuje postęp, na przykład „(10 z 60 arkuszy)”.

Wynik: lista {{ui:Arkusze}} pokazuje każdą stronę każdego pliku w kolejności otwierania, a pasek stanu wyświetla coś w rodzaju „Otwarto 3 pliki (42 arkusze w zestawie).” Jeśli pliki miały już komentarze, podaje, ile ich odczytano.

Aby później dodać kolejne pliki do zestawu, otwórz je w ten sam sposób. Zostaną dopisane na końcu listy.

## Zacznij od pustych stron

Aby szkicować lub robić notatki bez rysunku, utwórz puste strony zamiast otwierać plik PDF:

1. Wybierz {{ui:Nowy}} na pasku narzędzi albo {{ui:Zacznij od pustej strony}} na ekranie startowym, albo naciśnij {{key:Mod+N}}, jeśli przeglądarka na to pozwala (aplikacja na komputer i Studio zawsze to umożliwiają).
2. Wybierz {{ui:Rozmiar papieru}}: Letter, Tabloid lub ANSI B, ARCH D, ARCH E, A4, A3 albo A1, oraz {{ui:Pionowa}} lub {{ui:Pozioma}}.
3. Wybierz {{ui:Siatka}}: {{ui:Brak}}, {{ui:Kropki}} lub {{ui:Kwadraty}}. Oczka siatki mają 1/4 cala, a na papierze calowym grubszą linię co cal; na papierze metrycznym mają 5 mm, z grubszą linią co 10 mm. Siatka jest drukowana na stronie.
4. Wpisz, ile {{ui:Strony}} chcesz mieć, od 1 do 20, a następnie wybierz {{ui:Utwórz}}.

Wynik: nowy plik PDF o nazwie „Untitled-1.pdf” (potem „Untitled-2.pdf” i tak dalej) otwiera się jak każdy inny plik, utworzony tutaj, na tym komputerze. Każde narzędzie działa na nim, a {{ui:Zapisz}} pobiera plik „Untitled-1 (marked up).pdf”. MarkupCraft zapamiętuje wybory na następny raz.

Strony nie mają skali: pasek stanu pokazuje „Nie skalibrowano”. Siatka nie jest skalą. Aby mierzyć, najpierw skalibruj arkusz albo wybierz skalę; zobacz [Kalibracja i pomiar](topic:calibrate-and-measure).

Aby dodać stronę do pustego zestawu, otwórz jeden z jego arkuszy i wybierz {{ui:Dodaj pustą stronę}} pod listą {{ui:Arkusze}}. Nowa strona ma taki sam papier i siatkę i trafia na koniec. Podobnie jak każda zmiana strony, nie można jej cofnąć; zobacz [Drukowanie i zmiana stron](topic:pages-and-printing).

## Jak arkusze otrzymują nazwy

MarkupCraft nadaje każdemu arkuszowi nazwę „<numer arkusza> — <tytuł>”, na przykład „A-101 — Rzut parteru”, na podstawie pierwszego z poniższych źródeł, jakie znajdzie:

1. Nazwa wpisana za pomocą {{ui:Zmień nazwę arkusza}} (poniżej).
2. Etykiety stron samego pliku PDF, jeśli osoba, która go utworzyła, je ustawiła (na przykład „A-101”).
3. Tabliczka rysunkowa: MarkupCraft odczytuje tekst strony i szuka czegoś, co wygląda jak numer arkusza (A-101, A1.01, M-201A, KA1-1), preferując prawy dolny róg, prawy pasek i dolny pas, a jako tytuł bierze największy tekst w pobliżu.
4. W przeciwnym razie nazwa pliku i strona: „Plany — strona 3”.

Aby zobaczyć, które źródło zostało użyte, naciskaj {{key:Esc}}, aż nic nie będzie zaznaczone, a {{ui:Zaznacz}} będzie włączone, po czym spójrz na {{ui:Właściwości}}: „Odczytano z” pokazuje „Etykieta strony”, „Tabliczka rysunkowa”, „Nazwa pliku” lub „Wpisane ręcznie”.

:::note
Zeskanowane arkusze oraz pliki PDF, których napisy wyeksportowano jako linie, nie mają tekstu do odczytania. Do czasu zmiany nazwy są nazywane według pliku i strony. MarkupCraft nie potrafi jeszcze odczytywać tekstu z obrazów.
:::

## Przechodzenie między arkuszami

- Kliknij arkusz na liście {{ui:Arkusze}}.
- Naciśnij {{key:PageDown}}, aby przejść do następnego arkusza, i {{key:PageUp}}, aby wrócić do poprzedniego, albo użyj strzałek na pasku pod arkuszem.
- Wpisz w polu {{ui:Szukaj arkuszy}}: część numeru („A-2”), słowo z tytułu („dach”) albo nazwę pliku. Lista zawęża się podczas pisania („4 z 42”). Naciśnij {{key:Enter}}, aby otworzyć pierwszy wynik. Wyczyść pole, aby znów zobaczyć wszystkie arkusze.

Każdy arkusz zachowuje własne powiększenie i położenie do chwili zamknięcia zestawu.

## Powiększanie i przesuwanie

:::mouse
- **Powiększanie:** obracaj kółko myszy nad arkuszem. Powiększa wokół wskaźnika. Możesz też nacisnąć {{key:Plus}} i {{key:Minus}} (również z {{key:Mod}}) albo użyć przycisków powiększenia. Dokładny procent wpisz w polu powiększenia.
- **Dopasowanie:** {{ui:Dopasuj stronę}} ({{key:Mod+0}}) pokazuje cały arkusz; {{ui:Dopasuj szerokość}} ({{key:Mod+9}}) wypełnia szerokość.
- **Przesuwanie:** przeciągaj środkowym przyciskiem (kółkiem) albo prawym przyciskiem, przytrzymaj {{key:Space}} i przeciągaj, albo wybierz {{ui:Przesuń}} ({{key:H}}) i przeciągaj. Gdy nic nie jest zaznaczone, także klawisze strzałek przesuwają arkusz.
:::

:::mac mouse
Na gładziku Maca przewijanie dwoma palcami powiększa (nie przewija arkusza). Aby przesuwać, przytrzymaj {{key:Space}} i przeciągnij jednym palcem albo przełącz na {{ui:Przesuń}} klawiszem {{key:H}}. Szczypanie powiększa w Chrome, Edge i Firefox.
:::

:::touch
- **Powiększanie i przesuwanie:** połóż dwa palce na arkuszu. Rozsuń je lub zbliż, aby powiększać wokół punktu między nimi, a przesuń razem, aby przesuwać. Oba działania zachodzą jednocześnie.
- **Przesuwanie jednym palcem:** najpierw wybierz {{ui:Przesuń}}. Przy każdym innym narzędziu jeden palec rysuje lub zaznacza.
- {{ui:Dopasuj stronę}} i {{ui:Dopasuj szerokość}} znajdują się na pasku pod arkuszem.
:::

Można oddalić widok znacznie poza cały arkusz i powiększyć do 6400%. Arkusz jest ponownie rysowany ostro chwilę po zakończeniu ruchu.

## Zakładki

{{ui:Zakładki}}, u góry panelu {{ui:Arkusze}}, pokazuje zakładki (spis treści) pliku PDF, do którego należy otwarty arkusz. Wybierz zakładkę, aby przejść do jej strony. Ołówek zmienia nazwę zakładki, a krzyżyk ją usuwa. {{ui:Utwórz z arkuszy}} tworzy jedną zakładkę na arkusz, nazwaną zgodnie z listą arkuszy (numer arkusza i tytuł), a {{ui:Dodaj dla tego arkusza}} dodaje zakładkę dla bieżącego arkusza. Zmiany są częścią niezapisanej pracy w pliku: {{ui:Zapisz}} zapisuje je w kopii, w której każdy czytnik PDF je pokazuje.

## Obracanie widoku

Dwa przyciski obrotu po prawej stronie paska pod arkuszem obracają widok o ćwierć obrotu w którąkolwiek stronę, dla arkusza narysowanego w poziomie. Obraca się tylko widok: plik PDF i jego adnotacje pozostają bez zmian, a następny arkusz otwiera się tak, jak jest ustawiony jego plik PDF (każdy arkusz zapamiętuje własny obrót, dopóki zestaw jest otwarty). Tekst dodany w obróconym widoku jest czytelny w pionie, tak jak jest widoczny. Aby obrócić samą stronę w zapisanym pliku PDF, użyj {{ui:Strony}}, a następnie {{ui:Obróć stronę zgodnie z ruchem wskazówek zegara}}; zobacz [Drukowanie i zmiana stron](topic:pages-and-printing).

## Zmiana nazwy arkusza

Gdy nazwa arkusza jest błędna lub jej brak:

1. Pokaż arkusz.
2. Naciskaj {{key:Esc}}, aż nic nie będzie zaznaczone, a narzędzie {{ui:Zaznacz}} będzie włączone. {{ui:Właściwości}} pokażą teraz arkusz.
3. Wybierz {{ui:Zmień nazwę arkusza}}.
4. Wpisz {{ui:Numer arkusza}} i {{ui:Tytuł}}, a następnie wybierz {{ui:Zapisz}}.

Wynik: lista arkuszy, pasek pod arkuszem i lista adnotacji używają nowej nazwy, a „Odczytano z” pokazuje „Wpisane ręcznie”. Zmianę nazwy można cofnąć skrótem {{key:Mod+Z}}.

Aby przywrócić to, co zapisano w pliku, otwórz ponownie {{ui:Zmień nazwę arkusza}}, wyczyść oba pola i wybierz {{ui:Zapisz}}.

Przy zapisie wpisany numer arkusza staje się etykietą strony w pliku PDF, więc inne czytniki PDF pokazują w swoim polu strony również „A-101”. Jeśli nadasz numer dowolnej stronie pliku, każda strona tego pliku otrzyma etykietę w kopii (wpisany numer, a jeśli go nie ma, dotychczasowa etykieta, a w ostateczności numer strony). Wpisany tytuł jest zachowywany dla MarkupCraft, ale inne czytniki go nie pokazują.

## Wysyłanie PDF do TakeoffCraft lub otwieranie go tutaj

Gdy TakeoffCraft jest otwarty w tym samym miejscu (laboratorium, Try lub aplikacje online), pasek pod arkuszem zawiera {{ui:Otwórz w TakeoffCraft}}. Otwiera on plik PDF arkusza w TakeoffCraft, w nowej karcie, tak jak został otwarty tutaj, dzięki czemu można mierzyć na nim ilości. Adnotacje pozostają tutaj; zapisz je jak zwykle.

Przycisk {{ui:MarkupCraft}} w TakeoffCraft robi to samo w drugą stronę: plik PDF otwiera się tutaj, tak jakby wybrano {{ui:Otwórz}}. Jeśli przeglądarka zablokuje nową kartę, zezwól na wyskakujące okna dla tej strony i ponownie wybierz przycisk.

---
title: Zapisz PDF z adnotacjami
summary: Pobierz kopię ze wszystkimi adnotacjami zapisanymi jako standardowe komentarze PDF, sprawdź, co widzą inne czytniki PDF, i wróć do pracy później.
keywords: zapisz, pobierz, eksport pdf, z adnotacjami, adnotacje, komentarze, udostępnij, wyślij, problem, dalsza praca, otwórz ponownie, pełny obieg, drukuj
from: 4c198ebe
---

## Zapisz

1. Wybierz {{ui:Zapisz}} na pasku narzędzi albo naciśnij {{key:Mod+S}}.
2. Jeśli otwartych jest kilka plików, wybierz {{ui:Ten plik}} (plik arkusza, na którym jesteś) albo {{ui:Każdy zmieniony plik}}. Każda kopia pobiera się osobno.
3. Poczekaj, aż zakończy się „Zapisywanie <file>…”. Pierwszy zapis w sesji wczytuje też moduł zapisu PDF.

Wynik: przeglądarka pobiera „<name> (marked up).pdf”, a pasek stanu informuje: „Zapisano A-Plans (marked up).pdf (24 adnotacje, 18.2 MB). Oryginalny plik nie został zmieniony.” Kropka przy {{ui:Zapisz}} znika.

**Twój oryginalny PDF nigdy nie jest zmieniany.** MarkupCraft zapisuje nowy plik. Miejsce zapisu zależy od ustawień pobierania przeglądarki (zob. [Pliki otwierane i zapisywane przez MarkupCraft](topic:files#where-downloads-go)).

## Kontynuuj pracę później

Następnym razem otwórz kopię „(marked up)”, a nie oryginał. Wszystko wraca jako edytowalne: adnotacje, stany, odpowiedzi, pozycje listy usterek, skala każdego arkusza i nazwy arkuszy, które wpisałeś. Ponowny zapis pobiera plik o tej samej nazwie „(marked up)”; przeglądarka może dodać numer, np. „(1)”, jeśli stare pobranie nadal jest w folderze. Stare kopie zastąp lub uporządkuj samodzielnie.

MarkupCraft nie zapisuje PDF samodzielnie. Podczas pracy trzyma w tej przeglądarce kopię odzyskiwania, więc awaria albo zamknięta karta nie kasuje adnotacji: przy następnym otwarciu MarkupCraft pyta „Odzyskać swoją pracę?”. Zob. [Odzyskaj swoją pracę](common:recover). Mimo to zapisz przed zamknięciem; jeśli spróbujesz wyjść z niezapisanymi adnotacjami, przeglądarka najpierw pyta „Opuścić witrynę?” (iPad Safari tego nie robi).

## Co widzą inne czytniki PDF

Każda adnotacja jest zapisywana jako standardowy komentarz PDF (adnotacja) ze swoim rysunkiem, więc każda przeglądarka PDF ją pokaże, wydrukuje i wyświetli na liście komentarzy:

- **Wygląd jest taki sam** jak w MarkupCraft: chmury z ząbkami, grociki, pieczątki, kropki liczenia, numery usterek, etykiety pomiarów.
- **Szczegóły są standardowe:** autor, data, temat, treść komentarza i kolory.
- **Chmury** to komentarze prostokąta lub wielokąta z chmurkową obwódką; **pola tekstowe** i **wyniesienia** to komentarze pola tekstowego; **notatki** to notatki samoprzylepne; ruchy **pióra** i **zakreślacza** to ink; **pieczątki** to komentarze pieczątki.
- **Długości i pola** to komentarze pomiarowe, a każdy skalibrowany arkusz zawiera swoją skalę, więc przeglądarki rozumiejące pomiary mogą pokazać wartości.
- **Odpowiedzi** są odpowiedziami na komentarz, a **stany** to stany przeglądu (Otwarte nie jest zapisywane jako stan).
- **Numery arkuszy**, które wpisałeś, stają się etykietami stron widocznymi w innych przeglądarkach.

Kilka rzeczy odczytuje z powrotem tylko MarkupCraft: przypisanie i termin pozycji listy usterek, stan pozycji oraz niektóre szczegóły stylu. Inne programy je zachowują, chyba że przepiszą komentarz.

W innym programie komentarze można przesuwać i edytować jak każde inne. Jeśli ktoś tak zrobi i odeśle plik, MarkupCraft przy otwarciu użyje nowego położenia komentarza.

Pełne szczegóły: [Co jest zapisywane w PDF](topic:what-the-pdf-keeps).

## Znaki wyświetlane jako „?”

Tekst adnotacji jest zapisywany standardową czcionką Helvetica, którą ma każda przeglądarka PDF. Obejmuje angielskie i zachodnioeuropejskie litery (é, ñ, ü, ø i podobne), ale nie inne pisma, symbole spoza tego zestawu ani emoji. Te znaki wyglądają dobrze w MarkupCraft, ale w zapisanej kopii drukują się jako "?", a komunikat zapisu je liczy: "3 znaki spoza zachodnioeuropejskiego zestawu drukują się jako "?" w kopii." Wpisz takie słowa słownie albo użyj zwykłego zamiennika (np. "dia." zamiast znaku średnicy).

## Pliki, których nie można zapisać

- **Chronione PDF:** „Ten PDF jest chroniony (zaszyfrowany), więc nie można zapisać kopii z adnotacjami. Poproś o kopię bez zabezpieczeń.” Nadal możesz go przeglądać na ekranie oraz eksportować CSV i BCF.
- Jeśli zapis zawiedzie z innego powodu, okno „Nie udało się zapisać <file>” pokazuje przyczynę. Adnotacje nadal są w karcie; nic nie przepada, dopóki jej nie zamkniesz.

## Spłaszczanie i drukowanie

Nie ma jeszcze spłaszczania (wpisywania adnotacji w stronę) ani polecenia drukowania. Aby wydrukować, otwórz zapisaną kopię w dowolnej przeglądarce PDF i drukuj z pokazanymi komentarzami.

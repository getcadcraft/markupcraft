---
title: Przechodzenie z innego oprogramowania do adnotacji
summary: Jak nawyki z pulpitowego programu do adnotacji PDF przekładają się na MarkupCraft oraz różnice, które zaskakują.
keywords: przełączanie, przechodzenie, migracja, znajome, pulpitowe adnotacje pdf, skrzynka narzędzi, lista adnotacji, nakładka, sesje, profil, skróty, różnice
from: c8f323e1
---

Jeśli przeglądasz rysunki w Bluebeam Revu (albo komentujesz PDF w innym pulpitowym programie do PDF), większość MarkupCraft będzie znajoma: chmury, wyniesienia, skrzynka narzędzi, lista adnotacji, statusy z odpowiedziami, skalibrowane pomiary, nakładki arkuszy. Największa różnica to sposób obsługi plików, więc przeczytaj następną sekcję, nawet jeśli resztę pominiesz.

## Pięć różnic, które mają znaczenie

1. **Zapis tworzy nowy plik.** MarkupCraft działa w przeglądarce i nie może nadpisać PDF na twoim dysku. {{ui:Zapisz}} pobiera „<name> (marked up).pdf”, a oryginał zostaje bez zmian. Następnym razem otwórz kopię „(marked up)” i sam porządkuj stare kopie.
2. **PDF zapisuje się wtedy, gdy zapisujesz.** Do tego czasu kopia odzyskiwania w tej przeglądarce chroni twoje adnotacje przy awarii lub zamkniętej karcie, a MarkupCraft zaproponuje ją następnym razem. To siatka bezpieczeństwa: zapisz PDF, aby zachować przegląd.
3. **Twój profil jest w przeglądarce.** Nazwa autora, ustawienia narzędzi i skrzynka narzędzi są przechowywane w tej przeglądarce na tym komputerze. Inna przeglądarka lub komputer zaczyna od zera, a wyczyszczenie danych witryny je kasuje. Wyeksportuj skrzynkę narzędzi jako kopię zapasową. Zobacz [Co zostaje w tej przeglądarce](topic:browser-storage).
4. **Na razie brak wspólnych sesji.** Nie ma wspólnej sesji przeglądu na żywo ani projektu w chmurze. Przegląd przemieszcza się w PDF: zapisz, wyślij kopię, następna osoba odpowiada i zapisuje.
5. **Skala jest na arkusz i tylko na arkusz.** Wewnątrz arkusza nie ma okien widokowych (viewport) i nie ma „zastosuj tę skalę do wszystkich stron”. Kalibruj każdy arkusz, na którym mierzysz.

## Nawyk po nawyku

| Przyzwyczajenie | W MarkupCraft |
|---|---|
| Panel miniatur, etykiety stron | {{ui:Arkusze}} po lewej. Nazwy pochodzą z etykiet stron albo są odczytywane z tabliczki rysunkowej; popraw je przez {{ui:Zmień nazwę arkusza}}. |
| Otwieranie kilku PDF jako zestawu | Otwórz je wszystkie naraz; staną się jedną listą. Plik zestawu nie jest zapisywany: następnym razem otwórz te same PDF. |
| Skrzynka narzędzi z zestawami narzędzi | Karta {{ui:Narzędzia}}: jedna skrzynka na przeglądarkę, zapisane narzędzia ze stylem i tematem. Udostępniaj przez {{ui:Eksportuj}} i {{ui:Importuj}} jako plik JSON. Plików zestawów narzędzi z innych programów nie można zaimportować. |
| Panel właściwości | Karta {{ui:Właściwości}}: status, temat, komentarz, styl, odpowiedzi i pozycja listy usterek w jednym miejscu. |
| Lista adnotacji z kolumnami | Karta {{ui:Adnotacje}} z filtrami: arkusz, autor, status i typ. Eksport CSV lub BCF. Brak własnych kolumn i na razie brak podsumowania PDF lub skoroszytu. |
| Status i stan przeglądu | {{ui:Status}}: Otwarty, Zaakceptowany, Odrzucony, Zakończony. Brak własnych zestawów statusów. Zapisywane jako standardowe stany przeglądu. |
| Odpowiedzi na adnotację | Wątek „Odpowiedzi” w {{ui:Właściwości}}, z zapisanymi zmianami statusu. Wysłanej odpowiedzi nie można edytować. |
| Kalibracja, potem długość, pole, liczenie | {{ui:Kalibruj}}, {{ui:Długość}} ({{key:M}}), {{ui:Pole}} ({{key:Q}}, podaje pole i obwód), {{ui:Policz}} ({{key:U}}). Na razie brak kąta, promienia, objętości, długości polilinii i wycięć. |
| Nakładanie stron | Karta {{ui:Porównaj}}: czerwony dla starego, niebieski dla nowego, wyrównanie przez dwa punkty. Brak automatycznego obrysowywania „porównania dokumentów”. |
| Pieczątki | {{ui:Pieczątka}} z sześcioma wbudowanymi pieczątkami i własnym tekstem, podpisane twoim imieniem i datą. Na razie brak pieczątek z obrazem lub podpisem. |
| Śledzenie usterek lub problemów | Karta {{ui:Lista usterek}}: ponumerowane pozycje z wykonawcą, terminem i statusem; eksport CSV. |
| Sesja współpracy na żywo | Jeszcze niedostępna. Przekazuj zapisany PDF. |
| Spłaszczanie | Jeszcze nie zbudowano. Adnotacje zostają jako komentarze, które inne programy mogą pokazać i wydrukować. |
| Warstwy dla adnotacji | Jeszcze nie zbudowano. Użyj tematów, autorów i filtrów listy, aby sortować komentarze. |
| Hiperłącza między arkuszami | Jeszcze nie zbudowano. |
| Spacja do przesuwania, kółko do powiększania | Tak samo: przytrzymaj {{key:Space}} i przeciągnij; kółko powiększa przy wskaźniku. Kółko nigdy nie przewija strony. |

## Klawisze, które działają inaczej

Wiele klawiszy jednoliterowych działa tak, jak można się spodziewać, ale sprawdź te, zanim palce zrobią to za ciebie:

- {{key:K}} to {{ui:Wyniesienie}}, a {{key:Q}} to {{ui:Pole}}. Jeśli przyzwyczaiłeś się do Q dla wyniesień, tutaj rozpocznie pole.
- {{key:C}} to prostokątna {{ui:Chmura}}; {{key:Shift+C}} to {{ui:Wolna chmura}}.
- {{key:M}} to {{ui:Długość}}, {{key:U}} to {{ui:Policz}}, {{key:Y}} to {{ui:Polilinia}}, {{key:G}} to {{ui:Wielokąt}}, {{key:I}} to {{ui:Zakreślenie}}.
- {{key:Mod+D}} duplikuje zaznaczenie (zamiast zakładki przeglądarki).
- {{key:Mod+Plus}} i {{key:Mod+Minus}} powiększają arkusz, a nie stronę przeglądarki.
- Każdy klawisz można zmienić: zobacz poniżej.

:::tip
Jeśli palce znają Bluebeam Revu, wybierz styl menu {{ui:Przegląd PDF}} w {{ui:Ustawienia}} › {{ui:MarkupCraft}} › {{ui:Menu, klawisze i mysz}}: pasek menu (File, Edit, View, Document, Markup, Measure, Window) nad rzędem narzędzi przeglądu, {{key:Q}} dla wyniesienia, {{key:H}} dla zakreślacza, {{key:N}} dla wielokąta, a pomiary na {{key:Alt+Shift}} z literą. Tam też można zmienić dowolny klawisz. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse).
:::

Pełna lista jest w [Klawiatura i mysz](topic:keyboard).

## Rzeczy działające inaczej, niż można się spodziewać

- **Narzędzia pozostają włączone.** Po chmurze nadal rysujesz chmury. {{key:Esc}} raz czyści zaznaczenie, dwa razy wraca do {{ui:Zaznacz}}.
- **Tekst i wyniesienia wymagają tekstu.** Zakończenie bez wpisania czegokolwiek nie dodaje adnotacji. Notatki zostają puste.
- **Pomiary wymagają najpierw skali.** {{ui:Długość}} i {{ui:Pole}} przełączają na {{ui:Kalibruj}} na nieskalibrowanym arkuszu, a potem wracają.
- **Komentarze z innych programów.** Prostokąty, elipsy, linie, polilinie, wielokąty, rysunki odręczne, pola tekstowe i notatki samoprzylepne stworzone gdzie indziej stają się edytowalnymi adnotacjami MarkupCraft i są zapisywane po swojemu przy zapisie (ich wygląd może się nieznacznie zmienić). Zakreślenia tekstu, pieczątki innych programów i inne specjalne rodzaje pozostają tylko do odczytu: możesz na nie odpowiadać, ale ich nie zmienisz.
- **Znaki spoza zachodnioeuropejskich liter** w zapisanym PDF drukują się jako „?”. Zobacz [Zapisz PDF z adnotacjami](topic:save-the-marked-up-pdf).
- **Daty pieczątek** używają czasu UTC, więc pieczątka zrobiona późno wieczorem w Ameryce może pokazać jutrzejszą datę.
- **Pomiary są przenoszone** jako standardowe komentarze pomiarowe, a każdy skalibrowany arkusz zachowuje swoją skalę, więc program, który czyta pomiary PDF, zwykle może je pokazać. Dokładne działanie zależy od tego programu.

## Korzystanie z obu

Możesz przechodzić w obie strony. Komentarze zrobione gdzie indziej otwierają się w MarkupCraft, a PDF „(marked up)” otwiera się w innych programach PDF z widocznymi wszystkimi adnotacjami, odpowiedziami i statusami. To, co odczytuje tylko MarkupCraft (wykonawca i termin pozycji listy usterek, status pozycji), jest zapisane w pliku dla MarkupCraft.

---
title: Praca z kilkoma plikami naraz
summary: Otwieraj wiele PDF jako jeden zestaw, znajduj arkusze w różnych plikach, kopiuj adnotacje między nimi i zapisuj kopię każdego pliku.
keywords: kilka plików, wiele PDF, zestaw planów, zestaw, zbiorczo, wiele plików, połącz, branże, architektura konstrukcja instalacje, zapisz wszystko, zamknij
from: f59354ae
---

Zestaw planów często przychodzi jako jeden PDF na branżę albo jeden PDF na arkusz. MarkupCraft traktuje wszystko, co otworzysz, jako **jeden zestaw**.

## Otwieranie razem

Zaznacz wszystkie PDF w oknie wyboru plików naraz albo upuść je wszystkie na obszar arkuszy. Aby dodać więcej później, otwórz je tak samo; dołączą na koniec listy {{ui:Arkusze}} w kolejności otwierania.

Wynik: „Otwarto 6 plików (84 arkusze w zestawie).” Każda strona jest arkuszem. Arkusze z numerem pokazują „Arkusz A-101” pod nazwą; pozostałe pokazują plik i stronę.

Nie ma zapisanego pliku „zestawu”: następnym razem otwórz te same PDF ponownie (kopie „(marked up)”, jeśli zapisywałeś).

## W całym zestawie

- **Znajdź arkusz:** {{ui:Szukaj arkuszy}} przeszukuje numery arkuszy, nazwy arkuszy i nazwy plików we wszystkich plikach. {{key:PageUp}} i {{key:PageDown}} przechodzą po kolei przez wszystkie arkusze wszystkich plików.
- **Lista adnotacji:** karta {{ui:Adnotacje}} wymienia adnotacje ze wszystkich plików. Filtruj według {{ui:Arkusz}}, by ją zawęzić. CSV ma kolumnę Plik.
- **Lista usterek:** jedna numeracja dla całego zestawu.
- **Porównanie:** stary i nowy arkusz mogą pochodzić z różnych plików.
- **Kopiowanie i wklejanie:** {{key:Mod+C}} na jednym arkuszu i {{key:Mod+V}} na innym, w dowolnym pliku. Kopia ląduje w tym samym miejscu na stronie, lekko przesunięta.

## Zapis

Wybierz {{ui:Zapisz}}. Gdy otwartych jest więcej plików, MarkupCraft pyta:

- {{ui:Ten plik}}: kopia z adnotacjami pliku arkusza, na którym jesteś.
- {{ui:Każdy zmieniony plik}}: kopia każdego pliku z niezapisanymi zmianami. Każda pobiera się osobno jako „<nazwa pliku> (marked up).pdf”.
- {{ui:Anuluj}}

:::chromium
Przy pierwszym zapisie kilku plików naraz Chrome i Edge mogą zapytać, czy ta witryna może pobierać wiele plików. Wybierz „Zezwól”; w przeciwnym razie dotrze tylko pierwsza kopia.
:::

:::safari
Safari może zapytać osobno przy każdym pliku. Na iPadzie każda kopia trafia do aplikacji Pliki.
:::

Plik, którego adnotacje zostały zapisane, przestaje być liczony jako zmieniony; pozostałe nadal są.

Eksporty CSV, BCF i listy usterek są nazwane według **pierwszego** otwartego pliku.

## Zamykanie

{{ui:Zamknij}} zamyka cały zestaw; nie ma jeszcze sposobu, by zamknąć tylko jeden plik. Jeśli coś jest niezapisane, pyta:

- {{ui:Anuluj}}: nic się nie dzieje.
- {{ui:Zamknij bez zapisywania}}: niezapisane adnotacje przepadają.
- {{ui:Najpierw zapisz kopie}}: zapisuje każdy zmieniony plik, a potem zamyka.

Zamknięcie czyści też historię cofania.

## Duże zestawy

- Tekst każdej strony jest odczytywany przy otwarciu, by znaleźć numery arkuszy, więc zestaw 100 arkuszy wymaga chwili. Pasek stanu liczy arkusze w trakcie.
- Obrazy arkuszy na liście rysują się w miarę przewijania do nich.
- Każdy otwarty PDF jest trzymany w pamięci karty przeglądarki. Jeśli karta zwalnia, zamknij inne ciężkie karty albo przeglądaj jedną branżę naraz.
- Otwarcie tego samego pliku dwa razy daje dwie kopie jego arkuszy. Jeśli tak się stanie, wybierz {{ui:Zamknij}} i otwórz zestaw ponownie.

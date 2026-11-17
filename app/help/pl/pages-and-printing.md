---
title: Drukowanie i zmiana stron pliku PDF
summary: Drukuj arkusze z adnotacjami oraz obracaj, przesuwaj, wstawiaj, usuwaj lub wyodrębniaj strony otwartego pliku PDF.
keywords: drukowanie, drukarka, papier, strony, strona, obrót, obróć, zmiana kolejności, przesuń stronę, wstaw, dodaj stronę, pusta strona, usuń stronę, wyodrębnij, podziel, operacje na stronach
from: 81832d9b
---

Menu {{ui:Strony}} w grupie {{ui:Plik}} działa na pliku PDF, do którego należy otwarty arkusz. Plik PDF na tym komputerze nigdy się nie zmienia: zmiany są częścią zapisywanej kopii.

## Drukowanie

1. Naciśnij {{key:Mod+P}} albo wybierz {{ui:Strony}}, a następnie {{ui:Drukuj…}}.
2. Gdy otwarty jest więcej niż jeden arkusz, wybierz, co wydrukować: {{ui:Ten arkusz}}, każdą stronę tego pliku, cały zestaw albo wpisane strony (na przykład `1-3, 5`).
3. Wybierz {{ui:Drukuj}}. Otworzy się okno drukowania przeglądarki: wybierz tam drukarkę, papier i skalę.

Adnotacje drukują się tak, jak wyglądają na arkuszu: są rysowane na stronach kopii, która trafia do drukarki. Komentarze utworzone w innych programach drukują się tak, jak podaje ich plik PDF.

:::safari firefox
Jeśli przeglądarka nie może drukować z wnętrza strony, arkusze otwierają się jako plik PDF w nowej karcie. Drukuj stamtąd.
:::

## Obracanie strony

Wybierz {{ui:Strony}}, a następnie {{ui:Obróć stronę zgodnie z ruchem wskazówek zegara}} lub {{ui:Obróć stronę przeciwnie do ruchu wskazówek zegara}}. Otwarty arkusz obraca się o ćwierć obrotu. Jego adnotacje pozostają tam, gdzie były na rysunku, a wpisany tekst obraca się razem ze stroną, dzięki czemu nadal czyta się go w pionie.

## Przesuwanie strony

Wybierz {{ui:Strony}}, a następnie {{ui:Przenieś stronę wcześniej}} lub {{ui:Przenieś stronę później}}. Otwarty arkusz zamienia się miejscami z sąsiednim arkuszem w tym samym pliku PDF. Jego adnotacje, skala i numer arkusza przechodzą razem z nim.

## Wstawianie stron

- {{ui:Wstaw strony z PDF…}} umieszcza wszystkie strony innego pliku PDF za otwartym arkuszem.
- {{ui:Wstaw pustą stronę}} dodaje pustą stronę o tym samym rozmiarze za otwartym arkuszem, do szkiców i notatek. W zestawie utworzonym przez {{ui:Nowy}} strona ma także siatkę zestawu.
- W zestawie utworzonym przez {{ui:Nowy}} {{ui:Dodaj pustą stronę}} pod listą {{ui:Arkusze}} dodaje jeszcze jedną stronę, taką jak pozostałe, na końcu. Zobacz [Zacznij od pustych stron](topic:open-a-plan-set#start-with-blank-pages).

Wstawione strony otrzymują numer strony jako etykietę, dopóki nie zmienisz ich nazwy. Zobacz [Zmiana nazwy arkusza](topic:open-a-plan-set#rename-a-sheet).

## Usuwanie stron

1. Wybierz {{ui:Strony}}, a następnie {{ui:Usuń strony…}}.
2. Wpisz numery stron tego pliku PDF, na przykład `3` lub `2-4`. Strona otwartego arkusza jest już uzupełniona.
3. Wybierz {{ui:Usuń strony}}. Jeśli na tych stronach są adnotacje, MarkupCraft poda ich liczbę i zapyta ponownie.

Plik PDF musi mieć co najmniej jedną stronę. Aby usunąć cały plik, zamknij zestaw i otwórz pliki, których jeszcze potrzebujesz.

## Wyodrębnianie stron

Wybierz {{ui:Strony}}, a następnie {{ui:Wyodrębnij strony…}}, i wpisz strony. Pobierają się jako nowy plik PDF o nazwie „<file> (pages 1-3).pdf”, z adnotacjami jako komentarzami, które można dalej edytować. Otwarty plik pozostaje bez zmian.

## Warto wiedzieć

- **Cofanie kończy się na zmianie strony.** {{key:Mod+Z}} cofa adnotacje narysowane po niej, ale nie samą zmianę strony ani niczego, co było wcześniej. Aby zacząć od nowa z oryginalnego pliku PDF, zamknij bez zapisywania.
- Numery stron liczone są w obrębie jednego pliku PDF, a nie całego zestawu. Przesunięcie strony zachowuje ją w obrębie jej własnego pliku.
- Zmienione strony są niezapisaną pracą: {{ui:Zapisz}} pobiera uporządkowaną kopię, a opuszczenie strony najpierw pyta o potwierdzenie.

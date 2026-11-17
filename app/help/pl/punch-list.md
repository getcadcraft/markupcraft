---
title: Tworzenie listy usterek
summary: Zamieniaj adnotacje w ponumerowane pozycje z przydzieleniem, terminem i statusem oraz eksportuj listę.
keywords: lista usterek, usterka, braki, wada, problemy w terenie, spostrzeżenie, przydziel, przydzielono, termin, odbiór, obchód, numer
from: b98b38e6
---

Pozycja listy usterek to adnotacja z numerem, osobą przydzieloną, terminem i statusem pozycji. Numer jest rysowany na arkuszu obok adnotacji, więc wydrukowany arkusz i lista są zgodne.

## Dodawanie pozycji

1. Oznacz każdy problem na arkuszach adnotacją: chmurą, wyniesieniem, notatką lub czymkolwiek innym.
2. Zaznacz jedną lub więcej z nich (zobacz [Zaznaczanie, przesuwanie i zmiana adnotacji](topic:select-and-edit)).
3. Otwórz kartę {{ui:Lista usterek}} i wybierz {{ui:Dodaj zaznaczone do listy usterek}}, albo wybierz {{ui:Dodaj do listy usterek}} w {{ui:Właściwości}}.

Wynik: każda adnotacja dostaje kolejny numer (1, 2, 3…), w kolejności arkuszy, a potem w kolejności rysowania. Na arkuszu pojawia się ponumerowany znacznik, a pasek stanu pokazuje „Dodano 3 pozycje do listy usterek.” Adnotacje, które mają już numer, oraz komentarze tylko do odczytu są pomijane.

## Uzupełnianie szczegółów

W karcie {{ui:Lista usterek}} każda pozycja pokazuje swój numer, temat, tekst, arkusz i status, a pod nimi trzy pola. Te same pola znajdują się w {{ui:Właściwości}} w sekcji „Lista usterek”, gdy adnotacja jest zaznaczona:

- {{ui:Przydzielono}}: imię lub branża, jako dowolny tekst.
- {{ui:Termin}}: data wybrana w kalendarzu.
- {{ui:Status pozycji}}: Otwarta, W toku, Gotowa do przeglądu lub Zamknięta.

Kliknij nagłówek pozycji, aby przejść do niej na jej arkuszu.

Status pozycji jest oddzielny od statusu przeglądu adnotacji (Otwarta, Zaakceptowana, Odrzucona, Zakończona). Status pozycji służy do opisu prac, a status przeglądu do komentarza.

## Usuwanie pozycji z listy

Zaznacz adnotację i wybierz {{ui:Usuń z listy usterek}} w {{ui:Właściwości}}. Adnotacja pozostaje; usuwany jest tylko numer. Dopóki zestaw jest otwarty, numery nie są ponownie używane: następna pozycja nadal dostaje kolejny nowy numer, więc luka oznacza usuniętą pozycję. Gdy plik zostanie ponownie otwarty, numeracja jest kontynuowana po najwyższym numerze w nim zapisanym.

## Eksportowanie listy

Wybierz {{ui:Eksportuj CSV}} w karcie {{ui:Lista usterek}}. Powstaje plik „<name> punch list.csv” z kolumnami: Nr, Arkusz, Plik, Strona, Pozycja, Komentarz, Przydzielono, Termin, Status, Status adnotacji, Autor i Utworzono, w kolejności numerów. Otwórz go w dowolnym arkuszu kalkulacyjnym.

Numery pozycji, osoby przydzielone, terminy i statusy pozycji są również zapisywane w pliku PDF z adnotacjami, więc wracają po ponownym otwarciu. Inne czytniki PDF pokazują znacznik numeru jako część adnotacji. Eksport BCF z listy adnotacji również zawiera osobę przydzieloną i termin (zobacz [Podstawy BCF](topic:bcf-basics)).

## Na budowie z tabletem

Otwórz zestaw na iPadzie, obejdź teren budowy i w każdym miejscu z problemem dodaj {{ui:Notatka}} lub narysuj {{ui:Chmura}}. Dodawaj je do listy usterek w trakcie obchodu i zapisz przed wyjściem. Zobacz [Przegląd na iPadzie lub ekranie dotykowym](topic:review-on-a-tablet).

Raport listy usterek w postaci sformatowanego PDF lub arkusza kalkulacyjnego oraz zdjęcia dołączane do pozycji jeszcze nie zostały zbudowane.

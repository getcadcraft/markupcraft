---
title: Łącza arkuszy
summary: Spraw, by adnotacja przeskakiwała do innego arkusza, i połącz każde wyniesienie arkusza, np. 3/A-501, z jego arkuszem i widokiem jednym przebiegiem za pomocą Zbiorczych łączy.
keywords: hiperłącze, łącze, łącza, skok, wyniesienie arkusza, wyniesienie detalu, wyniesienie przekroju, 3/A-501, przejdź do arkusza, wstecz, automatyczne łącze, zbiorcze łącza, blok tytułowy, numer arkusza, nazwa arkusza, widok, detal, zmień nazwę, przenumeruj, dodatek, łącze PDF
from: 86a17c37
---

Łącze arkusza przenosi cię od adnotacji do innego arkusza zestawu: od dymku detalu do detalu, od notatki do arkusza, do którego się odnosi.

## Połącz adnotację z arkuszem

1. Zaznacz adnotację.
2. W {{ui:Właściwościach}} wybierz arkusz pod {{ui:Link do arkusza}}.

W prawym górnym rogu adnotacji pojawia się mała strzałka. Aby z niej skorzystać, przytrzymaj {{key:Mod}} i kliknij adnotację albo zaznacz ją i wybierz {{ui:Przejdź do …}} w {{ui:Właściwościach}}. {{key:Alt+Left}} wraca do arkusza, z którego przyszedłeś.

Łącze wskazuje arkusz po jego numerze, więc działa nadal po ponownym otwarciu zestawu albo po podmianie na nowe wydanie: otwiera najnowszy arkusz o tym numerze. Jeśli taki arkusz nie jest otwarty, pasek stanu o tym informuje.

## Połącz wszystkie wyniesienia arkuszy naraz

Wybierz {{ui:Strony}} › {{ui:Zbiorcze łącza…}} albo {{ui:Połącz odwołania do arkuszy…}} pod {{ui:Znajdź tekst}} na górze panelu {{ui:Arkusze}}.

1. **Sprawdź numery arkuszy.** MarkupCraft wymienia każdy otwarty arkusz wraz z numerem i nazwą odczytanymi z jego bloku tytułowego (albo etykiety strony) oraz tym, skąd pochodzą. Popraw błędne i wpisz numer tam, gdzie go nie znalazł (blok tytułowy, którego numer wydrukowano jako linie, nie ma tekstu do odczytu). Następnie wybierz {{ui:Znajdź wyniesienia}}. Twoje poprawki to jeden krok cofania i stają się etykietami stron w zapisanym PDF.
2. **Przejrzyj listę.** MarkupCraft czyta tekst każdego arkusza w poszukiwaniu wyniesień, takich jak „3/A-501”, „5 / A501”, „DETAIL 2 ON A-501”, dymek z „3” nad „A-501” albo zwykłe „A-501” w notatce, i odczytuje tytuły widoków każdego arkusza (numer detalu z numerem arkusza pod spodem albo duży numer z tytułem obok). Lista ma trzy części:
   - {{ui:Zostanie połączone}}: każde wyniesienie, arkusz, do którego prowadzi, i widok na tym arkuszu. Odznacz te, których nie chcesz. Jeśli widoku nie znaleziono (wyniesienie do widoku 7 na arkuszu z widokami od 1 do 6), wybierz widok z listy obok albo zostaw {{ui:Cały arkusz}}.
   - {{ui:Nie połączono}}: numery arkuszy, których nie ma żaden otwarty arkusz, z liczbą wyniesień, które je wskazują. Wybierz arkusz, do którego każdy się odnosi (np. arkusz przenumerowany), a każde wyniesienie do tego numeru połączy się z nim. Albo zostaw bez połączenia.
   - Ile wyniesień jest już połączonych i nadal prowadzi tam, gdzie trzeba. Zostają bez zmian.
3. Wybierz {{ui:Utwórz łącza}}.

Każde wyniesienie dostaje cienkie niebieskie pole, które jest łączem arkusza. {{key:Mod}}+kliknięcie na nim otwiera arkusz powiększony do widoku. Jedno {{key:Mod+Z}} usuwa je wszystkie.

Kody, które tylko wyglądają jak numery arkuszy, np. R-19 lub W12X26, są pomijane: wyniesienie musi mieć kształt własnych numerów arkuszy zestawu. Własny numer arkusza, w bloku tytułowym i w tytułach widoków, nigdy nie jest wyniesieniem. Zeskanowane arkusze nie mają tekstu do odczytu: najpierw użyj {{ui:Odczytaj tekst (OCR)…}} albo połącz ich wyniesienia pojedynczo.

## Uruchamiaj ponownie, gdy zestaw się zmienia

Zbiorcze łącza można uruchamiać tak często, jak chcesz:

- **Dodano arkusz**, np. dodatek z A-601: otwórz jego plik i uruchom Zbiorcze łącza ponownie. Wyniesienia do A-601, które wcześniej się nie połączyły, połączą się teraz.
- **Arkusz przenumerowano**: popraw jego numer w kroku 1. Łącza utworzone przez Zbiorcze łącza, które nie znajdują już swojego arkusza, są wymienione pod {{ui:Nie połączono}}; wybierz arkusz raz, a wszystkie pójdą za nim. Łącza przeniesione do innego widoku są aktualizowane.
- Łącza, które sam utworzyłeś w {{ui:Właściwościach}}, nigdy nie są zmieniane.

## W zapisanym PDF

Łącze do arkusza w tym samym PDF jest też zapisywane jako łącze PDF, więc inne przeglądarki również przeskakują tam po kliknięciu. Łącze z widokiem otwiera ten widok w innej przeglądarce (skok „fit rectangle” w PDF); bez widoku otwiera cały arkusz. Łącza do arkusza w innym pliku zestawu działają tylko w MarkupCraft.

---
title: Warstwy adnotacji
summary: Umieszczaj adnotacje na nazwanych warstwach, a potem pokazuj, ukrywaj lub blokuj każdą warstwę; inne przeglądarki PDF także mogą je przełączać.
keywords: warstwy, warstwa, ukryj, pokaż, zablokuj, grupuj adnotacje, dyscyplina, mechaniczna, elektryczna, treść opcjonalna, ocg, widoczność
from: 0fbb4c26
---

Warstwy grupują adnotacje, na przykład według dyscypliny lub recenzenta. Ukryj warstwę, aby zobaczyć leżący pod nią rysunek, albo zablokuj ją, aby jej adnotacje nie przesunęły się przypadkiem.

## Utwórz warstwę i rysuj na niej

1. Otwórz {{ui:Warstwy}}, na górze panelu {{ui:Arkusze}}.
2. Wybierz {{ui:Nowa warstwa}}, wpisz nazwę, na przykład `Mechanical`, i wybierz {{ui:Dodaj warstwę}}.
3. Nowa warstwa staje się bieżącą warstwą: każda adnotacja, którą narysujesz od teraz, trafi na nią. Wybierz nazwę innej warstwy albo {{ui:Bez warstwy}}, aby zmienić miejsce nowych adnotacji.

Aby przenieść adnotację na inną warstwę, zaznacz ją i wybierz warstwę w polu {{ui:Warstwa}} w {{ui:Właściwościach}}. {{ui:Nowa warstwa…}} na końcu tej listy tworzy warstwę od razu. Przeniesienie można cofnąć przez {{key:Mod+Z}}.

## Pokazywanie, ukrywanie i blokowanie

Wiersz każdej warstwy ma dwa przyciski:

- **Oko** pokazuje lub ukrywa warstwę. Ukryte adnotacje nie są rysowane i nie można ich wybrać; nadal liczą się na liście {{ui:Adnotacje}}.
- **Kłódka** zostawia adnotacje warstwy na arkuszu, ale uniemożliwia ich wybieranie, przesuwanie i usuwanie.

Przycisk ołówka zmienia nazwę warstwy, a jej adnotacje idą za nią. Filtruj listę {{ui:Adnotacje}} według {{ui:Warstwa}}, aby zobaczyć adnotacje jednej warstwy.

## W zapisanym PDF

Każda warstwa staje się warstwą PDF (treść opcjonalna). Inne przeglądarki PDF wypisują warstwy w swoim panelu warstw i mogą je przełączać; warstwa, którą ukryłeś, jest tam ukryta od początku. Warstwy, które rysunek już miał, na przykład warstwy CAD, zostają bez zmian. Gdy ponownie otworzysz kopię w MarkupCraft, adnotacje wracają na swoje warstwy, ukryte i zablokowane tak, jak je zostawiłeś.

## Warto wiedzieć

- Ukrywanie i blokowanie nie są edycjami: nie cofa ich {{key:Mod+Z}}, ale są zapisywane w PDF.
- Kopiowanie i wklejanie zachowują warstwę adnotacji.
- Spłaszczona kopia rysuje każdą adnotację na stronie, niezależnie od jej warstwy. Zobacz [Zapisz spłaszczoną kopię](topic:flatten).

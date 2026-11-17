---
title: Scal zmiany dwóch osób w jednym PDF
summary: Pozwól git, Fossil lub Mercurial scalić dwie zaadnotowane kopie tego samego PDF adnotacja po adnotacji, także notatki.
keywords: scalanie, git, fossil, mercurial, kontrola wersji, konflikt, trójstronne, cadcraft merge, gitattributes, adnotacje, notatki, zespół, dwie kopie
from: a450a9ef
---

Dwie osoby zaadnotowały ten sam PDF w dwóch kopiach. Jeśli zmieniły różne adnotacje, kopie można scalić programem zamiast ręcznie.

## Co to umożliwia

Każda adnotacja, którą MarkupCraft zapisuje, niesie własną nazwę (swój identyfikator) wewnątrz PDF, a nazwa się nigdy nie zmienia. Scalanie wyszukuje adnotacje po tej nazwie, a nie po ich miejscu w pliku, bo każdy program przenumerowuje miejsca przy zapisie. Notatki i zapieczętowane prywatne notatki są dopasowywane tak samo.

Arkusze nigdy nie są ruszane: obie kopie muszą mieć tyle samo stron. Jeśli się różnią, scalanie zachowuje Twoją kopię bez zmian i o tym informuje, bo dodawanie lub usuwanie stron to zadanie dla człowieka.

## Konfiguracja

Git potrzebuje dwóch linii raz na repozytorium:

```
# .gitattributes
*.pdf merge=cadcraft

# jednorazowo, na każdym komputerze
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez programu git uruchom `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial przyjmują te same trzy pliki w swoim ustawieniu narzędzia scalającego. Plik zadań, który towarzyszy rysunkowi (`<name>.markups.json`, zobacz [Zamień adnotację w zadanie](topic:markups-that-act)), scala się tak samo, jako zwykły tekst.

## Zasady

- Adnotacja zmieniona tylko po jednej stronie jest brana. Ta sama zmiana po obu stronach jest brana raz.
- Ta sama adnotacja zmieniona na dwa sposoby to **konflikt**: zostaje Twoja strona, a raport wymienia obie. Otwórz wynik i popraw tę adnotację ręcznie.
- Adnotacja dodana po którejś stronie jest zachowana. Usunięta po jednej stronie i nietknięta po drugiej jest usuwana. Usunięta po jednej stronie, a zmieniona po drugiej: usunięta i zgłoszona.
- Warstwy, kolumny, zapisy terenowe i notatki podlegają tym samym zasadom.
- Zapieczętowane prywatne notatki nigdy nie są otwierane: bloki obu stron zostają takie, jakie są.

Scalony plik jest pełnym przepisaniem Twojej kopii, tak jak własny zapis MarkupCraft. Nic nie jest wysyłane; wszystko działa na Twoim komputerze.

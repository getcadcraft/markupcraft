---
title: Wydania, rewizje i dziennik zmian rysunków
summary: Prowadź jedną historię wydań wspólnie z modelem architekta: wczytuj wydania, zapisuj uwagi z budowy, rysunki warsztatowe i dołączone modele względem wydania oraz czytaj dziennik zmian rysunków.
keywords: wydanie, rewizja, rewizje, dziennik zmian, dziennik zmian rysunków, rejestr rysunków, polecenie na budowie, rysunek warsztatowy, dołączony model, przetarg, budowa, historia wydań, chmura rewizji, chmura, zestaw adnotacji
from: e4688f64
---

## Co zrobisz

Pracuj na tej samej historii wydań co reszta zespołu. Zobacz, które arkusze wyszły w jakiej rewizji, i zapisuj to, co dzieje się na budowie, przy wydaniu, do którego należy.

## Kroki

1. Otwórz **Wydania i rewizje**.
2. Wybierz **Wczytaj historię wydań** i wskaż plik `.issues.json` zapisany z BimCraft lub innej aplikacji. Jej wydania i rekordy zostaną dodane do Twoich. Nic nie zostaje zastąpione.
3. Wybierz **Dodaj rekord** dla polecenia na budowie, rysunku warsztatowego, zestawu adnotacji, dołączonego modelu lub notatki. Wskaż wydanie, którego dotyczy, i jego status. Wybrany plik zapisuje się po nazwie, rozmiarze i SHA-256; plik zostaje tam, gdzie jest.
4. **Dziennik zmian rysunków** pokazuje jeden wiersz dla każdego arkusza i jedną kolumnę dla każdego wydania. Rewizja w nawiasach została wydana ponownie bez zmian.
5. **Pobierz dziennik zmian (CSV)** zapisuje wydania, tabelę arkuszy i rekordy. **Zapisz historię wydań** zapisuje plik, który odczytują inne aplikacje.

## Warto wiedzieć

- **Zapisz zaznaczone adnotacje** umieszcza zaznaczone adnotacje przy najnowszym wydaniu. Chmura jest zapisywana jako chmura rewizji w rewizji tego wydania. Wybierz **Pokaż** obok rekordu, aby przejść do niego.
- **Zapisz wydanie** wydaje Twoje oznaczone arkusze. **Zmiany od** pokazuje wtedy, które arkusze zostały oznaczone po tym wydaniu.
- Historia jest zapisana wewnątrz oznaczonego PDF. Nie jest częścią cofania.
- Wczytanie tego samego pliku dwa razy niczego nie dodaje dwukrotnie. Gdy dwie kopie zawierają ten sam rekord, zostaje nowszy.

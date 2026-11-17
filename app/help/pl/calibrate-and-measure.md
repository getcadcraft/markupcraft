---
title: Kalibracja arkusza i pomiar
summary: Ustaw skalę każdego arkusza z gotowej skali lub znanego wymiaru, potem mierz długości, pola z obwodami i liczby.
keywords: kalibruj, skala, ustaw skalę, zmierz, długość, odległość, wymiar, pole, stopy kwadratowe, obwód, policz, przedmiar, ilość, linijka, arytmetyka, obliczenie, plus, ułamek
from: 49a25c6d
---

Długości i pola wymagają znajomości skali arkusza. MarkupCraft zapamiętuje skalę **dla każdego arkusza**, więc kalibruj każdy arkusz, który mierzysz. Liczenie nie wymaga skali.

Pasek stanu pokazuje skalę bieżącego arkusza albo „Nie skalibrowano”.

## Wybierz skalę z listy

Użyj tego, gdy PDF ma pełny rozmiar (arkusz 24 × 36, który drukuje się w 24 × 36), a rysunek podaje swoją skalę.

1. Kliknij przycisk skali na pasku stanu („Nie skalibrowano”). Otworzy się okno „Skala arkusza”.
2. Pod {{ui:Skala}} wybierz skalę: architektoniczną (1/32" = 1'-0" do 3" = 1'-0"), inżynierską (1" = 10' do 1" = 100') lub metryczną (1:1 do 1:1000).
3. Wybierz {{ui:Ustaw skalę}}.

Wynik: pasek stanu pokazuje skalę, na przykład `1/4" = 1'-0"`. Skale architektoniczne pokazują długości w stopach i calach, inżynierskie w stopach dziesiętnych, metryczne do 1:50 w milimetrach, a od 1:100 w metrach.

:::warning
Gotowa skala jest poprawna tylko wtedy, gdy PDF nie został pomniejszony. Zestaw w połowie rozmiaru albo arkusz, który przy tworzeniu był „dopasowany do strony”, z gotową skalą mierzy błędnie. Zamiast tego skalibruj według znanego wymiaru i tak czy inaczej sprawdź jeden wymiar.
:::

## Kalibracja według znanego wymiaru

Użyj tego dla zestawów w połowie rozmiaru, zeskanowanych arkuszy, detali w nietypowych skalach albo do sprawdzenia gotowej skali.

1. Znajdź długi wymiar, któremu ufasz, albo paskową podziałkę graficzną.
2. Wybierz {{ui:Kalibruj}} w grupie {{ui:Mierz}} (albo {{ui:Wskaż dwa punkty}} w oknie „Skala arkusza”).
3. Kliknij jeden koniec wymiaru, potem drugi. (Albo przeciągnij od jednego końca do drugiego.) Dla dokładności najpierw powiększ; {{key:Shift}} utrzymuje linię w krokach co 45°.
4. Okno podaje, jak daleko od siebie są punkty na papierze, i pyta: „Jaka jest naprawdę odległość?”. Wpisz {{ui:Rzeczywista odległość}}, na przykład `24'-0"`, `12' 6 1/2"`, `7.2 m` lub `900 mm`.
5. Wybierz, jak pokazywać długości w {{ui:Pokazuj długości w}}: {{ui:Stopy i cale}}, {{ui:Stopy dziesiętne}}, {{ui:Cale}}, {{ui:Metry}} lub {{ui:Milimetry}}.
6. Wybierz {{ui:Ustaw skalę}}.

Wynik: pasek stanu pokazuje „Skalibrowano: 24'-0" na 1.00 in” (rzeczywista długość i długość na papierze), a narzędzie, którym chciałeś mierzyć, wraca do włączenia. Wszystkie sposoby wpisywania długości opisano w [Jednostki i długości](topic:units-and-scales).

Rzeczywista odległość może też być prostym obliczeniem: `12'6"+3/4"`, `(24'-0")/3` albo `2*450mm`. Użyj `+ - * /` i nawiasów; liczba bez jednostki liczy się w jednostce wybranej w {{ui:Pokazuj długości w}} (stopy dla {{ui:Stopy i cale}}). {{ui:Ustaw skalę}} używa wyniku.

Jeśli MarkupCraft nie rozumie wpisanego tekstu, okno to podaje: „To nie jest długość, którą rozumie MarkupCraft. Spróbuj 24'-0", 12' 6 1/2", 7.2 m lub 900 mm.” Obliczenie, którego nie da się wykonać, podaje powód i miejsce, na przykład „Nawias nie jest zamknięty (znak 5).”

## Zmierz długość

1. Wybierz {{ui:Długość}} ({{key:M}}).
2. Kliknij początek, potem koniec. Albo przeciągnij od początku do końca. {{key:Shift}} utrzymuje kroki co 45°.

Wynik: linia wymiarowa z kreskami i zapisaną na niej długością. Pasek stanu ją powtarza („Długość: 12'-6 1/2" (1/4" = 1'-0")”), a {{ui:Właściwości}} pokazuje ją pod {{ui:Długość}}. Stopy i cale są zaokrąglane do najbliższych 1/16".

Jeśli arkusz nie ma jeszcze skali, wybranie {{ui:Długość}} przełącza na {{ui:Kalibruj}}, a pasek stanu wyjaśnia: „Najpierw skalibruj ten arkusz: wskaż dwa punkty w znanej odległości od siebie albo wybierz jego skalę. Potem zmierz.” Po ustawieniu skali {{ui:Długość}} wraca.

## Rysowanie w skali

Na skalibrowanym arkuszu możesz wpisywać rzeczywiste długości podczas rysowania {{ui:Linia}}, {{ui:Strzałka}}, {{ui:Długość}}, {{ui:Polilinia}}, {{ui:Wielokąt}}, {{ui:Wolna chmura}}, {{ui:Pole}} lub przestrzeni:

1. Kliknij pierwszy punkt.
2. Wskaż kierunek następnego odcinka i wpisz jego długość, na przykład `16` (w jednostce arkusza), `12'6"` albo `3.5 m`. Przy wskaźniku podczas pisania otwiera się okno.
3. Naciśnij {{key:Enter}}. Punkt trafia tak daleko, w kierunku wskaźnika.

Aby ustawić kierunek dokładnie, dodaj `<` i kąt w stopniach: `8 < 90` idzie 8 stóp prosto w górę, `4<0` w prawo, `10 < 225` w dół i w lewo, tak jak arkusz jest widziany (łącznie z obróconymi stronami). Wpisuj dalej długości dla kolejnych narożników i zakończ kształt jak zwykle. {{key:Esc}} zamyka okno bez stawiania punktu.

## Zmierz kąt

1. Wybierz {{ui:Kąt}} ({{key:X}}).
2. Kliknij koniec jednego ramienia, potem wierzchołek, a potem koniec drugiego ramienia.

Wynik: dwa ramiona, mały łuk przy wierzchołku i kąt w stopniach, z dokładnością do jednej dziesiątej (od 0° do 180°). Kąt nie wymaga skali. {{ui:Właściwości}} pokazuje go pod {{ui:Kąt}}, a lista, CSV i BCF go zawierają.

{{ui:Łuk}} ({{key:O}}) na skalibrowanym arkuszu pokazuje też swoją długość wzdłuż krzywej w {{ui:Właściwości}}.

## Zmierz pole i obwód

1. Wybierz {{ui:Pole}} ({{key:Q}}).
2. Kliknij każdy narożnik pomieszczenia lub obszaru.
3. Zakończ podwójnym kliknięciem, {{key:Enter}} albo kliknięciem prawym przyciskiem (na dotyku dwukrotnym stuknięciem). {{key:Backspace}} usuwa ostatni narożnik.

Wynik: zacieniony kontur z polem i „P” z obwodem pośrodku, na przykład „128.00 sq ft” i „P 48'-0"”. Skale w stopach dają stopy kwadratowe, w calach cale kwadratowe, w metrach metry kwadratowe, w milimetrach milimetry kwadratowe. Pole wymaga co najmniej trzech narożników.

### Wycięcia

Aby pominąć słup, szyb lub dziedziniec, zaznacz obszar i wybierz {{ui:Dodaj wycięcie}} w {{ui:Właściwości}}. Kliknij narożniki wycięcia wewnątrz obszaru i zakończ tak jak przy obszarze. Wycięcie pozostaje otwarte (bez zacienienia), jego pole jest odejmowane, a jego krawędzie dodawane do obwodu: pomieszczenie 16' × 8' z wycięciem 4' × 4' pokazuje „112.00 sq ft” i „P 64'-0"”. Dodaj tyle, ile potrzeba; nie mogą na siebie nachodzić ani przecinać konturu obszaru. {{ui:Usuń wycięcia}} usuwa wszystkie, a {{key:Mod+Z}} cofa jedno.

## Licz elementy

1. Wybierz {{ui:Policz}} ({{key:U}}).
2. W {{ui:Właściwości}} wpisz {{ui:Nazwa grupy}}, na przykład „Wpusty podłogowe”. (Zostaje na następny raz.)
3. Kliknij każdy element na arkuszu.

Wynik: każde kliknięcie dodaje ponumerowaną kropkę, pierwsza kropka ma etykietę w rodzaju „Wpusty podłogowe: 7”, a pasek stanu pokazuje bieżącą sumę.

- **Nowa grupa:** naciśnij {{key:Esc}} raz (czyści zaznaczenie), zmień {{ui:Nazwa grupy}} i kliknij ponownie.
- **Dodaj do istniejącej grupy:** najpierw zaznacz grupę, potem wybierz {{ui:Policz}} i kliknij.
- **Usuń znacznik:** przy zaznaczonej grupie przytrzymaj {{key:Shift}} i kliknij kropkę. Usunięcie ostatniej kropki usuwa grupę. Na ekranie dotykowym bez klawiatury użyj zamiast tego {{key:Mod+Z}} lub {{ui:Cofnij}}.
- **Zmień nazwę grupy:** zaznacz ją i edytuj {{ui:Nazwa grupy}} w {{ui:Właściwości}}.

Grupa liczenia należy do jednego arkusza. Liczenia na kilku arkuszach pokazują się na liście adnotacji jako osobne grupy.

## Zmiana lub usunięcie skali

Kliknij przycisk skali na pasku stanu. Okno pokazuje bieżącą skalę; wybierz inną, wybierz {{ui:Wskaż dwa punkty}} albo {{ui:Usuń skalę}}.

Narysowane już długości i pola są **ponownie zmierzone** od razu z nową skalą. {{ui:Cofnij}} przywraca starą skalę.

## Gdzie trafiają wyniki

- {{ui:Właściwości}} pokazuje wartości zaznaczonego pomiaru.
- Karta {{ui:Adnotacje}} wymienia każdą wartość, a jej CSV ma kolumnę „Pomiar”. Zobacz [Lista adnotacji](topic:markups-list-and-export).
- Zapisany PDF zachowuje skalę na stronie i zapisuje długości oraz pola jako komentarze pomiarowe, więc inne programy PDF, które rozumieją pomiary, mogą je pokazać. Zobacz [Co jest zapisane w PDF](topic:what-the-pdf-keeps).

Do pełnego przedmiaru z pozycjami, zestawami i cenami użyj TakeoffCraft: MarkupCraft mierzy do przeglądu, a nie do kosztorysowania.

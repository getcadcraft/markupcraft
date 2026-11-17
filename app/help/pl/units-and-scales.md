---
title: Jednostki, długości i skale
summary: Wszystkie sposoby wpisywania długości, jednostki, w jakich pokazywane są długości i pola, zaokrąglanie oraz lista ustawionych skal.
keywords: jednostki, stopy, cale, stopy i cale, metryczne, metry, milimetry, centymetry, skala, ustawiona, skala architektoniczna, skala inżynierska, proporcja, stopy kwadratowe, zaokrąglanie, ułamki
from: 574b0291
---

## Wpisywanie długości

Gdy kalibrujesz na podstawie dwóch punktów, wpisujesz rzeczywistą odległość. MarkupCraft odczytuje wszystkie poniższe zapisy:

| Wpisujesz | Oznacza |
|---|---|
| `24'-0"` | 24 stopy |
| `12' 6 1/2"` albo `12'-6 1/2"` | 12 stóp 6½ cala |
| `12' 6` | 12 stóp 6 cali (bez znaku cala) |
| `6"` albo `1/2"` | cale |
| `12.5'` albo `12.5 ft` | 12½ stopy |
| `3 ft 6 in` | 3 stopy 6 cali (także feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metryczne (także meter, metre, millimeter, centimetre…) |
| `24` | sama liczba, w jednostce wybranej w {{ui:Show lengths in}} |

Zakrzywione cudzysłowy (’ ”) i dwa apostrofy ('') dla cali również działają. Zerowe i ujemne długości są odrzucane.

:::warning
Przecinek jest odczytywany jako separator dziesiętny: `1,5 m` to 1.5 metra. Nie wpisuj separatorów tysięcy: `1,200 mm` jest odczytywane jako 1.2 milimetra. Wpisz `1200 mm`.
:::

## Jak pokazywane są długości i pola

| {{ui:Show lengths in}} | Długość pokazuje się jako | Pole pokazuje się jako |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, zaokrąglone do 1/16" | stopy kwadratowe, dwa miejsca dziesiętne |
| {{ui:Decimal feet}} | `12.54'`, dwa miejsca dziesiętne | stopy kwadratowe, dwa miejsca dziesiętne |
| {{ui:Inches}} | `150.5"`, do dwóch miejsc dziesiętnych | cale kwadratowe, jedno miejsce dziesiętne |
| {{ui:Meters}} | `3.820 m`, trzy miejsca dziesiętne | metry kwadratowe, trzy miejsca dziesiętne |
| {{ui:Millimeters}} | `3820 mm`, pełne milimetry | milimetry kwadratowe, liczby całkowite |

Obwód obszaru używa formatu długości.

## Ustawione skale

Ustawione skale zakładają, że PDF jest w pełnym rozmiarze wydruku: 72 punkty PDF na cal, tak jak program CAD go drukuje.

| Grupa | Skale | Długości pokazywane w |
|---|---|---|
| Architektoniczna | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Stopy i cale |
| Inżynierska | 1" = 10', 20', 30', 40', 50', 60', 100' | Stopy dziesiętne |
| Metryczna | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimetry |
| Metryczna | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metry |

Aby użyć ustawionej skali, ale zobaczyć długości w innej jednostce, zamiast tego kalibruj na podstawie dwóch punktów i wybierz tam jednostkę.

## Skale zapisane przez inne programy

Gdy PDF zawiera już skalę dla strony z innego programu (skala pomiarowa zapisana na stronie), MarkupCraft jej używa, jeśli jest w stopach, calach, metrach, centymetrach lub milimetrach. Etykieta jest pokazywana tak, jak podaje ją plik.

## Położenia na papierze

Pasek stanu pokazuje, gdzie znajduje się wskaźnik na papierze, w calach od lewego górnego rogu arkusza, niezależnie od skali arkusza. Kroki przesunięcia w Porównaniu są podane w punktach PDF (72 punkty PDF na cal).

## Dokładność

Pomiar jest tak dobry, jak kalibracja i Twoje kliknięcia. Kalibruj na najdłuższym znanym wymiarze, jaki znajdziesz, przybliż widok, aby kliknąć jego końce, a następnie sprawdź jeden inny wymiar. PDF, który został przeskalowany podczas tworzenia (wydruk "dopasuj do strony" albo zestaw w połowie rozmiaru), jest nadal dokładny po kalibracji na podstawie wymiaru, ale nie przy użyciu ustawionej skali.

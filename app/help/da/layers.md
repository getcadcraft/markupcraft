---
title: Markeringslag
summary: Læg markeringer på navngivne lag, og vis, skjul eller lås hvert lag; andre PDF-fremvisere kan også skifte dem.
keywords: lag, skjul, vis, lås, gruppér markeringer, disciplin, mekanisk, elektrisk, valgfrit indhold, ocg, synlighed
from: 0fbb4c26
---

Lag grupperer markeringer, for eksempel efter disciplin eller efter gennemgangsperson. Skjul et lag for at se tegningen under det, eller lås det, så dets markeringer ikke flyttes ved et uheld.

## Lav et lag og tegn på det

1. Åbn {{ui:Lag}}, øverst i panelet {{ui:Ark}}.
2. Vælg {{ui:Nyt lag}}, skriv et navn som `Mechanical`, og vælg {{ui:Tilføj lag}}.
3. Det nye lag bliver det aktuelle lag: alle markeringer du tegner herfra, havner på det. Vælg et andet lags navn, eller {{ui:Intet lag}}, for at ændre hvor nye markeringer havner.

Vil du flytte en markering til et andet lag, vælg den og vælg laget under {{ui:Lag}} i {{ui:Egenskaber}}. {{ui:Nyt lag…}} for enden af listen laver et på stedet. Flytningen kan fortrydes med {{key:Mod+Z}}.

## Vis, skjul og lås

Hvert lags række har to knapper:

- **Øjet** viser eller skjuler laget. Skjulte markeringer tegnes ikke og kan ikke vælges; de tæller stadig i listen {{ui:Markeringer}}.
- **Låsen** beholder laget's markeringer på arket, men forhindrer at de vælges, flyttes eller slettes.

Blyantsknappen omdøber et lag og tager dets markeringer med. Filtrér listen {{ui:Markeringer}} efter {{ui:Lag}} for at se ét lags markeringer.

## I den gemte PDF

Hvert lag bliver til et PDF-lag (valgfrit indhold). Andre PDF-fremvisere viser lagene i deres lagpanel og kan skifte dem; et lag du skjulte, starter skjult der også. Lag som tegningen allerede havde, såsom CAD-lag, bliver som de var. Når du åbner kopien igen i MarkupCraft, kommer markeringerne tilbage på deres lag, skjult og låst, som du forlod dem.

## Godt at vide

- At skjule og låse er ikke redigeringer: de fortrydes ikke med {{key:Mod+Z}}, men de gemmes med PDF'en.
- Kopiér og sæt ind beholder en markerings lag.
- En udfladet kopi tegner hver markering ind i siden, uanset dens lag. Se [Gem en udfladet kopi](topic:flatten).

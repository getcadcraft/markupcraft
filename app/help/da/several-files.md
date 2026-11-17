---
title: Arbejd med flere filer på én gang
summary: Åbn mange PDF'er som ét sæt, find ark på tværs af filer, kopiér markeringer mellem dem, og gem hver fils kopi.
keywords: flere filer, flere pdf'er, tegningssæt, sæt, batch, mange filer, kombinér, fagområder, arkitektonisk konstruktion mekanisk, gem alle, luk
from: f59354ae
---

Et tegningssæt kommer ofte som én PDF pr. fagområde eller én PDF pr. ark. MarkupCraft behandler alt, du åbner, som ét **sæt**.

## Åbn dem samlet

Vælg alle PDF'erne i filvælgeren på én gang, eller træk dem alle ind på arkområdet. For at tilføje flere senere åbner du dem på samme måde; de kommer til sidst i listen {{ui:Ark}} i den rækkefølge, du åbner dem.

Resultat: »Åbnede 6 filer (84 ark i sættet).« Hver side er et ark. Ark med et arknummer viser »Ark A-101« under deres navn; andre viser filen og siden.

Der er ingen gemt »sæt«-fil: næste gang åbner du de samme PDF'er igen (kopierne »(marked up)«, hvis du har gemt).

## På tværs af hele sættet

- **Find et ark:** {{ui:Søg i ark}} kigger i arknumre, arknavne og filnavne i alle filer. {{key:PageUp}} og {{key:PageDown}} går gennem alle ark i alle filer i rækkefølge.
- **Markeringsliste:** fanen {{ui:Markeringer}} lister markeringer fra alle filer. Filtrér efter {{ui:Ark}} for at indsnævre den. CSV'en har en kolonne Fil.
- **Mangelliste:** én nummerering for hele sættet.
- **Sammenlign:** det gamle og det nye ark kan komme fra forskellige filer.
- **Kopiér og indsæt:** {{key:Mod+C}} på ét ark og {{key:Mod+V}} på et andet, i en hvilken som helst fil. Kopien lander samme sted på siden, lidt forskudt.

## Gem

Vælg {{ui:Gem}}. Med mere end én fil åben spørger MarkupCraft:

- {{ui:Denne fil}}: en markeret kopi af filen med arket, du er på.
- {{ui:Alle ændrede filer}}: en kopi af hver fil med ikke-gemte ændringer. Hver downloades særskilt som »<filnavn> (marked up).pdf«.
- {{ui:Annuller}}

:::chromium
Første gang du gemmer flere filer på én gang, kan Chrome og Edge spørge, om dette websted må downloade flere filer. Vælg {{ui:Tillad}}; ellers kommer kun den første kopi.
:::

:::safari
Safari kan spørge én gang for hver fil. På en iPad går hver kopi til appen Filer.
:::

En fil, hvis markeringer er gemt, tæller ikke længere som ændret; de andre gør stadig.

CSV-, BCF- og mangellisteeksporter får navn efter den **første** fil, du åbnede.

## Luk

{{ui:Luk}} lukker hele sættet; der er endnu ingen måde at lukke kun én fil på. Hvis noget er ugemt, spørger den:

- {{ui:Annuller}}: intet sker.
- {{ui:Luk uden at gemme}}: ikke-gemte markeringer går tabt.
- {{ui:Gem kopier først}}: gemmer hver ændret fil og lukker derefter.

Lukning rydder også fortrydelseshistorikken.

## Store sæt

- Hver sides tekst læses ved åbning for at finde arknumre, så et sæt på 100 ark tager et stykke tid. Statuslinjen tæller ark, efterhånden som den går.
- Arkbilleder i listen tegnes, når du ruller hen til dem.
- Hver åben PDF holdes i browserfanens hukommelse. Hvis fanen bliver langsom, så luk andre tunge faner, eller gennemgå ét fagområde ad gangen.
- Åbner du den samme fil to gange, får du to kopier af dens ark. Hvis det sker, vælg {{ui:Luk}} og åbn sættet igen.

---
title: Kalibrér et ark og mål
summary: Angiv hvert arks målestok ud fra en forudindstilling eller en kendt målsætning, og mål derefter længder, arealer med omkreds og antal.
keywords: kalibrér, målestok, angiv målestok, mål, længde, afstand, målsætning, areal, kvadratfod, omkreds, tæl, mængdeudtræk, mængde, lineal, aritmetik, beregning, plus, brøk
from: 49a25c6d
---

Længder og arealer kræver kendskab til arkets målestok. MarkupCraft gemmer en målestok **pr. ark**: kalibrér hvert ark, du måler på. Antal kræver ingen målestok.

Statuslinjen viser det aktuelle arks målestok eller "Ikke kalibreret".

## Vælg en målestok fra listen

Brug dette, når PDF'en er i fuld størrelse (et 24 × 36-ark, der udskrives i 24 × 36), og tegningen angiver sin målestok.

1. Klik på målestokknappen i statuslinjen ("Ikke kalibreret"). Boksen "Arkmålestok" åbnes.
2. Vælg under {{ui:Målestok}} målestoken: arkitektonisk (1/32" = 1'-0" til 3" = 1'-0"), ingeniør (1" = 10' til 1" = 100') eller metrisk (1:1 til 1:1000).
3. Vælg {{ui:Angiv målestok}}.

Resultat: statuslinjen viser målestoken, for eksempel `1/4" = 1'-0"`. Arkitektoniske målestoker viser længder i fod og tommer, ingeniørmålestoker i decimalfod, og metriske målestoker op til 1:50 i millimeter og fra 1:100 i meter.

:::warning
En forudindstilling er kun korrekt, hvis PDF'en ikke er formindsket. Et halvstort sæt, eller et ark der blev "tilpasset til side", da det blev lavet, måler forkert med en forudindstilling. Kalibrér i stedet ud fra en kendt målsætning, og kontrollér under alle omstændigheder én målsætning.
:::

## Kalibrér ud fra en kendt målsætning

Brug dette til halvstore sæt, scannede ark, detaljer i mærkelige målestoker eller til at kontrollere en forudindstilling.

1. Find en lang målsætning, du stoler på, eller en grafisk målestang.
2. Vælg {{ui:Kalibrér}} i gruppen {{ui:Mål}} (eller vælg {{ui:Vælg to punkter}} i boksen "Arkmålestok").
3. Klik på den ene ende af målsætningen, derefter på den anden. (Eller træk fra den ene ende til den anden.) Zoom ind først for nøjagtighed; {{key:Shift}} holder linjen i trin på 45°.
4. Boksen siger, hvor langt punkterne er fra hinanden på papiret, og spørger »Hvor langt fra hinanden er de egentlig?«. Skriv {{ui:Virkelig afstand}}, for eksempel `24'-0"`, `12' 6 1/2"`, `7.2 m` eller `900 mm`.
5. Vælg, hvordan længder vises under {{ui:Vis længder i}}: {{ui:Fod og tommer}}, {{ui:Decimalfod}}, {{ui:Tommer}}, {{ui:Meter}} eller {{ui:Millimeter}}.
6. Vælg {{ui:Angiv målestok}}.

Resultat: statuslinjen viser "Kalibreret: 24'-0" over 1.00 in" (den virkelige længde og papirlængden), og det værktøj, du skulle måle med, kommer tilbage. Alle måder at skrive en længde på står i [Enheder og længder](topic:units-and-scales).

Den virkelige afstand kan også være en lille beregning: `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm`. Brug `+ - * /` og parenteser; et tal uden enhed tæller i den enhed, der er valgt under {{ui:Vis længder i}} (fod for {{ui:Fod og tommer}}). {{ui:Angiv målestok}} bruger resultatet.

Hvis MarkupCraft ikke kan læse det, du skrev, siger boksen det: »Det er ikke en længde, MarkupCraft forstår. Prøv 24'-0", 12' 6 1/2", 7.2 m eller 900 mm.« En beregning, den ikke kan løse, siger hvorfor og hvor, for eksempel »En parentes er ikke lukket (tegn 5).«

## Mål en længde

1. Vælg {{ui:Længde}} ({{key:M}}).
2. Klik på start, derefter på slut. Eller træk fra start til slut. {{key:Shift}} holder den i trin på 45°.

Resultat: en målelinje med streger og længden skrevet på. Statuslinjen gentager den ("Længde: 12'-6 1/2" (1/4" = 1'-0")."), og {{ui:Egenskaber}} viser den under {{ui:Længde}}. Fod og tommer afrundes til nærmeste 1/16".

Har arket ingen målestok endnu, skifter valg af {{ui:Længde}} til {{ui:Kalibrér}}, og statuslinjen forklarer: »Kalibrér dette ark først: vælg to punkter med en kendt afstand mellem sig, eller vælg dets målestok. Mål derefter.« Når du har angivet målestoken, kommer {{ui:Længde}} tilbage.

## Skitsér i målestok

På et kalibreret ark kan du skrive virkelige længder, mens du tegner en {{ui:Linje}}, {{ui:Pil}}, {{ui:Længde}}, {{ui:Polylinje}}, {{ui:Polygon}}, {{ui:Fri sky}}, {{ui:Areal}} eller et rum:

1. Klik på det første punkt.
2. Peg i den retning, næste segment går, og skriv dets længde, for eksempel `16` (i arkets enhed), `12'6"` eller `3.5 m`. En boks åbnes ved markøren, mens du skriver.
3. Tryk {{key:Enter}}. Punktet lander den længde væk, i markørens retning.

Vil du sætte retningen præcist, tilføj `<` og en vinkel i grader: `8 < 90` går 8 fod lige op, `4<0` til højre, `10 < 225` ned og til venstre, set på arket (også drejede sider). Bliv ved med at skrive længder til de næste hjørner, og afslut formen som sædvanligt. {{key:Esc}} lukker boksen uden at sætte et punkt.

## Mål en vinkel

1. Vælg {{ui:Vinkel}} ({{key:X}}).
2. Klik på enden af det ene ben, derefter hjørnet, derefter enden af det andet ben.

Resultat: de to ben, en lille bue ved hjørnet og vinklen i grader, til en tiendedel (0° til 180°). En vinkel kræver ingen målestok. {{ui:Egenskaber}} viser den under {{ui:Vinkel}}, og listen, CSV og BCF indeholder den.

En {{ui:Bue}} ({{key:O}}) på et kalibreret ark viser også sin længde langs kurven i {{ui:Egenskaber}}.

## Mål et areal og dets omkreds

1. Vælg {{ui:Areal}} ({{key:Q}}).
2. Klik på hvert hjørne af rummet eller området.
3. Afslut med et dobbeltklik, {{key:Enter}} eller et højreklik (dobbelttryk på touch). {{key:Backspace}} fjerner det sidste hjørne.

Resultat: en skraveret kontur med arealet og "P" med omkredsen i midten, for eksempel "128.00 sq ft" og "P 48'-0"". Fod-målestoker giver kvadratfod, tommer-målestoker kvadrattommer, meter-målestoker kvadratmeter og millimeter-målestoker kvadratmillimeter. Et areal kræver mindst tre hjørner.

### Udsparinger

For at udelade en søjle, en skakt eller en gårdhave vælger du arealet og vælger {{ui:Tilføj en udsparing}} i {{ui:Egenskaber}}. Klik på udsparingens hjørner inde i arealet, og afslut som for et areal. Udsparingen forbliver åben (uskraveret), dens areal trækkes fra, og dens kanter føjes til omkredsen: et 16' × 8' rum med en 4' × 4' udsparing viser "112.00 sq ft" og "P 64'-0"". Tilføj så mange, du har brug for; de må ikke overlappe hinanden eller krydse arealets kontur. {{ui:Fjern udsparinger}} fjerner dem alle, og {{key:Mod+Z}} fortryder én.

## Tæl ting

1. Vælg {{ui:Tæl}} ({{key:U}}).
2. Skriv i {{ui:Egenskaber}} et {{ui:Gruppenavn}}, for eksempel "Gulvafløb". (Det huskes til næste gang.)
3. Klik på hvert element på arket.

Resultat: hvert klik tilføjer en nummereret prik, den første prik bærer et mærke som "Gulvafløb: 7", og statuslinjen holder det løbende total.

- **Start en anden gruppe:** tryk {{key:Esc}} én gang (den fravælger), skift {{ui:Gruppenavn}}, og klik igen.
- **Tilføj til en eksisterende gruppe:** vælg gruppen først, vælg derefter {{ui:Tæl}} og klik.
- **Fjern en markering:** med gruppen valgt holder du {{key:Shift}} nede og klikker på prikken. Fjernes den sidste prik, fjernes gruppen. På en touchskærm uden tastatur bruges {{key:Mod+Z}} eller {{ui:Fortryd}} i stedet.
- **Omdøb en gruppe:** vælg den og ret {{ui:Gruppenavn}} i {{ui:Egenskaber}}.

En tællegruppe hører til ét ark. Tællinger på flere ark vises som separate grupper i markeringslisten.

## Skift eller fjern en målestok

Klik på målestokknappen i statuslinjen. Boksen viser den aktuelle målestok; vælg en anden, vælg {{ui:Vælg to punkter}}, eller vælg {{ui:Fjern målestok}}.

Længder og arealer, der allerede er tegnet, **måles igen** med den nye målestok med det samme. Fortryd bringer den gamle målestok tilbage.

## Hvor tallene går hen

- {{ui:Egenskaber}} viser værdierne for den valgte måling.
- Fanen {{ui:Markeringer}} viser hver værdi, og dens CSV har en kolonne "Measurement". Se [Markeringslisten](topic:markups-list-and-export).
- Den gemte PDF bevarer målestoken på siden og skriver længder og arealer som målekommentarer, så andre PDF-programmer, der forstår målinger, kan vise dem. Se [Hvad der gemmes i PDF'en](topic:what-the-pdf-keeps).

Til en fuld mængdeudtræk med poster, samlinger og priser bruger du TakeoffCraft: MarkupCraft måler til gennemgang, ikke til kalkulation.

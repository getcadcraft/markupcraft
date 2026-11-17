---
title: Kalibrer et ark og mål
summary: Angi målestokken for hvert ark fra en forhåndsinnstilling eller et kjent mål, og mål deretter lengder, arealer med omkrets og antall.
keywords: kalibrer, målestokk, angi målestokk, mål, lengde, avstand, måltilsetting, areal, kvadratfot, omkrets, tell, mengdeuttak, mengde, linjal, regning, beregning, pluss, brøk
from: 49a25c6d
---

Lengder og arealer må kjenne målestokken til arket. MarkupCraft lagrer en målestokk **per ark**: kalibrer hvert ark du måler på. Tellinger trenger ingen målestokk.

Statuslinjen viser målestokken til det gjeldende arket, eller «Ikke kalibrert».

## Velg en målestokk fra listen

Bruk dette når PDF-en er i full størrelse (et ark på 24 × 36 som skrives ut på 24 × 36) og tegningen oppgir målestokken sin.

1. Klikk målestokknappen i statuslinjen («Ikke kalibrert»). Boksen «Målestokk for arket» åpnes.
2. Under {{ui:Målestokk}} velger du målestokk: arkitekt (1/32" = 1'-0" til 3" = 1'-0"), ingeniør (1" = 10' til 1" = 100') eller metrisk (1:1 til 1:1000).
3. Velg {{ui:Angi målestokk}}.

Resultat: statuslinjen viser målestokken, for eksempel `1/4" = 1'-0"`. Arkitektmålestokker viser lengder i fot og tommer, ingeniørmålestokker i desimale fot, og metriske målestokker opp til 1:50 i millimeter og fra 1:100 i meter.

:::warning
En forhåndsinnstilling er bare riktig hvis PDF-en ikke er skalert ned. Et sett i halv størrelse, eller et ark som var «tilpasset siden» da det ble laget, gir feil mål med en forhåndsinnstilling. Kalibrer i stedet fra et kjent mål, og kontroller ett mål uansett.
:::

## Kalibrer fra et kjent mål

Bruk dette for sett i halv størrelse, skannede ark, detaljer i rare målestokker, eller for å kontrollere en forhåndsinnstilling.

1. Finn et langt mål du stoler på, eller en grafisk målestokk.
2. Velg {{ui:Kalibrer}} i gruppen {{ui:Mål}} (eller velg {{ui:Velg to punkter}} i boksen «Målestokk for arket»).
3. Klikk den ene enden av målet, deretter den andre. (Eller dra fra den ene enden til den andre.) Zoom inn først for nøyaktighet. {{key:Shift}} holder linjen i trinn på 45°.
4. Boksen sier hvor langt fra hverandre punktene er på papiret, og spør «Hvor langt fra hverandre er de egentlig?». Skriv inn {{ui:Virkelig avstand}}, for eksempel `24'-0"`, `12' 6 1/2"`, `7.2 m` eller `900 mm`.
5. Velg hvordan lengder vises under {{ui:Vis lengder i}}: {{ui:Fot og tommer}}, {{ui:Desimale fot}}, {{ui:Tommer}}, {{ui:Meter}} eller {{ui:Millimeter}}.
6. Velg {{ui:Angi målestokk}}.

Resultat: statuslinjen viser «Kalibrert: 24'-0" over 1.00 in» (den virkelige lengden og papirlengden), og verktøyet du skulle måle med, kommer tilbake. Alle måter å skrive en lengde på står i [Enheter og lengder](topic:units-and-scales).

Den virkelige avstanden kan også være en liten beregning: `12'6"+3/4"`, `(24'-0")/3` eller `2*450mm`. Bruk `+ - * /` og parenteser. Et tall uten enhet regnes i enheten under {{ui:Vis lengder i}} (fot for {{ui:Fot og tommer}}). {{ui:Angi målestokk}} bruker resultatet.

Hvis MarkupCraft ikke kan lese det du skrev, sier boksen det: «Dette er ikke en lengde MarkupCraft forstår. Prøv 24'-0", 12' 6 1/2", 7.2 m eller 900 mm.» En beregning den ikke kan løse, sier hvorfor og hvor, for eksempel «En parentes er ikke lukket (tegn 5).»

## Mål en lengde

1. Velg {{ui:Lengde}} ({{key:M}}).
2. Klikk start, deretter slutt. Eller dra fra start til slutt. {{key:Shift}} holder den i trinn på 45°.

Resultat: en måltilsetting med streker og lengden skrevet på den. Statuslinjen gjentar den («Lengde: 12'-6 1/2" (1/4" = 1'-0")»), og {{ui:Egenskaper}} viser den under {{ui:Lengde}}. Fot og tommer avrundes til nærmeste 1/16".

Hvis arket ikke har målestokk ennå, bytter valget av {{ui:Lengde}} til {{ui:Kalibrer}}, og statuslinjen forklarer: «Kalibrer dette arket først: velg to punkter med en kjent avstand fra hverandre, eller velg målestokken. Mål deretter.» Etter at du har angitt målestokken, kommer {{ui:Lengde}} tilbake.

## Tegn i målestokk

På et kalibrert ark kan du skrive inn virkelige lengder mens du tegner en {{ui:Linje}}, {{ui:Pil}}, {{ui:Lengde}}, {{ui:Polylinje}}, {{ui:Mangekant}}, {{ui:Fri sky}}, {{ui:Areal}} eller et rom:

1. Klikk det første punktet.
2. Pek i retningen neste segment går, og skriv inn lengden, for eksempel `16` (i arkets enhet), `12'6"` eller `3.5 m`. En boks åpnes ved pekeren mens du skriver.
3. Trykk {{key:Enter}}. Punktet havner så langt unna, i pekerens retning.

For å sette retningen nøyaktig, legg til `<` og en vinkel i grader: `8 < 90` går 8 fot rett opp, `4<0` til høyre, `10 < 225` ned og til venstre, slik arket ses (også roterte sider). Fortsett å skrive inn lengder for neste hjørner, og fullfør formen som vanlig. {{key:Esc}} lukker boksen uten å plassere et punkt.

## Mål en vinkel

1. Velg {{ui:Vinkel}} ({{key:X}}).
2. Klikk enden av den ene armen, deretter hjørnet, deretter enden av den andre armen.

Resultat: de to armene, en liten bue i hjørnet og vinkelen i grader, til en tiendedel (0° til 180°). En vinkel trenger ingen målestokk. {{ui:Egenskaper}} viser den under {{ui:Vinkel}}, og listen, CSV og BCF tar den med.

En {{ui:Bue}} ({{key:O}}) på et kalibrert ark viser også lengden langs kurven i {{ui:Egenskaper}}.

## Mål et areal og omkretsen

1. Velg {{ui:Areal}} ({{key:Q}}).
2. Klikk hvert hjørne i rommet eller området.
3. Avslutt med dobbeltklikk, {{key:Enter}} eller høyreklikk (dobbelttrykk på berøringsskjerm). {{key:Backspace}} fjerner det siste hjørnet.

Resultat: en skravert kontur med arealet, og «P» med omkretsen i midten, for eksempel «128.00 sq ft» og «P 48'-0"». Målestokker i fot gir kvadratfot, tommer gir kvadrattommer, meter gir kvadratmeter, og millimeter gir kvadratmillimeter. Et areal trenger minst tre hjørner.

### Utsparinger

For å utelate en søyle, en sjakt eller en gårdsplass, velg arealet og velg {{ui:Legg til en utsparing}} i {{ui:Egenskaper}}. Klikk hjørnene til utsparingen inni arealet, og avslutt som for et areal. Utsparingen forblir åpen (uskravert), arealet trekkes fra, og kantene legges til omkretsen: et rom på 16' × 8' med en utsparing på 4' × 4' viser «112.00 sq ft» og «P 64'-0"». Legg til så mange du trenger. De kan ikke overlappe hverandre eller krysse konturen til arealet. {{ui:Fjern utsparinger}} tar dem alle bort, og {{key:Mod+Z}} angrer én.

## Tell ting

1. Velg {{ui:Tell}} ({{key:U}}).
2. I {{ui:Egenskaper}} skriver du inn et {{ui:Gruppenavn}}, for eksempel «Gulvavløp». (Det huskes til neste gang.)
3. Klikk hvert element på arket.

Resultat: hvert klikk legger til en nummerert prikk, den første prikken har en etikett som «Gulvavløp: 7», og statuslinjen holder en løpende total.

- **Start en ny gruppe:** trykk {{key:Esc}} én gang (det fjerner utvalget), endre {{ui:Gruppenavn}}, og klikk igjen.
- **Legg til i en eksisterende gruppe:** velg gruppen først, velg deretter {{ui:Tell}} og klikk.
- **Fjern en merking:** med gruppen valgt, hold {{key:Shift}} og klikk prikken. Å fjerne den siste prikken fjerner gruppen. På en berøringsskjerm uten tastatur bruker du {{key:Mod+Z}} eller {{ui:Angre}} i stedet.
- **Gi gruppen nytt navn:** velg den og rediger {{ui:Gruppenavn}} i {{ui:Egenskaper}}.

En telle-gruppe hører til ett ark. Tellinger på flere ark vises som egne grupper i markeringslisten.

## Endre eller fjern en målestokk

Klikk målestokknappen i statuslinjen. Boksen viser gjeldende målestokk. Velg en annen, velg {{ui:Velg to punkter}}, eller velg {{ui:Fjern målestokk}}.

Lengder og arealer som allerede er tegnet, blir **målt på nytt** med den nye målestokken med én gang. Angre gjenoppretter den gamle målestokken.

## Hvor tallene havner

- {{ui:Egenskaper}} viser verdiene for den valgte målingen.
- Fanen {{ui:Markeringer}} lister hver verdi, og CSV-filen har en kolonne «Measurement». Se [Markeringslisten](topic:markups-list-and-export).
- Den lagrede PDF-en beholder målestokken på siden og skriver lengder og arealer som målekommentarer, slik at andre PDF-programmer som forstår mål, kan vise dem. Se [Hva som er lagret i PDF-en](topic:what-the-pdf-keeps).

For en full mengdeuttak med poster, sammenstillinger og priser, bruk TakeoffCraft: MarkupCraft måler for gjennomgang, ikke for kalkulering.

---
title: Fyll ut et PDF-skjema
summary: Skriv i feltene i et PDF-skjema, kryss av i boksene og velg fra listene; verdiene lagres i selve skjemaet.
keywords: skjema, skjemaer, utfyllbar, fyll inn, fyll ut, acroform, felt, tekstfelt, avkrysningsboks, kryss av, alternativknapp, rullegardin, liste, tillatelse, søknad, inspeksjonsskjema, innleveringsskjema, godkjenning
from: ab366541
---

Mange PDF-filer følger med et skjema: byggesøknader, inspeksjonssjekklister, forsider til innleveringer. MarkupCraft viser skjemaets felt og verdiene deres, og lar deg fylle dem ut. Verdiene går inn i PDF-filens egne felt, så Acrobat og alle andre PDF-lesere viser og tar vare på dem.

## Fyll ut skjemaet

1. Åpne PDF-filen. Når den har et skjema, viser statuslinjen hvor mange felt det har.
2. Velg {{ui:Fyll ut skjema}} i verktøylinjen (eller trykk {{key:F}}). Hvert felt på siden får en boks du kan skrive i.
3. Klikk på et felt og skriv. Kryss av i bokser, velg alternativknapper, og velg fra rullegardiner og lister. {{key:Tab}} går til neste felt.
4. For å flytte arket mens du fyller ut, dra hvor som helst utenfor feltene.
5. Trykk {{key:Esc}} eller velg et annet verktøy når du er ferdig. Det du skrev, blir liggende på arket.

Med {{ui:Velg}} setter et dobbeltklikk på et felt {{ui:Fyll ut skjema}} på og plasserer deg i feltet.

## Lagre det utfylte skjemaet

Velg {{ui:Lagre}}. Kopien du laster ned, har verdiene dine i feltene, med markeringene dine ved siden av. Statuslinjen viser hvor mange felt som ble fylt ut.

For å levere et skjema som ingen kan endre, velg {{ui:Sider}}, og deretter {{ui:Lagre en utflatet kopi…}}: verdiene blir en del av siden. Utskrift gjør det samme.

## Greit å vite

- Et felt som PDF-filen låser (skrivebeskyttet), kan ikke endres. Boksen er grå.
- Tekst opp til feltets egen lengdegrense beholdes; ekstra tegn skrives ikke inn.
- Noen skjemaer mangler en tegnet versjon av boksene og knappene, og andre programmer viser dem tomme. MarkupCraft tegner dem, og når du lagrer, legger den til bildet, slik at de vises overalt.
- Angre i et felt gjelder feltet selv: trykk {{key:Ctrl+Z}} mens du skriver i det. Angre for markeringer angrer ikke skjemaverdier.
- Hvis nettleseren lukkes, kommer verdiene du skrev tilbake sammen med resten av det ulagrede arbeidet.
- Verdier skrevet med tegn som standard PDF-skrifttypen ikke kan skrive (for eksempel kinesisk), lagres, og PDF-filen ber hver leser tegne dem selv.
- Signaturfelt og trykknapper fylles ikke ut her. For å signere, bruk {{ui:Stempel}} og signaturen din.
- Verdier skrevet inn i et skjema deles ikke i en Live-økt ennå.

---
title: Udfyld en PDF-formular
summary: Skriv i en PDF's formularfelter, sæt kryds i felterne og vælg fra dens lister; værdierne gemmes i selve formularen.
keywords: formular, formularer, kan udfyldes, udfyld, udfyldning, acroform, felt, felter, tekstfelt, afkrydsningsfelt, sæt kryds, radioknap, rullemenu, liste, tilladelse, ansøgning, kontrolformular, indsendelsesformular, godkend
from: ab366541
---

Mange PDF'er kommer med en formular: tilladelsesansøgninger, kontrolskemaer, forsidesider til indsendelser. MarkupCraft viser formularens felter og deres værdier og lader dig udfylde dem. Værdierne går ind i PDF'ens egne felter, så Acrobat og enhver anden PDF-læser viser og bevarer dem.

## Udfyld formularen

1. Åbn PDF'en. Når den har en formular, siger statuslinjen, hvor mange felter den har.
2. Vælg {{ui:Udfyld formular}} i værktøjslinjen (eller tryk {{key:F}}). Hvert felt på siden får en boks, du kan skrive i.
3. Klik på et felt og skriv. Sæt kryds i afkrydsningsfelter, vælg radioknapper, og vælg fra rullemenuer og lister. {{key:Tab}} går til næste felt.
4. For at flytte arket, mens du udfylder, træk et sted uden for felterne.
5. Tryk {{key:Esc}} eller vælg et andet værktøj, når du er færdig. Det, du har skrevet, bliver på arket.

Med {{ui:Vælg}} sætter et dobbeltklik på et felt {{ui:Udfyld formular}} i gang og placerer dig i feltet.

## Gem den udfyldte formular

Vælg {{ui:Gem}}. Kopien, du downloader, har dine værdier i sine felter, med dine markeringer ved siden af. Statuslinjen siger, hvor mange felter der blev udfyldt.

For at aflevere en formular, som ingen kan ændre, vælg {{ui:Sider}} og derefter {{ui:Gem en fladgjort kopi…}}: værdierne bliver en del af siden. Udskrivning gør det samme.

## Godt at vide

- Et felt, som PDF'en låser (skrivebeskyttet), kan ikke ændres. Dens boks er grå.
- Tekst op til feltets egen længdegrænse gemmes; ekstra tegn skrives ikke.
- Nogle formularer kommer uden tegnede bokse og knapper, og andre programmer viser dem tomme. MarkupCraft tegner dem, og når du gemmer, tilføjes billedet, så de vises alle steder.
- Fortryd i et felt er feltets eget: tryk {{key:Ctrl+Z}}, mens du skriver i det. Markeringens fortryd fortryder ikke formularværdier.
- Hvis din browser lukker, kommer de værdier, du skrev, tilbage sammen med resten af dit ikke-gemte arbejde.
- Værdier skrevet med tegn, som PDF'ens standardskrifttype ikke kan skrive (f.eks. kinesisk), gemmes, og PDF'en beder hver læser om selv at tegne dem.
- Signaturfelter og trykknapper udfyldes ikke her. For at underskrive, brug {{ui:Stempel}} og din signatur.
- Værdier, der skrives i en formular, deles ikke i en Live-session endnu.

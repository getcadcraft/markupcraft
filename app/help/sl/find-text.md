---
title: Iskanje besedila na risbah
summary: Iščite besede na vseh listih, skočite na vsak zadetek in jih vse označite z revizijskim oblakom v enem koraku.
keywords: iskanje, iskati, besedilo, beseda, besede, ctrl f, poišči, opomba, ključna opomba, oblaček, vse v oblak, poudari zadetke, ocr, skeniranje, skenirano, preberi besedilo, izberi besedilo, kopiraj besedilo, tesseract
from: 3435c9eb
---

{{ui:Iskanje besedila}}, na vrhu podokna {{ui:Listi}}, išče besede, narisane na samih listih. {{ui:Išči po listih}} pod njim išče samo imena listov.

## Iskanje

1. Pritisnite {{key:Mod+F}} ali odprite {{ui:Iskanje besedila}}.
2. Vpišite besede, na primer `hood` ali `verify in field`.
3. Izberite {{ui:Vsi listi}} ali {{ui:Ta list}} in označite {{ui:Razlikuj velike in male črke}} ali {{ui:Cele besede}}, če ju potrebujete.
4. Pritisnite {{key:Enter}} ali izberite {{ui:Najdi}}.

Rezultat: vsak zadetek je naveden s številko svojega lista in besedami okoli njega ter je na svojem listu označen z rumeno. Izberite zadetek, da odprete njegov list in ga povečate.

Fraza je najdena tudi tedaj, ko jo risba razdeli na dva kosa besedila ali dve vrstici.

## Oblaček za vsak zadetek

Izberite {{ui:Vse v oblak}}. Revizijski oblak obkroži vsak zadetek na seznamu, na vsakem listu, s komentarjem „Najdeno: <vaše besede>“. En {{key:Mod+Z}} jih odstrani vse.

## Preberite besedilo na skenu (OCR)

Skeniran list je samo slika: dokler se njegove besede ne preberejo, ni ničesar za iskati. Ko števec pove, da listi nimajo besedila, izberite {{ui:Preberi besedilo (OCR) …}} pod njim ali {{ui:Strani}} › {{ui:Preberi besedilo (OCR) …}}.

1. Izberite strani: ta list, vsako stran datoteke ali vsako stran vseh odprtih datotek.
2. Izberite jezik besedila. {{ui:Tudi angleščina}} prebere tudi angleške besede.
3. Izberite {{ui:Preberi besedilo}}. Vrstica kaže stran, ki se bere; {{ui:Ustavi}} konča tek in ohrani strani, ki so že prebrane.

Rezultat: besede je mogoče iskati, izbirati in kopirati kot katero koli drugo besedilo. Vse teče na vašem računalniku: nič ne gre nikamor. Deluje brez povezave v programu Studio in v brskalniku, ko je aplikacija shranjena za delo brez povezave (angleščina in jezik vmesnika) ali je bil jezik že enkrat uporabljen. Strani, ki že imajo besedilo, ostanejo take, kot so.

Ko shranite, gredo besede v PDF kot nevidno besedilo za sliko, ločeno od vaših označb, da jih lahko tudi drugi programi za PDF iščejo in kopirajo. Dokler ne shranite, je datoteka prikazana kot neshranjena.

## Izbiranje in kopiranje besedila

Izberite {{ui:Več}} › {{ui:Izberi besedilo za kopiranje}}. Povlecite od ene besede do druge, da izberete besede med njima; povlecite s praznega papirja, da izberete besede v okvirju; ali dvakrat kliknite eno besedo. {{key:Mod+A}} izbere vsako besedo na listu. {{key:Mod+C}} jih kopira in ohrani vrstice. Vsako drugo orodje to konča.

## Dobro je vedeti

- Risbe, katerih črke so narisane kot črte, prav tako nimajo besedila; branje kot slike najbolje deluje na tiskanem besedilu, kot sta skenirana knjiga ali specifikacija.
- Bralnik je Tesseract, vgrajen v aplikacijo s podatki za angleščino in jezike aplikacije. Prvi zagon ga naloži (približno 6 MB, več za drugi jezik).
- Kako dobro bere, je odvisno od skena: čisti listi pri 300 dpi se preberejo skoraj dobesedno; stari, bledi ali nizkoločljivostni skeni izpustijo več besed.
- Seznam prikaže prvih 500 zadetkov; {{ui:Vse v oblak}} označi do 2.000.
- Zadetki se počistijo, ko zaprete nabor, za eno datoteko pa, ko spremenite njene strani.

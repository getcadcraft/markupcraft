---
title: Pridávanie poznámok na list
summary: Kreslite revízne oblaky, popisky, textové polia, šípky, tvary, ťahy pera a zvýraznenia a nastavte ich farbu a čiaru pred kreslením alebo po ňom.
keywords: poznámka, revízne označenie, oblak, revízny oblak, popisok, vynášacia čiara, textové pole, šípka, čiara, obdĺžnik, elipsa, kružnica, lomená čiara, mnohouholník, pero, voľná ruka, atrament, zvýrazňovač, farba, hrúbka čiary
from: 9d6de0ac
---

Každý nástroj funguje rovnako: vyberte ho, nakreslite na list a nová poznámka sa označí, aby ste ju videli vo {{ui:Vlastnosti}}. Nástroj zostane zapnutý pre ďalšiu. Stavový riadok vždy hovorí, čo nástroj očakáva ďalej.

:::touch
Na dotykovej obrazovke kreslite jedným prstom. Druhý prst zruší to, čo začal prvý, a namiesto toho roztiahne alebo posunie, takže pri priblížení nikdy nezanecháte značku omylom. Viac v [Kontrola na iPade alebo dotykovej obrazovke](topic:review-on-a-tablet).
:::

## Revízne oblaky

**Oblak v rámčeku:** vyberte {{ui:Oblak}} ({{key:C}}) a ťahajte rámček. Podržte {{key:Shift}}, aby bol štvorcový.

**Voľný oblak** okolo nepravidelného tvaru:

1. Vyberte {{ui:Voľný oblak}} ({{key:Shift+C}}).
2. Kliknite na každý roh oblasti.
3. Dokončite dvojklikom, {{key:Enter}} alebo pravým tlačidlom. Na dotyku dvojitým klepnutím.

Počas klikania na body {{key:Backspace}} odstráni posledný bod a {{key:Esc}} zruší celý tvar. Podržte {{key:Shift}}, aby ďalšia strana bola v násobku 45°. Voľný oblak potrebuje aspoň tri body.

Oblúčiky vždy vyčnievajú smerom von a ich veľkosť sleduje hrúbku čiary: hrubšia čiara dáva väčšie oblúčiky.

## Popisky

Popisok je textové pole s vynášacou čiarou, ktorá smeruje na niečo.

1. Vyberte {{ui:Popisok}} ({{key:K}}).
2. Stlačte na bod, ktorý chcete označiť, a ťahajte na miesto, kde má byť text. Uvoľnite.
   Ak len kliknete bez ťahania, pole sa umiestni nahor a doprava od bodu.
3. Napíšte text. Pole sa rozrastie smerom nadol, ako sa riadky zalamujú.
4. Dokončite kliknutím kamkoľvek mimo poľa alebo stlačením {{key:Mod+Enter}}. {{key:Esc}} popisok zahodí.

Ak dokončíte bez napísania čohokoľvek, popisok sa nepridá („Nič nebolo napísané, takže popisok nebol pridaný.“).

Po nakreslení ho vyberte, aby ste presunuli pole, ťahali za hrot vynášacej čiary alebo za jej zlom (dva kosoštvorcové úchyty), prípadne zmenili veľkosť poľa.

## Textové polia

1. Vyberte {{ui:Text}} ({{key:T}}).
2. Kliknite tam, kde text začína (dostanete pole primeranej šírky), alebo ťahajte pole želanej veľkosti.
3. Napíšte text, potom kliknite mimo alebo stlačte {{key:Mod+Enter}}.

Text predvolene nemá rámček. Ak ho chcete mať, zvýšte {{ui:Hrúbka čiary}} vo {{ui:Vlastnosti}}. Ak chcete pozadie, zaškrtnite {{ui:Výplň}}.

Ak chcete slová neskôr zmeniť: pri zapnutom {{ui:Výber}} dvakrát kliknite na text, alebo ho vyberte a stlačte {{key:Enter}}, alebo vyberte {{ui:Upraviť na liste}} vo {{ui:Vlastnosti}}. Môžete ho upraviť aj v poli {{ui:Text}} vo {{ui:Vlastnosti}}.

## Šípky a čiary

1. Vyberte {{ui:Šípka}} ({{key:A}}) alebo {{ui:Úsečka}} ({{key:L}}).
2. Ťahajte od začiatku ku koncu. Alebo kliknite na začiatok, uvoľnite a kliknite na koniec.
3. Podržte {{key:Shift}}, aby zostala v násobku 45°.

Hrot šípky je na konci, kde ste skončili.

## Obdĺžniky, elipsy, lomené čiary a mnohouholníky

- {{ui:Obdĺžnik}} ({{key:R}}) a {{ui:Elipsa}} ({{key:E}}): ťahajte rámček. {{key:Shift}} vytvorí štvorec alebo kruh. Kliknutie bez ťahania nič nenakreslí a stavový riadok vás vyzve na ťahanie.
- {{ui:Lomená čiara}} ({{key:Y}}) a {{ui:Mnohouholník}} ({{key:G}}): klikajte na body; dokončite dvojklikom, {{key:Enter}} alebo pravým tlačidlom (na dotyku dvojitým klepnutím). {{key:Backspace}} odstráni posledný bod. Mnohouholník sa uzavrie sám a potrebuje tri body; lomená čiara potrebuje dva.

## Pero a zvýrazňovač

- {{ui:Pero}} ({{key:P}}): ťahajte pre voľnú kresbu. Ťah sa po uvoľnení mierne vyhladí.
- {{ui:Zvýrazňovač}} ({{key:I}}): to isté, so širokým, priehľadným žltým ťahom, ktorý zafarbí výkres pod ním namiesto toho, aby ho prekryl.
- Podržte {{key:Shift}} pri kreslení, aby ste dostali jeden rovný ťah od miesta, kde ste začali.

Zvýrazňovač je voľný ťah. Nezachytáva sa k textu v PDF.

## Farba, čiara a výplň

Dva spôsoby:

- **Pred kreslením:** vyberte nástroj. Keď nič nie je vybrané, {{ui:Vlastnosti}} zobrazí nastavenia nástroja: {{ui:Farba}}, {{ui:Hrúbka čiary}} (v bodoch), {{ui:Výplň}} a {{ui:Krytie výplne}} pre uzavreté tvary, {{ui:Krytie}} a {{ui:Veľkosť textu}} pre text. Každá nová poznámka daného druhu ich použije a MarkupCraft si ich v tomto prehliadači zapamätá.
- **Po nakreslení:** vyberte jednu alebo viac poznámok a zmeňte rovnaké ovládacie prvky v časti „Štýl“. Keď je vybraných viac, zmena sa použije na všetky naraz.

Predvolené hodnoty: červené poznámky, žltý zvýrazňovač, modré merania, oranžové počty a pečiatky zafarbené podľa významu.

Uložené vzhľady, ktoré používate každý deň, patria do nástrojovej skrinky: pozri [Nástrojová skrinka](topic:tool-chest).

## Predmet a komentár

Každá poznámka má aj {{ui:Predmet}} (krátke označenie, napríklad „Oblak“ alebo „RFI“, zobrazené v zozname poznámok a v iných prehliadačoch PDF) a {{ui:Komentár}} (dlhšie poznámky). Vyplňte ich vo {{ui:Vlastnosti}}. Na rozhovor o poznámke použite odpovede: pozri [Stavy a odpovede](topic:statuses-and-replies).

## Ďalej

- [Výber, presun a zmena poznámok](topic:select-and-edit)
- [Pečiatky a poznámky](topic:stamps-and-notes)
- [Všetky typy poznámok](topic:markup-types)

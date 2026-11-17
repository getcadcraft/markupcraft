---
title: Uložiť PDF s poznámkami
summary: Stiahnite kópiu so všetkými poznámkami zapísanými ako štandardné komentáre PDF, skontrolujte, čo vidia iné čítačky PDF, a pokračujte v práci neskôr.
keywords: uložiť, stiahnuť, export pdf, s poznámkami, anotácie, komentáre, zdieľať, odoslať, problém, pokračovať v práci, znova otvoriť, obojsmerný prenos, tlačiť
from: 4c198ebe
---

## Uložiť

1. Vyberte {{ui:Uložiť}} na paneli nástrojov alebo stlačte {{key:Mod+S}}.
2. Ak je otvorených viac súborov, vyberte {{ui:Tento súbor}} (súbor listu, na ktorom ste) alebo {{ui:Každý zmenený súbor}}. Každá kópia sa stiahne samostatne.
3. Počkajte, kým sa dokončí "Ukladá sa <file>…". Prvé uloženie v relácii tiež načíta zapisovač PDF.

Výsledok: váš prehliadač stiahne "<name> (marked up).pdf" a stavový riadok to oznámi: 'Súbor A-Plans (marked up).pdf bol uložený (poznámky: 24, 18.2 MB). Pôvodný súbor sa nezmenil.' Bodka pri {{ui:Uložiť}} zmizne.

**Váš pôvodný PDF sa nikdy nemení.** MarkupCraft zapíše nový súbor. Kam sa uloží, závisí od nastavení sťahovania vo vašom prehliadači (pozri [Súbory, ktoré MarkupCraft otvára a ukladá](topic:files#where-downloads-go)).

## Pokračovať v práci neskôr

Otvorte nabudúce kópiu "(marked up)", nie pôvodný súbor. Všetko sa vráti ako upraviteľné: poznámky, stavy, odpovede, položky nedostatkov, mierka každého listu a všetky názvy listov, ktoré ste napísali. Keď ju uložíte znova, stiahne sa súbor s rovnakým názvom "(marked up)"; prehliadač môže pridať číslo, napríklad "(1)", ak je starý súbor stále v priečinku. Staré kópie nahraďte alebo upratajte sami.

MarkupCraft PDF sám od seba neukladá. Počas práce si v tomto prehliadači uchováva záložnú kópiu, takže pád alebo zatvorenú kartu nepreruší vaše poznámky: pri ďalšom otvorení MarkupCraft sa opýta "Obnoviť prácu?". Pozri [Obnoviť prácu](common:recover). Aj tak ukladajte pred zatvorením; ak sa pokúsite odísť s neuloženými poznámkami, prehliadač sa najprv opýta "Opustiť stránku?" (iPad Safari to nerobí).

## Čo vidia iné čítačky PDF

Každá poznámka sa zapíše ako štandardný komentár PDF (anotácia) so svojou vlastnou kresbou, takže ju každá čítačka PDF zobrazí, vytlačí a vypíše v paneli komentárov:

- **Vzhľad je rovnaký** ako v MarkupCraft: oblaky s oblúčikmi, šípky, pečiatky, bodky počtu, čísla položiek nedostatkov, popisky meraní.
- **Podrobnosti sú štandardné:** autor, dátum, predmet, text komentára a farby.
- **Oblaky** sú komentáre obdĺžnika alebo mnohouholníka s oblakovým okrajom; **textové polia** a **odkazy** sú komentáre textového poľa; **lepiace poznámky** sú lepiace lístky; ťahy **pera** a **zvýrazňovača** sú typu ink; **pečiatky** sú komentáre pečiatky.
- **Dĺžky a plochy** sú komentáre merania a každý kalibrovaný list nesie svoju mierku, takže čítačky, ktoré rozumejú meraniam, môžu zobraziť hodnoty.
- **Odpovede** sú odpoveďami na komentár a **stavy** sú stavy revízie (Otvorené sa zobrazí ako žiadny stav).
- **Čísla listov**, ktoré ste napísali, sa stanú popiskami strán, ktoré ukazujú ostatné čítačky.

Niektoré veci číta späť iba MarkupCraft: zodpovedná osoba a termín položky nedostatku, stav položky a niektoré štýlové detaily. Iné programy ich zachovajú, pokiaľ komentár neprepíšu.

V inom programe sa dajú komentáre presúvať alebo upravovať ako hocijaké iné. Ak to niekto urobí a pošle súbor späť, MarkupCraft pri otvorení použije novú polohu komentára.

Úplné podrobnosti: [Čo sa ukladá do PDF](topic:what-the-pdf-keeps).

## Znaky, ktoré sa vytlačia ako "?"

Text poznámok sa zapisuje štandardným písmom Helvetica, ktoré má každá čítačka PDF. Pokrýva anglické a západoeurópske písmená (é, ñ, ü, ø a podobne), ale nie iné písma, symboly mimo tejto sady ani emotikony. Tieto znaky sa v MarkupCraft zobrazia správne, ale v uloženej kópii sa vytlačia ako "?", a hlásenie o uložení ich spočíta: "3 znaky mimo západoeurópskej sady sa v kópii vytlačia ako "?"." Napíšte také slová celé alebo použite jednoduchú náhradu (napríklad "priem." pre znak priemeru).

## Súbory, ktoré sa nedajú uložiť

- **Chránené PDF:** "Tento PDF je chránený (šifrovaný), preto nie je možné zapísať kópiu s poznámkami. Vyžiadajte si nechránenú kópiu." Stále ho môžete preskúmať na obrazovke a exportovať CSV a BCF.
- Ak uloženie zlyhá z iného dôvodu, zobrazí sa okno "Nepodarilo sa uložiť <file>" s dôvodom. Vaše poznámky sú stále na karte; nič sa nestratí, kým kartu nezatvoríte.

## Zlúčenie a tlač

Zatiaľ nie je hotové zlúčenie (vypálenie poznámok do strany) ani príkaz na tlač. Na tlač otvorte uloženú kópiu v ľubovoľnej čítačke PDF a tlačte so zobrazenými komentármi.

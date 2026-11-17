---
title: Kopírovanie oblasti strany alebo prekrytia
summary: Skopírujte časť listu obdĺžnikom, elipsou alebo voľným tvarom a vložte ju do iného listu, do CadCraft, BimCraft, DetailCraft alebo ľubovoľného programu, v jej veľkosti; skopírujte ju ako priesvitné prekrytie a zarovnajte obrázok podľa dvoch bodov.
keywords: kopírovať oblasť, oblasť, orezať, vystrihnúť, snímka, schránka, región, obdĺžnik, elipsa, kružnica, voľný tvar, laso, obrázok, obraz, png, prekrytie, priesvitný, priesvitnosť, odtieň, krytie, vložiť, skutočná veľkosť, mierka, zarovnať, zarovnanie, dva body, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Vyberte {{ui:Viac}} › {{ui:Skopírovať oblasť stránky…}}. Nad listom sa otvorí panel.

## Výber oblasti

Na paneli vyberte {{ui:Obdĺžnik}}, {{ui:Elipsa}} alebo {{ui:Voľný tvar}} a potom potiahnite po liste:

- **Obdĺžnik:** potiahnite rámček okolo časti na kopírovanie.
- **Elipsa:** potiahnite rámček; elipsa vnútri sa skopíruje a rohy mimo nej sú priesvitné.
- **Voľný tvar:** nakreslite okolo časti na kopírovanie; tvar sa sám uzavrie. Mimo neho je priesvitný.

Potiahnite znova, ak chcete začať odznova, alebo stlačte {{key:Esc}}.

## Kopírovanie

- {{ui:Zahrnúť poznámky}} skopíruje vaše poznámky spolu so stranou; zrušte ho pre čistý výkres.
- {{ui:Rozlíšenie}}: {{ui:Ako na obrazovke}}, 72, 150 alebo 300 dpi. Obrázok zostane pod 3 MB; ak by veľká oblasť pri vysokom rozlíšení tento limit prekročila, rozlíšenie sa zníži a stavový riadok uvedie, na akú hodnotu.
- {{ui:Kopírovať}} (alebo {{key:Mod+C}} alebo {{key:Enter}}) umiestni oblasť do schránky ako obrázok PNG, ktorý sa vloží do Wordu, e-mailu, iných programov pre PDF a programov na kreslenie.
- {{ui:Uložiť ako PNG}} namiesto toho stiahne obrázok pre program, ktorý pri vložení zahodí priesvitné časti.

## Kopírovanie ako prekrytie

{{ui:Kopírovať ako prekrytie}} tiež urobí biely papier priesvitným, takže zostanú iba čiary. {{ui:Farba}} dá každej čiare jednu farbu (červenú, modrú, zelenú, oranžovú alebo fialovú), aby prekrytie vynikalo pred výkresom pod ním; {{ui:Vlastné farby}} ich zachová. {{ui:Sila}} určuje, aká silná je na začiatku pri vložení v našich aplikáciách (50 % pokiaľ ju nezmeníte).

## Vloženie

**V MarkupCraft** {{key:Mod+V}} na ľubovoľnom liste vloží oblasť ako obrázkovú poznámku pri kurzore. Vloží sa v jej veľkosti:

- na papieri v rovnakej veľkosti, akú mala na liste, z ktorého pochádza;
- ak majú oba listy mierku, v rovnakej veľkosti vo výkrese: oblasť z listu 1:50 sa vloží na liste 1:100 v polovici svojej veľkosti na papieri.

Prekrytie začína so svojou silou; zmeňte ju pomocou {{ui:Krytie}} vo {{ui:Vlastnosti}}. Presúvajte, meňte veľkosť, zamykajte a mažte ho ako každý obrázok a zaškrtnite {{ui:Pri uložení zlúčiť do strany}}, aby sa nakreslil do strany.

**V CadCraft, BimCraft a DetailCraft** kópia pozná aj svoju veľkosť, takže vloženie príde v skutočnej veľkosti výkresu, ak mal list mierku, alebo sa o ňu opýta, ak nemal. Pozrite si pomocníka každej aplikácie k obrázkom.

## Zarovnanie obrázka podľa dvoch bodov

Vyberte jeden obrázok alebo prekrytie a potom zvoľte {{ui:Viac}} › {{ui:Zarovnať obrázok podľa dvoch bodov}}:

1. Kliknite na bod na obrázku.
2. Kliknite, kam má tento bod ísť.
3. Kliknite na druhý bod na obrázku, ďaleko od prvého.
4. Kliknite, kam má tento bod ísť.

Obrázok sa zmení mierku, posunie a otočí tak, aby oba body pristáli tam, kde ste klikli. {{key:Esc}} zastaví; {{key:Mod+Z}} ho vráti späť jedným krokom.

## Dobré vedieť

- Veľkosť sa prenáša s kópiou iba medzi našimi aplikáciami na tej istej stránke a iba pri kópii vytvorenej v posledných niekoľkých hodinách; iný program dostane obyčajný obrázok.
- Ak prehliadač nedovolí MarkupCraft použiť systémovú schránku, stavový riadok to uvedie: vloženie v našich aplikáciách stále funguje a {{ui:Uložiť ako PNG}} funguje pre iné programy.
- Zarovnanie otáča obrázok prekreslením jeho pixelov, takže otočený obrázok je mierne mäkší ako pôvodný.

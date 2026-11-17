---
title: Hľadanie textu vo výkresoch
summary: Hľadajte slová na každom liste, prechádzajte na každý nález a všetky označte oblakom jediným krokom.
keywords: hľadať, vyhľadávanie, text, slovo, slová, ctrl f, hľadať, poznámka, kľúčová poznámka, výnosník, oblak všetko, zvýrazniť nálezy, ocr, sken, skenovaný, prečítať text, vybrať text, kopírovať text, tesseract
from: 3435c9eb
---

{{ui:Hľadať text}}, v hornej časti panela {{ui:Listy}}, hľadá slová nakreslené priamo na listoch. {{ui:Hľadať listy}} pod ním hľadá iba názvy listov.

## Hľadanie

1. Stlačte {{key:Mod+F}} alebo otvorte {{ui:Hľadať text}}.
2. Napíšte slová, napríklad `hood` alebo `verify in field`.
3. Vyberte {{ui:Všetky listy}} alebo {{ui:Tento list}} a označte {{ui:Rozlišovať veľkosť písmen}} alebo {{ui:Celé slová}}, ak ich potrebujete.
4. Stlačte {{key:Enter}} alebo vyberte {{ui:Hľadať}}.

Výsledok: každý nález je vypísaný s číslom svojho listu a slovami okolo neho a na svojom liste je označený žltou farbou. Vyberte nález, aby sa otvoril jeho list a priblížil sa naň.

Frázu nájdete aj vtedy, keď ju výkres rozdelí na dva kusy textu alebo na dva riadky.

## Označenie každého nálezu oblakom

Vyberte {{ui:Oblak na všetky}}. Revízny oblak obkreslí každý nález v zozname, na každom liste, s komentárom "Nájdené: <vaše slová>". Jedno {{key:Mod+Z}} ich odstráni všetky.

## Prečítanie textu na skene (OCR)

Naskenovaný list je len obrázok: kým sa jeho slová neprečítajú, nie je čo nájsť. Ak počet uvádza, že listy nemajú text, vyberte pod ním {{ui:Prečítať text (OCR)…}} alebo {{ui:Strany}} › {{ui:Prečítať text (OCR)…}}.

1. Vyberte strany: tento list, každú stranu súboru alebo každú stranu každého otvoreného súboru.
2. Vyberte jazyk textu. {{ui:Aj angličtina}} prečíta aj anglické slová.
3. Vyberte {{ui:Prečítať text}}. Lišta ukazuje stranu, ktorá sa práve číta; {{ui:Zastaviť}} ukončí beh a ponechá už prečítané strany.

Výsledok: slová sa dajú nájsť, označiť a kopírovať ako ľubovoľný iný text. Všetko beží vo vašom počítači: nič sa nikam neposiela. Funguje bez pripojenia v Studio a v prehliadači, keď je aplikácia uložená na offline použitie (angličtina a jazyk vášho rozhrania) alebo keď sa jazyk už raz použil. Strany, ktoré už text majú, zostávajú nezmenené.

Pri uložení sa slová dostanú do PDF ako neviditeľný text za obrázkom, oddelene od vašich poznámok, takže ich môžu nájsť a kopírovať aj iné programy na PDF. Kým neuložíte, súbor sa zobrazí ako neuložený.

## Výber a kopírovanie textu

Vyberte {{ui:Viac}} › {{ui:Vybrať text na kopírovanie}}. Potiahnite od jedného slova k druhému, aby sa vybrali slová medzi nimi; potiahnite z prázdneho miesta na liste, aby sa vybrali slová v obdĺžniku; alebo dvakrát kliknite na jedno slovo. {{key:Mod+A}} vyberie každé slovo na liste. {{key:Mod+C}} ich skopíruje so zachovaním riadkov. Každý iný nástroj to ukončí.

## Dobré vedieť

- Výkresy, ktorých písmená sú nakreslené ako čiary, tiež nemajú text; čítanie ako obrázok funguje najlepšie na tlačenom texte, napríklad na naskenovanej knihe alebo špecifikácii.
- Čítačkou je Tesseract, zabudovaný v aplikácii s jazykovými údajmi pre angličtinu a jazyky aplikácie. Prvé spustenie ho načíta (asi 6 MB, pri druhom jazyku viac).
- Úspešnosť čítania závisí od skenu: čisté strany pri 300 dpi sa prečítajú takmer slovo po slove; staré, bledé alebo nízkorozlíšené skeny vynechajú viac slov.
- Zoznam ukazuje prvých 500 nálezov; {{ui:Oblak na všetky}} označí až 2,000.
- Nálezy sa vymažú, keď zavriete sadu, a pri jednom súbore vtedy, keď zmeníte jeho strany.

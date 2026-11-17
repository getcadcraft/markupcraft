---
title: Zoznam poznámok, filtre a exporty
summary: Pozrite si každú poznámku v sade, filtrujte podľa listu, autora, stavu a typu, prejdite na jednu z nich a exportujte zoznam ako CSV alebo BCF.
keywords: zoznam poznámok, zoznam, súhrn, xlsx, zošit tabuliek, zošit, správa pdf, import bcf, filter, triedenie, správa, export, csv, tabuľka, bcf, bcfzip, problémy, zoznam komentárov, prejsť
from: 6c70261e
---

## Otvorenie zoznamu

Vyberte kartu {{ui:Poznámky}} vpravo. Každá poznámka každého otvoreného súboru je uvedená v poradí listov a potom v poradí, v akom boli vytvorené. Každý riadok zobrazuje:

- ikonu vo farbe poznámky, jej číslo položky nedostatku, ak ho má („#4“), a jej predmet,
- jej text, znenie pečiatky alebo nameranú hodnotu a jej komentár,
- list, autora a dátum,
- jej stav (alebo „Len na čítanie“ pri komentároch, ktoré prišli so súborom) a počet odpovedí, ak nejaké má.

Riadok nad zoznamom ich počíta: „38 poznámok“, alebo „12 z 38 poznámok“, keď je filter zapnutý.

## Prechod na poznámku

Kliknite na riadok. MarkupCraft zobrazí tento list, vyberie poznámku a priblíži k nej, ak je mimo obrazovky alebo príliš malá na videnie. {{ui:Vlastnosti}} zobrazí jej podrobnosti a vlákno, keď sa prepnete späť na túto kartu.

## Filtrovanie

Štyri ponuky nad zoznamom. Kombinujú sa.

| Ponuka | Možnosti |
|---|---|
| {{ui:List}} | Všetky listy, Tento list (sleduje vás, keď meníte listy), alebo ľubovoľný list, ktorý má poznámky |
| {{ui:Autor}} | Ktokoľvek, alebo každý autor v sade |
| {{ui:Stav}} | Ľubovoľný stav, Otvorené, Prijaté, Zamietnuté, Dokončené |
| {{ui:Typ}} | Ľubovoľný typ, alebo každý druh poznámky v sade |

Príklady:

- Čo je na tomto liste ešte otvorené: {{ui:List}} „Tento list“, {{ui:Stav}} „Otvorené“.
- Komentáre jedného konzultanta: {{ui:Autor}} jeho meno.
- Všetky merania: {{ui:Typ}} „Dĺžka“ alebo „Plocha“.

Zoznam zobrazuje až 2000 riadkov; vo veľmi veľkých sadách ho zúžte filtrom.

## Export do CSV

Vyberte {{ui:CSV}} na vrchu karty. Dostanete súbor „<name> markups.csv“ s **poznámkami tak, ako sú práve filtrované**, jedna na riadok, s týmito stĺpcami:

Číslo položky, List, Súbor, Strana, Typ, Predmet, Text, Komentár, Meranie, Autor, Vytvorené, Zmenené, Stav, Odpovede, Posledná odpoveď, Farba, Len na čítanie.

- „Text“ obsahuje slová textových polí a popiskov, znenie pečiatky alebo názov skupiny počtu.
- „Meranie“ obsahuje dĺžky, „plocha, obvod“ pre plochy a „skupina: n“ pre počty.
- Dátumy sú úplné časové údaje v UTC.

Ak chcete exportovať všetko, najprv nastavte každý filter späť na jeho prvú voľbu.

## Legenda na liste

{{ui:Legenda}} v karte {{ui:Poznámky}} umiestni legendu do pravého horného rohu toho, čo vidíte: rámček so zoznamom každého druhu poznámky na liste (podľa predmetu a farby, napríklad „Oblak“, „Otázka“ alebo „Zásuvky“) s počtom každej z nich. Skupina počtu počíta svoje značky. Legenda sa počas kreslenia, presúvania alebo mazania poznámok priebežne prepočítava a vytlačí sa a uloží s počtami z daného okamihu.

Presúvajte a meňte veľkosť ako ľubovoľnú poznámku. Vo {{ui:Vlastnosti}} zmeňte jej {{ui:Názov}} alebo nastavte {{ui:Počty}} na {{ui:Celá sada}}, aby sa počítali všetky listy. Medzery, iné legendy a komentáre z iných programov sa nepočítajú.

## Vlastné stĺpce a triedenie

{{ui:Stĺpce}} v karte {{ui:Poznámky}} pridá vlastné stĺpce ku každej poznámke: **text**, **voľbu** (napríklad Profesia: Strojárstvo, Elektro, Vodoinštalácia), **číslo** (napríklad Cena) alebo **dátum**. Pomenujte každý, vyberte jeho druh, pri stĺpci s voľbou uveďte možnosti a zvoľte {{ui:Uložiť stĺpce}}.

- Vyplňte ich vo {{ui:Vlastnosti}}: každý stĺpec má tam pole. Číselný stĺpec prijíma iba čísla, stĺpec dátumu iba dátum.
- Zoznam zobrazuje hodnoty pod každou poznámkou, filter {{ui:Stĺpec}} vyberie jednu hodnotu (alebo poznámky, kde je prázdna) a {{ui:Triedenie}} zoradí zoznam podľa stĺpca, autora, stavu, druhu alebo dátumu namiesto podľa listu.
- Exporty CSV a XLSX nesú stĺpce za obvyklými. Stĺpce sa uložia do PDF a vrátia sa, keď ho znovu otvoríte.

## Export súhrnu: zošit alebo PDF

- {{ui:XLSX}} stiahne „<name> markup summary.xlsx“ s tromi listami: **Poznámky** (jeden riadok na zobrazenú poznámku, rovnaké stĺpce ako v CSV), **Podľa listu** (koľko poznámok má každý list, otvorených a uzavretých, a koľko každého druhu, so súčtami) a **Zoznam nedostatkov** (keď sú položky nedostatkov).
- {{ui:PDF}} stiahne „<name> markup summary.pdf“: správu na tlač alebo odoslanie s názvom sady, dátumom a tabuľkou zobrazených poznámok (číslo, list, druh, predmet, text alebo komentár, nameraná hodnota, autor, stav a posledná odpoveď). Dlhý text sa zalamuje; hlavička tabuľky sa opakuje na každej strane.

Obe berú zoznam tak, ako je filtrovaný, takže najprv filtrujte, ak chcete nahlásiť jeden list, jedného autora alebo len otvorené položky.

## Export do BCF

Vyberte {{ui:BCF}}. MarkupCraft urobí snímku každej zobrazenej poznámky na jej liste („Vytváranie snímok pre BCF (3 z 12)…“), potom stiahne súbor „<name> markups.bcfzip“. Každá poznámka sa stane jednou témou BCF so svojím stavom, autorom, dátumami, odpoveďami ako komentármi, riešiteľom a termínom z jej položky nedostatku a snímkou.

Použite to na prenesenie pripomienok z kontroly výkresov do nástrojov BIM koordinácie, ktoré čítajú BCF. Čo sa prenesie a čo nie, je v [Základy BCF](topic:bcf-basics).

## Import BCF

{{ui:Import BCF}} načíta súbor .bcfzip (alebo .bcf) z nástroja BIM:

- Problémy, ktoré pochádzajú z vlastného exportu BCF v MarkupCraft, nájdu svoje poznámky späť: nové odpovede sa pridajú do vlákna a nastaví sa nový stav („Closed“ sa počíta ako Dokončené). Odpovede, ktoré tam už sú, sa nepridajú dvakrát.
- Ostatné problémy sa stanú poznámkami s ich názvom, popisom, autorom a komentármi. Poznámka sa umiestni na list, ktorého číslo alebo názov uvádzajú štítky problému, inak na otvorený list. Kamera BIM nemá na papieri miesto, preto sú takéto poznámky zložené v ľavom hornom rohu listu, aby ste ich mohli presunúť.

Celý import je jeden krok: {{key:Mod+Z}} ho vráti späť. Pozri [Základy BCF](topic:bcf-basics).

## Čo zoznam zatiaľ nerobí

- Zoskupovanie zoznamu (namiesto toho zoraďte a potom filtrujte).
- Úprava hodnôt v zozname (upravujte vo {{ui:Vlastnosti}}; polia položky nedostatku sa dajú upravovať na karte {{ui:Zoznam nedostatkov}}).

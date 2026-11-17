---
title: Čo sa ukladá do PDF
summary: Presne to, čo obsahuje kópia s poznámkami, čo vidia iné programy na PDF a čo sa načíta pri otvorení súboru.
keywords: anotácie pdf, komentáre, uložené údaje, obojsmerný prenos, označenia strán, meranie, stav kontroly, odpovede, interoperabilita, kompatibilita, znovu otvoriť, súkromné údaje
from: 6439ad28
---

Kópia s poznámkami je pôvodné PDF s pridanými komentármi (anotácie PDF). Samotné strany, ich výkresy, text, záložky a odkazy sú skopírované tak, ako boli.

## Každá poznámka

| MarkupCraft | Uložené ako | Iné prehliadače PDF zobrazia |
|---|---|---|
| Obdĺžnik, oblak v rámčeku | Štvorcová anotácia (oblak: zvlnený okraj) | Obdĺžnikový alebo oblakový komentár |
| Elipsa | Kruhová anotácia | Komentár v tvare elipsy |
| Mnohouholník, voľný oblak | Anotácia mnohouholníka (oblak: zvlnený okraj) | Komentár mnohouholníka alebo oblaku |
| Lomená čiara | Anotácia PolyLine | Komentár lomenej čiary |
| Čiara, šípka | Anotácia čiary (šípka: uzavretý hrot) | Komentár čiary alebo šípky |
| Dĺžka | Anotácia čiary označená ako kóta, s meraním | Meranie dĺžky, ak to prehliadač podporuje |
| Plocha | Anotácia mnohouholníka označená ako plocha, s meraním | Meranie plochy, ak je podporované; inak mnohouholník |
| Skupina počtu | Jedna anotácia ink, krúžok pre každú položku; jej text je „skupina: n“ | Komentár ink |
| Pero, zvýrazňovač | Anotácia ink (zvýrazňovač označený ako taký) | Komentár ink |
| Text | Anotácia FreeText | Komentár v textovom poli |
| Výnosová poznámka | Anotácia FreeText s výnosovou čiarou | Komentár výnosu |
| Poznámka | Textová anotácia | Lepiaci lístok, ktorý sa otvorí na text |
| Pečiatka | Anotácia pečiatky | Komentár pečiatky |

Každá sa uloží s:

- **vlastným vzhľadom**, nakresleným presne tak, ako ho MarkupCraft kreslí na obrazovke, takže vyzerá rovnako v každom prehliadači a tlačí sa rovnako, vrátane odznaku čísla nedostatku;
- **autorom**, **dátumami vytvorenia a úpravy**, **predmetom**, **textom komentára** (pri textových poliach a výnosoch text aj komentár), **farbou** a **nepriehľadnosťou**;
- **údajmi MarkupCraft** v súkromnom zázname, ktorý ostatné programy ignorujú: stav, položka nedostatku, štýl a typ, aby sa znovu otvorila presne.

## Vlákna a stavy

- Každá odpoveď sa uloží ako odpoveď na komentár prepojený s poznámkou, s autorom, dátumom a textom. Odpovede na liste nemajú vlastnú ikonu.
- Každá zmena stavu sa uloží ako odpoveď nesúca stav kontroly. Iné nástroje na kontrolu ho zobrazia ako Prijaté, Zamietnuté alebo Dokončené; stav Otvorené sa uloží bez stavu.
- Poznámka so stavom iným ako Otvorené, ale bez zaznamenanej zmeny stavu, dostane jednu odpoveď so stavom kontroly, aby stav videli aj iné programy.
- Odpovede na komentáre len na čítanie z pôvodného súboru sa uložia rovnako, prepojené s týmto komentárom.

## Každý list

- **Mierka:** kalibrovaný list dostane výrez merania pokrývajúci stranu (štandardný spôsob uloženia mierky strany) a vlastnú kópiu kalibrácie MarkupCraft.
- **Číslo listu:** číslo zadané cez {{ui:Rename sheet}} sa stane štítkom strany. Keď má niektorá strana súboru štítok, každá strana tohto súboru ho dostane: zadané číslo, inak pôvodný štítok, inak číslo strany.
- **Názov listu:** zadaný názov sa uloží len pre MarkupCraft; iné prehliadače ho nezobrazujú.

## Text a znaky

Text sa zapisuje písmom Helvetica, ktoré má každý prehliadač PDF. Znaky mimo západoeurópskej sady (Windows-1252) sa v kópii vytlačia ako "?"; správa o uložení ich spočíta.

## Výpočtové listy a dôvody

Výpočtové listy a dôvody sa uchovávajú v súkromnom zázname PDF s názvom `/MarkupCraftShell`. Ostatné programy PDF ho ignorujú. Staršia verzia MarkupCraft ho tiež ignoruje a pri ďalšom uložení tohto súboru ho odstráni.

## Čo sa stane s komentármi, ktoré tam už boli

Keď otvoríte PDF, ktoré už má komentáre:

- Vlastné komentáre MarkupCraft sa načítajú presne. Ak ich iný program presunul alebo zmenil ich veľkosť, platí nová poloha.
- Obdĺžniky, elipsy, čiary, lomené čiary, mnohouholníky, ink, textové polia a lepiace lístky z iných programov sa stanú upraviteľnými poznámkami. **Pri uložení MarkupCraft odstráni pôvodné komentáre a zapíše ich znovu po svojom**, aj s vyskakovacími oknami a odpoveďami. Ich vzhľad sa môže mierne zmeniť.
- Stavy kontroly z iných programov nastavia stav; platí najnovší.
- Všetko ostatné (zvýraznenia textu, pečiatky iných programov a špeciálne druhy) sa v kópii **zachová nedotknuté**, len na čítanie.
- Odkazy a polia formulárov sa zachovajú nedotknuté a nie sú vypísané.

Opätovné uloženie toho istého súboru nikdy nič nezdvojí: poznámky, ktoré MarkupCraft načítal, sa nahradia, nepridajú sa znovu.

## Čo sa nemení

Pôvodný súbor na disku sa nikdy nemení. Kópia nie je optimalizovaná na veľkosť, takže môže byť o niečo väčšia ako pôvodný súbor. Chránené (zašifrované) PDF sa uložiť nedajú.

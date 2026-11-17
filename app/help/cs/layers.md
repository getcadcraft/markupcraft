---
title: Vrstvy poznámek
summary: Dejte poznámky na pojmenované vrstvy a pak každou vrstvu zobrazte, skryjte nebo zamkněte; jiné prohlížeče PDF je mohou také přepínat.
keywords: vrstvy, vrstva, skrýt, zobrazit, zamknout, seskupit poznámky, obor, strojní, elektro, volitelný obsah, ocg, viditelnost
from: 0fbb4c26
---

Vrstvy seskupují poznámky, například podle oboru nebo podle revidujícího. Skryjte vrstvu, abyste viděli výkres pod ní, nebo ji zamkněte, aby se její poznámky náhodou nepřesunuly.

## Vytvoření vrstvy a kreslení na ni

1. Otevřete {{ui:Vrstvy}}, nahoře v panelu {{ui:Listy}}.
2. Zvolte {{ui:Nová vrstva}}, napište název, například `Strojní`, a zvolte {{ui:Přidat vrstvu}}.
3. Nová vrstva se stane aktuální vrstvou: každá poznámka, kterou nakreslíte od této chvíle, na ní bude. Zvolte název jiné vrstvy, nebo {{ui:Bez vrstvy}}, abyste změnili, kam půjdou nové poznámky.

Chcete-li přesunout poznámku na jinou vrstvu, vyberte ji a zvolte vrstvu pod {{ui:Vrstva}} ve {{ui:Vlastnosti}}. {{ui:Nová vrstva…}} na konci tohoto seznamu vytvoří vrstvu hned na místě. Přesun lze vrátit pomocí {{key:Mod+Z}}.

## Zobrazení, skrytí a zamknutí

Každý řádek vrstvy má dvě tlačítka:

- **Oko** vrstvu zobrazí nebo skryje. Skryté poznámky se nekreslí a nelze je vybrat; v seznamu {{ui:Poznámky}} se ale počítají dál.
- **Zámek** nechá poznámky vrstvy na listu, ale zabrání jejich výběru, přesunu nebo smazání.

Tlačítko tužky přejmenuje vrstvu a její poznámky přesune s ní. Seznam {{ui:Poznámky}} filtrujte podle {{ui:Vrstva}}, abyste viděli poznámky jedné vrstvy.

## V uloženém PDF

Každá vrstva se stane vrstvou PDF (volitelný obsah). Jiné prohlížeče PDF vypíší vrstvy ve svém panelu vrstev a mohou je přepínat; vrstva, kterou jste skryli, tam začne také skrytá. Vrstvy, které výkres už měl, například CAD vrstvy, zůstanou beze změny. Když kopii znovu otevřete v MarkupCraftu, poznámky se vrátí na své vrstvy, skryté a zamčené tak, jak jste je nechali.

## Dobré vědět

- Skrytí a zamknutí nejsou úpravy: nedají se vrátit pomocí {{key:Mod+Z}}, ale uloží se s PDF.
- Kopírování a vložení zachová vrstvu poznámky.
- Zploštělá kopie nakreslí každou poznámku do stránky bez ohledu na její vrstvu. Viz [Uložení zploštělé kopie](topic:flatten).

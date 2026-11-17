---
title: Hladiny poznámok
summary: Umiestnite poznámky na pomenované hladiny, potom každú hladinu zobrazte, skryte alebo uzamknite; aj iné prehliadače PDF ich vedia prepínať.
keywords: hladiny, hladina, skryť, zobraziť, zamknúť, zoskupiť poznámky, disciplína, strojárstvo, elektro, voliteľný obsah, ocg, viditeľnosť
from: 0fbb4c26
---

Hladiny zoskupujú poznámky, napríklad podľa disciplíny alebo recenzenta. Skryte hladinu, aby ste videli výkres pod ňou, alebo ju uzamknite, aby sa jej poznámky omylom nedali presunúť.

## Vytvorenie hladiny a kreslenie na ňu

1. Otvorte {{ui:Hladiny}}, v hornej časti panela {{ui:Listy}}.
2. Vyberte {{ui:Nová hladina}}, napíšte názov, napríklad `Strojárstvo`, a vyberte {{ui:Pridať hladinu}}.
3. Nová hladina sa stane aktuálnou hladinou: každá poznámka, ktorú odteraz nakreslíte, pôjde na ňu. Vyberte názov inej hladiny alebo {{ui:Žiadna hladina}}, aby ste zmenili, kam pôjdu nové poznámky.

Ak chcete presunúť poznámku na inú hladinu, vyberte ju a zvoľte hladinu pod {{ui:Hladina}} vo {{ui:Vlastnosti}}. {{ui:Nová hladina…}} na konci tohto zoznamu vytvorí novú hladinu hneď na mieste. Presun možno vrátiť späť pomocou {{key:Mod+Z}}.

## Zobrazenie, skrytie a uzamknutie

Každý riadok hladiny má dve tlačidlá:

- **Oko** zobrazí alebo skryje hladinu. Skryté poznámky sa nekreslia a nedajú sa vybrať; stále sa počítajú v zozname {{ui:Poznámky}}.
- **Zámok** ponechá poznámky hladiny na liste, ale zabráni ich výberu, presunu alebo zmazaniu.

Tlačidlo ceruzky premenuje hladinu a jej poznámky presunie spolu s ňou. Filtrujte zoznam {{ui:Poznámky}} podľa {{ui:Hladina}}, aby ste videli poznámky jednej hladiny.

## V uloženom PDF

Každá hladina sa stane vrstvou PDF (voliteľný obsah). Iné prehliadače PDF uvádzajú hladiny na paneli vrstiev a môžu ich prepínať; hladina, ktorú ste skryli, bude skrytá aj tam. Hladiny, ktoré už výkres mal, napríklad CAD hladiny, zostanú takisto, ako boli. Keď kópiu znovu otvoríte v MarkupCraft, poznámky sa vrátia na svoje hladiny, skryté a uzamknuté tak, ako ste ich zanechali.

## Dobre vedieť

- Skrývanie a uzamykanie nie sú úpravy: nedajú sa vrátiť pomocou {{key:Mod+Z}}, ale uložia sa do PDF.
- Kopírovanie a prilepenie zachovajú hladinu poznámky.
- Sploštená kópia nakreslí každú poznámku do strany bez ohľadu na jej hladinu. Pozri [Uloženie sploštenej kópie](topic:flatten).

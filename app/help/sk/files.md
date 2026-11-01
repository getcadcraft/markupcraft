---
title: Súbory, ktoré MarkupCraft otvára a ukladá
summary: Súbory PDF na vstupe, označená kópia PDF na výstupe, k tomu súbory CSV, BCF a súpravy nástrojov; kam ktorý ide, online aj offline.
keywords: pdf, otvoriť, uložiť, exportovať, stiahnuť, csv, bcf, bcfzip, json, súprava nástrojov, typy súborov, formáty, nahrať, heslo, šifrovaný
from: b3045b4c
---

## Čo MarkupCraft otvára

| Súbor | Ako | Čo sa stane |
|---|---|---|
| PDF (`.pdf`) | {{ui:Otvoriť}}, {{key:Mod+O}} alebo pustenie na plochu listu. Naraz ich môže byť viac. | Každá strana sa stane listom. Poznámky, ktoré už v súbore sú, sa načítajú späť (nižšie). |
| Súprava nástrojov (`.json`) | karta {{ui:Nástroje}}, potom {{ui:Importovať}} | Nástroje sa pridajú do Vašej súpravy nástrojov. Pozrite [Súprava nástrojov](topic:tool-chest). |

Všetko ostatné sa odmietne hlásením „MarkupCraft otvára súbory PDF.“ v stavovom riadku. Ak pustíte zmes súborov, súbory PDF sa otvoria a stavový riadok uvedie, koľko súborov nebolo PDF.

### Poznámky, ktoré už sú v súbore PDF

- **Poznámky, ktoré MarkupCraft uložil**, sa vrátia presne: typ, štýl, autor, dátumy, stav, odpovede, číslo nedostatku, mierka listu a všetky názvy listov, ktoré ste napísali.
- **Komentáre z iných programov na PDF** sa tiež čítajú. Obdĺžniky, elipsy, úsečky a šípky, lomené čiary, mnohouholníky, ťahy pera, textové polia a lepiace poznámky sa stanú bežnými upraviteľnými poznámkami v MarkupCraft. Ich odpovede a stavy kontroly sa prenesú tiež.
- **Všetko ostatné** (zvýraznenia textu vytvorené výberom textu, pečiatky iných programov a ďalšie druhy) sa zobrazí tak, ako je, označené ako len na čítanie. Môžete to vybrať, vidieť v zozname poznámok a odpovedať na to, ale nie presunúť, zmeniť ani zmazať.
- Odkazy a polia formulárov sa nechajú nedotknuté a nezobrazujú sa v zozname.
- Mierka uložená iným programom (výrez merania) sa použije ako mierka listu, ak MarkupCraft jej jednotke rozumie.

### Súbory, ktoré sa neotvoria

- PDF, ktoré vyžaduje heslo: „name“ na otvorenie vyžaduje heslo. Otvorte nechránenú kópiu.
- Poškodený súbor alebo taký, ktorý v skutočnosti nie je PDF: „name“ sa nepodarilo prečítať ako PDF (…).
- PDF, ktoré sa otvorí, ale je chránené proti zmenám, sa otvorí normálne. Uloženie sa odmietne (pozrite nižšie).

Keď sa naraz otvára viac súborov, otvoria sa tie, ktoré fungujú, a okno s názvom „Niektoré súbory sa neotvorili“ vypíše ostatné.

## Čo MarkupCraft ukladá

Ukladanie je vždy **stiahnutie** nového súboru. Webová stránka nemôže prepísať súbor vo Vašom počítači a MarkupCraft nikdy nemení Váš originál.

| Vyberiete | Získate | Poznámky |
|---|---|---|
| {{ui:Uložiť}} ({{key:Mod+S}}) | „<name> (marked up).pdf“ | Kópia pôvodného PDF, v ktorej je každá poznámka zapísaná ako skutočný komentár PDF. Ak súbor „(marked up)“ uložíte znova, názov zostane rovnaký; nikdy sa nestane „(marked up) (marked up)“. Pozrite [Uloženie označeného PDF](topic:save-the-marked-up-pdf). |
| karta {{ui:Poznámky}}, potom {{ui:CSV}} | „<name> markups.csv“ | Poznámky tak, ako sú uvedené v zozname (platia filtre). |
| karta {{ui:Poznámky}}, potom {{ui:BCF}} | „<name> markups.bcfzip“ | BCF 2.1 pre nástroje na koordináciu BIM, jeden náhľad na poznámku. Pozrite [Základy BCF](topic:bcf-basics). |
| karta {{ui:Zoznam nedostatkov}}, potom {{ui:Exportovať CSV}} | „<name> punch list.csv“ | Položky nedostatkov v poradí podľa čísla. |
| karta {{ui:Nástroje}}, potom {{ui:Exportovať}} | „MarkupCraft tool chest.json“ | Vaša súprava nástrojov na zdieľanie alebo uchovanie. |

„<name>“ je názov prvého otvoreného súboru PDF bez „.pdf“.

Súbory CSV sa otvoria v každom tabuľkovom programe. Sú v kódovaní UTF-8 so značkou, ktorú tabuľkové programy hľadajú, takže znaky s diakritikou vyjdú správne. Bunka, ktorá začína znakom =, +, - alebo @, dostane na začiatku apostrof, aby ju tabuľkový program nikdy nespustil ako vzorec.

## Kam idú stiahnuté súbory

Rozhoduje Váš prehliadač: zvyčajne priečinok Stiahnuté súbory, alebo sa pýta zakaždým, ak to tak nastavíte. Pozrite [Prehliadače a počítače](common:browsers#what-differs-between-browsers).

:::chromium
Keď uložíte všetky zmenené súbory sady naraz, Chrome a Edge sa môžu opýtať, či táto stránka smie sťahovať viac súborov. Vyberte {{ui:Povoliť}}, inak dostanete len prvú kópiu.
:::

:::safari
Na iPade sa Safari pýta pred každým stiahnutím a súbor uloží do aplikácie Súbory, do priečinka Stiahnuté. Na Macu ide do priečinka nastaveného v nastaveniach Safari.
:::

## Online a offline

- **Vaše súbory PDF nikdy neopúšťajú tento počítač**, online ani offline. Nič sa nikam nenahráva.
- Čítačka PDF sa načíta pri prvom otvorení PDF („Načítava sa čítačka PDF…“) a zapisovač PDF pri prvom uložení („Načítava sa zapisovač PDF…“) alebo pri otvorení súboru, ktorý už obsahuje komentáre.
- S pripojením sa oba načítajú z webovej stránky.
- **Ak chcete pracovať bez pripojenia,** vyberte {{ui:Uložiť na offline použitie}} v paneli úplne hore, kým ste online. Tlačidlo počíta „Ukladá sa N z M“ a potom hlási „Pripravené offline“. Táto kópia obsahuje čítačku PDF a zapisovač PDF (spolu približne 6 MB) a tohto pomocníka, takže potom funguje otváranie, označovanie a ukladanie súborov PDF offline v tomto prehliadači.
- Ak tlačidlo hlási „Nepodarilo sa uložiť“, niektoré súbory sa nestiahli: skontrolujte pripojenie a kliknite naň znova. Ak hlási „Offline nie je k dispozícii“, toto okno prehliadača nemôže uchovať offline kópiu (súkromné okná a niektoré spravované počítače); použite bežné okno.
- Ak chcete kópiu aktualizovať alebo zahodiť, kliknite na „Pripravené offline“ a vyberte „Uložiť znova (získať najnovšiu verziu)“ alebo „Odstrániť offline kópiu“. Viac v [Práca offline](common:offline).

:::offline
Ste offline. Ak panel úplne hore hlási „Pripravené offline“, funguje všetko, vrátane ukladania. Ak nie a v tejto karte ste ešte neukladali, {{ui:Uložiť}} môže zlyhať s hlásením „Zapisovač PDF sa nepodarilo načítať“. Vaše poznámky v karte zostávajú: nechajte ju otvorenú, pripojte sa znova a vyberte {{ui:Uložiť}} ešte raz.
:::

## Dobré je vedieť

- Veľké sady plánov sa otvárajú dlhšie: MarkupCraft číta text každej strany, aby našiel čísla listov. Stavový riadok počíta listy postupne.
- Ak ten istý súbor PDF otvoríte dvakrát, jeho listy sa pridajú dvakrát. Ak sa to stane, zavrite sadu a otvorte ju znova.
- {{ui:Zavrieť}} zavrie všetky otvorené súbory naraz. Ak niektoré majú neuložené poznámky, opýta sa: {{ui:Zrušiť}}, {{ui:Zavrieť bez uloženia}} alebo {{ui:Najprv uložiť kópie}}.
- Ukladanie do cloudu zatiaľ nie je k dispozícii a zatiaľ neexistujú ani verzie pre počítač. Súbory PDF uchovávajte spolu s ostatnými súbormi projektu a zálohujte ich ako obvykle. Pozrite [Kam idú Vaše súbory](common:your-files).

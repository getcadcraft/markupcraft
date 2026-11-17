---
title: Porovnanie dvoch revízií
summary: Prekryte starú a novú verziu listu dvoma farbami, zarovnajte ich podľa dvoch bodov a označte oblakmi, čo sa zmenilo.
keywords: porovnať, prekrytie, prekrytie strán, revízia, rozdiel, rozdiely, zmeny, starý nový, zarovnať, spätná kontrola, vydanie, oznámenie
from: 62f5d1c5
---

Porovnanie položí dva listy na seba. Čiary len na starom liste sa zobrazia červenou, čiary len na novom modrou a čiary na oboch tlmenou sivou. Farby sú pomenované v legende pod listom: "Len na starom liste", "Len na novom liste", "Na oboch".

## Porovnanie dvoch listov

1. Otvorte obe vydania. Môžu to byť strany toho istého PDF alebo rôznych PDF; otvorte ich spolu ako jednu sadu (pozri [Práca s viacerými súbormi naraz](topic:several-files)).
2. Vpravo vyberte kartu {{ui:Porovnať}}.
3. Vyberte {{ui:Starý list}} a {{ui:Nový list}}. Nový list sa predvolene nastaví na ten, na ktorom ste. Keď je otvorených viac súborov, názov súboru každého listu sa zobrazí za jeho názvom.
4. Vyberte {{ui:Porovnať}}.

Výsledok: MarkupCraft zobrazí nový list so zmiešaným starým, objaví sa legenda a karta hlási "Porovnávanie <old> (starý) s <new> (nový). Poznámky na novom liste zostanú upraviteľné."

## Prechod medzi starým a novým

Potiahnite posuvník {{ui:Starý a nový}}. Úplne vľavo sa zobrazí iba starý list, úplne vpravo iba nový, v strede obidva. Posúvanie sem a tam je často najrýchlejší spôsob, ako uvidieť malú zmenu.

## Zarovnanie listov

Ak boli obe vydania vytlačené s iným okrajom, veľkosťou alebo otočením, všetko vyzerá ako zmenené. Opravte to:

**Podľa dvoch bodov (najlepšie):**

1. Vyberte {{ui:Zarovnať podľa dvoch bodov}}. Zobrazenie ukazuje iba starý list.
2. Kliknite na ostrý prvok, ktorý nájdete na oboch listoch, napríklad priesečník osí stĺpov. Karta počíta kroky ("1 z 4").
3. Kliknite na druhý prvok, ďaleko od prvého, napríklad na opačný roh mriežky.
4. Zobrazenie prepne na nový list. Kliknite znova na prvý prvok.
5. Kliknite znova na druhý prvok.

Výsledok: "Zarovnané: starý list zmenený na 100.00 %, otočený o 0.00°. Jemné doladenie posunom." Starý list sa posunie, zmení mierku a otočí, aby zapadol. {{key:Esc}} zruší výber, kým vyberáte body. Na presné zarovnanie priblížte každý prvok pred kliknutím.

**Posunom:** na posun starého listu použite štyri šípky pod "Zarovnanie". Zvoľte krok (0.25, 1, 5 alebo 20 pt; 72 pt je jeden palec na papieri). Karta uvedie, o koľko sa posunul.

{{ui:Obnoviť}} odstráni zarovnanie a posuny.

## Iba zmenené čiary

Pod tlačidlami zarovnania vyberte {{ui:Zmenené čiary}} namiesto {{ui:Prekrytie obrazu}}. MarkupCraft potom porovnáva vlastné čiary oboch listov, nie ich obrázky: nový list sa zobrazí tak, ako je, s čiarami len na starom liste červenou a čiarami len na novom modrou. Čiara, ktorá sa iba skrátila, ukáže len chýbajúcu časť. Najprv zarovnajte listy (pozri vyššie): porovnanie používa zarovnanie, takže list, ktorý bol iba posunutý, nezobrazí žiadne zmeny. Stavový riadok uvedie, koľko sa zmenilo.

Toto funguje pri PDF vytlačených z CAD, kde je výkres tvorený čiarami. Naskenované listy nemajú čiary na porovnanie: pre ne použite prekrytie obrazu. Text sadený písmom (nie nakreslený ako ťahy) sa neporovnáva.

## Označenie zmien

Počas porovnávania ste na novom liste a každý nástroj funguje. Kreslite oblaky okolo zmien, keď ich nájdete; patria k novému listu a zostanú, keď porovnávanie ukončíte.

{{ui:Oblak na zmeny}} to urobí za vás: zoskupí zmenené čiary, ktoré sú blízko seba, a nakreslí revízny oblak okolo každej skupiny na novom liste s komentárom "Zmenené od <old sheet>". Jedným {{key:Mod+Z}} ich odstránite všetky; zmažte tie, ktoré nepotrebujete.

## Porovnanie celej sady

Keď nové vydanie príde ako vlastné PDF, otvorte obidve PDF a v karte {{ui:Porovnať}} otvorte {{ui:Porovnanie dvoch sád}}. Vyberte starý a nový súbor a potom zvoľte {{ui:Porovnať sady}}. Listy sa párujú podľa čísla (ako pri [vkladaní listov](topic:slip-sheet-a-revised-set)), porovnávajú sa podľa čiar a zoznam je zoradený od najviac zmenených. Vyberte list v zozname, aby sa tento pár porovnal s {{ui:Zmenené čiary}}.

{{ui:Oblak na všetky zmeny}} označí oblakmi každú skupinu zmenených čiar na každom zmenenom liste jedným krokom, ktorý môžete vrátiť späť. Porovnanie sady nezarovnáva listy vopred, takže list posunutý na strane sa zobrazí ako zmenený: porovnajte tento pár samostatne a použite {{ui:Zarovnať podľa dvoch bodov}}.

## Ukončenie porovnávania

Vyberte {{ui:Ukončiť porovnanie}} alebo prejdite na iný list. Zarovnanie sa zapamätá pre rovnaký pár listov, kým nezavriete sadu.

## Dobré vedieť

- Porovnanie pracuje s tým, čo je nakreslené, pixel po pixeli. Nevie, že sa čiara posunula; ukáže starú polohu jednou farbou a novú druhou.
- Text, ktorý sa preformátoval, zmenený dátum v popisovom poli alebo iný štýl vytlačenia sa tiež zobrazia ako zmeny.
- Naskenovaný list porovnaný s vytlačeným je rušivý: skenovanie rozmazáva a posúva čiary.
- Porovnávanie textu sadeného písmom a zoznam zmien ešte nie sú hotové.

---
title: Zmena vlastných čiar, obrázkov a textu strany
summary: Presúvajte, meňte veľkosť, prefarbujte alebo mažte to, čo samotné PDF kreslí, presúvajte body čiary, nahraďte obrázok a zmeňte slová riadku textu.
keywords: obsah strany, základný obsah, upraviť PDF, upraviť výkres, vektor, cesta, tvar, čiara, obrázok, nahradiť obrázok, text, slová, písmo, body, uzly, presunúť, zmeniť veľkosť, prefarbiť, zmazať, nástroj obsahu
from: 471d457e
---

Značky ležia na liste. Nástroj {{ui:Obsah}} pracuje so samotným listom: čiarami, obrázkami a riadkami textu, ktoré kreslí PDF. Vaše PDF na tomto počítači sa nikdy nemení: úpravy sú súčasťou kópie, ktorú uložíte.

## Výber toho, čo meniť

1. Vyberte {{ui:Obsah}} v skupine {{ui:Výber}} alebo stlačte {{key:B}}.
2. V časti {{ui:Výber}} v {{ui:Vlastnosti}} zapnite alebo vypnite {{ui:Tvary}}, {{ui:Obrázky}} a {{ui:Text}}. Vybrať sa dajú iba zapnuté druhy, takže môžete vybrať text hustého výkresu bez toho, aby ste zachytili jeho čiary.
3. Kliknite na niečo, čo chcete vybrať. Shift+kliknutie pridá alebo odoberie. Potiahnutím rámika cez prázdny papier vyberiete viacero: potiahnutie doprava zoberie to, čo je celé vnútri rámika, potiahnutie doľava zoberie to, čoho sa rámik dotýka.

Tvar vnútri orezanej oblasti sa vyberie iba tam, kde je vidieť.

## Presun, zmena veľkosti, prefarbenie, zmazanie

- **Presun:** potiahnite vybratý objekt, alebo stlačte šípky (na väčšie kroky podržte Shift). Podržte Shift pri ťahaní na presun rovno do strany alebo rovno nahor.
- **Zmena veľkosti:** potiahnite jeden z ôsmich štvorcov okolo výberu. Zväčšuje sa alebo zmenšuje od opačnej strany. Podržte Shift na zachovanie pomerov.
- **Prefarbenie:** pre čiary a tvary nastavte {{ui:Farba čiary}}, {{ui:Farba výplne}} a {{ui:Hrúbka čiary (pt)}} v {{ui:Vlastnosti}}.
- **Zmazanie:** stlačte {{key:Delete}}, alebo vyberte {{ui:Zmazať zo strany}}.
- **Späť:** každá zmena je jeden krok: {{key:Mod+Z}} ju vráti späť, {{key:Mod+Y}} ju obnoví.

{{ui:Vrátiť do pôvodného stavu}} vráti naraz každú zmenu vybratých objektov; {{ui:Vrátiť túto stranu do pôvodného stavu}} to urobí pre celú stranu.

## Kopírovanie, vystrihovanie a vkladanie obsahu strany

Vyberte čiary, obrázky alebo text nástrojom {{ui:Obsah}}, potom:

- {{key:Mod+C}} kopíruje, {{key:Mod+X}} vystrihuje (kopíruje a odstráni ich zo strany), {{key:Mod+D}} položí kópiu vedľa nich.
- {{key:Mod+V}} vloží ako obsah strany, vedľa originálu alebo tam, kde je ukazovateľ (ako uvádzajú [Nastavenia](topic:settings)); {{key:Mod+Shift+V}} vloží presne na to isté miesto. Vložiť sa dá na inú stranu, do iného otvoreného PDF alebo do inej karty MarkupCraft v tomto prehliadači.
- Ponuka skupiny {{ui:Úpravy}} a ponuka pravého kliknutia majú rovnaké príkazy.

Vložené čiary zostanú čiarami, slová slovami vo svojom vlastnom písme a obrázky obrázkami. Je to jeden kus: presuňte ho, zmeňte jeho veľkosť pomocou štvorcov, zmažte ho alebo ho vráťte pomocou {{key:Mod+Z}}. Stane sa súčasťou strany v kópii, ktorú uložíte. Naposledy skopírované, značky alebo obsah strany, je to, čo {{key:Mod+V}} vloží.

To, čo kópia obsahuje, sa orezáva na rámik okolo výberu: všetko, čo MarkupCraft nedokáže vziať z kópie (pozrite nižšie) a čo sa nachádza vnútri tohto rámika, sa prenesie.

## Presun bodov čiary

Dvakrát kliknite na čiaru alebo krivku (alebo ju vyberte a zvoľte {{ui:Upraviť body}}). Jej body sa zobrazia ako štvorce a jej úchyty krivky ako kruhy. Potiahnite bod alebo úchyt; bod prinesie susedné úchyty so sebou, takže krivka si okolo neho zachová tvar. Keď skončíte, stlačte {{key:Esc}} alebo kliknite mimo čiary.

Obdĺžniky nemajú body na ťahanie: meňte ich veľkosť pomocou štvorcov okolo nich.

## Nahradenie obrázka

Vyberte obrázok a zvoľte {{ui:Nahradiť obrázok…}}, potom vyberte súbor PNG, JPEG alebo SVG (alebo PDF: jeho prvú stranu). Nový obrázok vyplní miesto starého a zachová si vlastné pomery.

## Zmena slov riadku textu

Dvakrát kliknite na riadok textu, napíšte nové slová do {{ui:Slová}} a stlačte {{key:Enter}}. Slová sa napíšu v písme a veľkosti riadku, riadok si zachová svoju dĺžku, takže text za ním sa nehýbe.

:::note
Väčšina PDF nesie iba písmená, ktoré z každého písma používajú. Keď napíšete písmeno, ktoré kópia písma v súbore nemá, MarkupCraft ho vytlačí v písme Helvetica a povie to. {{ui:Vlastnosti}} ukazujú, ktoré písmená má písmo v súbore.
:::

Text sa mení po jednom riadku; nepreteká do ďalšieho riadku.

## Čo MarkupCraft nechá tak, ako je

- **Naskenované strany** sú jeden obrázok: obrázok môžete presúvať, meniť jeho veľkosť, nahradiť alebo zmazať, ale to, čo je v ňom, sa upraviť nedá.
- **Zašifrované a podpísané PDF:** zmena strany by porušila podpis, takže nástroj {{ui:Obsah}} to povie a nič nezmení. Značky stále fungujú.
- **Orezané oblasti, objekty rozdelené medzi dve časti obsahu strany a farebné prechody, ktoré vypĺňajú celú oblasť, zostávajú, ako sú; MarkupCraft povie, prečo, keď to skúsite.
- **Slová v štandardnom písme, ktoré PDF nepopisuje** (napríklad písmo Times bez šírok písmen v súbore), sa nedajú zmeniť, lebo MarkupCraft by nedokázal zachovať rozstup riadku. Riadok sa dá stále presúvať.

## Vloženie značiek do strany

Čiary, obdĺžniky, elipsy, lomené čiary, oblaky a ťahy pera, ktoré ste nakreslili ako značky, sa môžu stať súčasťou samotnej strany: vyberte ich a zvoľte {{ui:Vložiť do strany}} v {{ui:Vlastnosti}}. Text, pečiatky, obrázky a priesvitné farby zostanú značkami.

---
title: Odkazy na listy
summary: Urobte, aby poznámka presunula na iný list, a prepojte každý odkaz na list ako 3/A-501 na jeho list a pohľad jedným krokom pomocou Dávkových prepojení.
keywords: hypertextový odkaz, prepojenie, prepojenia, skok, odkaz na list, odkaz v texte, 3/A-501, prejsť na list, späť, automatické prepojenie, dávkové prepojenie, dávkové prepojenia, blok popisu, číslo listu, názov listu, pohľad, detail, premenovať, prečíslovať, dodatok, odkaz na PDF
from: 86a17c37
---

Prepojenie na list vás presunie z poznámky na iný list sady: z bubliny detailu na detail, z poznámky na list, ku ktorému sa vzťahuje.

## Prepojenie poznámky na list

1. Vyberte poznámku.
2. V {{ui:Vlastnosti}} vyberte list pod {{ui:Odkaz na list}}.

Malá šípka sa objaví v pravom hornom rohu poznámky. Ak ju chcete nasledovať, podržte {{key:Mod}} a kliknite na poznámku, alebo ju vyberte a zvoľte {{ui:Prejsť na …}} v {{ui:Vlastnosti}}. {{key:Alt+Left}} vás vráti na list, z ktorého ste prišli.

Prepojenie označuje list číslom, takže funguje aj po znovuotvorení sady alebo po nahradení novým vydaním listu: otvorí najnovší list s týmto číslom. Ak tento list nie je otvorený, stavový riadok to oznámi.

## Prepojiť všetky odkazy na listy naraz

Vyberte {{ui:Strany}} › {{ui:Dávkové prepojenia…}}, alebo {{ui:Prepojiť odkazy na listy…}} pod {{ui:Hľadať text}} v hornej časti panela {{ui:Listy}}.

1. **Skontrolujte čísla listov.** MarkupCraft vypíše každý otvorený list s číslom a názvom, ktoré prečítal z bloku popisu listu (alebo z označenia strany), a odkiaľ ich vzal. Opravte chybné a napíšte číslo tam, kde nič nenašiel (blok popisu, ktorého číslo je vykreslené ako čiary, nemá text na čítanie). Potom vyberte {{ui:Nájsť odkazy}}. Vaše opravy sú jeden krok späť a stanú sa popiskami strán v uloženom PDF.
2. **Prejdite zoznam.** MarkupCraft číta text každého listu kvôli odkazom v texte, ako "3/A-501", "5 / A501", "DETAIL 2 ON A-501", bublinu s "3" nad "A-501" alebo obyčajné "A-501" v poznámke, a číta názvy pohľadov každého listu (číslo detailu s číslom listu pod ním, alebo veľké číslo s názvom vedľa). Zoznam má tri časti:
   - {{ui:Bude prepojené}}: každý odkaz, list, na ktorý smeruje, a pohľad na tomto liste. Odškrtnite ľubovoľný, ktorý nechcete. Ak pohľad nebol nájdený (odkaz na pohľad 7 na liste s pohľadmi 1 až 6), vyberte pohľad zo zoznamu vedľa neho, alebo ponechajte {{ui:Celý list}}.
   - {{ui:Nie je prepojené}}: čísla listov, ktoré žiadny otvorený list nemá, s počtom odkazov, ktoré každé menuje. Vyberte list, ktorý každé znamená (napríklad list, ktorý bol prečíslovaný), a každý odkaz na toto číslo sa prepojí naň. Alebo ho nechajte neprepojený.
   - Koľko odkazov v texte je už prepojených a stále smeruje správne. Ponechajú sa tak, ako sú.
3. Vyberte {{ui:Vytvoriť odkazy}}.

Každý odkaz dostane tenký modrý rámček, ktorý je prepojením na list. {{key:Mod}}+kliknutie na neho otvorí list priblížený na pohľad. Jedno {{key:Mod+Z}} ich odstráni všetky.

Odkazy, ktoré len vyzerajú ako čísla listov, napríklad R-19 alebo W12X26, sa vynechajú: odkaz v texte musí mať tvar vlastných čísel listov sady. Vlastné číslo listu v jeho bloku popisu a v názvoch pohľadov nie je nikdy odkazom. Skenované listy nemajú text na čítanie: najprv použite {{ui:Prečítať text (OCR)…}}, alebo prepojte ich odkazy jeden po druhom.

## Spustenie znova pri zmene sady

Dávkové prepojenia môžete spustiť koľkokrát chcete:

- **Pridal sa list**, napríklad dodatok s A-601: otvorte jeho súbor a spustite Dávkové prepojenia znova. Odkazy na A-601, ktoré sa predtým neprepojili, sa teraz prepoja.
- **List bol prečíslovaný**: opravte jeho číslo v kroku 1. Prepojenia vytvorené Dávkovými prepojeniami, ktoré už nenájdu svoj list, sa vypíšu pod {{ui:Nie je prepojené}}; raz vyberte list a všetky ho budú nasledovať. Prepojenia, ktoré sa presunuli na iný pohľad, sa aktualizujú.
- Prepojenia, ktoré ste urobili ručne v {{ui:Vlastnosti}}, sa nikdy nemenia.

## V uloženom PDF

Prepojenie na list v tom istom PDF sa zapíše aj ako odkaz PDF, takže aj iné čítačky po kliknutí skočia tam. Prepojenie s pohľadom otvorí tento pohľad v inej čítačke (skok PDF "fit rectangle"); prepojenie bez pohľadu otvorí celý list. Prepojenia na list v inom súbore sady fungujú len v MarkupCraft.

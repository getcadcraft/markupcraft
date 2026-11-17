---
title: Nastavení MarkupCraftu
summary: Změňte své jméno, barvu a tloušťku čáry nových poznámek, kam se vkládají kopie, a jednotky délek a polohy na listu.
keywords: nastavení, předvolby, možnosti, jméno, autor, barva, výchozí barva, tloušťka čáry, silná, tenká, vložit, na ukazatel, odsazení, jednotky, metrické, milimetry, palce, stopy, obnovit
from: 63ad97fd
---

Otevřete {{ui:Nastavení}} ozubeným kolečkem v liště nahoře, nebo stiskněte {{key:Mod+,}}. První karta, {{ui:MarkupCraft}}, obsahuje nastavení patřící této aplikaci. {{ui:Obecné}} obsahuje nastavení, která sdílejí všechny aplikace CadCraftu (motiv, panel nástrojů, panely). Nastavení MarkupCraftu existují jen v této aplikaci: měníte je tady a tento prohlížeč si je pamatuje (viz [Co zůstává v tomto prohlížeči](topic:browser-storage)). Změna se projeví okamžitě; nic se neukládá.

## Vaše jméno

{{ui:Jméno na poznámkách}} je jméno, které nese každá nová poznámka a odpověď a které uložená PDF zobrazují jako autora komentáře. Je to stejné jméno jako tlačítko na pravém konci stavového řádku; změníte je na kterémkoli z těchto míst. Poznámky již nakreslené si ponechají jméno, se kterým vznikly. Viz [Nastavit své autorské jméno](topic:set-your-name).

## Nové poznámky

- **{{ui:Barva poznámek}}** je barva, se kterou začínají nová pera, čáry, šipky, obdélníky, elipsy, lomené čáry, mnohoúhelníky, oblaky, výnosky a text (na začátku červená). Zvýrazňovače, poznámky, razítka, délky, plochy a počty si ponechávají vlastní barvy, protože jejich barvy říkají, čím jsou.
- **{{ui:Tenké čáry}}, {{ui:Normální}}, {{ui:Silné čáry}}** dělají čáry těchto stejných poznámek poloviční šířky, jaká je, nebo o polovinu širší.

Barva nebo tloušťka čáry, kterou zvolíte pro jeden nástroj v {{ui:Vlastnosti}} (když je nástroj zapnutý a nic není vybráno), má přednost před těmito. Nástroje ze [sady nástrojů](topic:tool-chest) si ponechávají vlastní styl. Již nakreslené poznámky se nemění: vyberte je a změňte je v {{ui:Vlastnosti}}.

## Vložení

Kam {{key:Mod+V}} umístí to, co jste zkopírovali:

- **{{ui:Na ukazatel}}** (výchozí): když je ukazatel na listu, kopie se vycentruje tam, kam ukazuje. Když je ukazatel jinde, vloží se vedle originálu.
- **{{ui:Vedle kopie}}**: vždy o kousek níž a vpravo od originálu, s každým dalším vložením o krok dál.

Tlačítko {{ui:Vložit}} a {{key:Mod+Shift+V}} ({{ui:Vložit na stejné místo}}) fungují stejně, ať je zvolena kterákoli možnost. Viz [Kopírování, vložení a duplikace](topic:select-and-edit#copy-paste-and-duplicate).

## Měření

- **{{ui:Zobrazovat délky v}}** je jednotka, kterou dialog měřítka listu nabídne jako první, když kalibrujete ze dvou bodů: stopy a palce, desetinné stopy, palce, metry nebo milimetry. Listy, které jste již zkalibrovali, si ponechají svou jednotku. Viz [Kalibrace listu a měření](topic:calibrate-and-measure).
- **{{ui:Poloha na listu}}** volí palce nebo milimetry pro polohu ukazatele v levém dolním rohu obrazovky. Je to poloha na papíru, ne skutečná vzdálenost.

## Obnovení

{{ui:Obnovit nastavení MarkupCraftu}} ve spodní části dialogu vrátí tato nastavení a nastavení panelů a panelu nástrojů na kartě {{ui:Obecné}} zpět do výchozího stavu. Ponechá vaše jméno, protože říká, kdo jste, a ne jak rádi pracujete, a ponechá barvy, které jste zvolili v panelu každého nástroje.

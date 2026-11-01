---
title: Prohlídka obrazovky
summary: Panel nástrojů, seznam listů, plocha listu, pět panelů vpravo a stavový řádek, s názvy, jaké jsou na obrazovce.
keywords: obrazovka, rozložení, panel nástrojů, panely, postranní panel, miniatury, vlastnosti, stavový řádek, rozhraní, celá obrazovka, motiv, tmavý režim
from: 18d82de6
---

MarkupCraft vyplňuje okno prohlížeče. Shora dolů a zleva doprava:

## Lišta úplně nahoře

Tenká lišta nad vším patří rodině CadCraft, ne samotnému MarkupCraftu. Obsahuje:

- název aplikace a verzi, kterou používáte,
- {{ui:O aplikaci MarkupCraft}}, což otevře stránku aplikace na webu,
- {{ui:Nápověda}}, což otevře tuto nápovědu v postranním panelu (nebo stiskněte {{key:F1}}),
- {{ui:Uložit pro offline}}, což uchová MarkupCraft, jeho čtečku a zapisovač PDF a tuto nápovědu v tomto prohlížeči, aby se otevřel bez připojení; poté se zobrazí „Připraveno offline“ (viz [Práce offline](common:offline)),
- tlačítko režimu obrazovky ({{ui:Celá obrazovka}}) a
- {{ui:Nastavení}} (nebo {{key:Mod+,}}) s kartou {{ui:MarkupCraft}} pro nastavení této aplikace a kartou {{ui:Obecné}} pro nastavení, která sdílejí všechny aplikace CadCraft (viz [Nastavení MarkupCraftu](topic:settings)), a
- {{ui:Papír}} a {{ui:Model}}, světlý a tmavý motiv. V režimu {{ui:Model}} se listy kreslí světle na tmavém; vaše poznámky si ponechají své vlastní barvy.

Tlačítko režimu obrazovky, nebo {{key:Ctrl+Shift+F}}, přepíná mezi třemi režimy: normální, celá obrazovka a celá obrazovka se skrytými lištami. Při skrytých lištách přesuňte ukazatel k hornímu okraji obrazovky (nebo tam klepněte) a lišty se vrátí. Tato zkratka používá klávesu Control na všech počítačích, i na Macu.

:::note
Na celé obrazovce {{key:Esc}} také způsobí, že prohlížeč celou obrazovku opustí. Pokud jste chtěli jen zrušit kreslení, stiskněte znovu {{key:Ctrl+Shift+F}} a vraťte se na celou obrazovku.
:::

## Panel nástrojů

Pod horní lištou jsou nástroje seskupeny a označeny:

| Skupina | Tlačítka |
|---|---|
| Soubor | {{ui:Otevřít}}, {{ui:Uložit}}, {{ui:Zavřít}} |
| Výběr | {{ui:Vybrat}}, {{ui:Posun}} |
| Kreslení | {{ui:Pero}}, {{ui:Zvýraznit}}, {{ui:Úsečka}}, {{ui:Šipka}}, {{ui:Obdélník}}, {{ui:Elipsa}}, {{ui:Mnohočára}}, {{ui:Mnohoúhelník}} |
| Revize | {{ui:Oblak}}, {{ui:Volný oblak}} |
| Anotace | {{ui:Vynášecí text}}, {{ui:Text}}, {{ui:Poznámka}}, {{ui:Razítko}} |
| Měření | {{ui:Kalibrovat}}, {{ui:Délka}}, {{ui:Plocha}}, {{ui:Počet}} |
| Úpravy | {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}} a {{ui:Více}}: {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Vybrat vše}}, {{ui:Zrušit výběr}} |

Nástroj, který právě používáte, vypadá stisknutě. Podržíte-li ukazatel nad tlačítkem, uvidíte jeho klávesu (například „Obdélník (R)“); nabídka {{ui:Více}} uvádí u každého příkazu jeho klávesu. Tlačítka, která teď nelze použít, jsou zesvětlená: {{ui:Kopírovat}}, dokud nevyberete poznámku, a {{ui:Vložit}}, dokud není něco zkopírováno. Malá tečka za {{ui:Uložit}} znamená, že některé poznámky ještě nejsou uloženy. Úplný seznam kláves je v tématu [Klávesnice a myš](topic:keyboard).

Nástroj zůstane po kreslení zapnutý, takže můžete nakreslit několik oblaků za sebou. Stisknutím {{key:Esc}} (dvakrát, pokud je nová poznámka stále vybraná) nebo {{key:V}} se vrátíte k nástroji {{ui:Vybrat}}.

## Seznam listů (vlevo)

{{ui:Listy}} uvádí každou stranu každého otevřeného PDF. Každý řádek ukazuje malý obrázek listu, jeho název, číslo listu nebo soubor a stranu a počet poznámek na něm. Číslo za nadpisem je počet listů.

- Kliknutím na řádek zobrazíte daný list.
- Do pole {{ui:Hledat listy}} napište text a seznam se filtruje podle názvu listu, čísla listu nebo názvu souboru. Stisknutím {{key:Enter}} otevřete první nalezený list.

Názvy listů se berou z PDF, pokud je obsahuje. Viz [Otevření sady výkresů a přecházení mezi listy](topic:open-a-plan-set).

## Plocha listu (uprostřed)

List, na kterém pracujete. Dokud není nic otevřeno, zobrazuje „Otevřete sadu plánů“ s tlačítkem {{ui:Otevřít PDF}}. Soubory PDF můžete pustit kamkoli sem a otevřít je.

Pod listem je úzká lišta s:

- šipkami na předchozí a další list a textem „3 z 12: A-101 — Půdorys“ (podržte nad ním ukazatel, uvidíte soubor a stranu),
- oddálením, polem zoomu (zadejte procenta a stiskněte {{key:Enter}}; 100 % je skutečná velikost na typické obrazovce) a přiblížením,
- {{ui:Přizpůsobit stránku}} a {{ui:Přizpůsobit šířku}}.

Každý list si pamatuje svůj vlastní zoom, dokud je sada otevřená.

Když porovnáváte dva listy, zobrazí se zde legenda: „Pouze na starém listu“, „Pouze na novém listu“ a „Na obou“. Viz [Porovnání dvou revizí](topic:compare-revisions).

## Panely (vpravo)

Pět karet:

| Karta | Co zobrazuje |
|---|---|
| {{ui:Vlastnosti}} | Vybranou poznámku: autora, data, naměřené hodnoty, stav, předmět, text, komentář, styl, její odpovědi a její položku závady. Při zapnutém kreslicím nástroji a bez výběru: nastavení, které použijí nové poznámky. Bez výběru a při zapnutém nástroji {{ui:Vybrat}}: list, tedy číslo, název, odkud byl název přečten, velikost papíru, měřítko a {{ui:Přejmenovat list}}. |
| {{ui:Poznámky}} | Každou poznámku v otevřené sadě, s filtry a exporty {{ui:CSV}} a {{ui:BCF}}. Viz [Seznam poznámek](topic:markups-list-and-export). |
| {{ui:Seznam závad}} | Číslované položky závad s přiřazenou osobou, termínem a stavem. Viz [Sestavení seznamu závad](topic:punch-list). |
| {{ui:Nástroje}} | Sada nástrojů: uložené nástroje se stylem. Viz [Sada nástrojů](topic:tool-chest). |
| {{ui:Porovnat}} | Překrytí dvou listů. Viz [Porovnání dvou revizí](topic:compare-revisions). |

## Stavový řádek (dole)

- Vlevo poloha ukazatele na listu, v palcích (nebo v milimetrech, v [Nastavení](topic:settings)) na papíře.
- Uprostřed zprávy: co nástroj očekává dál, co se právě uložilo, proč bylo něco odmítnuto. **Čtěte jej, když se něco neděje.**
- Tlačítko měřítka listu („Nezkalibrováno“ nebo měřítko). Kliknutím nastavíte měřítko. Viz [Kalibrace listu a měření](topic:calibrate-and-measure).
- Vaše jméno („Nastavte své jméno“, dokud žádné nezadáte). Kliknutím jej změníte.

## Na malé obrazovce

Pod šířkou asi 1180 pixelů se panely zužují a obrázky listů zmenšují. Na obrazovce velikosti telefonu se části skládají pod sebe: panel nástrojů (posouvejte jej do stran), list, stavový řádek, panely a nakonec dole seznam listů. Tablet na šířku si ponechá celé rozložení.

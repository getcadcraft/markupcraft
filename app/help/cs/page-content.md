---
title: Změna vlastních čar, obrázků a textu stránky
summary: Přesouvejte, měňte velikost, barvu nebo mažte to, co samo PDF kreslí, přesouvejte body čáry, nahrazujte obrázek a měňte slova řádku textu.
keywords: obsah stránky, základní obsah, upravit PDF, upravit výkres, vektor, cesta, tvar, čára, obrázek, nahradit obrázek, text, slova, písmo, body, uzly, přesunout, změnit velikost, přebarvit, smazat, nástroj obsahu
from: 471d457e
---

Poznámky leží nad listem. Nástroj {{ui:Content}} pracuje se samotným listem: s čarami, obrázky a řádky textu, které PDF kreslí. Vaše PDF na tomto počítači se nikdy nemění: úpravy jsou součástí kopie, kterou uložíte.

## Výběr toho, co měnit

1. Zvolte {{ui:Content}} ve skupině {{ui:Select}}, nebo stiskněte {{key:B}}.
2. V {{ui:Properties}} pod {{ui:Pick}} zapněte nebo vypněte {{ui:Shapes}}, {{ui:Pictures}} a {{ui:Text}}. Vybrat lze jen ty druhy, které jsou zapnuté, takže můžete vybrat text přeplněného výkresu, aniž byste zachytili jeho čáry.
3. Kliknutím něco vyberte. Shift+klik přidá nebo odebere. Chcete-li vybrat několik objektů, přetáhněte rámeček přes prázdný papír: tažení doprava vezme to, co je celé uvnitř rámečku, tažení doleva vezme to, čeho se rámeček dotýká.

Tvar uvnitř oříznuté oblasti je vybrán jen tam, kde je vidět.

## Přesun, změna velikosti, barva, smazání

- **Přesun:** přetáhněte vybraný objekt, nebo stiskněte šipky (pro větší kroky držte Shift). Držením Shift při tažení se pohybujete rovně do strany nebo rovně nahoru.
- **Změna velikosti:** přetáhněte jeden z osmi čtverečků kolem výběru. Objekt roste nebo se zmenšuje od opačné strany. Držením Shift zachováte poměry.
- **Změna barvy:** u čar a tvarů nastavte v {{ui:Properties}} {{ui:Line color}}, {{ui:Fill color}} a {{ui:Line width (pt)}}.
- **Smazání:** stiskněte {{key:Delete}}, nebo zvolte {{ui:Delete from the page}}.
- **Zpět:** každá změna je jeden krok: {{key:Mod+Z}} ji vezme zpět, {{key:Mod+Y}} ji vrátí.

{{ui:Put back as it was}} zruší najednou všechny změny vybraných objektů; {{ui:Put this page back as it was}} to udělá pro celou stránku.

## Kopírování, vyjmutí a vložení obsahu stránky

Vyberte čáry, obrázky nebo text nástrojem {{ui:Content}} a pak:

- {{key:Mod+C}} kopíruje, {{key:Mod+X}} vyjme (zkopíruje je a odebere ze stránky), {{key:Mod+D}} vloží kopii vedle nich.
- {{key:Mod+V}} vloží jako obsah stránky, vedle originálu nebo tam, kde je kurzor (jak uvádí [Nastavení](topic:settings)); {{key:Mod+Shift+V}} vloží přesně na stejné místo. Vložit lze na jinou stranu, do jiného otevřeného PDF nebo do jiné karty MarkupCraft v tomto prohlížeči.
- Nabídka skupiny {{ui:Edit}} a nabídka po kliknutí pravým tlačítkem mají stejné příkazy.

Vložení zachová čáry jako čáry, slova jako slova ve vlastním písmu a obrázky jako obrázky. Je to jeden celek: přesuňte ho, změňte jeho velikost pomocí čtverečků, smažte ho, nebo ho klávesou {{key:Mod+Z}} odstraňte. V uložené kopii se stane součástí stránky. Naposledy zkopírované, ať už poznámky, nebo obsah stránky, je to, co {{key:Mod+V}} vloží.

Obsah kopie se ořízne na rámeček kolem výběru: cokoli, co MarkupCraft nedokáže z kopie vzít (viz níže) a co leží uvnitř tohoto rámečku, se přenese.

## Přesun bodů čáry

Dvojklikem na čáru nebo křivku (nebo ji vyberte a zvolte {{ui:Edit points}}). Její body se zobrazí jako čtverečky a úchyty křivky jako kroužky. Přetáhněte bod nebo úchyt; bod s sebou táhne úchyty u sebe, takže křivka kolem něj zachová tvar. Až skončíte, stiskněte {{key:Esc}}, nebo klikněte mimo čáru.

Obdélníky nemají body k tažení: měňte jejich velikost pomocí čtverečků kolem nich.

## Nahrazení obrázku

Vyberte obrázek, zvolte {{ui:Replace picture…}} a vyberte soubor PNG, JPEG nebo SVG (nebo PDF: jeho první stranu). Nový obrázek zaujme místo starého a zachová své vlastní poměry.

## Změna slov řádku textu

Dvojklikem na řádek textu napište nová slova do pole {{ui:Words}} a stiskněte {{key:Enter}}. Slova se napíšou ve vlastním písmu a velikosti řádku a řádek si zachová délku, takže text za ním se nepohne.

:::note
Většina PDF obsahuje jen písmena, která z každého písma používají. Když napíšete písmeno, které kopie písma v souboru nemá, MarkupCraft ho vykreslí v písmu Helvetica a řekne to. {{ui:Properties}} ukazuje, která písmena písmo v souboru má.
:::

Text se mění po jednom řádku; nepřechází do dalšího řádku.

## Co MarkupCraft ponechává beze změny

- **Naskenované strany** jsou jeden obrázek: můžete ho přesunout, změnit mu velikost, nahradit nebo smazat, ale to, co v něm je, upravit nelze.
- **Zašifrovaná a podepsaná PDF:** změna stránky by porušila podpis, proto to nástroj {{ui:Content}} řekne a nic nezmění. Poznámky dál fungují.
- **Oříznuté oblasti**, objekty rozdělené mezi dvě části obsahu stránky a barevné přechody, které vyplňují celou oblast, zůstávají beze změny; MarkupCraft vám řekne proč, když to zkusíte.
- **Slova ve standardním písmu, které PDF nepopisuje** (například písmo Times bez šířek písmen v souboru), nelze změnit, protože MarkupCraft by nemohl zachovat rozestupy řádku. Řádek lze přesto přesunout.

## Vložení poznámek do stránky

Čáry, obdélníky, elipsy, mnohočáry, oblaky a tahy pera, které jste nakreslili jako poznámky, se mohou stát součástí samotné stránky: vyberte je a v {{ui:Properties}} zvolte {{ui:Put into the page}}. Text, razítka, obrázky a průhledné barvy zůstávají poznámkami.

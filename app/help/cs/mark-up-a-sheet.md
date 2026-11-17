---
title: Poznámky na listu
summary: Kreslete revizní oblaky, vynášecí texty, textová pole, šipky, tvary, tahy pera a zvýraznění a nastavte jejich barvu a čáru před kreslením nebo po něm.
keywords: poznámky, červené značky, redline, oblak, revizní oblak, vynášecí text, výnoska, textové pole, šipka, čára, obdélník, elipsa, kružnice, mnohočára, mnohoúhelník, pero, volná ruka, tuš, zvýrazňovač, barva, tloušťka čáry
from: 9d6de0ac
---

Každý nástroj funguje stejně: vyberte jej, nakreslete na list a nová poznámka se označí, abyste ji viděli ve {{ui:Vlastnosti}}. Nástroj zůstane zapnutý pro další. Stavový řádek vždy říká, co nástroj očekává dál.

:::touch
Na dotykové obrazovce kreslete jedním prstem. Druhý prst zruší to, co začal první, a místo toho stahuje nebo posouvá, takže při zoomování nic omylem nezanecháte. Více v [Revize na iPadu nebo dotykové obrazovce](topic:review-on-a-tablet).
:::

## Revizní oblaky

**Rámečkový oblak:** zvolte {{ui:Oblak}} ({{key:C}}) a přetáhněte rámeček. Držením {{key:Shift}} jej uděláte čtvercový.

**Volný oblak** kolem nepravidelného tvaru:

1. Zvolte {{ui:Volný oblak}} ({{key:Shift+C}}).
2. Klikněte na každý roh oblasti.
3. Dokončete dvojklikem, klávesou {{key:Enter}} nebo pravým tlačítkem. Na dotyku dvojitě klepněte.

Při klikání na body odebere {{key:Backspace}} poslední bod a {{key:Esc}} zruší celý tvar. Držením {{key:Shift}} udržíte další stranu na násobku 45°. Volný oblak potřebuje alespoň tři body.

Oblouky se vždy vyklenou ven a jejich velikost sleduje tloušťku čáry: silnější čára dá větší oblouky.

## Vynášecí texty

Vynášecí text je textové pole s výnoskou, která ukazuje na něco.

1. Zvolte {{ui:Vynášecí text}} ({{key:K}}).
2. Stiskněte na bod, který chcete označit, a přetáhněte tam, kam má text jít. Uvolněte.
   Pokud jen kliknete bez tažení, pole se umístí nahoru a vpravo od bodu.
3. Napište text. Pole roste dolů, jak se řádky zalamují.
4. Klikněte kamkoli mimo pole, nebo stiskněte {{key:Mod+Enter}}, a dokončete. {{key:Esc}} vynášecí text zahodí.

Pokud dokončíte bez psaní, nepřidá se žádný vynášecí text ("Nic nebylo napsáno, takže nebyl přidán žádný vynášecí text.").

Po nakreslení vyberte poznámku, abyste přesunuli pole, přetáhli hrot výnosky nebo její ohyb (dva kosočtverečné úchyty), nebo změnili velikost pole.

## Textová pole

1. Zvolte {{ui:Text}} ({{key:T}}).
2. Klikněte, kde text začíná (dostanete pole rozumné šířky), nebo přetáhněte pole požadované velikosti.
3. Napište text, pak klikněte mimo něj nebo stiskněte {{key:Mod+Enter}}.

Text nemá výchozí ohraničení. Chcete-li ho mít, zvyšte {{ui:Tloušťka čáry}} ve {{ui:Vlastnosti}}. Chcete-li mu pozadí, zaškrtněte {{ui:Výplň}}.

Slova změníte později: se zapnutým {{ui:Výběr}} dvakrát klikněte na text, nebo ho vyberte a stiskněte {{key:Enter}}, nebo zvolte {{ui:Upravit na listu}} ve {{ui:Vlastnosti}}. Můžete ho upravit i v poli {{ui:Text}} ve {{ui:Vlastnosti}}.

## Šipky a čáry

1. Zvolte {{ui:Šipka}} ({{key:A}}) nebo {{ui:Úsečka}} ({{key:L}}).
2. Přetáhněte od začátku ke konci. Nebo klikněte na začátek, uvolněte a klikněte na konec.
3. Držením {{key:Shift}} ji udržíte na násobku 45°.

Hrot šipky je na konci, kde jste dokončili.

## Obdélníky, elipsy, mnohočáry a mnohoúhelníky

- {{ui:Obdélník}} ({{key:R}}) a {{ui:Elipsa}} ({{key:E}}): přetáhněte rámeček. {{key:Shift}} udělá čtverec nebo kružnici. Klik bez tažení nic nenakreslí a stavový řádek vás vyzve k tažení.
- {{ui:Mnohočára}} ({{key:Y}}) a {{ui:Mnohoúhelník}} ({{key:G}}): klikejte body; dokončete dvojklikem, klávesou {{key:Enter}} nebo pravým tlačítkem (na dotyku dvojitým klepnutím). {{key:Backspace}} odebere poslední bod. Mnohoúhelník se uzavře sám a potřebuje tři body; mnohočára potřebuje dva.

## Pero a zvýrazňovač

- {{ui:Pero}} ({{key:P}}): přetažením kreslete volnou rukou. Tah se při uvolnění trochu vyhladí.
- {{ui:Zvýraznit}} ({{key:I}}): totéž, ale širokým průhledným žlutým tahem, který obarví výkres pod sebou, místo aby ho zakrýval.
- Držením {{key:Shift}} během kreslení dostanete jeden přímý tah od místa, kde jste začali.

Zvýrazňovač je tah volnou rukou. Nepřichytává se k textu v PDF.

## Barva, čára a výplň

Dvěma způsoby:

- **Před kreslením:** vyberte nástroj. Když nic není vybráno, ve {{ui:Vlastnosti}} se zobrazí nastavení pro nástroj <tool>: {{ui:Barva}}, {{ui:Tloušťka čáry}} (v bodech), {{ui:Výplň}} a {{ui:Krytí výplně}} pro uzavřené tvary, {{ui:Krytí}} a {{ui:Velikost textu}} pro text. Každá nová poznámka tohoto druhu je použije a MarkupCraft je pamatuje v tomto prohlížeči.
- **Po kreslení:** vyberte jednu nebo více poznámek a změňte stejné ovládací prvky pod nadpisem „Styl“. Při více vybraných se změna použije na všechny najednou.

Výchozí nastavení: červené poznámky, žlutý zvýrazňovač, modrá měření, oranžové počty a razítka barvená podle významu.

Uložené vzhledy, které používáte každý den, patří do sady nástrojů: viz [Sada nástrojů](topic:tool-chest).

## Předmět a komentář

Každá poznámka má také {{ui:Předmět}} (krátký štítek, například „Oblak“ nebo „RFI“, zobrazený v seznamu poznámek a v jiných prohlížečích PDF) a {{ui:Komentář}} (delší poznámky). Vyplňte je ve {{ui:Vlastnosti}}. Pro konverzaci o poznámce použijte odpovědi: viz [Stavy a odpovědi](topic:statuses-and-replies).

## Dál

- [Výběr, přesun a úpravy poznámek](topic:select-and-edit)
- [Razítka a poznámky](topic:stamps-and-notes)
- [Každý typ poznámky](topic:markup-types)

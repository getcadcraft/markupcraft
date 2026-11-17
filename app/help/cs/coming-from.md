---
title: Přechod z jiného softwaru pro poznámky
summary: Jak návyky z desktopového programu pro poznámky k PDF odpovídají MarkupCraftu a jaké rozdíly lidi zaskočí.
keywords: přepnutí, přechod, migrace, známé, desktopové poznámky k PDF, sada nástrojů, seznam poznámek, překryv, relace, profil, klávesové zkratky, rozdíly
from: c8f323e1
---

Pokud revidujete výkresy v Bluebeam Revu (nebo komentujete PDF v jiném desktopovém PDF programu), většina MarkupCraftu vám bude povědomá: oblaky, vynášecí texty, sada nástrojů, seznam poznámek, stavy s odpověďmi, kalibrovaná měření, překryvy listů. Největší rozdíl je v tom, jak se soubory zpracovávají, takže si přečtěte další oddíl, i když zbytek přeskočíte.

## Pět rozdílů, na kterých záleží

1. **Uložit vytvoří nový soubor.** MarkupCraft běží v prohlížeči a nemůže přepsat PDF na vašem disku. {{ui:Uložit}} stáhne "<name> (marked up).pdf" a originál zůstane beze změny. Příště otevřete kopii "(marked up)" a staré kopie uklidíte sami.
2. **PDF se uloží, když uložíte.** Dokud to neuděláte, záložní kopie v tomto prohlížeči uchová vaše poznámky i při pádu nebo zavřené kartě a MarkupCraft ji nabídne příště. Je to pojistka: uložte PDF, abyste revizi zachovali.
3. **Váš profil žije v prohlížeči.** Vaše jméno autora, nastavení nástrojů a sada nástrojů se uchovávají v tomto prohlížeči na tomto počítači. Jiný prohlížeč nebo počítač začíná od nuly a vymazání dat webu je smaže. Exportujte sadu nástrojů jako zálohu. Viz [Co zůstává v tomto prohlížeči](topic:browser-storage).
4. **Zatím žádné sdílené relace.** Neexistuje živá sdílená revize ani cloudový projekt. Revize putuje v PDF: uložíte, pošlete kopii, další člověk odpoví a uloží.
5. **Měřítko je pro každý list, a jen pro každý list.** Uvnitř listu nejsou žádné výřezy a není možnost "použít toto měřítko na všechny stránky". Kalibrujte každý list, který měříte.

## Návyk po návyku

| Jste zvyklí na | V MarkupCraftu |
|---|---|
| Panel náhledů, označení stran | {{ui:Listy}} vlevo. Názvy pocházejí z označení stran, nebo se čtou z razítka; opravíte je pomocí {{ui:Přejmenovat list}}. |
| Otevření několika PDF jako sady | Otevřete je všechny najednou; vytvoří jeden seznam. Soubor sady se neukládá: příště otevřete stejná PDF. |
| Sada nástrojů se sadami nástrojů | Karta {{ui:Nástroje}}: jedna sada na prohlížeč, uložené nástroje se stylem a předmětem. Sdílíte je přes {{ui:Exportovat}} a {{ui:Importovat}} jako soubor JSON. Soubory sad nástrojů z jiných programů nelze importovat. |
| Panel vlastností | Karta {{ui:Vlastnosti}}: stav, předmět, komentář, styl, odpovědi a položka závady na jednom místě. |
| Seznam poznámek se sloupci | Karta {{ui:Poznámky}} s filtry podle listu, autora, stavu a typu. Exportujte CSV nebo BCF. Zatím žádné vlastní sloupce ani souhrn PDF či sešitu. |
| Stav a stav revize | {{ui:Stav}}: Otevřeno, Přijato, Zamítnuto, Dokončeno. Žádné vlastní sady stavů. Ukládají se jako standardní stavy revize. |
| Odpovědi na poznámku | Vlákno "Odpovědi" v {{ui:Vlastnosti}}, se záznamy změn stavu. Odeslanou odpověď nelze upravit. |
| Kalibrace, pak délka, plocha, počet | {{ui:Kalibrovat}}, {{ui:Délka}} ({{key:M}}), {{ui:Plocha}} ({{key:Q}}, udává plochu a obvod), {{ui:Počet}} ({{key:U}}). Zatím žádný úhel, poloměr, objem, délka lomené čáry ani výřezy. |
| Překrývání stránek | Karta {{ui:Porovnat}}: červeně starý, modře nový, zarovnání podle dvou bodů. Žádné automatické "porovnání dokumentů" oblakem. |
| Razítka | {{ui:Razítko}} se šesti vestavěnými razítky a vlastním zněním, podepsané vaším jménem a datem. Zatím žádná obrázková ani podpisová razítka. |
| Sledování závad nebo problémů | Karta {{ui:Seznam závad}}: očíslované položky s přiřazením, termínem a stavem; export CSV. |
| Živá spolupráce | Zatím není k dispozici. Předávejte uložené PDF. |
| Zploštění | Ještě není hotovo. Poznámky zůstávají jako komentáře, které mohou ostatní prohlížeče zobrazit a vytisknout. |
| Vrstvy pro poznámky | Ještě není hotovo. Pro třídění komentářů použijte předměty, autory a filtry seznamu. |
| Odkazy mezi listy | Ještě není hotovo. |
| Mezerník pro posun, kolečko pro zoom | Stejné: podržte {{key:Space}} a táhněte; kolečko přibližuje u kurzoru. Kolečko nikdy neposouvá stránku. |

## Klávesy, které se liší

Mnoho jednopísmenných kláves je takových, jak byste čekali, ale zkontrolujte tyto dřív, než je stisknete:

- {{key:K}} je {{ui:Vynášecí text}} a {{key:Q}} je {{ui:Plocha}}. Pokud jste zvyklí na Q pro vynášecí texty, zde spustí plochu.
- {{key:C}} je obdélníkový {{ui:Oblak}}; {{key:Shift+C}} je {{ui:Volný oblak}}.
- {{key:M}} je {{ui:Délka}}, {{key:U}} je {{ui:Počet}}, {{key:Y}} je {{ui:Mnohočára}}, {{key:G}} je {{ui:Mnohoúhelník}}, {{key:I}} je {{ui:Zvýraznit}}.
- {{key:Mod+D}} duplikuje výběr (místo záložky prohlížeče).
- {{key:Mod+Plus}} a {{key:Mod+Minus}} přibližují list, ne stránku prohlížeče.
- Libovolnou klávesu lze změnit: viz níže.

:::tip
Pokud máte prsty zvyklé na Bluebeam Revu, vyberte styl nabídky {{ui:Revize PDF}} v {{ui:Nastavení}} › {{ui:MarkupCraft}} › {{ui:Nabídky, klávesy a myš}}: lišta nabídek (Soubor, Úpravy, Zobrazení, Dokument, Poznámka, Měření, Okno) nad řadou nástrojů pro revizi, {{key:Q}} pro vynášecí text, {{key:H}} pro zvýrazňovač, {{key:N}} pro mnohoúhelník a měření na {{key:Alt+Shift}} s písmenem. I tam lze změnit libovolnou klávesu. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).
:::

Úplný seznam je v [Klávesnice a myš](topic:keyboard).

## Věci, které fungují jinak, než byste čekali

- **Nástroje zůstávají zapnuté.** Po oblaku kreslíte dál oblaky. {{key:Esc}} jednou zruší výběr, dvakrát se vrátíte k {{ui:Výběr}}.
- **Text a vynášecí texty potřebují text.** Dokončíte-li bez napsání čehokoli, žádná poznámka se nepřidá. Poznámky zůstanou prázdné.
- **Měření potřebuje nejprve měřítko.** {{ui:Délka}} a {{ui:Plocha}} na nezkalibrovaném listu přepnou na {{ui:Kalibrovat}} a po něm se vrátí.
- **Komentáře z jiných programů.** Obdélníky, elipsy, čáry, lomené čáry, mnohoúhelníky, tahy pera, textová pole a lepicí poznámky vytvořené jinde se stanou upravitelnými poznámkami MarkupCraftu a při uložení se přepíšou jeho způsobem (jejich vzhled se může mírně změnit). Textová zvýraznění, razítka z jiných programů a jiné zvláštní druhy zůstávají jen pro čtení: můžete na ně odpovídat, ale neměnit je.
- **Znaky mimo západoevropská písmena** se v uloženém PDF vytisknou jako "?". Viz [Uložení PDF s poznámkami](topic:save-the-marked-up-pdf).
- **Data razítek** používají UTC, takže razítko vytvořené pozdě večer v Americe může ukazovat zítřejší datum.
- **Měření se přenášejí** jako standardní komentáře měření a každý zkalibrovaný list si uchovává své měřítko, takže program, který čte měření v PDF, je obvykle může zobrazit. Přesné chování závisí na tom programu.

## Použití obou

Můžete se vracet tam a zpět. Komentáře vytvořené jinde se otevřou v MarkupCraftu a PDF "(marked up)" se otevře v jiných PDF programech se všemi poznámkami, odpověďmi a stavy viditelnými. Co čte jen MarkupCraft (přiřazený člověk a termín položky závady, stav položky), je v souboru uloženo pro MarkupCraft.

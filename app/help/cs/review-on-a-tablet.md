---
title: Kontrola na iPadu nebo dotykové obrazovce
summary: Přibližujte, posouvejte a kreslete prsty nebo dotykovým perem, co se spouští při zvednutí, co potřebuje klávesnici, a jak si na tabletu udržet práci v bezpečí.
keywords: ipad, tablet, dotyk, dotyková obrazovka, sevření, přiblížení, dva prsty, Apple Pencil, dotykové pero, prst, terén, místo, povrch, gesta, mobil
from: 91eb6438
---

MarkupCraft funguje s dotykem: na iPadu (Safari nebo Chrome), na notebooku s dotykovou obrazovkou, nebo na tabletu s Windows či Androidem s aktuálním prohlížečem. Na šířku tablet zobrazí celé rozložení.

## Gesta

| Gesto | Co dělá |
|---|---|
| Jeden prst | Kreslí aktuálním nástrojem, nebo vybírá nástrojem {{ui:Select}} |
| Dva prsty, roztáhnout nebo sevřít | Přibližuje kolem bodu mezi prsty |
| Dva prsty, posunuté spolu | Posouvá; přiblížit a posunout lze jedním pohybem |
| Druhý prst při kreslení | Zruší to, co začal první prst, a místo toho spustí přibližování |
| Dvojité klepnutí, nebo dotyk a podržení | Dokončí mnohočáru, mnohoúhelník, volný oblak nebo plochu |
| Dotyk a podržení textu, vynášecího textu nebo poznámky nástrojem {{ui:Select}} | Otevře jeho text k úpravě |
| Jeden prst se zapnutým {{ui:Pan}} | Posouvá |

Na dotykové obrazovce jsou tlačítka panelu nástrojů, nabídky, karty a tlačítka dialogů větší, takže se do nich dobře trefíte prstem.

## Co se děje při zvednutí

Aby první prst sevření nikdy nezanechal stopu, některé nástroje působí, když **zvednete** prst, ne když se dotknete:

- {{ui:Count}}: tečka se přidá při zvednutí.
- {{ui:Note}}: poznámka se umístí při zvednutí.
- {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} a {{ui:Area}}: každý bod se přidá při zvednutí.
- {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}} a {{ui:Calibrate}}: když klepnete na začátek a pak na konec, konec se umístí při zvednutí.

Pokud prst před zvednutím sklouzne víc než trochu, nepočítá se to jako klepnutí a nic se nepřidá. Klepejte čistě; k opravě použijte {{ui:Undo}}.

Nástroje, které táhnete ({{ui:Pen}}, {{ui:Highlight}}, {{ui:Cloud}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Callout}}, {{ui:Text}}, {{ui:Stamp}}), začnou, jakmile se dotknete; druhý prst je zruší.

## Výběr prstem

- Klepnutím vyberete poznámku; přetažením ji přesunete; přetažením úchytu změníte velikost. Poté, co se prst dotkne listu, poznámky a úchyty mají větší cíl a úchyty se kreslí větší.
- Přetažením přes prázdný list nakreslíte výběrový rámeček (zleva doprava: plně uvnitř; zprava doleva: dotýkající se).
- V {{ui:Select}} jeden prst **neposouvá**. Použijte dva prsty, nebo zvolte {{ui:Pan}}.

## Věci, které potřebují klávesnici

Bez klávesnice nejsou {{key:Shift}}, {{key:Esc}} ani {{key:Enter}}. Místo nich udělejte toto:

| Akce na klávesnici | Bez klávesnice |
|---|---|
| {{key:Esc}} pro zrušení nebo návrat na {{ui:Select}} | Klepněte na {{ui:Select}} na panelu nástrojů |
| {{key:Shift}} pro čáry v úhlu 45°, čtverce a kružnice | Kreslete opatrně; upravte úchyty |
| {{key:Shift}}-klik pro přidání do výběru | Použijte výběrový rámeček |
| {{key:Shift}}-klik pro odebrání tečky počtu | {{ui:Undo}} hned po chybném klepnutí |
| {{key:Mod+Enter}} pro dokončení psaní | Klepněte mimo textové pole |
| {{key:Enter}} pro dokončení mnohočáry nebo úpravu textu poznámky | Dotyk a podržení, nebo {{ui:Edit on the sheet}} v {{ui:Properties}} |
| {{key:Delete}} | {{ui:Delete}} na panelu nástrojů nebo v {{ui:Properties}} |
| Začátek nové skupiny počtu klávesou {{key:Esc}} | Klepněte na prázdný list nástrojem {{ui:Select}} a pak znovu klepněte na {{ui:Count}} |

Pouzdro s klávesnicí nebo Bluetooth klávesnice vrátí všechny zkratky; na iPadu klávesa ⌘ funguje pro {{key:Mod+Z}} i ostatní.

Tlačítka na dotyk nezobrazují své bubliny nápovědy. Klávesa pro každý nástroj je uvedena v [Klávesnice a myš](topic:keyboard).

## Dotykové pero a Apple Pencil

Dotykové pero (Apple Pencil, Surface Pen a podobná) funguje jako myš: kreslí a vybírá a působí hned při dotyku. Prsty používejte k sevření a posunu. Tlak nemění tloušťku čáry.

## Otevírání a ukládání na iPadu

- {{ui:Open}} zobrazí výběr Files: iCloud Drive, On My iPad a jakoukoli úložnou aplikaci, kterou máte připojenou.
- {{ui:Save}} se zeptá na stažení; kopie skončí v aplikaci Files, ve složce Downloads (nebo ve složce nastavené v nastavení Safari).

## Udržení práce v bezpečí na tabletu

:::warning
iPad Safari vás neupozorní, než opustíte stránku s neuloženou prací, a iPadOS může na pozadí znovu načíst kartu, aby uvolnil paměť. MarkupCraft si v prohlížeči uchovává kopii pro obnovení a nabídne ji, až ji znovu otevřete (viz [Obnovení práce](common:recover)), ale **ukládejte po každém listu nebo po každé obhlídce**: soukromá karta žádnou kopii neuchovává.
:::

- Vaše jméno, nastavení nástrojů a truhla nástrojů se uchovávají v tomto prohlížeči na tomto iPadu, stejně jako v počítači. Viz [Co zůstává v tomto prohlížeči](topic:browser-storage).
- **Před návštěvou stavby bez signálu:** dokud jste ještě online, otevřete MarkupCraft v Safari (nebo Chrome) na iPadu a v pruhu nahoře zvolte {{ui:Save for offline}}. Počkejte, až se objeví "Připraveno offline" (počítá "Ukládání N z M"; čtečka a zapisovač PDF mají asi 6 MB). Na stavbě otevřete stejnou adresu nebo záložku na ni: otevírání, označování a ukládání PDF funguje bez připojení. Pokud se objeví "Offline není k dispozici", jste v soukromé kartě; použijte běžnou. Viz [Práce offline](common:offline).
- Safari odstraní kopii pro offline, kterou jste několik týdnů nepoužili. Před cestou klikněte na "Připraveno offline" a zvolte "Uložit znovu (získat nejnovější verzi)".
- Velmi velké sady výkresů zabírají hodně paměti. Na tabletu otevřete jen listy, které potřebujete pro návštěvu.

## Na telefonu

Funguje, ale obrazovka je malá: části se skládají pod sebe (panel nástrojů, list, stavový řádek, panely, pak seznam listů) a panel nástrojů se posouvá do stran. Telefon používejte k prohlížení a k rychlé poznámce, a tablet nebo počítač k vlastní revizi.

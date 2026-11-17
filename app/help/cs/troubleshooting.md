---
title: Řešení potíží
summary: Zprávy, které MarkupCraft zobrazuje, a co s nimi dělat, plus opravy věcí, které nefungují.
keywords: problém, chyba, nefunguje, nápověda, zpráva, neotevře se, nelze uložit, heslo, chráněno, měření odmítnuto, kalibrace, offline, prázdné, pomalé, ztracené poznámky, otazníky
from: bb650b39
---

Většina problémů je vysvětlena ve stavovém řádku v dolní části obrazovky. Přečtěte si ho nejdřív.

## Otevírání souborů

**"MarkupCraft otevírá soubory PDF. "x" není PDF."**
Vybrali jste nebo přetáhli něco jiného. Otevřou se pouze soubory PDF. Nejprve z vašeho CAD programu exportujte výkresy jako PDF.

**'"name" vyžaduje heslo k otevření. Otevřete nechráněnou kopii.'**
PDF je chráněno heslem. Požádejte odesílatele o nechráněnou kopii, nebo ho otevřete v programu pro PDF, kde heslo znáte, a uložte kopii bez hesla.

**'"name" nelze přečíst jako PDF (…)'**
Soubor je poškozený nebo ve skutečnosti není PDF (neúplné stažení, odříznutá příloha e-mailu). Stáhněte ho znovu. Pokud ho mohou otevřít jiné programy pro PDF, použijte jejich "uložit jako", vytvořte čistou kopii a otevřete tu.

**"Některé soubory se neotevřely"**
Při otevírání několika najednou tento dialog vypíše soubory, které selhaly, a proč. Ostatní jsou otevřené.

**"Čtečku PDF nelze načíst: …"**
Motor PDF nebylo možné stáhnout. Online: znovu načtěte stránku a zkuste to znovu; zkontrolujte, zda firewall nebo blokátor obsahu neblokuje web. Offline: MarkupCraft nebyl uložen pro použití offline v tomto prohlížeči (lišta nahoře neříká "Připraveno offline"). Připojte se k internetu, zvolte {{ui:Uložit pro offline}} a počkejte na "Připraveno offline". Viz [Práce offline](common:offline).

**"Některé anotace se mohou na obrazovce zobrazit dvakrát"** nebo **"Další podrobnosti o anotacích nelze přečíst"**
Komentáře v souboru jsou neobvyklé. Stále se otevřou, pokud to MarkupCraft dokáže; před spoléháním na ně je zkontrolujte. Uložení stále funguje.

**List má špatný název, nebo "strana 3"**
Viz [Jak listy získávají názvy](topic:open-a-plan-set#how-sheets-get-their-names). Naskenované listy nemají text ke čtení; použijte {{ui:Přejmenovat list}}.

**Stejné listy se objeví dvakrát**
Stejný soubor byl otevřen dvakrát. Zvolte {{ui:Zavřít}} (nejprve uložte, pokud je to potřeba) a otevřete sadu znovu.

## Kreslení a výběr

**Když kliknu na list, nic se nestane**
Zkontrolujte, který nástroj je stisknutý na panelu nástrojů, a přečtěte si stavový řádek. U {{ui:Obdélník}}, {{ui:Elipsa}} a {{ui:Oblak}} kliknutí bez tažení nic nenakreslí: přetáhněte. U {{ui:Mnohočára}}, {{ui:Mnohoúhelník}}, {{ui:Volný oblak}} a {{ui:Plocha}} se přidávají body: dokončete dvojklikem nebo {{key:Enter}}.

**"Mnohoúhelník potřebuje alespoň 3 body." (nebo 2 pro mnohočáru)**
Před dokončením klikněte na další body.

**"Nic nebylo napsáno, proto nebyl přidán žádný text."**
Textová pole a popisky se zachovají, jen když mají text. Nakreslete je znovu a napište text, než klepnete jinam.

**"Oba body jsou stejné. Klikněte na dva různé body."**
U čar, šipek, délek a kalibrace musí být oba konce od sebe vzdálené. Přetáhněte, nebo klikněte dvakrát na různá místa.

**Nemohu poznámku přesunout nebo smazat; má šedý přerušovaný rámeček**
Je to komentář jen pro čtení, který přišel se souborem (například zvýraznění textu). MarkupCraft ho ponechává beze změny: můžete na něj jen odpovědět. Stavový řádek říká: "poznámky jen pro čtení jsou zachovány tak, jak jsou v souboru".

**Klávesy píší písmena do pole místo výběru nástrojů**
Kurzor je v textovém poli (odpověď, pole v {{ui:Vlastnosti}}, hledání na listu). Nejprve klikněte na prázdnou část oblasti listu, nebo stiskněte {{key:Esc}}, pokud upravujete text poznámky.

**Space neposouvá, šipky nedělají nic**
Právě jste klikli na tlačítko panelu nástrojů, takže má stále klávesnici. Místo toho táhněte prostředním tlačítkem myši, nebo jednou klikněte na list s zapnutým {{ui:Výběr}} a zkuste to znovu. Viz také [Klávesnice a myš](topic:keyboard#when-a-key-does-nothing).

**Stažení prstů na dotykové obrazovce zanechalo stopu**
Nástroj tažení (pero, oblak, obdélník) se spustil před příchodem druhého prstu a skončil dřív, než byl zrušen. Zvolte {{ui:Zpět}}. Když chcete přiblížit, položte oba prsty současně.

## Měření

**"Nejprve kalibrujte tento list: vyberte dva body se známou vzdáleností, nebo zvolte jeho měřítko. Potom měřte."**
Každý list potřebuje vlastní měřítko, než použijete {{ui:Délka}} nebo {{ui:Plocha}}. MarkupCraft přepnul na {{ui:Kalibrovat}}: klikněte na dva konce známého rozměru a napište jeho délku, nebo klikněte na tlačítko měřítka ve stavovém řádku a vyberte měřítko. Viz [Kalibrace listu a měření](topic:calibrate-and-measure).

**'Tomu MarkupCraft nerozumí jako délce.'**
Napište ji jako `24'-0"`, `12' 6 1/2"`, `7.2 m` nebo `900 mm`. Viz [Jednotky, délky a měřítka](topic:units-and-scales).

**Měření jsou trochu mimo, nebo výrazně mimo**
- Předvolené měřítko na PDF, které není v plné velikosti, měří špatně. Místo toho kalibrujte podle dlouhého známého rozměru.
- Oddělovač tisíců byl přečten jako desetinná čárka: `1,200 mm` znamená 1.2 mm. Napište `1200 mm`.
- Při klikání na konce přibližte.
- Výkres nemusí být v měřítku (NTS).

**"Nejprve vyberte skupinu počtu a potom Shift+klikem odeberte značku."**
Zvolte {{ui:Výběr}}, klikněte na skupinu počtu, pak znovu zvolte {{ui:Počet}} a klikněte na tečku se {{key:Shift}}.

## Ukládání

**"Toto PDF je chráněno (šifrováno), takže kopii s poznámkami nelze zapsat."**
Soubor zakazuje změny. Požádejte o nechráněnou kopii. Mezitím můžete stále exportovat seznam poznámek jako CSV nebo BCF.

**"Zapisovač PDF nelze načíst: …"**
Obvykle jste offline a aplikace nebyla uložena pro použití offline (v horní liště není "Připraveno offline"). Vaše poznámky jsou stále na kartě: nechte ji otevřenou, připojte se k internetu a znovu zvolte {{ui:Uložit}}. Potom zvolte {{ui:Uložit pro offline}}, aby příště fungovala offline; uložená kopie obsahuje zapisovač PDF.

**"Soubor <file> nelze uložit."**
Okno ukáže důvod. Vaše poznámky jsou stále na kartě. Zkuste to znovu; pokud se to opakuje, exportujte CSV, aby se komentáře neztratily, a nahlaste zprávu.

**Zvolil jsem Uložit, ale dorazil jen jeden soubor**
Prohlížeč zablokoval další stahování. Hledejte oznámení v adresním řádku a povolte tomuto webu stahovat více souborů, pak uložte znovu.

**Uložený soubor nemohu najít**
Šel do složky stahování vašeho prohlížeče. Otevřete seznam stahování prohlížeče (v Chrome a Edge {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; ve Firefox a Safari tlačítko stahování na panelu nástrojů), abyste zjistili, kam. Viz [Prohlížeče a počítače](common:browsers).

**Některý text se v jiných prohlížečích PDF zobrazuje jako "?"**
Znaky mimo západoevropskou sadu se v kopii tisknou jako "?". Hlášení o uložení je počítá. Viz [Uložení PDF s poznámkami](topic:save-the-marked-up-pdf).

**Razítko ukazuje zítřejší (nebo včerejší) datum**
Data razítek jsou v UTC. Viz [Razítka a lepicí poznámky](topic:stamps-and-notes).

## Práce offline

**Tlačítko offline říká "Nelze uložit"**
Některé soubory aplikace se nestáhly. Zkontrolujte připojení a klikněte na tlačítko znovu; počítá "Ukládání N z M", dokud nebude "Připraveno offline".

**Tlačítko offline říká "Offline není k dispozici"**
Toto okno prohlížeče nemůže uchovat kopii offline: soukromé okno nebo počítač, jehož zásady to blokují. Otevřete MarkupCraft v normálním okně a zkuste to znovu.

**Offline je aplikace starší verze**
Kopie offline je verze, kterou jste uložili. Když jste online, klikněte na "Připraveno offline" a zvolte "Uložit znovu (získat nejnovější verzi)". Chcete-li uvolnit místo, zvolte "Odebrat kopii pro offline". Viz [Práce offline](common:offline).

**Nápověda se neotevře**
Stiskněte {{key:F1}} (na Macu s **fn**), nebo zvolte {{ui:Nápověda}} v horní liště. Funguje i offline.

## Ztracené věci

**Moje poznámky zmizely po zavření nebo znovunačtení karty**
Znovu otevřete MarkupCraft ve stejném prohlížeči: nabídne neuloženou práci zpět s dotazem "Obnovit práci?". Zvolte {{ui:Obnovit}} a uložte PDF. Kopie se uchovávají až 30 dní; soukromé okno nebo vymazání dat webu nezanechá žádnou. Viz [Obnovení práce](common:recover).

**Moje jméno, nastavení nástrojů nebo truhla s nástroji zmizely**
Jsou uloženy pouze v tomto prohlížeči a byly smazány (vymazána data webu, soukromé okno, jiný prohlížeč nebo počítač, nebo úklid Safari u webů nenavštívených delší dobu). Nastavte jméno znovu a importujte exportovanou truhlu. Viz [Co zůstává v tomto prohlížeči](topic:browser-storage).

**"Truhlu s nástroji nelze v tomto prohlížeči uchovat (ukládání je vypnuté nebo plné). Exportujte ji, aby se uchovala."**
Prohlížeč odmítá ukládat data pro tento web (privátní režim, úložiště blokované nastavením nebo zásadami, nebo plné). Po změně truhlu exportujte a příště ji importujte.

## Zobrazení a rychlost

**List na chvíli vypadá rozmazaně**
MarkupCraft při zoomu nebo posouvání ukazuje rychlé, hrubé vykreslení a po zastavení ho chvíli nato překreslí ostře.

**Při velké sadě je všechno pomalé**
Zavřete jiné náročné karty, otevřete méně souborů najednou a vyhněte se maximálnímu přiblížení na obrovských listech. Viz [Práce s více soubory najednou](topic:several-files#big-sets).

**List je tmavý se světlými čárami**
Jste v motivu {{ui:Model}}. Zvolte {{ui:Papír}} v horní liště, aby byly tmavé čáry na bílém. Vaše poznámky ani uložené PDF tím nejsou ovlivněny.

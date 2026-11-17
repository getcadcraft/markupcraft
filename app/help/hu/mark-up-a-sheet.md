---
title: Rajzlap jelölése
summary: Rajzoljon revíziófelhőket, kiemeléseket, szövegdobozokat, nyilakat, alakzatokat, tollvonásokat és kiemeléseket, és állítsa be a színüket és a vonalaikat előtte vagy utána.
keywords: jelölés, piros jelölés, felhő, revíziófelhő, kiemelés, vezetővonal, szövegdoboz, nyíl, vonal, téglalap, ellipszis, kör, polivonal, sokszög, toll, szabadkézi, tinta, kiemelő, szín, vonalvastagság
from: 9d6de0ac
---

Minden eszköz ugyanúgy működik: válassza ki, rajzoljon a rajzlapra, és az új jelölés kijelölve marad, így látja a {{ui:Tulajdonságok}} panelben. Az eszköz a következő rajzolásnál is aktív marad. Az állapotsor mindig megmondja, mire számít az eszköz legközelebb.

:::touch
Érintőképernyőn egy ujjal rajzoljon. Egy második ujj megszakítja azt, amit az első elkezdett, és ehelyett csippentéssel vagy eltolással mozog, így nagyítás közben soha nem hagy véletlenül nyomot. Részletek: [Átnézés iPaden vagy érintőképernyőn](topic:review-on-a-tablet).
:::

## Revíziófelhők

**Dobozfelhő:** válassza a {{ui:Felhő}} ({{key:C}}) eszközt, és húzzon egy dobozt. A {{key:Shift}} lenyomva tartásával négyzetes lesz.

**Szabad felhő** szabálytalan alak körül:

1. Válassza a {{ui:Szabad felhő}} ({{key:Shift+C}}) eszközt.
2. Kattintson a terület minden sarkára.
3. Fejezze be dupla kattintással, az {{key:Enter}} billentyűvel vagy jobb kattintással. Érintéskor dupla koppintással.

Pontok kattintása közben a {{key:Backspace}} eltávolítja az utolsó pontot, az {{key:Esc}} pedig az egész alakzatot elveti. A {{key:Shift}} lenyomva tartásával a következő oldal 45° többszöröse lesz. A szabad felhőhöz legalább három pont kell.

A hullámok mindig kifelé domborodnak, méretük pedig a vonalvastagságot követi: a vastagabb vonal nagyobb ívet ad.

## Kiemelések

A kiemelés olyan szövegdoboz, amelynek vezetővonala valamire mutat.

1. Válassza a {{ui:Kiemelés}} ({{key:K}}) eszközt.
2. Nyomja meg a pontot, amelyet ki szeretne emelni, és húzza oda, ahová a szöveg kerüljön. Engedje el.
   Ha húzás nélkül csak kattint, a doboz a ponttól fel és jobbra kerül.
3. Írja be a szöveget. A doboz a sorok törésével lefelé nő.
4. Kattintson a doboz mellé, vagy a befejezéshez nyomja meg a {{key:Mod+Enter}} billentyűt. Az {{key:Esc}} eldobja a kiemelést.

Ha szöveg beírása nélkül fejezi be, nem kerül hozzáadásra kiemelés („Nincs beírt szöveg, ezért nem lett kiemelés hozzáadva.”).

Rajz után jelölje ki, hogy a dobozt mozgassa, a vezetővonal csúcsát vagy töréspontját (a két rombusz alakú fogantyút) húzza, vagy átméretezze a dobozt.

## Szövegdobozok

1. Válassza a {{ui:Szöveg}} ({{key:T}}) eszközt.
2. Kattintson oda, ahol a szöveg kezdődik (ésszerű szélességű doboz lesz), vagy húzzon olyan méretű dobozt, amilyet szeretne.
3. Írjon, majd kattintson kívülre, vagy nyomja meg a {{key:Mod+Enter}} billentyűt.

A szöveg alapértelmezés szerint nem kap keretet. Kerethez emelje a {{ui:Vonalvastagság}} értékét a {{ui:Tulajdonságok}} panelben. Háttérhez jelölje be a {{ui:Kitöltés}} lehetőséget.

A szöveg később így módosítható: a {{ui:Kijelölés}} bekapcsolt állapotában kattintson duplán a szövegre, vagy jelölje ki és nyomja meg az {{key:Enter}} billentyűt, vagy válassza a {{ui:Szerkesztés a rajzlapon}} lehetőséget a {{ui:Tulajdonságok}} panelben. A szöveget a {{ui:Tulajdonságok}} panel {{ui:Szöveg}} mezőjében is szerkesztheti.

## Nyilak és vonalak

1. Válassza a {{ui:Nyíl}} ({{key:A}}) vagy a {{ui:Vonal}} ({{key:L}}) eszközt.
2. Húzzon a kezdőponttól a végpontig. Vagy kattintson a kezdőpontra, engedje el, majd kattintson a végpontra.
3. A {{key:Shift}} lenyomva tartásával 45° többszöröse marad.

A nyílhegy ott van, ahol befejezte.

## Téglalapok, ellipszisek, polivonalak és sokszögek

- {{ui:Téglalap}} ({{key:R}}) és {{ui:Ellipszis}} ({{key:E}}): húzzon egy dobozt. A {{key:Shift}} négyzetet vagy kört csinál. A húzás nélküli kattintás nem rajzol semmit, és az állapotsor húzásra szólít fel.
- {{ui:Polivonal}} ({{key:Y}}) és {{ui:Sokszög}} ({{key:G}}): kattintson pontokra; a befejezés dupla kattintással, az {{key:Enter}} billentyűvel vagy jobb kattintással történik (érintéskor dupla koppintással). A {{key:Backspace}} eltávolítja az utolsó pontot. A sokszög magától záródik, és három pont kell hozzá; a polivonalhoz kettő.

## Toll és kiemelő

- {{ui:Toll}} ({{key:P}}): húzzon szabadkézi rajzoláshoz. A vonal az elengedéskor kissé simul.
- {{ui:Kiemelő}} ({{key:I}}): ugyanaz, de széles, áttetsző sárga vonallal, amely a rajz alatta lévő részét színezi, nem takarja el.
- A rajzolás közben tartsa lenyomva a {{key:Shift}} billentyűt, hogy onnan, ahol elkezdte, egyetlen egyenes vonal legyen.

A kiemelő szabadkézi vonal. Nem illeszkedik a PDF szövegéhez.

## Szín, vonal és kitöltés

Kétféleképpen:

- **Rajzolás előtt:** válassza ki az eszközt. Ha nincs kijelölés, a {{ui:Tulajdonságok}} panel az „<eszköz> eszköz” beállításokat mutatja: {{ui:Szín}}, {{ui:Vonalvastagság}} (pontban), zárt alakzatoknál {{ui:Kitöltés}} és {{ui:Kitöltés átlátszatlansága}}, {{ui:Átlátszatlanság}}, szövegnél pedig {{ui:Szövegméret}}. Az adott fajta minden új jelölése ezeket használja, a MarkupCraft pedig ezeket emlékezi ebben a böngészőben.
- **Rajzolás után:** jelöljön ki egy vagy több jelölést, és a „Stílus” alatt módosítsa ugyanezeket a vezérlőket. Több kijelölt jelölés esetén a módosítás egyetlen lépésben mindegyikre vonatkozik.

Az alapértelmezések: piros jelölések, sárga kiemelő, kék mérések, narancssárga darabszámok, a bélyegzők pedig a jelentésük szerint színezve.

A napi használatban újra felhasznált mentett megjelenések az eszközládába tartoznak: lásd [Az eszközláda](topic:tool-chest).

## Tárgy és megjegyzés

Minden jelölésnek van {{ui:Tárgy}} (rövid címke, például „Felhő” vagy „RFI”, amely a jelölések listájában és más PDF-megtekintőkben látszik) és {{ui:Megjegyzés}} (hosszabb jegyzet). Ezeket a {{ui:Tulajdonságok}} panelben töltse ki. Egy jelölésről folytatott beszélgetéshez használjon válaszokat: lásd [Állapotok és válaszok](topic:statuses-and-replies).

## Tovább

- [Kijelölés, mozgatás és jelölések módosítása](topic:select-and-edit)
- [Bélyegzők és megjegyzések](topic:stamps-and-notes)
- [Minden jelöléstípus](topic:markup-types)

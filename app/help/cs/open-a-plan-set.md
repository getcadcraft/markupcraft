---
title: Otevření sady výkresů a přechod mezi listy
summary: Otevřete jedno PDF nebo více, nebo začněte prázdnými stranami, najděte listy podle čísla nebo názvu, přibližujte a posouvejte a přejmenujte list, když soubor dostal název špatně.
keywords: otevřít, nový, prázdná stránka, prázdný list, náčrt, mřížka, bez názvu, sada výkresů, listy, strany, náhledy, štítky stran, číslo listu, razítko, přejmenovat, navigace, přiblížení, posun, přizpůsobit, hledat listy
from: 1e7f4d50
---

## Otevření sady

1. Zvolte {{ui:Open}} na panelu nástrojů, nebo stiskněte {{key:Mod+O}}.
2. V dialogu výběru souborů vyberte všechna PDF sady ({{pick:mac=podržte ⌘ a klikněte na každý soubor|windows linux=podržte Ctrl a klikněte na každý soubor}}, nebo vyberte rozsah pomocí Shift), a potvrďte.
   Nebo přetáhněte soubory z {{pick:mac=Finder|windows=File Explorer|linux=vašeho správce souborů}} na oblast listu. Při přetahování se objeví "Pusťte PDF pro otevření".
3. Počkejte, dokud stavový řádek ukazuje "Otevírání <file>…". U velkých souborů se počítá: "(10 z 60 listů)".

Výsledek: seznam {{ui:Sheets}} ukazuje každou stranu každého souboru v pořadí, v jakém jste je otevřeli, a stavový řádek hlásí něco jako "Otevřeno 3 soubory (42 listů v sadě)." Pokud soubory už obsahovaly komentáře, přidá se, kolik jich bylo načteno.

Další soubory do sady přidáte později stejným způsobem. Připojí se na konec seznamu.

## Začátek s prázdnými stranami

Chcete-li kreslit náčrty nebo si dělat poznámky bez výkresu, vytvořte prázdné strany místo otevření PDF:

1. Zvolte {{ui:New}} na panelu nástrojů, nebo {{ui:Start with a blank page}} na úvodní obrazovce, nebo stiskněte {{key:Mod+N}} tam, kde to váš prohlížeč dovolí (desktopová aplikace a Studio to umožňují vždy).
2. Vyberte {{ui:Paper size}}: Letter, Tabloid nebo ANSI B, ARCH D, ARCH E, A4, A3 nebo A1, a {{ui:Portrait}} nebo {{ui:Landscape}}.
3. Vyberte {{ui:Grid}}: {{ui:None}}, {{ui:Dots}} nebo {{ui:Squares}}. Mřížka je po 1/4 in s tlustší čárou každý palec na palcovém papíru a po 5 mm s tlustší čárou každých 10 mm na metrickém papíru. Je vytištěna na stránce.
4. Zadejte, kolik {{ui:Pages}} chcete (1 až 20), a zvolte {{ui:Create}}.

Výsledek: nové PDF pojmenované "Untitled-1.pdf" (pak "Untitled-2.pdf" a tak dále) se otevře jako každý jiný soubor, vytvořený zde na tomto počítači. Funguje s ním každý nástroj a {{ui:Save}} stáhne "Untitled-1 (marked up).pdf". MarkupCraft si vaše volby zapamatuje pro příště.

Strany nemají měřítko: stavový řádek říká "Bez kalibrace". Mřížka není měřítko. Chcete-li měřit, nejprve list zkalibrujte nebo zvolte měřítko; viz [Kalibrace a měření](topic:calibrate-and-measure).

Chcete-li přidat stranu do prázdné sady, otevřete některý její list a pod seznamem {{ui:Sheets}} zvolte {{ui:Add a blank page}}. Nová strana má stejný formát a mřížku a přidá se na konec. Jako každou změnu stran ji nelze vzít zpět; viz [Tisk a změna stran](topic:pages-and-printing).

## Jak listy dostávají názvy

MarkupCraft pojmenuje každý list ve tvaru "<sheet number> — <title>", například "A-101 — Půdorys", podle prvního z těchto zdrojů, který najde:

1. Název, který jste zadali pomocí {{ui:Rename sheet}} (níže).
2. Štítky stran z PDF, pokud je nastavil autor PDF (například "A-101").
3. Razítko: MarkupCraft přečte text strany a hledá něco, co vypadá jako číslo listu (A-101, A1.01, M-201A, KA1-1). Přednostně prohledá pravý dolní roh, pravý pruh a spodní pás a jako název vezme nejdelší text v jeho blízkosti.
4. Jinak název souboru a číslo strany: "Plány — strana 3".

Chcete-li zjistit, který zdroj byl použit, stiskněte {{key:Esc}}, dokud nic není vybráno a je zapnutý nástroj {{ui:Select}}, a pak se podívejte do {{ui:Properties}}: "Načteno z" uvádí "Štítek stránky", "Razítko", "Název souboru" nebo "Zadáno ručně".

:::note
Naskenované listy a PDF, jejichž nápisy byly exportovány jako čáry, nemají text ke čtení. Jsou pojmenovány podle souboru a strany, dokud je nepřejmenujete. MarkupCraft zatím nedokáže číst text z obrázků.
:::

## Přecházení mezi listy

- Klikněte na list v {{ui:Sheets}}.
- Stiskněte {{key:PageDown}} pro další list a {{key:PageUp}} pro předchozí, nebo použijte šipky v pruhu pod listem.
- Napište do pole {{ui:Search sheets}}: část čísla ("A-2"), slovo z názvu ("střecha") nebo název souboru. Seznam se zužuje, jak píšete ("4 z 42"). Stiskněte {{key:Enter}} a otevře se první nalezený list. Vymažte pole a znovu uvidíte všechny listy.

Každý list si zachovává vlastní přiblížení a polohu, dokud sadu nezavřete.

## Přiblížení a posun

:::mouse
- **Přiblížení:** otočte kolečkem nad listem. Přibližuje se kolem kurzoru. Nebo stiskněte {{key:Plus}} a {{key:Minus}} (také s {{key:Mod}}), nebo použijte tlačítka přiblížení. Přesné procento zadejte do pole přiblížení.
- **Přizpůsobení:** {{ui:Fit page}} ({{key:Mod+0}}) zobrazí celý list; {{ui:Fit width}} ({{key:Mod+9}}) vyplní šířku.
- **Posun:** táhněte prostředním tlačítkem (kolečkem), nebo pravým tlačítkem, nebo podržte {{key:Space}} a táhněte, nebo zvolte {{ui:Pan}} ({{key:H}}) a táhněte. Když nic není vybráno, posouvají list i šipky.
:::

:::mac mouse
Na trackpadu Mac přibližuje posun dvěma prsty (list neposouvá). Pro posun podržte {{key:Space}} a táhněte jedním prstem, nebo přepněte na {{ui:Pan}} klávesou {{key:H}}. Gesto sevření prstů přibližuje v Chrome, Edge a Firefoxu.
:::

:::touch
- **Přiblížení a posun:** položte dva prsty na list. Roztáhněte je nebo sevřete a přiblížíte kolem bodu mezi nimi; když je posunete společně, posunete list. Obojí probíhá současně.
- **Posun jedním prstem:** nejprve zvolte {{ui:Pan}}. S jakýmkoli jiným nástrojem jedním prstem kreslíte nebo vybíráte.
- {{ui:Fit page}} a {{ui:Fit width}} jsou v pruhu pod listem.
:::

Můžete oddálit daleko za celý list a přiblížit až na 6400 %. List se po chvíli od zastavení pohybu překreslí ostře.

## Záložky

{{ui:Bookmarks}} nahoře v panelu {{ui:Sheets}} zobrazuje záložky (osnovu) PDF, do kterého otevřený list patří. Zvolte jednu a přejdete na její stranu. Tužka přejmenuje záložku a křížek ji odstraní. {{ui:Build from sheets}} vytvoří jednu záložku pro každý list, pojmenovanou tak, jak ji ukazuje seznam listů (číslo listu a název), a {{ui:Add for this sheet}} přidá záložku pro list, na kterém jste. Změny jsou součástí neuložené práce na souboru: {{ui:Save}} je zapíše do kopie, kde je uvidí každý prohlížeč PDF.

## Otočení zobrazení

Dvě tlačítka otočení vpravo v pruhu pod listem otočí zobrazení o čtvrt otáčky na kteroukoli stranu, pro list nakreslený na šířku. Otáčí se jen zobrazení: PDF i jeho poznámky zůstávají beze změny a další list se otevře tak, jak je nastaven jeho PDF (každý list si během otevřené sady pamatuje vlastní otočení). Text, který přidáte na otočeném zobrazení, se čte vzpřímeně tak, jak ho vidíte. Chcete-li otočit samotnou stranu v uloženém PDF, použijte {{ui:Pages}} a pak {{ui:Rotate page clockwise}}; viz [Tisk a změna stran](topic:pages-and-printing).

## Přejmenování listu

Když je název listu špatný nebo chybí:

1. Zobrazte list.
2. Stiskněte {{key:Esc}}, dokud nic není vybráno a je zapnutý nástroj {{ui:Select}}. {{ui:Properties}} teď ukáže list.
3. Zvolte {{ui:Rename sheet}}.
4. Zadejte {{ui:Sheet number}} a {{ui:Title}}, a potom zvolte {{ui:Save}}.

Výsledek: seznam listů, pruh pod listem i seznam poznámek používají nový název a "Načteno z" uvádí "Zadáno ručně". Přejmenování lze vzít zpět klávesou {{key:Mod+Z}}.

Chcete-li se vrátit k tomu, co říká soubor, znovu otevřete {{ui:Rename sheet}}, vymažte obě pole a zvolte {{ui:Save}}.

Při uložení se zadané číslo listu stane štítkem stránky v PDF, takže i jiné prohlížeče PDF zobrazí "A-101" ve svém políčku stránky. Pokud některé stránce souboru přiřadíte číslo, dostane v kopii štítek každá stránka tohoto souboru (její zadané číslo, jinak její původní štítek, jinak číslo strany). Zadaný název si MarkupCraft ponechá, ale jiné prohlížeče ho nezobrazují.

## Předání PDF do TakeoffCraft nebo jeho přivedení sem

Když je TakeoffCraft otevřený na stejném místě (laboratoř, Try nebo online aplikace), má pruh pod listem tlačítko {{ui:Open in TakeoffCraft}}. Otevře PDF listu v TakeoffCraft na nové kartě, tak jak bylo otevřeno zde, abyste na něm mohli měřit množství. Vaše poznámky zůstávají zde; uložte je obvyklým způsobem.

Tlačítko {{ui:MarkupCraft}} v TakeoffCraft dělá totéž opačným směrem: PDF se otevře zde, jako byste zvolili {{ui:Open}}. Pokud prohlížeč novou kartu zablokuje, povolte vyskakovací okna pro tento web a tlačítko zvolte znovu.

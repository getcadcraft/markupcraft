---
title: Co je nového ve verzi 0.9
summary: Poznámky a odkládací plocha, které se nikdy netisknou, šifrované soukromé poznámky a čistá kopie pro klienta, dávkové odkazy pro celou sadu výkresů, nástroj Oblouk s deseti metodami, sledování jiného revidujícího v Live a oprava smazaných poznámek, které zůstávaly v uloženém PDF.
keywords: co je nového, 0.9, poznámky k vydání, seznam změn, odkládací plocha, soukromé poznámky, heslo, šifrované, skrýt poznámky, zobrazit poznámky, čistá kopie, snímek, dávkové odkazy, výnosky listů, propojit listy, razítko, číslo listu, dodatek, přečíslování, odkaz na PDF, oblouk, metody oblouku, oblouk třemi body, poloměr, sledovat, sledovat mě, live, zobrazení třídy, seznam lidí, smazaná poznámka, bubliny nápovědy, názvy karet, změny, 0.8, 0.8.1, verze, nové funkce, úkol, úkoly, přiřazeno, den termínu, po termínu, zkontrolovat nyní, co se změnilo, revize, porovnat, hlasová poznámka, rozhodnutí, červené opravy, soubor odpovědí, kreslíř, asistent, mcp, problémy, jazyky, vstupní zařízení, touchpad, řádky panelu nástrojů, mřížka vlastností, aktualizace
from: dbdd7ed4
---

Toto se změnilo v MarkupCraftu 0.9 oproti 0.8.1. Hlavní myšlenka je, že vaše pracovní poznámky zůstanou mimo stránku, kterou dostane klient, a celou sadu výkresů lze propojit v jednom průchodu.

## Novinky

### Poznámky, odkládací plocha a soukromé poznámky

- **Odkládací plocha.** Oblast kolem každého listu je jako pracovní stůl: cokoli nakreslené, napsané nebo vložené vedle listu je poznámka a nikdy se netiskne. Zvolte {{ui:Zobrazit odkládací plochu}} pro oddálení a získání místa, nebo {{ui:Snímek na odkládací plochu}}, přetáhněte rámeček a pak {{ui:Na odkládací plochu}}, čímž vložíte obrázek části výkresu vedle listu. Snímek je obrázek a nemění se, když se mění list. Viz [Poznámky, odkládací plocha a soukromé poznámky](topic:notes-and-pasteboard).
- **Zobrazení a skrytí poznámek.** Jakákoli poznámka může být poznámkou: nastavte {{ui:Nové značky jsou}} na kartě {{ui:Poznámky}}, nebo {{ui:Tato značka je}} v {{ui:Vlastnosti}}. {{key:Shift+H}} nebo přepínač {{ui:Poznámky}} pod listem skryje a zobrazí všechny poznámky najednou. Poznámky se vynechávají při tisku, zploštělých kopiích, seznamech a exportech a ostatní čtečky PDF je nezobrazují. Vaše uložené PDF si je zachová pro příště, až ho znovu otevřete v MarkupCraftu.
- **Soukromé poznámky.** Zvolte {{ui:Nastavit heslo}}, pak udělejte poznámku {{ui:Soukromá poznámka}}. Je v souboru zašifrována heslem o délce alespoň 10 znaků a neexistuje obnovení: bez hesla ji nikdo neotevře, ani my. {{ui:Zamknout}} soukromé poznámky odsune; {{ui:Zůstat odemčeno na tomto zařízení}} je ve výchozím nastavení vypnuto.
- **Uložení čisté kopie.** {{ui:Uložit čistou kopii}} odstraní všechny poznámky, soukromé poznámky a vše na odkládací ploše. Použijte ji u souboru, který jde klientovi.

### Propojení celé sady

- **Dávkové odkazy.** Zvolte {{ui:Strany}} › {{ui:Dávkové odkazy…}}, nebo {{ui:Propojit odkazy na listy…}} pod {{ui:Najít text}} v panelu {{ui:Listy}}. Krok 1 vypíše číslo a název každého listu přečtené z jeho razítka; opravte ty, které jsou špatně. Krok 2 vypíše nalezené výnosky, například `3/A-501` nebo `DETAIL 2 ON A-501`. {{ui:Bude propojeno}} ukáže list a pohled pro každý, {{ui:Nepropojeno}} ukáže čísla, která žádný otevřený list nemá, a {{ui:Vytvořit odkazy}} je vytvoří všechny v jednom kroku zpět. Spusťte to znovu po dodatku nebo přečíslování; odkazy, které jste vytvořili ručně, se nikdy nemění. Odkaz s pohledem se uloží jako odkaz PDF, takže detail otevřou i ostatní čtečky. Viz [Odkazy listů](topic:sheet-links).

### Kreslení

- **Oblouk, deset metod.** Nástroj {{ui:Oblouk}} ({{key:O}}) má nyní nad stránkou okno {{ui:Metoda oblouku}} s deseti způsoby kreslení oblouku; úhel, délku, poloměr a směr lze zadat kliknutím nebo psaním. Viz [Nakreslete oblouk deseti způsoby](topic:draw-an-arc).

### Společná práce

- **Sledování revidujícího.** V relaci Live zvolte u jména osoby {{ui:Sledovat}} a váš pohled se pohne s jejím; když sami posunete nebo přiblížíte, sledování se zastaví. Hostitel může zvolit {{ui:Požádat všechny, aby mě sledovali}}. Seznam lidí ukazuje barvu každého člověka, jeho jméno, list, na kterém je, a čas jeho poslední úpravy. Viz [Sledování jiného revidujícího v relaci Live](topic:follow-in-live).

## Ve všech aplikacích

- Bubliny nápovědy jsou tvořeny prvky Bootstrap, úvodní tip lze zavřít, lišty karet se posouvají, když přetečou, a názvy karet prohlížeče mají tvar `<document> — MarkupCraft | CadCraft`.
- Panel s několika sekcemi otevře jednu a ostatní zavře (zámek vedle šipky ponechá jednu otevřenou); přepínač v Nastavení to vypne.
- Každá aplikace se spustí s výchozí sadou objektů knihovny.
- Jednotky hmotnosti a teploty jsou k dispozici v nastavení jednotek.

## Opraveno

- **Odstraněné poznámky už nezůstávají čitelné uvnitř uloženého PDF.** Dříve uložení odebralo smazanou nebo přepsanou anotaci ze stránky, ale objekt i s jejím textem v souboru zůstal. Nyní uložení tyto objekty smaže. Soubory uložené dřívějšími sestaveními je obsahují, dokud je znovu neuložíte.

## Upřímně o omezeních

- Dávkové odkazy jsme zkoušeli na vlastních testovacích sadách. Skutečné sady kreslí bubliny mnoha způsoby, takže u sady klienta mohou některé pohledy chybět. Naskenované listy nejprve potřebují {{ui:Přečíst text (OCR)…}}.
- Poznámky, soukromé poznámky a odkládací plocha byly testovány v bezhlavém prohlížeči a na vlastních souborech, ne na velké skutečné vektorové sadě a ne ve skutečné relaci Live pro dva lidi. Změna hesla zatím není hotová. Sestavení starší než 0.9 poznámky nezobrazují.
- Zobrazení třídy je seznam lidí; nebylo zkoušeno se skutečným učitelem a žáky.
- Jazyky jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- Instalátory pro Windows nejsou podepsány kódem (Více informací, pak Přesto spustit); obraz disku pro macOS není notarizován (pravé tlačítko, pak Otevřít).

## Dříve: 0.8 a 0.8.1

Toto se změnilo v MarkupCraftu 0.8 a 0.8.1 oproti 0.7. Hlavní novinkou je, že poznámka může být úkolem, který udělá někdo nebo váš vlastní asistent, a který se sám uzavře, když se výkres skutečně změní.

### Novinky

**Poznámky, které něco dělají**

- **Udělejte z poznámky úkol.** Vyberte jednu nebo více poznámek, otevřete kartu {{ui:Úkoly}} a zvolte {{ui:Udělat z vybraného úkol}}. Úkol má název, osobu nebo vašeho připojeného asistenta, který jej provede, volitelný den termínu a stav, a zachovává si své místo na listu i své vlákno. Viz [Udělejte z poznámky úkol](topic:markups-that-act).
- **Úkoly, které se uzavírají samy.** Úkol může sledovat výkres uvnitř své poznámky. Otevřete novější revizi listu a zvolte {{ui:Zkontrolovat nyní}}: pokud se čáry v dané oblasti změnily o víc než o vlas, úkol se označí jako Hotovo, jeho poznámka se stane Dokončeno a poznámka ve vlákně napíše, co se změnilo. Nové datové razítko nebo čáry posunuté o méně než 1.5 bodu se nepočítají. Úkol může místo toho sledovat prvek modelu: váš asistent hlásí prvek nástrojem `tasks_check` a pozdější hlášení, které se liší, nebo smazaný prvek, úkol uzavře. Jeden krok zpět jej znovu otevře.
- **Najděte práci.** Filtrujte seznam {{ui:Úkoly}} podle stavu a podle toho, pro koho je, včetně {{ui:Po termínu}}; zvolte {{ui:Přiřazeno}}, pak {{ui:Asistent}}, a uvidíte, co čeká na vašeho asistenta. Úkol po dni termínu se zobrazí jako varování v panelu Problémy. {{ui:CSV}} exportuje seznam. Úkoly se ukládají do PDF spolu s poznámkou a v Live putují stejně jako ostatní vlastnosti poznámek.

**Co se změnilo, jako prostý seznam**

- **Vypište změny.** Otevřete kartu {{ui:Porovnat}}, pak {{ui:Porovnat celou sadu}}, vyberte starší a novější soubor a zvolte {{ui:Vypsat změny}}. Seznam začíná počtem a pak pokrývá každý změněný list, od největší změny: kde na listu, jak velká (v reálných jednotkách i v palcích na papíře u kalibrovaného listu), zda byly čáry přidány nebo odebrány, kolik poznámek tam leží a která slova se objevila nebo zmizela. {{ui:Kopírovat seznam}} ho vloží do schránky a {{ui:CSV}} zapíše jeden řádek na každou změnu. Viz [Seznam změn mezi revizemi](topic:what-changed-in-words).

**Hlasové poznámky a rozhodnutí**

- **Hlasové poznámky.** Na kartě {{ui:Poznámky}} zvolte {{ui:Nahrát hlasovou poznámku}}, pak {{ui:Zastavit nahrávání}}; nahrávky se samy zastaví po dvou minutách. Poznámka se připne do středu listu, přetáhnete ji tam, kam patří, a popisek napíšete v {{ui:Vlastnosti}}; {{ui:Přehrát}} v seznamu ji přehraje. Nahrávka se uloží uvnitř PDF.
- **Rozhodnutí.** {{ui:Připnout rozhodnutí}} zapíše na list větu nebo dvě. Pokud nahrazuje dřívější rozhodnutí, vyberte je v {{ui:Nahrazuje}}: staré zůstane, označí se jako Nahrazeno a ukazuje na nové. Jeden krok zpět to vrátí. Viz [Připněte hlasové poznámky a rozhodnutí na list](topic:voice-notes-and-decisions).

**Červené opravy k revizi**

- **Odeslání a odpověď.** Na kartě {{ui:Úkoly}} otevřete {{ui:Červené opravy k revizi}}, napište revizi, ke které poznámky patří, a zvolte {{ui:Exportovat soubor červených oprav}}. Dostanete soubor `.redline.json` s jednou položkou na každou otevřenou poznámku: list, pozici (jako zlomky listu, takže se nový tisk v jiné velikosti stále shoduje), slova, autora, vlákno a její úkol. Kdo kreslí změny, odpoví Přijato, Zamítnuto nebo Hotovo v souboru `.redline-answers.json`; {{ui:Načíst soubor odpovědí…}} dá každé poznámce tento stav a poznámku kreslíře jako jeden krok zpět. Viz [Odešlete poznámky kreslíři jako červené opravy](topic:redline-to-revision).

**Asistenti AI**

- **Více nástrojů.** Asistent, kterého jste připojili přes CadCraft Studio, může vypsat úkoly (`tasks_list`), vytvořit nebo změnit úkol (`task_set`), úkol odebrat (`task_clear`), zkontrolovat jeden oproti novější revizi nebo prvku (`tasks_check`) a přečíst prostý seznam změn mezi dvěma otevřenými sadami výkresů (`revisions_changes`). Dostane jen nástroje, které jste zaškrtli u přepínače Asistenti, a každá změna je jeden krok zpět. Viz [Použití MarkupCraftu s asistentem AI](topic:use-with-ai-assistants).

### Ve všech aplikacích

- **Jazyky.** CadCraft Studio nyní má 54 jazyků. Deset jich je nových: litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina. Všechny jazyky kromě angličtiny jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Vstupní zařízení.** {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Vstupní zařízení}} nastavuje, co dělá touchpad, boční tlačítka myši, pero, klepnutí prstem, 3D myš, herní ovladač nebo ovladač MIDI, a to pro všechny aplikace nebo jen pro tuto. Dokud něco nezměníte, každé zařízení funguje jako dříve. Viz [Použití touchpadu, 3D myši nebo ovladače](common:input-devices).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí {{ui:Zalomit}} (výchozí), {{ui:2 řádky}} a {{ui:1 řádek}}, takže výkres získá víc místa. Viz [Uspořádání panelů](common:arrange-panels).
- **Mřížka vlastností.** Pole stylu poznámky používají sdílenou mřížku se sbalitelnými kategoriemi a sloupci názvu a hodnoty.
- **Panel Problémy.** Varování z aplikace, například úkol po termínu, se shromažďují v jednom panelu Problémy.
- **Live a doplňky.** Relace Live jsou popsány v [Společná práce živě](common:work-together-live); seznam doplňků, který patří k vašemu účtu, je v [Doplňky a seznam vašeho účtu](common:addons-basics).
- **Připojte svou AI.** CadCraft Studio je centrum pro vašeho vlastního asistenta: připojte se jednou pro všech osm aplikací. Aplikace nemají vlastní AI.

### Opraveno ve verzi 0.8.1

- **Studio může měnit jazyk za běhu.** Dříve zůstávala desktopová aplikace a balené edice v angličtině. Zatím to nebylo otestováno na všech platformách: dejte nám vědět, pokud se jazyk nemění.
- Instalacím Studia 0.8 se přes {{ui:Nastavení}} › {{ui:Aktualizace}} nabízí 0.8.1.

### Zatím není v této verzi

- **Bez podpisu kódem.** Instalátory pro Windows a obraz .dmg pro macOS zatím nemají podpis. Ve Windows, pokud SmartScreen instalaci zastaví, zvolte {{ui:Více informací}}, pak {{ui:Přesto spustit}}. Na Macu klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. Sestavení pro obchody jsou pozastavena.
- **Připojení AI je místy nedokončené.** Připojení jedním kliknutím uvnitř Studia, hostovaný konektor pro asistenty v prohlížeči a váš vlastní klíč API uvnitř Studia nejsou pro toto vydání slíbeny. Smyčka úkolů byla otestována, ale zatím ne se skutečným asistentem.
- **Kontroly úkolů potřebují stejnou velikost stránky.** List vykreslený znovu v jiné velikosti se neshoduje, takže jeho úkoly se neuzavřou. Listy se párují podle čísla listu, jinak podle polohy stránky.
- **Hlasové poznámky jsou jen nahrávky.** Přepis neexistuje a asistent vidí délku, autora a popisek poznámky, ne zvuk. Nahrávání bylo zkoušeno s falešným mikrofonem v bezhlavém prohlížeči; skutečný mikrofon v telefonu, tabletu nebo notebooku ještě ověřen není.
- **Výpočetní listy a zdůvodnění v PDF** se uchovávají v soukromém záznamu souboru. Starší MarkupCraft tento záznam ignoruje a při dalším uložení souboru ho zahodí, takže takový soubor otevírejte a ukládejte s verzí 0.8 nebo novější.
- **Strana kreslíře u červených oprav.** Čtení souboru červených oprav v CadCraftu a odpovídání na něj zatím není hotové.
- **Další jazyky.** Lišta aplikace v tamilštině přetéká o 528 px.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). K předchozímu vydání viz [Co je nového ve verzi 0.7](topic:whats-new-0-7).

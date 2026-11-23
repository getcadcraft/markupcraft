---
title: Co je nového ve verzi 0.9 (dřívější)
summary: Poznámky a odkládací plocha, které se nikdy netisknou, šifrované soukromé poznámky a čistá kopie pro klienta, dávkové odkazy pro celou sadu výkresů, nástroj Oblouk s deseti metodami, sledování jiného revidujícího v relaci Live a oprava smazaných poznámek, které zůstávaly v uloženém PDF.
keywords: co je nového 0.9, dřívější verze, co je nového, 0.9, poznámky k vydání, seznam změn, poznámky, odkládací plocha, soukromé poznámky, heslo, šifrované, skrýt poznámky, zobrazit poznámky, čistá kopie, snímek, dávkové odkazy, odkazy na listy, propojit listy, razítko, číslo listu, dodatek, přečíslování, odkaz pdf, oblouk, metody oblouku, oblouk třemi body, poloměr, sledovat, sledovat mě, live, zobrazení třídy, seznam osob, smazaná poznámka, bubliny nápovědy, názvy karet, verze, nové funkce, úkol, úkoly, přiřazeno, termín, po termínu, zkontrolovat nyní, co se změnilo, revize, porovnat, hlasová poznámka, rozhodnutí, červené opravy, soubor odpovědí, kreslíř, asistent, mcp, problémy, jazyky, vstupní zařízení, trackpad, řádky panelu nástrojů, mřížka vlastností, aktualizace
from: aa3dfeb8
---

Toto se změnilo ve verzi MarkupCraft 0.9 oproti 0.8.1. Hlavní myšlenka je, že vaše pracovní poznámky zůstávají mimo list, který dostane klient, a že lze celou sadu výkresů propojit jedním průchodem.

## Nové

### Poznámky, odkládací plocha a soukromé poznámky

- **Odkládací plocha.** Oblast kolem každého listu je pracovní stůl: cokoli nakreslíte, napíšete nebo vložíte vedle listu, je poznámka a nikdy se netiskne. Zvolte {{ui:Zobrazit odkládací plochu}}, abyste si oddálením udělali místo, nebo {{ui:Snímek na odkládací plochu}}, přetáhněte rámeček a poté zvolte {{ui:Na odkládací plochu}}, čímž vedle listu vložíte obrázek části výkresu. Snímek je obrázek a nemění se, když se mění list. Viz [Poznámky, odkládací plocha a soukromé poznámky](topic:notes-and-pasteboard).
- **Zobrazení a skrytí poznámek.** Každá poznámka může být poznámkou: nastavte {{ui:Nové značky jsou}} na kartě {{ui:Poznámky}}, nebo {{ui:Tato značka je}} v {{ui:Vlastnosti}}. {{key:Shift+H}} nebo přepínač {{ui:Poznámky}} pod listem skryje a zobrazí všechny poznámky najednou. Poznámky se nevynášejí do tisku, zploštělých kopií, seznamů ani exportů a jiné čtečky PDF je nezobrazují. Vaše uložené PDF si je zachová pro příště, až ho znovu otevřete v MarkupCraftu.
- **Soukromé poznámky.** Zvolte {{ui:Nastavit heslo}} a poté udělejte značku {{ui:Soukromá poznámka}}. Je zašifrována v souboru heslem o délce alespoň 10 znaků a neexistuje žádná obnova: nikdo, ani my, ji bez hesla neotevře. {{ui:Zamknout}} soukromé poznámky odsune stranou; {{ui:Zůstat odemčeno na tomto zařízení}} je ve výchozím nastavení vypnuto.
- **Uložit čistou kopii.** {{ui:Uložit čistou kopii}} odstraní každou poznámku, soukromou poznámku a vše na odkládací ploše. Použijte ji pro soubor, který jde klientovi.

### Propojení celé sady

- **Dávkové odkazy.** Zvolte {{ui:Strany}} › {{ui:Dávkové odkazy…}}, nebo {{ui:Propojit odkazy na listy…}} pod {{ui:Najít text}} v panelu {{ui:Listy}}. Krok 1 uvede číslo a název každého listu načtený z jeho razítka; opravte ty, které jsou špatně. Krok 2 uvede nalezené odkazy, například `3/A-501` nebo `DETAIL 2 ON A-501`. Položka Propojí ukáže list a pohled pro každý odkaz, Nepropojeno ukáže čísla, která žádný otevřený list nemá, a {{ui:Vytvořit odkazy}} je vytvoří všechny najednou jedním krokem zpět. Spusťte to znovu po dodatku nebo přečíslování; odkazy, které jste vytvořili ručně, se nikdy nemění. Odkaz s pohledem se uloží jako odkaz PDF, takže ho otevřou i jiné čtečky a dostanou se k detailu. Viz [Odkazy na listy](topic:sheet-links).

### Kreslení

- **Oblouk, deset metod.** Nástroj {{ui:Oblouk}} ({{key:O}}) má nyní nad stránkou pole {{ui:Metoda oblouku}} s deseti způsoby kreslení oblouku; úhel, délku, poloměr a směr lze zadat klikáním i psaním. Viz [Nakreslete oblouk deseti způsoby](topic:draw-an-arc).

### Spolupráce

- **Sledování revidujícího.** V relaci živé spolupráce (Live) zvolte u jména osoby {{ui:Sledovat}} a váš pohled se posune spolu s jejím; vlastní posouvání nebo zoom ho zastaví. Hostitel může zvolit {{ui:Požádat všechny, aby mě sledovali}}. Seznam osob ukazuje barvu, jméno každé osoby, list, na kterém je, a čas její poslední úpravy. Viz [Sledování jiného revidujícího v relaci Live](topic:follow-in-live).

## Ve všech aplikacích

- Bubliny nápovědy jsou Bootstrap tooltipy, úvodní tip lze zavřít, pruhy karet se posouvají, když přetečou, a titulky karet prohlížeče mají tvar `<document> — MarkupCraft | CadCraft`.
- Panel s několika sekcemi otevře jednu a ostatní zavře (zámek vedle šipky nechá jednu otevřenou); přepínač v {{ui:Nastavení}} to vypne.
- Každá aplikace začíná s výchozí sadou objektů knihovny.
- Jednotky hmotnosti a teploty jsou k dispozici v nastavení jednotek.

## Opraveno

- **Smazané poznámky už nezůstávají čitelné v uloženém PDF.** Uložení dříve odebralo smazanou nebo přepsanou anotaci ze stránky, ale objekt s jejím textem zůstal v souboru. Nyní se tyto objekty při uložení smažou. Soubory uložené staršími verzemi je obsahují, dokud je neuložíte znovu.

## Poctivá omezení

- Dávkové odkazy byly vyzkoušeny na našich vlastních testovacích sadách. Skutečné sady kreslí bubliny mnoha způsoby, takže na sadě klienta mohou být některé pohledy přehlédnuty. Naskenované listy nejdřív potřebují {{ui:Přečíst text (OCR)…}}.
- Poznámky, soukromé poznámky a odkládací plocha byly testovány v bezhlavém prohlížeči a na našich vlastních souborech, ne na velké reálné vektorové sadě a ne v reálné dvoučlenné relaci Live. Změna hesla není hotová. Verze starší než 0.9 poznámky nezobrazují.
- Zobrazení třídy je seznam osob; nebylo vyzkoušeno se skutečným učitelem a studenty.
- Jazyky jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- Instalátory pro Windows nejsou podepsány (Další informace, pak Přesto spustit); obraz disku pro macOS není notarizován (klikněte pravým tlačítkem, pak Otevřít).

## Dříve: 0.8 a 0.8.1

Toto se změnilo ve verzi MarkupCraft 0.8 a 0.8.1 oproti 0.7. Největší novinkou je, že poznámka může být úkolem, který udělá někdo nebo váš vlastní asistent, a který se uzavře sám, když se výkres skutečně změní.

### Nové

**Poznámky, které jednají**

- **Udělejte z poznámky úkol.** Vyberte jednu nebo více poznámek, otevřete kartu {{ui:Úkoly}} a zvolte {{ui:Udělat z vybraného úkol}}. Úkol má název, osobu nebo vaše připojeného asistenta, který ho provede, volitelný termín a stav, a drží si své místo na listu i své vlákno. Viz [Udělat z poznámky úkol](topic:markups-that-act).
- **Úkoly, které se uzavřou samy.** Úkol může sledovat kresbu uvnitř své poznámky. Otevřete novější revizi listu a zvolte {{ui:Zkontrolovat nyní}}: pokud se čáry v té oblasti změnily o víc než vlásek, úkol se označí jako Hotovo, jeho poznámka se stane Dokončeno a poznámka ve vlákně popíše, co se změnilo. Nové datové razítko nebo čáry posunuté méně než o 1.5 bodu se nepočítají. Úkol může místo toho sledovat prvek modelu: váš asistent hlásí prvek pomocí `tasks_check` a pozdější hlášení, které se liší, nebo smazaný prvek, úkol uzavře. Jeden krok zpět ho znovu otevře.
- **Najděte práci.** Filtrujte seznam {{ui:Úkoly}} podle stavu a podle toho, pro koho je, včetně {{ui:Po termínu}}; zvolte {{ui:Přiřazeno}}, pak {{ui:Asistent}}, abyste viděli, co čeká na vašeho asistenta. Úkol po svém termínu se zobrazí jako varování v panelu Problémy. {{ui:CSV}} exportuje seznam. Úkoly se ukládají v PDF spolu s poznámkou a přes Live putují jako ostatní vlastnosti poznámek.

**Co se změnilo, jako prostý seznam**

- **Vypište změny.** Otevřete kartu {{ui:Porovnat}}, pak zvolte Porovnat celou sadu, vyberte starší a novější soubor a zvolte {{ui:Vypsat změny}}. Seznam začíná počtem a pak popisuje každý změněný list, od největší změny: kde na listu, jak velká (ve skutečných jednotkách i v palcích papíru na kalibrovaném listu), zda byly čáry přidány nebo odebrány, kolik poznámek tam je a která slova se objevila nebo zmizela. {{ui:Kopírovat seznam}} ho dá do schránky a {{ui:CSV}} zapíše jeden řádek na každou změnu. Viz [Seznam změn mezi revizemi](topic:what-changed-in-words).

**Hlasové poznámky a rozhodnutí**

- **Hlasové poznámky.** Na kartě {{ui:Poznámky}} zvolte {{ui:Nahrát hlasovou poznámku}}, pak {{ui:Zastavit nahrávání}}; nahrávky se samy zastaví po dvou minutách. Poznámka je připnuta do středu listu, přetáhnete ji tam, kam patří, a titulek napíšete do {{ui:Vlastnosti}}, a {{ui:Přehrát}} v seznamu ji přehraje. Nahrávka se uloží do PDF.
- **Rozhodnutí.** {{ui:Připnout rozhodnutí}} zapíše na list větu nebo dvě. Pokud nahrazuje dřívější rozhodnutí, vyberte ho v {{ui:Nahrazuje}}: staré zůstane, označí se jako Nahrazeno a ukazuje na nové. Jeden krok zpět ho vrátí. Viz [Připnutí hlasových poznámek a rozhodnutí na list](topic:voice-notes-and-decisions).

**Červené opravy k revizi**

- **Odešlete a odpovězte.** Na kartě {{ui:Úkoly}} otevřete {{ui:Červené opravy k revizi}}, napište revizi, ke které se poznámky vztahují, a zvolte {{ui:Exportovat soubor červených oprav}}. Dostanete soubor `.redline.json` s jednou položkou na každou otevřenou poznámku: list, pozici (jako zlomky listu, takže přetisk v jiné velikosti stále sedí), slova, autora, vlákno a jeho úkol. Ten, kdo změny kreslí, odpoví Přijato, Zamítnuto nebo Hotovo v souboru `.redline-answers.json`; {{ui:Načíst soubor odpovědí…}} dá každé poznámce tento stav a poznámku kreslíře jako jeden krok zpět. Viz [Odeslání poznámek kreslíři jako červené opravy](topic:redline-to-revision).

**AI asistenti**

- **Více nástrojů.** Asistent, kterého jste připojili přes CadCraft Studio, může vypsat úkoly (`tasks_list`), vytvořit nebo změnit jeden (`task_set`), odebrat úkol (`task_clear`), zkontrolovat jeden proti novější revizi nebo prvku (`tasks_check`) a přečíst prostý seznam změn mezi dvěma otevřenými sadami plánů (`revisions_changes`). Dostane jen nástroje, které jste zaškrtli pod přepínačem Asistenti, a každá změna je jeden krok zpět. Viz [Použití MarkupCraftu s AI asistentem](topic:use-with-ai-assistants).

### Ve všech aplikacích

- **Jazyky.** CadCraft Studio má nyní 54 jazyků. Deset je nových: litevština, lotyština, bosenština, maráthština, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina. Všechny jazyky kromě angličtiny jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Vstupní zařízení.** {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Vstupní zařízení}} nastavuje, co dělá trackpad, boční tlačítka myši, pero, klepnutí prstem, 3D myš, herní ovladač nebo MIDI ovladač, a to pro všechny aplikace nebo jen pro tuto. Dokud nic nezměníte, každé zařízení funguje jako dřív. Viz [Použití trackpadu, 3D myši nebo ovladače](common:input-devices).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí {{ui:Zalomit}} (výchozí), {{ui:2 řádky}} a {{ui:1 řádek}}, takže výkres má více místa. Viz [Uspořádání panelů](common:arrange-panels).
- **Mřížka vlastností.** Pole Styl poznámky používají sdílenou mřížku se sbalitelnými kategoriemi a sloupci názvu a hodnoty.
- **Panel Problémy.** Varování z aplikace, například úkol po termínu, se shromažďují v jednom panelu Problémy.
- **Live a doplňky.** Relace Live jsou popsány v [Práce společně živě](common:work-together-live); seznam doplňků navázaný na váš účet je v [Doplňky a seznam vašeho účtu](common:addons-basics).
- **Připojte svého AI asistenta.** CadCraft Studio je centrum pro vašeho vlastního asistenta: připojte ho jednou pro všech osm aplikací. Aplikace žádnou vlastní AI neobsahují.

### Opraveno v 0.8.1

- **Studio umí přepnout jazyk za běhu.** Dříve zůstávala desktopová aplikace a balené verze v angličtině. Ještě není vyzkoušeno na všech platformách: dejte nám vědět, pokud se jazyk nezmění.
- Instalace Studia 0.8 nabízí 0.8.1 přes {{ui:Nastavení}} › {{ui:Aktualizace}}.

### Zatím ještě není

- **Není podepsáno kódem.** Instalátory pro Windows a soubor .dmg pro macOS zatím nemají podpis. Ve Windows, pokud SmartScreen zastaví instalátor, zvolte {{ui:Další informace}}, pak {{ui:Přesto spustit}}. Na Macu klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. Verze pro obchody jsou pozastaveny.
- **Připojení AI asistenta je v některých místech nedokončené.** Připojení jedním kliknutím uvnitř Studia, hostovaný konektor pro asistenty v prohlížeči a váš vlastní klíč API uvnitř Studia nejsou pro toto vydání slíbeny. Smyčka úkolů byla vyzkoušena, ale zatím ne se skutečným asistentem.
- **Kontroly úkolů vyžadují stejnou velikost stránky.** List přetisknutý v jiné velikosti se neshoduje, takže jeho úkoly se neuzavřou. Listy se páří podle čísla listu, jinak podle pozice stránky.
- **Hlasové poznámky jsou jen nahrávky.** Není k nim přepis a asistent vidí délku, autora a titulek poznámky, ne zvuk. Nahrávání bylo vyzkoušeno s falešným mikrofonem v bezhlavém prohlížeči; skutečný mikrofon v telefonu, tabletu nebo notebooku ještě ověřen není.
- **Výpočtové listy a důvody v PDF** jsou uloženy v soukromé položce souboru. Starší MarkupCraft tuto položku ignoruje a při dalším uložení ji zahodí, takže takový soubor otevřete a uložte s verzí 0.8 nebo novější.
- **Kreslířova strana červených oprav.** Čtení souboru červených oprav v CadCraftu a odpovídání na něj zatím není hotové.
- **Další jazyky.** Panel aplikace v tamilštině přesahuje o 528 px.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). Pro vydání před tímto viz [Co je nového ve verzi 0.7](topic:whats-new-0-7).

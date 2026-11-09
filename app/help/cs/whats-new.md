---
title: Novinky ve verzi 0.8 a 0.8.1
summary: Poznámky, které se mění v úkoly a samy se uzavírají, prostý seznam změn mezi revizemi, hlasové poznámky a rozhodnutí na plánu, soubory červených oprav pro kreslíře a společné změny verze 0.8: vstupní zařízení, řádky panelu nástrojů, panel Problémy, další jazyky.
keywords: novinky, co je nového, poznámky k vydání, changelog, změny, 0.8, 0.8.1, verze, nové funkce, úkol, úkoly, přiřazeno, termín, po termínu, zkontrolovat nyní, co se změnilo, revize, porovnat, hlasová poznámka, rozhodnutí, červené opravy, soubor odpovědí, kreslíř, asistent, mcp, problémy, jazyky, vstupní zařízení, touchpad, řádky panelu nástrojů, tabulka vlastností, aktualizace
from: 40368796
---

Toto se změnilo ve verzi MarkupCraft 0.8 a 0.8.1 oproti verzi 0.7. Hlavní novinkou je, že poznámka může být úkol, který vykoná někdo nebo váš připojený asistent, a který se sám uzavře, když se výkres skutečně změní.

## Novinky

### Poznámky, které něco dělají

- **Změňte poznámku na úkol.** Vyberte jednu nebo více poznámek, otevřete kartu {{ui:Úkoly}} a zvolte {{ui:Udělat z vybraného úkol}}. Úkol má název, osobu nebo vašeho připojeného asistenta, který jej vykoná, volitelný termín a stav; zachovává si své místo na listu i své vlákno. Viz [Změna poznámky na úkol](topic:markups-that-act).
- **Úkoly, které se uzavřou samy.** Úkol může sledovat výkres uvnitř své poznámky. Otevřete novější revizi listu a zvolte {{ui:Zkontrolovat nyní}}: pokud se čáry v dané oblasti změnily o více než drobnost, úkol se označí jako Hotovo, jeho poznámka přejde do stavu Dokončeno a vlákno obsahuje zprávu, co se změnilo. Nové datum na razítku ani čáry posunuté o méně než 1.5 bodu se nepočítají. Úkol může místo toho sledovat prvek modelu: váš asistent prvek nahlásí pomocí `tasks_check` a pozdější hlášení, které se liší, nebo smazaný prvek úkol uzavře. Jeden krok zpět jej znovu otevře.
- **Najděte práci.** Filtrujte seznam {{ui:Úkoly}} podle stavu a podle toho, pro koho je, včetně {{ui:Po termínu}}; zvolte {{ui:Přiřazeno}}, pak {{ui:Asistent}}, abyste viděli, co čeká na vašeho asistenta. Úkol po termínu se zobrazí jako varování v panelu Problémy. {{ui:CSV}} exportuje seznam. Úkoly se ukládají do PDF spolu s poznámkou a přes Live putují jako ostatní vlastnosti poznámek.

### Co se změnilo, jako prostý seznam

- **Vypište změny.** Otevřete kartu {{ui:Porovnat}}, pak {{ui:Porovnat celou sadu}}, vyberte dřívější a pozdější soubor a zvolte {{ui:Vypsat změny}}. Seznam začíná počtem a pak popisuje každý změněný list, od nejvýraznější změny: kde na listu, jak velká (ve skutečných jednotkách i v palcích na papíře (in) u kalibrovaného listu), zda byly čáry přidány nebo odebrány, kolik poznámek tam je a která slova se objevila nebo zmizela. {{ui:Kopírovat seznam}} jej vloží do schránky a {{ui:CSV}} zapíše jeden řádek na každou změnu. Viz [Výpis změn mezi revizemi](topic:what-changed-in-words).

### Hlasové poznámky a rozhodnutí

- **Hlasové poznámky.** Na kartě {{ui:Poznámky}} zvolte {{ui:Nahrát hlasovou poznámku}}, pak {{ui:Zastavit nahrávání}}; nahrávání se zastaví samo po dvou minutách. Poznámka se připne doprostřed listu, přetáhnete ji na správné místo a napíšete popisek do {{ui:Vlastnosti}}; {{ui:Přehrát}} v seznamu ji přehraje. Nahrávka se ukládá dovnitř PDF.
- **Rozhodnutí.** {{ui:Připnout rozhodnutí}} zapíše na list větu nebo dvě. Pokud nahrazuje dřívější rozhodnutí, vyberte ho v {{ui:Nahrazuje}}: staré zůstane, označí se jako Nahrazeno a odkazuje na nové. Jeden krok zpět jej vrátí. Viz [Připnutí hlasových poznámek a rozhodnutí na list](topic:voice-notes-and-decisions).

### Červené opravy k revizi

- **Odeslat a odpovědět.** Na kartě {{ui:Úkoly}} otevřete {{ui:Červené opravy k revizi}}, napište revizi, ke které se poznámky vztahují, a zvolte {{ui:Exportovat soubor červených oprav}}. Dostanete soubor `.redline.json` s jednou položkou za každou otevřenou poznámku: list, pozice (jako zlomky listu, takže nový tisk v jiné velikosti stále sedí), slova, autor, vlákno a jeho úkol. Kdo kreslí změny, odpoví Přijato, Zamítnuto nebo Hotovo v souboru `.redline-answers.json`; {{ui:Načíst soubor odpovědí…}} přiřadí každé poznámce tento stav a poznámku kreslíře jako jeden krok zpět. Viz [Odeslání poznámek kreslíři jako červených oprav](topic:redline-to-revision).

### Asistenti AI

- **Další nástroje.** Asistent připojený přes CadCraft Studio může vypsat úkoly (`tasks_list`), vytvořit nebo změnit jeden (`task_set`), úkol odebrat (`task_clear`), zkontrolovat jeden oproti novější revizi nebo prvku (`tasks_check`) a přečíst prostý seznam změn mezi dvěma otevřenými sadami plánů (`revisions_changes`). Dostane jen ty nástroje, které zaškrtnete pod přepínačem Asistenti, a každá změna je jeden krok zpět. Viz [Použití MarkupCraft s asistentem AI](topic:use-with-ai-assistants).

## Ve všech aplikacích

- **Jazyky.** CadCraft Studio má nyní 54 jazyků. Deset je nových: litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina. Všechny jazyky kromě angličtiny jsou zatím koncepty strojového překladu, dokud je nepřečte rodilý mluvčí.
- **Vstupní zařízení.** {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Vstupní zařízení}} nastaví, co dělá touchpad, boční tlačítka myši, pero, klepnutí prstem, 3D myš, herní ovladač nebo MIDI ovladač, a to pro všechny aplikace nebo jen pro tuto. Dokud něco nezměníte, každé zařízení funguje jako dřív. Viz [Použití touchpadu, 3D myši nebo ovladače](common:input-devices).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí {{ui:Zalomit}} (výchozí), {{ui:2 řádky}} a {{ui:1 řádek}}, takže výkres dostane více místa. Viz [Uspořádání panelů](common:arrange-panels).
- **Tabulka vlastností.** Pole stylu poznámky používají společnou tabulku se sbalitelnými kategoriemi a sloupci popisku a hodnoty.
- **Panel Problémy.** Varování z aplikace, například úkol po termínu, se shromažďují v jednom panelu Problémy.
- **Live a doplňky.** Relace Live jsou popsány v [Spolupráce živě](common:work-together-live); seznam doplňků, který sleduje váš účet, je v [Doplňky a váš účet](common:addons-basics).
- **Připojte svou AI.** CadCraft Studio je centrum pro váš vlastní asistent: připojte jej jednou pro všech osm aplikací. Aplikace žádnou vlastní AI neobsahují.

## Opraveno ve verzi 0.8.1

- **Studio umí přepnout jazyk za běhu.** Dříve desktopová aplikace a balené edice zůstávaly v angličtině. Není ještě otestováno na každé platformě: dejte nám vědět, pokud se jazyk nezmění.
- Instalace Studia 0.8 nabídnou verzi 0.8.1 v {{ui:Nastavení}} › {{ui:Aktualizace}}.

## Zatím ve verzi není

- **Bez podpisu kódu.** Instalátory pro Windows a soubor .dmg pro macOS zatím nemají podpis. Pokud na Windows instalátor zablokuje SmartScreen, zvolte {{ui:Další informace}}, pak {{ui:Přesto spustit}}. Na Macu klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. Verze pro obchody jsou pozastavené.
- **Připojení AI je v některých místech nedokončené.** Připojení jedním kliknutím uvnitř Studia, hostovaný konektor pro asistenty v prohlížeči a váš vlastní klíč API ve Studiu nejsou pro toto vydání slíbeny. Smyčka úkolů byla otestována, ale zatím ne se skutečným asistentem.
- **Kontroly úkolů vyžadují stejnou velikost listu.** List znovu vytištěný v jiné velikosti se nebude shodovat, takže jeho úkoly se nezavřou. Listy se párují podle čísla listu, jinak podle pozice ve stránce.
- **Hlasové poznámky jsou jen nahrávky.** Není k nim přepis a asistent vidí délku, autora a popisek poznámky, ne zvuk. Nahrávání bylo vyzkoušeno s falešným mikrofonem v bezhlavém prohlížeči; skutečný mikrofon v telefonu, tabletu nebo notebooku ještě je třeba ověřit.
- **Kalkulační listy a zdůvodnění v PDF** jsou uložené v soukromém záznamu souboru. Starší MarkupCraft tento záznam ignoruje a při dalším uložení souboru jej zahodí, proto takový soubor otevírejte a ukládejte ve verzi 0.8 nebo novější.
- **Druhá strana červených oprav.** Čtení souboru červených oprav v CadCraft a odpovídání na něj ještě není hotové.
- **Další jazyky.** Lišta aplikace v tamilštině přetéká o 528 px.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). Pro předchozí vydání viz [Novinky ve verzi 0.7](topic:whats-new-0-7).

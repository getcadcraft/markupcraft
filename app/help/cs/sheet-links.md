---
title: Odkazy na listy
summary: Nechte poznámku přejít na jiný list a propojte každý odkaz na list, například 3/A-501, s jeho listem a pohledem jedním průchodem pomocí dávkových odkazů.
keywords: hypertextový odkaz, odkaz, odkazy, přeskočit, odkaz na list, výnoska na detail, výnoska na řez, 3/A-501, přejít na list, zpět, automatický odkaz, dávkový odkaz, dávkové odkazy, razítko, číslo listu, název listu, pohled, detail, přejmenovat, přečíslovat, dodatek, odkaz v PDF
from: 86a17c37
---

Odkaz na list vás přenese z poznámky na jiný list sady: z bubliny detailu na detail, z poznámky na list, ke kterému se vztahuje.

## Propojit poznámku s listem

1. Vyberte poznámku.
2. V {{ui:Vlastnosti}} vyberte list pod {{ui:Odkaz na list}}.

V pravém horním rohu poznámky se objeví malá šipka. Chcete-li ji sledovat, podržte {{key:Mod}} a klikněte na poznámku, nebo ji vyberte a zvolte {{ui:Přejít na …}} v {{ui:Vlastnosti}}. {{key:Alt+Left}} vás vrátí na list, ze kterého jste přišli.

Odkaz pojmenovává list jeho číslem, takže funguje i po novém otevření sady nebo po vložení přepracované sady: otevře nejnovější list s tímto číslem. Pokud tento list otevřený není, stavový řádek to řekne.

## Propojit všechny odkazy na listy najednou

Zvolte {{ui:Strany}} › {{ui:Dávkové odkazy…}}, nebo {{ui:Propojit odkazy na listy…}} pod {{ui:Najít text}} nahoře v panelu {{ui:Listy}}.

1. **Zkontrolujte čísla listů.** MarkupCraft vypíše každý otevřený list s číslem a názvem, které přečetl z razítka listu (nebo z popisku strany), a s tím, odkud pocházejí. Opravte chybná a napište číslo tam, kde žádné nenašel (razítko, jehož číslo bylo vykresleno jako čáry, nemá text ke čtení). Pak zvolte {{ui:Najít odkazy}}. Vaše opravy jsou jeden krok zpět a stanou se popisky stran v uloženém PDF.
2. **Zkontrolujte seznam.** MarkupCraft čte text každého listu a hledá odkazy jako „3/A-501“, „5 / A501“, „DETAIL 2 ON A-501“, bublinu s „3“ nad „A-501“, nebo prosté „A-501“ v poznámce. Čte také názvy pohledů každého listu (číslo detailu s číslem listu pod ním, nebo velké číslo s názvem vedle). Seznam má tři části:
   - {{ui:Propojí se}}: každý odkaz, list, na který vede, a pohled na tomto listu. Odškrtněte ty, které nechcete. Pokud pohled nebyl nalezen (odkaz na pohled 7 na listu s pohledy 1 až 6), vyberte pohled ze seznamu vedle, nebo ponechte {{ui:Celý list}}.
   - {{ui:Nepropojeno}}: čísla listů, která žádný otevřený list nemá, s počtem odkazů, které každé pojmenovává. Vyberte list, který každé z nich znamená (například list, který byl přečíslován), a každý odkaz na toto číslo se na něj propojí. Nebo ponechte nepropojeno.
   - Kolik odkazů je již propojeno a stále vede na správné místo. Ty zůstanou beze změny.
3. Zvolte {{ui:Vytvořit odkazy}}.

Každý odkaz dostane tenké modré pole, které je odkazem na list. {{key:Mod}}+klik na něj otevře list přiblížený na pohled. Jedno {{key:Mod+Z}} je všechny odstraní.

Kódy, které jen vypadají jako čísla listů, například R-19 nebo W12X26, se vynechají: odkaz musí mít tvar čísel listů dané sady. Vlastní číslo listu v jeho razítku a v názvech pohledů nikdy není odkazem. Naskenované listy nemají text ke čtení: nejdřív použijte {{ui:Přečíst text (OCR)…}}, nebo odkazy propojte jeden po druhém.

## Spustit znovu při změně sady

Dávkové odkazy lze spustit tolikrát, kolikrát chcete:

- **Byl přidán list**, například dodatek s A-601: otevřete jeho soubor a spusťte Dávkové odkazy znovu. Odkazy na A-601, které předtím nebyly propojeny, se nyní propojí.
- **List byl přečíslován**: opravte jeho číslo v kroku 1. Odkazy vytvořené Dávkovými odkazy, které už nenajdou svůj list, jsou uvedeny pod {{ui:Nepropojeno}}; vyberte list jednou a všechny se k němu připojí. Odkazy, které se přesunuly na jiný pohled, se aktualizují.
- Odkazy, které jste vytvořili ručně v {{ui:Vlastnosti}}, se nikdy nemění.

## V uloženém PDF

Odkaz na list ve stejném PDF se také zapíše jako odkaz PDF, takže i jiné čtečky na něj po kliknutí přeskočí. Odkaz s pohledem otevře tento pohled v jiné čtečce (skok PDF „fit rectangle“); odkaz bez pohledu otevře celý list. Odkazy na list v jiném souboru sady fungují jen v MarkupCraftu.

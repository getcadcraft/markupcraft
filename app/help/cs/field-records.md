---
title: Sledování RFI, předložených podkladů a denních záznamů
summary: Přidejte k listům RFI, předložené podklady a denní záznamy s čísly, přiřazením, termíny a vlákny; filtrujte, co je po termínu; exportujte do CSV nebo BCF; pracujte offline a sloučte kopie.
keywords: rfi, žádost o informace, předložený podklad, denní záznam, hlášení z terénu, stavební deník, stavba, po termínu, termín, přiřazeno mně, vlákno, příloha, sloučit, offline, tablet, bcf, csv, terén
from: 95039c5a
---

Karta {{ui:Terén}} uchovává tři druhy záznamů vedle vašich poznámek. Každý je vázán na list; RFI nebo předložený podklad má navíc špendlík v místě listu, kterého se týká.

- **RFI**: dotaz pro projekční tým. Stavy: Otevřeno, Zodpovězeno, Uzavřeno.
- **Předložený podklad**: něco, co musí být zkontrolováno dříve, než se práce posune dál. Stavy: Otevřeno, V revizi, Schváleno, Schváleno s poznámkami, Opravit a znovu předložit, Uzavřeno.
- **Denní záznam**: počasí dne, počet lidí na stavbě a provedené práce. Stavy: Koncept, Finální.

Každý záznam má vlastní číslo ve svém druhu (RFI-0001, SUB-0001, LOG-0001), název, text, přiřazení, termín, vlákno odpovědí a seznam názvů příloh.

## Přidat záznam

1. Otevřete kartu {{ui:Terén}} a zvolte {{ui:RFI}} nebo {{ui:Předložený podklad}}.
2. Klepněte nebo klikněte na list, kam záznam patří. Objeví se špendlík a záznam se otevře v kartě.
3. Vyplňte název, otázku nebo popis, komu je přiřazen a kdy je splatný.

Denní záznam se přidá k otevřenému listu bez špendlíku. {{ui:Umístit špendlík}} jej umístí později; {{ui:Přesunout špendlík}} přesune libovolný špendlík. Klepnutí na špendlík na listu otevře jeho záznam.

## Odpovídání a sledování

Změníte-li {{ui:Stav}}, změna se zapíše do vlákna. Napište odpověď a zvolte {{ui:Odeslat odpověď}} (Ctrl+Enter také odešle). Přílohy jsou pouze názvy: napište jeden nebo vyberte soubory a seznam ukáže týmu, co k záznamu patří. Soubory samotné zůstávají tam, kde jsou.

Záznam, jehož termín uplynul a který stále čeká (RFI, které není Zodpovězeno nebo Uzavřeno, nebo předložený podklad, o kterém ještě nebylo rozhodnuto), je označen **Po termínu** červeně v seznamu i u svého špendlíku.

## Najděte, co je důležité

Filtry jsou nad seznamem: druh, stav, termín (po termínu, splatné za 7 dní, s termínem nebo bez termínu), tento list nebo všechny listy, textové hledání a {{ui:Přiřazeno mně}}, které porovná přiřazeného s jménem, pod kterým vás MarkupCraft zná (viz [Nastavte své jméno](topic:set-your-name)). Řádek pod filtry počítá, co je zobrazeno a co je po termínu.

## Export

{{ui:CSV}} zapíše vypsané záznamy jako tabulku. {{ui:BCF}} je zapíše jako témata BCF, každé se snímkem svého místa na listu, aby je mohly zobrazit jiné nástroje BCF. Obojí se řídí filtry.

## Uložení, práce offline a slučování kopií

Záznamy se uloží do PDF při jeho uložení a vrátí se při otevření. Nic nevyžaduje síť: přidávejte, upravujte, odpovídejte a ukládejte na tabletu ve sklepě a potom PDF přeneste zpět. Starší PDF a PDF z jiných programů se otevírají jako dříve.

Chcete-li spojit dvě kopie, otevřete jednu a zvolte {{ui:Sloučit}}, potom vyberte druhou kopii téhož PDF. Záznamy se spojují podle svých identifikátorů:

- záznam, který má pouze jedna kopie, se přidá;
- záznam, který je v obou kopiích, převezme své pole (název, text, stav, přiřazení, termín) jako celek z kopie změněné naposledy, takže pokud dva lidé změnili různá pole téhož záznamu, vyhraje verze pozdější kopie; vlákna a názvy příloh z obou kopií se spojí;
- pokud obě kopie očíslovaly nový záznam stejně, ten, který přichází, dostane další volné číslo;
- záznam odstraněný v jedné kopii zůstane odstraněn, pokud nebyl později upraven.

Sloučení je jeden krok funkce Zpět.

## Omezení

- Záznamy zatím nejsou sdíleny přes Live TeamWork; použijte {{ui:Sloučit}}.
- V této verzi nejsou pro záznamy k dispozici týmy, upozornění ani cloudové projekty.
- Stránky odstraněné z PDF odnesou své záznamy s sebou (potvrzení stránek je počítá).

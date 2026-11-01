---
title: Prehliadka obrazovky
summary: Panel nástrojov, zoznam listov, plocha listu, päť panelov vpravo a stavový riadok, pod názvami, ktoré sú na obrazovke.
keywords: obrazovka, rozloženie, panel nástrojov, panely, bočný panel, miniatúry, vlastnosti, stavový riadok, rozhranie, celá obrazovka, motív, tmavý režim
from: 18d82de6
---

MarkupCraft vypĺňa okno prehliadača. Zhora nadol a zľava doprava:

## Panel úplne hore

Úzky panel nad všetkým patrí rodine CadCraft, nie samotnému MarkupCraft. Obsahuje:

- názov aplikácie a verziu, ktorú používate,
- {{ui:O aplikácii MarkupCraft}}, ktoré otvorí stránku aplikácie na webe,
- {{ui:Pomocník}}, ktorý otvorí tohto pomocníka v bočnom paneli (alebo stlačte {{key:F1}}),
- {{ui:Uložiť na offline použitie}}, ktoré uchová MarkupCraft, jeho čítačku a zapisovač PDF a tohto pomocníka v tomto prehliadači, aby sa otvoril bez pripojenia; potom hlási „Pripravené offline“ (pozrite [Práca offline](common:offline)),
- tlačidlo režimu obrazovky ({{ui:Celá obrazovka}}) a
- {{ui:Nastavenia}} (alebo {{key:Mod+,}}) s kartou {{ui:MarkupCraft}} pre vlastné nastavenia aplikácie a {{ui:Všeobecné}} pre tie, ktoré zdieľajú všetky aplikácie CadCraft (pozrite [Nastavenia MarkupCraft](topic:settings)), a
- {{ui:Papier}} a {{ui:Model}}, svetlý a tmavý motív. V {{ui:Model}} sa listy kreslia svetlo na tmavom; Vaše poznámky si ponechávajú vlastné farby.

Tlačidlo režimu obrazovky, alebo {{key:Ctrl+Shift+F}}, prepína medzi tromi režimami: normálny, celá obrazovka a celá obrazovka so skrytými panelmi. So skrytými panelmi presuňte ukazovateľ k hornému okraju obrazovky (alebo tam ťuknite) a vrátia sa. Táto skratka používa kláves Ctrl na všetkých počítačoch, aj na Macu.

:::note
V režime celej obrazovky {{key:Esc}} zároveň spôsobí, že prehliadač opustí celú obrazovku. Ak ste chceli len zrušiť kreslenie, stlačením {{key:Ctrl+Shift+F}} sa vrátite na celú obrazovku.
:::

## Panel nástrojov

Pod horným panelom sú nástroje zoskupené a označené:

| Skupina | Tlačidlá |
|---|---|
| Súbor | {{ui:Otvoriť}}, {{ui:Uložiť}}, {{ui:Zavrieť}} |
| Výber | {{ui:Vybrať}}, {{ui:Posun}} |
| Kreslenie | {{ui:Pero}}, {{ui:Zvýraznenie}}, {{ui:Úsečka}}, {{ui:Šípka}}, {{ui:Obdĺžnik}}, {{ui:Elipsa}}, {{ui:Lomená čiara}}, {{ui:Mnohouholník}} |
| Revízia | {{ui:Oblak}}, {{ui:Voľný oblak}} |
| Anotácie | {{ui:Popisok}}, {{ui:Text}}, {{ui:Poznámka}}, {{ui:Pečiatka}} |
| Meranie | {{ui:Kalibrovať}}, {{ui:Dĺžka}}, {{ui:Plocha}}, {{ui:Počet}} |
| Úpravy | {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}} a {{ui:Viac}}: {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}}, {{ui:Zrušiť výber}} |

Nástroj, ktorý používate, vyzerá stlačený. Podržte ukazovateľ nad tlačidlom a uvidíte jeho kláves (napríklad „Obdĺžnik (R)“); ponuka {{ui:Viac}} uvádza vedľa každého príkazu jeho kláves. Tlačidlá, ktoré teraz nemožno použiť, sú stlmené: {{ui:Kopírovať}}, kým nevyberiete poznámku, {{ui:Prilepiť}}, kým sa niečo neskopíruje. Malá bodka za {{ui:Uložiť}} znamená, že niektoré poznámky ešte nie sú uložené. Úplný zoznam klávesov je v [Klávesnica a myš](topic:keyboard).

Nástroj zostáva zapnutý aj po kreslení, takže môžete nakresliť viac oblakov za sebou. Stlačte {{key:Esc}} (dvakrát, ak je nová poznámka ešte vybraná) alebo {{key:V}}, aby ste sa vrátili k {{ui:Vybrať}}.

## Zoznam listov (vľavo)

{{ui:Listy}} vypisuje každú stranu každého otvoreného PDF. Každý riadok ukazuje malý obrázok listu, jeho názov, jeho číslo listu alebo súbor a stranu a počet jeho poznámok. Číslo za nadpisom je počet listov.

- Kliknutím na riadok zobrazíte daný list.
- Písaním do {{ui:Hľadať listy}} filtrujete podľa názvu listu, čísla listu alebo názvu súboru. Stlačením {{key:Enter}} otvoríte prvú zhodu.

Názvy listov sa preberajú z PDF, ak ich má. Pozrite [Otvorenie sady plánov a pohyb medzi listami](topic:open-a-plan-set).

## Plocha listu (v strede)

List, na ktorom pracujete. Kým nie je nič otvorené, ukazuje „Otvorte sadu plánov“ s tlačidlom {{ui:Otvoriť PDF}}. Súbory PDF môžete pustiť kdekoľvek tu a otvoria sa.

Pod listom je úzky panel s:

- šípkami na predchádzajúci a nasledujúci list a „3 z 12: A-101 — Pôdorys“ (podržte nad ním ukazovateľ a uvidíte súbor a stranu),
- oddialením, poľom zväčšenia (napíšte percentá a stlačte {{key:Enter}}; 100 % je skutočná veľkosť na typickej obrazovke), priblížením,
- {{ui:Prispôsobiť stranu}} a {{ui:Prispôsobiť šírke}}.

Každý list si pamätá vlastné zväčšenie, kým je sada otvorená.

Keď porovnávate dva listy, zobrazí sa tu legenda: „Len na starom liste“, „Len na novom liste“ a „Na oboch“. Pozrite [Porovnanie dvoch revízií](topic:compare-revisions).

## Panely (vpravo)

Päť kariet:

| Karta | Čo ukazuje |
|---|---|
| {{ui:Vlastnosti}} | Vybranú poznámku: autor, dátumy, namerané hodnoty, stav, predmet, text, komentár, štýl, jej odpovede a jej položka nedostatku. Pri zapnutom kresliacom nástroji a bez výberu: nastavenia, ktoré budú používať nové poznámky. Bez výberu a pri zapnutom {{ui:Vybrať}}: list s číslom, názvom, odkiaľ sa názov prečítal, formátom papiera, mierkou a {{ui:Premenovať list}}. |
| {{ui:Poznámky}} | Každá poznámka v otvorenej sade, s filtrami, a exporty {{ui:CSV}} a {{ui:BCF}}. Pozrite [Zoznam poznámok](topic:markups-list-and-export). |
| {{ui:Zoznam nedostatkov}} | Číslované položky nedostatkov so zodpovednou osobou, termínom a stavom. Pozrite [Zostavenie zoznamu nedostatkov](topic:punch-list). |
| {{ui:Nástroje}} | Súprava nástrojov: uložené nástroje so štýlom. Pozrite [Súprava nástrojov](topic:tool-chest). |
| {{ui:Porovnať}} | Prekrytie dvoch listov. Pozrite [Porovnanie dvoch revízií](topic:compare-revisions). |

## Stavový riadok (dole)

- Vľavo, kde je ukazovateľ na liste, v palcoch (alebo milimetroch, v [Nastaveniach](topic:settings)) na papieri.
- V strede hlásenia: čo nástroj čaká ako ďalšie, čo sa práve uložilo, prečo sa niečo odmietlo. **Prečítajte si ho, keď sa niečo nedeje.**
- Tlačidlo mierky listu („Nekalibrované“, alebo mierka). Kliknutím naň nastavíte mierku. Pozrite [Kalibrácia listu a meranie](topic:calibrate-and-measure).
- Vaše meno („Nastaviť meno“, kým nejaké nezadáte). Kliknutím naň ho zmeníte.

## Na malej obrazovke

Pod šírku približne 1180 pixelov sa panely zužujú a obrázky listov sa zmenšujú. Na obrazovke veľkosti telefónu sa časti radia pod seba: panel nástrojov (posúvajte ho do strán), list, stavový riadok, panely a nakoniec zoznam listov dole. Tablet na šírku si ponecháva celé rozloženie.

---
title: Otvorenie súboru listov a prechod medzi listami
summary: Otvorte jedno PDF alebo viac, alebo začnite s prázdnymi stranami, nájdite listy podľa čísla alebo názvu, priblížte a posúvajte a premenujte list, ak súbor mu priradil zlý názov.
keywords: otvoriť, nový, prázdna strana, prázdny list, náčrt, mriežka, bez názvu, súbor listov, listy, strany, miniatúry, štítky strán, číslo listu, popisové pole, premenovať, prechod, zväčšenie, posun, prispôsobiť, hľadať listy
from: 1e7f4d50
---

## Otvorenie súboru

1. Vyberte {{ui:Otvoriť}} na paneli nástrojov alebo stlačte {{key:Mod+O}}.
2. Vo výbere súborov označte každé PDF zo súboru ({{pick:mac=podržte ⌘ a kliknite na každý súbor|windows linux=podržte Ctrl a kliknite na každý súbor}}, alebo vyberte rozsah pomocou Shift), potom potvrďte.
   Alebo presuňte súbory z {{pick:mac=aplikácie Finder|windows=Prieskumníka súborov|linux=vášho správcu súborov}} do oblasti listu. Počas presúvania sa zobrazí „Pustite PDF a otvorte ich“.
3. Počkajte, kým stavový riadok zobrazí „Otváranie <file>…“. Pri veľkých súboroch sa počíta: „(10 z 60 listov)“.

Výsledok: zoznam {{ui:Listy}} zobrazuje každú stranu každého súboru v poradí, v akom ste ich otvorili, a stavový riadok napíše niečo ako „Otvorené súbory: 3 (listov v súbore: 42).“ Ak súbory už mali komentáre, pridá, koľko ich bolo načítaných.

Ďalšie súbory do súboru listov pridáte neskôr rovnakým spôsobom. Pridajú sa na koniec zoznamu.

## Začatie s prázdnymi stranami

Ak chcete náčrt alebo poznámky bez výkresu, vytvorte prázdne strany namiesto otvorenia PDF:

1. Vyberte {{ui:Nový}} na paneli nástrojov alebo {{ui:Začať prázdnou stranou}} na úvodnej obrazovke, alebo stlačte {{key:Mod+N}}, ak to váš prehliadač dovolí (desktopová aplikácia a Studio to vždy dovoľujú).
2. Vyberte {{ui:Formát papiera}}: Letter, Tabloid alebo ANSI B, ARCH D, ARCH E, A4, A3 alebo A1, a {{ui:Na výšku}} alebo {{ui:Na šírku}}.
3. Vyberte {{ui:Mriežka}}: {{ui:Žiadna}}, {{ui:Bodky}} alebo {{ui:Štvorce}}. Mriežka je po 1/4 in s hrubšou čiarou každý palec na palcovom papieri a po 5 mm s hrubšou čiarou každých 10 mm na metrickom papieri. Vytlačí sa na stranu.
4. Zadajte, koľko {{ui:Strany}} chcete, od 1 do 20, potom vyberte {{ui:Vytvoriť}}.

Výsledok: nové PDF s názvom "Untitled-1.pdf" (potom "Untitled-2.pdf" a tak ďalej) sa otvorí ako každý iný súbor, vytvorený tu na tomto počítači. Funguje s každým nástrojom a {{ui:Uložiť}} stiahne "Untitled-1 (marked up).pdf". MarkupCraft si vaše voľby zapamätá na ďalší raz.

Strany nemajú mierku: stavový riadok píše „Nekalibrované“. Mriežka nie je mierka. Na meranie najprv kalibrujte list alebo vyberte mierku; pozrite [Kalibrácia a meranie](topic:calibrate-and-measure).

Pridať stranu do prázdneho súboru: otvorte jeden z jeho listov a vyberte {{ui:Pridať prázdnu stranu}} pod zoznamom {{ui:Listy}}. Nová strana má rovnaký formát a mriežku a pridá sa na koniec. Ako každú zmenu strany, ani ju nemožno vrátiť späť; pozrite [Tlač a zmena strán](topic:pages-and-printing).

## Ako listy dostávajú názvy

MarkupCraft pomenuje každý list „<číslo listu> — <názov>“, napríklad „A-101 — Pôdorys podlažia“, podľa prvého z týchto zdrojov, ktorý nájde:

1. Názov, ktorý ste napísali pomocou {{ui:Premenovať list}} (nižšie).
2. Štítky strán PDF, ak ich nastavila osoba, ktorá PDF vytvorila (napríklad „A-101“).
3. Popisové pole: MarkupCraft číta text strany a hľadá niečo, čo vyzerá ako číslo listu (A-101, A1.01, M-201A, KA1-1). Uprednostňuje pravý dolný roh, pravý pás a spodný pás a za názov berie najväčší text v ich blízkosti.
4. Inak názov súboru a strana: „Plány — strana 3“.

Ak chcete zistiť, ktorý zdroj sa použil, stlačte {{key:Esc}}, kým nič nie je vybrané a {{ui:Výber}} je zapnutý, potom sa pozrite na {{ui:Vlastnosti}}: „Čítané z“ hovorí „Štítok strany“, „Popisové pole“, „Názov súboru“ alebo „Zadané ručne“.

:::note
Naskenované listy a PDF, v ktorých bolo písmo exportované ako čiary, nemajú text, z ktorého by sa dal čítať. Pomenujú sa podľa súboru a strany, kým ich nepremenujete. MarkupCraft zatiaľ nedokáže čítať text z obrázkov.
:::

## Prechod medzi listami

- Kliknite na list v {{ui:Listy}}.
- Stlačte {{key:PageDown}} pre ďalší list a {{key:PageUp}} pre predchádzajúci, alebo použite šípky v lište pod listom.
- Píšte do {{ui:Hľadať listy}}: časť čísla („A-2“), slovo z názvu („strecha“) alebo názov súboru. Zoznam sa zužuje, ako píšete („4 z 42“). Stlačte {{key:Enter}} na otvorenie prvej zhody. Vymazaním poľa zobrazíte znova všetky listy.

Každý list si zachováva svoje zväčšenie a polohu, kým súbor listov nezatvoríte.

## Zväčšenie a posun

:::mouse
- **Zväčšenie:** otáčajte koliesko nad listom. Zväčšuje sa okolo ukazovateľa. Alebo stlačte {{key:Plus}} a {{key:Minus}} (tiež s {{key:Mod}}), alebo použite tlačidlá zväčšenia. Presné percento zadajte do poľa zväčšenia.
- **Prispôsobenie:** {{ui:Prispôsobiť stranu}} ({{key:Mod+0}}) zobrazí celý list; {{ui:Prispôsobiť šírke}} ({{key:Mod+9}}) vyplní šírku.
- **Posun:** potiahnite stredným tlačidlom (kolieskom), alebo potiahnite pravým tlačidlom, alebo podržte {{key:Space}} a potiahnite, alebo vyberte {{ui:Posun}} ({{key:H}}) a potiahnite. Ak nič nie je vybrané, šípky posúvajú aj list.
:::

:::mac mouse
Na touchpade Macu dvojprstové posúvanie zväčšuje (list neposúva). Na posun podržte {{key:Space}} a potiahnite jedným prstom, alebo prepnite na {{ui:Posun}} pomocou {{key:H}}. Gesto štipnutia zväčšuje v Chrome, Edge a Firefox.
:::

:::touch
- **Zväčšenie a posun:** položte dva prsty na list. Roztiahnite alebo stiahnite ich na zväčšenie okolo bodu medzi nimi a posúvajte ich spolu na posun. Obe veci prebiehajú naraz.
- **Posun jedným prstom:** najprv vyberte {{ui:Posun}}. Pri každom inom nástroji jeden prst kreslí alebo vyberá.
- {{ui:Prispôsobiť stranu}} a {{ui:Prispôsobiť šírke}} sú v lište pod listom.
:::

Zväčšiť môžete ďaleko za celý list a až na 6400 %. List sa prekreslí ostro chvíľu potom, ako prestanete hýbať.

## Záložky

{{ui:Záložky}} v hornej časti panela {{ui:Listy}} zobrazuje záložky (osnovu) PDF, do ktorého patrí otvorený list. Vyberte jednu a prejdite na jej stranu. Ceruzka premenuje záložku a krížik ju odstráni. {{ui:Vytvoriť z listov}} vytvorí jednu záložku na každý list s názvom ako v zozname listov (číslo listu a názov) a {{ui:Pridať pre tento list}} pridá jednu pre list, na ktorom ste. Zmeny sú súčasťou neuložených zmien súboru: {{ui:Uložiť}} ich zapíše do kópie, kde ich zobrazí každý prehliadač PDF.

## Otočenie zobrazenia

Dve tlačidlá otáčania vpravo v lište pod listom otočia zobrazenie o štvrťotáčku na jednu alebo druhú stranu, pre list nakreslený na šírku. Otáča sa iba zobrazenie: PDF a jeho značky zostávajú, ako sú, a ďalší list sa otvorí tak, ako je v jeho PDF (každý list si pamätá svoje otočenie, kým je súbor listov otvorený). Text, ktorý pridáte na otočenom zobrazení, je čitateľný vzpriamene, ako ho vidíte. Ak chcete otočiť samotnú stranu v uloženom PDF, použite {{ui:Strany}}, potom {{ui:Otočiť stranu v smere hodinových ručičiek}}; pozrite [Tlač a zmena strán](topic:pages-and-printing).

## Premenovanie listu

Ak je názov listu zlý alebo chýba:

1. Zobrazte list.
2. Stlačte {{key:Esc}}, kým nič nie je vybrané a nástroj {{ui:Výber}} je zapnutý. {{ui:Vlastnosti}} teraz zobrazujú list.
3. Vyberte {{ui:Premenovať list}}.
4. Napíšte {{ui:Číslo listu}} a {{ui:Názov}}, potom vyberte {{ui:Uložiť}}.

Výsledok: zoznam listov, lišta pod listom a zoznam značiek používajú nový názov a „Čítané z“ hovorí „Zadané ručne“. Premenovanie sa dá vrátiť pomocou {{key:Mod+Z}}.

Ak chcete vrátiť to, čo hovorí súbor, znova otvorte {{ui:Premenovať list}}, vymažte obe polia a vyberte {{ui:Uložiť}}.

Pri uložení sa napísané číslo listu stane štítkom strany v PDF, takže iné čítačky PDF zobrazia „A-101“ aj vo svojom poli strany. Ak dáte číslo ktorejkoľvek strane súboru, každá strana toho súboru dostane štítok v kópii (jej napísané číslo, inak jej starý štítok, inak číslo strany). Napísaný názov sa zachová pre MarkupCraft, ale iné prehliadače ho nezobrazujú.

## Odnesenie PDF do TakeoffCraft alebo jeho priniesenie sem

Keď je TakeoffCraft otvorený na tom istom mieste (laboratórium, Try alebo online aplikácie), lišta pod listom obsahuje {{ui:Otvoriť v TakeoffCraft}}. Otvorí PDF listu v TakeoffCraft na novej karte, tak ako bolo otvorené tu, aby ste mohli merať množstvá. Vaše značky zostanú tu; uložte ich ako obvykle.

Tlačidlo {{ui:MarkupCraft}} v TakeoffCraft robí to isté opačným smerom: PDF sa otvorí tu, ako keby ste vybrali {{ui:Otvoriť}}. Ak prehliadač zablokuje novú kartu, povoľte vyskakovacie okná pre túto stránku a tlačidlo znova vyberte.

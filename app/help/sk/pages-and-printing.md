---
title: Tlač a zmena strán PDF
summary: Tlačte listy so značkami a otáčajte, presúvajte, vkladajte, mažte alebo extrahujte strany otvoreného PDF.
keywords: tlač, tlačiareň, papier, strany, strana, otočiť, zoradiť, presunúť stranu, vložiť, pridať stranu, prázdna strana, zmazať stranu, odstrániť stranu, extrahovať, rozdeliť, operácie so stranami
from: 81832d9b
---

Ponuka {{ui:Strany}} v skupine {{ui:Súbor}} pracuje s PDF, do ktorého patrí otvorený list. Vaše PDF na tomto počítači sa nikdy nemení: zmeny sú súčasťou kópie, ktorú uložíte.

## Tlač

1. Stlačte {{key:Mod+P}}, alebo vyberte {{ui:Strany}}, potom {{ui:Tlačiť…}}.
2. Keď je otvorených viac listov, vyberte, čo sa má vytlačiť: {{ui:Tento list}}, každú stranu tohto súboru, celý súbor listov alebo strany, ktoré napíšete (napríklad `1-3, 5`).
3. Vyberte {{ui:Tlačiť}}. Otvorí sa tlačový dialóg vášho prehliadača: tam vyberte tlačiareň, papier a mierku.

Značky sa tlačia tak, ako vyzerajú na liste: sú nakreslené do strán kópie, ktorá ide do tlačiarne. Komentáre, ktoré vytvorili iné programy, sa vytlačia tak, ako hovorí ich PDF.

:::safari firefox
Ak váš prehliadač nedokáže tlačiť zvnútra stránky, listy sa otvoria ako PDF na novej karte. Vytlačte ich odtiaľ.
:::

## Otočenie strany

Vyberte {{ui:Strany}}, potom {{ui:Otočiť stranu v smere hodinových ručičiek}} alebo {{ui:Otočiť stranu proti smeru hodinových ručičiek}}. Otvorený list sa otočí o štvrťotáčku. Jeho značky zostanú tam, kde boli na výkrese, a text, ktorý ste napísali, sa otočí so stranou, takže stále číta vzpriamene.

## Presun strany

Vyberte {{ui:Strany}}, potom {{ui:Presunúť stranu skôr}} alebo {{ui:Presunúť stranu neskôr}}. Otvorený list si vymení miesto so susedom vo svojom PDF. Jeho značky, mierka a číslo listu idú s ním.

## Vloženie strán

- {{ui:Vložiť strany z PDF…}} vloží každú stranu iného PDF za otvorený list.
- {{ui:Vložiť prázdnu stranu}} pridá prázdnu stranu rovnakej veľkosti za otvorený list, na náčrty a poznámky. V súbore vytvorenom pomocou {{ui:Nový}} má aj mriežku súboru.
- V súbore vytvorenom pomocou {{ui:Nový}} pridá {{ui:Pridať prázdnu stranu}} pod zoznamom {{ui:Listy}} ďalšiu stranu ako ostatné, na koniec. Pozrite [Začatie s prázdnymi stranami](topic:open-a-plan-set#start-with-blank-pages).

Vložené strany dostanú svoje číslo strany ako štítok, kým ich nepremenujete. Pozrite [Premenovanie listu](topic:open-a-plan-set#rename-a-sheet).

## Zmazanie strán

1. Vyberte {{ui:Strany}}, potom {{ui:Zmazať strany…}}.
2. Napíšte čísla strán tohto PDF, napríklad `3` alebo `2-4`. Strana otvoreného listu sa vyplní.
3. Vyberte {{ui:Zmazať strany}}. Ak tieto strany obsahujú značky, MarkupCraft povie koľko a opýta sa znova.

PDF si ponechá aspoň jednu stranu. Ak chcete odstrániť celý súbor, zatvorte súbor listov a otvorte súbory, ktoré ešte potrebujete.

## Extrahovanie strán

Vyberte {{ui:Strany}}, potom {{ui:Extrahovať strany…}} a napíšte strany. Stiahnu sa ako nové PDF s názvom "<file> (pages 1-3).pdf", pričom ich značky sú komentáre, ktoré môžete ďalej upravovať. Otvorený súbor zostane, ako je.

## Dobré vedieť

- **Späť sa zastaví na zmene strany.** {{key:Mod+Z}} vráti späť značky nakreslené po nej, ale nie samotnú zmenu strany ani nič pred ňou. Zatvorte bez uloženia, aby ste začali znova od pôvodného PDF.
- Čísla strán počítajú strany jedného PDF, nie celého súboru listov. Presun strany ju udrží v jej vlastnom súbore.
- Zmenené strany sú neuložená práca: {{ui:Uložiť}} stiahne preusporiadanú kópiu a pri odchode sa najprv opýta.

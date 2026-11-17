---
title: Vyplnenie formulára PDF
summary: Píšte do polí formulára PDF, označujte jeho zaškrtávacie políčka a vyberajte z jeho zoznamov; hodnoty sa uložia priamo do formulára.
keywords: formulár, formuláre, vyplniteľný, vyplniť, vyplnenie, acroform, pole, polia, textové pole, zaškrtávacie políčko, začiarknuť, prepínacie tlačidlo, rozbaľovací zoznam, zoznam, povolenie, žiadosť, kontrolný formulár, formulár predkladaného podkladu, schválenie
from: ab366541
---

Mnohé PDF súbory obsahujú formulár: žiadosti o povolenie, kontrolné zoznamy, krycie listy predkladaných podkladov. MarkupCraft zobrazí polia formulára a ich hodnoty a umožní ich vyplniť. Hodnoty sa vložia do vlastných polí PDF, takže ich Acrobat aj každá iná čítačka PDF zobrazí a zachová.

## Vyplnenie formulára

1. Otvorte PDF. Ak obsahuje formulár, stavový riadok uvedie, koľko má polí.
2. Vyberte {{ui:Vyplniť formulár}} na paneli nástrojov (alebo stlačte {{key:F}}). Každé pole na strane dostane políčko, do ktorého môžete písať.
3. Kliknite na pole a píšte. Označujte zaškrtávacie políčka, vyberajte prepínacie tlačidlá, rozbaľovacie zoznamy a zoznamy. {{key:Tab}} prejde na ďalšie pole.
4. Ak chcete počas vyplňovania posúvať list, potiahnite kdekoľvek mimo polí.
5. Keď skončíte, stlačte {{key:Esc}} alebo vyberte iný nástroj. To, čo ste napísali, zostane na liste.

S nástrojom {{ui:Výber}} dvojité kliknutie na pole zapne {{ui:Vyplniť formulár}} a umiestni vás do tohto poľa.

## Uloženie vyplneného formulára

Vyberte {{ui:Uložiť}}. Kópia, ktorú stiahnete, má vaše hodnoty v jej poliach a vaše poznámky vedľa nich. Stavový riadok uvedie, koľko polí bolo vyplnených.

Ak chcete odovzdať formulár, ktorý nikto nemôže zmeniť, vyberte {{ui:Strany}}, potom {{ui:Uložiť zlúčenú kópiu…}}: hodnoty sa stanú súčasťou strany. Tlač urobí to isté.

## Dobré vedieť

- Pole, ktoré PDF zamkne (len na čítanie), sa nedá zmeniť. Jeho políčko je sivé.
- Text do vlastného limitu dĺžky poľa sa zachová; ďalšie znaky sa nenapíšu.
- Niektoré formuláre prichádzajú bez nakreslenej podoby svojich políčok a tlačidiel a iné programy ich zobrazia prázdne. MarkupCraft ich nakreslí a pri uložení pridá obrázok, takže sa zobrazia všade.
- Krok späť v poli patrí samotnému poľu: stlačte {{key:Ctrl+Z}}, keď do poľa píšete. Krok späť pre poznámky nevráti hodnoty formulára.
- Ak sa váš prehliadač zavrie, hodnoty, ktoré ste napísali, sa vrátia spolu s ostatnou neuloženou prácou.
- Hodnoty napísané znakmi, ktoré štandardné písmo PDF nedokáže zapísať (napríklad čínske), sa uložia a PDF požiada každú čítačku, aby ich vykreslila sama.
- Polia na podpis a tlačidlá nie sú tu vyplniteľné. Na podpis použite {{ui:Pečiatka}} a svoj podpis.
- Hodnoty napísané do formulára sa zatiaľ nezdieľajú v relácii naživo.

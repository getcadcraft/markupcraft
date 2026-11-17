---
title: Truhlica s nástrojmi
summary: Uložte štýlovanú poznámku ako opakovane použiteľný nástroj, kreslite ním a zdieľajte svoju truhlicu s kanceláriou ako súbor.
keywords: truhlica s nástrojmi, nástroje, sada nástrojov, vlastné nástroje, uložené poznámky, obľúbené, kancelárska norma, import, export, zdieľanie, json
from: 7dfa36e0
---

Karta {{ui:Nástroje}} obsahuje vašu **truhlicu s nástrojmi**: poznámky uložené so svojím vzhľadom, pripravené na opätovné kreslenie. Nástroj si zachová druh poznámky, farbu, hrúbku čiary, výplň, nepriehľadnosť, veľkosť textu a predmet, plus text pečiatky, názov skupiny počtu alebo počiatočný text textového poľa či vynášacej popisky.

## Nástroje, s ktorými začínate

Nová truhlica obsahuje šesť nástrojov: "Revízny oblak" (červený), "Oblak otázky" (modrý), "Žltý zvýrazňovač", "Výnosok RFI" (modrý, začína textom "RFI: "), "Overenie na mieste" (oranžová vynášacia popiska s textom "Overenie na mieste.") a "Schválené s poznámkou" (pečiatka).

## Kreslenie s nástrojom

1. Otvorte kartu {{ui:Nástroje}}.
2. Kliknite na nástroj. Vyzerá stlačený a zodpovedajúci nástroj na paneli nástrojov sa zapne.
3. Kreslite ako obvykle. {{ui:Vlastnosti}} hovorí: Kreslenie pomocou "<nástroj>" z truhlice s nástrojmi.

Kým je zapnutý nástroj z truhlice, zmeny, ktoré urobíte vo {{ui:Vlastnosti}} pred kreslením, sa uplatnia na tento nástroj len dočasne, bez zmeny uloženého nástroja ani vašich bežných nastavení. Výber tlačidla na paneli nástrojov alebo stlačenie klávesy nástroja vás vráti k bežnému nástroju.

## Uloženie vlastného nástroja

1. Nakreslite poznámku a upravte jej vzhľad podľa seba: farba, čiara, výplň, predmet, text pečiatky.
2. Vyberte ju.
3. Vyberte {{ui:Uložiť vybrané ako nástroj}} na karte {{ui:Nástroje}} alebo {{ui:Uložiť ako nástroj}} vo {{ui:Vlastnosti}}.
4. Zadajte {{ui:Názov nástroja}} a vyberte {{ui:Uložiť nástroj}}.

Výsledok: nástroj sa pridá na koniec truhlice a karta {{ui:Nástroje}} sa otvorí, aby ho ukázala.

## Pečiatky vytvorené z výberu

Vyberte viac poznámok (alebo obsah strany nástrojom {{ui:Obsah}}) a vyberte {{ui:Uložiť výber ako pečiatku…}} v {{ui:Viac}} alebo v ponuke pravým tlačidlom. Truhlica dostane jednu pečiatku, ktorá ich všetky obsahuje ("Pečiatka: 3 poznámky spolu"). Kliknite na ňu, potom kliknite na ľubovoľný list: poznámky sa umiestnia spolu, vycentrované tam, kam kliknete, ako nové poznámky s vaším menom; obsah strany sa tam nakreslí do strany. Tieto pečiatky sa ukladajú a zdieľajú s truhlicou ako každý iný nástroj.

## Odstránenie nástroja

Vyberte × na konci riadku nástroja a potom {{ui:Odstrániť}}. Poznámky už nakreslené týmto nástrojom zostanú, ako sú.

## Kde sa truhlica uchováva

Truhlica sa ukladá **v tomto prehliadači, na tomto počítači**. Iný prehliadač alebo počítač má vlastnú truhlicu (začínajúcu so šiestimi predvolenými nástrojmi), súkromné okno ju zabudne pri zatvorení a vymazanie údajov tejto stránky v nastaveniach prehliadača ju vymaže.

Ak ju prehliadač neuloží (úložisko je vypnuté alebo plné), stavový riadok hovorí: "Truhlicu s nástrojmi nebolo možné uchovať v tomto prehliadači (úložisko je vypnuté alebo plné). Exportujte ju, aby sa zachovala."

:::safari
Safari môže vymazať uložené údaje webovej stránky, keď ste stránku dlho nepoužívali. Občas exportujte svoju truhlicu, aby ste ju mohli znova importovať.
:::

**Exportujte svoju truhlicu ako zálohu**, najmä po vytvorení nástrojov, na ktorých sa spoliehate.

## Zdieľanie truhlice s kanceláriou

1. Nastavte nástroje raz.
2. Vyberte {{ui:Exportovať}}. Dostanete "MarkupCraft tool chest.json".
3. Uložte ten súbor tam, kde kancelária drží svoje normy, alebo ho rozošlite.
4. Všetci ostatní vyberú {{ui:Importovať}} na karte {{ui:Nástroje}} a zvolia súbor.

Výsledok: "Importovaných 12 nástrojov zo súboru "MarkupCraft tool chest.json"." Nástroje pochádzajúce z tej istej truhlice nahradia svoje staršie kópie, takže import aktualizovanej kancelárskej truhlice tieto nástroje obnoví namiesto ich zdvojenia; nové nástroje sa pridajú. Truhlica obsahuje najviac 500 nástrojov.

MarkupCraft skontroluje každú hodnotu v importovanom súbore a preskočí to, čo nevie použiť ("2 preskočené (nepoužiteľné)"). Súbory, ktoré nie sú truhlicou, sa odmietnu: "Tento súbor nie je truhlica s nástrojmi MarkupCraft." alebo "Tento súbor nie je truhlica s nástrojmi (nie je to JSON)."

Súbory truhlice s nástrojmi z iných programov na označovanie sa nedajú importovať.

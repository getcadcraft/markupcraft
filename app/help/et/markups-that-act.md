---
title: Märgistuse muutmine ülesandeks
summary: Anna märgistusele vastutaja (isik või su abiline), tähtpäev ja link joonise või mudeli elemendiga, millest see räägib, ning vaata, kuidas see sulgub, kui see tõesti muutub.
keywords: ülesanne, ülesanded, vastutaja, abiline, tähtaeg, tähtaeg ületatud, link, sulgub, muutunud, element, joonise ala, märgistused, mis tegutsevad, MCP
from: 9e970202
---

Ülesanne on märgistus, mille peab tegema keegi. See säilitab oma koha lehel ja oma lõime ning lisab pealkirja, vastutaja, tähtpäeva, oleku ja soovi korral lingi asjale, millest see räägib.

## Ülesande tegemine

1. Vali üks või mitu märgistust.
2. Ava sakk {{ui:Ülesanded}} ja vali {{ui:Tee valitud ülesandeks}}.
3. Täida pealkiri (see algab märgistuse tekstist), kellele see on mõeldud ({{ui:Isik}} või {{ui:Abiline}} ja nimi), valikuline tähtpäev ning mida jälgida.

Abilise ülesanne on töö abilisele, kelle ühendasid MarkupCraftiga (vaata [Kasuta MarkupCraftit tehisintellekti abilisega](topic:use-with-ai-assistants)). MarkupCraftil endal ei ole abilist: see ainult loetleb tööd ja võtab vastu abilise vastused. Kui valid {{ui:Määratud}} ja seejärel loendist {{ui:Abiline}}, näed, mis ootab abilist.

## Muutuse jälgimine

- **Märgistuse sees olev joonis.** MarkupCraft hoiab märgistuse kasti sees olevad jooned sellisena, nagu nad praegu on. Kui avad selle lehe uuema redaktsiooni (teise faili sama lehenumbriga või sama lehe asukohaga), vali {{ui:Kontrolli kohe}}: kui jooned sellel alal erinevad rohkem kui natukese võrra, suletakse ülesanne.
- **Mudeli element.** Anna rakendus ja elemendi ID. Su abiline loeb elementi teise rakenduse enda tööriistadega ja teatab sellest käsuga `tasks_check`. Esimene teade jääb algseisundiks; hilisem teade, mis erineb, sulgeb ülesande. Kustutatud element sulgeb selle samuti.
- **Mitte midagi.** Tavaline ülesanne, mille lõpetad käsitsi.

Suletud ülesanne on märgitud Tehtuks, selle märgistus muutub Lõpetatuks ja lõimus on märge, mis muutus. Üks tagasivõtmise samm avab selle uuesti.

**Piirang:** kontroll eeldab, et uuemal redaktsioonil on sama lehe algpunkt ja lehe suurus. Teises suuruses uuesti väljastatud lehte ei sobitata, seega selle ülesanded ei sulgu. Lehed seotakse lehenumbri, muidu lehe asukoha järgi; MarkupCraft ei skaleeri ühte redaktsiooni teise sobitamiseks.

Sama joonise uuesti väljastamine uue kuupäevatempliga või jooned, mis nihkusid vähem kui 1.5 punkti, ei lähe muutusena arvesse. Kui uuemat redaktsiooni pole avatud, jääb ülesanne avatuks ja olekuriba ütleb seda.

## Loend

Sakki {{ui:Ülesanded}} loendit saab filtreerida oleku ja selle järgi, kellele see on mõeldud, sealhulgas {{ui:Tähtaeg ületatud}} järgi. Tähtpäeva ületanud ülesanne kuvatakse probleemide paneelis hoiatusena. {{ui:CSV}} ekspordib loendi.

Ülesanded salvestatakse PDF-i koos märgistusega ja liiguvad Live'i kaudu nagu teisedki märgistuse omadused.

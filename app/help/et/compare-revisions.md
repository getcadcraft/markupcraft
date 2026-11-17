---
title: Kahe revisjoni võrdlemine
summary: Katta vana ja uus väljaanne lehest kahes värvis, joonda need kahe punktiga ja pilvesta muudatused.
keywords: võrdlemine, kate, lehtede katmine, revisjon, erinevus, muudatused, vana uus, joondamine, tagasikontroll, väljaanne, bülletään
from: 62f5d1c5
---

Võrdlus paneb kaks lehte üksteise peale. Ainult vanal lehel olevad jooned kuvatakse punaselt, ainult uuel lehel olevad sinisena ja mõlemal olevad vaigistatud hallina. Värvid on nimetatud lehe all oleval legendil: „Ainult vanal lehel”, „Ainult uuel lehel”, „Mõlemal”.

## Võrdle kahte lehte

1. Ava mõlemad väljaanded. Need võivad olla sama PDF-i lehed või erinevate PDF-ide omad; ava need koos ühe komplektina (vaata [Töö mitme failiga korraga](topic:several-files)).
2. Vali paremal {{ui:Võrdle}} vahekaart.
3. Vali {{ui:Vana leht}} ja {{ui:Uus leht}}. Uus leht algab sellest, millel sa praegu oled. Kui mitu faili on avatud, kuvatakse iga lehe failinimi tema nime järel.
4. Vali {{ui:Võrdle}}.

Tulemus: MarkupCraft näitab uut lehte koos vanaga, legend ilmub ja vahekaart ütleb „Võrreldakse <old> (vana) ja <new> (uus). Märgistused uuel lehel jäävad muudetavaks.”

## Liigu vana ja uue vahel

Lohista liugurit {{ui:Vana ja uus}}. Täiesti vasakul on ainult vana leht, täiesti paremal ainult uus, keskel mõlemad. Edasi-tagasi liigutamine on sageli kiireim viis väikese muudatuse nägemiseks.

## Joonda lehed

Kui kaks väljaannet on trükitud erineva äärise, suuruse või pöördega, näeb kõik muudetuna välja. Paranda see:

**Kahe punktiga (parim):**

1. Vali {{ui:Joonda kahe punkti järgi}}. Vaade näitab ainult vana lehte.
2. Klõpsa teravat detaili, mille leiad mõlemalt lehelt, näiteks tulba ruudustiku ristumiskohta. Vahekaart loendab samme („1/4”).
3. Klõpsa teist detaili, kaugel esimesest, näiteks vastasnurga ruudustiku punkti.
4. Vaade lülitub uuele lehele. Klõpsa esimesele detailile uuesti.
5. Klõpsa teisele detailile uuesti.

Tulemus: „Joondatud: vana leht skaleeritud 100.00%, pööratud 0.00°. Täpsustamiseks nihuta.” Vana leht nihutatakse, skaleeritakse ja pööratakse nii, et see sobib. {{key:Esc}} tühistab punktide valimise. Suurenda iga detaili peal enne klõpsamist, et joondus oleks täpne.

**Nihutamisega:** kasuta nelja noolenuppu jaotises „Joonda” vana lehe liigutamiseks. Vali samm (0.25, 1, 5 või 20 pt; 72 pt on paberil üks toll). Vahekaart ütleb, kui kaugele see on liikunud.

{{ui:Lähtesta}} eemaldab joonduse ja nihutused.

## Ainult muudetud jooned

Joondusnuppude all vali {{ui:Pildikate}} asemel {{ui:Muudetud jooned}}. MarkupCraft võrdleb siis kahe lehe enda jooni, mitte nende pilte: uus leht kuvatakse nagu ta on, ainult vanal lehel olevad jooned punaselt ja ainult uuel lehel olevad sinisena. Joon, mis ainult lühenes, näitab ainult puuduvat osa. Joonda lehed esmalt (vt eespool), sest võrdlus kasutab joondust: leht, mis oli ainult nihkunud, ei näita muudatusi. Olekurida ütleb, kui palju muutus.

See töötab CAD-ist trükitud PDF-ide puhul, kus joonis koosneb joontest. Skaneeritud lehtedel pole võrreldavaid jooni: nende puhul kasuta pildikatet. Fondiga kirjutatud tekst (mitte joonistatud tõmmetena) ei ole võrreldav.

## Märgi muudatused

Võrdlemise ajal oled uuel lehel ja iga tööriist töötab. Joonista pilved muudatuste ümber, kui neid leiad; need kuuluvad uuele lehele ja jäävad alles, kui lõpetad võrdlemise.

{{ui:Pilvesta muudatused}} teeb selle sinu eest: see grupeerib lähestikku asuvad muudetud jooned ja joonistab iga grupi ümber revisjonipilve uuel lehel kommentaariga „Muudetud alates <vana leht>”. Üks {{key:Mod+Z}} eemaldab need kõik; kustuta need, mida ei vaja.

## Võrdle kogu komplekti

Kui uus väljaanne tuleb oma PDF-ina, ava mõlemad PDF-id ja vali vahekaardil {{ui:Võrdle}} {{ui:Võrdle kahte komplekti}}. Vali vana fail ja uus fail ning vali {{ui:Võrdle komplekte}}. Lehed seotakse nende numbri järgi (nagu [slip-sheeting](topic:slip-sheet-a-revised-set)), võrreldakse nende joonte järgi ja loetletakse nii, et kõige rohkem muutunud on esimesena. Vali nimekirjast leht, et võrrelda seda paari valikuga {{ui:Muudetud jooned}}.

{{ui:Pilvesta kõik muudatused}} pilvistab iga muudetud joonte grupi igal muudetud lehel ühe sammuga, mille saab tagasi võtta. Komplektivõrdlus ei joonda lehti enne; leht, mis oli lehel ainult nihkunud, näitab muutust. Võrdle seda paari eraldi ja kasuta {{ui:Joonda kahe punkti järgi}}.

## Lõpeta võrdlemine

Vali {{ui:Lõpeta võrdlemine}} või mine teisele lehele. Joondus jääb meelde samale lehepaarile, kuni sulged komplekti.

## Hea teada

- Võrdlus töötab joonistatud asjade järgi, piksel pikslilt. See ei tea, et joon liikus; see näitab vana asendit ühes ja uut teises värvis.
- Ümber voolanud tekst, muudetud tiitliploki kuupäev või erinev trükistiil ilmuvad samuti muudatustena.
- Skaneeritud leht, mis on võrreldud trükitud lehega, on mürarikas: skaneerimine hägustab ja nihutab jooni.
- Fondiga kirjutatud teksti võrdlemine ja muutuste loend ei ole veel valmis.

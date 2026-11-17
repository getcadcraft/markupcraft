---
title: Otsi teksti joonistelt
summary: Otsi sõnu igalt lehelt, hüppa igale vasteni ja pilvesta need kõik ühe sammuga.
keywords: otsi, otsing, tekst, sõna, sõnad, ctrl f, otsi, märkus, märksõna, selgitus, pilvesta kõik, tõsta esile vasted, ocr, skaneeri, skannitud, loe tekst, vali tekst, kopeeri tekst, tesseract
from: 3435c9eb
---

{{ui:Otsi teksti}} paneeli {{ui:Lehed}} ülaosas otsib sõnu, mis on joonistatud lehtedele endile. Selle all olev {{ui:Otsi lehti}} otsib ainult lehtede nimesid.

## Otsi

1. Vajuta {{key:Mod+F}} või ava {{ui:Otsi teksti}}.
2. Kirjuta sõnad, näiteks `hood` või `verify in field`.
3. Vali {{ui:Kõik lehed}} või {{ui:See leht}} ja märgi {{ui:Tõstutundlik}} või {{ui:Terved sõnad}}, kui vajad.
4. Vajuta {{key:Enter}} või vali {{ui:Otsi}}.

Tulemus: iga vaste on loendis koos oma lehe numbri ja selle ümbritseva tekstiga ning on lehel kollasega märgitud. Vali vaste, et avada selle leht ja suumida sinna.

Fraas leitakse ka siis, kui joonis jagab selle kahe tükki teksti või kahele reale.

## Pilvesta kõik vasted

Vali {{ui:Pilvesta kõik}}. Revisjonipilv ümbritseb iga loendis oleva vaste igal lehel ning kommentaariks on „Leitud: <sinu sõnad>“. Üks {{key:Mod+Z}} eemaldab need kõik.

## Loe skannitud lehe tekst (OCR)

Skannitud leht on ainult pilt: kuni selle sõnu pole loetud, pole midagi leida. Kui loenduses on öeldud, et lehtedel pole teksti, vali selle all {{ui:Loe tekst (OCR)…}} või {{ui:Leheküljed}} › {{ui:Loe tekst (OCR)…}}.

1. Vali leheküljed: see leht, faili iga lehekülg või kõigi avatud failide iga lehekülg.
2. Vali teksti keel. {{ui:Lisaks inglise keel}} loeb ka inglise sõnu.
3. Vali {{ui:Loe tekst}}. Riba näitab, millist lehekülge loetakse; {{ui:Peata}} lõpetab käigu ja jätab juba loetud leheküljed alles.

Tulemus: sõnu saab leida, valida ja kopeerida nagu iga teist teksti. Kõik toimub sinu arvutis: midagi ei saadeta kuhugi. See töötab ilma ühenduseta rakenduses Studio ning brauseris pärast seda, kui rakendus on võrguta kasutamiseks salvestatud (inglise keel ja sinu liidese keel) või keel on kord kasutatud. Lehed, millel on juba tekst, jäetakse nii nagu on.

Salvestamisel lähevad sõnad PDF-i nähtamatu tekstina pildi taha, eraldi sinu märgistustest, et teised PDF-programmid saaksid neid samuti otsida ja kopeerida. Kuni salvestad, näidatakse faili salvestamata.

## Vali ja kopeeri tekst

Vali {{ui:Veel}} › {{ui:Vali tekst kopeerimiseks}}. Lohista ühest sõnast teise, et valida nende vahel olevad sõnad; lohista tühjalt paberilt, et valida kastis olevad sõnad; või tee topeltklõps ühel sõnal. {{key:Mod+A}} valib kõik sõnad lehel. {{key:Mod+C}} kopeerib need, säilitades read. Iga muu tööriist lõpetab selle.

## Hea teada

- Joonistel, mille tähed on joontena joonistatud, pole samuti teksti; pildina lugemine toimib kõige paremini trükitud tekstil, nagu skannitud raamat või spetsifikatsioon.
- Lugeja on Tesseract, mis on rakendusse sisse ehitatud koos inglise ja rakenduse keelte andmetega. Esimesel käivitamisel see laaditakse (umbes 6 MB, teise keele korral rohkem).
- Kui hästi see loeb, sõltub skannist: puhtad 300 dpi lehed loetakse peaaegu sõna-sõnalt; vanad, kahvatud või madala eraldusvõimega skannid jätavad rohkem sõnu vahele.
- Loend näitab esimesi 500 vastet; {{ui:Pilvesta kõik}} pilvestab kuni 2000.
- Vasted tühjendatakse, kui sulged komplekti, ja ühe faili puhul, kui muudad selle lehti.

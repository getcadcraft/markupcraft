---
title: Lehe lingid
summary: Muuda märgistus hüppama teisele lehele ning seo iga lehe viide nagu 3/A-501 selle lehe ja vaatega ühe käiguga partiilingiga.
keywords: hüperlink, link, lingid, hüppa, lehe viide, detaili viide, lõike viide, 3/A-501, mine lehele, tagasi, automaatne link, partiilink, partiilingid, tiitelplokk, lehenumber, lehe nimi, vaade, detail, nimeta ümber, nummerda ümber, lisa, pdf-link
from: 86a17c37
---

Lehe link viib sind märgistuselt komplekti teisele lehele: detailimullist detailini, märkmest lehele, millele see viitab.

## Seo märgistus lehega

1. Vali märgistus.
2. Vali {{ui:Omadustes}} {{ui:Link lehele}} all leht.

Märgistuse paremas ülanurgas ilmub väike nool. Selle järgimiseks hoia all {{key:Mod}} ja klõpsa märgistusel või vali see ja vali {{ui:Omadustes}} {{ui:Mine …}}. {{key:Alt+Left}} viib tagasi lehele, kust tulid.

Link nimetab lehte selle numbri järgi, nii et see töötab ka pärast komplekti uuesti avamist või uue väljaande lehte asendamist: see avab selle numbriga kõige uuema lehe. Kui see leht pole avatud, ütleb olekuriba seda.

## Seo kõik lehe viited korraga

Vali {{ui:Lehed}} › {{ui:Partiilingid…}} või {{ui:Seo lehtede viited…}} all {{ui:Otsi teksti}} lehtede paneeli ülaosas {{ui:Lehed}}.

1. **Kontrolli lehenumbreid.** MarkupCraft loetleb iga avatud lehe numbri ja nime, mille ta luges lehe tiitelplokist (või lehe sildilt), ning sellest, kust see tuli. Paranda need, mis on valed, ja kirjuta number sinna, kus seda ei leitud (tiitelplokk, mille number on joonistatud joontena, ei sisalda loetavat teksti). Seejärel vali {{ui:Leia viited}}. Sinu parandused on üks tagasivõtmise samm ja need saavad salvestatud PDF-i lehesiltideks.
2. **Vaata loend üle.** MarkupCraft loeb iga lehe teksti viidete leidmiseks, näiteks „3/A-501“, „5 / A501“, „DETAIL 2 ON A-501“, mull, kus on „3“ ja selle all „A-501“, või lihtsalt „A-501“ märkmes, ning loeb iga lehe vaadete pealkirju (detailinumber lehenumbri all või suur number koos pealkirjaga kõrval). Loend koosneb kolmest osast:
   - {{ui:Seostatakse}}: iga viide, leht, kuhu see viib, ja vaade sellel lehel. Eemalda linnuke igalt, mida ei soovi. Kui vaadet ei leitud (viide vaatele 7 lehel, millel on vaated 1 kuni 6), vali vaade kõrval olevast loendist või jäta {{ui:Terve leht}}.
   - {{ui:Pole seotud}}: lehenumbrid, mida ühelgi avatud lehel pole, koos sellega, mitu viidet nimetab igaühte. Vali leht, mida iga üks tähendab (näiteks leht, mis nummerdati ümber), ja iga viide sellele numbrile seotakse sinna. Või jäta seostamata.
   - Mitu viidet on juba seotud ja viivad õigesse kohta. Need jäetakse nii, nagu on.
3. Vali {{ui:Loo lingid}}.

Iga viide saab õhukese sinise kasti, mis on lehelink. {{key:Mod}}+klõps sellel avab lehe suumituna vaatele. Üks {{key:Mod+Z}} eemaldab need kõik.

Koodid, mis ainult näevad välja nagu lehenumbrid, näiteks R-19 või W12X26, jäetakse välja: viide peab olema kujuga nagu komplekti enda lehenumbrid. Lehe oma number tiitelplokis ja vaadete pealkirjades ei ole kunagi viide. Skaneeritud lehtedel pole loetavat teksti: kasuta enne {{ui:Loe tekst (OCR)…}} või seo viited ükshaaval.

## Käivita uuesti, kui komplekt muutub

Partiilinkide käivitamine on lubatud nii sageli, kui soovid:

- **Leht lisati**, näiteks lisa A-601-ga: ava selle fail ja käivita Partiilingid uuesti. Viited A-601-le, mis varem ei seostunud, seostuvad nüüd.
- **Leht nummerdati ümber**: paranda selle number 1. sammus. Partiilinkide tehtud lingid, mis ei leia enam oma lehte, loetakse loendisse {{ui:Pole seotud}}; vali leht üks kord ja kõik järgnevad sellele. Lingid, mis on liikunud teise vaatesse, uuendatakse.
- Lingid, mille tegid käsitsi {{ui:Omadustes}}, ei muudeta kunagi.

## Salvestatud PDF-is

Link samas PDF-is olevale lehele kirjutatakse ka PDF-lingina, nii et teised vaatajad hüppavad sinna ka klõpsuga. Link vaatega avab selle vaate teises vaatajas (PDF-i „fit rectangle“ hüpe); ilma vaateta link avab terve lehe. Lingid komplekti teises failis olevale lehele töötavad ainult MarkupCraft-is.

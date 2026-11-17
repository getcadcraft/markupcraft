---
title: Muuda lehe enda jooni, pilte ja teksti
summary: Teisalda, muuda suurust, värvi või kustuta see, mida PDF ise joonistab, teisalda joone punkte, asenda pilt ja muuda tekstirea sõnu.
keywords: lehe sisu, põhisisu, muuda PDF-i, muuda joonist, vektor, tee, kujund, joon, pilt, asenda pilt, tekst, sõnad, font, punktid, sõlmed, teisalda, muuda suurust, värvi, kustuta, sisutööriist
from: 471d457e
---

Märgistused asetsevad lehe peal. {{ui:Sisu}} tööriist töötab lehe endaga: joonte, piltide ja tekstiridadega, mida PDF joonistab. Sinu PDF-i ei muudeta sellel arvutil kunagi: muudatused on salvestatava koopia osa.

## Vali, mida muuta

1. Vali {{ui:Sisu}} rühmas {{ui:Vali}} või vajuta {{key:B}}.
2. Jaotises {{ui:Omadused}} all {{ui:Vali}} lülita {{ui:Kujundid}}, {{ui:Pildid}} ja {{ui:Tekst}} sisse või välja. Valida saab ainult sisselülitatud liike, nii et saad valida hõivatud joonise teksti, ilma et haaraksid selle jooned.
3. Klõpsa millelegi, et see valida. Shift+klõps lisab või eemaldab. Mitme objekti valimiseks lohista kast tühja paberi kohal: paremale lohistamine võtab selle, mis on kastis täielikult; vasakule lohistamine võtab selle, mida kast puudutab.

Lõigatud alas olev kujund valitakse ainult seal, kus see paistab.

## Teisalda, muuda suurust, värvi, kustuta

- **Teisalda:** lohista valitud objekti või vajuta nooleklahve (suuremate sammude jaoks hoia all Shift). Shifti all lohistamine liigutab sirgelt kas risti või sirgelt üles.
- **Muuda suurust:** lohista ühte kaheksast ruudust valiku ümber. See kasvab või kahaneb vastasküljelt. Proportsioonide hoidmiseks hoia all Shift.
- **Muuda värvi:** joonte ja kujundite puhul sea jaotises {{ui:Omadused}} {{ui:Joone värv}}, {{ui:Täitevärv}} ja {{ui:Joone laius (pt)}}.
- **Kustuta:** vajuta {{key:Delete}} või vali {{ui:Kustuta lehelt}}.
- **Tagasivõtmine:** iga muudatus on üks samm: {{key:Mod+Z}} võtab selle tagasi, {{key:Mod+Y}} paneb tagasi.

{{ui:Pane tagasi nagu oli}} võtab kõik valitud objektide muudatused korraga tagasi; {{ui:Pane see leht tagasi nagu oli}} teeb seda kogu lehel.

## Kopeeri, lõika ja kleebi lehe sisu

Vali {{ui:Sisu}} tööriistaga jooned, pildid või tekst, seejärel:

- {{key:Mod+C}} kopeerib, {{key:Mod+X}} lõikab (kopeerib ja eemaldab need lehelt), {{key:Mod+D}} paneb koopia nende kõrvale.
- {{key:Mod+V}} kleebib lehe sisuna, originaali kõrvale või kursori asukohta (nagu [Sätted](topic:settings) ütlevad); {{key:Mod+Shift+V}} kleebib täpselt samasse kohta. Kleepida saab teisele lehele, teise avatud PDF-i või selle brauseri teisele MarkupCrafti vahelehele.
- {{ui:Redigeeri}} rühma menüü ja paremklõpsu menüü sisaldavad samu käske.

Kleebitud osa säilitab jooned joontena, sõnad oma fondis sõnadena ning pildid piltidena. See on üks tükk: teisalda seda, muuda suurust ruutude abil, kustuta või võta {{key:Mod+Z}}-ga tagasi. See saab osaks lehest salvestatavas koopias. Viimati kopeeritu, kas märgistused või lehe sisu, on see, mida {{key:Mod+V}} kleebib.

Koopia sisu lõigatakse valiku ümber olevasse kasti: see, mida MarkupCraft ei saa koopiast välja võtta (vt allpool) ja mis jääb sellesse kasti, tuleb kaasa.

## Teise joone punktide teisaldamine

Topeltklõps joonel või kõveral (või vali see ja {{ui:Muuda punkte}}). Selle punktid kuvatakse ruutudena ja kõvera käepidemed ringidena. Lohista punkt või käepide; punkt toob kaasa talle lähimad käepidemed, nii et kõver säilitab oma kuju. Vajuta {{key:Esc}} või klõpsa joonest eemal, kui oled lõpetanud.

Ristkülikutel pole lohistatavaid punkte: muuda nende suurust nende ümber olevate ruutude abil.

## Asenda pilt

Vali pilt ja vali {{ui:Asenda pilt…}}, seejärel vali PNG-, JPEG- või SVG-fail (või PDF: selle esimene leht). Uus pilt täidab vana koha, säilitades oma proportsioonid.

## Muuda tekstirea sõnu

Topeltklõps tekstireal, kirjuta uued sõnad jaotisesse {{ui:Sõnad}} ja vajuta {{key:Enter}}. Sõnad kirjutatakse rea enda fondis ja suuruses ning rida säilitab oma pikkuse, nii et sellele järgnev tekst ei liigu.

:::note
Enamik PDF-e sisaldab igast fondist ainult neid tähti, mida kasutavad. Kui kirjutad tähe, mida faili koopia fondis pole, prindib MarkupCraft selle tähe Helveticas ja ütleb seda. {{ui:Omadused}} näitab, millised tähed failis olevas fondis on.
:::

Teksti muudetakse rea kaupa; see ei voola järgmisele reale.

## Mida MarkupCraft jätab nii nagu on

- **Skannitud leheküljed** on üks pilt: võid pilti teisaldada, muuta suurust, asendada või kustutada, kuid selle sisu ei saa muuta.
- **Krüptitud ja allkirjastatud PDF-id:** lehe muutmine rikuks allkirja, seega {{ui:Sisu}} tööriist ütleb seda ega muuda midagi. Märgistused töötavad siiski.
- **Lõikealad, objektid, mis on jagatud lehe sisu kahe osa vahel, ja värvisegud, mis täidavad terve ala, jäävad samaks**; MarkupCraft ütleb, miks, kui proovid.
- **Sõnad standardfondis, mida PDF ei kirjelda** (näiteks Timesi font ilma tähelaiusteta failis), ei saa muuta, sest MarkupCraft ei saaks rea vahesid säilitada. Rida saab siiski teisaldada.

## Pane märgistused lehele

Jooned, ristkülikud, ellipsid, murdjooned, pilved ja pliiatsijooned, mille joonistasid märgistustena, võivad saada lehe osaks: vali need ja vali {{ui:Pane lehele}} jaotises {{ui:Omadused}}. Tekst, templid, pildid ja läbipaistvad värvid jäävad märgistusteks.

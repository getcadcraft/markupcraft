---
title: Ava lehtede komplekt ja liigu lehtede vahel
summary: Ava üks PDF või mitu või alusta tühjade lehtedega, leia lehti numbri või nime järgi, suumi ja nihuta ning nimeta leht ümber, kui fail selle valesti annab.
keywords: ava, uus, tühi leht, tühi lehekülg, visand, ruudustik, nimetu, lehtede komplekt, lehed, leheküljed, pisipildid, leheküljesildid, lehe number, tiitelplokk, nimeta ümber, navigeeri, suumi, nihuta, mahuta, otsi lehti
from: 1e7f4d50
---

## Ava komplekt

1. Vali tööriistaribast {{ui:Ava}} või vajuta {{key:Mod+O}}.
2. Failivalijas vali kõik komplekti PDF-id ({{pick:mac=hoia ⌘ all ja klõpsa igal failil|windows linux=hoia Ctrl all ja klõpsa igal failil}} või vali vahemik Shifti abil) ja kinnita.
   Või lohista failid {{pick:mac=Finderist|windows=Failiuurijast|linux=oma failihaldurist}} lehe alale. Lohistamise ajal ilmub „Lohista PDF-id avamiseks“.
3. Oota, kuni olekuriba ütleb „Avamine: <file>…“. Suurte failide puhul loeb see: „(10 lehte 60-st)“.

Tulemus: loend {{ui:Lehed}} näitab iga faili iga lehekülge avamise järjekorras ning olekuriba ütleb midagi sellist nagu „Avatud 3 faili (komplektis 42 lehte).“ Kui failidel olid juba kommentaarid, lisab see, mitu neist loeti.

Failide lisamiseks komplekti hiljem ava need samamoodi. Need lisatakse loendi lõppu.

## Alusta tühjade lehtedega

Visandamiseks või märkmete tegemiseks ilma jooniseta tee PDF-i asemel tühjad lehed:

1. Vali tööriistaribast {{ui:Uus}} või algusekraanil {{ui:Alusta tühja leheküljega}} või vajuta {{key:Mod+N}}, kus su brauser seda lubab (töölaua rakendus ja Studio lubavad alati).
2. Vali {{ui:Paberi formaat}}: Letter, Tabloid või ANSI B, ARCH D, ARCH E, A4, A3 või A1, ning {{ui:Portree}} või {{ui:Maastik}}.
3. Vali {{ui:Ruudustik}}: {{ui:Puudub}}, {{ui:Punktid}} või {{ui:Ruudud}}. Ruudustik on iga 1/4 tolli järel, tollipaberil iga tolli järel jämedama joonega, ning iga 5 mm järel, meetriliste paberite puhul iga 10 mm järel jämedama joonega. See on lehel trükitud.
4. Sisesta, mitu {{ui:Leheküljed}} soovid (1 kuni 20), ja vali {{ui:Loo}}.

Tulemus: uus PDF nimega „Untitled-1.pdf“ (siis „Untitled-2.pdf“ jne) avaneb nagu iga teine fail, loodud siin selles arvutis. Kõik tööriistad töötavad sellega ja {{ui:Salvesta}} laadib alla „Untitled-1 (marked up).pdf“. MarkupCraft mäletab sinu valikuid järgmiseks korraks.

Lehtedel pole mõõtkava: olekuriba ütleb „Kalibreerimata“. Ruudustik ei ole mõõtkava. Mõõtmiseks kalibreeri leht või vali enne mõõtkava; vt [Kalibreeri ja mõõda](topic:calibrate-and-measure).

Tühja komplekti lehe lisamiseks ava üks selle lehtedest ja vali {{ui:Lisa tühi leht}} loendi {{ui:Lehed}} all. Uuel lehel on sama paber ja ruudustik ning see läheb lõppu. Nagu iga lehemuudatus, ei saa seda tagasi võtta; vt [Prindi ja muuda PDF-i lehti](topic:pages-and-printing).

## Kuidas lehed nime saavad

MarkupCraft nimetab iga lehe „<lehe number> — <pealkiri>“, näiteks „A-101 — Korrusplaan“, esimese järgmistest, mille leiab:

1. Nimi, mille kirjutasid käsitsi {{ui:Nimeta leht ümber}} abil (allpool).
2. PDF-i enda leheküljesildid, kui PDF-i loonud inimene need määras (näiteks „A-101“).
3. Tiitelplokk: MarkupCraft loeb lehe teksti ja otsib midagi lehe numbri sarnast (A-101, A1.01, M-201A, KA1-1), eelistades paremat alumist nurka, paremat riba ja alumist ala, ning võtab selle lähedal oleva suurima teksti pealkirjaks.
4. Vastasel juhul failinimi ja leht: „Plaanid — lk 3“.

Et näha, mida kasutati, vajuta {{key:Esc}}, kuni midagi pole valitud ja {{ui:Vali}} on sisse lülitatud, ning vaata {{ui:Omadused}}: „Loetud allikast“ ütleb „Lehekülje silt“, „Tiitelplokk“, „Failinimi“ või „Käsitsi määratud“.

:::note
Skannitud lehtedel ja PDF-idel, kus kiri on eksporditud joontena, pole teksti, mida lugeda. Neid nimetatakse faili ja lehe järgi, kuni nad ümber nimetad. MarkupCraft ei oska veel pildilt teksti lugeda.
:::

## Liigu lehtede vahel

- Klõpsa lehel loendis {{ui:Lehed}}.
- Vajuta {{key:PageDown}} järgmise lehe jaoks ja {{key:PageUp}} eelmise jaoks või kasuta nooli lehe all olevas ribas.
- Kirjuta kasti {{ui:Otsi lehti}}: osa numbrist („A-2“), pealkirja sõna („katus“) või failinimi. Loend kitseneb kirjutamise ajal („4 / 42“). Vajuta {{key:Enter}}, et avada esimene vaste. Tühjenda kast, et näha kõiki lehti uuesti.

Iga leht säilitab oma suumi ja asukoha, kuni sulged komplekti.

## Suum ja nihutamine

:::mouse
- **Suum:** keera hiireratast lehe kohal. See suumib kursori ümber. Või vajuta {{key:Plus}} ja {{key:Minus}} (ka koos {{key:Mod}}-ga) või kasuta suumi nuppe. Täpse protsendi saad sisestada suumikasti.
- **Mahuta:** {{ui:Mahuta leht}} ({{key:Mod+0}}) näitab kogu lehte; {{ui:Mahuta laiusele}} ({{key:Mod+9}}) täidab laiuse.
- **Nihuta:** lohista keskmise nupuga (ratas) või parema nupuga, või hoia all {{key:Space}} ja lohista, või vali {{ui:Nihuta}} ({{key:H}}) ja lohista. Kui midagi pole valitud, liigutavad lehte ka nooleklahvid.
:::

:::mac mouse
MacBooki puuteplaadil suumib kahe sõrmega kerimine (see ei keri lehte). Nihutamiseks hoia all {{key:Space}} ja lohista ühe sõrmega või lülitu {{ui:Nihuta}} klahviga {{key:H}}. Näpistusžest suumib Chrome'is, Edge'is ja Firefoxis.
:::

:::touch
- **Suum ja nihutamine:** aseta kaks sõrme lehele. Lahuta või suru kokku, et suumida nende vahelise punkti ümber, ja liiguta neid koos, et nihutada. Mõlemad toimuvad korraga.
- **Nihutamine ühe sõrmega:** vali kõigepealt {{ui:Nihuta}}. Mis tahes muu tööriistaga joonistab või valib üks sõrm.
- {{ui:Mahuta leht}} ja {{ui:Mahuta laiusele}} on lehe all olevas ribas.
:::

Võid suumida välja kaugemale kui kogu lehele ja sisse kuni 6400%. Leht joonistatakse pärast liikumise lõpetamist hetk hiljem uuesti teravaks.

## Järjehoidjad

{{ui:Järjehoidjad}}, paneeli {{ui:Lehed}} ülaosas, näitab avatud lehe kuuluva PDF-i järjehoidjaid (sisukorda). Vali üks, et minna selle leheküljele. Pliiatsi ikoon nimetab järjehoidja ümber ja ristike eemaldab selle. {{ui:Koosta lehtedest}} teeb ühe järjehoidja lehe kohta, nimedega nagu lehtede loend need näitab (lehe number ja pealkiri), ning {{ui:Lisa sellele lehele}} lisab ühe järjehoidja lehe kohta, millel oled. Muudatused on faili salvestamata töö osa: {{ui:Salvesta}} kirjutab need koopiasse, kus need näeb iga PDF-vaataja.

## Pööra vaadet

Kaks pöördenuppu lehe all oleva riba paremas servas pööravad vaadet veerandpöörde kumbas tahes suunas, külili joonistatud lehe jaoks. Pöörab ainult vaade: PDF ja selle märgistused jäävad samaks ning järgmine leht avaneb nii, nagu on tema PDF (iga leht mäletab oma pööret, kuni komplekt on avatud). Pööratud vaatel lisatud tekst loeb sirgelt, nii nagu näed. Lehe pööramiseks salvestatud PDF-is kasuta {{ui:Leheküljed}}, seejärel {{ui:Pööra lehekülge päripäeva}}; vt [Prindi ja muuda PDF-i lehti](topic:pages-and-printing).

## Nimeta leht ümber

Kui lehe nimi on vale või puudub:

1. Näita lehte.
2. Vajuta {{key:Esc}}, kuni midagi pole valitud ja tööriist {{ui:Vali}} on sisse lülitatud. {{ui:Omadused}} näitab nüüd lehte.
3. Vali {{ui:Nimeta leht ümber}}.
4. Sisesta {{ui:Lehe number}} ja {{ui:Pealkiri}} ning vali {{ui:Salvesta}}.

Tulemus: lehtede loend, lehe all olev riba ja märgistuste loend kasutavad kõik uut nime ning „Loetud allikast“ ütleb „Käsitsi määratud“. Ümbernimetamist saab tagasi võtta {{key:Mod+Z}}-ga.

Faili sisu juurde tagasi minemiseks ava {{ui:Nimeta leht ümber}} uuesti, tühjenda mõlemad kastid ja vali {{ui:Salvesta}}.

Salvestamisel muutub käsitsi sisestatud lehenumber PDF-i leheküljesildiks, nii et teised PDF-vaatajad näevad oma leheküljekastis „A-101“. Kui annad failis mõnele leheküljele numbri, saab iga selle faili lehekülg koopias sildi (sinu sisestatud number, muidu vana silt, muidu lehekülje number). Käsitsi sisestatud pealkiri jääb MarkupCrafti jaoks alles, kuid teised vaatajad seda ei näita.

## Too PDF TakeoffCraftile või too see siia

Kui TakeoffCraft on avatud samas kohas (labor, Try või veebirakendused), on lehe all olevas ribas {{ui:Ava TakeoffCraftis}}. See avab lehe PDF-i TakeoffCraftis uuel vahelehel, nii nagu see avati siin, et saaksid sellel koguseid mõõta. Sinu märgistused jäävad siia; salvesta need tavapäraselt.

TakeoffCrafti nupp {{ui:MarkupCraft}} teeb sama vastupidises suunas: PDF avaneb siin, nagu oleksid valinud {{ui:Ava}}. Kui brauser blokeerib uue vahelehe, luba selle saidi jaoks hüpikaknad ja vali nupp uuesti.

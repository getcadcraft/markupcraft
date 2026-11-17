---
title: Veaotsing
summary: Teated, mida MarkupCraft näitab, ja mida nende puhul teha, ning parandused asjadele, mis ei näi töötavat.
keywords: probleem, viga, ei tööta, abi, teade, ei avane, ei saa salvestada, parool, kaitstud, mõõtmine keelatud, kalibreeri, võrguühenduseta, tühi, aeglane, kadunud märgistused, küsimärgid
from: bb650b39
---

Enamik probleeme selgitatakse ekraani allosas olevas olekuribas. Loe seda esmalt.

## Failide avamine

**„MarkupCraft avab PDF-faile. „x“ ei ole PDF.“**
Valisid või lohistasid midagi muud. Avatakse ainult PDF-id. Ekspordi joonised kõigepealt oma CAD-programmist PDF-ina.

„nimi“ vajab avamiseks parooli. Ava kaitsmata koopia.
PDF on parooliga kaitstud. Palu saatjalt kaitsmata koopia või ava see PDF-programmis, kus parool on sulle teada, ja salvesta koopia ilma parooli.

„nimi“ ei saanud PDF-ina lugeda (…)
Fail on rikutud või tegelikult ei ole see PDF (katkine allalaadimine, e-posti manus, mis on katkenud). Laadi see uuesti alla. Kui teised PDF-programmid saavad seda avada, kasuta nende funktsiooni „salvesta nimega“, et teha puhas koopia, ja ava see.

**„Mõned failid ei avanenud“**
Kui avad mitu korraga, loetleb see kast failid, mis ebaõnnestusid, ja põhjuse. Ülejäänud on avatud.

**„PDF-lugejat ei saanud laadida: …“**
PDF-mootorit ei saanud alla laadida. Veebis: laadi leht uuesti ja proovi uuesti; kontrolli, kas tulemüür või sisublokeerija ei blokeeri saiti. Võrguühenduseta: MarkupCraft ei ole selle brauseri jaoks salvestatud võrguühenduseta kasutamiseks (ülaosas olev riba ei ütle „Võrguühenduseta valmis“). Ühenda võrku, vali {{ui:Salvesta võrguks}} ja oota „Võrguühenduseta valmis“. Vaata [Töö võrguühenduseta](common:offline).

**„Mõned märkused võivad ekraanil kaks korda kuvada“ või „Märkuste täiendavaid andmeid ei saanud lugeda“**
Faili olemasolevad kommentaarid on ebatavalised. Need avatakse siiski nii hästi, kui MarkupCraft suudab; enne nende kasutamist kontrolli neid. Salvestamine töötab ikka.

**Lehel on vale nimi või „leht 3“**
Vaata [Kuidas lehed nime saavad](topic:open-a-plan-set#how-sheets-get-their-names). Skannitud lehtedel pole teksti, mida lugeda; kasuta {{ui:Nimeta leht ümber}}.

**Sama lehed ilmuvad kaks korda**
Sama fail avati kaks korda. Vali {{ui:Sulge}} (salvesta kõigepealt, kui vaja) ja ava komplekt uuesti.

## Joonistamine ja valimine

**Klõpsates lehel ei juhtu midagi**
Vaata, milline tööriist on tööriistaribal vajutatud, ja loe olekuriba. Tööriistadega {{ui:Ristkülik}}, {{ui:Ellips}} ja {{ui:Pilv}} ei joonistu klõps ilma lohistamata: lohista. Tööriistadega {{ui:Murdjoon}}, {{ui:Hulknurk}}, {{ui:Vabakäeline pilv}} ja {{ui:Pindala}} lisatakse punkte: lõpeta topeltklõpsu või {{key:Enter}}ga.

**„Hulknurk vajab vähemalt 3 punkti.“ (või 2 murdjoone puhul)**
Klõpsa enne lõpetamist rohkem punkte.

**„Sisestust ei olnud, seega teksti ei lisatud.“**
Tekstikastid ja selgitused jäävad alles ainult siis, kui neis on tekst. Joonista uuesti ja kirjuta enne mujale klõpsamist.

**„Kaks punkti on samad. Klõpsa kahte erinevat punkti.“**
Joonte, nooltega, pikkuste ja kalibreerimise puhul peavad kaks otsa olema üksteisest eemal. Lohista või klõpsa kaks korda erinevatesse kohtadesse.

**Märgistust ei saa liigutada ega kustutada; sellel on hall katkendlik kast**
See on kirjutuskaitstud kommentaar, mis tuli failiga kaasa (näiteks teksti esiletõst). MarkupCraft hoiab seda nii, nagu see on: sellele saab ainult vastata. Olekuriba ütleb „kirjutuskaitstud märgistusi hoitakse nii, nagu need on failis“.

**Klahvid kirjutavad kasti tähti, selle asemel et tööriistu valida**
Kursor on tekstikastis (vastus, väli jaotises {{ui:Omadused}}, lehe otsing). Klõpsa esmalt lehe tühjal alal või vajuta {{key:Esc}}, kui muudad märgistuse teksti.

**Tühik ei nihuta lehte või nooleklahvid ei tee midagi**
Klõpsasid just tööriistariba nuppu, nii et klaviatuur on veel selle juures. Lohista keskmise hiireklahviga või klõpsa lehte üks kord, kui {{ui:Vali}} on sees, ja proovi uuesti. Vaata ka [Klaviatuur ja hiir](topic:keyboard#when-a-key-does-nothing).

**Puuteekraanil nipsutamine jättis jälje**
Lohistamise tööriist (pliiats, pilv, ristkülik) käivitus enne teise sõrme saabumist ja lõppes enne tühistamist. Vajuta {{ui:Võta tagasi}}. Pane mõlemad sõrmed korraga alla, kui soovid suumida.

## Mõõtmine

**„Kalibreeri see leht esmalt: vali kaks punkti teadaolevast kaugusest või vali selle mõõtkava. Seejärel mõõda.“**
Iga leht vajab enne {{ui:Pikkus}} või {{ui:Pindala}} kasutamist oma mõõtkava. MarkupCraft on lülitunud tööriistale {{ui:Kalibreeri}}: klõpsa teadaoleva mõõtme kahte otsa ja sisesta selle pikkus või klõpsa olekuribal mõõtkava nuppu ja vali mõõtkava. Vaata [Lehe kalibreerimine ja mõõtmine](topic:calibrate-and-measure).

**„See ei ole pikkus, mida MarkupCraft mõistab.“**
Sisesta see kujul `24'-0"`, `12' 6 1/2"`, `7.2 m` või `900 mm`. Vaata [Ühikud, pikkused ja mõõtkavad](topic:units-and-scales).

**Mõõtmised on natuke või täiesti valed**
- PDF-il, mis ei ole täissuuruses, annab eelseadistatud mõõtkava valed mõõtmised. Kalibreeri hoopis pika teadaoleva mõõtme järgi.
- Tuhandete eraldaja loeti komakohaks: `1,200 mm` tähendab 1,2 mm. Sisesta `1200 mm`.
- Suumi sisse, kui klõpsad otstele.
- Joonis ei pruugi olla mõõtkavas („NTS“).

**„Vali esmalt loenduse rühm ja seejärel Shift+klõps märgisel, et see eemaldada.“**
Vali {{ui:Vali}}, klõpsa loenduse rühma, vali {{ui:Loenda}} uuesti ja {{key:Shift}}+klõps punktil.

## Salvestamine

**„See PDF on kaitstud (krüpteeritud), seega märgistatud koopiat ei saa kirjutada.“**
Fail keelab muudatused. Palu kaitsmata koopia. Samal ajal saad märgistuste loendi siiski eksportida CSV- või BCF-vormingus.

**„PDF-kirjutajat ei saanud laadida: …“**
Tavaliselt oled võrguühenduseta ja rakendust ei ole võrguühenduseta kasutamiseks salvestatud (ülaosas olevas ribas pole „Võrguühenduseta valmis“). Su märgistused on ikka vahelehel: jäta see avatuks, ühenda võrku ja vali {{ui:Salvesta}} uuesti. Seejärel vali {{ui:Salvesta võrguks}}, et see järgmisel korral võrguühenduseta töötaks; salvestatud koopia sisaldab PDF-kirjutajat.

**„Ei saanud salvestada: <fail>“**
Kast näitab põhjust. Su märgistused on ikka vahelehel. Proovi uuesti; kui see kordub, ekspordi CSV, et kommentaare ei kaotaks, ja teata teatest.

**Valisin Salvesta, aga saabus ainult üks fail**
Su brauser blokeeris lisaallalaadimised. Otsi teadet aadressiribalt ja luba sellel saidil alla laadida mitut faili, seejärel salvesta uuesti.

**Ma ei leia salvestatud faili**
See läks su brauseri allalaadimiste kausta. Ava brauseri allalaadimiste loend (Chrome’is ja Edge’is {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; Firefoxis ja Safaris tööriistaribal olev allalaadimise nupp), et näha, kuhu see läks. Vaata [Brauserid ja arvutid](common:browsers).

**Mõned tekstid näevad teistes PDF-vaatajates välja „?“**
Läänemaailma tähestikust väljaspool olevad tähemärgid kuvatakse koopias „?“-na. Salvestamise teade loeb need kokku. Vaata [Märgistatud PDF-i salvestamine](topic:save-the-marked-up-pdf).

**Templil on homne (või eilne) kuupäev**
Templi kuupäevad on UTC-s. Vaata [Templid ja kleepuvad märkmed](topic:stamps-and-notes).

## Töö võrguühenduseta

**Võrguühenduseta nupp ütleb „Salvestamine ebaõnnestus“**
Mõned rakenduse failid ei laadinud alla. Kontrolli ühendust ja vajuta nuppu uuesti; see loendab „Salvestan N/M“ kuni „Võrguühenduseta valmis“.

**Võrguühenduseta nupp ütleb „Võrguühenduseta pole saadaval“**
See brauseriaken ei saa hoida võrguühenduseta koopiat: privaatne aken või arvuti, mille poliitika seda blokeerib. Ava MarkupCraft tavalises aknas ja proovi uuesti.

**Võrguühenduseta on rakendus vanem versioon**
Võrguühenduseta koopia on versioon, mille sa salvestasid. Kui oled võrgus, klõpsa „Võrguühenduseta valmis“ ja vali „Salvesta uuesti (lae alla uusim versioon)“. Ruumi vabastamiseks vali „Eemalda võrguühenduseta koopia“. Vaata [Töö võrguühenduseta](common:offline).

**Abi ei avane**
Vajuta {{key:F1}} (Macis koos **fn**-klahviga) või vali {{ui:Abi}} ülaosa ribal. See töötab ka võrguühenduseta.

## Kadunud asjad

**Minu märgistused on kadunud pärast vahelehe sulgemist või laadimist**
Ava MarkupCraft sama brauseri abil uuesti: see pakub salvestamata töö tagasi teatega „Taastan sinu töö?“. Vali {{ui:Taasta}} ja salvesta PDF. Koopiaid hoitakse kuni 30 päeva; privaatne aken või saidi andmete kustutamine ei jäta midagi alles. Vaata [Töö taastamine](common:recover).

**Minu nimi, tööriistaseaded või tööriistakast on kadunud**
Need hoitakse ainult selles brauseris ja need kustutati (saidi andmed kustutati, privaatne aken, teine brauser või arvuti, või Safari puhastas saidid, mida ei ole pikka aega külastatud). Sisesta nimi uuesti ja impordi eksporditud kast. Vaata [Mis jääb sellesse brauserisse](topic:browser-storage).

**„Tööriistakasti ei saanud sellesse brauserisse salvestada (salvestus on välja lülitatud või täis). Ekspordi see, et seda alles hoida.“**
Brauser keeldub selle saidi andmete salvestamisest (privaatrežiim, salvestus blokeeritud seade või poliitika poolt, või täis). Ekspordi kast pärast muutmist ja impordi järgmisel korral.

## Kuvamine ja kiirus

**Leht on hetkeks udune**
MarkupCraft näitab kiiret ja karedat renderdust, kui suumid või nihutad, ning joonistab selle hetke pärast peatamist terava uuesti.

**Kõik on suure komplekti puhul aeglane**
Sulge teised rasked vahelehed, ava korraga vähem faile ning väldi suumimist maksimumini suurtel lehtedel. Vaata [Mitme faili samaaegne töö](topic:several-files#big-sets).

**Leht on tume ja heledad jooned**
Oled teemal {{ui:Mudel}}. Vali ülaosa ribal {{ui:Paber}}, et saada tumedad jooned valgel. Su märgistusi ja salvestatud PDF-i see ei mõjuta.

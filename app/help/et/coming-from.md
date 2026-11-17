---
title: Tulles teistest märgistustarkvaradest
summary: Kuidas lauaarvuti PDF-märgistusprogrammi harjumused vastavad MarkupCraftile ja millised erinevused üllatavad inimesi.
keywords: lülitumine, üleminek, migreerimine, tuttav, lauaarvuti PDF-märgistus, tööriistakast, märgistuste loend, kate, seansid, profiil, kiirklahvid, erinevused
from: c8f323e1
---

Kui vaatad joonistusi läbi Bluebeam Revus (või kommenteerid PDF-e mõnes muus lauaarvuti PDF-programmis), tundub enamik MarkupCraft'ist tuttav: pilved, selgitussildid, tööriistakast, märgistuste loend, staatused koos vastustega, kalibreeritud mõõtmised, lehe katted. Suurim erinevus on failide käsitlemine, seega loe järgmist jaotist isegi siis, kui jätad ülejäänu vahele.

## Viis olulist erinevust

1. **Salvestamine loob uue faili.** MarkupCraft töötab brauseris ega saa kirjutada üle PDF-i sinu kettal. {{ui:Salvesta}} laadib alla „<name> (marked up).pdf” ja algne jääb samaks. Järgmisel korral ava „(marked up)” koopia ja korista vanad koopiad ise ära.
2. **PDF salvestatakse, kui salvestad.** Kuni selleni hoiab selle brauseri taastekoopia sinu märgistusi kokkujooksmise või suletud vahekaardi korral ning MarkupCraft pakub selle järgmisel korral tagasi. See on turvavõrk: salvesta PDF, et läbivaatus alles jääks.
3. **Sinu profiil elab brauseris.** Su autorinimi, tööriistade sätted ja tööriistakast hoitakse selles brauseris selles arvutis. Teine brauser või arvuti algab tühjalt ja saidi andmete kustutamine kustutab need. Ekspordi tööriistakast varukoopiaks. Vaata [Mis jääb sellesse brauserisse](topic:browser-storage).
4. **Jagatud seansse veel ei ole.** Elavat jagatud läbivaatuse seanssi ega pilveprojekti ei ole. Läbivaatus liigub PDF-is: salvesta, saada koopia, järgmine inimene vastab ja salvestab.
5. **Mõõtkava on lehe kaupa ja ainult lehe kaupa.** Lehe sees ei ole vaateaknaid ega „rakenda see mõõtkava kõigile lehtedele” võimalust. Kalibreeri iga leht, millel mõõdad.

## Harjumus harjumuse kaupa

| Oled harjunud | MarkupCraftis |
|---|---|
| Pisipiltide paneel, lehekülgede sildid | {{ui:Lehed}} vasakul. Nimed tulevad lehekülgede siltidest või loetakse tiitliplokilt; paranda need {{ui:Nimeta leht ümber}} abil. |
| Mitme PDF-i avamine komplektina | Ava need kõik korraga; need muutuvad üheks loendiks. Komplektifaili ei salvestata: järgmisel korral ava samad PDF-id. |
| Tööriistakast tööriistakomplektidega | {{ui:Tööriistad}} vahekaart: üks kast brauseri kohta, salvestatud tööriistad stiili ja teemaga. Jaga {{ui:Ekspordi}} ja {{ui:Impordi}} abil JSON-failina. Teiste programmide tööriistakomplektide faile ei saa importida. |
| Omaduste paneel | {{ui:Omadused}} vahekaart: staatus, teema, kommentaar, stiil, vastused ja punktikirje ühes kohas. |
| Veergudega märgistuste loend | {{ui:Märgistused}} vahekaart filtritega lehe, autori, staatuse ja tüübi järgi. Ekspordi CSV või BCF. Kohandatud veerge ega PDF-i ega töövihiku kokkuvõtet veel ei ole. |
| Staatus ja ülevaatuse olek | {{ui:Staatus}}: Avatud, Aktsepteeritud, Tagasi lükatud, Lõpetatud. Kohandatud staatuste komplekte ei ole. Salvestatakse standardsete ülevaatusolekutena. |
| Vastused märgistusel | Lõim „Vastused” {{ui:Omadused}} all, kuhu logitakse staatuste muudatused. Saadetud vastust ei saa muuta. |
| Kalibreeri, siis pikkus, pindala, loendus | {{ui:Kalibreeri}}, {{ui:Pikkus}} ({{key:M}}), {{ui:Pindala}} ({{key:Q}}, annab pindala ja ümbermõõdu), {{ui:Loenda}} ({{key:U}}). Nurka, raadiust, mahtu, murdjoone pikkust ega väljalõikeid veel ei ole. |
| Lehekülgede katted | {{ui:Võrdle}} vahekaart: punane vana, sinine uus, joondamine kahe punktiga. Automaatset „dokumentide võrdlemise” pilvistamist ei ole. |
| Tempel | {{ui:Tempel}} kuue sisseehitatud templiga ja kohandatud sõnastusega, allkirjastatud sinu nime ja kuupäevaga. Pildi- ja allkirjatempleid veel ei ole. |
| Punktide või probleemide jälgimine | {{ui:Punktinimekiri}} vahekaart: nummerdatud kirjed määratud isiku, tähtaja ja staatusega; CSV eksport. |
| Reaalajas koostöö seanss | Pole veel saadaval. Anna salvestatud PDF edasi. |
| Lamestamine | Pole veel valmis. Märgistused jäävad kommentaarideks, mida teised vaatajad saavad näidata ja printida. |
| Märgistuste kihid | Pole veel valmis. Kommentaaride sortimiseks kasuta teemasid, autoreid ja loendi filtreid. |
| Hüperlingid lehtede vahel | Pole veel valmis. |
| Tühikuklahv nihutamiseks, ratas suumimiseks | Sama: hoia {{key:Space}} all ja lohista; ratas suumib kursori juures. Ratas ei keri kunagi lehte. |

## Klahvid, mis erinevad

Paljud ühetähelised klahvid on sellised, nagu oodata võiks, kuid kontrolli neid enne, kui sõrmed teevad seda sinu eest:

- {{key:K}} on {{ui:Selgitussilt}} ja {{key:Q}} on {{ui:Pindala}}. Kui oled harjunud Q-ga selgitussiltide jaoks, käivitab see siin ala.
- {{key:C}} on kastipilv {{ui:Pilv}}; {{key:Shift+C}} on {{ui:Vabakäeline pilv}}.
- {{key:M}} on {{ui:Pikkus}}, {{key:U}} on {{ui:Loenda}}, {{key:Y}} on {{ui:Murdjoon}}, {{key:G}} on {{ui:Hulknurk}}, {{key:I}} on {{ui:Markeerija}}.
- {{key:Mod+D}} dubleerib valiku (brauseri järjehoidja asemel).
- {{key:Mod+Plus}} ja {{key:Mod+Minus}} suumivad lehte, mitte brauseri lehekülge.
- Iga klahvi saab muuta: vaata allpool.

:::tip
Kui su sõrmed tunnevad Bluebeam Revut, vali {{ui:Sätted}} › {{ui:MarkupCraft}} › {{ui:Menüüd, klahvid ja hiir}} alt menüü stiiliks {{ui:PDF-i ülevaatus}}: menüüriba (Fail, Redigeeri, Vaade, Dokument, Märgistus, Mõõda, Aken) ülevaatustööriistade rea kohal, {{key:Q}} selgitussildi jaoks, {{key:H}} markeerija jaoks ja {{key:N}} hulknurga jaoks ning mõõtmised klahviga {{key:Alt+Shift}} ja tähega. Ka seal saab iga klahvi muuta. Vaata [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).
:::

Täielik loend on jaotises [Klaviatuur ja hiir](topic:keyboard).

## Asjad, mis toimivad teisiti, kui arvad

- **Tööriistad jäävad sisse.** Pärast pilve joonistad ikka pilvi. {{key:Esc}} üks kord tühistab valiku, kaks korda naaseb {{ui:Vali}} juurde.
- **Tekst ja selgitussildid vajavad teksti.** Kui lõpetad ilma midagi kirjutamata, märgistust ei lisata. Märkmed jäävad tühjaks.
- **Mõõtmised vajavad kõigepealt mõõtkava.** {{ui:Pikkus}} ja {{ui:Pindala}} lülituvad kalibreerimata lehel {{ui:Kalibreeri}} peale ja tulevad pärast tagasi.
- **Teistes programmides tehtud kommentaarid.** Ristkülikud, ellipsid, jooned, murdjooned, hulknurgad, tindijooned, tekstikastid ja kleepuvad märkmed, mis on tehtud mujal, muutuvad MarkupCraftis muudetavateks märgistusteks ja kirjutatakse salvestamisel ümber MarkupCraft'i viisil (nende välimus võib natuke muutuda). Teksti esiletõstud, teiste programmide templid ja muud erilised liigid jäävad ainult lugemiseks: sellele saab vastata, kuid seda ei saa muuta.
- **Märgid väljaspool Lääne-Euroopa tähti** prinditakse salvestatud PDF-is „?”-ina. Vaata [Märgistatud PDF-i salvestamine](topic:save-the-marked-up-pdf).
- **Templi kuupäevad** kasutavad UTC-aega, nii et Ameerikas hilisõhtul tehtud tempel võib näidata homset kuupäeva.
- **Mõõtmised kantakse üle** standardsete mõõtmiskommentaaridena ja iga kalibreeritud leht säilitab oma mõõtkava, nii et programm, mis loeb PDF-i mõõtmisi, saab need tavaliselt näidata. Täpne käitumine sõltub sellest programmist.

## Kasuta mõlemat

Saad edasi-tagasi liikuda. Mujal tehtud kommentaarid avanevad MarkupCraftis ning „(marked up)” PDF avaneb teistes PDF-programmides, kus on nähtavad kõik märgistused, vastused ja staatused. Ainult MarkupCraft loeb tagasi punkti vastutava isiku ja tähtaja ning kirje staatuse; need hoitakse failis MarkupCraft'i jaoks.

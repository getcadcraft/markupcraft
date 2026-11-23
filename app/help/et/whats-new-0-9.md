---
title: Uudised versioonis 0.9 (varem)
summary: Märkmed ja lauapind, mida ei prindita kunagi, krüpteeritud privaatsed märkmed ja puhas koopia kliendile, partiilingid kogu joonisekomplektile, kaarefunktsioon kümne meetodiga, teise kolleegi jälgimine Live-seansis ning parandus, mis jättis kustutatud märgistused salvestatud PDF-i.
keywords: uudised 0.9, varasem väljaanne, uudised, 0.9, väljaande märkmed, muudatuste logi, märkmed, lauapind, privaatsed märkmed, parool, krüpteeritud, peida märkmed, näita märkmeid, puhas koopia, hetktõmmis, partiilingid, lehe viited, lehtede linkimine, tiitelplokk, lehe number, lisa, ümbernumbrimine, pdf-link, kaar, kaare meetodid, kolmepunktikaar, raadius, jälgi, jälgi mind, live, klassivaade, inimeste loend, kustutatud märgistus, tööriistavihjed, vahekaartide pealkirjad, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, ülesanne, ülesanded, vastutaja, tähtpäev, tähtaeg ületatud, kontrolli kohe, mis muutus, redaktsioonid, võrdle, häälmärkus, otsus, punane parandus, vastusefail, koostaja, abiline, mcp, probleemid, keeled, sisendseadmed, puuteplaat, tööriistariba read, omaduste ruudustik, uuendus
from: aa3dfeb8
---

See on see, mis muutus MarkupCraft 0.9-s võrreldes versiooniga 0.8.1. Põhimõte on, et sinu töömärkmed jäävad kliendile antavalt lehelt välja ning kogu joonisekomplekti saab linkida ühe käiguga.

## Uus

### Märkmed, lauapind ja privaatsed märkmed

- **Lauapind.** Iga lehe ümbrus on laud: kõik lehe kõrvale joonistatud, kirjutatud või kleebitud on märkus ja seda ei prindita kunagi. Vali {{ui:Näita lauapinda}}, et ruumi saamiseks välja suumida, või {{ui:Tee lauapinnale pilt}}, lohista kast ja seejärel {{ui:Lauapinnale}}, et panna joonise osast pilt lehe kõrvale. Hetktõmmis on pilt ega muutu koos lehega. Vaata [Märkmed, lauapind ja privaatsed märkmed](topic:notes-and-pasteboard).
- **Märkmete näitamine ja peitmine.** Iga märgistus võib olla märkmeks: määra {{ui:Uued märgistused on}} vahekaardil {{ui:Märkmed}} või {{ui:See märgistus on}} paneelil {{ui:Omadused}}. {{key:Shift+H}} või lehe all olev {{ui:Märkmed}} lüliti peidab ja näitab kõiki märkmeid korraga. Märkmeid ei prindita ning need jäetakse välja lamedatest koopiatest, loenditest ja eksportidest; teised PDF-lugejad neid ei näita. Salvestatud PDF hoiab märkmed alles, kui avad selle järgmine kord MarkupCraftis.
- **Privaatsed märkmed.** Vali {{ui:Sea paroolifraas}} ja tee seejärel märgistus {{ui:Privaatne märkus}}. See krüpteeritakse failis paroolifraasiga, mis on vähemalt 10 märki pikk, ja taastamist ei ole: keegi, sealhulgas meie, ei saa seda avada ilma paroolifraasita. {{ui:Lukusta}} peidab privaatsed märkmed; {{ui:Jää sellel seadmel lahti lukustatuks}} on vaikimisi väljas.
- **Salvesta puhas koopia.** {{ui:Salvesta puhas koopia}} eemaldab kõik märkmed, privaatsed märkmed ja kõik lauapinnal oleva. Kasuta seda faili jaoks, mis läheb kliendile.

### Seo terve komplekt

- **Partiilingid.** Vali {{ui:Leheküljed}} › {{ui:Partiilingid…}} või {{ui:Seo lehtede viited…}} paneelil {{ui:Lehed}} all, kus on {{ui:Otsi teksti}}. Samm 1 loetleb iga lehe numbri ja nime, nagu need on loetud selle tiitelplokilt; paranda valed. Samm 2 loetleb leitud viited, näiteks `3/A-501` või `DETAIL 2 ON A-501`. {{ui:Lingitakse}} näitab iga viite lehte ja vaadet, {{ui:Pole lingitud}} näitab numbreid, mida ühelgi avatud lehel pole, ja {{ui:Loo lingid}} teeb kõik ühe tagasivõtmise sammuna. Käivita uuesti pärast lisa või ümbernumbrimist; käsitsi tehtud linke ei muudeta kunagi. Vaatega link salvestatakse PDF-lingina, nii et teised lugejad avavad ka detaili. Vaata [Lehtede lingid](topic:sheet-links).

### Joonistamine

- **Kaar, kümme meetodit.** Tööriist {{ui:Kaar}} ({{key:O}}) avab nüüd lehe kohal kasti {{ui:Kaare meetod}}, kus on kümme viisi kaare joonistamiseks; nurka, pikkust, raadiust ja suunda saab klõpsata või sisestada. Vaata [Joonista kaar kümmel viisil](topic:draw-an-arc).

### Koostöö

- **Jälgi kolleegi.** Live-seansis vali inimese nime kõrval {{ui:Jälgi}} ja sinu vaade liigub koos tema omaga; kui ise nihutad või suumid, jälgimine peatub. Korraldaja saab valida {{ui:Palu kõigil mind jälgida}}. Inimeste loend näitab iga osaleja värvi, nime, lehte, millel ta on, ja tema viimase muudatuse aega. Vaata [Jälgi teist kolleegi Live-seansis](topic:follow-in-live).

## Igas rakenduses

- Tööriistavihjed on Bootstrapi vihjed, algusvihje saab sulgeda, vahekaardiriba kerib, kui see üle ääre läheb, ning brauseri vahekaartide pealkirjad on kujul `<document> — MarkupCraft | CadCraft`.
- Mitme jaotisega paneel avab ühe ja sulgeb teised (kursori kõrval olev lukk hoiab ühe lahti); selle võib {{ui:Sätted}}-lülitiga välja lülitada.
- Iga rakendus algab vaikimisi kogumikuga teegi objektidest.
- Kaalu- ja temperatuuriühikud on saadaval ühikute sätetes.

## Parandatud

- **Eemaldatud märgistused ei ole enam salvestatud PDF-is loetavad.** Salvestamine eemaldas varem kustutatud või ümber kirjutatud annotatsiooni lehelt, aga jättis objekti koos tekstiga faili. Nüüd salvestamine need objektid kustutab. Varasemate ehitustega salvestatud failid sisaldavad neid, kuni need uuesti salvestad.

## Ausad piirangud

- Partiilinke proovisime oma testkomplektidel. Päris komplektid joonistavad mullid paljul viisil, seega võib kliendi komplektil mõni vaade jääda märkamata. Skannitud lehed vajavad enne {{ui:Loe tekst (OCR)…}}.
- Märkmeid, privaatseid märkmeid ja lauapinda testiti peata brauseris ja oma failidega, mitte suure päris vektorkomplektiga ega päris kahe inimese Live-seansis. Parooli vahetamist ei ole veel tehtud. Versioonid enne 0.9 märkmeid ei näita.
- Klassivaade on inimeste loend; seda pole proovitud päris õpetaja ja õpilastega.
- Muud keeled peale inglise keele on masinmustandid, kuni emakeelne kõneleja need loeb.
- Windowsi installerid pole koodiga allkirjastatud (Rohkem teavet, seejärel Käivita siiski); macOS-i kettapilt pole notariseeritud (parem klõps, seejärel Ava).

## Varem: 0.8 ja 0.8.1

See on see, mis muutus MarkupCraft 0.8 ja 0.8.1 puhul võrreldes versiooniga 0.7. Suurim uus asi on see, et märgistus võib olla ülesanne, mida teeb keegi või sinu enda abiline ja mis sulgub ise, kui joonis tegelikult muutub.

### Uus

**Märgistused, mis tegutsevad**

- **Tee märgistus ülesandeks.** Vali üks või mitu märgistust, ava vahekaart {{ui:Ülesanded}} ja vali {{ui:Tee valitud ülesandeks}}. Ülesandel on pealkiri, inimene või sinu ühendatud abiline, kes selle täidab, valikuline tähtpäev ja olek; see hoiab oma koha lehel ja oma lõime. Vaata [Tee märgistus ülesandeks](topic:markups-that-act).
- **Ülesanded, mis sulguvad ise.** Ülesanne võib jälgida joonist oma märgistuse sees. Ava lehe uuem redaktsioon ja vali {{ui:Kontrolli kohe}}: kui sel alal olevad jooned on muutunud rohkem kui vähegi, märgitakse ülesanne Tehtuks, selle märgistus muutub Lõpetatuks ning lõimes olev märkus ütleb, mis muutus. Uus kuupäevatempel või jooned, mis on liikunud vähem kui 1,5 punkti, ei lähe arvesse. Ülesanne võib selle asemel jälgida mudeli elementi: sinu abiline teatab elemendi käsuga `tasks_check` ning hilisem erinev teade või kustutatud element sulgeb ülesande. Üks tagasivõtmise samm avab selle uuesti.
- **Leia töö.** Filtreeri vahekaardi {{ui:Ülesanded}} loendit oleku ja selle järgi, kellele see on mõeldud, sealhulgas {{ui:Tähtaeg ületatud}}; vali {{ui:Määratud}}, seejärel {{ui:Abiline}}, et näha, mis ootab sinu abilist. Ülesanne, mille tähtpäev on möödas, kuvatakse hoiatusena paneelil Probleemid. {{ui:CSV}} eksportib loendi. Ülesanded salvestatakse PDF-i koos märgistusega ja liiguvad Live-s nagu teised märgistuse omadused.

**Mis muutus, lihtsa loendina**

- **Loetle muudatused.** Ava vahekaart {{ui:Võrdle}}, seejärel {{ui:Võrdle tervet komplekti}}, vali varasem ja hilisem fail ning vali {{ui:Loetle muudatused}}. Loend algab arvuga ja käib läbi iga muudetud lehe, suurim muutus esimesena: kus lehel see on, kui suur see on (reaalsetes ühikutes ning kalibreeritud lehel ka paberi tollides), kas jooni lisati või eemaldati, mitu märgistust seal asub ning milline sõna ilmus või kadus. {{ui:Kopeeri loend}} paneb selle lõikepuhvrisse ja {{ui:CSV}} kirjutab ühe rea iga muutuse kohta. Vaata [Loetle, mis muutus redaktsioonide vahel](topic:what-changed-in-words).

**Häälmärkmed ja otsused**

- **Häälmärkmed.** Vahekaardil {{ui:Märkmed}} vali {{ui:Salvesta häälmärkus}}, seejärel {{ui:Lõpeta salvestamine}}; salvestus lõpeb iseenesest kahe minuti pärast. Märkus kinnitatakse lehe keskele, sina lohistad selle sinna, kuhu see kuulub, ja kirjutad pealdise paneelil {{ui:Omadused}}; {{ui:Esita}} loendis mängib selle. Salvestus on salvestatud PDF-i sisse.
- **Otsused.** {{ui:Kinnita otsus}} kirjutab lehele ühe või kaks lauset. Kui see asendab varasema otsuse, vali see {{ui:See asendab}} all: vana jääb alles, märgitakse Asendatuks ja osutab uuele. Üks tagasivõtmise samm võtab selle tagasi. Vaata [Kinnita häälmärkmed ja otsused lehel](topic:voice-notes-and-decisions).

**Punane parandus redaktsiooniks**

- **Saada ja vasta.** Vahekaardil {{ui:Ülesanded}} ava {{ui:Punane parandus redaktsiooniks}}, kirjuta redaktsioon, millega märgistused on võrreldud, ja vali {{ui:Ekspordi punase parandusega fail}}. Saad faili `.redline.json`, kus on üks kirje iga avatud märgistuse kohta: leht, asukoht (lehe murdosana, et teises suuruses uuesti joonistatud leht ikka sobiks), sõnad, autor, lõim ja selle ülesanne. Muudatusi joonistav inimene vastab failis `.redline-answers.json` olekuga Aktsepteeritud, Tagasi lükatud või Tehtud; {{ui:Laadi vastusefail…}} annab igale märgistusele selle oleku ja koostaja märkuse ühe tagasivõtmise sammuna. Vaata [Saada märgistused koostajale punase parandusena](topic:redline-to-revision).

**AI-abilised**

- **Rohkem tööriistu.** CadCraft Studio kaudu ühendatud abiline saab loetleda ülesandeid (`tasks_list`), luua või muuta ühte (`task_set`), ülesande eemaldada (`task_clear`), kontrollida ühte uuema redaktsiooni või elemendi vastu (`tasks_check`) ja lugeda kahe avatud plaanikomplekti vahelisi muudatusi lihtsa loendina (`revisions_changes`). Ta saab ainult need tööriistad, mille märkisid lüliti Abilised all, ja iga muudatus on üks tagasivõtmise samm. Vaata [Kasuta MarkupCraftit AI-abilisega](topic:use-with-ai-assistants).

### Igas rakenduses

- **Keeled.** CadCraft Studio toetab nüüd 54 keelt. Kümme on uued: leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, svahiili ja usbeki. Kõik muud kui inglise keeled on masinmustandid, kuni emakeelne kõneleja need loeb.
- **Sisendseadmed.** {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Sisendseadmed}} määrab, mida teevad puuteplaat, hiire külgnupud, pliiats, sõrmepuudutused, 3D-hiir, mängukontroller või MIDI-kontroller, kõigi rakenduste jaoks või ainult selle jaoks. Kuni sa midagi muudad, töötab iga seade nagu varem. Vaata [Kasuta puuteplaati, 3D-hiirt või kontrollerit](common:input-devices).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub valikuid {{ui:Mähi}} (vaikimisi), {{ui:2 rida}} ja {{ui:1 rida}}, et joonisele jääks rohkem ruumi. Vaata [Paigutage paneelid](common:arrange-panels).
- **Omaduste ruudustik.** Märgistuse stiiliväljad kasutavad jagatud ruudustikku, mille kategooriad on kokku volditavad ning millel on sildi- ja väärtuse veerud.
- **Probleemide paneel.** Rakenduse hoiatused, näiteks aegunud ülesanne, koonduvad ühte Probleemide paneeli.
- **Live ja lisandmoodulid.** Live-seansse kirjeldatakse peatükis [Tööta koos Live-seansis](common:work-together-live); sinu kontoga seotud lisandmoodulite loend on peatükis [Lisandmoodulid ja sinu kontoga seotud loend](common:addons-basics).
- **Ühenda oma AI.** CadCraft Studio on sinu enda abilise keskus: ühenda üks kord kõigi kaheksa rakenduse jaoks. Rakendustes endis ei ole ühtegi AI-d.

### Parandused versioonis 0.8.1

- **Studio saab töö ajal keelt vahetada.** Varem jäid töölauarakendus ja pakitud väljaanded inglise keelde. See pole veel igal platvormil testitud: anna teada, kui keel ei muutu.
- Studio 0.8 paigaldustele pakutakse versiooni 0.8.1 jaotises {{ui:Sätted}} › {{ui:Uuendused}}.

### Pole selles versioonis veel

- **Pole koodiga allkirjastatud.** Windowsi installerid ja macOS-i .dmg ei kanna veel allkirja. Windowsis, kui SmartScreen installeri peatab, vali {{ui:Rohkem teavet}}, seejärel {{ui:Käivita siiski}}. Macis tee CadCraft Studio peal parem klõps ja vali {{ui:Ava}}. Poe versioonid on ootel.
- **Ühenda oma AI on mõnes kohas pooleli.** Ühe klõpsuga ühendamine Studio sees, hostitud konnektor brauseri abilistele ja oma API-võti Studio sees ei ole selles väljaandes lubatud. Ülesannete tsükkel on testitud, aga veel mitte päris abilisega.
- **Ülesannete kontrollid nõuavad sama lehesuurust.** Teises suuruses uuesti joonistatud leht ei sobi, seega selle ülesanded ei sulgu. Lehed seotakse lehenumbri järgi, muidu lehe asukoha järgi.
- **Häälmärkmed on ainult salvestised.** Transkriptsiooni ei ole ning abiline näeb märkuse pikkust, autorit ja pealdist, mitte heli. Salvestamist testiti näiva mikrofoniga peata brauseris; päris mikrofon telefonis, tahvelarvutis või sülearvutis on veel kontrollimata.
- **Arvutuslehed ja põhjused PDF-is** hoitakse faili privaatses kirjes. Vanem MarkupCraft ignoreerib seda kirjet ja eemaldab selle järgmisel salvestamisel, seega ava ja salvesta sellised failid versiooniga 0.8 või hilisemaga.
- **Koostaja pool punasest parandusest.** CadCraft, mis loeb punase parandusega faili ja sellele vastab, pole veel valmis.
- **Muud keeled.** Tamili keele puhul ületab rakenduse riba 528 px.

Kõik muu on peatükis [Mis pole veel valmis](topic:not-built-yet). Eelmise väljaande kohta vaata [Uudised versioonis 0.7](topic:whats-new-0-7).

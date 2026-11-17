---
title: Mis on uut versioonis 0.9
summary: Märkmed ja lauapind, mis ei trüki kunagi, krüpteeritud privaatsed märkmed ja puhas koopia kliendile, partiilingid terve joonisekomplekti jaoks, kaare tööriist kümne meetodiga, teise ülevaataja järgimine Live-s ning parandus, mis hoiab kustutatud märgistused salvestatud PDF-is.
keywords: mis on uut, 0.9, väljalaskemärkmed, muudatuste logi, märkmed, lauapind, privaatsed märkmed, paroolifraas, krüpteeritud, peida märkmed, näita märkmeid, puhas koopia, pilt, partiilingid, lehe viited, lingi lehed, tiitliplokk, lehenumber, lisa, ümbernummerdamine, pdf-link, kaar, kaare meetodid, kolmepunktiline kaar, raadius, jälgi, jälgi mind, live, klassivaade, osalejate loend, kustutatud märgistus, tööriistavihjed, vahekaardi pealkirjad, 0.8, 0.8.1, versioon, uued funktsioonid, ülesanne, ülesanded, vastutaja, tähtpäev, tähtaeg ületatud, kontrolli kohe, mis muutus, redaktsioonid, võrdlus, häälmärkus, otsus, punane parandus, vastusefail, joonistaja, abiline, mcp, probleemid, keeled, sisendseadmed, puuteplaat, tööriistariba read, omaduste tabel, uuendus
from: dbdd7ed4
---

Need on muudatused versioonis MarkupCraft 0.9 võrreldes versiooniga 0.8.1. Peamine mõte on, et sinu töömärkmed jäävad kliendile antavalt lehelt välja ning kogu joonisekomplekti saab seostada ühe käiguga.

## Uus

### Märkmed, lauapind ja privaatsed märkmed

- **Lauapind.** Iga lehe ümbrus on laud: lehe kõrvale joonistatud, kirjutatud või kleebitud asi on märkus ja seda ei trükita kunagi. Vali {{ui:Näita lauapinda}}, et ruumi jaoks lähemalt välja suumida, või {{ui:Tee lauapinnale pilt}}, lohista kast ja vali siis {{ui:Lauapinnale}}, et panna joonise osast pilt lehe kõrvale. Pilt on pilt ega muutu, kui leht muutub. Vt [Märkmed, lauapind ja privaatsed märkmed](topic:notes-and-pasteboard).
- **Märkmete näitamine ja peitmine.** Iga märgistus võib olla märkus: määra {{ui:Uued märgistused on}} vahekaardil {{ui:Märkmed}} või {{ui:See märgistus on}} jaotises {{ui:Omadused}}. {{key:Shift+H}} või lehe all olev lüliti {{ui:Märkmed}} peidab ja näitab kõiki märkmeid korraga. Märkmeid ei trükita, neid ei jäeta lamedatesse koopiatesse, loenditesse ega eksportidesse ning teised PDF-lugejad neid ei näita. Salvestatud PDF hoiab need alles, kuni avad faili järgmine kord MarkupCraftis.
- **Privaatsed märkmed.** Vali {{ui:Sea paroolifraas}}, seejärel tee märgistus {{ui:Privaatne märkus}}. See krüpteeritakse failis paroolifraasiga, mis on vähemalt 10 märki pikk, ja taastamist ei ole: keegi, sealhulgas meie, ei saa seda avada ilma paroolifraasita. {{ui:Lukusta}} peidab privaatsed märkmed; {{ui:Jää sellel seadmel lahti lukustatuks}} on vaikimisi väljas.
- **Salvesta puhas koopia.** {{ui:Salvesta puhas koopia}} eemaldab kõik märkmed, privaatsed märkmed ja kõik lauapinnal oleva. Kasuta seda faili puhul, mis läheb kliendile.

### Terve komplekti seostamine

- **Partiilingid.** Vali {{ui:Leheküljed}} › {{ui:Partiilingid…}} või {{ui:Seo lehtede viited…}} jaotises {{ui:Otsi teksti}} paneelis {{ui:Lehed}}. Samm 1 loetleb iga lehe numbri ja nime, nagu need on loetud tiitliplokilt; paranda vigased. Samm 2 loetleb leitud viited, näiteks `3/A-501` või `DETAIL 2 ON A-501`. {{ui:Seostatakse}} näitab iga viite jaoks lehe ja vaate, {{ui:Pole seotud}} näitab numbreid, mida ükski avatud leht ei kanna, ja {{ui:Loo lingid}} teeb need kõik ühe võtmise sammuna. Käivita uuesti pärast lisa või ümbernummerdamist; käsitsi tehtud linke ei muudeta kunagi. Link vaatega salvestatakse PDF-lingina, nii et teisedki lugejad avavad detaili. Vt [Lehe lingid](topic:sheet-links).

### Joonistamine

- **Kaar, kümme meetodit.** Tööriistal {{ui:Kaar}} ({{key:O}}) on nüüd lehe kohal kast {{ui:Kaare meetod}}, kus on kümme viisi kaare joonistamiseks, ning nurka, pikkust, raadiust ja suunda saab klõpsata või sisestada. Vt [Kaare joonistamine kümmel viisil](topic:draw-an-arc).

### Koos töötamine

- **Ülevaataja järgimine.** Live-seansil vali inimese nime kõrval {{ui:Jälgi}} ja sinu vaade liigub koos tema omaga; kui ise libistad või suumid, jälgimine lõpeb. Korraldaja võib valida {{ui:Palu kõigil mind jälgida}}. Osalejate loend näitab iga inimese värvi, nime, lehte, kus ta on, ja tema viimase muudatuse aega. Vt [Teise ülevaataja järgimine Live-seansil](topic:follow-in-live).

## Igas rakenduses

- Tööriistavihjed on Bootstrapi vihjed, alustusvihje saab sulgeda, vahekaardiribad kerivad, kui need üle ulatuvad, ja brauseri vahekaardi pealkirjad on `<document> — MarkupCraft | CadCraft`.
- Paneel mitme jaotisega avab ühe ja sulgeb teised (noole kõrval olev lukk hoiab ühe lahti); sätete lüliti lülitab selle välja.
- Iga rakendus algab teegi objektide vaikekogumiga.
- Massi- ja temperatuuriühikud on saadaval ühikute sätetes.

## Parandatud

- **Eemaldatud märgistused ei jää enam salvestatud PDF-i sees loetavaks.** Varem eemaldas salvestamine kustutatud või ümber kirjutatud annotatsiooni lehelt, kuid objekt koos oma tekstiga jäi faili. Nüüd salvestamine kustutab need objektid. Varasemate versioonidega salvestatud failides on need veel alles, kuni salvestad need uuesti.

## Ausad piirangud

- Partiilinke on proovitud omaenda testkomplektidel. Päris komplektid joonistavad mullikesi paljudel viisidel, seega võib kliendi komplektil mõni vaade jääda märkamata. Skannitud lehed vajavad enne {{ui:Loe tekst (OCR)…}}.
- Märkmeid, privaatseid märkmeid ja lauapinda on testitud peata brauseris ja omaenda failidega, mitte suure päris vektorkomplektiga ega päris kahe inimese Live-seansil. Paroolifraasi muutmist pole ehitatud. Versioonid enne 0.9 märkmeid ei näita.
- Klassivaade on osalejate loend; seda pole proovitud päris õpetaja ja õpilastega.
- Muud keeled kui inglise keel on masintõlke mustandid, kuni emakeelne kõneleja need läbi vaatab.
- Windowsi paigaldajad pole koodiga allkirjastatud (Lisateave, seejärel Käivita siiski); macOS-i kettapilt pole notariseeritud (paremklõps, seejärel Ava).

## Varem: 0.8 ja 0.8.1

Need on muudatused versioonides MarkupCraft 0.8 ja 0.8.1 võrreldes versiooniga 0.7. Suur uus asi on see, et märgistus võib olla ülesanne, mida teeb keegi või sinu oma abiline ja mis sulgub ise, kui joonis tegelikult muutub.

### Uus

**Märgistused, mis tegutsevad**

- **Tee märgistusest ülesanne.** Vali üks või mitu märgistust, ava vahekaart {{ui:Ülesanded}} ja vali {{ui:Tee valitud ülesandeks}}. Ülesandel on pealkiri, isik või sinu ühendatud abiline, kes seda teeb, valikuline tähtpäev ja olek, ning see hoiab oma kohta lehel ja oma lõimes. Vt [Märgistuse tegemine ülesandeks](topic:markups-that-act).
- **Ülesanded, mis sulguvad ise.** Ülesanne võib jälgida joonist oma märgistuse sees. Ava lehe uuem redaktsioon ja vali {{ui:Kontrolli kohe}}: kui selle ala jooned muutusid rohkem kui juuksekarva jagu, märgitakse ülesanne Tehtuks, selle märgistus muutub Lõpetatuks ja lõimes olev märkus ütleb, mis muutus. Uus kuupäevamärge või jooned, mis liikusid vähem kui 1,5 punkti, ei lähe arvesse. Ülesanne võib selle asemel jälgida mudeli elementi: sinu abiline teatab elemendist käsuga `tasks_check` ning hilisem erinev teade või kustutatud element sulgeb ülesande. Üks võtmise samm avab selle uuesti.
- **Leia töö üles.** Filtreeri loendit {{ui:Ülesanded}} oleku ja selle järgi, kellele see on, sealhulgas {{ui:Tähtaeg ületatud}} järgi; vali {{ui:Määratud}}, seejärel {{ui:Abiline}}, et näha, mis ootab sinu abilist. Tähtpäeva möödunud ülesanne kuvatakse hoiatusena paneelil Probleemid. {{ui:CSV}} eksportib loendi. Ülesanded salvestatakse PDF-i koos märgistusega ja liiguvad Live-s nagu muud märgistuse omadused.

**Mis muutus, lihtsa loendina**

- **Loetle muudatused.** Ava vahekaart {{ui:Võrdle}}, seejärel {{ui:Võrdle kogu komplekti}}, vali varasem ja hilisem fail ning vali {{ui:Loetle muudatused}}. Loend algab arvuga, seejärel käsitleb iga muudetud lehte, suurimast muudatusest alates: kus lehel, kui suur (kalibreeritud lehel tegelikes ühikutes ja lisaks paberi tollides), kas jooni lisati või eemaldati, mitu märgistust seal on ning milliseid sõnu ilmus või kadus. {{ui:Kopeeri loend}} paneb selle lõikelauale ja {{ui:CSV}} kirjutab ühe rea muudatuse kohta. Vt [Muudatuste loend redaktsioonide vahel](topic:what-changed-in-words).

**Häälmärkused ja otsused**

- **Häälmärkused.** Vahekaardil {{ui:Märkmed}} vali {{ui:Salvesta häälmärkus}}, seejärel {{ui:Lõpeta salvestamine}}; salvestus lõpeb iseenesest kahe minuti pärast. Märkus kinnitatakse lehe keskele, lohistad selle sinna, kuhu see kuulub, ja kirjutad pealkirja jaotisesse {{ui:Omadused}}; loendis {{ui:Esita}} mängib selle ette. Salvestus salvestatakse PDF-i sisse.
- **Otsused.** {{ui:Kinnita otsus}} kirjutab lehele lause või kaks. Kui see asendab varasema otsuse, vali see jaotises {{ui:See asendab}}: vana jääb alles, märgituna Asendatuks, ja viitab uuele. Üks võtmise samm võtab selle tagasi. Vt [Häälmärkuste ja otsuste kinnitamine lehele](topic:voice-notes-and-decisions).

**Punane parandus redaktsiooniks**

- **Saada ja vasta.** Ava vahekaardil {{ui:Ülesanded}} {{ui:Punane parandus redaktsiooniks}}, kirjuta redaktsioon, millele märgistused viitavad, ja vali {{ui:Ekspordi punase parandusega fail}}. Saad faili `.redline.json`, kus on üks kirje iga avatud märgistuse kohta: leht, asukoht (lehe murdosadena, nii et teisel suurusel printimine ikka sobib), sõnad, autor, lõim ja selle ülesanne. Kes joonistab muudatused, vastab failis `.redline-answers.json` valikuga Aktsepteeritud, Tagasi lükatud või Tehtud; {{ui:Laadi vastusefail…}} annab igale märgistusele selle oleku ja joonistaja märkuse ühe võtmise sammuna. Vt [Märgistuste saatmine joonistajale punase parandusena](topic:redline-to-revision).

**Tehisintellekti abilised**

- **Rohkem tööriistu.** Abiline, mille ühendasid CadCraft Studio kaudu, saab loetleda ülesandeid (`tasks_list`), luua või muuta ühte (`task_set`), ülesande eemaldada (`task_clear`), kontrollida ühte uuema redaktsiooni või elemendi järgi (`tasks_check`) ning lugeda kahe avatud plaanikomplekti vahelise muudatuste lihtsat loendit (`revisions_changes`). Ta saab ainult need tööriistad, mille märkisid lüliti Abilised all, ja iga muudatus on üks võtmise samm. Vt [MarkupCraft'i kasutamine tehisintellekti abilisega](topic:use-with-ai-assistants).

### Igas rakenduses

- **Keeled.** CadCraft Studiol on nüüd 54 keelt. Kümme on uued: leedu, läti, bosnia, marathi, telugu, albaania, afrikaans, filipiini, suahiili ja usbeki keel. Kõik inglisekeelsest erinevad keeled on masintõlke mustandid, kuni emakeelne kõneleja need läbi vaatab.
- **Sisendseadmed.** {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Sisendseadmed}} määrab, mida teevad puuteplaat, hiire külgnupud, pliiats, sõrmepuudutused, 3D-hiir, mängukontroller või MIDI-kontroller, kõigi rakenduste või ainult selle puhul. Kuni midagi muudad, töötab iga seade nagu varem. Vt [Puuteplaadi, 3D-hiire või kontrolleri kasutamine](common:input-devices).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} valikud on {{ui:Mähi}} (vaikimisi), {{ui:2 rida}} ja {{ui:1 rida}}, nii et joonisele jääb rohkem ruumi. Vt [Paneelide korraldamine](common:arrange-panels).
- **Omaduste tabel.** Märgistuse stiiliväljad kasutavad jagatud tabelit, kokkuvoltavate kategooriate ning silditi ja väärtuste veergudega.
- **Probleemide paneel.** Rakenduse hoiatused, näiteks tähtaja ületanud ülesanne, kogutakse ühte paneeli Probleemid.
- **Live ja lisandmoodulid.** Live-seansse kirjeldatakse jaotises [Koostöö Live-s](common:work-together-live); sinu kontoga seotud lisandmoodulite loend on jaotises [Lisandmoodulid ja sinu kontoloend](common:addons-basics).
- **Ühenda oma tehisintellekt.** CadCraft Studio on sinu oma abilise keskus: ühenda üks kord kõigi kaheksa rakendusega. Rakendustel endil tehisintellekti pole.

### Parandatud versioonis 0.8.1

- **Studio saab keelt vahetada töö ajal.** Varem jäid töölauarakendus ja pakitud väljaanded inglise keelde. Seda pole veel kõigil platvormidel testitud: anna teada, kui keel ei muutu.
- Studio 0.8 paigaldusi pakutakse versioonile 0.8.1 jaotise {{ui:Sätted}} › {{ui:Uuendused}} kaudu.

### Selles versioonis veel pole

- **Pole koodiga allkirjastatud.** Windowsi paigaldajatel ja macOS-i .dmg-l pole veel allkirja. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Lisateave}}, seejärel {{ui:Käivita siiski}}. Macis paremklõps CadCraft Studio peale ja vali {{ui:Ava}}. Poe versioonid on ootel.
- **Tehisintellekti ühendamine on kohati pooleli.** Ühe klõpsuga ühendamine Studios, hostitud ühendaja brauseri abilistele ja sinu oma API-võti Studios ei ole selles väljalaskes lubatud. Ülesannete tsüklit on testitud, kuid veel mitte päris abilisega.
- **Ülesannete kontrollid vajavad sama lehe suurust.** Teisel suurusel ümber plotitud leht ei sobi, seega selle ülesanded ei sulgu. Lehed sobitatakse lehenumbri järgi, muidu lehe asukoha järgi.
- **Häälmärkused on ainult salvestised.** Transkriptsiooni pole ning abiline näeb märkuse pikkust, autorit ja pealkirja, mitte heli. Salvestamist on testitud peata brauseris võltsmikrofoniga; päris mikrofoni telefonil, tahvelarvutil või sülearvutil tuleb veel kontrollida.
- **Arvutuslehed ja põhjendused PDF-is** hoitakse faili privaatses kirjes. Vanem MarkupCraft ignoreerib seda kirjet ja eemaldab selle, kui ta faili järgmine kord salvestab, seega ava ja salvesta selline fail versiooniga 0.8 või hilisemaga.
- **Joonistaja pool punastest parandustest.** CadCraftil punase parandusfaili lugemine ja sellele vastamine pole veel ehitatud.
- **Muud keeled.** Tamili rakenduse ülariba ületab 528 px.

Kõik muu on jaotises [Mis pole veel ehitatud](topic:not-built-yet). Eelmise väljalaske kohta vt [Mis on uut versioonis 0.7](topic:whats-new-0-7).

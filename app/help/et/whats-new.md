---
title: Mis on uut versioonides 0.8 ja 0.8.1
summary: Märgistused, mis muutuvad ülesanneteks ja sulguvad ise, lihtne loend joonise muudatustest redaktsioonide vahel, häälmärkmed ja otsused plaanil, punase parandusega failid joonistajale ning ühised 0.8 muudatused: sisendseadmed, tööriistariba read, probleemid ja rohkem keeli.
keywords: mis uut, mis on uut, väljalaskemärkmed, muudatuste logi, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, ülesanne, ülesanded, vastutaja, tähtpäev, tähtaeg ületatud, kontrolli kohe, mis muutus, redaktsioonid, võrdle, häälmärkus, otsus, punane parandus, vastusefail, joonistaja, assistent, mcp, probleemid, keeled, sisendseadmed, puuteplaat, tööriistariba read, omaduste ruudustik, värskendus
from: 40368796
---

See on, mis muutus MarkupCraftis versioonides 0.8 ja 0.8.1 võrreldes versiooniga 0.7. Suur uus asi on see, et märgistus võib olla ülesanne, mille teeb keegi või sinu enda assistent ja mis sulgub ise, kui joonis tegelikult muutub.

## Uus

### Märgistused, mis tegutsevad

- **Tee märgistus ülesandeks.** Vali üks või mitu märgistust, ava {{ui:Tasks}} sakk ja vali {{ui:Make selected a task}}. Ülesandel on pealkiri, isik või sinu ühendatud assistent, kes selle teeb, valikuline tähtpäev ja olek ning see säilitab oma koha lehel ja oma lõimes. Vt [Märgistuse tegemine ülesandeks](topic:markups-that-act).
- **Ülesanded, mis sulguvad ise.** Ülesanne võib jälgida joonist oma märgistuse sees. Ava lehe uuem redaktsioon ja vali {{ui:Check now}}: kui selle ala jooned on muutunud rohkem kui veidi, märgitakse ülesanne tehtuks, märgistus muutub lõpetatuks ning lõimes olev märkus ütleb, mis muutus. Uus kuupäevamärk või jooned, mis on nihkunud vähem kui 1,5 punkti, ei loe. Ülesanne võib selle asemel jälgida mudeli elementi: assistent teatab elemendi aruande `tasks_check` abil ja hilisem erinev teade või kustutatud element sulgeb ülesande. Üks tagasivõtmise samm avab selle uuesti.
- **Leia töö.** Filtreeri {{ui:Tasks}} loendit oleku ja selle järgi, kellele see on mõeldud, kaasa arvatud {{ui:Overdue}}; vali {{ui:Assigned to}}, seejärel {{ui:Assistant}}, et näha, mis ootab sinu assistenti. Tähtpäeva ületanud ülesanne kuvatakse probleemide paneelis hoiatusena. {{ui:CSV}} ekspordib loendi. Ülesanded salvestatakse PDF-i koos märgistusega ning liiguvad Live'i kaudu nagu teised märgistuse omadused.

### Mis muutus, lihtsa loendina

- **Loetle muudatused.** Ava {{ui:Compare}} sakk, seejärel {{ui:Compare a whole set}}, vali varasem ja hilisem fail ning vali {{ui:List the changes}}. Loend algab arvuga ja hõlmab iga muudetud lehte, suurima muudatusega esimesena: kus lehel, kui suur (tegelikes ühikutes ning kalibreeritud lehel ka paberi tollides), kas jooni lisati või eemaldati, mitu märgistust seal asub ning millised sõnad ilmusid või kadusid. {{ui:Copy the list}} kopeerib loendi lõikelauale ja {{ui:CSV}} kirjutab iga muudatuse kohta ühe rea. Vt [Redaktsioonide vahel muutunu loend](topic:what-changed-in-words).

### Häälmärkmed ja otsused

- **Häälmärkmed.** Sakis {{ui:Notes}} vali {{ui:Record a voice note}}, seejärel {{ui:Stop recording}}; salvestus lõpeb iseenesest kahe minuti pärast. Märkus kinnitatakse lehe keskele. Lohista see sinna, kuhu see kuulub, ja kirjuta pealdis aknas {{ui:Properties}}. Loendis {{ui:Play}} esitab märkme. Salvestis salvestatakse PDF-i sisse.
- **Otsused.** {{ui:Pin a decision}} kirjutab lehele ühe või kaks lauset. Kui see asendab varasema otsuse, vali too väljal {{ui:It replaces}}: vana jääb alles, märgitakse Asendatud ja osutab uuele. Üks tagasivõtmise samm võtab selle tagasi. Vt [Häälmärkmete ja otsuste kinnitamine lehele](topic:voice-notes-and-decisions).

### Punane parandus redaktsiooniks

- **Saada ja vasta.** Sakis {{ui:Tasks}} ava {{ui:Redline to revision}}, kirjuta redaktsioon, millega märgistused võrduvad, ja vali {{ui:Export redline file}}. Saad faili `.redline.json`, kus on üks kirje iga avatud märgistuse kohta: leht, asukoht (lehe murdosana, et uuesti teisel suurusel printimine ikka kohakuti jääks), sõnad, autor, lõim ja selle ülesanne. Joonistaja, kes muudatused teeb, vastab failis `.redline-answers.json` olekuga Aktsepteeritud, Tagasi lükatud või Tehtud. {{ui:Load answers file…}} annab igale märgistusele selle oleku ja joonistaja märkuse ühe tagasivõtmise sammuna. Vt [Märgistuste saatmine joonistajale punase parandusena](topic:redline-to-revision).

### AI-assistendid

- **Veel tööriistu.** CadCraft Studio kaudu ühendatud assistent saab loetleda ülesandeid (`tasks_list`), luua või muuta ühte (`task_set`), ülesande eemaldada (`task_clear`), kontrollida ühte uuema redaktsiooni või elemendi vastu (`tasks_check`) ning lugeda kahe avatud plaanikomplekti vahelise muudatuste lihtloendi (`revisions_changes`). Ta saab ainult need tööriistad, mille oled märkinud lüliti Assistendid all, ja iga muudatus on üks tagasivõtmise samm. Vt [MarkupCrafti kasutamine AI-assistendiga](topic:use-with-ai-assistants).

## Igas rakenduses

- **Keeled.** CadCraft Studio toetab nüüd 54 keelt. Kümme on uued: leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, suahiili ja usbeki keel. Kõik inglisest erinevad keeled on masinmustandid, kuni emakeelne kõneleja need üle loeb.
- **Sisendseadmed.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} määrab, mida teevad puuteplaat, hiire külgnupud, pliiats, sõrmepuuted, 3D-hiir, mängukontroller või MIDI-kontroller, kõigi rakenduste või ainult selle jaoks. Kuni midagi muudad, töötab iga seade nagu varem. Vt [Puuteplaadi, 3D-hiire või kontrolleri kasutamine](common:input-devices).
- **Tööriistariba read.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} sisaldab valikuid {{ui:Wrap}} (vaikimisi), {{ui:2 rows}} ja {{ui:1 row}}, nii et joonisele jääb rohkem ruumi. Vt [Paneelide korraldamine](common:arrange-panels).
- **Omaduste ruudustik.** Märgistuse stiiliväljad kasutavad jagatud ruudustikku, mille kategooriaid saab kokku klapida ning millel on sildi- ja väärtuseveerud.
- **Probleemide paneel.** Rakenduse hoiatused, näiteks tähtaja ületanud ülesanne, kogutakse ühte probleemide paneeli.
- **Live ja lisandmoodulid.** Live'i seansid on kirjeldatud jaotises [Koostöö reaalajas](common:work-together-live). Sinu kontoga seotud lisandmoodulite loend on jaotises [Lisandmoodulid ja sinu konto loend](common:addons-basics).
- **Ühenda oma AI.** CadCraft Studio on sinu enda assistendi keskus: ühenda üks kord kõigi kaheksa rakenduse jaoks. Rakendustel endil ei ole ühtegi oma tehisintellekti.

## Parandatud versioonis 0.8.1

- **Studio saab töötamise ajal keelt vahetada.** Varem jäid töölauarakendus ja pakendatud väljaanded inglise keelde. Seda ei ole veel testitud igal platvormil: anna meile teada, kui keel ei muutu.
- Studio 0.8 paigaldustele pakutakse versiooni 0.8.1 jaotises {{ui:Settings}} › {{ui:Updates}}.

## Veel selles versioonis puudub

- **Pole koodiga allkirjastatud.** Windowsi paigaldusprogrammidel ja macOS-i .dmg-failil ei ole veel allkirja. Windowsis, kui SmartScreen peatab paigaldusprogrammi, vali {{ui:More info}}, seejärel {{ui:Run anyway}}. Macis klõpsa CadCraft Studio'l hiire parema nupuga ja vali {{ui:Open}}. Poe versioonid on ootel.
- **Ühenda oma AI on mõnes kohas pooleli.** Ühe klikiga ühendamine Studio sees, hostitud konnektor brauseri assistentidele ja oma API-võti Studio sees ei ole selles väljalaskes lubatud. Ülesannete tsükkel on testitud, kuid mitte veel päris assistendiga.
- **Ülesannete kontroll nõuab sama lehe suurust.** Teisel suurusel uuesti printimine ei sobitu, seega selle ülesanded ei sulgu. Lehed seotakse lehe numbri järgi, muidu lehe asukoha järgi.
- **Häälmärkmed on ainult salvestised.** Transkripti ei ole. Assistent näeb märkme pikkust, autorit ja pealdist, mitte heli. Salvestamist prooviti ilma kasutajaliideseta brauseris valemikrofoniga; päris mikrofon telefonis, tahvelarvutis või sülearvutis on veel kontrollimata.
- **Arvutuslehed ja põhjendused PDF-is** hoitakse faili privaatses kirjes. Vanem MarkupCraft ignoreerib seda kirjet ja eemaldab selle järgmisel faili salvestamisel, seega ava ja salvesta sellist faili versiooniga 0.8 või hilisemaga.
- **Joonistaja pool punastest parandustest.** Punase parandusega faili lugemine ja sellele vastamine rakenduses CadCraft ei ole veel valmis.
- **Teised keeled.** Tamili keele rakenduse riba ületab 528 px.

Kõik muu on jaotises [Mis pole veel valmis](topic:not-built-yet). Eelmise väljalaske kohta vt [Mis uut versioonis 0.7](topic:whats-new-0-7).

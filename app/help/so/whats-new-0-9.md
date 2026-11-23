---
title: Waxa cusub 0.9 (hore)
summary: Qoraallo iyo looxa aan waligood la daabicin, qoraallo gaar ah oo sirta leh iyo nuqul nadiif ah oo macmiilka loo diro, xidhiidhyo kooxeed oo dhammaan naqshadda loo sameeyo, qalab Qaanso oo leh toban habood, raacidda dib-u-eegaha kale ee Live, iyo hagaajin calaamadaha la tirtiray ee ku sii jira PDF-ka la kaydiyay.
keywords: waxa cusub 0.9, nooca hore, waxa cusub, 0.9, sheekada nooca, changelog, qoraallo, looxa, qoraallo gaar ah, erayga sirta, sirta, qarsoon, qari qoraallada, muuji qoraallada, nuqul nadiif ah, sawir, xidhiidhyada kooxeed, tilmaamaha xaashiyada, xidhiidh xaashiyada, xaashi, dib u tirin, arc, habka qaansada, qaanso saddex-barreed, radius, raac, raac i, live, aragtida fasalka, liiska dadka, calaamad la tirtiray, tooltips, cinwaanka tabka, waxa cusub, 0.8, 0.8.1, nooca, astaamo cusub, hawl, hawlaha, xil-qaate, taariikhda dhammaadka, dib u dhacay, hubi hadda, waxa beddelay, dib-u-eegis, isbarbardhig, duubista codka, go'aan, redline, faylka jawaabaha, naqshadeeye, caawiye, mcp, dhibaatooyin, luqadaha, qalabka gelinta, trackpad, safafka qalabka, property grid, cusboonaysiin
from: aa3dfeb8
---

Tani waa wixii isbeddelay MarkupCraft 0.9, marka la barbardhigo 0.8.1. Fikradda ugu weyn waa in qoraalladaadu ka maqnaadaan bogga macmiilku helo, iyo in naqshadda oo dhan lagu xidhi karo hal marin.

## Cusub

### Qoraallada, looxa iyo qoraallada gaarka ah

- **Looxa.** Dhulka ku wareegsan xaashi kasta waa miis: wax kasta oo lagu sawiro, lagu qoro ama lagu dhejiyo xaashiga dhinacisa waa qoraal aan waligiis la daabicin. Dooro {{ui:Show the pasteboard}} si aad u dhowrto meel dheer, ama {{ui:Snapshot to the pasteboard}}, jiid sanduuq, kadibna {{ui:To the pasteboard}} si aad sawir qayb ka mid ah naqshadda ugu dhejiso xaashiga dhinacisa. Sawirku waa sawir oo ma beddelmo marka xaashigu beddelmo. Eeg [Notes, the pasteboard and private notes](topic:notes-and-pasteboard).
- **Muuji iyo qari qoraallada.** Calaamad kasta waxay noqon kartaa qoraal: deji {{ui:New markups are}} tab-ka {{ui:Notes}}, ama {{ui:This markup is}} ee {{ui:Properties}}. {{key:Shift+H}} ama badhanka {{ui:Notes}} ee hoos xaashiga ayaa qariya oo muujiya dhammaan qoraallada hal mar. Qoraallada lama daabacayo, lama koobiyeeyo, liisaska iyo dhoofinta lama geliyo, akhristayaasha kale ee PDF ma muujiyaan. PDF-ka aad kaydisay wuxuu hayaa iyagu mar kale marka aad dib u furto MarkupCraft.
- **Qoraallada gaarka ah.** Dooro {{ui:Set a passphrase}}, kadibna calaamad ka dhig {{ui:A private note}}. Waa la qariyay faylka iyada oo erayga sirta ah oo ugu yaraan 10 xaraf ah, mana jiro dib-u-soo-celin: qofna, oo aan nahay annaga oo ka mid ah, ma furi karo ilaa erayga sirta la yiraahdo. {{ui:Lock}} wuxuu dhigaa qoraallada gaarka ah; {{ui:Stay unlocked on this device}} waxay ku xidhan tahay damin ahaan.
- **Kaydi nuqul nadiif ah.** {{ui:Save a clean copy}} wuxuu tirtiraa dhammaan qoraallada, qoraallada gaarka ah iyo wax kasta oo ku yaal looxa. Isticmaal faylka loo diro macmiilka.

### Xidhiidh kooxeed

- **Xidhiidhyo kooxeed.** Dooro {{ui:Pages}} › {{ui:Batch links…}}, ama {{ui:Link sheet callouts…}} oo ku yaal {{ui:Find text}} gudaha panel-ka {{ui:Sheets}}. Tallaabada 1 wuxuu liisteeyaa lambarka iyo magaca xaashi kasta sida loo akhriyay title block-ka; hagaaji kuwa khaldan. Tallaabada 2 wuxuu liisteeyaa tilmaamaha la helay, sida `3/A-501` ama `DETAIL 2 ON A-501`. {{ui:Will link}} wuxuu muujiyaa xaashiga iyo aragtida mid kasta, {{ui:Not linked}} wuxuu muujiyaa lambarada aan xaashi furan lahayn, {{ui:Create the links}} wuxuu dhamaantood sameeyaa hal tallaabo oo dib-u-celin ah. Dib u orod marka aad addendum ama dib u lambarayn samayso; xidhiidhyada gacanta lagu sameeyay weligood ma beddelmaan. Xidhiidh leh aragti waxa loo kaydiyaa sidii xidhiidh PDF ah, si akhristayaasha kale ay faahfaahinta ugu furaan. Eeg [Sheet links](topic:sheet-links).

### Naqshad

- **Qaanso, toban habood.** Qalabka {{ui:Arc}} ({{key:O}}) hadda wuxuu leeyahay sanduuq {{ui:Arc method}} oo ku yaal bogga, oo leh toban siyaabood oo qaanso loo sawiro, iyo xagasha, dhererka, radius-ka iyo jihada waa la riixi karaa ama la qori karaa. Eeg [Draw an arc ten ways](topic:draw-an-arc).

### Wada shaqaynta

- **Raac dib-u-eeg kale.** Live session gudaheeda dooro {{ui:Follow}} oo ku xiga magaca qof, aragtaadu way raacaysaa midka isaga; adiga oo jiid ama weyneynaya aragtaada, raacidda way joogsanaysaa. Martida ama martigeliyaha wuxuu dooran karaa {{ui:Ask everyone to follow me}}. Liiska dadka wuxuu muujiyaa midabka qof kasta, magaciisa, xaashiga uu ku jiro iyo waqtigii ugu dambeeyay ee uu wax ka beddelay. Eeg [Follow another reviewer in a Live session](topic:follow-in-live).

## Dhammaan barnaamijyada

- Talooyinka hoose waa Bootstrap tooltips, talo bilowga ah waa la xidhi karaa, safka tabbada wuu jiifaa marka uu dhaco, cinwaanka tabbada browser-ka wuxuu akhrisanayaa `<document> — MarkupCraft | CadCraft`.
- Panel leh qaybo dhowr ah wuxuu furaa mid oo wuxuu xidhaa kuwa kale (qufulka ku yaal caret-ka wuxuu hayaa mid furan); dejinta Settings ayaa demisa tan.
- Mid kasta wuxuu ka bilaabaa ururinta caadiga ah ee walxaha Library.
- Unugyada culeyska iyo heerkulka waa la heli karaa dejinta Units.

## La hagaajiyay

- **Calaamadaha la tirtiray ma sii akhrisanayaan gudaha PDF-ka la kaydiyay.** Kaydinta hore waxay calaamadda la tirtiray ama dib loo qoray ka saari jirtay bogga, laakiin shayga, oo qoraalkiisa ku jira, faylka ayuu ku hari jiray. Hadda kaydintu waxay tirtiraa shayaashaas. Faylasha ay kaydiyeen dhismayaasha hore weli waxay hayaan ilaa aad mar kale kaydiso.

## Xaddidaadyada runta ah

- Xidhiidhyada kooxeed waxaa lagu tijaabiyay naqshadaha tijaabada ee naga leh. Naqshadaha dhabta ah bulshooyin ayaa lagu sawiraa siyaabo badan, sidaas darteed macmiil ahaan qaar ka mid ah aragtiyada waa laga yaabaa in la waayo. Xaashiyada la skaneeyay waxay u baahan yihiin {{ui:Read text (OCR)…}} marka hore.
- Qoraallada, qoraallada gaarka ah iyo looxa waxaa lagu tijaabiyay browser aan muuqaal lahayn iyo faylashkeena, mana aha naqshad vector weyn oo dhab ah, mana aha Live session dhab ah oo laba qof ah. Beddelka erayga sirta lama dhisin. Dhismayaasha ka hortaga 0.9 ma muujiyaan qoraallada.
- Fasalka waa liiska dadka; lama tijaabin macalin iyo arday dhab ah.
- Luqadaha aan Ingiriisiga ahayn waa qabyo bulsho ilaa qof ku hooyo ah akhriyo.
- Installers-ka Windows lama saxiixin (More info, kadibna Run anyway); sawirka disk-ka macOS lama ansixin (right-click, kadibna Open).

## Hore: 0.8 iyo 0.8.1

Tani waa wixii isbeddelay MarkupCraft 0.8 iyo 0.8.1, marka la barbardhigo 0.7. Waxa cusub ee weyn waa in calaamad loo beddeli karo hawl uu qof, ama caawiyahaaga xiriirka leh, qabanayo, oo ay iskiis u xirmaan marka naqshaddu si dhab ah u beddelato.

### Cusub

**Calaamadaha shaqeeya**

- **Calaamad ka dhig hawl.** Dooro hal calaamad ama dhowr, fur tab-ka {{ui:Tasks}} oo dooro {{ui:Make selected a task}}. Hawl waxa uu leeyahay cinwaan, qof ama caawiyahaaga xiriirka leh oo qabanaya, maalin dhammaadka ah oo ikhtiyaari ah iyo xaalad, wuxuuna hayaa meeshiisa xaashiga iyo xarigiisa. Eeg [Make a markup a task](topic:markups-that-act).
- **Hawlaha oo iskood u xirma.** Hawl wuxuu ilaalin karaa naqshadda ku jirta calaamadiisa. Fur xaashi dib-u-eeg cusub oo dooro {{ui:Check now}}: haddii xariiqyada aagaas ka beddelmeen wax ka badan hal timo, hawlka waxa lagu calaamadiyaa Done, calaamadiisuna waxa noqonaysaa Completed, qoraal xarigga ku jirana wuxuu sheegayaa waxa beddelmay. Taariikh cusub oo shaabad ah, ama xariiqyo ka dhaqaajiyay wax ka yar 1.5 points, ma tirinayaan. Hawl wuxuu sidoo kale ilaalin karaa hal walax moodel ah: caawiyahaagu wuxuu warbixin ku sameeyaa walaxda `tasks_check` ku, warbixin kale oo kala duwan, ama walax la tirtiray ayaa xidha hawlka. Hal tallaabo oo dib-u-celin ah ayaa dib u furta.
- **Shaqada raadi.** Shaandhee liiska {{ui:Tasks}} xaaladda iyo qofka loo jeedo, oo ku jira {{ui:Overdue}}; dooro {{ui:Assigned to}}, kadibna {{ui:Assistant}} si aad u aragto waxa caawiyahaaga sugaya. Hawl ka dhaafay maalinta dhammaadka wuxuu muuqdaa digniin gudaha panel-ka {{ui:Problems}}. {{ui:CSV}} wuxuu dhoofiyaa liiska. Hawlaha waxa lagu kaydiyaa PDF-ka calaamadda ku dhex jirta, waxayna Live-ka u gudbaan sida sifooyinka kale ee calaamadda.

**Waxa isbeddelay, liis fudud ahaan**

- **Liiska isbeddelada.** Fur tab-ka {{ui:Compare}}, kadibna dooro {{ui:Compare a whole set}}, dooro faylka hore iyo kan dambe, kadibna dooro {{ui:List the changes}}. Liistu wuxuu ka bilaabmaa tiro, kadibna wuxuu daboolaa xaashi kasta oo isbeddelay, isbeddelka ugu weyn ee hore: meesha ku taal xaashiga, sida uu u weyn yahay (unugyada dhabta ah iyo sidoo kale inch-yada warqadda xaashi la calibrate gareeyay), inay xariiqyo ku soo kordhay ama ka baxeen, inta calaamadood ku jira meeshaas, iyo erayo soo muuqday ama baabbi'ay. {{ui:Copy the list}} wuxuu dhigaa clipboard-ka, {{ui:CSV}} wuxuu qoraa hal safka isbeddel kasta. Eeg [List what changed between revisions](topic:what-changed-in-words).

**Qoraallada codka iyo go'aanka**

- **Qoraallada codka.** Tab-ka {{ui:Notes}} dooro {{ui:Record a voice note}}, kadibna {{ui:Stop recording}}; duubistu waxay joogsataa iyada oo laba daqiiqo la gaadhay. Qoraalku wuxuu ku xidhan yahay xagga dhexe ee xaashiga, waxaad jiidaysaa meesha uu ku habboon yahay, oo waxaad ku qortaa caption {{ui:Properties}} ku jira, {{ui:Play}} oo ku yaal liiska ayaa ciyaarta. Duubistu waxa lagu kaydiyaa PDF-ka gudahiisa.
- **Go'aanno.** {{ui:Pin a decision}} wuxuu xaashiga ku qoraa jumlad ama laba. Haddii ay beddelayso go'aan hore, dooro kan hore ee {{ui:It replaces}}: kii hore wuu joogaa, oo wuxuu muuqdaa Replaced, wuxuuna tilmaamayaa kii cusub. Hal tallaabo oo dib-u-celin ah ayaa dib u qaadaysa. Eeg [Pin voice notes and decisions on a sheet](topic:voice-notes-and-decisions).

**Redline ilaa dib-u-eegista**

- **Dir oo jawaab.** Tab-ka {{ui:Tasks}} fur {{ui:Redline to revision}}, qor dib-u-eegista calaamadaha ka soo horjeedka, kadibna dooro {{ui:Export redline file}}. Waxaad heleysaa fayl `.redline.json` oo leh hal shay calaamad furan kasta: xaashiga, booska (sida qaybo xaashiga, si dib-u-plot ballaadhan u wada hal xariiq), erayada, qoraha, xarigga iyo hawlkiisa. Qofka sawirka beddelaya wuxuu ku jawaabaa Accepted, Rejected ama Done fayl `.redline-answers.json` ah; {{ui:Load answers file…}} wuxuu calaamad kasta siinayaa xaaladda iyo qoraalka qoraaga, hal tallaabo oo dib-u-celin ah. Eeg [Send markups to the drafter as a redline](topic:redline-to-revision).

**Caawiyeyaasha AI**

- **Qalab dheeraad ah.** Caawiye aad ku xidhay CadCraft Studio wuxuu liis gareyn karaa hawlaha (`tasks_list`), samayn karaa ama beddeli karaa mid (`task_set`), ka saari karaa hawlka (`task_clear`), hubin karaa mid marka la barbardhigo dib-u-eeg cusub ama walax (`tasks_check`), oo akhriyi karaa liiska isbeddelada ee u dhexeeya laba set oo naqshad furan (`revisions_changes`). Wuxuu helaa kaliya qalabyada aad calaamadiisay hoosta Assistants switch, isbeddel kasta waa hal tallaabo oo dib-u-celin ah. Eeg [Use MarkupCraft with an AI assistant](topic:use-with-ai-assistants).

### Dhammaan barnaamijyada

- **Luqadaha.** CadCraft Studio hadda wuxuu leeyahay 54 luqadood. Toban ayaa cusub: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili iyo Uzbek. Dhammaan luqadaha aan Ingiriisiga ahayn waa qabyo bulsho ilaa qof ku hooyo ah akhriyo.
- **Qalabka gelinta.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} wuxuu dejiyaa waxa trackpad-ka, badhamada dhinaca ee mouse-ka, qalinka, taabashada faraha, 3D mouse-ka, controller-ka ciyaarta ama MIDI controller-ka sameeyo, dhammaan barnaamijyada ama kaliya kan hadda. Ilaa aad wax beddesho, qalab kasta sidii hore ayuu u shaqaynayaa. Eeg [Use a trackpad, 3D mouse or controller](common:input-devices).
- **Safafka qalabka.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wuxuu leeyahay {{ui:Wrap}} (caadiga), {{ui:2 rows}} iyo {{ui:1 row}}, si naqshaddu u hesho meel dheeraad ah. Eeg [Arrange the panels](common:arrange-panels).
- **Property grid.** Goobaha Style ee calaamadu waxay isticmaalaan grid-ka la wadaago, oo leh qaybo la dhufan karo iyo tiirar magac iyo qiime.
- **Panel-ka dhibaatooyinka.** Digniinaha barnaamijka, sida hawl dib u dhacay, waxay isugu soo ururaan hal panel oo Problems ah.
- **Live iyo kordhinta.** Live sessions waxa lagu sharaxay [Work together live](common:work-together-live); liiska kordhinta ee raacaya akoonkaaga waxa ku jira [Add-ons and your account list](common:addons-basics).
- **Ku xidh AI-gaaga.** CadCraft Studio waa xarunta caawiyahaaga gaarka ah: hal mar ku xidh dhammaan siddeed barnaamij. Barnaamijyada qof AI ah kuma jiro.

### La hagaajiyay 0.8.1

- **Studio wuu beddeli karaa luqadda intuu shaqeynayo.** Ka hor, barnaamijka desktop-ka iyo nooca xirmada ahi waxay ku sii jireen Ingiriis. Tan weli lama tijaabin dhammaan madbacadaha: noo sheeg haddii luqaddu ka beddelmin.
- Rakibaadyada Studio 0.8 waxaa lagu soo bandhigayaa 0.8.1 {{ui:Settings}} › {{ui:Updates}} ku.

### Weli kuma jirin nooca

- **Lama saxiixin.** Installers-ka Windows iyo .dmg-ka macOS weli ma leh saxiix. Windows, haddii SmartScreen joojiyo installer-ka, dooro {{ui:More info}}, kadibna {{ui:Run anyway}}. Mac-ga, right-click CadCraft Studio oo dooro {{ui:Open}}. Dhismayaasha dukaanka waa hakad.
- **Ku xidhida AI-ga waa dhammaystirnayn qaar ka mid ah.** Ku xidhid hal-riix gudaha Studio, connector-ka martigeliyay ee caawiyeyaasha browser-ka iyo furaha API-gaaga gudaha Studio looma ballan qaadin nooca. Silsiladda hawlaha waa la tijaabiyay, laakiin wali lama tijaabin caawiye AI dhab ah.
- **Hubinta hawlaha waxay u baahan tahay isla cabbirka bogga.** Xaashi dib loo plot gareeyay cabbir kale ma isku dhigmi doono, sidaas darteed hawlkiisu ma xirmo. Xaashiyada waxa lagu lammaanayaa lambarka xaashiga, haddii kale booska bogga.
- **Qoraallada codka waa duubis oo keliya.** Ma jiro transcript, caawiyuhuna wuxuu arkaa dhererka qoraalka, qoraha iyo caption-ka, ma arko codka. Duubista waxa lagu tijaabiyay mic been ah browser aan muuqaal lahayn, mic dhab ah oo telefoon, tablet ama laptop weli waa in la hubiyo.
- **Miisaanka xisaabta iyo sababaha PDF-ka** waxa lagu kaydiyaa gal gaar ah oo faylka ku jira. MarkupCraft hore wuu iska indho-tiraa galkaas, markuu kaydiyo mar kale wuu tirtiraa, sidaas darteed fur oo kaydi faylkaas 0.8 ama ka dambeeya.
- **Dhinaca qoraaga redline-ka.** CadCraft ma akhristo faylka redline-ka oo ma jawaabo weli.
- **Luqadaha kale.** Bar-ka app-ka ee Tamil wuxuu ka baxaa 528 px.

Waxa kale oo dhan waxa ku jira [Wixii weli la dhisin](topic:not-built-yet). Nooca ka horreeya, eeg [Waxa cusub 0.7](topic:whats-new-0-7).

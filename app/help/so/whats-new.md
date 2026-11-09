---
title: Waxa cusub ee 0.8 iyo 0.8.1
summary: Calaamadaha noqda hawlo oo laftirta xidha, liis cad oo isbeddelada u dhexeeya dib-u-eegisyada, codka fiiro iyo go'aamada qorshaha, faylasha redline ee qoraa-naqshadeeyaha, iyo isbeddelada 0.8 ee dhammaan apps-ka: aaladaha gelinta, safafka qalabka, Dhibaatooyinka, luuqado dheeraad ah.
keywords: waxa cusub, release notes, changelog, isbeddel, 0.8, 0.8.1, nooca, astaamo cusub, hawl, hawlaha, loo xilsaaray, maalinta dhammaadka, dib u dhacay, hadda hubi, waxa isbeddelay, dib-u-eeg, isbarbardhig, fiiro cod, go'aan, redline, faylka jawaabaha, naqshadeeye, caawiye, mcp, dhibaatooyin, luuqado, aaladaha gelinta, trackpad, safafka qalabka, property grid, cusboonaysiin
from: 40368796
---

Kuwani waa waxa isbeddelay MarkupCraft 0.8 iyo 0.8.1, marka la barbardhigo 0.7. Waxa ugu cusub waa in calaamad noqon karto hawl uu qof qabanayo, ama caawiyahaaga AI, oo laftirta xidha marka naqshadu si dhab ah isu beddesho.

## Cusub

### Calaamadaha shaqeeya

- **Calaamadda ka dhig hawl.** Dooro hal ama dhowr calaamadood, fur tab-ka {{ui:Tasks}} oo dooro {{ui:Make selected a task}}. Hawlu wuxuu leeyahay cinwaan, qof ama caawiyahaaga oo xidhan oo qabanaya, maalin dhammaad oo ikhtiyaari ah iyo xaalad, wuxuuna hayaa meeshiisa xaashida iyo khaydkiisa. Eeg [Calaamadda ka dhig hawl](topic:markups-that-act).
- **Hawlo laftirta xidha.** Hawl wuxuu ilaalin karaa naqshadda ku jirta calaamadiisa. Fur dib-u-eeg cusub oo xaashi oo dooro {{ui:Check now}}: haddii khadadka aaggaas ka beddeleen wax ka badan hal timo, hawlu waxa la calaamadiyaa Done, calaamadiisuna wuxuu noqonayaa Completed, faallada khaydka ahna wuxuu sheegayaa waxa isbeddelay. Taariikh cusub, ama khadad ka guuray 1.5 point ka yar, ma tirin. Hawl waxa kale oo uu ilaalin karaa elementi moodeel; caawiyahaagu wuxuu warbixin ka bixiyaa elementiga `tasks_check`, warbixin kale oo kala duwan ama elementi la tirtiray ayaa xidha hawlka. Hal tallaabo undo ayaa dib u furta.
- **Shaqada hel.** Shaandee liiska {{ui:Tasks}} xaalad iyo cidda ay u tahay, oo ay ku jiraan {{ui:Overdue}}; dooro {{ui:Assigned to}}, markaas {{ui:Assistant}} si aad u aragto waxa sugaya caawiyahaaga. Hawl ka dhaafay maalinta dhammaadkeeda wuxuu u muuqdaa digniin Panel-ka Dhibaatooyinka. {{ui:CSV}} wuxuu dhoofiyaa liiska. Hawlaha waxa lagu kaydiyaa PDF-ka calaamadda ku jirta, waxana ay u socdaan Live sida sifooyinka calaamadaha kale.

### Waxa isbeddelay, liis cad ahaan

- **Liiska isbeddelada.** Fur tab-ka {{ui:Compare}}, markaas dooro {{ui:Compare a whole set}}, dooro faylka hore iyo kan dambe, oo dooro {{ui:List the changes}}. Liiska wuxuu ku bilaabmaa tiro, markaas wuxuu daboolaa xaashi kasta oo isbeddelay, isbeddelka ugu weyn ee hore: meesha xaashida ku taal, cabbirka (unugyada dhabta ah iyo sidoo kale inch-yada warqadda xaashida la cabbiray), in khadad la daray ama la tirtiray, inta calaamadood ku taal, iyo erayada soo muuqday ama baabbi'ay. {{ui:Copy the list}} wuxuu dhigaa clipboard-ka, {{ui:CSV}} wuxuu qoraa hal safka isbeddel kasta. Eeg [Liiska waxa isbeddelay dib-u-eegisyada](topic:what-changed-in-words).

### Codka fiiro iyo go'aamada

- **Fiiro cod.** Tab-ka {{ui:Notes}} dooro {{ui:Record a voice note}}, markaas {{ui:Stop recording}}; duubistu waa joogsanaysaa laftirta laba daqiiqo kadib. Fiiradu waxa lagu xidhaa dhexda xaashida, waxaad jiidaysaa meesha ay ku habboon tahay, waxaana qoraal ku qortaa {{ui:Properties}}. {{ui:Play}} liiska ayaa ciyaarta. Duubistu waxa lagu kaydiyaa PDF-ka gudihiisa.
- **Go'aamo.** {{ui:Pin a decision}} wuxuu xaashida ku qoraa jumlad ama laba. Haddii ay beddelayso go'aan hore, dooro kii hore {{ui:It replaces}} dhexdeeda: kii hore wuu jiraa, wuxuuna calaamad ku yeelanayaa La beddelay, oo wuxuu tilmaamaya kii cusub. Hal tallaabo undo ayaa ka soo celinaysa. Eeg [Ku xidh fiiro cod iyo go'aamo xaashida](topic:voice-notes-and-decisions).

### Redline ilaa dib-u-eegista

- **Dir oo jawaab sii.** Tab-ka {{ui:Tasks}} fur {{ui:Redline to revision}}, qor dib-u-eegista ay calaamadaha ka hadlayaan oo dooro {{ui:Export redline file}}. Waxaad heshaa fayl `.redline.json` oo leh hal shay calaamad furan kasta: xaashida, booska (qaybo ka mid ah xaashida, si dib-u-plot ballac kale ku jiro ay ugu dhigan tahay), erayada, qoraha, khaydka iyo hawlkiisa. Qofka beddelaya naqshada wuxuu ku jawaabaa Accepted, Rejected ama Done fayl `.redline-answers.json` ah. {{ui:Load answers file…}} wuxuu siinayaa calaamad kasta xaaladdaas iyo fiiro naqshadeeyaha, hal tallaabo undo ah. Eeg [Dir calaamadaha naqshadeeyaha redline ahaan](topic:redline-to-revision).

### Caawiyeyaasha AI

- **Qalab dheeraad ah.** Caawiye aad ku xidhay CadCraft Studio wuxuu liiskarayaa hawlaha (`tasks_list`), wuxuu samayn karaa ama beddeli karaa hal hawl (`task_set`), wuxuu ka qaadi karaa hawlka (`task_clear`), wuxuu hubin karaa hal hawl marka la barbardhigo dib-u-eeg cusub ama elementi (`tasks_check`), wuxuuna akhrin karaa liiska caadiga ah ee isbeddelada u dhexeeya laba set oo furan (`revisions_changes`). Wuxuu helaa kaliya qalabka aad ku calaamadisay badhanka Caawiyeyaasha, isbeddel kasta waa hal tallaabo undo. Eeg [Isticmaal MarkupCraft caawiye AI ah](topic:use-with-ai-assistants).

## Dhammaan apps-ka

- **Luuqado.** CadCraft Studio hadda wuxuu leeyahay 54 luuqo. Toban ayaa cusub: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili iyo Uzbek. Dhammaan luuqooyinka aan Ingiriisiga ahayn waa qabyo mashiin ah ilaa uu afhayeen dabiici ah akhriyo.
- **Aaladaha gelinta.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} waxa uu dejiyaa waxa trackpad-ka, badhamada dhinaca mouse-ka, qalinka, taabashada faraha, mouse 3D, kontoroolka ciyaarta ama kontoroolka MIDI ay sameeyaan, app kasta ama app-kan keliya. Ilaa aad wax beddesho, qalab kasta wuxuu shaqeeyaa sida hore. Eeg [Isticmaal trackpad, mouse 3D ama kontoroolka](common:input-devices).
- **Safafka qalabka.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wuxuu leeyahay {{ui:Wrap}} (caadiga), {{ui:2 rows}} iyo {{ui:1 row}}, si sawirku u helo meel dheeraad ah. Eeg [Habee panelada](common:arrange-panels).
- **Property grid.** Goobaha Style ee calaamadu waxay isticmaalaan grid-ka la wadaago, oo leh qaybo la soo xiri karo iyo tiirarka magaca iyo qiimaha.
- **Panelka dhibaatooyinka.** Digniinta app-ka sida hawl dib u dhacday, waxa lagu soo ururiyaa hal panel oo Dhibaatooyinka ah.
- **Live iyo add-ons.** Kalfadhiyada Live waxa lagu sharraxay [Shaqeyn wadajir ah oo toos ah](common:work-together-live); liiska add-ons ee akoonkaaga waxa lagu sharraxay [Add-ons iyo liiska akoonkaaga](common:addons-basics).
- **Ku xidh AI-gaaga.** CadCraft Studio waa xarunta caawiyahaaga gaarka ah: ku xidh hal mar dhammaan siddeed apps. Apps-ku ma leeyihiin AI ka dhex jirta.

## Ka saxday 0.8.1

- **Studio wuu beddeli karaa luuqada isagoo shaqeynaya.** Hore, app-ka desktop-ka iyo nooca la xirey waxay ahaayeen Ingiriisi. Tani weli lama tijaabin dhammaan platform-yada: ina sheeg haddii luuqadu aanu beddelin.
- Rakibaadda Studio 0.8 waxa loo soo bandhigaa 0.8.1 ee {{ui:Settings}} › {{ui:Updates}}.

## Weli nooca hadda ma jiro

- **Lama saxiixin code-ka.** Rakibeyaasha Windows iyo faylka .dmg ee macOS weli saxiix ma leh. Windows, haddii SmartScreen joojiyo rakibaadda, dooro {{ui:More info}}, markaas {{ui:Run anyway}}. Mac, midig-riix CadCraft Studio oo dooro {{ui:Open}}. Dhismayaasha dukaanka waa la hayaa.
- **Ku xidhida AI-ga weli waa dhammaysan la'aan meelo.** Ku xidhid hal-riix gudaha Studio, connector-ka martida ee caawiyayaasha browser-ka iyo furahaaga API-ga gudaha Studio lama balan qaadi karo nooca hadda. Hawl-wadaaga waa la tijaabiyay, laakiin weli caawiye dhab ah lama tijaabin.
- **Hubinta hawlaha waxay u baahan tahay isla cabbirka bogga.** Xaashi dib loo plot gareeyay cabbir kale ma isku mid noqon doonto, sidaas darteed hawlahiisa ma xidhmaan. Xaashiyada waxa lagu isku dhejiyaa lambarka xaashida, haddii kale booska bogga.
- **Calaamadaha codka waa duubisyo keliya.** Ma jiro qoraal, caawiyuhuna wuxuu arkaa dhererka, qoraha iyo caption-ka fiiro, ma aha codka. Duubista waa la tijaabiyay mic been ah browser madhan ah; mic dhab ah oo telefoon, tablet ama laptop ah wali waa in la hubiyaa.
- **Xaashiyada xisaabinta iyo sababaha PDF-ka** waxa lagu kaydiyaa gal gaar ah faylka gudihiisa. MarkupCraft oo hore wuu iska indha tiraa galkaas, markii uu kaydiyo wuu tirtiraa, sidaas darteed fur oo kaydi faylkaas 0.8 ama ka dambeeya.
- **Dhinaca qoraa-naqshadeeyaha ee redline-ka.** CadCraft oo akhrinaya faylka redline oo jawaabaya weli lama dhisin.
- **Luuqooyin kale.** Dhamaanka barta app-ka Tamil wuxuu ka baxaa 528 px.

Waxa kale oo ku jira [Waxa wali lagu dhisin](topic:not-built-yet). Nooca ka horreeya, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).

---
title: Mis on uut versioonis 0.7
summary: RFI-d, esitused ja päevaraamatud uues Väli-vahekaardis, tähtajad koos ületamisega punaselt, CSV ja BCF, töö võrguta ja Ühenda; assistendid, mis määravad staatusi, vastavad ja ekspordivad loendi; ühikute loendid, mis järgivad sätteid; paneelid, mis end kokku korjavad, ja dialoogid, mis liiguvad.
keywords: mis on uut, väljaannete märkmed, muudatuste logi, muudatused, 0.7, versioon, uued funktsioonid, väli, väljakirjed, rfi, päringu teave, esitus, päevaraamat, tähtaeg, ületatud, määratud mulle, naast, ühenda, võrguta, tahvel, bcf, csv, assistent, mcp, märgistuse staatus, vastus, eksport, ühikud, ühikute loendid, täht, kalibreeri, tihe, paneelid, dialoogid, portugali
from: 142e1a1e
---

See on, mis MarkupCraftis muutus versioonis 0.7 võrreldes versiooniga 0.6. Suurim uus asi on väljakirjed: RFI-d, esitused ja päevaraamatud, mis hoitakse PDF-is märgistuste kõrval.

## Uut

### RFI-d, esitused ja päevaraamatud

- **Väli-vahekaart.** Ava {{ui:Väli}} vahekaart ja vali {{ui:RFI}}, {{ui:Esitus}} või {{ui:Päevaraamat}}. Puuduta või klõpsa lehel kohta, kuhu RFI või esitus kuulub, ja naast märgib koha. Päevaraamat läheb avatud lehele ilma naastuta ({{ui:Aseta naast}} lisab naasti hiljem, {{ui:Teisalda naast}} teisaldab mis tahes naasti). Igal kirjel on oma number (RFI-0001, SUB-0001, LOG-0001), pealkiri, tekst, staatus, määratud isik, tähtaeg, vastuste lõim ja manuste nimede loend. Vt [Jälgi RFI-sid, esitusi ja päevaraamatuid](topic:field-records).
- **Vaata, mis on hilinenud.** Filtreeri loendit tüübi, staatuse, tähtaja (tähtaeg ületatud, tähtaeg 7 päeva pärast, tähtajaga või ilma), selle lehe või kõigi lehtede, tekstiotsingu või {{ui:Määratud mulle}} järgi. Kirje, mis on tähtajast üle ja ootab endiselt, on loendis ja oma naastul märgitud punasena **Tähtaeg ületatud**. Vt [Leia see, mis loeb](topic:field-records#find-what-matters).
- **CSV ja BCF.** {{ui:CSV}} kirjutab loendatud kirjed tabelina; {{ui:BCF}} kirjutab need BCF-teemadena, igaühel koha hetktõmmis lehel. Mõlemad järgivad filtreid. Vt [Eksport](topic:field-records#export).
- **Võrguta ja kaks koopiat üheks.** Kirjed salvestatakse PDF-i sisse ja ei vaja võrku, nii et tahvelarvuti kohapeal saab neid lisada, vastata ja salvestada. Kontoris ühendab {{ui:Ühenda}} teise sama PDF-i koopia kirjed nende ID-de järgi ühe tagasivõtmise sammuna. Vt [Salvestamine, võrguta töö ja koopiate ühendamine](topic:field-records#save-offline-and-merging-copies).

### AI-assistendid

- **Rohkem, mida assistent teha saab.** Sinu enda assistent, mis on ühendatud CadCraft Studio kaudu, saab nüüd määrata märgistuse staatust (`markup_status`, logitakse selle lõimes), vastata lõimes (`markup_reply`) ja eksportida {{ui:Märgistused}} loendi CSV- või BCF-na (`markups_export`, mida loend näitab oma filtritega). Iga muudatus on üks tagasivõtmise samm ja on allkirjastatud assistendi nimega. Vt [Mida assistent võib küsida](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Kõigis rakendustes

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab eraldi loendit pikkuse, pindala, mahu, nurga ja kalde jaoks, täpsete suurustega, mis tulevad ühikute definitsioonidest (USA mõõdu-jalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need lahkuvad ühikute loenditest; tähista üks tärniga ja uus töö algab selles. Fail säilitab alati oma ühiku. MarkupCraftis järgivad mõõtmise ja asukoha ühikud ning kalibreerimisdialoogi ühik {{ui:Sätted}} › {{ui:MarkupCraft}} lülitusi; täht määrab mõõtühiku, kuni salvestad MarkupCraft'i enda sätted; ja tegelik kaugus, mille kalibreerimisel sisestad, võib kanda mis tahes ühiku tähist, nagu `3 yd` või `1.5 km`. Vt [Ühikud, sisestatud väärtused ja ühikute loendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end kokku korjavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista see, et paneel kinnitada või vabaks teha; pane see teise paneeli ribale, et jagada üks raam vahekaartidena; kinnita see, et see libiseks servale; või peida ja too servast tagasi. Vt [Paneelide paigutamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoog pealkirjaribast jooniselt eemale; see tuleb tagasi sinna, kus jätsid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vt [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid AI-assistentidele.** Kümme läbi töötatud päringut sinu enda assistendile (korista joonis, joonista plaanikomplekt, kontrolli jooniseid, küsi mudeli kohta, koosta kogus, proovi detaili varianti…), igaüks koos kutsutavate tööriistade ja vajalike lubadega ning igaüks meie testidega uuesti läbi mängitud. Rakendused ei sisalda AI-d. Vt [Retseptid AI-assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus valik {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}} all. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd kõigi rakenduste sõnadega, kuid mustanditena, mida emakeelne kasutaja pole veel üle vaadanud. Abi teemad on inglise keeles.
- **CadCraft Studio** ütleb nüüd, miks uuenduse kontroll ebaõnnestus (sinu süsteemile pole faili, võrku pole, allkiri on vigane), selle asemel et lihtsalt „Valmis“, ja ei too enam tagasi suletud kaarti Mis on uut, kuni on uuem väljaanne.

## Pole selles versioonis veel

- **0.7 pole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store’i pakett lükati versioonile 0.8, sest sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 räsi lehel getcadcraft.com/download. Windowsis, kui SmartScreen peatab installija, vali {{ui:Lisateave}}, seejärel {{ui:Käivita siiski}}. Macis tuleb esmakordselt paremklõpsata CadCraft Studiol ja valida {{ui:Ava}}. CadCraft Studio pole veel ühegi rakenduspoes ega iPadi ega iPhone'i versiooni pole veel.
- Ühikute {{ui:Ühikud}} nurga- ja kaldeloendid salvestatakse, aga ükski kast neid veel ei loe.
- Väljakirjeid ei jagata CadCraft Studio reaalajaseansis (reaalajaseansid kannavad ainult märgistusi); too koopiad kokku {{ui:Ühenda}} abil.
- Ühenda võtab kirje tervikuna sellest koopiast, mida viimati muudeti: kui kaks inimest muutsid ühe kirje eri välju, võidavad hilisema koopia väljad. Lõimed ja manuste nimed ühendatakse.
- Manused on ainult nimed; failid jäävad sinna, kus on. Väljakirjetel ei ole tiime, teavitusi ega pilveprojekte ning assistentidel pole veel väljakirjete tööriistu.
- Väljakirjeid testiti brauseris telefoni ja tahvli suurustes ja võrgu ühenduse katkestamisel, aga pole veel käsitsi päris tahvelarvutil proovitud.
- Veel versioonist 0.6: lehe objektide pööramine mis tahes nurga alla, uute kujundite joonistamine otse lehele, joone fondi või suuruse muutmine ning tekst, mis voolab mitmele reale. Lehe muudatustega salvestatud koopiat pole veel Acrobatis avatud.
- Veel versioonist 0.5: lehe muudatuse tagasivõtmine (näiteks tühja lehe lisamine), tekstide lugemine skaneeritud lehtedelt ja reaalajaseansid väljaspool sinu oma võrku.

Kõik muu on jaotises [Mida pole veel ehitatud](topic:not-built-yet).

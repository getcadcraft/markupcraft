---
title: Mis on uut versioonis 0.7 (varasem)
summary: RFI-d, esitused ja päevaraamatud uuel Väli-kaardil, tähtajad, tähtaeg ületatud punasega, CSV ja BCF, võrguta töö ja Ühenda; abilised, kes määravad olekuid, vastavad ja ekspordivad loendi; ühikuloendid, mis järgivad Sätteid; paneelid, mis end korrastavad, ja dialoogid, mida saab liigutada.
keywords: mis on uut 0.7, varasem väljalase, väljalaskemärkmed, muudatuste logi, muudatused, 0.7, versioon, uued funktsioonid, väli, väljakirjed, rfi, teabepäring, esitus, päevaraamat, tähtaeg ületatud, tähtaeg, määratud mulle, naast, ühenda, võrguta, tahvel, bcf, csv, abiline, mcp, märgistuse olek, vastus, eksport, ühikud, ühikuloendid, täht, kalibreerimine, tihe, paneelid, dialoogid, portugali keel
from: f8578677
---

Need on muudatused versioonis MarkupCraft 0.7 võrreldes versiooniga 0.6. Suur uus asi on väljakirjed: RFI-d, esitused ja päevaraamatud, mida hoitakse PDF-i sees märgistuste kõrval.

## Uus

### RFI-d, esitused ja päevaraamatud

- **Väli-kaart.** Ava {{ui:Väli}} kaart ja vali {{ui:RFI}}, {{ui:Esitus}} või {{ui:Päevaraamat}}. Puuduta või klõpsa lehel kohta, kuhu RFI või esitus kuulub, ja naast märgib koha; päevaraamat läheb avatud lehele ilma naastuta ({{ui:Aseta naast}} lisab naasta hiljem, {{ui:Teisalda naast}} liigutab mistahes naastu). Igal kirjel on oma number (RFI-0001, SUB-0001, LOG-0001), pealkiri, tekst, olek, määratud isik, tähtaeg, vastuste lõim ja manuste nimede loend. Vt [RFI-de, esituste ja päevaraamatute jälgimine](topic:field-records).
- **Vaata, mis on hilinenud.** Filtreeri loendit tüübi, oleku ja tähtaja järgi (tähtaeg ületatud, tähtaeg 7 päeva pärast, tähtaeg on või puudub), selle lehe või kõigi lehtede järgi, teksti otsingu või {{ui:Määratud mulle}} järgi. Kirje, mille tähtaeg on möödas ja mis veel ootab, märgitakse loendis ja oma naastul punasega **Tähtaeg ületatud**. Vt [Leia see, mis on oluline](topic:field-records#find-what-matters).
- **CSV ja BCF.** {{ui:CSV}} kirjutab loendatud kirjed tabelarvutusena; {{ui:BCF}} kirjutab need BCF-teemadena, igaüks koos pildiga oma kohast lehel. Mõlemad järgivad filtreid. Vt [Eksport](topic:field-records#export).
- **Võrguta töö ja kaks koopiat üheks.** Kirjed salvestatakse PDF-i sisse ja need ei vaja võrku, nii et kohapeal olev tahvelarvuti saab neid lisada, neile vastata ja need salvestada. Kontorisse tagasi jõudes ühendab {{ui:Ühenda}} sama PDF-i teise koopia kirjed nende ID-de järgi ühe võtmise sammuna. Vt [Salvestamine, võrguta töö ja koopiate ühendamine](topic:field-records#save-offline-and-merging-copies).

### Tehisintellekti abilised

- **Rohkem, mida abiline teha saab.** Sinu oma abiline, mis on ühendatud CadCraft Studio kaudu, saab nüüd määrata märgistuse oleku (`markup_status`, logitud tema lõimes), vastata lõimes (`markup_reply`) ja eksportida {{ui:Märgistused}} loendi CSV-na või BCF-ina (`markups_export`, see, mida loend näitab oma filtritega). Iga muudatus on üks võtmise samm ja on allkirjastatud abilise nimega. Vt [Mida abiline võib paluda](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Igas rakenduses

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab pikkuse, pindala, ruumala, nurga ja kalde jaoks igaühe oma loendit täpsete suurustega, mis ühikute definitsioonides on (USA mõõdistusjalg on eraldi ühik). Lülita välja ühikud, mida ei kasuta, ja need eemaldatakse ühikuloenditest; märgi üks tähega ja uus töö algab sellega. Fail hoiab alati oma ühikut. MarkupCraftis järgivad mõõtmise ja asukoha ühikud jaotises {{ui:Sätted}} › {{ui:MarkupCraft}} ning kalibreerimisdialoogi ühik lülitite järgi; täht määrab mõõtühiku, kuni salvestad MarkupCraft'i enda sätted, ja tegelik kaugus, mille kalibreerimisel sisestad, võib kanda mis tahes ühiku tähist, näiteks `3 yd` või `1.5 km`. Vt [Ühikud, sisestatud väärtused ja ühikuloendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end korrastavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista see, et paneel kinnitada või ujuma panna, viska teise paneeli ribale, et jagada üks raam kaartidena, kinnita see, et see libiseks serva, või peida see ja too serva pealt tagasi. Vt [Paneelide korraldamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi pealkirjaribast joonisest kõrvale; see tuleb tagasi sinna, kus jätsid. Topeltklõps pealkirjaribal paigutab selle uuesti keskele. Vt [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid tehisintellekti abilistele.** Kümme läbitöötatud päringut sinu oma abilisele (joonise korrastamine, komplekti plottimine, jooniste kontrollimine, mudeli küsimused, koguste arvestuse kokkuvõte, detaili variandi proovimine …), igaüks koos tööriistadega, mida see kasutab, ja lubadega, mida vajab; igaüks on meie testidega uuesti läbi mängitud. Rakendused ei sisalda tehisintellekti. Vt [Retseptid tehisintellekti abilistele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus valik jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}}. Koos keeltega **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on sellel nüüd kõik rakenduse sõnad, kuid mustanditena, mida emakeelne kõneleja pole veel üle vaadanud. Abitekstid on inglise keeles.
- **CadCraft Studio** ütleb, miks uuenduse kontroll ebaõnnestus (sinu süsteemi jaoks pole veel faili, võrku pole, allkiri on vale), selle asemel et lihtsalt öelda „Valmis“, ning ei too enam tagasi suletud kaarti „Mis on uut“, kuni on tulnud uuem väljalase.

## Selles versioonis veel pole

- **0.7 ei ole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakett lükkusid versioonile 0.8, sest sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 väärtust aadressil getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Lisateave}}, seejärel {{ui:Käivita siiski}}. Macis vali esmakordsel käivitamisel paremklõpsuga CadCraft Studio ja vali {{ui:Ava}}. CadCraft Studio ei ole veel üheski rakenduste poes ning iPadi ega iPhone'i versiooni veel pole.
- Nurga- ja kallaloendid jaotises {{ui:Ühikud}} salvestatakse, kuid ükski kast neid veel ei loe.
- Väljakirjeid ei jagata CadCraft Studio Live-seansil (Live-seansid kannavad ainult märgistusi); too koopiad kokku {{ui:Ühenda}} abil.
- Ühendamisel võetakse kirje tervikuna viimati muudetud koopiast: kui kaks inimest muutsid ühe kirje erinevaid välju, võidavad hilisema koopia väljad. Lõimed ja manuste nimed liidetakse kokku.
- Manused on ainult nimed; failid jäävad sinna, kus need on. Kirjete jaoks ei ole meeskondi, teavitusi ega pilveprojekte ning abilistel pole veel kirjetega töötamise tööriistu.
- Väljakirjeid testiti brauseris telefoni- ja tahvelarvuti mõõtudes katkestatud võrguga, kuid veel mitte käsitsi päris tahvelarvutil.
- Jätkuvalt versioonist 0.6: lehe objektide pööramine mistahes nurga all, uute kujundite joonistamine otse lehele, joone fondi või suuruse muutmine ja mitmele reale voolav tekst. Lehemuudatustega salvestatud koopiat pole Acrobatis veel avatud.
- Jätkuvalt versioonist 0.5: lehemuudatuse võtmine tagasi (näiteks tühja lehe lisamine), tekstide lugemine skannitud lehtedelt ja Live-seansid väljaspool sinu oma võrku.

Kõik muu on jaotises [Mis pole veel ehitatud](topic:not-built-yet).

---
title: Nýtt í 0.7 (eldra)
summary: RFI-ar, samþykktarbeiðnir og dagbækur í nýjum flipa Vettvangs, með skiladögum, útrunnið í rauðu, CSV og BCF, vinna án nettengingar og Sameina; aðstoðarmenn sem stilla stöður, svara og flytja út listann; einingalistar sem fylgja Stillingum; spjöld sem fela sig og gluggar sem færast til.
keywords: nýtt í 0.7, eldri útgáfa, útgáfuskýringar, breytingaskrá, breytingar, 0.7, útgáfa, nýir eiginleikar, vettvangur, vettvangsfærslur, rfi, beiðni um upplýsingar, samþykktarbeiðni, dagbók, skiladagur, úthlutað mér, nál, sameina, án nettengingar, spjaldtölva, bcf, csv, aðstoðarmaður, mcp, staða merkingar, svar, útflutningur, einingar, einingalistar, stjarna, kvörðun, þétt, spjöld, gluggar, portúgalska
from: f8578677
---

Þetta er það sem breyttist í MarkupCraft 0.7 miðað við 0.6. Stóra nýjungin eru vettvangsfærslur: RFI-ar, samþykktarbeiðnir og dagbækur sem eru geymdar inni í PDF-skránni við hliðina á merkingunum.

## Nýtt

### RFI-ar, samþykktarbeiðnir og dagbækur

- **Vettvangsflipinn.** Opnaðu flipann {{ui:Vettvangur}} og veldu {{ui:RFI}}, {{ui:Samþykktarbeiðni}} eða {{ui:Dagbók}}. Pikkaðu eða smelltu á blaðið þar sem RFI eða samþykktarbeiðni á heima, og nál merkir staðinn; dagbók fer á opna blaðið án nálar ({{ui:Setja nál}} bætir einni við síðar, {{ui:Færa nál}} færir hvaða nál sem er). Hver færsla hefur sitt eigið númer (RFI-0001, SUB-0001, LOG-0001), heiti, texta, stöðu, ábyrgðarmann, skiladag, þráð svara og lista yfir heiti viðhengja. Sjá [Fylgstu með RFI-um, samþykktarbeiðnum og dagbókum](topic:field-records).
- **Sjáðu hvað er á eftir.** Síaðu listann eftir gerð, stöðu, skiladegi (útrunnið, á að skila innan 7 daga, hefur eða hefur ekki skiladag), þessu blaði eða öllum blöðum, textaleit eða {{ui:Úthlutað mér}}. Færsla sem er komin fram yfir skiladag og bíður enn er merkt **Útrunnið**, í rauðu, á listanum og á nálinni sinni. Sjá [Finndu það sem skiptir máli](topic:field-records#find-what-matters).
- **CSV og BCF.** {{ui:CSV}} skrifar færslurnar á listanum sem töflureikni; {{ui:BCF}} skrifar þær sem BCF-umræðuefni, hvert með mynd af staðsetningu sinni á blaðinu. Bæði fylgja síunum. Sjá [Útflutningur](topic:field-records#export).
- **Án nettengingar, og tvö afrit gerð að einu.** Færslur eru vistaðar inni í PDF-skránni og þurfa ekkert net, svo spjaldtölva á staðnum getur bætt þeim við, svarað þeim og vistað þær. Þegar komið er aftur á skrifstofuna sameinar {{ui:Sameina}} færslur úr öðru afriti af sömu PDF-skrá eftir auðkennum þeirra, sem eitt afturköllunarskref. Sjá [Vistun, vinna án nettengingar og sameining afrita](topic:field-records#save-offline-and-merging-copies).

### Gervigreindaraðstoðarmenn

- **Meira sem aðstoðarmaður getur gert.** Þinn eigin aðstoðarmaður, tengdur í gegnum CadCraft Studio, getur nú stillt stöðu merkingar (`markup_status`, skráð í þráðinn hennar), svarað í þræði (`markup_reply`) og flutt út listann {{ui:Merkingar}} sem CSV eða BCF (`markups_export`, það sem listinn sýnir með síunum sínum). Hver breyting er eitt afturköllunarskref, undirrituð með nafni aðstoðarmannsins. Sjá [Hvað aðstoðarmaður getur beðið um](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Í öllum forritum

- **Einingar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Einingar}} er með einn lista hvort fyrir lengd, flatarmál, rúmmál, horn og halla, með nákvæmum stærðum sem skilgreiningar eininganna gefa (bandaríski landmælingafóturinn er sín eigin eining). Slökktu á einingunum sem þú notar aldrei og þær hverfa af einingalistunum; stjörnumerktu eina og ný vinna byrjar í henni. Skrá heldur alltaf sinni eigin einingu. Í MarkupCraft fylgja mæli- og staðsetningareiningarnar í {{ui:Stillingar}} › {{ui:MarkupCraft}} og einingin í kvörðunarglugganum rofunum; stjarnan stillir mæliseininguna þar til þú vistar eigin stillingar MarkupCraft, og raunveruleg fjarlægð sem þú slærð inn við kvörðun getur borið merki hvaða einingar sem er, eins og `3 yd` eða `1.5 km`. Sjá [Einingar, slegin gildi og einingalistar](common:unit-lists).
- **Þéttara skipulag og spjöld sem fela sig.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Þéttleiki skipulags}} › {{ui:Þétt}} kemur meira fyrir á skjánum (snertiskjáir og símar halda stóru hnöppunum sínum). Hvert hliðarspjald er með mjóa titilstiku: dragðu hana til að festa spjaldið eða gera það fljótandi, slepptu því á titilstiku annars spjalds til að deila einum ramma sem flipum, festu það til að renna út að jaðrinum, eða feldu það og kallaðu það aftur fram frá jaðrinum. Sjá [Raðaðu spjöldunum](common:arrange-panels#make-the-layout-denser).
- **Gluggar færast til.** Dragðu valglugga eftir titilstikunni úr vegi teikningarinnar; hann kemur aftur þangað sem þú skildir við hann. Tvísmelltu á titilstikuna til að miðja hann aftur. Sjá [Færðu valglugga](common:arrange-panels#move-a-dialog).
- **Uppskriftir fyrir gervigreindaraðstoðarmenn.** Tíu útfærð dæmi um beiðnir til þíns eigin aðstoðarmanns (taka til teikningu, prenta sett, yfirfara teikningar, spyrja líkan spurninga, taka saman magntöku, prófa afbrigði af hluta…), hvert með verkfærunum sem það kallar á og heimildunum sem það þarf, og hvert endurkeyrt af prófunum okkar. Forritin innihalda enga gervigreind. Sjá [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes).
- **Tungumál.** **Português (Portugal)** er nýtt í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Tungumál}}. Það, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** hafa nú hvert orð forritanna, sem drög sem móðurmálsmanneskja hefur ekki yfirfarið. Hjálparefnið er á ensku.
- **CadCraft Studio** segir af hverju uppfærsluathugun mistókst (engin skrá fyrir kerfið þitt enn, ekkert net, röng undirskrift) í stað þess að segja bara „Lokið“, og hættir að birta aftur kortið „Nýtt“ sem þú lokaðir þar til nýrri útgáfa kemur.

## Ekki komið í þessa útgáfu enn

- **0.7 er ekki kóðaundirrituð.** Undirritun og Microsoft Store-pakkinn færðust yfir í 0.8 því staðfesting skilríkisins er ekki komin í gegn enn. Athugaðu SHA-256 gildið við hverja skrá á getcadcraft.com/download. Á Windows, ef SmartScreen stöðvar uppsetningarforritið, veldu {{ui:Meiri upplýsingar}}, síðan {{ui:Keyra samt}}. Á Mac, í fyrsta skipti, hægrismelltu á CadCraft Studio og veldu {{ui:Opna}}. CadCraft Studio er ekki í forritaverslun enn, og engin iPad- eða iPhone-útgáfa er til enn.
- Horn- og hallalistarnir í {{ui:Einingar}} eru vistaðir, en ekkert tól les þá enn.
- Vettvangsfærslur eru ekki deildar í lifandi lotu í CadCraft Studio (lifandi lotur bera aðeins merkingar); færðu afrit saman með {{ui:Sameina}}.
- {{ui:Sameina}} tekur færslu í heild úr afritinu sem var breytt síðast: ef tveir breyttu mismunandi reitum í sömu færslu, þá gilda reitir síðara afritsins. Þræðir og heiti viðhengja eru sameinuð.
- Viðhengi eru aðeins heiti; skrárnar eru áfram þar sem þær eru. Engin teymi, tilkynningar eða skýjaverkefni eru fyrir færslur, og aðstoðarmenn hafa enn engin verkfæri fyrir færslur.
- Vettvangsfærslur voru prófaðar í vafra í stærðum síma og spjaldtölvu með slitnu neti, en ekki enn handvirkt á alvöru spjaldtölvu.
- Enn frá 0.6: snúningur síðuhluta í hvaða horn sem er, teikning nýrra forma beint á síðuna, breyting á letri eða stærð línu, og texti sem flæðir yfir margar línur. Vistað afrit með breytingum á síðu hefur ekki verið opnað í Acrobat enn.
- Enn frá 0.5: að afturkalla breytingu á síðu (til dæmis að bæta við auðri síðu), lesa texta úr skönnuðum blöðum og lifandi lotur utan þíns eigin nets.

Allt annað er í [Það sem er ekki smíðað enn](topic:not-built-yet).

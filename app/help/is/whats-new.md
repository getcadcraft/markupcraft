---
title: Nýtt í 0.9
summary: Athugasemdir og klippiborð sem prentast aldrei, dulkóðaðar einkaathugasemdir og hreint afrit fyrir viðskiptavininn, lotutenglar fyrir heilt teikningasett, Arc-verkfæri með tíu aðferðum, að fylgja öðrum yfirferðarmanni í Live og lagfæring á eyddum merkingum sem haldast í vistaðri PDF-skrá.
keywords: nýtt, 0.9, útgáfuskýringar, breytingaskrá, athugasemdir, klippiborð, einkaathugasemdir, lykilsetning, dulkóðað, fela athugasemdir, sýna athugasemdir, hreint afrit, mynd, lotutenglar, tenglar á blöð, titilreitur, blaðnúmer, viðauki, endurnúmerun, pdf-tengill, arc, arc-aðferðir, þriggja punkta bogi, radíus, fylgja, fylgja mér, lifandi, bekkjarsýn, listi yfir fólk, eydd merking, vísbendingar, flipaheiti, 0.8, 0.8.1, útgáfa, nýir eiginleikar, verkefni, úthlutun, skiladagur, útrunnið, athuga núna, hvað breyttist, endurskoðanir, samanburður, raddathugasemd, ákvörðun, rauðlína, svarskrá, teiknari, aðstoðarmaður, mcp, vandamál, tungumál, inntakstæki, snertiflötur, eiginleikatafla, uppfærsla
from: dbdd7ed4
---

Þetta er það sem breyttist í MarkupCraft 0.9 miðað við 0.8.1. Meginhugmyndin er sú að vinnuathugasemdirnar þínar haldist af síðunni sem viðskiptavinurinn fær, og að heilt teikningasett sé hægt að tengja í einni umferð.

## Nýtt

### Athugasemdir, klippiborðið og einkaathugasemdir

- **Klippiborðið.** Svæðið umhverfis hvert blað er borð: allt sem er teiknað, slegið inn eða límt við hliðina á blaðinu er athugasemd og prentast aldrei. Veldu {{ui:Sýna klippiborðið}} til að minnka aðdrátt og fá rými, eða {{ui:Taka mynd á klippiborðið}}, dragðu reit og síðan {{ui:Á klippiborðið}} til að setja mynd af hluta teikningarinnar við hlið blaðsins. Mynd breytist ekki þegar blaðið breytist. Sjá [Athugasemdir, klippiborðið og einkaathugasemdir](topic:notes-and-pasteboard).
- **Sýna og fela athugasemdir.** Hvaða merking sem er getur verið athugasemd: stilltu {{ui:Nýjar merkingar eru}} í flipanum {{ui:Athugasemdir}}, eða {{ui:Þessi merking er}} í {{ui:Eiginleikar}}. {{key:Shift+H}} eða rofinn {{ui:Athugasemdir}} undir blaðinu felur og sýnir allar athugasemdir í einu. Athugasemdir eru skildar eftir við prentun, flatar afrit, lista og útflutning, og önnur PDF-lesforrit sýna þær ekki. Vistaða PDF-skráin geymir þær fyrir næst þegar þú opnar hana í MarkupCraft.
- **Einkaathugasemdir.** Veldu {{ui:Stilla lykilsetningu}}, gerðu síðan merkingu að {{ui:Einkaathugasemd}}. Hún er dulkóðuð í skránni með lykilsetningu sem er að minnsta kosti 10 stafir, og engin endurheimt er möguleg: enginn, þar með talið við, getur opnað hana án lykilsetningarinnar. {{ui:Læsa}} setur einkaathugasemdir í geymslu; {{ui:Vera opið á þessu tæki}} er sjálfgefið slökkt.
- **Vista hreint afrit.** {{ui:Vista hreint afrit}} fjarlægir allar athugasemdir, einkaathugasemdir og allt á klippiborðinu. Notaðu það fyrir skrána sem fer til viðskiptavinarins.

### Tengdu heilt sett

- **Lotutenglar.** Veldu {{ui:Síður}} › {{ui:Fjöldatenglar…}}, eða {{ui:Tengja tilvísanir í blöð…}} undir {{ui:Finna texta}} í spjaldinu {{ui:Blöð}}. Skref 1 sýnir númer og heiti hvers blaðs eins og þau eru lesin af titilreitnum; lagfærðu þau sem eru röng. Skref 2 sýnir tilvísanirnar sem fundust, eins og `3/A-501` eða `DETAIL 2 ON A-501`. {{ui:Verður tengt}} sýnir blaðið og sýnina fyrir hverja, {{ui:Ekki tengt}} sýnir númer sem ekkert opið blað hefur, og {{ui:Búa til tenglana}} býr til þá alla í einu afturköllunarskrefi. Keyrðu það aftur eftir viðauka eða endurnúmerun; tenglum sem þú bjóst til með hendi er aldrei breytt. Tengill með sýn er vistaður sem PDF-tengill, svo að önnur lesforrit opna smáatriðin líka. Sjá [Tenglar á blöð](topic:sheet-links).

### Teikning

- **Bogi, tíu aðferðir.** Verkfærið {{ui:Bogi}} ({{key:O}}) er nú með reitinn {{ui:Aðferð bogans}} yfir síðunni með tíu leiðum til að teikna boga, og horn, lengd, radíus og stefnu er hægt að smella á eða slá inn. Sjá [Teiknaðu boga á tíu vegu](topic:draw-an-arc).

### Vinna saman

- **Fylgdu yfirferðarmanni.** Í lifandi lotu veldu {{ui:Fylgja}} við hlið nafns manneskju og sýnin þín færist með hennar; ef þú hreyfir sjálfur til eða aðdrar stöðvast það. Gestgjafinn getur valið {{ui:Biðja alla um að fylgja mér}}. Listinn yfir fólk sýnir lit hvers og eins, nafn, blaðið sem viðkomandi er á og hvenær síðasta breyting var gerð. Sjá [Fylgdu öðrum yfirferðarmanni í lifandi lotu](topic:follow-in-live).

## Í öllum forritum

- Vísbendingar eru Bootstrap-vísbendingar, upphafsvísbendingin er hægt að loka, flipastikur fletta þegar þær flæða yfir, og flipaheiti í vafra lesast `<document> — MarkupCraft | CadCraft`.
- Spjald með nokkrum hlutum opnar einn og lokar hinum (lás við hlið örvarinnar heldur einum opnum); rofi í Stillingum slekkur á þessu.
- Hvert forrit byrjar með sjálfgefnu safni af hlutum úr Safni.
- Þyngdar- og hitaeiningar eru fáanlegar í stillingum fyrir {{ui:Einingar}}.

## Lagfært

- **Eyddar merkingar eru ekki lengur læsilegar í vistaðri PDF-skrá.** Áður tók vistun eydda eða endurskrifaða athugasemd af síðunni en skildi hlutinn eftir í skránni með textanum sínum. Nú eyðir vistun þessum hlutum. Skrár sem voru vistaðar með eldri smíðum geyma þá enn þar til þú vistar þær aftur.

## Hreinskilin takmörk

- Lotutenglar voru prófaðir á eigin prófunarsettum. Raunveruleg sett teikna vísihringi á margan hátt, svo í setti viðskiptavinar kann sumum sýnum að vera sleppt. Skönnuð blöð þurfa fyrst {{ui:Lesa texta (OCR)…}}.
- Athugasemdir, einkaathugasemdir og klippiborðið voru prófaðar í vafra án skjás og í eigin skrám, ekki með stóru raunverulegu vektorsetti og ekki í raunverulegri Live-lotu með tveimur. Það er ekki hægt enn að breyta lykilsetningu. Smíðar eldri en 0.9 sýna ekki athugasemdir.
- Bekkjarsýnin er listi yfir fólk; hún hefur ekki verið prófuð með raunverulegum kennara og nemendum.
- Tungumál önnur en enska eru vélknúin drög þar til móðurmálsmanneskja les þau.
- Uppsetningarforrit fyrir Windows eru ekki kóðaundirrituð ({{ui:Meiri upplýsingar}}, síðan {{ui:Keyra samt}}); diskmyndin fyrir macOS er ekki staðfest hjá Apple (hægrismelltu, síðan {{ui:Opna}}).

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í MarkupCraft 0.8 og 0.8.1 miðað við 0.7. Stóra nýjungin er að merking getur verið verkefni sem einhver, eða þinn eigin aðstoðarmaður, vinnur, og sem lokar sjálfu sér þegar teikningin breytist í raun.

### Nýtt

**Merkingar sem framkvæma**

- **Gerðu merkingu að verkefni.** Veldu eina eða fleiri merkingar, opnaðu flipann {{ui:Verkefni}} og veldu {{ui:Gera valið að verkefni}}. Verkefni hefur heiti, manneskju eða tengdan aðstoðarmann sem vinnur það, valfrjálsan skiladag og stöðu, og það heldur stað sínum á blaðinu og þræði sínum. Sjá [Gerðu merkingu að verkefni](topic:markups-that-act).
- **Verkefni sem loka sjálfum sér.** Verkefni getur fylgst með teikningunni innan merkingar sinnar. Opnaðu nýrri endurskoðun blaðsins og veldu {{ui:Athuga núna}}: ef línurnar á því svæði hafa breyst um meira en hár, er verkefnið merkt Lokið, merkingin verður Kláruð og athugasemd í þræðinum segir hvað breyttist. Nýr dagsetningarstimpill, eða línur sem hafa færst minna en 1,5 punkta, telja ekki. Verkefni getur í staðinn fylgst með líkanshlut: aðstoðarmaðurinn þinn tilkynnir hlutinn með `tasks_check`, og síðari tilkynning sem er frábrugðin, eða eyddur hluti, lokar verkefninu. Eitt afturköllunarskref opnar það aftur.
- **Finndu verkin.** Síaðu listann {{ui:Verkefni}} eftir stöðu og eftir því hver það er fyrir, þar með talið {{ui:Útrunnið}}; veldu {{ui:Úthlutað til}}, síðan {{ui:Aðstoðarmaður}} til að sjá það sem bíður aðstoðarmannsins þíns. Verkefni sem er komið fram yfir skiladaginn sinn birtist sem viðvörun í spjaldinu Vandamál. {{ui:CSV}} flytur listann út. Verkefni eru vistuð í PDF-skránni með merkingunni og ferðast í gegnum Live eins og aðrir eiginleikar merkinga.

**Hvað breyttist, sem einfaldur listi**

- **Skráðu breytingarnar.** Opnaðu flipann {{ui:Bera saman}}, síðan {{ui:Bera saman heilt sett}}, veldu eldri og nýrri skrána og veldu {{ui:Lista breytingarnar}}. Listinn byrjar á talningu og fjallar síðan um hvert breytt blað, það mesta fyrst: hvar á blaðinu, hversu stórt (í raunverulegum einingum auk tommu á pappírnum á kvörðuðu blaði), hvort línur bættust við eða voru fjarlægðar, hversu margar merkingar eru þar og hvaða orð birtust eða hurfu. {{ui:Afrita listann}} setur hann á klippiborðið og {{ui:CSV}} skrifar eina línu fyrir hverja breytingu. Sjá [Skráðu breytingar milli endurskoðana](topic:what-changed-in-words).

**Raddathugasemdir og ákvarðanir**

- **Raddathugasemdir.** Í flipanum {{ui:Athugasemdir}} veldu {{ui:Taka upp raddathugasemd}}, síðan {{ui:Hætta upptöku}}; upptökur stöðvast af sjálfu sér eftir tvær mínútur. Athugasemdin er fest í miðju blaðsins, þú dregur hana þangað sem hún á heima og slærð inn skýringu í {{ui:Eiginleikar}}, og {{ui:Spila}} í listanum spilar hana. Upptakan er vistuð inni í PDF-skránni.
- **Ákvarðanir.** {{ui:Festa ákvörðun}} skrifar setningu eða tvær á blaðið. Ef hún kemur í stað fyrri ákvörðunar, veldu hana í {{ui:Hún kemur í stað}}: sú gamla helst, merkt Skipt út, og vísar á þá nýju. Eitt afturköllunarskref tekur hana til baka. Sjá [Festu raddathugasemdir og ákvarðanir á blað](topic:voice-notes-and-decisions).

**Yfirferð í endurskoðun**

- **Sendu og svaraðu.** Í flipanum {{ui:Verkefni}} opnaðu {{ui:Yfirferð í endurskoðun}}, sláðu inn endurskoðunina sem merkingarnar miðast við og veldu {{ui:Flytja út rauðlínuskrá}}. Þú færð `.redline.json`-skrá með einu atriði fyrir hverja opna merkingu: blað, staðsetningu (sem brot af blaðinu, svo endurteikning í annarri stærð stemmi enn), orð, höfund, þráð og verkefni hennar. Sá sem teiknar breytingarnar svarar með Samþykkt, Hafnað eða Lokið í `.redline-answers.json`-skrá; {{ui:Hlaða inn svarskrá…}} gefur hverri merkingu þá stöðu og athugasemd teiknarans, sem eitt afturköllunarskref. Sjá [Sendu merkingar til teiknarans sem rauðlínu](topic:redline-to-revision).

**Gervigreindaraðstoðarmenn**

- **Fleiri verkfæri.** Aðstoðarmaður sem þú tengdir í gegnum CadCraft Studio getur listað verkefni (`tasks_list`), búið til eða breytt einu (`task_set`), tekið verkefnið af (`task_clear`), athugað eitt gegn nýrri endurskoðun eða líkanshluta (`tasks_check`) og lesið einfalda listann yfir breytingar milli tveggja opinna teikningasetta (`revisions_changes`). Hann fær aðeins þau verkfæri sem þú hakaðir við undir rofanum Aðstoðarmenn, og hver breyting er eitt afturköllunarskref. Sjá [Notaðu MarkupCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

### Í öllum forritum

- **Tungumál.** CadCraft Studio hefur nú 54 tungumál. Tíu eru ný: litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippseyska, svahílí og úsbeska. Öll tungumálin önnur en enska eru vélknúin drög þar til móðurmálsmanneskja les þau.
- **Inntakstæki.** {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Inntakstæki}} ákveður hvað snertiflötur, hliðarhnappar músarinnar, penni, fingursnerting, þrívíð mús, leikjastýring eða MIDI-stýring gerir, fyrir hvert forrit eða aðeins fyrir þetta eina. Þar til þú breytir einhverju virkar hvert tæki eins og áður. Sjá [Notaðu snertiflöt, þrívíða mús eða stýringu](common:input-devices).
- **Línur tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} hefur {{ui:Vefja}} (sjálfgefið), {{ui:2 línur}} og {{ui:1 lína}}, svo teikningin fær meira rými. Sjá [Raðaðu spjöldunum](common:arrange-panels).
- **Eiginleikatafla.** Stílreitir merkingar nota sameiginlegu töfluna, með samanfellanlegum flokkum og dálkum fyrir heiti og gildi.
- **Vandamálaspjald.** Viðvaranir úr forritinu, eins og verkefni sem er útrunnið, safnast saman í eitt spjald Vandamála.
- **Live og viðbætur.** Lifandi lotur eru lýstar í [Vinnið saman í beinni](common:work-together-live); listi viðbóta sem fylgir aðganginum þínum er í [Viðbætur og listi yfir aðganginn þinn](common:addons-basics).
- **Tengdu gervigreindina þína.** CadCraft Studio er miðstöðin fyrir þinn eigin aðstoðarmann: tengdu einu sinni fyrir öll átta forritin. Forritin hafa enga gervigreind sjálf.

### Lagfært í 0.8.1

- **Studio getur skipt um tungumál meðan það keyrir.** Áður var skjáforritið og pakkaútgáfurnar áfram á ensku. Þetta hefur ekki enn verið prófað á öllum kerfum: láttu okkur vita ef tungumálið breytist ekki.
- Uppsetningar Studio 0.8 fá boð um 0.8.1 í gegnum {{ui:Stillingar}} › {{ui:Uppfærslur}}.

### Ekki komið í þessa útgáfu enn

- **Ekki kóðaundirrituð.** Uppsetningarforritin fyrir Windows og .dmg-skráin fyrir macOS bera enga undirritun enn. Á Windows, ef SmartScreen stöðvar uppsetningarforritið, veldu {{ui:Meiri upplýsingar}}, síðan {{ui:Keyra samt}}. Á Mac, hægrismelltu á CadCraft Studio og veldu {{ui:Opna}}. Útgáfur fyrir forritaverslanir eru í bið.
- **Að tengja gervigreindina er ekki fullbúið á sumum stöðum.** Tenging með einum smelli inni í Studio, hýsti tengillinn fyrir aðstoðarmenn í vafra og þinn eigin API-lykill inni í Studio er ekki lofað í þessari útgáfu. Verkefnalykkjan hefur verið prófuð, en ekki enn með raunverulegum aðstoðarmanni.
- **Athuganir verkefna þurfa sömu blaðstærð.** Blað sem er endurteiknað í annarri stærð passar ekki, svo verkefni þess lokast ekki. Blöð eru pöruð eftir blaðnúmeri, annars eftir staðsetningu á síðunni.
- **Raddathugasemdir eru eingöngu upptökur.** Það er engin umritun, og aðstoðarmaður sér lengd athugasemdarinnar, höfund og skýringu, ekki hljóðið. Upptaka var prófuð með gerviæknema í vafra án skjás; raunverulegur hljóðnemi í síma, spjaldtölvu eða fartölvu er enn eftir að prófa.
- **Reiknublöð og rökstuðningur í PDF** eru geymd í einkafærslu skráarinnar. Eldri MarkupCraft hunsar þá færslu og fjarlægir hana næst þegar það vistar skrána, svo opnaðu og vistaðu slíka skrá með 0.8 eða nýrri.
- **Hlið teiknarans á rauðlínum.** CadCraft sem les rauðlínuskrána og svarar henni er ekki smíðað enn.
- **Önnur tungumál.** Forritastikan fyrir tamílsku flæðir yfir um 528 px.

Allt annað er í [Það sem er ekki smíðað enn](topic:not-built-yet). Fyrir útgáfuna á undan, sjá [Nýtt í 0.7](topic:whats-new-0-7).

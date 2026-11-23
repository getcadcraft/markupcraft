---
title: Nýtt í 0.9 (eldra)
summary: Athugasemdir og klippiborð sem prentast aldrei, dulkóðaðar einkaathugasemdir og hreint afrit fyrir viðskiptavininn, fjöldatenglar fyrir heilt teikningasett, bogaverkfæri með tíu aðferðum, að fylgja öðrum yfirferðaraðila í Live og lagfæring á því að eydd merking haldist í vistaðri PDF-skrá.
keywords: nýtt 0.9, eldri útgáfa, hvað er nýtt, 0.9, útgáfuskýringar, breytingaskrá, athugasemdir, klippiborð, einkaathugasemdir, lykilsetning, dulkóðað, fela athugasemdir, sýna athugasemdir, hreint afrit, mynd, fjöldatenglar, tenglar á blöð, titilreitur, blaðnúmer, viðauki, endurnúmera, pdf-tengill, bogi, bogaaðferðir, þriggja punkta bogi, radíus, fylgja, fylgja mér, live, bekkjarsýn, listi yfir fólk, eydd merking, vísbendingar, titlar flipa, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, verkefni, úthlutun, skiladagur, útrunnið, athuga núna, hvað breyttist, endurskoðanir, bera saman, raddathugasemd, ákvörðun, rauðlína, svarskrá, teiknari, aðstoðarmaður, mcp, vandamál, tungumál, inntakstæki, snertiborð, línur tækjastikunnar, eiginleikatafla, uppfærsla
from: aa3dfeb8
---

Þetta er það sem breyttist í MarkupCraft 0.9 miðað við 0.8.1. Meginhugmyndin er að vinnuathugasemdirnar þínar haldist af síðunni sem viðskiptavinurinn fær, og að heilt teikningasett sé hægt að tengja í einni umferð.

## Nýtt

### Athugasemdir, klippiborðið og einkaathugasemdir

- **Klippiborðið.** Svæðið í kringum hvert blað er borð: allt sem er teiknað, skrifað eða límt við hlið blaðsins er athugasemd og prentast aldrei. Veldu {{ui:Sýna klippiborðið}} til að þysja út og fá rúm, eða {{ui:Taka mynd á klippiborðið}}, dragðu ramma utan um hluta, og veldu síðan {{ui:Á klippiborðið}} til að setja mynd af hluta teikningarinnar við hlið blaðsins. Mynd er mynd og breytist ekki þegar blaðið breytist. Sjá [Athugasemdir, klippiborðið og einkaathugasemdir](topic:notes-and-pasteboard).
- **Sýna og fela athugasemdir.** Hvaða merking sem er getur verið athugasemd: stilltu {{ui:Nýjar merkingar eru}} í flipanum {{ui:Athugasemdir}}, eða {{ui:Þessi merking er}} í {{ui:Eiginleikar}}. {{key:Shift+H}} eða rofinn {{ui:Athugasemdir}} undir blaðinu felur og sýnir allar athugasemdir í einu. Athugasemdir eru ekki með í prentun, flötum afritum, listum og útflutningi, og önnur PDF-lesforrit sýna þær ekki. Vistaða PDF-skráin geymir þær fyrir næst þegar þú opnar hana í MarkupCraft.
- **Einkaathugasemdir.** Veldu {{ui:Stilla lykilsetningu}}, og gerðu síðan merkingu að {{ui:Einkaathugasemd}}. Hún er dulkóðuð í skránni með lykilsetningu sem er að minnsta kosti 10 stafir, og engin endurheimt er í boði: enginn, þar með talið við, getur opnað hana án lykilsetningarinnar. {{ui:Læsa}} setur einkaathugasemdir í geymslu; {{ui:Vera opið á þessu tæki}} er sjálfgefið slökkt.
- **Vista hreint afrit.** {{ui:Vista hreint afrit}} fjarlægir allar athugasemdir, einkaathugasemdir og allt á klippiborðinu. Notaðu það fyrir skrána sem fer til viðskiptavinarins.

### Tengja heilt sett

- **Fjöldatenglar.** Veldu {{ui:Síður}} › {{ui:Fjöldatenglar…}}, eða {{ui:Tengja tilvísanir í blöð…}} undir {{ui:Finna texta}} í spjaldinu {{ui:Blöð}}. Skref 1 listar númer og heiti hvers blaðs eins og þau eru lesin af titilreitnum; lagfærðu þau sem eru röng. Skref 2 listar tilvísanirnar sem fundust, til dæmis `3/A-501` eða `DETAIL 2 ON A-501`. {{ui:Tengist}} sýnir blaðið og sjónarhornið fyrir hverja, {{ui:Ekki tengt}} sýnir númer sem enginn opið blað hefur, og {{ui:Búa til tenglana}} býr þá alla til í einu afturköllunarskrefi. Keyrðu það aftur eftir viðauka eða endurnúmerun; tenglum sem þú bjóst til handvirkt er aldrei breytt. Tengill með sjónarhorni er vistaður sem PDF-tengill, þannig að önnur lesforrit opna smáatriðið líka. Sjá [Tenglar á blöð](topic:sheet-links).

### Teikning

- **Bogi, tíu aðferðir.** {{ui:Bogi}}-verkfærið ({{key:O}}) er nú með reitinn {{ui:Aðferð bogans}} yfir síðunni með tíu leiðum til að teikna boga, og horn, lengd, radíus og stefnu er hægt að smella á eða slá inn. Sjá [Teiknaðu boga á tíu vegu](topic:draw-an-arc).

### Vinna saman

- **Fylgdu yfirferðaraðila.** Í Live-lotu veldu {{ui:Fylgja}} við hlið nafns einhvers og sýnin þín fylgir hans; ef þú hliðrar eða þysjar sjálfur hættir það. Gestgjafinn getur valið {{ui:Biðja alla um að fylgja mér}}. Listinn yfir fólk sýnir lit hvers, nafn, blaðið sem það er á og hvenær síðasta breyting var gerð. Sjá [Fylgdu öðrum yfirferðaraðila í Live-lotu](topic:follow-in-live).

## Í öllum forritum

- Skýringartextar eru Bootstrap-skýringartextar, byrjunarábendinguna má loka, flipaslár fletta þegar þær fyllast, og titlar vafraflipa eru `<document> — MarkupCraft | CadCraft`.
- Spjald með nokkrum hlutum opnar einn og lokar hinum (lás við hliðina á bendlinum heldur einum opnum); rofi í Stillingum slekkur á þessu.
- Hvert forrit byrjar með sjálfgefnu safni hluta úr safni.
- Þyngdar- og hitaeiningar eru í boði í einingastillingunum.

## Lagfært

- **Eyddar merkingar eru ekki lengur læsilegar í vistuðu PDF-skránni.** Áður tók vistun eydda eða endurskrifaða skýringu af síðunni en skildi hlutinn, með texta sínum, eftir í skránni. Nú eyðir vistun þessum hlutum. Skrár sem voru vistaðar í eldri smíðum geyma þá þar til þú vistar þær aftur.

## Heiðarlegar takmarkanir

- Fjöldatenglar voru prófaðir á okkar eigin prófunarsettum. Raunveruleg sett teikna bólur á marga vegu, þannig að á sett viðskiptavinar gætu sum sjónarhorn vantað. Skönnuð blöð þurfa fyrst {{ui:Lesa texta (OCR)…}}.
- Athugasemdir, einkaathugasemdir og klippiborðið voru prófuð í vafra án skjás og í okkar eigin skrám, ekki með stóru raunverulegu vektorasetti og ekki í raunverulegri Live-lotu með tveimur. Það er ekki búið að breyta lykilsetningu. Smíðar eldri en 0.9 sýna ekki athugasemdir.
- Bekkjarsýnin er listinn yfir fólk; hún hefur ekki verið prófuð með raunverulegum kennara og nemendum.
- Tungumál önnur en enska eru vélræn drög þar til móðurmálshafi hefur lesið þau.
- Uppsetningarforrit fyrir Windows eru ekki kóðaundirrituð (Frekari upplýsingar, síðan Keyra samt); diskmyndin fyrir macOS er ekki staðfest af Apple (hægrismelltu, síðan Opna).

## Áður: 0.8 og 0.8.1

Þetta er það sem breyttist í MarkupCraft 0.8 og 0.8.1 miðað við 0.7. Stóra nýjungin er að merking getur verið verkefni sem einhver, eða þinn eigin aðstoðarmaður, vinnur, og lokar sjálfu sér þegar teikningin breytist í raun.

### Nýtt

**Merkingar sem framkvæma**

- **Gerðu merkingu að verkefni.** Veldu eina eða fleiri merkingar, opnaðu flipann {{ui:Verkefni}} og veldu {{ui:Gera valið að verkefni}}. Verkefni hefur titil, aðila eða tengda aðstoðarmanninn þinn til að vinna það, valfrjálsan skiladag og stöðu, og það geymir stað sinn á blaðinu og þráðinn sinn. Sjá [Gerðu merkingu að verkefni](topic:markups-that-act).
- **Verkefni sem loka sjálfum sér.** Verkefni getur fylgst með teikningunni innan merkingarinnar. Opnaðu nýrri endurskoðun blaðsins og veldu {{ui:Athuga núna}}: ef línurnar á því svæði hafa breyst um meira en lítið hár, er verkefnið merkt Búið, merkingin verður Lokið og athugasemd í þræðinum segir hvað breyttist. Ný dagsetningarstimpill, eða línur sem hafa færst minna en 1.5 pt, telja ekki. Verkefni getur í staðinn fylgst með hlut í líkani: aðstoðarmaðurinn þinn tilkynnir hlutinn með `tasks_check`, og síðari tilkynning sem er ólík, eða eyddur hlutur, lokar verkefninu. Eitt afturköllunarskref opnar það aftur.
- **Finndu vinnuna.** Síaðu listann {{ui:Verkefni}} eftir stöðu og fyrir hvern það er, þar með talið {{ui:Útrunnið}}; veldu {{ui:Úthlutað til}}, og síðan {{ui:Aðstoðarmaður}} til að sjá hvað bíður aðstoðarmannsins þíns. Verkefni sem er komið fram yfir skiladaginn birtist sem viðvörun í spjaldinu Vandamál. {{ui:CSV}} flytur listann út. Verkefni eru vistuð í PDF-skránni með merkingunni og fara í gegnum Live eins og aðrir eiginleikar merkinga.

**Hvað breyttist, sem einfaldur listi**

- **Lista breytingarnar.** Opnaðu flipann {{ui:Bera saman}}, síðan {{ui:Bera saman heilt sett}}, veldu fyrri og síðari skrána og veldu {{ui:Lista breytingarnar}}. Listinn byrjar á fjölda og fjallar síðan um hvert breytt blað, mesta breytingin fyrst: hvar á blaðinu, hversu stór (í raunverulegum einingum og einnig í pappírstommum á kvörðuðu blaði), hvort línur hafi bæst við eða verið fjarlægðar, hversu margar merkingar eru þar, og hvaða orð birtust eða hurfu. {{ui:Afrita listann}} setur hann á klippiborðið og {{ui:CSV}} skrifar eina röð fyrir hverja breytingu. Sjá [Listaðu hvað breyttist á milli endurskoðana](topic:what-changed-in-words).

**Raddathugasemdir og ákvarðanir**

- **Raddathugasemdir.** Í flipanum {{ui:Athugasemdir}} veldu {{ui:Taka upp raddathugasemd}}, síðan {{ui:Hætta upptöku}}; upptökur hætta sjálfar eftir tvær mínútur. Athugasemdin er fest í miðju blaðsins, þú dregur hana þangað sem hún á heima og skrifar myndatexta í {{ui:Eiginleikar}}, og {{ui:Spila}} í listanum spilar hana. Upptakan er vistuð inni í PDF-skránni.
- **Ákvarðanir.** {{ui:Festa ákvörðun}} skrifar eina eða tvær setningar á blaðið. Ef hún kemur í stað eldri ákvörðunar skaltu velja hana í {{ui:Hún kemur í stað}}: sú gamla helst, merkt Skipt út, og vísar á þá nýju. Eitt afturköllunarskref tekur hana til baka. Sjá [Festu raddathugasemdir og ákvarðanir á blað](topic:voice-notes-and-decisions).

**Rauðlína í endurskoðun**

- **Senda og svara.** Í flipanum {{ui:Verkefni}} opnaðu {{ui:Yfirferð í endurskoðun}}, skrifaðu inn endurskoðunina sem merkingarnar eiga við og veldu {{ui:Flytja út rauðlínuskrá}}. Þú færð `.redline.json`-skrá með einu atriði fyrir hverja opna merkingu: blað, staðsetningu (sem brot af blaðinu, þannig að endurprentun í annarri stærð passar enn), orð, höfund, þráð og verkefnið hennar. Sá sem teiknar breytingarnar svarar með Accepted, Rejected eða Done í `.redline-answers.json`-skrá; {{ui:Hlaða inn svarskrá…}} gefur hverri merkingu þá stöðu og athugasemd teiknarans, sem eitt afturköllunarskref. Sjá [Sendu merkingar til teiknara sem rauðlínu](topic:redline-to-revision).

**AI-aðstoðarmenn**

- **Fleiri verkfæri.** Aðstoðarmaður sem þú tengdir í gegnum CadCraft Studio getur sýnt lista yfir verkefni (`tasks_list`), búið til eða breytt verkefni (`task_set`), fjarlægt verkefnið (`task_clear`), athugað eitt verkefni gegn nýrri endurskoðun eða hlut (`tasks_check`) og lesið einfaldan lista yfir breytingar á milli tveggja opinna teikningasetta (`revisions_changes`). Hann fær aðeins þau verkfæri sem þú hakaðir við undir rofanum Aðstoðarmenn, og hver breyting er eitt afturköllunarskref. Sjá [Notaðu MarkupCraft með AI-aðstoðarmanni](topic:use-with-ai-assistants).

### Í öllum forritum

- **Tungumál.** CadCraft Studio hefur nú 54 tungumál. Tíu eru ný: litháíska, lettneska, bosníska, maratí, telúgú, albanska, afrikaans, filippseyska, svahílí og úsbekska. Öll tungumál önnur en enska eru vélræn drög þar til móðurmálshafi hefur lesið þau.
- **Inntakstæki.** {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Inntakstæki}} ákvarðar hvað snertiborð, hliðarhnappar músarinnar, penni, fingrasnertingar, þrívíddarmús, leikjastýring eða MIDI-stýring gerir, fyrir öll forrit eða aðeins fyrir þetta eina. Þar til þú breytir einhverju virkar hvert tæki eins og áður. Sjá [Notaðu snertiborð, þrívíddarmús eða stýringu](common:input-devices).
- **Línur tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} hefur {{ui:Vefja}} (sjálfgefið), {{ui:2 línur}} og {{ui:1 lína}}, þannig að teikningin fær meira rými. Sjá [Raðaðu spjöldunum](common:arrange-panels).
- **Eiginleikatafla.** Stílreitir merkingar nota sameiginlegu töfluna, með fellanlegum flokkum og dálkum fyrir heiti og gildi.
- **Spjald vandamála.** Viðvaranir úr forritinu, eins og verkefni sem er útrunnið, safnast í eitt spjald vandamála.
- **Live og viðbætur.** Live-lotur eru lýstar í [Vinnið saman í beinni](common:work-together-live); listinn yfir viðbætur sem fylgir aðgangnum þínum er í [Viðbætur og listi yfir aðganginn þinn](common:addons-basics).
- **Tengdu AI-ið þitt.** CadCraft Studio er miðstöðin fyrir þinn eigin aðstoðarmann: tengdu einu sinni fyrir öll átta forritin. Forritin innihalda enga AI sjálf.

### Lagfært í 0.8.1

- **Studio getur skipt um tungumál meðan það keyrir.** Áður voru skjáborðsforritið og pökkuðu útgáfurnar áfram á ensku. Þetta hefur ekki enn verið prófað á öllum stýrikerfum: láttu okkur vita ef tungumálið breytist ekki.
- Studio 0.8-uppsetningar fá boð um 0.8.1 í gegnum {{ui:Stillingar}} › {{ui:Uppfærslur}}.

### Ekki enn í þessari útgáfu

- **Ekki kóðaundirritað.** Uppsetningarforritin fyrir Windows og .dmg-skráin fyrir macOS eru ekki undirrituð enn. Á Windows, ef SmartScreen stöðvar uppsetninguna, veldu {{ui:Frekari upplýsingar}}, síðan {{ui:Keyra samt}}. Á Mac, hægrismelltu á CadCraft Studio og veldu {{ui:Opna}}. Smíðar fyrir verslanir eru í bið.
- **Tenging AI er ókláruð á köflum.** Tenging með einum smelli innan Studio, hýsti tengillinn fyrir aðstoðarmenn í vafra og þinn eigin API-lykill innan Studio er ekki lofað í þessari útgáfu. Verkefnalykkjan hefur verið prófuð, en ekki enn með raunverulegum aðstoðarmanni.
- **Verkefnaathuganir þurfa sömu síðustærð.** Blað sem er endurprentað í annarri stærð passar ekki, þannig að verkefni þess lokast ekki. Blöð eru pöruð eftir blaðnúmeri, annars eftir staðsetningu síðunnar.
- **Raddathugasemdir eru aðeins upptökur.** Það er engin uppskrift, og aðstoðarmaður sér lengd, höfund og myndatexta athugasemdar, ekki hljóðið. Upptaka var prófuð með falskum hljóðnema í vafra án skjás; raunverulegur hljóðnemi í síma, spjaldtölvu eða fartölvu er enn eftir að prófa.
- **Reiknablöð og ástæður í PDF** eru geymd í einkafærslu skráarinnar. Eldri MarkupCraft hunsar þá færslu og fjarlægir hana næst þegar það vistar skrána, þannig að opnaðu og vistaðu slíka skrá með 0.8 eða nýrri.
- **Hlið teiknarans á rauðlínum.** Að CadCraft lesi rauðlínuskrána og svari henni er ekki búið enn.
- **Önnur tungumál.** Forritastikan á tamílsku flæðir yfir um 528 px.

Allt annað er í [Það sem er ekki búið enn](topic:not-built-yet). Fyrir útgáfuna á undan þessari, sjá [Nýtt í 0.7](topic:whats-new-0-7).

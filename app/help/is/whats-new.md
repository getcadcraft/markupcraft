---
title: Nýtt í 0.8 og 0.8.1
summary: Merkingar sem verða verkefni og loka sjálfar sér, einfaldur listi yfir breytingar milli endurskoðana, raddathugasemdir og ákvarðanir á teikningunni, rauðlínuskrár fyrir teiknarann, og sameiginlegar breytingar í 0.8: inntakstæki, línur á tækjastiku, Vandamál og fleiri tungumál.
keywords: hvað er nýtt, útgáfuskýrslur, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, verkefni, verkefnalisti, úthlutað, skiladagur, útrunnið, athuga núna, hvað breyttist, endurskoðanir, samanburður, raddathugasemd, ákvörðun, rauðlína, svarskrá, teiknari, aðstoðarmaður, mcp, vandamál, tungumál, inntakstæki, snertiflötur, línur tækjastikunnar, eiginleikatafla, uppfærsla
from: 40368796
---

Þetta er það sem breyttist í MarkupCraft 0.8 og 0.8.1, miðað við 0.7. Það stærsta nýja er að merking getur verið verkefni sem einhver, eða þinn eigin aðstoðarmaður, vinnur, og það lokar sjálft sér þegar teikningin breytist í raun.

## Nýtt

### Merkingar sem vinna

- **Gerðu merkingu að verkefni.** Veldu eina eða fleiri merkingar, opnaðu flipann {{ui:Verkefni}} og veldu {{ui:Gera valið að verkefni}}. Verkefni hefur titil, einstakling eða tengda aðstoðarmanninn þinn til að vinna það, valfrjálsan skiladag og stöðu, og það heldur sínum stað á blaðinu og þræðinum sínum. Sjá [Gera merkingu að verkefni](topic:markups-that-act).
- **Verkefni sem loka sjálfum sér.** Verkefni getur fylgst með teikningunni innan merkingar sinnar. Opnaðu nýrri endurskoðun blaðsins og veldu {{ui:Athuga núna}}: ef línurnar á því svæði hafa breyst um meira en hár, er verkefnið merkt Lokið, merkingin verður Lokið og athugasemd í þræðinum segir hvað breyttist. Nýr dagsetningarstimpill, eða línur sem hafa færst minna en 1,5 punkta, telja ekki. Verkefni getur í staðinn fylgst með frumefni í líkani: aðstoðarmaðurinn þinn tilkynnir frumefnið með `tasks_check`, og síðari tilkynning sem er frábrugðin, eða eytt frumefni, lokar verkefninu. Eitt skref afturköllunar opnar það aftur.
- **Finndu verkin.** Síaðu listann {{ui:Verkefni}} eftir stöðu og eftir því hverjum það er ætlað, þar með talið {{ui:Útrunnið}}. Veldu {{ui:Úthlutað til}}, síðan {{ui:Aðstoðarmaður}}, til að sjá það sem bíður aðstoðarmannsins þíns. Verkefni sem er komið fram yfir skiladag birtist sem viðvörun í Vandamálaspjaldinu. {{ui:CSV}} flytur listann út. Verkefni eru vistuð í PDF-skjalinu með merkingunni og ferðast um Live eins og aðrir eiginleikar merkinga.

### Hvað breyttist, sem einfaldur listi

- **Telja upp breytingarnar.** Opnaðu flipann {{ui:Bera saman}}, síðan {{ui:Bera saman heilt sett}}, veldu eldri og nýrri skrána og veldu {{ui:Telja upp breytingarnar}}. Listinn byrjar á fjölda og fjallar síðan um hvert breytt blað, mesta breytingu fyrst: hvar á blaðinu, hversu stór (í raunverulegum einingum og einnig í pappírstommum á kvörðuðu blaði), hvort línur hafi bæst við eða verið fjarlægðar, hversu margar merkingar eru þar, og hvaða orð birtust eða hurfu. {{ui:Afrita listann}} setur hann á klippiborðið og {{ui:CSV}} skrifar eina línu fyrir hverja breytingu. Sjá [Telja upp breytingar milli endurskoðana](topic:what-changed-in-words).

### Raddathugasemdir og ákvarðanir

- **Raddathugasemdir.** Í flipanum {{ui:Athugasemdir}} veldu {{ui:Taka upp raddathugasemd}}, síðan {{ui:Hætta upptöku}}. Upptökur hætta sjálfar eftir tvær mínútur. Athugasemdin er fest í miðju blaðsins, þú dregur hana þangað sem hún á heima og skrifar myndatexta í {{ui:Eiginleikar}}, og {{ui:Spila}} í listanum spilar hana. Upptakan er vistuð inni í PDF-skjalinu.
- **Ákvarðanir.** {{ui:Festa ákvörðun}} skrifar setningu eða tvær á blaðið. Ef hún kemur í stað fyrri ákvörðunar skaltu velja hana í {{ui:Hún kemur í stað}}: sú gamla helst, merkt Skipt út, og vísar á þá nýju. Eitt skref afturköllunar tekur hana til baka. Sjá [Festa raddathugasemdir og ákvarðanir á blað](topic:voice-notes-and-decisions).

### Yfirferð í endurskoðun

- **Senda og svara.** Í flipanum {{ui:Verkefni}} opnaðu {{ui:Yfirferð í endurskoðun}}, skrifaðu endurskoðunina sem merkingarnar miðast við og veldu {{ui:Flytja út rauðlínuskrá}}. Þú færð `.redline.json`-skrá með einu atriði fyrir hverja opna merkingu: blað, staðsetningu (sem brot af blaðinu, þannig að endurprentun í annarri stærð passar enn), orð, höfund, þráð og verkefni hennar. Sá sem teiknar breytingarnar svarar Samþykkt, Hafnað eða Lokið í `.redline-answers.json`-skrá. {{ui:Hlaða inn svarskrá…}} gefur hverri merkingu þá stöðu og athugasemd teiknarans, sem eitt skref afturköllunar. Sjá [Senda merkingar til teiknarans sem rauðlínu](topic:redline-to-revision).

### AI-aðstoðarmenn

- **Fleiri verkfæri.** Aðstoðarmaður sem þú tengdir í gegnum CadCraft Studio getur skráð verkefni (`tasks_list`), búið til eða breytt einu (`task_set`), tekið verkefnið af (`task_clear`), athugað það gegn nýrri endurskoðun eða frumefni (`tasks_check`) og lesið einfaldan lista yfir breytingar milli tveggja opinna teikningasetta (`revisions_changes`). Hann fær aðeins þau verkfæri sem þú hakaðir við undir rofanum Aðstoðarmenn, og hver breyting er eitt skref afturköllunar. Sjá [Nota MarkupCraft með AI-aðstoðarmanni](topic:use-with-ai-assistants).

## Í öllum forritum

- **Tungumál.** CadCraft Studio hefur nú 54 tungumál. Tíu eru ný: litháska, lettneska, bosníska, maratí, telúgú, albanska, afríkanska, filippínska, svahílí og úsbekska. Öll tungumálin önnur en enska eru vélþýðingar þar til móðurmálsmaður hefur lesið þau.
- **Inntakstæki.** {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Inntakstæki}} ákveður hvað snertiflötur, hliðarhnappar músarinnar, penni, fingurbankar, þrívíddarmús, leikjastýring eða MIDI-stýring gerir, fyrir öll forrit eða aðeins þetta. Þar til þú breytir einhverju virkar hvert tæki eins og áður. Sjá [Nota snertiflöt, þrívíddarmús eða stýringu](common:input-devices).
- **Línur tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} hefur {{ui:Vefja}} (sjálfgefið), {{ui:2 línur}} og {{ui:1 lína}}, þannig að teikningin fær meira pláss. Sjá [Raða spjöldunum](common:arrange-panels).
- **Eiginleikatafla.** Stílreitir merkingar nota sameiginlega töflu, með samanfellanlegum flokkum og dálkum fyrir heiti og gildi.
- **Vandamálaspjaldið.** Viðvaranir frá forritinu, eins og útrunnið verkefni, safnast saman í eitt Vandamálaspjald.
- **Live og viðbætur.** Lotur í Live eru lýstar í [Vinna saman í beinni](common:work-together-live). Listinn yfir viðbætur sem fylgir aðgangnum þínum er í [Viðbætur og aðgangslistinn þinn](common:addons-basics).
- **Tengdu gervigreindina þína.** CadCraft Studio er miðstöðin fyrir þinn eigin aðstoðarmann: tengdu einu sinni fyrir öll átta forritin. Forritin sjálf hafa enga gervigreind.

## Lagað í 0.8.1

- **Studio getur skipt um tungumál meðan það keyrir.** Áður voru skjáborðsforritið og pakkaðar útgáfur áfram á ensku. Þetta hefur ekki enn verið prófað á öllum stýrikerfum: láttu okkur vita ef tungumálið breytist ekki.
- Studio 0.8-uppsetningar fá boð um 0.8.1 í gegnum {{ui:Stillingar}} › {{ui:Uppfærslur}}.

## Ekki í þessari útgáfu ennþá

- **Ekki undirritað með kóða.** Windows-uppsetningarforritin og macOS .dmg-skráin bera enga undirritun ennþá. Á Windows, ef SmartScreen stöðvar uppsetninguna, veldu {{ui:Frekari upplýsingar}} og síðan {{ui:Keyra samt}}. Á Mac hægrismelltu á CadCraft Studio og veldu {{ui:Opna}}. Útgáfur fyrir verslanir eru í bið.
- **Tenging gervigreindar er ófullgerð á stöðum.** Ein-smells tenging innan Studio, hýsti tengillinn fyrir vafraaðstoðarmenn og þinn eigin API-lykill innan Studio eru ekki lofuð í þessari útgáfu. Verkefnalykkjan hefur verið prófuð, en ekki enn með raunverulegum aðstoðarmanni.
- **Athuganir verkefna þurfa sömu blaðastærð.** Blað sem er endurprentað í annarri stærð passar ekki, þannig að verkefni þess lokast ekki. Blöð eru pöruð eftir blaðanúmeri, annars eftir staðsetningu síðunnar í skjalinu.
- **Raddathugasemdir eru eingöngu upptökur.** Engin uppskrift er til, og aðstoðarmaður sér lengd athugasemdar, höfund og myndatexta, ekki hljóðið. Upptaka var prófuð með gervihljóðnema í vafra án skjás; raunverulegur hljóðnemi á síma, spjaldtölvu eða fartölvu er enn eftir að prófa.
- **Reiknublöð og rökstuðningur í PDF-skjali** eru geymd í einkafærslu skráarinnar. Eldri MarkupCraft hunsar þá færslu og fjarlægir hana næst þegar það vistar skrána, þannig að opnaðu og vistaðu slíkar skrár með 0.8 eða nýrri.
- **Hlið teiknarans á rauðlínum.** Að CadCraft lesi rauðlínuskrána og svari henni er ekki smíðað ennþá.
- **Önnur tungumál.** Forritastika tamílsku flæðir yfir um 528 px.

Allt annað er í [Það sem ekki er smíðað ennþá](topic:not-built-yet). Fyrir útgáfuna þar á undan, sjá [Nýtt í 0.7](topic:whats-new-0-7).

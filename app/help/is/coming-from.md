---
title: Að koma frá öðrum hugbúnaði fyrir merkingar
summary: Hvernig venjur úr skrifborðsforriti fyrir PDF-merkingar yfirfærast yfir í MarkupCraft, og munurinn sem kemur fólki á óvart.
keywords: skipta, flytja, færa yfir, kunnuglegt, skrifborð pdf merking, verkfærakista, listi yfir merkingar, yfirlag, lotur, snið, flýtilyklar, munur
from: c8f323e1
---

Ef þú yfirferð teikningar í Bluebeam Revu (eða athugasemdir við PDF-skjöl í öðru PDF-forriti fyrir skrifborð), mun mestur hluti MarkupCraft líða kunnuglega: ský, skýringar, verkfærakista, listi yfir merkingar, staða með svörum, kvarðaðar mælingar og yfirlög blaða. Hvernig skrár eru meðhöndlaðar er stærsti munurinn, svo lestu næsta kafla jafnvel þótt þú sleppir hinum.

## Fimm atriði sem skipta máli

1. **Vistun býr til nýja skrá.** MarkupCraft keyrir í vafranum og getur ekki skrifað yfir PDF-skjalið á disknum þínum. {{ui:Vista}} hleður niður "<name> (marked up).pdf" og upprunalega skjalið helst óbreytt. Næst skaltu opna "(marked up)"-afritið og hreinsa til gömul afrit á eigin spýtur.
2. **PDF-skjalið er vistað þegar þú vistar.** Þangað til það gerist heldur endurheimtarafrit í þessum vafra merkingunum þínum í gegnum hrun eða lokaðan flipa, og MarkupCraft býður það aftur næst. Það er öryggisnet: vistaðu PDF-skjalið til að geyma yfirferðina.
3. **Prófíllinn þinn lifir í vafranum.** Höfundsnafnið þitt, stillingar verkfæra og verkfærakistan eru geymd í þessum vafra á þessari tölvu. Annar vafri eða tölva byrjar tóm, og að hreinsa gögn vefsvæðis eyðir þeim. Fluttu verkfærakistuna út sem öryggisafrit. Sjá [Hvað geymist í þessum vafra](topic:browser-storage).
4. **Engar sameiginlegar lotur enn.** Engin lifandi, sameiginleg yfirferðarlota er til og ekkert verkefni í skýjageymslu. Yfirferðin ferðast í PDF-skjalinu: vistaðu, sendu afritið, næsti aðili svarar og vistar.
5. **Mæling er á hverju blaði fyrir sig, og aðeins þar.** Engir gluggar í blaði og engin „nota þennan mælikvarða á allar síður“. Kvarðaðu hvert blað sem þú mælir á.

## Venja fyrir venju

| Það sem þú þekkir | Í MarkupCraft |
|---|---|
| Smámyndaspjald, síðumerki | {{ui:Blöð}} vinstra megin. Heiti koma af síðumerkjum eða eru lesin af titilreitnum; lagfærðu þau með {{ui:Endurnefna blað}}. |
| Opna nokkur PDF-skjöl sem sett | Opnaðu þau öll í einu; þau verða einn listi. Engin settskrá er vistuð: opnaðu sömu PDF-skjöl næst. |
| Verkfærakista með verkfærasettum | Flipinn {{ui:Verkfæri}}: ein kista á hvern vafra, vistuð verkfæri með stíl og viðfangsefni. Deildu með {{ui:Flytja út}} og {{ui:Flytja inn}} sem JSON-skrá. Skrár með verkfærasettum frá öðrum forritum er ekki hægt að flytja inn. |
| Eiginleikaspjald | Flipinn {{ui:Eiginleikar}}: staða, viðfangsefni, athugasemd, stíll, svör og verkliður á einum stað. |
| Listi yfir merkingar með dálkum | Flipinn {{ui:Merkingar}} með síum fyrir blað, höfund, stöðu og tegund. Flytja út CSV eða BCF. Engir sérsniðnir dálkar og engin samantekt fyrir PDF eða vinnubók enn. |
| Staða og yfirferðarástand | {{ui:Staða}}: Opið, Samþykkt, Hafnað, Lokið. Engir sérsniðnir stöðulistar. Vistuð sem staðlaðar yfirferðarstöður. |
| Svör við merkingu | Svarþráðurinn í {{ui:Eiginleikar}}, með breytingum á stöðu skráðum í hann. Sent svar er ekki hægt að breyta. |
| Kvarða, síðan lengd, flatarmál, talning | {{ui:Kvarða}}, {{ui:Lengd}} ({{key:M}}), {{ui:Flatarmál}} ({{key:Q}}, gefur flatarmál og jaðar), {{ui:Telja}} ({{key:U}}). Ekki horn, radíus, rúmmál, lengd fjöllínu eða úrtök enn. |
| Yfirlögn blaðsíðna | Flipinn {{ui:Bera saman}}: rautt fyrir gamalt, blátt fyrir nýtt, jöfnun með tveimur punktum. Engin sjálfvirk skýjasetning við „bera saman skjöl“. |
| Stimplar | {{ui:Stimpill}} með sex innbyggðum stimplum og sérsniðnu orðalagi, undirritað með nafninu þínu og dagsetningunni. Engir mynda- eða undirskriftarstimplar enn. |
| Verkliða- eða útgáfumæling | Flipinn {{ui:Gátlisti}}: númeraðir liðir með úthlutun, skiladagsetningu og stöðu; CSV-útflutningur. |
| Lifandi samvinnulota | Ekki í boði enn. Sendu vistaða PDF-skjalið. |
| Fletja út | Ekki komið enn. Merkingar eru áfram athugasemdir sem aðrir skoðarar geta sýnt og prentað. |
| Lög fyrir merkingar | Ekki komið enn. Notaðu viðfangsefni, höfunda og síur listans til að raða athugasemdum. |
| Tenglar milli blaða | Ekki komið enn. |
| Bilslá til að hliðra, hjól til að aðdraga | Eins: haltu inni {{key:Space}} og dragðu; hjólið aðdrættir á bendilinn. Hjólið skrunar aldrei síðunni. |

## Lyklar sem eru öðruvísi

Margir eins stafa lyklar eru eins og þú býst við, en athugaðu þessa áður en fingurnir gera það fyrir þig:

- {{key:K}} er {{ui:Skýring}}, og {{key:Q}} er {{ui:Flatarmál}}. Ef þú ert vanur Q fyrir skýringar, þá byrjar það flatarmál hér.
- {{key:C}} er reitsskýið {{ui:Ský}}; {{key:Shift+C}} er {{ui:Frjálst ský}}.
- {{key:M}} er {{ui:Lengd}}, {{key:U}} er {{ui:Telja}}, {{key:Y}} er {{ui:Fjöllína}}, {{key:G}} er {{ui:Marghyrningur}}, {{key:I}} er {{ui:Áherslulitur}}.
- {{key:Mod+D}} afritar valið (í stað bókamerkis vafrans).
- {{key:Mod+Plus}} og {{key:Mod+Minus}} aðdraga blaðið, ekki síðu vafrans.
- Hvaða lykil sem er er hægt að breyta: sjá hér að neðan.

:::tip
Ef fingurnir þekkja Bluebeam Revu, veldu valmyndarstílinn {{ui:PDF-yfirferð}} í {{ui:Stillingar}} › {{ui:MarkupCraft}} › {{ui:Valmyndir, takkar og mús}}: valmyndastika (Skrá, Breyta, Skoða, Skjal, Merking, Mæling, Gluggi) yfir röð yfirferðarverkfæra, {{key:Q}} fyrir skýringu, {{key:H}} fyrir áherslulitinn, {{key:N}} fyrir marghyrning, og mælingarnar á {{key:Alt+Shift}} með staf. Hvaða lykil sem er er hægt að breyta þar líka. Sjá [Valmyndir, takkar og mús](topic:menus-keys-and-mouse).
:::

Allur listinn er í [Lyklaborð og mús](topic:keyboard).

## Hlutir sem virka öðruvísi en þú gætir búist við

- **Verkfæri haldast virk.** Eftir ský ertu enn að teikna ský. {{key:Esc}} einu sinni hreinsar valið, tvisvar fer aftur í {{ui:Velja}}.
- **Texti og skýringar þurfa texta.** Ef þú lýkur án þess að skrifa neitt er engin merking bætt við. Minnispunktar eru hafðir tómir.
- **Mælingar þurfa mælikvarða fyrst.** {{ui:Lengd}} og {{ui:Flatarmál}} skipta yfir í {{ui:Kvarða}} á ókvörðuðu blaði og koma aftur á eftir.
- **Athugasemdir frá öðrum forritum.** Ferhyrningar, sporbaugar, línur, fjöllínur, marghyrningar, blek, textareitir og límmiðar gerðir annars staðar verða breytanlegar MarkupCraft-merkingar og eru skrifaðar aftur á hátt MarkupCraft þegar þú vistar (útlitið getur breyst lítillega). Textaáherslur, stimplar annarra forrita og aðrar sérstakar tegundir eru lesaðar eingöngu: þú getur svarað þeim, en ekki breytt þeim.
- **Stafir utan vestur-evrópskra stafa** prentast sem „?“ í vistaða PDF-skjalinu. Sjá [Vista PDF-skjal með merkingum](topic:save-the-marked-up-pdf).
- **Dagsetningar stimpla** nota UTC, þannig að stimpill sem er gerður seint um kvöld í Ameríku getur sýnt morgundaginn.
- **Mælingar berast með** sem venjulegar mæliathugasemdir, og hvert kvarðað blað geymir mælikvarða sinn, svo forrit sem les PDF-mælingar getur yfirleitt sýnt þær. Nákvæm hegðun fer eftir því forriti.

## Að nota bæði

Þú getur farið fram og til baka. Athugasemdir sem gerðar eru annars staðar opnast í MarkupCraft, og "(marked up)" PDF-skjalið opnast í öðrum PDF-forritum með öllum merkingum, svörum og stöðum sýnilegum. Það sem aðeins MarkupCraft les til baka (úthlutaður aðili og skiladagsetning verkliðar, staða liðar) er geymt í skránni fyrir MarkupCraft.

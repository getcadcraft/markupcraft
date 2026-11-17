---
title: Nota MarkupCraft með gervigreindaraðstoðarmanni
summary: Láttu þinn eigin gervigreindaraðstoðarmann eða skriftu skrá merkingar safns, bæta við einföldum, stilla stöðu þeirra, svara og flytja út listann: heimildir, tenging í gegnum CadCraft Studio og virknisskrá.
keywords: gervigreind, ai, aðstoðarmaður, umboðsmaður, mcp, model context protocol, skrift, sjálfvirkni, merkingar, yfirferð, heimildir, aftengja, virkni
from: 095f2977
---

## Það sem þú lærir

Hvernig þú leyfir gervigreindaraðstoðarmanni (eða skriftu sem þú skrifaðir) að vinna með MarkupCraft, og hvernig þú ákveður hvað hann má snerta.

MarkupCraft hefur **enga eigin gervigreind** og sendir ekkert neitt. Þú kemur með aðstoðarmanninn: hvaða forrit sem talar Model Context Protocol (MCP). MarkupCraft gefur honum aðeins verkfæri, og þú velur hver.

## Kveiktu á því

1. Opnaðu {{ui:Stillingar}} (gírinn í forritastikunni, eða {{key:Mod+,}}) og farðu á flipann {{ui:MarkupCraft}}.
2. Undir {{ui:Aðstoðarmenn}} hakarðu við **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota MarkupCraft**. Það er slökkt þar til þú gerir það.
3. Veldu hvað hann má gera: **Lesa** er hakað í byrjun; hakaðu við **Breyta**, **Vista** eða **Flytja út** aðeins þegar þú þarft þá.

Verkfæri utan heimildanna sem þú hakaðir við eru ekki boðin aðstoðarmanninum, og ef hann biður um eitt þeirra samt, hafnar MarkupCraft því og skrifar það í virknisskrána. Ef þú slekkur á rofanum endar hver tenging í einu; Endurstilla MarkupCraft-stillingar slekkur líka á honum.

## Tengdu aðstoðarmanninn þinn

Aðstoðarmenn tengjast í gegnum **CadCraft Studio** á tölvunni þinni: Studio keyrir lítinn netþjón sem aðeins þessi tölva nær til, varinn með aðgangslykli sem er búinn til í hvert skipti sem það ræsist. Í Studio veldu {{ui:Tengja aðstoðarmann}} og afritaðu vistfangið og lykilinn yfir í aðstoðarmanninn þinn (Studio sýnir nákvæmu stillingarnar til að líma). Deildu aldrei lyklinum.

:::note
Vafraflipi getur ekki opnað tengingu fyrir aðstoðarmann: í vafraforritunum hefur rofinn engin áhrif fyrr en þú notar CadCraft Studio á tölvunni þinni.
:::

## Þú hefur stjórnina

- **Sérhver breyting er eitt afturkallaskref**, merkt með nafni aðstoðarmannsins fyrir hana (til dæmis „Aðstoðarmaður: bæta við cloudrect“). {{key:Mod+Z}} tekur síðustu breytingu aðstoðarmannsins til baka í heild.
- **Þú veist þegar einn er tengdur.** Hnappur í forritastikunni nefnir aðstoðarmanninn meðan hann er tengdur; smelltu á hann til að sjá hvað hann má gera, eða til að **aftengja** hann.
- **Virkni.** {{ui:Stillingar}} › {{ui:MarkupCraft}} › {{ui:Aðstoðarmenn}} › {{ui:Virkni}} listar hvert kall: hvenær, hvaða verkfæri, lokið eða hafnað. {{ui:Vista atburðaskrána}} geymir afrit.

## Hvað aðstoðarmaður getur beðið um

| Verkfæri | Heimild | Hvað það gerir |
|---|---|---|
| `app_info`, `sheets_list` | Lesa | Söfnin sem eru opin, blöð þeirra og hversu margar merkingar hvert hefur |
| `markups_list` | Lesa | Merkingarnar með gerð, blaði, texta, athugasemd, mælingu, stöðu, höfundi og svörum, síaðar eftir blaði, stöðu, gerð eða höfundi |
| `markup_add` | Breyta | Bætir við ferhyrningi, ský, sporbaug, textareit, athugasemd, línu eða ör á blað |
| `markup_status`, `markup_reply` | Breyta | Setur stöðu merkingar (skráð í þráðinn, undirritað af aðstoðarmanninum); bætir athugasemd við þráð |
| `markups_export` | Flytja út | CSV eða BCF af því sem listinn {{ui:Merkingar}} sýnir (síur eins og þú stillir þær); í Studio getur það skrifað skrána í möppu sem þú leyfðir |
| `tasks_list` | Lesa | Merkingarnar sem eru verkefni: ábyrgðarmaður (einstaklingur eða aðstoðarmaður), skiladagur, staða, tengill, hvernig því lauk. `assignee: "assistant"` listar vinnuna sem bíður aðstoðarmanns |
| `task_set`, `task_clear` | Breyta | Gerir merkingu að verkefni eða breytir því (titli, ábyrgðarmanni, skiladegi, stöðu, tengli); tekur verkefnið af |
| `tasks_check` | Breyta | Lokar verkefnum þar sem tengt teikningarsvæði eða líkanshlutur breyttist í raun; sendir stöður þátta sem þú last úr hinu forritinu |
| `revisions_changes` | Lesa | Einföld skrá yfir það sem breyttist á milli tveggja opinna blaðasafna, til að setja í þín eigin orð |
| `pins_list`, `decision_add` | Lesa, Breyta | Raddathugasemdir (lengd, hver, hvenær, myndatexti; aldrei hljóðið, aldrei uppskrift) og ákvarðanir; festu ákvörðun og skiptu út eldri ákvörðun |
| `redline_export`, `redline_answer` | Flytja út, Breyta | Skrifar rauðlínuskrána fyrir teiknarann; beitir svörum teiknarans |

Merking sem aðstoðarmaður bætir við skráir hann sem höfund: nafnið sem aðstoðarmannaforritið gefur sjálfu sér, á eftir „(aðstoðarmaður)“, eða „(aðstoðarmaður fyrir <nafnið þitt>)“ þegar þú hefur stillt nafn yfirfarandans. Breytingar á stöðu og svör eru undirrituð á sama hátt. Hvert þeirra er eitt afturkallaskref. Að vista merktu PDF-skrána er áfram á þinni ábyrgð: notaðu {{ui:Vista}} eins og venjulega.

Án þess að opna MarkupCraft listar CadCraft MCP-þjónninn merkingar PDF-skráar í möppu sem þú nefnir (`markups_list`), og `cadcraft info Set.pdf` prentar þær á skipanalínuna.

## Ef eitthvað virkar ekki

- **Aðstoðarmaðurinn sér engin MarkupCraft-verkfæri:** athugaðu að rofinn sé kveiktur í þessum glugga, og að glugginn sé opinn í Studio.
- **„þarf heimild til að breyta“:** hakaðu við **Breyta** undir {{ui:Aðstoðarmenn}}, og biddu síðan aftur.
- **Villur „401“ eða „token“:** lykillinn breyttist (Studio var endurræst, eða Nýr aðgangslykill). Afritaðu þann nýja í stillingar aðstoðarmannsins.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með þeim verkfærum sem það kallar á.

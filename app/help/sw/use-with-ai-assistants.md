---
title: Tumia MarkupCraft na msaidizi wa AI
summary: Ruhusu msaidizi wako wa AI au hati ya kompyuta iorodheshe alama za seti, iongeze alama rahisi, iweke hali yake, ijibu na kuhamisha orodha: ruhusa, kuunganisha kupitia CadCraft Studio, na kumbukumbu ya shughuli.
keywords: ai, msaidizi, wakala, mcp, itifaki ya muktadha wa mfano, hati, otomatiki, alama, ukaguzi, ruhusa, kukata muunganisho, shughuli
from: 095f2977
---

## Utajifunza nini

Jinsi ya kuruhusu msaidizi wa AI (au hati uliyoandika) kufanya kazi na MarkupCraft, na jinsi ya kuamua inaruhusiwa kugusa nini.

MarkupCraft **haina AI yake yenyewe** na haituma chochote popote. Wewe unaleta msaidizi: programu yoyote inayozungumza Itifaki ya Muktadha wa Mfano (MCP). MarkupCraft inampa zana tu, na wewe unachagua zipi.

## Iwashe

1. Fungua {{ui:Mipangilio}} (gia kwenye upau wa programu, au {{key:Mod+,}}) kisha nenda kwenye kichupo cha {{ui:MarkupCraft}}.
2. Chini ya {{ui:Wasaidizi}}, weka alama kwenye **Ruhusu wasaidizi wa AI na hati zitumie MarkupCraft**. Imezimwa hadi uifanye.
3. Chagua kile kinachoruhusiwa kufanya: **Soma** imewekwa alama kuanzia; weka alama kwenye **Hariri**, **Hifadhi** au **Hamisha** pale tu unapozihitaji.

Zana zilizo nje ya ruhusa ulizoweka alama hazitolewi kwa msaidizi, na akiomba moja hata hivyo, MarkupCraft inakataa na kuiandika katika kumbukumbu ya shughuli. Kuzima swichi kunamaliza kila muunganisho mara moja; {{ui:Weka upya mipangilio ya MarkupCraft}} pia inaizima.

## Unganisha msaidizi wako

Wasaidizi wanaunganishwa kupitia **CadCraft Studio** kwenye kompyuta yako: Studio inaendesha seva ndogo ambayo kompyuta hii pekee inaweza kuifikia, ikilindwa na tokeni inayotengeneza kila inapoanza. Katika Studio, chagua {{ui:Unganisha msaidizi}} na unakili anwani na tokeni kwenye msaidizi wako (Studio inaonyesha mipangilio kamili ya kubandika). Usimshirikishe tokeni kamwe.

:::note
Kichupo cha kivinjari hakiwezi kufungua muunganisho kwa msaidizi: katika programu za kivinjari, swichi haina athari hadi utumie CadCraft Studio kwenye kompyuta yako.
:::

## Wewe unabaki na udhibiti

- **Kila mabadiliko ni hatua moja ya kutendua**, yakiwa na jina la msaidizi kwa ajili yake (kwa mfano "Msaidizi: ongeza cloudrect"). {{key:Mod+Z}} inachukua mabadiliko ya mwisho ya msaidizi kwa ujumla.
- **Unajua msaidizi anapounganishwa.** Kitufe katika upau wa programu kinataja msaidizi wakati umeunganishwa; bofya ili uone anachoruhusiwa kufanya, au **Tenganisha**.
- **Shughuli.** {{ui:Mipangilio}} › {{ui:MarkupCraft}} › {{ui:Wasaidizi}} › {{ui:Shughuli}} inaorodhesha kila wito: lini, zana ipi, na kama imefanyika au imekataliwa. {{ui:Hifadhi kumbukumbu}} inahifadhi nakala.

## Kile msaidizi anachoweza kuomba

| Zana | Ruhusa | Inachofanya |
|---|---|---|
| `app_info`, `sheets_list` | Soma | Seti zilizo wazi, karatasi zao, na alama ngapi kila moja ina |
| `markups_list` | Soma | Alama zenye aina, karatasi, maandishi, maoni, kipimo, hali, mwandishi na majibu, zikichujwa kwa karatasi, hali, aina au mwandishi |
| `markup_add` | Hariri | Inaongeza mstatili, wingu, duaradufu, kisanduku cha maandishi, dokezo, mstari au mshale kwenye karatasi |
| `markup_status`, `markup_reply` | Hariri | Inaweka hali ya alama (inaandikwa katika uzi wake, na kusainiwa na msaidizi); inaongeza maoni kwenye uzi |
| `markups_export` | Hamisha | CSV au BCF ya orodha ya {{ui:Alama}} yenyewe, ya kile orodha inaonyesha (vichujio kama uliviweka); katika Studio inaweza kuandika faili kwenye folda uliyoruhusu |
| `tasks_list` | Soma | Alama ambazo ni kazi: mwajibikaji (mtu au msaidizi), siku ya mwisho, hali, kiungo, na jinsi ilivyofungwa. `assignee: "assistant"` inaorodhesha kazi zinazomsubiri msaidizi |
| `task_set`, `task_clear` | Hariri | Kufanya alama kuwa kazi au kuibadilisha (kichwa, mwajibikaji, tarehe, hali, kiungo); kuondoa kazi |
| `tasks_check` | Hariri | Kufunga kazi ambazo eneo la mchoro au kipengele cha modeli kilichounganishwa kweli kimebadilika; pitisha hali za vipengele ulivyosoma kutoka programu nyingine |
| `revisions_changes` | Soma | Orodha wazi ya kilichobadilika kati ya seti mbili zilizo wazi za mipango, ili kuiweka kwa maneno yako mwenyewe |
| `pins_list`, `decision_add` | Soma, Hariri | Noti za sauti (urefu, nani, lini, maelezo mafupi; si sauti yenyewe, wala maandishi ya sauti) na maamuzi; bandika uamuzi na ubadilishe uliotangulia |
| `redline_export`, `redline_answer` | Hamisha, Hariri | Kuandika faili la redline kwa mchora; kutumia majibu ya mchora |

Alama inayoongezwa na msaidizi inamtaja kama mwandishi: jina ambalo programu ya msaidizi inajipa, likifuatwa na "(msaidizi)", au "(msaidizi kwa <jina lako>)" mara tu umeweka jina lako la mkaguzi. Mabadiliko ya hali yake na majibu yake yanasainiwa kwa namna hiyo hiyo. Kila moja ni hatua moja ya kutendua. Kuhifadhi PDF yenye alama kunabaki kwako: tumia {{ui:Hifadhi}} kama kawaida.

Bila kufungua MarkupCraft, seva ya MCP ya CadCraft inaorodhesha alama za PDF katika folda uliyotaja (`markups_list`), na `cadcraft info Set.pdf` inaonyesha alama hizo kwenye mstari wa amri.

## Kama kitu hakifanyi kazi

- **Msaidizi haoni zana zozote za MarkupCraft:** angalia kama swichi imewashwa katika dirisha hili, na kama dirisha liko wazi katika Studio.
- **"inahitaji ruhusa ya kuhariri":** weka alama kwenye **Hariri** chini ya {{ui:Wasaidizi}}, kisha umwombe tena.
- **Hitilafu za "401" au "tokeni":** tokeni imebadilika (Studio ilianzishwa upya, au {{ui:Tokeni mpya}}). Nakili mpya kwenye mipangilio ya msaidizi.

## Angalia pia

- [Mapishi ya wasaidizi wa AI](common:assistants-recipes): mifano kamili, kila moja ikiwa na zana inazoita.

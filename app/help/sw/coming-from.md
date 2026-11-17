---
title: Kutoka kwenye programu nyingine za kuweka alama
summary: Jinsi tabia za programu ya mezani ya kuweka alama kwenye PDF zinavyolingana na MarkupCraft, na tofauti zinazowashangaza watu.
keywords: hamia, kubadili, kuhamia, inayofahamika, pdf ya mezani, alama, sanduku la zana, orodha ya alama, mwekeleo, vipindi, wasifu, njia za mkato, tofauti
from: c8f323e1
---

Ukikagua michoro katika Bluebeam Revu (au kutoa maoni kwenye PDF katika programu nyingine ya mezani ya PDF), karibu yote ya MarkupCraft yatakuwa ya kawaida: mawingu, vielekezi, sanduku la zana, orodha ya alama, hali zenye majibu, vipimo vilivyorekebishwa, mwekeleo wa karatasi. Jinsi faili zinavyoshughulikiwa ndiyo tofauti kubwa, kwa hiyo soma sehemu inayofuata hata kama utaruka zilizobaki.

## Tofauti tano muhimu

1. **Kuhifadhi kunaunda faili jipya.** MarkupCraft inaendeshwa kwenye kivinjari na haiwezi kuandika juu ya PDF kwenye diski yako. {{ui:Hifadhi}} inapakua "<name> (marked up).pdf" na ya asili inabaki kama ilivyokuwa. Wakati ujao, fungua nakala ya "(marked up)", na safisha nakala za zamani mwenyewe.
2. **PDF inahifadhiwa unapohifadhi.** Hadi hapo, nakala ya kurejesha kwenye kivinjari hiki inalinda alama zako dhidi ya hitilafu au kichupo kilichofungwa, na MarkupCraft inakupa tena wakati ujao. Ni wavu wa usalama: hifadhi PDF ili kuweka mapitio.
3. **Wasifu wako unaishi kwenye kivinjari.** Jina lako la mwandishi, mipangilio ya zana na sanduku la zana vinahifadhiwa kwenye kivinjari hiki, kwenye kompyuta hii. Kivinjari au kompyuta tofauti huanza upya, na kufuta data ya tovuti huvifuta. Hamisha sanduku lako la zana kama nakala rudufu. Tazama [Kinachobaki kwenye kivinjari hiki](topic:browser-storage).
4. **Hakuna vipindi vya pamoja bado.** Hakuna kipindi cha mapitio cha moja kwa moja na kilichoshirikiwa, wala mradi wa wingu. Mapitio yanasafiri ndani ya PDF: hifadhi, tuma nakala, mtu anayefuata anajibu na kuhifadhi.
5. **Skeli ni kwa kila karatasi, na kwa karatasi tu.** Hakuna viewport ndani ya karatasi wala "tumia skeli hii kwa kurasa zote". Rekebisha kila karatasi unayopima.

## Tabia kwa tabia

| Umezoea | Katika MarkupCraft |
|---|---|
| Jopo la picha ndogo, lebo za ukurasa | {{ui:Karatasi}} upande wa kushoto. Majina yanatoka kwenye lebo za ukurasa au yanasomwa kutoka kwenye kizuizi cha kichwa; yarekebishe kwa {{ui:Badilisha jina la karatasi}}. |
| Kufungua PDF kadhaa kama seti | Zifungue zote kwa mara moja; zinakuwa orodha moja. Hakuna faili la seti linalohifadhiwa: fungua PDF zilezile wakati ujao. |
| Sanduku la zana lenye seti za zana | Kichupo cha {{ui:Zana}}: sanduku moja kwa kila kivinjari, zana zilizohifadhiwa zenye mtindo na mada. Shiriki kwa {{ui:Hamisha}} na {{ui:Leta}} kama faili la JSON. Faili za seti za zana kutoka programu nyingine haziwezi kuletwa. |
| Jopo la sifa | Kichupo cha {{ui:Sifa}}: hali, somo, maoni, mtindo, majibu na kipengele cha kasoro mahali pamoja. |
| Orodha ya alama yenye safu | Kichupo cha {{ui:Markups}} chenye vichujio vya karatasi, mwandishi, hali na aina. Hamisha CSV au BCF. Hakuna safu maalum wala muhtasari wa PDF au kitabu cha kazi bado. |
| Hali na hatua ya mapitio | {{ui:Hali}}: Open, Accepted, Rejected, Completed. Hakuna seti maalum za hali. Zinahifadhiwa kama hali za kawaida za mapitio. |
| Majibu kwenye alama | Mzunguko wa "Replies" kwenye {{ui:Sifa}}, mabadiliko ya hali yanaandikwa humo. Jibu lililotumwa haliwezi kuhaririwa. |
| Rekebisha, kisha urefu, eneo, hesabu | {{ui:Calibrate}}, {{ui:Length}} ({{key:M}}), {{ui:Area}} ({{key:Q}}, inatoa eneo na mzingo), {{ui:Count}} ({{key:U}}). Hakuna pembe, radiasi, ujazo, urefu wa polilaini wala matundu bado. |
| Kuweka kurasa juu ya nyingine | Kichupo cha {{ui:Compare}}: nyekundu kwa ya zamani, buluu kwa mpya, panga kwa nukta mbili. Hakuna "linganisha hati" ya kiotomatiki. |
| Mihuri | {{ui:Muhuri}} kwa mihuri sita iliyojengwa ndani na maneno maalum, yenye sahihi ya jina lako na tarehe. Hakuna mihuri ya picha au sahihi bado. |
| Kufuatilia kasoro au masuala | Kichupo cha {{ui:Orodha ya kasoro}}: vipengele vyenye namba, na mwandikiwa, tarehe ya mwisho na hali; hamisha CSV. |
| Kikao cha ushirikiano wa moja kwa moja | Bado hakipatikani. Tuma PDF iliyohifadhiwa. |
| Flatten | Bado haijajengwa. Alama zinabaki kama maoni ambayo watazamaji wengine wanaweza kuonyesha na kuchapisha. |
| Tabaka kwa alama | Bado haijajengwa. Tumia somo, waandishi na vichujio vya orodha kupanga maoni. |
| Viungo kati ya karatasi | Bado haijajengwa. |
| Upau wa nafasi kusogeza, gurudumu kukuza | Vilevile: shikilia {{key:Space}} na buruta; gurudumu linakuza kwenye kielekezi. Gurudumu halisogezi ukurasa kamwe. |

## Vitufe vinavyotofautiana

Vitufe vingi vya herufi moja ni vile unavyoweza kutarajia, lakini kagua hivi kabla vidole vyako havijavitumia:

- {{key:K}} ni {{ui:Callout}}, na {{key:Q}} ni {{ui:Area}}. Ukiwa umezoea Q kwa vielekezi, hapa itaanza eneo.
- {{key:C}} ni kisanduku cha {{ui:Cloud}}; {{key:Shift+C}} ni {{ui:Free cloud}}.
- {{key:M}} ni {{ui:Length}}, {{key:U}} ni {{ui:Count}}, {{key:Y}} ni {{ui:Polyline}}, {{key:G}} ni {{ui:Polygon}}, {{key:I}} ni {{ui:Highlight}}.
- {{key:Mod+D}} inazalisha nakala ya kilichochaguliwa (badala ya alama ya kivinjari).
- {{key:Mod+Plus}} na {{key:Mod+Minus}} zinakuza karatasi, si ukurasa wa kivinjari.
- Kitufe chochote kinaweza kubadilishwa: tazama hapa chini.

:::tip
Ikiwa vidole vyako vinajua Bluebeam Revu, chagua mtindo wa menyu wa {{ui:PDF review}} katika {{ui:Mipangilio}} › {{ui:MarkupCraft}} › {{ui:Menyu, vitufe na panya}}: upau wa menyu (Faili, Hariri, Mwonekano, Hati, Alama, Pima, Dirisha) juu ya safu ya zana za mapitio, {{key:Q}} kwa kielekezi, {{key:H}} kwa kiangazio, {{key:N}} kwa poligoni, na vipimo kwenye {{key:Alt+Shift}} pamoja na herufi. Kitufe chochote kinaweza kubadilishwa hapo pia. Tazama [Menyu, vitufe na panya](topic:menus-keys-and-mouse).
:::

Orodha kamili iko katika [Kibodi na panya](topic:keyboard).

## Mambo yanayofanya kazi tofauti na unavyoweza kutarajia

- **Zana zinabaki zimewashwa.** Baada ya wingu, bado unachora mawingu. {{key:Esc}} mara moja inaondoa uteuzi, mara mbili inarudi kwenye {{ui:Chagua}}.
- **Maandishi na vielekezi vinahitaji maandishi.** Ukimaliza bila kuandika chochote, hakuna alama inayoongezwa. Madokezo yanabaki tupu.
- **Vipimo vinahitaji skeli kwanza.** {{ui:Length}} na {{ui:Area}} zinabadilika hadi {{ui:Calibrate}} kwenye karatasi isiyorekebishwa na zinarudi baadaye.
- **Maoni kutoka programu nyingine.** Mistatili, duaradufu, mistari, polilaini, poligoni, wino, visanduku vya maandishi na madokezo ya kunata yaliyotengenezwa mahali pengine yanakuwa alama za MarkupCraft zinazoweza kuhaririwa, na yanaandikwa upya kwa njia ya MarkupCraft unapohifadhi (mwonekano wake unaweza kubadilika kidogo). Viangazio vya maandishi, mihuri ya programu nyingine na aina nyingine maalum vinabaki vya kusoma tu: unaweza kujibu, si kubadilisha.
- **Herufi nje ya herufi za Ulaya Magharibi** zinachapishwa kama "?" kwenye PDF iliyohifadhiwa. Tazama [Hifadhi PDF yenye alama](topic:save-the-marked-up-pdf).
- **Tarehe za muhuri** zinatumia UTC, kwa hiyo muhuri uliotengenezwa jioni sana Amerika unaweza kuonyesha tarehe ya kesho.
- **Vipimo husafiri** kama maoni ya kawaida ya vipimo, na kila karatasi iliyorekebishwa inahifadhi skeli yake, kwa hiyo programu inayosoma vipimo vya PDF kwa kawaida inaweza kuvionyesha. Tabia kamili inategemea programu hiyo.

## Kutumia zote mbili

Unaweza kwenda na kurudi. Maoni yaliyotengenezwa mahali pengine yanafunguka kwenye MarkupCraft, na PDF ya "(marked up)" inafunguka kwenye programu nyingine za PDF pamoja na kila alama, jibu na hali inayoonekana. Kinachosomwa tena na MarkupCraft pekee (mwandikiwa wa kasoro na tarehe ya mwisho, hali ya kipengele) kinahifadhiwa kwenye faili kwa ajili ya MarkupCraft.

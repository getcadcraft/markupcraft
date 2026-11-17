---
title: Rekebisha karatasi na upime
summary: Weka skeli ya kila karatasi kutoka kwenye orodha iliyowekwa au kipimo kinachojulikana, kisha pima urefu, maeneo yenye mzingo na hesabu.
keywords: rekebisha, skeli, weka skeli, pima, urefu, umbali, kipimo, eneo, futi za mraba, mzingo, hesabu, ukadiriaji wa kiasi, kiasi, rula, kukokotoa, kujumlisha, sehemu
from: 49a25c6d
---

Urefu na maeneo vinahitaji kujua skeli ya karatasi. MarkupCraft huweka skeli **kwa kila karatasi**: rekebisha kila karatasi unayopima. Hesabu hazihitaji skeli.

Upau wa hali unaonyesha skeli ya karatasi ya sasa, au "Haijarekebishwa".

## Chagua skeli kutoka kwenye orodha

Tumia hii wakati PDF iko kwa ukubwa kamili (karatasi ya 24 × 36 inayochapishwa 24 × 36) na mchoro unaonyesha skeli yake.

1. Bofya kitufe cha skeli kwenye upau wa hali ("Haijarekebishwa"). Kisanduku cha "Skeli ya karatasi" kinafunguka.
2. Chini ya {{ui:Scale}}, chagua skeli: ya usanifu (1/32" = 1'-0" hadi 3" = 1'-0"), ya uhandisi (1" = 10' hadi 1" = 100') au ya metric (1:1 hadi 1:1000).
3. Chagua {{ui:Set scale}}.

Matokeo: upau wa hali unaonyesha skeli, kwa mfano `1/4" = 1'-0"`. Skeli za usanifu zinaonyesha urefu kwa futi na inchi, skeli za uhandisi kwa futi za desimali, na skeli za metric hadi 1:50 kwa milimita na kuanzia 1:100 kwa mita.

:::warning
Preset ni sahihi tu ikiwa PDF haijapunguzwa. Seti ya nusu ukubwa, au karatasi iliyokuwa "inayotoshea ukurasa" ilipotengenezwa, hupima vibaya kwa preset. Rekebisha kutoka kwa kipimo kinachojulikana badala yake, na kagua kipimo kimoja kwa njia yoyote.
:::

## Rekebisha kutoka kwa kipimo kinachojulikana

Tumia hii kwa seti za nusu ukubwa, karatasi zilizochanganuliwa, maelezo ya skeli zisizo za kawaida, au kukagua preset.

1. Tafuta kipimo kirefu unachokiamini, au upau wa skeli wa picha.
2. Chagua {{ui:Calibrate}} katika kundi la {{ui:Measure}} (au chagua {{ui:Chagua nukta mbili}} kwenye kisanduku cha "Skeli ya karatasi").
3. Bofya ncha moja ya kipimo, kisha ncha nyingine. (Au buruta kutoka ncha moja hadi nyingine.) Kuza kwanza kwa usahihi; {{key:Shift}} inaweka mstari kwenye hatua za 45°.
4. Kisanduku kinasema pointi ziko umbali gani kwenye karatasi na kuuliza "Ziko umbali gani kweli?". Andika {{ui:Umbali halisi}}, kwa mfano `24'-0"`, `12' 6 1/2"`, `7.2 m` au `900 mm`.
5. Chagua jinsi urefu unavyoonyeshwa chini ya {{ui:Onyesha urefu kwa}}: {{ui:Futi na inchi}}, {{ui:Futi za desimali}}, {{ui:Inchi}}, {{ui:Mita}} au {{ui:Milimita}}.
6. Chagua {{ui:Weka skeli}}.

Matokeo: upau wa hali unaonyesha "Imerekebishwa: 24'-0" juu ya 1.00 in" (urefu halisi na urefu wa karatasi), na zana uliyokuwa unakusudia kupimia nayo inarudi. Kila njia ya kuandika urefu iko katika [Vipimo na urefu](topic:units-and-scales).

Umbali halisi unaweza pia kuwa hesabu ndogo: `12'6"+3/4"`, `(24'-0")/3` au `2*450mm`. Tumia `+ - * /` na mabano; namba isiyo na kipimo inahesabiwa kwa kipimo kilicho chini ya {{ui:Onyesha urefu kwa}} (futi kwa {{ui:Futi na inchi}}). {{ui:Weka skeli}} inatumia matokeo.

Ikiwa MarkupCraft haiwezi kusoma ulichoandika, kisanduku kinasema hivyo: 'Hiki si kipimo cha urefu ambacho MarkupCraft inakielewa. Jaribu 24'-0", 12' 6 1/2", 7.2 m au 900 mm.' Hesabu ambayo haiwezi kukokotolewa inaeleza kwa nini na wapi, kwa mfano "Mabano hayajafungwa (herufi ya 5)."

## Pima urefu

1. Chagua {{ui:Length}} ({{key:M}}).
2. Bofya mwanzo, kisha mwisho. Au buruta kutoka mwanzo hadi mwisho. {{key:Shift}} inaweka kwenye hatua za 45°.

Matokeo: mstari wa vipimo wenye alama za kukatia na urefu ulioandikwa juu yake. Upau wa hali unarudia ("Urefu: 12'-6 1/2" (1/4" = 1'-0")."), na {{ui:Properties}} inaonyesha chini ya {{ui:Length}}. Futi na inchi zinazungushwa hadi 1/16" iliyo karibu zaidi.

Ikiwa karatasi bado haina skeli, kuchagua {{ui:Length}} kunabadilisha hadi {{ui:Calibrate}}, na upau wa hali unaeleza: "Rekebisha karatasi hii kwanza: chagua nukta mbili zenye umbali unaojulikana, au chagua skeli yake. Kisha pima." Baada ya kuweka skeli, {{ui:Length}} inarudi.

## Chora kwa skeli

Kwenye karatasi iliyorekebishwa unaweza kuandika urefu halisi unapochora {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}}, {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}}, {{ui:Area}} au nafasi:

1. Bofya nukta ya kwanza.
2. Elekeza upande sehemu inayofuata inapoenda na uandike urefu wake, kama `16` (katika kipimo cha karatasi), `12'6"` au `3.5 m`. Kisanduku kinafunguka karibu na kielekezi unapoandika.
3. Bonyeza {{key:Enter}}. Nukta inaenda umbali huo, kwa mwelekeo wa kielekezi.

Ili kuweka mwelekeo kwa usahihi, ongeza `<` na pembe kwa digrii: `8 < 90` inaenda futi 8 moja kwa moja juu, `4<0` kulia, `10 < 225` chini na kushoto, kama karatasi inavyoonekana (pamoja na kurasa zilizogeuzwa). Endelea kuandika urefu kwa pembe zinazofuata, kisha maliza umbo kama kawaida. {{key:Esc}} inafunga kisanduku bila kuweka nukta.

## Pima pembe

1. Chagua {{ui:Angle}} ({{key:X}}).
2. Bofya mwisho wa mkono mmoja, kisha kona, kisha mwisho wa mkono mwingine.

Matokeo: mikono miwili, tao dogo kwenye kona na pembe kwa digrii, hadi sehemu moja ya kumi (0° hadi 180°). Pembe haihitaji skeli. {{ui:Properties}} inaonyesha chini ya {{ui:Angle}}, na orodha, CSV na BCF zinaibeba.

{{ui:Arc}} ({{key:O}}) kwenye karatasi iliyorekebishwa pia inaonyesha urefu wake kando ya mkunjo kwenye {{ui:Properties}}.

## Pima eneo na mzingo wake

1. Chagua {{ui:Area}} ({{key:Q}}).
2. Bofya kila kona ya chumba au eneo.
3. Maliza kwa kubofya mara mbili, {{key:Enter}} au kubofya kulia (kugonga mara mbili kwenye skrini ya kugusa). {{key:Backspace}} inaondoa kona ya mwisho.

Matokeo: mstari wa nje wenye kivuli wenye eneo, na "P" yenye mzingo katikati, kwa mfano "128.00 sq ft" na "P 48'-0"". Skeli za futi zinatoa futi za mraba, inchi zinatoa inchi za mraba, mita zinatoa mita za mraba, na milimita zinatoa milimita za mraba. Eneo linahitaji angalau kona tatu.

### Matundu

Ili kuacha safu, shimo au ua, chagua eneo kisha chagua {{ui:Ongeza tundu}} kwenye {{ui:Properties}}. Bofya kona za tundu ndani ya eneo na umalize kama kwa eneo. Tundu linabaki wazi (bila kivuli), eneo lake linatolewa, na kingo zake zinaongezwa kwenye mzingo: chumba cha 16' × 8' chenye tundu la 4' × 4' kinasomeka "112.00 sq ft" na "P 64'-0"". Ongeza mengi unavyohitaji; hayawezi kuingiliana wenyewe wala kuvuka mstari wa nje wa eneo. {{ui:Ondoa matundu}} inaondoa yote, na {{key:Mod+Z}} inatengua moja.

## Hesabu vitu

1. Chagua {{ui:Count}} ({{key:U}}).
2. Kwenye {{ui:Properties}}, andika {{ui:Jina la kundi}}, kwa mfano "Mifereji ya sakafu". (Inabaki kwa mara nyingine.)
3. Bofya kila kitu kwenye karatasi.

Matokeo: kila bofya inaongeza nukta yenye namba; nukta ya kwanza inabeba lebo kama "Mifereji ya sakafu: 7", na upau wa hali unaweka jumla inayoendelea.

- **Anzisha kundi jingine:** bonyeza {{key:Esc}} mara moja (inaondoa uteuzi), badilisha {{ui:Jina la kundi}}, kisha bofya tena.
- **Ongeza kwenye kundi lililopo:** chagua kundi kwanza, kisha chagua {{ui:Count}} na ubofye.
- **Ondoa alama:** kundi likiwa limechaguliwa, shikilia {{key:Shift}} kisha bofya nukta. Kuondoa nukta ya mwisho kunaondoa kundi. Kwenye skrini ya kugusa bila kibodi, tumia {{key:Mod+Z}} au {{ui:Tendua}} badala yake.
- **Badilisha jina la kundi:** lichague kisha uhariri {{ui:Jina la kundi}} kwenye {{ui:Properties}}.

Kundi la hesabu ni la karatasi moja. Hesabu kwenye karatasi kadhaa zinaonekana kama makundi tofauti kwenye orodha ya alama.

## Badilisha au ondoa skeli

Bofya kitufe cha skeli kwenye upau wa hali. Kisanduku kinaonyesha skeli ya sasa; chagua nyingine, chagua {{ui:Chagua nukta mbili}}, au chagua {{ui:Ondoa skeli}}.

Urefu na maeneo yaliyochorwa tayari **yanapimwa upya** kwa skeli mpya mara moja. Kutengua kunarudisha skeli ya zamani.

## Namba zinakwenda wapi

- {{ui:Properties}} inaonyesha thamani za kipimo kilichochaguliwa.
- Kichupo cha {{ui:Markups}} kinaorodhesha kila thamani, na CSV yake ina safu ya "Measurement". Tazama [Orodha ya alama](topic:markups-list-and-export).
- PDF iliyohifadhiwa inaweka skeli kwenye ukurasa na kuandika urefu na maeneo kama maoni ya vipimo, ili programu nyingine za PDF zinazoelewa vipimo ziweze kuvionyesha. Tazama [Kilichomo kwenye PDF](topic:what-the-pdf-keeps).

Kwa ukadiriaji kamili wa kiasi wenye vipengele, makusanyiko na bei, tumia TakeoffCraft: MarkupCraft hupima kwa mapitio, si kwa makadirio.

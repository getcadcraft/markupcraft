---
title: Mapya katika 0.9 (ya awali)
summary: Maelezo na ubao wa kubandika visivyochapishwa kamwe, maelezo ya faragha yaliyosimbwa na nakala safi kwa mteja, viungo vya kundi kwa seti nzima ya michoro, zana ya Tao yenye mbinu kumi, kumfuata mkaguzi mwingine moja kwa moja, na marekebisho ya alama zilizofutwa zinazobaki kwenye PDF iliyohifadhiwa.
keywords: mapya 0.9, toleo la awali, mapya, nini kipya, 0.9, maelezo ya toleo, mabadiliko, maelezo, ubao wa kubandika, maelezo ya faragha, nenosiri, kusimbwa, ficha maelezo, onyesha maelezo, nakala safi, picha, viungo vya kundi, marejeo ya karatasi, unganisha karatasi, kichwa cha mchoro, nambari ya karatasi, nyongeza, nambari upya, kiungo cha pdf, tao, mbinu za tao, tao la pointi tatu, radius, fuata, nifuate, moja kwa moja, mwonekano wa darasa, orodha ya watu, alama iliyofutwa, vidokezo, majina ya vichupo, 0.8, 0.8.1, toleo, vipengele vipya, kazi, aliyepewa, siku ya mwisho, imechelewa, kagua sasa, nini kimebadilika, marekebisho, linganisha, noti ya sauti, uamuzi, redline, faili la majibu, mchora-rasimu, msaidizi, mcp, matatizo, lugha, vifaa vya kuingiza, trackpad, safu za upau wa zana, gridi ya sifa, sasisho
from: aa3dfeb8
---

Hii ndiyo iliyobadilika katika MarkupCraft 0.9, ikilinganishwa na 0.8.1. Wazo kuu ni kwamba maelezo yako ya kazi yanabaki mbali na ukurasa anaopokea mteja, na seti nzima ya michoro inaweza kuunganishwa kwa pitio moja.

## Mapya

### Maelezo, ubao wa kubandika na maelezo ya faragha

- **Ubao wa kubandika.** Eneo lililo karibu na kila karatasi ni meza ya kazi: chochote kilichochorwa, kuandikwa au kubandikwa kando ya karatasi ni maelezo na hakichapishwi kamwe. Chagua {{ui:Show the pasteboard}} ili kukuza nje upate nafasi, au {{ui:Snapshot to the pasteboard}}, buruta kisanduku, kisha {{ui:To the pasteboard}} ili kuweka picha ya sehemu ya mchoro kando ya karatasi. Picha ni picha tu, na haibadiliki karatasi inapobadilika. Tazama [Maelezo, ubao wa kubandika na maelezo ya faragha](topic:notes-and-pasteboard).
- **Onyesha na ficha maelezo.** Alama yoyote inaweza kuwa maelezo: weka {{ui:New markups are}} kwenye kichupo cha {{ui:Notes}}, au {{ui:This markup is}} kwenye {{ui:Properties}}. {{key:Shift+H}} au swichi ya {{ui:Notes}} chini ya karatasi inaficha na kuonyesha maelezo yote kwa wakati mmoja. Maelezo hayajumuishwi katika uchapishaji, nakala zilizobapa, orodha na uhamishaji, na visomaji vingine vya PDF havivionyeshi. PDF yako iliyohifadhiwa inayahifadhi kwa mara nyingine utakapoifungua kwenye MarkupCraft.
- **Maelezo ya faragha.** Chagua {{ui:Set a passphrase}}, kisha fanya alama kuwa {{ui:A private note}}. Inasimbwa kwenye faili kwa nenosiri la angalau herufi 10, na hakuna njia ya kurejesha: hakuna mtu, pamoja nasi, anayeweza kuifungua bila nenosiri. {{ui:Lock}} huweka maelezo ya faragha mbali; {{ui:Stay unlocked on this device}} imezimwa kwa chaguo-msingi.
- **Hifadhi nakala safi.** {{ui:Save a clean copy}} huondoa kila maelezo, kila maelezo ya faragha na kila kitu kilicho kwenye ubao wa kubandika. Itumie kwa faili linalokwenda kwa mteja.

### Unganisha seti nzima

- **Viungo vya kundi.** Chagua {{ui:Pages}} › {{ui:Batch links…}}, au {{ui:Link sheet callouts…}} chini ya {{ui:Find text}} kwenye paneli ya {{ui:Sheets}}. Hatua ya 1 inaorodhesha nambari na jina la kila karatasi kama inavyosomwa kutoka kwenye kichwa chake cha mchoro; rekebisha zilizo sahihi. Hatua ya 2 inaorodhesha marejeo yaliyopatikana, kama `3/A-501` au `DETAIL 2 ON A-501`. {{ui:Will link}} inaonyesha karatasi na mwonekano wa kila moja, {{ui:Not linked}} inaonyesha nambari ambazo hakuna karatasi wazi inazo, na {{ui:Create the links}} huzitengeneza zote kwa hatua moja ya kutendua. Iendeshe tena baada ya nyongeza au kubadilisha nambari; viungo ulivyotengeneza kwa mkono havibadilishwi kamwe. Kiungo chenye mwonekano huhifadhiwa kama kiungo cha PDF, ili visomaji vingine vifungue maelezo ya kina pia. Tazama [Viungo vya karatasi](topic:sheet-links).

### Mchoro

- **Tao, mbinu kumi.** Zana ya {{ui:Arc}} ({{key:O}}) sasa ina kisanduku cha {{ui:Arc method}} juu ya ukurasa chenye njia kumi za kuchora tao, na pembe, urefu, radius na mwelekeo vinaweza kubofya au kuandikwa. Tazama [Chora tao kwa njia kumi](topic:draw-an-arc).

### Kufanya kazi pamoja

- **Mfuate mkaguzi.** Katika kikao cha Moja kwa moja, chagua {{ui:Follow}} karibu na jina la mtu, na mwonekano wako utahamia pamoja na wake; kujisogeza au kukuza mwenyewe kunasimamisha hilo. Mwenyeji anaweza kuchagua {{ui:Ask everyone to follow me}}. Orodha ya watu inaonyesha rangi ya kila mtu, jina, karatasi aliyopo na wakati wa mabadiliko yake ya mwisho. Tazama [Mfuate mkaguzi mwingine kwenye kikao cha Moja kwa moja](topic:follow-in-live).

## Katika kila programu

- Vidokezo ni vidokezo vya Bootstrap, kidokezo cha mwanzo kinaweza kufungwa, safu za vichupo husogea vinapozidi, na vichwa vya vichupo vya kivinjari husomeka `<document> — MarkupCraft | CadCraft`.
- Paneli yenye sehemu kadhaa hufungua moja na kufunga nyingine (kufuli kando ya kishale huweka moja wazi); swichi ya Mipangilio huzima hili.
- Kila programu huanza na mkusanyiko wa msingi wa vitu vya Maktaba.
- Vitengo vya uzito na joto vinapatikana kwenye Mipangilio ya Vipimo.

## Vilivyorekebishwa

- **Alama zilizofutwa hazibaki tena zinasomeka ndani ya PDF iliyohifadhiwa.** Zamani, kuhifadhi kulichukua alama iliyofutwa au iliyoandikwa upya kutoka ukurasa wake lakini kuacha kitu chenyewe, pamoja na maandishi yake, kwenye faili. Sasa kuhifadhi kunafuta vitu hivyo. Faili zilizohifadhiwa na matoleo ya awali bado zina alama hizo hadi uzihifadhi tena.

## Mapungufu ya kweli

- Viungo vya kundi vilijaribiwa kwenye seti zetu za majaribio. Seti halisi huchora viputo kwa njia nyingi, kwa hiyo kwenye seti ya mteja baadhi ya mionekano inaweza kukosekana. Karatasi zilizochanganuliwa zinahitaji {{ui:Read text (OCR)…}} kwanza.
- Maelezo, maelezo ya faragha na ubao wa kubandika vilijaribiwa kwenye kivinjari kisicho na kiolesura na kwenye faili zetu, si kwenye seti kubwa halisi ya vekta wala kwenye kikao halisi cha Moja kwa moja cha watu wawili. Kubadilisha nenosiri bado hakujajengwa. Matoleo ya kabla ya 0.9 hayaonyeshi maelezo.
- Mwonekano wa darasa ni orodha ya watu; haujajaribiwa na mwalimu na wanafunzi halisi.
- Lugha zisizo za Kiingereza ni rasimu za mashine hadi mzungumzaji mzawa azisome.
- Visakinishi vya Windows havijasainiwa kidijitali (Maelezo zaidi, kisha Endesha hata hivyo). Picha ya diski ya macOS haijathibitishwa na Apple (bonyeza kulia, kisha Fungua).

## Mapema: 0.8 na 0.8.1

Hii ndiyo iliyobadilika katika MarkupCraft 0.8 na 0.8.1, ikilinganishwa na 0.7. Jambo kubwa jipya ni kwamba alama inaweza kuwa kazi ambayo mtu, au msaidizi wako aliyeunganishwa, anaifanya, na inajifunga yenyewe mchoro halisi unapobadilika.

### Mapya

**Alama zinazofanya kazi**

- **Geuza alama kuwa kazi.** Chagua alama moja au zaidi, fungua kichupo cha {{ui:Tasks}} na uchague {{ui:Make selected a task}}. Kazi ina kichwa, mtu au msaidizi wako wa kuifanya, siku ya mwisho ya hiari na hali, na inahifadhi nafasi yake kwenye karatasi pamoja na mazungumzo yake. Tazama [Geuza alama kuwa kazi](topic:markups-that-act).
- **Kazi zinazojifunga zenyewe.** Kazi inaweza kufuatilia mistari ndani ya alama yake. Fungua toleo jipya zaidi la karatasi na uchague {{ui:Check now}}: kama mistari katika eneo hilo imebadilika kwa zaidi ya kidogo sana, kazi inawekwa alama Imefanyika, alama yake inakuwa Imekamilika, na maelezo kwenye mazungumzo yanaeleza kilichobadilika. Tarehe mpya ya muhuri, au mistari iliyosogea chini ya pointi 1.5, hazihesabiwi. Kazi inaweza badala yake kufuatilia kipengele cha modeli: msaidizi wako anaripoti kipengele kwa `tasks_check`, na ripoti ya baadaye inayotofautiana, au kipengele kilichofutwa, hufunga kazi. Hatua moja ya kutendua inaifungua tena.
- **Tafuta kazi.** Chuja orodha ya {{ui:Tasks}} kwa hali na kwa anayeikusudia, ikiwa ni pamoja na {{ui:Overdue}}. Chagua {{ui:Assigned to}}, kisha {{ui:Assistant}} kuona kinachosubiri msaidizi wako. Kazi iliyopita siku yake ya mwisho inaonekana kama onyo kwenye paneli ya Matatizo. {{ui:CSV}} inahamisha orodha. Kazi zinahifadhiwa kwenye PDF pamoja na alama, na husafiri kupitia Moja kwa moja kama sifa nyingine za alama.

**Ni nini kilichobadilika, kama orodha ya wazi**

- **Orodhesha mabadiliko.** Fungua kichupo cha {{ui:Compare}}, kisha {{ui:Compare a whole set}}, chagua faili la awali na la baadaye, kisha uchague {{ui:List the changes}}. Orodha huanza na hesabu, kisha inashughulikia kila karatasi iliyobadilika, mabadiliko makubwa zaidi kwanza: mahali kwenye karatasi, ukubwa wake (kwa vipimo halisi pamoja na inchi za karatasi kwenye karatasi iliyopimwa), kama mistari iliongezwa au iliondolewa, alama ngapi ziko hapo, na maneno gani yalionekana au kutoweka. {{ui:Copy the list}} huweka orodha kwenye ubao wa kunakili, na {{ui:CSV}} huandika safu moja kwa kila mabadiliko. Tazama [Orodhesha kilichobadilika kati ya marekebisho](topic:what-changed-in-words).

**Noti za sauti na maamuzi**

- **Noti za sauti.** Kwenye kichupo cha {{ui:Notes}} chagua {{ui:Record a voice note}}, kisha {{ui:Stop recording}}; rekodi husimama zenyewe baada ya dakika mbili. Noti inabandikwa katikati ya karatasi, unaiburuta mahali pake na kuandika maelezo mafupi kwenye {{ui:Properties}}. {{ui:Play}} kwenye orodha inaicheza. Rekodi inahifadhiwa ndani ya PDF.
- **Maamuzi.** {{ui:Pin a decision}} huandika sentensi moja au mbili kwenye karatasi. Likichukua nafasi ya uamuzi wa awali, chagua huo kwenye {{ui:It replaces}}: wa zamani unabaki, ukiwekewa alama Imebadilishwa, na unaelekeza kwenye mpya. Hatua moja ya kutendua inaurudisha. Tazama [Bandika noti za sauti na maamuzi kwenye karatasi](topic:voice-notes-and-decisions).

**Redline hadi marekebisho**

- **Tuma na ujibu.** Kwenye kichupo cha {{ui:Tasks}} fungua {{ui:Redline to revision}}, andika marekebisho ambayo alama zinalinganishwa nayo, kisha uchague {{ui:Export redline file}}. Unapata faili la `.redline.json` lenye kipengee kimoja kwa kila alama wazi: karatasi, nafasi (kama sehemu za karatasi, ili chapa upya kwa ukubwa mwingine bado ilingane), maneno, mwandishi, mazungumzo na kazi yake. Aliyechora mabadiliko hujibu Accepted, Rejected au Done kwenye faili la `.redline-answers.json`; {{ui:Load answers file…}} humpa kila alama hali hiyo na maelezo ya mchora-rasimu, kama hatua moja ya kutendua. Tazama [Tuma alama kwa mchora-rasimu kama redline](topic:redline-to-revision).

**Wasaidizi wa AI**

- **Zana zaidi.** Msaidizi uliounganisha kupitia CadCraft Studio unaweza kuorodhesha kazi (`tasks_list`), kutengeneza au kubadilisha moja (`task_set`), kuiondoa (`task_clear`), kuikagua dhidi ya marekebisho mapya au kipengele (`tasks_check`), na kusoma orodha ya wazi ya mabadiliko kati ya seti mbili za mipango zilizo wazi (`revisions_changes`). Inapata zana ulizotia alama chini ya swichi ya Wasaidizi pekee, na kila mabadiliko ni hatua moja ya kutendua. Tazama [Tumia MarkupCraft na msaidizi wa AI](topic:use-with-ai-assistants).

### Katika kila programu

- **Lugha.** CadCraft Studio sasa ina lugha 54. Kumi ni mpya: Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili na Kiuzbeki. Zote zisizo za Kiingereza ni rasimu za mashine hadi mzungumzaji mzawa azisome.
- **Vifaa vya kuingiza.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} huweka kile ambacho trackpad, vitufe vya pembeni vya kipanya chako, kalamu, kugusa kwa vidole, kipanya cha 3D, kidhibiti cha mchezo au kidhibiti cha MIDI kinafanya, kwa kila programu au kwa hii pekee. Hadi ubadilishe kitu, kila kifaa hufanya kazi kama zamani. Tazama [Tumia trackpad, kipanya cha 3D au kidhibiti](common:input-devices).
- **Safu za upau wa zana.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ina {{ui:Wrap}} (chaguo-msingi), {{ui:2 rows}} na {{ui:1 row}}, ili mchoro upate nafasi zaidi. Tazama [Panga paneli](common:arrange-panels).
- **Gridi ya sifa.** Sehemu za Mtindo wa alama hutumia gridi ya pamoja, yenye kategoria zinazokunjika na safu za lebo na thamani.
- **Paneli ya Matatizo.** Maonyo kutoka kwenye programu, kama kazi iliyochelewa, hukusanywa kwenye paneli moja ya Matatizo.
- **Moja kwa moja na nyongeza.** Vikao vya Moja kwa moja vinaelezwa katika [Fanya kazi pamoja moja kwa moja](common:work-together-live). Orodha ya nyongeza inayofuata akaunti yako iko katika [Nyongeza na orodha ya akaunti yako](common:addons-basics).
- **Unganisha AI yako.** CadCraft Studio ndiyo kitovu cha msaidizi wako mwenyewe: unganisha mara moja kwa programu zote nane. Programu zenyewe hazina AI yoyote.

### Imerekebishwa katika 0.8.1

- **Studio inaweza kubadili lugha wakati inaendesha.** Hapo awali, programu ya eneo-kazi na matoleo yaliyofungashwa yalibaki kwa Kiingereza. Hili bado halijajaribiwa kwenye kila jukwaa: tuambie kama lugha haibadiliki.
- Usakinishaji wa Studio 0.8 unapewa 0.8.1 kupitia {{ui:Settings}} › {{ui:Updates}}.

### Bado haipo katika toleo hili

- **Haijasainiwa kidijitali.** Visakinishi vya Windows na faili la .dmg la macOS havina sahihi bado. Kwenye Windows, SmartScreen ikisimamisha kisakinishi, chagua {{ui:More info}}, kisha {{ui:Run anyway}}. Kwenye Mac, bonyeza kulia CadCraft Studio kisha uchague {{ui:Open}}. Matoleo ya duka yamesimamishwa kwa sasa.
- **Kuunganisha AI yako bado kuna mapungufu.** Kuunganisha kwa mbofyo mmoja ndani ya Studio, kiunganishi kilichopangishwa kwa visaidizi vya kivinjari, na API key yako ndani ya Studio havijaahidiwa kwa toleo hili. Mzunguko wa kazi umejaribiwa, lakini bado si kwa msaidizi halisi.
- **Ukaguzi wa kazi unahitaji ukubwa sawa wa ukurasa.** Karatasi iliyopangwa upya kwa ukubwa mwingine haitalingana, kwa hiyo kazi zake hazifungi. Karatasi zinaoanishwa kwa nambari ya karatasi, au vinginevyo kwa nafasi ya ukurasa.
- **Noti za sauti ni rekodi tu.** Hakuna nakala ya maandishi, na msaidizi huona urefu wa noti, mwandishi na maelezo mafupi, si sauti. Rekodi ilijaribiwa kwa maikrofoni bandia kwenye kivinjari kisicho na kiolesura; maikrofoni halisi kwenye simu, kompyuta kibao au laptop bado inahitaji kukaguliwa.
- **Karatasi za hesabu na sababu kwenye PDF** huhifadhiwa kwenye ingizo la faragha ndani ya faili. MarkupCraft ya zamani hupuuza ingizo hilo na kulifuta siku itakapohifadhi faili tena, kwa hiyo fungua na uhifadhi faili kama hilo kwa 0.8 au zaidi.
- **Upande wa mchora-rasimu wa redline.** CadCraft kusoma faili la redline na kulijibu bado haijajengwa.
- **Lugha nyingine.** Upau wa programu wa Tamil unazidi kwa 528 px.

Mambo mengine yote yako katika [Bado hakijajengwa](topic:not-built-yet). Kwa toleo lililotangulia, tazama [Mapya katika 0.7](topic:whats-new-0-7).

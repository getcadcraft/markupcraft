---
title: Mapya katika 0.8 na 0.8.1
summary: Alama zinazogeuka kuwa kazi na kujifunga zenyewe, orodha rahisi ya mabadiliko kati ya marekebisho, noti za sauti na maamuzi kwenye mpango, faili za redline kwa mchoraji, na mabadiliko ya pamoja ya 0.8: vifaa vya kuingiza, safu za upau wa zana, Matatizo, lugha zaidi.
keywords: mapya, nini kipya, maelezo ya toleo, kumbukumbu ya mabadiliko, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, kazi, mpokeaji, siku ya mwisho, imechelewa, kagua sasa, kilichobadilika, marekebisho, linganisha, noti ya sauti, uamuzi, redline, faili la majibu, mchoraji, msaidizi, mcp, matatizo, lugha, vifaa vya kuingiza, padi ya kugusa, safu za upau wa zana, gridi ya sifa, sasisho
from: 40368796
---

Hiki ndicho kilichobadilika katika MarkupCraft 0.8 na 0.8.1, ikilinganishwa na 0.7. Jambo kubwa jipya ni kwamba alama inaweza kuwa kazi ambayo mtu, au msaidizi wako mwenyewe, anaitekeleza, na ambayo hujifunga yenyewe mchoro unapobadilika kweli.

## Mapya

### Alama zinazofanya kazi

- **Geuza alama kuwa kazi.** Chagua alama moja au zaidi, fungua kichupo cha {{ui:Tasks}} kisha uchague {{ui:Make selected a task}}. Kazi ina kichwa, mtu au msaidizi wako aliyeunganishwa wa kuitekeleza, siku ya mwisho ya hiari na hali, na huhifadhi nafasi yake kwenye karatasi pamoja na uzi wake. Angalia [Geuza alama kuwa kazi](topic:markups-that-act).
- **Kazi zinazojifunga zenyewe.** Kazi inaweza kufuatilia mchoro ndani ya alama yake. Fungua marekebisho mapya zaidi ya karatasi kisha uchague {{ui:Check now}}: ikiwa mistari katika eneo hilo imebadilika kwa zaidi ya kiasi kidogo sana, kazi huwekwa alama ya Done, alama yake inakuwa Completed, na noti katika uzi inaeleza kilichobadilika. Muhuri mpya wa tarehe, au mistari iliyohama chini ya pointi 1.5, hazihesabiwi. Badala yake, kazi inaweza kufuatilia kipengele cha modeli: msaidizi wako huripoti kipengele kwa `tasks_check`, na ripoti ya baadaye inayotofautiana, au kipengele kilichofutwa, hufunga kazi. Hatua moja ya kutendua inaifungua tena.
- **Tafuta kazi.** Chuja orodha ya {{ui:Tasks}} kwa hali na kwa nani ni yake, ikiwa ni pamoja na {{ui:Overdue}}; chagua {{ui:Assigned to}}, kisha {{ui:Assistant}} ili kuona kinachosubiri msaidizi wako. Kazi iliyopita siku yake ya mwisho huonekana kama onyo kwenye paneli ya Matatizo. {{ui:CSV}} inahamisha orodha. Kazi huhifadhiwa kwenye PDF pamoja na alama, na husafiri kupitia Live kama sifa nyingine za alama.

### Kilichobadilika, kama orodha rahisi

- **Orodhesha mabadiliko.** Fungua kichupo cha {{ui:Compare}}, kisha {{ui:Compare a whole set}}, chagua faili la awali na la baadaye, kisha uchague {{ui:List the changes}}. Orodha huanza na hesabu, kisha inaeleza kila karatasi iliyobadilika, mabadiliko makubwa zaidi kwanza: mahali karatasini, ukubwa wake (kwa vipimo halisi pamoja na inchi za karatasi kwenye karatasi iliyopimwa), kama mistari iliongezwa au iliondolewa, alama ngapi zipo hapo, na maneno yaliyoonekana au kutoweka. {{ui:Copy the list}} huweka orodha kwenye ubao wa kunakili, na {{ui:CSV}} huandika safu moja kwa kila mabadiliko. Angalia [Orodhesha kilichobadilika kati ya marekebisho](topic:what-changed-in-words).

### Noti za sauti na maamuzi

- **Noti za sauti.** Kwenye kichupo cha {{ui:Notes}} chagua {{ui:Record a voice note}}, kisha {{ui:Stop recording}}; kurekodi husimama chenyewe baada ya dakika mbili. Noti hubandikwa katikati ya karatasi; unaiburuta mahali inapostahili na kuandika maelezo mafupi katika {{ui:Properties}}, na {{ui:Play}} kwenye orodha huicheza. Kurekodi huhifadhiwa ndani ya PDF.
- **Maamuzi.** {{ui:Pin a decision}} huandika sentensi moja au mbili kwenye karatasi. Ikiwa inachukua nafasi ya uamuzi wa awali, chagua huo kwenye {{ui:It replaces}}: wa zamani unabaki, ukiwa na alama ya Replaced, na unaelekeza kwa mpya. Hatua moja ya kutendua inaurudisha. Angalia [Weka noti za sauti na maamuzi kwenye karatasi](topic:voice-notes-and-decisions).

### Redline hadi marekebisho

- **Tuma na ujibu.** Kwenye kichupo cha {{ui:Tasks}} fungua {{ui:Redline to revision}}, andika marekebisho ambayo alama zinahusu, kisha uchague {{ui:Export redline file}}. Utapata faili la `.redline.json` lenye kipengele kimoja kwa kila alama iliyo wazi: karatasi, nafasi (kama sehemu za karatasi, ili uchapishaji upya kwa ukubwa mwingine bado ulingane), maneno, mwandishi, uzi na kazi yake. Mtu anayechora mabadiliko hujibu kwa Accepted, Rejected au Done katika faili la `.redline-answers.json`; {{ui:Load answers file…}} humpa kila alama hali hiyo na maelezo ya mchoraji, kama hatua moja ya kutendua. Angalia [Tuma alama kwa mchoraji kama redline](topic:redline-to-revision).

### Msaidizi wa AI

- **Zana zaidi.** Msaidizi uliyemuunganisha kupitia CadCraft Studio anaweza kuorodhesha kazi (`tasks_list`), kuunda au kubadilisha moja (`task_set`), kuiondoa (`task_clear`), kuikagua dhidi ya marekebisho mapya zaidi au kipengele (`tasks_check`), na kusoma orodha rahisi ya mabadiliko kati ya seti mbili za mipango zilizofunguliwa (`revisions_changes`). Hupata zana ulizotiki tu chini ya swichi ya Wasaidizi, na kila mabadiliko ni hatua moja ya kutendua. Angalia [Tumia MarkupCraft na msaidizi wa AI](topic:use-with-ai-assistants).

## Katika kila programu

- **Lugha.** CadCraft Studio sasa ina lugha 54. Kumi ni mpya: Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili na Kiuzbeki. Lugha zote zisizo Kiingereza ni rasimu za mashine hadi mzungumzaji mzawa azisome.
- **Vifaa vya kuingiza.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} huweka kitendo cha padi ya kugusa, vitufe vya pembeni vya kipanya chako, kalamu, mguso wa vidole, kipanya cha 3D, kidhibiti cha mchezo au kidhibiti cha MIDI, kwa programu zote au kwa hii pekee. Hadi ubadilishe kitu, kila kifaa hufanya kazi kama hapo awali. Angalia [Tumia padi ya kugusa, kipanya cha 3D au kidhibiti](common:input-devices).
- **Safu za upau wa zana.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ina {{ui:Wrap}} (chaguo-msingi), {{ui:2 rows}} na {{ui:1 row}}, ili mchoro upate nafasi zaidi. Angalia [Panga paneli](common:arrange-panels).
- **Gridi ya sifa.** Sehemu za Mtindo za alama hutumia gridi ya pamoja, yenye kategoria zinazoweza kukunjwa na safu za lebo na thamani.
- **Paneli ya Matatizo.** Onyo kutoka programu, kama kazi iliyochelewa, hukusanywa katika paneli moja ya Matatizo.
- **Live na programu-jalizi.** Vikao vya Live vinaelezwa katika [Fanyeni kazi pamoja moja kwa moja](common:work-together-live); orodha ya programu-jalizi inayofuata akaunti yako iko katika [Programu-jalizi na orodha ya akaunti yako](common:addons-basics).
- **Unganisha AI yako.** CadCraft Studio ndiyo kitovu cha msaidizi wako mwenyewe: unganisha mara moja kwa programu zote nane. Programu zenyewe hazina AI yoyote.

## Imerekebishwa katika 0.8.1

- **Studio inaweza kubadilisha lugha ikiwa inaendeshwa.** Hapo awali, programu ya eneo-kazi na matoleo yaliyofungashwa yalibaki kwa Kiingereza. Hili bado halijajaribiwa kwenye kila jukwaa: tuambie ikiwa lugha haibadiliki.
- Usakinishaji wa Studio 0.8 hupewa 0.8.1 kupitia {{ui:Settings}} › {{ui:Updates}}.

## Bado haipo katika toleo hili

- **Haijasainiwa kwa msimbo.** Vifungaji vya Windows na faili la macOS .dmg bado havina sahihi. Kwenye Windows, ikiwa SmartScreen itasimamisha kifungaji, chagua {{ui:More info}}, kisha {{ui:Run anyway}}. Kwenye Mac, bonyeza kulia CadCraft Studio kisha uchague {{ui:Open}}. Matoleo ya duka yamesimamishwa kwa sasa.
- **Unganisha AI yako bado haijakamilika kwa baadhi ya sehemu.** Kuunganisha kwa bonyeza moja ndani ya Studio, kiunganishi kinachohudumiwa kwa wasaidizi wa kivinjari, na ufunguo wako wa API ndani ya Studio hayaahidiwi kwa toleo hili. Mtiririko wa kazi umejaribiwa, lakini bado si kwa msaidizi halisi.
- **Ukaguzi wa kazi unahitaji ukubwa sawa wa ukurasa.** Karatasi iliyochapishwa upya kwa ukubwa mwingine haitalingana, kwa hiyo kazi zake hazifungi. Karatasi huoanishwa kwa nambari ya karatasi, kisha kwa nafasi ya ukurasa.
- **Noti za sauti ni rekodi tu.** Hakuna nakala ya maandishi, na msaidizi huona urefu, mwandishi na maelezo mafupi ya noti, si sauti. Kurekodi kulijaribiwa kwa maikrofoni bandia kwenye kivinjari kisicho na kiolesura; maikrofoni halisi kwenye simu, kompyuta kibao au kompyuta ndogo bado inahitaji kukaguliwa.
- **Karatasi za hesabu na sababu katika PDF** huhifadhiwa katika ingizo la faragha ndani ya faili. MarkupCraft ya zamani hupuuza ingizo hilo na kulifuta wakati ujao inapohifadhi faili, kwa hiyo fungua na uhifadhi faili kama hilo kwa 0.8 au zaidi.
- **Upande wa mchoraji wa redlines.** CadCraft kusoma faili la redline na kulijibu bado hakijajengwa.
- **Lugha nyingine.** Upau wa programu wa Tamil unazidi kwa 528 px.

Kila kitu kingine kiko katika [Bado hakijajengwa](topic:not-built-yet). Kwa toleo lililotangulia, angalia [Mapya katika 0.7](topic:whats-new-0-7).

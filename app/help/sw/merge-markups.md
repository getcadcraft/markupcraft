---
title: Unganisha mabadiliko ya watu wawili kwenye PDF moja
summary: Ruhusu git, Fossil au Mercurial kuunganisha nakala mbili zilizowekwa alama za PDF hiyo hiyo, alama kwa alama, pamoja na madokezo.
keywords: unganisha, git, fossil, mercurial, udhibiti wa matoleo, mgongano, njia tatu, cadcraft merge, gitattributes, alama, madokezo, timu, nakala mbili
from: a450a9ef
---

Watu wawili wanaweka alama kwenye PDF moja, kila mmoja kwenye nakala yake. Kama waligusa alama tofauti, nakala hizo zinaweza kuunganishwa na programu badala ya kwa mkono.

## Kinachofanya kazi

Kila alama inayohifadhiwa na MarkupCraft hubeba jina lake (kitambulisho chake) ndani ya PDF, na jina hilo halibadiliki kamwe. Uunganishaji unatafuta alama kwa jina hilo, si kwa nafasi yake kwenye faili, kwa sababu kila programu huhesabu upya nafasi zake inapohifadhi. Madokezo na madokezo ya siri yaliyofungwa yanalinganishwa kwa njia ile ile.

Karatasi hazigusiwi kamwe: nakala zote mbili lazima ziwe na idadi sawa ya kurasa. Zikitofautiana, uunganishaji unaweka nakala yako kama ilivyo na kulisema hilo, kwa sababu kuongeza au kuondoa kurasa ni kazi ya mtu.

## Weka tayari

Git inahitaji mistari miwili mara moja kwa kila hazina:

```
# .gitattributes
*.pdf merge=cadcraft

# mara moja, kwenye kila kompyuta
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bila git, endesha `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil na Mercurial zinachukua faili tatu hizo hizo kwenye mpangilio wao wa zana ya kuunganisha. Faili ya kazi inayosafiri pamoja na mchoro (`<name>.markups.json`, tazama [Alama zinazofanya kazi](topic:markups-that-act)) inaunganishwa kwa njia ile ile, kama maandishi matupu.

## Kanuni

- Alama iliyobadilishwa upande mmoja tu inachukuliwa. Mabadiliko yale yale pande zote mbili yanachukuliwa mara moja.
- Alama ile ile iliyobadilishwa kwa njia mbili ni **mgongano**: upande wako unabaki, na ripoti inaorodhesha pande zote mbili. Fungua matokeo na urekebishe alama hiyo kwa mkono.
- Alama iliyoongezwa upande wowote inahifadhiwa. Iliyoondolewa upande mmoja na isiyoguswa upande mwingine inaondolewa. Iliyoondolewa upande mmoja na kubadilishwa upande mwingine: imeondolewa, na imeripotiwa.
- Tabaka, safu, rekodi na madokezo vinafuata kanuni zile zile.
- Madokezo ya siri yaliyofungwa hayafunguliwi kamwe: vizuizi vya pande zote mbili vinabaki kama vilivyo.

Faili iliyounganishwa ni uandishi upya kamili wa nakala yako, kama Hifadhi ya MarkupCraft yenyewe. Hakuna kinachopakiwa; yote yanaendeshwa kwenye kompyuta yako.

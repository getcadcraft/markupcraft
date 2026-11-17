---
title: Isku dhufo wax-ka-beddelka laba qof oo hal PDF
summary: Ogolow git, Fossil ama Mercurial inay isku dhufaan laba nuqul oo calaamadeysan oo isla PDF ah, calaamad calaamad, oo faallooyinka ku jira.
keywords: isku dhufo, git, fossil, mercurial, nidaamka noocyada, isku dhac, saddex-geesood, cadcraft merge, gitattributes, calaamadaha, faallooyinka, qoys, laba nuqul
from: a450a9ef
---

Laba qof ayaa calaamadeeya isla PDF laba nuqul. Haddii ay taabteen calaamado kala duwan, nuqulada waxaa isku dhufan karaa barnaamij halkii gacanta lagu samayn lahaa.

## Waxa shaqeeya

Calaamad kasta oo MarkupCraft kaydiyo waxay qaadataa magaciisa (id) gudaha PDF-ka, magacaasna weligiis ma beddelo. Isku dhufashadu calaamadaha waxay ku raadisaa magacooda, ma aha booskooda faylka, sababtoo ah barnaamij kasta wuu dib u lambarkeeyaa booskiisa marka uu kaydinayo. Faallooyinka iyo qoraallada gaarka ah ee la xidhay waxay isku xiran yihiin si isku mid ah.

Xaashidu weligeed ma taabato: labada nuqul waa inay lahaadaan isla tiro bog. Haddii ay kala duwan yihiin, isku dhufashadu wuxuu hayaa nuqulkaaga sidiisa wuxuuna sheegaa, sababtoo ah bogag ku darista ama ka saarista waa shaqo qof.

## Dejin

Git wuxuu u baahan yahay laba sadar hal mar kasta oo repository-ga:

```
# .gitattributes
*.pdf merge=cadcraft

# hal mar, kombiyuutar kasta
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git la'aan, socod `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil iyo Mercurial waxay qaataan saddexdaas fayl isla dejinta qalabka isku dhufashada ee kooxahooda. Faylka hawlaha ee la socda sawirka (`<name>.markups.json`, eeg [Calaamadaha ee falaya](topic:markups-that-act)) wuxuu isku dhufmaa siday oo kale, sida qoraal caadi ah.

## Xeerarka

- Calaamad oo keliya dhinac ka isbeddelay ayaa la qaataa. Isbeddel isku mid ah labada dhinac wuxuu la qaataa mar keliya.
- Calaamad isla waqtigaas laba siyaabood isbeddeshay waa **isku dhac**: dhinacaaga ayaa sii jira, warbixinna labada calaamadood ayay liisataa. Fur natiijada oo calaamadaas gacanta ku hagaaji.
- Calaamad lagu daray dhinac kasta waa la ilaaliyaa. Calaamad laga saaray hal dhinac oo dhinaca kale aan la taabsan waa la saaray. Laga saaray dhinac hal oo dhinaca kale la beddelay: waa la saaray, waana la warbixiyaa.
- Lakabyada, tiirarka, diiwaannada iyo qoraallada waxay raacaan isla xeerarka.
- Qoraallada gaarka ah ee la xidhay lama furo: xidhmooyinka labada dhinac waxa loo ilaaliyaa sida ay yihiin.

Nuqulka la isku dhufay waa dib u qorid buuxa oo nuqulkaaga ah, sida Kaydi-ga MarkupCraft-ka. Wax lama soo rarro; dhammaantood wuxuu ku socdaa kombiyuutarkaaga.

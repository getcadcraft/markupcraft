---
title: Aasaasyada BCF
summary: Waxa ku jira dhoofinta BCF ee MarkupCraft, sida loo isticmaalo qalabyada isku-duubka BIM, iyo xaddidaadyadiisa.
keywords: bcf, bcfzip, qaabka iskaashiga bim, arrimaha, isku-duubka, isku-dhaca, mawduucyada, aragtida, sawirka degdegga ah, openbim, buildingsmart, dhoofi arrimaha
from: 0de26175
---

BCF (BIM Collaboration Format) waa qaab fayl furan oo loogu talagalay in arrimaha loo wareejiyo qalabyada BIM. Qalabyo badan oo isku-duubka moodelka iyo qoraalka ah ayaa dhoofin kara fayl `.bcfzip` sida liis arrimo. MarkupCraft wuxuu qoraa **BCF 2.1**.

## Samee mid

1. Fur tab-ka {{ui:Markups}}.
2. Liiska ku shaandhee waxa aad rabto inaad dirto, tusaale ahaan {{ui:Status}} "Open". Kaliya calaamadaha liiska ku jira ayaa la dhoofinayaa.
3. Dooro {{ui:BCF}}.
4. Sug inta MarkupCraft uu sawir degdeg ah u samaynayo calaamad kasta ("Samaynta sawirrada BCF (5 ka 20)…").

Natiijo: "<name> markups.bcfzip" ayaa la soo dejiyaa, bar-ka xaaladda wuxuu sheegayaa inta mawduuc ay ku jiraan iyo cabbirka faylka.

## Waxa ku jira

Calaamad kasta waxay noqonaysaa hal **mawduuc**.

| Goobta mawduuca | Waxaa lagu buuxiyaa |
|---|---|
| Title | Lambarka ciladda, mawduuca iyo xaashiga, tusaale ahaan "#4 Cloud on A-101 — Floor plan" |
| Type | Nooca calaamadda (Cloud, Callout, Length…) |
| Status | Open, Accepted, Rejected ama Completed |
| Labels | Nooca calaamadda iyo xaashiga |
| Author and dates | Qoraha calaamadda, taariikhaha la abuuray iyo la beddelay |
| Assigned to, due date | Ka yimaadda ciladda calaamadda, marka ay leedahay |
| Description | Qoraalkeeda ama erayada shaxanka, qiimaha la cabbiray, faallada, iyo xaashiga iyo faylka |
| Comments | Mid kasta oo jawaab ah, oo leh qoraha iyo taariikhda |
| Snapshot | Sawir calaamadda ku jirta qaybteeda xaashiga |
| Viewpoint | Aragti hoos-u-eegis ah oo ah meesha calaamaddu ku taal xaashiga |

Dib u dhoofinta isla calaamadda waxay siinaysaa isla ID-ga mawduuca, si qalabka BCF soo gelinaya u aqoonsado inay tahay isla arrintii.

## Waxa soo galaya marka la soo geliyo

{{ui:Import BCF}} wuxuu akhriyaa faylasha BCF 2.0, 2.1 iyo 3.0 (waxaa lagu hubiyay 19 faylal tijaabo oo rasmi ah oo buildingSMART 3.0: mawduuc kasta waa la akhriyay, iyo faallooyinka saddex ka mid ah ee qoraal leh). Mawduuc ah mid aad leedahay (isla ID mawduuc) wuxuu ku daraa faallooyinka cusub jawaab ahaan, wuxuuna qaataa xaaladda cusub. Mawduuc kasta oo kale wuxuu noqonayaa qoraal ku yaal xaashiga uu silsiladdiisa ama magaca faylkiisa sheego, haddii kale xaashiga furan, oo cinwaankiisa, sharaxaadiisa, qofka loo xilsaaray iyo taariikhda dhammaadka ayaa qoraalka ah, faallooyinkiisuna jawaabo ayay noqonayaan.

| Mawduuca BCF | Ku jira MarkupCraft |
|---|---|
| Cinwaanka, sharaxaadda, qofka loo xilsaaray, taariikhda dhammaadka | Qoraalka qoraalka |
| Faallooyinka qoraal leh | Jawaabaha |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done waxay tirmaan sida Completed) | Xaaladda calaamadda |
| Qoraha iyo taariikhda abuurista | Qoraha iyo taariikhda qoraalka |
| Booska kamarada | Meel xaashi ah, kaliya mawduuc ay xaashi ku xidhayso silsilad ama magac fayl |
| Doorashada moodelka, qaybaha qarsan, saxanka jarista, sawirrada | Lama kaydiyo: xaashigu ma lahan moodel ay ku muujiso |

## Xaddidaadyada aad u baahan tahay inaad ogaato

- **Xaashi maaha moodel.** Aragtidu waxay tilmaamaysaa booska calaamadda ee warqadda, oo lagu cabbiray mitir warqad. Ma geynayso qalab BIM meel moodel gudaheeda ah. Isticmaal sawirka iyo magaca xaashiga si aad u hesho meesha.
- **Xaaladaha iyo noocyada waa kuwa MarkupCraft-ka gaarka u ah** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Faylku wuxuu ku caddeeyaa sida BCF oggol tahay, laakiin qalab leh liisaska u gaarka ah ayaa laga yaabaa inuu u beddelo ama iska indho-tiro.
- **Soo gelinta waxay soo celisaa faallooyin, ma aha aragtiyo moodel.** {{ui:Import BCF}} wuxuu calaamadaha aad dhoofisay ku daraa jawaabaha iyo xaaladaha, wuxuuna qoraal u sameeyaa arrimaha kale; ma muujin karo kamarada moodelka. Eeg [Markups list and export](topic:markups-list-and-export#import-bcf).
- Dib u soo celinta calaamadaha PDF ahaan inta badanba way fududaataa dib-u-eegista naqshadaha. BCF waxay u tahay in faallooyinka naqshadda lagu geeyo habka isku-duubka moodelka.

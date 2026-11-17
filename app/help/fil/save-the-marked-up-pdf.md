---
title: I-save ang naka-markup na PDF
summary: I-download ang kopyang may bawat markup na nakasulat bilang karaniwang PDF comment, tingnan kung ano ang nakikita ng ibang PDF reader, at ituloy ang trabaho sa ibang pagkakataon.
keywords: i-save, i-download, i-export pdf, naka-markup, annotations, comments, ibahagi, ipadala, issue, ituloy ang trabaho, buksan muli, round trip, print
from: 4c198ebe
---

## I-save

1. Piliin ang {{ui:Save}} sa toolbar, o pindutin ang {{key:Mod+S}}.
2. Kung may ilang file na bukas, piliin ang {{ui:This file}} (ang file ng sheet na kinaroroonan mo) o {{ui:Every changed file}}. Bawat kopya ay magda-download nang hiwalay.
3. Hintayin na matapos ang "Sine-save ang <file>…". Ang unang save sa isang session ay nagla-load din ng PDF writer.

Resulta: idini-download ng browser mo ang "<name> (marked up).pdf", at ipinapakita ito ng status bar: 'Na-save ang A-Plans (marked up).pdf (24 markups, 18.2 MB). Hindi nagbago ang orihinal na file.' Mawawala ang tuldok sa tabi ng {{ui:Save}}.

**Hindi kailanman binabago ang orihinal mong PDF.** Gumagawa ang MarkupCraft ng bagong file. Kung saan ito mapupunta ay nakadepende sa download settings ng browser mo (tingnan ang [Mga file na binubuksan at sine-save ng MarkupCraft](topic:files#where-downloads-go)).

## Ituloy ang trabaho sa ibang pagkakataon

Buksan ang kopyang "(marked up)" sa susunod, hindi ang orihinal. Bumabalik ang lahat na maaari pang i-edit: markups, statuses, replies, punch items, scale ng bawat sheet, at anumang pangalan ng sheet na tinype mo. Kapag na-save ulit, magda-download ng file na may parehong pangalang "(marked up)"; maaaring magdagdag ang browser ng numero gaya ng "(1)" kung nasa folder pa ang lumang download. Ikaw ang magpapalit o maglilinis ng mga lumang kopya.

Hindi awtomatikong sine-save ng MarkupCraft ang PDF. Habang nagtatrabaho ka, nagtatago ito ng recovery copy sa browser na ito, kaya hindi mawawala ang iyong markups kapag nag-crash o nagsara ng tab: sa susunod na buksan mo ang MarkupCraft, magtatanong ito ng "Ibalik ang trabaho mo?". Tingnan ang [I-recover ang iyong trabaho](common:recover). Mag-save pa rin bago isara; kung susubukan mong umalis na may hindi naka-save na markups, unang magtatanong ang browser ng "Umalis sa site?" (hindi ito ginagawa ng iPad Safari).

## Ano ang nakikita ng ibang PDF reader

Bawat markup ay isinusulat bilang karaniwang PDF comment (annotation) na may sariling drawing, kaya nakikita, nai-print, at nakalista ito ng anumang PDF viewer sa comments panel nito:

- **Pareho ang itsura** sa MarkupCraft: clouds na may scallops, arrowheads, stamps, count dots, punch number badges, measurement labels.
- **Standard ang mga detalye:** author, petsa, subject, teksto ng comment, at mga kulay.
- **Ang clouds** ay rectangle o polygon comments na may cloudy na border; **text boxes** at **callouts** ay text box comments; **notes** ay sticky notes; **pen** at **highlighter** strokes ay ink; **stamps** ay stamp comments.
- **Lengths at areas** ay measurement comments, at bawat calibrated na sheet ay may dalang scale nito, kaya maipapakita ng viewers na nakauunawa ng measurements ang mga value.
- **Replies** ay replies sa comment, at **statuses** ay review states (lumalabas na walang state ang Open).
- **Sheet numbers** na tinype mo ay nagiging page labels na ipinapakita ng ibang viewers.

Ilang bagay lang ang binabasa pabalik ng MarkupCraft: ang assignee at due date ng punch item, item status, at ilang detalye ng style. Pinapanatili ito ng ibang programa maliban kung i-rewrite nila ang comment.

Sa ibang programa, maaaring ilipat o i-edit ang mga comment tulad ng iba. Kung may gumawa niyan at ibinalik ang file, ginagamit ng MarkupCraft ang bagong posisyon ng comment kapag binuksan nito ang file.

Buong detalye: [Ano ang nakasulat sa PDF](topic:what-the-pdf-keeps).

## Mga karakter na lumalabas na "?" kapag na-print

Ang teksto ng markup ay isinusulat gamit ang karaniwang Helvetica font na mayroon ang bawat PDF viewer. Sakop nito ang Ingles at Western European na mga letra (é, ñ, ü, ø, at iba pa), pero hindi ang ibang script, mga simbolong nasa labas ng set na iyon, o emoji. Maayos ang mga karakter na iyon sa MarkupCraft pero lumalabas na "?" sa naka-save na kopya, at binibilang ito ng save message: "3 karakter sa labas ng Western European set ang lalabas na "?" sa kopya." Ispelingin nang buo ang ganoong salita, o gumamit ng simpleng kapalit (halimbawa "dia." para sa diameter sign).

## Mga file na hindi ma-save

- **Protected na PDF:** "Protektado ang PDF na ito (encrypted), kaya hindi maisusulat ang naka-markup na kopya. Humingi ng kopyang walang protection." Maaari mo pa rin itong i-review sa screen, i-export ang CSV at BCF.
- Kung mabigo ang save dahil sa ibang dahilan, ipapakita ng kahon na "Hindi ma-save ang <file>" ang dahilan. Nasa tab pa rin ang markups mo; walang mawawala hangga't hindi mo ito isinasara.

## Flattening at pag-print

Walang flatten (pagsasama ng markups sa pahina) at wala pang print command. Para mag-print, buksan ang naka-save na kopya sa anumang PDF viewer at mag-print habang nakikita ang comments.

---
title: Lidhjet e fletëve
summary: Bëj një shënim të kërcejë te një fletë tjetër, dhe lidh çdo thirrje fletësh si 3/A-501 me fletën dhe pamjen e saj në një kalim me Lidhjet në grup.
keywords: hiperlidhje, lidhje, lidhje, kërcim, thirrje fletësh, thirrje detaji, thirrje prerjeje, 3/A-501, shko te fleta, prapa, lidhje automatike, lidhje në grup, lidhje grupi, blloku i titullit, numri i fletës, emri i fletës, pamje, detaj, riemërim, riumërim, shtesë, lidhje pdf
from: 86a17c37
---

Një lidhje fletësh të çon nga një shënim te një fletë tjetër e grupit: nga një flluskë detaji te detaji, nga një shënim te fleta që i referohet.

## Lidh një shënim me një fletë

1. Zgjidh shënimin.
2. Te {{ui:Vetitë}}, zgjidh fletën nën {{ui:Lidhje me fletën}}.

Një shigjetë e vogël shfaqet në këndin e sipërm djathtas të shënimit. Për ta ndjekur, mbaj {{key:Mod}} dhe kliko shënimin, ose zgjidhe dhe zgjidh {{ui:Shko te …}} te {{ui:Vetitë}}. {{key:Alt+Left}} kthehet te fleta nga erdhe.

Një lidhje e emëron fletën sipas numrit të saj, kështu që funksionon edhe pasi rihap grupin ose zëvendëson fletët me një botim të ri: hapet fleta më e re me atë numër. Nëse ajo fletë nuk është e hapur, shiriti i statusit e thotë këtë.

## Lidh çdo thirrje fletësh njëherësh

Zgjidh {{ui:Faqet}} › {{ui:Lidhjet në grup…}}, ose {{ui:Lidh thirrjet e fletëve…}} nën {{ui:Kërko tekst}} në krye të panelit {{ui:Fletët}}.

1. **Kontrollo numrat e fletëve.** MarkupCraft liston çdo fletë të hapur me numrin dhe emrin që lexoi nga blloku i titullit të fletës (ose etiketa e faqes), dhe prej nga erdhi secila. Korrigjo ato të gabuara, dhe shkruaj një numër aty ku nuk gjeti asnjë (një bllok titulli, numri i të cilit është vizatuar si vija, nuk ka tekst për të lexuar). Pastaj zgjidh {{ui:Gjej thirrjet}}. Korrigjimet e tua janë një hap zhbërjeje, dhe bëhen etiketat e faqeve në PDF-në e ruajtur.
2. **Shqyrto listën.** MarkupCraft lexon tekstin e çdo fletë për thirrje si "3/A-501", "5 / A501", "DETAIL 2 ON A-501", një flluskë me "3" mbi "A-501", ose një "A-501" të thjeshtë në një shënim, dhe lexon titujt e pamjeve të çdo fletë (një numër detaji me numrin e fletës nën të, ose një numër i madh me një titull pranë). Lista ka tre pjesë:
   - {{ui:Do të lidhet}}: çdo thirrje, fleta ku shkon dhe pamja në atë fletë. Hiq shënimin e atyre që nuk do. Nëse pamja nuk u gjet (një thirrje për pamjen 7 në një fletë me pamjet 1 deri 6), zgjidh pamjen nga lista pranë saj, ose lëre {{ui:E gjithë fleta}}.
   - {{ui:Nuk është lidhur}}: numrat e fletëve që asnjë fletë e hapur nuk i ka, me sa thirrje emërtojnë secilin. Zgjidh fletën që do të thotë secili (për shembull një fletë që u riumërua), dhe çdo thirrje për atë numër lidhet me të. Ose lëre të palidhur.
   - Sa thirrje janë lidhur tashmë dhe akoma shkojnë në vendin e duhur. Ato lihen ashtu.
3. Zgjidh {{ui:Krijo lidhjet}}.

Çdo thirrje merr një kuti të hollë blu që është lidhje fletësh. {{key:Mod}}+klikim mbi të hap fletën e zmadhuar te pamja. Një {{key:Mod+Z}} i heq të gjitha.

Kodet që duken si numra fletësh, si R-19 ose W12X26, lihen jashtë: një thirrje duhet të ketë formën e numrave të fletëve të vetë grupit. Numri i vetë fletës, në bllokun e titullit dhe titujt e pamjeve, nuk është kurrë thirrje. Fletët e skanuara nuk kanë tekst për të lexuar: përdor {{ui:Lexo tekstin (OCR)…}} së pari, ose lidh thirrjet e tyre një nga një.

## Ribëje kur ndryshon grupi

Lidhjet në grup mund të ribëhen aq herë sa do:

- **Një fletë u shtua**, si një shtesë me A-601: hap skedarin e saj dhe ribëj Lidhjet në grup. Thirrjet për A-601 që nuk u lidhën më parë, tani lidhen.
- **Një fletë u riumërua**: korrigjo numrin e saj në hapin 1. Lidhjet e bëra nga Lidhjet në grup që nuk e gjejnë më fletën e tyre listohen te {{ui:Nuk është lidhur}}; zgjidh fletën një herë dhe të gjitha ndjekin atë. Lidhjet që kaluan te një pamje tjetër përditësohen.
- Lidhjet që bëre me dorë te {{ui:Vetitë}} nuk ndryshohen kurrë.

## Në PDF-në e ruajtur

Një lidhje me një fletë në të njëjtin PDF shkruhet gjithashtu si lidhje PDF, kështu që shikuesit e tjerë kërcejnë atje me një klikim. Një lidhje me një pamje e hap atë pamje në shikuesin tjetër (kërcimi PDF "fit rectangle"); një pa pamje hap tërë fletën. Lidhjet me një fletë në një skedar tjetër të grupit funksionojnë vetëm në MarkupCraft.

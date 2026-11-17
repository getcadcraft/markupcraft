---
title: Krahaso dy revizione
summary: Mbivendos një çështje të vjetër dhe një të re të një fletë në dy ngjyra, rreshtoji sipas dy pikave, dhe rrethoji atë që ndryshoi.
keywords: krahaso, mbivendosje, mbivendosje faqesh, revizion, diff, dallime, ndryshime, vjetër e re, rreshto, backcheck, çështje, buletin
from: 62f5d1c5
---

Krahaso vendos dy fleta mbi njëra-tjetrën. Vijat vetëm në fletën e vjetër shfaqen me të kuqe, vijat vetëm në fletën e re me blu, dhe vijat në të dyja me gri të zbehtë. Ngjyrat emërtohen në legjendën nën fletë: "Vetëm në fletën e vjetër", "Vetëm në fletën e re", "Në të dyja".

## Krahaso dy fleta

1. Hap të dyja çështjet. Mund të jenë faqe të të njëjtit PDF ose PDF të ndryshme; hapi bashkë si një grup (shih [Puno me disa skedarë njëkohësisht](topic:several-files)).
2. Zgjidh skedën {{ui:Krahaso}} në të djathtë.
3. Zgjidh {{ui:Fleta e vjetër}} dhe {{ui:Fleta e re}}. Fleta e re nis si ajo ku je. Kur janë hapur disa skedarë, emri i skedarit të çdo fletë shfaqet pas emrit të saj.
4. Zgjidh {{ui:Krahaso}}.

Rezultati: MarkupCraft shfaq fletën e re me të vjetrën të përzier brenda, legjenda shfaqet, dhe skeda thotë "Po krahasohet <old> (e vjetra) me <new> (e reja). Shënimet në fletën e re mbeten të redaktueshme."

## Zbehu midis të vjetrës dhe të resë

Tërhiq rrëshqitësin {{ui:E vjetra dhe e reja}}. Krejt majtas shfaq vetëm fletën e vjetër, krejt djathtas vetëm të resë, në mes shfaq të dyja. Lëvizja përpara dhe mbrapa është shpesh mënyra më e shpejtë për të parë një ndryshim të vogël.

## Rreshto fletët

Nëse dy çështjet u printuan me margjinë, madhësi ose rrotullim të ndryshëm, çdo gjë duket e ndryshuar. Rregulloje:

**Sipas dy pikave (më e mira):**

1. Zgjidh {{ui:Rreshto sipas dy pikave}}. Pamja shfaq vetëm fletën e vjetër.
2. Kliko një veçori të qartë që gjendet në të dyja fletët, si një kryqëzim rrjeti kolonash. Skeda numëron hapat ("1 nga 4").
3. Kliko një veçori të dytë, larg të parës, si qoshja tjetër e kundërt e rrjetit.
4. Pamja kalon te fleta e re. Kliko sërish veçorinë e parë.
5. Kliko sërish veçorinë e dytë.

Rezultati: "Rreshtuar: fleta e vjetër e zmadhuar 100.00%, e rrotulluar 0.00°. Rregullo me hapa të vegjël për imtësi." Fleta e vjetër zhvendoset, zmadhohet dhe rrotullohet për t'u përshtatur. {{key:Esc}} anulon ndërsa zgjedh. Zmadho te çdo veçori para se të klikosh, për një përshtatje të saktë.

**Me rregullim:** përdor katër butonat e shigjetave nën "Rreshto" për të zhvendosur fletën e vjetër. Zgjidh hapin (0.25, 1, 5 ose 20 pt; 72 pt është një inç në letër). Skeda thotë sa është zhvendosur.

{{ui:Rivendos}} heq rreshtimin dhe rregullimet.

## Vetëm vijat e ndryshuara

Nën butonat e rreshtimit, zgjidh {{ui:Vijat e ndryshuara}} në vend të {{ui:Mbivendosje imazhi}}. MarkupCraft atëherë krahason vijat e vetë dy fletëve, jo imazhet e tyre: fleta e re shfaqet siç është, me vijat vetëm në fletën e vjetër me të kuqe dhe ato vetëm në të resë me blu. Një vijë që u shkurtua shfaq vetëm pjesën që mungon. Rreshto fletët së pari (shih më lart): krahasimi përdor rreshtimin, kështu që një fletë që u zhvendos vetëm nuk shfaq ndryshime. Rreshti i gjendjes thotë sa ndryshoi.

Kjo punon për PDF-të e printuara nga CAD, ku vizatimi është bërë me vija. Fletët e skanuara nuk kanë vija për të krahasuar: për to përdor mbivendosjen e imazhit. Teksti i shkruar me font (jo i vizatuar si vija) nuk krahasohet.

## Shëno ndryshimet

Ndërsa krahason, je në fletën e re dhe çdo vegël punon. Vizato re rreth ndryshimeve ndërsa i gjen; ato i përkasin fletës së resë dhe mbeten kur ndalon krahasimin.

{{ui:Rrethoji ndryshimet}} e bën për ty: grupon vijat e ndryshuara që janë afër njëra-tjetrës dhe vizaton një re revizioni rreth çdo grupi në fletën e re, me "Ndryshuar që nga <fleta e vjetër>" si koment. Një {{key:Mod+Z}} i heq të gjitha; fshi ato që nuk të nevojiten.

## Krahaso një grup të tërë

Kur një çështje e re vjen si PDF e veçantë, hap të dy PDF-të dhe hap {{ui:Krahaso dy grupe}} në skedën {{ui:Krahaso}}. Zgjidh skedarin e vjetër dhe të ri, pastaj zgjidh {{ui:Krahaso grupet}}. Fletët çiftohen sipas numrit të tyre (si në [mbulimin me fletë](topic:slip-sheet-a-revised-set)), krahasohen sipas vijave, dhe renditen me më të ndryshuarat e para. Zgjidh një fletë në listë për të krahasuar atë çift me {{ui:Vijat e ndryshuara}}.

{{ui:Rrethoji të gjitha ndryshimet}} rrethon çdo grup vijash të ndryshuara në çdo fletë të ndryshuar, në një hap që mund ta zhbësh. Krahasimi i grupit nuk rreshton fletët më parë, kështu që një fletë e zhvendosur në faqe shfaqet si e ndryshuar: krahaso atë çift vetëm dhe përdor {{ui:Rreshto sipas dy pikave}}.

## Ndalo krahasimin

Zgjidh {{ui:Ndalo krahasimin}}, ose shko te një fletë tjetër. Rreshtimi mbahet për të njëjtin çift fletësh deri sa të mbyllësh grupin.

## Mirë të dish

- Krahasimi punon me atë që është vizatuar, piksel për piksel. Nuk e di që një vijë u zhvendos; shfaq pozicionin e vjetër me një ngjyrë dhe të riun me tjetrën.
- Teksti që u rimbështoll, një datë e ndryshuar në bllokun e titullit ose një stil tjetër printimi shfaqen gjithashtu si ndryshime.
- Një fletë e skanuar e krahasuar me një të printuar është me zhurmë: skanimi turbullon dhe zhvendos vijat.
- Krahasimi i tekstit të shkruar me font dhe lista e asaj që ndryshoi nuk janë ndërtuar ende.

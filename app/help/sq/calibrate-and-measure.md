---
title: Kalibro një fletë dhe mat
summary: Cakto shkallën e secilës fletë nga një parazgjedhje ose një dimension i njohur, pastaj mat gjatësitë, sipërfaqet me perimetra dhe numërimet.
keywords: kalibro, shkalla, cakto shkallën, mat, gjatësi, distancë, përmasë, sipërfaqe, këmbë katrore, perimetër, numëro, llogaritje sasish, sasi, vizore, aritmetikë, llogaritje, mbledhje, thyesë
from: 49a25c6d
---

Gjatësitë dhe sipërfaqet kanë nevojë të dinë shkallën e fletës. MarkupCraft mban një shkallë **për fletë**: kalibro çdo fletë që mat. Numërimet nuk kanë nevojë për shkallë.

Shiriti i gjendjes tregon shkallën e fletës së tanishme, ose "Nuk është kalibruar".

## Zgjidh një shkallë nga lista

Përdore këtë kur PDF-ja është në madhësi të plotë (një fletë 24 × 36 që printohet 24 × 36) dhe vizatimi thotë shkallën e vet.

1. Kliko butonin e shkallës në shiritin e gjendjes ("Nuk është kalibruar"). Kutia "Shkalla e fletës" hapet.
2. Nën {{ui:Shkalla}}, zgjidh shkallën: arkitekturore (1/32" = 1'-0" deri 3" = 1'-0"), inxhinierike (1" = 10' deri 1" = 100') ose metrike (1:1 deri 1:1000).
3. Zgjidh {{ui:Cakto shkallën}}.

Rezultati: shiriti i gjendjes tregon shkallën, për shembull `1/4" = 1'-0"`. Shkallët arkitekturore tregojnë gjatësitë në këmbë dhe inç, ato inxhinierike në këmbë dhjetore, shkallët metrike deri 1:50 në milimetra dhe nga 1:100 në metra.

:::warning
Një parazgjedhje është e saktë vetëm nëse PDF-ja nuk është zvogëluar. Një set në gjysmë madhësie, ose një fletë që ishte "përshtatur në faqe" kur u bë, matet gabim me një parazgjedhje. Kalibro nga një dimension i njohur, dhe kontrollo një dimension në çdo rast.
:::

## Kalibro nga një dimension i njohur

Përdore këtë për grupe në gjysmë madhësie, fletë të skanuara, detaje në shkallë të çuditshme, ose për të kontrolluar një parazgjedhje.

1. Gjej një dimension të gjatë që beson, ose një shirit shkalle grafike.
2. Zgjidh {{ui:Kalibro}} në grupin {{ui:Mat}} (ose zgjidh {{ui:Zgjidh dy pika}} në kutinë "Shkalla e fletës").
3. Kliko njërin skaj të dimensionit, pastaj tjetrin. (Ose tërhiq nga njëri skaj te tjetri.) Zmadho më parë për saktësi; {{key:Shift}} e mban vijën në hapa prej 45°.
4. Kutia thotë sa larg janë pikat mbi letër dhe pyet "Sa larg janë në të vërtetë?". Shkruaj {{ui:Distanca reale}}, për shembull `24'-0"`, `12' 6 1/2"`, `7.2 m` ose `900 mm`.
5. Zgjidh si tregohen gjatësitë nën {{ui:Trego gjatësitë në}}: {{ui:Këmbë dhe inç}}, {{ui:Këmbë dhjetore}}, {{ui:Inç}}, {{ui:Metra}} ose {{ui:Milimetra}}.
6. Zgjidh {{ui:Cakto shkallën}}.

Rezultati: shiriti i gjendjes tregon "Kalibruar: 24'-0" mbi 1.00 in" (gjatësia reale dhe gjatësia në letër), dhe vegla me të cilën do të matje kthehet. Çdo mënyrë për të shkruar një gjatësi është te [Njësitë dhe gjatësitë](topic:units-and-scales).

Distanca reale mund të jetë gjithashtu një llogaritje e vogël: `12'6"+3/4"`, `(24'-0")/3` ose `2*450mm`. Përdor `+ - * /` dhe kllapa; një numër pa njësi llogaritet në njësinë nën {{ui:Trego gjatësitë në}} (këmbë për {{ui:Këmbë dhe inç}}). {{ui:Cakto shkallën}} përdor rezultatin.

Nëse MarkupCraft nuk mund të lexojë atë që shkrove, kutia e thotë: "Ajo nuk është një gjatësi që MarkupCraft e kupton. Provo 24'-0", 12' 6 1/2", 7.2 m ose 900 mm." Një llogaritje që nuk mund ta zgjidhë thotë pse dhe ku, për shembull "Një kllapë nuk është mbyllur (karakteri 5)."

## Mat një gjatësi

1. Zgjidh {{ui:Gjatësi}} ({{key:M}}).
2. Kliko fillimin, pastaj fundin. Ose tërhiq nga fillimi te fundi. {{key:Shift}} e mban në hapa prej 45°.

Rezultati: një vijë përmase me kllapa dhe gjatësia e shkruar mbi të. Shiriti i gjendjes e përsërit ("Gjatësia: 12'-6 1/2" (1/4" = 1'-0")."), dhe {{ui:Vetitë}} e tregon nën {{ui:Gjatësi}}. Gjatësitë në këmbë dhe inç rrumbullakosen në 1/16" më të afërt.

Nëse fleta nuk ka ende shkallë, zgjedhja e {{ui:Gjatësi}} kalon në {{ui:Kalibro}}, dhe shiriti i gjendjes e shpjegon: "Kalibro këtë fletë së pari: zgjidh dy pika me një distancë të njohur, ose zgjidh shkallën e saj. Pastaj mat." Pasi cakton shkallën, {{ui:Gjatësi}} kthehet.

## Skicë sipas shkallës

Në një fletë të kalibruar mund të shkruash gjatësi reale ndërsa vizaton një {{ui:Vijë}}, {{ui:Shigjetë}}, {{ui:Gjatësi}}, {{ui:Polivijë}}, {{ui:Poligon}}, {{ui:Re e lirë}}, {{ui:Sipërfaqe}} ose një hapësirë:

1. Kliko pikën e parë.
2. Tregoje drejtimin ku shkon segmenti i radhës dhe shkruaj gjatësinë e tij, si `16` (në njësinë e fletës), `12'6"` ose `3.5 m`. Një kuti hapet pranë treguesit ndërsa shkruan.
3. Shtyp {{key:Enter}}. Pika vendoset aq larg, në drejtimin e treguesit.

Për ta caktuar drejtimin saktë, shto `<` dhe një kënd në gradë: `8 < 90` shkon 8 këmbë drejt lart, `4<0` djathtas, `10 < 225` poshtë dhe majtas, siç shihet fleta (duke përfshirë faqet e rrotulluara). Vazhdo të shkruash gjatësi për qoshet e tjera, dhe mbyll formën si zakonisht. {{key:Esc}} mbyll kutinë pa vendosur pikë.

## Mat një kënd

1. Zgjidh {{ui:Kënd}} ({{key:X}}).
2. Kliko fundin e njërit krah, pastaj kulmin, pastaj fundin e krahut tjetër.

Rezultati: dy krahët, një hark i vogël në kulm dhe këndi në gradë, me një pjesë të dhjetë (0° deri 180°). Një kënd nuk ka nevojë për shkallë. {{ui:Vetitë}} e tregon nën {{ui:Kënd}}, dhe lista, CSV dhe BCF e mbajnë.

Një {{ui:Hark}} ({{key:O}}) në një fletë të kalibruar tregon gjithashtu gjatësinë e tij përgjatë kurbës në {{ui:Vetitë}}.

## Mat një sipërfaqe dhe perimetrin e saj

1. Zgjidh {{ui:Sipërfaqe}} ({{key:Q}}).
2. Kliko çdo qoshe të dhomës ose zonës.
3. Mbyll me klikim të dyfishtë, {{key:Enter}} ose klikim me butonin e djathtë (me prekje, prek dy herë). {{key:Backspace}} heq qoshën e fundit.

Rezultati: një kontur i hijëzuar me sipërfaqen dhe "P" me perimetrin në mes, për shembull "128.00 sq ft" dhe "P 48'-0"". Shkallët në këmbë japin këmbë katrore, inçat inç katrorë, metrat metra katrorë, milimetrat milimetra katrorë. Një sipërfaqe ka nevojë për të paktën tre qoshe.

### Hapje

Për të lënë jashtë një kolonë, një shaft ose një oborr, zgjidh sipërfaqen dhe zgjidh {{ui:Shto një hapje}} në {{ui:Vetitë}}. Kliko qoshet e hapjes brenda sipërfaqes dhe mbyll si për një sipërfaqe. Hapja mbetet e hapur (e pahijëzuar), sipërfaqja e saj zbritet, dhe skajet e saj i shtohen perimetrit: një dhomë 16' × 8' me një hapje 4' × 4' shfaqet "112.00 sq ft" dhe "P 64'-0"". Shto sa të duash; ato nuk mund të mbivendosen as të kryqëzojnë kontursin e sipërfaqes. {{ui:Hiq prerjet}} i heq të gjitha, dhe {{key:Mod+Z}} zhbën një.

## Numëro gjëra

1. Zgjidh {{ui:Numëro}} ({{key:U}}).
2. Në {{ui:Vetitë}}, shkruaj një {{ui:Emri i grupit}}, për shembull "Kullues dyshemeje". (Mbetet për herën tjetër.)
3. Kliko çdo artikull në fletë.

Rezultati: çdo klik shton një pikë të numëruar, pika e parë mban një etiketë si "Kullues dyshemeje: 7", dhe shiriti i gjendjes mban totalin që rritet.

- **Nis një grup tjetër:** shtyp {{key:Esc}} një herë (pastron përzgjedhjen), ndrysho {{ui:Emri i grupit}}, dhe kliko përsëri.
- **Shto në një grup ekzistues:** zgjidh grupin më parë, pastaj zgjidh {{ui:Numëro}} dhe kliko.
- **Hiq një shenjë:** me grupin të zgjedhur, mbaj {{key:Shift}} dhe kliko pikën. Heqja e pikës së fundit heq grupin. Në një ekran prekës pa tastierë, përdor {{key:Mod+Z}} ose {{ui:Zhbëj}} në vend të kësaj.
- **Riemëro një grup:** zgjidhe dhe redakto {{ui:Emri i grupit}} në {{ui:Vetitë}}.

Një grup numërimi i përket një fletë. Numërimet në disa fleta shfaqen si grupe të veçanta në listën e shënimeve.

## Ndrysho ose hiq një shkallë

Kliko butonin e shkallës në shiritin e gjendjes. Kutia tregon shkallën e tanishme; zgjidh një tjetër, zgjidh {{ui:Zgjidh dy pika}}, ose zgjidh {{ui:Hiq shkallën}}.

Gjatësitë dhe sipërfaqet e vizatuara tashmë **maten përsëri** me shkallën e re menjëherë. Zhbëj e kthen shkallën e vjetër.

## Ku shkojnë numrat

- {{ui:Vetitë}} tregon vlerat e matjes së zgjedhur.
- Skeda {{ui:Shënimet}} liston çdo vlerë, dhe CSV-ja e saj ka një kolonë "Matja". Shih [Lista e shënimeve](topic:markups-list-and-export).
- PDF-ja e ruajtur mban shkallën në faqe dhe shkruan gjatësitë dhe sipërfaqet si komente matjesh, që programet e tjera PDF që i kuptojnë matjet t'i shfaqin. Shih [Çfarë ruhet në PDF](topic:what-the-pdf-keeps).

Për një llogaritje të plotë sasish me artikuj, montime dhe çmime, përdor TakeoffCraft: MarkupCraft mat për rishikim, jo për vlerësim.

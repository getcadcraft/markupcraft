---
title: Kalimi nga programe të tjera shënimesh
summary: Si lidhen zakonet e një programi desktop për shënime PDF me MarkupCraft, dhe dallimet që të befasojnë.
keywords: kalim, kalimi, migrim, i njohur, pdf desktop, kutia e veglave, lista e shënimeve, mbivendosje, sesione, profil, shkurtore, dallime
from: c8f323e1
---

Nëse rishikon vizatime në Bluebeam Revu (ose komenton PDF-të në një program tjetër desktop PDF), pjesa më e madhe e MarkupCraft do të të duket e njohur: retë, thirrjet, kutia e veglave, lista e shënimeve, gjendjet me përgjigje, matjet e kalibruara, mbivendosjet e fletëve. Mënyra si trajtohen skedarët është ndryshimi i madh, prandaj lexo seksionin e radhës edhe nëse e kalon pjesën tjetër.

## Pesë dallimet që kanë rëndësi

1. **Ruaj krijon një skedar të ri.** MarkupCraft punon në shfletues dhe nuk mund të shkruajë mbi PDF-në në diskun tënd. {{ui:Ruaj}} shkarkon "<name> (marked up).pdf" dhe origjinali mbetet ashtu siç ishte. Herën tjetër, hap kopjen "(marked up)", dhe pastro vetë kopjet e vjetra.
2. **PDF-ja ruhet kur ruan.** Deri atëherë një kopje rikuperimi në këtë shfletues mban shënimet e tua përmes një çrregullimi ose një skede të mbyllur, dhe MarkupCraft ta ofron përsëri herën tjetër. Është një rrjet sigurie: ruaj PDF-në për të mbajtur rishikimin.
3. **Profili yt jeton në shfletues.** Emri yt si autor, cilësimet e veglave dhe kutia e veglave mbahen në këtë shfletues, në këtë kompjuter. Një shfletues ose kompjuter tjetër nis nga e para, dhe pastrimi i të dhënave të faqes i fshin ato. Eksporto kutinë e veglave si kopje rezervë. Shih [Çfarë mbahet në këtë shfletues](topic:browser-storage).
4. **Ende pa sesione të përbashkëta.** Nuk ka sesion rishikimi live dhe të përbashkët, dhe as projekt në re. Rishikimi udhëton me PDF-në: ruaj, dërgo kopjen, personi tjetër përgjigjet dhe ruan.
5. **Shkalla është për fletë, dhe vetëm për fletë.** Nuk ka pamje brenda një fletë dhe nuk ka "apliko këtë shkallë në të gjitha faqet". Kalibro çdo fletë që mat.

## Zakon pas zakoni

| Je mësuar me | Në MarkupCraft |
|---|---|
| Panel miniaturash, etiketa faqesh | {{ui:Fletët}} në të majtë. Emrat vijnë nga etiketat e faqeve ose lexohen nga blloku i titullit; ndrysho me {{ui:Riemëro fletën}}. |
| Hapja e disa PDF-ve si grup | Hapi të gjitha njëherësh; bëhen një listë. Nuk ruhet asnjë skedar grupi: hap të njëjtat PDF-të herën tjetër. |
| Kutia e veglave me grupe veglash | Skeda {{ui:Veglat}}: një kuti për shfletues, vegla të ruajtura me stil dhe temë. Ndaj me {{ui:Eksporto}} dhe {{ui:Importo}} si skedar JSON. Skedarët e grupeve të veglave nga programe të tjera nuk mund të importohen. |
| Panel vetish | Skeda {{ui:Vetitë}}: gjendja, tema, komenti, stili, përgjigjet dhe artikulli i defektit në një vend. |
| Lista e shënimeve me kolona | Skeda {{ui:Shënimet}} me filtra për fletën, autorin, gjendjen dhe llojin. Eksporto CSV ose BCF. Pa kolona të personalizuara, dhe ende pa përmbledhje PDF ose fletëllogaritëse. |
| Gjendja dhe gjendja e rishikimit | {{ui:Gjendja}}: Hapur, Pranuar, Refuzuar, Përfunduar. Pa grupe gjendjesh të personalizuara. Ruhen si gjendje standarde rishikimi. |
| Përgjigje mbi një shënim | Rrjedha "Përgjigjet" në {{ui:Vetitë}}, me ndryshimet e gjendjes të regjistruara në të. Një përgjigje e dërguar nuk mund të redaktohet. |
| Kalibro, pastaj gjatësi, sipërfaqe, numërim | {{ui:Kalibro}}, {{ui:Gjatësi}} ({{key:M}}), {{ui:Sipërfaqe}} ({{key:Q}}, jep sipërfaqen dhe perimetrin), {{ui:Numëro}} ({{key:U}}). Ende pa kënd, rreze, vëllim, gjatësi polivije ose hapje. |
| Mbivendos faqe | Skeda {{ui:Krahaso}}: e kuqe për të vjetrën, blu për të resë, rreshto sipas dy pikave. Pa "krahaso dokumentet" automatik me re. |
| Vula | {{ui:Vulë}} me gjashtë vula të integruara dhe tekst të personalizuar, nënshkruar me emrin tënd dhe datën. Ende pa vula me imazh ose nënshkrim. |
| Ndjekja e defekteve ose çështjeve | Skeda {{ui:Lista e defekteve}}: artikuj të numëruar me përgjegjësin, afatin dhe gjendjen; eksport CSV. |
| Sesion bashkëpunimi live | Ende nuk është i disponueshëm. Kalo PDF-në e ruajtur. |
| Shtypja në faqe (flatten) | Ende nuk është ndërtuar. Shënimet mbeten komente që shikuesit e tjerë mund t'i shfaqin dhe printojnë. |
| Shtresa për shënimet | Ende nuk është ndërtuar. Përdor temat, autorët dhe filtrat e listës për të renditur komentet. |
| Lidhje ndërmjet fletëve | Ende nuk është ndërtuar. |
| Hapësira për lëvizje, rrota për zmadhim | Njëlloj: mbaj {{key:Space}} dhe tërhiq; rrota zmadhon te treguesi. Rrota nuk lëviz kurrë faqen. |

## Tastet që ndryshojnë

Shumë taste me një shkronjë janë ato që mund të presësh, por kontrollo këto para se gishtat ta bëjnë për ty:

- {{key:K}} është {{ui:Thirrje}}, dhe {{key:Q}} është {{ui:Sipërfaqe}}. Nëse je mësuar me Q për thirrjet, këtu do të nisë një sipërfaqe.
- {{key:C}} është kutia {{ui:Re}}; {{key:Shift+C}} është {{ui:Re e lirë}}.
- {{key:M}} është {{ui:Gjatësi}}, {{key:U}} është {{ui:Numëro}}, {{key:Y}} është {{ui:Polivijë}}, {{key:G}} është {{ui:Poligon}}, {{key:I}} është {{ui:Theksim}}.
- {{key:Mod+D}} dublikon përzgjedhjen (në vend të faqeshënuesit të shfletuesit).
- {{key:Mod+Plus}} dhe {{key:Mod+Minus}} zmadhojnë fletën, jo faqen e shfletuesit.
- Çdo tast mund të ndryshohet: shih më poshtë.

:::tip
Nëse gishtat e njohin Bluebeam Revu, zgjidh stilin e menusë {{ui:Rishikim PDF}} në {{ui:Cilësimet}} › {{ui:MarkupCraft}} › {{ui:Menutë, tastet dhe miu}}: një shirit menush (Skedar, Redakto, Pamje, Dokument, Shënim, Mat, Dritare) mbi një rresht veglash rishikimi, {{key:Q}} për një thirrje, {{key:H}} për theksuesin, {{key:N}} për një poligon, dhe matjet në {{key:Alt+Shift}} me një shkronjë. Çdo tast mund të ndryshohet edhe atje. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).
:::

Lista e plotë është te [Tastiera dhe miu](topic:keyboard).

## Gjëra që funksionojnë ndryshe nga sa pritet

- **Veglat mbeten të ndezura.** Pas një reje, je ende duke vizatuar re. {{key:Esc}} një herë pastron përzgjedhjen, dy herë kthehet te {{ui:Përzgjidh}}.
- **Tekstet dhe thirrjet kanë nevojë për tekst.** Mbyll pa shkruar asgjë dhe nuk shtohet shënim. Shënimet mbahen bosh.
- **Matjet kanë nevojë për shkallë së pari.** {{ui:Gjatësi}} dhe {{ui:Sipërfaqe}} kalojnë në {{ui:Kalibro}} në një fletë të pakalibruar, dhe kthehen pas.
- **Komente nga programe të tjera.** Drejtkëndëshat, elipset, vijat, polivijat, poligonet, bojërat, kutitë e tekstit dhe shënimet ngjitëse të bëra gjetiu bëhen shënime MarkupCraft të redaktueshme, dhe rishkruhen në mënyrën e MarkupCraft kur ruan (pamja mund të ndryshojë pak). Theksimet e tekstit, vulat e programeve të tjera dhe lloje të tjera speciale mbeten vetëm për lexim: mund t'u përgjigjesh, por jo t'i ndryshosh.
- **Karakteret jashtë shkronjave të Evropës Perëndimore** shtypen si "?" në PDF-në e ruajtur. Shih [Ruaj PDF-në e shënuar](topic:save-the-marked-up-pdf).
- **Datat e vulave** përdorin UTC, kështu që një vulë e bërë vonë në mbrëmje në Amerikë mund të tregojë datën e nesërme.
- **Matjet kalojnë** si komente matjesh standarde, dhe çdo fletë e kalibruar mban shkallën e vet, kështu që një program që lexon matjet e PDF zakonisht mund t'i shfaqë. Sjellja e saktë varet nga ai program.

## Përdorimi i të dyjave

Mund të shkosh dhe të kthehesh. Komentet e bëra gjetiu hapen në MarkupCraft, dhe PDF-ja "(marked up)" hapet në programe të tjera PDF me çdo shënim, përgjigje dhe gjendje të dukshme. Ajo që vetëm MarkupCraft lexon përsëri (përgjegjësi dhe afati i defektit, gjendja e artikullit) mbahet në skedar për MarkupCraft.

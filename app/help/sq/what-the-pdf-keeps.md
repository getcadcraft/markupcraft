---
title: Çfarë ruhet në PDF
summary: Saktësisht çfarë përmban kopja e shënuar, çfarë shohin programet e tjera PDF dhe çfarë lexohet përsëri kur hap një skedar.
keywords: shënime pdf, komente, të dhëna të ruajtura, cikël i plotë, etiketa faqeve, matje, gjendja e rishikimit, përgjigje, ndërveprueshmëri, përputhshmëri, rihapje, të dhëna private
from: 6439ad28
---

Kopja e shënuar është PDF-ja origjinale me komente (shënime PDF) të shtuara. Vetë faqet, vizatimet, teksti, faqerojtësit dhe lidhjet kopjohen ashtu siç ishin.

## Çdo shënim

| MarkupCraft | Ruhet si | Shfaqësit e tjerë PDF tregojnë |
|---|---|---|
| Drejtkëndësh, re kutie | Shënim Square (re: kufi i vrullshëm) | Një koment drejtkëndësh ose re |
| Elips | Shënim Circle | Një koment elipsi |
| Poligon, re e lirë | Shënim Polygon (re: kufi i vrullshëm) | Një koment poligoni ose re |
| Polivijë | Shënim PolyLine | Një koment polivijë |
| Vijë, shigjetë | Shënim Line (shigjetë: kokë shigjete e mbyllur) | Një koment vije ose shigjete |
| Gjatësi | Shënim Line i shënuar si përmasë, me një matje | Një matje gjatësie, aty ku shfaqësi e mbështet |
| Sipërfaqe | Shënim Polygon i shënuar si sipërfaqe, me një matje | Një matje sipërfaqeje, aty ku mbështetet; përndryshe një poligon |
| Grup numërimi | Një shënim Ink, një unazë për çdo element; teksti i tij është "group: n" | Një koment Ink |
| Stilolaps, theksues | Shënim Ink (theksuesi i shënuar si i tillë) | Një koment Ink |
| Tekst | Shënim FreeText | Një koment kutie teksti |
| Thirrje | Shënim FreeText me udhëheqës thirrjeje | Një koment thirrjeje |
| Shënim | Shënim Text | Një shënim ngjitës që hapet me tekstin e vet |
| Vulë | Shënim Stamp | Një koment vule |

Çdo shënim ruhet me:

- **pamjen e vet**, të vizatuar saktësisht ashtu si e vizaton MarkupCraft në ekran, që duket njëlloj në çdo shfaqës dhe printohet njëlloj, përfshirë etiketën me numrin punch;
- **autorin**, **datat e krijimit dhe të ndryshimit**, **temën**, **tekstin e komentit** (për kutitë e tekstit dhe thirrjet, tekstin dhe komentin), **ngjyrën** dhe **opacitetin**;
- **detajet e tij MarkupCraft** në një hyrje private që programet e tjera e injorojnë: statusin, elementin punch, stilin dhe llojin, që të hapet përsëri saktësisht.

## Fijet dhe statuset

- Çdo përgjigje ruhet si koment përgjigjeje i lidhur me shënimin e vet, me autorin, datën dhe tekstin e tij. Përgjigjet nuk kanë ikonë të tyre në fletë.
- Çdo ndryshim statusi ruhet si përgjigje që mbart një gjendje rishikimi. Mjetet e tjera të rishikimit e shfaqin si Accepted, Rejected ose Completed; Open ruhet pa gjendje.
- Një shënim me status tjetër nga Open, por pa ndryshim statusi të regjistruar, merr një përgjigje me gjendje rishikimi, që edhe programet e tjera ta shohin statusin.
- Përgjigjet te komentet vetëm për lexim nga skedari origjinal ruhen në të njëjtën mënyrë, të lidhura me atë koment.

## Çdo fletë

- **Shkalla:** një fletë e kalibruar merr një port matjeje që mbulon faqen (mënyra standarde për të ruajtur shkallën e faqes) dhe kopjen e vet të MarkupCraft të kalibrimit.
- **Numri i fletës:** një numër i shkruar me {{ui:Riemëro fletën}} bëhet etiketë faqeje. Kur çdo faqe e një skedari ka një të tillë, çdo faqe e atij skedari merr etiketë: numrin e shkruar, ose etiketën e vjetër, ose numrin e faqes.
- **Titulli i fletës:** një titull i shkruar ruhet vetëm për MarkupCraft; shfaqësit e tjerë nuk e tregojnë.

## Teksti dhe karakteret

Teksti shkruhet me Helvetica, që e ka çdo shfaqës PDF. Shkronjat jashtë grupit Evropian Perëndimor (Windows-1252) printohen si "?" në kopje; mesazhi i ruajtjes i numëron ato.

## Fletët e llogaritjes dhe arsyet

Fletët e llogaritjes dhe arsyet mbahen në një hyrje private të PDF-së me emrin `/MarkupCraftShell`. Programet e tjera PDF e injorojnë. Një MarkupCraft më i vjetër gjithashtu e injoron dhe e heq herën tjetër që ruan atë skedar.

## Çfarë ndodh me komentet që ishin tashmë

Kur hap një PDF që ka tashmë komente:

- Komentet e vetë MarkupCraft lexohen përsëri saktësisht. Nëse një program tjetër e zhvendosi ose e ndryshoi madhësinë e një komenti, pozicioni i ri mbizotëron.
- Drejtkëndëshat, elipset, vijat, polivijat, poligonet, bojërat, kutitë e tekstit dhe shënimet ngjitëse nga programe të tjera bëhen shënime të redaktueshme. **Kur ruan, MarkupCraft i heq origjinalet dhe i shkruan përsëri në mënyrën e vet**, me dritaret e tyre të shfaqjes dhe përgjigjet. Pamja e tyre mund të ndryshojë pak.
- Gjendjet e rishikimit nga programe të tjera vendosin statusin; më i riu mbizotëron.
- Çdo gjë tjetër (theksimet e tekstit, vulat e programeve të tjera dhe llojet e veçanta) **mbahet e paprekur** në kopje, vetëm për lexim.
- Lidhjet dhe fushat e formularëve mbahen të paprekura dhe nuk shfaqen në listë.

Ruajtja e të njëjtit skedar përsëri nuk dyfish asgjë: shënimet që MarkupCraft i lexoi zëvendësohen, nuk shtohen përsëri.

## Çfarë nuk ndryshohet

Skedari yt origjinal në disk nuk ndryshohet kurrë. Kopja nuk optimizohet për madhësi, prandaj mund të jetë pak më e madhe se origjinali. PDF-të e mbrojtura (të enkriptuara) nuk mund të ruhen.

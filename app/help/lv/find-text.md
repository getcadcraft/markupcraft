---
title: Meklēt tekstu zīmējumos
summary: Meklējiet vārdus katrā lapā, pārejiet uz katru atradumu un vienā solī apvelciet tos visus ar mākoni.
keywords: meklēt, meklēšana, teksts, vārds, vārdi, ctrl f, piezīme, atslēgvārda piezīme, izsaukums, apvilkt visus, izcelt atradumus, ocr, skenēts, skenējums, nolasīt tekstu, atlasīt tekstu, kopēt tekstu, tesseract
from: 3435c9eb
---

{{ui:Meklēt tekstu}}, kas atrodas paneļa {{ui:Lapas}} augšdaļā, meklē vārdus, kas zīmēti pašās lapās. {{ui:Meklēt lapas}} zem tā meklē tikai lapu nosaukumus.

## Meklēt

1. Nospiediet {{key:Mod+F}} vai atveriet {{ui:Meklēt tekstu}}.
2. Ierakstiet vārdus, piemēram, `hood` vai `verify in field`.
3. Izvēlieties {{ui:Visas lapas}} vai {{ui:Šī lapa}} un atzīmējiet {{ui:Ņemt vērā reģistru}} vai {{ui:Veseli vārdi}}, ja vajag.
4. Nospiediet {{key:Enter}} vai izvēlieties {{ui:Meklēt}}.

Rezultāts: katrs atradums ir uzskaitīts ar savu lapas numuru un apkārtējiem vārdiem un ir atzīmēts dzeltenā krāsā savā lapā. Izvēlieties atradumu, lai atvērtu tā lapu un tuvinātu uz to.

Frāze tiek atrasta arī tad, ja zīmējumā tā sadalīta pa diviem teksta gabaliem vai divām rindām.

## Apvilkt katru atradumu ar mākoni

Izvēlieties {{ui:Apvilkt visus ar mākoni}}. Pārskatīšanas mākonis apvelk katru sarakstā esošo atradumu visās lapās ar komentāru "Atrasts: <jūsu vārdi>". Viens {{key:Mod+Z}} noņem visus.

## Nolasīt skenētas lapas tekstu (OCR)

Skenēta lapa ir tikai attēls: kamēr tās vārdi nav nolasīti, nav nekā, ko atrast. Kad skaitītājs rāda, ka lapām nav teksta, zem tā izvēlieties {{ui:Nolasīt tekstu (OCR)…}} vai {{ui:Lapas}} › {{ui:Nolasīt tekstu (OCR)…}}.

1. Izvēlieties lappuses: šo lapu, katru faila lappusi vai katru katra atvērtā faila lappusi.
2. Izvēlieties teksta valodu. {{ui:Arī angļu}} nolasa arī angļu vārdus.
3. Izvēlieties {{ui:Nolasīt tekstu}}. Josla rāda lappusi, kas tiek nolasīta; {{ui:Pārtraukt}} beidz darbību un saglabā jau nolasītās lappuses.

Rezultāts: vārdus var atrast, atlasīt un kopēt kā jebkuru citu tekstu. Viss notiek jūsu datorā: nekas nekur netiek sūtīts. Tas darbojas bez savienojuma programmā Studio un pārlūkprogrammā, kad lietotne saglabāta darbam bezsaistē (angļu un jūsu saskarnes valoda) vai kad valoda jau reiz izmantota. Lappuses, kurām teksts jau ir, paliek tādas, kādas bija.

Saglabājot, vārdi tiek ierakstīti PDF kā neredzams teksts aiz attēla, atsevišķi no jūsu atzīmēm, lai arī citas PDF programmas tos varētu meklēt un kopēt. Kamēr nesaglabājat, fails tiek rādīts kā nesaglabāts.

## Atlasīt un kopēt tekstu

Izvēlieties {{ui:Vēl}} › {{ui:Atlasīt tekstu kopēšanai}}. Velciet no viena vārda līdz otram, lai atlasītu vārdus starp tiem, velciet no tukšas lapas vietas, lai atlasītu vārdus kastē, vai veiciet dubultklikšķi uz viena vārda. {{key:Mod+A}} atlasa katru vārdu lapā. {{key:Mod+C}} kopē tos, saglabājot rindas. Jebkurš cits rīks to beidz.

## Noderīgi zināt

- Zīmējumi, kuru burti zīmēti kā līnijas, arī nesatur tekstu; nolasīšana kā attēlu vislabāk strādā ar drukātu tekstu, piemēram, skenētu grāmatu vai specifikāciju.
- Lasītājs ir Tesseract, kas iebūvēts lietotnē ar tā valodu datiem angļu un lietotnes valodām. Pirmo reizi tas ielādējas (apmēram 6 MB, vairāk otrai valodai).
- Cik labi tas nolasa, atkarīgs no skenējuma: tīras lappuses ar 300 dpi nolasa gandrīz vārdu pa vārdam; vecie, vāji vai zemas izšķirtspējas skenējumi palaiž garām vairāk vārdu.
- Saraksts rāda pirmos 500 atradumus; {{ui:Apvilkt visus ar mākoni}} apvelk līdz 2000.
- Atradumi tiek notīrīti, kad aizverat kopu, un vienam failam, kad maināt tā lappuses.

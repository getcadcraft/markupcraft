---
title: Kërko tekst në vizatime
summary: Kërko fjalët në çdo fletë, shko te çdo ndeshje dhe rrethoi të gjitha në një hap.
keywords: kërko, kërkim, tekst, fjalë, ctrl f, kërko për, shënim, shënim kryesor, thirrje, rrethoi të gjitha, thekso ndeshjet, ocr, skanim, i skanuar, lexo tekstin, përzgjidh tekstin, kopjo tekstin, tesseract
from: 3435c9eb
---

{{ui:Kërko tekst}}, në krye të panelit {{ui:Fletët}}, kërkon fjalët e vizatuara vetë në fletë. {{ui:Kërko fletët}} më poshtë kërkon vetëm emrat e fletëve.

## Kërko

1. Shtyp {{key:Mod+F}}, ose hap {{ui:Kërko tekst}}.
2. Shkruaj fjalët, si `hood` ose `verify in field`.
3. Zgjidh {{ui:Të gjitha fletët}} ose {{ui:Kjo fletë}}, dhe shëno {{ui:Përputh shkronjat}} ose {{ui:Fjalë të plota}} nëse të duhen.
4. Shtyp {{key:Enter}} ose zgjidh {{ui:Kërko}}.

Rezultati: çdo ndeshje listohet me numrin e fletës dhe fjalët përreth, dhe shënohet me të verdhë në fletën e saj. Zgjidh një ndeshje për të hapur fletën e saj dhe për t'u zmadhuar te ajo.

Një frazë gjendet edhe kur vizatimi e ndan atë në dy copa teksti ose në dy rreshta.

## Rrethoi çdo ndeshje

Zgjidh {{ui:Rrethoi të gjitha}}. Një re revizioni vihet rreth çdo ndeshjeje në listë, në çdo fletë, me "U gjet: <fjalët tuaja>" si koment. Një {{key:Mod+Z}} i heq të gjitha.

## Lexo tekstin në një skanim (OCR)

Një fletë e skanuar është vetëm një imazh: deri sa fjalët e saj lexohen, nuk ka çfarë të gjendet. Kur numërimi thotë se fletët nuk kanë tekst, zgjidh {{ui:Lexo tekstin (OCR)…}} nën të, ose {{ui:Faqet}} › {{ui:Lexo tekstin (OCR)…}}.

1. Zgjidh faqet: kjo fletë, çdo faqe e skedarit, ose çdo faqe e çdo skedari të hapur.
2. Zgjidh gjuhën e tekstit. {{ui:Gjithashtu anglisht}} lexon edhe fjalë anglisht.
3. Zgjidh {{ui:Lexo tekstin}}. Një shirit tregon faqen që lexohet; {{ui:Ndal}} e ndal ekzekutimin dhe mban faqet e lexuara deri atëherë.

Rezultati: fjalët mund të gjenden, përzgjidhen dhe kopjohen si çdo tekst tjetër. Gjithçka ekzekutohet në kompjuterin tënd: asgjë nuk dërgohet askund. Funksionon pa lidhje në Studio, dhe në shfletues pasi aplikacioni të ruhet për punë jashtë linje (anglisht dhe gjuha e ndërfaqes sate) ose pasi një gjuhë të jetë përdorur një herë. Faqet që kanë tashmë tekst lihen ashtu si janë.

Kur ruan, fjalët hyjnë në PDF si tekst i padukshëm pas imazhit, veçmas nga shënimet e tua, që programet e tjera PDF t'i kërkojnë dhe kopjojnë edhe ato. Deri sa ruan, skedari shfaqet si i paruajtur.

## Përzgjidh dhe kopjo tekstin

Zgjidh {{ui:Më shumë}} › {{ui:Përzgjidh tekstin për kopjim}}. Tërhiq nga një fjalë te një tjetër për të përzgjedhur fjalët ndërmjet tyre, tërhiq nga hapësira boshe për të përzgjedhur fjalët në një kuti, ose kliko dy herë një fjalë. {{key:Mod+A}} përzgjedh çdo fjalë në fletë. {{key:Mod+C}} i kopjon, duke ruajtur rreshtat. Çdo vegël tjetër e mbyll.

## Mirë për t'u ditur

- Vizatimet ku shkronjat janë vizatuar si vija nuk kanë tekst; leximi si imazh funksionon më mirë në tekst të shtypur, si një libër ose specifikim i skanuar.
- Lexuesi është Tesseract, i ndërtuar në aplikacion me të dhënat e gjuhës për anglishten dhe gjuhët e aplikacionit. Ekzekutimi i parë e ngarkon (rreth 6 MB, më shumë për një gjuhë të dytë).
- Sa mirë lexon varet nga skanimi: faqet e pastra me 300 dpi lexohen pothuajse fjalë për fjalë; skanimet e vjetra, të zbehta ose me rezolucion të ulët humbasin më shumë fjalë.
- Listat shfaqin 500 ndeshjet e para; {{ui:Rrethoi të gjitha}} rrethon deri në 2,000.
- Ndeshjet pastrohen kur mbyll grupin, dhe për një skedar kur ndryshon faqet e tij.

---
title: Një turne i ekranit
summary: Shiriti i veglave, lista e fletëve, zona e fletës, pesë panelet në të djathtë dhe shiriti i gjendjes, me emrat e tyre në ekran.
keywords: ekran, paraqitje, shiriti i veglave, panele, shiriti anësor, miniatura, vetitë, shiriti i gjendjes, ndërfaqja, ekran i plotë, temë, modaliteti i errët
from: 18d82de6
---

MarkupCraft mbush dritaren e shfletuesit. Nga lart poshtë dhe nga e majta në të djathtë:

## Shiriti më i lartë

Shiriti i hollë mbi gjithçka i përket familjes CadCraft, jo vetë MarkupCraft. Ai ka:

- emrin e aplikacionit dhe versionin që po përdor,
- {{ui:Rreth MarkupCraft}}, që hap faqen e aplikacionit në sitin e internetit,
- {{ui:Ndihmë}}, që hap këtë ndihmë në një panel anësor (ose shtyp {{key:F1}}),
- {{ui:Ruaje për jashtë linje}}, që mban MarkupCraft, lexuesin dhe shkruesin e PDF-së, dhe këtë ndihmë në këtë shfletues, kështu që hapet pa lidhje; atëherë thotë "Gati jashtë linje" (shih [Puna jashtë linje](common:offline)),
- butonin e modalitetit të ekranit ({{ui:Ekran i plotë}}), dhe
- {{ui:Cilësimet}} (ose {{key:Mod+,}}), me një kartelë {{ui:MarkupCraft}} për cilësimet e vetë këtij aplikacioni dhe {{ui:Të përgjithshme}} për ato që ndajnë të gjitha aplikacionet CadCraft (shih [Cilësimet e MarkupCraft](topic:settings)), dhe
- {{ui:Letra}} dhe {{ui:Model}}, temat e çelura dhe të errëta. Në {{ui:Model}} fletët vizatohen të çelura mbi të errët; shënimet e tua mbajnë ngjyrat e tyre.

Butoni i modalitetit të ekranit, ose {{key:Ctrl+Shift+F}}, kalon nëpër tre modalitete: normal, ekran i plotë, dhe ekran i plotë me shiritat e fshehur. Me shiritat e fshehur, lëviz treguesin te skaji i sipërm i ekranit (ose prek aty) dhe ata rrëshqasin përsëri. Ky shkurtore përdor tastin Control në çdo kompjuter, përfshi Mac-un.

:::note
Në ekran të plotë, {{key:Esc}} e bën gjithashtu shfletuesin të dalë nga ekrani i plotë. Nëse ke dashur vetëm të anulosh një vizatim, shtyp {{key:Ctrl+Shift+F}} sërish për t'u kthyer në ekran të plotë.
:::

## Shiriti i veglave

Nën shiritin e sipërm, veglat janë të grupuara dhe të etiketuara:

| Grupi | Butonat |
|---|---|
| Skedari | {{ui:Hap}}, {{ui:Ruaj}}, {{ui:Mbyll}} |
| Përzgjidh | {{ui:Përzgjidh}}, {{ui:Lëviz}} |
| Vizato | {{ui:Stilolaps}}, {{ui:Theksim}}, {{ui:Vijë}}, {{ui:Shigjetë}}, {{ui:Drejtkëndësh}}, {{ui:Elips}}, {{ui:Polivijë}}, {{ui:Poligon}} |
| Rishiko | {{ui:Re}}, {{ui:Re e lirë}} |
| Shëno | {{ui:Thirrje}}, {{ui:Tekst}}, {{ui:Shënim}}, {{ui:Vulë}} |
| Mat | {{ui:Kalibro}}, {{ui:Gjatësi}}, {{ui:Sipërfaqe}}, {{ui:Numëro}} |
| Redakto | {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}}, {{ui:Ngjit}}, dhe {{ui:Më shumë}}: {{ui:Pres}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Ngjit në vend}}, {{ui:Dublo}}, {{ui:Fshi}}, {{ui:Përzgjidh të gjitha}}, {{ui:Mos përzgjidh asnjë}} |

Mjeti që po përdor duket i shtypur. Mbaj treguesin mbi një buton për të parë tastin e tij (për shembull "Drejtkëndësh (R)"); menyja {{ui:Më shumë}} liston çdo komandë me tastin e saj pranë. Butonat që nuk mund të veprojnë tani janë të zbehur: {{ui:Kopjo}} derisa të zgjedhësh një shënim, {{ui:Ngjit}} derisa diçka të jetë kopjuar. Një pikë e vogël pas {{ui:Ruaj}} do të thotë se disa shënime nuk janë ruajtur ende. Lista e plotë e tasteve është te [Tastiera dhe miu](topic:keyboard).

Një mjet mbetet aktiv pasi vizaton me të, kështu që mund të vizatosh disa re rresht. Shtyp {{key:Esc}} (dy herë nëse shënimi i ri është ende i zgjedhur) ose {{key:V}} për t'u kthyer te {{ui:Përzgjidh}}.

## Lista e fletëve (majtas)

Lista {{ui:Fletët}} shfaq çdo faqe të çdo PDF-je të hapur. Çdo rresht tregon një figurë të vogël të fletës, emrin e saj, numrin e fletës ose skedarin dhe faqen, dhe sa shënime ka. Numri pas titullit është numri i fletëve.

- Kliko një rresht për të shfaqur atë fletë.
- Shkruaj në {{ui:Kërko fletët}} për të filtruar sipas emrit të fletës, numrit të fletës ose emrit të skedarit. Shtyp {{key:Enter}} për të hapur përputhjen e parë.

Emrat e fletëve vijnë nga PDF-ja kur i ka. Shih [Hap një grup planimetrish dhe lëviz mes fletëve](topic:open-a-plan-set).

## Zona e fletës (në mes)

Fleta me të cilën punon. Përpara se të hapet diçka, shfaq "Hap një grup planimetrish" me një buton {{ui:Open PDFs}}. Lësho PDF-të kudo këtu për t'i hapur.

Nën fletë, një shirit i ngushtë ka:

- shigjetat e fletës së mëparshme dhe të ardhshme, dhe "3 nga 12: A-101 — Planimetria e katit" (mbaje treguesin mbi të për të parë skedarin dhe faqen),
- zvogëlim, kutinë e zmadhimit (shkruaj një përqindje dhe shtyp {{key:Enter}}; 100% është madhësia reale në një ekran tipik), zmadhim,
- {{ui:Përshtat faqen}} dhe {{ui:Përshtat gjerësinë}}.

Çdo fletë mban zmadhimin e vet ndërsa grupi është i hapur.

Kur krahason dy fleta, shfaqet një legjendë këtu: "Vetëm në fletën e vjetër", "Vetëm në fletën e re" dhe "Në të dyja". Shih [Krahaso dy rishikime](topic:compare-revisions).

## Panelet (djathtas)

Pesë kartela:

| Kartela | Çfarë shfaq |
|---|---|
| {{ui:Vetitë}} | Shënimi i zgjedhur: autori, datat, vlerat e matura, gjendja, subjekti, teksti, komenti, stili, përgjigjet dhe elementi i defektit. Me një mjet vizatimi të ndezur dhe asgjë të zgjedhur, cilësimet që do të përdorin shënimet e reja. Me asgjë të zgjedhur dhe {{ui:Përzgjidh}} të ndezur, fleta: numri, titulli, nga u lexua emri, madhësia e letrës, shkalla, dhe {{ui:Riemëro fletën}}. |
| {{ui:Shënimet}} | Çdo shënim në grupin e hapur, me filtra, dhe eksportet {{ui:CSV}} dhe {{ui:BCF}}. Shih [Lista e shënimeve](topic:markups-list-and-export). |
| {{ui:Lista e defekteve}} | Elementët e numëruar të defekteve, me personin e caktuar, datën e afatit dhe gjendjen. Shih [Bëj një listë defektesh](topic:punch-list). |
| {{ui:Veglat}} | Kutia e veglave: vegla të ruajtura dhe të stilizuara. Shih [Kutia e veglave](topic:tool-chest). |
| {{ui:Krahaso}} | Mbivendos dy fleta. Shih [Krahaso dy rishikime](topic:compare-revisions). |

## Shiriti i gjendjes (poshtë)

- Majtas, aty ku është treguesi mbi fletën, në inç (ose milimetra, në [Cilësimet](topic:settings)) mbi letër.
- Në mes, mesazhet: çfarë pret një mjet më pas, çfarë u ruajt, pse diçka u refuzua. **Lexoje kur diçka nuk ndodh.**
- Butoni i shkallës së fletës ("Nuk është kalibruar", ose shkalla). Kliko për ta caktuar shkallën. Shih [Kalibro një fletë dhe mat](topic:calibrate-and-measure).
- Emri yt ("Cakto emrin tënd" derisa ta japësh). Kliko për ta ndryshuar.

## Në ekran të vogël

Nën rreth 1180 piksel gjerësi, panelet bëhen më të ngushta dhe figurat e fletëve tkurren. Në një ekran sa një telefon, pjesët renditen: shiriti i veglave (lëvize anash), fleta, shiriti i gjendjes, panelet, pastaj lista e fletëve në fund. Një tablet në orientim horizontal e mban paraqitjen e plotë.

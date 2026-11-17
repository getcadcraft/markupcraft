---
title: Gjurmo RFI-t, dorëzimet dhe ditarët ditorë
summary: Vendos RFI-t, dorëzimet dhe ditarët ditorë në fletë, me numra, persona të caktuar, data afati dhe biseda; filtro ato që janë me vonesë; eksporto CSV ose BCF; punon jashtë linje dhe bashko kopjet.
keywords: rfi, kërkesë për informacion, dorëzim, ditar ditor, raport në terren, ditar pune, ndërtim, me vonesë, data e afatit, caktuar tek unë, bisedë, bashkëngjitje, bashko, jashtë linje, tablet, bcf, csv, terren
from: 95039c5a
---

Skeda {{ui:Fusha}} mban tre lloje regjistrimesh pranë shënimeve të tua. Secili lidhet me një fletë; një RFI ose një dorëzim ka gjithashtu një shenjë në vendin e fletës ku ka të bëjë.

- **RFI**: një pyetje për ekipin e projektimit. Gjendjet: Hapur, Përgjigjur, Mbyllur.
- **Dorëzim**: diçka që duhet shqyrtuar përpara se puna të vazhdojë. Gjendjet: Hapur, Në shqyrtim, Miratuar, Miratuar me shënime, Rishiko dhe dorëzo përsëri, Mbyllur.
- **Ditar ditor**: moti i ditës, numri i njerëzve në punishte dhe puna e bërë. Gjendjet: Draft, Përfundimtare.

Çdo regjistrim ka numrin e vetë të llojit (RFI-0001, SUB-0001, LOG-0001), një titull, tekst, një person të caktuar, një datë afati, një bisedë përgjigjesh dhe një listë emrash bashkëngjitjesh.

## Shto një

1. Hap skedën {{ui:Fusha}} dhe zgjidh {{ui:RFI}} ose {{ui:Dorëzim}}.
2. Trokit ose kliko fletën ku duhet të shkojë. Shfaqet një shenjë dhe regjistrimi hapet në skedë.
3. Plotëso titullin, pyetjen ose përshkrimin, kë e ka të caktuar dhe kur është afati.

Një ditar ditor shtohet në fletën e hapur pa shenjë. {{ui:Vendos shenjën}} vendos një më vonë; {{ui:Zhvendos shenjën}} zhvendos çdo shenjë. Trokitja mbi një shenjë në fletë hap regjistrimin e saj.

## Përgjigju dhe ndiq

Ndrysho {{ui:Gjendja}} dhe ndryshimi regjistrohet në bisedë. Shkruaj një përgjigje dhe zgjidh {{ui:Dërgo përgjigjen}} (Ctrl+Enter gjithashtu dërgon). Bashkëngjitjet janë vetëm emra: shkruaj një ose zgjidh skedarë, dhe lista i tregon ekipit cili shkon me regjistrimin. Vetë skedarët mbeten aty ku janë.

Një regjistrim, afati i të cilit ka kaluar dhe që është ende në pritje (një RFI që nuk është Përgjigjur ose Mbyllur, një dorëzim që nuk është vendosur), shënohet **Me vonesë**, me ngjyrë të kuqe, në listë dhe në shenjën e tij.

## Gjej çfarë ka rëndësi

Filtrat janë mbi listë: lloji, gjendja, data e afatit (me vonesë, afati brenda 7 ditësh, ka ose nuk ka datë afati), kjo fletë ose të gjitha fletët, një kërkim tekstual, dhe {{ui:Caktuar tek unë}}, që krahason personin e caktuar me emrin me të cilin MarkupCraft të njeh (shih [Cakto emrin tënd](topic:set-your-name)). Rreshti nën filtra numëron çfarë shfaqet dhe çfarë është me vonesë.

## Eksporto

{{ui:CSV}} shkruan regjistrimet e listuara si fletëllogaritëse. {{ui:BCF}} i shkruan si tema BCF, secila me një pamje të vendit të saj në fletë, që mjetet e tjera BCF t'i listojnë. Të dyja ndjekin filtrat.

## Ruaj, punë jashtë linje dhe bashkimi i kopjeve

Regjistrimet ruhen brenda PDF-së kur e ruan, dhe kthehen kur e hap. Nuk nevojitet rrjet: shto, ndrysho, përgjigju dhe ruaj në një tablet në një bodrum, pastaj sill PDF-në përsëri. PDF-të e vjetra dhe PDF-të nga programe të tjera hapen si gjithmonë.

Për të bashkuar dy kopje, hap njërën dhe zgjidh {{ui:Bashko}}, pastaj zgjidh kopjen tjetër të të njëjtës PDF. Regjistrimet bashkohen sipas id-ve të tyre:

- një regjistrim që ka vetëm njëra kopje shtohet;
- një regjistrim që është në të dyja merr fushat e tij (titull, tekst, gjendje, person i caktuar, datë afati) nga kopja e ndryshuar për fundit, si një e tërë, kështu që nëse dy persona kanë ndryshuar fusha të ndryshme të të njëjtit regjistrim, versioni i kopjes së mëvonshme fiton; bisedat dhe emrat e bashkëngjitjeve nga të dyja kopjet bashkohen;
- nëse të dyja kopjet kanë numëruar të njëjtin regjistrim të ri, ai që vjen merr numrin e radhës së lirë;
- një regjistrim i hequr në një kopje mbetet i hequr, përveç nëse është ndryshuar më pas.

Një bashkim është një hap i vetëm zhbërjeje.

## Kufizime

- Regjistrimet nuk ndahen ende nga Live TeamWork; përdor {{ui:Bashko}}.
- Nuk ka ekipe, njoftime ose projekte në cloud për regjistrimet në këtë version.
- Faqet e fshira nga PDF marrin me vete regjistrimet e tyre (konfirmimi i faqes i numëron ato).

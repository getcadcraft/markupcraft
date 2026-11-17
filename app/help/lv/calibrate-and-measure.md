---
title: Kalibrēt lapu un mērīt
summary: Iestatiet katras lapas mērogu pēc gatavas vērtības vai zināma izmēra, tad mēriet garumus, laukumus ar perimetriem un skaitiet.
keywords: kalibrēt, mērogs, iestatīt mērogu, mērīt, garums, attālums, izmērs, laukums, kvadrātpēdas, perimetrs, skaitīt, apjomu aprēķins, daudzums, lineāls, aritmētika, aprēķins, plus, daļskaitlis
from: 49a25c6d
---

Garumiem un laukumiem jāzina lapas mērogs. MarkupCraft glabā mērogu **katrai lapai** atsevišķi: kalibrējiet katru lapu, uz kuras mērāt. Skaitīšanai mērogs nav vajadzīgs.

Statusa joslā redzams pašreizējās lapas mērogs vai "Nav kalibrēts".

## Izvēlēties mērogu no saraksta

Izmantojiet to, kad PDF ir pilnā izmērā (24 × 36 lapa, kas drukāta 24 × 36) un rasējumā ir norādīts mērogs.

1. Noklikšķiniet mēroga pogu statusa joslā ("Nav kalibrēts"). Atveras lodziņš "Lapas mērogs".
2. Zem {{ui:Mērogs}} izvēlieties mērogu: arhitektūras (1/32" = 1'-0" līdz 3" = 1'-0"), inženierijas (1" = 10' līdz 1" = 100') vai metrisko (1:1 līdz 1:1000).
3. Izvēlieties {{ui:Iestatīt mērogu}}.

Rezultāts: statusa joslā redzams mērogs, piemēram, `1/4" = 1'-0"`. Arhitektūras mērogi rāda garumus pēdās un collās, inženierijas mērogi — decimālpēdās, metriskie līdz 1:50 — milimetros, bet no 1:100 — metros.

:::warning
Iepriekš iestatīts mērogs ir pareizs tikai tad, ja PDF nav samazināts. Puse izmēra komplekts vai lapa, kas bija "fit to page", izveidota, ar iepriekš iestatītu mērogu mērīs nepareizi. Kalibrējiet pēc zināma izmēra un katrā gadījumā pārbaudiet vismaz vienu izmēru.
:::

## Kalibrēt pēc zināma izmēra

Izmantojiet to puse izmēra komplektiem, skenētām lapām, detaļām neparastos mērogos vai lai pārbaudītu iepriekš iestatītu mērogu.

1. Atrodiet garu izmēru, kam uzticaties, vai grafisko mērogjoslu.
2. Izvēlieties {{ui:Kalibrēt}} grupā {{ui:Mērīt}} (vai izvēlieties {{ui:Norādiet divus punktus}} lodziņā "Lapas mērogs").
3. Noklikšķiniet vienu izmēra galu, tad otru. (Vai velciet no viena gala uz otru.) Vispirms palieliniet, lai būtu precīzāk; {{key:Shift}} tur līniju 45° soļos.
4. Lodziņā rādīts, cik tālu punkti atrodas uz papīra, un jautāts: "Cik tālu tie patiesībā atrodas?". Ierakstiet {{ui:Reālais attālums}}, piemēram, `24'-0"`, `12' 6 1/2"`, `7.2 m` vai `900 mm`.
5. Izvēlieties, kā rādīt garumus, zem {{ui:Rādīt garumus}}: {{ui:Pēdas un collas}}, {{ui:Decimālpēdas}}, {{ui:Collas}}, {{ui:Metri}} vai {{ui:Milimetri}}.
6. Izvēlieties {{ui:Iestatīt mērogu}}.

Rezultāts: statusa joslā redzams "Kalibrēts: 24'-0" pār 1.00 in" (reālais garums un garums uz papīra), un rīks, ar kuru gatavojāties mērīt, atgriežas. Visi garumu ierakstīšanas veidi ir aprakstīti [Mērvienības un garumi](topic:units-and-scales).

Reālais attālums var būt arī neliels aprēķins: `12'6"+3/4"`, `(24'-0")/3` vai `2*450mm`. Izmantojiet `+ - * /` un iekavas; skaitlis bez mērvienības tiek skaitīts mērvienībā zem {{ui:Rādīt garumus}} (pēdās, ja izvēlēts {{ui:Pēdas un collas}}). {{ui:Iestatīt mērogu}} izmanto rezultātu.

Ja MarkupCraft nevar nolasīt ievadīto, lodziņš to saka: 'That is not a length MarkupCraft understands. Try 24'-0", 12' 6 1/2", 7.2 m or 900 mm.' Aprēķinam, ko tas nevar atrisināt, tiek pateikts, kāpēc un kur, piemēram, "A bracket is not closed (character 5)."

## Izmērīt garumu

1. Izvēlieties {{ui:Garums}} ({{key:M}}).
2. Noklikšķiniet sākumu, tad beigas. Vai velciet no sākuma līdz beigām. {{key:Shift}} tur 45° soļos.

Rezultāts: izmēra līnija ar atzīmēm un uzrakstītu garumu. Statusa josla to atkārto ("Length: 12'-6 1/2" (1/4" = 1'-0")."), un {{ui:Rekvizīti}} to rāda zem {{ui:Garums}}. Pēdas un collas noapaļotas līdz tuvākajai 1/16".

Ja lapai vēl nav mēroga, izvēloties {{ui:Garums}}, pārslēdzas uz {{ui:Kalibrēt}}, un statusa josla to paskaidro: "Calibrate this sheet first: pick two points a known distance apart, or choose its scale. Then measure." Pēc mēroga iestatīšanas {{ui:Garums}} atgriežas.

## Skice mērogā

Kalibrētā lapā varat ierakstīt reālos garumus, zīmējot {{ui:Līnija}}, {{ui:Bultiņa}}, {{ui:Garums}}, {{ui:Polilīnija}}, {{ui:Daudzstūris}}, {{ui:Brīvais mākonis}}, {{ui:Laukums}} vai telpu:

1. Noklikšķiniet pirmo punktu.
2. Norādiet, kurp iet nākamais segments, un ierakstiet tā garumu, piemēram, `16` (lapas mērvienībā), `12'6"` vai `3.5 m`. Blakus rādītājam atveras lodziņš, kamēr rakstāt.
3. Nospiediet {{key:Enter}}. Punkts nonāk tik tālu rādītāja virzienā.

Lai precīzi iestatītu virzienu, pievienojiet `<` un leņķi grādos: `8 < 90` iet 8 pēdas taisni uz augšu, `4<0` — pa labi, `10 < 225` — uz leju un pa kreisi, kā lapa redzama (arī pagrieztās lappuses). Turpiniet ievadīt garumus nākamajiem stūriem un pabeidziet formu kā parasti. {{key:Esc}} aizver lodziņu, neievietojot punktu.

## Izmērīt leņķi

1. Izvēlieties {{ui:Leņķis}} ({{key:X}}).
2. Noklikšķiniet vienas malas galu, tad stūri, tad otras malas galu.

Rezultāts: divas malas, neliels loks stūrī un leņķis grādos ar vienu decimāldaļu (no 0° līdz 180°). Leņķim mērogs nav vajadzīgs. {{ui:Rekvizīti}} to rāda zem {{ui:Leņķis}}, un saraksts, CSV un BCF to satur.

{{ui:Loks}} ({{key:O}}) kalibrētā lapā rekvizītos rāda arī tā garumu pa līkni.

## Izmērīt laukumu un tā perimetru

1. Izvēlieties {{ui:Laukums}} ({{key:Q}}).
2. Noklikšķiniet katru telpas vai apgabala stūri.
3. Pabeidziet ar dubultklikšķi, {{key:Enter}} vai labo pogu (skārienekrānā — ar dubultskārienu). {{key:Backspace}} noņem pēdējo stūri.

Rezultāts: nokrāsota kontūra ar laukumu un "P" ar perimetru vidū, piemēram, "128.00 sq ft" un "P 48'-0"". Pēdu mērogi dod kvadrātpēdas, collu — kvadrātcollas, metru — kvadrātmetrus, milimetru — kvadrātmilimetrus. Laukumam vajag vismaz trīs stūrus.

### Izgriezumi

Lai izlaistu kolonnu, šahtu vai pagalmu, atlasiet laukumu un izvēlieties {{ui:Pievienot izgriezumu}} {{ui:Rekvizīti}}. Noklikšķiniet izgriezuma stūrus laukuma iekšpusē un pabeidziet tāpat kā laukumam. Izgriezums paliek atvērts (nenokrāsots), tā laukums tiek atņemts, un tā malas pievienotas perimetram: 16' × 8' telpa ar 4' × 4' izgriezumu rāda "112.00 sq ft" un "P 64'-0"". Pievienojiet, cik vajag; tie nedrīkst pārklāties savā starpā vai krustot laukuma kontūru. {{ui:Noņemt izgriezumus}} noņem visus, bet {{key:Mod+Z}} atsauc vienu.

## Skaitīt lietas

1. Izvēlieties {{ui:Skaitīt}} ({{key:U}}).
2. Cilnē {{ui:Rekvizīti}} ierakstiet {{ui:Grupas nosaukums}}, piemēram, "Grīdas notekas". (Tas paliek arī nākamreiz.)
3. Noklikšķiniet katru lietu uz lapas.

Rezultāts: katrs klikšķis pievieno numurētu punktu, pirmais punkts nes tagu ar tekstu "Grīdas notekas: 7", un statusa josla glabā skaitīto kopsummu.

- **Sākt citu grupu:** nospiediet {{key:Esc}} vienu reizi (notīra atlasi), mainiet {{ui:Grupas nosaukums}} un noklikšķiniet vēlreiz.
- **Pievienot esošai grupai:** vispirms atlasiet grupu, tad izvēlieties {{ui:Skaitīt}} un noklikšķiniet.
- **Noņemt atzīmi:** ar atlasītu grupu turiet {{key:Shift}} un noklikšķiniet punktu. Pēdējā punkta noņemšana noņem arī grupu. Skārienekrānā bez tastatūras izmantojiet {{key:Mod+Z}} vai {{ui:Atsaukt}}.
- **Pārdēvēt grupu:** atlasiet to un labojiet {{ui:Grupas nosaukums}} cilnē {{ui:Rekvizīti}}.

Skaitīšanas grupa pieder vienai lapai. Skaitījumi vairākās lapās atzīmju sarakstā redzami kā atsevišķas grupas.

## Mainīt vai noņemt mērogu

Noklikšķiniet mēroga pogu statusa joslā. Lodziņā redzams pašreizējais mērogs; izvēlieties citu, izvēlieties {{ui:Norādiet divus punktus}} vai {{ui:Noņemt mērogu}}.

Jau uzzīmētie garumi un laukumi tiek **pārmērīti** ar jauno mērogu uzreiz. {{ui:Atsaukt}} atjauno veco mērogu.

## Kur paliek skaitļi

- {{ui:Rekvizīti}} rāda izvēlētā mērījuma vērtības.
- Cilne {{ui:Atzīmes}} uzskaita katru vērtību, un tās CSV failā ir kolonna "Mērījums". Skat. [Atzīmju saraksts](topic:markups-list-and-export).
- Saglabātais PDF glabā mērogu lappusē un raksta garumus un laukumus kā mērījumu komentārus, lai citas PDF programmas, kas saprot mērījumus, tos varētu rādīt. Skat. [Kas tiek saglabāts PDF](topic:what-the-pdf-keeps).

Pilnam apjomu aprēķinam ar posteņiem, komplektiem un cenām izmantojiet TakeoffCraft: MarkupCraft mēra pārskatīšanai, nevis tāmēšanai.

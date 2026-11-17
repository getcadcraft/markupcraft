---
title: Katrs atzīmes veids
summary: Septiņpadsmit atzīmju veidi, to taustiņi, kā katrs tiek zīmēts, tā noklusējuma izskats un tas, kas tas kļūst saglabātajā PDF.
keywords: atzīmju veidi, rīku saraksts, anotāciju veidi, mākonis, izsaukums, teksts, piezīme, zīmogs, pildspalva, marķieris, līnija, bultiņa, taisnstūris, elipse, polilīnija, daudzstūris, garums, laukums, skaits
from: 29bf32e7
---

## Rīki

| Rīkjosla | Taustiņš | Kā zīmēt | Noklusējuma izskats | Saglabātajā PDF |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Velciet | Sarkana, 1.5 pt | Tinte |
| {{ui:Highlight}} | {{key:I}} | Velciet | Dzeltena, 14 pt plata, caurspīdīga, nokrāso to, kas ir zem tās | Tinte (atzīmēta kā marķiera līnija) |
| {{ui:Line}} | {{key:L}} | Velciet vai noklikšķiniet sākumu un galu | Sarkana, 2 pt | Līnija |
| {{ui:Arrow}} | {{key:A}} | Velciet vai noklikšķiniet sākumu un galu | Sarkana, 2 pt, slēgta bultiņas galviņa galā | Līnija ar bultiņas galviņu |
| {{ui:Arc}} | {{key:O}} | Noklikšķiniet sākumu, punktu uz loka un galu | Sarkana, 2 pt | Polilīnija pa loku |
| {{ui:Rectangle}} | {{key:R}} | Velciet kasti | Sarkana, 2 pt, bez aizpildījuma | Kvadrāts |
| {{ui:Ellipse}} | {{key:E}} | Velciet kasti | Sarkana, 2 pt, bez aizpildījuma | Aplis |
| {{ui:Polyline}} | {{key:Y}} | Noklikšķiniet punktus, dubultklikšķis, lai pabeigtu | Sarkana, 2 pt | Polilīnija |
| {{ui:Polygon}} | {{key:G}} | Noklikšķiniet punktus, dubultklikšķis, lai pabeigtu | Sarkana, 2 pt, bez aizpildījuma | Daudzstūris |
| {{ui:Cloud}} | {{key:C}} | Velciet kasti | Sarkanas, 1.5 pt mākoņa loki | Kvadrāts ar mākoņveida apmali |
| {{ui:Free cloud}} | {{key:Shift+C}} | Noklikšķiniet punktus, dubultklikšķis, lai pabeigtu | Sarkanas, 1.5 pt mākoņa loki | Daudzstūris ar mākoņveida apmali |
| {{ui:Callout}} | {{key:K}} | Nospiediet punktā, velciet uz tekstu, rakstiet | Sarkans teksts un norāde, 1 pt, 12 pt teksts | Teksta lodziņš ar izsaukuma norādi |
| {{ui:Text}} | {{key:T}} | Noklikšķiniet vai velciet kasti, rakstiet | Sarkans 12 pt teksts, bez apmales | Teksta lodziņš |
| {{ui:Note}} | {{key:N}} | Noklikšķiniet, rakstiet | Dzeltena piezīmes ikona | Līmlapiņa |
| {{ui:Stamp}} | {{key:S}} | Izvēlieties zīmogu, noklikšķiniet vai velciet | Rāmī ieskauti lielie burti un "No <name>, <date>"; krāsa pēc nozīmes | Zīmogs |
| {{ui:Length}} | {{key:M}} | Noklikšķiniet sākumu un galu (nepieciešams mērogs) | Zila izmēru līnija ar atzīmēm un garumu | Līnija, atzīmēta kā izmērs, ar mērījumu |
| {{ui:Angle}} | {{key:X}} | Noklikšķiniet vienas malas galu, stūri un otras malas galu | Zilas malas, neliels loks stūrī un leņķis grādos | Polilīnija ar leņķi kā tekstu |
| {{ui:Area}} | {{key:Q}} | Noklikšķiniet stūrus, dubultklikšķis, lai pabeigtu (nepieciešams mērogs) | Zila kontūra, gaiši zils aizpildījums, laukums un perimetrs | Daudzstūris, atzīmēts kā laukums, ar mērījumu |
| {{ui:Count}} | {{key:U}} | Noklikšķiniet katru vienību | Oranži numurēti punkti un tags "grupa: n" | Viens tintes komentārs katrai grupai, gredzens katrai vienībai |

Skārienekrānā "dubultklikšķis, lai pabeigtu" ir dubultskāriens, un "klikšķis" ir pieskāriens, kas tiek izpildīts, kad pirksts paceļas (punktiem, piezīmēm un skaitīšanas punktiem).

## Ko satur katra atzīme

| Lauks | Kur to redzat |
|---|---|
| Autors | {{ui:Properties}}, saraksts, zīmoga otrā rindiņa, citi PDF skatītāji |
| Izveidots un mainīts | {{ui:Properties}} (jūsu laika joslā), saraksts, CSV |
| Statuss | Atvērts, Pieņemts, Noraidīts vai Pabeigts |
| Tēma | Īss uzraksts; pēc noklusējuma veids ("Mākonis", "Teksta lodziņš", "Garuma mērījums") |
| Komentārs | Garākas piezīmes. Piezīmei tās teksts ir komentārs. |
| Teksts | Tikai teksta lodziņi un izsaukumi |
| Atbildes | Pavediens ar statusa maiņām |
| Defekta vienība | Numurs, piešķirtais, termiņš, vienības statuss, kad pievienota defektu sarakstam |
| Stils | Krāsa, līnijas platums, aizpildījums un aizpildījuma necaurredzamība (slēgtām formām, tekstam un izsaukumiem), necaurredzamība, teksta izmērs (tekstam, izsaukumiem un mērījumiem) |

## Tikai lasāmi komentāri

Komentāri, kas nāca kopā ar failu un ko MarkupCraft nevar rediģēt (teksta izcelšana, citu programmu zīmogi un citi īpašie veidi), ir uzskaitīti ar veidu "Cits" un statusa čipu "Tikai lasīšanai". Tie saglabā tieši to izskatu, ko fails tiem dod. Varat tos atlasīt, redzēt autoru, tēmu un komentāru un atbildēt uz tiem.

## Vēl nav izveidots

Failu pielikumi vēl nav izveidoti. Jebkura atzīme var būt saistīta ar lapu; skatiet [Lapu saites](topic:sheet-links). Attēlus un parakstus ievieto ar rīku {{ui:Stamp}}; skatiet [Zīmogi un piezīmes](topic:stamps-and-notes). Skatiet [Kas vēl nav izveidots](topic:not-built-yet).

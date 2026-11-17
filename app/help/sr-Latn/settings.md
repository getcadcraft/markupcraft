---
title: Podešavanja MarkupCraft-a
summary: Promenite ime, boju i debljinu linije novih označavanja, mesto na koje lepljenje stavlja kopije, kao i jedinice za dužine i položaj na listu.
keywords: podešavanja, preferencije, opcije, ime, autor, boja, podrazumevana boja, debljina linije, širina linije, debelo, tanko, lepljenje, lepljenje kod pokazivača, pomeraj, jedinice, metrički, milimetri, inči, stope, vrati na početno
from: 63ad97fd
---

Otvorite {{ui:Podešavanja}} zupčanikom na traci na vrhu, ili pritisnite {{key:Mod+,}}. Prva kartica, {{ui:MarkupCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve CadCraft aplikacije (tema, traka sa alatkama, paneli). Podešavanja MarkupCraft-a postoje samo u aplikaciji: menjate ih ovde, a ovaj pregledač ih pamti (vidi [Šta ostaje u ovom pregledaču](topic:browser-storage)). Promena stupa na snagu odmah; ništa ne treba čuvati.

## Vaše ime

{{ui:Ime na označavanjima}} je ime koje nosi svako novo označavanje i odgovor, i koje sačuvani PDF-ovi prikazuju kao autora komentara. To je isto ime kao dugme na desnom kraju statusne trake; promenite ga na bilo kojem mestu. Već nacrtana označavanja zadržavaju ime sa kojim su napravljena. Vidi [Podesite ime autora](topic:set-your-name).

## Novo označavanje

- **{{ui:Boja označavanja}}** je boja kojom počinju nove olovke, linije, strelice, pravougaonici, elipse, polilinije, poligoni, oblaci, napomene i tekst (na početku crvena). Markeri, beleške, pečati, dužine, površine i brojanja zadržavaju svoje boje, jer njihove boje govore šta su.
- **{{ui:Tanke linije}}, {{ui:Normalno}}, {{ui:Debele linije}}** čine linije tih istih označavanja upola tanjim, kakve jesu, ili upola debljim.

Boja ili debljina linije koju izaberete za jedan alat u {{ui:Svojstva}} (kad je alat uključen i ništa nije izabrano) ima prednost nad ovim podešavanjima. Alati iz [kutije sa alatima](topic:tool-chest) zadržavaju svoj stil. Već nacrtana označavanja se ne menjaju: izaberite ih i promenite u {{ui:Svojstva}}.

## Lepljenje

Gde {{key:Mod+V}} stavlja ono što ste kopirali:

- **{{ui:Na mestu pokazivača}}** (početno): sa pokazivačem na listu, kopija se centrira tamo gde pokazuje. Ako je pokazivač drugde, kopija se stavlja pored originala.
- **{{ui:Pored kopije}}**: uvek malo nadole i nadesno od originala, korak dalje pri svakom lepljenju.

Dugme {{ui:Nalepi}} i {{key:Mod+Shift+V}} ({{ui:Nalepi na istom mestu}}) rade isto, bez obzira na izbor. Vidi [Kopiraj, nalepi i dupliraj](topic:select-and-edit#copy-paste-and-duplicate).

## Mere

- **{{ui:Prikaži dužine u}}** je jedinica koju dijalog razmere ponudi prvu kada kalibrišete iz dve tačke: stope i inči, decimalne stope, inči, metri ili milimetri. Listovi koje ste već kalibrisali zadržavaju svoju jedinicu. Vidi [Kalibrišite list i merite](topic:calibrate-and-measure).
- **{{ui:Položaj na listu}}** bira inče ili milimetre za položaj pokazivača u donjem levom uglu ekrana. To je položaj na papiru, a ne stvarna udaljenost.

## Vraćanje

{{ui:Vrati podešavanja MarkupCraft-a na početna}} pri dnu dijaloga vraća ova podešavanja, kao i podešavanja panela i trake sa alatkama na {{ui:Opšte}}, na početna. Zadržava vaše ime, jer kazuje ko ste, a ne kako volite da radite, i zadržava boje koje ste izabrali u panelu svakog alata.

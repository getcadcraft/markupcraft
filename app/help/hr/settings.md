---
title: Postavke MarkupCraft
summary: Promijenite ime, boju i debljinu linije novih oznaka, mjesto lijepljenja kopija te jedinice za duljine i položaj na listu.
keywords: postavke, preferencije, opcije, ime, autor, boja, zadana boja, debljina linije, tanko, debelo, lijepljenje, na pokazivaču, pomak, jedinice, metrički, milimetri, inči, stope, vrati zadano
from: 63ad97fd
---

Otvorite {{ui:Postavke}} ikonom zupčanika u traci na vrhu ili pritisnite {{key:Mod+,}}. Prva kartica, {{ui:MarkupCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Općenito}} sadrži one koje dijele sve CadCraft aplikacije (tema, alatna traka, ploče). Postavke MarkupCraft postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti (vidi [Što ostaje u ovom pregledniku](topic:browser-storage)). Promjena vrijedi odmah; ništa nije potrebno spremiti.

## Vaše ime

{{ui:Ime na oznakama}} je ime koje nosi svaka nova oznaka i odgovor, a spremljeni PDF-ovi ga prikazuju kao autora komentara. To je isto ime kao gumb na desnom kraju statusne trake; promijenite ga na bilo kojem mjestu. Već nacrtane oznake zadržavaju ime s kojim su napravljene. Vidi [Postavljanje autorskog imena](topic:set-your-name).

## Nove oznake

- **{{ui:Boja oznake}}** je boja s kojom počinju nove olovke, crte, strelice, pravokutnici, elipse, polilinije, poligoni, oblaci, oblačići i tekst (na početku crvena). Isticači, bilješke, pečati, duljine, površine i brojanja zadržavaju svoje boje jer njihove boje govore što su.
- **{{ui:Tanke linije}}, {{ui:Normalno}}, {{ui:Debele linije}}** čine crte tih istih oznaka upola tanjima, kakve jesu, ili za polovicu debljima.

Boja ili debljina linije koju odaberete za jedan alat u {{ui:Svojstva}} (s tim alatom uključenim i bez odabira) ima prednost nad ovim. Alati iz [alatnice](topic:tool-chest) zadržavaju svoj stil. Već nacrtane oznake se ne mijenjaju: odaberite ih i promijenite u {{ui:Svojstva}}.

## Lijepljenje

Gdje {{key:Mod+V}} stavlja ono što ste kopirali:

- **{{ui:Na pokazivaču}}** (početna vrijednost): s pokazivačem na listu kopija se centrira na mjestu na koje pokazuje. Ako je pokazivač drugdje, kopija se stavlja pokraj izvornika.
- **{{ui:Pokraj kopije}}**: uvijek malo dolje i desno od izvornika, korak dalje pri svakom lijepljenju.

Gumb {{ui:Zalijepi}} i {{key:Mod+Shift+V}} ({{ui:Zalijepi na isto mjesto}}) rade isto s oba izbora. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:select-and-edit#copy-paste-and-duplicate).

## Mjerenja

- **{{ui:Prikaži duljine u}}** je jedinica koju dijalog mjerila prvo nudi kad kalibrirate iz dviju točaka: stope i inči, decimalne stope, inči, metri ili milimetri. Listovi koje ste već kalibrirali zadržavaju svoju jedinicu. Vidi [Kalibracija lista i mjerenje](topic:calibrate-and-measure).
- **{{ui:Položaj na listu}}** bira inče ili milimetre za položaj pokazivača u donjem lijevom kutu zaslona. To je položaj na papiru, a ne stvarna udaljenost.

## Vraćanje

{{ui:Vrati zadane postavke MarkupCraft}} pri dnu dijaloga vraća ove postavke, kao i postavke ploča i alatne trake na {{ui:Općenito}}, na početno stanje. Zadržava vaše ime, jer kaže tko ste, a ne kako radite, i zadržava boje koje ste odabrali u panelu svakog alata.

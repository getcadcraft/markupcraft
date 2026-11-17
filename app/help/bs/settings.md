---
title: Postavke MarkupCraft
summary: Promijeni ime, boju i debljinu linije novih označavanja, gdje lijepljenje stavlja kopije, te jedinice za dužine i položaj na listu.
keywords: postavke, preferencije, opcije, ime, autor, boja, kolor, zadana boja, debljina linije, debelo, tanko, lijepljenje, lijepljenje kod pokazivača, pomak, jedinice, metričke, milimetri, inči, stope, vrati
from: 63ad97fd
---

Otvori {{ui:Postavke}} preko zupčanika u traci na vrhu ili pritisni {{key:Mod+,}}. Prva kartica, {{ui:MarkupCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži one koje dijele sve CadCraft aplikacije (tema, alatna traka, paneli). Postavke MarkupCraft postoje samo u aplikaciji: mijenjaš ih ovdje, a ovaj preglednik ih pamti (vidi [Šta ostaje u ovom pregledniku](topic:browser-storage)). Promjena djeluje odmah; ne treba ništa spašavati.

## Tvoje ime

{{ui:Ime na oznakama}} je ime koje svako novo označavanje i odgovor nosi, a koje spašeni PDF-ovi prikazuju kao autora komentara. To je isto ime kao dugme na desnom kraju statusne trake; mijenjaj ga na bilo kojem mjestu. Već nacrtana označavanja zadržavaju ime s kojim su napravljena. Vidi [Postavi ime autora](topic:set-your-name).

## Nova označavanja

- **{{ui:Boja oznake}}** je boja s kojom počinju nove olovke, linije, strelice, pravougaonici, elipse, polilinije, poligoni, oblaci, pozivne oznake i tekst (na početku crvena). Markeri, bilješke, pečati, dužine, površine i brojevi zadržavaju svoje boje, jer njihove boje govore šta su.
- **{{ui:Tanke linije}}, {{ui:Normalna}}, {{ui:Debele linije}}** čine linije tih istih označavanja upola tanjim, kakve jesu, ili upola debljim.

Boja ili debljina linije koju izabereš za jedan alat u {{ui:Svojstva}} (kad je taj alat uključen i ništa nije odabrano) ima prednost nad ovim postavkama. Alati iz [kutije s alatima](topic:tool-chest) zadržavaju svoj stil. Već nacrtana označavanja se ne mijenjaju: odaberi ih i promijeni u {{ui:Svojstva}}.

## Lijepljenje

Gdje {{key:Mod+V}} stavlja ono što si kopirao:

- **{{ui:Na pokazivaču}}** (početna vrijednost): kad je pokazivač na listu, kopija se centrira tamo gdje pokazuje. Kad je pokazivač drugdje, kopija se stavlja pored originala.
- **{{ui:Pored kopije}}**: uvijek malo dolje i desno od originala, korak dalje s svakim lijepljenjem.

Dugme {{ui:Zalijepi}} i {{key:Mod+Shift+V}} ({{ui:Zalijepi na mjesto}}) rade isto s oba izbora. Vidi [Kopiranje, lijepljenje i dupliranje](topic:select-and-edit#copy-paste-and-duplicate).

## Mjere

- **{{ui:Prikaži dužine u}}** je jedinica koju dijalog razmjere lista prvo nudi kad kalibrišeš iz dvije tačke: stope i inči, decimalne stope, inči, metri ili milimetri. Listovi koje si već kalibrisao zadržavaju svoju jedinicu. Vidi [Kalibracija lista i mjerenje](topic:calibrate-and-measure).
- **{{ui:Položaj na listu}}** bira inče ili milimetre za položaj pokazivača u donjem lijevom uglu ekrana. To je položaj na papiru, a ne stvarna udaljenost.

## Vraćanje

{{ui:Vrati postavke MarkupCraft}} na dnu dijaloga vraća ove postavke, kao i postavke panela i alatne trake na kartici {{ui:Opšte}}, na početne vrijednosti. Zadržava tvoje ime, jer kaže ko si, a ne kako voliš raditi, i zadržava boje koje si izabrao u panelu svakog alata.

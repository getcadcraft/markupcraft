---
title: Promijenite linije, slike i tekst same stranice
summary: Pomjerajte, mijenjajte veličinu, bojite ili brišite ono što sam PDF crta, pomjerajte tačke linije, zamijenite sliku i promijenite riječi u liniji teksta.
keywords: sadržaj stranice, osnovni sadržaj, uredi PDF, uredi crtež, vektor, putanja, oblik, linija, slika, zamijeni sliku, tekst, riječi, font, tačke, čvorovi, pomjeri, promijeni veličinu, promijeni boju, obriši, alat za sadržaj
from: 471d457e
---

Označavanja leže iznad lista. Alat {{ui:Content}} radi na samom listu: linijama, slikama i linijama teksta koje PDF crta. Vaš PDF na ovom računaru se nikad ne mijenja: izmjene su dio kopije koju spasite.

## Odaberite šta mijenjate

1. Odaberite {{ui:Content}} u grupi {{ui:Select}}, ili pritisnite {{key:B}}.
2. Pod {{ui:Pick}} u {{ui:Properties}} uključite ili isključite {{ui:Shapes}}, {{ui:Pictures}} i {{ui:Text}}. Mogu se birati samo vrste koje su uključene, pa možete odabrati tekst zauzetog crteža bez hvatanja njegovih linija.
3. Kliknite nešto da odaberete. Shift+klik dodaje ili uklanja. Prevucite okvir preko praznog papira da odaberete više: prevlačenje udesno uzima ono što je potpuno unutra, a prevlačenje ulijevo uzima ono čega se okvir dotiče.

Oblik unutar isječenog područja bira se samo tamo gdje se vidi.

## Pomjerite, promijenite veličinu, obojite, obrišite

- **Pomjeranje:** prevucite odabrani objekat, ili pritisnite tastere sa strelicama (držite Shift za veće korake). Držite Shift dok prevlačite da pomjerate ravno vodoravno ili ravno uspravno.
- **Promjena veličine:** prevucite jedan od osam kvadrata oko odabira. Mijenja se od suprotne strane. Držite Shift da zadržite proporcije.
- **Promjena boje:** za linije i oblike postavite {{ui:Line color}}, {{ui:Fill color}} i {{ui:Line width (pt)}} u {{ui:Properties}}.
- **Brisanje:** pritisnite {{key:Delete}}, ili odaberite {{ui:Delete from the page}}.
- **Poništavanje:** svaka promjena je jedan korak: {{key:Mod+Z}} je vraća, {{key:Mod+Y}} je ponovo postavlja.

{{ui:Put back as it was}} poništava sve promjene odabranih objekata odjednom; {{ui:Put this page back as it was}} to radi za cijelu stranicu.

## Kopirajte, izrežite i zalijepite sadržaj stranice

Odaberite linije, slike ili tekst alatom {{ui:Content}}, pa:

- {{key:Mod+C}} kopira, {{key:Mod+X}} reže (kopira i uklanja sa stranice), {{key:Mod+D}} stavlja kopiju pored njih.
- {{key:Mod+V}} lijepi kao sadržaj stranice, pored originala ili tamo gdje je pokazivač (kako kažu [Postavke](topic:settings)); {{key:Mod+Shift+V}} lijepi na potpuno isto mjesto. Lijepite na drugoj stranici, u drugom otvorenom PDF-u ili u drugoj kartici MarkupCraft-a u ovom pregledaču.
- Meni grupe {{ui:Edit}} i meni desnog klika imaju iste komande.

Lijepljenje zadržava linije kao linije, riječi kao riječi u njihovom fontu, a slike kao slike. To je jedan dio: pomjerite ga, promijenite mu veličinu pomoću kvadrata, obrišite ga ili ga vratite pomoću {{key:Mod+Z}}. Postaje dio stranice u kopiji koju spasite. Šta god ste zadnje kopirali, označavanja ili sadržaj stranice, to {{key:Mod+V}} lijepi.

Ono što kopija sadrži isječeno je na okvir oko odabira: nešto što MarkupCraft ne može izvući iz kopije (vidi dolje) i što se nalazi unutar tog okvira dolazi s njom.

## Pomjerite tačke linije

Dvaput kliknite liniju ili krivu (ili je odaberite i odaberite {{ui:Edit points}}). Njene tačke se prikazuju kao kvadrati, a njene ručice krivine kao krugovi. Prevucite tačku ili ručicu; tačka povlači ručice pored sebe, pa kriva zadržava svoj oblik oko nje. Pritisnite {{key:Esc}}, ili kliknite pored linije, kad završite.

Pravougaonici nemaju tačke za prevlačenje: mijenjajte im veličinu pomoću kvadrata oko njih.

## Zamijenite sliku

Odaberite sliku i odaberite {{ui:Replace picture…}}, pa izaberite PNG, JPEG ili SVG datoteku (ili PDF: njegovu prvu stranicu). Nova slika popunjava mjesto stare, zadržavajući svoje proporcije.

## Promijenite riječi linije teksta

Dvaput kliknite liniju teksta, upišite nove riječi u {{ui:Words}} i pritisnite {{key:Enter}}. Riječi se pišu fontom i veličinom same linije, a linija zadržava svoju dužinu, pa tekst poslije nje ne pomjera.

:::note
Većina PDF-ova nosi samo slova koja koriste iz svakog fonta. Kad upišete slovo koje kopija fonta u datoteci nema, MarkupCraft ga ispisuje u fontu Helvetica i to kaže. {{ui:Properties}} pokazuje koja slova font u datoteci ima.
:::

Tekst se mijenja jednu liniju po liniju; ne prelama se u sljedeću liniju.

## Šta MarkupCraft ostavlja kakvo jeste

- **Skenirane stranice** su jedna slika: možete pomjerati, mijenjati veličinu, zamijeniti ili obrisati sliku, ali sadržaj unutar nje se ne može uređivati.
- **Šifrovani i potpisani PDF-ovi:** promjena stranice bi pokvarila potpis, pa alat {{ui:Content}} to kaže i ništa ne mijenja. Označavanja i dalje rade.
- **Područja isječenja**, objekti podijeljeni između dva dijela sadržaja stranice i miješanja boja koja popunjavaju cijelo područje ostaju kakvi jesu; MarkupCraft kaže zašto kad pokušate.
- **Riječi u standardnom fontu koji PDF ne opisuje** (kao što je Times font bez širina slova u datoteci) ne mogu se mijenjati, jer MarkupCraft ne bi mogao zadržati razmak linije. Linija se i dalje može pomjerati.

## Stavite označavanja na stranicu

Linije, pravougaonike, elipse, polilinije, oblake i poteze olovke koje ste nacrtali kao označavanja mogu postati dio same stranice: odaberite ih i odaberite {{ui:Put into the page}} u {{ui:Properties}}. Tekst, pečati, slike i prozirne boje ostaju označavanja.

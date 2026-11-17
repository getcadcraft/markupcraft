---
title: Promenite sopstvene linije, slike i tekst strane
summary: Pomerajte, menjajte veličinu, bojite ili brišite ono što sam PDF crta, pomerajte tačke linije, zamenjujte sliku i menjajte reči u redu teksta.
keywords: sadržaj strane, osnovni sadržaj, uredi PDF, uredi crtež, vektor, putanja, oblik, linija, slika, zameni sliku, tekst, reči, font, tačke, čvorovi, pomeri, promeni veličinu, boja, obriši, alat za sadržaj
from: 471d457e
---

Označavanja leže iznad lista. Alat {{ui:Sadržaj}} radi na samom listu: linijama, slikama i redovima teksta koje PDF crta. Vaš PDF na ovom računaru se nikada ne menja: izmene su deo kopije koju sačuvate.

## Izaberite šta menjate

1. Izaberite {{ui:Sadržaj}} u grupi {{ui:Izbor}}, ili pritisnite {{key:B}}.
2. Pod {{ui:Izbor}} u {{ui:Svojstva}}, uključite ili isključite {{ui:Oblici}}, {{ui:Slike}} i {{ui:Tekst}}. Mogu se birati samo vrste koje su uključene, pa možete izabrati tekst zauzetog crteža bez hvatanja njegovih linija.
3. Kliknite nešto da biste to izabrali. Shift+klik dodaje ili uklanja. Prevucite okvir preko praznog papira da biste izabrali više stvari: prevlačenje udesno uzima ono što je potpuno unutar okvira, a prevlačenje ulevo uzima ono što okvir dodiruje.

Oblik unutar isečene oblasti bira se samo tamo gde se vidi.

## Pomerajte, menjajte veličinu, bojite, brišite

- **Pomeranje:** prevucite izabrani objekat, ili pritisnite tastere sa strelicama (držite Shift za veće korake). Držite Shift dok prevlačite da biste pomerali ravno udesno ili ravno nagore.
- **Promena veličine:** prevucite jedan od osam kvadrata oko izbora. Raste ili se smanjuje sa suprotne strane. Držite Shift da zadržite proporcije.
- **Promena boje:** za linije i oblike podesite {{ui:Boja linije}}, {{ui:Boja ispune}} i {{ui:Debljina linije (pt)}} u {{ui:Svojstva}}.
- **Brisanje:** pritisnite {{key:Delete}}, ili izaberite {{ui:Izbriši sa strane}}.
- **Opozivanje:** svaka promena je jedan korak: {{key:Mod+Z}} je opoziva, a {{key:Mod+Y}} je vraća.

{{ui:Vrati kako je bilo}} poništava sve promene nad izabranim objektima odjednom; {{ui:Vrati ovu stranu kako je bila}} radi to za celu stranu.

## Kopiranje, sečenje i lepljenje sadržaja strane

Izaberite linije, slike ili tekst alatom {{ui:Sadržaj}}, pa:

- {{key:Mod+C}} kopira, {{key:Mod+X}} seče (kopira i izvlači ih sa strane), {{key:Mod+D}} stavlja kopiju pored njih.
- {{key:Mod+V}} lepi kao sadržaj strane, pored originala ili tamo gde je pokazivač (kako kažu [Podešavanja](topic:settings)); {{key:Mod+Shift+V}} lepi na potpuno isto mesto. Lepljenje na drugu stranu, u drugi otvoreni PDF ili u drugu karticu MarkupCraft-a u ovom pregledaču.
- Meni grupe {{ui:Uređivanje}} i meni na desni klik imaju iste komande.

Lepljenje zadržava linije kao linije, reči kao reči u njihovom sopstvenom fontu, a slike kao slike. To je jedan komad: pomerajte ga, menjajte mu veličinu pomoću kvadrata, brišite ga, ili ga pomoću {{key:Mod+Z}} vratite. Postaje deo strane u kopiji koju sačuvate. Šta god da ste poslednje kopirali, označavanje ili sadržaj strane, to {{key:Mod+V}} lepi.

Ono što kopija sadrži seče se na okvir oko izbora: sve što MarkupCraft ne može da izvuče iz kopije (vidi ispod) i što se nalazi unutar tog okvira ide zajedno.

## Pomerajte tačke linije

Dvaput kliknite liniju ili krivu (ili je izaberite i izaberite {{ui:Uredi tačke}}). Njene tačke se prikazuju kao kvadrati, a ručice krivih kao krugovi. Prevucite tačku ili ručicu; tačka povlači ručice pored sebe, pa kriva zadržava svoj oblik oko nje. Pritisnite {{key:Esc}}, ili kliknite pored linije, kada završite.

Pravougaonici nemaju tačke za prevlačenje: menjajte im veličinu pomoću kvadrata oko njih.

## Zamena slike

Izaberite sliku i izaberite {{ui:Zameni sliku…}}, pa izaberite PNG, JPEG ili SVG datoteku (ili PDF: njegovu prvu stranu). Nova slika popunjava mesto stare, zadržavajući sopstvene proporcije.

## Promena reči u redu teksta

Dvaput kliknite red teksta, upišite nove reči u {{ui:Reči}} i pritisnite {{key:Enter}}. Reči se pišu fontom i veličinom samog reda, a red zadržava svoju dužinu, pa tekst posle njega ne pomera.

:::note
Većina PDF-ova nosi samo slova koja koriste iz svakog fonta. Kada ukucate slovo koje kopija fonta u datoteci nema, MarkupCraft ga ispisuje u fontu Helvetica i to kaže. {{ui:Svojstva}} pokazuju koja slova font u datoteci ima.
:::

Tekst se menja jedan red po red; ne prelazi u sledeći red.

## Šta MarkupCraft ostavlja kakvo jeste

- **Skenirane strane** su jedna slika: možete pomerati, menjati veličinu, zameniti ili obrisati sliku, ali sadržaj unutar nje ne može da se menja.
- **Šifrovani i potpisani PDF-ovi:** promena strane bi prekinula potpis, pa alat {{ui:Sadržaj}} to kaže i ništa ne menja. Označavanja i dalje rade.
- **Oblasti isecanja, objekti podeljeni između dva dela sadržaja strane, i mešanja boja koja popunjavaju celu oblast** ostaju kakvi jesu; MarkupCraft kaže zašto kada pokušate.
- **Reči u standardnom fontu koji PDF ne opisuje** (na primer Times font bez širina slova u datoteci) ne mogu se menjati, jer MarkupCraft ne bi mogao da sačuva razmak između redova. Red se i dalje može pomerati.

## Stavite označavanja u stranu

Linije, pravougaonici, elipse, polilinije, oblaci i potezi olovke koje ste nacrtali kao označavanja mogu postati deo same strane: izaberite ih i izaberite {{ui:Stavi u stranu}} u {{ui:Svojstva}}. Tekst, pečati, slike i providne boje ostaju označavanja.

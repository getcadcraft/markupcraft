---
title: Meniji, tipke i miš
summary: Izaberi MarkupCraft-ovu traku s alatima, meni traku za PDF pregled ili traku, daj svakom alatu svoju tipku, premještaj alate između menija i podesi šta točkić i dugmad miša rade.
keywords: stil menija, meniji, meni traka, traka s alatima, traka, kartice, pdf pregled, prečice, tipke, prilagodi, promijeni tipke, miš, točkić, obrni, smjer zumiranja, srednje dugme, desno dugme, pomjeranje, izvoz, uvoz, prebacivanje, poznato
from: 081438a6
---

MarkupCraft-ovi alati su isti, bez obzira kako do njih dođeš. **Stil menija** samo određuje gdje stoje na ekranu, kako se zovu tamo i koje ih tipke biraju. Izaberi ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Meniji, tipke i miš}}; promjena je odmah vidljiva, a ovaj pregledač je pamti.

## Tri stila

| Stil | Šta dobiješ |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraft-ova traka s alatima ({{ui:Datoteka}}, {{ui:Odaberi}}, Crtanje, Revizija, Anotacije, {{ui:Mjeri}}, {{ui:Uređivanje}}) i njene jednoslovne tipke: {{key:V}} odabir, {{key:H}} pomjeranje, {{key:P}} olovka, {{key:I}} isticač, {{key:L}} linija, {{key:A}} strelica, {{key:R}} pravougaonik, {{key:E}} elipsa, {{key:C}} oblak, {{key:K}} izvučena oznaka, {{key:T}} tekst, {{key:N}} bilješka, {{key:S}} pečat, {{key:M}} dužina, {{key:Q}} površina, {{key:U}} brojanje. Podrazumijevani stil. |
| {{ui:PDF pregled}} | Traka menija ({{ui:Datoteka}}, {{ui:Uređivanje}}, {{ui:Pogled}}, {{ui:Dokument}}, {{ui:Označi}}, {{ui:Mjeri}}, {{ui:Pregled}}, {{ui:Prozor}}) iznad reda alata za pregled, s tipkama postavljenim kako PDF programi za pregled postavljaju svoje: {{key:V}} odabir, {{key:Shift+V}} pomjeranje, {{key:H}} isticač, {{key:Q}} izvučena oznaka, {{key:N}} poligon, {{key:Shift+N}} polilinija, {{key:Shift+T}} bilješka, {{key:Shift+A}} luk, a mjerenja na {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibriraj, {{key:Alt+Shift+L}} dužina, {{key:Alt+Shift+G}} ugao, {{key:Alt+Shift+A}} površina, {{key:Alt+Shift+C}} brojanje. {{key:Alt+L}} otvara listu oznaka. Srednje dugme pomjera; desni klik ne. |
| {{ui:Traka}} | Kartice nazvane po poslu: {{ui:Označi}} (odabir, crtanje, oblaci, izvučene oznake, tekst, bilješke, pečati), {{ui:Mjeri}}, {{ui:Uređivanje}}, {{ui:Pregled}} (lista oznaka i njeni izvozi, BCF problemi, lista ispravki, zapisi s terena, sanduk s alatima, poređenje), {{ui:Stranice}} i {{ui:Pogled}}, s {{ui:Datoteka}} i brzim dugmadima za otvori, spasi, poništi i ponovi. Alati zadržavaju MarkupCraft-ove jednoslovne tipke. Dugme za panel koji nije otvoren prvo otvara taj panel. |

Svaki stil zadržava {{key:Mod}} tipke: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} za uklapanje stranice i {{key:Mod+9}} za uklapanje širine; {{key:PageUp}} i {{key:PageDown}} mijenjaju list.

:::tip
Tipka koja pripada MarkupCraft-ovom rasporedu, ali ne i stilu koji si odabrao, ne radi ništa, a statusna traka kaže gdje je njen alat otišao („U PDF pregledu, Izvučena oznaka je Q”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje. Dok kucaš u polju za tekst, izvučenu oznaku ili bilješku, svaka tipka pripada tekstu, a brojevi otkucani dok crtaš i dalje otvaraju okvir za dužinu.
:::

## Napravi po svom

1. Odaberi stil koji je najbliži onome što želiš, zatim klikni {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i meniji}} nađi alat (polje za pretragu pomaže). {{ui:Dodaj tipku}} i pritisni tipku, ili dvije tipke zaredom za dvoslovnu tipku. Klikni tipku da je skineš.
3. Uz traku menija, {{ui:Gdje stoji}} premješta alat u drugi meni, ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} podesi točkić i dugmad koja pomjeraju list.
5. Daj mu ime i klikni {{ui:Spasi}}.

Spašavanje ugrađenog stila pravi tvoju kopiju („Moj PDF pregled”); ugrađeni se nikada ne mijenja. Tipka dodijeljena dvama alatima prikazuje se crveno i mora se popraviti prije nego što možeš spasiti.

## Miš

- **Točkić miša:** {{ui:Skrolanje prema gore zumira unutra}} (početno) ili {{ui:Skrolanje prema gore zumira van}}, i koliko brzo. Štipanje na trackpadu uvijek zumira u smjeru kojim se pomjeraju prsti.
- **Pomjeraj list pomoću:** srednjeg dugmeta, desnog dugmeta, ili oba. {{key:Space}} i prevlačenje, te alat {{ui:Pomjeri pogled}}, uvijek pomjeraju; lijevo dugme inače crta i odabire, pa njegovo označavanje ovdje ne mijenja ništa.
- MarkupCraft nema 3D prikaz, pa 3D dugmad ovdje ne rade.

## Ponesi sa sobom

{{ui:Izvezi}} snima stil u upotrebi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, s drugog računara ili od kolege. Uvezena datoteka može pokazivati samo na MarkupCraft-ove alate: sve drugo u njoj se izostavlja i broji u statusnoj traci. {{ui:Izbriši ovaj stil}} uklanja jedan tvoj.

:::note
Ove postavke ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila čini da se svaka aplikacija otvara u svom odgovarajućem stilu: {{ui:PDF pregled}} ide uz stilove meni-trake drugih aplikacija, {{ui:Traka}} uz njihove trake, a MarkupCraft-ova traka s alatima uz njihovu. Aplikacija bez odgovarajućeg stila zadržava svoj.
:::

:::tip
Rasporedi radnog prostora u {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Raspored}} ({{ui:Traka i pregled projekta}}, {{ui:Okvir s alatima i info okvir}}) grade svoju traku iz kartica stila {{ui:Traka}}, a svoj okvir s alatima iz MarkupCraft-ove trake s alatima, pa se svaki alat u njima pokreće na isti način.
:::

Povezano: [Tipke i miš](topic:keyboard) · [Postavke MarkupCraft-a](topic:settings) · [Dolazak iz drugog softvera za označavanje](topic:coming-from)

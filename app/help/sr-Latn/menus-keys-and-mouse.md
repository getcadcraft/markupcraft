---
title: Meniji, tasteri i miš
summary: Izaberite sopstvenu traku sa alatima programa MarkupCraft, traku menija za pregled PDF-a ili traku sa karticama, dajte bilo kom alatu sopstveni taster, premestite alate između menija i podesite šta točkić i dugmad miša rade.
keywords: stil menija, meniji, traka menija, traka sa alatima, traka, kartice, pregled PDF-a, prečice na tastaturi, tasteri, prilagodi, ponovo dodeli, miš, točkić, obrni, smer zumiranja, srednje dugme, desno dugme, pomeranje pogleda, izvoz, uvoz, prebacivanje, poznato
from: 081438a6
---

Alati programa MarkupCraft su isti kako god do njih dođete. **Stil menija** samo određuje gde se alati nalaze na ekranu, kako se tamo zovu i koji ih tasteri biraju. Izaberite ga u {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}; promena je odmah, a ovaj pregledač je pamti.

## Tri stila

| Stil | Šta dobijate |
|---|---|
| {{ui:MarkupCraft}} | Sopstvena traka sa alatima programa MarkupCraft (Datoteka, Izbor, Crtanje, Revizija, Anotacija, Merenje, Uređivanje) i njeni jednoslovni tasteri: {{key:V}} izbor, {{key:H}} pomeranje pogleda, {{key:P}} olovka, {{key:I}} isticač, {{key:L}} linija, {{key:A}} strelica, {{key:R}} pravougaonik, {{key:E}} elipsa, {{key:C}} oblak, {{key:K}} pokazna oznaka, {{key:T}} tekst, {{key:N}} beleška, {{key:S}} pečat, {{key:M}} dužina, {{key:Q}} površina, {{key:U}} brojanje. Početak. |
| {{ui:PDF review}} | Traka menija ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) iznad reda alata za pregled, sa tasterima postavljenim onako kako ih postavljaju programi za pregled PDF-a: {{key:V}} izbor, {{key:Shift+V}} pomeranje pogleda, {{key:H}} isticač, {{key:Q}} pokazna oznaka, {{key:N}} poligon, {{key:Shift+N}} polilinija, {{key:Shift+T}} beleška, {{key:Shift+A}} luk, a merenja na {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibriši, {{key:Alt+Shift+L}} dužina, {{key:Alt+Shift+G}} ugao, {{key:Alt+Shift+A}} površina, {{key:Alt+Shift+C}} brojanje. {{key:Alt+L}} otvara listu označavanja. Srednje dugme pomera pogled; desni klik ne. |
| {{ui:Ribbon}} | Kartice nazvane po poslu: {{ui:Mark up}} (izbor, crtanje, oblaci, pokazne oznake, tekst, beleške, pečati), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}} (lista označavanja i njeni izvozi, BCF problemi, lista nedostataka, zapisi sa terena, kutija sa alatima, poređenje), {{ui:Pages}} i {{ui:View}}, uz {{ui:File}} i brza dugmad za otvaranje, čuvanje, opozivanje i ponovno. Alati zadržavaju jednoslovne tastere programa MarkupCraft. Dugme za panel koji nije otvoren prvo otvara taj panel. |

Svaki stil zadržava {{key:Mod}} tastere: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} uklopi stranu i {{key:Mod+9}} uklopi širinu; {{key:PageUp}} i {{key:PageDown}} menjaju list.

:::tip
Taster koji pripada rasporedu programa MarkupCraft, ali ne stilu koji ste izabrali, ne radi ništa, a statusna traka kaže gde je njegov alat otišao (u pregledu PDF-a, Pokazna oznaka je Q). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvek zadržavaju svoje značenje. Dok kucate u polju za tekst, pokaznu oznaku ili belešku, svaki taster pripada tekstu, a brojevi ukucani dok crtate i dalje otvaraju polje za dužinu.
:::

## Prilagodite po sebi

1. Izaberite stil koji je najbliži onome što želite, pa kliknite {{ui:Customize…}}.
2. Na {{ui:Keys and menus}} pronađite alat (pomaže polje za pretragu). Kliknite {{ui:Add a key}} i pritisnite taster, ili dva tastera zaredom za dvoslovni taster. Kliknite taster da ga uklonite.
3. Sa trakom menija, {{ui:Where it sits}} premešta alat u drugi meni ili na {{ui:Keys only}}.
4. Na {{ui:Mouse}} podesite točkić i dugmad koja pomeraju list.
5. Dajte mu ime i kliknite {{ui:Save}}.

Čuvanje ugrađenog stila pravi vašu kopiju („Moj pregled PDF-a“); ugrađeni se nikada ne menja. Taster dodeljen dvama alatima prikazuje se crveno i mora da se popravi pre čuvanja.

## Miš

- **Točkić miša**: {{ui:Scroll up zooms in}} (početak) ili {{ui:Scroll up zooms out}}, i koliko brzo. Štipanje na dodirnoj tabli uvek zumira u smeru u kome se kreću prsti.
- **Pomeranje lista** srednjim dugmetom, desnim dugmetom, ili oboma. {{key:Space}} i prevlačenje, kao i alat {{ui:Pan}}, uvek pomeraju pogled; levo dugme inače crta i bira, pa štiklirano ovde ništa ne menja.
- Program MarkupCraft nema 3D prikaz, pa 3D dugmad ovde ne rade.

## Ponesite sa sobom

{{ui:Export}} čuva stil koji se koristi kao malu datoteku `.ccinput.json`; {{ui:Import…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može da upućuje samo na sopstvene alate programa MarkupCraft: sve drugo u njoj se izostavlja i broji u statusnoj traci. {{ui:Delete this style}} uklanja jedan vaš stil.

:::note
Ova podešavanja ostaju u ovom pregledaču. {{ui:Use this style in every app}} ispod kartica sa stilovima čini da se svaka aplikacija otvara u odgovarajućem stilu: {{ui:PDF review}} ide uz stilove trake menija drugih aplikacija, {{ui:Ribbon}} uz njihove trake, a sopstvena traka sa alatima programa MarkupCraft uz njihove. Aplikacija bez odgovarajućeg stila zadržava svoj.
:::

:::tip
Rasporedi radnog prostora u {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}}) prave traku od kartica stila {{ui:Ribbon}}, a kutiju sa alatima od trake sa alatima programa MarkupCraft, tako da svaki alat radi isto u njima.
:::

Povezano: [Tastatura i miš](topic:keyboard) · [Podešavanja programa MarkupCraft](topic:settings) · [Prelazak sa drugog softvera za označavanje](topic:coming-from)

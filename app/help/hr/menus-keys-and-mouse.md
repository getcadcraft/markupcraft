---
title: Izbornici, tipke i miš
summary: Odaberite MarkupCraftovu alatnu traku, izbornu traku za PDF pregled ili vrpcu, dodijelite bilo kojem alatu vlastitu tipku, premjestite alate među izbornicima i postavite što kotačić i tipke miša rade.
keywords: stil izbornika, izbornici, izborna traka, alatna traka, vrpca, kartice, pregled PDF-a, prečaci tipkovnice, tipke, prilagodi, ponovno dodijeli, miš, kotačić, obrni, smjer zumiranja, srednja tipka, desna tipka, pomicanje, izvoz, uvoz, prebacivanje
from: 081438a6
---

MarkupCraftovi alati isti su bez obzira na to kojim putem do njih dolazite. **Stil izbornika** odlučuje samo gdje su smješteni na ekranu, kako se zovu i koje ih tipke biraju. Odaberite ga u {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}; promjena je odmah i ovaj preglednik je pamti.

## Tri stila

| Stil | Što dobivate |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraftova vlastita alatna traka (Datoteka, Odabir, Crtanje, Revizija, Bilješke, Mjerenje, Uređivanje) i njene jednoslovne tipke: {{key:V}} odabir, {{key:H}} pomicanje, {{key:P}} olovka, {{key:I}} isticanje, {{key:L}} linija, {{key:A}} strelica, {{key:R}} pravokutnik, {{key:E}} elipsa, {{key:C}} oblak, {{key:K}} oblačić, {{key:T}} tekst, {{key:N}} bilješka, {{key:S}} pečat, {{key:M}} duljina, {{key:Q}} površina, {{key:U}} brojanje. Polazni stil. |
| {{ui:PDF review}} | Izbornu traku ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) iznad reda alata za pregled, s tipkama postavljenim kako ih postavljaju programi za pregled PDF-a: {{key:V}} odabir, {{key:Shift+V}} pomicanje, {{key:H}} isticanje, {{key:Q}} oblačić, {{key:N}} poligon, {{key:Shift+N}} polilinija, {{key:Shift+T}} bilješka, {{key:Shift+A}} luk, a mjerenja na {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibriraj, {{key:Alt+Shift+L}} duljina, {{key:Alt+Shift+G}} kut, {{key:Alt+Shift+A}} površina, {{key:Alt+Shift+C}} brojanje. {{key:Alt+L}} otvara popis oznaka. Srednja tipka pomiče; desni klik ne. |
| {{ui:Ribbon}} | Kartice nazvane po poslu: {{ui:Mark up}} (odabir, crtanje, oblaci, oblačići, tekst, bilješke, pečati), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}} (popis oznaka i njegovi izvozi, BCF teme, popis nedostataka, zapisi na terenu, alatnica, usporedba), {{ui:Pages}} i {{ui:View}}, s {{ui:File}} i brzim gumbima za otvaranje, spremanje, poništavanje i ponavljanje. Alati zadržavaju MarkupCraftove jednoslovne tipke. Gumb za ploču koja nije otvorena prvo otvara tu ploču. |

Svaki stil zadržava tipke {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} za prilagodbu stranice i {{key:Mod+9}} za prilagodbu širine; {{key:PageUp}} i {{key:PageDown}} mijenjaju list.

:::tip
Tipka koja pripada rasporedu MarkupCraftove alatne trake, ali ne i stilu koji ste odabrali, ne radi ništa, a statusna traka kaže gdje je njen alat otišao („U pregledu PDF-a, Oblačić je Q“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje. Dok upisujete u tekstni okvir, oblačić ili bilješku, svaka tipka pripada tekstu, a brojevi upisani dok crtate i dalje otvaraju okvir za duljinu.
:::

## Prilagodite za sebe

1. Odaberite stil koji je najbliži onome što želite, zatim kliknite {{ui:Customize…}}.
2. Na {{ui:Keys and menus}} pronađite alat (okvir za pretragu pomaže). Kliknite {{ui:Add a key}} i pritisnite tipku, ili dvije tipke zaredom za dvoslovnu tipku. Kliknite tipku da je uklonite.
3. S izbornom trakom, {{ui:Where it sits}} premješta alat u drugi izbornik ili na {{ui:Keys only}}.
4. Na {{ui:Mouse}} postavite kotačić i tipke koje pomiču list.
5. Dajte mu ime i kliknite {{ui:Save}}.

Spremanje ugrađenog stila stvara vašu kopiju („Moj pregled PDF-a“); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvama alatima prikazuje se crveno i mora se popraviti prije spremanja.

## Miš

- **Kotačić miša**: {{ui:Scroll up zooms in}} (zadano) ili {{ui:Scroll up zooms out}}, i koliko brzo. Stiskanje na trackpadu uvijek zumira u smjeru kojim se pomiču prsti.
- **Pomicanje lista pomoću**: srednje tipke, desne tipke ili obje. {{key:Space}} i povlačenje te alat {{ui:Pan}} uvijek pomiču; lijeva tipka inače crta i odabire, pa njeno štikliranje ovdje ništa ne mijenja.
- MarkupCraft nema 3D prikaz, pa 3D gumbi ovdje ne rade ništa.

## Ponesite sa sobom

{{ui:Export}} sprema stil u uporabi kao mali `.ccinput.json` datoteku; {{ui:Import…}} dodaje jednu, s drugog računala ili od kolege. Uvezena datoteka može pokazivati samo na MarkupCraftove vlastite alate: sve drugo u njoj se izostavlja i broji u statusnoj traci. {{ui:Delete this style}} uklanja jedan vaš.

:::note
Ove postavke ostaju u ovom pregledniku. {{ui:Use this style in every app}} ispod kartica stila čini da se svaka aplikacija otvara u svom odgovarajućem stilu: {{ui:PDF review}} ide uz izborne trake drugih aplikacija, {{ui:Ribbon}} uz njihove vrpce, a MarkupCraftova alatna traka uz njihovu. Aplikacija bez odgovarajućeg stila zadržava svoj.
:::

:::tip
Rasporedi radnog prostora u {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}}) grade svoju vrpcu od kartica stila {{ui:Ribbon}}, a alatnicu od MarkupCraftove alatne trake, pa se svaki alat u njima pokreće jednako.
:::

Povezano: [Tipkovnica i miš](topic:keyboard) · [Postavke MarkupCrafta](topic:settings) · [Dolazak iz drugog softvera za označavanje](topic:coming-from)

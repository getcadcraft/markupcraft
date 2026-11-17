---
title: Odprite komplet listov in se premikajte med listi
summary: Odprite eno ali več datotek PDF ali začnite s praznimi stranmi, poiščite liste po številki ali imenu, povečajte in pomikajte pogled ter preimenujte list, če ga datoteka napačno poimenuje.
keywords: odpri, novo, prazna stran, prazen list, skica, mreža, brez naslova, komplet listov, listi, strani, sličice, oznake strani, številka lista, glava risbe, preimenuj, krmarjenje, povečava, pomik, prilagodi, išči liste
from: 1e7f4d50
---

## Odprite komplet

1. Izberite {{ui:Odpri}} v orodni vrstici ali pritisnite {{key:Mod+O}}.
2. V izbirniku datotek izberite vse datoteke PDF kompleta ({{pick:mac=držite ⌘ in kliknite vsako datoteko|windows linux=držite Ctrl in kliknite vsako datoteko}} ali izberite obseg s Shift), nato potrdite.
   Ali povlecite datoteke iz {{pick:mac=Finderja|windows=Raziskovalca|linux=upravitelja datotek}} na območje lista. Med vlečenjem se prikaže „Spustite PDF-je, da jih odprete“.
3. Počakajte, dokler vrstica stanja ne prikaže „Odpiranje <file>…“. Pri velikih datotekah šteje: „(10 od 60 listov)“.

Rezultat: seznam {{ui:Listi}} prikaže vsako stran vsake datoteke v vrstnem redu, v katerem ste jih odprli, vrstica stanja pa napiše nekaj takega kot „Odprte 3 datoteke (42 listov v kompletu).“ Če so datoteke že imele komentarje, doda, koliko jih je bilo prebranih.

Kasneje lahko v komplet dodate še datoteke: odprite jih na enak način. Pridružijo se na koncu seznama.

## Začnite s praznimi stranmi

Če želite skicirati ali pisati opombe brez risbe, naredite prazne strani namesto odpiranja PDF:

1. Izberite {{ui:Novo}} v orodni vrstici ali {{ui:Začni s prazno stranjo}} na začetnem zaslonu ali pritisnite {{key:Mod+N}}, kjer brskalnik to dovoli (namizna aplikacija in Studio to vedno dovolita).
2. Izberite {{ui:Velikost papirja}}: Letter, Tabloid ali ANSI B, ARCH D, ARCH E, A4, A3 ali A1, ter {{ui:Pokončno}} ali {{ui:Ležeče}}.
3. Izberite {{ui:Mreža}}: {{ui:Brez}}, {{ui:Pike}} ali {{ui:Kvadrati}}. Mreža je na vsakih 1/4 in, z debelejšo črto na vsakih 1 in na palčnem papirju, ter na vsakih 5 mm, z debelejšo črto na vsakih 10 mm na metričnem papirju. Natisne se na strani.
4. Vpišite, koliko {{ui:Strani}} želite, od 1 do 20, nato izberite {{ui:Ustvari}}.

Rezultat: nova datoteka PDF z imenom „Untitled-1.pdf“ (nato „Untitled-2.pdf“ in tako naprej) se odpre kot vsaka druga datoteka, ustvarjena tukaj na tem računalniku. Delujejo vsa orodja, {{ui:Shrani}} pa prenese „Untitled-1 (marked up).pdf“. MarkupCraft si zapomni vaše izbire za naslednjič.

Strani nimajo merila: vrstica stanja pravi „Ni kalibrirano“. Mreža ni merilo. Za merjenje najprej kalibrirajte list ali izberite merilo; glejte [Kalibrirajte in merite](topic:calibrate-and-measure).

Če želite prazni komplet dopolniti s stranjo, odprite enega od njegovih listov in izberite {{ui:Dodaj prazno stran}} pod seznamom {{ui:Listi}}. Nova stran ima enak papir in mrežo ter gre na konec. Kot vsaka sprememba strani je ni mogoče razveljaviti; glejte [Natisnite in spremenite strani](topic:pages-and-printing).

## Kako listi dobijo imena

MarkupCraft poimenuje vsak list „<številka lista> — <naslov>“, na primer „A-101 — Tloris“, iz prvega od teh, ki ga najde:

1. Ime, ki ste ga vpisali z {{ui:Preimenuj list}} (spodaj).
2. Oznake strani datoteke PDF, če jih je nastavila oseba, ki je datoteko naredila (na primer „A-101“).
3. Glava risbe: MarkupCraft prebere besedilo strani in išče nekaj, kar je oblikovano kot številka lista (A-101, A1.01, M-201A, KA1-1), pri tem daje prednost spodnjemu desnemu kotu, desnemu robu in spodnjemu pasu, ter za naslov vzame najobsežnejše besedilo v bližini.
4. Sicer ime datoteke in stran: „Tlorisi — stran 3“.

Če želite videti, kateri način je bil uporabljen, pritisnite {{key:Esc}}, dokler ni nič izbrano in je {{ui:Izbor}} vklopljen, nato poglejte {{ui:Lastnosti}}: „Prebrano iz“ pove „Oznaka strani“, „Glava risbe“, „Ime datoteke“ ali „Vpisano ročno“.

:::note
Skenirani listi in datoteke PDF, katerih črke so bile izvožene kot črte, nimajo besedila za branje. Imenujejo se po datoteki in strani, dokler jih ne preimenujete. MarkupCraft zaenkrat še ne zna brati besedila s slik.
:::

## Premikanje med listi

- Kliknite list v {{ui:Listi}}.
- Pritisnite {{key:PageDown}} za naslednji list in {{key:PageUp}} za prejšnjega ali uporabite puščice v vrstici pod listom.
- Vpišite v {{ui:Išči liste}}: del številke („A-2“), besedo iz naslova („streha“) ali ime datoteke. Seznam se zoži med tipkanjem („4 od 42“). Pritisnite {{key:Enter}}, da odprete prvi zadetek. Izbrišite polje, da spet vidite vse liste.

Vsak list ohrani svojo povečavo in položaj, dokler ne zaprete kompleta.

## Povečava in pomik

:::mouse
- **Povečava:** zavrtite kolesce nad listom. Povečava poteka okoli kazalca. Lahko pritisnete {{key:Plus}} in {{key:Minus}} (tudi z {{key:Mod}}) ali uporabite gumbe za povečavo. V polje za povečavo vpišite točen odstotek.
- **Prilagoditev:** {{ui:Prilagodi strani}} ({{key:Mod+0}}) pokaže ves list; {{ui:Prilagodi širini}} ({{key:Mod+9}}) zapolni širino.
- **Pomik:** povlecite s srednjim gumbom (kolesce), ali z desnim gumbom, ali držite {{key:Space}} in povlecite, ali izberite {{ui:Pomik}} ({{key:H}}) in povlecite. Ko nič ni izbrano, se list premika tudi s puščičnimi tipkami.
:::

:::mac mouse
Na sledilni ploščici Mac dvoprstno drsenje povečuje (ne premika lista). Za pomik držite {{key:Space}} in povlecite z enim prstom ali preklopite na {{ui:Pomik}} s {{key:H}}. Stisk s prstoma povečuje v Chrome, Edge in Firefox.
:::

:::touch
- **Povečava in pomik:** postavite dva prsta na list. Razmaknite ali stisnite ju za povečavo okoli točke med njima, premaknite ju skupaj za pomik. Oboje se zgodi hkrati.
- **Pomik z enim prstom:** najprej izberite {{ui:Pomik}}. Pri vsakem drugem orodju en prst riše ali izbira.
- {{ui:Prilagodi strani}} in {{ui:Prilagodi širini}} sta v vrstici pod listom.
:::

Povečate lahko veliko čez cel list in do 6400 %. List se ponovno izriše ostro malo po tem, ko nehate premikati.

## Zaznamki

{{ui:Zaznamki}} na vrhu podokna {{ui:Listi}} prikaže zaznamke (oris) datoteke PDF, ki ji pripada odprti list. Izberite enega, da greste na njegovo stran. Svinčnik preimenuje zaznamek, križec ga odstrani. {{ui:Zgradi iz listov}} naredi en zaznamek za vsak list, poimenovan tako, kot ga prikazuje seznam listov (številka lista in naslov), {{ui:Dodaj za ta list}} pa doda enega za list, na katerem ste. Spremembe so del neshranjenega dela datoteke: {{ui:Shrani}} jih zapiše v kopijo, kjer jih vsak bralnik PDF prikaže.

## Obračanje pogleda

Dva gumba za obračanje na desni strani vrstice pod listom obrneta pogled za četrt obrata v obe smeri, za list, narisan postrani. Obrne se samo pogled: datoteka PDF in njene oznake ostanejo take, kot so, naslednji list pa se odpre tako, kot je v svoji datoteki PDF (vsak list si med odprtim kompletom zapomni svoj obrat). Besedilo, ki ga dodate na obrnjenem pogledu, se bere pokonci, kot ga vidite. Če želite obrniti samo stran v shranjeni datoteki PDF, uporabite {{ui:Strani}}, nato {{ui:Zasukaj stran v smeri urnega kazalca}}; glejte [Natisnite in spremenite strani](topic:pages-and-printing).

## Preimenovanje lista

Ko je ime lista napačno ali manjka:

1. Prikažite list.
2. Pritisnite {{key:Esc}}, dokler ni nič izbrano in je orodje {{ui:Izbor}} vklopljeno. {{ui:Lastnosti}} zdaj prikazujejo list.
3. Izberite {{ui:Preimenuj list}}.
4. Vpišite {{ui:Številka lista}} in {{ui:Naslov}}, nato izberite {{ui:Shrani}}.

Rezultat: seznam listov, vrstica pod listom in seznam oznak uporabljajo novo ime, pri „Prebrano iz“ pa piše „Vpisano ročno“. Preimenovanje lahko razveljavite z {{key:Mod+Z}}.

Če se želite vrniti k temu, kar piše v datoteki, ponovno odprite {{ui:Preimenuj list}}, izbrišite obe polji in izberite {{ui:Shrani}}.

Ko shranite, vpisana številka lista postane oznaka strani v datoteki PDF, zato drugi bralniki PDF v svojem polju strani prikažejo „A-101“. Če dodelite številko kateri koli strani datoteke, bo vsaka stran te datoteke v kopiji dobila oznako (njeno vpisano številko, sicer prejšnjo oznako, sicer številko strani). Vpisani naslov MarkupCraft ohrani, drugi bralniki ga ne prikažejo.

## Odnesite PDF v TakeoffCraft ali ga pripeljite sem

Ko je TakeoffCraft odprt na istem mestu (v laboratoriju, Try ali spletnih aplikacijah), ima vrstica pod listom {{ui:Odpri v TakeoffCraft}}. Odpre datoteko PDF lista v TakeoffCraft v novem zavihku, tako kot je bila odprta tukaj, da na njej lahko merite količine. Vaše oznake ostanejo tukaj; shranite jih kot ponavadi.

Gumb {{ui:MarkupCraft}} v TakeoffCraft naredi isto v obratni smeri: datoteka PDF se odpre tukaj, kot da ste izbrali {{ui:Odpri}}. Če brskalnik blokira nov zavihek, dovolite pojavna okna za to spletno mesto in znova izberite gumb.

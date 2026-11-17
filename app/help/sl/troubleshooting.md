---
title: Odpravljanje težav
summary: Sporočila, ki jih prikazuje MarkupCraft, in kaj storiti zanje, ter popravki za stvari, ki se zdijo, da ne delujejo.
keywords: težava, napaka, ne deluje, pomoč, sporočilo, se ne odpre, ni mogoče shraniti, geslo, zaščiteno, meritev zavrnjena, kalibriraj, brez povezave, prazno, počasno, izgubljene označbe, vprašaji
from: bb650b39
---

Večina težav je razloženih v vrstici stanja na dnu zaslona. Najprej jo preberite.

## Odpiranje datotek

**„MarkupCraft odpira datoteke PDF. ‚x‘ ni PDF.“**
Izbrali ali spustili ste nekaj drugega. Odprejo se samo datoteke PDF. Najprej izvozite risbe iz svojega programa CAD kot PDF.

**'„ime“ za odpiranje potrebuje geslo. Odprite nezaščiteno kopijo.'**
Datoteka PDF je zaščitena z geslom. Prosite pošiljatelja za nezaščiteno kopijo ali jo odprite v programu za PDF, kjer poznate geslo, in shranite kopijo brez gesla.

**'„ime“ ni bilo mogoče prebrati kot PDF (…)'**
Datoteka je poškodovana ali ni prava datoteka PDF (nepopolen prenos, odrezana priloga e-pošte). Prenesite jo znova. Če jo lahko odprejo drugi programi za PDF, uporabite njihovo možnost „shrani kot“ za čisto kopijo in jo odprite.

**„Nekatere datoteke se niso odprle“**
Ko odprete več datotek naenkrat, to polje navede datoteke, ki niso uspele, in zakaj. Ostale so odprte.

**„Bralnika PDF ni bilo mogoče naložiti: …“**
Motorja PDF ni bilo mogoče pridobiti. Na spletu: znova naložite stran in poskusite še enkrat; preverite, ali požarni zid ali blokator vsebine ne blokira spletnega mesta. Brez povezave: MarkupCraft ni shranjen za delo brez povezave v tem brskalniku (vrstica na vrhu ne piše „Pripravljeno za delo brez povezave“). Pojdite na splet, izberite {{ui:Shrani za delo brez povezave}} in počakajte na „Pripravljeno za delo brez povezave“. Glejte [Delo brez povezave](common:offline).

**„Nekatere označbe se lahko na zaslonu prikažejo dvakrat“ ali „Dodatnih podrobnosti označb ni bilo mogoče prebrati“**
Obstoječi komentarji datoteke so nenavadni. Kljub temu se odprejo, kolikor jih lahko MarkupCraft. Preverite jih, preden se nanje zanesete. Shranjevanje še vedno deluje.

**List ima napačno ime ali „stran 3“**
Glejte [Kako listi dobijo imena](topic:open-a-plan-set#how-sheets-get-their-names). Skenirani listi nimajo besedila za branje; uporabite {{ui:Preimenuj list}}.

**Isti listi se pojavijo dvakrat**
Ista datoteka je bila odprta dvakrat. Izberite {{ui:Zapri}} (če je treba, najprej shranite) in nabor znova odprite.

## Risanje in izbiranje

**Ko kliknem na list, se ne zgodi nič**
Preverite, katero orodje je pritisnjeno v orodni vrstici, in preberite vrstico stanja. Pri {{ui:Pravokotnik}}, {{ui:Elipsa}} in {{ui:Oblak}} klik brez vlečenja ne nariše ničesar: povlecite. Pri {{ui:Polilinija}}, {{ui:Mnogokotnik}}, {{ui:Prosti oblak}} in {{ui:Površina}} se točke dodajajo: dokončajte z dvoklikom ali {{key:Enter}}.

**„Mnogokotnik potrebuje vsaj 3 točke.“ (ali 2 za polilinijo)**
Pred dokončanjem kliknite več točk.

**„Nič ni vnesenega, zato besedilo ni bilo dodano.“**
Besedilna polja in oblački se ohranijo le, če imajo besedilo. Narišite ga znova in pred klikom drugam vnesite besedilo.

**„Točki sta enaki. Kliknite dve različni točki.“**
Pri črtah, puščicah, dolžinah in kalibraciji morata biti krajišči narazen. Povlecite ali kliknite dvakrat na različnih mestih.

**Označbe ne morem premakniti ali izbrisati; ima sivi črtkani okvir**
To je komentar samo za branje, ki je prišel z datoteko (na primer označba poudarjenega besedila). MarkupCraft ga ohrani takega, kot je: nanj lahko samo odgovorite. Vrstica stanja pravi: „označbe samo za branje so ohranjene kot v datoteki“.

**Tipke pišejo črke v polje namesto da izberejo orodja**
Kazalec je v besedilnem polju (odgovor, polje v {{ui:Lastnosti}}, iskanje po listih). Najprej kliknite na prazen del območja lista ali pritisnite {{key:Esc}}, če urejate besedilo označbe.

**{{key:Space}} ne premakne pogleda ali puščične tipke ne delujejo**
Pravkar ste kliknili gumb orodne vrstice, zato ima še vedno tipkovnico. Namesto tega povlecite s srednjim gumbom miške ali enkrat kliknite list z vklopljenim {{ui:Izbor}} in poskusite znova. Glejte tudi [Tipkovnica in miška](topic:keyboard#when-a-key-does-nothing).

**Stiskanje na zaslonu za dotik je pustilo sled**
Orodje za vlečenje (pero, oblak, pravokotnik) se je začelo, preden je prišel drugi prst, in se končalo, preden je bilo preklicano. Pritisnite {{ui:Razveljavi}}. Ko želite povečati, postavite oba prsta hkrati.

## Merjenje

**„Najprej kalibrirajte ta list: izberite dve točki na znani razdalji ali izberite njegovo merilo. Nato merite.“**
Vsak list potrebuje lastno merilo, preden se uporabita {{ui:Dolžina}} ali {{ui:Površina}}. MarkupCraft je preklopil na {{ui:Kalibriraj}}: kliknite oba konca znane kote in vnesite njeno dolžino ali kliknite gumb merila v vrstici stanja in izberite merilo. Glejte [Kalibriranje lista in merjenje](topic:calibrate-and-measure).

**'To ni dolžina, ki jo MarkupCraft razume.'**
Vnesite jo kot `24'-0"`, `12' 6 1/2"`, `7.2 m` ali `900 mm`. Glejte [Enote, dolžine in merila](topic:units-and-scales).

**Meritve so malo ali precej narobe**
- Prednastavljeno merilo na PDF, ki ni v polni velikosti, meri napačno. Kalibrirajte namesto tega po dolgi znani koti.
- Ločilo za tisočice je bilo prebrano kot decimalna pika: `1,200 mm` pomeni 1.2 mm. Vnesite `1200 mm`.
- Povečajte, ko klikate krajišča.
- Risba morda ni v merilu („NTS“).

**„Najprej izberite skupino štetja, nato z {{key:Shift}}+klikom kliknite oznako, da jo odstranite.“**
Izberite {{ui:Izbor}}, kliknite skupino štetja, nato znova izberite {{ui:Štetje}} in s {{key:Shift}}+klikom kliknite piko.

## Shranjevanje

**„Ta PDF je zaščiten (šifriran), zato označene kopije ni mogoče zapisati.“**
Datoteka prepoveduje spremembe. Zahtevajte nezaščiteno kopijo. Medtem lahko še vedno izvozite seznam označb kot CSV ali BCF.

**„Pisalnika PDF ni bilo mogoče naložiti: …“**
Običajno ste brez povezave in aplikacija ni bila shranjena za delo brez povezave (v vrstici na vrhu ni „Pripravljeno za delo brez povezave“). Vaše označbe so še vedno v zavihku: pustite ga odprtega, pojdite na splet in znova izberite {{ui:Shrani}}. Nato izberite {{ui:Shrani za delo brez povezave}}, da bo delovalo brez povezave naslednjič; shranjena kopija vključuje pisalnik PDF.

**„Ni mogoče shraniti <datoteka>“**
Polje pove, zakaj. Vaše označbe so še vedno v zavihku. Poskusite znova; če se napaka ponovi, izvozite CSV, da komentarji ne bodo izgubljeni, in sporočite sporočilo.

**Izbral sem Shrani, a je prispevala samo ena datoteka**
Brskalnik je blokiral dodatne prenose. Poiščite obvestilo v naslovni vrstici in temu spletnemu mestu dovolite prenos več datotek, nato shranite znova.

**Shranjene datoteke ne najdem**
Shranjena je bila v mapo prenosov v brskalniku. Odprite seznam prenosov brskalnika (v Chrome in Edge {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; v Firefox in Safari gumb za prenose v orodni vrstici), da vidite, kje je. Glejte [Brskalniki in računalniki](common:browsers).

**Nekatero besedilo kaže „?“ v drugih bralnikih PDF**
Znaki zunaj zahodnoevropskega nabora se v kopiji izpišejo kot „?“. Sporočilo ob shranjevanju jih prešteje. Glejte [Shranjevanje označenega PDF](topic:save-the-marked-up-pdf).

**Žig kaže jutrišnji (ali včerajšnji) datum**
Datumi žigov so v UTC. Glejte [Žigi in lepljive opombe](topic:stamps-and-notes).

## Delo brez povezave

**Gumb za delo brez povezave pravi „Ni mogoče shraniti“**
Nekatere datoteke aplikacije se niso prenesle. Preverite povezavo in znova kliknite gumb; šteje „Shranjevanje N od M“, dokler ne piše „Pripravljeno za delo brez povezave“.

**Gumb za delo brez povezave pravi „Delo brez povezave ni na voljo“**
To okno brskalnika ne more hraniti kopije za delo brez povezave: zasebno okno ali računalnik, katerega pravilnik to preprečuje. Odprite MarkupCraft v običajnem oknu in poskusite znova.

**Brez povezave je aplikacija starejša različica**
Kopija za delo brez povezave je različica, ki ste jo shranili. Ko ste na spletu, kliknite „Pripravljeno za delo brez povezave“ in izberite „Shrani znova (pridobi najnovejšo različico)“. Da sprostite prostor, izberite „Odstrani kopijo za delo brez povezave“. Glejte [Delo brez povezave](common:offline).

**Pomoč se ne odpre**
Pritisnite {{key:F1}} (na Macu s tipko **fn**) ali izberite {{ui:Pomoč}} v vrstici na vrhu. Deluje tudi brez povezave.

## Izgubljene stvari

**Moje označbe so izginile po zaprtju ali ponovnem nalaganju zavihka**
Znova odprite MarkupCraft v istem brskalniku: ponudi vam neshranjeno delo z „Obnovim vaše delo?“. Izberite {{ui:Obnovi}} in shranite PDF. Kopije se hranijo do 30 dni; zasebno okno ali brisanje podatkov spletnega mesta ne pustita nobene. Glejte [Obnovitev vašega dela](common:recover).

**Moje ime, nastavitve orodij ali skrinja orodij so izginili**
Shranjeni so samo v tem brskalniku in so bili izbrisani (podatki spletnega mesta izbrisani, zasebno okno, drug brskalnik ali računalnik ali Safarijevo čiščenje spletnih mest, ki jih nekaj časa niste obiskali). Ime nastavite znova in uvozite izvoženo skrinjo. Glejte [Kaj ostane v tem brskalniku](topic:browser-storage).

**„Skrinje orodij ni mogoče ohraniti v tem brskalniku (shranjevanje je izklopljeno ali polno). Izvozite jo, da jo ohranite.“**
Brskalnik za to spletno mesto noče shraniti podatkov (zasebni način, shranjevanje blokirano z nastavitvijo ali pravilnikom ali polno). Po spremembi skrinjo izvozite in jo naslednjič uvozite.

## Prikaz in hitrost

**List za trenutek izgleda zamegljen**
MarkupCraft med povečevanjem ali pomikanjem pokaže hiter, grob prikaz, po kratkem trenutku, ko nehate, pa ga izriše ostro.

**Vse je počasno z velikim naborom**
Zaprite druge zahtevne zavihke, odprite manj datotek naenkrat in se izogibajte povečavi na največjo na zelo velikih listih. Glejte [Delo z več datotekami hkrati](topic:several-files#big-sets).

**List je temen s svetlimi črtami**
Ste v temi {{ui:Model}}. Izberite {{ui:Papir}} v vrstici na vrhu za temne črte na beli podlagi. Vaše označbe in shranjeni PDF nista prizadeta.

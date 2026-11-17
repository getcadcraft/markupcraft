---
title: Pregled na iPadu ili zaslonu osjetljivom na dodir
summary: Stiskanje, pomicanje i crtanje prstima ili olovkom, što se aktivira pri podizanju, što treba tipkovnicu i kako sigurno čuvati rad na tabletu.
keywords: ipad, tablet, dodir, zaslon osjetljiv na dodir, stiskanje, zumiranje, dva prsta, apple pencil, olovka, prst, teren, gradilište, površina, geste, mobitel
from: 91eb6438
---

MarkupCraft radi s dodirom: na iPadu (Safari ili Chrome), na prijenosnom računalu sa zaslonom osjetljivim na dodir ili na Windows ili Android tabletu s novijim preglednikom. U vodoravnom položaju tablet prikazuje cijeli raspored.

## Geste

| Gesta | Što radi |
|---|---|
| Jedan prst | Crta trenutačnim alatom ili odabire s {{ui:Odabir}} |
| Dva prsta, raširena ili stisnuta | Zumira oko točke između prstiju |
| Dva prsta, zajedno pomaknuta | Pomiče; možete zumirati i pomicati jednim pokretom |
| Drugi prst dok crtate | Poništava ono što je prvi prst započeo i umjesto toga počinje zumiranje |
| Dvostruki dodir ili dodir i držanje | Završava polilinije, poligon, slobodni oblak ili područje |
| Dodir i držanje teksta, oblačića ili bilješke, s {{ui:Odabir}} | Otvara njihov tekst za uređivanje |
| Jedan prst s uključenim {{ui:Pan}} | Pomiče |

Na zaslonu osjetljivom na dodir gumbi alatne trake, izbornici, kartice i gumbi dijaloških okvira su veći, pa ih je lako pogoditi prstom.

## Što se događa pri podizanju

Da prvi prst stiskanja nikad ne ostavi trag, neki se alati aktiviraju kad **podignete** prst, a ne kad ga dodirnete:

- {{ui:Broji}}: točka se dodaje pri podizanju.
- {{ui:Bilješka}}: bilješka se postavlja pri podizanju.
- {{ui:Polilinija}}, {{ui:Poligon}}, {{ui:Slobodni oblak}} i {{ui:Površina}}: svaka točka dodaje se pri podizanju.
- {{ui:Linija}}, {{ui:Strelica}}, {{ui:Duljina}} i {{ui:Kalibriraj}}: kad dodirnete početak, a zatim kraj, kraj se postavlja pri podizanju.

Ako vam prst kliže više nego malo prije podizanja, to se ne računa kao dodir i ništa se ne dodaje. Dodirnite čisto; za ispravak upotrijebite {{ui:Poništi}}.

Alati koje povlačite ({{ui:Olovka}}, {{ui:Isticanje}}, {{ui:Oblak}}, {{ui:Pravokutnik}}, {{ui:Elipsa}}, {{ui:Oblačić}}, {{ui:Tekst}}, {{ui:Pečat}}) počinju čim dodirnete; drugi prst ih poništava.

## Odabir prstom

- Dodirnite oznaku da je odaberete; povucite je da je pomaknete; povucite ručku za promjenu veličine. Nakon što prst dodirne list, oznake i ručke imaju veću metu, a ručke se crtaju veće.
- Povucite preko praznog lista da nacrtate okvir za odabir (s lijeva na desno: u potpunosti unutar; s desna na lijevo: dodiruje).
- U {{ui:Odabir}} jedan prst **ne** pomiče. Upotrijebite dva prsta ili odaberite {{ui:Pan}}.

## Stvari koje trebaju tipkovnicu

Bez tipkovnice nema {{key:Shift}}, {{key:Esc}} ili {{key:Enter}}. Evo što raditi umjesto toga:

| Radnja tipkovnice | Bez tipkovnice |
|---|---|
| {{key:Esc}} za odustajanje ili povratak na Odabir | Dodirnite {{ui:Odabir}} na alatnoj traci |
| {{key:Shift}} za linije pod 45°, kvadrate i kružnice | Crtajte pažljivo; podesite ručkama |
| {{key:Shift}}-klik za dodavanje u odabir | Upotrijebite okvir za odabir |
| {{key:Shift}}-klik za uklanjanje točke brojanja | {{ui:Poništi}} odmah nakon pogrešnog dodira |
| {{key:Mod+Enter}} za završetak tipkanja | Dodirnite izvan okvira za tekst |
| {{key:Enter}} za završetak polilinije ili uređivanje teksta oznake | Dodirnite i držite, ili {{ui:Uredi na listu}} u {{ui:Svojstva}} |
| {{key:Delete}} | {{ui:Izbriši}} na alatnoj traci ili u {{ui:Svojstva}} |
| Početak nove grupe brojanja tipkom {{key:Esc}} | Dodirnite prazan list s {{ui:Odabir}}, zatim ponovno dodirnite {{ui:Broji}} |

Kućište s tipkovnicom ili Bluetooth tipkovnica vraća svaku prečicu; na iPadu tipka ⌘ radi za {{key:Mod+Z}} i ostalo.

Gumbi na dodir ne prikazuju savjete. Tipka za svaki alat navedena je u [Tipkovnica i miš](topic:keyboard).

## Olovka i Apple Pencil

Olovka (Apple Pencil, Surface Pen i slično) radi kao miš: crta i odabire te djeluje odmah pri dodiru. Za stiskanje i pomicanje koristite prste. Pritisak ne mijenja debljinu linije.

## Otvaranje i spremanje na iPadu

- {{ui:Otvori}} prikazuje birač Files: iCloud Drive, On My iPad i svaku aplikaciju za pohranu koju ste povezali.
- {{ui:Spremi}} traži preuzimanje; kopija završava u Files, u mapi Preuzimanja (ili mapi postavljenoj u Safarijevim postavkama).

## Čuvajte rad na tabletu

:::warning
iPad Safari ne upozorava prije napuštanja stranice s nespremljenim radom, a iPadOS može ponovno učitati karticu u pozadini da oslobodi memoriju. MarkupCraft u pregledniku čuva kopiju za oporavak i nudi je kad ponovno otvorite (pogledajte [Oporavite svoj rad](common:recover)), ali **spremajte nakon svakog lista ili svakog obilaska**: privatna kartica ne čuva nikakvu kopiju.
:::

- Vaše ime, postavke alata i sanduk alata čuvaju se u tom pregledniku na tom iPadu, kao i na računalu. Pogledajte [Što ostaje u ovom pregledniku](topic:browser-storage).
- **Prije posjeta lokaciji bez signala:** dok ste još na mreži, otvorite MarkupCraft u Safariju (ili Chromeu) na iPadu i odaberite {{ui:Spremi za offline}} na traci na vrhu. Pričekajte dok ne piše „Spremno za offline“ (broji „Spremanje N od M“; čitač i pisač PDF-ova su oko 6 MB). Na lokaciji otvorite istu adresu ili oznaku za nju: otvaranje, označavanje i spremanje PDF-ova rade bez veze. Ako piše „Offline nije dostupno“, nalazite se u privatnoj kartici; upotrijebite običnu. Pogledajte [Rad offline](common:offline).
- Safari uklanja offline kopiju koju niste koristili nekoliko tjedana. Prije putovanja kliknite „Spremno za offline“ i odaberite „Spremi ponovno (preuzmi najnoviju verziju)“.
- Vrlo veliki skupovi listova troše puno memorije. Na tabletu otvorite samo listove koji vam trebaju za posjet.

## Na mobitelu

Radi, ali je ekran malen: dijelovi se slažu jedan ispod drugog (alatna traka, list, traka statusa, paneli, pa popis listova), a alatna traka se pomiče vodoravno. Mobitel koristite za pregled i za brzu bilješku, a tablet ili računalo za pravi pregled.

---
title: Lehe kalibreerimine ja mõõtmine
summary: Määra iga lehe mõõtkava eelseadistuse või teadaoleva mõõtme järgi, siis mõõda pikkusi, pindalu ümbermõõduga ja loenda esemeid.
keywords: kalibreeri, mõõtkava, määra mõõtkava, mõõda, pikkus, kaugus, mõõde, pindala, ruutjalad, ümbermõõt, loenda, kogus, koguste arvestus, joonlaud, arvutamine, liitmine, murd
from: 49a25c6d
---

Pikkused ja pindalad vajavad lehe mõõtkava teadmist. MarkupCraft hoiab mõõtkava **lehe kaupa**: kalibreeri iga leht, millel mõõdad. Loendamine mõõtkavat ei vaja.

Olekuribal on näha praeguse lehe mõõtkava või „Pole kalibreeritud”.

## Vali mõõtkava loendist

Kasuta seda, kui PDF on täissuuruses (24 × 36 leht, mis trükitakse 24 × 36) ja joonis näitab oma mõõtkava.

1. Klõpsa olekuribal mõõtkava nuppu („Pole kalibreeritud”). Avaneb kast „Lehe mõõtkava”.
2. Vali {{ui:Mõõtkava}} all mõõtkava: arhitektuurne (1/32" = 1'-0" kuni 3" = 1'-0"), insener (1" = 10' kuni 1" = 100') või meetriline (1:1 kuni 1:1000).
3. Vali {{ui:Määra mõõtkava}}.

Tulemus: olekuribal on mõõtkava, näiteks `1/4" = 1'-0"`. Arhitektuursed mõõtkavad näitavad pikkusi jalgades ja tollides, insenerimõõtkavad kümnendjalgades, meetrilised kuni 1:50 millimeetrites ja alates 1:100 meetrites.

:::warning
Eelseadistus on õige ainult siis, kui PDF-i pole kokku surutud. Pool-suurusega komplekt või leht, mis oli koostamisel „sobitatud lehele”, mõõdab eelseadistusega valesti. Kalibreeri hoopis teadaoleva mõõtme järgi ja kontrolli igal juhul ühte mõõtu.
:::

## Kalibreeri teadaoleva mõõtme järgi

Kasuta seda pool-suurusega komplektide, skaneeritud lehtede ja ebatavalises mõõtkavas detailide puhul või eelseadistuse kontrollimiseks.

1. Leia usaldusväärne pikk mõõde või graafiline mõõtkavariba.
2. Vali {{ui:Kalibreeri}} rühmas {{ui:Mõõda}} (või vali kastis „Lehe mõõtkava” {{ui:Vali kaks punkti}}).
3. Klõpsa mõõtme ühele otsale, siis teisele. (Või lohista ühest otsast teise.) Suurenda enne täpsuse huvides; {{key:Shift}} hoiab joone 45° sammudes.
4. Kast ütleb, kui kaugel punktid paberil on, ja küsib „Kui kaugel need tegelikult on?”. Sisesta {{ui:Tegelik kaugus}}, näiteks `24'-0"`, `12' 6 1/2"`, `7.2 m` või `900 mm`.
5. Vali {{ui:Näita pikkusi ühikutes}} all, kuidas pikkusi näidatakse: {{ui:Jalad ja tollid}}, {{ui:Kümnendjalad}}, {{ui:Tollid}}, {{ui:Meetrid}} või {{ui:Millimeetrid}}.
6. Vali {{ui:Määra mõõtkava}}.

Tulemus: olekuribal on „Kalibreeritud: 24'-0" üle 1.00 in” (tegelik pikkus ja pikkus paberil) ning mõõtmistööriist, millega kavatsesid mõõta, lülitub tagasi sisse. Kõik viisid pikkuse sisestamiseks on jaotises [Ühikud ja pikkused](topic:units-and-scales).

Tegelik kaugus võib olla ka väike arvutus: `12'6"+3/4"`, `(24'-0")/3` või `2*450mm`. Kasuta `+ - * /` ja sulgusid; arv ilma ühikuta loetakse ühikus, mis on valitud {{ui:Näita pikkusi ühikutes}} all (jalgades {{ui:Jalad ja tollid}} korral). {{ui:Määra mõõtkava}} kasutab tulemust.

Kui MarkupCraft ei suuda sisestatut lugeda, ütleb kast seda: „See ei ole pikkus, mida MarkupCraft mõistab. Proovi 24'-0", 12' 6 1/2", 7.2 m või 900 mm.” Arvutust, mida ta lahendada ei suuda, selgitab ta, miks ja kus: „Sulg ei ole suletud (märk 5).”

## Mõõda pikkust

1. Vali {{ui:Pikkus}} ({{key:M}}).
2. Klõpsa algusele, siis lõpule. Või lohista algusest lõpuni. {{key:Shift}} hoiab joone 45° sammudes.

Tulemus: mõõtejoon märkidega ja selle peale kirjutatud pikkus. Olekuriba kordab seda („Pikkus: 12'-6 1/2" (1/4" = 1'-0").”) ja {{ui:Omadused}} näitab seda {{ui:Pikkus}} all. Jalad ja tollid ümardatakse lähima 1/16 tolli täpsusega.

Kui lehel ei ole veel mõõtkava, lülitub {{ui:Pikkus}} valimisel {{ui:Kalibreeri}} peale ja olekuriba selgitab: „Kalibreeri see leht esmalt: vali kaks punkti teadaolevast kaugusest või vali selle mõõtkava. Seejärel mõõda.” Pärast mõõtkava määramist tuleb {{ui:Pikkus}} tagasi.

## Skitseeri mõõtkavas

Kalibreeritud lehel võid joonistades sisestada tegelikke pikkusi {{ui:Joon}}, {{ui:Nool}}, {{ui:Pikkus}}, {{ui:Murdjoon}}, {{ui:Hulknurk}}, {{ui:Vabakäeline pilv}}, {{ui:Pindala}} või ruumi joonistamisel:

1. Klõpsa esimesele punktile.
2. Suuna kursor sinna, kuhu järgmine lõik läheb, ja sisesta selle pikkus, näiteks `16` (lehe ühikus), `12'6"` või `3.5 m`. Kursori kõrval avaneb kast, kui kirjutad.
3. Vajuta {{key:Enter}}. Punkt tuleb nii kaugele kursori suunas.

Suuna täpseks määramiseks lisa `<` ja nurk kraadides: `8 < 90` läheb 8 jalga otse üles, `4<0` paremale, `10 < 225` alla ja vasakule, nii nagu lehte nähakse (sealhulgas pööratud lehed). Järgmiste nurkade jaoks jätka pikkuste sisestamist ja lõpeta kuju tavapäraselt. {{key:Esc}} sulgeb kasti ilma punkti panemata.

## Mõõda nurka

1. Vali {{ui:Nurk}} ({{key:X}}).
2. Klõpsa ühe haru otsale, siis nurgale, siis teise haru otsale.

Tulemus: kaks haru, väike kaar nurgal ja nurk kraadides kümnendikuni (0° kuni 180°). Nurk ei vaja mõõtkava. {{ui:Omadused}} näitab seda {{ui:Nurk}} all ning loend, CSV ja BCF kannavad seda.

Kalibreeritud lehel näitab {{ui:Kaar}} ({{key:O}}) {{ui:Omadused}} all ka pikkust mööda kõverjoont.

## Mõõda pindala ja selle ümbermõõtu

1. Vali {{ui:Pindala}} ({{key:Q}}).
2. Klõpsa iga ruumi või piirkonna nurgale.
3. Lõpeta topeltklõpsuga, {{key:Enter}}ga või parema klõpsuga (puuteekraanil topeltpuudutusega). {{key:Backspace}} eemaldab viimase nurga.

Tulemus: varjutatud kontuur, pindala ja keskel „Ü”, mis tähistab ümbermõõtu, näiteks „128.00 ruutjalga” ja „Ü 48'-0"”. Jalgade mõõtkavad annavad ruutjalad, tollid ruuttollid, meetrid ruutmeetrid ja millimeetrid ruutmillimeetrid. Pindala vajab vähemalt kolme nurka.

### Väljalõiked

Et jätta välja post, šaht või õu, vali ala ja vali {{ui:Lisa väljalõige}} {{ui:Omadused}} all. Klõpsa väljalõike nurki ala sees ja lõpeta nagu alaga. Väljalõige jääb lahtiseks (varjutamata), selle pindala lahutatakse ja selle servad lisatakse ümbermõõdule: 16' × 8' ruum 4' × 4' väljalõikega näitab „112.00 ruutjalga” ja „Ü 64'-0"”. Lisa neid nii palju, kui vaja; need ei tohi üksteist katta ega ristuda ala kontuuriga. {{ui:Eemalda väljalõiked}} eemaldab kõik ja {{key:Mod+Z}} võtab ühe tagasi.

## Loenda esemeid

1. Vali {{ui:Loenda}} ({{key:U}}).
2. Sisesta {{ui:Omadused}} all {{ui:Grupi nimi}}, näiteks „Põrandakanalid”. (See jääb järgmiseks korraks alles.)
3. Klõpsa lehel igale esemele.

Tulemus: iga klõps lisab nummerdatud punkti, esimesel punktil on silt nagu „Põrandakanalid: 7” ja olekuriba hoiab jooksvat kogusummat.

- **Alusta uut gruppi:** vajuta {{key:Esc}} üks kord (see tühistab valiku), muuda {{ui:Grupi nimi}} ja klõpsa uuesti.
- **Lisa olemasolevasse gruppi:** vali kõigepealt grupp, siis vali {{ui:Loenda}} ja klõpsa.
- **Eemalda märge:** kui grupp on valitud, hoia all {{key:Shift}} ja klõpsa punktil. Viimase punkti eemaldamine eemaldab grupi. Puuteekraanil ilma klaviatuurita kasuta {{key:Mod+Z}} või {{ui:Võta tagasi}}.
- **Nimeta grupp ümber:** vali see ja muuda {{ui:Omadused}} all {{ui:Grupi nimi}}.

Loendusgrupp kuulub ühele lehele. Mitme lehe loendused kuvatakse märgistuste loendis eraldi gruppidena.

## Muuda või eemalda mõõtkava

Klõpsa olekuribal mõõtkava nuppu. Kast näitab praegust mõõtkava; vali teine, vali {{ui:Vali kaks punkti}} või vali {{ui:Eemalda mõõtkava}}.

Juba joonistatud pikkused ja pindalad **mõõdetakse uue mõõtkavaga kohe uuesti**. {{ui:Võta tagasi}} toob vana mõõtkava tagasi.

## Kuhu numbrid lähevad

- {{ui:Omadused}} näitab valitud mõõtmise väärtusi.
- {{ui:Märgistused}} vahekaart loetleb iga väärtuse ning selle CSV-s on veerg „Measurement”. Vaata [Märgistuste loend](topic:markups-list-and-export).
- Salvestatud PDF hoiab lehel mõõtkava ja kirjutab pikkused ja pindalad mõõtmiskommentaaridena, et teised PDF-programmid, mis mõõtmisi mõistavad, saaksid need näidata. Vaata [Mis PDF-is hoitakse](topic:what-the-pdf-keeps).

Täieliku koguste arvestuse jaoks koos esemete, koostude ja hindadega kasuta TakeoffCraft'i: MarkupCraft mõõdab ülevaatuseks, mitte hinnastamiseks.

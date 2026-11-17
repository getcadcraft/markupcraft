---
title: Kaj je novega v 0.9
summary: Odložna površina in opombe, ki se nikoli ne natisnejo, šifrirane zasebne opombe in čista kopija za stranko, skupne povezave za ves komplet risb, lok z desetimi načini, sledenje drugemu pregledovalcu v seji v živo in popravek za izbrisane označbe, ki ostajajo v shranjenem PDF.
keywords: kaj je novega, 0.9, opombe o izdaji, dnevnik sprememb, opombe, odložna površina, zasebne opombe, geslo, šifrirano, skrij opombe, prikaži opombe, čista kopija, posnetek, skupne povezave, povezave na liste, lok, načini loka, lok s tremi točkami, polmer, sledi, sledenje, v živo, seznam oseb, izbrisana označba, namigi, naslovi zavihkov, 0.8, 0.8.1, različica, nove funkcije, naloga, naloge, zadolženo, dan roka, zamujeno, preveri zdaj, kaj se je spremenilo, revizije, primerjava, glasovna opomba, odločitev, rdeči popravki, datoteka odgovorov, risar, pomočnik, mcp, težave, jeziki, vnosne naprave, sledilna ploščica, vrstice orodne vrstice, mreža lastnosti, posodobitev
from: dbdd7ed4
---

To je, kaj se je spremenilo v MarkupCraft 0.9 v primerjavi z 0.8.1. Glavna zamisel je, da vaše delovne opombe ostanejo zunaj strani, ki jo dobi stranka, in da se lahko ves komplet risb poveže v enem prehodu.

## Novo

### Opombe, odložna površina in zasebne opombe

- **Odložna površina.** Območje okoli vsakega lista je miza: vse, kar narišete, napišete ali prilepite ob listu, je opomba in se nikoli ne natisne. Izberite {{ui:Pokaži odložno površino}}, da se oddaljite za prostor, ali {{ui:Posnetek na odložno površino}}, povlecite okvir, nato {{ui:Na odložno površino}}, da ob list postavite sliko dela risbe. Posnetek je slika in se ne spremeni, ko se spremeni list. Glejte [Opombe, odložna površina in zasebne opombe](topic:notes-and-pasteboard).
- **Prikaz in skrivanje opomb.** Vsaka označba je lahko opomba: nastavite {{ui:Nove oznake so}} v zavihku {{ui:Zapiski}} ali {{ui:Ta oznaka je}} v {{ui:Lastnosti}}. {{key:Shift+H}} ali stikalo {{ui:Zapiski}} pod listom skrije in pokaže vse opombe naenkrat. Opombe so izpuščene pri tiskanju, sploščenih kopijah, seznamih in izvozih, drugi bralniki PDF pa jih ne prikažejo. Vaš shranjeni PDF jih ohrani za naslednje odpiranje v MarkupCraft.
- **Zasebne opombe.** Izberite {{ui:Nastavite geslo}}, nato označbo nastavite na {{ui:Zasebna opomba}}. Šifrirana je v datoteki z geslom dolgim vsaj 10 znakov, obnovitve pa ni: nihče, tudi mi, ne more odpreti brez gesla. {{ui:Zakleni}} spravi zasebne opombe stran; {{ui:Ostani odklenjeno na tej napravi}} je privzeto izklopljeno.
- **Shranjevanje čiste kopije.** {{ui:Shrani čisto kopijo}} odstrani vsako opombo, zasebno opombo in vse na odložni površini. Uporabite jo za datoteko, ki gre stranki.

### Povezovanje celega kompleta

- **Skupne povezave.** Izberite {{ui:Strani}} › {{ui:Skupinske povezave…}} ali {{ui:Poveži sklice na liste …}} pod {{ui:Iskanje besedila}} v podoknu {{ui:Listi}}. Korak 1 našteje številko in ime vsakega lista, kot sta prebrana iz njegove glave risbe; popravite napačne. Korak 2 našteje najdene sklice, na primer `3/A-501` ali `DETAIL 2 ON A-501`. {{ui:Bo povezano}} pokaže list in pogled za vsakega, {{ui:Ni povezano}} pokaže številke, ki jih noben odprt list nima, {{ui:Ustvari povezave}} pa naredi vse v enem koraku razveljavitve. Ponovite po dopolnilu ali preštevilčenju; povezave, ki ste jih naredili ročno, se nikoli ne spremenijo. Povezava s pogledom se shrani kot povezava PDF, zato tudi drugi bralniki odprejo podrobnost. Glejte [Povezave listov](topic:sheet-links).

### Risba

- **Lok, deset načinov.** Orodje {{ui:Lok}} ({{key:O}}) ima zdaj na strani okno {{ui:Način loka}} z desetimi načini risanja loka; kot, dolžino, polmer in smer lahko kliknete ali vpišete. Glejte [Narišite lok na deset načinov](topic:draw-an-arc).

### Delo skupaj

- **Sledenje pregledovalcu.** V seji v živo izberite {{ui:Sledi}} ob imenu osebe, in vaš pogled se premakne z njenim; ko sami premaknete ali povečate pogled, sledenje preneha. Gostitelj lahko izbere {{ui:Prosi vse, naj sledijo meni}}. Seznam oseb prikaže barvo vsake osebe, njeno ime, list, na katerem je, in čas njene zadnje spremembe. Glejte [Sledenje drugemu pregledovalcu v seji v živo](topic:follow-in-live).

## V vseh aplikacijah

- Namigi so Bootstrap namigi, začetni namig lahko zaprete, vrstice zavihkov se pomikajo, kadar se prelijejo, naslovi zavihkov brskalnika pa se glasijo `<document> — MarkupCraft | CadCraft`.
- Podokno z več razdelki odpre enega in zapre druge (ključavnica ob puščici obdrži enega odprtega); stikalo v nastavitvah to izklopi.
- Vsaka aplikacija se začne s privzeto zbirko elementov knjižnice.
- Enote teže in temperature so na voljo v nastavitvah enot.

## Popravljeno

- **Izbrisane označbe ne ostanejo več berljive v shranjenem PDF.** Shranjevanje je prej odstranilo izbrisano ali prepisano pripombo s strani, a predmet z njenim besedilom je ostal v datoteki. Zdaj shranjevanje te predmete izbriše. Datoteke, shranjene s prejšnjimi izdajami, jih še vsebujejo, dokler jih ne shranite znova.

## Omejitve, ki jih priznavamo

- Skupne povezave so bile preizkušene na naših lastnih testnih kompletih. Pravi kompleti rišejo mehurčke na mnogo načinov, zato se na kompletu stranke nekateri pogledi lahko zgrešijo. Skenirane liste je treba najprej obdelati z {{ui:Preberi besedilo (OCR) …}}.
- Opombe, zasebne opombe in odložna površina so bile preizkušene v brskalniku brez zaslona in na naših datotekah, ne z velikim pravim vektorskim kompletom in ne v pravi seji v živo z dvema osebama. Spreminjanje gesla še ni izdelano. Izdaje, starejše od 0.9, opomb ne prikažejo.
- Pogled razredov je seznam oseb; ni bil preizkušen z resničnim učiteljem in učenci.
- Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere izvorni govorec.
- Namestitveni programi za Windows niso podpisani s kodo ({{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}); slika diska macOS .dmg ni notarizirana (desni klik, nato {{ui:Odpri}}).

## Prej: 0.8 in 0.8.1

To je, kaj se je spremenilo v MarkupCraft 0.8 in 0.8.1 v primerjavi z 0.7. Največja novost je, da je lahko označba naloga, ki jo opravi nekdo ali vaš lastni pomočnik, in se sama zaključi, ko se risba resnično spremeni.

### Novo

**Označbe, ki delujejo**

- **Označbo spremenite v nalogo.** Izberite eno ali več označb, odprite zavihek {{ui:Naloge}} in izberite {{ui:Izbrano spremeni v nalogo}}. Naloga ima naslov, osebo ali vašega povezanega pomočnika, ki jo opravi, neobvezen dan roka in stanje, ohrani pa svoj položaj na listu in svojo nit. Glejte [Označba kot naloga](topic:markups-that-act).
- **Naloge, ki se same zaprejo.** Naloga lahko spremlja risbo znotraj svoje označbe. Odprite novejšo revizijo lista in izberite {{ui:Preveri zdaj}}: če so se črte na tem območju spremenile za več kot za las, je naloga označena kot Končano, njena označba postane Dokončana, v niti pa opomba pove, kaj se je spremenilo. Nov datumski žig ali črte, ki so se premaknile manj kot 1.5 točke, se ne štejejo. Naloga lahko namesto tega spremlja element modela: vaš pomočnik element poroča z `tasks_check`, poročilo, ki se razlikuje, ali izbrisan element pa zaprejo nalogo. En korak razveljavitve jo ponovno odpre.
- **Poiščite delo.** Seznam {{ui:Naloge}} filtrirajte po stanju in po tem, za koga je, vključno z {{ui:Zamujeno}}; izberite {{ui:Zadolženo}}, nato {{ui:Pomočnik}}, da vidite, kaj čaka vašega pomočnika. Naloga, ki je čez rok, se prikaže kot opozorilo v podoknu {{ui:Težave}}. {{ui:CSV}} izvozi seznam. Naloge se shranijo v PDF z označbo in potujejo po seji v živo kot druge lastnosti označb.

**Kaj se je spremenilo, kot navaden seznam**

- **Navedi spremembe.** Odprite zavihek {{ui:Primerjava}}, nato {{ui:Primerjaj celoten komplet listov}}, izberite prejšnjo in novejšo datoteko ter izberite {{ui:Navedi spremembe}}. Seznam se začne s številom, nato zajame vsak spremenjeni list, začenši z največjo spremembo: kje je na listu, kako velika je (v resničnih enotah in tudi v palcih na papirju na kalibriranem listu), ali so bile črte dodane ali odstranjene, koliko označb je tam in katere besede so se pojavile ali izginile. {{ui:Kopiraj seznam}} ga da na odložišče, {{ui:CSV}} pa zapiše eno vrstico na spremembo. Glejte [Seznam sprememb med revizijami](topic:what-changed-in-words).

**Glasovne opombe in odločitve**

- **Glasovne opombe.** V zavihku {{ui:Zapiski}} izberite {{ui:Posnemi glasovno opombo}}, nato {{ui:Ustavi snemanje}}; posnetki se sami ustavijo po dveh minutah. Opomba je pripeta na sredino lista; povlečete jo tja, kamor sodi, napis vpišete v {{ui:Lastnosti}}, na seznamu pa {{ui:Predvajaj}} predvaja. Posnetek je shranjen v PDF.
- **Odločitve.** {{ui:Pripni odločitev}} zapiše stavek ali dva na list. Če nadomešča prejšnjo odločitev, jo izberite v {{ui:Nadomešča}}: stara ostane, označena kot Nadomeščeno, in kaže na novo. En korak razveljavitve jo vrne. Glejte [Pripenjanje glasovnih opomb in odločitev na list](topic:voice-notes-and-decisions).

**Rdeči popravki v reviziji**

- **Pošljite in odgovorite.** V zavihku {{ui:Naloge}} odprite {{ui:Rdeči popravki za revizijo}}, vpišite revizijo, na katero so označbe vezane, in izberite {{ui:Izvozi datoteko rdečih popravkov}}. Dobite datoteko `.redline.json` z eno postavko na odprto označbo: list, položaj (kot ulomki lista, da se ponovni izris v drugi velikosti še vedno ujema), besede, avtor, nit in njena naloga. Kdor riše spremembe, odgovori s Sprejeto, Zavrnjeno ali Končano v datoteki `.redline-answers.json`; {{ui:Naloži datoteko z odgovori …}} da vsaki označbi to stanje in opombo risarja kot en korak razveljavitve. Glejte [Pošljite označbe risarju kot rdeče popravke](topic:redline-to-revision).

**Pomočniki z umetno inteligenco**

- **Več orodij.** Pomočnik, ki ste ga povezali prek CadCraft Studio, lahko navede naloge (`tasks_list`), ustvari ali spremeni eno (`task_set`), odstrani nalogo (`task_clear`), preveri eno glede na novejšo revizijo ali element (`tasks_check`) in prebere navaden seznam sprememb med dvema odprtima kompletoma listov (`revisions_changes`). Dobi samo orodja, ki ste jih obkljukali pod stikalom Pomočniki, vsaka sprememba pa je en korak razveljavitve. Glejte [Uporaba MarkupCraft s pomočnikom z umetno inteligenco](topic:use-with-ai-assistants).

### V vseh aplikacijah

- **Jeziki.** CadCraft Studio ima zdaj 54 jezikov. Deset je novih: litovščina, latvijščina, bosanščina, marati, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina. Vsi neangleški so strojni osnutki, dokler jih ne prebere izvorni govorec.
- **Vnosne naprave.** {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Vnosne naprave}} določi, kaj naredijo sledilna ploščica, stranska gumba miške, pisalo, dotik s prsti, 3D-miška, igralni krmilnik ali krmilnik MIDI, za vse aplikacije ali samo za to. Dokler ničesar ne spremenite, vsaka naprava deluje kot prej. Glejte [Uporaba sledilne ploščice, 3D-miške ali krmilnika](common:input-devices).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ima {{ui:Prelom}} (privzeto), {{ui:2 vrstici}} in {{ui:1 vrstica}}, da ima risba več prostora. Glejte [Razporeditev podokon](common:arrange-panels).
- **Mreža lastnosti.** Polja sloga označbe uporabljajo skupno mrežo z zložljivimi kategorijami ter stolpci za oznako in vrednost.
- **Podokno Težave.** Opozorila iz aplikacije, na primer zamujena naloga, se zberejo v enem podoknu Težave.
- **V živo in dodatki.** Seje v živo so opisane v [Delo skupaj v živo](common:work-together-live); seznam dodatkov, ki sledi vašemu računu, je v [Dodatki in seznam vašega računa](common:addons-basics).
- **Povežite svojo umetno inteligenco.** CadCraft Studio je vozlišče za vašega lastnega pomočnika: povežite enkrat za vseh osem aplikacij. Aplikacije nimajo lastne umetne inteligence.

### Popravljeno v 0.8.1

- **Studio lahko med delovanjem preklopi jezik.** Prej sta namizna aplikacija in pakirane izdaje ostali v angleščini. Še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.
- Namestitve Studio 0.8 se prek {{ui:Nastavitve}} › {{ui:Posodobitve}} ponudijo za 0.8.1.

### Še ni v tej različici

- **Ni podpisano s kodo.** Namestitveni programi za Windows in .dmg za macOS še nimajo podpisa. V sistemu Windows, če SmartScreen ustavi namestitveni program, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu z desno tipko kliknite CadCraft Studio in izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane.
- **Povezava pomočnika z umetno inteligenco je na nekaterih mestih nedokončana.** Povezovanje z enim klikom v Studiu, gostiteljski povezovalnik za pomočnike v brskalniku in lasten ključ API v Studiu za to izdajo nista obljubljena. Zanka nalog je bila preizkušena, vendar še ne z resničnim pomočnikom.
- **Preverjanja nalog zahtevajo isto velikost strani.** List, ponovno izrisan v drugi velikosti, se ne bo ujemal, zato se njegove naloge ne zaprejo. Listi se ujemajo po številki lista, sicer po položaju strani.
- **Glasovne opombe so samo posnetki.** Ni prepisa, pomočnik pa vidi dolžino, avtorja in napis opombe, ne zvoka. Snemanje je bilo preizkušeno z lažnim mikrofonom v brskalniku brez zaslona; pravi mikrofon na telefonu, tabličnem računalniku ali prenosniku še čaka na preizkus.
- **Izračunski listi in razlogi v PDF** se hranijo v zasebnem vnosu datoteke. Starejši MarkupCraft ta vnos prezre in ga ob naslednjem shranjevanju datoteke izbriše, zato datoteko takšne vrste odprite in shranite z 0.8 ali novejšim.
- **Branje rdečih popravkov na strani risarja.** Branje datoteke rdečih popravkov s strani CadCraft in odgovarjanje nanjo še nista izdelana.
- **Drugi jeziki.** Naslovna vrstica v tamilščini je za 528 px preširoka.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet). Za prejšnjo izdajo glejte [Kaj je novega v 0.7](topic:whats-new-0-7).

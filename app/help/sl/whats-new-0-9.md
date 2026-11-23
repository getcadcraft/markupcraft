---
title: Kaj je novega v 0.9 (prej)
summary: Zapiski in odložna površina, ki se nikoli ne natisnejo, šifrirani zasebni zapiski in čista kopija za stranko, skupne povezave za cel nabor risb, orodje Lok z desetimi načini, sledenje drugemu pregledovalcu v seji v živo ter popravek za izbrisane označbe, ki ostanejo v shranjenem PDF.
keywords: kaj je novega 0.9, prejšnja izdaja, kaj je novega, 0.9, opombe o izdaji, dnevnik sprememb, zapiski, odložna površina, zasebni zapiski, geslo, šifrirano, skrij zapiske, pokaži zapiske, čista kopija, posnetek, skupne povezave, sklici na liste, povezave listov, glava risbe, številka lista, dopolnilo, preštevilčenje, povezava pdf, lok, načini loka, lok s tremi točkami, polmer, sledi, sledi meni, v živo, pogled razreda, seznam oseb, izbrisana označba, namigi, naslovi zavihkov, opombe o izdaji, spremembe, 0.8, 0.8.1, različica, nove funkcije, naloga, naloge, pooblaščenec, rok, zamujeno, preveri zdaj, kaj se je spremenilo, revizije, primerjava, glasovna opomba, odločitev, rdeči popravki, datoteka z odgovori, risar, pomočnik, mcp, težave, jeziki, vnosne naprave, sledilna ploščica, vrstice orodne vrstice, mreža lastnosti, posodobitev
from: aa3dfeb8
---

Tu je, kaj se je spremenilo v MarkupCraft 0.9 v primerjavi z 0.8.1. Glavna zamisel je, da vaši delovni zapiski ostanejo zunaj strani, ki jo dobi stranka, cel nabor risb pa je mogoče povezati v enem prehodu.

## Novo

### Zapiski, odložna površina in zasebni zapiski

- **Odložna površina.** Območje okoli vsakega lista je miza: vse, kar je narisano, vpisano ali prilepljeno ob listu, je zapis in se nikoli ne natisne. Izberite {{ui:Pokaži odložno površino}}, da se oddaljite za več prostora, ali {{ui:Posnetek na odložno površino}}, povlecite okvir in nato izberite {{ui:Na odložno površino}}, da del risbe kot sliko postavite ob list. Posnetek je slika in se ne spremeni, ko se spremeni list. Glejte [Zapiski, odložna površina in zasebni zapiski](topic:notes-and-pasteboard).
- **Prikaz in skrivanje zapiskov.** Vsaka označba je lahko zapis: nastavite {{ui:Nove oznake so}} na zavihku {{ui:Zapiski}} ali {{ui:Ta oznaka je}} v {{ui:Lastnosti}}. {{key:Shift+H}} ali stikalo {{ui:Zapiski}} pod listom naenkrat skrije ali prikaže vse zapiske. Zapiski so izpuščeni pri tiskanju, izravnanih kopijah, seznamih in izvozih, drugi bralniki PDF pa jih ne prikažejo. Shranjen PDF jih ohrani za naslednje odpiranje v MarkupCraft.
- **Zasebni zapiski.** Izberite {{ui:Nastavite geslo}} in nato označbo nastavite na {{ui:Zasebna opomba}}. Zapis je v datoteki šifriran z geslom, dolgim vsaj 10 znakov, in obnovitve ni: nihče, tudi mi ne, ga ne more odpreti brez gesla. {{ui:Zakleni}} skrije zasebne zapise; {{ui:Ostani odklenjeno na tej napravi}} je privzeto izklopljeno.
- **Shrani čisto kopijo.** {{ui:Shrani čisto kopijo}} odstrani vse zapise, zasebne zapise in vse na odložni površini. Uporabite jo za datoteko, ki gre stranki.

### Povezava celotnega nabora

- **Skupne povezave.** Izberite {{ui:Strani}} › {{ui:Skupinske povezave…}} ali {{ui:Poveži sklice na liste …}} pod {{ui:Iskanje besedila}} na podoknu {{ui:Listi}}. Korak 1 navede številko in ime vsakega lista, kot sta prebrana iz njegove glave risbe; popravite napačne. Korak 2 navede najdene sklice, na primer `3/A-501` ali `DETAIL 2 ON A-501`. {{ui:Bo povezan}} pokaže list in pogled za vsakega, {{ui:Ni povezano}} pokaže številke, ki jih noben odprt list nima, {{ui:Ustvari povezave}} pa jih ustvari vse v enem koraku razveljavitve. Po dopolnilu ali preštevilčenju zaženite znova; povezave, ki ste jih naredili ročno, se nikoli ne spremenijo. Povezava s pogledom se shrani kot povezava PDF, zato jo drugi bralniki odprejo tudi na podrobnosti. Glejte [Povezave listov](topic:sheet-links).

### Risba

- **Lok, deset načinov.** Orodje {{ui:Lok}} ({{key:O}}) ima zdaj na strani okno {{ui:Način loka}} z desetimi načini risanja loka; kot, dolžino, polmer in smer je mogoče klikniti ali vpisati. Glejte [Nariši lok na deset načinov](topic:draw-an-arc).

### Sodelovanje

- **Sledenje pregledovalcu.** V seji v živo izberite {{ui:Sledi}} ob imenu osebe in vaš pogled se premakne skupaj z njenim; premik ali povečava vas samih ustavi sledenje. Gostitelj lahko izbere {{ui:Prosi vse, naj sledijo meni}}. Seznam oseb prikaže barvo vsake osebe, ime, list, na katerem je, in čas njene zadnje spremembe. Glejte [Sledenje drugemu pregledovalcu v seji v živo](topic:follow-in-live).

## V vseh aplikacijah

- Namigi so Bootstrap namigi, začetni namig je mogoče zapreti, vrstice zavihkov se pomaknejo, ko so preveč široke, naslovi zavihkov v brskalniku pa so `<document> — MarkupCraft | CadCraft`.
- Podokno z več razdelki odpre enega in zapre druge (zaklep ob kazalki ohrani enega odprtega); stikalo v nastavitvah to izklopi.
- Vsaka aplikacija se zažene s privzeto zbirko predmetov knjižnice.
- Enote za težo in temperaturo so na voljo v nastavitvah enot.

## Popravljeno

- **Izbrisane označbe v shranjenem PDF niso več berljive.** Shranjevanje je prej izbrisano ali prepisano anotacijo odstranilo s strani, predmet z njenim besedilom pa je ostal v datoteki. Zdaj shranjevanje te predmete izbriše. Datoteke, shranjene z gradnjami iz prej, jih obdržijo, dokler jih ne shranite znova.

## Iskreno o omejitvah

- Skupne povezave so bile preizkušene na lastnih preskusnih nizih. Pravi nabori rišejo mehurčke na mnogo načinov, zato bi na naboru stranke nekateri pogledi lahko ostali nezaznani. Skenirane liste je treba najprej obdelati z {{ui:Preberi besedilo (OCR) …}}.
- Zapiski, zasebni zapiski in odložna površina so bili preizkušeni v brskalniku brez zaslona in na naših datotekah, ne pa na velikem resničnem vektorskem naboru in ne v pravi seji v živo z dvema osebama. Spreminjanje gesla ni izdelano. Gradnje, starejše od 0.9, zapiskov ne prikažejo.
- Pogled razredov je seznam oseb; ni bil preizkušen z resničnim učiteljem in učenci.
- Jeziki, razen angleščine, so strojni osnutki, dokler jih ne prebere izvorni govorec.
- Namestitveni programi za Windows niso podpisani s kodo ({{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}); slika diska za macOS ni notarizirana (desni klik, nato {{ui:Odpri}}).

## Prej: 0.8 in 0.8.1

Tu je, kaj se je spremenilo v MarkupCraft 0.8 in 0.8.1 v primerjavi z 0.7. Velika novost je, da je lahko označba naloga, ki jo opravi nekdo ali vaš pomočnik, in da se sama zapre, ko se risba resnično spremeni.

### Novo

**Označbe, ki delujejo**

- **Označbo spremenite v nalogo.** Izberite eno ali več označb, odprite zavihek {{ui:Naloge}} in izberite {{ui:Izbrano spremeni v nalogo}}. Naloga ima naslov, osebo ali vašega povezanega pomočnika, ki jo opravi, izbirni rok in stanje; ohrani svoje mesto na listu in svojo nit. Glejte [Označbo spremenite v nalogo](topic:markups-that-act).
- **Naloge, ki se zaprejo same.** Naloga lahko spremlja risbo znotraj svoje označbe. Odprite novejšo revizijo lista in izberite {{ui:Preveri zdaj}}: če so se črte na tem območju spremenile za več kot las, je naloga označena kot Končano, njena označba postane Dokončana, v niti pa opomba pove, kaj se je spremenilo. Nov datumski žig ali črte, ki so se premaknile za manj kot 1.5 točke, se ne štejejo. Naloga lahko namesto tega spremlja element modela: vaš pomočnik element prijavi z `tasks_check`, pozneje pa poročilo, ki se razlikuje, ali izbrisan element zapre nalogo. Ena razveljavitev jo znova odpre.
- **Poiščite delo.** Filtrirajte seznam {{ui:Naloge}} po stanju in po tem, za koga je, vključno z {{ui:Zamujeno}}; izberite {{ui:Zadolženo}}, nato {{ui:Pomočnik}}, da vidite, kaj čaka vašega pomočnika. Naloga, ki je po svojem roku, se pokaže kot opozorilo v podoknu s težavami. {{ui:CSV}} izvozi seznam. Naloge se shranijo v PDF z označbo in potujejo prek seje v živo kot druge lastnosti označb.

**Kaj se je spremenilo, kot navaden seznam**

- **Navedi spremembe.** Odprite zavihek {{ui:Primerjava}}, nato {{ui:Primerjaj cel nabor}}, izberite prejšnjo in novejšo datoteko ter izberite {{ui:Navedi spremembe}}. Seznam se začne s številom, nato pa zajame vsak spremenjen list, največjo spremembo najprej: kje je na listu, kako velika je (v pravih enotah in tudi v palcih papirja na kalibriranem listu), ali so bile črte dodane ali odstranjene, koliko označb je tam in katere besede so se pojavile ali izginile. {{ui:Kopiraj seznam}} ga da na odložišče, {{ui:CSV}} pa zapiše eno vrstico za vsako spremembo. Glejte [Seznam sprememb med revizijama](topic:what-changed-in-words).

**Glasovne opombe in odločitve**

- **Glasovne opombe.** Na zavihku {{ui:Zapiski}} izberite {{ui:Posnemi glasovno opombo}}, nato {{ui:Ustavi snemanje}}; snemanje se samo ustavi po dveh minutah. Opomba je pripeta v središče lista; povlecite jo, kamor spada, v {{ui:Lastnosti}} vpišite napis, {{ui:Predvajaj}} v seznamu pa jo predvaja. Posnetek se shrani v PDF.
- **Odločitve.** {{ui:Pripni odločitev}} zapiše stavek ali dva na list. Če nadomešča prejšnjo odločitev, jo izberite v {{ui:Nadomešča}}: stara ostane, označena kot Nadomeščeno, in kaže na novo. Ena razveljavitev jo vrne. Glejte [Pripenjanje glasovnih opomb in odločitev na list](topic:voice-notes-and-decisions).

**Rdeči popravki za revizijo**

- **Pošljite in odgovorite.** Na zavihku {{ui:Naloge}} odprite {{ui:Rdeči popravki za revizijo}}, vpišite revizijo, na katero se nanašajo označbe, in izberite {{ui:Izvozi datoteko rdečih popravkov}}. Dobite datoteko `.redline.json` z enim elementom za vsako odprto označbo: list, položaj (kot deleži lista, zato se ponovni izris pri drugi velikosti še vedno ujema), besede, avtor, nit in njena naloga. Kdor riše spremembe, odgovori z Sprejeto, Zavrnjeno ali Končano v datoteki `.redline-answers.json`; {{ui:Naloži datoteko z odgovori …}} da vsaki označbi to stanje in opombo risarja kot en korak razveljavitve. Glejte [Pošljite označbe risarju kot rdeče popravke](topic:redline-to-revision).

**Pomočniki z umetno inteligenco**

- **Več orodij.** Pomočnik, ki ste ga povezali prek CadCraft Studio, lahko našteje naloge (`tasks_list`), ustvari ali spremeni eno (`task_set`), odstrani nalogo (`task_clear`), preveri eno glede na novejšo revizijo ali element (`tasks_check`) in prebere navaden seznam sprememb med dvema odprtima naboroma načrtov (`revisions_changes`). Dobi samo orodja, ki ste jih označili pod stikalom {{ui:Pomočniki}}, vsaka sprememba pa je en korak razveljavitve. Glejte [Uporaba MarkupCraft s pomočnikom umetne inteligence](topic:use-with-ai-assistants).

### V vseh aplikacijah

- **Jeziki.** CadCraft Studio ima zdaj 54 jezikov. Deset jih je novih: litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina. Vsi neangleški so strojni osnutki, dokler jih ne prebere izvorni govorec.
- **Vnosne naprave.** {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Vhodne naprave}} določa, kaj naredi sledilna ploščica, stranski gumbi miške, pisalo, dotiki s prsti, 3D miška, igralni krmilnik ali MIDI krmilnik, za vse aplikacije ali samo za to. Dokler ničesar ne spremenite, vsaka naprava deluje kot prej. Glejte [Uporaba sledilne ploščice, 3D miške ali krmilnika](common:input-devices).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ima {{ui:Prelom}} (privzeto), {{ui:2 vrstici}} in {{ui:1 vrstica}}, tako da ima risba več prostora. Glejte [Razporeditev podoken](common:arrange-panels).
- **Mreža lastnosti.** Polja Slog označbe uporabljajo skupno mrežo s skrčljivimi kategorijami ter stolpci za oznako in vrednost.
- **Podokno s težavami.** Opozorila iz aplikacije, na primer zamujena naloga, se zbirajo v enem podoknu s težavami.
- **V živo in dodatki.** Seje v živo so opisane v [Skupno delo v živo](common:work-together-live); seznam dodatkov, ki sledi vašemu računu, je v [Dodatki in seznam vašega računa](common:addons-basics).
- **Povežite svojo umetno inteligenco.** CadCraft Studio je vozlišče za vašega pomočnika: povežite ga enkrat za vseh osem aplikacij. Aplikacije ne vsebujejo lastne umetne inteligence.

### Popravljeno v 0.8.1

- **Studio lahko med delovanjem preklopi jezik.** Prej sta namizna aplikacija in pakirane izdaje ostali v angleščini. To še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.
- Namestitve Studio 0.8 se prek {{ui:Nastavitve}} › {{ui:Posodobitve}} ponudijo za posodobitev na 0.8.1.

### Še ni v tej različici

- **Ni podpisano s kodo.** Namestitveni programi za Windows in datoteka .dmg za macOS še nimajo podpisa. Če SmartScreen ustavi namestitveni program v Windows, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odpri}}. Izdaje za trgovine so začasno zadržane.
- **Povezava umetne inteligence je v nekaterih delih nedokončana.** Povezovanje z enim klikom znotraj Studia, gostujoči priklopnik za brskalniške pomočnike in lasten API ključ znotraj Studia v tej izdaji niso obljubljeni. Zanka nalog je bila preizkušena, vendar še ni z resničnim pomočnikom.
- **Preverjanje nalog zahteva enako velikost strani.** List, ponovno izrisan pri drugi velikosti, se ne bo ujel, zato se njegove naloge ne zaprejo. Listi se ujemajo po številki lista, sicer po položaju strani.
- **Glasovne opombe so samo posnetki.** Ni prepisa, pomočnik pa vidi dolžino, avtorja in napis opombe, ne zvoka. Snemanje je bilo preizkušeno z lažnim mikrofonom v brskalniku brez zaslona; pravi mikrofon na telefonu, tabličnem ali prenosnem računalniku še ni preverjen.
- **Izračunski listi in razlogi v PDF** so shranjeni v zasebnem vnosu datoteke. Starejši MarkupCraft ta vnos spregleda in ga pri naslednjem shranjevanju odstrani, zato takšno datoteko odprite in shranite z 0.8 ali novejšo.
- **Osnutek risarja pri rdečih popravkih.** Branje datoteke rdečih popravkov v CadCraft in odgovarjanje nanjo še ni izdelano.
- **Drugi jeziki.** Vrstica aplikacije za tamilščino se prelije za 528 px.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet). Za izdajo pred to glejte [Kaj je novega v 0.7](topic:whats-new-0-7).

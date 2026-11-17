---
title: Kvarða blað og mæla
summary: Stilltu mælikvarða hvers blaðs eftir forstillingu eða þekktri málsetningu, mældu síðan lengdir, flatarmál með jaðri og talningar.
keywords: kvarða, mælikvarði, stilla mælikvarða, mæla, lengd, fjarlægð, málsetning, flatarmál, fermetrar, jaðar, telja, magn, reglustika, reikningur, útreikningur, plús, brot
from: 49a25c6d
---

Lengdir og flatarmál þurfa að vita mælikvarða blaðsins. MarkupCraft geymir mælikvarða **fyrir hvert blað**: kvarðaðu hvert blað sem þú mælir á. Talningar þurfa engan mælikvarða.

Stöðustikan sýnir mælikvarða núverandi blaðs, eða "Ekki kvarðað".

## Veldu mælikvarða af listanum

Notaðu þetta þegar PDF-skjalið er í fullri stærð (blað 24 × 36 sem prentast í 24 × 36) og teikningin gefur upp mælikvarða sinn.

1. Smelltu á mælikvarðahnappinn í stöðustikunni ("Ekki kvarðað"). Reiturinn "Mælikvarði blaðs" opnast.
2. Undir {{ui:Mælikvarði}} velurðu mælikvarðann: byggingarlistarmælikvarða (1/32" = 1'-0" til 3" = 1'-0"), verkfræðimælikvarða (1" = 10' til 1" = 100') eða metrískan (1:1 til 1:1000).
3. Veldu {{ui:Stilla mælikvarða}}.

Niðurstaða: stöðustikan sýnir mælikvarðann, til dæmis `1/4" = 1'-0"`. Mælikvarðar byggingarlistar sýna lengdir í fetum og tommum, verkfræðimælikvarðar í aukastafafetum, og metrískir mælikvarðar allt að 1:50 í millimetrum og frá 1:100 í metrum.

:::warning
Forstilling er aðeins rétt ef PDF-skjalið hefur ekki verið minnkað. Hálfstærðarsett, eða blað sem var "passað á síðu" þegar það var gert, mælist skakkt með forstillingu. Kvarðaðu þá út frá þekktri málsetningu í staðinn og athugaðu eina málsetningu hvort sem er.
:::

## Kvarðaðu út frá þekktri málsetningu

Notaðu þetta fyrir hálfstærðarsett, skönnuð blöð, smáatriði í óvenjulegum mælikvörðum, eða til að athuga forstillingu.

1. Finndu langa málsetningu sem þú treystir, eða mælikvarðastiku.
2. Veldu {{ui:Kvarða}} í hópnum {{ui:Mæla}} (eða veldu {{ui:Veldu tvo punkta}} í reitnum "Mælikvarði blaðs").
3. Smelltu á annan enda málsetningarinnar, síðan hinn. (Eða dragðu frá öðrum enda yfir í hinn.) Aðdráttur fyrst fyrir nákvæmni; {{key:Shift}} heldur línunni í 45° skrefum.
4. Reiturinn segir hversu langt er á milli punktanna á pappírnum og spyr "Hversu langt er á milli þeirra í raun?". Skrifaðu inn {{ui:Raunfjarlægð}}, til dæmis `24'-0"`, `12' 6 1/2"`, `7.2 m` eða `900 mm`.
5. Veldu hvernig lengdir eru sýndar undir {{ui:Sýna lengdir í}}: {{ui:Fet og tommur}}, {{ui:Fet (tugabrot)}}, {{ui:Tommur}}, {{ui:Metrar}} eða {{ui:Millimetrar}}.
6. Veldu {{ui:Stilla mælikvarða}}.

Niðurstaða: stöðustikan sýnir "Kvarðað: 24'-0" yfir 1.00 in" (raunlengdin og lengdin á pappírnum), og verkfærið sem þú ætlaðir að mæla með kemur aftur. Allar leiðir til að slá inn lengd eru í [Einingar og lengdir](topic:units-and-scales).

Raunfjarlægðin getur líka verið lítill reikningur: `12'6"+3/4"`, `(24'-0")/3` eða `2*450mm`. Notaðu `+ - * /` og sviga; tala án einingar telst í þeirri einingu sem er undir {{ui:Sýna lengdir í}} (fet fyrir {{ui:Fet og tommur}}). {{ui:Stilla mælikvarða}} notar niðurstöðuna.

Ef MarkupCraft getur ekki lesið það sem þú skrifaðir segir reiturinn það: „Þetta er ekki lengd sem MarkupCraft skilur. Prófaðu 24'-0", 12' 6 1/2", 7.2 m eða 900 mm.“ Reikningur sem ekki er hægt að reikna út segir hvers vegna og hvar, til dæmis "Svigi er ekki lokaður (stafur 5)."

## Mældu lengd

1. Veldu {{ui:Lengd}} ({{key:M}}).
2. Smelltu á upphafið, síðan endann. Eða dragðu frá upphafi til enda. {{key:Shift}} heldur henni í 45° skrefum.

Niðurstaða: málsetningarlína með tikkum og lengdinni skrifaðri á hana. Stöðustikan endurtekur hana ("Lengd: 12'-6 1/2" (1/4" = 1'-0")."), og {{ui:Eiginleikar}} sýnir hana undir {{ui:Lengd}}. Fet og tommur eru námunduð að næsta 1/16".

Ef blaðið hefur enn engan mælikvarða, skiptir val á {{ui:Lengd}} yfir í {{ui:Kvarða}} og stöðustikan útskýrir: "Kvarðaðu þetta blað fyrst: veldu tvo punkta sem eru þekkt fjarlægð hvor frá öðrum, eða veldu mælikvarða þess. Mældu síðan." Eftir að þú stillir mælikvarðann kemur {{ui:Lengd}} aftur.

## Skissa í mælikvarða

Á kvarðaðu blaði geturðu slegið inn raunlengdir meðan þú teiknar {{ui:Lína}}, {{ui:Ör}}, {{ui:Lengd}}, {{ui:Fjöllína}}, {{ui:Marghyrningur}}, {{ui:Frjálst ský}}, {{ui:Flatarmál}} eða rými:

1. Smelltu á fyrsta punktinn.
2. Bentu í þá átt sem næsti hluti fer og skrifaðu lengd hans, til dæmis `16` (í einingu blaðsins), `12'6"` eða `3.5 m`. Reitur opnast við bendilinn meðan þú skrifar.
3. Ýttu á {{key:Enter}}. Punkturinn lendir þá í þeirri fjarlægð í átt bendilsins.

Til að stilla stefnuna nákvæmlega, bættu við `<` og horni í gráðum: `8 < 90` fer 8 fet beint upp, `4<0` til hægri, `10 < 225` niður og til vinstri, eins og blaðið er séð (þar með taldar síður sem eru snúnar). Haltu áfram að slá inn lengdir fyrir næstu horn og ljúktu forminu eins og venjulega. {{key:Esc}} lokar reitnum án þess að setja punkt.

## Mældu horn

1. Veldu {{ui:Horn}} ({{key:X}}).
2. Smelltu á enda annars arms, síðan hornið, síðan enda hins arms.

Niðurstaða: armarnir tveir, lítill bogi í horninu og hornið í gráðum, að tíunda hluta (0° til 180°). Horn þarf engan mælikvarða. {{ui:Eiginleikar}} sýnir það undir {{ui:Horn}}, og listinn, CSV og BCF geyma það.

{{ui:Bogi}} ({{key:O}}) á kvarðaðu blaði sýnir einnig lengd hans eftir boganum í {{ui:Eiginleikar}}.

## Mældu flatarmál og jaðar þess

1. Veldu {{ui:Flatarmál}} ({{key:Q}}).
2. Smelltu á hvert horn herbergisins eða svæðisins.
3. Ljúktu með tvísmelli, {{key:Enter}} eða hægri smelli (tvítappa á snertiskjá). {{key:Backspace}} fjarlægir síðasta hornið.

Niðurstaða: skyggð útlína með flatarmálinu og "P" með jaðrinum í miðjunni, til dæmis "128.00 sq ft" og "P 48'-0"". Mælikvarðar í fetum gefa ferfet, tommur fertommur, metrar fermetra og millimetrar ferumillimetra. Flatarmál þarf að minnsta kosti þrjú horn.

### Úrtök

Til að skilja eftir súlu, skaft eða port, veldu flatarmálið og veldu {{ui:Bæta við úrtaki}} í {{ui:Eiginleikar}}. Smelltu á horn úrtaksins innan flatarmálsins og ljúktu eins og fyrir flatarmál. Úrtakið er opið (óskyggt), flatarmál þess dregst frá, og jaðrar þess bætast við jaðarinn: 16' × 8' herbergi með 4' × 4' úrtaki sýnir "112.00 sq ft" og "P 64'-0"". Bættu við eins mörgum og þú þarft; þau mega ekki skarast og ekki skera útlínur flatarmálsins. {{ui:Fjarlægja útskurði}} tekur þau öll út, og {{key:Mod+Z}} afturkallar eitt.

## Teldu hluti

1. Veldu {{ui:Telja}} ({{key:U}}).
2. Í {{ui:Eiginleikar}} skrifaðu {{ui:Heiti hóps}}, til dæmis "Gólfniðurföll". (Það geymist fyrir næsta skipti.)
3. Smelltu á hvern hlut á blaðinu.

Niðurstaða: hver smellur bætir við tölusettum punkti, fyrsti punkturinn ber merkimiða eins og "Gólfniðurföll: 7", og stöðustikan heldur utan um keyrandi heildina.

- **Byrja annan hóp:** ýttu einu sinni á {{key:Esc}} (það hreinsar valið), breyttu {{ui:Heiti hóps}} og smelltu aftur.
- **Bæta í hóp sem er til:** veldu hópinn fyrst, veldu síðan {{ui:Telja}} og smelltu.
- **Fjarlægja merki:** með hópinn valinn skaltu halda inni {{key:Shift}} og smella á punktinn. Þegar síðasti punkturinn er fjarlægður fjarlægist hópurinn. Á snertiskjá án lyklaborðs notarðu {{key:Mod+Z}} eða {{ui:Afturkalla}} í staðinn.
- **Endurnefna hóp:** veldu hann og breyttu {{ui:Heiti hóps}} í {{ui:Eiginleikar}}.

Talningarhópur tilheyrir einu blaði. Talningar á nokkrum blöðum birtast sem aðskildir hópar í listanum yfir merkingar.

## Breyta eða fjarlægja mælikvarða

Smelltu á mælikvarðahnappinn í stöðustikunni. Reiturinn sýnir núverandi mælikvarða; veldu annan, veldu {{ui:Veldu tvo punkta}}, eða veldu {{ui:Fjarlægja mælikvarða}}.

Lengdir og flatarmál sem þegar eru teiknuð eru **mæld aftur** með nýja mælikvarðanum strax. Afturköllun skilar gamla mælikvarðanum.

## Hvert tölurnar fara

- {{ui:Eiginleikar}} sýnir gildi valdrar mælingar.
- Flipinn {{ui:Merkingar}} sýnir hvert gildi, og CSV-skráin hefur dálkinn "Mæling". Sjá [Listi yfir merkingar](topic:markups-list-and-export).
- Vistað PDF geymir mælikvarðann á síðunni og skrifar lengdir og flatarmál sem mæliathugasemdir, svo önnur PDF-forrit sem skilja mælingar geti sýnt þær. Sjá [Hvað er vistað í PDF-skjalinu](topic:what-the-pdf-keeps).

Fyrir heila magntöku með liðum, samsetningum og verði skaltu nota TakeoffCraft: MarkupCraft mælir til yfirferðar, ekki til kostnaðaráætlunar.

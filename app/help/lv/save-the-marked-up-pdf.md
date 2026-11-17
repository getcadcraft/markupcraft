---
title: Saglabāt atzīmēto PDF
summary: Lejupielādēt kopiju ar visām atzīmēm, ierakstītām kā standarta PDF komentāri, pārbaudīt, ko redz citi PDF lasītāji, un turpināt darbu vēlāk.
keywords: saglabāt, lejupielādēt, eksportēt pdf, atzīmēts, anotācijas, komentāri, kopīgot, sūtīt, problēma, turpināt darbu, atvērt atkārtoti, pilns cikls, drukāt
from: 4c198ebe
---

## Saglabāt

1. Izvēlieties {{ui:Saglabāt}} rīkjoslā vai nospiediet {{key:Mod+S}}.
2. Ja ir atvērti vairāki faili, izvēlieties {{ui:Šis fails}} (lapas faila, kurā atrodaties) vai {{ui:Katrs mainītais fails}}. Katra kopija tiek lejupielādēta atsevišķi.
3. Pagaidiet, līdz ziņojums "Saglabā <file>…" tiks pabeigts. Pirmā saglabāšana sesijā ielādē arī PDF rakstītāju.

Rezultāts: pārlūkprogramma lejupielādē failu "<name> (marked up).pdf", un statusa joslā parādās: "Saglabāts A-Plans (marked up).pdf (24 atzīmes, 18.2 MB). Oriģinālais fails nav mainīts." Punkts blakus {{ui:Saglabāt}} pazūd.

**Jūsu oriģinālais PDF nekad netiek mainīts.** MarkupCraft izveido jaunu failu. Kur tas nonāk, atkarīgs no pārlūkprogrammas lejupielādes iestatījumiem (skatiet [Faili, ko MarkupCraft atver un saglabā](topic:files#where-downloads-go)).

## Turpināt darbu vēlāk

Nākamreiz atveriet kopiju "(marked up)", nevis oriģinālu. Viss atgriežas rediģējams: atzīmes, statusi, atbildes, defektu vienumi, katras lapas mērogs un visi lapu nosaukumi, ko esat ierakstījis. Saglabājot atkārtoti, tiek lejupielādēts fails ar tādu pašu nosaukumu "(marked up)"; pārlūkprogramma var pievienot numuru, piemēram, "(1)", ja vecā lejupielāde joprojām ir mapē. Vecās kopijas nomainiet vai sakārtojiet paši.

MarkupCraft pats PDF automātiski nesaglabā. Darba laikā tas šajā pārlūkprogrammā glabā atkopšanas kopiju, tāpēc avārija vai aizvērta cilne neizdzēš jūsu atzīmes: nākamreiz, atverot MarkupCraft, tas jautā "Atjaunot jūsu darbu?". Skatiet [Atjaunot darbu](common:recover). Tomēr pirms aizvēršanas saglabājiet; ja mēģināsiet iziet ar nesaglabātām atzīmēm, pārlūkprogramma vispirms jautā "Pamest vietni?" (iPad Safari to nedara).

## Ko redz citi PDF lasītāji

Katra atzīme tiek ierakstīta kā standarta PDF komentārs (anotācija) ar savu zīmējumu, tāpēc jebkurš PDF skatītājs to parāda, drukā un uzskaita komentāru panelī:

- **Izskats ir tāds pats** kā MarkupCraft: mākoņi ar viļņotām malām, bultiņas, zīmogi, skaitīšanas punkti, defektu numuru marķieri, mērījumu uzraksti.
- **Detaļas ir standarta:** autors, datums, tēma, komentāra teksts un krāsas.
- **Mākoņi** ir taisnstūra vai daudzstūra komentāri ar mākoņveida apmali; **teksta lodziņi** un **atsauces** ir teksta lodziņa komentāri; **piezīmes** ir līmlapiņas; **pildspalvas** un **marķiera** svītras ir tintes komentāri; **zīmogi** ir zīmoga komentāri.
- **Garumi un laukumi** ir mērījumu komentāri, un katra kalibrētā lapa glabā savu mērogu, tāpēc skatītāji, kas saprot mērījumus, var rādīt vērtības.
- **Atbildes** ir komentāra atbildes, un **statusi** ir pārskatīšanas stāvokļi (Atvērts nerāda stāvokli).
- **Lapu numuri**, ko esat ierakstījis, kļūst par lapu etiķetēm, ko rāda citi skatītāji.

Dažas lietas lasa tikai MarkupCraft: defektu vienuma piešķirto personu un izpildes termiņu, vienuma statusu un dažas stila detaļas. Citas programmas tās saglabā, ja vien nepārraksta komentāru.

Citā programmā komentārus var pārvietot vai rediģēt kā jebkurus citus. Ja kāds to dara un nosūta failu atpakaļ, MarkupCraft, to atverot, izmanto komentāra jauno pozīciju.

Pilna informācija: [Kas tiek saglabāts PDF](topic:what-the-pdf-keeps).

## Rakstzīmes, kas tiek drukātas kā "?"

Atzīmes teksts tiek ierakstīts ar standarta Helvetica fontu, ko ir katrs PDF skatītājs. Tas aptver angļu un Rietumeiropas burtus (é, ñ, ü, ø un līdzīgus), bet ne citus rakstus, simbolus ārpus šīs kopas vai emocijzīmes. Šīs rakstzīmes MarkupCraft rāda labi, bet saglabātajā kopijā tiek drukātas kā "?", un saglabāšanas ziņojums tās saskaita: "3 rakstzīmes ārpus Rietumeiropas kopas kopijā tiks drukātas kā "?"." Uzrakstiet šādus vārdus pilnībā vai izmantojiet vienkāršu aizstājēju (piemēram, "dia." diametra zīmei).

## Failus, ko nevar saglabāt

- **Aizsargāti PDF:** "Šis PDF ir aizsargāts (šifrēts), tāpēc atzīmētu kopiju nevar ierakstīt. Lūdziet nenodrošinātu kopiju." Joprojām varat pārskatīt to ekrānā, eksportēt CSV un BCF.
- Ja saglabāšana neizdodas citu iemeslu dēļ, rādās lodziņš "Neizdevās saglabāt <file>" ar iemeslu. Atzīmes joprojām ir cilnē; nekas nepazūd, kamēr to neaizverat.

## Saplacināšana un drukāšana

Pagaidām nav saplacināšanas (atzīmju ierakstīšanas lappusē) un drukāšanas komandas. Lai drukātu, atveriet saglabāto kopiju jebkurā PDF skatītājā un drukājiet ar rādāmiem komentāriem.

---
title: En rundvisning på skærmen
summary: Værktøjslinjen, arklisten, arkområdet, de fem paneler til højre og statuslinjen, med de navne, der står på skærmen.
keywords: skærm, layout, værktøjslinje, paneler, sidepanel, miniaturer, egenskaber, statuslinje, brugerflade, fuld skærm, tema, mørk tilstand
from: 18d82de6
---

MarkupCraft fylder browservinduet. Oppefra og ned og fra venstre mod højre:

## Linjen allerøverst

Den tynde linje over alt andet tilhører CadCraft-familien, ikke MarkupCraft selv. Den har:

- appens navn og hvilken version du kører,
- {{ui:Om MarkupCraft}}, som åbner appens side på webstedet,
- {{ui:Hjælp}}, som åbner denne hjælp i et sidepanel (eller tryk {{key:F1}}),
- {{ui:Gem til offline brug}}, som beholder MarkupCraft, dens PDF-læser og -skriver og denne hjælp i denne browser, så den åbner uden forbindelse; den siger derefter »Klar offline« (se [Arbejd offline](common:offline)),
- skærmtilstandsknappen ({{ui:Fuld skærm}}), og
- {{ui:Indstillinger}} (eller {{key:Mod+,}}), med fanen {{ui:MarkupCraft}} til denne apps egne indstillinger og {{ui:Generelt}} til dem, alle CadCraft-apps deler (se [MarkupCraft-indstillinger](topic:settings)), og
- {{ui:Papir}} og {{ui:Model}}, det lyse og det mørke tema. I {{ui:Model}} tegnes arkene lyst på mørkt; dine markeringer beholder deres egne farver.

Skærmtilstandsknappen, eller {{key:Ctrl+Shift+F}}, skifter mellem tre tilstande: normal, fuld skærm og fuld skærm med linjerne skjult. Når linjerne er skjult, flytter du markøren til skærmens øverste kant (eller trykker dér), og de glider tilbage. Denne genvej bruger Control-tasten på alle computere, også Mac.

:::note
I fuld skærm får {{key:Esc}} også browseren til at forlade fuld skærm. Hvis du kun ville annullere en tegning, så tryk {{key:Ctrl+Shift+F}} igen for at komme tilbage til fuld skærm.
:::

## Værktøjslinjen

Under den øverste linje er værktøjerne grupperet og mærket:

| Gruppe | Knapper |
|---|---|
| Fil | {{ui:Åbn}}, {{ui:Gem}}, {{ui:Luk}} |
| Vælg | {{ui:Vælg}}, {{ui:Panorér}} |
| Tegn | {{ui:Pen}}, {{ui:Fremhæv}}, {{ui:Linje}}, {{ui:Pil}}, {{ui:Rektangel}}, {{ui:Ellipse}}, {{ui:Polylinje}}, {{ui:Polygon}} |
| Revidér | {{ui:Sky}}, {{ui:Fri sky}} |
| Notér | {{ui:Henvisning}}, {{ui:Tekst}}, {{ui:Notat}}, {{ui:Stempel}} |
| Mål | {{ui:Kalibrér}}, {{ui:Længde}}, {{ui:Areal}}, {{ui:Tæl}} |
| Rediger | {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}} og {{ui:Mere}}: {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Vælg alle}}, {{ui:Fravælg alle}} |

Det værktøj, du bruger, ser nedtrykt ud. Hold markøren over en knap for at se dens tast (for eksempel »Rektangel (R)«); menuen {{ui:Mere}} viser hver kommandos tast ved siden af den. Knapper, der ikke kan bruges lige nu, er nedtonede: {{ui:Kopiér}}, indtil du vælger en markering, {{ui:Sæt ind}}, indtil noget er kopieret. En lille prik efter {{ui:Gem}} betyder, at nogle markeringer ikke er gemt endnu. Den fulde tastliste står i [Tastatur og mus](topic:keyboard).

Et værktøj forbliver tændt, efter du har tegnet med det, så du kan tegne flere skyer i træk. Tryk {{key:Esc}} (to gange, hvis den nye markering stadig er valgt) eller {{key:V}} for at gå tilbage til {{ui:Vælg}}.

## Arklisten (til venstre)

{{ui:Ark}} viser alle sider i alle åbne PDF'er. Hver række viser et lille billede af arket, dets navn, dets arknummer eller fil og side samt hvor mange markeringer det har. Tallet efter overskriften er antallet af ark.

- Klik på en række for at vise det ark.
- Skriv i {{ui:Søg i ark}} for at filtrere efter arknavn, arknummer eller filnavn. Tryk {{key:Enter}} for at åbne det første match.

Arknavne kommer fra PDF'en, når den har dem. Se [Åbn et tegningssæt og skift mellem ark](topic:open-a-plan-set).

## Arkområdet (midten)

Det ark, du arbejder på. Før noget er åbent, viser det »Åbn et tegningssæt« med en knap {{ui:Åbn PDF'er}}. Slip PDF'er et vilkårligt sted her for at åbne dem.

Under arket har en smal linje:

- pilene til forrige og næste ark og »3 af 12: A-101 — Plan« (hold markøren over den for at se filen og siden),
- zoom ud, zoomfeltet (skriv en procentdel og tryk {{key:Enter}}; 100 % er faktisk størrelse på en typisk skærm), zoom ind,
- {{ui:Tilpas side}} og {{ui:Tilpas bredde}}.

Hvert ark husker sin egen zoom, så længe sættet er åbent.

Når du sammenligner to ark, vises en signaturforklaring her: »Kun på det gamle ark«, »Kun på det nye ark« og »På begge«. Se [Sammenlign to revisioner](topic:compare-revisions).

## Panelerne (til højre)

Fem faner:

| Fane | Hvad den viser |
|---|---|
| {{ui:Egenskaber}} | Den valgte markering: forfatter, datoer, målte værdier, status, emne, tekst, kommentar, typografi, dens svar og dens mangelpost. Med et tegneværktøj tændt og intet valgt: de indstillinger, nye markeringer vil bruge. Med intet valgt og {{ui:Vælg}} tændt: arket, med nummer, titel, hvor navnet er læst fra, papirstørrelse, målestok og {{ui:Omdøb ark}}. |
| {{ui:Markeringer}} | Alle markeringer i det åbne sæt, med filtre, og eksporterne {{ui:CSV}} og {{ui:BCF}}. Se [Markeringslisten](topic:markups-list-and-export). |
| {{ui:Mangelliste}} | Nummererede mangelposter med ansvarlig, frist og status. Se [Lav en mangelliste](topic:punch-list). |
| {{ui:Værktøjer}} | Værktøjskassen: gemte værktøjer med typografi. Se [Værktøjskassen](topic:tool-chest). |
| {{ui:Sammenlign}} | Læg to ark oven på hinanden. Se [Sammenlign to revisioner](topic:compare-revisions). |

## Statuslinjen (nederst)

- Til venstre, hvor markøren står på arket, i tommer (eller millimeter, i [Indstillinger](topic:settings)) på papiret.
- I midten meddelelser: hvad et værktøj forventer næste gang, hvad der netop er gemt, hvorfor noget blev afvist. **Læs den, når noget ikke sker.**
- Arkets målestoksknap (»Ikke kalibreret« eller målestokken). Klik på den for at angive målestok. Se [Kalibrér et ark og mål](topic:calibrate-and-measure).
- Dit navn (»Angiv dit navn«, indtil du har angivet et). Klik på det for at ændre det.

## På en lille skærm

Under ca. 1180 pixel i bredden bliver panelerne smallere, og arkbillederne skrumper. På en skærm på størrelse med en telefon stables delene: værktøjslinjen (rul den sidelæns), arket, statuslinjen, panelerne og til sidst arklisten nederst. En tablet i liggende format beholder det fulde layout.

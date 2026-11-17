---
title: Udskriv og ændr siderne i en PDF
summary: Udskriv ark med deres markeringer, og drej, flyt, indsæt, slet eller udtræk sider i en åben PDF.
keywords: udskriv, printer, papir, sider, side, drej, roter, omarranger, flyt side, indsæt, tilføj side, tom side, slet side, fjern side, udtræk, opdel, sidehandlinger
from: 81832d9b
---

Menuen {{ui:Sider}} i gruppen {{ui:Fil}} virker på den PDF, som det åbne ark hører til. Din PDF på denne computer ændres aldrig: ændringerne er en del af den kopi, du gemmer.

## Udskriv

1. Tryk {{key:Mod+P}}, eller vælg {{ui:Sider}}, derefter {{ui:Udskriv…}}.
2. Når mere end ét ark er åbent, vælg hvad der skal udskrives: {{ui:Dette ark}}, hver side i denne fil, hele sættet, eller de sider du skriver (f.eks. `1-3, 5`).
3. Vælg {{ui:Udskriv}}. Din browsers printerdialog åbner: vælg printer, papir og målestok der.

Markeringerne udskrives, som de ser ud på arket: de tegnes ind i siderne i den kopi, der sendes til printeren. Kommentarer, andre programmer har lavet, udskrives, som deres PDF angiver.

:::safari firefox
Hvis din browser ikke kan udskrive fra inde i siden, åbnes arkene som en PDF i en ny fane. Udskriv derfra.
:::

## Drej en side

Vælg {{ui:Sider}}, derefter {{ui:Roter siden med uret}} eller {{ui:Roter siden mod uret}}. Det åbne ark drejer en kvart omgang. Dets markeringer bliver, hvor de var på tegningen, og tekst, du har skrevet, drejer med siden, så den stadig læses lodret.

## Flyt en side

Vælg {{ui:Sider}}, derefter {{ui:Flyt siden tidligere}} eller {{ui:Flyt siden senere}}. Det åbne ark bytter plads med sin nabo i sin egen PDF. Dets markeringer, målestok og arknummer følger med.

## Indsæt sider

- {{ui:Indsæt sider fra en PDF…}} lægger hver side i en anden PDF efter det åbne ark.
- {{ui:Indsæt en tom side}} tilføjer en tom side i samme størrelse efter det åbne ark, til skitser og noter. I et sæt lavet med {{ui:Ny}} har den sættets gitter også.
- I et sæt lavet med {{ui:Ny}} tilføjer {{ui:Tilføj en tom side}} under listen {{ui:Ark}} endnu en side som de andre til sidst. Se [Start med tomme sider](topic:open-a-plan-set#start-with-blank-pages).

Indsatte sider får deres sidenummer som mærkat, indtil du omdøber dem. Se [Omdøb et ark](topic:open-a-plan-set#rename-a-sheet).

## Slet sider

1. Vælg {{ui:Sider}}, derefter {{ui:Slet sider…}}.
2. Skriv sidenumrene i denne PDF, f.eks. `3` eller `2-4`. Det åbne arks side er udfyldt.
3. Vælg {{ui:Slet sider}}. Hvis disse sider har markeringer, siger MarkupCraft hvor mange, og spørger igen.

En PDF beholder mindst én side. For at fjerne en hel fil, luk sættet og åbn de filer, du stadig har brug for.

## Udtræk sider

Vælg {{ui:Sider}}, derefter {{ui:Udtræk sider…}}, og skriv siderne. De downloades som en ny PDF ved navn "<file> (pages 1-3).pdf", med deres markeringer som kommentarer, du kan fortsætte med at redigere. Den åbne fil forbliver, som den er.

## Godt at vide

- **Fortryd stopper ved en sideændring.** {{key:Mod+Z}} fortryder markeringer tegnet efter den, men ikke selve sideændringen eller noget før den. Luk uden at gemme for at starte forfra fra din oprindelige PDF.
- Sidenumre tæller siderne i én PDF, ikke hele sættet. Flytning af en side holder den inde i sin egen fil.
- De ændrede sider er ikke-gemt arbejde: {{ui:Gem}} downloader den omorganiserede kopi, og hvis du forlader, spørger den først.

---
title: Lag en avviksliste
summary: Gjør markeringer om nummererte avvikspunkter med en ansvarlig, en frist og en status, og eksporter listen.
keywords: avviksliste, avvik, mangelliste, mangel, feltproblemer, observasjon, tildel, ansvarlig, frist, avslutning, befaring, nummer
from: b98b38e6
---

Et avvikspunkt er en markering med et nummer, en ansvarlig, en frist og en avvikstatus. Nummeret tegnes på arket ved siden av markeringen, slik at det utskrevne arket og listen stemmer overens.

## Legg til punkter

1. Marker hvert problem på arkene: en sky, en henvisning, et notat, hva som helst.
2. Velg ett eller flere av dem (se [Velg, flytt og endre markeringer](topic:select-and-edit)).
3. Enten åpner du {{ui:Avviksliste}}-fanen og velger {{ui:Legg valgte til avviksliste}}, eller velger {{ui:Legg til avviksliste}} i {{ui:Egenskaper}}.

Resultat: hver markering får neste nummer (1, 2, 3…), i arkrekkefølge og deretter i den rekkefølgen de ble tegnet. Et nummerert merke vises på arket, og statuslinjen sier «La til 3 punkter på avviksliste.» Markeringer som allerede har et nummer, og skrivebeskyttede kommentarer, hoppes over.

## Fyll inn detaljene

I {{ui:Avviksliste}}-fanen viser hvert punkt nummer, emne, tekst, ark og status, med tre felt under. De samme feltene finnes i {{ui:Egenskaper}} under «Avviksliste» når markeringen er valgt:

- {{ui:Ansvarlig}}: et navn eller et fag, som fritekst.
- {{ui:Frist}}: en dato, fra datovelgeren.
- {{ui:Avvikets status}}: Åpen, Pågår, Klar for gjennomgang eller Lukket.

Klikk på et punkts overskrift for å hoppe til det på arket.

Avvikets status er adskilt fra markeringens gjennomgangsstatus (Åpen, Akseptert, Avvist, Fullført). Bruk avvikets status for arbeidet, og gjennomgangsstatusen for kommentaren.

## Ta et punkt av

Velg markeringen og velg {{ui:Ta av avviksliste}} i {{ui:Egenskaper}}. Markeringen blir liggende; bare nummeret fjernes. Mens settet er åpent, gjenbrukes ikke nummer: neste punkt får fortsatt neste nye nummer, så et hull betyr at et punkt er tatt av. Når en fil åpnes igjen, fortsetter nummereringen etter det høyeste nummeret i den.

## Eksporter listen

Velg {{ui:Eksporter CSV}} i {{ui:Avviksliste}}-fanen. Du får filen «<name> punch list.csv» med kolonnene Nr., Ark, Fil, Side, Punkt, Kommentar, Ansvarlig, Frist, Status, Markeringsstatus, Forfatter og Opprettet, i nummerrekkefølge. Åpne den i et hvilket som helst regneark.

Punktnumrene, ansvarlige, frister og avvikstatuser lagres også i den markerte PDF-en, så de kommer tilbake når du åpner den igjen. Andre PDF-visere viser nummermerket som en del av markeringen. BCF-eksporten i markeringslisten har også ansvarlig og frist (se [BCF-grunnleggende](topic:bcf-basics)).

## Ute på byggeplassen med nettbrett

Åpne settet på en iPad, gå rundt på jobben, og legg et {{ui:Notat}} eller tegn en {{ui:Sky}} ved hvert problem. Legg dem til i avvikslisten etter hvert, og lagre før du drar. Se [Gjennomgang på iPad eller berøringsskjerm](topic:review-on-a-tablet).

En avviksliste som formatert PDF- eller regnearkrapport, og bilder vedlagt punkter, er ikke bygget ennå.

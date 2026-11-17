---
title: Gjennomgang på iPad eller berøringsskjerm
summary: Klyp, panorer og tegn med fingrene eller en penn, hva som utføres når du løfter fingeren, hva som krever tastatur, og hvordan du holder arbeidet trygt på nettbrettet.
keywords: ipad, nettbrett, berøring, berøringsskjerm, klype, zoom, to fingre, apple pencil, penn, finger, felt, byggeplass, flate, bevegelser, mobil
from: 91eb6438
---

MarkupCraft fungerer med berøring: på en iPad (Safari eller Chrome), på en bærbar med berøringsskjerm, eller på et Windows- eller Android-nettbrett med en nylig nettleser. I liggende format viser et nettbrett hele oppsettet.

## Bevegelser

| Bevegelse | Hva den gjør |
|---|---|
| Én finger | Tegner med gjeldende verktøy, eller velger med {{ui:Velg}} |
| To fingre, spre eller klyp | Zoomer rundt punktet mellom fingrene |
| To fingre, flyttet sammen | Panorerer; du kan zoome og panorere i én bevegelse |
| En annen finger mens du tegner | Avbryter det den første fingeren startet, og starter zoom i stedet |
| Dobbelttrykk, eller trykk og hold | Fullfører en polylinje, mangekant, fri sky eller et område |
| Trykk og hold en tekst, henvisning eller et notat, med {{ui:Velg}} | Åpner teksten for redigering |
| Én finger med {{ui:Panorer}} på | Panorerer |

På en berøringsskjerm er verktøylinjeknappene, menyene, fanene og dialogknappene større, så de er lette å treffe med en finger.

## Hva som skjer når du løfter

For at første finger i en klyp aldri skal etterlate et merke, utfører noen verktøy en handling når du **løfter** fingeren, ikke når du berører:

- {{ui:Tell}}: prikken legges til ved løfting.
- {{ui:Notat}}: notatet plasseres ved løfting.
- {{ui:Polylinje}}, {{ui:Mangekant}}, {{ui:Fri sky}} og {{ui:Areal}}: hvert punkt legges til ved løfting.
- {{ui:Linje}}, {{ui:Pil}}, {{ui:Lengde}} og {{ui:Kalibrer}}: når du trykker på start og deretter på slutt, plasseres slutten ved løfting.

Hvis fingeren glir mer enn litt før du løfter den, regnes det ikke som et trykk, og ingenting legges til. Trykk rent; for å rette opp, bruk {{ui:Angre}}.

Verktøy du drar ({{ui:Penn}}, {{ui:Utheving}}, {{ui:Sky}}, {{ui:Rektangel}}, {{ui:Ellipse}}, {{ui:Henvisning}}, {{ui:Tekst}}, {{ui:Stempel}}) starter så snart du berører; en andre finger avbryter dem.

## Velge med fingeren

- Trykk på en markering for å velge den; dra den for å flytte den; dra et håndtak for å endre størrelse. Etter at en finger har berørt arket, får markeringer og håndtak et større treffområde, og håndtakene tegnes større.
- Dra over tomt ark for å tegne et utvalgsvindu (fra venstre mot høyre: helt inni; fra høyre mot venstre: berørende).
- I {{ui:Velg}} panorerer én finger **ikke**. Bruk to fingre, eller velg {{ui:Panorer}}.

## Ting som krever tastatur

Uten tastatur finnes ikke {{key:Shift}}, {{key:Esc}} eller {{key:Enter}}. Slik gjør du i stedet:

| Tastehandling | Uten tastatur |
|---|---|
| {{key:Esc}} for å avbryte eller gå tilbake til Velg | Trykk {{ui:Velg}} i verktøylinjen |
| {{key:Shift}} for 45°-linjer, kvadrater og sirkler | Tegn forsiktig; juster med håndtakene |
| {{key:Shift}}-klikk for å legge til i et utvalg | Bruk et utvalgsvindu |
| {{key:Shift}}-klikk for å fjerne en tellingsprikk | {{ui:Angre}} rett etter et feil trykk |
| {{key:Mod+Enter}} for å avslutte skriving | Trykk utenfor tekstboksen |
| {{key:Enter}} for å fullføre en polylinje, eller for å redigere en markerings tekst | Trykk og hold, eller {{ui:Rediger på arket}} i {{ui:Egenskaper}} |
| {{key:Delete}} | {{ui:Slett}} i verktøylinjen eller i {{ui:Egenskaper}} |
| Starte en ny tellegruppe med {{key:Esc}} | Trykk på tomt ark med {{ui:Velg}}, og trykk deretter {{ui:Tell}} igjen |

Et tastaturdeksel eller Bluetooth-tastatur gir tilbake alle snarveier; på en iPad fungerer ⌘-tasten for {{key:Mod+Z}} og resten.

Knapper viser ikke verktøytips ved berøring. Tasten for hvert verktøy står i [Tastatur og mus](topic:keyboard).

## Apple Pencil og penn

En penn (Apple Pencil, Surface Pen og lignende) fungerer som en mus: den tegner og velger, og utfører handlingen straks ved berøring. Bruk fingrene til klyping og panorering. Trykk endrer ikke linjebredden.

## Åpne og lagre på en iPad

- {{ui:Åpne}} viser Filer-velgeren: iCloud Drive, På min iPad, og alle lagringsapper du har koblet til.
- {{ui:Lagre}} ber om å laste ned; kopien havner i Filer, under Nedlastinger (eller mappen som er satt i Safaris innstillinger).

## Hold arbeidet trygt på nettbrettet

:::warning
iPad-Safari varsler deg ikke før du forlater en side med ulagret arbeid, og iPadOS kan laste en fane på nytt i bakgrunnen for å frigjøre minne. MarkupCraft beholder en gjenopprettingskopi i nettleseren og tilbyr den når du åpner den igjen (se [Gjenopprett arbeidet ditt](common:recover)), men **lagre etter hvert ark, eller hver befaringsrunde**: en privat fane beholder ingen kopi.
:::

- Navnet ditt, verktøyinnstillingene og verktøykisten lagres i den nettleseren på den iPaden, som på en datamaskin. Se [Hva som lagres i denne nettleseren](topic:browser-storage).
- **Før et besøk på byggeplassen uten signal:** mens du fortsatt er på nett, åpne MarkupCraft i Safari (eller Chrome) på iPaden og velg {{ui:Lagre for frakoblet bruk}} i linjen øverst. Vent til det står «Klar for frakoblet bruk» (den teller «Lagrer N av M»; PDF-leseren og -skriveren er omtrent 6 MB). På stedet åpner du samme adresse, eller et bokmerke til den: åpning, markering og lagring av PDF-er fungerer uten forbindelse. Hvis det står «Frakoblet bruk er ikke tilgjengelig», er du i en privat fane; bruk en vanlig. Se [Arbeide frakoblet](common:offline).
- Safari fjerner en frakoblet kopi du ikke har brukt på noen uker. Før en tur klikker du «Klar for frakoblet bruk» og velger «Lagre på nytt (hent nyeste versjon)».
- Svært store plansett bruker mye minne. På et nettbrett åpner du bare arkene du trenger til besøket.

## På en telefon

Det fungerer, men skjermen er liten: delene stables (verktøylinje, ark, statuslinje, paneler, deretter arklisten), og verktøylinjen ruller sideveis. Bruk en telefon til å se og legge til et raskt notat, og et nettbrett eller en datamaskin til ekte gjennomgang.

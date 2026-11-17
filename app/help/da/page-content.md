---
title: Ændr sidens egne linjer, billeder og tekst
summary: Flyt, ændr størrelse, ændr farve eller slet det, PDF'en selv tegner, flyt en linjes punkter, erstat et billede, og ændr ordene i en tekstlinje.
keywords: sidens indhold, grundindhold, rediger pdf, rediger tegning, vektor, sti, figur, linje, billede, erstat billede, tekst, ord, skrifttype, punkter, knudepunkter, flyt, ændr størrelse, ny farve, slet, indholdsværktøj
from: 471d457e
---

Markeringer ligger oven på et ark. Værktøjet {{ui:Indhold}} arbejder på selve arket: de linjer, billeder og tekstlinjer, PDF'en tegner. Din PDF på denne computer ændres aldrig: redigeringerne er en del af den kopi, du gemmer.

## Vælg, hvad der skal ændres

1. Vælg {{ui:Indhold}} i gruppen {{ui:Vælg}}, eller tryk {{key:B}}.
2. Under {{ui:Vælg}} i {{ui:Egenskaber}} slår du {{ui:Former}}, {{ui:Billeder}} og {{ui:Tekst}} til eller fra. Kun de typer, der er slået til, kan vælges, så du kan vælge teksten i en travl tegning uden at fange dens linjer.
3. Klik på noget for at vælge det. Shift+klik tilføjer eller fjerner. Træk en boks over tomt papir for at vælge flere: træk mod højre for at tage det, der er helt inde i boksen, træk mod venstre for at tage det, den rører.

En figur inde i et klippet område vælges kun, hvor den vises.

## Flyt, ændr størrelse, ændr farve, slet

- **Flyt:** træk et valgt objekt, eller tryk på piletasterne (hold Shift for større trin). Hold Shift, mens du trækker, for at flytte lige hen eller lige op.
- **Ændr størrelse:** træk i en af de otte firkanter omkring valget. Den vokser eller skrumper fra den modsatte side. Hold Shift for at bevare proportionerne.
- **Ny farve:** for linjer og figurer, angiv {{ui:Linjefarve}}, {{ui:Udfyldningsfarve}} og {{ui:Linjetykkelse (pt)}} i {{ui:Egenskaber}}.
- **Slet:** tryk {{key:Delete}}, eller vælg {{ui:Slet fra siden}}.
- **Fortryd:** hver ændring er ét trin: {{key:Mod+Z}} tager den tilbage, {{key:Mod+Y}} lægger den på igen.

{{ui:Sæt tilbage, som det var}} fortryder alle ændringer på de valgte objekter på én gang; {{ui:Sæt denne side tilbage, som den var}} gør det for hele siden.

## Kopiér, klip og indsæt sideindhold

Vælg linjer, billeder eller tekst med værktøjet {{ui:Indhold}}, og derefter:

- {{key:Mod+C}} kopierer, {{key:Mod+X}} klipper (kopierer og fjerner dem fra siden), {{key:Mod+D}} lægger en kopi ved siden af dem.
- {{key:Mod+V}} indsætter som sideindhold, ved siden af originalen eller hvor markøren er (som [Indstillinger](topic:settings) angiver); {{key:Mod+Shift+V}} indsætter præcis samme sted. Indsæt på en anden side, i en anden åben PDF eller i en anden MarkupCraft-fane i denne browser.
- Gruppen {{ui:Rediger}}s menu og højreklikmenuen har de samme kommandoer.

En indsættelse beholder linjer som linjer, ord som ord i deres egen skrifttype, og billeder som billeder. Den er ét stykke: flyt det, ændr størrelsen med dets firkanter, slet det, eller {{key:Mod+Z}} det væk. Den bliver en del af siden i kopien, du gemmer. Det, du kopierede sidst, markeringer eller sideindhold, er det, {{key:Mod+V}} indsætter.

Det, kopien indeholder, beskæres til feltet omkring valget: noget, MarkupCraft ikke kan tage ud af kopien (se nedenfor), og som ligger inde i feltet, følger med.

## Flyt en linjes punkter

Dobbeltklik på en linje eller kurve (eller vælg den og vælg {{ui:Rediger punkter}}). Dens punkter vises som firkanter, og dens kurvehåndtag som cirkler. Træk et punkt eller et håndtag; et punkt tager nabohåndtagene med sig, så kurven bevarer sin form omkring det. Tryk {{key:Esc}}, eller klik væk fra linjen, når du er færdig.

Rektangler har ingen punkter at trække i: ændr størrelsen med firkanterne omkring dem.

## Erstat et billede

Vælg et billede og vælg {{ui:Erstat billede…}}, og vælg derefter en PNG-, JPEG- eller SVG-fil (eller en PDF: dens første side). Det nye billede fylder det gamles plads og beholder sine egne proportioner.

## Ændr ordene i en tekstlinje

Dobbeltklik på en tekstlinje, skriv de nye ord i {{ui:Ord}}, og tryk {{key:Enter}}. Ordene skrives i linjens egen skrifttype og størrelse, og linjen beholder sin længde, så teksten efter den ikke flytter sig.

:::note
De fleste PDF'er indeholder kun de bogstaver, de bruger, fra hver skrifttype. Når du skriver et bogstav, filens kopi af skrifttypen ikke har, udskriver MarkupCraft bogstavet i Helvetica og siger det. {{ui:Egenskaber}} viser, hvilke bogstaver skrifttypen i filen har.
:::

Tekst ændres én linje ad gangen; den flyder ikke over i næste linje.

## Hvad MarkupCraft lader være som den er

- **Scannede sider** er ét billede: du kan flytte, ændre størrelse på, erstatte eller slette billedet, men det, der er i det, kan ikke redigeres.
- **Krypterede og signerede PDF'er:** at ændre siden ville bryde en signatur, så værktøjet {{ui:Indhold}} siger det og ændrer intet. Markeringer virker stadig.
- **Klippeområder**, objekter, der er delt mellem to dele af sidens indhold, og farveblandinger, der udfylder et helt område, forbliver, som de er; MarkupCraft siger hvorfor, når du prøver.
- **Ord i en standardskrifttype, PDF'en ikke beskriver** (f.eks. en Times-skrifttype uden bredder for bogstaverne i filen), kan ikke ændres, fordi MarkupCraft ikke kunne bevare linjens afstand. Linjen kan stadig flyttes.

## Læg markeringer ind i siden

Linjer, rektangler, ellipser, polylinjer, skyer og penstreger, du tegnede som markeringer, kan blive en del af selve siden: vælg dem og vælg {{ui:Læg ind i siden}} i {{ui:Egenskaber}}. Tekst, stempler, billeder og gennemsigtige farver forbliver markeringer.

---
title: Markeringslisten, filtre og eksport
summary: Se alle markeringer i sættet, filtrér efter ark, forfatter, status og type, hop til én, og eksportér listen som CSV eller BCF.
keywords: markeringsliste, liste, oversigt, xlsx, regnearksmappe, arbejdsbog, pdf-rapport, importér bcf, filter, sortér, rapport, eksport, csv, regneark, bcf, bcfzip, emner, kommentarliste, hop
from: 6c70261e
---

## Åbn listen

Vælg fanen {{ui:Markeringer}} til højre. Hver markering i hver åben fil vises, i arkrækkefølge og derefter i den rækkefølge de blev lavet. Hver række viser:

- et ikon i markeringens farve, dens mangelnummer hvis den har et (»#4«), og dens emne,
- dens tekst, stempelordlyd eller målte værdi, og dens kommentar,
- arket, forfatteren og datoen,
- dens status (eller »Skrivebeskyttet« for kommentarer der fulgte med filen), og et antal svar når den har svar.

Linjen over listen tæller dem: »38 markeringer«, eller »12 af 38 markeringer« når der er filtreret.

## Hop til en markering

Klik på en række. MarkupCraft viser det ark, vælger markeringen og zoomer til den, når den er uden for skærmen eller for lille til at ses. {{ui:Egenskaber}} viser dens detaljer og tråd, når du skifter tilbage til den fane.

## Filtrér

Fire menuer over listen. De kan kombineres.

| Menu | Valg |
|---|---|
| {{ui:Ark}} | Alle ark, Dette ark (følger dig, når du skifter ark), eller ethvert ark der har markeringer |
| {{ui:Forfatter}} | Enhver, eller hver forfatter i sættet |
| {{ui:Status}} | Enhver status, Åben, Accepteret, Afvist, Afsluttet |
| {{ui:Type}} | Enhver type, eller hver slags markering i sættet |

Eksempler:

- Hvad der stadig er åbent på dette ark: {{ui:Ark}} »Dette ark«, {{ui:Status}} »Åben«.
- En konsulents kommentarer: {{ui:Forfatter}} deres navn.
- Alle målinger: {{ui:Type}} »Længde« eller »Areal«.

Listen viser op til 2000 rækker; indsnævr den med et filter i meget store sæt.

## Eksportér til CSV

Vælg {{ui:CSV}} øverst i fanen. Du får »<name> markups.csv« med markeringerne som de aktuelt er filtreret, én pr. række, med disse kolonner:

Mangenr., Ark, Fil, Side, Type, Emne, Tekst, Kommentar, Måling, Forfatter, Oprettet, Ændret, Status, Svar, Seneste svar, Farve, Skrivebeskyttet.

- »Tekst« rummer ordene i tekstbokse og henvisninger, et stempels ordlyd eller en tælgruppes navn.
- »Måling« rummer længder, »areal, omkreds« for arealer og »gruppe: n« for tællinger.
- Datoer er fulde tidsstempler i UTC.

Vil du eksportere alt, skal du først sætte hvert filter tilbage til sit første valg.

## En signaturforklaring på arket

{{ui:Signaturforklaring}} i fanen {{ui:Markeringer}} placerer en signaturforklaring øverst til højre i det du ser: en boks, der lister hver slags markering på arket (efter emne og farve, såsom »Sky«, »Spørgsmål« eller »Stikkontakter«) med hvor mange der er. En tælgruppe tæller sine mærker. Signaturforklaringen fortsætter med at tælle, mens du tegner, flytter eller sletter markeringer, og den udskrives og gemmes med tallene for det øjeblik.

Flyt og ændr størrelse på den, som på enhver markering. I dens {{ui:Egenskaber}} ændrer du dens {{ui:Titel}}, eller sætter {{ui:Antal}} til {{ui:Hele sættet}} for at tælle hvert ark. Mellemrum, andre signaturforklaringer og kommentarer fra andre programmer tælles ikke med.

## Egne kolonner og sortering

{{ui:Kolonner}} i fanen {{ui:Markeringer}} tilføjer dine egne kolonner til hver markering: en **tekst**, et **valg** (såsom Fag: Mekanisk, Elektrisk, VVS), et **tal** (såsom Pris) eller en **dato**. Giv hver et navn, vælg dens type, angiv valgmulighederne for en valgkolonne, og vælg {{ui:Gem kolonner}}.

- Udfyld dem under {{ui:Egenskaber}}: hver kolonne har et felt der. En talkolonne tager kun tal, en datokolonne en dato.
- Listen viser værdierne under hver markering. Filteret {{ui:Kolonne}} vælger én værdi (eller de markeringer hvor den er tom), og {{ui:Sortér}} ordner listen efter en kolonne, efter forfatter, status, slags eller dato, i stedet for efter ark.
- CSV- og XLSX-eksporter medtager kolonnerne efter de sædvanlige. Kolonnerne gemmes med PDF'en og kommer tilbage, når du åbner den igen.

## Eksportér en oversigt: arbejdsbog eller PDF

- {{ui:XLSX}} henter »<name> markup summary.xlsx« med tre ark: **Markeringer** (én række pr. listet markering, de samme kolonner som CSV), **Pr. ark** (hvor mange markeringer hvert ark har, åbne og lukkede, og hvor mange af hver slags, med summer) og **Mangelliste** (når der er mangelposter).
- {{ui:PDF}} henter »<name> markup summary.pdf«: en rapport til udskrivning eller afsendelse, med sættets navn, datoen og en tabel over de listede markeringer (nummer, ark, slags, emne, tekst eller kommentar, målt værdi, forfatter, status og det seneste svar). Lang tekst brydes; tabelhovedet gentages på hver side.

Begge tager listen, som den er filtreret, så filtrér først, hvis du kun vil rapportere ét ark, én forfatter eller de åbne punkter.

## Eksportér til BCF

Vælg {{ui:BCF}}. MarkupCraft laver et billede af hver listet markering på dets ark (»Laver snapshots til BCF (3 af 12)…«) og henter derefter »<name> markups.bcfzip«. Hver markering bliver til ét BCF-emne med dens status, forfatter, datoer, svar som kommentarer, modtager og forfaldsdato fra dens mangelpost samt snapshottet.

Brug det til at føre tegningsgennemgangens kommentarer over i BIM-koordineringsværktøjer, der læser BCF. Hvad der følger med, og hvad der ikke gør, står i [BCF: grundlæggende](topic:bcf-basics).

## Importér BCF

{{ui:Importér BCF}} læser en .bcfzip- (eller .bcf-) fil fra et BIM-værktøj:

- Emner, der stammer fra MarkupCraft's egen BCF-eksport, finder deres markeringer igen: nye svar tilføjes til tråden, og en ny status sættes (Lukket tæller som Afsluttet). Svar der allerede er der, tilføjes ikke to gange.
- Andre emner bliver til notater med deres titel, beskrivelse, forfatter og kommentarer. Et notat placeres på det ark, hvis nummer eller navn emnets etiketter angiver, ellers på det åbne ark. Et BIM-kamera har ingen plads på papir, så sådanne notater stables øverst til venstre på arket, så du kan flytte dem.

Hele importen er ét trin: {{key:Mod+Z}} tager den tilbage. Se [BCF: grundlæggende](topic:bcf-basics).

## Hvad listen ikke gør endnu

- Gruppering af listen (sortér, og filtrér i stedet).
- Redigering af værdier i listen (rediger i {{ui:Egenskaber}}; mangelfelter kan redigeres i fanen {{ui:Mangelliste}}).

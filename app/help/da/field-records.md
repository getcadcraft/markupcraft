---
title: Følg RFI'er, indsendelser og dagbøger
summary: Læg RFI'er, indsendelser og dagbøger på arkene med numre, ansvarlige, forfaldsdatoer og tråde; filtrér det forfaldne; eksportér CSV eller BCF; arbejd offline og sammenflet kopier.
keywords: rfi, anmodning om oplysninger, indsendelse, dagbog, feltrapport, byggedagbog, byggeri, forfalden, forfaldsdato, tildelt mig, tråd, vedhæftning, sammenflet, offline, tablet, bcf, csv, felt
from: 95039c5a
---

Fanen {{ui:Felt}} gemmer tre slags poster ved siden af dine markeringer. Hver er knyttet til et ark; en RFI eller en indsendelse har også en nål på det sted på arket, den handler om.

- **RFI**: et spørgsmål til projekteringsholdet. Statusser: Åben, Besvaret, Lukket.
- **Indsendelse**: noget, der skal gennemgås, før arbejdet går videre. Statusser: Åben, Under gennemgang, Godkendt, Godkendt med bemærkninger, Revidér og indsend igen, Lukket.
- **Dagbog**: dagens vejr, antallet af personer på pladsen og det udførte arbejde. Statusser: Kladde, Endelig.

Hver post har et nummer af sin egen type (RFI-0001, SUB-0001, LOG-0001), en titel, tekst, en ansvarlig, en forfaldsdato, en tråd med svar og en liste over vedhæftningsnavne.

## Tilføj én

1. Åbn fanen {{ui:Felt}} og vælg {{ui:RFI}} eller {{ui:Indsendelse}}.
2. Tryk eller klik på arket, hvor den hører hjemme. En nål vises, og posten åbnes i fanen.
3. Udfyld titlen, spørgsmålet eller beskrivelsen, hvem den er tildelt, og hvornår den forfalder.

En dagbog tilføjes til det åbne ark uden nål. {{ui:Placér nål}} sætter en nål på den senere; {{ui:Flyt nål}} flytter en hvilken som helst nål. Når du trykker på en nål på arket, åbnes dens post.

## Besvar og følg op

Ændr {{ui:Status}}, og ændringen logges i tråden. Skriv et svar og vælg {{ui:Send svar}} (Ctrl+Enter sender også). Vedhæftninger er kun navne: skriv et navn eller vælg filer, og listen viser teamet, hvad der hører til posten. Selve filerne bliver, hvor de er.

En post, hvis forfaldsdato er passeret, og som stadig venter (en RFI, der ikke er Besvaret eller Lukket, en indsendelse, der ikke er afgjort), markeres **Forfalden** med rødt på listen og på sin nål.

## Find det vigtige

Filtrene står over listen: type, status, forfaldsdato (forfalden, forfalder inden for 7 dage, har eller har ikke forfaldsdato), dette ark eller alle ark, en tekstsøgning og {{ui:Tildelt mig}}, der sammenligner den ansvarlige med det navn, MarkupCraft kender dig under (se [Angiv dit navn](topic:set-your-name)). Linjen under filtrene tæller, hvad der vises, og hvad der er forfalden.

## Eksport

{{ui:CSV}} skriver de viste poster som et regneark. {{ui:BCF}} skriver dem som BCF-emner, hver med et øjebliksbillede af sit sted på arket, så andre BCF-værktøjer kan vise dem. Begge følger filtrene.

## Gem, offline og sammenflet kopier

Poster gemmes inde i PDF'en, når du gemmer den, og de kommer tilbage, når du åbner den. Intet kræver et netværk: tilføj, redigér, svar og gem på en tablet i en kælder, og hent PDF'en tilbage bagefter. Ældre PDF'er og PDF'er fra andre programmer åbnes, som de altid har gjort.

For at samle to kopier åbner du den ene, vælger {{ui:Sammenflet}} og vælger derefter den anden kopi af den samme PDF. Poster sammenføjes efter deres id'er:

- en post, som kun den ene kopi har, tilføjes;
- en post, der findes i begge, tager sine felter (titel, tekst, status, ansvarlig, forfaldsdato) som en helhed fra den kopi, der sidst blev ændret; så hvis to personer ændrede forskellige felter i samme post, vinder den senere kopis version; tråde og vedhæftningsnavne fra begge kopier sammenføjes;
- hvis begge kopier nummererede en ny post ens, får den, der kommer ind, det næste ledige nummer;
- en post, der er fjernet i den ene kopi, forbliver fjernet, medmindre den er redigeret efter.

En sammenfletning kan fortrydes i ét trin.

## Begrænsninger

- Poster deles ikke af Live TeamWork endnu; brug Sammenflet.
- Der er ingen teams, notifikationer eller cloudprojekter for poster i denne version.
- Sider, der slettes fra PDF'en, tager deres poster med sig (bekræftelsen på siden tæller dem).

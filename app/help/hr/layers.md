---
title: Slojevi oznaka
summary: Stavite oznake na imenovane slojeve, zatim prikažite, sakrijte ili zaključajte svaki sloj; drugi PDF preglednici ih također mogu prebacivati.
keywords: slojevi, sloj, sakrij, prikaži, zaključaj, grupiraj oznake, disciplina, strojarstvo, elektrotehnika, izborni sadržaj, ocg, vidljivost
from: 0fbb4c26
---

Slojevi grupiraju oznake, na primjer prema disciplini ili prema recenzentu. Sakrijte sloj da vidite crtež ispod njega ili ga zaključajte da se njegove oznake ne pomaknu slučajno.

## Napravite sloj i crtajte na njemu

1. Otvorite {{ui:Layers}} na vrhu ploče {{ui:Sheets}}.
2. Odaberite {{ui:New layer}}, upišite ime poput `Mechanical` i odaberite {{ui:Add layer}}.
3. Novi sloj postaje aktivni sloj: svaka oznaka koju od sada nacrtate ide na njega. Odaberite ime drugog sloja ili {{ui:No layer}} da promijenite gdje idu nove oznake.

Da premjestite oznaku na drugi sloj, odaberite je i izaberite sloj pod {{ui:Layer}} u {{ui:Properties}}. {{ui:New layer…}} na kraju tog popisa stvara sloj odmah. Premještanje se može poništiti s {{key:Mod+Z}}.

## Prikaz, sakrivanje i zaključavanje

Redak svakog sloja ima dva gumba:

- **Oko** prikazuje ili sakriva sloj. Skrivene oznake se ne crtaju i ne mogu se odabrati; i dalje se broje na popisu {{ui:Markups}}.
- **Katanac** zadržava oznake sloja na listu, ali sprječava da se odabiru, pomiču ili brišu.

Gumb olovke preimenuje sloj i pritom premješta njegove oznake. Filtrirajte popis {{ui:Markups}} po {{ui:Layer}} da vidite oznake jednog sloja.

## U spremljenom PDF-u

Svaki sloj postaje PDF sloj (izborni sadržaj). Drugi PDF preglednici navode slojeve u svojoj ploči slojeva i mogu ih prebacivati; sloj koji ste sakrili tamo počinje skriven. Slojevi koje je crtež već imao, poput CAD slojeva, ostaju kakvi su bili. Kad ponovno otvorite kopiju u MarkupCraftu, oznake se vraćaju na svoje slojeve, skrivene i zaključane kakvi ste ih ostavili.

## Dobro je znati

- Skrivanje i zaključavanje nisu uređivanja: ne poništavaju se s {{key:Mod+Z}}, ali se spremaju s PDF-om.
- Kopiranje i lijepljenje zadržava sloj oznake.
- Spljoštena kopija crta svaku oznaku u stranicu, bez obzira na njen sloj. Vidi [Spremanje spljoštene kopije](topic:flatten).

---
title: Slojevi označavanja
summary: Stavite označavanja na imenovane slojeve, pa prikažite, sakrijte ili zaključajte svaki sloj; drugi PDF pregledači takođe mogu da ih menjaju.
keywords: slojevi, sloj, sakrij, prikaži, zaključaj, grupiši označavanja, disciplina, mehanika, elektrika, opcioni sadržaj, ocg, vidljivost
from: 0fbb4c26
---

Slojevi grupišu označavanja, na primer po disciplini ili po recenzentu. Sakrijte sloj da vidite crtež ispod njega, ili ga zaključajte da se njegova označavanja ne bi slučajno pomerila.

## Napravite sloj i crtajte na njemu

1. Otvorite {{ui:Layers}}, na vrhu panela {{ui:Sheets}}.
2. Izaberite {{ui:New layer}}, ukucajte ime, na primer `Mechanical`, i izaberite {{ui:Add layer}}.
3. Novi sloj postaje tekući sloj: svako označavanje koje od sada nacrtate ide na njega. Izaberite ime drugog sloja ili {{ui:No layer}} da promenite gde idu nova označavanja.

Da premestite označavanje na drugi sloj, izaberite ga i odaberite sloj pod {{ui:Layer}} u {{ui:Properties}}. {{ui:New layer…}} na kraju te liste pravi sloj odmah. Premeštanje se može opozvati sa {{key:Mod+Z}}.

## Prikaz, skrivanje i zaključavanje

Red svakog sloja ima dva dugmeta:

- **Oko** prikazuje ili skriva sloj. Skrivena označavanja se ne crtaju i ne mogu se izabrati; i dalje se broje na listi {{ui:Markups}}.
- **Lokot** zadržava označavanja sloja na listu, ali sprečava da ih birate, pomerate ili brišete.

Dugme olovke preimenuje sloj i pomera njegova označavanja zajedno s njim. Filtrirajte listu {{ui:Markups}} po {{ui:Layer}} da vidite označavanja jednog sloja.

## U sačuvanom PDF-u

Svaki sloj postaje PDF sloj (opcioni sadržaj). Drugi PDF pregledači prikazuju slojeve u svom panelu slojeva i mogu ih menjati; sloj koji ste sakrili tamo takođe počinje kao skriven. Slojevi koje je crtež već imao, kao CAD slojevi, ostaju kakvi su bili. Kada ponovo otvorite kopiju u programu MarkupCraft, označavanja se vraćaju na svoje slojeve, skrivena i zaključana kako ste ih ostavili.

## Dobro je znati

- Skrivanje i zaključavanje nisu izmene: ne opozivaju se sa {{key:Mod+Z}}, ali se čuvaju u PDF-u.
- Kopiranje i lepljenje zadržavaju sloj označavanja.
- Spljoštena kopija crta svako označavanje na stranicu, bez obzira na njegov sloj. Pogledajte [Sačuvaj spljoštenu kopiju](topic:flatten).

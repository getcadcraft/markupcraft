---
title: Conceptes bàsics del BCF
summary: Què conté una exportació BCF de MarkupCraft, com fer-la servir amb eines de coordinació BIM i els seus límits.
keywords: bcf, bcfzip, format de col·laboració BIM, incidències, coordinació, col·lisió, temes, punt de vista, instantània, openbim, buildingsmart, exporta incidències
from: 0de26175
---

El BCF (BIM Collaboration Format) és un format de fitxer obert per passar incidències entre eines BIM. Molts programes de coordinació i de redacció de models poden importar un fitxer `.bcfzip` com a llista d'incidències. MarkupCraft escriu **BCF 2.1**.

## Com crear-ne una

1. Obriu la pestanya {{ui:Marques}}.
2. Filtreu la llista per allò que voleu enviar, per exemple {{ui:Estat}} "Obert". Només s'exporten les marques que hi ha a la llista.
3. Trieu {{ui:BCF}}.
4. Espereu mentre fa una instantània de cada marca ("Fent instantànies per al BCF (5 de 20)…").

Resultat: es descarrega "<name> markups.bcfzip", i la barra d'estat indica quants temes conté i la mida del fitxer.

## Què conté

Cada marca es converteix en un **tema**:

| Camp del tema | S'omple amb |
|---|---|
| Títol | Número de deficiència, assumpte i full, per exemple "#4 Núvol a A-101 — Planta" |
| Tipus | El tipus de marca (Núvol, Crida, Longitud…) |
| Estat | Open, Accepted, Rejected o Completed |
| Etiquetes | El tipus de marca i el full |
| Autor i dates | L'autor de la marca, i les dates de creació i de modificació |
| Assignada a, data límit | De l'element de la llista de deficiències, quan en té |
| Descripció | El seu text o el text del segell, el valor mesurat, el comentari, i el full i el fitxer |
| Comentaris | Un per resposta, amb l'autor i la data |
| Instantània | Una imatge de la marca a la seva part del full |
| Punt de vista | Una vista des de dalt de la posició de la marca al full |

Tornar a exportar la mateixa marca dóna el mateix identificador de tema, de manera que una eina que importi BCF pot reconèixer que és la mateixa incidència.

## Què torna en importar

{{ui:Importa BCF}} llegeix fitxers BCF 2.0, 2.1 i 3.0 (comprovat amb els 19 fitxers de prova oficials de buildingSMART 3.0: es va llegir cada tema i els comentaris dels tres que tenen text). Per a un tema que és dels vostres (mateix identificador de tema), afegeix els comentaris nous com a respostes i pren el nou estat. Qualsevol altre tema esdevé una nota al full que indiqui la seva etiqueta o el nom del fitxer, o si no, al full obert, amb el títol, la descripció, la persona assignada i la data límit com a text de la nota, i els seus comentaris com a respostes.

| Al tema BCF | A MarkupCraft |
|---|---|
| Títol, descripció, persona assignada, data límit | El text de la nota |
| Comentaris amb text | Respostes |
| Estat Open, Accepted, Rejected, Completed (Closed, Resolved, Done compten com a Completed) | L'estat de la marca |
| Autor i data de creació | L'autor i la data de la nota |
| Posició de la càmera | Un lloc al full, només per a un tema lligat a un full per etiqueta o nom de fitxer |
| Selecció del model, parts ocultes, plans de retall, instantànies | No es conserven: un full no té model on mostrar-les |

## Límits a tenir en compte

- **Un full no és un model.** El punt de vista assenyala la posició de la marca sobre el paper, mesurada en metres de paper. No porta una eina BIM a un lloc del model. Feu servir la instantània i el nom del full per trobar el lloc.
- **Els estats i els tipus són els de MarkupCraft** (Open, Accepted, Rejected, Completed; Núvol, Crida…). El fitxer els declara, tal com permet BCF, però una eina amb llistes fixes pròpies pot fer-hi correspondències o ignorar-los.
- **Importar porta comentaris, no vistes del model.** {{ui:Importa BCF}} afegeix respostes i estats a les marques que heu exportat, i fa notes de les altres incidències; no pot mostrar una càmera del model. Consulteu [Llista de marques i exportació](topic:markups-list-and-export#import-bcf).
- Enviar les marques de tornada en un PDF sovint és més senzill per a les revisions de plànols. El BCF serveix per portar els comentaris de plànols a un flux de coordinació de models.

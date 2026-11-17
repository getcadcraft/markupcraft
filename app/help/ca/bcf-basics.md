---
title: Conceptes bàsics del BCF
summary: Què conté una exportació BCF des de MarkupCraft, com es fa servir amb les eines de coordinació BIM i quins són els seus límits.
keywords: bcf, bcfzip, format de col·laboració BIM, incidències, coordinació, col·lisió, temes, punt de vista, instantània, openbim, buildingsmart, exporta incidències
from: 446f38c1
---

BCF (BIM Collaboration Format) és un format de fitxer obert per passar incidències entre eines BIM. Molts programes de coordinació de models i d'autoria poden importar un fitxer `.bcfzip` com a llista d'incidències. MarkupCraft escriu **BCF 2.1**.

## Crear-ne un

1. Obriu la pestanya {{ui:Marques}}.
2. Filtreu la llista pel que voleu enviar, per exemple {{ui:Estat}} "Obert". Només s'exporten les marques de la llista.
3. Trieu {{ui:BCF}}.
4. Espereu mentre es fa una instantània de cada marca ("Fent instantànies per al BCF (5 de 20)…").

Resultat: "<name> markups.bcfzip" es baixa, i la barra d'estat indica quants temes conté i la mida del fitxer.

## Què hi ha

Cada marca esdevé un **tema**:

| Camp del tema | S'omple amb |
|---|---|
| Títol | El número del punt, l'assumpte i el full, per exemple "#4 Núvol a A-101 — Planta" |
| Tipus | El tipus de marca (Núvol, Crida, Longitud…) |
| Estat | Obert, Acceptat, Rebutjat o Completat |
| Etiquetes | El tipus de marca i el full |
| Autor i dates | L'autor de la marca, i les dates de creació i de modificació |
| Assignat a, data límit | De l'element de la llista de deficiències, quan en té un |
| Descripció | El text de la marca o el text del segell, el valor mesurat, el comentari, i el full i el fitxer |
| Comentaris | Un per resposta, amb l'autor i la data |
| Instantània | Una imatge de la marca a la seva part del full |
| Punt de vista | Una vista des de dalt de la posició de la marca al full |

Exportar la mateixa marca de nou dona el mateix identificador de tema, de manera que una eina que importa BCF pot reconèixer que és la mateixa incidència.

## Límits que cal conèixer

- **Un full no és un model.** El punt de vista apunta a la posició de la marca sobre el paper, mesurada en metres de paper. No porta una eina BIM a un lloc del model. Feu servir la instantània i el nom del full per trobar el lloc.
- **Els estats i els tipus són els de MarkupCraft** (Obert, Acceptat, Rebutjat, Completat; Núvol, Crida…). El fitxer els declara, tal com permet BCF, però una eina amb llistes fixes pròpies els pot assignar d'una altra manera o ignorar-los.
- **Importar porta comentaris, no vistes del model.** {{ui:Importa BCF}} afegeix respostes i estats a les marques que heu exportat, i crea notes de les altres incidències; no pot mostrar una càmera del model. Vegeu [Llista de marques i exportació](topic:markups-list-and-export#import-bcf).
- Enviar les marques de tornada en un PDF sovint és més senzill per a les revisions de dibuixos. El BCF serveix per portar els comentaris dels dibuixos a un flux de treball de coordinació de models.

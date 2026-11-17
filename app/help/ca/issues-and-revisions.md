---
title: Emissions, revisions i registre de canvis del dibuix
summary: Mantenir un únic historial d'emissions amb el model de l'arquitecte: importar-hi les emissions, registrar instruccions d'obra, plànols de taller i models enllaçats contra una emissió, i consultar el registre de canvis del dibuix.
keywords: emissió, revisió, revisions, registre de canvis, registre de canvis del dibuix, registre de plànols, instrucció d'obra, plànol de taller, model enllaçat, licitació, construcció, historial d'emissions, núvol de revisió, núvol, conjunt de marcatges
from: e4688f64
---

## Què farà

Treballar amb el mateix historial d'emissions que la resta de l'equip. Veure quins fulls han sortit a quina revisió, i mantenir el que passa a obra vinculat a l'emissió a què pertany.

## Passos

1. Obriu **Emissions i revisions**.
2. Trieu **Llegeix un historial d'emissions** i escolliu el fitxer `.issues.json` desat des de BimCraft o una altra aplicació. Les seves emissions i registres s'afegeixen als vostres. No se'n substitueix cap.
3. Trieu **Afegeix un registre** per a una instrucció d'obra, un plànol de taller, un conjunt de marcatges, un model enllaçat o una nota. Escolliu l'emissió a què correspon i el seu estat. Un fitxer que trieu es registra pel seu nom, mida i SHA-256; el fitxer es queda on és.
4. **Registre de canvis del dibuix** mostra una fila per a cada full i una columna per a cada emissió. Una revisió entre parèntesis s'ha tornat a emetre sense canvis.
5. **Baixa el registre de canvis (CSV)** desa les emissions, la taula de fulls i els registres. **Desa l'historial d'emissions** escriu un fitxer que llegeixen les altres aplicacions.

## Bon a saber

- **Registra els marcatges seleccionats** posa els marcatges que heu seleccionat contra l'última emissió. Un núvol es registra com a núvol de revisió a la revisió d'aquella emissió. Trieu **Mostra** al costat del registre per anar-hi.
- **Registra una emissió** emet els vostres fulls marcats. **Canvis des de** després indica quins fulls s'han marcat després d'aquella emissió.
- L'historial es desa dins del PDF marcat. No forma part de Desfés.
- Llegir dues vegades el mateix fitxer no afegeix res per duplicat. Quan dues còpies tenen el mateix registre, es conserva el més nou.

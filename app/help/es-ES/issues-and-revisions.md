---
title: Emisiones, revisiones y registro de cambios de planos
summary: Mantenga un historial de emisiones con el modelo del arquitecto: lea las emisiones, registre instrucciones de obra, planos de taller y modelos vinculados frente a una emisión, y lea el registro de cambios de planos.
keywords: emisión, revisión, revisiones, registro de cambios, registro de cambios de planos, registro de planos, instrucción de obra, plano de taller, modelo vinculado, licitación, obra, historial de emisiones, nube de revisión, nube, juego de marcas
from: e4688f64
---

## Qué hará

Trabaje con el mismo historial de emisiones que el resto del equipo. Vea qué planos salieron con cada revisión y registre lo que ocurre en obra frente a la emisión a la que pertenece.

## Pasos

1. Abra **Emisiones y revisiones**.
2. Elija **Leer un historial de emisiones** y seleccione el archivo `.issues.json` guardado desde BimCraft u otra aplicación. Sus emisiones y registros se añaden a los suyos. No se reemplaza nada.
3. Elija **Añadir un registro** para una instrucción de obra, un plano de taller, un juego de marcas, un modelo vinculado o una nota. Seleccione la emisión a la que corresponde y su estado. Un archivo que elija se registra por su nombre, tamaño y SHA-256; el archivo se queda donde está.
4. **Registro de cambios de planos** muestra una fila por cada hoja y una columna por cada emisión. Una revisión entre corchetes se volvió a emitir sin cambios.
5. **Descargar el registro de cambios (CSV)** guarda las emisiones, la tabla de hojas y los registros. **Guardar el historial de emisiones** escribe un archivo que leen las demás aplicaciones.

## Conviene saber

- **Registrar las marcas seleccionadas** pone las marcas que seleccionó frente a la última emisión. Una nube se registra como nube de revisión con la revisión de esa emisión. Elija **Mostrar** junto al registro para ir hasta él.
- **Registrar una emisión** emite sus hojas marcadas. **Cambios desde** indica después qué hojas se marcaron después de esa emisión.
- El historial se guarda dentro del PDF marcado. No forma parte de Deshacer.
- Leer dos veces el mismo archivo no añade nada por duplicado. Cuando dos copias contienen el mismo registro, se conserva el más reciente.

---
title: Emisiones, revisiones y el registro de cambios del plano
summary: Mantenga un solo historial de emisiones con el modelo del arquitecto: lea las emisiones, registre instrucciones de obra, planos de taller y modelos vinculados contra una emisión, y lea el registro de cambios del plano.
keywords: emisión, revisión, revisiones, registro de cambios, registro de cambios del plano, registro de planos, instrucción de obra, plano de taller, modelo vinculado, licitación, construcción, historial de emisiones, nube de revisión, nube, juego de marcas
from: e4688f64
---

## Lo que hará

Trabaje con el mismo historial de emisiones que el resto del equipo. Vea qué hojas salieron en qué revisión, y mantenga lo que ocurre en obra asociado a la emisión a la que pertenece.

## Pasos

1. Abra **Emisiones y revisiones**.
2. Elija **Leer un historial de emisiones** y seleccione el archivo `.issues.json` guardado desde BimCraft u otra aplicación. Sus emisiones y registros se agregan a los suyos. No se reemplaza nada.
3. Elija **Agregar un registro** para una instrucción de obra, un plano de taller, un juego de marcas, un modelo vinculado o una nota. Seleccione la emisión a la que corresponde y su estado. Un archivo que elija se registra por su nombre, tamaño y SHA-256; el archivo permanece donde está.
4. **Registro de cambios del plano** muestra una fila por cada hoja y una columna por cada emisión. Una revisión entre paréntesis se volvió a emitir sin cambios.
5. **Descargar el registro de cambios (CSV)** guarda las emisiones, la tabla de hojas y los registros. **Guardar el historial de emisiones** escribe un archivo que leen las otras aplicaciones.

## Para tener en cuenta

- **Registrar las marcas seleccionadas** pone las marcas que seleccionó contra la última emisión. Una nube se registra como nube de revisión en la revisión de esa emisión. Elija **Mostrar** junto al registro para ir a él.
- **Registrar una emisión** emite sus hojas marcadas. **Cambios desde** indica entonces qué hojas se marcaron después de esa emisión.
- El historial se guarda dentro del PDF marcado. No forma parte de Deshacer.
- Leer dos veces el mismo archivo no agrega nada dos veces. Cuando dos copias tienen el mismo registro, se conserva la más nueva.

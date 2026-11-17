---
title: Usar MarkupCraft con un asistente de IA
summary: Deje que su propio asistente de IA o script liste las anotaciones de un conjunto, añada otras sencillas, fije su estado, responda y exporte la lista: permisos, conexión a través de CadCraft Studio y el registro de actividad.
keywords: ia, asistente, agente, mcp, protocolo de contexto de modelo, script, automatización, anotaciones, revisión, permisos, desconectar, actividad
from: 095f2977
---

## Lo que aprenderá

Cómo dejar que un asistente de IA (o un script que haya escrito) trabaje con MarkupCraft, y cómo decidir qué puede tocar.

MarkupCraft **no tiene IA propia** y no envía nada a ningún sitio. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). MarkupCraft solo le ofrece herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Ajustes}} (el engranaje de la barra de aplicación, o {{key:Mod+,}}) y vaya a la pestaña {{ui:MarkupCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen MarkupCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer: **Leer** está marcado al principio; marque **Editar**, **Guardar** o **Exportar** solo cuando los necesite.

Las herramientas fuera de los permisos que marcó no se ofrecen al asistente, y si pide una de todos modos, MarkupCraft la rechaza y lo anota en el registro de actividad. Desactivar el interruptor termina todas las conexiones a la vez; {{ui:Restablecer los ajustes de MarkupCraft}} también lo desactiva.

## Conectar su asistente

Los asistentes se conectan a través de **CadCraft Studio** en su equipo: Studio ejecuta un pequeño servidor al que solo puede acceder este equipo, protegido por un token que genera cada vez que se inicia. En Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token en su asistente (Studio muestra los ajustes exactos que debe pegar). Nunca comparta el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones de navegador el interruptor no tiene efecto hasta que use CadCraft Studio en su equipo.
:::

## Usted sigue al mando

- **Cada cambio es un solo paso de deshacer**, etiquetado con el nombre del asistente (por ejemplo, "Asistente: add cloudrect"). {{key:Mod+Z}} retira el último cambio del asistente en su conjunto.
- **Sabe cuándo hay uno conectado.** Un botón de la barra de aplicación indica el asistente mientras está conectado; haga clic en él para ver lo que puede hacer, o para **Desconectar**.
- **Actividad.** {{ui:Ajustes}} › {{ui:MarkupCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} enumera cada llamada: cuándo, qué herramienta, y si se hizo o se rechazó. {{ui:Guardar el registro}} guarda una copia.

## Qué puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `sheets_list` | Leer | Los conjuntos abiertos, sus hojas y cuántas anotaciones tiene cada uno |
| `markups_list` | Leer | Las anotaciones con tipo, hoja, texto, comentario, medición, estado, autor y respuestas, filtradas por hoja, estado, tipo o autor |
| `markup_add` | Editar | Añade un rectángulo, nube, elipse, cuadro de texto, nota, línea o flecha a una hoja |
| `markup_status`, `markup_reply` | Editar | Fija el estado de una anotación (registrado en su hilo, firmado por el asistente); añade un comentario a un hilo |
| `markups_export` | Exportar | El CSV o BCF propio de la lista {{ui:Anotaciones}} con lo que muestra la lista (con sus filtros tal como los haya fijado); en Studio puede escribir el archivo en una carpeta que haya permitido |
| `tasks_list` | Leer | Las anotaciones que son tareas: responsable (persona o asistente), día límite, estado, enlace y cómo se cerró. `assignee: "assistant"` lista el trabajo que espera a un asistente |
| `task_set`, `task_clear` | Editar | Convierten una anotación en tarea o la cambian (título, responsable, fecha límite, estado, enlace); quitan la tarea |
| `tasks_check` | Editar | Cierran las tareas cuya área de dibujo o elemento de modelo vinculado cambió realmente; pase los estados de elementos que leyó de la otra aplicación |
| `revisions_changes` | Leer | La lista sencilla de lo que cambió entre dos conjuntos de planos abiertos, para expresarlo con sus propias palabras |
| `pins_list`, `decision_add` | Leer, Editar | Notas de voz (duración, quién, cuándo, pie de texto; nunca el sonido ni la transcripción) y decisiones; fije una decisión y reemplace una anterior |
| `redline_export`, `redline_answer` | Exportar, Editar | Escriben el archivo redline para el delineante; aplican las respuestas del delineante |

Una anotación que añade un asistente lo nombra como autor: el nombre que el propio programa asistente se da, seguido de "(asistente)", o de "(asistente para <su nombre>)" una vez que haya configurado su nombre de revisor. Sus cambios de estado y respuestas se firman de la misma manera. Cada uno es un paso de deshacer. Guardar el PDF anotado sigue siendo cosa suya: use {{ui:Guardar}} como de costumbre.

Sin abrir MarkupCraft, el servidor MCP de CadCraft lista las anotaciones de un PDF de una carpeta que usted indique (`markups_list`), y `cadcraft info Set.pdf` las imprime en la línea de comandos.

## Si algo no funciona

- **El asistente no ve herramientas de MarkupCraft:** compruebe que el interruptor está activado en esta ventana y que la ventana está abierta en Studio.
- **"needs the edit permission":** marque **Editar** en {{ui:Asistentes}} y vuelva a pedirlo.
- **Errores "401" o "token":** el token cambió (Studio se reinició, o se usó {{ui:Nuevo token}}). Copie el nuevo en los ajustes del asistente.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos prácticos, cada uno con las herramientas que llama.

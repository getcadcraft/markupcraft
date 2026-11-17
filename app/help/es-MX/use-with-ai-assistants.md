---
title: Usar MarkupCraft con un asistente de IA
summary: Permita que su propio asistente de IA o script liste las marcas de un juego, agregue marcas sencillas, asigne su estado, responda y exporte la lista: permisos, conexión mediante CadCraft Studio y el registro de actividad.
keywords: IA, asistente, agente, mcp, protocolo de contexto de modelo, script, automatización, marcas, revisión, permisos, desconectar, actividad
from: 095f2977
---

## Lo que aprenderá

Cómo permitir que un asistente de IA (o un script que escribió) trabaje con MarkupCraft, y cómo decidir qué puede tocar.

MarkupCraft **no tiene IA propia** y no envía nada a ningún lado. Usted aporta el asistente: cualquier programa que hable el Protocolo de contexto de modelo (MCP). MarkupCraft solo le da herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Configuración}} (el engranaje de la barra de aplicaciones, o {{key:Mod+,}}) y vaya a la pestaña {{ui:MarkupCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen MarkupCraft**. Está desactivado hasta que lo haga.
3. Elija qué puede hacer: **Lectura** viene marcada al inicio; marque **Edición**, **Guardar** o **Exportar** solo cuando las necesite.

Las herramientas fuera de los permisos que marcó no se ofrecen al asistente, y si pide una de todos modos, MarkupCraft la rechaza y lo anota en el registro de actividad. Apagar el interruptor termina todas las conexiones de inmediato; {{ui:Restablecer la configuración de MarkupCraft}} también lo apaga.

## Conectar su asistente

Los asistentes se conectan mediante **CadCraft Studio** en su computadora: Studio ejecuta un pequeño servidor al que solo esta computadora puede acceder, protegido por un token que genera cada vez que se inicia. En Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token en su asistente (Studio muestra la configuración exacta que debe pegar). Nunca comparta el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones de navegador el interruptor no tiene efecto hasta que use CadCraft Studio en su computadora.
:::

## Usted sigue al mando

- **Cada cambio es un solo paso de deshacer**, con el nombre del asistente como etiqueta (por ejemplo, "Asistente: agregar cloudrect"). {{key:Mod+Z}} revierte el último cambio del asistente completo.
- **Sabe cuándo hay uno conectado.** Un botón en la barra de aplicaciones muestra el nombre del asistente mientras está conectado; haga clic para ver lo que puede hacer, o para **Desconectar**.
- **Actividad.** {{ui:Configuración}} › {{ui:MarkupCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} enumera cada llamada: cuándo, qué herramienta, realizada o rechazada. {{ui:Guardar el registro}} conserva una copia.

## Lo que un asistente puede pedir

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `sheets_list` | Lectura | Los juegos abiertos, sus hojas y cuántas marcas tiene cada una |
| `markups_list` | Lectura | Las marcas con tipo, hoja, texto, comentario, medición, estado, autor y respuestas, filtradas por hoja, estado, tipo o autor |
| `markup_add` | Edición | Agrega un rectángulo, nube, elipse, cuadro de texto, nota, línea o flecha a una hoja |
| `markup_status`, `markup_reply` | Edición | Asigna el estado de una marca (queda registrado en su conversación, firmado por el asistente); agrega un comentario a una conversación |
| `markups_export` | Exportar | El CSV o BCF de la lista de {{ui:Marcas}} con lo que muestra (con sus filtros tal como los definió); en Studio puede escribir el archivo en una carpeta que usted permitió |
| `tasks_list` | Lectura | Las marcas que son tareas: responsable (persona o asistente), día límite, estado, enlace y cómo se cerró. `assignee: "assistant"` lista el trabajo que espera a un asistente |
| `task_set`, `task_clear` | Edición | Convierten una marca en tarea o la cambian (título, responsable, fecha límite, estado, enlace); quitan la tarea |
| `tasks_check` | Edición | Cierran tareas cuyas áreas de dibujo o elementos del modelo enlazados realmente cambiaron; pase los estados de los elementos que leyó de la otra aplicación |
| `revisions_changes` | Lectura | La lista simple de lo que cambió entre dos juegos de planos abiertos, para expresarlo con sus propias palabras |
| `pins_list`, `decision_add` | Lectura, Edición | Notas de voz (duración, quién, cuándo, leyenda; nunca el sonido ni la transcripción) y decisiones; fije una decisión y reemplace una anterior |
| `redline_export`, `redline_answer` | Exportar, Edición | Escriben el archivo de marcas de revisión para el dibujante; aplican las respuestas del dibujante |

Una marca que agrega un asistente lo registra como autor: el nombre que el programa del asistente se da a sí mismo, seguido de "(asistente)", o de "(asistente para <su nombre>)" cuando ya haya configurado su nombre de revisor. Sus cambios de estado y sus respuestas se firman de la misma manera. Cada uno es un paso de deshacer. Guardar el PDF con marcas sigue siendo tarea suya: use {{ui:Guardar}} como de costumbre.

Sin abrir MarkupCraft, el servidor MCP de CadCraft lista las marcas de un PDF en una carpeta que usted indique (`markups_list`), y `cadcraft info Set.pdf` las imprime en la línea de comandos.

## Si algo no funciona

- **El asistente no ve herramientas de MarkupCraft:** verifique que el interruptor esté activado en esta ventana y que la ventana esté abierta en Studio.
- **"needs the edit permission":** marque **Edición** en {{ui:Asistentes}} y vuelva a pedirlo. El mensaje dice "requiere el permiso de edición".
- **Errores "401" o "token":** el token cambió (Studio se reinició, o {{ui:Nuevo token}}). Copie el nuevo en la configuración del asistente.

## Ver también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos prácticos, cada uno con las herramientas que llama.

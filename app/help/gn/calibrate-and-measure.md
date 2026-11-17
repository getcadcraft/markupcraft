---
title: Calibrar una hoja y medir
summary: Emoĩ cada hoja escala preset térã peteĩ tamaño conocido, upéi medí longitudes, áreas perímetro-ndi ha conteos.
keywords: calibrar, escala, fijar escala, medir, longitud, distancia, cota, área, pie cuadrado, perímetro, contar, cómputo, cantidad, regla, aritmética, cálculo, más, fracción
from: 49a25c6d
---

Longitudes ha áreas ohaiva hoja escala. MarkupCraft oñongatu escala **hoja peteĩ-peteĩ**: calibrá cada hoja oñemedíva. Conteo ndoipotái escala.

Barra de estado ohechauka hoja escala, térã "Sin calibrar".

## Eiporavo escala lista-gui

Ko oipotáva PDF tamaño completo (24 × 36 hoja ojapo 24 × 36) ha plano ohechaukáva escala.

1. Eclick escala botón barra de estado-pe ("Sin calibrar"). Oñepyrũ "Escala de hoja" caja.
2. {{ui:Escala}} rupi, eiporavo escala: arquitectónica (1/32" = 1'-0" peve 3" = 1'-0"), ingeniería (1" = 10' peve 1" = 100') térã métrica (1:1 peve 1:1000).
3. Eiporavo {{ui:Fijar escala}}.

Resultado: barra de estado ohechauka escala, por ejemplo `1/4" = 1'-0"`. Arquitectónica escala ohechauka longitudes pie ha pulgada rupi, ingeniería pie decimal rupi, métrica escala 1:50 peve milímetro rupi ha 1:100 desde metro rupi.

:::warning
Preset añete'ỹ PDF ndojejeporu'ỹmi. Mitad tamaño juego, térã "fit to page" ojapo hoja, preset rupi ndojemedi porã. Calibrá peteĩ tamaño conocido rupi, ha ehecha peteĩ tamaño jepe.
:::

## Calibrá tamaño conocido rupi

Ko oipotáva mitad tamaño juego, escaneado hoja, detalle escala ndojeporãiva térã preset ehecha hag̃ua.

1. Eju peteĩ oikuaáva tamaño hetaiterei, térã escala barra gráfica.
2. Eiporavo {{ui:Calibrar}} {{ui:Medir}} grupo-pe (térã eiporavo {{ui:Elegir dos puntos}} "Escala de hoja" caja-pe).
3. Eclick tamaño mokõi ñúi, upéi ótro. (Térã ejeru un ñúi-gui ótro-pe.) Zoom ha'e porã precisión-hag̃ua; {{key:Shift}} omoĩ línea 45° pasos-pe.
4. Caja ohechauka mbovy ñúi papel-pe, ha ojerure "¿Cuán lejos están en realidad?". Escribí {{ui:Distancia real}}, por ejemplo `24'-0"`, `12' 6 1/2"`, `7.2 m` térã `900 mm`.
5. Eiporavo longitudes mba'éichapa ohechauka {{ui:Mostrar longitudes en}}: {{ui:Pie ha pulgada}}, {{ui:Pies decimales}}, {{ui:Pulgadas}}, {{ui:Metros}} térã {{ui:Milímetros}}.
6. Eiporavo {{ui:Fijar escala}}.

Resultado: barra de estado ohechauka "Calibrado: 24'-0" sobre 1.00 in" (tamaño real ha tamaño papel-pe), ha herramienta oñemedíva jey ojevy. Longitud escribi jepe ohechakuaa [Unidades y longitudes](topic:units-and-scales).

Tamaño real ikatu avei peteĩ cálculo michĩ: `12'6"+3/4"`, `(24'-0")/3` térã `2*450mm`. Emoĩ `+ - * /` ha paréntesis; número unidad ndive ndojeheʼỹva oñemboja unidad {{ui:Mostrar longitudes en}} rupi (pie {{ui:Pie ha pulgada}} rupi). {{ui:Fijar escala}} oipuru resultado.

MarkupCraft ndokuaaiʼỹmi escrito, caja ohechauka: 'Esa no es una longitud que MarkupCraft entienda. Probá 24'-0", 12' 6 1/2", 7.2 m térã 900 mm.' Cálculo ndojejapóiva ohechauka mba'ére ha móte: por ejemplo "Un paréntesis no está cerrado (carácter 5)."

## Medí longitud

1. Eiporavo {{ui:Longitud}} ({{key:M}}).
2. Eclick comienzo, upéi final. Térã ejeru comienzo-gui final-pe. {{key:Shift}} omoĩ 45° pasos-pe.

Resultado: cota línea marcas ha longitud escrito. Barra de estado jey ohechauka ("Longitud: 12'-6 1/2" (1/4" = 1'-0")."), ha {{ui:Propiedades}} ohechauka {{ui:Longitud}} rupi. Pie ha pulgada 1/16" peve redondeado.

Hoja ndaiporiva'ỹ escala, eiporavo {{ui:Longitud}} ohechauka {{ui:Calibrar}} ha barra de estado ohechakuaa: "Primero calibrá esta hoja: elegí dos puntos a una distancia conocida, o elegí su escala. Después medí." Escala fijá rire, {{ui:Longitud}} jey oiko.

## Croquis a escala

Calibrado hoja-pe ikatu escribi longitudes reales dibujá {{ui:Línea}}, {{ui:Flecha}}, {{ui:Longitud}}, {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}}, {{ui:Área}} térã espacio:

1. Eclick primer punto.
2. Eñeña dirección próximo segmento-pe ha escribí longitud, por ejemplo `16` (hoja unidad-pe), `12'6"` térã `3.5 m`. Caja oñepyrũ puntero-pe escribí rire.
3. Eprensa {{key:Enter}}. Punto oñeʼẽ ese tuichave, puntero dirección-pe.

Dirección hetave ojerure hag̃ua, emoĩ `<` ha grados ángulo: `8 < 90` ohendu 8 pie tuichave, `4<0` derecha-pe, `10 < 225` abajo ha izquierda-pe, hoja ohecháicha (página ojerokyva avei). Escribí longitudes próximo esquina-kuéra-pe, ha tapichá forma rejapo ha'e ojeporúva. {{key:Esc}} cajas cierra punto omoĩ'ỹre.

## Medí ángulo

1. Eiporavo {{ui:Ángulo}} ({{key:X}}).
2. Eclick peteĩ brazo final, upéi esquina, upéi ótro brazo final.

Resultado: mokõi brazo, esquina-pe michĩ arco ha ángulo grados-pe, peteĩ decimal peve (0° peve 180°). Ángulo ndoipotái escala. {{ui:Propiedades}} ohechauka {{ui:Ángulo}} rupi, ha lista, CSV ha BCF oguereko avei.

{{ui:Arco}} ({{key:O}}) calibrado hoja-pe ohechauka avei curva rupi longitud {{ui:Propiedades}}-pe.

## Medí área ha perímetro

1. Eiporavo {{ui:Área}} ({{key:Q}}).
2. Eclick cada esquina de sala térã región.
3. Finalizá doble clic, {{key:Enter}} térã clic derecho (touch-pe doble toque). {{key:Backspace}} omboguejy última esquina.

Resultado: sombreado contorno área ha "P" perímetro medio, por ejemplo "128.00 sq ft" ha "P 48'-0"". Pie escalas ojapo pie cuadrado, pulgada pulgada cuadrada, metro metro cuadrado, milímetro milímetro cuadrado. Área oiporiahu mbohapy esquina.

### Recortes

Columna, eje térã patio ndaikatúi oñemoĩ, eiporavo área ha eiporavo {{ui:Agregar un recorte}} {{ui:Propiedades}}-pe. Eclick recorte esquina-kuéra área-pe ha finalizá área-icha. Recorte ojekuaaiva abierto (sin sombra), área oñemboguejy, ha bordes perímetro-pe ojerovia: 16' × 8' sala 4' × 4' recorte ndive ohechauka "112.00 sq ft" ha "P 64'-0"". Ojeporu hetaiterei; ndaikatúi oñemboguái, ndaikatúi oñemboykeʼi área contorno. {{ui:Quitar recortes}} opavave oñemboguejy, ha {{key:Mod+Z}} peteĩ oñemboguejy.

## Contá cosas

1. Eiporavo {{ui:Contar}} ({{key:U}}).
2. {{ui:Propiedades}}-pe escribí {{ui:Nombre del grupo}}, por ejemplo "Desagües de piso". (Ko'ẽ jey ndoguejyi.)
3. Eclick cada ítem hoja-pe.

Resultado: cada clic omoĩ número punto, primer punto oguereko etiqueta "Desagües de piso: 7", barra de estado ohechauka total.

- **Ambue grupo oñepyrũ:** eprensa {{key:Esc}} peteĩ jey (oñemboguejy selección), emoambue {{ui:Nombre del grupo}}, ha eclick jey.
- **Grupo existente-pe omoñe'ẽ:** eiporavo grupo, upéi {{ui:Contar}} ha eclick.
- **Marca omboguejy:** grupo selecciona'ỹ, eñongatu {{key:Shift}} ha eclick punto. Último punto omboguejy, grupo oguejy. Teclado ndaipóri pantalla táctil-pe, eiporavo {{key:Mod+Z}} térã {{ui:Deshacer}}.
- **Grupo réra cambiá:** eiporavo ha emoambue {{ui:Nombre del grupo}} {{ui:Propiedades}}-pe.

Conteo grupo peteĩ hoja-pe ha'e. Hojas hetaiterei conteo ohechauka grupo separado anotaciones lista-pe.

## Cambiá térã omboguejy escala

Eclick escala botón barra de estado-pe. Caja ohechauka escala ko'ẽrõ, eiporavo ótra, térã eiporavo {{ui:Elegir dos puntos}}, térã {{ui:Quitar escala}}.

Longitudes ha áreas ojapo ya **medidas de nuevo** escala pyahúpe enseguida. Deshacer escala vieja jey ojevy.

## Mba'e oho medidas

- {{ui:Propiedades}} ohechauka medida valores selecciona'va.
- {{ui:Anotaciones}} pestaña ohechauka valor cada, ha CSV-pe "Medición" columna oguereko. Ehecha [Lista de anotaciones](topic:markups-list-and-export).
- Guardá PDF escala página-pe oñongatu, ha longitudes áreas medición comentarios-pe oñeha'ã, ambue PDF programa-kuéra ikatu ohechauka. Ehecha [Mba'e oñongatu PDF-pe](topic:what-the-pdf-keeps).

Ítem, conjunto ha precio cómputo kompleto hag̃ua, eiporu TakeoffCraft: MarkupCraft mide revisión-pe, ndaha'éi presupuesto-pe.

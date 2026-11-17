---
title: Copiar un área de la página, o una superposición
summary: Copie parte de una hoja con un rectángulo, una elipse o una forma a mano alzada y péguela en otra hoja, en CadCraft, BimCraft, DetailCraft o cualquier programa, a su tamaño; cópiela como superposición transparente y alinee una imagen con dos puntos.
keywords: copiar área, área, recortar, recorte, captura, portapapeles, región, rectángulo, elipse, círculo, a mano alzada, lazo, imagen, png, superposición, transparente, tinte, opacidad, pegar, tamaño real, escala, alinear, dos puntos, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Elija {{ui:Más}} › {{ui:Copiar un área de la página…}}. Se abre una barra sobre la hoja.

## Elija el área

Elija {{ui:Rectángulo}}, {{ui:Elipse}} o {{ui:A mano alzada}} en la barra, luego arrastre sobre la hoja:

- **Rectángulo:** arrastre un cuadro alrededor de la parte a copiar.
- **Elipse:** arrastre un cuadro; se copia la elipse dentro de él, y las esquinas fuera de ella quedan transparentes.
- **A mano alzada:** dibuje alrededor de la parte a copiar; la forma se cierra sola. Lo que queda afuera es transparente.

Arrastre de nuevo para empezar otra vez, o presione {{key:Esc}}.

## Copie

- {{ui:Incluir marcas}} copia sus marcas con la página; desmárquelo para obtener el dibujo limpio.
- {{ui:Resolución}}: {{ui:Como en pantalla}}, 72, 150 o 300 dpi. La imagen se mantiene por debajo de 3 MB; cuando un área grande en alta resolución superaría ese límite, la resolución se reduce y la línea de estado indica a cuánto.
- {{ui:Copiar}} (o {{key:Mod+C}} o {{key:Enter}}) pone el área en el portapapeles como imagen PNG, que se pega en Word, correo electrónico, otros programas de PDF y programas de dibujo.
- {{ui:Guardar como PNG}} descarga la imagen en su lugar, para un programa que elimina las partes transparentes al pegar.

## Copie como superposición

{{ui:Copiar como superposición}} además hace transparente el papel blanco, así que solo quedan las líneas. {{ui:Color}} da a cada línea un solo color (rojo, azul, verde, naranja o morado) para que la superposición resalte sobre el dibujo de abajo; {{ui:Colores propios}} los conserva. {{ui:Intensidad}} es la fuerza con la que empieza al pegarse en nuestras aplicaciones (50 % salvo que lo cambie).

## Péguela

**En MarkupCraft**, {{key:Mod+V}} en cualquier hoja pega el área como una marca de imagen en el puntero. Entra a su tamaño:

- en papel, el mismo tamaño que tenía en la hoja de origen;
- cuando ambas hojas tienen escala, el mismo tamaño en el dibujo: un área de una hoja 1:50 entra a la mitad de su tamaño en papel en una hoja 1:100.

Una superposición empieza con su intensidad; cámbiela con {{ui:Opacidad}} en {{ui:Propiedades}}. Mueva, cambie de tamaño, bloquee y elimine como cualquier imagen, y marque {{ui:Aplanar en la página al guardar}} para dibujarla dentro de la página.

**En CadCraft, BimCraft y DetailCraft** la copia también conoce su tamaño, así que al pegar entra al tamaño real del dibujo cuando la hoja tenía escala, o pide uno cuando no la tenía. Vea la ayuda de cada aplicación sobre imágenes.

## Alinee una imagen con dos puntos

Seleccione una imagen o una superposición y elija {{ui:Más}} › {{ui:Alinear una imagen con dos puntos}}:

1. Haga clic en un punto de la imagen.
2. Haga clic en el lugar donde va ese punto.
3. Haga clic en un segundo punto de la imagen, lejos del primero.
4. Haga clic en el lugar donde va ese punto.

La imagen se escala, mueve y gira para que ambos puntos caigan donde hizo clic. {{key:Esc}} se detiene; {{key:Mod+Z}} lo deshace en un solo paso.

## Conviene saber

- El tamaño viaja con la copia solo entre nuestras aplicaciones del mismo sitio, y solo para una copia hecha en las últimas horas; otro programa recibe una imagen simple.
- Si el navegador no permite que MarkupCraft use el portapapeles del sistema, la línea de estado lo indica: pegar en nuestras aplicaciones sigue funcionando, y {{ui:Guardar como PNG}} funciona para otros programas.
- Alinear gira la imagen redibujando sus píxeles, así que una imagen girada queda un poco más suave que el original.

---
title: Seleccionar, mover e cambiar anotacións
summary: Escoller anotacións facendo clic ou cunha xanela, mover, redimensionar, desprazar lixeiramente, cortar, copiar, pegar, pegar no mesmo sitio, duplicar, eliminar e desfacer.
keywords: seleccionar, selección, seleccionar todo, non seleccionar nada, xanela, cruzamento, mover, redimensionar, agarraderas, manexadores, desprazar lixeiramente, cortar, copiar, pegar, pegar no mesmo sitio, duplicar, portapapeis, outra lapela, eliminar, desfacer, refacer, editar
from: 62c7def3
---

Escolla {{ui:Seleccionar}} ({{key:V}}) primeiro. {{key:Esc}} tamén leva ata alí: a primeira pulsación borra a selección, a seguinte volve a {{ui:Seleccionar}}.

## Escoller anotacións

:::mouse
- **Unha anotación:** faga clic nela. Aparecen unha caixa de trazos e as agarraderas, e {{ui:Propiedades}} mostra a anotación.
- **Engadir ou quitar unha:** manteña {{key:Shift}} e faga clic.
- **Completamente dentro dunha xanela:** arrastre de esquerda a dereita nunha parte baleira da folla. Só se escollen as anotacións que quedan enteiras dentro da caixa (contorno continuo).
- **Ao tocar unha xanela:** arrastre de dereita a esquerda. Escóllese calquera cousa que a caixa toque (contorno verde de trazos).
- **Todo nesta folla:** {{key:Mod+A}}, ou {{ui:Máis}} e despois {{ui:Seleccionar todo}} no grupo {{ui:Editar}} da barra de ferramentas.
- **Ningunha:** faga clic nun espazo baleiro, prema {{key:Esc}}, ou {{ui:Máis}} e despois {{ui:Non seleccionar nada}}.
:::

:::touch
- **Unha anotación:** toque nela.
- **Varias:** arrastre un dedo por unha parte baleira da folla para debuxar unha xanela. De esquerda a dereita escolle o que queda enteiro dentro; de dereita a esquerda escolle o que toca.
- Tocar con {{key:Shift}} mantido só funciona con teclado conectado. Sen teclado, use unha xanela.
- Un dedo nunca despraza en {{ui:Seleccionar}}; use dous dedos, ou a ferramenta {{ui:Desprazar}}.
:::

Os comentarios de só lectura que viñeron co ficheiro amosan unha caixa gris de trazos e sen agarraderas. Pódense escoller e responder, pero non cambiar.

## Mover e redimensionar

- **Mover:** arrastre unha anotación seleccionada. Manteña {{key:Shift}} para mover só en múltiplos de 45°. Varias anotacións seleccionadas se mover xuntas.
- **Redimensionar:** con unha anotación seleccionada, arrastre unha agarradeira. As agarraderas cadradas redimensionan a caixa (manteña {{key:Shift}} para conservar as proporcións); as redondas moven un punto de esquina dunha liña, polilínea, polígono, nube ou medida (manteña {{key:Shift}} para 45°); as agarraderas en rombo moven a punta e o cóbado dunha chamada. Os trazos de lapis escálanse desde a súa caixa.
- **Desprazamento lixeiro:** prema as teclas de frecha para mover a selección un píxel da pantalla; manteña {{key:Shift}} para dez. Cada pulsación é un paso de desfacer.

## Cambiar o que di ou como se ve

- **Texto, chamadas e notas:** faga dobre clic na anotación, ou prema {{key:Enter}}, ou escolla {{ui:Editar na folla}} en {{ui:Propiedades}}. Escriba, e despois faga clic fóra ou prema {{key:Mod+Enter}}. {{key:Esc}} cancela a edición.
- **Selos:** escolla outro selo en {{ui:Propiedades}} (o dobre clic abre {{ui:Propiedades}} por vostede).
- **Estilo:** {{ui:Cor}}, {{ui:Largura de liña}}, {{ui:Recheo}}, {{ui:Opacidade}} e {{ui:Tamaño do texto}} baixo «Estilo» en {{ui:Propiedades}}. Con varias seleccionadas, {{ui:Propiedades}} amosa os tipos que escolleu e cámbiaos todos de golpe.

## Copiar, pegar e duplicar

O grupo {{ui:Editar}} da barra de ferramentas ten {{ui:Copiar}} e {{ui:Pegar}}; o seu menú {{ui:Máis}} ten todas estas, cada unha coa súa tecla.

| Comando | Tecla | Que fai |
|---|---|---|
| {{ui:Cortar}} | {{key:Mod+X}} | Copia as anotacións seleccionadas e elimínaas |
| {{ui:Copiar}} | {{key:Mod+C}} | Copia as anotacións seleccionadas |
| {{ui:Pegar}} | {{key:Mod+V}} | Pon unha copia na folla en que está (onde, máis abaixo) |
| {{ui:Pegar no mesmo sitio}} | {{key:Mod+Shift+V}} | Pon a copia exactamente no lugar desde onde se copiou: na mesma folla, enriba do orixinal; noutra folla, no mesmo lugar do papel |
| {{ui:Duplicar}} | {{key:Mod+D}} | Fai unha copia da selección un pouco cara abaixo e cara á dereita, sen tocar o que copiara antes |

**Onde pon a copia Pegar:**

- {{key:Mod+V}} co punteiro na folla pon a copia centrada onde está o punteiro. Mova o punteiro, prema de novo {{key:Mod+V}}, e colocará outra.
- O botón {{ui:Pegar}} (entón o punteiro está na barra de ferramentas), ou {{key:Mod+V}} co punteiro fóra da folla, pón a copia un pouco cara abaixo e cara á dereita do orixinal. Cada pegado da mesma copia avanza un pouco máis, así que as copias nunca se tapan entre si. Noutra folla, o primeiro pegado cae onde estaba o orixinal na súa folla. Se ese lugar está fóra da vista, a copia cae no centro da vista.
- Para que {{key:Mod+V}} pegue sempre ao lado do orixinal, escolla {{ui:Xunto á copia}} en {{ui:Pegar}} nos [axustes de MarkupCraft](topic:settings).

As anotacións pegadas quedan seleccionadas, así que pode arrastralas de inmediato. Cada corte, pegado ou duplicado é un paso de desfacer: {{key:Mod+Z}} quita todo o pegado.

As copias pegadas son anotacións novas: reciben o seu nome, a data de hoxe, o estado Aberto, ningún número de pendente e un fío baleiro. Conservan o seu tipo, forma, estilo, texto e comentario. As anotacións de só lectura que viñeron co ficheiro non se poden copiar nin cortar.

**Entre lapelas:** o que copia gárdase tamén neste navegador, así que outra lapela de MarkupCraft do mesmo navegador pode pegalo. Copiar anotacións non usa o portapapeis do computador: non as pode pegar noutro programa, e o texto copiado noutro sitio non se pega como anotación.

**Menú do botón dereito:** prema co botón dereito sobre unha anotación (ou sobre papel baleiro) para {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar aquí}}, {{ui:Pegar no mesmo sitio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Gardar a selección como selo…}}, {{ui:Aplanar na páxina ao gardar}}, {{ui:Inserir unha imaxe aquí…}} e {{ui:Seleccionar todo}}. Premer co botón dereito sobre unha anotación que non está seleccionada, selecciónaa antes. Arrastrar co botón dereito segue desprazando. Nunha pantalla táctil, unha pulsación longa sobre unha anotación abre o mesmo menú (sobre texto, comeza a editar o texto). A tecla de menú ou {{key:Shift+F10}} abren o menú na selección.

O contido da páxina seleccionado coa ferramenta {{ui:Contido}} tamén se copia e pega: véxase [Cambiar as liñas, imaxes e texto propios da páxina](topic:page-content).

Para copiar unha parte da propia páxina como imaxe (un rectángulo, unha elipse ou unha forma libre), ou como sobreposición transparente para outra folla ou aplicación, véxase [Copiar unha área da páxina, ou unha sobreposición](topic:copy-an-area).

## Eliminar

Prema {{key:Delete}} ou {{key:Backspace}}, escolla {{ui:Máis}} e despois {{ui:Eliminar}} na barra de ferramentas, ou {{ui:Eliminar}} en {{ui:Propiedades}}. A barra de estado indica cantas se eliminaron. Os comentarios de só lectura do ficheiro nunca se eliminan («conservado como no ficheiro»).

## Desfacer e refacer

- {{key:Mod+Z}} desfai, {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} refai. A barra de ferramentas ten {{ui:Desfacer}} e {{ui:Refacer}}.
- A barra de estado indica o que se desfixo («Desfeito: mover anotación.»).
- Desfacer cobre todos os cambios en anotacións, estados, respostas, elementos de lista de pendentes, escalas de follas e nomes de follas, ata 500 pasos.
- O historial bórrase ao pechar o conxunto.

## Copiar anotacións a outras follas

Para pór o mesmo selo, nota ou nube en varias follas, selecciónea (ou varias anotacións) e escolla {{ui:Copiar noutras follas…}} en {{ui:Propiedades}}. Marque as follas, ou {{ui:Todas as follas}}, e escolla {{ui:Copiar}}. Cada folla recibe unha copia no mesmo lugar da páxina, asinada co seu nome. Un {{key:Mod+Z}} elimínaas todas.

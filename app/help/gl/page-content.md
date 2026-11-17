---
title: Cambiar as liñas, imaxes e texto propios da páxina
summary: Mova, redimensione, cambie a cor ou elimine o que o propio PDF debuxa, mova os puntos dunha liña, substitúa unha imaxe e cambie as palabras dunha liña de texto.
keywords: contido da páxina, contido base, editar pdf, editar debuxo, vectorial, trazado, forma, liña, imaxe, substituír imaxe, texto, palabras, tipo de letra, puntos, nodos, mover, redimensionar, cambiar cor, eliminar, ferramenta de contido
from: 471d457e
---

As anotacións están sobre a folla. A ferramenta {{ui:Contido}} traballa sobre a propia folla: as liñas, imaxes e liñas de texto que debuxa o PDF. O seu PDF neste ordenador nunca se cambia: as edicións forman parte da copia que garde.

## Escoller o que cambiar

1. Escolla {{ui:Contido}} no grupo {{ui:Seleccionar}}, ou prema {{key:B}}.
2. En {{ui:Escoller}} dentro de {{ui:Propiedades}}, active ou desactive {{ui:Formas}}, {{ui:Imaxes}} e {{ui:Texto}}. Só se poden escoller os tipos activados, así que pode escoller o texto dun debuxo cargado sen colle-las súas liñas.
3. Faga clic en algo para seleccionalo. Shift+clic engade ou quita. Arrastre unha caixa sobre papel baleiro para seleccionar varios: arrastrando cara á dereita toma o que está completamente dentro da caixa, e arrastrando cara á esquerda toma o que ela toca.

Unha forma dentro dunha zona recortada escóllese só onde se ve.

## Mover, redimensionar, cambiar cor, eliminar

- **Mover:** arrastre un obxecto seleccionado, ou prema as teclas de frechas (mantenha Shift para pasos máis grandes). Mantenha Shift mentres arrastra para mover en liña recta, horizontal ou vertical.
- **Redimensionar:** arrastre un dos oito cadrados ao redor da selección. Crece ou encolle desde o lado oposto. Mantenha Shift para conservar as proporcións.
- **Cambiar cor:** para liñas e formas, estableza {{ui:Cor da liña}}, {{ui:Cor de recheo}} e {{ui:Grosor da liña (pt)}} en {{ui:Propiedades}}.
- **Eliminar:** prema {{key:Delete}}, ou escolla {{ui:Eliminar da páxina}}.
- **Desfacer:** cada cambio é un paso: {{key:Mod+Z}} o desfai, e {{key:Mod+Y}} o restaura.

{{ui:Repor como estaba}} desfai de golpe todos os cambios dos obxectos seleccionados; {{ui:Repor esta páxina como estaba}} o fai para toda a páxina.

## Copiar, cortar e pegar contido da páxina

Seleccione liñas, imaxes ou texto coa ferramenta {{ui:Contido}}, e despois:

- {{key:Mod+C}} copia, {{key:Mod+X}} corta (copia e sácaos da páxina), {{key:Mod+D}} pon unha copia ao lado.
- {{key:Mod+V}} pega como contido da páxina, ao lado do orixinal ou onde estea o punteiro (como indican os [Axustes](topic:settings)); {{key:Mod+Shift+V}} pega exactamente no mesmo lugar. Pega en outra páxina, noutro PDF aberto ou noutra pestana de MarkupCraft deste navegador.
- O menú do grupo {{ui:Editar}} e o menú do botón dereito teñen os mesmos comandos.

Unha pegada conserva as liñas como liñas, as palabras como palabras no seu propio tipo de letra, e as imaxes como imaxes. É unha única peza: mórvea, redimensiónea polos seus cadrados, elimínea, ou {{key:Mod+Z}} a desfai. Pasa a formar parte da páxina na copia que garde. O último que copiou, anotacións ou contido da páxina, é o que {{key:Mod+V}} pega.

O que contén a copia recórtase á caixa que rodea a selección: o que MarkupCraft non pode sacar da copia (vexa abaixo) e que está dentro desa caixa vén tamén.

## Mover os puntos dunha liña

Faga dobre clic nunha liña ou curva (ou selecciónea e escolla {{ui:Editar puntos}}). Os seus puntos amósanse como cadrados, e os seus manexadores de curva como círculos. Arrastre un punto ou un manexador; un punto leva consigo os manexadores próximos, para que a curva conserve a súa forma ao seu redor. Prema {{key:Esc}}, ou faga clic lonxe da liña, cando remate.

Os rectángulos non teñen puntos que arrastrar: cambie o seu tamaño cos cadrados que os rodean.

## Substituír unha imaxe

Seleccione unha imaxe e escolla {{ui:Substituír imaxe…}}, despois escolla un ficheiro PNG, JPEG ou SVG (ou un PDF: a súa primeira páxina). A nova imaxe ocupa o lugar da antiga, conservando as súas propias proporcións.

## Cambiar as palabras dunha liña de texto

Faga dobre clic nunha liña de texto, escriba as palabras novas en {{ui:Palabras}} e prema {{key:Enter}}. As palabras escríbense co tipo de letra e tamaño da liña, e a liña conserva a súa lonxitude, para que o texto que vén despois non se mova.

:::note
A maioría dos PDF levan só as letras que usan de cada tipo de letra. Cando escribe unha letra que a copia do tipo de letra do ficheiro non ten, MarkupCraft imprímea en Helvetica e di iso. {{ui:Propiedades}} amosa que letras ten o tipo de letra no ficheiro.
:::

O texto cámbiase unha liña de cada vez; non pasa á liña seguinte.

## Que deixa MarkupCraft como está

- **As páxinas escaneadas** son unha única imaxe: pode mover, redimensionar, substituír ou eliminar a imaxe, pero o que contén non se pode editar.
- **PDF cifrados e asinados:** cambiar a páxina rompería a sinatura, así que a ferramenta {{ui:Contido}} avísao e non cambia nada. As anotacións seguen funcionando.
- **Zonas de recorte, obxectos divididos entre dúas partes do contido da páxina, e mesturas de cor que enchen unha zona completa** quedan como están; MarkupCraft di o motivo cando o intenta.
- **Palabras nun tipo de letra estándar que o PDF non describe** (como un tipo Times sen anchos de letra no ficheiro) non se poden cambiar, porque MarkupCraft non podería manter o espazado da liña. A liña si se pode mover.

## Pór anotacións na páxina

As liñas, rectángulos, elipses, polilíneas, nubes e trazos de pluma que debuxou como anotacións poden pasar a formar parte da propia páxina: selecciónelos e escolla {{ui:Pór na páxina}} en {{ui:Propiedades}}. O texto, os selos, as imaxes e as cores transparentes seguen sendo anotacións.

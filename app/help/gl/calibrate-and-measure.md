---
title: Calibrar unha folla e medir
summary: Defina a escala de cada folla a partir dun valor predefinido ou dunha dimensión coñecida, e logo meda lonxitudes, superficies con perímetros e contaxes.
keywords: calibrar, escala, definir escala, medir, lonxitude, distancia, cota, superficie, pés cadrados, perímetro, contar, medición, cantidade, regra, aritmética, cálculo, máis, fracción
from: 49a25c6d
---

As lonxitudes e as superficies precisan coñecer a escala da folla. MarkupCraft garda unha escala **por folla**: calibre cada folla que medir. Os contaxes non precisan escala.

A barra de estado mostra a escala da folla actual, ou "Sen calibrar".

## Escolla unha escala da lista

Use isto cando o PDF estea a tamaño completo (unha folla de 24 × 36 que se imprime a 24 × 36) e o debuxo indique a súa escala.

1. Faga clic no botón de escala da barra de estado ("Sen calibrar"). Abrirase a caixa "Escala da folla".
2. En {{ui:Escala}}, escolla a escala: arquitectónica (1/32" = 1'-0" a 3" = 1'-0"), de enxeñaría (1" = 10' a 1" = 100') ou métrica (1:1 a 1:1000).
3. Escolla {{ui:Definir escala}}.

Resultado: a barra de estado mostra a escala, por exemplo `1/4" = 1'-0"`. As escalas arquitectónicas mostran as lonxitudes en pés e polgadas, as de enxeñaría en pés decimais, e as métricas ata 1:50 en milímetros e desde 1:100 en metros.

:::warning
Un valor predefinido só é correcto se o PDF non foi reducido. Un xogo a media escala, ou unha folla que foi "axustada á páxina" ao crearse, mídese mal cun valor predefinido. Calibre a partir dunha dimensión coñecida, e comprobe igualmente unha dimensión.
:::

## Calibrar a partir dunha dimensión coñecida

Use isto para xogos a media escala, follas escaneadas, detalles a escalas irregulares, ou para comprobar un valor predefinido.

1. Busque unha dimensión longa de confianza, ou unha barra de escala gráfica.
2. Escolla {{ui:Calibrar}} no grupo {{ui:Medir}} (ou escolla {{ui:Seleccionar dous puntos}} na caixa "Escala da folla").
3. Faga clic nun extremo da dimensión e logo no outro. (Ou arrastre dun extremo ao outro.) Amplíe antes para maior precisión; {{key:Shift}} mantén a liña en pasos de 45°.
4. A caixa indica a que distancia están os puntos no papel e pregunta "A que distancia están realmente?". Escriba a {{ui:Distancia real}}, por exemplo `24'-0"`, `12' 6 1/2"`, `7.2 m` ou `900 mm`.
5. Escolla como se mostran as lonxitudes en {{ui:Mostrar lonxitudes en}}: {{ui:Pés e polgadas}}, {{ui:Pés decimais}}, {{ui:Polgadas}}, {{ui:Metros}} ou {{ui:Milímetros}}.
6. Escolla {{ui:Definir escala}}.

Resultado: a barra de estado mostra "Calibrada: 24'-0" sobre 1.00 in" (a lonxitude real e a lonxitude no papel), e volve a ferramenta coa que ía medir. Todas as formas de escribir unha lonxitude están en [Unidades e lonxitudes](topic:units-and-scales).

A distancia real tamén pode ser un cálculo sinxelo: `12'6"+3/4"`, `(24'-0")/3` ou `2*450mm`. Use `+ - * /` e parénteses; un número sen unidade conta na unidade que está en {{ui:Mostrar lonxitudes en}} (pés, para {{ui:Pés e polgadas}}). {{ui:Definir escala}} usa o resultado.

Se MarkupCraft non pode ler o que escribiu, a caixa dío: 'Iso non é unha lonxitude que MarkupCraft entenda. Probe con 24'-0", 12' 6 1/2", 7.2 m ou 900 mm.' Un cálculo que non pode resolver di por que e onde, por exemplo "Un parénteses non está pechado (carácter 5)."

## Medir unha lonxitude

1. Escolla {{ui:Lonxitude}} ({{key:M}}).
2. Faga clic no inicio e logo no final. Ou arrastre do inicio ao final. {{key:Shift}} mantén a medida en pasos de 45°.

Resultado: unha liña de cota con marcas e a lonxitude escrita. A barra de estado repítea ("Lonxitude: 12'-6 1/2" (1/4" = 1'-0")."), e {{ui:Propiedades}} mostra o valor baixo {{ui:Lonxitude}}. Os pés e polgadas redondéanse ao 1/16" máis próximo.

Se a folla aínda non ten escala, escoller {{ui:Lonxitude}} cambia a {{ui:Calibrar}} e a barra de estado explica: "Calibre primeiro esta folla: escolla dous puntos a unha distancia coñecida, ou escolla a súa escala. Despois, meda." Cando define a escala, volve {{ui:Lonxitude}}.

## Debuxar a escala

Nunha folla calibrada pode escribir lonxitudes reais mentres debuxa unha {{ui:Liña}}, {{ui:Frecha}}, {{ui:Lonxitude}}, {{ui:Polilínea}}, {{ui:Polígono}}, {{ui:Nube libre}}, {{ui:Superficie}} ou un espazo:

1. Faga clic no primeiro punto.
2. Oriente o punto como vai o seguinte segmento e escriba a súa lonxitude, como `16` (na unidade da folla), `12'6"` ou `3.5 m`. Ao escribir, abrirase unha caixa xunto ao punteiro.
3. Prema {{key:Enter}}. O punto colócase a esa distancia, na dirección do punteiro.

Para fixar a dirección con exactitude, engada `<` e un ángulo en graos: `8 < 90` vai 8 pés cara arriba, `4<0` cara á dereita, `10 < 225` cara abaixo e á esquerda, tal como se ve a folla (tamén as páxinas xiradas). Siga escribindo lonxitudes para as seguintes esquinas, e remate a forma como de costume. {{key:Esc}} pecha a caixa sen colocar un punto.

## Medir un ángulo

1. Escolla {{ui:Ángulo}} ({{key:X}}).
2. Faga clic no extremo dun brazo, despois na esquina e despois no extremo do outro brazo.

Resultado: os dous brazos, un pequeno arco na esquina e o ángulo en graos, con décimas (de 0° a 180°). Un ángulo non precisa escala. {{ui:Propiedades}} mostra o valor baixo {{ui:Ángulo}}, e a lista, o CSV e o BCF o inclúen.

Un {{ui:Arco}} ({{key:O}}) nunha folla calibrada tamén mostra en {{ui:Propiedades}} a súa lonxitude ao longo da curva.

## Medir unha superficie e o seu perímetro

1. Escolla {{ui:Superficie}} ({{key:Q}}).
2. Faga clic en cada esquina da habitación ou da zona.
3. Remate cun dobre clic, con {{key:Enter}} ou cun clic dereito (dobre toque en pantallas táctiles). {{key:Backspace}} elimina a última esquina.

Resultado: un contorno sombreado coa superficie e "P" co perímetro no centro, por exemplo "128.00 sq ft" e "P 48'-0"". As escalas en pés dan pés cadrados, as de polgadas polgadas cadradas, as de metros metros cadrados, e as de milímetros milímetros cadrados. Unha superficie precisa polo menos tres esquinas.

### Recortes

Para deixar fóra un piar, un pozo ou un patio, seleccione a superficie e escolla {{ui:Engadir un recorte}} en {{ui:Propiedades}}. Faga clic nas esquinas do recorte dentro da superficie e remate como nunha superficie. O recorte queda aberto (sen sombrear), a súa superficie réstase e os seus bordos engádense ao perímetro: unha habitación de 16' × 8' cun recorte de 4' × 4' indica "112.00 sq ft" e "P 64'-0"". Engada os que precise; non se poden solapar entre eles nin cruzar o contorno da superficie. {{ui:Eliminar recortes}} quítaos todos, e {{key:Mod+Z}} desfai un.

## Contar elementos

1. Escolla {{ui:Contar}} ({{key:U}}).
2. En {{ui:Propiedades}}, escriba un {{ui:Nome do grupo}}, por exemplo "Desaugadoiros de chan". (Consérvase para a próxima vez.)
3. Faga clic en cada elemento da folla.

Resultado: cada clic engade un punto numerado; o primeiro punto leva unha etiqueta como "Desaugadoiros de chan: 7", e a barra de estado mantén o total acumulado.

- **Iniciar outro grupo:** prema {{key:Esc}} unha vez (borra a selección), cambie o {{ui:Nome do grupo}} e faga clic de novo.
- **Engadir a un grupo existente:** seleccione primeiro o grupo, despois escolla {{ui:Contar}} e faga clic.
- **Quitar unha marca:** con el grupo seleccionado, manteña premido {{key:Shift}} e faga clic no punto. Ao quitar o último punto, elimínase o grupo. Nunha pantalla táctil sen teclado, use {{key:Mod+Z}} ou {{ui:Desfacer}} no seu lugar.
- **Cambiar o nome dun grupo:** seleccióneo e edite {{ui:Nome do grupo}} en {{ui:Propiedades}}.

Un grupo de contaxe pertence a unha folla. Os contaxes de varias follas aparecen como grupos separados na lista de anotacións.

## Cambiar ou eliminar unha escala

Faga clic no botón de escala da barra de estado. A caixa mostra a escala actual; escolla outra, escolla {{ui:Seleccionar dous puntos}}, ou escolla {{ui:Eliminar escala}}.

As lonxitudes e superficies xa debuxadas vólvense medir de inmediato coa nova escala. {{ui:Desfacer}} devolve a escala anterior.

## Onde van os números

- {{ui:Propiedades}} mostra os valores da medida seleccionada.
- A lapela {{ui:Anotacións}} lista cada valor, e o seu CSV ten unha columna "Medición". Ver [A lista de anotacións](topic:markups-list-and-export).
- O PDF gardado conserva a escala na páxina e escribe as lonxitudes e superficies como comentarios de medición, para que outros programas de PDF que entendan medicións as poidan mostrar. Ver [Que se garda no PDF](topic:what-the-pdf-keeps).

Para unha medición completa de cantidades, con elementos, conxuntos e prezos, use TakeoffCraft: MarkupCraft mide para a revisión, non para orzamentar.

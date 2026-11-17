---
title: Configurações do MarkupCraft
summary: Altere seu nome, a cor e a espessura das novas marcações, onde a colagem põe as cópias, e as unidades para comprimentos e para a posição na folha.
keywords: configurações, preferências, opções, nome, autor, cor, cor padrão, espessura da linha, grossa, fina, colar, colar no ponteiro, deslocamento, unidades, métrico, milímetros, polegadas, pés, redefinir
from: 63ad97fd
---

Abra {{ui:Configurações}} pela engrenagem na barra do topo, ou pressione {{key:Mod+,}}. A primeira guia, {{ui:MarkupCraft}}, contém as configurações deste aplicativo; {{ui:Geral}} contém as que todos os aplicativos CadCraft compartilham (tema, barra de ferramentas, painéis). As configurações do MarkupCraft existem só neste aplicativo: você as altera aqui, e este navegador as lembra (veja [O que fica neste navegador](topic:browser-storage)). Uma alteração tem efeito na hora; não há nada para salvar.

## Seu nome

{{ui:Nome nas marcações}} é o nome que cada nova marcação e resposta carrega, e que os PDFs salvos mostram como autor do comentário. É o mesmo nome do botão no lado direito da barra de status; altere-o em qualquer um dos dois lugares. As marcações já desenhadas mantêm o nome com que foram feitas. Veja [Definir seu nome de autor](topic:set-your-name).

## Novas marcações

- **{{ui:Cor da marcação}}** é a cor com que começam as novas canetas, linhas, setas, retângulos, elipses, polilinhas, polígonos, nuvens, chamadas e textos (vermelho no início). Marca-textos, notas, carimbos, comprimentos, áreas e contagens mantêm as próprias cores, porque as cores deles dizem o que são.
- **{{ui:Linhas finas}}, {{ui:Normal}}, {{ui:Linhas grossas}}** deixam as linhas dessas mesmas marcações com metade da largura, como estão, ou com metade a mais de largura.

Uma cor ou espessura escolhida para uma ferramenta em {{ui:Propriedades}} (com essa ferramenta ativa e nada selecionado) tem prioridade sobre estas. As ferramentas da [caixa de ferramentas](topic:tool-chest) mantêm o próprio estilo. As marcações já desenhadas não mudam: selecione-as e altere-as em {{ui:Propriedades}}.

## Colar

Onde {{key:Mod+V}} põe o que você copiou:

- **{{ui:No ponteiro}}** (o início): com o ponteiro na folha, a cópia cai centralizada onde ele aponta. Com o ponteiro em outro lugar, cai ao lado do original.
- **{{ui:Ao lado da cópia}}**: sempre um pouco abaixo e à direita do original, um passo a mais a cada colagem.

O botão {{ui:Colar}} e {{key:Mod+Shift+V}} ({{ui:Colar no mesmo local}}) funcionam do mesmo jeito com qualquer das duas escolhas. Veja [Copiar, colar e duplicar](topic:select-and-edit#copy-paste-and-duplicate).

## Medidas

- **{{ui:Mostrar comprimentos em}}** é a unidade que a caixa de escala da folha oferece primeiro quando você calibra a partir de dois pontos: pés e polegadas, pés decimais, polegadas, metros ou milímetros. Folhas já calibradas mantêm a própria unidade. Veja [Calibrar uma folha e medir](topic:calibrate-and-measure).
- **{{ui:Posição na folha}}** escolhe polegadas ou milímetros para a posição do ponteiro no canto inferior esquerdo da tela. É uma posição no papel, não uma distância real.

## Redefinir

{{ui:Redefinir configurações do MarkupCraft}} na parte inferior da caixa coloca estas configurações, e as de painel e barra de ferramentas em {{ui:Geral}}, de volta ao estado inicial. Mantém o seu nome, pois ele diz quem você é, e não como você prefere trabalhar, e mantém as cores que você escolheu no painel de cada ferramenta.

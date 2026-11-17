---
title: A caixa de ferramentas
summary: Guarde uma anotação com estilo como ferramenta reutilizável, desenhe com ela e partilhe a sua caixa com o escritório como ficheiro.
keywords: caixa de ferramentas, ferramentas, conjunto de ferramentas, ferramentas personalizadas, anotações guardadas, favoritos, norma do escritório, importar, exportar, partilhar, json
from: 7dfa36e0
---

O separador {{ui:Ferramentas}} contém a sua **caixa de ferramentas**: anotações guardadas com o respetivo aspeto, prontas a desenhar de novo. Uma ferramenta guarda o tipo, a cor, a espessura da linha, o preenchimento, a opacidade, o tamanho do texto e o assunto da anotação, além do texto de um carimbo, do nome de grupo de uma contagem ou do texto inicial de uma caixa de texto ou de uma chamada.

## As ferramentas com que começa

Uma caixa nova tem seis: "Nuvem de revisão" (vermelha), "Nuvem de perguntas" (azul), "Realce amarelo", "Chamada RFI" (azul, começa com "RFI: "), "Verificar em obra" (uma chamada laranja que diz "Verificar em obra.") e "Aprovado com observações" (um carimbo).

## Desenhar com uma ferramenta

1. Abra o separador {{ui:Ferramentas}}.
2. Clique numa ferramenta. Fica com aspeto de premida, e a ferramenta correspondente na barra de ferramentas fica ativa.
3. Desenhe como habitualmente. {{ui:Propriedades}} indica 'A desenhar com "<ferramenta>" da caixa de ferramentas.'

Enquanto uma ferramenta da caixa estiver ativa, as alterações que fizer em {{ui:Propriedades}} antes de desenhar aplicam-se a essa ferramenta, por agora, sem alterar a ferramenta guardada nem as suas definições normais. Ao escolher um botão da barra de ferramentas, ou ao premir a tecla de uma ferramenta, volta-se à ferramenta normal.

## Guardar as suas próprias

1. Desenhe uma anotação e dê-lhe o estilo que pretende: cor, linha, preenchimento, assunto, texto do carimbo.
2. Selecione-a.
3. Escolha {{ui:Guardar a seleção como ferramenta}} no separador {{ui:Ferramentas}}, ou {{ui:Guardar como ferramenta}} em {{ui:Propriedades}}.
4. Escreva um {{ui:Nome da ferramenta}} e escolha {{ui:Guardar ferramenta}}.

Resultado: a ferramenta é acrescentada no fim da caixa, e o separador {{ui:Ferramentas}} abre-se para a mostrar.

## Carimbos criados a partir de uma seleção

Selecione várias anotações (ou conteúdo da página com a ferramenta {{ui:Conteúdo}}) e escolha {{ui:Guardar a seleção como carimbo…}} em {{ui:Mais}} ou no menu de clique com o botão direito. A caixa recebe um carimbo que as contém todas ("Carimbo: 3 anotações em conjunto"). Clique nele e, depois, clique em qualquer folha: as anotações ficam juntas, centradas onde clicar, como novas anotações com o seu nome; o conteúdo da página é desenhado na página nesse ponto. Estes carimbos são guardados e partilhados com a caixa como qualquer ferramenta.

## Remover uma ferramenta

Escolha o × no fim da linha da ferramenta e, depois, {{ui:Remover}}. As anotações já desenhadas com ela mantêm-se como estão.

## Onde a caixa é guardada

A caixa fica guardada **neste navegador, neste computador**. Outro navegador ou computador tem a sua própria caixa (começando pelas seis predefinidas), uma janela privada esquece-a ao fechar, e limpar os dados deste sítio nas definições do navegador apaga-a.

Se o navegador não a conseguir guardar (armazenamento desligado ou cheio), a barra de estado diz: "A caixa de ferramentas não pôde ser mantida neste navegador (o armazenamento está desligado ou cheio). Exporte-a para a guardar."

:::safari
O Safari pode limpar os dados guardados de um sítio quando não o usa durante algum tempo. Exporte a sua caixa de tempos a tempos para a poder importar de novo.
:::

**Exporte a sua caixa como cópia de segurança**, sobretudo depois de criar ferramentas de que depende.

## Partilhar uma caixa com o escritório

1. Configure as ferramentas uma vez.
2. Escolha {{ui:Exportar}}. Obtém "MarkupCraft tool chest.json".
3. Coloque esse ficheiro onde o escritório guarda as suas normas, ou envie-o a toda a gente.
4. Os restantes escolhem {{ui:Importar}} no separador {{ui:Ferramentas}} e selecionam o ficheiro.

Resultado: "Importadas 12 ferramentas de "MarkupCraft tool chest.json"." As ferramentas vindas da mesma caixa substituem as cópias antigas, por isso, ao importar uma caixa do escritório atualizada, essas ferramentas são atualizadas em vez de duplicadas; as novas são acrescentadas. Uma caixa pode ter até 500 ferramentas.

O MarkupCraft verifica cada valor de um ficheiro importado e ignora o que não consegue usar ("2 ignoradas (não utilizáveis)"). Os ficheiros que não são uma caixa são recusados: "Este ficheiro não é uma caixa de ferramentas do MarkupCraft." ou "Este ficheiro não é uma caixa de ferramentas (não é JSON)."

Os ficheiros de caixa de ferramentas de outros programas de anotação não podem ser importados.

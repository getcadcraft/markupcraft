---
title: Caixa de ferramentas
summary: Salve uma marcação com estilo como ferramenta reutilizável, desenhe com ela e compartilhe a sua caixa com o escritório como um arquivo.
keywords: caixa de ferramentas, ferramentas, conjunto de ferramentas, ferramentas personalizadas, marcações salvas, favoritos, padrão do escritório, importar, exportar, compartilhar, json
from: 7dfa36e0
---

A aba {{ui:Ferramentas}} guarda a sua **caixa de ferramentas**: marcações salvas com a aparência, prontas para desenhar de novo. Uma ferramenta mantém o tipo, a cor, a espessura de linha, o preenchimento, a opacidade, o tamanho do texto e o assunto da marcação, além do texto de um carimbo, o nome de grupo de uma contagem ou o texto inicial de uma caixa de texto ou de uma chamada.

## As ferramentas com que você começa

Uma caixa nova tem seis: "Nuvem de revisão" (vermelha), "Nuvem de pergunta" (azul), "Marca-texto amarelo", "Chamada RFI" (azul, começa com "RFI: "), "Verificar em campo" (uma chamada laranja que diz "Verificar em campo.") e "Aprovado com observações" (um carimbo).

## Desenhar com uma ferramenta

1. Abra a aba {{ui:Ferramentas}}.
2. Clique em uma ferramenta. Ela parece pressionada, e a ferramenta correspondente da barra de ferramentas é ativada.
3. Desenhe normalmente. {{ui:Propriedades}} diz 'Desenhando com "<ferramenta>" da caixa de ferramentas.'

Enquanto uma ferramenta da caixa está ativa, as mudanças que você fizer em {{ui:Propriedades}} antes de desenhar valem para essa ferramenta por enquanto, sem alterar a ferramenta salva nem as suas configurações normais. Escolher um botão da barra de ferramentas, ou pressionar a tecla de uma ferramenta, volta para a ferramenta comum.

## Salvar uma ferramenta própria

1. Desenhe uma marcação e defina o estilo como quiser: cor, linha, preenchimento, assunto, texto do carimbo.
2. Selecione-a.
3. Escolha {{ui:Salvar a seleção como ferramenta}} na aba {{ui:Ferramentas}}, ou {{ui:Salvar como ferramenta}} em {{ui:Propriedades}}.
4. Digite um {{ui:Nome da ferramenta}} e escolha {{ui:Salvar ferramenta}}.

Resultado: a ferramenta é adicionada ao final da caixa, e a aba {{ui:Ferramentas}} abre para mostrá-la.

## Carimbos feitos a partir de uma seleção

Selecione várias marcações (ou conteúdo da página com a ferramenta {{ui:Conteúdo}}) e escolha {{ui:Salvar seleção como carimbo…}} em {{ui:Mais}} ou no menu do botão direito. A caixa ganha um carimbo que reúne todas elas ("Carimbo: 3 marcações juntas"). Clique nele, depois clique em qualquer folha: as marcações caem juntas, centralizadas onde você clicar, como novas marcações com o seu nome; o conteúdo da página é desenhado na página ali. Esses carimbos são salvos e compartilhados com a caixa como qualquer ferramenta.

## Remover uma ferramenta

Escolha o × no fim da linha da ferramenta, depois {{ui:Remover}}. As marcações já desenhadas com ela continuam como estão.

## Onde a caixa é guardada

A caixa fica salva **neste navegador, neste computador**. Outro navegador ou computador tem a sua própria caixa (começando com as seis padrão), uma janela anônima a esquece quando é fechada, e limpar os dados deste site nas configurações do navegador a apaga.

Se o navegador não puder armazená-la (armazenamento desligado ou cheio), a barra de status diz: "A caixa de ferramentas não pôde ser mantida neste navegador (o armazenamento está desligado ou cheio). Exporte-a para mantê-la."

:::safari
O Safari pode limpar os dados armazenados de um site quando você não o usa por um tempo. Exporte a sua caixa de vez em quando para poder importá-la de novo.
:::

**Exporte a sua caixa como backup**, especialmente depois de criar ferramentas de que você depende.

## Compartilhar uma caixa com o escritório

1. Configure as ferramentas uma vez.
2. Escolha {{ui:Exportar}}. Você recebe "MarkupCraft tool chest.json".
3. Coloque esse arquivo onde o escritório mantém os seus padrões, ou envie-o.
4. Todos os outros escolhem {{ui:Importar}} na aba {{ui:Ferramentas}} e selecionam o arquivo.

Resultado: "12 ferramentas importadas de "MarkupCraft tool chest.json"." Ferramentas que vieram da mesma caixa substituem as suas cópias mais antigas, então importar uma caixa do escritório atualizada renova essas ferramentas em vez de duplicá-las; as novas são adicionadas. Uma caixa comporta até 500 ferramentas.

O MarkupCraft verifica cada valor de um arquivo importado e ignora o que não consegue usar ("2 ignoradas (não utilizáveis)"). Arquivos que não são uma caixa são recusados: "Este arquivo não é uma caixa de ferramentas do MarkupCraft." ou "Este arquivo não é uma caixa de ferramentas (não está em JSON)."

Arquivos de caixa de ferramentas de outros programas de marcação não podem ser importados.

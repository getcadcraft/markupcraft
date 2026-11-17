---
title: Imprimir e alterar as páginas de um PDF
summary: Imprima folhas com suas marcações e gire, mova, insira, exclua ou extraia páginas de um PDF aberto.
keywords: imprimir, impressora, papel, páginas, página, girar, virar, reordenar, mover página, inserir, adicionar página, página em branco, excluir página, remover página, extrair, dividir, operações com páginas
from: 81832d9b
---

O menu {{ui:Páginas}} no grupo {{ui:Arquivo}} atua sobre o PDF ao qual pertence a folha aberta. Seu PDF neste computador nunca é alterado: as alterações fazem parte da cópia que você salvar.

## Imprimir

1. Pressione {{key:Mod+P}}, ou escolha {{ui:Páginas}}, depois {{ui:Imprimir…}}.
2. Quando mais de uma folha estiver aberta, escolha o que imprimir: {{ui:Esta folha}}, todas as páginas deste arquivo, o conjunto inteiro ou as páginas que você digitar (como `1-3, 5`).
3. Escolha {{ui:Imprimir}}. A janela de impressão do seu navegador abre: escolha ali a impressora, o papel e a escala.

As marcações são impressas como aparecem na folha: elas são desenhadas nas páginas da cópia que vai para a impressora. Comentários feitos por outros programas são impressos do jeito que o PDF deles indica.

:::safari firefox
Se o seu navegador não conseguir imprimir de dentro da página, as folhas abrem como PDF em uma nova aba. Imprima a partir dali.
:::

## Girar uma página

Escolha {{ui:Páginas}}, depois {{ui:Girar página no sentido horário}} ou {{ui:Girar página no sentido anti-horário}}. A folha aberta gira um quarto de volta. Suas marcações continuam onde estavam no desenho, e o texto que você digitou gira com a página para continuar em pé.

## Mover uma página

Escolha {{ui:Páginas}}, depois {{ui:Mover página para antes}} ou {{ui:Mover página para depois}}. A folha aberta troca de lugar com a vizinha no próprio PDF. Suas marcações, sua escala e seu número de folha vão junto.

## Inserir páginas

- {{ui:Inserir páginas de um PDF…}} põe todas as páginas de outro PDF depois da folha aberta.
- {{ui:Inserir uma página em branco}} adiciona uma página vazia do mesmo tamanho depois da folha aberta, para esboços e notas. Em um conjunto criado com {{ui:Novo}}, ela também tem a grade do conjunto.
- Em um conjunto criado com {{ui:Novo}}, {{ui:Adicionar uma página em branco}} abaixo da lista {{ui:Folhas}} adiciona mais uma página, como as outras, no fim. Veja [Começar com páginas em branco](topic:open-a-plan-set#start-with-blank-pages).

Páginas inseridas recebem o número da página como rótulo até você renomeá-las. Veja [Renomear uma folha](topic:open-a-plan-set#rename-a-sheet).

## Excluir páginas

1. Escolha {{ui:Páginas}}, depois {{ui:Excluir páginas…}}.
2. Digite os números das páginas deste PDF, como `3` ou `2-4`. A página da folha aberta já vem preenchida.
3. Escolha {{ui:Excluir páginas}}. Se essas páginas tiverem marcações, o MarkupCraft informa quantas e pergunta de novo.

Um PDF mantém pelo menos uma página. Para descartar um arquivo inteiro, feche o conjunto e abra os arquivos de que ainda precisa.

## Extrair páginas

Escolha {{ui:Páginas}}, depois {{ui:Extrair páginas…}}, e digite as páginas. Elas são baixadas como um novo PDF chamado "<file> (pages 1-3).pdf", com suas marcações como comentários que você pode continuar editando. O arquivo aberto continua como está.

## Vale saber

- **Desfazer para em uma alteração de página.** {{key:Mod+Z}} desfaz as marcações desenhadas depois dela, mas não a própria alteração de página nem nada anterior. Feche sem salvar para recomeçar a partir do PDF original.
- Os números de página contam as páginas de um PDF, não do conjunto inteiro. Mover uma página a mantém dentro do próprio arquivo.
- As páginas alteradas são trabalho não salvo: {{ui:Salvar}} baixa a cópia reorganizada, e sair pergunta antes.

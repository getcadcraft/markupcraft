---
title: Imprimir e alterar as páginas de um PDF
summary: Imprimir folhas com as respetivas anotações e rodar, mover, inserir, eliminar ou extrair páginas de um PDF aberto.
keywords: imprimir, impressora, papel, páginas, página, rodar, virar, reordenar, mover página, inserir, adicionar página, página em branco, eliminar página, remover página, extrair, dividir, operações de página
from: 81832d9b
---

O menu {{ui:Páginas}} do grupo {{ui:Ficheiro}} atua sobre o PDF a que pertence a folha aberta. O PDF neste computador nunca é alterado: as alterações fazem parte da cópia guardada.

## Imprimir

1. Prima {{key:Mod+P}}, ou escolha {{ui:Páginas}}, depois {{ui:Imprimir…}}.
2. Quando há mais de uma folha aberta, escolha o que imprimir: {{ui:Esta folha}}, todas as páginas deste ficheiro, o conjunto inteiro, ou as páginas que escrever (como `1-3, 5`).
3. Escolha {{ui:Imprimir}}. Abre-se a caixa de diálogo de impressão do navegador: escolha lá a impressora, o papel e a escala.

As anotações imprimem-se como aparecem na folha: são desenhadas nas páginas da cópia que segue para a impressora. Os comentários feitos por outros programas imprimem-se como o respetivo PDF indicar.

:::safari firefox
Se o navegador não conseguir imprimir a partir de dentro da página, as folhas abrem-se como PDF num novo separador. Imprima a partir daí.
:::

## Rodar uma página

Escolha {{ui:Páginas}}, depois {{ui:Rodar página no sentido horário}} ou {{ui:Rodar página no sentido anti-horário}}. A folha aberta roda um quarto de volta. As anotações ficam onde estavam no desenho, e o texto que escreveu roda com a página para continuar direito.

## Mover uma página

Escolha {{ui:Páginas}}, depois {{ui:Mover página para trás}} ou {{ui:Mover página para a frente}}. A folha aberta troca de lugar com a vizinha no seu próprio PDF. As anotações, a escala e o número da folha seguem-na.

## Inserir páginas

- {{ui:Inserir páginas de um PDF…}} põe todas as páginas de outro PDF depois da folha aberta.
- {{ui:Inserir uma página em branco}} acrescenta uma página vazia do mesmo tamanho depois da folha aberta, para esboços e notas. Num conjunto criado com {{ui:Novo}}, tem também a grelha do conjunto.
- Num conjunto criado com {{ui:Novo}}, {{ui:Adicionar uma página em branco}} por baixo da lista {{ui:Folhas}} acrescenta mais uma página como as outras, no fim. Consulte [Começar com páginas em branco](topic:open-a-plan-set#start-with-blank-pages).

As páginas inseridas recebem o número da página como etiqueta até lhes mudar o nome. Consulte [Mudar o nome de uma folha](topic:open-a-plan-set#rename-a-sheet).

## Eliminar páginas

1. Escolha {{ui:Páginas}}, depois {{ui:Eliminar páginas…}}.
2. Escreva os números das páginas deste PDF, como `3` ou `2-4`. A página da folha aberta fica preenchida.
3. Escolha {{ui:Eliminar páginas}}. Se essas páginas tiverem anotações, o MarkupCraft diz quantas e pergunta de novo.

Um PDF mantém pelo menos uma página. Para retirar um ficheiro inteiro, feche o conjunto e abra os ficheiros de que ainda precisa.

## Extrair páginas

Escolha {{ui:Páginas}}, depois {{ui:Extrair páginas…}}, e escreva as páginas. São transferidas como um novo PDF com o nome "<file> (pages 1-3).pdf", com as respetivas anotações como comentários que pode continuar a editar. O ficheiro aberto mantém-se como está.

## Bom saber

- **A anulação para numa alteração de página.** {{key:Mod+Z}} anula as anotações desenhadas depois dela, mas não a própria alteração de página nem nada anterior. Feche sem guardar para recomeçar a partir do PDF original.
- Os números de página contam as páginas de um PDF, não de todo o conjunto. Mover uma página mantém-na dentro do seu próprio ficheiro.
- As páginas alteradas são trabalho por guardar: {{ui:Guardar}} transfere a cópia reorganizada, e sair pergunta primeiro.

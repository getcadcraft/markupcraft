---
title: Acompanhar RFIs, submittals e diários de obra
summary: Coloque RFIs, submittals e diários de obra nas folhas, com números, responsáveis, prazos e conversas; filtre o que está atrasado; exporte CSV ou BCF; trabalhe offline e mescle cópias.
keywords: rfi, pedido de informação, submittal, diário de obra, relatório de obra, diário da obra, construção, atrasado, prazo, atribuídos a mim, conversa, anexo, mesclar, offline, tablet, bcf, csv, obra
from: 95039c5a
---

A guia {{ui:Obra}} mantém três tipos de registro ao lado das suas marcações. Cada um está vinculado a uma folha; uma RFI ou um submittal também tem um marcador no ponto da folha ao qual se refere.

- **RFI**: uma pergunta para a equipe de projeto. Status: Aberta, Respondida, Fechada.
- **Submittal**: algo a ser revisado antes que o trabalho prossiga. Status: Aberto, Em análise, Aprovado, Aprovado com observações, Revisar e reenviar, Fechado.
- **Diário de obra**: o clima do dia, o número de pessoas na obra e o trabalho executado. Status: Rascunho, Final.

Todo registro tem um número próprio do seu tipo (RFI-0001, SUB-0001, LOG-0001), um título, um texto, um responsável, um prazo, uma conversa de respostas e uma lista de nomes de anexos.

## Adicionar um

1. Abra a guia {{ui:Obra}} e escolha {{ui:RFI}} ou {{ui:Submittal}}.
2. Toque ou clique na folha onde ele pertence. Um marcador aparece e o registro abre na guia.
3. Preencha o título, a pergunta ou a descrição, o responsável e o prazo.

Um diário de obra é adicionado à folha aberta, sem marcador. {{ui:Posicionar marcador}} coloca um depois; {{ui:Mover marcador}} move qualquer marcador. Tocar em um marcador na folha abre o seu registro.

## Responder e acompanhar

Altere o {{ui:Status}} e a mudança é registrada na conversa. Escreva uma resposta e escolha {{ui:Enviar resposta}} (Ctrl+Enter também envia). Os anexos são apenas nomes: digite um ou escolha arquivos, e a lista mostra à equipe o que acompanha o registro. Os arquivos em si permanecem onde estão.

Um registro cujo prazo já passou e que ainda está pendente (uma RFI que não está Respondida ou Fechada, um submittal que ainda não foi decidido) é marcado como **Atrasado**, em vermelho, na lista e no seu marcador.

## Encontrar o que importa

Os filtros ficam acima da lista: tipo, status, prazo (atrasado, vence em 7 dias, com ou sem prazo), esta folha ou todas as folhas, uma busca de texto e {{ui:Atribuídos a mim}}, que compara o responsável com o nome pelo qual o MarkupCraft conhece você (veja [Definir seu nome](topic:set-your-name)). A linha abaixo dos filtros conta o que é mostrado e o que está atrasado.

## Exportar

{{ui:CSV}} grava os registros listados como uma planilha. {{ui:BCF}} os grava como tópicos BCF, cada um com uma captura da sua posição na folha, para que outras ferramentas BCF possam listá-los. Ambos seguem os filtros.

## Salvar, offline e mesclar cópias

Os registros são salvos dentro do PDF quando você o salva, e voltam quando você o abre. Nada precisa de rede: adicione, edite, responda e salve em um tablet em um subsolo, depois traga o PDF de volta. PDFs antigos e PDFs de outros programas abrem como sempre abriram.

Para juntar duas cópias, abra uma e escolha {{ui:Mesclar}}, depois selecione a outra cópia do mesmo PDF. Os registros são unidos pelos seus IDs:

- um registro que só uma das cópias tem é adicionado;
- um registro presente nas duas toma seus campos (título, texto, status, responsável, prazo) da cópia alterada por último, por inteiro; assim, se duas pessoas alteraram campos diferentes do mesmo registro, vence a versão da cópia mais recente; as conversas e os nomes de anexos das duas cópias são unidos;
- se as duas cópias numeraram igualmente um novo registro, o que chega recebe o próximo número livre;
- um registro removido em uma cópia continua removido, a menos que tenha sido editado depois.

Uma mesclagem é uma etapa de desfazer.

## Limitações

- Os registros ainda não são compartilhados pelo Live TeamWork; use {{ui:Mesclar}}.
- Não há equipes, notificações nem projetos na nuvem para registros nesta versão.
- Páginas excluídas do PDF levam os seus registros junto (a confirmação da página informa quantos são).

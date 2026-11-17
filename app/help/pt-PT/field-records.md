---
title: Acompanhar RFI, submissões e registos diários de obra
summary: Colocar RFI, submissões e registos diários nas folhas, com números, responsáveis, datas limite e conversas; filtrar o que está atrasado; exportar CSV ou BCF; trabalhar offline e juntar cópias.
keywords: rfi, pedido de informação, submissão, registo diário, relatório de obra, diário de obra, construção, atrasado, data limite, atribuídos a mim, conversa, anexo, juntar, offline, tablet, bcf, csv, obra
from: 95039c5a
---

O separador {{ui:Obra}} guarda três tipos de registo junto às suas anotações. Cada um fica associado a uma folha; um RFI ou uma submissão tem também um marcador no ponto da folha a que diz respeito.

- **RFI**: uma pergunta para a equipa de projeto. Estados: Aberto, Respondido, Fechado.
- **Submissão**: algo a rever antes de avançar com o trabalho. Estados: Aberto, Em revisão, Aprovado, Aprovado com observações, Rever e voltar a submeter, Fechado.
- **Registo diário**: o tempo do dia, o número de pessoas na obra e o trabalho realizado. Estados: Rascunho, Final.

Cada registo tem um número próprio do seu tipo (RFI-0001, SUB-0001, LOG-0001), um título, texto, um responsável, uma data limite, uma conversa de respostas e uma lista de nomes de anexos.

## Adicionar um

1. Abra o separador {{ui:Obra}} e escolha {{ui:RFI}} ou {{ui:Submissão}}.
2. Toque ou clique na folha a que pertence. Surge um marcador e o registo abre-se no separador.
3. Preencha o título, a pergunta ou a descrição, a quem está atribuído e quando vence.

Um registo diário é acrescentado à folha aberta sem marcador. {{ui:Colocar marcador}} põe um mais tarde; {{ui:Mover marcador}} move qualquer marcador. Ao tocar num marcador na folha, abre-se o respetivo registo.

## Responder e acompanhar

Altere o {{ui:Estado}} e a alteração fica registada na conversa. Escreva uma resposta e escolha {{ui:Enviar resposta}} (Ctrl+Enter também envia). Os anexos são apenas nomes: escreva um nome ou escolha ficheiros, e a lista indica à equipa o que acompanha o registo. Os próprios ficheiros continuam onde estão.

Um registo cuja data limite já passou e que continua pendente (um RFI que não está Respondido nem Fechado, uma submissão ainda não decidida) fica marcado como **Atrasado**, a vermelho, na lista e no respetivo marcador.

## Encontrar o que importa

Os filtros ficam por cima da lista: tipo, estado, data limite (atrasado, vence em 7 dias, com ou sem data limite), esta folha ou todas as folhas, uma pesquisa de texto e {{ui:Atribuídos a mim}}, que compara o responsável com o nome por que o MarkupCraft o conhece (ver [Definir o seu nome](topic:set-your-name)). A linha por baixo dos filtros conta o que é mostrado e o que está atrasado.

## Exportar

{{ui:CSV}} escreve os registos listados como uma folha de cálculo. {{ui:BCF}} escreve-os como tópicos BCF, cada um com um instantâneo da respetiva posição na folha, para que outras ferramentas BCF os possam listar. Ambos seguem os filtros.

## Guardar, trabalhar offline e juntar cópias

Os registos são guardados dentro do PDF ao guardar, e voltam a aparecer quando o ficheiro é aberto. Não é preciso rede: acrescentar, editar, responder e guardar num tablet numa cave, e depois trazer o PDF de volta. Os PDF mais antigos e os PDF de outros programas abrem como sempre abriram.

Para juntar duas cópias, abra uma e escolha {{ui:Juntar}}, depois selecione a outra cópia do mesmo PDF. Os registos são unidos pelos respetivos identificadores:

- um registo que só uma cópia tem é acrescentado;
- um registo presente em ambas toma os seus campos (título, texto, estado, responsável, data limite) da cópia alterada por último, por inteiro; por isso, se duas pessoas alteraram campos diferentes do mesmo registo, prevalece a versão da cópia mais recente; as conversas e os nomes de anexos das duas cópias são unidos;
- se ambas as cópias numeraram da mesma forma um registo novo, o que chega recebe o número livre seguinte;
- um registo removido numa cópia continua removido, a menos que tenha sido editado depois.

Uma junção é um único passo de anulação.

## Limitações

- Os registos ainda não são partilhados pelo Live TeamWork; use Juntar.
- Nesta versão não há equipas, notificações nem projetos na nuvem para registos.
- As páginas eliminadas do PDF levam consigo os respetivos registos (a confirmação da página conta-os).

---
title: Arquivos que o MarkupCraft abre e salva
summary: PDFs entram, uma cópia de PDF com marcações sai, além de arquivos CSV, BCF e da caixa de ferramentas; para onde cada um vai, online e offline.
keywords: pdf, abrir, salvar, exportar, baixar, csv, bcf, bcfzip, json, caixa de ferramentas, tipos de arquivo, formatos, enviar, senha, criptografado
from: b3045b4c
---

## O que o MarkupCraft abre

| Arquivo | Como | O que acontece |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir}}, {{key:Mod+O}}, ou solte na área da folha. Vários de uma vez não é problema. | Cada página vira uma folha. As marcações que já estão no arquivo são lidas de volta (veja abaixo). |
| Caixa de ferramentas (`.json`) | Guia {{ui:Ferramentas}}, depois {{ui:Importar}} | As ferramentas são adicionadas à sua caixa. Veja [A caixa de ferramentas](topic:tool-chest). |

Qualquer outra coisa é recusada com "O MarkupCraft abre arquivos PDF." na barra de status. Se você soltar uma mistura, os PDFs abrem e a barra de status informa quantos arquivos não eram PDF.

### Marcações que já estão em um PDF

- **Marcações que o MarkupCraft salvou** voltam exatamente como eram: tipo, estilo, autor, datas, status, respostas, número da pendência, a escala da folha e os nomes de folha que você digitou.
- **Comentários de outros programas de PDF** também são lidos. Retângulos, elipses, linhas e setas, polilinhas, polígonos, traços de caneta, caixas de texto e notas adesivas viram marcações normais e editáveis do MarkupCraft. As respostas e os status de revisão vêm junto.
- **Todo o resto** (destaques de texto feitos ao selecionar texto, carimbos de outros programas e outros tipos) é mostrado como está, marcado como somente leitura. Você pode selecionar, ver na lista de marcações e responder, mas não pode mover, alterar nem excluir.
- Links e campos de formulário são deixados como estão e não aparecem na lista.
- Uma escala salva por outro programa (um viewport de medição) é usada como a escala da folha quando o MarkupCraft entende a unidade.

### Arquivos que não abrem

- Um PDF que exige senha: '“nome” precisa de uma senha para abrir. Abra uma cópia sem proteção.'
- Um arquivo danificado ou que na verdade não é um PDF: 'Não foi possível ler “nome” como PDF (…)'.
- Um PDF que abre, mas é protegido contra alterações, abre normalmente. Salvá-lo é recusado (veja abaixo).

Quando vários arquivos são abertos de uma vez, os que funcionam abrem e uma caixa chamada "Alguns arquivos não abriram" lista os outros.

## O que o MarkupCraft salva

Salvar é sempre o **download** de um arquivo novo. Uma página da web não pode sobrescrever um arquivo no seu computador, e o MarkupCraft nunca altera o seu original.

| Você escolhe | Você recebe | Observações |
|---|---|---|
| {{ui:Salvar}} ({{key:Mod+S}}) | "<nome> (marked up).pdf" | Uma cópia do PDF original com cada marcação gravada como um comentário PDF de verdade. Salvar de novo um arquivo "(marked up)" mantém o mesmo nome; nunca vira "(marked up) (marked up)". Veja [Salve o PDF com marcações](topic:save-the-marked-up-pdf). |
| Guia {{ui:Marcações}}, depois {{ui:CSV}} | "<nome> markups.csv" | As marcações como listadas (os filtros valem). |
| Guia {{ui:Marcações}}, depois {{ui:BCF}} | "<nome> markups.bcfzip" | BCF 2.1 para ferramentas de coordenação BIM, com um instantâneo por marcação. Veja [Noções básicas de BCF](topic:bcf-basics). |
| Guia {{ui:Lista de pendências}}, depois {{ui:Exportar CSV}} | "<nome> punch list.csv" | Os itens de pendência em ordem de número. |
| Guia {{ui:Ferramentas}}, depois {{ui:Exportar}} | "MarkupCraft tool chest.json" | Sua caixa de ferramentas, para compartilhar ou guardar. |

"<nome>" é o nome do primeiro PDF aberto, sem o ".pdf".

Os arquivos CSV abrem em qualquer planilha. Eles são UTF-8 com o marcador que as planilhas procuram, então nomes com acentos saem certos. Uma célula que começa com =, +, - ou @ recebe um apóstrofo no início, para que a planilha nunca a execute como fórmula.

## Para onde vão os downloads

O seu navegador decide: em geral a pasta Downloads, ou ele pergunta toda vez se você configurou assim. Veja [Navegadores e computadores](common:browsers#what-differs-between-browsers).

:::chromium
Ao salvar de uma vez todos os arquivos alterados de um conjunto, o Chrome e o Edge podem perguntar se este site pode baixar vários arquivos. Escolha {{ui:Permitir}}, ou você recebe só a primeira cópia.
:::

:::safari
No iPad, o Safari pergunta antes de cada download e coloca o arquivo no app Arquivos, em Downloads. No Mac, ele vai para a pasta definida nas configurações do Safari.
:::

## Online e offline

- **Seus PDFs nunca saem deste computador**, online ou offline. Não há envio para lugar nenhum.
- O leitor de PDF é carregado na primeira vez que você abre um PDF ("Carregando o leitor de PDF…"), e o gravador de PDF na primeira vez que você salva ("Carregando o gravador de PDF…") ou abre um arquivo que já tem comentários.
- Com conexão, os dois carregam do site.
- **Para trabalhar sem conexão,** escolha {{ui:Salvar para uso offline}} na barra do topo enquanto estiver online. O botão conta "Salvando N de M" e depois diz "Pronto para uso offline". Essa cópia inclui o leitor e o gravador de PDF (cerca de 6 MB no total) e esta ajuda, então depois disso abrir, marcar e salvar PDFs funcionam offline neste navegador.
- Se o botão disser "Não foi possível salvar", alguns arquivos não foram baixados: verifique a conexão e clique de novo. Se disser "Offline indisponível", esta janela do navegador não pode guardar uma cópia offline (janelas privadas e alguns computadores gerenciados); use uma janela normal.
- Para atualizar ou descartar a cópia, clique em "Pronto para uso offline" e escolha "Salvar de novo (obter a versão mais recente)" ou "Remover a cópia offline". Mais em [Trabalhar offline](common:offline).

:::offline
Você está offline. Se a barra do topo disser "Pronto para uso offline", tudo funciona, inclusive salvar. Se não disser e você ainda não salvou nesta guia, {{ui:Salvar}} pode falhar com "O gravador de PDF não pôde ser carregado". Suas marcações continuam na guia: mantenha-a aberta, volte a ficar online e escolha {{ui:Salvar}} de novo.
:::

## O que vale saber

- Conjuntos grandes de plantas demoram para abrir: o MarkupCraft lê o texto de cada página para encontrar os números das folhas. A barra de status conta as folhas conforme avança.
- Abrir o mesmo PDF duas vezes adiciona as folhas duas vezes. Se isso acontecer, feche o conjunto e abra de novo.
- {{ui:Fechar}} fecha todos os arquivos abertos de uma vez. Se algum tiver marcações não salvas, ele pergunta: {{ui:Cancelar}}, {{ui:Fechar sem salvar}} ou {{ui:Salvar cópias primeiro}}.
- Ainda não há salvamento na nuvem nem versões para desktop. Guarde seus PDFs com os outros arquivos do projeto e faça backup como de costume. Veja [Para onde vão seus arquivos](common:your-files).

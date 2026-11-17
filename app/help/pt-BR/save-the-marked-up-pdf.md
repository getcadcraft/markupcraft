---
title: Salvar o PDF com marcações
summary: Baixe uma cópia com todas as marcações gravadas como comentários PDF padrão, veja o que outros leitores de PDF mostram e continue o trabalho depois.
keywords: salvar, baixar, exportar pdf, com marcações, anotações, comentários, compartilhar, enviar, pendência, continuar trabalhando, reabrir, ida e volta, imprimir
from: 4c198ebe
---

## Salvar

1. Escolha {{ui:Salvar}} na barra de ferramentas, ou pressione {{key:Mod+S}}.
2. Se vários arquivos estiverem abertos, escolha {{ui:Este arquivo}} (o arquivo da folha em que você está) ou {{ui:Todos os arquivos alterados}}. Cada cópia é baixada separadamente.
3. Aguarde "Salvando <file>…" terminar. O primeiro salvamento da sessão também carrega o gravador de PDF.

Resultado: seu navegador baixa "<name> (marked up).pdf", e a barra de status informa: 'Salvo A-Plans (marked up).pdf (24 marcações, 18.2 MB). O arquivo original não foi alterado.' O ponto ao lado de {{ui:Salvar}} desaparece.

**Seu PDF original nunca é alterado.** O MarkupCraft grava um arquivo novo. Onde ele é salvo depende das configurações de download do seu navegador (veja [Arquivos que o MarkupCraft abre e salva](topic:files#where-downloads-go)).

## Continuar o trabalho depois

Na próxima vez, abra a cópia "(marked up)", e não o original. Tudo volta editável: marcações, status, respostas, itens de pendência, a escala de cada folha e os nomes de folha que você digitou. Salvar de novo baixa um arquivo com o mesmo nome "(marked up)"; o navegador pode acrescentar um número, como "(1)", se o download antigo ainda estiver na pasta. Substitua ou organize as cópias antigas por conta própria.

O MarkupCraft não salva o PDF sozinho. Enquanto você trabalha, ele mantém uma cópia de recuperação neste navegador, então uma falha ou uma aba fechada não perde suas marcações: na próxima vez que abrir o MarkupCraft, ele pergunta "Recuperar seu trabalho?". Veja [Recuperar seu trabalho](common:recover). Ainda assim, salve antes de fechar; se tentar sair com marcações não salvas, o navegador pergunta "Sair do site?" primeiro (o Safari do iPad não pergunta).

## O que outros leitores de PDF veem

Cada marcação é gravada como um comentário (anotação) PDF padrão com o próprio desenho, então qualquer visualizador de PDF a mostra, a imprime e a lista no painel de comentários:

- **A aparência é a mesma** do MarkupCraft: nuvens com as curvas, setas, carimbos, pontos de contagem, selos de número de pendência, rótulos de medição.
- **Os detalhes são padrão:** autor, data, assunto, o texto do comentário e as cores.
- **Nuvens** são comentários de retângulo ou polígono com borda nublada; **caixas de texto** e **chamadas** são comentários de caixa de texto; **notas** são notas adesivas; traços de **caneta** e de **marca-texto** são tinta; **carimbos** são comentários de carimbo.
- **Comprimentos e áreas** são comentários de medição, e cada folha calibrada carrega a própria escala, então visualizadores que entendem medições podem mostrar os valores.
- **Respostas** são respostas ao comentário, e **status** são estados de revisão (Aberto aparece como sem estado).
- **Números de folha** que você digitou viram os rótulos de página que outros visualizadores mostram.

Alguns itens só o MarkupCraft lê de volta: o responsável e o prazo do item de pendência, o status do item e alguns detalhes de estilo. Outros programas os mantêm, a menos que reescrevam o comentário.

Em outro programa, os comentários podem ser movidos ou editados como qualquer outro. Se alguém fizer isso e devolver o arquivo, o MarkupCraft usa a nova posição do comentário ao abrir o arquivo.

Detalhes completos: [O que é salvo no PDF](topic:what-the-pdf-keeps).

## Caracteres que aparecem como "?"

O texto das marcações é gravado com a fonte padrão Helvetica, que todo visualizador de PDF tem. Ela cobre letras do inglês e do oeste europeu (é, ñ, ü, ø e semelhantes), mas não outros alfabetos, símbolos fora desse conjunto ou emojis. Esses caracteres aparecem normalmente no MarkupCraft, mas saem como "?" na cópia salva, e a mensagem de salvamento os conta: "3 caracteres fora do conjunto da Europa Ocidental saem como "?" na cópia." Escreva essas palavras por extenso ou use um substituto simples (por exemplo "diâm." para o símbolo de diâmetro).

## Arquivos que não podem ser salvos

- **PDFs protegidos:** "Este PDF está protegido (criptografado), então não é possível gravar uma cópia com marcações. Peça uma cópia sem proteção." Você ainda pode revisá-lo na tela e exportar o CSV e o BCF.
- Se o salvamento falhar por outro motivo, uma caixa chamada "Não foi possível salvar <file>" mostra o motivo. Suas marcações continuam na aba; nada se perde até você fechá-la.

## Achatamento e impressão

Ainda não há achatamento (gravar as marcações na página) nem comando de impressão. Para imprimir, abra a cópia salva em qualquer visualizador de PDF e imprima com os comentários visíveis.

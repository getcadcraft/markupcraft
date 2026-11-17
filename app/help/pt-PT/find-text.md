---
title: Procurar texto nos desenhos
summary: Pesquisar as palavras em todas as folhas, ir a cada ocorrência e envolvê-las todas com uma nuvem num só passo.
keywords: procurar, pesquisar, texto, palavra, palavras, ctrl f, procurar por, nota, nota-chave, chamada, nuvem em todas, realçar resultados, ocr, digitalizar, digitalizado, ler texto, selecionar texto, copiar texto, tesseract
from: 3435c9eb
---

{{ui:Procurar texto}}, no topo do painel {{ui:Folhas}}, procura as palavras desenhadas nas próprias folhas. {{ui:Procurar folhas}}, por baixo, procura apenas os nomes das folhas.

## Procurar

1. Prima {{key:Mod+F}}, ou abra {{ui:Procurar texto}}.
2. Escreva as palavras, como `hood` ou `verify in field`.
3. Escolha {{ui:Todas as folhas}} ou {{ui:Esta folha}}, e marque {{ui:Maiúsculas/minúsculas}} ou {{ui:Palavras inteiras}} se precisar.
4. Prima {{key:Enter}} ou escolha {{ui:Procurar}}.

Resultado: cada ocorrência aparece na lista com o número da folha e as palavras à volta, e fica assinalada a amarelo na respetiva folha. Escolha uma ocorrência para abrir a folha e fazer zoom sobre ela.

Uma frase é encontrada mesmo quando o desenho a divide por dois fragmentos de texto ou por duas linhas.

## Pôr nuvem em todas as ocorrências

Escolha {{ui:Nuvem em todas}}. Uma nuvem de revisão é desenhada à volta de cada ocorrência da lista, em todas as folhas, com «Encontrado: <as suas palavras>» como comentário. Um {{key:Mod+Z}} remove todas elas.

## Ler o texto de uma digitalização (OCR)

Uma folha digitalizada é apenas uma imagem: enquanto as palavras não forem lidas, não há nada para encontrar. Quando a contagem indicar folhas sem texto, escolha {{ui:Ler texto (OCR)…}} por baixo dela, ou {{ui:Páginas}} › {{ui:Ler texto (OCR)…}}.

1. Escolha as páginas: esta folha, todas as páginas do ficheiro ou todas as páginas de todos os ficheiros abertos.
2. Escolha o idioma do texto. {{ui:Também inglês}} lê também palavras em inglês.
3. Escolha {{ui:Ler texto}}. Uma barra mostra a página a ser lida; {{ui:Parar}} termina a execução e mantém as páginas já lidas.

Resultado: as palavras podem ser encontradas, selecionadas e copiadas como qualquer outro texto. Tudo corre no seu computador: nada é enviado para fora. Funciona sem ligação no Studio e, no navegador, depois de a aplicação ser guardada para trabalhar offline (em inglês e no idioma da interface) ou depois de um idioma ter sido usado uma vez. As páginas que já têm texto ficam como estão.

Ao guardar, as palavras entram no PDF como texto invisível por trás da imagem, à parte das suas anotações, para que outros programas de PDF as possam pesquisar e copiar também. Até guardar, o ficheiro aparece com alterações não guardadas.

## Selecionar e copiar texto

Escolha {{ui:Mais}} › {{ui:Selecionar texto para copiar}}. Arraste de uma palavra até outra para selecionar as palavras entre elas, arraste a partir de uma área vazia da folha para selecionar as palavras de uma caixa, ou faça duplo clique numa palavra. {{key:Mod+A}} seleciona todas as palavras da folha. {{key:Mod+C}} copia-as, mantendo as linhas. Qualquer outra ferramenta termina-a.

## Bom saber

- Os desenhos cujas letras são traçadas como linhas também não têm texto; lê-los como imagem funciona melhor com texto impresso, como um livro digitalizado ou uma especificação.
- O leitor é o Tesseract, incluído na aplicação com os dados de idioma para inglês e para os idiomas da aplicação. Na primeira execução, é carregado (cerca de 6 MB, mais para um segundo idioma).
- A qualidade da leitura depende da digitalização: páginas limpas a 300 dpi são lidas quase palavra por palavra; digitalizações antigas, ténues ou de baixa resolução deixam escapar mais palavras.
- A lista mostra as primeiras 500 ocorrências; {{ui:Nuvem em todas}} põe nuvens em até 2,000.
- As ocorrências são apagadas quando fecha o conjunto, e, para um ficheiro, quando muda as respetivas páginas.

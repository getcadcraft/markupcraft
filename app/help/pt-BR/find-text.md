---
title: Buscar texto nos desenhos
summary: Pesquise as palavras de todas as folhas, vá até cada ocorrência e marque todas com uma nuvem em um só passo.
keywords: buscar, pesquisar, texto, palavra, palavras, ctrl f, procurar, nota, nota-chave, chamada, nuvem em todas, destacar ocorrências, ocr, digitalização, digitalizado, ler texto, selecionar texto, copiar texto, tesseract
from: 3435c9eb
---

{{ui:Buscar texto}}, no alto do painel {{ui:Folhas}}, pesquisa as palavras desenhadas nas próprias folhas. {{ui:Buscar folhas}}, abaixo dele, pesquisa apenas os nomes das folhas.

## Localizar

1. Pressione {{key:Mod+F}} ou abra {{ui:Buscar texto}}.
2. Digite as palavras, como `hood` ou `verify in field`.
3. Escolha {{ui:Todas as folhas}} ou {{ui:Esta folha}}, e marque {{ui:Diferenciar maiúsculas e minúsculas}} ou {{ui:Palavras inteiras}} se precisar.
4. Pressione {{key:Enter}} ou escolha {{ui:Localizar}}.

Resultado: cada ocorrência é listada com o número da sua folha e as palavras ao redor, e é marcada em amarelo na sua folha. Escolha uma ocorrência para abrir a folha e dar zoom nela.

Uma frase é encontrada mesmo quando o desenho a divide em dois trechos de texto ou em duas linhas.

## Colocar nuvem em todas as ocorrências

Escolha {{ui:Nuvem em todas}}. Uma nuvem de revisão é desenhada em volta de cada ocorrência da lista, em todas as folhas, com "Encontrado: <suas palavras>" como comentário. Um {{key:Mod+Z}} remove todas elas.

## Ler o texto de uma digitalização (OCR)

Uma folha digitalizada é apenas uma imagem: enquanto suas palavras não forem lidas, não há nada a encontrar. Quando a contagem indicar que há folhas sem texto, escolha {{ui:Ler texto (OCR)…}} abaixo dela, ou {{ui:Páginas}} › {{ui:Ler texto (OCR)…}}.

1. Escolha as páginas: esta folha, todas as páginas do arquivo ou todas as páginas de todos os arquivos abertos.
2. Escolha o idioma do texto. {{ui:Também inglês}} também lê palavras em inglês.
3. Escolha {{ui:Ler texto}}. Uma barra mostra a página sendo lida; {{ui:Parar}} encerra a execução e mantém as páginas já lidas.

Resultado: as palavras podem ser encontradas, selecionadas e copiadas como qualquer outro texto. Tudo é executado no seu computador: nada é enviado a lugar algum. Funciona sem conexão no Studio e, no navegador, depois que o app for salvo para uso offline (em inglês e no idioma da sua interface) ou depois que um idioma tiver sido usado uma vez. Páginas que já têm texto são mantidas como estão.

Ao salvar, as palavras entram no PDF como texto invisível atrás da imagem, separadas das suas marcações, para que outros programas de PDF também possam pesquisá-las e copiá-las. Até você salvar, o arquivo aparece como não salvo.

## Selecionar e copiar texto

Escolha {{ui:Mais}} › {{ui:Selecionar texto para copiar}}. Arraste de uma palavra até outra para selecionar as palavras entre elas, arraste de uma área vazia da folha para selecionar as palavras dentro de uma caixa, ou dê um clique duplo em uma palavra. {{key:Mod+A}} seleciona todas as palavras da folha. {{key:Mod+C}} copia-as, mantendo as linhas. Qualquer outra ferramenta encerra o modo.

## Bom saber

- Desenhos cujas letras são feitas de linhas também não têm texto; ler como imagem funciona melhor com texto impresso, como um livro digitalizado ou uma especificação.
- O leitor é o Tesseract, incluído no app com os seus dados de idioma para inglês e para os idiomas do app. A primeira execução o carrega (cerca de 6 MB, mais um segundo idioma).
- O quão bem ele lê depende da digitalização: páginas limpas a 300 dpi são lidas quase palavra por palavra; digitalizações antigas, fracas ou de baixa resolução perdem mais palavras.
- A lista mostra as primeiras 500 ocorrências; {{ui:Nuvem em todas}} marca até 2.000.
- As ocorrências são limpas quando você fecha o conjunto, e para um arquivo quando você altera as suas páginas.

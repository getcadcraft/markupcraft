---
title: Emissões, revisões e registo de alterações do desenho
summary: Manter um histórico de emissões com o modelo do arquiteto: ler as emissões, registar instruções de obra, desenhos de fabrico e modelos ligados associados a uma emissão, e ler o registo de alterações do desenho.
keywords: emissão, revisão, revisões, registo de alterações, registo de alterações do desenho, registo de desenhos, instrução de obra, desenho de fabrico, modelo ligado, concurso, construção, histórico de emissões, nuvem de revisão, nuvem, conjunto de anotações
from: e4688f64
---

## O que vai fazer

Trabalhe a partir do mesmo histórico de emissões que o resto da equipa. Veja que folhas saíram em cada revisão, e mantenha o que acontece na obra associado à emissão a que pertence.

## Passos

1. Abra **Emissões e revisões**.
2. Escolha **Ler um histórico de emissões** e selecione o ficheiro `.issues.json` guardado a partir do BimCraft ou de outra aplicação. As emissões e os registos dele são acrescentados aos seus. Nada é substituído.
3. Escolha **Adicionar um registo** para uma instrução de obra, um desenho de fabrico, um conjunto de anotações, um modelo ligado ou uma nota. Selecione a emissão a que se refere e o respetivo estado. Um ficheiro escolhido fica registado pelo nome, tamanho e SHA-256; o ficheiro continua onde está.
4. **Registo de alterações do desenho** mostra uma linha por cada folha e uma coluna por cada emissão. Uma revisão entre parênteses foi emitida de novo sem alterações.
5. **Transferir o registo de alterações (CSV)** guarda as emissões, a tabela das folhas e os registos. **Guardar o histórico de emissões** escreve um ficheiro que as outras aplicações leem.

## Bom saber

- **Registar as anotações selecionadas** associa as anotações selecionadas à emissão mais recente. Uma nuvem fica registada como nuvem de revisão com a revisão dessa emissão. Escolha **Mostrar** ao lado do registo para ir até ele.
- **Registar uma emissão** emite as folhas anotadas. **Alterações desde** indica depois quais as folhas anotadas após essa emissão.
- O histórico é guardado dentro do PDF anotado. Não está abrangido pela anulação.
- Ler duas vezes o mesmo ficheiro não acrescenta nada em duplicado. Quando duas cópias têm o mesmo registo, é mantido o mais recente.

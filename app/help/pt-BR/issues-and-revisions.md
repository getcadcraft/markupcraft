---
title: Emissões, revisões e registro de alterações do desenho
summary: Mantenha um histórico de emissões junto com o modelo do arquiteto: leia as emissões recebidas, registre instruções de obra, desenhos de fabricação e modelos vinculados contra uma emissão, e leia o registro de alterações do desenho.
keywords: emissão, revisão, revisões, registro de alterações, lista de desenhos, instrução de obra, desenho de fabricação, modelo vinculado, licitação, obra, histórico de emissões, nuvem de revisão, nuvem, conjunto de marcações
from: e4688f64
---

## O que você vai fazer

Trabalhe com o mesmo histórico de emissões do restante da equipe. Veja quais folhas foram enviadas em qual revisão, e mantenha o que acontece na obra vinculado à emissão a que pertence.

## Passos

1. Abra **Emissões e revisões**.
2. Escolha **Ler um histórico de emissões** e selecione o arquivo `.issues.json` salvo pelo BimCraft ou por outro app. As emissões e os registros dele são adicionados aos seus. Nada é substituído.
3. Escolha **Adicionar um registro** para uma instrução de obra, um desenho de fabricação, um conjunto de marcações, um modelo vinculado ou uma nota. Selecione a emissão a que ele se refere e o seu status. Um arquivo que você escolher é registrado pelo nome, tamanho e SHA-256; o arquivo continua onde está.
4. **Registro de alterações do desenho** mostra uma linha para cada folha e uma coluna para cada emissão. Uma revisão entre colchetes foi emitida novamente sem alterações.
5. **Baixar o registro de alterações (CSV)** salva as emissões, a tabela de folhas e os registros. **Salvar o histórico de emissões** grava um arquivo que os outros apps leem.

## Bom saber

- **Registrar as marcações selecionadas** associa as marcações selecionadas à emissão mais recente. Uma nuvem é registrada como nuvem de revisão na revisão daquela emissão. Escolha **Mostrar** ao lado do registro para ir até ele.
- **Registrar uma emissão** emite as suas folhas marcadas. **Alterações desde** então indica quais folhas foram marcadas depois dessa emissão.
- O histórico é salvo dentro do PDF marcado. Ele não faz parte do Desfazer.
- Ler o mesmo arquivo duas vezes não adiciona nada em duplicidade. Quando duas cópias têm o mesmo registro, o mais recente é mantido.

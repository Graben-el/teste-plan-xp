# Introdução

Este projeto é um teste para a vaga de Desenvolvedor Front-end na empresa Plan XP. Seu principal objetivo é servir de avaliação das minhas habilidades, consistindo em criar uma landing page (com versão mobile e Desktop) baseada em um modelo enviado pela empresa via e-mail. 

Os únicos requisitos são:
    
1. Mobile - Menu deve fixar fixo no topo, ao clicar no ícone de menu deve expandir para tela inteira, mantendo o cabeçalho a vista
2. Desktop - Deve ter rolagem única, cada seção do site deve ocupar a tela inteira do usuário. Menu desktop fixo do lado esquerdo

# Sobre o projeto

## Como iniciar o projeto localmente

1. Clonar este repositório a partir do comando
    `git clone https://github.com/Graben-el/teste-plan-xp.git `
    ou baixar o arquivo zip do projeto.
2. Abrir a pasta do projeto no terminal e inserir o comando
    `npm install` para instalar as dependências necessárias para funcionamento.
3. Inserir o comando `npm start` após a instalação das dependências.

O projeto também pode ser visualizado através do Github Pages, no link https://graben-el.github.io/teste-plan-xp/.

## Tecnologias Utilizadas

Para construir este projeto utilizei React.JS com TypeScript, aplicando componentes funcionais e hooks para controle de estado. Além disso foram utilizadas as seguintes bibliotecas para implementação de alguns recursos:

1. Styled-components -> estilização dos componentes usando CSS-in-JS;
2. React-menu-burguer -> para criação do menu mobile (https://www.npmjs.com/package/react-burger-menu)
3. React-scroll -> para implementação facilitada da funcionalidade de navegação aos componentes a partir do menu (https://www.npmjs.com/package/react-scroll)
4. React Icons -> para fácil inclusão de emoticons/ícones (https://react-icons.github.io/react-icons/).

A construção de componentes foi planejada para que fosse possível reutilizar o máximo possível de código, através da criação de componentes genéricos.

A estilização dos componentes foi feita ostensivamente a partir de CSS Flexbox para posicionamento e comportamento dos elementos exibidos.

## Informações extras 

### Desafios e Facilidades

A parte de estruturação do projeto foi feita de forma tranquila, sem nenhum tipo de dificuldade. A ideia de criar componentes genericos e a máxima componentização dos elementos criados facilitou a manutenção/alteração do código, apesar de saber que poderia ser ainda melhor.

Inicialmente foram tomadas algumas decisões erradas que tomaram muito tempo no desenvolvimento do projeto, devido a dificuldades em resolver bugs criados. A principal delas foi em relação a implementação do menu lateral para desktop, que a principio foi pensada de forma a utilizar a biblioteca react-router-dom para criar uma página separada, fora do contexto do menu. Posteriormente foi substituída pela simples forma de adicionar barras de rolagens no componente de conteúdo do site.

## Imagens do projeto

Versão Desktop:

<img src='./src/images/desktop.gif'></img>

Versão Mobile:

<img src='./src/images/mobile.gif'></img>
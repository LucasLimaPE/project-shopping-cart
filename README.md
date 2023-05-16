<h1 align="center">Project Shopping Cart</h1>

## :memo: Descrição

Este projeto foi criado com o objetivo de testar e aprimorar os conhecimentos em JavaScript, CSS, HTML, Node.js e Jest durante o Módulo de Fundamentos do Desenvolvimento Web na Trybe. Durante sua elaboração, foram praticadas habilidades essenciais, tais como:

* Utilizar um ambiente de execução Node.js;
* Utilizar TDD (Test Drive Development);
* Fazer requisições à API (Application Programming Interface) do Mercado Livre;
* Utilizar JavaScript, CSS e HTML para construir páginas web;
* Utilizar funções assíncronas;
* Implementar testes unitários com Jest.

O projeto consiste em implementar um **carrinho de compras** dinâmico, consumir dados provenientes de uma API e utilizá-los.

## :books: Requisitos

1. Criar uma listagem de produtos, este requisito pode ser feito em conjunto com o requisito 8 para se utilizar TDD (Test Driven Development).
  - Criar uma listagem de produtos que devem ser consultados através da API do Mercado Livre.
  - Implementar  a função `fetchProducts` no arquivo `fetchProducts.js`, dentro da pasta `helpers`.
  - A função `fetchProducts` deve consumir o seguinte endpoint:
  ```javascript
    "https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
  ```
  
  - Onde `$QUERY` deve ser o valor da sua busca. Para este trabalho, a busca deve ser **obrigatoriamente** o termo `computador`.
  - O retorno desse endpoint será algo no formato `json`.
  - A lista de produtos que devem ser exibidos é o array `results` no `JSON` acima.
  - O elemento com a classe `.item` deve exibir a lista de produtos.

2. Adicione o produto ao carrinho de compras, este requisito pode ser feito em conjunto com o requisito 9 para se utilizar TDD.
  - Cada produto na página HTML possui um botão com o nome `Adicionar ao carrinho`.
  - Ao clicar nesse botão deve-se realizar uma requisição que irá retornar todos os dados específicos de um produto.
  - Implementar a função `fetchItem` que já está criada no arquivo `fetchItem.js`, que se encontra dentro da pasta `helpers`.
  - A função `fetchItem` deve consumir o seguinte endpoint:
  ```javascript
    "https://api.mercadolibre.com/items/$ItemID"
  ```

  - Onde `$ItemID` deve ser o valor `id` do item selecionado.
  - O elemento com a classe `.cart__items` deve adicionar o item escolhido, apresentando corretamente suas informações de id, título e preço.

3. Remova o item do carrinho de compras.
  - Ao clicar no produto no carrinho de compras, ele deve ser removido da lista, para isso, deve-se implementar dentro do arquivo `script.js` a lógica necessária para a função `cartItemClickListener(event)`, que deve ser responsável por realizar a remoção.

4. Carregue o carrinho de compras através do LocalStorage ao iniciar a página, este requisito pode ser feito em conjunto com os requisitos 10 e 11, para se utilizar TDD.
  - Ao carregar a página, o estado atual do carrinho de compras deve ser carregado do **LocalStorage**. Para que isso funcione, o carrinho de compras deve ser salvo no **LocalStorage**, ou seja, todas as **adições** e **remoções** devem ser abordadas para que a lista esteja sempre atualizada.
  - Deve-se implementar dentro da pasta `helpers` as funções `saveCartItems` e `getSavedCartItems`, respectivamente, nos arquivos `saveCartItems.js` e `getSavedCartItems.js`.
  - A função `saveCartItems` deve salvar os itens do carrinho de compras no `localStorage`, em uma chave denominada `cartItems`.
  - A função getSavedCartItems deve recuperar os itens do carrinho de compas do `localStorage` quando a página for carregada.

5. Some o valor total do carrinho de compras, a cada item que for adicionado ao carrinho de compras deve-se somar seus valores e apresentá-los na página principal do projeto.
  - O elemento que tem como filho o preço total do carrinho deve ter, **obrigatoriamente**, a classe `total-price`.

6. Implementar a lógica no botão Esvaziar carrinho para limpar o carrinho de compras.
  - Implementar nesse botão a lógica para remover todos os itens do carrinho de compras.
  - O botão deve ter **obrigatoriamente** a classe `empty-cart`.
  
7. Adicione um texto de "carregando" durante uma requisição à API.
  - Criar um elemento que contenha o texto "carregando...", que deve ser exibido em algum lugar da página.
  - Este elemento deve ser mostrado apenas durante a requisição à API.
  - Este elemento deve ter **obrigatoriamente** a classe `loading`.

8. Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`, no arquivo `fetchProducts.test.js`, dentro da pasta `tests`.
  - Teste se `fetchProducts` é uma função.
  - Execute a função `fetchProducts` com o argumento "computador" e teste se a função `fetch` foi chamada.
  - Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador".
  - Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.
  - Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.

9. Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`, no arquivo `fetchItem.test.js`, dentro da pasta `tests`.
  - Teste se `fetchItem` é uma função.
  - Execute a função `fetchItem` com o argumento do item "MLB1615760527" e teste se a função `fetch` foi chamada.
  - Teste se, ao chamar a função `fetchItem` com o argumento do item "MLB1615760527", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527".
  - Teste se o retorno da função `fetchItem` com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.
  - Teste se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.

10. Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`, no arquivo `saveCartItems.test.js`, dentro da pasta `tests`.
  - Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado.
  - Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para `saveCartItems`.

11. Desenvolva testes de no mínimo 100% de cobertura total e 100% da função `getSavedCartItems`, no arquivo `getSavedCartItems.test.js`, dentro da pasta `tests`.
  - Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado.
  - Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro`.


## :wrench: Tecnologias utilizadas
* JavaScript;
* CSS;
* Node.js;
* Jest;
* HTML.

## :hammer: Arquivos modificados/criados
Pasta raíz do projeto `/`:
  * script.js;
  * index.html;

Pasta helpers `/helpers`:
  * fetchItem.js
  * fetchProducts.js
  * getSavedCartItems.js
  * saveCartItems.js

Pasta tests `/tests`:
  * fetchItem.test.js
  * fetchProducts.test.js
  * getSavedCartItems.test.js
  * saveCartItems.test.js

## :computer: Como usar no ambiente local
<details>
  <summary><strong>Pré-requisitos</strong></summary>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js (v16)](https://nodejs.org/en/)
- [Git](https://git-scm.com)
</details>

<details>
  <summary><strong>Rodando a aplicação</strong></summary>

1 - Clone esse repositório para sua máquina com o seguinte comando:

```bash
 git clone git@github.com:LucasLimaPE/project-shopping-cart.git
```

2 - Entre na pasta criada:

```
 cd shopping-cart
```

3 - Instale as dependências:

```
 npm install
```

2 - Via interface gráfica, vá até a pasta 'shopping-cart' criada. Entre nela.

3 - Dê um duplo clique no arquivo index.html
</details>

<details>
  <summary><strong>Rodando os testes</strong></summary>
  Com os pacotes instalados via comando 'npm install', abra um terminal dentro da pasta raiz do projeto e digite o seguinte comando para testar a aplicação:
  
```
 npm test
```
</details>

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/LucasLimaPE">
        <img src="https://avatars.githubusercontent.com/u/94488633?s=400&u=c0fc6e9a64565b85fc249c1b7a302c7b674ff785&v=4" width="100px;" alt="Foto de Lucas Lima no GitHub"/><br>
        <sub>
          <b>LucasLimaPE</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto

Foram desenvolvidos 100% dos requisitos.
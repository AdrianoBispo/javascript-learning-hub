## Funções em JavaScript

### O que são Funções?

Em JavaScript, funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas são como pequenas máquinas que você pode criar para realizar cálculos, manipular dados ou executar qualquer outra ação. Uma vez definida, uma função pode ser chamada quantas vezes você precisar.

### Por que usar Funções?

- **Reutilização de código:** Evite repetir o mesmo código várias vezes.
- **Organização:** Divide o código em partes menores e mais gerenciáveis.
- **Abstração:** Esconde a complexidade interna de uma determinada tarefa.
- **Modularidade:** Permite criar módulos de código independentes.

### Como definir uma função?

``` JavaScript

function nomeDaFuncao(parametro1, parametro2, ...) {
  // Corpo da função
  // Instruções a serem executadas
  return valor; // Opcional: retorna um valor
}

```

- ``function``: Palavra-chave para definir uma função.
- ``nomeDaFuncao``: Nome que você escolhe para a função.
- ``parametro1``, ``parametro2``: Parâmetros que a função recebe (opcionais).
- ``return``: Retorna um valor da função (opcional).

### Chamando uma função:

``` JavaScript

nomeDaFuncao(argumento1, argumento2, ...);

```

Os argumentos são os valores reais passados para os parâmetros da função quando ela é chamada.

### Exemplo Básico:

``` JavaScript

function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("João"); // Saída: Olá, João!

```

### Tipos de Funções

- **Funções declaradas:** A forma mais comum de definir funções.
- **Expressões de função:** Funções atribuídas a variáveis.
- **Arrow functions:** Sintaxe mais concisa para funções.
- **Métodos:** Funções associadas a objetos.

### Parâmetros e Argumentos

- Parâmetros: Variáveis declaradas dentro dos parênteses da definição da função.
- Argumentos: Valores reais passados para os parâmetros quando a função é chamada.

### Escopo de Funções

- Escopo léxico: Variáveis declaradas dentro de uma função só são visíveis dentro dessa função e em funções aninhadas.

### Retorno de Funções

A palavra-chave ``return`` encerra a execução da função e retorna um valor. Se nenhuma instrução ``return`` for encontrada, a função retorna ``undefined``.

### Funções como cidadãos de primeira classe

Em JavaScript, funções são tratadas como qualquer outra variável:

### Atribuídas a variáveis:

``` JavaScript

let minhaFuncao = function() {
  // ...
};

```

### Passadas como argumentos:

``` JavaScript

function executarFuncao(funcao) {
  funcao();
}

```

### Retornadas por outras funções:

``` JavaScript

function criarFuncao() {
  return function() {
    console.log("Função criada");
  };
}

```

### Funções Avançadas

- **Funções recursivas:** Funções que chamam a si mesmas.
- **Closures:** Funções que "lembram" seu escopo léxico.
- **Higher-order functions:** Funções que aceitam outras funções como argumentos ou retornam funções.
- **Métodos de array:** Funções embutidas em arrays para manipulação de dados.

### Parte Básica vs. Avançada

- **Básica:** Conceitos fundamentais, sintaxe, parâmetros, retorno, escopo, chamada de funções.
- **Avançada:** Funções como cidadãos de primeira classe, closures, higher-order functions, recursividade, métodos de array, programação funcional.

### Em resumo:

As funções são um dos pilares da programação em JavaScript. Dominar o conceito de funções é essencial para escrever código mais organizado, reutilizável e eficiente. Ao entender os diferentes tipos de funções, seus parâmetros, escopo e como utilizá-las em conjunto com outras features do JavaScript, você estará apto a criar aplicações web mais complexas e robustas.
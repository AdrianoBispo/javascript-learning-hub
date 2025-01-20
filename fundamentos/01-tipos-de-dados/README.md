# Tipos de Dados em JavaScript: Um Guia Completo

JavaScript é uma linguagem de programação dinamicamente tipada, o que significa que o tipo de uma variável é determinado em tempo de execução, com base no valor que ela armazena. Essa flexibilidade é uma das características que tornam JavaScript tão popular.

## Tipos de Dados Primitivos:

- **String:** Representa uma sequência de caracteres, como "Olá, mundo!" ou 'JavaScript'.
- **Number:** Representa números tanto inteiros quanto de ponto flutuante, como 42, 3.14, -10.
- **Boolean:** Representa valores lógicos, true (verdadeiro) ou false (falso).
- **Null:** Representa a ausência intencional de qualquer valor.
- **Undefined:** Indica que uma variável foi declarada, mas ainda não possui um valor atribuído.
- **Symbol:** Representa um valor único e imutável, frequentemente utilizado como identificador.

## Tipos de Dados por Referência:

- **Object:** É a base para todos os objetos em JavaScript. Um objeto é uma coleção de pares chave-valor.
- **Array:** É um tipo especial de objeto, usado para armazenar uma coleção ordenada de valores.
- **Function:** Representa uma função, que é um bloco de código reutilizável.

## Entendendo a Diferença:

- **Tipos Primitivos:** Quando você atribui um valor primitivo a uma variável, você está criando uma cópia desse valor. Mudar o valor de uma variável primitiva não afeta outras variáveis.
- **Tipos por Referência:** Quando você atribui um objeto a uma variável, você está criando uma referência a esse objeto. Se você modificar o objeto através de uma variável, as outras variáveis que referenciam o mesmo objeto também serão afetadas.

### Exemplo:

``` JavaScript

let numero = 10; // Tipo Number
let texto = "JavaScript"; // Tipo String
let verdadeiro = true; // Tipo Boolean
let nulo = null; // Tipo Null
let indefinido; // Tipo Undefined
let simbolo = Symbol(); // Tipo Symbol

let pessoa = { nome: "João", idade: 30 }; // Tipo Object
let numeros = [1, 2, 3]; // Tipo Array

function saudacao(nome) { // Tipo Function
    console.log("Olá, " + nome + "!");
}

```

## Por que é importante saber os tipos de dados?

- **Operações:** Diferentes tipos de dados suportam diferentes operações. Por exemplo, você pode somar dois números, mas não pode somar um número com uma string.
- **Conversão de Tipos:** JavaScript permite converter um tipo de dado em outro, mas é importante entender as implicações dessas conversões.
- **Depuração:** Conhecer os tipos de dados ajuda a identificar e corrigir erros em seu código.

### Em resumo:

Compreender os tipos de dados em JavaScript é fundamental para escrever códigos de forma eficaz e eficiente. Ao entender a diferença entre tipos primitivos e tipos por referência, você poderá escrever código mais limpo e evitar erros comuns.
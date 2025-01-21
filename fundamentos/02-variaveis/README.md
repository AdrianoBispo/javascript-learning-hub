# Variáveis em JavaScript

## O que são variáveis?

Em JavaScript, variáveis são como recipientes que armazenam dados. Pense nelas como caixas com rótulos: você dá um nome à caixa (a variável) e coloca um valor dentro dela (o dado). Esse valor pode ser um número, um texto, um objeto, ou qualquer outro tipo de dado suportado pela linguagem.

## Por que usamos variáveis?

- **Armazenar dados:** Guardamos informações que serão usadas mais tarde no código, como o nome de um usuário, a idade de uma pessoa, o resultado de um cálculo, etc.
- **Manipular dados:** Podemos modificar os valores armazenados nas variáveis, realizar cálculos, e tomar decisões com base nesses valores.
- **Reutilizar código:** Ao invés de repetir o mesmo valor várias vezes no código, podemos armazená-lo em uma variável e usá-la quantas vezes precisarmos.

## Como declaramos variáveis em JavaScript?

Tradicionalmente, usávamos a palavra-chave ``var`` para declarar variáveis. No entanto, o JavaScript moderno introduziu duas novas formas: ``let`` e ``const``. Cada uma tem suas particularidades:

- ``var``: Permite redeclarar e reatribuir o valor de uma variável. Seu escopo pode ser tanto global quanto de função.
- ``let``: Não permite redeclarar, mas permite reatribuir o valor. Seu escopo é de bloco (dentro de um par de chaves {}).
- ``const:`` Não permite nem redeclarar nem reatribuir o valor. Seu escopo também é de bloco. É ideal para constantes, como valores que nunca mudarão.

### Exemplo:

``` JavaScript

// Declarando variáveis
var nome = "João";
let idade = 30;
const PI = 3.14159;

// Modificando o valor de uma variável
idade = 31; // Ok, pois idade foi declarada com let

// Tentando modificar uma constante (vai gerar um erro)
PI = 3.15; // Erro! O valor de uma constante não pode ser alterado

```

## Tipos de dados em variáveis:

JavaScript é uma linguagem _dinamicamente tipada_, o que significa que você não precisa declarar explicitamente o tipo de dado de uma variável. O tipo é inferido automaticamente pelo valor que você atribui a ela. Os principais tipos de dados são:

- **String:** Texto (entre aspas simples ou duplas)
- **Number:** Números (inteiros ou decimais)
- **Boolean:** Valores lógicos (true ou false)
- **Null:** Representa a ausência intencional de qualquer valor
- **Undefined:** Indica que uma variável foi declarada, mas ainda não possui um valor
- **Object:** Representa uma coleção de pares chave-valor
- **Array:** Uma lista ordenada de valores

## Escopo de variáveis:

O escopo de uma variável determina onde ela pode ser acessada no seu código. As variáveis declaradas com ``var`` geralmente têm escopo global ou de função, enquanto as variáveis declaradas com ``let`` e ``const`` têm escopo de bloco.

## Boas práticas:

- **Nomes significativos:** Use nomes de variáveis que reflitam o seu propósito.
- **Evite variáveis globais:** Variáveis globais podem causar conflitos e tornar o código mais difícil de manter.
- **Use ``const`` sempre que possível:** Se o valor de uma variável não precisa mudar, declare-a como const.
- **Indentação:** Utilize indentação para melhorar a legibilidade do seu código.

## Em resumo:

As variáveis são fundamentais para a programação em JavaScript. Elas permitem que você armazene e manipule dados de forma eficiente. Ao entender os diferentes tipos de variáveis, seus escopos e as melhores práticas para utilizá-las, você estará mais preparado para criar programas JavaScript robustos e bem estruturados.
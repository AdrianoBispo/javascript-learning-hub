# Operadores em JavaScript

Os operadores em JavaScript são símbolos especiais que permitem realizar diversas operações com valores, como números, strings e outros tipos de dados. Eles são essenciais para construir expressões e realizar cálculos em seus programas.

## Operadores Aritméticos

São utilizados para realizar operações matemáticas básicas:

**Adição:** ``+`` (Exemplo: ``5 + 3``)
**Subtração:** ``-`` (Exemplo: ``10 - 4``)
**Multiplicação:** ``*`` (Exemplo: ``2 * 6``)
**Divisão:** ``/`` (Exemplo: ``15 / 3``)
**Módulo (resto da divisão):** ``%`` (Exemplo: ``10 % 3``)
**Incremento:** ``++`` (Exemplo: ``x++``)
**Decremento:** ``--`` (Exemplo: ``y--``)

## Operadores de Comparação

São utilizados para comparar valores e retornar um valor booleano (true ou false):

**Igual:** == (Exemplo: ``5 == 5``)
**Diferente:** != (Exemplo: ``3 != 5``)
**Estritamente igual:** === (Compara valor e tipo) (Exemplo: ``5 === '5'``)
**Estritamente diferente:** !== (Compara valor e tipo) (Exemplo: ``5 !== '5'``)
**Maior que:** > (Exemplo: ``10 > 5``)
**Menor que:** < (Exemplo: ``3 < 7``)
**Maior ou igual:** >= (Exemplo: ``5 >= 5``)
**Menor ou igual:** <= (Exemplo: ``3 <= 7``)

## Operadores Lógicos

São utilizados para combinar expressões booleanas:

**E:** ``&&`` Ambas as expressões devem ser verdadeiras(Exemplo: ``true && false``);
**Ou:** ``||`` Pelo menos uma das expressões deve ser verdadeira(Exemplo: ``true || false``);
**Negação:** ``!`` Inverte o valor booleano(Exemplo: ``!true``).

## Operadores de Atribuição

São utilizados para atribuir valores a variáveis:

**Atribuição simples:** ``=``(Exemplo: ``x = 5``)
**Atribuição com operação:** ``+=``, ``-=``, ``*=``, ``/=``, ``%=``, ``**=``(Exemplo: ``x += 3`` é o mesmo que ``x = x + 3``)

### Exemplo:

``` JavaScript

let x = 10;
let y = 5;

// Operadores aritméticos
let soma = x + y;
let subtracao = x - y;

// Operadores de comparação
let maiorQue = x > y;
let igual = x == y;

// Operadores lógicos
let e = maiorQue && igual;
let ou = maiorQue || igual;

// Operadores de atribuição
x += 2; // x agora vale 12

```

## Quando usar cada tipo de operador:

**Aritméticos:** Para realizar cálculos matemáticos.
**Comparação:** Para comparar valores e tomar decisões em estruturas condicionais (if, else).
**Lógicos:** Para combinar condições e criar expressões mais complexas.
**Atribuição:** Para atribuir valores a variáveis.

## Observações:

A ordem de precedência dos operadores é importante, assim como em matemática. Você pode usar parênteses para alterar a ordem de avaliação. A conversão de tipos implícita pode ocorrer em algumas operações, como quando você compara um número com uma string.

### Exemplo com todos os tipos de operadores:

``` JavaScript

let idade = 25;
let nome = "João";
let maiorDeIdade = idade >= 18;

if (maiorDeIdade && nome === "João") {
  console.log("João é maior de idade e seu nome é João");
} else {
  console.log("Condição não atendida");
}

```

### Para aprofundar seus conhecimentos:

MDN Web Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
W3Schools: https://www.w3schools.com/js/js_operators.asp
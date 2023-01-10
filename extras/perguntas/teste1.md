# 1️⃣ Teste JavaScript

## Variavéis e Operações

### 1️) Responda as seguintes perguntas

- O que é uma variável e para que serve?

- Qual é a diferença entre declarar e iniciar uma variável?

- Qual é a diferença entre somar números e concatenar strings?

- Qual operador me permite adicionar ou concatenar?

## Funções

### 1) Responda as seguintes preguntas

- O que é uma função e para que serve?

- Quando é útil para mim usar uma função no meu código?

- Qual é a diferença entre parâmetros e argumentos de uma função?

### 2) Converta o seguinte código em uma função, mas, alterando quando necessário as variáveis ​​constantes para parâmetros e argumentos em uma função

``` js

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

```

## Condicionais

### 1) Responda as seguintes preguntas

- O que é uma estrutura condicional? Para que serve?

- Que tipos de condicionais existem em JavaScript e quais são suas diferenças?

- Posso combinar funções e condicionais? Se sim, como?

### 2) Replique o comportamento do código a seguir que usa a instrução switch usando if, else e else if

```js

const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

console.log(tipoDeSuscripcion);
```

### 3️) Replique o comportamento de sua condicional anterior com if, else e else if, mas agora apenas com if (no else ou else if)

> 💡 Bônus: Se você já é um expert na linguagem, te desafio a comentar como replicar esse comportamento com arrays e uma única condicional. 😏

## Laços de Repetição

### 1) Responda as seguintes preguntas

- O que é um laço de repetição? Para que serve?

- Quais são os tipos de laços de repetição existentes no JavaScript? Quais são as diferenças?

- O que é um laço de repetição infinito? Por que ele é um problema?

- Posso mesclar laços de repetição e condicionais?

### 2) Replique o comportamento dos seguintes "loops for" utilizando "loops while"

```js

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

```

### 3) Escreva um código JavaScript que pergunte aos usuários quanto é `2 + 2`. Se a resposta for correta, imprima uma mensagem de parabéns, mas se a resposta for errada, recomeçamos

> 💡 Dica: Podes usar a função prompt do JavaScript.

## Listas

### 1️) Responda as seguintes perguntas

- O que é uma array? Para que serve?

- O que é um objeto? Para que serve?

- Quando é melhor usar objetos ou arrays?

- Posso mesclar arrays com objetos ou até mesmo objetos com arrays?

### 2️) Crie uma função que pode receber qualquer array como parâmetro e imprimir seu primeiro elemento

### 3️) Crie uma função que possa receber qualquer array como parâmetro e imprima todos os seus elementos um a um (não é válido imprimir o array inteiro)

### 4️) Crie uma função que possa receber qualquer objeto como parâmetro e imprima todos os seus elementos um a um (não é válido imprimir o objeto inteiro)

### Quais são os tipos de escopos do JavaScript?

### Qual o metódo chamamos para saber o index de um elemento de uma array?

### Por que dizemos que  o JavaScript é uma linguagem dinâmica?

### Como podemos criar notas e comentários em nosso javascript?

### 

